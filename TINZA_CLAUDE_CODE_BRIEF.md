# TINZA — CLAUDE CODE BRIEF · The Version & WOW Sweep
*Hand-off spec for Claude Code working in `tinavdw/tinza`. Written by Opus, 7 Jul 2026. Pairs with the flowchart `TINZA_CODE_MARATHON.mermaid` (v52).*

**North star (never lose this):** *"A Michelin chef explaining it to a grandma."* You are not filling a template — you are making every card someone would screenshot. Reliable-good is the floor; a genuine spark on every card is the goal.

---

## 0. READ THESE FIRST (they are the law — do not re-derive from memory)
Before writing a single card, read, in the repo root:
- `WOW_STANDARD.md` — the one bar every card clears (the §7 done-checklist is binding).
- `TINZA_STANDARD.md`, `TINZA_RECIPE_DEPTH_STANDARD.md` — depth + structure.
- `TINZA_DIDYOUKNOW_STANDARD.md` — how the "moat" fact is written (never reuse an angle).
- `TINZA_DISH_NAMING.md`, `TINZA_DISH_FAMILIES.md` — naming/romanisation + what counts as the same dish.
- `TINZA_TECHNIQUES.md`, `TINZA_EXOTIC_BUCKETS.md`, `TINZA_RECIPE_ANATOMY.mermaid`.

If anything in this brief conflicts with those files, **those files win** — flag the conflict in your batch report (§11) instead of guessing.

---

## 1. MISSION & SCOPE
**Do:**
1. **Version storage → deltas.** Convert bloated versions (that re-list a whole recipe to change one thing) into `delta` versions the new engine merges. *(Engine is live — see §5.)*
2. **Lift thin cards to WOW-compliant.** Any existing card missing §3 fields or with a bare method gets brought up to the §7 checklist.
3. **Add one researched twist per dish** as a delta version (§6) — the surprise lever.
4. **Reconcile same-dish-two-rooms** version sets (§7-reconcile).

**Do NOT touch (these are reserved / off-limits):**
- **The engine.** `core.js` is done for this job — never edit it. You *use* `applyVersionDelta`; you don't change it.
- **Heroes.** The ~8–10 most-searched dishes per country are authored in chat by Opus (souvlaki, gyros, tzatziki, spanakopita, baklava, etc.). Leave any card already at full WOW depth alone unless it's a version-storage cleanup.
- **Create-from-scratch countries** (Germany / UK / Italy have no real lineup). Do **not** invent whole cuisines. If a country is a stub, write a *proposed dish lineup* to your batch report for sign-off — don't author the cards yet.
- **Working, already-WOW sections** (braai, bakes, France, Nordics, Spain heroes). Don't "improve" what isn't in scope.

---

## 2. GOLDEN RULES (stability + safety — non-negotiable)
- **`node --check <file>` before every commit.** A file that doesn't parse never gets committed.
- **Match the file's existing shape exactly** (WK = strings, Meals = arrays — see §4). Never mix shapes within a file.
- **One file per commit.** Small batches (Cutoff Law): ~8–15 cards, commit, report, next. Never a giant multi-file commit.
- **Byte-discipline.** When editing a card, change *only* the intended fields. Every other card in the file stays byte-identical.
- **No duplicate `id`s.** Check before adding.
- **Never invent prices.** Ingredient rands come from `PRICE_DB`/`prices.js` only. A new/unpriced ingredient goes to `TINZA_WK_PRICE_GAPS.md` (append), never a guessed number.
- **No retailer names, ever** (WOW §5).
- **Safety lines are sacred** — ferments, undercooked-risk, rice/starch reheating: keep/author the safety note; never gate or drop it.
- Commit message format: `wk-sweep: <file> <batch-n> — <n cards, what changed>`.

---

## 3. THE WOW BAR (summary — full text in `WOW_STANDARD.md`)
Every card carries, and is not done until it has: a **unique** "How This Feels" line · a **didYouKnow moat** (surprising true fact, angle never reused) · **buy-name ingredients** costed pp + total · a **why-led method** (every make-or-break step = technique + temp/time + sensory cue + *the reason*) · a **tip** · **storage/freezes/fridgeDays** · **C4-verified goesWith** (real library dishes) · **versions by fame** (5/4/2/1) or where one technique carries many fillings.
Non-negotiables: leaveners in **g/ml** never "to taste" · **real named spices** (never a blanket "curry powder" where a blend is nameable) · cured/salty/brined = **no added salt + say why** · global voice with SA as a bracketed locale layer · authentic ingredients primary, SA substitutes as honest bracketed notes.
**Shelf-WOW Law:** if a dish is googleable exactly as-is, it doesn't ship as-is — give it a spark or replace it. Never disguise a dull recipe with nice words.

