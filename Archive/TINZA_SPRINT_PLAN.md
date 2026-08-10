# TINZA · 5-WEEK PLAN TO LAUNCH-READY + SEPTEMBER SHELL MONTH

**Drafted 26 Jul 2026.** Supersedes the 23 Jul 3-week draft (kept below nothing — this IS the file).
Target: **OCTOBER LAUNCH.** 5 build weeks (27 Jul – 30 Aug) close bugs + sameness + content;
September = the shell (payments · onboarding · planner) + acceptance + buffer.
Source of truth for bugs = `TINZA_FIX_QUEUE.md` · content = `FABLE_PROGRESS.md` · money = `MF132_PROGRESS.md`.
Nothing here is locked — Tina reprioritises freely; census rungs prove "done", not the calendar.

**THREE LANES RUN IN PARALLEL — different hands:**
- 🅰️ **APP LANE** (Claude briefs → Code implements + builds audits → Tina pushes/verifies live)
- 🅵 **CONTENT LANE** (Fable, usage-gated, save-as-you-go)
- 📸 **ASSET LANE** (Tina — photos, live verification, runs continuously)

Golden rules unchanged: one section/job per commit · `node --check` before push · present-as-you-go ·
a silent hole gets a census rung, not sharper eyes · Law 2: only Tina's fingers on live close a bug.

---

## ✅ ALREADY BANKED (so nobody re-plans it)
- Money lane MF132 §2.A–D · dev/tier gate MF133 shipped+watched · library watcher (2,083) · dup-key rung
- Events sameness step ① (eventsTopNav deleted, doors fixed) · WK 5-key drill reset · door-vs-origin ruling
- Photo Studio REGENERATED (26 Jul) · repo tidy (26 Jul)
- Fable: SPAIN CLOSED (59) · SA S1+S2+S3 dessert icons + Dhal banked

---

## WEEK 1 (27 Jul – 2 Aug) · NAVIGATION SETTLED + MONEY CLOSED + QUICK WINS

🅰️ **Session 1 — THE TOP-BACK BUILD** (Events sameness ②, the ruled two-levels-up rule):
- Top Back = exactly TWO levels up · bottom = ONE, uniformly, every room. Rooms need to know their parent.
- Same session or next: rule the FMF dead-tap (§2.3 — drop the 2 keys from navSignature OR move to consume-path)
  + the LATERAL ruling (a pill/tab REPLACES history, never pushes — one ruling, all rooms)
  + delete events.js:1092 double guestBar + the 4 dead navSignature keys + the 14 anonymous "← Back" labels (step ④).
  **END STATE: navigation is DONE app-wide and rung-watched.**

🅰️ **Session 2 — CLOSE MF132** (§2.E fold + §2.F + Census 25 money watcher). Money lane DONE.

🅰️ **Session 3 — launch-embarrassing quick wins** (one batch): 💸 R50→R90 sweep (braai/budget/core/eventsData) ·
🔍 biscuits→dog-food search bleed · 🔤 WK mojibake (~231 names, Node script) · 🤖 hide the switched-off Chef pitch.

🅰️ **Session 4 — Just Feed Me (ruled 26 Jul):** restore the "more ideas" button for LIBRARY pages only *(does not touch MF78 or the 503)* + §21.1 the `_MOOD_MEALSLOT` gate on `healthy` *(one line; five moods already have it — chips is a SIDE)*.

🅰️ **Session 5 — MF147 behaviour rungs** *(4 assertions, pure functions in Node, no browser)*.

