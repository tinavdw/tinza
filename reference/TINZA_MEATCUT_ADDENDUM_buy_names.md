# TINZA MEAT CUT GUIDE — ADDENDUM · 12 Jul 2026
## THE BUY-NAME COLUMN

**Append this to `wk_meat_cut_guide.md`. Do not rewrite the existing Guide — extend it.**

---

## ⚖️ THE LAW THIS ADDENDUM EXISTS TO FIX

> **THE MEAT CUT GUIDE IS A COOK'S RULE. PRICING NEEDS A SHOPPER'S RULE.**

The Guide says *"stewing lamb = shoulder or neck."* **That is true in the kitchen and useless at the till.**

**You cannot buy "shoulder or neck."** You buy a pack that says **Lamb Potjiekos** or **Stewing Lamb**. That pack is its own product, with its own shelf price, and it is a **MIX** — not a cut.

That is the **TINZA INGREDIENT STANDARD**: *the name is what you BUY.* The Guide was never written to satisfy it. **This addendum is that column.**

👉 **Consequence: `lamb potjiekos` is a PRODUCT KEY. It is NOT an alias to `lamb neck`. It never was.**

---

## 🔬 THE EVIDENCE (researched 12 Jul 2026)

**What is actually in the bag** — per **ButcherSA** (the SA butchery trade body), potjiekos / stew / casserole packs are made from:

> **cubed and sliced NECK · FLANK · BREAST · SHANK or KNUCKLES · raised SHOULDER shank**

**Not neck. Never was neck.** It is a **forequarter mix**.

**And the shops sell it as a product, by the kilo:**
- Shoprite — *Potjiekos Lamb, per kg*
- PnP — *PnP Butchery Lamb Potjiekos, per kg*
- Chalmar — *Lamb Potjiekos ±1kg, frozen random-mass product*
- PnP Beef Potjiekos — *"conveniently pre-cut into potjiekos pieces"*

Even the recipe writers say it: *a mix of shank and leg is tastiest but expensive — stewing lamb or specially marked packs of potjie lamb work well too.*

**THE PACK IS THE PRODUCT. PRICE THE PACK.**

---

## 💰 THE PRICE BAND (Tina's research, 12 Jul 2026)

| Band | Price | What it is |
|---|---|---|
| Budget | R109.50 – R130/kg | forequarter packs, butcher/deli |
| **Mainstream retail** | **R130 – R170/kg** | **Shoprite · PnP pre-packed** |
| Premium cuts | R169 – R235/kg | if the potjie names **knuckle** or **neck** specifically |
| Specialty | R170/kg + | Karoo lamb · free-range |

**Full spread: R110 – R220/kg = 2×.**

### ⚖️ THE PRICING LAW FIRES HERE
> *"Where the retail spread exceeds ~2×, STORE A RANGE and SAY SO ON THE CARD."*

**RULED:**
- **`lamb potjiekos` = R150/kg** — the mid-point of the mainstream retail band. **Not the R109 floor. Not the R235 ceiling.**
- **The card shows the range:** *"Lamb potjiekos R130–R170/kg depending on butcher."*
- `src: Shoprite/PnP · when: '2026-07' · conf: 'shelf'`

### 🚨 WHAT THIS CORRECTS
`lamb potjiekos` is **live right now at R130** — **the BOTTOM of the range, not the middle.**

**LAMB WAS WRONG IN BOTH DIRECTIONS AT ONCE:**
- The `lamb → lamb neck` alias made **braai chops 33% too CHEAP.**
- The `lamb potjiekos` R130 key made **every stew, curry, bredie and potjie ~15% too CHEAP.**

Same animal. Two different lies. **And both of them quietly flattered the green "cooking beats buying" number.**

---

## 🥩 LAMB — THE BUY-NAME TABLE (this is the one Code prices from)

| The method says… | The Guide's cut | **WHAT YOU ACTUALLY BUY** | Key |
|---|---|---|---|
| stew · curry · bredie · **potjiekos** · braise | shoulder / neck / shank mix | **a pack marked Lamb Potjiekos or Stewing Lamb** | `lamb potjiekos` **R150/kg** *(R130–R170)* |
| the recipe **names** knuckle | knuckle | knuckles, sold as knuckles | `lamb knuckles` — **premium band, own key** |
| the recipe **names** neck | neck | neck chops | `lamb neck` — own key |
| falls-off-the-bone braise | shank | shanks, sold whole | `lamb shank` — own key |
| **braai · grill · pan-fry** | loin | **SHOULDER CHOPS** ✅ *Tina's ruling — people prefer them, and the shelf agrees (PnP braai-chop packs sit well under loin)* | `lamb shoulder chops` |
| the recipe **names** loin / rib / cutlet / rack | loin / rib | loin or rib chops | `lamb loin chops` / `lamb rib chops` |
| roast, whole joint | leg | leg of lamb | `leg of lamb` |
| braai ribs | ribs | riblets / spare ribs | `lamb riblets` |
| frikkadelle · kofta · meatballs · bobotie | — | **MINCE. A ground product.** | `lamb mince` — **OWN KEY. NOT `lamb stew`.** |
| steak | rump | rump | `lamb rump` |
| **no method signal at all** | — | **⛔ NOTHING. DO NOT GUESS.** | **Fail loud. List it. Tina names it.** |

