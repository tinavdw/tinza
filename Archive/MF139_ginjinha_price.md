# MF139 · GINJINHA PRICE KEYS

**Owner:** Code (price maps are Code's — MF138). Fable never edits `PRICE_DB` / `PRICE_ALIAS`.
**Goal:** add the two missing buy-names so Ginjinha stops being fenced and `costPP` resolves.
**Unblocks:** the `[⛔] Ginjinha` fence in `reference/FABLE_PROGRESS.md` (Portugal → 50th versioned).

---

## THE FENCE

Ginjinha is a Portuguese sour-cherry liqueur: cherries + spirit + sugar + cinnamon, steeped.
It is fenced because **two ingredients are absent from `PRICE_DB`** — the spirit and the cherries.
Everything else it needs (sugar, cinnamon) is already priced.

## ADD EXACTLY TWO KEYS

Match the existing `PRICE_DB` format and naming convention (buy-name = what you put in the
trolley, no retailer/brand names — TINZA INGREDIENT STANDARD).

| buy-name (key) | pack the price is for | ballpark (Code confirms exact) | note |
|---|---|---|---|
| **brandy** | 750 ml bottle | ~R120–R160 | generic SA brandy. See spirit note below. |
| **morello cherries** | jar/tin in syrup, ~410–680 g | ~R45–R70 | fresh ginja is unavailable in SA — this is the real buy-name. |

The ballparks are sanity rails only. **The authoritative rand figure is Code's**, sourced the
same way as every other `PRICE_DB` entry — do not treat my numbers as the price.

## SPIRIT NOTE — ONE KEY, NOT TWO

Authentic Ginjinha uses **aguardente** (grape firewater). The SA buy-name substitute is plain
**brandy**, so only one spirit key is needed. The Fable card will:
- put **brandy** on the ingredient line (matches `PRICE_DB`),
- name **aguardente** in the method as the traditional spirit.
Do **not** add a separate "aguardente" key.

## DO NOT RE-ADD (already priced — just confirm the exact key strings on your side)

- **sugar**
- **cinnamon** (Spice Room — confirm whether the live key is `cinnamon stick` or `ground cinnamon`; Ginjinha wants a stick, but either resolves cost).

## ACCEPTANCE

1. `PRICE_DB` contains `brandy` and `morello cherries`.
2. A Ginjinha card's `costPP` resolves with **no fence** (no unpriced-ingredient flag).
3. `node tinza-doctor.js` unchanged (no new orphans introduced).

## AFTER THIS LANDS (Fable, not Code)

- Strike the `[⛔] Ginjinha` line in `FABLE_PROGRESS.md` and move it into Portugal's queue as
  the 50th versioned dish.
- Classic (brandy + morello, cinnamon, steeped) is the base. A budget/alcohol-free fork
  (ginja **cordial** — same cherries + sugar, no spirit) is a Fable call at authoring time,
  only if it earns a version under §15.2.

---

*Tiny brief — can ride along with MF138 (the alias-12 costing) in one Code session if you'd
rather not spend a separate deploy on two keys.*
