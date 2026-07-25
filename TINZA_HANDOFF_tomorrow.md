# TINZA — SESSION HANDOFF · 25 Jul 2026 (morning, Opus 5)
*Paste into the next chat to resume. Files are the memory — this + the rulings + the fix queue are the continuity.*

**Start protocol:** `git clone --depth 1 https://github.com/tinavdw/tinza.git` reads HEAD (⚖️ Law 2 — Claude reads the repo; Tina's eyes on live close a bug). Claude can run `tinza-doctor.js` / `tinza-census.js` / `Tools/tinza-holder-audit.js` / `node --check`; Claude cannot push.

**Where we are:** **Phase C is diagnosed, the watcher is built, and the proven-bug half is fixed.** 11 holders added (171 → 182), and the vessel box has been **rewritten as a recommendation** (Tina's ruling, 25 Jul). Six split dishes closed — Melktert, Malva, Bobotie, Shepherd's Pie, Chicken Pie — plus **Beef Lasagne**, the outright miss, tagged in both rooms. What is left is **4 dishes that need Tina's ruling**, and a **131-record authoring worklist** that was never in scope for one session.

---

## ⚠️ THE BOARD IS RED ON PURPOSE

Doctor rung 12 now **fails** on 6 bare copies across 4 dishes. That is the ratchet working, not a regression — the gap used to be invisible. It goes green the moment the four below are ruled.

## ▶️ IMMEDIATE NEXT — 3 records, ONE question

**The question:** these are sauces/pastes duplicated out of the Spice room. Does each copy yield a **fixed batch** (→ jar/bottle holder) or a **per-head amount** (→ NO holder)? `braai:periperibraai` is already proven per-head (*3g pp · 8ml pp*) so it takes **none**.

1. **Peri-Peri Sauce ×2** — `braai:periperibraai` is costed **per person** (*3g pp · 8ml pp*), so it has **no fixed yield** and by the new ruling takes **NO holder** — correctly bare. `events:periperi` looks like a batch → 500ml bottle. **Confirm?**
2. **Mango Atchar** — `world:indian-mango-atchar`: batch (375ml jar) or per-head?
3. **Tahini** — `events:tahini`: same question.

Then: push → Tina's eyes on live (open Bobotie in **World Kitchen** and Malva in **bakes** — both should now show the dish line and open at 6) → Phase C closed.

## 📌 AFTER THAT — the real scope

- **131 records · 128 dishes** are holder-shaped with **no holder anywhere**. Not a bug list — a **Fable-scale authoring pass**. Doctor holds it as a **WARN**, never a gate. Heavy rooms: **world 85 · meals 17 · events 12 · health 9 · bakes 7 · braai 2 · spice 1**. Full list in `reference/MF144_PHASE_C_AUDIT.md`. Promote the WARN to a gate the day it closes.
- **Biscuits→dog-food search bug** — `reference/TINZA_FIX_QUEUE.md` (~line 110).

## 🍏 APPLE TART — RULED AND CLOSED
Read the ingredient bases rather than the names: `bk-apple-tart` = **puff pastry** (flat) · `netherlands-appeltaart` = **pastry dough + egg** (deep → **24cm springform, per 12**) · `boerekos-appeltert` carries **baking powder** → a **batter, not a crust** (→ **23×33cm ovenproof dish, per 6, soft**). Three constructions, three holders. *Tina's call: same dish → share, different → own tin each.*
⚠️ **Check on live:** the boerekos appeltert now opens at **6** with the soft note. If that reads wrong for a dessert, say so and it becomes a plain pie dish instead.

## ✅ DONE THIS SESSION
- **`Tools/tinza-holder-audit.js` — NEW, the watcher.** Read-only. Boots the real library and **walks the record objects** (⚖️ §19 parse-never-grep), accent-folds names, joins cross-language twins (Melktert↔Milk Tart, Herderspastei↔Shepherd's Pie), and splits the finding into **A · SPLIT** (a twin has it, this copy doesn't → *bug*) and **B · ALL-BARE** (nobody has it → *authoring*). Runs as a CLI **and** exports `analyse()`.
- **Doctor rung 12 widened.** The old guard read `BAKES_RECIPES` only — *a room-blind watcher cannot see a room-crossing bug.* It now spans **every room**, `require`s the audit module so there is **one** grouping (not a copy per tool), and **fails loudly if the module is missing** (⚖️ MF135 — a watcher that swallows its own failure cannot watch).
- **Proven to fire.** Stripped the holder just added to `events:melktert` → count moved **6 → 7** and named the record. Restored, `node --check` clean.
- **9 holders authored**, one line touched per record (⚖️ she stages line by line). All 9 verified **surviving the door** via `allRecipes()`.
- **THE HOLDER IS A RECOMMENDATION, NOT A REQUIREMENT** (Tina's ruling). Heading changed from *"🍽️ You'll Need"* → **"🍽️ What To Cook It In"**, and the box now says out loud: *a guide, not a rule — cook it in what you have; a smaller dish bakes deeper and needs longer, a bigger one bakes flatter and is done sooner.* The **count** is untouched — 13 servings is still 3 dishes, because a caterer needs that true.
- **Banner noun fixed** (the 24 Jul cosmetic thread) — *"your total for all 3"* → *"all 3 **dishes**"*. Render-tested at 6 and 13; silent at 1 and byte-identical with no holder.
- **2 rulings banked** — `TINZA_RULINGS.md` §10.

## 📗 RULING BANKED — TINZA_RULINGS.md §10
**THE HOLDER FOLLOWS THE YIELD BASIS, NOT THE NAME — AND A BARE TWIN IS RED.**
- 🔴 Any copy carries a holder → the dish is **proven** → a bare copy is a **bug**, not pending. RED.
- ⚠️ No copy anywhere → genuinely authoring-pending. WARN, then promote to a gate.
- ⚖️ Ingredients scale **per person** → no fixed yield → **NO holder**. Ask of the *record*, never the *name*.
- 🍽️ Copying a twin's holder is a **decision**, not a mechanic — different rooms can want different vessels.

## 🧵 LOOSE THREADS (carried, still not blockers)
- **Meal seed question (Tina to decide):** `recipeDetailFromResult` has no `mealActiveRecipe` branch → a meal inherits `searchServings` from the last-viewed recipe instead of its own soft-default. Bug, or intended session-wide servings?

## ⬆️ PUSH LIST
`Tools/tinza-holder-audit.js` *(new)* · `tinza-doctor.js` · `sections/core.js` · `sections/wk_southafrica.js` · `sections/wk_europe.js` · `sections/meals.js` · `sections/eventsData.js` · `TINZA_RULINGS.md` · `reference/MF144_PHASE_C_AUDIT.md` *(new)* · this handoff.
⚖️ Several commits, **one push** (Netlify is credit-based).


---

## ⚙️ EFFORT — RUN THE NEXT SESSIONS ON **MEDIUM**
Same model, smaller thinking budget — **low is not a dumber Claude**, just a shallower one. Anthropic's guidance: low/medium give strong quality at a fraction of the tokens; high (the default) roughly doubles medium's spend.
- **Medium** — authoring holders to a ruled spec, running census/doctor, tagging records, handing back files. **This is most Tinza work.**
- **High** — diagnosis, architecture, rulings. Earned its keep on 25 Jul: caught a normalizer bug collapsing every non-Latin name into one group, and caught that `braai:periperibraai` is per-head (which is why that became a ruling instead of a wrong holder).
- **Low** — lookups. *"What's in the fix queue", "which file holds X".*
⚖️ Long chats are the real drain — every message re-reads the whole history. **Start a fresh chat per work item and paste this file.**
