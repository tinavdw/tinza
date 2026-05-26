const PRICE_DB = {
  // ── BEEF (adjusted per roadmap) ──
  "beef rump": 225,           // Roadmap: R225 (butchery R200)
  "beef fillet": 380,         // Roadmap: R380 (matches butchery)
  "beef t-bone": 290,         // Roadmap: R290 (butchery R140)
  "beef tbone": 290,
  "tbone steak": 290,
  "t-bone steak": 290,
  "beef chuck": 130,
  "beef brisket": 130,
  "beef boerewors": 120,
  "boerewors": 120,
  "beef mince": 130,
  "lean mince": 140,
  "beef stirfry": 150,
  "beef oxtail": 130,
  "beef shin": 120,
  "beef rib eye": 220,
  "rib eye steak": 220,
  "club steak": 140,
  "beef short rib": 130,
  "short rib": 130,
  "beef potjiekos": 100,
  "beef stew": 100,
  "tenderized steak": 140,
  "beef roast": 150,
  "sirloin": 190,
  "beef sirloin": 190,
  "soya mince": 95,           // R19/200g → R95/kg
  "biltong": 450,

  // ── LAMB (adjusted per roadmap) ──
  "lamb loin chops": 270,     // Roadmap: R270 (butchery R220)
  "lamb rib chops": 260,      // Roadmap: R260 (matches butchery)
  "lamb rib": 220,
  "lamb braai chops": 200,
  "leg of lamb": 190,
  "lamb roast": 190,
  "lamb neck": 180,
  "lamb shank": 190,
  "lamb potjiekos": 130,
  "lamb knuckles": 200,
  "butterflied leg of lamb": 190,
  "mutton": 180,

  // ── PORK ──
  "pork loin chops": 120,
  "pork chops": 120,
  "pork rib chops": 120,
  "pork neck chops": 120,
  "pork neck steaks": 120,
  "pork whole neck": 110,
  "pork fillet": 110,
  "pork stirfry": 120,
  "pork roast": 80,
  "pork shank": 80,
  "pork potjiekos": 80,
  "pork belly": 120,
  "pork mince": 125,
  "pork bangers": 110,
  "pork braai chops": 100,
  "spare ribs": 100,
  "pork rashers": 125,
  "bacon streaky": 250,       // R50/200g → R250/kg
  "bacon shoulder": 250,      // R50/200g → R250/kg
  "bacon": 250,
  "viennas": 94,              // R47/500g → R94/kg
  "russians": 170,            // R85/500g → R170/kg
  "ham": 140,
  "hickory ham": 179,
  "salami": 370,
  "prosciutto": 1190,         // R119/100g → approx
  "parma ham": 1643,          // R115/70g → approx

  // ── CHICKEN ──
  "whole chicken": 70,
  "chicken fillets": 96,
  "chicken pieces": 90,
  "chicken wings": 85,
  "chicken breasts": 90,
  "chicken drumsticks": 85,
  "chicken livers": 56,       // R28/500g → R56/kg
  "chicken": 90,

  // ── SEAFOOD ──
  "hake fillet": 257,         // R154/600g → ~R257/kg
  "hake": 257,
  "prawn meat": 350,          // R140/400g → R350/kg
  "prawns": 350,
  "mussels": 250,             // R100/400g → R250/kg
  "seafood mix": 157,         // R110/700g → R157/kg
  "calamari rings": 313,      // R125/400g → R313/kg
  "snoek": 165,               // R165/kg braai snoek
  "tiger prawns": 394,        // R315/800g → R394/kg
  "salmon": 680,              // R340/500g → R680/kg
  "haddock fillets": 325,     // R130/400g → R325/kg
  "salted snoek": 180,        // R90/500g → R180/kg
  "canned tuna": 171,         // R29/170g → R171/kg
  "canned salmon": 300,       // R120/400g → R300/kg
  "pilchards": 73,            // R29/400g → R73/kg

  // ── EGGS ──
  "eggs": 3.7,                // R22/6 pack → ~R3.67 each (price per egg)
  "eggs_each": 3.7,

  // ── DAIRY ──
  "milk": 20,                 // per litre
  "butter": 160,              // R80/500g → R160/kg
  "cream": 148,               // R37/250ml → R148/L (approx per kg)
  "cheddar cheese": 225,      // R180/800g → R225/kg
  "gouda cheese": 225,        // R180/800g → R225/kg
  "feta cheese": 230,         // R46/200g → R230/kg
  "feta": 230,
  "cheddar": 225,
  "parmesan": 750,            // R30/40g → R750/kg
  "brie": 400,                // R50/125g → R400/kg
  "camembert": 456,           // R57/125g → R456/kg
  "cream cheese": 180,        // R45/250g → R180/kg
  "yoghurt": 45,              // per kg
  "ice cream": 45,            // R82/1.8L ≈ R45/kg
  "chocolate": 313,           // R25/80g → R313/kg

  // ── PRODUCE (FRESH) ──
  "potato": 18,               // R35/2kg → R18/kg
  "potatoes": 18,
  "sweet potato": 17,         // per kg
  "sweet potatoes": 17,
  "butternut": 13,            // per kg
  "onion": 27,                // per kg
  "onions": 27,
  "red onion": 45,
  "spring onion": 343,        // R24/70g → R343/kg (use sparingly — tiny amount)
  "green pepper": 50,         // per kg
  "peppers": 70,
  "red pepper": 100,
  "yellow pepper": 100,
  "tomato": 35,               // per kg
  "tomatoes": 35,
  "cherry tomatoes": 100,     // R25/250g → R100/kg
  "chili": 70,                // per kg
  "garlic": 280,              // per kg
  "ginger": 280,              // per kg
  "mushroom": 165,            // R37/225g → R165/kg
  "button mushrooms": 148,    // R37/250g → R148/kg
  "avocado": 13,              // each
  "avocado_each": 13,
  "cucumber": 21,             // each
  "lettuce": 22,              // each
  "rocket": 500,              // R20/40g → R500/kg
  "baby spinach": 216,        // R27/125g → R216/kg
  "spinach": 93,              // R37/400g → R93/kg
  "cabbage": 25,              // whole
  "carrots": 25,              // per kg
  "baby carrots": 83,         // R25/300g → R83/kg
  "broccoli": 100,            // R35/350g → R100/kg
  "cauliflower": 88,          // R35/400g → R88/kg
  "green beans": 58,          // R35/600g → R58/kg
  "baby marrow": 50,          // per kg
  "courgette": 50,
  "beetroot": 25,             // R25/kg
  "celery": 27,               // each
  "pineapple": 25,            // each
  "lemon": 9,                 // each
  "lemon_each": 9,
  "banana": 32,               // per kg
  "apples": 27,               // R40/1.5kg → R27/kg
  "pears": 23,                // R35/1.5kg → R23/kg
  "blueberries": 320,         // R40/125g → R320/kg

  // ── STARCHES & GRAINS ──
  "mieliepap": 19,            // R48/2.5kg → R19/kg
  "maize meal": 19,
  "pap": 19,
  "white rice": 27,           // per kg
  "rice": 27,
  "basmati rice": 80,
  "jasmine rice": 63,
  "arborio rice": 128,        // R64/500g → R128/kg
  "brown rice": 43,           // R85/2kg → R43/kg
  "couscous": 100,            // per kg
  "pasta": 36,                // R18/500g → R36/kg
  "spaghetti": 36,
  "macaroni": 36,
  "samp": 28,                 // per kg
  "samp and beans": 34,       // R17/500g → R34/kg
  "pearl wheat": 34,          // R17/500g → R34/kg
  "red lentils": 62,          // R31/500g → R62/kg
  "brown lentils": 62,
  "lentils": 62,
  "chickpeas": 68,            // R34/500g → R68/kg
  "red kidney beans": 68,
  "polenta": 88,              // R35/400g → R88/kg

  // ── TINNED GOODS ──
  "tinned tomatoes": 66,      // R27/410g → R66/kg
  "canned tomatoes": 66,
  "chopped tomatoes": 66,
  "tomato paste": 180,        // R9/50g → R180/kg
  "tomato puree": 68,         // R28/410g → R68/kg
  "coconut milk": 63,         // R25/400ml → R63/kg approx
  "coconut cream": 83,        // R33/400ml → R83/kg
  "condensed milk": 104,      // R40/385g → R104/kg
  "baked beans": 41,          // R17/410g → R41/kg
  "sugar beans": 78,          // R32/410g → R78/kg
  "butter beans": 68,         // R27/400g → R68/kg
  "chakalaka": 63,            // R25/400g → R63/kg
  "tinned corn": 59,          // R24/410g → R59/kg
  "sweet corn tinned": 59,
  "corned beef": 110,         // R33/300g → R110/kg

  // ── BAKING ──
  "cake flour": 22,           // per kg
  "wheat flour": 22,
  "self raising flour": 36,
  "almond flour": 533,        // R160/300g → R533/kg
  "cornflour": 68,            // R17/250g → R68/kg
  "white sugar": 35,          // per kg
  "brown sugar": 35,
  "castor sugar": 84,         // R42/500g → R84/kg
  "icing sugar": 90,          // R45/500g → R90/kg
  "baking powder": 76,        // R38/200g → R190/kg... use smaller R76
  "bicarbonate of soda": 72,  // R36/500g → R72/kg
  "vanilla essence": 320,     // R32/100ml → R320/kg-approx
  "cream of tartar": 250,     // R25/100g → R250/kg
  "coconut fine": 220,        // R44/200g → R220/kg
  "dates": 100,               // R25/250g → R100/kg
  "honey": 160,               // R80/500g → R160/kg
  "golden syrup": 130,        // R39/300g → R130/kg
  "peanut butter": 88,        // R70/800g → R88/kg
  "puff pastry": 80,          // R32/400g → R80/kg
  "phyllo pastry": 118,       // R59/500g → R118/kg
  "rye flour": 40,
  "wholewheat flour": 24,
  "semolina": 37,
  "sunflower seeds": 233,     // R35/150g → R233/kg

  // ── OILS & CONDIMENTS ──
  "sunflower oil": 48,        // R95/2L → R48/kg (litre)
  "olive oil": 250,           // per litre
  "coconut oil": 80,          // per litre
  "balsamic vinegar": 180,    // R90/500ml → R180/L
  "white vinegar": 49,        // R37/750ml → R49/L
  "apple cider vinegar": 99,  // R37/375ml → R99/L
  "soy sauce": 236,           // R59/250ml → R236/L
  "worcestershire sauce": 108, // R27/250ml → R108/L
  "peri peri sauce": 116,     // R29/250ml → R116/L
  "tomato sauce": 60,         // R42/700ml → R60/L
  "oyster sauce": 260,        // R65/250ml → R260/L
  "mayonnaise": 64,           // R48/750g → R64/kg
  "mustard": 84,              // R42/500ml → R84/L
  "chutney": 98,              // R46/470g → R98/kg
  "capers": 330,              // R33/100g → R330/kg
  "olives": 165,              // R33/200g → R165/kg
  "gherkins": 76,             // R58/760g → R76/kg
  "peppadews": 204,           // R57/280g → R204/kg
  "green fig preserve": 250,  // R80/320g → R250/kg
  "apricot jam": 50,          // R45/900g → R50/kg

  // ── HERBS & SPICES ──
  "paprika": 364,             // R20/55g → R364/kg
  "turmeric": 351,            // R20/57g → R351/kg
  "ground ginger": 440,       // R22/50g → R440/kg
  "dried ginger": 440,
  "origanum": 688,            // R22/32g → R688/kg
  "cayenne pepper": 556,      // R25/45g → R556/kg
  "cinnamon": 470,            // R47/100ml → ~R470/kg
  "ground cloves": 470,
  "cumin": 470,
  "curry powder": 300,        // R30/100g → R300/kg
  "garam masala": 300,
  "garlic powder": 755,       // R40/53g → R755/kg
  "garlic salt": 340,         // R34/100g → R340/kg
  "chili flakes": 700,        // R28/40g → R700/kg
  "nutmeg": 764,              // R42/55g → R764/kg
  "black pepper": 760,        // R38/50g → R760/kg
  "salt": 30,                 // per kg
  "saffron": 100000,          // R50/0.5g → very expensive, use tiny amounts
  "mixed herbs": 1111,        // R20/18g → R1111/kg
  "stock cubes": 1.5,         // R1.50 each

  // ── FROZEN ──
  "frozen peas": 67,          // R50/750g → R67/kg
  "frozen corn": 106,         // R53/500g → R106/kg
  "frozen broccoli": 67,      // R50/750g → R67/kg
  "frozen green beans": 67,
  "frozen spinach": 107,      // R80/750g → R107/kg
  "frozen blueberries": 140,  // R140/kg

  // ── BREAD & PASTRY ──
  "brown bread": 18,          // each
  "white bread": 21,          // each
  "hamburger rolls": 3,       // each
  "bread": 18,

  // ── CEREAL ──
  "oats": 50,                 // per kg
  "muesli": 107,              // R80/750g → R107/kg
};

