# TINZA — /wk Standard Addendum · 10 Jul 2026
### (from Tina's morning Portugal review — fold these into TINZA_WK_STANDARD.md)

---

## ★ A. LOCALE / COUNTRY ARCHITECTURE  *(strategic — affects Oct launch)*

**The realisation:** the snoek-vs-bacalhau problem isn't a cod problem — it's the first symptom of a missing **locale layer**. Ingredient names, measurements *and* pricing are all country-dependent. Handling them per-card (ad-hoc notes) doesn't scale and will bite us across the whole World Kitchen.

**The shape Tina wants** (confirmed by her example): one setting per user — *SA → snoek · Europe → bacalhau · UK → cod* — chosen when subscribing/downloading.

### Proposed design — "canonical data, localised rendering"
Store each recipe **once** in canonical form; apply a locale layer at display time.

1. **Locale setting per user** (signup + changeable in settings). Drives naming, units, currency.
2. **Ingredient name overrides — sparse map.** Most ingredients are universal (a tomato is a tomato). Only a subset differ by country: salt cod, sausages, tripe, meat cuts, flours, cheeses, some fish/veg. Structure:
   `{ name:"salted cod (bacalhau)", localeNames:{ ZA:"salted cod (bacalhau) — or salted snoek at a push, not identical", UK:"salted cod", US:"salt cod" } }`
   Only fill overrides where it genuinely differs. **The cod family is override entry #1** — this supersedes the per-card snoek note.
3. **Measurements.** Store canonical **metric (g/ml)**; convert to imperial (oz/lb/cups) at render for US. Pure render-time function, no data duplication.
4. **Pricing.** Currency + price table **per locale**. This is the expensive part — rand costing is the core differentiator and only exists for SA.

### Recommendation for Oct launch  *(decision needed)*
- **Launch SA-first, fully supported** (naming + metric + rand costing).
- **Build the locale *field* + the sparse override mechanism NOW** so it's not a painful retrofit and so writing/coding stop hard-coding SA — but **don't gate Oct on multi-country**.
- Other locales (UK/US/EU) = **fast-follow**. Until their price tables exist, non-SA users get browse + cook + scale but **"costing coming soon"** (which already matches how the Free tier hides costing).
- **How many countries:** start with **1 live (SA)** + architecture ready for ~3 (UK, US, EU/Portugal). Confirm this scope before Code writes more locale-sensitive content.

**Writing implication (new /wk rule):** authors write the canonical/authentic name and fill locale overrides *only* where the item differs. No more per-card country hacks.

---

## ★ A2. DRIED ⇄ FRESH CONVERSION + SUBSTITUTES  *(researched 10 Jul)*

