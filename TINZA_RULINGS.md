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
