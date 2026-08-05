# MF167 — SHE COMES BACK TO HER SHELF · *the stale snapshot*

> **Found by Tina on live, 6 Aug 2026, screenshot after every press.**
> Just Feed Me → *"I need a pick-me-up"* → a shelf of three (Cottage Pie · Avocado Egg Bowl ·
> Grilled Sardines) → open **Cottage Pie** → **Back**.
>
> 🩸 **She lands on the twelve mood tiles. The shelf is gone. She has to pick the mood again.**
>
> ⚖️ **LAW 20 — emptying her question is right. Emptying her WORK is theft.**

**Full evidence: `reference/MF166_THREE_BUGS.md` · BUG 5.** ⛔ Do not work from this summary alone
for the *why*; work from it for the *what*.

---

## 0 · WHAT THIS BRIEF IS, AND THE THREE THINGS IT IS NOT

**BUG 5 ONLY.** Three separate mechanisms wear this one symptom. ⛔ **This brief fixes one.**

| | defect | in this brief? |
|---|---|---|
| **BUG 5** | the pushed entry's SNAPSHOT is captured before the shelf exists | ✅ **YES** |
| **BUG 4** | a mood is a LEVEL; her fingers say LATERAL — ⚠️ **needs Tina's §24.7 ruling** | ⛔ no |
| **BUG 6** | plan views push on the way out instead of consuming — **3 rooms** | ⛔ no |
| **BUG 7** | extra presses that appear only with elapsed time — **needs a clock** | ⛔ no |

⚖️ **A bundled half-fix cannot be bisected.** Three mechanisms, one symptom, one day of confusion
already paid for. **One commit, one mechanism, one proof.**

📌 **This is ranked FIRST of the six** (`MF166` §RANKING) — not because it removes the most
presses (**it removes none**) but because it is the only one that **loses her work**, and it has
the smallest surface of any bug on the board: **mood room only, no shared file, no ruling needed.**

---

## 1 · ⛔ STOP-CONDITION — **STEP 1 IS READ, AND IT MAY END THE TASK**

```
grep -n "navRefreshEntry" sections/core.js
grep -n "S.moodRecipes =" sections/core.js
sed -n '2737p' sections/core.js
grep -n "moodRecipes" sections/core.js | head -3
```

**STOP AND SAY SO IF ANY OF THESE IS ALREADY TRUE:**

- ⛔ **`navRefreshEntry` already exists** — this brief has already landed, in whole or in part.
  **Say which of the five sites call it and STOP.**
- ⛔ `core.js:2737` is no longer `if(mood && (loading || recipes)){` — the render branch has moved
  and this brief's reasoning does not apply. **Re-measure before touching anything.**
- ⛔ `moodRecipes` **has been added to `navSignature()`** (`core.js:131`). If so **STOP** — that is
  a different and much worse fix (see §2), and it must be reverted before this one lands.
- ⛔ **`S.moodRecipes =` does not appear at exactly NINE lines** — expected **2616 · 2644 · 2652 ·
  2659 · 2666 · 2668 · 2678 · 2682 · 2684**. A tenth means the corpus moved; **re-run the §3b
  measurement before writing anything**, or the new site ships stale on day one. ⚖️ **RUNG 1d.**
  ⚠️ **NINE assignments, FIVE of which need the refresh** — see §3b for which four do not and why.
- ⛔ The line numbers do not point at the functions named. **Then the map is stale and the first
  output of this session is a corrected map, not a commit.**

**Baseline, and write the numbers down before touching anything:**
```
node tinza-doctor.js      # expect RED 10
node tinza-lawcheck.js    # expect 0 red · 0 drift
```

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT add `moodRecipes` to `navSignature()`** (`core.js:131`). It is the obvious fix and it is
**the worst thing on this page.** Every page of chef results would push its own history entry and
Back would walk her through all of them — **that is the pill-tap disease §24.7 exists to kill**
(`core.js:133-138`). ⚖️ **The signature is a contract about LEVELS, not about content.**

⛔ **DO NOT touch `navSnapshot()`** (`core.js:82`). The deep clone is correct and complete.
**The snapshot is not broken — it was taken at the wrong moment.**

⛔ **DO NOT touch `closeMoodRecipe()`** (`meals.js:16490`). **Measured: it pops correctly, depth
3→2.** ⚖️ *Never re-open a closed scar* — `2c61855` (MF149-A) and `b37944c` (MF151-B) are both
intact and both were paid for.

