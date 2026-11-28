# Neon Slide

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm sliding-tiles puzzle in neon. Slide every tile one way, and two equal numbers merge into their sum. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no timer and nothing harsh happens, and you can undo, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Each move slides every tile as far as it can in one direction.
- Two equal tiles that meet merge into their sum (2 + 2 = 4, 4 + 4 = 8 …), and your score goes up by the new tile's value. A tile merges at most once per move, so 2 2 2 2 becomes 4 4, not 8.
- After every move that changes the board, a new 2 appears in an empty cell (now and then a 4). A move that changes nothing just nudges the board softly, and no new tile appears.
- Every value has its own glowing colour. From 128 up, tiles get soft inner patterns; from 1024 up, they get sparkles and a brighter halo.
- Reach the goal tile for a gentle celebration, then **Keep going** or start a **New game**.
- When no moves are left, a calm "Board full" card shows your score. In Relax mode its first option is **Undo**.

## Boards and modes

- **Board:** 3×3 is short (goal 256), 4×4 is the classic size (goal 2048), and 5×5 is roomy and relaxed (goal 4096).
- **Relax:** unlimited undo.
- **Classic:** 3 undos per game.
- Your best score and biggest tile are saved for each board size. Your current game is saved when you pause, quit to the menu or close the page, and **Continue** on the title screen picks it up again, undo history included.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Slide the tiles | D-pad / left stick (one move per push) | Arrows / W A S D | Drag or swipe on the board |
| Undo a move | LB / L1 | U or Z | Undo button (left side) |
| Pause | Start / Options (or B) | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it. Holding a key, the D-pad or the stick never repeats a move.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (goal tiles, the chance of a 4, Classic undos, animation times, swipe distance, stick thresholds, tile colours) are in `CFG` and `TILE_COLORS` at the top of the script.
