# THE WORLD KITCHEN BUILD PROTOCOL — `/wk`

**Tinza · the structural spec every World Kitchen card must satisfy — jazzed-up or brand-new, right the first time.**
**Pairs with `/wow`.** `/wow` = *is it wonderful?* (voice, moat, method). `/wk` = *is it complete, correctly placed, and correctly displayed?*

---

### How to use it
Type **`/wk`** (with or instead of `/wow`) and I build/fix a World Kitchen card to everything below without you re-explaining. It's the anti-rework gate: a WK card is **not done** until it passes §7. **Code follows both `/wow` and `/wk`** (see the Code brief).

> **Why this exists:** jazzing WK and adding new WK recipes kept needing a second pass (wrong shelf, no leftovers, versions not showing, photo not wired). `/wk` stops that — everything's specified up front.

---

## 1. The complete field set — every WK card carries ALL of these
Nothing may be missing. Order is the house order.

| Field | Rule |
|---|---|
| `id` | `country-dish` (kebab-case, unique — **check for an existing stub before reusing a name**) |
| `name` | native / romanised name |
| `nameAlt` | enticing English gloss (also the search text) |
| `aliases[]` | common English + romanised names people would search/type |
| `photoName` | **§6** — exact image basename, or **omit** if unshot (never point at a missing file) |
| `course` · `type` · `diet` · `cuisine` · `country` · `occasion` | **§2** — `course` decides the shelf |
| `ingredients` | buy-names matching PRICE_DB · per-person · prep goes in the method, not the name |
| `method` | why-led (that's `/wow`) |
| `cookTime` | e.g. `"45 min"` / `"1 hr 15 min"` |
| `kcal` + `nutrition` | **§5** — always, per person (`"protein Xg · carbs Yg · fat Zg"`) |
| `storage` | keeps-how-long + fridge/freezer |
| **leftovers** | **§5** — creative reuse, always (via the leftover engine key or an explicit line) |
| `chefNotes` | the one make-or-break insight |
| `trivia` | the didYouKnow moat (that's `/wow`) |
| `pairsWith` | real, named library dishes — C4-verified, and they resolve as **clickable** goesWith |
| `howThisFeels` | one unique sensory line (never repeated) |
| `servings` · `sharedWith` | portioning |
| `versions[]` | **§3** — proper names + icons where warranted |

---

## 2. Course placement — the shelf rule
`course` decides where the dish appears. Get it right so nothing lands wrong.

- **main** — centre-of-plate (Moussaka, Souvlaki, Youvetsi, Bacalhau à Brás).
- **starter / meze** — small plates, dips, appetisers (Tzatziki, Dolmades, Saganaki, Taramasalata).
- **side** — accompaniments, vegetable & small grain dishes (**Briam, Strapatsada**, Horta, Skordalia-as-side).
- **dessert** — sweets (Baklava, Loukoumades, Pastéis de Nata).
- **soup · salad · bread · drink** — as their nature.

**Test:** "Would a Greek serve this *as* the meal, or *alongside* it?" Alongside → side. A veg medley or an egg-scramble is a **side**, not a main.

---

## 3. Versions — display in full, by name
- Every version has a **proper name + icon** — never "Version 2." (`🏆 Classic Beef · 🐑 Lamb · 🌱 Vegetarian`.)
- The card shows a **"CHOOSE YOUR VERSION"** selector with **all** versions as labelled pills; the default is marked.
- Applies everywhere — **World Kitchen, cakes & bakes, all sections** — a card with `versions[]` must render the selector. (If versions exist in the data but don't show, that's a render bug to fix, not a data gap.)
- Structural and delta versions display identically to the user.
- Fame guide (from `/wow`): 5 / 4 / 2 / 1 versions by fame, or where one technique carries many fillings.

---

## 4. The standardised UI — boxes & colours (locked)
Every card renders through the shared components — never bespoke.

- **Colour law (non-negotiable):** **green = food cost** (per-person + total) · **gold = shop-spend** (pack-rounded).
- **Boxes, in house order:** cost (green/gold) → version selector → ingredients (qty box) → method (numbered, per-step timer) → chef notes → nutrition → storage → **leftovers** → did-you-know → goes-well-with (clickable pills) → share.
- Palette/type: warm Spice palette (Fraunces / Mulish / DM Mono). Access gates are tier levels (0/1/2), never booleans.
- All of this comes free from the shared `recipePage()` engine — build the data right and the boxes are automatic.

---

## 5. Leftovers + calories — always there
- **Calories/nutrition:** every card has `kcal` + a macro line, per person. No blanks.
- **Leftovers:** every card surfaces reuse advice — through the leftover engine (keyed to the base ingredient) or an explicit line. Safety lines are always free; creative reuse + storage rows are Pro-gated. **(Greece currently missing this — flagged.)**

---

## 6. Photo — the `photoName` rule
- Images live in `Images/Image/`, resolved by **`photoName || name`**, accents stripped, **case-sensitive on the live server**.
- **If an image exists:** set `photoName` to its **exact basename** (case-exact).
- **If not shot yet:** **omit `photoName`** → clean emoji fallback. **Never** point `photoName` at a missing file — that breaks the pre-push gate.
- New-shoot naming convention: **romanised dish name** (`Moussaka.jpg`, `Baklava.jpg`) — *(confirm with Tina; some legacy images use `Native (English).jpg`)*.
- **Run `node Tools/photo-audit.js` before every push** (green = 0 broken). `--missing` gives the shoot-list.

---

## 7. The `/wk` checklist — a card isn't done until every box is ticked
- [ ] All §1 fields present (no blanks)
- [ ] `course` correct — right shelf (§2)
- [ ] `kcal` + nutrition present (§5)
- [ ] leftovers present (§5)
- [ ] versions named + icon'd, selector shows (§3)
- [ ] cost shows green/gold correctly (§4)
- [ ] `pairsWith` real, verified, clickable (C4)
- [ ] `photoName` exact-or-omitted; audit green (§6)
- [ ] ingredients in PRICE_DB buy-names, no price guessed (log gaps)
- [ ] **passes `/wow`** (voice, moat, earns-its-place)
- [ ] `node --check` clean

---

## Locked decisions
1. **Photo naming:** new shoots use the **romanised dish name** (`Moussaka.jpg`, `Baklava.jpg`) — never native script. Wire `photoName` to it once shot.
2. **Bakes yield & the Batch Law** (Tina-approved 6 Jul): bakes are **yield-based, not per-person** — never scale below one batch; the people-dial rounds **up** to whole batches, and each card states **"makes ~N"**.
   - **Sliceable defaults:** cake **12** · cheesecake **12** · tart **8–10** · loaf **10** (a slice = 1 portion). A card may override (rich cake → 16).
   - **Batch treats** (biscuits/cookies/rusks) — **"makes ~N" by piece size:** small/amaretti **~40** · medium **~30** · large **~18** · rusks **~40**. Portion = 2–3 small / 1–2 large.
   - **Countable singles** (rolls·muffins·scones·cupcakes·vetkoek·koeksisters·doughnuts): 1 item = 1 portion; card carries its own item yield.
   - **This is the fix for the "shows 4 people but portioned for 12" bug** — the bakes qtyBox must show the true yield, never a default 4.

---
*Companion files: `/wow` = WOW_STANDARD.md · design system (palette/fonts/letter sizes/box styles) = TINZA_BUILD_CHECKLIST.md Part 2 (NOT a separate `/` — applied automatically by the shared `recipePage()` engine) · Code brief = TINZA_CLAUDE_CODE_BRIEF.md (references both `/wow` and `/wk`).*