⛔ **DO NOT touch the push rule** (`core.js:831-859`). It behaved exactly as specified at every
step of the measurement.

⛔ **DO NOT touch `LATERAL_KEYS`** (`core.js:154-156`). That is BUG 4 and it **needs Tina's ruling
first**.

⛔ **DO NOT touch any plan-view closer** (`core.js:2712` · `budget.js:59` · `meals.js:15376`).
That is BUG 6, it spans three rooms, and it is its own commit.

⛔ **NOT ONE `costPP` MAY MOVE. NOT ONE RECORD IS EDITED.** This is an engine fix in one file.

---

## 3 · ✅ THE EXACT CHANGE — **ONE HELPER, FIVE CALL SITES, ONE FILE**

⚠️ **SCOPE, STATED UP FRONT:** this is **not** the one-line change the first draft of this brief
proposed. Two things were measured after that draft and both changed it: the one-character fix
**fails** (§3 below), and the same staleness is live at **five** fill sites, not one (**§3b**).
**Everything is in `sections/core.js`. No other file is touched.**

### The mechanism, in one paragraph
`core.js:2832` sets `moodRecipes:null` **and** `moodLoading:false`, then calls `callMoodChef()`.
The history push happens at **that** draw, so the entry stores *"a mood is chosen, nothing is
loading, there are no recipes."* The shelf arrives later at `core.js:2616-2618`, which draws but
**does not push** — so the stored entry is never updated. When `closeMoodRecipe()` pops
(`meals.js:16492`), `navSnapshot`'s deep clone faithfully restores that stale moment, and
`core.js:2737` — `if(mood && (loading || recipes))` — finds **both operands falsy** and falls past
the list branch to **the twelve tiles**.

**Measured:** the stored entry and the ENTER-JFM entry render **byte-identically, 7436 chars.**

### 🔴 THE OBVIOUS ONE-CHARACTER FIX WAS TESTED AND **IT FAILS.** DO NOT WRITE IT.

**The tempting change is `core.js:2832`: `moodLoading:false` → `moodLoading:true`.** It is
appealing for good reasons — it is *true* (the chef is invoked on the very next statement), and
every other async room already does it (`meals.js:15567` sets `_fourLoading:true`,
`meals.js:15691` sets `_anchorLoading:true`; **the mood room is the only one that lies about it**).

**MEASURED IN THE SANDBOX BEFORE THIS BRIEF SHIPPED:**

| stored state | `moodHTML()` renders |
|---|---|
| today — `loading:false, recipes:null` | **7436 chars — the twelve tiles** 🔴 |
| the one-char fix — `loading:TRUE, recipes:null` | **980 chars — a LOADING SHELL** |
| **her actual shelf** | **~5100 chars** ⚠️ content-dependent |

⛔ **980 is not a shelf. It does not restore her shelf; it restores a SPINNER — and nothing re-invokes
`callMoodChef()` on a popstate restore, so the spinner never resolves.** ⚖️ **It would turn "lands
on the wrong screen" into "lands on a screen that never finishes." That is worse.**

📌 **Recorded because the next session will think of it too.** ⚖️ **The one-line fix that is
semantically correct is not automatically the fix.**

### ✅ THE ACTUAL CHANGE — REFRESH THE ENTRY WHEN THE SHELF ARRIVES

**The defect is not what the entry says. It is that the entry is never updated after it is
pushed.** The shelf lands at `core.js:2616-2618` and `draw()` correctly declines to push (no
signature change) — **but nothing refreshes the snapshot the current entry is already holding.**

**File:** `sections/core.js` · immediately after the shelf is assigned and before/with its `draw()`
at **`core.js:2616-2618`**.

```
FROM:
    S.moodRecipes = firstPage || [];
    S.moodLoading = false;
    draw();
```
```
TO:
    S.moodRecipes = firstPage || [];
    S.moodLoading = false;
    navRefreshEntry();   // ⚖️ MF167 — the entry must hold the shelf it is the entry for
    draw();
```

⚠️ **`navRefreshEntry()` is defined once at `core.js:82` and called at ALL FIVE fill sites — see
§3b.** This site is the one Tina reported; **it is not the only one, and shipping it alone would be
RUNG 1d all over again.**

