# MF156 — DELETE `chili` R70 · AND THE MISSING `## 3` HEADER IN RULINGS

> **Raised:** 4 Aug 2026, out of the second chilli price round.
> **Status:** QUEUED. Two unrelated items, both small, both filed rather than done.

---

## PART A · DELETE `chili` R70

### A1 · STOP-CONDITION

```bash
grep -n '"chili":' sections/prices.js
```
**If that returns nothing, PART A IS DONE. SAY SO AND STOP.**

### A2 · THE FINDING — ZERO USES, CONFIRMED 4 AUG 2026

`sections/prices.js` carries `"chili": 70,   // per kg` — the US spelling, alongside
`"chilli": 80`. **It is dead and it is blocking a live alias.**

Measured across all 12 lanes on 4 Aug 2026:

| probe | result |
|---|---|
| ingredient lines resolving to key `chili` | **0** |
| ingredient lines whose cleaned name is `chili` | **0** |
| raw `Ng chili` text anywhere in `sections/` | **0** |

⚖️ **It was blocked on nothing. It is now confirmed dead on the evidence, not on a hunch.**

### A3 · WHY IT MATTERS EVEN THOUGH NOTHING USES IT

`WK_ALIAS["chili"] = "chilli"` was added 4 Aug and **is inert**: `wkPriceLookup` runs the
exact-key rung BEFORE the alias rung, so while `"chili": 70` exists the alias can never fire.
The day someone writes "5g chili" on a card it prices at **R70**, not R80 — a silent 12.5%
under, from a key nobody remembers.

⚠️ **AND THE TWO NUMBERS DISAGREE.** R70 vs R80 for the same product. Same shape as the
`mushroom`/`mushrooms` pair closed on 4 Aug and the `chilli flakes`/`chili flakes` pair below.

### A4 · THE EXACT CHANGE

Delete the single line `"chili": 70,` from `sections/prices.js` (~line 410).
**Keep `WK_ALIAS["chili"] = "chilli"`** — deleting the key is what switches the alias ON, and the
alias is what stops a US spelling silently falling through to a §3j substring match.

### A5 · THE RED LINES

- ⛔ **DO NOT also delete `chili flakes` R700.** It is NOT dead — it is one half of a resolved
  collision (both `chilli flakes` and `chili flakes` deliberately carry R700, ruled 4 Aug, neither
  deleted). ⚖️ Different key, different decision.
- ⛔ **DO NOT delete `chilli` R80.**
- ⚠️ Re-run the zero-use probe before deleting. A card written between this MF and the fix would
  make the deletion a live price change rather than a cleanup.

### A6 · THE PROOF
```bash
node pricecheck.js china
```
Then resolve `chili` and confirm it returns `chilli` R80 via the alias rather than R70 or null.

---

## PART B · `TINZA_RULINGS.md` HAS NO `## 3` SECTION FOR THE PRICE-KEY CLAUSES

### B1 · STOP-CONDITION

Open `TINZA_RULINGS.md` and search for a heading that houses `§3j`.
**If one exists, PART B IS DONE. SAY SO AND STOP.**

### B2 · THE FINDING

The PRICE-KEY §3 family is cited across the repo and **has no home section in `TINZA_RULINGS.md`**:

| clause | what it says | where it is defined |
|---|---|---|
| `§3j` | substring fallthrough — the longest-key-anywhere last resort | ⛔ **nowhere** |
| `§3l` | wide price band — when a range is too wide to take the top | ⛔ **nowhere** |
| `§3m` | a `_each` price is DERIVED as weight x per-kg | ✅ appended 4 Aug 2026 |

🩸 **`## 3` IN THAT FILE IS "TINZA CHEF (the AI)".** So a session that reads "§3j" and jumps to
§3 lands on the wrong subject entirely — and §3j is cited in `prices.js`, in the mushroom ledger
rows, and in the Vietnam cold start. **A pointer that resolves to the wrong page is worse than a
missing one**, because it looks answered.

### B3 · THE EXACT CHANGE — ⚖️ TINA'S CALL ON WHICH

**Option 1 (least disruptive):** add a `## ⚖️ 3-PRICE · THE PRICE-KEY LADDER` section that houses
§3j and §3l as written clauses, and cross-links §3m where it already sits. Nothing is renumbered.

**Option 2 (cleanest, most disruptive):** renumber the price-key family off `3` entirely so it
stops colliding with §3 Chef. ⛔ Touches every citation in `prices.js`, the ledger and two cold
starts — **do not attempt without her word.**

⛔ **DO NOT renumber `## 3` TINZA CHEF.** It is cited too.

### B4 · WHAT §3j AND §3l ACTUALLY MEAN — capture before it is lost

Written here so the clauses can be transcribed rather than reinvented:

- **§3j — SUBSTRING FALLTHROUGH.** The last rung of `wkPriceLookup` matches the longest PRICE_DB
  key appearing as a whole word anywhere in the name. It is why `chilli powder` priced as fresh
  `chilli` R80 and `broken rice` priced as `rice` R27. **It resolves something, so it never looks
  like a failure.** Measured live on 4 Aug: 77 chilli lines were resolving this way.
- **§3l — THE WIDE BAND.** When a sourced range is unusually wide, taking the top per the
  most-expensive rule may be wrong, and the reason for the spread must be examined before
  choosing. Applied 4 Aug to `chilli powder`: a 45g bottle at R733/kg against loose 1kg at
  R130-R150 is a **packaging premium, not a price range**, so the bulk end was taken deliberately.

### B5 · THE PROOF
A session can search `§3j` in `TINZA_RULINGS.md` and land on a clause that explains it.
