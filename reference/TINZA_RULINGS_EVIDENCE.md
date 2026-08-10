# 📦 TINZA_RULINGS_EVIDENCE.md — THE RECEIPTS

> ⛔ **THIS FILE CARRIES NO RULES. IT IS NOT `/rule`.**
> Every ruling, and every ruling's REASON, lives in `TINZA_RULINGS.md`. That file is canonical.
> This one holds what was measured, what was applied on which date, what was struck, and which
> MF built it — kept because Tina proved it, not because it must be re-read every session.
>
> **Split from `TINZA_RULINGS.md` on 10 Aug 2026 (MF180). Nothing was reworded. Nothing was deleted.**
> **If this file and `TINZA_RULINGS.md` ever disagree — `TINZA_RULINGS.md` is right.**

---

## 🧑‍🍳 3 · TINZA CHEF (the AI)

- ✅ **NOTHING BREAKS, AND THIS WAS MEASURED NOT ASSUMED.** All three call sites already wrap the call in `try/catch` and degrade silently — *"the app results stay. Nothing is lost."* Mood shelves keep serving from a library **160–784 deep per mood**; the library was always meant to carry them. ⚖️ **Law 20 — the cache is not a shortcut, it IS the business model.**

- 💰 **AND THE BILL WAS NOT WHAT ANYONE THOUGHT.** All three call sites asked for **Sonnet**; the function overwrote it with **Opus** on every request. Every comment said Sonnet, every invoice said Opus. **When he returns, the model is ruled once, out loud, in one place.** ⚖️ **Law 11.**

- 🚪 **THE OPENER ALREADY EXISTED — THE BRIEF INVENTED ONE THAT WAS WRONG AND UNNECESSARY.** §6 said wire `openRecipe(r.id)`. But `openRecipe` takes `(section, id)` over `RECIPE_SOURCES`, which has no `floor` key — all 9 budget-floor cards would have been dead ends, the exact bug MF117 kills. The real door, `openMoodRecipe → recipeDetailFromResult(r, …)`, is the SAME renderer the budget finder and search already use on `allRecipes()` records. Feed live records in; the tap works with zero opener changes. ⚖️ **Law 35 — lift the existing door, do not invent one.**

- 📏 **A SHELF'S COVERAGE IS MEASURED OVER THE SHELF'S POOL, NOT THE WHOLE APP.** The brief's coverage %s were over all 2,083; over the 1,667 a mood actually draws from they are friendlier — time 80%, kcal 90%, costPP 89% (protein 6%, still unusable). Conclusions held either way, but the denominator is the eatable pool.

*Tablet-proven (MF117 first light): keyword/slot guessing put **Fish & Chips** under "Impress", **Burger Buns & Chips** under "I need something sweet" (TREAT slot sweeps in savoury bakes AND sides), and **blue-cheese swirl rolls** under "Fussy little ones" (the word "cheese" is not the concept "kid-friendly"). The dishes are not miscategorised — they carry NO mood. A guessed filter is a hypothesis; the screen disproved it. ⚖️ Law 22 — the render is the measurement.*

---

## 🔧 5 · THE FIVE TOOLS — WHICH ARE **QUESTIONS**, WHICH ARE **DOORS**

#### 🆕 AMENDED 6 Aug 2026 — **FOURTEEN MORE, MEASURED** *(ENTRY 11 · `reference/ENTRY11_MEASUREMENT.md`)*

⚠️ **Nothing above is removed. This is the same ruling, with the rest of its keys found.**

🩸 **`budgetPlan` was ALREADY in the table above, ruled 13–14 Jul — and `core.js:55` never listed
it. The ruling was right and the code disobeyed it for three weeks.** ⚖️ **The file is right and
the code is a bug** *(CLAUDE.md §0)*. That is the shape to expect: **a ruling is not implemented by
being written.**

| ⛔ NEVER (added 6 Aug) | call site | why |
|---|---|---|
| `mealPlan` | `meals.js:16589` | **her Feeding My Family plan.** Missed by the 13 Jul list entirely. |
| `babyPlan` | `tinyTummies.js:88` | her baby plan |
| `spiceCart` | `spice.js:8091` | a cart she filled |
| `wkBump` | `worldkitchen.js:1289` `wkSetBump()`, read `:1034` | **a portion she tuned by hand, dish by dish** |
| `wkServings` · `wkGuests` | `worldkitchen.js:769` · `:297` | counts she set |
| `barGuests` · `beverageGuests` · `cakeGuests` | `barplanner.js:255` · `events.js:1717` · `:1586` | counts she set |
| `checkedBuffetItems` · `checkedHealthItems` · `checkedBeverageItems` · `checkedCakeItems` · `checkedFingerItems` | `buffet.js:278` · `health.js:594` · `events.js:1829` · `:1860` · `:1897` | **items she ticked off in a shop.** Re-ticking a list she already walked is the same theft as clearing a plan. |

---

## 🧱 10 · STRUCTURE & CONTENT RULINGS

- 🔧 **Engine** = MF142 — add the field + one shared renderer, wire into every recipe page. ⚖️ **Law 52.**

- ✍️ **Authoring** = a Fable-scale pass to tag holders and reword any *"make N tins"* prose to per-unit. Worklist starts with the oven-dish family (census in `reference/`).

