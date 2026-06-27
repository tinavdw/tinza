# 🥘 FARMHOUSE BEEF STEW — upgrade draft v2 (corrected)
*27 Jun 2026 · against live `meals.js` (`sp-beef-stew`) + depth standard. Tina's corrections folded in. NOT yet pushed.*

## Corrections applied (this round)
- **Name → "Farmhouse Beef Stew"** (global; "Plaas" dropped — SA-only)
- **No soup powder anywhere** — Budget thickens with flour + **beef stock powder** (real concentrated stock, allowed; soup powder is a flavour-shortcut packet, banned)
- **Worcestershire stays** (it's a condiment, not a shortcut)
- **baby potatoes** ✓ already in PRICE_DB
- **5th version added → 🔥 Over Coals** (potjie, global method name; cross-links to a new Potjie shelf in Braai)
- "plaas-pot" softened to "farmhouse" in copy for consistency
- **Religious tags = FILTER, not swap**: no "make it Halaal by…" guidance. Halaal/Kosher users land on the naturally-compliant Farmhouse default; Red Wine version is simply tagged DF and filtered out for them.

## New rules banked (→ TINZA_DISH_FAMILIES.md)
- **Stock powder = fine · Soup powder = no.** Concentrated stock is real; a flavour packet isn't.
- **Condiments allowed** as real kitchen building blocks: Worcestershire, mustard, soy, fish sauce, chutney.
- **🔥 Over Coals** = the global name for a potjie/coals method version. A-la-carte on a *few* suited dishes only, cross-linked to a dedicated **Potjie shelf in Braai**.

## Naming (derived)
Parent/feed: **Farmhouse Beef Stew** (enticing + contains "beef stew" for search). Red Wine version named from its ingredient — honest only because wine is in *that* version.

## Dietary tags (per version)
| Version | Tags |
|---|---|
| Farmhouse (default) | DF · HL |
| Budget | DF · HL |
| Quick | DF · HL |
| Red Wine | DF |
| Over Coals | DF · HL |

## 🆕 New-ingredient watchlist (confirm in PRICE_DB)
`bay leaves` · `thyme` · `Worcestershire sauce` · `beef stock powder`
*(removed: brown onion soup ✗ · baby potatoes ✓ exists · mushrooms ✓ exists)*

---

## THE DRAFT (in-schema, ready to patch)

```js
{id:'sp-beef-stew', cat:'stewscurries', diet:'meat', protein:'beef', name:'Farmhouse Beef Stew', emoji:'🥘', cuisine:'South African', time:130, costPP:46,
  feel:'Low and slow until the beef gives way to the fork and the gravy turns glossy and deep — proper farmhouse-pot cooking that looks after a whole table.',
  ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],
  method:['Pat the beef dry and toss in seasoned cake flour. Brown HARD in batches in a little oil in a heavy pot — never crowd it, a packed pot steams instead of sears and you lose the dark fond on the base where the flavour lives. Set the meat aside.','Soften the chopped onion in the same pot, scraping up the fond, then add the garlic for a minute.','Stir in the tomato paste and cook it out 2 minutes until it darkens — this loses the raw tang and builds the deep, rich base.','Return the beef, pour in the stock, drop in the bay and thyme. Bring to a bare simmer, cover, and cook low for 1.5 hours — low and slow is what melts the connective tissue to silk.','Add the carrots and potatoes for the last 40 minutes so they hold their shape instead of melting away.','Finish with a splash of Worcestershire and check the seasoning. The gravy should coat the back of a spoon — if it is thin, simmer uncovered a few minutes to reduce. Serve over rice, pap or with bread.'],
  tip:'Brown the meat properly and in batches — that fond is the whole flavour of the gravy — and add the potatoes late so they do not disintegrate.',
  didYouKnow:'Browning the meat doesn\'t "seal in the juices" — that\'s a century-old myth. It\'s the Maillard reaction: sugars and proteins forming hundreds of new flavour compounds. That dark fond on the pot is pure flavour you\'re about to scrape up.',
  nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24}, storage:'Improves overnight as the flavours marry; keeps 3 days, freezes 3 months. Reheat gently, loosen with a splash of stock.',
  versions:[
    {name:'Farmhouse',icon:'🥘',default:true,time:130,costPP:46,nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24},feel:'The full farmhouse-pot stew — browned hard, simmered low, glossy and deep. The one that fills the house with Sunday.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],method:['Pat the beef dry, toss in seasoned cake flour, brown HARD in batches — don\'t crowd the pot, the fond is the flavour. Set aside.','Soften the onion in the fond, add garlic for a minute.','Cook out the tomato paste 2 min until it darkens.','Return the beef, add stock, bay and thyme; simmer low and covered 1.5 hours.','Add carrots and potatoes for the last 40 min.','Finish with Worcestershire; reduce uncovered if the gravy is thin.']},
    {name:'Budget',icon:'💰',time:120,costPP:27,nutrition:{kcal:430,protein_g:24,carbs_g:48,fat_g:16},feel:'Stretches less meat across a fuller pot — more potato, more gravy, every cent feeding the table. All real, no packets.',ingredients:[{n:'beef stewing meat',pp:100,u:'g'},{n:'potatoes',pp:220,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'beef stock powder',pp:6,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'oil',pp:10,u:'ml'}],method:['Toss the beef in seasoned flour and brown for colour and to thicken the gravy later.','Soften the onion, stir in the tomato paste, then return the beef.','Add water and the stock powder (real concentrated stock, no soup packets), bring to a simmer.','Simmer covered 1 hour, add the potatoes and carrots, and cook 30 min more until tender and the gravy has thickened from the floured meat.']},
    {name:'Quick',icon:'⚡',time:45,costPP:40,nutrition:{kcal:500,protein_g:37,carbs_g:36,fat_g:23},feel:'Pressure-cooker farmhouse stew — the same deep flavour, ready in 45 instead of two hours.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'oil',pp:10,u:'ml'}],method:['Brown the floured beef in the pressure cooker on sauté.','Add onion, garlic and tomato paste, cook out 2 min.','Add stock, seal, and pressure-cook 20 min.','Release, add carrots and potatoes, simmer open 12–15 min until tender and the gravy thickens.']},
    {name:'Red Wine',icon:'🍷',time:150,costPP:58,nutrition:{kcal:560,protein_g:39,carbs_g:34,fat_g:28},feel:'The grown-up version — beef braised in red wine with mushrooms until the gravy is dark, silky and deeply savoury.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'streaky bacon',pp:20,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'red wine',pp:60,u:'ml'},{n:'beef stock',pp:150,u:'ml'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:150,u:'g'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:8,u:'ml'}],method:['Render the chopped bacon, then brown the floured beef HARD in batches in the fat. Set aside.','Soften onion and garlic, brown the mushrooms hard for umami.','Cook out the tomato paste, pour in the red wine and reduce by half — this burns off the sharpness and concentrates the flavour.','Return the beef and bacon with the stock, bay and thyme; braise low and covered 1.5–2 hours.','Add carrots and baby potatoes for the last 40 min; reduce uncovered until the gravy is glossy and coats a spoon.']},
    {name:'Over Coals',icon:'🔥',time:180,costPP:48,nutrition:{kcal:520,protein_g:38,carbs_g:36,fat_g:25},feel:'The potjie way — browned in a three-legged pot and left to its own devices over low coals, layered and never stirred, until everything melts together.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:180,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'}],method:['Get a bed of coals low and steady — gentle heat is the whole game with a potjie.','Brown the floured beef in batches in the pot, then soften the onion and garlic and cook out the tomato paste.','Pour in the stock with the bay and thyme, settle the meat in an even layer.','Layer the carrots and baby potatoes ON TOP — do NOT stir; the steam cooks them down into the stew.','Lid on, low coals, 2.5–3 hours. Only stir right at the end to bring the gravy together. Cross-link: see the Potjie shelf in Braai.']}
  ]},
```

## Still open
1. Red Wine version — bacon + mushrooms (bourguignon-lean) ok, or simpler?
2. Potjie shelf in Braai — which recipes to build first? (oxtail · lamb knuckle · chicken & veg · venison)
