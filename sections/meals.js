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

  // ── 🥐 SWEET & BAKED ──
  {id:'bf-pancakes', cat:'sweet', name:'Fluffy Pancakes', emoji:'🥞', cuisine:'American', time:20, costPP:11,
    feel:'A lazy Sunday stack with syrup running down the sides.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'milk',pp:90,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'sugar',pp:8,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'butter',pp:8,u:'g'},{n:'maple syrup'}],
    method:['Whisk the flour, sugar and baking powder in a bowl.','Beat in the egg and milk until just combined — a few lumps are fine.','Cook spoonfuls in a buttered pan over medium heat until bubbles form, then flip and cook the other side.','Stack and serve with maple syrup.'],
    tip:'Avoid overmixing — a few lumps in the batter make fluffier pancakes.',
    nutrition:{kcal:340,protein_g:9,carbs_g:52,fat_g:11}, storage:'Keep 2 days; reheat in a toaster or dry pan.'},
  {id:'bf-french-toast', cat:'sweet', name:'Cinnamon French Toast', emoji:'🍞', cuisine:'French / Global', time:15, costPP:12,
    feel:'Day-old bread, reborn as something special.',
    ingredients:[{n:'thick white bread',pp:2,u:''},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:60,u:'ml'},{n:'sugar',pp:8,u:'g'},{n:'butter',pp:10,u:'g'},{n:'cinnamon'}],
    method:['Whisk the eggs, milk, sugar and a pinch of cinnamon in a shallow dish.','Soak each slice of bread for a few seconds per side.','Fry in butter over medium heat until golden on both sides.','Serve dusted with cinnamon sugar or a drizzle of syrup.'],
    tip:'Slightly stale bread soaks up the custard best without going soggy.',
    nutrition:{kcal:360,protein_g:13,carbs_g:44,fat_g:15}, storage:'Best fresh; eat the same morning.'},

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
  {id:'sp-bangers-mash', cat:'plates', name:'Bangers & Mash', emoji:'🌭', cuisine:'British / South African', time:35, costPP:32,
    feel:'Soft mash, sticky onion gravy — the supper that feels like a hug.',
    ingredients:[{n:'pork sausages',pp:150,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'onion',pp:60,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'frozen peas',pp:60,u:'g'}],
    method:['Boil the peeled, chopped potatoes in salted water until tender, about 15 minutes.','Meanwhile fry the sausages over medium heat until browned all over, then set aside.','Soften the sliced onion in the same pan, add the stock and simmer into a glossy gravy.','Mash the potatoes with butter and milk. Plate the mash, sausages and peas, and pour over the onion gravy.'],
    tip:'Prick the sausages once or twice so they brown evenly without bursting.',
    nutrition:{kcal:620,protein_g:26,carbs_g:52,fat_g:34}, storage:'Keeps 2 days; reheat with a splash of milk in the mash.'},
  {id:'sp-fish-chips', cat:'plates', name:'Fish & Chips', emoji:'🐟', cuisine:'British', time:40, costPP:46,
    feel:'Crispy batter, soft chips, a squeeze of lemon — Friday on a plate.',
    ingredients:[{n:'hake fillets',pp:160,u:'g'},{n:'potatoes',pp:280,u:'g'},{n:'cake flour',pp:50,u:'g'},{n:'sunflower oil',pp:40,u:'ml'},{n:'frozen peas',pp:70,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'salt & pepper'}],
    method:['Cut the potatoes into chips, par-boil 4 minutes, then drain and dry well.','Make a batter with the flour, a pinch of salt and enough cold water for a smooth coating.','Fry the chips in hot oil until golden, drain on paper towel and keep warm.','Dip the fish in batter and fry until crisp and golden. Serve with chips, peas and a wedge of lemon.'],
    tip:'Dry the chips thoroughly before frying — wet potatoes never go crisp.',
    nutrition:{kcal:680,protein_g:34,carbs_g:62,fat_g:32}, storage:'Best fresh; the batter softens on standing.'},

  // ── 🍝 PASTA & PIZZA ──
  {id:'sp-lasagne', cat:'pastapizza', name:'Beef Lasagne', emoji:'🍝', cuisine:'Italian', time:75, costPP:38,
    feel:'Layers of meaty, cheesy comfort that pull the whole table in.',
    ingredients:[{n:'lasagne sheets',pp:60,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'milk',pp:120,u:'ml'},{n:'cake flour',pp:15,u:'g'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:40,u:'g'}],
    method:['Brown the mince with the chopped onion, add the tomatoes and simmer 20 minutes into a rich ragu.','Make a white sauce: melt the butter, stir in the flour, then whisk in the milk until thick and smooth.','Layer ragu, lasagne sheets and white sauce in a dish, repeating and finishing with sauce and grated cheddar.','Bake at 180C for 35 to 40 minutes until golden. Rest 10 minutes before slicing.'],
    tip:'Let it rest before cutting so the layers hold instead of sliding apart.',
    nutrition:{kcal:590,protein_g:30,carbs_g:48,fat_g:30}, storage:'Keeps 3 days; freezes well in portions for up to 2 months.'},
  {id:'sp-spag-bol', cat:'pastapizza', name:'Spaghetti Bolognese', emoji:'🍝', cuisine:'Italian', time:45, costPP:34,
    feel:'The weeknight rescue everyone already knows how to twirl.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],
    method:['Soften the chopped onion, carrot and garlic in a little oil.','Add the mince and brown well, breaking up any lumps.','Stir in the tomatoes and simmer gently for 25 minutes until thick and glossy.','Cook the spaghetti, drain, and serve topped with the sauce and grated cheddar.'],
    tip:'A long, slow simmer is the whole secret — give the sauce time and it rewards you.',
    nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18}, storage:'Sauce keeps 3 days and freezes 2 months.'},

  // ── 🍛 STEWS & CURRIES ──
  {id:'sp-capemalay-curry', cat:'stewscurries', name:'Cape Malay Chicken Curry', emoji:'🍛', cuisine:'Cape Malay', time:55, costPP:36,
    feel:'Warm, gently spiced and fragrant — the smell that fills the whole house.',
    ingredients:[{n:'chicken pieces',pp:180,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'potatoes',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the sliced onion in oil until soft and golden.','Stir in the curry powder and cook a minute until fragrant.','Add the chicken, tomatoes and potatoes with a little water, cover and simmer 35 minutes until tender.','Cook the rice separately and serve the curry spooned over the top.'],
    tip:'Toast the curry powder in the oil first — it wakes up all the spice.',
    nutrition:{kcal:560,protein_g:32,carbs_g:58,fat_g:20}, storage:'Even better next day; keeps 3 days, freezes 2 months.'},
  {id:'sp-beef-stew', cat:'stewscurries', name:'Beef Stew', emoji:'🥘', cuisine:'South African', time:120, costPP:42,
    feel:'Low, slow and unhurried — a pot that quietly looks after you.',
    ingredients:[{n:'beef stewing meat',pp:160,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'cake flour',pp:10,u:'g'}],
    method:['Toss the beef in seasoned flour and brown in batches in a heavy pot.','Add the onion and soften, then pour in the stock and scrape the base.','Add the carrots and potatoes, cover, and simmer gently 1.5 to 2 hours until the beef is fork-tender.','Check the seasoning and serve with bread or over rice or pap.'],
    tip:'Brown the meat properly first — that colour is where the deep flavour lives.',
    nutrition:{kcal:480,protein_g:34,carbs_g:34,fat_g:22}, storage:'Improves overnight; keeps 3 days, freezes 3 months.'},

  // ── 🥧 PIES & OVEN BAKES ──
  {id:'sp-cottage-pie', cat:'ovenbakes', name:'Cottage Pie', emoji:'🥧', cuisine:'British', time:65, costPP:34,
    feel:'A golden mash lid over savoury mince — proper comfort food.',
    ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:20,u:'g'}],
    method:['Brown the mince with the chopped onion and carrot.','Add the stock and peas and simmer until thickened, then spoon into an oven dish.','Boil and mash the potatoes with butter, and spread over the mince.','Top with grated cheddar and bake at 190C for 25 to 30 minutes until golden.'],
    tip:'Rough up the mash with a fork before baking for extra crispy peaks.',
    nutrition:{kcal:560,protein_g:26,carbs_g:52,fat_g:28}, storage:'Keeps 3 days; assembles ahead and freezes 2 months.'},
  {id:'sp-chicken-pie', cat:'ovenbakes', name:'Chicken & Mushroom Pie', emoji:'🥧', cuisine:'British', time:60, costPP:40,
    feel:'Flaky pastry giving way to a creamy, savoury filling.',
    ingredients:[{n:'chicken fillets',pp:140,u:'g'},{n:'puff pastry',pp:80,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'onion',pp:40,u:'g'},{n:'milk',pp:80,u:'ml'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:12,u:'g'}],
    method:['Cook the diced chicken, onion and sliced mushrooms in butter until just done.','Stir in the flour, then the milk, and simmer into a creamy sauce. Season and cool slightly.','Spoon into a pie dish and top with the rolled-out puff pastry, sealing the edges.','Brush with a little milk and bake at 200C for 25 to 30 minutes until puffed and golden.'],
    tip:'Cut a small slit in the pastry lid so steam escapes and the top stays crisp.',
    nutrition:{kcal:520,protein_g:30,carbs_g:34,fat_g:28}, storage:'Keeps 2 days; best reheated in the oven to re-crisp the pastry.'},

  // ── 🍗 ROASTS ──
  {id:'sp-roast-chicken', cat:'roasts', name:'Roast Chicken & Veg', emoji:'🍗', cuisine:'Global', time:90, costPP:38,
    feel:'The Sunday smell that means everyone comes to the table on time.',
    ingredients:[{n:'whole chicken',pp:280,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'mixed herbs'},{n:'salt & pepper'}],
    method:['Rub the chicken with oil, salt, pepper and herbs and place in a roasting tin.','Surround with the potatoes, carrots and onion, tossed in a little oil.','Roast at 190C, allowing roughly 45 minutes per kilogram plus 20 minutes, until the juices run clear.','Rest the chicken 10 minutes before carving, and serve with the roast veg.'],
    tip:'Rest the bird before carving so the juices settle back into the meat.',
    nutrition:{kcal:610,protein_g:42,carbs_g:38,fat_g:30}, storage:'Keeps 3 days; leftovers are gold for sandwiches and soup.'},
  {id:'sp-roast-beef', cat:'roasts', name:'Roast Beef', emoji:'🥩', cuisine:'British', time:110, costPP:56,
    feel:'A proper centrepiece — pink in the middle, everyone crowding the carving board.',
    ingredients:[{n:'beef roasting joint',pp:180,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'beef stock',pp:100,u:'ml'},{n:'salt & pepper'}],
    method:['Bring the beef to room temperature, rub with oil, salt and pepper, and sear all over in a hot pan.','Transfer to a roasting tin with the veg and roast at 200C, about 15 minutes per 500g for medium.','Rest the beef under foil 15 minutes while you make gravy from the pan juices and stock.','Carve thinly across the grain and serve with the roast veg and gravy.'],
    tip:'A meat thermometer removes the guesswork — about 55C for medium-rare.',
    nutrition:{kcal:560,protein_g:40,carbs_g:32,fat_g:28}, storage:'Keeps 3 days; slice cold for the best roast-beef sandwiches.'},
];

