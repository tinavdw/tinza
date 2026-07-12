# TINZA BRIEF — MF46 · THE SEARCH BOX EATS YOUR TYPING

**Status:** BROKEN SINCE IT WAS BUILT. **THE SEARCH HAS NEVER WORKED.**
**Baseline:** `main@919046e` — PUBLISHED, verified 12 Jul 18:27. MF43 is closed and live.
**Severity:** 🚨 **LAUNCH BLOCKER.** Search is a locked Tinza feature on **every screen**.
**Session purpose:** ONE JOB. MF46. Read §6 before you touch anything — it may not be one job.

---

## 1. THE SYMPTOM — TINA, ON LIVE, 12 JUL

> *"Letters won't appear. It's an effort to write 'lamb' — won't go further than 'La', and then it's a struggle to delete it."*

Reproduced on **`919046e`** AND on the **`c03da83` permalink** (the commit *before* MF43).

⚖️ **THE A/B IS DONE. MF43 IS INNOCENT. NO ROLLBACK.**
`index.js` was edited (+7 −25) in MF43 and search broke — but search was **already broken one commit earlier**. The finder edit is not the cause. **`919046e` stays.**

---

## 2. THE DIAGNOSIS — AND THE BACKSPACE IS THE PROOF

**The input element is being destroyed and rebuilt on every input event.**

```
user types 'l'
  → oninput fires
  → the render function rewrites the CONTAINER's innerHTML
  → the <input> the user is typing into IS DESTROYED
  → a fresh, EMPTY, UNFOCUSED <input> replaces it
  → 'a' lands only because the browser sometimes wins the race
  → 'm' never does
```

**Backspace is the tell.** A validation bug, a filter bug, a debounce bug, a keyboard bug — **none of them eat a DELETION.** Only element-destruction does. Backspace is being fired at an element that no longer exists.

👉 **THIS IS NOT A SEARCH BUG. IT IS A RENDERING BUG WEARING A SEARCH COSTUME.**
The search *logic* is very likely fine. **It has never been handed more than one character.**

---

## 3. THE FIX

⚖️ **LAW 6 — ONE DOOR.**

1. **RENDER THE SHELL ONCE. UPDATE ONLY THE RESULTS LIST.**
   The `<input>` must **survive the keystroke**. It is not results. It must not live inside anything the input handler rewrites.
2. **DEBOUNCE ~150ms** on the query. Right now every letter would re-query **1021 dishes**. Even once the input survives, that is a stutter waiting to happen.
3. **PRESERVE FOCUS + CARET.** If any path still re-renders the input, it must restore `.value`, `.focus()` and `selectionStart`. **But prefer not re-rendering it at all** — restoring state is a patch; not destroying it is the fix.

⛔ **DO NOT "FIX" THIS BY THROTTLING THE HANDLER.** That makes the race slower, not gone. Tina will still lose letters, just less often — **which is worse, because it will look fixed.** ⚖️ Law 3.

---

## 4. PROOF — THIS ONE IS TINA'S, NOT YOURS

⚖️ **LAW 2. A code-trace is not proof. It has already lied to us twice this week.**

✅ **PROOF = Tina, on the LIVE app, types `lamb tagine` at full speed into the search bar, and:**
- **every letter appears**
- **backspace deletes normally**
- **results appear and are correct**
- **and she can then type `tagine` after clearing, with no stickiness**

Test on **at least two different screens** (search is on *every* screen). ⚖️ **Law 2 — a bad surface hides inside a good aggregate.**

---

## 5. WHILE YOU ARE IN THERE — TWO SMALL ONES

**🆕 MF44 — THE CONSOLE.LOG SHIPS TO PRODUCTION.**
`index.js:~274/292` prints `[Tinza index] World Kitchen costPP-skipped … 88 of 1021` into **every live user's console.** Harmless to them, but it publishes an internal coverage metric to anyone who opens F12. **Dev-gate it (`?dev` / localhost) — do not delete it. It is too useful.**

