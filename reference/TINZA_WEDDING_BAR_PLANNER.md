# Tinza — Wedding Bar Planner (Build Brief)

A catering tool, not a recipe: "I'm doing a wedding for N guests — tick what's on the bar, tell me how many bottles, cases and cans to buy, and what it costs in rand." This is the moat — no rival costs a SA bar in rand.

## Placement & sameness (locked Tinza rules)
- **New standalone under the Events umbrella** — sibling to Beverages / Buffet / Cakes. Its own tickable list, its own My Plan, its own shopping total ("every sub-feature is an equal standalone with its own My Plan").
- **Recommended:** new file `sections/barplanner.js` (keeps `events.js` from bloating), registered through the same `RECIPE_SOURCES` / shared renderers. *Discovery decision for Code: new file vs inside events.js — report which is cleaner given current Events structure.*
- Must match **braai v33** sameness: header, collapsibles, nav spine, My Plan white overlay.
- Use **shared core.js renderers** (plan-row §4c, planView/shoppingView §6.4). **core.js is SACRED** — only add a shared fn with backup + line-count, else don't touch it.
- **Warm Spice palette tokens** (not hardcoded hex). Green = food cost, Gold = shop spend.

## 1 — Consumption engine
- **Duration:** default **5 hours**, slider down to fewer.
- **Rate:** 2 drinks in hour 1, then 1/hour after → 5h = **6 drinks/guest** baseline.
- **Buffer:** +10% on top (toggle, default ON) so the bar doesn't run dry.
- **Non-drinkers:** absorbed by the Soft-drinks slice of the split (below) — do NOT subtract again, or you double-count.
- `totalDrinks = guests × drinksPerGuest(hours) × (1 + buffer)`

## 2 — The split (the heart of the tool)
Four categories, **default 25 / 25 / 25 / 25**:
- **Spirits** (incl. shooters) · **Wine** · **Cider/Coolers/Beer** · **Soft drinks**

### Auto-rebalance (KEY behaviour — get this exact)
Each category has `on/off` + a `weight`. Only **active** categories share 100%, normalised from their weights.
- All 4 on, equal weights → **25/25/25/25**
- Spirits OFF → remaining 3 renormalise → **33.3/33.3/33.3**
- Spirits + Soft OFF → remaining 2 → **50/50**
- User drags one slider → others adjust proportionally so the active set always sums to 100%.

```
active = categories.filter(c => c.on)
sumW   = active.reduce((s,c)=>s+c.weight,0)
each active c → pct = c.weight / sumW × 100
inactive → 0
```

### Presets (one tap, then drag to fine-tune) — these ARE Tina's catering experience
- **Full Bar** — 25/25/25/25 (default)
- **Wine & Bubbly only** — Wine 100, rest off
- **Beer & Wine** — Cider/Beer 50 / Wine 50
- **No Spirits** — 33/33/33 across Wine, Cider/Beer, Soft
- **Brandy-&-Coke Highveld** — Spirits-heavy (e.g. 45/20/25/10), brandy-forward

## 3 — Three drink-maths types
Every bar item reduces to one of three. Engine stays tiny.

1. **totMix** — true spirits with a mixer (brandy & Coke, gin & tonic, whisky & Coke, vodka & Sprite, cane & Sprite, rum & Coke)
   - serves = `bottleMl ÷ 25` (single) — 750ml = **30 singles**, 1L = **40**
   - auto-pulls paired mixer: `mixerNeeded = serves × mixerMl`
2. **totNeat** — tot, no mixer (tequila & Jägermeister shooters, single malt)
   - serves = `bottleMl ÷ 25`, no mixer
3. **unit** — 1 item = 1 drink, case of 24, no mixer (beer, cider, **premix coolers** like Belgravia G&T / Bernini / Brutal Fruit / Flying Fish, flavoured/spritzer wines, soft drinks, water)

> Premix coolers & flavoured wines ride the **unit** rail — add as many SA brands as you like, zero new maths.

**Spirits served per single (25ml)** default; 50ml double = later toggle.

## 4 — Three bar modes
- **Open bar** — host pays all → full quantity + full rand cost (green/gold).
- **Cash bar** — still calculate quantity (stock right), but cost shown as **info only**.
- **Limited R-tab** — enter a cap (e.g. **R5000**) → output: *"covers ~X drinks · runs dry around hour 3 · then cash bar."* (No rival answers "what does my R5000 buy?")

## 5 — Yields & SA standards (Tina to confirm the starred ones)
| Item | Standard |
|---|---|
| Spirits 750ml | 30 singles / 15 doubles · 1L = 40/20 |
| Wine 750ml | ~5 glasses · case of 12 |
| Beer/cider/cooler | 1 unit = 1 drink · case of 24 |
| MCC toast | ~6 flutes/bottle → 1 bottle per ~7 guests · toast = 1 glass/guest |
| Mixer per drink * | tonic ~150ml, Coke ~200ml — *confirm* |
| Ice * | ~1kg per 2–3 guests — *confirm* |
| Water | always on, own line |

