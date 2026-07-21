# FABLE SESSION BRIEF · SA VARIATIONS

**Written** 21 Jul 2026 · measured at HEAD · corrected after a bad first measurement
**Scope** boerekos · cape malay · indian — mains only, per Tina's list

> ⚠️ **AN EARLIER VERSION OF THIS BRIEF WAS WRONG.** It reported Cape Malay as 12
> recipes and called it "the content gap." **Cape Malay has 21.** The query looked for
> the country in `cuisine`/`country`/`region` and **World Kitchen stores the country
> as a PREFIX INSIDE THE `id`** (`greece-kleftiko`) — `cat` is empty on all 1,021
> records. Tina caught it with a screenshot. ⚖️ **Law 36 — measure it, and measure the
> right field.**

---

## 0 · THE FINDING THAT DECIDES THE WHOLE PLAN

**The variations Tina wants mostly ALREADY EXIST. They are on the wrong record.**

| dish | `meals` | `world` |
|---|---|---|
| Cape Malay Chicken Curry | R32 · **4 versions** | R31 · **0** |
| Durban Bunny Chow | R40 · **4 versions** | R38 · **0** |
| Classic Bobotie | R34 · **6 versions** | R26 · **0** |
| Shepherd's Pie / Herderspastei | R48 · **3 versions** | R21 · **0** |
| Lamb Tomato Bredie / Tamatie Bredie | R47 · **3 versions** | *unpriced* · **0** |

**World Kitchen is 1,021 dishes and 0% versioned.** Every versioned recipe in Tinza
lives in `meals` or `bakes`. And **60 duplicate names** span the two rooms.

🚨 **THEREFORE: DO NOT AUTHOR VERSIONS ONTO A WORLD KITCHEN RECORD UNTIL ITS DUPLICATE
IS SETTLED.** Author onto the `world` bobotie and Tinza gets **two** versioned boboties.
The 60-duplicate problem doubles instead of resolving. **This is the one way these
sessions can do real damage.**

---

## 0b · WORLD KITCHEN ALREADY RENDERS VERSION CHIPS — VERIFIED

*Tina asked: "in WK we must take the variations there, so if someone is in Boerekos he can see the variations as well?"* **Yes — and no code is needed first.**

```
worldkitchen.js:728   versionHTML: versionStripHTML(r, green)
core.js:3988          + (o.versionHTML || '')   ← recipePage renders it
```

**The plumbing is built and wired.** World Kitchen shows no chips today **only because
0 of 1,021 records carry versions** — never because it cannot.

⚠️ *This was mis-reported twice before being verified: a grep for `versions` in
`worldkitchen.js` returns nothing, because the call is `versionStripHTML(r, green)`
and the word never appears. **Grep for the FUNCTION, not the field.*** ⚖️ Law 36.

✅ **THEREFORE FABLE MAY AUTHOR VERSIONS STRAIGHT ONTO A WORLD KITCHEN RECORD** —
provided that dish has **no duplicate in `meals`.**

---

## 1 · THE WORK IS FOUR JOBS. ONLY TWO ARE FABLE'S.

| # | job | who | why |
|---|---|---|---|
| **A** | **Duplicate merge** — 60 pairs; decide the canonical record | ⛔ **NOT FABLE** — Tina rules, then a Node pass | The SA pairs carry the versions. Merging is how World Kitchen *inherits* them for free. ⚖️ §2.3 — ask, never infer. |
| **B** | **Pricing gaps** | ⛔ **NOT FABLE** — Node + `PRICE_DB` | An unpriced recipe is invisible to Budget (§15.5). Mechanical, not creative. |
| **C** | **New recipes** — snoektert · maasbanker | ✅ **FABLE** | Genuinely absent from the library. |
| **D** | **New versions** on canonical, rung-2+ records | ✅ **FABLE** | The actual authoring job — **after A**. |

### A · THE DUPLICATE DECISIONS TINA MUST MAKE FIRST

Each pair, one ruling: **which record is canonical, and does the other die or stay?**

```
Bobotie                 meals R34 · 6 vers  ×  world·cape R26 · 0
Cape Malay Chicken Curry meals R32 · 4 vers ×  world·cape R31 · 0
Bunny Chow              meals R40 · 4 vers  ×  world·indian R38 · 0
Shepherd's Pie          meals R48 · 3 vers  ×  world·boerekos R21 (Herderspastei)
Tamatie Bredie          meals R47 · 3 vers  ×  world·cape (unpriced)
Frikadelle              world·cape R25      ×  world·denmark R28 (Frikadeller)
```

⚠️ **Frikadelle vs Frikadeller is NOT a duplicate** — same root, two national dishes.
⚖️ Duplicate rule: *same ingredients + different cultural names → keep BOTH.*
⚠️ **The price gaps inside a pair are real signal, not noise** — `meals` R48 vs
`boerekos` R21 for shepherd's pie is a **56% spread**. Merging must not silently pick
one price. Tina rules which is right.

