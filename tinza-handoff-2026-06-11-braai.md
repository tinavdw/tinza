# Tinza — Session Handoff · 11 June 2026 (Braai conversion)

## THE RULE (Phase 1 goal)
Every recipe page must look **and** function identically by assembling through shared
functions in `core.js`, so no section can drift. **Mood** is the only exception.
World Kitchen is the locked reference. Braai is now aligned to it.

---

## ✅ DONE & VALIDATED THIS SESSION (ready to push)

**`core.js` — `recipeView()` rewritten to assemble through the shared `recipePage()`**

- Was: 265-line bespoke Braai recipe page (its own header, qty box, ingredients,
  method, tip, cost, goes-well, actions, nav) + dead unused `servingAdjuster`.
- Now: routes entirely through `recipePage()` + shared components
  (`qtyBox`, `ingredientsBox`/`ingredientRow`, `methodBox`, `recipeActions`, `recipeNav`,
  `portionHowBox`). Braai recipe pages are now structurally pixel-identical to World Kitchen.
- **Blast radius confirmed Braai-only**: `viewingRecipe` is set in exactly one place
  (the Braai "📖 See Recipe & Method" button, core.js line 507) and `recipeView()` only
  resolves `MEAT_GROUPS`/`SIDES_GROUPS`. Events / Buffet (which use `eventActiveRecipe`)
  are untouched.

**Braai-specific bits preserved (no feature loss):**
- Per-person ingredient scaling (all 5 regex patterns: g/ml/kg/L, tbsp/tsp→ml, slices/pieces, plain count, fractions)
- Solo vs shared-across-N-meats portion logic in the qty box
- "First ingredient of a selected meat → see qty ↑" handling
- 🔥 Coal & Heat hand-test guide → now sits in the **notes slot** (just before Method)
- ❤ Goes Well With → kept as **clickable** pills (jump to sides filter) in the extras slot
- Clickable per-step ⏱️ timers + 👨‍🍳 Start Cooking (cooking mode)
- 💰 Cost card (Pro) / locked teaser (Free)
- 💡 Tip box · Add to Plan / My Kitchen / Download actions · Back | My Plan | Home nav

**Validation:** `node --check` passes. `core.js` 2077 → **1989 lines** (−88).
The drop is the intended consolidation (bespoke page replaced by shared components +
dead `servingAdjuster` removed), **not** truncation. Backup kept as `core.js.bak`.

---

## ▶ NEXT MOVE (on the live site, before any new code)
Push `core.js` via GitHub Desktop, then open **tinza.netlify.app → Braai → pick a meat →
"See Recipe & Method"** and confirm against World Kitchen:

1. Photo header + back overlay, name as h1
2. Green qty box directly under the name; ± scales totals **live**
3. "▼ How portion size works" collapsible present
4. Ingredients render two-column (name left / gold amount right)
5. Coal & Heat guide appears just before Method
6. Method steps show clickable ⏱️ timers + Start Cooking
7. Goes Well With pills still **navigate** to sides
8. Bottom actions + Back | My Plan | Home nav
9. Repeat for a **side** recipe, and for a meat **already in the plan** (first ingredient → "see qty ↑")

---

## 📋 TINZA TO-DO — PHASE QUEUE (carried forward + new)

### Standardisation (THE RULE rollout — active phase)
- [x] World Kitchen = reference (done, signed off)
- [x] **Braai recipe detail → shared `recipePage()`** (this session — verify live, then tick)
- [ ] Braai header (`braaiStep1`) → swap bespoke inline header for shared `sectionHeader()`
      (currently structurally compliant but not the shared fn = drift risk)
- [ ] Point remaining sections' recipe pages at `recipePage()` one by one
- [ ] Result-row card warm-fix · recipe rows to shared `recipeRow()`
- [ ] Recipe-page collapsible blocks + settings banner
- [ ] **Global sans font flip** — add the one `*{font-family:…sans…!important}` rule to `index.html` (kills all inline Georgia at once; NOT yet live)

### Build sessions (after sections + recipes done — each is its own solo session)
- [ ] Beverage Bar Planner (must include a cocktails block)
- [ ] Spice Emporium shelves still to populate: Chutneys & Atchars (Tina leads), Sambals & Relishes, Jams & Preserves
- [ ] Finger Foods → standalone section split
- [ ] Two-price costing (pack-rounded vs exact cook cost) surfaced
- [ ] Budget R40–150 + buffered queue provider (separate solo session)
- [ ] Global Search (separate solo session)
- [ ] Writing & photo pass (feel one-liners last, after data final)

### Kiddies backlog
- [ ] Sweep 12 themes' cakes: 'icing butter'/'icing milk' → plain butter/milk
- [ ] Unify cooldrink qty to 400ml/kid + ± adjuster
- [ ] eventsRecipeView full Braai-match
- [ ] Treasure Chest Sandwiches → ham & cheese, pp·total
- [ ] Malva Pudding Bites photo
- [ ] Audit all Kiddies methods + ingredients

---

## 🔒 STABILITY REMINDERS
- Fetch files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js`
- `node --check` before every push · `wc -l` core.js before/after (now **1989**)
- Push via GitHub Desktop only → confirm arrow returns to "Fetch origin" (no ↑)
- Surgical edits · never patch old code, rebuild from v33 · core.js is sacred (backup first)

---

## FLOWCHART — where we are

```
WORLD KITCHEN (reference, locked) ──────────────► assembles via recipePage() ✓
        │
        ▼
BRAAI recipeView()                THIS SESSION
        │
        ├─ was: bespoke 265-line page ──────────► REWRITTEN
        │                                          │
        │                                          ▼
        │                          recipePage() + shared components
        │                          (qtyBox · ingredientsBox · methodBox
        │                           · recipeActions · recipeNav · portionHowBox)
        │                                          │
        │   preserved as Braai extras: ───────────┤
        │     • coal/heat guide  → notes slot      │
        │     • Goes Well pills  → extras slot     │
        │     • cost · tip · timers · scaling      │
        │                                          ▼
        │                          node --check ✓  · 2077→1989 lines · Braai-only
        │                                          │
        ▼                                          ▼
  PUSH core.js ──► VERIFY on tinza.netlify.app ──► tick Braai ✓
        │
        ▼
  NEXT ─► Braai header → sectionHeader()  ─►  next section's recipe page
        ─► global sans font flip (index.html)
        ─► then build sessions (Beverages · Spice shelves · Budget queue · Search)
```
