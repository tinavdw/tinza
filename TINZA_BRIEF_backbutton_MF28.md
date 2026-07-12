# TINZA — CODE BRIEF · 12 Jul 2026
## JOB 1: Back-button audit (READ-ONLY) · JOB 2: MF28 price-resolver qualifier guard

**Repo:** tinavdw/tinza · **Live:** tinza.netlify.app · **Last known good:** `main@403846b`

---

## ⚖️ THE LAW — READ BEFORE YOU TOUCH ANYTHING

1. **`node --check` PROVES NOTHING.** It passed on a zero-byte `spice.js`. It proves syntax, not truth.
2. **A REPORT IS NOT PROOF. A PASSING TEST IS A REPORT TOO.** A render-proof once passed while the page still leaked — it swept the merged pool, and Health's *private* renderer was never in the pool. **Prove it per-section. "Every room" means EVERY room. 5 of 12 is not proof.**
3. **SILENT WRONG IS WORSE THAN LOUD MISSING.** This whole brief is about that one sentence.
4. **A NARROW QUESTION GETS A NARROW ANSWER — and it will be true.** Ask *"what is NOT guarded?"*, never *"is X guarded?"*
5. **File writes: Node (`fs.writeFileSync`) ONLY.** Python truncated `spice.js` to 0 bytes on an emoji encoding error. **Minimum-file-size guard on every destructive operation.**
6. **One driver per file.** If this chat is editing a file, Code does not touch it, and vice versa.
7. **Don't patch N sites. Build the one thing they should all call.**

---

# JOB 1 — THE BACK-BUTTON AUDIT

## Status
**Written three times. Sent zero times. Four sessions running. IT IS READ-ONLY. IT TOUCHES NOTHING. JUST RUN IT.**

## The symptom (Tina's words)
> *"Sometimes it takes me out of Breakfast."*

## Why it matters more than it sounds
**Cross-links ARE the architecture.** `goesWith` · Makeable · Braai salad → Spice dressing → back · World Kitchen cross-shelves. If following a cross-link breaks Back, then **every cross-link makes the app worse** — and we have been adding them for months.

## DELIVERABLE: answer these, with file:line for each. Change nothing.

1. **How does navigation work at all?** `history.pushState` / `popstate`? `hashchange`? Or a plain `showSection()` / `render()` call that mutates the DOM with **no history entry at all**?

2. **If there is no history entry** — then the browser/Android Back button is leaving the *app*, not the *view*. Say so plainly. That is the whole bug and it is a one-day fix.

3. **List EVERY cross-link navigation call site.** Include at minimum:
   - `goesWith` chips
   - Makeable / `makeable.js`
   - Braai salad → Spice dressing (and the "Go back to Recipe" return)
   - World Kitchen → Spice sauces cross-link shelf (France)
   - Any recipe-detail → recipe-detail jump
   For each: **does it push history, or does it hard-jump?**

4. **What state is lost on a back?** Specifically: which **section**, which **category tab**, which **subcategory pill**, and the **scroll position**. If Back returns to a section but at the top, with the default pill, that *is* "it takes me out of Breakfast" — the user is technically back but has lost their place, which feels identical.

5. **Is there a hardcoded "back" target anywhere** — i.e. a button that always returns to Overview/Home regardless of where the user came from? Grep for it. That is the most likely culprit.

## Output format
A plain list. `file:line` → what it does → pushes history? Y/N. **No fixes proposed in this pass. Diagnosis only.**

---

# JOB 2 — MF28: THE PRICE-RESOLVER QUALIFIER GUARD

## What it is
The PRICE_DB resolver **falls back to the bare noun** when a specific key is missing. Silently. The page looks perfectly healthy.

Known live failures (all in `health.js`, which is where the dietary users live):

| Ingredient on the card | What the app actually prices |
|---|---|
| almond milk / oat milk | **DAIRY MILK** |
| almond butter / cashew butter | **DAIRY BUTTER** |
| cashew cheese | **CREAM CHEESE** |
| date syrup | **HONEY** |
| maple syrup | golden syrup |
| nutritional yeast | **BAKER'S YEAST** |
| black beans | sugar beans |
| corn tortillas | flour tortillas (by weight) |

**Tier 2 — the app prices food by spelling:**
- `bean sprouts` → **BRUSSELS SPROUTS @ R193**
- `caster` sugar → R35 · `castor` sugar → R84

## 🚨 WHY THIS IS NOW A BLOCKER, NOT A PRICING NICETY

