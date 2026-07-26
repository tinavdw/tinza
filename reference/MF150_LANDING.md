# MF150 · WHERE A SCREEN LANDS + THE UNLABELLED BACK SHELL
**Brief: Claude, 27 Jul 2026 · measured at HEAD `456bf17` (MF149 A–G, live) · implements §24.10 + §24.11**
**Both jobs found by Tina's fingers on live after MF149 shipped. Neither is an MF149 regression — both are older shapes MF149 made visible.**

✅ **No gates. Two commits, one push.**

---

## COMMIT A — §24.10 · THE LANDING LAW
**A push lands at the TOP. A lateral lands ON THE THING YOU TAPPED.**

**Measured cause:** `core.js:657` — `const jumpToContent = !screenChanged && root._savedScroll == null && !sameContext;` — then core.js:822–825 scrolls to `.content`'s top on ANY in-section navigation. Events → Finger Foods keeps `screen:'events'` and changes context, so it lands **below the banner with the top Back off-screen**. That feature predates the top Back meaning anything.

Build:
1. **Push → top.** Entering a level (`screenChanged` OR a non-lateral context change) → `scrollTo(0,0)`, double-rAF as the existing code already does. Delete `jumpToContent` as the default path.
2. **Lateral → the selected block.** When the only changed keys are in `LATERAL_KEYS` (commit C of MF149 — reuse that exact predicate, do NOT write a second one; ⚖️ Law 6), scroll so the **selected block's heading** sits at the top of the viewport. Finger Foods: tap **Meaty** → the "🥩 Meaty Snacks" heading lands at the top, not `.content`'s top and **not** where she was standing.
   - Mechanism: the rendered block for the active lateral gets a stable anchor (e.g. `data-lateral-block="<key>:<value>"` on the section wrapper); the scroll step queries it. If no anchor is found, fall back to `scrollTo(0,0)` — **never to "stay put"**, which is the reported bug.
3. **Leave alone, all already correct:** `openedRecipe` → 0 · Back/pop → `_savedScroll` restore · cooking steps → 0 · quiet toggles/sliders (`sameContext`) → hold position. ⚠️ A serving-size +/− or a collapsible must NOT be treated as a lateral — those are `sameContext` and must not move the page at all.

**Rung:** no push path lands at a non-zero scroll. Born RED against the current tree (Finger Foods entry proves it).
**Tina's live checks:** Events → Finger Foods opens at the very top, `← Home` visible · tap Meaty → lands on Meaty Snacks · tap Pastry → lands on Pastry · serving +/− on any recipe → page does not jump.

## COMMIT B — §24.11 · GIVE THE SHELL A LABEL ARGUMENT
**Measured:** `recipeDetailFromResult(r, backAction, servings, color, bg, border)` — **meals.js:15985** — has **no `backLabel` parameter**, so FMF, Mood and Search all hit the `'← Back'` default (core.js:3072 and core.js:4318). Its sibling `sectionPlanView()` was given the argument in MF149-B; this shell was missed because it was never a `sectionHeader()` caller. **This is the bare `← Back` Tina found in Family Meals and Mood — and a static sweep shows FOUR MORE rooms carry it unwalked: Budget, 4 Ingredients, Anchor Ingredient, General Search.**

Build:
1. Add `backLabel` as the **last** parameter of `recipeDetailFromResult` (omit-safe, same shape as `sectionPlanView`), pass it through to the `recipePage()` opts.
2. **Name it at ALL SIX call sites.** ⚠️ **CORRECTED 27 Jul after a static sweep — this brief first said three rooms and named Search wrongly. The measured list:**

| room | call site | today | after |
|---|---|---|---|
| Family Meals | meals.js:15382 | `← Back` | `← Family Meals` |
| Just Feed Me (Mood) | core.js:2587 | `← Back` | `← Just Feed Me` |
| Budget | budget.js:68 | `← Back` | `← Budget` |
| 4 Ingredients | meals.js:15763 | `← Back` | `← Home` |
| Anchor Ingredient | meals.js:15869 | `← Back` | `← Home` |
| General Search | utils.js:237 | `← Back` | `← Home` |

⚖️ **WHY THE SPLIT — it is the §24.9 clamp, not an inconsistency.** FMF · Mood · Budget are **three-deep** (room → list → recipe), so a recipe is depth 2 and two-up is the room's own name. Search · Anchor · 4 Ingredients are **flat** (front door → recipe), so a recipe is depth 1 and two-up is **Home** by the clamp Tina ruled this morning. **Reuse `topBack()` where a chain exists; do not hand-roll.**
3. **The sibling sweep is ALREADY DONE — do not re-open it.** All 18 `sectionHeader()` call sites pass a label; `planView()`/`shoppingView()` route their headers through `sectionHeader()`; `recipePage()` has one caller and it is `recipeDetailFromResult` itself. **`recipeDetailFromResult` is the only leaking shell in the app.** If you find a seventh caller of it, name it from the chain and say so in the handback.

**Rung (§24.11's general law):** every Back-rendering shell accepts a label argument, and **zero live callers rely on the `|| '← Back'` fallback**. The fallback may remain as a crash-guard; a caller depending on it is RED. Born RED at the current count.
**Tina's live check:** open any FMF recipe and any Just Feed Me recipe — the top Back names a room, never bare "Back".

## COMMIT C — census + `node --check` every touched file. ONE push.

---
## ⛔ NOT IN THIS BRIEF
- **Fix-queue ⑤ (Pannekoek / version-matched-but-parent-named)** — needs Tina's wording ruling first and spans four search surfaces. **Own session.**
- **MF148 Playwright** — still next after this lands.
