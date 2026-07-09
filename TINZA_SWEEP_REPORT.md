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

---

## Phase 2 · Greek tail — Batch 5 (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): still holding `wk_europe.js` for the Greek tail.** Pre-flight: `git pull` = "already up to date" (network back), tree clean at `71ae225`; verified the 13 heroes + all batch 1–4 cards are WOW-intact and untouched; re-read all 6 targets fresh (still thin). Edited only these 6 non-hero mains.

### Cards lifted this batch (6) — full-WOW rewrite + 1 researched twist each; 6/6 verified via `applyRecipeVersion` (1 structural + 5 delta twists all apply; bases clean); `node --check` clean; byte-discipline held (6 lines changed)
- ✅ **`greece-kreatopita`** (meat pie) — cook filling bone-dry, bind with egg & cheese, score before baking. Moat: a whole family of regional pies, queen = Cephalonia's. **Twist:** 🍚 *Kefalonian (Three-Meat & Rice)* — **structural** (beef+pork+lamb+rice, genuinely differs, §5).
- ✅ **`greece-kontosouvli`** (spit-roast pork) — keep the fat on, marinate long, MEDIUM heat & patience (not fierce). Moat: "short spit", the *panigyri* festival smell. **Twist:** 🐔 *Chicken* (delta — swap + faster cook).
- ✅ **`greece-arni-sto-fourno`** (Easter roast lamb) — stud with garlic, roast over lemon potatoes, rest before carving. Moat: oven vs outdoor-spit is the unsettled Greek Easter debate. **Twist:** 🕰️ *Slow-Roasted Shoulder* (delta — 6–7 hr fall-apart).
- ✅ **`greece-bifteki`** (herb patties) — soaked bread + grated onion = bouncy not dry, dimple & don't press. Moat: the name is Greek-ified "beefsteak" (British troops). **Twist:** 🧀 *Gemisto (Feta-Stuffed)* (delta).
- ✅ **`greece-keftedes`** (fried meatballs) — soaked bread, mint signature, flour-dust for a crisp shell, hot oil. Moat: from Ottoman *köfte* ← Persian *kufteh* ("pounded"). **Twist:** 🍶 *Ouzo-Spiked* (delta).
- ✅ **`greece-pastitsada`** (Corfu beef & bucatini) — build the *spetseriko*, braise low 2 hr, thick hollow bucatini. Moat: Corfu's Venetian legacy — spetseriko named for the *spezieria* apothecary that sold it. **Twist:** 🐔 *Kokoras (Rooster)* — the original meat (delta).

**Twists logged for taste-check:** kreatopita→Kefalonian three-meat & rice · kontosouvli→chicken · arni→slow-roasted shoulder · bifteki→feta-stuffed · keftedes→ouzo · pastitsada→rooster. All web-grounded (Kefalonian kreatopita, Corfu spetseriko/kokoras, arni variations searched); established authentic variants; no "no-twist-found" cases. Note: `pastitsada` and `stifado` (batch 1) are both spiced beef stews but stay distinct — pastitsada is the Corfiot spetseriko-and-bucatini dish, stifado the sweet-onion Venetian *stufato*.

### Prices (§2/§9)
- **No new gaps** — all resolve: beef mince/chuck/shin · pork mince/neck · lamb neck (180)/leg of lamb (190) · chicken (90) · phyllo pastry (118) · feta (230) · rice (27) · pasta/bucatini (36) · parmesan (750, for "parmesan (or kefalotyri)") · red wine (45) · tomato paste (180) · cinnamon/cloves/nutmeg/cumin/paprika (364)/bay · ouzo (320) · mint (650) · mustard (84). Allspice (unpriced) is mentioned only in-method for the spetseriko, not as a priced line.

### Greek tail progress — nearly done
- **30 of ~38 thin cards now lifted** across batches 1–5. **Only 7 remain** to finish Greece (mostly breads/salads/light dishes, per your note):
  1. `greece-lahanosalata` (cabbage salad) · 2. `greece-strapatsada` (eggs with tomato/feta) · 3. `greece-horiatiko-psomi` (village bread) · 4. `greece-horta` (boiled wild greens) · 5. `greece-ladopsomo` (olive-oil bread) · 6. `greece-milopita` (apple cake) · 7. `greece-kokkinisto` (red-braised meat — the one remaining main).
- No new CUT&REPLACE flags this batch. (`frappe` lifted and `garides-saganaki` folded by Opus in `64c1c84`, per earlier flags — off the list.)

