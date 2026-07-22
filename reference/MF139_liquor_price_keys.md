# MF139 · DRINKS & LIQUOR PRICE KEYS  (expanded — supersedes the Ginjinha-only MF139)

**Owner:** Code (price maps are Code's — MF138). Fable never edits `PRICE_DB` / `PRICE_ALIAS`.
**Goal:** add every buy-name that is fencing (or about to fence) Portugal + Spain cards, in ONE deploy.
**Unblocks:** Ginjinha · Chorizo a la Sidra · Solomillo al Whisky.

---

## ADD THESE KEYS

| buy-name (key) | pack the price is for | value — SA entry-level (Tina, 22 Jul) | unblocks |
|---|---|---|---|
| **brandy** | 750 ml | **R180** (local everyday — Klipdrift / Richelieu tier) | Ginjinha · Sangría |
| **whisky** | 750 ml | **R250** (Bell's / Three Ships tier) | Solomillo al Whisky |
| **cider** (dry) | per ~330 ml bottle *(or per-litre — Code's call)* | **~R20/bottle** (Savanna Dry / Hunter's tier) | Chorizo a la Sidra |
| **morello cherries** (jar, in syrup) | ~410–680 g jar | **~R45–70** (Code confirms exact) | Ginjinha |

**Why entry-level:** costing is budget-honest — a splash of the cheap bottle is what a home cook
actually uses. `PRICE_DB` holds the bottle/pack price; the recipe's ml amount scales the cost.

**Notes for Code:**
- **brandy** does double duty — Ginjinha's aguardente stand-in AND Sangría. One key, both dishes.
- **cider** = *dry* cider (Spanish "sidra" is dry Asturian). Savanna Dry is the stand-in. Pick the
  unit (per-bottle or per-litre) to match however other soft-pack items are stored.
- **morello cherries** is the only non-liquor line — Ginjinha's cherry partner.
- No aguardente / no whiskey-spelling / no PX key needed — see below.

## ALREADY PRICED — do NOT re-add  *(proven by shipped, costed cards)*
- **white wine** — ingredient in Favas Guisadas, Bifana, …
- **red wine / vino tinto** — Chorizo al Vino Tinto shipped `costPP` R53.
- **beer / cerveja** — Bifinhos, Peixinhos, Chorizo a la Cerveza R42.
- **sherry** — Chorizo Al Pedro Ximénez shipped R58, so a sherry key exists.
  ⚠️ *Refinement, not a fence:* Rebujito wants dry **fino/manzanilla**; PX is sweet + dark. If a
  single "sherry" key covers both, Rebujito will cost slightly high. Flag for Tina — fix later.

## NOT NEEDED — do NOT add speculatively (no active recipe references them)
gin · vodka · rum · cognac · coffee liqueur · orange liqueur / triple sec.
*(Orange liqueur only if a premium Sangría fork is ever added — plain Sangría runs on brandy.)*

## ACCEPTANCE
1. `PRICE_DB` contains `brandy`, `whisky`, `cider`, `morello cherries`.
2. Ginjinha, Chorizo a la Sidra, and Solomillo al Whisky all resolve `costPP` with **no fence**.
3. `node tinza-doctor.js` unchanged (no new orphans).

## AFTER THIS LANDS (Fable, not Code)
- Strike the **Ginjinha** and **Chorizo a la Sidra** fences in `FABLE_PROGRESS.md`.
- **Solomillo al Whisky** authors un-fenced when Fable reaches it on the Spain ELEVATE list.
