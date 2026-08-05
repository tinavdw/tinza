# NAV_COLD_START.md — for the session that fixes the back button
**Written 6 Aug 2026, end of session.** Open the next chat with this file and `CLAUDE.md`.

> ⚠️ **THE LINE NUMBERS IN THIS FILE WERE CORRECT AT `a5539db`.** ⛔ If any commit has changed the
> line count of `core.js` since — **an insertion OR a revert** — **re-sweep before trusting a single
> one.** That failure happened today **twice, in both directions, 39 refs in total**, inside the
> session that wrote the rung about it. ⚖️ **MF166 RUNG 1f.**

---

## 0 · THE HEADLINE — READ THIS BEFORE YOU TOUCH THE BACK BUTTON

# 🩸 `mealPlan` AND `budgetPlan` ARE NOT IN `NAV_DATA_KEYS`.
# ANY POP OF A HISTORY ENTRY REVERTS HER PLAN TO EMPTY.

**`core.js:55`** lists the keys that survive a popstate restore. The handler restores the entry's
snapshot, then re-applies **only** these from live `S` (**`core.js:181`**).

| plan key | protected? |
|---|---|
| `wkPlan` · `healthPlan` · `dogPlan` · `catPlan` · **`moodPlan`** | ✅ |
| 🔴 **`mealPlan`** · 🔴 **`budgetPlan`** | **NO** |

**Tina lost a plan to this on live:** FMF → Supper → Oven Bakes → added Cottage Pie → opened the
plan (it was there) → Back → Back → later, the plan was empty. ⚖️ **LAW 20 — emptying her question
is right, emptying her WORK is theft.**

### ⛔ THE REVERT DID NOT CLOSE IT
MF168 was the *trigger* and it was reverted (`6e7f562`, `a5539db`). **The gap is older and still
live.** `goBack()` step (3) already pops (**`core.js:555`**). **Every consuming closer pops. The
next correct navigation fix walks straight into it.**

> ## 📌 **THE ORDERING CONSTRAINT, AND IT IS THE WHOLE POINT OF THIS FILE:**
> ## **FIX ENTRY 11 FIRST. THEN RE-LAND MF168.**
> MF168's two commits are **correct in isolation and harmful in place.** All three rooms passed
> their navigation proof by finger — Budget twice, Meals twice, Just Feed Me twice — **and it still
> had to go.**

⚠️ **Budget was emptying too and nobody saw it.** MF168's Test 2 checked where Back *landed*, not
whether the recipe was still in the plan. ⚖️ **RUNG 1e: a test that checks the wrong thing passes
just as loudly.**

**Full evidence: `MF166_THREE_BUGS.md` · ENTRY 11.**

---

## 1 · WHERE THINGS STAND

**HEAD: `a5539db`.** **Doctor RED 10 · lawcheck 0 red 0 drift · echo 4 GLOSS reds (pre-existing).**
**Not one `costPP` moved all session.**

### ✅ SHIPPED AND LIVE — MF167, three commits

| sha | what |
|---|---|
| `e8730bc` | `navRefreshEntry()` — `core.js:102`, inert on its own |
| `a6bce9b` | the three **synchronous** mood fill sites refresh the entry |
| `6103ff0` | the two **late continuations** refresh, behind a screen guard |

**What it fixed:** backing out of a mood recipe used to render the twelve tiles (7436 chars) and
discard her shelf. It now restores the shelf.

⚠️ **PROVEN BY FINGER IN ONE TEST OF THREE.**
- **TEST 1 ✅ PASSED TWICE** — *"I need a pick-me-up"* and *"Need it fast"*. The shelf survived.
- **TEST 2 ⛔ NOT RUNNABLE** · **TEST 3 ⚠️ passed but does not discriminate.**

🩸 **FOUR OF THE FIVE REFRESH SITES ARE ON A PATH SHE CANNOT REACH.** They live inside
`getMoreMoodRecipes()` (**`core.js:2656`**), which **has had no caller since `d773702`** — MF133
removed the MORE button because the chef endpoint 503s, and **it still does**
(`netlify/functions/claude.js:26`). ⛔ **Do not "restore" the button to make the test runnable —
that re-ships the R90 lie MF133 killed.** ⚖️ **When MF78 lands, TESTS 2 AND 3 ARE OWED.**