**Mixer auto-pairing:** brandy→Coke · gin→tonic · whisky→Coke/soda · vodka→Sprite/lemonade · cane→Sprite · rum→Coke.

## 6 — Data shape (proposed)
```js
{
  id:'klipdrift',
  name:'Klipdrift Brandy',
  nameAlt:'',                 // optional gloss
  category:'spirits',         // spirits | wine | cider | soft
  maths:'totMix',             // totMix | totNeat | unit
  bottleMl:750,               // tot maths only
  packSize:12,                // units per case (24 beer, 12 wine, 6 premix, 1 spirit)
  mixer:'coke',               // totMix only — id of paired mixer
  mixerMl:200,                // totMix only
  midPrice:230,               // rand, ONE mid-shelf price (Checkers/Tops). 0 = unpriced → hide green
  priceRef:'J&B / Bells',     // shown as the mid-shelf example
  tags:['whisky']
}
```

## 7 — Costing model (LOCKED): quantity firm, price = one mid-shelf guide
A bar planner can't know if the couple pours Klipdrift or Glenfiddich — so it doesn't try. Two clearly separated outputs:

- **What to buy = FIRM.** Quantities are certain (tots ÷ bottle, units ÷ case). This is the gold of the tool — the part nobody can eyeball. Always a proper tickable buy-list: e.g. *14 bottles whisky · 8 cases cider · 30L Coke · 25kg ice · MCC ×15*.
- **Rand = ONE mid-shelf guide per item, not a tier picker.** Each item carries a single **medium / mid-shelf** price (Bells, J&B, Buffelsfontein Brandewyn, Gordon's Gin, Smirnoff class). The tool shows that number, with a quiet note: *"mid-shelf guide — premium brands cost more."* No House/Premium columns to maintain. Spending up is the couple's call at the bottle store, not a calculator setting.

Output reads: *"Whisky — 14 bottles · ±R3,200 (mid-shelf, e.g. J&B/Bells) · premium will cost more."*

**Pricing source (Tina maintains):** per-item mid-shelf price benchmarked to **Checkers LiquorShop** and **Tops at Spar** (national, online price lists, defensible). One price per item — when a shelf price moves, update one number.

- Per-line **green** food-cost shows only if the item has a mid-shelf price; hidden if unpriced.
- **Round up to real packs/cases** for the buy-list (gold) — natural home for the parked Phase-2 pack-size rounding.
- **Storage:** one `midPrice` field per bar item (see data shape). No separate BAR_PRICE_DB needed — the price lives on the item.

## 8 — Free / Paid (locked: My Plan + shopping + cost = Pro)
- **Free:** browse the bar categories, see the drink list.
- **Pro:** the quantity calculator output, My Plan, shopping list, rand cost, R-tab mode.
- *Confirm with Tina: is the bottle-count output itself Free (as "scaling") or Pro (as "shopping")? Lean Pro — it's the paid value.*

## 9 — UX flow
1. **Setup:** guest count · hours slider (5 default) · bar mode (Open / Cash / Limited+R) · split **preset** picker.
2. **Split editor:** 4 sliders (Spirits/Wine/Cider/Soft) with on-off toggles + **auto-rebalance**.
3. **Tickable list:** grouped by the 4 categories — tick what's on the bar.
4. **My Plan output:** per-line bottles/cases to buy · mixers auto-added · ice/water/MCC lines · green food-cost + gold shop-spend · (Limited mode: R-tab coverage line).
5. **Shopping list:** aisle-grouped, summed, rounded to packs/cases (reuse Spice shopping renderer pattern).

## 10 — Sequencing & guardrails
- This is a **new build (meat/organs)** — queues **behind** the Events sameness skeleton (Cakes + Buffet + beverages back-nav) so it lands on a clean, same-everywhere base.
- **Discovery-first:** before building, Code reports — new file vs events.js, PRICE_DB extension vs BAR_PRICE_DB, and which shared renderers it'll reuse. **Pause for Tina's confirm before writing.**
- `node --check` before push · core.js line count unchanged · GitHub Desktop one-file push · batch deploys · **do not push** until Tina previews.

## Open decisions for Tina (quick)
1. Mixer ml per drink — tonic 150 / Coke 200 ok?
2. Ice ratio — 1kg per 2–3 guests ok?
3. ~~Bar pricing~~ ✅ LOCKED — per-item mid-shelf price, one `midPrice` field, benchmarked to Checkers LiquorShop / Tops at Spar.
4. Bottle-count output — Free or Pro?
5. New `barplanner.js` file, or inside `events.js`?
