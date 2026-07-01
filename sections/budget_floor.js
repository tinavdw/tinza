// ── BUDGET FLOOR RECIPES ─────────────────────────────────────────────
// The honest "last-few-days-before-payday" pool. BASIC on purpose — meat used
// as flavouring, bulked with pap / rice / beans / lentils — but proper: real
// per-person amounts that price through PRICE_DB, salt & pepper, a short real
// method. Converted from the Ultimate-90 budget guide, RE-COSTED on our prices
// (the guide's tier labels don't survive real pricing), tagged tier:'floor'.
// Only served where a family of 4's budget ≤ R60 (~R15pp); blended with the
// existing cheap library (vetkoek, mince, etc.) in the low tiers.
// BATCH 1 (7 recipes) — for review before wiring. Soups + offal in batch 2.
var BUDGET_FLOOR_RECIPES = [

  { id:'bf-mince-lentil-curry', tier:'floor', basic:true, cat:'stewscurries', diet:'meat', protein:'beef',
    name:'Mince & Lentil Curry', emoji:'🍛', cuisine:'End-of-month', time:40, costPP:14,
    feel:'A little mince stretched a long way with brown lentils and grated carrot — you get the meaty, curried richness with half the meat, and nobody at the table is any the wiser.',
    ingredients:[
      {n:'beef mince',pp:40,u:'g'},
      {n:'brown lentils',pp:30,u:'g'},
      {n:'rice',pp:80,u:'g'},
      {n:'carrots',pp:40,u:'g'},
      {n:'onion',pp:40,u:'g'},
      {n:'tinned tomatoes',pp:40,u:'g'},
      {n:'sunflower oil',pp:8,u:'ml'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'Boil the rice in salted water until fluffy; cover and set aside. Boil the brown lentils until soft, drain, and mash them lightly — mashed, they melt into the mince so no one spots the stretch.',
      'Fry the chopped onion in the oil with a pinch of salt until soft. Grate in the carrot (it thickens and sweetens the sauce) and stir in the curry powder for a minute until fragrant.',
      'Push the veg aside and brown the mince HARD for real flavour, then stir everything together with the mashed lentils, tinned tomatoes and a splash of water. Simmer 15 minutes and season well with salt and pepper.',
      'Serve over the rice — the lentils give it body and protein for a fraction of the meat.'
    ],
    didYouKnow:'Swapping about a quarter of your mince for cooked brown lentils is the classic stretch — they are cheap, high in protein and fibre, and blend into a curry so well the meat lovers never notice.' },

  { id:'bf-vetkoek-curried-mince', tier:'floor', basic:true, cat:'plates', diet:'meat', protein:'beef',
    name:'Vetkoek & Curried Mince', emoji:'🍞', cuisine:'End-of-month', time:75, costPP:13,
    feel:'Golden, puffed vetkoek split open and stuffed with curried mince — the smell of it frying is payday-Friday joy on any budget, and it feeds a whole table for next to nothing.',
    ingredients:[
      {n:'cake flour',pp:65,u:'g'},
      {n:'beef mince',pp:50,u:'g'},
      {n:'onion',pp:35,u:'g'},
      {n:'carrots',pp:30,u:'g'},
      {n:'tinned tomatoes',pp:30,u:'g'},
      {n:'sunflower oil',pp:25,u:'ml'},
      {n:'instant yeast',pp:2,u:'g'},
      {n:'sugar',pp:3,u:'g'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'DOUGH: mix the flour, yeast, sugar and a pinch of salt, then work in warm water bit by bit into a soft, springy dough. Cover and leave somewhere warm until doubled, about 45 minutes.',
      'MINCE: fry the chopped onion in a little of the oil with salt until soft, grate in the carrot (it stretches and sweetens the mince), stir in the curry powder for a minute, then brown the mince hard. Add the tinned tomatoes and a splash of water and simmer 15 minutes. Season well with salt and pepper.',
      'Knock the dough down, pull off golf-ball pieces and rest 10 minutes. Heat the rest of the oil to medium and fry the vetkoek in batches, turning, until deep golden and puffed, about 3–4 minutes a side. Drain.',
      'Split each vetkoek and spoon the curried mince inside. Best eaten warm, with your hands.'
    ],
    didYouKnow:'Vetkoek — "fat cake" — is one of South Africa\u2019s great budget foods: a little flour and a little mince turned into a meal that feels like a treat.' },

  { id:'bf-curried-pilchard-stew', tier:'floor', basic:true, cat:'stewscurries', diet:'meat', protein:'fish',
    name:'Curried Pilchard Stew', emoji:'🐟', cuisine:'End-of-month', time:40, costPP:14,
    feel:'Tinned pilchards in their own tomato sauce, curried down with sweet grated carrot over a mountain of stiff pap — the honest end-of-month supper that still fills every plate.',
    ingredients:[
      {n:'tinned pilchards',pp:100,u:'g'},
      {n:'maize meal',pp:275,u:'g'},
      {n:'onion',pp:33,u:'g'},
      {n:'carrots',pp:38,u:'g'},
      {n:'sunflower oil',pp:10,u:'ml'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'Get the pap going first: bring a pot of salted water to the boil, rain in the maize meal while stirring, then turn the heat right down, cover and let it steam to a stiff pap, about 30 minutes.',
      'Fry the chopped onion in the oil with a pinch of salt until soft. Grate in the carrot — it melts into the sauce and thickens it for free — and stir in the curry powder for a minute until fragrant.',
      'Tip in the pilchards WITH their tomato sauce, break them up gently, add a splash of water and simmer 8–10 minutes. Season well with salt and pepper.',
      'Spoon the curry over a generous scoop of stiff pap.'
    ],
    didYouKnow:'SA pilchards come tinned in their own tomato sauce, so half your gravy is already made — cheaper than tuna and just as rich in omega-3.' },

  { id:'bf-sugar-bean-samp', tier:'floor', basic:true, cat:'stewscurries', diet:'veg',
    name:'Sugar Bean Samp', emoji:'🫘', cuisine:'End-of-month', time:90, costPP:10,
    feel:'Samp and beans cooked slow until creamy — the cheapest, most filling pot in the country, and pure comfort on a cold night.',
    ingredients:[
      {n:'samp',pp:125,u:'g'},
      {n:'maize meal',pp:200,u:'g'},
      {n:'onion',pp:65,u:'g'},
      {n:'sunflower oil',pp:8,u:'ml'},
      {n:'salt & pepper'}
    ],
    method:[
      'Soak the samp & beans if you can (even an hour helps), then boil in plenty of water until soft and creamy, topping up the water as it drinks it in — an hour or more. Season with salt near the end.',
      'Fry the chopped onion in the oil with a pinch of salt until golden, and stir it through the pot for flavour.',
      'Serve on its own, or with a scoop of pap on the side for the really hungry. Season to taste with salt and pepper.'
    ],
    didYouKnow:'The starch that makes samp go creamy is the same thing that makes it so filling — a little goes a long way.' },

  { id:'bf-soya-mince-cabbage', tier:'floor', basic:true, cat:'stewscurries', diet:'veg',
    name:'Soya Mince & Cabbage', emoji:'🥬', cuisine:'End-of-month', time:35, costPP:14,
    feel:'Soya mince fried down with shredded cabbage until it doubles in the pan — meaty, savoury and meat-free, over pap.',
    ingredients:[
      {n:'soya mince',pp:50,u:'g'},
      {n:'cabbage',pp:125,u:'g'},
      {n:'maize meal',pp:250,u:'g'},
      {n:'onion',pp:30,u:'g'},
      {n:'sunflower oil',pp:10,u:'ml'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'Cover the soya mince with boiling water and leave it to swell while you start the pap steaming.',
      'Fry the onion in the oil with salt until soft, add the curry powder for a minute, then the shredded cabbage — fry until it wilts down and sweetens.',
      'Drain the soya and add it in, splash in a little water, and cook 5 minutes so the flavours meet. Season well with salt and pepper, and serve over pap.'
    ] },

  { id:'bf-lentil-meatball-gravy', tier:'floor', basic:true, cat:'stewscurries', diet:'veg',
    name:'Lentil "Meatball" Gravy', emoji:'🟤', cuisine:'End-of-month', time:50, costPP:12,
    feel:'Brown lentils mashed with a little flour into soft balls, browned and simmered in an onion gravy — a proper meat-free stew that eats like a meaty one.',
    ingredients:[
      {n:'brown lentils',pp:63,u:'g'},
      {n:'maize meal',pp:250,u:'g'},
      {n:'carrots',pp:38,u:'g'},
      {n:'cake flour',pp:25,u:'g'},
      {n:'onion',pp:30,u:'g'},
      {n:'sunflower oil',pp:10,u:'ml'},
      {n:'salt & pepper'}
    ],
    method:[
      'Boil the lentils until very soft, then drain well and mash. Mix in the flour, salt and pepper to a stiff paste and roll into little balls.',
      'Brown the balls in the oil, turning gently, then lift them out. Start the pap steaming.',
      'In the same pan fry the onion with salt until soft, grate in the carrot, add a cup of water and simmer to a gravy. Slip the balls back in for 5 minutes to warm through. Season, and serve over pap.'
    ],
    didYouKnow:'Lentils are one of the cheapest proteins you can buy, and mashed with a little flour they hold together just like a meatball.' },

  { id:'bf-peanut-spinach-rice', tier:'floor', basic:true, cat:'plates', diet:'veg',
    name:'Peanut Butter Spinach & Rice', emoji:'🥜', cuisine:'End-of-month', time:30, costPP:13,
    feel:'Spinach stewed down with a spoon of peanut butter until rich and glossy, over rice — a traditional dish that quietly packs in protein and iron.',
    ingredients:[
      {n:'spinach',pp:80,u:'g'},
      {n:'peanut butter',pp:25,u:'g'},
      {n:'rice',pp:80,u:'g'},
      {n:'onion',pp:33,u:'g'},
      {n:'sunflower oil',pp:8,u:'ml'},
      {n:'salt & pepper'}
    ],
    method:[
      'Boil the rice in salted water until fluffy, then leave it covered off the heat.',
      'Fry the onion in the oil with a pinch of salt until soft. Add the washed, chopped spinach and let it wilt right down.',
      'Stir in the peanut butter with a splash of water and simmer 5 minutes until glossy and thick. Season well with salt and pepper, and spoon over the rice.'
    ],
    didYouKnow:'Greens cooked with peanuts or peanut butter is eaten right across the continent — the fat helps your body take up the iron in the spinach.' },

  { id:'bf-double-bean-curry', tier:'floor', basic:true, cat:'stewscurries', diet:'veg',
    name:'Double Bean Curry', emoji:'🫘', cuisine:'End-of-month', time:25, costPP:14,
    feel:'Two kinds of beans in one quick curry — soft butter beans and saucy baked beans — over rice, on the table in twenty-odd minutes.',
    ingredients:[
      {n:'baked beans',pp:100,u:'g'},
      {n:'butter beans',pp:100,u:'g'},
      {n:'rice',pp:80,u:'g'},
      {n:'onion',pp:33,u:'g'},
      {n:'sunflower oil',pp:10,u:'ml'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'Boil the rice in salted water until fluffy; cover and set aside.',
      'Fry the onion in the oil with salt until soft, add the curry powder for a minute until fragrant.',
      'Tip in the baked beans (with their sauce) and the drained butter beans, add a splash of water and simmer 8–10 minutes. Season with salt and pepper, and serve over rice.'
    ] },

  { id:'bf-egg-potato-curry', tier:'floor', basic:true, cat:'stewscurries', diet:'veg',
    name:'Egg & Potato Curry', emoji:'🥚', cuisine:'End-of-month', time:35, costPP:12,
    feel:'Halved boiled eggs simmered in a soft potato curry over pap — cheap protein made to feel like a proper Sunday.',
    ingredients:[
      {n:'eggs',pp:1,u:'egg'},
      {n:'potato',pp:125,u:'g'},
      {n:'maize meal',pp:200,u:'g'},
      {n:'onion',pp:50,u:'g'},
      {n:'sunflower oil',pp:10,u:'ml'},
      {n:'curry powder',pp:2,u:'g'},
      {n:'salt & pepper'}
    ],
    method:[
      'Hard-boil the eggs, peel and halve them. Get the pap steaming.',
      'Fry the onion in the oil with salt until soft, add the curry powder for a minute, then the diced potato and enough water to cover. Simmer until the potato is tender and the sauce thickens.',
      'Slip the egg halves in cut-side up for the last few minutes to warm through. Season with salt and pepper, and serve over pap.'
    ] }

];
if(typeof window!=='undefined'){ window.BUDGET_FLOOR_RECIPES = BUDGET_FLOOR_RECIPES; }
