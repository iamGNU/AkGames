# Neon Match

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm gem-matching game in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There are no timers and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Swap two neighbouring gems to line up 3 or more of the same kind in a row or column. Each kind has its own colour and its own shape.
- Matched gems pop, the gems above drift down and new ones fall in. A new line can set off a cascade. Each step of a cascade scores more and chimes a little higher.
- **Line gem:** match 4 in a row, or make an L or T shape. When a Line gem is matched, it clears its whole row or column (its arrows show which).
- **Nova:** match 5 in a row. Swap it with any gem to clear every gem of that colour. Swap two Novas together to clear the whole board.
- A swap that makes no match drifts back and costs nothing.
- If no moves are left, the board reshuffles itself. Rest for about 6 seconds and a hint glows on a good swap.

## Modes

- **Zen:** endless, with no move limit and nothing to lose. Your level rises as your score grows, and your highest Zen score is saved.
- **Moves:** 30 moves to make your best score. Your best is saved and shown on the title screen.
- **Pace** (Relaxed / Normal / Quick) sets how fast gems swap, pop and fall.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor | D-pad / left stick | Arrows / W A S D | – |
| Pick up a gem | A / ✕ | Space or Enter | Click or tap it |
| Swap it | Push a direction | Press an arrow | Drag or swipe it onto a neighbour, or tap the neighbour |
| Put it down | B / ○ | Esc | Tap it again |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (moves per game, hint delay, points, Zen level steps, animation times, gem colours) are in `CFG` and `GEMS` at the top of the script.
