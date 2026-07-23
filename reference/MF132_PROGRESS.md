# MF132 · ONE COST BLOCK — PROGRESS CHECKPOINT

**This file is the handoff. A chat does not survive a cut-off. This does.**
Spec = `reference/MF132_ONE_COST_BLOCK.md`. Start every session at `NEXT UP`, never re-derive `DONE`.
Week 2 of the 3-week sprint. Week 1 (Stop the Money) closed Tue 21 Jul.

---

## ✅ DONE — Session 1 (23 Jul)

**§2.A · THE BUDGET LEAK — CLOSED.** The room was a cost tool end-to-end with no entry gate;
Free saw the filtered recipe list (all filter, no badge half — ruled §2.4). Now:
- `core.js:598` — room gated: `tierAllows('pro') ? budgetPlannerHTML() : budgetLockPanel()`. One door (Law 6).
- `budget.js` — `budgetLockPanel()` + `_budgetHonestCount()` added. Free sees an HONEST count
  ("R100 feeds 4 people from N real recipes…"), N sourced from the SAME query the paid list uses
  (`_budgetPool` + `_budgetDupKey` + `_budgetComp`). No new price string — inherits `lockPanel()`.
- `budget.js:~189` — recipe cost row now routes through `costLine({html:…})` (gate-safe sameness).
- ⛔ `budgetPeople` / `budgetPlan` state NOT cleared (§5 red line — gating ≠ clearing). Upgrade later = intact.

**§2.A.5 · THE `?` GLYPH — KILLED IN ALL THREE ROOMS.** Empty time is unknown, not a glyph (Law 45).
- `budget.js` (recipe row) · `kiddies.js:320` · `meals.js:15951` — `${r.time||'?'} min` → number or `—`.
- Cost `R${costPP||'?'}` → nothing when unpriced (no more "R? pp", Law 3).

**§2.H · maxMeats — NO LONGER FAILS OPEN.** `core.js:758` was `USER_TIER==="free"?2:99` (anything not the
exact string "free" → 99: `undefined`→99, `"Free"`→99). Now `tierAllows('pro') ? 99 : 2` — inherits the
fail-closed door. It's a GATE, not arithmetic; `calcMeat`/`PORTION_BRAAI`/`braaiBaseG` UNTOUCHED.

**§2.G · localhost label — HONEST.** `core.js:~575` dev strip now reads "· localhost" on localhost/127.0.0.1
(where the off-switch cannot fire) and "· tap to turn off" everywhere else. One ternary. `tinzaIsDev()` untouched.

**Files changed:** `sections/core.js` · `sections/budget.js` · `sections/kiddies.js` · `sections/meals.js`
**`node --check`:** 4/4 GREEN.
**Push (Law 5 — several commits, ONE push):** core.js (gate + maxMeats + localhost) · budget.js (lock + count + row) · kiddies.js + meals.js (glyph).

### ⚠️ DECISION LOGGED (own it, don't let it look like an omission)
§2.A.4 said "replace the six raw `R${}` in budget.js with `costLine()`." Only **one** of the six is a
recipe cost (the costPP row — done). The other five (114 per-person echo · 118 the R40–R500 budget-picker
BUTTONS · 130/131 loading text · 156 tight-budget prose) are the **user's own budget figure**, not recipe
money — routing budget-picker buttons through `costLine()` is semantically wrong. They now sit behind the
room gate (Free never sees them), so they are no longer leaks. **Left as-is by decision, not by miss.**

---

## ⬜ NEXT UP — in brief order

- **§4 · CENSUS CHECK 25 — THE WATCHER (do this next; the brief says MF132 must leave it behind).**
  Add to `tinza-census.js`: (1) every cost-bearing room branch in core.js is behind `tierAllows('pro')`
  or returns `lockPanel()` — ungate Budget → RED; (2) no money string built outside `costLine()`/`costOneLine()`
  — restore one raw `R${}` → RED; (3) `costLine()` has exactly one definition; (4) no quantity gated —
  gate a `spiceFmt` gram → RED. **Prove each by re-introducing the bug once.** A check never seen to fail isn't a watcher.
- **§2.B · braai.js `braaiStep4`** — 4 sites (≈279, 309, 313, 327), ungated. Route cook-total + buy-total
  through `costLine()`. Green/gold split survives. ⛔ arithmetic (`calcMeat`/`PORTION_BRAAI`) NOT yours to touch.
- **§2.C · events.js:886 `eventCard`** — 1 site (`portionBadge`). CLASSIFY FIRST: if grams, leave it, say so.
- **§2.D · spice.js — the seven** (8147 8152 8169 8187 8196 8203 8303). **§1 FIRST: classify each as MONEY or
  QUANTITY by hand and report a verdict before changing any.** Gating a gram is as much a bug as leaking a Rand.
- **§2.E · the already-gated ten** (core `fmtG` ×2, events `fmtAmt`, health ×3, meals ×4) — fold into `costLine()`
  as PURE refactor. If a fold changes a rendered number → STOP, a number was wrong before, Tina rules.
- **§2.F · bright hex** (`meals.js:16047 #c8e840`, `16051 #a0c030`) — auto-resolves once those render through
  `costLine()` (inherits `var(--green)`). Prose `#f5c842` is not money — leave it.

## 🧪 ACCEPTANCE — Tina's fingers on live (§5), dev OFF, tier Free, nothing after the URL
1. Home → Budget → "I've Got R100" → **no Rand anywhere**, honest lock panel instead. ⬅️ this session
2. Any recipe card → time shows a number or nothing, **never `?`**. ⬅️ this session
3. Flip to Pro on localhost → Budget list returns, unchanged; meat count still caps 2 Free / 99 Pro. ⬅️ this session
4. (later) Braai step 4 → no cook/buy total on Free · Spice grams still scale on Free.