### Not committed
- Staged as a diff, **not committed**. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-5 — 6 Greek tail mains lifted to WOW + researched twists (kreatopita, kontosouvli, arni-sto-fourno, bifteki, keftedes, pastitsada)`

---

## Phase 2 · Greek tail — Batch 6 (FINAL) (`wk_europe.js`) — 7 Jul 2026

**FILE HELD (§0.5): holding `wk_europe.js`.** Pre-flight: `git pull` = "already up to date", tree clean at `2d755d6`; heroes + batches 1–5 verified WOW-intact; all 7 targets re-read fresh (still thin). Edited only these 7 non-hero cards.

### Cards lifted this batch (7) — full-WOW rewrite + 1 researched twist each; 7/7 verified via `applyRecipeVersion` (2 structural + 5 delta twists all apply; bases clean); `node --check` clean; byte-discipline held (7 lines changed)
- ✅ **`greece-lahanosalata`** (winter cabbage salad) — slice fine, massage, REST before serving. Moat: Greece's winter salad when tomatoes are gone. **Twist:** 🌸 *Politiki (Constantinople)* — red pepper + mustard-vinegar (delta).
- ✅ **`greece-strapatsada`** (eggs in tomato) — reduce the tomato to jam FIRST, pull eggs off underdone. Moat: from Italian *strapazzare* ("beat up"), a glut dish; = kagianas. **Twist:** 🫑 *With Peppers* (menemen-leaning, delta).
- ✅ **`greece-horiatiko-psomi`** (village loaf) — long first rise, deep score, steam. Moat: baked weekly in the communal oven, marked with a cross, never wasted. **Twist:** 🫒 *Eliopsomo (Olive Bread)* (delta).
- ✅ **`greece-horta`** (boiled wild greens) — cook uncovered to stay green, save the *zoumi*, dress hard with oil & lemon. Moat: foraged greens, Ikarian Blue-Zone staple. **Twist:** 🌶️ *Tsigarelli (Corfiot spicy)* — **structural** (sautéed, not boiled).
- ✅ **`greece-ladopsomo`** (olive-oil bread) — oil makes it soft & long-keeping. Moat: oil marks feast-vs-fast in the Orthodox calendar. **Twist:** 🍅 *Ladenia (Tomato & Onion)* — **structural** (the Cycladic proto-pizza).
- ✅ **`greece-milopita`** (apple cake) — thin apple, don't over-mix, fan extra on top. Moat: the apple's 3,000-year Greek-myth symbolism (Hesperides, Discord, apple-throwing proposals). **Twist:** 🌰 *Walnut & Cinnamon* (delta).
- ✅ **`greece-kokkinisto`** (red-braised beef) — fry tomato paste to brick-red before liquid; braise low. Moat: the "reddened" twin of lemonato — the axis Greek home cooking swings on. **Twist:** 🐑 *Lamb (Arni Kokkinisto)* (delta).

**Twists logged for taste-check:** lahanosalata→Politiki · strapatsada→peppers · horiatiko-psomi→eliopsomo · horta→tsigarelli · ladopsomo→ladenia · milopita→walnut · kokkinisto→lamb. Web-grounded (Politiki lahanosalata + Corfu tsigarelli searched); all established authentic variants; no "no-twist-found" cases.

### Prices (§2/§9)
- **No new gaps.** `red wine vinegar` (#286, already logged) now used by a 5th dish (lahanosalata Politiki) — count bumped and flagged as **recurring, worth keying**. Everything else resolves: cabbage (25) · carrot (25) · red pepper (100) · mustard (84) · spinach (93, the priced stand-in for wild greens) · olives (165) · paprika (364) · chilli (80) · fennel seed (590) · tomato paste (180) · apples (27) · walnuts (370) · lamb neck (180) · flour/yeast/olive oil.

## 🎉 GREECE COMPLETE
**Live inventory check: 54 Greek cards · 54 WOW · 0 thin.** Every Greek dish (13 heroes + 3 earlier swaps + **36 tail cards across batches 1–6**) is now WOW-compliant, each carrying a researched twist. This is the first fully-finished World-Kitchen country under the sweep.
- Batches 1–6 lifted: **36 tail cards**, every one verified merging via `applyVersionDelta`, byte-discipline held throughout, `node --check` clean on every batch.
- Price gaps surfaced for Greece (never guessed): `yellow split peas`, `red wine vinegar` (×5, recurring), `pickling onions`, `octopus`, `aniseed` — all in `TINZA_WK_PRICE_GAPS.md` for Tina.
- No cards auto-deleted; all CUT&REPLACE/dup flags handed to Tina/Opus (loukoumades/youvetsi stubs, garides-saganaki, frappe — all since resolved by Opus).

### Next country (Tina's pick)
Per the coverage map (flowchart v42): the thin **South/Central block** is next — Portugal (52) · Switzerland (32) · Austria (Opus started) · Belgium (22) · Netherlands (22) — plus the §6.5 too-simple audit on `wk_world.js` / `wk_southafrica.js` (my cleared files). Germany/UK/Italy remain create-from-scratch (propose lineups, don't author) per §1.

### Not committed
- Staged as a diff, **not committed**. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js batch-6 — final 7 Greek tail cards lifted to WOW + researched twists (lahanosalata, strapatsada, horiatiko-psomi, horta, ladopsomo, milopita, kokkinisto); GREECE COMPLETE`

---

## Phase 3 · Portugal — Batch 1 (`wk_europe.js`) — 9 Jul 2026

**FILE HELD (§0.5 / one-driver rule): I am now holding `wk_europe.js` for PORTUGAL.** Opus / anyone else: please stay clear of this file until Portugal pauses. Pre-flight: `git fetch` = clean, local HEAD == origin/main, tree clean before edits. Greece (54 cards) and every non-Portugal country left **byte-identical** — only 8 Portugal lines changed (`git diff --numstat` = 8/8).

**Scope confirmed:** Portugal has **52 cards, all thin** (empty `howThisFeels`, zero `versions`). This batch lifts the **8 thinnest** (all mains, methods were ~100–174 chars). ~39 Portugal cards remain for later batches (minus the 5 hero-candidates below).

### 🏛️ HERO-CANDIDATES — flagged, left UNTOUCHED for Opus (not rewritten as heroes)
Per the brief, these are the most-searched Portuguese dishes; I did **not** touch them so Opus can author them as heroes:
- `portugal-bacalhau-a-bras` 🏛️ (the canonical "bacalhau" hero — currently thin, m134)
- `portugal-pasteis-de-nata` 🏛️ · `portugal-caldo-verde` 🏛️ · `portugal-francesinha` 🏛️ · `portugal-frango-piri-piri` 🏛️
- **Bacalhau ambiguity flag:** there are two *other* distinct salt-cod dishes — `portugal-bacalhau-com-natas` (Cod with Cream) and `portugal-bacalhau-a-gomes-de-sa` — which I've queued for **LIFT** (they're separate dishes, not the à Brás hero). If Opus wants the whole bacalhau cluster as heroes, say so and I'll drop them from the lift queue.