### ⚖️ WHY THIS ONE

1. **It fixes the cause, not the symptom.** The entry is stale; this un-stales it.
2. **It restores HER SHELF** — the snapshot now holds `moodRecipes:[3]`, which is the ~5100-char
   render, not the 980-char spinner and not the 7436-char tiles.
3. **It pushes nothing.** `replaceState`, not `pushState`. **No depth changes, no press count
   moves, no other room is touched.** ⚖️ The press count is BUG 4 / BUG 6 / BUG 7's business.
4. **It preserves `sig` and `rootDepth`** by spreading the existing `history.state` — the same
   care `core.js:844-847` takes when a lateral replaces an entry.
5. **It is guarded** — `history.state.tinza` ensures it never touches a non-Tinza entry, and the
   `try/catch` matches every other history call in the file.

---

## 3b · ⚖️ RUNG 1d APPLIED — **ALL FIVE FILL SITES, MEASURED. ALL FIVE ARE STALE.**

**`moodRecipes` is written at five places. None refreshes the entry.** ⛔ **MF151-B fixed one level
of its shape and left three; MF167 does not repeat that.**

**First, the precondition — is an entry live at these moments?**
Measured: **`moodRecipes` is not in `navSignature()`, and neither is `moodPage`.** So tapping MORE
pushes nothing. **ONE history entry stays live across every fill and simply goes stale under it.**

| # | `file:line` | function | reached by | stale render | correct render |
|---|---|---|---|---|---|
| 1 | **`core.js:2616`** | `callMoodChef` | **tap a mood tile** (`core.js:2832`) | **7436 — the tiles** 🔴 | ~5092 |
| 2 | **`core.js:2644`** | `getMoreMoodRecipes` | **tap MORE** — next library page | 5092 | 9280 |
| 3 | **`core.js:2652`** | `getMoreMoodRecipes` | **tap MORE** — library exhausted, AI bank ready | 9280 | 13468 |
| 4 | **`core.js:2666`** | the 800 ms poll (`core.js:2662`) | tap MORE **while AI still loading** → poll resolves | **968 — the waiting placeholder** | ~5092 |
| 5 | **`core.js:2682`** | `startMoodAIFetch(...).then` | tap MORE, **AI not started** → fetch resolves | **968** | ~5092 |

> ## **EVERY ONE DIFFERS. ALL FIVE NEED THE REFRESH.**
> Site 1 loses her whole shelf. Sites 2-3 lose every extra page she asked for. Sites 4-5 strand
> the entry on the **waiting placeholder** — back out of a recipe and she gets a frozen "…" that
> nothing resolves.

⚠️ **THE CHAR NUMBERS FOR THE SHELF ARE CONTENT-DEPENDENT** — they move with the dishes on it.
**Only 7436 (the tiles) and 968 (the waiting placeholder) are stable, because neither renders any
recipe.** ⛔ **Do not write `=== 5092` into any check.** ✅ **Assert the stable side: the restored
render must NOT be the tiles and must NOT be the placeholder.**

### 🩸 BUT THE FIX IS **NOT** IDENTICAL AT ALL FIVE — SITES 4 AND 5 NEED A GUARD

| sites | when they run | safe to refresh unconditionally? |
|---|---|---|
| **1 · 2 · 3** (`2616` · `2644` · `2652`) | **synchronously inside her own tap** — the entry on top is certainly this screen's | ✅ **yes** |
| **4 · 5** (`2666` · `2682`) | **late continuations** — a poll and a resolved fetch | ⛔ **NO** |

**Measured: neither `core.js:2662-2672` nor `core.js:2680-2684` is guarded by `S.screen` or
`S.moodSelected`.** They write and `draw()` **after she has navigated away** — already logged in
`MF166` BUG 7 §4 as an unguarded-continuation smell.

> ## ⛔ **AN UNGUARDED `replaceState` AT SITES 4-5 WOULD OVERWRITE THE HISTORY ENTRY OF WHATEVER SCREEN SHE IS ON.**
> A late AI resolution while she is in Braai would stamp a Just Feed Me snapshot onto Braai's
> entry. **That is a worse bug than the one being fixed, and it would be intermittent.**

