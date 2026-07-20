# TINZA FACET ARCHITECTURE

**Status:** design, unruled
**Raised:** 20 Jul 2026
**Reason:** Law 56 (facets belong to the version) plus the Vegetarian Bobotie
problem — a version that qualifies for a filter the record does not.
**Do not build from this yet.** It needs Tina's rulings in §6 first.

---

## 1. The core rule

> **Search matches ANY version. Display describes THE SELECTED version.**

Vegan Bobotie surfaces in a vegan search because a version qualifies, and it
**opens on that version**. The mince version is never shown to someone who
filtered vegan.

Two consequences, both structural:

- **Search results are `(record, version)` pairs, not records.** A search hit
  must carry which version matched. Without this, the person lands on a page
  that contradicts the filter that got them there.
- **Every derived claim re-renders when the version chip changes.** Cost, diet
  badge, allergens, calories, alcohol status. If it was derived from
  ingredients, it moves when the chip moves.

### The safety inversion

Diet and allergens fail in opposite directions and must not share a rule:

| | Miss | Consequence |
|---|---|---|
| **Diet** | Vegan bobotie not found | Lost sale |
| **Allergens** | Record says nut-free, version has peanuts | Harm |

So: **diet searches permissively** (any version qualifies → show it).
**Allergens display conservatively** (only ever describe the selected version;
never inherit a clean record-level `contains` onto a version that adds one).

`contains` is currently one of the seven locked reserved fields at
**record** level. That is the contract hole. It is genuinely version-level.

---

## 2. Three layers

Every facet sits in exactly one layer. If we cannot say which, it is not ready
to build.

**Layer 1 — RECORD (identity).** True of every version. Does not move.
Name, section, cuisine/origin, slot, mood tags, meal time, technique.

**Layer 2 — VERSION (derived from ingredients).** Law 56. Moves with the chip.
Diet, allergens, cost, nutrition, alcohol, time, portion.

**Layer 3 — USER (state).** Per person, not per recipe.
Favourited, recently viewed, made before, rated, in a plan.

The bugs so far have all been layer-1 answers to layer-2 questions.

---

## 3. Facet inventory

`V1` = needed for October. `L` = later. `INT` = internal tool, not user-facing.

### 3.1 Dietary and belief

| Facet | Layer | When | Source |
|---|---|---|---|
| Vegetarian | VERSION | V1 | derived from ingredients |
| Vegan | VERSION | V1 | derived |
| Pescatarian | VERSION | L | derived |
| Banting / low-carb | VERSION | L | derived — **big in SA, worth V1 if cheap** |
| Diabetic-friendly / low sugar | VERSION | L | derived |
| Low sodium | VERSION | L | derived |
| High protein | VERSION | L | derived |
| Halaal | — | **NOT A FILTER** | Law 57 — certification, not derivable |
| Kosher | — | **NOT A FILTER** | Law 57 — certification, not derivable |
| No pork | VERSION | V1 | derived — serves both communities |
| No shellfish | VERSION | V1 | already in the 10 allergen tokens |
| Alcohol-free | VERSION | V1 | Law 55 gate, already built |

Gluten-free, dairy-free and nut-free are **not** separate facets. They are
allergen absences. Derive them from `contains`, never store twice.

### 3.2 Allergens — 10 tokens, SA R146 + sesame

| Facet | Layer | When |
|---|---|---|
| `contains` (all 10) | **VERSION** | V1 |
| "exclude recipes containing X" filter | VERSION | V1 |

Highest-stakes facet in the app. Must move to version level before any more
variants are written, or the debt compounds with every /wow session.

### 3.3 Time and effort

| Facet | Layer | When | Note |
|---|---|---|---|
| Total time | VERSION | V1 | a Quick version is faster |
| **Active vs passive time** | VERSION | V1 | 12h prove with 15min hands-on is not "slow" — this distinction is worth having |
| Make-ahead | RECORD | L | |
| Difficulty | RECORD | L | |
| Ingredient count | VERSION | V1 | already have a 4-Ingredients section |
| Step count | VERSION | L | |

### 3.4 Cost

| Facet | Layer | When | Note |
|---|---|---|---|
| costPP | **VERSION** | V1 | **affects MF124 — see §5** |
| Budget tier (Indulge / Standard / Pantry) | VERSION | V1 | already a profile toggle |
| Sub-R10pp band | VERSION | V1 | PPZ1, already queued |

### 3.5 Storage and keeping

| Facet | Layer | When |
|---|---|---|
| Freezes | RECORD | V1 |
| fridgeDays | RECORD | V1 |
| Good cold / next day | RECORD | L |
| Lunchbox-able | RECORD | L |

Already in the WOW standard, so the data largely exists.

### 3.6 Method and equipment

