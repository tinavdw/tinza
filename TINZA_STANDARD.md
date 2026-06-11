# TINZA — THE STANDARD
### The single source of truth. This file is the law. Read it FIRST, every session.
*Version 1.2 · updated 11 Jun 2026 (added Image Folders rule; sectionHeader built). When a rule changes, edit THIS file and commit it — never re-decide in chat.*

> **Session protocol (do this every time):**
> 1. Fetch this file first: `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md`
> 2. Fetch the latest `TINZA_HANDOFF.md` for where we left off.
> 3. Only then touch code. If anything in chat contradicts this file, **this file wins** — or we change this file on purpose.

---

## MISSION — THE NORTH STAR
**Build an extraordinary South African food app people *want* and stay subscribed to — uniform across every page, and so simple a child or a grandma can use it on a phone.**

Retention is the whole game, and the research tells us exactly what to design against:
- ~56% of apps are uninstalled within 7 days; ~46% within 30. The top reasons people leave are **confusing/inconsistent UI** and **things being hard to read on a phone.**
- So our three retention levers ARE the design rules below: **uniformity** (every page the same), **simplicity** (a grandma can use it one-handed outside under a tree), **readability** (16px body floor, off-white on warm-dark, hierarchy by size/weight not dimness).
- The free hook = real cooking value + **cost-per-person on every row**. The value is felt before the paywall.

Every decision in this file serves that mission. If a change makes a page less uniform, less simple, or less readable, it's wrong — no matter how clever.

---

## 0. THE ONE RULE
**Every page, in every section, must LOOK and FUNCTION the same.** Different rooms are told apart by their *photo and emoji only* — never by different layouts, sizes, box positions, or (except Mood) colours. If two screens differ in anything below, one of them is wrong.

---

## 1. COLOUR (warm Spice palette — everywhere EXCEPT Mood)
| Role | Hex |
|---|---|
| Background (warm near-black) | `#0f0e0c` |
| Card surface | `#161210` |
| Raised card | `#1a1208` |
| Names / titles | `#f5e8cc` |
| Body text | `#f0ebe1` |
| Secondary (feel lines, labels, meta) | `#e0d4b8` |
| Important numbers (gold) | `#f5c842` |
| Accent (borders, buttons) | `#c06020` |
| WhatsApp green | `#25d366` |

**Green qty box** (the one deliberate non-warm accent): outer `#1a2208` / border `2px #6a8020` · inner `#0f1a04` · total `#c8e840` · count `#f5c842`.

**Mood is the ONE exception** — it keeps its colour-as-feeling accents. Do not flatten Mood.

**13px is the floor.** Nothing smaller, anywhere.

---

## 2. FONT & SIZE HIERARCHY
- **Font:** ONE global sans rule in `index.html`:
  `*{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif!important}`
- **Sizes (px):** title 22 · name 16 · body 16 · feel line 14 · labels 13 · line-height 1.5
- **Weights:** regular + bold only. Names are 16 bold.

---

## 3. THE ROW (lists, every section)
`✓  [emoji]  NAME` (`#f5e8cc`, 16, bold) + **ONE feel line** (`#e0d4b8`, 14, upright) + `Recipe ›` (`#c06020`).
Reference rows = Homestyle Plates / Health / Mood. All other metadata lives on the recipe page, NOT the row.

---

## 4. PAGE TEMPLATES (what each page contains, in order)

### 4a. Section landing (every section identical)
1. **Photo header — 200px**, gradient overlay, title + search bar overlaid on it.
2. One box: **"How it works"** link (left) + **guest/serving ± slider** (right).
3. **Categories = wrapped BOXES** in a grid. **NO gliding / horizontal-scroll scale, anywhere, ever.**
4. Recipe rows (section 3 standard).
5. *(landing hooks: cost p/p shown on rows; calorie hint where available.)*

