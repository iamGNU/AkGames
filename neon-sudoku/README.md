# Neon Sudoku

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm number puzzle in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no clock unless you want one, no mistake limit and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Fill the 9 × 9 grid so every row, column and 3 × 3 box holds each number from 1 to 9 exactly once.
- Every puzzle is made fresh in your browser and has **exactly one answer**. A solver checks this each time.
- **Notes:** turn notes on to jot small candidate numbers in a cell. When you place a number, that number disappears from the notes in the same row, column and box.
- **Helpers:**
  - The selected cell's row, column and box are softly lit.
  - Every cell with the same number glows.
  - The number pad shows how many of each number are left.
- **Show conflicts** (on by default) softly marks numbers that clash in a row, column or box. It never says whether a number is "wrong", only when two are the same.
- **Undo** has no limit and can even take back a restart. **Erase** clears a cell.
- **Hint** fills one correct number with a gentle glow. It picks a cell you could work out next (the nearest one to you), and says why.
- When the last number goes in, a soft ripple of light washes across the board.
- Your board saves itself, and **Continue** on the title takes you back to it. The number of puzzles you've solved at each difficulty is saved too.

## Difficulty

| Difficulty | Numbers given | Notes |
|---|---|---|
| Gentle | 46–50 | Every step is a simple one (no guessing) |
| Easy | 38–42 | Still only simple steps |
| Medium | 31–35 | A little more thinking |
| Hard | 25–29 | Few numbers given. Take your time |

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Choose a cell | D-pad / left stick | Arrows / W A S D | Click or tap it |
| Place a number | LB / RB choose it, A places it | 1 – 9 | Tap it on the number pad |
| Pick a printed number | A on it | – | Tap it on the pad |
| Notes on/off | X / □ | N | Notes button |
| Erase | B / ○ | 0, Backspace or Delete | Erase button |
| Undo | LT / L2 | U or Z | Undo button |
| Hint | Y / △ | H | Hint button |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

On a controller, the chosen number glows on the pad and every cell holding it lights up. Pressing A on a cell that already shows that number takes it out again.

All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (clue counts per difficulty, the puzzle-making time budget per frame, save timing, animation times, colours) are in `CFG` and `DIFF` at the top of the script.
