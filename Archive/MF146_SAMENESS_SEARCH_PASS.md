# MF146 · SAMENESS SEARCH + HEADER PASS
**Brief for Code · written 25 Jul 2026 · ruled in `TINZA_RULINGS.md` §11 "ONE SLOT, ONE BEHAVIOUR"**

Closes doctor reds **#5 · #6 · #7**, and 4 of the 6 hits in **#2**.

⚖️ **Law 2** — Claude read the repo at HEAD. Tina's eyes on `tinza.netlify.app` close each step.
⚖️ **Law 1** — `node --check` every file before handback.

---

## THE ONE-LINE VERSION

`sectionHeader()` in `core.js:2824` **already has** the search slot, already at 16px, already themed. Nothing new gets built. Six rooms just aren't using it, and one room (Braai) is using the wrong half of it.

---

## STEP 1 — BRAAI: CONVERT TO INLINE, THEN DELETE THE BRANCH

**Do these two together. The delete is the point.**

### 1a · `sections/braai.js:28` — replace the `onclick` shape with the inline shape

Current:
```js
search:{ onclick:"S.searchPrevScreen='braai';S.searchScope=['braai'];S.searchQuery='';S.searchResults=[];S.screen='search_results';draw();window.scrollTo(0,0);", placeholder:'Search Braai recipes…' }
```

Target shape — copy the pattern from `events.js:949` / `worldkitchen.js:192`:
```js
search:{ value:searchVal('braaiSearch').replace(/"/g,'&quot;'),
         placeholder:'Search Braai recipes…',
         oninput:"liveSearch(this,'braaiSearchResults',{sections:['braai'],stateKey:'braaiSearch'})",
         clearJs:"set({braaiSearch:'',searchResults:[]})" }
```

⚠️ **Braai has never had a results container.** `liveSearch(inputEl, resultsId, spec)` writes into `document.getElementById(resultsId)` and **returns silently if the id is absent** (`core.js:41` — `if(!el) return;`). So a missing container is not an error, it is a search box that does nothing. **Add `<div id="braaiSearchResults"></div>` immediately under the header block in the Braai landing render**, exactly where the other rooms put theirs.

- Check `searchVal()` exists in braai's scope; if not, use the `(S.braaiSearch||'')` form that `events.js` uses.
- `stateKey` must be a new key — do **not** reuse `searchQuery`.

### 1b · `sections/core.js` ~2846 — delete the `s.onclick` branch from `sectionHeader()`

```js
if(s.onclick){
  searchEl = `<div onclick="${s.onclick}" …>🔍 ${s.placeholder||'Search recipes…'}</div>`;
} else {
```
Collapse to the inline branch only. `core.js:2817` has a commented-out example that also references the old shape — update or remove the comment so it doesn't teach the dead pattern back.

✅ **ACCEPTANCE:** re-add `onclick:` to any room and the search renders nothing / throws. If it still renders a tappable pill, the branch is not gone.

---

## STEP 2 — THE FOUR HAND-ROLLED SEARCH BOXES

These four **are** the four under-16px inputs. One element, two reds.

| file | line | current | note |
|---|---|---|---|
| `health.js` | 999 | 13px, already `var(--*)` tokens | cleanest, do first |
| `kiddies.js` | 109 | 13px, uses `filterFn:kidsThemeGridInner` | **preserve the filterFn spec** |
| `budget.js` | 84 | 13px, hard-coded dark palette, `maxCostPP` behaviour | see ⚠️ below |
| `furry.js` | 17 | 13px, hard-coded dark palette | scoped `sections:['furry']` |

For each: delete the hand-rolled `<div><span>🔍</span><input …></div>` block and pass its `oninput` / `value` / clear handler through `sectionHeader({… search:{…}})` instead.

⚠️ **Do not flatten the specs while moving them.** `kiddies` filters a grid via `filterFn`, `budget` caps by `maxCostPP`, `furry` scopes to one section. `liveSearch` supports all three — carry each one across verbatim. A search that silently loses its cap is worse than the 13px it replaced.