### B · UNPRICED, FROM TINA'S OWN LIST — measured 21 Jul

```
Kool Bredie (Cabbage Stew)      world · boerekos
Tamatie Bredie                  world · cape
Denningvleis                    world · cape
Lamb Breyani                    world · cape
Lamb Biryani                    world · indian
Braaibroodjies                  world · boerekos  AND  braai
Waterblommetjiebredie           world · boerekos
Potjiekos (Three-Legged-Pot)    world · boerekos
```

### C · ABSENT FROM THE LIBRARY

- **Snoektert** — not present in any form.
- **Maasbanker** — not present. Needed for the cheap snoek-curry fork.

---

## 2 · WHAT FABLE ACTUALLY DOES, IN ORDER

**SESSION 1 — the two missing dishes.** Snoektert *(with the budget pilchard-tart
fork Tina named)* and a maasbanker curry *(the cheap fork for Snoek Curry, R34)*.
Small, self-contained, nothing depends on the duplicate decisions. **A safe first
session that proves the checkpoint contract works before anything bigger.**

**SESSION 2+ — versions, in strict safety order.**

### ✅ SAFE NOW — no duplicate, already priced. Start here.

```
Beesstert (Oxtail Stew)   R43   world · boerekos
Pickled Fish              R33   world · cape
Snoek Curry               R34   world · cape   ← budget fork = maasbanker (write it in Session 1)
Chicken Breyani           R23   world · cape
Durban Chicken Curry      R24   world · indian
Durban Mutton Curry       R34   world · indian
Durban Fish Curry         R40   world · indian
```

### 💰 PRICE FIRST, THEN SAFE

`Denningvleis` · `Kool Bredie` · `Lamb Breyani` — all unpriced. **An unpriced version is
invisible to Budget (§15.5).** Node + `PRICE_DB` first.

### ⛔ BLOCKED — SETTLE THE DUPLICATE FIRST

| dish | pair |
|---|---|
| Bobotie | `meals` R34 · 6 vers × `world·cape` R26 · 0 |
| Cape Malay Chicken Curry | `meals` R32 · 4 vers × `world·cape` R31 · 0 |
| Bunny Chow | `meals` R40 · 4 vers × `world·indian` R38 · 0 |
| Shepherd's Pie | `meals` R48 · 3 vers × `world·boerekos` R21 (Herderspastei) |
| Tamatie Bredie | `meals` R47 · 3 vers × `world·cape` unpriced |
| **Waterblommetjiebredie** | `world·cape` R40 × `world·boerekos` unpriced — **a duplicate INSIDE World Kitchen** |
| Braaibroodjies | `world·boerekos` × `braai` — both unpriced |

### 🤝 KEEP BOTH — not duplicates

**Frikadelle** (cape, R25) vs **Frikadeller** (denmark, R28) · **Lamb Breyani** (cape) vs
**Lamb Biryani** (indian). *Same root, different cultures.* ⚖️ Duplicate rule — *same
ingredients + different cultural names → keep BOTH.*

✅ **LEAD WITH THE BUDGET FORK ON EVERY DISH.** It is what Tina reaches for every time
— pilchard for snoek, a cheaper fish for the curry — and the data agrees: `budget` is
already **the most common version name in the library (49).**

## 3 · THE CHECKPOINT CONTRACT — this is what stops losing sessions

Four sessions were lost last time to cut-offs. **A capitals instruction cannot fix
this** — being cut off is the window ending, not a choice. What fixes it is
**resumability**.

> 1. **FIRST ACTION EVERY SESSION:** read `reference/FABLE_PROGRESS.md`. Start at
>    `NEXT UP`. Do not re-derive, do not start from the top.
> 2. **AFTER EACH SINGLE RECIPE:** write → `node --check` → append one line to `DONE`
>    → only then begin the next.
> 3. ⛔ **ONE RECIPE IN FLIGHT.** Never "I'll write all twelve then save."
>    A cut-off must cost **one recipe**, never a session.
> 4. ⛔ **NO REFACTORING, RENAMING OR TIDYING.** Scope creep is what makes a unit too
>    big to finish inside a window.
> 5. **END EVERY SESSION** by naming the next three under `NEXT UP`. That is the handoff.

**A conversation does not survive a cut-off. A file does.**

---

## 4 · THE RULES THAT DO NOT BEND

- 📕 **`/wow` = `WOW_STANDARD.md`** — Michelin-chef-to-grandma · unique "How This Feels"
  · `didYouKnow` moat · **SA buy-names matching `PRICE_DB`** · why-led method ·
  storage/freezes/fridgeDays · leaveners in **grams**.
