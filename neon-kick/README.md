# Neon Kick

**Developer:** Akash · **Co-developer:** Claude Code

Arcade 5-a-side football (soccer) for a game controller, keyboard or touch screen. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. Press any button on your controller so the browser detects it.

On a phone or tablet, hold it sideways and tap. On-screen controls appear once you touch the screen, and they hide again when you use a keyboard or controller.

## Modes

- **Match vs CPU**: two 90-second halves, you (cyan) against the computer (pink). Each team has a keeper and 4 outfield players. A draw at full time can be decided on penalties. Your win/draw/loss record is saved.
- **Penalty Shootout**: five kicks each, then sudden death. You take your kicks and keep goal for the CPU's.
- **Difficulty** (Easy / Normal / Hard) changes the CPU's speed, tackling, passing, shooting, and how well its keeper reads your penalties.

## Controls

| Action | Controller | Keyboard | Touch |
|---|---|---|---|
| Move | Left stick / D-pad | W A S D / arrows | Stick: put your thumb anywhere on the left side |
| Pass (with the ball) | A / ✕ | J | **PASS** |
| Shoot: hold for power | B / ○ (or X / □) | K or Space | Hold **SHOOT**, let go to shoot |
| Slide tackle (without the ball) | B / ○ (or X / □) | K or Space | **TACKLE** (the SHOOT button) |
| Switch player (without the ball) | A / ✕ or LB / L1 | J or Q | **SWITCH** (the PASS button) |
| Sprint (uses stamina) | RB / R1 or RT / R2 | Shift or L | Push the stick right to its edge |
| Pause | Start / Options | Esc | Pause button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

On a touch screen the two right-hand buttons change their label with the situation: PASS and SHOOT when you have the ball, SWITCH and TACKLE when you don't. Menus work by tapping an option.

## Tips

- You control the player with the white ring and arrow. Your teammates and both keepers are AI.
- The ball sits in front of the dribbler. Face away from a defender to shield it, because anyone who runs into the ball can win it.
- When shooting, hold the stick up or down to aim for a corner. A full-power shot is hard to catch, but it's less accurate.
- **Taking a penalty:**
  - Aim with ↑ ↓ (touch: the stick), hold the shoot button, and release.
  - Release in the green part of the power bar.
  - The red part is over-hit and can sail over the bar.
  - Taking too long makes your aim wobble.
- **Keeping goal:**
  - Pick a side with ↑ ↓ and press A or B to dive.
  - With no direction, you stay big in the middle.
  - On a touch screen, tap **DIVE ▲**, **STAY** or **DIVE ▼** on the right. The stick shuffles the keeper along the line.
  - Watch the kicker's run-up: they often approach from the side opposite their shot.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (half length, speeds, pass and shot power, difficulty levels) are in `CFG` and `DIFF` at the top of the script.
