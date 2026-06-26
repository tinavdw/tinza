# CLAUDE.md — Tinza

> Read this every session before touching code. These are **locked rules**, not suggestions.
> Repo: `tinavdw/tinza` · Live: https://tinza.netlify.app · Vanilla JS, modular `sections/` + shared `core.js`.

---

## 0. RULE ZERO — SAMENESS (top priority)

Every page looks and functions **identically**. Uniformity comes **ONLY** from shared `core.js`
functions using `var(--token)` — never from per-section hand-rolled markup, never hardcoded hex.

- Shared builds ALWAYS roll to **ALL** sections simultaneously.
- If two sections differ, that is a bug to close, not a style choice.
- Shared renderers: `warmCard`, `recipeRow`, `qtyBox`, `sectionHeader`, `methodStep`,
  `crossLinkBox`, `goesWellBox`, `planDishRow`, `shoppingView`, `planView`, `recipePage`.

**Migration sequence (Standard §10):**
recipe-opener migrations → cross-links → ONE shared plan-row + shopping renderer → cosmetic sweep LAST.
**Tactical order right now:** FINISH EVENTS → Spice → universal opener + page-compare.

---

## 1. STABILITY RULES (non-negotiable)

1. **Never edit a working section** unless that section IS the session's purpose.
2. **Start every session at https://tinza.netlify.app** — confirm what works before changing anything.
3. **GitHub is the backup.** If something breaks, restore from the last commit.
4. **`node --check` before every push.** No exceptions.
5. **Go into the actual live code to verify.** Never trust summaries or stale line numbers.
6. **Every section matches braai v33 exactly.** No exceptions.

---

## 2. PUSH WORKFLOW (GitHub Desktop)

1. `node --check` each changed file.
2. In GitHub Desktop: **Show in Explorer** → drag file into `sections/` → delete old →
   rename / Replace → commit → push.
3. `LF→CRLF` warning is **harmless** — ignore it.
4. **Netlify is credit-based.** Batch validated files into ONE push. Turn off unneeded deploy previews.
5. **PWA service-worker caches aggressively** — clear cache + reopen after every deploy.
6. Always push to GitHub after each completed session.

---

## 3. DESIGN SYSTEM (locked)

**Palette — warm Spice, ships LIGHT + DARK (dark = intentional night mode, not drift).**

| Use | Token / Hex | Rule |
|-----|-------------|------|
| Food-cost **text** | deeper green `#46530c` | GREEN = food cost ONLY |
| Shop-spend **text** | deeper gold `#876213` | GOLD = shop-spend ONLY |
| Accent dots / chip fills | bright green `#c8e840` · bright gold `#f5c842` | fills only, never text |

**Never mix green and gold meaning.** Green = food cost. Gold = shop-spend. Full stop.

**Fonts:** Mulish = body/UI · Fraunces = h1/h2/h3/titles · DM Mono = numbers/chips.

**Hard rule:** sameness only via shared `core.js` functions using `var(--token)`. Never hardcode hex in a section.

---

## 4. COSTING (locked §6.4 / §4c)

- **Plan dish-row** = dish name + grams TOTAL under the name + GREEN per-dish food-cost TOTAL
  on the right (label "Food cost").
- **Gold = shopping list only** — the two-total shopping view:
  - "What food costs" (green) + "What you'll spend" (gold) + plain-English gap explanation.
- `shoppingView` additive hooks (backward-compatible, byte-identical for food sections):
  - `qtyStr` = pre-formatted qty per item.
  - `noCost` = hide cost totals/explainer (used by Beverages, Cakes).

---

## 5. PORTION BRAIN (locked §6.1)

- Everyday grams: boneless **180**, bone-in **250**, fish **160**, veg **200**, side **150**.
- BRAAI tier: boneless **300**, bone-in **400**, fish **280**, shellfish **320**.
- `calcMeat` reads the **CUT** via `braaiBaseG` (`BRAAI_CUT → PORTION_BRAAI`),
  **NOT** per-meat `soloG`/`sharedG`.
- Taper: 1 = 100%, 2 = 70%, 3 = 58%, 4+ = 50% each. Then +10% buffer + appetite.
- Excluded from taper: Budget / Tiny / Furry / Anchor.

---

## 6. FREE / PAID (locked)

- **No third-party ads. Ever.**
- **Pro = R50/month (FINAL).** Matches SA market.
- **Access gate = numeric tier level** `0 = Free`, `1 = Pro`, `2 = Deluxe` — **NOT a boolean.**
  (Lets Deluxe land later without re-plumbing.)
- **Free:** browse · cook/view full recipes · scale +/- · 1 dietary restriction · calories ·
  Anchor Ingredient open.
- **Pro:** everything else — cost · My Plan · shopping · downloads · full nutrition breakdown ·
  all dietary restrictions · AI Chef · pantry · leftovers · etc.
- **Calories always free; full nutrition breakdown = Pro.**

---

## 7. INGREDIENT STANDARD

- **Name** = what you BUY, matching `PRICE_DB`.
- **Amount** = weight (g/kg) + pack hint.
- **One ingredient per line.** No "+" combined lines. (Split "Oil and butter" etc. into priceable items.)
- **Prep goes in METHOD**, never in the ingredient name.
- Duplicate rules: same dish + same name → keep most comprehensive.
  Same ingredients + different cultural names → keep both.

---

## 8. EVENTS ARCHITECTURE (locked)

- "Events" is an **umbrella name only**.
- Every item — **Buffet · Cakes · Beverages · Finger Foods · Kiddies** — is an equal standalone
  section with its **OWN My Plan**.
- **Cultural tab deleted** (content → World Kitchen). Do NOT migrate the Cultural block — delete it.
- **Finger Foods = its own standalone section.**

---

## 9. NAMING

- "Starchy" / "Starches" → **"Side Meals"** everywhere.
- Toum master name = **"Toum (Garlic Cream)"**.

---

## 10. DEFINITION OF DONE (verify before saying "done")

A migration is NOT done until Claude has **verified in live code**:

- [ ] My Plan **opens** for the section.
- [ ] Scale **+/-** works and re-costs correctly.
- [ ] Shopping list **sums shared ingredients** across selected dishes (no silent drops; counts/eggs appear).
- [ ] **Scroll restores** on back-nav (popstate → `root._savedScroll` → `draw()`).
- [ ] Routing/dispatch: no stale tab short-circuit; selected sauces reach the plan.
- [ ] `node --check` passes on every changed file.

Keep this WRITTEN (not Playwright). When a bug recurs, log it in **Known Issues** so it can't silently return.

---

## 11. SESSION WORKFLOW

1. Start from **`TINZA_NOW.mermaid`** (canonical session-state). It's uploaded at session start,
   updated at session end.
2. **Verify findings in live code** — never trust summaries or stale line-number references.
3. Hand back **exact Claude Code briefs**: find/replace anchors + backup command + `node --check`,
   in ONE pasteable block.
4. End every session with an **updated flowchart**.

**Reference docs:** `TINZA_BUILD_CHECKLIST.md` (Part 1 = A–P checklist, Part 2 = locked design system) ·
`TINZA_WEDDING_BAR_PLANNER.md` · `TINZA_SPICE_MIGRATION.md`.
