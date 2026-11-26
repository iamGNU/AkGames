# Neon Kick

**Developer:** Akash · **Co-developer:** Claude Code

Arcade 5-a-side football (soccer) for a game controller. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. Press any button on your controller so the browser detects it.

## Modes

- **Match vs CPU**: two 90-second halves, you (cyan) against the computer (pink). Each team has a keeper and 4 outfield players. A draw at full time can be decided on penalties. Your win/draw/loss record is saved.
- **Penalty Shootout**: five kicks each, then sudden death. You take your kicks and keep goal for the CPU's.
- **Difficulty** (Easy / Normal / Hard) changes the CPU's speed, tackling, passing, shooting, and how well its keeper reads your penalties.

## Controls

| Action | Controller | Keyboard |
|---|---|---|
| Move | Left stick / D-pad | W A S D / arrows |
| Pass (with the ball) | A / ✕ | J |
| Shoot: hold for power | B / ○ (or X / □) | K or Space |
| Slide tackle (without the ball) | B / ○ (or X / □) | K or Space |
| Switch player (without the ball) | A / ✕ or LB / L1 | J or Q |
| Sprint (uses stamina) | RB / R1 or RT / R2 | Shift or L |
| Pause | Start / Options | Esc |
| Sound on/off | Back / Create | M |

## Tips

- You control the player with the white ring and arrow. Your teammates and both keepers are AI.
- The ball sits in front of the dribbler. Face away from a defender to shield it, because anyone who runs into the ball can win it.
- When shooting, hold the stick up or down to aim for a corner. A full-power shot is hard to catch, but it's less accurate.
- **Taking a penalty:**
  - Aim with ↑ ↓, hold the shoot button, and release.
  - Release in the green part of the power bar.
  - The red part is over-hit and can sail over the bar.
  - Taking too long makes your aim wobble.
- **Keeping goal:**
  - Pick a side with ↑ ↓ and press A or B to dive.
  - With no direction, you stay big in the middle.
  - Watch the kicker's run-up: they often approach from the side opposite their shot.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (half length, speeds, pass and shot power, difficulty levels) are in `CFG` and `DIFF` at the top of the script.
