# TINZA — FMF VEGAN BREAKFAST BATCH · BRIEF
**Status:** LOCKED by Tina, 11 Jul 2026. Do not re-open the lineup.
**Why it matters:** this is the last content blocker on FMF. After this → MF16 cuisine-tag sweep → FMF closed.
**Target file:** `sections/meals.js` → BREAKFAST array
**Standard:** `/wow` (WOW_STANDARD.md) + the Fable Brief voice rules

---

## THE LOCKED 12

### 🌍 Global (7)

| # | Card | Cuisine | The make-or-break "why" |
|---|------|---------|--------------------------|
| 1 | **Tofu Scramble** *(HERO + chips)* | Global | Press the water OUT (weight it, 20 min) or it steams instead of browns. **Kala namak** (black salt) supplies the sulphur note that makes it read as egg — say so, and say why. |
| 2 | **Savoury Chickpea-Flour French Toast** | Indian | Gram flour's protein + starch SETS like egg. It is not a substitute — it's a better batter. Rest the batter 10 min so the flour hydrates or it tastes raw and chalky. |
| 3 | **Ful Medames** | Egyptian | Ancient, dirt cheap, vegan by birth — not "veganised". Mash only HALF the beans: texture is the whole dish. Finish with olive oil, cumin, lemon off the heat. |
| 4 | **Black Bean & Charred Corn Breakfast Tacos** | Mexican | Char the corn DRY in a screaming pan — no oil, no crowding. Real named spices only (cumin, smoked paprika, oregano, coriander). **NEVER generic taco seasoning** — locked rule. |
| 5 | **Savoury Congee** | Chinese | Cheapest card on the shelf. Rice-to-water ratio + time is the whole law — it must collapse, not boil. Stir late, not early. |
| 6 | **Overnight & Baked Oats** *(HERO + chips)* | Global | Meal-prep anchor. Batch Law applies — states "makes ~N". |
| 7 | **Banana & Pecan Pancakes** | Global | Overripe banana → wires straight into the **leftovers engine** (base-leftover key must be used, not invented). |

### 🇿🇦 South African (5) — these are the cards nobody else has

| # | Card | The make-or-break "why" |
|---|------|--------------------------|
| 8 | **Krummelpap & Chakalaka** | The SA breakfast that was vegan all along — no apology, no "vegan version of" framing. Krummelpap law: water first, mealie meal in dry, fork through — never stir it to a paste. |
| 9 | **Samp & Beans Breakfast Bowl (Umngqusho)** | The overnight-soak law. Salt goes in LATE or the bean skins never soften. Genuine SA classic → keeps SA warmth (Fable Brief exception). |
| 10 | **Curried Bean Vetkoek** | Honestly better than the mince version — say it. Dough temperature + oil temperature law: cold dough into hot oil = raw middle. |
| 11 | **Boerewors-Spiced Lentil Patties** | The flex card. Real boerewors spice — coriander (toasted, the dominant one), clove, nutmeg, allspice, black pepper. Lentils must be DRY before they're bound or the patty collapses. |
| 12 | **Tamatie-Smoor on Toast** | Voice B: the humblest dish gets full WOW treatment. Smoor law = cook the onion long and low FIRST; the tomato goes in only when the onion is sweet. Everyone rushes this and that's why theirs is sour. |

---

## HARD CONSTRAINTS

### 1. Do NOT create a vegan Shakshuka card
Shakshuka already exists as a HERO with 5 version chips (Charred & Feta, Classic Tunisian, Budget Tinned-Tomato, 15-Minute Weeknight, Green Shakshuka).
→ A vegan variant is a **CHIP on the existing card**. Not a new card. **Duplicate rules apply.**

### 2. Do NOT duplicate Chakalaka
Chakalaka already exists in the library (and is queued for cross-section → Spice).
→ Card #8 **cross-links** to it. It does not restate the Chakalaka recipe.
→ Same check before building: `Chakalaka Baked Eggs` (breakfast) already exists — #8 is a *different dish*, that's fine.

### 3. PRICE_DB — verify before authoring, do not assume
Costing just went 87% → 96% and load-bearing wrong prices are at **zero**. Do not put that back.
- **`kala namak` (black salt)** — almost certainly a NEW line. Required by #1.
- **dried fava / broad beans** — likely NEW. Required by #3.
- **corn tortillas** — verify. Required by #4.
- Everything else should price off existing lines. **Code must confirm each ingredient resolves in PRICE_DB before the card is written**, not after.

### 4. Ingredient Standard
Name = what you BUY, matching PRICE_DB. Amount = weight g/kg + pack hint. One ingredient per line, **no "+" lines**. Prep goes in the method, never the name.

### 5. goesWith realness
Only real, named, existing library dishes. No invented sides. (Correction 4 — strictly enforced.)

### 6. Nutrition + storage
Every card: full nutrition grid, `storage` with `freezes` and `fridgeDays`. Nutrition grid = Pro; Free sees the locked teaser.

### 7. Cuisine tags
Set `cuisine` on all 12 **as they're written**. Do not leave them for the MF16 sweep — that sweep is for the *existing* backlog, not for new debt.

---

## BANKING — two banks. Cutoff Law.

**BANK A (6):** Tofu Scramble · Chickpea French Toast · Ful Medames · Breakfast Tacos · Congee · Overnight & Baked Oats
**BANK B (6):** Krummelpap & Chakalaka · Samp & Beans · Curried Bean Vetkoek · Boerewors-Spiced Lentil Patties · Tamatie-Smoor · Banana & Pecan Pancakes

Do not attempt both in one session.

---

## ⚖️ BEFORE PUSH — the hard rule

`node --check` **PROVES NOTHING.** It passed on a zero-byte `spice.js`.

Required, every time:
1. **Render-prove** — run the real engine functions over the merged pool in Node
2. **Check FILE SIZE** (min-size guard)
3. **Check RECORD COUNTS** — breakfast should go 57 → 69
4. All file writes via **Node `fs.writeFileSync`** — never Python
5. Confirm **12 new unique IDs, zero duplicates**

---

## ALSO STILL OPEN (do not lose)
- ⚠️ `makeable.js` **still needs its script tag in `index.html`**
- ❓ **Sides & Basics** — wired + reachable, but logged 7 Jul as "last FMF room, WIP, needs authoring". **Confirm status — FMF may not close on this batch alone.**
