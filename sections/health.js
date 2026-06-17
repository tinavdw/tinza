const SMOOTHIES = [
  {id:'sm_green',    tier:'free', emoji:'🥬', name:'Green Power Smoothie',      kcal:220, costPP:18,
   howItFeels:'Grassy, bright and alive — your body knows this is the real thing.',
   shopping:[{n:'Spinach',pp:80,u:'g'},{n:'Banana',pp:80,u:'g'},{n:'Apple',pp:80,u:'g'},{n:'Ginger (fresh)',pp:5,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Water or coconut water',pp:200,u:'ml'}],
   method:['Add all ingredients to blender.','Blend on high 60 seconds until completely smooth.','Taste — add more lemon or ginger to preference.','Serve immediately over ice.'],
   tip:'Use frozen banana for a thicker, colder smoothie without ice.'},
  {id:'sm_berry',    tier:'free', emoji:'🫐', name:'Berry Blast Smoothie',       kcal:195, costPP:22,
   howItFeels:'Tart, sweet, deep purple — antioxidants you can actually taste.',
   shopping:[{n:'Mixed frozen berries',pp:150,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Plain yoghurt',pp:80,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Milk or almond milk',pp:150,u:'ml'}],
   method:['Blend all ingredients until smooth.','Add more milk if too thick.','Serve chilled.'],
   tip:'Frozen berries give better colour and thickness than fresh.'},
  {id:'sm_mango',    tier:'free', emoji:'🥭', name:'Tropical Mango Smoothie',    kcal:240, costPP:20,
   howItFeels:'Pure sunshine — like a holiday in a glass on a Tuesday morning.',
   shopping:[{n:'Mango (frozen or fresh)',pp:150,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Coconut milk',pp:100,u:'ml'},{n:'Pineapple juice',pp:80,u:'ml'},{n:'Lime juice',pp:10,u:'ml'}],
   method:['Blend all ingredients until smooth and creamy.','Serve over ice with a lime wedge.'],
   tip:'Fresh mango works — just freeze it overnight first for the best texture.'},
  {id:'sm_choc',     tier:'free', emoji:'🍫', name:'Chocolate Protein Smoothie', kcal:310, costPP:24,
   howItFeels:'Tastes like dessert, works like a meal — guilt is not invited.',
   shopping:[{n:'Banana (frozen)',pp:100,u:'g'},{n:'Unsweetened cocoa powder',pp:15,u:'g'},{n:'Peanut butter',pp:30,u:'g'},{n:'Milk or oat milk',pp:200,u:'ml'},{n:'Honey',pp:10,u:'g'}],
   method:['Blend all ingredients until completely smooth.','Taste — add more cocoa for intensity or honey for sweetness.','Serve immediately.'],
   tip:'Add a handful of oats for extra staying power.'},
  {id:'sm_avo',      tier:'free', emoji:'🥑', name:'Avocado Banana Smoothie',    kcal:280, costPP:20,
   howItFeels:'Creamy, rich and deeply satisfying — like a meal disguised as a drink.',
   shopping:[{n:'Avocado (ripe, half)',pp:75,u:'g'},{n:'Banana',pp:80,u:'g'},{n:'Spinach',pp:40,u:'g'},{n:'Milk or almond milk',pp:200,u:'ml'},{n:'Honey',pp:10,u:'g'},{n:'Lime juice',pp:5,u:'ml'}],
   method:['Blend all ingredients until silky smooth.','Serve immediately — avocado oxidises quickly.'],
   tip:'The lime juice slows browning. Drink within 30 minutes.'},
  {id:'sm_beetroot',  tier:'plus', emoji:'🫀', name:'Beetroot & Berry Smoothie',  kcal:175, costPP:14,
   howItFeels:'Earthy, bright red, a little bit medical — in the best possible way.',
   shopping:[{n:'Cooked beetroot',pp:80,u:'g'},{n:'Frozen berries',pp:80,u:'g'},{n:'Apple',pp:60,u:'g'},{n:'Ginger',pp:5,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Water',pp:150,u:'ml'}],
   method:['Blend all ingredients until smooth.','Strain if you prefer a smoother texture.','Serve chilled.'],
   tip:'Wear gloves when handling beetroot — it stains everything permanently.'},
  {id:'sm_weightloss',  tier:'free',  emoji:'🍋', name:'Weight Loss Zest',          kcal:85,  costPP:14,
   howItFeels:'Sharp, cleansing and serious — not sweet, not pretending to be.',
   shopping:[{n:'Grapefruit (juiced)',pp:150,u:'ml'},{n:'Cucumber',pp:80,u:'g'},{n:'Brewed green tea (cooled)',pp:100,u:'ml'},{n:'Apple cider vinegar',pp:10,u:'ml'},{n:'Fresh mint leaves',pp:5,u:'g'},{n:'Ice',pp:60,u:'g'}],
   method:['Brew green tea and cool completely.','Juice grapefruit. Slice cucumber.','Blend all ingredients until smooth.','Serve over ice immediately.'],
   tip:'Apple cider vinegar before meals is linked to reduced appetite. Green tea adds metabolism-boosting catechins.'},
  {id:'sm_vision',      tier:'free',  emoji:'🥕', name:'Vision Booster',               kcal:145, costPP:18,
   howItFeels:'Sweet, creamy and tropical — like a dessert that actually works.',
   shopping:[{n:'Carrots (chopped)',pp:100,u:'g'},{n:'Mango (frozen or fresh)',pp:100,u:'g'},{n:'Baby spinach',pp:40,u:'g'},{n:'Coconut milk',pp:80,u:'ml'},{n:'Water',pp:60,u:'ml'}],
   method:['Add all ingredients to blender.','Blend on high 60 seconds.','Add more water for thinner consistency.','Serve immediately.'],
   tip:'Carrots and mango are rich in beta-carotene which converts to Vitamin A — essential for eye health.'},
  {id:'sm_heart',       tier:'free',  emoji:'🍓', name:'Heart Health Berry',           kcal:175, costPP:32,
   howItFeels:'Deep purple-red, creamy and rich — your cardiovascular system drinking deeply.',
   shopping:[{n:'Strawberries (fresh or frozen)',pp:100,u:'g'},{n:'Avocado (ripe, half)',pp:60,u:'g'},{n:'Cooked beetroot',pp:60,u:'g'},{n:'Plain kefir',pp:100,u:'ml'},{n:'Walnuts',pp:15,u:'g'},{n:'Honey',pp:8,u:'g'}],
   method:['Add all ingredients to blender.','Blend 60-90 seconds until very smooth.','Kefir can be swapped for yoghurt.','Serve chilled.'],
   tip:'Beetroot improves blood flow. Walnuts lower LDL cholesterol. Avocado adds heart-healthy fats.'},
  {id:'sm_immune',      tier:'free',  emoji:'🥬', name:'Immune Warrior Greens',        kcal:130, costPP:24,
   howItFeels:'Tropical and green — pineapple sweetness carrying everything your immune system needs.',
   shopping:[{n:'Pineapple (fresh or frozen)',pp:120,u:'g'},{n:'Kale or baby spinach',pp:40,u:'g'},{n:'Spirulina powder',pp:3,u:'g'},{n:'Coconut water',pp:150,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Fresh ginger',pp:5,u:'g'}],
   method:['Add all to blender.','Blend 60 seconds on high.','Spirulina turns it very green — that is correct.','Serve over ice.'],
   tip:'Spirulina is one of the most nutrient-dense foods on earth. Find it at Dischem (R60-90). Start with 2g if new to it.'},
  {id:'sm_brain',       tier:'plus',  emoji:'🫐', name:'Brain Power Fuel',             kcal:185, costPP:35,
   howItFeels:'Deep blueberry, creamy, subtly earthy from the matcha — focus in a glass.',
   shopping:[{n:'Frozen blueberries',pp:120,u:'g'},{n:'Walnuts',pp:20,u:'g'},{n:'Plain Greek yoghurt',pp:80,u:'g'},{n:'Matcha powder',pp:2,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Milk',pp:100,u:'ml'}],
   method:['Add all ingredients to blender.','Blend 60 seconds until smooth.','Serve immediately — matcha oxidises quickly.','Drink before work or studying.'],
   tip:'Blueberries improve memory. Walnuts are the number 1 brain nut. Matcha gives focused energy without jitters.'},
  {id:'sm_maca',        tier:'plus',  emoji:'🍫', name:'Maca Mood Lifter',             kcal:195, costPP:28,
   howItFeels:'Rich, nutty and deeply satisfying — a smoothie that feels like a proper meal.',
   shopping:[{n:'Banana (frozen)',pp:100,u:'g'},{n:'Almond butter',pp:30,u:'g'},{n:'Maca powder',pp:5,u:'g'},{n:'Unsweetened cocoa powder',pp:10,u:'g'},{n:'Milk or oat milk',pp:200,u:'ml'},{n:'Honey',pp:8,u:'g'}],
   method:['Add all ingredients to blender.','Blend 60 seconds until thick and creamy.','Taste — add more honey if needed.','Serve immediately.'],
   tip:'Maca is an adaptogen that helps the body manage stress and supports hormonal balance. Find it at Dischem (~R80-120/100g).'},
  {id:'sm_colon',       tier:'plus',  emoji:'🥫', name:'Colon Cleanse Fibre',          kcal:140, costPP:22,
   howItFeels:'Thick, earthy and surprisingly pleasant — like doing something genuinely good for yourself.',
   shopping:[{n:'Pawpaw (cubed)',pp:120,u:'g'},{n:'Ground flaxseed',pp:15,u:'g'},{n:'Plain kefir',pp:100,u:'ml'},{n:'Prunes (pitted)',pp:30,u:'g'},{n:'Ground cinnamon',pp:1,u:'g'},{n:'Water',pp:80,u:'ml'}],
   method:['Soak prunes in warm water 10 min. Drain.','Add all ingredients to blender.','Blend 60 seconds until completely smooth.','Drink immediately — the fibre activates quickly.'],
   tip:'Pawpaw contains papain, a natural digestive enzyme. Drink on an empty stomach for best effect.'}
];
const FRESH_JUICES = [
  {id:'fj_classic',  tier:'free', emoji:'🍊', name:'Classic Orange & Carrot',    kcal:120, costPP:12,
   howItFeels:'Bright, sweet, the smell of Sunday mornings.',
   shopping:[{n:'Oranges',pp:200,u:'g'},{n:'Carrots',pp:150,u:'g'},{n:'Fresh ginger',pp:5,u:'g'}],
   method:['Peel oranges. Wash carrots and ginger.','Juice all ingredients together.','Serve immediately over ice.'],
   tip:'Juice carrots first, then orange — easier on the juicer.'},
  {id:'fj_green',    tier:'free', emoji:'🥒', name:'Green Detox Juice',          kcal:90,  costPP:18,
   howItFeels:'Tastes like the colour green — clean, sharp, unapologetically healthy.',
   shopping:[{n:'Cucumber',pp:150,u:'g'},{n:'Celery (stalks)',pp:80,u:'g'},{n:'Green apple',pp:100,u:'g'},{n:'Spinach',pp:60,u:'g'},{n:'Lemon',pp:30,u:'g'},{n:'Ginger',pp:5,u:'g'}],
   method:['Wash all ingredients. Core the apple.','Juice in order: cucumber, celery, apple, spinach, lemon, ginger.','Stir and serve over ice.'],
   tip:'Lemon and ginger mask the green flavour significantly — don\'t skip them.'},
  {id:'fj_beetroot',  tier:'free', emoji:'🫀', name:'Beetroot & Apple Juice',    kcal:110, costPP:14,
   howItFeels:'Deep red, earthy, slightly sweet — your blood pressure just relaxed.',
   shopping:[{n:'Raw beetroot',pp:150,u:'g'},{n:'Apple',pp:150,u:'g'},{n:'Lemon',pp:30,u:'g'},{n:'Ginger',pp:5,u:'g'}],
   method:['Peel beetroot. Wash and core apple.','Juice all together.','Serve immediately — colour fades quickly.'],
   tip:'Raw beetroot is more nutritious than cooked. Wear gloves.'},
  {id:'fj_watermelon',tier:'free', emoji:'🍉', name:'Watermelon Mint Cooler',    kcal:80,  costPP:8,
   howItFeels:'Summer in a glass — ice cold, rosy, completely effortless.',
   shopping:[{n:'Watermelon (flesh, no rind)',pp:300,u:'g'},{n:'Fresh mint leaves',pp:8,u:'g'},{n:'Lime juice',pp:15,u:'ml'}],
   method:['Blend watermelon until smooth. Strain through a sieve.','Add lime juice and torn mint leaves.','Serve over ice.'],
   tip:'Watermelon is 92% water — barely needs a juicer. A blender and sieve works perfectly.'},
  {id:'fj_pineapple', tier:'plus', emoji:'🍍', name:'Pineapple & Turmeric Juice', kcal:130, costPP:16,
   howItFeels:'Tropical fire — sweet pineapple with golden anti-inflammatory heat.',
   shopping:[{n:'Fresh pineapple',pp:200,u:'g'},{n:'Turmeric (fresh or ½ tsp powder)',pp:3,u:'g'},{n:'Lemon',pp:30,u:'g'},{n:'Black pepper (pinch)',pp:0.2,u:'g'}],
   method:['Core and cube pineapple. Peel fresh turmeric.','Juice pineapple and turmeric together.','Add lemon juice. Add a tiny pinch of black pepper.','Stir and serve.'],
   tip:'Black pepper increases turmeric absorption by 2000%. Do not skip it.'},
  {id:'fj_immune',     tier:'free',  emoji:'🍊', name:'Immune Shield',               kcal:95,  costPP:16,
   howItFeels:'Sour, punchy and medicinal — exactly what you drink when you feel something coming on.',
   shopping:[{n:'Oranges (juiced)',pp:200,u:'ml'},{n:'Grapefruit (juiced)',pp:100,u:'ml'},{n:'Fresh ginger (grated)',pp:8,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Black pepper (pinch)',pp:0.2,u:'g'}],
   method:['Juice oranges and grapefruit.','Stir in ginger, turmeric and black pepper.','Strain if preferred smooth.','Drink immediately — vitamin C degrades quickly.'],
   tip:'Black pepper makes turmeric absorption 2000% more effective. Do not skip it.'},
  {id:'fj_liver',       tier:'plus',  emoji:'🥬', name:'Liver Cleanse',                kcal:65,  costPP:18,
   howItFeels:'Earthy, green and serious — tastes like doing something your liver actually needs.',
   shopping:[{n:'Green apple',pp:120,u:'g'},{n:'Raw beetroot',pp:80,u:'g'},{n:'Kale or spinach',pp:40,u:'g'},{n:'Cucumber',pp:80,u:'g'},{n:'Lemon juice',pp:20,u:'ml'},{n:'Fresh ginger',pp:5,u:'g'}],
   method:['Chop all ingredients to fit your juicer.','Juice in order: cucumber, apple, beetroot, kale, ginger.','Add lemon juice. Stir.','Drink within 20 minutes of juicing.'],
   tip:'Beetroot contains betaine which supports liver function. Drink 3x per week for two weeks and notice the energy difference.'},
  {id:'fj_antiinflam',  tier:'free',  emoji:'🍍', name:'Anti-Inflammatory Kick',       kcal:90,  costPP:22,
   howItFeels:'Tropical fire — pineapple sweetness exploding with ginger and turmeric.',
   shopping:[{n:'Pineapple (fresh)',pp:200,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Fresh ginger',pp:8,u:'g'},{n:'Celery (stalks)',pp:60,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Black pepper (pinch)',pp:0.2,u:'g'}],
   method:['Juice pineapple, ginger and celery.','Stir in turmeric, lemon juice and black pepper.','Strain if preferred.','Serve over ice.'],
   tip:'Pineapple contains bromelain — a natural anti-inflammatory enzyme. Combined with turmeric this is powerfully effective.'},
  {id:'fj_antioxidant', tier:'free',  emoji:'🫐', name:'Antioxidant Berry Blast',      kcal:85,  costPP:28,
   howItFeels:'Deep purple, intensely fruity — antioxidants you can taste in every sip.',
   shopping:[{n:'Blueberries (fresh or frozen)',pp:80,u:'g'},{n:'Blackberries',pp:60,u:'g'},{n:'Pomegranate juice',pp:60,u:'ml'},{n:'Apple (juiced)',pp:100,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Juice the apple.','Blend berries with apple juice until smooth.','Strain through a sieve.','Mix with pomegranate juice and lemon. Serve cold.'],
   tip:'The deeper the colour, the higher the antioxidant content. Three different anthocyanin sources in one glass.'},
  {id:'fj_greenglow',   tier:'free',  emoji:'🌿', name:'Green Glow',                   kcal:75,  costPP:20,
   howItFeels:'Clean, fresh and herby — the juice that makes you feel organised.',
   shopping:[{n:'Baby spinach',pp:60,u:'g'},{n:'Green apple',pp:100,u:'g'},{n:'Cucumber',pp:100,u:'g'},{n:'Fresh parsley',pp:10,u:'g'},{n:'Pear',pp:80,u:'g'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Juice cucumber, apple and pear first.','Add spinach and parsley — juice through.','Stir in lemon juice.','Drink within 15 minutes — greens oxidise fast.'],
   tip:'Parsley is one of the most nutrient-dense greens — packed with Vitamin K, C and iron. It works quietly here but does serious nutritional work.'},
  {id:'fj_digestive',   tier:'plus',  emoji:'🌱', name:'Digestive Soother',            kcal:55,  costPP:15,
   howItFeels:'Gentle, slightly anise-flavoured and calming — your gut unclenching with every sip.',
   shopping:[{n:'Fennel bulb (juiced)',pp:80,u:'g'},{n:'Green apple',pp:100,u:'g'},{n:'Fresh ginger',pp:5,u:'g'},{n:'Aloe vera juice (pure)',pp:30,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Water',pp:60,u:'ml'}],
   method:['Juice fennel, apple and ginger.','Stir in aloe vera juice and lemon.','Add water if too strong.','Drink 20 minutes before a meal for best effect.'],
   tip:'Fennel relaxes intestinal spasms. Aloe vera soothes the gut lining. Ginger reduces nausea. Used across multiple traditional medicine systems.'}
];
const OVERNIGHT_OATS = [
  {id:'oa_classic',  tier:'free', emoji:'🌾', name:'Classic Overnight Oats',     kcal:380, costPP:12,
   howItFeels:'Quietly satisfying — breakfast that waited patiently for you.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk or almond milk',pp:150,u:'ml'},{n:'Plain yoghurt',pp:80,u:'g'},{n:'Honey',pp:15,u:'g'},{n:'Banana (sliced)',pp:60,u:'g'},{n:'Chia seeds',pp:10,u:'g'}],
   method:['Combine oats, milk, yoghurt, honey and chia seeds in a jar.','Stir well. Seal and refrigerate overnight (minimum 6 hours).','Top with sliced banana before serving cold.'],
   tip:'The ratio is 1:1.5 oats to liquid for the right texture. Too thick — add more milk.'},
  {id:'oa_berry',    tier:'free', emoji:'🫐', name:'Berry & Chia Overnight Oats', kcal:355, costPP:18,
   howItFeels:'Bright and jammy — fruit that sank overnight into creamy oats.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk',pp:150,u:'ml'},{n:'Chia seeds',pp:15,u:'g'},{n:'Mixed berries (fresh or frozen)',pp:100,u:'g'},{n:'Honey',pp:12,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'}],
   method:['Mix oats, milk, chia seeds, honey and vanilla. Stir well.','Fold in half the berries.','Refrigerate overnight.','Top with remaining berries before serving.'],
   tip:'Frozen berries break down overnight and create a jammy layer — better than fresh.'},
  {id:'oa_pb',       tier:'free', emoji:'🥜', name:'Peanut Butter Banana Oats',  kcal:430, costPP:14,
   howItFeels:'Rich, indulgent, filling — the PB&J of breakfast jars.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk',pp:150,u:'ml'},{n:'Peanut butter',pp:30,u:'g'},{n:'Banana (mashed + sliced)',pp:80,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Cinnamon (pinch)',pp:0.5,u:'g'}],
   method:['Mash half the banana with the oats, milk, peanut butter, honey and cinnamon.','Stir well. Refrigerate overnight.','Top with sliced banana before serving.'],
   tip:'Mashing banana into the oats makes the whole jar creamy and naturally sweet.'},
  {id:'oa_choc',     tier:'plus', emoji:'🍫', name:'Chocolate Hazelnut Oats',    kcal:410, costPP:16,
   howItFeels:'Breakfast that tastes like dessert — and that\'s completely fine.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Cocoa powder',pp:10,u:'g'},{n:'Milk',pp:160,u:'ml'},{n:'Honey',pp:15,u:'g'},{n:'Hazelnuts (chopped)',pp:20,u:'g'},{n:'Banana',pp:60,u:'g'}],
   method:['Whisk cocoa into milk until dissolved.','Add oats, honey and banana. Stir well.','Refrigerate overnight.','Top with chopped hazelnuts before serving.'],
   tip:'Toast the hazelnuts in a dry pan for 3 minutes — completely transforms the flavour.'},
  {id:'oa_bircher',     tier:'free',  emoji:'🍎', name:'Bircher Muesli',               kcal:340, costPP:18, makes:1,
   howItFeels:'Classic Swiss breakfast energy — creamy, apple-bright and clean.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Apple juice',pp:120,u:'ml'},{n:'Apple (grated)',pp:80,u:'g'},{n:'Plain yoghurt',pp:50,u:'g'},{n:'Honey',pp:8,u:'g'},{n:'Mixed nuts (chopped)',pp:15,u:'g'}],
   method:['Soak oats in apple juice overnight in fridge.','Morning: stir in grated apple, yoghurt and honey.','Top with chopped nuts. Serve cold.'],
   tip:'Dr Bircher-Benner invented this in 1900. Use apple juice not milk for a lighter, fruitier result.'},
  {id:'oa_cocoban',     tier:'free',  emoji:'🍫', name:'Cocoa Banana Dream',           kcal:320, costPP:12, makes:1,
   howItFeels:'Chocolate for breakfast that you do not have to feel guilty about.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk',pp:150,u:'ml'},{n:'Cocoa powder',pp:10,u:'g'},{n:'Banana (mashed)',pp:60,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Chia seeds',pp:5,u:'g'}],
   method:['Mash banana well. Mix all ingredients in a jar. Stir thoroughly.','Cover and refrigerate overnight.','Top with banana slices before serving.'],
   tip:'Riper banana = sweeter oats. Black-spotted bananas are perfect here.'},
  {id:'oa_fruitcomp',   tier:'free',  emoji:'🍑', name:'Spiced Dried Fruit Compote',   kcal:310, costPP:16, makes:1,
   howItFeels:'Warm, sticky and fragrant — feels like a winter pudding disguised as breakfast.',
   shopping:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk',pp:150,u:'ml'},{n:'Mixed dried fruit',pp:40,u:'g'},{n:'Ground cinnamon',pp:1,u:'g'},{n:'Ground ginger',pp:0.3,u:'g'},{n:'Honey',pp:8,u:'g'}],
   method:['Soak dried fruit in warm water 10 min. Drain and chop.','Mix oats, milk, cinnamon, ginger, honey and fruit.','Refrigerate overnight. Add splash of milk if too thick.'],
   tip:'SA dried apricots give incredible flavour — use Ceres or Montagu brand.'},
  {id:'oa_kheer',       tier:'plus',  emoji:'🥥', name:'Chia Coconut Kheer',           kcal:290, costPP:22, makes:1,
   howItFeels:'Lightly spiced, coconut-creamy — overnight oats gone beautifully Indian.',
   shopping:[{n:'Rolled oats',pp:40,u:'g'},{n:'Chia seeds',pp:15,u:'g'},{n:'Coconut milk',pp:120,u:'ml'},{n:'Milk',pp:60,u:'ml'},{n:'Cardamom (ground)',pp:0.5,u:'g'},{n:'Pistachios (chopped)',pp:10,u:'g'},{n:'Honey',pp:8,u:'g'}],
   method:['Combine all ingredients except pistachios.','Stir well. Refrigerate overnight.','Top with pistachios before serving cold.'],
   tip:'Add 3ml rose water in the morning for something truly special. Find it at Indian spice shops (~R25).'}
];
const HEALTHY_MUFFINS = [
  {id:'mu_banana',   tier:'free', emoji:'🍌', name:'Banana Oat Muffins',         kcal:145, costPP:8, makes:12,
   howItFeels:'Soft, gently sweet, smells like a proper kitchen — the muffin that replaces the sugary one.',
   shopping:[{n:'Ripe bananas (mashed)',pp:0.25,u:''},{n:'Rolled oats',pp:20,u:'g'},{n:'Cake flour',pp:15,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Honey',pp:8,u:'g'},{n:'Oil or melted butter',pp:5,u:'ml'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Cinnamon',pp:0.3,u:'g'}],
   method:['Preheat oven 180°C. Line a 12-hole muffin tin.','Mash bananas well. Mix in egg, honey and oil.','Add oats, flour, baking powder and cinnamon. Mix until just combined.','Fill muffin holes ¾ full. Bake 18–22 min until golden and a skewer comes out clean.','Cool 5 min before removing.'],
   tip:'The riper the banana, the sweeter the muffin — no added sugar needed.'},
  {id:'mu_blueberry', tier:'free', emoji:'🫐', name:'Blueberry Yoghurt Muffins',  kcal:160, costPP:12, makes:12,
   howItFeels:'Bursting pockets of berry in a tender crumb — the muffin that feels like a treat.',
   shopping:[{n:'Cake flour',pp:20,u:'g'},{n:'Plain yoghurt',pp:20,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Honey or sugar',pp:10,u:'g'},{n:'Oil',pp:5,u:'ml'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Blueberries (fresh or frozen)',pp:15,u:'g'},{n:'Vanilla',pp:0.3,u:'ml'}],
   method:['Preheat oven 180°C. Grease muffin tin.','Whisk egg, yoghurt, oil, honey and vanilla.','Fold in flour and baking powder until just combined — lumps are fine.','Gently fold in blueberries.','Fill ¾ full. Bake 20–25 min.'],
   tip:'Toss blueberries in a teaspoon of flour before folding in — they won\'t sink.'},
  {id:'mu_carrot',   tier:'free', emoji:'🥕', name:'Carrot & Cinnamon Muffins',  kcal:155, costPP:9, makes:12,
   howItFeels:'Warm spice, sweet carrot — all the joy of carrot cake in a portable muffin.',
   shopping:[{n:'Cake flour',pp:18,u:'g'},{n:'Carrots (grated)',pp:25,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Oil',pp:5,u:'ml'},{n:'Brown sugar or honey',pp:10,u:'g'},{n:'Cinnamon',pp:0.5,u:'g'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Milk',pp:10,u:'ml'}],
   method:['Preheat oven 180°C. Line muffin tin.','Whisk egg, oil, sugar and milk.','Gently mix in flour, baking powder and cinnamon.','Fold in grated carrot.','Fill ¾ full. Bake 20–22 min.'],
   tip:'Squeeze excess moisture from grated carrot before adding — prevents soggy muffins.'},
  {id:'mu_choc',     tier:'plus', emoji:'🍫', name:'Dark Choc & Beetroot Muffins', kcal:170, costPP:11, makes:12,
   howItFeels:'Rich, dark and deeply satisfying — the muffin that has no business being healthy.',
   shopping:[{n:'Cake flour',pp:18,u:'g'},{n:'Cooked beetroot (grated)',pp:25,u:'g'},{n:'Cocoa powder',pp:5,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Oil',pp:5,u:'ml'},{n:'Honey',pp:10,u:'g'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Dark chocolate chips',pp:10,u:'g'}],
   method:['Preheat oven 180°C.','Mix egg, oil and honey. Add grated beetroot.','Fold in flour, cocoa and baking powder.','Add chocolate chips.','Fill muffin tin ¾ full. Bake 20–24 min.'],
   tip:'Beetroot keeps these muffins moist for 3+ days. Wrap individually for lunchboxes.'},
  {id:'mu_appleoat',    tier:'free',  emoji:'🍎', name:'Spiced Apple & Oat',          kcal:155, costPP:9, makes:12,
   howItFeels:'Warm spice and apple — smells like autumn, tastes like a good decision.',
   shopping:[{n:'Cake flour',pp:18,u:'g'},{n:'Rolled oats',pp:15,u:'g'},{n:'Apple (grated)',pp:25,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Oil',pp:5,u:'ml'},{n:'Brown sugar',pp:10,u:'g'},{n:'Cinnamon',pp:0.8,u:'g'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Milk',pp:10,u:'ml'}],
   method:['Preheat oven 180C. Line muffin tin.','Mix dry. Mix wet. Fold in grated apple.','Fill 3/4 full. Bake 18-22 min until golden.'],
   tip:'Grate apple with skin on — adds fibre. Squeeze out excess moisture before folding in.'},
  {id:'mu_zucchlem',    tier:'free',  emoji:'🥒', name:'Zucchini & Lemon',             kcal:170, costPP:11, makes:12,
   howItFeels:'Light, moist and almost savoury — the muffin that surprises everyone.',
   shopping:[{n:'Zucchini/baby marrow (finely grated)',pp:16.7,u:'g'},{n:'Whole wheat flour',pp:16.7,u:'g'},{n:'Egg',pp:0.08,u:''},{n:'Honey',pp:7,u:'g'},{n:'Olive oil',pp:4,u:'ml'},{n:'Lemon zest',pp:0.5,u:'g'},{n:'Lemon juice',pp:3,u:'ml'},{n:'Baking powder',pp:0.6,u:'g'},{n:'Poppy seeds (optional)',pp:1,u:'g'}],
   method:['Preheat oven 180C. Line muffin tin.','Grate zucchini and squeeze out ALL moisture using a clean cloth — mandatory step.','Whisk eggs, honey, olive oil, lemon juice and zest.','Fold in flour, baking powder and poppy seeds. Stir in zucchini until just combined.','Fill 3/4 full. Bake 20-22 min until golden.'],
   tip:'Squeezing the zucchini is non-negotiable — skipping it gives wet sunken muffins. The lemon zest is what makes this one special.'},
  {id:'mu_spinachfeta', tier:'plus',  emoji:'🧀', name:'Savoury Spinach & Feta',       kcal:135, costPP:16, makes:12,
   howItFeels:'Salty, herby and filling — the muffin that belongs at breakfast with eggs.',
   shopping:[{n:'Cake flour',pp:18,u:'g'},{n:'Baby spinach (chopped)',pp:20,u:'g'},{n:'Feta (crumbled)',pp:15,u:'g'},{n:'Egg',pp:0.1,u:''},{n:'Oil',pp:5,u:'ml'},{n:'Milk',pp:15,u:'ml'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Dried oregano',pp:0.3,u:'g'}],
   method:['Preheat 180C. Mix dry. Mix wet with spinach and feta.','Combine. Fill 3/4 full. Bake 18-20 min.'],
   tip:'Freeze individually — microwave from frozen 60 seconds for a perfect fast breakfast.'},
  {id:'mu_banwalt',     tier:'free',  emoji:'🍌', name:'Banana & Walnut',              kcal:170, costPP:13, makes:12,
   howItFeels:'Dense, banana-sweet and satisfying — the classic that never disappoints.',
   shopping:[{n:'Cake flour',pp:18,u:'g'},{n:'Ripe banana (mashed)',pp:0.25,u:''},{n:'Egg',pp:0.1,u:''},{n:'Oil',pp:5,u:'ml'},{n:'Brown sugar',pp:8,u:'g'},{n:'Walnuts (chopped)',pp:10,u:'g'},{n:'Baking powder',pp:0.4,u:'g'},{n:'Cinnamon',pp:0.3,u:'g'}],
   method:['Preheat 180C. Mash bananas very well.','Combine all. Fold in walnuts. Fill 3/4.','Bake 20-22 min until golden.'],
   tip:'Black-spotted bananas = the sweetest muffins. Never use a green banana here.'},
  {id:'mu_pumpkinwalt', tier:'free',  emoji:'🎃', name:'Roasted Pumpkin & Walnut',    kcal:200, costPP:12, makes:12,
   howItFeels:'Warm, sweet and deeply autumnal — smells incredible while baking.',
   shopping:[{n:'Roasted pumpkin (mashed)',pp:16.7,u:'g'},{n:'Whole wheat flour',pp:15,u:'g'},{n:'Walnuts (roughly chopped)',pp:5,u:'g'},{n:'Egg',pp:0.08,u:''},{n:'Honey or maple syrup',pp:10.5,u:'g'},{n:'Coconut oil (melted)',pp:5,u:'ml'},{n:'Baking powder',pp:0.6,u:'g'},{n:'Cinnamon',pp:0.1,u:'g'},{n:'Nutmeg',pp:0.02,u:'g'}],
   method:['Preheat oven 180C. Roast peeled cubed pumpkin at 200C for 25 min first.','Mash roasted pumpkin well. Allow to cool slightly.','Whisk eggs, honey, coconut oil and mashed pumpkin until smooth.','Fold in flour, baking powder, cinnamon and nutmeg.','Gently stir in chopped walnuts. Fill cases 3/4 full. Bake 22-25 min.'],
   tip:'Roasting the pumpkin is essential — it concentrates the natural sugars and creates deeper flavour. Steaming gives a watery batter.'},
  {id:'mu_seedomega',   tier:'free',  emoji:'🌱', name:'Everything Seed Omega',        kcal:225, costPP:14, makes:12,
   howItFeels:'Nutty, dense and filling — the muffin that actually keeps you going till lunch.',
   shopping:[{n:'Whole wheat flour',pp:15,u:'g'},{n:'Mixed seeds (chia, flax, sunflower)',pp:10,u:'g'},{n:'Egg',pp:0.08,u:''},{n:'Plain Greek yoghurt',pp:12.5,u:'g'},{n:'Honey or maple syrup',pp:7,u:'g'},{n:'Coconut oil (melted)',pp:4,u:'g'},{n:'Baking powder',pp:0.6,u:'g'},{n:'Sea salt',pp:0.1,u:'g'}],
   method:['Preheat oven 180C. Line a 12-hole muffin tin.','Whisk eggs, honey, yoghurt and melted coconut oil until smooth.','Fold in flour, seeds, baking powder and salt. Stir until just combined.','Fill cases 3/4 full. Bake 20-25 min until toothpick comes out clean.','Cool 10 min before removing from tin.'],
   tip:'Toast sunflower and flax seeds in a dry pan 2 min before adding — unlocks their nutty aroma completely. Greek yoghurt is the key binder here.'}
];
const RAW_AND_REAL = [
  {id:'rr_powerball',  tier:'free', emoji:'⚡', name:'Raw Cacao Energy Balls',     kcal:110, costPP:8,
   howItFeels:'One ball, five minutes, kept in the fridge all week — your afternoon snack sorted.',
   shopping:[{n:'Medjool dates (pitted)',pp:12,u:'g'},{n:'Rolled oats',pp:8,u:'g'},{n:'Raw cacao powder',pp:3,u:'g'},{n:'Almond or cashew butter',pp:5,u:'g'},{n:'Chia seeds',pp:2,u:'g'},{n:'Shredded coconut (for coating)',pp:2,u:'g'},{n:'Sea salt',pp:0.1,u:'g'}],
   method:['Place dates, oats, cacao powder, nut butter, chia seeds and salt in a food processor.','Pulse until mixture forms a sticky dough that holds together when pinched.','Take a tablespoon of dough and roll between palms into a ball.','Roll each ball in shredded coconut for extra texture.','Refrigerate 30 min to firm up. Store in fridge up to 2 weeks or freeze 3 months.'],
   tip:'If dates are dry, soak in warm water 5 min and pat dry first — this is the difference between a perfect ball and a crumbly one.'},
  {id:'rr_acai',       tier:'free', emoji:'🫐', name:'Açaí Smoothie Bowl',        kcal:280, costPP:28,
   howItFeels:'Like the Instagram version of breakfast — except you made it yourself.',
   shopping:[{n:'Frozen açaí (or mixed dark berries)',pp:100,u:'g'},{n:'Banana (frozen)',pp:80,u:'g'},{n:'Almond milk',pp:60,u:'ml'},{n:'Granola',pp:30,u:'g'},{n:'Fresh berries',pp:50,u:'g'},{n:'Honey',pp:8,u:'g'},{n:'Coconut flakes',pp:8,u:'g'}],
   method:['Blend frozen açaí and banana with just enough almond milk to move — keep it thick.','Pour into a bowl immediately.','Top with granola, fresh berries, coconut flakes and honey.','Eat immediately — it melts fast.'],
   tip:'The key is keeping it thick — add milk one tablespoon at a time.'},
  {id:'rr_chia',       tier:'free', emoji:'🥫', name:'Vanilla Chia Pudding',      kcal:190, costPP:12,
   howItFeels:'Creamy, speckled, quietly exotic — tastes like something from a wellness café.',
   shopping:[{n:'Chia seeds',pp:25,u:'g'},{n:'Coconut milk or almond milk',pp:200,u:'ml'},{n:'Honey',pp:10,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'},{n:'Fresh mango or berries (to serve)',pp:60,u:'g'}],
   method:['Whisk chia seeds, milk, honey and vanilla together.','Stir well — then stir again 5 minutes later.','Refrigerate overnight or minimum 4 hours.','Serve topped with fresh mango or berries.'],
   tip:'Must be stirred within the first 10 minutes to prevent clumping at the bottom.'},
  {id:'rr_granola',    tier:'free', emoji:'🥣', name:'SA Honey Nut Granola',      kcal:240, costPP:9,
   howItFeels:'Crunchy, golden, smells like your oven just hugged you — eat it on everything.',
   shopping:[{n:'Rolled oats (raw)',pp:40,u:'g'},{n:'Almond or cashew butter',pp:15,u:'g'},{n:'Raw honey',pp:12,u:'g'},{n:'Coconut oil (liquid)',pp:5,u:'ml'},{n:'Sunflower or pumpkin seeds',pp:10,u:'g'},{n:'Dried cranberries (chopped)',pp:10,u:'g'},{n:'Vanilla extract',pp:1,u:'ml'},{n:'Sea salt',pp:0.1,u:'g'}],
   method:['Whisk nut butter, honey, coconut oil and vanilla until smooth.','Add oats, seeds and salt. Coat everything thoroughly — this makes the clusters.','Fold in dried cranberries last so they stay whole.','Scoop into a lined tray or silicone moulds. Press down firmly.','Freeze 1 hour then move to fridge to firm up. Store airtight up to 2 weeks.'],
   tip:'Do NOT bake these — they are raw. The pressure when pressing is what makes clusters. If too dry add a little more nut butter.'},
  {id:'rr_fruitbowl',  tier:'plus', emoji:'🍓', name:'SA Fruit Salad with Honey Lime', kcal:130, costPP:18,
   howItFeels:'All the best fruit of summer, dressed simply — nothing needs to be complicated.',
   shopping:[{n:'Watermelon (cubed)',pp:100,u:'g'},{n:'Mango (cubed)',pp:80,u:'g'},{n:'Strawberries (halved)',pp:80,u:'g'},{n:'Banana (sliced)',pp:60,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Lime juice',pp:10,u:'ml'},{n:'Fresh mint',pp:5,u:'g'}],
   method:['Combine all fruit in a bowl.','Whisk honey and lime juice together. Pour over fruit.','Tear mint leaves over the top.','Refrigerate 15 min before serving.'],
   tip:'Add the banana just before serving — it browns quickly.'},
  {id:'rr_zuccarpaccio',tier:'free', emoji:'🥒', name:'Zucchini Carpaccio',          kcal:95,  costPP:14,
   howItFeels:'Elegant, fresh and almost impossibly light — raw Italian vibes in 10 minutes.',
   shopping:[{n:'Baby marrow/zucchini (very thinly sliced)',pp:200,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Parmesan (shaved)',pp:20,u:'g'},{n:'Fresh basil leaves',pp:8,u:'g'},{n:'Pine nuts',pp:10,u:'g'},{n:'Salt and black pepper',pp:1,u:'pinch'}],
   method:['Slice zucchini paper-thin with a mandoline or sharp knife.','Arrange on a flat plate, overlapping slightly.','Drizzle with olive oil and lemon juice. Season generously.','Scatter parmesan, basil and pine nuts.','Serve within 20 minutes — the salt wilts it beautifully.'],
   tip:'A mandoline makes paper-thin slices effortless. If you do not have one, a peeler works for ribbon-style carpaccio.'},
  {id:'rr_walnuttaco',  tier:'free', emoji:'🥬', name:'Walnut Taco Wraps',            kcal:185, costPP:28,
   howItFeels:'Earthy, spiced, crunchy — the raw meal that tricks meat eaters.',
   shopping:[{n:'Walnuts (raw)',pp:80,u:'g'},{n:'Iceberg or cos lettuce leaves',pp:4,u:''},{n:'Tomato (diced)',pp:60,u:'g'},{n:'Avocado (diced)',pp:60,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Smoked paprika',pp:1,u:'g'},{n:'Lime juice',pp:10,u:'ml'},{n:'Fresh coriander',pp:5,u:'g'}],
   method:['Pulse walnuts in a food processor until crumbly — NOT smooth. Should look like mince.','Add cumin, paprika, lime juice and salt. Pulse 3 more times.','Fill lettuce leaves with walnut mixture.','Top with tomato, avocado and fresh coriander. Serve immediately.'],
   tip:'Do NOT over-process the walnuts — you want chunky crumble, not walnut paste. Pulse in 1-second bursts.'},
  {id:'rr_zucpesto',    tier:'plus', emoji:'🍃', name:'Zucchini & Basil Pesto Noodles', kcal:210, costPP:32,
   howItFeels:'Light, herby and surprisingly filling — pasta — healthier Italian cousin.',
   shopping:[{n:'Baby marrow/zucchini (spiralised)',pp:300,u:'g'},{n:'Fresh basil leaves',pp:15,u:'g'},{n:'Pine nuts',pp:20,u:'g'},{n:'Parmesan (grated)',pp:20,u:'g'},{n:'Garlic clove',pp:1,u:''},{n:'Olive oil',pp:30,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Spiralise or peel zucchini into noodles. Sprinkle with salt. Leave 10 min. Squeeze dry.','Blend basil, pine nuts, parmesan, garlic and olive oil until smooth pesto.','Toss zucchini noodles in pesto.','Serve immediately — top with extra parmesan and pine nuts.'],
   tip:'Squeezing moisture from the salted zucchini is essential — otherwise watery pesto soup instead of noodles.'},
  {id:'rr_greenwrap',   tier:'free', emoji:'🥦', name:'Green-Energy Veggie Wrap',      kcal:160, costPP:22,
   howItFeels:'Crunchy, colourful and alive — the lunch that gives back instead of taking.',
   shopping:[{n:'Large collard green or cabbage leaf',pp:1,u:''},{n:'Hummus',pp:40,u:'g'},{n:'Carrot (julienned)',pp:60,u:'g'},{n:'Cucumber (julienned)',pp:60,u:'g'},{n:'Avocado (sliced)',pp:40,u:'g'},{n:'Red pepper (sliced)',pp:40,u:'g'},{n:'Sprouts or microgreens',pp:15,u:'g'}],
   method:['Blanch collard leaf 30 sec in boiling water to make it pliable. Cool immediately.','Spread hummus down the centre.','Pile on all vegetables and sprouts.','Roll tightly like a burrito. Slice in half. Secure with a toothpick.'],
   tip:'If using a large cabbage leaf, it does not need blanching. Crunch is part of the appeal.'},
  {id:'rr_medrrolls',   tier:'plus', emoji:'🌀', name:'Mediterranean Zucchini Rolls', kcal:140, costPP:26,
   howItFeels:'Elegant finger food that happens to be completely raw and incredibly good.',
   shopping:[{n:'Baby marrow/zucchini (thinly sliced lengthways)',pp:200,u:'g'},{n:'Cream cheese or cashew cheese',pp:60,u:'g'},{n:'Sundried tomatoes (chopped)',pp:20,u:'g'},{n:'Fresh basil',pp:8,u:'g'},{n:'Kalamata olives (halved)',pp:20,u:'g'},{n:'Pine nuts',pp:10,u:'g'}],
   method:['Use a peeler or mandoline to get long thin zucchini ribbons.','Mix cream cheese, sundried tomatoes and basil.','Spread a teaspoon of cheese mixture on each ribbon.','Roll up and secure with a toothpick. Top with an olive.','Arrange on a platter. Refrigerate until serving.'],
   tip:'These look stunning on a platter and disappear quickly. Make 30% more than you think you need.'},
  {id:'rr_chocavomousse',tier:'plus',emoji:'🍫', name:'Raw Choc Avocado Mousse Cake', kcal:320, costPP:38,
   howItFeels:'Silky dark chocolate that you cannot believe has no dairy, no baking and no guilt.',
   shopping:[{n:'Medjool dates (pitted)',pp:60,u:'g'},{n:'Mixed nuts (cashews, almonds)',pp:50,u:'g'},{n:'Raw cacao powder',pp:10,u:'g'},{n:'Ripe avocado',pp:100,u:'g'},{n:'Coconut cream',pp:60,u:'ml'},{n:'Honey or maple syrup',pp:20,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'}],
   method:['BASE: Blend dates, nuts and 5g cacao until sticky. Press into a tin or glasses.','MOUSSE: Blend avocado, remaining cacao, coconut cream, honey and vanilla until silky smooth.','Spoon mousse over base. Smooth the top.','Refrigerate minimum 2 hours. Dust with cacao to serve.'],
   tip:'You genuinely cannot taste the avocado. Creates the creamiest chocolate mousse texture. Use perfectly ripe avocados.'},
  {id:'rr_datecoconut',  tier:'free', emoji:'🟫', name:'Date & Coconut Squares',       kcal:165, costPP:16,
   howItFeels:'Sticky, sweet and intensely satisfying — nature answering the chocolate bar craving.',
   shopping:[{n:'Medjool dates (pitted)',pp:25,u:'g'},{n:'Shredded coconut (unsweetened)',pp:12,u:'g'},{n:'Walnuts or almonds',pp:8,u:'g'},{n:'Vanilla extract',pp:0.5,u:'ml'},{n:'Coconut oil (melted)',pp:2,u:'ml'},{n:'Sea salt',pp:0.1,u:'g'}],
   method:['Process walnuts, half the coconut, vanilla, salt and coconut oil until fine meal.','Add dates and pulse until mixture sticks together when squeezed.','Line a square dish with parchment. Press mixture firmly into an even layer.','Sprinkle remaining coconut on top and press down gently.','Refrigerate at least 1 hour before slicing into 12 squares.'],
   tip:'Lightly toast the coconut topping in a dry pan for 2 min before using — it adds a nutty golden aroma. Medjool dates are essential — regular dates are too dry.'},
  {id:'rr_tomatocarpaccio',tier:'free',emoji:'🍅',name:'Tomato & Butternut Carpaccio',kcal:105, costPP:18,
   howItFeels:'Summer on a plate — raw butternut is sweet and tender, tomatoes are vivid.',
   shopping:[{n:'Heirloom or large ripe tomatoes (thinly sliced)',pp:150,u:'g'},{n:'Raw butternut (very thinly sliced with peeler)',pp:100,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Balsamic glaze',pp:10,u:'ml'},{n:'Fresh basil',pp:8,u:'g'},{n:'Sea salt flakes',pp:1,u:'pinch'}],
   method:['Use a peeler to shave paper-thin butternut ribbons.','Arrange tomato slices on a plate. Weave butternut ribbons between them.','Drizzle generously with olive oil and balsamic glaze.','Scatter basil leaves. Finish with sea salt flakes.','Serve within 20 minutes.'],
   tip:'Raw butternut is nutty and sweet when shaved thin — a revelation for anyone who has only had it cooked.'},
  {id:'rr_mangoslaw',    tier:'free', emoji:'🥭', name:'Mango Purple Cabbage Slaw',   kcal:105, costPP:22,
   howItFeels:'Vibrant, crunchy and alive — the slaw that outshines every cooked side dish.',
   shopping:[{n:'Purple cabbage (shredded)',pp:80,u:'g'},{n:'Mango (diced)',pp:50,u:'g'},{n:'Carrot (grated)',pp:30,u:'g'},{n:'Fresh lime juice',pp:10,u:'ml'},{n:'Sesame oil',pp:5,u:'ml'},{n:'Fresh ginger (grated)',pp:2,u:'g'},{n:'Fresh coriander (chopped)',pp:5,u:'g'},{n:'Sea salt',pp:0.2,u:'g'}],
   method:['Thinly shred purple cabbage. Dice mango into small cubes. Grate carrot and ginger.','Whisk lime juice, sesame oil, ginger and salt into a dressing.','Combine cabbage, mango and carrot in a bowl. Pour dressing over.','Fold in fresh coriander just before serving.','Let sit 10 min for flavours to meld before eating.'],
   tip:'Best eaten within 1 hour of dressing — store dressing and veg separately if prepping ahead. Goes perfectly with Walnut Taco Wraps.'},
  {id:'rr_rawghetti',    tier:'plus', emoji:'🍝', name:'Raw-Ghetti Marinara Bowl',      kcal:175, costPP:24,
   howItFeels:'All the marinara pleasure, none of the pasta guilt — bright tomato and fresh basil.',
   shopping:[{n:'Baby marrow/zucchini (spiralised)',pp:200,u:'g'},{n:'Ripe tomatoes (blended)',pp:150,u:'g'},{n:'Sun-dried tomatoes (soaked, chopped)',pp:20,u:'g'},{n:'Medjool date (1, pitted)',pp:15,u:'g'},{n:'Garlic clove (minced)',pp:1,u:''},{n:'Fresh basil',pp:10,u:'g'},{n:'Olive oil',pp:15,u:'ml'}],
   method:['Blend fresh tomatoes, sun-dried tomatoes, date, garlic and olive oil until smooth.','Spiralise zucchini. Salt and leave 10 min. Squeeze dry.','Toss zucchini with marinara sauce.','Top generously with fresh basil. Serve immediately.'],
   tip:'The date in the marinara is the secret — it cuts the acidity and gives depth without any cooking.'},
];

const SEED_CRACKERS = [
  {id:'everything-seed-crackers', tier:'free', emoji:'🍘', name:'Everything Seed Crackers', kcal:180, costPP:29,
   feel:'Crisp and grounding, like a simple snack after a long day.',
   badges:['🌱 Vegan','🌾 Seed-based','✨ Gluten-Free'],
   base300:[{n:'sunflower seeds',pp:60,u:'g'},{n:'pumpkin seeds',pp:40,u:'g'},{n:'flaxseed',pp:30,u:'g'},{n:'sesame seeds',pp:20,u:'g'},{n:'water',pp:150,u:'ml'},{n:'salt',pp:2,u:'g'}],
   method:['Mix all the seeds with the water and salt; let it sit until thick and binding.','Spread thinly on a lined tray.','Bake low until dry and crisp; cool and snap into shards.'],
   tip:'Spread as thin as possible for the best crunch.'},
  {id:'flaxseed-crackers', tier:'free', emoji:'🍘', name:'Flaxseed Crackers', kcal:160, costPP:14,
   feel:'Light and clean, with a quiet crunch that settles you.',
   badges:['🌱 Vegan','🌾 High-Fibre','✨ Gluten-Free'],
   base300:[{n:'flaxseed',pp:100,u:'g'},{n:'water',pp:200,u:'ml'},{n:'salt',pp:2,u:'g'}],
   method:['Combine the flaxseed with the water and salt; rest until thick and gel-like.','Spread thinly and evenly.','Bake slowly until fully dry and crisp; break into pieces once cooled.'],
   tip:'Score lightly before baking for neater shapes.'},
  {id:'sunflower-pumpkin-crackers', tier:'free', emoji:'🍘', name:'Sunflower Pumpkin Crackers', kcal:190, costPP:31,
   feel:'Hearty and satisfying, like a small, steady bite between meals.',
   badges:['🌱 Vegan','🌾 Seed-based','💪 Filling'],
   base300:[{n:'sunflower seeds',pp:80,u:'g'},{n:'pumpkin seeds',pp:80,u:'g'},{n:'water',pp:140,u:'ml'},{n:'salt',pp:2,u:'g'}],
   method:['Mix the seeds with the water and salt; soak until slightly sticky.','Spread thin.','Bake gently until golden and crisp; cool before snapping.'],
   tip:'Press firmly when spreading for an even layer.'},
  {id:'sesame-crackers', tier:'free', emoji:'🍘', name:'Sesame Crackers', kcal:170, costPP:29,
   feel:'Nutty and delicate, with a gentle toasted finish.',
   badges:['🌱 Vegan','🌾 Seed-based','✨ Crispy'],
   base300:[{n:'sesame seeds',pp:120,u:'g'},{n:'water',pp:140,u:'ml'},{n:'salt',pp:2,u:'g'}],
   method:['Stir the sesame seeds with the water and salt; rest briefly.','Spread very thin.','Bake until crisp and lightly golden; cool before breaking.'],
   tip:'Watch closely near the end so they do not over-brown.'},
];

const FROZEN_YOGHURT = [
  {id:'berry-frozen-yoghurt-bark', tier:'free', emoji:'🍦', name:'Berry Frozen Yoghurt Bark', kcal:180, costPP:23,
   feel:'Cold and refreshing, like a small pause in the middle of a warm day.',
   badges:['🥛 Vegetarian','🫐 Fruit','❄️ Frozen'],
   base300:[{n:'plain yoghurt',pp:200,u:'g'},{n:'frozen berries',pp:80,u:'g'},{n:'honey',pp:15,u:'ml'}],
   method:['Spread the yoghurt onto a lined tray.','Scatter the berries over and drizzle with honey.','Freeze until firm, then break into pieces.'],
   tip:'Keep it thin for easy snapping.'},
  {id:'banana-honey-froyo', tier:'free', emoji:'🍦', name:'Banana Honey Frozen Yoghurt', kcal:200, costPP:21,
   feel:'Creamy and calm, like a quiet treat at the end of the day.',
   badges:['🥛 Vegetarian','🍌 Fruit','❄️ Frozen'],
   base300:[{n:'Greek yoghurt',pp:200,u:'g'},{n:'banana',pp:1,u:''},{n:'honey',pp:15,u:'ml'}],
   method:['Blend the yoghurt, banana and honey until smooth.','Freeze, stirring occasionally for a softer texture.'],
   tip:'Stir every hour for a smoother scoop.'},
  {id:'mango-frozen-yoghurt', tier:'free', emoji:'🍦', name:'Mango Frozen Yoghurt', kcal:190, costPP:15,
   feel:'Soft and tropical, like something simple enjoyed slowly.',
   badges:['🥛 Vegetarian','🥭 Fruit','❄️ Frozen'],
   base300:[{n:'plain yoghurt',pp:200,u:'g'},{n:'mango',pp:100,u:'g'},{n:'honey',pp:15,u:'ml'}],
   method:['Blend all the ingredients until smooth.','Freeze until scoopable, stirring once or twice.'],
   tip:'Use ripe mango for the best flavour.'},
  {id:'granadilla-swirl-froyo', tier:'free', emoji:'🍦', name:'Granadilla Swirl Frozen Yoghurt', kcal:170, costPP:31,
   feel:'Light and tangy, like a cool spoonful on a warm afternoon.',
   badges:['🥛 Vegetarian','🌺 Fruit','❄️ Frozen'],
   base300:[{n:'plain yoghurt',pp:200,u:'g'},{n:'granadilla',pp:2,u:''},{n:'honey',pp:15,u:'ml'}],
   method:['Blend the yoghurt with the honey.','Swirl through the granadilla pulp.','Freeze until set but still scoopable.'],
   tip:'Swirl lightly to keep the ripple visible.'},
];

// ── UNIVERSAL OPENER WIRING (Standard §8 spine) ──────────────────
// One finder across every health sub-type → {item, type, cat}. The
// inner `x &&` guards array holes so a stray comma can never crash it.
function healthFind(id){
  var reg = [
    ['juice','freshjuice', typeof FRESH_JUICES!=='undefined'?FRESH_JUICES:[]],
    ['smoothie','smoothie', typeof SMOOTHIES!=='undefined'?SMOOTHIES:[]],
    ['oats','oats', typeof OVERNIGHT_OATS!=='undefined'?OVERNIGHT_OATS:[]],
    ['muffin','muffin', typeof HEALTHY_MUFFINS!=='undefined'?HEALTHY_MUFFINS:[]],
    ['raw','raw', typeof RAW_AND_REAL!=='undefined'?RAW_AND_REAL:[]],
    ['health','health', typeof KETO_RECIPES!=='undefined'?KETO_RECIPES:[]],
    ['health','health', typeof WEIGHTLOSS_RECIPES!=='undefined'?WEIGHTLOSS_RECIPES:[]],
    ['health','health', typeof HIGHPROTEIN_RECIPES!=='undefined'?HIGHPROTEIN_RECIPES:[]],
    ['health','health', typeof PLANTBASED_RECIPES!=='undefined'?PLANTBASED_RECIPES:[]],
    ['health','health', typeof VEGETARIAN_RECIPES!=='undefined'?VEGETARIAN_RECIPES:[]],
    ['health','health', typeof GUTHEALTH_RECIPES!=='undefined'?GUTHEALTH_RECIPES:[]],
    ['health','health', typeof DIABETIC_RECIPES!=='undefined'?DIABETIC_RECIPES:[]],
    ['health','health', typeof ANTIINFLAM_RECIPES!=='undefined'?ANTIINFLAM_RECIPES:[]],
    ['health','health', typeof IMMUNITY_RECIPES!=='undefined'?IMMUNITY_RECIPES:[]],
    ['health','health', typeof FERMENTED_RECIPES!=='undefined'?FERMENTED_RECIPES:[]],
    ['health','health', typeof SEED_CRACKERS!=='undefined'?SEED_CRACKERS:[]],
    ['health','health', typeof FROZEN_YOGHURT!=='undefined'?FROZEN_YOGHURT:[]]
  ];
  for(var k=0;k<reg.length;k++){
    var arr = reg[k][2];
    for(var i=0;i<arr.length;i++){ var x=arr[i]; if(x && x.id===id) return {item:x, type:reg[k][0], cat:reg[k][1]}; }
  }
  return null;
}

function healthOpenJuice(id){ openRecipe('health', id); }
function healthOpenSmoothie(id){ openRecipe('health', id); }
function healthOpenOats(id){ openRecipe('health', id); }
function healthOpenMuffin(id){ openRecipe('health', id); }
function healthOpenRaw(id){ openRecipe('health', id); }

/* ── HEALTH RECIPE → shared recipePage opts (Standard §4b) ──
   One builder for every health sub-type. Feeds the shared shells
   (sectionHeader photo 200px · qtyBox · ingredientsBox · methodBox ·
   goesWellBox · recipeActions · recipeNav) — no bespoke chrome. */
function healthRecipeOpts(recipe){
  if(!recipe) return { name:'Recipe not found', backJs:'closeRecipe()', backLabel:'← Back',
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" } };
  var srv = S.servings||1;
  var found = (typeof healthFind==='function') ? healthFind(recipe.id) : null;
  var rtype = (found && found.type) || recipe.cat || recipe.type || 'health';
  var inPlan = (S.healthPlan||[]).some(function(x){return x.id===recipe.id;});
  var ings = recipe.base300 || recipe.shopping || [];

  function fmt(v,u){
    if(u==='pinch') return 'pinch';
    var r = Math.round(v*10)/10;
    if(u==='g' && r>=1000) return (r/1000).toFixed(1)+'kg';
    if(u==='ml' && r>=1000) return (r/1000).toFixed(1)+'L';
    return r+(u||'');
  }
  var ingRows = ings.map(function(i){
    if(!i||!i.n) return '';
    var pp=i.pp||0, amt;
    if(i.u==='pinch'){ amt='pinch'; }
    else if(!pp){ amt=''; }
    else if(srv===1){ amt=fmt(pp,i.u); }
    else { amt='<span style="color:#e0d4b8;font-weight:normal;font-size:13px;">'+fmt(pp,i.u)+' pp \u00b7 </span>'+fmt(pp*srv,i.u); }
    return ingredientRow(i.n, amt, '');
  }).join('');
  var ingredientsHTML = ingredientsBox(ingRows || '<div style="color:#e0d4b8;font-size:14px;">No ingredients listed.</div>', srv);

  // green qty box food cost — costPP if present, else summed from PRICE_DB (hcLineCost)
  var cpp=null, ctot=null;
  if(recipe.costPP){ cpp=recipe.costPP; ctot=recipe.costPP*srv; }
  else if(typeof hcLineCost==='function'){
    var t=0,m=0; ings.forEach(function(i){ if(!i||!i.n||!i.pp) return; var c=hcLineCost(i.n, Math.round((i.pp||0)*srv*10)/10, i.u); if(c!=null){ t+=c; m++; } });
    if(m>0){ ctot=Math.round(t); cpp=srv>0?Math.round(ctot/srv):ctot; }
  }
  var costInfo = (cpp!=null)
    ? '\uD83D\uDCB0 Food cost: <b style="color:#c8e840;">R'+cpp+'</b> pp \u00b7 <b style="color:#c8e840;">R'+ctot.toLocaleString()+'</b> total'
      + '<div style="font-size:12px;color:#7a8d4a;margin-top:5px;line-height:1.45;">This food cost is for costing only \u2014 it\u2019s not the same as the cost at the grocery store.</div>'
    : '';
  var qtyHTML = qtyBox({
    label:'How Much To Make', total: srv+' '+(srv===1?'serving':'servings'),
    ppLine: recipe.kcal ? (recipe.kcal+' kcal per person') : '',
    n: srv, info: costInfo,
    decJs:"set({servings:Math.max(1,(S.servings||1)-1)})",
    incJs:"set({servings:Math.min(50,(S.servings||1)+1)})"
  });

  var steps = recipe.method || [];
  var stepsHTML = steps.map(function(s,si){ return methodStep(si, String(s), hcStepTimer(s)); }).join('');
  var methodHTML = steps.length ? methodBox(stepsHTML, "set({healthCooking:{id:'"+recipe.id+"',step:0}});window.scrollTo(0,0);") : '';

  var notesHTML = (recipe.badges && recipe.badges.length)
    ? recipeBox('', '<div style="display:flex;flex-wrap:wrap;gap:6px;">'+recipe.badges.map(function(b){return '<span style="background:#2a1a10;border:1px solid #3a2010;border-radius:20px;padding:4px 10px;font-size:13px;color:#c06020;">'+b+'</span>';}).join('')+'</div>')
    : '';

  var extrasHTML = recipe.tip ? recipeBox('\uD83D\uDCA1 Tip', '<div style="font-size:16px;color:#f0ebe1;line-height:1.6;">'+recipe.tip+'</div>') : '';

  var g = recipe.goesWith || recipe.pairsWith;
  var gww = !g ? [] : (Array.isArray(g)? g.slice() : String(g).split(/,|\band\b|&/i).map(function(x){return x.trim();}).filter(Boolean));

  var isSub = (rtype==='juice'||rtype==='smoothie'||rtype==='oats'||rtype==='muffin'||rtype==='raw');
  var addJs = isSub
    ? "healthToggleById('"+recipe.id+"','"+rtype+"',S.servings)"
    : "healthToggleExtById('"+recipe.id+"')";

  return {
    photoName: recipe.name, photoEmoji: recipe.emoji||'\uD83C\uDF3F',
    backJs:"closeRecipe()", backLabel:'\u2190 Back',
    name: recipe.name,
    sub: (recipe.feel||recipe.howItFeels||''),
    meta: { kcal: recipe.kcal },
    qtyHTML: qtyHTML,
    ingredientsHTML: ingredientsHTML,
    notesHTML: notesHTML,
    methodHTML: methodHTML,
    goesWith: gww,
    extrasHTML: extrasHTML,
    actions: { addJs: addJs, inPlan: inPlan },
    nav: { backJs:"closeRecipe()", planJs:"closeRecipe({healthShowPlan:true})", planCount:(S.healthPlan||[]).length, homeJs:"closeRecipe({screen:'home'})" }
  };
}

// register Health on the universal opener — reachable/cross-linkable from any section
if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.health = function(id){ var f=(typeof healthFind==='function')?healthFind(id):null; return f?f.item:null; };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.health = function(item, recipe, vr){ return healthRecipeOpts(item); };
}

function healthTogglePlan(id, name, emoji, type, kcal, shopping, servings){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  set({healthPlan: inPlan ? plan.filter(x=>x.id!==id) : [...plan, {id,name,emoji,type,kcal,shopping:shopping||[],servings}]});
}

function healthCheckbox(id, type){
  const inPlan = (S.healthPlan||[]).some(x=>x.id===id);
  const bg = inPlan ? '#c06020' : 'transparent';
  const br = inPlan ? '#c06020' : '#3a2010';
  const tick = inPlan ? '&#x2713;' : '';
  return '<div onclick="healthToggleById(\''+id+'\',\''+type+'\',S.servings)" style="width:24px;height:24px;border-radius:6px;background:'+bg+';border:2px solid '+br+';display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;color:#f5e8cc;">'+tick+'</div>';
}

function healthToggleById(id, type, servings){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  if(inPlan){ set({healthPlan:plan.filter(x=>x.id!==id)}); return; }
  let item;
  if(type==='juice') item = (typeof FRESH_JUICES!=='undefined'?FRESH_JUICES:[]).find(x=>x.id===id);
  else if(type==='smoothie') item = (typeof SMOOTHIES!=='undefined'?SMOOTHIES:[]).find(x=>x.id===id);
  else if(type==='oats') item = (typeof OVERNIGHT_OATS!=='undefined'?OVERNIGHT_OATS:[]).find(x=>x.id===id);
  else if(type==='muffin') item = (typeof HEALTHY_MUFFINS!=='undefined'?HEALTHY_MUFFINS:[]).find(x=>x.id===id);
  else if(type==='raw') item = (typeof RAW_AND_REAL!=='undefined'?RAW_AND_REAL:[]).find(x=>x.id===id);
  if(!item) return;
  set({healthPlan:[...plan,{id,name:item.name,emoji:item.emoji,type,kcal:item.kcal,shopping:item.shopping||item.base300||[],servings}]});
}

function healthToggleExtById(id){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  if(inPlan){ set({healthPlan:plan.filter(x=>x.id!==id)}); return; }
  const allExt = [
    ...(typeof KETO_RECIPES!=='undefined'?KETO_RECIPES:[]),
    ...(typeof WEIGHTLOSS_RECIPES!=='undefined'?WEIGHTLOSS_RECIPES:[]),
    ...(typeof HIGHPROTEIN_RECIPES!=='undefined'?HIGHPROTEIN_RECIPES:[]),
    ...(typeof PLANTBASED_RECIPES!=='undefined'?PLANTBASED_RECIPES:[]),
    ...(typeof VEGETARIAN_RECIPES!=='undefined'?VEGETARIAN_RECIPES:[]),
    ...(typeof GUTHEALTH_RECIPES!=='undefined'?GUTHEALTH_RECIPES:[]),
    ...(typeof DIABETIC_RECIPES!=='undefined'?DIABETIC_RECIPES:[]),
    ...(typeof ANTIINFLAM_RECIPES!=='undefined'?ANTIINFLAM_RECIPES:[]),
    ...(typeof IMMUNITY_RECIPES!=='undefined'?IMMUNITY_RECIPES:[]),
  ];
  const item = allExt.find(x=>x.id===id);
  if(!item) return;
  const srv = S.servings||1;
  set({healthPlan:[...plan,{id,name:item.name,emoji:item.emoji,type:'health',kcal:item.kcal,shopping:item.base300||[],servings:srv}]});
}

function renderHealthList(items, type, openFn, isPro){
  return items.map(function(item){
    var canView = tierAllows(item.tier||'free');
    var sel = (S.healthPlan||[]).some(function(x){return x.id===item.id;});
    var disabled = !canView;
    var srv = S.servings||1;
    var info = type==='juice' ? (item.kcal*srv)+' kcal · '+(srv*300)+'ml'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='smoothie' ? (item.kcal*srv)+' kcal'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='oats' ? (item.kcal*srv)+' kcal'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='muffin' ? item.kcal+' kcal each · '+(srv*(item.makes||12))+' muffins'
      : (item.kcal*srv)+' kcal';
    var cardBg   = sel ? '#1a1208' : disabled ? '#120810' : '#161210';
    var cardBdr  = sel ? '#c06020' : disabled ? '#2a1020' : '#3a2010';
    var cbBg     = sel ? '#c06020' : 'transparent';
    var cbBdr    = sel ? '#c06020' : '#8a6a48';
    var nameCl   = sel ? '#f5e8cc' : '#e0d4b8';
    var infoCl   = sel ? '#f5c842' : '#c06020';
    var onclk = disabled
      ? "alert('👑 Upgrade to Pro to unlock')"
      : 'healthToggleById(\''+item.id+'\',\''+type+'\',S.servings)';
    var recipeBtn = disabled
      ? '<span style="font-size:13px;background:#161210;border:1px solid #2a7058;border-radius:6px;color:#e0d4b8;padding:3px 7px;">👑 PRO</span>'
      : '<button onclick="event.stopPropagation();'+openFn+'(\''+item.id+'\')" style="background:#1a1208;border:1px solid #c06020;border-radius:6px;padding:5px 10px;font-size:13px;color:#f5c842;cursor:pointer;white-space:nowrap;font-family:Georgia,serif;">Recipe →</button>';
    return '<div style="background:'+cardBg+';border:1px solid '+cardBdr+';border-radius:10px;padding:14px;margin-bottom:8px;opacity:'+(disabled?0.5:1)+';">'
      +'<div style="display:flex;align-items:flex-start;gap:12px;cursor:'+(disabled?'not-allowed':'pointer')+'" onclick="'+onclk+'">'
      +'<div style="width:22px;height:22px;border-radius:6px;background:'+cbBg+';border:2px solid '+cbBdr+';display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#f5e8cc;">'+(sel?'✓':'')+'</div>'
      +'<span style="font-size:20px;flex-shrink:0;line-height:1.35;">'+item.emoji+'</span>'
      +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:16px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;line-height:1.35;">'+item.name+'</div>'
        +(item.howItFeels?'<div style="font-size:14px;color:#e0d4b8;margin-top:4px;line-height:1.4;">'+item.howItFeels+'</div>':'')
        +'<div style="font-size:13px;color:#e0d4b8;margin-top:4px;">'+info+'</div>'
      +'</div>'
      +'<div style="display:flex;align-items:center;flex-shrink:0;align-self:center;">'+recipeBtn+'</div>'
      +'</div></div>';
  }).join('');
}

function healthSharePlan(){
  var plan = S.healthPlan||[];
  var txt = plan.map(function(i){return i.emoji+' '+i.name+' ('+i.servings+' serving'+(i.servings!==1?'s':'')+')';}).join('\n');
  window.open('https://wa.me/?text='+encodeURIComponent('📋 *My Health Plan*\n\n'+txt+'\n\nFrom Tinza tinza.netlify.app'),'_blank');
}
function healthShareShoppingList(){
  var plan = S.healthPlan||[];
  var map = {};
  plan.forEach(function(item){
    (item.shopping||[]).forEach(function(ing){
      if(!ing||!ing.n||!ing.pp) return;
      var k = ing.n.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,20);
      var t = Math.round((ing.pp||0)*(item.servings||1)*10)/10;
      if(!map[k]){map[k]={n:ing.n,t:0,u:ing.u||''};}
      map[k].t += t;
    });
  });
  var lines = Object.values(map).map(function(i){
    var s = i.t>=1000&&i.u==='g'?(i.t/1000).toFixed(1)+'kg':i.t>=1000&&i.u==='ml'?(i.t/1000).toFixed(1)+'L':(Math.round(i.t*10)/10)+(i.u||'');
    return '• '+i.n+': '+s;
  }).join('\n');
  window.open('https://wa.me/?text='+encodeURIComponent('🛒 *Health Shopping List*\n\n'+lines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');
}

function healthRemoveFromPlan(id){
  set({healthPlan:(S.healthPlan||[]).filter(function(x){return x.id!==id;})});
}

function healthToggleShopItem(key){
  var c = Object.assign({},S.checkedHealthItems||{});
  c[key] = !c[key];
  set({checkedHealthItems:c});
}

// ── COSTING ───────────────────────────────────────────────────────
// Reuses the app's lookupPrice (R/kg for g·ml, R/kg·L for kg·l).
// Only weight/volume items are priced — count items (egg, tin, each,
// tbsp) are flagged "price needed" rather than mispriced. Same rule
// as kiddies.js, so totals stay consistent across the app.
function hcLineCost(name, raw, unit){
  if(!(raw>0)) return null;
  var p=null;
  try { p=(typeof lookupPrice==='function')?lookupPrice(name):null; } catch(e){ p=null; }
  if(p==null) return null;
  if(unit==='g'||unit==='ml') return (raw/1000)*p;
  if(unit==='kg'||unit==='l'||unit==='L') return raw*p;
  return null; // egg / '' / tin / tbsp etc → price needed
}

function renderHealthMyPlan(isPro){
  const plan = S.healthPlan||[];
  const checked = S.checkedHealthItems||{};
  if(plan.length===0){
    return '<div style="text-align:center;padding:40px 20px;">'
      +'<div style="font-size:40px;margin-bottom:16px;">📋</div>'
      +'<div style="font-size:16px;color:#f5c842;margin-bottom:8px;font-family:Georgia,serif;">Your Health Plan is empty</div>'
      +'<div style="font-size:13px;color:#e0d4b8;margin-bottom:20px;">Tap any recipe checkbox to add to your plan</div>'
      +'<button onclick="set({vitalCat:null,healthGroup:null})" style="padding:12px 24px;background:#161210;border:2px solid #c06020;border-radius:10px;color:#f5c842;font-size:14px;cursor:pointer;font-family:Georgia,serif;">← Browse Recipes</button>'
      +'</div>';
  }
  const shopMap = {};
  plan.forEach(function(item){
    (item.shopping||[]).forEach(function(ing){
      if(!ing||!ing.n) return;
      var skip = ['water','ice','salt','pepper'].some(function(w){return ing.n.toLowerCase().indexOf(w)>=0;});
      if(skip) return;
      var total = Math.round(((ing.pp||0) * (item.servings||1)) * 10)/10;
      if(!total) return;
      var key = ing.n.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,20);
      if(shopMap[key]){ shopMap[key].total += total; }
      else { shopMap[key] = {name:ing.n, total:total, unit:ing.u||'', source:item.name, key:key}; }
    });
  });
  var shopItems = Object.values(shopMap).sort(function(a,b){return a.name.localeCompare(b.name);});
  // cost each consolidated ingredient
  var planCostTotal=0, planCostMatched=0;
  shopItems.forEach(function(it){
    var c = hcLineCost(it.name, it.total, it.unit);
    it.cost = c;
    if(c!=null){ planCostTotal += c; planCostMatched++; }
  });
  planCostTotal = Math.round(planCostTotal);
  var planPeople = S.servings||1;
  var planCostPP = planPeople>0 ? Math.round(planCostTotal/planPeople) : planCostTotal;
  var planHtml = plan.map(function(item){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #1a1208;">'
      +'<div style="display:flex;align-items:center;gap:10px;">'
      +'<span style="font-size:20px;">'+item.emoji+'</span>'
      +'<div><div style="font-size:14px;color:#e0d4b8;font-family:Georgia,serif;">'+item.name+'</div>'
      +'<div style="font-size:13px;color:#f5c842;margin-top:2px;">'+(item.servings||1)+' serving'+((item.servings||1)!==1?'s':'')+' · '+item.type+'</div></div></div>'
      +'<button onclick="healthRemoveFromPlan(\''+item.id+'\')" style="background:#161210;border:1px solid #3a2010;border-radius:6px;padding:4px 10px;color:#c06020;font-size:13px;cursor:pointer;font-family:Georgia,serif;">Remove</button>'
      +'</div>';
  }).join('');
  var shopHtml = shopItems.length===0
    ? '<div style="color:#e0d4b8;font-size:13px;padding:8px 0;">Add recipes with ingredients to see your list</div>'
    : shopItems.map(function(item){
        var ck = checked['h_'+item.key] || false;
        var totalStr = item.total>=1000&&item.unit==='g'?(item.total/1000).toFixed(1)+'kg'
          :item.total>=1000&&item.unit==='ml'?(item.total/1000).toFixed(1)+'L'
          :Math.round(item.total*10)/10+(item.unit||'');
        return '<div onclick="healthToggleShopItem(&quot;h_'+item.key+'&quot;)" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #161210;cursor:pointer;opacity:'+(ck?0.35:1)+';">'
          +'<div style="width:20px;height:20px;border-radius:4px;border:2px solid '+(ck?'#c06020':'#3a2010')+';background:'+(ck?'#c06020':'transparent')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+(ck?'<span style="color:#f5e8cc;font-size:13px;">✓</span>':'')+'</div>'
          +'<div style="flex:1;"><div style="font-size:13px;color:'+(ck?'#2a1a10':'#e0d4b8')+';">'+item.name+'</div>'
          +'<div style="font-size:13px;color:#e0d4b8;">'+item.source+'</div></div>'
          +'<div style="text-align:right;flex-shrink:0;"><div style="font-size:13px;color:'+(ck?'#2a1a10':'#f5c842')+';font-weight:bold;">'+totalStr+'</div>'
          +(item.cost!=null?'<div style="font-size:13px;color:'+(ck?'#2a1a10':'#f5c842')+';">R'+Math.round(item.cost)+'</div>':'<div style="font-size:13px;color:#908241;">price needed</div>')
          +'</div>'
          +'</div>';
      }).join('');
  var kcalPerPerson = plan.reduce(function(sum,i){return sum+(i.kcal||0);},0);
  return '<div style="font-size:16px;color:#f5c842;font-weight:bold;margin-bottom:4px;font-family:Georgia,serif;">📋 My Health Plan</div>'
    +'<div style="font-size:13px;color:#e0d4b8;margin-bottom:14px;">'+plan.length+' recipe'+(plan.length!==1?'s':'')+' · '+(S.servings||1)+' person'+((S.servings||1)!==1?'s':'')+' · '+kcalPerPerson+' kcal/person</div>'
    +'<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">'+planHtml+'</div>'
    +(isPro
      ? '<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;"><div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:13px;color:#c06020;">🔥 Calories per person</div><div style="font-size:13px;color:#e0d4b8;margin-top:2px;">All selected dishes combined</div></div><div style="font-size:26px;color:#f5c842;font-weight:bold;">'+kcalPerPerson+'<span style="font-size:13px;"> kcal</span></div></div></div>'
      : '<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;"><div style="font-size:13px;color:#e0d4b8;">🔥 Calorie counter — <strong style="color:#f5c842;">Tinza Pro R99/month</strong></div></div>')
    +'<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">'
      +'<div style="font-size:13px;letter-spacing:2px;color:#e0d4b8;text-transform:uppercase;margin-bottom:8px;">💰 Cost Estimate</div>'
      +(isPro
        ? (planCostMatched>0
            ? '<div style="display:flex;justify-content:space-between;align-items:center;"><div style="font-size:13px;color:#e0d4b8;">Total for '+planPeople+' person'+(planPeople!==1?'s':'')+'</div><div style="font-size:24px;color:#f5c842;font-weight:bold;">R'+planCostTotal.toLocaleString()+'</div></div>'
                +'<div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:8px;border-top:1px solid #1a1208;"><div style="font-size:13px;color:#e0d4b8;">Per person</div><div style="font-size:16px;color:#f5c842;font-weight:bold;">R'+planCostPP+'</div></div>'
                +'<div style="font-size:13px;color:#e0d4b8;margin-top:8px;line-height:1.5;">'+planCostMatched+'/'+shopItems.length+' ingredients priced · SA&#39;s biggest retailers · Always buy 10% extra</div>'
            : '<div style="font-size:13px;color:#e0d4b8;font-style:italic;">No priced ingredients yet — add recipes with weighed ingredients to see a cost.</div>')
        : '<div style="font-size:13px;color:#e0d4b8;">💰 Cost totals — <strong style="color:#f5c842;">Tinza Pro R99/month</strong></div>')
    +'</div>'
    +'<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">'
      +'<div style="font-size:13px;color:#f5c842;font-weight:bold;margin-bottom:6px;">⚖️ How portions work</div>'
      +'<div style="font-size:13px;color:#e0d4b8;line-height:1.8;font-family:Georgia,serif;"><b style="color:#e0d4b8;">Drinks & smoothies</b> — fixed portion (200–300ml).<br><b style="color:#e0d4b8;">Muffins</b> — 1 muffin per person.<br><b style="color:#e0d4b8;">Meals & salads</b> — pizza rule: 1 dish = full plate. 2 = half each.<br><span style="color:#e0d4b8;font-size:13px;">Tip: plan 1 drink + 1–2 meals for a full day.</span></div>'
    +'</div>'
    +'<div style="font-size:13px;letter-spacing:2px;color:#f5c842;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List</div>'
    +(isPro
      ? '<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:13px;color:#e0d4b8;margin-bottom:8px;">Tap items you already have to tick them off</div>'+shopHtml+(shopItems.length>0?'<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a1208;display:flex;justify-content:space-between;"><span style="font-size:13px;color:#e0d4b8;">'+shopItems.filter(function(i){return !checked['h_'+i.key];}).length+' of '+shopItems.length+' items remaining</span><button onclick="set({checkedHealthItems:{}})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;text-decoration:underline;">Reset all</button></div>':'')+'</div>'
      : '<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;"><div style="font-size:32px;margin-bottom:8px;">🔒</div><div style="font-size:14px;color:#f5c842;font-weight:bold;margin-bottom:6px;font-family:Georgia,serif;">Full Shopping List</div><div style="font-size:13px;color:#e0d4b8;margin-bottom:10px;line-height:1.6;">All ingredients combined, no duplicates</div><div style="font-size:13px;color:#c06020;font-weight:bold;">Unlock with Tinza Pro — R99/month</div></div>')
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">'
    +'<button onclick="healthSharePlan()" style="padding:14px;border-radius:10px;border:2px solid #25d366;background:#1a1208;color:#25d366;font-size:13px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;line-height:1.4;">📲 Share Plan<br><span style="font-size:13px;opacity:0.7;">🆓 Free</span></button>'
    +(isPro
      ? '<button onclick="healthShareShoppingList()" style="padding:14px;border-radius:10px;border:2px solid #25d366;background:#1a1208;color:#25d366;font-size:13px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;line-height:1.4;">📲 Share + Shopping List<br><span style="font-size:13px;opacity:0.7;">👑 Pro</span></button>'
      : '<button style="padding:14px;border-radius:10px;border:2px solid #1a1808;background:#0f0e0c;color:#b0936a;font-size:13px;cursor:not-allowed;line-height:1.4;">🔒 Full List<br><span style="font-size:13px;">👑 Pro only</span></button>')
    +'</div>'
    +(isPro
      ? '<button onclick="window.print()" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#181408;border:2px solid #c0a020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:10px;">🖨️ Print / Save as PDF <span style="font-size:13px;opacity:0.7;">👑 Pro</span></button>'
      : '<button style="width:100%;padding:13px;border-radius:10px;cursor:not-allowed;background:#0f0e0c;border:1px solid #1a1808;color:#b0936a;font-size:13px;margin-bottom:10px;">🔒 Print / Save as PDF — Pro only</button>')
    +'<button onclick="set({healthPlan:[],checkedHealthItems:{},healthShowPlan:false})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#1a1208;border:2px solid #c06020;color:#f5c842;font-size:13px;margin-bottom:10px;font-weight:bold;">🔄 Start a New Health Plan</button>'
    +'<button onclick="set({healthShowPlan:false})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#0f0e0c;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;margin-bottom:20px;">← Back to Browse</button>';
}

// ══════════════════════════════════════════════════════════════
// HEALTH RECIPE DETAIL — v33 template with photo header
// ══════════════════════════════════════════════════════════════
function healthImgUrl(name){
  // Shared recipe-photo path (Standard §5.5): Images/Image/ + accent-stripped name
  const base = 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image/';
  const clean = (typeof cleanPhotoName === 'function') ? cleanPhotoName(name) : String(name||'').trim();
  return base + encodeURIComponent(clean) + '.jpg';
}

function healthRecipeDetail(recipe, backState){
  if(!recipe) return '';
  const isPro = tierAllows('pro');
  const srv = S.servings||1;
  const inPlan = (S.healthPlan||[]).some(x=>x.id===recipe.id);
  const imgUrl = healthImgUrl(recipe.name);
  const _bs = backState||{activeSmoothie:null,activeOats:null,activeMuffin:null,activeRaw:null};
  const backBtn = Object.entries(_bs).map(([k,v])=>k+":"+JSON.stringify(v)).join(",");

  // Build ingredients scaled to servings
  const ings = (recipe.base300||recipe.shopping||[]);
  const ingsHTML = ings.map(i=>{
    if(!i||!i.n) return '';
    let amt = '';
    if(i.pp && i.u && i.u!=='pinch'){
      const total = Math.round(i.pp * srv * 10)/10;
      amt = total>=1000&&i.u==='g'?`${(total/1000).toFixed(1)}kg`:
            total>=1000&&i.u==='ml'?`${(total/1000).toFixed(1)}L`:
            `${total}${i.u}`;
    } else if(i.pp && !i.u){
      amt = `${Math.round(i.pp*srv)}`;
    } else if(i.u==='pinch'){
      amt = 'pinch';
    }
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #2a1a10;font-size:13px;">
      <span style="color:#e0d4b8;">${i.n}</span>
      <span style="color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${amt}</span>
    </div>`;
  }).join('');

  // Method steps
  const steps = recipe.method||[];
  const stepsHTML = steps.map((step,i)=>`
    <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #2a1a10;">
      <div style="flex-shrink:0;width:26px;height:26px;border-radius:50%;background:#2a1808;border:1px solid #c06020;display:flex;align-items:center;justify-content:center;font-size:13px;color:#f5c842;font-weight:bold;">${i+1}</div>
      <div style="font-size:13px;color:#e0d4b8;line-height:1.6;padding-top:4px;">${step}${hcStepTimer(step)?`<div style="margin-top:6px;"><span style="display:inline-block;background:#2a1808;border:1px solid #c06020;border-radius:6px;color:#f5c842;font-size:13px;padding:3px 9px;">${hcStepTimer(step)}</span></div>`:''}</div>
    </div>`).join('');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <!-- Photo header -->
    <div style="position:relative;height:220px;overflow:hidden;background:#161210;">
      <img src="${imgUrl}"
           onerror="this.style.display='none';var ns=this.nextElementSibling;if(ns)ns.style.display='flex';"
           style="width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:0;">
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:6px;background:#161210;z-index:0;">
        <span style="font-size:48px;">${recipe.emoji||'🌿'}</span>
        <span style="font-size:13px;color:#c06020;">📷 Photo coming soon</span>
      </div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.2) 0%,rgba(10,4,14,0.85) 100%);z-index:1;pointer-events:none;"></div>
      <button onclick="set({${backBtn}})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.5);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← Back</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
        <div style="font-size:28px;margin-bottom:4px;">${recipe.emoji||'🌿'}</div>
        <h1 style="margin:0 0 4px;font-size:20px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">${recipe.name}</h1>
        ${recipe.feel?`<p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;line-height:1.4;">${recipe.feel}</p>`:''}
      </div>
    </div>

    <!-- Badges -->
    ${(recipe.badges||[]).length?`
    <div style="padding:12px 16px 0;display:flex;flex-wrap:wrap;gap:6px;">
      ${(recipe.badges||[]).map(b=>`<span style="background:#2a1a10;border:1px solid #3a2010;border-radius:20px;padding:4px 10px;font-size:13px;color:#c06020;">${b}</span>`).join('')}
    </div>`:``}

    <!-- Quantity box -->
    <div style="margin:12px 16px 0;background:#1a1208;border:1px solid #c06020;border-radius:12px;padding:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-size:13px;color:#e0d4b8;letter-spacing:1px;text-transform:uppercase;">Serving${srv!==1?'s':''}</div>
          <div style="font-size:26px;color:#f5c842;font-weight:bold;line-height:1;">${srv} person${srv!==1?'s':''}</div>
          ${recipe.kcal?`<div style="font-size:13px;color:#c06020;margin-top:2px;">${recipe.kcal*srv} kcal total</div>`:''}
          ${recipe.costPP?`<div style="font-size:13px;color:#e0d4b8;">~R${recipe.costPP*srv} total</div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button onclick="setQuiet({servings:Math.max(1,S.servings-1)})" style="width:36px;height:36px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#f5c842;font-size:20px;cursor:pointer;">−</button>
          <button onclick="setQuiet({servings:Math.min(50,S.servings+1)})" style="width:36px;height:36px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#f5c842;font-size:20px;cursor:pointer;">+</button>
        </div>
      </div>
    </div>

    <div style="padding:0 16px 100px;">
      <!-- Ingredients -->
      <div style="margin-top:16px;">
        <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">🛒 Ingredients — ${srv} person${srv!==1?'s':''}</div>
        <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:10px 14px;">
          ${ingsHTML||'<div style="color:#e0d4b8;font-size:13px;">No ingredients listed.</div>'}
        </div>
      </div>

      <!-- Method -->
      ${stepsHTML?`
      <div style="margin-top:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;gap:8px;">
          <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">👨‍🍳 Method</div>
          <button onclick="set({healthCooking:{step:0}});window.scrollTo(0,0);" style="background:#2a1808;border:1px solid #c06020;border-radius:8px;color:#f5c842;font-size:13px;padding:6px 12px;cursor:pointer;white-space:nowrap;">🍳 Start Cooking →</button>
        </div>
        <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:10px 14px;">
          ${stepsHTML}
        </div>
      </div>`:''}

      <!-- Tip -->
      ${recipe.tip?`
      <div style="margin-top:12px;background:#1a1208;border-left:3px solid #c06020;border-radius:0 8px 8px 0;padding:12px 14px;">
        <div style="font-size:13px;color:#c06020;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">💡 Tip</div>
        <div style="font-size:13px;color:#e0d4b8;line-height:1.5;">${recipe.tip}</div>
      </div>`:''}

      <!-- Cost estimate box -->
      <div style="margin-top:12px;background:#1a1a08;border:1px solid #3a2010;border-radius:10px;padding:14px;">
        <div style="font-size:13px;letter-spacing:2px;color:#8a8030;text-transform:uppercase;margin-bottom:8px;">💰 Cost Estimate</div>
        ${(function(){
          if(recipe.costPP) return `<div style="font-size:18px;color:#f5c842;font-weight:bold;">~R${Math.round(recipe.costPP*srv)} total (R${recipe.costPP}/pp)</div><div style="font-size:13px;color:#748932;margin-top:4px;">SA&#39;s biggest retailers · May 2026 · Buy 10% extra</div>`;
          let t=0, m=0, n=0;
          (ings||[]).forEach(function(i){ if(!i||!i.n||!i.pp) return; n++; const c=hcLineCost(i.n, Math.round((i.pp||0)*srv*10)/10, i.u); if(c!=null){ t+=c; m++; } });
          t=Math.round(t);
          if(m>0) return `<div style="font-size:18px;color:#f5c842;font-weight:bold;">~R${t} total (R${srv>0?Math.round(t/srv):t}/pp)</div><div style="font-size:13px;color:#748932;margin-top:4px;">${m}/${n} ingredients priced · SA&#39;s biggest retailers · Buy 10% extra</div>`;
          return `<div style="font-size:13px;color:#908241;font-style:italic;">Price estimate coming soon</div>`;
        })()}
      </div>

      <!-- Goes Well With -->
      ${(function(){
        var g = recipe.goesWith||recipe.pairsWith;
        if(!g) return '';
        var list = Array.isArray(g) ? g : String(g).split(/,|\band\b|&/i).map(function(x){return x.trim();}).filter(Boolean);
        if(!list.length) return '';
        return `<div style="margin-top:12px;background:#161210;border:1px solid #3a2010;border-radius:10px;padding:14px;">
          <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">❤ Goes Well With</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${list.slice(0,5).map(function(x){return '<span style="padding:5px 12px;border-radius:16px;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;">'+x+'</span>';}).join('')}</div>
        </div>`;
      })()}

      <!-- Actions (braai pattern) -->
      <div style="margin-top:20px;">
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <button onclick="healthToggleById('${recipe.id}','${recipe.cat||'health'}',S.servings)" style="flex:1;padding:12px 8px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:bold;${inPlan?'background:#1a1208;border:1px solid #f5c842;color:#f5c842;':'background:#c06020;border:1px solid #c06020;color:#100a04;'}">${inPlan?'✅ In Plan':'📋 Add to Plan'}</button>
          <button onclick="alert('Save to My Kitchen — coming soon')" style="flex:1;padding:12px 8px;border-radius:10px;background:#160f08;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;cursor:pointer;">💾 My Kitchen</button>
          <button onclick="alert('Download — coming soon')" style="flex:1;padding:12px 8px;border-radius:10px;background:#160f08;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;cursor:pointer;">⬇️ Download</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0 30px;border-top:1px solid #3a2010;font-size:13px;">
          <button onclick="set({${backBtn}})" style="background:none;border:none;color:#f5c842;cursor:pointer;">← Back</button>
          <button onclick="set({healthShowPlan:true})" style="background:none;border:none;color:#f5c842;cursor:pointer;">🛒 My Plan</button>
          <button onclick="set({screen:'home',activeSmoothie:null,activeOats:null,activeMuffin:null,activeRaw:null})" style="background:none;border:none;color:#e0d4b8;cursor:pointer;">Home</button>
        </div>
      </div>
    </div>
  </div>`;
}

function healthOpenExt(id, arrName, grp, tab){
  // universal opener: snapshot the group/tab we came from so Back returns there
  var rt = (typeof snapshotNav==='function') ? snapshotNav() : {};
  rt.screen='health'; rt.healthGroup=grp; rt.healthGroupTab=tab;
  openRecipe('health', id, {returnTo: rt});
}

// appearsIn feed-read: return the cross-section objects (e.g. Spice pastes)
// whose appearsIn list includes the target section. They render as ext cards
// (they carry emoji/name/kcal/costPP/feel); their canonical home is unchanged.
function wkAppearsIn(target){
  if(typeof SPICE_DB==='undefined') return [];
  return SPICE_DB.filter(function(x){ return x && x.appearsIn && x.appearsIn.indexOf(target)>-1; });
}

// Open a Spice recipe surfaced inside Health (Nut Butters tab), remembering the
// Health group/tab so Back returns here rather than to the Spice section.
function healthOpenSpice(id, grp, tab){
  var rt = (typeof snapshotNav==='function') ? snapshotNav() : {};
  rt.screen='health'; rt.healthGroup=grp||'prep'; rt.healthGroupTab=tab||'nutbutters';
  openRecipe('spice', id, {returnTo: rt});
}

// ── braai/World-parity helpers (timer pills, cooking mode, grid tiles) ──
function hcStepTimer(txt){
  txt = String(txt||'');
  var m = txt.match(/(\d+(?:\s*[\u2013-]\s*\d+)?)\s*(min(?:ute)?s?|hours?|hrs?)\b/i);
  if(m){ return '\u23f2 ' + m[1].replace(/\s+/g,'') + ' ' + (/h/i.test(m[2]) ? 'hr' : 'min'); }
  if(/overnight/i.test(txt)) return '\u23f2 overnight';
  return '';
}

function hcGridCard(emoji, label, sub, onclick, accent){
  var acc='#c06020', cream='#f5e8cc';
  var bg = accent ? '#1a1208' : '#161210';
  var bd = accent ? acc : '#3a2010';
  return '<div onclick="'+onclick+'" style="background:'+bg+';border:1px solid '+bd+';border-radius:14px;padding:14px 8px;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:96px;">'
    + '<div style="font-size:24px;margin-bottom:6px;line-height:1;">'+emoji+'</div>'
    + '<div style="font-size:16px;color:'+cream+';font-weight:bold;line-height:1.2;">'+label+'</div>'
    + (sub ? '<div style="font-size:14px;color:#e0d4b8;margin-top:4px;line-height:1.3;">'+sub+'</div>' : '')
    + '</div>';
}

// fullscreen step-by-step cooking mode (self-contained, health green)
function healthCookingView(recipe){
  var acc='#c06020', bright='#f5c842', cream='#f5e8cc';
  var c = S.healthCooking || {step:0};
  // Resolved at draw level with no arg → find the recipe from the saved id.
  if(!recipe && c.id && typeof healthFind==='function'){ var _f=healthFind(c.id); if(_f) recipe=_f.item; }
  var rid = (recipe && recipe.id) || c.id || '';
  var steps = (recipe && recipe.method) || [];
  if(!steps.length){
    return '<div style="min-height:100vh;background:#0f0e0c;padding:20px;color:#e0d4b8;">'
      + '<button onclick="set({healthCooking:null})" style="background:none;border:none;color:'+acc+';cursor:pointer;font-size:13px;">\u2715 Exit cooking mode</button>'
      + '<p style="margin-top:20px;">No method steps for this recipe yet.</p></div>';
  }
  var idx = Math.min(Math.max(0, c.step||0), steps.length-1);
  var step = String(steps[idx]||'');
  var tp = hcStepTimer(step);
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;
  return '<div style="min-height:100vh;background:#0f0e0c;display:flex;flex-direction:column;">'
    + '<div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:14px 16px;">'
    +   '<button onclick="set({healthCooking:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+acc+';font-size:13px;cursor:pointer;padding:0;">\u2715 Exit cooking mode</button>'
    +   '<div style="font-size:17px;color:'+cream+';margin-top:6px;font-weight:bold;">'+(recipe.emoji?recipe.emoji+' ':'')+recipe.name+'</div>'
    +   '<div style="font-size:13px;color:#e0d4b8;margin-top:2px;">Step '+(idx+1)+' of '+steps.length+'</div>'
    +   '<div style="height:5px;background:#0f0e0c;border-radius:3px;margin-top:10px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:'+acc+';"></div></div>'
    + '</div>'
    + '<div style="flex:1;padding:28px 22px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   '<div style="width:46px;height:46px;border-radius:50%;background:#2a1808;border:2px solid '+acc+';display:flex;align-items:center;justify-content:center;font-size:20px;color:'+bright+';margin-bottom:18px;">'+(idx+1)+'</div>'
    +   '<div style="font-size:20px;color:#e0d4b8;line-height:1.65;">'+step+'</div>'
    +   (tp ? '<div style="margin-top:18px;"><span style="display:inline-block;background:#2a1808;border:1px solid '+acc+';border-radius:8px;color:'+bright+';font-size:14px;padding:6px 14px;">'+tp+'</span></div>' : '')
    + '</div>'
    + '<div style="display:flex;gap:10px;padding:16px 22px 30px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   (idx>0 ? '<button onclick="set({healthCooking:{id:\''+rid+'\',step:'+(idx-1)+'}});window.scrollTo(0,0);" style="flex:1;padding:14px;border-radius:12px;background:#1a1208;border:1px solid '+acc+';color:'+bright+';font-size:15px;cursor:pointer;">\u2190 Previous</button>' : '')
    +   (last
        ? '<button onclick="set({healthCooking:null});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+acc+';border:1px solid '+acc+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">\u2713 Done</button>'
        : '<button onclick="set({healthCooking:{id:\''+rid+'\',step:'+(idx+1)+'}});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+acc+';border:1px solid '+acc+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">Next \u2192</button>')
    + '</div>'
    + '</div>';
}

function healthHTML(){
  const isPro = tierAllows('pro');
  const srv = S.servings||1;
  const howOpen = S.healthHowOpen||false;
  const searchVal = S.healthSearch||'';

  // ── Cooking mode (overlays any health screen) ──
  if(S.healthCooking){
    const _cookRecipe = S.activeSmoothie||S.activeOats||S.activeMuffin||S.activeRaw||S.activeHealthExt;
    if(_cookRecipe) return healthCookingView(_cookRecipe);
  }

  // ── My Plan screen ──────────────────────────────────────────
  if(S.healthShowPlan) return healthPlanScreen(isPro);

  // ── Recipe detail screens ────────────────────────────────────
  if(S.activeSmoothie) return healthRecipeDetail(S.activeSmoothie, {activeSmoothie:null});
  if(S.activeOats)     return healthRecipeDetail(S.activeOats,     {activeOats:null});
  if(S.activeMuffin)   return healthRecipeDetail(S.activeMuffin,   {activeMuffin:null});
  if(S.activeRaw)      return healthRecipeDetail(S.activeRaw,      {activeRaw:null});
  if(S.activeHealthExt) return healthExtDetail(S.activeHealthExt);

  // ── Sub-group screen (e.g. "Body Goals" → Keto / Weight Loss / High-Protein) ──
  if(S.healthGroup) return healthGroupScreen(isPro, srv);

  // ══════════════════════════════════════════════════════════
  // LANDING PAGE — 6 group cards  (braai v33 style)
  // ══════════════════════════════════════════════════════════
  const groups = [
    {id:'lifestyle',  emoji:'🌱', label:'Lifestyle',           sub:'Vegan · Raw · Vegetarian · Salads',           count:null},
    {id:'drinks',     emoji:'🥤', label:'Drinks',              sub:'Juices · Smoothies',                          count:null},
    {id:'gut',        emoji:'🦠', label:'Gut & Living Foods',  sub:'Gut Health · Fermented',                      count:null},
    {id:'prep',       emoji:'🌙', label:'Fresh & Easy',        sub:'Overnight Oats · Muffins',                    count:null},
    {id:'bodygoals',  emoji:'💪', label:'Body Goals',          sub:'Keto · Weight Loss · High-Protein',           count:null},
    {id:'wellness',   emoji:'🩺', label:'Wellness',            sub:'Diabetic · Immunity · Anti-Inflammatory',     count:null},
  ];

  const planCount = (S.healthPlan||[]).length;

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <!-- Header -->
    <div style="position:relative;height:200px;overflow:hidden;background:#1a1208;">
      <img src="https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Headers/Health%20Hub.jpg"
           onerror="this.style.display='none'"
           style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:0;">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.25) 0%,rgba(8,4,2,0.82) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;">🌿 Health Hub</h1>
        <p style="margin:0 0 10px;font-size:13px;color:#e0d4b8;font-style:italic;">Eat with intention · Feel the difference</p>
        <div style="display:flex;align-items:center;background:rgba(15,8,4,0.85);border:1px solid #3a2010;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#c06020;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search health recipes…" oninput="set({healthSearch:this.value})" value="${searchVal}" style="flex:1;background:none;border:none;outline:none;color:#e0d4b8;font-size:13px;"/>
          ${searchVal?`<button onclick="set({healthSearch:''})" style="background:none;border:none;color:#e0d4b8;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- How it works + people counter -->
    <div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="flex:1;">
          <button onclick="set({healthHowOpen:!S.healthHowOpen})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${howOpen?'▲':'▼'} How it works
          </button>
          ${howOpen?`<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#e0d4b8;line-height:1.7;"><strong style="color:#f5c842;">1. Pick a group</strong> — tap any category card below.<br><strong style="color:#f5c842;">2. Choose a sub-category</strong> — e.g. Keto, Vegan, Gut Health.<br><strong style="color:#f5c842;">3. Set your people count</strong> — all ingredients scale automatically.<br><strong style="color:#f5c842;">4. Add to plan</strong> — tap any recipe checkbox.<br><strong style="color:#f5c842;">5. My Plan</strong> — get shopping list, calories &amp; cost (Pro).<br><span style="color:#e0d4b8;font-size:13px;">Tip: plan 1 drink + 1–2 meals for a balanced day.</span></div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({servings:Math.max(1,S.servings-1)})" style="width:32px;height:32px;border-radius:50%;background:#161210;border:2px solid #c06020;color:#c06020;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f5c842;font-weight:bold;line-height:1;">${srv}</div>
            <div style="font-size:13px;color:#e0d4b8;letter-spacing:1px;text-transform:uppercase;">${srv===1?'person':'people'}</div>
          </div>
          <button onclick="setQuiet({servings:Math.min(50,S.servings+1)})" style="width:32px;height:32px;border-radius:50%;background:#161210;border:2px solid #c06020;color:#c06020;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
    </div>

    <!-- 6 Group cards — 2×3 grid like braai -->
    <div style="padding:16px;">
      <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:12px;">What are you eating for?</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px;">
        ${groups.map(g=>hcGridCard(g.emoji, g.label, g.sub, "set({healthGroup:'"+g.id+"',healthGroupTab:null})", false)).join('')}
        ${hcGridCard('\ud83d\uded2', 'My Plan', planCount>0?(planCount+' saved'):'Shopping list', isPro?"set({healthShowPlan:true})":"alert('\ud83d\udc51 Upgrade to Pro for full plan features')", true)}
      </div>
    </div>
  </div>`;
}

// ──────────────────────────────────────────────────────────────
// GROUP SCREEN — shows sub-category cards within a group
// ──────────────────────────────────────────────────────────────
function healthGroupScreen(isPro, srv){
  const grp = S.healthGroup;
  const activeTab = S.healthGroupTab||null;

  const groupDefs = {
    lifestyle: {
      label:'🌱 Lifestyle', sub:'Eat with intention',
      tabs:[
        {id:'vegan',      emoji:'🌿', label:'Vegan',        arr:'PLANTBASED_RECIPES', type:'ext'},
        {id:'vegetarian', emoji:'🥚', label:'Vegetarian',   arr:'VEGETARIAN_RECIPES', type:'ext'},
        {id:'raw',        emoji:'🥗', label:'Raw & Real',   arr:'RAW_AND_REAL',       type:'ext'},
        {id:'salads',     emoji:'🥗', label:'Salads',       arr:null,                 type:'ext',  coming:true},
      ]
    },
    drinks: {
      label:'🥤 Drinks', sub:'Juices & smoothies',
      tabs:[
        {id:'juices',    emoji:'🍊', label:'Fresh Juices', arr:'FRESH_JUICES',  type:'juice',    openFn:'healthOpenJuice'},
        {id:'smoothies', emoji:'🥤', label:'Smoothies',    arr:'SMOOTHIES',     type:'smoothie', openFn:'healthOpenSmoothie'},
      ]
    },
    gut: {
      label:'🦠 Gut & Living Foods', sub:'Feed your microbiome',
      tabs:[
        {id:'guthealth', emoji:'🦠', label:'Gut Health',      arr:'GUTHEALTH_RECIPES', type:'ext'},
        {id:'fermented', emoji:'🥫', label:'Fermented Foods',  arr:'FERMENTED_RECIPES', type:'ext'},
      ]
    },
    prep: {
      label:'🌙 Fresh & Easy', sub:'Make-ahead & quick',
      tabs:[
        {id:'oats',    emoji:'🌾', label:'Overnight Oats', arr:'OVERNIGHT_OATS',    type:'oats',   openFn:'healthOpenOats'},
        {id:'muffins', emoji:'🧁', label:'Muffins',        arr:'HEALTHY_MUFFINS',   type:'muffin', openFn:'healthOpenMuffin'},
        {id:'crackers',   emoji:'🍘', label:'Seed Crackers',  arr:'SEED_CRACKERS',   type:'ext'},
        {id:'froyo',      emoji:'🍦', label:'Frozen Yoghurt',  arr:'FROZEN_YOGHURT',  type:'ext'},
        {id:'nutbutters', emoji:'🥜', label:'Nut Butters',     arr:'__APPEARSIN__',   type:'ext', appearsIn:'health'},
      ]
    },
    bodygoals: {
      label:'💪 Body Goals', sub:'Train, fuel, recover',
      tabs:[
        {id:'keto',       emoji:'🥑', label:'Keto',         arr:'KETO_RECIPES',        type:'ext'},
        {id:'weightloss', emoji:'⚖️', label:'Weight Loss',  arr:'WEIGHTLOSS_RECIPES',  type:'ext'},
        {id:'protein',    emoji:'🍗', label:'High-Protein', arr:'HIGHPROTEIN_RECIPES',  type:'ext'},
      ]
    },
    wellness: {
      label:'🩺 Wellness', sub:'Manage · Protect · Thrive',
      tabs:[
        {id:'diabetic',     emoji:'🩸', label:'Diabetic-Friendly', arr:'DIABETIC_RECIPES',    type:'ext'},
        {id:'immunity',     emoji:'🛡️', label:'Immunity Boost',    arr:'IMMUNITY_RECIPES',    type:'ext'},
        {id:'antiinflam',   emoji:'🌿', label:'Anti-Inflammatory', arr:'ANTIINFLAM_RECIPES',   type:'ext'},
      ]
    },
  };

  const gDef = groupDefs[grp];
  if(!gDef) return healthHTML();

  // If no tab selected yet, show the tab cards
  if(!activeTab){
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="position:relative;height:200px;overflow:hidden;background:#1a1208;">
        <img src="https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Headers/Health%20Hub.jpg"
             onerror="this.style.display='none'"
             style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:0;">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.85) 100%);z-index:1;"></div>
        <button onclick="set({healthGroup:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← Health Hub</button>
        <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
          <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;">${gDef.label}</h1>
          <p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;">${gDef.sub}</p>
        </div>
      </div>
      <div style="padding:16px;">
        <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:12px;">Choose a category</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${gDef.tabs.map(t=>`
          <div onclick="${t.coming?'':' set({healthGroupTab:\''+t.id+'\'})'}"
            style="background:${t.coming?'#140d06':'#161210'};border:1px solid #2a1a10;border-radius:14px;padding:14px 8px;min-height:96px;cursor:${t.coming?'default':'pointer'};opacity:${t.coming?0.6:1};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="font-size:24px;margin-bottom:6px;">${t.emoji}</div>
            <div style="font-size:16px;color:${t.coming?'#6a5440':'#f5e8cc'};font-weight:bold;line-height:1.2;">${t.label}</div>
            ${t.coming?'<div style="font-size:14px;color:#6a5440;margin-top:4px;">Coming soon</div>':''}
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  // Tab selected — show recipe list
  const tabDef = gDef.tabs.find(t=>t.id===activeTab);
  if(!tabDef) return healthHTML();

  const arrMap = {
    'FRESH_JUICES':         typeof FRESH_JUICES!=='undefined'        ? FRESH_JUICES        : [],
    'SMOOTHIES':            typeof SMOOTHIES!=='undefined'           ? SMOOTHIES           : [],
    'OVERNIGHT_OATS':       typeof OVERNIGHT_OATS!=='undefined'      ? OVERNIGHT_OATS      : [],
    'HEALTHY_MUFFINS':      typeof HEALTHY_MUFFINS!=='undefined'     ? HEALTHY_MUFFINS     : [],
    'RAW_AND_REAL':         typeof RAW_AND_REAL!=='undefined'        ? RAW_AND_REAL        : [],
    'SEED_CRACKERS':        typeof SEED_CRACKERS!=='undefined'       ? SEED_CRACKERS       : [],
    'FROZEN_YOGHURT':       typeof FROZEN_YOGHURT!=='undefined'      ? FROZEN_YOGHURT      : [],
    'KETO_RECIPES':         typeof KETO_RECIPES!=='undefined'        ? KETO_RECIPES        : [],
    'WEIGHTLOSS_RECIPES':   typeof WEIGHTLOSS_RECIPES!=='undefined'  ? WEIGHTLOSS_RECIPES  : [],
    'HIGHPROTEIN_RECIPES':  typeof HIGHPROTEIN_RECIPES!=='undefined' ? HIGHPROTEIN_RECIPES : [],
    'PLANTBASED_RECIPES':   typeof PLANTBASED_RECIPES!=='undefined'  ? PLANTBASED_RECIPES  : [],
    'VEGETARIAN_RECIPES':   typeof VEGETARIAN_RECIPES!=='undefined'  ? VEGETARIAN_RECIPES  : [],
    'GUTHEALTH_RECIPES':    typeof GUTHEALTH_RECIPES!=='undefined'   ? GUTHEALTH_RECIPES   : [],
    'DIABETIC_RECIPES':     typeof DIABETIC_RECIPES!=='undefined'    ? DIABETIC_RECIPES    : [],
    'FERMENTED_RECIPES':    typeof FERMENTED_RECIPES!=='undefined'   ? FERMENTED_RECIPES   : [],
    'IMMUNITY_RECIPES':     typeof IMMUNITY_RECIPES!=='undefined'    ? IMMUNITY_RECIPES    : [],
    'ANTIINFLAM_RECIPES':   typeof ANTIINFLAM_RECIPES!=='undefined'  ? ANTIINFLAM_RECIPES  : [],
  };
  // appearsIn tabs are a cross-section feed-read (e.g. Spice pastes tagged for Health),
  // not a native array. Everything else resolves through arrMap.
  let items = tabDef.appearsIn
    ? (typeof wkAppearsIn==='function' ? wkAppearsIn(tabDef.appearsIn) : [])
    : (tabDef.arr ? (arrMap[tabDef.arr]||[]) : []);

  // Search filter
  const sv = (S.healthSearch||'').toLowerCase();
  if(sv) items = items.filter(i=>i.name.toLowerCase().includes(sv)||(i.feel||'').toLowerCase().includes(sv));

  const listHTML = items.length===0
    ? `<div style="text-align:center;padding:40px 20px;color:#e0d4b8;font-size:13px;">${sv?'No matches for "'+sv+'"':'Recipes loading…'}</div>`
    : items.map(item=>{
        const canView = tierAllows(item.tier||'free');
        const sel = (S.healthPlan||[]).some(x=>x.id===item.id);
        const disabled = !canView;
        const info = (item.kcal?(item.makes?item.kcal+' kcal each · '+(srv*item.makes)+' total':item.kcal*srv+' kcal'):'')+
                     (item.costPP?' · ~R'+Math.round(item.costPP*srv)+'/pp':'');
        const feel = item.feel || item.howItFeels || item.howThisFeels || '';
        // appearsIn cards live in another section (e.g. Spice) — tapping anywhere opens
        // the canonical recipe there; Back returns to this Health tab (snapshotNav).
        const openCall = tabDef.appearsIn
          ? 'healthOpenSpice(\''+item.id+'\',\''+grp+'\',\''+activeTab+'\')'
          : tabDef.openFn
            ? tabDef.openFn+'(\''+item.id+'\')'
            : 'healthOpenExt(\''+item.id+'\',\''+tabDef.arr+'\',\''+grp+'\',\''+activeTab+'\')';
        const typeMap = {FRESH_JUICES:'juice',SMOOTHIES:'smoothie',OVERNIGHT_OATS:'oats',HEALTHY_MUFFINS:'muffin',RAW_AND_REAL:'raw'};
        const toggleCall = tabDef.appearsIn
          ? openCall
          : typeMap[tabDef.arr]
            ? 'healthToggleById(\''+item.id+'\',\''+typeMap[tabDef.arr]+'\',S.servings)'
            : 'healthToggleExtById(\''+item.id+'\')';
        const onclk = disabled ? "alert('👑 Upgrade to Pro to unlock')" : toggleCall;
        const btn = disabled
          ? '<span style="font-size:13px;background:#1a1008;border:1px solid #c06020;border-radius:6px;color:#c08030;padding:3px 7px;">👑 PRO</span>'
          : '<button onclick="event.stopPropagation();'+openCall+'" style="background:#c06020;border:none;border-radius:6px;padding:5px 10px;font-size:13px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>';
        return `<div style="background:${sel?'#1a1208':'#161210'};border:1px solid ${sel?'#c06020':'#2a1a10'};border-radius:10px;padding:14px;margin-bottom:8px;opacity:${disabled?0.45:1};">
          <div style="display:flex;align-items:flex-start;gap:12px;cursor:${disabled?'not-allowed':'pointer'}" onclick="${onclk}">
            <div style="width:22px;height:22px;border-radius:6px;background:${sel?'#c06020':'transparent'};border:2px solid ${sel?'#c06020':'#8a6a48'};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#89806e;">${sel?'✓':''}</div>
            <span style="font-size:20px;flex-shrink:0;line-height:1.35;">${item.emoji}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:16px;color:#f5e8cc;font-weight:bold;line-height:1.35;">${item.name}</div>
              ${feel?`<div style="font-size:14px;color:#e0d4b8;margin-top:4px;line-height:1.4;">${feel}</div>`:''}
              ${info?`<div style="font-size:13px;color:#e0d4b8;margin-top:4px;">${info}</div>`:''}
            </div>
            <div style="flex-shrink:0;align-self:center;">${btn}</div>
          </div>
        </div>`;
      }).join('');

  // Pill tabs to switch siblings
  const pillTabs = gDef.tabs.filter(t=>!t.coming).map(t=>
    `<button onclick="set({healthGroupTab:'${t.id}'})" style="flex-shrink:0;padding:6px 12px;border-radius:20px;border:1px solid ${activeTab===t.id?'#c06020':'#3a2010'};background:${activeTab===t.id?'#1a1208':'transparent'};color:${activeTab===t.id?'#f5c842':'#6a5440'};font-size:13px;cursor:pointer;white-space:nowrap;">${t.emoji} ${t.label}</button>`
  ).join('');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="position:relative;height:200px;overflow:hidden;background:#1a1208;">
      <img src="https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Headers/Health%20Hub.jpg"
           onerror="this.style.display='none'"
           style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:0;">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.85) 100%);z-index:1;"></div>
      <button onclick="set({healthGroupTab:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← ${gDef.label}</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
        <h1 style="margin:0 0 2px;font-size:20px;font-weight:bold;color:#f5e8cc;">${tabDef.emoji} ${tabDef.label}</h1>
        <p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;">${gDef.label}</p>
      </div>
    </div>
    <!-- Pill nav -->
    <div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:10px 16px;">
      <div style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;">${pillTabs}</div>
      ${(S.healthPlan||[]).length>0?`<button onclick="set({healthShowPlan:true})" style="width:100%;margin-top:8px;padding:8px;background:#1a1208;border:1px solid #c06020;border-radius:8px;color:#f5c842;font-size:13px;cursor:pointer;">📋 My Plan (${(S.healthPlan||[]).length}) →</button>`:''}
    </div>
    <div style="padding:12px 16px 80px;">${listHTML}</div>
  </div>`;
}

// ──────────────────────────────────────────────────────────────
// EXTENDED RECIPE DETAIL (Keto, Weight Loss, etc.)
// ──────────────────────────────────────────────────────────────
function healthExtDetail(recipe){
  if(!recipe) return healthHTML();
  const isPro = tierAllows('pro');
  const srv = S.servings||1;
  const inPlan = (S.healthPlan||[]).some(x=>x.id===recipe.id);
  const backCall = 'activeHealthExt:null,healthGroup:'+JSON.stringify(S.healthGroup||null)+',healthGroupTab:'+JSON.stringify(S.healthGroupTab||null);
  const imgUrl = healthImgUrl(recipe.name);

  const ings = (recipe.base300||[]);
  const ingsHTML = ings.map(i=>{
    if(!i||!i.n) return '';
    let amt='';
    if(i.pp && i.u && i.u!=='pinch'){
      const t=Math.round(i.pp*srv*10)/10;
      amt=t>=1000&&i.u==='g'?(t/1000).toFixed(1)+'kg':t>=1000&&i.u==='ml'?(t/1000).toFixed(1)+'L':t+i.u;
    } else if(i.pp && !i.u){ amt=Math.round(i.pp*srv)+''; } else if(i.u==='pinch'){ amt='pinch'; }
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #2a1a10;font-size:13px;">
      <span style="color:#e0d4b8;">${i.n}</span>
      <span style="color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${amt}</span>
    </div>`;
  }).join('');

  const stepsHTML = (recipe.method||[]).map((step,i)=>`
    <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #2a1a10;">
      <div style="flex-shrink:0;width:26px;height:26px;border-radius:50%;background:#2a1808;border:1px solid #c06020;display:flex;align-items:center;justify-content:center;font-size:13px;color:#f5c842;font-weight:bold;">${i+1}</div>
      <div style="font-size:13px;color:#e0d4b8;line-height:1.6;padding-top:4px;">${step}${hcStepTimer(step)?`<div style="margin-top:6px;"><span style="display:inline-block;background:#2a1808;border:1px solid #c06020;border-radius:6px;color:#f5c842;font-size:13px;padding:3px 9px;">${hcStepTimer(step)}</span></div>`:''}</div>
    </div>`).join('');

  const totalCost = recipe.costPP ? '~R'+Math.round(recipe.costPP*srv)+' total (R'+recipe.costPP+'/pp)' : null;

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <!-- Photo header -->
    <div style="position:relative;height:220px;overflow:hidden;background:#161210;">
      <img src="${imgUrl}" onerror="this.style.display='none';var ns=this.nextElementSibling;if(ns)ns.style.display='flex';"
           style="width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:0;">
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:6px;background:#161210;z-index:0;">
        <span style="font-size:48px;">${recipe.emoji||'🌿'}</span>
        <span style="font-size:13px;color:#c06020;">📷 Photo coming soon</span>
      </div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.2) 0%,rgba(10,4,14,0.85) 100%);z-index:1;pointer-events:none;"></div>
      <button onclick="if(S.healthGroup){set({activeHealthExt:null})}else{set({activeHealthExt:null,screen:'health'})}" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.5);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← Back</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
        <div style="font-size:28px;margin-bottom:4px;">${recipe.emoji||'🌿'}</div>
        <h1 style="margin:0 0 4px;font-size:20px;font-weight:bold;color:#f5e8cc;">${recipe.name}</h1>
        ${recipe.feel?`<p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;line-height:1.4;">${recipe.feel}</p>`:''}
      </div>
    </div>

    <!-- Badges -->
    ${(recipe.badges||[]).length?`<div style="padding:12px 16px 0;display:flex;flex-wrap:wrap;gap:6px;">${(recipe.badges||[]).map(b=>`<span style="background:#2a1a10;border:1px solid #3a2010;border-radius:20px;padding:4px 10px;font-size:13px;color:#c06020;">${b}</span>`).join('')}</div>`:''}

    <!-- Dark green quantity box -->
    <div style="margin:12px 16px 0;background:#1a1208;border:2px solid #c06020;border-radius:12px;padding:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-size:13px;color:#e0d4b8;letter-spacing:1px;text-transform:uppercase;">Serving${srv!==1?'s':''}</div>
          <div style="font-size:26px;color:#f5c842;font-weight:bold;line-height:1;">${srv} <span style="font-size:14px;">person${srv!==1?'s':''}</span></div>
          ${recipe.kcal?`<div style="font-size:13px;color:#c06020;margin-top:2px;">🔥 ${recipe.kcal*srv} kcal total</div>`:''}
          ${totalCost?`<div style="font-size:13px;color:#e0d4b8;margin-top:2px;">💰 ${totalCost}</div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button onclick="setQuiet({servings:Math.max(1,S.servings-1)})" style="width:36px;height:36px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#f5c842;font-size:20px;cursor:pointer;">−</button>
          <button onclick="setQuiet({servings:Math.min(50,S.servings+1)})" style="width:36px;height:36px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#f5c842;font-size:20px;cursor:pointer;">+</button>
        </div>
      </div>
    </div>

    <!-- How portion size works collapsible -->
    <div style="margin:10px 16px 0;">
      <button onclick="set({healthPortionOpen:!S.healthPortionOpen})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
        ${S.healthPortionOpen?'▲':'▼'} How portion size works
      </button>
      ${S.healthPortionOpen?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-top:6px;font-size:13px;color:#e0d4b8;line-height:1.7;">Think of it like a pizza: <strong style="color:#f5c842;">1 dish = full plate</strong> · 2 dishes = half each · 3 = a third each. Drinks and muffins are always a fixed portion — they don't shrink.</div>`:''}
    </div>

    <div style="padding:0 16px 80px;">
      <!-- Ingredients -->
      <div style="margin-top:16px;">
        <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">🛒 Ingredients — ${srv} person${srv!==1?'s':''}</div>
        <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:10px 14px;">
          ${ingsHTML||'<div style="color:#e0d4b8;font-size:13px;">No ingredients listed.</div>'}
        </div>
      </div>

      <!-- Method -->
      ${stepsHTML?`<div style="margin-top:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;gap:8px;">
          <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">👨‍🍳 Method</div>
          <button onclick="set({healthCooking:{step:0}});window.scrollTo(0,0);" style="background:#2a1808;border:1px solid #c06020;border-radius:8px;color:#f5c842;font-size:13px;padding:6px 12px;cursor:pointer;white-space:nowrap;">🍳 Start Cooking →</button>
        </div>
        <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:10px 14px;">${stepsHTML}</div>
      </div>`:''}

      <!-- Tip -->
      ${recipe.tip?`<div style="margin-top:12px;background:#1a1208;border-left:3px solid #c06020;border-radius:0 8px 8px 0;padding:12px 14px;">
        <div style="font-size:13px;color:#c06020;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">💡 Tip</div>
        <div style="font-size:13px;color:#e0d4b8;line-height:1.5;">${recipe.tip}</div>
      </div>`:''}

      <!-- Cost estimate box -->
      <div style="margin-top:12px;background:#1a1a08;border:1px solid #3a2010;border-radius:10px;padding:14px;">
        <div style="font-size:13px;letter-spacing:2px;color:#8a8030;text-transform:uppercase;margin-bottom:8px;">💰 Cost Estimate</div>
        ${(function(){
          if(totalCost) return `<div style="font-size:18px;color:#f5c842;font-weight:bold;">${totalCost}</div><div style="font-size:13px;color:#748932;margin-top:4px;">SA&#39;s biggest retailers · May 2026 · Buy 10% extra</div>`;
          let t=0, m=0, n=0;
          (ings||[]).forEach(function(i){ if(!i||!i.n||!i.pp) return; n++; const c=hcLineCost(i.n, Math.round((i.pp||0)*srv*10)/10, i.u); if(c!=null){ t+=c; m++; } });
          t=Math.round(t);
          if(m>0) return `<div style="font-size:18px;color:#f5c842;font-weight:bold;">~R${t} total (R${srv>0?Math.round(t/srv):t}/pp)</div><div style="font-size:13px;color:#748932;margin-top:4px;">${m}/${n} ingredients priced · SA&#39;s biggest retailers · Buy 10% extra</div>`;
          return `<div style="font-size:13px;color:#908241;font-style:italic;">Price estimate coming soon</div>`;
        })()}
      </div>

      <!-- Goes Well With -->
      ${(function(){
        var g = recipe.goesWith||recipe.pairsWith;
        if(!g) return '';
        var list = Array.isArray(g) ? g : String(g).split(/,|\band\b|&/i).map(function(x){return x.trim();}).filter(Boolean);
        if(!list.length) return '';
        return `<div style="margin-top:12px;background:#161210;border:1px solid #3a2010;border-radius:10px;padding:14px;">
          <div style="font-size:13px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">❤ Goes Well With</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${list.slice(0,5).map(function(x){return '<span style="padding:5px 12px;border-radius:16px;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;">'+x+'</span>';}).join('')}</div>
        </div>`;
      })()}

      <!-- Bottom actions (braai pattern) -->
      <div style="margin-top:20px;">
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <button onclick="healthToggleExtById('${recipe.id}')" style="flex:1;padding:12px 8px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:bold;${inPlan?'background:#1a1208;border:1px solid #f5c842;color:#f5c842;':'background:#c06020;border:1px solid #c06020;color:#100a04;'}">${inPlan?'✅ In Plan':'📋 Add to Plan'}</button>
          <button onclick="alert('Save to My Kitchen — coming soon')" style="flex:1;padding:12px 8px;border-radius:10px;background:#160f08;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;cursor:pointer;">💾 My Kitchen</button>
          <button onclick="alert('Download — coming soon')" style="flex:1;padding:12px 8px;border-radius:10px;background:#160f08;border:1px solid #3a2010;color:#e0d4b8;font-size:13px;cursor:pointer;">⬇️ Download</button>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0 30px;border-top:1px solid #3a2010;font-size:13px;">
          <button onclick="if(S.healthGroup){set({activeHealthExt:null})}else{set({activeHealthExt:null,screen:'health'})}" style="background:none;border:none;color:#f5c842;cursor:pointer;">← Back</button>
          <button onclick="set({healthShowPlan:true})" style="background:none;border:none;color:#f5c842;cursor:pointer;">🛒 My Plan</button>
          <button onclick="set({screen:'home',activeHealthExt:null,healthGroup:null,healthGroupTab:null})" style="background:none;border:none;color:#e0d4b8;cursor:pointer;">Home</button>
        </div>
      </div>
    </div>
  </div>`;
}

// ──────────────────────────────────────────────────────────────
// MY PLAN SCREEN (moved from inline return)
// ──────────────────────────────────────────────────────────────
function healthPlanScreen(isPro){
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="position:relative;height:200px;overflow:hidden;background:#1a1208;">
      <img src="https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Headers/Health%20Hub.jpg"
           onerror="this.style.display='none'"
           style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:0;">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.85) 100%);z-index:1;"></div>
      <button onclick="set({healthShowPlan:false})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:13px;padding:5px 12px;cursor:pointer;">← Back to Browse</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;">📋 My Health Plan</h1>
        <p style="margin:0;font-size:13px;color:#e0d4b8;font-style:italic;">Recipes · Shopping · Cost</p>
      </div>
    </div>
    <div class="content">${renderHealthMyPlan(isPro)}</div>
  </div>`;
}


// ══════════════════════════════════════════════════════════════
// HEALTH HUB — RECIPE ARRAYS (with costPP — May 2026 SA pricing)
// ══════════════════════════════════════════════════════════════

const KETO_RECIPES = [
  {id:'ketobowl',       tier:'free',  emoji:'🥑', name:'Avocado Egg Bowl',          kcal:520, costPP:32, feel:'Rich, filling — like a proper grown-up breakfast that holds you till dinner.',
   badges:['🥑 Keto','🥚 High-Fat','⚡ Quick'],
   base300:[{n:'Avocado (ripe, halved)',pp:1,u:''},{n:'Eggs',pp:2,u:''},{n:'Feta cheese',pp:30,u:'g'},{n:'Cherry tomatoes',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Salt & black pepper',pp:1,u:'pinch'}],
   method:['Halve avocado and remove pip. Drizzle with olive oil.','Fry eggs in olive oil — sunny side up or scrambled.','Place eggs in avocado hollow. Top with crumbled feta and cherry tomatoes.','Season with salt and plenty of black pepper. Serve immediately.'],
   tip:'Add a drizzle of chilli flakes for heat. Works as breakfast, lunch or a quick supper.'},
  {id:'ketocourgetti',  tier:'free',  emoji:'🥒', name:'Zoodles with Creamy Pesto',  kcal:410, costPP:42, feel:'Light but rich — your fork keeps going back.',
   badges:['🥒 Low-Carb','🌿 Keto','🧀 Satisfying'],
   base300:[{n:'Baby marrow / zucchini (spiralised)',pp:300,u:'g'},{n:'Cream cheese',pp:60,u:'g'},{n:'Basil pesto',pp:30,u:'g'},{n:'Parmesan (grated)',pp:20,u:'g'},{n:'Pine nuts',pp:15,u:'g'},{n:'Garlic clove (minced)',pp:1,u:''}],
   method:['Spiralise zucchini. Sprinkle with salt, leave 5 min, then pat dry.','Sauté garlic in butter 1 min. Add cream cheese and pesto — stir to combine.','Toss zoodles in the sauce over low heat, 2–3 min max (keep crunch).','Plate. Top with parmesan and toasted pine nuts.'],
   tip:'Do NOT overcook the zoodles — they turn watery. 2 min in the pan is plenty.'},
  {id:'ketobolognese',  tier:'free',  emoji:'🍖', name:'Beef & Cauliflower Mince',   kcal:580, costPP:40, feel:'Proper comfort food that happens to be carb-free. Your body won\'t miss a thing.',
   badges:['🥩 Keto','💪 High-Protein','🍽️ Hearty'],
   base300:[{n:'Beef mince',pp:200,u:'g'},{n:'Cauliflower (blitzed to rice)',pp:200,u:'g'},{n:'Chopped tomatoes (tinned)',pp:100,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Dried oregano',pp:2,u:'g'}],
   method:['Sauté onion in olive oil 4 min. Add garlic, cook 1 min.','Add mince. Brown well, breaking up lumps — about 7 min.','Add tomatoes and oregano. Simmer uncovered 15 min.','Meanwhile, microwave cauliflower rice 3 min. Serve mince on cauli rice.'],
   tip:'Add a splash of cream at the end for extra richness — still keto.'},
  {id:'ketosalmon',     tier:'plus',  emoji:'🐟', name:'Butter-Baked Salmon',        kcal:490, costPP:131, feel:'Golden edges, soft centre — smells like it came from a restaurant kitchen.',
   badges:['🐟 Omega-3','🧈 Keto','⏱️ 20 min'],
   base300:[{n:'Salmon fillet',pp:180,u:'g'},{n:'Butter',pp:20,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Garlic (minced)',pp:3,u:'g'},{n:'Fresh dill or parsley',pp:5,u:'g'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Preheat oven 200°C. Place salmon in baking dish.','Mix melted butter, lemon juice and garlic. Pour over salmon.','Season with salt and pepper. Bake 12–15 min until just cooked through.','Finish with fresh herbs. Serve with steamed greens or salad.'],
   tip:'Pull salmon at 12 min if thicker fillets — residual heat finishes it. Overcooked salmon is dry.'},
  {id:'ketocheesecake', tier:'plus',  emoji:'🍰', name:'Keto Cheesecake Cups',       kcal:360, costPP:16, feel:'Silky and indulgent — you won\'t believe it has almost no sugar.',
   badges:['🍰 Keto Dessert','🧀 Creamy','🍓 Low-Sugar'],
   base300:[{n:'Cream cheese',pp:120,u:'g'},{n:'Heavy cream (whipped)',pp:80,u:'ml'},{n:'Erythritol or xylitol sweetener',pp:20,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'},{n:'Lemon zest',pp:2,u:'g'},{n:'Fresh berries (for topping)',pp:40,u:'g'}],
   method:['Beat cream cheese and sweetener until smooth.','Fold in whipped cream gently. Add vanilla and lemon zest.','Spoon into glasses or ramekins. Refrigerate at least 1 hour.','Top with fresh berries and serve cold.'],
   tip:'Use a hand mixer for the cream cheese — lumps are nearly impossible to remove by hand.'},
  {id:'keto_egg_muffins',tier:'free', emoji:'🧁', name:'Spinach Mushroom Egg Muffins', kcal:300, costPP:34, feel:'Savoury, portable and filling — the keto breakfast that travels.',
   badges:['🥑 Keto','🥚 High-Protein','⚡ Meal Prep'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Fresh spinach (chopped)',pp:50,u:'g'},{n:'Mushrooms (diced)',pp:50,u:'g'},{n:'Cheddar cheese (grated)',pp:30,u:'g'},{n:'Heavy cream',pp:10,u:'ml'},{n:'Butter (for greasing)',pp:5,u:'g'}],
   method:['Preheat oven to 190°C. Grease a muffin tin with butter.','Sauté mushrooms and spinach in butter 3–4 minutes until softened.','Whisk eggs, heavy cream, cheese, salt, pepper and garlic powder.','Stir in sautéed vegetables. Divide into muffin cups. Bake 18–22 minutes until golden.'],
   tip:'Bake a large batch and refrigerate up to 4 days. Reheat in microwave or oven. Freeze up to 2 months.'},
  {id:'keto_shrimp',    tier:'free',  emoji:'🦐', name:'Garlic Butter Prawn Zoodles',  kcal:330, costPP:66, feel:'Light but decadent — butter-glossed prawns over silky zucchini ribbons.',
   badges:['🥑 Keto','🦐 Omega-3','⚡ 15 min'],
   base300:[{n:'Prawns (peeled, deveined)',pp:150,u:'g'},{n:'Zucchini/baby marrow (spiralised)',pp:150,u:'g'},{n:'Butter',pp:15,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Fresh parsley',pp:5,u:'g'}],
   method:['Heat olive oil and butter in a large pan over medium-high.','Add minced garlic and prawns — cook 2–3 minutes per side until pink.','Add zucchini, lemon juice and parsley — stir-fry 3–4 minutes until zucchini is tender-crisp.','Serve immediately hot.'],
   tip:'Use a large skillet for big batches. Not ideal for freezing — best eaten fresh.'},
  {id:'keto_chicken_salad',tier:'free',emoji:'🥗',name:'Chicken Avocado Bacon Salad',  kcal:400, costPP:31, feel:'Rich, satisfying and completely keto — the salad that replaced lunch forever.',
   badges:['🥑 Keto','🥓 High-Fat','🍗 Protein'],
   base300:[{n:'Cooked chicken breast (diced)',pp:120,u:'g'},{n:'Avocado (diced)',pp:75,u:'g'},{n:'Bacon (cooked, crumbled)',pp:40,u:'g'},{n:'Mixed greens',pp:50,u:'g'},{n:'Cherry tomatoes (halved)',pp:50,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Apple cider vinegar',pp:5,u:'ml'}],
   method:['Cook and crumble bacon — dice cooked chicken.','Whisk olive oil, vinegar, salt and pepper for dressing.','In a bowl, combine greens, chicken, avocado, tomatoes and bacon.','Drizzle dressing and toss gently. Serve chilled.'],
   tip:'Prep components separately for gatherings — assemble fresh to prevent sogginess.'},
  {id:'keto_broccoli_soup',tier:'free',emoji:'🥦',name:'Creamy Broccoli Cheese Soup',  kcal:360, costPP:56, feel:'Velvety, rich and warming — all the comfort, none of the carbs.',
   badges:['🥑 Keto','🧀 Creamy','🥦 High-Fat'],
   base300:[{n:'Broccoli florets',pp:200,u:'g'},{n:'Heavy cream',pp:150,u:'ml'},{n:'Cheddar cheese (grated)',pp:40,u:'g'},{n:'Butter',pp:20,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Chicken or vegetable broth',pp:200,u:'ml'}],
   method:['Melt butter in a pot — sauté garlic 1 minute.','Add broccoli and broth — simmer 8–10 minutes until tender.','Stir in heavy cream and cheese until melted and smooth.','Blend partially with immersion blender for creaminess. Season and serve hot.'],
   tip:'Use a large pot or slow cooker for batches. Refrigerates 4 days. Freezes up to 2 months.'},
  {id:'keto_choc_mousse',tier:'plus', emoji:'🍫', name:'Keto Chocolate Avocado Mousse', kcal:240, costPP:8, feel:'Silky, rich and genuinely surprising — healthy fat masquerading as dessert.',
   badges:['🥑 Keto Dessert','🍫 Low-Sugar','🥥 Healthy Fat'],
   base300:[{n:'Ripe avocado',pp:75,u:'g'},{n:'Unsweetened cocoa powder',pp:15,u:'g'},{n:'Heavy cream',pp:30,u:'ml'},{n:'Coconut oil (melted)',pp:10,u:'g'},{n:'Vanilla extract',pp:5,u:'ml'},{n:'Stevia or monk fruit sweetener (to taste)',pp:2,u:'g'}],
   method:['Blend avocado, cocoa, cream, melted coconut oil, vanilla, salt and sweetener until smooth.','Taste and adjust sweetness.','Chill in bowls or jars for 30+ minutes.','Serve cold.'],
   tip:'Portion into small cups for dessert table at gatherings. Refrigerates up to 3 days. Do not freeze.'},
];

const WEIGHTLOSS_RECIPES = [
  {id:'wl_greekbowl',   tier:'free',  emoji:'🥫', name:'Greek Yoghurt Power Bowl',   kcal:280, costPP:23, feel:'Cool, tangy and strangely satisfying — fills you up without the guilt.',
   badges:['🥗 Low-Cal','💪 Protein','⚡ 5 min'],
   base300:[{n:'Low-fat Greek yoghurt',pp:200,u:'g'},{n:'Cucumber (diced)',pp:80,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Kalamata olives',pp:20,u:'g'},{n:'Feta cheese (crumbled)',pp:20,u:'g'},{n:'Olive oil drizzle',pp:5,u:'ml'}],
   method:['Spoon yoghurt into bowl.','Top with cucumber, tomatoes and olives.','Crumble feta over the top. Drizzle with olive oil.','Season with black pepper. Eat immediately.'],
   tip:'Swap feta for hummus to drop calories further. Keeps well — prep the veg ahead.'},
  {id:'wl_eggsoup',     tier:'free',  emoji:'🥚', name:'Egg Drop Vegetable Soup',    kcal:190, costPP:38, feel:'Warm and gentle — like a reset button in a bowl.',
   badges:['🍵 Low-Cal','🥦 Veg','⚡ Quick'],
   base300:[{n:'Vegetable stock',pp:400,u:'ml'},{n:'Baby spinach',pp:80,u:'g'},{n:'Eggs (beaten)',pp:2,u:''},{n:'Spring onions (sliced)',pp:30,u:'g'},{n:'Fresh ginger (grated)',pp:3,u:'g'},{n:'Soy sauce (low sodium)',pp:10,u:'ml'}],
   method:['Bring stock to a gentle boil. Add ginger and soy sauce.','Add spinach — it wilts in 1 min.','Slowly drizzle in beaten eggs while stirring gently — they cook in ribbons.','Serve hot, topped with spring onions.'],
   tip:'Do not boil vigorously when adding egg — you want wispy ribbons, not scrambled egg shreds.'},
  {id:'wl_turkey',      tier:'free',  emoji:'🍗', name:'Turkey Lettuce Wraps',       kcal:240, costPP:34, feel:'Crunchy, fresh and fun to eat — no one misses the tortilla.',
   badges:['🥬 Low-Cal','🍗 Lean Protein','🌶️ Flavourful'],
   base300:[{n:'Turkey mince',pp:150,u:'g'},{n:'Iceberg lettuce leaves (large)',pp:4,u:''},{n:'Red pepper (diced)',pp:60,u:'g'},{n:'Spring onions',pp:30,u:'g'},{n:'Soy sauce',pp:10,u:'ml'},{n:'Sesame oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:3,u:'g'}],
   method:['Cook turkey mince in a pan with sesame oil, breaking apart — 6 min.','Add garlic, red pepper and spring onion. Cook 3 min.','Add soy sauce. Stir and remove from heat.','Spoon into lettuce cups. Serve immediately.'],
   tip:'Finish with a drizzle of chilli sauce if you like heat. Serve on a platter — people love assembling their own.'},
  {id:'wl_broccolisoup', tier:'free',  emoji:'🥦', name:'Broccoli & Leek Soup',      kcal:175, costPP:32, feel:'Smooth and velvety — hard to believe it\'s mostly vegetables.',
   badges:['🥦 Low-Cal','🌱 Vegan','💚 Filling'],
   base300:[{n:'Broccoli florets',pp:250,u:'g'},{n:'Leek (sliced)',pp:100,u:'g'},{n:'Vegetable stock',pp:500,u:'ml'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Sauté leek and garlic in olive oil 4 min.','Add broccoli and stock. Bring to boil, simmer 12 min.','Blend until smooth. Season generously with salt and pepper.','Serve hot with a squeeze of lemon if available.'],
   tip:'Add a tablespoon of Greek yoghurt for creaminess without the calories. Freezes perfectly.'},
  {id:'wl_tuna',        tier:'plus',  emoji:'🐟', name:'Tuna-Stuffed Baby Peppers',  kcal:195, costPP:36, feel:'Snappy bite of colour and protein — perfect for meal prep.',
   badges:['🫑 Low-Cal','🐟 Protein','🌶️ Finger Food'],
   base300:[{n:'Baby peppers (halved, deseeded)',pp:6,u:''},{n:'Canned tuna (drained)',pp:120,u:'g'},{n:'Low-fat cottage cheese',pp:60,u:'g'},{n:'Celery (finely diced)',pp:30,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Chives or spring onion',pp:10,u:'g'}],
   method:['Mix tuna, cottage cheese, celery, lemon juice and chives together.','Season with salt and pepper to taste.','Spoon filling into halved peppers.','Serve cold. Keeps in fridge 2 days.'],
   tip:'Swap cottage cheese for Greek yoghurt if preferred. Makes a great lunchbox filler.'},
  {id:'wl_egg_white',   tier:'free',  emoji:'🥚', name:'Lemon Herb Egg White Scramble',kcal:200, costPP:56, feel:'Light and fresh — high protein without the yolk calories.',
   badges:['⚖️ Low-Cal','🥚 High-Protein','⚡ Quick'],
   base300:[{n:'Egg whites',pp:200,u:'g'},{n:'Fresh spinach',pp:100,u:'g'},{n:'Mushrooms (sliced)',pp:80,u:'g'},{n:'Bell pepper (diced)',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat olive oil in a non-stick pan over medium.','Sauté garlic, mushrooms and bell pepper for 4–5 minutes.','Add spinach and cook until wilted (1–2 minutes).','Pour in egg whites, lemon juice, herbs and pepper. Stir gently until set.'],
   tip:'Prep veggies ahead for fast morning meals. Pairs well with sliced tomatoes.'},
  {id:'wl_tuna_boats',  tier:'free',  emoji:'🥒', name:'Tuna Cucumber Boat Salad',    kcal:180, costPP:26, feel:'Cool, crunchy and clever — a meal disguised as a snack.',
   badges:['⚖️ Low-Cal','🥒 Hydrating','🐟 Lean Protein'],
   base300:[{n:'Canned tuna in water (drained)',pp:100,u:'g'},{n:'Cucumbers (halved, scooped)',pp:400,u:'g'},{n:'Cherry tomatoes (halved)',pp:100,u:'g'},{n:'Celery (diced)',pp:50,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Mix tuna, diced celery, tomatoes, lemon juice, olive oil, dill and pepper in a bowl.','Scoop seeds from cucumber halves to create boats.','Fill generously with tuna mixture.','Chill 10 minutes before serving cold.'],
   tip:'Perfect portable lunch for busy days. Keep filling separate for longer storage.'},
  {id:'wl_cabbage_soup', tier:'free', emoji:'🥬', name:'Spicy Cabbage Lentil Soup',   kcal:210, costPP:16, feel:'Hearty, filling and incredibly low-calorie — soup that actually satisfies.',
   badges:['⚖️ Low-Cal','🌶️ Spiced','🥬 High-Fibre'],
   base300:[{n:'Dry red lentils (rinsed)',pp:60,u:'g'},{n:'Low-sodium vegetable broth',pp:300,u:'ml'},{n:'Cabbage (shredded)',pp:150,u:'g'},{n:'Carrots (sliced)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Ground turmeric',pp:2,u:'g'}],
   method:['Heat oil in a pot. Sauté garlic, ginger and chilli for 1 minute.','Add carrots, cabbage and lentils — stir 2 minutes.','Pour in broth and turmeric. Bring to boil, then simmer 20–25 minutes until lentils soften.','Serve hot, optionally partially blended.'],
   tip:'Make a big batch on weekends for easy weekday lunches. Freezes up to 3 months.'},
  {id:'wl_grilled_chicken',tier:'free',emoji:'🍗',name:'Grilled Lemon Chicken & Asparagus',kcal:230, costPP:19, feel:'Clean and perfectly seasoned — lean protein with zero compromise.',
   badges:['⚖️ Low-Cal','🍗 Lean Protein','💪 Muscle-Friendly'],
   base300:[{n:'Chicken breast (thin sliced)',pp:120,u:'g'},{n:'Asparagus spears',pp:200,u:'g'},{n:'Lemon juice + zest',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh rosemary',pp:2,u:'g'}],
   method:['Mix lemon juice, zest, olive oil, garlic, rosemary and pepper.','Marinate chicken and asparagus for 10–15 minutes.','Grill or pan-sear chicken 4–5 minutes per side and asparagus 6–8 minutes.','Serve hot with a large mixed green salad.'],
   tip:'Batch grill for multiple meals. Refrigerates up to 3 days.'},
  {id:'wl_cauliflower_stew',tier:'free',emoji:'🥦',name:'Cauliflower Chickpea Stew',   kcal:210, costPP:30, feel:'Surprisingly filling for the calories — fibre-rich food doing its job.',
   badges:['⚖️ Low-Cal','🥦 High-Fibre','🌿 Spiced'],
   base300:[{n:'Cauliflower florets',pp:150,u:'g'},{n:'Cooked chickpeas',pp:80,u:'g'},{n:'Vegetable broth',pp:300,u:'ml'},{n:'Chopped tomatoes (canned)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Ground cumin and turmeric',pp:3,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat oil — sauté garlic and spices 1 minute.','Add cauliflower, chickpeas and tomatoes.','Pour in broth and simmer 15–18 minutes until tender.','Serve hot.'],
   tip:'Slow cooker friendly. Refrigerates up to 4 days. Freezes up to 3 months.'},
  {id:'wl_chia_apple',   tier:'free', emoji:'🥫', name:'Apple Cinnamon Chia Pudding', kcal:180, costPP:3, feel:'Naturally sweet, creamy and filling — a dessert that earns its place.',
   badges:['⚖️ Low-Cal','🌾 High-Fibre','⏱️ Make Ahead'],
   base300:[{n:'Chia seeds',pp:15,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Apple (grated)',pp:80,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['Mix chia seeds, almond milk, lemon juice and cinnamon in a jar.','Stir well and let sit 5 minutes — stir again.','Fold in grated apple.','Refrigerate overnight. Serve cold.'],
   tip:'Make jars in advance. Refrigerates up to 4 days. Add extra cinnamon to serve.'},
];

const HIGHPROTEIN_RECIPES = [
  {id:'hp_chickenchest',tier:'free',  emoji:'🍗', name:'Herb-Grilled Chicken Breast', kcal:310, costPP:24, feel:'Clean, satisfying, and perfectly seasoned — protein that doesn\'t feel like a punishment.',
   badges:['💪 High-Protein','🍗 Lean','⚡ Quick'],
   base300:[{n:'Chicken breast',pp:200,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Garlic powder',pp:2,u:'g'},{n:'Smoked paprika',pp:2,u:'g'},{n:'Dried thyme',pp:1,u:'g'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Pound chicken to even thickness — about 2cm — so it cooks evenly.','Mix oil and all spices. Coat chicken thoroughly.','Grill or pan-fry 4–5 min per side over medium-high heat.','Rest 3 min before slicing. Serves with salad or veg.'],
   tip:'Do not skip resting — it keeps the juices in. Cold leftover chicken slices are great in wraps.'},
  {id:'hp_eggs',        tier:'free',  emoji:'🥚', name:'Scrambled Eggs with Cottage Cheese', kcal:290, costPP:13, feel:'Creamier than you expect — the cottage cheese melts right in.',
   badges:['🥚 High-Protein','🧀 Creamy','⚡ 8 min'],
   base300:[{n:'Eggs',pp:3,u:''},{n:'Cottage cheese',pp:80,u:'g'},{n:'Butter',pp:10,u:'g'},{n:'Chives (chopped)',pp:5,u:'g'},{n:'Salt & white pepper',pp:1,u:'pinch'}],
   method:['Beat eggs with cottage cheese. Season.','Melt butter in pan over low heat.','Add egg mixture. Stir gently and continuously — low and slow.','Remove from heat while still slightly underdone — residual heat finishes them. Top with chives.'],
   tip:'The key is LOW heat. High heat toughens eggs. 3–4 min of patient stirring beats 1 min of rubbery scramble.'},
  {id:'hp_lentil',      tier:'free',  emoji:'🫘', name:'Red Lentil Dhal',             kcal:380, costPP:19, feel:'Deeply warming and earthy — a bowl that feels like a hug.',
   badges:['🫘 Plant Protein','💪 High-Protein','🌱 Vegan'],
   base300:[{n:'Red lentils (dried)',pp:100,u:'g'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Vegetable stock',pp:400,u:'ml'},{n:'Onion (diced)',pp:80,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Ground cumin',pp:3,u:'g'},{n:'Turmeric',pp:2,u:'g'},{n:'Coconut oil',pp:10,u:'ml'}],
   method:['Sauté onion in coconut oil 5 min. Add garlic, cumin and turmeric — 1 min.','Rinse lentils. Add to pot with tomatoes and stock.','Bring to boil, reduce heat, simmer 20 min stirring occasionally.','Season generously. Serve with rice or flatbread.'],
   tip:'Red lentils break down and thicken naturally — no need to blend. Goes further with a squeeze of lemon.'},
  {id:'hp_biltong',     tier:'free',  emoji:'🥩', name:'Biltong & Bean Protein Plate', kcal:420, costPP:71, feel:'Proudly South African and powerfully nutritious. No excuses for a bad gym session.',
   badges:['🇿🇦 SA Classic','💪 High-Protein','🥩 Iron-Rich'],
   base300:[{n:'Sliced biltong',pp:80,u:'g'},{n:'Canned chickpeas (drained)',pp:120,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Red onion (thinly sliced)',pp:40,u:'g'},{n:'Lemon dressing (oil + lemon)',pp:20,u:'ml'},{n:'Feta cheese',pp:30,u:'g'}],
   method:['Combine chickpeas, spinach and red onion in bowl.','Drizzle with lemon dressing. Toss gently.','Arrange biltong strips on top.','Crumble feta over. Serve immediately.'],
   tip:'Wet biltong works better here — adds moisture. Droëwors bits are great stirred through for crunch.'},
  {id:'hp_grilled_chicken',tier:'free',emoji:'🍗',name:'Lemon Garlic Grilled Chicken & Broccoli',kcal:300, costPP:42, feel:'Clean, lean and properly seasoned — protein that doesn\'t feel like a compromise.',
   badges:['💪 High-Protein','🍗 Lean','⚡ Quick'],
   base300:[{n:'Chicken breast (boneless)',pp:150,u:'g'},{n:'Broccoli florets',pp:200,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice + zest',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'},{n:'Fresh herbs (rosemary/thyme)',pp:3,u:'g'}],
   method:['Mix lemon juice, zest, olive oil, minced garlic, herbs and pepper for marinade.','Coat chicken and broccoli in the marinade — let sit 10–15 minutes.','Grill or pan-sear chicken 5–6 minutes per side until cooked through (75°C internal).','Grill or steam broccoli 6–8 minutes until tender-crisp. Serve hot.'],
   tip:'Prepare marinade in advance. Cold leftover chicken slices are great in wraps.'},
  {id:'hp_tuna_yogurt',  tier:'free', emoji:'🥫', name:'Tuna Greek Yogurt Salad Bowl', kcal:280, costPP:41, feel:'Creamy, tangy and packed with protein — a bowl that actually keeps you full.',
   badges:['💪 High-Protein','🥛 Probiotics','🥗 Quick'],
   base300:[{n:'Canned tuna in water (drained)',pp:120,u:'g'},{n:'Plain Greek yogurt (5% fat)',pp:150,u:'g'},{n:'Cucumber (diced)',pp:100,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Celery (diced)',pp:50,u:'g'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh dill',pp:3,u:'g'}],
   method:['In a bowl, mix Greek yogurt, lemon juice, dill and black pepper.','Add drained tuna and break apart while mixing.','Gently fold in diced cucumber, tomatoes and celery.','Chill for 10–15 minutes. Serve cold.'],
   tip:'Great for meal prep — portion into jars for grab-and-go lunches. Refrigerates up to 2 days.'},
  {id:'hp_turkey_meatballs',tier:'free',emoji:'🍗',name:'Baked Turkey Meatballs & Spinach',kcal:310, costPP:43, feel:'Tender, herby and satisfying — lean meatballs that don\'t compromise on flavour.',
   badges:['💪 High-Protein','🍗 Lean Turkey','🌿 Iron-Rich'],
   base300:[{n:'Lean ground turkey',pp:150,u:'g'},{n:'Fresh spinach (chopped)',pp:100,u:'g'},{n:'Egg',pp:1,u:''},{n:'Onion (finely chopped)',pp:10,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Dried oregano and parsley',pp:2,u:'g'}],
   method:['Preheat oven to 200°C. Line baking tray with parchment.','Sauté onion and garlic in olive oil 2 minutes. Add spinach and wilt.','Combine turkey, egg, sautéed mixture, herbs and pepper. Mix well.','Form into meatballs and bake 18–22 minutes. Serve hot.'],
   tip:'Double the batch and freeze half. Pairs well with zucchini noodles or a simple tomato sauce.'},
  {id:'hp_salmon_chickpea',tier:'plus',emoji:'🐟',name:'Salmon Chickpea Salad',        kcal:330, costPP:38, feel:'Omega-3s meet plant protein — two of the best ingredients you can eat, together.',
   badges:['💪 High-Protein','🐟 Omega-3','🫘 Plant Protein'],
   base300:[{n:'Cooked salmon (flaked)',pp:100,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Mixed greens',pp:100,u:'g'},{n:'Cucumber and cherry tomatoes',pp:80,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh parsley',pp:3,u:'g'}],
   method:['Whisk olive oil, lemon juice, parsley and pepper for dressing.','In a large bowl, combine flaked salmon, chickpeas, greens, cucumber and tomatoes.','Drizzle dressing and toss gently just before serving.','Serve chilled.'],
   tip:'Ideal for high-protein lunch platters at events. Refrigerate undressed components up to 2 days.'},
  {id:'hp_lentil_chili',  tier:'free', emoji:'🫘', name:'Lentil Turkey Chilli',         kcal:340, costPP:20, feel:'Rich, spiced and deeply filling — a chilli that\'s actually good for you.',
   badges:['💪 High-Protein','🫘 Plant Protein','🌶️ Warming'],
   base300:[{n:'Lean ground turkey',pp:100,u:'g'},{n:'Dry green lentils (rinsed)',pp:60,u:'g'},{n:'Low-sodium broth',pp:300,u:'ml'},{n:'Chopped tomatoes',pp:100,u:'g'},{n:'Bell pepper and onion',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Chilli powder and ground cumin',pp:4,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat oil in a pot. Brown turkey with garlic, onion and spices for 5 minutes.','Add bell pepper, tomatoes, lentils and broth.','Bring to boil, then simmer 25–30 minutes until lentils are tender.','Adjust seasoning and serve hot.'],
   tip:'Use a slow cooker on low for 6–8 hours for effortless large batches. Add a dollop of Greek yogurt to serve.'},
  {id:'hp_cottage',     tier:'plus',  emoji:'🥫', name:'High-Protein Cottage Bowls',  kcal:340, costPP:20, feel:'Building-block eating — satisfying in the most practical way.',
   badges:['🧀 High-Protein','🥗 Low-Carb','⚡ 5 min'],
   base300:[{n:'Cottage cheese',pp:200,u:'g'},{n:'Cucumber (sliced)',pp:100,u:'g'},{n:'Sundried tomatoes',pp:30,u:'g'},{n:'Pumpkin seeds',pp:20,u:'g'},{n:'Olive oil drizzle',pp:5,u:'ml'},{n:'Fresh basil',pp:3,u:'g'}],
   method:['Spoon cottage cheese into bowl.','Arrange cucumber and sundried tomatoes around and on top.','Scatter pumpkin seeds. Drizzle with olive oil.','Finish with fresh basil and cracked pepper.'],
   tip:'Add a soft-boiled egg for extra protein. Works as breakfast, snack or light meal.'},
];

const PLANTBASED_RECIPES = [
  {id:'pb_buddha',      tier:'free',  emoji:'🥣', name:'Rainbow Buddha Bowl',         kcal:420, costPP:22, feel:'Colourful and alive — like eating sunshine on a plate.',badges:['🌱 Vegan','🥣 Whole-Food','🌈 Nourishing'],base300:[{n:'Cooked brown rice or quinoa',pp:150,u:'g'},{n:'Roasted chickpeas',pp:80,u:'g'},{n:'Roasted sweet potato (cubed)',pp:100,u:'g'},{n:'Shredded red cabbage',pp:60,u:'g'},{n:'Avocado (sliced)',pp:60,u:'g'},{n:'Tahini dressing',pp:30,u:'ml'}],method:['Roast cubed sweet potato at 200°C for 20 min with olive oil and salt.','Roast chickpeas same tray — add at the 10-min mark.','Build bowl: rice base, then arrange sweet potato, chickpeas, cabbage, avocado.','Drizzle with tahini dressing. Eat while still warm.'],tip:'Tahini dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 tsp garlic, enough water to drizzle.'},
  {id:'pb_tofu',        tier:'free',  emoji:'🟡', name:'Crispy Tofu Stir-Fry',        kcal:370, costPP:20, feel:'Golden crispy tofu — this might convert the sceptics.',badges:['🌱 Vegan','🟡 Protein','🥢 Asian-Inspired'],base300:[{n:'Firm tofu (pressed, cubed)',pp:180,u:'g'},{n:'Broccoli florets',pp:120,u:'g'},{n:'Carrot (sliced thin)',pp:60,u:'g'},{n:'Soy sauce',pp:20,u:'ml'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Garlic (minced)',pp:3,u:'g'}],method:['Press tofu in a clean cloth for 15 min to remove moisture.','Cube and pan-fry in hot oil 3–4 min per side until golden. Remove.','Stir-fry ginger and garlic 30 sec. Add veg — 4 min.','Return tofu. Add soy sauce and sesame oil. Toss. Serve with rice.'],tip:'Pressing tofu is non-negotiable for crispiness.'},
  {id:'pb_chakalaka',   tier:'free',  emoji:'🌶️', name:'Chakalaka Stuffed Gems',     kcal:295, costPP:20, feel:'Fiery, saucy, unmistakably South African.',badges:['🇿🇦 SA Classic','🌱 Vegan','🌶️ Spicy'],base300:[{n:'Baby gem squash',pp:2,u:''},{n:'Canned baked beans',pp:120,u:'g'},{n:'Canned tomatoes',pp:80,u:'g'},{n:'Carrot (grated)',pp:60,u:'g'},{n:'Onion (finely diced)',pp:60,u:'g'},{n:'Green pepper (diced)',pp:40,u:'g'},{n:'Curry powder',pp:4,u:'g'},{n:'Sunflower oil',pp:10,u:'ml'}],method:['Halve and boil gem squash 15 min until just tender. Scoop out seeds.','Sauté onion, carrot and green pepper in oil — 6 min.','Add curry powder 1 min, then tomatoes and beans. Simmer 10 min.','Spoon chakalaka into gem squash halves. Serve hot.'],tip:'Make the chakalaka a day ahead — it tastes better.'},
  {id:'pb_lentilcurry', tier:'plus',  emoji:'🍛', name:'Coconut Lentil Curry',        kcal:440, costPP:42, feel:'Rich, creamy, fragrant — the kind of curry you make again the next week.',badges:['🌱 Vegan','🫘 Protein','🥥 Rich'],base300:[{n:'Green or brown lentils (dried)',pp:100,u:'g'},{n:'Coconut milk',pp:150,u:'ml'},{n:'Vegetable stock',pp:300,u:'ml'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Onion (diced)',pp:80,u:'g'},{n:'Garlic (3 cloves)',pp:9,u:'g'},{n:'Curry powder',pp:8,u:'g'},{n:'Spinach',pp:60,u:'g'}],method:['Sauté onion in oil 5 min. Add garlic and curry powder — 1 min.','Add lentils, tomatoes, stock. Bring to boil, simmer 25 min.','Stir in coconut milk. Simmer 5 min more.','Add spinach, cook 1 min until wilted. Season and serve with rice.'],tip:'Brown lentils hold their shape better than red.'},
  {id:'pb_chickpea_bowl',tier:'free', emoji:'🥣', name:'Chickpea Avocado Power Bowl',  kcal:340, costPP:45, feel:'Colourful and alive — like eating sunshine in a bowl.',badges:['🌱 Vegan','🥣 Whole-Food','💪 Plant Protein'],base300:[{n:'Cooked chickpeas',pp:120,u:'g'},{n:'Avocado (diced)',pp:75,u:'g'},{n:'Mixed greens',pp:100,u:'g'},{n:'Cherry tomatoes and cucumber (diced)',pp:100,u:'g'},{n:'Red onion (sliced)',pp:40,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],method:['Whisk olive oil, lemon juice, parsley and black pepper for dressing.','In a large bowl, combine chickpeas, diced avocado, greens, tomatoes, cucumber and onion.','Drizzle dressing and toss gently just before serving.','Serve chilled.'],tip:'Prep ingredients separately for customisable bowls at gatherings.'},
  {id:'pb_lentil_soup',  tier:'free', emoji:'🍲', name:'Spicy Lentil Vegetable Soup',  kcal:260, costPP:33, feel:'Warming and deeply filling — plant protein that keeps you going all afternoon.',badges:['🌱 Vegan','🫘 High-Protein','🌶️ Spiced'],base300:[{n:'Dry red lentils (rinsed)',pp:70,u:'g'},{n:'Vegetable broth',pp:350,u:'ml'},{n:'Carrots (sliced)',pp:100,u:'g'},{n:'Zucchini/baby marrow (diced)',pp:100,u:'g'},{n:'Spinach',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Ground cumin',pp:2,u:'g'},{n:'Chilli flakes',pp:1,u:'g'}],method:['Heat oil in a pot. Sauté garlic, ginger and spices for 1 minute.','Add carrots, zucchini and lentils — stir 2 minutes.','Pour in broth and bring to boil, then simmer 20–25 minutes.','Stir in spinach for last 3 minutes. Serve hot with lemon wedges.'],tip:'Freezes up to 3 months.'},
  {id:'pb_tofu_skewers', tier:'free', emoji:'🍢', name:'Marinated Tofu Veggie Skewers', kcal:280, costPP:20, feel:'Charred edges and juicy centres — even the braai crowd will come back for seconds.',badges:['🌱 Vegan','🟡 Plant Protein','🔥 Grill-Friendly'],base300:[{n:'Firm tofu (cubed)',pp:150,u:'g'},{n:'Bell peppers and zucchini (chunked)',pp:150,u:'g'},{n:'Cherry tomatoes',pp:100,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Low-sodium tamari',pp:10,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Smoked paprika',pp:2,u:'g'}],method:['Mix olive oil, tamari, garlic and herbs for marinade.','Toss tofu and vegetables in marinade — let sit 15–20 minutes.','Thread onto skewers.','Grill or bake at 200°C for 12–15 minutes, turning halfway.'],tip:'Assemble skewers ahead for quick grilling at gatherings.'},
  {id:'pb_quinoa_salad', tier:'free', emoji:'🥗', name:'Quinoa Black Bean Salad',       kcal:330, costPP:28, feel:'Hearty, filling and colourful — a plant salad that actually satisfies.',badges:['🌱 Vegan','🌾 Complete Protein','🥗 Crowd Pleaser'],base300:[{n:'Cooked quinoa',pp:80,u:'g'},{n:'Cooked black beans',pp:100,u:'g'},{n:'Corn kernels (fresh or thawed)',pp:100,u:'g'},{n:'Cherry tomatoes and avocado (diced)',pp:100,u:'g'},{n:'Mixed greens',pp:80,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Lime juice',pp:10,u:'ml'},{n:'Ground cumin',pp:2,u:'g'}],method:['Whisk olive oil, lime juice, fresh coriander and cumin for dressing.','Combine quinoa, black beans, corn, tomatoes, avocado and greens.','Toss with dressing just before serving.','Serve chilled.'],tip:'Excellent for potlucks — scales easily.'},
  {id:'pb_cauliflower_curry',tier:'plus',emoji:'🍛',name:'Creamy Cauliflower Chickpea Curry',kcal:300, costPP:48, feel:'Velvety, spiced and rich — plant-based comfort at its best.',badges:['🌱 Vegan','🥥 Creamy','🌶️ Warming'],base300:[{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cauliflower florets',pp:200,u:'g'},{n:'Light coconut milk',pp:150,u:'ml'},{n:'Chopped tomatoes (canned)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Curry powder',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],method:['Heat oil — sauté garlic, ginger and spices for 1 minute.','Add cauliflower and tomatoes — cook 4 minutes.','Add chickpeas and coconut milk — simmer 12–15 minutes until tender.','Serve hot with brown rice or greens.'],tip:'Refrigerates up to 4 days. Freezes up to 2 months.'},
  {id:'pb_stuffed_peppers',tier:'free',emoji:'🫑',name:'Mushroom Lentil Stuffed Peppers',kcal:280, costPP:49, feel:'Vibrant, earthy and satisfying — a meal that looks as good as it tastes.',badges:['🌱 Vegan','🫘 Plant Protein','🫑 Colourful'],base300:[{n:'Bell peppers (halved)',pp:2,u:''},{n:'Cooked lentils',pp:80,u:'g'},{n:'Mushrooms (chopped)',pp:100,u:'g'},{n:'Spinach and onion',pp:50,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Dried mixed herbs',pp:2,u:'g'}],method:['Preheat oven to 200°C. Brush peppers with oil and bake 10 minutes.','Sauté onion, garlic, mushrooms and spinach — mix with cooked lentils and herbs.','Stuff peppers with the mixture.','Bake another 15–20 minutes. Serve hot.'],tip:'Prepare filling ahead. Refrigerates up to 3 days.'},
  {id:'pb_chia_flax',    tier:'free', emoji:'🥫', name:'Berry Chia Flax Pudding',       kcal:240, costPP:14, feel:'Creamy, nutty and berry-bright — omega-3s and fibre working quietly overnight.',badges:['🌱 Vegan','🌾 Omega-3','⏱️ Make Ahead'],base300:[{n:'Chia seeds',pp:20,u:'g'},{n:'Ground flaxseeds',pp:10,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Mixed berries',pp:100,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],method:['Mix chia seeds, flaxseeds, almond milk, cinnamon and lemon juice in a jar.','Stir well and rest 5 minutes — stir again.','Fold in berries.','Refrigerate overnight. Serve cold.'],tip:'Refrigerates up to 4 days.'},
];

const VEGETARIAN_RECIPES = [
  {id:'veg_omelette',    tier:'free',  emoji:'🍳', name:'Veggie Cheese Omelette',       kcal:340, costPP:49, feel:'Golden and pillowy — proper eggs done right, no apologies needed.',badges:['🥚 High-Protein','🧀 Satisfying','⚡ 10 min'],base300:[{n:'Eggs',pp:2,u:''},{n:'Cheddar cheese (grated)',pp:40,u:'g'},{n:'Baby spinach',pp:80,u:'g'},{n:'Mushrooms (sliced)',pp:60,u:'g'},{n:'Red pepper (diced)',pp:50,u:'g'},{n:'Garlic (minced)',pp:2,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],method:['Heat olive oil in a non-stick pan over medium. Sauté garlic, mushrooms and pepper 4 min.','Add spinach — cook until wilted, about 1 min.','Beat eggs with salt and pepper. Pour over the veg.','Sprinkle cheese. Cook 3–4 min, fold omelette and cook 1 min more.'],tip:'Don\'t rush the veg — properly cooked mushrooms add deep savoury flavour.'},
  {id:'veg_shakshuka',   tier:'free',  emoji:'🍅', name:'Shakshuka with Feta',          kcal:280, costPP:40, feel:'Smoky, bubbling and aromatic — the whole kitchen smells incredible.',badges:['🥚 Protein','🌶️ Spiced','🍅 One-Pan'],base300:[{n:'Eggs',pp:2,u:''},{n:'Canned tomatoes',pp:150,u:'g'},{n:'Feta cheese (crumbled)',pp:40,u:'g'},{n:'Red pepper (diced)',pp:80,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Smoked paprika',pp:2,u:'g'},{n:'Olive oil',pp:10,u:'ml'}],method:['Sauté onion and pepper in olive oil 5 min. Add garlic, cumin and paprika — 1 min.','Add tomatoes. Simmer 8–10 min until thick. Season generously.','Make wells and crack eggs in. Cover and cook on low 5–7 min until whites are just set.','Crumble feta over the top. Serve straight from the pan with bread.'],tip:'Runny yolks are the goal — pull off heat while still wobbly.'},
  {id:'veg_caprese',     tier:'free',  emoji:'🧀', name:'Caprese Chickpea Salad',       kcal:295, costPP:18, feel:'Summer on a plate — fresh mozzarella and basil smell like a garden.',badges:['🧀 Protein','🌿 Fresh','🥗 No-Cook'],base300:[{n:'Buffalo mozzarella (torn)',pp:80,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cherry tomatoes (halved)',pp:150,u:'g'},{n:'Fresh basil leaves',pp:10,u:'g'},{n:'Extra virgin olive oil',pp:15,u:'ml'},{n:'Balsamic vinegar',pp:10,u:'ml'}],method:['Halve tomatoes. Drain and rinse chickpeas.','Arrange tomatoes, chickpeas and torn mozzarella on a plate.','Scatter fresh basil leaves.','Drizzle generously with olive oil and balsamic. Season and serve immediately.'],tip:'Real buffalo mozzarella makes a difference here.'},
  {id:'veg_stuffedpep',  tier:'free',  emoji:'🫑', name:'Ricotta-Spinach Stuffed Peppers', kcal:320, costPP:53, feel:'Melt-in-the-mouth filling inside a sweet roasted shell.',badges:['🧀 Creamy','🥚 Protein','🫑 Baked'],base300:[{n:'Bell peppers (large, halved)',pp:1,u:''},{n:'Ricotta cheese',pp:120,u:'g'},{n:'Baby spinach (chopped)',pp:100,u:'g'},{n:'Mozzarella (grated)',pp:40,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Tomato sauce',pp:80,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],method:['Preheat oven 190°C. Brush pepper halves with oil. Bake 10 min.','Sauté garlic and spinach 2 min. Mix with ricotta, salt and pepper.','Spoon filling into peppers. Top with tomato sauce and mozzarella.','Bake 18–22 min until cheese is golden and bubbling.'],tip:'The par-bake is important — raw peppers need too long.'},
  {id:'veg_paneer',      tier:'plus',  emoji:'🍛', name:'Paneer Tikka Skewers',         kcal:310, costPP:26, feel:'Charred edges, creamy centre — the braai recipe that converts meat-eaters.',badges:['🧀 High-Protein','🌶️ Spiced','🔥 Braai-Friendly'],base300:[{n:'Paneer (cubed)',pp:150,u:'g'},{n:'Red and yellow pepper (chunked)',pp:150,u:'g'},{n:'Plain yoghurt',pp:50,u:'g'},{n:'Turmeric',pp:1,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Garam masala',pp:2,u:'g'},{n:'Ginger (grated)',pp:3,u:'g'},{n:'Garlic (minced)',pp:3,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Sunflower oil',pp:10,u:'ml'}],method:['Mix yoghurt, spices, ginger, garlic, lemon and oil into a marinade.','Toss paneer and peppers in marinade. Rest at least 30 min.','Thread onto skewers, alternating paneer and pepper.','Grill or bake at 200°C for 12–15 min, turning halfway.'],tip:'Paneer doesn\'t melt — it gets golden and holds its shape.'},
  {id:'veg_halloumisalad',tier:'free', emoji:'🥗', name:'Halloumi & Quinoa Salad',      kcal:370, costPP:31, feel:'Salty, golden halloumi against nutty quinoa — a proper main course salad.',badges:['🧀 Protein','🌾 Wholesome','🥗 Filling'],base300:[{n:'Halloumi (sliced)',pp:80,u:'g'},{n:'Cooked quinoa',pp:100,u:'g'},{n:'Mixed greens',pp:80,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Cucumber (sliced)',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],method:['Cook quinoa per packet. Cool slightly.','Slice halloumi 1cm thick. Grill or pan-fry in a dry pan 2 min per side until golden.','Whisk olive oil and lemon juice for dressing.','Build salad: greens, quinoa, tomatoes, cucumber. Top with warm halloumi. Drizzle dressing.'],tip:'Halloumi must be eaten hot — it becomes rubbery when cold.'},
  {id:'veg_chickpea_salad',tier:'free',emoji:'🥫',name:'Greek Yogurt Chickpea Salad',   kcal:300, costPP:33, feel:'Cool, tangy and satisfying — probiotics and protein in one bowl.',badges:['🧀 Protein','🦠 Probiotics','🥗 Refreshing'],base300:[{n:'Plain Greek yogurt',pp:150,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cucumber and cherry tomatoes (diced)',pp:100,u:'g'},{n:'Red onion (sliced)',pp:50,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh dill',pp:3,u:'g'}],method:['Whisk olive oil, lemon juice, dill and pepper.','In a bowl, combine chickpeas, cucumber, tomatoes and onion.','Fold in Greek yogurt and dressing gently.','Chill 10 minutes before serving cold.'],tip:'Refrigerates up to 2 days. Pairs well with pita bread.'},
  {id:'veg_broccoli_lentil',tier:'free',emoji:'🥦',name:'Cheesy Broccoli Lentil Bake', kcal:310, costPP:36, feel:'Golden, bubbling and deeply comforting — the kind of bake you go back to twice.',badges:['🧀 Calcium','🫘 Plant Protein','🥦 High-Fibre'],base300:[{n:'Cooked lentils',pp:80,u:'g'},{n:'Broccoli florets (steamed)',pp:150,u:'g'},{n:'Cheddar cheese (grated)',pp:50,u:'g'},{n:'Milk',pp:100,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],method:['Preheat oven to 200°C. Steam broccoli 5 minutes.','Mix lentils, broccoli, milk, garlic, herbs and half the cheese.','Transfer to baking dish, top with remaining cheese.','Bake 18–22 minutes until bubbly and golden.'],tip:'Refrigerates up to 4 days. Freezes up to 2 months.'},
  {id:'veg_avocado_toast',tier:'free', emoji:'🥑', name:'Egg & Avocado Toast Bowl',     kcal:330, costPP:19, feel:'A simple breakfast that punches well above its ingredients.',badges:['🥚 Protein','🥑 Healthy Fats','⚡ 15 min'],base300:[{n:'Eggs (hard-boiled, sliced)',pp:2,u:''},{n:'Avocado (mashed)',pp:75,u:'g'},{n:'Cherry tomatoes',pp:80,u:'g'},{n:'Cucumber',pp:50,u:'g'},{n:'Whole grain bread (toasted)',pp:60,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],method:['Hard-boil eggs for 8–10 minutes, cool and slice.','Mash avocado with lemon juice and fresh herbs.','Chop vegetables.','Layer on toasted bread or in bowls. Serve cold.'],tip:'Refrigerate components up to 2 days.'},
  {id:'veg_stuffed_shells',tier:'plus',emoji:'🍝',name:'Spinach Ricotta Stuffed Shells', kcal:360, costPP:37, feel:'Creamy, saucy and Italian-comforting — the vegetarian showstopper.',badges:['🧀 Creamy','🌿 Iron-Rich','🍝 Comfort Food'],base300:[{n:'Large pasta shells (cooked)',pp:80,u:'g'},{n:'Ricotta cheese',pp:120,u:'g'},{n:'Spinach (chopped)',pp:100,u:'g'},{n:'Mozzarella (grated)',pp:40,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Tomato sauce',pp:80,u:'ml'}],method:['Preheat oven to 190°C. Sauté garlic and spinach.','Mix spinach with ricotta, herbs and pepper.','Stuff shells and place in baking dish with tomato sauce.','Top with mozzarella and bake 20–25 minutes.'],tip:'Refrigerates up to 3 days.'},
  {id:'veg_mushroom_rice',tier:'free', emoji:'🍄', name:'Mushroom Egg Fried Rice',      kcal:330, costPP:31, feel:'Umami-rich and deeply savoury — proper fried rice energy without the guilt.',badges:['🍄 Umami','🥚 Protein','🍚 Satisfying'],base300:[{n:'Cooked brown rice',pp:100,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Mushrooms (sliced)',pp:100,u:'g'},{n:'Peas and carrots (mixed)',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:3,u:'g'},{n:'Low-sodium soy sauce',pp:5,u:'ml'},{n:'Sunflower oil',pp:5,u:'ml'}],method:['Scramble eggs in a little oil — set aside.','Stir-fry garlic, ginger and mushrooms in oil.','Add vegetables, cold rice and soy sauce. Stir-fry 4 minutes on high heat.','Mix in scrambled eggs. Serve hot.'],tip:'Use leftover or day-old rice — fresh rice is too wet for frying.'},
  {id:'veg_quesadilla',  tier:'free',  emoji:'🫓', name:'Cheese & Vegetable Quesadilla',kcal:350, costPP:40, feel:'Melty, crispy and satisfying — one of those meals that disappears too quickly.',badges:['🧀 Protein','🌶️ Flavourful','⚡ 10 min'],base300:[{n:'Whole wheat tortillas',pp:2,u:''},{n:'Cheddar cheese (grated)',pp:50,u:'g'},{n:'Black beans (canned, drained)',pp:80,u:'g'},{n:'Bell pepper and spinach (sautéed)',pp:80,u:'g'},{n:'Sunflower oil',pp:5,u:'ml'}],method:['Sauté vegetables in a little oil.','Fill tortilla with cheese, beans and veggies.','Fold and cook in pan 3 minutes per side until golden and cheese melts.','Serve hot, cut into wedges.'],tip:'Reheat in pan to restore crispiness.'},
  {id:'veg_shakshuka_pdf',tier:'free', emoji:'🍅', name:'Baked Egg & Feta Shakshuka',  kcal:280, costPP:33, feel:'Smoky tomato, salty feta, runny yolk — one-pan magic.',badges:['🥚 Protein','🧀 Feta','🍅 One-Pan'],base300:[{n:'Eggs',pp:2,u:''},{n:'Tomato sauce (canned or homemade)',pp:150,u:'g'},{n:'Feta cheese (crumbled)',pp:40,u:'g'},{n:'Bell pepper and onion (sautéed)',pp:80,u:'g'},{n:'Ground cumin',pp:2,u:'g'},{n:'Smoked paprika',pp:1,u:'g'}],method:['Sauté onion, pepper and spices until soft.','Add tomato sauce and simmer 5 minutes.','Make wells and crack eggs into them.','Top with feta and bake 8–10 minutes at 200°C.'],tip:'Pull from oven while still wobbly — residual heat finishes them.'},
  {id:'veg_berry_ricotta',tier:'free', emoji:'🥫', name:'Berry Ricotta Parfait',        kcal:260, costPP:14, feel:'Light, creamy and beautiful — a dessert that doubles as a healthy breakfast.',badges:['🧀 Protein','🫐 Antioxidants','⚡ 5 min'],base300:[{n:'Ricotta cheese',pp:150,u:'g'},{n:'Mixed berries (fresh)',pp:100,u:'g'},{n:'Chia seeds',pp:10,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'}],method:['Layer ricotta, berries and chia seeds in glasses.','Sprinkle cinnamon between layers.','Chill 15 minutes before serving cold.','Finish with extra berries and a drizzle of honey if desired.'],tip:'Beautiful layered presentation for gatherings.'},
];

const GUTHEALTH_RECIPES = [
  {id:'gh_kimchi_rice',  tier:'free',  emoji:'🍚', name:'Kimchi Fried Rice',           kcal:380, costPP:28, feel:'Funky, warming and alive — your gut flora will love you for it.',badges:['🦠 Probiotics','🌶️ Fermented','🍚 Satisfying'],base300:[{n:'Cooked rice (day-old is best)',pp:200,u:'g'},{n:'Kimchi (chopped)',pp:80,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Spring onions',pp:30,u:'g'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Soy sauce',pp:10,u:'ml'}],method:['Heat sesame oil in wok over high heat. Add cold rice — fry 3 min.','Push rice aside. Scramble eggs in centre, then mix through.','Add kimchi and soy sauce — stir-fry 2 min.','Serve topped with spring onions.'],tip:'Day-old rice fries best — fresh rice is too wet.'},
  {id:'gh_kefir_bowl',   tier:'free',  emoji:'🥛', name:'Kefir & Flaxseed Breakfast',  kcal:310, costPP:14, feel:'Tangy and nourishing — starts your digestive system gently.',badges:['🦠 Probiotics','🌾 Fibre','⚡ 5 min'],base300:[{n:'Plain kefir or Bulgarian yoghurt',pp:250,u:'ml'},{n:'Ground flaxseed',pp:15,u:'g'},{n:'Rolled oats',pp:30,u:'g'},{n:'Banana (sliced)',pp:80,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Blueberries',pp:60,u:'g'}],method:['Pour kefir into bowl.','Stir in flaxseed and oats. Let stand 5 min to soften.','Top with banana slices, blueberries and honey.','Eat immediately.'],tip:'Ground flaxseed beats whole — your gut absorbs the omega-3 far better.'},
  {id:'gh_fibre_soup',   tier:'free',  emoji:'🍲', name:'Black Bean & Veg Soup',       kcal:320, costPP:27, feel:'Thick, hearty and incredibly filling — prebiotic fuel in a bowl.',badges:['🫘 Prebiotic','🌿 High-Fibre','🥘 Warming'],base300:[{n:'Canned black beans (drained)',pp:150,u:'g'},{n:'Vegetable stock',pp:400,u:'ml'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Carrot (diced)',pp:60,u:'g'},{n:'Celery (sliced)',pp:40,u:'g'},{n:'Cumin',pp:3,u:'g'},{n:'Smoked paprika',pp:2,u:'g'}],method:['Sauté onion, carrot and celery in oil — 6 min.','Add cumin and paprika — 1 min.','Add beans, tomatoes and stock. Simmer 20 min.','Blend a third of the soup for creaminess, stir back through.'],tip:'Beans are one of the best prebiotic sources. Do not skip.'},
  {id:'gh_miso_salmon',  tier:'plus',  emoji:'🍜', name:'Miso Soup with Tofu & Nori',  kcal:180, costPP:7, feel:'Umami, soothing and deeply restorative — your gut knows this is good.',badges:['🦠 Probiotics','🌊 Umami','⚡ 10 min'],base300:[{n:'Dashi or vegetable stock',pp:400,u:'ml'},{n:'White miso paste',pp:20,u:'g'},{n:'Silken tofu (cubed)',pp:100,u:'g'},{n:'Dried wakame seaweed',pp:5,u:'g'},{n:'Spring onions (sliced)',pp:20,u:'g'}],method:['Soak wakame in cold water 5 min. Drain.','Heat stock to just below boiling. Do NOT boil miso.','Dissolve miso paste in a ladle of warm stock, stir back into pot.','Add tofu and wakame. Serve topped with spring onions.'],tip:'NEVER boil miso after adding it — high heat kills all the beneficial bacteria.'},
  {id:'gh_kefir_oats',   tier:'free',  emoji:'🥛', name:'Apple Cinnamon Kefir Oats',   kcal:250, costPP:2, feel:'Tangy, sweet and quietly alive — your gut bacteria are having breakfast too.',badges:['🦠 Probiotics','🌾 Prebiotic','⏱️ Make Ahead'],base300:[{n:'Plain kefir (unsweetened, live cultures)',pp:200,u:'ml'},{n:'Rolled oats',pp:40,u:'g'},{n:'Apple (grated)',pp:80,u:'g'},{n:'Ground flaxseeds',pp:5,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],method:['In a jar, combine kefir, rolled oats, grated apple, flaxseeds, cinnamon and lemon juice.','Stir thoroughly for 1 minute.','Cover and refrigerate overnight (minimum 6 hours).','Stir gently before serving cold.'],tip:'Refrigerates up to 4 days.'},
  {id:'gh_bone_broth',   tier:'free',  emoji:'🍲', name:'Turmeric Ginger Bone Broth',  kcal:140, costPP:19, feel:'Ancient and restorative — your gut lining is thanking you with every sip.',badges:['🦠 Gut-Healing','🌿 Anti-Inflam','🍲 Collagen'],base300:[{n:'Bone broth (homemade or low-sodium)',pp:400,u:'ml'},{n:'Mixed vegetables (carrots, celery, spinach)',pp:100,u:'g'},{n:'Fresh ginger (grated)',pp:8,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Fresh parsley',pp:5,u:'g'}],method:['Heat olive oil in a pot over medium. Sauté garlic, ginger and turmeric for 1–2 minutes.','Add chopped carrots and celery — cook 4 minutes.','Pour in bone broth and bring to a gentle simmer for 15 minutes.','Add spinach in the last 3 minutes. Stir in fresh parsley before serving hot.'],tip:'Freeze up to 3 months.'},
  {id:'gh_tempeh_slaw',  tier:'free',  emoji:'🥗', name:'Tempeh Cabbage Slaw',         kcal:270, costPP:19, feel:'Crunchy, nutty and probiotic-rich — a gut-health meal that actually tastes exciting.',badges:['🦠 Probiotics','🌿 Prebiotic','🥗 Fermented'],base300:[{n:'Tempeh (steamed and crumbled)',pp:100,u:'g'},{n:'Shredded cabbage (green or red)',pp:150,u:'g'},{n:'Carrot (grated)',pp:80,u:'g'},{n:'Cucumber (sliced)',pp:50,u:'g'},{n:'Tahini',pp:15,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'}],method:['Steam tempeh for 8–10 minutes, then crumble.','In a large bowl, combine shredded cabbage, grated carrot, cucumber and crumbled tempeh.','Whisk tahini, lemon juice, garlic and a splash of water for a smooth dressing.','Toss salad with dressing and fresh herbs just before serving.'],tip:'Refrigerate undressed components up to 3 days.'},
  {id:'gh_yogurt_lentil',tier:'free',  emoji:'🫘', name:'Spinach Garlic Yogurt Lentils',kcal:260, costPP:34, feel:'Earthy and comforting — one of those meals that feeds you on every level.',badges:['🦠 Probiotics','🌾 Prebiotic','🫘 High-Fibre'],base300:[{n:'Dry green or brown lentils (rinsed)',pp:70,u:'g'},{n:'Vegetable broth',pp:350,u:'ml'},{n:'Fresh spinach',pp:100,u:'g'},{n:'Garlic (minced)',pp:8,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Plain Greek yogurt (stirred in at end)',pp:50,u:'g'}],method:['Heat oil in a pot. Sauté garlic and ginger for 1 minute.','Add lentils and broth — bring to boil, then simmer 20–25 minutes.','Stir in spinach for the last 5 minutes until wilted.','Remove from heat and stir in Greek yogurt. Serve hot.'],tip:'Stir yogurt in OFF the heat to preserve live cultures.'},
  {id:'gh_tempeh_bake',  tier:'plus',  emoji:'🥦', name:'Broccoli Mushroom Tempeh Bake',kcal:280, costPP:36, feel:'Golden, hearty and deeply satisfying — your gut microbiome loves every bite.',badges:['🦠 Probiotics','🥦 Prebiotic','🌿 High-Fibre'],base300:[{n:'Tempeh (cubed)',pp:100,u:'g'},{n:'Broccoli florets',pp:150,u:'g'},{n:'Mushrooms (sliced)',pp:100,u:'g'},{n:'Garlic (minced)',pp:10,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Low-sodium tamari',pp:5,u:'ml'}],method:['Preheat oven to 200°C. Line a baking tray with parchment.','Toss tempeh cubes, broccoli and mushrooms with olive oil, garlic, tamari and herbs.','Spread evenly on the tray.','Bake 18–22 minutes, stirring halfway, until tempeh is golden.'],tip:'Pairs well with sauerkraut or a simple green salad.'},
];

const DIABETIC_RECIPES = [
  {id:'db_oatpancake',   tier:'free',  emoji:'🥞', name:'Oat & Egg Pancakes',          kcal:270, costPP:15, feel:'Hearty and subtly sweet — steady energy, no spike, no crash.',badges:['🩸 Low-GI','🌾 Fibre','⚡ Quick'],base300:[{n:'Rolled oats (blitzed to flour)',pp:60,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Low-fat milk or oat milk',pp:100,u:'ml'},{n:'Cinnamon',pp:2,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'},{n:'Coconut oil for frying',pp:5,u:'ml'}],method:['Blend oats to fine flour. Whisk with eggs, milk, cinnamon and vanilla.','Rest batter 5 min.','Fry in a light-oiled pan over medium heat — 2 min per side.','Serve with fresh berries.'],tip:'Berries are low GI. Use them instead of banana or syrup.'},
  {id:'db_sweetpot',     tier:'free',  emoji:'🍠', name:'Sweet Potato & Chickpea Bowl', kcal:360, costPP:39, feel:'Grounding and filling — the kind of meal that sustains without the afternoon slump.',badges:['🩸 Low-GI','🌱 Plant-Based','🍠 Nutritious'],base300:[{n:'Sweet potato (cubed, roasted)',pp:200,u:'g'},{n:'Canned chickpeas (drained)',pp:120,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Cumin',pp:2,u:'g'},{n:'Feta',pp:25,u:'g'}],method:['Toss sweet potato and chickpeas in oil, cumin, salt. Roast 200°C for 25 min.','Wilt spinach in a warm pan 1 min. Season.','Build bowl: spinach base, sweet potato, chickpeas on top.','Drizzle with lemon. Crumble feta.'],tip:'Sweet potato has a lower GI than white potato.'},
  {id:'db_lentilsoup',   tier:'free',  emoji:'🍲', name:'Green Lentil Soup',            kcal:295, costPP:18, feel:'Steady, earthy warmth — energy that lasts for hours.',badges:['🩸 Low-GI','🫘 Fibre','🌿 Protein'],base300:[{n:'Green lentils (dried)',pp:80,u:'g'},{n:'Vegetable stock',pp:500,u:'ml'},{n:'Carrot (diced)',pp:80,u:'g'},{n:'Celery (sliced)',pp:60,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Turmeric',pp:2,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Olive oil',pp:10,u:'ml'}],method:['Sauté onion in oil 4 min. Add carrot, celery, spices — 2 min.','Rinse lentils, add with stock. Bring to boil, simmer 25 min.','Season generously. Serve with a squeeze of lemon.','Blend half if you prefer a smoother texture.'],tip:'Green lentils have a GI of around 30 — among the lowest of any food.'},
  {id:'db_eggveg',       tier:'plus',  emoji:'🍳', name:'Vegetable Omelette',           kcal:250, costPP:50, feel:'Light but filling — a breakfast that doesn\'t lie to you.',badges:['🩸 Low-GI','🥚 Protein','⚡ 10 min'],base300:[{n:'Eggs',pp:3,u:''},{n:'Baby spinach',pp:60,u:'g'},{n:'Mushrooms (sliced)',pp:80,u:'g'},{n:'Red pepper (diced)',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Feta or goat cheese',pp:25,u:'g'}],method:['Sauté mushrooms and red pepper in oil 4 min. Add spinach — 1 min.','Beat eggs, season. Pour over veg.','Cook on low-medium heat, lifting edges as it sets — 3 min.','Fold. Crumble cheese over.'],tip:'Eggs are essentially zero GI — an ideal diabetic protein.'},
  {id:'db_spinach_eggs', tier:'free',  emoji:'🥬', name:'Lemon Garlic Spinach Egg Scramble',kcal:240, costPP:41, feel:'Fresh, bright and sustaining — exactly what mornings should taste like.',badges:['🩸 Low-GI','🥚 High-Protein','⚡ Quick'],base300:[{n:'Eggs',pp:2,u:''},{n:'Fresh spinach',pp:100,u:'g'},{n:'Mushrooms (sliced)',pp:50,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Extra virgin olive oil',pp:5,u:'ml'},{n:'Black pepper and herbs',pp:1,u:'pinch'}],method:['Heat olive oil in a non-stick pan over medium heat.','Add minced garlic and mushrooms — sauté 3–4 minutes.','Add spinach and cook 1–2 minutes until wilted.','Whisk eggs with lemon juice, pepper and herbs. Pour into pan. Stir gently until just set.'],tip:'Pairs well with sliced avocado.'},
  {id:'db_tuna_wraps',   tier:'free',  emoji:'🥬', name:'Avocado Tuna Lettuce Wraps',   kcal:260, costPP:31, feel:'Crunchy, cool and satisfying — no energy crash afterward.',badges:['🩸 Low-GI','🐟 Omega-3','🥗 Low-Carb'],base300:[{n:'Canned tuna in water (drained)',pp:100,u:'g'},{n:'Avocado (mashed)',pp:75,u:'g'},{n:'Cherry tomatoes (halved)',pp:100,u:'g'},{n:'Cucumber (diced)',pp:50,u:'g'},{n:'Large lettuce leaves',pp:80,u:'g'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],method:['In a bowl, mix tuna, mashed avocado, tomatoes, cucumber, lemon juice, olive oil and dill.','Gently combine until well incorporated.','Spoon mixture evenly into lettuce leaves.','Roll or fold into wraps. Serve chilled.'],tip:'Keep filling and lettuce separate until ready to eat.'},
  {id:'db_salmon_asparagus',tier:'plus',emoji:'🐟',name:'Baked Salmon with Asparagus',  kcal:305, costPP:89, feel:'Clean, elegant and quietly powerful — your blood sugar will thank you.',badges:['🩸 Low-GI','🐟 Omega-3','💪 High-Protein'],base300:[{n:'Salmon fillet',pp:120,u:'g'},{n:'Asparagus spears',pp:150,u:'g'},{n:'Extra virgin olive oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Black pepper and dried rosemary',pp:1,u:'pinch'}],method:['Preheat oven to 200°C. Line a baking tray with parchment paper.','Place salmon and asparagus on tray. Drizzle with olive oil and lemon juice.','Sprinkle minced garlic, pepper and rosemary evenly.','Bake for 12–15 minutes until salmon flakes easily. Rest 1 minute.'],tip:'Pairs well with cauliflower rice or a green salad.'},
];

// ══════════════════════════════════════════════════════════════
// FERMENTED FOODS — split from Gut Health
// ══════════════════════════════════════════════════════════════
const FERMENTED_RECIPES = [
  {id:'fer_sauerkraut',  tier:'free',  emoji:'🥫', name:'Classic Sauerkraut',          kcal:25,  costPP:4,  feel:'Sharp, tangy and alive — the original gut health food.',
   badges:['🦠 Probiotic','🥬 Fermented','⏱️ Make Ahead'],
   base300:[{n:'White cabbage (shredded)',pp:300,u:'g'},{n:'Salt (non-iodised)',pp:7,u:'g'}],
   method:['Shred cabbage finely. Weigh it.','Add 2% salt by weight (7g per 300g cabbage). Massage 10 min until very wet.','Pack tightly into a clean jar — liquid must cover cabbage.','Cover loosely. Leave at room temperature 5–7 days. Taste daily from day 3.','Refrigerate when sour enough. Keeps months.'],
   tip:'Use non-iodised salt — iodine kills the bacteria. The cabbage MUST stay submerged under brine or it goes mouldy.'},
  {id:'fer_kombucha',    tier:'free',  emoji:'🍵', name:'Kombucha (Basic Brew)',        kcal:30,  costPP:3,  feel:'Fizzy, slightly sour, alive — like drinking something that actually does something.',
   badges:['🦠 Probiotic','🍵 Fermented','⏱️ 7–14 days'],
   base300:[{n:'Black or green tea bags',pp:2,u:''},{n:'Sugar',pp:50,u:'g'},{n:'Water (boiled, cooled)',pp:800,u:'ml'},{n:'SCOBY + starter liquid',pp:100,u:'ml'}],
   method:['Brew tea. Add sugar and stir to dissolve. Cool completely to room temperature.','Add SCOBY and starter liquid to a clean jar. Pour in cooled sweet tea.','Cover with a cloth. Leave at room temperature 7–14 days — taste from day 7.','When pleasantly sour, bottle it. Refrigerate.'],
   tip:'Never add hot tea to your SCOBY — it kills it. The starter liquid (from previous batch or store-bought raw kombucha) makes it acidic enough to be safe.'},
  {id:'fer_kefir',       tier:'free',  emoji:'🥛', name:'Milk Kefir',                   kcal:60,  costPP:5,  feel:'Tangy, creamy and slightly fizzy — dairy milk transformed by billions of bacteria.',
   badges:['🦠 Probiotic','🥛 Fermented','⚡ 24 hours'],
   base300:[{n:'Full cream milk',pp:250,u:'ml'},{n:'Kefir grains',pp:1,u:'tbsp'}],
   method:['Place kefir grains in a clean jar. Add milk.','Cover loosely with cloth. Leave at room temperature 24–48 hours.','When thick and tangy, strain out the grains.','Drink the kefir. Rinse grains and start again with fresh milk.'],
   tip:'Kefir grains are alive — never use metal utensils or hot water near them. They grow over time; share the extras.'},
  {id:'fer_kimchi',      tier:'plus',  emoji:'🌶️', name:'Quick Kimchi',                kcal:20,  costPP:8,  feel:'Fiery, funky and complex — South Korea\'s greatest contribution to gut health.',
   badges:['🦠 Probiotic','🌶️ Spicy','🥬 Fermented'],
   base300:[{n:'Napa cabbage / Chinese cabbage (chopped)',pp:300,u:'g'},{n:'Salt',pp:15,u:'g'},{n:'Gochugaru (Korean chilli flakes) or red chilli flakes',pp:10,u:'g'},{n:'Garlic (minced)',pp:8,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Spring onions (sliced)',pp:30,u:'g'},{n:'Fish sauce or soy sauce',pp:10,u:'ml'}],
   method:['Salt cabbage — toss with salt and leave 1–2 hours until wilted. Rinse and squeeze dry.','Mix chilli flakes, garlic, ginger and fish sauce into a paste.','Combine cabbage, spring onions and paste. Mix well with gloved hands.','Pack into jars. Leave at room temperature 1–2 days then refrigerate.','Gets better with age — try it fresh, at 1 week, and at 1 month.'],
   tip:'Gochugaru (Korean chilli flakes) gives authentic flavour — find it at Asian stores. Regular chilli flakes work but taste different. Wear gloves — the paste stains everything.'},
  {id:'fer_amazi',       tier:'free',  emoji:'🥛', name:'Amazi (Fermented Milk)',       kcal:55,  costPP:4,  feel:'Sour, thick and deeply nourishing — a Zulu tradition that predates refrigeration.',
   badges:['🇿🇦 SA Traditional','🦠 Probiotic','🥛 Fermented'],
   base300:[{n:'Full cream milk (raw or pasteurised)',pp:500,u:'ml'}],
   method:['Pour milk into a clean calabash or ceramic container — NOT plastic or metal.','Cover loosely with cloth. Leave at room temperature 2–3 days.','Milk sours and thickens naturally from wild bacteria.','Stir and serve. Keeps refrigerated 5 days.'],
   tip:'Amazi is one of South Africa\'s oldest foods. The wild fermentation creates natural probiotics specific to your environment. Every batch is slightly different — that\'s the point.'},
,
  {id:'fer_juntea',     tier:'plus',  emoji:'🍵', name:'Jun Tea',                      kcal:20,  costPP:4,  feel:'Lighter and more floral than kombucha — green tea honey magic.',
   badges:['🦠 Probiotic','🍵 Fermented','🍯 Honey'],
   base300:[{n:'Green tea bags',pp:2,u:''},{n:'Raw honey (not heated)',pp:50,u:'g'},{n:'Filtered water (boiled, cooled)',pp:800,u:'ml'},{n:'Jun SCOBY + starter liquid',pp:100,u:'ml'}],
   method:['Brew green tea. Cool completely — must be below 30C before adding honey.','Stir in raw honey until dissolved. Do NOT use boiling water — it kills the enzymes.','Add Jun SCOBY and starter. Pour into clean jar.','Cover with cloth. Ferment 7–14 days at room temperature. Refrigerate when ready.'],
   tip:'Jun uses honey instead of sugar and green tea instead of black — lighter and more floral more delicate than kombucha. The SCOBY looks similar but is a different culture. Find Jun starter at health stores or online.'},
  {id:'fer_beetkvass',  tier:'free',  emoji:'🥫', name:'Beet Kvass',                   kcal:30,  costPP:5,  feel:'Dark, earthy and medicinal — an acquired taste that your liver adores.',
   badges:['🦠 Probiotic','🥫 Fermented','🩸 Liver Tonic'],
   base300:[{n:'Raw beetroot (cubed, not peeled)',pp:200,u:'g'},{n:'Non-iodised salt',pp:3,u:'g'},{n:'Filtered water',pp:500,u:'ml'}],
   method:['Wash beetroot well but do NOT peel — the wild bacteria live on the skin.','Cut into small cubes. Place in a clean jar.','Dissolve salt in water. Pour over beetroot — must be submerged.','Cover loosely. Leave at room temperature 3–5 days. Taste daily.','Strain and refrigerate when pleasantly sour. Drink 30–60ml per day.'],
   tip:'Beet kvass is one of the most powerful liver tonics in traditional Eastern European medicine. The colour is extraordinary. Start with small amounts — it can cause detox reactions.'},
  {id:'fer_sourdough',  tier:'plus',  emoji:'🍞', name:'Classic Sourdough Starter',   kcal:30,  costPP:2,  feel:'Alive, bubbly and deeply satisfying — bread that breathes.',
   badges:['🦠 Wild Yeast','🌾 Fermented','🍞 Baker'],
   base300:[{n:'Bread flour or wholewheat flour',pp:100,u:'g'},{n:'Non-chlorinated water (room temperature)',pp:100,u:'ml'}],
   method:['DAY 1: Mix 50g flour + 50ml water in a clean jar. Stir well. Cover loosely. Leave at room temperature.','DAYS 2–5: Each morning discard half the starter. Add 50g flour + 50ml water. Stir well.','By day 4–5: bubbles should be visible within 4–6 hours of feeding.','READY TEST: Drop a spoonful in water — if it floats, active and ready to bake.','Once active, refrigerate and feed once a week.'],
   tip:'Use non-chlorinated water — tap water with chlorine kills the wild yeast. Leave tap water out overnight for the chlorine to off-gas, or use filtered water. Tina personal starter tip: wholewheat flour activates faster than white.'},
  {id:'fer_potato_sourdough', tier:'pro', emoji:'🥔', name:'Potato Sourdough Starter', kcal:35,  costPP:1,  feel:'The SA homestead starter — potato water makes it incredibly active and forgiving.',
   badges:['🦠 Wild Yeast','🥔 SA Traditional','🍞 Advanced'],
   base300:[{n:'Potato (boiled, water reserved)',pp:1,u:''},{n:'Potato cooking water (cooled)',pp:200,u:'ml'},{n:'Bread flour',pp:100,u:'g'},{n:'Sugar',pp:5,u:'g'}],
   method:['Boil a potato. Reserve the starchy cooking water. Cool to room temperature.','Mix 100ml potato water + 100g flour + 5g sugar in a clean jar.','Cover loosely. Leave at room temperature for 24 hours.','Day 2 onwards: discard half, add 50g flour + 50ml potato water daily.','Ready in 3–4 days — faster than regular starter thanks to potato starch.'],
   tip:'Potato sourdough starters are traditionally used in Afrikaner farmhouse baking. The potato starch feeds the wild yeast more efficiently. Once active it keeps for months in the fridge.'},
  {id:'fer_waterkefir', tier:'free',  emoji:'💧', name:'Water Kefir',                  kcal:25,  costPP:2,  feel:'Light, slightly fizzy, faintly sweet — kombucha gentle sibling.',
   badges:['🦠 Probiotic','💧 Dairy-Free','⚡ 48 hours'],
   base300:[{n:'Water kefir grains',pp:1,u:'tbsp'},{n:'Filtered water',pp:500,u:'ml'},{n:'Sugar (cane or coconut)',pp:30,u:'g'},{n:'Dried fruit (apricot or fig, 1 piece)',pp:1,u:''},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['Dissolve sugar in water. Cool completely to room temperature.','Add kefir grains, dried fruit and lemon juice to a clean jar.','Pour in sugar water. Cover loosely with cloth.','Ferment 24–48 hours at room temperature, tasting from 24 hours.','Strain out grains. Bottle the kefir. Refrigerate.'],
   tip:'Water kefir grains are dairy-free — different from milk kefir grains. Find them at health stores or online SA fermentation communities. They grow over time and you can share them.'},

  {id:'fer_breadkvass', tier:'free', emoji:'🍞', name:'Bread Kvass', kcal:25, costPP:2, feel:'Dark rye bread turned into a lightly fizzy, sweet-sour drink — old Russia in a glass.',
   badges:['🦠 Probiotic','🥫 Fermented','🍞 Zero Waste'],
   base300:[{n:'Stale rye or dark bread',pp:150,u:'g'},{n:'Filtered water',pp:1000,u:'ml'},{n:'Sugar',pp:60,u:'g'},{n:'Raisins',pp:15,u:'g'},{n:'Instant yeast',pp:1,u:'g'}],
   method:['Toast or dry the rye bread in a low oven until deeply golden and hard — the darker the toast, the deeper the colour and flavour.','Put the dried bread in a large jar or bowl and pour over boiling water. Cover and steep 6 to 8 hours, or overnight.','Strain out the bread through a cloth, pressing well, and stir the sugar into the still-warm liquid until dissolved.','When it cools to lukewarm, stir in the yeast and drop in a few raisins — they feed the ferment and help it fizz.','Cover loosely and leave at room temperature 1 to 2 days, until pleasantly sour and lightly bubbly. Taste as you go.','Strain into bottles, seal and refrigerate. Chill well before drinking — it keeps about a week.'],
   tip:'The classic base for cold summer soups like okroshka. Use properly dark, sour rye for the truest flavour — a sourdough rye heel is perfect. Left too long it turns into a pleasant kvass vinegar.'},

];

// ══════════════════════════════════════════════════════════════
// IMMUNITY BOOST RECIPES
// ══════════════════════════════════════════════════════════════
const IMMUNITY_RECIPES = [
  {id:'im_turmericshot', tier:'free',  emoji:'🥫', name:'Turmeric & Ginger Shot',      kcal:25,  costPP:6,  feel:'Sharp, warming and fierce — 30ml that wakes up your immune system.',
   badges:['🛡️ Immunity','🌿 Anti-Inflam','⚡ 2 min'],
   base300:[{n:'Fresh turmeric (grated) or 1 tsp powder',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:10,u:'g'},{n:'Lemon juice',pp:30,u:'ml'},{n:'Black pepper (pinch)',pp:0.2,u:'g'},{n:'Honey',pp:5,u:'g'}],
   method:['Combine all ingredients in a small jar. Stir well.','Strain if using fresh turmeric/ginger.','Drink in one shot. Chase with water.','Store remainder in fridge up to 3 days.'],
   tip:'Black pepper is essential — it increases turmeric absorption by 2000%. Never skip it.'},
  {id:'im_vitc_salad',   tier:'free',  emoji:'🥗', name:'Vitamin C Power Salad',       kcal:180, costPP:28, feel:'Bright, crunchy and energising — your immune system eating well.',
   badges:['🛡️ Immunity','🍊 Vitamin C','🥗 Fresh'],
   base300:[{n:'Red and yellow bell peppers (sliced)',pp:150,u:'g'},{n:'Broccoli florets (raw)',pp:100,u:'g'},{n:'Strawberries or kiwi (sliced)',pp:80,u:'g'},{n:'Spinach',pp:60,u:'g'},{n:'Sunflower seeds',pp:20,u:'g'},{n:'Olive oil + lemon dressing',pp:15,u:'ml'}],
   method:['Combine all vegetables and fruit in a bowl.','Scatter sunflower seeds.','Drizzle with olive oil and lemon juice.','Season and serve immediately — eat raw to preserve vitamin C.'],
   tip:'Bell peppers have more vitamin C than oranges. Red peppers have the most. Raw is best — cooking destroys vitamin C.'},
  {id:'im_garlic_soup',  tier:'free',  emoji:'🍲', name:'Roasted Garlic & Veg Soup',   kcal:195, costPP:22, feel:'Deep, warming and healing — the soup your body asks for when you feel run-down.',
   badges:['🛡️ Immunity','🧄 Allicin','🍲 Warming'],
   base300:[{n:'Garlic (whole bulb, roasted)',pp:1,u:''},{n:'Onion (diced)',pp:60,u:'g'},{n:'Carrots (diced)',pp:80,u:'g'},{n:'Sweet potato (cubed)',pp:100,u:'g'},{n:'Vegetable stock',pp:400,u:'ml'},{n:'Olive oil',pp:10,u:'ml'},{n:'Fresh thyme',pp:3,u:'g'}],
   method:['Roast whole garlic bulb at 200°C for 35 min until soft. Squeeze out cloves.','Sauté onion and carrots in olive oil 5 min.','Add sweet potato, roasted garlic and stock. Simmer 20 min.','Blend until smooth. Season generously. Top with fresh thyme.'],
   tip:'Roasting garlic transforms it — mellow, sweet and deeply flavourful. The allicin compounds survive cooking and support immune function.'},
  {id:'im_elderberry',   tier:'plus',  emoji:'🫐', name:'Berry & Elderflower Smoothie', kcal:210, costPP:35, feel:'Deep purple, antioxidant-loaded — beautiful and functional.',
   badges:['🛡️ Immunity','🫐 Antioxidants','🥤 Smoothie'],
   base300:[{n:'Mixed frozen berries (blueberries, blackberries)',pp:150,u:'g'},{n:'Elderflower cordial',pp:20,u:'ml'},{n:'Plain yoghurt',pp:80,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Ginger (fresh, small piece)',pp:3,u:'g'},{n:'Water or milk',pp:100,u:'ml'}],
   method:['Add all ingredients to blender.','Blend on high 60 seconds until smooth.','Taste — add honey if needed.','Serve immediately over ice.'],
   tip:'Elderflower cordial is widely available at SA&#39;s biggest retailers. The combination of dark berries and ginger gives a serious antioxidant hit.'},
  {id:'im_zinc_bowl',    tier:'free',  emoji:'🥣', name:'Zinc & Selenium Grain Bowl',   kcal:380, costPP:31, feel:'Nutty, satisfying and quietly powerful — micronutrients you can actually taste.',
   badges:['🛡️ Immunity','🌾 Zinc','💪 Selenium'],
   base300:[{n:'Cooked brown rice or quinoa',pp:100,u:'g'},{n:'Pumpkin seeds',pp:30,u:'g'},{n:'Sunflower seeds',pp:20,u:'g'},{n:'Canned chickpeas (drained)',pp:80,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Cherry tomatoes',pp:80,u:'g'},{n:'Lemon tahini dressing',pp:20,u:'ml'}],
   method:['Cook grain and cool slightly.','Toast pumpkin and sunflower seeds in dry pan 3 min until fragrant.','Build bowl: grain base, chickpeas, spinach, tomatoes, seeds.','Drizzle with tahini dressing. Season well.'],
   tip:'Pumpkin seeds are one of the richest sources of zinc — essential for immune function. Toast them yourself for far better flavour than pre-toasted.'},
];

// ══════════════════════════════════════════════════════════════
// ANTI-INFLAMMATORY RECIPES
// ══════════════════════════════════════════════════════════════
const ANTIINFLAM_RECIPES = [
  {id:'ai_turmeric_latte',tier:'free', emoji:'🥛', name:'Golden Milk Latte',            kcal:130, costPP:8,  feel:'Warm, earthy and gently spiced — the evening drink that calms everything down.',
   badges:['🌿 Anti-Inflam','🥛 Warming','🌙 Evening'],
   base300:[{n:'Milk or oat milk',pp:250,u:'ml'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Ground cinnamon',pp:1,u:'g'},{n:'Ground ginger',pp:0.5,u:'g'},{n:'Black pepper (pinch)',pp:0.2,u:'g'},{n:'Honey',pp:10,u:'g'}],
   method:['Heat milk in a small pot over low heat — do not boil.','Whisk in turmeric, cinnamon, ginger and black pepper.','Sweeten with honey. Froth if desired.','Serve warm. Drink before bed.'],
   tip:'Black pepper + turmeric is one of nature\'s most powerful anti-inflammatory combinations. The piperine in pepper makes curcumin up to 2000% more bioavailable.'},
  {id:'ai_salmon_bowl',  tier:'plus',  emoji:'🐟', name:'Omega-3 Salmon Quinoa Bowl',   kcal:420, costPP:95, feel:'Rich, clean and deeply nourishing — omega-3s doing their quiet anti-inflammatory work.',
   badges:['🌿 Anti-Inflam','🐟 Omega-3','💪 Protein'],
   base300:[{n:'Salmon fillet',pp:150,u:'g'},{n:'Cooked quinoa',pp:100,u:'g'},{n:'Avocado (sliced)',pp:60,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Cherry tomatoes',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Pan-fry salmon in olive oil 4 min per side. Rest 2 min.','Build bowl: quinoa base, spinach, tomatoes, avocado.','Flake salmon over the top.','Drizzle with olive oil and lemon juice. Season well.'],
   tip:'Salmon, avocado, olive oil and spinach are all top anti-inflammatory foods. This bowl is essentially a medicine cabinet in disguise.'},
  {id:'ai_berrysalad',   tier:'free',  emoji:'🫐', name:'Berry Walnut Spinach Salad',   kcal:260, costPP:38, feel:'Sweet, crunchy and alive — antioxidants you can see in the colours.',
   badges:['🌿 Anti-Inflam','🫐 Antioxidants','🥗 Fresh'],
   base300:[{n:'Baby spinach',pp:80,u:'g'},{n:'Mixed berries (blueberries, strawberries)',pp:100,u:'g'},{n:'Walnuts (roughly chopped)',pp:30,u:'g'},{n:'Red onion (thinly sliced)',pp:20,u:'g'},{n:'Feta cheese (crumbled)',pp:30,u:'g'},{n:'Balsamic vinegar + olive oil',pp:15,u:'ml'}],
   method:['Combine spinach, berries, onion and walnuts in a bowl.','Crumble feta over the top.','Drizzle with balsamic and olive oil dressing.','Toss gently. Serve immediately.'],
   tip:'Walnuts are the most anti-inflammatory nut — higher omega-3 than any other nut. The deeper the berry colour, the higher the antioxidant content.'},
  {id:'ai_ginger_stir',  tier:'free',  emoji:'🥦', name:'Ginger Broccoli Stir-Fry',    kcal:220, costPP:24, feel:'Sharp, green and energising — anti-inflammatory vegetables at their crunchiest.',
   badges:['🌿 Anti-Inflam','🥦 Sulforaphane','⚡ 15 min'],
   base300:[{n:'Broccoli florets',pp:200,u:'g'},{n:'Fresh ginger (grated)',pp:8,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Carrot (sliced)',pp:60,u:'g'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Soy sauce',pp:10,u:'ml'},{n:'Sesame seeds',pp:5,u:'g'}],
   method:['Heat sesame oil in wok over high heat.','Add garlic and ginger — stir-fry 30 seconds.','Add broccoli and carrot — stir-fry 5 min keeping crunch.','Add soy sauce. Toss. Serve topped with sesame seeds.'],
   tip:'Broccoli contains sulforaphane — one of the most researched anti-inflammatory compounds. Don\'t overcook it; crunch = more nutrients retained.'},
  {id:'ai_cherry_oats',  tier:'free',  emoji:'🍒', name:'Cherry Almond Overnight Oats', kcal:310, costPP:24, feel:'Sweet, slightly tart, deeply satisfying — inflammation fighting while you sleep.',
   badges:['🌿 Anti-Inflam','🍒 Anthocyanins','⏱️ Make Ahead'],
   base300:[{n:'Rolled oats',pp:60,u:'g'},{n:'Milk or almond milk',pp:150,u:'ml'},{n:'Tart cherries (fresh, frozen or dried)',pp:60,u:'g'},{n:'Almonds (slivered)',pp:20,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Ground cinnamon',pp:0.5,u:'g'}],
   method:['Combine oats and milk in a jar. Stir well.','Add cherries, honey and cinnamon.','Cover and refrigerate overnight.','Top with slivered almonds before serving.'],
   tip:'Tart cherries contain some of the highest levels of anthocyanins of any food — potent anti-inflammatory compounds. Frozen tart cherries work perfectly and are cheaper.'},
];