- ✅ **Proven — MF144 Phase A (Code, 24 Jul):** four **family-meal** openers — `bakesRecipeOpts` (core.js) · `recipeDetailFromResult` (meals.js) · `wkRecipeOpts` (worldkitchen.js) · `healthRecipeOpts` (health.js) — route through **one shared `softDefaultN` helper**, not a copy per renderer (the copy-per-renderer trap was MF138). Gate passed 3/3 — bakes · WK `cape-malay-bobotie` · FMF Bobotie all open at 6 (the WK path previously opened at **1** — the whole point). **Non-soft dishes stayed byte-identical** (no note, open at 1). `events` and `kiddies` were **deliberately left off** the helper — they keep their guest/kids seed. ⚖️ **Law 52.**

- 🩸 **The four founding records** (all bare, all correct): `braai:periperibraai` · `events:periperi` · `events:tahini` · `world:indian-mango-atchar` — each a per-head copy standing beside a **Spice batch twin** (*500ml bottle* · *375ml jar* ×2). **Same name, different construction — the Apple Tart shape again.** Spice bottles it; Events scales it to the guest count.

- 📁 **Path corrected:** the tool lives at the **repo root** beside `tinza-census.js` / `tinza-doctor.js`, not in `Tools/`. The doctor's `require` was pointing at `./Tools/` and would have red-flagged a module that was there all along.

---

## 🚨 11 · LAUNCH BLOCKERS *(top of October)*

- 🩸 **THE MEASUREMENT, Budget pool at HEAD** *(mealRole:'main', no braai, priced — 670 meals)*:

  | per person | meals | SA-reachable |
  |---|---|---|
  | **R0–R10** | 21 | **3 — 14%** |
  | R10–R15 | 51 | 20 — 39% |
  | R15–R25 | 130 | 46 — 35% |
  | R25–R50 | 366 | 127 — 35% |

  **THE POOREST BAND IS THE LEAST SOUTH AFRICAN.** At R8 a head she is served Waakye · Idiyappam · Farinata · Ful Medames · Bissara · Misal Pav. **Good food, every one — and the wrong answer to the question she asked.**

🩸 **THAT THIRD CLAUSE IS THE TEST FOR WHETHER THIS LANDED.** After MF131: **census 17 · doctor 9, unmoved — the ONLY change is `unresolved` 2 → 0.** *Any other number that moves means a record silently changed course, and that is a bug, not a bonus.* ⚖️ **Law 51.**

#### 🩸 THE THEME BUG THIS RULING NEARLY SHIPPED — **Law 20, in our own store**
`migrate()` **silently dropped her saved theme.** `_read()` returned `{root, legacyTheme}` but the wrapper matched on the storage-shaped `{tinza, tinzaTheme}` — so it fell through, treated the whole wrapper as the root, and **threw the legacy value away.** Green on "migration ran"; her setting gone.
✅ **Census check 13 now asserts the VALUE ARRIVES** (`'dark'` lands in `preferences.theme`), not merely that migration completed. ⚖️ **Law 20 — a metric that passes while the thing it measures is broken is worse than no metric.**
*(⚠️ **Tinza has NO theme toggle yet** — so no user can have set `tinozaTheme` through the app. The migration is correct INSURANCE for the day the toggle ships. **Open thread: what are the 2 `tinzaTheme` sites reading, if nothing writes it?** Worth a look — not a blocker.)*

**Census checks added (`tinza-census.js`):** 1 no `localStorage` outside `tinzaStore.js` · 2 root `tinza` + `schemaVersion===1` after `load()` · 3 `migrate(migrate(x))===migrate(x)` idempotent · 4 legacy `tinzaTheme` count `===0` post-migration · 5 favourites keyed by `source:section:id`, never a bare title · 6 `isFavourite()` on one of a genuine collision pair does NOT report the other.

---

- 🛡️ **THE RATCHET (census check 16, Law 42).** Build fails if any section loses its room word, a cross-room pair ever reads the same, a lone dish gets glossed, or `()` renders. The hole cannot come back silently.

- 🩸 **MEASURED AT HEAD — BRAAI IS AN OUTLIER OF ONE.** `sectionHeader()` accepts two shapes and five rooms pass one. Four (`events` · `meals` · `worldkitchen` · `core`) pass `oninput:"liveSearch(...)"`. **Only `braai.js:28` passes `onclick:` — which sets `S.screen='search_results'` and calls `draw()`.** Same pill, same place on the header, two different behaviours. That is the drift, and it is one line wide.

- 🩸 **THE DOCTOR IS DOUBLE-COUNTING — REDS #2 AND #7 ARE THE SAME ELEMENT.** Measured 25 Jul: all four "text inputs under 16px" that live in a room (`budget.js:84` · `furry.js:17` · `health.js:999` · `kiddies.js:109`) **are** the four "hand-rolled search inputs". One element, two reds. `sectionHeader()`'s slot is already `font-size:16px`, so migrating the four closes red #7 **and 4 of the 6 hits in red #2** — leaving only `utils.js:251` and `meals.js:15801`. ⚖️ **The sameness pass is worth FOUR of the ten reds, not three.** Count elements, not findings.

- 🧮 **THE REMAINING PILE IS SMALL AND COUNTED.** 6 rooms off the shared header · 20 header sites total (`spice` 4 · `health` 6 · `furry` 1 · `budget` 1 · `tinyTummies` 8 · `barplanner` 1 — *corrected 25 Jul: its header is hand-rolled inline at `:214`, not absent*) · 24 hard-coded `#f5e8cc` ink calls, **15 of them in `tinyTummies` alone**. Tiny Tummies is over half the job; do it last and alone.

