# TINZA FIX QUEUE (confirmed bugs — not ideas)
*This is the QUEUE, not the parking lot. Everything here is a defect seen on the live tablet, waiting to be fixed. Ideas live in TINZA_IDEAS_BACKLOG.md; this file is only things that are actually wrong. Promote an item to an MF-number when it's picked up.*

---

## 🔴 JUST FEED ME GIVES 3 RECIPES AND NO WAY TO ASK FOR MORE — **FIX, DO NOT QUEUE**
**Seen:** 26 Jul, Tina, phone AND laptop, mood "I want to be healthy". Pro tier. *"it's supposed to say Want another 3 recipes, and another, and another."* Worked ~a week ago.

- **NOT DRIFT — a deliberate removal with an unmeasured blast radius.** `core.js:2496` (MF133, 21 Jul) removed the "✨ Show me 3 more ideas" button because the AI chef endpoint returns **503**, and a Free user was being shown a broken button as the reason to pay R90. ⚖️ *A broken control is worse than a missing one* — **that call was right.**
- 🩸 **THE BUTTON HAD TWO JOBS AND ONLY ONE WAS BROKEN:**
  | job | needs the chef? | state |
  |---|---|---|
  | pages 2..N from the **local library** | ❌ no — free, offline, pool is **160–784 deep** | ✅ fine |
  | fallback once the library is exhausted | ✅ yes | ❌ 503 |
  Removing the control killed both. `getMoreMoodRecipes()` was deliberately left intact and the note reads *"restore this button when MF78 lands"* — **but MF78 is the AI cost cap, and library paging never needed the chef.** The working half has been waiting on something it does not depend on.
- 📏 **SCALE:** `healthy` pool = `section==='health'` (**158 records**) plus every veg/vegan/pescatarian record app-wide. She is seeing **3 of 158+** — over 50 pages behind a missing button.
- ⚖️ **THIS IS §24.3 INVERTED — the law already exists:** *a helper is safe to delete only once its job has a new home.* A **control** is a helper. This one was deleted while still holding a live job, and that job got no new home. **Same shape as the `eventsTopNav` trap, opposite outcome — there we measured first and buffet was saved; here we did not.**
- ✅ **FIX = restore the button for LIBRARY pages only**, hidden once the pool is exhausted, until MF78 lands the chef. **Does not touch MF78. Does not touch the 503.** Small, and Just Feed Me is a headline shelf on Home.

---

## 🥔 "I WANT TO BE HEALTHY" RETURNS SLAP CHIPS — **the predicate is wrong, QUEUE with MF123**
**Seen:** same walk, 26 Jul. Tina: *"chips is a recipe that comes up."*

- **Root cause, measured** — `core.js:2293`: `healthy: r.section === 'health' || _moodDiet(r, ['vegan','vegetarian','pescatarian'])`.
- ⚖️ **THE FILTER ASKS "DOES THIS CONTAIN AN ANIMAL?" AND CALLS THE ANSWER "HEALTHY."** Slap Chips is potatoes and oil — **vegan** — so it passes. Deep-fried potato qualifies as nutritious. **Diet is not health**; they are different facets and this line conflates them.
- ⚠️ **NOT a bad-recipe problem and NOT fixable by re-tagging chips** — every fried, sugary or refined vegetarian record in the app passes the same test. Re-tagging one dish moves the symptom.
- ✅ **RULED 26 Jul — TWO LAYERS, see `TINZA_RULINGS.md` §21.1 + §21.2.** **Layer 1 (small, rides with the button fix):** `healthy` gets the `_MOOD_MEALSLOT` gate that `exhausted`/`quick`/`pickmeup`/`lazy`/`impress` **already have** — chips is a SIDE, and a mood serves a MEAL. **Layer 2 (MF123, own session):** the real health facet — technique + vegetable/legume share of `pp` grams + added sugar; **deep-fried is a SIGNAL, never a VETO** (falafel and tempura are deep-fried and survive).
- 🅵 **Layer 2 belongs with MF123 mood-tag foundation** — needs a ruling on what `healthy` MEANS (a real health facet: not-fried · not-refined-sugar · vegetable-forward, derived in Node from ingredients per the DIETARY ruling, never by hand) before any code. **Own session, ruling first.**
- 📝 Tina, a week ago: *"it's a difficult thing to get the right recipes for the right mood."* She was describing this.

---

## 💬 "How This Feels" on every card — the app-wide card line (Tina ruled 23 Jul)
**Direction (Tina):** the card `meta` line is for **"How This Feels"**, app-wide. Per-person portion
(gram pp) already shows on the RECIPE page, so it does NOT belong on the card. Events flipped 23 Jul:
its card meta now prefers How This Feels, falling back to region → portion only until copy is written.

**The map (23 Jul) — two blockers before this is truly consistent:**
- 🔤 **Field-name split.** Most of the app stores **`howThisFeels`** (World Kitchen, Spice, all `wk_*`).
  **Health stores `howItFeels`** (60 refs); `core.js` carries both. A shared renderer reading only
  `howThisFeels` shows BLANK for Health. **Unify to one name** (pick `howThisFeels`, migrate Health's
  `howItFeels`), or make every card reader tolerate both (events already does: `howThisFeels||howItFeels`).
- ✍️ **Events has NO feel-copy.** `eventsData.js` / `buffet.js` / `beveragesData.js` carry neither field.
  Until Fable writes a unique "How This Feels" one-liner per event item (⚖️ WOW Standard), event cards
  fall back to region/portion. **Authoring job, Fable lane.**

**Coverage today:** ✅ WK · Spice · Health (as `howItFeels`) show it on cards · ⚙️ events wired, awaiting copy
· ❓ Braai / meals / buffet — confirm each shows it (buffet currently shows portion; migrate to feel).

- **Fix — SWEEP via warmCard, don't patch (Tina).** Once the field is unified, confirm every section's
  `warmCard` call feeds How This Feels into `meta`. One reader, every section inherits it. Portion is a
  quantity → never gated; feel isn't money → never gated either. **Own session, not MF132.**

---

## 🇪🇸 Some Spanish dishes (Fable, 23 Jul) show no price — unpriced ingredients
**Seen:** 23 Jul, Tina on live. Several of today's Spain records render without a cost.

