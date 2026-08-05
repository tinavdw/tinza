# MF166 — THREE BUGS · THE RECORD

**Written 6 Aug 2026. Read-only session. NOTHING in `sections/` was edited, and no fix is
written here.** ⚖️ **THIS FILE IS THE RECORD, NOT THE BRIEF.** Each bug carries a VERDICT, the
evidence with `file:line`, what a fix would have to reach, and what must not be touched.
**The fix itself is the next brief's to write, one bug per brief.**

> 🩸 **THE HEADLINE THAT OUTRANKED EVERYTHING, AND IT IS GOOD NEWS.**
> The session opened on a fear: *"if fixes are being silently reverted by whole-file replacement,
> every fix on the board is at risk."* **They are not.** Both back-button commits survive at HEAD
> **byte-identical** (see **BUG 4**). No whole-file replacement overwrote anything. The two
> symptoms that looked like one regression have **two unrelated causes, and neither is a fix that
> went missing.**

> ⚠️ **THIS FILE WAS REVISED THREE TIMES MID-SESSION, AND IT IS NAMED FOR THREE BUGS BUT HOLDS
> FIVE.** Tina pinned the Just Feed Me symptom in writing after the first draft (**BUG 4**), pinned
> it again on live after the second (**BUG 5**), then **walked the whole sequence with a screenshot
> after every press** (**BUG 5 §5b**). Each pass **superseded a verdict Claude had already
> written.** The withdrawn readings are recorded in place rather than deleted — ⚖️ *a struck verdict
> that vanishes gets re-reached next month.*
>
> 🩸 **AND THE LAST PASS BROKE CLAUDE'S REPRODUCTION, NOT JUST ITS CONCLUSION.** The sandbox
> reaches Home in **2** bottom presses; her device took **4**. ⛔ **That gap is unexplained and is
> flagged as such in BUG 5 §5b — it is not smoothed over anywhere in this file.**
>
> 🩸 **THE JUST FEED ME BACK BUTTON IS THREE SEPARATE DEFECTS STACKED ON ONE SYMPTOM** — BUG 4
> (level vs lateral · a RULING), BUG 4 §1 (the length signature), and BUG 5 (the stale snapshot).
> ⛔ **Fixing any one of them alone leaves the other two.**

---

# BUG 1 · THE HEALTHY SHELF

**Symptom, live:** *"I want to be healthy"* returns **Creamy Mac & Cheese · Berry Frozen Yoghurt
Bark · Chips.**

## ⛔ VERDICT: **NEVER COMMITTED. THIS IS NOT A REGRESSION.**

**There is no fix to have regressed.** The healthy shelf has been a keyword guess since the day it
was written, and it is doing exactly what it says.

## Evidence

| # | fact | `file:line` |
|---|---|---|
| 1 | `var MOOD_TAGGED = { celebrating: true };` — **one** mood is tag-driven. `healthy` is absent. | **`core.js:2521`** |
| 2 | `buildMoodPool()` branches on it: tag path vs predicate path | **`core.js:2523`** · tag `core.js:2536-2538` · predicate **`core.js:2539-2541`** |
| 3 | The predicate `healthy` falls to: `r.section === 'health' \|\| _moodDiet(r, ['vegan','vegetarian','pescatarian'])` | **`core.js:2495`** |
| 4 | The eat-slot gate admits `SIDE` and `TREAT` | **`core.js:2472`** |

**Why those three dishes:** all three are vegetarian, so `_moodDiet` passes them. Chips is a `SIDE`
and Berry Frozen Yoghurt Bark is a `TREAT`, both admitted by `core.js:2472`. **The shelf returns
"anything vegetarian that is edible at a meal." Mac & Cheese is a correct answer to the question
the code is actually asking.**

## Git history — the "fix" was never made

| query | result |
|---|---|
| every commit touching `MOOD_TAGGED` | **exactly one** — `349aebf` *"MF123: FLIP celebrating — shelf reads mood tags, not MOOD_QUERY keywords"* (20 Jul) |
| `git log -S "healthy: true" --all` | **empty** |
| `git log -S "healthy:true" --all` | **empty** |
| every commit touching the predicate at `core.js:2495` | **one** — `4cbeb79 "moods"`, the line's birth. Never modified since. |

⚖️ **`349aebf` flipped `celebrating` and nothing else.** `healthy` has never been in `MOOD_TAGGED`
on any branch at any time.

## 🩸 THE TRAP — READ THIS BEFORE ANYONE "FIXES" IT

> ## **ZERO RECORDS CARRY A `healthy` TAG IN `moodTags.js` TODAY.**
> ## **ADDING `healthy: true` TO `MOOD_TAGGED` WOULD EMPTY THE SHELF, NOT FIX IT.**

That is the exact failure the code already warns about, in its own words at
**`core.js:2517-2520`**:

> *"🩸 A MOOD GRADUATES ONE AT A TIME, AND ONLY ONCE ITS TAGS ARE IN. Do NOT add a mood here
> before ~15 records carry it — census check 17 prints the tally, and Law 43 says a shelf under 10
> fires the PAID chef on page one. **Adding a name here with no tags behind it does not empty a
> shelf loudly; it empties it SILENTLY.** ⚖️ Law 3 · Law 43."*

📌 **The one-character change is the WRONG fix and it is a worse bug than the one it replaces** —
a wrong shelf announces itself; an empty one fires the paid chef at a Free user.

## What a fix would have to reach

1. **~15 records tagged `healthy` in `moodTags.js`** (`MOOD_TAGS`, **`moodTags.js:64`**) before
   anything is flipped. The staging already exists: `reference/MOOD_RECIPE_STAGING.md:110-121`
   stages three healthy records as **version chips** on Butter Chicken (`sp-butter-chicken`), Mash
   (`sb-mash`) and a chickpea Bunny Chow. **Three is not fifteen.**
2. **Then** `healthy: true` in `MOOD_TAGGED` (`core.js:2521`), one mood, on its own.
3. Census check 17 prints the tally — it is the gate, not a guess.

### ✍️ **THE TAGGING IS TINA'S CONTENT WORK, NOT CODE'S.**
⚖️ *A mood is a tag, not a keyword guess* (RULED 15 Jul, `core.js:2514`). **Which dish belongs on
the healthy shelf is a judgement about food, and Code has no standing to make it.** Code can flip
the switch and count the tally; it cannot decide that a lighter Butter Chicken is healthy and Mac
& Cheese is not. ⛔ **Do not let a session "seed" these tags to make a shelf fill up.**

## ⛔ Must NOT be touched
- **`celebrating`** — 130 tags, flipped 20 Jul, working. Not part of this.
- **`MOOD_EAT_SLOTS`** (`core.js:2472`) — the gate applies to *both* paths deliberately; it is not
  the fault here and narrowing it would break every other shelf.
- **`CHILD_FACING_MOODS` / `childSafe()`** (`core.js:2534`) — LAW 55 runs first, on the raw
  catalogue. Nothing in this bug goes near it.
- **The other 10 keyword shelves.** They have the same shape and are *not* in scope; changing the
  predicate mechanism would move all 12 at once.

---

# BUG 2 · SEARCH DOES NOT CLEAR

**Symptom, live:** tapping **Search** in the bottom nav while a recipe card is open is a **no-op** —
the card stays.

## ✅ VERDICT: **CONFIRMED. A MISSING KEY IN ONE OF TWO SCREEN-CHANGE PATHS.**

## Evidence — two paths, only one clears

| path | what it sets | clears `_searchActiveRecipe`? |
|---|---|---|
| `bottomBarGo()` else-branch — **`core.js:468`** | `{screen, viewingRecipe:false, searchScope:null, searchScopeLabel:null, mealSearch:'', searchQuery:''}` | 🔴 **NO** |
| `tinzaSearchBack()` — **`core.js:487-492`** | includes `_searchActiveRecipe: null` at **`core.js:490`** | ✅ yes |

And the render opens by honouring the stale key — **`utils.js:235-236`**:
```
function searchPageHTML() {
  if(S._searchActiveRecipe && typeof recipeDetailFromResult === 'function'){
    return recipeDetailFromResult(S._searchActiveRecipe, "setQuiet({_searchActiveRecipe:null})", …
```

**The mechanism, exactly:** `bottomBarGo('search')` sets `screen:'search'`, the stale
`_searchActiveRecipe` survives, `searchPageHTML()` sees it still set and returns **the same card**.
📌 **The screen genuinely changes. It just re-renders identically. A no-op by construction, not a
dead tap.**

