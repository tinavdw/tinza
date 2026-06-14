# TINZA — Session Handoff & Sameness Tracker
*Updated 14 Jun 2026 · read TINZA_STANDARD.md (v1.9) first every session*

---

## ✅ DONE THIS BATCH (banked, NOT pushed yet)

```
 CHECKERS RENAME (whole app)
   - every "Checkers" -> "SA's biggest retailers"  (0 left anywhere)
   - apostrophe written as &#39; so it's safe in any quote style
   - files: buffet, health, meals, prices, tinyTummies

 ORANGE BOX -> STANDARD GREEN  (buffet plan totals)
   - loud 2px copper border -> subtle 1px #2a1a10 on #161210
   - cost-per-person + estimated total -> green food-cost #c8e840
   - "Total dishes" count stays gold (a quantity, not a price)

 EVENTS HEADERS - ALL 8 SCREENS -> sectionHeader (200px)
   - Step1 Landing ............ done (earlier)
   - Step2 Starters .......... NEW
   - Step3 Main Dishes ....... NEW
   - Step4 Side Dishes ....... NEW
   - Step5 Salads ............ NEW
   - Step6 Desserts .......... NEW
   - Step7 Your Buffet Plan .. NEW (My Plan moved into photo pill,
                                    dropped from the course grid)
   - Step8 Sauces & Gravies .. NEW
   => 0 flat headers left in buffet.js | node --check OK
```

PUSH WHEN READY - one group (core.js untouched):
buffet.js | events.js | health.js | meals.js | prices.js | tinyTummies.js

Then: drop Buffet Planner.jpg into Images/Headers/ for the real photo
(until then header shows correct-size 200px emoji-gradient fallback).

---

## CROSS-SECTION SAMENESS AUDIT (what's left)

```
 SECTION        sectionHeader  flatHdrs  glidingScale  perScreenSearch
 -----------    -------------  --------  ------------  ---------------
 braai (ref)         3            1          0              0    <- 1 stray to check
 worldkitchen        2            0          0              0    OK clean
 events/buffet       8            0          0              0    OK DONE
 health              0            0          1              0    x gliding scale
 meals               0            0          1              1    x scale + search box
 kiddies             0            2          1              0    x 2 headers + scale
 spice               0            4          0              0    x 4 headers (also S10 NEXT)
 tinyTummies         0            0          0              0    photo header pending
 furry/budget/packs  0            0          0              0    photo header pending
```

---

## REMAINING ROADMAP (per STANDARD S10 sequence - do in order)

```
   [NOW]  Events cosmetic sweep ........... COMPLETE (this batch)
     |
   1. SPICE recipe-opener migration ........ S10 NEXT (unlocks cross-links)
     |
   2. Cross-links (salad <-> dressing, pesto)
     |
   3. ONE shared plan-row / shopping renderer  -> roll to ALL sections
     |
   4. COSMETIC SWEEP - LAST, across all sections:
        - sectionHeader on health/meals/kiddies/spice/tiny/furry/budget/packs
        - kill gliding scales (health, meals, kiddies) -> wrapped boxes
        - remove meals per-screen "Search All Recipes" box (one universal search)
        - check braai's 1 stray flat header
     |
   5. THEN fill recipes
```

Note: other sections' header sweep is deliberately held to step 4 per your own
locked S10 sequence - not jumped early, to avoid breaking working sections.

---

## WORKFLOW REMINDERS
- Push via GitHub Desktop only | node --check before every push | core.js sacred.
- Push only when necessary (Netlify credits) - batch fixes, push once.
- Fetch files with curl -sL from raw.githubusercontent.com (never the API).
