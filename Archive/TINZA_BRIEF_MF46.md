# TINZA BRIEF — MF46 · MF45 · MF44
**One commit. Base: `919046e`. Ruled by Tina, 12 July 2026.**

---

## ⚖️ THE LAWS THAT GOVERN THIS SESSION

1. **`node --check` proves nothing.** It passed on a zero-byte `spice.js`.
2. **A report is not proof.** Prove it per-surface. Tina's eyes on LIVE close the proof.
3. **Silent wrong is worse than loud missing.**
4. **Ask "what is not guarded?" — never "is X guarded?"**
5. **One thing per commit.** Localhost ≠ live · committed ≠ pushed · pushed ≠ deployed · **deployed ≠ published.**
6. **Don't patch N sites. Build the ONE thing they should all call.**
7. **A blank is a bug. A teaser is a pitch. The lock is the salesman — and a salesman with an empty bag stays home.**
22. **A diagnosis that sits in the notes long enough stops being re-examined.** Re-opening an old bug? **Re-read the code. The note is a hypothesis, not evidence.**
23. **Two bugs sharing a root cause do not necessarily share a fix.** Confirm the mechanism together; ship the medicine apart.
24. **A shared index with a scope is one door. A shared screen without one is a funnel.** Check whether the data already knows where it came from before building anything.

📌 **STANDING:** all writes via Node `fs.writeFileSync`, **never Python** · `core.js` is sacred, line-count before and after · render-proofs per-section, all 12 rooms, individually.

---

# PART 1 — MF46 · THE SEARCH · **THE MAIN EVENT**

## The bug, stated once

The `<input>` lives inside the template literal that `draw()` rewrites. Every keystroke fires `oninput="set({xSearch})"` → `draw()` → **`#root` is rebuilt → the input being typed into is destroyed.** A fresh, empty, unfocused input replaces it.

**"La" is not a search result. It is the app losing a race with Tina's fingers.**

**This is a RENDERING bug wearing a search costume.** The search *logic* is fine. It has never been handed more than one letter.

> Diagnosed correctly on **25 May**. Replaced on **4 June** by a cheaper, plausible, wrong note ("it was never wired up"). Nobody re-read the code for seven weeks. ⚖️ **Law 22.**

## What the census proved (read-only, Code, base `919046e`)

- The **working door already exists**: `globalSearchLive` (utils.js:200) writes only `#searchResultsBody` and **never calls `draw()`**. The input survives.
- `tinzaAllSearch` indexes **11 adapters** via `TINZA_ADAPTERS` (index.js:408-412): `meals · bakes · floor · health · world · events · braai · beverages · tiny · spice · furry`.
- **Every record carries `section`** (index.js:74). Hits carry a display label via `_SEARCH_SECTION_LABEL` (utils.js:171). **The index is already room-aware.**
- `searchText` (index.js:91) = `name + nameAlt + aliases + cuisine + country + goesWith + ingredient names`. **Richer than any local filter in the app.**
- **NOT in the index:** Kiddies (searches `KIDS_THEMES` — a different object type) · Budget (not a section; a filter view over `meals`/`floor`).

## ⚖️ THE RULING — SCOPED-GLOBAL

### 1. `core.js` gains **exactly one** function

```
liveSearch(inputEl, resultsEl, queryFn)
```
- Renders the shell **once**.
- Writes **only** the results container.
- **NEVER calls `draw()`.**
- Debounce ~150ms (currently every letter would re-query 1021 dishes).

> This is `globalSearchLive`'s pattern **LIFTED**, not invented. It already works in production.

⛔ **DO NOT** "preserve focus" or `setTimeout` the caret back. That was tried on 25 May and it did not hold. **Restoring state is a patch. Not destroying it is the fix.**
⛔ **DO NOT throttle the handler to make it "feel" fixed.** That makes the race slower, not gone. She still drops letters — just rarely enough to look OK. ⚖️ **Law 3.**

### 2. `tinzaAllSearch` gains **exactly one** optional param

```
tinzaAllSearch(q, { sections: [...] })
```
Filters on the `section` field **that is already on every record**. This is not new plumbing.

### 3. Per room

| Room | Action |
|---|---|
| **Meals** | `liveSearch` + `tinzaAllSearch(q, {sections:['meals']})` · **delete the local filter** (meals.js:15398) |
| **World Kitchen** | `liveSearch` + scope `['world']` · **delete the local filter** |
| **Health** | `liveSearch` + scope `['health']` · **delete the local filter** (health.js:1157) |
| **Events** | `liveSearch` + scope `['events','beverages']` · **gains a filter for free** |
| **Furry** | `liveSearch` + scope `['furry']` · **gains a filter for free** |
| **Budget** | `liveSearch` + scope `['meals','floor']` · **KEEP the `maxCostPP` cap.** Cost is a filter, not a search axis — text finds it, the cap gates it. |
| **Kiddies** | `liveSearch` + **its own theme `filterFn`** (kiddies.js:94, unchanged). Not indexed; themes are not recipes. **The mechanism is shared, the filter is pluggable.** |
| Global Search | ⛔ **DO NOT TOUCH.** It is the reference implementation. |
| Braai · Spice | ⛔ **DO NOT TOUCH.** Tap-targets to Global. They work. |
| Tiny Tummies | ⛔ **DO NOT TOUCH.** No input, correctly. |

