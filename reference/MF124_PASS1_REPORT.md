# MF124 — PASS 1 · DIAGNOSIS ONLY

**Measured 21 Jul 2026 against commit `4a2cc27`.** ⚖️ Law 22.
**No file was edited. No fix was applied, partial or otherwise.**
Read alongside `TINZA_FACET_ARCHITECTURE.md` §5 and Laws 54 / 54a / 54b / 56.

---

## STEP 1 — THE ANCHOR CASE

`switzerland-birchermuesli` · authored ingredients:
`50g oats · 100ml milk · 100g apple · 10g honey · 20g yogurt · 10g almonds`
No `costPP` in the data. **No versions.** The number is computed at runtime.

| authored | qty | unit | resolves to | R/unit | sold as | rand |
|---|---|---|---|---|---|---|
| oats | 50 | g | `oats` | 50 | weight | R2.50 |
| milk | 100 | ml | `milk` | 20 | weight | R2.00 |
| **apple** | **100** | **g** | **`apple`** | **5** | **count** | **R500.00** |
| honey | 10 | g | `honey` | 160 | weight | R1.60 |
| yogurt | 20 | g | `yogurt` | 45 | weight | R0.90 |
| almonds | 10 | g | `almonds` | 330 | weight | R3.30 |

**R500.00 + R2.50 + R2.00 + R1.60 + R0.90 + R3.30 = R510.30 → rounds to R510.** Exact match to the reported figure.

### The error is ONE ingredient, and it is not spread

**`apple`.** Every other line is correct to the cent. Priced through the *shared* resolver the same six ingredients total **R13.63**, which is consistent with Health Hub's `oa_bircher` at R18.

`apple` is priced **per count** (R5 each). The amount is authored **in grams** (100g). `wkCostRecipe` (`worldkitchen.js:497`) does:

```js
if (pr.per === 'count') c = Math.ceil(q) * pr.price;   // ceil(100) × R5 = R500
```

It reads the **gram number as a count of apples** — 100 apples instead of two-thirds of one. The shared `costRecipe` (`core.js:1260`) does *not* do this; it divides by `AVG_WEIGHT_G['apple']` (150g) first, giving R3.33.

**This is not a ×1000 scale error and not a divisor fault.** `yield`/`serves` is irrelevant here — the multiplier `n` is 1 and applied correctly. It is a per-count/per-weight unit collision in a **duplicate costing engine**.

The brief's own second example confirms the same single cause: `austria-apfelstrudel` R616 = `ceil(120) × R5` = **R600** of apple, plus R16 of everything else.

---

## STEP 2 — CLASSIFICATION

World Kitchen pool: **1021 records**, of which **933** pass the coverage gate and display a price.

### (a) scale/unit fault — **45 records**

Price unit and amount unit disagree, and the engine does not reconcile them. Split by materiality:

**30 materially wrong** (inflation ≥ R5):

| shown | correct | record | offending ingredient |
|---|---|---|---|
| R1286 | R36 | `norway-spekemat` | 100g flatbread → `flatbread` @R12.50/each |
| R674 | R49 | `turkey-kebap-adana` | 50g flatbread |
| R647 | R22 | `turkey-tantuni` | 50g flatbread |
| R616 | R20 | `austria-apfelstrudel` | 120g apple |
| R566 | R69 | `poland-kaczka-pieczona` | 100g apple |
| R524 | R27 | `netherlands-appeltaart` | 100g apple |
| R510 | R13 | `switzerland-birchermuesli` | 100g apple |
| R476 | R88 | `boerekos-gemsbok-stuffed-fillet` | 30g avocado |
| R378 | R6 | `sri-lanka-banana-fritters` | 150g banana |
| R377 | R54 | `denmark-stjerneskud` | 100g rye bread; 20g lemon |
| R368 | R21 | `denmark-smorrebrod` | 100g rye bread; 50g egg |
| R311 | R67 | `finland-graavilohi-sandwich` | 100g rye bread; 10g lemon |
| R297 | R17 | `portugal-bifana` | 80g bread roll |
| R220 | R8 | `senegal-ndambe` | 60g bread roll; 2g chilli |
| R166 | R1 | `russia-kvass` | 100g rye bread |
| R164 | R85 | `georgia-kalmakhi` | 10g lemon |
| R161 | R12 | `spain-sangria` | 30g apple |
| R97 | R18 | `spain-rebujito` | 10g lemon |
| R95 | R22 | `switzerland-schaumkuss` | 20g egg white |
| R88 | R9 | `spain-tinto-de-verano` | 10g lemon |
| R51 | R32 | `greece-soutzoukakia` | 20g white bread |
| R39 | R34 | `nigeria-okra-soup` | 5g chilli |
| R35 | R25 | `cape-malay-bobotie` | 10g white bread |
| R34 | R24 | `cape-malay-frikkadels` | 10g white bread |
| R32 | R27 | `senegal-yassa-ganaar` | 5g chilli |
| R25 | R20 | `senegal-fataya` | 5g chilli |
| R20 | R15 | `senegal-pastels` | 5g chilli |
| R15 | R10 | `kenya-kachumbari` | 5g chilli |
| R11 | R6 | `senegal-accara` | 5g chilli |
| R11 | R8 | `indian-chilli-bites` | 3g green chilli |

