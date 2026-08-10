# 🏗️ TINZA_ARCH_RULINGS.md — THE ARCHITECTURE CONTRACTS, IN FULL

> ⛔ **THIS FILE IS NOT `/rule` — BUT IT IS THE ONLY PLACE THESE CONTRACTS EXIST IN FULL.**
> `TINZA_RULINGS.md` §11 keeps the launch blockers, both LOCALE rulings in full, and an index of
> every heading below. **Each headline IS the ruling.** The contract shapes, the defaults tables and
> the bugs they nearly shipped live here.
>
> ⚠️ **READ THIS FILE BEFORE YOU TOUCH:** `normalizeRecipe()` · the reserved slot defaults ·
> `source` vs `origin` · version-level `slot` · `tinzaStore` and the `source:section:id` key ·
> `tinzaListLabel()` and the room-gloss map · any room header or search slot · `sectionHeader()`.
>
> Split from `TINZA_RULINGS.md` §11 on 11 Aug 2026. **Nothing was reworded. Nothing was deleted.**
> Where this file and `TINZA_RULINGS.md` disagree — `TINZA_RULINGS.md` is right.

---

## 🚨 11 · ARCHITECTURE CONTRACTS — the working-out *(from §11 LAUNCH BLOCKERS)*

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

### 🆕 🏷️ tinzaListLabel — THE ROOM GLOSS FOR MIXED-ROOM SHELVES — **RULED 15 Jul, corrected 16 Jul 2026**
*Multiple distinct records share a display name — Potato Salad in Braai + Events; Koeksisters in Bakes + Events. A recurring CLASS → ONE function, never a hand-list. `source` is `'db'` for everyone, so it is NOT a disambiguator — the human-facing separator is the ROOM.*

- 🚪 **`tinzaListLabel(recipe, context)` — ONE shared function.** Mirrors `tinzaDisplayName()`. Plain name when unique in-view; appends the room gloss — *"Potato Salad (Braai)"* vs *"Potato Salad (Events)"* — **only on an actual in-list collision.** Collision-driven, never hardcodes a dish name. Fires ONLY where rooms mix (Favourites, Just Feed Me). ⚖️ **Law 6 — one naming door.**
- 🧭 **THE GLOSS NAMES THE ROOM — THE NAVIGABLE DESTINATION — NEVER THE SHELF INSIDE IT.** It answers *where do I go to find this again?* and must name a real door. No Bakes screen, no Sides screen, no Beverages screen — they are shelves. So the map is **room-level**: several sections fold into one room word.
- 🔑 **KEY THE MAP ON `r.section` — WHAT A RECORD CARRIES — NOT THE ADAPTER ROSTER.** *Measured, not guessed:* 11 adapters emit **12 sections** — `adaptBakes` alone emits both `bakes` AND `sides`. A source-grep misses the two computed ones, and four real collisions ride on them (Koeksisters, Malva Pudding, Bread & Butter Pudding, Béchamel). ⚖️ **Law 22, sharpened — measure the OUTPUT records, not the code that appears to assign them.**

**THE TWELVE-SECTION MAP (`TINZA_ROOM_LABEL`, index.js):** `braai`→Braai · `world`→World Kitchen · `spice`→Spice · `health`→Health · `events`+`beverages`→Events · `meals`+`floor`+`bakes`+`sides`→Family · `tiny`→Tiny Tummies · `furry`→Furry Friends.


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
- 🔴 **A SEARCH BOX THAT NAVIGATES AWAY IS WORSE THAN NO SEARCH BOX — IT LIES TO THE FINGER.** No box means you go look for a search. A box that jumps you to another screen means you tapped expecting to type and lost your place instead. The doctor is right to call this RED where "no search at all" is only a WARN.
- 🔧 **THE FIX FAILS LOUD: DELETE THE `onclick` BRANCH FROM `sectionHeader()`.** Convert Braai to inline, then **remove the branch entirely.** After that the lie is not a discipline anybody has to remember — it is a shape the door cannot make. ⚖️ Same mechanism as MF145: *drop the line and it goes RED*, not *drop the line and nobody notices*. A rule enforced by care is a rule already broken.
- ⚠️ **A HAND-ROLLED BOX CARRIES A HAND-ROLLED PALETTE.** `budget.js` and `furry.js` hard-code `rgba(6,16,8,0.85)` · `#3a2010` · `#c06020` — the **pre-reskin dark palette**. Those two rooms never got Phase 1. Migrating their header is therefore a **visible look change, not just plumbing** — expected, correct, and worth seeing coming. ⚖️ The master template already says it: render via `core.js` using `var(--token)`, never hand-rolled hex. The hex was the tell all along.

#### 🍸 A TOOL GETS A SUB-HEADER AND NO SEARCH — **RULED 25 Jul 2026** *(Tina)*
*Raised because MF146 could not tell whether Bar Planner was a room. It is not. It is the first named member of a third category, and naming the category settles every planner that comes after it.*

