# MF174 — KEY `pork hock`, AND CLOSE A §8f FALLTHROUGH WHILE YOU ARE THERE

**Tina-sourced 6 Aug 2026. One commit. Two files, one write.**

---

## 1 · STOP-CONDITION — READ FIRST, AND THIS STEP MAY END THE TASK

```
grep -n '"pork hock"' sections/prices.js
node priceledger.js --ask "pork hock"
```

⛔ **If `prices.js` already contains `"pork hock": 99` AND the ledger answers 📒 IN THE LEDGER — SAY SO AND STOP.** This brief is already applied. Do not write it twice.

---

## 2 · THE RED LINES

- ⛔ **Do not touch any other key in `prices.js`.** One commit, one thing. ⚖️ Law 5.
- ⛔ **Do not touch `japan-nukazuke` costPP** — §31.3c, excluded from all sweeps.
- ⛔ **Do not re-derive any costPP off the back of this.** It was measured: **no record in any lane writes `pork shank` in a priced ingredient line.** Nothing moves. If you think something moved, measure it with `git stash` before and after — do not reason about it.
- ⛔ **Do not alias `pork hock` to `trotters` or to `pork bones`.** The pre-existing alias `"pork trotters":"pork bones"` in `core.js` stays exactly as it is. Different cut, different price, not this brief.
- ⚠️ `wk_europe_germany.js` carries the string `pork hock` — check whether it is a priced ingredient line or an alias/type entry **before** assuming this changes its cost. It is almost certainly not a priced line.

---

## 3 · THE EXACT CHANGE

### 3a · `sections/prices.js`

**FIND** the single line:

```js
  "pork shank": 80,
```

**REPLACE** it with:

```js
  // ⚖️ TINA 6 AUG 2026 — "pork hocks (shanks)", supermarket band R49.99–R99.00/kg.
  //    MOST-EXPENSIVE PER §31.1 → R99. Spread 1.98x, UNDER the §3l wide-band threshold
  //    (kingklip's 2.65x was §3l territory; this is not), so the standing rule applies clean.
  //    ⛔ `pork hock` was ABSENT and would have fallen through to `pork` R110 — a §8f
  //       substring fallthrough that no watcher fires on. Keying it closes that hole.
  //    ⚖️ `pork shank` moved R80 → R99 in the SAME write: hock and shank are one cut, and
  //       two prices for one cut is exactly the MF137 drift. Measured first — NO record in
  //       any lane writes `pork shank` in an ingredient line, so zero costPP moves.
  //    ✅ Her named substitutes, all already keyed: beef shin R120 · pork whole neck R110
  //       · trotters R130 (note: alias `pork trotters` → `pork bones` R45 is pre-existing).
  "pork hock": 99,
  "pork hocks": 99,
  "pork shanks": 99,
  "pork shank": 99,
```

### 3b · `reference/PRICE_LEDGER.json` — THE SAME WRITE, NOT A SECOND COMMIT

⚖️ **A PRICE IS NOT RECEIVED UNTIL IT IS IN THE LEDGER.** Writing to `prices.js` alone means a container reset destroys the evidence and leaves a bare number, and the next session reads a bare number as an estimate and asks her again. Three re-asks on `rice vinegar` are the cost of learning this late.

Append to the `entries` array, then re-sort the array by `key`:

```json
{
  "key": "pork hock",
  "value": 99,
  "date": "6 Aug 2026",
  "grandfathered": false,
  "evidence": "TINA-SOURCED 6 Aug 2026: pork hocks (shanks), SA supermarket band R49.99-R99.00/kg (Checkers/Shoprite/Pick n Pay R49.99-R79.99; butchery to R99). RULE APPLIED: most expensive per 31.1. Spread 1.98x, under the 3l wide-band threshold. Aliases pork hocks/pork shank/pork shanks keyed to the same number in the same write; pork shank moved 80->99, measured as used by ZERO records. Her named substitutes: beef shin, pork neck, pork trotters.",
  "pricesLine": null
}
```

---

## 4 · THE PROOF — WHAT TINA TAPS, AND WHAT SHE MUST SEE

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

```
node --check sections/prices.js          → must pass (⚠️ proves it PARSES, nothing else · Law 1)
node priceledger.js --ask "pork hock"    → must print 📒 IN THE LEDGER · pork hock = 99 · 6 Aug 2026
node priceledger.js --ask "pork shank"   → must print the same number, 99
node tinza-doctor.js                     → RED count HAS NOT GROWN · Law 51
node tinza-all.js vietnam                → 0 red · 0 drift
```

Then **HARD RELOAD on live** after the Netlify deploy. ⚖️ Law 27 — published ≠ what her browser runs.

---

## 5 · ⚖️ WHAT THIS BRIEF IS EVIDENCE FOR — §8f IS NOW AT FIFTEEN

`pork hock` is the **fifteenth** documented substring fallthrough: a compound name resolving to a shorter, cheaper key by substring and billing at its price, never ABSENT, so coverage never drops and no watcher fires.

⚖️ **FIFTEEN IS A PATTERN, NOT BAD LUCK.** Every single one was caught by a human reading a resolution table, which means the ones nobody has looked at are still live and still wrong.

⛔ **DO NOT BUILD THE WATCHER IN THIS BRIEF, OR MID-LANE.** The rung, when it is built: assert the resolved key IS the written name after alias, and print every case where a LONGER written name resolved to a SHORTER key. That is its own session.
