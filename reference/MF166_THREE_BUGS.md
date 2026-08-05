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

## 🔴 THE TRAP — **STRUCK 6 Aug 2026. THE PREMISE WAS FALSE.** ⚖️ ENTRY 11 measurement

> ## ⛔ **"ADDING `healthy: true` WOULD EMPTY THE SHELF" IS WRONG. THE SHELF NEVER BLANKS.**
> **`core.js:2591`** — `getMoodPageRecipes()`:
> ```js
> const db = moodPool(moodId).length ? moodPool(moodId) : (MOOD_DB[moodId] || []);
> ```
> Its own comment at `core.js:2589-2590`: *"MOOD_DB is the fallback ONLY if the pool comes back
> empty — degrade to the old cards, never to a blank shelf. **Law 3**."*
> **`MOOD_DB` has a `healthy` key** (`core.js:2000`). **The guard was already built.**

### ✅ RE-FILED: **BUG 1 IS TAGGING ONLY, AND IT IS SAFE ONE RECORD AT A TIME**
The all-or-nothing framing is gone. **Tagging can start with a single record** — until the pool
reaches its threshold the shelf simply serves `MOOD_DB.healthy`, exactly as designed.
⛔ **Still Tina's judgement, still held on her.** ✅ **But no longer a cliff.**

⚠️ **UNMEASURED, AND SAY SO:** whether `MOOD_DB.healthy`'s cards are the **RIGHT** cards. **This
proves the shelf is not blank. It says nothing about whether it is good.**

🩸 **HOW THE FALSE PREMISE SURVIVED:** the warning at `core.js:2540-2543` was read as describing
today's code. **It describes the danger the fallback was built to prevent** — a comment about a
risk, mistaken for a report of a live one. ⚖️ **RUNG 1 family, again: a document read as a
measurement.**

### The original claim, kept for the record — ⛔ do not act on it
> ## ~~ZERO RECORDS CARRY A `healthy` TAG IN `moodTags.js` TODAY.~~ *(still true)*
> ## ~~ADDING `healthy: true` TO `MOOD_TAGGED` WOULD EMPTY THE SHELF, NOT FIX IT.~~ **FALSE**

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
| `moodSelected` is watched by the signature, as `(S.moodSelected\|\|[]).length` | **`core.js:131`** |
| `moodSelected` is **NOT** in `LATERAL_KEYS` → it is treated as a **LEVEL**, so it pushes | **`core.js:154-156`** |
| **POP** — `_appNavDepth = Math.max(0, _appNavDepth - 1)` in the popstate handler | **`core.js:162`** |
| the entry's own root depth is restored with it | **`core.js:164`** |

**Push/pop COUNTS are balanced** — one push per level entered, one decrement per popstate,
measured 0→1→2→3→2→1→0 (see **BUG 5 §1**).
⚠️ **BUT "balanced" was the wrong measurement and it did not survive Tina's finger.** The counts
are right and the **stored snapshot is stale**, which no count can see. ⚖️ **See BUG 5 — the
entry is earned, and it is still a duplicate on screen.**

### 🔴 BUT THE SIGNATURE RECORDS THE **LENGTH** OF THE MOOD ID, NOT THE MOOD

**`core.js:131`** stores `(S.moodSelected||[]).length`. Measured against the real `MOODS` list,
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
(**`core.js:110-113`**): *"a level the signature cannot see is a level Back cannot walk — goBack()
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
| **(3)** `if(_appNavDepth > _screenRootDepth) history.back()` | **`core.js:555`** | ✅ **this fires** |

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
| **the code** | mood picker and mood list are **TWO levels** (`moodSelected` absent from `LATERAL_KEYS`, `core.js:154-156`) |
| **Tina's fingers** | they are **ONE place** — "the Just Feed Me main screen" — so Back should exit in **one** press |

⚖️ **§24.7's own definition decides it, and it is written at `core.js:135-136`:**
> *"A LEVEL is a place she walked INTO: Home → Supper → a recipe. **A LATERAL is a pill that swaps
> what ONE level SHOWS**: Homestyle Plates → Oven Bakes. She did not go anywhere."*

**A mood tile swaps what the Just Feed Me screen shows. By §24.7's own words that is a LATERAL.**
⛔ **But this is a RULING, not a code call, and it is Tina's** — the same call she already made for
`eventTab`, which is deliberately excluded from `LATERAL_KEYS` — *"It may only join this list if
her fingers ever prove the same symptom there, and they have not. DO NOT TOUCH A WORKING ROOM."*
(**`core.js:140-143`**). **Code does not get to decide that a mood is a pill.**

## What a fix would have to reach
One of two mutually exclusive answers, both one line, **neither to be written without the ruling**:
- **LATERAL** — the mood joins `LATERAL_KEYS` (`core.js:154-156`); picking a mood replaces the
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
read-only sandbox. The push decision (`core.js:831-859`) lives inside `draw()` and cannot be called
without a DOM, so **that 5-line rule is transcribed verbatim, not re-derived.**

