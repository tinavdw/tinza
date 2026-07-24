# MF144 · VESSEL APPLY — Code prompt (executable)

**Depends on:** MF142 engine (shipped, verified live 24 Jul) · MF143 authoring table (the taxonomy — read it first).
**Cost note:** 0 Fable. Claude has supplied the anchors + exact rewords below; this is a mechanical apply.
**Run in 3 ordered phases. Do NOT start Phase B until Phase A is proven live (Law 2).**

---

## PHASE A — ENGINE DELTA (core.js only, ~15 lines, prove before bulk)

The MF142 engine already renders the `equipment` line + contract banner. Two additions make the SOFT
oven-dish behaviour work. HARD vs SOFT stays keyed on the existing discriminator — **HARD = the record
has a `bakesPortion` round-up model; SOFT = an oven-dish holder with none** — plus one explicit flag so
the engine never has to guess:

**A1 · Mark soft holders in the data (Phase B writes these; engine just reads):**
`equipment:[{ n:'23×33cm (9×13″) ovenproof dish', per:6, soft:true }]`
Only soft oven-dishes carry `soft:true`. Jars/bottles and hard tins never do.

**A2 · Default the dial to the soft holder's `per` when the user hasn't set a count.**
Anchor — `sections/core.js:3859` in `bakesRecipeOpts`, currently:
```js
var n = Math.max(1, S[sk] || S.people || 4);
```
Change the fallback so a soft dish opens at its holder size (6), while any real user count still wins:
```js
var soft = (r.equipment||[]).find(function(e){ return e && e.soft; });
var n = Math.max(1, S[sk] || S.people || (soft ? (soft.per||6) : 4));
```
No `bakesPortion` for soft dishes → they keep free up/down scaling (dialling 2 stays allowed). Do NOT add
a round-up model to soft dishes; that is HARD-batch only.

**A3 · Render the soft-default note** in the qtyBox sub-slot (same slot the bake `scaleNote` uses). When a
soft holder is present and `bakeP` is null, set:
```
"Built for a standard dish that serves 6 — scale down for a smaller dish, or make the full dish and freeze the rest."
```
Gate it on the soft holder so every non-soft recipe is byte-identical.

**A4 · Mirror A2/A3 into the legacy `recipeDetailFromResult` branch in `meals.js`** (the Search/Mood/Budget
path — the same two-renderer split MF138 tracks). A soft dish reached via search must open at 6 and show the
note too, or the two maps disagree.

**Phase A gate:** `node --check` core.js + meals.js → push → on live, temporarily add
`equipment:[{n:'23×33cm (9×13″) ovenproof dish',per:6,soft:true}]` to ONE dish (e.g. Bobotie), confirm it
opens at 6, shows the note, scales 2↔12, and the "🍽️ You'll Need" line reads "1 ×"/"2 × ovenproof dishes".
Only then proceed to Phase B. Every recipe without a soft holder must be byte-identical.

---

## PHASE B — MECHANICAL APPLY (save-as-you-go, present each file)

Bucket each record by `cat` + method holder keyword, assign the default holder from MF143's table, derive
`per` by the rule. Phrase `n` as **modifier + count-noun** so `pluralizeLastWord` lands (add `nPlural` only
for irregulars). `node --check` and present each section file as you finish it.

**B1 · HARD tins** (`per` = `bakesPortion(r).perBatch` for modelled bakes, else base serves; NO `soft`):
cheesecakes → `22cm springform tin` · round cakes → `20cm round cake tin` (layer cakes = `×2` at base) ·
loaves → `22×12cm loaf tin` · tarts/quiches → `23cm loose-bottom tart tin` · pies → `24cm pie dish` ·
muffins/cupcakes → `12-cup muffin tray` (per:12 pieces) · baklava/tray → fixed tray · flan/baked custard →
`1L terrine mould` or stated mould. Auto-derive `per` — do NOT retype a number a `bakesPortion` already gives.

