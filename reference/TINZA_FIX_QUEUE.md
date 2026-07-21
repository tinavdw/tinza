# TINZA FIX QUEUE (confirmed bugs — not ideas)
*This is the QUEUE, not the parking lot. Everything here is a defect seen on the live tablet, waiting to be fixed. Ideas live in TINZA_IDEAS_BACKLOG.md; this file is only things that are actually wrong. Promote an item to an MF-number when it's picked up.*

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

---

# ⛔ STRUCK — RAISED, INVESTIGATED, NOT A BUG
*Kept so they are never re-raised. ⚖️ Law 23 — two bugs sharing a name do not share a fix; and a bug that was never a bug still costs a session the second time.*

## ~~Vetkoek cost block contradicts the scaler ("scaler said 4, cost said 7")~~
**Raised 21 Jul · STRUCK 21 Jul, same day, on Tina's screenshots.**

- **What was actually on screen at scaler 11:** Sweet **R44 total / R4 pp** · Curried Mince **R132 / R12** · Cheese **R77 / R7**. Eleven times 4, 12 and 7 exactly. Label, scaler and arithmetic all agree, and **all three versions derive their own cost correctly.**
- **What the "4 and 7" really were:** Sweet's R4 per person and Cheese's R7 per person — **two versions read as one screen.**
- **Confirmed in code:** `recipeDetailFromResult()` sets `var _scale = _bakeP ? _bakeUnits : sv`, and the label prints `sv`. For a non-bake the label and the multiplier are **the same variable** and cannot diverge.
- **Consequence.** MF124 is **unblocked** — the birchermuesli R510 needs its own look, but nothing upstream was poisoning it. ⚖️ **Law 39 — a tool result is also a hypothesis; cross-check it with your eyes.** Tina's eyes closed this one.