### 4b. Recipe page (every section identical)
1. **Photo header — 200px.**
2. **Recipe name** + meta strip (origin · time · kcal).
3. **THE GREEN QTY BOX — directly under the name** (shared `qtyBox()`): big total + per-person inside, `− guests +` same row, **scales live**. This is the ONLY size box on the page. Its optional thin info strip carries the useful bits — **cost p/p · total · kcal p/p** — where the data exists. One box, doing the work of the old three.
4. **"How portion size works"** collapsible (pizza analogy).
5. **Ingredients** — see section 5.
6. **Method** — numbered, with timers + cooking mode.
7. **Goes Well With.**
8. **Bottom actions:** Add to Plan · Save to My Kitchen · Download.
9. **Text nav:** Back | My Plan | Home.

### 4c. Plan page
Dishes chosen · **est. cost p/p and per plan** · **total calories p/p** (estimate, ALL dishes incl. sides — always labelled "estimate") · link to shopping list.

### 4d. Shopping page
Clean aisle-grouped list, **no duplicates**, no per-meal separation. **Two-price costing** (see section 6). Share targets: WhatsApp · Gmail · Checkers60 · PnP · Spar. Print / Save as PDF.

### 4e. Universal elements
- **Persistent bottom nav bar** on every screen.
- **ONE universal search** sits ABOVE the bottom nav. **No per-screen "Search All Recipes" box.**
- Back buttons read the same everywhere and isolate sub-sections correctly.

---

## 5. INGREDIENT STANDARD
- **Name** = exactly what you buy, matching `PRICE_DB`.
- **Amount** = weight (g/kg) + pack hint; count only for unit-sold items.
- One ingredient per line. No "+" lines. Prep instructions go in the **method**, not the name.
- Display: per-person amount + total, totals in gold `#f5c842`.

---

## 5.5 IMAGE FOLDERS (locked)
**Two folders only — names are case-exact on GitHub, so match them precisely.**
- `Images/Image/` — every recipe/dish photo. Filename = the **exact recipe name** (e.g. `Bobotie.jpg`); `recipePhoto()` builds this path and strips accents to match. **Singular `Image` — already live & working; never rename to plural `Images` or every recipe photo breaks.**
- `Images/Headers/` — every screen **banner**: main-section landings, sub-screens, cultures, countries — all one type. **Filename = the screen's name exactly as the app shows it** (`Boerekos.jpg`, `Cape Malay.jpg`, `France.jpg`) — same habit as recipe photos, so **one rule covers every image in the app: copy the name on screen.** (For main-section titles that are long or contain symbols like `&`, Claude assigns the exact filename when wiring that section.) Folder is capital `H`. All header / `sectionHeader()` code points here.
- There is **no third folder** and **no "main section vs sub-screen" split** — a header is a header. **Recipes and headers are the only two photo types.**

---

## 6. PORTIONS & COSTING
**Portion Brain — per-person base (g):** boneless 180 · bone-in 250 · fish 160 · veg main 200 · side 150 · dessert 120 · starter 60.
Spread at plan level (mains 100/65/50%, sides taper to 50%, floors stop tiny portions). +10% buffer. Appetite toggle Big/Normal/Small. Drinks are per-guest. Excludes Budget/Tiny/Furry/Anchor.

**Meat cut guide (all sections):** slow/potjie → lamb shoulder/neck/shank, pork shoulder, beef chuck/shin/brisket · grill → lamb loin/leg, pork neck, beef rump/sirloin · quick → pork loin, beef rump · roast → leg joints.

**Two-price costing (to build):** for every ingredient — *by weight / by pack / by each*; **cook number** (exact amount used) vs **buy number** (pack-rounded). Shopping total = pack-rounded; dish cost = exact. Separate pantry group.

---

