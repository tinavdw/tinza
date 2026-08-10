# MF142 · PRICE_DB GAP AUDIT — WORK ORDER FOR CODE  (v2, Tina prices locked)

**Date:** 22 Jul 2026 · **From:** architecture session (Tina) · **Files Code touches:** `sections/prices.js` and `sections/core.js` (PRICE_ALIAS) only.
**Method:** every item checked at HEAD against all three sources — `prices.js` **and** `PRICE_ALIAS` (`core.js:901`) **and** `WK_ALIAS` (`worldkitchen.js:444`). No gap declared on `prices.js` alone (the Pulpo rule).
**v2 change:** ESTIMATEs replaced with Tina's real SA prices. Numbers below are Tina-confirmed unless marked OPEN.

---

## TL;DR
Two flagged gaps were already covered (green beans, vermicelli — no action). Five were real; four now have
confirmed prices and are near-paste-ready. **One number is still open (sherry vinegar).** One item Tina supplied
this morning (cider) is **absent at HEAD** — Code must confirm it actually got committed.

---

## ALREADY COVERED — no action

| item | why | note |
|---|---|---|
| **green beans** | priced **R58** (`prices.js:290`, R35/600g bulk) | Judías Verdes is CLEAR. *Optional refresh:* PnP 350g pack = R29.99 → **R86/kg**. The R58 is a bulk/loose price; leave or refresh, Tina's call — not blocking. |
| **vermicelli** | `"vermicelli":"pasta"` alias (`core.js:1101`) → pasta **R36** | Cocido "fideos absent" was a **false gap**. Buy-name **"vermicelli"** resolves directly; stand-in unnecessary. |

---

## REAL — Code work, ordered by Fable-runway-per-effort

### 1. `cider` (the drink) · ⚠️ IN MF139, NEVER COMMITTED · FENCE-LIFTER
The number already exists — it's in **MF139** (this morning's liquor brief): **dry cider ~R20/330 ml** (Savanna Dry / Hunter's tier, the Asturian-sidra stand-in). Every *other* MF139 key committed — brandy R200, aguardente R499, sour cherries R180, whisky R293, sherry R93 are all at HEAD — but **cider alone slipped the merge** and is absent (only *apple cider vinegar* R99 exists).
**Code:** add it, storing the unit to match how brandy/whisky were stored:
```js
"cider": 61,   // R20/330ml → ~R61/L · dry cider (Savanna Dry) · carried over from MF139
```
Until it's at HEAD, **Chorizo a la Sidra stays fenced.**

### 2. `bacalao` → salted snoek · 🔧 1-line ALIAS · FORK-LIFTER
Spanish spelling has no alias (Portuguese `"bacalhau":"salted snoek"` exists at `core.js:1050`, salted snoek R180). Add the mirror:
```js
// PRICE_ALIAS (core.js), beside the bacalhau line:
"bacalao":"salted snoek",
```
**Tina's framing:** real bacalao IS available in SA, just rare — so **Fable names bacalao (authentic) with salted snoek as the everyday alternative**, declared in prose (Boquerones pattern). Costing rides the snoek price; no new price line needed.
**Unlocks:** the con-bacalao fork of Espinacas con Garbanzos.

### 3. `smoked paprika` · 🔧 1-line PRICE (Tina-confirmed) · honesty upgrade
Not an alias to `paprika` after all — it's **pricier**. Tina: 70g @ R38 → **R543/kg**. Add a dedicated line:
```js
// prices.js:
"smoked paprika": 543,      // R38/70g → R543/kg (Tina, 22 Jul)
```
**Effect:** Paella + Pollo al Chilindrón swap buy-name "paprika" → **"smoked paprika"** (honest; costPP moves ~R0.50/pp, negligible). Fable does the buy-name swap next elevate pass once this lands.

### 4. `morcilla` / blood sausage · 🔧 1 PRICE + 2 aliases (Tina-confirmed)
Absent everywhere. Tina: morcela R175–250/kg (specialty packs ~R295/kg e.g. Bay Meat 300g R88.50). Honest mid:
```js
// prices.js:
"blood sausage": 210,       // morcela R175-250/kg, honest mid (Tina, 22 Jul)
// PRICE_ALIAS (core.js):
"morcilla":"blood sausage",
"morcela":"blood sausage",
```
**Effect:** Cocido Madrileño + Fabada carry morcilla honestly (Fabada currently declares bacon as the stand-in).

### 5. `sherry vinegar` · ⏳ ONE OPEN NUMBER · honesty upgrade
Sherry *wine* R93 is priced; **sherry vinegar is a different product and still absent.** Two ways to close:
```js
// preferred — Tina prices it in prices.js:
"sherry vinegar": <price>,   // OPEN — Tina to supply
// interim — alias to nearest priced vinegar (core.js), lets Salmorejo cost now:
"sherry vinegar":"apple cider vinegar",   // R99
```

---

## ALREADY CLOSED (record)
- **brandy R200 · sour cherries R180 · aguardente R499** — added 22 Jul; Ginjinha unfenced. ✔
- **sherry wine R93** — at HEAD (this morning's entry landed). ✔  *(sherry vinegar is separate — see #5.)*

## GATE STATE (batch-4 wk_europe over HEAD)
`node --check` PASS · **doctor RED 9 ≤ 9** · census: no duplicate keys, 34 files walked, 2083 recipes. Safe to push.

## STILL FENCED AFTER THIS BRIEF
Chorizo a la Sidra — lifts the instant #1 is confirmed at HEAD. Nothing else new.
