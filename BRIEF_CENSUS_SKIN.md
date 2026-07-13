# BRIEF — THE SKIN SESSION · STEP 1 · THE CENSUS
**13 July 2026 · Tinza · MF66 · MF63 · MF64 · MF65**

---

## ⛔ THIS IS A READ-ONLY TASK

**WRITE NOTHING. EDIT NOTHING. COMMIT NOTHING. PUSH NOTHING.**

You are producing **three tables and three verdicts.** That is the entire deliverable.
`core.js` is **4149 lines on record** and must still be 4149 when you finish, because you are not touching it.

---

## 🛑 STOP-CONDITIONS (⚖️ Law 35 — READ MAY END THE TASK)

Read these before you start. If any fires, **say so and stop on that item** — do not invent work.

- **If a screen already renders its search through one shared `core.js` function using Warm Spice CSS tokens** — say so. It is already correct. Do not propose a rewrite.
- **If MF65 and MF40 turn out to be literally the same missing `NAV_KEYS` entry** — say so. One fix, not two.
- **If the black text is NOT a hardcoded hex** — say so plainly. The hypothesis below is **a hypothesis, not evidence.** ⚖️ Law 22 fired on Claude eight times yesterday. It may fire again here.

**The cheapest bug-close is the one where nobody wrote anything.**

---

## CENSUS 1 — THE SEARCH SURFACE
### (MF63 — two patterns, one job · MF64 — Chutney has nothing)

⚖️ **Law 4 — ask "WHAT IS NOT GUARDED?", never "is X guarded?"**
So **do not** start from the rooms we already named. **Enumerate the complete list first, then check each one.**

**Step 1.** From `index.html` + the section registry (`RECIPE_SOURCES` / `NAV_KEYS` / the nav config — whatever actually enumerates rooms), build the **complete list of every screen a user can land on.** Every room **and every sub-screen** — Spice's Chutneys/Sambals/Jams, every FMF section, every Braai sub-section, every Events sub-feature. If a screen exists, it is on the list.

**Step 2.** For each screen, one row:

| Screen | Room / parent | **BOX · PILL · NONE** | File:line that renders it | Which search fn it calls | Does it name the room it searched? |
|---|---|---|---|---|---|

- **BOX** = an inline search input, in the header, on that screen
- **PILL** = a navigate pill that throws her to a separate Search page
- **NONE** = no box, no pill, nothing at all ← **these are the MF64 family**
- Search fn = `tinzaAllSearch` / `liveSearch` / `searchVal` / `mealSearch` / other / none

**Step 3.** End with one line: **`X boxes · Y pills · Z nothing.`**

**Known starting points — verify each, do not trust them:**
WK and FMF = inline box · Braai and Spice = pill → Search page (`utils.js:247`) · Chutney = nothing ·
**Family C, unverified:** Health `health.js:998` · Furry `furry.js:17` · Kiddies `kiddies.js:109` · Budget `budget.js:40`.

**Bonus, same pass:** if any room's header does **not** go through the shared `sectionHeader()`, flag it. That is a sameness leak.

---

## CENSUS 2 — THE SKIN
### (MF66 — the results are black. A grandma cannot read them.)

⚖️ **This is not cosmetic. The founding rule is "readable by a child and a grandma on a mobile phone."** That rule is currently broken on live.

**The lead (found in Commit C's own diff):** the old count label at `utils.js:271` carried
`style='font-size:11px;color:#4a3020'` — **a hand-typed hex.** That is the fingerprint of the disease. Go hunting for its siblings.

**Step 1 — the sweep.** Grep the **search render path only** (the results list · the result card · the count label · the input itself · the Search page shell · the empty state) across `sections/*.js` + `core.js` for:

`color:#` · `background:#` · `background-color:#` · `border:` with a hex · `font-size:` with a number · `rgb(` · `rgba(`

| File:line | The exact declaration | What it renders | Which Warm Spice token it SHOULD be |
|---|---|---|---|

**Step 2 — then answer the actual question. WHY IS THE RESULT CARD TEXT BLACK?**
Read the result-card builder and name **the exact line.** It is one of:

- **(a)** a hardcoded dark hex
- **(b)** no colour is set at all, so it inherits a black browser default
- **(c)** it uses a token, but that token resolves dark on that background
- **(d)** the result cards **do not call `warmCard()`** and are built by hand somewhere else

**Do not guess between these. Read the code and tell me which.**

**Step 3.** State plainly: **do the search result cards call the shared `warmCard()` renderer — yes or no?** If no, what do they call instead?

**Cost colours are locked and are not in scope:** food cost `#46530c` · shop-spend `#876213`.

---

## CENSUS 3 — THE BACK BUTTON
### (MF65 — Back dumps her on Home, not back in the room)

⚖️ **Law 23 — two bugs sharing a name do not share a fix.** Assume MF65 and MF40 are **two** bugs until the code proves they are one.

1. Read the **Search page's Back handler.** Where does it actually send her? **Print the line.**
2. Read **`NAV_KEYS` in full.** Print it.
3. Verdict:
   - Is `mealCat` missing from `NAV_KEYS`? *(that is MF40)*
   - Is the Search page's Back a **separate, hardcoded** `goHome()` / route-to-root? *(that would be MF65, a different bug)*
   - **Same bug, or two bugs?** Answer with the line numbers, not with an opinion.

---

## 📦 THE DELIVERABLE

**Three tables. Three verdicts. Zero lines of code. Zero edits. Zero pushes.**

Tina rules on the census. **Then** we brief the fixes — **one thing per commit.** ⚖️ Law 5.

---

*Not in this brief, on purpose: MF70 (the UTF-8 mojibake in World Kitchen) and MF68 (the dead `tinzaSearch` in `search.js`). Each gets its own session. Do not touch them here.*
