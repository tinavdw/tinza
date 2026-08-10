# 🧭 TINZA_NAV_RULINGS.md — §24 THE TWO BACKS, IN FULL

> ⛔ **THIS FILE IS NOT `/rule` — BUT IT IS THE ONLY PLACE THE §24 SUB-RULINGS EXIST IN FULL.**
> `TINZA_RULINGS.md` §24 keeps the two-jobs law and an index of all thirteen headlines, and each
> headline IS the ruling. **The reasoning, the mechanism and the prohibitions live here.**
>
> ⚠️ **IF YOU ARE CHANGING NAVIGATION — BACK BUTTONS, HISTORY, PILLS, TABS, LANDING SCROLL,
> `navSignature()`, `LATERAL_KEYS`, `topBack()` — READ THIS FILE FIRST. Not optional.**
>
> Split from `TINZA_RULINGS.md` on 11 Aug 2026. **Nothing was reworded. Nothing was deleted.**
> Where this file and `TINZA_RULINGS.md` disagree — `TINZA_RULINGS.md` is right.

---

## 🔙 24 · THE TWO BACKS — **RULED 25 Jul 2026** *(Tina, on live, in World Kitchen)*

### 🌍 ~~OPTION A — RULED, WORLD KITCHEN INCLUDED~~ **⛔ STRUCK 26 Jul 2026 — superseded by §24.9 (two levels up)**

> ⛔ **STRUCK.** *(kept visible + dated per §2.3 — never silently rewrite a ruling)*
> ~~The top Back goes to the ROOM FRONT DOOR. Everywhere. No room bends the rule.~~
> The 25 Jul cost note stands as the reason it fell: from Boerekos, Cape Malay — its own neighbour — meant re-drilling Africa → Southern Africa, **two extra taps on the likeliest next move**. One day on live was enough: Tina ruled **exactly two levels up** on 26 Jul. The sprint plan carried the new rule from day one; this file lagged it — caught 27 Jul, the §2.2 lag shape again.
> **What SURVIVES from the old §24, unchanged:** the two-jobs split *(top ≠ bottom)* · a top Back must NAME where it goes · on the room's front door it reads `← Home` · Option B's law — **never two buttons doing one job on the same screen** *(§24.9 obeys it: bottom = one up, top = two up, never equal)*.

### 🚨 THE FINDING UNDER THE FINDING — **navSignature() IS A CONTRACT, NOT A LIST**

`draw()` pushes a history entry **only when `navSignature()` changes.** A level the signature cannot see is **a level Back cannot walk** — `goBack()` step (3) finds nothing and falls through to step (4), which dumps her on Home.

- 🩸 **THE SIGNATURE WATCHED `wkCountry` AND `wkSelectedRegion` — WHICH NO ROOM HAS EVER WRITTEN** *(they appear only in the signature itself and the tier-switcher clear-down, which therefore also never reset World Kitchen)* — **while the real drill `wkContinent → wkRegion → wkDataCountry` went completely unseen.**
- ⛔ **NEVER PATCH `goBack()` FOR THIS. ADD THE KEY.** ⚖️ **Law 6.** goBack() step (4) is **correct** — it is the deliberate 3 Jul fix that stops Back walking into an unrelated earlier screen. It only *looked* wrong because the rooms gave it nothing to walk.
- ⏸️ **`S.cookStep` DELIBERATELY NOT ADDED** — Back in cooking mode should **exit the mode**, not walk twelve steps backwards. **Tina's call, still open.** `S.searchPrevScreen` is a **memo, not a level** — it stays out.

### 🩺 CENSUS 8 RUNG ⑤ — **THE WATCHER**

> **Every key a room navigates by must appear in `navSignature()`; every key it watches must be written by some room.**


### 🍳 24.1 · COOKING MODE — **BACK EXITS THE MODE** *(ruled 25 Jul, Tina)*

