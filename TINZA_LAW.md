# 📕 TINZA_LAW.md — **HOW WE WORK**

> **Trigger: `/law`**
>
> **This file is not about what Tinza IS.** That is `TINZA_RULINGS.md` (`/rule`).
> **This file is about how we WORK.** Every clause below was **paid for** — by a bug, a wasted
> day, or real money. **None of it is theory.**
>
> 🩸 **These laws lived inside `TINZA_NOW.mermaid` — a board we REDRAW every session.
> Our law book was a whiteboard. As of 14 July 2026, it is a book.**
>
> ⛔ **If this file and the code disagree — THE FILE IS RIGHT AND THE CODE IS A BUG.**

---

## 🩺 THE FOUR THAT COME FIRST

> ### ⚖️ **LAW 2 — A REPORT IS NOT PROOF. HER FINGERS ON LIVE CLOSE THE BUG.**
> Not `node --check`. Not "Code says it works." Not a passing test. **Not my reading of the code.**
> **Tina's finger, on tinza.netlify.app, after a hard reload. That is the only thing that closes a bug.**

> ### ⚖️ **LAW 22 — THE BRIEF IS A HYPOTHESIS, NOT EVIDENCE.**
> **Go and read the code. Every time.** *Fired twice in one week: Claude warned that a reset would "delete her meal plan" — **the meal planner is a `comingSoonHTML()` page. He had never opened it.***

> ### ⚖️ **LAW 4 — ASK "WHAT IS NOT GUARDED?" — NEVER "IS X GUARDED?"**
> *This one law turned ONE sticky tile into a census of SEVEN tools (four were broken), and turned
> "is I Have Chicken's Back broken?" into **seventeen private recipe keys and one shared fix.***
> 🏆 **It is the single most productive law in this file.**

> ### ⚖️ **LAW 15 — A RULING THAT LIVES ONLY IN THE CHAT IS NOT A RULING.**
> *R90 was ruled on **28 June**. It lived in the chat. Memory said R50 for **TWO WEEKS**, and `CLAUDE.md`
> said "R50 (FINAL)" for longer.* **This law was written in blood and it STILL bit us.**
> ➡️ **Its trigger is Law 52.**

---

## 📜 THE LAW, IN FULL

### 1 · `node --check` PROVES NOTHING.
It proves the file parses. It does not prove the app works. ⚖️ *See Law 2.*

### 2 · A REPORT IS NOT PROOF. HER FINGERS ON LIVE CLOSE IT.

### 3 · 🩸 SILENT WRONG IS WORSE THAN LOUD MISSING.
*An app that fails **convincingly** is more dangerous than one that fails visibly. A vegetarian types "veg", gets 125 results, and **believes Tinza answered her**. A "Find again" button that returns the identical four cards. A chef section that vanishes entirely when the fetch throws.*
**If you cannot do the thing — SAY SO, OUT LOUD, ON THE SCREEN.**

### 4 · 🏆 ASK "WHAT IS NOT GUARDED?" — NEVER "IS X GUARDED?"

### 5 · ONE THING PER COMMIT. AND GIVE THE COMMIT A NAME.
*Four commits = four revert buttons. One commit = one. When a finger-test fails at 22:00, you want to throw away the line that broke — not the three that work.*

### 6 · DON'T PATCH N SITES. BUILD THE ONE THING THEY SHOULD ALL CALL.
*The price is hard-coded **21 times**. The WhatsApp share link **21 times**. `goBack()` knew **one** of seventeen recipe keys.* **N sites is never the fix. The ONE thing they call is the fix.**

### 7 · 🩸 **THE LOCK IS THE SALESMAN.**
*A Free user sees "Unlock the cost with Tinza Pro", pays — opens Lamb Tagine — and gets **"not yet priced."** **The lock SOLD her something Tinza does not have.***
🏆 **RECOVERED 14 Jul from `TINZA_WK_PRICE_GAPS`.** ⚠️ **Law 44 is a restatement of this law. They are the same law, six weeks apart.** *(Tina to rule: merge 44 into 7, or keep both.)*

### 8 · ⚠️ **LOST. DO NOT REUSE.**

### 9 · **A CONTEXT-FREE ALIAS CANNOT STAND IN FOR A METHOD-DEPENDENT RULE.**
*A bare `lamb chops` means nothing until you know how it is cooked.*
🏆 **RECOVERED 14 Jul — partial text.**