**15 structurally identical but immaterial** — all the bay-leaf class, 1–2g against R0.15/each, so the error is ≈R0.30:
`portugal-polvo-a-lagareiro` · `portugal-caldeirada` · `portugal-carne-de-porco-a-alentejana` · `portugal-ensopado-de-borrego` · `portugal-arroz-de-pato` · `portugal-rojoes-a-minhota` · `portugal-bife-a-portuguesa` · `portugal-sopa-de-cacao` · `portugal-feijoada` · `portugal-bitoque` · `portugal-espetada-madeirense` · `portugal-iscas-com-elas` · `portugal-sopa-de-pedra` · `poland-bigos` · `nigeria-jollof-rice`

⚠️ **I could not reproduce exactly 21.** The structural condition yields **45**; the materially-wrong subset is **30**. The brief's 21 was presumably a threshold-selected list. Reporting the measured number, not the expected one.

### (b) version artifact — **18 records, and none of them are on the (a) list**

WK records whose `versions[]` override `ingredients`. Measured base-vs-version cost:

| record | base | version | delta |
|---|---|---|---|
| `greece-saganaki` | R14 | "Shrimp (Garides)" R92 | **R78** |
| `greece-kreatopita` | R48 | "Kefalonian (Three-Meat)" R71 | **R23** |
| `greece-bougatsa` | R24 | "Cheese (Tyri)" R38 | **R14** |
| `greece-galaktoboureko` | R30 | "Individual Rolls" R30 | — |
| `greece-spetsofai` | R35 | "Classic" R35 | — |
| `greece-fasolada` | R15 | "Classic" R15 | — |

**`wkBrowseCard` calls `wkCostState(r, …)` with the RECORD, never a version-resolved record — so it always renders the BASE cost.** Under Law 56 these numbers are *correctly computed and wrongly attributed*. Not arithmetic. **Not to be "fixed" as a scale bug.**

### (c) neither — **4 records** over R150 with no (a) and no (b)

| record | shown | what it actually is |
|---|---|---|
| `india-jalebi` | R217 | **Implausible authored amount.** 2g saffron @ R100 000/kg = R200. The arithmetic is right; saffron really is ~R100/g. A pinch is ~0.1g. This is a **content** defect, not a costing one. |
| `switzerland-fondue` | R198 | **Correct.** 120g Gruyère @R971/kg = R117 + 120g Emmental @R600/kg = R72. Fondue is genuinely this expensive. |
| `switzerland-saucisson-vaudois` | R163 | **Correct.** 250g @R650/kg imported Swiss sausage. |
| `switzerland-papet-vaudois` | R157 | **Correct.** 200g of the same sausage @R650/kg. |

---

## STEP 3 — THE STRUCTURAL CONDITIONS

Three, not one. Named as properties of the data and the code, never as a threshold.

### Condition A1 — *an engine with no count→weight bridge at all*

> **An ingredient resolves to a PER-COUNT price while its amount is authored as a WEIGHT (g/kg/ml/l), and the costing function multiplies the raw quantity by the unit price — `Math.ceil(qty) × price` — with no conversion through an average unit weight.**

Present in **two** functions:
- `wkCostRecipe` — `sections/worldkitchen.js:497` ← **all 45 live errors come from here**
- `mealsCostPP` — `sections/core.js:3944` ← same defect, currently latent (see Step 4)

### Condition A2 — *a bridge that exists but has no entry to use*

> **The shared `costRecipe` DOES convert via `AVG_WEIGHT_G[key]` — but only when that key exists. When it does not, it falls through to the identical `Math.ceil(q) × pr.price` branch (`core.js:1265`).**

**`AVG_WEIGHT_G` holds 28 entries. `PRICE_DB` holds 49 count-priced keys. 37 of them have no average weight.**
Missing includes: `bread roll`, `pita bread`, `bay leaf`, `bay leaves`, `bread slice`, `unsliced white loaf`, `baguette`, `roti`, `wafer shell`, `granadilla`.

**This matters for the fix design:** repairing `wkCostRecipe` alone would leave every unbridged key wrong in the "good" engine too. A1 and A2 must be closed together or the bug survives the fix. ⚖️ Law 53.

### Condition B — *base-computed cost on a version-overridden record*

> **A record carries `versions[]` that override `ingredients`, while the displayed cost is computed from the BASE ingredient list.** ⚖️ Law 56 — cost belongs to the version.

Separate condition, separate fix, separate count. Do not merge with A.

---

## STEP 4 — APP-WIDE SWEEP

**Two different questions, and they must not be conflated:**
1. Does the **data** carry the condition? (a count-priced ingredient authored by weight)
2. Does that section's **engine** get it wrong?

A section can be full of condition-(a) data and still be correct, because its `costPP` is a static authored number and nothing recomputes.

