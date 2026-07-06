# TINZA — SESSION 2 BRIEF: FMF WARM FLIP
**6 Jul 2026 · the FMF sameness pass Code held back in Session 1 · a surgical refactor**

The goal Code deliberately deferred: get **Feed My Family** onto the warm theme so it looks and behaves identically to **Braai & World Kitchen** — with **zero regression** to the sections that share the recipe renderer. This whole brief is about doing the risky part *safely*.

---

## 0. PRE-FLIGHT (Tina — before starting Code)
- Confirm Session 1 (`7c835fc`) **and** the 11 renames are **pushed and live** at tinza.netlify.app. Quick eyeball: braai chips readable · Boerewors 2ppl = **600g** · a cake reads *"serves 12 · 1 slice each"* · Croissant *"12 hr · make-ahead"* · a renamed cake (Ultimate Chocolate Cake) opens, and a card whose "goes well with" points to it still opens it (the alias working).
- Start Code as a **fresh session** and drop in: **this brief + the flowchart**. A fresh session pulls from the repo, so the push must be done first.

---

## 1. DISCIPLINE (same as always)
- Curl the standards + know `/wow`. Back up `core.js`. One logical change at a time · `node --check` after each · smoke-test the section.
- Show diffs · **DO NOT push** (Tina reviews on live + pushes via GitHub Desktop).
- **THE linchpin of this session:** the non-warm callers of `recipeDetailFromResult` must stay **byte-identical**. Prove it with a snapshot/diff — never eyeball.

---

## 2. THE BLOCKER (why this is its own session)
Flipping FMF to `.warm` means changing `recipeDetailFromResult` — a **~260-line function shared by 6 entry points**: budget finder · mood · search-results · FMF · 4-ingredients · anchor (including the **Mood colour exception**). A blind change risks breaking working sections (RULE 1). A5 additionally touches the recipe page **braai + WK depend on**. So we make it safe with an `inWarm()` guard rather than editing in place.

---

## 3. ORDER OF PLAY (bank after each)
1. **Inventory + back up `core.js`.** Map, without editing: current `_warm` membership · how each of the 6 entry points calls `recipeDetailFromResult` · where the Mood colour exception lives · what hardcoded dark / purple / maroon styling sits in FMF's render path vs the shared path.
1b. **QUICK WIN first (independent of the refactor, low-risk) — A4.1 category-tap scroll-into-view.** Bug (Tina, from live): in FMF Bakes, tapping a category box (e.g. Breads & Rolls) renders the "…— N OPTIONS" list **below the grid** but doesn't scroll to it, so she has to scroll manually. Braai already does this right: it anchors the group with an id (`meatGroupTop`) and calls `scrollIntoView({behavior:'smooth',block:'start'})` after render (via a ~60ms `setTimeout`). **Fix:** give the FMF bakes group header the same anchor id + `scrollIntoView` on category tap. Small, safe, matches braai's existing pattern — bank it on its own before the refactor.
2. **Tokenise `recipeDetailFromResult` behind an `inWarm()` guard.** Replace hardcoded colours/styles with `var(--token)` on the **warm branch only**; wrap warm-specific logic so every non-warm caller emits **byte-identical** output. **Prove byte-identical** for the 5 non-FMF callers (snapshot/diff). Preserve the **Mood colour exception** exactly. **Bank this step BEFORE touching FMF** — so if anything later misbehaves, the refactor is isolated and revertible on its own.
3. **Add FMF to `_warm`.** FMF now inherits the warm theme; the A4 nav grid (already shipped, token-driven) flips to warm automatically. Verify FMF renders warm **and re-check all 6 callers are still byte-identical**.
4. **A2 — headers.** Route FMF section headers through the shared `sectionHeader()`.
5. **A3 — recipe opener.** Migrate FMF open/close to the universal `openRecipe` / `closeRecipe` (already live on WK / Health / Kiddies / Braai; FMF + Events are the last two pending).
6. **A5 — superset recipe page (most-comprehensive-wins).** Build the union recipe page and retrofit **braai + WK to it too**: green `qtyBox` · two-cost display · Free/Pro gate · version chips · clickable deep-link `goesWith` (braai gains it) · Start Cooking + timers (braai gains it) · full button row (Add to Plan / My Kitchen / Download). No per-section variants. **Because it touches braai + WK, re-verify both.** ⚠️ If the session is getting long or feels risky, **bank steps 1–5 (FMF fully on warm) and do A5 as its own short follow-up** — don't rush the braai/WK retrofit.
7. **Regression gate + hand-off.** Load every section (braai · WK · health · kiddies · events · FMF) and confirm the 6 `recipeDetailFromResult` callers are unchanged. Hand Tina per-file diffs. She reviews on live + pushes.

---

## 4. DONE =
FMF is visually indistinguishable in chrome from braai/WK · the 5 non-FMF recipe callers are byte-identical · the Mood colour exception is intact · (if A5 landed) braai + WK recipe pages gained the superset with no regression. Then FMF sameness is complete and only **Events** remains for the universal-opener migration.
