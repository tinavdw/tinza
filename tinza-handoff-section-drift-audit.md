# Tinza — Session Handoff

**Session:** Section drift audit & fix (Braai vs World Kitchen + recipe-page issues)
**Status at handoff:** 3 of 4 fixes done & validated · 1 fixed, validation pending · nothing pushed yet

---

## What this session did

Went into the live code to pin down four real differences between section implementations, then fixed them surgically.

| # | Issue | File / line | Fix | Status |
|---|-------|-------------|-----|--------|
| 1 | Second green box on recipe page (cost card) | `core.js:1878` (`#0f1a08`) | Recoloured to warm Spice palette — qty box now the only green box | ✅ done, `node --check` passed, 1989→1995 lines |
| 2 | Fire guide (Coal & Heat) was static | `core.js` | Wrapped in collapsible toggle + chevron | ✅ done (the +6 lines are the wrapper) |
| 3 | Dead "Family Mix" label after guest +/− stepper | `braai.js:50` | Removed | ✅ done, `node --check` passed, 272→270 lines |
| 4 | World Kitchen header showed bare emoji (no photo) | `worldkitchen.js:1441` | Filename was `Images/Headers/World%20Kitchen.jpg` (404) → fixed to `Images/Headers/world-map.jpg` (200 OK) | ⚠️ edited, FINAL `node --check` not yet confirmed |

### Notes that matter for next time
- `sectionHeader()` exists in `core.js` but neither Braai nor World Kitchen calls it — that's why they keep drifting. Both build their own headers. Long-term: route every section through the shared `sectionHeader()` so they can't drift again (ties into the SAMENESS LOCK).
- In `worldkitchen.js`, the gradient-only header at **lines 110–129 is dead code** ("OLD MAP SCREEN — no longer reached"). Live path is `worldKitchenHTML()` → `wkWorldHome()` (line ~1431). So the single filename fix at line 1441 is the correct and only change.
- Raw GitHub URLs are **case- and name-exact** — a wrong name silently 404s and falls back to emoji. Watch this on every photo header.

---

## Immediate next move (start here)

1. `node --check sections/worldkitchen.js` — confirm clean.
2. Push **3 files** via GitHub Desktop (Show in Explorer → drag into `sections` → Replace → commit → push):
   - `core.js` (one green box + collapsible fire guide)
   - `braai.js` (Family Mix removed)
   - `worldkitchen.js` (header photo filename fix)
3. Open tinza.netlify.app and confirm: recipe page shows ONE green box + collapsible fire guide; Braai stepper has no Family Mix label; World Kitchen landing shows the world-map photo header.
4. After confirming live → all four differences closed.

---

## Queued backlog (bigger picture, after these 3 files land)

**Top-priority locks still open:**
- **Global sans font flip** — add `*{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif!important}` to `index.html`. Overrides all inline Georgia at once. Needs `index.html`. NOT yet live.
- **SAMENESS LOCK** — photo header in every section, all SAME size (World Kitchen's still small — enlarge); no horizontal-scroll category scales (wrap to grid/boxes); ONE universal search above the bottom nav (kill per-screen "Search All Recipes" boxes); identical section header pattern everywhere.
- **Shared `qtyBox()` in core.js** — one interactive green qty box directly under the recipe name in EVERY section; remove all other size boxes so it never drifts.

**Queued next phase:**
- Result-row card warm-fix; recipe rows to row standard
- Recipe-page collapsible blocks + settings banner
- Navigation model pass
- Two-price costing
- Beverage Bar Planner (must include a cocktails block)
- Spice Emporium shelves still to populate: Chutneys & Atchars (Tina leads), Sambals & Relishes, Jams & Preserves
- Finger Foods standalone split
- Writing + photo pass

**Kiddies to-dos:**
- Sweep 12 themes' cakes: 'icing butter'/'icing milk' → plain butter/milk
- Unify cooldrink quantity to 400ml/kid standard + add ± adjuster
- eventsRecipeView full Braai-match
- Treasure Chest Sandwiches → ham & cheese (pp · total)
- Malva Pudding Bites photo
- Audit all Kiddies methods + ingredients

**Budget + Global Search:** build as separate solo sessions, AFTER all sections + recipes done.

---

## Stability rules (always)
- Never edit a working section unless that IS the session purpose.
- Start every session at tinza.netlify.app — confirm what works first.
- Fetch files via `curl -sL` from `raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js` (GitHub API rate-limits).
- `node --check` is the sole syntax validation before every push.
- For `core.js`: `wc -l` before and after every edit; any deviation = investigate before proceeding. Never truncate.
- Push via GitHub Desktop only. LF→CRLF warning is harmless.
- Every section matches Braai v33 exactly.
- Work in batches of ~2 files per turn. Surgical edits only.