### Cards lifted this batch (8) — each: full-WOW rewrite (why-led method + moat + SA buy-names + storage/leftovers-in-storage + kcal/nutrition) + 1 web-researched twist as a WK string delta. **All 8 verified merging via a faithful copy of `applyVersionDelta` (every `swapStep.to` applied, every `addIng.item` merged, ingredient counts correct); `node --check` clean; byte-discipline held (8 lines changed, nothing else).**
- ✅ **`portugal-espetada-madeirense`** (Madeira bay-laurel beef skewers) — big well-marbled cubes (small ones grey before they char), hot wood embers not flame, springy-not-firm doneness, rest. Moat: 1800s shepherds skewered beef on live bay-laurel branches whose sap seasons from the inside; stands hang the skewers vertically so juices drip onto bread. **Twist:** 🧄 *Manteiga de Alho* — garlic-parsley butter brushed on off the embers (the churrascaria finish).
- ✅ **`portugal-alheira-de-mirandela`** (smoked bread-and-poultry sausage) — low/slow so the bready paste stays creamy inside a crisp skin, served the authentic way with grelos + *batata a murro* + a runny egg (upgraded from "fries"). Moat: **invented by Portugal's secret Jews after 1497** — a pork-free sausage (poultry/game + bread) smoked in the chimney to pass as chouriço; a disguise that became a PGI delicacy. **Twist:** 🥟 *Folhado de Alheira* — the filling squeezed out and baked in crisp puff-pastry rolls (the modern Lisbon petisco).
- ✅ **`portugal-bitoque`** (café steak + egg on a pan molho) — dry-sear the thin steak fast, deglaze the fond with wine, mustard + cold-butter finish for gloss, egg *a cavalo*. Moat: name = *bife* + *toque* ("a touch of steak"), the cheap cut that fed Lisbon's clerks; no egg = just a bife. **Twist:** 🍺 *Molho de Cerveja* — deglaze with lager instead of wine (malt-caramel molho, à la Porto's francesinha).
- ✅ **`portugal-iscas-com-elas`** (wine-marinated liver with potatoes) — thin slices, *vinha d'alhos* marinade tames the iron, flash-sear 30–60 s a side (past pink = rubber), reduce the marinade into the sauce. Moat: *isca* = "bait"; the ancestral nose-to-tail Lisbon *casa de pasto* plate. **Twist:** 🧅 *Iscas de Cebolada* — smothered in slow-sweated onions + a little bacon.
- ✅ **`portugal-cabrito-assado`** (roast kid, garlic & wine) — overnight marinade to the bone, lard tucked under the skin to self-baste, 160 °C low-and-slow then a 200 °C blast to crisp. Moat: **Cabrito de Barroso is PDO**; villages roast it on a rack above a rice tray. **Twist:** 🍚 *Com Arroz de Forno* — kid roasted over a tray of rice so the drippings cook the grain (the Monção/Minho showpiece).
- ✅ **`portugal-rojoes-a-minhota`** (Minho fried marinated pork) — *vinho verde* marinade, slow render in lard for deep colour, glaze in the reduced marinade, finish with **cumin + lemon** (the northern signature). Moat: the heart of the Minho *sarrabulho* whole-pig feast; the cumin is a fingerprint of the Arab spice trade. **Twist:** 🌰 *Com Castanhas* — chestnuts browned in the pork fat (the pre-potato starch).
- ✅ **`portugal-bife-a-portuguesa`** (steak, smoked ham, garlic-wine sauce) — hard sear, deglaze + mustard + cold-butter molho, presunto warmed to release its smoke, served sizzling in a hot clay dish over thin fried potatoes. Moat: made famous by Lisbon's Café de São Bento; a Portuguese echo of the French bistro steak. **Twist:** 🍳 *Com Ovo a Cavalo* — a fried egg on horseback, yolk melting into the sauce (Algarve).
- ✅ **`portugal-ensopado-de-borrego`** (Alentejo lamb stew over bread) — brown the bone-in lamb, bloom the paprika without scorching, keep it **brothy not thick** (the bread has to drink it), coriander finish, ladled over day-old country bread. Moat: descends from **tharîd**, the medieval Arab bread-and-broth dish — bread as plate, bowl and filler. **Twist:** 🌿 *Com Hortelã* — a bundle of mint steeped in (the older, pre-coriander Alentejo accent).

**Twists logged for taste-check (all web-researched, all pass the taste-gate; no "no-twist-found" cases this batch):** espetada→garlic-butter baste · alheira→folhado pastry rolls · bitoque→beer sauce · iscas→cebolada onions · cabrito→arroz de forno · rojões→chestnuts · bife→ovo a cavalo · ensopado→mint. Grounded in: Visit Madeira / TasteAtlas (espetada laurel & protein variants), Ruralea / Catavino (alheira crypto-Jewish origin + modern folhados), based.cooking / HonestCooking (bitoque beer & mustard molho), thepurpledoorsupperclub (iscas de cebolada), ACPP / Produtos Tradicionais (cabrito arroz de forno à Monção), pt.wikipedia / VortexMag (rojões chestnuts + cumin + sarrabulho), Culinary Backstreets (bife à portuguesa / Café de São Bento), Clara de Sousa / thepurpledoorsupperclub (ensopado tharîd origin + mint).

### Verification (WRITTEN, per §12 — harness ran on the actual file after splicing)
- Re-parsed all 8 cards **from the live `wk_europe.js`** (not the draft): full §1 field set present on every card, `howThisFeels` non-empty, `versions` = [Classic `default:true` + 1 twist], trivia moats 282–460 chars, kcal present.
- Delta engine: exact copy of `applyVersionDelta` run on each — **8/8 twists merge clean** (swapStep text applied, addIng items merged in sequence, no missing anchors).
- `node --check sections/wk_europe.js` → **clean**. `git diff --numstat` → **8 added / 8 removed** = only the 8 target lines; Greece + all other countries byte-identical.
- **course** correct (all `main`). **nutrition** uses the WOW comma+Sodium format matching the finished Greek cards. **photoName** omitted on all 8 (none shot) → clean emoji fallback, photo-audit stays green.

