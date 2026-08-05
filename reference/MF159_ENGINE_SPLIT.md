# MF159 — THE TWO ENGINES MUST AGREE · *(the lamb job, correctly ordered)*

> **Ruled by Tina, 5 Aug 2026** after the measurement below. This SUPERSEDES the order written
> in `reference/VIETNAM_COLD_START.md` §3b (*"name 19 lines, THEN kill the alias"*) and in §7
> item 4. **That order was written before anyone knew there were two engines.**
>
> ⛔ **THE ALIAS `"lamb": "lamb neck"` IS NOT KILLED IN THIS BRIEF.** It is not killed until
> step 4, in a later session, when nothing leans on it. ⚖️ **Law 20 — a price that vanishes
> is a harm.** Killing it today does not fix the card (already R0); it drops the *shopping
> list* from R170 to R0 as well, turning a visible inconsistency into a silent hole.

---

## 0 · WHAT WAS MEASURED, AND WHY THE OLD ORDER WAS WRONG

**`priceOf()`** (core.js) reads **`PRICE_ALIAS`**.
**`wkPriceLookup()`** (worldkitchen.js) reads **`WK_ALIAS`** and **never `PRICE_ALIAS`**.

Both are live at once on the same record:

| surface | code | resolver | bare `lamb` |
|---|---|---|---|
| recipe-card cost | `worldkitchen.js:1027` | `wkPriceLookup` only | **R0 — unpriced** |
| plan / shopping list | `worldkitchen.js:1298` → `priceName` → `core.js:1785` | falls through to `priceOf` | **R170** |

**Measured over all 371 `PRICE_ALIAS` entries and 11,102 World Kitchen ingredient lines:**

- **121 lines · 68 distinct names · 107 records** are split — card R0, list priced.
- **Lamb is 11 of the 121. Nine percent.** The old order fixed 16 lines and left 105 identical ones live.
- Independently corroborated: `node pricecheck.js china` already prints `· lamb [china-chongqing-huo-guo]` in its ABSENT list.

📎 **The full evidence table is `SPLIT_121.md`** — every name, every count, every record id.
⛔ Do not work from this summary. Work from that table.

---

## 1 · ⛔ STOP-CONDITION — STEP 1 IS READ, AND IT MAY END THE TASK

```
grep -n "PRICE_ALIAS" sections/worldkitchen.js
```

- If `wkPriceLookup()` **already** references `PRICE_ALIAS`, **this brief is DONE. SAY SO AND STOP.**
- If `wkPriceLookup()` is not at `sections/worldkitchen.js:620`, **STOP AND REPORT** where it is.
  Do not search-and-hope. ⚖️ Law 22 — read the real file.

Then baseline, and write the four numbers down before touching anything:
```
node tinza-doctor.js            # expect RED 10
node tinza-lawcheck.js          # expect 0 red 0 drift
node costcheck.js vietnam       # expect 33/33
node pricecheck.js china        # WRITE DOWN: exact / wrong-product / absent
```

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT delete, edit or repoint ANY entry in `PRICE_ALIAS` or `WK_ALIAS`.** Not lamb, not
anything. This brief changes **one resolver**, not one alias.

⛔ **DO NOT touch any record, any ingredient line, any `costPP`.** Zero content changes in
commit 1. If a `.js` file under `sections/` other than `worldkitchen.js` shows as changed,
**you have made a mistake — revert.**

⛔ **THE NEW RUNG GOES LAST, IMMEDIATELY BEFORE `return null;` — NOT EARLIER.**
This is the whole safety argument and it is not a style preference:
- **Placed last**, the alias is consulted only when *nothing else matched at all*. Blast radius
  is exactly the 121 lines that resolve to nothing today. **Nothing that currently prices can change.**
- **Placed earlier**, it would also override the fuzzy whole-word match and change 24 more
  resolutions (`bread flour`→`bread R18` becomes `cake flour R22`, `dried plums`→`plums R40`
  becomes `prunes R200`, `sardines`→`pilchards R65` becomes `tinned sardines R208`). Those are
  **§3j substring-fallthrough debt, logged and deliberately parked.** ⚖️ Do not clear a parked
  debt inside an unrelated brief; it makes the diff unreadable and moves banked `costPP`.

⛔ **DO NOT wrap the alias result in the `l2Blocks` collision guard.** `l2Blocks` exists to
catch *accidental* fuzzy collisions. A `PRICE_ALIAS` entry is a **deliberate Tina-confirmed
ruling**. Gating a ruling behind a collision guard would silently discard decisions.

