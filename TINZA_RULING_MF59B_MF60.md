# TINZA — RULING ON CODE'S REPORT · MF59-B + MF60
**COMMIT A. Base `9bac7f5` (PUBLISHED). `core.js` = 4137 lines, unchanged, confirmed by Code.**

🏅 **Code stopped twice as instructed and corrected the brief twice. Both corrections are ACCEPTED.**
⚖️ **Law 22 fired on the BRIEF-WRITER, not on Code. That is the system working. Do it again.**

---

# ✅ WHAT CODE PROVED — THE BRIEF WAS WRONG, TWICE

### MF59-B — the brief's mechanism was fiction
❌ *"FMF's input gets its value from somewhere and WK's doesn't."* — **FALSE.**
✅ Both render through the **same** `sectionHeader()` (`core.js:2415`) and both derive `value` from persisted state (`S.mealSearch` / `S.wkSearch`, `data.js:61`). **The value binding is already shared and already correct.**

**THE ACTUAL BUG IS THE BACK-TO-HOME BUTTON:**

| room | Home exit | clears? |
|---|---|---|
| WK · `worldkitchen.js:190` | `set({screen:'home', wkContinent:null, wkRegion:null, wkSearch:''})` | ✅ **yes** |
| FMF · `meals.js:15529` | `set({screen:'home'})` | ❌ **no — `mealSearch` survives** |

> **WK IS NOT FIXED. WK IS LUCKY.** It nulls `wkSearch` inside a line written for continent/region reset.
> **That is the Law-6 signature in its purest form: a door that works by accident.**

### MF60 — the brief compared a door to a window
❌ *"Braai's chunky box and FMF's thin strip are two sizes of one input."* — **FALSE.**
✅ **THREE FAMILIES:**

| family | what | where |
|---|---|---|
| **A** | `sectionHeader()` — **two branches** | `core.js:2408-2419` |
| | · `s.onclick` → **a navigate PILL. No input at all.** | Braai `braai.js:28` · Spice `spice.js:7982` |
| | · `s.oninput` → **the inline "thin strip"** | FMF hub `meals.js:15530` · FMF sub `meals.js:15428` · WK `worldkitchen.js:192` |
| **B** | **the standalone Search PAGE** — the "tall chunky" one | `utils.js:247-248` |
| **C** | 🚨 **four sections rolling their own `<input>`, answering to nobody** | Health `health.js:998` (13px) · Furry `furry.js:17` · Kiddies `kiddies.js:109` (13px) · Budget `budget.js:40` |

> **Braai's "search box" is a BUTTON that navigates to Family B. It was never an input.**
> 📌 **LAW 32 🆕 — SAMENESS APPLIES TO THE SAME JOB. A navigate pill and a filter input are not the same job. Before you make two things look alike, ask what each one DOES.**

---

# ⚖️ THE RULINGS

## 1️⃣ MF59-B → **RENDER-EMPTY-ON-ENTRY. NOT THE ONE-LINE DOOR PATCH.**

⛔ **DO NOT** add `mealSearch:''` to FMF's Home exit. **That patches the fourth door and leaves the fifth.**

📌 **LAW 31 — DON'T CLEAR THE QUERY ON THE WAY OUT. RENDER IT EMPTY ON THE WAY IN.**

### 🔍 REPORT BEFORE YOU BUILD *(again — Law 22)*
1. **What is the ONE place every screen change passes through?** Is it `set()`? **If every navigation goes through it, the fix goes there and no future exit can miss it.** If some navigations bypass it, **name them.**
2. **What set of keys identifies "a screen"?** Specifically: **is FMF hub → Breakfast a change of `screen`, or only of `mealCat`?** The answer decides whether a `screen` check is sufficient or whether a key-set is required.
3. **Propose the mechanism. Do not build it yet.**

### ⚠️ HARD CONSTRAINTS
- 🚨 **DO NOT TOUCH `NAV_KEYS`.** The screen-identity question overlaps MF40 — **that is a DIFFERENT COMMIT.** ⚖️ **Law 23.**
  **Define the screen-identity list ONCE, in ONE place, and use it HERE. MF40 will consume the same list later.** Naming it now de-risks MF40; **editing `NAV_KEYS` now breaks Law 5.**
