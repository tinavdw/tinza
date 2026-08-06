# FMF_NAV_COLD_START.md — for the session that fixes the FORWARD path
**Written 6 Aug 2026, end of session.** Open the next chat with this file and `CLAUDE.md`.
**Supersedes `NAV_COLD_START.md` (5 Aug) — which has two sections now known to be WRONG. See §6.**

> ⚠️ **THIS FILE CITES NO LINE NUMBERS ON PURPOSE.** ⚖️ **RUNG 1f** cost 39 stale refs in one
> session. Every anchor below is named by **SYMBOL**, not by line. Grep for the symbol.
> **HEAD at writing: `7a5ddcc`.**

---

## 0 · THE HEADLINE — READ THIS BEFORE YOU TOUCH THE BACK BUTTON

# 🚨 TAPPING A MEAL SLOT LANDS ON THE PLAN, NOT THE DISH LIST.
# THE FORWARD PATH IS WRONG. FIX IT BEFORE YOU TOUCH BACK.

**Tina, walking it on her own device, 6 Aug:**
> *"I click on feeding my family. Then I click on supper. Then I land on the plan... **I'm not
> supposed to go to the plan directly.**"*

**Reproduced three times in one walk — Supper, Breakfast, Light Lunch. All three land on the plan.**

### ⛔ THIS IS NOT WHAT ENTRY 12 WAS FILED AS
ENTRY 12 was filed as *"is a meal slot a LEVEL or a LATERAL"* — **a question about the Back button.**
It is not. **The forward navigation is landing on the wrong screen.** Every Back oddity in the walk
below may be **downstream of one wrong forward step.**

> ## 📌 **THE ORDERING CONSTRAINT, AND IT IS THE WHOLE POINT OF THIS FILE:**
> ## **MEASURE WHAT TAPPING `Supper` ACTUALLY CALLS. FIRST. BEFORE ANY BACK FIX.**
> **Fix Back first and you are building on sand.**

### ⚖️ AND §24.12 MUST BE RE-EXAMINED — IT WAS ASKED ABOUT THE WRONG SCREEN
§24.12 (ruled 27 Jul) says *"A LATERAL PUSHES NOTHING, SO BACK FROM ONE LEAVES THE ROOM"* and its
confirmed example is **"Supper (Oven Bakes → Back → out of the room). Both correct."**

🩸 **That example assumes she passes through a dish list. She does not.** The ruling was made about
a screen that is not in the path. ⛔ **The ruling is not "wrong" — it was asked the wrong question.**

⚖️ **CLAUDE SAID THIS RULING WAS "MADE WITH THE WHOLE MODEL IN VIEW" AND RECOMMENDED STRIKING
ENTRY 12's FMF HALF. THAT WAS WRONG. Her finger showed why, forty minutes later.**
**RUNG 4 — see §5.**

---

## 1 · ⏸️ HELD ON TINA — AND THIS ONE IS NEW

| what | who decides |
|---|---|
| 🔺 **When she taps `Supper`, what should she SEE?** **(a)** the dish categories, with the plan one tap further · **(b)** the plan, with categories one tap further | **Tina** |

⛔ **CODE CANNOT START THE FMF FIX WITHOUT THIS ANSWER.** It is a design call about how the app
should feel under her thumb, not a defect with a correct answer.
⚖️ **Ask it FRESH. It was deliberately NOT asked at the end of a two-hour nav session.**

---

## 2 · ✅ WHAT SHIPPED — MF169, FOUR COMMITS, ONE PUSH

**Doctor RED 10 before and after · lawcheck 0 red 0 drift · echo 4 GLOSS (unchanged) · tree clean.**
**Not one `costPP` moved.**

| sha | what |
|---|---|
| `751785a` | `reference/ENTRY11_MEASUREMENT.md` filed |
| `0264ce2` | **§24.13** mood tile = LATERAL · **§5 AMENDED** (not rewritten) |
| `806c002` | `NAV_DATA_KEYS` **20 → 35** — obeys §5 |
| `7a5ddcc` | **doctor rung 15** — born-RED proven (removing `moodPlan` → RED 11) |

**§5 amendment:** 14 keys added beneath the existing table · the `healthPlan`/`healthShowPlan`
worked example · the floor caveat · the `_fourCache` do-not-fix note. **Date, table and wording of
the original 13–14 Jul ruling untouched.**