- ✅ **Cooking mode is not a PLACE. It is a MODE a recipe is put into** — full screen, one step at a time.
- ⛔ **Back does NOT walk the steps backwards.** Twelve steps would cost **twelve presses to leave**, and the twelfth would land on the recipe she was already reading.
- ⚖️ **THIS IS WHY `S.cookStep` STAYS OUT OF `navSignature()`** — no history entries, nothing to walk. `goBack()` step **(0c)** clears `cookRecipe` + `cookStep` and returns her to the recipe.

### 🎉 24.2 · A FRONT DOOR IS A PLACE YOU GO TO, NOT A THING YOU CARRY

**Events, ruled 25 Jul from live.** The five-tile grid *(Big Buffet · Finger Foods · Celebration Cakes · Kiddies · Beverages)* rendered on **every** Events screen; picking a tile only called `eventsScrollToContent()` to **scroll past it**. So scrolling back up to reach the top Back **walked her through all four tabs she had not chosen.**

- ✅ **THE TILE GRID NOW RENDERS ONLY WHEN NO TAB IS OPEN.** Open Finger Foods and you are **in Finger Foods** — nothing else.
- ✅ **THE HEADER NAMES THE TAB** *(title, emoji and tagline all switch)* and its Back reads **`← Events`**, returning to the tile grid. On the grid itself it reads **`← Home`**. ⚖️ **§24.**
- ✅ **THE GUEST BAR STAYS VISIBLE INSIDE EVERY TAB** — it is the **ONE Events guest count** (§2.2) and it drives every portion on screen.
- ⚖️ **THE COST, SAME AS WORLD KITCHEN AND ACCEPTED THE SAME WAY:** Finger Foods → Cakes is **Back to Events, then Cakes** — two taps. **A rule that bends per room is not a rule.**

### 🧭 24.3 · ONE SCREEN, ONE TOP BACK — **`eventsTopNav()` IS DELETED** *(ruled + built 25 Jul)*

**EVENTS SAMENESS, STEP 1 OF 4.** `eventsTopNav()` hand-rolled a **`← Events / 🏠 Home` PAIR** and three screens rendered it **on top of a `sectionHeader()` that already carried a Back, on a spine that already carried Home.**

- ⚖️ **THIS IS THE §24 TEST, APPLIED:** two Backs are allowed **only when they do two different jobs** — bottom = one level, top = the room front door. `eventsTopNav()`'s `← Events` did **the same job as the header's Back**, and its `🏠 Home` did the same job as the spine. **A second answer to a question that already has one is not a shortcut, it is a contradiction.**
- ⚠️ **THE CATCH THAT MADE A BARE DELETION WRONG:** `buffet.js:136` was labelled **`← Home`**. Buffet **bypasses the Events tab wrapper** and renders its own header, so the *only* route from Buffet back to Events was the strip. Deleting the strip alone would have **stranded Buffet inside Events with no way back to it.** The header now carries the job: **`← Events`**, using `eventsTopNav()`'s own unchanged payload. ⚖️ **A helper is only safe to delete once its JOB has a new home.**
- ⛔ **DO NOT REBUILD IT.** If a screen cannot reach its room, give that screen's `sectionHeader()` the right `backJs`/`backLabel`. **Never bolt a strip above the photo.** ⚖️ **Law 6.**
### 🚪 24.4 · THE DOOR IS NOT THE ORIGIN — **RULED 25 Jul 2026** *(Tina, on live, in Boerekos)*

**Her words:** *"I went into Boerekos Bobotie, and on that photo the top back said Cape Malay. If I clicked on the recipe to open it, and after it opened I clicked bottom back, I landed in Bobotie Cape Malay."*

A dish can sit on **more than one shelf**. Bobotie's country is **Cape Malay**; it is *also* carried on **Boerekos**, along with Yellow Rice, Tamatie Bredie, Melktert and Hertzoggie — five deliberate dual-culture records. *(Boerekos = 50 own + 5 shared = the 55 on her screen.)*