**🆕 MF45 — THE LOCK THAT SELLS NOTHING.** *(Tina's ruling required — do not code this yet.)*
On Free tier, the 88 unpriced WK cards show the same 🔒 as a fully-priced dish.
⚖️ **LAW 7 — THE LOCK IS THE SALESMAN.** On those 88 cards, **the salesman is promising a price Tinza does not have.** A Free user pays R50, unlocks, opens Lamb Tagine — and gets *"not yet priced."*
**That is a broken promise at the exact moment she hands over money.**
Proposed fix (Tina signs): on the 88, Free sees the **loud line, unlocked**. Honesty is free.

---

## 6. 🔎 THE HYPOTHESIS THAT MATTERS — READ BEFORE STARTING

**MF46 AND MF40 MAY BE THE SAME DISEASE.**

- **MF46:** the search input **does not survive a re-render.**
- **MF40 (back button):** the meal category **never lands on the history stack** — the state does not survive the navigation. Four sessions. Never fixed. A correct proof-by-trace once shipped a real fix for the wrong bug.

**Both are "state does not survive a render."** Same spine. Same render loop. Same missing persistence.

👉 **BEFORE assuming they are separate: look at how the spine re-renders, once, for both.** If it is one root cause, fixing it twice separately is how you get two half-fixes and a third bug. ⚖️ **Law 6.**

⚖️ **LAW 4 — ASK "WHAT STATE DOES NOT SURVIVE A RE-RENDER?" — NOT "is the search input re-rendered?"**
The narrow question gets a true answer. **The broad one may get you MF40 for free.**

---

## 7. LAWS IN FORCE

1. `node --check` proves nothing.
2. **A report is not proof. Prove it per-surface, in the browser, with Tina's fingers.**
3. **Silent wrong is worse than loud missing.** A throttled race still drops letters.
4. **Ask what is NOT guarded. Never "is X guarded?"**
5. Committed ≠ pushed ≠ deployed ≠ **published**.
6. **Don't patch N sites. Build the one thing they should all call.**
19. **A metric that doesn't exist is a bug you cannot see.** — *and now: a feature nobody exercises is the same thing. The search bar has been in every screenshot for two months.*

- All writes via Node `fs.writeFileSync`. **Never Python.**
- `core.js` is sacred — **line count before and after.**
- MF46 ships as **its own commit**, on top of `919046e`.

---

# 🚨 APPENDIX — ADDED 12 JUL 19:10. **READ THIS BEFORE §2. IT CHANGES THE JOB.**

## THE BUG WAS CORRECTLY DIAGNOSED ON 25 MAY 2026. THEN WE LOST IT.

**From the chat log, 25 May — a previous Claude session, reading the actual code:**

> *"The root problem was that the input was inside the template literal, so every keystroke triggered `draw()` → rebuilt the page → **destroyed the input**."*

**THAT IS MF46. VERBATIM. SEVEN WEEKS AGO.**
§2 of this brief re-derives it from a symptom. **It did not need deriving. It was already written down and correct.**

**A fix was attempted in May:** the search bar was made a **tap-target** that navigates to a **dedicated search screen**, with **`setTimeout` to preserve focus across redraws.**

⛔ **THAT PATCH WAS TRIED. IT DID NOT HOLD.** It is exactly the "restore focus after the re-render" approach §3 warns against. **DO NOT REACH FOR IT AGAIN.** It slows the race. It does not end it.

## THEN, ON 4 JUNE, A DIFFERENT AND WRONG DIAGNOSIS REPLACED IT:

> *"It's not broken — it was never wired up. The search bar faithfully saves what you type, but there's no code that filters. Typing 'm' stores 'm' and… nothing searches. That's a perfect opening task for the next conversation."*

**That note is what killed it.** Not invisibility — **a cheaper, plausible story.**
*"Never wired up"* sounds like a Tuesday afternoon. *"The render loop destroys the input"* is architecture. **THE CHEAP STORY WON AND THE BUG GOT DEFERRED.**

**And then the v33 header template rolled that same search bar into EVERY SECTION. THE TEMPLATE PROPAGATED THE BUG TO TWELVE ROOMS.**

---

## ⚖️ 🆕 LAW 22 — A DIAGNOSIS THAT SITS IN THE NOTES LONG ENOUGH STOPS BEING RE-EXAMINED.

Law 11: *a NUMBER that sits in the notes long enough starts to look like a FACT.*
**Law 22 is its twin, and it is worse:** the second look starts from the **note**, not the **code** — and here **the note was wrong.**

**A correct diagnosis was overwritten by a plausible one, and nobody re-read the original.**
👉 **WHEN RE-OPENING AN OLD BUG: RE-READ THE CODE. THE NOTE IS A HYPOTHESIS, NOT EVIDENCE.**

---

## 🔧 WHAT THIS CHANGES ABOUT THE FIX

**MF46 IS PROBABLY TWO BUGS IN A COAT. FIX ONLY ONE AND IT WILL LOOK LIKE A NEW BUG.**

1. **THE RENDER BUG** *(real, confirmed twice, causes "La")*
   The input lives inside the template literal. `draw()` rebuilds it. The keystroke dies.
   → **Render the shell once. The input must live OUTSIDE anything `draw()` rewrites.**

2. **THE WIRING BUG** *(the June note may be HALF right)*
   At least the **Events** search may genuinely have **no filter function behind it.**
   → **If you fix only #1, some searches will happily accept letters and then return NOTHING.**

## ⚠️ AND: THERE MAY BE **TWO** SEARCH IMPLEMENTATIONS LIVE AT ONCE
- the **May "dedicated search screen"** (tap-target + setTimeout), and
- the **v33 in-header search bar** that the template copied into every section.

⚖️ **LAW 6 — ONE DOOR.** If there are two, **there must end up being one.**

## 🔍 THE FIRST COMMAND OF THE SESSION — NOT THE FIX. THE CENSUS.

⚖️ **LAW 4 — ASK WHAT IS *NOT* WIRED. NEVER "is search wired?"**

**BEFORE WRITING ANY CODE, PRODUCE THIS TABLE. ALL 12 ROOMS. NO EXCEPTIONS:**

| room | search input present? | inside a `draw()`-rewritten container? | filter function exists? | which implementation? |
|---|---|---|---|---|

**A ROOM THAT ACCEPTS LETTERS AND RETURNS NOTHING IS STILL BROKEN.**
⚖️ **Law 2 — a bad room hides inside a good aggregate. Prove it per-room.**
