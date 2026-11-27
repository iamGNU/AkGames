# Neon Breach

**Developer:** Akash · **Co-developer:** Claude Code

A simple first-person shooter in neon. It's one HTML file: no install, no downloads, no internet, and no 3D library. It uses a classic raycasting renderer on a plain 2D canvas, so it runs smoothly on old laptops.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. Press any button on your controller so the browser detects it. With a mouse, click the game once to capture the mouse for aiming.

## Goal

Each level is a small neon maze. Destroy every enemy to open the **exit portal**, then walk into it.

There are 5 levels. Clearing one unlocks the next, and you can replay any level you've reached from the menu. Your best time for each level is saved.

## Controls

| Action | Controller | Keyboard + mouse |
|---|---|---|
| Move / strafe | Left stick | W A S D (↑ ↓ also move) |
| Look / turn | Right stick | Mouse (click to capture), or ← → / Q E |
| Shoot (hold) | RT / R2 or RB / R1 | Left click, Space or J |
| Sprint | LB / L1 or click the left stick | Shift |
| Map on/off | Y / △ | Tab or F |
| Pause | Start / Options | Esc or P |
| Sound on/off | Back / Create | M |

On a controller, aiming has light assistance: the shot is a little forgiving, and turning slows slightly while your crosshair is on an enemy. You only aim left and right (there's no looking up or down), so the right stick is all you need. **Look speed** in the menu changes how fast you turn.

## Enemies

| Enemy | Looks like | Behaviour |
|---|---|---|
| Drone | Red orb | Rushes you and zaps at close range (3 hits) |
| Sentry | Purple diamond | Keeps its distance and fires pink shots; it glows just before firing (3 hits) |
| Brute | Orange cube | Slow and tough (6 hits), hits hard |
| The Core | Big magenta hexagon | Final boss on level 5: fires spreads of shots and calls in drones, which shut down when it's destroyed |

## Tips

- Keep strafing sideways to dodge pink shots.
- Green crosses restore 40 health.
- Red arcs around the crosshair show which direction damage came from.
- The minimap (top right) shows the walls, health packs and, once it opens, the exit.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` to use fewer rays on very weak machines.
- Levels are plain text maps in `LEVELS` near the top of the script. `#` `%` `&` `$` are walls in different colours, `P` is the start, `E` is the exit, `D` `S` `B` `C` are enemies and `H` is health. Tuning values are in `CFG` and `ETYPE`.
