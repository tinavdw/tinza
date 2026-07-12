# TINZA BRIEF — MF50 · MF49 · MF51
**One commit. The search does not respect its own words, its own label, or its own rooms.**
Base: `46eb53b` (+ auto-commit), **live and Published.** `core.js` = **4137 lines on record.**

---

## ✅ WHAT ALREADY WORKS — DO NOT BREAK IT

`liveSearch()` in core.js is **PROVEN ON LIVE.** The input survives full-speed typing and backspace. Six rooms converted. **This brief adds to that mechanism. It does not rebuild it.**

| proven on live | |
|---|---|
| WK · `lamb` full speed | 40 hits, all World Kitchen, input survived |
| WK · `morocco` | 21 hits **by country** — the new `searchText` working |
| Furry · `chicken` | 25 hits, **Furry only** |
| MF44 | console is clean |
| MF45 | Option C, **both tiers, proven** |

⚖️ **Law 6:** everything below lives inside `liveSearch()` / `tinzaAllSearch()`. **DO NOT create a second search path. DO NOT touch `draw()`.**

---

# 🚨 MF50 — THE SUBSTRING BUG · **FIX FIRST · APP-WIDE**

## The bug
Typing **`rump`** in Braai returns **C·rump·ets · Rakott k·rump·li · K·rump·lis tészta** — 24 hits, mostly wrong.

The matcher is doing **`searchText.includes(term)`** — a raw substring test. It does not know where a word begins.

**This is the first thing a braai cook types, and the app looks stupid.** ⚖️ **Law 3 — silent wrong.** The results are confidently, plausibly wrong.

## ⚖️ THE FIX — WORD-START, NOT ANYWHERE

Match each query term at a **word boundary START** inside `searchText`.

- ✅ `rump` → **Rump** Steak
- ❌ `rump` → c**rump**ets · k**rump**li

## ⚠️ THE TRAP — READ THIS TWICE

**IT MUST REMAIN A PREFIX MATCH, NOT A WHOLE-WORD MATCH.**

She types **progressively**, one letter at a time. `l` → `la` → `lam` → `lamb` → `lamb t` → `lamb tag`…

- `lamb tag` **MUST** still find **lamb tag**ine.
- `moroc` **MUST** still find **Moroc**co.

> **WORD-START = the term must begin a word.**
> **WHOLE-WORD = the term must BE the word.** ⛔ **WRONG. It breaks live-typing entirely.**

**If you implement whole-word matching, you will destroy the feature we shipped two hours ago.** Test `lamb tag` before you commit.

## Scoring stays as-is
`+3` name hit · `+1` elsewhere · `+6` exact name · `+1` version hit · top 40 · min 2 chars. **Do not touch the scoring. Only the match test.**

## ✅ PROOF (Tina, on live)
- Braai · `rump` → **Rump Steak. NO crumpets. NO krumpli.**
- WK · `lamb tag` (partial, mid-typing) → **Lamb Tagine still found.**
- WK · `moroc` (partial) → **Morocco dishes still found.**

---

# 🚨 MF49 — BRAAI AND SPICE LIE ABOUT THEIR SCOPE

## The bug
The Spice box says **"Search blends, sauces & condiments…"** — and then searches **the entire app.**
Braai does the same.

Both are **tap-targets to the UNSCOPED global search screen.** **The label promises a room. The screen delivers 1021 dishes.** ⚖️ **Law 3.**

## ⚖️ THE FIX — ONE LINE EACH. THE PARAM ALREADY EXISTS.

The tap-target must open the search screen **with the scope preset**:
- Braai → `{ sections: ['braai'] }`
- Spice → `{ sections: ['spice'] }`

⛔ **DO NOT build them their own in-room `liveSearch`.** They already route to the working screen. **Just hand it the scope.** ⚖️ **Law 6 — the door exists; give it a key.**

## ✅ PROOF
- Spice · search anything → **Spice results ONLY.**
- Braai · `rump` → **Braai results ONLY** (and, per MF50, no crumpets).

---

# 🚨 MF51 — FMF IS DEAD. **THE ROOM THAT MATTERS MOST.**

## The bug — two parts
1. **Feeding My Family hub → NO SEARCH BOX AT ALL.**
2. **FMF › Breakfast → the box takes text ("bacon") and NOTHING HAPPENS.** The input renders. **The results container does not.**

`meals.js` was edited (+4 −6) — but the wiring landed on the wrong screen. **The Breakfast sub-screen never got a results container.**

> **This is the room a mother opens at 5pm. It has to work.**

## ⚖️ THE FIX

**A. FMF sub-screens** (Breakfast · Light Lunch · Supper · Bakes)
Each needs the **results container** alongside its input. Same `liveSearch` mount.
**SCOPE PER SUB-SCREEN** — Breakfast searches Breakfast, not all of Meals. *(Sub-scoping may need a `mealCat` narrowing on top of `sections:['meals']`. If the index does not carry meal-category, say so and DO NOT fake it — ⚖️ Law 3. Report and stop.)*

**B. FMF hub → add a search box.** Scope `['meals','bakes','floor']` — the whole FMF world.

## ✅ PROOF
- FMF › Breakfast · `bacon` → **results appear, Breakfast only.**
- FMF hub · `curry` → **results appear, FMF only.**
- Both: **full-speed typing, backspace survives.**

---

# ✏️ RIDE-ALONG — THE RESULT LABEL

The count reads **"40 recipes found in Tinza"** even when the search was scoped to one room.

→ When a scope is applied, it must read **"40 recipes found in World Kitchen"** (use `_SEARCH_SECTION_LABEL`, utils.js:171 — it already exists).

**Trivial, but it is the difference between "it searched everything" and "it searched MY room."**

---

# ⛔ NOT IN THIS COMMIT

| | |
|---|---|
| **MF52** — 404 headers + `raw.githubusercontent` SSL error | **own commit.** Assets, not search. ⚖️ Law 5. |
| **MF48** — Budget search (ruled, unbuilt) | own commit |
| **MF40** — back button (`mealCat` missing from `NAV_KEYS`) | own commit. ⚖️ Law 23. |
| **MF53** — Spice box jumps on focus | parked, cosmetic |
| **MF55** — green qty pill reads as a food-cost price on unpriced cards | parked → bundle with MF31/MF32, the colour law |
| **MF54** — Tiny Tummies search | ⚖️ **DECLINED. Stage pills ARE the search.** Law 25. |

---

# 📌 THE LAWS GOVERNING THIS SESSION

3. **Silent wrong is worse than loud missing.** *(rump→crumpets · Spice's label · a search box that eats "bacon" and returns nothing)*
5. **One thing per commit.** Localhost ≠ live · committed ≠ pushed · deployed ≠ **PUBLISHED.**
6. **Don't patch N sites. Build the ONE thing they should all call.** *(It's built. Use it.)*
22. **Re-read the code, not the note.**
25. 🆕 **A filter that matches how the user actually thinks beats a search box.** *(Tiny Tummies. Declined, correctly.)*

📌 **STANDING:** writes via Node `fs.writeFileSync`, **never Python** · **`core.js` is sacred — 4137 lines on record, count before and after** · render-proofs per-section, every room, individually.

⚖️ **A code-trace is not proof. Tina's fingers on the live app are.**
