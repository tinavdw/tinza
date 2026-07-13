# TINZA BRIEF — MF59-B · MF60 · MF62 · MF61
**THREE COMMITS. IN ORDER. DO NOT BUNDLE.**
Base: `9bac7f5` — **push and confirm PUBLISHED first.** `core.js` = **4137 lines on record.**

---

## ✅ WHAT `9bac7f5` PROVED — TINA'S FINGERS, ON LIVE. **MUST NOT REGRESS.**

| test | result |
|---|---|
| Breakfast · `bacon` | **2, in Breakfast.** Supper bacon pasta **ABSENT.** ✅ |
| Breakfast · `egg` | **40, "found in Breakfast."** ✅ |
| FMF hub · `curry` | **39, "found in Family Meals."** ✅ **THE HUB STAYED WIDE.** |
| Braai · `rump` | **2, in Braai.** Rump Steak, **zero crumpets.** ✅ MF50 held. |

**MF56 is good. `mealCat` on the record works. Ship it.**

---

# 🚨 COMMIT A — MF59-B · MF60

## MF59-B — THE QUERY STILL SURVIVES. **THE FIX WAS APPLIED AT THE WRONG LAYER.**

### The observation — Tina's screenshots, in sequence
1. FMF hub, box reads **`curry`** — but the screen shows **CHOOSE A MEAL tiles.** No results.
2. → **Home**
3. → back into **FMF** → **`curry` IS STILL IN THE BOX.**
4. → **World Kitchen** → **box is EMPTY** *("Search dishes, countries…")* ✅
5. → back into **FMF** → **`curry` IS STILL THERE.**

> **She had to BACKSPACE it out before she could type a new word.**

### What this tells us
Your MF59 fix **works on the doors you wired** — hub tiles, sub-screen back, bottom-nav. **Hub → Breakfast → box empty is proven.** ✅
**It missed Home → back-in. FMF persists; WK does not.**

And note **the results and the scope DID clear. Only the text survived.**
**The box claims a search that the screen is not showing.** ⚖️ **Law 3 — the input is the only thing lying.**

> ⚖️ **LAW 31 🆕 — DON'T CLEAR THE QUERY ON THE WAY OUT. RENDER IT EMPTY ON THE WAY IN.**
> A fix applied at N navigation sites will miss the N+1th — **including the door that doesn't exist yet.**
> **This is the Law-6 failure signature.** You patched three doors. There was a fourth.

### ⚖️ THE FIX
**The search input must derive its `value` AT RENDER, from whether an active query belongs to THE SCREEN CURRENTLY ON.**
- Screen changed → **input renders empty.** No clearing required. Nothing to miss.
- Same screen, re-render → the query survives *(this is MF46 — do NOT break it)*.

⚠️ **BEFORE YOU BUILD:** ⚖️ **Law 22 — the brief has been WRONG TWICE tonight. Verify, don't trust.**
**Find where FMF's header input gets its `value` from, and why WK's doesn't.** **Report what you find before changing it.**
If the persisted query is stored somewhere, **name the variable and the file.** If my read is wrong, **say so and stop.**

### ✅ PROOF
- FMF hub · type `curry` → **Home** → back into FMF → **BOX EMPTY**
- FMF hub · type `curry` → **World Kitchen** → back into FMF → **BOX EMPTY**
- FMF hub · type `curry` → tap **Breakfast** → **BOX EMPTY** *(must not regress)*
- **Type in ANY room, backspace one letter → the query SURVIVES.** ⚠️ **MF46 must not regress.**

---

## 🐛 MF60 — **THERE IS MORE THAN ONE SEARCH INPUT AND THEY DO NOT MATCH.**
### *(The brief was wrong twice about this one. Here is the third and correct reading — from Tina's tablet, on published `9bac7f5`.)*

**Put her two screenshots side by side:**

| screen | the input |
|---|---|
| **Braai · standalone Search screen** | **tall, full-bleed, chunky.** Comfortable thumb target. |
| **FMF header** *(and the other section heroes)* | **a thin strip.** Short. Small text. |

> **THESE ARE NOT THE SAME INPUT.**

