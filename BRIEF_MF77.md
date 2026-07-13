# BRIEF · MF77 — "4 Ingredients" searches forever
**File:** `sections/meals.js` · **One commit** · **Commit name:** `MF77: 4 Ingredients — the finder reads the index`

---

## 🛑 STOP-CONDITION (read this before you write anything) ⚖️ Law 35

Read `meals.js` lines **15551–15582** first.

**If any of the following is already true — SAY SO AND STOP. Do not write code.**
- `findFourIngredients()` already calls the global `allRecipes(...)`
- It already matches on the ingredients field rather than `JSON.stringify(r)`
- It already uses a match floor above 2

**Step 1 is READ, and it is allowed to end the task.**

---

## THE BUG — reproduced, not guessed

`meals.js:15568`
```js
...(WK_RECIPES||[]).filter(r=>r.ingredients),
```

**`WK_RECIPES` does not exist.** Anywhere. It is the only mention of that name in the repo.
The real arrays are `WK_EUROPE`, `WK_SOUTHAFRICA`, `WK_WORLD`, `WK_FRANCE`, `WK_EUROPE_GERMANY`, `WK_EUROPE_NIRELAND`.

⚖️ **Law 40 — `|| []` does NOT catch an undeclared name. It only catches `undefined`.
An undeclared identifier throws `ReferenceError`.**

And that line sits **OUTSIDE the `try{}` block**, one line after `setQuiet({_fourLoading:true})`.

So:
1. the spinner turns on
2. the next line **throws**
3. **nothing catches it** — it's an `async` function, so the throw becomes a silently-rejected promise
4. **`_fourLoading` never becomes `false`. She waits forever.**

**Reproduced in Node:**
```
findFourIngredients()   ReferenceError: WK_RECIPES is not defined
S._fourLoading is now: true          ← the eternal spinner
```

---

## ⚠️ THE TRAP — READ THIS TWICE

`meals.js:15564` declares:
```js
const allRecipes = [ ... ];      // ← a LOCAL const
```

**This SHADOWS the global function `allRecipes()`** (defined in `index.js:473`).

**You must rename the local.** If you leave it named `allRecipes`, the global is unreachable
inside this function and your fix will not work.

*(The same shadow exists at `meals.js:15654` in `findAnchorIngredient`. **Do not touch it in this
commit.** ⚖️ Law 5 — one thing per commit.)*

---

## THE FIX — three changes, one job: **the finder reads the real index**

Replace the block at **15563–15580** with:

```js
  // MF77 — the finder reads the ONE index. No second corpus. ⚖️ Law 6.
  // mealRole is the finder switch (index.js:83). It already excludes
  // pet / baby / condiment / drink / bake / basic — the dog food excludes itself.
  const pool = (typeof allRecipes === 'function')
    ? (allRecipes({ mealRole: ['main','side'] }) || [])
    : [];

  // MF85 — 13 recipes keep their food inside versions[] and leave the top-level
  // ingredients array EMPTY. Read both, or Creamy Mac & Cheese can never be found.
  const ingredientText = (r) => {
    const names = (list) => (Array.isArray(list) ? list : [])
      .map(x => typeof x === 'string' ? x : (x && (x.n || x.name) || ''))
      .join(' ');
    return (names(r.ingredients) + ' ' +
            (r.versions || []).map(v => names(v.ingredients)).join(' ')).toLowerCase();
  };

  // ⚖️ LAW 41 — A MATCH OF 2-OF-4 IS NOT A MATCH. IT IS A COINCIDENCE.
  // Measured 13 Jul: at 2-of-4, mince+potato+onion+tomato returns a GREEK SALAD (214 hits).
  // At 3-of-4 it returns Cottage Pie, Shepherd's Pie, Moussaka. The threshold IS the feature.
  // 2 in → 2 of 2 · 3 in → 3 of 3 · 4 in → 3 of 4.
  const need = Math.min(ing.length, 3);

  const ingLower = ing.map(i => i.toLowerCase());
  const dbMatches = [];
  pool.forEach(r => {
    const hay = ingredientText(r);            // ingredients ONLY — never the trivia or chefNotes
    const matched = ingLower.filter(i => hay.includes(i));
    if (matched.length >= need) {
      dbMatches.push({ ...r, _matchCount: matched.length, _matched: matched, _source: 'db' });
    }
  });
  dbMatches.sort((a, b) => b._matchCount - a._matchCount);
```

**Everything below line 15580 (the Tinza Chef call, the try/catch, the combine) stays byte-identical
in this commit.** Do not touch it.

---

## ❌ WHAT THIS COMMIT DOES **NOT** DO

Leave these alone. They are **MF77-B**, a separate commit:
- the `dbMatches.slice(0, 2)` cap *(she sees only 2 of the matches — ⚖️ Law 36)*
- making the AI run in **parallel** instead of blocking *(copy `callMoodChef()` in core.js — it already
  does exactly this: show the DB instantly, fire the AI in the background, `draw()` silently when it lands)*
- gating the AI to `tierLevel() >= 1` *(Pro only — ruled 13 Jul)*
- the loud Free-tier message

⚖️ **Law 5 — ONE THING PER COMMIT.**

---

## PROOF — none of this is closed without all three

1. **`node tinza-doctor.js`**
   → check 4 must go from
   `✘ Functions that FALL OVER when called  1 of 68`
   to
   `✔ Every function survives being called`

2. **`node --check sections/meals.js`**

3. 👁️ **Tina's finger, on her own tablet, on live, after a hard reload** ⚖️ **Law 2 + Law 27**

   | She types | She must get |
   |---|---|
   | `mince · potato · onion · tomato` | **Cottage Pie · Shepherd's Pie · Moussaka** — and **NO Greek Salad** |
   | `chicken · onion · cheese · cream` | **Butter Chicken · Chicken à la King · Chicken Tikka Masala** |
   | `lettuce · tomato · cucumber · feta` | **Greek Salad · Garden Green Salad** |
   | anything | **the spinner STOPS** |

---

## THE NUMBERS THIS BRIEF IS BUILT ON (measured 13 Jul, in Node, on the real index)

| pool `main`+`side` | **1029 recipes** |
|---|---|
| `mince+potato+onion+tomato` @ 2-of-4 | **214** — Greek Salad, Panzanella, avo salad 💀 |
| same @ **3-of-4** | **61** — Cottage Pie, Shepherd's Pie, Moussaka 🎯 |
| `chicken+onion+cheese+cream` @ **3-of-4** | **13** — Butter Chicken, Chicken à la King 🎯 |
| `mince+potato+tomato` @ **3-of-3** | **5** 🎯 |
| `chicken+rice` @ **2-of-2** | **24** 🎯 |
| A bowl of rice for `chicken+onion+cheese+cream` | **impossible** — rice alone scores 1 |
