// ════════════════════════════════════════════════════════════════
//  BREAKFAST RECIPE LIBRARY — seeded across the 5 locked pills
//  cat: savoury | warm | sweet | fresh | go
//  ingredient shape: {n: buy-name, pp: per-person amount, u: g|ml|egg|''}
// ════════════════════════════════════════════════════════════════
var BREAKFAST_RECIPES = [
  // ── 🍳 SAVOURY & COOKED ──
  {id:'bf-bacon-eggs', cat:'savoury', name:'Bacon & Eggs', emoji:'🍳', cuisine:'South African', time:15, costPP:26,
    feel:'The smell that pulls everyone out of bed.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'streaky bacon',pp:60,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'white bread',pp:2,u:''},{n:'butter',pp:10,u:'g'},{n:'salt & pepper'}],
    method:['Fry the bacon in a dry pan over medium heat until crisp, then set aside on paper towel.','Halve the tomatoes and fry cut-side down in the bacon fat until soft and caramelised.','Fry the eggs to your liking in the same pan.','Toast and butter the bread, plate everything together, season and serve hot.'],
    tip:'Cook the eggs last so the yolks stay runny and warm on the plate.',
    nutrition:{kcal:430,protein_g:24,carbs_g:22,fat_g:28}, storage:'Best fresh; cooked bacon keeps 2 days in the fridge.'},
  {id:'bf-shakshuka', cat:'savoury', name:'Shakshuka', emoji:'🍅', cuisine:'North African / Middle Eastern', time:25, costPP:22,
    feel:'Eggs poached in a bubbling, spiced tomato hug.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:40,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'tomato paste',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'paprika & cumin'}],
    method:['Soften the chopped onion and pepper in olive oil over medium heat, about 5 minutes.','Stir in the tomato paste, paprika and cumin, then add the chopped tomatoes. Simmer 10 minutes until thick.','Make wells in the sauce and crack in the eggs. Cover and cook until the whites set but the yolks stay soft.','Serve straight from the pan with bread for dipping.'],
    tip:'A handful of crumbled feta over the top just before serving is never a mistake.',
    nutrition:{kcal:310,protein_g:16,carbs_g:18,fat_g:20}, storage:'Sauce keeps 3 days; add fresh eggs when reheating.'},

  // ── 🥣 WARM & COMFORTING ──
  {id:'bf-creamy-oats', cat:'warm', name:'Creamy Oats', emoji:'🥣', cuisine:'Global', time:10, costPP:9,
    feel:'A warm bowl that quietly says the day can wait.',
    ingredients:[{n:'rolled oats',pp:50,u:'g'},{n:'milk',pp:250,u:'ml'},{n:'honey',pp:15,u:'g'},{n:'cinnamon'},{n:'salt'}],
    method:['Combine the oats, milk and a pinch of salt in a pot.','Cook over medium heat, stirring often, for 5 to 6 minutes until thick and creamy.','Stir through the honey and a pinch of cinnamon.','Spoon into bowls and top with fruit or a splash more milk.'],
    tip:'Swap half the milk for water if you like it lighter, or use all milk for extra creaminess.',
    nutrition:{kcal:290,protein_g:11,carbs_g:48,fat_g:7}, storage:'Keeps 2 days; loosen with milk when reheating.'},
  {id:'bf-mealie-pap', cat:'warm', name:'Mealie Pap & Milk', emoji:'🌽', cuisine:'South African', time:20, costPP:6,
    feel:'The taste of a thousand farm mornings.',
    ingredients:[{n:'maize meal',pp:60,u:'g'},{n:'water',pp:250,u:'ml'},{n:'milk',pp:120,u:'ml'},{n:'sugar',pp:10,u:'g'},{n:'salt'}],
    method:['Bring the water and a pinch of salt to the boil.','Rain in the maize meal while stirring to avoid lumps.','Turn the heat low, cover, and let it steam for 12 to 15 minutes, stirring now and then.','Serve in bowls with cold milk and a sprinkle of sugar.'],
    tip:'For stiff pap use less water; for soft breakfast pap keep it loose and pourable.',
    nutrition:{kcal:250,protein_g:6,carbs_g:52,fat_g:3}, storage:'Keeps 3 days; reheat with a splash of water.'},
  {id:'bf-banana-honey-oats', cat:'warm', name:'Banana Honey Oats', emoji:'🍌', cuisine:'Global', time:10, costPP:12,
    feel:'Soft and familiar, like breakfast made without rushing.',
    ingredients:[{n:'rolled oats',pp:60,u:'g'},{n:'milk',pp:250,u:'ml'},{n:'banana',pp:1,u:''},{n:'honey',pp:10,u:'ml'}],
    method:['Cook the oats gently in the milk over low heat, stirring, until soft and creamy.','Mash the banana into the oats as they cook.','Finish with a drizzle of honey.'],
    tip:'Use a ripe banana for natural sweetness.',
    nutrition:{kcal:320,protein_g:10,carbs_g:55,fat_g:7}, storage:'Best fresh.'},
  {id:'bf-apple-cinnamon-oats', cat:'warm', name:'Apple Cinnamon Oats', emoji:'🍎', cuisine:'Global', time:12, costPP:16,
    feel:'Warm and homely, like a pot quietly simmering on the stove.',
    ingredients:[{n:'rolled oats',pp:60,u:'g'},{n:'milk',pp:250,u:'ml'},{n:'apple',pp:1,u:''},{n:'cinnamon',pp:2,u:'g'},{n:'honey',pp:10,u:'ml'}],
    method:['Cook the oats in the milk until creamy.','Grate the apple and stir it in with the cinnamon, letting it soften.','Finish with honey.'],
    tip:'Grating the apple helps it melt into the oats.',
    nutrition:{kcal:310,protein_g:9,carbs_g:54,fat_g:6}, storage:'Best fresh.'},
  {id:'bf-mango-oats', cat:'warm', name:'Mango Oats', emoji:'🥭', cuisine:'Global', time:10, costPP:13,
    feel:'Bright and easy, like a warm breeze through an open window.',
    ingredients:[{n:'rolled oats',pp:60,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'mango',pp:100,u:'g'},{n:'honey',pp:10,u:'ml'}],
    method:['Cook the oats in the milk until soft.','Stir in the chopped mango at the end.','Finish with honey.'],
    tip:'Add the mango right at the end to keep it bright.',
    nutrition:{kcal:300,protein_g:9,carbs_g:52,fat_g:6}, storage:'Best fresh.'},

  // ── 🥐 SWEET & BAKED ──
  // (Fluffy Pancakes moved to Bakes → BAKES_RECIPES on 16 Jun — cross-link target for Hortobágyi)
  {id:'bf-french-toast', cat:'sweet', name:'Cinnamon French Toast', emoji:'🍞', cuisine:'French / Global', time:15, costPP:12,
    feel:'Day-old bread, reborn as something special.',
    ingredients:[{n:'thick white bread',pp:2,u:''},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:60,u:'ml'},{n:'sugar',pp:8,u:'g'},{n:'butter',pp:10,u:'g'},{n:'cinnamon'}],
    method:['Whisk the eggs, milk, sugar and a pinch of cinnamon in a shallow dish.','Soak each slice of bread for a few seconds per side.','Fry in butter over medium heat until golden on both sides.','Serve dusted with cinnamon sugar or a drizzle of syrup.'],
    tip:'Slightly stale bread soaks up the custard best without going soggy.',
    nutrition:{kcal:360,protein_g:13,carbs_g:44,fat_g:15}, storage:'Best fresh; eat the same morning.'},
  {id:'bf-baked-berry-oats', cat:'sweet', name:'Baked Berry Oats', emoji:'🫐', cuisine:'Global', time:25, costPP:23,
    feel:'Cosy and baked through, like something shared at a quiet table.',
    ingredients:[{n:'rolled oats',pp:60,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:150,u:'ml'},{n:'frozen berries',pp:80,u:'g'},{n:'honey',pp:10,u:'ml'}],
    method:['Mix all the ingredients together.','Pour into a small dish and bake until set and lightly golden.','Let it cool slightly before eating.'],
    tip:'Let it rest a few minutes before serving for the best texture.',
    nutrition:{kcal:340,protein_g:12,carbs_g:50,fat_g:9}, storage:'Fridge, up to 2 days.'},

  // ── 🍓 FRESH & LIGHT ──
  {id:'bf-yoghurt-granola', cat:'fresh', name:'Yoghurt & Granola Bowl', emoji:'🥛', cuisine:'Global', time:5, costPP:14,
    feel:'Cool, crunchy and bright — breakfast without the fuss.',
    ingredients:[{n:'plain yoghurt',pp:150,u:'g'},{n:'granola',pp:40,u:'g'},{n:'mixed berries',pp:60,u:'g'},{n:'honey',pp:10,u:'g'}],
    method:['Spoon the yoghurt into a bowl.','Top with granola and berries.','Drizzle with honey and serve straight away so the granola stays crunchy.'],
    tip:'Layer it in a glass jar the night before, granola on top, for a grab-and-go version.',
    nutrition:{kcal:280,protein_g:12,carbs_g:42,fat_g:8}, storage:'Assemble fresh; keep components separate.'},
  {id:'bf-avo-toast', cat:'fresh', name:'Smashed Avo Toast', emoji:'🥑', cuisine:'Global', time:8, costPP:16,
    feel:'Creamy, green and a little bit smug — in the best way.',
    ingredients:[{n:'avocado',pp:0.5,u:''},{n:'sourdough bread',pp:1,u:''},{n:'olive oil',pp:5,u:'ml'},{n:'lemon juice'},{n:'salt & pepper'},{n:'chilli flakes'}],
    method:['Toast the bread until golden.','Mash the avocado with a squeeze of lemon, salt and pepper.','Spread thickly onto the toast.','Finish with a drizzle of olive oil and a pinch of chilli flakes.'],
    tip:'A poached egg on top turns this into a proper meal.',
    nutrition:{kcal:300,protein_g:7,carbs_g:28,fat_g:19}, storage:'Best fresh; avocado browns quickly.'},
  {id:'bf-berry-bircher-oats', cat:'fresh', name:'Berry Bircher Oats', emoji:'🥣', cuisine:'Global', time:5, costPP:19,
    feel:'Cool and gentle, like an early morning before the house wakes.',
    ingredients:[{n:'rolled oats',pp:60,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'frozen berries',pp:80,u:'g'},{n:'honey',pp:10,u:'ml'}],
    method:['Combine the oats, milk, berries and honey.','Refrigerate overnight.','Stir before eating and let it soften slightly at room temperature.'],
    tip:'Stir halfway through soaking for an even texture. (Overnight — 5 min active.)',
    nutrition:{kcal:290,protein_g:9,carbs_g:50,fat_g:5}, storage:'Fridge, up to 2 days.'},

  // ── 🥤 ON THE GO ──
  {id:'bf-berry-smoothie', cat:'go', name:'Berry Banana Smoothie', emoji:'🥤', cuisine:'Global', time:5, costPP:13,
    feel:'Breakfast you can drink with one hand on the car keys.',
    ingredients:[{n:'banana',pp:0.5,u:''},{n:'mixed berries',pp:80,u:'g'},{n:'plain yoghurt',pp:80,u:'g'},{n:'milk',pp:120,u:'ml'},{n:'honey',pp:8,u:'g'}],
    method:['Add the banana, berries, yoghurt, milk and honey to a blender.','Blend until smooth, about 30 seconds.','Pour into a glass or travel bottle and go.'],
    tip:'Freeze the banana and berries first for a thicker, colder smoothie.',
    nutrition:{kcal:220,protein_g:9,carbs_g:38,fat_g:4}, storage:'Drink fresh; keeps a few hours chilled.'},
  {id:'bf-egg-wrap', cat:'go', name:'Breakfast Egg Wrap', emoji:'🌯', cuisine:'Global', time:12, costPP:18,
    feel:'A whole fry-up, rolled up and running out the door.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'tortilla wrap',pp:1,u:''},{n:'cheddar',pp:25,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'butter',pp:6,u:'g'},{n:'salt & pepper'}],
    method:['Scramble the eggs softly in butter, seasoning as you go.','Warm the tortilla in a dry pan for a few seconds.','Pile the eggs down the middle, top with grated cheddar and chopped tomato.','Roll up tightly, slice in half and go.'],
    tip:'Wrap it in foil to keep it warm and hold it together on the road.',
    nutrition:{kcal:390,protein_g:21,carbs_g:26,fat_g:22}, storage:'Best fresh; eat within a few hours.'},
];

