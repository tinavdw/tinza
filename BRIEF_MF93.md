# BRIEF — MF93 · TINZA CHEF SPEAKS PRICE_DB
**Ruled by Tina, 13 July 2026.** *Tinza Chef writes the method (he is a COOK, not a waiter) — so his cards must carry a Rand cost, like every other card in the app.*

⚖️ **THE PRINCIPLE — read it before anything else:**
> **THE MODEL NAMES THE FOOD. TINA'S DATABASE PRICES IT.**
> **Law 11 says NO MODEL AUTHORS A PRICE. It does NOT say an AI recipe may not BE priced.**
> Those are two different acts. `costRecipe()` does the pricing, using shelf-verified PRICE_DB. **Law 11 stays intact.**

---

## ⛔ STOP-CONDITION — READ FIRST ⚖️ Law 35

Everything needed **already exists in `core.js`.** Confirm it, then wire it. **Build nothing new.**

| Thing | Where | Note |
|---|---|---|
| `costRecipe(items, n)` | `core.js:1204` | returns `{cook, buy, priced, missing:[]}` — **it already tells you what it could NOT price** |
| `priceOf()` / `priceClean()` | `core.js:1121` | the resolver, with aliases |
| `PRICE_DB` | `sections/prices.js` | **780 entries** (731 weight-priced + 49 `_each`) |
| `costLine()` | `core.js:684` | the shared cost renderer |
| `NUTRITION_DB` | `core.js:3506` | ⚠️ **much thinner than PRICE_DB — see COMMIT 3** |

⛔ **If any of these does not exist as described — SAY SO AND STOP.** The brief is wrong.

---

## COMMIT 1 — MF93-A · Teach him to name food the way Tinza buys it

**Commit name:** `MF93-A: Tinza Chef names ingredients the way Tinza buys them`

### The change — `sections/meals.js`, in the chef prompt (~15630)

Add a rule to the ABSOLUTE RULES block. This is **Tina's existing Ingredient Standard**, not a new invention:

> **6. Name every ingredient EXACTLY as it is BOUGHT in a South African supermarket.**
> **"beef mince" — NOT "lean ground beef, browned". "hake" — NOT "firm white fish fillets".**
> **Prep (grated, diced, melted) goes in the METHOD, never in the name.**
> **One ingredient per line. Grams and millilitres only.**

**Nothing else changes in this commit.** No dictionary. No token cost.

### Files changed
`sections/meals.js` — **1**.

---

## COMMIT 2 — MF93-B · Tinza prices his card. All, or nothing.

**Commit name:** `MF93-B: Tinza prices the chef's card — all of it, or none of it`

### In `startFourAIFetch`, after the belt-and-braces filter (~15668)

For each chef recipe, map his fields to what `costRecipe()` expects and cost it:

```js
// The model named the food. TINZA prices it. ⚖️ Law 11 intact.
chef.forEach(function(r){
  var items = (r.ingredients||[]).map(function(i){
    return { name: i.n, qty: i.pp, unit: i.u };
  });
  var c = costRecipe(items, r.serves || 4);

  // ⚖️ LAW 20 — a card that prices SOME of the food is worse than one that prices none.
  if (c.missing.length === 0 && c.priced > 0) {
    r.costPP = Math.round(c.cook / (r.serves || 4));
    r._costTotal = c.cook;
    r._shopSpend = c.buy;
  } else {
    r.costPP = null;                          // NO COST. Not a partial one.
    console.log('MF93 · PRICE_DB miss:', r.name, '→', c.missing.join(' · '));
  }
});
```

### 🏆 THAT `console.log` IS THE POINT. Do not remove it.

⚖️ **Law 36 — the count is truth. MEASURE, don't guess.**

Every miss it prints is **an ingredient PRICE_DB does not know.** After a week of Tina using 4 Ingredients, that log **is her PRICE_DB shopping list, written by the chef himself.**

*(Known misses already found: `preserved lemon`, `white fish`. `saffron`, `dill`, `basmati rice`, `hake`, `beef mince` all resolve fine — PRICE_DB is already good.)*

### 🚨 DO NOT send him the PRICE_DB dictionary. Not yet.

The full vocabulary is **731 names ≈ 2,318 input tokens ≈ R0.13 a call — that roughly DOUBLES the cost per fridge.**

⚖️ **Law 36. MEASURE THE HIT RATE FIRST.** The spot-check says PRICE_DB already speaks supermarket English and he will probably land most of the time on his own. **Paying R0.13 a call to solve a problem nobody has measured is guessing with money.**

**If, and only if, the log shows he misses often → THEN send the dictionary.** That is a separate commit and a separate decision.

### Files changed
`sections/meals.js` — **1**.

---

## COMMIT 3 — ⛔ NOT YET. NUTRITION IS NOT READY.

**Do NOT wire `NUTRITION_DB` onto chef cards in this session.**

🩸 **NUTRITION_DB is far thinner than PRICE_DB.** Its coverage against arbitrary chef ingredients has **never been measured.**

⚖️ **Law 20 applies just as hard: a card that counts SOME of the calories is worse than one that counts none.**

**FIRST: measure NUTRITION_DB coverage.** Then rule. Then wire. **Separate session.**

---

## 💀 WHAT THIS FIXES FOR FREE — MF92

`recipeDetailFromResult` currently asks *"is she Pro?"* **before** it asks *"is there a cost to show?"* — so a Free user tapping a chef idea sees **"💰 Unlock cost with Tinza Pro"** on a card that has **no cost behind the lock, ever.**

✅ **Once MF93-B lands, most chef cards HAVE a cost — the room is no longer empty.**

⚠️ **But it is not fully fixed.** When `missing[]` is non-empty, `costPP` is null and **the empty padlock comes back.** So the MF92 one-liner is still needed:

> **If there is no cost, render NOTHING — not a lock.**

⚖️ **PROPOSED LAW 44 (Tina to rule):**
> **A LOCK MUST HAVE SOMETHING BEHIND IT. NEVER SELL A PADLOCK ON AN EMPTY ROOM.**

---

## 👁️ THE PROOF — ⚖️ Law 2. Her fingers on live.

1. **Hard-reload.** Tier = **PRO**.
2. 4 Ingredients → a fridge **never used before**: `chicken · rice · onion`.
3. App cards appear. Chef cards land under the divider.
4. ✅ **TAP A CHEF CARD → IT SHOWS A RAND FOOD COST**, in the same green as every other Tinza card.
5. 👁️ **OPEN THE BROWSER CONSOLE.** Any `MF93 · PRICE_DB miss:` lines? **Write them down. That is the next PRICE_DB update.**
6. Switch to **FREE** → the cost is locked, **and there is now something real behind the lock.**

## 📌 PUSH
GitHub Desktop. **"1 changed file"** per commit. `sections/meals.js` both times. If the screen says anything else — **stop and read it.**
