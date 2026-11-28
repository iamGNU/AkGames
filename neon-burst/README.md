# Neon Burst

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm bubble-popping game in neon. Aim the launcher, bounce shots off the walls, and pop groups of matching bubbles. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There are no timers, and the Relax mode never ends, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- A field of glowing bubbles hangs from the top. Each kind has its own colour and its own symbol inside (ring, diamond, triangle, square, plus, star), so they're easy to tell apart.
- Aim the launcher and shoot. A shot bounces off the side walls and sticks where it touches the field.
- A dotted guide shows the path through the first wall bounce, and a faint ghost bubble shows exactly where the shot will land.
- When 3 or more bubbles of the same colour touch, they pop one after another with rising chimes.
- Bubbles that are no longer connected to the top fall away and give bonus points.
- You see the current bubble and the next one, and you can swap them. You're only given colours that are still on the field.

## Modes

- **Relax:** nothing ever pushes down. Clear the field and a fresh one drifts in. If the bubbles ever reach the line, the lowest rows simply drift away. Your highest Relax score is saved.
- **Classic:** after every 6 shots that pop nothing, a new row pushes down from the top. Clear the field to go up a level. The round ends calmly when the bubbles cross the line. Your best score and best level are saved.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Aim | Left stick / D-pad | ← → or A D | Point (mouse), or drag in the field (touch) |
| Fine aim | Right stick | Shift + ← → | Swipe along the strip at the bottom of the field |
| Shoot | A / ✕ | Space, Enter or ↑ | Click, or lift your finger (or tap the launcher) |
| Swap | X or Y / □ or △ | S, Tab or ↓ | Click or tap NEXT or the ⇄ button |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

On a touch screen, drag down into the bottom strip before you lift your finger to cancel a shot. All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (shot speed, misses per row, points, field sizes, aim speeds, animation times, bubble colours) are in `CFG` and `BUBBLES` at the top of the script.
