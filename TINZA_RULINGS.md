# 📗 TINZA_RULINGS.md — WHAT TINZA **IS**

> **Trigger: `/rule`**
>
> ⚖️ **Law 15 — A RULING THAT LIVES ONLY IN THE CHAT IS NOT A RULING.**
> ⚖️ **Law 52 — IF YOU HAVE SAID IT TWICE, IT IS NOT A PREFERENCE. IT IS A RULING.
> STOP AND WRITE IT DOWN BEFORE THE NEXT SENTENCE.**
>
> **This file is not about HOW WE WORK.** That is `TINZA_LAW.md` (`/law`).
> **This file is about WHAT TINZA IS.** Every decision Tina has made — **with the DATE and the REASON.**
>
> 🩸 **THE REASON IS NOT DECORATION. It is the whole point.** A ruling without its reason
> gets re-litigated in six weeks by someone who cannot remember why. **Write the reason.**
>
> ✅ **Every ruling here that contains a NUMBER is a candidate for a `tinza-doctor.js` check.** ⚖️ **Law 42.**

---

## 💰 1 · PRICE & TIERS

**RULED 28 Jun 2026 · re-confirmed 13 Jul 2026.** *(Was R99 → R50 → **R90**.)*

| tier | level | price |
|---|---|---|
| **FREE** | `0` | R0 |
| **PRO** | `1` | **R90 / month** |
| **DELUXE** | `2` | **not yet decided** |

- 🚨 **The gate is a tier LEVEL (0/1/2). NEVER a boolean.** Adding Deluxe must be flipping a number, not re-plumbing every lock.
- **Structure:** R90 standard · **founding members locked at ~R50–60 FOREVER** · annual ~R900 *(2 months free)* · **a free trial.**
- ⛔ **NO third-party ads. Ever.** Subscription only.

### 🩸 WHY R90 BEATS R50 — **THIS IS THE REASON. DO NOT LOSE IT AGAIN.**
1. **PayFast takes a % cut PLUS a FIXED FEE per transaction.** The fixed part eats a far bigger slice of R50 than of R90.
2. **You can always discount DOWN from R90. Raising existing subscribers UP from R50 churns them.**
3. R50 only ever existed to match NYT Cooking (R49.99) and Savvy Chef. **R90 is 1.8× NYT — so the moat must carry it: Rand costing · Afrikaans · boerekos.**

⚖️ **LAW 15 BIT US HERE:** this was ruled **28 June** and lived **only in the chat.** Memory said R50 for **two weeks.**

---

## 🔓 2 · WHAT EACH TIER GETS

### FREE (level 0)
- Browse **every** recipe · **cook and view the full recipe** · scale **+/−** (guests/servings)
- 🔄 **ANCHOR INGREDIENT MOVED TO PRO — RULED 21 Jul 2026.** *It was Free. It is not any more.*
  🩸 **THE REASON: IT IS AI-POWERED, SO EVERY FREE TAP SPENT REAL MONEY.** *Measured 21 Jul — `meals.js` calls the paid chef to build dishes around the anchor. A free feature with a per-use cost attached is a different shape of thing from the rest of Free, which costs nothing to serve however many times it is used.*
  ✅ **FREE IS NOT WEAKENED BY THIS.** Free still browses, opens and scales **every one of 2,083 recipes.** That was always the offer; Anchor Ingredient was an extra that quietly billed. ⚖️ **Law 7 — the lock is the salesman:** Free now sees an honest lock over a feature that genuinely works, instead of a free feature Tina pays for.
- Sees the **dietary BADGE** on a card. *(Ruled 12 Jul.)*
- Sees the **honest COUNT** behind a lock: *"199 vegan recipes in Tinza — unlock with Pro."* **Never zero results. Never a lie.** ⚖️ Law 3.

### PRO (level 1) — R90/mo
Cost *(green food-cost / gold shop-spend)* · **My Plan** · **shopping list** · downloads · **the whole nutrition grid INCLUDING calories** *(ruled 7 Jul — supersedes "calories always free")* · **all dietary FILTERS** *(ruled 12 Jul)* · **Tinza Chef** · **Favourites** *(ruled 13 Jul)* · pantry · leftovers

### DELUXE (level 2) — price TBD
**Events** *(Buffet · Cakes · Beverages · Wedding)* · **the Weekly Planner** · the newsletter / monthly letter

💀 **THE TIER SWITCHER IS NOT GATED — SEE §17.** *Measured 21 Jul: `tierBar` renders to every visitor, and its 👑 Pro button hands out everything listed above for free. Every line in this section is currently one tap away from anyone.*

🚨 **Moving Events → Deluxe is a GATE MIGRATION** — every Events screen re-gated. **Its own session. Not a price change.**

### 🎪 2.2 · EVENTS IS ONE UMBRELLA WITH ONE PLAN — **CORRECTED 21 Jul 2026**
*Tina, 21 Jul, in her own words: **"what I really wanted is all celebration/big functions under one umbrella."** The previously LOCKED wording — *"each tab is an EQUAL STANDALONE feature with its OWN My Plan"* — is **STRUCK.** It never matched the intent, and it never matched the code.*

- 🩸 **THE CODE ALREADY DOES THE RIGHT THING. THE RULING WAS THE BUG.** Measured at HEAD: **one `S.eventGuests`** — a single guest count spanning every tab — feeding **nine selection buckets**: `eventSelectedMains` · `Starters` · `Sides` · `Salads` · `Desserts` · `Sauces` · `Cakes` · `Beverages` · `Fingers`. **That is one plan for one function, which is what catering a wedding actually is.**
- 🎂 **THE TABS ARE COURSES OF ONE EVENT, NOT FIVE APPS.** Nobody plans a 21st and wants the cake in one plan, the drinks in another and the snacks in a third. **One guest count, one plan, one shopping list, one cost.**
- 📉 **CONSEQUENCE FOR THE GATE LIST: Events is ONE surface, not five.** *(An earlier count in this session said five; it was read off the struck ruling instead of off the code. ⚖️ **Law 36** — including when the thing being measured is our own file.)*
- 🍴 **THE TABS STILL EXIST AS NAVIGATION.** Buffet · Cakes · Beverages · Finger Foods · Kiddies remain the way you move around the room. **What is struck is "own My Plan", not the tabs themselves.**
- 📋 **THIS DOES NOT MAKE `My Menu` REDUNDANT.** Events combines *within one function*; `My Menu` combines *across rooms* — the stub already says so: *"everything you've planned across all sections — with a combined shopping list."* **Events-internal is built; cross-room is still coming.**

### 🚩 2.3 · WHEN THE FILE AND THE INTENT DISAGREE — **RULED 21 Jul 2026**
*Raised by the Events correction above, and it is worth its own clause because it is the first real test of the closing rule of this file.*

- 📜 **THE STANDING RULE:** *"If this file and the code disagree — the file is right and the code is a bug."* **That rule assumes the file captured what Tina meant.**
- ⚠️ **WHERE IT DOES NOT HOLD: when the FILE is what misheard her.** Then "the file is right" would enforce a mistake against working code, with the full authority of a locked ruling behind it.
- ✅ **THE TEST — ASK TINA, DO NOT INFER.** Where code and file diverge, the question is *"which one is what you actually wanted?"* — **never** *"which one is older."*
- 🖊️ **A CORRECTION IS WRITTEN, DATED AND MARKED STRUCK — NEVER SILENTLY DROPPED.** The struck wording stays visible with the reason, exactly as it is above. ⛔ **Letting the code quietly win erodes the closing rule the first time it is inconvenient** — and that rule is load-bearing for every other line in this file.

---

### 💰 2.4 · 💰 I'VE GOT R100 IS **PRO**, LOCKED AT THE ROOM — **RULED 21 Jul 2026**

*Tina, in one line: **"What use is budget when there is no prices anyway?"** She was right and the derivation against her was wrong. Written down because it was argued twice. ⚖️ Law 52.*

- 🩸 **THE MEASUREMENT THAT RAISED IT:** `core.js:597` — `else if(S.screen==="budget"){ content=budgetPlannerHTML(); }` — **no gate.** Six raw `R${}` sites inside rendered live Rand to any free visitor. Same silent shape as `tierBar`: no error, no bill, no missing element. The screen looked correct.
- ⛔ **THE WRONG FIX, AND WHY IT WAS TEMPTING:** *room stays open, lock only the Rand.* It read as consistent with the dietary ruling — **badge free, filter Pro.**
- ✅ **WHY IT IS WRONG: BUDGET HAS NO BADGE HALF. IT IS ALL FILTER.** Dietary splits cleanly — the **V badge is a fact about the recipe**, useful standing alone, so it is Free; the **filter is the work**, so it is Pro. **Budget is filter end to end.** Hand Free the filtered list and hide only the numbers, and Free has *the answer to "what can I make for R100"* — the entire product — with the receipt withheld. **The numbers are not the value. The FILTER is the value.**
- 📜 **LAW 3 IS SATISFIED BY THE LOCK, NOT BREACHED BY IT.** The objection raised was *"a locked room prints zero results."* It does not. §2 FREE already names the compliant shape: **"sees the honest COUNT behind a lock."** The Budget lock reads **"R100 feeds your family from N recipes — unlock with Pro."** **N is real, computed from the same query that builds the paid list, never zero, never rounded to flatter.** ⚖️ **Law 3 · Law 7 — the lock is the salesman.**
- 🔑 **THE GATE GOES AT THE ROOM** (`core.js:597`), **not on the six lines inside it.** One door. ⚖️ **Law 6.** Gating six render sites leaves the seventh to be found later.
- ⛔ **`budgetPeople` AND `budgetPlan` ARE ON THE RED LINE (§5) AND DO NOT CLEAR.** A Free visitor who hits the lock and later upgrades finds her people count and her plan intact. **Gating is not clearing.**
- 🔴 **KNOWN GAP, NOT PAPERED OVER:** `index.js:483` — `if(r.costPP==null) return false` — so **N is computed against 1551 recipes, not 2083.** 532 are invisible to any budget. The count is honest about **what Tinza can answer**, which is not the same as **what Tinza holds.** That gap is the 294-uncosted work on the Week 3 board.
- 🧭 **THE GENERAL FORM, worth more than the Budget case:** *when deciding a tier gate, ask **what the tool's ANSWER is**, not what its screen shows.* If the answer itself is the paid thing, the room is Pro. If the screen merely decorates a free answer, only the decoration locks.

---


### 🍽️ 2.5 · THE SEVEN SA DUPLICATE PAIRS — RESOLVED 22 Jul 2026

*Raised repeatedly — the bobotie note in §15 below, and the Fable SA lane. Tina rules each, applying §2.3; Claude never infers. ⚖️ Law 60.*

- 📜 **THE RULE FOR 1–5:** where an SA dish lives in both `meals` (versioned) and World Kitchen (bare), **the versioned `meals` copy is CANONICAL.** The World Kitchen copy becomes a **POINTER** — it still appears on its Cape Malay / Indian / Boerekos shelf, but there is exactly ONE versioned record. No version data moves; the budget forks — the whole reason for the SA work — stay where they already are. ⚖️ *Duplicate rule: same dish + same name → keep the most comprehensive.*
- 🩸 **#1 BOBOTIE — THE DOUBLE IS ALREADY LIVE.** `meals sp-bobotie` **and** `wk_southafrica cape-malay-bobotie` both carry the identical six versions (Classic · Budget · Quick · Lentil · 1600s Original · In a Pumpkin). Canonical = **`meals`**. **Code strips the WK copy's six duplicated versions and repoints it.** A resolve, not a prevent.
- **#2 Cape Malay Chicken Curry** — canonical `meals sp-capemalay-curry` (4 vers, R32); `wk cape-malay-chicken-curry` → **pointer.**
- **#3 Bunny Chow** — canonical `meals sp-bunny-chow` (4 vers, R40); `wk indian-bunny-chow` → **pointer.**
- **#4 Shepherd's Pie** — canonical `meals sp-shepherds-pie` (3 vers, R48, incl a Budget fork); `wk boerekos-herderspastei` → **pointer.** The Budget fork holds the cheap end the bare WK price used to.
- **#5 Tamatie Bredie** — canonical `meals sp-lamb-bredie` (3 vers, R47); `wk cape-malay-tomato-bredie` (bare, unpriced) → **pointer.**
- **#6 Waterblommetjiebredie — WK-internal double, neither versioned.** Keep **`wk boerekos-waterblommetjiebredie`** (it is a Cape-Dutch stew, not Cape Malay); `wk cape-malay-waterblommetjie-bredie` **dies.** 🆕 **CONTENT REQUIREMENT (Tina, 22 Jul):** the surviving record MUST carry a **version that substitutes an inland-available alternative for the waterblommetjies.** They are a Western Cape seasonal delicacy — easy at the coast, genuinely hard to find away from it. The dish must not be dead to anyone inland.
- **#7 Braaibroodjies — Braai section × WK boerekos, neither versioned.** Keep the **Braai** record (`braaibroodjies`) — it is a braai dish; `wk boerekos-braai-broodjies` **dies.**
- ✅ **NOT DUPLICATES — KEEP BOTH/ALL:** Cape Malay **Fish** Curry [events] ≠ Cape Malay **Chicken** Curry [meals]. Cape Malay Curry **Powder** [spice] is a blend, not the dish.
- ⚙️ **RULING ≠ DONE.** Executing 1–7 is a **Code / Node merge** — strip bobotie's double · repoint 2–5 to their canonical · drop the dead copies in 6–7. Until it runs, Fable stays fenced off these pairs. This is the next SA Code brief.

---


### 🇪🇺 2.6 · THE THREE EUROPE DUPLICATES — RESOLVED 22 Jul 2026

*Fenced during the Fable Portugal/Spain run; ruled here so they unblock. ⚖️ §2.3 · Law 60.*

- **Pastéis de Nata** — `bakes bk-pasteis-nata` is **CANONICAL** (already versioned: Classic · Chocolate · Coconut). `wk portugal pasteis-nata` → **pointer**, still on the Portugal shelf. The versioned copy wins — same logic as §2.5.
- **Tortilla Española** — neither copy is versioned. **CANONICAL = `wk spain`.** It sits inside the Spain block Fable is elevating right now, and its home is Spain. `meals ln-tortilla-espanola` → **pointer** (keeps it in the everyday/quick room). 🔓 **This UNFENCES it for Fable's Spain pass** — Fable elevates + versions the WK Spain record; no double is created because `meals` carries zero versions.
- **Frango Piri-Piri** — neither copy is versioned; same dish under two flags. **CANONICAL = `meals` "Peri-Peri Flame-Grilled Chicken".** Peri-peri chicken is iconically SA (Nando's country) — its home is the everyday SA room, not the Portugal shelf. `wk portugal frango-piri-piri` → **pointer** (still shows as Frango Piri-Piri on the Portugal shelf). Fable does NOT author the WK copy — peri-peri stays owned in `meals`.
- 🧭 **THE TIEBREAKER (general form):** when neither copy is versioned, canonical = **where the dish is culturally at home AND where it is being actively developed.** Tortilla → Spain (WK, being elevated now). Peri-peri → SA (meals, the hero framing). The versioned-copy rule (§2.5) only applies when one side actually has versions.
- ⚙️ **RULING ≠ DONE** — the same Code/Node merge as §2.5 repoints these pointers. Until it runs, Frango and Pastéis stay fenced from Fable; Tortilla is the one that opens.

### 🗺️ 2.7 · MY PLAN IS PRO **EVERYWHERE** — NOT JUST ITS MONEY — **RULED 23 Jul 2026**
*§2 already names My Plan and shopping as PRO. This ruling is the ENFORCEMENT clause, filed because MF132 §2.B found braai's plan/shopping surface still reachable by a free visitor — only its Rand was locked.*

- 🔒 **EVERY My Plan / plan / shopping surface, in EVERY room, is gated at the surface — not merely its prices.** Braai · Events · Budget *(already room-gated §2.4)* · World Kitchen · Feed My Family · anywhere a "My Plan" or shopping list renders. Free browses, views and scales recipes; the moment a screen's job is *"here is your plan / your shopping list,"* it is Pro.
- 🧱 **THE SHAPE IS §2.4's, RE-USED:** gate the SURFACE and hand Free a `lockPanel()` carrying an honest line *("Plan your braai for N guests — unlock with Pro")*, never a blank screen (⚖️ Law 3), never a cleared plan (⚖️ §5 red line — gating is not clearing; an upgrade later finds the plan intact).
- 🩸 **MF132 §2.B IS NOT SUPERSEDED BY THIS.** Locking braai's Rand was correct and stays — it is defence-in-depth beneath the surface gate. Money-locked *and* surface-gated is not redundant; it is two doors on the same room.
- ⚙️ **RULING ≠ DONE — THIS IS A NEW JOB, NOT PART OF MF132.** MF132 is money (the §7 gate layer). This is the My-Plan *surface* gate and gets its own brief. Census Check 25 watches the money; a sibling assertion (or its own rung) must watch the plan surface, or this silently rots the same way. ⚖️ Law 6 · §2.3.

---


## 🧑‍🍳 3 · TINZA CHEF (the AI)

**RULED 13–14 Jul 2026.**

- 🍳 **He is a COOK. He writes the METHOD.** *(Not a waiter who only names dishes.)*
- 🌍 **He may roam ANY cuisine.** Mediterranean, Middle Eastern, whatever is honest. ⛔ **He is NOT South-Africa-only.**
  **The only SA constraint is INGREDIENTS AND SHOPS — because PRICE_DB is a South African shelf.**
- ⚖️ **He may NEVER bend a dish to fit the fridge.** *A bobotie has no potato in it — not even if she has a potato.* ⚖️ **Law 43.**
- ⚖️ **He may NEVER use a traditional dish's name.** *"Mince & Potato Bake", not "Bobotie".* ⚖️ **Law 11.**
- 💰 **HE MAY NOT AUTHOR A PRICE — BUT HIS CARDS MAY BE PRICED.** *Two different acts.*
  **The model names the food. `costRecipe()` prices it, off shelf-verified PRICE_DB.** ⚖️ **Law 11 stays intact.**
- ⚖️ **ALL OR NOTHING PER CARD.** `missing[] = 0` → show the cost. **Anything missing → SHOW NO COST.**
  **A card that prices SOME of the food is worse than one that prices none.** ⚖️ **Law 20.**
- 🏆 **AND LOG THE MISSES. That log IS the next PRICE_DB shopping list — written by the chef himself.** ⚖️ **Law 36.**

### 🔌 3.1 · THE CHEF IS SWITCHED OFF UNTIL HE IS CAPPED — **RULED 21 Jul 2026**

*Read from the repo 21 Jul: `netlify/functions/claude.js` forwarded the browser's whole request to the Anthropic API with Tina's key attached, answered **every origin** (`Access-Control-Allow-Origin: "*"`), and had no rate limit, no size limit and no daily ceiling. Not a missing cost cap — an open, unauthenticated proxy to a paid account, live on the internet.*

- ⛔ **THE CHEF IS OFF.** The endpoint returns `503` and **never reads the key, never calls Anthropic.** It comes back only via `reference/MF78_AI_CHEF_LOCK_AND_CAP.md`.
- 🚪 **HIDING THE BUTTON IS NOT CLOSING THE DOOR.** The exposure was never the button in the app — it was the endpoint, which answered anyone who knocked whether or not Tinza called it. **A feature is switched off at the endpoint or it is not switched off.** ⚖️ **Law 6.**
- ✅ **NOTHING BREAKS, AND THIS WAS MEASURED NOT ASSUMED.** All three call sites already wrap the call in `try/catch` and degrade silently — *"the app results stay. Nothing is lost."* Mood shelves keep serving from a library **160–784 deep per mood**; the library was always meant to carry them. ⚖️ **Law 20 — the cache is not a shortcut, it IS the business model.**
- 🚨 **WHILE A FEATURE IS OFF IT SHOWS "COMING SOON" — NEVER A PRO LOCK.** Anchor Ingredient is now Pro *and* currently dark, and those two facts together would sell a padlock on an empty room. **Sell it when it works, not before.** ⚖️ **Law 7.**
- 🔑 **THE KEY IS REVOKED, NOT JUST UNUSED.** Nothing reads `ANTHROPIC_KEY` any more, so it is retired at the console and removed from Netlify. **A revoked key cannot be billed however wrong the code is** — the only guard that does not depend on Claude, Code or Tina getting anything right.
- 💰 **AND THE BILL WAS NOT WHAT ANYONE THOUGHT.** All three call sites asked for **Sonnet**; the function overwrote it with **Opus** on every request. Every comment said Sonnet, every invoice said Opus. **When he returns, the model is ruled once, out loud, in one place.** ⚖️ **Law 11.**

### 🆕 HOW MANY, AND WHEN — **RULED 14 Jul 2026**
> 🩸 **TINA SAID THIS THREE TIMES BEFORE IT WAS WRITTEN. ⚖️ LAW 52 EXISTS BECAUSE OF THIS RULING.**

- 🍽️ **He serves 3–4 dishes AT A TIME.** Not a wall of ten.
- 🔄 **WHILE SHE IS BROWSING THOSE, HE KEEPS LOOKING.** The chef works in the background, never blocking, never a spinner in her face.
- 🪜 **THE LADDER:** every dish that uses **ALL** her ingredients first. **When those run out — dishes using 3 of them.**
  ⛔ **NEVER fewer than 3.** ⚖️ **Law 41 — a match of 2-of-4 is not a match, it is a coincidence. The threshold IS the feature.**
- 💰 **SAME FRIDGE = ONE PAID CALL. EVER.** `_fourCache` keys on the ingredient SET.
  ⚖️ **Law 20 — the cache is not a shortcut. IT IS THE BUSINESS MODEL. Never reset it.**
- ⛔ **A BUTTON THAT CANNOT DO WHAT IT SAYS IS A LIE.** If the cache means "Find again" returns the same cards — **delete the button or change what it does.** ⚖️ **Law 3.**

### 💸 MF117 — MOOD SHELVES QUERY THE LIBRARY; THE PAID CALL IS GATED ON POOL DEPTH — **RULED 15 Jul 2026**
*"Just Feed Me" stopped being 36 hand-typed cards and became a live query over `allRecipes()` — 1,667 eatable recipes, every one openable. Two consequences of that scale-up carried a cost the brief did not see.*

- 💸 **THE PREFETCH INVERTED WHEN THE POOL GREW.** `callMoodChef` prefetched a paid Sonnet call (`/.netlify/functions/claude`, 4000 tokens) on every mood tap. Correct when a mood was 6 cards / 2 pages; pure waste at 160–784 cards / 53–261 pages — it buys AI for pages nobody reaches. Measured: 12 taps → 12 paid calls → gated on `pool.length < 10` → **0 paid calls.** `getMoreMoodRecipes` still fires the chef on demand at the real end of a thin library, so nothing is lost. ⚖️ **Law 20 — the stated PURPOSE (cut paid calls) beats the brief's LITERAL wording ("background AI stays").** An optimisation correct at one data scale becomes a leak at another; gate the paid call on the thing that changed — depth.
- 🚪 **THE OPENER ALREADY EXISTED — THE BRIEF INVENTED ONE THAT WAS WRONG AND UNNECESSARY.** §6 said wire `openRecipe(r.id)`. But `openRecipe` takes `(section, id)` over `RECIPE_SOURCES`, which has no `floor` key — all 9 budget-floor cards would have been dead ends, the exact bug MF117 kills. The real door, `openMoodRecipe → recipeDetailFromResult(r, …)`, is the SAME renderer the budget finder and search already use on `allRecipes()` records. Feed live records in; the tap works with zero opener changes. ⚖️ **Law 35 — lift the existing door, do not invent one.**
- ⏱️ **A LIVE RECORD IS NOT A HAND-TYPED CARD.** MOOD_DB cards always had `time` and a prose `why`; the live pool is 20% time-null and has no `why`. The hard-coded `⏱ ${r.time} min` printed "null min". The card now builds each line from present fields and falls `why` back to `feel`. Build the row from what exists, never from what is assumed. ⚖️ **Law 45.**
- 📏 **A SHELF'S COVERAGE IS MEASURED OVER THE SHELF'S POOL, NOT THE WHOLE APP.** The brief's coverage %s were over all 2,083; over the 1,667 a mood actually draws from they are friendlier — time 80%, kcal 90%, costPP 89% (protein 6%, still unusable). Conclusions held either way, but the denominator is the eatable pool.
- 🧾 **THE DISCIPLINE HELD.** All 12 measured yields reproduced to the recipe on this commit. The MEASUREMENTS were evidence; the INTEGRATION steps were hypothesis — and Code, on the real signatures, is where the hypothesis met the code. ⚖️ **Law 22.**

**THE EATABLE POOL (`MOOD_EAT_SLOTS`):** `SUPPER · LUNCH · BREAKFAST · SIDE · STARTER · TREAT`. CONDIMENT / DRINK / PETFOOD / BABYFOOD are never on a "feed me" shelf. Census check 17 fails the build if any of the four leaks in, if a mood yields < 10, if a mood card lacks a real `id`, or if a time-gated mood (quick / exhausted / lazy) contains a null-time record.

### 🎭 MOOD IS A TAG ON THE RECIPE, NOT A KEYWORD GUESS — **RULED 15 Jul 2026**
*Tablet-proven (MF117 first light): keyword/slot guessing put **Fish & Chips** under "Impress", **Burger Buns & Chips** under "I need something sweet" (TREAT slot sweeps in savoury bakes AND sides), and **blue-cheese swirl rolls** under "Fussy little ones" (the word "cheese" is not the concept "kid-friendly"). The dishes are not miscategorised — they carry NO mood. A guessed filter is a hypothesis; the screen disproved it. ⚖️ Law 22 — the render is the measurement.*

- 🎭 **MOOD LIVES ON THE RECORD, LIKE `diet`.** The shelf is `allRecipes({mood:'sweet'})` — one field, queried, never a hand-built list and never a keyword sweep. ⚖️ Same rule as dietary §6.6 — shelves are QUERIES, not lists.
- 🔢 **BUT MOOD IS AN ARRAY, AND A JUDGMENT — NOT ONE VALUE READ OFF INGREDIENTS.** A dish is one `diet` (anchovy → not vegetarian, deterministic). A dish suits MANY moods (roast chicken = impress + celebrating + cold-night). So `mood: []` holds a LIST, and it is a human call, not an ingredient fact. This is the one place mood differs from diet — build the field as an array.
- 🔇 **FAIL LOUD — NO TAG MEANS INVISIBLE, NEVER DEFAULT-INTO-EVERYTHING.** An untagged recipe appears on ZERO mood shelves. `[]` is absence, not "belongs everywhere". A wrong dish on a shelf is worse than a thin shelf. ⚖️ Law 45 — unknown is not "yes".
- 🤖 **DRAFTED IN NODE, RULED BY TINA.** Auto-seed a first-pass tag from slot + section + cuisine + ingredients + the `feel`/howThisFeels line; Tina reviews the edges. Heaviest human curation on the THREE vague moods — **pickmeup · lazy · fussy** — which have no structural signal at all. ⚖️ Same discipline as the diet pass (§6.7 — the Caesar-with-anchovies lesson): a machine proposes, a human disposes.
- 🎯 **ENOUGH GOOD MATCHES — NOT ALL 1,667.** A shelf needs ~15 true matches; Chef fills any gap (Law 43, the `<10` gate MF117 already ships). The marathon tags each mood UP TO a threshold, it does not adjudicate the whole library.

**THE PHASING (do not rip out MF117).** The live keyword shelves stay as the interim — loose but full and cheap, fine pre-launch. Per mood, flip `buildMoodPool` from the keyword filter to `allRecipes({mood})` ONLY once ≥ ~15 recipes carry that tag; delete that mood's keyword filter at the flip. **Census check 17 grows a rung:** report the tagged count per mood (⚖️ Law 36 — the count is truth, it is the marathon's backlog number), and fail the build if a mood is flipped to the tag-query while under threshold.

### 🥗 MOOD VERSIONS ARE REAL FOOD, MADE EASIER BY TECHNIQUE — NEVER BY THE SHOP — **RULED 16 Jul 2026**
*How the mood shelves earn their "easier / faster / gentler / kid-friendly" versions: by TUNING dishes we already have — with knife-work, prep and the freezer — never by sending people to buy ready-made, processed shortcuts. Speed is a technique, not a trip to the garage shop.*

- 🚫🍔 **NO McDONALD'S-GARBAGE. EVER — and STRICTEST on the vulnerable moods.** `fussy` (kids), `sick`, and `exhausted` are the moods most tempted toward processed convenience, so they get the HIGHEST health bar, not the lowest. Real ingredients, veg-forward, nourishing. A tired parent is exactly who Tinza protects from "just buy the jar."
- ⚡🔪 **FAST COMES FROM METHOD, NOT A PACKET.** An exhausted-mood Chilli con Carne or Chicken Alfredo is sped up by TECHNIQUE (one pan, cook-order, prep-ahead) — never by tinned sauce or ready-meal parts. Teach the fast way to make the REAL thing; guard the recipe against the shortcut. ⚖️ Kin to Law 43 — a dish is not bent to fit convenience.
- 🥕 **VEG-RICH IS THE COMFORT, NOT A GARNISH.** Bangers & mash with a heartening, veg-loaded onion gravy does more than the sausage does. Comfort food carries its vegetables — most of all on the kid / sick / exhausted shelves.
- 🎚️ **TUNE, DON'T MULTIPLY.** Tinza does NOT author a bespoke version of every dish for all 12 moods. A few good version chips per dish, plus tuning existing recipes into variations — a complicated risotto dialled down, a rich dish made gentle — plus a handful of purpose-built recipes (Tina researches later) for the gaps. Restraint over sprawl.
- ❄️ **THE FREEZER IS THE ALLOWED SHORTCUT.** Make-ahead-and-freeze is how Tinza delivers speed honestly. Example: DIY pizza — make and freeze the BASES, then a fast fresh-topped pizza fits `fussy`, `lazy`, `exhausted`, even `celebrating`. The freezer, the prep bowl and the knife are the shortcuts; the shop shelf is not.

---

## 💰 4 · COSTING