- 🩸 **MEASURED AT HEAD, 25 Jul — WHAT THE "MISSING HEADER" ACTUALLY WAS.** `barplanner.js:214` builds a 170px block inline with `🍸`, a Fraunces title and a subtitle, over `#1a1208`/`#0f0e0c`/`#e0d4b8` — **pre-reskin dark, hard-coded**. The doctor reported *no `<h1>`* and the brief read that as *no header*. It was never missing. It was **unmigrated**, and it rendered its own private palette on top of a warm-light app. ⚖️ **Law 19 — a grep miss is not a measurement.** *An absent `<h1>` means the tag is absent, not that the header is.*

- ⛔ **AND IT LEAKED THE OLD PRICE.** The non-Pro upsell in `barPlannerHTML()` still pitched **"for R50/mo"** — live, to every non-Pro visitor, on the one screen whose whole job is to sell the feature. ⚖️ Same shape as the `tierBar` leak: silent, no error, found only by opening the file. **The R50→R90 sweep becomes a census assertion, not a memory item** — a stale price must go RED, not wait to be noticed.

- 🩸 **THE BILL, ALREADY PAID.** Peri-Peri existed three times and the copies **DRIFTED** — three constructions, one with a vessel and two without, one costed per-head and one per-batch. That cost a full session to diagnose. Three copies means every ruling costs **3×**: the WOW pass, the R50→R90 sweep, allergen tokens and locale swaps must each find every copy or the rooms quietly disagree.

---

## 🏷️ 13 · BRAND NAMES — **GENERIC IS STORED, THE BRAND IS RENDERED** — **RULED 20 Jul 2026**

- 💰 **COSTING IS UNAFFECTED — MEASURED, NOT ASSUMED.** `priceClean()` (core.js:1169) already strips parentheses before lookup: `.replace(/\([^)]*\)/g,' ')`. So `Coconut Biscuits (Tennis)` resolves to `coconut biscuits` either way. **The engine already wants generic-first.**

### 📋 THE MEASURED WORK (9 real cases app-wide — small and fixable)
- **Rename to canonical:** `tennis biscuits` ×5 → *coconut biscuits* · `Romany Creams` ×1 → *chocolate coconut sandwich biscuits* · `Bar One` ×1 → *chocolate caramel nougat bar* · `Aromat` ×1 → *savoury seasoning salt*.
- ⚠️ **PRICE FLATTENING — A REAL CONSEQUENCE, NOT COSMETIC.** PRICE_DB holds `tennis biscuits: 115`, `coconut biscuits: 90`, `marie biscuits: 90`. Because the bracket is stripped, renaming moves those five recipes from **R115/kg to R90/kg**. *Accepted deliberately: the generic is the substitutable thing — buy the cheaper packet, pay the cheaper price.*
- 💸 **THREE PRICES ARE MISSING ENTIRELY.** No `amarula`, `kahlua` or `cointreau` key exists, so every liqueur line currently costs **R0**. Needed before Dom Pedro, Amarula Affogato or Strawberries Romanoff can be costed. ⚖️ **Law 11 — Tina sources the prices.**
- ❌ **FALSE POSITIVES — DO NOT TOUCH.** *Ouma se Soetpampoen* (Afrikaans for grandmother, not the rusk brand) · *Tex-Mex* (not the chocolate bar) · *Crunchies* in bakes (the oat traybake, a generic SA dish name).

---

---

## 🧂 14 · NO FLAVOUR POWDERS — **BUILD FLAVOUR FROM INGREDIENTS** — **RULED 20 Jul 2026**

- 📏 **MEASURED, 20 Jul (`92105af`) — the cross-link is buildable TODAY:**
  - **9 homemade stocks already exist in the Spice Room:** Beef · Chicken · Vegetable · Fish Stock, plus Chicken · Beef · Fish · Lamb · Pork Bone Broth.
  - **188 recipes call for stock** (world 93 · meals 49 · events 17 · health 15 · furry 7 · tiny 4 · braai 3).
  - **The ruling connects two things that already exist** — and lifts the Spice stocks out of the `CONDIMENT` slot where nothing surfaces them.
  - **MSG / Aromat appears in exactly ONE recipe** (`Umbhona`). That is the entire cleanup.

---

## 🍽️ 15 · A VERSION IS A FULL RECIPE — AND THE PLAN HOLDS THE VERSION — **RULED 21 Jul 2026**

- 📏 **MEASURED 21 Jul on live, all six:** Classic 560 kcal · R266 / R38pp — Quick 510 · R238 / R34 — Budget 480 · R182 / R26 — Lentil 430 · R168 / R24 — Pumpkin 540 · R287 / R41 — 1600s lamb 540 · R329 / R47.

- ✅ **THE COST ORDERING IS ITSELF A CORRECTNESS CHECK — AND IT PASSED.** Lentil cheapest · lamb dearest · Budget under Classic · Quick under Classic *(no raisins, no almonds, 10 g less mince)* · Pumpkin over Classic *(+200 g pp)*. **Every number moved the direction its own ingredient list dictates.** ⚖️ **Law 22 — the render is the measurement.**
  🔢 **Doctor candidate (⚖️ Law 42):** a version's `costPP` must move with **its own** ingredient list, never with the record's.

- 🚨 **VERSION COUNT TODAY MEASURES AUTHORING PROGRESS, NOT FAME.** Measured 21 Jul: **only 88 of 733 budget-pool meals carry versions — 12%.** Library-wide **203 of 2,083 — 10%.** Rank on "has versions" and **the sort becomes a map of how far the authoring sweep got.**

- 🩸 **§15.2's OWN RUNG-5 EXAMPLES DISPROVE IT:**

  | rung-5 dish | records | with versions | **bare** |
  |---|---|---|---|
  | curry | 33 | 4 | **29** |
  | bobotie | 2 | 1 | **1** |
  | bolognese | 2 | 2 | 0 |

  **Twenty-nine curries would sink below an authored rung-2 dish** that happened to get written first. **Exactly backwards.**

