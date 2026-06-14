# Tinza — Session Handoff

**Focus:** Finish Events first (14 Jun tactical order) — tasks (c) and (d).
**Push status this session:** NOT yet pushed. Two files ready.

---

## Push set (this session)

Drag into `sections/` via GitHub Desktop → Replace → commit → push.

| File | Lines | Why |
|------|------:|-----|
| `buffet.js` | 1129 | (c) buffetStep1 header → sectionHeader + white My Plan pill; (d) eventsRecipeView removed |
| `events.js` | 1935 | (d) dead if(aer) dispatch + const aer removed; unreachable bigcooking branch removed; comment updated |

`core.js` is **unchanged** this session (byte-identical to what you already pushed) — do **not** re-push it.

---

## What got done

### (a) Cakes → universal opener — DONE (pushed last session)
### (b) Shared §4c plan-row renderer — DONE (pushed last session)
core.js `planDishRow()` rolled to Braai + World + Events.

### (c) Events My Plan → white overlay pill §4.1 — DONE (this session)
- `buffetStep1` flat coloured header → shared `sectionHeader()`: 200px photo header, title overlaid, white-bordered **My Plan overlay pill** top-right with live count + onclick `set({buffetStep:7})`.
- My Plan **tile dropped** from the course grid (now a clean 6-tile / 2-row grid). Guest stepper untouched.
- Header image points at `Images/Headers/Buffet Planner.jpg`. **That file does not exist in the repo yet** — until you add it, the header gracefully falls back to the 🍽️ emoji on the gradient (same as any missing image). **TODO: drop a buffet photo at that path.**

### (d) Cull dead Events code — 2 of 3 done (this session)
- **eventsRecipeView** (was buffet.js, 279 lines) — REMOVED. It was self-documented as dead; every assignment to `eventActiveRecipe` app-wide is `:null`, so the `if(aer)` dispatch never fired.
- **if(aer) dispatch + `const aer`** in events.js — REMOVED. Recipe detail flows through `openRecipe('events')` now.
- **Unreachable `bigcooking` branch** in the tab wrapper (events.js) — REMOVED. The early `return buffetStep1()` always fired first.
- **"Orange box" — NOT touched.** Could not identify a distinct orange element; the whole Events palette uses copper `#c06020`. **Need you to point at which box** (which screen, what text) before I cull it.

---

## Verification done

- `node --check` PASS on buffet.js and events.js.
- buffet.js: 1408 → 1129 (−279, the dead function). All 8 `buffetStep` fns + `buffetQuickNav` + `buffetPlanBtn` still present. Zero `eventsRecipeView` refs remain (only 2 comments mention it).
- Runtime smoke of `buffetStep1()`: renders, 200px header present, white My Plan pill with live count, old flat header gone, My Plan tile gone, guest stepper intact.
- core.js IDENTICAL to backup.

---

## Open question for next session

1. **The "orange box"** — which screen and what does it say? Then I cull it.

## Next up (after this push)

- **Spice (#1)** — unlocks cross-links (salad→dressing, pesto costing).
- Then **compare all ready pages** (Braai / World / Events) side by side for sameness.
- Backlog still open: `Buffet Planner.jpg` upload · Beverages content · global sans font flip · Braai per-person cost fn · header search filtering · base64 fire blob → repo image · Spice Emporium shelf population.