**So sites 4 and 5 refresh only if the entry still belongs to this shelf:**
```
if (S.screen === 'mood' && S.moodSelected === moodId && !S.moodActiveRecipe) { …refresh… }
```
⚠️ **`moodId` is in scope at both sites** — `getMoreMoodRecipes(moodId)` owns them. ⛔ **Do not
reach for `mood.id`; site 4's closure is inside `getMoreMoodRecipes`, not `callMoodChef`.**

### ✅ THE SHAPE, ONCE, IN ONE HELPER — ⚖️ Law 6

Five call sites and one behaviour. ⛔ **Do not paste the `replaceState` block five times** — that
is the one-list disease in a new costume (`MF166` RUNG 2). **Define it once, beside `navSnapshot()`
at `core.js:82`:**

```
// ⚖️ MF167 — REFRESH THE ENTRY SHE IS STANDING ON.
// A push stores a snapshot of the moment it happened. When content arrives later WITHOUT a
// signature change (moodRecipes is deliberately not in navSignature — that would push an entry
// per page, §24.7's pill-tap disease), the stored snapshot goes stale under her feet and Back
// restores a screen she never saw. This REPLACES the current entry; it never pushes, so no
// depth, no root and no press count can move. sig and rootDepth are preserved untouched.
function navRefreshEntry(){
  try {
    if (typeof history !== 'undefined' && history.state && history.state.tinza) {
      history.replaceState(Object.assign({}, history.state, { snap: navSnapshot() }), '');
    }
  } catch(_e){}
}
```

**Then, at each site, immediately before its existing `draw()`:**

| site | call |
|---|---|
| `core.js:2616-2618` | `navRefreshEntry();` |
| `core.js:2644-2645` | `navRefreshEntry();` |
| `core.js:2652-2653` | `navRefreshEntry();` |
| `core.js:2666-2670` | `if (S.screen==='mood' && S.moodSelected===moodId && !S.moodActiveRecipe) navRefreshEntry();` |
| `core.js:2682-2684` | `if (S.screen==='mood' && S.moodSelected===moodId && !S.moodActiveRecipe) navRefreshEntry();` |

⚠️ **`navRefreshEntry()` is a NEW shared function in `core.js`.** It is called only from the five
mood sites in this commit. ⛔ **Do not wire it into `draw()` or any other room here** — that is a
much larger change and it is not this brief. 📌 **But it is deliberately named for reuse: BUG 6's
plan views and any future async room will want exactly this.**

### ⛔ AND THE FOUR SITES THAT DELIBERATELY DO **NOT** GET IT

**`S.moodRecipes` is assigned at NINE lines, not five.** ⚖️ **RUNG 1d cuts both ways: name every
site, then say plainly which are excluded and why — an unexplained exclusion is the same silence
as an unasked question.**

| `file:line` | what it writes | refresh? | why |
|---|---|---|---|
| **`core.js:2659`** | `[{_waiting:true}]` — placeholder before the poll | ⛔ **NO** | It would **overwrite a good shelf with a "…"**. If she leaves and comes back, the entry should hold **the shelf she had**, not the spinner that replaced it. |
| **`core.js:2678`** | `[{_waiting:true}]` — placeholder before the fetch | ⛔ **NO** | Same. |
| **`core.js:2668`** | `[{_error:true, _msg:'No more recipes found…'}]` | ⛔ **NO** | An **end-of-list message is not a destination.** Backing into it would restore an error she has already dismissed by walking away. |
| **`core.js:2684`** | `[{_error:true, _msg:'No more recipes right now…'}]` | ⛔ **NO** | Same. |

📌 **THE RULE THAT SEPARATES THEM, AND IT IS ONE LINE:** ✅ **refresh when the write ADDS CONTENT
she asked for; ⛔ never when it writes a TRANSIENT — a placeholder or an error.**
⚖️ **The entry should hold the best thing she has seen, not the last thing that happened.**

⚠️ **If a future session adds a sixth content-adding write, it needs `navRefreshEntry()` too.**
That is what §5's ratchet rung is for.

---

## ✅ 4a · LIVE RESULTS — TINA, 6 AUG 2026 · **SHIPPED, AND PARTLY UNPROVEN**

