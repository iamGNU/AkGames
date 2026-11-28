# Neon Jigsaw

**Developer:** [Akash](https://www.linkedin.com/in/iamGnu/) · **Co-developer:** Claude Code

Calm jigsaw puzzles of glowing pictures. Every picture is painted fresh by the game, so there are no image files. It's one HTML file: no install, no downloads, no internet, and it's light enough for old laptops. There is no timer and nothing to lose, so it's good for winding down at any age.

## Play

Open `../index.html` (the game picker) or this folder's `index.html` in **Chrome** or Firefox. You can play with a controller, a keyboard, a mouse or a touch screen. If you use a controller, press any button on it so the browser detects it.

## How it works

- Pick a **Picture** (Aurora, Mandala, Night city, Ocean sunset, Koi pond or Flower field) and a number of **Pieces** (12, 24, 48 or 70), then choose **New puzzle**. **New picture** paints a different picture of the same kind. The menu shows a preview.
- The pieces lie scattered around the board. Move a piece near its spot and it clicks into place with a soft chime. The chime rises as the picture fills in.
- Edge pieces have a flat side. **Edges** brings every loose edge piece to the front of the pile.
- **Ghost** (Off, Faint or Clear) shows a faint copy of the picture on the board. A piece's spot glows as you bring it close.
- When the last piece goes in, the seams fade and the whole picture glows. Then choose **New picture** or **Admire it**.
- Your puzzle saves itself as you go. Choose **Continue** to carry on later. The game counts how many puzzles you finish at each size.

## Controls

| Action | Controller | Keyboard | Mouse / touch |
|---|---|---|---|
| Move the cursor | Left stick / D-pad | Arrows / W A S D | – |
| Pick up / put down | A / ✕ | Space or Enter | Drag a piece |
| Move by tapping | – | – | Tap a piece, then tap a spot |
| Next / previous piece | RB / LB | Tab / Shift+Tab | – |
| Edge pieces to the front | Y / △ | E | Edges button (top right) |
| Put it back where it was | B / ○ | Esc | – |
| Pause | Start / Options | Esc or P | ‖ button (top right) |
| Sound on/off | Back / Create | M | Speaker button (top right) |

On a touch screen, a piece you drag lifts a little above your finger so you can see it. All the menus work with any of these: click or tap an option to choose it.

## Options

- Add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- Tuning values (snap distance, ghost strength, cursor speed, finish timing, colours) are in `CFG` at the top of the script. The piece counts are in `SIZES`, and the picture kinds are in `THEMES`.
