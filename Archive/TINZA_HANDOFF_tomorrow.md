# TINZA — SESSION HANDOFF · night of 24 Jul 2026
*Paste into tomorrow's chat to resume. Files are the memory — this + the rulings + the fix queue are the continuity.*

**Start protocol:** `git clone --depth 1 https://github.com/tinavdw/tinza.git` reads HEAD (⚖️ Law 2 — Claude reads the repo; Tina's eyes on live close a bug). Claude can run `tinza-doctor.js` / `tinza-census.js` / `node --check`; Claude cannot push.

**Where we are:** the MF144 vessel engine is DONE + live, and the big **door-strip bug** is FIXED + verified. The open work is **Phase C — a coverage gap**: holders landed on the *named* records, but the library keeps the same dish as separate records in different rooms, so the un-named copies are bare.

---

## ▶️ IMMEDIATE NEXT — Phase C coverage audit
1. **Claude generates the bare-holder audit at HEAD** — every soft/hard dish record missing an `equipment` holder, grouped by dish, so duplicates + misses show in one pass. (Parse the records, never grep — ⚖️ §19.)
2. **Tag every COPY of each soft/hard dish.** The pass tagged one named record per dish; cross-room twins are bare.
   - ✗ Confirmed bare: **Melktert** (WK + events — meals `Milk Tart` has it), **Malva** (meals + core + WK — events `malvapudding` has it), **Beef Lasagne** (missed everywhere).
   - ✓ Confirmed FINE: **Fish Pie (WK)** — Tina saw it render right. So the gap is *specific duplicates/misses*, NOT all-WK.
3. **Add the outright misses** — Beef Lasagne is the textbook soft dish and got nothing; the audit surfaces the rest.
4. **Widen the coverage guard.** The bake-coverage WARN doesn't span rooms/duplicates, so these slipped past silently. Make it flag ANY holderless baked/assembled record across all rooms → a bare twin goes **RED**, not silent.
5. Push → Tina's eyes on live → then it's actually closed.

## ✅ DONE tonight
- **Engine (Phase A)** — soft/hard holders + shared renderers, live + verified.
- **Phase B holder pass** — 91 holders: SOFT `23×33cm ovenproof dish, per:6, soft:true` · HARD named tins · NONE (roasts, free-form, excludes).
- **THE DOOR-STRIP BUG (the big one)** — `equipment` was stripped by a three-stage projection (adapter → `rec()` → door), each stage an allowlist that omitted it. Fixed by threading the field through all 6 adapters + `rec()` (`index.js:287`) + `normalizeRecipe()` (`core.js:3051`). Verified live: Cottage Pie opens at 6 with the dish line, 7→2, 13→3, ingredients scale. **Census survival guard added + proven to fire RED on regression.** ⚖️ Law 2 in its purest form — no data check saw it; Tina's live eyes did.
- **Tres Leches → HARD** (Claude's SOFT call was wrong — it's cake-modelled + `freezes:false`).
- **World twins matched** — `egypt-basbousa`, `portugal-pasteis-de-nata`.

## 📗 RULINGS BANKED — TINZA_RULINGS.md §10
- **SOFT-6 is FAMILY-MEAL only** — count-scaled rooms (events/buffet/kiddies) keep their own count.
- **IN-BETWEEN dish counts round up** (`ceil`); the "1 full + smaller" note is parked → in-app chef-helper idea filed in `TINZA_IDEAS_BACKLOG.md` #23.
- **THE HOLDER MUST SURVIVE THE DOOR** — new recipe fields thread adapter → `rec()` → door, guarded by the census survival assertion.

## 🧵 LOOSE THREADS (minor, not blockers)
- **Cosmetic:** contract banner reads "your total for all 2/3" — add the noun: "all 2 **dishes**."
- **Meal seed question (Tina to decide):** `recipeDetailFromResult` has no `mealActiveRecipe` branch → a meal inherits `searchServings` from the last-viewed recipe instead of its own soft-default. Bug, or intended session-wide servings? Reset-per-recipe → small fix; persist-as-you-browse → already correct.

## 📌 AFTER PHASE C
- **Biscuits→dog-food search bug** — already in `reference/TINZA_FIX_QUEUE.md` (~line 110): searching "biscuits" surfaces Furry Friends pet biscuits.

## ⬆️ PUSH IF NOT ALREADY DONE
- `TINZA_RULINGS.md` (door ruling added tonight).
- `MF144_REVIEW_QUEUE.md` (resolved stamp — note: the *named-record* pass IS done; Phase C coverage is new scope beyond it).
