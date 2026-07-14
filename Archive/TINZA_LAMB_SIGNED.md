# TINZA — LAMB KEYS, SIGNED · 12 Jul 2026
## Tina's signature. One number per product. Code writes from this file.

**Read `TINZA_MEATCUT_ADDENDUM_buy_names.md` first — it is the law this table obeys.**

> ⚖️ **LAW 16 — A COOK'S RULE IS NOT A SHOPPER'S RULE.**
> **If a key is not something a human can put in a trolley, IT IS NOT A KEY.**

---

## ✅ PROVENANCE MECHANISM — RULED. Code's recommendation is ADOPTED.

**Trailing structured comment. Confirmed.**

```js
"lamb potjiekos": 150,   // src:Shoprite/PnP when:2026-07 conf:shelf range:130-170
```

- **Strict format, always in this order:** `// src:X when:YYYY-MM conf:shelf|online|estimated [range:LO-HI]`
- Zero parser risk. All 768 values stay bare numbers. Nothing in the sweep or the direct reads changes.
- Fully greppable — **this is what Price Studio / MF35 reads.**
- ⛔ **A `PRICE_META` map is REJECTED for now.** Two sources of truth is the disease, not the cure.

### 🆕 MF39 — LOGGED, NOT NOW
When `resolvePrice()` lands and there is **ONE door**, migrate provenance from comments to the object form:
```js
const v = PRICE_DB[k];
const price = (typeof v === 'number') ? v : v.price;
```
**One normaliser, one door, no refactor.** Doing it today means touching three resolvers plus the sweep — that is a refactor inside a bug-fix session. **The comment is INTERIM AND WE ARE SAYING SO.** It is not the endgame; it just doesn't lie.

---

## 🐑 THE SIGNED TABLE

| Product | v20 live | **SIGNED** | Action | conf |
|---|---|---|---|---|
| `lamb potjiekos` | R130 | **R150** | RAISE. Card range **R130–R170**. | shelf |
| `stewing lamb` | → `lamb potjiekos` | **KEEP AS IS** ✅ | already correct — the June fix landed | — |
| `lamb mince` | R200 *(+ dead alias → beef mince R130)* | **R215** | RAISE + **DELETE the beef-mince alias** | online |
| `lamb neck` | R180 | **R170** | LOWER | online |
| `lamb shank` | R190 | **R180** | LOWER | online |
| `lamb knuckles` | R200 | **R200** ✅ | **KEEP.** Mid of the premium band (R169–R235). | online |
| `leg of lamb` | R190 | **R205** | see CALL 1 | online |
| `lamb leg` | R180 | **DELETE THE KEY → ALIAS to `leg of lamb`** | see CALL 1 | — |
| `butterflied leg of lamb` | R190 | **R205** | real buy-name. Keep. Same meat as leg. | online |
| `lamb roast` | R190 | **DELETE THE KEY → ALIAS to `leg of lamb`** | see CALL 4 | — |
| `lamb shoulder chops` | *(named `lamb braai chops` R200)* | **R220** | see CALL 2 | online |
| `lamb braai chops` | R200 | **R195** | see CALL 2 — **it is a real, separate shop product** | shelf |
| `lamb loin chops` | R270 | **R255** | LOWER | online |
| `lamb rib chops` | R260 | **R255** | LOWER — same premium chop band as loin | online |
| `lamb riblets` | *(named `lamb ribs` R170)* | **R205** | see CALL 3 | online |
| `lamb ribs` | R170 | **ALIAS → `lamb riblets`** | see CALL 3 | — |
| `lamb rib` | R220 | **DELETE. FAIL LOUD.** | see CALL 3 | — |
| `lamb rump` | absent | **R310** | ADD | online |
| `mutton` | R180 | **R180** ✅ | KEEP. Separate animal-age. | online |

---

## THE FOUR RECONCILIATION CALLS

