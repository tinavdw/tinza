# TINZA — UNIVERSAL RECIPE INDEX · Claude Code Brief
_Run 1 · whole-app · locked 3 Jul 2026_

## The one-line goal
Build **one index** — `allRecipes(filter)` — that returns **every recipe in every section** in a single normalised shape, so every finder (budget, search, dietary, anchor, mood) becomes just a filter over it. Then re-point the budget finder at it so **World Kitchen's ~135 SA mains + Africa + Europe** finally show up in "I've got Rxx".

## IMPORTANT — this is NOT a build-from-scratch
The World Kitchen converter you were told to write **already exists and works**. Do not rewrite it. It's in `sections/worldkitchen.js`:
- `wkParseIngredients(str)` → `[{qty, unit, name, note, toTaste}]` (per person; splits on `·`, strips parentheticals)
- `wkPriceLookup(name)` + `WK_ALIAS` map → resolves a name to PRICE_DB
- `wkCostRecipe(recipe, n)` → `{ priced, total, ... }` (a real per-serving cost)
- `RECIPE_SOURCES.world` is already registered; `openRecipe('world', id)` already works
- `wkPool()` → all WK recipes concatenated

So the actual missing pieces are: **(1) a universal index** that adapts all sections into one shape, and **(2) re-pointing the budget pool** at it. That's the whole job.

---

## SCOPE (locked): index ALL sections; budget finder stays mains-only
Every recipe goes **into the index** (findable by search). The **budget/meal finder filters to `mealRole === 'main'`**, so a drink, a condiment, a baby purée or a pet meal is searchable but never surfaces as tonight's supper. `mealRole` is the switch.

---