**B2 · SOFT oven-dishes** (`per:6`, `soft:true`): the 87 savoury baked-in-dish mains + soft puddings —
bobotie, chicken/meat pies, casseroles, gratins, potato/veg bakes, moussaka, lasagne, stuffed bakes; malva,
bread & butter, self-saucing, sticky toffee. Cats: `ovenbakes`, most savoury `world`, `puddings`.
Baked-oats-small → `20cm square baking dish`, soft.

**B3 · JAR/BOTTLE — the whole Spice preserves shelf in one category stroke** (identified by `cat`, never a
keyword): jams/marmalades/curds/chutneys → `375ml jar` (per:375) · pickles/sambals/atchar/preserved lemons →
`375ml jar` · pourables (hot sauce/ketchup/cordial) → `500ml bottle` (per:500). `per` = capacity in the
recipe's yield unit (g/ml).

**B4 · EXCLUDE (no holder — leave byte-identical):** cooking sauces & gravies (béchamel, Napoletana pizza
sauce, Welsh rarebit sauce, lentil gravy, boerewors tamatiesous, red-wine gravy) · soups (pot+bowl) ·
skillet/bowl (Menemen) · the jar false-matches (Jam & Cream Scones, mayo sarmies, Croquetas de Jamón,
Jambon d'Ardenne, Atchar Muffins → muffin tray not jar) · French Onion Soup · Baked Berry Oats.

---

## PHASE C — REWORDS + HUMAN FORK

**C1 · Prose rewords — only 2 of the 3 need it (Everything Seed Omega is a no-op):**

- **Overnight & Baked Oats** (`meals.js`) — method step 1, replace:
  > "This is a batch recipe — the amounts scale straight up, and one Sunday-night mix makes about 4 jars. Grab jars or tubs with lids; the fridge does the cooking."

  with:
  > "This is a batch recipe — the amounts scale straight up, filling one jar per person, so the dial decides how many. Grab jars or tubs with lids; the fridge does the cooking."

  (Holder: `equipment:[{n:'jar',per:1}]` — individual, not an oven dish, no `soft`.)

- **Banana Oat Muffins** (`health.js`) — method step 1, replace:
  > "Preheat oven 180°C. Line a 12-hole muffin tin."

  with:
  > "Preheat the oven to 180°C and line a 12-cup muffin tray — one tray holds a batch of twelve, so grab a second if you've scaled up."

  (Holder: HARD `12-cup muffin tray`, per:12.)

- **Everything Seed Omega** (`health.js`) — **NO method reword.** Its only count is the `makes:12` data
  field (correct — feeds `per:12`); the method prose is already per-unit ("scoop into a lined tray or
  silicone moulds"). Holder: HARD `12-cup silicone mould tray`, per:12. Do not edit the prose.

**C2 · Surface the ~10 ambiguous `world` entries for Tina to tap soft/hard — do NOT auto-classify:**
Kalakukko · Empanada Gallega · Karjalanpiirakka · Ostkaka · Flan · Encharcada · Mämmi ·
Mustikkapiirakka · Salzburger Nockerl (+ any of `world:18` bake-tin / `world:5` ramekin-mould that don't
fit a default). List them with your best guess; Tina confirms before you write those holders.

---

## ACCEPTANCE
- Every targeted record has an `equipment` field; live spot-check shows "🍽️ You'll Need" scaling:
  cheesecake ×2 → "2 × 22cm springform tins", lasagne dialled to 12 → "2 × ovenproof dishes",
  jam at 1125g → "3 × 375ml jars".
- Soft dishes open at 6, show the note, scale 2↔12 with no fraction lock.
- Nothing outside the target set gained a holder (byte-identical elsewhere).
- Re-run `tinza-doctor` → bake-coverage WARN reads **0 uncovered**; promote it to a gate.
- `node --check` clean on every edited file; one push after the batch (Netlify credits).