| step | `file:line` | history op | depth | root | entries |
|---|---|---|---|---|---|
| HOME | `core.js:174` | `replaceState` (navInit) | 0 | 0 | 1 |
| ENTER JFM | **`core.js:3172`** | **PUSH** | 1 | 1 | 2 |
| PICK MOOD | **`core.js:2832`** | **PUSH** ← 🩸 | 2 | 1 | 3 |
| CHEF RESULTS ARRIVE | **`core.js:2616-2617`** | **no signature change → NO history op** | 2 | 1 | 3 |
| OPEN RECIPE | **`meals.js:16480`** | **PUSH** | 3 | 1 | 4 |
| BACK out of recipe | **`meals.js:16492`** | POP → lands on the PICK MOOD entry | 2 | 1 | 3 |
| **BACK #1 on JFM main** | **`core.js:555`** | POP → lands on the ENTER JFM entry | 1 | 1 | 2 |
| BACK #2 | `core.js:564` (step 4) | → Home | 0 | 0 | 1 |

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

| room | writes | in `navSignature()` (`core.js:131`)? |
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
| HOME | `core.js:174` | replaceState | 0 | 0 | — |
| ENTER JFM | `core.js:3172` | **PUSH** | 1 | 1 | **7436** |
| PICK MOOD `pickmeup` | `core.js:2832` | **PUSH** | 2 | 1 | **7436** |
| chef results · shelf of 3 | `core.js:2616-2618` | **no signature change → no op** | 2 | 1 | 5101 |
| open Cottage Pie | `meals.js:16480` | **PUSH** | 3 | 1 | 5379 |
| **Back 1 — exit recipe** | `core.js:521` → `meals.js:16492` | **POP** | 2 | 1 | **7436 ← tiles** |
| **Back 2 — bottom Back** | `core.js:555` step (3) | **POP** | 1 | 1 | **7436 ← tiles, identical** |
| **Back 3 — bottom Back** | `core.js:564` step (4) | → **HOME** | 1 | 1 | — |

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
  `moodRecipes` is not in `navSignature()` (`core.js:131`). **The stored entry is never updated.**
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
**is** in `navSignature()`, `core.js:131`) was touched at any point. 📌 **Every `moodPlanView`
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
| BACK 2 | `core.js:555` | POP | 3 | 4 | **PLAN VIEW** | 1889 |
| BACK 3 | `core.js:555` | POP | 2 | 3 | TILES | 7436 |
| BACK 4 | `core.js:555` | POP | 1 | 2 | TILES | 7436 |
| BACK 5 | `core.js:564` | → HOME | 1 | 2 | HOME | — |

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

| room | closer passed to `sectionPlanView()` | key in `navSignature()` (`core.js:131`) |
|---|---|---|
| **Budget** | `setQuiet({budgetPlanView:false})` — **`budget.js:59`** | ✅ `budgetPlanView` |
| **Just Feed Me** | `setQuiet({moodPlanView:false})` — **`core.js:2712`** | ✅ `moodPlanView` |
| **Meals / search** | `setQuiet({mealPlanView:false})` — **`meals.js:15376`** | ✅ `mealPlanView` |

**All three push on the way in and push again on the way out. Every plan visit in Tinza leaves two
stray entries behind.** ⚖️ **The shopping list is the most-used surface in the app.**

## 🔴 SHIPPED 6 AUG 2026 AS MF168 — **AND REVERTED THE SAME DAY. STILL OPEN.**

| sha | commit | fate |
|---|---|---|
| `7eeeafc` | MF168 commit 1 — `closePlanView()`, inert | **reverted by `a5539db`** |
| `52214a8` | MF168 commit 2 — all three rooms wired | **reverted by `6e7f562`** |

⚖️ **REVERTED, NOT PATCHED FORWARD, under MF168's own red line:** *"Plans, carts and servings all
survive. If any plan empties, stop and revert."* **A plan emptied. See ENTRY 11.**

🩸 **THE NAVIGATION FIX WAS CORRECT AND IT STILL COST HER WORK.** All three rooms passed their
navigation proof by finger — Budget twice, Meals twice, Just Feed Me twice — and the fix **still
had to go**, because consuming the entry restores a snapshot, and two of the three plan keys are not
protected across a restore. ⚖️ **Law 20 outranks a tidy back stack.**

⛔ **DO NOT RE-APPLY MF168 UNTIL ENTRY 11 IS CLOSED.** The two commits are correct in isolation and
harmful in place. **The order is: fix `NAV_DATA_KEYS` first, then re-land MF168.**

**Measured, one plan round-trip:**
| | depth walk | net |
|---|---|---|
| before | 2 → 3 → **4** | **+2 stray entries**, landing on a third copy |
| after | 2 → 3 → **2** | **0** — landing back on her shelf |

