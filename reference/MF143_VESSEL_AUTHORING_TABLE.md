# MF143 · VESSEL AUTHORING TABLE — apply the equipment field across 162 recipes

**Depends on:** MF142 engine (shipped). **Cost note:** NOT a Fable job — this is a defaults table + mechanical apply. Claude drafts, Tina confirms sizes, Code applies. Zero Fable sessions.
**Scope (census, live app):** 162 recipes need `equipment`. Only 3 also need a prose reword.

---

## HOW `per` IS SET (rule, so Code rarely hand-types a number)
- **Bakes** (record has a `bakesPortion` model): `per = bakesPortion(r).perBatch`. Already defined — auto-derive, don't retype.
- **Non-bake whole-holder** (oven dish, tart, pie, loaf): `per = the recipe's base serves`.
- **Individual holder** (ramekin, muffin cup): `per = servings one holder covers` — ramekin `per:1`; muffin tray `per:12` (pieces).
- **Jar / bottle**: `per = capacity in the recipe's yield unit` (g or ml).

## FAMILY DEFAULTS  *(sizes confirmed by research, 24 Jul 2026)*
Sources: 9×13″ oven dish serves 6–8 (Michael Symon + multiple) · round cake tins 20/23cm (Nigella) · loaf 22×12cm ~1.5L (bakergatherer) · SA jam jars 375/500ml (Consol, Dalgen).

| Family / sub-type | Default `n` (holder) | `per` | Behaviour |
|---|---|---|---|
| Cheesecake | `22cm springform tin` | perBatch (≈12) | HARD batch (round up) |
| Cake — round/single | `20cm round cake tin` | perBatch / serves | HARD (23cm for larger) |
| Cake — layer | `20cm round cake tin` ×2 | perBatch | HARD · outlier: 2 tins at base |
| Loaf / bread | `22×12cm loaf tin (~1.5L)` | serves | HARD |
| Tart / quiche | `23cm loose-bottom tart tin` | serves (≈8) | HARD |
| Pie | `24cm pie dish` | serves | HARD |
| Muffin / cupcake | `12-cup muffin tray` | 12 | HARD (pieces) |
| **Oven-dish main / bake / pudding** | `23×33cm (9×13″) ovenproof dish` | **6** | **SOFT default — see below** |
| Baked oats (small) | `20cm square baking dish` | serves | SOFT |
| Ramekin dessert | `ramekin (~180ml)` | 1 | one per serving |
| Terrine / large mould | `1L terrine mould` | serves | HARD |
| Jam / chutney | `375ml jar` | 375 | SA standard (500ml alt) |
| Cordial / sauce | `500ml bottle` | 500 | yield in ml |

## HOLDER BEHAVIOUR — hard batch vs soft default  *(RULED 24 Jul 2026, see TINZA_RULINGS §10)*
Two kinds of holder, two behaviours — do NOT treat them the same:
- **HARD batch** — springform, muffin tray, cake tin, loaf, tart, pie. Fixed pieces: the dial **rounds up to whole units, no fractions** ("makes 1 cheesecake · serves 12 · the dial rounds up so you never bake a fraction"). This is the existing bake model.
- **SOFT default** — oven dishes (lasagne, bobotie, gratins, bakes, puddings). The dial **opens at 6 and scales freely up AND down** — dialling 2 is allowed, because a solo cook makes a small lasagne in a small dish. No fraction lock. It **states the assumption**:
  > "Built for a standard dish that serves 6 — scale down for a smaller dish, or make the full dish and freeze the rest."
  The equipment line still counts whole dishes at `per:6` (1 dish up to 6, 2 dishes at 7–12).

**Engine delta for Code (small, on top of MF142):** oven-dish recipes (a) default the dial to **6**, and (b) carry the soft-default note string above (category-level, shown when the holder is a soft dish). They do **NOT** get a `bakesPortion` round-up model — that is HARD-batch only. Everything else is the MF142 equipment line unchanged.

