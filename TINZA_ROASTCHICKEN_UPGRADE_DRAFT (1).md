# 🍗 LEMON & HERB ROAST CHICKEN — upgrade draft (for Tina's review)
*27 Jun 2026 · against live `meals.js` (`sp-roast-chicken`) + depth standard. NOT pushed.*

## What changed & why (depth marks)
| Mark | Current (plain) | Upgraded default |
|---|---|---|
| Complete ingredients | oil, mixed herbs, S&P | **butter + garlic + herbs under the skin**, **lemon in the cavity**, honey on the veg |
| Technique | rub, roast, rest | pat skin **bone-dry** for crackle · butter UNDER skin · hot-start then lower · baste veg in chicken fat · pan gravy from the tray |
| Secret step | none | butter-garlic-herb paste pushed under the skin (the single biggest move) + lemon steaming the bird from inside |
| feel / tip | okay | sells the golden skin + the caramelising veg; tip = dry skin + hot start |
| veg half | "& veg" cooked plainly | **caramelised in the chicken fat + a touch of honey** — the veg is genuinely worked on now |

## NAMING (derived — both halves)
- **Lemon + thyme/rosemary are now actually in it**, so **"Lemon & Herb"** is honest, not decorative.
- **Veg half worked on** → caramelised honey-roast veg (lives in the blurb; hero leads the name).
- **Parent name options:**
  - **A (tight):** `Lemon & Herb Roast Chicken` — veg sung in the feel-copy *(my pick — clean, true, "roast chicken" still searchable)*
  - **B (both in name):** `Lemon & Herb Roast Chicken & Veg`
  - **C (veg-forward):** `Lemon & Herb Roast Chicken & Caramelised Veg` *(longest — may crowd the card)*

## Versions (hero → 4) — Vegetarian deliberately excluded (it's roast chicken)
| Version | Axis | Cut | Tags |
|---|---|---|---|
| 🍗 Lemon & Herb (default) | the works | whole bird, butter under skin | **HL** *(butter = not DF; chicken+dairy = not KS)* |
| 💰 Budget | money | cheapest bone-in pieces, more veg | DF · HL |
| ⚡ Quick | time | mixed pieces, hot & fast ~40 min | DF · HL |
| ❤️ Healthy | nutrition | **skinless portions**, less oil, more veg, → Health Hub | DF · HF · HL |

## 🆕 New-ingredient watchlist (confirm in PRICE_DB)
`lemon` · `thyme` *(carryover from stew)* · `rosemary` · `chicken breasts` *(Healthy)* · `sweet potatoes` *(Healthy)* · `green beans` *(Healthy)*
*(already in DB: `whole chicken` · `chicken pieces` · `butter` · `garlic` · `honey` · `potatoes` · `carrots` · `onion` · `olive oil`)*

---

## THE DRAFT (in-schema, ready to patch)

```js
{id:'sp-roast-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Lemon & Herb Roast Chicken & Veg', emoji:'🍗', cuisine:'Global', time:95, costPP:40,
  feel:'Butter and garlic pushed under the skin, lemon and herbs in the cavity, the veg caramelising in the chicken\'s own golden fat — the Sunday smell that gets everyone to the table on time.',
  ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],
  method:['Pat the chicken bone-dry inside and out — dry skin is the whole secret to crackle. Loosen the skin over the breast and push a paste of softened butter, crushed garlic and chopped herbs underneath, right onto the meat.','Halve the lemon and tuck it into the cavity with the onion and a sprig of herbs — it steams the bird from inside and keeps the breast juicy.','Rub the skin with oil and season well. Toss the potatoes and carrots in the tin with oil and a drizzle of honey.','Roast at 200C for the first 20 minutes for colour, then drop to 180C and cook about 45 min per kg plus 20, basting the veg in the chicken fat once or twice — that fat is what caramelises them.','Rest the bird 10–15 minutes before carving so the juices settle back in. Tip the resting juices into the pan, simmer with the sticky bits, and you have an instant gravy.'],
  tip:'Dry the skin properly and start it hot — that is the whole difference between pale and golden, crackling skin. And always rest before carving.',
  didYouKnow:'That sprig of thyme or rosemary? Both are hardy perennials that thrive in a pot on a sunny sill or step — snip what you need and they keep giving for years, so you never buy a packet again.',
  nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32}, storage:'Keeps 3 days; leftovers are gold for sandwiches and soup.',
  versions:[
    {name:'Lemon & Herb',icon:'🍗',default:true,time:95,costPP:40,nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32},feel:'The full Sunday bird — butter and garlic under the skin, lemon and herbs in the cavity, veg golden in the chicken fat.',ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],method:['Pat the chicken bone-dry; push a butter-garlic-herb paste under the breast skin.','Lemon, onion and herbs in the cavity.','Oil and season the skin; toss the veg in oil and a little honey.','Roast hot at 200C for 20 min, then 180C ~45 min/kg + 20, basting the veg in the fat.','Rest 10–15 min; make a quick pan gravy from the juices.']},
    {name:'Budget',icon:'💰',time:65,costPP:27,nutrition:{kcal:540,protein_g:36,carbs_g:42,fat_g:24},feel:'Cheapest cuts, fullest tray — bone-in pieces and a big bed of potato roasted in herbs. Feeds the table for less.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'mixed herbs'},{n:'salt & pepper'}],method:['Use the cheapest bone-in pieces (thighs and drumsticks have the most flavour for the money).','Toss everything in a roasting tin with oil, crushed garlic, herbs and seasoning.','Roast at 200C for 45–50 minutes, turning once, until the chicken is golden and the potatoes crisp.','Skin-on bone-in pieces baste the veg as they roast — no extra fat needed.']},
    {name:'Quick',icon:'⚡',time:45,costPP:38,nutrition:{kcal:560,protein_g:40,carbs_g:34,fat_g:26},feel:'Same lemon-herb flavour, half the time — pieces not a whole bird, roasted hot and fast.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'thyme'},{n:'salt & pepper'}],method:['Toss the chicken pieces with oil, crushed garlic, lemon juice, thyme and seasoning.','Spread on a tray with the potatoes and carrots, cut small so they roast fast.','Roast hot at 220C for 35–40 minutes until golden and cooked through.','Pieces roast in a fraction of the time of a whole bird — no carving, no resting wait.']},
    {name:'Healthy',icon:'❤️',time:50,costPP:42,nutrition:{kcal:430,protein_g:46,carbs_g:30,fat_g:12},feel:'Skinless and lean, barely any oil, and double the veg — all the lemon-herb flavour, far lighter. (See the Health Hub for more like this.)',ingredients:[{n:'chicken breasts',pp:200,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'sweet potatoes',pp:150,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'green beans',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'thyme'},{n:'rosemary'},{n:'salt & pepper'}],method:['Use skinless chicken portions and just a spray or 5ml of oil — the lemon, garlic and herbs do the flavour work, not fat.','Roast a big bed of sweet potato, carrot, onion and green beans tossed in the little oil with herbs.','Lay the chicken on top so it stays moist over the veg; squeeze over the lemon.','Roast at 190C for 35–40 minutes until the chicken is just cooked and the veg tender.']}
  ]},
```

## Resolved
- **Parent name: B → `Lemon & Herb Roast Chicken & Veg`** ✓ (locked)
- Watchlist: confirm against PRICE_DB later — most names already exist.

## Still open
- Healthy cut — **`chicken breasts`** ✓ (locked — leanest)
