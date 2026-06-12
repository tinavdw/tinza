# TINZA — Session Handoff

_Last regenerated: 12 Jun 2026 (meat shopping pricing fix + green box + portion re-lock)_

## ✅ Done this session (rebuilt clean, `node --check` ✓)
- **braai.js — green per-dish FOOD-COST total on every My Plan row.** `planRow` now shows name · grams total under name · green `Food cost R___` on the right (`costPP × people`, scales with the guest stepper, hidden if unpriced). Gold stays for the shopping list only. **Already pushed & live** (confirmed on screenshots).
- **PORTION RE-LOCK (core.js + braai.js + Standard v1.8 §6.1).** Root cause found: `calcMeat()` ignored the cut map and read per-meat `soloG`/`sharedG` (and `pcs × gramEach` for kebabs = the whole skewer), so 3 boneless mains rendered 100 / 280 / 160 g pp — no pyramid.
  - `calcMeat()` rewritten to read `braaiBaseG(meat)` → `BRAAI_CUT[id]` → `PORTION_BRAAI`. Same cut = same grams. Kebabs counted as RAW boneless meat, not the skewer.
  - `braaiMeatCostPP` kebab branch fixed to use the same cut base, so R and grams agree.
  - `PORTION_BRAAI` bumped (bone-aware, generous for grazing/drinking): **boneless 300, bone-in 400, fish 280, shellfish 320, veg 250.**
  - `meatSpreadMult` = new grazing taper **1→100% · 2→70% · 3→58% · 4+→50%** (replaces old 350g-constant). Total grows with variety; each meat shrinks equally.
  - **Verified:** 10 people, 3 boneless mains → 1.7kg each (174g pp); solo → 3.0kg.
- **core.js — SHOPPING LIST meat pricing fixed (the §6.4 one-model step).** Shopping priced meat lines by DISPLAY NAME via `priceOf()`, so dish names that don't match the generic price keys mis-matched or failed: Beef Souvlaki wrongly hit beef mince (R100), Rump Steak resolved to nothing (no price → also skipped the +10% buffer, hence 696g vs 766g). Now `buildShoppingList` carries a `priceName` (the `BRAAI_PRICEKEY` value) on the meat line and prices through it — the SAME path as the green box. Result: souvlaki & rump → beef rump (R172), every meat prices, grams line up. Display still shows the dish name.
- **core.js — GREEN BOX now carries FOOD COST (recipe page).** `recipeView` meat block rewritten to the same cut-based portion (so the recipe page can't desync from the plan), and the green qtyBox `info` strip now shows **Food cost R__ pp · R__ total** (scales with the recipe guest stepper) + the locked note. Built via `braaiMeatCostPP` so cost and grams share one base; hidden if unpriced. (Braai meats done; sides + other sections get the cost strip when WK/rollout is wired.)

## Next up (Tina's order)
1. **Herbs & spices — BUY side only (prices are already right).** Spice PRICE_DB values are correct per-kg (pack→kg already converted, e.g. braai spice R45/200g→225/kg), so the per-pinch food cost is fine. The job is the SHOPPING display: show the **jar/pack you buy** (one item) instead of the tiny used grams, and drop spices into a **"Pantry — you may already have"** group that's shown but NOT in the headline total. Needs `PACK_DB` spice entries — **fresh herbs = 20g pack, dried herbs/spices = per packet/small box** (Tina's convention).
   - **Bacon:** **200g packs, ~R45** — same PACK_DB pass.
2. **Sides + green-box food cost for non-meat / other sections** — extend the recipe-page cost strip (currently braai meats only) to sides and, as each section is wired, everywhere.
3. **Take it all to World Kitchen** — port the green plan-row food-cost total to WK rows, port the green-box food cost, then §6.4 (one shared plan/shopping renderer; two-cost block app-wide).

## Open discussion (still to settle)
- **Two totals at the bottom of the shopping list** — "What the food costs" (green) vs "What you'll spend" (gold). Conceptually hard: two big rand figures read like two prices; plus the +10% buffer is a SEPARATE number from pack-rounding and mustn't read as the same gap twice. Settle the wording/model, then build. (Braai already shows a draft version.)

## Watch list (don't lose these)
- **Marinade scaling:** `buildShoppingList()` (core.js ~713) scales each meat's marinade/rub by `meatSpreadMult` separately; the main protein now flows through the new cut-based `calcMeat().grams`. Both use `meatSpreadMult` so they stay roughly in step — revisit when reconciling Braai+WK shopping onto one renderer.
- **Kudu price key:** confirm live Braai kudu uses **R195/kg** (top-level `kudu`), not beef-fillet's price.

## Locked decisions
- **Portion model (LOCKED, Standard v1.8 §6.1):** cut-based via `braaiBaseG`; never per-meat `soloG`/`sharedG`; kebabs = raw boneless meat; braai tier boneless 300 / bone-in 400 / fish 280 / shellfish 320; grazing taper 100/70/58/50.
- **Plan dish-row (LOCKED, Standard §4c):** name + grams total under name + GREEN per-dish food-cost total on the right; gold reserved for the shopping list; built once in a shared renderer (§6.4) so Braai & WK can't drift.
- **Green-box note (LOCKED):** "This food cost is for costing only — it's not the same as the cost at the grocery store."
- Never guess a price — unresolved name → null → the figure is hidden.

## START HERE next conversation
1. Curl both `TINZA_STANDARD.md` (now v1.8) and this `TINZA_HANDOFF.md` from repo root BEFORE touching code. Standard wins over chat.
2. Confirm live after pushing core.js + braai.js: (a) My Plan with 3 boneless mains → each reads the same ~1.7kg (10 people), kebab no longer over-counts, green food cost on each row; (b) open a meat recipe → green box shows the same grams as the plan + Food cost R__ pp · R__ total + the note.
3. Then work Next-up in order: herbs/spices price list (+ bacon) → sides/other-section cost strip → World Kitchen.
4. Live site: tinza.netlify.app · repo tinavdw/tinza · fetch via curl from raw.githubusercontent.com.