## SOFT vs HARD — how to classify (Code applies by category + this rule)
Enumeration (24 Jul): 87 savoury baked-in-dish mains + soft puddings = SOFT; a set of fixed-tin bakes = HARD; ~5 false positives get NO oven-dish holder.
- **SOFT (open at 6, soft note, per:6)** — savoury mains baked/assembled in a family dish (bobotie, chicken & meat pies, casseroles, gratins, potato/veg bakes, moussaka, lasagne, stuffed-shell bakes) **and soft puddings** (malva, bread & butter, self-saucing, sticky toffee — they scale down in a smaller dish). Cats: `ovenbakes`, most savoury `world`, `puddings`.
- **HARD (fixed tin, round up, no fractions)** — cheesecakes (springform), tarts/tartes/quiches (Tarte Tatin, apple tart, Korslose tert), baklava + tray bakes (fixed tray, cut pieces), flan / baked custard (set in a mould), Ostkaka (Swedish cheesecake), Eplekake (apple *cake* → cake tin), Lemon Meringue (pie tin). Cats: `cheesecakes`, tart/quiche.
- **NO oven-dish holder (exclude — detector false positives):** French Onion Soup (soup; per-person crock at most), Napoletana Pizza Sauce (→ jar/bottle if anything), Menemen (skillet), Baked Berry Oats / Overnight & Baked Oats (individual/small — small dish or none).
- **~10 ambiguous `world` entries → 30-sec human glance:** Kalakukko (fish pie→SOFT) · Empanada Gallega (savoury pie→SOFT) · Karjalanpiirakka (pastry→own tin) · Ostkaka/Flan/Encharcada (set→HARD) · Mämmi/Mustikkapiirakka (sweet→judge) · Salzburger Nockerl (soufflé→own dish). Code lists them; Tina taps soft/hard.

## JAR/BOTTLE vs COOKING SAUCE — the "kept in a jar" rule (Tina, 24 Jul)
The holder is what the food *lives in*, not the pot it cooks in. First census (method keyword) found only 6; enumerating by what-the-recipe-IS finds **~55 real condiments/preserves**.
- **JAR/BOTTLE holder = the condiment/preserve itself** (identified by `cat` = Spice preserves/condiments, NOT a keyword anywhere): jams · marmalades · curds · chutneys · pickles · sambals · atchar · hot sauces · ketchup · mayos/aioli · harissa · toum · apple sauce · mint sauce · preserved lemons. **Apply to the whole Spice preserves shelf in one stroke.** Sizes: thick preserves (jam/chutney/marmalade/curd) → `375ml jar`; pourable (hot sauce/ketchup/cordial) → `500ml bottle`. `per` = capacity in yield g/ml.
- **NO holder — cooking sauces & gravies** (made in a pot, used now): Béchamel/White Sauce · Napoletana Pizza Sauce · Welsh Rarebit cheese sauce · Lentil "Meatball" Gravy · Boerewors Tamatiesous · Red Wine Gravy. Pizza sauce is NOT a jar.
- **NO holder — soup** (pot/slow cooker + bowl) and **skillet/bowl dishes** (Menemen).
- **EXCLUDE from jar (false matches — a DISH using a condiment, gets its own holder/none):** Jam & Cream Scones · mayo sarmies/salad · Bacon & Syrup Waffles · Atchar Muffins (→ muffin tray) · Chicken Tagine (→ oven) · Gulab Jamun (dessert) · Croquetas de Jamón & Jambon d'Ardenne (ham, not "jam").

**Scope update:** total needing a holder is ~162 (dishes/bakes) **+ ~55 condiments/preserves** ≈ 215 — but the condiment half is a single category-rule apply, so it adds little session time.

## OUTLIERS — hand-check (small list, from census)
- **Oven-dish false positives:** `soups:1`, `eggs:1` matched on "ovenproof" — verify; likely no holder → skip.
- **bake-tin `world:18`** are international bakes — sort into cheesecake / cake / tart / loaf sub-types (a handful won't fit a default).
- **ramekin/mould `world:5` + `events:3`** — split ramekin (per:1) vs mould/terrine (per:serves).
- **Layer cakes** — flag any cake authored as 2 tins at base.

## THE 3 PROSE REWORDS (method hardcodes a count → make per-unit)
- Overnight & Baked Oats · Banana Oat Muffins · Everything Seed Omega — reword any *"makes 12"* / *"for N"* count in the method to per-unit; the `equipment` field now carries the holder. Claude supplies exact wording; Code applies.

## APPLY (Code, one session)
1. Bucket each of the 162 by family (cat + method holder keyword), assign the default holder; derive `per` by the rule above.
2. Write `equipment:[{n,per}]` (phrase `n` as **modifier + count-noun** so pluralize lands right; `nPlural` only for irregulars).
3. Reword the 3 prose cases with Claude's supplied text.
4. `node --check` every edited file. Re-run `tinza-doctor` — the bake coverage WARN should now read **0 uncovered** and can promote to a gate.
5. Save-as-you-go; present each edited section file.

## ACCEPTANCE
- Every one of the 162 has an `equipment` field; a spot-check on live shows the "🍽️ You'll Need" line scaling (cheesecake ×2 → "2 × 22cm springform tins", lasagne ×2 → "2 × ovenproof dishes", jam 1350g → "3 × 450g jars").
- No recipe outside the 162 gained a holder (byte-identical elsewhere).