**Rung 15:** reads `NAV_DATA_KEYS` from `core.js` **in a sandbox, never a copy** (same design law as
`tinza-all.js`, `merge.js`, `pricecheck.js`). Prints **101 unclassified keys as AMBER / JUDGEMENT
REQUIRED** every run — ⚖️ **a documented floor, like the 4 GLOSS reds. Not debt.** It never guesses
a side. `--keys` prints all 101.

⚠️ **§24.13 IS A RULING ONLY. IT IS NOT IMPLEMENTED.** BUG 4 is unblocked, **not closed.**

---

## 3 · 🩸 THE FINDING NOBODY WAS LOOKING FOR

# THE PLAN SURVIVES A HARD RELOAD.

Tina hard-reloaded, went back into FMF, **and the dishes from before the reload were still there.**

**A hard reload destroys `S` entirely.** If the plan came back, **something writes it to storage and
reads it back.**

⛔ **`NAV_COLD_START.md` §5.5 SAYS THE OPPOSITE:** *"Nothing persists `S`; `tinzaStore.setPlan`/
`getPlan` exist and nothing calls them."* ⚖️ **Her finger beats the file. §5.5 IS WRONG.**

### 🚨 AND IT REFRAMES EVERY PASS FROM TONIGHT
"The plan survived Back" is now consistent with **two different mechanisms**:
1. `NAV_DATA_KEYS` protected it — **the fix worked**, or
2. **storage silently re-read it after a wipe she never saw.**

**The test cannot tell them apart.**
✅ The MF169 fix is **still correct on inspection** — 15 keys were genuinely missing from a
three-week-old ruling.
⛔ **BUT ENTRY 11 DOES NOT CLOSE ON THIS EVIDENCE.** ⚖️ **A green that measures less than its name.**

**First job on this: grep every writer to storage. Find what persists the plan. Then correct §5.5.**

---

## 4 · 🎯 ENTRY 6 IS CONFIRMED LIVE — WALKED, NOT INFERRED

**The plan view pushes history entries on the way out.** This is MF168's disease, in the room MF168
was reverted from. **The cold start said the shape was older and still live. It is.**

Tina's walk, 6 Aug — **same button, same screen, different answers:**

| she did | she got |
|---|---|
| plan → bottom Back | **main menu** (skips FMF entirely) |
| plan → bottom Back | **Supper** → Back → **the plan again** → Back → main menu |
| removed a dish from the plan | landed in **the recipes** |
| earlier, from a recipe: Back | → plan → Back → **the recipe again** *(went FORWARD into a screen already left)* |

⚠️ **The last row's exact sequence is NOT RECORDED.** Tina said *"I can't remember exactly the
sequence"* — ⚖️ **and that was left as-is on purpose. RUNG 1b. A tidy 70%-right sequence is worse
than an honest gap.**

⚠️ **IT IS INTERMITTENT.** It worked, then it did not, same room, same session. ⚖️ **That is BUG 7's
signature — and BUG 7's mechanism is NOT VISIBLE IN `sections/`. It will not be caught by reading
code.** The instrument that would catch it is an **`_appNavDepth` readout in dev mode**, read on her
device at both tap speeds. **That is its own brief, not a patch.**

---

## 5 · ⚖️ THE RUNGS FROM TODAY

| rung | the thing that stood in for the truth |
|---|---|
| **4** | 🩸 **A RULING IS ONLY AS GOOD AS THE PATH IT WAS ASKED ABOUT.** §24.12's example assumes a dish list she never sees. Claude called it *"made with the whole model in view"* and recommended striking her bug report. **Forty minutes later her finger showed the screen was not in the path.** ⚖️ **When a ruling and a finger disagree, ask WHAT PATH THE RULING ASSUMED — before deciding which is wrong.** |
| **5** | ⚖️ **THE STOP-CONDITION EARNED ITS KEEP — AGAINST THE BRIEF THAT CARRIED IT.** Claude briefed a new WORK-vs-NAVIGATION ruling. **§5 had carried it since 13–14 Jul.** The brief would have built the second home `CLAUDE.md` §8 is a monument to. **The brief caught the brief.** |
| **6** | 🩸 **`lawcheck` PRINTED 0 DRIFT WHILE §5 HAD BEEN DISOBEYED FOR THREE WEEKS.** Not a lawcheck bug — **it measures FILES against FILES and never claimed otherwise.** But *"0 drift"* reads as *"nothing has drifted."* **Rung 15 now measures code-vs-ruling for ONE ruling. Every other ruling in `TINZA_RULINGS.md` is still unmeasured against the code.** |
| **7** | ⚖️ **CLAUDE WAS WRONG THREE TIMES AND THE MEASUREMENT CAUGHT ALL THREE.** §24.8 was not free · §24.12 already ruled ENTRY 12 · BUG 1's premise was false. **Every one was caught by reading before writing.** |
| **8** | 🔴 **BUG 1's PREMISE WAS FALSE, AND IT WAS CARRIED FORWARD BY CLAUDE UNMEASURED.** MF166 said flipping `healthy` with zero tags *"EMPTIES THE SHELF SILENTLY."* **It does not — `getMoodPageRecipes()` falls back to `MOOD_DB[moodId]`, with a comment citing Law 3.** ⚡ **CONSEQUENCE: Tina can tag `healthy` records ONE AT A TIME, starting now. The shelf degrades to the old cards. It never blanks.** |

