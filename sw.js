// Zuzu's service worker: keeps every game playable offline.
// Online, files come fresh from the network (so updates show up straight away) and the
// saved copy is refreshed. Offline, or on a connection slower than 4 seconds, the saved copy is used.
'use strict';

const CACHE = 'zuzu-v1';
// Adding a game? Put its folder name in this list so it is saved for offline play.
const GAMES = [
  'neon-pop', 'neon-snake', 'neon-merge', 'neon-burst', 'neon-jigsaw', 'neon-memory',
  'neon-match', 'neon-blocks', 'neon-solitaire', 'neon-mahjong', 'neon-sudoku', 'neon-sort',
  'neon-pipes', 'neon-slide', 'neon-trace', 'neon-swarm', 'neon-kick', 'neon-breach', 'neon-drive',
];
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  ...GAMES.map(g => `./${g}/index.html`),
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => (k.startsWith('zuzu-') || k.startsWith('ak-games-')) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(respond(req));
});

async function respond(req) {
  const net = fetch(req).then(res => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
    }
    return res;
  });
  net.catch(() => {}); // handled below; don't report it twice
  try {
    const first = await Promise.race([net, new Promise(r => setTimeout(r, 4000, null))]);
    if (first) return first;
  } catch (err) { /* offline: use the saved copy */ }
  const saved = await caches.match(req, { ignoreSearch: true });
  return saved || net;
}
