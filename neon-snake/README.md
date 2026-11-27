# Neon Snake

**Developer:** Akash · **Co-developer:** Claude Code

A calm, glowing take on the classic snake game for all ages. Play it with a game controller, a keyboard, a mouse or a touch screen. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. If you use a controller, press any button on it so the browser detects it.

## Modes

- **Calm** (the default): there's no way to lose.
  - The edges wrap around, so leaving one side brings you back on the other.
  - Crossing your own body just trims the tail off at that point.
  - Your score is your current length. The snake slowly changes colour as it grows.
- **Classic**: the walls and your own body end the run.
  - The snake speeds up very slightly as it grows.
  - A short end card shows your length and your best, with Play again ready to go.
- **Speed** (Slow / Normal / Fast) sets how fast the snake glides in both modes. Slow is very relaxed.

The best length for each mode, the total orbs eaten and your speed choice are saved in the browser.

## Controls

| Action | Controller | Keyboard | Touch / mouse |
|---|---|---|---|
| Steer | D-pad / left stick | Arrows / W A S D | Swipe anywhere, or tap/click beside the head |
| Start moving | Any direction or A / ✕ | Any direction, Enter or Space | Swipe or tap |
| Pause | Start / Options | Esc or P | Pause button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |
| Menus | D-pad / stick, A / ✕ select, B / ○ back | Arrows, Enter, Esc | Tap or click a choice |

## Tips

- Up to two quick presses are remembered, so you can make tight U-turns. Pressing straight backwards is ignored.
- With a mouse or a finger tap, tap on the side of the head you want to turn toward. While you're moving sideways, tap above or below the head. While you're moving up or down, tap left or right of it.
- Eat orbs quickly one after another and the chime climbs a little higher each time.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (speeds, the Classic speed-up, starting length, swipe distance, colours) are in `CFG` at the top of the script.
