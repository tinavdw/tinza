# 🍝 SPAGHETTI BOLOGNESE — re-align + deepen (for Tina's review)
*27 Jun 2026 · the pilot dish, brought onto the canonical version system + given the new Did-You-Know. NOT pushed.*

## What's changing
The pilot shipped as ⭐Tinza's Best · ⚡Quick · 🌱Veg · 🏆Classic. Re-aligned to canonical:
| Was | Now | Change |
|---|---|---|
| ⭐ Tinza's Best (default) | 🍝 **Slow Ragù** (default) | Tinza folded into default → descriptive derived name; same great content |
| — | 💰 **Budget** | NEW — stretches the mince honestly with lentils + grated veg |
| ⚡ Quick | ⚡ **Quick** | unchanged |
| 🌱 Vegetarian | 🌱 **Vegetarian** | unchanged |
| 🏆 Classic | 🏆 **Classic** | unchanged — the strict Bologna original (kept; it's distinct from the default and educational) |

**Default vs Classic — why both:** Default (Slow Ragù) = the tomato-rich crowd-pleaser *with the Tinza milk twist*, on spaghetti. Classic = the by-the-book Bologna original (tagliatelle, white wine, barely any tomato, no twist). Genuinely different dishes — and the contrast is half the fun to browse.

## 💡 Did You Know (heritage — the surprising one)
*"In Bologna, 'spaghetti bolognese' doesn't exist — the real ragù is served on fresh tagliatelle, never spaghetti, and uses only a whisper of tomato. The dish the world calls 'spag bol' is its travelled, tomato-rich cousin."*

## Versions = 5 (flagship earns the full spread). Tags
| Version | Tags |
|---|---|
| Slow Ragù (default) | — *(beef+pork+bacon+milk+parmesan: not DF, not HL — pork, not KS)* |
| Budget | HL · KS *(beef-only, no dairy → structurally compliant; user buys compliant mince)* |
| Quick | HL |
| Vegetarian | V · HL |
| Classic | — *(bacon+milk: pork → not HL/KS, dairy → not DF)* |

## 🆕 New-ingredient watchlist
`brown lentils` ✓ (exists, veg version) · all others already priced. Budget adds nothing new.

---

## THE DRAFT (re-aligned, in-schema)

```js
{id:'sp-spag-bol', cat:'pasta', diet:'meat', protein:'beef', name:'Spaghetti Bolognese', emoji:'🍝', cuisine:'Italian', time:30, costPP:34,
  feel:'The weeknight rescue everyone already knows how to twirl.',
  ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],
  method:['Soften the chopped onion, carrot and garlic in a little oil.','Add the mince and brown well, breaking up any lumps.','Stir in the tomatoes and simmer gently for 25 minutes until thick and glossy.','Cook the spaghetti, drain, and serve topped with the sauce and grated cheddar.'],
  tip:'A long, slow simmer is the whole secret — give the sauce time and it rewards you.',
  didYouKnow:'In Bologna, "spaghetti bolognese" doesn\'t exist — the real ragù is served on fresh tagliatelle, never spaghetti, and uses only a whisper of tomato. What the world calls "spag bol" is its travelled, tomato-rich cousin.',
  nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18}, storage:'Sauce keeps 3 days and freezes 2 months.',
  versions:[
    {name:'Slow Ragù',icon:'🍝',default:true,time:135,costPP:54,nutrition:{kcal:720,protein_g:38,carbs_g:62,fat_g:34},feel:'Not the 20-minute version — a true slow ragù, built on a sweet soffritto and finished with a secret splash of milk. The kind of sauce that makes the house smell like Sunday.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:90,u:'g'},{n:'pork mince',pp:40,u:'g'},{n:'streaky bacon',pp:20,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:12,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'red wine',pp:30,u:'ml'},{n:'beef stock',pp:60,u:'ml'},{n:'full cream milk',pp:40,u:'ml'},{n:'olive oil',pp:8,u:'ml'},{n:'parmesan',pp:15,u:'g'},{n:'dried Italian herbs',pp:1,u:'g'}],method:['Sweat finely diced onion, carrot and celery in the olive oil over low heat 10–12 min — the soffritto is the flavour base.','Render the bacon, add the garlic for a minute, then brown the beef and pork mince HARD in batches for deep colour.','Cook out the tomato paste 2 min, pour in the red wine and reduce almost away.','Add the tinned tomatoes, stock and a splash of milk; simmer the lowest heat 1.5–2 hours.','Toss the cooked spaghetti THROUGH the sauce with a little pasta water; finish with parmesan.']},
    {name:'Budget',icon:'💰',time:40,costPP:24,nutrition:{kcal:500,protein_g:24,carbs_g:70,fat_g:13},feel:'Lentils and grated veg stretch a little mince a long way — same rich, glossy sauce, half the cost, all real.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:70,u:'g'},{n:'brown lentils',pp:40,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'mixed herbs'}],method:['Soften the onion, finely grated carrot and garlic in the oil — grating the veg melts it into the sauce so no one spots the stretch.','Brown the mince hard, then stir in the tomato paste.','Add the lentils, tinned tomatoes and a cup of water; simmer 30 min until the lentils are soft and the sauce is thick.','Toss through the spaghetti — the lentils give it body and protein for a fraction of the meat cost.']},
    {name:'Quick',icon:'⚡',time:30,costPP:34,nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18},feel:'On the table in 30 — the honest weeknight rescue when time is short.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],method:['Soften the chopped onion and garlic in a little oil.','Add the mince and brown well, breaking up the lumps.','Stir in the tomatoes and simmer 20 min until thick.','Toss with spaghetti and top with grated cheddar.']},
    {name:'Vegetarian',icon:'🌱',time:50,costPP:30,nutrition:{kcal:470,protein_g:20,carbs_g:72,fat_g:12},feel:'Lentils and mushrooms bring all the savoury depth — you won\'t miss the meat.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'brown lentils',pp:70,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:12,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'red wine',pp:25,u:'ml'},{n:'olive oil',pp:8,u:'ml'},{n:'parmesan',pp:15,u:'g'},{n:'dried Italian herbs',pp:1,u:'g'}],method:['Sweat the soffritto slowly in olive oil.','Brown the chopped mushrooms hard for umami depth.','Add the lentils, tomato paste and wine, then the tinned tomatoes; simmer 30 min.','Finish with parmesan and toss through the pasta.']},
    {name:'Classic',icon:'🏆',time:150,costPP:56,nutrition:{kcal:700,protein_g:36,carbs_g:60,fat_g:33},feel:'The Bologna original — tagliatelle, pancetta, a whisper of tomato, white wine and a splash of milk.',ingredients:[{n:'tagliatelle',pp:90,u:'g'},{n:'beef mince',pp:110,u:'g'},{n:'streaky bacon',pp:25,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'full cream milk',pp:50,u:'ml'},{n:'beef stock',pp:40,u:'ml'},{n:'parmesan',pp:15,u:'g'}],method:['Soffritto with the pancetta until soft and sweet.','Brown the beef gently, add the white wine and let it cook off.','Stir in the milk (the authentic touch) and just a little tomato paste.','Simmer the gentlest 2.5 hours; serve on tagliatelle, never spaghetti.']}
  ]},
```

## Resolved ✓
1. Default name = **"Slow Ragù"** (locked)
2. Budget = **beef-only, no pork** — keeps it Halaal AND Kosher-structure-safe (no pork, no meat+dairy). The Budget version is the most dietary-inclusive of the five.

## Note
Budget being the most inclusive version (cheap + HL + KS) is a quiet accessibility win — worth remembering as a pattern: simple/budget builds often clear the most dietary walls.
