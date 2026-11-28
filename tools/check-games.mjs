#!/usr/bin/env node
// Checks that every game in Zuzu follows the collection's rules, and that each one is
// listed on the game picker, in the README and in the offline list. No packages needed.
//
//   node tools/check-games.mjs
//
// It runs on every pull request too. It catches common slips; a person still plays and
// reviews every game before it is merged.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE = 'game-template';
const MAX_BYTES = 1024 * 1024;
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const problems = new Map(); // folder -> list of problems
const report = (where, msg) => { if (!problems.has(where)) problems.set(where, []); problems.get(where).push(msg); };

// Every top-level folder with an index.html in it is a game (the template is checked as one too).
const games = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(ROOT, d.name, 'index.html')))
  .map(d => d.name)
  .sort();

// Things a game must never do: talk to the internet, load code, or touch the shared offline storage.
const FORBIDDEN = [
  [/\bfetch\s*\(/, 'fetch() (games must work offline, with no network requests)'],
  [/XMLHttpRequest|\bWebSocket\b|\bEventSource\b|sendBeacon|RTCPeerConnection/, 'network APIs (games must work offline)'],
  [/\bimport\s*\(|importScripts|\beval\s*\(|new\s+Function\b|setTimeout\s*\(\s*['"`]|setInterval\s*\(\s*['"`]/, 'code loaded or built at run time (import(), eval, new Function, string timers)'],
  [/document\.write|document\.cookie|window\.open\s*\((?!\s*CREDITS\.profile\b)|\bopen\s*\(\s*['"`]http/, 'document.write, cookies or pop-up windows (a credits link may open CREDITS.profile)'],
  [/\bcaches\.|indexedDB|localStorage\.clear\s*\(|sessionStorage\.clear\s*\(/, 'the shared offline cache, indexedDB, or clearing storage (other games keep their saves there)'],
  [/<iframe|<object|<embed|<base\b|<form\b|<audio[^>]*src=|<video[^>]*src=|<img[^>]*src=["']?(?!data:)/i, 'iframes, forms, or media files (draw on the canvas or use data: URLs, and WebAudio for sound)'],
  [/@import|\burl\(\s*['"]?(?!data:|#)/, 'CSS that loads other files'],
  [/location\.href\s*=\s*['"`](?!\.\.\/index\.html)/, 'navigation to anywhere except ../index.html'],
];
const ALLOWED_LINKS = new Set([
  '<link rel="manifest" href="../manifest.webmanifest">',
  '<link rel="icon" type="image/png" href="../icons/icon-192.png">',
  '<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">',
]);
const SW_LINE = "navigator.serviceWorker.register('../sw.js', { scope: '../' })";

for (const g of games) {
  const where = g + '/';
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(g)) report(where, 'folder name: use lowercase letters, numbers and hyphens, like "neon-comet"');

  const files = fs.readdirSync(path.join(ROOT, g));
  const extra = files.filter(f => f !== 'index.html' && f !== 'README.md');
  if (extra.length) report(where, `only index.html and README.md belong in the folder; also found: ${extra.join(', ')}`);
  if (!files.includes('README.md')) report(where, 'add a README.md: what the game is and how to play it');

  const file = path.join(g, 'index.html');
  const bytes = fs.statSync(path.join(ROOT, file)).size;
  if (bytes > MAX_BYTES) report(where, `index.html is ${(bytes / 1024).toFixed(0)} KB; keep it under 1 MB`);
  const html = read(file);

  if (!/^<!doctype html>/i.test(html.trimStart())) report(where, 'index.html must start with <!doctype html>');
  if (!/<meta name="viewport" content="width=device-width, initial-scale=1">/.test(html)) report(where, 'missing the viewport <meta> tag (needed on phones)');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!title.trim()) report(where, 'missing a <title>');
  const author = (html.match(/<meta name="author" content="([^"]*)">/) || [])[1] || '';
  if (!author.trim()) report(where, 'missing <meta name="author" content="Your Name"> (credit yourself)');
  if (g !== TEMPLATE) {
    if (title === 'Game Template') report(where, 'change the <title> to your game\'s name');
    if (/your name/i.test(author)) report(where, 'put your own name in <meta name="author">');
    if (/author:\s*'Your Name'/.test(html)) report(where, "put your own name in GAME.author");
  }

  // Exactly one script, written inline
  const scripts = html.match(/<script\b[^>]*>/gi) || [];
  if (scripts.length !== 1) report(where, `use exactly one <script> (found ${scripts.length})`);
  if (scripts.some(s => /\bsrc\s*=/i.test(s))) report(where, 'scripts must be inline, not loaded with src=');
  for (const l of html.match(/<link\b[^>]*>/gi) || []) {
    if (!ALLOWED_LINKS.has(l)) report(where, `unexpected <link>: ${l} (only the three app links from the template)`);
  }
  for (const l of ALLOWED_LINKS) if (!html.includes(l)) report(where, `missing the app link: ${l}`);

  // No internet: no URLs at all, apart from the SVG namespace and a LinkedIn profile for the credits
  const urls = (html.match(/(?:https?:)?\/\/[a-z0-9-]+\.[a-z0-9.-]+[^\s"'`)<]*/gi) || [])
    .filter(u => !/^https?:\/\/www\.w3\.org\//.test(u) && !/^https:\/\/www\.linkedin\.com\/in\/[\w-]+\/?$/.test(u));
  if (urls.length) report(where, `no web addresses allowed (the game must work offline): ${[...new Set(urls)].slice(0, 3).join(', ')}`);
  for (const [re, what] of FORBIDDEN) if (re.test(html)) report(where, `not allowed: ${what}`);
  const regs = html.match(/serviceWorker\.register\s*\(/g) || [];
  if (regs.length !== 1 || !html.includes(SW_LINE)) report(where, 'keep the offline line from the end of the template, exactly as it is, and register nothing else');

  // What every game needs
  const need = [
    [/['"]\.\.\/index\.html['"]/, 'an All Games menu item that goes to ../index.html'],
    [/getGamepads/, 'controller support (navigator.getGamepads)'],
    [/addEventListener\(\s*['"]keydown['"]/, 'keyboard support (a keydown listener)'],
    [/addEventListener\(\s*['"]pointerdown['"]/, 'mouse and touch support (a pointerdown listener)'],
    [/<div id="turn">/, 'the "turn your phone sideways" hint (<div id="turn">)'],
    [/navigator\.wakeLock/, 'the keep-the-screen-on block from the end of the template'],
    [/requestFullscreen/, 'the full-screen block from the end of the template (phones go full screen on the first tap)'],
  ];
  for (const [re, what] of need) if (!re.test(html)) report(where, `missing ${what}`);
}

// Listings: picker card, README row, offline list
const picker = read('index.html'), readme = read('README.md'), sw = read('sw.js');
const swGames = [...((sw.match(/const GAMES = \[([\s\S]*?)\];/) || [])[1] || '').matchAll(/'([^']+)'/g)].map(m => m[1]);
for (const g of games) {
  if (g === TEMPLATE) continue;
  const where = g + '/';
  if (!picker.includes(`href="${g}/index.html"`)) report(where, `add a card to the game picker (index.html) that links to "${g}/index.html"`);
  if (!readme.includes(`](${g}/)`)) report(where, `add a row to a table in README.md that links to (${g}/)`);
  if (!swGames.includes(g)) report(where, `add '${g}' to the GAMES list in sw.js, so it works offline`);
}
for (const g of swGames) if (!games.includes(g)) report('sw.js', `GAMES lists '${g}', but there is no ${g}/index.html`);
for (const m of picker.matchAll(/<a class="card[^"]*" href="([^"]+)"/g)) {
  const href = m[1];
  if (/^https?:/.test(href)) continue;
  if (!fs.existsSync(path.join(ROOT, href))) report('index.html', `card links to ${href}, which does not exist`);
}
if (swGames.includes(TEMPLATE) || picker.includes(`href="${TEMPLATE}/`)) report(TEMPLATE + '/', 'the template is not a game: leave it out of the picker and sw.js');

const names = games.filter(g => g !== TEMPLATE);
if (!problems.size) {
  console.log(`All good: ${names.length} games and the template follow the rules.`);
  process.exit(0);
}
for (const [where, list] of problems) {
  console.log(`\n${where}`);
  for (const p of list) console.log(`  - ${p}`);
}
const n = [...problems.values()].reduce((a, l) => a + l.length, 0);
console.log(`\n${n} thing${n === 1 ? '' : 's'} to fix. The guide is CONTRIBUTING.md.`);
process.exit(1);
