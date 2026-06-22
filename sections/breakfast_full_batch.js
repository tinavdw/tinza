// ════════════════════════════════════════════════════════════════
// TINZA — FULL BREAKFAST BATCH (locked 22 Jun 2026)
// Paste these objects into BREAKFAST_RECIPES in meals.js (they slot under the 5 live pills).
// Shape: {n: buy-name, pp: per-person amount, u: g|ml|egg|''}
// ⚑ PRICE GAP (add to PRICE_DB before it costs): amasi, smoked salmon, chia seeds, cornflour, butter beans
// ⟶ CROSS-LINK targets noted in comments (wire same as nut-butter -> Spice)
// ════════════════════════════════════════════════════════════════
var BREAKFAST_BATCH = [

  // ───────────────── 🍳 SAVOURY ─────────────────

  {id:'bf-boerewors-eggs', cat:'savoury', name:'Boerewors & Eggs', emoji:'🌭', cuisine:'South African', time:20, costPP:18,
    feel:'A coil of wors and a soft egg — a proper farm start.',
    ingredients:[{n:'boerewors',pp:80,u:'g'},{n:'large eggs',pp:2,u:'egg'},{n:'tomatoes',pp:40,u:'g'},{n:'white bread',pp:1,u:''},{n:'salt & pepper'}],
    method:['Fry the boerewors in a pan over medium heat, turning, until browned and cooked through.','Halve the tomatoes and fry them cut-side down in the wors fat until soft.','Fry the eggs to your liking in the same pan.','Toast the bread, plate everything together and season.'],
    tip:'Do not prick the wors; keeping it whole holds the juices in.',
    nutrition:{kcal:460,protein_g:24,carbs_g:18,fat_g:32}, storage:'Best fresh; cooked wors keeps 2 days.'},

  {id:'bf-cheese-tomato-omelette', cat:'savoury', name:'Cheese & Tomato Omelette', emoji:'🧀', cuisine:'Global', time:10, costPP:17,
    feel:'The everyday omelette that never lets you down.',
    ingredients:[{n:'large eggs',pp:3,u:'egg'},{n:'cheddar',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'butter',pp:8,u:'g'},{n:'salt & pepper'}],
    method:['Beat the eggs with salt and pepper.','Melt the butter in a pan over medium heat and pour in the eggs.','As the edges set, scatter over the grated cheddar and chopped tomato.','Fold in half, slide onto a plate and serve.'],
    tip:'Take it off the heat while the centre is still a touch soft; it carries on cooking.',
    nutrition:{kcal:340,protein_g:22,carbs_g:4,fat_g:26}, storage:'Best fresh.'},

  {id:'bf-mushroom-feta-omelette', cat:'savoury', name:'Mushroom & Feta Omelette', emoji:'🍄', cuisine:'Global', time:12, costPP:20,
    feel:'Earthy mushrooms and salty feta, folded warm.',
    ingredients:[{n:'large eggs',pp:3,u:'egg'},{n:'mushrooms',pp:50,u:'g'},{n:'feta',pp:25,u:'g'},{n:'butter',pp:8,u:'g'},{n:'salt & pepper'}],
    method:['Fry the sliced mushrooms in half the butter until golden, then set aside.','Beat the eggs, melt the rest of the butter and pour them in.','As they set, add the mushrooms and crumbled feta over one half.','Fold over and serve.'],
    tip:'Cook the mushrooms first and dry, so the omelette does not go watery.',
    nutrition:{kcal:330,protein_g:21,carbs_g:3,fat_g:26}, storage:'Best fresh.'},

  {id:'bf-akoori', cat:'savoury', name:'Masala Scrambled Eggs (Akoori)', emoji:'🍳', cuisine:'Indian / South African', time:15, costPP:12,
    feel:'Soft scrambled eggs lifted with onion, chilli and masala.',
    ingredients:[{n:'large eggs',pp:3,u:'egg'},{n:'onion',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'green chilli',pp:5,u:'g'},{n:'oil',pp:6,u:'ml'},{n:'masala'},{n:'fresh coriander'},{n:'salt'}],
    method:['Soften the chopped onion and chilli in the oil over medium heat.','Stir in the chopped tomato and a spoon of masala and cook for 2 minutes.','Pour in the beaten eggs and stir gently until just set.','Finish with chopped coriander and serve with bread or roti.'],
    tip:'Pull it off the heat while still glossy; the eggs firm up as you plate.',
    nutrition:{kcal:260,protein_g:17,carbs_g:7,fat_g:18}, storage:'Best fresh.'},

  {id:'bf-croque-madame', cat:'savoury', name:'Croque Madame', emoji:'🍳', cuisine:'French', time:20, costPP:20,
    feel:'A ham-and-cheese toastie crowned with a soft fried egg.',
    ingredients:[{n:'white bread',pp:2,u:''},{n:'ham',pp:40,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'butter',pp:8,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'salt & pepper'}],
    method:['Build a sandwich of ham and half the cheddar and toast it in butter until golden both sides.','Make a quick cheese sauce with a little butter, the milk and the rest of the cheddar.','Spoon the sauce over the toastie and grill or pan-melt until bubbling.','Fry an egg and set it on top.'],
    tip:'A runny yolk is the whole point; fry the egg last.',
    nutrition:{kcal:520,protein_g:28,carbs_g:30,fat_g:32}, storage:'Best fresh.'},

  {id:'bf-chakalaka-beans-toast', cat:'savoury', name:'Chakalaka Beans on Toast', emoji:'🫘', cuisine:'South African', time:12, costPP:11,
    feel:'Beans on toast with a proper South African kick.',
    ingredients:[{n:'baked beans',pp:120,u:'g'},{n:'chakalaka',pp:60,u:'g'},{n:'white bread',pp:2,u:''},{n:'butter',pp:8,u:'g'}],
    method:['Warm the baked beans and chakalaka together in a small pot.','Toast and butter the bread.','Pile the spiced beans over the toast and serve hot.'],
    tip:'A handful of grated cheese melted on top is never wrong.',
    nutrition:{kcal:320,protein_g:13,carbs_g:50,fat_g:8}, storage:'The bean mix keeps 3 days.'},

  {id:'bf-spanish-tortilla', cat:'savoury', name:'Spanish Tortilla', emoji:'🥘', cuisine:'Spanish', time:30, costPP:14,
    feel:'A thick potato-and-egg cake you slice like a wheel.',
    ingredients:[{n:'potatoes',pp:150,u:'g'},{n:'large eggs',pp:3,u:'egg'},{n:'onion',pp:40,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'salt'}],
    method:['Soften the thinly sliced potato and onion gently in the olive oil until tender, about 12 minutes.','Beat the eggs with salt, fold in the potato and onion.','Pour back into the pan and cook on low until almost set.','Flip onto a plate and slide back to set the other side, then cut into wedges.'],
    tip:'Low and slow is the secret; you are steaming the potato in oil, not frying it crisp.',
    nutrition:{kcal:300,protein_g:13,carbs_g:24,fat_g:17}, storage:'Keeps 2 days; good warm or cold.'},


  {id:'bf-mince-on-toast', cat:'savoury', name:'Savoury Mince on Toast', emoji:'🍞', cuisine:'South African', time:20, costPP:15,
    feel:'Rich, oniony mince piled on buttered toast.',
    ingredients:[{n:'beef mince',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'white bread',pp:2,u:''},{n:'oil',pp:5,u:'ml'},{n:'salt & pepper'}],
    method:['Brown the mince with the chopped onion in the oil over medium-high heat.','Add the chopped tomato and a splash of water and simmer until thick.','Season well.','Spoon over hot buttered toast.'],
    tip:'A dash of Worcestershire or chutney rounds it out beautifully.',
    nutrition:{kcal:420,protein_g:24,carbs_g:30,fat_g:22}, storage:'Mince keeps 3 days.'},

  {id:'bf-baked-egg-boats', cat:'savoury', name:'Baked Egg Boats', emoji:'🛶', cuisine:'Global', time:30, costPP:16,
    feel:'A quiche baked right inside a crusty loaf and sliced like a treasure.',
    ingredients:[{n:'unsliced white loaf',pp:0.3,u:''},{n:'large eggs',pp:2,u:'egg'},{n:'cream',pp:30,u:'ml'},{n:'cheddar',pp:20,u:'g'},{n:'bacon',pp:25,u:'g'},{n:'salt & pepper'}],
    method:['Hollow out a trench along the top of a small loaf or roll.','Beat the eggs with cream, grated cheddar, chopped bacon and seasoning.','Pour into the bread trench.','Bake at 180°C for about 20 minutes until set, then slice across.'],
    tip:'Sit the loaf on a tray; a little custard always escapes and that is fine.',
    nutrition:{kcal:430,protein_g:20,carbs_g:34,fat_g:23}, storage:'Best fresh; slices reheat next day.'},

  {id:'bf-huevos-rancheros', cat:'savoury', name:'Huevos Rancheros', emoji:'🍳', cuisine:'Mexican', time:20, costPP:14,
    feel:'Fried eggs on a warm tortilla under a smoky tomato-chilli sauce.',
    ingredients:[{n:'flour tortilla',pp:1,u:''},{n:'large eggs',pp:2,u:'egg'},{n:'tomatoes',pp:80,u:'g'},{n:'onion',pp:30,u:'g'},{n:'baked beans',pp:50,u:'g'},{n:'green chilli',pp:5,u:'g'},{n:'oil',pp:6,u:'ml'}],
    method:['Make a quick sauce: soften onion and chilli, add chopped tomato and simmer.','Warm the tortilla and the beans.','Fry the eggs.','Lay the eggs on the tortilla, spoon over the sauce and beans, and serve.'],
    tip:'Tortilla cross-links to bk-tortilla.', // ⟶ bk-tortilla
    nutrition:{kcal:380,protein_g:18,carbs_g:42,fat_g:16}, storage:'Sauce keeps 3 days.'},

  {id:'bf-cloud-eggs', cat:'savoury', name:'Cloud Eggs', emoji:'☁️', cuisine:'Global', time:12, costPP:9,
    feel:'Whipped egg-white clouds with a sunny yolk nested in.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'cheddar',pp:15,u:'g'},{n:'salt & pepper'}],
    method:['Separate the eggs, keeping the yolks whole.','Whisk the whites with a pinch of salt to stiff peaks and fold in the grated cheddar.','Spoon into clouds on a lined tray and bake at 230°C for 3 minutes.','Make a dip in each, slip in a yolk and bake 3 minutes more.'],
    tip:'Watch them closely; the whites colour fast at high heat.',
    nutrition:{kcal:180,protein_g:14,carbs_g:1,fat_g:13}, storage:'Best fresh.'},

  {id:'bf-papeta-par-eda', cat:'savoury', name:'Papeta par Eda', emoji:'🥔', cuisine:'Indian (Parsi)', time:25, costPP:11,
    feel:'Eggs baked over soft, spiced potato slices.',
    ingredients:[{n:'potatoes',pp:150,u:'g'},{n:'large eggs',pp:2,u:'egg'},{n:'onion',pp:30,u:'g'},{n:'oil',pp:8,u:'ml'},{n:'turmeric'},{n:'green chilli',pp:4,u:'g'},{n:'fresh coriander'},{n:'salt'}],
    method:['Fry sliced potato with onion, turmeric and chilli until tender.','Spread flat in the pan and season.','Make small wells and crack in the eggs.','Cover and cook gently until the whites set, then scatter with coriander.'],
    tip:'Leftover cooked potato makes this a five-minute job.',
    nutrition:{kcal:300,protein_g:13,carbs_g:30,fat_g:15}, storage:'Best fresh.'},

  {id:'bf-lentil-frittata', cat:'savoury', name:'Lentil Frittata', emoji:'🥚', cuisine:'Global', time:30, costPP:18,
    feel:'A hearty, nutty bake that feeds you for days.',
    ingredients:[{n:'large eggs',pp:3,u:'egg'},{n:'lentils',pp:50,u:'g'},{n:'potatoes',pp:60,u:'g'},{n:'feta',pp:20,u:'g'},{n:'onion',pp:30,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'salt & pepper'}],
    method:['Soften onion and diced potato in the oil, then stir in the cooked lentils.','Beat the eggs with seasoning and pour over.','Crumble the feta on top.','Cook gently until almost set, then finish under the grill until golden.'],
    tip:'Make it on Sunday; it slices cold for two more mornings.',
    nutrition:{kcal:340,protein_g:20,carbs_g:22,fat_g:19}, storage:'Keeps 4 days in the fridge.'},

  {id:'bf-hash-brown-omelette', cat:'savoury', name:'Hash Brown Omelette', emoji:'🥔', cuisine:'Diner / Global', time:20, costPP:17,
    feel:'Crispy potato cooked right into a loaded omelette.',
    ingredients:[{n:'potatoes',pp:120,u:'g'},{n:'large eggs',pp:3,u:'egg'},{n:'cheddar',pp:25,u:'g'},{n:'green pepper',pp:30,u:'g'},{n:'oil',pp:8,u:'ml'},{n:'salt & pepper'}],
    method:['Grate the potato, squeeze out the water and fry in the oil until golden and crisp.','Pour the beaten eggs over the potato.','As they set, add the chopped pepper and grated cheddar to one half.','Fold over and serve.'],
    tip:'Squeezing the grated potato dry is what gets you crisp, not soggy.',
    nutrition:{kcal:380,protein_g:19,carbs_g:24,fat_g:23}, storage:'Best fresh.'},

  {id:'bf-crustless-quiche', cat:'savoury', name:'Crustless Quiche', emoji:'🥧', cuisine:'Global', time:35, costPP:18,
    feel:'All the comfort of quiche, none of the pastry — and low-carb.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'cream',pp:30,u:'ml'},{n:'cheddar',pp:25,u:'g'},{n:'spinach',pp:30,u:'g'},{n:'onion',pp:20,u:'g'},{n:'salt & pepper'}],
    method:['Soften the onion and wilt the spinach in a pan, then spread in a greased dish.','Beat the eggs with cream, cheddar and seasoning.','Pour over the vegetables.','Bake at 180°C for about 25 minutes until set and golden.'],
    tip:'Bake it in muffin cups for grab-and-go portions.',
    nutrition:{kcal:280,protein_g:16,carbs_g:4,fat_g:22}, storage:'Keeps 4 days; Banting-friendly.'},

  {id:'bf-sweet-potato-hash', cat:'savoury', name:'Sweet Potato Hash', emoji:'🍠', cuisine:'Global', time:20, costPP:12,
    feel:'Sweet, savoury and golden, with a soft egg on top.',
    ingredients:[{n:'sweet potato',pp:150,u:'g'},{n:'onion',pp:30,u:'g'},{n:'red pepper',pp:40,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'oil',pp:8,u:'ml'},{n:'paprika'},{n:'salt & pepper'}],
    method:['Fry diced sweet potato in the oil until starting to soften and brown.','Add the onion, pepper and paprika and cook until tender.','Season well and make a well in the middle.','Crack in an egg, cover and cook until the white sets.'],
    tip:'Cut the sweet potato small so it cooks through before it burns.',
    nutrition:{kcal:300,protein_g:10,carbs_g:38,fat_g:13}, storage:'Hash keeps 3 days; add a fresh egg.'},

  // ───────────────── 🥣 WARM ─────────────────
  {id:'bf-maltabella', cat:'warm', name:'Maltabella Sorghum Porridge', emoji:'🥣', cuisine:'South African', time:15, costPP:8,
    feel:'Dark, malty and warm — the porridge that raised a country.',
    ingredients:[{n:'sorghum meal',pp:50,u:'g'},{n:'water',pp:250,u:'ml'},{n:'milk',pp:150,u:'ml'},{n:'sugar',pp:10,u:'g'},{n:'salt'}],
    method:['Whisk the sorghum meal into the cold water with a pinch of salt.','Bring to a boil over medium heat, stirring constantly.','Turn low and simmer 8 to 10 minutes until thick and glossy.','Stir in the milk and serve with sugar and more milk.'],
    tip:'Always start in cold water to keep it lump-free.',
    nutrition:{kcal:240,protein_g:7,carbs_g:47,fat_g:3}, storage:'Keeps 2 days; loosen with milk.'},

  {id:'bf-maizena-porridge', cat:'warm', name:'Maizena Porridge', emoji:'🥛', cuisine:'South African', time:12, costPP:6,
    feel:'Smooth, silky and gentle — the porridge of small mornings.',
    ingredients:[{n:'cornflour',pp:40,u:'g'},{n:'milk',pp:300,u:'ml'},{n:'sugar',pp:10,u:'g'},{n:'salt'}],
    method:['Mix the cornflour to a paste with a little of the cold milk.','Heat the rest of the milk with a pinch of salt.','Whisk in the paste and stir over low heat until smooth and thick.','Sweeten to taste and serve.'],
    tip:'Keep whisking as it thickens so it stays velvety.', // ⚑ cornflour
    nutrition:{kcal:230,protein_g:9,carbs_g:38,fat_g:6}, storage:'Best fresh; thickens on standing.'},

  {id:'bf-putu-pap', cat:'warm', name:'Putu Pap', emoji:'🌽', cuisine:'South African', time:25, costPP:3,
    feel:'Dry, crumbly pap — comfort by the spoonful.',
    ingredients:[{n:'maize meal',pp:70,u:'g'},{n:'water',pp:120,u:'ml'},{n:'milk',pp:100,u:'ml'},{n:'sugar',pp:10,u:'g'},{n:'salt'}],
    method:['Bring the salted water to a boil and add the maize meal in a heap, do not stir.','Cover and steam on low for 10 minutes.','Now fork it through so it crumbles into soft grains.','Serve with milk and sugar, or with amasi.'],
    tip:'The no-stir start is what gives putu its crumbly texture.',
    nutrition:{kcal:250,protein_g:6,carbs_g:52,fat_g:3}, storage:'Keeps 3 days; steam to refresh.'},

  {id:'bf-congee', cat:'warm', name:'Savoury Rice Congee', emoji:'🍚', cuisine:'Asian', time:35, costPP:6,
    feel:'Silky rice soup that soothes from the first spoon.',
    ingredients:[{n:'rice',pp:50,u:'g'},{n:'water',pp:400,u:'ml'},{n:'large eggs',pp:1,u:'egg'},{n:'spring onion',pp:10,u:'g'},{n:'soy sauce',pp:8,u:'ml'},{n:'salt'}],
    method:['Simmer the rice in plenty of water, stirring now and then, until it breaks down to a thick soup, about 30 minutes.','Season with soy and salt.','Slide in a beaten egg and stir through to ribbons.','Top with sliced spring onion.'],
    tip:'More water and longer time gives a smoother, looser congee.',
    nutrition:{kcal:220,protein_g:9,carbs_g:38,fat_g:4}, storage:'Keeps 2 days; loosen with water.'},

  {id:'bf-cheesy-krummelpap', cat:'warm', name:'Cheesy Krummelpap', emoji:'🧀', cuisine:'South African', time:25, costPP:9,
    feel:'Crumbly pap turned rich and savoury with melting cheese.',
    ingredients:[{n:'maize meal',pp:70,u:'g'},{n:'water',pp:120,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'butter',pp:8,u:'g'},{n:'salt'}],
    method:['Make crumbly pap: heap the maize meal into salted boiling water, cover and steam 10 minutes, then fork through.','Stir the butter through while hot.','Fold in the grated cheddar so it just melts.','Serve straight away.'],
    tip:'Lovely with crispy bacon bits stirred in.',
    nutrition:{kcal:330,protein_g:12,carbs_g:48,fat_g:12}, storage:'Best fresh.'},

  {id:'bf-tamago-kake-gohan', cat:'warm', name:'Tamago Kake Gohan', emoji:'🍚', cuisine:'Japanese', time:5, costPP:8,
    feel:'Hot rice and a raw egg stirred glossy with soy — minimalist magic.',
    ingredients:[{n:'rice',pp:70,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'soy sauce',pp:10,u:'ml'},{n:'spring onion',pp:5,u:'g'}],
    method:['Cook the rice and have it piping hot in a bowl.','Crack a fresh egg over the top.','Add the soy and stir hard so the egg turns silky against the hot rice.','Scatter with spring onion.'],
    tip:'Use the freshest egg you can; the heat of the rice is what gently cooks it.',
    nutrition:{kcal:300,protein_g:11,carbs_g:48,fat_g:6}, storage:'Make to order; do not keep.'},

  // ───────────────── 🥐 SWEET ─────────────────
  {id:'bf-pannekoek', cat:'sweet', name:'Pannekoek', emoji:'🥞', cuisine:'South African', time:20, costPP:7,
    feel:'Thin, lacy pancakes rolled with cinnamon sugar.',
    ingredients:[{n:'cake flour',pp:40,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:120,u:'ml'},{n:'oil',pp:5,u:'ml'},{n:'sugar',pp:10,u:'g'},{n:'cinnamon'},{n:'salt'}],
    method:['Whisk the flour, egg, milk, oil and a pinch of salt to a thin, smooth batter.','Pour a thin layer into a hot greased pan and swirl to coat.','Cook until the edges lift, flip and cook the other side.','Sprinkle with cinnamon sugar, roll up and serve.'],
    tip:'Rest the batter 10 minutes for thinner, more tender pancakes.',
    nutrition:{kcal:230,protein_g:7,carbs_g:34,fat_g:8}, storage:'Best fresh; stack with paper between to reheat.'},

  {id:'bf-plaatkoekies', cat:'sweet', name:'Crumpets (Plaatkoekies)', emoji:'🥞', cuisine:'South African', time:15, costPP:7,
    feel:'Little thick drop scones, golden and fluffy.',
    ingredients:[{n:'cake flour',pp:40,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:80,u:'ml'},{n:'sugar',pp:8,u:'g'},{n:'baking powder',pp:2,u:'g'},{n:'salt'}],
    method:['Whisk all the ingredients to a thick, smooth batter.','Drop spoonfuls onto a hot greased pan.','When bubbles rise and pop, flip and cook the other side until golden.','Serve with butter and jam or syrup.'],
    tip:'Wait for the bubbles before flipping; that is when they are ready.',
    nutrition:{kcal:240,protein_g:7,carbs_g:38,fat_g:6}, storage:'Keeps 2 days; toast to refresh.'},

  {id:'bf-waffles', cat:'sweet', name:'Waffles', emoji:'🧇', cuisine:'Global', time:20, costPP:10,
    feel:'Crisp outside, fluffy in — built to hold the syrup.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:100,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'sugar',pp:10,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'salt'}],
    method:['Whisk the dry ingredients, then beat in the egg, milk and melted butter.','Heat and grease the waffle iron.','Pour in the batter and cook until golden and crisp.','Serve with honey, syrup or fruit.'],
    tip:'Do not lift the lid too early; let the steam do its work.',
    nutrition:{kcal:330,protein_g:8,carbs_g:42,fat_g:14}, storage:'Freeze and toast straight from frozen.'},

  {id:'bf-dutch-baby', cat:'sweet', name:'Dutch Baby', emoji:'🥞', cuisine:'German / American', time:25, costPP:10,
    feel:'A giant pancake that climbs the pan and gasps when it hits the table.',
    ingredients:[{n:'cake flour',pp:30,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:80,u:'ml'},{n:'butter',pp:10,u:'g'},{n:'sugar',pp:8,u:'g'},{n:'lemon',pp:0.2,u:''},{n:'salt'}],
    method:['Heat the oven to 220°C with the butter melting in an oven-proof pan inside.','Blend the flour, eggs, milk, sugar and a pinch of salt to a thin batter.','Pour into the hot pan and bake 15 to 18 minutes until puffed and golden.','Squeeze over lemon, dust with sugar and serve at once.'],
    tip:'The pan must be properly hot so it climbs the sides.',
    nutrition:{kcal:230,protein_g:8,carbs_g:28,fat_g:10}, storage:'Eat straight away.'},

  {id:'bf-crepes', cat:'sweet', name:'Crêpes', emoji:'🥞', cuisine:'French', time:20, costPP:7,
    feel:'Paper-thin and tender, ready for any filling.',
    ingredients:[{n:'cake flour',pp:35,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:120,u:'ml'},{n:'butter',pp:8,u:'g'},{n:'salt'}],
    method:['Whisk everything to a very thin, smooth batter and rest if you can.','Pour a thin layer into a hot buttered pan and swirl.','Cook until set and lightly golden, then flip briefly.','Fill with whatever you love and fold.'],
    tip:'The first crêpe is always a test one; do not worry about it.',
    nutrition:{kcal:200,protein_g:7,carbs_g:26,fat_g:8}, storage:'Stack with paper; keeps 2 days.'},

  {id:'bf-banana-bread-slice', cat:'sweet', name:'Banana Bread Slice', emoji:'🍌', cuisine:'Global', time:10, costPP:8,
    feel:'A warm slice of banana bread, toasted and buttered.',
    ingredients:[{n:'cake flour',pp:40,u:'g'},{n:'banana',pp:0.7,u:''},{n:'large eggs',pp:0.5,u:'egg'},{n:'sugar',pp:15,u:'g'},{n:'butter',pp:12,u:'g'},{n:'baking powder',pp:2,u:'g'}],
    method:['Mash the banana and beat in the egg, sugar and melted butter.','Fold in the flour and baking powder.','Bake in a loaf tin at 180°C for about 40 minutes (bake the whole loaf, slice per person).','Toast slices and butter to serve.'],
    tip:'Full master recipe lives in Bakes; this is the breakfast cross-link.', // ⟶ Bakes banana bread
    nutrition:{kcal:260,protein_g:5,carbs_g:40,fat_g:9}, storage:'Loaf keeps 4 days; freezes in slices.'},

  {id:'bf-honey-brick-toast', cat:'sweet', name:'Honey Brick Toast', emoji:'🍯', cuisine:'Asian street', time:20, costPP:10,
    feel:'A thick toast block, custard-soaked and baked sweet and golden.',
    ingredients:[{n:'unsliced white loaf',pp:0.25,u:''},{n:'butter',pp:15,u:'g'},{n:'honey',pp:20,u:'ml'},{n:'cream',pp:30,u:'ml'},{n:'sugar',pp:8,u:'g'}],
    method:['Cut a thick brick of bread and score the top into cubes, not all the way through.','Brush all over with melted butter and honey.','Bake at 180°C until toasty and golden, about 12 minutes.','Pull the cubes apart, drizzle with cream and more honey.'],
    tip:'Day-old bread holds the brick shape best.',
    nutrition:{kcal:360,protein_g:6,carbs_g:48,fat_g:17}, storage:'Best fresh and warm.'},

  {id:'bf-hk-egg-tarts', cat:'sweet', name:'Hong Kong Egg Tarts', emoji:'🥧', cuisine:'Chinese', time:35, costPP:10,
    feel:'Little custard tarts in flaky pastry, warm from the oven.',
    ingredients:[{n:'puff pastry',pp:60,u:'g'},{n:'large eggs',pp:2,u:'egg'},{n:'milk',pp:60,u:'ml'},{n:'sugar',pp:20,u:'g'},{n:'vanilla'}],
    method:['Line small tart tins with puff pastry.','Whisk the eggs, warm milk, sugar and vanilla and strain for a silky custard.','Pour into the shells.','Bake at 190°C for about 18 minutes until just set with a slight wobble.'],
    tip:'Straining the custard is what gives that glassy, smooth top.',
    nutrition:{kcal:240,protein_g:6,carbs_g:26,fat_g:12}, storage:'Best day made; keeps 2 days.'},

  // ───────────────── 🥗 FRESH ─────────────────
  {id:'bf-overnight-oats', cat:'fresh', name:'Overnight Oats Jar', emoji:'🫙', cuisine:'Global', time:5, costPP:12,
    feel:'Tomorrow-morning sorted before you go to bed.',
    ingredients:[{n:'rolled oats',pp:50,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'yoghurt',pp:40,u:'g'},{n:'honey',pp:10,u:'ml'},{n:'banana',pp:0.5,u:''}],
    method:['Stir the oats, milk, yoghurt and honey together in a jar.','Add sliced banana or any fruit.','Seal and chill overnight.','Eat cold straight from the jar.'],
    tip:'Layer in fruit and a spoon of peanut butter for variety each night.',
    nutrition:{kcal:320,protein_g:12,carbs_g:52,fat_g:7}, storage:'Keeps 3 days in the fridge.'},


  {id:'bf-amasi-fruit-bowl', cat:'fresh', name:'Amasi & Fruit Bowl', emoji:'🥣', cuisine:'South African', time:5, costPP:12,
    feel:'Tangy, cool amasi over sweet fruit — an old friend.',
    ingredients:[{n:'amasi',pp:200,u:'ml'},{n:'banana',pp:0.5,u:''},{n:'berries',pp:40,u:'g'},{n:'honey',pp:10,u:'ml'}],
    method:['Pour the amasi into a bowl.','Top with sliced banana and berries.','Drizzle with honey and serve cold.'],
    tip:'Lovely with a spoon of crunchy granola over the top.', // ⚑ amasi
    nutrition:{kcal:220,protein_g:9,carbs_g:34,fat_g:5}, storage:'Assemble fresh.'},

  {id:'bf-cottage-cheese-peaches', cat:'fresh', name:'Cottage Cheese & Peaches', emoji:'🍑', cuisine:'Global', time:5, costPP:22,
    feel:'Light, high-protein and quietly delicious.',
    ingredients:[{n:'cottage cheese',pp:100,u:'g'},{n:'tinned peaches',pp:80,u:'g'},{n:'honey',pp:8,u:'ml'},{n:'cinnamon'}],
    method:['Spoon the cottage cheese into a bowl.','Top with sliced peaches.','Drizzle with honey and a dusting of cinnamon.'],
    tip:'Any soft fruit works; try it with grated apple in winter.',
    nutrition:{kcal:200,protein_g:16,carbs_g:22,fat_g:5}, storage:'Assemble fresh.'},

  {id:'bf-salmon-bagel', cat:'fresh', name:'Smoked Salmon Bagel', emoji:'🥯', cuisine:'Global', time:8, costPP:25,
    feel:'The weekend treat that feels like a little restaurant at home.',
    ingredients:[{n:'bagel',pp:1,u:''},{n:'cream cheese',pp:30,u:'g'},{n:'smoked salmon',pp:40,u:'g'},{n:'red onion',pp:10,u:'g'},{n:'lemon',pp:0.2,u:''}],
    method:['Toast the bagel halves.','Spread thickly with cream cheese.','Lay over the smoked salmon and thin red onion.','Finish with a squeeze of lemon and black pepper.'],
    tip:'Bagel cross-links to bk-bagel.', // ⟶ bk-bagel · ⚑ smoked salmon
    nutrition:{kcal:380,protein_g:20,carbs_g:40,fat_g:15}, storage:'Best fresh.'},

  {id:'bf-tropical-fruit-plate', cat:'fresh', name:'Tropical Fruit Plate', emoji:'🍍', cuisine:'Global', time:8, costPP:12,
    feel:'A bright, juicy plate that wakes the whole table up.',
    ingredients:[{n:'pineapple',pp:80,u:'g'},{n:'pawpaw',pp:80,u:'g'},{n:'banana',pp:0.5,u:''},{n:'lemon',pp:0.2,u:''}],
    method:['Cut the pineapple, pawpaw and banana into bite-sized pieces.','Arrange on a plate.','Squeeze over a little lemon or lime to lift it.'],
    tip:'A sprinkle of toasted coconut makes it feel special.',
    nutrition:{kcal:150,protein_g:2,carbs_g:38,fat_g:1}, storage:'Best fresh; keeps 1 day cut.'},

  // ───────────────── 🥪 GO ─────────────────
  {id:'bf-breakfast-burrito', cat:'go', name:'Breakfast Burrito', emoji:'🌯', cuisine:'Tex-Mex', time:20, costPP:18,
    feel:'Everything good about breakfast, rolled up to eat with one hand.',
    ingredients:[{n:'flour tortilla',pp:1,u:''},{n:'large eggs',pp:2,u:'egg'},{n:'cheddar',pp:30,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'tomatoes',pp:40,u:'g'},{n:'salt & pepper'}],
    method:['Fry the bacon until crisp, then softly scramble the eggs in the same pan.','Warm the tortilla so it folds without cracking.','Pile eggs, bacon, grated cheddar and chopped tomato down the centre.','Fold the sides in, roll tight and toast seam-down to seal.'],
    tip:'Tortilla cross-links to bk-tortilla.', // ⟶ bk-tortilla
    nutrition:{kcal:480,protein_g:24,carbs_g:34,fat_g:27}, storage:'Wrap in foil up to 3 hours, or freeze before toasting.'},

  {id:'bf-breakfast-tacos', cat:'go', name:'Breakfast Tacos', emoji:'🌮', cuisine:'Tex-Mex', time:15, costPP:20,
    feel:'Soft tortillas, spicy chorizo and a tumble of egg.',
    ingredients:[{n:'flour tortilla',pp:1,u:''},{n:'chorizo',pp:40,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'fresh coriander'},{n:'salt'}],
    method:['Fry the chopped chorizo until its oil runs, then scramble the egg in with it.','Warm the tortilla.','Spoon the chorizo egg into the tortilla.','Top with coriander and fold.'],
    tip:'Tortilla cross-links to bk-tortilla.', // ⟶ bk-tortilla
    nutrition:{kcal:360,protein_g:16,carbs_g:24,fat_g:22}, storage:'Best fresh.'},

  {id:'bf-bacon-egg-muffin', cat:'go', name:'Bacon & Egg Muffin', emoji:'🥪', cuisine:'Global', time:12, costPP:20,
    feel:'The drive-time classic, made better at home.',
    ingredients:[{n:'english muffins',pp:1,u:''},{n:'large eggs',pp:1,u:'egg'},{n:'bacon',pp:30,u:'g'},{n:'cheddar',pp:20,u:'g'}],
    method:['Toast the muffin and fry the bacon until crisp.','Fry the egg in a ring so it fits the muffin.','Layer egg, bacon and cheese on the muffin.','Close and let the cheese melt for a moment.'],
    tip:'Fry the egg in a clean round cutter for a neat fit.',
    nutrition:{kcal:380,protein_g:20,carbs_g:28,fat_g:21}, storage:'Best fresh; freezes built for reheating.'},

  {id:'bf-green-smoothie', cat:'go', name:'Green Smoothie', emoji:'🥤', cuisine:'Global', time:5, costPP:12,
    feel:'A whole salad you can drink without noticing.',
    ingredients:[{n:'spinach',pp:30,u:'g'},{n:'banana',pp:1,u:''},{n:'apple',pp:0.5,u:''},{n:'milk',pp:150,u:'ml'},{n:'honey',pp:8,u:'ml'}],
    method:['Add the spinach, banana, apple, milk and honey to a blender.','Blend until completely smooth.','Pour and drink right away.'],
    tip:'A handful of spinach disappears completely behind the fruit.',
    nutrition:{kcal:210,protein_g:7,carbs_g:40,fat_g:4}, storage:'Best fresh; keeps 1 day chilled.'},

  {id:'bf-vetkoek-cheese', cat:'go', name:'Vetkoek with Cheese', emoji:'🧀', cuisine:'South African', time:10, costPP:10,
    feel:'A warm vetkoek split and stuffed with melting cheese.',
    ingredients:[{n:'vetkoek',pp:1,u:''},{n:'cheddar',pp:30,u:'g'},{n:'butter',pp:8,u:'g'}],
    method:['Warm or fry the vetkoek until golden.','Split it open while hot.','Butter inside and tuck in the grated cheese to melt.','Press shut and eat warm.'],
    tip:'Vetkoek master recipe lives in SA Boerekos; this is the cross-link.', // ⟶ SA vetkoek
    nutrition:{kcal:340,protein_g:10,carbs_g:40,fat_g:16}, storage:'Best warm; vetkoek keeps 2 days.'},

  {id:'bf-pb-banana-toast', cat:'go', name:'Peanut Butter Banana Toast', emoji:'🍞', cuisine:'Global', time:5, costPP:9,
    feel:'The lunchbox hero, fast and filling.',
    ingredients:[{n:'white bread',pp:2,u:''},{n:'peanut butter',pp:30,u:'g'},{n:'banana',pp:1,u:''},{n:'honey',pp:5,u:'ml'}],
    method:['Toast the bread.','Spread thickly with peanut butter.','Lay over sliced banana.','Drizzle with honey and serve.'],
    tip:'Use brown bread for extra staying power before school.',
    nutrition:{kcal:360,protein_g:11,carbs_g:48,fat_g:15}, storage:'Best fresh.'},


  {id:'bf-egg-cheese-muffin', cat:'go', name:'Egg & Cheese English Muffin', emoji:'🥚', cuisine:'Global', time:10, costPP:17,
    feel:'Soft egg and melting cheese in a toasted muffin.',
    ingredients:[{n:'english muffins',pp:1,u:''},{n:'large eggs',pp:1,u:'egg'},{n:'cheddar',pp:25,u:'g'},{n:'butter',pp:6,u:'g'}],
    method:['Toast and butter the muffin.','Fry or fold an egg to fit.','Lay the egg and cheese on the muffin and let it melt.','Close and serve warm.'],
    tip:'A vegetarian cousin of the bacon muffin; add tomato or avo if you like.',
    nutrition:{kcal:320,protein_g:16,carbs_g:28,fat_g:16}, storage:'Best fresh.'},

  {id:'bf-boerewors-roll', cat:'go', name:'Boerewors Roll', emoji:'🌭', cuisine:'South African', time:15, costPP:15,
    feel:'A braai-day icon, good any morning.',
    ingredients:[{n:'boerewors',pp:80,u:'g'},{n:'hot dog rolls',pp:1,u:''},{n:'onion',pp:40,u:'g'},{n:'tomato sauce',pp:15,u:'ml'}],
    method:['Fry or braai the boerewors until browned and cooked through.','Fry the sliced onion until soft and golden.','Warm the roll.','Tuck in the wors, top with onion and tomato sauce.'],
    tip:'Master recipe lives in Braai; this is the cross-link.', // ⟶ Braai boerewors roll
    nutrition:{kcal:480,protein_g:22,carbs_g:36,fat_g:28}, storage:'Best fresh.'},

  {id:'bf-chaffle', cat:'go', name:'Chaffle', emoji:'🧇', cuisine:'Global', time:10, costPP:11,
    feel:'A cheesy egg waffle — crisp, savoury and proudly low-carb.',
    ingredients:[{n:'large eggs',pp:1,u:'egg'},{n:'cheddar',pp:40,u:'g'},{n:'salt & pepper'}],
    method:['Beat the egg and stir in the grated cheddar.','Heat and grease a waffle iron.','Pour in the mix and cook until crisp and golden.','Eat as is, or use two as a low-carb sandwich.'],
    tip:'Let it sit 1 minute out of the iron; it crisps as it cools. A Banting winner.',
    nutrition:{kcal:230,protein_g:16,carbs_g:2,fat_g:18}, storage:'Best fresh; reheats crisp in a toaster.'},


  {id:'bf-breakfast-pizza', cat:'go', name:'Breakfast Pizza', emoji:'🍕', cuisine:'Global', time:25, costPP:22,
    feel:'Pizza for breakfast — and yes, the kids will cheer.',
    ingredients:[{n:'pizza base',pp:0.5,u:''},{n:'large eggs',pp:1,u:'egg'},{n:'cheddar',pp:40,u:'g'},{n:'bacon',pp:30,u:'g'},{n:'tomatoes',pp:40,u:'g'}],
    method:['Spread the base with chopped tomato and scatter with cheese and bacon.','Crack an egg into the middle.','Bake at 220°C until the base is crisp and the egg is just set.','Slice and serve.'],
    tip:'Pizza base cross-links to the Bakes dough.', // ⟶ Bakes pizza dough
    nutrition:{kcal:430,protein_g:22,carbs_g:38,fat_g:22}, storage:'Best fresh.'},

];