- 🚨 **MF46 IS UNTOUCHABLE.** `oninput` → state persistence stays exactly as it is.
  **Backspace one letter inside a room → the query SURVIVES.** If your fix breaks that, it is not a fix.

### ✅ PROOF — Tina's fingers, on live
- FMF hub · `curry` → **Home** → back into FMF → **BOX EMPTY**
- FMF hub · `curry` → **World Kitchen** → back into FMF → **BOX EMPTY**
- FMF hub · `curry` → tap **Breakfast** → **BOX EMPTY** *(must not regress)*
- **Any room · type · backspace one letter → QUERY SURVIVES** ⚠️ **MF46**
- WK · `lam` → **still 40.** ⚠️ **must not regress**

---

## 2️⃣ MF60 → **SPLIT. MF60 SHRINKS TO WHAT SHE ACTUALLY SAW.**

**MF60 (THIS COMMIT) = the INLINE input only. Family A, `oninput` branch, `core.js:2415`.**

- **Fixed height ≥ 48px** — a real thumb target on a tablet
- **Explicit `font-size` + `line-height`** → **the caret is full-height from first paint**
- ✅ **It is ALREADY one shared function. Law 6 is already satisfied. ONE EDIT.**
- 🎯 It fixes the thin strip **and** the stubby caret across **FMF hub · FMF sub-screens · WK** simultaneously.

⛔ **NOT IN THIS COMMIT — DO NOT CONSOLIDATE THE FAMILIES.**
⛔ **Do not touch Family B (`utils.js`). Do not touch Family C (health/furry/kiddies/budget).**
⛔ **Do not merge the `onclick` pill branch with the `oninput` branch.** ⚖️ **Law 32 — different jobs.**

### ✅ PROOF
- **FMF hub · WK hub · FMF sub-screens: the input is visibly taller, the text bigger, the caret full-height BEFORE the first keystroke.**
- Braai and Spice still show their **navigate pill**, unchanged, and it still opens the Search page.
- ⚠️ **`core.js` line count reported before and after.** *(4137 on record.)*

---

# 🆕 MF63 — **THE SEARCH SAMENESS DEBT.** ⛔ **OWN COMMIT. NOT TODAY.**

**Family C's four hand-rolled inputs answer to nobody.** Health · Furry · Kiddies · Budget — different fonts, different sizes, no shared renderer.
**And Family B (the search PAGE) is a third pattern again.**

🔧 **One `searchInput()` in `core.js`, absorbing A-inline + B + C.** Seven files. **That is not a cosmetic fix — it is an architecture commit.** ⚖️ **Law 5.**

❓ **AND A REAL PRODUCT QUESTION FOR TINA, LATER:**
**Braai and Spice search by NAVIGATING to a page. FMF and WK search INLINE.**
**Those are two different interactions for the same job — and that is a bigger sameness break than any font size.**
⚖️ **Ruling deferred. Do not act on it. Name it and park it.**

---

# 📌 THE LAW GOVERNING THIS COMMIT

3. **Silent wrong is worse than loud missing.**
5. Deployed ≠ **PUBLISHED**. **ONE THING PER COMMIT.**
6. **Don't patch N sites. Build the ONE thing they should all call.**
   *(WK's Home exit is the proof: a door that works by accident is not a fixed door.)*
15. **A ruling that lives only in the chat is not a ruling.**
22. 🩸 **THE BRIEF IS A HYPOTHESIS, NOT EVIDENCE. It has now been WRONG FOUR TIMES.**
   **Trust nothing in it you can check yourself. Stopping to say so is the job, not a delay.**
23. **Two bugs sharing a question do not share a commit.** *(Screen-identity ≠ `NAV_KEYS`. MF59-B ≠ MF40.)*
31. **Don't clear the query on the way OUT. Render it empty on the way IN.**
32. 🆕 **SAMENESS APPLIES TO THE SAME JOB. A navigate pill and a filter input are not the same control.**

📌 **STANDING:** writes via Node `fs.writeFileSync`, **never Python** · **`core.js` is sacred — 4137 lines, count before and after** · render-proofs per-section, every room, individually.

⚖️ **A CODE-TRACE IS NOT PROOF. TINA'S FINGERS ON THE LIVE APP ARE.**
