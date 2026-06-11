# TINZA — PROGRESS TRACKER
### Phase 1 goal: EVERY page looks & functions the same (Standard §0)
*Updated 11 Jun 2026. Lives in the repo with TINZA_STANDARD.md + TINZA_HANDOFF.md. Updated every session.*

---

## ✅ HOW WE WORK (modus operandi)
1. **Work the list top-down, one section per pass.** Finish a section before starting the next.
2. **A box is only ticked when Tina is happy.** Claude wires it + runs `node --check`, then Tina opens the page **live** and checks it against the §4b list. Claude proposes "ready to tick?" — **Tina confirms. Claude never ticks the sign-off box itself.**
3. **Interruptions:** if something unexpected comes up mid-pass (like the mobile photo-crop this morning) → (a) log it under **Interruptions** below, (b) fix it, (c) **return to the exact section/step we were on.** We never lose our place.
4. This file is the single source of "what's done." If it isn't ticked here, it isn't done.

**Legend:** `[x]` done & Tina-signed · `[~]` partly done (see note) · `[ ]` to do · `—` n/a

---

## 🧱 FOUNDATION (shared building blocks — done)
- [x] Shared **recipe-page component library** in core.js — `sectionHeader` · `qtyBox` · `recipePhoto` · `metaStrip` · `portionHowBox` · `recipeBox` · `ingredientsBox`+`ingredientRow` · `methodBox`+`methodStep` · `goesWellBox` · `recipeActions` · `recipeNav` · `recipeRow`
- [x] **Whole-page assembler `recipePage()`** — lays out the entire recipe page (wrapper, width, padding, block order, sizes). Sections feed content only; layout can't drift. **This is what makes "compare every page to the first one" automatic — they're all built by the same function.**
- [x] Standard §8 locks "**whole page renders from shared components + `recipePage()`**" + a plain definition of "the same"
- [x] Image folders locked to two (`Images/Image/` + `Images/Headers/`); rogue 3rd folder removed
- [x] sectionHeader mobile fixes: photo anchors **top** (no top-crop) + back button lands at **top** *(resolved this morning — interruption #1)*

---

## 📋 THE SECTIONS — each must render through the shared components

Per section, four things must be true before it's signed off:
**(H)** landing header = `sectionHeader()` 200px · **(R)** lists = `recipeRow()` · **(P)** recipe page = the §4b shared components in order · **(✓)** Tina opened it live and is happy.

### 1. World Kitchen  ← in progress (the reference section)
- [x] H — landing + country-list headers → `sectionHeader()` *(signed off: Boerekos confirmed on mobile)*
- [ ] R — list rows → `recipeRow()` *(still on `wkRecipeCard`)*
- [~] P — recipe page now renders **entirely through `recipePage()` + all shared components** (`metaStrip`, `qtyBox`, `portionHowBox`, `ingredientsBox`/`ingredientRow`, `methodBox`/`methodStep`, `goesWellBox`, `recipeActions`, `recipeNav`; SA-swaps in the notes slot, cost/tip/chef-notes in the extras slot). **← READY FOR YOUR LIVE REVIEW**
- [ ] ✓ Tina happy with the full page  *(open SA → a country → a dish; check size/info/layout/order, then tick)*

### 2. Braai
- [ ] H — landing header → `sectionHeader()`
- [ ] R — rows → `recipeRow()`
- [~] P — recipe page *(already uses `qtyBox`; remove the leftover/dead 2nd adjuster, route the rest through shared components)*
- [ ] ✓ Tina happy

### 3. Meals (Homestyle Plates)
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 4. Health Hub
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy   *(note: headers currently mixed 160/200/220 — standardise to 200)*

### 5. Events
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 6. Buffet
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy   *(note: 2 old "Quantities" boxes to collapse)*

### 7. Spice Room
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 8. Budget
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 9. Kiddies
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy   *(note: header undersized at 155 → 200)*

### 10. Tiny Tummies
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 11. Furry Friends
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

### 12. Mood  *(the ONE exception — keeps its colour-as-feeling accents; structure still matches, colours do not)*
- [ ] H  · [ ] R  · [ ] P  · [ ] ✓ Tina happy

---

## 📊 SCOREBOARD
- Foundation: **complete** ✅
- Sections fully signed off: **0 / 12**  (World Kitchen closest — headers done)
- Next up: **finish World Kitchen review, then Braai** → those two become the visual reference for the rest.

---

## 🅿️ PARKED DECISIONS (right idea, wrong time — do in the proper phase)
1. **Free/Pro gating of plans (Phase 3 — Free/Pro pass).** Per Standard §7, **Free does NOT get plans, shopping lists, or downloads** — those are Pro. Today nothing enforces tier gating (only the testing toggle), so the My-Plan "Share Plan · 🆓 Free" badge is a **placeholder**. Gate plans/shopping/downloads to Pro **across all sections at once**, with peekable locks + paywall — not piecemeal in World Kitchen. *(Tina flagged 11 Jun pm.)*
2. **Clickable "Goes Well With" pills.** Make each pill jump to that item in Spice/Buffet. Needs a name→location lookup. Decide simple search-jump vs full deep-link when we get to it (Phase 2-ish).

---

## ⚠ INTERRUPTIONS LOG (surprises we handled, then returned to the list)
1. **11 Jun (am)** — mobile: World Kitchen header photo cut at top + back button not landing at top. → Fixed in `sectionHeader()` (object-position top + `_savedScroll=0`). ✅ Resolved, returned to list.
2. **11 Jun (pm)** — push mix-up: an old `core.js` (1934 lines, no `recipePage`) kept landing in the repo because of a same-name file in Downloads. → Re-pushed the correct 2074-line file; verified `recipePage` live via raw URL before wiring. ✅ Resolved, returned to list. *(Lesson: verify the file has `recipePage` before committing.)*

*(Add new ones here as they come up — fix, log, return to the section we were on.)*

---
*This file is read alongside the Standard + Handoff each session. Tina ticks the ✓ boxes; Claude keeps the rest current.*
