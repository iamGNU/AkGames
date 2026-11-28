# Neon Sort

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm colour-sorting puzzle in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no timer, no move limit and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Glass tubes hold up to 4 glowing balls. Move the top ball onto a tube with the same colour on top, or into an empty tube.
- Balls of the same colour sitting together on top travel together, as many as fit.
- A tube is done when it holds 4 balls of one colour. It sparkles, chimes softly and is sealed.
- Sort every colour to finish the level. A gentle card shows your moves, then the next level is ready.
- Every ball has a small symbol as well as a colour (♥, ★, ▲, ◆ and more), so colours are easy to tell apart. Turn the symbols off with **Symbols** on the menu.

## Levels

- Levels are endless. They start with 3 colours and grow slowly to 12. Above 7 tubes, the tubes sit in two rows.
- Each level is dealt from its own seed, so level N is always the same puzzle. A built-in solver checks every deal before you see it, so **every level can be solved** and no level starts already sorted.
- Your level, your highest level and how many you've solved are saved. **Continue** picks up where you left off. **Restart from level 1** asks you to press it twice, and your record is kept.

## Helpers

- **Undo:** as often as you like, all the way back to the deal.
- **Restart:** goes back to the deal. Undo brings your moves back if you change your mind.
- **Hint:** the solver suggests a good next move and shows it with a dashed arrow. Following hints always finishes the level. If you're in a spot with no way through, it gently says so and suggests Undo, or the extra tube if that would help.
- **+ Tube:** one extra empty tube per level. It stays through Undo and Restart.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Choose a tube | D-pad / left stick | Arrows / W A S D, or 1–9 and 0 (Shift for 11+) | – |
| Lift / drop a ball | A / ✕ | Space or Enter (or the tube's number) | Tap a tube, then where it should go, or drag the ball onto a tube |
| Put it back | B / ○ | Esc | Tap it again |
| Undo | LB / L1 | U or Z | Undo button |
| Hint | Y / △ | H | Hint button |
| Extra tube | X / □ | X or E | + Tube button |
| Restart level | Pause menu | R | Restart button |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

With a controller or keyboard, a lifted ball hovers over whichever tube the cursor is on, and tubes it can go into glow green. All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (balls per tube, colour steps per level, solver limits, animation times, layout, ball colours and symbols) are in `CFG` and `BALLS` at the top of the script.
