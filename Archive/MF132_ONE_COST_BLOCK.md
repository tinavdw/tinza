# MF132 · ONE COST BLOCK

**Written** 21 Jul 2026 · Week 2, session 1
**Measured at** HEAD · 2083 recipes · census 16 RED · doctor 9 RED · check 24 4/4 GREEN
**Scope** 21 raw money sites · 6 files · plus 7 unmeasured Spice sites that carry no Rand sign
**Do not touch** `calcMeat` · `PORTION_BRAAI` · `braaiBaseG` — §6.1 is LOCKED

---

## 0 · WHAT THIS BRIEF IS ACTUALLY ABOUT

It was written as sameness work: 21 hand-rolled `R${...}` strings, make them one
renderer. The measurement says something else.

`costLine()` already exists at `core.js:779`. It is the single door for money and it
already does the gate:

```js
var pro = tierAllows('pro');
if(!pro) return head + ' · ' + TINZA_LOCK;
```

So every surface that hand-rolls `R${}` instead of calling `costLine()` is not merely
inconsistent — **it is money rendered outside the gate.** The audit:

| | sites | gated |
|---|---|---|
| braai.js `braaiStep4` | 4 | ⛔ NO |
| budget.js `budgetPlannerHTML` | 6 | ⛔ NO |
| events.js:886 `eventCard` | 1 | ⛔ NO |
| core.js `fmtG` | 2 | ✅ |
| events.js:798 `fmtAmt` | 1 | ✅ via costLine |
| health.js `healthRecipeDetail` / `healthExtDetail` | 3 | ✅ |
| meals.js `fmtAmt` | 4 | ✅ |

**11 of 21 render Rand to a free visitor.**

And the room itself is open:

```
core.js:597   else if(S.screen==="budget"){ content=budgetPlannerHTML(); }
```

"I've Got R100" is a cost tool end to end. It has no entry gate. Free is ruled
NO cost · NO My Plan · NO shopping (TINZA FREE/PAID, LOCKED). Budget is all three.

This is the tierBar shape a second time. tierBar handed a stranger the tier;
this hands him the output. Neither emits an error, a bill, or a missing element —
the screen looks *correct*. ⚖️ **A silent hole needs a mechanical watcher, not a
sharper pair of eyes.**

---

## 1 · THE ⚠️ THAT MUST BE OBEYED

**Do not build the gate list by grepping `R$`.** Spice does not print a Rand sign.
`spiceFmt()` (`spice.js`) returns a bare number or a number + unit — money and grams
come out of the same function and look identical in a grep.

Seven Spice sites are ungated inside `spiceEntryView` / `spiceListView`:

```
spice.js:8147  8152  8169  8187  8196  8203  8303
```

`spice.js:8376` DOES gate (`_isPro`) and `8380` calls `costLine()` correctly — so the
room knows how. The seven above were missed.

