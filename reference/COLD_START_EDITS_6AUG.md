# COLD START EDITS — TWO SPENT JOBS SITTING IN A LIVE DOCUMENT

**6 Aug 2026.** Both are the same class as the 6 Aug meta-scar: `reference/VIETNAM_COLD_START.md` is telling the next session to do work that is already finished, or claiming work is finished that is not.

⚖️ **A brief is for a day. A cold start is read first, by everyone, every time.** A stale line in it costs more than a stale line anywhere else in the repo.

---

## EDIT 1 · §8d — STRIKE IT. THE JOB IS DONE.

### FIND

```
### 8d · 🥫 TINNED KEYS — RULED, PARTLY ACTIONED
✅ §38 written. ✅ `water chestnuts` → R275 `est` · `bamboo shoots` → R220 `est`, both Arm 4.
🟡 Corpus never swept for tinned keys. 🟡 One photo of the back of either tin clears both `est` markers. **Bamboo shoots is the weaker number — correct it first.**
```

### REPLACE WITH

```
### 8d · 🥫 TINNED KEYS — ~~PARTLY ACTIONED~~ ⛔ STRUCK 6 Aug 2026. DONE.
✅ §38 written. ✅ **BOTH KEYS ARE TINA-SOURCED AND §38-CORRECT. NO PHOTO IS NEEDED.**

| key | value | basis | applied |
|---|---|---|---|
| `bamboo shoots` | **R136/kg** | R55.99 per 410g can, priced on DRAINED weight | 30 Jul 2026 |
| `water chestnuts` | **R152/kg** | R86 per 567g can, priced on DRAINED weight | 2 Aug 2026 |

⛔ **THE `est` MARKERS AND THE R275 / R220 FIGURES IN THE OLD TEXT WERE NEVER LIVE.** They
were carried forward from a draft and were already superseded in `prices.js` when this file
was rewritten. Anyone reading the old block would have gone looking for a tin to photograph
for a job finished a week earlier. ⚖️ **Kept visible and dated per §2.3 — never silently
rewrite a ruling.**

🟡 **THE ONE PIECE THAT IS STILL OPEN:** the corpus was never swept for OTHER tinned keys
against §38. That is a real job and it is not these two.
```

---

## EDIT 2 · §4 — THE "BANKED" CLAIM WAS HALF TRUE

### FIND

```
### ✅ THE SEVEN ABSENT ITEMS — ASKED ONCE, ANSWERED ONCE, BANKED. 6 Aug 2026.
⛔ **DO NOT ASK ANY OF THESE AGAIN.** `node priceledger.js --ask` now returns 🛑 on every one.
```

### REPLACE WITH

```
### ✅ THE SEVEN ABSENT ITEMS — ASKED ONCE, ANSWERED ONCE, BANKED. 6 Aug 2026.
⛔ **DO NOT ASK ANY OF THESE AGAIN.** `node priceledger.js --ask` now returns 🛑 on every one.

🩸 **CORRECTION, 6 Aug 2026 — "BANKED" WAS HALF TRUE WHEN THIS WAS WRITTEN.**
All five prices went into `prices.js`. **NONE of the five went into `PRICE_LEDGER.json`.**
Only the two NOT-IN-SA rulings (`catfish`, `yard-long beans`) got a ledger entry.
`node priceledger.js --check` was reporting **🔴 5 UNPROVABLE ATTRIBUTIONS** — five figures
wearing her name with nothing behind them — and no session had run it.

⚖️ **THE SESSION THAT WROTE "A PRICE IS NOT RECEIVED UNTIL IT IS IN THE LEDGER" DID NOT
APPLY IT TO ITS OWN FIVE PRICES.** Writing the rule is not the same as running the check.

✅ **FIXED 6 Aug 2026** — all five filed with their bands and their reasoning:
`pandan leaf powder` · `wood ear mushrooms` · `watercress` · `annatto food colouring` · `kingklip`.
`--check` now answers ✅ every Tina-attributed key has a ledger entry.

📌 **ADD `node priceledger.js --check` TO §13, THE CLOSING SEQUENCE.** It is already inside
`tinza-all.js` as `/price`, but nothing in the close list makes anyone LOOK at that block.
```

