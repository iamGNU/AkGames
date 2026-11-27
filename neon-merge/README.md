# Neon Merge

**Developer:** Akash · **Co-developer:** Claude Code

A calm drop-and-merge puzzle for all ages. Drop glowing orbs into a jar, and when two of the same kind touch they merge into a bigger one, with a soft chime. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. It works with a controller, a keyboard, a mouse or a touch screen.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. With a controller, press any button so the browser detects it. Click or tap once to turn the sound on.

## Modes

- **Classic**: merge as much as you can. If orbs rest above the jar's rim for 2 seconds, the jar is full and the round ends calmly with your score. Your best score is saved.
- **Zen**: there's no ending. When the jar gets full, its top part gently clears and you carry on.

There are no timers. Drops have a short pause (0.4 s) between them, so you can take your time.

## The orbs

Spark → Glint → Wisp → Bloom → Pearl → Tide → Halo → Lumen → Nova → Star

Only the five smallest are ever dropped. Two the same make the next one, and bigger merges score more. Two Stars meet in a starburst, then both float away to make room.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Aim | Left stick / D-pad ← → | ← → or A D | Move the mouse / drag your finger |
| Drop | A / ✕ (also X / □ or D-pad ↓) | Space, Enter or ↓ | Click / lift your finger |
| Pause | Start / Options | Esc or P | Pause button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |
| Menus | D-pad / stick, A select, B back | Arrows, Enter, Esc | Click or tap an item |

The dotted line under the dropper shows where the orb will land.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (drop odds, the rim timer, Zen clear amount, physics) are in `CFG` at the top of the script, and the orbs (names, sizes, colours) are in `TIERS`.