- ❌ **FAME IS NOT STORED ANYWHERE.** Measured: no `fame`, `rung`, `tier` or `rank` field exists on any record. §15.2 defines the **test** and nothing carries the **answer.**

- 🩸 **THE EVIDENCE, MEASURED AT HEAD — BOBOTIE:**

  | | costPP |
  |---|---|
  | **record** | **R34** ← *the only price Budget can see* |
  | Classic | R38 |
  | **Budget** | **R26** — *exists, priced, unreachable* |
  | Quick | R34 |
  | **Lentil** | **R24** — *cheaper still* |

  Ask Budget for **R26 a head and Bobotie does not appear.** The Budget Bobotie was authored, priced, and **the query has never once looked at it.**

- 🧮 **THE HONEST GAIN — IT IS IN THE MIDDLE, NOT AT THE BOTTOM:**

  | per person | now | by version | gain |
  |---|---|---|---|
  | R8 | 7 | 7 | **+0** |
  | R15 | 64 | 66 | +2 |
  | R25 | 187 | **221** | **+34** |
  | R30 | 284 | **329** | **+45** |
  | R40 | 441 | 476 | +35 |

  ⚠️ **THIS DOES NOT RESCUE THE R8pp SHOPPER.** Budget versions are *"a little more per person and meat comes back"* food, not floor food. **The locale nudge is what serves the bottom band; this serves R25–R40.** Do not let one be sold as the other.

- 💸 **THE SCALE OF WHAT IS HIDDEN — measured 21 Jul, budget pool:** of **88 meals carrying priced versions, 85 are cheaper via a version.** **69 hide a discount of ≥25%.** **12 hide more than half.**

  | hidden | record → version | dish |
  |---|---|---|
  | **71%** | R52 → R15 | Crispy Fish Cakes |
  | **71%** | R48 → R14 | **Cape Town Gatsby** |
  | **67%** | R48 → R16 | **Lamb Sosaties** |
  | 58% | R38 → R16 | Crunchy Chicken Schnitzel |
  | 55% | R40 → R18 | **Durban Bunny Chow** |
  | 51% | R59 → R29 | **Spaghetti Bolognese** |

  🚨 **SPAG BOL IS THE CLEAREST CASE:** record **R59**, Budget **R31**, Quick **R29**. A shopper with R31pp **cannot reach it at all**, while the R31 version sits inside the record she was refused.

- 🩸 **THE DATA IS REAL AND IT IS BINNED:** **92 raw WK records carry versions — 213 version records in total. ZERO survive `allRecipes()`.**
  *Feijoada raw:* `[{name:"Classic",default:true},{name:"de Feijão Branco (White-Bean)"}]` → *via the index:* `[]`.

- 📏 **WHERE FABLE ACTUALLY GOT TO** — measured from the raw arrays, the only honest source:

  | country | versioned | of |
  |---|---|---|
  | **Greece** | **54** | **54** ✅ complete |
  | **Portugal** | **33** | 52 ⏸ stopped 19 short |
  | Austria | 4 | 27 |
  | Cape Malay | 1 | 21 |

- 🧭 **THE LESSON ABOUT MEASURING:** three separate wrong answers were given about `worldkitchen.js` in one session — the country count, whether versions render, and whether versions exist — **every one of them from reading the ADAPTER'S OUTPUT and calling it the data.** ⚖️ **Law 36, sharpened: measure the SOURCE, and name which layer you measured.**

- ✅ **CENSUS CHECK CANDIDATE:** *no adapter branch may hard-code a reserved field to `null`.* Assert against `versions` and `costPP` in `index.js`; prove it by restoring either null.

---

## 🔐 17 · DEV MODE IS A STORED FLAG ON TINA'S DEVICE, NEVER A URL — **RULED 21 Jul 2026**

### 🩸 17.1 · WHAT THE MEASUREMENT FOUND — read at HEAD, 21 Jul

- 🔍 **`?dev` GATES TWO THINGS, BOTH DIAGNOSTIC. NEITHER IS WORTH MONEY.**
  1. `core.js:579` — the render-error boundary prints the real message + first stack line on screen *(MF44 · ⚖️ Law 19 — the tablet has no console)*.
  2. `index.js:454` — a `console.info` of World-Kitchen costPP-skipped coverage.
  **A stranger who guesses `?dev` gets an error message he did not want. That is the whole exposure.**
- 💀 **THE ACTUAL OPEN DOOR: `tierBar`.** Built `core.js:526`, rendered `core.js:621` as `root.innerHTML = tierBar + _body + bottomBarHTML()` — **unconditional, every screen, every visitor.** The 👑 Pro button sets `USER_TIER='pro'`, and `tierAllows('pro')` then opens cost · My Plan · shopping list · the whole nutrition grid · dietary filters · favourites.
- 🩸 **THIS IS THE SAME SHAPE OF BUG AS `tierAllows(){ return true; }`** — the one already recorded at `core.js:693` as *"All features unlocked."* **We closed the function and left the switch next to it.** ⚖️ **Law 20 — the fix that fixes one half.**
- 📊 **SCALE: the chef leaked $2.02 of lifetime spend. The tier bar leaks the entire R90 product.** The smaller hole was found first because it had a bill attached; **this one is silent, which is exactly why it survived.**
- ✅ **CONFIRMED ON LIVE, 21 Jul 13:00 — `tinza.netlify.app` with NOTHING after it.** The strip renders. ⚖️ **Law 2 — Tina's eyes closed it.** *(The first eleven screenshots were all taken on `/?dev` and could not settle it either way; the clean-URL shot is the one that counts. Noted because "I looked and it was there" is not evidence until the URL is checked.)*