---

## EDIT 3 · §0 AND §1 — THE COUNT AND THE HASH

⚠️ **`sections/wk_vietnam.js` ON GITHUB HELD 11, NOT 17,** at commit `5355e1d` (6 Aug 13:46).
B4's six records were committed as `reference/vietnam-batch4-FULL.js` — the batch source — but
the **merged lane file was never staged into that commit.**

✅ **RECOVERED** by `node merge.js vietnam reference/vietnam-batch4-FULL.js` → `11 + 6 = 17`,
all six ids and all eighteen costPP values matching this file's §26 table exactly.

⚠️ **HASH DIVERGENCE, UNRESOLVED.** The merge baselined `ASIA_LEDGER.json` to
**`dfe8884353219cf1`**. §26 of this file records the 6 Aug close at **`ea49bcbf21134653`**.
Same 17 ids, same 51 costPPs, different bytes. `merge.js` flagged it on the way in:
*"record COUNT unchanged (11) but content changed since the last merge."*

⚖️ **DO NOT RESOLVE THIS BY PICKING THE PRETTIER NUMBER.** Whichever `wk_vietnam.js` Tina
actually has on her machine is authoritative. Re-baseline from that, with the tool, never by hand.

📌 **THE MECHANICAL TEST, AND IT TAKES ONE LOOK:** open GitHub Desktop on the **Changes** tab
before dragging anything in. If `sections/wk_vietnam.js` is already listed as changed, her
local is ahead of the repo and hers wins. If it is not listed, her local equals the repo and
the recovered merge is the one to push. ⚖️ **The screen never lies.**

---

## EDIT 4 · §7 — A SECOND KNOWN FALSE POSITIVE, RULED BY TINA 6 AUG 2026

Add beneath the gấc entry:

```
- **PANDAN ON `vietnam-che-ba-mau` — CLOSED 6 Aug 2026.** The card states that fresh pandan
  LEAF is not buyable in South Africa, and claimcheck flags it because a KEYED PRODUCT
  overlaps the wording: `pandan leaf powder` R2900. ⚖️ **THAT FLAG IS A FALSE POSITIVE AND
  IS PERMANENT.** Leaf and powder are two different products, `prices.js` says so at the key
  itself — *"⛔ only the POWDER is buyable here — fresh leaf is not keyed"* — and the card
  uses the powder exactly as the price file instructs. ✅ **Tina's call 6 Aug: agreed, mark
  it known.** ⛔ Do not re-open, do not reword the card to dodge the flag, and do not
  "fix" it by claiming the leaf is available.
```

⚖️ **THE RUNG THIS SUGGESTS, NOT YET BUILT:** `claimcheck.js` has **no suppression mechanism
at all** — no whitelist, no allowlist, no known-false-positive list. Both rulings therefore
live only in this document, where a script cannot see them, which means every future session
re-derives them by hand or re-litigates them.

⛔ **DO NOT BUILD IT MID-LANE.** When it is built: a dated, reasoned entry keyed on
`record + field`, printed by the tool as **KNOWN, RULED** rather than silently dropped —
because a suppression list that hides things is a worse tool than one that over-reports.

---

## EDIT 5 · §8e — CLOSED 6 Aug 2026, AND IT WAS NOT WHAT THE TABLE SAID

✅ **Tina ruled: "lets clear it."** Done. But the §8e table was wrong in three ways and the
replacement text must say so.

### FIND the whole of §8e and REPLACE its header and table with

