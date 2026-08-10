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

### ✅ RESOLVED 23 Jul — DECISION 3: Tina ruled (a). Price shows for Pro on event cards.
`isPlus = tierAllows('plus')` was a dead tier (`'plus'` ∉ `TIER_LEVEL {free,pro,deluxe}` → always
false), so event-card cost badges rendered to NOBODY, Pro included. **Tina ruled: Pro should see the
`R…pp` badge on each card.** Fix shipped in events.js:
- `909` `costPP:` — dropped the `isPlus` guard → `(!_isFinger && r.costPP) ? r.costPP : ''`.
- `901` `_costText` — dropped the `isPlus` guard → `(_isFinger && _perPiece>0) ? '≈R…/piece' : ''`.
- The gate now lives where it belongs: **`warmCard` → `costLine({html})`** (`tierAllows('pro')`) —
  Pro sees the price, Free sees the lock. This also restores SAMENESS: event cards were the ONLY
  cards in the app hiding their cost chip entirely; now they match every other section.
- ⚠️ NOT touched: `events.js:88` `isPlus` def + the `886` `~R…/pp` badge still reference it, but that
  whole `portionBadge` block (874–887) is **orphaned** — computed, never passed to `warmCard`, renders
  nowhere. Minor follow-on (below), not a leak.

**🔧 Follow-on RESOLVED 23 Jul — event cards show "How This Feels" (was: portion).** First wired the
per-person portion into `meta` buffet-style; Tina then ruled the card line is for **How This Feels**
app-wide (gram pp already shows on the recipe page). Events `meta` now reads `howThisFeels || howItFeels`,
falling back to region → portion until feel-copy is authored, so no card goes blank. The old bespoke
`portionBadge` chip (874–887, never rendered) AND the dead `isPlus` tier def (line 88) were removed —
events.js has zero `isPlus`/`portionBadge` code. TWO blockers to "How This Feels everywhere" filed in
FIX_QUEUE: (1) field-name split `howThisFeels` vs Health's `howItFeels` — unify; (2) events has no
feel-copy yet — Fable authoring job. ⚖️ Restored sameness: events now matches WK/Spice (feel in meta).

---

## ⬜ NEXT UP

- **✅ RESOLVED 23 Jul — Decision 1: went with (B).** Census 25 ③ now carries a written §2.4 EXEMPTION
  (keyed by stable needle) for the 5 budget own-budget-echo sites. Reported dim, not hidden. Red 16 → 11.
- **✅ RESOLVED 23 Jul — Decision 2: My Plan is Pro app-wide.** Filed as `TINZA_RULINGS.md` §2.7. This is
  a NEW JOB (the My-Plan *surface* gate), NOT part of MF132. Needs its own brief + its own watcher assertion.
  §2.B braai money-lock STANDS beneath it (defence-in-depth).

- **✅ DONE 23 Jul — §2.C · events.js.** 798 routed through costLine (live leak closed). 883 classified
  QUANTITY (grams pp), left. 886/902/909 → isPlus dead-tier RESOLVED 23 Jul (Tina ruled (a), price shows for Pro — fix shipped).
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
5. Events → any tab → each event card shows a LOCKED cost chip on Free (not a blank card); flip to Pro → each card shows its `R…pp` / `≈R…/piece` price.  ⬅️ session 3 (isPlus fix)
6. Flip to Pro on localhost → every number returns; braai totals match to the rand; meat cap 2 Free / 99 Pro; finger-plan total shows `~R… · R…/pp` unchanged.
