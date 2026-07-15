# 🔨 TINZA — CODE HANDOFF · Phase 0 (15 Jul 2026)

## Why we're doing this
The app grew from a monolith into ~10 sections, each re-implementing the same jobs (portion, cost, search, diet, recipe page) a slightly different way. We are converging everything onto ONE shared engine in `core.js`, so that in the end **adding a recipe is pure data — no code.** We do it in one ordered sweep, measured first, so nothing thrashes.

**This task is STEP 1 only: measure. No building, no fixing, no refactoring yet.** ⚖️ Law 22.

## Ground rules (non-negotiable)
- **Measure-only this task.** Do NOT edit logic or recipe data. Survey and report.
- `node --check` clean · commit the census doc ONLY · push via GitHub Desktop, one commit.
- Doctor stays **RED 10** — ratchet, not gate. Count before = count after.
- Don't touch any working section. This is a read/report pass.
- Repo is public: `github.com/tinavdw/tinza` — clone, read, run.

---

## ✅ YOUR TASK — MF125 Phase 0: THE MAP (whole-surface census)

**GOAL:** Map every place the app renders or scales a recipe, every different way it's done, and the current *shape* of each recipe field — so the contract is designed once, against the full picture.

**SCOPE:** `core.js`, `meals.js`, `worldkitchen.js`, `spice.js`, `braai.js`/`data.js`, `health.js`, `events.js`/`eventsData.js`, `buffet.js`, `kiddies.js`, `tinyTummies.js`, `budget.js`, finger-foods, + all `wk_*.js`.

**SIX FRONTS — for each: every function · its call-sites · every string it emits:**
1. **PORTION** — `S.people` / `recipeServings` / `servings` / `yield` / `bakesPortion` / bare `serves`|`makes`. *(known: 3 dialects)*
2. **COST** — every `*Cost*` fn (`braaiMeatCostPP`, `wkCostRecipe`, `fingerCostPP`, `ttLineCost`, `hcLineCost`, `mealsCostPP`, `costLine`, `calcSideCost`…). *(known: ~19)*
3. **SEARCH** — every entry + normalizer (`allRecipes({text})` vs `tinzaAllSearch()`, `globalSearch`, `liveSearch`, `searchText`, the 3 normalizers). *(known: 2 engines disagree)*
4. **DIET** — every read/write/filter/badge + the vocabulary per section. **Also note where allergen/`contains` data already exists.**
5. **RECIPE PAGE** — every opener/renderer (`openRecipe`, `wkOpenRecipe`, section-local detail views); which sections use the universal opener vs their own.
6. **FIELD UNION** — every field/box name on any recipe in any section. Group synonyms (`trivia`=`story`=`didYouKnow`; `tip`=`chefNotes`; `goesWith`=`pairsWith`). Propose ONE canonical name each; list which sections are MISSING each box.

**ALSO RECORD (critical for the contract):** the *data shape* of `ingredients` and `method`/`steps` per section — **structured array vs prose string** (e.g. World Kitchen ingredients = one `·`-string; braai = array). Note each.

**SECONDARY (note only, don't touch):** the current service-worker file + how caches are named/versioned (for the MF57 fix later).

**DELIVERABLE:** `PORTION_CENSUS.md` — one table per front · a count per front · the canonical field-union list · the ingredient/step shape per section.

**⛔ Survey only. PROOF:** every in-scope file covered · counts reconcile (found = classified, 0 unclassified) · `node --check` unaffected · doctor RED 10 · commit the census doc only.

---

## Where this leads (context — DON'T build any of it yet)
**The 6-step roadmap:** 1 Map (this) → 2 Agree the one Form (recipe contract) → 3 Build the Engine (spine in core.js, with shims) → 4 Move every section onto the engine (one visit each, ratcheted) → 5 Front door on the same engine → 6 Lock + prove "add a recipe = no code."  *(~19–25 sessions; launch plumbing runs in parallel.)*

**The contract (Step 2) will reserve ~a dozen slots** so future features plug in without retrofitting — full list in `TINZA_CONTRACT_SLOTS.md`. Headline: structured `ingredients[]` & `steps[]`, a flexible `tags[]` array, `origin`, `goesWith[]`, `contains[]` (allergens), `visibility`; a `preferences{}` bag (name/birthday/whatsapp/locale/tier/diet/avoid…), `favourites[]`, `plans[]`, `pantry[]`; and `aisle` on prices.

## Files handed over with this brief
- `TINZA_CODE_HANDOFF.md` (this) · `TINZA_ROADMAP.mermaid` · `TINZA_CONTRACT_SLOTS.md`
