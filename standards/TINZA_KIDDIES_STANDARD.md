# TINZA — KIDDIES PARTY MENU STANDARD (LOCKED 26 Jun 2026)

The one shape every theme follows. No theme deviates. "Sameness" applied to
menu composition, not just code — so a Dino party and a Mermaid party are the
same skeleton with different costumes.

---

## 1. CORE MENU — 8 themed dishes, identical shape every theme

| Slot | Count | What it is |
|------|-------|-----------|
| 🍖 Meaty | **3** | Protein mains — chicken strips, mini pizzas w/ meat, meatballs, burgers, hot dogs |
| 🥪 Savoury | **2** | Lighter savoury bites — pinwheels, cheese balls, pastry stars |
| 🍬 Sweet | **2** | Treats — brownies, fudge, cookies, dirt cups |
| 🥦 Healthy | **1** | The fruit/veg slot — fruit skewers, snack board, yogurt cups |

**Total = 8 core dishes per theme.**

Meaty is tracked as a `meaty:true` flag on a savoury-type recipe (NOT a new
browse category), so the browse screen stays simple (one "Savoury" tab shows all
5) while the menu builder enforces 3 meaty + 2 other savoury. Avoids re-plumbing
the category screen — same discipline as the numeric tier gate.

---

## 2. ADD-ON SPINE — automatic, identical every theme

| Add-on | Rule |
|--------|------|
| 🎂 Cake | **1** showstopper, serves the party |
| 🍿 Popcorn | **1** themed type ONLY — lives as the add-on, NEVER a core recipe |
| 🥣 Dips | **2** (down from 3) |
| 🥔 Crisps | **1** line — 1 × 120g packet per 4 kids |
| 🥤 Cooldrink | **400ml per child** (see §3) |

---

## 3. PORTIONING — set amount per child, NO occasion tiers

Kids ≠ Finger Foods. Finger Foods needs tiers (12–15 / 5–6 / 4–5 pieces pp)
because it's *pick-your-own* — a per-person total divided across chosen types.
The kids menu is **curated and fixed**, so we set pieces-per-child directly.
A kids party has one context: the spread IS the party food.

| Item | Per child |
|------|-----------|
| Each meaty dish | **2 pieces** |
| Each savoury dish | **2 pieces** |
| Each sweet dish | **2** (or **1** if a full cup / serving / bark) |
| Healthy dish | **1 portion** |
| Cake | **1 slice** |
| Popcorn | **1 cup** |
| Crisps | **30g** (1 × 120g packet ÷ 4 kids) |
| Dips | shared, ~2 spoons |
| Cooldrink | **400ml** |

Spread per kid ≈ 10 savoury bites + ~4 sweets + healthy + cake + nibbles.
Generous with leftovers — what parents want at a party (better over than under).

**`base12` = built to deliver these exact counts for 12 kids.** The plan adapter
scales ×k/12; the engine never re-portions.

---

## 4. COOLDRINK — both methods honour 400ml/child

Current state is broken: every theme *claims* `perChildMl:400` but the homemade
recipes actually deliver 208–417ml/child (none match). Fix:

- **Homemade:** scale each drink's `base12` to total **4,800ml for 12 kids**.
- **Store-bought:** hint = **2 × 200ml glasses = 400ml/child** (already worded this way).

Both must land on 400ml/child.

---

## 5. RULES (the "never deviate" list)

1. Popcorn lives ONLY as the add-on — never a core recipe.
2. Healthy slot = the theme's fruit/veg option.
3. Drink homemade + store-bought both deliver 400ml/child.
4. Sweet "full-serving" items (cup, bark) count as 1/child, not 2.
5. Every theme = exactly 8 core dishes in the 3/2/2/1 shape + the full add-on spine.

---

## 6. PARKED (decided NOT to build now)

- **"Little kids / big kids" age-appetite toggle** (≈×0.7 for littlies, mirrors
  Portion Brain appetite). This — not occasion tiers — is the one knob that would
  actually matter for kids. Locked OUT of v1 to avoid over-building; revisit
  post-launch.

---

## 7. WHAT THIS STANDARD COSTS TO IMPLEMENT (honest scope — corrected)

The recipes and photos ALREADY EXIST. This is curation + re-tag + data tidy,
NOT writing new content. Inventory confirmed in repo:
- 56-recipe finger-food library (EVENTS_FINGER_FOODS) — meaty/savoury, photographed
- 16 kids extra snacks (KIDS_EXTRA_SNACKS, subset of the above)
- Each theme's 6–7 recipes + themed popcorns — all photographed (870 images on disk)

So reaching **3 meaty + 2 savoury + 2 sweet + 1 healthy = 8/theme** is:
- **Re-tag** existing savoury recipes → meaty vs savoury (`meaty:true`).
- **Assign** existing library snacks into any short slots per theme (they already
  have recipes + photos — no writing). Decide the per-theme mapping.
- Remove doubled popcorns (Unicorn, Space) — slot already covered by the add-on.
- Drop 1 dip from all 12 themes' `dips` arrays.
- Rescale all 12 homemade drinks to 4,800ml/12.
- Set every recipe's `per` to the §3 standard + confirm `base12` matches.

→ A curation + data session (maybe two), NOT a content-writing project.
  Separate from the engine migration (E2, done).
