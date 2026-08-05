# MF164 — THE TWO BOXES AT THE BOTTOM OF EVERY CARD

> **Found 5 Aug 2026, Tina's eyes on live.** Istambu Namathambo · Bacalhau à Brás.
> **Tina:** *"goes well with olives? No leftover suggestions there."*
>
> Both boxes decide **what a field contains** by guessing, and both guess wrong at scale.
> They ship in the same slot, at the bottom of the same card, so they ship together.

---

## 0 · WHAT WAS MEASURED — 1218 records, 5 Aug

| | |
|---|---|
| 🔴 pairing chips that are **not names** | **512 records** |
| 🔴 savoury cards with **no leftovers box at all** | **115** *(a further 239 are desserts/drinks — **by design**, not a bug)* |
| 🔴 **authored `leftovers` arrays never read by any code path** | **267** |
| 🔴 the heritage line above the ideas is **`Math.random()`** | every card, re-rolled every render |

---

## 1 · ⛔ STOP-CONDITION

```
grep -n "length > 40" sections/worldkitchen.js
grep -n "LEFTOVER_HERITAGE\[Math.floor" sections/core.js
grep -n "r.leftovers" sections/core.js sections/worldkitchen.js
```
If the 40-character guard is gone **and** `r.leftovers` is read somewhere, **STOP — say so.**
Baseline: `node tinza-doctor.js` (**RED 10**) · `node tinza-lawcheck.js` (**0 red 0 drift**).

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT re-author `pairsWith` or `leftovers` on any record.** ⚖️ 512 + 267 records is a content
pass and its own decision. **This brief changes the READERS, not the WRITTEN.**

⛔ **DO NOT touch the braai leftovers path.** It derives from `MEAT_GROUPS`/side ids at
`core.js:5139` and never calls `wkLeftoverKeys`. ⚖️ **Braai is the SA room. It must render
byte-identically after this brief.**

⛔ **DO NOT touch `SAFETY_CLASS` or the Storage box.** The food-safety line is always free and
always renders. ⚖️ Paid for on 7 Jul; non-negotiable.

⛔ **DO NOT change the Pro gate.** Leftovers are Pro-gated and the teaser correctly reads
**R90/month**. ⚖️ R50 is struck and stays struck.

⛔ **desserts and drinks get NO leftovers box. That is by design — 239 records. Leave it.**

---

## 3 · ✅ COMMIT 1 — A PILL IS A NAME, NOT A FRAGMENT

**File:** `sections/worldkitchen.js` ~line 909.

**The bug:** `pairsWith` is split on `,` `and` `&`, then a **length > 40** test decides
list-vs-prose. **Prose that fragments SHORT sails through as chips.**

🩸 **This is the 30 Jul fix not going far enough.** Its own comment says pills reading *"wet"* and
*"it is the right one"* were killed on 375 records. **That fix caught prose over 40 characters. It
never caught prose that fragments short.** ⚖️ **The guard measures LENGTH. The question is
NAMEHOOD.**

**Measured casualties — 512 records:**

| source | renders as |
|---|---|
| `"A spoon of chakalaka (spiced tomato-and-bean relish) on the side."` | «A spoon of chakalaka (spiced tomato-» «-bean relish) on the side» |
| `"Tea, or after a heavy meal."` | «Tea» «or after a heavy meal.» |
| `"Beef stew, beans, or sukuma wiki."` | «Beef stew» «beans» «or sukuma wiki.» |
| `"A mezze spread with brik and olives."` | «A mezze spread with brik» «olives.» |
| `"A spicy dipping sauce."` | one chip, a whole sentence |

⚖️ **AND THIS IS WHY TINA SAW "black olives".** Nobody chose olives as a pairing. **A comma did.**
The field said *"a mezze spread with brik and olives"* — a sentence — and the splitter turned the
tail of it into a pill.

⚠️ **The chakalaka case is the one that proves length can never be the test:** the split fires on
the `and` **inside the hyphenated compound `tomato-and-bean`**, producing fragments of 36 and 25
characters. **Both pass a 40-character guard. Both are garbage.**

**THE FIX — replace the length guard with a namehood test. Every fragment must pass, or the whole
field is prose.**

