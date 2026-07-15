# 🚀 TINZA — NEW CHAT HANDOFF (from 15 Jul 2026 session)
*Open the new chat, paste/point me at this, and we start straight away.*

## 🔑 Start-of-session ritual (Tina's stability rules)
1. Start at **tinza.netlify.app** — confirm what already works (⚖️ Law 2).
2. Every section built **FROM the Braai v33 pattern** — same header, collapsibles, colours, nav. No patching old code.
3. **`node --check` before every push.** Push via **GitHub Desktop** (Show in Explorer → drag into `sections/` → Replace → commit → push). LF→CRLF warning is harmless.
4. **Batch** files into one push (15 Netlify credits/deploy).
5. Doctor stays **RED 10** — it's a ratchet ("did I *add* one?"), not a gate (⚖️ Law 51).

---

## 🎯 First action — hand MF120 to Code (paste this)

> **MF120 — 69 of 101 bakes still say "4 people". Close the `bakesPortion` fallback hole.**
> **CAUSE:** `bakesPortion` (meals.js:15960) only maps 3 cats (cakes/cheesecakes/biscuits); the other 6 fall through to null → raw people count (default 4). **MEASURED: 19 pastries · 16 breads · 10 flatbreads · 10 puddings · 9 deepfried · 5 sconesmuffins = 69.**
> 1. **Extend the default maps:** `BAKES_SLICE_DEFAULT` += `pastries:8, puddings:8`. `BAKES_BATCH_DEFAULT` += `flatbreads:6, deepfried:12, sconesmuffins:12`.
> 2. **Per-recipe `serves`/`makes` in Node for the two MIXED cats** (bakesPortion reads these FIRST, so they override the cat default):
>    – **breads:** name matches `roll|bun|roosterkoek|bolletjie|papo|swirl roll` → `makes:12`; else (loaf) → `serves:10`.
>    – **pastries:** name matches `nata|pastel` → `makes:12`; else → the `pastries:8` default. ("Sweet Shortcrust Pastry" is a base component → `makes:1` or skip.)
> 3. ⛔ **Do NOT touch the MF110 guard** (`_fromDB`/`_fromAI`/`_source==='chef'` → null). ⛔ **Do NOT touch cakes/cheesecakes/biscuits.**
> **PROOF:** Node probe over `BAKES_RECIPES` → `bakesPortion(r)` returns null for **0 of 101** (was 69). `node --check` clean · doctor RED 10 · one commit.

**Then tablet-verify:** milk tart (serves 8) · potbrood (serves 10) · naan (makes 6) · koeksisters (makes 12) — none may say "4 people" (⚖️ Law 2).
**Ratchet (Law 42):** add MF120 slot/portion checks to the census so "4 people" can't silently regress.

**Locked yield table:** cakes 12 · cheesecakes 12 · biscuits 30 *(done)* · pastries 8 · puddings 8 · flatbreads 6 · deepfried 12 · sconesmuffins 12 · breads (rolls 12 / loaves 10) · pastries (nata 12 / else 8).

---

## 🗺️ The order of work
**MF120 → MF117 → MF121 → MF122**
- **MF120** *(above)* — bakes "4 people" fix.
- **MF117** — MOOD_DB → live `allRecipes()` query; unlocks ~1,278 recipes to "Just Feed Me". Lift the `_budgetPool` pattern. **Also tag the existing Mushroom Beef Stroganoff mood array here.**
- **MF121** — bakes serving scaler (MEASURE FIRST: do bakes ingredients already scale on N?).
- **MF122** — adaptive vessel (`tinFor()` helper + real SA tin ladder; needs MF121).

## 📋 Standing backlog
Two search engines disagree · MF113/MF86 index eating ingredient amounts · MF115 (18 costing fns → 1) · Law 48 vegan⊂vegetarian · Law 47 prose-match bug.

## 🚀 Launch blockers (~10 wks to Oct, own sessions)
MF57 cache · hide tier switcher · MF78 AI cost cap · PayFast R90/mo · localStorage (favs + My Plan) · Home page design.

---

## 📦 Files to carry into the new chat
| file | what to do |
|---|---|
| `TINZA_LAW.md` | drop over the old (Law 53 added) — **main folder, not sections/** |
| `TINZA_RULINGS.md` | drop over the old (LOCALE ruling added) — **main folder** |
| `BEERBOX_CAKE.md` | keep — author into Bakes/cakes later (Choc 🏆 + Vanilla + 3 icing chips) |
| `MOOD_RECIPE_STAGING.md` | keep — running mood collection; graduates to FMF when a mood fills |
| `TINZA_NOW.mermaid` | the board / resume point |

*Push the two doc files (`TINZA_LAW.md`, `TINZA_RULINGS.md`) batched together with the MF120 code deploy.*