### ⛔ AND A CORRECTION CLAUDE MADE TO ITS OWN EARLIER NOTE
`MF167`'s helper comment claimed *"BUG 6's plan views will want exactly this"* about
`navRefreshEntry()`. **That was wrong.** `navRefreshEntry()` **replaces a snapshot**; Bug 6 needs a
closer that **consumes a push**. ⚖️ **Opposite jobs — reusing the refresher here would have left
both stray entries exactly where they were and shipped a no-op as a fix.** The instruction to reuse
it was followed only as far as the *principle* (one shared helper, not three pasted blocks); the
*mechanism* is `closePlanView()`.

## ⚖️ LAW 42 — THE RUNG MF168 OWES

**A doctor rung that fails when a key in `navSignature()` is cleared by a bare `setQuiet`/`set`
closer instead of a consuming one.**

⚠️ **ITS NAIVE FORM HAS A BASELINE OF 17, NOT 0 — MEASURED.** ⛔ **Do not ship it naive:**
- **2 of the 17 are correct FAIL-SAFES** inside consuming closers (`meals.js:16494`
  `closeMoodRecipe`, `meals.js:16544` `closeMealRecipe`) — at depth 0 there is no entry to consume,
  so `setQuiet` is the only close there is. **A rung that flags those is one she scrolls past.**
- **8 more are LATERAL keys** (`beverageCat` · `cakeCat` · `healthGroupTab`), which **replace and
  never push**, so clearing them strands nothing.

✅ **THE RUNG MUST EXCLUDE BOTH**, and its honest baseline is **7** — see below.
⚠️ **Prove it born-RED:** re-introduce the exact line MF168 removed
(`"setQuiet({moodPlanView:false})"`) and watch the count go 7 → 8. **Verified today: the probe does
return a one.**

## 🩸 RUNG 1d APPLIED — **SEVEN MORE CANDIDATES OF THIS SHAPE, IN FIVE MORE ROOMS**

⛔ **NOT fixed. NOT folded into Bug 6. Filed, because the disease was named and the question was
asked.**

| site | key | room |
|---|---|---|
| `core.js:4964` | `viewingRecipe` | the universal recipe view |
| `health.js:976` | `healthGroup` | Health |
| `tinyTummies.js:453` | `activeDog` | Tiny Tummies |
| `tinyTummies.js:685` | `activeCat` | Tiny Tummies |
| `worldkitchen.js:261` | `wkRegion` | World Kitchen |
| `worldkitchen.js:1304` | `wkScreen` | World Kitchen |
| `worldkitchen.js:1366` | `wkScreen` | World Kitchen |

⚠️ **CANDIDATES, NOT DEFECTS.** Each is a signature key cleared by a bare closer string with no
consume in sight — **the shape of Bug 6** — but **none has been walked by a finger and none has had
its entry accounting measured.** ⚖️ **RUNG 1e: unproven is not proven, in either direction.**
📌 **`worldkitchen.js` carries three of the seven. That is the room to measure first.**

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
- **The push rule** (`core.js:831-859`) — it behaved exactly as specified at every step.
- **`moodRecipes` must NOT simply be added to `navSignature()`** — every page of chef results would
  then push its own entry, and Back would walk her through all of them. That is the pill-tap
  disease §24.7 was written to kill (`core.js:133-138`).

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
| **BUG 4 §1** | **a signature that measures LENGTH is not a signature** — `(S.moodSelected\|\|[]).length`, `core.js:131` |

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

## RUNG 1e · ⚖️ **A FIX FOR A PATH SHE CANNOT REACH IS UNPROVEN, NOT PROVEN.**

🩸 **MF167 shipped five refreshes. FOUR of them are on a path with no button.** Sites
`core.js:2668` · `2677` · `2692` · `2714` all live inside `getMoreMoodRecipes()`, and
**`getMoreMoodRecipes()` has had no caller since `d773702`** (ENTRY 8). **Only `core.js:2639` — the
mood-tile tap — is reachable by a finger today.**

⚖️ **THE MEASUREMENT WAS RIGHT AND THE STATUS WAS WRONG.** The stale-render numbers for those four
sites (5092→9280, 9280→13468, 968→~5092) are real; the code is correct; **it has simply never been
executed by a user and cannot be until MF78 lands.**

⛔ **THE RULE: a green sandbox plus an unreachable path is UNPROVEN. It is not "passed", it is not
"low risk", and it must never be written in a proof column as a tick.** ✅ **Write UNREACHABLE, name
what blocks it, and say which commit is therefore unverified.**

📌 **And the sharper half:** ⚠️ **a test that cannot fail proves nothing.** MF167's Test 3 — leave
mid-fetch, wait, press Back, land in Braai — **passed. But the code it was written to exercise
never ran**, because the continuation lives behind the same missing button. **A pass and a
never-ran are indistinguishable from the outside.** ⚖️ *Same family as §5b's true-negative arm:
before trusting a green, prove the probe can go red.*

**Filed beside:** RUNG 1 (a measurement remembered as a fix) · RUNG 1b (a reading put in her
mouth) · RUNG 1c (a sim with no clock) · **RUNG 1e (a fix on a path with no button)**.

