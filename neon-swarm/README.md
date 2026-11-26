# Neon Swarm

**Developer:** Akash · **Co-developer:** Claude Code

A small twin-stick arena shooter for a game controller. The whole game is one HTML file. It needs no install, no build step, no downloads and no internet connection, and it runs smoothly on old laptops.

## Play

1. Plug in a controller: Xbox, PlayStation, 8BitDo or most other pads work.
2. Open `index.html` in **Chrome** (or Firefox).
3. Press any button on the controller so the browser detects it.
4. Pick **Play** with the D-pad or left stick, then press **A** / **✕**.

If the bottom-left of the menu keeps saying "Connect a controller", serve the folder from localhost instead:

```bash
cd neon-swarm
python3 -m http.server 8000
# then open http://localhost:8000
```

## Controls

| Action | Controller | Keyboard + mouse |
|---|---|---|
| Move / menu cursor | Left stick / D-pad | W A S D / arrow keys |
| Aim + shoot | Right stick (fires while held), or hold RT/R2 | Mouse + hold left click, or arrow keys |
| Dash (dodges through anything) | A / ✕ or RB / R1 | Space / Shift |
| Select (menus) | A / ✕ | Enter / Space / click |
| Back | B / ○ | Esc |
| Pause | Start / Options | Esc / P |
| Sound on/off | Back / Create | M |

Browsers only allow sound after a click or key press on the page, so click once on the page if you want sound while playing with the controller.

## Enemies

| Enemy | Looks like | Behaviour | Appears |
|---|---|---|---|
| Chaser | Red triangle | Rushes straight at you | Wave 1 |
| Tank | Orange square | Slow, takes 4 hits | Wave 3 |
| Shooter | Purple diamond | Keeps its distance and fires; flashes just before shooting | Wave 4 |
| Splitter | Green circle | Bursts into two fast minis | Wave 6 |
| **The Hive** (boss) | Large magenta hexagon | Fires rings of bullets (watch for the pink charge-up ring) and calls in chasers; worth big points and drops two power-ups | Every 5th wave |

Before each enemy appears, a pulsing ✕ marks where it will come in.

## Other things to know

- **Combo**: kills less than 2 seconds apart raise your score multiplier, up to x5. Getting hit resets it.
- **Power-ups**: spread shot (cyan), rapid fire (yellow), shield (blue, absorbs one hit), +1 life (pink).
- **Lives and best score**: you have 3 lives, and your best score is saved in the browser.
- **Options**: add `?fps` to the URL for a frame counter, or `?low` for very weak machines.
- **Tuning**: speeds, fire rate, wave sizes and drop rates are in the `CFG` and `ETYPES` objects at the top of the script in `index.html`.