- 🟩 **GREEN = food cost only.** Text colour **`#46530c`**.
- 🟨 **GOLD = shop-spend only.** Text colour **`#876213`**.
- ⛔ **NEVER MIX THEM.**
- **Rand costing is the "pays for itself in saved rands" justification. No rival costs a meal in Rand.** *That is the moat.*

### WHO IS COSTED — **RULED 14 Jul 2026**
| room | costed? | how | reason |
|---|---|---|---|
| 🌍 **World Kitchen** | ✅ | per person | |
| 🍽️ **Feed My Family** | ✅ | per person | |
| 🧁 **Bakes** | ✅ | per person | ⚠️ *`Math.ceil` over-bills ~2.5× — MF29/MF33. **This inverts the core pitch.** Fix it.* |
| 🔥 **Braai** | ✅ **MUST BE** | per person | 🩸 **The cost EXISTS** (`calcMeat` · `PORTION_BRAAI`). **`index.js:334` BINS IT.** A BUG, not a content gap. |
| 🐕 **Pet Food** | ✅ **IS COSTED** | per batch | *Ruled 14 Jul. `furry.js` has ZERO cost fields today — but 60 of 62 have quantities. `costRecipe()` can price them all.* |
| 👶 **Tiny Tummies** | ✅ | per batch | |
| 🧂 **SPICE** | ✅ **PER BOTTLE** | 🆕 **per BATCH / bottle — NOT per person** | 🆕 **RULED 14 Jul. A chutney is not a portion. 175 quantified ingredient lists already exist in `spice.js`.** |
| 🍹 **Beverages** | ⛔ **DELIBERATELY NOT COSTED** | — | **Liquor is uncostable — hundreds of gins and beers. Revisit only if Grocify happens.** *Ruled 14 Jul.* |

### 🚨 "NOT COSTED" AND "NOT YET COSTED" ARE **DIFFERENT THINGS**
Both are `costPP: null` today. **The app cannot tell them apart and drops BOTH silently.**
⚖️ **Law 45 — UNKNOWN IS NOT NO.** **Beverages must SAY "not costed". It must not VANISH.** ⚖️ **Law 3.**
🏆 **The pattern is already built and live: `worldkitchen.js:152` → `'cost: not yet priced'` — and `:534` even NAMES the ingredients it could not price. ⚖️ Law 35 — LIFT IT, don't invent it.**

---

## 🔧 5 · THE FIVE TOOLS — WHICH ARE **QUESTIONS**, WHICH ARE **DOORS**

**RULED 13–14 Jul 2026: "Empty box — fresh question."**

**A QUESTION opens EMPTY, every single time:**
- 💰 **I've Got R100** — *new week, new money.* **The budget amount clears too.**
- 🐔 **I Have Chicken** *(Anchor Ingredient)*
- 🧅 **4 Ingredients**
- 😴 **Just Feed Me** *(Mood)*
- 🔍 **Search**

**A DOOR keeps its state:** 🔥 Braai · 🌍 World Kitchen · 🥗 Health · 🧂 Spice · 🍽️ Feed My Family.

### 🚨 THE RED LINE — WHAT NEVER, EVER CLEARS
`NAV_DATA_KEYS` (`core.js:55`) is the app's own list. **These are HER WORK, not her question:**

| ⛔ NEVER | why |
|---|---|
| `moodPlan` · `budgetPlan` · `wkPlan` · `healthPlan` · `dogPlan` · `catPlan` | **her plan. Clearing it is THEFT.** |
| `budgetPeople` · `moodServings` · `people` · `servings` | **How many people live in her house is a FACT, not a question. Her family did not shrink because she left the room.** |
| `_fourCache` | **the business model.** ⚖️ Law 20. |

### 🆕 WHAT SPICE IS **NOT** IN — RULED 14 Jul 2026
⛔ **Spice does NOT appear in 💰 I've Got R100.** *(It is priced per bottle. A budget is per meal.)*
⛔ **Spice does NOT appear in 😴 Just Feed Me.** *(A mood asks for DINNER. A sambal is not dinner.)*
✅ **Spice DOES appear in 🔍 Search and 🧅 4 Ingredients.** *(An onion + tomato fridge should absolutely find Chakalaka.)*

---

### 💸 5.1 · 💰 BUDGET IS FOR PEOPLE WHOSE MONEY IS SHORT — **RULED 21 Jul 2026**

*Tina, 21 Jul: **"it's a budget section, for people low on cash. People low on cash won't have R500 for an event."** Recovered from a 24 May decision that had drifted. Written down this time. ⚖️ Law 52.*

- 🎯 **THE AUDIENCE IS THE RULING.** Budget exists for the person whose problem is that **money is short this week.** Every feature in the room answers to that person or it does not belong in the room.
- ⛔ **PARTY AND EVENT PLANNING IS NOT THAT PERSON.** Someone with R500 for a function is not short of money — they are **catering**, and catering has its own umbrella (§2.2, Events). Pointing a tight-budget user at party planning aims the tool at somebody it was not built for.
- 🩸 **WHAT WAS FOUND, 21 Jul:** `budget.js:72` promised *"R500+ unlocks party & event planning mode"* and `:43` switched the subtitle to *"🎉 Party & event planning mode"* at R500. **Both DELETED.**
- 🧭 **THE HISTORY MATTERS, BECAUSE IT WAS NOT ALWAYS FALSE.** Built 24 May as Tina's own idea, and it **worked** — at a high budget-per-person the chef was told to generate *"impressive celebratory"* recipes instead of budget ones. It survived the 10 Jun warm re-skin untouched, which is how a live feature quietly becomes a decision nobody remembers making. **It was orphaned on 21 Jul when the chef was switched off (§3.1)** — the promise did not die, its engine did.
- ✅ **THE AMOUNT SURVIVES. THE PROMISE DOES NOT.** R500 stays as a chip, stays in the honest range *"R40 – R500"*, and stays as the threshold at `budget.js:150` that gates the **"Tight budget, honest food"** message. **A number is not a claim.** ⚖️ Law 3 — never promise what nothing keeps.
- ✅ **THE CEILING IS 12 PEOPLE — RULED 21 Jul 2026.** `budget.js:83` reached **500**, raised from 20 on 24 May *for party mode*, which parked Budget in the CATERING band beside `cakeGuests` · `beverageGuests` · `barGuests`. **Measured, not guessed:**
  · **12 is the last point where the room still ANSWERS** — R100 ÷ 12 = R8.33pp returns **226 real recipes.** Not zero, not a lie. ⚖️ Law 3.
  · **At 50 the room CANNOT answer at all** — even R500, the top chip, lands at R10pp, **under the R15 meat line.** The old ceiling was ten times past where the tool stops working.
  · **The meat-line message already covers the gap** — R100 drops below R15pp at **7 people**, so from there up `:150` is already telling the truth. 12 gives that message room to be useful before the cap arrives.
  · **Past 12 is catering, and catering has Events.** The SA month-end reality — extended family, a gogo feeding grandchildren — fits inside 12.
- ⚠️ **DO NOT REVIVE THIS WITH THE CHEF.** When MF78 restores the chef capped, the other five chef hides come back. **This one does not** — it was removed for PURPOSE, not for cost. Reversing it would re-aim the room. ⚖️ §2.3.

---

### 🍽️ 5.2 · THE BUDGET ROOM SERVES **THE BEST MEAL FOR THE MONEY**, NOT THE CHEAPEST FOOD — **RULED 21 Jul 2026**

*Tina, 21 Jul, looking at the Budget Bobotie card on live: **"a mother of 4 kids would rather make a bobotie than samp and beans."** One sentence, and it re-aims the sort.*

- 🎯 **CHEAPNESS IS THE CONSTRAINT, NOT THE GOAL.** Nobody opens this room wanting *the cheapest food.* They want **the best meal they can make for the money they have.** Those are different sorts and they produce different lists:

  | R26pp · cheapest-first *(today)* | R26pp · best-for-the-money |
  |---|---|
  | Idiyappam R5 | **Budget Bobotie R26** |
  | Waakye R4 | Chicken Breyani R23 |
  | Fluffy Drop Dumplings R4 | Tin Fish Curry R14 |

  **The first list treats her as poor. The second treats her as someone cooking supper.** With R104 for four she can make bobotie tonight — and the room shows her drop dumplings **because they cost less.**
- 💰 **THE DISH ITSELF ALREADY KNOWS.** Bobotie's own Did You Know, live on the card: *"soaking stale bread to bulk out and moisten mince is one of the oldest thrift techniques — bobotie was built to make a little meat feed a family."* **The food was invented for this exact person.** The query is the only thing that cannot find it.
- ✅ **THE INSTINCT IS ALREADY IN THE CODE, AND IT IS BEING OVERRIDDEN.** `BUDGET_BAND_FRACS = [0.7, 0.5, 0.3, 0]` starts at **70% of budget and relaxes the floor only as far as needed** — written to *"hug the per-person figure"* (Tina, 3 Jul). Then **cheapest-first inside each bucket undoes it.** Fix the sort, not the band.
- ⛔ **THIS IS NOT "HIDE THE CHEAP FOOD."** At **R8pp the stretchers ARE the best meal for the money** and must lead. The rule is *best for THIS money*, which at the floor genuinely is pap and beans. ⚖️ **Law 3 — never zero, never a lie.**
- 🧭 **THE GENERAL FORM, third time tonight:** *a sort key that is a pure number is blind to the person.* Cost-ascending answers **"what is cheapest"** when she asked **"what can I cook."** ⚠️ Same root as the LOCALE ranking clause (§11) and §15.5 — **three symptoms, one cause: the sort does not know who is asking.**
- ⏱️ **ORDER:** §15.4 → §15.5 → this. The Budget Bobotie must be **reachable** before it can be **ranked first.**

---



## 🥬 6 · DIETARY

**RULED 12 Jul 2026 · extended 14 Jul.**

- **V + VE only for v1.** Vegetarian and Vegan. Nothing else yet.
- **The BADGE is free. The FILTER is Pro.**
- ⛔ **NOTHING EVER AUTO-HIDES ITSELF.**
- ✅ **`diet:'unknown'` is REQUIRED as a fourth state.** *(Ruled 12 Jul. **STILL NOT BUILT.** ⚖️ Law 15.)*
- 🧠 **Tags are DERIVED FROM INGREDIENT LISTS, IN NODE. NEVER BY HAND.** ⚖️ Law 11.
- ☪️✡️ **Halaal and Kosher are separate laws, never swap-guided.** Do not touch them casually.
- **Free types "vegan" → she sees the honest count and the lock. NEVER zero results.** ⚖️ Law 3 · Law 44.

*(The four dietary LAWS — 45 unknown-is-not-no · 46 one-food-one-word · 47 never-match-a-diet-against-prose · 48 vegan-is-a-kind-of-vegetarian — live in `TINZA_LAW.md`.)*

---

## 💾 7 · SAVING — "SAVE FIRST. SIGN IN LATER."

**RULED 13 Jul 2026.** *🩸 Today Tinza saves NOTHING except `tinzaTheme`.*

- ❤️ **Favourites + My Plan → `localStorage`. NO LOGIN. Works offline.**
- 🛒 **The shopping list → WHATSAPP.** ✅ **Already built — 21 share buttons exist.** ⚖️ Law 35 · Law 6 — build the ONE `shareList()` they all call.
  🇿🇦 **A South African shopping list lives in WhatsApp.** It survives the phone locking, the app closing, the service worker — **and she can send it to her husband.**
- 📧 **Then, quietly, at 5+ saves:** *"Add your email to keep these if you change phones."* → **MAGIC LINK. NO PASSWORD.** *Nothing to reset, nothing to leak under **POPIA**.*
- 💰 **PayFast rides on that same email. Nowhere else.**

> 🩸 **THE ACCOUNT IS THE PRICE OF *KEEPING*. NEVER THE PRICE OF *COOKING*.**

---

## 📅 8 · THE WEEKLY PLANNER — **IT IS CONTENT, NOT A GRID** *(DELUXE)*

**RULED 13 Jul 2026.** *Today it is a `comingSoonHTML()` page. It does not exist.*

- 📅 **v1 is "THIS WEEK IN TINZA" — written by Tina.** *Mon Boontjiesop · Tue Vetkoek · Wed Cottage Pie…*
  🩸 **A blank grid says "NOW YOU DO THE WORK." Tinza's Week says "I ALREADY DID IT FOR YOU."**
  *(NYT and eMeals both publish an editor's weekly plan. **Neither hands you an empty calendar.** And Tina is a CATERER — planning other people's weeks is literally her trade.)*
- **FREE** reads it and cooks every recipe in it. **DELUXE** can **swap a day** + get the **costed list → WhatsApp.**
- 🔔 **NO PUSH NOTIFICATIONS. A PWA cannot reliably push to an iPhone.**
  ✅ **INSTEAD: THE APP OPENS ON TODAY.** *"WEDNESDAY 🍲 Cottage Pie — you have everything. 65 min."* Yesterday rolls off by itself.
- 👁️ **ASK THEM IN-APP FIRST: "Do you want a weekly planner?"** — before building it.

---

## 🍖 9 · PORTION BRAIN (LOCKED)

| cut | per person |
|---|---|
| boneless | **300 g** |
| bone-in | **400 g** |
| fish | **280 g** |
| shellfish | **320 g** |

**Taper:** 1 meat = 100% · 2 = 70% · 3 = 58% · 4+ = 50% each.
`calcMeat` reads the CUT via `braaiBaseG` → `BRAAI_CUT` → `PORTION_BRAAI`. **NOT per-meat `soloG`/`sharedG`.**

---

## 🧱 10 · STRUCTURE & CONTENT RULINGS

- 🏆 **BAKES IS THE TEMPLATE. NOT BRAAI.** *(Ruled 14 Jul. **Braai — the old gold standard — is now the WORST room: cost 0% · diet 0% · time 0%.** The copy overtook the original.)* ⚖️ **Law 49.**
  ⛔ **The old rule — "scrap and rebuild everything on Braai v33" — IS NOW A BUG FACTORY. Struck.**
- 🎉 **EVENTS is an umbrella NAME ONLY.** Every sub-feature *(Buffet · Cakes · Beverages · Finger Foods)* is an **equal standalone with its own My Plan.** The Cultural tab is deleted → its content went to World Kitchen.
- 🥗 **SALADS STAY IN BRAAI. Only DRESSINGS move to Spice.** Each Braai salad gets a clickable link to its dressing.
- 🛒 **INGREDIENT STANDARD:** Name = **what you BUY**, matching PRICE_DB. Amount = **weight g/kg + pack hint**. **One ingredient per line. Prep goes in the METHOD, never in the name.**
- 🇿🇦 **TINZA SPEAKS ENGLISH — BUT SHE UNDERSTANDS AFRIKAANS.** *(Typing, categories and voice all come off the SAME map as the ingredient brain. Build it once.* ⚖️ *Law 6.)*
  ✍️ **~20 Afrikaans names need an English GLOSS, not a translation. There is no English word for a koeksister. There is a koeksister.** ⚖️ **Law 11.**
- 🧘 **THE RETREAT / GROUP-PREFERENCE PLANNER IS PARKED.** *A different product. Multi-person planning needs real shared state — a server, accounts, sync — or the sharing is fake. **But it is literally Tina's trade. One day.***

- 🥕 **HIDDEN-VEG IS A TECHNIQUE, NOT A DISGUISE.** *(Ruled 17 Jul.)* The Shelf-WOW "**never disguise**" law protects the person **READING** the recipe — it forbids deceiving the cook about what a dish is or whether a swap was made honestly. Blending carrot / butternut / cauliflower smoothly into a kid's dish does the **opposite** of deceiving the reader: the recipe **lists every vegetable** and the method says plainly to blend it in. The only one the veg is "hidden" from is the child at the table — and the parent chose it, for the child's good. **So it does not trip the law.**
  - ✅ **The recipe is always honest to its reader** — every hidden veg is in the ingredients list and the method. Nothing faked or omitted from the page. That is the same spirit as "remove and replace": real vegetables, properly incorporated, never a faked gap.
  - 🚫 **The one hard line:** hide **flavour and texture from the child** — NEVER an **ingredient from the reader, or the data**. Hidden-veg may not conceal an allergen, misstate a dish's `diet`/allergen data, or claim a dish is something it is not. The veg vanishes on the plate, never off the ingredients list.
  - 👶 **Ships as a version chip (👶) under the Bobotie rule** — same dish, kid-tuned. Now **inherited** by every dish that uses the move (root-veg mash · fussy bunny chow · gentle spag bol · future ones). No more per-recipe flag. ⚖️ **Law 52.**
  - 🎯 **Used for TWO groups who genuinely need the help — young children (👶) and frail / elderly care (🧓)**, where stubbornness and a poor appetite make getting wholesome food in genuinely hard. Both deserve real, nourishing food, and both will refuse visible veg. Not a house style beyond those two — never on ordinary adult dishes where honest, visible vegetables are the point.

### 🆕 🍽️ VESSELS SCALE IN A SLOT, NEVER IN PROSE — **RULED 24 Jul 2026** *(app-wide, not just bakes)*

**The bug that named it:** scale a cheesecake to 2 and the ingredients doubled, but the method still read *"Line a 22cm springform tin"* — one tin, one cake's gelatine, frozen at 1×. Tina hit it on a live bake. It is **not** a bakes bug — a census found the same frozen holder across the app: **54 "baking dish"** plus oven / ovenproof / tart / pie / springform mentions in method prose, spread through meals, World Kitchen, Health, Buffet and Events. Bobotie *"spoon into a greased dish"*, melktert *"press into a tin"*, the kid muffin *"24 mini muffins — 2 per child for 12 kids"* — all singular, all fixed at one batch.

**The law:**
1. 📝 **Method prose is authored for ONE finished unit** — one cheesecake, one dish of bobotie, one tart, one tray of muffins. Prose NEVER carries a scale-dependent absolute (*"make 2 tins"*, *"24 muffins"*, *"24g gelatine as the whole job"*).
2. ⛔ **No number inside method prose is EVER auto-scaled by the engine.** Prose holds dimensions (22cm), temperatures (180°C), times (5 min) and ratios (per 12g) — every one of which must stay **fixed**. A regex that scaled prose numbers would turn 180°C into 360°C and a 22cm tin into 44cm. **Forbidden, permanently.**
3. 📦 **Everything that scales lives in a structured slot:**
   - **Ingredients** already scale (`pp × scale`). The *total* of any quantity — gelatine, flour — is **read from the ingredient list**, never counted out of the prose.
   - **`equipment`** — a NEW per-recipe field: the fixed-capacity holders, each tagged with the servings it covers. The engine multiplies by the batch and renders its own **"🍽️ You'll need"** line: *"2 × 22cm springform tins" · "2 × ovenproof dishes" · "2 muffin trays".*
4. 🪧 **Past one holder, the page states the contract:** *"This method makes 1 [unit] — work one [tin/dish] at a time. The ingredient amounts above are your total for all [N]."* That one line makes every existing per-unit ratio correct.

**The `equipment` contract** *(for Code + Fable)*:
`equipment:[ { n:'22cm springform tin', per:12 } ]` — `per` = servings ONE holder covers. `count = Math.max(1, Math.ceil(scaledServings / per))`, where `scaledServings` = `bakeUnits` for a modelled bake, else `sv`. Render `count>1 ? count+' × '+n : '1 × '+n`. **No `equipment` field → no line shown** — a soup pot or a braai grid is not a fixed holder. Silent and unchanged. **Batch recipes** — jam, chilli sauce, preserves, cordials (yield in **g/ml**, not servings) — count too: the holder is a **jar or bottle** and `per` is its capacity in ml/g, so `count = Math.ceil(totalYield / per)`. Scale the jam and the jars multiply, exactly like tins scale for cake. The renderer is unit-agnostic — `per` just has to be in whatever unit that recipe's yield is measured.

**Two holder behaviours (RULED 24 Jul 2026, sizes researched):** not every holder locks the same way.
- **HARD batch** — springform, muffin tray, cake tin, loaf, tart, pie. Fixed pieces → the dial **rounds up to whole units, no fractions** ("makes 1 cheesecake · serves 12"). The existing bake model.
- **SOFT default** — oven dishes (lasagne, bobotie, gratins, bakes, puddings). Opens at **6** (one standard 23×33cm / 9×13″ dish — researched: a 9×13 serves 6–8), **scales freely up AND down** (2 is allowed — a solo cook uses a small dish), and **states the assumption**: *"Built for a standard dish that serves 6 — scale down for a smaller dish, or make the full dish and freeze the rest."* No fraction lock; the equipment line still counts whole dishes at `per:6`. Tina's call, 24 Jul: default-but-scalable beats a hard minimum, because people living alone own small dishes. Standard sizes filed in MF143.

**Why this is the right shape:** bobotie "In a Pumpkin" already scales perfectly — because its vessel *is an ingredient* (200g pumpkin per portion). The holder that lives in a slot scales itself; the holder frozen in prose cannot. So every scaling vessel goes in a slot.

- 🔧 **Engine** = MF142 — add the field + one shared renderer, wire into every recipe page. ⚖️ **Law 52.**
- ✍️ **Authoring** = a Fable-scale pass to tag holders and reword any *"make N tins"* prose to per-unit. Worklist starts with the oven-dish family (census in `reference/`).

#### 🆕 🍽️ SOFT-6 IS A **FAMILY-MEAL** DEFAULT — COUNT-SCALED ROOMS KEEP THEIR OWN COUNT — **RULED 24 Jul 2026** *(refines the SOFT rule above)*

The SOFT default (open at 6, *"scale up or freeze"*) is a **family-meal** idea — feed six, freeze the rest. It must **never** seed the dial in a room that scales to a **count of people**: **Events guests · Buffet guests · Kiddies kids-count.** Soft-defaulting an event bake to 6 would **fight the one-guest-count Events model** (§2.2 — one `S.eventGuests` drives every bucket) and the kids-count, and the *"scale up or freeze"* line reads wrong at a catered function — nobody freezes a wedding buffet.

- 🍽️ **The rule in one line:** count-scaled surface → **keep its own count** as the dial seed. Family-meal surface → **soft-6.** Nothing count-scaled ever routes through `softDefaultN`.
- 🔢 **The vessel COUNT line still shows there** — a buffet bake for 20 is `ceil(20/6) = 4` ovenproof dishes, exactly what a caterer needs. What drops on those surfaces is only the **family framing** (the *"serves 6, scale up or freeze"* assumption line), never the dish count.
- ✅ **Proven — MF144 Phase A (Code, 24 Jul):** four **family-meal** openers — `bakesRecipeOpts` (core.js) · `recipeDetailFromResult` (meals.js) · `wkRecipeOpts` (worldkitchen.js) · `healthRecipeOpts` (health.js) — route through **one shared `softDefaultN` helper**, not a copy per renderer (the copy-per-renderer trap was MF138). Gate passed 3/3 — bakes · WK `cape-malay-bobotie` · FMF Bobotie all open at 6 (the WK path previously opened at **1** — the whole point). **Non-soft dishes stayed byte-identical** (no note, open at 1). `events` and `kiddies` were **deliberately left off** the helper — they keep their guest/kids seed. ⚖️ **Law 52.**

#### 🅿️ IN-BETWEEN DISH COUNTS **ROUND UP** — THE "1 FULL + 1 SMALLER" NOTE IS **PARKED** — **RULED 24 Jul 2026**


An awkward serving count (8, 10, 15) is **not** an architecture problem. The existing contract already answers it: `count = Math.ceil(scaledServings / per)` — **confirmed live at HEAD** (Code, 24 Jul): the ceil is present in **both** vessel renderers, `equipmentLine` (`core.js:3163`) and `equipmentContract` (`core.js:3182`), and a grep found no un-ceiled `servings ÷ per` anywhere in the vessel path. **Nothing to edit.** Ten servings → **2 dishes** (five each — shallow, never wrong, nobody misled). The truer *"one full 9×13 dish plus a smaller one"* answer would need a **defined second vessel per recipe** plus remainder logic — real cost for a marginal gain. **Parked, not forgotten.** *(Tina, 24 Jul: revisit as an in-app helper once at scale — a chef assistant that answers "how many dishes for 14?" live is the right home for it, never hard-coded per recipe.)*


#### 🆕 🍽️ THE HOLDER FOLLOWS THE **YIELD BASIS**, NOT THE NAME — AND A **BARE TWIN IS RED** — **RULED 25 Jul 2026** *(MF144 Phase C)*

**What Phase B missed.** The holder pass tagged **one named record per dish**. The library keeps the *same dish* as **separate records in different rooms**, so every cross-room twin stayed bare — and the coverage guard read `BAKES_RECIPES` only, so it never looked. Melktert carried a tin in **bakes** and nothing in **World Kitchen** or **Events**; Malva carried a dish in **Events** and nothing in **bakes** or **WK**; **Beef Lasagne**, the textbook soft dish, had nothing anywhere. A green board the whole time. ⚖️ **A room-blind watcher cannot see a room-crossing bug.**

- 🔴 **A BARE TWIN IS RED, NEVER "PENDING".** If any copy of a dish carries a holder, the dish is **proven** to need one — so a bare copy is a **bug**, not an authoring decision waiting its turn. Doctor rung 12 now **fails** on it. *(Proven by re-introducing the bug: stripping `events:melktert` moved the count 6 → 7 and named the record.)*
- ⚠️ **NO copy anywhere has one → WARN, not RED.** Holder-shaped and untagged across the board is genuinely authoring-pending (a Fable pass). It stays a warning until authoring closes, then the WARN is promoted to a gate. ⚖️ **Law 42 — the ratchet.**
- ⚖️ **THE HOLDER FOLLOWS THE YIELD BASIS.** Same name is **not** same holder. A record whose ingredients scale **per person** has **no fixed yield** and therefore takes **NO holder** — `braai:periperibraai` is costed at *3g pp · 8ml pp*, so a *"500ml bottle"* would be a lie on the page, even though `spice:peri-peri-sauce` (a batch, yield in ml) correctly carries one. **Ask of the record, never of the name:** does it yield a *fixed thing* (a dish, a tin, a jar) or a *per-head amount*? Only the first takes a holder.
- 🍽️ **Copying a twin's holder is a decision, not a mechanic.** Two records can be the same dish and still want different vessels — a Dutch **Appeltaart** is a deep springform where an SA **Appeltert** is not. Where the vessel genuinely differs, **ask Tina** (⚖️ §2.3), never infer.
- 🔧 **The watcher** = `Tools/tinza-holder-audit.js` — boots the real library and **walks the records** (⚖️ §19 parse-never-grep), groups cross-language twins, and is `require`d by the doctor so there is **one** grouping, not a copy per tool. If the module goes missing the doctor **fails loudly** — ⚖️ **MF135, a watcher that swallows its own failure cannot watch.**

#### 🆕 ⚖️ THE YIELD BASIS IS **DECLARED**, NEVER INFERRED — **RULED 25 Jul 2026** *(MF145)*
*The §10 rule above was right and the watcher could not apply it. The record had no way to say what it was.*

- 📣 **A per-head record declares itself:** `yieldBasis:"perHead"` — authored on the record, one line, exactly as a holder is. It means *the ingredients scale per person, so there is no fixed yield, so there is no holder.* Null = **not declared**, and null is never a claim.
- ⛔ **The watcher must not guess the basis.** `events` and `braai` ingredients cross the door through `nameOnlyIng()` with `pp:null` **by design** — the door carries names for *search*, not for *costing*. So the basis is genuinely unknowable downstream, and any regex on the name would be a silent wrong answer wearing a green tick. **The tool asks the record; the record answers.** ⚖️ Law 6 — the data states the rule, never the function.
- 🔴 **It fails LOUD, not safe.** Drop the door line and `yieldBasis` arrives undefined, the exemption stops applying and every one of these goes back to **RED**. *Proven both ways 25 Jul:* strip one declaration → split 0 → 1; drop the door line → split 0 → 3 dishes / 4 copies. A missing exemption must **reappear as a bug**, never vanish into green. ⚖️ MF135.
- 👁️ **An exemption nobody can see is indistinguishable from a check that quietly stopped running.** The audit prints **list C · EXEMPT** and a `per-head exempt=N` total. Silence is not a pass.
- 🩸 **The four founding records** (all bare, all correct): `braai:periperibraai` · `events:periperi` · `events:tahini` · `world:indian-mango-atchar` — each a per-head copy standing beside a **Spice batch twin** (*500ml bottle* · *375ml jar* ×2). **Same name, different construction — the Apple Tart shape again.** Spice bottles it; Events scales it to the guest count.
- 🩸 **`adaptBraai` forwards no `equipment` on purpose** (a grid is not a fixed holder) — but it **must** forward the basis, or a per-head braai sauce reads as a bare twin of its Spice copy forever.
- 📁 **Path corrected:** the tool lives at the **repo root** beside `tinza-census.js` / `tinza-doctor.js`, not in `Tools/`. The doctor's `require` was pointing at `./Tools/` and would have red-flagged a module that was there all along.



#### 🆕 🍽️ THE HOLDER IS A **RECOMMENDATION**, NEVER A REQUIREMENT — **RULED 25 Jul 2026** *(Tina)*

> *"Not everyone will have exactly the dish that is recommended. A housewife at home works with what she's got; a chef will probably have all the recommended dishes. This feature is just a helpful feature for the subscriber."*

A chef owns every tin on the list. A woman cooking supper on a Tuesday owns **what is in her cupboard** — and the app must **never imply her dish is wrong**. The vessel line exists to tell her *what the method was written for*, so the times and depths make sense. It does **not** exist to send her shopping.

- 🗣️ **The heading is `🍽️ What To Cook It In`** — *not* **"You'll Need"**. "You'll need" is an instruction and reads as a barrier at the exact moment she is deciding whether to cook the thing.
- 📏 **The box says the quiet part out loud**, every time, under the holder rows: *"A guide, not a rule — cook it in what you have. Anything close in size works. A smaller dish bakes deeper and needs a little longer; a bigger one bakes flatter and is done sooner."* That last clause is the **useful** half — it hands her the trade-off instead of a rule, which is the WOW Standard's whole voice (⚖️ *Michelin chef explaining it to a grandma*).
- 🔢 **The COUNT still matters and still shows.** Recommendation-framing softens the *vessel*, never the *arithmetic* — 13 servings is still `ceil(13/6) = 3 dishes`, because a caterer plating a function needs that number to be true.
- ✍️ **The banner names its noun.** *"your total for all 3"* was a dangling number; it now reads *"your total for all 3 **dishes**"* — a modelled bake uses its own unit word (cake, tray), a soft oven dish borrows the honest word *dish*. *(Closes the cosmetic loose thread carried from 24 Jul.)*
- 🍏 **Same name ≠ same tin — proven, not assumed.** Ruled by reading the ingredient bases: `bakes:bk-apple-tart` is **puff pastry** (flat tart) · `netherlands-appeltaart` is a **pastry dough with egg** (deep — 24cm springform) · `boerekos-appeltert` carries **baking powder**, so it is a **batter, not a crust** (a soft baked pudding-tart → ovenproof dish). Three constructions, three depths, three holders. ⚖️ The ingredient list settles a vessel question that the name cannot.