📌 **THE FAMILY, AGAIN:** rungs 4, 6 and 8 are all **a thing that looks like a measurement but has
quietly stopped measuring what it names.** ⚖️ **Third session running. That is the shape to watch.**

---

## 6 · ⛔ CORRECTIONS TO `NAV_COLD_START.md` — DO NOT READ IT UNMARKED

| its claim | the truth |
|---|---|
| **§5.5** — *"nothing persists `S`"* | ❌ **WRONG.** The plan survives a hard reload. §3 above. |
| **§0** — *"Tina lost a plan to this"* stated as fact | ⚠️ **INFERENCE.** Its own §5.5 admits it. **Still not measured.** |
| **ENTRY 5 ticked ✅ FIXED (MF167)** | ⚠️ **PARTIAL.** 1 test of 3 passed; 2 owed at MF78. RUNG 1e. |
| **ENTRY 9** — *"no room has a clear-plan control"* | ❌ **STRUCK.** Health has one. Corrected in `MF166_THREE_BUGS.md`. |
| **BUG 1** — *"empties the shelf silently"* | ❌ **FALSE.** Fallback exists. Re-filed as **TAGGING ONLY.** |
| **ENTRY 12** — *"level or lateral"* | ❌ **REFRAMED.** It is a **forward-path** bug. §0 above. |

---

## 7 · ⚠️ WHAT IS UNMEASURED — NAMED, NOT ASSUMED

1. **PROOF 2 NEVER RAN.** All three passes were FMF, which exercises **`mealPlan` only**. The other
   **13 keys** — Budget, World Kitchen, the events rooms — **were never touched by a finger.**
   ⚖️ **MF168's Test 2 passed while Budget was quietly emptying.** Guest counts, portion tweaks and
   shopping ticks are **not plans**, so storage is least likely to be covering for them. **That is
   the test that discriminates.**
2. **Which door she came through** — recipe opened from the dish list vs from inside the plan view.
   **Different paths, different depths, same button. Never established.**
3. **BUG 7's mechanism** — still not visible in `sections/`. Needs `_appNavDepth` on her device.
4. **The 101 unclassified keys** — printed AMBER every run. **A floor, not a total.**
5. **Every ruling except §5** — unmeasured against the code. Rung 6.
6. **`MOOD_DB.healthy`'s cards** — the shelf is not blank. **Whether the cards are the RIGHT cards
   is a separate, unmeasured question.**
7. **The two buy ladders** — not drifted on branches, but **the count bridge is implemented twice,
   differently.** ⚖️ *"One behaviour, two implementations"* — **not** *"they disagree."* Parked
   until pack sizes land; **de-dup in that same session or the two shopping surfaces will diverge.**

---

## 8 · ▶️ WHERE TO START TOMORROW

1. **ASK TINA §1.** What should tapping `Supper` show? ⛔ **Nothing in FMF starts without it.**
2. **MEASURE THE FORWARD PATH.** What does tapping a meal slot actually call? **Report only.**
3. **FIND WHAT PERSISTS THE PLAN.** Grep every storage writer. Correct §5.5. ⚖️ **Until this is
   known, ENTRY 11 stays open.**
4. **RUN PROOF 2** — Budget and World Kitchen. Assert **the dish is still in the plan**, not where
   Back landed.
5. **THEN** ENTRY 6, then re-land MF168.

⚡ **FREE, ANY TIME, NO CODE:** tag `healthy` records one at a time. The shelf degrades, never blanks.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