⛔ **ONE THING PER COMMIT.** Commit 1 is the resolver. Commit 2 is the report tool. Commit 3+
is authoring, in a **later session**. ⚖️ Law 5.

---

## 3 · ✅ THE EXACT CHANGE — COMMIT 1, ONE FILE, ONE RUNG

**File:** `sections/worldkitchen.js` · inside `function wkPriceLookup(name)` which begins at
**line 620** · at the **very end of the function**.

```
FROM:
  if(best) return (typeof l2Blocks==='function' && l2Blocks(name, best)) ? null : { key:best, price:PRICE_DB[best], per:'weight' };   // MF28-L2 collision guard
  return null;
```

```
TO:
  if(best) return (typeof l2Blocks==='function' && l2Blocks(name, best)) ? null : { key:best, price:PRICE_DB[best], per:'weight' };   // MF28-L2 collision guard

  // ⚖️ MF159 (5 Aug 2026) — THE LAST RESORT: core.js's PRICE_ALIAS.
  // Until today this function read WK_ALIAS and never PRICE_ALIAS, while the plan/shopping
  // path (line ~1298) hands the raw name onward as `priceName` and core.js:1785 prices it
  // through priceOf() — which DOES read PRICE_ALIAS. Result: 121 ingredient lines across
  // 107 records billed R0 on the recipe card and a real price in the shopping list.
  // The same lamb line was R0 and R170 at the same moment. Measured, not inferred:
  // 371 aliases checked against both engines over 11,102 WK ingredient lines.
  // ⛔ THIS RUNG IS DELIBERATELY LAST. Placed earlier it would also override the whole-word
  // match above and move 24 further keys (bread flour→bread, dried plums→plums, sardines→
  // pilchards) — that is §3j substring-fallthrough debt, parked on purpose, not this brief.
  // ⛔ No l2Blocks guard here: an alias entry is a RULING, not an accidental collision.
  if(typeof PRICE_ALIAS !== 'undefined' && PRICE_ALIAS[n] && PRICE_DB[PRICE_ALIAS[n]] != null){
    return { key: PRICE_ALIAS[n], price: PRICE_DB[PRICE_ALIAS[n]], per:'weight' };
  }
  return null;
```

⚠️ **`n` is the already-cleaned name** produced at the top of the function by `wkCleanName(name)`.
Use `n`, **never** `name`. `PRICE_ALIAS` keys are cleaned-form. Using `name` will match almost
nothing and the tool will report a near-zero delta, which will look like success.

---

## 4 · ✅ COMMIT 2 — THE REPORT, BEFORE ANY AUTHORING

⛔ **Nobody names a single ingredient line until this report has been read by Tina.**
121 lines are about to move from R0 to a real number, and **some of those numbers are wrong.**
Already visible in `SPLIT_121.md`:

| written name | would now bill | why it is wrong |
|---|---|---|
| `cold chicken stock` ×2 | **chicken R90** | stock billing as a whole chicken |
| `litres chicken stock` ×2 | **chicken R90** | same, plus the unit word ate the name |
| `chicken or vegetable stock` ×2 | chicken R90 | **A-or-B line** — already ruled against, prices nothing honestly |
| `vegetable or chicken broth` ×2 | chicken broth R100 | A-or-B line |
| `water or stock` | stock R8 | A-or-B line |
| `Gruyère` ×6 | emmental cheese R600 | resolves only via the accent-stripped alias; a **substitution**, not a rename |
| `Salt & stock to taste` | stock R8 | parse artefact — a to-taste line that became an ingredient |

**Build `splitreport.js`** — read-only, in the repo root, same harness as `pricecheck.js`
(prices.js + core.js + worldkitchen.js into one `vm` sandbox, then call the app's own
`wkParseIngredients()` / `wkPriceLookup()` / `priceOf()`).
⚖️ **It must not reimplement price resolution.** Same design law as `merge.js`, `pricecheck.js`,
`costcheck.js`, `tinza-all.js`. A watcher with a private copy of the rules measures a program
that does not exist.

It prints, per line: written name · record id · file · what the card billed before · what it
bills after · **and a `⚠️ SUSPECT` flag** where the resolved key is a *different product* rather
than a *different spelling of the same product*.