```
### 8e · ✅ ~~20 STALE `costPP`~~ — CLEARED 6 Aug 2026. THE TABLE WAS WRONG THREE WAYS.

**52 rows re-derived off the engine in total** — 39 in the §8e sweep, 13 more after the
`black cardamom` price moved. ⚖️ §30.1 throughout: derived, never authored.

⚠️ **1 · FOUR OF THE TWENTY HAD NO `costPP` AT ALL.** `tunisia-mloukhia`,
`boerekos-boerewors-homemade`, `india-chicken-chettinad` and `pakistan-chapli-kebab` are
FLAT records — no versions, no cost field. The table's "R36 → R33" described a number that
is not in the file. Nothing to correct, and nothing was.

⚠️ **2 · SIX ROWS WERE NEVER A COSTING PROBLEM.** They costed against ABSENT keys, so their
stored figure was a hand-authored guess that had never been checked by anything. Two were
genuine missing prices (`dried tangerine peel`, `lotus root`, both now keyed). **The other
four were §7 INGREDIENT-STANDARD VIOLATIONS** — prep, counts, units and an "or" welded into
product names so they could never resolve:
`black cardamom pods, cracked` · `2 litres beef or chicken stock` · `leafy greens` ·
`free-range chicken, about 1.6kg, chopped through the bone into 5cm pieces` ·
`dried tangerine peel pieces` · `extra sichuan pepper`. ✅ All six lines rewritten 6 Aug.

⚠️ **3 · THE DRIFT WAS NOT R1–R3.** That was true only of the rows that already resolved.
Once the six broken lines were fixed, the real gaps appeared: `china-staple-master-stock`
R15 → **R141**, `china-da-pan-ji` R62 → **R371**. ⚖️ Both confirmed by SIBLING versions that
already scored ✅ on whole-batch amounts (master-stock v1 R129, da-pan-ji v1 R275).
```

### THEN ADD, as a new open item

```
### 8j · 🔴 `china-chongqing-huo-guo` — HELD FOR TINA, 6 Aug 2026
Its three versions store R32 · R62 · R88 and the engine now reads **R616 · R914 · R1116**.
⚖️ The engine is not wrong. The record carries WHOLE-POT quantities — 500g beef sirloin,
300g lamb, 2 litres of stock, 200g beef tallow — while declaring `servings: 1`.
⛔ **NOT WRITTEN.** Unlike master-stock and da-pan-ji it has NO ✅ sibling to calibrate
against, and a nineteen-fold move onto a live card is a judgement call, not a derivation.
▶️ **Two honest routes, and it is her call which:** rewrite the quantities to per-serving
(a content job in a closed lane), or accept the whole-pot convention and write the engine's
numbers as master-stock and da-pan-ji already do.

### 8k · 🟠 `costcheck` IS BLIND TO EVERY FLAT RECORD — 293 OF THEM
MF153 widened the country map 6 Aug. That surfaced the bigger hole: **the tool scores
VERSIONS only.** `wk_africa.js` (190 records) and `wk_world.js` (103) are entirely flat, so
they have never been cost-checked by anything, ever. `wk_southafrica.js` is 108 flat of 131.
🆕 `wk_europe.js` now reports **148 🔴 of 397** — pre-existing, untouched, unexamined.
⛔ Do not attack this in a content session.
```

---

## EDIT 6 · §3 — A NEW RULING: "CHICKEN IS CHICKEN" (Tina, 6 Aug 2026)

Add to the rulings carried in:

```
- ⭐ **"CHICKEN IS CHICKEN" — A DESCRIPTIVE ADJECTIVE IS NOT A NEW PRODUCT.** *(Tina, 6 Aug 2026)*
  free-range · organic · corn-fed · village · heritage — none of these earn their own
  `PRICE_DB` key. They resolve to the base product through `PRICE_ALIAS` in `core.js`.
  ⛔ **THIS WAS A REAL FAILURE.** `china-da-pan-ji` v3 wrote *"1 free-range chicken, about
  1.6kg, chopped through the bone into 5cm pieces"*, resolved to NOTHING, and sat at a
  stored R62 against a true R371 — reported as ⬜ UNSCOREABLE, which no gate counts as a
  failure. Nine aliases were added 6 Aug and every one is proven to resolve.
  ⚠️ **THE CONSEQUENCE IS NAMED, NOT HIDDEN:** free-range costs more on the shelf than the
  key it now resolves to, so the app UNDER-bills whoever buys it — the wrong direction of
  error under §30.5. Accepted because a name that resolves slightly low beats an ABSENT
  name that renders R0 and is invisible. **The proper fix is a price from Tina, not a guess.**
  ⚠️ The lookup normalises hyphens to spaces, so BOTH forms must be written into the map.
  A dead alias is worse than no alias.
```