### 🔴 REVERTED — MF168
`7eeeafc` + `52214a8`, reverted by `6e7f562` + `a5539db`. **Re-land only after ENTRY 11.**

---

## 2 · THE BOARD — 12 ENTRIES IN `MF166_THREE_BUGS.md`

| # | what | state |
|---|---|---|
| **1** | healthy shelf returns Mac & Cheese, Chips | **NEVER COMMITTED** — not a regression. **Blocked on Tina's tagging** |
| **2** | tapping Search with a card open is a no-op | open · `core.js:468` misses `_searchActiveRecipe` |
| **3** | budget search input loses focus every keystroke | open · half the hypothesis struck |
| **4** | JFM: two presses to rise one level | **BLOCKED ON A RULING** — level or lateral |
| **5** | the stale snapshot | ✅ **FIXED — MF167** |
| **6** | plan views push on the way out, 3 rooms | **REVERTED. Blocked on ENTRY 11** |
| **7** | extra presses that need a clock to see | open · **mechanism not visible in `sections/`** |
| **8** | the missing MORE button | ⚖️ **NOT A DEFECT** — MF133 ruling, holding |
| **9** | no "clear plan" control | gap, low priority · ⛔ Law 20 on any fix |
| **10** | shopping list quotes unbuyable amounts | open · **88% of the price list** |
| **11** | 🚨 **two plan keys unprotected across a pop** | **DO THIS FIRST** |
| **12** | the skipped intermediate screen | **BLOCKED ON A RULING** |

---

## 3 · ⏸️ HELD ON TINA — ⛔ CODE CANNOT START THESE

| what | who decides | why it is not code's |
|---|---|---|
| **ENTRY 12** — is a budget amount / a meal slot a **LEVEL or a LATERAL**? | **Tina** | Both rooms are internally consistent; `goBack()` is correct in both. There is no bug until she says a level should exist. |
| **BUG 4** — is a **mood tile** a level or a lateral? | **Tina** | §24.7's own words say a pill that swaps what one level shows is a LATERAL. **Code does not get to decide a mood is a pill.** Same call she already made for `eventTab` (`core.js:140-143`). |
| **BUG 1** — tagging ~15 records `healthy` in `moodTags.js` | **Tina** | *A mood is a tag, not a keyword guess.* **Which dish is healthy is a judgement about food.** ⛔ **Zero records carry the tag today — flipping the switch first EMPTIES the shelf silently** (`core.js:2540-2543`). |
| **ENTRY 10** — pack sizes for `PACK_DB` | **Tina** | A pack size is a fact about a shelf in a shop. **116 entries vs 894 priced keys.** ⛔ Rounding 176 ml up to a guessed 330 ml **invents a fact**. |

---

## 4 · ⚖️ THE RUNGS FROM TODAY — ALL OF THEM

| rung | the thing that stood in for the truth |
|---|---|
| **1** | **A MEASUREMENT REMEMBERED AS A FIX.** `MOOD_RECIPE_STAGING.md` (20 Jul) said *"Measurement only. No shelf, tag, slot or predicate was changed"* — carried for two weeks as "we fixed the moods". |
| **1b** | **DO NOT PUT A READING IN HER MOUTH TO CLOSE A GAP.** A draft claimed she *"read it as correct"*. She had never been asked; when asked, she called it wrong. |
| **1c** | **A NAV SIM WITH NO CLOCK CANNOT REPRODUCE A HUMAN'S HANDS.** Every sandbox run this session fired in one tick — **trustworthy for instant sequences, blind to anything landing in a pause.** |
| **1d** | **A COMMIT THAT NAMES A DISEASE MUST ASK WHAT ELSE HAS IT.** MF151-B titled itself *"THE SAME DISEASE"*, cured one level, and left the shape live in three plan views. |
| **1e** | **A FIX FOR A PATH SHE CANNOT REACH IS UNPROVEN, NOT PROVEN.** Four of MF167's five sites sit behind a removed button. **And a test that cannot fail proves nothing.** |
| **1f** | **A REFERENCE FILE THAT CITES LINE NUMBERS MUST BE RE-SWEPT AFTER ANY COMMIT THAT INSERTS LINES.** MF167 shifted `core.js` +20 from line 86 and staled **31 refs across two files in one session**, including **nine citations of `navSignature()` at the wrong line.** |
| **2** | **THE ONE-LIST ASSUMPTION — FIFTH BITE.** A shared list exists and a consumer does not ask it. |
| **3** | **SEVEN HYPOTHESES STRUCK IN ONE DAY** — each stated as a question and killed by a measurement *before* it reached a file. **Two struck by Tina's finger, five by reading or measuring.** |
| **BUG 4 §1** | **A SIGNATURE THAT MEASURES LENGTH IS NOT A SIGNATURE.** `navSignature()` stores `(S.moodSelected\|\|[]).length` — four mood-id length collisions (`core.js:131`). |