| test | result | what it proves |
|---|---|---|
| **TEST 1 · does she come back to her shelf** | ✅ **PASSED, TWICE** | *"I need a pick-me-up"* (Cottage Pie · Avocado Egg Bowl · Grilled Sardines) and *"Need it fast"* (Gnocchi di Zucca · Ful Medames · Greek Salad). Opened a recipe, pressed Back, **the same shelf was still there both times.** She did not re-pick the mood. **⚖️ Law 20 harm closed.** |
| **TEST 2 · the MORE paths** | ⛔ **NOT RUNNABLE** | **There is no MORE button.** See below. |
| **TEST 3 · the guard** | ⚠️ **PASSED — but see the caveat** | Left Just Feed Me mid-fetch for Braai, opened a recipe, waited 30 s, pressed Back → **returned to Braai.** No revert. |

### 🩸 FOUR OF THE FIVE SITES ARE ON A PATH SHE CANNOT REACH

**`getMoreMoodRecipes()` (`core.js:2656`) has had no caller since `d773702`** — the MORE button was
deliberately removed by MF133 because the chef endpoint 503s, and it still does
(`netlify/functions/claude.js:26`). **Full finding: `MF166` ENTRY 8 — it is a RULING, not a defect,
and it must not be "restored" to make this test runnable.**

| site | reachable by finger today? | status |
|---|---|---|
| **`core.js:2639`** — mood-tile tap | ✅ **YES** | ✅ **PROVEN — TEST 1** |
| `core.js:2668` — MORE, library page | ⛔ no button | ⚠️ **UNPROVEN** |
| `core.js:2677` — MORE, AI bank | ⛔ no button | ⚠️ **UNPROVEN** |
| `core.js:2692` — the poll | ⛔ no button | ⚠️ **UNPROVEN** |
| `core.js:2714` — the fetch `.then` | ⛔ no button | ⚠️ **UNPROVEN** |

> ## ⚠️ **COMMIT 2 IS HALF-PROVEN. COMMIT 3 IS UNPROVEN.**
> `a6bce9b` proved one of its three sites. `6103ff0` proved none of its two.
> ⛔ **Neither is "passed". Both are UNPROVEN BY FINGER.** ⚖️ **MF166 RUNG 1e.**

### ⚠️ AND TEST 3'S PASS DOES NOT DISCRIMINATE
Test 3 exercises the guard at `core.js:2692`/`2714` — **which is inside `getMoreMoodRecipes()` and
therefore never ran.** ⛔ **A pass and a never-ran look identical from the outside.** ✅ **What Test 3
does prove is the absence of damage: nothing stamped a mood snapshot onto Braai's entry.** That is
worth having and it is **not** proof the guard fires correctly when it finally does run.

📌 **WHEN MF78 LANDS AND THE BUTTON RETURNS, TESTS 2 AND 3 MUST BE RE-RUN.** ⚖️ **They are owed, and
this table is where the debt is recorded.**

---

## 4 · 🧪 THE PROOF — WHAT TINA TAPS

⚠️ **THIS PROOF DOES NOT COUNT PRESSES.** Press counts are BUG 4 / BUG 6 / BUG 7 and are
**expected to be unchanged and still wrong** after this commit. ⛔ **A tester who counts presses
will call this fix a failure.**

**Mechanical, before the push:**
```
node --check sections/core.js
node tinza-doctor.js        # RED must STILL be 10       ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
node tinza-echo.js          # 4 GLOSS reds — pre-existing, must not grow
```
⚖️ **NOT ONE `costPP` MAY MOVE** — this brief touches no record and no pricing path.

**On live, after a HARD RELOAD** (⚖️ Law 27):

> ### 🩸 **TEST 1 — THE ONE THAT MATTERS: DOES SHE COME BACK TO HER SHELF?**
> 1. **Just Feed Me → any mood → wait for the shelf.** Note the three dishes by name.
> 2. **Open one of them.**
> 3. **Press Back once.**
> 4. ## ✅ **THE SHELF IS STILL THERE, WITH THE SAME THREE DISHES, AND SHE DID NOT PICK THE MOOD AGAIN.**
>    ⛔ **If she lands on the twelve tiles, THE FIX HAS FAILED** — regardless of any press count.

> ### 🩸 **TEST 2 — THE FOUR SITES SHE DID NOT REPORT (§3b)**
> 5. **Same mood → tap MORE** until the shelf is **six or more** dishes. Note the last dish.
> 6. **Open a recipe → Back.**
> 7. ## ✅ **ALL of them are still there — not just the first three.**
>    ⛔ **If it snaps back to three, sites 2-3 (`core.js:2644` · `2652`) did not land.**
> 8. **Keep tapping MORE past the library**, until a "…" waiting state appears and then resolves.
>    **Open a recipe → Back.**
> 9. ## ✅ **She gets the resolved shelf — NOT a frozen "…".**
>    ⛔ **A stuck placeholder means sites 4-5 (`core.js:2666` · `2682`) did not land.**