// ════════════════════════════════════════════════════════════════
//  SUPPER RECIPE LIBRARY — seeded across the 5 locked pills
//  cat: plates | pastapizza | stewscurries | ovenbakes | roasts
// ════════════════════════════════════════════════════════════════
var SUPPER_RECIPES = [
  // ── 🍳 HOMESTYLE PLATES ──
  {id:'sp-bangers-mash', cat:'plates', diet:'meat', protein:'pork', name:'Bangers & Mash', emoji:'🌭', cuisine:'British / South African', time:35, costPP:32,
    feel:'Soft mash, sticky onion gravy — the supper that feels like a hug.',
    ingredients:[{n:'pork sausages',pp:150,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'onion',pp:60,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'frozen peas',pp:60,u:'g'}],
    method:['Boil the peeled, chopped potatoes in salted water until tender, about 15 minutes.','Meanwhile fry the sausages over medium heat until browned all over, then set aside.','Soften the sliced onion in the same pan, add the stock and simmer into a glossy gravy.','Mash the potatoes with butter and milk. Plate the mash, sausages and peas, and pour over the onion gravy.'],
    tip:'Prick the sausages once or twice so they brown evenly without bursting.',
    nutrition:{kcal:620,protein_g:26,carbs_g:52,fat_g:34}, storage:'Keeps 2 days; reheat with a splash of milk in the mash.'},
  {id:'sp-fish-chips', cat:'plates', diet:'meat', protein:'fish', name:'Fish & Chips', emoji:'🐟', cuisine:'British', time:40, costPP:46,
    feel:'Crispy batter, soft chips, a squeeze of lemon — Friday on a plate.',
    ingredients:[{n:'hake fillets',pp:160,u:'g'},{n:'potatoes',pp:280,u:'g'},{n:'cake flour',pp:50,u:'g'},{n:'sunflower oil',pp:40,u:'ml'},{n:'frozen peas',pp:70,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'salt & pepper'}],
    method:['Cut the potatoes into chips, par-boil 4 minutes, then drain and dry well.','Make a batter with the flour, a pinch of salt and enough cold water for a smooth coating.','Fry the chips in hot oil until golden, drain on paper towel and keep warm.','Dip the fish in batter and fry until crisp and golden. Serve with chips, peas and a wedge of lemon.'],
    tip:'Dry the chips thoroughly before frying — wet potatoes never go crisp.',
    nutrition:{kcal:680,protein_g:34,carbs_g:62,fat_g:32}, storage:'Best fresh; the batter softens on standing.'},

  // ── 🍝 PASTA & PIZZA ──
  {id:'sp-lasagne', cat:'pastapizza', diet:'meat', protein:'beef', name:'Beef Lasagne', emoji:'🍝', cuisine:'Italian', time:75, costPP:38,
    feel:'Layers of meaty, cheesy comfort that pull the whole table in.',
    ingredients:[{n:'lasagne sheets',pp:60,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'milk',pp:120,u:'ml'},{n:'cake flour',pp:15,u:'g'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:40,u:'g'}],
    method:['Brown the mince with the chopped onion, add the tomatoes and simmer 20 minutes into a rich ragu.','Make a white sauce: melt the butter, stir in the flour, then whisk in the milk until thick and smooth.','Layer ragu, lasagne sheets and white sauce in a dish, repeating and finishing with sauce and grated cheddar.','Bake at 180C for 35 to 40 minutes until golden. Rest 10 minutes before slicing.'],
    tip:'Let it rest before cutting so the layers hold instead of sliding apart.',
    nutrition:{kcal:590,protein_g:30,carbs_g:48,fat_g:30}, storage:'Keeps 3 days; freezes well in portions for up to 2 months.'},
  {id:'sp-spag-bol', cat:'pastapizza', diet:'meat', protein:'beef', name:'Spaghetti Bolognese', emoji:'🍝', cuisine:'Italian', time:45, costPP:34,
    feel:'The weeknight rescue everyone already knows how to twirl.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],
    method:['Soften the chopped onion, carrot and garlic in a little oil.','Add the mince and brown well, breaking up any lumps.','Stir in the tomatoes and simmer gently for 25 minutes until thick and glossy.','Cook the spaghetti, drain, and serve topped with the sauce and grated cheddar.'],
    tip:'A long, slow simmer is the whole secret — give the sauce time and it rewards you.',
    nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18}, storage:'Sauce keeps 3 days and freezes 2 months.'},

  // ── 🍛 STEWS & CURRIES ──
  {id:'sp-capemalay-curry', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Cape Malay Chicken Curry', emoji:'🍛', cuisine:'Cape Malay', time:55, costPP:36,
    feel:'Warm, gently spiced and fragrant — the smell that fills the whole house.',
    ingredients:[{n:'chicken pieces',pp:180,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'potatoes',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the sliced onion in oil until soft and golden.','Stir in the curry powder and cook a minute until fragrant.','Add the chicken, tomatoes and potatoes with a little water, cover and simmer 35 minutes until tender.','Cook the rice separately and serve the curry spooned over the top.'],
    tip:'Toast the curry powder in the oil first — it wakes up all the spice.',
    nutrition:{kcal:560,protein_g:32,carbs_g:58,fat_g:20}, storage:'Even better next day; keeps 3 days, freezes 2 months.'},
  {id:'sp-beef-stew', cat:'stewscurries', diet:'meat', protein:'beef', name:'Beef Stew', emoji:'🥘', cuisine:'South African', time:120, costPP:42,
    feel:'Low, slow and unhurried — a pot that quietly looks after you.',
    ingredients:[{n:'beef stewing meat',pp:160,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'cake flour',pp:10,u:'g'}],
    method:['Toss the beef in seasoned flour and brown in batches in a heavy pot.','Add the onion and soften, then pour in the stock and scrape the base.','Add the carrots and potatoes, cover, and simmer gently 1.5 to 2 hours until the beef is fork-tender.','Check the seasoning and serve with bread or over rice or pap.'],
    tip:'Brown the meat properly first — that colour is where the deep flavour lives.',
    nutrition:{kcal:480,protein_g:34,carbs_g:34,fat_g:22}, storage:'Improves overnight; keeps 3 days, freezes 3 months.'},

  // ── 🥧 PIES & OVEN BAKES ──
  {id:'sp-cottage-pie', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Cottage Pie', emoji:'🥧', cuisine:'British', time:65, costPP:34,
    feel:'A golden mash lid over savoury mince — proper comfort food.',
    ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:20,u:'g'}],
    method:['Brown the mince with the chopped onion and carrot.','Add the stock and peas and simmer until thickened, then spoon into an oven dish.','Boil and mash the potatoes with butter, and spread over the mince.','Top with grated cheddar and bake at 190C for 25 to 30 minutes until golden.'],
    tip:'Rough up the mash with a fork before baking for extra crispy peaks.',
    nutrition:{kcal:560,protein_g:26,carbs_g:52,fat_g:28}, storage:'Keeps 3 days; assembles ahead and freezes 2 months.'},
  {id:'sp-chicken-pie', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Chicken & Mushroom Pie', emoji:'🥧', cuisine:'British', time:60, costPP:40,
    feel:'Flaky pastry giving way to a creamy, savoury filling.',
    ingredients:[{n:'chicken fillets',pp:140,u:'g'},{n:'puff pastry',pp:80,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'onion',pp:40,u:'g'},{n:'milk',pp:80,u:'ml'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:12,u:'g'}],
    method:['Cook the diced chicken, onion and sliced mushrooms in butter until just done.','Stir in the flour, then the milk, and simmer into a creamy sauce. Season and cool slightly.','Spoon into a pie dish and top with the rolled-out puff pastry, sealing the edges.','Brush with a little milk and bake at 200C for 25 to 30 minutes until puffed and golden.'],
    tip:'Cut a small slit in the pastry lid so steam escapes and the top stays crisp.',
    nutrition:{kcal:520,protein_g:30,carbs_g:34,fat_g:28}, storage:'Keeps 2 days; best reheated in the oven to re-crisp the pastry.'},

  // ── 🍗 ROASTS ──
  {id:'sp-roast-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Roast Chicken & Veg', emoji:'🍗', cuisine:'Global', time:90, costPP:38,
    feel:'The Sunday smell that means everyone comes to the table on time.',
    ingredients:[{n:'whole chicken',pp:280,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'mixed herbs'},{n:'salt & pepper'}],
    method:['Rub the chicken with oil, salt, pepper and herbs and place in a roasting tin.','Surround with the potatoes, carrots and onion, tossed in a little oil.','Roast at 190C, allowing roughly 45 minutes per kilogram plus 20 minutes, until the juices run clear.','Rest the chicken 10 minutes before carving, and serve with the roast veg.'],
    tip:'Rest the bird before carving so the juices settle back into the meat.',
    nutrition:{kcal:610,protein_g:42,carbs_g:38,fat_g:30}, storage:'Keeps 3 days; leftovers are gold for sandwiches and soup.'},
  {id:'sp-roast-beef', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Roast Beef', emoji:'🥩', cuisine:'British', time:110, costPP:56,
    feel:'A proper centrepiece — pink in the middle, everyone crowding the carving board.',
    ingredients:[{n:'beef roasting joint',pp:180,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'beef stock',pp:100,u:'ml'},{n:'salt & pepper'}],
    method:['Bring the beef to room temperature, rub with oil, salt and pepper, and sear all over in a hot pan.','Transfer to a roasting tin with the veg and roast at 200C, about 15 minutes per 500g for medium.','Rest the beef under foil 15 minutes while you make gravy from the pan juices and stock.','Carve thinly across the grain and serve with the roast veg and gravy.'],
    tip:'A meat thermometer removes the guesswork — about 55C for medium-rare.',
    nutrition:{kcal:560,protein_g:40,carbs_g:32,fat_g:28}, storage:'Keeps 3 days; slice cold for the best roast-beef sandwiches.'},

  // ── 🍳 HOMESTYLE PLATES — added 22 Jun (Supper build, Batch 1) ──
  {id:'sp-tuscan-chicken', cat:'plates', diet:'meat', protein:'chicken', name:'Creamy Tuscan Chicken', emoji:'🐔', cuisine:'Italian-inspired', time:30, costPP:38,
    feel:'Golden chicken in a creamy sun-dried tomato and spinach sauce — special enough for a celebration, easy enough for a Tuesday.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'sun-dried tomatoes',pp:25,u:'g'},{n:'baby spinach',pp:40,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'chicken stock',pp:60,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Season the chicken and sear in oil until golden on both sides, then set aside.','Soften the garlic, add the sun-dried tomatoes and stock and let it bubble.','Stir in the cream and parmesan to make a glossy sauce.','Return the chicken, add the spinach and simmer until wilted and the chicken is cooked through.','Serve over rice, pasta or with crusty bread.'],
    tip:'A splash of the sun-dried tomato oil in place of plain oil deepens the flavour.',
    nutrition:{kcal:520,protein_g:42,carbs_g:10,fat_g:34}, storage:'Keeps 2 days; the sauce thickens, so loosen with a little milk when reheating.'},
  {id:'sp-honey-garlic-chicken', cat:'plates', diet:'meat', protein:'chicken', name:'Sticky Honey-Garlic Chicken & Rice', emoji:'🍗', cuisine:'Asian-inspired', time:30, costPP:32,
    feel:'Sticky, sweet and garlicky chicken over fluffy rice — the kind of supper kids ask for by name.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'honey',pp:20,u:'g'},{n:'soy sauce',pp:20,u:'ml'},{n:'garlic',pp:10,u:'g'},{n:'ginger',pp:5,u:'g'},{n:'rice',pp:75,u:'g'},{n:'spring onion',pp:10,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the bite-sized chicken in a hot pan until golden.','Add the garlic and ginger and fry until fragrant.','Pour in the honey and soy and let it bubble into a sticky glaze that coats the chicken.','Cook the rice separately.','Serve the chicken over rice, scattered with spring onion.'],
    tip:'Let the glaze reduce until it clings — that is what makes it sticky rather than saucy.',
    nutrition:{kcal:540,protein_g:34,carbs_g:62,fat_g:16}, storage:'Keeps 3 days; reheats well, add a splash of water to loosen the glaze.'},
  {id:'sp-bunny-chow', cat:'plates', diet:'meat', protein:'lamb', name:'Durban Bunny Chow', emoji:'🍛', cuisine:'South African', time:60, costPP:42,
    feel:'Durban street food at its finest — a hollowed half-loaf filled with rich, fragrant lamb curry.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'potato',pp:80,u:'g'},{n:'white bread',pp:0.5,u:'loaf'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb, then soften the onion with the garlic, ginger and curry powder.','Add the tomato and a little water and simmer until it forms a thick masala.','Add the potato and cook gently until the lamb is tender and the gravy is rich, about 45 minutes.','Hollow out a half-loaf of bread to make a bowl.','Spoon the curry into the bread and top with the soft centre you pulled out.'],
    tip:'Keep the curry thick so it does not soak through the bread too fast.',
    nutrition:{kcal:680,protein_g:32,carbs_g:70,fat_g:30}, storage:'Make the curry ahead (keeps 3 days, freezes well) and fill the bread fresh.'},
  {id:'sp-steak-bites-mash', cat:'plates', diet:'meat', protein:'beef', name:'Garlic Butter Steak Bites & Mash', emoji:'🥩', cuisine:'Steakhouse', time:30, costPP:52,
    feel:'Seared steak bites tossed in garlic butter, piled on buttery mash — a steakhouse supper at home.',
    ingredients:[{n:'rump steak',pp:150,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'butter',pp:25,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'fresh parsley',pp:3,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Boil the peeled potatoes until tender, then mash with butter and milk until smooth.','Cut the steak into cubes and sear in a screaming-hot pan in batches so they brown rather than stew.','Lower the heat, add the butter, garlic and parsley and toss the bites to coat.','Pile the steak bites on the mash and spoon over the garlic butter from the pan.'],
    tip:'Pat the steak very dry and do not crowd the pan — that is the secret to a deep crust.',
    nutrition:{kcal:620,protein_g:38,carbs_g:40,fat_g:34}, storage:'Best fresh; mash keeps 2 days.'},
  {id:'sp-sloppy-joes', cat:'plates', diet:'meat', protein:'beef', name:'Sloppy Joes', emoji:'🍔', cuisine:'American', time:25, costPP:30,
    feel:'Saucy, sweet-and-savoury mince piled into a soft bun — gloriously messy and ready in 25 minutes.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'onion',pp:50,u:'g'},{n:'green pepper',pp:40,u:'g'},{n:'tomato sauce',pp:40,u:'g'},{n:'Worcestershire sauce',pp:8,u:'ml'},{n:'brown sugar',pp:5,u:'g'},{n:'burger buns',pp:1,u:'each'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the onion and green pepper, breaking it up well.','Stir in the tomato sauce, Worcestershire and a little sugar and simmer until thick and glossy.','Season to taste.','Spoon the saucy mince into toasted buns and eat with plenty of napkins.'],
    tip:'A spoon of mustard or a dash of chilli lifts the sauce out of the ordinary.',
    nutrition:{kcal:480,protein_g:26,carbs_g:42,fat_g:22}, storage:'Mince keeps 3 days; fill buns fresh.'},
  {id:'sp-beef-stroganoff', cat:'plates', diet:'meat', protein:'beef', name:'Mushroom Beef Stroganoff', emoji:'🍄', cuisine:'Russian-inspired', time:35, costPP:44,
    feel:'Tender strips of beef and mushrooms in a creamy, tangy sauce over ribbons of pasta or rice.',
    ingredients:[{n:'beef strips',pp:140,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'sour cream',pp:40,u:'ml'},{n:'beef stock',pp:100,u:'ml'},{n:'paprika',pp:3,u:'g'},{n:'flour',pp:8,u:'g'},{n:'tagliatelle',pp:75,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Sear the beef strips quickly over high heat and set aside.','Soften the onion and mushrooms, dust with flour and paprika, then pour in the stock to make a sauce.','Stir in the sour cream and return the beef, warming through gently without boiling.','Serve over tagliatelle or rice.'],
    tip:'Add the beef back at the very end so it stays tender — long cooking toughens the strips.',
    nutrition:{kcal:560,protein_g:34,carbs_g:44,fat_g:28}, storage:'Keeps 2 days; reheat gently so the cream does not split.'},
  {id:'sp-chicken-a-la-king', cat:'plates', diet:'meat', protein:'chicken', name:'Chicken a la King', emoji:'🥘', cuisine:'Retro classic', time:30, costPP:34,
    feel:'Creamy chicken, mushrooms and peppers in a velvety sauce — a retro favourite that never goes out of style.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'green pepper',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'chicken stock',pp:120,u:'ml'},{n:'flour',pp:12,u:'g'},{n:'butter',pp:18,u:'g'},{n:'rice',pp:75,u:'g'}],
    method:['Soften the onion, mushrooms and pepper in the butter.','Stir in the flour, then slowly add the stock to make a smooth sauce.','Add the cooked diced chicken and the cream and simmer until thick and velvety.','Serve over rice or on hot buttered toast.'],
    tip:'A spoon of sherry or a squeeze of lemon brightens the whole dish.',
    nutrition:{kcal:500,protein_g:32,carbs_g:38,fat_g:24}, storage:'Keeps 2 days; loosen with milk when reheating.'},
  {id:'sp-crispy-salmon', cat:'plates', diet:'meat', protein:'fish', name:'Crispy Salmon, Lemon Butter', emoji:'🐟', cuisine:'Global', time:25, costPP:58,
    feel:'Crisp-skinned salmon under a glossy lemon-butter sauce — restaurant-special, weeknight-easy.',
    ingredients:[{n:'salmon fillet',pp:150,u:'g'},{n:'butter',pp:20,u:'g'},{n:'lemon',pp:20,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'green beans',pp:80,u:'g'},{n:'oil',pp:8,u:'ml'}],
    method:['Boil the baby potatoes and steam the beans until just tender.','Pat the salmon dry and fry skin-side down in a hot pan, pressing gently, until the skin is crisp, then flip briefly.','Lift out the salmon and add the butter, garlic and a squeeze of lemon to the pan to make a quick sauce.','Plate the salmon with the potatoes and beans and spoon over the lemon butter.'],
    tip:'Do not move the salmon while the skin crisps — let it release on its own.',
    nutrition:{kcal:580,protein_g:40,carbs_g:30,fat_g:34}, storage:'Best fresh.'},
  {id:'sp-texmex-beef-bowl', cat:'plates', diet:'meat', protein:'beef', name:'Loaded Tex-Mex Beef Bowl', emoji:'🌮', cuisine:'Tex-Mex', time:30, costPP:40,
    feel:'A loaded bowl of spiced beef, rice, beans, corn and all the toppings — build-your-own supper the whole family loves.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'rice',pp:75,u:'g'},{n:'tinned beans',pp:60,u:'g'},{n:'sweetcorn',pp:40,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'taco spice',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the taco spices until rich and fragrant.','Warm the beans and cook the rice.','Build bowls with rice at the base, then the spiced beef, beans, corn and chopped tomato.','Top with grated cheddar and anything else you love — salsa, avo or a dollop of sour cream.'],
    tip:'Set the toppings out in bowls and let everyone build their own.',
    nutrition:{kcal:600,protein_g:30,carbs_g:68,fat_g:22}, storage:'Components keep 3 days; build fresh.'},
  {id:'sp-beef-broccoli', cat:'plates', diet:'meat', protein:'beef', name:'Beef & Broccoli Stir-fry Bowl', emoji:'🥦', cuisine:'Chinese-inspired', time:25, costPP:42,
    feel:'Glossy strips of beef and crisp-tender broccoli in a savoury stir-fry sauce — faster than the takeaway.',
    ingredients:[{n:'beef strips',pp:140,u:'g'},{n:'broccoli',pp:100,u:'g'},{n:'soy sauce',pp:20,u:'ml'},{n:'garlic',pp:8,u:'g'},{n:'ginger',pp:5,u:'g'},{n:'cornflour',pp:6,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Toss the beef strips in a little cornflour and sear quickly in a hot wok, then set aside.','Stir-fry the broccoli with the garlic and ginger until bright green.','Add the soy and a splash of water, return the beef and toss until everything is coated in a glossy sauce.','Serve over steamed rice.'],
    tip:'High heat and a hot pan are everything — stir-fry fast so the beef stays tender and the broccoli stays crunchy.',
    nutrition:{kcal:520,protein_g:32,carbs_g:58,fat_g:18}, storage:'Keeps 2 days; reheat in a hot pan to keep the texture.'},
  {id:'sp-spinach-mushroom-gnocchi', cat:'plates', diet:'veg', protein:'veg', name:'Creamy Spinach & Mushroom Gnocchi', emoji:'🥟', cuisine:'Italian-inspired', time:25, costPP:30,
    feel:'Pillowy gnocchi in a creamy garlic, mushroom and spinach sauce — a meat-free supper that still feels indulgent.',
    ingredients:[{n:'gnocchi',pp:180,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:15,u:'g'}],
    method:['Pan-fry the gnocchi in a little butter until golden on the edges, then set aside.','Soften the garlic and mushrooms in the same pan.','Add the cream and parmesan and let it bubble into a sauce, then stir in the spinach until wilted.','Fold the gnocchi back through and serve.'],
    tip:'Frying the gnocchi instead of just boiling gives lovely crisp, golden edges.',
    nutrition:{kcal:480,protein_g:14,carbs_g:60,fat_g:22}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-vetkoek-mince', cat:'plates', diet:'meat', protein:'beef', name:'Vetkoek & Curried Mince', emoji:'🫓', cuisine:'South African', time:50, costPP:28,
    feel:'Golden fried vetkoek split and stuffed with rich curried mince — an SA classic that feeds a family for next to nothing.',
    ingredients:[{n:'cake flour',pp:80,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'sugar',pp:5,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'oil for frying',pp:30,u:'ml'}],
    method:['Mix the flour, yeast, sugar, a pinch of salt and warm water into a soft dough and let it rise until doubled, about 40 minutes.','Brown the mince with the onion and curry powder, add the tomato and simmer into a thick curry.','Shape the dough into balls and deep-fry in medium-hot oil until golden and cooked through.','Split the warm vetkoek and spoon in the curried mince.'],
    tip:'Keep the oil at a steady medium heat so the vetkoek cooks through without burning outside.',
    nutrition:{kcal:560,protein_g:22,carbs_g:64,fat_g:24}, storage:'Mince keeps 3 days; vetkoek best fresh and warm.'},

  // ── 🍝 PASTA & PIZZA — added 22 Jun (Supper build, Batch 2) ──
  {id:'sp-mac-cheese', cat:'pastapizza', diet:'veg', protein:'veg', name:'Creamy Mac & Cheese', emoji:'🧀', cuisine:'American', time:30, costPP:24,
    feel:'Elbow macaroni smothered in a silky three-cheese sauce, baked until golden and bubbling.',
    ingredients:[{n:'macaroni',pp:90,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'flour',pp:20,u:'g'},{n:'mozzarella',pp:20,u:'g'},{n:'mustard powder',pp:1,u:'g'}],
    method:['Cook the macaroni until just tender and drain.','Melt the butter, stir in the flour, then whisk in the milk to make a smooth white sauce.','Off the heat, stir in the cheddar and mustard until glossy.','Fold through the macaroni, top with mozzarella and grill or bake until golden and bubbling.'],
    tip:'A pinch of mustard powder makes the cheese taste cheesier without adding heat.',
    nutrition:{kcal:560,protein_g:22,carbs_g:58,fat_g:26}, storage:'Keeps 3 days; reheat with a splash of milk.'},
  {id:'sp-spag-meatballs', cat:'pastapizza', diet:'meat', protein:'beef', name:'Spaghetti & Meatballs', emoji:'🍝', cuisine:'Italian-American', time:40, costPP:38,
    feel:'Tender beef meatballs simmered in a rich tomato sauce, piled on spaghetti and showered with parmesan.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'spaghetti',pp:80,u:'g'},{n:'tomato',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'breadcrumbs',pp:15,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Mix the mince with breadcrumbs, garlic and seasoning and roll into balls.','Brown the meatballs all over, then set aside.','Soften the onion, add the tomato and simmer into a rich sauce.','Return the meatballs and simmer until cooked through.','Serve over spaghetti with parmesan.'],
    tip:'Brown the meatballs first for flavour, then let them finish cooking gently in the sauce.',
    nutrition:{kcal:600,protein_g:32,carbs_g:62,fat_g:24}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-chicken-alfredo', cat:'pastapizza', diet:'meat', protein:'chicken', name:'Creamy Chicken Alfredo', emoji:'🍝', cuisine:'Italian-American', time:30, costPP:40,
    feel:'Silky parmesan cream sauce clinging to fettuccine with golden strips of chicken.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'fettuccine',pp:80,u:'g'},{n:'cream',pp:60,u:'ml'},{n:'parmesan',pp:25,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Cook the fettuccine until just tender.','Sear the sliced chicken in butter until golden, then add the garlic.','Pour in the cream and parmesan and simmer into a glossy sauce.','Toss the pasta through with a splash of pasta water to loosen.','Serve at once with extra parmesan.'],
    tip:'A ladle of starchy pasta water makes the sauce silky and helps it cling.',
    nutrition:{kcal:640,protein_g:38,carbs_g:56,fat_g:30}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-tuna-pasta-bake', cat:'pastapizza', diet:'meat', protein:'fish', name:'Cheesy Tuna Pasta Bake', emoji:'🐟', cuisine:'Family classic', time:35, costPP:30,
    feel:'Creamy tuna and pasta under a golden cheese crust, the ultimate pantry-friendly comfort bake.',
    ingredients:[{n:'pasta',pp:90,u:'g'},{n:'tinned tuna',pp:80,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'sweetcorn',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Cook the pasta until just tender.','Make a white sauce with the butter, flour and milk, then stir in half the cheese.','Fold in the drained tuna, corn and pasta.','Tip into a dish, top with the rest of the cheese and bake at 180C until golden and bubbling.'],
    tip:'A handful of crushed crisps or breadcrumbs on top gives extra crunch.',
    nutrition:{kcal:540,protein_g:30,carbs_g:60,fat_g:20}, storage:'Keeps 3 days; reheats well.'},
  {id:'sp-margherita-pizza', cat:'pastapizza', diet:'veg', protein:'veg', name:'Margherita Pizza', emoji:'🍕', cuisine:'Italian', time:30, costPP:26,
    feel:'A blistered base, sweet tomato sauce, melting mozzarella and fresh basil — simple perfection.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:60,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Spread the base with passata mixed with crushed garlic.','Tear over the mozzarella.','Bake in the hottest oven you have until the crust is crisp and the cheese is bubbling.','Finish with fresh basil and a drizzle of olive oil.'],
    tip:'A very hot oven and a preheated tray give you that crisp, blistered base at home.',
    nutrition:{kcal:580,protein_g:22,carbs_g:72,fat_g:22}, storage:'Best fresh.'},
  {id:'sp-pepperoni-pizza', cat:'pastapizza', diet:'meat', protein:'pork', name:'Pepperoni Pizza', emoji:'🍕', cuisine:'Italian-American', time:30, costPP:34,
    feel:'Crisp base, gooey cheese and curls of spicy pepperoni — the pizza everyone reaches for.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:60,u:'g'},{n:'pepperoni',pp:40,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Spread the base with passata and a pinch of oregano.','Cover with mozzarella and arrange the pepperoni on top.','Bake in a very hot oven until the crust is golden and the pepperoni edges crisp and cup.','Slice and serve hot.'],
    tip:'Letting the pepperoni edges crisp into little cups is half the joy — do not bury it under cheese.',
    nutrition:{kcal:660,protein_g:28,carbs_g:72,fat_g:30}, storage:'Best fresh.'},
  {id:'sp-prawn-linguine', cat:'pastapizza', diet:'meat', protein:'fish', name:'Garlic Prawn Linguine', emoji:'🦐', cuisine:'Italian', time:25, costPP:56,
    feel:'Juicy prawns tossed with garlic, chilli, lemon and linguine — a coastal supper in 25 minutes.',
    ingredients:[{n:'prawns',pp:120,u:'g'},{n:'linguine',pp:80,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'chilli',pp:2,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'butter',pp:10,u:'g'}],
    method:['Cook the linguine until just tender.','Sizzle the garlic and chilli in oil and butter, then add the prawns and cook until just pink.','Add a squeeze of lemon and a splash of pasta water.','Toss the linguine through with the parsley and serve.'],
    tip:'Do not overcook the prawns — they are done the moment they turn pink and curl.',
    nutrition:{kcal:560,protein_g:32,carbs_g:64,fat_g:18}, storage:'Best fresh.'},
  {id:'sp-cannelloni', cat:'pastapizza', diet:'veg', protein:'veg', name:'Spinach & Ricotta Cannelloni', emoji:'🥬', cuisine:'Italian', time:50, costPP:34,
    feel:'Pasta tubes stuffed with creamy spinach and ricotta, blanketed in tomato sauce and melted cheese.',
    ingredients:[{n:'cannelloni tubes',pp:90,u:'g'},{n:'ricotta',pp:80,u:'g'},{n:'baby spinach',pp:60,u:'g'},{n:'tomato passata',pp:120,u:'g'},{n:'mozzarella',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Wilt the spinach, squeeze dry and mix with the ricotta and parmesan.','Spoon the filling into the cannelloni tubes.','Lay them in a dish over a little passata, cover with the rest of the passata and the mozzarella.','Bake at 180C until bubbling and the pasta is tender, about 30 minutes.'],
    tip:'Use a piping bag or a small spoon and a steady hand to fill the tubes without splitting them.',
    nutrition:{kcal:520,protein_g:24,carbs_g:56,fat_g:22}, storage:'Keeps 3 days; freezes well before baking.'},
  {id:'sp-pesto-chicken-pasta', cat:'pastapizza', diet:'meat', protein:'chicken', name:'Pesto Chicken Pasta', emoji:'🌿', cuisine:'Italian-inspired', time:25, costPP:38,
    feel:'Fragrant basil pesto coating pasta with golden chicken and bursts of cherry tomato.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'pasta',pp:80,u:'g'},{n:'basil pesto',pp:30,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cook the pasta until just tender, saving a little water.','Sear the sliced chicken in oil until golden.','Add the cherry tomatoes and warm until they soften.','Toss through the pasta, pesto and a splash of pasta water to make it glossy.','Finish with parmesan.'],
    tip:'Stir the pesto in off the heat so it stays fresh and green rather than dulling.',
    nutrition:{kcal:580,protein_g:36,carbs_g:54,fat_g:26}, storage:'Keeps 2 days; lovely cold as a pasta salad.'},
  {id:'sp-cajun-pasta', cat:'pastapizza', diet:'meat', protein:'chicken', name:'One-Pan Cajun Chicken & Sausage Pasta', emoji:'🌶️', cuisine:'Cajun', time:35, costPP:42,
    feel:'Smoky Cajun chicken and sausage in a creamy tomato sauce with pasta cooked right in the pan.',
    ingredients:[{n:'chicken breast',pp:100,u:'g'},{n:'sausage',pp:50,u:'g'},{n:'pasta',pp:80,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'Cajun spice',pp:6,u:'g'},{n:'chicken stock',pp:200,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the chicken and sliced sausage with the Cajun spice, then set aside.','Soften the onion, add the tomato, stock and pasta and simmer until the pasta is tender and the liquid reduced.','Stir in the cream and return the meat.','Simmer briefly into a glossy one-pan sauce.'],
    tip:'Cooking the pasta in the sauce means one pan and a richer flavour — just stir so it does not stick.',
    nutrition:{kcal:620,protein_g:34,carbs_g:64,fat_g:26}, storage:'Keeps 3 days; loosen with stock when reheating.'},
  {id:'sp-carbonara', cat:'pastapizza', diet:'meat', protein:'pork', name:'Spaghetti Carbonara', emoji:'🥓', cuisine:'Italian', time:25, costPP:36,
    feel:'Silky egg-and-parmesan sauce coating spaghetti with crisp bacon — no cream, just the real thing.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'bacon',pp:60,u:'g'},{n:'eggs',pp:1.5,u:'each'},{n:'parmesan',pp:30,u:'g'},{n:'black pepper',pp:2,u:'g'},{n:'garlic',pp:4,u:'g'}],
    method:['Cook the spaghetti until just tender, saving a mug of pasta water.','Fry the chopped bacon until crisp.','Beat the eggs with the parmesan and plenty of black pepper.','Off the heat, toss the hot drained pasta with the bacon, then the egg mixture, loosening with pasta water into a silky sauce.','Serve at once.'],
    tip:'Take the pan off the heat before adding the eggs, or you get scrambled egg instead of a silky sauce.',
    nutrition:{kcal:620,protein_g:30,carbs_g:64,fat_g:28}, storage:'Best fresh, eat straight away.'},
  {id:'sp-feta-tomato-pasta', cat:'pastapizza', diet:'veg', protein:'veg', name:'Baked Feta & Tomato Pasta', emoji:'🧀', cuisine:'Mediterranean', time:35, costPP:30,
    feel:'A whole block of feta baked with sweet cherry tomatoes until creamy, then tossed into pasta — the famous viral one.',
    ingredients:[{n:'feta',pp:70,u:'g'},{n:'cherry tomatoes',pp:120,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'fresh basil',pp:4,u:'g'}],
    method:['Put the feta in the middle of a dish, surround with cherry tomatoes and garlic, drizzle with oil and bake at 200C until the tomatoes burst and the feta is soft, about 25 minutes.','Cook the pasta meanwhile.','Mash the feta and tomatoes into a creamy sauce.','Fold through the pasta with fresh basil.'],
    tip:'Let the tomatoes blister and collapse — that sweetness is what makes the sauce.',
    nutrition:{kcal:540,protein_g:18,carbs_g:66,fat_g:22}, storage:'Keeps 2 days; nice cold too.'},
  {id:'sp-pumpkin-sage-pasta', cat:'pastapizza', diet:'veg', protein:'veg', name:'Creamy Pumpkin & Sage Rigatoni', emoji:'🎃', cuisine:'Italian-inspired', time:35, costPP:28,
    feel:'Velvety roasted pumpkin and crispy sage in a creamy sauce — autumn comfort in a bowl.',
    ingredients:[{n:'pumpkin',pp:150,u:'g'},{n:'rigatoni',pp:90,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'fresh sage',pp:3,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:15,u:'g'}],
    method:['Roast the cubed pumpkin until soft and caramelised, then mash or blend with a little pasta water into a smooth puree.','Crisp the sage in the butter.','Toss the cooked rigatoni with the pumpkin puree, cream and parmesan, loosening with pasta water.','Finish with the crispy sage.'],
    tip:'Roasting the pumpkin rather than boiling it gives a deeper, sweeter flavour.',
    nutrition:{kcal:520,protein_g:16,carbs_g:70,fat_g:20}, storage:'Keeps 2 days.'},
  {id:'sp-bbq-chicken-pizza', cat:'pastapizza', diet:'meat', protein:'chicken', name:'BBQ Chicken Pizza', emoji:'🍕', cuisine:'American', time:30, costPP:38,
    feel:'Smoky barbecue sauce, tender chicken, red onion and melted cheese on a crisp base.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:80,u:'g'},{n:'mozzarella',pp:60,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'fresh coriander',pp:4,u:'g'}],
    method:['Spread the base with barbecue sauce.','Scatter over the cooked shredded chicken, thinly sliced red onion and mozzarella.','Bake in a very hot oven until the crust is crisp and the cheese bubbling.','Finish with fresh coriander.'],
    tip:'Use leftover roast or rotisserie chicken to make this a 20-minute supper.',
    nutrition:{kcal:640,protein_g:34,carbs_g:74,fat_g:22}, storage:'Best fresh.'},

  // ── 🍛 STEWS, CURRIES & ONE-POTS — added 22 Jun (Supper build, Batch 3) ──
  {id:'sp-lamb-bredie', cat:'stewscurries', diet:'meat', protein:'lamb', name:'Lamb Tomato Bredie', emoji:'🍲', cuisine:'South African', time:120, costPP:48,
    feel:'Slow-braised lamb in a rich tomato and onion stew — an Afrikaans Sunday classic that only gets better with time.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'tomato',pp:150,u:'g'},{n:'onion',pp:80,u:'g'},{n:'potato',pp:100,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb in batches and set aside.','Soften the onion, then add the tomato, garlic and a pinch of sugar and cook into a thick base.','Return the lamb with the stock, cover and simmer gently for 1.5 hours until tender.','Add the potato for the last 30 minutes and cook until the lamb is falling apart and the gravy is rich.'],
    tip:'Low and slow is everything — the bredie should barely bubble.',
    nutrition:{kcal:520,protein_g:34,carbs_g:30,fat_g:28}, storage:'Keeps 3 days, even better the next day; freezes well.'},
  {id:'sp-butter-chicken', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Butter Chicken', emoji:'🐔', cuisine:'Indian', time:45, costPP:44,
    feel:'Tender chicken in a velvety tomato, butter and cream sauce — mild, rich and utterly moreish.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'}],
    method:['Marinate the chicken in yoghurt, ginger-garlic and half the masala for 30 minutes, then sear and set aside.','Soften the onion in butter, add the tomato and remaining masala and simmer into a smooth sauce (blend for silkiness).','Return the chicken, stir in the cream and simmer gently until cooked through and glossy.','Serve with rice or naan.'],
    tip:'Blending the sauce before adding the cream gives that signature silky texture.',
    nutrition:{kcal:560,protein_g:36,carbs_g:16,fat_g:38}, storage:'Keeps 3 days; freezes well without the cream.'},
  {id:'sp-chicken-tikka-masala', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Chicken Tikka Masala', emoji:'🍛', cuisine:'Indian', time:45, costPP:44,
    feel:'Charred spiced chicken in a creamy, fragrant tomato masala — the takeaway favourite made at home.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:7,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Marinate the chicken in yoghurt, ginger-garlic and spices, then grill or pan-char until just cooked and set aside.','Soften the onion, add the tomato and masala and simmer into a rich sauce.','Stir in the cream and the charred chicken and warm through.','Finish with coriander and serve with rice.'],
    tip:'Char the marinated chicken hard before saucing — that smoky edge is what sets tikka masala apart.',
    nutrition:{kcal:540,protein_g:38,carbs_g:18,fat_g:32}, storage:'Keeps 3 days.'},
  {id:'sp-chicken-tinga', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Mexican Chicken Tinga', emoji:'🌮', cuisine:'Mexican', time:35, costPP:36,
    feel:'Smoky shredded chicken in a chipotle-tomato sauce — pile it into tacos, bowls or quesadillas.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Poach or pan-cook the chicken, then shred.','Blend the tomato, onion, garlic and smoked paprika into a smoky sauce.','Simmer the sauce until thickened, then fold in the shredded chicken and a splash of stock.','Cook until rich and coating, then serve in tacos, bowls or over rice with a dollop of yoghurt.'],
    tip:'Chipotle in adobo gives the truest smoky heat, but smoked paprika and a little chilli works too.',
    nutrition:{kcal:420,protein_g:34,carbs_g:14,fat_g:24}, storage:'Keeps 4 days; freezes brilliantly.'},
  {id:'sp-chorizo-hake-orzo', cat:'stewscurries', diet:'meat', protein:'fish', name:'Spanish Chorizo & Hake Orzo', emoji:'🐟', cuisine:'Spanish', time:40, costPP:50,
    feel:'Smoky chorizo, flaky hake and orzo cooked together in one pan — an impressive midweek showstopper.',
    ingredients:[{n:'hake fillet',pp:120,u:'g'},{n:'chorizo',pp:40,u:'g'},{n:'orzo',pp:80,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the sliced chorizo until its oil runs, then soften the onion with the paprika.','Stir in the orzo, tomato and stock and simmer until the orzo is almost tender.','Nestle the hake fillets on top, cover and cook until the fish flakes and the orzo is creamy.','Finish with parsley and lemon.'],
    tip:'Let the chorizo render its smoky oil first — that flavours everything that follows.',
    nutrition:{kcal:560,protein_g:36,carbs_g:58,fat_g:22}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-chicken-cacciatore', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Chicken Cacciatore', emoji:'🍗', cuisine:'Italian', time:50, costPP:42,
    feel:'Italian hunter-style chicken braised with tomatoes, peppers and olives — rustic and freezer-friendly.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'red pepper',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olives',pp:20,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the chicken thighs skin-side down until golden, then set aside.','Soften the onion, pepper and garlic.','Add the tomato, stock and olives and bring to a simmer.','Return the chicken, cover and braise gently for 30 minutes until tender and the sauce is rich. Serve with crusty bread or polenta.'],
    tip:'Browning the chicken skin first builds a deep, savoury base for the braise.',
    nutrition:{kcal:480,protein_g:34,carbs_g:16,fat_g:30}, storage:'Keeps 3 days; freezes brilliantly.'},
  {id:'sp-lamb-guinness-stew', cat:'stewscurries', diet:'meat', protein:'lamb', name:'Lamb & Guinness Stew', emoji:'🍺', cuisine:'Irish', time:130, costPP:50,
    feel:'Lamb slow-braised in dark stout until meltingly tender, with carrots and a deep, savoury gravy.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'stout',pp:80,u:'ml'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:70,u:'g'},{n:'potato',pp:100,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'flour',pp:10,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Toss the lamb in seasoned flour and brown in batches.','Soften the onion, then return the lamb with the stout, stock, carrots and potato.','Cover and braise low and slow for about 2 hours until the lamb is spoon-tender and the gravy thick.','Serve with creamy mash and peas.'],
    tip:'No need to pre-fry everything — the long, gentle braise does the work.',
    nutrition:{kcal:560,protein_g:34,carbs_g:36,fat_g:28}, storage:'Keeps 3 days, better the next day; freezes well.'},
  {id:'sp-trini-pelau', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Trinidadian Pelau', emoji:'🍚', cuisine:'Caribbean', time:50, costPP:40,
    feel:'Caribbean one-pot of caramel-browned chicken, rice, peas and coconut milk — sweet, savoury and warming.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'rice',pp:75,u:'g'},{n:'pigeon peas',pp:50,u:'g'},{n:'coconut milk',pp:80,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'sugar',pp:8,u:'g'},{n:'fresh thyme',pp:2,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Caramelise the sugar in hot oil until dark, then add the chicken and brown it in the caramel.','Stir in the onion, peas, rice, coconut milk, thyme and enough water to cook the rice.','Cover and simmer until the rice is tender and the liquid absorbed.','Rest, then fluff and serve.'],
    tip:'Burning the sugar to a deep caramel before adding the chicken gives pelau its colour and signature flavour.',
    nutrition:{kcal:580,protein_g:28,carbs_g:66,fat_g:22}, storage:'Keeps 2 days; reheat with a splash of water.'},
  {id:'sp-seafood-risotto', cat:'stewscurries', diet:'meat', protein:'fish', name:'Seafood Risotto', emoji:'🦐', cuisine:'Italian', time:40, costPP:60,
    feel:'Creamy, slow-stirred risotto studded with prawns and mussels — a comforting coastal classic.',
    ingredients:[{n:'arborio rice',pp:75,u:'g'},{n:'mixed seafood',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'fish stock',pp:300,u:'ml'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:20,u:'g'},{n:'garlic',pp:6,u:'g'}],
    method:['Soften the onion and garlic in butter, then toast the rice for a minute.','Add the wine and let it absorb.','Add the hot stock a ladle at a time, stirring, until the rice is creamy and just tender.','Stir in the seafood for the last few minutes until just cooked. Finish with parmesan and butter.'],
    tip:'Add the stock gradually and keep stirring — that slow coaxing is what makes risotto creamy.',
    nutrition:{kcal:540,protein_g:30,carbs_g:64,fat_g:16}, storage:'Best fresh; risotto does not keep well.'},
  {id:'sp-bombay-egg-potato', cat:'stewscurries', diet:'veg', protein:'veg', name:'Bombay Egg & Potato Curry', emoji:'🥔', cuisine:'Indian', time:35, costPP:22,
    feel:'Soft-boiled eggs and potatoes in a spiced tomato curry — a quick store-cupboard supper full of flavour.',
    ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Boil the eggs and potatoes until just done.','Fry the onion with the curry powder, turmeric and garlic-ginger until fragrant.','Add the tomato and a splash of water and simmer into a sauce.','Add the potatoes and halved eggs and warm through gently. Finish with coriander and serve with rice or roti.'],
    tip:'This is the supper to make when the cupboard looks bare — it is built on pantry staples.',
    nutrition:{kcal:380,protein_g:16,carbs_g:42,fat_g:16}, storage:'Keeps 2 days; add the eggs fresh if you can.'},
  {id:'sp-coconut-chickpea-curry', cat:'stewscurries', diet:'vegan', protein:'veg', name:'Coconut Chickpea Curry', emoji:'🥥', cuisine:'Indian-inspired', time:30, costPP:24,
    feel:'Chickpeas and spinach simmered in a creamy coconut-tomato sauce — a vegan curry that satisfies everyone.',
    ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Fry the onion with the curry powder and garlic-ginger until fragrant.','Add the tomato and cook into a sauce.','Pour in the coconut milk and chickpeas and simmer until thick and creamy.','Stir in the spinach until wilted and serve with rice or roti.'],
    tip:'A squeeze of lime at the end lifts the whole curry.',
    nutrition:{kcal:400,protein_g:14,carbs_g:44,fat_g:20}, storage:'Keeps 4 days; freezes well; flavours deepen overnight.'},
  {id:'sp-dhal', cat:'stewscurries', diet:'vegan', protein:'veg', name:'Lentil & Spinach Dhal', emoji:'🌱', cuisine:'Indian', time:35, costPP:18,
    feel:'Golden lentils simmered soft with spices and spinach — humble, nourishing and deeply comforting.',
    ingredients:[{n:'red lentils',pp:80,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'cumin seeds',pp:2,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Rinse the lentils and simmer with turmeric and water until soft and collapsing.','Fry the onion, cumin and garlic-ginger in oil until fragrant (the tarka), then stir into the lentils with the tomato.','Add the spinach and cook until wilted.','Season well and serve with rice or roti.'],
    tip:'Pouring a sizzling spiced tarka over the dhal at the end wakes up all the flavour.',
    nutrition:{kcal:340,protein_g:18,carbs_g:50,fat_g:8}, storage:'Keeps 4 days; thickens as it sits, loosen with water.'},
  {id:'sp-chilli-con-carne', cat:'stewscurries', diet:'meat', protein:'beef', name:'Beef Chilli con Carne', emoji:'🌶️', cuisine:'Tex-Mex', time:45, costPP:32,
    feel:'Rich, smoky beef chilli with beans and a hint of dark chocolate — perfect with rice or a baked potato.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'kidney beans',pp:60,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'chilli spice',pp:6,u:'g'},{n:'dark chocolate',pp:5,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the onion, breaking it up well.','Add the spices and cook until fragrant.','Stir in the tomato, beans and stock and simmer for 30 minutes until rich and thick.','Melt in a square of dark chocolate for depth. Serve over rice, with a baked potato, or in tacos.'],
    tip:'A little dark chocolate or cocoa rounds out the chilli without making it sweet.',
    nutrition:{kcal:460,protein_g:28,carbs_g:38,fat_g:22}, storage:'Keeps 4 days; even better reheated; freezes well.'},
  {id:'sp-thai-green-curry', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Thai Green Chicken Curry', emoji:'🥥', cuisine:'Thai', time:30, costPP:40,
    feel:'Fragrant coconut green curry with chicken, green beans and basil — aromatic and ready in 30 minutes.',
    ingredients:[{n:'chicken breast',pp:140,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'green curry paste',pp:20,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'baby marrow',pp:40,u:'g'},{n:'fish sauce',pp:8,u:'ml'},{n:'fresh basil',pp:4,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the green curry paste in a little oil until fragrant.','Pour in the coconut milk and bring to a gentle simmer.','Add the sliced chicken and vegetables and simmer until cooked through.','Season with fish sauce and a pinch of sugar. Finish with fresh basil and serve with jasmine rice.'],
    tip:'Frying the curry paste first blooms the spices and deepens the flavour.',
    nutrition:{kcal:480,protein_g:32,carbs_g:18,fat_g:32}, storage:'Keeps 3 days.'},
  {id:'sp-moroccan-tagine', cat:'stewscurries', diet:'meat', protein:'lamb', name:'Moroccan Lamb & Apricot Tagine', emoji:'🍑', cuisine:'Moroccan', time:120, costPP:50,
    feel:'Lamb slow-cooked with warm spices, sweet apricots and chickpeas — fragrant, tender and special.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'dried apricots',pp:30,u:'g'},{n:'chickpeas',pp:60,u:'g'},{n:'onion',pp:60,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'ras el hanout',pp:5,u:'g'},{n:'stock',pp:200,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb and set aside.','Soften the onion with the spices until fragrant.','Return the lamb with the tomato, apricots, chickpeas and stock.','Cover and simmer very gently for about 1.5 hours until the lamb is tender and the sauce is rich and lightly sweet. Serve with couscous.'],
    tip:'The apricots melt into the sauce and balance the spice with gentle sweetness.',
    nutrition:{kcal:540,protein_g:32,carbs_g:38,fat_g:28}, storage:'Keeps 3 days; freezes well; better the next day.'},
  {id:'sp-chicken-pilau', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Chicken Pilau', emoji:'🍚', cuisine:'Indian', time:50, costPP:38,
    feel:'Fragrant basmati cooked with spiced chicken and whole spices — the lighter, everyday cousin of biryani.',
    ingredients:[{n:'chicken thighs',pp:140,u:'g'},{n:'basmati rice',pp:75,u:'g'},{n:'onion',pp:60,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'whole spices (cinnamon, cardamom, clove, bay)',pp:1,u:'pinch'},{n:'garam masala',pp:5,u:'g'},{n:'chicken stock',pp:150,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the chicken with the onion and whole spices until golden.','Add the ginger-garlic and garam masala and cook until fragrant.','Stir in the rinsed rice and coat in the spices.','Pour in the stock, cover and cook on low until the rice is fluffy and the chicken tender. Rest, then fluff and serve with sambals.'],
    tip:'Unlike biryani, pilau cooks everything together in one pot — simpler and quicker for a weeknight.',
    nutrition:{kcal:520,protein_g:28,carbs_g:62,fat_g:18}, storage:'Keeps 2 days; reheat covered with a splash of water.'},

  // ── 🥧 OVEN BAKES & ROASTS — added 22 Jun (Supper build, Batch 4) ──
  {id:'sp-bobotie', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Classic Bobotie', emoji:'🍛', cuisine:'South African', time:75, costPP:38,
    feel:'Curried mince baked under a golden savoury custard — sweet, spiced and unmistakably South African.',
    ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'bread',pp:15,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'chutney',pp:15,u:'g'},{n:'raisins',pp:15,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Soak the bread in some of the milk.','Fry the onion and curry powder, then add the mince, chutney, raisins and soaked bread and cook until rich.','Press into a dish and tuck in bay leaves.','Beat the egg with the remaining milk and turmeric, pour over the top and bake at 180C until the custard is set and golden, about 35 minutes. Serve with yellow rice and chutney.'],
    tip:'The chutney and raisins give bobotie its signature sweet-savoury balance — do not skip them.',
    nutrition:{kcal:520,protein_g:28,carbs_g:36,fat_g:28}, storage:'Keeps 3 days; reheats beautifully.'},
  {id:'sp-pork-belly', cat:'ovenbakes', diet:'meat', protein:'pork', name:'Slow-Roast Pork Belly & Crackling', emoji:'🐖', cuisine:'Global', time:180, costPP:46,
    feel:'Hours of slow roasting give meltingly soft pork under shatteringly crisp crackling.',
    ingredients:[{n:'pork belly',pp:180,u:'g'},{n:'salt',pp:3,u:'g'},{n:'fennel seeds',pp:2,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'onion',pp:60,u:'g'},{n:'apple',pp:50,u:'g'}],
    method:['Score the pork skin, rub with salt and spice and leave uncovered in the fridge to dry.','Roast low at 160C for about 2.5 hours until the meat is tender.','Blast the heat to 230C for the last 20 minutes to crisp the crackling.','Roast the potatoes and onion alongside. Rest, then carve and serve with apple sauce.'],
    tip:'A dry skin is the secret to crackling — pat it bone-dry and salt it well ahead.',
    nutrition:{kcal:680,protein_g:32,carbs_g:28,fat_g:48}, storage:'Keeps 3 days; crackling is best fresh.'},
  {id:'sp-fish-pie', cat:'ovenbakes', diet:'meat', protein:'fish', name:'Creamy Fish Pie', emoji:'🥧', cuisine:'British', time:50, costPP:44,
    feel:'Flaky fish in a creamy sauce under a fluffy golden mash topping — ultimate comfort food.',
    ingredients:[{n:'white fish',pp:120,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:25,u:'g'}],
    method:['Poach the fish gently in the milk, then lift out and flake, reserving the milk.','Make a white sauce with the butter, flour and poaching milk.','Fold in the fish and peas and spread in a dish.','Top with mash and a little cheese and bake at 190C until golden and bubbling.'],
    tip:'Use a mix of fish — smoked and white — for the most flavourful pie.',
    nutrition:{kcal:560,protein_g:32,carbs_g:50,fat_g:26}, storage:'Keeps 2 days; freezes well before baking.'},
  {id:'sp-nacho-bake', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Tex-Mex Beef Nacho Bake', emoji:'🌮', cuisine:'Tex-Mex', time:40, costPP:38,
    feel:'Spiced beef and beans layered with tortilla chips and melted cheese, baked into a loaded nacho feast.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'tortilla chips',pp:50,u:'g'},{n:'tinned beans',pp:60,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'taco spice',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the onion and taco spices, then stir in the tomato and beans and simmer into a thick chilli.','Layer tortilla chips, the beef and grated cheese in a dish.','Bake at 180C until the cheese is melted and bubbling.','Top with avo, salsa and a dollop of sour cream.'],
    tip:'Add the chips just before baking so they melt under the cheese but keep some bite.',
    nutrition:{kcal:600,protein_g:28,carbs_g:52,fat_g:32}, storage:'Best fresh; the chips soften on keeping.'},
  {id:'sp-moussaka', cat:'ovenbakes', diet:'meat', protein:'lamb', name:'Greek Lamb Moussaka', emoji:'🍆', cuisine:'Greek', time:75, costPP:46,
    feel:'Layers of spiced lamb, soft aubergine and a creamy bechamel, baked golden — Greece on a plate.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'aubergine',pp:120,u:'g'},{n:'potato',pp:100,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'},{n:'cheddar',pp:25,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Fry slices of aubergine and potato until golden.','Cook the lamb mince with onion, tomato and a pinch of cinnamon into a rich ragu.','Make a bechamel with the butter, flour and milk.','Layer potato, aubergine and lamb in a dish, top with bechamel and cheese and bake at 180C until golden, about 35 minutes.'],
    tip:'Let it rest 15 minutes before cutting so the layers hold together.',
    nutrition:{kcal:620,protein_g:30,carbs_g:38,fat_g:38}, storage:'Keeps 3 days; better the next day.'},
  {id:'sp-shepherds-pie', cat:'ovenbakes', diet:'meat', protein:'lamb', name:'Shepherd\'s Pie', emoji:'🐑', cuisine:'British', time:60, costPP:40,
    feel:'Savoury lamb mince and veg under a golden mashed-potato crust — true cottage comfort.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'flour',pp:8,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Brown the lamb with the onion and carrots.','Stir in the flour, then the stock and peas and simmer into a rich gravy.','Spread in a dish and top with buttery mash, roughing up the surface with a fork.','Bake at 190C until the top is golden and crisp.'],
    tip:'Rough up the mash with a fork — those peaks crisp up beautifully in the oven.',
    nutrition:{kcal:560,protein_g:28,carbs_g:48,fat_g:28}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-chicken-bacon-bake', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Loaded Chicken & Bacon Pasta Bake', emoji:'🧀', cuisine:'Family classic', time:45, costPP:42,
    feel:'Creamy chicken, crispy bacon and pasta under a blanket of melted cheese — a guaranteed family win.',
    ingredients:[{n:'chicken breast',pp:120,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chicken stock',pp:100,u:'ml'}],
    method:['Cook the pasta until just tender.','Sear the chicken and crisp the bacon, then soften the onion and garlic.','Add the cream and stock and simmer into a sauce, then fold in the pasta, chicken and bacon.','Tip into a dish, top with cheese and bake at 180C until golden and bubbling.'],
    tip:'Save some crispy bacon to scatter on top after baking for extra crunch.',
    nutrition:{kcal:660,protein_g:38,carbs_g:58,fat_g:32}, storage:'Keeps 3 days; reheats well.'},
  {id:'sp-stuffed-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Creamy Spinach & Feta Stuffed Chicken', emoji:'🐔', cuisine:'Mediterranean', time:40, costPP:44,
    feel:'Chicken breasts stuffed with creamy spinach and feta, baked until juicy and golden.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'feta',pp:40,u:'g'},{n:'cream cheese',pp:30,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'baby potatoes',pp:180,u:'g'}],
    method:['Wilt the spinach and mix with the feta, cream cheese and garlic.','Cut a pocket in each chicken breast and stuff with the mixture.','Sear to colour, then bake at 190C with the potatoes until the chicken is cooked through and juicy.','Spoon over the pan juices to serve.'],
    tip:'Secure the pocket with a toothpick so the filling stays put while it bakes.',
    nutrition:{kcal:540,protein_g:44,carbs_g:26,fat_g:30}, storage:'Keeps 2 days.'},
  {id:'sp-thai-peanut-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Thai Peanut Chicken Casserole', emoji:'🥜', cuisine:'Thai-inspired', time:45, costPP:38,
    feel:'Chicken baked in a creamy coconut-peanut sauce — mild, nutty and a little bit different.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'peanut butter',pp:25,u:'g'},{n:'rice',pp:75,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'soy sauce',pp:10,u:'ml'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'lime',pp:10,u:'g'}],
    method:['Whisk the coconut milk, peanut butter, soy and garlic-ginger into a sauce.','Place the chicken and peppers in a dish, pour over the sauce.','Bake at 180C until the chicken is tender and the sauce thickened, about 35 minutes.','Finish with lime and coriander and serve over rice.'],
    tip:'A squeeze of lime at the end cuts through the richness of the peanut sauce.',
    nutrition:{kcal:620,protein_g:34,carbs_g:56,fat_g:30}, storage:'Keeps 3 days.'},
  {id:'sp-cowboy-bake', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Cowboy Bean & Beef Bake', emoji:'🫘', cuisine:'American', time:50, costPP:34,
    feel:'Smoky beef and beans topped with sliced potato and cheese — hearty, rib-sticking and easy.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'baked beans',pp:100,u:'g'},{n:'potato',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'smoky spice',pp:5,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the onion and smoky spice.','Stir in the tomato and baked beans and simmer briefly.','Tip into a dish and layer thinly sliced potato over the top.','Scatter with cheese and bake at 180C until the potato is tender and the top golden.'],
    tip:'Slice the potatoes thinly so they cook through and crisp at the edges.',
    nutrition:{kcal:580,protein_g:28,carbs_g:54,fat_g:28}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-honey-mustard-traybake', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Honey-Mustard Chicken Traybake', emoji:'🍯', cuisine:'Global', time:50, costPP:36,
    feel:'Chicken, potatoes and veg roasted together in a sticky honey-mustard glaze — one tray, no fuss.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'honey',pp:15,u:'g'},{n:'wholegrain mustard',pp:12,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olive oil',pp:12,u:'ml'}],
    method:['Whisk the honey, mustard, garlic and oil into a glaze.','Toss the chicken, potatoes and carrots in the glaze and spread on a tray.','Roast at 200C, turning once, until the chicken is golden and sticky and the veg tender, about 40 minutes.'],
    tip:'Spread everything in a single layer so it roasts and caramelises instead of steaming.',
    nutrition:{kcal:540,protein_g:32,carbs_g:48,fat_g:24}, storage:'Keeps 3 days; great cold in lunchboxes.'},
  {id:'sp-med-baked-fish', cat:'ovenbakes', diet:'meat', protein:'fish', name:'Mediterranean Baked Fish', emoji:'🐟', cuisine:'Mediterranean', time:35, costPP:46,
    feel:'White fish baked over tomatoes, olives and peppers — light, fresh and full of sunshine.',
    ingredients:[{n:'white fish',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'red pepper',pp:60,u:'g'},{n:'olives',pp:20,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'olive oil',pp:15,u:'ml'}],
    method:['Soften the onion, pepper and garlic in oil, then add the tomato and olives and cook into a chunky sauce.','Spoon into a dish, lay the fish on top and drizzle with oil and lemon.','Bake at 190C until the fish flakes easily, about 18 minutes.','Serve with crusty bread or couscous.'],
    tip:'Bake the fish on top of the sauce so it stays moist and soaks up the flavour.',
    nutrition:{kcal:420,protein_g:34,carbs_g:18,fat_g:22}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-halloumi-veg-bake', cat:'ovenbakes', diet:'veg', protein:'veg', name:'Roasted Veg & Halloumi Bake', emoji:'🧀', cuisine:'Mediterranean', time:40, costPP:32,
    feel:'Sweet roasted vegetables and golden halloumi baked together — a hearty meat-free tray supper.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'baby marrow',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:50,u:'g'},{n:'cherry tomatoes',pp:80,u:'g'},{n:'chickpeas',pp:60,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'oregano',pp:2,u:'g'}],
    method:['Toss the chopped vegetables and chickpeas with oil and oregano and roast at 200C for 20 minutes.','Add cubes of halloumi and roast another 12 to 15 minutes until the veg is tender and the halloumi golden.','Finish with a squeeze of lemon and serve with couscous or bread.'],
    tip:'Add the halloumi partway through so it turns golden without going rubbery.',
    nutrition:{kcal:460,protein_g:20,carbs_g:34,fat_g:28}, storage:'Keeps 2 days; nice cold too.'},

  // ── 🍔 FRIED & GRILLED — added 22 Jun (Supper build, Batch 5 / final) ──
  {id:'sp-smash-burger', cat:'friedgrilled', diet:'meat', protein:'beef', name:'Smash Burger with Burger Sauce', emoji:'🍔', cuisine:'American', time:25, costPP:42,
    feel:'Thin beef patties smashed crisp on the pan, stacked with cheese and a tangy burger sauce.',
    ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'burger bun',pp:1,u:'each'},{n:'cheddar slice',pp:20,u:'g'},{n:'onion',pp:30,u:'g'},{n:'mayo',pp:15,u:'g'},{n:'tomato sauce',pp:10,u:'g'},{n:'lettuce',pp:15,u:'g'},{n:'oil',pp:8,u:'ml'}],
    method:['Roll the mince into loose balls.','Smash flat onto a screaming-hot pan and sear until crusty, then flip and melt cheese on top.','Mix the mayo and tomato sauce into a burger sauce.','Toast the buns and build with sauce, lettuce, onion and the patty.'],
    tip:'Do not move the patty until it is deeply crusted — that crust is the whole point of a smash burger.',
    nutrition:{kcal:640,protein_g:34,carbs_g:38,fat_g:38}, storage:'Best fresh, straight off the pan.'},
  {id:'sp-buttermilk-chicken', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Crispy Buttermilk Fried Chicken', emoji:'🍗', cuisine:'American', time:75, costPP:40,
    feel:'Chicken soaked in spiced buttermilk and fried in a craggy, golden crust — proper soul-food crunch.',
    ingredients:[{n:'chicken pieces',pp:180,u:'g'},{n:'buttermilk',pp:100,u:'ml'},{n:'flour',pp:60,u:'g'},{n:'paprika',pp:4,u:'g'},{n:'garlic powder',pp:3,u:'g'},{n:'oil for frying',pp:40,u:'ml'}],
    method:['Soak the chicken in seasoned buttermilk for at least an hour.','Dredge in seasoned flour, pressing it on for a craggy coating.','Fry in hot oil, turning, until deep golden and cooked through.','Drain on a rack and season with salt.'],
    tip:'Let the coated chicken rest a few minutes before frying so the crust sets and stays put.',
    nutrition:{kcal:620,protein_g:38,carbs_g:36,fat_g:34}, storage:'Best fresh; crisps up again in a hot oven.'},
  {id:'sp-korean-chicken', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Korean Sticky Fried Chicken', emoji:'🔥', cuisine:'Korean', time:45, costPP:42,
    feel:'Double-fried crispy chicken tossed in a sticky-sweet gochujang glaze — addictive Korean street food.',
    ingredients:[{n:'chicken pieces',pp:170,u:'g'},{n:'cornflour',pp:40,u:'g'},{n:'gochujang',pp:20,u:'g'},{n:'honey',pp:15,u:'g'},{n:'soy sauce',pp:12,u:'ml'},{n:'garlic',pp:8,u:'g'},{n:'sesame seeds',pp:3,u:'g'},{n:'oil for frying',pp:40,u:'ml'}],
    method:['Coat the chicken in cornflour and fry until crisp, then rest and fry a second time until extra crunchy.','Simmer the gochujang, honey, soy and garlic into a glossy glaze.','Toss the hot chicken in the glaze.','Finish with sesame seeds and spring onion.'],
    tip:'Frying twice is the Korean secret to a shell that stays crunchy under the sticky sauce.',
    nutrition:{kcal:600,protein_g:34,carbs_g:48,fat_g:28}, storage:'Best fresh; the glaze softens the crust on keeping.'},
  {id:'sp-pulled-pork-roll', cat:'friedgrilled', diet:'meat', protein:'pork', name:'Pulled Pork Roll & Fries', emoji:'🐖', cuisine:'American', time:190, costPP:46,
    feel:'Slow-cooked pork pulled into smoky shreds, piled on a soft roll with slaw and crispy fries.',
    ingredients:[{n:'pork shoulder',pp:180,u:'g'},{n:'soft roll',pp:1,u:'each'},{n:'bbq sauce',pp:30,u:'g'},{n:'smoky spice rub',pp:5,u:'g'},{n:'coleslaw',pp:50,u:'g'},{n:'potato fries',pp:150,u:'g'}],
    method:['Rub the pork with the spice and slow-roast at 150C until it pulls apart easily, about 3 hours.','Shred and toss with bbq sauce.','Bake or fry the chips until golden.','Pile the pork and slaw into the roll and serve with the fries.'],
    tip:'Low and slow is non-negotiable — the pork is ready only when it shreds with two forks.',
    nutrition:{kcal:720,protein_g:36,carbs_g:64,fat_g:34}, storage:'Pulled pork keeps 3 days and freezes well.'},
  {id:'sp-fish-cakes', cat:'friedgrilled', diet:'meat', protein:'fish', name:'Crispy Fish Cakes with Tartare', emoji:'🐟', cuisine:'British', time:40, costPP:38,
    feel:'Golden, crunchy fish cakes with a soft potato centre, served with a zingy tartare sauce.',
    ingredients:[{n:'white fish',pp:120,u:'g'},{n:'potato',pp:120,u:'g'},{n:'egg',pp:1,u:'each'},{n:'breadcrumbs',pp:40,u:'g'},{n:'spring onion',pp:15,u:'g'},{n:'mayo',pp:25,u:'g'},{n:'gherkin',pp:10,u:'g'},{n:'lemon',pp:10,u:'g'},{n:'oil',pp:20,u:'ml'}],
    method:['Flake cooked fish into mashed potato with spring onion and seasoning, then shape into cakes.','Coat in egg and breadcrumbs.','Fry until golden and crisp on both sides.','Stir gherkin and lemon into the mayo for tartare and serve alongside.'],
    tip:'Chill the shaped cakes for 20 minutes before frying so they hold together in the pan.',
    nutrition:{kcal:480,protein_g:26,carbs_g:44,fat_g:22}, storage:'Keeps 2 days; freezes well crumbed before frying.'},
  {id:'sp-beef-fajitas', cat:'friedgrilled', diet:'meat', protein:'beef', name:'Beef Fajitas', emoji:'🥙', cuisine:'Tex-Mex', time:30, costPP:44,
    feel:'Sizzling strips of spiced beef and peppers wrapped in warm tortillas — bring the pan to the table.',
    ingredients:[{n:'beef steak',pp:150,u:'g'},{n:'tortillas',pp:2,u:'each'},{n:'red pepper',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'fajita spice',pp:6,u:'g'},{n:'lime',pp:10,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Slice the beef and toss with fajita spice.','Sear hard and fast in a screaming-hot pan, then set aside.','Char the peppers and onion in the same pan.','Pile beef and veg back together with a squeeze of lime and serve with warm tortillas and toppings.'],
    tip:'Get the pan smoking hot so the beef chars rather than stews.',
    nutrition:{kcal:560,protein_g:34,carbs_g:46,fat_g:26}, storage:'Best fresh; filling keeps 2 days.'},
  {id:'sp-chicken-quesadillas', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Chicken Quesadillas', emoji:'🫓', cuisine:'Tex-Mex', time:25, costPP:36,
    feel:'Crispy golden tortillas stuffed with spiced chicken and melting cheese — quick, cheesy, crowd-pleasing.',
    ingredients:[{n:'chicken breast',pp:120,u:'g'},{n:'tortillas',pp:2,u:'each'},{n:'cheddar',pp:50,u:'g'},{n:'red pepper',pp:40,u:'g'},{n:'onion',pp:30,u:'g'},{n:'taco spice',pp:5,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Cook the spiced chicken with the pepper and onion and shred or chop.','Scatter chicken and cheese over one tortilla, top with another.','Toast in a dry pan, pressing down, until golden and the cheese melts.','Flip once, then cut into wedges and serve with salsa.'],
    tip:'Keep the heat moderate so the cheese melts fully before the tortilla burns.',
    nutrition:{kcal:540,protein_g:32,carbs_g:44,fat_g:26}, storage:'Best fresh; reheats in a dry pan.'},
  {id:'sp-chicken-schnitzel', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Crunchy Chicken Schnitzel', emoji:'🐔', cuisine:'Global', time:30, costPP:38,
    feel:'Chicken flattened thin and crumbed into a wide, crunchy golden schnitzel — a family favourite.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'flour',pp:30,u:'g'},{n:'egg',pp:1,u:'each'},{n:'breadcrumbs',pp:50,u:'g'},{n:'lemon',pp:10,u:'g'},{n:'oil',pp:25,u:'ml'}],
    method:['Flatten the chicken between sheets of plastic until thin and even.','Dust in flour, dip in egg, then press into breadcrumbs.','Shallow-fry in hot oil until deep golden and cooked through.','Drain and serve with a wedge of lemon.'],
    tip:'Bashing the chicken thin and even means it cooks fast and stays juicy under the crumb.',
    nutrition:{kcal:560,protein_g:40,carbs_g:38,fat_g:26}, storage:'Keeps 2 days; crisps up in a hot oven.'},
  {id:'sp-chilli-dogs', cat:'friedgrilled', diet:'meat', protein:'pork', name:'Loaded Chilli Dogs', emoji:'🌭', cuisine:'American', time:30, costPP:34,
    feel:'Grilled hot dogs smothered in beef chilli, cheese and onions — messy, indulgent and so good.',
    ingredients:[{n:'hot dog sausages',pp:2,u:'each'},{n:'hot dog rolls',pp:2,u:'each'},{n:'beef mince',pp:80,u:'g'},{n:'tomato',pp:50,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'onion',pp:30,u:'g'},{n:'chilli spice',pp:4,u:'g'}],
    method:['Simmer the mince with tomato and chilli spice into a thick chilli.','Grill or fry the sausages until lightly charred.','Tuck a sausage into each roll, spoon over the chilli and top with cheese and onion.','Flash under the grill to melt the cheese.'],
    tip:'Pile the chilli on generously and melt the cheese under the grill for the full loaded effect.',
    nutrition:{kcal:640,protein_g:28,carbs_g:52,fat_g:36}, storage:'Best fresh; chilli keeps 3 days.'},
  {id:'sp-boerewors-roll', cat:'friedgrilled', diet:'meat', protein:'beef', name:'Boerewors Roll & Relish', emoji:'🥖', cuisine:'South African', time:25, costPP:32,
    feel:'A coil of spiced boerewors grilled over the coals, tucked into a roll with sweet tomato-onion relish.',
    ingredients:[{n:'boerewors',pp:150,u:'g'},{n:'hot dog roll',pp:1,u:'each'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:60,u:'g'},{n:'sugar',pp:5,u:'g'},{n:'chutney',pp:10,u:'g'},{n:'oil',pp:8,u:'ml'}],
    method:['Grill the boerewors over medium coals or a hot pan, turning, until cooked through and lightly charred.','Fry the onion and tomato with a little sugar into a sticky relish.','Tuck the wors into the roll and pile the relish on top.'],
    tip:'Do not prick the wors — keep the casing intact so it stays juicy on the grill.',
    nutrition:{kcal:620,protein_g:26,carbs_g:44,fat_g:38}, storage:'Relish keeps 5 days; grill the wors fresh.'},
  {id:'sp-peri-peri-chicken', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Peri-Peri Flame-Grilled Chicken', emoji:'🌶️', cuisine:'South African', time:75, costPP:40,
    feel:'Butterflied chicken marinated in fiery peri-peri and flame-grilled until charred and juicy.',
    ingredients:[{n:'chicken (flattened)',pp:200,u:'g'},{n:'peri-peri chilli',pp:8,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'paprika',pp:4,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Blend the chilli, garlic, lemon, paprika and oil into a peri-peri marinade.','Butterfly the chicken flat and coat in the marinade for at least an hour.','Grill over medium coals or in a hot griddle, basting, until charred and cooked through.','Rest and serve with extra sauce.'],
    tip:'Butterflying the chicken flat helps it cook evenly and pick up maximum char.',
    nutrition:{kcal:520,protein_g:44,carbs_g:6,fat_g:34}, storage:'Marinate up to a day ahead; grill fresh.'},
  {id:'sp-lamb-sosaties', cat:'friedgrilled', diet:'meat', protein:'lamb', name:'Lamb Sosaties', emoji:'🍢', cuisine:'South African', time:60, costPP:48,
    feel:'Cape-Malay lamb skewers marinated in a sweet curried apricot sauce and grilled over the coals.',
    ingredients:[{n:'lamb',pp:160,u:'g'},{n:'dried apricots',pp:30,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'apricot jam',pp:15,u:'g'},{n:'vinegar',pp:8,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Make a marinade of curried onion, apricot jam and vinegar and coat the lamb cubes overnight.','Thread the lamb onto skewers with apricots and onion.','Grill over medium coals, turning and basting, until caramelised and just cooked.','Serve with yellow rice.'],
    tip:'An overnight soak in the curried marinade is what gives sosaties their deep sweet-spiced flavour.',
    nutrition:{kcal:480,protein_g:30,carbs_g:26,fat_g:28}, storage:'Marinate up to a day ahead; grill fresh.'},
  {id:'sp-halloumi-burger', cat:'friedgrilled', diet:'veg', protein:'veg', name:'Halloumi & Avo Burger', emoji:'🥑', cuisine:'Mediterranean', time:20, costPP:36,
    feel:'Golden grilled halloumi and creamy avo stacked in a burger — a meat-free stack that satisfies.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'burger bun',pp:1,u:'each'},{n:'avocado',pp:60,u:'g'},{n:'tomato',pp:30,u:'g'},{n:'lettuce',pp:15,u:'g'},{n:'sweet chilli sauce',pp:15,u:'g'},{n:'oil',pp:8,u:'ml'}],
    method:['Slice the halloumi thick and grill or fry until golden on both sides.','Mash or slice the avo.','Toast the bun and spread with sweet chilli.','Stack the halloumi, avo, tomato and lettuce in the bun.'],
    tip:'Grill the halloumi just before serving — it is best hot and golden, before it firms up.',
    nutrition:{kcal:560,protein_g:22,carbs_g:44,fat_g:34}, storage:'Best fresh; grill the halloumi to order.'},
  {id:'sp-tofu-bean-burger', cat:'friedgrilled', diet:'vegan', protein:'veg', name:'Crispy Tofu Bean Burger', emoji:'🌱', cuisine:'Global', time:35, costPP:30,
    feel:'A hearty bean-and-tofu patty fried crisp and stacked in a burger — a properly satisfying vegan stack.',
    ingredients:[{n:'firm tofu',pp:80,u:'g'},{n:'tinned beans',pp:80,u:'g'},{n:'breadcrumbs',pp:30,u:'g'},{n:'burger bun',pp:1,u:'each'},{n:'onion',pp:30,u:'g'},{n:'spice mix',pp:4,u:'g'},{n:'vegan mayo',pp:20,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Mash the beans with crumbled tofu, onion, spices and breadcrumbs and shape into a patty.','Fry in oil until crisp and golden on both sides.','Toast the bun and spread with vegan mayo.','Stack the patty with lettuce, tomato and onion.'],
    tip:'Chill the patty before frying so it holds its shape in the pan.',
    nutrition:{kcal:480,protein_g:20,carbs_g:56,fat_g:20}, storage:'Patties keep 3 days; freeze well uncooked.'},
  {id:'sp-birria-tacos', cat:'friedgrilled', diet:'meat', protein:'beef', name:'Beef Birria Tacos', emoji:'🌮', cuisine:'Mexican', time:150, costPP:48,
    feel:'Chilli-braised beef stuffed into tortillas, griddled crisp and served with a rich dipping broth.',
    ingredients:[{n:'beef',pp:160,u:'g'},{n:'dried chillies',pp:8,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'tortillas',pp:2,u:'each'},{n:'cheddar',pp:40,u:'g'},{n:'beef stock',pp:200,u:'ml'}],
    method:['Braise the beef with blended chilli, tomato, garlic and stock until meltingly tender, then shred.','Dip tortillas in the red braising fat, fill with beef and cheese and griddle until crisp.','Serve with a bowl of the strained broth for dipping.'],
    tip:'Dipping the tortilla in the red braising fat before griddling is what makes birria tacos special.',
    nutrition:{kcal:620,protein_g:36,carbs_g:40,fat_g:34}, storage:'Braised beef keeps 4 days and freezes well.'},
  {id:'sp-gatsby', cat:'friedgrilled', diet:'meat', protein:'beef', name:'Cape Town Gatsby', emoji:'🥪', cuisine:'South African', time:35, costPP:42,
    feel:'A giant Cape Town sub roll loaded with masala steak, hot chips and tangy sauce — built to share.',
    ingredients:[{n:'beef steak',pp:150,u:'g'},{n:'long roll',pp:1,u:'each'},{n:'potato chips',pp:150,u:'g'},{n:'lettuce',pp:30,u:'g'},{n:'tomato',pp:30,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'masala spice',pp:6,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Season the steak with masala and sear hard, then slice.','Fry the chips until golden.','Split a long roll and layer in lettuce, the steak, chips and tomato.','Drizzle generously with peri-peri sauce, then cut into sharing portions.'],
    tip:'Putting the hot chips inside the roll is the Cape Town way — do not leave them out.',
    nutrition:{kcal:780,protein_g:34,carbs_g:78,fat_g:38}, storage:'Best fresh; assemble just before eating.'},
];

var BAKES_RECIPES = [
  // ── 🥞 QUICK BREADS (Fluffy Pancakes moved from Breakfast 16 Jun; id kept stable) ──
  {id:'bf-pancakes', cat:'quickbreads', name:'Fluffy Pancakes', emoji:'🥞', cuisine:'American', time:20, costPP:11,
    feel:'A lazy Sunday stack with syrup running down the sides.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'milk',pp:90,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'sugar',pp:8,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'butter',pp:8,u:'g'},{n:'maple syrup'}],
    method:['Whisk the flour, sugar and baking powder in a bowl.','Beat in the egg and milk until just combined — a few lumps are fine.','Cook spoonfuls in a buttered pan over medium heat until bubbles form, then flip and cook the other side.','Stack and serve with maple syrup.'],
    tip:'Avoid overmixing — a few lumps in the batter make fluffier pancakes.',
    nutrition:{kcal:340,protein_g:9,carbs_g:52,fat_g:11}, storage:'Keep 2 days; reheat in a toaster or dry pan.'},
  // ── 🫓 FLATBREADS ──
  {id:'bk-braai-flatbread', cat:'flatbreads', name:'Braai Flatbread', emoji:'🫓', cuisine:'South African', time:55, costPP:6,
    feel:'Charred at the edges, soft and steamy inside — torn straight off the grid while everyone hovers.',
    ingredients:[{n:'cake flour',pp:100,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'sugar',pp:3,u:'g'},{n:'salt',pp:2,u:'g'},{n:'lukewarm water',pp:62,u:'ml'},{n:'sunflower oil',pp:10,u:'ml'}],
    method:['Stir the flour, yeast, sugar and salt together in a bowl.','Make a well, pour in the lukewarm water and most of the oil, and mix to a soft, slightly sticky dough.','Knead on a floured surface for 6–8 minutes until smooth and springy, then cover and leave to prove in a warm spot for about 40 minutes, until doubled.','Knock back, divide into one ball per person, and press or roll each into a flat round about 1cm thick.','Cook over medium braai coals (or in a dry, hot pan) for 2–3 minutes a side, until puffed with charred spots.','Brush with the last of the oil or a little butter and serve warm, torn straight off the grid.'],
    tip:'No braai going? A hot, dry cast-iron pan gives the same charred, puffy result on the stove.',
    nutrition:{kcal:250,protein_g:7,carbs_g:48,fat_g:4}, storage:'Best fresh and warm; reheat next-day flatbreads on the braai or in a pan for a minute a side.'},

  // ── 🥖 BREADS (added Jun 2026) ──
  {id:'bk-pita', cat:'flatbreads', name:'Pita Bread', emoji:'🫓', cuisine:'Middle Eastern', time:120, costPP:3,
  feel:'Warm pockets that balloon up in a screaming-hot oven — soft enough to tear, fold and dip.',
  ingredients:[
    {n:'bread flour',pp:50,u:'g'},
    {n:'water',pp:32,u:'ml'},
    {n:'instant yeast',pp:0.7,u:'g'},
    {n:'sugar',pp:0.7,u:'g'},
    {n:'salt',pp:0.8,u:'g'},
    {n:'olive oil',pp:2,u:'ml'}
  ],
  method:[
    'Whisk the flour, yeast, sugar and salt in a large bowl. Add the lukewarm water and olive oil and stir to a shaggy dough.',
    'Knead on a lightly floured surface for 5–7 minutes until soft, smooth and just slightly tacky — keep it soft so the pitas stay fluffy.',
    'Oil the bowl lightly, cover, and leave somewhere warm for 60–90 minutes until doubled.',
    'Knock the dough down, divide into 6 (~85–90g each), roll into tight balls, cover and rest 10–15 minutes so they roll out easily.',
    'Meanwhile heat the oven as high as it goes (245–260°C) with a pizza stone or upturned baking tray inside — it must be screaming hot.',
    'Roll each ball into a disk about 16cm across and 3mm thick, keeping the thickness even so it puffs.',
    'Bake 2–3 at a time on the hot surface for 3–5 minutes — they balloon up like pillows. Pull them the moment they puff and turn lightly golden; any longer and they crisp.',
    'Wrap straight away in a clean dry towel to trap the steam — that is what keeps them soft and foldable.'
  ],
  tip:'No pocket usually means the dough was rolled unevenly or the oven was not hot enough — the pocket needs a steam-explosion to form.',
  nutrition:{kcal:250,protein_g:8,carbs_g:50,fat_g:3}, storage:'Best warm and fresh; keeps 2 days wrapped, or freeze and re-warm in a hot pan.'},
  {id:'bk-baguette', cat:'breads', name:'French Baguette', emoji:'🥖', cuisine:'French', time:300, costPP:2,
  feel:'Crackling golden crust, chewy open crumb — a French morning made in your own kitchen.',
  ingredients:[
    {n:'bread flour',pp:31,u:'g'},
    {n:'water',pp:21,u:'ml'},
    {n:'salt',pp:0.6,u:'g'},
    {n:'instant yeast',pp:0.25,u:'g'}
  ],
  method:[
    'Combine the flour, salt and yeast in a bowl. Add the lukewarm water and mix to a shaggy, cohesive dough. Cover and rest 30 minutes — this autolyse develops the gluten on its own.',
    'Build strength with stretch-and-folds: wet your hands, grab one side of the dough, stretch it up and fold it to the centre, then turn the bowl and repeat four times around. Rest 30 minutes and do it twice more (three rounds total) — by the end it should feel smooth and elastic.',
    'Cover and let it ferment at room temperature about 2 hours, until noticeably risen and a little bubbly.',
    'Turn out onto a lightly floured surface. Shape into a rough rectangle, fold the top third to the centre and the bottom third over that like a letter, and pinch the seam shut. Roll gently under your palms to lengthen into a baguette about 30–38cm long.',
    'Rest it seam-down on a floured towel, pleating the cloth up against the sides to hold its shape. Proof 45–60 minutes until puffy. Meanwhile heat the oven to 230°C with a shallow tray on the bottom rack.',
    'Slide the baguette onto a lined baking sheet. With a razor or very sharp knife make 3–4 quick shallow diagonal slashes along the top. Pour half a cup of boiling water into the hot tray for steam and close the door fast.',
    'Bake 20–25 minutes until deep golden and hollow-sounding when you tap the base — pull the water tray after 10 minutes to crisp the crust. Cool on a rack at least 20 minutes before cutting.'
  ],
  tip:'If the dough sticks while shaping, resist adding flour — dampen your hands or the counter with a touch of water instead. The crumb keeps setting as it cools, so never cut it hot.',
  nutrition:{kcal:190,protein_g:6,carbs_g:38,fat_g:1}, storage:'Best the day it is baked; revive day-old baguette in a hot oven for 5 minutes, or slice and freeze.'},
  {id:'bk-roti', cat:'flatbreads', name:'Whole Wheat Roti', emoji:'🫓', cuisine:'Indian', time:50, costPP:2,
  feel:'Soft, rustic flatbread blistered on a hot pan — the everyday bread of an Indian table.',
  ingredients:[
    {n:'whole wheat flour',pp:42,u:'g'},
    {n:'water',pp:32,u:'ml'},
    {n:'salt',pp:0.3,u:'g'},
    {n:'neutral oil',pp:1,u:'ml'},
    {n:'ghee or butter (for brushing)',pp:3,u:'g'}
  ],
  method:[
    'Whisk the flour and salt in a bowl. Gradually add the warm water, mixing with your hand, until a shaggy dough forms.',
    'Knead on a surface for 5 minutes until smooth and elastic — a sprinkle of flour if sticky, a teaspoon of water if dry.',
    'Drizzle the oil over the dough, cover with a damp cloth and rest 30 minutes — this is what keeps the rotis soft.',
    'Divide into 6 balls and keep them covered. Roll each into a thin disk about 16cm across on a lightly floured surface.',
    'Heat a tawa or cast-iron pan over medium-high. Cook a roti until small bubbles appear (30–45 seconds), then flip and cook the other side about a minute until light brown spots form — press the edges gently with a towel to help it puff.',
    'Brush with a little ghee or butter and stack in a towel to stay soft and warm.'
  ],
  tip:'Keep the dough soft and let it rest the full 30 minutes — rushed or stiff dough makes tough rotis.',
  nutrition:{kcal:130,protein_g:4,carbs_g:26,fat_g:2}, storage:'Best warm; keep wrapped 1–2 days and re-warm in a dry pan, or freeze with paper between them.'},
  {id:'bk-godamba-roti', cat:'flatbreads', name:'Godamba Roti', emoji:'🫓', cuisine:'Sri Lankan', time:180, costPP:2,
  feel:'Stretched paper-thin and folded flaky — the Sri Lankan roti that becomes kottu.',
  ingredients:[
    {n:'cake flour',pp:37,u:'g'},
    {n:'salt',pp:0.8,u:'g'},
    {n:'neutral oil',pp:8,u:'ml'},
    {n:'water',pp:18,u:'ml'}
  ],
  method:[
    'Combine the flour, salt, oil and lukewarm water and mix to a dough. Knead 8–10 minutes until very smooth and pliable.',
    'Divide into 6 balls, sit them in a shallow container and pour over enough neutral oil to submerge them. Cover and soak at least 2–4 hours, or overnight — this relaxes the gluten so they stretch thin. The soaking oil is reused batch to batch.',
    'Lift one ball onto a lightly oiled surface. With your palms, press and stretch it outward until it is translucent and paper-thin — small tears are fine.',
    'Fold the edges to the centre into a square or rectangle.',
    'Heat a non-stick pan over medium-high. Cook the folded roti about 1 minute a side until golden and lightly blistered.',
    'Stack the cooked rotis straight into a lidded container or under a towel to keep them soft and foldable.'
  ],
  tip:'The long oil soak is the secret — skip it and the dough will not stretch thin. The soaking oil keeps for the next batch.',
  nutrition:{kcal:160,protein_g:4,carbs_g:28,fat_g:5}, storage:'Best fresh and warm; keep stacked and covered 1–2 days, or freeze and re-warm.'},
  {id:'bk-drop-dumplings', cat:'quickbreads', name:'Fluffy Drop Dumplings', emoji:'🥟', cuisine:'Global', time:25, costPP:3,
    feel:'Soft, cloud-like dough dropped straight into a bubbling stew \u2014 the cosiest way to stretch a pot.',
    ingredients:[{n:'cake flour',pp:35,u:'g'},{n:'baking powder',pp:2,u:'g'},{n:'salt',pp:0.75,u:'g'},{n:'butter',pp:7.5,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'fresh parsley or thyme (optional)',pp:2,u:'g'}],
    method:['Whisk the flour, baking powder and salt together \u2014 stir in the chopped herbs now if using.','Add the melted butter and milk and stir gently, just until a sticky, shaggy dough forms. Do not overmix, or the dumplings turn tough and rubbery.','Get your stew or soup to a gentle, low simmer \u2014 if it is boiling hard the dumplings can fall apart.','Drop heaped tablespoons of dough onto the surface of the simmering liquid, spacing them out \u2014 they puff up as they cook.','Cover with a tight lid and do not lift it for at least 15 minutes \u2014 the trapped steam is what cooks the tops.','Test with a toothpick: clean means done. Serve straight away while hot.'],
    tip:'Resist peeking \u2014 every lift of the lid lets steam out and the dumplings deflate. Too dry to scoop, add a splash more milk; too wet, a little more flour.',
    nutrition:{kcal:180,protein_g:4,carbs_g:24,fat_g:7}, storage:'Best fresh and hot; they go dense on standing. Reheat gently in the stew.'},
  {id:'bk-lavash', cat:'flatbreads', name:'Lavash', emoji:'🫓', cuisine:'Middle Eastern', time:120, costPP:3,
    feel:'Thin, blistered, foldable flatbread \u2014 soft enough to wrap a kebab, crisp enough to snap over hummus.',
    ingredients:[{n:'cake flour',pp:75,u:'g'},{n:'instant yeast',pp:0.8,u:'g'},{n:'sugar',pp:0.7,u:'g'},{n:'salt',pp:1,u:'g'},{n:'olive oil',pp:5,u:'ml'}],
    method:['Stir the warm water, sugar or honey and yeast together. Leave 5 to 10 minutes until foamy on top.','Mix the flour and salt in a big bowl, make a well, pour in the yeast mix and olive oil. Bring together into a rough dough.','Knead on a floured surface 8 to 10 minutes until smooth, elastic and slightly tacky.','Rise in a lightly oiled, covered bowl in a warm spot 1 to 1.5 hours, until doubled.','Knock the air out, divide into 6 (about 120 to 130g each), shape into balls, cover and rest 15 to 20 minutes.','Roll each ball out as thinly as you can \u2014 3mm or thinner. If it springs back, rest it a few minutes and try again.','Cook on a dry hot pan over medium-high, 30 to 45 seconds a side, until it bubbles and spots golden. Do not overcook or it turns cracker-hard.','Straight off the heat, stack between layers of a slightly damp cloth \u2014 the steam keeps them soft and foldable.'],
    tip:'Want crisp lavash for dipping? Leave them uncovered on a rack to dry brittle. Gone too hard? Spritz with water and warm 10 seconds in the microwave.',
    nutrition:{kcal:280,protein_g:8,carbs_g:52,fat_g:5}, storage:'Cooled and sealed in a bag, soft 2 to 3 days. Freeze with paper between; refresh with a water spritz and quick warm.'},
  {id:'bk-msemen', cat:'flatbreads', name:'Msemen', emoji:'🫓', cuisine:'Moroccan', time:60, costPP:4,
    feel:'Square, folded, shatteringly flaky griddle bread \u2014 pull a warm layer apart and drizzle it with honey.',
    ingredients:[{n:'cake flour',pp:42,u:'g'},{n:'fine semolina',pp:21,u:'g'},{n:'salt',pp:1,u:'g'},{n:'sugar',pp:0.7,u:'g'},{n:'butter',pp:10,u:'g'},{n:'sunflower oil',pp:10,u:'ml'}],
    method:['Whisk the flour, semolina, salt and sugar. Add the warm water slowly, mixing by hand, until a firm non-sticky dough forms.','Knead 8 to 10 minutes until very smooth and elastic. Divide into 6 balls, rub with oil, cover and rest at least 30 minutes \u2014 this is vital for the stretch.','Oil your surface and hands. Press and stretch one ball outward from the centre until nearly see-through. Small tears are fine.','Drizzle over a little of the butter-oil mix and a pinch of semolina. Fold the top third down, bottom third up, then left and right in to make a square. Repeat for all 6.','Flatten the first square with your palm to about 13cm wide.','Cook on a non-stick or cast-iron pan over medium, 2 to 3 minutes a side, turning often, until deep golden with crisp charred spots and puffed layers.'],
    tip:'Use oil, never flour, to stretch \u2014 flour tears the dough and you lose the thin crispy layers. Springs back? It needs more rest. Serve warm with honey, or butter and jam.',
    nutrition:{kcal:320,protein_g:7,carbs_g:44,fat_g:13}, storage:'Best warm and fresh. Reheat in a dry pan to bring back the crisp; freeze with paper between layers.'},
  {id:'bk-banana-bread', cat:'quickbreads', name:'Banana Bread', emoji:'🍌', cuisine:'Global', time:70, costPP:6,
    feel:'The smell that fills the whole house \u2014 sweet, dark, banana-rich, best warm with a slick of butter.',
    ingredients:[{n:'bananas',pp:0.58,u:'each'},{n:'butter',pp:12.5,u:'g'},{n:'sugar',pp:25,u:'g'},{n:'eggs',pp:0.17,u:'each'},{n:'vanilla extract',pp:0.8,u:'ml'},{n:'bicarbonate of soda',pp:0.8,u:'g'},{n:'salt',pp:0.5,u:'g'},{n:'cake flour',pp:32,u:'g'}],
    method:['Heat the oven to 175C. Grease and flour a standard loaf tin (about 23x13cm).','Mash the bananas with a fork until smooth but still a little chunky.','Stir the melted butter into the mashed banana, then mix in the sugar, egg and vanilla.','Sprinkle over the bicarb and salt and stir well. Add the flour and fold in just until no streaks remain \u2014 do not overmix.','Pour into the tin and bake 50 to 60 minutes, until a toothpick in the centre comes out clean or with a few moist crumbs.','Cool in the tin 10 minutes, then turn out onto a wire rack.'],
    tip:'The darker the bananas, the sweeter the loaf. Not ripe enough? Roast them in their skins at 150C for 15 minutes to soften fast. Fold in a handful of toasted walnuts or pecans before baking if you like.',
    nutrition:{kcal:280,protein_g:4,carbs_g:42,fat_g:11}, storage:'Wrapped tightly, stays moist 3 to 4 days. Freezes beautifully \u2014 slice first for grab-and-go.'},

  {id:'bk-sponge-cake', cat:'cakes', name:'Classic Sponge Cake', emoji:'🍰', cuisine:'Global', time:45, costPP:3,
    feel:'Genoise-light — no raising agent, just whipped eggs holding all that air. Tender, golden, barely-there.',
    ingredients:[{n:'eggs',pp:0.5,u:'each'},{n:'sugar',pp:15,u:'g'},{n:'cake flour',pp:15,u:'g'},{n:'butter',pp:4,u:'g'},{n:'vanilla extract',pp:0.8,u:'ml'}],
    method:['Heat the oven to 175C. Grease a 15 to 18cm round tin and line the base with baking paper — non-negotiable for a sponge, it will stick otherwise.','Combine the eggs and sugar in a large heatproof bowl. Set it over a pan of simmering water (bowl not touching the water) and whisk constantly until it reaches about 43C and the sugar has fully dissolved.','Off the heat, whip with an electric mixer on high 5 to 8 minutes until thick, pale and tripled — lift the beaters and the batter should leave a ribbon trail that holds a few seconds. Mix in the vanilla.','Sift half the flour over the eggs and fold gently — down the side of the bowl and up through the centre — then repeat with the rest. Work quickly so you do not knock the air out.','Stir a big spoon of batter into the melted butter, then fold that back into the main bowl. This stops the butter sinking.','Pour into the tin and bake 20 to 25 minutes, until golden and springy to a light press.','Cool in the tin 5 minutes, run a knife round the edge, then invert onto a wire rack to cool completely.'],
    tip:'Sift the flour twice — no clumps means it folds into the fragile egg foam far easier. The moment the flour is in, stop mixing. Lovely with the cherry sauce, or just icing sugar and whipped cream.',
    nutrition:{kcal:180,protein_g:5,carbs_g:28,fat_g:5}, storage:'Airtight 2 to 3 days, or freeze well-wrapped.'},

];

// ════════════════════════════════════════════════════════════════════
//  LUNCH — written 22 Jun 2026 from TINZA_LUNCH_BUILD_BRIEF (curation locked)
//  Shelf array the section reads = LIGHTLUNCH_RECIPES. Cats: salads · handhelds · soups · savbakes · quick
//  Same object shape as breakfast + new `diet:` tag (meat|veg|vegan).
//  ⚑DUP = a master also lives elsewhere (WK/Health/SA) — swap to cross-link in the cross-link phase.
// ════════════════════════════════════════════════════════════════════
var LIGHTLUNCH_RECIPES = [

  // ───────────────── 🥗 SALADS & BOWLS (27) — all substantial, no sides ─────────────────
  {id:'ln-greek-salad', cat:'salads', name:'Greek Salad', emoji:'🥗', cuisine:'Greek', time:15, costPP:24, diet:'veg', // ⚑DUP
    feel:'Sunshine in a bowl — crunch, salt and a slick of good oil.',
    ingredients:[{n:'cucumber',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'green pepper',pp:50,u:'g'},{n:'feta',pp:60,u:'g'},{n:'kalamata olives',pp:25,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'dried oregano'}],
    method:['Chop the cucumber, tomatoes and pepper into chunky pieces and slice the onion thinly.','Pile into a bowl and scatter over the olives.','Lay a slab of feta on top, drizzle with olive oil and a squeeze of lemon, and dust with oregano.','Toss gently at the table so the feta stays in pieces.'],
    tip:'Salt the tomatoes a few minutes ahead — the juice that draws out becomes half your dressing.',
    nutrition:{kcal:320,protein_g:10,carbs_g:16,fat_g:25}, storage:'Best fresh; undressed it keeps a day in the fridge.'},

  {id:'ln-pasta-salad', cat:'salads', name:'Pasta Salad', emoji:'🍝', cuisine:'Italian-ish', time:20, costPP:22, diet:'veg', // ⚑DUP
    feel:'The lunchbox hero — cold, herby and somehow better the next day.',
    ingredients:[{n:'pasta',pp:90,u:'g'},{n:'cherry tomatoes',pp:80,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'feta',pp:40,u:'g'},{n:'black olives',pp:20,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'basil',pp:3,u:'g'}],
    method:['Boil the pasta until just tender, drain and rinse under cold water to stop it cooking.','Halve the tomatoes, dice the cucumber and crumble in the feta.','Toss everything with olive oil, lemon and torn basil.','Season well — cold pasta needs more salt than you think.'],
    tip:'Dress it while the pasta is still slightly warm so it soaks up the oil.',
    nutrition:{kcal:380,protein_g:12,carbs_g:52,fat_g:14}, storage:'Keeps 2 days; refresh with a splash of oil and lemon.'},

  {id:'ln-caesar', cat:'salads', name:'Caesar Salad', emoji:'🥗', cuisine:'American', time:15, costPP:28, diet:'meat',
    feel:'Crunchy, creamy, salty — the one everyone secretly orders.',
    ingredients:[{n:'lettuce',pp:120,u:'g'},{n:'white bread',pp:1,u:''},{n:'parmesan',pp:20,u:'g'},{n:'mayonnaise',pp:25,u:'g'},{n:'anchovies',pp:8,u:'g'},{n:'garlic',pp:3,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cube the bread, toss in oil and crisp in a hot pan or oven until golden — these are your croutons.','Whisk the mayo with crushed garlic, mashed anchovy, lemon and half the parmesan into a loose dressing.','Tear the cos into a bowl, coat in dressing and toss through the croutons.','Finish with the rest of the parmesan, grated over the top.'],
    tip:'No anchovies? A dash of Worcestershire gives the same salty backbone.',
    nutrition:{kcal:340,protein_g:12,carbs_g:20,fat_g:24}, storage:'Dressing keeps 3 days; assemble just before eating.'},

  {id:'ln-caprese', cat:'salads', name:'Caprese Salad', emoji:'🍅', cuisine:'Italian', time:10, costPP:30, diet:'veg',
    feel:'Three ingredients pretending they didn\'t just make the best plate on the table.',
    ingredients:[{n:'tomatoes',pp:160,u:'g'},{n:'mozzarella',pp:80,u:'g'},{n:'basil',pp:5,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'balsamic vinegar',pp:8,u:'ml'}],
    method:['Slice the tomatoes and mozzarella into rounds of the same thickness.','Layer them alternately on a plate, tucking basil leaves between.','Drizzle generously with olive oil and a little balsamic.','Season with flaky salt and pepper right before serving.'],
    tip:'Take the mozzarella out of the fridge 20 minutes early — cold dulls its flavour.',
    nutrition:{kcal:300,protein_g:14,carbs_g:8,fat_g:24}, storage:'Best assembled fresh.'},

  {id:'ln-egg-salad', cat:'salads', name:'Egg Salad', emoji:'🥚', cuisine:'Classic', time:15, costPP:18, diet:'veg',
    feel:'Soft, creamy and old-fashioned in the best way.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'mayonnaise',pp:25,u:'g'},{n:'lettuce',pp:60,u:'g'},{n:'spring onion',pp:15,u:'g'},{n:'wholewheat bread',pp:1,u:''},{n:'mustard',pp:5,u:'g'}],
    method:['Hard-boil the eggs for 9 minutes, cool under cold water and peel.','Roughly chop and fold through the mayo, a little mustard and sliced spring onion.','Season well with salt and plenty of pepper.','Serve over leaves or piled onto toast.'],
    tip:'A pinch of paprika and a squeeze of lemon lifts it from plain to moreish.',
    nutrition:{kcal:330,protein_g:16,carbs_g:18,fat_g:22}, storage:'Keeps 2 days covered in the fridge.'},

  {id:'ln-panzanella', cat:'salads', name:'Panzanella', emoji:'🍞', cuisine:'Tuscan', time:20, costPP:21, diet:'veg',
    feel:'The Italian answer to leftover bread — juicy, garlicky, generous.',
    ingredients:[{n:'ciabatta',pp:80,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'cucumber',pp:80,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'basil',pp:4,u:'g'},{n:'olive oil',pp:18,u:'ml'},{n:'red wine vinegar',pp:8,u:'ml'}],
    method:['Tear the bread into chunks and toast or pan-crisp until golden.','Chop the tomatoes over a bowl to catch every drop of juice, then add cucumber and thin onion.','Toss the bread through with olive oil and vinegar and let it sit 10 minutes to soak.','Fold in torn basil and season just before serving.'],
    tip:'Slightly stale bread is the whole point — it drinks the dressing without going to mush.',
    nutrition:{kcal:360,protein_g:8,carbs_g:44,fat_g:17}, storage:'Eat within a few hours; the bread softens over time.'},

  {id:'ln-beet-goat', cat:'salads', name:'Beet & Goat Cheese Salad', emoji:'🫐', cuisine:'Bistro', time:20, costPP:32, diet:'veg',
    feel:'Earthy, sweet beets against tangy cheese — a proper grown-up lunch.',
    ingredients:[{n:'beetroot',pp:140,u:'g'},{n:'chevin goat cheese',pp:50,u:'g'},{n:'rocket',pp:40,u:'g'},{n:'walnuts',pp:20,u:'g'},{n:'honey',pp:8,u:'ml'},{n:'olive oil',pp:12,u:'ml'}],
    method:['Roast or boil the beetroot until tender, then peel and cut into wedges.','Toast the walnuts in a dry pan until fragrant.','Pile rocket on a plate, add the warm beets and crumble over the goat cheese.','Drizzle with honey and oil whisked with a little lemon, and scatter the nuts.'],
    tip:'Use ready-cooked vacuum-packed beetroot to turn this into a 10-minute lunch.',
    nutrition:{kcal:340,protein_g:11,carbs_g:22,fat_g:24}, storage:'Components keep 3 days; assemble fresh.'},

  {id:'ln-halloumi-grain', cat:'salads', name:'Warm Halloumi & Grain Salad', emoji:'🧀', cuisine:'Mediterranean', time:25, costPP:34, diet:'veg',
    feel:'Squeaky golden halloumi over nutty grains — filling without being heavy.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'pearl barley',pp:70,u:'g'},{n:'rocket',pp:30,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'olive oil',pp:12,u:'ml'},{n:'mint',pp:3,u:'g'}],
    method:['Simmer the barley until tender, about 25 minutes, then drain and dress while warm with oil and lemon.','Slice the halloumi and fry in a dry hot pan until golden on both sides.','Fold the tomatoes and rocket through the warm grains.','Top with the halloumi and a scatter of torn mint.'],
    tip:'Swap barley for couscous if you want it on the table in 10 minutes.',
    nutrition:{kcal:430,protein_g:18,carbs_g:42,fat_g:22}, storage:'Grain base keeps 3 days; fry halloumi to order.'},

  {id:'ln-halloumi-peach', cat:'salads', name:'Grilled Halloumi & Peach Salad', emoji:'🍑', cuisine:'Summery', time:15, costPP:33, diet:'veg',
    feel:'Smoky, sweet and salty all at once — the salad that tastes like a braai afternoon.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'peaches',pp:90,u:'g'},{n:'rocket',pp:40,u:'g'},{n:'honey',pp:6,u:'ml'},{n:'olive oil',pp:10,u:'ml'},{n:'mint',pp:3,u:'g'}],
    method:['Cut the peaches into wedges and the halloumi into thick slices.','Grill or pan-char both until marked and golden.','Lay over rocket and drizzle with honey, oil and lemon.','Finish with torn mint and a grind of black pepper.'],
    tip:'Out of season? Tinned peaches, patted dry and charred hard, work beautifully.',
    nutrition:{kcal:390,protein_g:15,carbs_g:24,fat_g:25}, storage:'Best fresh and warm.'},

  {id:'ln-asian-chopped', cat:'salads', name:'Asian Chopped Salad', emoji:'🥬', cuisine:'East Asian', time:15, costPP:24, diet:'vegan',
    feel:'Crunch on crunch with a sesame-ginger hit that wakes you up.',
    ingredients:[{n:'cabbage',pp:100,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'peanuts',pp:20,u:'g'},{n:'soy sauce',pp:12,u:'ml'},{n:'sesame oil',pp:8,u:'ml'},{n:'ginger',pp:5,u:'g'}],
    method:['Shred the cabbage and carrots finely and slice the pepper into thin strips.','Whisk soy, sesame oil, grated ginger, lime and a little sugar into a dressing.','Toss the veg through the dressing until well coated.','Top with crushed peanuts and sliced spring onion.'],
    tip:'Add a handful of fresh coriander and a pinch of chilli flakes for real lift.',
    nutrition:{kcal:260,protein_g:8,carbs_g:22,fat_g:16}, storage:'Undressed slaw keeps 2 days; dress to order.'},

  {id:'ln-sweetpotato-kale', cat:'salads', name:'Roasted Sweet Potato & Kale Salad', emoji:'🍠', cuisine:'Modern', time:35, costPP:23, diet:'vegan',
    feel:'Warm, hearty and good for you in a way you can actually taste.',
    ingredients:[{n:'sweet potato',pp:180,u:'g'},{n:'kale',pp:60,u:'g'},{n:'chickpeas',pp:80,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'tahini',pp:15,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Cube the sweet potato, toss in oil and roast at 200°C for 25 minutes until soft and caramelised.','Add the drained chickpeas for the last 10 minutes to crisp.','Massage the torn kale with a little oil and salt until it softens.','Pile everything together and drizzle with tahini loosened with lemon and water.'],
    tip:'A pinch of cumin and smoked paprika on the sweet potato makes it sing.',
    nutrition:{kcal:400,protein_g:12,carbs_g:54,fat_g:16}, storage:'Keeps 3 days; dressing separate.'},

  {id:'ln-falafel-tahini', cat:'salads', name:'Falafel & Tahini Salad', emoji:'🧆', cuisine:'Middle Eastern', time:20, costPP:26, diet:'vegan', // ⚑DUP falafel master
    feel:'Crisp falafel on a fresh, lemony bed — street food turned lunch bowl.',
    ingredients:[{n:'falafel',pp:120,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'cucumber',pp:80,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'parsley',pp:5,u:'g'}],
    method:['Warm or fry the falafel until crisp and hot through.','Chop the cucumber and tomato and toss with leaves and parsley.','Loosen the tahini with lemon, water and a little garlic into a pourable sauce.','Sit the falafel on the salad and pour the tahini over.'],
    tip:'A spoon of harissa stirred into the tahini brings welcome heat.',
    nutrition:{kcal:420,protein_g:15,carbs_g:40,fat_g:23}, storage:'Best fresh; falafel re-crisps well in a pan.'},

  {id:'ln-tofu-sesame-noodle', cat:'salads', name:'Crispy Tofu & Sesame Noodle Salad', emoji:'🍜', cuisine:'East Asian', time:25, costPP:28, diet:'vegan',
    feel:'Cold sesame noodles with golden tofu — light but properly satisfying.',
    ingredients:[{n:'tofu',pp:100,u:'g'},{n:'soba noodles',pp:80,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'sesame oil',pp:8,u:'ml'},{n:'peanuts',pp:15,u:'g'}],
    method:['Press the tofu, cube it and fry in a little oil until golden and crisp on all sides.','Cook the noodles, drain and rinse cold.','Toss the noodles with soy, sesame oil and lime, then fold through ribboned cucumber and carrot.','Top with the tofu and crushed peanuts.'],
    tip:'Toss the warm tofu in a spoon of soy and cornflour before frying for an extra-crisp shell.',
    nutrition:{kcal:430,protein_g:18,carbs_g:48,fat_g:19}, storage:'Keeps a day; tofu best fresh.'},

  {id:'ln-cauli-chickpea', cat:'salads', name:'Roast Cauliflower, Chickpea & Tahini Salad', emoji:'🥦', cuisine:'Middle Eastern', time:35, costPP:24, diet:'vegan',
    feel:'Spiced, golden and hearty — a bowl that eats like a meal.',
    ingredients:[{n:'cauliflower',pp:180,u:'g'},{n:'chickpeas',pp:90,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lemon',pp:0.3,u:''},{n:'parsley',pp:5,u:'g'},{n:'cumin'}],
    method:['Break the cauliflower into florets, toss with chickpeas, oil and cumin, and roast at 200°C for 25 minutes until charred.','Whisk the tahini with lemon, garlic and water into a loose dressing.','Tumble the warm roast veg onto a plate.','Drizzle with tahini and scatter chopped parsley.'],
    tip:'A handful of pomegranate or raisins adds a sweet burst against the spice.',
    nutrition:{kcal:390,protein_g:14,carbs_g:38,fat_g:22}, storage:'Keeps 3 days; superb cold.'},

  {id:'ln-couscous-roastveg', cat:'salads', name:'Mediterranean Couscous & Roast Veg Salad', emoji:'🫑', cuisine:'Mediterranean', time:30, costPP:22, diet:'vegan',
    feel:'Fluffy couscous studded with sweet, sticky roasted vegetables.',
    ingredients:[{n:'couscous',pp:70,u:'g'},{n:'courgettes',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:40,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lemon',pp:0.3,u:''},{n:'mint',pp:4,u:'g'}],
    method:['Chop the veg into chunks, toss in oil and roast at 200°C for 20 minutes until caramelised.','Pour boiling stock over the couscous, cover for 5 minutes, then fluff with a fork.','Fold the warm veg through the couscous with lemon and olive oil.','Finish with chopped mint and season generously.'],
    tip:'Stir in a spoon of harissa or pesto for an instant flavour upgrade.',
    nutrition:{kcal:370,protein_g:9,carbs_g:56,fat_g:13}, storage:'Keeps 3 days; great packed for work.'},

  {id:'ln-chickpea-avo', cat:'salads', name:'Smoky Chickpea & Avocado Salad', emoji:'🥑', cuisine:'Modern', time:15, costPP:25, diet:'vegan',
    feel:'Creamy avo, smoky chickpeas, zero effort — weekday lunch sorted.',
    ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'avocado',pp:80,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'lemon',pp:0.3,u:''},{n:'smoked paprika'}],
    method:['Pan-fry the drained chickpeas in oil with smoked paprika until crisp at the edges.','Dice the avocado, tomato and onion into a bowl.','Add the warm chickpeas and dress with lemon, oil and salt.','Toss gently so the avo stays in pieces.'],
    tip:'A pinch of chilli and a handful of coriander turns this into something special.',
    nutrition:{kcal:360,protein_g:12,carbs_g:34,fat_g:21}, storage:'Best fresh; chickpeas keep 3 days.'},

  {id:'ln-taco-salad', cat:'salads', name:'Taco Salad', emoji:'🌮', cuisine:'Tex-Mex', time:20, costPP:30, diet:'meat',
    feel:'All the joy of tacos with a fork — spiced mince, crunch and lime.',
    ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'tomatoes',pp:70,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'avocado',pp:50,u:'g'},{n:'corn chips',pp:30,u:'g'},{n:'sour cream',pp:25,u:'g'},{n:'taco spice',pp:8,u:'g'}],
    method:['Brown the mince, breaking it up, then stir in taco spice and a splash of water and simmer until sticky.','Shred the lettuce and chop the tomato and avocado.','Layer leaves, mince, cheese and avo in a bowl.','Top with sour cream, lime and crushed corn chips.'],
    tip:'A tin of black beans stretched through the mince makes it go further and adds fibre.',
    nutrition:{kcal:520,protein_g:26,carbs_g:30,fat_g:32}, storage:'Keep components separate; assemble fresh.'},

  {id:'ln-blt-salad', cat:'salads', name:'BLT Salad', emoji:'🥓', cuisine:'American', time:15, costPP:27, diet:'meat',
    feel:'The sandwich, deconstructed — crisp bacon, sweet tomato, cool leaves.',
    ingredients:[{n:'streaky bacon',pp:50,u:'g'},{n:'lettuce',pp:100,u:'g'},{n:'tomatoes',pp:100,u:'g'},{n:'white bread',pp:1,u:''},{n:'mayonnaise',pp:20,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Fry the bacon until crisp, then break into shards.','Cube and toast the bread into croutons in the bacon fat.','Toss the leaves and tomato with mayo loosened with a little lemon.','Scatter over the bacon and croutons.'],
    tip:'Add a soft-boiled egg to turn this into a full supper.',
    nutrition:{kcal:420,protein_g:16,carbs_g:20,fat_g:30}, storage:'Best fresh; bacon keeps 2 days.'},

  {id:'ln-chicken-mayo-salad', cat:'salads', name:'Chicken Mayo Salad', emoji:'🥗', cuisine:'Classic', time:20, costPP:28, diet:'meat',
    feel:'Tender chicken in a creamy dress — the reliable, everybody-happy lunch.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'mayonnaise',pp:25,u:'g'},{n:'spring onion',pp:15,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Poach or pan-cook the chicken, cool slightly and shred.','Fold through the mayo with lemon, sliced spring onion and seasoning.','Bed of leaves and cucumber on the plate.','Pile the chicken on top.'],
    tip:'A spoon of wholegrain mustard or curry powder takes it somewhere interesting.',
    nutrition:{kcal:360,protein_g:30,carbs_g:8,fat_g:22}, storage:'Chicken mix keeps 2 days.'},

  {id:'ln-chicken-caesar', cat:'salads', name:'Chicken Caesar Salad', emoji:'🍗', cuisine:'American', time:20, costPP:34, diet:'meat',
    feel:'The Caesar with a reason to call it lunch — warm, golden chicken on top.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'lettuce',pp:120,u:'g'},{n:'white bread',pp:1,u:''},{n:'parmesan',pp:20,u:'g'},{n:'mayonnaise',pp:25,u:'g'},{n:'anchovies',pp:6,u:'g'},{n:'garlic',pp:3,u:'g'}],
    method:['Season and pan-fry the chicken until golden, rest, then slice.','Make croutons from cubed bread crisped in oil.','Whisk mayo with garlic, mashed anchovy, lemon and parmesan.','Toss cos with dressing and croutons, top with the warm chicken.'],
    tip:'Grill the chicken with a little smoked paprika for extra colour and depth.',
    nutrition:{kcal:480,protein_g:38,carbs_g:20,fat_g:28}, storage:'Assemble fresh; dressing keeps 3 days.'},

  {id:'ln-tuna-salad', cat:'salads', name:'Tuna Salad', emoji:'🐟', cuisine:'Classic', time:10, costPP:23, diet:'meat',
    feel:'Pantry to plate in ten minutes — protein-packed and never boring.',
    ingredients:[{n:'tuna',pp:80,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'tomatoes',pp:70,u:'g'},{n:'red onion',pp:20,u:'g'},{n:'mayonnaise',pp:18,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Drain the tuna and flake it into a bowl.','Fold through mayo, lemon and finely diced onion.','Chop the salad veg and arrange on a plate.','Spoon the tuna over and season.'],
    tip:'Swap mayo for olive oil and a few capers for a lighter, Mediterranean version.',
    nutrition:{kcal:300,protein_g:26,carbs_g:10,fat_g:17}, storage:'Tuna mix keeps 2 days.'},

  {id:'ln-prawn-avo', cat:'salads', name:'Prawn & Avo Salad', emoji:'🦐', cuisine:'Coastal', time:15, costPP:42, diet:'meat',
    feel:'A little bit fancy — sweet prawns, buttery avo, a tangy pink dressing.',
    ingredients:[{n:'prawns',pp:90,u:'g'},{n:'avocado',pp:80,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'mayonnaise',pp:20,u:'g'},{n:'tomato sauce',pp:8,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Cook the prawns quickly in a hot pan with a little butter and garlic until pink, then cool.','Mix mayo with a little tomato sauce, lemon and a dash of Tabasco for a Marie Rose dressing.','Slice the avocado over a bed of leaves.','Pile the prawns on and spoon over the dressing.'],
    tip:'Frozen prawns work perfectly — defrost fully and pat very dry before cooking.',
    nutrition:{kcal:380,protein_g:22,carbs_g:9,fat_g:29}, storage:'Best fresh.'},

  {id:'ln-steak-blue', cat:'salads', name:'Steak & Blue Cheese Salad', emoji:'🥩', cuisine:'Steakhouse', time:20, costPP:48, diet:'meat',
    feel:'Hearty and a bit indulgent — pink steak against sharp, salty blue.',
    ingredients:[{n:'rump steak',pp:120,u:'g'},{n:'rocket',pp:50,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'blue cheese',pp:30,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'balsamic vinegar',pp:8,u:'ml'}],
    method:['Season the steak well and sear hard for 2–3 minutes a side, then rest 5 minutes and slice.','Pile rocket, tomatoes and thin onion on a plate.','Crumble over the blue cheese.','Lay the steak on top and finish with oil and balsamic.'],
    tip:'Resting is non-negotiable — slice too soon and all the juice runs out.',
    nutrition:{kcal:480,protein_g:34,carbs_g:10,fat_g:34}, storage:'Best fresh and warm.'},

  {id:'ln-schnitzel-salad', cat:'salads', name:'Crispy Chicken Schnitzel Salad', emoji:'🍗', cuisine:'Comfort', time:25, costPP:32, diet:'meat',
    feel:'Golden, crunchy schnitzel sliced over a sharp, fresh salad — the best of both.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'breadcrumbs',pp:30,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'cake flour',pp:20,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'oil',pp:15,u:'ml'}],
    method:['Flatten the chicken, then coat in flour, beaten egg and breadcrumbs.','Shallow-fry until deep golden and cooked through, then drain and slice.','Dress the leaves and tomatoes with lemon and oil.','Lay the sliced schnitzel over the top with a wedge of lemon.'],
    tip:'A little grated parmesan in the crumb makes the coating extra savoury.',
    nutrition:{kcal:520,protein_g:34,carbs_g:32,fat_g:28}, storage:'Schnitzel best fresh; re-crisp in a pan.'},

  {id:'ln-thai-beef', cat:'salads', name:'Thai Beef Salad', emoji:'🌶️', cuisine:'Thai', time:20, costPP:46, diet:'meat',
    feel:'Hot, sour, salty, sweet — the salad that hits every note at once.',
    ingredients:[{n:'rump steak',pp:110,u:'g'},{n:'lettuce',pp:60,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'coriander',pp:5,u:'g'},{n:'fish sauce',pp:10,u:'ml'},{n:'lime',pp:0.5,u:''},{n:'chilli',pp:3,u:'g'}],
    method:['Sear the steak hard, rest and slice thinly against the grain.','Make a dressing of fish sauce, lime juice, a little sugar and chopped chilli.','Toss cucumber, onion, herbs and leaves with most of the dressing.','Lay the beef over and spoon the rest of the dressing on top.'],
    tip:'Mint and Thai basil alongside the coriander make it taste like the real thing.',
    nutrition:{kcal:340,protein_g:30,carbs_g:12,fat_g:18}, storage:'Best fresh.'},

  {id:'ln-periperi-chicken-salad', cat:'salads', name:'Peri-Peri Chicken Salad', emoji:'🔥', cuisine:'South African', time:25, costPP:33, diet:'meat',
    feel:'Smoky, spicy Portuguese-SA chicken over cooling greens.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'tomatoes',pp:70,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Marinate the chicken in peri-peri sauce for at least 15 minutes.','Grill or pan-fry until charred and cooked through, then slice.','Build a salad of leaves, tomato, cucumber and onion.','Top with the hot chicken and an extra drizzle of peri-peri.'],
    tip:'Make your own peri-peri base with bird\'s-eye chilli, garlic, lemon and paprika.',
    nutrition:{kcal:380,protein_g:34,carbs_g:12,fat_g:20}, storage:'Chicken keeps 2 days; great cold.'},

  {id:'ln-nicoise', cat:'salads', name:'Tuna Niçoise', emoji:'🥚', cuisine:'French', time:25, costPP:36, diet:'meat',
    feel:'A composed, sunny plate from the south of France — proper lunch, no apologies.',
    ingredients:[{n:'tuna',pp:80,u:'g'},{n:'baby potatoes',pp:100,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'black olives',pp:20,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lettuce',pp:40,u:'g'}],
    method:['Boil the potatoes until tender and the beans until just crisp, then cool.','Soft-boil the eggs for 7 minutes, peel and halve.','Arrange leaves, potatoes, beans, tomatoes and flaked tuna in sections on a plate.','Add the egg and olives and dress with oil, lemon and a little mustard.'],
    tip:'Keep everything in groups rather than tossed — niçoise is meant to be composed.',
    nutrition:{kcal:430,protein_g:28,carbs_g:28,fat_g:23}, storage:'Components keep 2 days; assemble fresh.'},


  // ───────────────── 🍲 SOUPS (21) ─────────────────
  {id:'ln-tomato-soup', cat:'soups', name:'Tomato Soup', emoji:'🍅', cuisine:'Classic', time:30, costPP:14, diet:'veg', // ⚑DUP
    feel:'A warm red bowl that tastes like being looked after.',
    ingredients:[{n:'tomatoes',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cream',pp:25,u:'ml'},{n:'tomato paste',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'basil',pp:3,u:'g'}],
    method:['Soften the chopped onion and garlic in olive oil over medium heat.','Stir in the tomato paste, then add the chopped tomatoes and stock and simmer 20 minutes.','Blend until smooth, then stir through the cream and torn basil.','Season well and serve with bread for dipping.'],
    tip:'A pinch of sugar balances the acidity of the tomatoes beautifully.',
    nutrition:{kcal:180,protein_g:4,carbs_g:18,fat_g:11}, storage:'Keeps 3 days; freezes well before the cream goes in.'},

  {id:'ln-chicken-soup', cat:'soups', name:'Chicken Soup', emoji:'🍗', cuisine:'Classic', time:45, costPP:22, diet:'meat', // ⚑DUP
    feel:'The bowl you reach for when the world feels like too much.',
    ingredients:[{n:'chicken breasts',pp:100,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'celery',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'chicken broth',pp:350,u:'ml'},{n:'garlic',pp:4,u:'g'}],
    method:['Soften the diced onion, carrot and celery in a little oil.','Add the chicken and broth and simmer gently for 25 minutes until the chicken is tender.','Lift out the chicken, shred it, and return it to the pot.','Season generously and finish with chopped parsley.'],
    tip:'Simmer a parmesan rind in the broth for an extra savoury depth.',
    nutrition:{kcal:220,protein_g:24,carbs_g:10,fat_g:9}, storage:'Keeps 3 days; freezes well.'},

  {id:'ln-vegetable-soup', cat:'soups', name:'Vegetable Soup', emoji:'🥕', cuisine:'Classic', time:40, costPP:12, diet:'vegan', // ⚑DUP
    feel:'Everything from the bottom of the veg drawer, turned into comfort.',
    ingredients:[{n:'carrots',pp:60,u:'g'},{n:'potatoes',pp:80,u:'g'},{n:'celery',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'vegetable stock',pp:350,u:'ml'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Dice all the vegetables to a similar size.','Soften the onion in oil, then add the rest and stir for a few minutes.','Pour in the stock and simmer 25 to 30 minutes until everything is tender.','Season well and serve, blending half if you like it thicker.'],
    tip:'Whatever veg needs using up will work — this soup is endlessly forgiving.',
    nutrition:{kcal:150,protein_g:4,carbs_g:26,fat_g:4}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-lentil-soup', cat:'soups', name:'Lentil Soup', emoji:'🟤', cuisine:'Middle Eastern', time:40, costPP:11, diet:'vegan', // ⚑DUP
    feel:'Humble, hearty and quietly filling — a bowl with backbone.',
    ingredients:[{n:'lentils',pp:70,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:350,u:'ml'},{n:'cumin'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion, carrot and garlic in oil with a good pinch of cumin.','Add the rinsed lentils and stock and bring to a simmer.','Cook 25 to 30 minutes until the lentils are soft, then blend partly for a creamy-but-textured finish.','Season well and finish with a squeeze of lemon.'],
    tip:'Red lentils break down fastest and need no soaking — ideal for a quick soup.',
    nutrition:{kcal:230,protein_g:13,carbs_g:36,fat_g:5}, storage:'Keeps 4 days; thickens as it sits — loosen with water.'},

  {id:'ln-broccoli-cheese-soup', cat:'soups', name:'Broccoli & Cheese Soup', emoji:'🥦', cuisine:'Comfort', time:30, costPP:18, diet:'veg', // ⚑DUP
    feel:'Velvety, cheesy and green — comfort that almost feels virtuous.',
    ingredients:[{n:'broccoli',pp:150,u:'g'},{n:'potatoes',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'}],
    method:['Soften the onion, then add the potato, broccoli stalks and stock and simmer 15 minutes.','Add the broccoli florets and cook 5 minutes more until just tender.','Blend until smooth, then stir in the grated cheddar and cream off the heat.','Season and serve with extra cheese on top.'],
    tip:'Keep a few florets aside to drop in whole for texture.',
    nutrition:{kcal:280,protein_g:13,carbs_g:18,fat_g:18}, storage:'Keeps 3 days; reheat gently so the cheese stays smooth.'},

  {id:'ln-butternut-soup', cat:'soups', name:'Butternut Soup', emoji:'🎃', cuisine:'South African', time:40, costPP:13, diet:'veg',
    feel:'Sweet, silky and golden — winter in a bowl.',
    ingredients:[{n:'butternut',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'},{n:'nutmeg'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and garlic in oil.','Add the cubed butternut and stock and simmer 25 minutes until very soft.','Blend until silky smooth, then stir in the cream and a grating of nutmeg.','Season and serve with a swirl of cream and toasted seeds.'],
    tip:'Roasting the butternut first instead of boiling deepens the sweetness.',
    nutrition:{kcal:190,protein_g:4,carbs_g:28,fat_g:8}, storage:'Keeps 4 days; freezes beautifully.'},

  {id:'ln-pumpkin-soup', cat:'soups', name:'Pumpkin Soup', emoji:'🎃', cuisine:'Classic', time:40, costPP:12, diet:'veg',
    feel:'Mellow and creamy, the gentler cousin of butternut.',
    ingredients:[{n:'pumpkin',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'},{n:'ginger',pp:5,u:'g'}],
    method:['Soften the onion, garlic and a little grated ginger in oil.','Add the pumpkin and stock and simmer 25 minutes until tender.','Blend smooth and stir through the cream.','Season well and finish with black pepper.'],
    tip:'A pinch of cinnamon or curry powder takes pumpkin soup somewhere lovely.',
    nutrition:{kcal:170,protein_g:4,carbs_g:24,fat_g:8}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-minestrone', cat:'soups', name:'Minestrone', emoji:'🍅', cuisine:'Italian', time:40, costPP:16, diet:'veg',
    feel:'A bowl that eats like a meal — beans, pasta and a garden of veg.',
    ingredients:[{n:'tomatoes',pp:100,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'celery',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'butter beans',pp:60,u:'g'},{n:'pasta',pp:30,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'parmesan',pp:10,u:'g'}],
    method:['Soften the onion, carrot and celery in oil.','Add the tomatoes, beans and stock and simmer 15 minutes.','Stir in the small pasta and cook until just tender.','Season and serve with grated parmesan and a drizzle of oil.'],
    tip:'Add a spoon of pesto at the end for an instant flavour lift.',
    nutrition:{kcal:260,protein_g:11,carbs_g:40,fat_g:7}, storage:'Keeps 3 days; the pasta softens, so add fresh if reheating.'},

  {id:'ln-pea-ham-soup', cat:'soups', name:'Pea & Ham Soup', emoji:'🫛', cuisine:'British', time:60, costPP:19, diet:'meat',
    feel:'Thick, smoky and old-fashioned — a soup that sticks to your ribs.',
    ingredients:[{n:'split peas',pp:70,u:'g'},{n:'gammon',pp:70,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'vegetable stock',pp:350,u:'ml'}],
    method:['Soften the onion and carrot, then add the rinsed split peas and stock.','Add the gammon and simmer gently for 45 minutes until the peas collapse.','Lift out the gammon, shred it, and return it to the pot.','Season carefully — the gammon is already salty.'],
    tip:'A leftover ham bone simmered in the pot makes this soup extraordinary.',
    nutrition:{kcal:300,protein_g:22,carbs_g:36,fat_g:7}, storage:'Keeps 4 days; thickens a lot — loosen with stock.'},

  {id:'ln-french-onion', cat:'soups', name:'French Onion Soup', emoji:'🧅', cuisine:'French', time:60, costPP:17, diet:'veg',
    feel:'Deep, sweet caramelised onions under a raft of bubbling cheese.',
    ingredients:[{n:'onion',pp:200,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'baguette',pp:0.25,u:''},{n:'gruyere cheese',pp:40,u:'g'},{n:'butter',pp:10,u:'g'},{n:'garlic',pp:4,u:'g'}],
    method:['Cook the thinly sliced onions slowly in butter for 30 minutes until deep golden and sweet.','Add the stock and a little garlic and simmer 15 minutes.','Ladle into bowls, top with toasted baguette slices and grated gruyere.','Grill until the cheese is bubbling and golden.'],
    tip:'Patience with the onions is everything — let them go properly dark, not just soft.',
    nutrition:{kcal:320,protein_g:13,carbs_g:30,fat_g:17}, storage:'Soup base keeps 4 days; add bread and cheese to order.'},

  {id:'ln-mushroom-soup', cat:'soups', name:'Creamy Mushroom Soup', emoji:'🍄', cuisine:'Classic', time:35, costPP:18, diet:'veg',
    feel:'Earthy, silky and a little bit luxurious.',
    ingredients:[{n:'mushrooms',pp:180,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cream',pp:30,u:'ml'},{n:'butter',pp:10,u:'g'},{n:'thyme'}],
    method:['Fry the sliced mushrooms in butter over high heat until deeply golden — don\'t crowd the pan.','Add the onion, garlic and thyme and soften.','Pour in the stock, simmer 10 minutes, then blend (leave some chunks if you like).','Stir in the cream, season well and serve.'],
    tip:'Hold back a few fried mushrooms to spoon on top for texture.',
    nutrition:{kcal:240,protein_g:7,carbs_g:12,fat_g:18}, storage:'Keeps 3 days; reheat gently.'},

  {id:'ln-potato-leek-soup', cat:'soups', name:'Potato & Leek Soup', emoji:'🥔', cuisine:'French', time:40, costPP:13, diet:'veg',
    feel:'Soft, creamy and soothing — the definition of a quiet evening.',
    ingredients:[{n:'potatoes',pp:180,u:'g'},{n:'leek',pp:80,u:'g'},{n:'onion',pp:30,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:25,u:'ml'},{n:'butter',pp:10,u:'g'}],
    method:['Soften the sliced leek and onion gently in butter without colouring.','Add the cubed potato and stock and simmer 20 minutes until tender.','Blend until smooth and silky.','Stir in the cream, season generously and serve.'],
    tip:'Serve it chilled in summer and you have vichyssoise.',
    nutrition:{kcal:250,protein_g:5,carbs_g:34,fat_g:11}, storage:'Keeps 3 days; freezes before cream is added.'},

  {id:'ln-red-pepper-soup', cat:'soups', name:'Roasted Red Pepper Soup', emoji:'🫑', cuisine:'Mediterranean', time:45, costPP:15, diet:'vegan',
    feel:'Smoky, sweet and a gorgeous deep red.',
    ingredients:[{n:'red pepper',pp:180,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'olive oil',pp:10,u:'ml'},{n:'paprika'}],
    method:['Roast the peppers and tomatoes at 220°C until blistered and soft, then peel the peppers.','Soften the onion and garlic in oil with a little smoked paprika.','Add the roasted veg and stock and simmer 10 minutes.','Blend smooth, season and finish with a drizzle of oil.'],
    tip:'A jar of roasted peppers makes this a fast weeknight soup.',
    nutrition:{kcal:160,protein_g:3,carbs_g:18,fat_g:9}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-chicken-sweetcorn-soup', cat:'soups', name:'Chicken & Sweetcorn Soup', emoji:'🌽', cuisine:'Chinese', time:30, costPP:18, diet:'meat',
    feel:'Silky, comforting takeaway-style soup made better at home.',
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'sweetcorn',pp:80,u:'g'},{n:'chicken broth',pp:350,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'spring onion',pp:15,u:'g'},{n:'cornflour',pp:8,u:'g'},{n:'soy sauce',pp:10,u:'ml'}],
    method:['Simmer the shredded chicken in the broth with the sweetcorn for 10 minutes.','Thicken with cornflour slaked in a little water until silky.','Turn off the heat and slowly stream in the beaten egg, stirring, to make ribbons.','Finish with soy sauce and sliced spring onion.'],
    tip:'Creamed sweetcorn gives a richer, more authentic texture.',
    nutrition:{kcal:200,protein_g:18,carbs_g:18,fat_g:6}, storage:'Keeps 2 days; reheat gently.'},

  {id:'ln-tom-kha', cat:'soups', name:'Thai Coconut Soup (Tom Kha)', emoji:'🥥', cuisine:'Thai', time:30, costPP:20, diet:'vegan',
    feel:'Fragrant, creamy and sour-sweet — a hug with lemongrass.',
    ingredients:[{n:'coconut milk',pp:200,u:'ml'},{n:'mushrooms',pp:80,u:'g'},{n:'vegetable stock',pp:150,u:'ml'},{n:'lemongrass',pp:8,u:'g'},{n:'ginger',pp:8,u:'g'},{n:'lime',pp:0.5,u:''},{n:'soy sauce',pp:10,u:'ml'},{n:'chilli',pp:3,u:'g'}],
    method:['Simmer the stock with bruised lemongrass, sliced ginger and chilli for 5 minutes to infuse.','Add the coconut milk and mushrooms and simmer gently 8 minutes — don\'t boil hard.','Season with soy sauce and a good squeeze of lime.','Finish with fresh coriander and extra lime to taste.'],
    tip:'Balance is everything — keep tasting and adjust lime, soy and chilli.',
    nutrition:{kcal:260,protein_g:4,carbs_g:12,fat_g:23}, storage:'Best fresh; keeps 2 days.'},

  {id:'ln-curried-butternut-soup', cat:'soups', name:'Curried Butternut Soup', emoji:'🍛', cuisine:'Fusion', time:40, costPP:15, diet:'vegan',
    feel:'Golden butternut with a warm curry hum and creamy coconut.',
    ingredients:[{n:'butternut',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'vegetable stock',pp:200,u:'ml'},{n:'curry powder',pp:5,u:'g'},{n:'ginger',pp:5,u:'g'}],
    method:['Soften the onion, garlic and ginger in oil with the curry powder until fragrant.','Add the butternut and stock and simmer 25 minutes until soft.','Blend smooth, then stir in the coconut milk.','Season and finish with coriander and a squeeze of lime.'],
    tip:'Toast the curry powder in the oil first — it wakes up all the spices.',
    nutrition:{kcal:230,protein_g:4,carbs_g:30,fat_g:12}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-beef-barley-soup', cat:'soups', name:'Beef & Barley Soup', emoji:'🥩', cuisine:'Hearty', time:90, costPP:24, diet:'meat',
    feel:'Slow-cooked, deeply savoury and properly filling — a meal in a bowl.',
    ingredients:[{n:'beef stewing meat',pp:90,u:'g'},{n:'barley',pp:40,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'celery',pp:30,u:'g'},{n:'beef stock',pp:350,u:'ml'}],
    method:['Brown the diced beef well in a heavy pot, then set aside.','Soften the onion, carrot and celery in the same pot.','Return the beef, add the barley and stock, and simmer gently 1 to 1.5 hours until the beef is tender and the barley plump.','Season well and serve with crusty bread.'],
    tip:'The longer and slower it cooks, the better — this one rewards patience.',
    nutrition:{kcal:300,protein_g:22,carbs_g:30,fat_g:10}, storage:'Keeps 4 days; thickens as the barley swells.'},

  {id:'ln-chicken-noodle-soup', cat:'soups', name:'Chicken Noodle Soup', emoji:'🍜', cuisine:'Classic', time:35, costPP:18, diet:'meat',
    feel:'The bowl that quietly fixes a bad day.',
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'egg noodles',pp:50,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'celery',pp:30,u:'g'},{n:'onion',pp:30,u:'g'},{n:'chicken broth',pp:350,u:'ml'}],
    method:['Soften the onion, carrot and celery, then add the broth and bring to a simmer.','Add the chicken and poach gently 12 minutes, then lift out and shred.','Cook the noodles in the broth until tender.','Return the chicken, season well, and finish with parsley.'],
    tip:'Cook the noodles separately if you\'re making it ahead, so they don\'t go soggy.',
    nutrition:{kcal:240,protein_g:20,carbs_g:28,fat_g:5}, storage:'Keeps 2 days; noodles soften, so add fresh when reheating.'},

  {id:'ln-carrot-coriander-soup', cat:'soups', name:'Carrot & Coriander Soup', emoji:'🥕', cuisine:'British', time:35, costPP:11, diet:'vegan',
    feel:'Bright orange and fragrant — fresh and light but still comforting.',
    ingredients:[{n:'carrots',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'coriander',pp:5,u:'g'},{n:'cumin'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and garlic in oil with a pinch of ground coriander and cumin.','Add the sliced carrots and stock and simmer 25 minutes until soft.','Blend smooth, then stir through most of the chopped fresh coriander.','Season and serve topped with the rest of the coriander.'],
    tip:'Toasting whole coriander seeds and grinding them fresh makes a real difference.',
    nutrition:{kcal:150,protein_g:3,carbs_g:24,fat_g:5}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-black-bean-soup', cat:'soups', name:'Spicy Black Bean Soup', emoji:'🫘', cuisine:'Latin', time:35, costPP:13, diet:'vegan',
    feel:'Smoky, spicy and substantial — a bowl with real character.',
    ingredients:[{n:'black beans',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cumin'},{n:'chilli',pp:3,u:'g'}],
    method:['Soften the onion, pepper and garlic in oil with cumin and chilli.','Add the black beans, tomatoes and stock and simmer 15 minutes.','Blend about half the soup to thicken it, leaving the rest chunky.','Season well and serve with lime, coriander and a dollop of yoghurt.'],
    tip:'A little smoked paprika or chipotle gives it a gorgeous smoky depth.',
    nutrition:{kcal:240,protein_g:13,carbs_g:38,fat_g:4}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-sweetpotato-peanut-soup', cat:'soups', name:'Sweet Potato & Peanut Soup', emoji:'🥜', cuisine:'West African', time:40, costPP:15, diet:'vegan',
    feel:'Creamy, nutty and warming with a gentle chilli glow.',
    ingredients:[{n:'sweet potato',pp:180,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'peanut butter',pp:25,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'ginger',pp:5,u:'g'},{n:'chilli',pp:2,u:'g'}],
    method:['Soften the onion, garlic, ginger and chilli in oil.','Add the cubed sweet potato, tomatoes and stock and simmer 20 minutes.','Stir in the peanut butter until melted through, then blend smooth.','Season and finish with coriander and crushed peanuts.'],
    tip:'Smooth peanut butter blends best; add it gradually and taste as you go.',
    nutrition:{kcal:290,protein_g:9,carbs_g:38,fat_g:13}, storage:'Keeps 4 days; thickens — loosen with stock.'},

  // ───────────────── 🥪 SANDWICHES, WRAPS & ROLLS (22) ─────────────────
  // Bread is flexible everywhere — white, brown, wholewheat, low-GI, ciabatta,
  // wrap or roll all work. Gluten-free handled later via dietary preferences.
  {id:'ln-falafel-wrap', cat:'handhelds', name:'Falafel Wrap', emoji:'🌯', cuisine:'Middle Eastern', time:15, costPP:24, diet:'vegan', // ⚑DUP
    feel:'Warm, crisp falafel rolled up with cool salad and creamy tahini.',
    ingredients:[{n:'falafel',pp:90,u:'g'},{n:'tortillas',pp:1,u:''},{n:'lettuce',pp:40,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'cucumber',pp:40,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'lemon',pp:0.2,u:''}],
    method:['Warm or fry the falafel until hot and crisp.','Loosen the tahini with lemon, water and a little garlic into a drizzly sauce.','Pile falafel and chopped salad onto the wrap, drizzle with tahini, and roll up tightly.'],
    tip:'Any wrap or flatbread works — warm it first so it folds without cracking.',
    nutrition:{kcal:420,protein_g:14,carbs_g:48,fat_g:20}, storage:'Best fresh; components keep 2 days.'},

  {id:'ln-pita-hummus-chicken', cat:'handhelds', name:'Pita, Hummus & Chicken', emoji:'🥙', cuisine:'Mediterranean', time:20, costPP:30, diet:'meat', // ⚑DUP
    feel:'Soft pita stuffed with warm chicken and a generous swipe of hummus.',
    ingredients:[{n:'chicken breasts',pp:100,u:'g'},{n:'pita',pp:1,u:''},{n:'hummus',pp:40,u:'g'},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'red onion',pp:20,u:'g'}],
    method:['Season and pan-fry the chicken until golden, then slice.','Warm the pita and open a pocket.','Spread the inside with hummus, then fill with chicken, lettuce, tomato and onion.'],
    tip:'No pita? Any flatbread, wrap or roll works just as well.',
    nutrition:{kcal:430,protein_g:34,carbs_g:38,fat_g:15}, storage:'Best fresh; cooked chicken keeps 2 days.'},

  {id:'ln-boerewors-roll', cat:'handhelds', name:'Boerewors Roll', emoji:'🌭', cuisine:'South African', time:20, costPP:26, diet:'meat', // ⚑DUP
    feel:'The smell of a Saturday market — wors, onions and a soft roll.',
    ingredients:[{n:'boerewors',pp:120,u:'g'},{n:'hot dog rolls',pp:1,u:''},{n:'onion',pp:50,u:'g'},{n:'tomato sauce',pp:15,u:'g'},{n:'chutney',pp:10,u:'g'}],
    method:['Grill or braai the boerewors until cooked through and lightly charred.','Fry the sliced onions slowly until soft and golden.','Tuck the wors into the roll, pile on the onions, and finish with tomato sauce and chutney.'],
    tip:'Any soft roll works — a hot dog roll, a long roll or even a slice folded over.',
    nutrition:{kcal:480,protein_g:20,carbs_g:34,fat_g:30}, storage:'Best fresh and hot.'},

  {id:'ln-chicken-mayo-sarmie', cat:'handhelds', name:'Chicken Mayo Sarmie', emoji:'🥪', cuisine:'Classic', time:15, costPP:22, diet:'meat',
    feel:'The lunchbox classic that never lets you down.',
    ingredients:[{n:'chicken breasts',pp:90,u:'g'},{n:'white bread',pp:2,u:''},{n:'mayonnaise',pp:25,u:'g'},{n:'lettuce',pp:25,u:'g'},{n:'spring onion',pp:10,u:'g'}],
    method:['Poach or pan-cook the chicken, cool, and shred or dice.','Fold through the mayo with sliced spring onion and seasoning.','Pile onto bread with lettuce and close.'],
    tip:'Any bread works — white, brown, low-GI or a wrap. A little curry powder in the mayo is a lovely twist.',
    nutrition:{kcal:380,protein_g:28,carbs_g:30,fat_g:17}, storage:'Filling keeps 2 days; assemble fresh.'},

  {id:'ln-egg-mayo-sarmie', cat:'handhelds', name:'Egg Mayo Sarmie', emoji:'🥪', cuisine:'Classic', time:15, costPP:14, diet:'veg',
    feel:'Soft, creamy and comforting — proper old-fashioned lunch.',
    ingredients:[{n:'large eggs',pp:1.5,u:'egg'},{n:'white bread',pp:2,u:''},{n:'mayonnaise',pp:20,u:'g'},{n:'lettuce',pp:20,u:'g'}],
    method:['Hard-boil the eggs for 9 minutes, cool, peel and mash.','Mix with mayo, salt and plenty of pepper.','Spread onto bread with lettuce and close.'],
    tip:'Use any bread you like. A pinch of curry powder or chives lifts the filling.',
    nutrition:{kcal:340,protein_g:14,carbs_g:30,fat_g:18}, storage:'Filling keeps 2 days.'},

  {id:'ln-tuna-mayo-sarmie', cat:'handhelds', name:'Tuna Mayo Sarmie', emoji:'🥪', cuisine:'Classic', time:10, costPP:18, diet:'meat',
    feel:'Quick, protein-packed and reliably good.',
    ingredients:[{n:'tuna',pp:80,u:'g'},{n:'white bread',pp:2,u:''},{n:'mayonnaise',pp:20,u:'g'},{n:'red onion',pp:15,u:'g'},{n:'cucumber',pp:30,u:'g'}],
    method:['Drain and flake the tuna, then mix with mayo and finely diced onion.','Season with pepper and a squeeze of lemon.','Layer onto bread with sliced cucumber and close.'],
    tip:'Any bread or wrap works. Sweetcorn or chopped gherkin stirred in is a nice touch.',
    nutrition:{kcal:330,protein_g:24,carbs_g:30,fat_g:13}, storage:'Filling keeps 1 day; best fresh.'},

  {id:'ln-cheese-tomato-sarmie', cat:'handhelds', name:'Cheese & Tomato Sarmie', emoji:'🧀', cuisine:'Classic', time:10, costPP:13, diet:'veg',
    feel:'Simple, honest and somehow always exactly right.',
    ingredients:[{n:'cheddar',pp:40,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'white bread',pp:2,u:''},{n:'butter',pp:8,u:'g'}],
    method:['Butter the bread.','Layer sliced cheese and tomato, seasoning the tomato with a little salt and pepper.','Close and slice.'],
    tip:'Use any bread. A smear of chutney or mustard takes it up a notch.',
    nutrition:{kcal:330,protein_g:13,carbs_g:30,fat_g:18}, storage:'Best fresh.'},

  {id:'ln-ham-cheese-sarmie', cat:'handhelds', name:'Ham & Cheese Sarmie', emoji:'🥪', cuisine:'Classic', time:10, costPP:18, diet:'meat',
    feel:'The dependable everyday sandwich, hot or cold.',
    ingredients:[{n:'ham',pp:50,u:'g'},{n:'cheddar',pp:35,u:'g'},{n:'white bread',pp:2,u:''},{n:'butter',pp:8,u:'g'},{n:'mustard',pp:5,u:'g'}],
    method:['Butter the bread and spread one side with a little mustard.','Layer the ham and cheese.','Close and eat as is, or toast in a pan until golden and melty.'],
    tip:'Any bread works. Toasting turns it into a quick melt.',
    nutrition:{kcal:380,protein_g:20,carbs_g:30,fat_g:19}, storage:'Best fresh; toast to order.'},

  {id:'ln-blt-sandwich', cat:'handhelds', name:'BLT Sandwich', emoji:'🥓', cuisine:'American', time:15, costPP:24, diet:'meat',
    feel:'Crisp bacon, cool lettuce, sweet tomato — a perfect trio.',
    ingredients:[{n:'streaky bacon',pp:50,u:'g'},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'white bread',pp:2,u:''},{n:'mayonnaise',pp:15,u:'g'}],
    method:['Fry the bacon until crisp and drain on paper towel.','Toast the bread and spread with mayo.','Layer bacon, lettuce and tomato, season, and close.'],
    tip:'Any bread works, but toasting it keeps the sandwich from going soggy.',
    nutrition:{kcal:400,protein_g:15,carbs_g:30,fat_g:24}, storage:'Best fresh and warm.'},

  {id:'ln-jaffle', cat:'handhelds', name:'Toasted Cheese (Jaffle)', emoji:'🧇', cuisine:'South African', time:12, costPP:14, diet:'veg',
    feel:'Golden, crunchy outside and a molten cheesy middle.',
    ingredients:[{n:'cheddar',pp:50,u:'g'},{n:'white bread',pp:2,u:''},{n:'butter',pp:10,u:'g'},{n:'tomatoes',pp:30,u:'g'}],
    method:['Butter the outsides of the bread.','Fill with grated cheese and a little tomato.','Toast in a jaffle iron or pan, pressing, until deep golden and the cheese has melted.'],
    tip:'Any bread works. Add ham, chutney or a fried egg to make it a meal.',
    nutrition:{kcal:360,protein_g:14,carbs_g:30,fat_g:21}, storage:'Best fresh and hot.'},

  {id:'ln-club-sandwich', cat:'handhelds', name:'Club Sandwich', emoji:'🥪', cuisine:'American', time:20, costPP:32, diet:'meat',
    feel:'The three-decker showstopper — a knife-and-skewer affair.',
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'streaky bacon',pp:40,u:'g'},{n:'white bread',pp:3,u:''},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'large eggs',pp:0.5,u:'egg'},{n:'mayonnaise',pp:20,u:'g'}],
    method:['Cook the chicken and bacon, and fry or boil the egg.','Toast three slices of bread and spread with mayo.','Stack in two layers — chicken, bacon, egg, lettuce and tomato — then pin with skewers and cut into quarters.'],
    tip:'Any bread works; toasting holds the tall stack together. Skewers stop it toppling.',
    nutrition:{kcal:560,protein_g:34,carbs_g:42,fat_g:28}, storage:'Best fresh.'},

  {id:'ln-chicken-wrap', cat:'handhelds', name:'Chicken Wrap', emoji:'🌯', cuisine:'Modern', time:15, costPP:26, diet:'meat',
    feel:'Everything you want for lunch, rolled up and ready to grab.',
    ingredients:[{n:'chicken breasts',pp:100,u:'g'},{n:'tortillas',pp:1,u:''},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'cheddar',pp:25,u:'g'},{n:'mayonnaise',pp:15,u:'g'}],
    method:['Season and cook the chicken, then slice.','Spread the wrap with mayo and lay everything down the centre.','Fold in the ends and roll up tightly, then halve on the diagonal.'],
    tip:'Any wrap or flatbread works. A spoon of peri-peri or sweet chilli is a great addition.',
    nutrition:{kcal:430,protein_g:32,carbs_g:34,fat_g:18}, storage:'Best fresh; keeps wrapped a few hours.'},

  {id:'ln-veggie-wrap', cat:'handhelds', name:'Veggie Wrap', emoji:'🌯', cuisine:'Modern', time:12, costPP:18, diet:'vegan',
    feel:'Fresh, crunchy and good for you, with a creamy hummus base.',
    ingredients:[{n:'tortillas',pp:1,u:''},{n:'hummus',pp:40,u:'g'},{n:'cucumber',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'red pepper',pp:40,u:'g'},{n:'lettuce',pp:30,u:'g'},{n:'avocado',pp:40,u:'g'}],
    method:['Spread the wrap generously with hummus.','Lay grated carrot, sliced cucumber, pepper, lettuce and avocado down the centre.','Season, fold in the ends and roll up tightly.'],
    tip:'Any wrap works. Swap the hummus for tahini or add falafel to make it heartier.',
    nutrition:{kcal:350,protein_g:9,carbs_g:42,fat_g:16}, storage:'Best fresh.'},

  {id:'ln-chicken-caesar-wrap', cat:'handhelds', name:'Chicken Caesar Wrap', emoji:'🌯', cuisine:'American', time:18, costPP:28, diet:'meat',
    feel:'The Caesar salad you can eat with one hand.',
    ingredients:[{n:'chicken breasts',pp:100,u:'g'},{n:'tortillas',pp:1,u:''},{n:'lettuce',pp:40,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'mayonnaise',pp:20,u:'g'},{n:'anchovies',pp:5,u:'g'},{n:'garlic',pp:3,u:'g'}],
    method:['Cook and slice the chicken.','Whisk the mayo with mashed anchovy, garlic, lemon and parmesan into a Caesar dressing.','Toss the lettuce and chicken in the dressing, pile onto the wrap and roll up.'],
    tip:'Any wrap works. Leave out the anchovy for a milder dressing.',
    nutrition:{kcal:460,protein_g:34,carbs_g:32,fat_g:22}, storage:'Best fresh.'},

  {id:'ln-steak-roll', cat:'handhelds', name:'Steak Roll', emoji:'🥖', cuisine:'Steakhouse', time:25, costPP:42, diet:'meat',
    feel:'Juicy steak and sweet onions packed into a crusty roll.',
    ingredients:[{n:'rump steak',pp:120,u:'g'},{n:'baguette',pp:0.5,u:''},{n:'onion',pp:60,u:'g'},{n:'rocket',pp:20,u:'g'},{n:'mustard',pp:8,u:'g'},{n:'butter',pp:8,u:'g'}],
    method:['Season the steak well and sear hard, then rest and slice thinly.','Cook the onions slowly in butter until soft and caramelised.','Fill the roll with steak, onions, rocket and a smear of mustard.'],
    tip:'Any crusty roll, ciabatta or baguette works. Rest the steak before slicing so it stays juicy.',
    nutrition:{kcal:540,protein_g:34,carbs_g:38,fat_g:26}, storage:'Best fresh and warm.'},

  {id:'ln-gatsby', cat:'handhelds', name:'Gatsby', emoji:'🥖', cuisine:'South African', time:30, costPP:38, diet:'meat',
    feel:'Cape Town\'s legendary shareable monster roll, loaded and saucy.',
    ingredients:[{n:'baguette',pp:0.6,u:''},{n:'rump steak',pp:90,u:'g'},{n:'slap chips',pp:120,u:'g'},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:30,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'atchar',pp:15,u:'g'}],
    method:['Cook the steak (or use masala steak, polony or chicken) and slice.','Fry or bake the chips until crisp.','Split a long roll, layer in the meat, chips, salad, peri-peri and atchar, then close and cut into shareable portions.'],
    tip:'Any long roll works. The chips inside are non-negotiable — that\'s what makes it a Gatsby.',
    nutrition:{kcal:620,protein_g:26,carbs_g:62,fat_g:30}, storage:'Best fresh and hot.'},

  {id:'ln-banh-mi', cat:'handhelds', name:'Banh Mi', emoji:'🥖', cuisine:'Vietnamese', time:25, costPP:30, diet:'meat',
    feel:'Crunchy, tangy, fresh and savoury all in one perfect bite.',
    ingredients:[{n:'baguette',pp:0.5,u:''},{n:'chicken breasts',pp:90,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'cucumber',pp:40,u:'g'},{n:'coriander',pp:5,u:'g'},{n:'mayonnaise',pp:15,u:'g'},{n:'soy sauce',pp:10,u:'ml'},{n:'chilli',pp:3,u:'g'}],
    method:['Marinate and cook the chicken (or pork) in soy, garlic and a little sugar, then slice.','Quick-pickle the grated carrot and cucumber ribbons in vinegar and sugar for 10 minutes.','Spread the roll with mayo, fill with meat, pickled veg, coriander and chilli.'],
    tip:'A light, crusty roll or baguette is ideal, but any soft roll works. The pickle is what makes it sing.',
    nutrition:{kcal:450,protein_g:28,carbs_g:46,fat_g:16}, storage:'Best fresh; pickled veg keeps a week.'},

  {id:'ln-reuben', cat:'handhelds', name:'Reuben', emoji:'🥪', cuisine:'American', time:20, costPP:36, diet:'meat',
    feel:'Hot, melty, tangy deli indulgence — a proper grilled stack.',
    ingredients:[{n:'corned beef',pp:90,u:'g'},{n:'rye bread',pp:2,u:''},{n:'swiss cheese',pp:40,u:'g'},{n:'sauerkraut',pp:50,u:'g'},{n:'mayonnaise',pp:15,u:'g'},{n:'butter',pp:10,u:'g'}],
    method:['Mix the mayo with a little tomato sauce and gherkin for a quick Russian dressing.','Build the sandwich with corned beef, swiss, drained sauerkraut and the dressing.','Butter the outsides and grill in a pan, pressing, until golden and the cheese melts.'],
    tip:'Rye is traditional, but any bread grills up well. Drain the sauerkraut well so it isn\'t soggy.',
    nutrition:{kcal:520,protein_g:26,carbs_g:34,fat_g:30}, storage:'Best fresh and hot.'},

  {id:'ln-croque-monsieur', cat:'handhelds', name:'Croque Monsieur', emoji:'🧀', cuisine:'French', time:25, costPP:28, diet:'meat',
    feel:'The fancy French toastie — ham, cheese and a blanket of bubbling sauce.',
    ingredients:[{n:'ham',pp:50,u:'g'},{n:'gruyere cheese',pp:50,u:'g'},{n:'white bread',pp:2,u:''},{n:'milk',pp:60,u:'ml'},{n:'butter',pp:10,u:'g'},{n:'cake flour',pp:8,u:'g'}],
    method:['Make a quick cheese sauce: melt butter, stir in flour, then whisk in the milk and half the gruyere.','Build the sandwich with ham and cheese and toast lightly.','Top with the cheese sauce and the rest of the gruyere and grill until golden and bubbling.'],
    tip:'Any bread works. Add a fried egg on top to make it a Croque Madame.',
    nutrition:{kcal:480,protein_g:24,carbs_g:32,fat_g:28}, storage:'Best fresh and hot.'},

  {id:'ln-halloumi-wrap', cat:'handhelds', name:'Halloumi Wrap', emoji:'🌯', cuisine:'Mediterranean', time:15, costPP:26, diet:'veg',
    feel:'Golden, squeaky halloumi with fresh salad and a lemony drizzle.',
    ingredients:[{n:'halloumi',pp:70,u:'g'},{n:'tortillas',pp:1,u:''},{n:'lettuce',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'red onion',pp:20,u:'g'},{n:'hummus',pp:30,u:'g'},{n:'lemon',pp:0.2,u:''}],
    method:['Slice and pan-fry the halloumi until golden on both sides.','Spread the wrap with hummus and add the salad.','Lay the warm halloumi on top, squeeze over lemon, and roll up.'],
    tip:'Any wrap or flatbread works. Fry the halloumi just before serving so it stays soft inside.',
    nutrition:{kcal:420,protein_g:18,carbs_g:38,fat_g:22}, storage:'Best fresh; fry halloumi to order.'},

  {id:'ln-pulled-chicken-roll', cat:'handhelds', name:'Pulled Chicken Roll', emoji:'🍔', cuisine:'American', time:30, costPP:28, diet:'meat',
    feel:'Sticky, smoky pulled chicken piled high with crunchy slaw.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'hamburger rolls',pp:1,u:''},{n:'bbq sauce',pp:25,u:'g'},{n:'cabbage',pp:40,u:'g'},{n:'carrots',pp:20,u:'g'},{n:'mayonnaise',pp:12,u:'g'}],
    method:['Poach or slow-cook the chicken until very tender, then shred with two forks.','Toss the shredded chicken through the BBQ sauce.','Make a quick slaw with shredded cabbage, carrot and mayo, and pile both into the roll.'],
    tip:'Any soft roll works. Thighs pull even more tender than breasts if you have them.',
    nutrition:{kcal:480,protein_g:34,carbs_g:42,fat_g:18}, storage:'Pulled chicken keeps 3 days; great reheated.'},

  {id:'ln-caprese-ciabatta', cat:'handhelds', name:'Caprese Ciabatta', emoji:'🥖', cuisine:'Italian', time:12, costPP:24, diet:'veg',
    feel:'Mozzarella, tomato and basil on crusty bread — summer in a sandwich.',
    ingredients:[{n:'ciabatta',pp:0.5,u:''},{n:'mozzarella',pp:60,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'basil',pp:4,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'balsamic vinegar',pp:6,u:'ml'}],
    method:['Split the ciabatta and drizzle the cut sides with olive oil.','Layer sliced mozzarella and tomato, season, and add torn basil.','Drizzle with balsamic, close and press gently.'],
    tip:'Any crusty bread or roll works. A griddle press turns it into a warm, melty panini.',
    nutrition:{kcal:400,protein_g:16,carbs_g:38,fat_g:21}, storage:'Best fresh.'},

  // ───────────────── 🍜 QUICK & LIGHT / HOT BOWLS (23) ─────────────────
  {id:'ln-fried-rice', cat:'quick', name:'Fried Rice', emoji:'🍚', cuisine:'Chinese', time:20, costPP:14, diet:'veg', // ⚑DUP
    feel:'The best way to turn last night\'s rice into today\'s lunch.',
    ingredients:[{n:'rice',pp:80,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'frozen peas',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Use cold, cooked rice — fresh rice goes mushy.','Scramble the egg in a hot oiled wok and set aside.','Stir-fry the peas, carrot and spring onion, add the rice and toss over high heat.','Return the egg, splash in soy and sesame oil, and toss to combine.'],
    tip:'Day-old rice is the secret — the drier grains fry up separate and golden.',
    nutrition:{kcal:340,protein_g:11,carbs_g:52,fat_g:10}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-shakshuka', cat:'quick', name:'Shakshuka', emoji:'🍅', cuisine:'North African', time:25, costPP:18, diet:'veg', // ⚑DUP
    feel:'Eggs poached in a bubbling, spiced tomato hug.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:40,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'tomato paste',pp:15,u:'g'},{n:'feta',pp:25,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and pepper in oil, then stir in tomato paste, paprika and cumin.','Add the chopped tomatoes and simmer 10 minutes until thick.','Make wells and crack in the eggs; cover and cook until the whites set.','Crumble over feta and serve with bread.'],
    tip:'Keep the heat gentle once the eggs are in so the yolks stay soft.',
    nutrition:{kcal:320,protein_g:17,carbs_g:18,fat_g:20}, storage:'Sauce keeps 3 days; add fresh eggs to reheat.'},

  {id:'ln-buddha-bowl', cat:'quick', name:'Buddha Bowl', emoji:'🥗', cuisine:'Modern', time:25, costPP:22, diet:'vegan', // ⚑DUP
    feel:'A bright, balanced bowl that makes you feel good after.',
    ingredients:[{n:'rice',pp:70,u:'g'},{n:'chickpeas',pp:80,u:'g'},{n:'sweet potato',pp:100,u:'g'},{n:'avocado',pp:50,u:'g'},{n:'lettuce',pp:40,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'lemon',pp:0.2,u:''}],
    method:['Roast the cubed sweet potato and chickpeas with oil and spices until golden.','Cook the rice (brown or white).','Arrange rice, roast veg, avocado and leaves in sections in a bowl.','Drizzle with tahini loosened with lemon and water.'],
    tip:'Build it in sections rather than mixing — it looks better and you can taste each part.',
    nutrition:{kcal:450,protein_g:13,carbs_g:60,fat_g:18}, storage:'Components keep 3 days; assemble to order.'},

  {id:'ln-mac-cheese', cat:'quick', name:'Mac & Cheese', emoji:'🧀', cuisine:'Comfort', time:30, costPP:18, diet:'veg',
    feel:'Molten, golden-topped comfort in its purest form.',
    ingredients:[{n:'macaroni',pp:90,u:'g'},{n:'cheddar',pp:60,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'cake flour',pp:15,u:'g'}],
    method:['Boil the macaroni until just tender and drain.','Make a roux with butter and flour, then whisk in the milk to a smooth sauce.','Melt in most of the cheese, season, and stir through the pasta.','Top with the rest of the cheese and grill until bubbling and golden.'],
    tip:'A little mustard or nutmeg in the sauce makes the cheese taste even cheesier.',
    nutrition:{kcal:520,protein_g:22,carbs_g:54,fat_g:24}, storage:'Keeps 3 days; reheat with a splash of milk.'},

  {id:'ln-spaghetti-napoli', cat:'quick', name:'Spaghetti Napoli', emoji:'🍝', cuisine:'Italian', time:25, costPP:14, diet:'veg',
    feel:'Simple, garlicky tomato pasta — Italy on a weeknight.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'onion',pp:40,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'basil',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Soften the onion and garlic in olive oil.','Add the chopped tomatoes and simmer 15 minutes until rich and glossy.','Cook the spaghetti and toss through the sauce with torn basil.','Serve with grated parmesan and a drizzle of oil.'],
    tip:'A pinch of sugar and a long, slow simmer is what makes the sauce sing.',
    nutrition:{kcal:420,protein_g:14,carbs_g:68,fat_g:11}, storage:'Sauce keeps 4 days; freezes well.'},

  {id:'ln-chicken-stirfry', cat:'quick', name:'Chicken Stir-fry', emoji:'🥢', cuisine:'Chinese', time:20, costPP:28, diet:'meat',
    feel:'Fast, fresh and full of crunch — better than takeaway.',
    ingredients:[{n:'chicken breasts',pp:110,u:'g'},{n:'mixed stir-fry veg',pp:120,u:'g'},{n:'rice',pp:70,u:'g'},{n:'soy sauce',pp:15,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'ginger',pp:5,u:'g'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Slice the chicken thinly and stir-fry in a hot wok until golden, then set aside.','Stir-fry the veg with garlic and ginger, keeping it crisp.','Return the chicken, add soy, a little honey and sesame oil, and toss.','Serve over steamed rice.'],
    tip:'Have everything chopped before you start — stir-frying happens fast.',
    nutrition:{kcal:430,protein_g:34,carbs_g:42,fat_g:12}, storage:'Best fresh; keeps 2 days.'},

  {id:'ln-veg-stirfry', cat:'quick', name:'Veg Stir-fry', emoji:'🥦', cuisine:'Chinese', time:18, costPP:18, diet:'vegan',
    feel:'A wok full of colour and crunch in under twenty minutes.',
    ingredients:[{n:'mixed stir-fry veg',pp:160,u:'g'},{n:'tofu',pp:80,u:'g'},{n:'rice',pp:70,u:'g'},{n:'soy sauce',pp:15,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'ginger',pp:5,u:'g'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Fry the cubed tofu until golden and set aside.','Stir-fry the veg with garlic and ginger over high heat, keeping it crisp.','Return the tofu, splash in soy and sesame oil, and toss.','Serve over rice.'],
    tip:'Toss the tofu in cornflour before frying for a crispier shell.',
    nutrition:{kcal:380,protein_g:14,carbs_g:48,fat_g:14}, storage:'Best fresh; keeps 2 days.'},

  {id:'ln-egg-fried-rice', cat:'quick', name:'Egg Fried Rice', emoji:'🍳', cuisine:'Chinese', time:15, costPP:12, diet:'veg',
    feel:'The five-minute saviour when the cupboard looks bare.',
    ingredients:[{n:'rice',pp:90,u:'g'},{n:'large eggs',pp:1.5,u:'egg'},{n:'spring onion',pp:20,u:'g'},{n:'frozen peas',pp:40,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Scramble the eggs in a hot oiled wok and set aside.','Fry the peas and spring onion, then add cold cooked rice and toss over high heat.','Return the egg, splash in soy and sesame oil, and toss to combine.'],
    tip:'Cold day-old rice is essential — it fries up light, not sticky.',
    nutrition:{kcal:340,protein_g:12,carbs_g:50,fat_g:11}, storage:'Best fresh.'},

  {id:'ln-chicken-quesadilla', cat:'quick', name:'Chicken Quesadilla', emoji:'🫓', cuisine:'Tex-Mex', time:20, costPP:26, diet:'meat',
    feel:'Crisp, cheesy and golden, with melty chicken inside.',
    ingredients:[{n:'tortillas',pp:1,u:''},{n:'chicken breasts',pp:90,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'red pepper',pp:40,u:'g'},{n:'onion',pp:30,u:'g'},{n:'taco spice',pp:6,u:'g'}],
    method:['Cook the chicken with peppers, onion and taco spice, then shred.','Lay it with cheese over half a tortilla and fold.','Dry-fry in a hot pan, pressing, until golden and crisp on both sides and the cheese melts.','Cut into wedges and serve with salsa.'],
    tip:'Don\'t overfill — a thin, even layer crisps best and won\'t spill out.',
    nutrition:{kcal:460,protein_g:32,carbs_g:34,fat_g:22}, storage:'Best fresh and hot.'},

  {id:'ln-baked-potato', cat:'quick', name:'Baked Potato & Toppings', emoji:'🥔', cuisine:'Classic', time:60, costPP:14, diet:'veg',
    feel:'A fluffy jacket potato is a blank canvas for whatever you fancy.',
    ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'butter',pp:15,u:'g'},{n:'baked beans',pp:80,u:'g'}],
    method:['Prick the potatoes and bake at 200°C for 50 to 60 minutes until the skin is crisp and the inside fluffy.','Split open and fluff the inside with a fork.','Add butter, then your toppings — cheese, beans, or whatever you like.','Season well and serve.'],
    tip:'Rub the skin with oil and salt before baking for the crispest jacket.',
    nutrition:{kcal:420,protein_g:15,carbs_g:58,fat_g:15}, storage:'Best fresh; bake extra to reheat.'},

  {id:'ln-savoury-pancakes', cat:'quick', name:'Savoury Pancakes', emoji:'🥞', cuisine:'Classic', time:25, costPP:16, diet:'veg',
    feel:'Thin, foldable pancakes wrapped around a savoury filling.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:120,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'butter',pp:10,u:'g'}],
    method:['Whisk the flour, egg and milk into a smooth thin batter and rest 15 minutes.','Fry thin pancakes in a little butter until golden.','Fry the mushrooms and fold them with cheese into the warm pancakes.','Serve folded or rolled.'],
    tip:'Let the batter rest — it makes the pancakes tender rather than rubbery.',
    nutrition:{kcal:380,protein_g:16,carbs_g:38,fat_g:18}, storage:'Pancakes keep 2 days; reheat in a pan.'},

  {id:'ln-sweetpotato-feta', cat:'quick', name:'Sweet Potato & Feta Bowl', emoji:'🍠', cuisine:'Modern', time:35, costPP:18, diet:'veg',
    feel:'Sweet, salty and golden — a warm bowl that feels like a treat.',
    ingredients:[{n:'sweet potato',pp:200,u:'g'},{n:'feta',pp:40,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'rocket',pp:30,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'honey',pp:6,u:'ml'}],
    method:['Roast the cubed sweet potato and chickpeas with oil until soft and caramelised.','Pile onto a bed of rocket.','Crumble over the feta and drizzle with honey and a little oil.','Season with black pepper.'],
    tip:'A pinch of chilli flakes against the sweet potato and honey is lovely.',
    nutrition:{kcal:430,protein_g:13,carbs_g:54,fat_g:18}, storage:'Roast veg keeps 3 days.'},

  {id:'ln-chicken-rice-bowl', cat:'quick', name:'Chicken & Rice Bowl', emoji:'🍚', cuisine:'Modern', time:25, costPP:26, diet:'meat',
    feel:'A simple, satisfying bowl that hits the spot every time.',
    ingredients:[{n:'chicken breasts',pp:110,u:'g'},{n:'rice',pp:80,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'mayonnaise',pp:15,u:'g'},{n:'soy sauce',pp:10,u:'ml'}],
    method:['Season and pan-fry the chicken until golden, then slice.','Cook the rice.','Build the bowl with rice, chicken and fresh veg.','Drizzle with a quick sauce of mayo, soy and sriracha.'],
    tip:'Marinate the chicken in soy, garlic and honey for extra flavour.',
    nutrition:{kcal:480,protein_g:34,carbs_g:56,fat_g:12}, storage:'Components keep 3 days.'},

  {id:'ln-couscous-bowl', cat:'quick', name:'Couscous Bowl', emoji:'🥣', cuisine:'North African', time:20, costPP:16, diet:'vegan',
    feel:'Fluffy, herby and quick — ready almost as fast as the kettle boils.',
    ingredients:[{n:'couscous',pp:80,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'parsley',pp:5,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'olive oil',pp:12,u:'ml'}],
    method:['Pour boiling stock over the couscous, cover 5 minutes, then fluff with a fork.','Fold through the chickpeas and chopped veg.','Dress with lemon, olive oil and lots of parsley.','Season well.'],
    tip:'Stir a spoon of harissa through for warmth and depth.',
    nutrition:{kcal:400,protein_g:12,carbs_g:60,fat_g:13}, storage:'Keeps 3 days; great packed.'},

  {id:'ln-poke-bowl', cat:'quick', name:'Poke Bowl', emoji:'🐟', cuisine:'Hawaiian', time:20, costPP:40, diet:'meat',
    feel:'Fresh, clean and a little bit special — sushi in a bowl.',
    ingredients:[{n:'tuna',pp:90,u:'g'},{n:'rice',pp:80,u:'g'},{n:'edamame',pp:40,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'avocado',pp:50,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Cook the rice and let it cool to warm.','Dice fresh, sushi-grade tuna and toss with soy and sesame oil.','Build the bowl with rice, tuna, edamame, cucumber and avocado.','Finish with sesame seeds and a drizzle of the dressing.'],
    tip:'Only use very fresh, sushi-grade fish for raw poke — otherwise sear it instead.',
    nutrition:{kcal:460,protein_g:30,carbs_g:50,fat_g:15}, storage:'Eat fresh; do not keep raw fish.'},

  {id:'ln-ramen', cat:'quick', name:'Ramen', emoji:'🍜', cuisine:'Japanese', time:30, costPP:26, diet:'meat',
    feel:'A steaming bowl of savoury broth, noodles and a jammy egg.',
    ingredients:[{n:'ramen noodles',pp:80,u:'g'},{n:'chicken broth',pp:350,u:'ml'},{n:'chicken breasts',pp:70,u:'g'},{n:'large eggs',pp:0.5,u:'egg'},{n:'spring onion',pp:20,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'ginger',pp:5,u:'g'}],
    method:['Simmer the broth with ginger, garlic and soy for 10 minutes to deepen it.','Poach the chicken in the broth, then slice.','Soft-boil the eggs for 7 minutes and halve.','Cook the noodles, divide into bowls, pour over broth and top with chicken, egg and spring onion.'],
    tip:'A spoon of miso stirred into the broth adds gorgeous savoury depth.',
    nutrition:{kcal:470,protein_g:28,carbs_g:54,fat_g:14}, storage:'Keep broth and noodles separate; assemble fresh.'},

  {id:'ln-nasi-goreng', cat:'quick', name:'Nasi Goreng', emoji:'🍚', cuisine:'Indonesian', time:25, costPP:24, diet:'meat',
    feel:'Sweet-savoury fried rice with a fried egg crowning the top.',
    ingredients:[{n:'rice',pp:90,u:'g'},{n:'chicken breasts',pp:80,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'soy sauce',pp:16,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'chilli',pp:3,u:'g'}],
    method:['Stir-fry the diced chicken with garlic and chilli until cooked.','Add cold cooked rice and toss over high heat.','Season with sweet soy (soy plus a little sugar) until sticky and dark.','Top each bowl with a fried egg.'],
    tip:'Kecap manis (sweet soy) is the authentic touch — or just add brown sugar to soy.',
    nutrition:{kcal:460,protein_g:26,carbs_g:58,fat_g:14}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-singapore-noodles', cat:'quick', name:'Singapore Noodles', emoji:'🍜', cuisine:'Chinese', time:25, costPP:30, diet:'meat',
    feel:'Light curried noodles tangled with prawns and crunchy veg.',
    ingredients:[{n:'rice noodles',pp:80,u:'g'},{n:'prawns',pp:70,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'red pepper',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'soy sauce',pp:14,u:'ml'}],
    method:['Soak the rice noodles until soft, then drain.','Scramble the egg and set aside; stir-fry the prawns and veg.','Add the noodles and curry powder and toss over high heat.','Return the egg, splash in soy, and toss to combine.'],
    tip:'The curry powder is what makes them Singapore noodles — add it to the oil so it blooms.',
    nutrition:{kcal:420,protein_g:20,carbs_g:54,fat_g:12}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-gnocchi-tomato', cat:'quick', name:'Gnocchi & Tomato', emoji:'🥟', cuisine:'Italian', time:20, costPP:18, diet:'veg',
    feel:'Pillowy gnocchi in a rich tomato sauce — fast, cosy comfort.',
    ingredients:[{n:'gnocchi',pp:150,u:'g'},{n:'tomatoes',pp:120,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'onion',pp:30,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'basil',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Simmer a quick tomato sauce with onion, garlic and basil.','Boil the gnocchi until they float, then drain.','Toss the gnocchi through the sauce.','Serve with parmesan and a drizzle of oil.'],
    tip:'Pan-fry the boiled gnocchi in a little butter first for crispy edges.',
    nutrition:{kcal:400,protein_g:11,carbs_g:64,fat_g:11}, storage:'Best fresh; sauce keeps 4 days.'},

  {id:'ln-halloumi-roastveg-bowl', cat:'quick', name:'Halloumi & Roast Veg Bowl', emoji:'🧀', cuisine:'Mediterranean', time:35, costPP:30, diet:'veg',
    feel:'Golden halloumi over warm, sticky roasted vegetables.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'courgettes',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:40,u:'g'},{n:'couscous',pp:60,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'lemon',pp:0.3,u:''}],
    method:['Roast the chopped veg with oil at 200°C for 20 minutes until caramelised.','Make the couscous with boiling stock and fluff.','Fry the sliced halloumi until golden.','Build the bowl with couscous, roast veg and halloumi, and finish with lemon.'],
    tip:'Fry the halloumi last so it\'s hot and squeaky when it hits the bowl.',
    nutrition:{kcal:470,protein_g:18,carbs_g:46,fat_g:24}, storage:'Roast veg keeps 3 days; fry halloumi to order.'},

  {id:'ln-pap-sheba', cat:'quick', name:'Pap & Sheba', emoji:'🌽', cuisine:'South African', time:30, costPP:10, diet:'vegan',
    feel:'Soft, comforting pap under a rich, savoury tomato-onion relish.',
    ingredients:[{n:'maize meal',pp:80,u:'g'},{n:'tomatoes',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'green pepper',pp:30,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cook the pap: rain maize meal into boiling salted water, then steam covered 20 minutes, stirring now and then.','For the sheba, fry the onion and pepper, then add tomatoes and tomato paste.','Simmer the relish until thick and rich, and season well.','Spoon the sheba over the pap.'],
    tip:'A pinch of curry powder or chakalaka spice lifts the sheba beautifully.',
    nutrition:{kcal:340,protein_g:7,carbs_g:62,fat_g:8}, storage:'Both keep 3 days; reheat with a splash of water.'},

  {id:'ln-curry-rice', cat:'quick', name:'Curry & Rice', emoji:'🍛', cuisine:'South African', time:40, costPP:28, diet:'meat',
    feel:'A small, warming bowl of fragrant curry over fluffy rice.',
    ingredients:[{n:'chicken breasts',pp:110,u:'g'},{n:'rice',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'ginger',pp:5,u:'g'}],
    method:['Soften the onion, garlic and ginger, then toast the curry powder in the oil.','Add the chicken and brown, then the tomatoes, and simmer 20 minutes until rich.','Cook the rice.','Spoon the curry over the rice and serve with a dollop of yoghurt or chutney.'],
    tip:'Toasting the curry powder before adding liquid wakes up all the spices.',
    nutrition:{kcal:470,protein_g:32,carbs_g:54,fat_g:13}, storage:'Curry keeps 3 days; freezes well.'},

  {id:'ln-guac-nachos', cat:'quick', name:'Guacamole & Nachos', emoji:'🥑', cuisine:'Tex-Mex', time:15, costPP:22, diet:'veg',
    feel:'Crunchy, cheesy, loaded nachos with cool, fresh guac.',
    ingredients:[{n:'corn chips',pp:80,u:'g'},{n:'avocado',pp:80,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'red onion',pp:20,u:'g'},{n:'lime',pp:0.3,u:''}],
    method:['Mash the avocado with lime, finely diced onion, tomato and salt for the guacamole.','Spread the corn chips on a tray and scatter over the cheese.','Grill or bake until the cheese melts and bubbles.','Top with the guacamole and serve.'],
    tip:'Add jalapeños, beans or sour cream to load them up. Press cling film onto the guac to keep it green.',
    nutrition:{kcal:440,protein_g:11,carbs_g:38,fat_g:28}, storage:'Best fresh; guac keeps 1 day pressed.'},

  // ───────────────── 🧆 SAVOURY BAKES & SMALL PLATES (12) ─────────────────
  {id:'ln-samosas', cat:'savbakes', name:'Samosas', emoji:'🥟', cuisine:'Indian / Cape Malay', time:45, costPP:16, diet:'veg', // ⚑DUP
    feel:'Crisp golden triangles with a spiced, savoury middle.',
    ingredients:[{n:'samosa pastry',pp:4,u:''},{n:'potatoes',pp:80,u:'g'},{n:'frozen peas',pp:30,u:'g'},{n:'onion',pp:30,u:'g'},{n:'curry powder',pp:5,u:'g'},{n:'oil',pp:20,u:'ml'}],
    method:['Cook a spiced filling of potato, peas, onion and curry powder until dry and fragrant.','Fold the pastry strips into triangle pockets and fill.','Seal the edges with a flour-and-water paste.','Deep-fry until golden and crisp, then drain.'],
    tip:'Keep the filling on the dry side so the pastry stays crisp, not soggy.',
    nutrition:{kcal:280,protein_g:6,carbs_g:34,fat_g:14}, storage:'Freeze uncooked; fry from frozen.'},

  {id:'ln-spring-rolls', cat:'savbakes', name:'Spring Rolls', emoji:'🥢', cuisine:'Chinese', time:40, costPP:15, diet:'veg', // ⚑DUP
    feel:'Shatteringly crisp outside, fresh and crunchy within.',
    ingredients:[{n:'spring roll wrappers',pp:3,u:''},{n:'cabbage',pp:60,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'soy sauce',pp:10,u:'ml'},{n:'oil',pp:20,u:'ml'}],
    method:['Stir-fry the shredded veg briefly with soy, then cool completely.','Roll the filling tightly in the wrappers, sealing the edge with paste.','Deep-fry until golden and crisp.','Drain and serve with sweet chilli sauce.'],
    tip:'Cool the filling fully before rolling, or the wrappers go soggy and split.',
    nutrition:{kcal:240,protein_g:5,carbs_g:30,fat_g:12}, storage:'Freeze uncooked; fry from frozen.'},

  {id:'ln-bruschetta', cat:'savbakes', name:'Bruschetta', emoji:'🍅', cuisine:'Italian', time:15, costPP:16, diet:'veg', // ⚑DUP
    feel:'Garlicky toast piled with bright, juicy tomatoes.',
    ingredients:[{n:'ciabatta',pp:0.5,u:''},{n:'tomatoes',pp:100,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'basil',pp:4,u:'g'},{n:'olive oil',pp:14,u:'ml'}],
    method:['Toast or griddle slices of bread until golden.','Rub the warm toast with a cut garlic clove.','Toss diced tomatoes with basil, olive oil and salt.','Spoon over the toast just before serving.'],
    tip:'Spoon the tomato on at the last second so the toast stays crunchy.',
    nutrition:{kcal:240,protein_g:6,carbs_g:30,fat_g:11}, storage:'Best assembled fresh.'},

  {id:'ln-biltong-salad', cat:'savbakes', name:'Biltong & Salad Plate', emoji:'🥩', cuisine:'South African', time:10, costPP:34, diet:'meat', // ⚑DUP
    feel:'A proper South African snack plate — savoury, fresh and moreish.',
    ingredients:[{n:'biltong',pp:50,u:'g'},{n:'lettuce',pp:50,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'feta',pp:30,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Arrange a bed of leaves, tomato and cucumber.','Scatter over sliced biltong and crumbled feta.','Drizzle with olive oil and a squeeze of lemon.','Season with black pepper.'],
    tip:'Add avocado and a handful of nuts to turn the plate into a full meal.',
    nutrition:{kcal:320,protein_g:24,carbs_g:8,fat_g:21}, storage:'Best fresh; biltong keeps for ages.'},

  {id:'ln-sausage-rolls', cat:'savbakes', name:'Sausage Rolls', emoji:'🌭', cuisine:'British', time:40, costPP:18, diet:'meat', // ⚑DUP
    feel:'Flaky, golden pastry around a savoury, herby sausage middle.',
    ingredients:[{n:'puff pastry',pp:80,u:'g'},{n:'sausage meat',pp:90,u:'g'},{n:'onion',pp:20,u:'g'},{n:'large eggs',pp:0.25,u:'egg'},{n:'mixed herbs'}],
    method:['Mix the sausage meat with grated onion, herbs and seasoning.','Roll into a log along a strip of pastry and seal the edge underneath.','Cut into pieces, brush with beaten egg, and score the tops.','Bake at 200°C for 25 minutes until puffed and deep golden.'],
    tip:'Chill the rolls for 10 minutes before baking so the pastry puffs higher.',
    nutrition:{kcal:380,protein_g:12,carbs_g:26,fat_g:26}, storage:'Freeze uncooked; bake from frozen.'},

  {id:'ln-hummus-veg-sticks', cat:'savbakes', name:'Hummus & Veg Sticks', emoji:'🥕', cuisine:'Mediterranean', time:10, costPP:14, diet:'vegan', // ⚑DUP
    feel:'Fresh, crunchy and the easiest healthy snack-lunch going.',
    ingredients:[{n:'hummus',pp:60,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'celery',pp:40,u:'g'}],
    method:['Spoon the hummus into a bowl and swirl with a little olive oil and paprika.','Cut the vegetables into sticks.','Arrange around the hummus for dipping.'],
    tip:'Add pita wedges or olives to make it a fuller mezze plate.',
    nutrition:{kcal:220,protein_g:8,carbs_g:24,fat_g:11}, storage:'Veg keeps 3 days in water in the fridge.'},

  {id:'ln-chicken-livers-periperi', cat:'savbakes', name:'Peri-Peri Chicken Livers', emoji:'🔥', cuisine:'South African', time:25, costPP:18, diet:'meat', // ⚑DUP
    feel:'Rich, spicy livers in a buttery peri-peri sauce — proper starter food.',
    ingredients:[{n:'chicken livers',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'butter',pp:12,u:'g'}],
    method:['Clean and trim the livers.','Fry the onion and garlic in butter, then add the livers and brown.','Stir in the peri-peri and tomato and simmer 8 minutes until just cooked through.','Serve hot with bread to mop up the sauce.'],
    tip:'Don\'t overcook the livers — they should be just pink and tender inside.',
    nutrition:{kcal:280,protein_g:24,carbs_g:8,fat_g:17}, storage:'Keeps 2 days; reheat gently.'},

  {id:'ln-mini-quiches', cat:'savbakes', name:'Mini Quiches', emoji:'🥧', cuisine:'French', time:40, costPP:18, diet:'veg',
    feel:'Buttery little tarts with a soft, savoury egg filling.',
    ingredients:[{n:'puff pastry',pp:60,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'cream',pp:30,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'onion',pp:20,u:'g'},{n:'spinach',pp:30,u:'g'}],
    method:['Line a muffin tin with pastry rounds.','Whisk the eggs with cream, cheese and seasoning.','Add a little softened onion and spinach to each, then pour in the egg mix.','Bake at 180°C for 20 to 25 minutes until set and golden.'],
    tip:'Don\'t overfill — leave a few millimetres so they don\'t spill as they puff.',
    nutrition:{kcal:300,protein_g:11,carbs_g:20,fat_g:20}, storage:'Keep 3 days; great cold in lunchboxes.'},

  {id:'ln-savoury-muffins', cat:'savbakes', name:'Savoury Muffins', emoji:'🧁', cuisine:'Modern', time:35, costPP:14, diet:'veg',
    feel:'Cheesy, savoury muffins that work for breakfast, lunch or a snack.',
    ingredients:[{n:'cake flour',pp:60,u:'g'},{n:'large eggs',pp:0.5,u:'egg'},{n:'milk',pp:80,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Mix the dry ingredients in one bowl and the wet in another.','Fold together with the cheese and any extras (corn, herbs, spring onion) until just combined.','Spoon into muffin cases.','Bake at 190°C for 20 minutes until risen and golden.'],
    tip:'Don\'t overmix — a few lumps in the batter make for lighter muffins.',
    nutrition:{kcal:260,protein_g:9,carbs_g:30,fat_g:11}, storage:'Keep 3 days; freeze well.'},

  {id:'ln-cheese-crackers-board', cat:'savbakes', name:'Cheese & Crackers Board', emoji:'🧀', cuisine:'Classic', time:10, costPP:30, diet:'veg',
    feel:'A graze-able little board — no cooking, all pleasure.',
    ingredients:[{n:'cheddar',pp:50,u:'g'},{n:'crackers',pp:40,u:'g'},{n:'grapes',pp:60,u:'g'},{n:'chutney',pp:20,u:'g'},{n:'nuts',pp:20,u:'g'}],
    method:['Slice the cheese and arrange on a board with the crackers.','Add the grapes, a little pot of chutney and a handful of nuts.','Serve as a relaxed, graze-able lunch.'],
    tip:'Mix a hard and a soft cheese, and add fresh fruit, for variety and balance.',
    nutrition:{kcal:420,protein_g:15,carbs_g:32,fat_g:26}, storage:'Components keep well; assemble fresh.'},

  {id:'ln-chicken-goujons', cat:'savbakes', name:'Chicken Goujons', emoji:'🍗', cuisine:'Comfort', time:30, costPP:24, diet:'meat',
    feel:'Crisp, golden chicken strips that everyone reaches for.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'breadcrumbs',pp:40,u:'g'},{n:'large eggs',pp:0.5,u:'egg'},{n:'cake flour',pp:20,u:'g'},{n:'oil',pp:20,u:'ml'}],
    method:['Cut the chicken into strips.','Coat each in flour, then beaten egg, then breadcrumbs.','Shallow-fry or oven-bake at 200°C until golden and cooked through.','Serve with a dipping sauce and lemon.'],
    tip:'A little paprika and parmesan in the crumb makes the coating extra savoury.',
    nutrition:{kcal:360,protein_g:30,carbs_g:24,fat_g:16}, storage:'Best fresh; re-crisp in the oven.'},

  {id:'ln-jalapeno-poppers', cat:'savbakes', name:'Jalapeño Poppers', emoji:'🌶️', cuisine:'Tex-Mex', time:30, costPP:18, diet:'veg',
    feel:'Creamy, cheesy and just spicy enough — properly moreish.',
    ingredients:[{n:'jalapenos',pp:80,u:'g'},{n:'cream cheese',pp:50,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'breadcrumbs',pp:25,u:'g'},{n:'large eggs',pp:0.25,u:'egg'}],
    method:['Halve the jalapeños and scoop out the seeds.','Mix the cream cheese with grated cheddar and fill each half.','Dip in egg and breadcrumbs.','Bake at 200°C for 18 to 20 minutes until golden and bubbling.'],
    tip:'Leave a few seeds in if you like more heat; remove them all for milder poppers.',
    nutrition:{kcal:260,protein_g:9,carbs_g:18,fat_g:17}, storage:'Best fresh and hot.'},
  {id:'ln-bacon-cheese-wedges', cat:'savbakes', diet:'meat', protein:'pork', name:'Bacon Cheese Potato Wedges', emoji:'🥔', cuisine:'American', time:60, costPP:22,
    feel:'Crisp wedges drowning in melty cheese and bacon — the plate every fork drifts toward.',
    ingredients:[{n:'potatoes',pp:200,u:'g'},{n:'bacon',pp:15,u:'g'},{n:'cheddar cheese',pp:30,u:'g'},{n:'mozzarella',pp:15,u:'g'},{n:'plain yoghurt',pp:40,u:'g'},{n:'ranch dressing',pp:20,u:'ml'},{n:'milk',pp:10,u:'ml'},{n:'spring onion',pp:10,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cut the potatoes into thick steak-fry wedges, dry well and toss with the olive oil.','Stir the yoghurt, ranch and milk together for the sauce and set aside.','Spread the wedges in a single layer on a lined tray, season, and bake at 200°C for about 40 minutes until tender and golden.','Spread half the sauce on an oven dish, lay the wedges on top and spoon over the rest, then scatter with the cheeses and bacon.','Return to the oven for 5–10 minutes until melted and bubbling, then finish with sliced spring onion.'],
    tip:'Dry the cut wedges well before oiling so they crisp instead of steam.',
    nutrition:{kcal:420,protein_g:16,carbs_g:38,fat_g:24}, storage:'Best fresh and hot.'},
];


function mealSectionHTML(sectionKey){
  const configs = {
    breakfast:  {title:"Breakfast",         emoji:"🍳", color:"#d0a020", bg:"#181008", border:"#3a2010", recipes:typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],  sub:"Morning meals · Start your day right", cats:[{id:'savoury',e:'🍳',l:'Savoury & Cooked'},{id:'warm',e:'🥣',l:'Warm & Comforting'},{id:'sweet',e:'🥐',l:'Sweet & Baked'},{id:'fresh',e:'🍓',l:'Fresh & Light'},{id:'go',e:'🥤',l:'On the Go'}]},
    lightlunch: {title:"Light Lunch",       emoji:"🥗", color:"#30a070", bg:"#081810", border:"#1a4025", recipes:typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],sub:"Salads · Wraps · Soups · Quick meals", cats:[{id:'salads',e:'🥗',l:'Salads & Bowls'},{id:'handhelds',e:'🥪',l:'Sandwiches & Wraps'},{id:'soups',e:'🍲',l:'Soups'},{id:'savbakes',e:'🥧',l:'Savoury Bakes'},{id:'quick',e:'⚡',l:'Quick & Light'}]},
    supper:     {title:"Supper",            emoji:"🍽️", color:"#6080d0", bg:"#080f18", border:"#1a2840", recipes:typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],        sub:"Evening meals · Family dinners", cats:[{id:'plates',e:'🍳',l:'Homestyle Plates'},{id:'pastapizza',e:'🍝',l:'Pasta & Pizza'},{id:'stewscurries',e:'🍛',l:'Stews, Curries & One-Pots'},{id:'ovenbakes',e:'🥧',l:'Oven Bakes & Roasts'},{id:'friedgrilled',e:'🍔',l:'Fried & Grilled'}]},
    bakes:      {title:"Bakes & Cakes",     emoji:"🧁", color:"#d06080", bg:"#180810", border:"#401020", recipes:typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],          sub:"Cakes · Biscuits · Breads · Desserts", cats:[{id:'breads',e:'🍞',l:'Breads & Rolls'},{id:'flatbreads',e:'🫓',l:'Flatbreads'},{id:'quickbreads',e:'🧁',l:'Muffins & Quick Breads'},{id:'biscuits',e:'🍪',l:'Biscuits & Rusks'},{id:'cakes',e:'🎂',l:'Cakes & Cupcakes'},{id:'pastries',e:'🥐',l:'Pastries & Tarts'}]},
  };
  const cfg = configs[sectionKey];
  if(!cfg) return comingSoonHTML("🍽️","Section","Coming soon");

  // Plan view
  if(S.mealPlanView){
    window._sectionPlanForShare = S.mealPlan||[];
    return sectionPlanView('mealPlan', cfg.title+' Plan', cfg.emoji||'🍽️', cfg.color, cfg.bg, cfg.border, S.searchServings||4, "setQuiet({mealPlanView:false})");
  }

  // Recipe detail view
  const activeRecipe = S.mealActiveRecipe;
  if(activeRecipe && activeRecipe._section===sectionKey){
    return recipeDetailFromResult(activeRecipe, "setQuiet({mealActiveRecipe:null})", S.searchServings||4, cfg.color, cfg.bg, cfg.border);
  }

  // List view
  const sort = S.mealSort||'popular';
  let recipes = [...(cfg.recipes||[])];

  // Category pills (braai-style) — only for sections that define cfg.cats
  const cats = cfg.cats || null;
  let activeCat = null, activeCatObj = null;
  if(cats){
    activeCat = cats.find(c=>c.id===S.mealCat) ? S.mealCat : cats[0].id;
    activeCatObj = cats.find(c=>c.id===activeCat);
    recipes = recipes.filter(r=>r.cat===activeCat);
  }

  // Search filter
  if(S.mealSearch){
    const q = S.mealSearch.toLowerCase();
    recipes = recipes.filter(r=>(r.name+' '+(r.cuisine||'')+' '+(r.feel||'')).toLowerCase().includes(q));
  }

  if(sort==='az') recipes.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='time') recipes.sort((a,b)=>(a.time||0)-(b.time||0));

  const mealHowOpen = S.mealHowOpen || false;

  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${cfg.bg} 0%,#0f0e0c 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,4,0.3) 0%,rgba(8,6,4,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'feedfamily'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${cfg.border};border-radius:20px;color:${cfg.color};font-size:13px;padding:5px 12px;cursor:pointer;">← Family Meals</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">${cfg.emoji} ${cfg.title}</h1>
        <p style="margin:0 0 10px;font-size:13px;color:${cfg.color};font-style:italic;opacity:0.9;">${cfg.sub}</p>
        <div style="display:flex;align-items:center;background:rgba(12,10,8,0.85);border:1px solid ${cfg.border};border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:${cfg.color};margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search ${cfg.title.toLowerCase()} recipes…"
            oninput="set({mealSearch:this.value})"
            value="${S.mealSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#e0d0c0;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.mealSearch?`<button onclick="set({mealSearch:''})" style="background:none;border:none;color:${cfg.border};font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + SORT ══ -->
    <div style="background:${cfg.bg};border-bottom:1px solid ${cfg.border};padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;">
        <div style="flex:1;">
          <button onclick="set({mealHowOpen:!S.mealHowOpen})"
            style="background:none;border:none;color:${cfg.color};font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${mealHowOpen?'▲':'▼'} How it works
          </button>
          ${mealHowOpen?`
            <div onclick="set({mealHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#b0a080;line-height:1.6;">
              <strong style="color:${cfg.color};">1. Browse recipes</strong> — sort by popular, A–Z or quickest.<br>
              <strong style="color:${cfg.color};">2. Tap Recipe →</strong> — full ingredients, method and scaling.<br>
              <strong style="color:${cfg.color};">3. Add to My Plan</strong> — build your weekly meal plan.<br>
              <span style="color:#828270;font-size:13px;">All quantities scale automatically per person.</span>
            </div>
          `:''}
        </div>
        <!-- Sort pills -->
        <div style="display:flex;gap:5px;flex-shrink:0;">
          ${[{id:'popular',l:'⭐'},{id:'az',l:'A–Z'},{id:'time',l:'⏱️'}].map(s=>`<button onclick="setQuiet({mealSort:'${s.id}'})" style="padding:5px 10px;border-radius:20px;border:1px solid ${sort===s.id?cfg.color:cfg.border};background:${sort===s.id?'rgba(255,255,255,0.1)':'transparent'};color:${sort===s.id?cfg.color:'#4a4a40'};font-size:13px;cursor:pointer;">${s.l}</button>`).join('')}
        </div>
      </div>
    </div>

    <div style="padding:12px 16px;max-width:600px;margin:0 auto;">
      ${cats?`
      <!-- ══ CATEGORY PILLS (braai-style) ══ -->
      <div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:6px;margin-bottom:12px;">
        ${cats.map(c=>`<button onclick="setQuiet({mealCat:'${c.id}'})" style="white-space:nowrap;flex-shrink:0;padding:7px 13px;border-radius:20px;border:1px solid ${activeCat===c.id?cfg.color:cfg.border};background:${activeCat===c.id?'rgba(255,255,255,0.08)':'transparent'};color:${activeCat===c.id?cfg.color:'#6a6050'};font-size:13px;cursor:pointer;">${c.e} ${c.l}</button>`).join('')}
      </div>
      <div style="font-size:13px;letter-spacing:2px;color:${cfg.color};text-transform:uppercase;margin-bottom:10px;">${activeCatObj.e} ${activeCatObj.l} — ${recipes.length} ${recipes.length===1?'option':'options'}</div>
      `:`<div style="font-size:13px;color:#828270;margin-bottom:10px;">${recipes.length} recipes</div>`}
      ${recipes.length===0?`<div style="padding:22px;text-align:center;color:#908066;font-size:13px;background:#161210;border:1px solid #2a2a20;border-radius:10px;margin-bottom:6px;">Nothing here yet — try another category${S.mealSearch?' or clear your search':''}.</div>`:''}
      ${recipes.map((r,i)=>{
        const inPlan = isPlanItem('mealPlan', r.id);
        // Shared Warm Spice photo card (Rule Zero) — identical to World Kitchen's
        // wkRecipeCard. Top-left checkbox toggles the EXISTING meal plan
        // (toggleMealPlan, NOT wkPlanToggle); the card opens via openMealRecipe.
        // Cost chip shows ONLY when the meal carries a per-person cost (else blank).
        const metaTxt = [r.feel, (r.time?'⏱️ '+r.time+' min':'')].filter(Boolean).join(' · ');
        return warmCard({
          name: dietTag(r.diet)+r.name,
          photoName: r.name,
          emoji: r.emoji || '🍽️',
          sub: r.cuisine || '',
          meta: metaTxt,
          costPP: r.costPP || '',
          openJs: "openMealRecipe('"+r.id+"')",
          toggleJs: "toggleMealPlan('"+r.id+"')",
          sel: inPlan
        });
      }).join('')}
      ${sectionPlanBtn('mealPlan', cfg.title, cfg.emoji||'🍽️', cfg.color, cfg.bg, S.searchServings||4, "setQuiet({mealPlanView:true})")}
      <div style="margin-top:8px;padding:14px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;text-align:center;">
        <div style="font-size:13px;color:#828270;margin-bottom:8px;">Can't find what you're looking for?</div>
        <button onclick="set({screen:'search'})" style="padding:10px 20px;background:#1a1208;border:2px solid #c06020;border-radius:10px;color:#e0a060;font-size:13px;cursor:pointer;">🔍 Search All Recipes</button>
      </div>
    </div>
  </div>`;
}

// ── TINY & FURRY — front door to Tiny Tummies + Furry Friends (braai v33 template) ──
function tinyFurryHTML(){
  const ONES = [
    {s:'babyapp',  e:'🍼', t:'Tiny Tummies',  sub:'Age-appropriate baby & toddler recipes'},
    {s:'furryapp', e:'🐾', t:'Furry Friends',  sub:'Dogs & Cats · Meals · Treats & Biscuits'},
  ];
  const HEAD = '#c08040', HBG = '#1a1208', HBORDER = '#3a2010';
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${HBG} 0%,#0f0e0c 100%);">
      <img src="Images/Image%20header/tinyfurry.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,5,2,0.3) 0%,rgba(8,5,2,0.78) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍼🐾 Tiny & Furry</h1>
        <p style="margin:0;font-size:13px;color:${HEAD};font-style:italic;opacity:0.9;">The littlest and furriest mouths — fed with the same love</p>
      </div>
    </div>

    <!-- ══ SECTION BOXES (warm 2-col grid · identical boxes) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:2px;color:#a87849;text-transform:uppercase;margin-bottom:10px;">Who are we feeding?</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
        ${ONES.map(o=>`
          <div onclick="set({screen:'${o.s}'})"
            style="background:#161210;border:1px solid #2a1a10;border-radius:14px;padding:14px 8px;min-height:96px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;"
            onmouseover="this.style.borderColor='#c06020'" onmouseout="this.style.borderColor='#2a1a10'">
            <div style="font-size:24px;margin-bottom:4px;">${o.e}</div>
            <div style="font-size:16px;color:#f5e8cc;font-family:Georgia,serif;font-weight:bold;margin-bottom:2px;line-height:1.2;">${o.t}</div>
            <div style="font-size:14px;color:#e0d4b8;line-height:1.4;">${o.sub}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}


function breakfastHTML(){ return mealSectionHTML('breakfast'); }
function lightlunchHTML(){ return mealSectionHTML('lightlunch'); }
function supperHTML(){ return mealSectionHTML('supper'); }
function bakesHTML(){ return mealSectionHTML('bakes'); }

// ── FEEDING MY FAMILY — front door to the 4 everyday-cooking sections (braai v33 template) ──
function feedingFamilyHTML(){
  const MEALS = [
    {s:'breakfast',  e:'🍳', t:'Breakfast',             sub:'Eggs · Oats · Pancakes · Smoothies',    b:'#d0a020', bg:'#1a1500'},
    {s:'lightlunch', e:'🥗', t:'Light Lunch',           sub:'Salads · Wraps · Soups · Quick meals',  b:'#40a060', bg:'#0a1a10'},
    {s:'supper',     e:'🍲', t:'Supper',                sub:'Family meals · Pasta · Curries · Stews', b:'#8040c0', bg:'#100818'},
    {s:'bakes',      e:'🍰', t:'Bakes, Cakes & Breads', sub:'Cakes · Biscuits · Breads · Rusks',     b:'#d06080', bg:'#1a0810'},
  ];
  const HEAD = '#c08040', HBG = '#1a1208', HBORDER = '#4a3520';
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${HBG} 0%,#0f0e0c 100%);">
      <img src="Images/Image%20header/feedfamily.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,4,0.3) 0%,rgba(8,6,4,0.78) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍽️ Feeding My Family</h1>
        <p style="margin:0;font-size:13px;color:${HEAD};font-style:italic;opacity:0.9;">Everyday cooking — morning to night, and something sweet</p>
      </div>
    </div>

    <!-- ══ MEAL-TYPE BOXES (2×2 grid · warm Spice palette) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:2px;color:#a87849;text-transform:uppercase;margin-bottom:10px;">Choose a meal</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
        ${MEALS.map(o=>`
          <div onclick="set({screen:'${o.s}'})"
            style="background:#161210;border:1px solid #2a1a10;border-radius:14px;padding:14px 8px;min-height:96px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;"
            onmouseover="this.style.borderColor='#c06020'" onmouseout="this.style.borderColor='#2a1a10'">
            <div style="font-size:24px;margin-bottom:4px;">${o.e}</div>
            <div style="font-size:16px;color:#f5e8cc;font-family:Georgia,serif;font-weight:bold;margin-bottom:2px;line-height:1.2;">${o.t}</div>
            <div style="font-size:14px;color:#e0d4b8;line-height:1.4;">${o.sub}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}


// ── 4 INGREDIENTS & ANCHOR INGREDIENT ────────────────────────────

async function findFourIngredients(){
  const ing = [
    S.ing1||'', S.ing2||'', S.ing3||'', S.ing4||''
  ].map(i=>i.trim()).filter(Boolean);

  if(ing.length < 2){
    setQuiet({_fourError:'Please enter at least 2 ingredients', _fourResults:null, _fourLoading:false});
    return;
  }

  setQuiet({_fourLoading:true, _fourResults:null, _fourError:null});

  // First search the app database
  const allRecipes = [
    ...(BREAKFAST_RECIPES||[]), ...(LIGHTLUNCH_RECIPES||[]),
    ...(SUPPER_RECIPES||[]), ...(BAKES_RECIPES||[]),
    ...(POPULAR_RECIPES.sa||[]), ...(POPULAR_RECIPES.international||[]),
    ...(WK_RECIPES||[]).filter(r=>r.ingredients),
  ];

  const ingLower = ing.map(i=>i.toLowerCase());
  const dbMatches = [];
  allRecipes.forEach(r=>{
    const recipeText = JSON.stringify(r).toLowerCase();
    const matched = ingLower.filter(i=>recipeText.includes(i));
    if(matched.length >= 2){
      dbMatches.push({...r, _matchCount:matched.length, _matched:matched, _source:'db'});
    }
  });
  dbMatches.sort((a,b)=>b._matchCount-a._matchCount);

  // Call Tinza Chef for generated recipes
  try {
    const prompt = `You are Tinza Chef, a South African recipe assistant.
The user has these ingredients: ${ing.join(', ')}

Generate 4 different recipe ideas that use most or all of these ingredients.
For each recipe, note which of the user's ingredients it uses.

Return ONLY a JSON array (no markdown, no backticks):
[
  {
    "name": "Recipe Name",
    "emoji": "single emoji",
    "time": 30,
    "cuisine": "cuisine type",
    "uses": ["ingredient1", "ingredient2"],
    "missing": ["other ingredient needed"],
    "serves": 4,
    "ingredients": [
      {"n": "ingredient name", "pp": 100, "u": "g", "userHas": true},
      {"n": "another ingredient", "pp": 15, "u": "ml", "userHas": false}
    ],
    "method": ["Step 1", "Step 2", "Step 3"],
    "tip": "One useful tip"
  }
]

Rules:
- All amounts in grams (g) or millilitres (ml) only
- pp = amount per 1 serving
- userHas = true if this ingredient was provided by the user
- Keep it practical and South African-friendly
- Generate exactly 4 recipes`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:2000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const chefRecipes = JSON.parse(clean);
    chefRecipes.forEach(r=>{ r._source='chef'; r._matchCount=(r.uses||[]).length; });

    // Combine: db matches first, then chef recipes
    const combined = [...dbMatches.slice(0,2), ...chefRecipes];
    setQuiet({_fourResults:combined, _fourLoading:false, _fourError:null});
  } catch(e){
    // Even if chef fails, show db results
    setQuiet({_fourResults:dbMatches.length>0?dbMatches:[], _fourLoading:false,
      _fourError:dbMatches.length===0?'No recipes found. Try different ingredients.':null});
  }
}

async function findAnchorIngredient(){
  const raw = (S.anchorInput||'').trim();
  if(!raw){
    setQuiet({_anchorError:'Please enter an ingredient', _anchorResults:null, _anchorLoading:false});
    return;
  }

  setQuiet({_anchorLoading:true, _anchorResults:null, _anchorError:null});

  // Parse quantity if given e.g. "beef mince 300g" or "whole chicken 1.1kg"
  const qtyMatch = raw.match(/([\d.]+)\s*(g|kg|ml|L|l)/i);
  const ingredient = raw.replace(/([\d.]+)\s*(g|kg|ml|L|l)/gi,'').trim();
  const userQty = qtyMatch ? parseFloat(qtyMatch[1]) * (qtyMatch[2].toLowerCase()==='kg'?1000:qtyMatch[2].toLowerCase()==='l'?1000:1) : null;
  const userUnit = qtyMatch ? (qtyMatch[2].toLowerCase()==='kg'?'g':qtyMatch[2].toLowerCase()==='l'?'ml':qtyMatch[2].toLowerCase()) : null;

  // Search database
  const allRecipes = [
    ...(BREAKFAST_RECIPES||[]), ...(LIGHTLUNCH_RECIPES||[]),
    ...(SUPPER_RECIPES||[]), ...(BAKES_RECIPES||[]),
    ...(POPULAR_RECIPES.sa||[]), ...(POPULAR_RECIPES.international||[]),
  ];
  const ingLower = ingredient.toLowerCase();
  const dbMatches = allRecipes.filter(r=>JSON.stringify(r).toLowerCase().includes(ingLower))
    .map(r=>({...r, _source:'db', _userQty:userQty, _userUnit:userUnit, _ingredient:ingredient}));

  // Call Tinza Chef
  try {
    const qtyNote = userQty ? ` The user has exactly ${userQty}${userUnit} of ${ingredient}.` : '';
    const prompt = `You are Tinza Chef, a South African recipe assistant.
The user has: ${raw}.${qtyNote}

Generate 4 different recipes that use ${ingredient} as the main ingredient.
${userQty ? `Scale each recipe to use approximately ${userQty}${userUnit} of ${ingredient}.` : ''}

Return ONLY a JSON array (no markdown, no backticks):
[
  {
    "name": "Recipe Name",
    "emoji": "single emoji",
    "time": 30,
    "cuisine": "cuisine type",
    "serves": 4,
    "mainIngredientPP": 150,
    "mainIngredientUnit": "g",
    "ingredients": [
      {"n": "${ingredient}", "pp": 150, "u": "g", "userHas": true},
      {"n": "other ingredient", "pp": 20, "u": "g", "userHas": false}
    ],
    "method": ["Step 1", "Step 2", "Step 3"],
    "tip": "One useful tip"
  }
]

Rules: all amounts in g or ml, pp = per serving, userHas true only for ${ingredient}`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:2000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const chefRecipes = JSON.parse(clean);
    chefRecipes.forEach(r=>{ r._source='chef'; r._userQty=userQty; r._userUnit=userUnit; r._ingredient=ingredient; });

    setQuiet({_anchorResults:[...dbMatches.slice(0,2),...chefRecipes], _anchorLoading:false, _anchorError:null});
  } catch(e){
    setQuiet({_anchorResults:dbMatches, _anchorLoading:false,
      _anchorError:dbMatches.length===0?'No recipes found. Try a different ingredient.':null});
  }
}

function openFourRecipe(i){ var a=S._fourResults||[]; if(a[i]) setQuiet({_fourActiveRecipe:a[i]}); }
function openAnchorRecipe(i){ var a=S._anchorResults||[]; if(a[i]) setQuiet({_anchorActiveRecipe:a[i]}); }

// ── 4 INGREDIENTS — opening page (warm v33 template) ──
function fourIngredientsHTML(){
  const color='#c06020', bg='#1a1208', border='#3a2010';
  if(S._fourActiveRecipe){
    return recipeDetailFromResult(S._fourActiveRecipe, "setQuiet({_fourActiveRecipe:null})", S.searchServings||4, color, bg, border);
  }
  const loading=S._fourLoading, results=S._fourResults, error=S._fourError;
  const howOpen=S.fourHowOpen||false;
  const ph=['e.g. chicken','e.g. rice','e.g. tomatoes','optional'];
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#0f0e0c 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${border};border-radius:20px;color:${color};font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🧅 4 Ingredients</h1>
        <p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;">What's in your fridge? Pop in 2–4 things and we'll find the meal.</p>
      </div>
    </div>

    <!-- ══ HOW IT WORKS ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <button onclick="set({fourHowOpen:!S.fourHowOpen})" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;font-family:Georgia,serif;">${howOpen?'▲':'▼'} How it works</button>
      ${howOpen?`
        <div onclick="set({fourHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
        <div style="position:relative;z-index:10;background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#e0d4b8;line-height:1.6;">
          <strong style="color:#f5c842;">1. Enter 2–4 ingredients</strong> — whatever's in your fridge or pantry.<br>
          <strong style="color:#f5c842;">2. Tap Find Recipes</strong> — Tinza checks its own recipes first, then asks Tinza Chef.<br>
          <strong style="color:#f5c842;">3. Tap any recipe</strong> — full ingredients and method.<br>
          <span style="color:#e0d4b8;font-size:13px;">The more ingredients you add, the closer the match.</span>
        </div>`:''}
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="font-size:13px;color:#e0d4b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Your ingredients</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
          ${[1,2,3,4].map(n=>`
            <div style="display:flex;align-items:center;gap:6px;background:#161210;border:2px solid ${border};border-radius:10px;padding:10px 12px;">
              <span style="font-size:13px;color:${color};font-weight:bold;flex-shrink:0;">${n}</span>
              <input type="text" value="${(S['ing'+n]||'').replace(/"/g,'&quot;')}" placeholder="${ph[n-1]}"
                oninput="S.ing${n}=this.value"
                style="flex:1;background:transparent;border:none;color:#f5e8cc;font-size:15px;font-family:Georgia,serif;outline:none;width:100%;" />
            </div>`).join('')}
        </div>
        <button onclick="findFourIngredients()" style="width:100%;padding:14px;border-radius:10px;background:#161210;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes…':'🔍 Find Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#e0d4b8;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Finding recipes from your ingredients…</div>
      </div>`:''}

      ${results&&results.length>0&&!loading?`
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Recipes you can make</div>
        ${results.map((r,i)=>recipeResultCard(r,"openFourRecipe("+i+")",color)).join('')}
        <button onclick="findFourIngredients()" style="width:100%;padding:11px;border-radius:10px;background:#161210;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">🔄 Find again</button>
      `:''}

      ${results&&results.length===0&&!loading&&!error?`<div style="text-align:center;padding:20px;color:#e0d4b8;font-size:13px;">No matches yet — try different ingredients.</div>`:''}
    </div>
  </div>`;
}

// ── ANCHOR INGREDIENT ("I Have Chicken…") — opening page (warm v33 template) ──
function anchorIngredientHTML(){
  const color='#c06020', bg='#1a1208', border='#3a2010';
  if(S._anchorActiveRecipe){
    return recipeDetailFromResult(S._anchorActiveRecipe, "setQuiet({_anchorActiveRecipe:null})", S.searchServings||4, color, bg, border);
  }
  const loading=S._anchorLoading, results=S._anchorResults, error=S._anchorError;
  const howOpen=S.anchorHowOpen||false;
  const chips=[['🐔','chicken'],['🥩','beef mince'],['🎃','butternut'],['🥚','eggs'],['🐟','tinned fish'],['🥔','potatoes']];
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#0f0e0c 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${border};border-radius:20px;color:${color};font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🐔 I Have Chicken…</h1>
        <p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;">Type any ingredient you've got — we'll build meals around it.</p>
      </div>
    </div>

    <!-- ══ HOW IT WORKS ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <button onclick="set({anchorHowOpen:!S.anchorHowOpen})" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;font-family:Georgia,serif;">${howOpen?'▲':'▼'} How it works</button>
      ${howOpen?`
        <div onclick="set({anchorHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
        <div style="position:relative;z-index:10;background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#e0d4b8;line-height:1.6;">
          <strong style="color:#f5c842;">1. Type your main ingredient</strong> — add a quantity if you like (e.g. "beef mince 500g").<br>
          <strong style="color:#f5c842;">2. Tap Find Recipes</strong> — every recipe is built around it.<br>
          <strong style="color:#f5c842;">3. Tap any recipe</strong> — full ingredients and method.<br>
          <span style="color:#e0d4b8;font-size:13px;">Add a weight and we'll scale the recipe to what you have.</span>
        </div>`:''}
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="font-size:13px;color:#e0d4b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Your main ingredient</div>
        <div style="background:#161210;border:2px solid ${border};border-radius:10px;padding:10px 12px;margin-bottom:12px;">
          <input type="text" value="${(S.anchorInput||'').replace(/"/g,'&quot;')}" placeholder="e.g. beef mince 500g, butternut, chicken thighs"
            oninput="S.anchorInput=this.value"
            style="width:100%;background:transparent;border:none;color:#f5e8cc;font-size:16px;font-family:Georgia,serif;outline:none;" />
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${chips.map(c=>`<button onclick="S.anchorInput='${c[1]}';findAnchorIngredient()" style="padding:6px 11px;border-radius:16px;border:1px solid ${border};background:transparent;color:#e0d4b8;font-size:13px;cursor:pointer;white-space:nowrap;">${c[0]} ${c[1]}</button>`).join('')}
        </div>
        <button onclick="findAnchorIngredient()" style="width:100%;padding:14px;border-radius:10px;background:#161210;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes…':'🔍 Find Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#e0d4b8;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Building meals around it…</div>
      </div>`:''}

      ${results&&results.length>0&&!loading?`
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Recipes built around it</div>
        ${results.map((r,i)=>recipeResultCard(r,"openAnchorRecipe("+i+")",color)).join('')}
        <button onclick="findAnchorIngredient()" style="width:100%;padding:11px;border-radius:10px;background:#161210;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">🔄 Find again</button>
      `:''}

      ${results&&results.length===0&&!loading&&!error?`<div style="text-align:center;padding:20px;color:#e0d4b8;font-size:13px;">No matches yet — try another ingredient.</div>`:''}
    </div>
  </div>`;
}

// ── veg/vegan badge: green "V" (vegetarian) or "VG" (vegan); blank for meat or
//    any recipe without a diet tag (so other sections are unaffected). ──
function dietTag(d){
  if(d!=='veg' && d!=='vegan') return '';
  var bg    = d==='vegan' ? '#1f7a3d' : '#c8e840';   // vegan = deep green · vegetarian = lime
  var fg    = d==='vegan' ? '#eafbe0' : '#2c3a06';
  var label = d==='vegan' ? 'VG' : 'V';
  var title = d==='vegan' ? 'Vegan' : 'Vegetarian';
  return '<span title="'+title+'" style="display:inline-block;font-size:10px;font-weight:800;line-height:1;color:'+fg+';background:'+bg+';border-radius:5px;padding:2px 5px;margin-right:6px;vertical-align:middle;letter-spacing:0.02em;">'+label+'</span>';
}

function recipeResultCard(r, onClickFn, color){
  const matchBadge = r._matchCount ? `<span style="background:#1f1206;border:1px solid #c06020;border-radius:8px;font-size:13px;color:#f5c842;padding:2px 6px;margin-right:3px;">✓ ${r._matchCount} ingredient${r._matchCount>1?'s':''} matched</span>` : '';
  const sourceBadge = r._source==='db' ? `<span style="background:#161210;border:1px solid #4a3018;border-radius:8px;font-size:13px;color:#e0d4b8;padding:2px 6px;">In Tinza</span>` : '';
  return `<div onclick="${onClickFn}" style="background:#141210;border:1px solid #2a2820;border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;">
    <span style="font-size:28px;flex-shrink:0;">${r.emoji||'🍽️'}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-size:14px;color:#f5e8cc;margin-bottom:3px;">${r.name}</div>
      <div style="font-size:13px;color:${color||'#e0d4b8'};">${r.cuisine||''} · ⏱️ ${r.time||'?'} min</div>
      <div style="margin-top:4px;">${matchBadge}${sourceBadge}</div>
    </div>
    <span style="color:${color||'#c06020'};font-size:14px;flex-shrink:0;">→</span>
  </div>`;
}

function recipeDetailFromResult(r, backAction, servings, color, bg, border){
  const sv = S._budgetActiveRecipe ? (S.budgetPeople||4)
           : S.moodActiveRecipe    ? (S.moodServings||1)
           : (S.searchServings||4);

  function fmtAmt(pp, u){
    if(!pp) return '';
    const raw = pp * sv;
    if(u==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((u==='g'||u==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(u==='g'?'kg':'L');
    return Math.round(raw*10)/10+(u||'');
  }

  // Pre-compute save state
  const _rid = r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase();
  const _saved = (S.savedRecipes||[]).some(x=>x.id===_rid);
  const _isPro = tierAllows('pro');
  const _rname = (r.name||'').replace(/'/g,'').replace(/"/g,'');
  const _remoji = r.emoji||'🍽️';

  // WhatsApp text built outside template literal
  const _waLines = (r.ingredients||[]).filter(i=>i.pp).map(i=>{
    const raw=i.pp*sv, u=i.u||'';
    const d=(raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L'):(Math.round(raw*10)/10)+u;
    return '• '+i.n+': '+d;
  }).join('\n');
  const _waText = encodeURIComponent(
    _remoji+' *'+_rname+'*\nFor '+sv+' people · '+(r.time||'?')+' min\n\nIngredients:\n'+_waLines+'\n\nFrom Tinza tinza.netlify.app'
  );

  // Cost estimate (if ingredients have costPP or we can estimate)
  const _costEstimate = (()=>{
    if(!_isPro) return `<div style="background:#1a1008;border:1px dashed #5a3010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">
      <div style="font-size:22px;color:#bf6d24;letter-spacing:6px;margin-bottom:6px;">R • • • •</div>
      <div style="font-size:13px;color:#c86449;">💰 Cost estimate — <strong style="color:${color};">Tinza Pro R50/month</strong></div>
    </div>`;
    if(r.costPP){
      const total = r.costPP * sv;
      return `<div style="background:#0f1a08;border:1px solid #5a8010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:10px;">💰 Cost Estimate</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#718933;">Total for ${sv} people</div>
          <div style="font-size:24px;font-weight:bold;color:#c8e840;">R${total}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #2a3010;">
          <div style="font-size:13px;color:#6a892e;">Per person</div>
          <div style="font-size:16px;font-weight:bold;color:#a0c030;">R${r.costPP}</div>
        </div>
        <div style="margin-top:8px;font-size:13px;color:#748932;">SA&#39;s biggest retailers · May 2026 · Always buy 10% extra.</div>
      </div>`;
    }
    return '';
  })();

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${r.emoji||'🍽️'} ${dietTag(r.diet)}${r.name}</h1>
      <div style="font-size:13px;color:${color};font-style:italic;">Full recipe and method</div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      ${r.feel?`<div style="font-style:italic;color:${color};font-size:13px;text-align:center;line-height:1.5;margin-bottom:14px;">“${r.feel}”</div>`:''}

      <!-- How much to make block -->
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:13px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 How Much To Make</div>
        <div style="font-size:13px;color:#718933;margin-bottom:10px;">${sv} ${sv===1?'person':'people'}</div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.max(1,(S[_k]||4)-1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">−</button>
          <div style="flex:1;text-align:center;">
            <div style="font-size:32px;font-weight:bold;color:#c8e840;">${sv}</div>
            <div style="font-size:13px;color:#718d28;">people · all quantities scale</div>
          </div>
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.min(500,(S[_k]||4)+1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">+</button>
        </div>
        <div style="margin-top:8px;font-size:13px;color:#6c8c23;">💡 Adjust the number and all ingredients update instantly.</div>
      </div>

      <!-- Ingredients — bullet style like braai, no tick boxes -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;">Ingredients</div>
          <div style="font-size:13px;color:#908066;font-style:italic;">scaled for ${sv} ${sv===1?'person':'people'}</div>
        </div>
        ${(r.ingredients||[]).map(i=>{
          if(!i.pp) return `<div style="padding:5px 0;border-bottom:1px solid #1a1810;font-size:13px;color:#8e7c7c;font-style:italic;">• ${i.n} — to taste</div>`;
          const raw=i.pp*sv, u=i.u||'';
          const ppStr=i.pp+(u==='egg'?' egg':u)+' pp';
          const totalStr=u==='egg'?Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'')
            :(raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L')
            :Math.round(raw*10)/10+u;
          return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #1a1810;">
            <span style="color:${color};flex-shrink:0;">•</span>
            <span style="font-size:14px;color:#e0d4b8;flex:1;">${i.n} — <span style="color:#908066;font-size:13px;">${ppStr}</span> · <strong style="color:#f5c842;">${totalStr} total</strong></span>
          </div>`;
        }).join('')}
        <div style="margin-top:8px;padding-top:6px;border-top:1px solid #1a1810;font-size:13px;color:#8e7c7c;font-style:italic;">📏 Raw/dry weights · Rice+pap grow 3x when cooked · Meat shrinks ~25%</div>
      </div>

      <!-- Method -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(r.method||[]).map((step,si)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div style="width:24px;height:24px;border-radius:50%;background:#0a0808;border:1px solid ${color};color:${color};font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${si+1}</div><p style="margin:2px 0 0;font-size:14px;color:#e0d4b8;line-height:1.7;">${step}</p></div>`).join('')}
      </div>

      <!-- Tip -->
      ${r.tip?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:6px;">💡 Tip</div>
        <p style="font-size:13px;color:#e0d4b8;line-height:1.6;margin:0;">${r.tip}</p>
      </div>`:''}

      <!-- Nutrition -->
      ${r.nutrition?`<div style="background:#0a1008;border:1px solid #1a3020;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:#40a060;text-transform:uppercase;margin-bottom:8px;">📊 Nutrition — per serving</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;text-align:center;">
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#f5c842;">${r.nutrition.kcal}</div><div style="font-size:13px;color:#40a060;text-transform:uppercase;">kcal</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#60c090;">${r.nutrition.protein_g}g</div><div style="font-size:13px;color:#40a060;text-transform:uppercase;">protein</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#80a0e0;">${r.nutrition.carbs_g}g</div><div style="font-size:13px;color:#40a060;text-transform:uppercase;">carbs</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#c08060;">${r.nutrition.fat_g}g</div><div style="font-size:13px;color:#40a060;text-transform:uppercase;">fat</div></div>
        </div>
      </div>`:''}

      <!-- Storage -->
      ${r.storage?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:13px;color:#718471;">📦 ${r.storage}</div>`:''}

      <!-- Cost estimate -->
      ${_costEstimate}

      <!-- Save button (Pro) -->
      ${_isPro?`<button onclick="toggleSavedRecipe('${_rid}','${_rname}','${_remoji}')" style="width:100%;padding:12px;border-radius:10px;background:${_saved?'#0a2008':'#080f08'};border:2px solid ${_saved?'#40c060':'#204020'};color:${_saved?'#40c060':'#406040'};font-size:13px;cursor:pointer;margin-bottom:10px;">${_saved?'✓ Saved to My Recipes — tap to remove':'🔖 Save to My Recipes'}</button>`
      :`<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#678967;font-size:13px;margin-bottom:10px;">👑 Save Recipes — Pro feature</div>`}

      <!-- WhatsApp -->
      <button onclick="window.open('https://wa.me/?text=${_waText}','_blank')" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Recipe via WhatsApp</button>

      <!-- Back button — orange like braai -->
      <button onclick="${backAction}" style="width:100%;padding:14px;border-radius:10px;cursor:pointer;background:${color};border:none;color:#fff;font-size:14px;font-weight:bold;margin-bottom:20px;">← Back</button>
    </div>
  </div>`;
}


// ── UNIVERSAL SECTION PLAN SYSTEM ────────────────────────────────
// planKey = 'wkPlan' | 'mealPlan' | 'moodPlan' | 'budgetPlan'
// item = {id, name, emoji, ingredients:[], serves:1}

function togglePlanItem(planKey, item){
  const plan = S[planKey]||[];
  const exists = plan.some(x=>x.id===item.id);
  if(exists){
    setQuiet({[planKey]: plan.filter(x=>x.id!==item.id)});
  } else {
    setQuiet({[planKey]: [...plan, item]});
  }
}

function isPlanItem(planKey, id){
  return (S[planKey]||[]).some(x=>x.id===id);
}

function packSizeNote(accent){
  accent = accent || '#c0a040';
  return '<div style="background:rgba(255,255,255,0.03);border:1px dashed '+accent+';border-radius:8px;padding:9px 12px;margin-bottom:12px;font-size:14px;color:#e0d4b8;line-height:1.5;">'
    + '\uD83D\uDCA1 <b style="color:'+accent+';">Buying vs cooking:</b> the amounts are what the recipes actually use. In the shop you buy in packs (a 1kg bag of carrots for a 150g need), so you\'ll have a little left over \u2014 the per-person cost is the true cost of what you use, not the whole pack.'
    + '</div>';
}

function buildCombinedShoppingList(plan, people){
  // Combine and deduplicate all ingredients across all plan recipes
  const totals = {};
  plan.forEach(r=>{
    const sv = people||1;
    (r.ingredients||[]).forEach(ing=>{
      if(!ing.pp || !ing.n) return;
      const key = ing.n.toLowerCase().trim();
      const amount = ing.pp * sv;
      if(!totals[key]){
        totals[key] = {n:ing.n, total:0, u:ing.u||''};
      }
      totals[key].total += amount;
    });
  });
  return Object.values(totals).sort((a,b)=>a.n.localeCompare(b.n));
}

function formatAmount(total, u){
  if(!u) return Math.round(total*10)/10+'';
  if((u==='g'||u==='ml') && total>=1000){
    return (Math.round(total/100)/10) + (u==='g'?'kg':'L');
  }
  return (Math.round(total*10)/10) + u;
}

function sectionPlanView(planKey, title, emoji, color, bg, border, people, backAction){
  const plan = S[planKey]||[];
  const shopItems = buildCombinedShoppingList(plan, people);
  const isPro = tierAllows('pro');
  const planCost   = plan.reduce((s,r)=> s + (r.costPP||0)*people, 0);
  const planCostPP = plan.reduce((s,r)=> s + (r.costPP||0), 0);
  const planCals   = plan.reduce((s,r)=> s + ((r.nutrition&&r.nutrition.kcal)||0), 0);

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">${emoji} ${title}</h1>
      <div style="font-size:13px;color:${color};">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
    </div>
    <div class="content">

      <!-- Selected recipes -->
      <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Selected Recipes</div>
      ${plan.map(r=>{
        const _pid = r.id;
        return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:24px;">${r.emoji||'🍽️'}</span>
          <div style="flex:1;">
            <div style="font-size:14px;color:#f5e8cc;">${r.name}</div>
            <div style="font-size:13px;color:${color};">${r.time?'⏱️ '+r.time+' min':''}${r.costPP?' · R'+r.costPP+' pp':''}</div>
          </div>
          <button onclick="setQuiet({${planKey}:(S.${planKey}||[]).filter(x=>x.id!=='${_pid}')})" style="background:none;border:1px solid #601040;border-radius:6px;padding:3px 8px;color:#c25c99;font-size:13px;cursor:pointer;">✕</button>
        </div>`;
      }).join('')}

      <!-- Combined shopping list -->
      <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin:16px 0 10px;">🛒 Combined Shopping List — ${people} people</div>
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        ${shopItems.map(ing=>{
          const key = 'plan_'+ing.n.replace(/\s+/g,'_');
          const ticked = (S._planChecked||{})[key];
          return `<div onclick="(function(){const ch=Object.assign({},S._planChecked||{});ch['${key}']=!ch['${key}'];setQuiet({_planChecked:ch});})()" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid ${border};cursor:pointer;">
            <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${ticked?color:'#3a3030'};background:${ticked?color:'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;">${ticked?'✓':''}</div>
            <span style="font-size:13px;color:${ticked?'#4a4040':'#c8c0b0'};flex:1;text-decoration:${ticked?'line-through':'none'};">${ing.n}</span>
            <span style="font-size:13px;color:${ticked?'#3a3030':'#f5c842'};font-weight:bold;">${formatAmount(ing.total,ing.u)}</span>
          </div>`;
        }).join('')}
        <div style="margin-top:10px;font-size:13px;color:#8e7c7c;font-style:italic;">📏 Raw/dry weights. Rice+pap grow 3x when cooked. Meat shrinks ~25%.</div>
      </div>

      <!-- Cost + calorie totals (Braai-style) -->
      ${planCost>0 ? `<div style="background:#1a1a08;border:1px solid #5a5010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#a09040;">💰 Estimated total</div>
          <div style="font-size:26px;color:#f5c842;font-weight:bold;">R${Math.round(planCost).toLocaleString()}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #3a3010;">
          <div style="font-size:13px;color:#908241;">Per person</div>
          <div style="font-size:16px;color:#c0a030;font-weight:bold;">R${Math.round(planCostPP)}</div>
        </div>
        <div style="font-size:13px;color:#908033;margin-top:8px;">SA&#39;s biggest retailers · ${new Date().getFullYear()} · Always buy 10% extra.</div>
      </div>` : ''}
      ${planCals>0 ? `<div style="background:#081818;border:1px solid #205040;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;color:#409070;">🔥 Calories per person</div>
            <div style="font-size:13px;color:#468d75;margin-top:2px;">All selected dishes combined</div>
          </div>
          <div style="font-size:26px;color:#40d0a0;font-weight:bold;">${planCals}<span style="font-size:13px;"> kcal</span></div>
        </div>
      </div>` : ''}
      ${plan.length ? packSizeNote('#c0a040') : ''}

      <!-- Share buttons -->
      ${isPro ? `<button onclick="(function(){const sh=window._sectionPlanForShare||[];const sv=${people};const shLines=buildCombinedShoppingList(sh,sv).map(i=>'• '+i.n+': '+formatAmount(i.total,i.u)).join('\n');window.open('https://wa.me/?text='+encodeURIComponent('${emoji} ${title}\n${people} people\n\n🛒 Shopping List:\n'+shLines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');})()" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:10px;">📱 Share Shopping List via WhatsApp</button>` 
      : `<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#678967;font-size:13px;margin-bottom:10px;">👑 Share Shopping List — Pro feature</div>`}

      <button onclick="setQuiet({_planChecked:{}})" style="width:100%;padding:10px;border-radius:10px;background:transparent;border:1px solid #3a3030;color:#8a7c7c;font-size:13px;cursor:pointer;margin-bottom:20px;">↺ Reset tick boxes</button>
    </div>
  </div>`;
}

function sectionPlanBtn(planKey, title, emoji, color, bg, people, viewAction){
  const plan = S[planKey]||[];
  if(!plan.length) return '';
  const isPro = tierAllows('pro');
  if(!isPro) return `<div style="background:${bg};border:1px dashed ${color};border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;opacity:0.6;"><div style="font-size:13px;color:${color};">📋 My Plan — <strong>Tinza Pro</strong></div></div>`;
  return `<button onclick="${viewAction}" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid ${color};background:${bg};color:#f5e8cc;font-size:14px;cursor:pointer;">
    📋 See my ${title} Plan & Shopping List →
    <div style="font-size:13px;color:${color};margin-top:3px;">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
  </button>`;
}

// Toggle saved recipe
function toggleSavedRecipe(id, name, emoji){
  const saved = (S.savedRecipes||[]).some(x=>x.id===id);
  if(saved){
    setQuiet({savedRecipes:(S.savedRecipes||[]).filter(x=>x.id!==id)});
  } else {
    setQuiet({savedRecipes:[...(S.savedRecipes||[]),{id,name,emoji,section:S.screen||''}]});
  }
}

// Toggle ingredient checkbox (tap to mark as already have)
function toggleIng(key){
  const ch = Object.assign({}, S._checkedIngs||{});
  ch[key] = !ch[key];
  setQuiet({_checkedIngs: ch});
}

// Global click handlers - avoids JSON.stringify in onclick attributes
function openBudgetRecipe(idx){
  const arr = window._tinzaBudgetPage||[];
  if(arr[idx]) setQuiet({_budgetActiveRecipe: arr[idx]});
}
function openMoodRecipe(idx){
  const arr = S.moodRecipes||[];
  if(arr[idx]) setQuiet({moodActiveRecipe: arr[idx]});
}
function openMealRecipe(id){
  const sec = S.screen||'';
  const sectionRecipes = {
    breakfast: typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
    lightlunch: typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
    supper: typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
    bakes: typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
  };
  const arr = sectionRecipes[sec]||[];
  const r = arr.find(x=>x.id===id);
  if(r) setQuiet({mealActiveRecipe: Object.assign({},r,{_section:sec})});
}
function toggleMealPlan(id){
  const sec = S.screen||'';
  const sectionRecipes = {
    breakfast: typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
    lightlunch: typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
    supper: typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
    bakes: typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
  };
  const r = (sectionRecipes[sec]||[]).find(x=>x.id===id);
  if(!r) return;
  togglePlanItem('mealPlan', {id:r.id, name:r.name, emoji:r.emoji||'🍽️', time:r.time||0, ingredients:r.ingredients||[], costPP:r.costPP||0, nutrition:r.nutrition||null, serves:1});
}
function openWorldRecipe(id){
  // World Kitchen uses r.id to set _wkRecipe
  set({activeCulturalRecipe: id, _wkRecipe: id});
}
function openEventRecipe(id){
  const allEventArrays = [
    ...(typeof EVENTS_STARTERS!=='undefined'?EVENTS_STARTERS:[]),
    ...(typeof EVENTS_BIG_COOKING_MAINS!=='undefined'?EVENTS_BIG_COOKING_MAINS:[]),
    ...(typeof EVENTS_BIG_COOKING_SIDES!=='undefined'?EVENTS_BIG_COOKING_SIDES:[]),
    ...(typeof EVENTS_BIG_COOKING_SALADS!=='undefined'?EVENTS_BIG_COOKING_SALADS:[]),
    ...(typeof EVENTS_DESSERTS!=='undefined'?EVENTS_DESSERTS:[]),
    ...(typeof EVENTS_SAUCES!=='undefined'?EVENTS_SAUCES:[]),
  ];
  const r = allEventArrays.find(x=>x.id===id);
  if(r){
    const root=document.getElementById("root");
    if(root) root._savedScroll = 0;   // open recipe at the top so the Back button is visible
    openRecipe('events', id);   // universal opener → eventsRecipeOpts (green page, cook mode, cost box)
  }
}
function openCakeRecipe(id){
  // Migrated 14 Jun 2026: cakes render through the universal opener (RECIPE_BUILDERS.cakes).
  // Thin alias kept so any stray caller still routes to the shared recipe page.
  if(typeof openRecipe==='function') openRecipe('cakes', id);
}

