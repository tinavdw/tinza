# MF151 — NAV_KEYS gap + the mood back-consumer + two rulings to file
**⛔ Start only after MF150 is live and Tina's checks pass (they have — 27 Jul).**
**Small jobs, one commit each, ONE push. `node --check` before push.**

## Commit A — NAV_KEYS loses the World Kitchen drill on cross-link return
Measured at HEAD `77a8981`, statically, end to end:
- `wkContinent`/`wkRegion` are real drill keys: navSignature (core.js:108) watches them; §24.5 names the WK drill as five keys.
- `NAV_KEYS` (the returnTo snapshot/restore list) does **not** contain them. The cross-link `returnTo` saves only NAV_KEYS keys and the restore patches only NAV_KEYS keys.
- Leaving WK nulls all five drill keys (core.js:653).
- Therefore: open a dish deep in Africa → Boerekos, cross-link out, come back → continent/region stay null → she lands at the WK front door, drill broken.

**Fix:** add `'wkContinent','wkRegion'` to NAV_KEYS. Nothing else. Do NOT add `wkDataRecipe` (returnTo lands on the list, not a re-opened recipe).

## Commit B — "← Change mood" leaves stale history entries (dead Back presses)
Measured, Tina reproduced on live: press bottom Back on the Just Feed Me picker after trying moods → nothing moves, once per mood tried.
- Selecting a mood pushes a history entry — `(S.moodSelected||[]).length` is in navSignature.
- **`← Change mood` (core.js:2657) goes back up via `setQuiet({moodSelected:null,...})`** — it changes state without consuming the entry the selection pushed. Every mood tried leaves a stale entry; each later Back press consumes one, popstate restores a snapshot identical to the current picker, screen doesn't move.
- This is the exact §24.6 / MF149-A disease one level down: `moodActiveRecipe` got a consuming closer (`closeMoodRecipe`); the `moodSelected` level never did.

**Fix:** give the mood-selection level a consuming closer (the `closeMoodRecipe` shape — `history.back()` when the entry exists, with the same fail-safe fallback that closer uses), and point `← Change mood` at it. Check whether bottom Back on mood *results* needs the same reader (it likely resolves itself once the closer consumes correctly — measure, don't assume).

## Commit C — the watcher (extend census)
The NAV_KEYS gap is the FOURTH instance of one disease: a key that one list knows and another doesn't (`wkCountry` ghost keys · `fingerSection` missing from LATERAL_KEYS · `wkContinent`/`wkRegion` missing from NAV_KEYS · the mood level missing a closer). Add a census rung:
- Every key in navSignature (core.js:108) must appear in **NAV_KEYS** or **LATERAL_KEYS** or an explicit **EXCLUDED** list (recipe-open keys like `viewingRecipe`/`mealActiveRecipe`/`moodActiveRecipe`/`wkDataRecipe`, ephemerals like `moodSelected`-as-length — Code judges the exclusions, lists them visibly in the rung).
- Prove born-RED by re-removing `wkContinent` → RED, then revert.

## Rulings to file in TINZA_RULINGS.md (fold into this push, no extra deploy)
1. **§24.11 amend, one sentence (Tina ruled 27 Jul):** *the back label is the name the user tapped — the tile text — never the internal screen key.* (Origin: Budget reads `← I've Got R100`, kept.)
2. **§24.12 (Tina ruled 27 Jul from live):** *a lateral pushes no history entry, so Back from a lateral-selected state exits the room — this is intended, not a missing step.* Confirmed on Finger Foods (Meaty list → Back → Events) and Supper (Oven Bakes → Back → out). And: **Finger Foods' top Back stays a static `← Home`** even when entered via Events — ruled, not an oversight.

## Tina's live checks after push
1. WK → Africa → Boerekos → open a dish → follow a cross-link out → return → lands on the **Boerekos dish list**, not the WK front door.
2. Just Feed Me → try two moods, `← Change mood` between them → bottom Back from the picker goes **Home on the first press**.
3. Census green, doctor unchanged.
