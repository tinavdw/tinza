# TINZA — SESSION HANDOFF
*Updated 11 Jun 2026. This is the bookmark — read it, then read TINZA_STANDARD.md.*

## ▶️ OPENING LINE FOR THE NEW CHAT (paste this)
> Hi Claude — I'm Tina, building Tinza. Before anything, fetch `TINZA_STANDARD.md` and `TINZA_HANDOFF.md` from the repo root and read both. We're in Phase 1: making every page look & function the same, built from shared functions in core.js. **Next move: wire World Kitchen to the new `sectionHeader()` + `qtyBox()`.**

## 📌 SESSION PROTOCOL (every time)
1. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md` ← the law, read first.
2. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_HANDOFF.md` ← this, where we are.
3. Fetch section files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js` (GitHub API rate-limits — don't use). `node --check` before every push. GitHub Desktop push only. Standard wins over chat.

---

## ✅ DONE THIS SESSION (11 Jun)
- **core.js — built shared `sectionHeader()`.** One 200px photo header (real photo + gradient + ← back + title + tagline + search overlaid) with optional wrapped category boxes; image slot; emoji fallback. 1859 → 1934 lines, `node --check` clean. **PUSH PENDING.** Risk-free — nothing calls it until a section is wired, so the live site doesn't change on push.
- **events.js + buffet.js — touch-target fix (PUSHED ✅).** On selectable rows the whole row now **opens the recipe** (big target); **add-to-plan** moved onto a big full-height checkbox column on the left. Fixes the mis-tap (was: whole row added to plan, tiny `›` chevron was the only way in). `eventCard` + `buffetItemCard`, both `node --check` clean, line counts unchanged.
- **Photo-box audit (3 levels)** — see below.
- **Image folders LOCKED to two** — see below + Standard §5.5.
- **Repo docs renamed to clean names** (`TINZA_STANDARD.md` / `TINZA_HANDOFF.md`) — done. No more `(1)`/`(2)`. Don't re-upload them to chat; just `curl` them.

## 🖼 IMAGE FOLDERS (locked — Standard §5.5)
Two folders only. Names are **case-exact on GitHub** — match precisely.
- `Images/Image/` — every recipe photo. Filename = exact dish name (e.g. `Bobotie.jpg`). **ALREADY LIVE & WORKING** (`recipePhoto()` points here). **Singular `Image`** — ⚠ renaming it to plural `Images` breaks every recipe photo. Action: rename the local inner `Images` → `Image`.
- `Images/Headers/` — every screen banner: main sections, sub-screens, cultures, countries — all one type, told apart by filename only (`braai.jpg`, `health.jpg`, `boerekos.jpg`, `france.jpg`). Capital `H`. Currently **empty** — add header images, then I wire the code to it.
- No third folder. No "main vs sub" split. Recipes and headers are the only two photo types.

## 🔍 PHOTO-BOX AUDIT (11 Jun)
Through-line: **recipe pages are mostly fine (shared 200px); landings & sub-screens are mostly photoless gradients/bars or odd sizes.** Fix = wire `sectionHeader()` everywhere + standardise on `Images/Headers/`.
- **Recipe page:** ✅ Braai · WK · Buffet · Events · Kiddies (200 shared) · 🟡 Spice (150, off-size) · 🟡 Health (bespoke `<img>`, not shared) · ❌ Meals · Budget (no shared photo)
- **Sub-screen:** 🟡 WK country 160 / **SA Kitchens has no header** · 🟡 Health 160×3 · ❌ Buffet bar · Kiddies 155 · Events/Spice gradient
- **Landing:** ❌ WK · Buffet · Events · Budget · Spice · Kiddies (gradient/bar, no photo) · 🟡 Health · Meals (bespoke photo) · Braai bar

## ▶️ NEXT MOVES (in order)
1. Confirm **core.js (`sectionHeader`) pushed & live**.
2. Folders: rename local recipe folder `Images` → `Image`; start adding header images to `Images/Headers/`.
3. **Wire World Kitchen → `sectionHeader()` + one `qtyBox()`** (worldkitchen.js only, core untouched): kills its 3 header sizes + gliding continent scale; gives **SA Kitchens a real 200px header** (home for the Boerekos / Cape Malay pics); country 160→200; collapse its 2 size boxes into one.
4. **Point header code at `Images/Headers/`**: meals.js, health.js (and wire their landings/sub-screens to `sectionHeader()`).
5. Roll `sectionHeader()` + `qtyBox()` across: meals → events/buffet/spice/budget → kiddies → health.
6. Build shared **`recipeRow()`** in core.js; roll the touch-fix across the remaining selectable rows (Braai meat/sides, WK plan) = true "same across".
7. **Global sans flip** (index.html `*{font-family:…sans…!important}`).

## 🗺 WHERE WE ARE — FLOWCHART
```
                         TINZA BUILD
                              |
        +---------------------+----------------------+
        |                     |                      |
   PHASE 1: TIDY        PHASE 2: FILL          PHASE 3: SHELL
  (uniform pages)        (content)              (wrapper)
        |                     |                      |
        v                     v                      v
  [ shared funcs ]      World/Spice/Braai     Weekly Planner
  qtyBox ........✅      recipes               Opening + Free/Pro
  sectionHeader .✅PUSH  Feed My Family        + payments/toggles
  recipeRow ....⏳        Budget (role-slot)    Community · Profile
        |                Anchor · Beverage
        v                4 Ingredients
  IMAGES locked: Image/ (recipes) + Headers/ (banners)
        |
        v
  roll sectionHeader + qtyBox + Headers/ across:
  ▶ World Kitchen → meals → events/buffet/spice/budget → kiddies → health
        |
        v
  touch-fix: events ✅ buffet ✅ → recipeRow() → Braai + WK selection rows
        |
        v
   PHASE 1 DONE = every page looks & works the same
```

## 📋 PHASE 2 / 3 ROADMAP
Lives in **Standard §10** (content fill, then shell). Budget = role-slot library + two-price costing (retrieve full plan from past chat when we start).

## ⚠ STABILITY RULES
Live site first · `node --check` before every push · surgical · one file at a time · **core.js SACRED** (back up, `wc -l` before/after, never truncate) · fetch via `curl -sL raw…` not GitHub API · GitHub Desktop push only · build on shared functions, never rebuild from new.