| Facet | Layer | When | Note |
|---|---|---|---|
| No-cook / raw | RECORD | V1 | Tina named this |
| One pot / one pan | RECORD | V1 | strong everyday filter |
| **No electricity needed** | RECORD | **V1** | **load-shedding. Gas, fire or cold only. Genuinely SA-first and no global app has it.** |
| Braai / open fire | RECORD | V1 | mostly section-implied already |
| Oven-free | RECORD | V1 | |
| Stovetop only | RECORD | L | |
| Air fryer | RECORD | L | |
| Slow cooker / potjie | RECORD | L | |
| Needs special equipment | RECORD | L | mixer, processor, thermometer |

### 3.7 Origin

| Facet | Layer | When |
|---|---|---|
| Cuisine / country (Italian, Thai…) | RECORD | V1 |
| Region (Cape Malay, Zulu, Boerekos) | RECORD | V1 |
| Continent | RECORD | V1 |

Tina's example. Mostly derivable from existing World Kitchen structure.

### 3.8 Occasion

| Facet | Layer | When |
|---|---|---|
| Slot | RECORD | V1 — done |
| Mood (12 shelves) | RECORD | V1 — 1 of 12 tagged |
| Meal time | RECORD | V1 |
| Crowd size / scales to | RECORD | L |
| Season | RECORD | L |

### 3.9 Ingredient-based

| Facet | Layer | When |
|---|---|---|
| Anchor ingredient | VERSION | V1 — exists, free tier |
| Contains ingredient X | VERSION | V1 |
| Excludes ingredient X | VERSION | V1 |
| Pantry-only | VERSION | L |
| Leftover-friendly | RECORD | L — profile toggle exists |

### 3.10 Internal

| Facet | Layer | When |
|---|---|---|
| Has photo | RECORD | INT — photo-audit already |
| WOW'd yet | RECORD | INT |
| Has description / has time | RECORD | INT — the 20 Jul card-completeness gap |
| slotSource unresolved | VERSION | INT — census |

---

## 4. The single door

One function, in Node, run at build:

```
deriveFacets(effectiveIngredients, method) -> { diet, contains, alcohol,
                                                costPP, nutrition, time }
```

- **Effective ingredients** = base ingredients + that version's overrides.
- Runs **once per version**, never per record.
- **Never hand-typed.** Existing ruling: tags are derived in Node, never by
  hand. Law 56 extends it to every derived facet.
- Every derived value carries which version produced it.

This is `normalizeRecipe()`'s sibling and probably belongs beside it. Note that
`normalizeRecipe()` currently has no slot handling either — the eighth-reserved-
field ruling is still owed and should be settled in the same sitting.

---

## 5. Impact on MF124 — read before starting

If costPP is derived from base ingredients and versions change ingredients,
**cost is version-level** and selecting a chip should change the price.

Code must check this before fixing costing, or it will fix at record level and
redo the work. Birchermuesli at R510 may itself be a version artifact — a
version's ingredient overrides landing on the base calculation.

Measure first. Do not build the facet architecture as part of MF124.

---

## 6. Rulings owed before anything is built

1. ~~**Halaal and Kosher.**~~ **RULED 20 Jul — Law 57.** Tinza makes only
   claims derivable from the ingredient list. Certification and sourcing claims
   — halaal, kosher, organic, free-range, grass-fed, line-caught, fair-trade —
   are never asserted, because they depend on provenance and supervision we
   cannot see. Halaal and kosher are **certification** properties, not
   ingredient properties: they turn on slaughter method and supervision, so
   they cannot be derived in Node and would break the derive-never-hand-type
   rule.

   **Instead expose the derivable components as filters:** no pork, no alcohol
   (Law 55 gate, built), no shellfish (already in the 10 allergen tokens).
   Someone keeping halaal or kosher combines those and applies their own
   judgement on sourcing. Useful to them, and a claim we can stand behind.

   Precedent: NYT Cooking filters by diet, cuisine, meal type, time, skill,
   ingredient and occasion — no halaal or kosher filter found. Paprika ships no
   dietary taxonomy at all and hands custom tagging to the user. Both stay on
   ingredient-derivable ground. We do the same, but say so out loud.
2. **`contains` moves to version level.** Amends the seven-field reserved-slots
   contract. Is that an amendment or an eighth field?
3. **Filter plus version conflict.** Someone filters vegan, opens Bobotie on the
   veg version, then taps the mince chip. Hide non-qualifying chips? Dim them?
   Warn? Allow silently? Allergen filters probably answer differently from diet
   filters.
4. **Free vs Pro.** Diet badge is free, diet filter is Pro. Where do the new
   facets land? **Allergen filtering should be free** — a paywall on "does this
   contain peanuts" is not defensible.
5. **V1 scope.** The V1 column above is a proposal, not a ruling.

---

## 7. Sequence

1. **MF124 first.** Costing is a launch blocker; this is not.
2. Measure: how many records have versions, how many versions change a derived
   facet, what search currently reads.
3. Rule §6.
4. Build `deriveFacets()` and make search return `(record, version)` pairs.
5. Then resume /wow. **Every /wow session after this point should produce
   version-aware facets**, or the debt grows with each one — which is the whole
   reason to settle it now rather than in November.