## The sharpest form — the correct list already exists and this caller does not read it

**`core.js:67`**
```
const SIMPLE_RECIPE_KEYS = ['_anchorActiveRecipe','_fourActiveRecipe','_searchActiveRecipe'];
```
Its **only** consumer is `goBack()` at **`core.js:525-526`**. `bottomBarGo()` (**`core.js:461`**)
never reads it. ⚖️ **The list is right. One of its consumers does not consult it.** See the RUNG on
the one-list assumption below — this is its fifth appearance.

## Why Moods clears correctly — Tina's observation, and it strikes the dark-shell theory
Moods uses a **different state key entirely** (`moodActiveRecipe`) with its own consuming closers —
`closeMoodRecipe()` **`meals.js:16490`** and `closeMoodSelection()` **`meals.js:16508`**. **Nothing
in the Moods path ever sets `_searchActiveRecipe`,** so there is no stale key left behind to
survive a screen change.

🔴 **THE DARK SHELL IS STRUCK AS THE CAUSE.** ⚖️ Struck by **Tina, on live** — *"search DOES clear
correctly when reached from Moods"* — which no dark-shell explanation survives.
⚠️ **The d2 code fact still STANDS and is not struck:** search does render through the ORIGINAL
dark shell (`meals.js:16199`, and `meals.js:16092` names search as a non-warm caller). **It is
simply not what causes this.** Recorded in `MF165_C0_FINDINGS.md §1.2`.

## What a fix would have to reach
The gap is between two functions that both mean *"leave this screen"* — `core.js:468` and
`core.js:490` — and a declared list at `core.js:67` that only `goBack()` reads.

## ⛔ Must NOT be touched
- **`SIMPLE_RECIPE_KEYS` membership** (`core.js:67`). The comment at **`core.js:60-66`** records
  why `moodActiveRecipe` and the meal key are **deliberately absent**: they push a history entry,
  so they must be closed by *consuming* it, and putting them in this list re-creates the
  chips → recipe → chips loop Tina proved on live. ⛔ **Do not "complete" this list.**
- **`tinzaSearchBack()`** (`core.js:487`) — already correct, and it is the one definition two Back
  buttons were collapsed onto (`core.js:472-479`). Do not fork it.
- **`goBack()`** and `_appNavDepth` (`core.js:74` · `162` · `499` · `525`) — the back stack is not
  the fault here.

---

# BUG 3 · BUDGET SEARCH INPUT

**Symptom, live:** typing accepts **one letter, then loses focus**, and is **very slow**.

## ⚖️ VERDICT: **HALF CONFIRMED, HALF STRUCK.** The hypothesis was right about the cause of the
## focus loss and wrong about the cause of the slowness.

## ✅ CONFIRMED — focus death, per keystroke

| # | fact | `file:line` |
|---|---|---|
| 1 | `oninput="set({budgetSearch:this.value})"` — every keystroke calls `set()` | **`budget.js:90`** |
| 2 | `set()` is `Object.assign(S,upd); draw();` | `core.js` (`function set`) |
| 3 | `draw()` ends in **wholesale replacement**: `root.innerHTML = … + _body + bottomBarHTML();` | **`core.js:789`** |
| 4 | the input is re-emitted from the template string, so the DOM node is destroyed and rebuilt | **`budget.js:91`** — `value="${S.budgetSearch||''}"` |
| 5 | the `×` clear button **only exists when the box is non-empty**, so the markup structurally changes after character one | **`budget.js:94`** |

📌 **Item 5 is why the symptom is precisely "one letter".**

## 🔴 STRUCK — "re-filters the whole corpus per character"

**It does not re-filter at all while typing.**

| # | fact | `file:line` |
|---|---|---|
| 1 | `findBudgetRecipes()` is called **only from click handlers** | **`budget.js:158`** · **`182`** · **`216`** · **`420`** |
| 2 | the render reads **cached** results, it does not compute them | **`budget.js:61`** — `const results = S._budgetResults;` |
| 3 | the search term is consumed **inside** the finder, never at render | **`budget.js:349`** (`var q = …`) and **`budget.js:358`** (the `_passBudget` name test) |
| 4 | `_budgetPool()` does rebuild from `allRecipes({mealRole:'main'})` — **but only on button press** | **`budget.js:258`** |

### 📌 NAME IT CORRECTLY: **A FULL-APP RE-RENDER PER KEYSTROKE.**
Every character redraws the entire budget page — results list, bottom bar and all — via
`root.innerHTML` (`core.js:789`). That is the slowness. **The corpus is never touched while typing.**

### ⚠️ AND A THIRD THING FELL OUT OF THE READING, UNASKED
**Typing in that box does nothing visible until the button is pressed.** The `q` filter lives inside
`findBudgetRecipes()` (`budget.js:349`/`357`), which typing never calls. **A search box that
filters nothing as you type is its own bug, and it is not the one that was reported.** Recorded,
not investigated.

## ⛔ Must NOT be touched
- **`set()` / `draw()` / `core.js:789`.** This is the app's one render path. **Every screen in
  Tinza depends on it.** ⛔ A fix aimed at one input must not change how the app draws.
- **`findBudgetRecipes()`** (`budget.js:344`) and the `[lo, per]` band logic — the money rules are
  not the fault and are ruled elsewhere.
- **`_budgetPool()`** (`budget.js:258`) — its braai exclusion and floor-blend behaviour are
  deliberate and documented in place.

---

# BUG 4 · JUST FEED ME — TWO PRESSES TO RISE ONE LEVEL

**Symptom, pinned by Tina in writing, 6 Aug:** ⛔ **NOT the recipe level.** In a recipe, Back
returns to the Just Feed Me main screen **correctly**. **On the Just Feed Me MAIN screen, Back
takes TWO presses to reach the main menu. The first press does nothing visible.**

## ⚖️ VERDICT — **REVISED. THE EARLIER "PRESENT AT HEAD → CACHE" READING IS WITHDRAWN.**

> 🩸 **SUPERSEDES Bug 2 §B of the first draft of this file**, which concluded *"PRESENT AT HEAD →
> cache (Law 27)."* **That verdict was reached against the wrong symptom.** It measured the
> RECIPE-level Back — `closeMoodRecipe()` — which Tina has now confirmed **works**. The failure is
> one level up. ⚖️ **A verdict against the wrong symptom is not a weaker answer, it is a wrong
> one.**

**What still stands from that reading:** `closeMoodRecipe()` (**`meals.js:16490`**, `2c61855`) and
`closeMoodSelection()` (**`meals.js:16508`**, `b37944c`) are both **PRESENT AT HEAD and
byte-identical** to their commits. **Nothing was reverted.** The bug is not a missing fix.

## ✅ **THE REAL VERDICT: PICKING A MOOD IS REGISTERED AS A LEVEL, AND TINA'S FINGERS SAY IT IS A LATERAL.**

## Answering the three questions

### 1 · What pushes, what pops — and are they balanced?

| | `file:line` |
|---|---|
| **PUSH** — `history.pushState(…); _appNavDepth++` | **`core.js:831`** |
| fires only when `_pushMove`, i.e. `navSignatureCore()` changed | **`core.js:819`** |
| `moodSelected` is watched by the signature, as `(S.moodSelected\|\|[]).length` | **`core.js:108`** |
| `moodSelected` is **NOT** in `LATERAL_KEYS` → it is treated as a **LEVEL**, so it pushes | **`core.js:131-133`** |
| **POP** — `_appNavDepth = Math.max(0, _appNavDepth - 1)` in the popstate handler | **`core.js:162`** |
| the entry's own root depth is restored with it | **`core.js:164`** |

**Push/pop COUNTS are balanced** — one push per level entered, one decrement per popstate,
measured 0→1→2→3→2→1→0 (see **BUG 5 §1**).
⚠️ **BUT "balanced" was the wrong measurement and it did not survive Tina's finger.** The counts
are right and the **stored snapshot is stale**, which no count can see. ⚖️ **See BUG 5 — the
entry is earned, and it is still a duplicate on screen.**

### 🔴 BUT THE SIGNATURE RECORDS THE **LENGTH** OF THE MOOD ID, NOT THE MOOD

**`core.js:108`** stores `(S.moodSelected||[]).length`. Measured against the real `MOODS` list,
**four collision groups exist**:

| id length | moods that collide |
|---|---|
| 4 | `sick` · `lazy` · `cold` |
| 5 | `quick` · `fussy` · `sweet` |
| 7 | `impress` · **`healthy`** |
| 11 | `adventurous` · `celebrating` |

⛔ **Switching between two moods in the same row produces an IDENTICAL signature, so `draw()`
pushes NOTHING and `_appNavDepth` does not increment** — while the screen really did change.
⚖️ That is precisely the "signature gap" the contract warns about **in its own words**
(**`core.js:87-90`**): *"a level the signature cannot see is a level Back cannot walk — goBack()
step (3) finds nothing and falls through to step (4)… it produced the SAME symptom in five
different rooms."* **This is the sixth room.** ⚠️ Not proven to be the reported two-press cause —
recorded as a **separate, provable defect found while looking.**

### 2 · Does the first Back press change state, or is it a no-op?

⛔ **It is NOT a no-op, and it is NOT the Bug 2 shape.** `goBack()` (**`core.js:494`**) has **no
branch for `moodSelected`** — it falls through:

| step | `file:line` | what happens at the mood level |
|---|---|---|
| (2a) `moodActiveRecipe` → `closeMoodRecipe()` | `core.js:521` | not set — skipped |
| (2b) `SIMPLE_RECIPE_KEYS` loop | `core.js:525-528` | `moodSelected` is **not a member** (`core.js:67`) — skipped |
| **(3)** `if(_appNavDepth > _screenRootDepth) history.back()` | **`core.js:532`** | ✅ **this fires** |

The pop restores a **full deep clone of `S`** — `navSnapshot()` is `JSON.parse(JSON.stringify(S))`
(**`core.js:82-85`**) — so **`moodSelected` and `moodRecipes` both revert** to the values held by
the previous history entry. **The keys that change are `moodSelected` → `null` and `moodRecipes` →
`null`,** restoring the mood **picker**.
⚠️ Neither is in `NAV_DATA_KEYS` (**`core.js:55`** — verified: no `moodSelected`, no
`moodRecipes`), so nothing preserves them across the pop.

📌 **So the first press moves her from the mood LIST to the mood PICKER — one level, correctly.**
**It "does nothing visible" because both screens are titled Just Feed Me and read as one place.**

### 3 · Is this the same shape as Bug 2?

⛔ **NO.** Bug 2 is *a state key set on the way in that no closer clears* — `_searchActiveRecipe`
survives `core.js:468` and the render re-serves the stale card. **Here the key IS cleared**, by the
history entry's own snapshot. Different mechanism, different fix, **do not treat them as one job.**

## ⚖️ §24 — RECORDED AS A VIOLATION, AND THE RULING IT NEEDS

**§24 SPINE: top-Back = two levels, bottom-Back = one, uniformly.**

The code is serving **one level per press**. The dispute is **how many levels exist**:

| | says |
|---|---|
| **the code** | mood picker and mood list are **TWO levels** (`moodSelected` absent from `LATERAL_KEYS`, `core.js:131-133`) |
| **Tina's fingers** | they are **ONE place** — "the Just Feed Me main screen" — so Back should exit in **one** press |

⚖️ **§24.7's own definition decides it, and it is written at `core.js:112-113`:**
> *"A LEVEL is a place she walked INTO: Home → Supper → a recipe. **A LATERAL is a pill that swaps
> what ONE level SHOWS**: Homestyle Plates → Oven Bakes. She did not go anywhere."*

**A mood tile swaps what the Just Feed Me screen shows. By §24.7's own words that is a LATERAL.**
⛔ **But this is a RULING, not a code call, and it is Tina's** — the same call she already made for
`eventTab`, which is deliberately excluded from `LATERAL_KEYS` — *"It may only join this list if
her fingers ever prove the same symptom there, and they have not. DO NOT TOUCH A WORKING ROOM."*
(**`core.js:117-120`**). **Code does not get to decide that a mood is a pill.**

## What a fix would have to reach
One of two mutually exclusive answers, both one line, **neither to be written without the ruling**:
- **LATERAL** — the mood joins `LATERAL_KEYS` (`core.js:131-133`); picking a mood replaces the
  entry instead of pushing, and Back leaves Just Feed Me in one press.
- **LEVEL** — the two screens stay two levels and are made **visually distinct**, so the first
  press stops looking like nothing. That is a design change, not a nav change.

## ⛔ Must NOT be touched
- **`closeMoodRecipe()`** (`meals.js:16490`) and the recipe level. **Tina has confirmed it works.**
  ⚖️ *Never re-open a closed scar* — `2c61855` and `b37944c` are both intact and both earned.
- **`SIMPLE_RECIPE_KEYS`** (`core.js:67`) — `moodSelected` must **not** be added. The comment at
  `core.js:60-66` records that a key which PUSHES must be closed by CONSUMING the push; adding it
  here re-creates the chips → recipe → chips loop.
- **`eventTab`'s exclusion** from `LATERAL_KEYS` — explicitly ruled, explicitly untested by finger.
- **`navSnapshot()` / `NAV_DATA_KEYS`** — the restore is working correctly and is not the fault.

---

# BUG 5 · THE STALE SNAPSHOT — A HISTORY ENTRY THAT RENDERS AS THE ONE BELOW IT

**Tina, on live, 6 Aug:** *"On the JFM main screen, the FIRST Back press changes NOTHING VISIBLE.
Not subtly — nothing. The second press exits."*

## ✅ VERDICT: **CONFIRMED AND MEASURED.** A THIRD, SEPARATE DEFECT.

⚖️ **THREE DISTINCT DEFECTS, THREE SEPARATE JOBS. DO NOT MERGE THEM.**

| | defect | fixing it alone leaves |
|---|---|---|
| **BUG 4** | a mood is registered as a LEVEL; her fingers say LATERAL | this bug, untouched |
| **the length-signature defect** (BUG 4 §1) | signature stores `(moodSelected\|\|[]).length` | this bug, untouched |
| **BUG 5** | the pushed entry's **snapshot** renders as the entry below it | the two above, untouched |

⛔ **Fixing `LATERAL_KEYS` alone will not remove this.** Tina said so before it was measured, and
the measurement agrees.

## 1 · THE FULL SEQUENCE, MEASURED

Driven through the app's **own** `navSignature()` / `navSignatureCore()` / `navSnapshot()` in a
read-only sandbox. The push decision (`core.js:808-836`) lives inside `draw()` and cannot be called
without a DOM, so **that 5-line rule is transcribed verbatim, not re-derived.**

| step | `file:line` | history op | depth | root | entries |
|---|---|---|---|---|---|
| HOME | `core.js:151` | `replaceState` (navInit) | 0 | 0 | 1 |
| ENTER JFM | **`core.js:3172`** | **PUSH** | 1 | 1 | 2 |
| PICK MOOD | **`core.js:2832`** | **PUSH** ← 🩸 | 2 | 1 | 3 |
| CHEF RESULTS ARRIVE | **`core.js:2616-2617`** | **no signature change → NO history op** | 2 | 1 | 3 |
| OPEN RECIPE | **`meals.js:16480`** | **PUSH** | 3 | 1 | 4 |
| BACK out of recipe | **`meals.js:16492`** | POP → lands on the PICK MOOD entry | 2 | 1 | 3 |
| **BACK #1 on JFM main** | **`core.js:532`** | POP → lands on the ENTER JFM entry | 1 | 1 | 2 |
| BACK #2 | `core.js:541` (step 4) | → Home | 0 | 0 | 1 |

📌 **The counts are perfect. There is no unbalanced push.** ⚖️ *Tina's inference — "something
pushes an entry that no state change earned" — is the one part of her reading the measurement
does not support: the entry IS earned.* **Her observation was exactly right; the mechanism is one
step subtler.**

## 2 · WHICH STEP PUSHES THE DUPLICATE — **`core.js:2832`**

```
onclick="set({moodSelected:'${m.id}',moodRecipes:null,moodLoading:false});callMoodChef(…)"
```

The push happens at **that** draw. So the entry stores a snapshot in which
**`moodSelected` is set but `moodRecipes` is `null` and `moodLoading` is `false`.**

And the render branches on exactly those two — **`core.js:2737`**:
```
if(mood && (loading || recipes)){      // ← renders the LIST
```
With `loading:false` and `recipes:null`, the stored snapshot **falls past this branch and renders
the PICKER.**

### 🩸 MEASURED, NOT ARGUED — the two renders were generated and diffed