- 💰 **EVERY VERSION CARRIES ITS OWN `costPP`** — 686 of 708 already do. A version
  without a price **cannot be seen by the Budget room** (§15.5).
- 🚫 **A FORK COUNTS ONLY IF PEOPLE ACTUALLY COOK IT** (§15.2). Never pad to reach a
  number — bunny chow is beloved, SA-iconic, and still a `2`.
- 🔗 **`goesWith` IS A PAIRING, NEVER A SIMILARITY** (§16).
- 🥬 **DIET IS DERIVED IN NODE, NEVER HAND-WRITTEN** (Law 47).
- ⛔ **NO RETAILER NAMES.** Not Woolies, not Checkers, not Spar — **buy-names only.**

### 🚨 THE AMOUNT LAW — THIS IS THE ONE THAT CAUSES REWORK

*Named after the Gin & Tonic Cheesecake, which cost a weekend.*

- 🩸 **AN INGREDIENT WITH NO AMOUNT RENDERS AS "TO TASTE."** That is how baking
  powder once shipped as *"to taste"* — the **Leavener Law** — and it is the same root
  as the cheesecake.
- 🍷 **AN INGREDIENT USED IN TWO COMPONENTS MUST BE TWO LABELLED LINES.** Gin was in
  the filling AND the G&T glaze on one line, so **nobody could tell how much went
  where.** Gelatine had the identical split. The Piña Colada's dark rum had **no amount
  at all** — *"a splash."*
  ✅ **CORRECT:** `gin (for the filling) 5ml` + `gin (for the glaze) 5ml`, **and the
  method states which goes where.**
- ⚖️ **GET IT RIGHT IN THE WRITING.** Every one of these was found later, by Tina, on
  live, and fixed in a separate session. **A recipe that needs a follow-up pass is not
  finished** — it is two jobs pretending to be one.

---

## 4b · MISTAKES ALREADY MADE. DO NOT REPEAT THEM.

*Recovered from the previous Fable sessions, 3–17 Jul 2026. **Every one of these was
found by Tina, on live, after the fact** — which is the definition of rework.*

### 🚨 THE ROOT CAUSE OF ALL OF IT

**A STANDARD THAT LIVES IN A SEPARATE DOCUMENT IS INVISIBLE.** Tina, 5 Jul, on the
Did You Know rule: *"it existed in a separate locked document but was never written
into the main handoff, making it invisible to Fable."* The gelatine standard was
**locked on 16 June** and the cheesecake still broke it a month later.
✅ **THEREFORE THIS BRIEF EMBEDS THE RULES. Fable follows THIS FILE.** Do not assume a
rule is known because it is written somewhere.

### THE FOUR WORLD KITCHEN ISSUES — flagged 3 Jul, still binding

1. 🌍 **WROTE FROM A SOUTH AFRICAN PERSPECTIVE INSTEAD OF A GLOBAL ONE.**
   The dish belongs to its own country. **SA is a LAYER, not the vantage point.**
2. 🔤 **NATIVE INGREDIENT NAMES WITH NO ENGLISH GLOSS** — *eba · amala · fufu ·
   banku · iru* went in bare. **ALWAYS authentic name + English gloss.**
3. 🔁 **USED AN ALREADY-SUBSTITUTED NAME AS IF IT WERE THE ORIGINAL.**
   **The authentic ingredient is primary; the SA swap is the note beside it** — never
   the other way round, and never silently.
4. 🔗 **VAGUE `goesWith`** — *"Simple Salad"*, *"bread · wine"*.
   **Real, named, linkable library dishes only.** ⚖️ §16 — and a pairing, never a
   similarity.

### THE MEASUREMENT FAILURES

5. ⚖️ **THE LEAVENER LAW** — baking powder shipped as **"Add to Taste"** in a muffins
   card. **Leaveners are ALWAYS measured in grams.** Never "to taste", ever.
6. 📏 **VAGUE QUANTITIES** — *handful · bunch · splash · "a cup"* with no ml.
   **Every amount in g or ml.** A missing amount renders as **"to taste"** — that is
   the mechanism behind both this and the Leavener Law.

### 🧈 THE GELATINE STANDARD — LOCKED 16 JUN, BROKEN 17 JUL. EMBED IT, DO NOT CITE IT.

*The G&T Cheesecake said **"3 tablespoons"** to bloom **12g**. The standard requires
**~60ml**. Tina could not follow the method — the technique was there in name only.*

- **HOW MUCH** — soft spoonable set **10g per 500ml** · firm set that slices
  **15–20g per 500ml** · leaf: 1 leaf ≈ 2g, ~5–6 leaves per 500ml soft.
- **BLOOM** — cold water at **5× the gelatine's weight** (10g → 50ml).
  **Powder ONTO water, never water onto powder**, or it clumps. 5 minutes to a sponge.
