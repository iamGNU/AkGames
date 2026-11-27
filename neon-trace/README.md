# Neon Trace

**Developer:** Akash · **Co-developer:** Claude Code

A calm one-line drawing puzzle in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no timer, no move limit and no way to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Each figure is a set of dots joined by straight lines. Draw **every line exactly once** in one unbroken path, starting from any dot. You can't draw a line twice or jump to a dot that isn't joined to yours.
- Each line you draw lights up, and the colours shift as the figure fills. Finish it and the whole figure pulses with a soft chord and a shimmer of sparkles.
- Lift your finger or stop whenever you like: your line stays where it is.
- **Undo** takes back one line. **Reset** clears the figure, and an Undo straight after a Reset brings your line back.
- **Stuck?** If there's no line left from your dot, Undo and Reset glow. Nothing is ever lost.
- **Hint** first shows a good dot to start from, then the next line to draw. If your line can no longer finish, it tells you how many steps to undo, or that you need a different start dot.
- **Start dots** (an option on the menu) makes the dots where a full line can begin glow. It's off by default to keep a little challenge.
- Tip: if a dot has an odd number of lines, the drawing has to start or finish there.

## Levels

- Figures are generated and endless. They grow from 5–6 lines at level 1 to 25–35 lines from level 31 onward.
- Each level number always gives the same figure. Your level is saved, and so is a half-drawn figure, so **Continue** picks up exactly where you left off.
- Figures come in three kinds: mirror-symmetric, half-turn (pinwheel) symmetric, and free-form. Each one is checked to make sure it looks balanced and can be solved.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Choose a start dot | D-pad / left stick, then A / ✕ | Arrows, then Space or Enter | Press a dot |
| Draw a line | Point the stick or D-pad at a line (it shows dashed), then A / ✕ | Arrows, Q E Z C for diagonals, or the numpad | Drag through the dots, or tap the next dot |
| Undo one line | B / ○ | U or Backspace | Drag back one dot, tap the previous dot, or the Undo button |
| Hint | Y / △ | H | Hint button |
| Reset the figure | X / □ | R | Reset button |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

With a controller, the line straight ahead is aimed for you after each move, as is the only line left from a dot. That makes long straight runs just A, A, A. All the menus work with any of these inputs: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values are in `CFG` at the top of the script: lines per figure, how fast levels grow, dot spacing, the hit radius for fingers, the celebration time and the trail colours.