| state | `moodHTML()` output |
|---|---|
| **ENTER JFM entry** (`moodSelected:null`) | **7436 chars** |
| **PICK MOOD entry, AS STORED** (`moodSelected:'healthy'`, `moodRecipes:null`) | **7436 chars — BYTE-IDENTICAL** |
| what she is actually looking at (recipes arrived) | 3693 chars — different |

> ## **TWO ADJACENT HISTORY ENTRIES RENDER THE SAME PIXEL FOR PIXEL.**
> ## **THAT IS THE FIRST BACK PRESS, AND IT IS WHY IT DOES NOTHING.**

### The full walk, with what she SEES

1. Chef results arrive and update `S` **without pushing** (`moodRecipes` is not in the signature) —
   so the screen moves on while the stored entry does not. **The entry is now stale.**
2. Open a recipe → push. **Back out** (`meals.js:16492`) → lands on the PICK MOOD entry → `S` is
   replaced by its **stale** snapshot → **the recipes are gone and the picker renders.**
   ⚠️ **She reads this as "Back from a recipe works"** — she is on a Just Feed Me screen and it
   looks right. **It is already the wrong screen.**
3. **Back #1** → lands on ENTER JFM → renders the **identical** picker → **nothing visible.**
4. **Back #2** → depth 1 is no longer `> root` 1 → `goBack` step (4) → **Home. "The second press
   exits."**

⚖️ **Every symptom she reported is reproduced by the measurement, in order.**

## 3 · CLAUDE'S HYPOTHESIS — 🔴 **STRUCK**

> *"The recipe open pushes an entry, and `closeMoodRecipe()` restores state WITHOUT popping that
> entry, leaving it behind as the duplicate."*

**FALSE, on two counts:**
- `closeMoodRecipe()` **does** pop — `if(_appNavDepth>0) history.back()` at **`meals.js:16492`**,
  and the measured depth goes **3 → 2**. Nothing is left behind.
- The duplicate is **not** the recipe entry. It is the **PICK MOOD** entry (`core.js:2832`), and it
  is a duplicate **by render**, not by count.

⚖️ **Fourth struck hypothesis today. It was tested before it was recorded, which is why it cost a
sandbox run and not a day.** 📌 **The lesson is holding: state it, then measure it, never ship it
as a finding.**

## 4 · DOES THE SAME DUPLICATE EXIST IN THE OTHER ROOMS?

⛔ **NO — measured, with a stated reason.**

The shape requires **both**: (a) a key **in `navSignature()`** changes, so a push happens, **and**
(b) the content that would make the new screen look different arrives **later, without a push**.

Every other async room fails test (a) — its result keys are **not in the signature**, so nothing
is pushed and no entry can go stale:

| room | writes | in `navSignature()` (`core.js:108`)? |
|---|---|---|
| 4-ingredients | `_fourLoading` · `_fourResults` — `meals.js:15567` | **no** |
| anchor finder | `_anchorLoading` · `_anchorResults` — `meals.js:15691` | **no** |
| budget | `_budgetLoading` · `_budgetResults` — `budget.js:397` · `404` | **no** |
| **mood** | `moodSelected` — **`core.js:2832`** | ✅ **YES** |

### 🩸 AND THE MOOD ROOM DOES ONE THING NO OTHER ROOM DOES
Every other room declares itself **loading** when it starts loading:
`setQuiet({_fourLoading:true, …})` **`meals.js:15567`** · `setQuiet({_anchorLoading:true, …})`
**`meals.js:15691`**.

**`core.js:2832` sets `moodLoading:false` at the exact moment it begins loading**, and then calls
`callMoodChef()`. **That single `false` is what makes the stored snapshot render as the picker** —
`core.js:2737` would have rendered the list from `loading` alone.

---

## 🩸 §5b · TINA WALKED THE FULL SEQUENCE ON LIVE, SCREENSHOT AFTER EVERY PRESS

**6 Aug.** `pick-me-up` → shelf of 3 (Cottage Pie · Avocado Egg Bowl · Grilled Sardines, plan
button reading *"1 recipe · 2 people"*) → open Cottage Pie → Back.

⛔ **CLAUDE'S EARLIER FRAMING IS WITHDRAWN.** *"Either the duplicate compounds or the recipe exit
pushes"* was a **false choice** — the recipe exit pops cleanly (§5b.4) and the duplicate does not
compound in the sequence as written. **Both halves were wrong.**

### RESULT A — 🔴 **PROMOTED: UNCONFIRMED SYMPTOM → CONFIRMED DEFECT**

**Back out of the recipe LANDS ON THE TWELVE TILES. The shelf of 3 is gone. She must pick the
mood again.**

⚖️ **LAW 20 — emptying her question is right; emptying her WORK is theft.**
📌 **The earlier draft of this file guessed she "read it as correct." She had not been asked.**
⚖️ **Do not put a reading in her mouth to make a finding tidy.** She was asked, she walked it, and
she called it wrong.

**Reproduced in the sandbox, byte-exact:** the pop at `meals.js:16492` restores stack entry [2],
whose stored `moodRecipes` is `null` → `core.js:2737` falls past the list branch → **the picker,
7436 chars.**

### RESULT B — **§24 VIOLATED BY A FACTOR OF FOUR** *(mechanism confirmed · COUNT NOT REPRODUCED)*

After exiting the recipe she pressed the **bottom** Back — `goBack()`, **`core.js:443`** — **three
separate times**, screenshotting between each, and got **the same twelve-tile screen every time.
The fourth press reached Home.** The differing window widths are her browser between tabs, not a
render difference; the presses are distinct and confirmed press by press.

⚖️ **§24 SPINE: bottom-Back = ONE level.** **Four presses to rise one level, in the room she uses
most.**

> ## ⚠️ **CLAUDE COULD NOT REPRODUCE THE COUNT, AND SAYS SO.**
> The sandbox produces **TWO** identical tile screens and reaches Home on the **second** bottom
> press. Tina measured **four** tile screens and Home on the **fourth**. **Two entries in her live
> session are not created by the sequence as written.** ⛔ **The mechanism below is confirmed; the
> COUNT is not, and no part of this file should be read as explaining it.**

## §5b · THE FIVE ANSWERS

### 1 · Depth and rendered char count at every step

| step | `file:line` | history op | depth | root | chars |
|---|---|---|---|---|---|
| HOME | `core.js:151` | replaceState | 0 | 0 | — |
| ENTER JFM | `core.js:3172` | **PUSH** | 1 | 1 | **7436** |
| PICK MOOD `pickmeup` | `core.js:2832` | **PUSH** | 2 | 1 | **7436** |
| chef results · shelf of 3 | `core.js:2616-2618` | **no signature change → no op** | 2 | 1 | 5101 |
| open Cottage Pie | `meals.js:16480` | **PUSH** | 3 | 1 | 5379 |
| **Back 1 — exit recipe** | `core.js:521` → `meals.js:16492` | **POP** | 2 | 1 | **7436 ← tiles** |
| **Back 2 — bottom Back** | `core.js:532` step (3) | **POP** | 1 | 1 | **7436 ← tiles, identical** |
| **Back 3 — bottom Back** | `core.js:541` step (4) | → **HOME** | 1 | 1 | — |

### 2 · Every entry in the stack, and which branch `core.js:2737` takes

| idx | entry | stored state | branch |
|---|---|---|---|
| [0] | HOME | `moodSelected=[]` `moodRecipes=[]` `moodLoading=false` | n/a (`screen=home`) |
| [1] | ENTER JFM `core.js:3172` | `moodSelected=null` `moodRecipes=null` `moodLoading=false` | 🔴 **PICKER — falls past 2737** |
| [2] | PICK MOOD `core.js:2832` | `moodSelected="pickmeup"` **`moodRecipes=null`** **`moodLoading=false`** | 🔴 **PICKER — falls past 2737** |
| [3] | OPEN RECIPE `meals.js:16480` | `moodRecipes=[3]` `active=set` | RECIPE (`core.js:2720`) |

⚠️ **Entry [0] carries `moodSelected: []` — the boot default at `data.js:86`.** `[]` is **truthy**
and is not `null`; it survives only because `MOODS.find(m=>m.id===[])` returns undefined. **A
latent trap, recorded, not this bug.**

### 3 · How many consecutive entries render byte-identically

> ## **TWO — entries [1] and [2], at 7436 chars each, byte-identical.**

⛔ **NOT three.** **Tina's hypothesis is STRUCK AS STATED** — see §5b.6.

### 4 · Does exiting the recipe push, pop, or both?