**Code must classify each of the seven by hand: is this number MONEY or is it a
QUANTITY?** Grams must not be gated — free users scale recipes (LOCKED: "Free =
browse/view/scale all recipes"). Gating a gram is as much a bug as leaking a Rand.
Report the seven with a verdict each before changing any of them.

---

## 2 · THE SURFACE LIST — gate room by room, not line by line

Work in this order. One room per commit. `node --check` before each.

**A · budget.js — the leak. Do this first.**

✅ **RULED 21 Jul, §2.4: THE ROOM IS PRO. LOCK IT AT `core.js:597`.**
*An earlier draft of this brief said keep the room open and lock only the Rand. That was
argued and rejected — it mapped Budget onto dietary's badge/filter split, and **Budget has
no badge half, it is all filter.** Handing Free the filtered list gives away the whole
answer and withholds only the receipt.*

1. **Gate the ROOM**, not the six lines inside it. One door. ⚖️ Law 6.
   ```
   core.js:597   else if(S.screen==="budget"){ content=budgetPlannerHTML(); }
   ```
2. **Free gets `lockPanel()` carrying an HONEST COUNT** — never a bare lock, never zero:
   *"R100 feeds your family from N recipes — unlock with Pro."* ⚖️ Law 3 · Law 7.
   ⚠️ **N MUST come from the SAME query that builds the paid list.** Two code paths = two
   numbers = the lie Law 3 forbids. One query, one N, then gate the render.
   🔴 Known and accepted: `index.js:483` means N runs against **1551, not 2083**.
   Honest about what Tinza can answer — not what Tinza holds. Do not paper over it.
3. ⛔ **`budgetPeople` and `budgetPlan` are RED LINE (§5). GATING IS NOT CLEARING.**
   A Free visitor who hits the lock and upgrades later finds both intact.
4. **Then** replace the six raw sites with `costLine()`. They now sit behind the room
   gate, so this is sameness work, not a leak fix — but do it, or the next person to
   un-gate the room re-opens six holes instead of one.
5. `budget.js:161` — `${r.time||'?'}` prints a literal question mark. Empty is unknown,
   never a glyph. ⚖️ Law 45. Render nothing, or "—". Same shape at `kiddies.js:320`
   and `meals.js:15951`; fix all three.
6. budget.js is off-palette entirely — 19×`#e0d4b8`, 7×`#1a1208`, 4×`#3a2010`,
   7×`#f5c842`, and census 6 says **NO `sectionHeader()` at all.** Note it, leave it.
   ⚠️ Behind a Pro lock, a Free visitor never sees the unmigrated screen — which lowers
   its urgency but does not close it. Own session.

**B · braai.js `braaiStep4` — 4 sites (279, 309, 313, 327).**
Reached from `braai.js:7`, ungated. Route the cook-total and buy-total through
`costLine()`. The green/gold split survives — green food-cost, gold shop-spend,
LOCKED. **The arithmetic is not yours to touch:** `calcMeat` and `PORTION_BRAAI`
produce the numbers, MF132 only changes who is allowed to see them.

**C · events.js:886 `eventCard` — 1 site.**
`portionBadge`. Classify first: portion badge may be grams, not money. If grams,
leave it and say so.

**D · spice.js — the seven, after §1 classification.**

**E · The already-gated ten** (core `fmtG`, events `fmtAmt`, health ×3, meals ×4).
These are correct on gating and wrong on sameness. Fold them into `costLine()`
last, as pure refactor. If a fold changes a rendered number, STOP — that means a
number was wrong before and Tina rules, not Code.

**F · The bright hex.** `meals.js:16047` `#c8e840` and `16051` `#a0c030` are money
text. LOCKED: food-cost text is `#46530c`, shop-spend text `#876213`; bright
`#c8e840`/`#f5c842` survive only as accent dots. Once these render through
`costLine()` they inherit `var(--green)` and the hex disappears on its own.
The `#f5c842` in *prose* (`meals.js:15785–15893`, `budget.js:206–210`,
`buffet.js` palette arrays) is not money — leave it.

**G · The localhost label.** `core.js:575` — the dev strip reads
"🔧 DEV MODE ON · tap to turn off". On localhost the off-switch cannot fire, because
localhost is unconditionally dev. Ruled behaviour, honest label required: when
`location.hostname` is localhost, print "· localhost" instead of "· tap to turn off".
One ternary. Do not change `tinzaIsDev()`.

**H · `maxMeats` — the last direct reader, and it fails OPEN.**

```js
core.js:757   function maxMeats(){ return USER_TIER==="free"?2:99; }
```

Measured 21 Jul: this is the **only functional line outside `tierLevel()` that reads
`USER_TIER` directly.** Every other gate goes through `tierAllows()`, which fails
CLOSED — `if(typeof USER_TIER === 'undefined') return 0`, unknown lands on Free.

`maxMeats` inverts that. Anything that is not the exact lowercase string `"free"`
returns **99**: `undefined` → 99 · `"Free"` → 99 · a numeric level → 99. The comment
three lines above it at `core.js:765` already says **NEVER `USER_TIER==='pro'`** —
the file states the rule and the next function breaks it.

**Fix:** `return tierAllows('pro') ? 99 : 2;` — one line, and it inherits fail-closed.
⚖️ Law 6 — one door. This belongs in MF132 because it is the same bug class as the
21: tier logic written by hand instead of asked for at the door.

⚠️ Braai is on the **⛔ never touch** list for its *arithmetic*. `maxMeats` is a
**gate**, not arithmetic — `calcMeat` and `PORTION_BRAAI` are untouched by this.
Confirm on live that Free still caps at 2 and Pro still reaches 99 before closing.

---

## 3 · WHAT MUST NOT HAPPEN

- ⛔ Never touch `calcMeat` / `PORTION_BRAAI` / `braaiBaseG`.
- ⛔ Never gate a gram, a serving, a time or a yield. Free scales everything.
- ⛔ Do not "fix" all 21 in one commit. Six files, one room per commit, one push.
- ⛔ Do not re-skin budget.js here.
- ⛔ `node --check` proves a file parses and NOTHING else. ⚖️ Law 1.

---

## 4 · CENSUS CHECK 25 — the watcher this brief must leave behind

Check 24 watches the tier *switch*. It does not watch the *money*. Add check 25:

> **25 · CAN A FREE VISITOR SEE A PRICE?**

Four assertions, each proven by re-introducing the bug before it is trusted:

1. Every screen branch in `core.js` that renders a cost-bearing room is behind
   `tierAllows('pro')` or returns `lockPanel()` — ungate Budget → must go RED.
2. No money string is built outside `costLine()` / `costOneLine()` — restore one
   raw `R${}` → must go RED.
3. `costLine()` has exactly one definition.
4. No quantity is gated — wrap `spiceFmt` grams in the gate → must go RED.

A check that has never been seen to fail is not a watcher. Prove all four.

---

## 5 · ACCEPTANCE — Tina's fingers, ⚖️ Law 2

On `tinza.netlify.app` with **nothing** after the URL, dev OFF, tier Free:

1. Home → Budget → "I've Got R100" → **no Rand anywhere**, lock panel instead.
2. Braai → build a braai to step 4 → **no cook total, no buy total**.
3. Spice → open an entry → grams and quantities **still scale**; money is locked.
4. Any recipe card → time shows a number or nothing, **never `?`**.
5. Flip to Pro on localhost → every number above returns, unchanged.
6. Braai totals on Pro match what they showed before MF132, to the rand.

6 fails = the arithmetic moved. That is a rollback, not a patch.
