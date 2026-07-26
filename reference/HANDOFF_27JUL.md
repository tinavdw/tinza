# 🤝 TINZA HANDOFF — 27 Jul 2026 (end of the navigation sessions)
**Paste this at the start of the next chat. Repo HEAD when this was written: `456bf17`.**

---

## 1 · WHAT IS DONE AND PROVEN ON LIVE

**MF149 (the top-back build) is BUILT, PUSHED and VERIFIED.** Commits A–F plus G, HEAD `456bf17`.
- Census 18 → 16 · doctor 10 · `node --check` clean on 34 files.
- Both new rungs were **born RED at exactly 2 and 8**, matching my brief's measurement — proven by re-introducing each bug, then reverted.
- **G** deleted the orphaned `healthRecipeDetail()` (148 lines, 11-line tombstone left behind). Its dead cost block was carrying **two free §2.4 money-gate violations** — rung 25 went 13 → 11 for free.

**Tina's own fingers closed these on live:**
- ✅ Chips + Gnocchi — open/close repeatedly, phone Back and bottom Back both walk **out**. No loop.
- ✅ Oven Bakes + Waffles — phone Back exits the room, no longer dumps her on Homestyle Plates.
- ✅ Boerekos dish list — top Back reads **`← Africa`** (her own worked example, §24.9).
- ✅ Finger Foods — **one** guest bar.

⚖️ **THE NAVIGATION CHAPTER IS CLOSED** except for MF150 below.

---

## 2 · WHAT IS WAITING RIGHT NOW

**MF150 is written, corrected and pushed. Code has it (or is about to). Two commits, one push.**
`reference/MF150_LANDING.md`

**Commit A — §24.10, the landing law.** A **push lands at the TOP**; a **lateral lands ON THE BLOCK YOU TAPPED**. Cause is *not* an MF149 regression: `core.js:657` `jumpToContent` is an older feature that scrolls past the banner to `.content` on any in-section nav — written before the top Back meant anything, and now it hides the room's own way out. Deleted as the default; survives only inside the lateral branch, aimed at the selected block. **Must reuse MF149-C's `LATERAL_KEYS`, never a second copy (Law 6).** Serving +/− and collapsibles are `sameContext` and must NOT move the page.

**Commit B — §24.11, the unlabelled shell.** `recipeDetailFromResult(r, backAction, servings, color, bg, border)` at **meals.js:15985** has **no `backLabel` parameter**, so it physically cannot say anything but `← Back`. **SIX callers, not three** — Tina walked two, a static sweep found four more:

| room | call site | after the fix |
|---|---|---|
| Family Meals | meals.js:15382 | `← Family Meals` |
| Just Feed Me | core.js:2587 | `← Just Feed Me` |
| Budget | budget.js:68 | `← Budget` |
| 4 Ingredients | meals.js:15763 | `← Home` |
| Anchor Ingredient | meals.js:15869 | `← Home` |
| General Search | utils.js:237 | `← Home` |

⚖️ **The split is the depth-1 clamp, not an inconsistency:** FMF/Mood/Budget are 3-deep so a recipe is depth 2 → two-up is the room's name; Search/Anchor/4-Ingredients are **flat** so a recipe is depth 1 → two-up is **Home**.
⚠️ **My first draft said "Search → `← Search`" — wrong under Tina's own clamp, caught before she pushed.**
✅ **Sibling sweep DONE and CLOSED:** all 18 `sectionHeader()` sites are labelled · `planView`/`shoppingView` route through `sectionHeader` · `recipePage` has one caller and it is `recipeDetailFromResult` itself. **It is the only leaking shell in the app.**

**⚖️ GENERAL LAW (§24.11):** *a shell that can only default is a shell that will default.* Every Back-rendering shell must TAKE the label as an argument — naming callers is not enough if there is no parameter to name into.

