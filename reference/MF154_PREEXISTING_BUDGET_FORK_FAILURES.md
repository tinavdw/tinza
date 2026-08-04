# MF154 — THE PRE-EXISTING BUDGET FORKS THAT FAIL A3

> **Raised:** 4 Aug 2026, out of the mushrooms R140 re-price.
> **Status:** QUEUED. ⛔ **None of these were caused by the mushroom change.**

---

## 1 · STOP-CONDITION — READ FIRST, AND IT MAY END THE TASK

```bash
node claimcheck.js china ; node claimcheck.js japan ; node claimcheck.js southafrica
```

**If the 🔴 CONTRADICTIONS block is empty in all three, THIS IS DONE. SAY SO AND STOP.**

---

## 2 · THE RULE, AND THE COMPARATOR

⚖️ **§37 / A3 — a version labelled `Budget` must come in UNDER THE DEFAULT VERSION.**
⛔ **Not under its cheapest sibling.** See **§37.1** (ruled 4 Aug 2026).

🩸 **THIS FILE WAS FIRST WRITTEN WITH THE WRONG BASIS AND IS CORRECTED HERE.** The first draft
listed **27** failures measured against the **engine** cost. `claimcheck.js` — the only
implementation of A3 — scores the **authored `costPP`**, and reports **12**. They are not the
same twelve. Where a `costPP` is stale the two bases disagree, and **A3 is judged on what the
card says**, because that is what the reader sees.

⛔ **DO NOT hand-roll this test. Run `claimcheck.js` and read its 🔴 block.**

---

## 3 · THE 12, AS `claimcheck.js` REPORTS THEM — 4 AUG 2026

### china — 5
| record | version | budget | default | default is |
|---|---|---|---|---|
| china-cong-you-bing | Folded Shortcut (Budget · Fast) | R26 | R26 | Classic Coiled |
| china-staple-master-stock | Starter Batch (Budget) | **R129** | R15 | Classic Lu Shui |
| china-da-pan-ji | Chicken Pieces & Dried Noodles (Budget) | R280 | R261 | Classic Da Pan Ji |
| china-staple-suan-cai | Quick Shredded Jar (Budget) | R32 | R9 | Classic Whole-Head Suan Cai |
| china-wuxi-pai-gu | Rib Tips & Trimmings (Budget) | R66 | R64 | Classic Wuxi Pai Gu |

### japan — 6
| record | version | budget | default | default is |
|---|---|---|---|---|
| japan-staple-dashi | Kombu & Shiitake (Budget · Vegan) | R18 | R15 | Classic Ichiban Dashi |
| japan-shoyu-ramen | Shiitake & Kombu Shoyu (Budget · Vegan) | R144 | R113 | Classic Tokyo Shoyu |
| japan-oyakodon | Mushroom & Tofu Oyakodon (Budget · Vegetarian) | R70 | R48 | Classic Oyakodon |
| japan-chawanmushi | Mushroom & Spring Onion (Budget · Vegan) | R31 | R28 | Classic Chawanmushi |
| japan-nikujaga | Butajaga — Pork, the Eastern Version (Budget) | R54 | R52 | Classic Nikujaga |
| japan-chikuzenni | Vegan Chikuzenni — Mushroom Instead of Chicken (Budget · Vegan) | R60 | R47 | Classic Chikuzenni |

### southafrica — 1
| record | version | budget | default | default is |
|---|---|---|---|---|
| indian-dhal-curry | Dhal en Rys in Een Pot (One-Pot with Rice, Budget) | R8 | R6 | Klassieke Masoor Dhal |

⚠️ **`wk_europe.js` IS NOT COVERED BY `claimcheck.js`.** Two Budget forks there fail on engine
cost (`spain-pimientos-de-padron` R15 vs R15, `portugal-leitao` R32 vs R8) and **no watcher can
see them.** See **MF153**.

---

## 4 · THESE ARE NOT ONE BUG. SORT BEFORE FIXING.

⛔ **DO NOT strike `Budget` off all twelve.** They fail for three different reasons:

1. **TIES.** `china-cong-you-bing` R26 vs R26. Not dearer — *equal*. Either A3 wants `<=` and
   this is fine, or the fork earns nothing and should go. **A ruling for Tina, not a code fix.**
2. **THE NUMBER IS NOT CREDIBLE.** `china-staple-master-stock` Budget at **R129** against a R15
   default is not a pricing opinion, it is a broken record. ⚖️ **Check for ABSENT KEYS FIRST** —
   a missing price silently becomes a LOW cost and a wrong one silently becomes a mad one.
   `china-chongqing-huo-guo` sits in the same file at R539 for a "Budget" pot with 5 absent keys.
3. **GENUINELY DEARER.** A "budget" swap that costs more — shiitake for dashi, mushroom for
   chicken. Either the label comes off, or the swap is re-thought. ⚖️ §37: that is a **diet**
   fork wearing a cost label.

## 5 · THE RED LINES

- ⛔ **DO NOT** touch `thailand-khao-tom` or `thailand-nam-prik-ong`. Both had `Budget` struck
  on 4 Aug 2026 as part of the mushroom MF. **They are CLOSED.**
- ⛔ **DO NOT** fix these by moving `costPP`. ⚖️ §30.1 — `costPP` is DERIVED. If the number is
  wrong then the INGREDIENTS or the PRICE are wrong, never the figure.
- ⛔ Category 2 is an ABSENT-KEY problem and belongs with `pricecheck.js`, not here.

## 6 · THE PROOF

`node claimcheck.js <lane>` — the 🔴 CONTRADICTIONS block shrinks, and every row that leaves it
left because **the card changed**, not because the comparator moved. ⚖️ §37.1.