const MEAT_COSTS = {
  // Beef — roadmap-adjusted prices
  boerewors:120, cocktailwors:95, rump:225, fillet:380, tbone:290, chuck:140, shortrib:140,
  brisket:130, beefkebabs:200, beefsouvlaki:200, turkishkebabs:160, kudu:240,
  beefkofta:160, marinatedfillet:380,
  // Pork
  porkchops:120, porkribchops:130, spareribs:130, porkcurrysosaties:140,
  dirtyporkneck:130, porkneckhoneymustard:130, porkshishkabobs:120, apricotcurrychops:120,
  // Lamb — roadmap-adjusted prices
  lambchops:270, lambribchops:260, lambribs:200, sosaties:170, butterfliedleg:230, lambleganchoviolive:230,
  // Chicken
  honeysoychiicken:85, greekchicken:85, lemonherbflatty:80, yoghurtchickenkebabs:110,
  bbqchicken:85, chickenkebaabs:110, wings:85, hardbody:95,
  // Seafood
  snoek:165, prawns:350, mixedseafoodkebabs:200, espetada:225, honeymustardSalmon:680, seafoodpaella:120,
  // Vegetarian
  mushroomskewers:60, caulisteaks:50, stuffedbutternut:45, brinjalskewers:40,
  mixedvegbraai:35, halloumiskewers:90,
};
const MEAT_CALS = {
  boerewors:280, cocktailwors:260, rump:250, fillet:220, tbone:245, chuck:280, shortrib:290,
  brisket:270, beefkebabs:240, beefsouvlaki:230, turkishkebabs:270, kudu:150,
  beefkofta:260, marinatedfillet:220,
  porkchops:240, porkribchops:250, spareribs:290, porkcurrysosaties:230,
  dirtyporkneck:260, porkneckhoneymustard:280, porkshishkabobs:185, apricotcurrychops:240,
  lambchops:280, lambribchops:270, lambribs:270, sosaties:200, butterfliedleg:220, lambleganchoviolive:220,
  honeysoychiicken:200, greekchicken:190, lemonherbflatty:190, yoghurtchickenkebabs:175,
  bbqchicken:210, chickenkebaabs:165, wings:220, hardbody:190,
  snoek:130, prawns:85, mixedseafoodkebabs:110, espetada:220, honeymustardSalmon:200, seafoodpaella:280,
  mushroomskewers:62, caulisteaks:120, stuffedbutternut:180, brinjalskewers:130,
  mixedvegbraai:80, halloumiskewers:200,
};