---

## 🔒 20 · INVARIANT, NOT FEATURE — **RULED 21 Jul 2026**

**Filed as CENSUS CHECK 25** — `allRecipes() === 2083` · every section count > 0. Prove it by re-introducing the fault: an adapter that throws must go **RED**.

---

## 😴 21 · MOOD — WHAT **"JUST FEED ME"** IS — **MERGED INTO ROOT 24 Jul 2026**

- 🩸 **MEASURED — THE GATE ALREADY EXISTS AND `healthy` IS THE ONE MOOD THAT SKIPS IT.** `core.js:2270` allows six slots *(`SUPPER · LUNCH · BREAKFAST · SIDE · STARTER · TREAT`)*, but `core.js:2291` defines `_MOOD_MEALSLOT = ['SUPPER','LUNCH','BREAKFAST']` and **five moods already use it** — `exhausted` · `quick` · `pickmeup` · `lazy` · `impress`. `healthy` *(core.js:2293)* checks diet and **nothing else**, so `SIDE` and `STARTER` walk through.

---

## 🔙 24 · THE TWO BACKS — **RULED 25 Jul 2026** *(Tina, on live, in World Kitchen)*

### 🐛 WHAT WAS ACTUALLY BROKEN *(measured at HEAD, 25 Jul)*

1. **`worldkitchen.js:308`** — the country header said `← World Kitchen` and cleared `wkScreen` + `wkDataCountry` but **not `wkContinent`/`wkRegion`**, so it re-rendered the *region list*. **The label was not lying on purpose. It was two keys short.**
2. **`worldkitchen.js:190`** — **ONE header serves both the continent grid and the region list** *(the drill happens in the content area, so the header never learns she went deeper)*. It read `← Home` on both and **walked out of the room from both.** Now it asks its own depth.
3. **`navSignature()` — the real one.** ⬇️

- 🕳️ **ELEVEN blind keys across FIVE rooms:** `wkContinent` `wkRegion` `wkDataCountry` `wkDataTab` `wkCourseTab` *(WK)* · `healthGroupTab` *(Health)* · `mealPlanView` *(FMF)* · `catSection` `dogSection` *(Tiny Tummies)* · `barMode` *(Bar Planner)*.

- ✅ **TEN ADDED. THE SAME SYMPTOM IN FIVE ROOMS HAD ONE CAUSE.**

- 📋 **FOUR DEAD KEYS LEFT IN ON PURPOSE** *(`wkCourseTab` `wkTab` `kiddiesView` `healthTab`)* — always empty, so they cost nothing, and **deleting keys on a tool's say-so is how a live key gets buried.** Reported, not removed.

- ✔️ **Proven RED** by removing `wkContinent`/`wkRegion` — the original bug, reproduced on demand.

- ⚖️ **THE TWO SIDES USE DELIBERATELY DIFFERENT EVIDENCE.** Blind spots test **strictly** (`S.key` only) or the delta verbs `addStep`/`swapStep` sweep in and it cries wolf. Dead keys test **leniently** (`S.key` **or** `key:`) or three live keys written only as `set({wkSACulture:…})` get **buried alive**. *Each side errs the safe way.*

- 🩸 **THE INSTRUMENT LIED TWICE BEFORE IT TOLD THE TRUTH.** First it scanned `core.js` and **counted `navSignature()`'s own reflection** — clean bill, nine false deaths. Then, once comments were in, it read **the prose naming a key dead** and **re-animated it off my own sentence.** ⚖️ **Law 19 — a measurement that includes the measurer is not a measurement.** Comments are now stripped before scanning.

- 🩸 **IT WAS ALSO BROKEN:** `S.cookRecipe` was in no signature either, so Back fell through to step (4) and **dumped her on Home from mid-cook.**

- 📋 **CENSUS 8 RUNG ⑥ — BORN RED ON PURPOSE:** **14 header Backs are labelled just `← Back`** *(events ×6, spice ×2, health ×2, kiddies ×2, meals, core)* and **name no destination.** The **bottom** Back may be anonymous — it always means one level. A **header** Back is a jump and must say where. ⚖️ **Law 22 — a RISK LIST, not a same-session fix.**

- 🩸 **THE INSTRUMENT LIED A THIRD TIME.** The `goBack()` matcher used a **fixed 2400-character window**; the §24.1 comment pushed the function past it, the matcher stopped reading before the call it was looking for, and it reported the *already-fixed* search bug as unfixed. ⚖️ **Law 19 — an instrument with an arbitrary limit measures the limit, not the code.** Now matched to the closing brace.

- 🩸 **MEASURED ON KIDDIES: FOUR WAYS OUT OF ONE SCREEN** — the header's Back, the strip's `← Events`, the strip's `🏠 Home`, and the spine's Home. On kiddies the strip rendered **ABOVE the photo header**, so the first thing on the screen was a duplicate of the second thing.

- ✅ **DELETED, NOT DEPRECATED** — the definition (`events.js:53`) and all three call sites (`buffet.js:94`, `buffet.js:140`, `kiddies.js:46`) are gone.

- ✅ **KIDDIES NEEDED NOTHING** — all four `kidsHeader()` call sites already pass a Back that names its destination (`← Events`, `← 12 Themes`, `← <theme>`). Measured before cutting.