The dietary filter was ruled **Pro** on 12 Jul. That means **the only human who will ever use the vegan filter is a human who paid R50.**

She filters to vegan. She builds a plan. She opens the shopping list — and the resolver has quietly put **milk and honey on a vegan's shopping list.**

A free user seeing a wrong price is embarrassing. **A paying vegan handed dairy is a refund and a screenshot.**

**MF28 ships before MF30. No exceptions.**

---

## STEP 2A — READ-ONLY. ANSWER THIS FIRST. DO NOT WRITE CODE YET.

> **Does the SHOPPING LIST print the ingredient NAME as authored, or the RESOLVED PRICE_DB KEY?**

- If it prints the **name** → the user *sees* "almond milk", we merely **charge her wrong**. Bad. Fixable. Money bug.
- If it prints the **resolved key** → **we literally print MILK and HONEY on a vegan's shopping list.** Catastrophic. Dietary bug. Stop and tell Tina immediately.

Answer with `file:line` and the actual line of code that emits the shopping-list row. **This single answer sets the severity of everything below.**

## STEP 2B — MAP IT (still read-only)

1. Find **every** resolver / price-lookup function. There is almost certainly more than one (`health.js`, `worldkitchen.js`, `core.js`, `tinyTummies.js` all have form). **Ask "which lookups are NOT guarded?", not "is the lookup guarded?"**
2. For each: show the fallback branch — the line where a missing key degrades to the bare noun.
3. Run a sweep over the **merged pool** AND **per-section**: list every ingredient string in the app that currently resolves via fallback rather than an exact key. That list is the blast radius.

## STEP 2C — THE FIX (one function, not N patches)

**Build ONE shared resolver in `core.js`. Every section calls it. Nothing gets its own.**

Rules:
1. **Longest-match-wins.** `almond butter` beats `butter`.
2. **QUALIFIER GUARD:** if the ingredient name carries a qualifier (a leading modifier word) **and** there is no exact key for the qualified name → **FAIL LOUD. Return null. Never fall back to the parent noun.**
3. **Loud-missing is already a shipped, working pattern** — the app already renders *"Based on 8/9 ingredients priced."* and *"2/2 ingredients priced."* **Route the nulls into that.** It is not an error message. **It is the honesty feature.** It is the thing that makes every other number on the screen believable.
4. `costLine()` is the only thing allowed to emit a Rand. The resolver feeds it. Do not add a second door.

## STEP 2D — PROOF (this is not optional)

- ❌ `node --check` is **not** proof.
- ❌ "Code reports it's fixed" is **not** proof.
- ✅ **Render-proof:** run the actual engine functions over the merged pool in Node (`vm.createContext` / `vm.runInContext`, tier state injected).
- ✅ **AND per-section.** All 12 rooms, named individually, each with a pass/fail. **A bad room hides inside a good aggregate.**
- ✅ Report the *"N/M ingredients priced"* count **per section, before and after.** The number should go DOWN. If it stays the same, the guard isn't firing and you've built nothing.

## Files (line numbers from the 11 Jul audit — verify, do not trust)
- `health.js` — the worst offender. Also carries MF33 and yesterday's only surviving gate leak. **Every road leads back to health.js.**
- `core.js` — 4073 lines as of `403846b`. **SACRED.** Back it up. Line-count before and after. Surgical edits only.
- `worldkitchen.js`
- `prices.js` / PRICE_DB

---

## ⛔ EXPLICITLY OUT OF SCOPE FOR THIS BRIEF
Do not touch these. They are the next jobs, not this one.
- **MF29** (the `Math.ceil` over-billing in the food-cost path)
- **MF33** (`hcLineCost` / `ttLineCost` returning null for count items)
- **MF30** (the dietary picker/badge/filter wiring)
- **MF31/32** (the colour law)

Fixing the resolver does not fix the maths. Keep them separate so we can prove each one.

---

## DEFINITION OF DONE
1. Back-button audit: answered, with file:line, nothing changed.
2. MF28 2A answered: name or key. **Tina told immediately if it's key.**
3. One shared resolver in `core.js`, longest-match-wins, qualifier guard, fails loud.
4. Nulls routed into the existing *"N/M ingredients priced"* line.
5. Render-proof **per-section, all 12 rooms**, before/after priced-counts reported.
6. Pushed. **Netlify says `Published` on the hash you think you're testing.**

*"Ship it" is not "push it." Say which one you mean.*