---

## 🚨 11 · LAUNCH BLOCKERS *(top of October)*

- ⛔ **MF57 — THE PWA SERVICE-WORKER CACHE.** ⚖️ **Law 27 — published ≠ what her browser runs.**
  💀 *A user who installs in September can be frozen on old code FOREVER — old prices, the R38 lamb tagine — and she will never know.*
- 🔒 **HIDE THE TIER SWITCHER.** It is on live, on every screen, right now.
- 💰 **MF78 — THE AI COST CAP.** The chef is live and firing. **This is real money now.**
- 💳 **PayFast, R90/mo.**
- 🎨 **The Home page still needs designing — and is still BLACK.**

### 🆕 🌍 LOCALE — ONE RECIPE, MANY KITCHENS — **RULED 15 Jul 2026**
**SA is locale #1.** Location (set in Settings) picks the kitchen: **SA now, UK/US later.**
Two mechanisms, kept separate:
- **TERMINOLOGY** *(word-level)* — brinjal↔aubergine, mielie↔corn. Display-only swap, **same ingredient**. A dictionary applied at render.
- **PRODUCT** *(item-level)* — things that don't cross the border: Ro-Tel→tinned tomato + green chilli; snoek→smoked mackerel. A **per-locale override on specific ingredient lines**, may nudge the method.

🚫 **Locale is NOT a version chip.** Versions (Classic/Budget/Quick) = the USER picks. Locale = the SYSTEM picks, invisibly, from location. **Two separate axes — never tangle them.**

➡️ **DISCIPLINE (⚖️ Law 53):** author **SA-first**, but **mark every locale-specific line as it is written** — so UK/US is a *fill-in, not a rewrite* of 2,083 recipes. The marking is free today; the rewrite is not.

**v1 ships SA only. UK/US is post-launch.**

---

### 🌍 LOCALE IS A THIRD MECHANISM: IT NUDGES **WHAT SURFACES**, NOT ONLY WHAT RENDERS — **RULED 21 Jul 2026**

*Tina, 21 Jul, off the Budget results: **"it must be adaptable to where the person is finding himself."** The LOCALE ruling above has two mechanisms — TERMINOLOGY and PRODUCT — and **both only act once a recipe is already open.** Neither touches which recipes surface, or in what order. This is the third.*

- 🩸 **THE MEASUREMENT, Budget pool at HEAD** *(mealRole:'main', no braai, priced — 670 meals)*:

  | per person | meals | SA-reachable |
  |---|---|---|
  | **R0–R10** | 21 | **3 — 14%** |
  | R10–R15 | 51 | 20 — 39% |
  | R15–R25 | 130 | 46 — 35% |
  | R25–R50 | 366 | 127 — 35% |

  **THE POOREST BAND IS THE LEAST SOUTH AFRICAN.** At R8 a head she is served Waakye · Idiyappam · Farinata · Ful Medames · Bissara · Misal Pav. **Good food, every one — and the wrong answer to the question she asked.**
- 🎯 **THE CAUSE IS NOT BAD DATA. IT IS AN UNWEIGHTED SORT.** Budget orders on `costPP` ascending, and **a number does not know who is asking.** Any shelf sorted on a pure number — cost, time — will surface whatever wins that number, and cheapness is not evenly distributed across the world's kitchens.
- 📉 **THE NUDGE SCALES INVERSELY WITH THE MONEY.** At **R40pp browsing the world is a pleasure.** At **R8pp it is a wrong answer** — she needs supper tonight from what is in the Spar. **The tighter the budget, the stronger the local pull.** ⚖️ §5.1 — the audience is the ruling.
- ⛔ **IT NUDGES ORDER. IT NEVER REMOVES.** World Kitchen is **1,021 recipes and a deliberate shelf** — Tinza is global on purpose. A locale rule that *hides* food is **a filter, not a nudge**, and a filter is a different feature needing its own ruling. ⚖️ **Law 3 — never zero results.**
- 🔒 **LOCALE STAYS SYSTEM-PICKED.** Inherited from the ruling above: location picks the kitchen, **the user never picks it**, and it is **never a version chip.** Two axes, never tangled.
- 🧭 **THE GENERAL FORM:** *a sort key that is a pure number is blind to the person.* Wherever Tinza ranks on cost or time alone, ask whether the winner of that number is also the right answer for **who is asking, and where they are standing.**
- 📋 **QUEUED, NOT BUILT.** Budget is the surface that proved it; it is not the only one. **Do not bolt this into `budget.js`** — the sort is shared (`balancedOrder()`), so the nudge belongs beside it. ⚖️ **Law 6 — one door.**
- ⚠️ **SEEN WHILE MEASURING, NOT DIAGNOSED:** the R8 entry reads **`Плацинда`** in the data and **"Plachynda (Stuffed Flatbread)"** on screen. Check it against the **wk_europe re-decode** queue before assuming either is correct.

---


### 🆕 🚪 THE NORMALISER AT THE DOOR — **RULED 15 Jul 2026**
*Reserve the SHAPE now, so nothing needs retrofitting across 2,083 recipes or everyone's saved data. Pairs with `sections/TINZA_CONTRACT_SLOTS.md`.*

**`normalizeRecipe(raw)` is THE DOOR. One definition of the reserved slots and their defaults.**
- **It is STANDALONE.** `rec()` calls it as its **final step** and returns the result. `rec()` itself does **NO defaulting**. The future **Chef** and **Add-a-Recipe** paths (`source: chef | user`) call **the same function** — ⚖️ **Law 6, one door.** **Every record door produces complete records.**
- **PURE.** Never mutates the source recipe; returns a normalised copy.
- **ADDITIVE ONLY.** New keys. Nothing removed. **Existing values carry through — a default NEVER overwrites a value that is already there.**

**The defaults:**

| slot | default | reason |
|---|---|---|
| `ingredients` | structured, via `getIngredients()` | the WK `·`-string is parsed **at the door** — always comes out structured |
| `steps` | `[]` | |
| `tags` | `[]` | the future-proofing slot |
| **`source`** | `'db'` | **🆕 RENAMED from `origin`.** ⚖️ **Law 46** |
| `goesWith` | `[]` | |
| **`contains`** | **`null` — NEVER `[]`** | ⚖️ **Law 45 — UNKNOWN IS NOT NO.** **`[]` reads as "this recipe contains NO allergens" — a SAFETY CLAIM we have not earned** on 2,083 recipes where the field was never derived. `null` = *we do not know yet.* **Passthrough only. NO auto-derivation until `deriveContains()` ships with a confirmed list.** |
| `visibility` | `source === 'user' ? 'private' : 'public'` | reads **`source`**, not `origin` |
| `yield` | `null` | |
| `diet` | via `normDiet()` → `['unknown']` when empty | the 12 Jul fourth state, already built |
| `versions` | `[]` | was `null` for 1,880 records. 🩸 **`[]` is TRUTHY where `null` was FALSY** — see below |

#### 🆕 `origin` → `source`. **THE WORD `origin` WAS ALREADY TAKEN — IT MEANS A PLACE.** ⚖️ **Law 46**
`core.js:2558` `metaStrip()` prints `origin` as a **📍 pin**, fed `r.cuisine` / `r.country` / `r.region`.
**Provenance is `source` (`db | chef | user`). Location stays `origin`.** One word, one meaning.
*(Amended `TINZA_CONTRACT_SLOTS.md` slot 4 — it said `origin`; **updated to `source` on 15 Jul**, same day, so the contract file and this ruling agree. **If they ever disagree again, this ruling wins.**)*

#### 🆕 `yield` STAYS TOP-LEVEL. **NO RENAME.**
`spice.js` `makeYourOwn.yield` = `{mode,unit,base,step,label}` — read at 7905 / 7926 / 8128 / 8341.
**These are two DIFFERENT PATHS at two DIFFERENT LEVELS and they do not collide:**
- **`recipe.yield`** — recipe-level. The reserved contract slot. Defaults `null`.
- **`recipe.makeYourOwn.yield`** — nested, spice-only, **shaped**, already in use. **Untouched.**

**Never flatten one into the other.**