### 🟡 / ⚠️ honest flags (deepen, don't over-claim)
- 🟡 **`pairsWith` C4:** I cross-linked to real Portugal cards (`Broa de Milho`, `Migas à Alentejana`) plus generic accompaniments. **Tina/Opus: confirm these resolve as clickable goesWith pills** — I verified the ids exist in-file but did not run the live link resolver.
- 🟡 **Leftovers:** folded into `storage` (creative-reuse lines), matching the Greek-tail precedent, rather than a separate `leftovers` field. If the render wants a dedicated key, flag it.
- ⚠️ **Costing honesty:** WK recomputes cost from ingredients, so 2 unpriced fat/nut lines slightly understate: `lard` (cabrito, rojões) and `chestnuts` (rojões twist) — logged to `TINZA_WK_PRICE_GAPS.md` (#290–291). `kid goat` maps to existing gap #39 `goat meat`. Everything else prices (alheira via `sausage` 130, presunto via `ham`, red-wine-vinegar via `vinegar` 25, turnip greens via `spinach`, puff pastry 80).

### Prices (§2/§9) — appended to `TINZA_WK_PRICE_GAPS.md`
- **New:** `lard` (#290, ×2), `chestnuts` (#291). **Existing, noted:** `kid goat` → #39 `goat meat`.

---

## §6.5 TOO-SIMPLE AUDIT — Portugal + Spain (report-only, NEVER auto-deleted) — 9 Jul 2026

Per Tina's mid-session steer, ran the Shelf-WOW audit on both countries. **Nothing deleted or replaced in code — every CUT&REPLACE below is a PROPOSAL awaiting human sign-off.** Test used: *≤5 ingredients AND method <~320 chars, or pure assembly/pour/boil* → then "would a serious home cook screenshot this?"

### 🇵🇹 Portugal — verdict: **all LIFT, zero cuts.**
All 12 flagged-simple cards are **real dishes written thin**, not non-recipes — they get lifted in later Portugal batches, none cut:
- Desserts written thin (LIFT): `ovos-moles` (Aveiro's PDO egg-yolk sweet in wafer shells), `pao-de-lo` (cloud sponge), `cavacas` (glazed choux), `encharcada` (Alentejo convent egg sweet), `salame-de-chocolate`, `bolo-de-bolacha` (no-bake coffee-biscuit cake).
- Savoury/sides written thin (LIFT): `broa-de-milho` (yeasted maize bread — real technique), `queijo-assado` (grilled cheese starter), `peixinhos-da-horta` (**the battered green beans that seeded Japanese tempura** — huge moat, LIFT don't cut), `sardinhas-assadas` (Lisbon's festival grilled sardines — near-hero), `leitao` (Bairrada suckling pig — near-hero).
- Drink (LIFT, not cut): `ginjinha` — a sour-cherry liqueur, but genuine maceration technique + strong moat (Lisbon's tiny *Ginjinha* bars; Óbidos serves it in an edible chocolate cup). Like Greece's frappé ruling → **LIFT with technique+moat**, flagged borderline.
- **Note:** no "Marinated Olives" card exists in Portugal.

### 🇪🇸 Spain — audit-only (Spain is NOT in my lift scope; flagged for the Spain sweep). 59 cards, 29 simple/drink candidates. Proposed buckets for sign-off:

**CUT & REPLACE — assembly-only non-recipes (match the brief's exact examples):**
| Card | Why it fails §2 | Proposed same-cuisine WOW replacement + moat |
|---|---|---|
| `spain-pan-con-tomate` | *(Tina-flagged)* bread + rubbed tomato, no cook | **Coca de Recapte** — Catalan escalivada-&-anchovy flatbread ("pizza without cheese"), a harvest-fair staple. *(Or LIFT as proper `pa amb tomàquet` with technique+moat — Tina's call.)* |
| `spain-pan-tostado` | toast + oil | **Salmorejo** — Córdoba's thick chilled tomato-bread cream, topped with jamón & egg; the richer ancestor of gazpacho, also used as a dip. |
| `spain-pan-frito` | fried bread + salt | **Torrijas** — Holy-Week milk-soaked fried bread in honey/wine syrup; a 15th-c convent sweet. |
| `spain-pan-con-ajo` | bread + garlic + oil | **Sopa de Ajo** — Castilian garlic soup: paprika, stale bread, a poached egg; peasant survival food. |
| `spain-patatas-hervidas` | boiled potatoes + salt (brief's exact example) | **Patatas a la Riojana** — potatoes *snapped* (not cut, to release starch) & stewed with chorizo + pimentón; the Rioja harvest stew. |
| `spain-arroz-blanco` | white rice + water (brief's exact example) | **Arroz al Horno** — Valencian oven rice with chickpeas, blood sausage & a whole roasted garlic head, cooked in the paella's leftover broth. |
| `spain-ensalada-de-tomate` | tomato + oil + vinegar | **Pipirrana** — Jaén chopped salad (tomato, pepper, egg, tuna) in a cumin-garlic dressing; the olive-harvester's lunch. |
| `spain-pimientos-asados` | roasted pepper + oil | **Piquillos Rellenos** — Lodosa-PDO piquillos, fire-roasted & hand-peeled (never washed), stuffed with cod brandade. |

**CUT & REPLACE — plain drinks (§2: pour-only, brief's exact examples):**
| Card | Why | Proposal |
|---|---|---|
| `spain-clara` | beer + lemon soda (brief's exact example) | **CUT.** Optional replace: **Queimada** — Galician flamed-aguardiente ritual with a spoken *conxuro* to ward off spirits (spectacle + moat). |
| `spain-cafe-con-leche` | coffee + milk (brief's exact example) | **CUT.** Optional replace: **Carajillo** — coffee spiked & flamed with brandy/rum, citrus & beans; the "courage" coffee. |
| `spain-tinto-de-verano` | wine + soda, pour | **CUT / fold** into Sangria (redundant). |
| `spain-rebujito` | sherry + soda + mint | Borderline — has a Feria-de-Abril moat. **LIFT-lite or fold**, Tina's call. |

**KEEP as LIFT — real Spanish dishes/drinks written thin (for the Spain sweep, not cut):**
`spain-flan` · `spain-arroz-con-leche` · `spain-pimientos-de-padron` (the "some are hot, some are not" roulette) · `spain-chorizo-al-vino` · `spain-calamares-a-la-romana` · `spain-huevos-rotos` · `spain-cochinillo-asado` (Segovia suckling pig — 🏛️ hero-candidate) · `spain-cordero-asado` · `spain-solomillo-al-whisky` (Seville tapa) · `spain-patatas-panaderas` · `spain-escalivada` (the brief's own LIFT example) · `spain-patatas-con-alioli` · `spain-judias-verdes` · `spain-setas-al-ajillo` · `spain-zanahorias-alinadas` (Andalusian aliñás) · `spain-sangria` (🏛️ ) · `spain-horchata` (Valencia PDO chufa — real soak/blend/strain technique).
- **Note:** no "Marinated Olives" card in Spain either — likely lives in another section or isn't present in `wk_europe.js`.

### Not committed
- Working tree only, **not committed** (Tina reviews on live + pushes via GitHub Desktop). Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js portugal batch-1 — 8 thin mains lifted to WOW + researched twists (espetada, alheira, bitoque, iscas, cabrito, rojões, bife à portuguesa, ensopado)`
- **Pausing here** per the small-batch rule for Tina to pull/review before Portugal batch 2. Remaining Portugal LIFT queue ≈ 39 cards (5 hero-candidates excluded).
- *Committed by Tina as `26f8479 "code"` (GitHub Desktop) — batch 1 is live.*

---

## COURSE-FIELD SANITY AUDIT — whole `wk_europe.js` (Portugal first, then all countries) — 9 Jul 2026

**Whitelist edit — only the `course` scalar touched, nothing else rewritten or deleted.** Audited **all 570 cards across 19 countries**; ran two heuristic scans (soup/side/drink/dessert flags + type↔course cross-checks), then applied per-dish judgment against Tina's guidance (light soups→starter · hearty bean/meat/substantial-fish soups & stews→keep main · breads/mashes/grain sides→side · sweets→dessert).

### ✅ Change applied (1)
| id | old → new | why |
|---|---|---|
| `portugal-acorda` | `main` → **`starter`** | Light bread-and-egg soup (bread · garlic · coriander · 1 egg · water) — a starter, per Tina's lead example. |

- `node --check` clean · `git diff --numstat` = **1/1** (one line, only the `course` token changed; word-diff confirms nothing else moved).

### Reviewed & deliberately KEPT (per-dish judgment — documented so the call is auditable)
- **Portugal (all 52 reviewed):** only açorda was off. `caldo-verde` already correctly `starter` (light kale soup). Kept `main`: `sopa-de-pedra` (hearty bean/meat "stone soup"), `sopa-de-cacao` (substantial bread-thickened dogfish soup — a main-course soup in the Alentejo), `favas-guisadas` (bean stew), `arroz-de-marisco` / `arroz-de-pato` (rice *mains*, not sides). Desserts/sides/drink all correct.
- **Hearty soups kept `main` (guidance: bean/meat/substantial-fish → main):** Greece `fasolada`·`kakavia`; Hungary `gulyas`·`halaszle`; Finland `hernekeitto`·`lohikeitto`·`siskonmakkarakeitto`; Netherlands `erwtensoep`; Norway `fiskesuppe`·`sodd`; Russia `borscht`·`shchi`·`ukha`·`solyanka`; Sweden `artsoppa`; Ukraine `borshch`·`kapusniak`; Switzerland `fondue-chinoise`.
- **Cold/light soups already correct:** Russia `okroshka` (`starter`) — a light cold kvass soup; Sweden `blabarssoppa` (`drink`) — traditionally drunk warm. Left as-is.
- **"Bready/starchy" names that are actually mains, NOT sides (not accompaniments):** Georgia `khachapuri`·`acha-puri` (cheese-bread *meals*), Turkey `pide`·`borek`, Poland `pierogi-ruskie`, Russia/Ukraine `vareniki`/`varenyky`, Greece `gemista` (veg main). Kept `main`.
- **Savoury item with a sweet-sounding name:** Sweden `smorgastarta` ("sandwich cake") is a savoury seafood/egg centrepiece — kept `main`, NOT dessert.
- **Savoury pancakes/pastries kept as authored** (`side`/`main` both defensible as snack/accompaniment): NL `pannenkoeken` (dinner main), `ontbijtkoek`; Poland `placki-ziemniaczane`; Ukraine `deruny`; Finland `karjalanpiirakka`; N. Ireland `boxty`; Belgium `speculoos-spread`; Georgia `satsivi` (type says "sauce" but it's a chicken *main*).
- **Germany stub** (`lentil-soup`·`potato-soup` as `starter`): hearty Eintöpfe, arguably main, but currently defensible and Germany is a create-from-scratch stub (§1) — left untouched, flagged here for whoever authors the German lineup.

**Net:** the file's `course` data was already well-classified; açorda was the one clear miss. No dessert/salad/drink mislabels found; no blank/non-standard `course` values (distribution: main 281 · dessert 116 · side 87 · starter 66→67 · drink 18 · soup 1 · salad 1).

### Not committed (course audit)
- Working tree only. Suggested commit (§2 format, isolated so its diff is just the course field):
  - `wk-sweep: wk_europe.js course-audit — portugal-acorda main→starter (light bread soup); full 570-card course pass, no other changes needed`
- *Committed by Claude as `3709c6d`.*

---

## Phase 3 · Portugal — Batch 2 (`wk_europe.js`) — 9 Jul 2026

**FILE HELD (§0.5 / one-driver): still holding `wk_europe.js` for Portugal.** Pre-flight: `git fetch` clean; synced past Tina's `26f8479 "code"` (batch 1 live) + `475eeef "change"` (touched only `TINZA_NOW.mermaid` + `core.js` — a *new* BD13 helper added; the `applyVersionDelta`/`applyRecipeVersion` engine I verify against is byte-unchanged). Re-read all 9 targets fresh (still thin). Batch 1 (8 cards) + course-audit confirmed intact.

**Ruling applied:** the **whole cod cluster is reserved for Opus** — skipped `bacalhau-a-bras`, `bacalhau-com-natas`, `bacalhau-a-gomes-de-sa` **and** `pataniscas-de-bacalhau` (salt-cod fritters). ⚠️ **Flag:** if you meant only the 3-hero trinity (not pataniscas), say so and I'll lift `pataniscas-de-bacalhau` in a later batch — it's currently left thin.

### Theme: coast & shellfish (9 non-cod cards) — each: full-WOW rewrite + 1 web-researched twist as a WK string delta. **9/9 verified merging via `applyVersionDelta` (every swapStep applied, every addIng merged, ingredient counts correct); re-parsed from the live file (full field set, HF, 2 versions w/ delta, moats 275–427 chars); `node --check` clean; byte-discipline held (9 lines changed, nothing else — heroes + cod cluster confirmed still thin).**
- ✅ **`portugal-amijoas-a-bulhao-pato`** (starter — clams in garlic, coriander & wine) — purge the grit, pale-gold garlic never brown, steam 3–5 min and stop the second shells open, **no added salt** (briny clams). Moat: named for the *diner* — 19th-c poet-epicure Bulhão Pato — not its cook (credited to chef João da Mata). **Twist:** 🧈 *Molho Aveludado* — the sauce mounted with cold butter into a velvety molho. *(honest note: a refinement, not a reinvention — flagged 🟡.)*
- ✅ **`portugal-polvo-a-lagareiro`** (roast octopus + punched potatoes) — tenderness won at the **simmer** ("knife slides in with zero resistance"), never salt the water, then a shameless flood of olive oil. Moat: "à lagareiro" = the olive-press (*lagar*) pressing-season feast, defined by the oil not the protein. **Twist:** 🌽 *Com Broa* — crumbled cornbread crust roasted golden.
- ✅ **`portugal-lulas-recheadas`** (rice-stuffed squid) — under-fill two-thirds (rice swells & bursts the tube), braise **long & low** (squid: seared-fast or slow-cooked, never between). Moat: the chopped tentacles in the filling = the tell of a cook who wastes nothing. **Twist:** 🌭 *Recheio de Chouriço e Presunto* — the Algarve meat stuffing (delta swaps rice→chouriço+presunto+yolk).
- ✅ **`portugal-ameijoas-na-cataplana`** (clams in the copper pot) — build a jammy tomato refogado first, seal the cataplana, open it at the table for the steam theatre, no added salt. Moat: the cataplana pot is **Moorish** (a tagine that closes); pork-and-clam versions were an Inquisition-era test of Christian faith. **Twist:** 🥓 *À Algarvia* — chouriço & presunto rendered under the clams (twist trivia uses a *different* angle — flavour complementarity, not the reused Inquisition fact).
- ✅ **`portugal-sopa-de-cacao`** (Alentejo dogfish bread soup, **course kept `main`** — substantial) — the *coentrada* (pounded raw garlic + coriander) is the backbone, vinegar-soak the fish, never boil. Moat: dogfish (a small shark) spoiled fast inland, so vinegar + pungent coriander made it safe — preservation turned proud soup. **Twist:** 🌿 *Com Poejo* — wild pennyroyal, the older herb.
- ✅ **`portugal-sardinhas-assadas`** (charcoal sardines on bread) — fat *summer* sardines + real charcoal only, ungutted for moisture, on bread that drinks the oil. Moat: they ARE the Festas de Santo António (June 12–13), manjerico basil + love-poems, eaten with fingers. **Twist:** 🍶 *De Escabeche* — bathed in warm garlic-paprika vinegar, eaten cold next day.
- ✅ **`portugal-arroz-de-marisco`** (soupy seafood rice) — must be **malandrinho** (loose, spoonable), broth built from prawn shells, seafood added last. Moat: deliberately the *opposite* of dry paella; judged first on its broth. **Twist:** 🦞 *de Lavagante* — lobster in the shell, the festa crown.
- ✅ **`portugal-caldeirada`** (layered fisherman's stew) — **layer, don't stir** (swirl the pot to keep fish whole), two+ fish, don't drown it. Moat: born on the boats from unsold catch; cousin of bouillabaisse & zarzuela. **Twist:** 🦐 *À Fragateira* — the Tejo bargemen's shellfish version.
- ✅ **`portugal-carne-de-porco-a-alentejana`** (pork & clams) — **massa de pimentão** does double duty (marinade + sauce), sear the pork hard, let the clam liquor salt it. Moat: despite the name it's likely *Algarve*-born; "Alentejana" flags the acorn-fed inland pork — two regions on one plate. **Twist:** 🍞 *Com Migas* — garlicky fried bread instead of potato.

**Twists logged for taste-check (all web-researched, all pass the taste-gate):** bulhão pato→butter-mount (🟡 refinement) · polvo→broa crust · lulas→chouriço/presunto stuffing · cataplana→à algarvia · sopa de cação→poejo · sardinhas→escabeche · arroz de marisco→lobster · caldeirada→à fragateira · carne à alentejana→migas. Grounded in: Wikipedia/Visit Portugal (bulhão pato = João da Mata, poet-diner) · Clara de Sousa/ACPP (polvo broa, arroz de polvo from the broth) · Pingo Doce/Pescanova (lulas rice-vs-meat stuffing) · TasteAtlas/Jean Anderson (cataplana Moorish origin + Inquisition faith-test) · Produtos Tradicionais DGADR (sopa de cação coentrada + poejo) · Taste of Lisboa/Cooltour (Santo António sardines + escabeche) · Nestlé/food52 (arroz *malandrinho* + lavagante) · James Beard/TasteAtlas (caldeirada layering + à fragateira/enguias) · Leite's/Wikipedia (carne à alentejana massa de pimentão + Algarve origin). No "no-twist-found" cases.

### Prices (§2/§9) — appended to `TINZA_WK_PRICE_GAPS.md`
- **New:** `broa` (#292), `lobster` (#293). **Systemic flag:** bare `flour` is unpriced but used by **~100+ WK cards** file-wide — one `flour`→`cake flour` alias fixes them all; kept `flour` for sameness. `piri-piri` reworded to `piri-piri (or chilli)` so it prices via `chilli` (R80).
- **Pre-existing base-seafood gaps (already logged, noted not re-added):** `clams` (#15), `octopus` (#37/#288), `squid` (#159), `mixed fish` (#35), `sardines` (#161), `mixed seafood` (#12, now prices via `prawns`). Chouriço/presunto price via `chorizo`/`ham`; `red pepper paste (massa de pimentão)` prices via `red pepper` (R100); prawns/mussels/crab all keyed.

### Portugal progress
- **17 of 52 lifted** (batch 1: 8 mains · batch 2: 9 coast/shellfish) + 1 course fix (açorda). **~28 remain** in the LIFT queue (8 excluded: 4 cod reserved + 4 non-cod heroes): mains `tripas-a-moda-do-porto·favas-guisadas·bifinhos-com-cogumelos·arroz-de-pato·chanfana·bifana·feijoada·leitao·cozido-a-portuguesa·sopa-de-pedra` · starter `queijo-assado` · sides `migas-a-alentejana`(done-side)/`broa-de-milho`(done-side) · drink `ginjinha` · **11 desserts** `ovos-moles·leite-creme·bolo-de-arroz·bolo-rei·bolo-de-bolacha·toucinho-do-ceu·pao-de-lo·salame-de-chocolate·cavacas·encharcada·queijadas`.

### Not committed (batch 2)
- Working tree only. Suggested commit (§2 format):
  - `wk-sweep: wk_europe.js portugal batch-2 — 9 coast/shellfish cards lifted to WOW + researched twists (bulhão pato, polvo à lagareiro, lulas recheadas, cataplana, sopa de cação, sardinhas, arroz de marisco, caldeirada, carne à alentejana)`
- *Committed `f4f4bb7` (+ Tina's `142e8de`).*

---

## Phase 3 · Portugal — Pataniscas lift (`wk_europe.js`) — 9 Jul 2026

**Ruling applied:** Tina un-reserved `pataniscas-de-bacalhau` (workhorse fritter, not a hero). The **cod trinity reserved for Opus stays** = `bacalhau-a-bras` · `bacalhau-com-natas` · `bacalhau-a-gomes-de-sa` (all still thin, untouched). Committed atomically on its own so the cod family stays coherent.

- ✅ **`portugal-pataniscas-de-bacalhau`** (starter) — full WOW: desalt-first method, **no added salt** (cod is cured — said why), 170–180°C for crisp-not-greasy, the arroz-de-feijão partner. Moat: pataniscas are the frugal cousin of bolinhos de bacalhau, made from the ragged flakes too small to shape into balls. **Twist:** 🍺 *Massa com Cerveja* — cold-beer batter + whipped whites for featherlight fritters (web-researched, Petitchef/NCultura).

### 🧩 CANONICAL SALT-COD DESALT LINE (for Opus's trinity — reuse verbatim so the cod dishes read as one family)
> *"Soak the salted snoek (or bacalhau) in plenty of cold water in the fridge for 24–36 hours, changing the water 4–5 times, until the flesh is plump, pale and only gently salty — taste a flake to check. Poach it a few minutes just to cook through, then drain and flake, discarding any skin and bones."*
- Buy-name used: **`salted snoek (or salted cod)`** (prices via `salted snoek` R180 — the keyed SA buy-name; keeps the trinity honest on cost).

### Verification
- `applyVersionDelta`: twist merges clean (beer added, batter step rewritten). Re-parsed from live file: full field set, HF, 2 versions, moat. `node --check` clean. `git diff --numstat` = **1/1** (only pataniscas). Trinity + all heroes confirmed thin/untouched.
- Prices: only systemic `flour` (approved `flour`→`cake flour` alias covers it); no new gaps.

### Suggested commit (atomic)
- `wk-sweep: wk_europe.js — lift pataniscas-de-bacalhau to WOW + beer-batter twist; canonical salt-cod desalt line for the reserved trinity`
- *Committed `105b837`.*

---

## Phase 3 · Portugal — Batch 3: Desserts (`wk_europe.js`) — 9 Jul 2026

**Cluster confirmed:** Portugal has **12 dessert cards**; reserved as Opus heroes = `pasteis-de-nata` + `bolo-rei` (left thin, untouched). **Batch 3 = the other 10.** All *doçaria conventual* / café classics.

### 10 desserts lifted thin → full WOW + 1 researched twist each. **10/10 verified via `applyVersionDelta`; re-parsed from live file (full field set, HF, 2 versions w/ delta, moats 313–416 chars); `node --check` clean; 10 lines changed; reserved 2 + cod trinity + heroes confirmed untouched.** Bakes carry a yield note ("makes ~6/~10") per the /wk Batch Law; leavener in grams; each moat a *distinct* angle (no reused convent-yolk line).
- ✅ **`portugal-ovos-moles`** — thread-stage syrup + temper the yolks (boil = scrambled egg); piped into hóstia wafer shells. Moat: 16th-c Mosteiro de Jesus, Aveiro; IGP; named-checked by Eça de Queirós in *Os Maias*. **Twist:** 🍫 *Chocolate (63% cocoa)* — the 2015 producer-sanctioned version.
- ✅ **`portugal-leite-creme`** — stovetop custard, cornflour insurance, low heat; burnt-sugar lid via the *ferro* iron. Moat: the crème-brûlée priority quarrel + the family branding-iron. **Twist:** 🔥 *Leite Frito* — set firm, crumbed & fried (molten-centre squares).
- ✅ **`portugal-bolo-de-arroz`** — rice-flour crumb, the 6cm **parchment collar** = its identity, weigh the leavener. Moat: café constant; rice flour = wheat-thrift; the collar standardised early-20th-c. **Twist:** 🍊 *Laranja* — orange zest *(light/simple twist — flagged 🟡)*.
- ✅ **`portugal-bolo-de-bolacha`** — no-bake; 5-min buttercream, one-second coffee dunk, overnight set. Moat: the Maria biscuit was minted in London 1874 for Grand Duchess Maria Alexandrovna's wedding. **Twist:** 🍫 *com Chocolate* (cocoa buttercream).
- ✅ **`portugal-toucinho-do-ceu`** — dense almond cake, flour a whisper, eggs in off-heat, pull moist. Moat: "bacon from heaven" — originally made with **lard** (toucinho), hence the name. **Twist:** 🎃 *de Guimarães* (doce de chila threaded through).
- ✅ **`portugal-pao-de-lo`** — **no leavener** (10-min whisk to a ribbon is the lift), fold flour gently. Moat: King Carlos I praised an underbaked one at Alfeizerão into a tradition. **Twist:** 🍮 *de Alfeizerão* — deliberately molten custard centre.
- ✅ **`portugal-salame-de-chocolate`** — no-bake log, hand-broken biscuit "fat flecks", chocolate folded warm-not-hot. Moat: Portugal↔Italy both claim it (each says the other's). **Twist:** 🍷 *com Vinho do Porto e Nozes* — Port + walnuts (the Portuguese signature).
- ✅ **`portugal-cavacas`** — corrected from a flat cake to the true **hollow popover** (don't open the oven 20 min — trapped steam puffs them) + hard sugar-syrup glaze. Moat: Caldas da Rainha spa souvenir; the glaze is a preservative. **Twist:** 🫒 *do Interior* — olive oil instead of butter (researched regional split).
- ✅ **`portugal-encharcada`** — yolks cooked in thread-syrup then **grill-scorched** cinnamon top. Moat: Convento de Santa Clara, Évora; "drenched"; Brazilian sugar via the ports, sold at the convent grille. **Twist:** 🌰 *com Amêndoa* (Alentejo almonds).
- ✅ **`portugal-queijadas`** — paper-thin shatter shell, sieved requeijão curd, cinnamon. Moat: 13th-c Sintra, once used as **currency** to pay rents/tithes to crown & convents. **Twist:** 🍊 *de Évora* — sheep's-milk requeijão + orange.

**Twists logged (all web-researched, all pass the taste-gate):** ovos moles→chocolate(IGP 2015) · leite creme→leite frito · bolo de arroz→orange(🟡 light) · bolo de bolacha→chocolate · toucinho→Guimarães chila · pão de ló→Alfeizerão molten · salame→Port & walnuts · cavacas→interior olive-oil · encharcada→almond · queijadas→Évora. Grounded in: Oficina do Doce / DGADR / Wikipedia (ovos moles convent+IGP+chocolate 2015) · TasteAtlas / Taste Porto (pão de ló Alfeizerão King Carlos) · Wikipedia / doce de gila (toucinho lard+Guimarães chila) · Cinco Quartos / Basta Cheio (salame Port+walnuts) · DGADR / GoCaldas (cavacas hollow+oil-vs-butter) · Saveur / Wikipedia (encharcada Évora Santa Clara) · Visit Sintra / Wikipedia (queijadas 13th-c currency) · Just A Pinch (leite frito). **One flagged 🟡:** bolo-de-arroz→orange is a *light* flavour-swap twist, not a reinvention — honest, no stronger distinctive variation exists for it.

### Prices (§2/§9)
- **No new gaps.** All resolve or pre-existing: `flour` (systemic — approved `flour`→`cake flour` alias covers it) · `wafer shells` (#153) · `Maria biscuits`→`biscuits` (#9) · `orange (zest)`→#146 (tiny flavouring) · `port wine` (#119) · `doce de chila` prices via `jam` (R50) · `ricotta`(200) used for requeijão, `cocoa`(680), `almonds`(330), `dark chocolate`(313), `walnuts`(370), `brandy`(200 for aguardente), `breadcrumbs`(150), `rice flour`→`rice`(27) all keyed.

### Portugal progress
- **28 of 52 lifted** (batch 1: 8 · batch 2: 9 · pataniscas: 1 · batch 3 desserts: 10) + 1 course fix (açorda).
- **8 reserved for Opus:** cod trinity ×3 (`bacalhau-a-bras`, `bacalhau-com-natas`, `bacalhau-a-gomes-de-sa`) + `pasteis-de-nata` + `caldo-verde` + `francesinha` + `frango-piri-piri` + `bolo-rei`.
- **~16 remain** in the LIFT queue — the savoury tail: mains `tripas-a-moda-do-porto·favas-guisadas·bifinhos-com-cogumelos·arroz-de-pato·chanfana·bifana·feijoada·leitao·cozido-a-portuguesa·sopa-de-pedra` · starter `queijo-assado` · drink `ginjinha` · sides `migas-a-alentejana`/`broa-de-milho` (already `side`; verify depth). *(52 = 28 lifted + 8 reserved + 16 remaining.)*

### Suggested commit (atomic)
- `wk-sweep: wk_europe.js portugal batch-3 — 10 desserts lifted to WOW + researched twists (ovos moles, leite creme, bolo de arroz, bolo de bolacha, toucinho do céu, pão de ló, salame de chocolate, cavacas, encharcada, queijadas); pastéis de nata + bolo rei reserved`
