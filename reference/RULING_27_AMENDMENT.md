# ⚖️ §27 — AMENDMENT (paste-in block)

> ⚠️ **PASTE-IN BLOCK, NOT A REBUILT FILE — DELIBERATELY.** `TINZA_RULINGS.md` at HEAD runs to **§30**,
> but §31 (retained-vs-consumed equipment) is live in the Asia lane and is therefore in Tina's local
> copy only. Rebuilding "the complete file" from HEAD would silently delete it. **Replace only the
> §27 block**, from its `## 🔧 27 ·` heading down to the `---` above §28.

---

## 🔧 27 · **STAPLES LAND ON THE SIDES SHELF** — **RULED 29 Jul 2026 · AMENDED 30 Jul 2026 (Tina)**

> ⚖️ **AMENDED 30 Jul 2026.** The original §27 ruled a sixth tab, `basics` 🔧, placed last after
> Drinks. **That is STRUCK.** Tina, 30 Jul: *"a staple can most of the times be a side, I suppose"* →
> *"lets rather add staples to sides."* Clauses 1 and 2 below are rewritten; clauses 4 and 5 stand;
> clause 3 is **carried, unbuilt, and is the only open question left** (see 27.6).

**The gap.** Ruling **A5** made staples real cards with `course:"staple"`. It never said where they
land. `wkCourseToTab()` had no case for `staple`, so it fell to `default: return "mains"` — and a
cook browsing tonight's dinner was offered a bottle of chilli oil. ⚖️ **The code was not wrong so
much as never told.** A gap in A5, not a breach of it.

### THE RULING (as amended)

1. ⚖️ **`wkCourseToTab("staple") → "sides"`.** No sixth tab. A sambal, a jar of chilli oil and a bowl
   of coconut rice are all things that sit **beside** the meal, which is what the Sides shelf already
   means. ✅ **And it removes a real layout risk**: the tab bar already renders five buttons across a
   phone with "Desserts" wrapping, and a sixth would have taken each to roughly 57px.
2. ⚖️ **`wkPoolOf("staple") → 'side'` MOVES WITH IT, and this half is a genuine bug fix rather than a
   preference.** `staple` previously fell to `default: return 'main'` in the portion brain, so a
   sambal or a bowl of rice added to a plan **counted as a MAIN** and dragged every real main down
   the spread curve — rice + sambal + a curry read as *three mains* and halved all three.
   **The shelf and the portion brain must agree.** They now do.
3. ⚠️ **CARRIED, UNBUILT, AND NOW THE ONLY OPEN QUESTION — staples and the plan button.** The
   original clause read: *staples are not addable to My Plan; you do not serve chilli oil to eight
   people.* That reasoning assumed a separate reference shelf. **It sits differently now that
   staples are among the sides**, because the 14 staples are not one kind of thing — see 27.6.
   ⛔ **No plan guard has been built and nothing has been silently decided.**
4. **Staples still count toward the country's dish target.** They are real cards with real work in
   them. Unchanged.
5. **The rejected option, and why.** Filtering `staple` out of the tabs entirely would leave a staple
   reachable **only** through some other dish that happens to link to it — a cook who wants to make
   chilli oil *on purpose* would have no route at all. **Discoverability was the whole point of
   making them cards.** Unchanged, and the Sides route satisfies it just as well as a Basics tab did.
6. 📊 **THE MEASUREMENT BEHIND 27.3, taken 30 Jul across all 1,162 WK records.** There are 14
   `course:"staple"` cards and they are **two different kinds of object**:
   - ✅ **2 are genuine plate portions and SHOULD be plannable:** `Gohan` (100g rice per person) and
     `Nasi Uduk` (90g coconut rice per person).
   - ❌ **11 are batch-and-keep jars, where a guest multiplier means nothing:** Dashi · Ponzu · Gari ·
     Nukazuke (a **500g bran bed** you keep alive) · Chilli Oil · Master Stock (**1.5L**, re-used) ·
     Homemade Tofu · Suan Cai (**2kg** cabbage) · Sambal Terasi · Sambal Matah · Bawang Goreng.
   - ⚠️ **1 is MIS-COURSED:** `Kake Udon` is a bowl of noodle soup — a dish, almost certainly `main`.
   ⚖️ **So a blanket guard on `course === "staple"` would be wrong in both directions**: it would
   strip the plan button off two bowls of rice while the 2kg ferment problem it was written for
   affects the other eleven. **The clean fix is a data change, not a render change** — re-course
   `Gohan` and `Nasi Uduk` to `side`, re-course `Kake Udon` to `main`, and clause 3 then applies to a
   set of 11 with nothing ambiguous in it. ⏱️ **Japan and China are closed and pushed**, so those
   re-courses are edits to shipped files and should be batched into one deploy rather than done
   alone.
7. 🩸 **A SECOND SWITCH DISAGREEMENT WAS FOUND AND FIXED IN PASSING.** `salad` fell through to the
   Mains tab while `wkPoolOf()` already portioned it as a side — the two switches held different
   opinions about the same course. `wkCourseToTab("salad") → "sides"` now. It moved 1 record in
   `wk_europe.js` and 1 in `wk_southafrica.js`. ⚖️ **`soup` was checked and deliberately left alone**
   — both switches already agree it is a main, which is right for a bowl of soup as a meal.

### 📊 WHAT THIS CHANGED ON THE SHELVES

| file | Mains | Sides |
|---|---|---|
| `wk_japan.js` | 17 → **11** | 15 → **21** |
| `wk_china.js` | 36 → **32** | 3 → **7** |
| `wk_indonesia.js` | 22 → **18** | 6 → **10** |
| `wk_europe.js` | 277 → **276** | 74 → **75** |
| `wk_southafrica.js` | 68 → **67** | 26 → **27** |

⚖️ **China's Sides shelf more than doubled** (3 → 7), which is the clearest sign the change was
overdue — a fifty-record country was rendering three sides. ✅ **And it incidentally corrects the
Indonesia shelf tilt raised at record 41**: mains drops from 22 to 18 and sides rises from 6 to 10
without a single record being re-authored.

**Gates after the change:** `node --check sections/worldkitchen.js` ✅ · behaviour proved by calling
both switches directly on every course value ✅ · `tinza-doctor` RED **10** (floor, unchanged) ✅ ·
Indonesia `costcheck` 123/123 ✅ · `pricecheck` exact 90, wrong-product 0 ✅.