#### 🆕 THE INGREDIENT VOCABULARY — **BOTH, VIA THE ACCESSOR**
⛔ **DO NOT mass-convert `{n,pp,u}` → `{qty,unit,name}`.** 1,893 recipes and **every renderer** read `.n/.pp/.u`.
✅ **`getIngredients()` is a SHAPE-UPGRADE, not a parser** — it **reuses `wkParseIngredients()` and `normIng()`**. It never re-derives the per-room ingredient map (`ingredients` | `base300` | `base` | `shopping` | braai's nested `it.recipe.ingredients`) — **the adapters already own that.** ⚖️ **Law 6 — a second engine is the bug.**
**Both shapes coexist on every item: `{n,pp,u}` kept, `{qty,unit,name}` added.**

#### 🩸 `versions: []` IS TRUTHY. `null` WAS NOT. — **the bug this ruling nearly shipped**
**`budget.js:283` (`_budgetComp`) scored `r.versions ? 3 : 0`.** That score decides **which record survives dedup** when two rooms hold the same dish name. Under `null` a versionless recipe scored **0**; under `[]` it scores **3** — **every** recipe wins the bonus, the "has versions" signal **dies**, and the budget finder silently starts keeping a **different record**.
✅ **Guarded 15 Jul:** `(r.versions && r.versions.length) ? 3 : 0`.
⛔ **NEVER test `.versions` as a boolean. Test `.length`.** Census check 12 now fails the build if anyone does. ⚖️ **Law 42.**
*(This is why "all readers use `(r.versions||[])`" was a guess, not a fact. **The grep is the end of guessing.** ⚖️ **Law 22.**)*

#### 💾 THE STORE WAITS
`tinzaStore` is a **separate module**. **It does not get wired until the per-room slot census confirms the WK assumption with evidence.**

---

### 🆕 🍽️ `slot` LIVES ON THE **VERSION**. A RECORD'S SLOT IS ITS **DEFAULT VERSION'S** SLOT. — **RULED 21 Jul 2026**
*MF131. Extends the reserved-slots contract to a second level. **`slot` is now a contract field at BOTH the recipe level and the VERSION level.***

**The dish that forced it:** **Vetkoek** is a `TREAT` split with butter, jam and syrup — and a `SUPPER` split with curried mince. **Amagwinya** is the same dish. One record, two courses, so the record could not carry one honest slot and stayed **`unresolved`**. It was never a data gap; it was the **wrong shape**.

⛔ **"Split it into two records" was RULED AND THEN WITHDRAWN (21 Jul).** It was ruled before `versions[]` was on the table. Both records **already carry the sweet/savoury split as versions**, each with its own ingredients, method, time, `costPP` and nutrition. Splitting would have duplicated the dough method **four ways**, and put **two records under one name** — against the ingredient standard's *same dish + same name → keep the most comprehensive*. ⚖️ **Law 22 — the data is the end of guessing.**

**THE SHAPE — additive, never breaking:**
1. **`slot` is an OPTIONAL field on a version**, sitting alongside the `ingredients` · `method` · `time` · `costPP` · `nutrition` each version already carries.
2. **A record's slot is its DEFAULT version's slot, when its versions carry one.** Vetkoek defaults to *Sweet (Jam & Syrup)* → **the record is `TREAT`**. Pick *Curried Mince (Maalvleis)* → **it reads `SUPPER`**.
3. **A record whose versions carry no slot behaves EXACTLY as it does today.** Recipe-level `slot` still wins where it is authored; derivation still runs where it is not. Nothing existing changes behaviour.

🩸 **THAT THIRD CLAUSE IS THE TEST FOR WHETHER THIS LANDED.** After MF131: **census 17 · doctor 9, unmoved — the ONLY change is `unresolved` 2 → 0.** *Any other number that moves means a record silently changed course, and that is a bug, not a bonus.* ⚖️ **Law 51.**

**⚠️ OPEN — NOT YET RULED: does a shelf ask the DEFAULT, or does it ask ANY version?**
Every consumer of `r.slot` today reads **one** value, so under this ruling they all read **the default version's**. That is right for some and wrong for others, and the difference is now visible:
- `MOOD_QUERY.sweet` (`core.js:2201`) asks `r.slot === 'TREAT'` — Vetkoek **passes** on its default. Correct.
- `MOOD_QUERY.lazy` / `.impress` ask for `SUPPER` — **Maalvleis Vetkoek can never surface**, because the record reads `TREAT`. A real supper is invisible to every supper shelf.
- ⛔ **And the trap: a shelf that matches on ANY version MUST OPEN THAT VERSION.** Match "supper" on Maalvleis and then open the record on *Sweet with jam* and she has been lied to. **Matching on any version is not a query change — it is a query change PLUS a "which version opened" change.** ⚖️ **Law 2.**

🩸 **AND THE QUERY CHANGE AND THE WHICH-VERSION-OPENS CHANGE SHIP TOGETHER, OR NEITHER SHIPS.** *Half of it makes the shelf **confidently wrong** rather than merely incomplete, and confidently wrong is the worse failure.*

**📏 MEASUREMENT READS THE FILED VALUE — RULED 21 Jul 2026.**
**Census rungs measure the record AS FILED — the default version's slot — and continue to do so even if "any version" later lands. One record must never count in two distributions.** **Measurement reads the filed value; display reads the version the user picked.** A rung that cannot be reconciled is the same failure as a **`PROVEN` key going quiet** (MF130): the number still prints, and it is no longer answering the question it claims to answer. ⚖️ **Law 36 — the count is truth. Law 42 — the ratchet only holds if it cannot be quietly released.**

**Nothing may change here without a ruling.** ⛔ **Do NOT flip any rung or shelf to "does ANY version qualify" unilaterally.**

---

### 🆕 🗄️ THE STORE — `tinzaStore`, THE ONE DOOR FOR USER STATE — **RULED 15 Jul 2026**
*The mirror of `normalizeRecipe()`: that door makes every RECIPE complete, this door makes every SAVE safe. Extends §7 — "today Tinza saves NOTHING except `tinzaTheme`." This is how it starts saving.*

**`tinzaStore` is a SEPARATE module. It does NOT touch the recipe door** (`normalizeRecipe` · `rec` · `getIngredients`). One versioned root key `tinza`; the whole blob migrates together.

**The shape (v1):** `{ schemaVersion:1, preferences:{}, favourites:[], plans:{}, pantry:[] }`

- 🔑 **THE KEY IS `source:section:id`. `source` ALONE IS NOT ENOUGH.** *Measured, not guessed* — **every** recipe's `source` is `'db'`, so **19 bare ids collide across rooms** (Potato Salad, coleslaw, hummus, tzatziki, chakalaka, chimichurri, guacamole… — mostly events↔braai and events↔spice). `db:potatosalad` is **both** `events/Potato Salad` and `braai/Potato Salad` — favourite one, the other lights up.
  ✅ **`source:section:id` = 2,083 distinct keys, ZERO collisions.** `section` is the true separator; `source` is KEPT so a future `user`/`chef` recipe can never collide with a `db` one. ⚖️ **Law 22 — the grep is the end of guessing.**
  *(🍲 Bobotie turned out SAFE already — `sp-bobotie` vs `cape-malay-bobotie` are distinct ids. The real collisions were plainer dishes. **This is why check 6 points at a genuine collision, not at bobotie.**)*
- 🚪 **`favKey(record)` STAMPS FROM THE RECORD.** A bare id **cannot** be stamped after the fact — **section is only knowable from the record.** `toggleFavourite` / `isFavourite` accept a record OR an already-stamped string. Callers pass what they already hold. ⚖️ **Law 6, one door.**
- 🗺️ **`plans` IS A SECTION-KEYED MAP, NOT A FLAT ARRAY.** `plans:{ braai:[…], buffet:[…] }`. Plans are section-scoped state — the **same** recipe sits in a Braai plan at 8 portions AND a Buffet plan at 40. Favourites are global state → flat `[]`. **The shape mirrors the meaning.**
  - **Blast radius:** a bug in one section's plan touches only its key — mirrors the standalones architecture 1:1.
  - **Partial-corruption survival:** one bad bucket resets alone; the rest live.
  - **No schema bump when rooms grow:** a new section is a new key defaulting to `[]`.
  ⛔ **DO NOT hardcode a section enum. Buckets are LAZY:** `getPlan(section)` returns `plans[section] ?? []`; `setPlan` writes the key on first use. **The store never contains a room name.** ⚖️ **Law 6.**
- 🛡️ **DEFENSIVE DEFAULT — DEGRADE, NEVER BLANK.** Root missing OR `JSON.parse` fails → fresh default state, **never throw.** ⚖️ **Law 3.**
- 🔓 **TIER-BLIND.** The store persists favourites/plans for **everyone.** The Favourites = Pro gate lives in the `core.js` gate layer — **NEVER baked into the store.**
- 🚪 **ONE DOOR.** No direct `localStorage` outside `tinzaStore.js`. The 2 `tinzaTheme` sites route through `getPref`/`setPref`. ⚖️ **Law 6.**

#### 🩸 THE THEME BUG THIS RULING NEARLY SHIPPED — **Law 20, in our own store**
`migrate()` **silently dropped her saved theme.** `_read()` returned `{root, legacyTheme}` but the wrapper matched on the storage-shaped `{tinza, tinzaTheme}` — so it fell through, treated the whole wrapper as the root, and **threw the legacy value away.** Green on "migration ran"; her setting gone.
✅ **Census check 13 now asserts the VALUE ARRIVES** (`'dark'` lands in `preferences.theme`), not merely that migration completed. ⚖️ **Law 20 — a metric that passes while the thing it measures is broken is worse than no metric.**
*(⚠️ **Tinza has NO theme toggle yet** — so no user can have set `tinozaTheme` through the app. The migration is correct INSURANCE for the day the toggle ships. **Open thread: what are the 2 `tinzaTheme` sites reading, if nothing writes it?** Worth a look — not a blocker.)*

**Census checks added (`tinza-census.js`):** 1 no `localStorage` outside `tinzaStore.js` · 2 root `tinza` + `schemaVersion===1` after `load()` · 3 `migrate(migrate(x))===migrate(x)` idempotent · 4 legacy `tinzaTheme` count `===0` post-migration · 5 favourites keyed by `source:section:id`, never a bare title · 6 `isFavourite()` on one of a genuine collision pair does NOT report the other.

---

### 🆕 🏷️ tinzaListLabel — THE ROOM GLOSS FOR MIXED-ROOM SHELVES — **RULED 15 Jul, corrected 16 Jul 2026**
*Multiple distinct records share a display name — Potato Salad in Braai + Events; Koeksisters in Bakes + Events. A recurring CLASS → ONE function, never a hand-list. `source` is `'db'` for everyone, so it is NOT a disambiguator — the human-facing separator is the ROOM.*

- 🚪 **`tinzaListLabel(recipe, context)` — ONE shared function.** Mirrors `tinzaDisplayName()`. Plain name when unique in-view; appends the room gloss — *"Potato Salad (Braai)"* vs *"Potato Salad (Events)"* — **only on an actual in-list collision.** Collision-driven, never hardcodes a dish name. Fires ONLY where rooms mix (Favourites, Just Feed Me). ⚖️ **Law 6 — one naming door.**
- 🧭 **THE GLOSS NAMES THE ROOM — THE NAVIGABLE DESTINATION — NEVER THE SHELF INSIDE IT.** It answers *where do I go to find this again?* and must name a real door. No Bakes screen, no Sides screen, no Beverages screen — they are shelves. So the map is **room-level**: several sections fold into one room word.
- 🔑 **KEY THE MAP ON `r.section` — WHAT A RECORD CARRIES — NOT THE ADAPTER ROSTER.** *Measured, not guessed:* 11 adapters emit **12 sections** — `adaptBakes` alone emits both `bakes` AND `sides`. A source-grep misses the two computed ones, and four real collisions ride on them (Koeksisters, Malva Pudding, Bread & Butter Pudding, Béchamel). ⚖️ **Law 22, sharpened — measure the OUTPUT records, not the code that appears to assign them.**

**THE TWELVE-SECTION MAP (`TINZA_ROOM_LABEL`, index.js):** `braai`→Braai · `world`→World Kitchen · `spice`→Spice · `health`→Health · `events`+`beverages`→Events · `meals`+`floor`+`bakes`+`sides`→Family · `tiny`→Tiny Tummies · `furry`→Furry Friends.

- 🛡️ **THE RATCHET (census check 16, Law 42).** Build fails if any section loses its room word, a cross-room pair ever reads the same, a lone dish gets glossed, or `()` renders. The hole cannot come back silently.

#### 🆕 THE "KNOWN LIMIT" IS MOSTLY DUPLICATES — AND WE ALREADY HAVE THE RULE
*40 groups collide; 29 disambiguate cleanly cross-room. Of the remaining 11, almost all are the SAME dish twice — not a labelling gap.*

- ♻️ **DUPLICATES → the established rule: THE MORE ELABORATE / BEST-DESCRIBED RECORD STAYS, the other is removed.** Covers plain dupes (Toum ×2 in Events; Vetkoek & Curried Mince ×2 in Family) AND casing-drift dupes ("Frango Piri-Piri (Peri-Peri Chicken)" vs "…(peri-peri chicken)"; "Apfelstrudel (Apple Strudel)" vs "…(Apple strudel)"). The casing drift is a **byproduct of the enticing-names standard applied unevenly** — one twin got the nicer wording, the other didn't. Reconcile under that standard; best-described stays. **CONTENT pass, backlog — NOT a `tinzaListLabel` change.**
- ⚖️ **THE ONLY TRUE RULED LIMIT: two genuinely-DIFFERENT dishes sharing a display name in the SAME room.** A room word cannot separate them (correctly). Rare once the dupes are cleared; any survivor earns a finer descriptor later. **A room gloss disambiguates ACROSS rooms — same-room separation is a separate, later mechanism.**

#### 🆕 NO DOUBLE GLOSS — FIX AT THE NAME
"Béchamel (White Sauce)" + a room gloss would stack two brackets. **The brackets don't need to be there — the words "White Sauce" do.** Rename the record → **"Béchamel White Sauce"**; the room gloss then appends clean: *"Béchamel White Sauce (Family)"*. A plain-English descriptor folds into the name — it was never a cultural-hero gloss like the WK `Native (English)` heroes, which keep their bracket. *(Content fix on the record. If a true WK bracketed hero ever collides cross-room, the room gloss uses a middot rather than a second bracket — optional, not needed today.)*

*(Corrects the 15 Jul draft: map is 12 sections not 10, keyed on `r.section`; "source disambiguates" was wrong — source is provenance, not a label; the known limit is mostly duplicates resolved by the best-described-stays rule, leaving only genuine same-room different-dish pairs as the true limit.)*

---

### 🆕 🚪 SECTIONS ARE DISTINCT DESTINATIONS — SAMENESS GOVERNS RENDERING, NOT EXISTENCE — **RULED 15 Jul 2026**
*Raised because "section-agnostic store" sounded like it threatened the rooms. It does not. Two questions, two layers.*

- 🚪 **"WHERE DO I GO?" — navigation. Rooms are 100% REAL.** World Kitchen · Feed My Family · Spice · Braai · Events · the rest — each stays a distinct place with its **own front door, own shelves, own My Plan.** Nothing on any chopping block.
- ⚙️ **"HOW IS IT BUILT?" — rendering. Everything is SHARED.** Every room renders through the same `core.js` functions. **Different content, different door — identical furniture.** *That* is sameness.
- 🗄️ **"SECTION-AGNOSTIC STORE" IS PLUMBING ONLY.** `tinzaStore` never memorises the roster — it holds whatever a section hands it. Navigation still knows every room; the storage layer beneath simply doesn't need to. **Adding Bar Planner needs zero store changes.**
- 🔀 **Cross-section mixing happens ONLY in deliberately cross-section shelves** — Favourites, Just Feed Me / MOOD_DB. Every actual room stays its own place.

#### 🔍 EVERY SCROLLABLE LIST OF RECIPES GETS A SEARCH — **RULED 25 Jul 2026** *(Tina)*
*Not a new feature. “Search bar every screen” was ruled long ago; this states the LINE so it can be measured instead of judged.*

- ✅ **The line: any screen showing a scrollable LIST OF RECIPES gets a search box.** Spice › Spice Blends & Masalas is 40 entries with pills and no search — a screen. It gets one.
- ❌ **A hub of TILES does not.** The Spice Room front door is six tiles; there is nothing to scan past. Tiles are a menu, not a list.
- ⚖️ **Because it is mechanical, it is censusable.** Count the rooms that render a recipe list, count the ones with a search slot, fail on the difference. A line you can measure is a ratchet; a line you argue about is a taste.
- 🔧 **ONE shared renderer, rolled to ALL rooms at once** — never a search box hand-rolled per room. ⚖️ Sameness: different content, different door, identical furniture.
- 🩸 **THREE OF THE DOCTOR’S TEN REDS ARE THIS ONE PROBLEM** (measured 25 Jul): *rooms that do not use the shared header* · *rooms whose search box LIES (it navigates away)* · *rooms with a hand-rolled search input*. A search box that navigates away is worse than none — it **lies to the finger**. One sameness pass closes all three.

#### 🔎 ONE SLOT, ONE BEHAVIOUR — **THE SEARCH PILL NEVER NAVIGATES** — **RULED 25 Jul 2026** *(Tina)*
*The corollary to the ruling above. That one says WHICH screens get a search box. This one says the box may only DO one thing — because "every room has a search" is worthless if the search means something different in each room.*

- ⚖️ **THE SEARCH SLOT IS AN INLINE INPUT. FULL STOP.** You tap it, you type into it, results appear under it. It does not open a screen, it does not jump the finger somewhere else, it does not clear what you were looking at.
- 🩸 **MEASURED AT HEAD — BRAAI IS AN OUTLIER OF ONE.** `sectionHeader()` accepts two shapes and five rooms pass one. Four (`events` · `meals` · `worldkitchen` · `core`) pass `oninput:"liveSearch(...)"`. **Only `braai.js:28` passes `onclick:` — which sets `S.screen='search_results'` and calls `draw()`.** Same pill, same place on the header, two different behaviours. That is the drift, and it is one line wide.
- 🔴 **A SEARCH BOX THAT NAVIGATES AWAY IS WORSE THAN NO SEARCH BOX — IT LIES TO THE FINGER.** No box means you go look for a search. A box that jumps you to another screen means you tapped expecting to type and lost your place instead. The doctor is right to call this RED where "no search at all" is only a WARN.
- 🔧 **THE FIX FAILS LOUD: DELETE THE `onclick` BRANCH FROM `sectionHeader()`.** Convert Braai to inline, then **remove the branch entirely.** After that the lie is not a discipline anybody has to remember — it is a shape the door cannot make. ⚖️ Same mechanism as MF145: *drop the line and it goes RED*, not *drop the line and nobody notices*. A rule enforced by care is a rule already broken.
- 🩸 **THE DOCTOR IS DOUBLE-COUNTING — REDS #2 AND #7 ARE THE SAME ELEMENT.** Measured 25 Jul: all four "text inputs under 16px" that live in a room (`budget.js:84` · `furry.js:17` · `health.js:999` · `kiddies.js:109`) **are** the four "hand-rolled search inputs". One element, two reds. `sectionHeader()`'s slot is already `font-size:16px`, so migrating the four closes red #7 **and 4 of the 6 hits in red #2** — leaving only `utils.js:251` and `meals.js:15801`. ⚖️ **The sameness pass is worth FOUR of the ten reds, not three.** Count elements, not findings.
- ⚠️ **A HAND-ROLLED BOX CARRIES A HAND-ROLLED PALETTE.** `budget.js` and `furry.js` hard-code `rgba(6,16,8,0.85)` · `#3a2010` · `#c06020` — the **pre-reskin dark palette**. Those two rooms never got Phase 1. Migrating their header is therefore a **visible look change, not just plumbing** — expected, correct, and worth seeing coming. ⚖️ The master template already says it: render via `core.js` using `var(--token)`, never hand-rolled hex. The hex was the tell all along.
- 🧮 **THE REMAINING PILE IS SMALL AND COUNTED.** 6 rooms off the shared header · 20 header sites total (`spice` 4 · `health` 6 · `furry` 1 · `budget` 1 · `tinyTummies` 8 · `barplanner` 1 — *corrected 25 Jul: its header is hand-rolled inline at `:214`, not absent*) · 24 hard-coded `#f5e8cc` ink calls, **15 of them in `tinyTummies` alone**. Tiny Tummies is over half the job; do it last and alone.

#### 🍸 A TOOL GETS A SUB-HEADER AND NO SEARCH — **RULED 25 Jul 2026** *(Tina)*
*Raised because MF146 could not tell whether Bar Planner was a room. It is not. It is the first named member of a third category, and naming the category settles every planner that comes after it.*

- ⚖️ **THERE ARE THREE THINGS, NOT TWO.** A **ROOM** is a front door with a photo header and a search. A **SHELF** is a scrollable list inside one. A **TOOL** is a thing you *operate* — you give it numbers, it gives you an answer. Bar Planner, Buffet and the Weekly Planner are tools.
- 🔎 **A TOOL GETS NO SEARCH BOX.** *Tina, 25 Jul: "No it doesn't get one."* ⚖️ The 25 Jul test — *a scrollable recipe list gets a search, a hub of tiles does not* — does not even apply here: there is **nothing to search**. Bar Planner holds no recipes. It holds guests, hours and a split. A search box on it would be a slot rendered because the template had one, which is the exact failure sameness exists to prevent. **Sameness means the same slot behaves the same way, not that every screen carries every slot.**
- 🏷️ **A TOOL GETS A SUB-HEADER, NOT A ROOM HEADER.** *Tina, 25 Jul: "yes, i think it needs a sub header."* Bar Planner lives **under Beverages, under Events** — a 170px photo header would announce it as a sixth room and break the trail back. The sub-header is smaller, carries the title and the one-line what-this-does, and keeps the ← Beverages return visible.
- 🔧 **THE WORK — `sectionHeader()` GAINS A `sub:true` MODE; NOBODY HAND-ROLLS A SECOND HEADER.** ⛔ The temptation here is to leave `barplanner.js`'s inline header alone *because it is "only a sub-tool"*. That is how it got a hard-coded dark palette in the first place. **A tool renders through the shared door too** — same function, smaller variant, `var(--token)` throughout. ⚖️ Never hand-roll hex; the hex was the tell all along.
- 🩸 **MEASURED AT HEAD, 25 Jul — WHAT THE "MISSING HEADER" ACTUALLY WAS.** `barplanner.js:214` builds a 170px block inline with `🍸`, a Fraunces title and a subtitle, over `#1a1208`/`#0f0e0c`/`#e0d4b8` — **pre-reskin dark, hard-coded**. The doctor reported *no `<h1>`* and the brief read that as *no header*. It was never missing. It was **unmigrated**, and it rendered its own private palette on top of a warm-light app. ⚖️ **Law 19 — a grep miss is not a measurement.** *An absent `<h1>` means the tag is absent, not that the header is.*
- ⛔ **AND IT LEAKED THE OLD PRICE.** The non-Pro upsell in `barPlannerHTML()` still pitched **"for R50/mo"** — live, to every non-Pro visitor, on the one screen whose whole job is to sell the feature. ⚖️ Same shape as the `tierBar` leak: silent, no error, found only by opening the file. **The R50→R90 sweep becomes a census assertion, not a memory item** — a stale price must go RED, not wait to be noticed.


*Raised because sauces are scattered across Braai, Events, World and Spice with no motivation behind what went where. The scattering was never a taxonomy failure — it is “shelves are queries, not lists” not yet having reached the hand-authored rooms. A room that must FILE a dish files it wherever the author was working that night.*

- ⚖️ **MERGE BY DEFAULT. SPLIT ONLY WHERE THE CONSTRUCTION GENUINELY DIFFERS — and a split DECLARES WHY.** Same dish, same construction, same basis → **one record, many tags.** Bobotie is still seen in World Kitchen, Events and Feed My Family; there is simply **one of it**.
- 🩸 **THE BILL, ALREADY PAID.** Peri-Peri existed three times and the copies **DRIFTED** — three constructions, one with a vessel and two without, one costed per-head and one per-batch. That cost a full session to diagnose. Three copies means every ruling costs **3×**: the WOW pass, the R50→R90 sweep, allergen tokens and locale swaps must each find every copy or the rooms quietly disagree.
- 🛠️ **THE MERGE PROCEDURE — MOST COMPREHENSIVE WINS, THEN ENRICH.** Take the most comprehensive/effective record as the base; then **walk the losers and add every feature the base LACKS** — a holder, a `didYouKnow`, a verified `goesWith`, a version, a storage line. ⛔ **A merge must never lose a feature.**
- 🩸 **WHY THE ENRICH STEP EXISTS:** *sameness is not finished.* The copies are **unevenly complete** — the best record is not best at everything. “Keep the most comprehensive” on its own would silently drop whatever the runner-up did better. **Fold in, then delete.**
- 💚 **FAVOURITES FIX THEMSELVES.** The store key is `source:section:id`. Three records = three keys, so hearting Bobotie in World Kitchen leaves it un-hearted in Events. **One record = one key = the heart follows the dish everywhere.** The merge repairs a bug rather than creating one.
- ⚠️ **CATCH 1 — `section` DOES DOUBLE DUTY.** It currently means both *where the record is stored* AND *which room shows it*. A query-room pulls those apart: a record needs a **primary room** (for the label, the heart key, `tinzaListLabel()`) plus an **appears-in** list. One line per record — same shape as `equipment` and `yieldBasis`.
- ⚠️ **CATCH 2 — ONE RECORD CARRIES ONLY ONE SCALING BASIS.** Events scales off one `S.eventGuests`; Braai has the portion brain; Family has soft-6. Where the **dial itself differs**, the copies **stay split** and each declares its basis (⚖️ MF145). *This is exactly why `braai:periperibraai` and `spice:peri-peri-sauce` both survive — “how much for my 10 guests” and “make me a bottle” are different questions.*
- 🔗 **CROSS-LINKS COME AFTER THE MERGE, NEVER BEFORE.** A link from Events Peri-Peri to Spice Peri-Peri is a link from a thing **to itself**. Cross-links are for genuinely different things — like the Braai salad → Spice dressing link. Wire them once the triage is done, or you will wire links between copies and unwire them later.
- 🌍 **THE OUTSIDE WORLD AGREES.** Paprika assigns **multiple categories to one recipe**; NYT Cooking publishes **one canonical recipe** surfaced through 125+ curated collections. Neither has a duplication concept. **But neither has rooms that OWN recipes, a portion brain, or per-room plans — Tinza's rooms are STRONGER than their categories.** The answer is not “become Paprika”: **keep the rooms as strong front doors, stop letting them own the record.**



> 🩸 **Sections are distinct navigable destinations rendered by shared machinery. The shared functions SERVE the rooms; they do not dissolve them.**

---

## 📁 12 · WHERE FILES LIVE — **RULED 20 Jul 2026**
*Raised because root drifted from 11 files back to ~18 in five days. New files default to wherever they land. A written map means a file has a home BEFORE it is created, not after root is untidy again.* ⚖️ **Law 52 — said twice, so it is written down.**

- 🧪 **THE TEST — ONE QUESTION: does this file CHANGE, or is it only READ?**
  - Read every session, by every AI, unchanged → **root.**
  - Accumulates, gets ticked off, gets superseded → **`reference/`.**
  - Has a date in the filename → **`Archive/`.**

**ROOT HOLDS CANONICAL ONLY — TWELVE FILES, THREE KINDS:**
- 📗 **The four governing documents** — `CLAUDE.md` · `TINZA_LAW.md` · `TINZA_RULINGS.md` · `TINZA_NOW.mermaid`
- 🏗️ **The four build files** — `index.html` · `netlify.toml` · `README.md` · `.gitignore`
- 🔧 **The four tools you RUN BY NAME** — `tinza-census.js` · `tinza-doctor.js` · `tidy-repo.sh` · `reconnect-photos.sh`

**THE FOLDERS:**
- 📐 **`standards/` — the HOW.** Timeless "this is how we build it" documents. `TINZA_STANDARD.md`, `WOW_STANDARD.md`, `MOOD_STANDARD.md`, `TINZA_WK_STANDARD.md`.
- 📋 **`reference/` — the WHAT, and the working docs.** Queues, backlogs, briefs, staging, handoffs. `TINZA_FIX_QUEUE.md`, `TINZA_IDEAS_BACKLOG.md`, `MOOD_RECIPE_STAGING.md`, every MF brief, `NEW_CHAT_HANDOFF.md`, `BEERBOX_CAKE.md`.
- 🗄️ **`Archive/` — dated snapshots and superseded docs.** Board SVGs live here.
- ⚙️ **`sections/` · `Images/` · `Tools/` · `netlify/` · `.claude/`** — already correct. Leave them.

- 🔧 **THE TOOLS STAY AT ROOT — THEY ARE COMMANDS, NOT DOCUMENTS.** *(Ruled 20 Jul.)* `node tinza-census.js` is typed in dozens of sessions and referenced by name in `CLAUDE.md` and in the briefs. Moving them into `Tools/` would break every one of those references and buy nothing. **`Tools/` is for supporting files that are never invoked directly.** The distinction is not "is it code" — it is **"do you type its name?"**

- 🅿️ **KNOWN DRIFT, PARKED FOR THE TIDY DAY.** Two jobs, deliberately NOT done in this push (⚖️ Rule 1 — one job per push):
  1. **Root cleanup** — `MOOD_RECIPE_STAGING.md`, `NEW_CHAT_HANDOFF.md`, `BEERBOX_CAKE.md`, `tinza_board_16jul.svg` are committed at root and belong in `reference/` / `Archive/`. Moving them makes git renames — own commit, own day.
  2. **Section drift inside THIS file** — every ruling after 15 Jul (LOCALE · the normaliser · the store · `tinzaListLabel` · sections-are-destinations) sits as a `###` sub-block **under `## 11 · LAUNCH BLOCKERS`**, which is structurally wrong: the store is not a sub-point of launch blockers. They want promoting to top-level `## 12`–`## 16`, which moves this section to `## 17`. **Same tidy day, same commit.**

---

## 🏷️ 13 · BRAND NAMES — **GENERIC IS STORED, THE BRAND IS RENDERED** — **RULED 20 Jul 2026**
*Raised over Tennis biscuits and Crunchie in the SA impress list. Tina's call: generic first, brand in brackets — **and it has to work globally.** That last clause is what decides the architecture.*

- 🌍 **THE BRACKET IS NOT PART OF THE INGREDIENT NAME.** Storing `"Coconut Biscuits (Tennis)"` hardcodes South Africa into 2,083 records. A British reader gets a brand that is not on her shelf, and every locale means re-authoring every ingredient line. **Store the generic. Hold the brand in a per-locale map. Render the bracket.**
- 🔁 **THIS IS THE `name` / `nameAlt` PATTERN, APPLIED TO INGREDIENTS.** Exactly as `tinzaDisplayName()` renders *Lula Grelhada (Grilled Calamari)* from two stored fields, the ingredient line renders *Coconut Biscuits (Tennis)* from a canonical name plus a locale brand. **Canonical is stored; the gloss is rendered.** ⚖️ **Law 6 — one door, and we already built it.**
- 💰 **COSTING IS UNAFFECTED — MEASURED, NOT ASSUMED.** `priceClean()` (core.js:1169) already strips parentheses before lookup: `.replace(/\([^)]*\)/g,' ')`. So `Coconut Biscuits (Tennis)` resolves to `coconut biscuits` either way. **The engine already wants generic-first.**
- 🌐 **ONE LINE SERVES EVERY COUNTRY.** SA renders `(Tennis)`, the UK renders `(Rich Tea)`, a locale with no equivalent renders nothing at all. A brand that reformulates or dies is a **one-line map edit**, never a library sweep.

### 🏆 THE FOUR TIERS
1. 🏆 **THE DISH IS THE BRAND → THE NAME STAYS.** *Peppermint Crisp Tart* is a named national dish; renaming it makes it unfindable. The dish name keeps the brand; the **ingredient line still goes generic** — `mint chocolate flake bar` + locale bracket.
2. 🔤 **BRAND AS SHORTHAND FOR A GENERIC PRODUCT → CANONICAL IS THE GENERIC.** Tennis · Marie · Romany Creams · Bar One · **Aromat**. **No exceptions — Aromat is not special.** Canonical `savoury seasoning salt`, SA bracket `(Aromat)`, elsewhere `(Vegeta)` or nothing. Ubiquity in one country is exactly the thing that does not travel.
3. 🍳 **MAKEABLE → AUTHOR IT AND CROSS-LINK.** **Honeycomb is case #1** — zero in the library, and it is *not* a mission: sugar + golden syrup + bicarb, ~10 minutes. The mission is the chocolate coating, and for crushing over a Dom Pedro or an Affogato you never coat it. **Call it `Honeycomb`, never "Crunchie"** — the bakes room already holds `Crunchies`, the SA oat traybake, and that is a same-room name collision no room gloss can solve.
4. 🥃 **SPIRITS AND LIQUEURS FOLLOW TIER 2, NOT AN EXEMPTION.** `Orange Liqueur (Cointreau)` · `Coffee Liqueur (Kahlúa)` · `Marula Cream Liqueur (Amarula)`. The generic travels; the bracket localises. *Amarula is close to a category of one, and that is fine — the pattern still holds.*

### 🩸 WHY THE BRAND STAYS VISIBLE AT ALL — **Tina's reason, 20 Jul**
*Naming the actual product you are cooking with is legitimate and normal; no manufacturer objects to being named as the thing in the packet.* **Tennis and Marie biscuits are not home-bakeable to the same texture, and most readers simply want to buy them.** A from-scratch recipe may exist for the person who wants it, but the ingredient line must respect the shopper. ⚖️ **Law 16 — a cook's rule is not a shopper's rule.**

### 📋 THE MEASURED WORK (9 real cases app-wide — small and fixable)
- **Rename to canonical:** `tennis biscuits` ×5 → *coconut biscuits* · `Romany Creams` ×1 → *chocolate coconut sandwich biscuits* · `Bar One` ×1 → *chocolate caramel nougat bar* · `Aromat` ×1 → *savoury seasoning salt*.
- ⚠️ **PRICE FLATTENING — A REAL CONSEQUENCE, NOT COSMETIC.** PRICE_DB holds `tennis biscuits: 115`, `coconut biscuits: 90`, `marie biscuits: 90`. Because the bracket is stripped, renaming moves those five recipes from **R115/kg to R90/kg**. *Accepted deliberately: the generic is the substitutable thing — buy the cheaper packet, pay the cheaper price.*
- 💸 **THREE PRICES ARE MISSING ENTIRELY.** No `amarula`, `kahlua` or `cointreau` key exists, so every liqueur line currently costs **R0**. Needed before Dom Pedro, Amarula Affogato or Strawberries Romanoff can be costed. ⚖️ **Law 11 — Tina sources the prices.**
- ❌ **FALSE POSITIVES — DO NOT TOUCH.** *Ouma se Soetpampoen* (Afrikaans for grandmother, not the rusk brand) · *Tex-Mex* (not the chocolate bar) · *Crunchies* in bakes (the oat traybake, a generic SA dish name).

---

## 🧂 14 · NO FLAVOUR POWDERS — **BUILD FLAVOUR FROM INGREDIENTS** — **RULED 20 Jul 2026**
*Raised over Aromat in the brand sweep. Tina: "it's not real cooking." The line is drawn at **pure MSG and flavour-enhancer powders only** — deliberately narrow, so it holds.*

- 🧭 **THE TEST — IS IT AN INGREDIENT, OR A POWDER THAT MAKES ANYTHING TASTE LIKE SOMETHING?** Soy sauce tastes of soy sauce. Fish sauce tastes of fish sauce. **A flavour enhancer tastes of nothing in particular and makes everything taste vaguely of itself.** That is the line, and it is about *cooking*, not chemistry.
- ❌ **OUT:** pure MSG / monosodium glutamate · **Aromat and seasoning-salt blends built on it** · "flavour enhancer" sachets.
- ✅ **IN — these are ingredients with their own character and are NOT affected:** soy sauce · fish sauce · miso · anchovies · parmesan · tomato paste · dried mushrooms · Marmite. **⚠️ Do NOT write a rule against glutamate** — it occurs naturally in every item on that list, and banning it would gut the Asian and Italian sections by accident.
- 🍲 **STOCK CUBES AND POWDER ARE ALLOWED — this is an SA reality call.** MSG-free stock is essentially unavailable in South Africa, and most cooks neither know nor mind. **Refusing stock would make the app unusable, not principled.**
- 🥣 **BUT — EVERY RECIPE THAT CALLS FOR STOCK MUST OFFER THE HOMEMADE VERSION.** *(Tina, 20 Jul — the clause that makes this a standard rather than a ban.)* Cross-link, never force. **The better path is always available; the shortcut is never shamed.** ⚖️ **Law 16 — a cook's rule is not a shopper's rule.**
- 📏 **MEASURED, 20 Jul (`92105af`) — the cross-link is buildable TODAY:**
  - **9 homemade stocks already exist in the Spice Room:** Beef · Chicken · Vegetable · Fish Stock, plus Chicken · Beef · Fish · Lamb · Pork Bone Broth.
  - **188 recipes call for stock** (world 93 · meals 49 · events 17 · health 15 · furry 7 · tiny 4 · braai 3).
  - **The ruling connects two things that already exist** — and lifts the Spice stocks out of the `CONDIMENT` slot where nothing surfaces them.
  - **MSG / Aromat appears in exactly ONE recipe** (`Umbhona`). That is the entire cleanup.
- 🧹 **BLOCKER ON THE CROSS-LINK — the stock ingredient names must be tidied first.** Measured in use: `stock` ×26 (bare — *which* stock?) · `beef stock` · `Beef stock` (casing drift) · `Vegetable stock` · `vegetable or chicken broth` · `Low-sodium chicken stock` · **plus 18 mojibake variants** (`beef stock Â`, `stock Â`, `broth Â`). **A cross-link cannot match reliably against six spellings of one thing.** Fold into the mojibake/costing pass.

> 🩸 **Tinza builds flavour from ingredients, never from flavour powders. Where a shortcut is unavoidable, the honest version is always one tap away.**

*(Tina's personal preferences — homemade stock always, no Marmite — are noted as preferences, NOT law. The ruling binds only the flavour-powder line above.)*

---

## 🍽️ 15 · A VERSION IS A FULL RECIPE — AND THE PLAN HOLDS THE VERSION — **RULED 21 Jul 2026**
*Raised off the Bobotie card, read end to end on live: six versions, each with its own ingredient list, method, tip, did-you-know, cost and nutrition. Tina: **"we must do all the variations like this one."** MF131 had already ruled that SLOT lives on the version — reading all six proved slot was only the FIRST field to move, and that a plan cannot hold a recipe which has not chosen one.*

### 🏆 15.1 · A VERSION IS A FULL RECIPE, NOT A NOTE ON ONE

- 📖 **Every version carries its OWN ingredients, method, tip, `didYouKnow`, cost and nutrition.** Nothing stubbed, nothing inherited by proxy. **Bobotie is the reference implementation.**
- ⛔ **A STUB VERSION IS WORSE THAN NO VERSION.** It presents as a choice and delivers nothing — and after MF131 it also carries a slot, a cost, an allergen set and a plan entry. **A chip that cannot do what it says is a lie.** ⚖️ **Law 3.**
- 📏 **MEASURED 21 Jul on live, all six:** Classic 560 kcal · R266 / R38pp — Quick 510 · R238 / R34 — Budget 480 · R182 / R26 — Lentil 430 · R168 / R24 — Pumpkin 540 · R287 / R41 — 1600s lamb 540 · R329 / R47.
- ✅ **THE COST ORDERING IS ITSELF A CORRECTNESS CHECK — AND IT PASSED.** Lentil cheapest · lamb dearest · Budget under Classic · Quick under Classic *(no raisins, no almonds, 10 g less mince)* · Pumpkin over Classic *(+200 g pp)*. **Every number moved the direction its own ingredient list dictates.** ⚖️ **Law 22 — the render is the measurement.**
  🔢 **Doctor candidate (⚖️ Law 42):** a version's `costPP` must move with **its own** ingredient list, never with the record's.

### 🪜 15.2 · THE FAME LADDER — HOW MANY VERSIONS A DISH EARNS

*`WOW_STANDARD.md` already rules count by fame (5/4/2/1). What it never gave was a **TEST** for which rung a dish sits on — and "very well known" means one thing to Tina at 11pm and something else to an agent reading the brief cold in six weeks.*

| rung | the test | examples |
|---|---|---|
| **5** | national dish or global household name · **genuine** dietary forks · documented history | bobotie · spaghetti bolognese · lasagne · curry |
| **4** | widely known, one or two real forks | shepherd's / cottage pie · chicken pie |
| **2** | common dish with one obvious variation — usually budget or quick | most of the rooms |
| **1** | everything else | most of the 1,877 |

- 🍴 **A FORK COUNTS ONLY IF PEOPLE ACTUALLY COOK IT.** A vegetarian version invented to fill a slot is a stub, and 15.1 already forbids it.
- ⚠️ **TEMPTING EXCLUSION — BUNNY CHOW IS BELOVED, SA-ICONIC, AND STILL A `2`.** Icon status is not five real forks. **Never pad a rung with stubs to reach its number.**
- 🩸 **15.1 AND 15.2 ARE READ TOGETHER.** Bobotie sets the **QUALITY BAR PER VERSION** — never the count. *"Make them all like bobotie"* read on its own becomes an unfinishable job before October.

#### 🏅 THE RUNG MUST BE **STORED**, NOT INFERRED FROM THE VERSION COUNT — **RULED 21 Jul 2026**

*Tina, 21 Jul: **"we must give preference to these variations, it's better meals."** The intent is right — a dish that earned five versions IS a better meal. **The proxy is not**, and the measurement says why.*

- 🚨 **VERSION COUNT TODAY MEASURES AUTHORING PROGRESS, NOT FAME.** Measured 21 Jul: **only 88 of 733 budget-pool meals carry versions — 12%.** Library-wide **203 of 2,083 — 10%.** Rank on "has versions" and **the sort becomes a map of how far the authoring sweep got.**
- 🩸 **§15.2's OWN RUNG-5 EXAMPLES DISPROVE IT:**

  | rung-5 dish | records | with versions | **bare** |
  |---|---|---|---|
  | curry | 33 | 4 | **29** |
  | bobotie | 2 | 1 | **1** |
  | bolognese | 2 | 2 | 0 |

  **Twenty-nine curries would sink below an authored rung-2 dish** that happened to get written first. **Exactly backwards.**
- ❌ **FAME IS NOT STORED ANYWHERE.** Measured: no `fame`, `rung`, `tier` or `rank` field exists on any record. §15.2 defines the **test** and nothing carries the **answer.**
- ✅ **THE RULING: STORE THE RUNG AS A FIELD. RANK ON THE RUNG.** Then an **unauthored rung-5 curry ranks correctly the day it is written**, before it has a single version — and authoring progress stops contaminating the sort.
- 🎁 **THE SAME FIELD IS THE AUTHORING QUEUE, FOR FREE.** *Rung 5 with zero versions* is precisely the list of what to write next. **One field, two jobs.**
- ⚖️ **THIS IS LAW 47 AGAIN, ON A NEW AXIS.** *A diet is a FACT, not a word in a sentence.* **Fame is a FACT, not a count of how much work we did.** Derive it once, store it, query it.

### 🧬 15.3 · WHICH FIELDS LIVE ON THE VERSION — **MF131, WIDENED**

- 🧪 **THE TEST: IS IT DERIVED FROM THE INGREDIENT LIST?**
  - ✅ **ON THE VERSION:** `slot` · `costPP` · `nutrition` · `allergens` · `diet`.
  - ✅ **ON THE RECORD:** `storage` · `freezes` · `fridgeDays`. *Measured: "Keeps 3 days; reheats beautifully" is identical across all six bobotie versions — and correctly so.*
- 🔁 **The record's value for any version-level field is its DEFAULT VERSION's value.** *(MF131, unchanged.)*
- ✅ **COST AND NUTRITION ALREADY DERIVE PER VERSION** — verified on screen, six for six. This clause mostly **ratifies what the code already does**, which is the cheapest kind of ruling to make.
- 🔴 **ALLERGENS AND DIET ARE THE OUTSTANDING HALF — AND ALLERGENS IS A SAFETY FIELD, NOT A TIDINESS ONE.** Classic carries **almonds**; the other five do not. **Nuts is one of the ten R146 tokens.** A record-level allergen set is FALSE whichever way it falls — either Budget falsely warns nuts, or Classic falsely does not. Likewise `diet`: **Lentil is V** *(eggs and milk, so not VE)* and Classic is neither — **one record-level diet tag cannot be true for both.**
- ⚠️ **CONFIRM THE NODE DERIVATION READS VERSIONS.** If it reads record-level ingredients only, then `derived 1877` was computed off **default versions alone** and silently under-counts. ⚖️ **Law 36 — measure it, do not assume it.**

### 🛒 15.4 · THE PLAN HOLDS A VERSION, NOT A RECORD

*Tina, 21 Jul, off the vetkoek card: you can add **"Vetkoek"** to a plan; you cannot add **"Vetkoek (Cheese)"**. The shopping list is what settles it.*

- 🩸 **A LIST FOR "BOBOTIE" IS NOT BUILDABLE.** *Beef mince or brown lentils* is not a detail a shopping list can defer. **Add-to-plan per version is not a nicety — it is the only thing that makes the list buildable at all.**
- 🔑 **PLAN KEY BECOMES `source:section:id:version`.** Same class of fix as the `source:section:id` correction that closed the **19 bare-id collisions** — the key was not specific enough to name the thing being stored. One level deeper, same lesson.
- 💾 **`schemaVersion` 1 → 2. MIGRATION: A STORED ENTRY WITH NO VERSION RESOLVES TO THE DEFAULT VERSION** — which is exactly what it already silently does, **so the migration changes nothing a user can see.** A migration that preserves current meaning is the only safe kind.
- 🔘 **ONE "Add to Plan" CONTROL PER PAGE, BOUND TO THE LIT VERSION CHIP**, labelled with the version name — *"Add Lentil to My Plan"* — via `tinzaListLabel()`. ⛔ **Not six buttons:** the chips already hold the choice, six buttons is the same state expressed twice and fights the scaler for space. ⚖️ **Law 6 — one door.**
- 🧾 **THE SHOPPING LIST BUILDS FROM THE VERSION'S INGREDIENTS,** and `tinzaListLabel()` splits the plan rows — two vetkoek versions in one plan read as **two distinct rows**, never two identical lines.
- 🔓 **THIS SETTLES THE OPEN QUESTION.** *"Does ANY version qualify"* for mood shelves was three coupled changes — **query · opener · plan** — and **the plan was the deciding one.** With the plan holding a version, the shelf may surface a version honestly and the opener opens what matched.
  💀 **Evidence it was never optional:** vetkoek shows on *"it's cold and cloudy"* but **NOT** in *Sweets*. The query reads the RECORD, the record's face is **Sweet** — so a sweet treat misses the sweet shelf, while a mood that fits the savoury version surfaces the sweet one. **Both halves wrong in the same direction.**
- ⏱️ **ORDER MATTERS — THE PLAN WORK SHIPS BEFORE THE VERSION AUTHORING SWEEP.** Author first and every version written **ships unreachable from a plan on the day it lands**; the backlog then grows faster than the fix.

---

### 💰 15.5 · **COST IS A FACT ON THE VERSION. THE BUDGET ROOM MUST QUERY IT.** — **RULED 21 Jul 2026**

*Tina, 21 Jul: **"it would be nice if someone can find a budget bobotie in here — that's why all prices must also be tagged, like Veg and V."** She is right, and §15.4 already did most of the work.*

- 🩸 **THE EVIDENCE, MEASURED AT HEAD — BOBOTIE:**

  | | costPP |
  |---|---|
  | **record** | **R34** ← *the only price Budget can see* |
  | Classic | R38 |
  | **Budget** | **R26** — *exists, priced, unreachable* |
  | Quick | R34 |
  | **Lentil** | **R24** — *cheaper still* |

  Ask Budget for **R26 a head and Bobotie does not appear.** The Budget Bobotie was authored, priced, and **the query has never once looked at it.**
- ✅ **THE DATA IS ALREADY THERE — THIS IS A QUERY FIX, NOT AN AUTHORING JOB.** **686 of 708 versions carry their own `costPP` (97%)**, and **`budget` is the single most common version name in the library — 49 of them**, 55 counting *budget stretch · thrifty · budget pot-roast*. **All 55 invisible to the room built for exactly that person.**
- 🪞 **IT IS THE SAME SHAPE AS THE VETKOEK EVIDENCE IN §15.4.** *The query reads the RECORD; the record's face is Classic; so a budget meal misses the budget room.* **One bug, two surfaces.**
- 🧮 **THE HONEST GAIN — IT IS IN THE MIDDLE, NOT AT THE BOTTOM:**

  | per person | now | by version | gain |
  |---|---|---|---|
  | R8 | 7 | 7 | **+0** |
  | R15 | 64 | 66 | +2 |
  | R25 | 187 | **221** | **+34** |
  | R30 | 284 | **329** | **+45** |
  | R40 | 441 | 476 | +35 |

  ⚠️ **THIS DOES NOT RESCUE THE R8pp SHOPPER.** Budget versions are *"a little more per person and meat comes back"* food, not floor food. **The locale nudge is what serves the bottom band; this serves R25–R40.** Do not let one be sold as the other.
- 🏷️ **COST BECOMES A QUERYABLE FACET, EXACTLY LIKE DIET.** Diet works because it is a **FACT ON THE VERSION**, derived in Node, never read out of prose (⚖️ Law 47). **Cost must be the same.** Then *"find me a budget bobotie"* stops being a special case and becomes an ordinary query.
- 🔁 **THE RECORD'S PRICE STAYS THE DEFAULT VERSION'S PRICE** (MF131, unchanged). This ruling adds a **reachable minimum**, it does not move the face.
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
- 🌍 **THIS PARTLY FIXES THE LOCALE SKEW ON ITS OWN — CONFIRM WHEN BUILDING.** The biggest hidden discounts are **disproportionately SA comfort food** — Gatsby, sosaties, bunny chow, bobotie. §11 measured the R0–R10 band at only **14% SA-reachable**; part of that is **SA budget versions being invisible, not absent.** Measure the band again after this ships **before** sizing the locale nudge.
- ✅ **RESOLVED → §2.5 (22 Jul): bobotie canonical = `meals`; the WK copy is now a live six-version DOUBLE, Code strips it.** *(original measurement note kept below — note the WK copy has since been versioned, so "with none" is out of date):* **SEEN WHILE MEASURING — A DUPLICATE:** **`Classic Bobotie` [meals] R34 with six versions** and **`Bobotie` [world] R26 with none.** The world record is bare and its single price equals the meals record's **Budget** version. Duplicate rule says *same dish + same name → keep the most comprehensive* — but these are **near-name, not same-name.** ⚖️ §2.3 — **ask Tina, do not infer.**
- ⛓️ **THIS IS NOT NEW WORK — §15.4 UNBLOCKS IT.** §15.4 ruled *query · opener · plan* as three coupled changes and settled the plan half. **Budget-by-version is those same three changes on a second surface.** Ship §15.4 and this becomes small. Ship this first and the plan cannot hold what the shelf surfaced. ⏱️ **ORDER: §15.4 FIRST.**
- ⛔ **DO NOT BOLT IT INTO `budget.js`.** Mood needs it, Budget needs it, and any future shelf that ranks on a number needs it. ⚖️ **Law 6 — one door.**

---

#### 🩸 15.6 · THE ADAPTER BINS WORLD KITCHEN'S VERSIONS — **FOUND 21 Jul 2026**

*Found because Tina sent three screenshots of World Kitchen cards **showing version chips** after Claude had reported "0 of 1,021 WK records have versions." **The screenshots were right.** ⚖️ Law 2.*

- 📍 **ONE LINE.** `sections/index.js:446` — the `section:'world'` adapter ends
  `photoName: r.name, versions:null`.
- 🩸 **THE DATA IS REAL AND IT IS BINNED:** **92 raw WK records carry versions — 213 version records in total. ZERO survive `allRecipes()`.**
  *Feijoada raw:* `[{name:"Classic",default:true},{name:"de Feijão Branco (White-Bean)"}]` → *via the index:* `[]`.
- 🖥️ **WHY IT LOOKS FINE ON SCREEN:** World Kitchen renders from the **raw arrays** (`WK_EUROPE` etc.) via `worldkitchen.js:728 → versionStripHTML`. **The card is honest. The INDEX is not.** So the chips show, and **Budget, Mood, search and every shelf query see nothing.**
- 🔁 **IT IS THE SAME BUG AS BRAAI, IN THE SAME FILE, 112 LINES APART.** `index.js:334` hard-codes `costPP:null` and bins Braai's cost (⚖️ Law 23). `index.js:446` hard-codes `versions:null` and bins World Kitchen's versions. **One adapter, two hard-coded nulls, two rooms amputated from every query.**
- ⚠️ **THIS BLOCKS §15.5.** *"Budget must query versions"* returns **nothing** for 1,021 World Kitchen dishes while this line stands. **Fix the adapter FIRST or §15.5 ships half-working and looks correct.**
- 📏 **WHERE FABLE ACTUALLY GOT TO** — measured from the raw arrays, the only honest source:

  | country | versioned | of |
  |---|---|---|
  | **Greece** | **54** | **54** ✅ complete |
  | **Portugal** | **33** | 52 ⏸ stopped 19 short |
  | Austria | 4 | 27 |
  | Cape Malay | 1 | 21 |

- 💰 **ONLY 1 OF THE 92 CARRIES A BUDGET FORK.** Fable wrote **cultural** forks — white-bean, lobster, lamb, mushroom. Good food, and **no help to the R26 shopper.** Tina, 21 Jul: *"a lot of these variations can have budget."* **That gap is real and it is hers to close.**
- 🧭 **THE LESSON ABOUT MEASURING:** three separate wrong answers were given about `worldkitchen.js` in one session — the country count, whether versions render, and whether versions exist — **every one of them from reading the ADAPTER'S OUTPUT and calling it the data.** ⚖️ **Law 36, sharpened: measure the SOURCE, and name which layer you measured.**
- ✅ **CENSUS CHECK CANDIDATE:** *no adapter branch may hard-code a reserved field to `null`.* Assert against `versions` and `costPP` in `index.js`; prove it by restoring either null.

---



## 🔗 16 · `goesWith` IS A PAIRING, NEVER A SIMILARITY — **RULED 21 Jul 2026**
*Raised by Tina off the vetkoek card, in four words: **"goes well with other deep fried stuff?"***

- 🍽️ **`goesWith` = WHAT SHARES THE PLATE OR THE MEAL.** Never the same dish family. Never a substitute.
  🧪 **THE TEST — would A and B be an odd thing to serve together? Then the link is wrong.**
- ❌ **THE FAILURE CASE, LIVE ON THE VETKOEK CARD:** *Amagwinya · Koeksisters · Doughnuts*. Those are not what you eat **with** vetkoek — **they are what vetkoek IS.** A similarity list wearing a pairing label.
- ✅ **THE CORRECT PAIRINGS — Tina, 21 Jul:** **fresh fruit** *(cuts the fried heaviness)* · **bacon or breakfast sausage** *(savoury against the jam)* · **scrambled or fried eggs** *(turns a snack into a breakfast plate)*.
- 🆕 **THE SIMILARITY RELATION IS REAL AND WORTH KEEPING — BUT IT NEEDS ITS OWN FIELD.** `similarTo` / *"if you like this"* — and it must **NEVER** render in the `goesWith` box. **Until that field exists, wrong links are REMOVED, not kept.** ⚖️ **Law 45 — a missing link beats a wrong one; unknown is not yes.**
- 🧹 **THIS IS A SWEEP, NOT A PATCH.** If vetkoek's `goesWith` was authored as *"similar deep-fried things"*, other cards were authored the same way. Every link verified against the real library — **C4**, `WOW_STANDARD.md`.

---

#### 🔗 16.1 · A `goesWith` ENTRY IS ONE OF **THREE** THINGS. THEY NEED THREE DIFFERENT FIXES. — **RULED 21 Jul 2026**

*Tina, 21 Jul, off the Bifana card: **"that is very important, the goes with."** Measured before ruling.*

- 🩸 **THE STATE AT HEAD:** **4,672 `goesWith` entries across 1,548 recipes. Only 1,176 — 25% — resolve to a real dish in the library.** 1,156 distinct labels do not.
- ⚠️ **BUT "DOES NOT RESOLVE" IS NOT THE SAME AS "WRONG."** Split three ways:

  | kind | n | the fix |
  |---|---|---|
  | **NON-DISH ACCOMPANIMENT** *(tea · coffee · beer · wine · mustard · lemon · cream)* | **463** | ✅ **CORRECT AS WRITTEN. KEEP.** A Bifana **does** go with mustard and beer. **It must render as PLAIN TEXT, never as a dead link.** |
  | **VAGUE PLACEHOLDER** *(bread · salad · rice · potatoes · vegetables)* | **560** | 🩸 **THE DEBT. REPLACE WITH A REAL NAMED DISH** — the library already has them: *"salad"* while **Greek Salad** exists; *"crusty bread"* while **Mielie Brood** and **Easy Beer Bread** exist. |
  | **NAMED BUT ABSENT** | **2,473** | ❓ **NEEDS EYES.** Either the dish gets written, or the link is removed. ⚖️ **Law 45 — a missing link beats a wrong one.** |

- 🍽️ **THE SPECIMEN:** `Bifana` [world · portugal] R22 — `goesWith: ["mustard","beer","chips"]`. **Two are correct accompaniments; one is a placeholder.** One card, two of the three kinds.
- ⛔ **DO NOT "FIX" ALL 3,496.** Rewriting the 463 correct accompaniments into dishes would make the field **less** true. ⚖️ **Law 22 — this is a risk list, not a bug list.**
- 🧭 **THE FIELD IS CARRYING TWO JOBS AND SHOULD PROBABLY CARRY ONE.** *"What shares the plate"* covers both **a dish you could cook** and **a thing you put on the table.** Only the first is linkable. **If they are ever separated, separate them by that test** — not by whether the string happens to match a recipe name.
- 📋 **`pickles` appears 64 times and the library holds NOTHING.** Either a content gap or an accompaniment. **Tina rules.**
- ⏱️ **THE 560 ARE THE SESSION.** They are unambiguous, the replacement dishes already exist, and they are the ones a user actually taps. Start there; leave the 2,473 until the rung pass says which dishes are coming anyway.

---


## 🔐 17 · DEV MODE IS A STORED FLAG ON TINA'S DEVICE, NEVER A URL — **RULED 21 Jul 2026**
*Raised as Week 1 item 2: close the `?dev` back door. Measured first (⚖️ **Law 36**), and the measurement moved the target — **`?dev` was never the money door. The tier switcher was, and it has no door at all.***

### 🩸 17.1 · WHAT THE MEASUREMENT FOUND — read at HEAD, 21 Jul

- 🔍 **`?dev` GATES TWO THINGS, BOTH DIAGNOSTIC. NEITHER IS WORTH MONEY.**
  1. `core.js:579` — the render-error boundary prints the real message + first stack line on screen *(MF44 · ⚖️ Law 19 — the tablet has no console)*.
  2. `index.js:454` — a `console.info` of World-Kitchen costPP-skipped coverage.
  **A stranger who guesses `?dev` gets an error message he did not want. That is the whole exposure.**
- 💀 **THE ACTUAL OPEN DOOR: `tierBar`.** Built `core.js:526`, rendered `core.js:621` as `root.innerHTML = tierBar + _body + bottomBarHTML()` — **unconditional, every screen, every visitor.** The 👑 Pro button sets `USER_TIER='pro'`, and `tierAllows('pro')` then opens cost · My Plan · shopping list · the whole nutrition grid · dietary filters · favourites.
- 🩸 **THIS IS THE SAME SHAPE OF BUG AS `tierAllows(){ return true; }`** — the one already recorded at `core.js:693` as *"All features unlocked."* **We closed the function and left the switch next to it.** ⚖️ **Law 20 — the fix that fixes one half.**
- 📊 **SCALE: the chef leaked $2.02 of lifetime spend. The tier bar leaks the entire R90 product.** The smaller hole was found first because it had a bill attached; **this one is silent, which is exactly why it survived.**
- ✅ **CONFIRMED ON LIVE, 21 Jul 13:00 — `tinza.netlify.app` with NOTHING after it.** The strip renders. ⚖️ **Law 2 — Tina's eyes closed it.** *(The first eleven screenshots were all taken on `/?dev` and could not settle it either way; the clean-URL shot is the one that counts. Noted because "I looked and it was there" is not evidence until the URL is checked.)*

### 🔑 17.2 · THE RULING — ONE FLAG, STORED, GESTURE-ARMED

- 🚪 **`tinzaIsDev()` STAYS THE ONE DEFINITION.** ⚖️ **Law 6.** Nothing else may read a dev flag; nothing else may invent one. *(This clause is already true and is hereby ratified, not built.)*
- ❌ **THE `?dev` QUERY PARSE IS DELETED.** A URL flag is shareable, screenshottable, guessable, survives being pasted into WhatsApp, and lands in Netlify's request logs. **It is a password written on the door.**
- ✅ **DEV BECOMES A STORED PREFERENCE — `tinzaStore.getPref('dev') === true`.** It lives in `preferences` on Tina's device, through the one state door *(`tinzaStore.js`, §11)*. It cannot be shared, linked or guessed, and it survives a reload, which `?dev` did not once you tapped anything.
- 🖥️ **LOCALHOST STAYS AUTOMATIC.** `localhost` / `127.0.0.1` → dev, no gesture. **Nobody else can be on her localhost.**
- 👆 **THE GESTURE ARMS IT: SEVEN TAPS ON THE "Appearance" HEADING ON THE PROFILE SCREEN** *(`profileHTML()`, `core.js:354`)*. Seven is past accident and short of a chore. **A gesture, not a typed secret — because the tablet is where dev mode is actually needed and typing a URL on it is the thing we are removing.**
- 🔴 **WHEN DEV IS ON, IT SAYS SO, AND SAYING SO IS THE OFF SWITCH.** A visible strip — *"🔧 DEV MODE ON · tap to turn off"*. ⛔ **A hidden flag with no visible state is how you ship a debug build.** ⚖️ **Law 3 — the screen never lies about what it is.**
- 🛡️ **FAIL CLOSED.** Anything other than a stored `true` → **false**, exactly the shape `tierLevel()` already uses for an unknown tier. **Fresh device, incognito, cleared storage → not dev.**

### 🧱 17.3 · WHAT DEV GATES — THE LIST IS CLOSED

**Three things, named here, and nothing joins the list without a ruling:**
1. 🖥️ the on-screen render-error block *(`core.js:579`)*
2. 📊 the costPP-coverage `console.info` *(`index.js:454`)*
3. 👑 **the tier switcher — NEW, and the reason this ruling exists**

- ⛔ **DEV MODE MUST NEVER *BE* PRO. IT ONLY SHOWS THE SWITCH.** Dev renders `tierBar`; `tierBar` sets `USER_TIER`; `tierAllows()` reads `USER_TIER`. **Three separate things, and they stay separate** — because at launch **PayFast** sets the tier, and a dev flag that implied Pro would make the real gate permanently untestable. ⚖️ **Law 7 — the lock is the salesman, so the lock must be the thing we can see working.**
- 🩸 **THE FAILURE THIS CLAUSE PREVENTS:** `tinzaIsDev() → tierAllows('pro') === true` would look like a convenience for one session and would mean **Tina can never again see her own app as a free user sees it.** The switcher exists precisely so she can.

### 📋 17.4 · THE WORK — ONE JOB, ONE PUSH

| # | change | file · line |
|---|---|---|
| 1 | delete the `?dev` regex, read `tinzaStore.getPref('dev')` instead | `core.js:445` |
| 2 | **wrap `tierBar` in `tinzaIsDev()`** — the strip and its three buttons | `core.js:621` |
| 3 | seven-tap arm on the *Appearance* heading | `core.js:354` |
| 4 | the visible **DEV MODE ON** strip, tap = off | `core.js` (with `tierBar`) |
| 5 | census check: `tierBar` never reaches `innerHTML` ungated | `tinza-census.js` ⚖️ **Law 42** |

- ⚠️ **`USER_TIER` IS `let USER_TIER = "free"` AT `data.js:113` AND IS *NOT* PERSISTED.** So a free user who taps Pro today loses it on reload — **which is why nobody has reported it.** ⛔ **That is not a mitigation, it is luck, and it disappears the day the tier is stored for PayFast.** Fix the gate now, while it is four lines.
- 🚫 **`maxMeats()` at `core.js:710` still reads `USER_TIER==="free"` directly instead of `tierAllows()`.** Out of scope for this push — **logged to `TINZA_FIX_QUEUE.md`, not fixed here.** ⚖️ **Rule 1 — one job per push.**

---

📌 **HOW TO USE THIS FILE**
1. **Tina rules something → it goes in HERE, in the same breath, with the DATE and the REASON.** ⚖️ Law 52.
2. **`CLAUDE.md` points here.** Every session, every AI, reads it before touching code.
3. **Any ruling with a number becomes a doctor check.** ⚖️ Law 42 — the ratchet.
4. ⛔ **If this file and the code disagree — THE FILE IS RIGHT AND THE CODE IS A BUG.**

---

## 🐟 18 · THE WHOLE FISH LAW — **PRICED WHOLE → WRITTEN WHOLE** — **RULED 21 Jul 2026**

**The ruling.** Where an ingredient is **bought whole and cooked whole**, the ingredient line carries the **trolley weight** — what she puts on the scale in the shop — and the **method** states the edible yield. Never the other way round.

- ✅ `Snoek — 1.5kg gutted whole (bone-in)` … method: *"flakes down to roughly 750–800g off the bone."*
- ❌ `Snoek flakes — 780g` — a weight that exists in no shop, at a price key that does not match it.

**Why.** The price key and the ingredient line must describe **the same object**. The moment they diverge, the cost is a plausible number with nothing behind it — and a plausible number never announces itself.

**Yields banked (measured 21 Jul, use these):**

| fish | bought as | flaked yield |
|---|---|---|
| **snoek** | gutted whole, bone-in | **50–55%** *(use 52.5%)* |
| **maasbanker** | whole round | **40–45%** *(use 42.5%)* |

**Prices locked** (`prices.js`, commit `e1c4649`): snoek **R147/kg** · snoek fillet **R120** · smoked snoek **R450** · maasbanker **R60** · whole mackerel **R60** · tinned mackerel **R92**.

**The fish ladder — R/kg of flakes actually in the bowl:**
pilchards **R65** · tinned mackerel **R92** · maasbanker **R141** · braai snoek **R314** · hot-smoked snoek **R450**.
⟶ **Snoek is ~5× pilchards off the bone.** Any "budget" fish version starts here.

**Species facts — check before any `didYouKnow`:** snoek = *Thyrsites atun* (**not** Thyrsatoxus). SA maasbanker = *Trachurus capensis* (*T. trachurus* is North Atlantic).

---

## 📏 19 · A GREP MISS IS NOT A MEASUREMENT — **RULED 21 Jul 2026**

**The ruling.** In a **bilingual library**, a search that returns nothing proves **nothing**. One language, one spelling, one accent-form is not the corpus.

**How it was earned.** Claude grepped for "snoek tart", found nothing, and reported the recipe **absent**. Tina typed it into the app's own search and it came straight up — **Korslose Snoek-en-Uietert**, `wk_southafrica:128`, aliases already including "Snoek Tart". *Her app beat Claude's grep.*

**The rule that follows.** Before declaring anything absent: search the **Afrikaans** name, the **English** name, the **aliases** array, and — where it exists — run it through the app's own `searchNorm` path. A hand-rolled matcher is a **probe**, and a probe that disagrees with the real search is **wrong by definition**. ⚖️ Companion to Law 39.

---

## 🔒 20 · INVARIANT, NOT FEATURE — **RULED 21 Jul 2026**

**The ruling.** Every change ships with an **invariant assertion** — a number that must be identical before and after, measured, not claimed.

**Tinza's invariant:** `allRecipes() === 2083`, **and every section non-empty.**

**Why this one.** An adapter that throws inside its own `forEach` **silently deletes a whole section**: no error, no console, `node --check` clean, and the census RED count does not move. It is invisible to every instrument on the bench. Only the count catches it.

**Filed as CENSUS CHECK 25** — `allRecipes() === 2083` · every section count > 0. Prove it by re-introducing the fault: an adapter that throws must go **RED**.

**⚖️ `node --check` proves the file parses. It proves nothing about the data.**

---

## 🥒 16.1 CONFIRMED · PICKLES ×64 = ACCOMPANIMENT — **21 Jul 2026**
The 64 `pickles` entries in `goesWith` are **non-dish accompaniments — correct, keep them.** They are not part of the 560-placeholder debt. **Zero work.** Do not "fix" them.

---

## 😴 21 · MOOD — WHAT **"JUST FEED ME"** IS — **MERGED INTO ROOT 24 Jul 2026**
*Ruled 14 Jul 2026. Was stranded in the Tools rulings copy — carried into root 24 Jul so `/rule` finally holds it. ⚖️ Law 15.*

**A shelf is a QUERY, not a LIST.** ⚖️ Law 15. *`MOOD_DB` (`core.js`) began as 12 moods × 3 hand-typed recipes = 36 — 2% of the app. The deep shelf is a query over `allRecipes()`.*

### 🎭 THE VOCABULARY IS **12 MOODS. LOCKED.** — **CONFIRMED 24 Jul 2026**
> ⛔ **STRUCK 24 Jul 2026 — the old note "SWEET SPLITS IN TWO → 13 MOODS" is DEAD.**
> *Tina ruled 24 Jul: **we keep it at 12.** The split into a 13th "sweet & savoury supper" mood is not happening. The 12-mood vocabulary is the whole truth. A correction is written, dated and marked struck — never silently dropped.* ⚖️ §2.3.

### 🚫 MOOD DISQUALIFIERS — **NEVER SERVED IN A MOOD**
⛔ **Tinned meat** *(bully beef · spam · viennas)* · ⛔ **instant noodles** · ⛔ **tinned pâté**

> 🩸 **EXHAUSTED IS NOT POOR. EXHAUSTED IS NOT DESPERATE.**
> **She is tired, not broke. She still wants REAL FOOD — just EASY.**
> **Cheap food belongs in 💰 I've Got R100 — that room is ABOUT the price.**
> **A mood is about how she FEELS.** ⚖️ **Law 23 — one room, one question.**

### 🍟 21.1 · A MOOD SERVES A MEAL — **THE SLOT GATE** *(ruled 26 Jul, Tina)*

**Her find, on live:** *"I went to Just Feed Me, I want to be healthy, and chips is a recipe that comes up."*

⚖️ **THE QUESTION WAS NEVER "IS CHIPS HEALTHY". IT IS "IS CHIPS A MEAL".** Nobody opens Just Feed Me wanting a bowl of chips — **or a bowl of steamed broccoli.** Both are sides. The mood asked to be **fed**.

- 🩸 **MEASURED — THE GATE ALREADY EXISTS AND `healthy` IS THE ONE MOOD THAT SKIPS IT.** `core.js:2270` allows six slots *(`SUPPER · LUNCH · BREAKFAST · SIDE · STARTER · TREAT`)*, but `core.js:2291` defines `_MOOD_MEALSLOT = ['SUPPER','LUNCH','BREAKFAST']` and **five moods already use it** — `exhausted` · `quick` · `pickmeup` · `lazy` · `impress`. `healthy` *(core.js:2293)* checks diet and **nothing else**, so `SIDE` and `STARTER` walk through.
- ⚖️ **THIS IS AN INCONSISTENCY, NOT A NEW DESIGN.** Five moods have the gate; one does not. ⚖️ **Law 6.**
- ✅ **RULED: every mood that promises a MEAL gates on `_MOOD_MEALSLOT`.** `sweet` keeps `TREAT` — it promises a treat, and ⚖️ **Law 23, one room one question**, cuts both ways.
- ⛔ **DO NOT FIX THIS BY RE-TAGGING CHIPS.** Every fried, sugary or refined vegetarian record passes the same test; re-tagging one dish moves the symptom onto the next. ⚖️ **The predicate is the bug, not the record.**

### 🥗 21.2 · **HEALTHY IS NOT A DIET** — DEEP-FRIED IS A SIGNAL, NEVER A VETO *(ruled 26 Jul, Tina · build = MF123)*

`core.js:2293` reads `healthy: r.section==='health' || _moodDiet(r,['vegan','vegetarian','pescatarian'])`.

⚖️ **THAT FILTER ASKS "DOES THIS CONTAIN AN ANIMAL?" AND CALLS THE ANSWER "HEALTHY."** Slap Chips is potatoes and oil — **vegan** — so it passes. **Diet and health are two different facets and this line conflates them.** *(⚖️ Consistent with DIETARY (locked 12 Jul): diet is derived from ingredients in Node, never by hand — that ruling makes diet a FACT. Health is a JUDGEMENT, and must be built from facts, not borrowed from diet.)*

- ⛔ **DEEP-FRIED IS A SIGNAL, NOT A VETO — TINA'S CONSTRAINT, AND IT IS THE DESIGN.** Her words: *"In general deepfried foods arent healthy, but its not always the case."* **Falafel is deep-fried chickpeas. Tempura is deep-fried vegetables.** A blanket deep-fried veto would cull real food and would be wrong.
- ✅ **BUILD IT FROM THREE FACTS THE APP ALREADY HOLDS:**
  1. **TECHNIQUE** — deep-fry is nameable from the method *(`reference/TINZA_TECHNIQUES.md`)*.
  2. **PLATE SHARE** — vegetable/legume grams as a share of per-person grams. **Every ingredient already carries `pp`; this is computable today, no new authoring.**
  3. **ADDED SUGAR** — from the ingredient list, same derivation as diet.
- ⚖️ **THE SHAPE:** `healthy` = **meal-slot** AND **plant-or-lean-protein-forward** AND NOT (**deep-fried** AND **starch-dominant**).
  *Chips → out at the slot gate. Fish & chips → a MAIN, so it survives the slot gate and falls at starch-dominant-and-fried. **Falafel and tempura survive** — legume/vegetable-dominant. Her nuance, made mechanical.*
- 📋 **DERIVED IN NODE, NEVER BY HAND** *(⚖️ DIETARY, locked 12 Jul)*. **Two layers, two sessions:** 21.1 is small enough to ride with the Just Feed Me button fix; **21.2 is MF123 and needs its own session.**

### 🪜 THE SHELF BEHIND THE PICKS
- ✅ **The hand-picked curated set stays — as the CURATED TOP.** *(They carry a mood-framed `why` no query can write.)* ⚖️ **Law 11.**
- ✅ **A QUERY over `allRecipes()` is the DEEP SHELF behind them.** 🏆 **Budget already does this** — `_budgetPool()` + curated floor. **LIFT IT, don't invent it.** ⚖️ **Law 35 · Law 50.**
- 💰 **The paid chef only wakes when the shelf is THIN.** *(A deep query means Tinza stops paying Anthropic to invent food Tina already wrote.)*

---

## 🔌 22 · LOAD-SHEDDING — **A FIRST-CLASS FILTER. NOT A MOOD.** 🏆 — **MERGED INTO ROOT 24 Jul 2026**
*Ruled 14 Jul 2026. Was stranded in the Tools rulings copy. Carried into root 24 Jul.*

- **`noPower` = the method needs NO oven, NO grill, NO air-fryer.** *(Gas hob, braai fire, no-cook, and anything already baked all pass.)*
- 🪟 **It sits NEXT TO THE DIETARY FILTER** — a standing filter on the whole app, not a mood tile. *A mood is how she feels. The power being off is a FACT about her kitchen.*
- 🔒 **It is a PRO feature.**

> 💰 **NOBODY OUTSIDE THIS COUNTRY WOULD THINK OF IT. This is a moat.**

### 📌 STATUS — **RULED 24 Jul 2026**
- 🟠 **NOT BUILT.** *Verified 24 Jul against live HEAD: zero code references to `noPower`/loadshed anywhere in `sections/`.*
- ⏳ **BUILD QUEUE: LAST.** *Tina, 24 Jul: "we do still have load-shedding here, but not so frequent anymore." It stays a real ruling and a real feature — it just sits at the back of the queue behind everything shipping for October.*
- 📏 *The ~1,197-recipe figure from 14 Jul must be re-measured by census at build time, not trusted.* ⚖️ Law 19.

---

## 🏛️ 23 · THE SLOT COLUMN *(the 12th)* + `mood[]` *(the 13th)* — **MERGED INTO ROOT 24 Jul 2026**
*Ruled + LOCKED 14 Jul 2026. Was stranded in the Tools rulings copy. Carried into root 24 Jul. ⚖️ Law 11 — derived in NODE, never by hand. Law 45 — empty means `unknown`, never "no".*

### 📅 THE 12th — THE MEAL SLOT
✅ **THE COLUMN IS `slot`. BUILT. `unknown` = 0 of 2083.** *(Commits `f429a17` · `c05096a` · `d9b4922` · `4020da1`.)*
🩸 **WHY:** *recipes that don't know breakfast-from-supper are why an "I'm exhausted" query once handed her Boererusks for supper.*

**THE TEN TOKENS — the canonical vocabulary. ⚖️ Law 46 — nothing outside this list may ever enter the column.**
**Counts below are LIVE — measured by `tinza-census.js` on 24 Jul 2026, not the 14-Jul figures.** ⚖️ Law 22.

| token | n *(24 Jul)* |
|---|---|
| **SUPPER** | 797 |
| **TREAT** | 311 |
| **SIDE** | 258 |
| **CONDIMENT** | 232 |
| **STARTER** | 119 |
| **DRINK** | 117 |
| **LUNCH** | 106 |
| **BREAKFAST** | 63 |
| **PETFOOD** | 62 |
| **BABYFOOD** | 18 |
| `unknown` | **0** — *the final fallback. Emptied, never deleted.* ⚖️ **Law 45.** |

*(Sums to 2083. The exact numbers move as recipes are added/re-slotted — the **vocabulary** and the **zero-unknown invariant** are what is locked, not the counts.)*

- ⛔ **STARTER DOES NOT FOLD INTO TREAT.** *A samosa is not a dessert.*
- ⛔ **SIDE DOES NOT FOLD INTO SUPPER.** *A chakalaka is not dinner.*
- ⛔ **THE TOKEN NAMES THE FOOD, NEVER THE ROOM.** `PETFOOD`/`BABYFOOD` — **not** `FURRY`/`TINY`. ⚖️ **Law 46.**

### 🚨 THE COLLISION — AND THE TRIPWIRE THAT GUARDS IT
💀 **World Kitchen has a field called `occasion`** *(festival · Christmas · street-food · everyday)* — **NOT a meal slot.**
✅ **Left untouched** — a "when in life" tag, useful later for 🎉 Events.
🩺 **`tinza-census.js` §11 fires if any `occasion` value ever leaks into `slot`.** *(Verified holding 24 Jul: the axis is clean.)* ⚖️ **Law 42.**

### 📏 DERIVATION ORDER *(most specific first — index.js `slot()`)*
`mealCat` → `cat` → `course` → **SECTION rule** → **`mealRole` fallback** → `unknown`
*(WK strays: `course:'soup'` → **SUPPER** — soup is a main in SA. `course:'salad'` → **SIDE**.)*

### 😴 THE 13th — `mood[]`  *(a data column — NOT a 13th mood; the mood vocabulary stays 12, §21)*
- ⚖️ **DERIVED from TIME + SECTION + INGREDIENTS.**
- ⛔ **NEVER matched against the `feel` PROSE.** ⚖️ **Law 47 — that is how a vegan got a lamb tagine.**
- ⚠️ **`impress` and `pickmeup` are PURE TASTE. Not derivable. They stay hand-picked.** ⚖️ **Law 11.**

---

## 🔙 24 · THE TWO BACKS — **RULED 25 Jul 2026** *(Tina, on live, in World Kitchen)*

> ⚖️ **THE PROPOSED LAW "A SCREEN WITH TWO BACKS HAS ONE EXIT" IS STRUCK BEFORE IT WAS EVER FILED.**
> It was wrong. Two Backs are not a duplicate — **they are two different jobs**, and Tina had already designed it that way.

### 🧭 THE TWO JOBS

| | job | goes |
|---|---|---|
| **BOTTOM Back** *(spine)* | **step back ONE level** | egg recipe → Eggs → Breakfast → Family Meals. **Never Home on the first press.** |
| **TOP Back** *(header)* | ~~go UP to the ROOM front door~~ **⛔ SUPERSEDED 26 Jul — see §24.9: EXACTLY TWO LEVELS UP** | *(the two-jobs split itself stands; only the top Back's destination changed)* |

- ✅ **THE TOP BACK EXISTS SO SHE CAN GO SIDEWAYS.** From an egg recipe to Supper is *Family Meals → Supper* — **two taps, not four.** Delete it and the bottom Back gets pressed three times to do the same thing.
- ⚖️ **A TOP BACK MUST NAME WHERE IT GOES.** `← Family Meals`, `← World Kitchen`, `← Home`. **A Back labelled just "← Back" that lands somewhere different depending on how you arrived is a liar** — census 8 already tests this for the six that go Home; it now tests all of them.
- ⚖️ **ON A ROOM'S OWN FRONT DOOR THE TOP BACK READS `← Home`.** There is nothing above the room. *(Answers the 25 Jul open question.)*

### 🌍 ~~OPTION A — RULED, WORLD KITCHEN INCLUDED~~ **⛔ STRUCK 26 Jul 2026 — superseded by §24.9 (two levels up)**

> ⛔ **STRUCK.** *(kept visible + dated per §2.3 — never silently rewrite a ruling)*
> ~~The top Back goes to the ROOM FRONT DOOR. Everywhere. No room bends the rule.~~
> The 25 Jul cost note stands as the reason it fell: from Boerekos, Cape Malay — its own neighbour — meant re-drilling Africa → Southern Africa, **two extra taps on the likeliest next move**. One day on live was enough: Tina ruled **exactly two levels up** on 26 Jul. The sprint plan carried the new rule from day one; this file lagged it — caught 27 Jul, the §2.2 lag shape again.
> **What SURVIVES from the old §24, unchanged:** the two-jobs split *(top ≠ bottom)* · a top Back must NAME where it goes · on the room's front door it reads `← Home` · Option B's law — **never two buttons doing one job on the same screen** *(§24.9 obeys it: bottom = one up, top = two up, never equal)*.

### 🐛 WHAT WAS ACTUALLY BROKEN *(measured at HEAD, 25 Jul)*

1. **`worldkitchen.js:308`** — the country header said `← World Kitchen` and cleared `wkScreen` + `wkDataCountry` but **not `wkContinent`/`wkRegion`**, so it re-rendered the *region list*. **The label was not lying on purpose. It was two keys short.**
2. **`worldkitchen.js:190`** — **ONE header serves both the continent grid and the region list** *(the drill happens in the content area, so the header never learns she went deeper)*. It read `← Home` on both and **walked out of the room from both.** Now it asks its own depth.
3. **`navSignature()` — the real one.** ⬇️

### 🚨 THE FINDING UNDER THE FINDING — **navSignature() IS A CONTRACT, NOT A LIST**

`draw()` pushes a history entry **only when `navSignature()` changes.** A level the signature cannot see is **a level Back cannot walk** — `goBack()` step (3) finds nothing and falls through to step (4), which dumps her on Home.

- 🩸 **THE SIGNATURE WATCHED `wkCountry` AND `wkSelectedRegion` — WHICH NO ROOM HAS EVER WRITTEN** *(they appear only in the signature itself and the tier-switcher clear-down, which therefore also never reset World Kitchen)* — **while the real drill `wkContinent → wkRegion → wkDataCountry` went completely unseen.**
- 🕳️ **ELEVEN blind keys across FIVE rooms:** `wkContinent` `wkRegion` `wkDataCountry` `wkDataTab` `wkCourseTab` *(WK)* · `healthGroupTab` *(Health)* · `mealPlanView` *(FMF)* · `catSection` `dogSection` *(Tiny Tummies)* · `barMode` *(Bar Planner)*.
- ✅ **TEN ADDED. THE SAME SYMPTOM IN FIVE ROOMS HAD ONE CAUSE.**
- ⛔ **NEVER PATCH `goBack()` FOR THIS. ADD THE KEY.** ⚖️ **Law 6.** goBack() step (4) is **correct** — it is the deliberate 3 Jul fix that stops Back walking into an unrelated earlier screen. It only *looked* wrong because the rooms gave it nothing to walk.
- ⏸️ **`S.cookStep` DELIBERATELY NOT ADDED** — Back in cooking mode should **exit the mode**, not walk twelve steps backwards. **Tina's call, still open.** `S.searchPrevScreen` is a **memo, not a level** — it stays out.
- 📋 **FOUR DEAD KEYS LEFT IN ON PURPOSE** *(`wkCourseTab` `wkTab` `kiddiesView` `healthTab`)* — always empty, so they cost nothing, and **deleting keys on a tool's say-so is how a live key gets buried.** Reported, not removed.

### 🩺 CENSUS 8 RUNG ⑤ — **THE WATCHER**

> **Every key a room navigates by must appear in `navSignature()`; every key it watches must be written by some room.**

- ✔️ **Proven RED** by removing `wkContinent`/`wkRegion` — the original bug, reproduced on demand.
- ⚖️ **THE TWO SIDES USE DELIBERATELY DIFFERENT EVIDENCE.** Blind spots test **strictly** (`S.key` only) or the delta verbs `addStep`/`swapStep` sweep in and it cries wolf. Dead keys test **leniently** (`S.key` **or** `key:`) or three live keys written only as `set({wkSACulture:…})` get **buried alive**. *Each side errs the safe way.*
- 🩸 **THE INSTRUMENT LIED TWICE BEFORE IT TOLD THE TRUTH.** First it scanned `core.js` and **counted `navSignature()`'s own reflection** — clean bill, nine false deaths. Then, once comments were in, it read **the prose naming a key dead** and **re-animated it off my own sentence.** ⚖️ **Law 19 — a measurement that includes the measurer is not a measurement.** Comments are now stripped before scanning.


### 🍳 24.1 · COOKING MODE — **BACK EXITS THE MODE** *(ruled 25 Jul, Tina)*

- ✅ **Cooking mode is not a PLACE. It is a MODE a recipe is put into** — full screen, one step at a time.
- ⛔ **Back does NOT walk the steps backwards.** Twelve steps would cost **twelve presses to leave**, and the twelfth would land on the recipe she was already reading.
- ⚖️ **THIS IS WHY `S.cookStep` STAYS OUT OF `navSignature()`** — no history entries, nothing to walk. `goBack()` step **(0c)** clears `cookRecipe` + `cookStep` and returns her to the recipe.
- 🩸 **IT WAS ALSO BROKEN:** `S.cookRecipe` was in no signature either, so Back fell through to step (4) and **dumped her on Home from mid-cook.**

### 🎉 24.2 · A FRONT DOOR IS A PLACE YOU GO TO, NOT A THING YOU CARRY

**Events, ruled 25 Jul from live.** The five-tile grid *(Big Buffet · Finger Foods · Celebration Cakes · Kiddies · Beverages)* rendered on **every** Events screen; picking a tile only called `eventsScrollToContent()` to **scroll past it**. So scrolling back up to reach the top Back **walked her through all four tabs she had not chosen.**

- ✅ **THE TILE GRID NOW RENDERS ONLY WHEN NO TAB IS OPEN.** Open Finger Foods and you are **in Finger Foods** — nothing else.
- ✅ **THE HEADER NAMES THE TAB** *(title, emoji and tagline all switch)* and its Back reads **`← Events`**, returning to the tile grid. On the grid itself it reads **`← Home`**. ⚖️ **§24.**
- ✅ **THE GUEST BAR STAYS VISIBLE INSIDE EVERY TAB** — it is the **ONE Events guest count** (§2.2) and it drives every portion on screen.
- ⚖️ **THE COST, SAME AS WORLD KITCHEN AND ACCEPTED THE SAME WAY:** Finger Foods → Cakes is **Back to Events, then Cakes** — two taps. **A rule that bends per room is not a rule.**
- 📋 **CENSUS 8 RUNG ⑥ — BORN RED ON PURPOSE:** **14 header Backs are labelled just `← Back`** *(events ×6, spice ×2, health ×2, kiddies ×2, meals, core)* and **name no destination.** The **bottom** Back may be anonymous — it always means one level. A **header** Back is a jump and must say where. ⚖️ **Law 22 — a RISK LIST, not a same-session fix.**
- 🩸 **THE INSTRUMENT LIED A THIRD TIME.** The `goBack()` matcher used a **fixed 2400-character window**; the §24.1 comment pushed the function past it, the matcher stopped reading before the call it was looking for, and it reported the *already-fixed* search bug as unfixed. ⚖️ **Law 19 — an instrument with an arbitrary limit measures the limit, not the code.** Now matched to the closing brace.

### 🧭 24.3 · ONE SCREEN, ONE TOP BACK — **`eventsTopNav()` IS DELETED** *(ruled + built 25 Jul)*

**EVENTS SAMENESS, STEP 1 OF 4.** `eventsTopNav()` hand-rolled a **`← Events / 🏠 Home` PAIR** and three screens rendered it **on top of a `sectionHeader()` that already carried a Back, on a spine that already carried Home.**

- 🩸 **MEASURED ON KIDDIES: FOUR WAYS OUT OF ONE SCREEN** — the header's Back, the strip's `← Events`, the strip's `🏠 Home`, and the spine's Home. On kiddies the strip rendered **ABOVE the photo header**, so the first thing on the screen was a duplicate of the second thing.
- ⚖️ **THIS IS THE §24 TEST, APPLIED:** two Backs are allowed **only when they do two different jobs** — bottom = one level, top = the room front door. `eventsTopNav()`'s `← Events` did **the same job as the header's Back**, and its `🏠 Home` did the same job as the spine. **A second answer to a question that already has one is not a shortcut, it is a contradiction.**
- ✅ **DELETED, NOT DEPRECATED** — the definition (`events.js:53`) and all three call sites (`buffet.js:94`, `buffet.js:140`, `kiddies.js:46`) are gone.
- ⚠️ **THE CATCH THAT MADE A BARE DELETION WRONG:** `buffet.js:136` was labelled **`← Home`**. Buffet **bypasses the Events tab wrapper** and renders its own header, so the *only* route from Buffet back to Events was the strip. Deleting the strip alone would have **stranded Buffet inside Events with no way back to it.** The header now carries the job: **`← Events`**, using `eventsTopNav()`'s own unchanged payload. ⚖️ **A helper is only safe to delete once its JOB has a new home.**
- ✅ **KIDDIES NEEDED NOTHING** — all four `kidsHeader()` call sites already pass a Back that names its destination (`← Events`, `← 12 Themes`, `← <theme>`). Measured before cutting.
- 📋 **CENSUS 8 RUNG ⑦ — `No screen hand-rolls its own room-nav pair`.** Proven by re-introducing the call in `kiddies.js` → **RED at 1**, then restoring → GREEN. ⚖️ **A rung that cannot fail is not a rung.** The rung **strips comments before matching** — the §24.3 comment block names `eventsTopNav()` three times, and *(Law 19, learned the same day)* **prose is not evidence.**
- ⛔ **DO NOT REBUILD IT.** If a screen cannot reach its room, give that screen's `sectionHeader()` the right `backJs`/`backLabel`. **Never bolt a strip above the photo.** ⚖️ **Law 6.**
- 🚦 **STEPS 2–4 ARE NOT THIS SESSION** *(one per session, her eyes between each)*: ② `sectionHeader() sub:true` · ③ collapse buffet's seven headers · ④ the 14 anonymous `← Back` labels.
### 🚪 24.4 · THE DOOR IS NOT THE ORIGIN — **RULED 25 Jul 2026** *(Tina, on live, in Boerekos)*

**Her words:** *"I went into Boerekos Bobotie, and on that photo the top back said Cape Malay. If I clicked on the recipe to open it, and after it opened I clicked bottom back, I landed in Bobotie Cape Malay."*

A dish can sit on **more than one shelf**. Bobotie's country is **Cape Malay**; it is *also* carried on **Boerekos**, along with Yellow Rice, Tamatie Bredie, Melktert and Hertzoggie — five deliberate dual-culture records. *(Boerekos = 50 own + 5 shared = the 55 on her screen.)*

- ✅ **THE DOOR SHE WALKED THROUGH OWNS THE BACK.** Enter Bobotie from Boerekos → the top Back reads **`← Boerekos`**. `S.wkDataCountry` **is** the door.
- ✅ **THE ORIGIN CHIP DOES NOT MOVE. Bobotie stays CAPE MALAY.** ⚖️ **Tina, 25 Jul:** *"it's a truth Boerekos doesn't want to accept, but only a few people actually know this."* **The shelf can change; the dish's origin cannot.**
- 🩸 **THE BUG, MEASURED:** `worldkitchen.js:140` built the open call from **`r.country`**, so tapping Bobotie on the Boerekos shelf ran `wkOpenRecipe('Cape Malay')` — and that setter's own comment reads *"so Back lands on this country's list."* **The door re-labelled itself behind her**, and both Backs were then honestly returning her to a shelf she had never walked through. `RECIPE_BUILDERS.world` repeated it, feeding `item.country` into the Back label.
- ✅ **THE CODE WAS ALREADY SHAPED FOR THIS RULING** — `wkRecipeOpts` keeps `backLabel:'← '+country` *(the door)* and `meta:{origin:r.country}` *(the truth)* in two separate slots. Only the wrong value was being handed to the door slot. **Nothing was redesigned; one argument was corrected in three places.**
- ⚠️ **THE TRAP IN THE FIX:** the shelf renders via `.map()`, which passes **(item, INDEX, array)**. A bare `.map(wkRecipeCard)` would hand the new second parameter **0, 1, 2…** instead of a country — silently, with no error. Callers must use `.map(function(x){ return wkRecipeCard(x, country); })`. **This is watched, not remembered.**
- 📋 **CENSUS 8 RUNG ⑧ — four assertions**, proven by re-introducing **both** failure shapes *(the `r.country` open → RED · a bare `.map` → RED)*, then restoring → GREEN.
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

- 🩸 **THE BUG:** `core.js`'s leave-World-Kitchen reset cleared **`wkScreen` · `wkDataCountry` · `wkDataRecipe`** — and stopped. **`wkContinent` and `wkRegion` survived the exit**, so walking out of Boerekos and back in from Home re-opened Southern Africa. Nothing threw; the room simply remembered.
- 🩸 **THE SAME TWO KEYS AS THE §24 HEADER BUG, THE SAME EVENING** *(worldkitchen.js:308 — "the label wasn't lying, it was TWO KEYS SHORT")*. Twice in one night, in two unrelated functions. **`wkContinent` and `wkRegion` are the two keys everybody forgets** — which is exactly why the list stops being remembered and becomes a function.
- 📊 **MEASURED BEFORE CUTTING — five hand-rolled resets, FOUR of them short:** `core.js:599` *(3/5, missing wkContinent + wkRegion)* · the three tier-switcher buttons `core.js:610–612` *(4/5, each missing wkDataRecipe)* · and `worldkitchen.js:321` *(5/5 — the only complete one, and it was written the session before as the §24 fix)*.
- ✅ **ONE DOOR: `wkResetDrill()`** in `worldkitchen.js`, over `WK_DRILL_KEYS = ['wkScreen','wkContinent','wkRegion','wkDataCountry','wkDataRecipe']`. All four short sites now call it. ⚖️ **Law 6 — five places hand-rolled the same list and four got it wrong. That is not carelessness, that is the wrong shape.**
- ⛔ **A LEVEL MOVE IS NOT A RESET.** `← continent` nulls **`wkRegion` alone** and must keep doing so. Stepping up one level is not leaving the room, and `wkResetDrill()` is not for it.
- 📋 **CENSUS 8 RUNG ⑨ — two assertions, all three failure shapes proven RED then GREEN:** her exact bug *(drop wkContinent + wkRegion → **RED, naming both**)* · the door renamed → **RED at 0 definitions** · a second definition → **RED at 2**. It ignores any statement nulling fewer than 3 drill keys, so a step-up never cries wolf. ⚖️ **Law 22.**
- 🩸 **THE INSTRUMENT ALMOST SHIPPED BLIND AGAIN.** The door-exists probe was first written `/function wkResetDrill/` — which **still matches `wkResetDrillX`**, so renaming the door passed GREEN. Worse, every caller is guarded by `typeof`, so a renamed door **fails silently and falls back**. Now matched to the whole name plus its paren, and counted. ⚖️ **Law 19 — a rung that cannot fail is not a rung, and I proved it by trying to break it.**

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
- 🔧 **TWO CALL SITES ONLY** — `meals.js:16480` and `core.js:2523` change from `setQuiet({key:null})` to the consuming close.
- 📋 **RUNG OWED — `No key appears in both lists`. Born RED at 2.**
- 🔴 **PROVEN ON LIVE — TINA, 26 Jul, phone + tablet** *(⚖️ Law 2 — her fingers closed it)*. **Sides & Basics: "it loops chips and the recipe, chips and the recipe"** — and the same with **Gnocchi**. **The bottom-left Back CAN get out; the phone Back cannot.** That split is the proof, and it sharpened the trace:
  - open Chips → history gets a **recipe** entry
  - bottom-left Back → nulls the key → redraw → pushes a **list** entry *(she is out — this is why the in-app Back works)*
  - so every open-and-close cycle leaves the stack `list · recipe · list · recipe · list…`
  - the phone Back walks **down that whole stack**, replaying the session alternately
  ⚖️ **THE IN-APP BACK ESCAPES BY MAKING THE MESS THE PHONE BACK THEN WALKS THROUGH.**
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
- ✅ **THE QUESTION I EXPECTED TO ASK HER, MEASURED INSTEAD.** *Is the FIRST pill tap a level or a lateral?* `meals.js:15395` reads `activeCat = cats.find(c=>c.id===S.mealCat) ? S.mealCat : cats[0].id` — **a pill is ALWAYS selected**, falling back to the first. There is no unfiltered state behind the pills, so **nothing is lost by replacing**. The first tap is a lateral like any other. ⚖️ **Law 19 — measured, not assumed.**
- 🔴 **PROVEN ON LIVE — TINA, 26 Jul, THREE ROOMS** *(⚖️ Law 2)*. **Oven Bakes & Roasts → phone Back → Homestyle Plates.** **Deep-Fried → phone Back → Breads & Rolls.** **Waffles → Back → Eggs** *(tablet)*. ⚖️ **IT ALWAYS LANDS ON THE FIRST PILL** — because entering the room drew with the default pill *(`cats[0].id`)* and pushed an entry, then her tap pushed a second. **Back walks to the default, not out of the room.** Her words: *"it's been doing this for a while."*
- ⚠️ **CONFIRM ON LIVE BEFORE `eventTab` GOES IN THE LIST.** It has a default *(`data.js:33`, `'mains'`)* so it passes the same test on paper — but Events is the room being reworked, and **Law 2 says her fingers close it.**

### 🪦 24.8 · READ AND CLEARED IS NOT ALIVE — **DEAD RENDER BRANCHES** *(measured + RULED 26 Jul, Tina)*

**Found by the sweep, not by the symptom** — nothing on live pointed at this.

The census RED reads **`4 DEAD keys in navSignature()`**. That rung asks *"is this name mentioned anywhere in `sections/`?"* — and counts a **read** or a **`key: null` clear** as proof of life. That leniency is **deliberate and correct** *(the rung's own comment: err toward "it is alive" for deletions)*. But it leaves a harder question unasked:

⚖️ **CAN THIS KEY EVER BECOME TRUTHY?** Asked that way, **10 more keys are dead** — read, cleared, watched by the signature, and **written by nothing**:

`eventActiveRecipe` · `weddingCakeView` · `kidsShowMasterSnacks` · `wkSACulture` · `wkRecipeDetail` · `activeSmoothie` · `activeCat2` — plus `activeOats` · `activeMuffin` · `activeRaw` *(not in the signature at all)*.

- 🩸 **THE ONE THAT MATTERS:** `health.js:963–966` renders **four recipe-detail branches** — smoothie, oats, muffin, raw — each with its own back-state, its own cooking-mode line *(:955)* and its own Home button *(:858)*. **Not one of them can ever be opened.** They are leftovers from Health's migration onto the universal opener. Live code, reachable by nothing.
- ✅ **WHY DELETION IS SAFE HERE, AND THE LAW IT OBEYS:** ⚖️ *a helper is safe to delete only once its job has a new home* **(§24.3)**. These jobs moved to `openRecipe()`/`viewingRecipe` **at migration** — the new home already exists and has been live for weeks. That is the opposite of the `eventsTopNav` trap, where buffet's only route out would have been stranded.
- 🩸 **MY INSTRUMENT CRIED WOLF FIRST, AND I CAUGHT IT BY HAND.** The first probe reported `barMode` dead. It is **live** — `barplanner.js:285` writes it through `chipRow(..., 'barMode')`, a helper that takes the key **as a string**, which no `key:` pattern can see. ⚖️ **Law 19 — every one of the 10 above was then re-checked repo-wide for string-name writes AND for computed writes (`S[k]`), and the only dynamic writers in the app are `goBack`'s clear and `closeRecipe`'s snapshot restore. Both clear; neither sets.**
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
- 📋 **RUNG OWED:** no `sectionHeader()` ships a hand-rolled multi-key back-jump — every header `backJs` that clears ≥2 nav keys must route through `topBack()`. Born RED at the current hand-rolled count, proven by re-introducing one.

---

### 📍 24.10 · WHERE A SCREEN **LANDS** — *(RULED by Tina 27 Jul 2026, from live · build = MF150)*

**A push lands at the TOP. A lateral lands ON THE THING YOU TAPPED. Nothing lands in a random middle.**

- 🩸 **WHAT SHE SAW ON LIVE:** Events → Finger Foods opened **below the banner**, with the top Back scrolled off-screen — the header's own navigation control hidden by the landing. Cause is **NOT** MF149: `core.js:657` `jumpToContent` is an older feature that deliberately scrolls past the banner to `.content` on any in-section navigation. ⚖️ **It was written before the top Back meant anything. Now it does — a landing that hides the room's Back is a landing that hides the way out.**
- ⚖️ **THE LAW RIDES THE PUSH/LATERAL LINE ALREADY RULED IN §24.7** — one distinction, two behaviours, nothing new to remember:
  - **PUSH** *(entering a level: Events → Finger Foods, a country → its dish list, a room → a category)* → **`scrollTo(0,0)`. The top. Always.** The banner, the title and the top Back are all part of arriving somewhere new.
  - **LATERAL** *(a pill or tab inside a level — `LATERAL_KEYS`: Meaty → Pastry, `mealCat`, `healthGroupTab`, …)* → **land on the block that pill selected**, its heading at the top of the viewport. ⚖️ **Not "stay put"** *(Tina, live: tapping Meaty Snacks left her where she was and made her scroll down to find it)* and **not the top either** *(a pill tap is not an arrival; re-showing the banner on every pill is the thing `jumpToContent` was built to avoid)*.
  - **RECIPE OPEN** → top *(already correct — `openedRecipe`)*. **BACK** → restore the scroll she left *(already correct)*. **COOKING STEP** → top *(already correct)*.
- 🔧 `jumpToContent` is **deleted** as the default; its scroll-to-content behaviour survives only inside the lateral branch, and aimed at the SELECTED block rather than at `.content`'s top.
- 📋 **RUNG OWED:** no push path may land at a non-zero scroll. Born RED against the current tree.

### 🏷️ 24.11 · A BACK SHELL WITHOUT A LABEL ARGUMENT WILL ALWAYS SAY "← Back" — *(MEASURED 27 Jul 2026, Tina's live catch)*

MF149-B named every `sectionHeader()` caller and Tina still found bare `← Back` in **Family Meals and Mood**. The measurement: **`recipeDetailFromResult(r, backAction, servings, color, bg, border)` (meals.js:15985) has no `backLabel` parameter at all** — so FMF, Mood and Search all fall through the `'← Back'` default at core.js:3072/4318. Its sibling shell `sectionPlanView()` **was** given the argument in MF149-B; this one was missed because it was never in the `sectionHeader()` sweep.

⚖️ **THE GENERAL LAW:** *a shell that renders a Back must TAKE the label as an argument — a shell that can only default is a shell that will default.* Naming the callers is not enough if the shell has no parameter to name into. **Census rung:** every Back-rendering shell in `core.js` accepts a label argument; every call site passes one *(a bare `|| '← Back'` fallback may exist as a crash-guard, but zero live callers may rely on it)*.

⚖️ **AMENDED (Tina, 27 Jul 2026):** **the back label is the name the user TAPPED — the tile text — never the internal screen key.**
*Origin: the Budget room. Its screen key is `budget`, a word she has never once seen on screen; the tile she taps says **I've Got R100**, and so does the room's own plan header. The Back reads `← I've Got R100` and stays that way.* ⚖️ A label naming something only the code can see is not a name — it is a leak.

### 🧭 24.12 · A LATERAL PUSHES NOTHING, SO BACK FROM ONE LEAVES THE ROOM — *(RULED by Tina 27 Jul 2026, from live · confirms MF150)*

**This is INTENDED. It is not a missing step, and nobody may "fix" it back.**

- §24.7 ruled that a lateral **replaces** its history entry rather than pushing one. The direct consequence: from a lateral-selected state, **one Back press leaves the room** — because tapping a pill never created a step to walk back through.
- 🩸 **Confirmed on live by Tina, 27 Jul:** Finger Foods (Meaty list → Back → **Events**) and Supper (Oven Bakes → Back → **out of the room**). Both correct.
- ⚖️ **WHY IT IS RIGHT:** she did not GO anywhere when she tapped Meaty — she changed what one level was showing. Making Back retrace pills is what produced the original bug: every pill she ever tried standing between her and the way out.
- 📌 **AND:** Finger Foods' top Back stays a **static `← Home`** even when the room was entered via Events. Ruled, not an oversight — Finger Foods sits at depth 1, and §24.9's depth-1 clamp says two-up from there IS Home. The one-level step back to the Events grid is the BOTTOM Back's job.

---

## 🎭 25 · WATCHING WHAT THE APP **DOES** — **RULED 26 Jul 2026 (Tina)**

### ⛔ 25.1 · CORRECTION — **"TINA DECLINED PLAYWRIGHT" WAS NEVER TRUE** *(struck 26 Jul 2026)*

> ⛔ **STRUCK.** For a month it was carried — including by Claude, to Tina's face, on 26 Jul — that Tina had *"explicitly decided against a full Playwright/CLI test-suite overhaul"* in June. **She did not.** Her words on being told: *"I dont even remember that? I wonder why I would say that?"*
>
> **THE SOURCE, 26 Jun 2026 — it was CLAUDE'S RECOMMENDATION, not her decision:** *"Skip Playwright for now. It can test a PWA, but setting it up is its own project and overkill for how you build. **Graduate to it only if manual verification keeps missing things.**"* What Tina actually greenlit was a **written definition-of-done checklist**. A session SUMMARY then compressed the recommendation into *"items explicitly decided against"*, and the summary was read back as fact.

- 🩸 **THE FAILURE SHAPE, AND IT IS THE WEEK'S THIRD:** trusting a convenient digest instead of the source. *(25 Jul — reading my own working copy instead of the remote and telling her the batch was unpushed. 25 Jul — a regex instead of a parse, wrongly telling her Bobotie did not belong on Boerekos. 26 Jul — a conversation summary instead of the transcript.)* ⚖️ **Law 19 widens: A SUMMARY IS NOT EVIDENCE. Read the source before repeating a decision back to her.**
- ⚖️ **A RECOMMENDATION IS NOT A RULING.** Claude's advice, however sound, never becomes Tina's decision by being written down near it. Only Tina rules. ⚖️ **§2.3.**
- ✅ **THE EXIT CONDITION IN THAT ADVICE HAS FIRED.** *"Only if manual verification keeps missing things."* **26 Jul, one live walk:** the Just Feed Me button missing **five days** · the FMF back-loop *"doing this for a while"* · Oven Bakes → Homestyle Plates, also *"for a while"*. **Manual verification is not missing things through carelessness — it is one person checking a 2,083-recipe app on two devices.** Her words: *"its impossible for me to check every single spot in the app."*

### 🎯 25.2 · **TEST BEHAVIOUR, NEVER APPEARANCE** — the scope, ruled with the tool

**RULED: Playwright comes in, scoped to NAVIGATION INVARIANTS ONLY, AFTER the top-Back build lands.**

- ⚖️ **THE DIVIDING LINE — WHY BOTH WATCHERS EXIST AND NEITHER REPLACES THE OTHER:**
  | watcher | catches | cannot catch |
  |---|---|---|
  | **MF147** — pure functions in Node, inside the census | wrong records, dead ends, orphaned functions | anything the browser does |
  | **MF148** — Playwright | back loops, dead taps, a control that is not on screen | nothing a query can answer more cheaply |
  **Half of 26 July's bugs were browser-only.** No Node rung could ever have found the back-loop.
- ⛔ **NEVER ASSERT COLOUR, LABEL TEXT, FONT, OR LAYOUT.** The sameness sweep and the tinyTummies rebuild will churn every one of those daily. ⚖️ **A test that breaks every day is a test she learns to ignore — the rung-that-cries-wolf law, applied to the browser.** The rulings of 25–26 Jul are the right targets **because they are CONTRACTS, not cosmetics.**
- ⏱️ **AFTER THE TOP-BACK BUILD, NOT BEFORE.** That build changes what every top Back *does*. Tests written first would be written against a shape about to be replaced. **Land the build, then lock it.**
- ⚠️ **CLAUDE CANNOT BUILD OR VERIFY THIS ONE.** Playwright downloads its browsers from a CDN the Claude sandbox cannot reach. **Claude writes the brief; Code builds and runs it on Tina's machine.** Stated plainly so it is never assumed otherwise. ⚖️ **Law 19.**
- ⚖️ **LAW 2 IS UNCHANGED AND IS NOT UP FOR REVIEW.** Neither watcher closes a bug. **Her fingers on live close a bug.** These only narrow where one can hide.

---

## 🥬 26 · **DIET LIVES ON THE VERSION. THE RECORD'S DIET IS DERIVED, NEVER TYPED.** — **RULED 29 Jul 2026**

**The catch that forced it.** `china-cong-you-ban-mian` — Scallion Oil Noodles. The budget fork removes the dried
shrimp and is genuinely, completely vegan. But `diet` lives on the **record**, so the record reads `omnivore`, and a
vegan user with the filter on will **never be shown a dish that has a vegan version sitting inside it.**

This is not a China problem. It is the whole lane and most of the app: **budget forks drop the meat by design.**
Japan's ramen, Thailand's curries, Indonesia's sambal dishes — the same fork, the same disappearance.

### THE RULING
1. **`diet` is a property of the VERSION.** Every version carries its own `diet:[…]`, exactly the way it already
   carries its own `costPP`. This follows straight from **§15 — a version is a full recipe.** A full recipe has a diet.
2. **The record's `diet` is the UNION of its versions' diets, and it is DERIVED.** It is never hand-typed, and
   `merge.js` asserts it. A record whose versions are `[omnivore, omnivore, vegan]` has record diet
   `["omnivore","vegan"]`. ⚖️ **A field that is typed by hand AND computable is a field that will drift** — same
   reasoning as `tinzaListLabel()` and the reserved-slots contract.
3. **UNION, NOT INTERSECTION — and the honest cost is stated.** Union means the vegan filter surfaces Scallion Oil
   Noodles. That is right: under-reporting *hides real food from the people who most need to find it*, which is the
   worse failure of the two. The cost is that a vegan user could open the record and land on an omnivore default.
   Therefore:
4. ⚖️ **A FILTER THAT MATCHED ON A NON-DEFAULT VERSION MUST OPEN ON THAT VERSION.** If the vegan filter is what
   surfaced the card, the vegan version is the one preselected — `default:true` is overridden by the filter that
   brought her here. **Without this clause the ruling is a lie**, and it is not optional to it. *(Code job — a brief,
   not an authoring change. Related to the open fix-queue item ⑤ version-label + chip-preselect.)*
5. **Vocabulary is unchanged:** `omnivore · vegetarian · vegan · unknown`, and **halaal + kosher are separate laws
   and are never diet tags** (12 Jul, restated because it has already been breached once this lane).

### SCOPE — WHAT IS DONE WHEN
- **Japan onwards: authored per-version from record 1.** No retrofit, no debt.
- **China's 50: derived at LANE CLOSE, not now.** ⚠️ Rewriting 50 banked records mid-lane, on a Wednesday, to fix a
  filter that is *already* red app-wide, is how a display inconsistency becomes fifty broken cards. The `merge.js`
  rung warns on them every merge so the debt stays visible and cannot be forgotten.
- ⚠️ **This does NOT fix the app-wide diet filter** (118 vegan records invisible, still open). It stops this lane
  from adding to it.

---

## 🔧 27 · **STAPLES LAND ON THE SIDES SHELF** — **RULED 29 Jul 2026 · AMENDED 30 Jul 2026 (Tina)**

> ⚖️ **AMENDED 30 Jul 2026.** The original §27 ruled a sixth tab, `basics` 🔧, placed last after
> Drinks. **That is STRUCK.** Tina, 30 Jul: *"a staple can most of the times be a side, I suppose"* →
> *"lets rather add staples to sides."* Clauses 1 and 2 below are rewritten; clauses 4 and 5 stand;
> clause 3 is **carried, unbuilt, and is the only open question left** (see 27.6).

**The gap.** Ruling **A5** made staples real cards with `course:"staple"`. It never said where they
land. `wkCourseToTab()` had no case for `staple`, so it fell to `default: return "mains"` — and a
cook browsing tonight's dinner was offered a bottle of chilli oil. ⚖️ **The code was not wrong so
much as never told.** A gap in A5, not a breach of it.

### THE RULING (as amended)

1. ⚖️ **`wkCourseToTab("staple") → "sides"`.** No sixth tab. A sambal, a jar of chilli oil and a bowl
   of coconut rice are all things that sit **beside** the meal, which is what the Sides shelf already
   means. ✅ **And it removes a real layout risk**: the tab bar already renders five buttons across a
   phone with "Desserts" wrapping, and a sixth would have taken each to roughly 57px.
2. ⚖️ **`wkPoolOf("staple") → 'side'` MOVES WITH IT, and this half is a genuine bug fix rather than a
   preference.** `staple` previously fell to `default: return 'main'` in the portion brain, so a
   sambal or a bowl of rice added to a plan **counted as a MAIN** and dragged every real main down
   the spread curve — rice + sambal + a curry read as *three mains* and halved all three.
   **The shelf and the portion brain must agree.** They now do.
3. ⚠️ **CARRIED, UNBUILT, AND NOW THE ONLY OPEN QUESTION — staples and the plan button.** The
   original clause read: *staples are not addable to My Plan; you do not serve chilli oil to eight
   people.* That reasoning assumed a separate reference shelf. **It sits differently now that
   staples are among the sides**, because the 14 staples are not one kind of thing — see 27.6.
   ⛔ **No plan guard has been built and nothing has been silently decided.**
4. **Staples still count toward the country's dish target.** They are real cards with real work in
   them. Unchanged.
5. **The rejected option, and why.** Filtering `staple` out of the tabs entirely would leave a staple
   reachable **only** through some other dish that happens to link to it — a cook who wants to make
   chilli oil *on purpose* would have no route at all. **Discoverability was the whole point of
   making them cards.** Unchanged, and the Sides route satisfies it just as well as a Basics tab did.
6. 📊 **THE MEASUREMENT BEHIND 27.3, taken 30 Jul across all 1,162 WK records.** There are 14
   `course:"staple"` cards and they are **two different kinds of object**:
   - ✅ **2 are genuine plate portions and SHOULD be plannable:** `Gohan` (100g rice per person) and
     `Nasi Uduk` (90g coconut rice per person).
   - ❌ **11 are batch-and-keep jars, where a guest multiplier means nothing:** Dashi · Ponzu · Gari ·
     Nukazuke (a **500g bran bed** you keep alive) · Chilli Oil · Master Stock (**1.5L**, re-used) ·
     Homemade Tofu · Suan Cai (**2kg** cabbage) · Sambal Terasi · Sambal Matah · Bawang Goreng.
   - ⚠️ **1 is MIS-COURSED:** `Kake Udon` is a bowl of noodle soup — a dish, almost certainly `main`.
   ⚖️ **So a blanket guard on `course === "staple"` would be wrong in both directions**: it would
   strip the plan button off two bowls of rice while the 2kg ferment problem it was written for
   affects the other eleven. **The clean fix is a data change, not a render change** — re-course
   `Gohan` and `Nasi Uduk` to `side`, re-course `Kake Udon` to `main`, and clause 3 then applies to a
   set of 11 with nothing ambiguous in it. ⏱️ **Japan and China are closed and pushed**, so those
   re-courses are edits to shipped files and should be batched into one deploy rather than done
   alone.
7. 🩸 **A SECOND SWITCH DISAGREEMENT WAS FOUND AND FIXED IN PASSING.** `salad` fell through to the
   Mains tab while `wkPoolOf()` already portioned it as a side — the two switches held different
   opinions about the same course. `wkCourseToTab("salad") → "sides"` now. It moved 1 record in
   `wk_europe.js` and 1 in `wk_southafrica.js`. ⚖️ **`soup` was checked and deliberately left alone**
   — both switches already agree it is a main, which is right for a bowl of soup as a meal.

### 📊 WHAT THIS CHANGED ON THE SHELVES

| file | Mains | Sides |
|---|---|---|
| `wk_japan.js` | 17 → **11** | 15 → **21** |
| `wk_china.js` | 36 → **32** | 3 → **7** |
| `wk_indonesia.js` | 22 → **18** | 6 → **10** |
| `wk_europe.js` | 277 → **276** | 74 → **75** |
| `wk_southafrica.js` | 68 → **67** | 26 → **27** |

⚖️ **China's Sides shelf more than doubled** (3 → 7), which is the clearest sign the change was
overdue — a fifty-record country was rendering three sides. ✅ **And it incidentally corrects the
Indonesia shelf tilt raised at record 41**: mains drops from 22 to 18 and sides rises from 6 to 10
without a single record being re-authored.

**Gates after the change:** `node --check sections/worldkitchen.js` ✅ · behaviour proved by calling
both switches directly on every course value ✅ · `tinza-doctor` RED **10** (floor, unchanged) ✅ ·
Indonesia `costcheck` 123/123 ✅ · `pricecheck` exact 90, wrong-product 0 ✅.

---

## ♻️ 28 · **`leftovers` IS AN ARRAY — AND IT HAS NO RENDERER, WHICH IS THE ACTUAL BUG** — **RULED 29 Jul 2026**

### 🔴 THE FINDING THAT CHANGED THE QUESTION
The open question was "string or array, and which one renders?" **Measured 29 Jul, and neither does.**
**Nothing in the app reads `r.leftovers`.** Grepped app-wide: the only occurrences outside recipe data are
`merge.js`'s own assertions.

What World Kitchen actually renders is `worldkitchen.js:739` → `wkLeftoverKeys(r)` in `core.js:4765`, which
**keyword-guesses over the ingredient string** and returns **one** key from a closed generic list of fifteen
(`beef · lamb · pork · chicken · seafood · pasta · rice · potato · beans · cheese · bread · roast-veg …`), which is
then looked up in `LEFTOVER_IDEAS` for three generic lines.

⚖️ **So Tea-Smoked Duck's authored line — keep the rendered smoked duck fat, fry rice in it — is invisible, and
what a cook is shown instead is the generic `chicken` blurb.** All **150 authored leftover lines across China's 50
records render nowhere.** The WOW Standard requires proper leftovers = a second real meal; the app has been
throwing them away since the first record.

⚖️ **THIS IS WHY THE LIVE LOOK COULD NEVER HAVE SETTLED IT.** ASIA_PROGRESS asked Tina to open Hong Shao Rou (string)
and Tang Yuan (array) and compare. **Both would have looked identical, because both render nothing** — and the
honest conclusion from that test would have been "no difference, leave it", which is exactly wrong.
📌 **Law 2 stands and is not weakened by this** — her eyes close bugs. But a *comparison* test is only valid if the
two things compared are actually being read, and that is a thing Node can check and eyes cannot.

### THE RULING
1. **`leftovers` is an ARRAY of prose strings.** 45 of 50 already are; the 5 that are not predate `merge.js`. The
   shape question is settled by authoring order and majority, not by display.
2. **The five legacy records are converted NOW** — `hong-shao-rou · mapo-tofu · gong-bao-ji-ding · char-siu ·
   dan-dan-mian`. ⚖️ **Safe to do because it is zero-judgement: the string is wrapped, not rewritten.** No prose is
   touched, no meaning is decided. This is the opposite of the "don't rewrite five banked records on a guess"
   caution in ASIA_PROGRESS — there is no guess left.
3. 🩸 **THE RENDERER IS A CODE BRIEF, NOT AN AUTHORING FIX.** Rule for the build:
   **authored `leftovers` WINS; `wkLeftoverKeys()` is the FALLBACK only when a record has no `leftovers` array.**
   A record that took the trouble to say what to do with its own leftovers is never overridden by a keyword guess.
4. ⚖️ **KEEP `wkLeftoverKeys()` — IT IS DOING A SECOND, DIFFERENT JOB.** It also feeds `LEFTOVER_CLASS` →
   `SAFETY_CLASS` → the Storage & safety box, which is a **food-safety classifier** (the starch/cool-fast rule is a
   real hazard note). Deleting the guesser to fix the display would silently delete the food-safety engine with it.
   **Two jobs, one function, and only one of them is broken.**
5. **The generic fallback stays free; authored leftovers follow the existing Pro gate.** No tier change here.

### ⚖️ THE PATTERN, WRITTEN DOWN — **THIRD TIME**
`cong-you-bing` (budget-leads, existing records unchecked) · `leftovers` shape (incoming-only assertion) · and now
**a field asserted for years by a validator while nothing on earth read it.**
**A validator that checks a field's SHAPE has not established that the field is USED.** New rung: when a lane
introduces a field, grep for its reader once, at the start. It costs one command.

---

> 🔧 **FILE REBUILT 29 Jul 2026 — HOW, AND WHAT WAS VERIFIED.**
> §29 and §30 below were appended from their standalone blocks in `reference/`.
> **Measured before assembly, not assumed:** this file at origin ended cleanly at **§28** (not §25,
> as two earlier handoff notes claimed — that warning was stale and is struck). §29 existed only as
> `reference/RULING_29_STAPLES_AS_INGREDIENTS.md`; §30 only as
> `reference/RULING_30_COSTPP_AND_PRICE_REFRESH.md`. Every §1–§28 byte above this line is unchanged.
> ⚖️ The standing rule holds and is the reason this was checked first: **whenever handing back a
> canonical file, check whether HEAD is behind the local copy before rebuilding it.**
> ⚠️ **One assumption, stated:** that §29 was not edited by hand after it was written. If it was,
> keep your own copy and paste **§30 only**.


## 🏺 29 · A STAPLE THAT IS ALSO AN INGREDIENT — **RULED 29 Jul 2026 (Tina)**

*Origin: §27 arrived as a pricing question. `dashi` and `chilli oil` were both absent from
`PRICE_DB` while both are real staple CARDS with their own costed versions.*

---

### ⚖️ 29.1 · THE TEST — DOES A REAL BOUGHT PRODUCT FILL THE SLOT?

A staple that is an ingredient of other cards gets a `PRICE_DB` key **if and only if a real bought
product fills that slot.**

| staple | key? | why |
|---|---|---|
| Dashi | ✅ | instant hon dashi granules are an ordinary shelf item |
| Chilli oil | ✅ | an ordinary jar |
| Master Stock | ❌ | nothing on a shelf is a master stock |

Master Stock **fails loud**. "No bought equivalent" means **"no cost"** until a sub-recipe costing
engine exists — it does not mean "guess something close."

---

### ✅ 29.2 · PRICE THE INGREDIENT SLOT AS THE **STORE ROUTE** *(RULED by Tina, 29 Jul)*

A staple appearing inside another card's ingredient line is costed as **the product a cook BUYS** —
never as the sum of the staple card's own ingredients.

The staple **CARD** is unaffected. It keeps pricing its own from-scratch route, which stays lower.
**That gap is the argument for the card existing.** Two numbers, two questions, both correct:
*"what does it cost me to use dashi in this dish?"* and *"what does it cost me to make dashi?"*

⛔ The alternative — slots priced from the staple's own record — is **FORMALLY CLOSED.** It needs a
sub-recipe costing engine, which is a **BUILD, not a ruling**, and it is not happening before launch.

---

### 🔴 29.3 · A DASHI KEY IS OMNIVORE, AND IT IS LOAD-BEARING — **CLAIM CORRECTED 29 Jul 2026**

Hon dashi contains bonito extract. `dashi` is already on the hidden-animal dictionary. Therefore a
`dashi` price key is an **omnivore** key, and any card claiming vegan or vegetarian while carrying a
plain `dashi` line is mis-tagged.

⚠️ **The original 29.3 recorded "MEASURED CLEAN — all 6 records with a plain dashi base line ... all
7 forks swap explicitly." That measurement is superseded.** Re-run mechanically against
`wk_japan.js` at **20 records** on 29 Jul, it does not hold. The word doing the damage was
**"explicitly"**. Corrected finding:

**9 records carry a plain `dashi` base line. 11 vegetarian/vegan forks hang off them, in 3 states:**

| state | count | records | verdict |
|---|---|---|---|
| ✅ formal `swapIng` → `kombu and shiitake dashi` | 6 | incl. Takoyaki, Nikujaga, Zaru Soba | correct |
| 🟠 handled in `addStep` **prose only** | 3 | Okonomiyaki *(veg)* · Chawanmushi *(vegan)* · Tempura *(vegan)* | **the cook is told, the machine is not** |
| 🔴 handled **nowhere** | 2 | Tamagoyaki — *Plain Sweet* and *Layered with Nori*, both tagged vegetarian | **genuine mis-tag: bonito in a vegetarian card** |

⚖️ **THE RULING THAT FOLLOWS: PROSE IS NOT A SWAP.** A fork whose method says *"use the kombu and
shiitake dashi"* while its ingredient list still reads `dashi` has told the human and lied to every
machine downstream. Three things read the ingredient line and none of them read the method:
the **price gate** (costs the omnivore product), the **Node diet tagger** (tags the fork animal),
and any future **allergen or filter pass**. A delta is the only place a swap counts.
**Every dashi swap must be a `swapIng`, and the prose may repeat it but may not replace it.**

⚠️ **The Node diet tagger must treat `dashi` as animal and `kombu and shiitake dashi` as NOT — and
it cannot substring-match between them**, since the second contains the first. Same collision shape
as radish vs daikon.

🩸 **OPEN, NOT RULED — Tamagoyaki.** Two vegetarian forks carry bonito. This is not an authoring
question, it is a correctness bug in a banked B3 record, and it wants Tina's call on the fix: swap
the dashi in both forks, or drop the vegetarian tag. **Not decided silently.**

---

### 🍲 29.4 · THE THREE HONEST DASHI ROUTES *(Tina)*

1. **Instant granules** — the ordinary route, and the one 29.1 prices.
2. **Light chicken or vegetable broth with a splash of soy** — the pantry route. **Name it in-method
   rather than pretending**; a cook without dashi is not a cook who has failed.
3. **Shiitake steeping liquid** — ✅ **THE VEGAN ROUTE**, and already what every Japan vegan fork
   uses. Kelp and dried mushroom both predate the industrial bonito flake by centuries, so this is
   the older larder rather than a modern substitution.

⏳ **STILL NEEDED, ONE NUMBER:** the SA shelf price of **instant hon dashi granules.** The route is
ruled; the price is **NOT sourced. DO NOT GUESS IT.** `dashi` now appears in 9 of 20 Japan records.

---

### ⚖️ 29.5 · A7 DEFERS **MISSING** PRICES. IT DOES NOT DEFER **WRONG** ONES.

Found because `chilli oil` had no key and fell through `wkPriceLookup()`'s last rung to `chilli`
**R80/kg — a fresh-chilli price, roughly 6× under** — live in the pushed and wired `wk_china.js`
across **24 mentions**, plus Japan's Gyoza. Invisible, because the card renders a number and the
number looks fine.

A7 exists to batch the **work**, not to protect a wrong number that is already shipping.

- **A MISSING price is a GAP.** Renders blank. Announces itself. Waits for the batch. **A7 applies.**
- **A WRONG price is a BUG.** Renders as a number. Looks correct. Ships. **A7 does NOT apply — fix
  it when found.**

Straight off the MF137 ladder: **missing < duplicate < WRONG.** Same reasoning as the tierBar leak —
the thing that announces itself with nothing is the dangerous one.

✅ **ACTED:** `"chilli oil": 490` added to `sections/prices.js`, labelled in the file as **the ONE A7
exception taken.** Everything genuinely missing still waits for the batch.

🟡 **CAVEAT ON THE NUMBER, on the record:** the two sources are arguably different products —
Woolworths R48.95/100ml is a chilli-flavoured *olive* oil, Banhoek R125/250ml is an SA artisan
condiment, and neither is Chinese *la yóu*. They agree at ~R490/L, which is why it stands, and
R490 prices **the bought condiment** per 29.2. The China Chilli Oil staple card still prices its own
from-scratch route, which is far lower — and that gap is 29.2 working exactly as intended.

---

### 📌 29.6 · SIDE-FINDINGS LOGGED, NOT RULED

- ⚠️ `mushroom` **R165** and `mushrooms` **R90** are BOTH live keys at different prices.
  Pre-existing, not this lane.
- ⚠️ `neutral oil` belongs in **`WK_ALIAS` (worldkitchen.js ~486)**, not `PRICE_ALIAS` (core.js).
  `wkPriceLookup()` reads `WK_ALIAS` only, and `"oil"` does not rescue `"neutral oil"` — the match
  is exact on the cleaned name. Fixed locally; **not at HEAD.**
- ⚖️ **`ASIA_SCHEMA_KEYS.json` MUST NOT BE REGENERATED.** It is frozen from `wk_china.js` @ 43
  records, and its own note rules that every country validates against **that** list, *never against
  its own record 1* — letting each file set its own precedent is how five near-identical files drift
  apart **(Law 50)**. Regenerating it from Japan's record 1 broke `merge.js` on 29 Jul. The habit is
  **STRUCK**. Same inversion as Events §2.2 and the potato-starch alias: **the file was right and the
  note was the bug.**

---

## 💰 30 · **COSTPP IS DERIVED, AND PRICES MUST HAVE A REFRESH ROUTE** — **RULED 29 Jul 2026 (Tina)**

### ⚖️ 30.1 · `costPP` IS A DERIVED NUMBER, NOT AN AUTHORED ONE

✅ **RULED.** `costPP` on a version is **computed from `PRICE_DB` via the app's own pricing path**.
It is not a figure the author estimates and types in. The alternative — costPP as an independent
authored guess — is **formally closed**.

**Why it was in doubt, and what settled it.** At Japan B8 the `tofu` key read R250/kg, so the 200g
in `japan-agedashi-tofu` was R50 of tofu alone, yet that record was banked at `costPP` **R22** —
with starch and 400ml of oil on top. Two readings were possible and they pointed opposite ways.
Tina ruled the first: costPP is meant to be derived, therefore **the file currently contains
hand-typed numbers that nobody has ever checked against the price list**.

⚖️ **THE CONSEQUENCE, STRAIGHT OFF THE LADDER (missing < duplicate < WRONG).** An unchecked costPP
is the worst rung. It renders as a number. It looks correct. It is the same failure as the `chilli
oil` → `chilli` R80 bug and the ungated `tierBar`: a silent hole that announces itself never.

⚖️ **THE FIX IS A TOOL, NOT A TYPING SESSION.** Re-typing ~300 costPP figures by hand would
reintroduce exactly the error being fixed, and would be stale the next time a price moves. What is
needed is a watcher: **`costcheck.js`**, built to the same design law as `pricecheck.js` —

> It does **not** reimplement pricing. It loads `sections/prices.js` + `core.js` + the section file
> into a vm sandbox and calls the app's **own** `wkParseIngredients()` / `wkCleanName()` /
> `wkPriceLookup()` over the base ingredient lines **and every version delta** (`addIng` +
> `swapIng.to`; `from` excluded — removed, not bought), then compares the computed figure to the
> authored `costPP`. **A watcher with a private model of pricing measures a program that does not
> exist.** If any gate file fails to load it REFUSES to report rather than silently checking two of
> three. Born-RED proofs, same as merge.js and pricecheck.js.

⚠️ **It must report a TOLERANCE BAND, not equality.** Rounding, pack-size hints and unpriced
(ABSENT) lines mean an exact match is not achievable and demanding one would make the tool noise.
Proposed: ✅ within 15% · 🟠 15–40% · 🔴 over 40% or where an ABSENT key is carrying material weight.
⚠️ **A record containing an ABSENT key cannot be scored at all** and must be reported as
UNSCOREABLE rather than as passing — otherwise a missing price silently becomes a low cost.

📌 **Sequencing: `costcheck.js` runs BEFORE any mass re-pricing.** Until it exists, nobody knows
whether costPP is wrong by R2 or by R30, and re-pricing blind would move numbers that were right.

📌 **Authoring is unchanged in the meantime.** Keep matching sibling records rather than diverging;
one record priced on a different basis is worse than a consistent file. The tool fixes them together.

---

### ⚖️ 30.2 · `tofu` RE-PRICED, AND THE ERROR SHAPE IS NOW NAMED

✅ **`"tofu": 250 → 171`** (per kg), Tina-sourced 29 Jul: Woolworths R59.99/350g = R171/kg;
Pick n Pay and Checkers ordinary 350–400g blocks R125–R171/kg; ~R250/kg **only** on specialist 200g
lines.

⚖️ **THE SHAPE: THE TOP OF A RANGE USED AS THE MID.** This is the third time. `"stock"` was 170
(a powder price) before it became 8 per litre. `"dashi"` was nearly quoted per kg of granules.
Now `tofu` was quoted at the specialist ceiling. **When sourcing a key, write down the range and
take the honest mid, and record both in the comment** — a single number with no range behind it
cannot be audited later.

---

### ⚖️ 30.3 · PRICES NEED A REFRESH ROUTE BEFORE LAUNCH, AND IT CANNOT BE 789 SHOPPING TRIPS

**The problem.** `PRICE_DB` holds ~789 hand-sourced keys stamped `PRICE_ASOF = 'July 2026'`.
Launch is October. Re-sourcing every key by hand is not maintainable once, let alone quarterly, and
an app whose whole positioning is honest costing cannot ship prices it cannot defend.

⚖️ **THE INSIGHT: TINZA DOES NOT NEED 789 TRUE PRICES. IT NEEDS 789 DEFENSIBLE ONES AND ONE HONEST
DATE.** A cost that is 6% out but carries a visible as-of date is a working feature. A cost that is
40% out and presented as exact is the retailer cage in miniature.

### THE THREE-TIER METHOD

**TIER 1 — THE ANCHOR SET (~40–50 keys, re-priced BY HAND).**
A small number of keys carry most of the money in most recipes: chicken, beef, pork, lamb, fish,
eggs, milk, cheese, butter, oil, flour, sugar, rice, maize meal, bread, potato, onion, carrot,
tomato, cabbage, tinned tomato, beans, tofu. These get walked and photographed on one shopping trip
and typed in. **This is one afternoon, not a project**, and Tina already does this weekly for
catering and for Fermentastic.

**TIER 2 — THE INDEXED REMAINDER (~740 keys, moved MECHANICALLY).**
Everything else is shifted by a published inflation figure between anchor refreshes, by script, per
category. It is approximate, it is transparent, and it is far better than being frozen.

**TIER 3 — THE HONESTY LAYER.**
`PRICE_ASOF` already exists and is already referenced by the cost footers. Surface it. Past a
certain age the app should widen to a band rather than pretend to a rand.

### THE SOURCES — BOTH FREE, BOTH SOUTH AFRICAN, BOTH MONTHLY

| Source | What it gives | How to use it |
|---|---|---|
| **PMBEJD Household Affordability Index** (`pmbejd.org.za`) | 44 basic foods, priced monthly across 52 supermarkets and 36 butcheries in Joburg, Durban, Cape Town, Pietermaritzburg, Mtubatuba, Mthatha and Springbok. Published as a free PDF at month end, with per-food month-on-month movement. | ⚠️ **AS AN INDEX, NOT AS LEVELS.** It is deliberately a low-income basket priced in townships, so its rand figures are NOT Woolworths shelf prices. Use its **rate of change per food** to move Tier 2, never its absolute numbers as Tinza's prices. |
| **StatsSA CPI, Food & non-alcoholic beverages** | The official national food inflation rate, monthly, with sub-indices. PMBEJD quotes it in every release, so one PDF gives both. | The fallback multiplier for any key PMBEJD does not track. |

⛔ **DO NOT SCRAPE RETAILER SITES.** It breaks their terms, it breaks the moment they change their
markup, and it contradicts the positioning: Tinza carries **no retailer names** by law, so anchoring
the price list to one chain would undo the neutrality that is the entire argument against the
retailer apps.

### THE PRE-OCTOBER SEQUENCE

1. **Build `costcheck.js`** — first, because until it runs nobody knows the size of the problem.
2. **Run the A7 price batch** — all deferred keys land at once, after Vietnam. `aburaage` and the
   MF152 list close here.
3. **September: one anchor walk.** ~40 keys re-typed by hand. This makes prices ~1 month old at
   launch instead of 3.
4. **Write `reprice.js`** — applies an index factor to a named subset and rewrites `PRICE_ASOF`.
   Small, and it makes step 3 repeatable quarterly instead of heroic.
5. **Surface `PRICE_ASOF` in the UI** before launch.

📌 **Not before launch, but write it down now:** a per-locale price layer already exists in the
LOCALE ruling. Whatever refresh route is built must be per-locale from the start, or locale #2
inherits South African rands.

---

### ⚖️ 30.4 · THE PRICE LIST HAS A RETAILER BASIS, AND IT MUST BE DECLARED

✅ **RULED (Tina, 29 Jul 2026).** Nearly every key in `PRICE_DB` was sourced at **one retailer**
(Checkers, mid-shelf). Until now this was **nowhere written down** — not in the file, not in the
rulings, not in MF152. A reader of `prices.js` had no way to know what the numbers meant.

⚖️ **A SINGLE BASIS IS A FEATURE, NOT A FLAW — PROVIDED IT IS DECLARED AND KEPT.**
- **It makes recipe-to-recipe comparison honest.** Every costPP in the app is measured with the same
  ruler, so "this dish is cheaper than that one" is a true statement even if both absolute rands are
  a little high. That is the number the user actually acts on.
- **It makes the absolute rand a known, directional bias.** A shopper at a cheaper chain pays less
  than Tinza says. Erring high is the safe direction for a budgeting tool — a plan that comes in
  under is a good surprise; one that comes in over is a broken promise.
- ⚠️ **It only holds while it stays consistent.** ⛔ **RE-PRICE AT THE SAME RETAILER.** An anchor
  walk done at a different chain injects a step-change across the whole file that looks exactly like
  inflation and is not — and it would corrupt the Tier-2 index at the same time, because the index
  assumes the level it is multiplying is comparable to the last one.
- If the basis is ever deliberately changed, change `PRICE_BASIS` in one place and **re-price the
  entire anchor set in the same pass.** Never key by key, or the file ends up half one shop and half
  another with no way to tell which is which.

📌 **`PRICE_BASIS` is now a constant at the top of `sections/prices.js`, beside `PRICE_ASOF`.**
Two facts, one place: *when* the prices are from, and *where*.

⚠️ **IT MUST NOT SURFACE AS A RETAILER NAME IN APP PROSE.** The no-retailer-names law is unchanged
and this does not bend it. The constant exists for the code and the audit trail. User-facing wording
is **"typical national supermarket prices"** plus the as-of date.

🩸 **CONSEQUENCE FOR §30.2 WORTH NOTING.** The `tofu` 250 → 171 re-price took Woolworths R59.99/350g
as its anchor. Tina's own Checkers figure for an ordinary 350–400g block was R125–R171/kg, so R171
sits at the top of the Checkers range as well and the number survives. **But the method slipped**:
a key on a Checkers basis should be sourced from Checkers. Flagged rather than reverted — the value
is right, the provenance was mixed, and mixed provenance is the thing this ruling exists to stop.

⚖️ **AND THE POINT THAT OUTLIVES THE RETAILER ARGUMENT:** which chain is objectively dearest is not
the question and is not worth resolving. **What matters is that it is ONE chain and that it is
WRITTEN DOWN.** An undeclared basis cannot be audited, cannot be re-walked correctly, and cannot be
indexed — which is the same failure as an undeclared unit (`stock` per kg vs per litre) and an
undeclared range (`tofu` at the ceiling vs the mid). Third instance of the same disease: **a number
without its provenance is not a measurement.**


---

### ⚖️ 30.5 · THE HIGH BIAS IS DELIBERATE (Tina, 29 Jul 2026)

✅ **RULED.** Pricing on the dearer side is **the chosen direction of error**, not a limitation to be
engineered away later.

> A plan that comes in **under** is a good surprise. A plan that comes in **over** is a broken
> promise. For a tool whose entire pitch is honest costing, those two are not symmetrical.

⛔ **DO NOT "IMPROVE" THIS BY AVERAGING ACROSS RETAILERS.** A blended basis would look more accurate,
would read better in any spec, and would **silently delete the safety margin** — leaving every
shopper at a dearer store short by an amount the app never warned them about. It would also break
§30.4, because a blend has no single shop to re-walk.

⚠️ **This is written down precisely because it looks like a flaw.** A future session — human or
otherwise — will eventually open `prices.js`, notice the basis is one dearer chain, and reach for
the average in good faith. **It is not a bug. It is the ruling.** Anyone changing it needs Tina's
word, not a tidy-up.

📌 Sits alongside the other deliberate asymmetries already ruled: budget fork **leads** and must be
~~cheapest~~ (A3) · a **missing** price is honest and a **wrong** one is not (§29.5, MF137 ladder) ·
free tier gets the whole recipe and the gate sits on planning, not browsing.

> ⚠️ **"CHEAPEST" IS STRUCK HERE — 4 Aug 2026. SEE §37.1.** The A3 comparator is the record's
> **DEFAULT** version, never its cheapest sibling. This loose word was read literally on 4 Aug,
> a screen was built on it, and it missed a live breach (`thailand-nam-prik-ong`) that
> `claimcheck.js` caught. The rule did not change; the wording here was always the loose one.

---

## ⚖️ 31 · **RATHER MORE THAN LESS (COSTING DIRECTION)** — **RULED 29 Jul 2026 (Tina)**

### §31.1 THE RULE

**Where a price must be estimated, estimate HIGH.**

A shopper who budgeted R80 and spends R60 has a good day. A shopper who budgeted R60 and
spends R80 is short at the till with a trolley full of food. The two errors are not
symmetrical, so the estimate must not be centred — it must lean.

This applies to: `// ESTIMATE` keys in prices.js, pack-size rounding, version costPP,
and any figure Tina has not personally sourced from a shelf.

### §31.2 THE BOUNDARY — ESTIMATES ROUND UP, ABSENCES STAY ABSENT

§31.1 does **not** license inventing a number to fill a gap.

- A **missing** price renders blank and announces itself. It stays missing. A7 applies.
- An **estimated** price renders as a number and gets trusted. It rounds up.
- A **wrong** price renders as a number and looks correct. It is a bug. §29.5 applies.

Rounding an ABSENT key up to "something, to be safe" converts an honest gap into a
guessed number — which is the aburaage→tofu failure wearing a helpful face. Do not.

### ⚠️ §31.3 IS STRUCK AND REPLACED — SEE §31.3a / §31.3b

**Ruled 29 Jul 2026 by Tina, same session.** The original §31.3 read: *"a nukadoko, a sourdough
starter, a master stock, a jar of chilli oil and a batch of kaeshi are all capital: bought once,
used for months … the full purchase is charged to the record that builds it."*

**That put five things in one category that do not belong in one category**, and the Nukazuke
figures were the proof: a 500g bed charged in full against one cucumber, which is not "rather
more than less" but roughly a twentyfold distortion. A number that wrong stops reading as
cautious and starts reading as broken.

### ✅ §31.3a THE TEST — DOES IT SURVIVE THE RECIPE?

**RETAINED → it is equipment. It does not enter costPP.**
After the dish is made it still exists, in usable form, for the next one. A nukadoko, a
sourdough starter, a master stock. Nobody costs the potjie into the potjiekos.

**CONSUMED → it is an ingredient. It is priced per unit used, exactly as now.**
A jar of chilli oil and a batch of kaeshi are consumed — slowly, but consumed. 15ml of a
R490/L oil is R7 and the engine already gets that right unaided. There is nothing to amortise
here and the old rule did no work.

### ✅ §31.3b THE COST IS NAMED IN THE METHOD, NOT HIDDEN

Equipment is kept out of costPP **and stated in prose, with the real rand figure**, so the
shopper is not ambushed. §31.1 protects the cook at the till; a method line does that job
better than a costPP does. *"You buy a R40 bag of bran once and it feeds you for months"* is
information. *"R40 per cucumber"* is a number that tells a shopper nothing true about their
trolley and makes the card look broken.

⚠️ **THE LINE IS NOT PERFECTLY CLEAN, AND THE RULING SAYS SO RATHER THAN PRETENDING.**
A nukadoko is slowly depleted and topped up; a master stock is topped up every time it is used.
Both still sit on the equipment side, because what matters is that the thing persists between
cooks, not that it never diminishes. If a future record finds a case this genuinely cannot
place, that is a ruling, not a patch.

### ✅ §31.3c NUKAZUKE RECOMPUTED — NO LONGER PROVISIONAL

Under §31.3a the bed (bran · salt · kombu · chillies · water) leaves costPP and the versions
carry the vegetable and the salt rub, which is what a pickle actually costs once the bed exists.

| Version | was | now | working |
|---|---|---|---|
| 💰 Daikon to Ninjin (budget · vegan) | R11 | **R9** | daikon 150g @ R45/kg + carrots 80g @ R25/kg + salt |
| 🥒 Kyuri no Nukazuke (default · vegan) | R23 | **R10** | one cucumber, leaning high per §31.1, + the salt rub |
| 🥚 Tamago to Chīzu (vegetarian) | R19 | **R15** | egg R3.70 + cheddar 60g @ R187/kg + salt |

Budget still leads and is still cheapest (A3), by R1 — thin, but correctly ordered.
The one-time bed cost is now stated in-method: ~R40 for a 500g bag of bran plus a bag of salt.
`wheat bran` remains an ABSENT key — the rand figure is Tina-sourced prose, and §31.2 stands:
prose may name a route, an absence still does not become a number.

### §31.4 "NOT FINDABLE ONLINE" IS NOT "NOT AVAILABLE"

**⚠️ AMENDED 29 Jul 2026 by Tina, same day it was ruled. The original no-substitute clause
is STRUCK — see §31.4b. The clause below is what stands.**

Japanese, Chinese and Indian specialty grocers in Gauteng and the Cape run on word of mouth,
WhatsApp groups and walk-in trade. They have no web presence, no price list and no SEO. A
failed search proves nothing about the shelf.

**Ruled: an ingredient may be authored as available, and sourced honestly in-method, on
Tina's trade knowledge alone — with no PRICE_DB key created.** `nuka` and `aburaage` are here,
they are simply not on a supermarket shelf or a search engine. Name the route, create no key,
price stays ABSENT.

### ⚠️ §31.4b THE NO-SUBSTITUTE CLAUSE IS STRUCK — AND WHY IT WAS WRONG

The original §31.4 ruled that wheat bran must **not** stand in for nuka, on the reasoning
that it "makes a different pickle, not a cheaper nukazuke," and that substituting it would be
disguising under the Shelf-WOW Law. **That was reasoned from culinary first principles and
stated more firmly than the evidence supported. It is struck.**

Fermenters who have built nukadoko from both rice bran and wheat bran report the finished
pickles taste closely alike, and that wheat bran is the standard fallback where rice bran is
hard to source. A practitioner who has made both outranks a first-principles argument and
outranks a market-research page.

✅ **RULED: `nuka` moves into the ordinary NOT-IN-SA family** alongside warabi starch → cornflour
and gobo → carrot + parsnip. Lead on the accessible route, name the real thing in-method,
create no key. Nukazuke's base ingredient line is now `wheat bran`; rice bran is named in the
method as the original and the upgrade.

✅ **ALSO RULED, from the same sourcing:** heat-toasted or heat-stabilised bran **does** work.
Stabilisation kills the lactic bacteria living on the bran's surface, but almost all of the
culture arrives from the vegetables and the cook's hands, so the bed still establishes — just
slower. Allow an extra week of sutezuke. This applies equally to bran the cook toasts at home,
and the method now states the trade-off rather than recommending the toast unconditionally.

⚖️ **THE PROCESS LESSON, which is the part worth keeping.** A ruling written the same day it
was needed, on reasoning rather than evidence, survived less than twenty-four hours. Where a
ruling turns on a factual claim about how an ingredient behaves — not on policy, not on
Tina's preference — the claim gets checked before the ruling is filed, not after. Compare
the sushi safety line, where the freezing standard was verified before it was approved.

### ✅ §31.3 REVIEW CLOSED

The block that stood here recorded §31.3 as under review because charging a 500g bed in full
put ~R40 against one cucumber. **That review is now closed by §31.3a/b/c above.** Nukazuke's
costPP values are R9 · R10 · R15 and are no longer provisional.

The nuka-as-import worry that produced the original rule is separately gone under §31.4b:
wheat bran at R40–R80/kg, not an R350–950 import.

---

### 📋 IN-METHOD SOURCING LINE — NUKAZUKE

⚠️ **The original block here is STRUCK under §31.4b** — it led on rice bran as the only route.
The replacement is already written into `wk_japan.js` at `japan-nukazuke` and leads on wheat
bran, names nuka as the original and the upgrade, warns off animal-feed grade, and states the
toasted/stabilised trade-off honestly. Read it there rather than keeping a second copy here —
a duplicate is the split-brain shape.

### 📋 IN-METHOD SOURCING LINE — ABURAAGE (drop-ready, same shelf)

> Aburaage — thin tofu sheets, twice-fried until they puff hollow — comes from the same
> counter as the bran, and the same rule applies: an Asian grocer will have it frozen, a
> supermarket will not. Frozen is normal and correct; it is how it is sold in Japan too.

---

## 📒 32 · **THE TWO LEDGERS** — **RULED 30 Jul 2026 (Tina)**

### §32.0 THE RULING AND ITS CONDITION

Tina, 30 Jul 2026: **"as long as it can help that I don't have to waste hours duplicating things."**

That is the ruling **and** the acceptance test. Both ledgers exist to stop repeated work, not to add
process. **A gate that blocks a correct edit is an obstacle, not a watcher**, and §32 is written so that
neither ledger can become one — see §32.2 and §32.4, where each has an explicit non-blocking rung.

**THE TWO FAILURES BEING CLOSED, both on 30 Jul, both cost hours rather than correctness alone:**

1. **A record appeared outside a merge.** `merge.js` reported `0 + 4 = 4`, `node --check` and
   `pricecheck` independently confirmed **4**, and a fifth record — `indonesia-nasi-uduk` — was
   afterwards present in `wk_indonesia.js` and in the copy already handed to Tina. **Nothing in the
   toolchain could have caught it**: merge validates what it is *handed*, pricecheck reports on whatever
   is in the *file*, and neither knows how many records were *supposed* to be there.
2. **Four fabricated entries in `prices.js`, three of them figures signed with Tina's name** —
   `sambal terasi` 590, `peanut sauce` 260, `rendang paste` 520, and a false "Tina re-sourced tempeh"
   comment. Reverted with `git checkout`. Separately, she was asked for the hon dashi price she had
   already given on 29 Jul, and the identical reasoning was re-derived from scratch, nearly shipping a
   **duplicate `"dashi": 13`** where the last one wins silently.

⚖️ **THE LADDER, one rung past §29.5: missing < duplicate < wrong < WRONG-AND-SIGNED.** A fabricated
figure wearing Tina's name renders as a number, *looks* sourced, and its own comment tells the next
reader not to re-check it.
⚖️ **AND THE STANDING LAW THIS IS AN INSTANCE OF:** a silent hole needs a mechanical watcher, not
sharper eyes (§17, the ungated `tierBar`).

---

### §32.1 `reference/ASIA_LEDGER.json` — RECORD COUNT + CONTENT FINGERPRINT

`merge.js` writes, per country, the **record count** and a **sha256 fingerprint of the records array**
after every successful merge, and **checks them before the next one**.

- The fingerprint is taken over the **records**, not the file text, so a header edit or a reformat never
  false-alarms while a record appearing, vanishing or changing always does.
- The check runs **before validation**, because if the file's state is unexplained then validating a
  batch against it is answering the wrong question.
- The ledger is written **after** the country file, so a crash between the two leaves the ledger
  **behind** rather than ahead — failing loud next run instead of silently blessing an unverified state.
  **Missing < wrong**, as always.
- **Derived by `merge.js`, never hand-typed.**

### §32.2 TWO RUNGS, AND THE SPLIT IS THE WHOLE DESIGN

| Condition | Rung | Why |
|---|---|---|
| **COUNT** mismatch | **HARD REFUSE**, nothing written | A record appearing or vanishing outside a merge is **always** wrong. This is the rung that catches 4 → 5. |
| **HASH** drift, count unchanged | **LOUD WARN**, then proceed | Editing prose inside an existing record is legitimate and happened the same day (the Betawi etymology fix). Blocking that would make the tool an obstacle. |
| Country **absent** from the ledger | **BASELINE**, no refusal | Otherwise the first merge of every new country file is blocked by the tool meant to protect it. |

⚖️ **`--accept-count` EXISTS AND IS ON THE RECORD.** A deliberate re-baseline is available for when the
current file is known-good, it prints a warning naming itself, and **it must never be used to make a
surprise go away.** Find out what happened first.

### §32.3 `reference/PRICE_LEDGER.json` + `priceledger.js` — PROVENANCE

⚖️ **DERIVED FROM `prices.js`, NEVER TYPED.** A hand-maintained second list of prices is a second source
of truth, which is exactly the MF152-grepped-against-itself failure. `--seed` reads the real file. The
**only** thing added by hand is a **dated entry when Tina gives a new price**, because that is the one
fact `prices.js` cannot prove about itself.

- **84 existing Tina-attributed keys are GRANDFATHERED** — they predate the ledger and cannot be
  retro-proved, so they are recorded as-found rather than deleted or pretended-verified. 50 of them carry
  no date in their comment and are recorded as **undated, not invented**.
- `--check` **fails** any `prices.js` key claiming Tina attribution with **no ledger entry**. All four of
  the 30 Jul fabrications would have gone RED.
- **`--ask <term>` IS THE ONE THAT ANSWERS TINA'S CONDITION.** It searches the ledger *and* the live file
  *and* near-spellings, and answers "has she already given this?" in one command. Verified: **`--ask dashi`
  returns 🛑 ALREADY IN prices.js**, which is precisely the question that wasted her time.
- `--selftest` — **20 born-RED proofs**.

### §32.4 THE MATCHER RULE — earned, not designed

The tool produced a **false positive on its own first run**: `--ask "peanut sauce"` reported a hit that
did not exist, because a naive two-way substring test lets a short key match inside a longer phrase.
⚖️ **A false positive here is the exact harm the tool exists to prevent** — it would tell Tina a price is
already keyed when it is not, which is the *same* wasted hour from the other direction. So:

- a **single-word** key must match **exactly**, with plural tolerance;
- only a **multi-word** phrase may match by **containment**;
- **space-stripped equality is kept**, because `bean sprouts` vs `beansprouts` cost her a repeat once.

⚠️ Also fixed on the first run: the scanner read whole lines and picked up `"dashi": 13` from inside a
**comment** documenting the near-duplicate, reporting a phantom second key. **A key named in prose is not
a key** — the code side of a line only.

### §32.5 MANDATORY SEQUENCE — this is the part that must be obeyed

⛔ **BEFORE ASKING TINA FOR ANY PRICE:** `node priceledger.js --ask <term>`. If it says
**ALREADY IN prices.js**, the question is whether the number is **wrong**, never whether it is missing
(§29.5). **Do not re-source a right number.**
⛔ **WHEN SHE GIVES A PRICE:** key it in `prices.js` **and** add a dated ledger entry **in the same
message**. Never deferred, never left as prose in MF152.
⛔ **AFTER ANY `prices.js` EDIT:** `node priceledger.js --check`.
⛔ **`merge.js` NOW RUNS THE STATE LEDGER AUTOMATICALLY.** No extra step, no flag, nothing to remember —
which is the only way a gate survives contact with a long session.

### §32.6 PROVEN, NOT ASSERTED

| Check | Result |
|---|---|
| `node merge-selftest.js` | **48 passed · 0 failed** (42 pre-existing + **6 new ledger proofs**) |
| `node priceledger.js --selftest` | **20/20** |
| `node pricecheck.js --selftest` | **26/26** unchanged |
| Live end-to-end: phantom 12th record injected into `wk_indonesia.js` | **HARD REFUSE**, exit 1, *"A RECORD APPEARED outside a merge"* |
| File restored afterwards | **md5 byte-identical** (`ba2480c7…`), 11 records, ledger state `match` |
| `pricecheck.js indonesia` | exact 41 · wrong-product 0 · absent 0, **unchanged** |
| `tinza-doctor.js` | **RED 10 floor, unchanged** |

⚖️ **ONE BUG THE SELF-TEST CAUGHT IN THE GATE ITSELF**, worth recording because it is the argument for
the discipline: `module.exports` was placed above the ledger block and died with *"Cannot access
'LEDGER_PATH' before initialization"* — a temporal dead zone on a `const`. It was caught on the first run
of `merge-selftest.js` after the edit, before anything shipped. **Never edit `merge.js` without running
the self-test.**

### §32.7 HONEST LIMITS, stated the way the other tools state theirs

- `ASIA_LEDGER` proves **state**, never correctness. It cannot tell you a record is good — only that the
  set of records changed when it should not have.
- `PRICE_LEDGER` proves **provenance**, never correctness. It cannot tell you R2000/kg is the right
  keluak, or that a normalisation is sound.
- Neither replaces **Law 2**: Tina's eyes on live close a bug.

---

## 🌍 33 · **A SOUTH AFRICAN WORD IS EXPLAINED, NEVER TRANSLATED AWAY** — **RULED 31 Jul 2026 (Tina)**

> **Tina, 31 Jul 2026, in her own words:**
> *"as long as it is written somewhere, what it is, **preferably on gloss**, but otherwise when they open the recipe."*
>
> Asked because the app must be **readable to the rest of the world, not just SA** — a reader in London
> or Lagos meets *boerewors*, *vetkoek*, *pannekoek*, *umngqusho* and must not be left guessing.

### §33.0 THE RULING

**Every South African term must be resolvable BY A READER WHO HAS NEVER LEFT THE CARD SHE IS ON.**

1. 🥇 **PREFERRED — GLOSS AT THE MENTION.** The term, then the explanation, right there:
   *"serve it with pap (soft maize porridge)"* · *"pap — the soft maize porridge"*.
2. 🥈 **FALLBACK — THE OPENED RECIPE EXPLAINS IT.** Automatic when the term **is** the dish: a
   Bobotie card need not gloss *bobotie*, because `name` + `nameAlt` already say what it is.
3. ⛔ **NEITHER = A FAULT.** A term used mid-sentence, on a card that is not that dish, with no
   explanation anywhere on it, is a reader hitting a wall.

### §33.1 ⚖️ IT IS A GLOSS. IT IS NEVER A REPLACEMENT.

**`/tinza` already ruled this half and it is not softened here:**

> ## **"There is no English word for a koeksister. THERE IS A KOEKSISTER."**

The dish name **stays**. It is explained, not swapped, not anglicised, not "internationalised".
🩸 **Boerekos is not a category. It is the house she lives in.** A Tinza that says *"plaited doughnut"*
instead of *koeksister* has sold the only thing NYT Cooking can never copy.
⚖️ **GLOSSING and SWAPPING are two different operations. This ruling authorises only the first.**

### §33.2 WHAT WAS ALREADY RIGHT — MEASURED 31 JUL, NOT ASSUMED

`wk_southafrica.js` = **131 records · 131 carry an English `nameAlt` · 112 carry `aliases[]`.**
Many names already gloss inline: `Melktert (Milk Tart)` · `Potjiekos (Three-Legged-Pot Stew)`.
✅ **The card level was never the problem.** A foreign reader opening a card already gets
*Golden Spiced Mince Bake* under **Bobotie**.

### §33.3 🩸 WHERE IT ACTUALLY LEAKS — AND IT WAS PREDICTED SIX WEEKS AGO

**68 bare mentions across the corpus** — an SA term used in prose, on a card that is not that dish,
with nothing on the card to resolve it: `pap` ×15 · `umngqusho` ×7 · `chakalaka` ×5 ·
`roosterkoek` ×4 · `morogo` ×4 · `boerewors` ×3 · `bunny chow` ×3 · `amasi` ×3 · `samp` ×3.

⚠️ **The worst class: `pap` and `samp` appear in prose but are NOT the name of any card.**
There is no recipe to open and no link to tap. The fallback route does not exist for them.

⚖️ **THE LOCALE RULING (§11, 15 Jul) CALLED THIS EXACTLY AND IT WAS NOT OBEYED:**
> *"author SA-first, but **mark every locale-specific line as it is written** — so UK/US is a
> fill-in, not a rewrite of 2,083 recipes. **The marking is free today; the rewrite is not.**"*

**Nothing was watching, so the marking stopped.** ⚖️ **Law 15 · and the same diagnosis as
`pricecheck`, the `tierBar` and `wowcheck`: a silent hole needs a mechanical watcher, not sharper eyes.**

### §33.4 ✅ THE WATCHER — `tinza-echo.js` RUNG 6 (built the same day)

`node tinza-echo.js [country] [batch.js]`, and inside `/all`. Three states, no judgement:
- ✅ **GLOSSED** — explanation follows the term · or the card **is** that dish (`name` / `nameAlt` / `aliases`)
- 🟡 **LINK-ONLY** — a `crossLink` reaches it. Allowed, but flagged: it is a tap away, **not on the recipe she opened.** *(Currently 0.)*
- 🔴 **BARE** — nothing resolves it. **The fault.**

⛔ **`sambal` IS DELIBERATELY NOT ON THE SA LIST.** It reads Cape Malay and it is also Indonesian —
and in this corpus it is Indonesian on **34 of 34** cards. Listing it as "an SA term" would put a
**wrong reason beside a real finding**, which teaches a reader to distrust the whole rung.
⚖️ Untranslated *non-SA* loanwords are a different list and need their own ruling.

### §33.5 HONEST LIMITS

- It sees whether an explanation **exists**, never whether it is **correct or good**. *"pap (a type of
  couscous)"* passes the rung and is a **potato bobotie**. ⚖️ **Law 43 — still Tina's eyes.**
- The term list is **hand-written and therefore incomplete.** A word nobody added is a word nobody
  watches. Add to `SA_TERMS` as they appear; the list is not a closed set.
- It does not touch the **display dictionary** the LOCALE ruling called for. That is still **ruled and
  NOT built** — confirmed 31 Jul, no matching code in `core.js` or `index.js`. When it is built, the
  gloss can become locale-conditional (invisible to an SA reader, shown to everyone else) and this
  ruling does not change: **the explanation must still exist.**

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

### §33.7 ⚠️ THE FALSE-POSITIVE FLOOR — 4 REMAIN AND THEY ARE CORRECT AS WRITTEN

`indonesia-sate-ayam` *(sosatie ×2)* · `indonesia-dendeng-balado` *(biltong)* ·
`boerekos-koeksisters` *(koesister)*. **All four explain the term IN PROSE, without bracket
punctuation**, which the rung cannot see:

> *"The Afrikaans **sosatie** comes from the Malay words for sauce and for skewered spiced meat…"*
> *"Dried meat turns up as **biltong**, as jerky, as charqui in the Andes…"*

⚖️ **Adding brackets to these would make the writing WORSE, and the rung exists to serve the writing,
not the other way round.** **4 is the floor, not a debt.** ⚖️ Same shape as the `/wow` why-led check
demoted on 30 Jul: **count, never judge — then a human reads the count.**

### §33.8 ⚖️ SOME WORDS HAVE NO TRANSLATION. THOSE GET AN **EXPLANATION**, NOT A NEAR-MISS.

**Ruled by Tina, 31 Jul 2026:** *"waterblommetjie and roosterkoek are 2 of those that can't be
translated properly, maybe just explanations will do."*

⚖️ **THIS IS §33.1 ARRIVING FROM THE OTHER SIDE.** That clause protects the NAME — *there is a
koeksister.* This one governs the BRACKET: when no English word exists, **do not reach for the
nearest one.** A near-miss translation is worse than a plain description, because it reads as
authoritative and is quietly wrong. ⚖️ **Law 43 — a confident lie is the failure; "I can't translate
this, here is what it is" is not.**

| term | ❌ near-miss | ✅ explanation |
|---|---|---|
| `waterblommetjie` | ~~Cape pond-flower buds~~ | **the buds of a Cape marsh flower, cooked like a vegetable** |
| `roosterkoek` | ~~bread rolls baked on the braai grid~~ | **rounds of dough cooked straight on the braai grid until they crust** |

🩸 **WHY THE FIRST COLUMN FAILED.** *"Cape pond-flower buds"* sounds like a botanical name and is not
one — nobody buys or says that, and it tells a cook nothing about what lands on the plate.
*"Bread rolls"* implies something bought and baked in an oven, which is the one thing a roosterkoek
is not: **it is dough that meets the fire directly.** Both were plausible. **Plausible is the
problem** — the same shape as the potato bobotie.

✅ **THE TEST:** *Does the bracket tell her WHAT ARRIVES ON THE PLATE and HOW IT WAS MADE?*
If it only offers a different word, it is a translation and it has failed.
⚠️ **The remaining glosses in the map are Tina's to correct** — she is the caterer and the domain
expert, and every one of them is a claim about South African food made by a model. ⚖️ **Law 11.**

---

## ⚖️ 37 · **BUDGET IS A CLAIM, NOT A CATEGORY** — **§37.1 THE COMPARATOR** — **RULED 4 Aug 2026 (Tina)**

**§37 stands as carried:** a fork may carry `Budget` only if its `costPP` is at or below the
parent's. A meat→tofu, meat→legume or meat→egg swap is a **diet** fork, labelled by diet,
never by cost.

### §37.1 THE COMPARATOR IS THE **DEFAULT VERSION**. NEVER THE CHEAPEST SIBLING.

> ⚖️ **A `Budget` fork is measured against the record's DEFAULT version — the one carrying
> `default: true`. It is NEVER measured against whichever sibling happens to be cheapest.**

`claimcheck.js` has always implemented it this way and says so in its own words:
*"A3: the budget fork must come in under the default."* **This clause exists because the
prose drifted away from the tool, not because the tool was wrong.**

🩸 **THE DRIFT, NAMED.** §30.3 carries the line *"budget fork **leads** and must be cheapest
(A3)"*. **"Cheapest" is the loose word and it is now STRUCK** — see the marker at that line.
A three-version record where the default is the *middle* price has a cheapest sibling that is
not the default, so the two readings disagree, and the wrong one passes a fork that A3 fails.

### §37.2 🩸 WHAT IT COST — 4 AUG 2026, THE MUSHROOM RE-PRICE

Three mushroom keys moved to R140 and 47 `costPP` figures were re-derived. A pre-write screen
was written to catch any fork that stopped being cheaper than its siblings. **It used the
cheapest sibling. It reported ONE breach.**

| record | what the screen said | what `claimcheck` said |
|---|---|---|
| `thailand-khao-tom` | ⚠️ breach — R46 → R52 | ⚠️ breach |
| `thailand-nam-prik-ong` | ✅ **clean** | 🔴 **R47 against a DEFAULT of R44** |

⚖️ **`nam-prik-ong` was caught only because `claimcheck.js` was run AFTER the write.** Its
default is not its first version and is not its cheapest — precisely the shape the wrong
comparator cannot see. Both forks had `Budget` struck; both are now labelled by diet alone.

**AND THE SAME ERROR MIS-SIZED THE BACKLOG.** The screen reported **13** pre-existing Budget
failures across five lanes. `claimcheck` reports **12**, and they are *not the same twelve* —
the engine-based screen missed `china-staple-master-stock` and `china-staple-suan-cai`, whose
stale `costPP` fails A3 while their engine cost does not. **A list built on the wrong
comparator is not a shorter list. It is a DIFFERENT list, and it looks just as authoritative.**

### §37.3 THE STANDING INSTRUCTION

⛔ **DO NOT hand-roll the A3 test.** ✅ **Run `node claimcheck.js <lane>` and read the
🔴 CONTRADICTIONS block.** It is the only implementation of this rule, and any second one is a
copy that will drift — the same design law that keeps `merge.js`, `costcheck.js`,
`pricecheck.js` and `tinza-all.js` shelling out instead of reimplementing.

⚠️ **`claimcheck.js` scores the AUTHORED `costPP`, not the live engine figure.** Where a
`costPP` is stale the two disagree, and A3 is judged on what the CARD SAYS — which is what the
reader sees. §30.1 parity is what keeps them the same number.
⛔ **`wk_europe.js` is not covered by `claimcheck.js` at all** — see **MF153**.

---

## ⚖️ 3m · **A `_each` PRICE IS DERIVED, NEVER AUTHORED** — **RULED 4 Aug 2026 (Tina)**

⚠️ **HOUSEKEEPING NOTE, WRITTEN BECAUSE IT WILL CONFUSE THE NEXT SESSION:** the PRICE-KEY §3
family (`§3j` substring fallthrough, `§3l` wide-band, and now `§3m`) is cited across the repo
but **has no home section in this file** — `## 3` here is TINZA CHEF. The clauses are real and
carried; the numbering belongs to the price-key ladder, not to §3 Chef. Do not renumber either.

### §3m THE RULE

> **A `_each` price is DERIVED as `weight × per-kg`. BOTH figures are recorded in the
> `prices.js` comment. It is never authored as a bare number.**

⚖️ Same law as §30.1 for `costPP`: **a figure that is typed is a figure nobody can check.**
A count price with no weight behind it cannot be re-derived when the per-kg key moves, so it
silently goes stale — and a stale count price renders as a number and looks correct.

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

### §3m.2 🩸 THE SPLIT THIS LEFT OPEN — DELIBERATE, AND IT IS TINA'S TO CLOSE

`chillies_each` and `chillis_each` **were left at R1** while `chilli_each` moved to R2. They are
the same product. The reason is scope, not oversight: the two lines resolving through `chillies`
(`thailand-miang-kham` "2 chillies", `thailand-kua-kling` "3 chillies") are hers to rule per line,
and moving the key would have pre-empted that ruling.

⚠️ **Until she rules, "1 chilli" costs R2 and "2 chillies" costs R1 each.** This is the same shape
as the `mushroom` R165 / `mushrooms` R90 pair and the live `chilli flakes` R180 / `chili flakes`
R700 pair. ⚖️ **It is written down so it is closed deliberately, not discovered by drift.**
