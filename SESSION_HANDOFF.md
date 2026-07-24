# TINZA — SESSION HANDOFF (paste into the new chat to resume)

Session start: `node tinza-lawcheck.js` → was 0 red / 0 drift all session.

## SHIPPED THIS SESSION
- **Bug CLOSED ✅** — bakes "N people" contradiction. Was TWO renderers: `bakesRecipeOpts` (core.js, Bakes-section path) + `recipeDetailFromResult` legacy branch (meals.js, Search/Mood/Budget path). Both gated on the bake model. Verified live on both maps (dial reads "1 · 1 cheesecake").
- **VESSEL SCALING — design complete, pushed:**
  - Ruling `TINZA_RULINGS.md §10` "Vessels scale in a slot, never in prose" (+ jar/bottle batch case + hard/soft behaviour).
  - `MF142` engine — Code BUILT it (equipment field + shared `equipmentLine` + `equipmentContract` banner + `pluralizeLastWord` + doctor ratchet). Proven live in DOM, node --check clean.
  - `MF143` authoring table — researched SA-standard sizes; full hard/soft/jar taxonomy + classification rules + exclusions.
  - **Tina pushed all docs.** (Confirm the MF142 *engine code* is also live.)

## IMMEDIATE NEXT (in order)
1. **Spot-check MF142 live (Law 2)** — clone HEAD, confirm `equipmentLine`/`pluralizeLastWord` read as reported; on the app, no `equipment` field yet = no "You'll Need" box (byte-identical).
2. **Hand Code the MF143 apply** (0 Fable, 1 Code session):
   - engine delta: oven-dish recipes open the dial at **6** + carry the soft-default note.
   - apply family defaults across ~162 dishes/bakes + ~55 condiments/preserves (whole Spice shelf → jar) using the hard/soft/jar rule; auto-derive `per` from `bakesPortion.perBatch` for bakes; do the 3 prose rewords (Overnight & Baked Oats · Banana Oat Muffins · Everything Seed Omega).
   - surface the ~10 ambiguous World Kitchen dishes for Tina to tap soft/hard.
   - re-run doctor → bake coverage WARN should flip to 0/green.

## VESSEL TAXONOMY (settled — for reference)
- **HARD batch** (round up, no fractions): cheesecake 22cm springform · cake 20/23cm · loaf 22×12cm · tart 23cm · pie 24cm · muffin 12-cup · baklava/tray · flan.
- **SOFT default** (open at 6, scale freely, "standard dish serves 6 — smaller dish or freeze the rest"): 87 savoury baked-in-dish mains (bobotie, chicken/meat pies, gratins, casseroles, potato/veg bakes) + soft puddings (malva, bread & butter, self-saucing, sticky toffee). Standard oven dish = 23×33cm (9×13″).
- **JAR/BOTTLE** (condiment/preserve itself, by Spice cat): jams/marmalades/curds/chutneys/pickles/sambals/atchar/hot sauces/ketchup/mayos/harissa/toum/apple & mint sauce → 375ml jar (thick) / 500ml bottle (pourable).
- **NO holder**: soups (pot + bowl) · cooking sauces & gravies (pot — béchamel, pizza sauce, gravies) · skillet/bowl dishes (menemen).

## BUG QUEUE (after vessels, or in parallel)
- **biscuits search → pet food** (next bug — same "wrong shelf" family as the one we killed).
- **~231 World Kitchen double-encoded UTF-8 names** (the real mojibake; the Fraunces display "&" is NOT a bug).
- **MF_VERIFY_TWO_FACTS.md** — hand to Code: confirm 12 moods live in code · check 3 unloaded files (bakes_additions.js · makeable.js · photo-audit.FIXED.js).
- Last: add load-shedding to the build queue.

## LOGGED (not yet actioned)
- ARCH: retire the legacy meals branch / widen `inWarm()` — this two-renderer split is MF138 "two maps."
- WhatsApp share text hard-codes "For N people" on bakes (cosmetic, both renderers).

## PARKED
- Fable S3 dessert icons — post-reset only (usage cost; budget preserved this session — 0 Fable used).
- R50→R90 price sweep · wk_europe re-decode.

## MEMORY
Memory was full this session (a doc-doctor + rulings-merge note couldn't save). Prune one old memory in Settings → Profile if you want the next auto-memory to capture this work; otherwise this handoff is the continuity.
