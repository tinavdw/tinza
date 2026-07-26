# TINZA — SESSION HANDOFF · 25 Jul 2026 (afternoon)
*Paste into the next chat to resume. Files are the memory — this + `TINZA_RULINGS.md` + `reference/TINZA_FIX_QUEUE.md` are the continuity.*

**Start protocol:** `git clone --depth 1 https://github.com/tinavdw/tinza.git` reads HEAD (⚖️ Law 2 — Claude reads the repo; Tina's eyes on live close a bug). Claude can run `tinza-doctor.js` · `tinza-census.js` · `Tools/tinza-holder-audit.js` · `node --check`. **Claude cannot push.**

---

## ✅ CLOSED THIS MORNING — MF145

**Phase C is done and verified on live.** The four "bare twin" reds were never bugs: `braai:periperibraai` · `events:periperi` · `events:tahini` · `world:indian-mango-atchar` are all **per-head** recipes standing beside **Spice batch twins** (500ml bottle · 375ml jar ×2). Same name, different construction — the Apple Tart shape again.

- **`yieldBasis:"perHead"`** is now a declared field: door line in `sections/index.js` + forwarded through all 7 adapters + authored on the 4 records.
- ⛔ **It is declared, never inferred.** `events`/`braai` ingredients cross the door through `nameOnlyIng()` with `pp:null` **by design**, so the basis is genuinely unknowable downstream. A regex on the name would be a silent wrong answer wearing a green tick.
- 🔴 **It fails loud.** Drop the door line and all four go back to RED. *Proven both ways:* strip one declaration → split 0→1; drop the door line → split 0→3 dishes / 4 copies.
- 👁️ The audit prints **list C · EXEMPT** + a `per-head exempt=N` total. An exemption nobody can see is indistinguishable from a check that quietly stopped running.
- 📁 The tool lives at **`Tools/tinza-holder-audit.js`** (with `photo-audit` / `health-check` / `fallback-census`). The doctor's `require` was briefly pointed at root — corrected.

**Doctor rung 12 now:** ✔ holder survives the door · ✔ **no bare twins, all rooms agree** · ▲ 131 authoring-pending (WARN) · ✘ *the vessel does not scale with the dial*.

---

## 📗 THREE RULINGS BANKED — `TINZA_RULINGS.md`

1. **§10 · THE YIELD BASIS IS DECLARED, NEVER INFERRED** (MF145).
2. **🔍 EVERY SCROLLABLE LIST OF RECIPES GETS A SEARCH.** A screen with a scrollable *recipe list* gets a search box; a hub of *tiles* does not. Mechanical → censusable.
3. **🍽️ ONE DISH = ONE RECORD. A ROOM IS A QUERY, NOT AN ADDRESS.** Merge by default; split only where the construction genuinely differs, and a split declares why. Merge procedure = **most comprehensive wins, THEN enrich** — walk the losers and fold in every feature the base lacks. *A merge must never lose a feature*, because sameness is unfinished and the copies are unevenly complete.

---

## 🥇 **DO MF86 FIRST** — IT IS 12 DAYS OLD AND **MF145 JUST UNBLOCKED IT**

**MF86 is not a new find** (Tina remembered it — she was right). Found 13 Jul, confirmed 14 Jul, **still open at HEAD.** `adaptSpice` in `sections/index.js` (~line 610) hard-codes:

```js
ingredients:[],  method:[],     // ← never looks at makeYourOwn
```

**MEASURED at HEAD:** `SPICE_DB` = **190 records** · `yield.mode` → **batch 131 · serves 59** · **1,333 quantified ingredient lines** — all invisible to the index.

### 🔓 WHY IT STALLED, AND WHY IT NO LONGER DOES
It was blocked on one ruling from 14 Jul: *“a chutney's cost is per BOTTLE (250ml), not per person — does Spice get a batch cost, or stay out of I've Got R100?”* — parked until rested, and never picked up.

⚖️ **THE DATA ALREADY MAKES THAT RULING.** Every Spice record declares its own basis in `makeYourOwn.yield.mode`:
- **`serves`** (59) → `yieldBasis:'perHead'` — no fixed yield, no holder (⚖️ MF145)
- **`batch`** (131) → a fixed yield → batch cost, and most already carry a jar/bottle holder

**No new ruling is needed. The adapter just has to read the one the data already makes.** MF145 shipped the field this morning — it is the missing half of MF86.

### 🎯 THE FIX (≈ 4 lines in `adaptSpice`)
`ingredients` ← `makeYourOwn.ingredients` · `method` ← `makeYourOwn.method` · `yieldBasis` ← mapped from `yield.mode`.

**WHAT IT CLOSES AT ONCE:** 🔍 `coriander` finds Garam Masala · 🧅 **Anchor Ingredient** (a FREE-tier feature) sees Spice · 💰 190 Spice recipes become costable off PRICE_DB · 🥬 **diet-tag derivation** stops being blind (the dietary ruling derives tags from ingredient lists) · 🧅 4-Ingredients can answer a fridge with Chakalaka.

⚠️ **Verify it was not deliberate before shipping** — the empty arrays are hand-written, so read the surrounding comments and check nothing renders off an empty `ingredients` for Spice. ⚖️ Law 2 — Tina's eyes on live close it.

---

## 🚨 THE REST OF THE BIGGEST RED IS ALSO PLUMBING, NOT AUTHORING

**190 of the 192 “Recipes with NO INGREDIENTS ANYWHERE” are Spice** — that is MF86 above. The other 13 are the `versions[]` red (meals 11 · sides 2) — same shape: the data exists, the door cannot see it.

⚠️ **This is not cosmetic.** Everything that reads ingredients is blind to the whole Spice room: **Anchor Ingredient** (a FREE-tier feature) · ingredient search · shopping lists · allergen tokens · and **diet derivation** — the dietary ruling says tags are derived from ingredient lists in Node, so 190 Spice records cannot be diet-tagged correctly either.

⚖️ **TWO ADAPTER FIXES CLOSE 203 OF 205 GAPS.** Do not treat this as an authoring pile.

---

## 🧩 “SAMENESS” IS **TWO JOBS WEARING ONE WORD**

**HALF 1 — RENDER + PLUMBING. Bounded. Do it FIRST.**

| job | size |
|---|---|
| shared header | 3 rooms — spice · health · furry |
| search box that LIES | 1 room — braai (*a pill dressed as a search box*) |
| hand-rolled search | 4 rooms — health · furry · kiddies · budget |
| no search at all (WARN) | 2 rooms — spice · tinyTummies |
| **MF86** · `adaptSpice` → `makeYourOwn` | **190 records, ONE fix — DO THIS FIRST** |
| `versions[]` ingredients → the door | **13 records, ONE fix** |

**Seven rooms and two adapters — closes 5 of the doctor's 10 reds.**

**HALF 2 — DATA / AUTHORING** (didYouKnow · goesWith · storage · holders · WOW voice · costing coverage). The genuinely huge one. ⛔ **It must come AFTER the merge** — author `didYouKnow` onto three copies of Bobotie and then merge them and you did the work three times and threw two away.

### ⏭️ THE ORDER
1. **Render + plumbing sameness** — bounded, huge leverage · MEDIUM
2. **Sauce audit + merge** — collapses the library so you author once
3. **Data / authoring sameness** — on the merged library

🎁 **Render-first produces the MERGE'S TOOL.** Once every room renders the same slots, *“which of these three is most comprehensive”* stops being a judgement call and becomes a countable list of filled vs empty slots. **The enrich checklist IS the slot list.** Render first makes the merge mechanical instead of taste.

---

## ▶️ NEXT SESSION — PICK ONE, FRESH CHAT

### 🥇 A · SAMENESS SEARCH PASS — *closes 3 of the doctor's 10 reds* · **MEDIUM**
The same problem wearing three names:
- `Rooms that do not use the shared header`
- `Rooms whose search box LIES (it navigates away)` — worse than no search: it lies to the finger
- `Rooms with a hand-rolled search input`

ONE shared renderer, rolled to **all** rooms simultaneously. Known gap: Spice sub-shelves (Spice Blends & Masalas, 40 entries) have pills but no search; the Spice **hub** correctly has one.

### 🥈 B · THE SAUCE AUDIT + MERGE TRIAGE — **HIGH to diagnose, MEDIUM to execute**
Build the audit *before* ruling further — ruling before you can see the size of the merge pile is ruling blind. Sort every duplicated dish into:

| case | verdict |
|---|---|
| same dish, construction, basis | **MERGE** → one record, many tags |
| same name, different **yieldBasis** | both survive, both declare (⚖️ MF145) |
| same ingredients, different cultural name | both survive |
| different dish, same name | both survive, `tinzaListLabel()` disambiguates |

**Design work inside it:** `section` currently does double duty (*where stored* + *which room shows it*). A query-room needs **primary room** + **appears-in** — one line per record, same shape as `equipment`/`yieldBasis`.
**Do NOT wire cross-links yet** — a link from Events Peri-Peri to Spice Peri-Peri is a link from a thing to itself.

### 🥉 C · THE VESSEL-SCALING RED — **HIGH**
`ceil(scaledYield / per)` is wrong, **or** the past-one contract banner is missing. Pre-existing at HEAD, verified by stash — not from MF145. Last structural thing between you and a clean holder story.

---

## 🔴 THE DOCTOR'S 10 REDS (25 Jul)
1. In `sections/` but NEVER loaded by `index.html`
2. Text inputs under 16px
3. Image paths that DO NOT EXIST on disk
4. LIVE EXTERNAL IMAGE — breaks offline, can go down
5. Rooms that do not use the shared header ⬅️ *session A*
6. Rooms whose search box LIES ⬅️ *session A*
7. Rooms with a hand-rolled search input ⬅️ *session A*
8. Ingredients hidden inside `versions[]` — the FINDER cannot see these
9. Recipes with NO INGREDIENTS ANYWHERE
10. The vessel does not scale with the dial ⬅️ *session C*

## 🐛 FIX QUEUE — ADD THESE
- **`events:tahini` renders "to taste" ×3.** Authored at 12g pp / 3ml pp / 0.07g pp; `nameOnlyIng()` strips them at the door and the finder surface renders from the door. A paying user gets a recipe with no quantities. This is red #9 showing its face on screen, and it breaks a WOW non-negotiable.
- Spice sub-shelves have no search bar (→ session A).
- Sauce placement audit + merge triage (→ session B).
- Biscuits→dog-food search bug — `reference/TINZA_FIX_QUEUE.md` ~line 110.

## 🧵 LOOSE THREADS
- **Meal seed question (Tina to decide):** `recipeDetailFromResult` has no `mealActiveRecipe` branch → a meal inherits `searchServings` from the last-viewed recipe instead of its own soft-default. Bug, or intended session-wide servings?
- **131 records · 128 dishes** holder-shaped with no holder anywhere — a Fable-scale authoring pass, held as a WARN. Heavy rooms: world 85 · meals 17 · events 12 · health 9 · bakes 7 · braai 2 · spice 1. Full list in `reference/MF144_PHASE_C_AUDIT.md`. **Promote the WARN to a gate the day it closes.**
- ⏸️ **FABLE PAUSED** (usage cost) — S3 post-reset only: dessert icons (Melktert[dup-scan bakes first] · Koesisters · Koeksisters · Peppermint Crisp Tart) + Umngqusho + S2 tail.
- MF141 · strike/repoint `boerekos-sosaties` (dup of WOW'd `cape-malay-sosaties`, ruled yes 23 Jul).
- R50→R90 price sweep · `wk_europe` re-decode · Toum rename in `wk_africa.js` ~line 132.

---

## ⚙️ EFFORT
- **MEDIUM** — authoring to a ruled spec, running census/doctor, tagging records, handing back files. **Most Tinza work.**
- **HIGH** — diagnosis, architecture, rulings. Earned its keep 25 Jul twice: caught that `braai:periperibraai` is per-head (→ a ruling instead of a wrong holder), and caught that `adaptBraai` silently drops any field it doesn't forward.
- **LOW** — lookups.

⚖️ **Long chats are the real drain** — every message re-reads the whole history. **Start a fresh chat per work item and paste this file.**