- **Symptom.** The dish has ingredients and a card, but no food-cost figure — because one or more ingredients aren't priced.
- **Root cause (Tina's read).** It's the ingredients: new Spanish buy-names Fable introduced today aren't in PRICE_DB yet, so `costPP` can't complete. ⚖️ PRICE GATE = `prices.js` **AND both alias maps** (`core.js` ~1050 + `worldkitchen.js` ~461), never prices.js alone — a name missing from any of the three costs nothing.
- **Fix.** Add the missing Spanish ingredients to prices.js + both alias maps. When picked up, run an unpriced-ingredient scan across the Spain records first (walk the objects, don't grep) to get the exact list in one pass — Claude can generate that on request.
- **Related but distinct** from "🌍 STAGE 2 · WK delta costing" below: that one is about version *delta* strings not costing; this one is base ingredients missing from PRICE_DB. **Own session, not MF132.**

---

## 🎨🎨 SAMENESS DRIFT IS APP-WIDE — measured on colour, now widened to type/boxes/placement (Tina 23 Jul)
Not isolated spots, and NOT only colour. The real bug: sections that don't render through the shared
`core.js` functions drift on EVERYTHING at once. ⚖️ SAMENESS mechanism = render ONLY via the shared fns
(`warmCard`/`sectionHeader`/`qtyBox`/`recipePage`) + `var(--token)`. Four lenses, ONE root, ONE fix:

- **🎨 COLOUR** — hardcoded hex instead of `var(--token)`. MEASURED 23 Jul (1,249 across `sections/*.js`).
- **🔤 TYPE** — font family must be Mulish (body/UI) · Fraunces (`.ttl` titles/card names) · DM Mono (`.mono`
  numbers/chips); sizes must follow the scale (title 22 · name 16 · line 14 · labels 13 · body 16–17,
  MASTER TEMPLATE). Audit = hardcoded `font-family`/`font-size` in style attrs instead of the shared classes.
- **📦 BOXES** — radius (18px cards / 10px boxes), padding, borders must come from the shared card/box, not
  hand-rolled. Audit = hardcoded `border-radius`/`padding`/`border` off the token values.
- **📍 PLACEMENT & PRESENCE** — every recipe shows the same blocks in the same slot, same order, same look:
  How This Feels (always) · didYouKnow/trivia · ingredients · method · tip · storage/freezes/fridgeDays ·
  goesWith · nutrition · versions. Audit = is the detail page rendered via shared `recipePage`, and does the
  DATA carry each field? A missing/reordered block on one section is drift.

**MEASURED so far (colour lens) — hardcoded hex per `sections/*.js` (1,249 total):**
tinyTummies **527** · core 169 *(incl. legit TOKEN DEFINITIONS)* · spice 167 · meals 166 · budget 50 ·
furry 36 · buffet 36 · braai 34 · worldkitchen 23 · health 9 · barplanner 9 · utils 6 · **events 6** (target).
*(Type/box/placement lenses still to be measured the same mechanical way.)*

**This is its own MF/session, NOT a card-at-a-time fix. Method (Tina's own playbook):**
1. **AUDIT FIRST, all four lenses.** A script/census pass listing every hardcoded hex / font / size / radius
   in a style slot with `file:line` (excluding the token block + gradients), PLUS a per-section presence-map
   of the recipe blocks. Turns the vague "lots of drift" into an exact worklist per lens.
2. **CENSUS RUNGS as the ratchet** (next free check #s), one count per lens; freeze today's numbers as the
   FLOOR (RED-N baseline, floor not gate) so each can only go DOWN. ⚖️ A silent hole needs a mechanical watcher.
3. **TWO CLASSES — do not treat a rebuild and a colour-swap as the same job (Tina 23 Jul: "and furry"):**
   - 🏗️ **BESPOKE sections — `tinyTummies` (805 lines, 527 hex) + `furry` (70 lines, 36 hex).** VERIFIED
     23 Jul: BOTH use ZERO shared renderers (no `warmCard`/`sectionHeader`/`qtyBox`) — hand-rolled top to
     bottom, so they break ALL FOUR lenses (colour, type, boxes, placement). **Fix = MIGRATE onto `warmCard`/
     `core.js`** (the §10 sameness sequence); colour, font, box AND element order all fall into line for free,
     exactly like `events` dropping to 6 once migrated. Each is its own session; tinyTummies is the giant.
   - 🎨 **MIGRATED-but-drifted — `spice` 167 · `meals` 166 · `budget` 50 · `braai` 34 · `worldkitchen` 23.**
     Already call the shared renderers; carry leftover hardcoded overrides. **Fix = strip the overrides**
     (hex→token, font/size→shared class, box→shared geometry). No token fits → token GAP to raise. core LAST.
4. Close the instances below (note · spice · legacy cost block) AS this lands — they're the same bug.

---

## 🎨 "Buying vs cooking" note unreadable — dark-theme hex on warm-light (palette drift)
**Seen:** 23 Jul on live, under every finger-food shopping list. Tina likes the note; it's just barely legible.

- **Symptom.** Pale tan text on the cream card — very low contrast, hard to read. Not a content problem; the wording is good.
- **Root cause.** `packSizeNote()` (`meals.js:16287`) is still styled for the OLD dark theme: `color:#e0d4b8` (light-on-dark text) + `background:rgba(255,255,255,0.03)` (a 3%-white panel that vanishes on cream) + hardcoded accent `#c0a040`. On the warm-LIGHT palette this is pale-on-pale.
- **Same class as the known drift.** `#e0d4b8` is the exact off-palette hex already logged all over budget.js and called out in the MASTER TEMPLATE 19 Jun open thread ("dark boxes bleeding into warm-light → migrate to `var(--…)`"). This note is one more instance.
- **Fix — SWEEP, DON'T PATCH (Tina, 23 Jul).** Do NOT recolour this one note alone. Roll it into the app-wide hex→token sweep: `#e0d4b8` → `var(--ink-soft)`, the white overlay → `var(--card2)`, `#c0a040` → `var(--gold)`/`var(--turmeric)`, and grep every `#e0d4b8`/`rgba(255,255,255,0.0x)`/dark-theme hex across `sections/*.js` in the same pass. ⚖️ SAMENESS: render via `var(--token)`, never hardcode hex. **Own session (the palette-drift sweep), not MF132.**
- **➕ SPICE joins this sweep (found 23 Jul in MF132 §2.D).** `spice.js` quantity numbers wear the LOCKED *cost* colours — `#c8e840` (food-cost green) at 8147, `#f5c842` (shop-spend gold) at 8152/8169/8187/8196/8203/8303 — on YIELDS and INGREDIENT AMOUNTS, which are NOT money. Green=food-cost-only / gold=shop-spend-only are LOCKED; a Free user seeing a gold "500g" reads it as a price. Recolour these to a neutral token (`var(--ink)`/`var(--paprika)`), never green/gold. Plus dark-theme hex through spice's list/entry views (`#e0d4b8` 8186/8195, `#a88a5e` 8008/8097, `#b0a070`, `#c0915a`). Same pass.

---

## 🥚 Shopping list shows cooking grams for count-sold items — not supermarket-ready
**Seen:** 23 Jul on live, Finger Foods → My Plan → shopping list (20 guests). Example: **"Egg (beaten) 476g"**.

- **Symptom.** Count-sold / pack-sold ingredients render as raw grams you can't buy off a shelf. Clearest cases: **eggs** — `476g` should read **"≈10 large eggs"** (476 ÷ 50g = 9.5, round UP — you buy whole eggs); **bread** — `300g` should read **"1 loaf"** (a loaf ≈700g, round UP — you buy whole loaves, not 0.4 of one). Same class hits any count/pack-sold item (eggs, bread/loaves, pastry sheets, wraps, tins).
- **NOT a math bug.** The gram total is correct; it's the *unit* that isn't shoppable. The `packSizeNote()` "Buying vs cooking" disclaimer beneath the list explains leftover-in-pack, but it does NOT convert count-sold items to a count — so the note promises a cooking→shopping bridge the list doesn't finish.
- **The find that matters.** The conversion constant ALREADY EXISTS: `events.js:13  var FINGER_UNIT_G = { egg:50 };` (grams per egg). It's wired into the *pricing* path only (`events.js:24`, `fingerCostPP`), NOT into the shopping *display*. `fingerShopItems`'s `fmt(raw,unit)` (events.js ~1875) only does g→kg / ml→L / slices — no count path.
- **Fix shape.** In the shopping formatter, for names matching a count-sold set, divide grams by `FINGER_UNIT_G[key]`, `Math.ceil`, render "≈N eggs". Widen `FINGER_UNIT_G` beyond egg as needed. ⚖️ TINZA INGREDIENT STANDARD already rules this: "count for unit-sold items (eggs, muffins, pastry sheets)."
- **Scope — SWEEP, DON'T PATCH (Tina, 23 Jul).** When picked up, first find EVERY shopping surface in the app with the same count-in-grams problem and fix them all in one go: `fingerShopItems` · `drinkShopItems` (~1773) · `cakeShopItems` (~1818) · `buildCombinedShoppingList` (meals.js ~16294) · any Braai/WK/Health shop list. ONE shared count-aware formatter that all of them call — never a per-builder patch (that's how drift starts). **Leave a census rung behind:** "no count-sold item renders in grams on any shopping list." **Own session, not MF132.** Promote to an MF-number when picked up.

---

## 🎂 Whole-unit bakes show a misleading per-person dial
**Seen:** 15 Jul AM, still live 16 Jul. Example: **Gin & Tonic Cheesecake** (`bk-gin-tonic-cheesecake`, meals.js).

- **Symptom.** The recipe opens at "**4 people**" on the How-Much-To-Make dial, but the line beneath reads "**makes 1 cheesecake · serves 12 · 1 slice each**". The 4 and the 12 contradict each other on screen.
- **NOT a math bug — numbers are safe to bake from.** Ingredient totals are `pp × 12` (shortbread 17g pp → 204g total, etc.), correctly scaled to one whole cheesecake. Confirmed against the record 16 Jul.
- **The real bug.** A bake that only comes in whole units should not offer a per-person dial that starts at an arbitrary headcount (4). It should step by **whole units** — "1 cheesecake (serves 12)" → "2 cheesecakes (serves 24)" — so the headcount and the yield can never contradict. The "rounds up so you never bake a fraction" note is trying to paper over this; fix the dial instead.
- **Where.** The How-Much-To-Make dial / bake-yield logic in `core.js` (the whole-unit rounding path). Applies to ALL whole-unit bakes (cakes, cheesecakes, tarts), not just this one. Related to MF120 (the "4 people" bakes family).
- **Priority.** Cosmetic/UX — numbers are correct, so not a launch blocker, but it's on recipes people bake from, so it reads as broken. Fix before launch.

## 🔍 Human "biscuits" search returns dog biscuits
**Seen:** 16 Jul.

- **Symptom.** Searching **"biscuits"** surfaces Furry Friends pet biscuits (Oatmeal & Apple, Maize Meal & Chicken Crunch, Oat & Cottage Cheese, Chicken Liver Training Biscuits) mixed in with the human bakes.
- **Root.** Global search has no room/slot scope. MF117 excludes PETFOOD / BABYFOOD from the mood shelves, but the main search still returns every slot.
- **Fix is a product call (not obvious — decide, don't guess).** Either (a) exclude PETFOOD / BABYFOOD from default search with an opt-in toggle, or (b) group search results by room so pet/baby food is clearly separated rather than intermixed. Lean toward (b) — it's honest and discoverable — but Tina's call.
- **Where.** The global search query path in `search.js`.
- **Priority.** Pre-launch polish — it makes search look untrustworthy on a common query.

## 🔤 Mojibake in World Kitchen authentic names ("no funny letters")
**Seen:** surfaced 16 Jul via the mood auto-draft. Long-standing (this is the doctor's standing "mojibake" RED, now pinned to a location).

- **Symptom.** ~**231 recipe names** carry double-encoded UTF-8 — the authentic-name HERO renders as garbled bytes. Mostly Greek (`ÎšÎ»Î­Ï†Ï„Î¹ÎºÎ¿` → *Kleftiko*, `Î£Ï„Î¹Ï†Î¬Î´Î¿` → *Stifado*, `Î“Î¹Î¿Ï…Î²Î­Ï„ÏƒÎ¹` → *Giouvetsi*), plus German (`knÃ¶del` → *knödel*) and Polish (`Å›lÄ…skie` → *śląskie*).
- **Root.** UTF-8 bytes were saved through a Latin-1 step somewhere in the WK authoring/import pipeline, so each accented char became two garbled chars. It is IN the source data, not a display bug.
- **Why it matters.** WK's whole standard is "authentic name as hero + English gloss." When the hero is mangled, the standard inverts — the proudest names look broken. Directly undermines the World Kitchen pitch.
- **Fix.** Re-decode the affected strings at source (read as Latin-1 → re-encode UTF-8, or re-import from a clean source). Verify against a known-good list (Kleftiko, Stifado, Zwetschkenknödel…). Do NOT hand-retype 231 names — script the re-decode, spot-check.
- **Where.** `sections/wk_*.js` (Greek/Europe files worst hit).
- **Priority.** Pre-launch — it's the single most visible content-quality flaw in the flagship room.

## 💸 The app still advertises R50/month — the price was ruled R90 on 28 June
**Seen:** 21 Jul 2026, read from the repo at `d2c8e61`.

- **Symptom.** The Pro upsell string reads **"Tinza Pro R50/month"**. Pricing was ruled **R90** on 28 Jun 2026 and re-confirmed 13 Jul (`TINZA_RULINGS.md` §1). Every Free user currently sees a struck price.
- **Measured — 20 occurrences across 8 files:** `core.js` 9 · `health.js` 3 · `kiddies.js` 2 · `meals.js` 2 · `braai.js` 1 · `events.js` 1 · `tinyTummies.js` 1 · `worldkitchen.js` 1.
- **Root.** ⚖️ **Law 15 again.** R90 was ruled in chat on 28 Jun and memory carried R50 for a fortnight; the *file* was corrected, the *strings* never were.
- **Fix.** Mechanical string sweep, no logic touched. ⚖️ **Law 6 — the nine in `core.js` say the price should be read from ONE place, not typed in eight rooms.** Consider a `PRO_PRICE` constant in the same pass so this cannot recur.
- **Batching (Tina, 21 Jul).** Netlify bills 15 credits per deploy, so this rides with the other content sweeps — 231-name re-decode, brand rename, liqueur prices — in **one push**, not its own.
- **Priority.** Not urgent for October, but **must not be launched.** Written down here precisely because "we'll do it later" in a chat is how R50 survived three weeks past being struck.

## 🎨 Legacy cost block renders bright green as TEXT, and hardcodes hex
**Seen:** 21 Jul 2026, on Tina's vetkoek screenshots.

- **Symptom.** The Food Cost box renders **R44 / R4 in bright `#c8e840`** as body text on a dark card, with `#1a1008` / `#0f1a08` backgrounds hardcoded.
- **Two rulings broken at once.** The 19 Jun legibility ruling: **bright `#c8e840` survives ONLY as accent dots/chip fills — cost TEXT is the deeper `#46530c`.** And ⚖️ **Law 38 — a token card has no colour of its own, it inherits.** These are hand-rolled hex, not `var(--token)`.
- **Root.** There are **two** cost blocks in `meals.js` — a legacy dark one and a tokenised one (`costW`) — plus a third in `health.js`. **None of them is in `core.js`.** The legacy one is what's rendering.
- **Where.** `sections/meals.js` (the non-`costW` block) · `sections/health.js`.
- **Priority.** Pre-launch. Ships with the cost-renderer consolidation below rather than being patched in place.

## 🧱 The cost block was never migrated into `core.js`
**Seen:** 21 Jul 2026. `grep "Total for" sections/core.js` returns **nothing.**

- **Symptom.** The Food Cost box is hand-rolled **three times** — twice in `meals.js`, once in `health.js` — with independent markup, independent colours and independent bake/non-bake branching.
- **Why it matters.** Bakes is the declared template (⚖️ **Law 49**), but sameness is only ever enforced *by a shared renderer*. ⚖️ **Law 6 — don't patch N sites, build the one thing they should all call.** With no shared cost renderer there is **no mechanism** holding the rooms together on cost, which is why every cost oddity of the last fortnight has been per-room.
- **Fix.** One `costBlock()` in `core.js`, tokenised, bake-aware, called by every room. The two bugs above then close as a side-effect rather than as three separate patches.
- **Priority.** Structural. Sequence with MF132, not before.

## 🔗 `goesWith` carries similarity, not pairing — and it is wider than vetkoek
**Seen:** 21 Jul 2026, confirmed in data.

- **Symptom.** `bk-vetkoek.goesWith` = `["Amagwinya (Fat Cakes)","Koeksisters","Doughnuts"]`. Those are not what you eat *with* vetkoek — **they are what vetkoek IS.**
- **Confirmed wider, not a one-off:** `bk-amagwinya.goesWith` = `["Vetkoek","Koeksisters","Doughnuts"]`. **The same fault, authored the same way.** `TINZA_RULINGS.md` §16 predicted the sweep would be broad; it is.
- **Fix.** Per §16: wrong links are **REMOVED, not kept**, until a separate `similarTo` field exists. ⚖️ **Law 45 — a missing link beats a wrong one.** Every link verified against the real library (C4, `WOW_STANDARD.md`).
- **Priority.** Pre-launch content sweep. Rides with the other content batch.

## 🔥 Braai cannot derive cost, diet, allergens, time or nutrition
**Seen:** 21 Jul 2026, read from the repo.

- **Symptom.** `adaptBraai()` in `sections/index.js` emits `costPP:null`, `diet:[]`, `protein:null`, `time:null`, `kcal:null` for all 92 Braai records. The sameness matrix scored Braai **3 of 9** on this.
- **NOT an oversight, and NOT unstructured data.** Braai has structured portion data under a **different schema** — measured: **48 items with `soloG`/`sharedG`, 26 with `gramEach`, 288 `unit` fields.** What it lacks is `ingredients[].pp`, measured at **0 occurrences in `data.js` against 404 in `meals.js`** — the field every derived facet reads.
- **Root — and this belongs in the record.** Braai was built **first**, and solved portioning *better* than any room after it: bone-aware cuts, solo vs shared, the taper, `calcMeat` reading the cut through `braaiBaseG`. Because it computed grams from the **cut**, it never needed per-ingredient amounts. Later rooms had no portion brain, so they needed `pp` on every line — and `pp` then quietly became the thing everything derives from. **Braai scores 3 of 9 because the ruler was cut from the other rooms' timber, not because it decayed.** ⚖️ **Law 49.**
- **Fix — a TRANSLATION, not a re-authoring.** Script `soloG`/`sharedG`/`gramEach`/`unit` plus the per-person amounts already sitting in the prose lines (`"Coarse salt — 2g per person"`) into `ingredients[].pp`. Spot-check; **never hand-type 92 records.** ⚖️ **Law 11.**
- ⛔ **DO NOT TOUCH `calcMeat` OR `PORTION_BRAAI`.** The portion brain is the better answer and stays exactly as it is. The translation exists so the rest of the app can *read* Braai, not to change how Braai thinks.
- **Priority.** Structural. **After MF132**, or it re-authors into a shape that moves underneath it.

## 💰 The Braai plan ships the ENTIRE Pro surface to Free
**Seen:** 21 Jul 2026, on Tina's live screenshots — **the Free button was lit in the tier bar.**

- **Symptom.** The Braai plan renders, to a **Free** user: the shopping list in full (Boerewors 1.3kg · R158 · Coarse salt · R0 · Sunflower oil 750ml · R36), the plan dish-row total (**R144**), **What the food costs R145** and **What you'll spend R194**.
- **Root.** `sections/braai.js:301–318` renders the shopping block and both totals with **no tier gate at all.** The only `tierAllows` in the entire file is line **213**, for side dishes. The §7 gate layer never got as far as this room.
- **Why it survived.** Braai's cost was believed **absent** — the sameness matrix scored it cost 0%, and `adaptBraai()` genuinely emits `costPP:null`. That is the **derived facet** for shelves and search. **The plan screen computes its own totals by a different path entirely**, so "Braai has no cost" was true of the adapter and false of the screen. ⚖️ **Law 23 — two things sharing a name do not share a fix.**
- **Fix.** Route through `costLine()` / the shared cost block. ⛔ **Do NOT patch a `tierAllows` in front of it** — that is the eighth hand-rolled gate and the reason this list exists.
- **Priority.** **Rides with the cost-renderer consolidation.** Costs nothing today — there are no paying users — and becomes real the day PayFast goes live.

## 💰 Budget prints a Rand per person on every row, ungated
**Seen:** 21 Jul 2026, live.

- **Symptom.** Every Budget result row reads e.g. *"⏱️ 25 min · **R22 pp**"*. Cost is Pro (`TINZA_RULINGS.md` §2).
- **Root.** `sections/budget.js:155` hand-rolls `R${r.costPP||'?'} pp` straight into the row markup.
- 🩸 **`||'?'` IS ITS OWN SMALL LIE.** An uncosted recipe prints **`R? pp`** — which reads as broken rather than as not-yet-costed. ⚖️ **Law 3.**
- **Fix.** Same one fix as Braai — the shared renderer.
- **Priority.** With the consolidation.

## 📊 MEASURED — the §7 gate layer is bypassed in 21 places across 6 files
**Seen:** 21 Jul 2026, counted at HEAD.

- **The rule** (`core.js:714`): `costLine()`, `kcalChip()` and `nutritionGrid()` are **the ONLY three renderers allowed to emit a Rand, a kcal or a macro to the DOM.**
- **The count of raw `R${...}` emitted outside them:** `budget.js` **6** · `meals.js` **4** · `braai.js` **4** · `health.js` **3** · `events.js` **2** · `core.js` **2**.
- 🩸 **THIS IS THE NUMBER THAT MATTERS.** Braai and Budget above are not two bugs — they are **two of twenty-one**, and every one of them is a place the gate can be missed, the palette can drift and the price can go stale independently. ⚖️ **Law 6 — don't patch N sites, build the one thing they should all call.**
- **Priority.** This *is* the Week 2 job. It now has a number attached to it.

## 🤖 The chef is switched OFF but the app still sells him
**Seen:** 21 Jul 2026, live — 4 Ingredients results screen.

- **Symptom.** With `/api/claude` returning **503** since this morning, the app still renders: *"Pro also asks **Tinza Chef** to invent fresh ideas from what is in your fridge."* Under a heading, **🤖 Tinza Chef's ideas**, that will now never fill.
- **Where — WIDENED 21 Jul on the no-`?dev` screenshots. FIVE surfaces, and two of them are LIVE BUTTONS, not text:**
  - 📝 **Text (3):** `meals.js:15786` *(How-it-works: "then asks Tinza Chef")* · **15839** *(the 🤖 heading + subtitle)* · **15841** *(the Pro upsell line)*.
  - 🔘 **BUTTONS THAT NOW FAIL (2):** `core.js:2501` — **✨ Show me 3 more ideas** on every mood shelf · `budget.js:165` — **✨ Show me 3 more recipes**. Both call the chef. Both get 503.
- 😕 **IT DOES NOT CRASH — IT FAILS INTO A LOOP THAT CANNOT SUCCEED.** The error path at `core.js:2446` renders *"Couldn't load recipes right now"* with a **← Start again** button that **re-calls the same dead endpoint.** Politeness is not honesty: the screen implies *try again later*, and later will never work until MF78 ships.
- 🩸 **THIS IS A LAW 3 BREACH, AND IT IS THE WORST KIND — IT IS A SALES PITCH FOR A DEAD FEATURE.** A Free user is being asked to pay **R90** partly for something that returns an error. ⚖️ **Law 7 — the lock is the salesman; a lock over nothing is a false salesman.**
- **Fix.** The two buttons come out or go dark **first** — a broken control is worse than a missing one. Then the three strings. No logic, no endpoint work.
- 🔁 **REVERSE THIS WHEN MF78 LANDS.** Written here so the app is not left saying "coming soon" forever after the chef is capped and switched back on.
- **Priority.** **Rides with the tier-bar push.** Five strings, zero logic, and it closes the honesty gap the chef shutdown opened this morning.

## 🧂 The Spice Room hands Free a working shopping list
**Seen:** 21 Jul 2026, on `tinza.netlify.app` with **no `?dev`**, Free lit.

- **Symptom.** Peri-Peri Sauce → a complete aisle-grouped list (Fruit & Veg · Pantry · Other), 8 items with amounts, tick-boxes, **📋 Copy List** and **Clear all**. The shopping list is **Pro** (`TINZA_RULINGS.md` §2).
- **Root.** `sections/spice.js:8313–8321` renders the list screen and the Copy button with **no tier gate.** The room is not tier-blind — it calls `tierAllows` at **8074** and **8376** — **the list screen simply is not one of the gated paths.**
- 🩸 **NO RANDS LEAK HERE, AND THAT IS WHY IT SURVIVED.** Every previous cost leak was found by spotting a Rand on a Free screen. **This one gives away the shopping list itself — the Pro surface — while emitting no money at all**, so every Rand-shaped search missed it. ⚖️ **Law 36 — measure the thing that is ruled, not the thing that is easy to grep.**
- **Fix.** With the cost/gate consolidation. **The gate list must be built from `TINZA_RULINGS.md` §2, surface by surface — not from a grep for `R$`.**
- **Priority.** With the consolidation. Fourth confirmed leak surface (Braai plan · Budget rows · Spice list · the tier bar itself).

## 🍗 Anchor Ingredient matches the whole record, not the ingredients
**Seen:** 21 Jul 2026. **"chicken" returns Gyeran-jjim (Korean Steamed Eggs)** and other unrelated dishes.

- **Symptom.** *I Have Chicken…* lists recipes that contain no chicken. Gyeran-jjim is an egg dish; it merely **mentions** chicken somewhere in its prose.
- **Root — one line.** `sections/meals.js:15703`:
  `allRecipes.filter(r => JSON.stringify(r).toLowerCase().includes(ingLower))`
  **It stringifies the ENTIRE record** — name, method, tip, `didYouKnow`, `storage`, `goesWith`, tags — and substring-matches all of it. A recipe whose method says *"…as you would for chicken"* is a hit.
- ✅ **THE FIX ALREADY EXISTS, 110 LINES ABOVE, IN THE SAME FILE.** `findFourIngredients()` at **15592** builds its haystack with `ingredientText(r)`, commented *"ingredients ONLY — never the trivia or chefNotes"*, under ⚖️ **Law 41**. **Anchor was never migrated onto it.** ⚖️ **Law 6 — the one door was built, and one caller kept its own.**
- **Fix.** Reroute anchor's `dbMatches` through `ingredientText()`. **One line.** The Law 41 threshold question does not arise — anchor takes a single ingredient.
- 🩸 **WHY IT MATTERS MORE THAN IT LOOKS.** Anchor Ingredient was ruled **Pro** this morning (§2 · §3.1). **A feature people now pay for must not return egg dishes for chicken.** ⚖️ **Law 7 — the lock is the salesman.**
- **Priority.** Parked. One line, rides with any `meals.js` touch.

---

# ⛔ STRUCK — RAISED, INVESTIGATED, NOT A BUG
*Kept so they are never re-raised. ⚖️ Law 23 — two bugs sharing a name do not share a fix; and a bug that was never a bug still costs a session the second time.*

## ~~Vetkoek cost block contradicts the scaler ("scaler said 4, cost said 7")~~
**Raised 21 Jul · STRUCK 21 Jul, same day, on Tina's screenshots.**

- **What was actually on screen at scaler 11:** Sweet **R44 total / R4 pp** · Curried Mince **R132 / R12** · Cheese **R77 / R7**. Eleven times 4, 12 and 7 exactly. Label, scaler and arithmetic all agree, and **all three versions derive their own cost correctly.**
- **What the "4 and 7" really were:** Sweet's R4 per person and Cheese's R7 per person — **two versions read as one screen.**
- **Confirmed in code:** `recipeDetailFromResult()` sets `var _scale = _bakeP ? _bakeUnits : sv`, and the label prints `sv`. For a non-bake the label and the multiplier are **the same variable** and cannot diverge.
- **Consequence.** MF124 is **unblocked** — the birchermuesli R510 needs its own look, but nothing upstream was poisoning it. ⚖️ **Law 39 — a tool result is also a hypothesis; cross-check it with your eyes.** Tina's eyes closed this one.

---

## 🔑 Silent duplicate keys — the later one wins, the earlier one has NEVER been used
**Raised 21 Jul · MEASURED 21 Jul with an AST walk, not a grep.** *(A grep over `prices.js` counts 12 "duplicates" — 10 of those are legitimate keys in different objects. Only 2 are real.)*

**`sections/prices.js` — 2 real:**
- **`pork belly`** — line **154 = R120**, line **581 = R150** *("high end")*. **R150 silently wins. R120 has never once been used.**
- **`pita_each`** — line **8 = R4**, line **487 = R7.70** *(R46/6-pack, Tina)*. **R7.70 wins. The R4 is dead.**

**`sections/core.js` — the ingredient-alias map, 7 real:**
`coconut` (L1011 → **L1053 wins**, "coconut flakes" loses to "desiccated coconut") · `niter kibbeh` · `fish stock` · `phyllo sheets` · `pastry dough` · `sukuma wiki` · `broad beans`.
**`coconut` is the one that costs money** — two different products, two different prices, and the alias silently picks one.

- **Fix.** Delete the loser, or keep the loser and delete the winner — but **decide**, don't leave two.
- **Ratchet.** This is exactly CENSUS CHECK 26's family: an AST duplicate-key assertion across `sections/*.js` = **0**. One rung catches all nine and everything like them forever.
- ⚖️ **Law 39 · §20.** No error, no console, `node --check` clean. A fifth silent hole.

---

## 🧂 "to taste" appended to lines that ALREADY carry an amount
**Raised 21 Jul.** Braai Snoek card reads **"300g per person — to taste"**. Same pattern on salt, jam, butter. An amount and a hand-wave in one line: the amount is real and the "to taste" makes it look optional. ⚖️ WOW Standard — leaveners and seasonings measured, never hand-waved. **Sweep, don't patch one card.**

---

## 🥫 Tin convention — nominal vs drained
**Raised 21 Jul.** `pilchards` **R65** and `tinned mackerel` **R92** are keyed on the **nominal 400g tin**, not the **drained** weight (~65%). If a recipe uses drained fish, both prices are **~35% light**. **Own session** — it touches every tinned key, not just fish.

---

## 🌍 STAGE 2 · WK delta costing will SHOW but not COST
**Raised 21 Jul.** `delta.addIng` items in World Kitchen are **prose strings**, so a WK version renders its chip and its copy but produces **no cost**. **§15.5 is unsatisfied for WK until the strings are parsed.** Blocked behind MF135 (`_vHay` string tolerance) landing on live.

---

## 📏 SCHEDULED (≈6 weeks · NOT a live defect) — portion standard reaches the recipe sections
**Raised 24 Jul (Tina), during the vessel work.** Trigger to start: **only once sameness + all bugs + all WK recipes are done.** Tina's call: "it's ok for now, not too bad, can be better" — so this waits, it does not jump the queue.

- **The gap.** The SHARED PORTION STANDARD already exists in `core.js §6.1` and is good: two category tiers — everyday `{boneless:180,bonein:250,fish:160,shellfish:180,veg:200,side:150,dessert:120,starter:60,drink:0}` and `PORTION_BRAAI {boneless:300,bonein:400,fish:280,shellfish:320,veg:250}` — plus the grazing taper and a live `APPETITE` multiplier ("Big Eaters" in Profile). **But it only governs braai + events.** The recipe sections (WK, meals/FMF, Health mains) use hand-typed `pp` per ingredient and never call `PORTION`, so nothing checks them. This is the root cause of the Bobotie drift — WK Bobotie 90g vs FMF Bobotie 150g, two authors' guesses, no standard between them. The `appetiteMult` also does not reach these sections.
- **Fix — TWO parts, split hard:**
  1. **Governance (cheap, do first).** Promote the existing `PORTION` numbers into an authoring + audit rule: a main targets ~150–180g protein pp, side ~150g, starter ~60g, dessert ~120g. Add a `tinza-doctor` check that flags any recipe whose protein pp falls outside the band for its dish-type. A portion standard exactly as WOW_STANDARD is a voice standard — it would have caught the 90g Bobotie the moment it was written. **Own session.**
  2. **Engine reach (real feature, much later).** Make `appetiteMult` + the base standard apply app-wide so "Big Eaters" scales every recipe, not just braai. **Same multi-opener surgery as vessels** — every recipe opener multiplies pp through the shared path. Its own project, after part 1.
- **Note.** Nothing in the locked PORTION BRAIN (§6.1, braai-only) forces a number on mince bakes, so the bands are Tina's caterer call to set. Ideas-adjacent but agreed + scheduled, so it lives here with its gate, not in the backlog.

---

## 🎂 LOGGED FOR LATER (Tina, 25 Jul) — **CELEBRATION CAKES NEEDS A FULL MAKEOVER**
**Not a bug. A content-quality call, in Tina's words: "it's not up to standard at this stage."**

- **The scope.** The Celebration Cakes tab becomes **celebration / wedding / baptism / christening / anniversary cakes** with **proper recipes and methods** — not the placeholder-grade content sitting there now.
- **The bar is the WOW STANDARD** *(`/wow`, `WOW_STANDARD.md`)*: Michelin-chef-to-grandma voice, why-led method with temps + times + sensory cues, unique "How This Feels", a `didYouKnow` moat, buy-name ingredients matching `PRICE_DB`, storage/freezes/fridgeDays, verified `goesWith`.
- **⚖️ Leaveners in g/ml, never "to taste."** Non-negotiable on cakes above all — this is the section where a guessed raising agent ruins a wedding.
- **Tiering matters here.** Cakes sit under **Events**, which is **Deluxe** territory. A showstopper section is a reason to upgrade — it should read like one.
- **GATE:** does **not** jump the queue. Sameness first, then bugs, then WK recipes. Same gate as the portion-standard item above.
- **Related, still open:** `weddingCakeView` is one of the four **dead keys** in `navSignature()` *(§24)* — check whether Cakes still navigates by it when this work starts.

---

## 🎉 RAISED 25 Jul (Tina, from live) — **EVENTS NEEDS A SAMENESS REVAMP**
**"Events needs a sameness revamp."** Measured at HEAD the same day.

**Events is not one room with five tabs. It is a room plus three sub-apps that each invented their own header.**

| file | headers | notes |
|---|---|---|
| `events.js` | 1 `sectionHeader()` | the actual room |
| `buffet.js` | **7** `sectionHeader()` + `eventsTopNav()` ×2 | its own sub-app |
| `kiddies.js` | 1, rendered as `eventsTopNav() + sectionHeader({…})` | **the pair sits ABOVE the photo header** |
| `barplanner.js` | **0** — hand-rolled inline at `:214` | pre-reskin dark hexes |

- 🩸 **`eventsTopNav()` IS A DUPLICATE.** It hand-rolls a **"← Events / 🏠 Home"** button pair and renders it on top of a header **that already has a Back**, on a spine that **already has Home**. On Kiddies that is **four ways out of one screen**. ⚖️ **§24 — two Backs are allowed only when they do two different jobs. Four is not two jobs.**
- ⚖️ **§24.2 already ruled the principle:** *a front door is a place you go to, not a thing you carry.* Beverages and Kiddies show the same scroll-up symptom Finger Foods did.
- **PROPOSED SEQUENCE — one step per session, measure each:**
  1. **Delete `eventsTopNav()`.** The header Back (`← Events`) + the spine (Home) already do both jobs. Three call sites: `buffet.js:94`, `buffet.js:140`, `kiddies.js:46`.
  2. **`sectionHeader()` gains `sub:true`** *(already queued as item 5)* — kills `barplanner.js:214`'s hand-rolled header and gives every Events sub-screen ONE header shape.
  3. **Collapse buffet.js's 7 headers** to the shared one.
  4. **The 14 anonymous `← Back` labels** *(census 8 rung ⑥)* — 6 of them are in `events.js`.
- ⚠️ **DO NOT do all four in one push.** ⚖️ **Stability rule 1** — one section at a time, `node --check`, Tina's eyes on live between each.

---

## 🩸 LOGGED 25 Jul (evening) — TINA'S EYES ON LIVE, MEASURED AT HEAD

### ① 🔴 FMF DEAD TAP — **A KEY CANNOT BE IN BOTH LISTS** *(measured, root cause found)*
**Her words:** *"FMF bottom back stalls on first back click from a recipe, then main home menu."*

`mealActiveRecipe` and `moodActiveRecipe` are in **BOTH**:
- `SIMPLE_RECIPE_KEYS` (`core.js:59`) — goBack step **(2b)**: closed by **nulling the key**, no history touched.
- `navSignature()` (`core.js:93`) — so opening the recipe **PUSHED a history entry**.

**The two mechanisms are mutually exclusive.** Open → push. First Back → step (2b) nulls the key and `setQuiet()` **pushes a SECOND entry** instead of consuming the first. Screen looks unchanged = **the dead tap**. Depth is now wrong, so the next press falls past step (3) to step **(4) → HOME.** Exactly what she walked.

- ✅ **THE OTHER THREE ARE CORRECT AND PROVE THE RULE:** `_anchorActiveRecipe` · `_fourActiveRecipe` · `_searchActiveRecipe` are in `SIMPLE_RECIPE_KEYS` and **NOT** in `navSignature()`. `viewingRecipe` is in `navSignature()` and closed by `closeRecipe()`, which **consumes** its entry (`core.js:3910`).
- 🔧 **THE FIX IS ONE OF TWO, AND IT IS A RULING, NOT A REFACTOR:** either drop the two keys out of `navSignature()`, or move them to the `closeRecipe()` consume-path. **⚖️ §2.3 — ask Tina, do not infer.**
- 📋 **CENSUS RUNG OWED:** *no key may appear in `SIMPLE_RECIPE_KEYS` **and** `navSignature()`.* Would be **RED at 2** today. Rung ⑤ passed this GREEN because it only asks whether a key is *watched*, never whether it is watched **twice by two contradictory mechanisms.**

### ② 🟠 A LATERAL IS NOT A LEVEL — **NEEDS A RULING** *(§2.3)*
**Her words:** *"from Waffles it takes me to Eggs on first click, and from Porridge to Eggs, and from Sandwiches to Wraps to main home."*

`draw()` (`core.js:739`) pushes a history entry on **every signature change**. A sub-category pill is `setQuiet({mealCat:'…'})` (`meals.js:15432`) and `mealCat` is watched — so **tapping Eggs → Waffles → Porridge stacks three entries at the SAME level.** Back then walks the **sideways trail** instead of stepping up.

- ⚖️ **§24 says the bottom Back steps back ONE LEVEL.** History says "the last screen you were on." **On a lateral those are different answers**, and today history wins.
- 💡 **PROPOSAL ON THE TABLE (her call):** a lateral (tab/pill switch at the same depth) **REPLACES** its history entry (`replaceState`) instead of pushing. Back then goes **up**, never sideways.
- 🎯 **SAME SHAPE ELSEWHERE:** WK course tabs · Events tabs · health group tabs · `wkDataTab`. **One ruling fixes all of them; do not fix per room.** ⚖️ **Law 6.**

### ③ 🔴 FINGER FOODS RENDERS THE GUEST BAR **TWICE** *(visible in her screenshot)*
Two identical `▼ How it works — ⊖ 20 ⊕` rows stack on Finger Foods. `guestBar()` is called at **`events.js:960`** (the shared Events bar, §2.2 — **stays**) and **again at `events.js:1094`** inside the `et==='fingerfoods'` branch. The second is **leftover from the STRUCK §2.2 ruling** when Finger Foods had its own plan. **Delete `events.js:1094`.** *(Her "Finger Foods bottom back was stuck again, thereafter it worked right twice" is likely ① as well.)*

### ④ ~~🟡 BOEREKOS → BOBOTIE — ONE QUESTION OUTSTANDING~~ **⛔ STRUCK 27 Jul 2026 — this entry was the 25 Jul REGEX ERROR (§25.1's second failure), disproven by PARSE and already superseded by §24.4**
> ⛔ **STRUCK, kept visible.** ~~"no `sharedWith` … Bobotie cannot legitimately appear under Boerekos"~~ — **false.** Parsed at HEAD `0c020e4` (vm-loaded `wk_southafrica.js`, no regex): `cape-malay-bobotie` carries **`sharedWith:"Boerekos"`**, one of exactly **five** dual-culture records *(bobotie · yellow-rice · tomato-bredie · milk-tart · hertzoggie)* — precisely as §24.4 ruled. Bobotie belongs on Boerekos; the real bug (the door re-labelling itself from `r.country`) was found, ruled and fixed in §24.4. **No question for Tina remains here.** ⚖️ Law 19 — a regex instead of a parse; the corpse sat in this queue two days after the truth was ruled.

### ⑤ 🔵 BANKED FOR LATER (her call, 25 Jul)
**Tiny Tummies + Furry Friends need a REDESIGN** — *"that section doesn't make sense."* Not a bug; a section rethink. Gated behind sameness + bugs + WK recipes, alongside 🎂 Celebration Cakes.

**✅ CONFIRMED WORKING ON LIVE (her fingers, Law 2):** Health bottom Back walks one level at a time all the way out · Tiny Tummies Back is correct · Bar Planner is correct · Events tabs open clean (Finger Foods = only Finger Foods, `← Events` on top) · WK region-list Back reads `← World Kitchen` · Cooking mode Back exits to the recipe.

### 🔤 `sharedWith` IS A SENTENCE WHERE IT SHOULD BE A LIST — **QUEUED 25 Jul, needs its own session**
**Measured by parsing every `wk_*.js`: 1021 records carry `sharedWith`, and ZERO of them are arrays.** All strings.

The shelf filter is `x.country === country || x.sharedWith.indexOf(country) !== -1` (`worldkitchen.js:289`). On an **array**, `.indexOf` asks *"is this one of the items?"*. On a **string** it asks *"does this text contain those letters?"* — substring matching. It gives the right answer today **by luck**.

- 🩸 `cape-malay-peppermint-crisp-tart` → `sharedWith:"Cape Malay"` — **shares with its own country**
- 🩸 `zulu-umngqusho` → `sharedWith:"Zulu"` — same
- 🩸 `sweden-gravlax` → `sharedWith:"Norway · Denmark"` — **two countries in one string**, works only because neither name collides
- ⚠️ **THE LANDMINE:** the library has a country **"India"** *and* a culture **"Indian"**. One record tagged `sharedWith:"Indian"` appears on the **India** shelf, silently. One data entry away.
- ⚖️ **THIS IS THE INGREDIENT STANDARD, APPLIED TO DATA:** one item per line, no "+" lines, for exactly the same reason.
- 🔧 **SHAPE:** `sharedWith: ["Norway","Denmark"]` · empty = `[]` or absent, never `""` · a record may never share with its own country. Migration in Node, then a census rung asserting the shape. **⛔ Do not hand-edit 1021 records.**

---

## ⑤ 🔴 A VERSION MATCHED, THE PARENT GOT NAMED — **Anchor Ingredient (measured 27 Jul 2026, Tina's live catch)**

**What she did:** Anchor Ingredient → typed **beef mince** → got a card reading **"Pannekoek"**.

**Measured at HEAD `456bf17`:** `bf-pannekoek` (meals.js:2644) carries **two versions** — `"Cinnamon Sugar"` and `"Savoury Mince-Filled"`. The mince version has its own ingredients and its own method (meals.js:2827 — *"Brown the mince hard in one layer…"*). **The search is RIGHT: beef mince really is in that recipe.** The bug is the **label** — the result card prints the parent's `name` and says nothing about *which version* earned the hit. It reads like a search error and isn't one.

⚖️ **THE RULE THIS BREAKS — "mood is a tag" / versions ruling, applied to results:** if a VERSION produced the match, the VERSION must be what the card names. Otherwise the app claims a pancake contains mince and looks broken to the one person it should look right to.

🔧 **TWO PARTS, AND PART 2 IS THE ONE THAT ACTUALLY BITES:**
1. **NAME IT** — the card reads the version, not just the parent.
2. **OPEN ON IT** — tapping through must land with the **matching version chip pre-selected**. Today it opens on the default (Cinnamon Sugar), so she taps a mince result and arrives at a cinnamon-sugar pancake with no mince in the ingredient list. ⚖️ **Part 1 without part 2 moves the lie one screen later.**

✅ **WORDING RULED BY TINA, 27 Jul 2026:** the card reads **`<Parent> — <Version name, exactly as stored>`** → **"Pannekoek — Savoury Mince-Filled"**. ⚖️ **The version name is NEVER rewritten** — no "Mince Pannekoek", no per-version short names, no data job. The parent answers *what is it*, the version answers *which one*, and both already exist in the data today. **Nothing new is added to any record; this is a display rule only.**

🔭 **SCOPE IS BIGGER THAN THE ANCHOR ROOM:** every surface that searches ingredients across versions has this shape — Anchor Ingredient, General Search, 4 Ingredients, and the mood shelves' `allRecipes()` query. **Own session.** Do not bolt it onto a navigation brief.
