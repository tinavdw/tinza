# MF138 · TWO MAPS, ONE QUESTION

**Written 21 Jul 2026 · RULINGS FIRST, CODE SECOND**
This is not a code brief. Nothing may be merged until the calls below are made. The merge is a separate, smaller job that only becomes possible once these answers exist.

---

## THE FINDING

There are **two alias maps** answering the same question differently:

| map | where | keys |
|---|---|---|
| `PRICE_ALIAS` | `core.js:901` | 349 |
| `WK_ALIAS` | `worldkitchen.js:444` | 198 |

**173 keys exist in both. Twelve of those disagree.** 176 exist only in `PRICE_ALIAS`; 25 only in `WK_ALIAS`.

An ingredient's cost therefore depends on **which room the recipe lives in**, not on what the ingredient is. ⚖️ Law 6 — build the ONE thing they call.

**How it surfaced.** MF137 repointed `pastry dough` and `broad beans` in `PRICE_ALIAS` and predicted the recipe costs would move. They did not. All four affected recipes are World Kitchen and read `WK_ALIAS`, which already held the correct values. **The brief's stated reason was wrong; the fix was still right** — `PRICE_ALIAS` was lying, and the next non-WK recipe to use `pastry dough` would have been costed against bought laminated puff.

---

## ⚖️ PROPOSED LAW · AN ALIAS IS A LIKE-FOR-LIKE SWAP

**An alias substitutes one product for another of the same kind. Where two things differ in KIND, an alias is not a substitution — it is a lie with a price attached.**

Differences in kind, from Tina, 21 Jul:

- **fresh vs dried** — grated coconut is fresh; desiccated is dried grated; flakes are sliced dried. Three products.
- **fresh vs tinned** — pilchards are usually tinned; sardines are sold fresh whole.
- **a herb vs a blend** — marjoram and origanum are similar but not the same; mixed herbs carries thyme, parsley, sometimes rosemary.
- **cut vs cut** — bacon may be neck, shoulder or back; neck is sold thick, bacon thin.
- **species vs species** — hake is a premium mild flaky ocean fish; basa is an affordable soft river catfish; carp is dense, bony, freshwater and much stronger.
- **role vs role** — white wine goes with chicken, fish and pasta; red with meat stews.

### ⚖️ COROLLARY · SUBSTITUTE BY ROLE, NEVER BY NAME

`vendace → hake` failed not because both aren't white fish but because the **dish** is a tiny whole fish floured and pan-fried and eaten bones-and-all. A hake fillet cannot do that job at any price. **Ask what the ingredient DOES in the dish, then find the SA product that does the same job.**

### ⚖️ COROLLARY 2 · MATCH THE WATER, NOT JUST THE TEXTURE — **RULED 21 Jul 2026**

**Tina:** *"Carp is a river fish — unless you catch your own one, rather buy tilapia, which is also a river/freshwater fish."*

The brief originally offered **hake** among the carp substitutes. Hake is an **ocean** fish. It matches carp on texture and fails it on character — river fish and sea fish do not taste the same, and a swap that changes the water changes the dish.

**For fish, a substitute must match, in this order:** ① **freshwater or sea** · ② **whole or fillet** · ③ texture · ④ price.

`tilapia whole` **R60/kg** satisfies all four for carp: freshwater, sold whole, firm, and a third of the price of basa. `basa` R160 is also freshwater — a river catfish — but sold as soft fillets, so it is the second choice, not the first.

---

## 🚨 THE WHITE-FISH FAMILY IS INCOHERENT INSIDE EACH MAP

Independent of the two-map problem. **Adding the word "fillets" flips the species:**

```
PRICE_ALIAS   white fish        → hake  R180
              firm white fish   → hake  R180
              white fish fillets→ basa  R160
              firm white fish fillets → basa  R160

WK_ALIAS      firm white fish   → hake  R180
              white fish fillets→ basa  R160
              firm white fish fillets → hake  R180
```

Nobody decided this. **25 aliases across the two maps point at hake or basa**, splitting on the presence of the word "fillet".

⚠️ `prices.js:186` warns that these aliases exist *specifically so the names don't cascade to null*. So the family cannot simply be deleted — see the null decision below.

**RULE THIS: one default SA white fish, and one price.** Every generic white-fish name resolves there. Named species that are genuinely different (carp) come out of the family entirely.

---