### Engine map

| engine | location | bridge? | drives |
|---|---|---|---|
| `wkCostRecipe` | `worldkitchen.js:488` | **none** | World Kitchen card · detail · finder |
| `mealsCostPP` | `core.js:3935` | **none** | version-delta cost nudge only |
| `costRecipe` | `core.js:1252` | **partial** (A2) | Braai sides · Spice make-your-own |
| `proteinCostPP` | `core.js:1287` | n/a — weight-only, count branch unreachable | Braai meats |
| *(none)* | — | — | authored static `costPP` |

### Per-section counts

| section | records | costPP | cond (a) **in data** | cond (b) | **live money wrong?** |
|---|---|---|---|---|---|
| **world** | 1021 | 933 computed | **57** | **18** | **YES — 45 (30 material)** |
| health | 158 | 158 authored | 34 | 0 | No — nothing recomputes |
| meals | 257 | 257 authored | 30 | 101 | No — see delta note below |
| bakes | 101 | 101 authored | 2 | 93 | No |
| tiny | 18 | 0 | 3 | 0 | No — no cost surface |
| furry | 62 | 0 | 1 | 0 | No — no cost surface |
| sides | 9 | 9 authored | 0 | 9 | No |
| events | 100 | 78 authored | 0 | 0 | No |
| floor | 9 | 9 authored | 0 | 0 | No |
| braai | 92 | computed | 0 | 0 | No |
| beverages | 66 | 0 | 0 | 0 | No |
| **spice** | 190 | 6 | **71** (in `makeYourOwn`) | 0 | Immaterial — see below |

**Notes on the zeros — ⚖️ Law 54b.**

- **braai — 0 is "none found", not "couldn't look."** Meats price through `proteinCostPP`, which is weight-only; its count branch is unreachable. Sides: 44 items inspected via `shopping[]`, **0** carry the condition.
- **spice — inspected, not skipped.** All 190 records carry `makeYourOwn.ingredients`; **71** hold the condition (mostly `garlic cloves` and `green chilli`). They cost through `costRecipe`, which *does* have `AVG_WEIGHT_G` entries for both (5g, 15g) — so those are correct. `garam-masala`'s `1g bay leaves` hits **A2** and is wrong by R0.15. Structurally live, financially immaterial.
- **beverages — 0 records carry any `costPP`.** No cost surface exists to be wrong.
- **meals delta path — measured, not assumed.** Only **1 record** has cost-bearing delta versions (2 versions). In **0** of them does the delta change a count-priced ingredient, so the `mealsCostPP` error cancels between base and version. **Latent, not live.** It will bite the first time a delta swaps one.
- **Finger Foods — inspected: 56 records, 55 authored `costPP`, 0 carry the condition.**
- ⚠️ **Kiddies — COULD NOT LOOK.** `MASTER_SNACKS` (12) and `KIDS_THEMES` (12) store amounts as **prose inside `base12`** (`{chicken: "800g chicken breast"}`), not as `{qty, unit}` pairs. The condition is **not machine-checkable there without a parser that does not exist.** This is a genuine blind spot, reported as such rather than as a zero.
- ⚠️ **`spice` shows "0 ingredients" through `allRecipes`** — its data lives in `makeYourOwn`, so an index-only sweep would have reported a false 0 for all 190. Inspected directly instead.
- ⚠️ **13 records carry no ingredients at all** (11 meals, 2 sides, 2 furry) and cannot be inspected either way.

### One more finding, unasked for and not acted on

**`priceOf` and `wkPriceLookup` are two separate resolvers** (⚖️ Law 6). They agree on all 9 probed names except one: `chicken breast` → `priceOf` resolves `chicken breasts` @R90, `wkPriceLookup` resolves `chicken` @R90. Same price today, different keys — so they can silently diverge the moment either price changes.

---

## STEP 5 — SCOPE CALL

**Yes — materially larger than 21, but not in the way the number suggests.**

- **Live wrong numbers on screen: 45 records, of which 30 are materially wrong.** Same order as 21, roughly 1.5×. Confined entirely to World Kitchen.
- **But the structural exposure is much wider than the fix implied by "21 recipes":**
  - **Two** engines carry condition A1, not one.
  - Condition **A2 affects the shared engine as well** — 37 of 49 count-priced keys have no average weight. Fixing `wkCostRecipe` without filling `AVG_WEIGHT_G` moves the bug rather than closing it.
  - Condition **B is a separate class of 18 records** that must not be touched by an arithmetic fix at all.
  - **71 spice records + 34 health + 30 meals** carry condition-(a) data that is inert *today* only because nothing recomputes their cost. Any future move to computed costing detonates all of it.

**Recommendation for the fix pass — stated, not acted on:** the unit of work is not "21 recipes." It is **one shared count→weight reconciliation** used by every engine, plus the `AVG_WEIGHT_G` gap, plus a **separate** Law 56 decision on version-level cost. Condition B should not travel in the same commit as A.

**Nothing was fixed. Nothing was tagged. No file outside this report was touched.**
