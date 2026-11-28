# AK Games

**Developer:** Akash · **Co-developer:** Claude Code

19 small browser games to unwind with, for every age. Each game is a single HTML file, with no install and no internet needed. Play with a controller, keyboard, mouse or touch.

**Start here:** open `index.html` in Chrome or Firefox and pick a game. With a controller, press any button first so the browser detects it. Each game's menu has an **All Games** item that brings you back to the picker.

## Relax: gentle toys, no pressure

| Game | What it is |
|---|---|
| [Neon Pop](neon-pop/) | Endless bubble wrap to pop: a pure stress-relief toy |
| [Neon Snake](neon-snake/) | The classic, with a Calm mode where you can't lose |
| [Neon Merge](neon-merge/) | Drop glowing orbs into a jar; two of a kind merge into a bigger one |
| [Neon Burst](neon-burst/) | Aim and pop matching bubbles; Relax mode never pushes the ceiling down |
| [Neon Jigsaw](neon-jigsaw/) | Jigsaws of glowing generated art, from 12 to 70 pieces |
| [Neon Memory](neon-memory/) | Flip cards to find the pairs: tiny boards for kids, big ones for a challenge |

## Brain teasers: calm puzzles, no timers

| Game | What it is |
|---|---|
| [Neon Match](neon-match/) | Swap gems to line up three or more, with an endless Zen mode |
| [Neon Blocks](neon-blocks/) | Fit pieces onto a grid and clear rows and columns, with nothing falling |
| [Neon Solitaire](neon-solitaire/) | The classic patience card game, with unlimited undo, hints and auto-finish |
| [Neon Mahjong](neon-mahjong/) | Match pairs of free tiles from layered stacks; every deal can be solved |
| [Neon Sudoku](neon-sudoku/) | Number logic from Gentle to Hard, with notes and hints |
| [Neon Sort](neon-sort/) | Sort coloured balls into tubes until each holds one colour |
| [Neon Pipes](neon-pipes/) | Rotate tiles until every pipe connects and the network lights up |
| [Neon Slide](neon-slide/) | Slide tiles and merge equal numbers, one calm move at a time |
| [Neon Trace](neon-trace/) | Draw the whole shape in one line without going over any line twice |

## Action: for when you want to blow off steam

| Game | What it is |
|---|---|
| [Neon Swarm](neon-swarm/) | Twin-stick arena shooter: waves of enemies and a boss every 5th wave |
| [Neon Kick](neon-kick/) | Arcade 5-a-side football against the CPU, plus a penalty shootout mode |
| [Neon Breach](neon-breach/) | Simple first-person shooter: five neon levels and a boss |
| [Neon Drive](neon-drive/) | Road racing on three neon tracks: race five rivals, or cruise with no timer |

## On Android phones and tablets

Every game plays by touch. For the best experience, install AK Games as an app:

1. Open https://iamgnu.github.io/AkGames/ in **Chrome**.
2. Tap **Install AK Games as an app** at the top of the page. If the button isn't there, use Chrome's **⋮** menu → **Install app** (or **Add to Home screen**).

The app gets its own icon on the home screen, opens full screen and sideways, and keeps working offline, because every game is saved on the phone. You can also just play in the browser; turn the phone sideways for a bigger view. Bluetooth controllers work too: pair the controller with the phone, then press any button in a game.

## Playing from your computer's files

If a browser won't detect the controller when you open the files directly, serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