## RUNG 1f · 📌 **A REFERENCE FILE THAT CITES LINE NUMBERS MUST BE RE-SWEPT AFTER ANY COMMIT THAT INSERTS LINES.**

🩸 **TODAY'S EVIDENCE, IN ONE SESSION.** MF167 inserted `navRefreshEntry()` after `navSnapshot()`,
shifting **every line in `core.js` from 86 onward by +20**. That silently staled **31 `file:line`
citations across `MF166` and `MF167`** — files written *hours* earlier, by the same session, under
a discipline that verifies every ref on the way in.

**The worst of them:** ⛔ **nine citations of `navSignature()` at `core.js:108`. It is at
`core.js:131`.** Also stale: `LATERAL_KEYS`, the popstate restore, `goBack` steps (3) and (4), the
root-promotion line, and the §24.7 lateral definition — **every load-bearing anchor in the two
navigation bugs.**

⚖️ **THE ROT IS SILENT AND IT POINTS AT REAL CODE.** A stale ref does not throw. It resolves to a
line that exists and says something else, so the next session reads a confident citation and lands
in the wrong place. **That is exactly the failure `MF165` c0 was written to catch in
`SEARCH_COLD_START.md`, arriving from the other direction: not a stale document, a stale *pointer*
inside a correct one.**

### 🩸 AND IT FIRED A SECOND TIME, ONE HOUR LATER, FROM THE OTHER DIRECTION
**MF168 added 20 lines, then was REVERTED — and the revert staled 8 more refs**, this time the ones
written *while MF168 was in the tree*: `core.js:4984 → 4964`, the two loose-branch citations
`1874 → 1854` and `4048 → 4028`, and the buy-ladder ranges.

> ## ⛔ **THE RUNG IS NOT "AFTER AN INSERTION". IT IS AFTER ANY COMMIT THAT CHANGES A LINE COUNT — AND A REVERT IS ONE OF THOSE.**
> **Written today, staled today, twice, in both directions, inside the session that wrote the rung.**

📌 **Filed beside:** *a signature that measures LENGTH is not a signature* (BUG 4 §1) and **RUNG
1e** — all three are the same family: **a thing that looks like a measurement but has quietly
stopped measuring what it names.**

### ⚖️ MAKE IT MECHANICAL — THE PRICE, IN ONE PARAGRAPH

**`fixrefs.js` was a throwaway** — a hand-authored map of one shift's anchors, correct for today
and worthless tomorrow; ⛔ **do not keep it.** **`refsweep.js` is worth keeping and is roughly
half-built:** it already walks every `file.js:NNN` in `reference/` (355 today) and bounds-checks
each against the real file, which catches deletions and truncations but **not** the failure that
actually happened — a ref that still lands *inside* the file, just on the wrong line. To close
that it needs one thing from the documents rather than from the code: **citations must carry the
symbol they mean** — `core.js:131 (navSignature)` instead of bare `core.js:131` — after which the
probe asserts the named symbol appears on or within ~2 lines of the cited number and reports every
drift, with an explicit printed exemption list for prose refs that name no symbol. **Estimated: an
afternoon for the probe, plus a pass over the existing refs to add symbols** — and the honest
caveat is that **the annotation pass is the expensive half and it is the half that makes the probe
possible at all.** ⚖️ **Law 42 — the bugs do not stop; the walls get higher.**

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

**Complete listener inventory — only four in the whole app:** `popstate` (`core.js:175`),
`matchMedia change` (`core.js:604`), and two `document click` handlers (`core.js:617`, `630`).
⛔ **No `visibilitychange`, no `focus`, no `online`, no `message`, no service-worker registration
in `index.html`.**

### 2 · Which of them write a key in `navSignature()` (`core.js:131`)?

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

# ENTRY 8 · THE MISSING "MORE" BUTTON — ⚖️ **NOT A DEFECT. WORKING AS RULED.**

**Tina, on live, 6 Aug:** *"There is supposed to be a MORE button and there isn't. Nothing appears
under the third recipe on any mood shelf."*

## ✅ VERDICT: **SHE IS RIGHT THAT IT IS GONE. IT WAS REMOVED ON PURPOSE, AND THE REASON STILL HOLDS.**

⛔ **Filed as its own entry and NOT folded into any bug** — it is **not** the same mechanism as
Bug 5, and calling it one would be the exact error this file keeps recording.

### 1 · Where is it rendered? — **NOWHERE. It is not in the code.**
The **handler survives**: `getMoreMoodRecipes(moodId)` at **`core.js:2656`**, fully intact.
**It has no caller.** Measured: the only occurrences of the name in `sections/` are its own
definition and two comments (`core.js:2649`, `core.js:2743`).

### 2 · What condition gates it? — **NONE. There is no condition to evaluate.**
⛔ **The markup is absent, not gated.** There is no key that could be truthy and no branch that
could be taken. ⚖️ **This is the opposite of Bug 5** — see §4.

### 3 · Which commit removed it? — **`d773702`**
> **`d773702` — "MF133: close the dev door, gate the tier switcher, hide the dead chef"**

