# TINZA — Sweep Report
*Per-batch review log for the Version & WOW Sweep (`TINZA_CLAUDE_CODE_BRIEF.md`). Flag generously; a 🟡 a human can deepen beats an over-claimed WOW.*

Legend: ✅ full-WOW · 🟡 compliant-but-flat · ⚠️ needs-human

---

## Phase 1 · Bobotie reconcile (§7) — 7 Jul 2026

**Reconcile pair:** `sp-bobotie` (`meals.js`, array shape) ↔ `cape-malay-bobotie` (`wk_southafrica.js`, string shape)
**Canonical set (identical names · icons · order in both rooms):**
`Classic 🏆 · Budget 💰 · Quick ⚡ · Lentil 🌱 · 1600s Original 🏛️ · In a Pumpkin 🎃`

### `meals.js` — batch 1 — `sp-bobotie`
- ✅ **`sp-bobotie`** — reconciled to the 6-version canonical set. Renamed the default `Cape Malay → Classic` (kept its richer almond content) and `Lentil (veg) → Lentil`. **Added two versions as array-deltas:** `1600s Original` (`swapIng` beef→lamb mince + `swapStep` browning line → drain fat) and `In a Pumpkin` (`addIng` pumpkin after mince + its own structural shell method). Budget · Quick · Lentil kept as their existing structural versions. Order already matched canonical for the first four, so those two appended cleanly.

### `wk_southafrica.js` — batch 1 — `cape-malay-bobotie`
- ✅ **`cape-malay-bobotie`** — added `Quick` (delta: `swapStep` the final long bake → a 5–8 min hot-grill finish) and **reordered** to canonical (`1600s Original` moved to sit after `Lentil`). Classic · Budget · 1600s · Lentil · In a Pumpkin content is byte-identical — only the Quick insertion and the 1600s move changed.

### Verification (harness executed the live `applyRecipeVersion`/`applyVersionDelta` on both real cards)
- Both cards: 6 versions, canonical order confirmed.
- Meals: 1600s→lamb (beef gone) + method drains fat; Pumpkin→pumpkin at idx 1 (right after beef mince) + shell method; Lentil→lentils/no mince; Quick→grill; Classic→almonds preserved.
- WK: Quick→grill (long bake removed); 1600s→`90g lamb mince`; Pumpkin→pumpkin shell ing; Lentil→cooked brown lentils.
- `node --check` clean on both files. Byte-discipline: only the two Bobotie cards touched.

### Twists (§6)
- Bobotie's surprise versions **are** the canonical `1600s Original` (heritage — the 1600s Cape original was mutton/lamb) and `In a Pumpkin` (the Boer *"bobotie in 'n pampoen"* showstopper). Both are heritage-true and pass the taste-gate, so **no new web-researched twist was forced** onto the national dish — §7 already defines its set.

