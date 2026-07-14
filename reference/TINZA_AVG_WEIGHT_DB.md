# TINZA — AVG WEIGHT + BUY-UNIT (simplified model)

Two jobs, kept separate:

1. **AVG WEIGHT** = the costing brain. Lets the engine convert a recipe COUNT
   ("1 tomato", "2 slices ham") ↔ grams, both directions, so anything counted can
   be priced and summed. Stored for everything countable. Weights are SA-typical
   and stable → safe to lock now.
2. **BUY-UNIT** = what goes in the trolley. ONE simple rule:
   - **Default: nearest standard PACKET / bag** (250 g · 500 g · 1 kg · 2 L · loaf ·
     dozen · pack-of-6 — whatever the real pack is). Round the cooking amount up.
   - **EXCEPT the "whole-item" list → each** (below).
   - **Budget section override → per item** (per tomato, per onion…), as set weeks ago.

PRICES here are ESTIMATES → verify at Checkers before live (locked PACK_DB rule).

---

## "WHOLE-ITEM" LIST → bought EACH (LOCKED — the only exceptions to packet-default)
| item | avg weight | est. price/each | pre-cut option? |
|------|-----------|-----------------|-----------------|
| cucumber | 250 g | R25 | no |
| cabbage (whole) | 1 kg | R18 | yes → shredded = packet |
| lettuce (head) | 400 g | R18 | no |
| sweet melon / spanspek | 1.2 kg | R35 | whole-only (note: pre-cut rare) |
| watermelon | 4 kg | R55 | whole-only |
| pineapple | 1 kg | R25 | whole-only |
| butternut | 1 kg | R20 | **yes — show ready-cut note** |
| pumpkin | 2 kg | R30 | **yes — show ready-cut note** |
| broccoli (head) | 350 g | R20 | **yes — show ready-cut note** |
| cauliflower (head) | 600 g | R25 | **yes — show ready-cut note** |
| gem squash | — | packet of 4 ~R22 | (packet default, not each) |

### Whole vs ready-cut rule (LOCKED)
- **Default = whole** (the honest cheap floor — the app's core promise).
- Items flagged above store an OPTIONAL pre-cut price; the shopping list shows a
  small line **"🔪 ready-cut ≈ R{x} more — quicker"** (inverse of the existing
  "💡 buy loose to save" tip). Value buyer sees the low default; convenience buyer
  sees the delta.
- Melon & pineapple: whole-only (pre-cut uncommon for the paying base).
- **Profile toggle "I prefer ready-prepped veg" → PARKED post-launch.**

Catch: **shredded/grated cabbage** (and any pre-prepped form, e.g. grated carrot)
is a SEPARATE ingredient → packet, NOT each.

## AVG WEIGHTS — for count ↔ gram costing (buy by PACKET per the default rule)
| item | avg / unit | typical pack (for trolley) |
|------|-----------|----------------------------|
| tomato | 120 g | 500 g / 1 kg bag |
| onion | 150 g | 1 kg / 2 kg bag |
| green/red pepper | 150 g | 3-pack / loose 500 g |
| carrot | 80 g | 1 kg bag |
| lemon | 100 g | bag of 4–5 |
| lime | 70 g | bag |
| avocado | 200 g | bag of 4 / each |
| banana | 120 g | per kg |
| apple | 150 g | per kg / bag |
| garlic (bulb) | 50 g | net of 3–4 |
| corn / mielie (cob) | 200 g | pack of 4 |
| **PIECE — deli/bakery** | | |
| white bread slice | 30 g | loaf (≈24 slices, 700 g) |
| hamburger roll | 65 g | pack of 6 |
| hot-dog roll | 50 g | pack of 6 |
| vienna | 30 g | pack ≈ 500 g (~16) |
| russian sausage | 90 g | pack of 4 |
| slice of ham | 18 g | pack 100 g (~6) |
| slice of cheese | 20 g | pack 200 g (~10) |
| large tortilla | 60 g | pack of 6 / 8 |
| egg (large) | 58 g | dozen — already counted ✅ |

## STANDARD PACK SIZES (the packet ladder the default rounds up to)
crisps 120 g · chocolate slab 80/100/150 g · fizzy 2 L · juice 1 L / 2 L ·
flour 1 kg / 2.5 kg · sugar 1 kg / 2.5 kg · icing sugar 500 g ·
carrots 1 kg · potatoes 2 kg · yoghurt/sour cream 250 g / 500 g / 1 kg

---

## HOW THE ENGINE USES IT
- Recipe gives **grams** → cost at exact grams (green "what the food costs").
- For the trolley (gold "what you'll spend"):
  - whole-item list → `ceil(grams / avgWeight)` = N each → "N cucumbers".
  - everything else → round grams up to the nearest standard pack → "N × 1kg".
- Recipe gives a **count** ("2 tomatoes") → grams via avg weight → costs + sums
  with everything else; trolley still rounds to the pack (or each, if on the list).
- Budget section: produce shows per item, not packet.

## STILL NEEDED FROM TINA
1. Confirm the whole-item each-list (add/remove? pumpkin? butternut? gem squash?).
2. Sanity-check avg weights.
3. Checkers prices later (weights ship now).
