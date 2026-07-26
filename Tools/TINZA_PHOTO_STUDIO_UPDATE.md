# Updating the Photo Studio

**File:** `Archive/TINZA_PHOTO_STUDIO.html` (a local `file://` tool — open it in a browser; not part of the deployed app).
**Updater:** `Tools/photo-studio-update.js`

## When to run it
Whenever Fable adds, renames, or deletes recipes (so far this affects **Europe** and **South Africa**). The Studio's card list goes stale otherwise — dead cards for deleted dishes, missing cards for new ones, wrong names for renamed ones.

## How to update — one command
From the repo root:

```
node Tools/photo-studio-update.js
```

Then drop the rewritten `Archive/TINZA_PHOTO_STUDIO.html` back in place and commit. Open it — the progress bar shows the true shot/outstanding count immediately.

That's it. The script is **idempotent**: if nothing changed, it reports `dropped 0, added 0` and leaves the counts alone.

## What it does
1. **Rebuilds the card list (`DATA`)** for the regions in `CONFIG` (Europe + South Africa) from the live section files (`sections/wk_europe.js`, `sections/wk_southafrica.js`): drops deleted dishes, keeps unchanged ones exactly, and adds new/renamed ones with a full template-style AI prompt. Every other region is left untouched.
2. **Re-bakes the "already shot" seed** from your real `Images/Image/` folder, so the bar opens at the correct number instead of crawling up from a stale snapshot.

## The two things that used to confuse us
- **"Shot" is decided twice.** A baked-in `REPO` seed (id = `region|country|name`) gives the count on open; a live background scan of GitHub then heals it upward. If the seed is stale the file opens LOW and slowly climbs — which looks like photos went missing but never means that. The updater fixes this by rebuilding the seed from the actual image files each run.
- **The filename a card must use** = `photoName || name` (+ `.jpg`, then `.png`, then the `name (nameAlt)` display fallback). That's what the app looks for and what the shot-scan matches, accents and all.

## To also cover Africa / Asia later
Uncomment their lines in `CONFIG` at the top of `Tools/photo-studio-update.js` (section files: `sections/wk_africa.js`, `sections/wk_asia.js`, same recipe shape). The seed rebuild already covers every region regardless.
