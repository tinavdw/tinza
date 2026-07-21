# FABLE PROGRESS · THE CHECKPOINT

**This file is the handoff. A conversation does not survive a cut-off. This does.**

⚠️ **FIRST ACTION OF EVERY SESSION: READ THIS FILE.**
Do not re-derive what is done. Do not start from the top. Start at `NEXT UP`.

**AFTER EVERY SINGLE RECIPE:** write the file → `node --check` → append one line to
`DONE` below → only then begin the next. **A cut-off must cost one recipe, never a session.**

Line format:

```
[x] <dish> · <cuisine> · <n versions> · <file> · <date>
```

---

## DONE

*(nothing yet — first session starts here)*

---

## WHERE FABLE STOPPED LAST TIME — measured from the RAW arrays, 21 Jul

| country | versioned | of | state |
|---|---|---|---|
| **Greece** | 54 | 54 | ✅ complete |
| **Portugal** | 33 | 52 | ⏸ **stopped 19 short — resume here** |
| Austria | 4 | 27 | barely started |
| Cape Malay | 1 | 21 | barely started |

**92 WK dishes · 213 version records.** Only **1** carries a budget fork — the rest
are cultural (white-bean, lobster, lamb, mushroom). ⚠️ **§15.6 — all 213 are binned by
`index.js:446 versions:null`, so no query can see them. That is a code fix, not a
content fix, and it does not block writing more.**

---

## NEXT UP

Always leave three named. If a session is cut off, this is the handoff.

1. **Snoektert** — NOT in the library. Write it with the **budget pilchard-tart fork**.
   Self-contained. Proves the checkpoint contract.
2. **Maasbanker curry** — NOT in the library. The cheap fork for Snoek Curry (R34).
3. **Beesstert (Oxtail Stew)** — world · boerekos, R43. ✅ no duplicate, priced.

**SAFE LIST after that** — no duplicate, priced:
Pickled Fish R33 · Snoek Curry R34 · Chicken Breyani R23 ·
Durban Chicken Curry R24 · Durban Mutton Curry R34 · Durban Fish Curry R40

**IF TINA REDIRECTS:** **India** (49 dishes · 48 priced · 28 mains · 0 versioned —
Pesarattu R3 · Idli R7 · Misal Pav R9) or **Indian/Durban** (20 · 19 priced · 9 mains
— Durban Roti R3 · Dhal Curry R7 · Chilli Bites R8, and it is SA food, §5.1).
⚠️ `india` and `indian` are TWO cuisines, correctly separated. Not a tagging mess.

**IF TINA REDIRECTS TO EUROPE:** resume at **Portugal, 19 dishes short** — including
**Francesinha** (Porto sandwich), which she named as wanting variations. ⚠️ Lead with
a **budget fork** there; Fable's Portugal versions so far are cultural only.

## BLOCKED — do not start these

- ⛔ **ANY dish that exists in BOTH `meals` and `world`.** The `meals` copy usually
  already carries 3–6 versions; the `world` copy has none. **Authoring onto the world
  copy creates a SECOND versioned record.** Pairs: bobotie · cape malay chicken curry ·
  bunny chow · shepherd's pie · tamatie bredie · waterblommetjiebredie *(cape ×
  boerekos — inside WK)* · braaibroodjies *(boerekos × braai)*. **60 library-wide.**
  ⚖️ §2.3 — Tina rules each pair.
- ⛔ **Unpriced dishes** — price first (Node + `PRICE_DB`), then version.
  Kool Bredie · Tamatie Bredie · Denningvleis · Lamb Breyani · Lamb Biryani ·
  Braaibroodjies · Waterblommetjiebredie · Potjiekos.
- ⛔ **The `goesWith` sweep** — measured: 4,672 entries, only **25% resolve**.
  ⚖️ **§16.1 — three kinds, three fixes. DO NOT "fix" all 3,496.**
  463 non-dish accompaniments *(mustard · beer · tea)* are **CORRECT — keep them**.
  The **560 vague placeholders** *(bread · salad · rice)* are the real debt.
  **Its own session, after the SA versions.**
- ⛔ **Europe version audit** — Tina is doing this herself, card by card.
  ⚠️ **Bifana** [world · portugal] R22 · 0 versions · `goesWith: mustard · beer · chips`
  is her worked example — two correct accompaniments, one placeholder.
- ⛔ **Spain / Greece / Portugal / France authoring** — after SA.
- ⛔ **Italy · China · Japan · Thailand · South America · USA** — 38 countries carry a
  flag and no food. **Scope, not debt.** Tina's call, after October.

## RULES THAT DO NOT BEND

Full brief: `reference/FABLE_SESSION_BRIEF.md`

- One recipe in flight. Never batch. Never "save at the end."
- No refactoring, renaming or tidying. Out of scope is out of scope.
- Every version carries its own `costPP` — without it the Budget room cannot see it (§15.5).
- `goesWith` is a pairing, never a similarity (§16).
- Diet is derived in Node, never hand-written (Law 47).
- No retailer names. Leaveners in grams.
- A fork counts only if people actually cook it. Never pad a rung with stubs (§15.2).
- `node tinza-doctor.js` ≤ 9 · `node tinza-census.js` ≤ 19 before handback.

---

## 🐟 THE FISH FAMILY — banked 21 Jul 2026 *(this note lives HERE, not in a chat — a chat dies at cut-off)*

**Ruled and priced. Nothing here is open.**

- **Yields:** snoek (gutted whole, bone-in) → flakes **52.5%** · maasbanker (whole round) → **42.5%**.
- **The Whole Fish Law** ⚖️ §18 — priced whole → written whole. Ingredient line = **trolley weight**; the method states the flaked yield.
- **Prices in `prices.js` at `e1c4649`:** snoek **R147** *(was wrongly R165)* · snoek fillet **R120** · **smoked snoek R450 — this key was MISSING and four recipes were under-costing by roughly HALF** · maasbanker **R60** · whole mackerel **R60** · tinned mackerel **R92**.
- **Ladder, R/kg of flakes in the bowl:** pilchards R65 · tinned mackerel R92 · maasbanker R141 · braai snoek R314 · smoked snoek R450.
- **makriel** = fresh frozen, **no tin alias**.
- **maasbanker curry** = a **version** of the existing Snoek Curry, only if it earns it.
- ✅ **Korslose Snoek-en-Uietert already exists** — `wk_southafrica:128`, aliases include "Snoek Tart". Needs `costPP` + versions. **Do not author it new.**
- ⚠️ **Open, waiting on Tina:** the Snoek Curry fish quantity, needed to judge the pilchard/maasbanker swap.
- ⚠️ **Own session, not now:** pilchards (65) and tinned mackerel (92) are keyed on **nominal 400g**, not drained (~65%). Both may be ~35% light.
