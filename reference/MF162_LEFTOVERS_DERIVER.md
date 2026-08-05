# MF162 — A TRACE INGREDIENT IS NOT A LEFTOVER · *and a real person is not a recipe note*

> **Found 5 Aug 2026 on Tina's screen, live.** Frittatensuppe — an Austrian pancake-strip soup —
> rendered the **beef** leftovers block: *"Jan Braai's trick: freeze the offcuts in a tub till you
> have enough for a braai-meat lasagne or potjie."*
>
> **Tina:** *"Jan Braai, which is a real person, doing a braai show, Ive seen it a few times, and
> each time I forget to mention it… weve done leftover suggestions a few weeks ago, cause as we
> see, it didnt land properly."*

---

## 0 · WHERE IT CAME FROM — 7 JULY 2026, AND IT WAS CORRECT THEN

`TINZA_LEFTOVERS_RESEARCH.md` was written on 7 Jul. The flowchart entry (v38) reads:

> *"SA-first (pap→next-morning porridge · fried pap slices · **braai-meat lasagne-potjie
> [Jan Braai freeze-tub]** · braai-meat stroganoff folded through pap)"*

⚖️ **It was authored as a BRAAI-SECTION idea, under a heading that says SA-FIRST, and in the braai
section it is fine.** Then `wkLeftoverKeys()` was added and pointed the **same generic pool** at
**951 World Kitchen cards**. Nobody re-read the SA-first label.

🩸 **THE IDEA DID NOT DRIFT. THE AUDIENCE DID.** A note written for one room was wired into
twelve. **When a shared pool gains a new consumer, the pool's assumptions must be re-read, not
inherited.** ⚖️ This is Law 50 in a new place: reuse without re-reading is how one correct
sentence becomes 145 wrong ones.

---

## 1 · ⛔ STOP-CONDITION

```
grep -n "Jan Braai" sections/core.js
grep -n "function wkLeftoverKeys" sections/core.js
```
If `LEFTOVER_IDEAS.beef[0]` no longer names Jan Braai **and** `wkLeftoverKeys` consults the main
ingredient, **this brief is DONE — say so and STOP.**

Baseline: `node tinza-doctor.js` (**RED 10**) · `node tinza-lawcheck.js` (**0 red 0 drift**).

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT touch the braai section's leftovers.** ⚖️ Braai is the **SA room**, and pap, potjie
and braai-meat belong there. The bug is not the content — **it is the content appearing outside
its room.** Braai must render exactly as it does today.

⛔ **DO NOT touch the 267 records with AUTHORED `leftovers` arrays.** They never reach this code.
**Measured 5 Aug: 267 authored · 951 fall through to the generic pool.**

⛔ **DO NOT touch `SAFETY_CLASS`, `storageBoxHTML`, or the food-safety layer.** ⚖️ Safety is
always free and always renders; the Bacillus cereus rules for rice/pasta/potato are non-negotiable
and were paid for on 7 Jul. **Nothing in this brief goes near them.**

⛔ **DO NOT re-author the leftover ideas themselves.** This brief fixes **which key is chosen**
and **one attribution**. Rewriting 16 idea lists is a content pass and its own decision.

---

## 3 · ✅ COMMIT 1 — THE REAL PERSON COMES OUT

**File:** `sections/core.js:4781` · `LEFTOVER_IDEAS.beef[0]`.

```
FROM: Jan Braai's trick: freeze the offcuts in a tub till you have enough for a braai-meat lasagne or potjie
TO:   Freeze the offcuts in a tub until you have enough for a lasagne or a potjie
```

⚖️ **WHY THE NAME GOES, EVEN THOUGH THE TIP IS GOOD.** Jan Braai is a **real, living, named
public figure**. The line puts a specific technique in his mouth, in his voice, on **145 cards** —
and on Ethiopian kitfo, Nigerian jollof and Greek youvetsi, which have nothing to do with him or
with braai. **We do not have his permission, we did not check the quote, and he has no way to
correct it.** ⛔ A named person's endorsement is not ours to spend, and *"I've seen it a few times
and each time I forget to mention it"* is exactly how a thing survives four weeks unexamined.

📌 **THE RULE THIS SETS: NO REAL, NAMED, LIVING PERSON IS QUOTED OR CREDITED WITH A TECHNIQUE IN
APP CONTENT.** Historical and cultural attribution stays — *"Madurese traders carried this dish"*
is history, not endorsement. **Research sources belong in the research file, never in the card.**
⚠️ Sweep for others while here: `grep -riE "'s trick|'s method|as .* says|recommends" sections/`
and report anything that names a living person. **Report; do not fix beyond Jan Braai in this commit.**

⚠️ **`potjie` and `pap` STAY unglossed where they belong.** ⚖️ §33 — SA words are **explained,
never translated**. The name is the problem, not the Afrikaans.

---

## 4 · ✅ COMMIT 2 — THE DERIVER READS THE MAIN INGREDIENT

**File:** `sections/core.js` · `function wkLeftoverKeys(r)` (~line 4858).

**The bug:** it regex-sweeps **the whole ingredients string plus name and nameAlt**, then returns
the **first** map entry that hits. `beef` is first in the list, so **any** trace of beef anywhere
wins. It never consults the anchor.

**Measured 5 Aug across the 951 fall-through cards:**

| | count |
|---|---|
| key matches the main ingredient | **506** |
| 🔴 **key came from a TRACE ingredient** | **146** |