Its diff removes exactly this:
```
-          <button onclick="getMoreMoodRecipes('${mood.id}')"
-            ✨ Show me 3 more ideas
```
and adds the note that stands in its place today at **`core.js:2736-2744`**:
> *"MF133 · THE '✨ Show me 3 more ideas' BUTTON IS REMOVED FROM THIS RENDER. The chef endpoint
> returns 503… it failed POLITELY into a loop that cannot succeed… **a Free user was shown that
> loop as a reason to pay R90.** A broken control is worse than a missing one. ⚖️ Law 7 — a button
> that cannot do what it says is a lie. ⚖️ Law 3 — if you cannot do the thing, do not offer it.
> ⛔ getMoreMoodRecipes() itself is DELIBERATELY LEFT INTACT — MF78 turns it back on.
> 🔁 **RESTORE THIS BUTTON WHEN MF78 LANDS.**"*

### ⚠️ AND THE REASON IS STILL TRUE TODAY — MEASURED, NOT ASSUMED
**`netlify/functions/claude.js:24-33`** still returns **`statusCode: 503`**, unconditionally, from
a handler that takes no arguments. Committed as **`8fd181d` "chef off: 503 endpoint, key never
read + rulings"**.

> ## ⛔ **RESTORING THE BUTTON TODAY WOULD RESTORE A BROKEN CONTROL.**
> **The button is not the work. MF78 is — turning the chef back on. The button follows it.**

### 4 · Is it the same non-render class as Bug 5? — 🔴 **NO.**

| | **BUG 5** | **ENTRY 8** |
|---|---|---|
| the markup | **exists**, and the render chose the wrong branch | **does not exist** |
| the cause | a state key was **falsy when the render asked** (`core.js:2737`) | a **deliberate deletion**, `d773702` |
| documented? | ⛔ no — it was an accident nobody knew about | ✅ **yes, in place, with a restore condition** |
| is it a defect? | ✅ yes | ⛔ **no — it is a RULING, and it is holding** |

⚖️ **Two things being invisible on the same screen does not make them the same bug.**

## ⛔ What must NOT happen
- **Do not "restore" the button** to make Test 2 runnable. ⚖️ **That would re-ship the R90 lie
  MF133 was written to kill**, and it would make a Free user pay to reach a 503.
- **Do not delete `getMoreMoodRecipes()`** as dead code. `core.js:2743` says explicitly it is left
  intact for MF78. ⚖️ **It is not dead; it is waiting.**

---

# ENTRY 9 · NO "CLEAR PLAN" CONTROL — **A GAP, LOW PRIORITY**

**Tina, on live, 6 Aug:** *"There is a per-item ✕ on each plan dish, but no clear-all anywhere.
Five dishes take five taps."*

## 🔴 VERDICT — **PARTLY STRUCK, 6 Aug 2026.** ⚖️ ENTRY 11 measurement

> ## ⛔ **"NO ROOM HAS A CLEAR-PLAN CONTROL" IS WRONG. HEALTH HAS ONE.**
> **`health.js:706`** — `set({healthPlan:[],checkedHealthItems:{},healthShowPlan:false})`
> **It clears the plan AND the ticked shopping items AND closes the view, in one control.**

🩸 **The original claim came from grepping three files — `core.js`, `meals.js`, `budget.js` — and
reporting the absence as universal.** `health.js` was never searched. ⚖️ **RUNG 1 family: a search
that names its scope narrowly and its conclusion broadly.**

**What still stands:**
- The per-item remove exists: `planDishRow({ …, removeJs })` — **`core.js:3924-3925`**, wired at
  **`core.js:4208`**.
- **Measured: no clear-all exists in the three rooms that share `planView()`** — Just Feed Me,
  Budget, Meals. **Health's control is its own, outside `planView()`.**

✅ **AND IT IS A PATTERN TO COPY, NOT INVENT.** ⚖️ **Law 35 — LIFT IT.** Health already answers the
"what does it clear" question: **the plan and the ticks together**, which is the right answer,
since leaving the ticks behind would strand her mid-shop.

## ⛔ THE RED LINE ON ANY FUTURE FIX — ⚖️ **LAW 20**

> ## **DO NOT ADD ANYTHING THAT CAN EMPTY HER PLAN BY ACCIDENT.**

⚖️ *Emptying her question is right. Emptying her WORK is theft.* A clear-all sits **one mis-tap away
from destroying a plan she spent ten minutes building**, and the plan is Pro — it is the paid
surface.

📌 **If it is ever built, it needs a confirm step, and the confirm must name what is being lost**
("Clear all 5 dishes?"). ⛔ **An undo would be better than a confirm, and no undo exists anywhere in
Tinza today.** ⚠️ **That is the real reason this is LOW priority and not a quick win: the cheap
version is the dangerous one.**

---

# 🔴 ENTRY 10 · THE SHOPPING LIST QUOTES AMOUNTS THAT CANNOT BE BOUGHT

**Tina, on live, 6 Aug — plan of 5 dishes, 2 people:**

