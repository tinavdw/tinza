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

---

## Phase 2 · Greek tail — Batch 2 (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): still holding `wk_europe.js` for the Greek tail.** Note: commit `64c1c84` (Austria spine + Frappé lift + duplicate-stub fixes + garides/speckknödel fold) landed in this file after batch 1 — I re-read all 6 targets fresh (still thin) and confirmed my batch-1 cards + the 13 heroes are intact and untouched. Since Opus is also committing to this file now, I'm editing **only** Greek non-hero cards; coordinate the push order.

**Batch-1 audit flags — RESOLVED by `64c1c84`:** duplicate `loukoumades`/`youvetsi` stubs fixed ✅ · `garides-saganaki` folded ✅ · `frappe` lifted ✅. Thanks — those are off the list.

### Cards lifted this batch (6) — full-WOW rewrite + 1 researched twist each; all 6 verified merging via `applyRecipeVersion`; `node --check` clean; byte-discipline held (6 lines changed)
- ✅ **`greece-pastitsio`** (Greek baked pasta) — under-boil pasta, dry cinnamon-clove-wine meat sauce, egg-set béchamel, **rest before cutting**. Moat: béchamel crown added only in the 1920s by Tselementes — not originally Greek. **Twist:** 🇨🇾 *Cypriot (Halloumi & Cinnamon)*.
- ✅ **`greece-kleftiko`** (bandit lamb in parchment) — seal tight, don't peek, steam does the work. Moat: named for the *klephts* — rebels who cooked stolen lamb in buried sealed pits so no smoke betrayed them. **Twist:** 🧀 *With Feta & Peppers* (Cypriot).
- ✅ **`greece-kakavia`** (fisherman's fish soup) — broth from the veg + fish body, never boil, finish off-heat with raw oil + lemon. Moat: likely Europe's oldest fish soup — ancestor of bouillabaisse via Greek colonists at Marseille. **Twist:** 🍋 *Avgolemono* (egg-lemon liaison).
- ✅ **`greece-taramasalata`** (whipped roe dip) — whip roe with acid before oil, drizzle oil like mayo, no salt till tasted. Moat: shocking-pink tarama is dyed commercial roe; real tarama is a modest beige. **Twist:** 🥔 *Potato-Based* (the other traditional base).
- ✅ **`greece-kourabiedes`** (almond snow cookies) — cream butter 8–10 min for the melting crumb, bake barely-coloured, double-dust hot then cold. Moat: always paired with melomakarona — the snow-white and the syrup-dark of a Greek Christmas. **Twist:** 🌸 *Orange-Blossom & Clove*.
- ✅ **`greece-melomakarona`** (honey-soaked spice cookies) — olive-oil dough (no butter/egg), bake fully, **cold cookie into HOT honey syrup** (the baklava rule). Moat: name from *meli* + *makaria*, an ancient blessed bread for the dead. **Twist:** 🍫 *Chocolate-Dipped* (the modern bakery favourite).

**Twists logged for taste-check:** pastitsio→Cypriot halloumi · kleftiko→feta & peppers · kakavia→avgolemono · taramasalata→potato base · kourabiedes→orange-blossom & clove · melomakarona→chocolate-dipped. All established authentic variants (web-grounded for pastitsio/kleftiko/taramasalata); all pass the taste-gate; no "no-twist-found" cases. The kourabiedes↔melomakarona cards now cross-reference each other (the Christmas pair) in their moats and `pairsWith`.

### Prices (§2/§9)
- **No new gaps** — all resolve in `PRICE_DB`: pasta (36) · beef mince (130) · tinned tomatoes (66) · red wine (45) · nutmeg/cloves · milk/flour/butter · parmesan (750, for "parmesan (or kefalotyri)") · halloumi (258) · leg of lamb (190) · feta (230) · red pepper (100) · hake (257) · carrots (25) · celery (27) · fish roe/tarama (400) · white bread (30) · icing sugar (100) · almonds (330) · brandy (200) · orange-blossom water (360) · fine semolina (43) · honey (160) · walnuts (370) · dark chocolate (313) · orange juice (25).

### Greek tail progress
- **12 of ~38 thin cards now lifted** (batch 1: fava·melitzanosalata·briam·gemista·stifado·soutzoukakia; batch 2: pastitsio·kleftiko·kakavia·taramasalata·kourabiedes·melomakarona). **~26 remain** in the LIFT queue (bougatsa·kataifi·revani·halva·milopita·koulouri·paximadia·horiatiko-psomi·ladopsomo · skordalia·horta·lahanosalata·strapatsada·kolokithokeftedes·tiropita · kreatopita·paidakia·kontosouvli·arni-sto-fourno·bifteki·keftedes·kotopoulo-lemonato·pastitsada·kokkinisto·htapodi-sti-schara). No new CUT&REPLACE flags this batch.

### Not committed
- Staged as a diff, **not committed**. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-2 — 6 Greek tail cards lifted to WOW + researched twists (pastitsio, kleftiko, kakavia, taramasalata, kourabiedes, melomakarona)`

---

## Phase 2 · Greek tail — Batch 3 (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): still holding `wk_europe.js` for the Greek tail.** Synced first: commit `203c335 "core"` landed after batch 2 — I confirmed the delta engine (`applyVersionDelta`) is intact, my batch-1/2 cards and the 13 heroes are untouched, and re-read all 6 targets fresh (still thin). Edited only these 6 non-hero Greek cards. **Note:** `git fetch` to origin failed this session (network/DNS to github unreachable) — local HEAD is clean at `203c335`; **verify you're pushing from the intended base.** WebSearch worked fine, so twists are freshly web-researched.

### Cards lifted this batch (6) — full-WOW rewrite + 1 researched twist each; 6/6 verified merging via `applyRecipeVersion`; `node --check` clean; byte-discipline held (6 lines changed)
- ✅ **`greece-skordalia`** (garlic purée) — mash by hand not machine (starch→glue), pound garlic to paste, beat oil in like mayo. Moat: the fierce Independence-Day partner to salt cod. **Twist:** 🌰 *Walnut* (Ionian/northern base).
- ✅ **`greece-kolokithokeftedes`** (courgette & feta fritters) — **squeeze the courgette bone-dry** (the make-or-break), fry in properly hot oil. Moat: a garden-glut dish, one of a whole tribe of *keftedes*. **Twist:** 🌿 *Minted (Island-Style)*.
- ✅ **`greece-tiropita`** (feta & phyllo pie) — oil every sheet for shattering layers, **score before baking**. Moat: Greece's breakfast-on-the-run from the corner *fournos*. **Twist:** 🥛 *Creamy (with Yoghurt)*.
- ✅ **`greece-paidakia`** (charred lamb chops) — salt at the last second, screaming-hot & fast, finish lemon-oregano-salt off heat. Moat: ordered by weight at the *psistaria*, bones gnawed clean. **Twist:** 🌿 *Yoghurt-Marinated* (tenderiser).
- ✅ **`greece-kotopoulo-lemonato`** (lemon chicken & potatoes) — broth in the tin base (not over the chicken) so tops crisp, potatoes soak. Moat: the yellow twin of red *kokkinisto*. **Twist:** 🫒 *With Feta & Olives*.
- ✅ **`greece-htapodi-sti-schara`** (grilled octopus) — tenderness is won at the **simmer** ("knife slides in easily"), the grill is only for smoke. Moat: fishermen beat it on the rocks; freezing does the same. **Twist:** 🍷 *Xidato (Vinegar-Marinated)*.

**Twists logged for taste-check:** skordalia→walnut · kolokithokeftedes→mint · tiropita→creamy yoghurt · paidakia→yoghurt marinade · kotopoulo→feta & olives · htapodi→xidato. All web-grounded (skordalia, octopus, tiropita searched directly) and established authentic variants; all pass the taste-gate; no "no-twist-found" cases. Cross-refs added: skordalia↔Kakavia (fried-fish pairing), htapodi↔Fava (classic meze pairing). I deliberately **did not** use the "wine cork tenderises octopus" folklore — it's an unverified myth.

### Prices (§2/§9)
- **1 new gap** appended to `TINZA_WK_PRICE_GAPS.md`: `octopus` (#288 — `calamari` R130 is keyed but octopus isn't; SA sub or alias needed). `red wine vinegar` (#286, already logged) now also used by Skordalia + Htapodi — count updated to 4.
- Everything else resolves: potato · garlic · olive oil · walnuts (370) · courgette (50) · feta (230) · spring onion (343) · breadcrumbs (150) · phyllo pastry (118) · Greek yoghurt (80) · lamb rib chops (260) · chicken pieces (90) · chicken broth (100) · olives (165).

### Greek tail progress
- **18 of ~38 thin cards now lifted** (batches 1–3). **~20 remain** in the LIFT queue: bougatsa · kataifi · revani · halva · milopita · koulouri · paximadia · horiatiko-psomi · ladopsomo · horta · lahanosalata · strapatsada · kreatopita · kontosouvli · arni-sto-fourno · bifteki · keftedes · pastitsada · kokkinisto (+ any dup-ruling leftovers). No new CUT&REPLACE flags this batch.

### Not committed
- Staged as a diff, **not committed**. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-3 — 6 Greek tail cards lifted to WOW + researched twists (skordalia, kolokithokeftedes, tiropita, paidakia, kotopoulo-lemonato, htapodi-sti-schara)`

---

## Phase 2 · Greek tail — Batch 4 (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): still holding `wk_europe.js` for the Greek tail.** Synced: batch 3 is committed (`2f434e8`), tree clean; heroes + earlier batches intact; all 6 targets re-read fresh (still thin). Edited only these 6 non-hero cards. Desserts/breads cluster — reuses the phyllo + syrup make-or-breaks from the baklava/galaktoboureko heroes.

### Cards lifted this batch (6) — full-WOW rewrite + 1 researched twist each; 6/6 verified via `applyRecipeVersion` (2 structural twists + 4 delta twists all apply; bases clean); `node --check` clean; byte-discipline held (6 lines changed)
- ✅ **`greece-bougatsa`** (Thessaloniki custard pastry) — rain semolina into hot milk (no lumps), butter every sheet, **chop-hot-and-dust-with-icing-sugar-and-cinnamon** ritual. Moat: Thessaloniki's is crisp & barely sweet vs cream-heavy Veria. **Twist:** 🧀 *Cheese (Tyri)* — **structural** (savoury feta filling, no sugar; genuinely differs, §5).
- ✅ **`greece-kataifi`** (shredded phyllo & nut rolls) — butter the strands right through, **hot pastry / cold syrup** (baklava rule). Moat: kataifi dough is drizzled onto a hot spinning plate into angel-hair — baklava's tousled cousin (= Levantine kunafa). **Twist:** 🍫 *Chocolate* (delta).
- ✅ **`greece-revani`** (syrup semolina cake) — don't over-beat the semolina; **hot syrup on hot cake** (the reverse of baklava). Moat: named for the 16th-c Ottoman poet Revani; kin to basbousa. **Twist:** 🥥 *Coconut* (delta).
- ✅ **`greece-halva`** (1:2:3:4 semolina halva) — toast the semolina nut-brown, add hot syrup a ladle at a time (it spits). Moat: the "1:2:3:4" ratio is a doorway-recitable memory trick; the great Orthodox-fasting sweet (no dairy/egg). **Twist:** 🍊 *Orange & Almond* (delta).
- ✅ **`greece-koulouri`** (sesame street-bread ring) — knead for gluten, roll thin, **honey/molasses dip before sesame** so it crusts & browns. Moat: Greece's oldest fast food, sold by *koulouratzides* since Byzantine Constantinople. **Twist:** 🌾 *Wholewheat* (delta).
- ✅ **`greece-paximadia`** (Cretan twice-baked rusks) — score before baking, long low second bake to dry to the core; the base for **dakos**. Moat: named for Paxamos, the ancient baker whose name became the word for "rusk" (→ Italian *biscotto*). **Twist:** 🍯 *Sweet Aniseed & Orange* — **structural** (sweet coffee-dunking rusk; genuinely differs).

**Twists logged for taste-check:** bougatsa→cheese · kataifi→chocolate · revani→coconut · halva→orange & almond · koulouri→wholewheat · paximadia→sweet aniseed. Web-grounded (bougatsa sweet-vs-cheese + Thessaloniki ritual; halva 1:2:3:4 ratio & fasting role); all established authentic variants; no "no-twist-found" cases.

### Prices (§2/§9)
- **1 new gap** appended: `aniseed` (#289 — `fennel seed` R590 is keyed; aniseed/glykaniso is the traditional one for sweet paximadia). Add a key or alias.
- Everything else resolves: phyllo pastry (118) · kataifi pastry (166) · fine/coarse semolina (37–43) · milk (20) · butter (160) · feta (230) · walnuts (370) · pistachios (800) · dark chocolate (313) · desiccated coconut (160) · raisins (168) · baking powder (76) · Greek yoghurt (80) · sesame seeds (244) · instant yeast (90) · bread/wholewheat/cake/barley flour · honey (160) · orange juice (25).

### Greek tail progress
- **24 of ~38 thin cards now lifted** (batches 1–4). **~14 remain** in the LIFT queue: milopita · horiatiko-psomi · ladopsomo · horta · lahanosalata · strapatsada · kreatopita · kontosouvli · arni-sto-fourno · bifteki · keftedes · pastitsada · kokkinisto (+ any dup-ruling leftovers). No new CUT&REPLACE flags.

### Not committed
- Staged as a diff, **not committed**. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-4 — 6 Greek tail cards lifted to WOW + researched twists (bougatsa, kataifi, revani, halva, koulouri, paximadia)`
