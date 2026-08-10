# MF147 · BEHAVIOUR RUNGS — WATCHING WHAT THE APP *DOES*, WITHOUT A BROWSER

**Ruled 26 Jul 2026 (Tina).** Brief for Code. ⚖️ Read `TINZA_RULINGS.md` §21.1 · §24.3 · Law 19 · Law 51 before starting.

---

## WHY THIS EXISTS

Three watchers exist and none of them caught the two bugs Tina found on 26 July:

| watcher | watches | missed it because |
|---|---|---|
| `tinza-lawcheck.js` | the rulebook / docs | the docs were fine |
| `tinza-census.js` | code **shape** (does the door exist, is the list complete) | the code shape was fine |
| `tinza-doctor.js` | data integrity | the data was fine |

**Everything was green while Just Feed Me served 3 recipes out of 158+ and offered chips as health food.**

⚖️ **NOTHING WATCHED WHAT THE APP DOES.**

🎯 **THE KEY INSIGHT — NO BROWSER IS NEEDED.** The mood engine is **pure functions**: `moodPool()`, `buildMoodPool()`, `getMoodPageRecipes()` and the `MOOD_QUERIES` predicates never touch the DOM. And `tinza-census.js` **already loads every section file and calls `allRecipes()` for real** — that is how Check 26 proves 2,083. So the census can call the mood engine directly, in Node, today.

⛔ **THIS IS NOT A PLAYWRIGHT TEST SUITE.** A full browser-driven suite was considered and declined in June 2026 — weeks to build and a second thing to maintain forever, at launch time. **Do not introduce Playwright, headless Chrome, jsdom, or any test framework.** This is four assertions inside the census Tina already runs every session. ⚖️ **Law 51 — a tool is a floor, not a gate. Exit 0 always.**

---

## THE FOUR ASSERTIONS

### ① EVERY MOOD CAN REACH PAGE 2
For each of the 12 moods: `getMoodPageRecipes(id, 1)` must return a non-null page.
**RED means:** a mood is a dead end — she taps it, gets 3 cards, and the shelf stops.
**Proof it can fail:** temporarily shrink a pool below 4 records → must go RED naming the mood.

### ② NO MOOD SERVES SOMETHING THAT IS NOT A MEAL
For each mood **except `sweet`**: walk the whole pool; assert every record's `slot` is in `_MOOD_MEALSLOT` (`SUPPER · LUNCH · BREAKFAST`). `sweet` is exempt by ruling — it promises a `TREAT`.
**RED means:** ⚖️ §21.1 — a side or starter is being offered as a meal. **This is the chips bug.**
**Proof it can fail:** re-point `healthy` at the old diet-only predicate → must go RED naming `healthy` and naming Slap Chips.

### ③ THE DISQUALIFIERS ARE NEVER SERVED
No mood pool may contain tinned meat (bully beef · spam · viennas), instant noodles, or tinned pâté. ⚖️ §21 MOOD DISQUALIFIERS — currently a written rule with **no mechanical watcher at all**.

### ④ EVERY FUNCTION IS REACHABLE
A function defined in `sections/*.js` and called by nothing is **either dead code or a missing button.**
**RED means:** exactly what happened — `getMoreMoodRecipes()` sat orphaned in `core.js:2430` from 21 Jul, 60 live lines with no caller, and nothing said a word.

⚠️ **THE CRY-WOLF TRAP, AND IT IS THE WHOLE DIFFICULTY OF THIS RUNG.** Most Tinza functions are called from `onclick="…"` **strings**, not from JS call sites. A naive "is `name(` present" probe would flag hundreds of live functions and Tina would learn to scroll past the rung — ⚖️ **a rung that cries wolf is worse than no rung.**
- **A call is:** `name(` in JS · `name(` inside any quoted string (onclick/onchange/onsubmit/setTimeout) · the name passed as a bare reference (`.map(name)`, `then(name)`) · `window.name`.
- **Same lesson as `barMode`, twice in two days:** a probe that only understands literal syntax misses helpers that take a name **as a string**. ⚖️ **Law 19.**
- **Start with an EXEMPT list** for genuine entry points and re-verify it by hand once. Born-RED is fine and expected; **freeze the count as a FLOOR, not a gate** *(⚖️ RED-N baseline, floor not gate)*.

---

## RULES OF ENGAGEMENT

- ⚖️ **PARSE, NEVER REGEX** on any record walk — load the file and walk objects. *(A lazy regex already produced one phantom data-loss alarm and one wrong statement to Tina about Bobotie.)*
- ⚖️ **PROVE EACH ASSERTION RED BEFORE CALLING IT DONE.** Re-introduce the bug, watch it go RED, restore, watch it go GREEN. **A rung that cannot fail is not a rung** — and this has been caught twice (`/function wkResetDrill/` matching `wkResetDrillX`; the 2,400-character `goBack()` window).
- ⚖️ **RULE NOTHING.** If an assertion needs a judgement call — which moods are exempt, where a threshold sits — **stop and ask Tina** (§2.3).
- `node --check` before handback. One logical change per commit.

---

## WHAT THIS DOES **NOT** COVER — SAID PLAINLY

These rungs prove the **engine** returns the right records. They cannot prove the **button renders**, that the tap fires, or that the page paints. Only a browser can, and Tina has declined that trade for now.

⚖️ **LAW 2 STANDS UNCHANGED — HER FINGERS ON LIVE CLOSE A BUG.** This brief only tells her where to put them.