## 7. FREE vs PRO (locked)
Subscription-only · **Pro R99/mo** · **NO third-party ads, ever.**
- **FREE:** browse + cook the everyday sections, scale portions, **cost p/p on every row** (the hook), Anchor capped ~3/day, share 1 recipe, save a few, allergen filters + 1 diet style. **NO plans, NO shopping list.**
- **PRO:** everything else — Budget / Mood / 4-Ingredient / Weekly Planner / build plans / shopping lists / downloads / unlimited saves + full dietary / AI Chef / pantry scan / leftovers / meal-stretch / nutrition / Tiny Tummies / Furry Friends + monthly letter + community + magazine.
- Locks are peekable; never move the line.

---

## 8. THE CODE LOCK (how the standard is *enforced*, not just written)
1. **Design tokens** — a single `THEME` constant block (colours + sizes) at the top of `core.js`; sections reference it instead of hardcoding hex. *(Migration: incremental.)*
2. **Shared component functions in `core.js`** — built once, called everywhere. **The whole recipe page renders from these — a section never hand-writes chrome.**
   - Header/qty: `sectionHeader()` ✅ · `qtyBox()` ✅ · `recipePhoto()` ✅
   - Recipe-page chrome (Standard §4b): `metaStrip()` ✅ · `portionHowBox()` ✅ · `recipeBox()` ✅ (titled card shell) · `ingredientsBox()` + `ingredientRow()` ✅ · `methodBox()` + `methodStep()` ✅ · `goesWellBox()` ✅ · `recipeActions()` ✅ · `recipeNav()` ✅
   - Lists: `recipeRow()` ✅ (§3 row)
   - **Whole-page assembler: `recipePage()` ✅** — lays out the ENTIRE recipe page (wrapper, max-width, padding, block order, sizing). Sections feed content only; layout cannot differ. **This is the page every other section is compared against.** Two fixed content slots: `notesHTML` (after ingredients) and `extrasHTML` (after Goes-Well) for section-specific blocks (SA swaps, cost, tip, Braai coal guide) — always in the same place.
   - still to build: `howItWorks()` · `bottomNav()` · `costStrip()`
   - **What "the same" means:** every section's page is these identical shells in the §4b order — same boxes, arrows, info layout, fonts, colours, sizes. Only the *content* inside differs (the actual ingredients/method, and genuinely section-specific blocks like Braai's coal guide or WK's SA-swaps, which sit in the same `recipeBox()` shell). Mood is the one colour exception.
3. Once a screen uses the shared function, it **cannot drift** — there's only one definition.

---

## 9. STABILITY RULES (never skip)
- Live site first · `node --check` before every push · surgical edits · **one file at a time**.
- **`core.js` is SACRED:** back up first, check `wc -l` before/after, never truncate.
- Fetch files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js` (GitHub API rate-limits — don't use). Cache-bust with `?cb=…`.
- Push via GitHub Desktop only. LF→CRLF warning is harmless.
- **Build on the template (shared functions). Never rebuild from new.**

---

## 10. ROADMAP (the order we work — checked off as done)
**Phase 1 — TIDY (make every page look & function the same):**
- [ ] Green `qtyBox()` rolled across ALL sections (started: Braai sides ✅)
- [ ] Photo headers all 200px (fix World Kitchen recipe 190; Health Hub mixed)
- [ ] Kill all gliding scales → wrapped boxes (meals, health, budget, spice)
- [ ] Remove per-screen bottom search (meals) → universal search above nav

**Phase 2 — FILL (content):**
- [ ] World Kitchen — add recipes
- [ ] Spice — add recipes
- [ ] Feed My Family — finish (+ open-bug trace)
- [ ] Global Braai — add recipes
- [ ] Budget — finish (role-slot library + two-price costing) *(retrieve full plan from past chat when we start)*
- [ ] Anchor Ingredient — finish
- [ ] Beverage section
- [ ] 4 Ingredients

**Phase 3 — SHELL (the wrapper):**
- [ ] Weekly Planner
- [ ] Opening pages + Free/Pro + payments + toggles
- [ ] Community (build + how it works)
- [ ] Profile page

---
*End of standard. This file is read first, every session. Change it on purpose, or not at all.*