### ⚠️ Conflicts flagged (§0 — the standards files win; confirm before I roll this rule forward)
1. **§7 "convert Budget/Lentil to deltas" vs §5 "don't force a delta where the method genuinely differs."** Kept **structural**: `Lentil` (mince→lentils + simmer-first method), `Quick` (grill-not-bake; Meals Quick also has reduced amounts), `Budget` (stretch method + different amounts). This also matches how the WK card was already authored. **Recommend §7 be reworded to "convert to deltas *where the version keeps most of the base*."**
2. **Meals delta cost honesty.** `1600s Original` is a delta with no `costPP` (per §5, deltas don't hardcode), so its **headline `costPP` inherits the base R34** even though lamb mince (R200/kg) costs more than beef (R130/kg). The shopping/plan engine still prices lamb correctly from the merged ingredients; only the headline chip understates. WK recomputes from ingredients, so it's honest there. Flagging in case the Meals headline should be bumped.

### Prices (§2/§9)
- No gaps — `lamb mince` (R200) and `pumpkin` (R35) both present in `PRICE_DB`. Nothing appended to `TINZA_WK_PRICE_GAPS.md`.

### Not committed
- Per the session's standing "show diffs, don't push" and Tina's review-on-live workflow, the two files are staged as diffs, **not committed**. Suggested commit messages (§2 format), one file each:
  - `wk-sweep: meals.js batch-1 — sp-bobotie reconciled to 6-version canonical set (+1600s, +In a Pumpkin deltas)`
  - `wk-sweep: wk_southafrica.js batch-1 — cape-malay-bobotie +Quick delta, reordered to canonical`

---

## Phase 2 · Greek tail — Batch 1 (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): I am holding `wk_europe.js` for the Greek tail.** Opus: please stay clear of it while this phase runs (you have `worldkitchen.js` render polish). Heroes verified present & untouched.

**Pre-flight verification (per CLAUDE.md "verify in live code"):**
- `git pull` was a **no-op** — local HEAD == origin/main, clean tree; the pushed heroes are already in the file at this commit.
- All **13 heroes confirmed at full-WOW depth** in `wk_europe.js` (Moussaka·Tzatziki·Souvlaki·Gyros·Baklava·Spanakopita·Greek Salad·Saganaki·Galaktoboureko·Dolmades·Avgolemono·Loukoumades·Youvetsi) — left byte-identical.
- 3 earlier swaps already WOW (Fasolada·Gigantes·Spetsofai) — left as-is.

### Cards lifted this batch (6) — each: full-WOW rewrite + 1 researched twist as a WK string delta; all 6 verified merging via `applyRecipeVersion` (twist merges + base renders clean); `node --check` clean; byte-discipline held (6 lines changed, nothing else touched)
- ✅ **`greece-fava`** (Santorini split-pea purée) — why-led method (rinse starch off, never salt the water, blend HOT so it sets like mousse). Moat: PDO yellow split peas grown on Santorini's volcanic soil ~3,500 yrs. **Twist:** 💍 *Pantremeni (Married)* — caramelised onions + capers (the EU-PDO "married" service). *(price gap logged: yellow split peas.)*
- ✅ **`greece-melitzanosalata`** (smoky aubergine dip) — char over live flame, drain bitter juices, **chop not blend**. Moat: "poor man's caviar" — chopped so it looks like grey caviar. **Twist:** 🌰 *Politiki (Walnut & Roasted Red Pepper)* — the Constantinople refugee style. *(price gap: red wine vinegar.)*
- ✅ **`greece-briam`** (slow-roasted veg) — a slow oil-braise, not a fast roast; grated tomato melts to sauce. Moat: the *ladera* (oil-cooked, meatless) fasting tradition. **Twist:** 🧀 *With Feta* baked on top. **🟡 diet note:** the feta version is vegetarian, not vegan; the card diet stays `vegan` (base) since the engine can't set diet per-version — flagged.
- ✅ **`greece-gemista`** (rice-stuffed tomatoes & peppers) — RAW rice, fill two-thirds (it swells), potato wedges in the gaps, eat warm not hot. Moat: the crusty potato wedges are fought over more than the peppers. **Twist:** 🌸 *Lenten (Currants & Pine Nuts)* — the vegan "Politiko" fasting style. *(Existing thin card — LIFTED, not duplicated, per the no-dup rule.)*
- ✅ **`greece-stifado`** (sweet-spiced beef & onion stew) — brown dry & in batches, add the little onions whole and **never stir**, reduce glossy. Moat: name from Venetian *stufato*, spice legacy of Venetian rule. **Twist:** 🐰 *Rabbit (Kouneli)* — the original & most-prized version (web-researched). *(price gap: pickling onions.)*
- ✅ **`greece-soutzoukakia`** (Smyrna cumin meatballs) — wine-soaked bread + 30-min rest for tenderness, shape oval, finish IN the sauce. Moat: came with 1922 Smyrna refugees; name from Turkish *sucuk*. **Twist:** 🍲 *Baked (sto Fourno)*.

**Twists logged for taste-check (Opus/Tina):** Fava→Pantremeni (caramelised onion+caper, PDO-recognised) · Melitzanosalata→Politiki walnut+red-pepper · Briam→feta · Gemista→Lenten currants+pine-nuts · Stifado→rabbit/kouneli · Soutzoukakia→oven-baked. All pass the taste-gate (established authentic variants, web-grounded for fava/stifado/melitzanosalata). No "no-twist-found" cases this batch.

### ⚠️ AUDIT — flags for Tina's sign-off (never auto-deleted)
- **DUPLICATE IDs (§2 violation — HIGH):** `greece-loukoumades` and `greece-youvetsi` each appear **twice** — a full hero card AND a leftover thin stub (m≈244/229). The resolver returns the *first* match, so a stub may be shadowing the hero on the live page. These sit in hero territory → **I did not touch them.** Recommend Opus/Tina delete the two stale thin stubs (the `ouzo`/`retsina` ids are already gone, confirming the heroes replaced them without removing the stubs).
- **DUP-BY-DISH:** `greece-garides-saganaki` (Shrimp Saganaki, thin, m=158) overlaps the Saganaki hero's 🦐 *Shrimp/Garides* version. **Propose:** fold it into the hero as that version and cut the standalone, OR lift it as its own dish — Tina's call.
- **DRINK — borderline:** `greece-frappe` (Iced Coffee, m=227). By strict §2 a plain drink = CUT & REPLACE, but frappé has a genuine technique (frothing instant coffee) + a strong moat (invented 1957 at the Thessaloniki International Fair by a Nescafé rep with no hot water). **Recommend LIFT** (real technique + moat), but flagging for your ruling.
- **Overlaps to watch (not cuts):** `ladopsomo` vs `horiatiko-psomi` (two village breads); `pastitsada` vs `stifado` (two spiced beef stews — pastitsada is the Corfiot, distinct); `kontosouvli` vs souvlaki/gyros (larger spit chunks, distinct). Keep all, differentiate in the write-ups.

### Greek tail remaining = LIFT queue (~32 real dishes written thin — for later batches, one file, small batches)
Desserts/breads: bougatsa · kataifi · revani · halva · milopita · koulouri · paximadia · horiatiko-psomi · ladopsomo · kourabiedes · melomakarona. Meze/veg: skordalia · taramasalata · horta · lahanosalata · strapatsada · kolokithokeftedes · tiropita. Mains: pastitsio · kleftiko · kreatopita · kakavia · paidakia · kontosouvli · arni-sto-fourno · bifteki · keftedes · kotopoulo-lemonato · pastitsada · kokkinisto · htapodi-sti-schara · garides-saganaki (pending the dup ruling). *(All look like genuine dishes written thin → LIFT, not CUT — except the flags above.)*

### Prices (§2/§9)
- Priced OK: aubergine (43) · capers (330) · feta (230) · beef chuck (130) · potato (18) · courgette (50) · green pepper (50) · onion (27) · red onion (45) · olive oil (250) · garlic (280) · walnuts (370) · parsley/dill (650) · lemon juice (56) · tomato paste (180) · red wine (via wine) · currants/pine nuts (check).
- **Gaps appended to `TINZA_WK_PRICE_GAPS.md`** (never guessed): `yellow split peas`, `red wine vinegar`, `pickling onions`. Rabbit is also likely unpriced — verify.

### Not committed
- Staged as a diff, **not committed** (session pattern + Tina reviews on live). Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-1 — 6 Greek tail cards lifted to WOW + researched twists (fava, melitzanosalata, briam, gemista, stifado, soutzoukakia)`
