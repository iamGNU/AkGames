# Neon Mahjong

**Developer:** Akash · **Co-developer:** Claude Code

A calm tile-pairing solitaire in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no clock and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Tiles are stacked in layers. Clear the board by picking two **free** tiles of the same kind. They glide away with a soft chime.
- A tile is free when nothing lies on top of it and its left or right side is open.
- Each of the 22 kinds has its own shape **and** its own colour (moon, leaf, wave, star, drop, flame and more), so they're easy to tell apart.
- **Every deal can be cleared.** Boards are built backwards from an empty table, so a way through always exists.
- **Hint** glows a matching pair that keeps the board clearable.
- **Undo** as often as you like, all the way back to the start (shuffles too).
- **No pairs left?** A gentle message shows and the tiles shuffle themselves into an arrangement that can still be cleared. You can also shuffle from the pause menu at any time.
- **Dim blocked** (on the menu, on by default) shades the tiles you can't pick yet.
- Clearing a board shows a calm card. Wins are saved per layout.

## Layouts

| Layout | Tiles | Layers | Feel |
|---|---|---|---|
| Terrace | 72 | 3 | gentle steps, the easiest |
| Bridge | 80 | 3 | two towers and a long span |
| Bloom | 84 | 4 | a flower with four petals |
| Lantern | 88 | 4 | a tall glowing lantern |

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor (free tiles only) | D-pad / left stick | Arrows / W A S D | – |
| Pick a tile | A / ✕ | Space or Enter | Click or tap it |
| Let go of it | B / ○ | Esc | Tap it again |
| Hint | Y / △ | H | Hint button |
| Undo | LB / L1 | U or Z | Undo button |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (hint glow time, shuffle and glide speeds, how many candidate deals are tried) are in `CFG` at the top of the script. Tile kinds are in `KINDS` and the layouts in `LAYOUT_DEFS`.