- ✅ **THE DOOR SHE WALKED THROUGH OWNS THE BACK.** Enter Bobotie from Boerekos → the top Back reads **`← Boerekos`**. `S.wkDataCountry` **is** the door.
- ✅ **THE ORIGIN CHIP DOES NOT MOVE. Bobotie stays CAPE MALAY.** ⚖️ **Tina, 25 Jul:** *"it's a truth Boerekos doesn't want to accept, but only a few people actually know this."* **The shelf can change; the dish's origin cannot.**
- ⚠️ **THE TRAP IN THE FIX:** the shelf renders via `.map()`, which passes **(item, INDEX, array)**. A bare `.map(wkRecipeCard)` would hand the new second parameter **0, 1, 2…** instead of a country — silently, with no error. Callers must use `.map(function(x){ return wkRecipeCard(x, country); })`. **This is watched, not remembered.**
- ⚠️ **`sharedWith` IS A STRING, NOT A LIST — 1021 records, ZERO arrays. QUEUED, NOT FIXED** *(reference/TINZA_FIX_QUEUE.md)*. The filter uses `.indexOf()`, which on a string means **substring**, so it works by accident. Already odd in the data: two records share with **themselves** (`peppermint-crisp-tart → "Cape Malay"`, `zulu-umngqusho → "Zulu"`) and one crams two countries into one string (`sweden-gravlax → "Norway · Denmark"`). ⚠️ **THE LANDMINE:** a country **"India"** and a culture **"Indian"** both exist — one record tagged `sharedWith:"Indian"` would surface on the **India** shelf, because "Indian" *contains* "India". ⚖️ **This is the INGREDIENT STANDARD applied to data: one item per line, never a "+" line.** A migration, not a patch — needs its own session.
### 🗝️ 24.5 · THE DRILL IS FIVE KEYS — **A RESET THAT NAMES FEWER IS SHORT** *(ruled + built 25 Jul)*

**Her words:** *"While I was looking for Nigeria, I clicked from main home on WK but ended up in Southern Africa instead of main WK screen — maybe it was sticky from going to Bobotie in Boerekos."* **She was right, and she named the cause.**

`wkWorldHome()` decides what to draw purely from the drill keys:

| state | screen |
|---|---|
| `wkContinent && wkRegion` | the country grid for that region |
| `wkContinent` | the region list |
| neither | the continent grid |

⚖️ **A KEY LEFT BEHIND IS A SCREEN LEFT BEHIND.**

- ✅ **ONE DOOR: `wkResetDrill()`** in `worldkitchen.js`, over `WK_DRILL_KEYS = ['wkScreen','wkContinent','wkRegion','wkDataCountry','wkDataRecipe']`. All four short sites now call it. ⚖️ **Law 6 — five places hand-rolled the same list and four got it wrong. That is not carelessness, that is the wrong shape.**
- ⛔ **A LEVEL MOVE IS NOT A RESET.** `← continent` nulls **`wkRegion` alone** and must keep doing so. Stepping up one level is not leaving the room, and `wkResetDrill()` is not for it.

### 🔁 24.6 · ONE KEY, ONE CLOSE PATH — **A KEY MAY NOT BE IN BOTH LISTS** *(ruled 26 Jul, Tina)*

**Her find, on live:** the Feed My Family recipe Back was a **dead tap, and then Home.**

Two lists in `core.js` govern a recipe view, and they are **mechanically opposite**:

| list | line | what membership means |
|---|---|---|
| `navSignature()` | core.js:93 | opening the key **PUSHES** a history entry |
| `SIMPLE_RECIPE_KEYS` | core.js:59 | closing the key **NULLS it** → `setQuiet` → `draw()` → *pushes AGAIN* |

⚖️ **A KEY IN BOTH LISTS OPENS BY PUSHING AND CLOSES BY PUSHING. NOTHING EVER CONSUMES.**

**MEASURED, depth in brackets** *(enter Supper = depth 1, root 1)*:

| action | what happens | depth |
|---|---|---|
| tap recipe | sig changes → push | 2 |
| Back ① | step 2b nulls the key → draw → **pushes again** | 3 |
| Back ② | step 3: `3 > root 1` → `history.back()` → popstate restores depth 2 = **the recipe, open again** | 2 |
| Back ③ | key is set again → nulls → pushes | 3 |