**POP ONLY.** `closeMoodRecipe()` → `history.back()` at **`meals.js:16492`**, depth **3 → 2**.
✅ **The earlier 3→2 measurement SURVIVES the longer sequence.** No push, nothing left behind.

### 5 · Where is the shelf discarded?

⛔ **Nowhere. No line discards it — and that is the point.**

- `core.js:2832` pushes the entry, storing `moodRecipes: null`.
- `core.js:2616-2618` writes the shelf **and calls `draw()` — which does NOT push**, because
  `moodRecipes` is not in `navSignature()` (`core.js:108`). **The stored entry is never updated.**
- `meals.js:16492` pops, and `navSnapshot()`'s deep clone (`core.js:82`) faithfully restores that
  entry.

> ## ✅ **YES — `navSnapshot` IS RESTORING A SNAPSHOT TAKEN BEFORE THE SHELF EXISTED.**
> Confirmed by measurement: the entry stored by `core.js:2832` holds `moodRecipes = null`.

**The snapshot is not corrupt. It is honest about a moment that is two draws stale.**

### 6 · The hypothesis — 🔴 **STRUCK AS STATED, MECHANISM CONFIRMED**

> *"Three consecutive entries may all render the PICKER … if ENTER JFM, PICK MOOD and the
> post-recipe entry all carry `moodRecipes:null` / `moodLoading:false`."*

| | count |
|---|---|
| hypothesis said | **3** consecutive picker entries |
| **sandbox measured** | **2** — entries [1] and [2] |
| **Tina's finger measured** | **4** tile screens |

⛔ **The "post-recipe entry" is not a third entry.** Backing out of the recipe **pops**; it creates
nothing. There are only ever two picker-rendering entries in this sequence.

✅ **The MECHANISM is confirmed exactly as she described it** — `core.js:2737` with both operands
falsy draws the tiles, and that is why consecutive presses show the same screen.
🔴 **The COUNT is confirmed by nobody.** Three numbers, three different answers: 2 measured, 3
hypothesised, 4 observed. ⚖️ **Fifth hypothesis stated as a question and struck by measurement —
including, this time, Claude's own reproduction failing to match Tina's device.**

### ⚠️ WHAT WOULD CLOSE THE GAP
**Two history entries exist on her device that the written sequence does not create.** ⛔ Static
reading cannot find them; the sandbox already disagrees with the live count. **It needs
`_appNavDepth` read on her device at each press** — or the exact interactions between the recipe
exit and the presses, including whether the plan button (*"1 recipe · 2 people"* — `moodPlanView`
**is** in `navSignature()`, `core.js:108`) was touched at any point. 📌 **Every `moodPlanView`
toggle is a push.**

---

## §5c · THE PLAN BUTTON — MEASURED, AND IT DOES **NOT** CLOSE THE GAP

**Tina confirms she tapped** *"See my Just Feed Me Plan & Shopping List — 1 recipe · 2 people"*
during the session she measured. ⛔ **Not accepted as the explanation. Driven in the sandbox.**

### 1 · The sequence WITH plan taps — **it lands on 5, not 4**

| step | `file:line` | op | depth | ent | VIEW | chars |
|---|---|---|---|---|---|---|
| ENTER JFM | `core.js:3172` | PUSH | 1 | 2 | TILES | 7436 |
| PICK MOOD | `core.js:2832` | PUSH | 2 | 3 | TILES | 7436 |
| chef results | `core.js:2616-2618` | no op | 2 | 3 | SHELF | 5101 |
| **TAP PLAN** | **`core.js:2807`** | **PUSH** | 3 | 4 | PLAN VIEW | 1889 |
| **LEAVE PLAN** | **`core.js:2712`** | **PUSH** ← 🩸 | 4 | 5 | SHELF | 5101 |
| OPEN RECIPE | `meals.js:16480` | PUSH | 5 | 6 | RECIPE | 5342 |
| BACK 1 | `meals.js:16492` | POP | 4 | 5 | **SHELF** | 5101 |
| BACK 2 | `core.js:532` | POP | 3 | 4 | **PLAN VIEW** | 1889 |
| BACK 3 | `core.js:532` | POP | 2 | 3 | TILES | 7436 |
| BACK 4 | `core.js:532` | POP | 1 | 2 | TILES | 7436 |
| BACK 5 | `core.js:541` | → HOME | 1 | 2 | HOME | — |

> ## ⛔ **THE GAP IS NOT CLOSED. IT OVERSHOOTS.**
> **Sandbox with plan taps: 5 presses. Tina measured 4.** And the views disagree too — the walk
> passes through **SHELF** and **PLAN VIEW**, while she reported **tiles every time**.

⚖️ **Per Tina's own instruction — the number did not land on 4, so nothing is declared closed.**

| account | bottom presses to Home |
|---|---|
| sandbox, no plan tap | **2** |
| **Tina, live** | **4** |
| sandbox, one plan round-trip | **5** |

**Two entries were added and the count moved from 2 to 5, past her 4.** ⚠️ **Neither placement
reproduces her walk. One entry remains unaccounted for in one direction or the other, and the
intermediate VIEWS still do not match.** 📌 **Still open. Still needs `_appNavDepth` read on her
device.**

### 2 · What one plan round-trip costs — **+2 ENTRIES, MEASURED**

| action | `file:line` | history op |
|---|---|---|
| tap the plan button — `setQuiet({moodPlanView:true})` | **`core.js:2807`** | **PUSH (+1)** |
| leave the plan view — `setQuiet({moodPlanView:false})` | **`core.js:2712`** | 🔴 **PUSH (+1)** — it does **NOT** pop |

> ## **NET: +2 ENTRIES PER PLAN VISIT. LEAVING NEVER CONSUMES WHAT ENTERING PUSHED.**

⚖️ **That is a REAL defect and it is confirmed — see BUG 6. It is simply not big enough, or
correctly shaped, to explain her 4.**

---

# BUG 6 · A PLAN VIEW IS ENTERED BY A PUSH AND LEFT BY ANOTHER PUSH

## ✅ VERDICT: **CONFIRMED, MEASURED — AND IT IS IN THREE ROOMS, NOT ONE.**

⚖️ **DIFFERENT MECHANISM FROM BUG 5, SO IT IS ITS OWN BUG.** Bug 5 is a **stale snapshot**; this is
a **non-consuming closer**. ⛔ They share a symptom and nothing else.

🩸 **THIS IS THE MF151-B DISEASE, THIRD OCCURRENCE.** `b37944c` fixed exactly this shape for the
mood-SELECTION level and wrote why (**`meals.js:16498-16507`**): *"went back up with a plain
setQuiet, which does not consume that entry — **it pushes a FRESH one**."* **The plan views never
got the same treatment.**

### 🩸 AND THE SAME COMMENT ALREADY DESCRIBED **BUG 5**, ON 26 JULY
**`meals.js:16502-16503`**, written seven weeks before Tina's screenshots:
> *"…each later Back press consumed one and **restored a snapshot identical to the picker she was
> already looking at: the screen did not move.**"*

⚖️ **THE PHENOMENON WAS WRITTEN DOWN, IN THIS REPO, IN PLAIN ENGLISH — and it was recorded as
CURED at one level rather than as a SHAPE that could recur at others.** MF151-B fixed the mood
level and named it *"THE SAME DISEASE, THE LEVEL ABOVE THE RECIPE"* — **it did not ask where else
the disease lived.** Bug 5 is it one level up; Bug 6 is it in three plan views.
📌 **RUNG: when a fix names itself "the same disease," the next question is WHERE ELSE — and that
question was never asked.**

### Every plan view in the app has it

| room | closer passed to `sectionPlanView()` | key in `navSignature()` (`core.js:108`) |
|---|---|---|
| **Budget** | `setQuiet({budgetPlanView:false})` — **`budget.js:59`** | ✅ `budgetPlanView` |
| **Just Feed Me** | `setQuiet({moodPlanView:false})` — **`core.js:2712`** | ✅ `moodPlanView` |
| **Meals / search** | `setQuiet({mealPlanView:false})` — **`meals.js:15376`** | ✅ `mealPlanView` |

**All three push on the way in and push again on the way out. Every plan visit in Tinza leaves two
stray entries behind.** ⚖️ **The shopping list is the most-used surface in the app.**

## What a fix would have to reach
`sectionPlanView()`'s closer argument, in three call sites — or one consuming closer the three
share. ⚠️ It is the **same one-line shape** `closeMoodSelection()` already uses (`meals.js:16509-16511`).