- 📋 **CENSUS 8 RUNG ⑦ — `No screen hand-rolls its own room-nav pair`.** Proven by re-introducing the call in `kiddies.js` → **RED at 1**, then restoring → GREEN. ⚖️ **A rung that cannot fail is not a rung.** The rung **strips comments before matching** — the §24.3 comment block names `eventsTopNav()` three times, and *(Law 19, learned the same day)* **prose is not evidence.**

- 🚦 **STEPS 2–4 ARE NOT THIS SESSION** *(one per session, her eyes between each)*: ② `sectionHeader() sub:true` · ③ collapse buffet's seven headers · ④ the 14 anonymous `← Back` labels.

- 🩸 **THE BUG, MEASURED:** `worldkitchen.js:140` built the open call from **`r.country`**, so tapping Bobotie on the Boerekos shelf ran `wkOpenRecipe('Cape Malay')` — and that setter's own comment reads *"so Back lands on this country's list."* **The door re-labelled itself behind her**, and both Backs were then honestly returning her to a shelf she had never walked through. `RECIPE_BUILDERS.world` repeated it, feeding `item.country` into the Back label.

- ✅ **THE CODE WAS ALREADY SHAPED FOR THIS RULING** — `wkRecipeOpts` keeps `backLabel:'← '+country` *(the door)* and `meta:{origin:r.country}` *(the truth)* in two separate slots. Only the wrong value was being handed to the door slot. **Nothing was redesigned; one argument was corrected in three places.**

- 📋 **CENSUS 8 RUNG ⑧ — four assertions**, proven by re-introducing **both** failure shapes *(the `r.country` open → RED · a bare `.map` → RED)*, then restoring → GREEN.

- 🩸 **THE BUG:** `core.js`'s leave-World-Kitchen reset cleared **`wkScreen` · `wkDataCountry` · `wkDataRecipe`** — and stopped. **`wkContinent` and `wkRegion` survived the exit**, so walking out of Boerekos and back in from Home re-opened Southern Africa. Nothing threw; the room simply remembered.

- 🩸 **THE SAME TWO KEYS AS THE §24 HEADER BUG, THE SAME EVENING** *(worldkitchen.js:308 — "the label wasn't lying, it was TWO KEYS SHORT")*. Twice in one night, in two unrelated functions. **`wkContinent` and `wkRegion` are the two keys everybody forgets** — which is exactly why the list stops being remembered and becomes a function.

- 📊 **MEASURED BEFORE CUTTING — five hand-rolled resets, FOUR of them short:** `core.js:599` *(3/5, missing wkContinent + wkRegion)* · the three tier-switcher buttons `core.js:610–612` *(4/5, each missing wkDataRecipe)* · and `worldkitchen.js:321` *(5/5 — the only complete one, and it was written the session before as the §24 fix)*.

- 📋 **CENSUS 8 RUNG ⑨ — two assertions, all three failure shapes proven RED then GREEN:** her exact bug *(drop wkContinent + wkRegion → **RED, naming both**)* · the door renamed → **RED at 0 definitions** · a second definition → **RED at 2**. It ignores any statement nulling fewer than 3 drill keys, so a step-up never cries wolf. ⚖️ **Law 22.**

- 🩸 **THE INSTRUMENT ALMOST SHIPPED BLIND AGAIN.** The door-exists probe was first written `/function wkResetDrill/` — which **still matches `wkResetDrillX`**, so renaming the door passed GREEN. Worse, every caller is guarded by `typeof`, so a renamed door **fails silently and falls back**. Now matched to the whole name plus its paren, and counted. ⚖️ **Law 19 — a rung that cannot fail is not a rung, and I proved it by trying to break it.**

- 🔧 **TWO CALL SITES ONLY** — `meals.js:16480` and `core.js:2523` change from `setQuiet({key:null})` to the consuming close.

- 📋 **RUNG OWED — `No key appears in both lists`. Born RED at 2.**

- 🔴 **PROVEN ON LIVE — TINA, 26 Jul, phone + tablet** *(⚖️ Law 2 — her fingers closed it)*. **Sides & Basics: "it loops chips and the recipe, chips and the recipe"** — and the same with **Gnocchi**. **The bottom-left Back CAN get out; the phone Back cannot.** That split is the proof, and it sharpened the trace:
  - open Chips → history gets a **recipe** entry
  - bottom-left Back → nulls the key → redraw → pushes a **list** entry *(she is out — this is why the in-app Back works)*
  - so every open-and-close cycle leaves the stack `list · recipe · list · recipe · list…`
  - the phone Back walks **down that whole stack**, replaying the session alternately
  ⚖️ **THE IN-APP BACK ESCAPES BY MAKING THE MESS THE PHONE BACK THEN WALKS THROUGH.**

- ✅ **THE QUESTION I EXPECTED TO ASK HER, MEASURED INSTEAD.** *Is the FIRST pill tap a level or a lateral?* `meals.js:15395` reads `activeCat = cats.find(c=>c.id===S.mealCat) ? S.mealCat : cats[0].id` — **a pill is ALWAYS selected**, falling back to the first. There is no unfiltered state behind the pills, so **nothing is lost by replacing**. The first tap is a lateral like any other. ⚖️ **Law 19 — measured, not assumed.**

- 🔴 **PROVEN ON LIVE — TINA, 26 Jul, THREE ROOMS** *(⚖️ Law 2)*. **Oven Bakes & Roasts → phone Back → Homestyle Plates.** **Deep-Fried → phone Back → Breads & Rolls.** **Waffles → Back → Eggs** *(tablet)*. ⚖️ **IT ALWAYS LANDS ON THE FIRST PILL** — because entering the room drew with the default pill *(`cats[0].id`)* and pushed an entry, then her tap pushed a second. **Back walks to the default, not out of the room.** Her words: *"it's been doing this for a while."*

