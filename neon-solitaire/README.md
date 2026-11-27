# Neon Solitaire

**Developer:** Akash · **Co-developer:** Claude Code

Classic patience (Klondike rules) in calm neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no clock unless you want one, undo is unlimited, and nothing is ever lost, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Move all 52 cards up to the four foundations at the top, one per suit, from Ace up to King.
- In the seven columns, put each card on one a step higher in the other colour (red on white). Only a King, or a run that starts with a King, can fill an empty column. Hidden cards turn over by themselves when you clear what covers them.
- Tap the deck to draw. **Draw 1** (the relaxed default) turns one card at a time; **Draw 3** turns three. When the deck runs out, tap it to turn the drawn cards back over, as often as you like.
- **Undo** as many steps as you like, even back past a New deal or a Restart.
- **Hint** glows on a good move (or on the deck when drawing is the best idea) and says it in words.
- **Tap or double-click a card** to send it to the best spot: a foundation first, then a column.
- Once every card is face up and the deck is empty, the game finishes itself. When you win, the cards drift gently up the screen.
- If no helpful moves are left, a quiet card offers Undo, Restart this deal, New deal or Keep looking.

## Options (title screen)

- **Draw:** 1 card or 3 cards.
- **Suits:** 2 colours, or 4 colours (every suit its own colour, easier to tell apart).
- **Clock:** hidden or shown while you play. Best times are saved either way, along with games won.
- **Sound:** soft chimes on or off.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor | D-pad / left stick (up/down picks how deep in a column) | Arrows | – |
| Pick up / put down | A / ✕ | Space or Enter | Drag and drop |
| Send to the best spot | RB / R1 | F | Tap or double-click a card |
| Draw from the deck | X / □ | D | Tap the deck |
| Hint | Y / △ | H | Hint button |
| Undo | LB / L1 | U or Z | Undo button |
| New deal | – (pause menu) | N | New deal button |
| Cancel | B / ○ | Esc | Drop it anywhere else |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (card spacing, drag distance, double-click time, hint time, smoothing, deal and finish speed, colours) are in `CFG` and `SUIT_COLORS` at the top of the script.
