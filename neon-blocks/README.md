# Neon Blocks

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

A calm block puzzle. Drop pieces onto an 8×8 board, and fill whole rows or columns to clear them. There's no timer and nothing falls, so take your time. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. It works with a controller, keyboard, mouse or touch screen.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. If you use a controller, press any button on it so the browser detects it.

## Modes

- **Classic**: the game ends when none of your three pieces fits anywhere on the board.
- **Relax**: friendlier pieces, plus 3 **New pieces** swaps per game. A swap replaces your tray with fresh pieces when you're stuck, so you can keep going.

Your best score for each mode is saved, even if you quit a game early.

## How it works

- You get three pieces at a time. Place them anywhere they fit, in any order. When all three are placed, three new ones arrive.
- Pieces don't rotate.
- A full row or column clears. Clearing several at once scores a bigger bonus.
- Clear again within 3 pieces to keep your **streak** going. Each clear in a streak is multiplied (×2, ×3 … up to ×8).
- Emptying the whole board gives a bonus.
- While you hold a piece, rows and columns it would complete light up. If the piece doesn't fit where it is, it turns pink.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Choose a piece | LB / RB or D-pad | 1 2 3 or ↑ ↓ | Press on a piece |
| Pick it up | A / ✕ | Space or Enter (1 2 3 also pick up) | It lifts as you press |
| Move it | Left stick / D-pad | Arrows / W A S D | Drag it |
| Place it | A / ✕ | Space or Enter | Let go over the board |
| Put it back | B / ○ | Esc | Let go off the board |
| Switch the held piece | LB / RB | Q / E | — |
| New pieces (Relax) | Y / △ | R | **New pieces** button |
| Pause | Start / Options | P or Esc | **II** button, top right |
| Sound on/off | Back / Create | M | **Sound** in the menus |

On a touch screen, the piece floats a little above your finger so you can see where it's going. You can also tap a piece and then tap the board.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (scoring, streak window, number of swaps, how kind the piece generator is) are in `CFG` at the top of the script. The piece shapes and colours are in `FAMILIES` and `PALETTE`.