function mealSectionHTML(sectionKey){
  const configs = {
    breakfast:  {title:"Breakfast",         emoji:"🍳", color:"#d0a020", bg:"#181008", border:"#3a2010", recipes:typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],  sub:"Morning meals · Start your day right", cats:[{id:'savoury',e:'🍳',l:'Savoury & Cooked'},{id:'warm',e:'🥣',l:'Warm & Comforting'},{id:'sweet',e:'🥐',l:'Sweet & Baked'},{id:'fresh',e:'🍓',l:'Fresh & Light'},{id:'go',e:'🥤',l:'On the Go'}]},
    lightlunch: {title:"Light Lunch",       emoji:"🥗", color:"#30a070", bg:"#081810", border:"#1a4025", recipes:typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],sub:"Salads · Wraps · Soups · Quick meals", cats:[{id:'salads',e:'🥗',l:'Salads & Bowls'},{id:'handhelds',e:'🥪',l:'Sandwiches & Wraps'},{id:'soups',e:'🍲',l:'Soups'},{id:'savbakes',e:'🥧',l:'Savoury Bakes'},{id:'quick',e:'⚡',l:'Quick & Light'}]},
    supper:     {title:"Supper",            emoji:"🍽️", color:"#6080d0", bg:"#080f18", border:"#1a2840", recipes:typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],        sub:"Evening meals · Family dinners", cats:[{id:'plates',e:'🍳',l:'Homestyle Plates'},{id:'pastapizza',e:'🍝',l:'Pasta & Pizza'},{id:'stewscurries',e:'🍛',l:'Stews & Curries'},{id:'ovenbakes',e:'🥧',l:'Pies & Oven Bakes'},{id:'roasts',e:'🍗',l:'Roasts'}]},
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
      <button onclick="set({screen:'feedfamily'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${cfg.border};border-radius:20px;color:${cfg.color};font-size:12px;padding:5px 12px;cursor:pointer;">← Family Meals</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">${cfg.emoji} ${cfg.title}</h1>
        <p style="margin:0 0 10px;font-size:11px;color:${cfg.color};font-style:italic;opacity:0.9;">${cfg.sub}</p>
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
            style="background:none;border:none;color:${cfg.color};font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${mealHowOpen?'▲':'▼'} How it works
          </button>
          ${mealHowOpen?`
            <div onclick="set({mealHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#b0a080;line-height:1.6;">
              <strong style="color:${cfg.color};">1. Browse recipes</strong> — sort by popular, A–Z or quickest.<br>
              <strong style="color:${cfg.color};">2. Tap Recipe →</strong> — full ingredients, method and scaling.<br>
              <strong style="color:${cfg.color};">3. Add to My Plan</strong> — build your weekly meal plan.<br>
              <span style="color:#828270;font-size:11px;">All quantities scale automatically per person.</span>
            </div>
          `:''}
        </div>
        <!-- Sort pills -->
        <div style="display:flex;gap:5px;flex-shrink:0;">
          ${[{id:'popular',l:'⭐'},{id:'az',l:'A–Z'},{id:'time',l:'⏱️'}].map(s=>`<button onclick="setQuiet({mealSort:'${s.id}'})" style="padding:5px 10px;border-radius:20px;border:1px solid ${sort===s.id?cfg.color:cfg.border};background:${sort===s.id?'rgba(255,255,255,0.1)':'transparent'};color:${sort===s.id?cfg.color:'#4a4a40'};font-size:11px;cursor:pointer;">${s.l}</button>`).join('')}
        </div>
      </div>
    </div>

    <div style="padding:12px 16px;max-width:600px;margin:0 auto;">
      ${cats?`
      <!-- ══ CATEGORY PILLS (braai-style) ══ -->
      <div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:6px;margin-bottom:12px;">
        ${cats.map(c=>`<button onclick="setQuiet({mealCat:'${c.id}'})" style="white-space:nowrap;flex-shrink:0;padding:7px 13px;border-radius:20px;border:1px solid ${activeCat===c.id?cfg.color:cfg.border};background:${activeCat===c.id?'rgba(255,255,255,0.08)':'transparent'};color:${activeCat===c.id?cfg.color:'#6a6050'};font-size:12px;cursor:pointer;">${c.e} ${c.l}</button>`).join('')}
      </div>
      <div style="font-size:11px;letter-spacing:2px;color:${cfg.color};text-transform:uppercase;margin-bottom:10px;">${activeCatObj.e} ${activeCatObj.l} — ${recipes.length} ${recipes.length===1?'option':'options'}</div>
      `:`<div style="font-size:11px;color:#828270;margin-bottom:10px;">${recipes.length} recipes</div>`}
      ${recipes.length===0?`<div style="padding:22px;text-align:center;color:#908066;font-size:13px;background:#161210;border:1px solid #2a2a20;border-radius:10px;margin-bottom:6px;">Nothing here yet — try another category${S.mealSearch?' or clear your search':''}.</div>`:''}
      ${recipes.map((r,i)=>{
        const inPlan = isPlanItem('mealPlan', r.id);
        return `<div style="background:${inPlan?cfg.bg:'#161210'};border:1px solid ${inPlan?cfg.color:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
          <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="toggleMealPlan('${r.id}')">
            <div style="width:22px;height:22px;border-radius:6px;background:${inPlan?cfg.color:'transparent'};border:2px solid ${inPlan?cfg.color:'#3a2010'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${inPlan?'✓':''}</div>
            <span style="font-size:20px;">${r.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:14px;color:${inPlan?'#f5e8cc':'#c8b898'};font-weight:${inPlan?'bold':'normal'};">${r.name}</div>
              ${r.feel?`<div style="font-size:11px;color:#907d5f;font-style:italic;margin-top:1px;line-height:1.3;">${r.feel}</div>`:''}
              <div style="font-size:10px;color:${inPlan?cfg.color:'#5a5040'};margin-top:2px;">${r.cuisine} · ⏱️ ${r.time} min</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
              <button onclick="event.stopPropagation();openMealRecipe('${r.id}')" style="background:${cfg.color};border:none;border-radius:6px;padding:4px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
            </div>
          </div>
        </div>`;
      }).join('')}
      ${sectionPlanBtn('mealPlan', cfg.title, cfg.emoji||'🍽️', cfg.color, cfg.bg, S.searchServings||4, "setQuiet({mealPlanView:true})")}
      <div style="margin-top:8px;padding:14px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;text-align:center;">
        <div style="font-size:12px;color:#828270;margin-bottom:8px;">Can't find what you're looking for?</div>
        <button onclick="set({screen:'search'})" style="padding:10px 20px;background:#0a1020;border:2px solid #4080d0;border-radius:10px;color:#4080d0;font-size:13px;cursor:pointer;">🔍 Search All Recipes</button>
      </div>
    </div>
  </div>`;
}

// ── TINY & FURRY — front door to Tiny Tummies + Furry Friends (braai v33 template) ──
function tinyFurryHTML(){
  const ONES = [
    {s:'babyapp',  e:'🍼', t:'Tiny Tummies',  sub:'Age-appropriate baby & toddler recipes',  b:'#e07090', bg:'#1a1018'},
    {s:'furryapp', e:'🐾', t:'Furry Friends',  sub:'Dogs & Cats · Meals · Treats & Biscuits', b:'#9060d0', bg:'#120f1a'},
  ];
  const HEAD = '#c878c8', HBG = '#160f18', HBORDER = '#3a2a40';
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${HBG} 0%,#0f0e0c 100%);">
      <img src="Images/Image%20header/tinyfurry.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,10,0.3) 0%,rgba(8,6,10,0.78) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍼🐾 Tiny & Furry</h1>
        <p style="margin:0;font-size:11px;color:${HEAD};font-style:italic;opacity:0.9;">The littlest and furriest mouths — fed with the same love</p>
      </div>
    </div>

    <!-- ══ SECTION BOXES (braai v33 list rows) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:10px;letter-spacing:2px;color:#a87849;text-transform:uppercase;margin-bottom:10px;">Who are we feeding?</div>
      ${ONES.map(o=>`
        <button onclick="set({screen:'${o.s}'})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${o.t}</div>
            <div style="font-size:14px;color:#e0d4b8;line-height:1.5;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join('')}
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
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍽️ Feeding My Family</h1>
        <p style="margin:0;font-size:13px;color:${HEAD};font-style:italic;opacity:0.9;">Everyday cooking — morning to night, and something sweet</p>
      </div>
    </div>

    <!-- ══ MEAL-TYPE BOXES (3-col grid · warm Spice palette) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:2px;color:#a87849;text-transform:uppercase;margin-bottom:10px;">Choose a meal</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
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
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${border};border-radius:20px;color:${color};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🧅 4 Ingredients</h1>
        <p style="margin:0;font-size:13px;color:#c0915a;font-style:italic;">What's in your fridge? Pop in 2–4 things and we'll find the meal.</p>
      </div>
    </div>

    <!-- ══ HOW IT WORKS ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <button onclick="set({fourHowOpen:!S.fourHowOpen})" style="background:none;border:none;color:${color};font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;font-family:Georgia,serif;">${howOpen?'▲':'▼'} How it works</button>
      ${howOpen?`
        <div onclick="set({fourHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
        <div style="position:relative;z-index:10;background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c8b898;line-height:1.6;">
          <strong style="color:#f5c842;">1. Enter 2–4 ingredients</strong> — whatever's in your fridge or pantry.<br>
          <strong style="color:#f5c842;">2. Tap Find Recipes</strong> — Tinza checks its own recipes first, then asks Tinza Chef.<br>
          <strong style="color:#f5c842;">3. Tap any recipe</strong> — full ingredients and method.<br>
          <span style="color:#b0936a;font-size:11px;">The more ingredients you add, the closer the match.</span>
        </div>`:''}
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="font-size:13px;color:#b0936a;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Your ingredients</div>
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

      ${error?`<div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#c0915a;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Finding recipes from your ingredients…</div>
      </div>`:''}

      ${results&&results.length>0&&!loading?`
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Recipes you can make</div>
        ${results.map((r,i)=>recipeResultCard(r,"openFourRecipe("+i+")",color)).join('')}
        <button onclick="findFourIngredients()" style="width:100%;padding:11px;border-radius:10px;background:#161210;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">🔄 Find again</button>
      `:''}

      ${results&&results.length===0&&!loading&&!error?`<div style="text-align:center;padding:20px;color:#b0936a;font-size:13px;">No matches yet — try different ingredients.</div>`:''}
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
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${border};border-radius:20px;color:${color};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🐔 I Have Chicken…</h1>
        <p style="margin:0;font-size:13px;color:#c0915a;font-style:italic;">Type any ingredient you've got — we'll build meals around it.</p>
      </div>
    </div>

    <!-- ══ HOW IT WORKS ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <button onclick="set({anchorHowOpen:!S.anchorHowOpen})" style="background:none;border:none;color:${color};font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;font-family:Georgia,serif;">${howOpen?'▲':'▼'} How it works</button>
      ${howOpen?`
        <div onclick="set({anchorHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
        <div style="position:relative;z-index:10;background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c8b898;line-height:1.6;">
          <strong style="color:#f5c842;">1. Type your main ingredient</strong> — add a quantity if you like (e.g. "beef mince 500g").<br>
          <strong style="color:#f5c842;">2. Tap Find Recipes</strong> — every recipe is built around it.<br>
          <strong style="color:#f5c842;">3. Tap any recipe</strong> — full ingredients and method.<br>
          <span style="color:#b0936a;font-size:11px;">Add a weight and we'll scale the recipe to what you have.</span>
        </div>`:''}
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="font-size:13px;color:#b0936a;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Your main ingredient</div>
        <div style="background:#161210;border:2px solid ${border};border-radius:10px;padding:10px 12px;margin-bottom:12px;">
          <input type="text" value="${(S.anchorInput||'').replace(/"/g,'&quot;')}" placeholder="e.g. beef mince 500g, butternut, chicken thighs"
            oninput="S.anchorInput=this.value"
            style="width:100%;background:transparent;border:none;color:#f5e8cc;font-size:16px;font-family:Georgia,serif;outline:none;" />
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${chips.map(c=>`<button onclick="S.anchorInput='${c[1]}';findAnchorIngredient()" style="padding:6px 11px;border-radius:16px;border:1px solid ${border};background:transparent;color:#c8b898;font-size:12px;cursor:pointer;white-space:nowrap;">${c[0]} ${c[1]}</button>`).join('')}
        </div>
        <button onclick="findAnchorIngredient()" style="width:100%;padding:14px;border-radius:10px;background:#161210;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes…':'🔍 Find Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#c0915a;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Building meals around it…</div>
      </div>`:''}

      ${results&&results.length>0&&!loading?`
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Recipes built around it</div>
        ${results.map((r,i)=>recipeResultCard(r,"openAnchorRecipe("+i+")",color)).join('')}
        <button onclick="findAnchorIngredient()" style="width:100%;padding:11px;border-radius:10px;background:#161210;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">🔄 Find again</button>
      `:''}

      ${results&&results.length===0&&!loading&&!error?`<div style="text-align:center;padding:20px;color:#b0936a;font-size:13px;">No matches yet — try another ingredient.</div>`:''}
    </div>
  </div>`;
}

