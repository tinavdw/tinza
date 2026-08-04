# MF153 — WIDEN `costcheck.js` COUNTRIES BEYOND THE FIVE ASIA LANES

> **Raised:** 4 Aug 2026, out of the mushrooms R140 re-price.
> **Status:** QUEUED — ⛔ **do not start until Vietnam closes.** (Tina's instruction, 4 Aug.)

---

## 1 · STOP-CONDITION — READ FIRST, AND IT MAY END THE TASK

Open `costcheck.js` and read the `COUNTRIES` map (currently ~line 54).
**If it already contains `europe` and `southafrica`, THIS IS DONE. SAY SO AND STOP.**

---

## 2 · THE HOLE

`costcheck.js` watches `costPP` — §30.1, the figure that is DERIVED and must never be typed.
Its `COUNTRIES` map covers **five lanes only**:

```js
china · japan · indonesia · thailand · vietnam
```

**Two more section files carry `costPP` and NOTHING WATCHES THEM:**

| file | varName | costPP present | watched? |
|---|---|---|---|
| `sections/wk_europe.js` | `WK_EUROPE` | yes | ⛔ **NO** |
| `sections/wk_southafrica.js` | `WK_SOUTHAFRICA` | yes | ⛔ **NO** |
| `sections/wk_france.js` | `WK_FRANCE` | **none — 0 costPP** | n/a |
| `sections/wk_europe_nireland.js` | `WK_EUROPE_NIRELAND` | **none — 0 costPP** | n/a |

🩸 **PROVEN, NOT SUSPECTED.** On 4 Aug 2026 the mushroom re-price moved **6 versions in
`wk_europe.js`** and **1 in `wk_southafrica.js`**. Every one of them was stale and silent —
`costcheck.js` could not have reported a single one. They were found only because an
explicit lane override was driven by hand for that session.

⚖️ This is the exact shape §30.1 exists to close: **a stale `costPP` renders as a number and
looks correct.** Missing announces itself; wrong does not.

---

## 3 · THE RED LINES

- ⛔ **DO NOT** give `costcheck.js` a private copy of the pricing path. It loads
  `prices.js` + `packs.js` + `core.js` + `worldkitchen.js` + the section file into a vm and
  calls the app's OWN `wkParseIngredients` / `wkPriceLookup` / `applyVersionDelta` /
  `wkCostRecipeShape`. **That design law is the whole reason to trust it.**
- ⛔ **DO NOT** add `france` or `nireland` to the map. They carry **zero** `costPP`. A lane
  with nothing to score would report a green that measures nothing.
- ⛔ **DO NOT** mass-rewrite europe/southafrica `costPP` in the same commit as the widening.
  Widen first, LOOK at what it says, then re-price as its own named commit. ⚖️ Law 5.

---

## 4 · THE EXACT CHANGE

`costcheck.js`, the `COUNTRIES` map — add two entries:

```js
europe:      { varName: 'WK_EUROPE',      file: 'wk_europe.js' },
southafrica: { varName: 'WK_SOUTHAFRICA', file: 'wk_southafrica.js' }
```

⚠️ **EXPECT A LOUD FIRST RUN.** These lanes have never been scored. Two versions in
`wk_europe.js` (`greece-gyros` v3, `greece-youvetsi` v2) carry **no `costPP` field at all** and
will report as 🔴 / ⬜. That is a real finding, not a bug in the widening.

## 5 · THE PROOF

```bash
node costcheck.js europe
```

Tina must see a `COSTPP CHECK · wk_europe.js` header with a record and version count, and a
SUMMARY line. Then `node costcheck.js southafrica` likewise. ⚖️ **Law 42 — THE RATCHET:**
the walls got higher; two lanes that were invisible are now measured.
