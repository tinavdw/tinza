# MF132 · ONE COST BLOCK — PROGRESS CHECKPOINT

**This file is the handoff. A chat does not survive a cut-off. This does.**
Spec = `reference/MF132_ONE_COST_BLOCK.md`. Start every session at `NEXT UP`, never re-derive `DONE`.
Week 2 of the 3-week sprint. Week 1 (Stop the Money) closed Tue 21 Jul.

**Watcher = Census Check 25** (`tinza-census.js`). It already exists (6 assertions). Run
`node tinza-census.js` and read rung 25 — it is the authoritative "are we there yet."

---

## ✅ DONE

**Session 1 (23 Jul) — §2.A Budget + §2.G + §2.H**
- `core.js:598` Budget room gated (`tierAllows('pro') ? budgetPlannerHTML() : budgetLockPanel()`).
- `budget.js` `budgetLockPanel()` + `_budgetHonestCount()` — honest N from the SAME query.
- `budget.js` recipe cost row → `costLine()`; `?`-glyph killed in budget/kiddies/meals (Law 45).
- `core.js:758` maxMeats fail-OPEN → fail-closed. `core.js:~575` localhost label honest.
- Census 25: room-gate ✅ · honest-count ✅ · one-door ✅ · no-hand-USER_TIER ✅ · no-gated-quantity ✅.

**Session 2 (23 Jul) — §2.B Braai**
- `braai.js` 4 money sites routed through `costLine({html:…})`: per-item shop price, food-cost total
  (green), shop-spend total (gold), loose-buy tip cost. Amounts/plan stay free; only Rand locks.
- ⛔ arithmetic untouched — `calcMeat`/`PORTION_BRAAI`/`braaiBaseG` not touched. Green/gold split intact.
- Census 25 raw-money list: 20 → 16 (all 4 braai sites cleared).

### 🩸 THE TWO LIVE LEAKS ARE NOW CLOSED (budget room + braai Rand).
Everything left on Census 25 ③ is either behind a gate already or pure sameness-refactor.

---

## ⬜ NEXT UP

- **✅ RESOLVED 23 Jul — Decision 1: went with (B).** Census 25 ③ now carries a written §2.4 EXEMPTION
  (keyed by stable needle) for the 5 budget own-budget-echo sites. Reported dim, not hidden. Red 16 → 11.
- **✅ RESOLVED 23 Jul — Decision 2: My Plan is Pro app-wide.** Filed as `TINZA_RULINGS.md` §2.7. This is
  a NEW JOB (the My-Plan *surface* gate), NOT part of MF132. Needs its own brief + its own watcher assertion.
  §2.B braai money-lock STANDS beneath it (defence-in-depth).

- **§2.C · events.js** — 798 (`~R${Math.round…}` gold, money → costLine) · 886 `portionBadge`
  (CLASSIFY: grams or money? if grams, leave it, say so).
- **§2.D · spice.js — the seven** (8147 8152 8169 8187 8196 8203 8303). §1 FIRST: classify each MONEY
  vs QUANTITY by hand, report a verdict before changing any. Gating a gram is a bug.
- **§2.E · the already-gated hand-rolled sites** (health ×3 @ 826/830/1332, meals ×4, core `fmtG`,
  events `fmtAmt`) — fold into `costLine()` as PURE refactor. If a fold changes a number → STOP, Tina rules.
- **core.js:4548/4552** — classify the surface, route if money. · **§2.F** bright hex auto-clears via costLine.

## 🆕 SEPARATE JOBS SPAWNED (not MF132)
- **MY PLAN SURFACE GATE** (from §2.7) — gate every plan/shopping surface app-wide + a Census 25 sibling assertion.
- **PHOTO STUDIO · SPAIN/PORTUGAL** — Fable renamed WK Europe dishes; photos fall to emoji until reconnected.
  Logged in `reference/TINZA_PHOTO_REGEN_QUEUE.md`. NOT URGENT. Claude generates the table on request.

## 🧪 ACCEPTANCE — Tina's fingers on live (§5), dev OFF, tier Free, nothing after the URL
1. ✅ Budget → "I've Got R100" → no Rand, honest lock panel.  ⬅️ session 1
2. ✅ Any card → time is a number or `—`, never `?`.  ⬅️ session 1
3. ✅ Braai → build to the plan → NO food-cost/shop-spend totals, per-item prices locked; amounts still show.  ⬅️ session 2
4. Flip to Pro on localhost → every number returns; braai totals match to the rand; meat cap 2 Free / 99 Pro.