---

## 4. THE TWO DATA SHAPES (match per file — critical)
**World Kitchen** (`wk_*.js`) — **strings**:
```
{ id, name, nameAlt, aliases:[], course, type:[], diet:[], cuisine, country, occasion:[],
  ingredients: "90g x · 50g y (prep) · …",     // " · "-joined, weight+buy-name, prep in ()
  method: "One why-led paragraph. Sentence per make-or-break step.",
  cookTime, kcal, nutrition: "Protein Xg, Carbs Yg, Fat Zg, Sodium ~…",
  storage, chefNotes, pairsWith, trivia, howThisFeels, servings, sharedWith, versions:[…] }
```
**Meals / FMF** (`meals.js`) — **arrays**:
```
{ id, cat, goesWith:[], diet, protein, name, emoji, cuisine, time, costPP,
  feel, ingredients:[{n:"beef mince",pp:150,u:"g"}, …],   // objects, pp = per-person amount
  method:[ "Step 1 …", "Step 2 …" ],                       // array of steps
  tip, didYouKnow, freezes, fridgeDays, nutrition:{kcal,protein_g,carbs_g,fat_g}, storage, versions:[…] }
```
Romanisation (WK): native `name` + the romanised famous name as the first Latin alias / `nameAlt`; non-Latin names surface via `tinzaRoman()`/`tinzaDisplayName()`. Don't hand-transliterate — follow `TINZA_DISH_NAMING.md`.

---

## 5. THE VERSION + DELTA SYSTEM (the new contract — engine is LIVE)
A card may carry `versions:[…]`. Each version is one of three kinds:

**(a) Default / inherits base** — just a label, no content:
```
{ "name":"Classic", "icon":"🏆", "default":true }   // renders the base card unchanged
```

**(b) Structural version** (differs end-to-end — e.g. Budget / Quick) — supply full fields, as today. Correct when almost everything changes.

**(c) Twist version** (base + a small change) — supply a **`delta`**, NOT a full re-list. The engine (`applyVersionDelta` in `core.js`) merges base + delta into one complete recipe. Works for **both** shapes:
```
"delta": {
  "swapIng":  [ { "from": <match>, "to": <replacement> } ],   // WK: full tokens "90g beef mince"→"90g lamb mince" · Meals: from = ingredient .n, to = {n,pp,u}
  "addIng":   [ { "item": <ingredient>, "after": <match|optional> } ], // dropped in after the anchor, else appended
  "removeIng":[ <match> ],
  "swapStep": [ { "from": <substring>, "to": <substring> } ], // replaces text inside the method (both shapes)
  "addStep":  [ { "after": <index|null>, "text": <step> } ]   // Meals: insert at array index · WK: appends to the paragraph
}
```
**Rules:**
- Prefer a **delta** whenever the version keeps most of the base. Only re-supply a full `method` when the method genuinely differs (e.g. baking bobotie inside a pumpkin shell).
- A delta version still overrides small scalar fields it needs (`howThisFeels`, `kcal`, `nutrition`, `chefNotes`, `trivia`) — those sit alongside `delta`.
- **Version count by fame:** 5/4/2/1. A national/hero dish can carry more when each version is genuinely distinct; a plain dish gets 1–2. Never force versions onto a dish that doesn't want them.
- **Cost recomputes from the merged ingredients** — so a delta keeps the price honest automatically. Don't hardcode `costPP` unless it's a Meals structural version.

---

## 6. THE RESEARCH-ONE-TWIST RULE (the surprise lever — this is what makes it WOW, not just correct)
For **every dish you touch**:
1. **Web-search** for one unexpected-but-plausible variation ("unusual <dish> variation", "<dish> modern twist", regional/heritage versions).
2. **Taste-test gate:** include it only if a good cook would nod — it must sound genuinely delicious and make sense, not novelty for its own sake. (Model: avocado-cilantro tzatziki = yes; rainbow-glitter tzatziki = no.)
3. **Author it as a delta version** (§5c) with its own `howThisFeels` line.
4. If nothing convincing turns up in a couple of searches, **don't force one** — note "no strong twist found" for that dish in the batch report so a human can take a run at it. A missing twist is fine; a bad one is not.

This is the one step that separates "compliant" from "WOW." Spend real effort here.

---

## 7. RECONCILE RULE (same dish, two rooms)
When a dish exists in two rooms (e.g. Bobotie in `meals.js` **and** `wk_southafrica.js`), align them to **one canonical version set**, adapted to each file's shape. First instance:

