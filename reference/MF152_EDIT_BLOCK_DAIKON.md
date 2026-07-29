# MF152 EDIT BLOCK — `daikon` AND `wasabi` BOTH APPLIED (30 Jul 2026)

⚠️ **A BLOCK, not a rebuilt MF152.** Your local copy may be ahead of origin, and rebuilding the
whole file from HEAD is how three rulings nearly got deleted last time. Two row replacements below.

---

## 1 · REPLACE the `radish` row in **✅ ALREADY IN PRICE_DB — DO NOT ADD**

```
| `radish` | R108 | daikon R45/kg | ⚠️ **NOT the same vegetable** — see ADD list |
```

with

```
| `radish` | R108 | daikon R45/kg | ⚠️ **NOT the same vegetable.** `daikon` R45 is now its own live key — 2.4x apart, never alias either way. Both key strings are 6 chars, so WK_ALIAS settles "daikon radish" above the longest-word rung. |
```

---

## 2 · REPLACE the `daikon` row in **➕ TO ADD — genuinely missing**

```
| `daikon` / `daikon radish` | R45/kg | **45** | Distinct key from `radish` R108 — different vegetable, and the turnip cake uses 900g of it |
```

with

```
| ~~`daikon` / `daikon radish`~~ | R45/kg | **45** | ✅ **APPLIED 30 Jul 2026** — live in `prices.js` as `"daikon": 45` on Tina's instruction, plus WK_ALIAS lines for `daikon radish` / `white radish` / `mooli` / `japanese radish`. Your own sourced figure from the 29 Jul pricing session. Japan absent 40 → **39**. |
```

---

## 3 · REPLACE the `wasabi` row in **➕ GENUINELY NEW**

```
| `wasabi` | Zaru Soba | paste or powder. |
```

with

```
| ~~`wasabi`~~ | Zaru Soba | ✅ **APPLIED 30 Jul 2026 at R1775/kg.** Tina's bracket: tubes R38–104 per 35–45g. Four corners → R844 · R1086 · R2311 · R2971/kg; key is the MIDPOINT of her own range, R71/40g = R1775. ⚠️ The spread is a PRODUCT difference (cheap tubes are horseradish and colour, dear ones carry real wasabi) — one edit moves it to R850 or R2950. Safe as a midpoint because every wasabi line app-wide is 3–5g, so the whole bracket is ~R6 on a card. Must stay a per-kg WEIGHT key; it is written in grams everywhere, never as a tube count. |
```

---

## 🔴 SEPARATE, AND NOT MINE — CHINA HAS 7 LIVE WRONG PRICES IN A PUSHED FILE

Measured while checking that the daikon key broke nothing. **It is pre-existing** — identical 7
before and after my change, verified by stashing the edit and re-running. All seven are the
**note-tail collision**: a key that appears only in the descriptive tail of an ingredient name, so
`wkPriceLookup` prices the tail instead of the ingredient. Per §29.5 a WRONG price is a bug, not a
gap, and A7 does not shelter it — and `wk_china.js` is pushed and wired.

| record | ingredient line | prices as |
|---|---|---|
| `china-dan-tat` | `cream, replacing 60ml of the hot water` | `hot water` R0 |
| `china-duo-jiao-yu-tou` | `fresh red chillies, roughly chopped, plus 30g coarse salt` | `salt` R30 |
| `china-chongqing-huo-guo` | `garlic, whole cloves` | **`cloves` R1022** |
| `china-staple-tofu` | `nigari — or 6g food-grade gypsum, or 30ml lemon juice` | `lemon juice` R56 |
| `china-dan-dan-mian` | `preserved mustard greens, chopped — or 30g chopped pickled cabbage` | `cabbage` R25 |
| `china-*` (2 more) | `rock sugar, or 25g white sugar` and one further line | `white sugar` R35 |

Every one is fixed by moving the tail out of the NAME and into the method — the same fix as the
coarse-salt bug. It is a China lane job, not a Japan one, so it is reported and not touched.
