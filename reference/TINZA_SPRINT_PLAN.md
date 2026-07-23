# TINZA · 3-WEEK PLAN TO LAUNCH-READY (bugs + sameness)

**Drafted 23 Jul 2026.** Supersedes the loose "Week 1 Stop-the-Money / Week 2 One-Cost-Block" framing.
Target: October launch. This is a DRAFT for Tina to reprioritise — nothing here is locked.
Source of truth for bugs = `TINZA_FIX_QUEUE.md`; content = `FABLE_PROGRESS.md`; money = `MF132_PROGRESS.md`.

**THREE LANES RUN IN PARALLEL — they don't compete, different hands do them:**
- 🅰️ **APP LANE** (Claude briefs → Code implements **and helps build/run the audits** → Tina pushes/verifies live). Gates, sameness, bugs.
- 🅵 **CONTENT LANE** (Fable, post-reset, save-as-you-go). Recipe authoring + feel-copy.
- 📸 **ASSET LANE** (Tina). Photos, live verification. Runs continuously.

Golden rules unchanged: one section/job per commit · `node --check` before push · present-as-you-go ·
sameness is TOP PRIORITY · a silent hole gets a census rung, not sharper eyes.

---

---

## ▶ OPENING SEQUENCE — LOCKED 23 Jul (Tina). START HERE, in this order:
1. **MF132 §2.E + Census 25** — fold the already-gated cost sites into `costLine`, build the money watcher.
   **This CLOSES the money lane. Then MF132 is DONE.** (One focused session; pure refactor — a fold that
   changes a rendered number means Tina rules, not Code.)
2. **SAMENESS** — the top priority. Build the audit + census rungs first (freeze the floor, Code helps),
   THEN the burn-down (bespoke migrations tinyTummies/furry → shared renderers; then strip the drifted sections).
3. **R50 → R90 sweep** — the price the app still wrongly advertises. *(Small/quick — pull it forward anytime
   the live wrong price bothers you; otherwise it runs here.)*

*(The other quick-wins — biscuits→dogfood search, mojibake, chef-off pitch — slot around these as gaps allow.)*

---

## WEEK 1 · CLOSE THE MONEY + STOP THE EMBARRASSING + BUILD THE SAMENESS WATCHER

🅰️ **Finish MF132 (money is nearly done):**
- §2.E — fold the already-gated hand-rolled cost sites (health ×3, meals ×4, core `fmtG`, events `fmtAmt`)
  into `costLine()` as pure refactor. If a fold changes a number → STOP, Tina rules.
- §2.F — bright cost hex clears itself once those route through `costLine`.
- Build **Census Check 25** (the money watcher) — 4 assertions, each proven RED by re-introducing the bug.

🅰️ **Launch-embarrassing quick wins (visible, cheap, do them now):**
- 💸 **R50 → R90 price sweep** — the app STILL advertises R50; the price was ruled R90 on 28 Jun. Sweep every string.
- 🔍 **"biscuits" search returns dog biscuits** — human vs furry search bleed.
- 🔤 **Mojibake in World Kitchen names** (~231 double-encoded UTF-8) — "no funny letters."
- 🤖 **Chef is switched OFF but the app still sells him** — hide/adjust the pitch until he's on.

🅰️ **Build the SAMENESS AUDIT + census rungs (the measurement + the watcher) — do NOT start fixing yet.
Code helps build/run the audit tooling here:**
- Audit script listing every hardcoded hex / font / size / radius by `file:line` (exclude token block + gradients),
  plus a per-section presence-map of the recipe blocks (How This Feels · trivia · tip · storage · goesWith · nutrition).
- Freeze today's numbers as the FLOOR (colour = 1,249). One census rung per lens; floor not gate.

🅵 **Fable (if usage allows post-reset):** events feel-copy OR start Belgium (cull Kriek Beer, dedupe, WOW ~20).
📸 **Tina:** photos; verify each Week-1 push on live (Law 2).

---

## WEEK 2 · SAMENESS BURN-DOWN — the bespoke rebuilds + the worst drift

🅰️ **The two BESPOKE sections (zero shared renderers — break all four sameness lenses):**
- **tinyTummies** → migrate onto `warmCard`/`sectionHeader`/`qtyBox`/`recipePage`. Its own session (the giant, 527 hex).
- **furry** → migrate onto the shared renderers. Smaller, same rebuild pattern.
  *Colour, font, box AND element-placement all fall into line for free — like events dropping to 6.*

🅰️ **The worst MIGRATED-but-drifted sections (strip leftover overrides):**
- **spice** (167) · **meals** (166) — hex→token, font/size→shared class, box→shared geometry.

🅰️ **Costing correctness (Code lane, slots between migrations):**
- 🇪🇸 Spanish unpriced ingredients (prices.js + BOTH alias maps).
- 🥫 Tins nominal-vs-drained · 🔑 silent duplicate price keys (dedupe, later-wins is a bug).

🅵 **Fable:** Belgium lane, incrementally.
📸 **Tina:** verify each migrated section side-by-side against events (the gold pattern).

---

## WEEK 3 · FINISH SAMENESS + REMAINING BUGS + LAUNCH-BLOCKERS

🅰️ **Finish the sameness burn-down:**
- budget (50) · braai (34) · worldkitchen (23) override-strips · **core LAST** (it holds the real tokens).
- Census rungs all at/under floor → sameness is now mechanically held.

🅰️ **Remaining correctness + UX bugs:**
- 🥚 Supermarket-ready shopping sweep (eggs/bread → count/loaves, ONE shared count-aware formatter, all shop builders).
- 🎂 Whole-unit bakes dial (step by whole units, not an arbitrary headcount).
- 🔗 `goesWith` = real pairing not similarity · 🍗 Anchor Ingredient matches ingredients not the whole record.
- 🔥 Braai derives cost/diet/allergen/time/nutrition (Law 49 — bakes is the template, un-bin Braai's cost).
- 🧂 "to taste" appended to measured lines — sweep · 🌍 WK delta costing (blocked behind MF135 landing).

🅰️ **Launch-blockers:**
- 💰 **My Plan surface gate (§2.7)** — gate every plan/shopping surface app-wide + its census sibling.
- 📍 "How This Feels" on every card — needs the field-name unify (`howItFeels`→`howThisFeels`) + Fable copy.

🅵 **Fable:** finish Belgium + events feel-copy → cards light up.
📸 **Tina + 📸 ASSET:** photo regen for Spain/Portugal renamed dishes; full live acceptance pass.

**END STATE:** census all-green (money · dev/tier · sameness ×4) · no live price/gate leaks · every section on
the shared renderers · `TINZA_LAUNCH_CHECKLIST.md` walked. That's launch-ready.

---

## PARKED / BACKLOG (not in the 3 weeks unless pulled forward)
- Ginjinha (Fable, Tina's call) · Photo Studio regen from live data · master recipe library ·
  wine pairing / Checkers 60/60 partnership (see `TINZA_IDEAS_BACKLOG.md`).

## HONEST RISK NOTES
- **tinyTummies migration is the single biggest unknown** — 805 hand-rolled lines. If it slips, it eats Week 2.
- **Fable is usage-gated** — the content lane may run slower than the app lane; that's fine, they're independent.
- Weeks are a frame, not a contract. Reprioritise freely; the census rungs are what actually prove "done."