---

## EDIT 7 · §8 — CORRECTING WHAT I TOLD HER ABOUT `wk_europe`

🩸 **I reported "wk_europe now shows 148 🔴 of 397" without splitting it, and Tina read it —
reasonably — as prices she had given going missing again.** It is not that, and the
un-split number was the kind of half-sentence this project keeps paying for.

✅ **THE REVERSE LEDGER CHECK WAS RUN 6 Aug AND IS THE PROOF: 149 of 149 priced ledger
entries are still in `prices.js`, at exactly her number. ZERO missing. ZERO changed.**
📌 **This check should be a permanent mode.** `--check` proves every price in `prices.js`
has a ledger entry. It does NOT prove the reverse — that every price she gave is still
there. Only the reverse direction can catch a price that goes missing.

**What the Europe numbers actually are, split:**

| | count | what it needs |
|---|---|---|
| resolved fine, stored `costPP` just old | **149** | ⚙️ mechanical re-derivation · **NO PRICES NEEDED** |
| carried an ABSENT key | **67** | mostly a NAME fix, see below |
| within band | 181 | nothing |

⚖️ **AND MOST OF THE 67 ARE SPELLING, NOT MISSING MONEY:**
`clove` ×8 → **`cloves` R1022 is keyed** · `orange` ×4 → **`oranges` R15 is keyed** ·
`sprig rosemary` ×3 → **`rosemary` R650 is keyed** · `thyme sprig` ×2 → **`thyme` R650 is keyed** ·
`vine leaves` ×2 → **`vine leaves` R61 is keyed**.
A singular where the key is plural, or a unit word welded onto the front.

**Genuinely unkeyed and therefore a real ask:** `lard` · `poppy seeds` · `cannellini beans` ·
`presunto` · `Maria biscuits` · `graviera or kefalotyri` (which carries an "or" and could
never have resolved regardless).

⛔ **DO NOT OPEN THIS AS A PRICE SESSION.** It is a name-matching sweep with six real gaps
at the end of it.

---

## EDIT 8 · §3 — "CHICKEN IS CHICKEN", THE REASON AND THE LIMIT (Tina, 6 Aug 2026)

Extend the EDIT 6 ruling with her reasoning and, more importantly, its **scope**:

```
  ⚖️ **HER REASON, IN HER WORDS:** *"free range chicken is a personal choice."*
     A shopper's choice is not a product line, and PRICE_DB exists to price products.

  ⛔ **THE RULING IS ABOUT PRICING AND NOTHING ELSE.** It does NOT claim every bird cooks
     the same. SIX cards were checked on 6 Aug and every one of them is making a CULINARY
     argument, not a welfare one — `sotho-lekakarane` (road runner), `xhosa-isityu-senkukhu`
     (a hard-body wants 30–40 min longer), `indonesia-ayam-goreng-kalasan` (ayam kampung is
     lean and muscular and will not go tender in a pan), `china-da-pan-ji` (slower-grown meat
     carries more connective tissue). ✅ **ALL SIX STAY. Nothing needed changing.**

  ⛔ **TINZA TAKES NO POSITION ON FARMING ETHICS ON A CARD, IN EITHER DIRECTION.** Tina holds
     a view and stated it; it lives here, in governance, and never in prose a shopper reads.
     ⚖️ Same instinct as the no-retailer-names law — **the app does not make a personal choice
     on somebody else's behalf.** A card that argued free-range is worth it, or that it is
     not, would be doing exactly that.

  ⚠️ **THE COST CONSEQUENCE, RESTATED BECAUSE IT IS THE PRICE OF THIS RULING:** a free-range
     or ayam kampung bird costs more on the shelf than the key it now resolves to, so the app
     UNDER-bills whoever buys one — the wrong direction of error under §30.5. Accepted, because
     a name that resolves slightly low beats an ABSENT name that renders R0 and fires no gate.
     `china-da-pan-ji` v3 sat at R62 against a true R371 for weeks on exactly that fault.
```
