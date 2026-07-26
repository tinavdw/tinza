# MF149 · THE TOP-BACK BUILD — navigation settled app-wide
**Brief: Claude, 27 Jul 2026 · repo measured at HEAD `0c020e4` · implements §24.6 · §24.7 · §24.8 · §24.9 (+ fix-queue ③)**
**Rule (Tina, 26 Jul): TOP Back = exactly TWO levels up · BOTTOM Back = exactly ONE. Uniformly, every room.**

⚠️ **ONE QUESTION GATES COMMIT B — the depth-1 clamp.** §24.9 as written says: at depth 1 (one level below a room's front door) the top Back reads `← Home`; on the front door itself it also reads `← Home`. This clamp is inferred (from "uniformly" + never-two-buttons-one-job), not Tina's explicit words. **Tina answers yes/no before commit B ships.** Everything in commit A is independent of it.

---

## COMMIT ORDER (one job per commit · `node --check` every file touched · ONE push at the end — Netlify credits)

### COMMIT A — §24.6 · ONE KEY, ONE CLOSE PATH (the FMF/Mood loop)
Measured at HEAD:
- `core.js:59–60` `SIMPLE_RECIPE_KEYS` still contains `moodActiveRecipe` + `mealActiveRecipe` — both also in `navSignature()` (core.js:93). Both lists = push-on-open AND push-on-close = the chips loop Tina proved on live.
- `closeMealRecipe()` **already exists and already consumes** (meals.js:16477 — `history.back()` when `_appNavDepth>0`, `setQuiet` fallback at :16480 for depth 0 — the fallback is correct, keep it). The bug is that goBack step (2b) intercepts via SIMPLE_RECIPE_KEYS *before* ever reaching it.
- **No `closeMoodRecipe()` exists.** `core.js:2523` hands the recipe detail `"setQuiet({moodActiveRecipe:null})"` — the pushing close.

Build:
1. Remove `moodActiveRecipe` + `mealActiveRecipe` from `SIMPLE_RECIPE_KEYS`. They **stay** in `navSignature()` (§24.6: device Back decides it — dropping from the signature would pop past the list to Home).
2. Create `closeMoodRecipe()` mirroring `closeMealRecipe()` (consume when depth>0, `setQuiet({moodActiveRecipe:null})` fallback; restore list scroll if a `_moodListScroll` exists / add one on open like meals.js:16469 does).
3. `core.js:2523` → `"closeMoodRecipe()"`.
4. goBack: add explicit steps (mirroring step 2's `viewingRecipe` shape) — `if(S.mealActiveRecipe && typeof closeMealRecipe==='function'){ closeMealRecipe(); return; }` and same for mood — placed where 2b sits. The three remaining SIMPLE_RECIPE_KEYS (`_anchorActiveRecipe`,`_fourActiveRecipe`,`_searchActiveRecipe`) stay as-is (in-neither-list shape; device-back overshoot there is measured, not proven on live — **own job, not this brief**).

**Rung (census):** `No key appears in both SIMPLE_RECIPE_KEYS and navSignature()` — must be born RED at 2 before the fix, GREEN after. Prove by re-introducing one key.
**Tina's live check:** Sides & Basics → Chips → open/close repeatedly → phone Back walks OUT (no chips-recipe-chips loop). Same on Gnocchi. Then Just Feed Me (§24.6 warned it's the identical unwalked loop).

### COMMIT B — §24.9 · topBack(chain, depth) + the level maps
One helper in `core.js`:
```
topBack(chain, depth)  →  { backJs, backLabel }
```
- `chain` = the room's declared levels, front door first: `[{name, go}, …]` where `go` is the state-write string that LANDS on that level (nulling everything below it — reuse `wkResetDrill()`-style discipline; WK's chain may call it).
- top Back = `chain[depth-2]` (label `'← '+name`); depth 1 → `← Home` (`bottomBarGo('home')`); depth 0 → `← Home`. **No screen hand-rolls a ≥2-key back-jump anymore.**
- Laterals (§24.7 keys) are NEVER chain levels.

**The chains, measured at HEAD (names = what the label says):**
| room | 0 (front door) | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| World Kitchen | World Kitchen (continent grid) | *continent* e.g. Africa (region list) | *region* e.g. Southern Africa (country grid) | *country* e.g. Boerekos (dish list) | recipe |
| Family Meals | Family Meals | room (Supper/Eggs/… — `mealCat` pills are laterals INSIDE this level) | recipe (`mealActiveRecipe`) | | |
| Braai | Braai (`braiStep:1`) | category (`braiStep:2`/browse) | recipe (`viewingRecipe`) | | |
| Health | Health Hub | group (`healthGroup`; `healthGroupTab` lateral) | recipe | | |
| Spice | Spice Room | shelf (`spiceShelf`) | entry (`spiceEntry`) | | |
| Mood / Just Feed Me | Just Feed Me | mood list | recipe (`moodActiveRecipe`) | | |
| Budget | Budget | step | recipe (`_budgetActiveRecipe`, bespoke closer stays) | | |
| Events | Events (tile grid) | tab (Buffet/Cakes/Beverages/Finger Foods — `cakeCat`/`beverageCat`/`buffetStep` = laterals per §24.7 candidacy; `eventTab` itself is the LEVEL move) | recipe | | |
| Kiddies (inside Events) | Events grid | Kiddies themes (kidsScreen:'themes') | theme categories ('categories') | category ('category') | recipe/plan |
| Tiny Tummies / Furry | apply the mechanism only — **rebuild is banked**, do not hand-polish | | | | |