```
FROM:
    gwwList = _gwwSplit.some(function(x){ return x.length > 40; }) ? r.pairsWith : _gwwSplit;
```
```
TO:
    // ⚖️ MF164 (5 Aug 2026) — A PILL IS A NAME, NOT A FRAGMENT. The 30 Jul guard tested LENGTH
    // and caught prose over 40 chars. It never caught prose that fragments SHORT: "Tea, or after
    // a heavy meal." chipped as «Tea» «or after a heavy meal.», and "chakalaka (spiced
    // tomato-and-bean relish)" split on the `and` INSIDE the compound, giving «…tomato-» and
    // «-bean relish)» — 36 and 25 chars, both under any length guard, both garbage. 512 records.
    // ⚖️ EVERY fragment must look like a NAME or the whole field is prose. One bad pill means
    //    the author wrote a sentence, and a sentence renders as a sentence.
    var _looksLikeName = function(x){
      if(x.length > 40) return false;                       // the 30 Jul test, kept
      if(x.split(/\s+/).length > 4) return false;           // "or as part of a mezze spread"
      if(/^(or|and|a|an|the|on|in|with|of|to|as|for)\b/i.test(x)) return false;  // sentence furniture
      if(/[.;:!?]$/.test(x)) return false;                  // a full stop means a sentence
      if(/^[-–—]|[-–—]$/.test(x)) return false;             // the chakalaka shape
      var _o=(x.match(/\(/g)||[]).length, _c=(x.match(/\)/g)||[]).length;
      if(_o !== _c) return false;                           // a bracket split in half
      return true;
    };
    gwwList = _gwwSplit.every(_looksLikeName) ? _gwwSplit : r.pairsWith;
```

⚠️ **EXPECT THE CHIP COUNT TO FALL HARD — that is the fix working, not breaking.** Hundreds of
records move from pills to a prose paragraph **in the same box, in the same slot.** ⚖️ `goesWellBox`
already renders a string as prose; **no renderer change is needed.**

⚠️ **`goesWithLink` clickability is NOT a bug and is NOT in scope.** *"a green salad"*, *"black
olives"* and *"vinho verde"* are grey because they are not recipes. **A pill is clickable when it
names a real dish. That is correct.** ⛔ Do not make everything clickable.

---

## 4 · ✅ COMMIT 2 — THE LEFTOVER MAP: SINGULARS AND FOUR ORPHANED KEYS

**File:** `sections/core.js` · `wkLeftoverKeys` map.

**Two measured faults:**

1. **The map regexes are singular-only.** `/\bchickpea\b/` does **not** match `"chickpeas"`.
   `/\blentil\b/` does not match `"lentils"`. `black-eyed peas` matches nothing at all.
   Lablabi's anchor **is** `chickpeas`; koshari's **is** `brown lentils`.
2. **Four keys exist in `LEFTOVER_IDEAS` with NO map entry** — `egg` · `pap` · `roast-veg` ·
   `fruit`. **Frittatensuppe's anchor is `egg`. Strapatsada's is `eggs`. Brik's is `egg`.**
   All fall through to the whole-string sweep and land on **beef**.

**THE FIX:** make every map regex plural-tolerant (`s?`/`es?` where the noun allows), and add map
entries for the four orphaned keys.

⛔ **`pap` gets a map entry but stays OUT of the generic non-SA path** — ⚖️ §39, and it is the
braai room's word. **Add the key; do not let it win on a Greek card.**

⚠️ **After this, re-measure the 115 savoury no-box records.** Several are `injera`, `ugali`,
`sadza`, `xima`, `chapati` — **staples with no map noun at all.** ⛔ **Do not invent keys for them
in this commit. Report the residue.**

---

## 5 · 🔴 COMMIT 3 — 267 AUTHORED LEFTOVER LISTS ARE INVISIBLE

**No code path reads `r.leftovers`.** `leftoverBoxHTML(keys)` renders `LEFTOVER_IDEAS[key]` and
nothing else; `worldkitchen.js:893` calls `wkLeftoverKeys(r)` unconditionally.

🩸 **267 records carry hand-authored leftover ideas that no user has ever seen.** Bebek Goreng's
bespoke list — the duck-fat one, the broth one — has never rendered. **That is authoring already
paid for, sitting dead in the file.**

⚖️ **THE RULE: AUTHORED BEATS DERIVED, ALWAYS.** A generic pool is a *fallback*, never an override.