## ⛔ Must NOT be touched
- **`sectionPlanView()` itself** — the renderer is fine; only the closer string passed to it is wrong.
- **`closeMoodSelection()`** (`meals.js:16508`) — already correct. **Copy it; do not edit it.**

---

## ⚠️ THE SECOND SYMPTOM, NOW PROMOTED TO RESULT A
Because the stale snapshot has `moodRecipes:null`, **backing out of a mood recipe throws away the
shelf she was reading.** ✅ **No longer "recorded, not investigated" — Tina confirmed it on live
and it is RESULT A above.** ⚖️ Law 20.

## ⛔ Must NOT be touched
- **`navSnapshot()`** (`core.js:82`) — the deep clone is correct and complete. **The snapshot is
  not broken; it was taken at the wrong moment.**
- **`closeMoodRecipe()`** (`meals.js:16490`) — proven to pop correctly. ⚖️ Closed scar.
- **The push rule** (`core.js:808-836`) — it behaved exactly as specified at every step.
- **`moodRecipes` must NOT simply be added to `navSignature()`** — every page of chef results would
  then push its own entry, and Back would walk her through all of them. That is the pill-tap
  disease §24.7 was written to kill (`core.js:110-116`).

---

# ⚖️ RUNGS — WHAT THIS SESSION IS OWED BEYOND THE THREE FIXES

## RUNG 1 · **A MEASUREMENT REMEMBERED AS A FIX IS WORSE THAN NO MEASUREMENT.**

**20 Jul produced `reference/MOOD_RECIPE_STAGING.md` under commit `edd6d41`** — *"reference:
12-shelf mood measurement — 1 of 12 on real tags, 11 keyword guesses"*. Its own commit body says:

> *"Measurement only. No shelf, tag, slot or predicate was changed."*

🩸 **Both Tina and Claude then carried it for two weeks as "we fixed the moods."** It was written
down, correctly, in the commit message — and the memory of *having looked at it* did the work of
*having fixed it*.

⚖️ **Law 3 — a document that is wrong is silent. So is a measurement that is remembered as a
change.** A file that measures must be impossible to mistake for a file that fixes.
📌 **Every future measurement-only artefact states in its FIRST line that it changed nothing** —
`MF165_C0_FINDINGS.md` and this file both do.

## RUNG 1b · ⚖️ **DO NOT PUT A READING IN HER MOUTH TO CLOSE A GAP.**

🩸 **An earlier draft of BUG 5 said Tina *"reads this as 'Back from a recipe works'"* — she is on a
Just Feed Me screen and it looks right.** **She had never been asked.** She had not said it, had
not implied it, and when she *was* asked she called it wrong (**RESULT A**). Claude caught it and
removed it, **but only after writing it into a governance file.**

⚖️ **WHY THIS IS LAW-GRADE AND NOT A STYLE NOTE:** the invented reading was doing **load-bearing
work**. It explained away the one part of the symptom the measurement could not reach. **A story
that closes a gap feels exactly like a finding that closes a gap, and only one of them is true.**

📌 **Same family as the other two, and this is the family:**

| rung | the tidy story that stood in for a measurement |
|---|---|
| **RUNG 1** | a MEASUREMENT remembered as a FIX (`MOOD_RECIPE_STAGING.md`, 20 Jul → carried two weeks as "we fixed the moods") |
| **RUNG 1b** | a READING put in her mouth to explain what the measurement missed |
| **RUNG 3** | a HYPOTHESIS recorded as a finding — seven struck in one day |
| **BUG 4 §1** | **a signature that measures LENGTH is not a signature** — `(S.moodSelected\|\|[]).length`, `core.js:108` |

⛔ **THE RULE: WHEN THE MEASUREMENT STOPS, THE FILE STOPS.** Write "unexplained" and name what
would explain it. ⚖️ **Never narrate across the gap.**
✅ **It held the second time:** §5c had every reason to declare the plan button the answer — Tina
had confirmed the tap herself — and it says **"does not close the gap, it overshoots to 5"** instead.

## RUNG 1c · ⚖️ **A NAVIGATION SIM WITH NO CLOCK CANNOT REPRODUCE A HUMAN'S HANDS.**

🩸 **The sandbox fired every press in the same tick. Tina pauses, reads, screenshots, pastes.** A
sim with no clock is **measuring a user who does not exist** — and it produced a number (2) that
was **correct for a user pressing back-to-back and wrong for the one holding the phone.**

⚖️ **THE SIM WAS NOT WRONG. IT WAS INCOMPLETE IN A DIMENSION NOBODY HAD NAMED.** It reproduced
RESULT A byte-exactly (7436 chars) and it reproduced her fast-press count exactly (2). **The gap
was never in its logic; it was in its physics.**

📌 **Filed beside its family:**
| rung | the thing that stood in for the truth |
|---|---|
| **RUNG 1** | a MEASUREMENT remembered as a FIX |
| **RUNG 1b** | a READING put in her mouth to close a gap |
| **RUNG 1c** | **a SIM WITH NO CLOCK standing in for a pair of hands** |
| **RUNG 3** | a HYPOTHESIS recorded as a finding |
| **BUG 4 §1** | **a signature that measures LENGTH is not a signature** |

### ⚖️ THE SCOPE LIMIT THIS EXPOSES — IT APPLIES TO **EVERY** MEASUREMENT IN THIS FILE
> **Every sandbox run this session fired in a single tick.** They are **trustworthy for instant
> sequences** and **BLIND to anything that lands during a pause.**

⛔ **This does NOT invalidate what they found** — RESULT A reproduced byte-exactly, the +2 plan
entries are real, the 0-pushes-from-idle result is real. ✅ **It defines the EDGE of what has been
measured, and that edge is now written down instead of being discovered again in a month.**
📌 **Any future nav claim from a Node sandbox must state whether it fired in one tick.**

## RUNG 1d · ⚖️ **A COMMIT THAT NAMES A DISEASE MUST ASK WHAT ELSE HAS IT.**

**MF151-B (`b37944c`, 26 Jul) titled itself** *"§24.6 ONE LEVEL DOWN — **THE SAME DISEASE**, THE
LEVEL ABOVE THE RECIPE"* (`meals.js:16498`). It knew it was curing a **shape**, not an incident.
It fixed **one** level and stopped.

🩸 **The same shape was live in three more places the whole time:**
| where | status |
|---|---|
| mood SELECTION level | ✅ fixed by MF151-B |
| **the JFM plan view** (`core.js:2712`) | 🔴 **BUG 6** |
| **the Budget plan view** (`budget.js:59`) | 🔴 **BUG 6** |
| **the Meals plan view** (`meals.js:15376`) | 🔴 **BUG 6** |

**And its own comment described BUG 5's symptom in plain English** (`meals.js:16502-16503`) —
*"restored a snapshot identical to the picker she was already looking at: the screen did not
move"* — **seven weeks before Tina screenshotted it.**

⛔ **THE RULE: when a commit message contains "the same X", "this class of", or "the same shape",
the commit is not done until it lists WHERE ELSE and either fixes or files each one.** ⚖️ **Naming
a disease and treating one patient is how a cured bug stays live in three rooms.**

## RUNG 2 · **THE ONE-LIST ASSUMPTION — FIFTH BITE.**

`SIMPLE_RECIPE_KEYS` (`core.js:67`) is **the correct list**, kept for **the right reason**, with
its exclusions **documented in place** (`core.js:60-66`) — and **only one of its consumers reads
it** (`goBack()`, `core.js:525-526`). `bottomBarGo()` (`core.js:461`) does the same job and does
not.

**The same shape, now five times:**

| # | tool / caller | the assumption | status |
|---|---|---|---|
| 1 | `splitreport.js` | one record array per `wk_*.js` | **fixed** (found `FR_SAUCES`) |
| 2 | `pricecheck.js` | `COUNTRIES` maps one varName per file | **still open** |
| 3 | `tinza-doctor.js` §13 | scans `/^WK_[A-Z_]+$/` only | **still open** |
| 4 | `anchorreport.js` | carried a second copy of the fixed loader | **logged debt** |
| 5 | **`bottomBarGo()`** | a shared key list only one caller consults | **this file** |

⚖️ **THE PATTERN IS NOT "SOMEONE FORGOT A FILE." IT IS: A SHARED LIST EXISTS, AND A CONSUMER
DOES NOT ASK IT.** ⛔ The rung that would catch this class does not exist yet in any watcher.

