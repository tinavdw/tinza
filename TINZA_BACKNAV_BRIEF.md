# TINZA — Back-Navigation Fix (Claude Code brief)

_Prepared from a chat diagnosis, 3 Jul 2026. Hand this to Claude Code to reproduce + fix in-repo._

## Symptom
Tapping the **bottom-nav "Back"** from a section's results/list screen lands the user on a
previously-visited, unrelated screen — most often **FMF (Feed My Family)** — instead of the
section's logical parent (Home) or the section's own previous sub-state.

Reliable repro: Home → (visit FMF) → Home → **Budget** → tap a price → results →
"✨ Show me 3 more" → tap bottom **Back** → lands on **FMF**. Intermittent because it depends
on the user's actual browser-history path.

## Already fixed (3 Jul, live)
`core.js goBack()` now closes an open **budget recipe detail** first:
```js
function goBack(){
  if(typeof S!=='undefined'){
    if(S._budgetActiveRecipe && typeof budgetCloseRecipe==='function'){ budgetCloseRecipe(); return; }
    if(S.viewingRecipe && typeof closeRecipe==='function'){ closeRecipe(); return; }
  }
  try{ history.back(); }catch(_e){}
}
```
That covers Back **inside** a budget recipe. The REMAINING bug is Back from the budget
**results list** (no recipe open) → falls through to `history.back()`.

## Root cause (confirmed)
- `draw()` (core.js ~L513–521) pushes a history entry on every forward nav where
  `navSignature()` changes: `history.pushState({tinza,sig,snap:navSnapshot()}); _appNavDepth++`.
- `goBack()` → `history.back()` → the `popstate` handler (core.js ~L35–49) restores the
  snapshot of whatever screen **preceded in the user's real path**.
- So Back faithfully replays browser history. Because the path included FMF before Budget,
  Back walks to FMF. This is "working as coded" but not the user's mental model: **Back from a
  top-level section screen should go to its parent (Home), not an unrelated earlier screen.**
- Note: intra-budget actions (`selectBudget` / `findBudgetRecipes` / `getMoreBudgetRecipes`)
  use `setQuiet`, so verify whether they re-render via `draw()` (and thus push history) or not —
  this affects how many history entries sit between "Budget" and "FMF".

## Key code (core.js unless noted)
- `set()` L1 · `NAV_DATA_KEYS` L15 · `navSignature()` L27 · `navInit()` + `popstate` L30–49
- `draw()` pushState block L513–521 · `goBack()` L351 · `_appNavDepth` L22
- `budget.js`: `selectBudget` / `findBudgetRecipes` / `getMoreBudgetRecipes` (setQuiet usage)

## Proposed approaches (evaluate + TEST in-repo; pick the cleanest)
1. **Logical-parent Back (recommended).** Give `goBack()` a small `screen → parentScreen`
   map (default `'home'`). When no detail/recipe is open, navigate to the parent via
   `set({screen:parent, …resets})` instead of `history.back()`. Predictable, matches the
   existing top "← Home" buttons.
2. **Clean history pairing.** Keep `history.back()` but ensure entering a section pushes a
   single clean Home→section entry and intra-section state changes don't add confusing
   entries; then back() reliably returns to Home.
3. **Long-term (NX2 enrichment migration).** mood / meal / events / WK recipe details also
   open OFF the universal `viewingRecipe` path (`_budgetActiveRecipe` · `moodActiveRecipe` ·
   `mealActiveRecipe` · `wkRecipeDetail`), so they share this latent bug. Routing ALL detail
   opens through `openRecipe → viewingRecipe` lets `goBack()` catch them uniformly.

## Test matrix (device Back button AND bottom-nav Back)
- Home → Budget → results → Back ⇒ Home
- Home → FMF → Home → Budget → results → "more" → Back ⇒ Home (NOT FMF)
- Budget → open recipe → Back ⇒ budget results (already fixed — keep working)
- WK → country → recipe → Back ⇒ WK list (not an earlier section)
- Confirm plans / sliders / carts survive (NAV_DATA_KEYS restore still works)

## Constraints (locked)
- `core.js` is **sacred**: back it up, record line count before/after, `node --check` before push.
- Push via **GitHub Desktop**, **ONE commit**. LF→CRLF warning is harmless.
- Match braai v33 behaviour; don't regress the device-back snapshot restore.
