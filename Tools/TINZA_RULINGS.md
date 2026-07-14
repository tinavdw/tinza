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
- Browse **every** recipe · **cook and view the full recipe** · scale **+/−** (guests/servings) · **Anchor Ingredient**
- Sees the **dietary BADGE** on a card. *(Ruled 12 Jul.)*
- Sees the **honest COUNT** behind a lock: *"199 vegan recipes in Tinza — unlock with Pro."* **Never zero results. Never a lie.** ⚖️ Law 3.

### PRO (level 1) — R90/mo
Cost *(green food-cost / gold shop-spend)* · **My Plan** · **shopping list** · downloads · **the whole nutrition grid INCLUDING calories** *(ruled 7 Jul — supersedes "calories always free")* · **all dietary FILTERS** *(ruled 12 Jul)* · **Tinza Chef** · **Favourites** *(ruled 13 Jul)* · pantry · leftovers

### DELUXE (level 2) — price TBD
**Events** *(Buffet · Cakes · Beverages · Wedding)* · **the Weekly Planner** · the newsletter / monthly letter

🚨 **Moving Events → Deluxe is a GATE MIGRATION** — every Events screen re-gated. **Its own session. Not a price change.**

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

### 🆕 HOW MANY, AND WHEN — **RULED 14 Jul 2026**
> 🩸 **TINA SAID THIS THREE TIMES BEFORE IT WAS WRITTEN. ⚖️ LAW 52 EXISTS BECAUSE OF THIS RULING.**

- 🍽️ **He serves 3–4 dishes AT A TIME.** Not a wall of ten.
- 🔄 **WHILE SHE IS BROWSING THOSE, HE KEEPS LOOKING.** The chef works in the background, never blocking, never a spinner in her face.
- 🪜 **THE LADDER:** every dish that uses **ALL** her ingredients first. **When those run out — dishes using 3 of them.**
  ⛔ **NEVER fewer than 3.** ⚖️ **Law 41 — a match of 2-of-4 is not a match, it is a coincidence. The threshold IS the feature.**
- 💰 **SAME FRIDGE = ONE PAID CALL. EVER.** `_fourCache` keys on the ingredient SET.
  ⚖️ **Law 20 — the cache is not a shortcut. IT IS THE BUSINESS MODEL. Never reset it.**
- ⛔ **A BUTTON THAT CANNOT DO WHAT IT SAYS IS A LIE.** If the cache means "Find again" returns the same cards — **delete the button or change what it does.** ⚖️ **Law 3.**

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

## 🥬 6 · DIETARY

**RULED 12 Jul 2026 · extended 14 Jul.**

- **V + VE only for v1.** Vegetarian and Vegan. Nothing else yet.
- **The BADGE is free. The FILTER is Pro.**
- ⛔ **NOTHING EVER AUTO-HIDES ITSELF.**
- ✅ **`diet:'unknown'` is REQUIRED as a fourth state.** *(Ruled 12 Jul. **STILL NOT BUILT.** ⚖️ Law 15.)*
- ✅ **ONE VOCABULARY — BUILT 14 Jul 2026** *(commit `d9e6885`, MF94-A)*. `DIET_NORM` in `rec()`: **`veg` → `vegetarian`** · **`meat` → `omnivore`**. **Two rooms were writing two words for the same food** *(World Kitchen said `vegetarian`/`omnivore`; meals + budget_floor said `veg`/`meat`)* — **and the filter learned one and went blind to the other.** ⚖️ **Law 46.**
  📏 **vegetarian 461 · omnivore 406 · vegan · pescatarian. `veg` and `meat` no longer exist.**
