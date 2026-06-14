# TINZA — Session Handoff & Sameness Tracker
*Updated 14 Jun 2026 · read TINZA_STANDARD.md first every session*

## >> RIGHT NOW (pick up here)
1. PUSH the batch below (one group, core.js changed so all together).
2. Screenshot braai + world + events headers — confirm they now MATCH.
3. If matched: upload Events.jpg + Buffet Planner.jpg to Images/Headers/ for real photos.
4. If a header looks off: note which section + what's wrong; it's a quick core.js/section tweak.
5. THEN next work = SPICE recipe-opener migration (S10 NEXT).

---

## DONE THIS BATCH (banked, NOT pushed yet)

```
HEADER UNIFICATION (the big one) - root-cause fix for header drift
  - sectionHeader() in core.js REWRITTEN to BE the braai v33 look:
      photo 200px | My Plan pill top-right | [Back + Search] row | title | tagline
  - NEW guestBar() in core.js = shared "How it works + guest stepper + slider"
      (accepts decJs/incJs override so each section keeps its own stepping)
  - braai main  -> now CALLS sectionHeader + guestBar (identical by construction)
  - events main -> now CALLS sectionHeader + guestBar (FINALLY has a photo header)
  - world kitchen -> inherits new sectionHeader automatically (no edit needed)
  => braai / world / events headers now built from ONE source. No more drift.
  => core.js backed up first | grew 2370 -> 2419 (no truncation) | node OK

EARLIER IN BATCH
  - Checkers -> "SA's biggest retailers" app-wide (apostrophe = &#39;, quote-safe)
  - Buffet orange totals box -> subtle green standard box
  - All 8 buffet/Events screens -> sectionHeader (now inherit the v33 chrome too)
```

PUSH WHEN READY - ONE group (core.js changed, so everything goes together):
core.js | braai.js | events.js | buffet.js | health.js | meals.js | prices.js | tinyTummies.js
(world kitchen NOT in list - it inherits the new core.js with no file change)

AFTER PUSH - screenshot braai + world + events: headers should now match.
Then upload real photos: Events.jpg + Buffet Planner.jpg -> Images/Headers/
(until then those two show the correct-size 200px emoji-gradient fallback).

---

## BY-DESIGN DIFFERENCES (not bugs)
- My Plan pill: braai HAS it (one unified plan). Events-hub + World do NOT
  (they're launchers/browsers - no single plan to open). Can add later if wanted.
- Buffet sub-screen back button now sits in the bottom row (was top-left) -
  this is the v33 standard; intentional, makes them match braai.

---

## CROSS-SECTION SAMENESS - REMAINING
```
 SECTION        header        guest box     notes
 -----------    ----------    ----------    -------------------------
 braai (ref)    shared OK      shared OK     reference, now via core.js
 worldkitchen   shared OK      n/a           inherits new chrome
 events/buffet  shared OK      shared OK     DONE this batch
 health         old/none       -             needs sectionHeader (step 4)
 meals          old/none       -             sectionHeader + kill scale + search box
 kiddies        2 flat hdrs    -             sectionHeader + kill gliding scale
 spice          4 flat hdrs    -             S10 NEXT (opener migration first)
 tiny/furry/budget/packs  none -             photo header pending (step 4)
```

---

## ROADMAP (STANDARD S10 order)
```
 [DONE]  Events + header unification (this batch)
   |
 1. SPICE recipe-opener migration ...... S10 NEXT (unlocks cross-links)
 2. Cross-links (salad <-> dressing, pesto)
 3. ONE shared plan-row / shopping renderer -> roll to ALL
 4. COSMETIC SWEEP (LAST): sectionHeader on health/meals/kiddies/spice/
    tiny/furry/budget/packs | kill gliding scales | remove meals search box
 5. THEN fill recipes
```

## WORKFLOW
- Push via GitHub Desktop only | node --check before every push | core.js sacred (backed up).
- Push only when necessary (Netlify credits) - batch fixes, push once.
- Fetch with curl -sL from raw.githubusercontent.com (never the API).
