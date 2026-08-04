# MF155 — `buffet.js` SITS OUTSIDE §30.1 costPP PARITY

> **Raised:** 4 Aug 2026, out of the mushrooms R140 re-price.
> **Status:** OPEN QUESTION — ⚖️ **this is a ruling for Tina before it is a code change.**

---

## 1 · STOP-CONDITION — READ FIRST, AND IT MAY END THE TASK

```bash
node costcheck.js buffet
```

**If that prints a `COSTPP CHECK · buffet.js` header instead of a usage error, THIS IS DONE.
SAY SO AND STOP.**

---

## 2 · WHAT WAS FOUND

The mushroom re-price moved three price keys to R140. `sections/buffet.js` carries a priced
mushroom line:

```
base12:{ mushrooms:'400g button mushrooms', tomatoes:'400g bab…
```

`button mushrooms` went **R148 → R140**. **That line's cost moved and nothing reported it.**

`buffet.js` also contains **5 `costPP` occurrences** — so it is not a file without costs.

---

## 3 · WHY NO WATCHER REACHES IT

⚖️ `costcheck.js` scores `costPP` by resolving a record through the app's own
`applyVersionDelta()` → `wkCostRecipeShape()` path. **That path needs the WK record shape.**

| | WK lanes (`wk_*.js`) | `buffet.js` |
|---|---|---|
| record shape | `ingredients` string, `versions:[…]` | **`base12:{…}` map, keyed by role** |
| `versions[]` | yes | ⛔ **zero occurrences** |
| reachable by `costcheck.js` | yes (5 lanes; 7 after MF153) | ⛔ **no — not by adding a COUNTRIES entry** |

🩸 **THIS IS NOT THE SAME GAP AS MF153.** MF153 is two WK-shaped files missing from a map — a
two-line fix. **`buffet.js` cannot be fixed that way at all.** A `COUNTRIES` entry pointed at it
would load a file whose records the engine cannot walk, and would report either a crash or a
green that measured nothing. ⚠️ **A green that measures nothing is worse than no rung.**

---

## 4 · THE OPEN QUESTION — ⚖️ TINA'S CALL, NOT A CODER'S

**Does `buffet.js` belong under a costPP watcher at all?**

Three honest answers, and they are genuinely different products:

1. **NO — buffet costs are a different thing.** `base12` is a *quantity for twelve people*, not
   a per-serving recipe. If its `costPP` never claims to be the §30.1 derived figure, it is out
   of scope and this MF closes as **WONTFIX** — but then **say so in `buffet.js` itself**, so the
   next session does not re-raise it. ⚖️ A documented exclusion is a decision; an undocumented
   one is a hole.
2. **YES — and it needs its own scorer** that walks `base12` and divides by 12. New code, new
   selftest, new born-RED proofs. ⚖️ **Law 42 — the ratchet.**
3. **YES, EVENTUALLY — buffet moves to the WK record shape.** The largest change and the only
   one that ends the split permanently. ⚖️ Rule Zero: *if two sections differ, that is a BUG to
   close, not a style choice.*

⛔ **DO NOT pick one of these in code and call it done.** The answer changes what gets built.

## 5 · THE RED LINES

- ⛔ **DO NOT** add `buffet` to `costcheck.js`'s `COUNTRIES` map. It will not work, and a
  half-loaded gate that still prints a SUMMARY is exactly what `costcheck.js` refuses to be.
- ⛔ **DO NOT** hand-edit the 5 `costPP` values to "match". Nothing has established what they
  should be — that is the whole point of this MF.
- ⛔ **DO NOT** reshape `buffet.js` records as a side-effect of some other task. ⚖️ Law 5.

## 6 · THE PROOF

Whichever route is ruled: **simulate the bug and watch it go red before believing the rung.**
Change the `button mushrooms` price by R50 in a scratch copy and confirm the new watcher moves.
⚖️ A rung nobody has seen fire is a rung nobody should trust.