**Bobotie canonical set:** `Classic · Budget · Quick · Lentil · 1600s Original · In a Pumpkin`
*(6 is justified for SA's national dish; if holding the strict 5-standard, drop Quick.)*
→ Port `1600s Original` + `In a Pumpkin` into the Meals card as array-deltas; port `Quick` into the WK card as a string version; convert `Budget`/`Lentil` to deltas. Same names, same icons, same order in both rooms. Log the pair in the report.

---

## 8. WORKED EXAMPLES (pattern off these exactly)
- **Fields + why-led method → `greece-moussaka` in `wk_europe.js`.** This is the depth bar: feeling line, Tselementes-1920s trivia moat, SA buy-names (brinjal, kefalotyri-or-parmesan), method that names *why* (salt the brinjal, brown undisturbed, the yolk sets the crown, rest before slicing). Match this density.
- **Delta contract (LIVE) → `cape-malay-bobotie` in `wk_southafrica.js`.** `1600s Original` = `{swapIng beef→lamb, swapStep browning line}` inheriting the richer base method; `In a Pumpkin` = `{addIng pumpkin after mince}` + kept its own structural method. Copy this exact pattern for twist vs structural.
- **Versions + surprise → Tzatziki** (Greece / Spice›Sauces, WK string shape). Base = classic dill & mint. Five versions, four as deltas:
  - `🏛️ Classic Dill & Mint` — `{default:true}`
  - `🥑 Avocado-Cilantro` — `delta:{ addIng:[{item:"1 ripe avocado", after:"…yoghurt token"}], swapIng:[{from:"fresh dill", to:"fresh coriander"}], removeIng:["fresh mint"], addIng:[{item:"10ml lime juice"},{item:"1g ground cumin"}], swapStep:[…fold avocado through…] }` — the researched surprise; a decades cook still learns it.
  - `🌶️ Spicy Jalapeño-Lime` · `🫐 Beetroot` · `🌿 Smoked Paprika & Chilli-Oil` — each a small delta.
  This proves the point: a sauce base can carry many versions, and one of them should surprise.

---

## 9. INGREDIENT & COST INTEGRITY
- Ingredient **name = what you buy**, matching a `PRICE_DB` key. Amount = weight (g/ml) + pack hint; count only for unit-sold items. One ingredient per line, no "+" lines, prep in the method/brackets not the name.
- Authentic ingredient **primary**; SA substitute as an honest bracketed note (e.g. "kefalotyri (or parmesan)").
- **Unpriced ingredient → append to `TINZA_WK_PRICE_GAPS.md`** with a note; never guess rands.

---

## 10. THE REVIEW GATE (how nothing thin ships)
You are trusted to commit, **but** every batch produces a report so a human can skim and upgrade. Append to **`TINZA_SWEEP_REPORT.md`** per batch:
- File + batch number + card ids touched.
- For each card: ✅ full-WOW / 🟡 compliant-but-flat / ⚠️ needs-human — and one line why.
- Every **twist** added (dish → the variation) so Opus/Tina can sanity-check taste.
- Any dish where **no strong twist** was found.
- Any **conflict** with the standards files, or any **create-from-scratch lineup** proposed.
Flag generously. It's better to mark a card 🟡 and let a human deepen it than to over-claim WOW.

---

## 11. ORDER OF WORK (phases)
1. **Reconcile Bobotie** (§7) — smallest, proves the cross-room pattern end-to-end.
2. **Greece tail** — the ~52 non-hero Greek dishes to WOW-compliant + one twist each (heroes stay with Opus).
3. **Thin WK South/Central block** (from the coverage map): Portugal · Switzerland · Austria · Belgium · Netherlands — lift to compliant + twist + delta versions.
4. **Version-storage cleanup** across `meals.js` bloated versions → deltas (no content change, just leaner storage; verify byte-identical render in the report).
5. **Stop and hand back** the create-from-scratch countries (Germany/UK/Italy) as proposed lineups — do not author.

Between phases: `node --check`, commit, report, pause for the human to pull the latest before you continue.

---

## 12. DEFINITION OF DONE
**Per card:** passes the `WOW_STANDARD.md` §7 checklist · correct shape for its file · versions use deltas where sensible · one researched twist (or a logged "none found") · `node --check` clean · costed · logged in the report.
**Per batch:** one file, committed, report appended, nothing outside scope touched.

*Reliable-good is the floor. The twist is the job. When in doubt, flag it — don't fake it.*