- **DISSOLVE** — gently, 10–15 sec bursts, **until clear and runny. NEVER BOIL** —
  boiling kills the set.
- **TEMPER — THE STEP EVERYONE FAILS.** Hot gelatine into a cold filling sets on
  contact into **rubbery threads**. Stir **two or three spoonfuls of the filling into
  the gelatine first**, then return it in a thin stream while beating briskly.
- **CHILL** 4+ hours, ideally overnight, **before any glaze goes near it.**
- **A GLAZE POURED HOT MELTS THE SET LAYER UNDERNEATH.** Cool it to syrupy first.
- ⛔ **NEVER SETS WITH** raw pineapple · kiwi · papaya · fig · mango · fresh ginger.
  Cook or tin those first.

🧭 **THE GENERAL RULE THIS PROVES: A TECHNIQUE-CRITICAL STEP MUST BE WRITTEN OUT IN
FULL, NOT NAMED.** *"Add the gelatine"* is not a method. If a step can fail in the
bowl — gelatine, custard, caramel, yeast, emulsions, tempering chocolate — **write
what it looks like when it is right, and what goes wrong if it is not.**

### THE CONTENT-JUDGEMENT RULES

7. 🥗 **THE BOBOTIE RULE — NO FAKE CHOICES.** Crumpets correctly got **ZERO** version
   chips because there are no real crumpet variants. **A fork counts only if people
   actually cook it.** Never pad a rung to reach its number.
8. 🧹 **THE SHELF-WOW LAW — REMOVE AND REPLACE A BORING DISH, NEVER DISGUISE IT.**

---

## 4c · AFTER SA — THE NEXT TARGETS, MEASURED FROM THE RAW ARRAYS

⚠️ **Measured 21 Jul from `WK_*` directly, not from `allRecipes()`.** Three wrong
answers were given this session by reading the adapter's output and calling it the
data. ⚖️ **Law 36 — measure the source, and name the layer.**

| priority | target | state | why |
|---|---|---|---|
| **1** | **India** *(south-asia)* | 49 dishes · **48 priced** · 28 mains · **0 versioned** | 💰 **Cheap and all priced.** Pesarattu R3 · Idli R7 · Misal Pav R9 · Paratha R9 · Poha R12. Tina, 21 Jul: *"India actually has some excellent dishes."* |
| **2** | **Indian** *(SA · Durban)* | 20 dishes · 19 priced · 9 mains · **0 versioned** | 🇿🇦 **THIS IS SOUTH AFRICAN FOOD.** Durban Roti R3 · Dhal Curry R7 · Chilli Bites R8 · Durban Samosas R9. ⚖️ §5.1 — precisely the audience. |
| **3** | **Portugal** | 52 dishes · **33 versioned ⏸** | **Resume 19 short.** **Francesinha** is among them. ⚠️ Lead with a **BUDGET** fork — the 33 written so far are cultural only. |
| **4** | Austria | 27 · 4 versioned | barely started |
| **✅** | **Greece** | 54 · **54 versioned** | ⛔ **COMPLETE. DO NOT RE-TREAD.** |

### ❌ RETRACTED — "SORT OUT INDIA" WAS A MEASUREMENT ERROR, NOT A BUG

An earlier draft called India *"a tagging mess — ten spellings of one country."*
**There is no mess.** `india` *(country **India**, region south-asia)* and `indian`
*(country **Indian**, region south-africa)* are **two different cuisines, correctly
separated**: Tandoori · Rajma · Poha · Paneer Butter Masala on one side; Bunny Chow ·
Durban curries · Chilli Bites · Durban Roti on the other. **The data was right.**

⚠️ **Raw WK records carry NO `costPP` — the price is DERIVED at the adapter** from
ingredients + `PRICE_DB`. Reading raw and reporting "0 priced" is wrong; India is
**48 of 49 priced**. **Check pricing via the index, versions via the raw arrays.**

---

## 5 · PARKED — decided, not now

- **Spain (59 dishes, "messy — rice and marinated olives")** — a *content quality*
  problem, not a versions problem. Its own session, after SA.
- **Greece 54 · Portugal 52 · France 25** — good mains, worth versions, **after SA**.
- **Italy · China · Japan · Thailand · South America · USA** — **38 countries have a
  flag in `WK_FLAG` and no food**, Italy among them. **New continents are SCOPE, not
  debt** — nothing is broken by their absence. ⚖️ Tina's call, and the honest read is
  after October: a user who cannot find bobotie at R26 is a bug; a user who cannot
  find ramen is a roadmap item.
- **`we-` prefix** — 28 dishes (`we-sauerbraten`, `we-currywurst`) use a REGION prefix
  where every other id uses a country. Check on live where they surface. ⚖️ Law 2.