function recipeResultCard(r, onClickFn, color){
  const matchBadge = r._matchCount ? `<span style="background:#0a1808;border:1px solid #25a050;border-radius:8px;font-size:9px;color:#25a050;padding:2px 6px;margin-right:3px;">✓ ${r._matchCount} ingredient${r._matchCount>1?'s':''} matched</span>` : '';
  const sourceBadge = r._source==='db' ? `<span style="background:#0a1020;border:1px solid #4080d0;border-radius:8px;font-size:9px;color:#4080d0;padding:2px 6px;">In Tinza</span>` : '';
  return `<div onclick="${onClickFn}" style="background:#141210;border:1px solid #2a2820;border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;">
    <span style="font-size:28px;flex-shrink:0;">${r.emoji||'🍽️'}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-size:14px;color:#f5e8cc;margin-bottom:3px;">${r.name}</div>
      <div style="font-size:11px;color:${color||'#4080d0'};">${r.cuisine||''} · ⏱️ ${r.time||'?'} min</div>
      <div style="margin-top:4px;">${matchBadge}${sourceBadge}</div>
    </div>
    <span style="color:${color||'#4080d0'};font-size:14px;flex-shrink:0;">→</span>
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
      <div style="font-size:12px;color:#c86449;">💰 Cost estimate — <strong style="color:${color};">Tinza Pro R99/month</strong></div>
    </div>`;
    if(r.costPP){
      const total = r.costPP * sv;
      return `<div style="background:#0f1a08;border:1px solid #5a8010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:10px;">💰 Cost Estimate</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#718933;">Total for ${sv} people</div>
          <div style="font-size:24px;font-weight:bold;color:#c8e840;">R${total}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #2a3010;">
          <div style="font-size:12px;color:#6a892e;">Per person</div>
          <div style="font-size:16px;font-weight:bold;color:#a0c030;">R${r.costPP}</div>
        </div>
        <div style="margin-top:8px;font-size:10px;color:#748932;">Checkers/retail prices · May 2026 · Always buy 10% extra.</div>
      </div>`;
    }
    return '';
  })();

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${r.emoji||'🍽️'} ${r.name}</h1>
      <div style="font-size:11px;color:${color};font-style:italic;">Full recipe and method</div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      ${r.feel?`<div style="font-style:italic;color:${color};font-size:13px;text-align:center;line-height:1.5;margin-bottom:14px;">“${r.feel}”</div>`:''}

      <!-- How much to make block -->
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 How Much To Make</div>
        <div style="font-size:11px;color:#718933;margin-bottom:10px;">${sv} ${sv===1?'person':'people'}</div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.max(1,(S[_k]||4)-1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">−</button>
          <div style="flex:1;text-align:center;">
            <div style="font-size:32px;font-weight:bold;color:#c8e840;">${sv}</div>
            <div style="font-size:10px;color:#718d28;">people · all quantities scale</div>
          </div>
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.min(500,(S[_k]||4)+1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">+</button>
        </div>
        <div style="margin-top:8px;font-size:10px;color:#6c8c23;">💡 Adjust the number and all ingredients update instantly.</div>
      </div>

      <!-- Ingredients — bullet style like braai, no tick boxes -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#908066;font-style:italic;">scaled for ${sv} ${sv===1?'person':'people'}</div>
        </div>
        ${(r.ingredients||[]).map(i=>{
          if(!i.pp) return `<div style="padding:5px 0;border-bottom:1px solid #1a1810;font-size:12px;color:#8e7c7c;font-style:italic;">• ${i.n} — to taste</div>`;
          const raw=i.pp*sv, u=i.u||'';
          const ppStr=i.pp+(u==='egg'?' egg':u)+' pp';
          const totalStr=u==='egg'?Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'')
            :(raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L')
            :Math.round(raw*10)/10+u;
          return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #1a1810;">
            <span style="color:${color};flex-shrink:0;">•</span>
            <span style="font-size:14px;color:#e0d4b8;flex:1;">${i.n} — <span style="color:#908066;font-size:12px;">${ppStr}</span> · <strong style="color:#f5c842;">${totalStr} total</strong></span>
          </div>`;
        }).join('')}
        <div style="margin-top:8px;padding-top:6px;border-top:1px solid #1a1810;font-size:10px;color:#8e7c7c;font-style:italic;">📏 Raw/dry weights · Rice+pap grow 3x when cooked · Meat shrinks ~25%</div>
      </div>

      <!-- Method -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(r.method||[]).map((step,si)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div style="width:24px;height:24px;border-radius:50%;background:#0a0808;border:1px solid ${color};color:${color};font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${si+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join('')}
      </div>

      <!-- Tip -->
      ${r.tip?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:6px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;margin:0;">${r.tip}</p>
      </div>`:''}

      <!-- Nutrition -->
      ${r.nutrition?`<div style="background:#0a1008;border:1px solid #1a3020;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#40a060;text-transform:uppercase;margin-bottom:8px;">📊 Nutrition — per serving</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;text-align:center;">
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#f5c842;">${r.nutrition.kcal}</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">kcal</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#60c090;">${r.nutrition.protein_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">protein</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#80a0e0;">${r.nutrition.carbs_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">carbs</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#c08060;">${r.nutrition.fat_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">fat</div></div>
        </div>
      </div>`:''}

      <!-- Storage -->
      ${r.storage?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:11px;color:#718471;">📦 ${r.storage}</div>`:''}

      <!-- Cost estimate -->
      ${_costEstimate}

      <!-- Save button (Pro) -->
      ${_isPro?`<button onclick="toggleSavedRecipe('${_rid}','${_rname}','${_remoji}')" style="width:100%;padding:12px;border-radius:10px;background:${_saved?'#0a2008':'#080f08'};border:2px solid ${_saved?'#40c060':'#204020'};color:${_saved?'#40c060':'#406040'};font-size:13px;cursor:pointer;margin-bottom:10px;">${_saved?'✓ Saved to My Recipes — tap to remove':'🔖 Save to My Recipes'}</button>`
      :`<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#678967;font-size:12px;margin-bottom:10px;">👑 Save Recipes — Pro feature</div>`}

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
      <div style="font-size:11px;color:${color};">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
    </div>
    <div class="content">

      <!-- Selected recipes -->
      <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Selected Recipes</div>
      ${plan.map(r=>{
        const _pid = r.id;
        return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:24px;">${r.emoji||'🍽️'}</span>
          <div style="flex:1;">
            <div style="font-size:14px;color:#f5e8cc;">${r.name}</div>
            <div style="font-size:11px;color:${color};">${r.time?'⏱️ '+r.time+' min':''}${r.costPP?' · R'+r.costPP+' pp':''}</div>
          </div>
          <button onclick="setQuiet({${planKey}:(S.${planKey}||[]).filter(x=>x.id!=='${_pid}')})" style="background:none;border:1px solid #601040;border-radius:6px;padding:3px 8px;color:#c25c99;font-size:11px;cursor:pointer;">✕</button>
        </div>`;
      }).join('')}

      <!-- Combined shopping list -->
      <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin:16px 0 10px;">🛒 Combined Shopping List — ${people} people</div>
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        ${shopItems.map(ing=>{
          const key = 'plan_'+ing.n.replace(/\s+/g,'_');
          const ticked = (S._planChecked||{})[key];
          return `<div onclick="(function(){const ch=Object.assign({},S._planChecked||{});ch['${key}']=!ch['${key}'];setQuiet({_planChecked:ch});})()" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid ${border};cursor:pointer;">
            <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${ticked?color:'#3a3030'};background:${ticked?color:'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;">${ticked?'✓':''}</div>
            <span style="font-size:13px;color:${ticked?'#4a4040':'#c8c0b0'};flex:1;text-decoration:${ticked?'line-through':'none'};">${ing.n}</span>
            <span style="font-size:13px;color:${ticked?'#3a3030':'#f5c842'};font-weight:bold;">${formatAmount(ing.total,ing.u)}</span>
          </div>`;
        }).join('')}
        <div style="margin-top:10px;font-size:10px;color:#8e7c7c;font-style:italic;">📏 Raw/dry weights. Rice+pap grow 3x when cooked. Meat shrinks ~25%.</div>
      </div>

      <!-- Cost + calorie totals (Braai-style) -->
      ${planCost>0 ? `<div style="background:#1a1a08;border:1px solid #5a5010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#a09040;">💰 Estimated total</div>
          <div style="font-size:26px;color:#f5c842;font-weight:bold;">R${Math.round(planCost).toLocaleString()}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #3a3010;">
          <div style="font-size:12px;color:#908241;">Per person</div>
          <div style="font-size:16px;color:#c0a030;font-weight:bold;">R${Math.round(planCostPP)}</div>
        </div>
        <div style="font-size:9px;color:#908033;margin-top:8px;">Checkers/retail prices · ${new Date().getFullYear()} · Always buy 10% extra.</div>
      </div>` : ''}
      ${planCals>0 ? `<div style="background:#081818;border:1px solid #205040;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:13px;color:#409070;">🔥 Calories per person</div>
            <div style="font-size:10px;color:#468d75;margin-top:2px;">All selected dishes combined</div>
          </div>
          <div style="font-size:26px;color:#40d0a0;font-weight:bold;">${planCals}<span style="font-size:12px;"> kcal</span></div>
        </div>
      </div>` : ''}
      ${plan.length ? packSizeNote('#c0a040') : ''}

      <!-- Share buttons -->
      ${isPro ? `<button onclick="(function(){const sh=window._sectionPlanForShare||[];const sv=${people};const shLines=buildCombinedShoppingList(sh,sv).map(i=>'• '+i.n+': '+formatAmount(i.total,i.u)).join('\n');window.open('https://wa.me/?text='+encodeURIComponent('${emoji} ${title}\n${people} people\n\n🛒 Shopping List:\n'+shLines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');})()" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:10px;">📱 Share Shopping List via WhatsApp</button>` 
      : `<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#678967;font-size:12px;margin-bottom:10px;">👑 Share Shopping List — Pro feature</div>`}

      <button onclick="setQuiet({_planChecked:{}})" style="width:100%;padding:10px;border-radius:10px;background:transparent;border:1px solid #3a3030;color:#8a7c7c;font-size:12px;cursor:pointer;margin-bottom:20px;">↺ Reset tick boxes</button>
    </div>
  </div>`;
}

function sectionPlanBtn(planKey, title, emoji, color, bg, people, viewAction){
  const plan = S[planKey]||[];
  if(!plan.length) return '';
  const isPro = tierAllows('pro');
  if(!isPro) return `<div style="background:${bg};border:1px dashed ${color};border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;opacity:0.6;"><div style="font-size:12px;color:${color};">📋 My Plan — <strong>Tinza Pro</strong></div></div>`;
  return `<button onclick="${viewAction}" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid ${color};background:${bg};color:#f5e8cc;font-size:14px;cursor:pointer;">
    📋 See my ${title} Plan & Shopping List →
    <div style="font-size:11px;color:${color};margin-top:3px;">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
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
  if(r) set({eventActiveRecipe: r});
}
function openCakeRecipe(id){
  const arr = typeof CELEBRATION_CAKE_RECIPES!=='undefined'?CELEBRATION_CAKE_RECIPES:[];
  const cake = arr.find(c=>c.id===id);
  if(cake) set({activeCake: cake});
}