## RUNG 3 · **STRUCK HYPOTHESES — RECORDED, WITH WHO STRUCK THEM**

⚖️ *A hypothesis that is quietly dropped gets re-proposed next month.* Both were carried into this
session and both are dead. **Neither may be re-proposed without new evidence.**

| hypothesis | held by | STRUCK by | how |
|---|---|---|---|
| **The dark shell (d2) explains why search does not clear** | implied by Claude's `MF165_C0_FINDINGS.md §1.2` framing | 🩸 **TINA, on live** | *"search DOES clear correctly when reached from Moods"* — Moods uses a different key entirely, so no shell-level explanation survives. Real cause: `core.js:468`. |
| **Each keystroke re-filters the whole corpus** | **Tina**, stated explicitly as *"My hypothesis, UNPROVED"* | **Claude, by reading** | `findBudgetRecipes()` is called only from `budget.js:158/182/216/420`; the render reads cached `S._budgetResults` (`budget.js:61`). |
| **Just Feed Me's Back is a cache problem (Law 27)** | Claude, first draft of this file | 🩸 **TINA, on live** | She pinned the symptom in writing: the failure is the MAIN screen, not the recipe. The verdict had been measured against the wrong symptom. → **BUG 4** |
| **`closeMoodRecipe()` fails to pop, leaving the duplicate** | Claude, offered as a question by Tina's instruction | **Claude, by measuring** | It does pop — `meals.js:16492`, depth 3→2. The duplicate is `core.js:2832`'s entry, and it duplicates **by render, not by count.** → **BUG 5 §3** |
| **"Either the duplicate compounds or the recipe exit pushes"** | Claude | **Claude, by measuring** | A **false choice** — neither. The exit pops cleanly and nothing compounds. → **BUG 5 §5b** |
| **Three consecutive entries all render the picker** | Tina, stated as a question | **Claude, by measuring** | **Two**, not three — entries [1] and [2] at 7436 chars. The post-recipe "entry" is a pop, not a push. → **BUG 5 §5b.6** |
| **Claude's sandbox reproduces the live press count** | Claude, implicitly | 🩸 **TINA'S SCREENSHOTS** | Sandbox says 2 tile screens and Home on press 2. She measured **4** and Home on press 4. **The reproduction is wrong and the gap is unexplained.** → **BUG 5 §5b** |

🩸 **SEVEN STRUCK IN ONE DAY.** ⚖️ **THE RUNG IS NOT "CLAUDE GUESSES BADLY" — IT IS THAT EVERY ONE
WAS STATED AS A QUESTION AND KILLED BY A MEASUREMENT BEFORE IT REACHED A FILE.** Tina began
labelling her own hypotheses UNPROVED, and instructed the fourth be *"treated as a question, not a
finding."* **That instruction is the reason Bug 5 is a measurement and not a fifth wrong answer.**
📌 **Two of the four were struck by Tina's finger, two by Claude reading code. Neither source
outranks the other; the loop is what works.**

📌 **Tina marked her own hypothesis UNPROVED before it was tested, and it was half wrong. That
labelling is why it cost ten minutes instead of a day.** ⚖️ The habit is the rung, not the outcome.

⚠️ **The instruction that produced this section was truncated mid-sentence** — it ends *"Record
both as STRUCK, with who struck"*. Attribution above is reconstructed from this session's own
transcript and is **checkable against it**; ✍️ **Tina: confirm or correct the two "held by" rows**,
which are the only judgement calls in the table.

---

# BUG 7 · THE EXTRA PRESSES NEED A CLOCK TO SEE — **AND THEY ARE NOT IN `sections/`**

## 🩸 TINA FOUND THE MISSING VARIABLE: **ELAPSED TIME BETWEEN PRESSES**

| how she pressed | presses to Home |
|---|---|
| **straight through, back to back, no pause** | **2** — one dead press, then Home |
| **pausing 20-40s between each** (screenshotting, pasting) | **4** |

**Same sequence. Same taps. The only difference is elapsed time.**

## ⚖️ THIS CLOSES THE 2-VS-4 GAP, AND CLOSES IT HONESTLY
✅ **The sandbox was right and reproduces her hands exactly — it just has no clock.**
⛔ **It was NOT closed by the plan button**, which overshot to 5 (§5c). ⚖️ **The tidy story was
available and wrong; the measurement that said "does not close the gap" was right.** See RUNG 1b.

## ⛔ THE TWO DEFECTS NOW SEPARATE CLEANLY — **FILED APART**

| | defect | needs a clock? | fixed by |
|---|---|---|---|
| **BUG 5** | **THE DEAD PRESS** — `core.js:2737` draws the picker from a stale snapshot | ⛔ **NO** — instant, reproducible, byte-exact | **MF167** |
| **BUG 7** | **THE EXTRA PRESSES** — appear ONLY with elapsed time | ✅ **YES** — the only thing on the board that does | **unassigned** |

## THE INVESTIGATION — TREATED AS A QUESTION, AND IT RETURNED A NEGATIVE

### 1 · Every async writer that can act while the JFM screen sits idle

| what | `file:line` | writes | calls `draw()` |
|---|---|---|---|
| the 800 ms AI poll | **`core.js:2662-2672`** | `moodRecipes` | ✅ `core.js:2670` |
| `startMoodAIFetch(...).then` | **`core.js:2680-2684`** | `moodRecipes` | ✅ |
| `startMoodAIFetch` internals | **`core.js:2597-2599`** | `moodAIRecipes` · `moodAILoading` | ✅ `core.js:2599` |
| OS theme change | **`core.js:604`** | nothing | ✅ (only if `THEME==='auto'`) |
| cooking timer | **`utils.js:11`** | module-local `_timerRemaining` only — **no `S` write, no `draw()`** | ❌ |
| index warm-up | **`index.js:846-848`** | nothing — one-shot `allRecipes.raw()` | ❌ |
| How-it-works / portion-help closers | **`core.js:609-617`** · **`622-630`** | `howItWorksOpen` · `portionHelpOpen` | ✅ but **click-triggered, not timed** |

**Complete listener inventory — only four in the whole app:** `popstate` (`core.js:152`),
`matchMedia change` (`core.js:604`), and two `document click` handlers (`core.js:617`, `630`).
⛔ **No `visibilitychange`, no `focus`, no `online`, no `message`, no service-worker registration
in `index.html`.**

### 2 · Which of them write a key in `navSignature()` (`core.js:108`)?

> ## **NONE. NOT ONE.**
> `moodRecipes` · `moodAIRecipes` · `moodAILoading` · `_timerRemaining` · `howItWorksOpen` ·
> `portionHelpOpen` — **none is in the signature, so none can push.**

### 3 · The sim re-run with a simulated 30 s idle before every press

**Every writer above was fired during each idle window, then `draw()` called exactly as the real
continuation does.**

> ## **RESULT: 0 PUSHES FROM ALL IDLE WINDOWS COMBINED. THE COUNT DOES NOT MOVE.**

⛔ **The count does NOT go 2 → 4.** A sim with a clock returns the same number as a sim without one.

### 4 · Does `callMoodChef` or a continuation resolve late and push after she navigates away?

**It resolves late — `core.js:2662` polls every 800 ms and `core.js:2680` awaits a fetch — and
neither is guarded by `S.screen` or `S.moodSelected`, so both DO write and draw after she has
navigated away.** ⚠️ **But they write no signature key, so they push nothing.**
📌 **Recorded as a real unguarded-continuation smell. It is not this bug.**

## 🔴 THE HONEST VERDICT ON BUG 7

> ## **THE TIMING MECHANISM IS NOT VISIBLE IN `sections/`.**
> Every timer, promise, poll and listener in the app was enumerated. **None writes a key that can
> push a history entry.** Whatever adds entries during a pause is **not in the code this session
> can read.**

⚠️ **ONE UNTESTED IDEA, RECORDED AS A QUESTION AND NOT AS A FINDING.** ⚖️ *Claude has had five
hypotheses struck today and is not offering a sixth as fact.*
> `history.back()` is **asynchronous** — `popstate` fires on a later task. **Rapid presses may
> therefore consume more than one entry each, while paced presses consume exactly one.** That would
> mean **the four entries are present in BOTH cases**, and speed changes only how many each press
> eats — i.e. **fast pressing is the anomaly, not slow pressing.**
> ⛔ **UNPROVEN. It inverts the framing and must not be written into a fix until measured.**