- ✅ **`unknown` IS BUILT** *(same commit)*. **998 blank labels now read `unknown`, not blank.** ⚖️ **Law 45 — an unlabelled recipe was being treated as MEAT. A chutney is not a steak.**
- ⛔ **STILL OPEN:** the **ladder** *(127 vegan recipes are invisible to the vegetarian filter — Law 48)* and the **prose bug** *(13 MEAT recipes answer a vegetarian search via a version's prose — Law 47)*. **Different bugs. Not fixed.**
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

---

## 🚨 11 · LAUNCH BLOCKERS *(top of October)*

- ⛔ **MF57 — THE PWA SERVICE-WORKER CACHE.** ⚖️ **Law 27 — published ≠ what her browser runs.**
  💀 *A user who installs in September can be frozen on old code FOREVER — old prices, the R38 lamb tagine — and she will never know.*
- 🔒 **HIDE THE TIER SWITCHER.** It is on live, on every screen, right now.
- 💰 **MF78 — THE AI COST CAP.** The chef is live and firing. **This is real money now.**
- 💳 **PayFast, R90/mo.**
- 🎨 **The Home page still needs designing — and is still BLACK.**

---

## 😴 12 · MOOD — WHAT **"JUST FEED ME"** IS

**RULED 14 Jul 2026.** *Today: `MOOD_DB` (`core.js:1447`) = **12 moods × 3 hand-typed recipes = 36**. **2% of the app.** ⚖️ Law 15 — a shelf is a QUERY, not a LIST.*

### 🚫 MOOD DISQUALIFIERS — **NEVER SERVED IN A MOOD**
⛔ **Tinned meat** *(bully beef · spam · viennas)* · ⛔ **instant noodles** · ⛔ **tinned pâté**

> 🩸 **EXHAUSTED IS NOT POOR. EXHAUSTED IS NOT DESPERATE.**
> **She is tired, not broke. She still wants REAL FOOD — just EASY.**
> **Cheap food belongs in 💰 I've Got R100 — that room is ABOUT the price.**
> **A mood is about how she FEELS.** ⚖️ **Law 23 — one room, one question.**

### 🍰 "SWEET" SPLITS IN TWO → **13 MOODS**
| | |
|---|---|
| 🍰 **"Something sweet to finish"** | dessert · a bake · a treat **after** the meal |
| 🍯 **"Sweet & savoury supper"** | pannekoek · pampoenkoekies · a sweet-savoury plate that **IS** the meal |

**REASON:** 🩸 **You cannot eat cake for dinner.** And her own 3 `sweet` picks contain **NO cake** — the `prompt` in `MOODS` (`core.js:1439`) says *"cake, tart, pudding or biscuits"* while the PICKS say something else entirely. **The PICKS win.** ⚖️ **Law 44 — a button must do what it says.**

### 🪜 THE SHELF BEHIND THE PICKS
- ✅ **The 36 hand-picked stay — as the CURATED TOP.** *(They carry a mood-framed `why` that no query can write.)* ⚖️ **Law 11.**
- ✅ **A QUERY over `allRecipes()` is the DEEP SHELF behind them.** 🏆 **Budget already does exactly this** — `_budgetPool()` (`budget.js:212`) + 9 curated `BUDGET_FLOOR_RECIPES`. **LIFT IT, don't invent it.** ⚖️ **Law 35 · Law 50.**
- 💰 **The paid chef only wakes when the shelf is THIN.** *(Today it wakes because the shelf is 36 deep. That is Tinza paying Anthropic to invent food Tina already wrote.)*

---

## 🔌 13 · LOAD-SHEDDING — **A FIRST-CLASS FILTER. NOT A MOOD.** 🏆

**RULED 14 Jul 2026.**

- **`noPower` = the method needs NO oven, NO grill, NO air-fryer.** *(Gas hob, braai fire, no-cook, and anything already baked all pass.)*
- 📏 **MEASURED 14 Jul: 1,197 recipes qualify TODAY.** *Nothing to author. It is already on live.*
- 🪟 **It sits NEXT TO THE DIETARY FILTER** — a standing filter on the whole app, not a mood tile. *A mood is how she feels. The power being off is a FACT about her kitchen.*
- 🔒 **It is a PRO feature.**

> 💰 **NYT COOKING AT R49.99 WILL NEVER BUILD THIS. NOBODY OUTSIDE THIS COUNTRY WOULD THINK OF IT.**
> 🏆 **THIS IS THE MOAT. 1,197 recipes for when the power goes out.**

---

## 🏛️ 14 · THE 12th AND 13th COLUMNS

**RULED 14 Jul 2026.** ⚖️ **Law 11 — derived in NODE, never by hand. Law 45 — empty means `unknown`, never "no".**

### 📅 THE 12th — THE MEAL SLOT
**BREAKFAST · LUNCH · SUPPER · SIDE · TREAT.**
🩸 **WHY:** *1,826 recipes do not know whether they are breakfast or supper — which is why an "I'm exhausted" query hands her **Boererusks for supper**.*

✅ **LOCKED 14 Jul 2026 — THE COLUMN IS CALLED `slot`. BUILT. `unknown` = 0 of 2083.**
*(Commits `f429a17` · `c05096a` · `d9b4922` · `4020da1`.)*

**THE TEN TOKENS — the canonical vocabulary. ⚖️ Law 46 — nothing outside this list may ever enter the column.**

| token | n |
|---|---|
| **SUPPER** | 837 |
| **TREAT** | 336 |
| **CONDIMENT** | 217 |
| **SIDE** | 210 |
| **DRINK** | 119 |
| **STARTER** | 115 |
| **LUNCH** | 106 |
| **BREAKFAST** | 63 |
| **PETFOOD** | 62 |
| **BABYFOOD** | 18 |
| `unknown` | **0** — *stays in the code forever as the final fallback. Emptied, never deleted.* ⚖️ **Law 45.** |

- ⛔ **STARTER DOES NOT FOLD INTO TREAT.** *A samosa is not a dessert.*
- ⛔ **SIDE DOES NOT FOLD INTO SUPPER.** *A chakalaka is not dinner.*
- ⛔ **THE TOKEN NAMES THE FOOD, NEVER THE ROOM.** `PETFOOD`/`BABYFOOD` — **not** `FURRY`/`TINY`. *Every other token describes food. A room name in a food column is a second axis smuggled into the first.* ⚖️ **Law 46.**

### 🚨 THE COLLISION — AND THE TRIPWIRE THAT NOW GUARDS IT
💀 **World Kitchen ALREADY has a field called `occasion`** — *festival · Christmas · street-food · everyday.* **117 distinct free-text values, 993 of 1,021 filled. IT IS NOT A MEAL SLOT.**
✅ **It was left untouched.** It stays a "when in life" tag — useful later for 🎉 Events.
🩺 **`tinza-census.js` §11 now fires if any `occasion` value ever leaks into `slot`.** ⚖️ **Law 42 — the rule no longer lives in a human's memory.**

### 📏 DERIVATION ORDER *(most specific first — index.js `slot()`)*
`mealCat` → `cat` → `course` → **SECTION rule** → **`mealRole` fallback** → `unknown`
*(WK strays: `course:'soup'` → **SUPPER** — soup is a main in SA, per index.js:110. `course:'salad'` → **SIDE**.)*

### 😴 THE 13th — `mood[]`
- ⚖️ **DERIVED from TIME + SECTION + INGREDIENTS.**
- ⛔ **NEVER matched against the `feel` PROSE.** ⚖️ **Law 47 — that is how a vegan got a lamb tagine.**
- ⚠️ **`impress` and `pickmeup` are PURE TASTE. Not derivable. They stay hand-picked.** ⚖️ **Law 11.**

### 📏 WHAT THE RAW DATA ALREADY HAS *(measured 14 Jul — no authoring needed)*
| source | recipes | what it gives |
|---|---|---|
| `r.mealCat` *(already in the index)* | **257** | breakfast · lunch · supper *(FMF)* |
| `r.cat` *(meals.js + bakes raw — **rec() drops it**)* | **367** | soups · salads · stewscurries · ovenbakes · quick · handhelds · savbakes … |
| `r.course` *(World Kitchen raw — **rec() READS it, then throws it away**)* | **1,021 of 1,021** | main **513** · dessert **189** · side **172** · starter **115** · drink **29** |
| **SECTION rule alone** *(spice · braai · health · events · beverages · furry · tiny · floor)* | **695** | deterministic — a chutney is a CONDIMENT, a rusk is a TREAT |
| 🏆 **CANNOT BE DERIVED** | **0** | **every single one of the 2,083 can get a slot.** |

---

📌 **HOW TO USE THIS FILE**
1. **Tina rules something → it goes in HERE, in the same breath, with the DATE and the REASON.** ⚖️ Law 52.
2. **`CLAUDE.md` points here.** Every session, every AI, reads it before touching code.
3. **Any ruling with a number becomes a doctor check.** ⚖️ Law 42 — the ratchet.
4. ⛔ **If this file and the code disagree — THE FILE IS RIGHT AND THE CODE IS A BUG.**