- 🩸 **MY INSTRUMENT CRIED WOLF FIRST, AND I CAUGHT IT BY HAND.** The first probe reported `barMode` dead. It is **live** — `barplanner.js:285` writes it through `chipRow(..., 'barMode')`, a helper that takes the key **as a string**, which no `key:` pattern can see. ⚖️ **Law 19 — every one of the 10 above was then re-checked repo-wide for string-name writes AND for computed writes (`S[k]`), and the only dynamic writers in the app are `goBack`'s clear and `closeRecipe`'s snapshot restore. Both clear; neither sets.**

- 📋 **RUNG OWED:** no `sectionHeader()` ships a hand-rolled multi-key back-jump — every header `backJs` that clears ≥2 nav keys must route through `topBack()`. Born RED at the current hand-rolled count, proven by re-introducing one.

- 📋 **RUNG OWED:** no push path may land at a non-zero scroll. Born RED against the current tree.

- 🩸 **Confirmed on live by Tina, 27 Jul:** Finger Foods (Meaty list → Back → **Events**) and Supper (Oven Bakes → Back → **out of the room**). Both correct.

- 🩸 **HER FIND, 6 Aug:** from the Just Feed Me main screen, Back took **two presses** to reach the
  main menu — *"one press does nothing visible."* Measured: the mood picker and the mood shelf were
  **two history entries whose renders were byte-identical, 7436 chars each.**

---

## 🏺 29 · A STAPLE THAT IS ALSO AN INGREDIENT — **RULED 29 Jul 2026 (Tina)**

⚠️ **The original 29.3 recorded "MEASURED CLEAN — all 6 records with a plain dashi base line ... all
7 forks swap explicitly." That measurement is superseded.** Re-run mechanically against
`wk_japan.js` at **20 records** on 29 Jul, it does not hold. The word doing the damage was
**"explicitly"**. Corrected finding:

---

## 🌍 33 · **A SOUTH AFRICAN WORD IS EXPLAINED, NEVER TRANSLATED AWAY** — **RULED 31 Jul 2026 (Tina)**

### §33.2 WHAT WAS ALREADY RIGHT — MEASURED 31 JUL, NOT ASSUMED

`wk_southafrica.js` = **131 records · 131 carry an English `nameAlt` · 112 carry `aliases[]`.**
Many names already gloss inline: `Melktert (Milk Tart)` · `Potjiekos (Three-Legged-Pot Stew)`.
✅ **The card level was never the problem.** A foreign reader opening a card already gets
*Golden Spiced Mince Bake* under **Bobotie**.

### §33.4 ✅ THE WATCHER — `tinza-echo.js` RUNG 6 (built the same day)

`node tinza-echo.js [country] [batch.js]`, and inside `/all`. Three states, no judgement:
- ✅ **GLOSSED** — explanation follows the term · or the card **is** that dish (`name` / `nameAlt` / `aliases`)
- 🟡 **LINK-ONLY** — a `crossLink` reaches it. Allowed, but flagged: it is a tap away, **not on the recipe she opened.** *(Currently 0.)*
- 🔴 **BARE** — nothing resolves it. **The fault.**

⛔ **`sambal` IS DELIBERATELY NOT ON THE SA LIST.** It reads Cape Malay and it is also Indonesian —
and in this corpus it is Indonesian on **34 of 34** cards. Listing it as "an SA term" would put a
**wrong reason beside a real finding**, which teaches a reader to distrust the whole rung.
⚖️ Untranslated *non-SA* loanwords are a different list and need their own ruling.

### §33.6 ✅ THE SWEEP — DONE 31 JUL 2026, BOTH HALVES

**LOCALE: 149 records · 167 hits → 0.** 223 replacements over two passes.
- **Pass 1 — spelling only** (`flavour` ·`colour` · `favourite` · `savoury` · `caramelise` · `litre` · `fibre`):
  168 replacements. ✅ **Price resolution diffed before and after: ZERO movement.**
- **Pass 2 — produce names** (`brinjal` · `baby marrow` · `spring onion` · `coriander`): 55 replacements.
  ✅ **13 lines changed key NAME only, at identical price** — eggplant R43 → brinjal R43, zucchini →
  baby marrow R50. **8,812 ingredient lines · 285 ABSENT, unchanged. 0 dead crossLinks.**
- 🔑 **`aliases` WERE MASKED AND SURVIVED UNTOUCHED, DELIBERATELY.** `Scallion Oil Noodles` became
  `Spring Onion Oil Noodles` but kept *"Shanghai Scallion Noodles"* in its aliases. ⚖️ **An alias
  carrying the US word is not drift — it is how a reader in Ohio FINDS the card**, which is the whole
  point of this ruling. **Never strip a US alias.**
- ⛔ **`molasses` → `treacle` WAS PULLED FROM THE LIST BEFORE IT RAN.** Molasses is ordinary SA
  English, and `greece-koulouri` says **grape molasses** — petimezi, a distinct Greek product.
  Renaming it would have been a **potato bobotie** (⚖️ Law 43). **A locale list carries SPELLING and
  PRODUCE names only. It never renames a different product.**

**GLOSS: 68 → 4.** 59 glosses inserted across `wk_southafrica.js`, `wk_japan.js`, `wk_europe.js`.