- ⚖️ **THERE ARE THREE THINGS, NOT TWO.** A **ROOM** is a front door with a photo header and a search. A **SHELF** is a scrollable list inside one. A **TOOL** is a thing you *operate* — you give it numbers, it gives you an answer. Bar Planner, Buffet and the Weekly Planner are tools.
- 🔎 **A TOOL GETS NO SEARCH BOX.** *Tina, 25 Jul: "No it doesn't get one."* ⚖️ The 25 Jul test — *a scrollable recipe list gets a search, a hub of tiles does not* — does not even apply here: there is **nothing to search**. Bar Planner holds no recipes. It holds guests, hours and a split. A search box on it would be a slot rendered because the template had one, which is the exact failure sameness exists to prevent. **Sameness means the same slot behaves the same way, not that every screen carries every slot.**
- 🏷️ **A TOOL GETS A SUB-HEADER, NOT A ROOM HEADER.** *Tina, 25 Jul: "yes, i think it needs a sub header."* Bar Planner lives **under Beverages, under Events** — a 170px photo header would announce it as a sixth room and break the trail back. The sub-header is smaller, carries the title and the one-line what-this-does, and keeps the ← Beverages return visible.
- 🔧 **THE WORK — `sectionHeader()` GAINS A `sub:true` MODE; NOBODY HAND-ROLLS A SECOND HEADER.** ⛔ The temptation here is to leave `barplanner.js`'s inline header alone *because it is "only a sub-tool"*. That is how it got a hard-coded dark palette in the first place. **A tool renders through the shared door too** — same function, smaller variant, `var(--token)` throughout. ⚖️ Never hand-roll hex; the hex was the tell all along.


*Raised because sauces are scattered across Braai, Events, World and Spice with no motivation behind what went where. The scattering was never a taxonomy failure — it is “shelves are queries, not lists” not yet having reached the hand-authored rooms. A room that must FILE a dish files it wherever the author was working that night.*

- ⚖️ **MERGE BY DEFAULT. SPLIT ONLY WHERE THE CONSTRUCTION GENUINELY DIFFERS — and a split DECLARES WHY.** Same dish, same construction, same basis → **one record, many tags.** Bobotie is still seen in World Kitchen, Events and Feed My Family; there is simply **one of it**.
- 🛠️ **THE MERGE PROCEDURE — MOST COMPREHENSIVE WINS, THEN ENRICH.** Take the most comprehensive/effective record as the base; then **walk the losers and add every feature the base LACKS** — a holder, a `didYouKnow`, a verified `goesWith`, a version, a storage line. ⛔ **A merge must never lose a feature.**
- 🩸 **WHY THE ENRICH STEP EXISTS:** *sameness is not finished.* The copies are **unevenly complete** — the best record is not best at everything. “Keep the most comprehensive” on its own would silently drop whatever the runner-up did better. **Fold in, then delete.**
- 💚 **FAVOURITES FIX THEMSELVES.** The store key is `source:section:id`. Three records = three keys, so hearting Bobotie in World Kitchen leaves it un-hearted in Events. **One record = one key = the heart follows the dish everywhere.** The merge repairs a bug rather than creating one.
- ⚠️ **CATCH 1 — `section` DOES DOUBLE DUTY.** It currently means both *where the record is stored* AND *which room shows it*. A query-room pulls those apart: a record needs a **primary room** (for the label, the heart key, `tinzaListLabel()`) plus an **appears-in** list. One line per record — same shape as `equipment` and `yieldBasis`.
- ⚠️ **CATCH 2 — ONE RECORD CARRIES ONLY ONE SCALING BASIS.** Events scales off one `S.eventGuests`; Braai has the portion brain; Family has soft-6. Where the **dial itself differs**, the copies **stay split** and each declares its basis (⚖️ MF145). *This is exactly why `braai:periperibraai` and `spice:peri-peri-sauce` both survive — “how much for my 10 guests” and “make me a bottle” are different questions.*
- 🔗 **CROSS-LINKS COME AFTER THE MERGE, NEVER BEFORE.** A link from Events Peri-Peri to Spice Peri-Peri is a link from a thing **to itself**. Cross-links are for genuinely different things — like the Braai salad → Spice dressing link. Wire them once the triage is done, or you will wire links between copies and unwire them later.
- 🌍 **THE OUTSIDE WORLD AGREES.** Paprika assigns **multiple categories to one recipe**; NYT Cooking publishes **one canonical recipe** surfaced through 125+ curated collections. Neither has a duplication concept. **But neither has rooms that OWN recipes, a portion brain, or per-room plans — Tinza's rooms are STRONGER than their categories.** The answer is not “become Paprika”: **keep the rooms as strong front doors, stop letting them own the record.**


> 🩸 **Sections are distinct navigable destinations rendered by shared machinery. The shared functions SERVE the rooms; they do not dissolve them.**

> 📦 Evidence, measurements and build record: `TINZA_RULINGS_EVIDENCE.md` → 🚨 11

---