**And that is why the caret looked stubby in one and not the other — the caret takes its height from the input, and the inputs are different sizes.**
Her *"the flickering l is small"* and her *"the box is very narrow, it could be bigger"* are **the same bug, described from two angles.**

📌 ⚖️ **THE SAMENESS LAW, BROKEN.** *Uniformity ONLY via shared `core.js` functions using CSS tokens.*
**Your 399–442px measurement was correct — you measured the good one.**

### ⚖️ THE FIX — **ONE `searchInput()` RENDERER IN `core.js`. ⚖️ Law 6.**
- **Fixed height ≥ 48px** — a real thumb target on a tablet
- **Explicit `font-size` + `line-height`** → the caret has full height from first paint
- **Every room calls it:** Braai · FMF hub · FMF sub-screens · WK · Spice · Health · the standalone Search screen. **No exceptions.**

⚠️ **FIRST: FIND AND REPORT EVERY PLACE A SEARCH INPUT IS RENDERED.** ⚖️ Law 22 — **do not trust this brief's count.**
**If they already share one function and the difference is CSS context, say so and stop.** ⚖️ Law 15.

### ✅ PROOF
- **The FMF header box and the Braai Search box are visibly the same height, same font.**
- The caret is full-height **before** the first keystroke, in **both**.
- ⚠️ `core.js` line count reported **before and after.**

⚠️ **AND STRIKE THE MF57 INFERENCE FROM THE RECORD.** The brief claimed "two non-repros in a row = the Law-27 signature." **One of those two was the brief misreading Tina.**
**MF57 remains a genuine launch blocker on its own architecture — but it is down to ONE data point, not two.** ⚖️ **Law 22.**

---

# 🚨 COMMIT B — MF62 · **`goesWith` MUST COME OUT OF `searchText`**
## ⚠️ **THIS ONE CHANGES COUNTS. IT IS ALONE IN ITS COMMIT.**

### The observation
**Breakfast · `curry` → 6.** And **the version chip is already the diagnostic:**

| card | chip | what actually matched |
|---|---|---|
| Savoury Mince on Toast | **`Curried Mince`** | ✅ a **named version** matched |
| Chakalaka Baked Eggs | **`From-Scratch Chakalaka`** | ✅ a **named version** matched |
| Curry & Coconut Oats | — | ✅ it *is* a curry |
| **Overnight & Baked Oats** | **`4 versions`** *(generic)* | ❌ **NOTHING in the card matched** |

Tina opened it. The hit came from:

> **`♥ GOES WELL WITH → Curry & Coconut Oats`**

**`goesWith` is in `searchText`. So a bowl of porridge is returned for "curry" because it is FRIENDS with a curry.**

> 📌 **LAW 30 🆕 — A CROSS-LINK IS CONTENT ABOUT ANOTHER DISH.**
> **THE INDEX MUST ONLY EVER DESCRIBE THE CARD IT SITS ON.**
> ⚖️ **Law 3 in its purest form: she types `curry` and gets oats, and the app looks completely confident about it.**

### ⚖️ THE FIX
**Remove `goesWith` from `searchText` (index.js).**

⚠️ **BUT PROVE THREE THINGS FIRST, AND REPORT THE NUMBERS BEFORE YOU CHANGE ANYTHING:** ⚖️ **Law 22.**
1. **Confirm the chip logic.** Does a *named* version chip mean *that version matched the query*? Or is it just the first/default version label? **If it's the latter, this whole diagnosis is wrong and you must say so.**
2. **How many of the 6 Breakfast `curry` hits survive with `goesWith` removed?** **Give me the number.**
3. **Sweep the other index fields for the same disease.** `aliases` · `cuisine` · `country` · anything else in `searchText` — **is any of them describing something OTHER than the card it sits on?** Report, don't silently cut. ⚖️ Law 15.

### ✅ PROOF
- Breakfast · `curry` → **Overnight & Baked Oats is GONE.** The three genuine curry cards remain.
- **Re-baseline every count:** FMF hub `curry` · Spice `sauce` · WK `lam` — **record the new numbers.** They will drop. **THAT IS CORRECT — those were false hits.**
- Braai · `rump` → **still Rump Steak.** ⚠️ MF50 must not regress.