> ### 🩸 **TEST 3 — THE GUARD ON THE LATE CONTINUATIONS (§3b)**
> ⚖️ **This is the test for the damage the fix itself could do.**
> 10. **Tap MORE so the chef is still working**, then **immediately leave Just Feed Me** — go to
>     **Braai** and open any recipe. **Wait 30 seconds** for the chef to resolve behind her.
> 11. **Press Back.**
> 12. ## ✅ **She returns to where she was in BRAAI.**
>     ⛔ **If Back lands her in Just Feed Me, the guard at sites 4-5 is missing or wrong** — a late
>     resolution has stamped a mood snapshot onto another room's history entry. ⚖️ **That is a
>     worse bug than the one being fixed. Revert, do not patch forward.**

**And these must be unchanged:**
5. **Picking a mood still loads a shelf** — the loading state may now be visible for a beat where
   it was not before. ⚠️ **That flash is the fix telling the truth. It is not a regression.**
6. **Braai · Budget · Meals · World Kitchen** — completely unchanged. Nothing shared was touched.
7. **My Plan survives. Servings and people counts survive.** ⚖️ Law 20.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 5 · ⚖️ LAW 42 — THE RATCHET · THE RUNG THIS COMMIT OWES

**A doctor rung that fails when a state key that a history entry's RENDER depends on is written
WITHOUT the entry being updated.**

📌 **Stated concretely, so it can actually be built:** for each `*Loading` / `*Recipes` pair the
app owns, assert that **the key which decides a screen's render branch is either (a) in
`navSignature()`, or (b) TRUE at the moment the entry is pushed.** `moodLoading` was neither, and
that is exactly the hole.

**The cheapest honest version, and the one to build first:**
> **A rung that fails when a function writes a key the render branches on, calls `draw()`, and
> does NOT refresh the current history entry.** Concretely and mechanically: **every site that
> assigns `S.moodRecipes` / `S.*Recipes` / `S.*Results` and then calls `draw()` must either call
> `navRefreshEntry()`, or appear on a PRINTED exempt list with its reason.**
>
> **Measured today: NINE assignment sites — `core.js:2616` · `2644` · `2652` · `2659` · `2666` ·
> `2668` · `2678` · `2682` · `2684`. Five take the refresh; four are exempt transients (§3b).**
> **The rung ships with 9 = 5 + 4 as its baseline and fires on the tenth.**

⚠️ **THE EXEMPT LIST MUST BE PRINTED ON EVERY RUN, NOT SILENTLY APPLIED.** ⚖️ Same law as
`pricecheck`'s parked keys and rung 14's historical allowlist: **a suppression nobody can see is
how the next one hides.**

⚠️ **PROVE IT BORN-RED:** remove the `replaceState` again, watch the rung go RED, restore it,
watch it settle. ⚖️ *A rung nobody has seen fire is a rung nobody should trust.*
📌 **AND PROVE THE FIX ITSELF THE SAME WAY IT WAS DESIGNED:** render the stored snapshot and assert
it is **NEITHER 7436 (tiles) NOR 968/980 (the placeholder/spinner)** — the two stable, content-free renders. ⚖️ **Those three
numbers are the whole bug, and any of them can be asserted mechanically.**
⛔ **AMBER, not RED, if it cannot be made precise** — a false gate on a shared render path is worse
than no gate. ⚖️ Law 51: the RED count must not grow by shipping this.

---

## 6 · ▶️ WHAT THIS DOES **NOT** FIX — SAY IT OUT LOUD BEFORE SHE TAPS

⛔ **After MF167 the Back button still takes more presses than §24 allows.** That is **BUG 4**
(needs her ruling), **BUG 6** (three rooms), and **BUG 7** (needs a clock). **None is touched
here.**

⚖️ **She should be told this before she tests, or a working fix will look broken.** 📌 What changes
on her device is exactly one thing, and it is the thing that was stealing her work:

> ## **HER SHELF SURVIVES THE BACK BUTTON.**