| line | quoted | reality |
|---|---|---|
| lager beer | **176 ml** · R7 | **a can is 330 ml** |
| salmon fillet | **396 g** · R269 | sold as a pack |
| fish stock | **330 ml** · R3 | |
| white fish | **330 g** · R53 | |
| whole chicken | **660 g** · R46 | |
| frozen peas | **154 g** · R10 | |

## ✅ VERDICT: **CONFIRMED, MECHANISM FOUND, AND IT IS NOT SIX ITEMS — IT IS 88% OF THE PRICE LIST.**

### The mechanism — the LOOSE fallback

`buildPlanData()` computes a BUY amount per line through a five-branch ladder
(**`core.js:4022-4048`**). The **last branch** fires when the item has **no `PACK_DB` entry**:

```
else { it.loose=true; it.buyAmt=Math.round(need*1.10); it.buyCost=Math.round((it.buyAmt/1000)*pr.price); }
```
**`core.js:4028`** — cook amount **+10%**, rounded. **No pack size, no rounding up to a buyable
unit.** 176 ml of lager is 160 ml × 1.10.

### 🩸 REPRODUCED IN THE SANDBOX — ALL SIX NUMBERS, EXACTLY

| her line | resolved key | `PACK_DB` | computed |
|---|---|---|---|
| lager beer | `beer` | **NONE** | **176 ml** ✅ |
| salmon fillet | `salmon` | **NONE** | **396 g** ✅ |
| fish stock | `stock` | **NONE** | **330 ml** ✅ |
| white fish | `hake` | **NONE** | **330 g** ✅ |
| whole chicken | `whole chicken` | **NONE** | **660 g** ✅ |
| frozen peas | `frozen peas` | **NONE** | **154 g** ✅ |

**Every one is the loose branch. Six for six.**

### ⛔ THE SIZE OF IT

> ## **PACK_DB HAS 116 ENTRIES. PRICE_DB HAS 894 PRICED KEYS.**
> ## **789 OF 894 — 88% — HAVE NO PACK ENTRY AND FALL TO THE LOOSE BRANCH.**

⚖️ **The pack ladder is not broken. It is unbuilt.** The five good branches
(`core.js:4044-4047`) work; **they are only reachable for 12% of the catalogue.**

### ⚠️ AND THE MONEY IS UNDERSTATED, NOT JUST THE AMOUNT
`it.buyCost` is computed from the **loose amount**, so the trolley figure is *"176 ml of beer"*
priced, not *"one 330 ml can"*. ⚖️ **BUY is supposed to be what she actually spends.** For 789 keys
it is currently **cook + 10%**, which is **not a trolley number** — and it is the **GOLD shop-spend
figure**, the one that claims to be what she pays at the till.

### 🩸 AND THERE ARE TWO COPIES OF THIS LADDER
**`core.js:1822-1875`** (`buildShoppingList`) and **`core.js:4022-4048`** (`buildPlanData`) both
implement the five branches. ⚖️ **Law 6.** ⚠️ **Any fix must land in both or the two shopping
surfaces will disagree** — and MF124 already deleted a third copy of the costing arithmetic for
exactly this reason. ⛔ **Do not fix one.**

## What a fix would have to reach — ⛔ NOT WRITTEN HERE
Either **PACK_DB grows** toward the 894 (content work, and it is Tina's — a pack size is a fact
about a shelf in a shop), or **the loose branch stops pretending**. ⚖️ **Those are different
decisions and the second is hers, not code's:** a 176 ml line is at least honest that nobody knows
the pack size; rounding it to a guessed 330 ml would invent a fact.

📌 **This is the same shape as BUG 1** — an engine with a correct mechanism and an unbuilt data
table behind it, where the tempting one-line "fix" would ship a guess as a fact.

---

# 🔴 ENTRY 11 · TWO PLAN KEYS ARE NOT PROTECTED ACROSS A HISTORY RESTORE

> ## **THIS IS THE ONE THAT EMPTIED HER PLAN. ⚖️ LAW 20.**

**Tina, on live, 6 Aug:** Feeding My Family → Supper → Oven Bakes and Roasts → **added Cottage Pie**
→ opened the plan, **Cottage Pie was there** → Back → Back. Later: FMF → Light Lunch → **the plan
was EMPTY.**

## ✅ VERDICT: **CONFIRMED. MF168 WAS THE TRIGGER; THE DEFECT IS OLDER AND IT IS STILL LIVE.**

### The mechanism
**`NAV_DATA_KEYS` — `core.js:55`** — is the list of keys that survive a popstate restore. The
handler restores the entry's snapshot, then re-applies **only** these keys from live `S`
(**`core.js:181`**): *"keep live data (plans/carts/sliders) — only navigation reverts."*

| plan key | in `NAV_DATA_KEYS`? |
|---|---|
| `wkPlan` · `healthPlan` · `dogPlan` · `catPlan` · **`moodPlan`** | ✅ protected |
| 🔴 **`mealPlan`** | **NOT PROTECTED** |
| 🔴 **`budgetPlan`** | **NOT PROTECTED** |