---

## ⛔ THE THREE MERGES THAT MUST NOT HAPPEN

These are the **same context-flattening disease as the `lamb → lamb neck` alias — just at the KEY level instead of the ALIAS level.**

1. ❌ `lamb knuckle / potjiekos` as ONE key.
   **Knuckle is a CUT (premium band, R169–R235). Potjiekos is a MIX (budget band, R130–R170).** Merging them averages a real difference into a fake one.

2. ❌ `lamb stew / lamb mince` as ONE key.
   **Mince is ground. Stew is cubed bone-in offcuts.** Different product, different shelf, different price.

3. ❌ `stewing lamb → lamb neck` as an alias.
   **Dead. The pack is not neck.** `stewing lamb` → **alias to `lamb potjiekos`**, the product.

---

## 🩸 THE COLLISION CODE MUST NOT WALK INTO

**PRICE_DB ALREADY HAS LAMB KEYS from the v20 build.** They **disagree** with the 12-Jul list:

| Already in PRICE_DB | The 12-Jul list |
|---|---|
| `lamb loin chops` **R270** | `lamb chops (loin/rib)` **R255** |
| `lamb braai chops` **R200** | `lamb shoulder chops` **R220** |
| `leg of lamb` **R190** | `leg of lamb` **R205** |
| `lamb neck` **R180** | `lamb neck` **R170** |
| `lamb shank` **R190** | `lamb shank` **R180** |
| `lamb potjiekos` **R130** | `lamb knuckle/potjiekos` **R170** |
| `lamb knuckles` **R200** | *(merged away)* |
| `lamb rib` R220 · `butterflied leg of lamb` R190 · `lamb roast` R190 · `mutton` R180 | *(not in the list at all)* |

> 🚨 **CODE MUST RECONCILE, NOT ADD.**
> If it simply *adds* the new keys, PRICE_DB ends up with **two keys for the same product at two different prices**, and longest-match-wins picks whichever. **That is exactly the `date syrup = R160 or R50` disease we are here to kill.**
>
> **DELIVERABLE: print the FULL current lamb key list from PRICE_DB, side by side with the target. Tina signs one number per product. Then write.**

---

## ✅ `lamb mince` — RULED. **R215/kg.** And BOTH earlier numbers were wrong.

| Source | Price |
|---|---|
| Woolworths, 100% free-range, 500g @ R129.99 | **R260/kg** |
| Mondanette Butchery, 500g @ R134.95 | **R270/kg** |
| Certified Karoo, 500g @ R130 | **R260/kg** |
| Bulk butchery (Eric's, 3kg+) | ~**R175/kg** |
| **REAL BAND** | **R175 – R260/kg** |

**RULED: `lamb mince` = R215/kg** (mid of the band).
`src: Woolworths/butchery survey · when: '2026-07' · conf: **'online'**`

### 🚨 WHY THIS ONE MATTERS MORE THAN THE NUMBER

- **R98 was 2.2× UNDER. R160 was 35% UNDER.** Both were Tina's own notes.
- **R98 is almost certainly BEEF MINCE** (~R110–R140/kg) wearing a lamb label. A number that had been sitting in the notes long enough to look like a fact.
- ⚖️ **THAT IS LAW 11, AND IT DOES NOT CARE WHO WROTE THE NUMBER DOWN.**
  *A price with no provenance is a rumour.* Model, human, doesn't matter. **`src` + `when` + `conf`, or it doesn't ship.**
- 🎯 **`conf: 'online'` — NOT `'shelf'`.** Nobody has read this off a Checkers fridge. **Price Studio will rank it for a shelf check automatically.** That is what MF35 was built to do: not to *stop* a wrong price, but to make sure a wrong price is never *unmarked* again.

### 🔄 TWO KNOCK-ONS — BOTH REAL

**1. THE SHAPE OF THE LAMB TABLE IS INVERTED.**
Mince was assumed to be the CHEAP lamb key. **It is not.** At R215 it is **dearer than `lamb potjiekos` (R150)** and roughly **level with shoulder chops.**
👉 **Every frikkadelle, kofta and lamb bobotie in the app has been costed as if mince were the budget option. It is the opposite.** Re-cost them.

**2. THE "3.5× SPREAD" CLAIM WAS BUILT ON THE BAD NUMBER.**
R98 → R350 was 3.5×. The real spread is **R150 (potjiekos) → R310 (rump) ≈ 2.1×.**
Still wide. Still absolutely justifies cut-aware keys. **But quote the true number: 2.1, not 3.5.**
