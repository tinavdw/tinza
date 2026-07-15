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

### 🆕 🌍 LOCALE — ONE RECIPE, MANY KITCHENS — **RULED 15 Jul 2026**
**SA is locale #1.** Location (set in Settings) picks the kitchen: **SA now, UK/US later.**
Two mechanisms, kept separate:
- **TERMINOLOGY** *(word-level)* — brinjal↔aubergine, mielie↔corn. Display-only swap, **same ingredient**. A dictionary applied at render.
- **PRODUCT** *(item-level)* — things that don't cross the border: Ro-Tel→tinned tomato + green chilli; snoek→smoked mackerel. A **per-locale override on specific ingredient lines**, may nudge the method.

🚫 **Locale is NOT a version chip.** Versions (Classic/Budget/Quick) = the USER picks. Locale = the SYSTEM picks, invisibly, from location. **Two separate axes — never tangle them.**

➡️ **DISCIPLINE (⚖️ Law 53):** author **SA-first**, but **mark every locale-specific line as it is written** — so UK/US is a *fill-in, not a rewrite* of 2,083 recipes. The marking is free today; the rewrite is not.

**v1 ships SA only. UK/US is post-launch.**

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

📌 **HOW TO USE THIS FILE**
1. **Tina rules something → it goes in HERE, in the same breath, with the DATE and the REASON.** ⚖️ Law 52.
2. **`CLAUDE.md` points here.** Every session, every AI, reads it before touching code.
3. **Any ruling with a number becomes a doctor check.** ⚖️ Law 42 — the ratchet.
4. ⛔ **If this file and the code disagree — THE FILE IS RIGHT AND THE CODE IS A BUG.**