🩸 **TWO DEFECTS CAUGHT BY READING THE OUTPUT BEFORE APPLYING IT — neither was mechanical:**
1. **NESTED GLOSSES.** The first pass produced `Steamed bread (ujeqe (steamed bread))` and
   `Umngqusho (samp (cracked, hulled maize kernels) and beans)`, because **the gloss text itself
   contained SA terms** and the glosser then glossed inside its own output.
   ✅ **RULE: A GLOSS MUST BE PLAIN ENGLISH ONLY AND MAY NOT CONTAIN A GLOSSABLE TERM.** Asserted
   mechanically before the sweep ran, and a nested-bracket scan over the whole corpus returns **0**.
2. **THE REVERSE GLOSS WAS INVISIBLE TO THE RUNG.** `wild greens (imifino)` is perfectly resolvable,
   and the watcher flagged it as bare. **The planner that wrote the sweep already understood the
   pattern; the watcher did not.** ⚖️ **A watcher dumber than the tool doing the work teaches its
   reader to ignore it.** Backported, born-RED proof added.

---

## ⚖️ 34 · **AN OIL WITH A TASTE IS AN INGREDIENT, NOT A SOLVENT** — **RULED 31 Jul 2026 (Tina)**

✅ **DONE 31 Jul:** `"peanut oil": 200` added to `prices.js` (Tina-sourced: R99.99/500ml → R200/L;
the 250ml pack runs R74–84 = R296–336/L, so the 500ml is the sensible route). Alias
**`groundnut oil` → `peanut oil`** added to both maps, since groundnut is the ordinary SA name.
⚠️ **Labelled in `prices.js` as a RULED A7 EXCEPTION** — the second one taken, after `chilli oil`.
It qualifies because **§29.5: A7 defers MISSING prices, never WRONG ones**, and this was wrong and shipping.
✅ **REGRESSION MEASURED:** `peanuts` R128, `peanut`, `ground peanuts` and `sunflower oil` R48 all
unchanged; china 76✅ · japan 136✅/3🔴 · indonesia 126✅ · thailand 12✅ — **identical before and after.**

### §34.4 · ✅ ALREADY CORRECT, RECORDED SO IT IS NOT RE-SOURCED
> **Tina:** *"Coconut oil is a real product, like coconut milk, and they make use of those 2 a lot
> in eastern cooking."*

**Agreed, and it was already right:** `coconut oil` **R80/L** is a real key in `prices.js`, live in
**19 records** (Sri Lanka ×18 + `indonesia-sambal-matah`). ✅ **Nothing to add.** It is exactly the
§34.1 shape — a flavour oil, keyed as itself, never aliased away.

---

---

## ⚖️ 3m · **A `_each` PRICE IS DERIVED, NEVER AUTHORED** — **RULED 4 Aug 2026 (Tina)**

### §3m.1 APPLIED 4 AUG 2026

| key | derivation | was |
|---|---|---|
| `chilli_each` | fresh common chilli 15–25g → **25g × `chilli` R80/kg = R2.00** | R1, typed |
| `birds eye chilli_each` *(new)* | fresh bird's eye 2–3g → **3g × `birds eye chillies` R100/kg = R0.30** | — |

⛔ **A BIRD'S EYE MAY NOT SHARE `chilli_each`.** It is roughly an **eighth** the weight of a
standard chilli, so one shared count price over-charges it eightfold. Weight is the discriminator,
which is exactly what §3m forces into the comment.

⚠️ **THE NEW KEY HAD A MEASURED RADIUS OF ZERO AND WAS KEYED ANYWAY.** Every card in the corpus
writes the **plural** "birds eye chillies", which hits the weight key `birds eye chillies` R100
at the exact rung and never reaches the new one. **That is recorded rather than hidden:** a key
that fires on nothing today is pre-emptive, not load-bearing, and nobody should read its presence
as evidence that bird's-eye count lines are handled.

---

## ⚖️ 3n · **RETAIL TIER BEATS BAND WIDTH** — **RULED 7 Aug 2026 (Tina)**

### §3n.3 APPLIED 7 Aug 2026

| key | tier finding | result |
|---|---|---|
| `banana blossom` **R173** | Arm 2 — ordinary retail stocks none, Asian-grocer tin | specialty tier stands |
| `papaya` **R46** (+ `green papaya`, `pawpaw`) | Arm 1 — ordinary retail stocks it | health-store tier excluded, then §3l → R46 |
| `rice vinegar` **R120** | Arm 1 — retrospective, key unchanged | 200ml specialty excluded, then §3l → R120 |
| `kingklip` **R450** | R170 and R450 are the SAME tier | §3n does not bite; §3l → R450 |

⚠️ **`mung beans` WAS BRIEFED UNDER THIS RULING AT R55 AND WAS NOT WRITTEN.** The key stands at
**R90**. Its recorded 3 Aug band is R40–R90/kg with **no specialty tier in it**, so there was
nothing for §3n to exclude, and §3l over what is actually recorded gives **R90**. R55 could not
be derived from anything in the repo. ⚖️ **A7 — defer a price, never author one that cannot be
proved.** 🔵 Re-open only if Tina supplies the 7 Aug band behind R55.

---

---

## ⚖️ 3l · **TOP OF BAND** — **RULED 7 Aug 2026 (Tina)**

### §3l.3 KEYS CONFIRMED, NOT MOVED — 7 Aug 2026

`kingklip` **R450** was flagged since 6 Aug as *"if §3l is ever ruled toward a mid, THIS KEY
MOVES FIRST"*, its 2.65x spread being the widest in the file. ✅ **§3l went to the top. The key
does not move. The flag is struck** — in `prices.js` and here — because a flag pointing at a
closed question sends the next session hunting for work that no longer exists.

---

