# TINZA — SESSION HANDOFF (paste into the new chat to resume)

**Session start:** `node tinza-lawcheck.js` (expect 0 red / 0 drift). Claude can clone HEAD directly:
`git clone --depth 1 https://github.com/tinavdw/tinza.git` — reads the repo, never the running app (Law 2:
Tina's eyes on live close a bug). Claude cannot push.

**We are mid-MF144 (vessel scaling), stopped at the Phase A gate. The next actions are Code's + Tina's push, then a live check.**

---

## ▶️ IMMEDIATE NEXT — start the new chat here (in order)

1. **Hand Code the corrected `reference/MF144_VESSEL_APPLY_CODE_PROMPT.md`** and tell it:
   *"Redo Phase A. My earlier 2-opener delta is superseded — route EVERY recipe opener's dial seed through
   one shared `softDefaultN(r, base)` helper, not a copy per renderer. Confirmed openers: `bakesRecipeOpts`
   (core.js:3859), `recipeDetailFromResult` (meals.js), and `wkRecipeOpts` (worldkitchen.js:608, seeds
   `S.wkServings || 1`). Grep every opener for `var n = Math.max(1,` and route any that can open a soft
   oven-dish. Render the soft-default note in each. Keep the Q2 condiment holders already applied."*
2. **Small sizing follow-up for Code:** the 74 condiment holders were written at 375ml jar / 500ml bottle
   BEFORE the size refinement. Apply **250ml Consol Spread jar** to **nut butters + curds** (rich, slow-use
   spreads — a ~400g batch reads "2 x 250ml" honestly instead of a lonely "2 x 375ml"). 375ml stays the
   default preserve jar; 500ml bottle for pourables; **optional** 250ml bottle for hot sauces (fine at 500ml
   too). Everything else per MF144.
3. **Push** the working tree + corrected MF144 + updated `reference/TINZA_FIX_QUEUE.md` — one commit, one push
   (Netlify credits).
4. **Run the THREE-WAY Phase A gate on live** (not one dish): temporarily add
   `equipment:[{n:'23x33cm (9x13") ovenproof dish',per:6,soft:true}]` to **one bakes dish + the WK Bobotie +
   the FMF Bobotie**. Each must open at **6**, show the freeze-note, scale 2<->12, and read "1 x"/"2 x
   ovenproof dishes". WARNING: if the WK one still opens at 1, its opener wasn't routed through `softDefaultN`
   — that's the tell. All three green = gate passed.
5. **Ping Claude "gate green"** -> Claude does the Law-2 read on Code's opener changes at HEAD **before Phase B
   goes wide** (the 169 dishes + the ambiguous set).

---

## STATE OF THE WORKING TREE (Code, nothing pushed yet)
- DONE **Q2 condiments applied** — 74 Spice holders (39 preserves + 35 condiments) as jars/bottles, by the
  "preserved+stored = jar, dips/dry-blends/fresh-sauces = none" rule. Excluded items confirmed byte-identical.
- WARNING **Engine delta = 2 openers only (core.js + meals.js)** — SUPERSEDED. Redo as 3+ openers via
  `softDefaultN` (step 1). This is why the gate isn't demonstrated yet.
- DONE 5 cheesecakes + Bobotie gate example (meals.js) - doctor census fix (tinza-doctor.js).
- PARKED Borderline condiments (nut butters, mustards, mayo, ketchup, bottled Asian sauces, zhoug) in
  `MF144_REVIEW_QUEUE.md ss6` for Tina's veto — flip any that are made-and-used rather than shelved.

## DECISIONS THIS SESSION
- **Q1 roasts -> NO holder** (a joint is the portion; a roasting tin doesn't multiply). Byte-identical.
- **Q2 condiments -> preserves-only jar rule** (above). **Q3 bake families -> hold until Phase A verified live.**
- **Jar/bottle sizes confirmed real Consol standards:** 375ml Farrago (default jar) - 250ml Spread (nut
  butters, curds) - 500ml bottle (cordials, ketchup) - 250ml sauce bottle (hot sauce, optional). Mayo/aioli/
  marie-rose = jars (thick), not bottles.
- **Two Boboties = KEEP BOTH.** WK `cape-malay-bobotie` (name "Bobotie", `servings:1`, 90g mince pp, all 6
  version chips, opens at 1) and FMF `meals.js` "Classic Bobotie" (150g mince pp, costPP 34, opens at 4) are
  an intentional pair — search.js confirms it, distinct names, WK carries the version system. Rendered by
  different openers -> that's why 1 vs 4. **Merge to one dish is PARKED "much later."**
- **MF138 is 3+ maps, not 2.** The two-Bobotie split proved the dial is seeded in >=3 openers; `softDefaultN`
  is the shared-helper fix for it here.

## KEY FINDING FOR ANY FUTURE OPENER WORK
Recipe sections render through **separate openers**, each with its own `var n = Math.max(1, ...)`:
`bakesRecipeOpts` (core.js), `recipeDetailFromResult` (meals.js), `wkRecipeOpts` (worldkitchen.js), and likely
events/spice/kiddies/health. Any dial-default or per-recipe scaling behaviour MUST go through a shared helper,
or it silently misses sections. Most soft oven-dishes live in **World Kitchen**.

## QUEUE (banked in reference/TINZA_FIX_QUEUE.md — after vessels)
- biscuits search -> dog food (NEXT bug) - ~231 WK double-encoded UTF-8 names - MF_VERIFY_TWO_FACTS
  (12 moods live? 3 unloaded files?) - load-shedding -> build queue.
- Sameness / MF138 legacy-branch retire - finish all WK recipes (Fable S3 dessert icons, post-reset only).
- **NEW — portion standard (~6 weeks, gated behind sameness+bugs+WK):** the `core.js ss6.1` PORTION standard
  + APPETITE ("Big Eaters") govern braai/events only; recipe sections use raw hand-typed `pp` (root of the
  90-vs-150 Bobotie drift). Part 1 = doctor audit of protein pp vs bands (cheap). Part 2 = appetite mult
  app-wide (same multi-opener surgery as vessels, much later). Full detail in the queue file.

## PARKED
Bobotie merge (much later) - R50->R90 price sweep - wk_europe re-decode - WhatsApp share hard-codes
"For N people" on bakes - Fable S3 (post-reset, usage; 0 Fable used this session).

## MEMORY
Memory is at its 30-edit cap (all locked rulings) — vessel + portion work is persisted in files, not memory,
per "the files are the memory." This handoff + MF144 + the fix queue are the continuity.