```
IN worldkitchen.js ~893, BEFORE calling wkLeftoverKeys:
  // ⚖️ MF164 — AUTHORED BEATS DERIVED. 267 records carried hand-written leftovers that no code
  // path read; every one of them was showing generic pool text instead. A derived pool is a
  // FALLBACK, never an override.
  if(Array.isArray(r.leftovers) && r.leftovers.length){ /* render r.leftovers */ }
  else { /* existing wkLeftoverKeys path */ }
```

⚠️ **The authored list must render in the SAME box, SAME heading, SAME Pro gate.** ⚖️ **Rule Zero
— sameness.** A reader must not be able to tell which records were hand-authored.

---

## 6 · ⏸️ THE HERITAGE LINE — TINA'S CALL, NOT CODE'S

`leftoverBoxHTML` picks the italic line above the ideas with
**`LEFTOVER_HERITAGE[Math.floor(Math.random()*LEFTOVER_HERITAGE.length)]`** — **random, from 7,
re-rolled on every render.**

That is why **samp-and-beans** carried *"French toast's real name — pain perdu — means 'lost
bread'"* and **jollof** carried the chilaquiles line. It is not keyed to anything. It sits directly
above dish-specific ideas, so it **reads as if it belongs to the dish.**

⛔ **DO NOT change this in this brief.** Three options, and it is a taste decision:
1. **Drop it** — the ideas stand alone.
2. **Key it** to the same key as the ideas — needs 15 lines written, one per key.
3. **Keep it random but reframe it** so it plainly reads as general leftover history, not this dish's.

⚠️ **Whatever is chosen, the randomness must go.** ⚖️ **Rule Zero — the same card must render the
same way twice.** A line that changes on refresh is drift the reader can see.

---

## 7 · 🧪 THE PROOF

```
node --check sections/core.js sections/worldkitchen.js
node tinza-doctor.js        # RED must STILL be 10        ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
node tinza-echo.js          # the 4 pre-existing GLOSS reds must STILL be 4, not 5
node tinza-all.js vietnam ; node tinza-all.js thailand
node costcheck.js china ; node costcheck.js japan ; node costcheck.js indonesia
node costcheck.js thailand ; node costcheck.js vietnam
```
⚖️ **NOT ONE `costPP` MAY MOVE.** ⚠️ **Prove it field-by-field, not by grep** — these are
single-line JSON records, so every changed line contains `costPP` whether or not it moved.
⚖️ **The method Code used in MF163 is the standard now: parse at HEAD, parse now, diff by field.**

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. **Istambu Namathambo** → GOES WELL WITH reads as **one sentence**, not two broken chips.
   **No pill starts or ends with a hyphen.**
2. **Bacalhau à Brás** → its pairings read as prose. *"black olives"* no longer stands alone as
   though someone chose it.
3. **Frittatensuppe** → **egg** leftovers. **No potjie. No pap. No beef.**
4. **Bebek Goreng** → its **own authored** leftover ideas, in the same box as everyone else's.
5. **Any braai recipe** → **byte-identical.** ⚖️ The SA room keeps its pap.
6. **Any dessert** → still no leftovers box. By design.
7. **My Plan survives. Servings and people counts survive.** ⚖️ Law 20.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 8 · ⚖️ LAW 42 — THE RATCHET

**Two rungs:**
1. **A pairing pill that is not a name** — the §3 `_looksLikeName` test, run over the corpus.
   After commit 1 the correct count is **0**.
2. **A record with authored `leftovers` that renders derived text instead.** After commit 3: **0**.

⚠️ **Prove both born-RED, BOTH ARMS.** ⚖️ §5b: *a probe must be shown to produce a true negative
too.* Re-inject `"Tea, or after a heavy meal."` and watch rung 1 fire; confirm a genuine list like
`"pap · chakalaka · coleslaw"` does **not**.

---

## 9 · ▶️ RESIDUE — REPORT, DO NOT FIX

- **115 savoury cards with no leftovers key**, minus whatever commit 2 recovers. Several are
  staples — `injera` · `ugali` · `sadza` · `xima` · `chapati` — with no map noun at all.
- **The one-array assumption, now bitten FOUR times:** `splitreport.js` (fixed) · `pricecheck.js`
  · `tinza-doctor.js` §13 · and `anchorreport.js` carries a **second copy** of the fixed loader.
  ⚖️ **One shared loader, not four.** Two copies of a loader is the same shape as two copies of a
  resolver — **which is how this whole day started.**
