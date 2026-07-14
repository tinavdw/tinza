# BRIEF · MF77-B — Tinza Chef stops blocking, stops lying, stops repeating
**File:** `sections/meals.js` · **ONE commit**
**Commit name:** `MF77-B: Tinza Chef runs in the background and never invents a bobotie`

---

## 🛑 STOP-CONDITION ⚖️ Law 35

Read `findFourIngredients()` (starts ~15551) and `fourIngredientsHTML()` (~15715) FIRST.

**If any of these is already true — SAY SO AND STOP:**
- the AI already runs in the background (no `await` before the DB results are drawn)
- `dbMatches.slice(0, 2)` is already gone
- the AI is already gated on `tierLevel()`

**Step 1 is READ, and it is allowed to end the task.**

---

## WHAT IS WRONG TODAY — three things, all proven on live

### 1 · IT BLOCKS. She waits for the AI before she sees ANYTHING.
The `await fetch(...)` at **15631** sits between her tap and her recipes.
👁️ *Tina, 13 Jul: "It took very long."*

### 2 · IT HIDES 59 OF HER 61 RECIPES.
**`meals.js:15644`** → `const combined = [...dbMatches.slice(0, 2), ...chefRecipes];`
`mince+potato+onion+tomato` finds **61** app recipes. **She was shown 2.**
⚖️ **LAW 36 — THE COUNT IS TRUTH. It never even told her there were 61.**

### 3 · 🩸 IT INVENTS SOUTH AFRICAN FOOD AND SIGNS TINA'S NAME TO IT.
The prompt says *"Generate 4 recipe ideas that use most or all of these ingredients."*
So it **bent a bobotie to fit her fridge.**

👁️ **PROVEN, on her tablet:** a card titled **"Classic Bobotie"** listing **potato 100g** and **tomato 50g**.
**Tinza's real Classic Bobotie has NEITHER.** *(beef mince · bread · milk · eggs · onion · curry powder ·
chutney · raisins · turmeric · oil.)*
It also re-served **Cottage Pie** — a name already sitting in the results above it.

⚖️ **NEW LAW 43 — A MODEL MAY NOT BEND A DISH TO FIT THE FRIDGE.**
> **A BOBOTIE HAS NO POTATO IN IT — NOT EVEN IF SHE HAS A POTATO.**
> ⚖️ **Law 11 — no model authors a price. And no model authors a bobotie.**

---

## THE FIX

### A · THE APP ANSWERS FIRST. INSTANTLY. ⚖️ Law 35 — copy, don't invent.

`core.js:1959` — **`callMoodChef()` already does exactly this.** Copy its shape:

```js
  // ── MF77-B — the app answers first, the chef catches up ─────────────
  // Copied from callMoodChef() (core.js:1959). Show the DB now. Draw. Then fire.
  const cacheKey = ingLower.slice().sort().join('|');

  setQuiet({
    _fourResults : dbMatches,          // ALL of them — never a slice ⚖️ Law 36
    _fourPage    : 5,                  // show 5, "show more" adds 5
    _fourLoading : false,              // ← THE SPINNER IS OFF. She is already reading.
    _fourError   : dbMatches.length ? null : null,
    _fourAI      : null,
    _fourAILoading : false
  });
  draw();

  // Tinza Chef only wakes up when the app is THIN — and only for Pro. (Tina, 13 Jul.)
  if (dbMatches.length < 10 && typeof tierLevel === 'function' && tierLevel() >= 1) {
    startFourAIFetch(ing, dbMatches, cacheKey);   // fire and FORGET. No await.
  }
```

**Everything from `try {` (15598) to the closing `}` of the catch (15650) moves OUT of
`findFourIngredients` and INTO a new function below it.**

### B · THE NEW BACKGROUND FUNCTION

```js
// ── MF77-B — Tinza Chef, in the background. Never blocks. ───────────────
const _fourCache = {};   // same fridge → never a second API call (⚖️ Law 20)

async function startFourAIFetch(ing, dbMatches, cacheKey){
  if (S._fourAILoading || S._fourAI) return;                 // already running / done
  if (_fourCache[cacheKey]) {                                // free, instant
    setQuiet({ _fourAI: _fourCache[cacheKey] }); draw(); return;
  }
  setQuiet({ _fourAILoading: true }); draw();

  // The names the app already gave her. The chef may NEVER repeat one.
  const taken = dbMatches.map(r => r.name).join(', ');

  const prompt = `You are Tinza Chef, a South African recipe assistant.
The cook has: ${ing.join(', ')}.

Suggest 4 REAL, EXISTING dishes that genuinely use these ingredients.

ABSOLUTE RULES — breaking any one of these is a failure:
1. NEVER alter a traditional dish to fit the ingredients. A bobotie has no potato in it.
   If a classic dish does not truly use these ingredients, DO NOT suggest it.
2. NEVER use the name of a traditional or named dish (Bobotie, Cottage Pie, Bunny Chow,
   Moussaka, Bredie, Potjiekos...). Give an honest descriptive name instead:
   "Mince & Potato Bake", not "Bobotie".
3. NEVER suggest any of these — the app has already offered them: ${taken || '(none)'}
4. If an ingredient the cook has does not belong in the dish, LEAVE IT OUT and say so
   in "missing" — do not force it in.