---

# 🔵 COMMIT C — MF61 · **RANK, DON'T FILTER. NO STOP-LIST.**
## Only after B, because C's proofs sit on B's new baseline.

### The problem
**Braai · `pap` → 13, and most of them are `pap`·rika.** `pap` is a **genuine word-start prefix of a real ingredient.**
**MF50 is correct. Both are real matches.**

But:

> 📌 **LAW 29 — A COMPLETE WORD HAS NO NEXT LETTER.**
> **WHERE SHE CANNOT NARROW BY TYPING, RANKING MUST NARROW FOR HER.**
> `lam` → `lamb ta` → `lamb tag` works **because she can type more.** **She CANNOT with `pap`. She has typed the whole thing.**

⛔ **A STOP-LIST IS WHACK-A-MOLE AGAINST A CLASS:**
`pea`→peanut/pear/peach/pearl · `rice`→ricotta · `egg`→eggplant · `oat` · `fig` · `ham` · `corn`

### ⚖️ THE FIX — **ONE COMPARATOR IN `tinzaAllSearch`.** ⚖️ Law 6.

| score | match |
|---|---|
| **3** | whole word in the **NAME** — *Stywe **Pap*** |
| **2** | prefix of a word in the **NAME** — ***Ru**mp Steak* |
| **1** | whole word in the **INGREDIENTS** |
| **0** | prefix of a word in the **INGREDIENTS** — *Brisket, via pap·rika* |

**Sort descending.**

🛡️ **IT CHANGES ORDER, NEVER COUNTS.** Brisket is still findable — **it just no longer stands in front of the pap.**
And `ru` → **Rump Steak gets *better*** (name-prefix, score 2).

⚠️ **CHECK FOR EXISTING ORDERING FIRST. If something already ranks — SAY SO AND STOP. Do not stack two.**

### ✅ PROOF
- Braai · `pap` → **Stywe Pap + Phutu Pap are #1 and #2.** Count unchanged.
- Braai · `ru` → **Rump Steak first.**
- WK · `lam` / `lamb tag` → **counts identical to the B baseline.**

---

# ⛔ NOT IN THESE COMMITS
| | |
|---|---|
| 🚨 **MF57 — PWA SERVICE-WORKER CACHE** | **LAUNCH BLOCKER. OWN SESSION. TOP OF OCTOBER.** |
| **MF52** — 404 headers + `raw.githubusercontent` SSL | own commit |
| **MF48** — Budget search (ruled, unbuilt) | own commit |
| **MF40** — back button (`mealCat` in `NAV_KEYS`) | own commit. ⚠️ **NOT MF56.** ⚖️ Law 23. |
| **MF53** · **MF55** | parked |

---

# 📌 THE LAW GOVERNING THIS SESSION

3. **Silent wrong is worse than loud missing.**
5. Deployed ≠ **PUBLISHED**. **ONE THING PER COMMIT.**
6. **Don't patch N sites. Build the ONE thing they should all call.**
15. **A ruling that lives only in the chat is not a ruling.**
22. 🩸 **THE NOTE IS A HYPOTHESIS, NOT EVIDENCE. RE-READ THE CODE.**
   **It has fired on the BRIEF-WRITER twice tonight — MF58's cause was fiction, MF60's symptom was misheard.**
   **Trust nothing in this document that you can check yourself.**
23. **Two bugs sharing a name do not share a fix.**
29. 🆕 **A complete word has no next letter. Ranking must narrow for her.**
30. 🆕 **A cross-link is content about ANOTHER dish. The index describes only the card it sits on.**
31. 🆕 **Don't clear the query on the way OUT. Render it empty on the way IN.**

📌 **STANDING:** writes via Node `fs.writeFileSync`, **never Python** · **`core.js` is sacred — 4137 lines, count before and after** · render-proofs per-section, every room, individually.

⚖️ **A CODE-TRACE IS NOT PROOF. TINA'S FINGERS ON THE LIVE APP ARE.**
