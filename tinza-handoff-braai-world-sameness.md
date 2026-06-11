# Tinza — Session Handoff

**Theme:** Make Braai match World Kitchen (sameness pass) + My Plan overlay
**Reference for sameness:** World Kitchen (routes through shared `sectionHeader()` in core.js)

---

## Shipped this session

| Change | Files | Status |
|--------|-------|--------|
| World Kitchen header photo — filename `World%20Kitchen.jpg` (404) → `world-map.jpg` (200) at `worldkitchen.js:1441` | worldkitchen.js | ✅ pushed, confirmed live |
| Braai browse views (Mains/Sides) get the 200px photo header via shared `sectionHeader()`; protein pills wrap instead of horizontal-scroll; 542 KB base64 fire photo extracted to a single `BRAAI_HDR_IMG` const | braai.js | ✅ pushed, confirmed live (batch 1) |
| White "🧺 My Plan (N)" overlay added to `sectionHeader()` (top-right inside photo); `braaiQuickNav` dropped the My Plan box → 5 categories in one row (`repeat(5,1fr)`); both Braai headers pass the live count | core.js, braai.js | ⚠️ validated, **needs push** |

**core.js line count:** 1995 → 1999 (controlled; myPlanBtn const +4, removed My Plan box −1).
**braai.js line count:** 273 → 275.

### How the My Plan overlay works
- `sectionHeader({ ..., myPlan:{ count, onclick, label } })` renders a white pill top-right in the photo. Sections that don't pass `myPlan` are unaffected — so World Kitchen and all others are safe until updated.

---

## Queued next (My Plan / sameness rollout)

1. **Braai landing (step 1)** — its descriptive grid still has a gold My Plan box, and step 1 hand-rolls its header (doesn't use `sectionHeader`). Remove the My Plan box from step 1's `sections` array and add the white overlay to its header (or convert step 1 to `sectionHeader`).
2. **World Kitchen** — still renders a green "🧺 My Plan (N)" pill *below* the photo (`worldkitchen.js:1559`). Move it into the white overlay (pass `myPlan` to its `sectionHeader()` call) and delete the green pill.
3. **Other sections** (Health Hub, Events, etc.) — same overlay rollout via `sectionHeader`.

## Queued (Braai feature parity with World rows)

4. **`≈ R__ pp` per-row cost hook** — Braai has NO cost function (only `calcMeat` grams + `MEAT_CALS`). Needs a Braai cost-per-person function before the row hook can show a real number. Do NOT fake a value.
5. **Header search input** — World's header search filters its list; Braai has no filter logic, so a search box would be a dead input. Needs Braai filtering first.
6. **`braai.jpg` in repo** — drop a header image into `Images/Headers/braai.jpg` (like `world-map.jpg`), point `BRAAI_HDR_IMG` at it, and **delete the 542 KB base64 blob** → big file shrink.
7. **Row style** — optional: switch Braai's "Recipe →" button rows to World's chevron + tap-row style.

---

## Wider backlog (unchanged, from earlier sessions)

- **Global sans font flip** — add the `*{font-family:...sans...!important}` rule to `index.html`. Not yet live.
- **SAMENESS LOCK** — photo header in every section all same size; no horizontal-scroll category scales anywhere; ONE universal search above the bottom nav; identical section headers.
- **Shared `qtyBox()` in core.js** — one interactive green qty box under the recipe name in every section.
- **Spice Emporium shelves** still to populate: Chutneys & Atchars (Tina leads), Sambals & Relishes, Jams & Preserves.
- **Beverage Bar Planner** (must include a cocktails block); **Finger Foods** standalone split; writing + photo pass.
- **Kiddies todos** — icing butter/milk sweep; 400ml/kid cooldrink + ± adjuster; eventsRecipeView Braai-match; Treasure Chest Sandwiches → ham & cheese; Malva Pudding Bites photo; method/ingredient audit.
- **Budget (R40–150) + Global Search** — separate solo sessions, after all sections + recipes done.

---

## Stability rules (always)
- Fetch via `curl -sL` from `raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js`.
- `node --check` before every push; for `core.js` check `wc -l` before/after, never truncate.
- Push via GitHub Desktop only (drag → Replace → commit → push). LF→CRLF warning is harmless.
- Surgical edits; ~2 files per turn. Every section matches the shared `sectionHeader()` so they can't drift.
