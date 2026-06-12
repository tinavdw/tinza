# TINZA — Session Handoff

_Last regenerated: 12 Jun 2026 (plan-row portion fix + walnuts)_

## ✅ Done this session (rebuilt clean, ready to push)
Three files changed. All `node --check` ✓.

- **core.js — plan-row "all meats show the same total" bug FIXED.** `calcMeat()` was using the flat cut-class value (every "boneless" cut = 250g `PORTION_BRAAI.boneless`) × a generic `meatSpreadMult`, so fillet, brisket and kudu all rendered the **same** number. It now uses each meat's own `soloG`/`sharedG` (the per-meat portions already in `data.js`), with the **exact same `isSolo` rule the recipe page already uses** (`!(selected && numMeats>1)`) — so plan rows, shopping list, cards and the recipe detail can no longer disagree. The spread is already baked into `sharedG`, so the generic multiplier is gone from portions. **Verified @ 4 guests, 3 mains, Family Mix:** Fillet **480g**, Brisket **600g**, Kudu **400g**; solo fillet -> 1.0kg.
- **braai.js — plan rows: gold "~ R pp" REMOVED.** Per the locked colour convention, plan dish-rows now show the **per-dish total only** (`Xg total`). Food cost belongs in the green qtyBox, not gold per-person on the rows.
- **prices.js — walnuts added.** `"walnuts"` / `"walnut"` = **370** (R37/100g -> R370/kg). Was missing; the Braai Pesto Pasta salad / any walnut line now prices.

## Next up (Tina's order: plan-row done -> other issues -> salad dressing)
1. **Ingredients show BOTH amounts per line** (shot 2, RECIPE-DETAIL lock): each ingredient row shows **per-person AND total-for-all-guests** (e.g. "Pasta 60g pp / 240g total"), scaling with guests. This reworks the recipe-page ingredient pipeline (parse the "X per person" string -> show pp AND xpeople). `ingredientRow(name, amount, note)` currently takes one pre-built amount — extend it to take pp + total, and update the call site that builds the amounts.
2. **Green food-cost strip into shared `qtyBox()`** (shot 7) in core.js, with the locked note: "This food cost is for costing only — it's not the same as the cost at the grocery store."
3. **Salad / dressing split** (LOCKED, corrected): SALADS STAY in the Braai salad section (Greek, French, Pesto Pasta). Only the **dressings** move to **Spice > Sauces > Salad Dressings**. Each Braai salad gets a clickable link (e.g. "Greek salad dressing") -> jumps to that dressing in Spice (view + add to plan) -> "Go back to Recipe" returns to the salad. Also add the **Pesto recipe** to Spice so the Pesto Pasta salad's pesto sauce gets costed.
4. **Braai "look like World"** — visual parity (shot 1), after costing is settled.
5. **Better wording** (shot 5) — Tina to point at the specific line/text to rephrase.
6. WK tick-bug + section 6.4 two-cost layout (carried from last session).

## Watch list (don't lose these)
- **Marinade scaling:** `buildShoppingList()` (core.js ~713) still scales each meat's **marinade/rub** ingredients by the old `meatSpreadMult`. The **main protein** is now correct via `calcMeat()`, but rubs/marinades use the old model — revisit when reconciling Braai+WK shopping so they share one portion source.
- **Kudu price key:** `BRAAI_PRICE_KEY` maps `kudu -> "beef fillet"` (braai.js ~111). Confirm the live Braai kudu cost uses **R195** (the new top-level `kudu` key) and not beef-fillet's price.

## Locked decisions
- **Colour convention (LOCKED):** gold/yellow `#f5c842` = SHOPPING (buy amount + price per row, "What you'll spend" total). Green `#c8e840`/`#9bbf6a` = COST ("What the food costs" total). Plan dish-rows show the per-dish total only; food cost goes in the green qtyBox.
- **Green-box note wording (LOCKED):** "This food cost is for costing only — it's not the same as the cost at the grocery store."
- **Portion source (LOCKED section 6.1):** per-meat `soloG`/`sharedG` in data.js is the single source of truth for braai meat amounts. Solo = full portion; shared (multi-main) = `sharedG`. Do NOT reintroduce a flat cut-class override on top of it.
- Shopping list rows: ONE number (what to buy + price). Real-cost-per-row = future Pro toggle, NOT default.
- Ingredient standard: name = what you buy (matches PRICE_DB); one ingredient per line, no "+" lines; prep goes in method, not the name.
- Never guess a price — an unresolved name returns null and the caller hides the figure.

## START HERE next conversation
1. Curl both `TINZA_STANDARD.md` and this `TINZA_HANDOFF.md` from repo root BEFORE touching code. Standard takes precedence over chat.
2. Confirm the 3 files pushed & live looks right: open My Plan with fillet + brisket + kudu -> each shows a **different** per-dish total (no identical numbers, no gold pp on rows); walnut lines price.
3. Then work the "Next up" list in order: ingredients-both -> green food-cost strip -> salad/dressing split.
4. Live site: tinza.netlify.app / repo tinavdw/tinza / fetch files via curl from raw.githubusercontent.com.
