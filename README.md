# Zuzu

*Made with love for Shubu, Tuktuk and Aryan.*

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

Small browser games to unwind with, for every age. Each game is a single HTML file, with no install and no internet needed. Play with a controller, keyboard, mouse or touch.

**Start here:** open `index.html` in Chrome or Firefox and pick a game. With a controller, press any button first so the browser detects it. Each game's menu has an **All Games** item that brings you back to the picker.

> **Enjoying Zuzu?** Share your experience with Akash on [LinkedIn](https://www.linkedin.com/in/iamGnu/). A comment, a post or a recommendation means a lot.
>
> **Add your favourite game!** Love a kind of game that isn't here yet? Build your own version and open a pull request: everyone is welcome, and there's a ready-made starter game to copy. See [Add your own game](#add-your-own-game) below.

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

## Add your own game

Zuzu is open to everyone. If there's a game you love to unwind with, make your own version and send it in, and it will appear here for everyone to play.

1. Fork this repository and copy [`game-template/`](game-template/). It's a tiny, complete game with menus, sound, and controller, keyboard, mouse and touch controls already working. You can [play it here](https://iamgnu.github.io/zuzu/game-template/).
2. Replace the example with your own game.
3. Add a card to the picker, a row to this README and your folder to `sw.js`, then run `node tools/check-games.mjs`.
4. Open a pull request. Every game is played and reviewed before it's merged.

The full guide is in [CONTRIBUTING.md](CONTRIBUTING.md). Can't code? [Suggest a game](https://github.com/iamGNU/zuzu/issues/new/choose), and someone may build it.

## On Android phones and tablets

Every game plays by touch. For the best experience, install Zuzu as an app:

1. Open https://iamgnu.github.io/zuzu/ in **Chrome**.
2. Tap **Install Zuzu as an app** at the top of the page. If the button isn't there, use Chrome's **⋮** menu → **Install app** (or **Add to Home screen**).

The app gets its own icon (a glowing box of games) on the home screen, opens full screen and sideways, and keeps working offline, because every game is saved on the phone. You can also just play in the browser; turn the phone sideways for a bigger view. Bluetooth controllers work too: pair the controller with the phone, then press any button in a game.

## Playing from your computer's files

If a browser won't detect the controller when you open the files directly, serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Licence

[MIT](LICENSE). Games added by contributors are shared under the same licence.