**What would settle it:** `_appNavDepth` and `history.length` read on her device at each press, at
both speeds. ⛔ **Nothing in a Node sandbox can answer this** — see the scope limit below.

---

# 🏁 THE RANKING — WHAT TO DO FIRST, AND WHAT IT RISKS

⛔ **NO FIX IS WRITTEN ANYWHERE IN THIS FILE.** This is the order of the board, not the code.

## A · THE SMALLEST FIX THAT MAKES **ONE PRESS EXIT**

**No single change does it.** Measured — the JFM stack holds up to **five** entries and three
separate defects put them there.

| # | change | entries removed | one line? |
|---|---|---|---|
| 1 | **BUG 6** — the plan closer consumes instead of pushing (`core.js:2712`) | **−2 per plan visit** | ✅ yes |
| 2 | **BUG 4** — `moodSelected` joins `LATERAL_KEYS` (`core.js:131-133`) ⚠️ **RULING FIRST** | **−1** | ✅ yes |
| 3 | **BUG 5** — the snapshot is taken after the shelf exists, not before (`core.js:2832`) | **0** — but the presses stop being invisible **and the shelf survives** | ✅ likely |

> ## **SMALLEST HONEST ANSWER: BUG 6 + BUG 4. TWO ONE-LINE CHANGES.**
> With no plan visit, BUG 4 alone collapses picker+shelf to one level and a single press exits.
> With a plan visit, BUG 6 is required as well or two strays remain.

🩸 **BUG 5 REMOVES NO PRESSES AND SHOULD STILL GO FIRST.** ⚖️ **Law 20 — it is the one that loses
her work.** A press that does nothing is an annoyance; a shelf that vanishes is theft. **Count is
not the ranking; harm is.**

## B · CAN THEY SHIP AS SEPARATE PROVABLE COMMITS? — **YES, ALL SIX.**

Each has a proof that does not depend on the others:

| bug | its own proof, independent of every other fix |
|---|---|
| **1 · healthy shelf** | census check 17 tally, then the shelf's contents |
| **2 · search no-op** | tap Search with a card open — does the card clear |
| **3 · budget input** | type five characters — does focus survive |
| **4 · level vs lateral** | entry count after picking a mood: 2 → 1 |
| **5 · stale snapshot** | back out of a mood recipe — **is the shelf still there** |
| **6 · plan closer** | entry count across a plan round-trip: +2 → 0 |

⚖️ **Bugs 4, 5 and 6 stack on ONE symptom but are THREE mechanisms with THREE proofs.** ⛔ **Do not
bundle them** — a bundled commit that half-works cannot be bisected, and this file exists because
three defects wore one face for a day.
📌 **Order them 5 → 6 → 4:** harm first, then the app-wide one, then the one that needs a ruling.

## C · WHAT TOUCHES SHARED `core.js`, AND WHICH ROOMS THAT RISKS

| bug | file:line | shared? | rooms at risk if wrong |
|---|---|---|---|
| **5** | `core.js:2832` · `2616-2618` | ⚪ **mood only** | Just Feed Me. **Lowest blast radius of the six.** |
| **1** | `core.js:2521` + `moodTags.js` | ⚪ **mood only** | Just Feed Me — but ⛔ **flipping before the tags land empties the shelf silently** (`core.js:2517-2520`) |
| **6** | `core.js:2712` · `budget.js:59` · `meals.js:15376` | 🟠 **three rooms, one shape** | **Budget · Meals · Just Feed Me.** Three call sites, not one edit |
| **4** | `core.js:131-133` `LATERAL_KEYS` | 🔴 **every room** | consulted on **every draw, app-wide**. One wrong key changes Back everywhere. ⚠️ `eventTab`'s exclusion is a standing warning (`core.js:117-120`) |
| **2** | `core.js:468` `bottomBarGo()` | 🔴 **every room** | **the bottom nav of the entire app** |
| **3** | `budget.js:90` local · `core.js:789` `draw()` app-wide | 🔴 **or** ⚪ | ⛔ **if fixed at `draw()`, EVERY screen in Tinza.** A local fix is budget-only |

## D · RANKED — MONEY · FREQUENCY · BLAST RADIUS

| rank | bug | money | frequency | blast radius | why here |
|---|---|---|---|---|---|
| **1** | **5 · stale snapshot** | 🔴 loses banked work | every mood recipe opened | ⚪ **tiny** | ⚖️ **Law 20.** Highest harm, smallest surface, own proof, no ruling needed. **The one to do first.** |
| **2** | **6 · plan closer** | 🟠 shopping list is the paid surface | **every plan visit, three rooms** | 🟠 three sites | Most-used surface, known-good fix to copy (`meals.js:16509`), **no ruling needed** |
| **3** | **1 · healthy shelf** | 🔴 **a paid Pro shelf recommending Chips** | every "healthy" tap | ⚪ mood only | ⛔ **blocked on TINA'S CONTENT WORK, not code.** Ranked high on harm, cannot start without ~15 tags |
| **4** | **2 · search no-op** | 🟢 none | every search-with-card-open | 🔴 app-wide nav | Constant irritation in a main path, but a shared-nav edit — needs care, not speed |
| **5** | **4 · level vs lateral** | 🟢 none | every JFM exit | 🔴 app-wide | ⚠️ **BLOCKED — needs Tina's ruling** (§24.7). Do not code it first |
| **6** | **3 · budget input** | 🟢 none | every budget search | 🔴 if fixed in `draw()` | Worst instinct-to-risk ratio: a small annoyance whose obvious fix touches the app's one render path. ⚠️ **And the box filters nothing until the button is pressed anyway** |

### 🩸 THE ONE-LINE ANSWER
> **DO BUG 5 FIRST.** Smallest surface, biggest harm, own proof, no ruling, no shared file.
> **DO BUG 3 LAST** — smallest harm, and its tempting fix is the riskiest edit on the board.

⚠️ **BUG 4 AND BUG 1 CANNOT START AT ALL** until Tina rules (level vs lateral) and tags (~15
records). **Neither is code's to unblock.**

---

# 🧊 LATENT TRAPS — FOUND WHILE LOOKING, FILED AS LATENT, **NOT** AS ANY BUG ABOVE

⚖️ **Recorded so the next session inherits them. None is the cause of anything reported. ⛔ Do not
"fix" a latent trap inside a brief about a live symptom.**

### L1 · `moodSelected` boots as an ARRAY, and `[]` is truthy
**`data.js:86`** — `moodSelected: []`. Everything else in the app treats it as a **string or null**
(`core.js:2714` does `MOODS.find(m => m.id === S.moodSelected)`).

It survives on **two accidents**:
1. `MOODS.find(m => m.id === [])` returns `undefined`, so the picker renders and nothing throws.
2. `navSignature()` reads `(S.moodSelected||[]).length` (**`core.js:108`**), and `[].length === 0`
   — the same value `null` produces. **The signature cannot tell the boot default from "no mood".**

⚠️ **But `[]` IS TRUTHY.** Any reader that tests `if(S.moodSelected)` gets **true at boot with no
mood chosen.** Measured: **no such reader exists today** — `core.js:2714` and `2722` both compare
by `.id`. 🩸 **The trap is that the next one written will be wrong, and it will look right.**
📌 Confirmed present in the stack: entry [0] carries `moodSelected=[]` (**BUG 5 §5b.2**).

### L2 · `wk_france.js` declares two arrays and two tools still assume one
Carried forward from `MF165_C0_FINDINGS.md` — `pricecheck.js` and `tinza-doctor.js` §13 still read
one array per file. **RUNG 2's fifth bite.**

---

# WHAT THIS SESSION DID NOT DO

- ⛔ **No fix, for any of the three.** No edit to `sections/`. `git status` shows no change there.
- ⛔ **No probe code**, per the session's red lines.
- **Bug 1's tag work is not started** and is **not Code's to start** — see §1.
- **Bug 4 needs a RULING before it needs code:** is a mood tile a LEVEL or a LATERAL? ⛔ Code has
  no standing to decide it. See BUG 4 §24.
- **Bug 4's mood-id length collision is NOT proven to be the reported cause** — it is a separate,
  provable defect found while looking, and it needs its own measurement.
- ⚖️ **Law 27 was the first suspect for Bug 4 and it was WRONG.** Both closers are present and
  byte-identical; the cache was never the problem. Recorded so it is not the first guess next time.
- **Bug 3's "search box filters nothing until the button" finding** is recorded and uninvestigated.