⚠️ **BORN-RED PROOF, MANDATORY.** ⚖️ *Before trusting a zero, prove the probe can return a one*
— the doubanjiang scar, 4 Aug. `--selftest` must prove three things and print them:
1. a known split name (`lamb`) is reported by the tool;
2. deleting the alias in the sandbox **changes** the tool's answer;
3. a name that is NOT split is **not** reported (no false positives).

**Expected total: 121 lines · 68 names · 107 records.** ⚠️ **If the tool reports a number
materially different from 121, STOP.** Either the rung is not firing (used `name` instead of `n`)
or the corpus moved. Do not proceed on a number nobody can explain.

---

## 5 · 🧪 THE PROOF — WHAT TINA TAPS

**Mechanical, before the push:**
```
node --check sections/worldkitchen.js
node tinza-doctor.js          # RED must STILL be 10. Not 9. Not 11.   ⚖️ Law 51
node tinza-lawcheck.js        # 0 red 0 drift
node tinza-all.js vietnam     # 11 · 0 red · 0 drift
node tinza-all.js thailand    # 38 · 0 red · 0 drift
node pricecheck.js china      # absent count MUST DROP · lamb must leave the ABSENT list
node costcheck.js vietnam ; node costcheck.js thailand ; node costcheck.js china
node costcheck.js japan  ; node costcheck.js indonesia ; node costcheck.js southafrica
```

⚠️ **`costcheck` WILL now report stale `costPP` on records that contain a split line.** That is
**correct and expected** — those cards were costed against a silent R0. ⛔ **DO NOT re-derive
them in this brief.** List them, hand the list to Tina, stop. ⚖️ §30.1 re-derivation is its own
pass and its own decision, exactly as the 20-stale debt was handled on 3–4 Aug.

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. Open **Chongqing Hotpot**. The `300g lamb, sliced paper-thin` line must now show a price on
   the card. Before this change it showed nothing.
2. Add it to **My Plan** → open the **shopping list**. The lamb figure there must be **the same
   number** as on the card. **That equality IS the fix.** One dish, one price, both surfaces.
3. Open **Bunny Chow** (`meals.js`) — must be **completely unchanged**. It was never split; it
   always used `priceOf`.
4. **My Plan survives. Servings and people counts survive.** ⚖️ Law 20.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 6 · ⚖️ LAW 42 — THE RATCHET · THE NEW DOCTOR RUNG

**A rung that fails RED when any World Kitchen ingredient line resolves in one engine and not
the other.** After commit 1 the correct count is **0**, so the rung starts green and stays
green — and it fires the day someone adds a `PRICE_ALIAS` entry the WK path cannot see, which
is the exact bug that hid here for months.

⚠️ **Prove it born-RED first:** temporarily comment out the new rung, watch the doctor go to 11,
restore it, watch it return to 10. *A rung nobody has seen fire is a rung nobody should trust.*

🔴 **AND FIX THIS WHILE YOU ARE HERE — SEPARATE COMMIT.** `pricecheck.js`'s `COUNTRIES` map lists
six files. There are **twelve** `wk_*.js` files:

```
wk_africa · wk_china · wk_europe · wk_europe_germany · wk_europe_nireland · wk_france
wk_indonesia · wk_japan · wk_southafrica · wk_thailand · wk_vietnam · wk_world
```

**`wk_africa`, `wk_europe`, `wk_europe_germany`, `wk_europe_nireland`, `wk_france` and `wk_world`
have never been under the price watcher at all** — and they hold the majority of the 121 lines
(all 9 African lamb lines, all 6 Gruyère, all 3 chouriço). This is the identical hole
`wk_southafrica` had until 1 Aug, and `pricecheck.js` already carries the comment explaining why
that mattered. ⚠️ Expect the absent count to jump when they are added. **That jump is not new
breakage — it is six files becoming visible for the first time.** Report the number, change nothing.

---

## 7 · ▶️ WHAT HAPPENS AFTER — NOT THIS SESSION

3. **Name the wrong lines** — the 16 lamb lines *and* the other ~105, one authoring pass, using
   `splitreport.js`'s `⚠️ SUSPECT` list as the worklist. §3b's lamb ruling still governs:
   *`lamb potjiekos` R150 is a PRODUCT, not an alias to neck.* Stew · bredie · curry · breyani →
   potjiekos. Braai → `lamb shoulder chops` R220. Skewers → `leg of lamb`. **There is no
   bare-lamb default.**
4. **THEN kill `"lamb": "lamb neck"`** — when the report shows nothing resolving through it.
   At that point the deletion is free. Today it is a loss.
