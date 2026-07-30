# 📋 PASTE-IN BLOCK · `bunched spinach` KEYED — 30 Jul 2026

Goes into `reference/ASIA_PROGRESS.md` under the push entry, and the §-block below into
`TINZA_RULINGS.md` if you want it as a formal ruling rather than a note.

---

## ✅ DONE — Option 1, zero drift

| file | change |
|---|---|
| `sections/prices.js` line 538 | **`"bunched spinach": 60`** added. `spinach` 93 and `baby spinach` 216 **untouched** |
| `sections/wk_indonesia.js` | Plecing ingredient line `150g spinach` → **`150g bunched spinach`**. costPP **R23·R32·R36 → R18·R27·R31** |
| `reference/PRICE_LEDGER.json` | dated entry added, `grandfathered: false` |
| `reference/ASIA_LEDGER.json` | re-baselined **25 · `3ffa97c953b60192`** |

**THE ARITHMETIC, TRACEABLE:** your band — R15–R25 per 300–350g bunch, which you gave as
**R45–R70/kg**. Median **R57.50**. §31 rounds up → **R60**. That derivation is written both in the
`prices.js` comment and in the ledger evidence field, so the next reader can check it without
asking you again.

**PROVEN, NOT ASSUMED:**
- `spinach` still 93 · `baby spinach` still 216 · `bunched spinach` 60
- **0 records in any other country use the new key** — nothing outside Plecing moved
- The 10 hand-set costPP identified as at-risk (4 Japan, 3 Europe, 3 Indonesia) — **only the 3
  Indonesian ones changed.** Japan stays closed. Europe untouched.
- All three Plecing versions re-costed against the engine: set = engine, coverage 1.00, budget still
  leads at R18

**GATES AFTER THE EDIT:** `node --check` ✅ both files · `merge-selftest` 48/48 ·
`priceledger --check` **100/100** ✅ · `pricecheck` exact 62 · wrong-product 0 · absent 0 ·
`wowcheck` whole file ✅ · all 25 records re-validated through merge's 40 assertions.

⚠️ `ASIA_LEDGER.lastBatch` reads `revalidate.js`. That was a deliberate empty batch
(`module.exports = []`) used to push all 25 existing records back through the 40 assertions after an
in-place edit and to re-baseline the hash. It was deleted straight after. Nothing is missing.

---

## ✅ THE BUNCH WEIGHT — KEYED INTO `PACK_DB`, NOT `AVG_WEIGHT_G`

**Your number: an average bunch is 250–340g. It went into `sections/packs.js`:**

```js
"bunched spinach": { size: 250 },
```

⚖️ **WHY NOT `AVG_WEIGHT_G`.** That table is the count→weight bridge and Census 22 asserts it is
complete *for every `<name>_each` key*. `bunched spinach` is priced per kg, not per count, so an
entry there would be data in a table that does not describe it — and it would sit outside the set
Census 22 measures. `PACK_DB` is the right home: its own header says `{ size: N }` is "one standard
pack", and the one rule is **round the recipe's need UP to the next real pack.** A bunch *is* the
pack.

⚖️ **WHY 250 AND NOT THE MEDIAN.** `size` is a *guaranteed-content* assumption. Assume 340g and a
shopper who comes home with a small bunch is **short in the kitchen**, which is the failure that
actually hurts — the same instinct as §31 rounding a price up. Cross-check that made me confident:
**250g × R60/kg = R15**, exactly the cheap end of your own R15–R25 per bunch. The two numbers you
gave are internally consistent at R60.

⛔ **NOT `loosable`.** That flag offers a "buy loose instead" tip. There is no loose route for a
bunch — you cannot buy two thirds of one.

**MEASURED LIVE, through the real shopping-list path (`buildPlanData` → `priceOf` → the `{size}`
branch):**

| need | bunches | cook (green) | buy (gold) |
|---|---|---|---|
| 150g | 1 | R9 | **R15** |
| 300g | 2 | R18 | **R30** |
| 600g | 3 | R36 | **R45** |

Before this, 600g of bunched spinach told you to buy R36 of a thing sold in bunches. Now it says
three bunches.

⚠️ **NO STORED NUMBER MOVED.** Pack rounding touches `buy` only; `costPP` is `Math.round(c.cook)`.
Plecing stays R18 · R27 · R31.

