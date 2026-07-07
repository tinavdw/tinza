# TINZA — SESSION 3 BRIEF: THE SUPERSET RECIPE PAGE (A5 + A3)
**6 Jul 2026 · the trickiest session — it retrofits braai + WK (working sections) · maximum care**

**Goal:** make `recipePage()` the **superset** recipe page — the union of every feature across braai, World Kitchen, bakes, and FMF's warm branch — then route **all** sections through it, so every recipe page in the app is identical. This is the "most comprehensive wins" ruling made real. It completes FMF sameness (A3) and upgrades braai + WK at the same time (A5).

---

## 0. PRE-FLIGHT (Tina)
- Session 2 (FMF warm) must be **pushed and live** first. Quick eyeball: FMF renders warm · a bakes recipe opens with its portion model + nutrition · braai/WK still normal.
- Fresh Code session; drop in **this brief + the flowchart**.

---

## 1. DISCIPLINE — heightened, because this touches braai + WK
- Curl the standards + know `/wow`. Back up `core.js` **and** `meals.js` (and any file holding `recipePage`).
- **This is RULE-1 territory** (editing working sections) — but the retrofit *is* the session purpose, so it's authorised. Move with maximum care: **one section at a time, live-verify each before the next, bank between.**
- Show diffs · **DO NOT push** (Tina reviews on live + pushes).
- The bar: every section's recipe page must keep **everything it had** *and* gain the superset features — **prove nothing is lost** (snapshot/diff per section).

---

## 2. THE SETUP (what Code found in Session 2)
`recipePage()` (built via `bakesRecipeOpts`) is **not yet the superset**. Versus what FMF needs, it lacks:
- the **bakes portion model** (Batch Law / "serves 12" / whole-batch rounding)
- the **nutrition macro grid**
- **WhatsApp / Save**
- **`goesWith`** (clickable deep-links)
- and it scales via **`recipeServings`**, whereas FMF scales via **`searchServings`** — a scaler mismatch that must be reconciled.

Plan: build `recipePage()` UP into the superset first, reconcile the scaler, retrofit braai + WK, then switch FMF's opener onto it (A3). FMF is already warm/matching via the interim guarded warm branch, so there's no rush and no regression risk if done in this order.

---

## 3. ORDER OF PLAY (one section at a time — bank + live-verify each)
1. **Back up + inventory → build the superset feature matrix.** List every feature each recipe page currently renders: braai · WK · bakes (`recipePage`) · FMF warm branch (the S2-2 insertion). The superset = the union. Decide the **unified serving scaler** (reconcile `recipeServings` vs `searchServings` — one source of truth, or make `recipePage` accept the caller's count). No edits yet.
2. **Build `recipePage()` into the superset.** Add the missing pieces: bakes portion model (Batch Law) · nutrition macro grid · WhatsApp/Save · clickable `goesWith` · two-cost display (green food-cost `#46530c` / gold shop-spend `#876213`) · Free/Pro gate · CHOOSE YOUR VERSION chips · Start Cooking + timers · full button row (Add to Plan / My Kitchen / Download) · green `qtyBox` stepper. **Verify on a BAKES recipe** (already uses `recipePage`): every old feature intact + the new ones present. Bank.
3. **Reconcile the serving scaler** so one count drives ingredients + cost + portions everywhere. Verify a bakes recipe scales right (serves 12 → 24 = 2 cakes). Bank.
4. **Retrofit BRAAI → `recipePage()`.** **Live regression on braai:** cut-based portions (Boerewors 2ppl = 600g, the 800g reconciliation still holds) · two-cost · `goesWith` now clickable · versions · Start Cooking · buttons. Bank only when braai is clean.
5. **Retrofit WORLD KITCHEN → `recipePage()`.** **Live regression on WK:** SA-substitution notes · per-person stepper · two-cost · versions · `goesWith` · My Plan. Bank when clean.
6. **A3 — switch FMF's opener onto `recipePage()`.** Point FMF's `openRecipe` at the superset instead of the interim warm branch. **Verify FMF keeps everything:** bakes portion model · nutrition grid · WhatsApp/Save · `goesWith` · warm theme. Bank.
7. **Retire the interim warm branch (carefully).** The S2-2 `if(inWarm()){…}` insertion in `recipeDetailFromResult` was the bridge; once FMF routes through `recipePage()` it may be dead for FMF. **Only remove if nothing else depends on it** — confirm via search first; if unsure, leave it (harmless) and note for later cleanup.
8. **Regression gate + hand-off.** Load every section (braai · WK · health · kiddies · events · FMF), confirm the recipe page is identical everywhere, and confirm the non-warm `recipeDetailFromResult` callers are still byte-identical. Hand Tina per-file diffs. She reviews on live + pushes.

**⚠️ ESCAPE HATCH:** if the session runs long or feels risky, a safe stopping point is **after step 2–3 (superset built + scaler reconciled) + step 4 (braai retrofit, verified)**. Bank that and do WK + FMF next session. Do **not** rush the braai/WK retrofits.

---

## 4. DONE =
Every section renders the **same superset recipe page** · braai + WK gained the missing features with **zero regression** · FMF routes through `recipePage()` and keeps all its features · one unified serving scaler · then only **Events** remains for the universal-opener migration.