---

## STEP 3 — SIX ROOMS ONTO THE SHARED HEADER

20 header sites. **Order matters — smallest first, so the pattern is proven before the big one.**

| order | room | header sites | hard-coded `#f5e8cc` |
|---|---|---|---|
| 1 | `furry.js` | 1 | 1 |
| 2 | `budget.js` | 1 | 3 |
| 3 | `barplanner.js` | 1 (hand-rolled inline, `:214`) — **`sub:true`, no search** | 0 — but 4 hard-coded dark hexes |
| 4 | `spice.js` | 4 | 5 |
| 5 | `health.js` | 6 | 0 |
| 6 | `tinyTummies.js` | 8 | 15 |

- **`barplanner.js` — RULED 25 Jul, question closed.** Bar Planner is a **TOOL**, not a room (`TINZA_RULINGS.md` §11). It gets **a sub-header and NO search box.** Its current header is **hand-rolled inline at `:214`** — an *unmigrated* header, not a missing one; the doctor's "no `<h1>`" was reading the tag, not the block. ⚠️ It also hard-codes the **pre-reskin dark palette** (`#0f0e0c` · `#1a1208` · `#fff` · `#e0d4b8`) — those go, `var(--token)` replaces them. **Work = add a `sub:true` variant to `sectionHeader()` and render through it.** Header sites: **1**, not 0. Correct the table above accordingly.
- **`tinyTummies.js` is over half the job.** Its own session.
- **`#f5e8cc` is pre-reskin ink.** Do not port it into the new header — `sectionHeader()` uses `var(--on-media)` / `var(--on-media-soft)`. ⚖️ Never hand-roll hex.

⚠️ **`budget.js` and `furry.js` will visibly change.** Both still carry the old dark palette; the shared header is warm Spice. This is correct and expected — flagged so it doesn't read as a regression on live.

---

## STEP 4 — THE WARN ROOMS

Per the 25 Jul ruling: a scrollable **recipe list** gets a search; a hub of **tiles** does not.

| room | verdict |
|---|---|
| Spice sub-shelves (Spice Blends & Masalas, 40 entries) | **gets one** — ruled explicitly |
| Spice hub (6 tiles) | already correct, leave it |
| `tinyTummies` | judge per screen — list yes, tile hub no |
| `buffet` · `barplanner` | **NO — RULED 25 Jul.** Both are **TOOLS**, not rooms: you operate them, they hold no recipes, there is nothing to search. Sub-header, no search slot. |

---

## ⛔ FOUND WHILE INSPECTING BARPLANNER — FIX IT IN THE SAME TOUCH

`barplanner.js`, the non-Pro upsell block (~line 227): the pitch still reads **"for R50/mo"**. Pro is **R90** (ruled 28 Jun 2026). This is live to every non-Pro visitor and it is the *price on the pitch* — the one number a stranger reads before deciding. While the file is open, change it.

⚖️ Same failure shape as the `tierBar` leak: silent, no error, only visible to someone who looked. The R50→R90 sweep is now a **census check**, not a memory item.

---

## VERIFY

1. `node --check` every touched file.
2. `node tinza-doctor.js` — expect reds **#5, #6, #7** gone; red **#2** down from 6 to 2 (`utils.js:251`, `meals.js:15801` survive — out of scope).
3. Live check on each migrated room: header renders · type two letters · results appear **under the box, on the same screen** · clear (×) works · nothing navigates away.
4. Re-run the acceptance test in Step 1b.

⛔ **Nothing is banked until it is on GitHub and live on `tinza.netlify.app`.** Claude cannot push.

---

## 🎁 WHY THIS ONE FIRST

Once every room renders the same slots, *"which of these three copies is most comprehensive"* stops being a judgement call and becomes a countable list of filled vs empty slots. **The enrich checklist IS the slot list.** Render-first is what makes the sauce merge (session B) mechanical instead of taste.
