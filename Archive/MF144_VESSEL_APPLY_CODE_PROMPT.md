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

**A2 · ONE shared helper, seeded by EVERY opener — this is NOT a single-renderer change.**
⚠️ The recipe dial is seeded independently in **at least three openers**, each with its own
`var n = Math.max(1, …)`. A copy-paste fix per opener will drift; write ONE helper and route every seed
through it (sameness law — render soft-default via a shared fn, never hand-roll per section):
```js
// core.js — shared, next to equipmentLine
function softDefaultN(r, base){
  var s = (r && r.equipment || []).find(function(e){ return e && e.soft; });
  return s ? (s.per || 6) : base;   // user count still wins upstream; this only replaces the fallback
}
```
Then seed each opener through it, keeping any real user count first:

| Opener | File · anchor | Current seed | New seed |
|---|---|---|---|
| Bakes / cross-links | `core.js:3859` `bakesRecipeOpts` | `S[sk] \|\| S.people \|\| 4` | `S[sk] \|\| S.people \|\| softDefaultN(r,4)` |
| Search / Mood / Budget | `meals.js` `recipeDetailFromResult` | its `S.people \|\| 4` seed | `… \|\| softDefaultN(r,4)` |
| **World Kitchen** | `worldkitchen.js:608` `wkRecipeOpts` | `S.wkServings \|\| 1` | `S.wkServings \|\| softDefaultN(r,1)` |

**Enumerate the rest before writing:** grep every opener for `var n = Math.max(1,` (events/buffet, spice,
kiddies, health may each seed their own). ANY opener that can open a soft oven-dish must seed through
`softDefaultN`. Most of the ~87 soft mains are **World Kitchen** dishes — the WK opener is not optional.

No `bakesPortion` for soft dishes → they keep free up/down scaling (dialling 2 stays allowed). Do NOT add a
round-up model to soft dishes; that is HARD-batch only.

**A3 · Render the soft-default note** in the qtyBox sub-slot (same slot the bake `scaleNote` uses), in EACH
opener above. When a soft holder is present and there's no `bakesPortion`, set:
```
"Built for a standard dish that serves 6 — scale down for a smaller dish, or make the full dish and freeze the rest."
```
Gate on the soft holder so every non-soft recipe is byte-identical.

**A4 · The two-Bobotie reality (why this matters):** "Bobotie" (WK, `cape-malay-bobotie`, `servings:1`) and
"Classic Bobotie" (FMF, `meals.js`) are two intentional records (search.js confirms the pair) rendered by two
different openers — which is exactly why one opens at 1 and one at 4. Both are oven dishes; both get the soft
holder; both must soft-default via `softDefaultN`. This is MF138's "two maps" made concrete — treat the shared
helper as the fix for it here.

**Phase A gate — test ONE dish in EACH opener path, not just one dish:**
`node --check` core.js + meals.js + worldkitchen.js → push → temporarily add
`equipment:[{n:'23×33cm (9×13″) ovenproof dish',per:6,soft:true}]` to **one bakes dish, the WK Bobotie, AND
the FMF Bobotie**. Confirm each opens at 6, shows the note, scales 2↔12, and reads "1 ×"/"2 × ovenproof
dishes". ⚠️ Do NOT judge the gate on the WK Bobotie alone — if the WK opener wasn't routed through
`softDefaultN`, it will still open at 1 and look like the delta failed. All three green → proceed. Every
recipe without a soft holder stays byte-identical.

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