### 10 · THE BUG IS IN THE DATA, NOT THE CODE.

### 11 · NO MODEL AUTHORS A PRICE — OR A NAME.
*A model may not invent a Rand figure, and may not name a traditional dish. **It may, however, have its output PRICED** — by `costRecipe()`, off shelf-verified PRICE_DB. Two different acts.*
*And: there is no English word for a koeksister. There is a koeksister.* **Gloss, never translate.**

### 12 · 🚨 **CONFLICT — TWO DIFFERENT LAWS ARE BOTH CALLED 12. TINA MUST RULE.**
- **12a** *(from `TINZA_BRIEF_MF28_rulings.md`, 12 Jul — Tina's own words)*: **DON'T SHIP A LOUD BLANK WHEN THE ANSWER IS RIGHT.**
- **12b** *(from a code comment in `index.js`)*: **VARIETY IS DETERMINISTIC. NO ML.** *(`balancedOrder` — a round-robin, not a model.)*
⚖️ **Law 22 — I did not guess. BOTH are written down somewhere. One of them needs a new number.**

### 13 · **A GUARD THAT NULLS A CORRECT ANSWER IS A BUG.**
*`Coconut oil for frying → coconut oil` is a **correct** key. The L3 identity blanket nulled it. **The guard was the bug.***
🏆 **RECOVERED 14 Jul.**

### 14 · **EVIDENCE, THEN BUILD. DRY-RUN BEFORE YOU SHIP.**
*"Do NOT build until you have dry-run the additions and shown me the false-positive list."*
🏆 **RECOVERED 14 Jul.**

### 15 · 🩸 A RULING THAT LIVES ONLY IN THE CHAT IS NOT A RULING.

### 16 · 🩸 **A COOK'S RULE IS NOT A SHOPPER'S RULE.**
*How you cook it and how you buy it are two different facts. Do not let one answer for the other.*
🏆 **RECOVERED 14 Jul.**

### 17–18 · ⚠️ **LOST. DO NOT REUSE.**

### 19 · 🏆 **A METRIC THAT DOES NOT EXIST IS A BUG YOU CANNOT SEE.**
*It is the instrument that found the 88 unpriced cards.* ⚖️ **This is the father of the CENSUS.**
🏆 **RECOVERED 14 Jul.**

### 20 · A CARD THAT PRICES **SOME** OF THE FOOD IS WORSE THAN ONE THAT PRICES NONE.
`missing[] = 0` → show the cost. **Anything missing → show NO cost.**
🆕 **AND: THE CACHE IS NOT A SHORTCUT. IT IS THE BUSINESS MODEL. NEVER RESET IT.**
*(`_fourCache` keys on the ingredient SET. Same fridge = one paid call, ever.)*

### 21 · ⚠️ **LOST. DO NOT REUSE.**

### 22 · 🩸 THE BRIEF IS A HYPOTHESIS, NOT EVIDENCE.

### 23 · TWO BUGS SHARING A NAME DO NOT SHARE A FIX.
*"Braai has no cost" is a **BUG** — the adapter bins it. "A chutney has no cost" may simply be **TRUE**.*
*`moodPage` is a page **INDEX**. `_fourPage` is a page **SIZE**. Same name-shape. **Copying the number across would have opened Just Feed Me on page five.***

### 24–25 · ⚠️ **LOST. DO NOT REUSE.**

### 26 · IF THE CODE KNOWS IT AT WRITE-TIME, STORING IT IS NOT A FEATURE.

### 27 · 🚨 PUBLISHED ≠ WHAT HER BROWSER IS RUNNING.
*The PWA service worker. **A user who installs in September can be frozen on old code FOREVER** — old prices, the R38 lamb tagine — and she will never know, and you will never see it.*
**HARD-RELOAD BEFORE YOU BELIEVE ANYTHING.** *(MF57 — the launch blocker.)*

### 28 · FURNITURE IS NOT CONTENT.
*Buttons, labels and headings must never be indexed as if they were recipes.*

### 29 · A COMPLETE WORD HAS NO NEXT LETTER.
*Word-start prefix matching, not raw substring.*

### 30 · A CROSS-LINK IS CONTENT **ABOUT** ANOTHER DISH.
*It must not pollute the search index of the dish it sits on.*

### 31 · 🩸 RENDER IT EMPTY ON THE WAY IN — DON'T CLEAR IT ON THE WAY OUT.
*You cannot catch every exit. You can always control the entrance.*

### 32 · ~~STRUCK — BUT NOW WE KNOW WHY.~~
🏆 **RECOVERED 14 Jul. Its text was:** *"SAMENESS APPLIES TO THE SAME JOB. A navigate pill and a filter input are not the same job."*
⛔ **STRUCK because MF63 ruled the opposite: Braai's pill SHOULD become an inline search. They SHOULD be the same job.**
🩸 **Keep the corpse visible. A law that was overturned teaches more than one that was never written.**

### 33 · FOLLOW THE PATHS TO WHERE THEY CONVERGE.
*`draw()` is the floor. **Every** navigation path lands there. Fix it once, at the floor.*

### 34 · A ROOM NOBODY COULD REACH IS A ROOM NOBODY MAINTAINED.
*Spice was never migrated to v33 — because you could barely get into it. `budget.js` and `tinyTummies.js` have **no `sectionHeader()` at all**, for the same reason.*

### 35 · 🏆 STEP 1 IS "READ", AND IT IS ALLOWED TO END THE TASK.
*It turned "build a clearing system" into "add one missing string." It turned "190 ingredient lists = a marathon" into **"the lists already exist — one adapter line."***
**LIFT THE CLOSER, DON'T INVENT ONE. EVERY BRIEF SHIPS WITH A STOP-CONDITION.**

### 36 · 🏆 THE COUNT IS TRUTH. THE RENDER IS A COURTESY.
**Don't guess — go and COUNT.** *"Is the dietary filter working?" → boot the index and ask it. Answer: **0 hits for "vegetarian", out of 399 vegetarian recipes.***

### 37 · DON'T PAINT A ROOM YOU ARE ABOUT TO DEMOLISH — **BUT CHECK YOU ARE DEMOLISHING IT.**
*A stale plan is worse than no plan. `CLAUDE.md` carried "FINISH EVENTS → Spice" for months.*

### 38 · 🏆 A TOKEN CARD HAS NO COLOUR OF ITS OWN. IT INHERITS.

### 39 · 🏆 A TOOL RESULT IS ALSO A HYPOTHESIS. CROSS-CHECK IT WITH YOUR EYES.
*The census's first run lied. The doctor said 192 recipes have no ingredients — **Tina's screenshot showed Peri-Peri Sauce with eight ingredients and a R36 price.** She was right. The doctor was reading the INDEX, not the source.*
🩸 **A LYING TOOL IS WORSE THAN NO TOOL.**

### 40 · 🏆 `|| []` DOES NOT CATCH AN UNDECLARED NAME.
**It THROWS — and an async throw VANISHES.**

### 41 · 🏆 A MATCH OF 2-OF-4 IS NOT A MATCH. IT IS A COINCIDENCE.
**THE THRESHOLD IS THE FEATURE.** *The floor is 3.*

### 42 · 🏆 THE RATCHET — EVERY BUG YOU CLOSE ADDS A CHECK TO THE DOCTOR.
**A bug the doctor catches cannot come back quietly. The bugs do not stop — THE WALLS GET HIGHER.**
🆕 **And every RULING with a number in it becomes a check too.**
🩸 **A rule a human must remember is not a rule. It is a hope.**

### 43 · 🏆 A MODEL MAY NOT BEND A DISH TO FIT THE FRIDGE.
**A BOBOTIE HAS NO POTATO IN IT — NOT EVEN IF SHE HAS A POTATO.**
✅ *Held on live, 13 Jul. Four honest names. Not one stolen.*

### 44 · 🆕 A LOCK MUST HAVE SOMETHING BEHIND IT. **NEVER SELL A PADLOCK ON AN EMPTY ROOM.**
*A Free user taps a chef's card, sees "💰 Unlock cost with Tinza Pro", pays — **and the box is empty.***
**NO COST → RENDER NOTHING, NOT A LOCK. NO TIME → NO EMPTY "⏱️ —".**
🆕 **AND SO MUST A BUTTON. A button that cannot do what it says is a lie.** *("Find again" returns the identical four cards, forever, from the cache.)*

### 45 · 🩸 **UNKNOWN IS NOT NO.**
**AN UNTAGGED RECIPE IS NOT A NON-VEGETARIAN RECIPE. AN UNPRICED RECIPE IS NOT A FREE ONE.**
*998 untagged recipes are silently filtered OUT as if they contained meat. **A chutney is not a steak.***
*"We CHOSE not to cost this" and "we FORGOT to cost this" are both `costPP: null`. **The app cannot tell them apart and drops BOTH silently.***
✅ **The fourth state is required: `diet:'unknown'` · `cost:'not-costed'`.**
🏆 **The pattern already exists and is LIVE: `worldkitchen.js:152` → "cost: not yet priced" — and `:534` even NAMES the ingredients it could not price.** ⚖️ *Law 35 — lift it.*

### 46 · 🩸 **ONE FOOD, ONE WORD.**
**TWO ROOMS THAT TAG THE SAME FOOD WITH DIFFERENT WORDS DO NOT HAVE A FILTER — THEY HAVE TWO FILTERS THAT DISAGREE.**
*`veg` in Feed My Family. `vegetarian` in World Kitchen. **48 vegetarian meals are invisible to the filter.***

### 47 · 🩸 **A DIET IS A FACT, NOT A WORD IN A SENTENCE. NEVER MATCH A DIET AGAINST PROSE.**
*A version's `feel` read "the much-loved **vegetari**an…" — **so a vegan was handed a Moroccan Lamb Tagine.*** ⚖️ *That is not silent wrong. **That is loud and wrong.***

### 48 · 🩸 **VEGAN IS A KIND OF VEGETARIAN. DIET IS A LADDER, NOT A ROW OF BOXES.**
*`vegetarian` must return **vegetarian ∪ veg ∪ vegan**.*

### 49 · 🏆 **THE TEMPLATE DRIFTS. THE COPIES OUTGROW THE ORIGINAL.**
**CHECK WHAT THE GOLD STANDARD *IS*, NOT WHAT IT *WAS*.**
*🔥 Braai (the "gold standard"): cost **0%** · diet **0%** · time **0%**.*
*🍽️ Feed My Family, **copied from Braai**: cost **100%** · diet **75%** · time **100%**.*
🏆 **BAKES IS THE TEMPLATE NOW. 8 of 9.**
⛔ **"Scrap and rebuild everything on Braai v33" is now a BUG FACTORY. STRUCK.**

### 50 · 🏆 **SAMENESS IS NOT A COSMETIC PASS. IT IS THE BUG LIST.**
*Every single bug found on 14 July was a sameness gap wearing a bug costume.*
⛔ **"Cosmetic sweep LAST" is STRUCK. Do the sweep last and you fix each hole one room at a time, forever.**

### 51 · **THE DOCTOR'S RED IS A BASELINE, NOT A GATE.**
**THE RATCHET IS "DID I *ADD* ONE?" — NOT "IS THERE ONE?"**
*The doctor has been RED with 10 for days. **If you wait for GREEN you will never push.***
**Count BEFORE. Count AFTER. Still 10 → push. 11 → STOP.**

### 52 · 🆕 🩸 **IF YOU HAVE SAID IT TWICE, IT IS NOT A PREFERENCE. IT IS A RULING.**
# **STOP AND WRITE IT DOWN BEFORE THE NEXT SENTENCE.**
**REPETITION IS THE TELL.**
*Law 15 tells you a ruling must be written. **Law 52 tells you how to NOTICE that you just made one.***
*Tina said "the chef must keep looking while I browse" **three times** before anyone wrote it down. That is three days.*
➡️ **The trigger is `/rule`. It goes straight into `TINZA_RULINGS.md`, with the DATE and the REASON.**

---

## 📌 STANDING ORDERS

- **PUSH RULE:** *"1 changed file"* → **PUSH.** *"0 changed files"* → **nothing to push.** **The screen never lies.**
- **Node `fs.writeFileSync`, NEVER Python.**
- **Count `core.js` before and after.** *(It is 4160 lines as of 14 Jul 2026.)*
- **Netlify is credit-based.** Batch validated files into ONE push. **Commit four times, push once.**
- **Never say "look for bugs"** — that has no end.
  ✅ **Say: "Run the doctor. Fix what is RED. Stop when the count has not grown."** — *a task with an end.*
- 🩺 **`node tinza-doctor.js`** — *is it broken?* → RED or GREEN. **5 seconds. Read-only.**
- 📊 **`node tinza-census.js`** — *how much of it is there?* → **a number.**
- ⛔ **TWO TOOLS. NOT THREE.** *(Claude tried to add a third without reading the second one properly. ⚖️ Law 6.)*
- 📌 **THE REPO IS PUBLIC — `github.com/tinavdw/tinza`. CLAUDE CAN CLONE IT, READ IT, AND RUN IT.**
  🏆 **THE REPO IS THE END OF GUESSING.** ⚖️ **Law 22.**

---

## 🏆 THE HARVEST — 14 JULY 2026

**Before the repo was tidied, every archived file was searched for lost laws.** ⚖️ **Law 15.**

✅ **RECOVERED: 7 · 9 · 13 · 14 · 16 · 19 · 32** *(and Law 12's second text).*
⛔ **STILL LOST: 8 · 17 · 18 · 21 · 24 · 25.** **DO NOT REUSE THESE NUMBERS.**
🚨 **AWAITING TINA: Law 12 has TWO texts. And Law 44 may simply BE Law 7.**

### 53 · 🆕 🩸 **FINISH THE WHOLE THING, OR IT IS NOT DONE.**
# **A FIX THAT DOES THE EASY CASES AND LEAVES THE REST FOR "A LATER PASS" IS NOT A FIX. IT IS A LEAK IN A GOOD MOOD.**
**THE LATER PASS NEVER COMES.**
*The 4-cheesecake story: the portion fix wired 3 of 9 categories and 69 recipes kept saying "4 people" for weeks. The diet 'unknown' ruling sat written-but-unbuilt for 3 weeks. Both slipped because "done" was declared on the easy half.*
**DONE = 0 of N remain. Prove it with the number — or give the remainder an MF number BEFORE the session closes.**
*A ruling written is not built. A fix half-wired is not done. Check the library before you add — we already had the Stroganoff.*
➡️ **When you start it, you finish it — all of it — or you name exactly what remains and put a number on it.**

---

### 54 · 🆕 🩸 **A CHECK YOU HAVE NEVER WATCHED FAIL IS NOT A CHECK. IT IS DECORATION.**
# **PROVE IT FIRES ON THE BUG IT WAS WRITTEN FOR — *BEFORE* YOU TRUST ITS GREEN.**
*20 Jul 2026. The bug-2 ratchet printed a **green tick** while silently skipping the exact template it was written for — its head pattern excluded the arrow form, so it scanned 27 templates and called them balanced when there were 35. **It would have shipped a passing check over a live bug.***
*Census 17 could never have caught the slot mislabel: the records were LABELLED `SUPPER`, so a check that reads labels is blind to a mislabel **by construction**.*
➡️ **Write the check. Then re-introduce the bug and WATCH IT GO RED. Only then is it a check.**

### 54a · **A CHECK THAT CRIES WOLF TRAINS YOU TO IGNORE IT.**
**THREE FALSE ALARMS IN A RUN IS WORSE THAN NO CHECK AT ALL.**
*Census 18's flat-distribution rule flagged `beverages` 66/66 DRINK, `spice` 190/190 CONDIMENT and `furry` 62/62 PETFOOD — all unanimous **by definition**.*
➡️ **Exempt the PAIR, never the ROOM.** *`spice:CONDIMENT` is exempt; `spice:SUPPER` still flags. Exempt the room and a genuine blanket assign inside it stays silent forever — that is the escape hatch.*
➡️ **The exemption list is EXPLICIT, SHORT, and PRINTS ON EVERY RUN. Adding a fourth entry is a RULING, not a code change.**

### 54b · **A ZERO MUST DISTINGUISH "NONE FOUND" FROM "COULDN'T LOOK."**
# **A CHECK THAT REPORTS 0 OVER A SURFACE IT NEVER REACHED IS WORSE THAN ONE THAT FAILS.**
*Census 21 printed a green **"0 Tiny Tummies records, 0 finger foods"** over two surfaces it had never opened — it read `ctx.BABY_RECIPES` as a const instead of a context property.*
*Same run: `base12` was an **object**, so `String(base12)` gave `"[object Object]"` and the gate passed everything on the exact surface it was written for.*
➡️ **If a surface is UNREACHABLE, FAIL LOUD. Never report 0.**

### 55 · 🆕 🩸 **NO ALCOHOL ON ANY SURFACE INTENDED FOR CHILDREN.**
# **ENFORCED AS A HARD EXCLUSION AT THE QUERY, BEFORE ANY PREDICATE RUNS. A RECORD CANNOT EARN ITS WAY ON.**
*Surfaces: **fussy · Kiddies · Tiny Tummies**. (Feeding My Family is NOT gated — it is family-facing, an adult cooking for everyone.)*
*Found because `fussy`'s predicate matched `cheese` inside **"cheesecake"** — serving Amarula Cheesecake and Gin & Tonic Cheesecake on the children's shelf. Same substring fault put Crunchy Ginger Biscuits on `sick` via `ginger`.*
⛔ **NO "COOKED OFF" EXCEPTION. The gate is ABSOLUTE.** *21 family staples were removed from fussy — Lasagne, Bolognaise, Tiramisu. **The answer is a no-alcohol VERSION, never a looser gate.***
➡️ **Detect on the INGREDIENT LIST *and* the METHOD — the next one will be a splash of brandy under a clean name.** *Vanilla essence is fine. Vinegar is judged per line.*
➡️ **Gate at the LOOKUP, not downstream** — *`kidsFingerById` reached into the ADULT party catalogue; a second caller can't miss a gate at the door.*

### 56 · 🆕 🩸 **ANYTHING DERIVED FROM THE INGREDIENT LIST BELONGS TO THE *VERSION*, NOT THE RECORD.**
# **DIET · ALLERGENS · COST · NUTRITION · ALCOHOL. ONLY THE VERSION THE PERSON SELECTED MAY BE DESCRIBED.**
🔑 **SEARCH MATCHES *ANY* VERSION. DISPLAY DESCRIBES *THE SELECTED* VERSION.**
*Vegetarian Bobotie must surface in a vegan search **and open on the vegan version**. Which means a search result is a **`(record, version)` pair**, not a record.*
🩸 **THE TWO FAILURES ARE OPPOSITE AND MUST NOT SHARE A RULE:**
*A missed veg bobotie is a **lost sale**. A record reading "nut-free" while the selected version contains peanuts is a **harm**.*
➡️ **Diet searches PERMISSIVELY. Allergens display CONSERVATIVELY.**
⚠️ **`contains` is locked at RECORD level in the seven-field contract. It is genuinely VERSION level. That is a hole in the contract.**
➡️ **One function, `deriveFacets(effectiveIngredients, method)`, in Node, once PER VERSION. Never hand-typed.**

### 57 · 🆕 🩸 **TINZA MAKES ONLY CLAIMS DERIVABLE FROM THE INGREDIENT LIST.**
# **CERTIFICATION AND SOURCING CLAIMS ARE NEVER ASSERTED. NOT HALAAL. NOT KOSHER. NOT ORGANIC, FREE-RANGE, GRASS-FED, LINE-CAUGHT, FAIR-TRADE.**
*Halaal and kosher are **certification** properties, not ingredient properties — they turn on slaughter method and supervision. **They cannot be derived in Node**, so asserting them breaks the derive-never-hand-type rule.*
*A "Halaal" badge over a lamb curry, when we have no idea where she bought the lamb, is a claim we cannot stand behind.*
➡️ **EXPOSE THE DERIVABLE COMPONENTS INSTEAD: no pork · no alcohol (Law 55) · no shellfish.** *The cook combines them and applies her own judgement on sourcing. Useful to her — and honest.*
*Precedent: NYT Cooking filters diet/cuisine/meal-type/time/skill/ingredient/occasion — **no halaal or kosher filter**. Paprika ships **no dietary taxonomy at all**. Both stay on derivable ground. **We do the same, and we say so out loud.***

---

**New laws start at 58.**

🩸 *54a and 54b are SUB-LETTERED, not renumbered — 55, 56 and 57 were already committed in code and briefs on 20 Jul, and renumbering would orphan live references. **Six numbers are already lost. Do not create a seventh.***

🩸 *Eleven laws went missing because they lived on a whiteboard. Six are gone for good.
**That is what a whiteboard costs. This file is why it will not happen again.***