// ── BABY DATA ─────────────────────────────────────────────────────
// Ingredients use base amounts per single batch. Scale by S.babyBatches (1–4).
// pp = grams or ml per batch. Shopping list uses pp * batches.
const BABY_RECIPES = [

  // ── STAGE 1: FIRST TASTES (4–6 months) ──────────────────────────
  { id:"velvetcarrot", tier:"free", name:"Velvet Carrot Purée", emoji:"🥕",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:20,
    badges:["🥕 Vitamin A","👁️ Eye Health","✅ No Allergens"],
    base:[
      {n:"carrots (peeled, cubed)",pp:150,u:"g",cat:"produce"},
      {n:"Breast milk, formula or cooled boiled water",pp:40,u:"ml",cat:"other"},
    ],
    method:["Steam carrots 12–15 min until completely soft — a fork should go through with no resistance.","Blend until silky smooth. Add liquid gradually to reach a runny, lump-free consistency.","Cool to room temperature before serving. Never serve hot.","Freeze leftovers in ice cube trays. Each cube ≈ 15–20ml — perfect single portions."],
    tip:"Rich in beta-carotene — the orange pigment that converts to vitamin A. One of the safest and most accepted first foods. Babies may turn slightly orange with regular eating — harmless!",
    nutrition:["Vitamin A (beta-carotene)","Eye and immune health","Fibre for digestion","Low allergen risk"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },

  { id:"goldenbutter", tier:"free", name:"Golden Butternut Purée", emoji:"🎃",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:25,
    badges:["🎃 Vitamin C","🌟 Immune Boost","✅ No Allergens"],
    base:[
      {n:"Butternut squash (peeled, cubed)",pp:200,u:"g",cat:"produce"},
      {n:"Breast milk or formula (to thin)",pp:30,u:"ml",cat:"other"},
    ],
    method:["Roast at 180°C for 20 min (deeper flavour) OR steam for 12 min (more nutrients).","Blend until completely smooth — no lumps at Stage 1.","Add breast milk or formula for a creamy, familiar taste.","Cool completely before serving."],
    tip:"Roasting brings out a deeper, sweeter flavour that babies love. Rich in vitamins A and C. A great second vegetable after carrot.",
    nutrition:["Vitamins A and C","Potassium","Natural sweetness supports acceptance","Immune boosting"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },

  { id:"creamypear", tier:"free", name:"Creamy Pear Purée", emoji:"🍐",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:15,
    badges:["🍐 Digestive Health","🌿 Gentle","✅ No Allergens"],
    base:[
      {n:"Ripe pears (peeled, cored, cubed)",pp:200,u:"g",cat:"produce"},
      {n:"Cooled boiled water (if needed to thin)",pp:20,u:"ml",cat:"other"},
    ],
    method:["If very ripe: blend raw for maximum nutrients — no cooking needed.","If firmer: steam 5–7 min until completely soft.","Blend until silky smooth. Add a little water only if needed.","Cool before serving."],
    tip:"One of the gentlest first foods. Pear has natural fibre that helps regulate digestion. Ripe pears need no cooking at all — maximum nutrition, zero effort.",
    nutrition:["Soluble fibre (aids digestion)","Vitamin C","Potassium","Gentle on immature gut"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },

  { id:"sweetpotato", tier:"free", name:"Sweet Potato Purée", emoji:"🍠",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:20,
    badges:["🍠 Vitamin A","⚡ Energy","✅ No Allergens"],
    base:[
      {n:"Sweet potato (peeled, cubed)",pp:200,u:"g",cat:"produce"},
      {n:"Breast milk, formula or cooled boiled water",pp:40,u:"ml",cat:"other"},
    ],
    method:["Steam 12–15 min until very tender.","Blend until completely smooth. Add liquid gradually.","Cool completely before serving."],
    tip:"Naturally sweet and rich in vitamin A. South African sweet potatoes are excellent quality. Freeze in ice cube trays for quick weekday meals.",
    nutrition:["Vitamin A (immune + vision)","Complex carbohydrates for energy","Vitamin C","Potassium"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },

  { id:"avocadobanana", tier:"plus", name:"Avocado & Banana Mash", emoji:"🥑",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:5,
    badges:["🥑 Healthy Fats","⚡ Potassium","✅ No Allergens","⚡ No Cooking"],
    base:[
      {n:"Ripe avocado flesh",pp:60,u:"g",cat:"produce"},
      {n:"Ripe banana",pp:60,u:"g",cat:"produce"},
      {n:"Breast milk or formula (optional)",pp:10,u:"ml",cat:"other"},
    ],
    method:["Scoop avocado flesh. Peel banana.","Mash together with a fork until completely smooth — no lumps.","Add a tiny splash of breast milk or formula to loosen if needed.","Serve immediately — avocado browns quickly once cut."],
    tip:"No cooking, no prep, no fuss. Packed with healthy fats essential for brain development. The banana adds natural sweetness. Make right before serving — cannot be stored.",
    nutrition:["Healthy monounsaturated fats (brain development)","Potassium","Folate","Vitamins B6, C, K"],
    storage:"Serve immediately. Cannot be stored.", allergens:"None" },

  { id:"samaize", tier:"plus", name:"SA Baby Maize Porridge", emoji:"🌽",
    stage:"stage1", stageLabel:"Stage 1 — First Tastes (4–6 months)", time:10,
    badges:["🌽 Gluten-Free","🇿🇦 SA Staple","⚡ Easy Digestion"],
    base:[
      {n:"Fine maize meal or baby maize porridge",pp:30,u:"g",cat:"pantry"},
      {n:"Cooled boiled water",pp:100,u:"ml",cat:"other"},
      {n:"Breast milk or formula (to finish)",pp:50,u:"ml",cat:"other"},
    ],
    method:["Bring water to a gentle boil.","Whisk in maize meal slowly — keep whisking continuously to prevent lumps.","Stir on low heat 5–7 min until thick and completely smooth.","Remove from heat. Cool slightly. Stir in breast milk or formula to desired consistency and temperature."],
    tip:"A proudly South African staple. Use certified baby maize porridge (like Jungle Oats Baby) or very finely milled maize meal. Add puréed fruit or vegetable for variety and nutrients.",
    nutrition:["Carbohydrates for energy","Iron if using fortified baby maize","Gluten-free","Familiar SA flavour"],
    storage:"Fridge: 1 day. Best made fresh.", allergens:"Gluten-free" },

  // ── STAGE 2: FLAVOUR EXPLORER (6–9 months) ───────────────────────
  { id:"greenmash", tier:"plus", name:"Green Garden Mash", emoji:"🥦",
    stage:"stage2", stageLabel:"Stage 2 — Flavour Explorer (6–9 months)", time:15,
    badges:["🥦 Iron","🌿 Folate","💪 Protein","🦠 Probiotics"],
    base:[
      {n:"Frozen peas",pp:70,u:"g",cat:"produce"},
      {n:"Baby marrow (chopped)",pp:80,u:"g",cat:"produce"},
      {n:"Fresh mint leaves",pp:3,u:"g",cat:"produce"},
      {n:"Full-fat plain Greek yoghurt",pp:30,u:"g",cat:"dairy"},
    ],
    method:["Steam peas and baby marrow together 5–6 min until tender.","Blend until ALMOST smooth — leave small soft lumps. At Stage 2 we introduce texture deliberately.","Stir in Greek yoghurt for healthy fats and probiotics.","Cool completely before serving."],
    tip:"Small lumps encourage chewing motions — important for jaw development. If you've already introduced yoghurt without reaction, this is safe. If not, introduce yoghurt as a single food first and wait 3 days.",
    nutrition:["Iron (from peas)","Folate (supports cell growth)","Probiotics (from yoghurt)","Vitamin C"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"Dairy (yoghurt) — introduce separately first" },

  { id:"sweetchicken", tier:"plus", name:"Sweet Potato & Chicken", emoji:"🍗",
    stage:"stage2", stageLabel:"Stage 2 — Flavour Explorer (6–9 months)", time:30,
    badges:["🍗 Iron-Rich","💪 Protein","🍠 Vitamin A"],
    base:[
      {n:"Chicken breast (all fat and skin removed)",pp:100,u:"g",cat:"meat"},
      {n:"Sweet potato (peeled, cubed)",pp:150,u:"g",cat:"produce"},
      {n:"Low-sodium chicken stock or water",pp:100,u:"ml",cat:"other"},
    ],
    method:["Place chicken in small pot with stock. Bring to a gentle simmer.","Add sweet potato after 5 min. Cook together 15 min until both completely tender.","Reserve cooking liquid.","Blend together, adding cooking liquid to reach desired consistency.","Cool completely before serving. Always check temperature."],
    tip:"Always cook chicken thoroughly — never serve pink chicken to a baby. The cooking liquid is full of nutrients — use it to thin the purée instead of plain water.",
    nutrition:["Iron (from chicken — important for brain development)","Complete protein","Vitamin A (from sweet potato)","Vitamin B6"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None common" },

  { id:"bananaoat", tier:"plus", name:"Banana Oat Power Bowl", emoji:"🥣",
    stage:"stage2", stageLabel:"Stage 2 — Flavour Explorer (6+ months)", time:10,
    badges:["🌾 Fibre","⚡ Energy","🍌 Potassium"],
    base:[
      {n:"Baby oats or finely ground rolled oats",pp:40,u:"g",cat:"pantry"},
      {n:"Full cream milk or breast milk/formula",pp:150,u:"ml",cat:"dairy"},
      {n:"Ripe banana (mashed)",pp:60,u:"g",cat:"produce"},
      {n:"Cinnamon (optional — from 8 months only)",pp:null,u:"",cat:"pantry"},
    ],
    method:["Cook oats in milk over low heat, stirring continuously for 5 min until creamy and thick.","Cool slightly. Mash in banana until fully combined.","Add a pinch of cinnamon if using (only from 8 months). Check temperature before serving."],
    tip:"Full of slow-release energy to keep baby satisfied. Riper banana = naturally sweeter and easier to mash. This is a great breakfast recipe.",
    nutrition:["Slow-release carbohydrates","Potassium (from banana)","B vitamins","Fibre for digestion"],
    storage:"Fridge: 1 day. Best made fresh.", allergens:"Oats (may contain gluten), dairy" },

  { id:"scrambledegg", tier:"free", name:"Soft Scrambled Egg", emoji:"🥚",
    stage:"stage2", stageLabel:"Stage 2 — Allergen Introduction (6+ months)", time:5,
    badges:["🥚 Allergen Intro","💪 Protein","⚡ Fast"],
    base:[
      {n:"Large egg",pp:1,u:"egg",cat:"dairy"},
      {n:"Full cream milk",pp:15,u:"ml",cat:"dairy"},
      {n:"Butter (unsalted)",pp:5,u:"g",cat:"dairy"},
    ],
    method:["Whisk egg and milk gently — just combined, no need to beat vigorously.","Melt butter in a small non-stick pan over VERY low heat.","Pour in egg mixture. Stir gently and continuously with a spatula.","Remove from heat when just set and still very soft and creamy — it will continue cooking from residual heat.","Cool before serving. NEVER add salt."],
    tip:"Introduce egg early (from 6 months) — current guidelines show early introduction REDUCES allergy risk. Watch for any reaction for 3–5 days before introducing another new food.",
    nutrition:["Complete protein (all essential amino acids)","Vitamin D","Vitamin B12","Choline (brain development)"],
    storage:"Serve immediately.", allergens:"Egg — introduce as single new food and observe 3–5 days" },

  { id:"lentilspinach", tier:"plus", name:"Creamy Lentil & Spinach", emoji:"🌿",
    stage:"stage2", stageLabel:"Stage 2 — Flavour Explorer (6–9 months)", time:25,
    badges:["🌿 Plant Iron","🫘 Protein","🌱 Folate"],
    base:[
      {n:"Red lentils (rinsed)",pp:50,u:"g",cat:"pantry"},
      {n:"Baby spinach leaves",pp:30,u:"g",cat:"produce"},
      {n:"Water or low-sodium vegetable stock",pp:200,u:"ml",cat:"other"},
      {n:"Olive oil (tiny drizzle)",pp:5,u:"ml",cat:"pantry"},
    ],
    method:["Rinse lentils well under cold water.","Add lentils to pot with stock. Bring to boil, reduce to simmer.","Cook 15 min until lentils are very soft and beginning to fall apart.","Add spinach in the last 2 min — it wilts almost instantly.","Blend completely smooth. Drizzle in olive oil. Cool before serving."],
    tip:"Red lentils are the most digestible lentil for babies — they cook quickly and blend silky smooth. The vitamin C in spinach helps the body absorb the plant-based iron from the lentils.",
    nutrition:["Plant-based iron","Folate (cell development)","Protein","Vitamin C (aids iron absorption)"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },

  { id:"applecinnamon", tier:"plus", name:"Apple & Cinnamon Porridge", emoji:"🍎",
    stage:"stage2", stageLabel:"Stage 2 — Flavour Explorer (6–9 months)", time:15,
    badges:["🍎 Antioxidants","🌾 Fibre","🍂 Warming"],
    base:[
      {n:"Apple (peeled, cored, grated or diced)",pp:100,u:"g",cat:"produce"},
      {n:"Baby oats or ground rolled oats",pp:40,u:"g",cat:"pantry"},
      {n:"Full cream milk or formula",pp:150,u:"ml",cat:"dairy"},
      {n:"Cinnamon (from 8 months only)",pp:null,u:"",cat:"pantry"},
    ],
    method:["If apple is firm: cook in 2 tbsp water over low heat 5 min until completely soft.","Cook oats in milk over low heat stirring continuously until creamy — about 5 min.","Mix in cooked apple (or stir in grated raw apple for older Stage 2 babies).","Add a tiny pinch of cinnamon if baby is 8+ months.","Cool to room temperature before serving."],
    tip:"The antioxidants in apple support immune health. Cinnamon is safe from 8 months and helps regulate blood sugar. A warming and satisfying breakfast combination.",
    nutrition:["Antioxidants (quercetin, catechin)","Soluble fibre (pectin)","Slow-release energy","Vitamin C"],
    storage:"Fridge: 1 day. Best made fresh.", allergens:"Oats (may contain gluten), dairy" },

  // ── STAGE 3: LITTLE FOODIE (9–12+ months) ───────────────────────
  { id:"cheesebroccolitots", tier:"pro", name:"Cheesy Broccoli Tots", emoji:"🧀",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:35,
    badges:["🥦 Calcium","💪 Protein","🤲 Self-Feeding","🦷 Motor Skills"],
    base:[
      {n:"Broccoli florets",pp:90,u:"g",cat:"produce"},
      {n:"Large egg",pp:1,u:"egg",cat:"dairy"},
      {n:"Fine breadcrumbs",pp:20,u:"g",cat:"pantry"},
      {n:"Mild cheddar (finely grated)",pp:30,u:"g",cat:"dairy"},
    ],
    method:["Steam broccoli until very tender — much softer than you would for adults.","Cool and chop very finely — almost a paste.","Combine broccoli, egg, breadcrumbs and cheese. Mix well.","Shape into small finger-sized logs about 4cm long and 2cm wide.","Bake at 180°C for 15–18 min until firm and lightly golden.","Cool completely before serving — they firm up more as they cool."],
    tip:"Designed for self-feeding practice. The firm texture allows baby to grip safely and is soft enough to gum. Make a batch on Sunday and keep in the fridge all week.",
    nutrition:["Calcium (for bone development)","Vitamin C","Protein","Iron"],
    storage:"Fridge: 3 days. Freezer: 1 month.", allergens:"Egg, dairy, gluten" },

  { id:"bananapancakes", tier:"pro", name:"Baby Banana Pancakes", emoji:"🥞",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:15,
    badges:["🥞 Finger Food","💪 Protein","🍌 Energy","🤲 Self-Feeding"],
    base:[
      {n:"Ripe banana (very well mashed)",pp:80,u:"g",cat:"produce"},
      {n:"Large egg",pp:1,u:"egg",cat:"dairy"},
      {n:"Unsalted butter (for frying)",pp:5,u:"g",cat:"dairy"},
    ],
    method:["Mash banana completely smooth — no lumps.","Whisk in egg until fully combined.","Heat non-stick pan over VERY low heat. Add tiny knob of butter.","Drop small spoonfuls (about 5cm wide) into the pan.","Cook 2–3 min until set on top and edges look dry. Flip carefully. Cook 1 min more.","Very soft texture — not crispy. Cool completely before serving."],
    tip:"Just 2 ingredients! The riper the banana the better — more sweetness and easier to mash. These freeze beautifully between sheets of baking paper.",
    nutrition:["Potassium (from banana)","Complete protein (from egg)","Energy","B vitamins"],
    storage:"Fridge: 2 days. Freeze between baking paper sheets.", allergens:"Egg" },

  { id:"minifishcakes", tier:"pro", name:"Mini Fish Cakes", emoji:"🐟",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:30,
    badges:["🐟 Omega-3","🧠 Brain Health","💪 Protein"],
    base:[
      {n:"White fish — hake or kingklip (cooked, flaked, ALL bones removed)",pp:100,u:"g",cat:"meat"},
      {n:"Sweet potato (steamed and mashed)",pp:100,u:"g",cat:"produce"},
      {n:"Fine breadcrumbs",pp:20,u:"g",cat:"pantry"},
      {n:"Fresh parsley (finely chopped)",pp:5,u:"g",cat:"produce"},
      {n:"½ beaten egg (for binding)",pp:25,u:"g",cat:"dairy"},
      {n:"Unsalted butter (for frying)",pp:10,u:"g",cat:"dairy"},
    ],
    method:["Cook fish thoroughly by poaching or steaming. NEVER serve undercooked fish to a baby.","Flake finely. CHECK TWICE for bones — run your finger along the flesh carefully. Any bone is a choking hazard.","Combine fish, mashed sweet potato, breadcrumbs, parsley and beaten egg.","Shape into small flat rounds about 4cm wide and 1cm thick.","Cook in butter over medium-low heat 3–4 min per side until golden.","Cool completely before serving."],
    tip:"South African hake is an excellent, sustainable choice and widely available. The sweet potato acts as a binder and adds natural sweetness. Bones are the only real danger — check carefully every single time.",
    nutrition:["Omega-3 fatty acids (brain and eye development)","Complete protein","Vitamin D","Iron"],
    storage:"Fridge: 2 days. Freeze raw patties on baking paper.", allergens:"Fish, egg, gluten" },

  { id:"softpasta", tier:"pro", name:"Soft Pasta with Hidden Veg", emoji:"🍝",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:30,
    badges:["🍝 Finger Food","🥕 Hidden Veg","💪 Iron"],
    base:[
      {n:"Small pasta shapes (stars or small tubes)",pp:50,u:"g",cat:"pantry"},
      {n:"Ripe tomatoes (chopped)",pp:150,u:"g",cat:"produce"},
      {n:"Carrot (grated)",pp:50,u:"g",cat:"produce"},
      {n:"Lean beef mince (optional)",pp:50,u:"g",cat:"meat"},
      {n:"Olive oil",pp:5,u:"ml",cat:"pantry"},
      {n:"Low-sodium vegetable or chicken stock",pp:100,u:"ml",cat:"other"},
    ],
    method:["Heat olive oil in small pan. If using mince, brown it completely — no pink.","Add grated carrot. Cook 3 min until softened.","Add tomatoes and stock. Simmer 10 min until tomatoes break down.","Blend sauce completely smooth — this hides the vegetables completely.","Cook pasta until very soft — much softer than al dente. Drain.","Combine sauce with pasta. Cool before serving."],
    tip:"Blending the sauce hides vegetables from even the fussiest eater. This technique works for years — just increase the lumpiness as baby gets older.",
    nutrition:["Iron (from mince)","Vitamins A and C","Fibre","Carbohydrates for energy"],
    storage:"Fridge: 2 days. Freeze sauce separately.", allergens:"Gluten" },

  { id:"chickenriceballs", tier:"pro", name:"Chicken & Rice Balls", emoji:"🍙",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:30,
    badges:["💪 Protein","🍚 Pincer Grasp","🤲 Self-Feeding"],
    base:[
      {n:"Cooked white rice (cooled)",pp:100,u:"g",cat:"pantry"},
      {n:"Cooked chicken breast (very finely shredded)",pp:60,u:"g",cat:"meat"},
      {n:"Carrot (grated, steamed soft)",pp:30,u:"g",cat:"produce"},
      {n:"½ beaten egg (binder)",pp:25,u:"g",cat:"dairy"},
    ],
    method:["Cook rice until very soft — stickier than normal so it holds together.","Shred chicken very finely — no stringy pieces that could cause choking.","Steam grated carrot 3 min until very soft.","Combine rice, chicken, carrot and beaten egg while rice is still slightly warm.","Wet your hands with cold water. Roll into small balls about 3cm diameter.","Either serve as-is (sticky rice holds) or bake at 180°C for 10 min for firmer balls."],
    tip:"Perfect for practising the pincer grasp — the skill of picking up small objects between thumb and forefinger. Use sticky Japanese-style rice for best results. Keep your hands wet while rolling.",
    nutrition:["Complete protein (from chicken)","Iron","Carbohydrates for energy","Vitamin A (from carrot)"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"Egg" },

  { id:"sweetpotatochickpea", tier:"pro", name:"Sweet Potato & Chickpea Curry", emoji:"🍛",
    stage:"stage3", stageLabel:"Stage 3 — Little Foodie (9–12+ months)", time:30,
    badges:["🥔 Complex Carbs","🫘 Plant Protein","🌶️ Mild Spices"],
    base:[
      {n:"Sweet potato (peeled, small cubes)",pp:120,u:"g",cat:"produce"},
      {n:"Tinned chickpeas (drained, rinsed)",pp:80,u:"g",cat:"pantry"},
      {n:"Tinned coconut milk (full fat)",pp:50,u:"ml",cat:"pantry"},
      {n:"Low-sodium vegetable stock",pp:100,u:"ml",cat:"other"},
      {n:"Mild curry powder (tiny pinch — not chilli)",pp:null,u:"",cat:"pantry"},
      {n:"Olive oil",pp:5,u:"ml",cat:"pantry"},
    ],
    method:["Heat olive oil in small pot. Add a tiny pinch of mild curry powder — just a whisper of spice.","Add sweet potato cubes. Stir to coat. Cook 2 min.","Add coconut milk and stock. Bring to gentle simmer.","Cook 12 min until sweet potato is very tender.","Add chickpeas. Cook 3 more min.","Mash roughly — leave some texture for Stage 3 babies, or blend smooth for younger babies."],
    tip:"Introducing mild spices at this stage develops a wider palate. Mild curry powder (not chilli or hot spice) is safe and appropriate. Chickpeas should be very soft and easily squashed between fingers before serving.",
    nutrition:["Complex carbohydrates (sustained energy)","Plant protein (chickpeas)","Healthy fats (coconut milk)","Iron and folate"],
    storage:"Fridge: 2 days. Freezer: 1 month.", allergens:"None" },
];
const BABY_STAGES = [
  { id:"all",    label:"All Ages",   emoji:"👶" },
  { id:"stage1", label:"4–6 months", emoji:"🌱" },
  { id:"stage2", label:"6–9 months", emoji:"🌿" },
  { id:"stage3", label:"9–12m+",     emoji:"🌳" },
];

// ── DOG DATA ──────────────────────────────────────────────────────
const DOG_SIZE_MULT = { small:0.5, medium:1.0, large:1.8 };

const DOG_AGE_STAGES = [
  { id:"all",    label:"All Ages",    emoji:"🐾" },
  { id:"puppy",  label:"Puppy 0–6m",  emoji:"🐶" },
  { id:"junior", label:"Junior 6–12m",emoji:"🦮" },
  { id:"adult",  label:"Adult 1–8yr", emoji:"🐕" },
  { id:"senior", label:"Senior 8yr+", emoji:"🐩" },
];

const DOG_SECTIONS_LIST = [
  { id:"biscuits", label:"🦴 Biscuits",     color:"#9070e0", desc:"Baked treats and chews" },
  { id:"dental",   label:"🦷 Dental",       color:"#40a0c0", desc:"Teeth cleaning treats" },
  { id:"cooked",   label:"🍲 Cooked Meals", color:"#c07030", desc:"Wholesome home-cooked bowls" },
  { id:"raw",      label:"🥩 Raw / BARF",   color:"#c03040", desc:"Biologically appropriate raw" },
  { id:"frozen",   label:"🧊 Frozen",       color:"#3090c0", desc:"Cool treats for hot days" },
  { id:"special",  label:"💊 Special Diet", color:"#80a040", desc:"Health condition support" },
  { id:"care",     label:"💧 Dog Care",     color:"#608080", desc:"Feeding and wellness guide" },
];

// base amounts = per medium dog (1–8yr adult). Scale with DOG_SIZE_MULT and age multipliers.
// Age multipliers: puppy:0.25 (per meal, 4x/day), junior:0.6 (3x/day), adult:1.0 (2x/day), senior:0.85 (2x/day)
const DOG_AGE_MULT = { puppy:0.25, junior:0.6, adult:1.0, senior:0.85 };
const DOG_AGE_NOTES = {
  puppy:"Puppy 0–6 months — small frequent meals (3–4 per day). Growing fast — high protein and calcium critical.",
  junior:"Junior 6–12 months — still growing, 2–3 meals per day. Transition to adult food gradually.",
  adult:"Adult 1–8 years — 2 meals per day. Maintain healthy weight. Rotate proteins for variety.",
  senior:"Senior 8+ years — smaller, easier to digest portions. Higher omega-3 for joints. Monitor weight closely."
};

const DOG_RECIPES = {
  biscuits:[
    { id:"pbpumpkin", name:"PB & Pumpkin Crunch", emoji:"🥜", time:35, tier:"free", batchRecipe:true, batchYield:36, batchUnit:"biscuits",
      ages:["puppy","junior","adult","senior"],
      base:[{n:"Pumpkin purée (plain, no spices)",pp:200,u:"g"},{n:"Natural peanut butter (NO xylitol)",pp:120,u:"g"},{n:"Eggs",pp:2,u:"egg"},{n:"Whole wheat or oat flour",pp:300,u:"g"}],
      method:["Preheat oven to 180°C. Line baking tray with baking paper.","Mix pumpkin purée, peanut butter and eggs until smooth.","Stir in flour until a firm dough forms — add a little more flour if sticky.","Roll out on floured surface to 8mm thick. Cut into bone shapes or small rounds.","Bake 25–30 min until firm and golden. Cool completely on wire rack — they harden more as they cool."],
      tip:"⚠️ ALWAYS check peanut butter label — xylitol is deadly to dogs. Use plain peanut butter with zero additives. Great for all ages — break into smaller pieces for puppies.",
      storage:"Airtight: 1 week. Fridge: 2 weeks. Freezer: 3 months." },
    { id:"sweetpotatochews", name:"Sweet Potato Chews", emoji:"🍠", time:180, tier:"free", batchRecipe:true, batchYield:20, batchUnit:"chews",
      ages:["junior","adult","senior"],
      base:[{n:"Medium sweet potatoes",pp:3,u:""}],
      method:["Preheat oven to 120°C — low and slow is essential.","Wash sweet potatoes well. Leave skin on.","Slice into 1cm rounds or strips.","Bake 2.5–3 hours until dried and chewy. Check — should be leathery not crispy.","Cool completely before giving."],
      tip:"Single ingredient, zero additives. Excellent for teething junior dogs. Not recommended for very young puppies — choking risk. Digestive health benefits for seniors.",
      storage:"Airtight: 5 days. Fridge: 2 weeks." },
    { id:"chickenjerkybites", name:"Chicken Jerky Training Strips", emoji:"🍗", time:180, tier:"plus", batchRecipe:true, batchYield:40, batchUnit:"strips",
      ages:["junior","adult","senior"],
      base:[{n:"Chicken breasts (no skin, no fat)",pp:500,u:"g"}],
      method:["Preheat oven to 100°C.","Slice chicken into 3–4mm strips — easier if partially frozen.","Lay flat on wire rack. Do not overlap.","Bake 2.5–3 hours until completely dried. No moisture should remain.","Cool fully. Break into small pieces for training."],
      tip:"Single ingredient, no preservatives, no salt. Dogs go crazy for these. Perfect high-value training treat for all ages. Break very small for junior dogs.",
      storage:"Fridge: 2 weeks. Freezer: 3 months." },
    { id:"oatmealapple", name:"Oatmeal & Apple Biscuits", emoji:"🍎", time:30, tier:"plus", batchRecipe:true, batchYield:24, batchUnit:"biscuits",
      ages:["adult","senior"],
      base:[{n:"Rolled oats (ground to coarse flour)",pp:200,u:"g"},{n:"Apple (peeled, grated — NO seeds!)",pp:1,u:""},{n:"Egg",pp:1,u:"egg"},{n:"Water",pp:30,u:"ml"}],
      method:["Preheat oven to 180°C.","Blend oats in food processor to coarse flour.","Grate apple — remove ALL seeds and core completely.","Mix oat flour, grated apple, egg and water into firm dough.","Form into small rounds or use cutter. Bake 20–25 min until golden. Cool completely."],
      tip:"⚠️ Remove EVERY apple seed — they contain trace cyanide, toxic to dogs. The treat itself is completely safe. Good for adult and senior dogs — fibre supports digestion.",
      storage:"Airtight: 5 days. Fridge: 10 days." },
  ],
  dental:[
    { id:"mintparsley", name:"Mint & Parsley Breath Biscuits", emoji:"🦷", time:35, tier:"free", batchRecipe:true, batchYield:30, batchUnit:"biscuits",
      ages:["junior","adult","senior"],
      base:[{n:"Whole wheat flour",pp:250,u:"g"},{n:"Fresh parsley (finely chopped)",pp:30,u:"g"},{n:"Fresh mint leaves (finely chopped)",pp:10,u:"g"},{n:"Egg",pp:1,u:"egg"},{n:"Water",pp:60,u:"ml"},{n:"Coconut oil (melted)",pp:15,u:"ml"}],
      method:["Preheat oven to 180°C. Line baking tray.","Mix flour, parsley and mint.","Add egg, coconut oil and water. Mix until firm dough.","Roll to 8mm thick. Cut into flat rectangles — flat edges scrape teeth most effectively.","Bake 25–30 min until very firm and dry. Cool completely — harder is better for dental action."],
      tip:"Parsley and mint are natural breath fresheners. The hard texture scrapes plaque from teeth as the dog chews. Make them thick for maximum dental benefit.",
      storage:"Airtight: 2 weeks. Freezer: 3 months." },
    { id:"coconutkelp", name:"Coconut & Kelp Dental Chews", emoji:"🌿", time:40, tier:"plus", batchRecipe:true, batchYield:20, batchUnit:"dental chews",
      ages:["adult","senior"],
      base:[{n:"Coconut flour",pp:100,u:"g"},{n:"Whole wheat flour",pp:150,u:"g"},{n:"Kelp powder (natural teeth cleaner)",pp:5,u:"g"},{n:"Coconut oil (melted)",pp:30,u:"ml"},{n:"Egg",pp:1,u:"egg"},{n:"Water",pp:60,u:"ml"},{n:"Fresh parsley (chopped)",pp:20,u:"g"}],
      method:["Preheat oven to 180°C.","Mix coconut flour, wheat flour and kelp powder.","Add coconut oil, egg, water and parsley. Knead into very firm dough.","Roll to 1cm thick — thicker for maximum chewing action.","Cut into long strips. Bake 30–35 min until very hard and dry. Cool completely."],
      tip:"Kelp powder reduces tartar naturally. Coconut oil has antimicrobial properties for gum health. Best for adult and senior dogs who can handle the harder texture.",
      storage:"Airtight: 3 weeks. Freezer: 3 months." },
  ],
  cooked:[
    { id:"chickenvegbowl", name:"Chicken & Vegetable Bowl", emoji:"🍗", time:35, tier:"free",
      ages:["puppy","junior","adult","senior"],
      base:[{n:"Chicken mince or diced thighs (no skin)",pp:250,u:"g"},{n:"Brown rice",pp:100,u:"g"},{n:"Carrot (grated)",pp:60,u:"g"},{n:"Frozen peas",pp:40,u:"g"},{n:"Baby spinach (finely chopped)",pp:30,u:"g"},{n:"Water or low-sodium stock",pp:300,u:"ml"}],
      method:["Cook brown rice in water until absorbed — 25 min.","Cook chicken mince in dry pan. NO seasoning of any kind — no salt, no pepper, nothing.","Steam carrot and peas until soft.","Combine rice, chicken, carrot, peas and spinach.","Cool COMPLETELY before serving. Check temperature — should be at most lukewarm."],
      tip:"No onions, no garlic, no salt, no seasoning of any kind. Safe for all ages — use smaller portions for puppies. Rotate proteins weekly for nutritional variety.",
      storage:"Fridge: 3 days. Freezer: 1 month." },
    { id:"beefsweet", name:"Beef & Sweet Potato Mash", emoji:"🥩", time:40, tier:"free",
      ages:["junior","adult","senior"],
      base:[{n:"Lean beef mince (drained of all fat)",pp:200,u:"g"},{n:"Sweet potato (peeled, cubed)",pp:200,u:"g"},{n:"Carrot (diced small)",pp:60,u:"g"},{n:"Broccoli florets (finely chopped)",pp:40,u:"g"},{n:"Coconut oil",pp:5,u:"ml"}],
      method:["Boil sweet potato and carrot until very tender — 15 min.","Cook beef mince with NO seasoning. Drain all fat thoroughly.","Steam broccoli 5 min until soft.","Mash sweet potato and carrot. Mix in beef and broccoli.","Stir in coconut oil. Cool completely before serving."],
      tip:"Broccoli is safe in small amounts only — do not make it more than 10% of the meal. Dogs love sweet potato. Good for adult and senior dogs — supports healthy weight.",
      storage:"Fridge: 3 days. Freezer: 1 month." },
    { id:"salmonzucchini", name:"Salmon & Zucchini Bowl", emoji:"🐟", time:25, tier:"plus",
      ages:["adult","senior"],
      base:[{n:"Salmon fillet (cooked, no bones)",pp:150,u:"g"},{n:"Sweet potato (cooked, mashed)",pp:100,u:"g"},{n:"Zucchini/baby marrow (grated, steamed)",pp:50,u:"g"},{n:"Coconut oil",pp:5,u:"ml"}],
      method:["Steam or poach salmon until cooked through. NO seasoning.","Check carefully for bones — remove every single one.","Flake salmon into small pieces.","Combine with mashed sweet potato and steamed zucchini.","Stir in coconut oil. Cool completely."],
      tip:"Excellent omega-3 source for coat and joint health. Ideal for adult and senior dogs. Always check for bones twice — a bone could cause a blockage.",
      storage:"Fridge: 2 days. Freezer: 1 month." },
    { id:"turkeypumpkin", name:"Turkey & Pumpkin Comfort Bowl", emoji:"🦃", time:35, tier:"pro",
      ages:["puppy","junior","adult","senior"],
      base:[{n:"Turkey mince or diced turkey breast",pp:200,u:"g"},{n:"Pumpkin purée (plain, no spices)",pp:100,u:"g"},{n:"Brown rice (cooked)",pp:80,u:"g"},{n:"Peas",pp:40,u:"g"},{n:"Fish oil or flaxseed oil",pp:5,u:"ml"}],
      method:["Cook turkey mince with NO seasoning.","Cook brown rice in plain water.","Steam peas until soft.","Combine turkey, rice, pumpkin and peas. Stir in oil. Cool completely."],
      tip:"Turkey is hypoallergenic — excellent for dogs with chicken or beef allergies. Safe for all ages. Pumpkin is one of the best digestive aids for dogs.",
      storage:"Fridge: 3 days. Freezer: 1 month." },
  ],
  raw:[
    { id:"ancestralmix", name:"The Ancestral Mix (BARF)", emoji:"🥩", time:15, tier:"free",
      ages:["adult","senior"],
      base:[{n:"Muscle meat — raw beef/turkey/chicken mince",pp:350,u:"g"},{n:"Ground edible bone (ask butcher to grind)",pp:100,u:"g"},{n:"Organ meat — heart and kidney mixed",pp:100,u:"g"},{n:"Blended vegetable mash (spinach, blueberries, zucchini)",pp:100,u:"g"}],
      method:["Source from trusted butcher — human-grade only.","Ask butcher to grind edible bones — NEVER feed whole cooked bones.","Blend vegetables very finely — dogs cannot digest whole plant matter.","Mix all components. Portion and freeze immediately.","Thaw in fridge overnight. Serve at room temperature. Wash all surfaces thoroughly after."],
      tip:"⚠️ Handle like raw meat for humans. Introduce gradually over 1–2 weeks to avoid digestive upset. Not recommended for puppies or dogs with compromised immune systems.",
      storage:"Fridge (thawed): 2 days. Freezer: 1–2 months." },
    { id:"rawbeefveg", name:"Raw Beef & Veggie Blend", emoji:"🥩", time:10, tier:"plus",
      ages:["adult"],
      base:[{n:"Raw beef mince (lean, human-grade)",pp:300,u:"g"},{n:"Raw carrot (finely grated)",pp:60,u:"g"},{n:"Raw zucchini (finely grated)",pp:60,u:"g"},{n:"Blueberries (mashed)",pp:30,u:"g"},{n:"Kelp powder (optional)",pp:2,u:"g"}],
      method:["Use fresh human-grade beef only.","Grate carrot and zucchini very finely — dogs cannot digest chunky raw vegetables.","Combine beef, carrot, zucchini, blueberries and kelp.","Portion and freeze immediately. Thaw overnight in fridge. Serve at room temperature."],
      tip:"Raw vegetables must be grated very finely or blended for dogs to absorb the nutrients. For adults only — puppies and seniors need cooked food for easier digestion.",
      storage:"Fridge (thawed): 2 days. Freezer: 1 month." },
  ],
  frozen:[
    { id:"frozenyoghurt", name:"Frozen Yoghurt Kong Filler", emoji:"🧊", time:5, tier:"free",
      ages:["junior","adult","senior"],
      base:[{n:"Plain yoghurt (NO sweeteners, NO xylitol)",pp:240,u:"g"},{n:"Natural peanut butter OR mashed banana",pp:30,u:"g"},{n:"Blueberries or strawberry pieces",pp:50,u:"g"}],
      method:["⚠️ Check yoghurt label — no xylitol, no artificial sweeteners, no added sugar.","Mix yoghurt with peanut butter or banana until smooth.","Fold in fruit pieces.","Fill Kong toys or ice cube trays.","Freeze 2+ hours. Serve on a hot day. Always supervise."],
      tip:"Perfect for hot SA summers. A frozen Kong keeps a dog entertained and mentally stimulated for 20–30 min. Great for anxiety during storms.",
      storage:"Freezer: 1 month." },
    { id:"frozenbroth", name:"Frozen Beef Broth Cubes", emoji:"🫙", time:240, tier:"plus",
      ages:["puppy","junior","adult","senior"],
      base:[{n:"Beef marrow bones (NO seasoning, from butcher)",pp:500,u:"g"},{n:"Carrot (chopped)",pp:1,u:""},{n:"Water",pp:2,u:"L"}],
      method:["Bones, carrot and water in large pot. NO seasoning whatsoever.","Bring to boil. Skim foam from surface. Reduce to gentle simmer.","Simmer 3–4 hours uncovered.","Strain through fine sieve. Cool in fridge overnight.","Skim all solidified fat off the top — important for puppies.","Pour into ice cube trays. Freeze solid. Pop out and store in freezer bags."],
      tip:"Excellent for puppies during teething and for encouraging sick or elderly dogs to eat. The collagen in the broth supports joint health for seniors. Zero seasoning — ever.",
      storage:"Freezer: 3 months. Fridge (liquid): 5 days." },
    { id:"watermelonpops", name:"Frozen Watermelon Pops", emoji:"🍉", time:5, tier:"plus",
      ages:["junior","adult","senior"],
      base:[{n:"Watermelon flesh (NO seeds, NO rind)",pp:300,u:"g"},{n:"Plain yoghurt (no sweeteners)",pp:60,u:"g"}],
      method:["Remove ALL seeds and ALL rind — both are dangerous.","Blend watermelon until smooth.","Mix with plain yoghurt.","Pour into moulds or ice cube trays. Freeze 2+ hours. Supervise while eating."],
      tip:"⚠️ Remove every single seed — seeds can cause intestinal blockages. The rind causes digestive upset. The flesh is 92% water — excellent hydration on hot days.",
      storage:"Freezer: 1 month." },
  ],
  special:[
    { id:"kidneydog", name:"Kidney Support Bowl", emoji:"💊", time:30, tier:"plus",
      ages:["senior"],
      base:[{n:"Egg whites only (low phosphorus protein)",pp:4,u:"egg"},{n:"White rice (cooked, very soft)",pp:200,u:"g"},{n:"Cabbage (steamed, finely chopped)",pp:100,u:"g"},{n:"Apple (peeled, grated — no seeds!)",pp:1,u:""},{n:"Coconut oil",pp:5,u:"ml"}],
      method:["Cook white rice in plain water until very soft — softer than you'd cook for humans.","Scramble egg whites only with NO seasoning.","Steam cabbage until very soft.","Combine rice, egg whites, cabbage and grated apple. Stir in coconut oil. Cool."],
      tip:"Kidney disease requires LOW phosphorus. Egg whites provide protein with minimal phosphorus. ALWAYS consult your vet for exact portions — kidney disease requires professional dietary management.",
      storage:"Fridge: 2 days. Freezer: 1 month." },
    { id:"jointdog", name:"Joint Health Bowl", emoji:"🦴", time:35, tier:"pro",
      ages:["senior"],
      base:[{n:"Salmon fillet (cooked, flaked, no bones)",pp:200,u:"g"},{n:"Sweet potato (cooked, mashed)",pp:150,u:"g"},{n:"Blueberries (mashed)",pp:50,u:"g"},{n:"Turmeric powder",pp:2,u:"g"},{n:"Black pepper (tiny pinch — activates turmeric)",pp:null,u:""},{n:"Fish oil",pp:5,u:"ml"},{n:"Brown rice (cooked)",pp:80,u:"g"}],
      method:["Cook salmon thoroughly. Flake into small pieces. Check for bones.","Cook sweet potato until soft. Mash well.","Combine salmon, sweet potato, blueberries and rice.","Add turmeric and a tiny pinch of black pepper.","Stir in fish oil. Cool completely."],
      tip:"Turmeric + black pepper is one of the most powerful natural anti-inflammatory combinations. The black pepper increases turmeric absorption by 2000%. Best for senior dogs with joint issues.",
      storage:"Fridge: 2 days. Freezer: 1 month." },
    { id:"anxietydog", name:"Calming Anxiety Bowl", emoji:"😰", time:30, tier:"pro",
      ages:["adult","senior"],
      base:[{n:"Turkey mince (natural tryptophan)",pp:250,u:"g"},{n:"Brown rice (cooked)",pp:100,u:"g"},{n:"Blueberries",pp:50,u:"g"},{n:"Chamomile tea (brewed very weak, cooled)",pp:30,u:"ml"},{n:"Sweet potato (mashed)",pp:80,u:"g"}],
      method:["Cook turkey mince thoroughly. No seasoning.","Cook brown rice in plain water.","Brew chamomile tea VERY weak. Cool completely before adding to food.","Combine turkey, rice, sweet potato and blueberries.","Add cooled chamomile tea. Stir well. Cool completely."],
      tip:"Turkey contains tryptophan which converts to serotonin — the calming hormone. Best served 2 hours before storms, fireworks or stressful events.",
      storage:"Fridge: 3 days. Freezer: 1 month." },
  ],
  care:[{ id:"dogcare", name:"Daily Care Guide", emoji:"💧", time:0, tier:"free", ages:["puppy","junior","adult","senior"], base:[], method:[], tip:"", storage:"" }],
};

// ── CAT DATA ──────────────────────────────────────────────────────
const CAT_AGE_STAGES = [
  { id:"all",     label:"All Ages",     emoji:"🐾" },
  { id:"kitten",  label:"Kitten 0–6m",  emoji:"🐱" },
  { id:"growth",  label:"Growth 6–12m", emoji:"🐈" },
  { id:"adult",   label:"Adult 1–10yr", emoji:"😸" },
  { id:"senior",  label:"Senior 10yr+", emoji:"🐈‍⬛" },
];

const CAT_AGE_MULT = { kitten:0.3, growth:0.6, adult:1.0, senior:0.8 };
const CAT_AGE_NOTES = {
  kitten:"Kitten 0–6 months — rapid immune building and growth. Very small frequent meals (4–5/day). High protein essential.",
  growth:"Growth 6–12 months — muscle toning and energy. 3–4 meals per day. Transition to adult portions gradually.",
  adult:"Adult 1–10 years — lean muscle maintenance, coat health. 2 meals per day. Taurine at every meal is non-negotiable.",
  senior:"Senior 10+ years — joint support, digestion, hydration. Soft wet food preferred. Warm food aids appetite."
};

const CAT_SECTIONS_LIST = [
  { id:"meals",   label:"🍽️ Meals",        color:"#e08040", desc:"Nutritious homemade cat food" },
  { id:"treats",  label:"🐟 Treats",        color:"#40a0c0", desc:"Healthy snacks and rewards" },
  { id:"special", label:"💊 Special Diets", color:"#80a040", desc:"Health condition support" },
  { id:"care",    label:"💧 Cat Care",      color:"#608080", desc:"Feeding and wellness guide" },
];

// base amounts = per 1 adult cat. Scale with CAT_AGE_MULT.
// ⚠️ Taurine is non-negotiable at every meal — essential for feline heart and vision.
const CAT_RECIPES = {
  meals:[
    { id:"creamychicken", name:"Creamy Chicken Mousse", emoji:"🍗", time:20, tier:"free",
      ages:["kitten","growth","adult"],
      base:[{n:"Chicken breast (cooked, finely shredded)",pp:80,u:"g"},{n:"Goat milk or plain water",pp:30,u:"ml"},{n:"Taurine supplement (consult vet for dose)",pp:null,u:""}],
      method:["Simmer chicken breast in plain water 15 min until fully cooked. No seasoning.","Cool completely then shred as finely as possible — almost a paste for kittens.","Mix with goat milk or water until smooth and mousse-like.","Add taurine supplement as directed by your vet.","Serve at room temperature. Always have fresh water available separately."],
      tip:"Goat milk is more digestible than cow milk for cats. Kittens especially benefit from the mousse texture — easy to eat without fully developed teeth. Taurine is non-negotiable for feline heart and vision.",
      storage:"Fridge: 2 days. Freeze in small portions." },
    { id:"turkeyliver", name:"Turkey & Liver Bites", emoji:"🦃", time:25, tier:"free",
      ages:["growth","adult"],
      base:[{n:"Turkey mince",pp:80,u:"g"},{n:"Chicken liver (small amount — max 10% of meal)",pp:10,u:"g"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook turkey mince in dry pan. No seasoning — absolutely nothing.","Cook chicken liver 3 min each side — just cooked through, not overdone.","Chop liver very finely — it is rich and too much causes upset.","Combine turkey and liver. Add taurine. Cool completely."],
      tip:"Liver is a powerhouse of nutrition but never more than 10% of the meal — excess liver causes vitamin A toxicity in cats. Shape into small bites for the growth stage cat.",
      storage:"Fridge: 2 days. Freeze in portions." },
    { id:"beefheart", name:"Beef & Heart Ragout", emoji:"🥩", time:25, tier:"free",
      ages:["adult"],
      base:[{n:"Lean beef (finely minced or chopped)",pp:70,u:"g"},{n:"Beef heart (finely diced)",pp:20,u:"g"},{n:"Low-sodium bone broth or water",pp:30,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook beef and beef heart in dry pan. No seasoning of any kind.","Add broth or water. Simmer 5 min until well combined.","Cool completely.","Add taurine supplement. Mix well.","Serve at room temperature."],
      tip:"Beef heart is one of the best natural sources of taurine for cats. The ragout texture suits adult cats perfectly. Never feed raw heart without veterinary guidance.",
      storage:"Fridge: 2 days. Freeze in portions." },
    { id:"chickensweetpotato", name:"Chicken & Sweet Potato Pâté", emoji:"🍠", time:25, tier:"plus",
      ages:["adult","senior"],
      base:[{n:"Chicken breast (cooked, finely shredded)",pp:80,u:"g"},{n:"Sweet potato (cooked, mashed very smooth)",pp:20,u:"g"},{n:"Low-sodium chicken broth",pp:20,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook chicken thoroughly. Shred as finely as possible.","Steam sweet potato until very soft. Mash to a smooth paste.","Combine chicken and sweet potato with broth.","Blend or mash to a smooth pâté consistency.","Add taurine. Cool and serve."],
      tip:"The smooth pâté texture is ideal for senior cats who may have dental issues. Sweet potato aids digestion. The broth adds moisture — critical for kidney health in older cats.",
      storage:"Fridge: 2 days. Freeze in portions." },
    { id:"beefeggsalmon", name:"Beef & Egg Power Bowl", emoji:"🥚", time:20, tier:"plus",
      ages:["adult"],
      base:[{n:"Lean beef (cooked, finely minced)",pp:70,u:"g"},{n:"Hard-boiled egg (½ per cat, finely chopped)",pp:25,u:"g"},{n:"Fish oil (½ tsp)",pp:2,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook beef mince thoroughly. No seasoning.","Hard boil egg exactly 10 min. Cool in cold water. Peel and chop finely.","Combine beef and egg. Add fish oil and taurine.","Serve at room temperature."],
      tip:"Egg provides complete protein with all essential amino acids. Fish oil adds omega-3 for coat and joint health. Complete and balanced for healthy adult cats.",
      storage:"Fridge: 2 days." },
    { id:"tendertureky", name:"Tender Turkey & Broth", emoji:"🍲", time:20, tier:"plus",
      ages:["senior"],
      base:[{n:"Turkey breast (cooked, very finely shredded)",pp:80,u:"g"},{n:"Low-sodium bone broth (warm, not hot)",pp:40,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook turkey breast thoroughly. Shred as finely as possible — senior cats need very soft food.","Warm broth gently. Do not boil.","Combine turkey and warm broth.","Add taurine. Serve warm — not hot. Seniors prefer warm food."],
      tip:"Senior cats (10+) often have reduced sense of smell — warm food releases more aroma and stimulates appetite. The broth adds essential moisture for kidney support. Always soft food for seniors.",
      storage:"Fridge: 2 days." },
    { id:"sardinepumpkin", name:"Sardine & Pumpkin Mash", emoji:"🐟", time:15, tier:"plus",
      ages:["adult","senior"],
      base:[{n:"Tinned sardines in water (no salt, drained)",pp:70,u:"g"},{n:"Pumpkin purée (plain)",pp:15,u:"g"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Drain sardines thoroughly. Mash finely with fork.","Mix with pumpkin purée until well combined.","Add taurine supplement. Serve at room temperature.","Always provide fresh water separately — fish can increase thirst."],
      tip:"Sardines are one of the richest natural sources of omega-3 and taurine for cats. Pumpkin supports digestion. Excellent for seniors — soft texture, high nutrition, easy to eat.",
      storage:"Fridge: 1 day only — fish spoils quickly." },
    { id:"chickengreenbean", name:"Chicken & Green Bean Stew", emoji:"🥗", time:25, tier:"pro",
      ages:["adult","senior"],
      base:[{n:"Chicken breast (cooked, finely shredded)",pp:70,u:"g"},{n:"Green beans (steamed until very soft, finely chopped)",pp:20,u:"g"},{n:"Low-sodium chicken stock",pp:30,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook chicken thoroughly. Shred very finely.","Steam green beans until very soft. Chop as finely as possible.","Combine chicken, beans and stock.","Add taurine. Serve at room temperature or slightly warm."],
      tip:"Green beans are one of the few vegetables that cats can actually benefit from — fibre supports digestion and helps with weight management. Excellent for senior cats who need lean protein.",
      storage:"Fridge: 2 days. Freeze in portions." },
  ],
  treats:[
    { id:"chickenjerkycats", name:"Chicken Jerky Strips", emoji:"🍗", time:180, tier:"free", batchRecipe:true, batchYield:30, batchUnit:"strips",
      ages:["growth","adult","senior"],
      base:[{n:"Chicken breast (no skin, no fat)",pp:200,u:"g"}],
      method:["Preheat oven to 100°C.","Slice chicken into very thin strips — 2–3mm thick.","Lay flat on wire rack. Do not overlap.","Bake 2–3 hours until completely dried.","Cool fully. Break into tiny pieces for cats."],
      tip:"Single ingredient, no preservatives, no salt. A little goes a very long way for cats. High value for training. Not for kittens under 6 months — break very small for growth stage.",
      storage:"Fridge: 2 weeks. Freezer: 3 months." },
    { id:"tunaicecubes", name:"Tuna Ice Cubes", emoji:"🧊", time:5, tier:"free",
      ages:["adult","senior"],
      base:[{n:"Tinned tuna in water (no salt)",pp:1,u:"tin"},{n:"Water",pp:200,u:"ml"}],
      method:["Drain tuna. Reserve the tuna water.","Blend tuna and tuna water with fresh water until smooth.","Pour into ice cube tray. Freeze solid — minimum 2 hours.","Serve 1 cube on a hot day. Supervise."],
      tip:"Perfect for hot SA summers. Encourages hydration in cats who resist drinking — one of the biggest health issues for cats. Not for kittens — too much tuna is not appropriate for small developing systems.",
      storage:"Freezer: 1 month." },
  ],
  special:[
    { id:"kidneycat", name:"Kidney Support Meal", emoji:"💊", time:25, tier:"plus",
      ages:["senior"],
      base:[{n:"Egg whites only (low phosphorus protein)",pp:2,u:"egg"},{n:"White rice (cooked very soft)",pp:2,u:"tbsp"},{n:"Zucchini/baby marrow (steamed, mashed)",pp:1,u:"tbsp"},{n:"Low-sodium chicken stock",pp:1,u:"tbsp"},{n:"Fish oil",pp:2,u:"ml"}],
      method:["Scramble egg whites only in dry pan — no yolks, no seasoning.","Combine with cooked rice, mashed zucchini and stock.","Add fish oil. Mix well. Cool completely.","Serve small portions — kidney cats should eat little and often throughout the day."],
      tip:"Kidney disease is the number one killer of older cats. ALWAYS consult your vet for exact phosphorus limits and portion sizes. This is a support recipe only.",
      storage:"Fridge: 2 days." },
    { id:"urinarycat", name:"Urinary Tract Support Meal", emoji:"💧", time:20, tier:"plus",
      ages:["adult","senior"],
      base:[{n:"Chicken breast (cooked, finely shredded)",pp:80,u:"g"},{n:"Water (added directly to food!)",pp:45,u:"ml"},{n:"White rice (cooked)",pp:1,u:"tbsp"},{n:"Pumpkin purée (plain)",pp:1,u:"tbsp"},{n:"Fish oil",pp:2,u:"ml"}],
      method:["Cook chicken breast thoroughly. Shred very finely.","Combine with rice, pumpkin and fish oil.","Add 3 tbsp of water directly to food and mix well — the moisture is the most important part.","Cool completely. Serve at room temperature."],
      tip:"The NUMBER ONE prevention for urinary issues in cats is moisture in food. This recipe is deliberately very wet. Always ensure fresh water is separately available.",
      storage:"Fridge: 2 days." },
    { id:"seniorcat", name:"Senior Cat Support Meal", emoji:"🐈", time:25, tier:"pro",
      ages:["senior"],
      base:[{n:"Salmon fillet (cooked, flaked, no bones)",pp:60,u:"g"},{n:"Chicken breast (cooked, finely shredded)",pp:30,u:"g"},{n:"Sweet potato (cooked, mashed)",pp:1,u:"tbsp"},{n:"Fish oil (increased for senior)",pp:4,u:"ml"},{n:"Warm water (mixed in for easy eating)",pp:30,u:"ml"},{n:"Taurine supplement",pp:null,u:""}],
      method:["Cook salmon and chicken thoroughly. Flake and shred very finely.","Senior cats may have dental issues — food must be very soft, almost paste-like.","Combine with mashed sweet potato and fish oil.","Add warm water and mix until very soft and moist.","Add taurine. Serve warm — not hot. Seniors often prefer warm food."],
      tip:"Senior cats (10+) need: very soft food, high moisture, easily digestible protein, increased omega-3 for joints, and warm food to stimulate appetite (sense of smell reduces with age).",
      storage:"Fridge: 2 days." },
  ],
  care:[{ id:"catcare", name:"Daily Care Guide", emoji:"💧", time:0, tier:"free", ages:["kitten","growth","adult","senior"], base:[], method:[], tip:"", storage:"" }],
};



// ── SMOOTHIES DATA ────────────────────────────────────────────────
const SMOOTHIES = [
  { id:"tropicalglow", tier:"free", name:"Tropical Glow", emoji:"🥭", cat:"sipshine", kcal:180, colour:"#f5a020",
    badges:["🌟 Skin Glow","🔥 Anti-inflammatory"],
    costPP:22,
    shopping:[{n:"Frozen mango chunks",pp:120,u:"g"},{n:"Banana",pp:60,u:"g"},{n:"Coconut water",pp:150,u:"ml"},{n:"Fresh turmeric",pp:5,u:"g"},{n:"Lime juice",pp:15,u:"ml"},{n:"Hemp seeds",pp:10,u:"g"}],
    base300:[{n:"Frozen mango chunks",a:"120g"},{n:"Banana",a:"60g"},{n:"Coconut water",a:"150ml"},{n:"Fresh turmeric (or ¼ tsp ground)",a:"5g"},{n:"Lime juice",a:"15ml"},{n:"Hemp seeds",a:"10g"}],
    method:["Add all ingredients to blender.","Blend on high 60 sec until silky smooth.","Pour immediately and serve — mango oxidises quickly."],
    tip:"Hemp seeds add omega-3 and protein without changing the flavour. Non-negotiable for the anti-inflammatory effect." },

  { id:"greenenergybolt", tier:"free", name:"Green Energy Bolt", emoji:"🥬", cat:"sipshine", kcal:165, colour:"#30c060",
    badges:["💚 Iron-Rich","⚡ Energy"],
    costPP:18,
    shopping:[{n:"Baby spinach",pp:30,u:"g"},{n:"Green apple",pp:75,u:"g"},{n:"Frozen banana",pp:60,u:"g"},{n:"Fresh ginger (grated)",pp:5,u:"g"},{n:"Lemon juice",pp:15,u:"ml"},{n:"Coconut water",pp:150,u:"ml"},{n:"Chia seeds",pp:10,u:"g"}],
    base300:[{n:"Baby spinach",a:"30g"},{n:"Green apple",a:"75g"},{n:"Frozen banana",a:"60g"},{n:"Fresh ginger (grated)",a:"5g"},{n:"Lemon juice",a:"15ml"},{n:"Coconut water",a:"150ml"},{n:"Chia seeds",a:"10g"}],
    method:["Add coconut water and spinach first — blend until no green flecks remain.","Add remaining ingredients. Blend 45 sec.","Serve immediately — spinach oxidises fast."],
    tip:"Blend the spinach and liquid first. If you see green flecks in your smoothie, blend longer. The iron in spinach absorbs 3× better with lemon juice." },

  { id:"berryblast", tier:"free", name:"Berry Probiotic Blast", emoji:"🫐", cat:"boost", kcal:195, colour:"#8040c0",
    badges:["🫐 Antioxidants","🦠 Gut Health"],
    costPP:28,
    shopping:[{n:"Frozen mixed berries",pp:120,u:"g"},{n:"Banana",pp:30,u:"g"},{n:"Greek yoghurt (plain)",pp:80,u:"g"},{n:"Chia seeds",pp:5,u:"g"},{n:"Oat milk",pp:100,u:"ml"},{n:"Raw cacao powder",pp:5,u:"g"}],
    base300:[{n:"Frozen mixed berries",a:"120g"},{n:"Banana",a:"30g"},{n:"Greek yoghurt (plain)",a:"80g"},{n:"Chia seeds",a:"5g"},{n:"Oat milk",a:"100ml"},{n:"Raw cacao powder",a:"5g"}],
    method:["Blend all ingredients on high for 60 sec.","The yoghurt makes it thick — add extra milk if needed.","Serve immediately."],
    tip:"Greek yoghurt is the probiotic engine here. Raw cacao adds magnesium and deepens the berry flavour without adding sugar." },

  { id:"weightlosszest", tier:"plus", name:"Weight Loss Zest", emoji:"🍋", cat:"boost", kcal:85, colour:"#d0e020",
    badges:["🔥 Metabolism","💧 Satiety"],
    costPP:16,
    shopping:[{n:"Grapefruit",pp:150,u:"g"},{n:"Cucumber",pp:100,u:"g"},{n:"Green tea (chilled)",pp:100,u:"ml"},{n:"Apple cider vinegar",pp:5,u:"ml"},{n:"Fresh mint leaves",pp:5,u:"g"}],
    base300:[{n:"Grapefruit",a:"150g"},{n:"Cucumber",a:"100g"},{n:"Green tea (chilled)",a:"100ml"},{n:"Apple cider vinegar",a:"5ml"},{n:"Fresh mint leaves",a:"5g"}],
    method:["Peel and segment grapefruit. Remove pips.","Blend all ingredients until smooth.","Strain if desired. Serve over ice."],
    tip:"Apple cider vinegar is the secret — it suppresses appetite and supports blood sugar balance. Never more than 5ml or it overpowers everything." },

  { id:"coloncleanse", tier:"plus", name:"Colon Cleanse Fibre", emoji:"🥝", cat:"boost", kcal:145, colour:"#40a060",
    badges:["🌿 Digestion","⚙️ Regularity"],
    costPP:20,
    shopping:[{n:"Paw paw (papaya)",pp:150,u:"g"},{n:"Flax seeds",pp:10,u:"g"},{n:"Kefir",pp:150,u:"ml"},{n:"Prunes",pp:30,u:"g"},{n:"Cinnamon (ground)",pp:2,u:"g"}],
    base300:[{n:"Paw paw (papaya)",a:"150g"},{n:"Flax seeds (ground)",a:"10g"},{n:"Kefir",a:"150ml"},{n:"Prunes (pitted)",a:"30g"},{n:"Cinnamon (ground)",a:"2g"}],
    method:["Blend all ingredients on high 60 sec.","Flax seeds must be pre-ground for absorption — whole seeds pass through undigested.","Drink first thing in the morning on an empty stomach."],
    tip:"Ground flax seeds are non-negotiable — whole ones pass through undigested. Grind in a coffee grinder and store in the freezer." },

  { id:"visionbooster", tier:"plus", name:"Vision Booster", emoji:"🥕", cat:"sipshine", kcal:155, colour:"#f08020",
    badges:["👁️ Eye Health","🥕 Beta-Carotene"],
    costPP:18,
    shopping:[{n:"Carrot",pp:100,u:"g"},{n:"Mango",pp:100,u:"g"},{n:"Baby spinach",pp:30,u:"g"},{n:"Coconut milk",pp:150,u:"ml"},{n:"Goji berries",pp:10,u:"g"}],
    base300:[{n:"Carrot",a:"100g"},{n:"Mango",a:"100g"},{n:"Baby spinach",a:"30g"},{n:"Coconut milk",a:"150ml"},{n:"Goji berries",a:"10g"}],
    method:["Blend carrot and coconut milk first until smooth — carrot is dense.","Add mango, spinach and goji berries. Blend 60 sec.","Serve immediately."],
    tip:"Beta-carotene in carrot and mango converts to Vitamin A in the body. The fat in coconut milk triples the absorption — this is why the pairing is not optional." },

  { id:"macamoodlifter", tier:"plus", name:"Maca Mood Lifter", emoji:"🍫", cat:"boost", kcal:280, colour:"#c06820",
    badges:["⚖️ Hormone Balance","⚡ Energy"],
    costPP:26,
    shopping:[{n:"Banana",pp:100,u:"g"},{n:"Almond butter",pp:20,u:"g"},{n:"Maca powder",pp:5,u:"g"},{n:"Almond milk",pp:200,u:"ml"},{n:"Raw cacao powder",pp:10,u:"g"}],
    base300:[{n:"Banana",a:"100g"},{n:"Almond butter",a:"20g"},{n:"Maca powder",a:"5g"},{n:"Almond milk",a:"200ml"},{n:"Raw cacao powder",a:"10g"}],
    method:["Blend all ingredients on high 60 sec.","Serve immediately — almond butter separates on standing."],
    tip:"Maca is an adaptogen — it doesn't spike hormones, it helps the body regulate them. Start with 5g and increase gradually. Never exceed 15g per day." },

  { id:"hearthealthberry", tier:"plus", name:"Heart Health Berry", emoji:"🍓", cat:"boost", kcal:195, colour:"#d03060",
    badges:["❤️ Cardiovascular","🫐 Omega-3"],
    costPP:30,
    shopping:[{n:"Strawberries",pp:100,u:"g"},{n:"Avocado",pp:50,u:"g"},{n:"Beetroot (cooked)",pp:50,u:"g"},{n:"Kefir",pp:150,u:"ml"},{n:"Walnuts",pp:10,u:"g"}],
    base300:[{n:"Strawberries",a:"100g"},{n:"Avocado",a:"50g"},{n:"Beetroot (cooked)",a:"50g"},{n:"Kefir",a:"150ml"},{n:"Walnuts",a:"10g"}],
    method:["Blend kefir and avocado first — they form the creamy base.","Add strawberries, beetroot and walnuts. Blend 60 sec.","Serve immediately — avocado oxidises quickly."],
    tip:"Avocado is the heart-healthy fat carrier here. Walnuts add plant-based omega-3. The combination lowers LDL cholesterol — drink 3× per week for measurable effect." },

  { id:"immunewarrior", tier:"plus", name:"Immune Warrior Greens", emoji:"🥦", cat:"sipshine", kcal:120, colour:"#208050",
    badges:["🛡️ Immunity","💎 Minerals"],
    costPP:24,
    shopping:[{n:"Pineapple",pp:100,u:"g"},{n:"Kale",pp:30,u:"g"},{n:"Spirulina powder",pp:5,u:"g"},{n:"Coconut water",pp:150,u:"ml"},{n:"Lemon juice",pp:15,u:"ml"}],
    base300:[{n:"Pineapple",a:"100g"},{n:"Kale",a:"30g"},{n:"Spirulina powder",a:"5g"},{n:"Coconut water",a:"150ml"},{n:"Lemon juice",a:"15ml"}],
    method:["Blend pineapple and coconut water first.","Add kale and blend until no flecks — minimum 60 sec.","Add spirulina and lemon. Blend 15 sec more. Serve immediately."],
    tip:"Spirulina is the most nutrient-dense food on the planet per gram. 5g provides as much protein as an egg and more iron than spinach. Never boil or heat it." },

  { id:"brainpowerfuel", tier:"plus", name:"Brain Power Fuel", emoji:"🫐", cat:"protein", kcal:220, colour:"#5060d0",
    badges:["🧠 Focus","💙 Cognitive Health"],
    costPP:32,
    shopping:[{n:"Blueberries",pp:100,u:"g"},{n:"Walnuts",pp:15,u:"g"},{n:"Greek yoghurt",pp:100,u:"g"},{n:"Matcha powder",pp:3,u:"g"},{n:"Almond milk",pp:100,u:"ml"}],
    base300:[{n:"Blueberries",a:"100g"},{n:"Walnuts",a:"15g"},{n:"Greek yoghurt",a:"100g"},{n:"Matcha powder",a:"3g"},{n:"Almond milk",a:"100ml"}],
    method:["Blend almond milk and matcha first to dissolve completely.","Add blueberries, yoghurt and walnuts. Blend 60 sec.","Serve immediately — matcha is light-sensitive."],
    tip:"Matcha provides L-theanine which pairs with caffeine for calm, sustained focus — no jittery crash. Blueberry anthocyanins cross the blood-brain barrier directly. This is a serious brain smoothie." },

  { id:"pbbananab", tier:"free", name:"PB Banana Boost", emoji:"🥜", cat:"protein", kcal:320, colour:"#c08020",
    badges:["💪 High Protein","⚡ Pre-Workout"],
    costPP:18,
    shopping:[{n:"Frozen banana",pp:120,u:"g"},{n:"Natural peanut butter",pp:30,u:"g"},{n:"Oat milk",pp:150,u:"ml"},{n:"Raw cacao powder",pp:5,u:"g"}],
    base300:[{n:"Frozen banana",a:"120g"},{n:"Natural peanut butter",a:"30g"},{n:"Oat milk",a:"150ml"},{n:"Raw cacao powder (optional)",a:"5g"}],
    method:["Blend all on high 45 sec until ultra-smooth.","If too thick, add 20ml extra milk.","Drink within 30 min of workout for best recovery."],
    tip:"Natural peanut butter only — commercial brands contain palm oil and sugar that undo the health benefits. The cacao adds magnesium for muscle recovery." },

  { id:"coffeeprotein", tier:"plus", name:"Coffee Protein Shake", emoji:"☕", cat:"protein", kcal:210, colour:"#806040",
    badges:["☕ Caffeine Boost","💪 Protein"],
    costPP:16,
    shopping:[{n:"Strong brewed coffee (cooled)",pp:120,u:"ml"},{n:"Frozen banana",pp:60,u:"g"},{n:"Oat milk",pp:80,u:"ml"},{n:"Natural peanut butter",pp:15,u:"g"},{n:"Ice",pp:100,u:"g"}],
    base300:[{n:"Strong brewed coffee (cooled to room temp)",a:"120ml"},{n:"Frozen banana",a:"60g"},{n:"Oat milk",a:"80ml"},{n:"Natural peanut butter",a:"15g"},{n:"Ice",a:"handful"}],
    method:["Brew strong coffee. Cool to room temperature — NEVER blend hot liquid.","Blend all ingredients 45 sec until frothy.","Serve immediately in a cold glass."],
    tip:"Coffee MUST be cooled or it will cook the banana and create a bitter, grey smoothie. Make coffee the night before and refrigerate." },
];

const SMOOTHIE_CATS = [
  { id:"all",      label:"All",          emoji:"🥤" },
  { id:"sipshine", label:"✨ Classic",   emoji:"✨" },
  { id:"detox",    label:"💪 Boost",    emoji:"💪" },
  { id:"protein",  label:"🏋️ Protein",  emoji:"🏋️" },
];


// ── PORTION RULES (professional catering standards) ─────────────────────
const PORTION_RULES = {
  mains:   { base:200, cap:400, scale:[1.0, 0.70, 0.55, 0.50] },
  sides:   { base:150, cap:300, scale:[1.0, 0.70, 0.55, 0.50] },
  salads:  { base:90,  cap:200, scale:[1.0, 0.70, 0.55, 0.50] },
  starters:{ base:110, cap:250, scale:[1.0, 0.70, 0.55, 0.50] },
  desserts:{ base:130, cap:260, scale:[1.0, 0.80, 0.65, 0.55] },
  finger:  { base:12,  cap:16,  scale:[1.0, 1.0,  1.0,  1.0]  },
  sauces:  { gravyMl:100, condimentMl:35, dipMl:50 },
};

function calcPortions(selectedItems, category, guests){
  if(!selectedItems || !selectedItems.length) return [];
  const rules = PORTION_RULES[category];
  const n = selectedItems.length;
  const scaleFactor = rules.scale[Math.min(n-1, rules.scale.length-1)];
  const totalPerPerson = Math.min(rules.base * n * scaleFactor, rules.cap);
  const perItemPerPerson = Math.round(totalPerPerson / n);
  return selectedItems.map(item => {
    // Use recipe's own perPerson.meat if available (more accurate), otherwise use portion rules
    const ownPortion = item.perPerson?.meat && item.perPerson.unit !== 'shank' && !String(item.perPerson.unit).includes('tray') ? item.perPerson.meat : null;
    // For mains/starters with own portions, apply scaling if multiple selected
    const gpp = ownPortion
      ? Math.round(ownPortion * scaleFactor * (item.boneIn ? 1.35 : 1))
      : (item.boneIn ? Math.round(perItemPerPerson * 1.35) : perItemPerPerson);
    return {
      ...item,
      gPerPerson: gpp,
      totalKg: Math.round(gpp * guests / 1000 * 10) / 10,
    };
  });
}

function eventCostPP(selectedMains, selectedSides, selectedSalads, selectedStarters){
  const all = [
    ...calcPortions(selectedMains,   'mains',    1),
    ...calcPortions(selectedSides,   'sides',    1),
    ...calcPortions(selectedSalads,  'salads',   1),
    ...calcPortions(selectedStarters,'starters', 1),
  ];
  return all.reduce((sum, item) => sum + ((item.costPP || 0) * (item.gPerPerson / (item.perPerson?.meat || item.gPerPerson))), 0);
}

// ── STATE ─────────────────────────────────────────────────────────
let S = {
  searchQuery: '',
  searchResults: [],
  searchPrevScreen: 'home',
  screen:"home",
  // braai planner
  braiStep:1, people:8, appetite:"normal", budget:"standard", braaiSidesFilter:null,
  selectedMeats:[], selectedSides:[], checkedShopItems:{},
  howItWorksOpen:false, viewingRecipe:null,
  braiCat:"beef",
  braaiView:'browse',
  // baby
  babyFilter:"all", activeBaby:null, babyBatches:1, babyPlan:[],
  chefRecipe:null, mealSort:"popular", mealActiveRecipe:null, chefLoading:false, searchServings:4, _popularRecipe:null, worldKitchenCat:"sa", worldKitchenRegion:"sa", worldKitchenMeal:"all", worldKitchenSort:"popular", _wkRecipe:null,
  // dog
  dogSection:"biscuits", dogSize:"medium", dogCount:1, dogAge:"adult", dogPlan:[], dogBatches:1, activeDog:null,
  // cat
  catSection:"meals", catCount:1, catAge:"adult", catPlan:[], catBatches:1, activeCat:null,
  // smoothies
  smoothieCat:"all", servings:1, activeSmoothie:null,
  // mood
  moodSelected:null, moodRecipes:null, moodLoading:false, moodActiveRecipe:null, moodServings:4, moodPage:0, moodAIRecipes:null, moodAILoading:false,
  // budget paged
  _budgetResults:null, _budgetLoading:false, _budgetError:null, _budgetActiveRecipe:null,
  _budgetPage:0, _budgetDBBank:null, _budgetAIRecipes:null, _budgetAILoading:false,
  // ingredient tick boxes
  _checkedIngs:{},
  // saved recipes
  savedRecipes:[],
  // section plans (World Kitchen, Meal sections, Mood, Budget)
  wkPlan:[],
  wkScreen:null,
  wkServings:4, wkRecipeDetail:null,
  wkSelectedRegion:null,
  wkCountry:null,
  wkSACulture:null,
  wkCourseTab:'mains', mealPlan:[], moodPlan:[], budgetPlan:[],
  wkPlanView:false, mealPlanView:false, moodPlanView:false, budgetPlanView:false,
  _planChecked:{},
  // vital extras
  vitalCat:"freshjuice", activeOats:null, activeMuffin:null, activeRaw:null, activeFermented:null, fermentPlan:[], fermentView:null, fermentBatches:1, extHealthRecipe:null,
  healthPlan:[], checkedHealthItems:{}, healthPlanView:false,
  // furry
  furryPet:"dog",
  // events
  eventTab:"bigcooking", eventGuests:6, buffetGuests:20, eventActiveRecipe:null,
  buffetStep:1,
  eventsSubTab:"mains",
  // Kiddies Parties
  kidsScreen:null, kidsTheme:null, kidsCount:12, kidsBudget:'easy',
  kidsDrinkType:'storebought', kidsCrispType:'regular', kidsShowMasterSnacks:false,
  eventSelectedMains:[], eventSelectedSides:[], eventSelectedSalads:[],
  eventSelectedStarters:[], eventSelectedDesserts:[], eventSelectedSauces:[], eventSelectedFingers:[],
  savouryExpanded:null,
  sandwichVarieties:[], bruschettaVarieties:[], pizzaVarieties:[], fingerShopCart:{},
  fingerSection:'meaty', // which section is open: meaty|pastry|sweet|savoury|veggie|sauces
  fingerView:'browse', // browse | myplan
  fingerHelpOpen:false,
  eventSelectedCultural:[], eventSelectedCakes:[],
  eventFingerEventType:'standalone', eventShowShopList:false,
  checkedBuffetItems:{},
  weddingCakeView:'recipes', weddingCakeActiveRecipe:null,
  cakeCat:null, activeCake:null, cakeGuests:50,
  activeCulturalGroup:null, activeCulturalRecipe:null, culturalTier:null,
  // recipe detail
  recipeServings:null,
  recipeAdjustments:{},
  portionHelpOpen:false,
  // search
  braaiSearchQuery:'',
};

