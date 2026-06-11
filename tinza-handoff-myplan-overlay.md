# Tinza — Session Handoff (My Plan overlay + sameness)

**Where to resume:** the My Plan white-overlay rollout is done for Braai + World Kitchen. Next chat = roll the same pattern across the remaining sections, then the wider backlog.

---

## Done & live (pushed)
- **World Kitchen header photo** — `world-map.jpg` filename fix (`worldkitchen.js:1441`).
- **Braai browse views** — photo header via shared `sectionHeader()`, protein pills wrap (no scroll), 542 KB base64 → single `BRAAI_HDR_IMG` const.
- **White My Plan overlay** added to shared `sectionHeader()` (top-right inside photo, white pill, includes `_savedScroll=0` scroll-to-top reset). Sections that don't pass `myPlan` are unaffected.
- **`braaiQuickNav`** dropped its My Plan box → 5 categories in one row (`repeat(5,1fr)`).
- **Plan-open scroll fix (core.js)** — all Braai plan-entry paths now reset `_savedScroll=0` so the plan opens at the top: recipe-page Plan button (1935), `braaiNavGo('myplan')` (1957), full-width plan button (1995). (Recipes already auto-top via `openedRecipe` in `draw()`.)
- **World Kitchen My Plan** — moved into the white overlay (`sectionHeader` `myPlan` param), green below-photo pill removed. **Pushed.**

## Done — needs push
- **Braai landing (step 1)** — gold My Plan box removed from the grid (now 5 descriptive boxes); white My Plan overlay injected into step 1's hand-rolled header (with scroll reset). File: `braai.js`. **Validated, push pending.**

---

## Next: My Plan overlay rollout — remaining sections
For each section that uses `sectionHeader()`: pass `myPlan:{ count:<plan count>, onclick:"<go to that section's plan>" }` and remove any old below-photo / in-grid My Plan pill or box. Sections to sweep: **Health Hub, Events (Buffet/Cakes/Beverages), Tiny Tummies, Furry Friends, Budget, Mood, Finger Foods** — whichever currently show a separate My Plan control. Pattern is identical to the Braai/World edits above.

Note: the **Braai landing keeps a 3-per-row descriptive grid** (5 boxes = 3+2) on purpose — its boxes have sub-text. The compact 5-across row is the browse views (`braaiQuickNav`). Only flatten the landing if Tina asks.

---

## Braai feature parity still queued
- **`≈ R__ pp` row hook** — Braai has NO cost function (only `calcMeat` grams + `MEAT_CALS`). Needs a Braai cost-per-person function before showing a real number. Don't fake it.
- **Header search input** — World filters its list; Braai has no filter logic, so a header search box would be dead. Needs filtering first.
- **`braai.jpg` in repo** — drop a header image into `Images/Headers/braai.jpg`, point `BRAAI_HDR_IMG` at it, and **delete the 542 KB base64 blob** (big file shrink).
- **Rows** — optional: switch Braai's "Recipe →" button to World's chevron tap-row style.

## Wider backlog (unchanged)
- Global sans font flip in `index.html`.
- SAMENESS LOCK: photo header every section same size; no horizontal-scroll categories; ONE universal search above bottom nav.
- Shared `qtyBox()` in core.js.
- Spice Emporium shelves: Chutneys & Atchars, Sambals & Relishes, Jams & Preserves.
- Beverage Bar Planner (cocktails block); Finger Foods standalone split.
- Kiddies todos (icing butter/milk sweep; 400ml/kid cooldrink; etc.).
- Budget + Global Search = separate solo sessions, last.

---

## Stability rules (always)
- Fetch via `curl -sL` from `raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js`.
- `node --check` before every push; for `core.js` check `wc -l` before/after (currently **2000**), never truncate.
- Push via GitHub Desktop only. LF→CRLF warning harmless.
- Surgical edits; ~2 files per turn. Route sections through shared `sectionHeader()` so they can't drift.