📌 **THE FAMILY, STATED ONCE:** 1, 1b, 1c, 1e, 1f and BUG 4 §1 are all **a thing that looks like a
measurement but has quietly stopped measuring what it names.** ⚖️ **That is the shape to watch for.**

---

## 5 · ⚠️ WHAT IS UNMEASURED — NAMED, NOT ASSUMED

⚖️ *A runner that shows greens while measuring nothing manufactures confidence.*

1. **BUG 7's mechanism.** Every timer, promise, poll and listener in `sections/` was enumerated;
   **none writes a `navSignature()` key**, and a sim with a simulated 30 s idle produced **0 extra
   pushes**. **Whatever adds entries during a pause is not in the code this session can read.**
   ⚠️ One idea is filed **as a question, not a finding**: `history.back()` is async, so *fast*
   pressing may consume more than one entry each — which would make **fast the anomaly, not slow.**
   ⛔ **UNTESTED. Do not harden it.** It needs `_appNavDepth` read on her device at both speeds.
2. **MF167 sites 2-5** — correct by measurement, **never executed by a user.**
3. **The seven RUNG 1d candidates** — bare closers on signature keys in five more rooms
   (`core.js:4964` · `health.js:976` · `tinyTummies.js:453` · `:685` · `worldkitchen.js:261` ·
   `:1304` · `:1366`). **Candidates, not defects — none walked by a finger.** World Kitchen holds
   three; **measure that room first.**
4. **The MF166 matrix's other 11 rows** (`MF165_C0_FINDINGS.md` §5) — one row was struck by
   reading; **the rest were never re-measured. The true disagreement count is UNKNOWN.**
5. **The plan-persistence inversion.** Nothing persists `S`; `tinzaStore.setPlan`/`getPlan` exist
   (`tinzaStore.js:180`) and **nothing calls them.** The likeliest reading is that the plan was
   emptied *before* she exited — ⚠️ **reasoning, not measurement.** **To settle it: re-check with a
   plan that has NOT been through a Back press.**
6. **ENTRY 10's blast radius beyond the plan view.** There are **two** copies of the buy ladder —
   `core.js:1854` and `core.js:4028`. ⛔ **A fix must land in both or the two shopping surfaces
   disagree.**

---

## 6 · 🛠️ THE TOOLING THIS SESSION LEFT

**In the repo, keep:** `splitreport.js` · `anchorreport.js` (earlier sessions).
**Scratchpad, throwaway:** the nav sims, `fixrefs.js` (a one-shot anchor map — ⛔ **do not keep**).
**Worth building:** the `reference/` ref-sweeper — ⚖️ **RUNG 1f prices it in one paragraph in
`MF166`.** Short version: it bounds-checks today; to catch the failure that actually happened it
needs citations to **carry the symbol they mean** (`core.js:131 (navSignature)`), and **the
annotation pass over existing refs is the expensive half.**

---

## 7 · ▶️ WHERE TO START TOMORROW

1. **ENTRY 11.** Smallest surface, highest harm, no ruling needed. ⚠️ **`NAV_DATA_KEYS` is a
   CONTRACT about what counts as WORK vs NAVIGATION** — read it the way the signature contract is
   read, don't just append two strings. **Every other plan key is already there**, which is the
   argument these two are omissions.
2. **Then re-land MF168** and re-run its Test 2 — this time checking **the plan still has the
   dish**, not just where Back landed.
3. **Then whatever Tina has ruled** from §3.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