5. South African ingredients and shops. Grams and millilitres only.

Return ONLY a JSON array of exactly 4 (no markdown, no backticks):
[{"name":"Honest Descriptive Name","emoji":"single emoji","time":30,"cuisine":"style",
  "uses":["ingredient"],"missing":["what she still needs"],"serves":4,
  "ingredients":[{"n":"name","pp":100,"u":"g","userHas":true}],
  "method":["Step 1","Step 2"],"tip":"One useful tip"}]`;

  try {
    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ model:'claude-sonnet-4-20250514', max_tokens:2000,
        messages:[{ role:'user', content: prompt }] })
    });
    const data  = await resp.json();
    const text  = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    let chef = JSON.parse(clean);
    if (!Array.isArray(chef)) chef = [];

    // BELT AND BRACES — the model was told not to repeat. Enforce it anyway. ⚖️ Law 22.
    const takenLower = dbMatches.map(r => String(r.name).toLowerCase().trim());
    chef = chef.filter(r => r && r.name && !takenLower.includes(String(r.name).toLowerCase().trim()));
    chef.forEach(r => { r._source = 'chef'; r._matchCount = (r.uses||[]).length; });

    _fourCache[cacheKey] = chef;
    setQuiet({ _fourAI: chef, _fourAILoading: false });
    draw();                                      // she never sees it arrive
  } catch (e) {
    setQuiet({ _fourAILoading: false });         // the app results stay. Nothing is lost.
    draw();
  }
}
```

### C · THE RENDER — `fourIngredientsHTML()` (~15715)

**Three changes:**

**1 · The honest count** ⚖️ Law 36 — above the results:
> `61 recipes in Tinza` — or, when the chef also answered: `61 in Tinza · 4 from Tinza Chef`

**2 · Paging.** Render `results.slice(0, S._fourPage || 5)`. Below them, if more remain:
> `Show 5 more (56 left)` → `setQuiet({_fourPage:(S._fourPage||5)+5}); draw();`

**3 · 🚨 THE CHEF GETS HIS OWN ROOM — a badge is not enough.**

⚠️ **This is the whole point of the commit. A grandma does not see a small `In Tinza` pill.
She sees a bobotie with a potato in it.**

**Below ALL the app results, under a hard divider:**

```
────────────────────────────────
🤖  TINZA CHEF'S IDEAS
    Not Tinza recipes — fresh ideas for what you have.
```
Then the chef's cards. **Never mixed in with the app's cards. Not once.**

**If `S._fourAILoading`:** a quiet line under the divider — *"Tinza Chef is thinking…"*
**Never a full-screen spinner. She is already reading.**

**4 · THE FREE USER GETS A PROMISE, NOT SILENCE** ⚖️ Law 3 · (MF45 — *the lock that sells nothing*)

If `tierLevel() < 1`, under the same divider:
> **Pro also asks Tinza Chef to invent fresh ideas from what is in your fridge.**

**Not a padlock. Not "upgrade". An open door.**

---

## ❌ WHAT THIS COMMIT DOES **NOT** TOUCH

- `findAnchorIngredient()` (~15654) — it has the same shadow and the same blocking AI.
  **Leave it. Its own commit.** ⚖️ Law 5.
- `core.js`. **Not one line.**
- `startMoodAIFetch` / `callMoodChef` — **read them, copy them, do not edit them.**
- MF88 (the ingredient brain — `fish` → salmon, `chicken stock` ≠ chicken). **Separate. Later.**

---

## PROOF ⚖️ Law 2 — a report is not proof

1. `node --check sections/meals.js`
2. `node tinza-doctor.js` → **still `✔ Every function survives being called`**
3. 👁️ **Tina, on her own tablet, on live, after a HARD RELOAD:**

| She does | She must see |
|---|---|
| `mince · potato · onion · tomato` | **Recipes appear INSTANTLY. No spinner. No wait.** |
| | **A count that says 61 — not 2.** |
| | **5 cards, and a "show 5 more".** |
| | **NO Tinza Chef section at all** *(61 ≥ 10 — the chef stays asleep, and costs nothing)* |
| `fish · potato · lemon` *(the app has 1)* | **The 1 app recipe, instantly. THEN, a moment later, under<br/>a divider: `🤖 TINZA CHEF'S IDEAS` — and NOT a fake "Fish Bobotie".** |
| Switch to **Free** and repeat | **App recipes still there. Under the divider: the promise. Never silence.** |

---

## THE MEASUREMENTS THIS BRIEF IS BUILT ON *(13 Jul, in Node, on the real index)*

| 28 realistic fridges | median app result = **10** |
|---|---|
| `mince+potato+onion+tomato` | **70** — the chef stays asleep |
| `chicken+onion+cheese+cream` | **17** — asleep |
| `fish+potato+lemon` | **1** — 🤖 **the chef earns his keep** |
| `eggs+cheese+bread` | **2** — 🤖 |
| Threshold `< 10` | the chef fires on **~50%** of searches |
| Cost | **≈ R0.10–R0.30 per call. With the cache, ≈ R1–R3/month per Pro user, against R50.** |