**Worked example (Tina's own, §24.9):** Boerekos dish list (depth 3) → top `← Africa` (region list), bottom = one up (country grid). Recipe (depth 4) → top `← Southern Africa`, bottom = consuming close to the dish list. **The chain is the DOOR's chain (§24.4):** entered via Boerekos, walk Boerekos's parents — never the origin's. `wkRecipeOpts` already separates door (`backLabel`) from origin (`meta.origin`); keep that split.
**Ends a live duplicate:** worldkitchen.js:763 + :777 currently hand the SAME `_back` to the photo Back and the bottom nav — two buttons, one job. After this commit: photo = two-up, bottom = one-up.
**The 14 anonymous `← Back` labels (census rung ⑥, events ×6 · spice ×2 · health ×2 · kiddies ×2 · meals · core) are named by this commit** — the label is `'← '+chain[depth-2].name`. That closes Events sameness step ④.

**Rung:** every `sectionHeader()` `backJs` clearing ≥2 nav keys routes through `topBack()` — born RED at the current hand-rolled count (measure it first, print the list), proven by re-introducing one hand-rolled jump → RED.

### COMMIT C — §24.7 · LATERAL_KEYS (a lateral replaces, never pushes)
- Declare `LATERAL_KEYS = ['mealCat','wkDataTab','wkCourseTab','healthGroupTab','beverageCat','cakeCat','catSection','dogSection','barMode','braiCat','fingerView','healthTab']` in core.js next to navSignature.
- In `draw()`'s push decision: if the signature changed AND the only differing keys are in LATERAL_KEYS → `history.replaceState` (updating sig+snap+rootDepth in place), not push. `_appNavDepth` unchanged on a replace.
- ⛔ `eventTab` STAYS OUT — Tina checked Events buffet+cakes on live 26 Jul, both Backs fine. Don't touch a working room. (It can enter the list later only after her fingers confirm the same first-pill symptom there — they haven't.)
- First-pill fact already measured: meals.js:15395 falls back to `cats[0].id`, no unfiltered state exists, so replacing loses nothing.
**Tina's live check:** Homestyle Plates → Oven Bakes → phone Back = OUT of the room (not Homestyle Plates). Same walk on Deep-Fried and Waffles.

### COMMIT D — §24.8 · dead branches + dead keys + the tightened rung
- Delete the four unreachable recipe-detail branches at health.js:963–966 (+ their cooking-mode line :955 and Home button :858 arms). Their jobs moved to `openRecipe()`/`viewingRecipe` at migration — the new home is live (§24.3's deletion law satisfied).
- Remove the 10 never-set keys from `navSignature()` where present: `eventActiveRecipe` · `weddingCakeView` · `kidsShowMasterSnacks` · `wkSACulture` · `wkRecipeDetail` · `activeSmoothie` · `activeCat2` (+ `activeOats`/`activeMuffin`/`activeRaw` aren't in the signature — just delete their branches with the health.js cut).
- **Also purge `NAV_KEYS` (core.js:3877):** it still lists the long-dead `wkCountry` + `wkSelectedRegion` and the keys removed above.
- Tighten the census dead-key rung to ask "is it ever SET truthy?" — **and it MUST count string-name writes (`'barMode'` via `chipRow(...,'barMode')`, barplanner.js:285) as writes**, or it buries live keys. That requirement is part of the ruling (§24.8), not an implementation detail.

### COMMIT E — fix-queue ③ · Finger Foods double guest bar
`guestBar()` at events.js:958 (shared Events bar, §2.2 — STAYS) and events.js:1092 (inside the fingerfoods branch — leftover from the struck per-tab-plan ruling). **Delete the :1092 call.**

### COMMIT F — census + docs
- Land all rungs above; run `node tinza-census.js` — no rung may be weaker than before; the two new rungs GREEN, proven RED first.
- `node --check` every touched file. One push.

## AFTER TINA VERIFIES LIVE → MF148 (Playwright, separate brief, Code builds it — Claude's sandbox can't reach the Playwright CDN). Not before: this build changes what every top Back does (§25.2).