It **ping-pongs**, and when the depth arithmetic desyncs, step (4) dumps her on **Home**. Exactly the symptom she reported, exactly the cause she guessed.

- ✅ **THE CONTRAST THAT PROVES THE RULE:** `closeRecipe()` *(core.js:3914)* calls `history.back()` — it **CONSUMES the entry it pushed**. That is why `viewingRecipe` has never had this bug.
- ⚖️ **THE RULING — MOVE THEM TO THE CONSUME PATH.** `moodActiveRecipe` and `mealActiveRecipe` come **OUT of `SIMPLE_RECIPE_KEYS`** and **STAY in `navSignature()`**. Closing goes through the consuming path, exactly like `closeRecipe`. ⚖️ **Law 6.**
- ⛔ **THE OTHER DIRECTION WAS REJECTED, AND WHY.** Dropping them from `navSignature()` instead would mean opening a recipe pushes nothing — and then the **phone's back button** pops straight past the list to **Home**. Consume-path gives the in-app Back and the device Back **one mechanism**. *(The in-app Back alone would have worked either way. The device Back is what decides it.)*
- ⚠️ **JUST FEED ME IS UNWALKED BUT NOT UNAFFECTED.** `moodActiveRecipe` is the other key in both lists. She reported *"it's only FMF"* because Mood was not on the walk — **expect the identical loop there**, and check it when the fix lands.