## THE TWELVE · TINA'S CALLS, 21 Jul 2026

### ✅ Ruled — one side was right

| key | resolves to | price | beaten option | gap |
|---|---|---|---|---|
| `sardines` | **fresh sardines** | R115 | pilchards R65 · tinned sardines R208 | both maps were wrong |
| `marjoram` | **origanum** | R688 | mixed herbs R1111 | 38% |
| `grated coconut` | **desiccated coconut** | R160 | coconut flakes R230 | 31% |
| `fries` | **potato** | R18 | slap chips R35 | 94% |
| `firm white fish fillets` · `mixed fish` | **hake** | R180 | basa R160 | 11% |
| `pastry dough` | **shortcrust pastry** | R82 | — | settled MF137 |
| `broad beans` | **dried fava beans** | R35 | — | settled MF137 |

*`fresh sardines` R115 already existed at `prices.js:567`, commented "kept separate from tinned R208". The key was made for exactly this distinction and both maps ignored it.*

### ⛔ NOT ALIASABLE — the key is too vague to carry one answer

| key | why | money at stake |
|---|---|---|
| `wine` | white for chicken/fish/pasta, red for meat stews | R45 vs R47 — small in Rand, **wrong bottle in the trolley** |
| `cured meats` | bacon may be neck, shoulder or back; neck thick, bacon thin | **R140 vs R250 — 79%** |
| `carp fish` | dense, bony, freshwater, earthy — a different dish, not a substitute | — |

**These three need the RECIPE to say which, not the map to guess.**

### ❓ `vendace` — RULED ABSENT FROM SA, NEEDS A ROLE SUBSTITUTE

*Coregonus albula* — freshwater, salmon family, under 15cm, delicate and mildly sweet, fine bones, **eaten whole**. Finnish *muikku*: tossed in rye flour, pan-fried in butter, eaten whole with mashed potato. **Tina: "Don't think I've ever seen it here in SA."**

Aliasing it to hake or basa fails the role test — the dish is a whole small fish, not a fillet.

**Candidates, for Tina to rule:**
- **whitebait** — the role match: tiny, whole, floured, fried, eaten bones-and-all. ⚠️ **NO PRICE KEY EXISTS.** Needs a shelf price.
- **fresh sardines** R115 — sold whole and fried whole in SA, but larger, oilier and stronger than vendace.

---

## ⚖️ RULED · NO SUBSTITUTE IS AN ANSWER, NOT AN ERROR — **21 Jul 2026**

**Tina's ruling:** *"When a product has no alias, we should say there are no substitute in SA but X comes closest to it."*

This replaces the binary the brief originally offered (cost as null / fail loudly). Neither was right.

- ❌ **Cost as null** — the line vanishes from the total and the recipe quietly under-costs. The silent-hole pattern. ⚖️ §20.
- ❌ **Fail loudly, full stop** — honest but useless. The cook is told the app cannot help and given nothing.
- ✅ **RULED: name the gap AND the nearest thing.** The card reads *"No SA substitute — X comes closest."* Loud, honest, and the cook leaves with something they can actually buy.

**What this means in code:**
1. The ingredient is **not silently aliased** to the nearest product. The alias map does not lie.
2. The card **displays** the note, carrying the nearest product by name.
3. The cost line is **honest about being incomplete** — it does not pretend the nearest product's price is this ingredient's price.
4. ⚖️ Law 3 — silent wrong is worse than loud missing, and loud missing plus a pointer is better than either.

**This is a display contract, not an error state.** It belongs in the recipe card next to the ingredient, in the same register as "How This Feels" — Tinza telling the truth in a useful voice.

**First three entries:**

| ingredient | note |
|---|---|
| `vendace` | No SA substitute — **whitebait** comes closest. Tiny whole fish, floured and pan-fried, eaten bones and all |
| `carp` | A river fish — unless you catch your own, rather buy **tilapia**, also a freshwater fish |

## NEW PRICE KEYS NEEDED