---

## 🔴 I HAVE TO WITHDRAW A NUMBER I GAVE YOU IN THIS SESSION

While checking that the pack entry actually fired, I found that `wkPriceLookup` does not attach the
`pack` field that `priceOf` does, and I measured that as **"698 of 1124 World Kitchen records
understate shop-spend, mean R93 a card."**

**That number is wrong and I am striking it.** Two things I had not checked when I produced it:

1. **The largest results were absurd** — `boerekos-braai-cabbage` at R407 for a cabbage side. That
   is not an understatement, it is what pack rounding *means* at `servings:1`: buying a whole 2kg
   bag of flour for one person. I was measuring an artefact of my own probe.
2. **Nothing renders that value.** Gold shop-spend comes from the shopping list, which goes through
   `buildPlanData` → **`priceOf`** — the resolver that *does* carry the pack. There is exactly one
   call site using `wkPriceLookup` (`wkCostRecipeShape`, worldkitchen.js:594) and it reads
   **`.cook` only**. The dropped pack is never displayed anywhere.

**So the true finding is much smaller: a LATENT asymmetry, not a live bug.** `wkPriceLookup` cannot
see any of `PACK_DB`'s 116 entries, which is the "one resolver is still owed" note already written
in core.js's own comments. It costs nothing today and it is a trap for whoever next reads `.buy`
off that path. Worth a line in the notes; **not worth a fix, and definitely not worth the fix I was
about to propose.**

⚖️ This is the 30 Jul lesson firing on me a second time: *reasoning about a price table is not
pricing a line.* I described it once before measuring where it rendered. Caught before it reached
a file.

---

## ⚖️ §-BLOCK — THE MIS-DEFAULTED RUNG (new, needs your yes to become a ruling)

The ladder currently reads **missing < duplicate < wrong < wrong-and-signed**. Spinach did not fit
any of them, and the gap is worth writing down because it will recur:

> **MIS-DEFAULTED.** A key whose number is *correct for the product it names* but which is the
> route nobody in the recipe took. `spinach` R93 derives honestly from a R37/400g cleaned prepack.
> It is not wrong. But it was the only spinach route in the table, so every cooked-greens recipe in
> the app — morogo, imifino, saag, horta, efo riro, ohitashi, plecing — priced as though the cook
> had bought washed salad leaves.
>
> It renders a plausible number for a route nobody took, so **behaviourally it sits with WRONG, not
> with MISSING, and A7 does not defer it.** The fix is not to correct the number — it is to add the
> missing route and point the cards at it.
>
> **THE APPLE PRECEDENT APPLIES** (`apple` R6 count vs `apples` R27/kg weight, Tina-ruled): two real
> store routes are two keys, not a bug. Spinach is three — bunch R60, cleaned prepack R93, baby
> punnet R216 — and all three are real.

---

## 🩸 TWO THINGS THIS TURNED UP, BOTH STILL OPEN

**1. `baby spinach` R216 is outside your own band.** Its comment says R27/125g. Your sourced retail
band today was R90–R140/kg. R216 is well over it, and it sits on ~10 `meals.js` ingredient lines.
Of the three spinach numbers this is the one most likely to be stale. **Not touched — no guessing a
price.** It needs one sourced figure from you and then it is a five-minute fix.

**2. `spain-espinacas-con-garbanzos` has two costPP already adrift from the engine**, nothing to do
with spinach and pre-existing:

| version | set | engine |
|---|---|---|
| Potaje (Budget · The Thick Home Pot) | **R26** | **R35** |
| A la Catalana (Con Pasas y Piñones) | R54 | R55 |

The budget fork reading **R9 under** the engine is the shape that quietly breaks budget-leads — it
looks like the cheapest fork because the number says so, not because the ingredients do. Europe is
outside the Asia lane so I have left it alone; say the word and it goes on the P2 sweep list with
the China work.

---

## ⛔ NEW LANDMINE FOR THE PRICE NOTES

**The qualifier must LEAD.** `bunched spinach` resolves exactly. **`spinach bunch` falls straight
through to `spinach` R93** — the longest-key-anywhere-in-the-name rung catches it and prices the
prepack. Same shape as `pickled ginger (beni shoga)` vs `pickled red ginger`.