**🧹 THE SWEEP — because a bug is never in one place *(Tina's standing law)*. Every open-detail key in the app, classified:**

| shape | keys | verdict |
|---|---|---|
| ✅ **push + consume** *(correct)* | `viewingRecipe` · `activeBaby` · `activeDog` | the target shape |
| 🔴 **in BOTH lists** | `moodActiveRecipe` · `mealActiveRecipe` | **this ruling** |
| 🟠 **in NEITHER list** | `_anchorActiveRecipe` · `_fourActiveRecipe` · `_searchActiveRecipe` | in-app Back works *(one tap, no push, no sig change)*; **the DEVICE back overshoots to Home** — nothing was pushed to consume. **Measured, NOT proven on live.** Own job. |
| ⚪ **bespoke path** | `_budgetActiveRecipe` | handled by its own `goBack` step (1). Works; is its own shape. |

### ↔️ 24.7 · A LATERAL REPLACES, NEVER PUSHES *(ruled 26 Jul, Tina)*

**Her find:** *"Eggs → Waffles → Porridge and Back walks SIDEWAYS."*

`draw()` pushes on **every** signature change, and a pill is `setQuiet({mealCat:…})` *(meals.js:15432)*. Three taps at the **same depth** = three history entries. Back then walks across the shelf instead of out of the room.

- ⚖️ **THE RULING: a move that does not change DEPTH does not create HISTORY.** A lateral uses **`replaceState`**; only a level uses `pushState`. **ONE ruling, every room** — WK course tabs, Events tabs, Health group tabs, `wkDataTab`, the FMF pills. ⚖️ **Law 6 — not one fix per room.**
- 🔑 **MECHANISM — a declared `LATERAL_KEYS` list.** If the **only** signature keys that changed are lateral, replace instead of push. Candidates: `mealCat · eventTab · wkDataTab · wkCourseTab · healthGroupTab · beverageCat · cakeCat · catSection · dogSection · barMode · braiCat · fingerView · healthTab`.
- ⚠️ **CONFIRM ON LIVE BEFORE `eventTab` GOES IN THE LIST.** It has a default *(`data.js:33`, `'mains'`)* so it passes the same test on paper — but Events is the room being reworked, and **Law 2 says her fingers close it.**

### 🪦 24.8 · READ AND CLEARED IS NOT ALIVE — **DEAD RENDER BRANCHES** *(measured + RULED 26 Jul, Tina)*

**Found by the sweep, not by the symptom** — nothing on live pointed at this.

The census RED reads **`4 DEAD keys in navSignature()`**. That rung asks *"is this name mentioned anywhere in `sections/`?"* — and counts a **read** or a **`key: null` clear** as proof of life. That leniency is **deliberate and correct** *(the rung's own comment: err toward "it is alive" for deletions)*. But it leaves a harder question unasked:

⚖️ **CAN THIS KEY EVER BECOME TRUTHY?** Asked that way, **10 more keys are dead** — read, cleared, watched by the signature, and **written by nothing**:

`eventActiveRecipe` · `weddingCakeView` · `kidsShowMasterSnacks` · `wkSACulture` · `wkRecipeDetail` · `activeSmoothie` · `activeCat2` — plus `activeOats` · `activeMuffin` · `activeRaw` *(not in the signature at all)*.

- 🩸 **THE ONE THAT MATTERS:** `health.js:963–966` renders **four recipe-detail branches** — smoothie, oats, muffin, raw — each with its own back-state, its own cooking-mode line *(:955)* and its own Home button *(:858)*. **Not one of them can ever be opened.** They are leftovers from Health's migration onto the universal opener. Live code, reachable by nothing.
- ✅ **WHY DELETION IS SAFE HERE, AND THE LAW IT OBEYS:** ⚖️ *a helper is safe to delete only once its job has a new home* **(§24.3)**. These jobs moved to `openRecipe()`/`viewingRecipe` **at migration** — the new home already exists and has been live for weeks. That is the opposite of the `eventsTopNav` trap, where buffet's only route out would have been stranded.
- ✅ **RULED — TINA SAID YES TO ALL THREE, 26 Jul:** **(a)** the four dead Health branches are DELETED · **(b)** the dead keys come OUT of `navSignature()` · **(c)** the rung is TIGHTENED to ask *"is it ever SET?"*.
- ⛔ **THE PRICE OF (c), WRITTEN DOWN BEFORE IT IS PAID.** A stricter rung can one day bury a **live** key that is only ever written through a helper taking its name as a string — *the exact shape that made my own probe call `barMode` dead*. **The rung must therefore count string-name writes (`'key'`) as writes, not only `key:` literals**, and that requirement is part of the ruling, not an implementation detail. ⚖️ **Law 19.**

---

### 📐 24.9 · THE TOP BACK GOES **EXACTLY TWO LEVELS UP** — *(RULED by Tina 26 Jul 2026 · written into this file 27 Jul · supersedes §24 Option A, struck above · build = MF149)*

**The rule, whole:** **TOP Back = exactly TWO levels up. BOTTOM Back = exactly ONE. Uniformly, every room.** ⚖️ *A rule that bends per room is not a rule* — that law survives; only the destination changed.

- ⚖️ **WHY TWO, NOT THE FRONT DOOR:** in the 3-deep rooms *(Braai · FMF · Health · Spice · Mood · Budget)* two-up from a recipe **IS** the front door — the rules coincide and nothing changes. Only WK (4-deep) and the Kiddies drill differ, and there the front-door jump was the measured pain: Boerekos → Cape Malay cost a full re-drill. **Two-up keeps her in the neighbourhood.**
- ✅ **THE WORKED EXAMPLE *(Tina's own)*:** on the **Boerekos dish list** *(WK depth 3: continents 0 → regions 1 → countries 2 → dishes 3 → recipe 4)* the top Back reads **`← Africa`** — two up, the region list. Bottom Back = one up, the Southern Africa country grid. **Different destinations, both named.** ⚖️ Option B's never-two-buttons-one-job law is obeyed *by construction*: one-up and two-up can never be the same screen.
- ✅ **ON A RECIPE**, top = two up *(WK: `← Southern Africa`, the country grid — computed along the DOOR's chain, §24.4: enter via Boerekos, walk up Boerekos's parents, never the origin's)*; bottom = one up *(the dish list, via the consuming close, §24.6)*. **This ends the current WK shape where photo-Back and bottom-Back share one `_back`** *(worldkitchen.js:763 + 777)* — two buttons, one job, the exact rejected shape, live today.
- ⚖️ **THE CLAMP — CONFIRMED BY TINA, 27 Jul 2026:** at depth 1, two-up = **Home** *(`← Home`)*. On the front door (depth 0), one above is Home and there is nothing two above — top Back reads **`← Home`** *(unchanged from §24)*. So `← Home` appears at depths 0 **and** 1; at depth 1 the bottom Back goes to the front door, the top to Home — still two jobs. **No gate remains on MF149.**
- 🔑 **MECHANISM — ROOMS DECLARE THEIR PARENT CHAIN.** *(Sprint plan: "rooms need to know their parent.")* One helper in `core.js` — `topBack(chain, depth)` — takes a room's declared level chain *(names + the state-writes that land on each level)* and returns the header's `{backJs, backLabel}` for two-up. ⚖️ **Law 6 — nine rooms hand-rolling "null the right keys" is the §24.5 five-resets-four-short shape waiting to happen again.** No screen hand-rolls a two-up jump.
- 📛 **THE LABELS COME FREE:** the chain declares each level's NAME, so the 14 anonymous `← Back` headers *(census rung ⑥, born RED 25 Jul)* are named by the same build — a top Back's label **is** `'← ' + chain[depth−2].name`.
- ⛔ **LATERALS ARE NOT LEVELS.** Pills and tabs *(`mealCat`, `healthGroupTab`, `wkDataTab`, …)* live INSIDE a level *(§24.7 — they replace, never push)*. A chain never lists a lateral.

---

### 📍 24.10 · WHERE A SCREEN **LANDS** — *(RULED by Tina 27 Jul 2026, from live · build = MF150)*

**A push lands at the TOP. A lateral lands ON THE THING YOU TAPPED. Nothing lands in a random middle.**

- 🩸 **WHAT SHE SAW ON LIVE:** Events → Finger Foods opened **below the banner**, with the top Back scrolled off-screen — the header's own navigation control hidden by the landing. Cause is **NOT** MF149: `core.js:657` `jumpToContent` is an older feature that deliberately scrolls past the banner to `.content` on any in-section navigation. ⚖️ **It was written before the top Back meant anything. Now it does — a landing that hides the room's Back is a landing that hides the way out.**
- ⚖️ **THE LAW RIDES THE PUSH/LATERAL LINE ALREADY RULED IN §24.7** — one distinction, two behaviours, nothing new to remember:
  - **PUSH** *(entering a level: Events → Finger Foods, a country → its dish list, a room → a category)* → **`scrollTo(0,0)`. The top. Always.** The banner, the title and the top Back are all part of arriving somewhere new.
  - **LATERAL** *(a pill or tab inside a level — `LATERAL_KEYS`: Meaty → Pastry, `mealCat`, `healthGroupTab`, …)* → **land on the block that pill selected**, its heading at the top of the viewport. ⚖️ **Not "stay put"** *(Tina, live: tapping Meaty Snacks left her where she was and made her scroll down to find it)* and **not the top either** *(a pill tap is not an arrival; re-showing the banner on every pill is the thing `jumpToContent` was built to avoid)*.
  - **RECIPE OPEN** → top *(already correct — `openedRecipe`)*. **BACK** → restore the scroll she left *(already correct)*. **COOKING STEP** → top *(already correct)*.
- 🔧 `jumpToContent` is **deleted** as the default; its scroll-to-content behaviour survives only inside the lateral branch, and aimed at the SELECTED block rather than at `.content`'s top.

### 🏷️ 24.11 · A BACK SHELL WITHOUT A LABEL ARGUMENT WILL ALWAYS SAY "← Back" — *(MEASURED 27 Jul 2026, Tina's live catch)*

MF149-B named every `sectionHeader()` caller and Tina still found bare `← Back` in **Family Meals and Mood**. The measurement: **`recipeDetailFromResult(r, backAction, servings, color, bg, border)` (meals.js:15985) has no `backLabel` parameter at all** — so FMF, Mood and Search all fall through the `'← Back'` default at core.js:3072/4318. Its sibling shell `sectionPlanView()` **was** given the argument in MF149-B; this one was missed because it was never in the `sectionHeader()` sweep.

⚖️ **THE GENERAL LAW:** *a shell that renders a Back must TAKE the label as an argument — a shell that can only default is a shell that will default.* Naming the callers is not enough if the shell has no parameter to name into. **Census rung:** every Back-rendering shell in `core.js` accepts a label argument; every call site passes one *(a bare `|| '← Back'` fallback may exist as a crash-guard, but zero live callers may rely on it)*.

⚖️ **AMENDED (Tina, 27 Jul 2026):** **the back label is the name the user TAPPED — the tile text — never the internal screen key.**
*Origin: the Budget room. Its screen key is `budget`, a word she has never once seen on screen; the tile she taps says **I've Got R100**, and so does the room's own plan header. The Back reads `← I've Got R100` and stays that way.* ⚖️ A label naming something only the code can see is not a name — it is a leak.

### 🧭 24.12 · A LATERAL PUSHES NOTHING, SO BACK FROM ONE LEAVES THE ROOM — *(RULED by Tina 27 Jul 2026, from live · confirms MF150)*

**This is INTENDED. It is not a missing step, and nobody may "fix" it back.**

- §24.7 ruled that a lateral **replaces** its history entry rather than pushing one. The direct consequence: from a lateral-selected state, **one Back press leaves the room** — because tapping a pill never created a step to walk back through.
- ⚖️ **WHY IT IS RIGHT:** she did not GO anywhere when she tapped Meaty — she changed what one level was showing. Making Back retrace pills is what produced the original bug: every pill she ever tried standing between her and the way out.
- 📌 **AND:** Finger Foods' top Back stays a **static `← Home`** even when the room was entered via Events. Ruled, not an oversight — Finger Foods sits at depth 1, and §24.9's depth-1 clamp says two-up from there IS Home. The one-level step back to the Events grid is the BOTTOM Back's job.

### 😴 24.13 · A MOOD TILE IS A **LATERAL** — *(RULED by Tina 6 Aug 2026, from live)*

**The twelve Just Feed Me tiles are pills, not places.** Tapping *"I need a pick-me-up"* does not
walk her anywhere — **it changes what the one Just Feed Me level is showing.**

- ⚖️ **THE RULING: `moodSelected` is a LATERAL KEY.** It joins the list §24.7 declared
  *(that list is at `core.js:154-156`; §24.7's own candidates at line 1336 never included it)*.
  **Picking a mood REPLACES its history entry. It does not push one.**
- ✅ **§24.7's OWN WORDS DECIDE IT, and they were already written:** *"A LATERAL is a pill that
  swaps what ONE level SHOWS… She did not go anywhere."* **A mood tile is that sentence.**
- 📌 **THE CONSEQUENCE IS ALREADY RULED — see §24.12.** Once a mood is a lateral, **one Back press
  leaves Just Feed Me**, because tapping a tile never created a step to walk back through.
  ⛔ **That is INTENDED. Nobody may "fix" it back into two presses.**
- ⚖️ **SAME CALL SHE ALREADY MADE FOR `eventTab`** *(`core.js:140-143` — deliberately excluded until
  her fingers proved the symptom)*. **Hers to make, both times. Code does not get to decide a mood
  is a pill.**

🔓 **THIS UNBLOCKS `MF166` BUG 4**, which was held on exactly this ruling.
⚠️ **BUG 4 IS THREE DEFECTS STACKED ON ONE SYMPTOM.** This ruling closes **one**:
- **BUG 4** — level vs lateral · ✅ **ruled here**
- **BUG 4 §1** — `navSignature()` stores `(S.moodSelected||[]).length`, the **LENGTH** of the id, so
  four mood pairs collide *(`core.js:131`)*. ⛔ **Not touched by this ruling.**
- **BUG 5** — the stale snapshot · ✅ **already fixed by MF167**

> 📦 Evidence, measurements and build record: `TINZA_RULINGS_EVIDENCE.md` → 🔙 24

---