🅰️ **AFTER the top-Back build lands + Tina verifies live — MF148 PLAYWRIGHT** *(~10 navigation-invariant specs, Chromium only, Code builds it — Claude's sandbox cannot reach the Playwright CDN)*. ⛔ Never assert colour/label/layout — the sameness sweep would break them daily.

🅵 **Fable (post-reset):** S2 overflow tail — Skaapboud · Karoo Chops · Prawn Curry · Homemade Boerewors.
📸 **Tina:** verify each push on live · photo queue.

---

## WEEK 2 (3 – 9 Aug) · SAMENESS AUDIT + THE DIET FILTER + EVENTS FINISHED

🅰️ **Sameness audit FIRST, all four lenses** (colour/type/boxes/placement) — script lists every violation
by file:line + per-section presence-map of recipe blocks. Freeze floors as census rungs (colour floor = 1,249).
**Do NOT start fixing before the watcher exists.**

🅰️ **DIET FILTER correctness** (it's a census RED and a trust-breaker): 118 vegan invisible to the vegetarian
filter · 21 meat recipes answer veg searches · 4-of-5 queries disagree. Shelves are queries — fix the query.

🅰️ **Events step ③** — collapse buffet's 7 headers. Events room = the gold pattern, deurmekaar no more.

🅵 **Fable:** §2.5 held merges prep (cape malay chicken curry · tamatie bredie · waterblommetjie ×2 ·
shepherd's pie · bunny chow · braaibroodjies — canonical=meals, then WOW).
📸 **Tina:** side-by-side checks vs events.

---

## WEEK 3 (10 – 16 Aug) · THE TWO BESPOKE REBUILDS — TINY TUMMIES + FURRY (Tina's redesign)

🅰️ **tinyTummies** — the giant (805 lines · 527 hex · zero shared renderers). REDESIGN + migrate onto
`warmCard`/`sectionHeader`/`qtyBox`/`recipePage` in one move ("that section doesn't make sense" — banked
intent: rework the concept, don't just re-skin). Its own session(s); if it slips it eats the week — planned for.
🅰️ **furry** — same rebuild pattern, small (70 lines). Includes the search-bleed guard (furry never answers
human searches). 🎂 Celebration Cakes + 📏 portion standard reach these sections as part of the rebuild.

🅵 **Fable:** HEALTH WOW pass begins — Health is live content with `howItFeels` ×60; unify field to
`howThisFeels` (app-wide, tolerate-both reader) then WOW the weakest Health cards (Shelf-WOW: replace, never disguise).
📸 **Tina:** rules the Tiny Tummies concept before Code touches it (§2.3 — ask, never infer).

---

## WEEK 4 (17 – 23 Aug) · DRIFT BURN-DOWN + COSTING CORRECTNESS

🅰️ **Strip the migrated-but-drifted sections:** spice (167) · meals (166) · budget (50, + gets sectionHeader) ·
braai (34) · worldkitchen (23) · core LAST. Census rungs ratchet each one down.
🅰️ **Costing correctness batch:** Spanish unpriced ingredients (prices.js + BOTH alias maps) ·
13 hand-rolled money strings → costLine() · 21× hardcoded price · silent duplicate price keys ·
🔥 Braai un-bins its own cost (Law 49) and derives diet/time — the "4 rooms have no cost" RED starts falling.
🅰️ **sharedWith string→array migration** (Node, 1,021 records, its own session + shape rung — the
"India"/"Indian" landmine).

🅵 **Fable:** WK gaps — India (Butter Chicken, lamb/goat) · then North America/Oceania seeds · events feel-copy.
📸 **Tina:** live acceptance per section as drift strips land.

---

## WEEK 5 (24 – 30 Aug) · CONTENT COMPLETE + "HOW THIS FEELS" EVERYWHERE + GLOBAL BRAAI

🅰️ **"How This Feels" on every card** — field unified (W3), Fable copy landing, sweep via warmCard meta.
🅰️ **Remaining UX bugs:** shareList() 21 WhatsApp copies → one fn · openSectionSearch(scope) MF95 ·
supermarket-ready shopping (eggs/loaves count-aware) · whole-unit bakes dial · goesWith = real pairing ·
Anchor matches ingredients · "to taste" sweep · WK delta costing (MF135 landed by now) · bar planner
(dead lemons data · tinzaStore migration) or PARK bar planner to post-launch — Tina's call.
🅰️ **62%→ratchet:** cost/diet/time coverage climbs; 532 invisible-to-R100 falls with it.

🅵 **Fable:** GLOBAL BRAAI recipes (new content lane) + finish events feel-copy + Ginjinha on Tina's word.
📸 **Tina:** photo regen for renamed dishes · full live pass.

**END OF WEEK 5:** census all-green or floored · every section on shared renderers · navigation uniform ·
diet filter honest · all rooms costed · Health/Tiny/Furry re-born · content lanes closed enough to launch.

---

## SEPTEMBER (1 – 30 Sep) · THE SHELL — what launch actually needs
1. 💰 **PayFast payments + tier assignment** (the gate exists; wire the money in) + My Plan surface gate §2.7.
2. 🚪 **Onboarding** (progressive disclosure, max 2–3 optional screens).
3. 👤 **Profile page toggles** (leftovers · stretch · budget tiers · nutrition · storage · dark/light).
4. 📅 **Weekly Planner** · 🍳 **My Kitchen** · 🧾 **My Menu** (cross-room plan) — scope ruthlessly; anything
   can slip to v1.1 EXCEPT payments + onboarding.
5. 🔎 **Global Search** (solo session, after content — as ruled).
6. ✅ Walk `TINZA_LAUNCH_CHECKLIST.md` top to bottom · full acceptance on live · LAUNCH WINDOW: October.

## PARKED (post-launch unless pulled): star ratings · Community · Checkers 60/60 · wine pairing ·
master recipe library · Surprise Me · bar planner (if parked W5) · `TINZA_IDEAS_BACKLOG.md`.

## HONEST RISKS
- **tinyTummies redesign is the biggest unknown** — concept + rebuild together. Tina rules the concept first.
- **Fable is usage-gated** — content lane may lag; fine, it's independent. Health WOW is the one content
  item with an app-lane dependency (the field unify).
- **September is tight if Weekly Planner/My Menu balloon** — payments + onboarding are the only true
  launch-blockers in the shell; everything else can ship in v1.1.
- Weeks are a frame, not a contract. The census is the truth.