### CALL 1 — `lamb leg` vs `leg of lamb`
**One product. Two keys. Coin-toss.**
👉 **`leg of lamb` SURVIVES at R205.**
👉 **`lamb leg` becomes an ALIAS → `leg of lamb`.** **DO NOT DELETE THE KEY OUTRIGHT** — if any recipe line literally says "lamb leg" it would silently fall back. **Alias, don't delete. The resolution survives; the second price dies.**

### CALL 2 — `lamb braai chops` vs `lamb shoulder chops` — **KEEP BOTH. They are two real shop products.**
- **`lamb braai chops` = R195/kg** — the mixed braai pack. This is a **real, named, shelf product** (PnP Bulk Lamb Braai Chops, R194.99/kg). `conf: shelf`. **Do not delete it and do not rename it away.** R200 was unsourced; R195 is the shelf.
- **`lamb shoulder chops` = R220/kg** — the named cut. `conf: online`.
- 👉 **THE BRAAI/GRILL DEFAULT for a recipe that just says "lamb chops" is `lamb shoulder chops` R220.** (Tina's ruling: people prefer them.)
- ⚠️ **BUT DO NOT ALIAS bare `lamb chops` → anything.** That is Law 9 all over again — a context-free alias standing in for a method-dependent rule. **Grep every bare `lamb chops` line and propose from the METHOD. Tina ticks.**

### CALL 3 — THE THREE RIB KEYS. Two are real. One is a trap.
- **`lamb riblets` = R205** — the braai belly-rib product. **`lamb ribs` → ALIAS to it.** (R170 was too low.)
- **`lamb rib chops` = R255** — cutlets off the rack. **A real, distinct, premium product. KEEP.**
- ⛔ **`lamb rib` (bare) = DELETE.** It is genuinely ambiguous — **is it the rack, or is it riblets?** R220 sat between them and split the difference, which is the worst possible answer.
  👉 **REPORT THE COUNT FIRST.** Grep every line using bare `lamb rib`. If **zero** → delete it silently. If **any** → **FAIL LOUD, list them, Tina names them.**
  ⚖️ *Better a loud blank than a confident average. Law 3.*

### CALL 4 — `lamb roast` — **NOT A PRODUCT. IT IS A METHOD.**
**You cannot buy "lamb roast."** You buy a **leg**, or a **shoulder**, and you *roast* it. **That is Law 16 firing on its first day.**
👉 **DELETE the `lamb roast` key. ALIAS `lamb roast` → `leg of lamb`** (per the Guide: roast, whole joint → leg). Nothing blanks.
👉 **AND list every `lamb roast` ingredient line** — each one breaks the INGREDIENT STANDARD and Tina renames it to a real buy-name. **Add these to the MF37 list.**

---

## ✅ ALSO APPROVED THIS CHECKPOINT

**BEAN SPROUTS — Code's plan is correct. Execute it.**
- Bare `"sprouts": 193` (prices.js:682) is the **Brussels** price. **RENAME it `brussels sprouts`.**
- **ADD `bean sprouts` R270.**
- Only ONE real line in the app (Pad Thai, meals.js:14600) — it goes from a wrong **R193** to an exact **R270**.
- `Sprouts or microgreens` (health.js:266) resolves to `microgreens` — unaffected. ✅ *(It is also an MF37 "A or B" line. List it.)*
- 🎯 **This is the whole reason L3 died.** The "money set" was six lines and a rename. **A blanket rule would have nulled correct answers to catch this.**

**BEEF / PORK flattening check — CLEAN ✅.** Good. That was the right thing to check and the right answer to get.

---

## ⚠️ TINA'S ONE REMAINING ACTION
**Confirm Netlify says `Published` on `508cd4c`.** Code cannot see Netlify.
*(The working tree got committed and pushed as `508cd4c "bugs"` — not by Code. That is the back-button + L1 baseline. **Verify it, or Checkpoint 0 is a story, not a fact.** Law 5.)*
