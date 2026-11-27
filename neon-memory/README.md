# Neon Memory

**Developer:** Akash · **Co-developer:** Claude Code

A calm card-matching memory game in neon. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There's no timer unless you want one and nothing to lose, so it suits everyone from small kids to grandparents.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Every card hides a neon picture. Each picture has its own colour and its own shape, so you can tell them apart by either one.
- Flip two cards. If they match, they stay face up with a soft glow and a chime. Each pair you find rings the next note up the scale, so a whole board plays a little tune.
- If they don't match, they turn back over after a calm pause of about a second. You don't have to wait: tap again to turn them back straight away, and that same tap can flip your next card.
- Find every pair to clear the board. One try (two cards) is one move, and the fewest moves for each board size is saved.

## Options (on the title menu)

- **Size:** Tiny 3×4 (6 pairs, good for small kids), Small 4×4 (8), Medium 4×5 (10), Large 5×6 (15) or Huge 6×6 (18). There are 20 different pictures, so each board gets a fresh mix.
- **Players:** 1 player, or 2 players taking turns on one device. Cyan goes first. Find a pair and you go again; miss and it's Pink's turn. Whoever finds the most pairs wins, and a tie is a happy ending too.
- **Peek:** shows every card for 3 seconds at the start.
- **Timer:** shows a clock that counts up and never runs out. It's off by default. With it on, your best time for each size is saved too.
- **Sound:** turns the soft chimes on or off.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor | D-pad / left stick | Arrows / W A S D | – |
| Flip a card | A / ✕ | Space or Enter | Click or tap it |
| Hurry a miss | A / ✕ | Space or Enter | Tap anywhere |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

All the menus work with any of these: click or tap an option to choose it.

## More options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (flip speed, the pause after a miss, Peek time, board sizes and colours) are in `CFG` and `SIZES` at the top of the script. The pictures are in `ICONS`.
