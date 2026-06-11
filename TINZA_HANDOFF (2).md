# TINZA — SESSION HANDOFF
*Updated 12 Jun 2026. This is the bookmark — read it, then read TINZA_STANDARD.md.*

## ▶️ OPENING LINE FOR THE NEW CHAT (paste this)
> Hi Claude — I'm Tina, building Tinza. Before anything, fetch `TINZA_STANDARD.md` and this handoff from the repo root and read both. We're in Phase 1: making every page look & function the same, built from shared functions in core.js. Continue with the Braai meat boxes.

## 📌 SESSION PROTOCOL (every time)
1. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md` ← the law, read first.
2. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_HANDOFF.md` ← this, where we are.
3. Then fetch section files as needed. Standard wins over anything in chat.

---

## ✅ FOUNDATION (push state)
- **core.js** — shared `qtyBox()` built + Braai **sides** wired to it. (Committing now, 12 Jun.)
- **meals.js** — "Feeding My Family" → 2×2 grid. (Commit this too — one file at a time.)
- **TINZA_STANDARD.md v1.1** — commit to repo **root**. Now includes the Mission/North Star.
- ⚠ Today's fixes build ON these two files. Confirm both are committed before editing core.js again.

## 🎯 MISSION (now in the Standard)
Extraordinary, uniform, dead-simple food app a child or grandma can use one-handed on a phone. Retention = uniformity + simplicity + readability (churn research: ~56% uninstall in 7 days, top cause = confusing/inconsistent/unreadable UI).

---

## 🔍 PHASE 1 AUDIT (from the code, against the Standard)
| Section | Header | Gliding | Qty box | Bottom search |
|---|---|---|---|---|
| core (Braai) | shared ✓ | no | green ✓ **+ remove dupe SOLO box** | no |
| meals | 200 ✓ | **kill gliding pills** | green → convert to qtyBox | **remove** |
| worldkitchen | **160/190/200 → 200** | no | **2 boxes + SOLO → one qtyBox** | no |
| events | 200 ✓ | no | orange → qtyBox | no |
| budget | 200 ✓ | no | **add qtyBox** | no |
| spice | 200 ✓ | no | **odd box → qtyBox** | no |
| buffet | shared ✓ | no | orange → qtyBox | no |
| health | **160/200/220 → 200** | **kill gliding tabs** | **add qtyBox** | no |
| furry | 200 ✓ | no | stub | no |
*(Font floor 13px: clean everywhere ✓)*

## 🧩 THE TEMPLATE = SHARED FUNCTIONS IN core.js (build once, call everywhere)
- `qtyBox()` ✅ built — clears every qty-box cell above. (Optional info strip = cost p/p · kcal p/p.)
- `recipePhoto()` ✅ exists.
- `sectionHeader()` ⏳ BUILD NEXT — one 200px photo header with categories as **wrapped boxes** baked in. Converting a section to it fixes its header size AND gliding scale in one move.
- `recipeRow()` ⏳ build — locks ✓ + emoji + name + feel line.

## 🛠 FIX ORDER (one file per turn, check vs Standard each time)
1. ▶️ **core.js — Braai MEAT boxes → qtyBox, DELETE the dark SOLO box.** (next step)
2. Build `sectionHeader()` in core.js.
3. worldkitchen.js → sectionHeader + one qtyBox (biggest cleanup: 3 header sizes + 2 boxes).
4. meals.js → qtyBox + kill gliding pills + remove bottom search.
5. events.js · buffet.js · spice.js · budget.js → qtyBox.
6. health.js → dedicated pass (headers→200 + kill gliding tabs + add qtyBox).

## 📋 AFTER PHASE 1 (the roadmap, from the Standard)
Fill content: World recipes · Spice recipes · Feed My Family · Global Braai recipes · Budget (role-slot library + two-price costing — RETRIEVE full plan from past chat when we start) · Anchor · Beverage · 4 Ingredients.
Shell: Weekly Planner · opening pages + Free/Pro + payments + toggles · Community · Profile.

## ⚠ STABILITY RULES
Live site first · `node --check` before every push · surgical · one file at a time · core.js SACRED (back up, `wc -l` before/after, never truncate) · fetch via `curl -sL raw.githubusercontent...` (not GitHub API) · GitHub Desktop push only · build on shared functions, never rebuild from new.