| record | gets | but the main is |
|---|---|---|
| `nigeria-jollof-rice` | **beef** | long-grain parboiled rice |
| `nigeria-efo-riro` | **beef** | spinach |
| `nigeria-gbegiri-soup` | **beef** | brown beans |
| `tunisia-lablabi` | **seafood** | chickpeas |
| `libya-brik-libya` | **seafood** | egg |
| `ghana-red-red` | **seafood** | black-eyed peas |
| `ghana-waakye` | **rice** | black-eyed peas |
| `greece-strapatsada` | **cheese** | eggs |
| `egypt-koshari` | **pasta** | brown lentils |
| `zimbabwe-mupotohayi` | **bread** | maize meal |

**Jollof rice — one of the most famous rice dishes on earth — is offered beef leftover ideas.**

**THE FIX: ask the anchor FIRST, fall back to the sweep only if the anchor yields nothing.**

```
TO (inside wkLeftoverKeys, before the existing whole-string sweep):
  // ⚖️ MF162 (5 Aug 2026) — A TRACE INGREDIENT IS NOT A LEFTOVER. This function swept the WHOLE
  // ingredients string and returned the FIRST map hit, with `beef` first in the list — so a stock
  // cube made jollof rice a beef dish and a splash of fish sauce made a chickpea stew seafood.
  // 146 of 951 fall-through cards were keyed off a trace line. Ask the MAIN INGREDIENT first.
  // ⛔ The whole-string sweep REMAINS as the fallback: a card whose anchor maps to nothing must
  //    still get ideas rather than none. This narrows the answer; it never removes one.
  if(typeof wkClassifyMain==='function' && typeof wkParseIngredients==='function'){
    try{
      var _m = wkClassifyMain(wkParseIngredients(r.ingredients||''));
      if(_m && _m.item && _m.item.name){
        var _an = String(_m.item.name).toLowerCase();
        for(var _i=0;_i<map.length;_i++){ if(map[_i][0].test(_an)) return [map[_i][1]]; }
      }
    }catch(e){}
  }
```

⚠️ **ORDER OF OPERATIONS — THIS COMMIT DEPENDS ON MF161.** `wkClassifyMain` only returns a
trustworthy anchor **after** MF161's `WK_NOT_A_MAIN` guard is in. ⛔ **If MF161 commit 1 is not
in the tree, STOP** — without it the anchor is `beef tallow` and `chicken stock`, and this change
would key leftovers off the same carriers it is meant to escape. **Confirm `WK_NOT_A_MAIN` exists
before writing a line of this.**

⚖️ **AND NOTE WHAT THIS MAKES TRUE:** one guard, written for the portion engine, now also fixes
the leftovers engine. **That is the argument for fixing the shared function rather than patching
each consumer** — the fourth engine gets fixed for free.

---

## 5 · ✅ COMMIT 3 — THE BORDER, PER §39

Once the key is right, **145 cards still receive SA-locale ideas for non-SA dishes.**

⚖️ **§39 (MF160): anything true of only one country must not be stated as though it were general.**
*"Fold it through pap"* on a Greek youvetsi card assumes a South African kitchen.

⛔ **DO NOT sweep this in the same commit as the deriver fix.** The deriver fix alone re-keys 146
cards, and **their leftover blocks must be read once before anything else moves.** ⚠️ **Report
which SA-specific lines now land on which non-SA cards. Hand Tina the list. STOP.**

📌 **The likely shape of the answer, for Tina's decision, not Code's:** the generic pool becomes
locale-neutral (*"a lasagne or a stew"*), and the SA phrasings (*pap*, *potjie*, *braaibroodjie*)
stay in braai, which is the SA room and where they were authored to live.

---

## 6 · 🧪 THE PROOF

```
node --check sections/core.js
node tinza-doctor.js        # RED must STILL be 10        ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
grep -rn "Jan Braai" sections/     # must return NOTHING
node tinza-all.js vietnam ; node tinza-all.js thailand
```
⚖️ **NOT ONE `costPP` MAY MOVE.** This brief touches leftovers only.

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. **Frittatensuppe** → leftovers are no longer beef. **No Jan Braai. No braai-meat lasagne.**
2. **Jollof Rice** → **rice** ideas, not beef.
3. **Lablabi** → **beans**, not seafood.
4. **Any braai recipe** → **completely unchanged.** ⚖️ Braai is the SA room and it keeps its pap.
5. **Bebek Goreng** → its **authored** leftovers, untouched. One of the 267.
6. **The Storage box and its safety line** → unchanged, still free, still always there.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 7 · ⚖️ LAW 42 — THE RATCHET

**A rung that fails when a card's derived leftover key does not match its classified main
ingredient.** After commit 2 the correct count is small and known; it ships with that as its
baseline and fires the day a trace ingredient wins again.

⚠️ **Prove it born-RED, both arms** — ⚖️ §5b of MF160: *a probe must be shown to produce a true
negative too.* Jollof must be reported before the fix and **not** after; a card that was always
correct must be reported in neither.

---

## 8 · ▶️ THE PATTERN, STATED ONCE

🩸 **`stock` and `beef` are now known to have won FOUR separate scans:**

| engine | symptom | status |
|---|---|---|
| `wkPriceLookup` | stock → a whole chicken at R90 | **MF159 · open** |
| `wkClassifyMain` | tallow → the portion anchor | **MF161 · fixed 5 Aug** |
| the plan/shopping path | stock over-billed in the trolley | **open, unwritten** |
| `wkLeftoverKeys` | broth → beef leftovers | **this brief** |

⚖️ **One noun, four engines, four separate mornings.** Every one was found by Tina looking at a
card, never by a watcher. **That is the real finding, and it is why §7's rung matters more than
§4's fix.**