> 🆕 **MF47 (Events + Furry have no filter) IS DISSOLVED.** The index already covers them. Do not open it.

⛔ **DO NOT build `adaptKiddies`.** Themes are not recipes. Forcing them into a recipe index is a category error.
⛔ **`draw()` IS NOT TOUCHED.** Not one line. Rewriting the render loop to fix a search bar is a nuclear option on a launch runway. **Route around it.**
📌 **`core.js`: 4113 lines on record.** Report the count before and after. It gains ONE function and nothing else.

## ✅ PROOF — Tina, on LIVE, not localhost

For **each** of: **World Kitchen · Kiddies · Furry** (three rooms, three different code paths — global-scoped, local-filterFn, free-filter):
1. Type **`lamb tagine`** (or the room's equivalent) **at full speed**. Every letter appears.
2. **Backspace deletes.** (The backspace is the tell — no filter bug eats a deletion.)
3. Results are **correct** and **scoped to that room only.**

**A code-trace is not proof. A screenshot from the live site is.** ⚖️ **Law 2.**

---

# PART 2 — MF45 · THE LOCK THAT SELLS NOTHING · **TINA RULED: OPTION C**

## The bug

On Free, the **88 unpriced WK cards** show the **same 🔒** as a fully-priced dish. **The salesman is promising a price Tinza does not have.** A Free user pays R50, unlocks Lamb Tagine, and gets *"not yet priced."* **Broken promise at the exact moment she hands over money.** ⚖️ **Law 7.**

## ⚖️ THE RULING — OPTION C. FINAL.

**The gate now asks TWO questions, not one:**
1. **Is there a price?** ← NEW. Asked **first**.
2. Is the user Pro? ← only asked if #1 is yes.

| | **PRICED** (e.g. Zaalouk) | **UNPRICED — the 88** (e.g. Lamb Tagine) |
|---|---|---|
| **FREE · browse card** | 🟢 🔒 | **NOTHING. No dot, no lock, no line.** |
| **PRO · browse card** | 🟢 `R15 pp` | 🟢 `cost: not yet priced` |
| **FREE · detail** | 🔒 | **`≈ not yet priced: lamb shoulder`** ← unlocked |
| **PRO · detail** | `R15 pp` | `≈ not yet priced: lamb shoulder` |

- **The loud line on detail is UNLOCKED for Free.** It is not a number, so it is **not a gate leak.** It is an **absence, honestly stated.** ⚖️ Law 3.
- **ONE DOOR:** this branch lives in **`wkCostState(r,n)`** — which MF43 already built and which **all four surfaces already call.** ⚖️ Law 6. **Do NOT add a second check.**
- ⛔ **Do NOT touch `costLine()`.** It stays the only Rand-emitter in the app.
- 🎯 **ZAALOUK IS THE CONTROL.** It must not move: `R15 pp` on Pro, 🔒 on Free. **If Zaalouk changes, the fix is blanket and it is WRONG.**
- 🌱 **This branch is self-deleting.** It is dead the day the 88th price is signed. That is correct — it is a truth-teller, not a feature.

## ✅ PROOF — Tina, on LIVE, both tiers

- FREE · Lamb Tagine **card** → **no chip at all**
- FREE · Lamb Tagine **detail** → **`not yet priced: lamb shoulder`**
- FREE · Zaalouk card → **🔒 (UNCHANGED)**
- PRO · Zaalouk card → **`R15 pp` (UNCHANGED)**

---

# PART 3 — MF44 · THE CONSOLE LOG · **RIDE-ALONG**

`console.info` at **index.js:291-293** prints `[Tinza index] World Kitchen costPP-skipped … 88 of 1021` into **every live user's browser console.**

- **Dev-gate it.** Only print on `localhost` or when the URL carries `?dev`.
- ⛔ **DO NOT DELETE IT.** It is the instrument that found the 88. ⚖️ **Law 19 — a metric that doesn't exist is a bug you cannot see.**

---

# THE COMMIT

**All three ride together.** All three are additive. None touches `draw()`. None touches `costLine()`.

```
MF46 scoped-global search + MF45 free-tier unpriced gate + MF44 dev-gate console
```

⚖️ **Law 5:** committed ≠ pushed ≠ deployed ≠ **published.** Give Tina the hash. She confirms **Published** on Netlify. **Then she proves it with her own eyes, on live.**

⛔ **MF40 (back button) DOES NOT RIDE IN THIS COMMIT.** Same disease, different medicine. ⚖️ **Law 23.** Its fix is known and cheap (`mealCat` missing from `NAV_KEYS`) — **it gets its own commit, after this one is proven.**