**The problem generalises beyond cod.** Dried/cured ingredients differ from their fresh form in **both weight and price-per-kg** — because drying removes water (you're paying for the 2–3× fresh weight that was dried away). Confirmed ratios:
- **Salt cod:** gains only ~**33–35%** weight when soaked — never returns to fresh weight. Fresh-equivalent factor ≈ **1.35** (150g salt cod → soaks to ~200g → swap with ~200g fresh white fish).
- **Biltong:** ~**50%** weight loss (wet) up to ~**65–70%** (dry). 1kg fresh → ~500g (wet) / ~300g (dry). Fresh-equivalent factor ≈ **2.0** (wet) / **3.0** (dry).

**The mechanism — a substitute is a name + weight + price TRIPLE, not a name-swap.** Extend the ingredient model:
```
{ name:"salted cod (bacalhau)", form:"dried-salted", priceKey:"salted-cod",
  freshEquivalent:{ factor:1.35, note:"soaks ~35% heavier; buy ~1.3× weight in fresh fish to swap" },
  substitutes:[
    { name:"salted hake",        priceKey:"salted-hake",  factor:1.0,  similarity:"closest texture; salt fresh hake ~24h" },
    { name:"salted snoek",       priceKey:"salted-snoek", factor:1.0,  similarity:"available/traditional; oilier & stronger — not identical" },
    { name:"fresh hake/tilapia", priceKey:"fresh-hake",   factor:1.35, similarity:"cheapest/easiest; salt a day ahead for depth" }
  ] }
```
Costing/render engine: show the specified item + its cost; offer substitutes as taps that **recompute weight (× factor) and cost (× their price)**. The **locale layer picks which substitute is the default surfaced** (SA → hake/snoek prominent; EU → bacalhau default). This unifies locale naming + substitution + dried↔fresh + honest two-cost in one mechanism.

**SA cod option ladder** (authentic → available): bacalhau (real, dear) → salted hake (closest, salt it yourself) → salted snoek (oilier, honest caveat) → fresh hake/tilapia (cheap, lighter). Weight note: soak-gain ~1.35, so fresh swap ≈ 1.3× the weight.

**/wk RULE (new):** any dried/cured/reduced ingredient carries `form` + `freshEquivalent.factor` + its own `priceKey`; substitutes are name+price+weight triples. Applies to cod, biltong, dried mushrooms, sun-dried tomatoes, dried chilli, etc.

---

## ★ B. NEW /wk RULES  *(from the review)*

**B1 · Ingredient specificity.** Name the exact thing and, where it matters, the form:
- Not "tripe" → **beef honeycomb tripe** (state type; PT tripas à Porto = beef). SA/UK sell pork/sheep/beef — locale swap note.
- Not "sausage" → name it (**chouriço**, morcela, farinheira…) + pork/beef + smoked/not. Locale swap for what's available.
- Not "goat" → **goat leg / shoulder / cubed** (state cut).
- Meat cuts state form where buying is affected (pork shoulder → the method must say *cubed*; duck → whole/legs not breast).

**B2 · Method completeness.** Every meat/veg prep (cut form, handling) stated in the method. **No card ships with a single trivial method step** — minimum real steps for the dish. (See D-audit.)

**B3 · goesWith standard (tighten existing C4).**
- Must **link to a real house recipe** where one exists (Broa de Milho, a named salad, a named bread).
- Generic terms ("bread", "green salad", "greens") → resolve to a **specific named house recipe** or drop them. No vague unlinked food pills.
- **Drink pairings** ("a light red" → **"a light red wine"**) must be complete phrases and are styled as *pairings, not tappable recipe links*.

**B4 · Component cross-linking.** When a recipe uses a component that has its own make-your-own card, **link it**: `stock`→fish/chicken stock in Spice, `rolls`/`bread`→Bakes, `pesto`/dressings→Spice. (Extends the existing salad-dressing cross-link work.)

**B5 · Region field = controlled vocabulary** (drives the filter chips). Country-level only (South Africa, Britain, France, Spain, Middle East, Morocco, United States, Mediterranean, Global…). **Specific origin detail (Ficksburg, Karoo, Seville) goes in the story, never the region field.** *(Applied to the 30 jams today: 20 chips → 9. Same cleanup owed to the wider Spice room, which still has non-region values like "Kitchen Basics"/"Steakhouse classic".)*

---

## ★ C. PORTUGAL — PER-CARD FIX QUEUE  *(for Code, once Tina confirms)*

| Card | Issue | Fix |
|---|---|---|
| pataniscas-de-bacalhau | snoek/bacalhau | now handled by locale layer (A); interim bacalhau-first note is fine |
| tripas à moda do Porto | "tripe"/"sausage" too vague | beef honeycomb tripe + chouriço (smoked pork) + white beans (+ trotter/ear if authentic); note how PT handle tripe |
| feijoada | "pork shoulder"/"sausage" | method to say *cubed*; name sausages (chouriço, morcela) |
| arroz de pato | "duck 180g" | whole duck or legs for shredding (NOT breast); method to clarify; keep Woolworths swap |
| **cozido à portuguesa** | method far too thin (4 vague steps) | **RESERVE for Opus** (national showcase, too complex for a batch lift) → 9th reserved. Name all meats/sausages/veg, layered cook, broth-then-rice. **Hold Code on this one.** |
| any goat-meat cards | "goat" vague | state cut (leg/shoulder/cubed) |
| goesWith across cards | salad/bread/greens/"a light red" | apply B3 |
| stock/bread/rolls in ingredients | not linked | apply B4 |

**D-audit:** Tina thinks she saw a card with **only 1 method step** ("maybe I was dreaming"). Code to scan the whole file for any card with a single/trivial method and flag/fix (this is also B2).

---

## ★ D. STATUS AFTER THIS REVIEW
- Jams region filter fixed (9 chips) — **spice.js re-staged, push again.**
- Cod ruling now folds into the locale layer (A2) — no longer a per-card decision.
- Portugal reserved heroes → **9** once cozido is added (was 8).
- **Decisions Tina still owes:** (1) confirm SA-first launch scope + locale count; (2) `salted cod` price key (~R400/kg middle of R289.90–R685); (3) greenlight the C-queue for Code.
- Tina's review is **not finished** — more WK issues may follow.
