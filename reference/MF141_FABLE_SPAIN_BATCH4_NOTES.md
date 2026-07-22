# MF141 · FABLE SPAIN BATCH 4 — NOTES FOR CODE (FYI, no work order unless marked)

**Date:** 22 Jul 2026 · **From:** Fable session (Spain batch 4) · **File touched:** `sections/wk_europe.js` only.

---

## What was banked (5 cards, all elevate-in-place, no culls)

| card | versions | costPP |
|---|---|---|
| Cochinillo Asado | Classic · Asado de Aguja (budget) · Sobre Patatas Panaderas | R53 · R27 · R59 |
| Cordero Asado | Classic · Al Horno con Patatas (budget) · Chuletillas al Sarmiento | R72 · R58 · R78 |
| Pollo al Chilindrón | Classic · De Diario (budget) · Cordero al Chilindrón | R60 · R49 · R73 |
| Solomillo al Whisky | Classic · De Aguja (budget) · Con Champiñones | R58 · R46 · R70 |
| Patatas Panaderas | Classic · A lo Pobre (budget) · Con Chorizo | R19 · R14 · R33 |

Spain now **24/59**. Doctor RED 9 ≤ 9 · census clean at handback. `node --check` clean after every card.

## Price gate — ZERO gaps, zero fences added

Every buy-name checked against `prices.js` at HEAD before writing (belly R150 · pork roast R80 ·
leg of lamb R205 · lamb rib chops R255 · lamb potjiekos R150 · chicken R90 · red/green pepper
R100/R50 · ham R140 · whisky R293 · pork fillet R110 · button mushrooms R148 · chorizo R350 ·
stock R8/L · white wine R47). Both alias maps not needed this batch — all direct buy-names.
Second consecutive gap-free Fable batch.

## MF140 delta contract — verified mechanically

Ran a scan over the whole of `wk_europe.js` at handback:
**9 `addStep` blocks in the file, 0 carrying `{item}` · 0 `addIng`/`removeIng` carrying `{text}`.**
The six 22 Jul fixes are holding and the five new cards conform. The census-rung idea from
MF140 still stands as Code's call — this session's scan is manual proof it stays cheap.

## Soft gap (standing, now 2 cards deep) — optional for Code

`smoked paprika` is still absent from PRICE_DB. Paella (batch 3) and now Pollo al Chilindrón
both use buy-name `paprika` with pimentón/choricero declared in prose. If Code ever adds a
`smoked paprika` price, both cards upgrade with a one-word ingredient swap. Not blocking anything.

## Declared stand-ins this batch (prose-honest, no silent swaps)

- Cochinillo: **skin-on pork belly** stands in for the suckling pig — declared in the ingredient
  line and the method's first sentence.
- Chilindrón: **paprika** stands in for dried choricero — declared in the ingredient line.
- No SA place/shop names anywhere (22 Jul global-wording ruling applied throughout).

## Cross-links added (all targets verified present in wk_europe.js by id-grep)

cochinillo ↔ cordero ↔ panaderas triangle (the baker's-oven family) · chilindrón → pisto /
pollo-al-ajillo / cordero · solomillo → huevos-rotos / setas-al-ajillo / pollo-al-ajillo ·
panaderas → tortilla-espanola (the leftover-shortcut link).

## Next three (already named in FABLE_PROGRESS.md)

Patatas con Alioli · Pimientos Asados · Judías Verdes *(⚠️ verify `green beans` price before writing)*.