| key | price | provenance |
|---|---|---|
| `whitebait` | **R148/kg** | PnP Fishmonger 500g R59.99 = R120/kg · Checkers Cape Point 400g R60–70 = R150–175/kg. Confirmed shelf band R120–175, honest mid R148. Same method as snoek. (Tina, 21 Jul 2026) |
| `fresh grated coconut` | **R95/kg** | Whole nut R29.99 PnP / R40.99 Woolworths → mid R35.49 each. Yield 350–400g grated meat per nut → mid 375g. R35.49 ÷ 375g = **R94.64/kg**. Cross-check: 375g off a 1.75kg nut = 21.4%, inside the 17–25% meat band. (Tina, 21 Jul 2026) |
| `carp` | **no key — do not price** | Not sold in SA retail; river-caught. Uses the no-substitute note above. Named substitute `tilapia whole` **R60/kg ALREADY EXISTS** (`prices.js:234`, PnP 800g @ R50) — no new key needed |

### ⚖️ COCONUT YIELD — RULED 21 Jul 2026

⚖️ **§18 THE WHOLE FISH LAW applies to the nut.** Bought whole by the unit, used as grated meat. The ingredient line carries the **whole coconut**; the method states the grated yield.

| | |
|---|---|
| whole nut, medium | 1.5–2 kg |
| **grated white meat** | **350–400 g per nut · use 375 g** |
| meat as % of whole | 17–25% |
| **cost of grated meat** | **R95/kg** |

Band: a cheap nut at good yield gives R75/kg; a dear nut at low yield gives R117/kg. **Honest mid R95.**

### 🥥 THE THREE COCONUTS ARE THREE PRODUCTS

| product | R/kg | what it is |
|---|---|---|
| **fresh grated** | **95** | scraped from the nut · roughly half water |
| desiccated | 160 | dried, grated |
| coconut fine | 220 | dried, fine |
| flakes | 230 | dried, sliced |

### ⚖️ RULED · DRIED IS THE SAME FOOD MINUS THE WATER — **21 Jul 2026**

**Tina:** *"Desiccated coconut is dried — it's like biltong, which is much more expensive than raw meat because it loses about half its weight."*

**A dried product costs more per kg than its fresh form mostly because the water left.** It is not a different, dearer food; it is the same food concentrated. Therefore:

⛔ **NEVER swap fresh for dried 1:1 by weight.** Convert by the drying yield.

**COCONUT RATIO — RULED: fresh : dried = 2 : 1.**
100g fresh grated ⟷ **50g desiccated.**

**Measured across the file — water is the FLOOR of the gap, not all of it:**

| fresh | dried | multiplier | water alone predicts |
|---|---|---|---|
| beef R130 | biltong R450 | ×3.5 | ×2 — rest is spice, labour, shrinkage |
| apricots R36 | dried apricots R400 | ×11.1 | ×6–7 — rest is process and margin |
| fresh grated coconut R95 | desiccated R160 | **×1.7** | ×2 — **BELOW the floor** |

**Coconut is the exception and it matters.** 1kg of desiccated needs 2kg of fresh = **R190 of retail nuts**, but desiccated sells at **R160**. Commercial desiccated is made from bulk copra, not R35 supermarket coconuts. **The dried form is better value than doing it yourself.**

**Consequence for versions: the coconut swap is cost-NEUTRAL.**
100g fresh grated = **R9.50** · the 50g desiccated replacing it = **R8.00**.
So fresh-vs-dried coconut is a **flavour and texture** decision, never a budget one. Do not write a "budget" version that swaps fresh for dried — it saves R1.50.

⛔ **Do not alias fresh grated coconut to desiccated, or the reverse.** Differ in kind — the like-for-like law. A recipe saying "grated coconut" means fresh; one saying "desiccated" means dried; neither may silently become the other.

**Open, waiting on Tina:** the fresh↔dried conversion ratio, for recipes that offer the swap.

---

## THE MERGE — SECOND JOB, AFTER THE RULINGS

1. **One map.** `WK_ALIAS` folds into `PRICE_ALIAS`; World Kitchen reads the same door. ⚖️ Law 6.
2. World Kitchen inherits the **176 keys it currently cannot see**. Measure the cost movement across all 1021 WK recipes and report it — do not assume it is small.
3. `allRecipes()` must still read **2083** and every section non-empty. ⚖️ rung 26.
4. **New rung: no two alias maps define the same key differently** — the same AST walk as rung 27, pointed at two objects instead of one. This is what stops a third map appearing in September.

---

## OUT OF SCOPE

- ⛔ No merging before the rulings above exist.
- ⛔ No price sweep. New keys only where listed.
- ⛔ Do not delete the white-fish aliases until the null-vs-loud decision is made — they are currently load-bearing.
