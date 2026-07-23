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

**Session 3 (23 Jul) — §2.C events.js**
- `events.js:798` finger-food My Plan total (`~R…total · R…/pp`, gold) → `costLine({html:…})`,
  matching the line-113 precedent (the sibling "Estimated total cost" row already routed).
  String byte-identical for Pro; Free now gets the inline lock. **Live leak** — Events room has
  NO gate at `core.js:606` (`S.screen==="events"` → `eventsHTML()`), so Free reached it.
- `events.js:883` portionBadge `${g}g pp` → **CLASSIFIED QUANTITY (grams pp). LEFT UNTOUCHED.**
  Gating a gram is a bug (§3). This is the "portion badge may be grams" the brief flagged — it is.
- `events.js:886/902/909` → money badges guarded by `isPlus`. **DISCOVERY, filed below — not touched.**
- Census 25 raw-money list: events 798 cleared. ⚠️ 886/902 still hold raw `~R`/`≈R` strings but are
  DEAD (see below); a static check-25 will flag them until the isPlus decision lands.

### 🩸 THE TWO LIVE LEAKS ARE NOW CLOSED (budget room + braai Rand). §2.C closed a third (events finger-plan total).
Everything left on Census 25 ③ is either behind a gate already or pure sameness-refactor.

### 🟠 BLOCKED DECISION 3 — `isPlus` is a dead tier (needs Tina's ruling, §2.3)
`events.js:88  const isPlus = tierAllows('plus');` — but `TIER_LEVEL = {free:0, pro:1, deluxe:2}`
has **no `'plus'` key**, so `tierAllows('plus')` = `tierLevel() >= undefined` = **always false**.
Three `eventCard` branches ride on it and therefore render to NOBODY (not even Pro/Deluxe):
- `886` the `~R${r.costPP}/pp` portion badge
- `902` the `≈R…/piece` finger cost text
- `909` the `costPP:` passed to `warmCard`

So event cards show **no cost badge to anyone**. This is the inverse of a leak — a dark paid
feature, not an open one — which is why it is NOT an MF132 auto-fix. The clean fix (`isPlus`→
`tierAllows('pro')`, or route the money through `costLine` and delete the guard) would make cost
badges **appear for Pro where they've shown to no one** — a rendered-number change → §3 "STOP,
Tina rules." `isPlus` lives ONLY in events.js (4 refs), blast radius contained.
**Tina to rule:** (a) was `'plus'` meant to be `'pro'` and these badges should return for paid users?
or (b) were event-card cost badges intentionally dropped, and 886/902/909 should be deleted?
Either answer clears the two raw strings off census-25. Until then, left exactly as found.

---

## ⬜ NEXT UP

- **✅ RESOLVED 23 Jul — Decision 1: went with (B).** Census 25 ③ now carries a written §2.4 EXEMPTION
  (keyed by stable needle) for the 5 budget own-budget-echo sites. Reported dim, not hidden. Red 16 → 11.
- **✅ RESOLVED 23 Jul — Decision 2: My Plan is Pro app-wide.** Filed as `TINZA_RULINGS.md` §2.7. This is
  a NEW JOB (the My-Plan *surface* gate), NOT part of MF132. Needs its own brief + its own watcher assertion.
  §2.B braai money-lock STANDS beneath it (defence-in-depth).

- **✅ DONE 23 Jul — §2.C · events.js.** 798 routed through costLine (live leak closed). 883 classified
  QUANTITY (grams pp), left. 886/902/909 → BLOCKED DECISION 3 above (dead `isPlus` tier, Tina to rule).
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
4. Events → Finger Foods → build a plan → "Estimated total cost" row is LOCKED, no Rand; guest/piece counts still show.  ⬅️ session 3
5. Flip to Pro on localhost → every number returns; braai totals match to the rand; meat cap 2 Free / 99 Pro; finger-plan total shows `~R… · R…/pp` unchanged.
