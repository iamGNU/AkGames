# Add your favourite game to Zuzu

Zuzu is a free collection of small games to unwind with, for every age, made with love for Shubu, Tuktuk and Aryan. **Everyone is welcome to add one.** If there's a kind of game you love, make your own version of it and send it in. Once it's merged, it appears on [the game picker](https://iamgnu.github.io/zuzu/) for everyone, on computers and phones.

You don't need to be an expert. There's a small, complete starter game in [`game-template/`](game-template/) with the menus, sound, saving and controller, keyboard, mouse and touch controls already working. You change one section of it and the rest takes care of itself.

**Can't code, or short on time?** [Suggest a game](https://github.com/iamGNU/zuzu/issues/new/choose) instead. Say what you'd love to play, and someone may build it.

## What makes a good Zuzu game

- **Easy to pick up, nice to come back to.** Calm games and action games are both welcome.
- **For every age.** No gore, nothing scary or rude, no gambling or loot boxes, no ads, no tracking, nothing to buy.
- **For unwinding.** No quizzes, trivia or lessons.
- **Your own work.** Classic kinds of games, like snake, solitaire, match-3 or a racer, are fine in your own style. Don't copy a particular game's name, characters, art, music or levels.
- **Light.** It should run smoothly on an old laptop and a cheap phone.

## The rules for the game file

- **One folder**, named after your game in lowercase with hyphens, like `neon-comet/`. It holds `index.html` and a short `README.md`, nothing else.
- **One self-contained `index.html`.** All the code, styles, pictures and sounds live inside it:
  - draw on the canvas (or use inline SVG or `data:` URLs)
  - make sounds with WebAudio (the template shows how)
  - no libraries, fonts or anything else from the internet, and no network requests, so it works offline
  - under 1 MB
- **Every way to play:** controller, keyboard, mouse and touch.
- **An "All Games" menu item** that goes back to `../index.html`.
- **Credit yourself.** Put your name in `<meta name="author">` and on the menu screen ("Made by ...").
- **Keep the shared parts from the template:**
  - the three app `<link>` tags in `<head>`
  - the "turn your phone sideways" hint
  - the keep-the-screen-on block, the full-screen block and the offline line at the end of the script

The neon look isn't required, but it helps your game fit in.

## Step by step

1. **Fork** this repository (the Fork button at the top right on GitHub), then clone your fork.

2. **Copy the starter game** and name the copy after your game:

   ```bash
   cp -r game-template neon-comet
   ```

3. **Make your game.** In `neon-comet/index.html`:
   - change the `<title>` and `<meta name="author">` at the top, and the `GAME` settings at the start of the script
   - replace **section 2, "Your game"**, with your own game
   - update the How to Play screen in `drawHowTo()`

   The template's [README](game-template/README.md) explains how to read the controls.

4. **Play it.** Serve the folder, then open your game:

   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000/neon-comet/
   ```

   Try it with the keyboard, the mouse, a controller if you have one, and a phone. If you don't have a phone handy, use Chrome's device toolbar (F12, then the phone icon).

5. **Add it to the collection:**
   - **`index.html`** (the game picker): copy a card into the section that fits: Relax, Brain teasers or Action. Change the link, the name and the one-line description, draw a small SVG picture (300 × 150), and add your name:

     ```html
     <a class="card comet" href="neon-comet/index.html">
       <svg viewBox="0 0 300 150" aria-hidden="true">...</svg>
       <h2>Neon Comet</h2>
       <p>One line about your game.</p>
       <span class="by">by Your Name</span>
     </a>
     ```

     Then give the card your game's colour, next to the others in the `<style>` block: `.comet { --c: #7fd8ff; }`
   - **`README.md`**: add a row to the same section's table: `| [Neon Comet](neon-comet/) | One line about your game. By Your Name |`
   - **`sw.js`**: add `'neon-comet'` to the `GAMES` list, so your game is saved for offline play.

6. **Run the checker** and fix anything it lists:

   ```bash
   node tools/check-games.mjs
   ```

7. **Open a pull request** from your fork. Fill in the short checklist, and add a screenshot or two.

## What happens next

The same checker runs on your pull request automatically. Then a person plays your game on a computer and a phone, and may suggest some changes. Once it's merged, your game goes live at https://iamgnu.github.io/zuzu/ within a few minutes. People who installed Zuzu as an app get it the next time they open it online. Then tell everyone! Share your game on LinkedIn and tag [Akash](https://www.linkedin.com/in/iamGnu/).

Fixing a bug or improving one of the existing games is welcome too. Keep each pull request to one game or one change.

## Be kind

Be friendly and patient in issues and reviews. Everyone was new once, and many people here are making their first game.

## Licence

Zuzu is shared under the [MIT licence](LICENSE). By opening a pull request, you agree that your contribution is shared under it too.
