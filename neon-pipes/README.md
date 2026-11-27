# Neon Pipes

**Developer:** Akash · **Co-developer:** Claude Code

A calm tile-turning puzzle in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There are no timers, no move limits and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- The board is a square of pipe tiles: ends (little lamps), straights, corners and T pieces. One tile holds a glowing **source**.
- Turn the tiles until every pipe joins one network with no open ends. Light flows outward from the source as pipes connect, so lit pipes glow and the rest stay dim. Any layout that joins everything with no open ends counts.
- When the network is complete, a pulse of light runs through it with a soft chord.
- **Lock** a tile you're sure of so it can't turn by accident. Warm corner marks show your locks.
- **Hint** turns one wrong tile the right way, starting nearest the source, and locks it with marks in the level's colour.
- **Undo** is unlimited and covers turns, locks, hints and restarts. **Restart** puts the level back to how it began, and Undo brings it back.
- Levels go from 4 × 4 up to 8 × 8, and later ones mix 7 × 7, 8 × 8 and 9 × 9. The game is endless, and your level and the board in progress are saved after every move.
- The move count is shown softly. Nothing depends on it.

## Wrap edges

**Wrap edges** (title menu, off by default) is for experts. Pipes may run off one side of the board and come back on the other. A dashed border and small stubs at the edges show where that happens. Wrap levels have their own progress.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor | D-pad / left stick | Arrows / W A S D | – |
| Turn a tile clockwise | A / ✕ | Space or Enter | Click or tap it |
| Turn it back | B / ○ | Shift + Space | – |
| Lock / unlock | Y / △ | L | Hold it, or right-click |
| Hint | X / □ | H | Hint button (left) |
| Undo | LB / L1 | U or Z | Undo button (left) |
| Restart level | Pause menu | R | Restart button (left) |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it. "Restart from level 1" on the title menu asks a second time before it resets anything.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (board size per level, tile size, long-press time, animation times, colours) are in `CFG` and `TINTS` at the top of the script.
