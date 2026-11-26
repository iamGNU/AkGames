# AK Games

**Developer:** Akash · **Co-developer:** Claude Code

Small controller games that run in the browser. Each game is a single HTML file, with no install and no internet needed.

**Start here:** open `index.html` in Chrome or Firefox, press any button on your controller, and pick a game. Each game's menu has an **All Games** item that brings you back to this picker.

| Game | What it is |
|---|---|
| [Neon Swarm](neon-swarm/) | Twin-stick arena shooter: waves of enemies and a boss every 5th wave |
| [Neon Kick](neon-kick/) | Arcade 5-a-side football against the CPU, plus a penalty shootout mode |

If a browser won't detect the controller when you open the files directly, serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