**So any Back that pops an entry reverts `mealPlan` / `budgetPlan` to whatever they were when that
entry was pushed** — which is *before* she added the dish, because the plan keys are not in
`navSignature()` and therefore never push or refresh an entry of their own.

### 🩸 MEASURED, BOTH CLOSERS, THREE ROOMS

| room | plan key | protected | before MF168 | after MF168 |
|---|---|---|---|---|
| Meals | `mealPlan` | 🔴 no | ✅ survived | **🔴 EMPTIED** |
| Budget | `budgetPlan` | 🔴 no | ✅ survived | **🔴 EMPTIED** |
| Just Feed Me | `moodPlan` | ✅ yes | ✅ survived | ✅ survived |

⚠️ **BUDGET WAS EMPTYING TOO, AND NOBODY SAW IT.** MF168's Test 2 passed twice in Budget — but it
checked that Back *landed* on the R140 results, **not whether Urban Mutton Curry was still in the
plan.** ⚖️ **RUNG 1e's sharper half: a test that checks the wrong thing passes just as loudly.**

### ⛔ THE REVERT DOES NOT CLOSE THIS
MF168 was reverted (`6e7f562`, `a5539db`), which removes **this** trigger. **The gap remains:**

> ## **ANY future code path that pops a history entry will empty `mealPlan` and `budgetPlan`.**
> `goBack()` step (3) already pops (`core.js:555`). Every consuming closer pops. **The next
> correct navigation fix walks into the same trap.**

📌 **THAT IS WHY THIS IS ITS OWN ENTRY AND NOT A FOOTNOTE ON BUG 6.** ⛔ **Fix ENTRY 11 before
re-landing MF168.**

### Q2 · Is the FMF plan one plan, or one per sub-section? — **ONE.**
`mealPlan` is a single key, shared by every FMF slot: `meals.js:15376` (the plan view),
`meals.js:15452` (`isPlanItem`), `meals.js:15471` (the button). **Supper and Light Lunch are the
same plan.** ⛔ **So an empty Light Lunch plan is NOT correct behaviour — this is a defect, not
scoping.**

### Q3 · Where is plan state persisted? — **NOWHERE.**
- `set()` is `Object.assign(S, upd); draw();` — **no persistence.**
- `tinzaStore` has a plan API — **`setPlan()` / `getPlan()` at `tinzaStore.js:180`** — and
  **measured: nothing in `sections/` calls either.** ⚠️ **A door nobody opens.**
- **So no plan survives an app exit at all**, in any room.

### ⚠️ THE INVERSION SHE NAMED — and the honest reading
*"The pasta-and-pizza CATEGORY survived a complete exit from the app; the PLAN did not. Law 20
backwards."*

**Most likely the same bug, not a persistence asymmetry:** since nothing persists, the category
surviving points at a browser session/bfcache restore of live `S` — in which case the plan *would*
have survived too **had it not already been emptied by the Back press before she exited.**
⚠️ **REASONING, NOT MEASUREMENT.** ⛔ Not asserted as a finding — it needs her to re-check with a
plan that has NOT been through a Back press.

## What a fix would have to reach — ⛔ NOT WRITTEN HERE
`NAV_DATA_KEYS` (`core.js:55`) is missing two entries. ⚠️ **But adding them blind is not obviously
right:** the list is a *contract* about what counts as WORK versus NAVIGATION, and it deserves the
same read the signature contract gets. **Every other plan key is already there, which is the
argument that these two are simply omissions.**

## ⛔ Must NOT be touched
- **`moodPlan` · `wkPlan` · `healthPlan` · `dogPlan` · `catPlan`** — already correct.
- **The popstate restore itself** (`core.js:175-193`) — it does exactly what it says.
- ⛔ **Do not "fix" this by making the plan keys push history entries.** They are WORK, not
  navigation; putting them in `navSignature()` would make every add-to-plan a Back step.

---

# ENTRY 12 · THE SKIPPED INTERMEDIATE SCREEN — **ONE SYMPTOM, TWO MECHANISMS**

**Tina, on live, four reproductions, two rooms, plan untouched:**
- **Budget** → enter R130 → see recipes → bottom Back → **lands on the MAIN MENU**, skipping the
  budget-entry screen. Reproduced at R240.
- **FMF** → Supper → Oven Bakes → bottom Back → **main menu**, skipping the
  Breakfast / Light Lunch / Supper screen. Reproduced in Light Lunch.

## ✅ VERDICT: **CONFIRMED. `goBack()` IS BEHAVING CORRECTLY IN BOTH — THERE IS NO LEVEL TO WALK.**

⚖️ **This is the OPPOSITE failure to Bug 6.** Bug 6 left extra entries; this one has **too few**.

⚠️ **FILED AS ONE ENTRY, WITH BOTH MECHANISMS NAMED SEPARATELY.** ⛔ They are **not** the same
cause, and merging them is the error this file keeps recording.

### MECHANISM A · BUDGET — **the results screen never pushes at all**