## 1 · The normalised record
Every adapter returns records of exactly this shape (read-only view over the section's own data — never mutate the source):

```js
{
  id,            // string, unique WITHIN section
  section,       // 'meals' | 'world' | 'health' | 'events' | 'floor' |
                 // 'braai' | 'beverages' | 'tiny' | 'spice' | 'furry'
  name,          // display name
  emoji,         // string
  mealRole,      // 'main' | 'side' | 'component' | 'snack' | 'drink' |
                 // 'condiment' | 'baby' | 'pet'   ← the finder switch
  diet,          // ALWAYS an array, lowercase: [] | ['veg'] | ['meat'] | ['vegan']
  protein,       // string|null  ('beef','chicken','pork','fish','veg'…)
  cuisine,       // string
  time,          // number (min) | null
  kcal,          // number | null
  costPP,        // number | null  ← null = "not confidently costed" (see §3)
  freezes,       // bool | null
  fridgeDays,    // number | null
  ingredients,   // ALWAYS [{n, pp, u}]  (n=buy-name, pp=per-person amount, u='g'|'ml'|'egg'|'')
  goesWith,      // string[]  (raw text pairings; wired to links later)
  searchText     // lowercased concat: name + nameAlt/aliases + cuisine + ingredient names
}
```

New file: **`sections/index.js`**, loaded in `index.html` AFTER all data + `worldkitchen.js` + `core.js`. It must expose `allRecipes(filter)` and `TINZA_ADAPTERS` on `window`.

`allRecipes(filter)` — filter is an object; keys AND-compose. Support at minimum:
- `mealRole: 'main'` (or array of roles)
- `maxCostPP: <number>` → keep records where `costPP != null && costPP <= n`
- `section: '...'` / `diet: 'veg'` / `text: '...'` (substring over `searchText`)
- no filter → everything.

---

## 2 · Per-section adapter table
All adapters are **read-only**. Discover the exported globals per section in-repo (names below are the known ones).

| section | source | mealRole | costPP | ingredients | notes |
|---|---|---|---|---|---|
| `meals` | `BREAKFAST_RECIPES`, `LIGHTLUNCH_RECIPES`, `SUPPER_RECIPES` | derive from `cat`* | use `costPP` | use `ingredients` `{n,pp,u}` | READY. `diet` is a **string** → wrap to array |
| `floor` | `BUDGET_FLOOR_RECIPES` | `'main'` | use `costPP` | use `ingredients` | READY |
| `health` | (discover array) | derive from `cat`/type* | use `costPP` | use `ingredients` | READY (180 costPP / 168 structured) |
| `events` | (discover events + eventsData arrays) | `'component'` default; `'main'` if buffet main | use `costPP` when present else null | use `ingredients` | READY |
| `world` | `wkPool()` | from `course` (`main`→main, `side`→side) | via `wkCostRecipe` **+ coverage gate §3** | `wkParseIngredients(r.ingredients)` → map `{n:name, pp:qty, u:unit\|\|''}` | converter EXISTS; `diet` already array |
| `braai` | `MEAT_GROUPS`, `SIDES_GROUPS` (flatten `.items`) | meat→`'main'`, sides→`'side'` | **null** (portion-brain, not per-person costPP — do NOT touch `calcMeat`) | best-effort from item data; else `[]` | index for SEARCH only |
| `beverages` | `beveragesData` array | `'drink'` | null (or `priceOf` later) | use `{n,pp,u}` | search only |
| `tiny` | `tinyTummies` array | `'baby'` | null | `[]` if absent | search only; per-age model untouched |
| `spice` | `SPICE_DB` | `'condiment'` | use `costPP` if present else null | `[]` | search only |
| `furry` | `furry` array | `'pet'` | null | `[]` | index but human finders exclude non-human roles by default |

**\* mealRole derivation from `cat`** (FMF + health): `salads · soups · staples · sides` → `side`/`component`; `stews · curries · bakes · plates · handhelds · roasts` → `main`. Anything unmapped → `main` for meals, `component` for health snacks. (This is URI U8(a).)

---

## 3 · The World Kitchen costPP coverage gate (critical — don't skip)
`wkCostRecipe` returns `{ priced, total }`. A recipe missing its **meat/main-protein** price will look artificially cheap (e.g. R8) and float to the **top** of the budget finder — a lie. So:

Set `costPP` from `wkCostRecipe` **only if**:
1. weighted priced-coverage is high (require `priced / total >= 0.8`), **AND**
2. the main protein line resolved in PRICE_DB (if the recipe has one).

Otherwise `costPP = null` → the record is still **searchable** but is **excluded from the budget finder** (which only accepts `costPP != null`). Log the skipped ones so Tina can fill the PRICE_DB gaps later (doubles as the app-wide pricing-hygiene audit — URI U2.3).

---

## 4 · Re-point the budget finder (the only existing file you may edit)
In `sections/budget.js`, replace the hand-rolled `_budgetPool` body with:

```js
function _budgetPool(perPersonBudget){
  var pool = allRecipes({ mealRole: 'main' })
    .filter(function(r){ return r.section !== 'braai'; });   // portion-brain, excluded
  if(perPersonBudget != null && perPersonBudget <= 15 &&
     typeof BUDGET_FLOOR_RECIPES !== 'undefined'){
    // floor already 'main'; allRecipes includes it — de-dupe by id, keep as-is
  }
  return pool;   // downstream still filters costPP <= per and sorts cheapest-first
}
```

Keep everything downstream of `_budgetPool` **unchanged** (the `costPP <= per` filter + cheapest-first sort already there). Keep the existing exclusions intact: **Breakfast, Sides & Basics, Bakes stay out** — they fall out naturally now because their `mealRole` isn't `main`. Keep floor-blend behaviour (≤ R60 / family of 4). This is the ONLY behavioural change to a working file, and it IS the declared purpose of the session (Stability Rule L5 satisfied).

---

## 5 · DEFERRED to Pass 2 (do NOT do in this run)
- Allergen / kosher / halal / diabetic / freezable facet **derivation** from ingredient names + macros — with the **honesty caveat** baked in (L10: "always check the label · not certified" / "not medical advice"). Never let a filter imply a safety/religious/medical guarantee.
- Wiring the 72 `goesWith` TEXT pairings → real cross-links (component + side = one costed meal, U8).
- Naming pass (Maizena → Maizena Porridge, etc.).

Run 1 = index + WK/all-section adapters + budget re-point. Nothing else.

---

## 6 · Locked workflow (non-negotiable)
1. `sections/index.js` is **NEW + additive**; every adapter is **read-only**. The only edit to an existing file is the `budget.js` `_budgetPool` re-point above.
2. Do **not** touch `core.js`, `worldkitchen.js`, `braai.js`, or any data file. Reuse their functions.
3. `node --check` on `index.js` and `budget.js` before any push.
4. **ONE commit** for the whole run. Push via **GitHub Desktop** (LF→CRLF warning is harmless).
5. After push, open **tinza.netlify.app** and confirm: (a) nothing that worked before is broken; (b) the R50 / family-of-4 finder now shows World Kitchen SA mains (e.g. Bobotie) that fit; (c) `allRecipes().length` in console ≈ sum of all sections.
6. Every page still renders only via shared `core.js` funcs (`var(--token)`); match **braai v33**.

## 7 · Done-when checklist
- [ ] `window.allRecipes` exists; no-filter returns every section's recipes in the normalised shape
- [ ] `allRecipes({mealRole:'main', maxCostPP:50})` returns FMF + Floor + **World Kitchen** mains (WK is the proof)
- [ ] WK records with poor price coverage have `costPP:null` and are absent from the budget finder but present in search
- [ ] Braai/beverages/tiny/spice/furry appear in `allRecipes()` but NOT in the budget pool
- [ ] budget finder visibly gains WK dishes at real re-costed prices; nothing previously working regressed
- [ ] `node --check` clean on both files; single commit; live-tested on tinza.netlify.app
