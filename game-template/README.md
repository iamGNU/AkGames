# Game template: Star Catch

A tiny, complete game to start your own from, with everything a Zuzu game needs. Stars fall, you catch them in a basket, and there is no way to lose.

It already does everything a game in the collection needs:

- a title menu with **Play**, **How to Play**, **Sound** and **All Games** (back to the picker)
- a pause screen, a sound on/off setting that is remembered, and a best score that is saved
- controller, keyboard, mouse and touch input, merged into one simple `Input` object
- on phones: full screen from the first tap, drag anywhere to move, on-screen pause and sound buttons, and a "turn your phone sideways" hint
- it keeps the screen awake during controller play, and works offline once the site has been visited

Play it at https://iamgnu.github.io/zuzu/game-template/

## Make your own game from it

1. Copy this folder and name it after your game: `cp -r game-template neon-comet`
2. In `index.html`, change the `<title>` and `<meta name="author">` at the top, and the `GAME` settings at the start of the script.
3. Replace **section 2, "Your game"**, with your own game: `start()`, `updatePlay(dt)`, `drawPlay()` and `drawBackground(g)`.
4. Change the How to Play text in `drawHowTo()` to explain your game.
5. Replace this README with one for your game (see below).

[CONTRIBUTING.md](../CONTRIBUTING.md) has the full guide, including how to add your game to the picker and open a pull request.

## Reading input in your game

| What | Gives you |
|---|---|
| `Input.move.x`, `Input.move.y` | -1 to 1 each way, from the arrow keys / WASD, the left stick or the D-pad |
| `Input.action` | the main button was pressed this frame (Space, Enter or A) |
| `Input.actionHeld` | the main button is held down |
| `Input.ptr.x`, `Input.ptr.y` | where the mouse or finger is, in game pixels (960 × 540) |
| `Input.ptr.down` | a mouse button or finger is down |
| `Input.ptr.clicked` | a click or tap (not a drag) happened this frame |
| `Input.device` | what the player used last: `'kb'`, `'mouse'`, `'touch'` or `'pad'` (handy for showing the right hints) |

## A README for your game

Keep it short:

```markdown
# Neon Comet

One or two sentences about the game.

**Made by:** Your Name

## How to play

| | Controller | Keyboard | Touch / mouse |
|---|---|---|---|
| Move | Left stick | Arrow keys | Drag |
| Pause | Start | Esc | Pause button |
```