| step | `file:line` | op | depth | root |
|---|---|---|---|---|
| enter the Budget room | `core.js:3214` | **PUSH** | 1 | 1 |
| type R130 | `budget.js:141` | no history op | 1 | 1 |
| tap Find Recipes | `budget.js:344` | **no history op** | 1 | 1 |

**`_budgetResults` is not in `navSignature()`, and `budgetStep` — which IS in the signature
(`core.js:131`) — is set once on entry (`core.js:3214`) and MEASURED: never written again anywhere
in `budget.js`.** So the entry screen and the results screen are **the same history entry**.
`goBack()`: depth 1 **==** root 1 → step (4) (`core.js:564`) → **Home.**

### MECHANISM B · FMF — **it pushes, but the push promotes itself to a section root**

| step | `file:line` | op | depth | root |
|---|---|---|---|---|
| enter Family Meals | `core.js:3184` | **PUSH** | 1 | 1 |
| tap **Supper** | **`meals.js:15542`** — `set({screen:'${o.s}', mealSearch:''})` | **PUSH** | 2 | **2** |
| tap Oven Bakes pill | `meals.js:15434` | LATERAL replaceState | 2 | 2 |

**The slot tile changes `S.screen`,** and the push rule says *"entering a different top-level screen
starts a new section → this new entry IS the section root"* (`core.js:853`). So Supper becomes its
own root. `goBack()`: depth 2 **==** root 2 → step (4) → **Home.**

## ⚖️ Q7 · THIS IS A RULING, NOT A CODE CALL — SAME SHAPE AS BUG 4

**Both rooms are internally consistent. Neither has a level for Back to walk.** The question is
whether one should exist:

| | the question for Tina |
|---|---|
| **Budget** | Is *"the results for R130"* a **LEVEL** she walked into, or the **same screen** wearing an answer? |
| **FMF** | Is **Supper** a sub-level of Family Meals, or **its own room** whose parent is Home? |

⛔ **Code does not get to decide either.** ⚖️ **Identical in shape to BUG 4 (a mood tile: level or
lateral) — and that one is still waiting on her too.**

## Q8 · WHICH OTHER ROOMS HAVE AN INTERMEDIATE SCREEN?

**The diagnostic is simple and mechanical:** a room that sub-navigates by **changing `S.screen`**
gets a new section root and its intermediate screen is skipped. A room that sub-navigates by a
**sub-key** keeps one root, and Back walks correctly.

| room | sub-navigates by | Back walks the intermediate screen? |
|---|---|---|
| **Family Meals** | **`S.screen`** (`meals.js:15542`) | 🔴 **no — ENTRY 12 B** |
| **Budget** | nothing in the signature | 🔴 **no — ENTRY 12 A** |
| **World Kitchen** | `wkScreen` · `wkContinent` · `wkRegion` · `wkDataCountry` — **sub-keys** | ✅ **yes** |
| Events | `eventTab` · `buffetStep` — sub-keys | ✅ yes |
| Braai | `braiStep` · `braaiView` — sub-keys | ✅ yes |
| Kiddies / Baby / Furry | `kidsScreen` · `babyView` · `furryPet` — sub-keys | ✅ yes |

🩸 **WORLD KITCHEN IS THE PROOF THAT THE PATTERN IS THE CAUSE.** It has the deepest drill in the
app — continent → region → country → course — and **its Back works**, because every step is a
sub-key and the root never moves. ⚖️ **The rooms that break are the two that navigate by `screen`
or by nothing.**

## ⛔ Must NOT be touched
- **`core.js:853`** (the root-promotion rule) — it is what stops Back walking out of one room into
  an unrelated earlier one. ⚠️ **Changing it moves every room at once.**
- **World Kitchen's drill** — it is the reference implementation. ⚖️ **Do not touch a working room.**

---

# 🏁 THE RANKING — WHAT TO DO FIRST, AND WHAT IT RISKS

⛔ **NO FIX IS WRITTEN ANYWHERE IN THIS FILE.** This is the order of the board, not the code.

## A · THE SMALLEST FIX THAT MAKES **ONE PRESS EXIT**

**No single change does it.** Measured — the JFM stack holds up to **five** entries and three
separate defects put them there.

| # | change | entries removed | one line? |
|---|---|---|---|
| 1 | **BUG 6** — the plan closer consumes instead of pushing (`core.js:2712`) | **−2 per plan visit** | ✅ yes |
| 2 | **BUG 4** — `moodSelected` joins `LATERAL_KEYS` (`core.js:154-156`) ⚠️ **RULING FIRST** | **−1** | ✅ yes |
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
| **4** | `core.js:154-156` `LATERAL_KEYS` | 🔴 **every room** | consulted on **every draw, app-wide**. One wrong key changes Back everywhere. ⚠️ `eventTab`'s exclusion is a standing warning (`core.js:140-143`) |
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
2. `navSignature()` reads `(S.moodSelected||[]).length` (**`core.js:131`**), and `[].length === 0`
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