### TINA'S LIVE CHECKS AFTER CODE SHIPS MF150
1. Events → Finger Foods opens at the **very top**, `← Home` visible.
2. Tap **Meaty** → lands on the Meaty Snacks heading. Tap **Pastry** → lands on Pastry.
3. FMF recipe = `← Family Meals` · Mood = `← Just Feed Me` · Budget = `← Budget` · Search/Anchor/4-Ingredients = `← Home`.
4. Serving +/− on any recipe → the page does **not** jump.

---

## 3 · NEXT AFTER MF150

**MF148 — Playwright.** Own brief. **Code builds it, not Claude** — the sandbox can't reach the Playwright CDN.

**Fix-queue ⑤ — the version-matched-but-parent-named bug. Own session.** ✅ **Wording RULED by Tina 27 Jul:** the card reads `<Parent> — <Version name, exactly as stored>` → **"Pannekoek — Savoury Mince-Filled"**. The version name is **never rewritten** — no per-version short names, no new field, **display rule only**.
- Measured: `bf-pannekoek` (meals.js:2644) has versions `"Cinnamon Sugar"` + `"Savoury Mince-Filled"`. Typing *beef mince* in Anchor returns a card reading just "Pannekoek". **The search is RIGHT; the label is the bug.**
- **Two parts, and part 2 is the one that bites:** (1) name the version on the card, (2) **open with that version chip pre-selected** — otherwise she taps a mince result and lands on a cinnamon-sugar pancake. Part 1 alone just moves the lie one screen later.
- Scope: Anchor + General Search + 4 Ingredients + mood `allRecipes()`.

---

## 4 · THE OPEN LIST (unchanged this session)

🔴 Just Feed Me 3-recipes fix (`getMoreMoodRecipes` — LIBRARY pages only; W1 S4, with the §21.1 healthy slot gate) · §21.2 MF123 healthy-is-not-a-diet (Tina rules the vegetable-forward number) · MF147 behaviour rungs (W1 S5) · R50 sweep + mojibake ~231 + biscuits→dog-food + Chef pitch hide (W1 S3) · MF132 §2.E/F money close (W1 S2) · `sharedWith` string→list migration (1021 records; the "Indian"/"India" landmine) · Events ③ buffet 7 headers · diet filter RED (118 vegan invisible) · 4 rooms no cost · `shareList()` 21 copies · `TINZA_PRICE` MF91 ×21 · `openSectionSearch` MF95 · budget.js + tinyTummies.js have no `sectionHeader()` · Toum `wk_africa.js` ~:132 · bar planner rework · tinyTummies + furry redesign (W3) · **NAV_KEYS lacks `wkContinent`/`wkRegion`** — a cross-link `returnTo` may lose the WK drill; **UNMEASURED, own job.** Cheap live test: open a WK recipe deep in Boerekos, follow a cross-link out, come back — if you land at the WK front door instead of the dish list, it's real.

**OPEN QUESTIONS:** `core.js:656` `_warm` allow-list is missing HOME · "§11" names three different things in the rulings.

---

## 5 · HOW WE WORK (for the new chat)

- **Claude can clone and read the repo directly** — `git clone --depth 1 https://github.com/tinavdw/tinza.git` from bash. No screenshots of code needed. Claude **cannot push** (no credentials) and reads the **repo at HEAD, never the running browser** — Law 2: Tina's eyes on live close a bug.
- **PARSE, NEVER REGEX** on any data audit — load the file, walk the objects. The 25 Jul Bobotie regex error cost two days of a false fix-queue entry.
- **Rulings go INTO `TINZA_RULINGS.md`** and the complete file is handed back drop-ready — never pasted as loose text.
- **Where a file and Tina's intent disagree: ASK TINA, never infer (§2.3).** Strike superseded rulings **dated and visible**, never silently.
- **One job per commit. `node --check` before every push. Several commits, ONE push** (Netlify is credit-based).
- **Every session ends with a flowchart summary + a memory update.**
