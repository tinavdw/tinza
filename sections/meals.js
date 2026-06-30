// ════════════════════════════════════════════════════════════════
//  BREAKFAST RECIPE LIBRARY — 70 dishes across 7 browse categories
//  cat: eggs | fryups | toast | pancakes | oats | baked | smoothies
//  ingredient shape: {n: buy-name, pp: per-person amount, u: g|ml|egg|''}
// ════════════════════════════════════════════════════════════════
var BREAKFAST_RECIPES = [
  {
    "id": "bf-cheese-and-tomato-omelette",
    "cat": "eggs",
    "name": "Cheese & Tomato Omelette",
    "emoji": "🧀",
    "cuisine": "Global",
    "photoName": "Cheese & Tomato Omelette",
    "time": 10,
    "costPP": 17,
    "feel": "The everyday omelette that never lets you down.",
    "didYouKnow": "The plain omelette is famously the dish French chefs are judged on — get it tender and barely coloured and you can cook. The cheese-and-tomato version is South Africa's everyday answer to it: the first filling most of us ever learned to fold.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Beat the eggs with salt and pepper.",
      "Melt the butter in a pan over medium heat and pour in the eggs.",
      "As the edges set, scatter over the grated cheddar and chopped tomato.",
      "Fold in half, slide onto a plate and serve."
    ],
    "tip": "Take it off the heat while the centre is still a touch soft; it carries on cooking.",
    "nutrition": {
      "kcal": 340,
      "protein_g": 22,
      "carbs_g": 4,
      "fat_g": 26
    },
    "storage": "Best straight from the pan — an omelette turns rubbery if it waits. A 5-minute job, made to order.",
    "goesWith": [
      "Buttered Toast",
      "Crispy Bacon",
      "Fresh Fruit"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-mushroom-and-feta-omelette",
    "cat": "eggs",
    "name": "Mushroom & Feta Omelette",
    "emoji": "🍄",
    "cuisine": "Global",
    "photoName": "Mushroom & Feta Omelette",
    "time": 12,
    "costPP": 20,
    "feel": "Earthy mushrooms and salty feta, folded warm.",
    "didYouKnow": "Feta is so tied to Greece that it has had protected status in Europe since 2002 — only brined sheep-and-goat's-milk cheese made there may legally be called feta. That brine is also why it needs no extra salt in your eggs.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "mushrooms",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "feta",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Fry the sliced mushrooms in half the butter until golden, then set aside.",
      "Beat the eggs, melt the rest of the butter and pour them in.",
      "As they set, add the mushrooms and crumbled feta over one half.",
      "Fold over and serve."
    ],
    "tip": "Cook the mushrooms first and dry, so the omelette does not go watery.",
    "nutrition": {
      "kcal": 330,
      "protein_g": 21,
      "carbs_g": 3,
      "fat_g": 26
    },
    "storage": "Best the moment it's folded; eggs don't keep or reheat well. Quick enough to make fresh each time.",
    "goesWith": [
      "Crusty Bread",
      "Green Salad",
      "Fresh Fruit"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-hash-brown-omelette",
    "cat": "eggs",
    "name": "Hash Brown Omelette",
    "emoji": "🥔",
    "cuisine": "Global",
    "photoName": "Hash Brown Omelette",
    "time": 20,
    "costPP": 17,
    "feel": "Crispy potato cooked right into a loaded omelette.",
    "didYouKnow": "Cook grated potato right into beaten eggs and you're one step from the Spanish tortilla, basically the national dish in a thicker form. The trick to crisp potato is wringing the gratings dry in a cloth first — wet potato steams instead of browning.",
    "ingredients": [
      {
        "n": "potatoes",
        "pp": 120,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "cheddar",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "green pepper",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "oil",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Grate the potato, squeeze out the water and fry in the oil until golden and crisp.",
      "Pour the beaten eggs over the potato.",
      "As they set, add the chopped pepper and grated cheddar to one half.",
      "Fold over and serve."
    ],
    "tip": "Squeezing the grated potato dry is what gets you crisp, not soggy.",
    "nutrition": {
      "kcal": 380,
      "protein_g": 19,
      "carbs_g": 24,
      "fat_g": 23
    },
    "storage": "Best fresh and hot while the potato is crisp — it softens and the eggs toughen if it stands.",
    "goesWith": [
      "Grilled Tomato",
      "Crispy Bacon",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-masala-scramble",
    "cat": "eggs",
    "name": "Masala Scramble (Akoori)",
    "emoji": "🌶️",
    "cuisine": "Global",
    "photoName": "Masala Scramble",
    "time": 15,
    "costPP": 12,
    "feel": "Soft scrambled eggs lifted with onion, chilli and masala.",
    "didYouKnow": "Akoori is the Parsi spiced scramble of India, carried to South Africa by the community who settled in Natal from the 1860s. The eggs are kept deliberately soft and folded off the heat, so the masala stays bright rather than turning rubbery.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "onion",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "green chilli",
        "pp": 5,
        "u": "g"
      },
      {
        "n": "oil",
        "pp": 6,
        "u": "ml"
      },
      {
        "n": "masala"
      },
      {
        "n": "fresh coriander"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Soften the chopped onion and chilli in the oil over medium heat.",
      "Stir in the chopped tomato and a spoon of masala and cook for 2 minutes.",
      "Pour in the beaten eggs and stir gently until just set.",
      "Finish with chopped coriander and serve with bread or roti."
    ],
    "tip": "Pull it off the heat while still glossy; the eggs firm up as you plate.",
    "nutrition": {
      "kcal": 260,
      "protein_g": 17,
      "carbs_g": 7,
      "fat_g": 18
    },
    "storage": "Best straight off the heat while soft and creamy; scrambled eggs go dry and rubbery on standing.",
    "goesWith": [
      "Toasted Roti",
      "Buttered Toast",
      "Rooibos Tea"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-cloud-eggs",
    "cat": "eggs",
    "name": "Cloud Eggs",
    "emoji": "☁️",
    "cuisine": "Global",
    "photoName": "Cloud Eggs",
    "time": 12,
    "costPP": 9,
    "feel": "Whipped egg-white clouds with a sunny yolk nested in.",
    "didYouKnow": "Cloud eggs went viral around 2017, but the trick is far older — French cooks were baking whipped whites with a yolk dropped in as 'oeufs a la neige', eggs in snow, back in the 1800s. Whisking the whites is pure meringue science: you beat air into the protein so it sets light and billowy instead of flat.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "cheddar",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Separate the eggs, keeping the yolks whole.",
      "Whisk the whites with a pinch of salt to stiff peaks and fold in the grated cheddar.",
      "Spoon into clouds on a lined tray and bake at 230°C for 3 minutes.",
      "Make a dip in each, slip in a yolk and bake 3 minutes more."
    ],
    "tip": "Watch them closely; the whites colour fast at high heat.",
    "nutrition": {
      "kcal": 180,
      "protein_g": 14,
      "carbs_g": 1,
      "fat_g": 13
    },
    "storage": "Best straight from the oven — the whipped whites deflate as they cool, so these don't keep or reheat.",
    "goesWith": [
      "Buttered Toast",
      "Fresh Fruit",
      "Berry Smoothie"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-frittata",
    "cat": "eggs",
    "name": "Frittata",
    "emoji": "🍳",
    "cuisine": "Italian",
    "photoName": "Frittata",
    "freezes": true,
    "fridgeDays": 3,
    "time": 25,
    "costPP": 18,
    "feel": "Bacon, potato and melted cheddar in a fat golden wedge — Sunday in a pan.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit",
      "Berry Smoothie"
    ],
    "didYouKnow": "Frittata comes from the Italian \"fritto\", to fry — but unlike an omelette it is never folded. The eggs and fillings cook slowly together, then the top is set under a grill, so it slices into wedges like a savoury cake. It began as a thrifty way to use up whatever was in the kitchen, which is exactly why almost anything works in one.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "streaky bacon",
        "pp": 35,
        "u": "g"
      },
      {
        "n": "potatoes",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "baby spinach",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 20,
        "u": "ml"
      },
      {
        "n": "oil",
        "pp": 5,
        "u": "ml"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Use leftover or par-boiled diced potato. Fry the chopped bacon in an oven-safe, non-stick pan until crisp, then add the potato and colour it.",
      "Wilt in the spinach for a minute.",
      "Beat the eggs with the cream, salt and pepper and pour over the bacon and potato.",
      "Scatter the grated cheddar on top and cook on the stove until the edges set, about 3 minutes.",
      "Slide under a hot grill (or into a 180°C oven) for 5 to 6 minutes until puffed and golden, then cut into wedges."
    ],
    "tip": "Use cooked potato — raw potato will not cook through in the time the eggs need.",
    "nutrition": {
      "kcal": 420,
      "protein_g": 24,
      "carbs_g": 16,
      "fat_g": 30
    },
    "storage": "Keeps 3 days in the fridge, lekker cold or gently reheated; freezes well in wedges up to 1 month.",
    "versions": [
      {
        "name": "Bacon, Potato & Cheddar",
        "icon": "⭐",
        "default": true,
        "feel": "Bacon, potato and melted cheddar in a fat golden wedge — Sunday in a pan.",
        "time": 25,
        "costPP": 18,
        "ingredients": [
          {
            "n": "large eggs",
            "pp": 2,
            "u": "egg"
          },
          {
            "n": "streaky bacon",
            "pp": 35,
            "u": "g"
          },
          {
            "n": "potatoes",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "baby spinach",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "cream",
            "pp": 20,
            "u": "ml"
          },
          {
            "n": "oil",
            "pp": 5,
            "u": "ml"
          },
          {
            "n": "salt & pepper"
          }
        ],
        "method": [
          "Use leftover or par-boiled diced potato. Fry the chopped bacon in an oven-safe, non-stick pan until crisp, then add the potato and colour it.",
          "Wilt in the spinach for a minute.",
          "Beat the eggs with the cream, salt and pepper and pour over the bacon and potato.",
          "Scatter the grated cheddar on top and cook on the stove until the edges set, about 3 minutes.",
          "Slide under a hot grill (or into a 180°C oven) for 5 to 6 minutes until puffed and golden, then cut into wedges."
        ],
        "tip": "Use cooked potato — raw potato will not cook through in the time the eggs need.",
        "nutrition": {
          "kcal": 420,
          "protein_g": 24,
          "carbs_g": 16,
          "fat_g": 30
        },
        "storage": "Keeps 3 days in the fridge, lekker cold or gently reheated; freezes well in wedges up to 1 month."
      },
      {
        "name": "Mediterranean Veg",
        "icon": "🌿",
        "feel": "Sweet roast veg and melty cheese — meat-free and properly satisfying.",
        "time": 30,
        "costPP": 14,
        "ingredients": [
          {
            "n": "large eggs",
            "pp": 2,
            "u": "egg"
          },
          {
            "n": "sweet potato",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "baby marrow",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "red pepper",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          },
          {
            "n": "salt & pepper"
          }
        ],
        "method": [
          "Dice the sweet potato small and roast or par-boil it until just tender.",
          "Fry the sliced baby marrow and red pepper in the oil until softened, then add the sweet potato.",
          "Beat the eggs with salt and pepper and pour over the veg.",
          "Scatter over the cheddar and set the edges on the stove, about 3 minutes.",
          "Finish under a hot grill until golden and puffed, then cut into wedges."
        ],
        "tip": "Roast the sweet potato a touch first; the caramel sweetness plays beautifully against the eggs.",
        "nutrition": {
          "kcal": 330,
          "protein_g": 17,
          "carbs_g": 22,
          "fat_g": 19
        },
        "storage": "Keeps 3 days in the fridge, good warm or cold; freezes well in wedges up to 1 month."
      },
      {
        "name": "Mushroom & Feta",
        "icon": "🍄",
        "feel": "Earthy mushrooms and salty feta — simple, savoury and grown-up.",
        "time": 22,
        "costPP": 14,
        "ingredients": [
          {
            "n": "large eggs",
            "pp": 2,
            "u": "egg"
          },
          {
            "n": "mushrooms",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "feta",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "spring onion",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "butter",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "salt & pepper"
          }
        ],
        "method": [
          "Fry the sliced mushrooms and spring onion in the butter until golden and dry.",
          "Beat the eggs with salt and pepper and pour over the mushrooms.",
          "Crumble the feta over the top.",
          "Cook on the stove until the edges set, about 3 minutes.",
          "Finish under a hot grill until puffed and golden, then cut into wedges."
        ],
        "tip": "Cook the mushrooms until really dry, or the frittata goes watery.",
        "nutrition": {
          "kcal": 300,
          "protein_g": 18,
          "carbs_g": 4,
          "fat_g": 23
        },
        "storage": "Keeps 3 days in the fridge, good cold; freezes well in wedges up to 1 month."
      },
      {
        "name": "Chorizo & Sweetcorn",
        "icon": "🌶️",
        "feel": "Spicy chorizo and sweet mielies — a bit of fire, a bit of sunshine.",
        "time": 22,
        "costPP": 17,
        "ingredients": [
          {
            "n": "large eggs",
            "pp": 2,
            "u": "egg"
          },
          {
            "n": "chorizo",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "sweetcorn",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "red onion",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "green chilli",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "oil",
            "pp": 5,
            "u": "ml"
          },
          {
            "n": "salt & pepper"
          }
        ],
        "method": [
          "Fry the sliced chorizo until its smoky oil runs, then add the chopped red onion and chilli.",
          "Stir in the mielie kernels and warm through.",
          "Beat the eggs with salt and pepper and pour over.",
          "Cook on the stove until the edges set, about 3 minutes.",
          "Finish under a hot grill until golden, then cut into wedges."
        ],
        "tip": "Let the chorizo render first — that smoky oil flavours the whole frittata.",
        "nutrition": {
          "kcal": 380,
          "protein_g": 20,
          "carbs_g": 14,
          "fat_g": 27
        },
        "storage": "Keeps 3 days in the fridge and reheats well; freezes well in wedges up to 1 month."
      },
      {
        "name": "Tomato, Basil & Pesto",
        "icon": "🍅",
        "feel": "Blistered tomatoes, swirls of pesto and fresh basil — summer on a plate.",
        "time": 22,
        "costPP": 16,
        "ingredients": [
          {
            "n": "large eggs",
            "pp": 2,
            "u": "egg"
          },
          {
            "n": "cherry tomatoes",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "mozzarella",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "basil pesto",
            "pp": 20,
            "u": "g"
          },
          {
            "n": "fresh basil",
            "pp": 0,
            "u": ""
          },
          {
            "n": "olive oil",
            "pp": 5,
            "u": "ml"
          },
          {
            "n": "salt & pepper"
          }
        ],
        "method": [
          "Halve the cherry tomatoes and blister them cut-side down in the oil, then spread them out in the pan.",
          "Beat the eggs with salt and pepper and pour over the tomatoes.",
          "Dot spoonfuls of pesto over the top and tear over the mozzarella.",
          "Set the edges on the stove, about 3 minutes.",
          "Finish under a hot grill until golden and bubbling, scatter with fresh basil and cut into wedges."
        ],
        "tip": "Make your own Basil Pesto in the Spice room — it lifts this from nice to special.",
        "nutrition": {
          "kcal": 340,
          "protein_g": 18,
          "carbs_g": 6,
          "fat_g": 27
        },
        "storage": "Keeps 2 days in the fridge; freezes in wedges up to 1 month, but add the fresh basil only when serving."
      }
    ]
  },
  {
    "id": "bf-omelette-waffle",
    "cat": "eggs",
    "name": "Omelette Waffle",
    "emoji": "🧇",
    "cuisine": "Global",
    "photoName": "Omelette Waffle",
    "freezes": false,
    "fridgeDays": 1,
    "time": 12,
    "costPP": 16,
    "feel": "All the joy of an omelette with none of the flipping — the iron does the work.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit",
      "Berry Smoothie"
    ],
    "didYouKnow": "A waffle iron is really just two hot, patterned plates — which is why it cooks almost anything pourable, not only batter. Beaten egg sets into those pockets with crisp, lacy edges and a fluffy middle, and because both sides cook at once there is no flip and no fold to go wrong. It is one of the highest-protein ways to start the day on a single appliance.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "ham",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "baby spinach",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 15,
        "u": "ml"
      },
      {
        "n": "butter",
        "pp": 6,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Heat the waffle iron and grease it really well with butter — egg loves to stick, so be generous.",
      "Beat the eggs with the milk, salt and pepper.",
      "Stir in the chopped ham, grated cheddar and chopped spinach.",
      "Pour into the hot iron, close gently and cook until set and golden, about 4 to 5 minutes — do not peek too early.",
      "Lift out carefully with a fork and serve straight away. No flipping, no folding."
    ],
    "tip": "Grease the iron well and keep it closed; if you open it early the egg tears and sticks.",
    "nutrition": {
      "kcal": 330,
      "protein_g": 24,
      "carbs_g": 4,
      "fat_g": 23
    },
    "storage": "Best fresh; keeps 1 day in the fridge and is lekker cold in a lunchbox. Not for freezing — the egg goes rubbery."
  },
  {
    "id": "bf-snoek-scramble",
    "cat": "eggs",
    "name": "Smoked Snoek Scrambled Eggs",
    "emoji": "🐟",
    "cuisine": "South African (Cape)",
    "photoName": "Smoked Snoek Scrambled Eggs",
    "time": 12,
    "costPP": 22,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Smoky Cape snoek folded through soft, buttery eggs — the sea at breakfast.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Snoek is a long, fierce Cape fish, traditionally hot-smoked over wood until the flesh turns golden and flakes into smoky shards. A jar or vacuum-pack of smoked snoek is a Cape pantry staple, and folding it through scrambled eggs is one of the oldest, simplest ways to stretch a little of it into a whole breakfast.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 3,
        "u": "egg"
      },
      {
        "n": "smoked snoek",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "spring onion",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 15,
        "u": "ml"
      },
      {
        "n": "white bread",
        "pp": 1,
        "u": ""
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Flake the smoked snoek, checking carefully for little bones.",
      "Beat the eggs with the cream and a good grind of pepper.",
      "Melt the butter over low heat and soften the chopped spring onion.",
      "Pour in the eggs and stir gently, folding the flaked snoek through as they begin to set.",
      "Pull off the heat while still soft and glossy, and serve on buttered toast."
    ],
    "tip": "Go easy on salt — smoked snoek brings plenty of its own — and check carefully for bones.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 28,
      "carbs_g": 14,
      "fat_g": 22
    },
    "storage": "Best eaten straight away; scrambled eggs do not keep or freeze well. Leftover flaked snoek keeps 2 days in the fridge."
  },
  {
    "id": "bf-chakalaka-baked-eggs",
    "cat": "eggs",
    "name": "Chakalaka Baked Eggs",
    "emoji": "🫘",
    "cuisine": "South African",
    "photoName": "Chakalaka Baked Eggs",
    "time": 18,
    "costPP": 14,
    "freezes": false,
    "fridgeDays": 3,
    "feel": "A proper South African shakshuka — eggs baked into spicy chakalaka, scooped up with bread.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Chakalaka was born in the townships and mine hostels around Johannesburg, a fiery cook-up of onion, pepper, chilli and curry spice built to make plain food sing. Cracking eggs straight into a bubbling pan of it turns a relish into a whole meal — South Africa's answer to shakshuka.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "chakalaka",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "onion",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "oil",
        "pp": 6,
        "u": "ml"
      },
      {
        "n": "fresh coriander"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Soften the chopped onion in the oil in an oven-safe pan, then add the chopped tomato and cook to a thick base.",
      "Stir in the chakalaka with a splash of water and bring to a gentle bubble.",
      "Make wells in the sauce and crack in the eggs.",
      "Cover and cook on low (or in a 180°C oven) until the whites set but the yolks stay soft, about 6 to 8 minutes.",
      "Scatter with grated cheddar and coriander, and serve from the pan with bread to dip."
    ],
    "tip": "Keep the heat low once the eggs are in, so the yolks stay soft while the whites set.",
    "nutrition": {
      "kcal": 260,
      "protein_g": 15,
      "carbs_g": 18,
      "fat_g": 14
    },
    "storage": "Best eaten fresh from the pan. The chakalaka base keeps 3 days in the fridge and freezes well on its own — add fresh eggs each time. Cooked eggs do not freeze."
  },
  {
    "id": "bf-turkish-eggs",
    "cat": "eggs",
    "name": "Turkish Eggs",
    "emoji": "🥚",
    "cuisine": "Turkish",
    "photoName": "Turkish Eggs",
    "time": 15,
    "costPP": 15,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Soft poached eggs on cool garlicky yoghurt under a pool of warm chilli butter — try it once and you crave it.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Known as cilbir, this is one of the oldest recorded egg dishes — it was served in the Ottoman palace kitchens of the 15th century. The magic is the contrast: cool, tangy garlic yoghurt against hot poached eggs and nutty, spiced butter.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "plain yoghurt",
        "pp": 120,
        "u": "g"
      },
      {
        "n": "garlic",
        "pp": 0.5,
        "u": "clove"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "paprika"
      },
      {
        "n": "white vinegar",
        "pp": 5,
        "u": "ml"
      },
      {
        "n": "fresh dill"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Stir the crushed garlic and a pinch of salt into the yoghurt and spread it over a plate — room-temperature yoghurt is nicest.",
      "Bring a pot of water to a gentle simmer with a splash of vinegar, and poach the eggs for about 3 minutes for soft yolks.",
      "Melt the butter until it foams and smells nutty, then stir in the paprika off the heat.",
      "Sit the drained poached eggs on the garlicky yoghurt.",
      "Spoon the warm spiced butter over, scatter with dill, and serve with bread."
    ],
    "tip": "Take the yoghurt out early — room-temperature yoghurt against hot eggs is the whole point.",
    "nutrition": {
      "kcal": 320,
      "protein_g": 18,
      "carbs_g": 8,
      "fat_g": 24
    },
    "storage": "Best assembled fresh. The garlicky yoghurt keeps 2 days in the fridge — poach the eggs to order. Not for freezing."
  },
  {
    "id": "bf-shakshuka",
    "cat": "eggs",
    "name": "Shakshuka",
    "emoji": "🍅",
    "cuisine": "North African / Middle Eastern",
    "time": 25,
    "costPP": 24,
    "feel": "Eggs poached in a bubbling, spiced tomato hug.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "tomatoes",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "onion",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "red pepper",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "tomato paste",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "olive oil",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "paprika & cumin"
      }
    ],
    "method": [
      "Soften the chopped onion and pepper in olive oil over medium heat, about 5 minutes.",
      "Stir in the tomato paste, paprika and cumin, then add the chopped tomatoes. Simmer 10 minutes until thick.",
      "Make wells in the sauce and crack in the eggs. Cover and cook until the whites set but the yolks stay soft.",
      "Serve straight from the pan with bread for dipping."
    ],
    "tip": "A handful of crumbled feta over the top just before serving is never a mistake.",
    "nutrition": {
      "kcal": 310,
      "protein_g": 16,
      "carbs_g": 18,
      "fat_g": 20
    },
    "storage": "Sauce keeps 3 days; add fresh eggs when reheating.",
    "photoName": "Shakshuka",
    "didYouKnow": "Shakshuka means 'a mixture' in North African Arabic and most likely began in Tunisia before spreading across the Middle East. Poaching the eggs straight in the sauce, rather than in water, lets them drink up all the smoky paprika and cumin — and leaves you one less pot to wash.",
    "goesWith": [
      "Crusty Bread",
      "Smashed Avo Toast",
      "Strong Coffee"
    ],
    "freezes": true,
    "fridgeDays": 3
  },
  {
    "id": "bf-egg-wrap",
    "cat": "eggs",
    "name": "Breakfast Egg Wrap",
    "emoji": "🌯",
    "cuisine": "Global",
    "time": 12,
    "costPP": 18,
    "feel": "A whole fry-up, rolled up and running out the door.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "tortilla wrap",
        "pp": 1,
        "u": ""
      },
      {
        "n": "cheddar",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 6,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Scramble the eggs softly in butter, seasoning as you go.",
      "Warm the tortilla in a dry pan for a few seconds.",
      "Pile the eggs down the middle, top with grated cheddar and chopped tomato.",
      "Roll up tightly, slice in half and go."
    ],
    "tip": "Wrap it in foil to keep it warm and hold it together on the road.",
    "nutrition": {
      "kcal": 390,
      "protein_g": 21,
      "carbs_g": 26,
      "fat_g": 22
    },
    "storage": "Best warm and fresh; the egg makes it soggy if it sits. Wrap in foil to eat on the run.",
    "photoName": "Breakfast Egg Wrap",
    "didYouKnow": "The flour tortilla was built for exactly this job — sturdy enough to hold a hot filling and eat one-handed on the move. Folding the egg around everything while it's still wet in the pan glues the whole wrap shut, so nothing escapes on the school run.",
    "goesWith": [
      "Fresh Fruit",
      "Berry Smoothie",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-bacon-and-eggs",
    "cat": "fryups",
    "name": "Bacon & Eggs",
    "emoji": "🥓",
    "cuisine": "South African",
    "photoName": "Bacon & Eggs",
    "time": 15,
    "costPP": 26,
    "feel": "The smell that pulls everyone out of bed.",
    "didYouKnow": "The big bacon-and-eggs breakfast isn't ancient tradition — it was popularised in 1920s America by a public-relations man, Edward Bernays, hired to sell more bacon. He got doctors to endorse a 'hearty' start to the day, and the pairing stuck worldwide.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "streaky bacon",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "white bread",
        "pp": 2,
        "u": ""
      },
      {
        "n": "butter",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Fry the bacon in a dry pan over medium heat until crisp, then set aside on paper towel.",
      "Halve the tomatoes and fry cut-side down in the bacon fat until soft and caramelised.",
      "Fry the eggs to your liking in the same pan.",
      "Toast and butter the bread, plate everything together, season and serve hot."
    ],
    "tip": "Cook the eggs last so the yolks stay runny and warm on the plate.",
    "nutrition": {
      "kcal": 430,
      "protein_g": 24,
      "carbs_g": 22,
      "fat_g": 28
    },
    "storage": "Best fresh; cooked bacon keeps 2 days in the fridge.",
    "goesWith": [
      "Buttered Toast",
      "Grilled Tomato",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-boerewors-and-eggs",
    "cat": "fryups",
    "name": "Boerewors & Eggs",
    "emoji": "🌭",
    "cuisine": "South African",
    "photoName": "Boerewors & Eggs",
    "time": 20,
    "costPP": 18,
    "feel": "A coil of wors and a soft egg — a proper farm start.",
    "didYouKnow": "By South African law, anything sold as boerewors must be at least 90% meat, with strict limits on fat and fillers — it's one of very few foods with its own legal recipe. Coiled and fried alongside a soft egg, it's farm-stall breakfast at its most honest.",
    "ingredients": [
      {
        "n": "boerewors",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "tomatoes",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "white bread",
        "pp": 1,
        "u": ""
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Fry the boerewors in a pan over medium heat, turning, until browned and cooked through.",
      "Halve the tomatoes and fry them cut-side down in the wors fat until soft.",
      "Fry the eggs to your liking in the same pan.",
      "Toast the bread, plate everything together and season."
    ],
    "tip": "Do not prick the wors; keeping it whole holds the juices in.",
    "nutrition": {
      "kcal": 460,
      "protein_g": 24,
      "carbs_g": 18,
      "fat_g": 32
    },
    "storage": "Best fresh; cooked wors keeps 2 days.",
    "goesWith": [
      "Buttered Toast",
      "Grilled Tomato",
      "Chakalaka"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-smashed-avo-toast",
    "cat": "toast",
    "name": "Smashed Avo Toast",
    "emoji": "🥑",
    "cuisine": "Global",
    "photoName": "Smashed Avo Toast",
    "time": 8,
    "costPP": 16,
    "feel": "Creamy, green and a little bit smug — in the best way.",
    "didYouKnow": "Avo toast became a global symbol of millennial spending, but South Africa has been eating it for generations — we're one of the world's biggest avocado growers, with the Tzaneen and Levubu valleys shipping fruit to Europe. A squeeze of lemon keeps the green from browning.",
    "ingredients": [
      {
        "n": "avocado",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "sourdough bread",
        "pp": 1,
        "u": ""
      },
      {
        "n": "olive oil",
        "pp": 5,
        "u": "ml"
      },
      {
        "n": "lemon juice"
      },
      {
        "n": "salt & pepper"
      },
      {
        "n": "chilli flakes"
      }
    ],
    "method": [
      "Toast the bread until golden.",
      "Mash the avocado with a squeeze of lemon, salt and pepper.",
      "Spread thickly onto the toast.",
      "Finish with a drizzle of olive oil and a pinch of chilli flakes."
    ],
    "tip": "A poached egg on top turns this into a proper meal.",
    "nutrition": {
      "kcal": 300,
      "protein_g": 7,
      "carbs_g": 28,
      "fat_g": 19
    },
    "storage": "Best fresh; avocado browns quickly.",
    "goesWith": [
      "Poached Egg",
      "Crispy Bacon",
      "Green Smoothie"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-peanut-butter-and-banana-toast",
    "cat": "toast",
    "name": "Peanut Butter & Banana Toast",
    "emoji": "🍌",
    "cuisine": "Global",
    "photoName": "Peanut Butter & Banana Toast",
    "time": 5,
    "costPP": 9,
    "feel": "The lunchbox hero, fast and filling.",
    "didYouKnow": "This is basically Elvis's favourite sandwich, minus the frying — he was famous for his peanut-butter-and-banana toasties. The combination works because the banana's sweetness balances the peanut butter's salt, and both are slow-release fuel that carries a lunchbox eater through to break.",
    "ingredients": [
      {
        "n": "white bread",
        "pp": 2,
        "u": ""
      },
      {
        "n": "peanut butter",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "banana",
        "pp": 1,
        "u": ""
      },
      {
        "n": "honey",
        "pp": 5,
        "u": "ml"
      }
    ],
    "method": [
      "Toast the bread.",
      "Spread thickly with peanut butter.",
      "Lay over sliced banana.",
      "Drizzle with honey and serve."
    ],
    "tip": "Use brown bread for extra staying power before school.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 11,
      "carbs_g": 48,
      "fat_g": 15
    },
    "storage": "Best made fresh; the banana browns and the toast softens if it waits. A 2-minute job.",
    "goesWith": [
      "Fresh Fruit",
      "Berry Smoothie",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-honey-brick-toast",
    "cat": "toast",
    "name": "Honey Brick Toast",
    "emoji": "🍯",
    "cuisine": "Global",
    "photoName": "Honey Brick Toast",
    "time": 20,
    "costPP": 10,
    "feel": "A thick toast block, custard-soaked and baked sweet and golden.",
    "didYouKnow": "Honey brick toast — a thick block of bread cubed, soaked in honey butter and baked — is a Korean cafe favourite that swept dessert spots around the world. Scoring it into cubes before baking lets every cut surface crisp and catch the honey, so it's crunchy outside and pillowy within.",
    "ingredients": [
      {
        "n": "unsliced white loaf",
        "pp": 0.25,
        "u": ""
      },
      {
        "n": "butter",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 20,
        "u": "ml"
      },
      {
        "n": "cream",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Cut a thick brick of bread and score the top into cubes, not all the way through.",
      "Brush all over with melted butter and honey.",
      "Bake at 180°C until toasty and golden, about 12 minutes.",
      "Pull the cubes apart, drizzle with cream and more honey."
    ],
    "tip": "Day-old bread holds the brick shape best.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 6,
      "carbs_g": 48,
      "fat_g": 17
    },
    "storage": "Best warm from the oven while crisp and gooey; it dries out if kept.",
    "goesWith": [
      "Fresh Berries",
      "Whipped Cream",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-chakalaka-beans-on-toast",
    "cat": "toast",
    "name": "Chakalaka Beans on Toast",
    "emoji": "🫘",
    "cuisine": "Global",
    "photoName": "Chakalaka Beans on Toast",
    "time": 12,
    "costPP": 11,
    "feel": "Beans on toast with a proper South African kick.",
    "didYouKnow": "Chakalaka was born in the mines and townships around Johannesburg, where workers jazzed up tinned beans and whatever veg they had into a fiery relish. Stirred through baked beans on toast, it turns the most basic pantry breakfast into something with real backbone.",
    "ingredients": [
      {
        "n": "baked beans",
        "pp": 120,
        "u": "g"
      },
      {
        "n": "chakalaka",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "white bread",
        "pp": 2,
        "u": ""
      },
      {
        "n": "butter",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Warm the baked beans and chakalaka together in a small pot.",
      "Toast and butter the bread.",
      "Pile the spiced beans over the toast and serve hot."
    ],
    "tip": "A handful of grated cheese melted on top is never wrong.",
    "nutrition": {
      "kcal": 320,
      "protein_g": 13,
      "carbs_g": 50,
      "fat_g": 8
    },
    "storage": "Toast fresh to order; the bean mix keeps 3 days in the fridge and reheats well.",
    "goesWith": [
      "Fried Egg",
      "Grilled Tomato",
      "Strong Coffee"
    ],
    "freezes": false,
    "fridgeDays": 3
  },
  {
    "id": "bf-savoury-mince-on-toast",
    "cat": "toast",
    "name": "Savoury Mince on Toast",
    "emoji": "🥩",
    "cuisine": "Global",
    "photoName": "Savoury Mince on Toast",
    "time": 20,
    "costPP": 15,
    "feel": "Rich, oniony mince piled on buttered toast.",
    "didYouKnow": "Savoury mince on toast is the thrifty cook's best friend — a little mince stretched with onion and tomato feeds a whole table cheaply. It's a direct descendant of the British 'mince on toast' that came to South African kitchens and simply never left.",
    "ingredients": [
      {
        "n": "beef mince",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "onion",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "tomatoes",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "white bread",
        "pp": 2,
        "u": ""
      },
      {
        "n": "oil",
        "pp": 5,
        "u": "ml"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Brown the mince with the chopped onion in the oil over medium-high heat.",
      "Add the chopped tomato and a splash of water and simmer until thick.",
      "Season well.",
      "Spoon over hot buttered toast."
    ],
    "tip": "A dash of Worcestershire or chutney rounds it out beautifully.",
    "nutrition": {
      "kcal": 420,
      "protein_g": 24,
      "carbs_g": 30,
      "fat_g": 22
    },
    "storage": "Toast fresh; the savoury mince keeps 3 days in the fridge and freezes up to 1 month.",
    "goesWith": [
      "Fried Egg",
      "Fresh Fruit",
      "Strong Coffee"
    ],
    "freezes": true,
    "fridgeDays": 3
  },
  {
    "id": "bf-cinnamon-french-toast",
    "cat": "pancakes",
    "name": "Cinnamon French Toast",
    "emoji": "🍳",
    "cuisine": "Global",
    "photoName": "Cinnamon French Toast",
    "time": 15,
    "costPP": 12,
    "feel": "Day-old bread, reborn as something special.",
    "didYouKnow": "French toast isn't really French — the Romans were already soaking stale bread in milk and egg, and the French call it 'pain perdu', meaning 'lost bread', because it rescues a loaf that would otherwise be thrown away.",
    "ingredients": [
      {
        "n": "thick white bread",
        "pp": 2,
        "u": ""
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 60,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "cinnamon"
      }
    ],
    "method": [
      "Whisk the eggs, milk, sugar and a pinch of cinnamon in a shallow dish.",
      "Soak each slice of bread for a few seconds per side.",
      "Fry in butter over medium heat until golden on both sides.",
      "Serve dusted with cinnamon sugar or a drizzle of syrup."
    ],
    "tip": "Slightly stale bread soaks up the custard best without going soggy.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 13,
      "carbs_g": 44,
      "fat_g": 15
    },
    "storage": "Best fresh and hot the same morning; it goes soggy if it stands.",
    "goesWith": [
      "Crispy Bacon",
      "Fresh Berries",
      "Maple Syrup"
    ],
    "freezes": false,
    "fridgeDays": 0
  },
  {
    "id": "bf-pannekoek",
    "cat": "pancakes",
    "name": "Pannekoek",
    "emoji": "🥞",
    "cuisine": "Global",
    "photoName": "Pannekoek",
    "time": 20,
    "costPP": 7,
    "feel": "Thin, lacy pancakes rolled with cinnamon sugar.",
    "didYouKnow": "Pannekoek came with the Dutch and became a South African church-bazaar institution — thin, rolled with cinnamon sugar and sold by the dozen. The Dutch claim is so strong that the Netherlands has whole restaurants, pannenkoekenhuizen, devoted to nothing else.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "oil",
        "pp": 5,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk the flour, egg, milk, oil and a pinch of salt to a thin, smooth batter.",
      "Pour a thin layer into a hot greased pan and swirl to coat.",
      "Cook until the edges lift, flip and cook the other side.",
      "Sprinkle with cinnamon sugar, roll up and serve."
    ],
    "tip": "Rest the batter 10 minutes for thinner, more tender pancakes.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 7,
      "carbs_g": 34,
      "fat_g": 8
    },
    "storage": "Best fresh; stack with paper between layers. Keeps 2 days in the fridge and freezes up to 1 month.",
    "goesWith": [
      "Cinnamon Sugar",
      "Fresh Fruit",
      "Strong Coffee"
    ],
    "freezes": true,
    "fridgeDays": 2
  },
  {
    "id": "bf-crumpets",
    "cat": "pancakes",
    "name": "Crumpets (Plaatkoekies)",
    "emoji": "🥞",
    "cuisine": "Global",
    "photoName": "Crumpets",
    "time": 15,
    "costPP": 7,
    "feel": "Little thick drop scones, golden and fluffy.",
    "didYouKnow": "What South Africans call crumpets aren't the holey British kind at all — they're closer to American pancakes or Scottish drop scones, which is why Afrikaans calls them plaatkoekies, little plate-cakes. When the bubbles rise and pop on top, it's time to flip.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 80,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "baking powder",
        "pp": 2,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk all the ingredients to a thick, smooth batter.",
      "Drop spoonfuls onto a hot greased pan.",
      "When bubbles rise and pop, flip and cook the other side until golden.",
      "Serve with butter and jam or syrup."
    ],
    "tip": "Wait for the bubbles before flipping; that is when they are ready.",
    "nutrition": {
      "kcal": 240,
      "protein_g": 7,
      "carbs_g": 38,
      "fat_g": 6
    },
    "storage": "Keeps 2 days; toast to refresh. Freezes up to 1 month.",
    "goesWith": [
      "Syrup & Butter",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "freezes": true,
    "fridgeDays": 2
  },
  {
    "id": "bf-crepes",
    "cat": "pancakes",
    "name": "Crêpes",
    "emoji": "🇫🇷",
    "cuisine": "Global",
    "photoName": "Crepes",
    "time": 20,
    "costPP": 7,
    "feel": "Paper-thin and tender, ready for any filling.",
    "didYouKnow": "In France, 2 February is Crepe Day, and tradition says if you flip a crepe one-handed while holding a coin you'll have luck all year. Resting the batter before cooking lets the flour relax, which is the real secret to crepes that are tender rather than rubbery.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 35,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "butter",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk everything to a very thin, smooth batter and rest if you can.",
      "Pour a thin layer into a hot buttered pan and swirl.",
      "Cook until set and lightly golden, then flip briefly.",
      "Fill with whatever you love and fold."
    ],
    "tip": "The first crêpe is always a test one; do not worry about it.",
    "nutrition": {
      "kcal": 200,
      "protein_g": 7,
      "carbs_g": 26,
      "fat_g": 8
    },
    "storage": "Stack with paper between layers; keeps 2 days in the fridge and freezes up to 1 month.",
    "goesWith": [
      "Fresh Berries",
      "Lemon & Sugar",
      "Whipped Cream"
    ],
    "freezes": true,
    "fridgeDays": 2
  },
  {
    "id": "bf-classic-buttermilk-waffles",
    "cat": "pancakes",
    "name": "Classic Buttermilk Waffles",
    "emoji": "🧇",
    "cuisine": "Global",
    "photoName": "Classic Buttermilk Waffles",
    "time": 20,
    "costPP": 9,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Crisp pockets, soft middle — the waffle every other one is measured against.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "The 'Belgian' waffle the world knows was launched at the 1964 New York World's Fair — deeper pockets, lighter batter, piled with cream and strawberries. Buttermilk's acid reacts with the raising agent for extra lift, and lends a gentle tang under the syrup.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 75,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk the flour, sugar, baking powder and a pinch of salt together in a bowl.",
      "In a jug, beat the egg with the buttermilk and melted butter.",
      "Fold the wet into the dry until just combined — a few lumps are fine, do not overmix.",
      "Spoon into a hot, greased waffle iron and close; cook until the steam slows and it is deep golden, about 4 minutes.",
      "Lift out and serve straight away while crisp, with butter and syrup or fresh fruit."
    ],
    "tip": "Do not open the iron too early — let the steam slowing down tell you it is done.",
    "nutrition": {
      "kcal": 380,
      "protein_g": 10,
      "carbs_g": 48,
      "fat_g": 16
    },
    "storage": "Best fresh and crisp. Keeps 2 days in the fridge and freezes well — crisp straight from frozen in a toaster."
  },
  {
    "id": "bf-banana-and-pecan-waffles",
    "cat": "pancakes",
    "name": "Banana & Pecan Waffles",
    "emoji": "🍌",
    "cuisine": "Global",
    "photoName": "Banana & Pecan Waffles",
    "time": 22,
    "costPP": 13,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Banana-sweet and nutty — pudding that gets to be breakfast.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "Pecans are one of the only major nuts native to North America, and South Africa is now among the world's top growers, with much of the Northern Cape crop heading abroad. The riper the banana, the sweeter the batter — so reach for the speckled ones going soft in the bowl.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 75,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 110,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "banana",
        "pp": 1,
        "u": ""
      },
      {
        "n": "pecan nuts",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Mash half the banana and slice the rest for the top.",
      "Whisk the flour, sugar, baking powder and salt; in a jug beat the egg, buttermilk, melted butter and mashed banana.",
      "Fold the wet into the dry, then stir through most of the chopped pecans.",
      "Cook in a hot, greased waffle iron until deep golden, about 4 minutes.",
      "Top with the sliced banana, the rest of the pecans and a drizzle of honey."
    ],
    "tip": "A very ripe, speckled banana gives the most flavour and natural sweetness.",
    "nutrition": {
      "kcal": 470,
      "protein_g": 11,
      "carbs_g": 58,
      "fat_g": 22
    },
    "storage": "Best fresh. The plain waffle keeps 2 days and freezes well; slice the banana only when serving so it does not brown."
  },
  {
    "id": "bf-cheesy-savoury-waffles",
    "cat": "pancakes",
    "name": "Cheesy Savoury Waffles",
    "emoji": "🧀",
    "cuisine": "Global",
    "photoName": "Cheesy Savoury Waffles",
    "time": 22,
    "costPP": 13,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "No sugar here — a crisp, cheesy waffle built to carry a runny egg.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "Waffles began life savoury, not sweet — medieval ones were pressed between hot iron plates over a fire, often with cheese inside. The American soul-food classic of chicken and waffles keeps that tradition alive, and a cheesy waffle makes a fine bed for a fried egg.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 75,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 2,
        "u": "egg"
      },
      {
        "n": "cheddar",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk the flour, baking powder and a good pinch of salt — no sugar in this one.",
      "Beat one egg with the buttermilk and melted butter, then fold into the dry with the grated cheddar.",
      "Cook in a hot, greased waffle iron until golden and crisp, about 4 to 5 minutes.",
      "Meanwhile fry the second egg to your liking.",
      "Slide the fried egg onto the warm waffle, grind over black pepper and serve — smashed avo alongside is lekker."
    ],
    "tip": "Skip the sugar completely; the cheese and a runny yolk are the whole show.",
    "nutrition": {
      "kcal": 420,
      "protein_g": 18,
      "carbs_g": 38,
      "fat_g": 22
    },
    "storage": "Best fresh. Keeps 2 days in the fridge and freezes well — reheat in a toaster straight from frozen."
  },
  {
    "id": "bf-choc-chip-waffles",
    "cat": "pancakes",
    "name": "Choc Chip Waffles",
    "emoji": "🍫",
    "cuisine": "Global",
    "photoName": "Choc Chip Waffles",
    "time": 20,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Melty chocolate pockets — the treat-morning waffle.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "The chocolate chip was a happy accident — Ruth Wakefield chopped a chocolate bar into her 1930s cookie dough expecting it to melt and spread, but it held its shape, and the chip was born. In a hot waffle those chips go molten, then set again as it cools.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 75,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "dark chocolate",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk the flour, sugar, baking powder and salt.",
      "Beat the egg, buttermilk and melted butter, then fold into the dry.",
      "Stir through the chopped dark chocolate.",
      "Cook in a hot, greased waffle iron until set and golden, about 4 minutes — chocolate ones stay a touch softer.",
      "Dust with icing sugar and serve, with berries or a scoop of yoghurt if you like."
    ],
    "tip": "Chop a slab rather than using chips — the puddles of melted chocolate are better.",
    "nutrition": {
      "kcal": 470,
      "protein_g": 11,
      "carbs_g": 60,
      "fat_g": 21
    },
    "storage": "Best fresh and warm while the chocolate is soft. Keeps 2 days and freezes well; re-crisp in a toaster."
  },
  {
    "id": "bf-bacon-and-syrup-waffles",
    "cat": "pancakes",
    "name": "Bacon & Syrup Waffles",
    "emoji": "🥓",
    "cuisine": "Global",
    "photoName": "Bacon & Syrup Waffles",
    "time": 22,
    "costPP": 15,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Crisp bacon, deep golden waffle, a flood of syrup — the diner classic.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "That irresistible sweet-and-salty pull of bacon under syrup is two of your tongue's reward systems firing at once — salt and sugar together light up the brain more than either does alone. Which is exactly why you can never stop at one.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 75,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "streaky bacon",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "golden syrup",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Fry the bacon until crisp, then set it aside and keep the pan.",
      "Whisk the flour, sugar, baking powder and salt; beat the egg, buttermilk and melted butter and fold together.",
      "Cook in a hot, greased waffle iron until deep golden, about 4 minutes.",
      "Lay the crisp bacon over the warm waffle.",
      "Pour the syrup generously over the lot — the salty-sweet is the whole point (maple syrup if you have it)."
    ],
    "tip": "Let the syrup run into the bacon; salty-sweet is exactly why this American classic works.",
    "nutrition": {
      "kcal": 520,
      "protein_g": 16,
      "carbs_g": 62,
      "fat_g": 24
    },
    "storage": "Best fresh. The waffle keeps 2 days and freezes well — crisp from frozen; cooked bacon keeps 2 days."
  },
  {
    "id": "bf-mealie-pap-and-milk",
    "cat": "oats",
    "name": "Mealie Pap & Milk",
    "emoji": "🌽",
    "cuisine": "South African",
    "photoName": "Mealie Pap & Milk",
    "time": 20,
    "costPP": 4,
    "feel": "The taste of a thousand farm mornings.",
    "didYouKnow": "Maize isn't originally African at all — it came from the Americas with Portuguese traders, which is why 'mielie' traces back to the Portuguese 'milho'. In barely four hundred years it became the staple that pap, the country's most-eaten breakfast, is built on.",
    "ingredients": [
      {
        "n": "maize meal",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "water",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "milk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Bring the water and a pinch of salt to the boil.",
      "Rain in the maize meal while stirring to avoid lumps.",
      "Turn the heat low, cover, and let it steam for 12 to 15 minutes, stirring now and then.",
      "Serve in bowls with cold milk and a sprinkle of sugar."
    ],
    "tip": "For stiff pap use less water; for soft breakfast pap keep it loose and pourable.",
    "nutrition": {
      "kcal": 250,
      "protein_g": 6,
      "carbs_g": 52,
      "fat_g": 3
    },
    "storage": "Keeps 3 days; reheat with a splash of water. Freezes up to 1 month.",
    "goesWith": [
      "Stewed Fruit",
      "Fresh Banana",
      "Rooibos Tea"
    ],
    "freezes": true,
    "fridgeDays": 3
  },
  {
    "id": "bf-maltabella",
    "cat": "oats",
    "name": "Maltabella",
    "emoji": "🌾",
    "cuisine": "South African",
    "photoName": "Maltabella",
    "time": 15,
    "costPP": 8,
    "feel": "Dark, malty and warm — the porridge that raised a country.",
    "didYouKnow": "Maltabella is made from sorghum, one of Africa's oldest cultivated grains, grown here for thousands of years before maize ever arrived. Its dark colour and malty depth come from the grain being malted — the very same first step used in brewing.",
    "ingredients": [
      {
        "n": "sorghum meal",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "water",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Whisk the sorghum meal into the cold water with a pinch of salt.",
      "Bring to a boil over medium heat, stirring constantly.",
      "Turn low and simmer 8 to 10 minutes until thick and glossy.",
      "Stir in the milk and serve with sugar and more milk."
    ],
    "tip": "Always start in cold water to keep it lump-free.",
    "nutrition": {
      "kcal": 240,
      "protein_g": 7,
      "carbs_g": 47,
      "fat_g": 3
    },
    "storage": "Keeps 2 days; loosen with milk when reheating. Freezes up to 1 month.",
    "goesWith": [
      "Fresh Banana",
      "Honey Drizzle",
      "Rooibos Tea"
    ],
    "freezes": true,
    "fridgeDays": 2
  },
  {
    "id": "bf-maizena",
    "cat": "oats",
    "name": "Maizena",
    "emoji": "🥛",
    "cuisine": "South African",
    "photoName": "Maizena",
    "time": 12,
    "costPP": 6,
    "feel": "Smooth, silky and gentle — the porridge of small mornings.",
    "didYouKnow": "'Maizena' is really a brand of cornflour that became the word for the porridge itself, the way we say Jik or Pritt. Cornflour is almost pure starch, so it thickens milk into something silky and smooth with no grain or grit — gentle enough for small tummies and sore throats.",
    "ingredients": [
      {
        "n": "cornflour",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 300,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Mix the cornflour to a paste with a little of the cold milk.",
      "Heat the rest of the milk with a pinch of salt.",
      "Whisk in the paste and stir over low heat until smooth and thick.",
      "Sweeten to taste and serve."
    ],
    "tip": "Keep whisking as it thickens so it stays velvety.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 9,
      "carbs_g": 38,
      "fat_g": 6
    },
    "storage": "Best fresh; it sets as it stands — loosen with warm milk. Keeps 1 day in the fridge.",
    "goesWith": [
      "Cinnamon Sugar",
      "Fresh Fruit",
      "Warm Milk"
    ],
    "freezes": false,
    "fridgeDays": 1
  },
  {
    "id": "bf-putu-pap",
    "cat": "oats",
    "name": "Putu Pap",
    "emoji": "🥄",
    "cuisine": "South African",
    "photoName": "Putu Pap",
    "time": 25,
    "costPP": 3,
    "feel": "Dry, crumbly pap — comfort by the spoonful.",
    "didYouKnow": "Putu pap is all about the crumble — cooked dry and steamed rather than stirred smooth, so it falls apart in soft grains. It's the traditional partner to a braai and to sour milk, and coaxing out that dry, fluffy texture without lumps is a real test of a cook's hand.",
    "ingredients": [
      {
        "n": "maize meal",
        "pp": 70,
        "u": "g"
      },
      {
        "n": "water",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "milk",
        "pp": 100,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Bring the salted water to a boil and add the maize meal in a heap, do not stir.",
      "Cover and steam on low for 10 minutes.",
      "Now fork it through so it crumbles into soft grains.",
      "Serve with milk and sugar, or with amasi."
    ],
    "tip": "The no-stir start is what gives putu its crumbly texture.",
    "nutrition": {
      "kcal": 250,
      "protein_g": 6,
      "carbs_g": 52,
      "fat_g": 3
    },
    "storage": "Keeps 3 days; steam to refresh. Freezes up to 1 month.",
    "goesWith": [
      "Amasi",
      "Stewed Fruit",
      "Boerewors & Eggs"
    ],
    "freezes": true,
    "fridgeDays": 3
  },
  {
    "id": "bf-cheesy-krummelpap",
    "cat": "oats",
    "name": "Cheesy Krummelpap",
    "emoji": "🧀",
    "cuisine": "South African",
    "photoName": "Cheesy Krummelpap",
    "time": 25,
    "costPP": 9,
    "feel": "Crumbly pap turned rich and savoury with melting cheese.",
    "didYouKnow": "'Krummelpap' literally means crumb porridge — the driest pap of all, steamed until it breaks into loose crumbs. Stirring cheese through warm krummelpap is a Sunday-after-the-braai trick that turns last night's side dish into a rich, savoury breakfast.",
    "ingredients": [
      {
        "n": "maize meal",
        "pp": 70,
        "u": "g"
      },
      {
        "n": "water",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Make crumbly pap: heap the maize meal into salted boiling water, cover and steam 10 minutes, then fork through.",
      "Stir the butter through while hot.",
      "Fold in the grated cheddar so it just melts.",
      "Serve straight away."
    ],
    "tip": "Lovely with crispy bacon bits stirred in.",
    "nutrition": {
      "kcal": 330,
      "protein_g": 12,
      "carbs_g": 48,
      "fat_g": 12
    },
    "storage": "Best fresh and hot while the cheese is melty; the crumbs dry out if kept. Keeps 1 day, steam to refresh.",
    "goesWith": [
      "Boerewors & Eggs",
      "Grilled Tomato",
      "Chakalaka"
    ],
    "freezes": false,
    "fridgeDays": 1
  },
  {
    "id": "bf-creamy-oats",
    "cat": "oats",
    "name": "Creamy Oats",
    "emoji": "🥣",
    "cuisine": "Global",
    "photoName": "Creamy Oats",
    "time": 10,
    "costPP": 10,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "A warm bowl that quietly says the day can wait.",
    "didYouKnow": "Oats turn creamy in milk thanks to beta-glucan, a soluble fibre that swells and thickens as it heats — the same fibre shown to help lower cholesterol. Stirring often coaxes more of it out, which is why patiently-stirred oats are silkier than rushed ones.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Combine the oats, milk and a pinch of salt in a pot.",
      "Cook over medium heat, stirring often, for 5 to 6 minutes until thick and creamy.",
      "Stir through the honey and a pinch of cinnamon.",
      "Spoon into bowls and top with fruit or a splash more milk."
    ],
    "tip": "Swap half the milk for water if you like it lighter, or use all milk for extra creaminess.",
    "nutrition": {
      "kcal": 290,
      "protein_g": 11,
      "carbs_g": 48,
      "fat_g": 7
    },
    "storage": "Keeps 2 days; loosen with milk when reheating.",
    "goesWith": [
      "Fresh Berries",
      "Honey Drizzle",
      "Strong Coffee"
    ]
  },
  {
    "id": "bf-overnight-oats",
    "cat": "oats",
    "name": "Overnight Oats",
    "emoji": "🫙",
    "cuisine": "Global",
    "photoName": "Overnight Oats",
    "time": 5,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Tomorrow-morning sorted before you go to bed.",
    "didYouKnow": "Overnight oats need no stove at all — cold milk and time do the work, the oats slowly drinking it in until they're soft and pudding-thick by morning. The acid in the yoghurt also begins breaking down the starch, which is why they taste mellower than cooked oats.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "yoghurt",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      }
    ],
    "method": [
      "Stir the oats, milk, yoghurt and honey together in a jar.",
      "Add sliced banana or any fruit.",
      "Seal and chill overnight.",
      "Eat cold straight from the jar."
    ],
    "tip": "Layer in fruit and a spoon of peanut butter for variety each night.",
    "nutrition": {
      "kcal": 320,
      "protein_g": 12,
      "carbs_g": 52,
      "fat_g": 7
    },
    "storage": "Keeps 3 days in the fridge.",
    "goesWith": [
      "Fresh Fruit",
      "Granola",
      "Berry Smoothie"
    ]
  },
  {
    "id": "bf-malva-melktert-oats",
    "cat": "oats",
    "name": "Malva / Melktert Oats",
    "emoji": "🍮",
    "cuisine": "Global",
    "photoName": "Malva / Melktert Oats",
    "time": 10,
    "costPP": 9,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Two of our best puddings — melktert and malva — turned into a warm breakfast bowl.",
    "didYouKnow": "This bowl smuggles two South African pudding legends into breakfast: malva, with its apricot-jam sweetness, and melktert, all milk, sugar and cinnamon. Malva pudding's name is thought to come from 'malvasia', a sweet wine once served alongside it.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "apricot jam",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 15,
        "u": "ml"
      },
      {
        "n": "vanilla essence"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Cook the oats in the milk with a pinch of salt over medium heat, stirring, until creamy.",
      "Stir in the sugar and vanilla.",
      "Swirl the apricot jam through.",
      "Dust generously with cinnamon-sugar.",
      "Finish with a splash of cream over the top — like custard on malva."
    ],
    "tip": "The splash of cream at the end is what makes it taste like pudding, not porridge.",
    "nutrition": {
      "kcal": 320,
      "protein_g": 11,
      "carbs_g": 52,
      "fat_g": 8
    },
    "storage": "Best fresh and warm. Keeps 2 days in the fridge; loosen with a splash of milk when reheating. Cooked oats freeze up to 1 month.",
    "goesWith": [
      "Fresh Cream",
      "Stewed Fruit",
      "Rooibos Tea"
    ]
  },
  {
    "id": "bf-rooibos-and-honey-oats",
    "cat": "oats",
    "name": "Rooibos & Honey Oats",
    "emoji": "🍵",
    "cuisine": "Global",
    "photoName": "Rooibos & Honey Oats",
    "time": 10,
    "costPP": 7,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Earthy, naturally sweet rooibos cooked right into the oats — a proper SA cuppa in a bowl.",
    "didYouKnow": "Rooibos grows wild nowhere on earth except the Cederberg mountains of the Western Cape — every cup in the world traces back to that one small region. It's naturally caffeine-free, so cooking the oats in strong rooibos adds earthy sweetness without a single jitter.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "rooibos tea",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "milk",
        "pp": 100,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 12,
        "u": "ml"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Brew a strong cup of rooibos.",
      "Cook the oats in the rooibos and milk with a pinch of salt until creamy.",
      "Stir in the honey.",
      "Top with a little extra honey and a dusting of cinnamon."
    ],
    "tip": "Brew the rooibos strong — it should taste of tea, not just tint the oats.",
    "nutrition": {
      "kcal": 280,
      "protein_g": 10,
      "carbs_g": 48,
      "fat_g": 6
    },
    "storage": "Best fresh. Keeps 2 days in the fridge; loosen with milk when reheating. Freezes up to 1 month.",
    "goesWith": [
      "Fresh Fruit",
      "Toasted Nuts",
      "Rooibos Tea"
    ]
  },
  {
    "id": "bf-peppermint-crisp-oats",
    "cat": "oats",
    "name": "Peppermint Crisp Oats",
    "emoji": "🌿",
    "cuisine": "Global",
    "photoName": "Peppermint Crisp Oats",
    "time": 8,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Peppermint Crisp tart for breakfast — caramel-swirled oats under a shower of minty chocolate.",
    "didYouKnow": "Peppermint Crisp tart is about as South African as a dessert gets, even though the chocolate bar itself started in Britain — it's the local factory that keeps it alive, and we eat far more of it than anyone else. Caramel, mint chocolate and oats is simply that famous tart turned into breakfast.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "caramel treat",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "Peppermint Crisp chocolate",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Cook the oats in the milk with a pinch of salt until creamy.",
      "Swirl the caramel through.",
      "Grate over most of the Peppermint Crisp.",
      "Top with the last of the grated chocolate.",
      "Eat while the chocolate is melting into the warm oats."
    ],
    "tip": "A treat-day bowl — grate the chocolate right at the end so it melts, not seizes.",
    "nutrition": {
      "kcal": 380,
      "protein_g": 11,
      "carbs_g": 58,
      "fat_g": 13
    },
    "storage": "Best fresh and warm while the chocolate melts. The plain caramel oats keep 2 days; add the chocolate when serving. Freezes (without chocolate) up to 1 month.",
    "goesWith": [
      "Fresh Banana",
      "Whipped Cream",
      "Strong Coffee"
    ]
  },
  {
    "id": "bf-curry-and-coconut-oats",
    "cat": "oats",
    "name": "Curry & Coconut Oats",
    "emoji": "🍛",
    "cuisine": "Global",
    "photoName": "Curry & Coconut Oats",
    "time": 12,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Savoury, golden and aromatic — oats reimagined as a cosy spiced bowl, breakfast or light supper.",
    "didYouKnow": "There's no rule that oats must be sweet — across Asia, savoury grain porridges like congee are everyday breakfasts. Toasting curry powder and turmeric into coconut milk turns humble oats into something closer to a gentle, golden, spiced soup.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "coconut milk",
        "pp": 125,
        "u": "ml"
      },
      {
        "n": "water",
        "pp": 125,
        "u": "ml"
      },
      {
        "n": "cashews",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "desiccated coconut",
        "pp": 5,
        "u": "g"
      },
      {
        "n": "curry powder"
      },
      {
        "n": "turmeric"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Cook the oats in the coconut milk and water with a pinch of salt until creamy.",
      "Stir in the curry powder and a pinch of turmeric and cook 2 minutes more.",
      "Taste and season.",
      "Toast the cashews and coconut in a dry pan, then scatter over.",
      "A squeeze of lime or some fresh coriander lifts it beautifully."
    ],
    "tip": "Toast the cashews and coconut first in a dry pan — it doubles their flavour.",
    "nutrition": {
      "kcal": 340,
      "protein_g": 9,
      "carbs_g": 38,
      "fat_g": 18
    },
    "storage": "Best fresh. Keeps 2 days in the fridge; loosen with a splash of water or coconut milk when reheating. Freezes up to 1 month — add the cashews fresh.",
    "goesWith": [
      "Toasted Cashews",
      "Fresh Coriander",
      "Lime Wedge"
    ]
  },
  {
    "id": "bf-custard-protein-oats",
    "cat": "oats",
    "name": "Custard Protein Oats",
    "emoji": "💪",
    "cuisine": "Global",
    "photoName": "Custard Protein Oats",
    "time": 10,
    "costPP": 9,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Thick, custardy and high-protein — oats that taste like warm cake batter.",
    "didYouKnow": "Stir a beaten egg into hot oats and you've quietly made custard — the egg thickens and enriches them exactly as it would a tart filling. The trick is to add it off the heat and stir fast, 'tempering' it so it turns silky instead of scrambling.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 250,
        "u": "ml"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      },
      {
        "n": "vanilla essence"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Pulse the oats in a blender until they look like fine flour.",
      "Whisk the oat flour into the milk in a pot with a pinch of salt and cook, stirring, until thick.",
      "Take the pot off the boil, beat the egg in a cup, then whisk it in fast so it cooks into a custard, not scrambles.",
      "Stir in the vanilla and honey.",
      "Dust with cinnamon and serve thick and creamy."
    ],
    "tip": "Off the boil and whisk fast when the egg goes in — that is what makes it custardy instead of scrambled.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 18,
      "carbs_g": 50,
      "fat_g": 11
    },
    "storage": "Best fresh and warm. Keeps 1 day in the fridge (it sets firm — loosen with hot milk). The egg means it is best not frozen.",
    "goesWith": [
      "Fresh Berries",
      "Banana Slices",
      "Honey Drizzle"
    ]
  },
  {
    "id": "bf-bircher-oats",
    "cat": "oats",
    "name": "Bircher Oats",
    "emoji": "🥶",
    "cuisine": "Global",
    "photoName": "Bircher Oats",
    "time": 5,
    "costPP": 19,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Cool and gentle, like an early morning before the house wakes.",
    "didYouKnow": "Bircher muesli was invented around 1900 by Swiss doctor Maximilian Bircher-Benner, who fed his patients raw soaked oats with grated apple and believed deeply in uncooked food. The original was softened overnight and loosened with a little cream by morning — much as we still make it.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "frozen berries",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Combine the oats, milk, berries and honey.",
      "Refrigerate overnight.",
      "Stir before eating and let it soften slightly at room temperature."
    ],
    "tip": "Stir halfway through soaking for an even texture. (Overnight — 5 min active.)",
    "nutrition": {
      "kcal": 290,
      "protein_g": 9,
      "carbs_g": 50,
      "fat_g": 5
    },
    "storage": "Fridge, up to 2 days.",
    "goesWith": [
      "Fresh Berries",
      "Grated Apple",
      "Toasted Nuts"
    ]
  },
  {
    "id": "bf-mango-oats",
    "cat": "oats",
    "name": "Mango Oats",
    "emoji": "🥭",
    "cuisine": "Global",
    "photoName": "Mango Oats",
    "time": 10,
    "costPP": 13,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Bright and easy, like a warm breeze through an open window.",
    "didYouKnow": "South Africa's mangoes ripen mostly in the summer heat of Limpopo and Mpumalanga. A mango is ready when it gives gently to a squeeze and smells sweet at the stem — stir it in off the heat so it stays bright and fragrant rather than stewed dull.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 200,
        "u": "ml"
      },
      {
        "n": "mango",
        "pp": 100,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Cook the oats in the milk until soft.",
      "Stir in the chopped mango at the end.",
      "Finish with honey."
    ],
    "tip": "Add the mango right at the end to keep it bright.",
    "nutrition": {
      "kcal": 300,
      "protein_g": 9,
      "carbs_g": 52,
      "fat_g": 6
    },
    "storage": "Best fresh while the mango is bright; the cooked oats keep 2 days in the fridge (loosen with milk) and freeze up to 1 month — stir the mango in when serving.",
    "goesWith": [
      "Fresh Mango",
      "Coconut Flakes",
      "Berry Smoothie"
    ]
  },
  {
    "id": "bf-baked-berry-oats",
    "cat": "oats",
    "name": "Baked Berry Oats",
    "emoji": "🫐",
    "cuisine": "Global",
    "photoName": "Baked Berry Oats",
    "time": 25,
    "costPP": 23,
    "freezes": true,
    "fridgeDays": 2,
    "feel": "Cosy and baked through, like something shared at a quiet table.",
    "didYouKnow": "Add an egg and bake your oats and they set like a soft, spoonable cake — the same trick behind the old-fashioned baked oatmeal farmhouse kitchens made to feed a crowd from one dish. The berries sink, burst and stain the whole thing purple as it bakes.",
    "ingredients": [
      {
        "n": "rolled oats",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "frozen berries",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Mix all the ingredients together.",
      "Pour into a small dish and bake until set and lightly golden.",
      "Let it cool slightly before eating."
    ],
    "tip": "Let it rest a few minutes before serving for the best texture.",
    "nutrition": {
      "kcal": 340,
      "protein_g": 12,
      "carbs_g": 50,
      "fat_g": 9
    },
    "storage": "Fridge, up to 2 days.",
    "goesWith": [
      "Fresh Cream",
      "Plain Yoghurt",
      "Berry Smoothie"
    ]
  },
  {
    "id": "bf-bacon-atchar-and-cheddar-muffins",
    "cat": "baked",
    "name": "Bacon, Atchar & Cheddar Muffins",
    "emoji": "🧁",
    "cuisine": "Global",
    "photoName": "Bacon, Atchar & Cheddar Muffins",
    "time": 35,
    "costPP": 15,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Smoky bacon, tangy atchar, melty cheddar — a braai in a breakfast muffin.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Atchar — spicy pickled green mango — came to South Africa with indentured Indian workers in the 1860s and became a kasi staple, the relish that lifts a plate of pap or a kota. Folded into a savoury muffin, its sour-spicy kick cuts straight through the bacon and cheese.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 0.5,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 60,
        "u": "ml"
      },
      {
        "n": "oil",
        "pp": 15,
        "u": "ml"
      },
      {
        "n": "streaky bacon",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "atchar",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 180°C and line a muffin tin.",
      "Fry the chopped bacon until crisp.",
      "Whisk the flour, baking powder and salt in one bowl; beat the egg, milk and oil in another.",
      "Fold the wet into the dry, then stir through the bacon, chopped atchar and grated cheddar — do not overmix.",
      "Spoon into the tin and bake 18 to 20 minutes until golden and risen."
    ],
    "tip": "Do not overmix the batter; a few lumps keep them light, overworking makes them tough.",
    "nutrition": {
      "kcal": 240,
      "protein_g": 9,
      "carbs_g": 20,
      "fat_g": 14
    },
    "storage": "Keeps 3 days airtight; freezes well — warm before eating."
  },
  {
    "id": "bf-potato-and-sour-cream-muffins",
    "cat": "baked",
    "name": "Potato & Sour Cream Muffins",
    "emoji": "🥔",
    "cuisine": "Global",
    "photoName": "Potato & Sour Cream Muffins",
    "time": 38,
    "costPP": 9,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "A twice-baked potato you can hold in one hand — rich, savoury and moreish.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Potato is a quiet baker's weapon — its starch clings to moisture, which is why potato breads and these muffins stay soft for days longer than plain ones. The sour cream works from the other side, its acid keeping the crumb tender.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 0.5,
        "u": "egg"
      },
      {
        "n": "sour cream",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "oil",
        "pp": 10,
        "u": "ml"
      },
      {
        "n": "potatoes",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "spring onion",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 180°C and line a muffin tin.",
      "Grate the raw potato, rinse it, then squeeze it really dry in a cloth.",
      "Whisk the flour, baking powder and salt; beat the egg, sour cream, milk and oil.",
      "Fold together with the potato, grated cheddar and chopped spring onion.",
      "Spoon into the tin and bake 20 to 22 minutes until golden."
    ],
    "tip": "Squeeze the grated potato bone-dry, or the muffins stay wet in the middle.",
    "nutrition": {
      "kcal": 220,
      "protein_g": 7,
      "carbs_g": 24,
      "fat_g": 11
    },
    "storage": "Keeps 3 days airtight in the fridge, best warmed; freezes well up to 1 month."
  },
  {
    "id": "bf-cottage-cheese-and-quinoa-muffins",
    "cat": "baked",
    "name": "Cottage Cheese & Quinoa Muffins",
    "emoji": "💪",
    "cuisine": "Global",
    "photoName": "Cottage Cheese & Quinoa Muffins",
    "time": 35,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Flourless and protein-packed — a savoury muffin that actually keeps you full.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Quinoa was sacred to the Incas, who called it the 'mother grain', and it's one of the few plant foods carrying all nine essential amino acids — a complete protein. Paired with cottage cheese and egg, these are about as protein-dense as a muffin gets.",
    "ingredients": [
      {
        "n": "large eggs",
        "pp": 1,
        "u": "egg"
      },
      {
        "n": "cottage cheese",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "cooked quinoa",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "baby spinach",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt & pepper"
      }
    ],
    "method": [
      "Heat the oven to 180°C and grease a muffin tin really well.",
      "Beat the eggs, then stir in the cottage cheese, cooked quinoa, chopped spinach and grated cheddar.",
      "Season with salt and pepper.",
      "Spoon into the greased tin.",
      "Bake 20 to 25 minutes until set and golden."
    ],
    "tip": "Grease the tin really well — these are egg-set, so they like to stick.",
    "nutrition": {
      "kcal": 160,
      "protein_g": 13,
      "carbs_g": 8,
      "fat_g": 9
    },
    "storage": "Keeps 3 days chilled, good cold in a lunchbox; freezes well up to 1 month."
  },
  {
    "id": "bf-carrot-and-pineapple-muffins",
    "cat": "baked",
    "name": "Carrot & Pineapple Muffins",
    "emoji": "🥕",
    "cuisine": "Global",
    "photoName": "Carrot & Pineapple Muffins",
    "time": 35,
    "costPP": 10,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Carrot cake's wholesome cousin — sweet, spiced and full of good things.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Carrot found its way into cakes because it's naturally sweet — a trick that took off in wartime Britain when sugar was rationed. Add pineapple and you've essentially got the 1970s American 'Morning Glory' muffin, moist enough to keep for days.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 0.5,
        "u": "egg"
      },
      {
        "n": "oil",
        "pp": 25,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "carrots",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "tinned pineapple",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "raisins",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "cinnamon"
      },
      {
        "n": "bicarbonate of soda"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 180°C and line a muffin tin.",
      "Whisk the flour, baking powder, bicarb, cinnamon, salt and sugar.",
      "Beat the egg and oil together.",
      "Fold the wet into the dry with the grated carrot, drained crushed pineapple and raisins.",
      "Spoon into the tin and bake 20 to 22 minutes until risen and golden."
    ],
    "tip": "Drain the pineapple well so the batter is not too wet.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 4,
      "carbs_g": 34,
      "fat_g": 10
    },
    "storage": "Keeps 4 days airtight; stays moist; freezes well."
  },
  {
    "id": "bf-biltong-and-cheese-muffins",
    "cat": "baked",
    "name": "Biltong & Cheese Muffins",
    "emoji": "🥩",
    "cuisine": "Global",
    "photoName": "Biltong & Cheese Muffins",
    "time": 35,
    "costPP": 16,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Two of the most South African things there are, baked into breakfast.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Biltong isn't jerky — it's air-dried rather than cooked, and cured with vinegar and coriander the way Dutch settlers preserved meat for long treks inland. Chopped into a cheesy muffin, it brings a deep, salty savouriness nothing else quite matches.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 0.5,
        "u": "egg"
      },
      {
        "n": "milk",
        "pp": 70,
        "u": "ml"
      },
      {
        "n": "oil",
        "pp": 15,
        "u": "ml"
      },
      {
        "n": "biltong",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 180°C and line a muffin tin.",
      "Whisk the flour, baking powder and just a little salt.",
      "Beat the egg, milk and oil.",
      "Fold the wet into the dry, then stir through the chopped biltong and grated cheddar.",
      "Spoon into the tin and bake 18 to 20 minutes until golden."
    ],
    "tip": "Go easy on the added salt — the biltong brings plenty of its own.",
    "nutrition": {
      "kcal": 240,
      "protein_g": 13,
      "carbs_g": 19,
      "fat_g": 12
    },
    "storage": "Keeps 3 days airtight; freezes well."
  },
  {
    "id": "bf-malva-pudding-muffin",
    "cat": "baked",
    "name": "Malva Pudding Muffin",
    "emoji": "🍮",
    "cuisine": "Global",
    "photoName": "Malva Pudding Muffin",
    "time": 35,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "South Africa's favourite pudding, shrunk into a sticky breakfast muffin.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Malva pudding is a Cape Dutch classic, and its sticky, spongy magic comes from an unlikely pair: apricot jam for flavour and a splash of vinegar, whose acid reacts with bicarb to tenderise the crumb. Baked as a muffin, it's pudding you're allowed to eat for breakfast.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 55,
        "u": "g"
      },
      {
        "n": "large eggs",
        "pp": 0.5,
        "u": "egg"
      },
      {
        "n": "sugar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "apricot jam",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 50,
        "u": "ml"
      },
      {
        "n": "butter",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "brown vinegar",
        "pp": 3,
        "u": "ml"
      },
      {
        "n": "bicarbonate of soda"
      },
      {
        "n": "baking powder"
      }
    ],
    "method": [
      "Heat the oven to 180°C and line a muffin tin.",
      "Beat the egg and most of the sugar, then mix in the apricot jam, half the melted butter, the milk and a splash of vinegar.",
      "Fold in the flour, baking powder and bicarb and spoon into the tin.",
      "Bake 18 to 20 minutes until risen and deep golden.",
      "While they bake, warm the cream, the rest of the butter and the last of the sugar into a quick caramel, and spoon it over the hot muffins so it soaks in."
    ],
    "tip": "Spoon the warm sauce over while the muffins are hot so they drink it right up.",
    "nutrition": {
      "kcal": 280,
      "protein_g": 4,
      "carbs_g": 40,
      "fat_g": 12
    },
    "storage": "Keeps 2 days in the fridge; reheat gently for the stickiness. Freeze the plain muffins up to 1 month and sauce after warming."
  },
  {
    "id": "bf-strawberry-and-black-pepper-scones",
    "cat": "baked",
    "name": "Strawberry & Black Pepper Scones",
    "emoji": "🥮",
    "cuisine": "Global",
    "photoName": "Strawberry & Black Pepper Scones",
    "time": 30,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Sweet strawberries with a sneaky kick of black pepper — a bakery scone that gets people talking.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "A grind of black pepper with strawberries sounds odd, but it's an old chef's trick — the pepper's warmth lifts the berry's perfume and sweetness, much as a pinch of salt does. Victorian tables were already serving the two together.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 45,
        "u": "ml"
      },
      {
        "n": "fresh strawberries",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "maple syrup",
        "pp": 10,
        "u": "ml"
      },
      {
        "n": "icing sugar",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "black pepper"
      },
      {
        "n": "vanilla essence"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, sugar, baking powder, freshly cracked black pepper and salt together.",
      "Grate in the very cold butter and rub it through until the mix looks like coarse crumbs.",
      "Gently fold in the diced strawberries, then add the cream and vanilla and mix just until it comes together — do not overwork.",
      "Pat to 2cm thick, cut into wedges, brush with a little cream and bake 15 to 18 minutes until golden.",
      "Whisk the icing sugar with the maple syrup and a splash of milk, and drizzle over once cool."
    ],
    "tip": "The black pepper is the magic — do not skip it; it makes the strawberries taste more like themselves.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 4,
      "carbs_g": 32,
      "fat_g": 10
    },
    "storage": "Best the day they are baked. Keep 2 days airtight in the fridge; freeze unglazed up to 2 months and add the glaze after warming."
  },
  {
    "id": "bf-buttermilk-jam-and-cream-scones",
    "cat": "baked",
    "name": "Buttermilk, Jam & Cream Scones",
    "emoji": "🍓",
    "cuisine": "Global",
    "photoName": "Buttermilk, Jam & Cream Scones",
    "time": 25,
    "costPP": 9,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "The teatime classic — but split it open for homemade strawberry jam, not the shop stuff.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Britain has a genuine, century-old feud over scones: in Cornwall the jam goes on first, in Devon the cream — and locals take sides seriously. Buttermilk is the South African baker's shortcut to a tall, tender scone, its acid giving extra rise.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 45,
        "u": "ml"
      },
      {
        "n": "strawberry jam",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, sugar, baking powder and salt.",
      "Rub the cold butter through until the mix looks like coarse crumbs.",
      "Add the buttermilk and mix just to a soft dough — do not overwork.",
      "Pat to 2cm thick, cut into rounds, brush with a little buttermilk and bake 12 to 15 minutes until risen and golden.",
      "Split warm and serve with homemade strawberry jam and whipped cream."
    ],
    "tip": "Make your own Strawberry Jam in the Spice room — it is the difference between nice and unforgettable.",
    "nutrition": {
      "kcal": 210,
      "protein_g": 5,
      "carbs_g": 30,
      "fat_g": 8
    },
    "storage": "Best fresh and warm. Plain scones keep 3 days airtight; freeze up to 2 months and warm from frozen. Add jam and cream only when serving."
  },
  {
    "id": "bf-jalapeno-and-cheddar-scones",
    "cat": "baked",
    "name": "Jalapeno & Cheddar Scones",
    "emoji": "🌶️",
    "cuisine": "Global",
    "photoName": "Jalapeno & Cheddar Scones",
    "time": 30,
    "costPP": 10,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Sharp cheddar and a slow chilli warmth — the savoury scone that does not even need butter.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Most of a jalapeno's heat isn't in the seeds but in the pale membrane they cling to, so scrape that out for a milder scone. Cheddar is the perfect partner because capsaicin, the fiery compound, dissolves in fat — meaning the cheese literally tames the burn.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 35,
        "u": "g"
      },
      {
        "n": "jalapenos",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 50,
        "u": "ml"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, baking powder and salt.",
      "Rub the cold butter through to coarse crumbs.",
      "Stir through the grated cheddar and finely chopped, deseeded jalapenos.",
      "Add the buttermilk and mix just to a soft dough.",
      "Pat to 2cm, cut into wedges, brush with buttermilk and bake 15 to 18 minutes until golden."
    ],
    "tip": "Deseed the jalapenos for warmth without blowing anyone's head off.",
    "nutrition": {
      "kcal": 220,
      "protein_g": 8,
      "carbs_g": 22,
      "fat_g": 12
    },
    "storage": "Best fresh. Keep 3 days airtight in the fridge; freeze up to 2 months and refresh in a warm oven for 5 minutes."
  },
  {
    "id": "bf-butternut-feta-and-chive-scones",
    "cat": "baked",
    "name": "Butternut, Feta & Chive Scones",
    "emoji": "🎃",
    "cuisine": "Global",
    "photoName": "Butternut, Feta & Chive Scones",
    "time": 35,
    "costPP": 10,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Golden, naturally sweet butternut against salty feta — proper SA tea-time.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Butternut is a surprisingly modern vegetable — it was bred in Massachusetts in the 1940s to be sweeter and easier to peel than the squashes before it. Roasted into a scone with salty feta, its natural sugars caramelise and balance the cheese.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "butternut",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "feta",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "chives",
        "pp": 8,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 30,
        "u": "ml"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "cayenne pepper"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, baking powder, salt and a pinch of cayenne.",
      "Rub the cold butter through to coarse crumbs, then stir in the crumbled feta and chopped chives.",
      "Mix the cold, well-drained butternut puree with the cream, add to the dry mix and bring to a soft dough.",
      "Pat to 2cm, cut into wedges, brush with a little cream.",
      "Bake 18 to 20 minutes until firm and lightly golden."
    ],
    "tip": "Drain the butternut puree well, or the dough turns sticky.",
    "nutrition": {
      "kcal": 210,
      "protein_g": 7,
      "carbs_g": 24,
      "fat_g": 10
    },
    "storage": "Best fresh. Keep 3 days airtight in the fridge; freeze up to 2 months and warm before eating."
  },
  {
    "id": "bf-earl-grey-honey-and-lavender-scones",
    "cat": "baked",
    "name": "Earl Grey, Honey & Lavender Scones",
    "emoji": "🫖",
    "cuisine": "Global",
    "photoName": "Earl Grey, Honey & Lavender Scones",
    "time": 28,
    "costPP": 11,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "A whole pot of fancy tea baked into a scone — earthy bergamot and a whisper of lavender.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "Earl Grey gets its perfume from bergamot, a small bitter citrus grown mainly in Calabria, and is named after a 19th-century British prime minister. Lavender belongs to the same aromatic family as mint and rosemary, so use it sparingly — too much and a scone starts tasting of soap.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "sugar",
        "pp": 10,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "cream",
        "pp": 45,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "Earl Grey tea",
        "pp": 1,
        "u": "g"
      },
      {
        "n": "culinary lavender"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "vanilla essence"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, sugar, baking powder, salt, finely ground Earl Grey leaves and a small pinch of dried lavender.",
      "Rub the cold butter through to coarse crumbs.",
      "Whisk the cream, honey and vanilla, add to the dry mix and bring to a soft dough.",
      "Pat to 2cm, cut into wedges.",
      "Bake 14 to 16 minutes until the edges turn golden."
    ],
    "tip": "Grind the tea fine and go gentle on the lavender — a little perfume goes a long way.",
    "nutrition": {
      "kcal": 220,
      "protein_g": 4,
      "carbs_g": 30,
      "fat_g": 10
    },
    "storage": "Best fresh. Keep 3 days airtight; freeze up to 2 months and warm before serving with extra honey."
  },
  {
    "id": "bf-blue-cheese-fig-and-walnut-scones",
    "cat": "baked",
    "name": "Blue Cheese, Fig & Walnut Scones",
    "emoji": "🧀",
    "cuisine": "Global",
    "photoName": "Blue Cheese, Fig & Walnut Scones",
    "time": 30,
    "costPP": 14,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "A cheeseboard you can hold — funky blue cheese, sweet figs and toasty walnuts.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "The blue veins in blue cheese are an edible mould, Penicillium roqueforti, once grown in the cool limestone caves of Roquefort in France. Its sharp saltiness is a classic foil for sweet figs and bitter walnuts — sweet, salty and savoury in a single bite.",
    "ingredients": [
      {
        "n": "cake flour",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "blue cheese",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "dried figs",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "walnuts",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "butter",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "buttermilk",
        "pp": 45,
        "u": "ml"
      },
      {
        "n": "sugar",
        "pp": 5,
        "u": "g"
      },
      {
        "n": "baking powder"
      },
      {
        "n": "black pepper"
      },
      {
        "n": "salt"
      }
    ],
    "method": [
      "Heat the oven to 200°C and line a tray.",
      "Whisk the flour, sugar, baking powder, salt and a little black pepper.",
      "Rub the cold butter through to coarse crumbs.",
      "Fold in the crumbled blue cheese, chopped dried figs and toasted, chopped walnuts.",
      "Add the buttermilk and mix just to a soft dough.",
      "Pat to 2cm, cut into wedges and bake 15 to 18 minutes until golden."
    ],
    "tip": "Toast the walnuts first; it wakes up their flavour against the blue cheese.",
    "nutrition": {
      "kcal": 250,
      "protein_g": 8,
      "carbs_g": 26,
      "fat_g": 13
    },
    "storage": "Best fresh. Keep 3 days airtight in the fridge; freeze up to 2 months and refresh in a warm oven."
  },
  {
    "id": "bf-yoghurt-and-granola-bowl",
    "cat": "smoothies",
    "name": "Yoghurt & Granola Bowl",
    "emoji": "🥣",
    "cuisine": "Global",
    "photoName": "Yoghurt & Granola Bowl",
    "time": 5,
    "costPP": 22,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Cool, crunchy and bright — breakfast without the fuss.",
    "didYouKnow": "Granola has a surprisingly serious past — it was invented in 1860s America as a health food called 'granula', baked so hard it had to be soaked overnight just to be chewable. Today's looser, honey-clustered version is far kinder to the teeth.",
    "ingredients": [
      {
        "n": "plain yoghurt",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "granola",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "mixed berries",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "g"
      }
    ],
    "method": [
      "Spoon the yoghurt into a bowl.",
      "Top with granola and berries.",
      "Drizzle with honey and serve straight away so the granola stays crunchy."
    ],
    "tip": "Layer it in a glass jar the night before, granola on top, for a grab-and-go version.",
    "nutrition": {
      "kcal": 280,
      "protein_g": 12,
      "carbs_g": 42,
      "fat_g": 8
    },
    "storage": "Assemble fresh; keep components separate.",
    "goesWith": [
      "Fresh Fruit",
      "Honey Drizzle",
      "Buttered Toast"
    ]
  },
  {
    "id": "bf-amasi-and-fruit-bowl",
    "cat": "smoothies",
    "name": "Amasi & Fruit Bowl",
    "emoji": "🥛",
    "cuisine": "Global",
    "photoName": "Amasi & Fruit Bowl",
    "time": 5,
    "costPP": 12,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Tangy, cool amasi over sweet fruit — an old friend.",
    "didYouKnow": "Amasi is made by letting raw milk sour and thicken on its own, traditionally in a calabash or hide sack, and it's one of South Africa's oldest foods, eaten long before fridges existed. The natural fermentation makes it easier to digest than fresh milk, even for many who are lactose-sensitive.",
    "ingredients": [
      {
        "n": "amasi",
        "pp": 200,
        "u": "ml"
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "berries",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Pour the amasi into a bowl.",
      "Top with sliced banana and berries.",
      "Drizzle with honey and serve cold."
    ],
    "tip": "Lovely with a spoon of crunchy granola over the top.",
    "nutrition": {
      "kcal": 220,
      "protein_g": 9,
      "carbs_g": 34,
      "fat_g": 5
    },
    "storage": "Assemble fresh.",
    "goesWith": [
      "Buttermilk Rusks",
      "Honey Drizzle",
      "Fresh Fruit"
    ]
  },
  {
    "id": "bf-cottage-cheese-and-peaches",
    "cat": "smoothies",
    "name": "Cottage Cheese & Peaches",
    "emoji": "🍑",
    "cuisine": "Global",
    "photoName": "Cottage Cheese & Peaches",
    "time": 5,
    "costPP": 22,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Light, high-protein and quietly delicious.",
    "didYouKnow": "Cottage cheese got its name because it was the simple cheese people made at home in cottages, from milk left to curdle — it's the very 'curds and whey' of Little Miss Muffet. Its slow-digesting casein protein is why such a light bowl keeps you full for hours.",
    "ingredients": [
      {
        "n": "cottage cheese",
        "pp": 100,
        "u": "g"
      },
      {
        "n": "tinned peaches",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "cinnamon"
      }
    ],
    "method": [
      "Spoon the cottage cheese into a bowl.",
      "Top with sliced peaches.",
      "Drizzle with honey and a dusting of cinnamon."
    ],
    "tip": "Any soft fruit works; try it with grated apple in winter.",
    "nutrition": {
      "kcal": 200,
      "protein_g": 16,
      "carbs_g": 22,
      "fat_g": 5
    },
    "storage": "Assemble fresh.",
    "goesWith": [
      "Toasted Nuts",
      "Honey Drizzle",
      "Fresh Fruit"
    ]
  },
  {
    "id": "bf-tropical-fruit-plate",
    "cat": "smoothies",
    "name": "Tropical Fruit Plate",
    "emoji": "🍍",
    "cuisine": "Global",
    "photoName": "Tropical Fruit Plate",
    "time": 8,
    "costPP": 12,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "A bright, juicy plate that wakes the whole table up.",
    "didYouKnow": "Pawpaw contains papain, an enzyme so good at breaking down protein that it's sold as a meat tenderiser — which is also why fresh pawpaw refuses to set in jelly. A squeeze of lemon over the plate keeps the cut fruit bright and stops the banana browning.",
    "ingredients": [
      {
        "n": "pineapple",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "pawpaw",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "lemon",
        "pp": 0.2,
        "u": ""
      }
    ],
    "method": [
      "Cut the pineapple, pawpaw and banana into bite-sized pieces.",
      "Arrange on a plate.",
      "Squeeze over a little lemon or lime to lift it."
    ],
    "tip": "A sprinkle of toasted coconut makes it feel special.",
    "nutrition": {
      "kcal": 150,
      "protein_g": 2,
      "carbs_g": 38,
      "fat_g": 1
    },
    "storage": "Best fresh; keeps 1 day cut.",
    "goesWith": [
      "Plain Yoghurt",
      "Granola",
      "Mint Leaves"
    ]
  },
  {
    "id": "bf-boererusk-and-amasi-bowl",
    "cat": "smoothies",
    "name": "Boererusk & Amasi Bowl",
    "emoji": "🍮",
    "cuisine": "Global",
    "photoName": "Boererusk & Amasi Bowl",
    "time": 5,
    "costPP": 12,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Beskuit dunked in maas — the oldest, most comforting SA breakfast there is.",
    "didYouKnow": "Beskuit are twice-baked to drive out every trace of moisture so they keep for months, which is precisely why the Voortrekkers carried them across the country by ox-wagon. Dunked in amasi, that rock-hard rusk softens into the oldest, most comforting breakfast we have.",
    "ingredients": [
      {
        "n": "buttermilk rusks",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "amasi",
        "pp": 200,
        "u": "ml"
      },
      {
        "n": "mixed berries",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Roughly crumble the rusks into a bowl.",
      "Pour over the amasi and let it soak for a minute to soften.",
      "Drizzle with honey.",
      "Top with the berries."
    ],
    "tip": "Let the rusks soak just a minute — soft on the outside, still a little crunch in the middle.",
    "nutrition": {
      "kcal": 280,
      "protein_g": 10,
      "carbs_g": 42,
      "fat_g": 8
    },
    "storage": "Assemble fresh and eat soon — the rusks go soggy if it stands. Not for freezing.",
    "goesWith": [
      "Fresh Berries",
      "Honey Drizzle",
      "Rooibos Tea"
    ]
  },
  {
    "id": "bf-stewed-fruit-and-yoghurt-bowl",
    "cat": "smoothies",
    "name": "Stewed Fruit & Yoghurt Bowl",
    "emoji": "🍑",
    "cuisine": "Global",
    "photoName": "Stewed Fruit & Yoghurt Bowl",
    "time": 15,
    "costPP": 10,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Gestoofde vrugte over cool yoghurt — a Sunday-at-ouma's kind of breakfast.",
    "didYouKnow": "South Africa's dried-fruit tradition runs deep in the hot Western Cape valleys, where apricots, peaches and pears were sun-dried to last the year. Drying pulls out the water and concentrates the sugars, so even a small handful, stewed soft, sweetens a whole bowl.",
    "ingredients": [
      {
        "n": "dried fruit",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "plain yoghurt",
        "pp": 120,
        "u": "g"
      },
      {
        "n": "water",
        "pp": 100,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "cinnamon"
      }
    ],
    "method": [
      "Simmer the dried fruit in the water with a stick of cinnamon until plump and soft, about 10 minutes.",
      "Let it cool a little.",
      "Spoon the warm stewed fruit over the yoghurt.",
      "Drizzle with honey."
    ],
    "tip": "Make a big batch of the stewed fruit; it keeps for days and freezes well.",
    "nutrition": {
      "kcal": 250,
      "protein_g": 8,
      "carbs_g": 48,
      "fat_g": 4
    },
    "storage": "The stewed fruit keeps 5 days in the fridge and freezes up to 3 months — spoon over fresh yoghurt each time.",
    "goesWith": [
      "Granola",
      "Toasted Nuts",
      "Rooibos Tea"
    ]
  },
  {
    "id": "bf-granadilla-and-honey-bowl",
    "cat": "smoothies",
    "name": "Granadilla & Honey Bowl",
    "emoji": "🥭",
    "cuisine": "Global",
    "photoName": "Granadilla & Honey Bowl",
    "time": 5,
    "costPP": 11,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Thick yoghurt under tart, perfumed granadilla — summer in three spoons.",
    "didYouKnow": "Granadilla is our name for passion fruit, and the 'passion' is religious rather than romantic — Spanish missionaries read the flower's parts as symbols of the crucifixion. Those crunchy black seeds are perfectly edible and full of fibre.",
    "ingredients": [
      {
        "n": "plain yoghurt",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "granadilla",
        "pp": 2,
        "u": ""
      },
      {
        "n": "rolled oats",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 10,
        "u": "ml"
      }
    ],
    "method": [
      "Spoon the yoghurt into a bowl.",
      "Scoop the granadilla pulp over the top.",
      "Drizzle with honey.",
      "Toast the oats in a dry pan for a minute and scatter over for crunch."
    ],
    "tip": "Toast the oats or some seeds in a dry pan — the crunch is what makes the bowl.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 9,
      "carbs_g": 32,
      "fat_g": 6
    },
    "storage": "Assemble fresh and eat right away. Not for freezing.",
    "goesWith": [
      "Granola",
      "Fresh Banana",
      "Mint Leaves"
    ]
  },
  {
    "id": "bf-stone-fruit-and-hot-honey-bowl",
    "cat": "smoothies",
    "name": "Stone Fruit & Hot Honey Bowl",
    "emoji": "🍯",
    "cuisine": "Global",
    "photoName": "Stone Fruit & Hot Honey Bowl",
    "time": 5,
    "costPP": 13,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Sweet summer stone fruit with a sneaky chilli-honey kick — sophisticated and a little surprising.",
    "didYouKnow": "Hot honey, honey infused with chilli, feels modern but has old roots: Italians have drizzled spicy 'miele piccante' over cheese for generations. Peaches and nectarines are 'stone fruit', or drupes, named for the single hard pip at the centre — and the chilli's heat makes their sweetness sing.",
    "ingredients": [
      {
        "n": "plain yoghurt",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "peaches",
        "pp": 1,
        "u": ""
      },
      {
        "n": "nectarine",
        "pp": 1,
        "u": ""
      },
      {
        "n": "rolled oats",
        "pp": 15,
        "u": "g"
      },
      {
        "n": "honey",
        "pp": 12,
        "u": "ml"
      },
      {
        "n": "hot sauce"
      },
      {
        "n": "fresh mint"
      }
    ],
    "method": [
      "Spoon the yoghurt into a bowl.",
      "Slice the peach and nectarine over the top.",
      "Stir a dash of hot sauce into the honey to make hot honey.",
      "Drizzle the hot honey over the fruit.",
      "Scatter with toasted oats and a few torn mint leaves."
    ],
    "tip": "Hot honey is just honey plus a dash of your favourite hot sauce — start small, you want a whisper of heat, not a burn.",
    "nutrition": {
      "kcal": 260,
      "protein_g": 9,
      "carbs_g": 40,
      "fat_g": 6
    },
    "storage": "Assemble fresh and eat right away. The hot honey keeps in a jar for weeks. Not for freezing.",
    "goesWith": [
      "Granola",
      "Toasted Nuts",
      "Plain Yoghurt"
    ]
  },
  {
    "id": "bf-berry-banana-smoothie",
    "cat": "smoothies",
    "name": "Berry Banana Smoothie",
    "emoji": "🥤",
    "cuisine": "Global",
    "photoName": "Berry Banana Smoothie",
    "time": 5,
    "costPP": 18,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Breakfast you can drink with one hand on the car keys.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Frozen berries often beat fresh in a smoothie — they're picked and frozen at peak ripeness, locking in the goodness, and they chill the drink without watering it down the way ice does. The banana is what turns it thick and creamy instead of thin.",
    "ingredients": [
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "mixed berries",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "plain yoghurt",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Add the banana, berries, yoghurt, milk and honey to a blender.",
      "Blend until smooth, about 30 seconds.",
      "Pour into a glass or travel bottle and go."
    ],
    "tip": "Freeze the banana and berries first for a thicker, colder smoothie.",
    "nutrition": {
      "kcal": 220,
      "protein_g": 9,
      "carbs_g": 38,
      "fat_g": 4
    },
    "storage": "Drink fresh; keeps a few hours chilled. Not for freezing once blended — freeze the fruit first for a thicker drink."
  },
  {
    "id": "bf-green-smoothie",
    "cat": "smoothies",
    "name": "Green Smoothie",
    "emoji": "🥬",
    "cuisine": "Global",
    "photoName": "Green Smoothie",
    "time": 5,
    "costPP": 12,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "A whole salad you can drink without noticing.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "You genuinely can't taste mild baby spinach once banana and apple are in the blender — the sweetness hides it entirely, which is how green smoothies sneak a serving of leaves past fussy eaters. Blending also breaks the cell walls, making the iron and folate easier to absorb.",
    "ingredients": [
      {
        "n": "spinach",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "banana",
        "pp": 1,
        "u": ""
      },
      {
        "n": "apple",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "ml"
      }
    ],
    "method": [
      "Add the spinach, banana, apple, milk and honey to a blender.",
      "Blend until completely smooth.",
      "Pour and drink right away."
    ],
    "tip": "A handful of spinach disappears completely behind the fruit.",
    "nutrition": {
      "kcal": 210,
      "protein_g": 7,
      "carbs_g": 40,
      "fat_g": 4
    },
    "storage": "Best fresh; keeps 1 day chilled. Not for freezing once blended."
  },
  {
    "id": "bf-tropical-smoothie",
    "cat": "smoothies",
    "name": "Tropical Smoothie",
    "emoji": "🥭",
    "cuisine": "Global",
    "photoName": "Tropical Smoothie",
    "time": 5,
    "costPP": 16,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "A holiday in a glass — sunshine mango and tangy granadilla.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Mango is the most-eaten fruit on the planet, ahead of both apples and bananas, and it grows right across South Africa's warm Lowveld. A spoonful of granadilla lifts the whole blend, because its sharp, perfumed aroma is what the brain reads as 'tropical'.",
    "ingredients": [
      {
        "n": "mango",
        "pp": 100,
        "u": "g"
      },
      {
        "n": "granadilla",
        "pp": 2,
        "u": ""
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "plain yoghurt",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 100,
        "u": "ml"
      }
    ],
    "method": [
      "Scoop out the granadilla pulp.",
      "Blend the mango, banana, yoghurt and milk until smooth.",
      "Stir through most of the granadilla pulp, keeping a little to spoon on top.",
      "Pour and drink right away."
    ],
    "tip": "Frozen mango makes it thick and frosty; keep a spoon of granadilla for the top.",
    "nutrition": {
      "kcal": 240,
      "protein_g": 8,
      "carbs_g": 45,
      "fat_g": 4
    },
    "storage": "Best fresh; keeps a few hours chilled. Not for freezing once blended."
  },
  {
    "id": "bf-peanut-butter-banana-smoothie",
    "cat": "smoothies",
    "name": "Peanut Butter Banana Smoothie",
    "emoji": "🥜",
    "cuisine": "Global",
    "photoName": "Peanut Butter Banana Smoothie",
    "time": 5,
    "costPP": 12,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Thick, nutty and filling — breakfast that actually holds you to lunch.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Peanuts aren't nuts at all — they're legumes, growing underground like beans, which is part of why they're so high in protein. Blended with banana and oats, this is a near-complete little meal in a glass: protein, slow carbs and potassium together.",
    "ingredients": [
      {
        "n": "banana",
        "pp": 1,
        "u": ""
      },
      {
        "n": "peanut butter",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "oats",
        "pp": 20,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 200,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Add the banana, peanut butter, oats, milk and honey to a blender.",
      "Blend until completely smooth, about 30 seconds.",
      "Pour and drink."
    ],
    "tip": "The spoon of oats thickens it and keeps you full far longer.",
    "nutrition": {
      "kcal": 360,
      "protein_g": 14,
      "carbs_g": 42,
      "fat_g": 16
    },
    "storage": "Best fresh; keeps a few hours chilled. Not for freezing once blended."
  },
  {
    "id": "bf-amasi-berry-smoothie",
    "cat": "smoothies",
    "name": "Amasi Berry Smoothie",
    "emoji": "🧉",
    "cuisine": "Global",
    "photoName": "Amasi Berry Smoothie",
    "time": 5,
    "costPP": 13,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Tangy maas and berries — creamy, local, and full of good bacteria.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Amasi is South Africa's home-grown answer to kefir or drinking yoghurt — the natural souring fills it with the same kind of friendly bacteria that keep a gut happy. Its built-in tang also means this smoothie needs far less honey than one made with plain milk.",
    "ingredients": [
      {
        "n": "amasi",
        "pp": 200,
        "u": "ml"
      },
      {
        "n": "mixed berries",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Add the amasi, berries, banana and honey to a blender.",
      "Blend until smooth.",
      "Pour and drink right away."
    ],
    "tip": "Amasi brings both the tang and the protein, so no yoghurt is needed.",
    "nutrition": {
      "kcal": 210,
      "protein_g": 11,
      "carbs_g": 32,
      "fat_g": 4
    },
    "storage": "Best fresh; keeps 1 day chilled. Not for freezing once blended."
  },
  {
    "id": "bf-red-berry-and-beet-smoothie",
    "cat": "smoothies",
    "name": "Red Berry & Beet Smoothie",
    "emoji": "🫐",
    "cuisine": "Global",
    "photoName": "Red Berry & Beet Smoothie",
    "time": 5,
    "costPP": 15,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Earthy beetroot and sweet berries — vivid pink and packed with iron.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "That electric red-purple comes from betalains, the same pigments that stain a board after you chop beetroot — and they're powerful antioxidants. Athletes drink beetroot for its natural nitrates, shown to help the body use oxygen more efficiently.",
    "ingredients": [
      {
        "n": "cooked beetroot",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "mixed berries",
        "pp": 80,
        "u": "g"
      },
      {
        "n": "banana",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "plain yoghurt",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 120,
        "u": "ml"
      },
      {
        "n": "honey",
        "pp": 8,
        "u": "g"
      }
    ],
    "method": [
      "Add the cooked beetroot, berries, banana, yoghurt, milk and honey to a blender.",
      "Blend until completely smooth.",
      "Pour and drink right away."
    ],
    "tip": "Use pre-cooked beetroot; the berries hide the earthiness completely.",
    "nutrition": {
      "kcal": 230,
      "protein_g": 8,
      "carbs_g": 42,
      "fat_g": 4
    },
    "storage": "Best fresh; keeps 1 day chilled. Not for freezing once blended."
  },
  {
    "id": "bf-avocado-and-date-smoothie",
    "cat": "smoothies",
    "name": "Avocado & Date Smoothie",
    "emoji": "🥑",
    "cuisine": "Global",
    "photoName": "Avocado & Date Smoothie",
    "time": 5,
    "costPP": 16,
    "freezes": false,
    "fridgeDays": 1,
    "feel": "Thick as a milkshake, rich and silky — avo does what ice cream pretends to.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "Avocado is the secret to the creamiest smoothie there is — its gentle fat blends to a milkshake thickness with no cream at all, and you'd never taste it behind the dates. Those dates bring a natural caramel sweetness plus fibre, so there's no need for any added sugar.",
    "ingredients": [
      {
        "n": "avocado",
        "pp": 0.5,
        "u": ""
      },
      {
        "n": "pitted dates",
        "pp": 3,
        "u": ""
      },
      {
        "n": "blueberries",
        "pp": 40,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 180,
        "u": "ml"
      }
    ],
    "method": [
      "Pit the dates (soak in a little warm water for a few minutes if they are firm).",
      "Scoop out the avocado.",
      "Blend the avocado, dates, blueberries and milk until completely smooth and thick.",
      "Pour and drink right away."
    ],
    "tip": "A ripe avo makes it luxuriously thick — no yoghurt or ice cream needed, and the dates do all the sweetening.",
    "nutrition": {
      "kcal": 320,
      "protein_g": 6,
      "carbs_g": 38,
      "fat_g": 17
    },
    "storage": "Best fresh — the avo browns if kept, so blend and drink. Not for freezing."
  }
];

// ════════════════════════════════════════════════════════════════
//  SUPPER RECIPE LIBRARY — seeded across the 5 locked pills
//  cat: plates | pastapizza | stewscurries | ovenbakes | roasts
// ════════════════════════════════════════════════════════════════
var SUPPER_RECIPES = [
  // ── 🍳 HOMESTYLE PLATES ──
  {
      "id": "sp-bangers-mash",
      "cat": "plates",
      "goesWith": [
          "Creamy Mash",
          "Buttered Peas",
          "Caramelised Onions",
          "English Mustard",
          "Crusty Bread"
      ],
      "diet": "meat",
      "protein": "pork",
      "name": "Bangers & Mash",
      "emoji": "🌭",
      "cuisine": "British / South African",
      "time": 45,
      "costPP": 40,
      "feel": "Proper browned bangers on a silky mound of mash, drowned in glossy onion gravy — the supper that feels like a hug.",
      "didYouKnow": "'Bangers' got their name in the First World War, when meat was scarce and sausages were padded with water and rusk — in a hot pan they hissed, spat and sometimes burst with a bang. The trick to stop them bursting is gentle heat and never pricking a good sausage.",
      "freezes": true,
      "fridgeDays": 2,
      "ingredients": [
          {
              "n": "pork sausages",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "potatoes",
              "pp": 250,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 100,
              "u": "g"
          },
          {
              "n": "butter",
              "pp": 30,
              "u": "g"
          },
          {
              "n": "full cream milk",
              "pp": 40,
              "u": "ml"
          },
          {
              "n": "beef stock",
              "pp": 200,
              "u": "ml"
          },
          {
              "n": "cake flour",
              "pp": 10,
              "u": "g"
          },
          {
              "n": "Worcestershire sauce",
              "pp": 5,
              "u": "ml"
          },
          {
              "n": "frozen peas",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 8,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Peel and chop the potatoes into even chunks. Put them in a pot, cover with cold water, add a big pinch of salt and boil 15–18 minutes until a knife slides in with no resistance.",
          "While they boil, heat the oil in a pan over medium heat and cook the sausages slowly, turning often, for 12–15 minutes until deep golden all over — low and slow stops them bursting. Lift out and rest.",
          "In the same pan add the thinly sliced onion and a pinch of salt. Cook gently 12–15 minutes, stirring, until soft, sweet and properly browned — this slow caramelising is the whole flavour.",
          "Stir the flour into the onion and cook 1 minute, then pour in the beef stock a little at a time, stirring, until smooth. Add the Worcestershire and simmer 5 minutes into a glossy gravy.",
          "Drain the potatoes, let them steam-dry a minute, then mash with the butter and warm milk until silky; season well. Plate the mash, sit the bangers on top, scatter the peas and flood with onion gravy."
      ],
      "tip": "Cook the sausages low and slow and never prick a good one — gentle heat browns them evenly without splitting the skin.",
      "nutrition": {
          "kcal": 650,
          "protein_g": 27,
          "carbs_g": 55,
          "fat_g": 35
      },
      "storage": "Keeps 2 days in the fridge; reheat gently with a splash of milk in the mash. The onion gravy freezes well up to 1 month.",
      "versions": [
          {
              "name": "Proper Onion Gravy",
              "icon": "🏆",
              "default": true,
              "time": 45,
              "costPP": 40,
              "nutrition": {
                  "kcal": 650,
                  "protein_g": 27,
                  "carbs_g": 55,
                  "fat_g": 35
              },
              "feel": "The full treatment — slow-caramelised onions cooked down to sweet and dark, a glossy beef gravy, and mash with real butter and warm milk.",
              "ingredients": [
                  {
                      "n": "pork sausages",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "full cream milk",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "beef stock",
                      "pp": 200,
                      "u": "ml"
                  },
                  {
                      "n": "cake flour",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "Worcestershire sauce",
                      "pp": 5,
                      "u": "ml"
                  },
                  {
                      "n": "frozen peas",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Peel and chop the potatoes into even chunks, cover with cold salted water and boil 15–18 minutes until a knife slides in easily.",
                  "Cook the sausages slowly in the oil over medium heat, turning often, 12–15 minutes until deep golden; rest them.",
                  "In the same pan cook the thinly sliced onion with a pinch of salt, 12–15 minutes, until soft, sweet and well browned.",
                  "Stir in the flour, cook 1 minute, then add the beef stock bit by bit, stirring smooth. Add Worcestershire and simmer 5 minutes to a glossy gravy.",
                  "Drain and steam-dry the potatoes, mash with butter and warm milk, season. Plate mash, bangers, peas and a flood of onion gravy."
              ],
              "didYouKnow": "'Bangers' got their name in the First World War, when meat was scarce and sausages were padded with water and rusk — in a hot pan they hissed, spat and sometimes burst with a bang. The trick to stop them bursting is gentle heat and never pricking a good sausage."
          },
          {
              "name": "Boerie & Mash",
              "icon": "🇿🇦",
              "time": 35,
              "costPP": 36,
              "nutrition": {
                  "kcal": 690,
                  "protein_g": 26,
                  "carbs_g": 52,
                  "fat_g": 40
              },
              "feel": "The South African cousin — a coil of boerewors and a soft tomato-and-onion smoor over the mash. Sunday-lunch energy on a weeknight.",
              "ingredients": [
                  {
                      "n": "boerewors",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "full cream milk",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "sugar"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Boil the peeled, chopped potatoes in salted water until tender, 15–18 minutes.",
                  "Cook the boerewors coil whole over medium heat, turning once, about 12 minutes until cooked through and browned; rest, then cut into lengths.",
                  "In the same pan soften the chopped onion, add the chopped tomatoes and a pinch of sugar, and simmer 10 minutes into a soft smoor.",
                  "Mash the drained potatoes with butter and warm milk. Plate with the wors and a generous spoon of tomato smoor."
              ],
              "didYouKnow": "Boerewors is traditionally sold and cooked in one long coil, never in links — the spiral cooks evenly and keeps the juices in. The tomato-and-onion smoor it sits in here is the same humble relish that tops pap on farms across the country."
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 30,
              "costPP": 24,
              "nutrition": {
                  "kcal": 600,
                  "protein_g": 22,
                  "carbs_g": 56,
                  "fat_g": 32
              },
              "feel": "Value sausages and a quick stock gravy — the same comforting plate for a fraction of the spend.",
              "ingredients": [
                  {
                      "n": "russian sausages",
                      "pp": 130,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "beef stock",
                      "pp": 180,
                      "u": "ml"
                  },
                  {
                      "n": "cake flour",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "milk",
                      "pp": 35,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 6,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Boil the chopped potatoes in salted water until soft, about 15 minutes.",
                  "Fry the sausages in the oil until browned all over; set aside.",
                  "Soften the sliced onion in the same pan, stir in the flour, then the stock, and simmer into a quick gravy.",
                  "Mash the potatoes with butter and milk; serve with the sausages and gravy."
              ],
              "didYouKnow": "A 'Russian' sausage isn't Russian at all — it's a smoked, pre-cooked South African staple named for its likeness to a Krakowska-style sausage. Because it's already cooked it just needs browning, which makes it the speediest, cheapest banger of the lot."
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 25,
              "costPP": 30,
              "nutrition": {
                  "kcal": 630,
                  "protein_g": 26,
                  "carbs_g": 54,
                  "fat_g": 34
              },
              "feel": "On the table in 25 — bangers, peas and a fast gravy when the evening's already running away.",
              "ingredients": [
                  {
                      "n": "pork sausages",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "instant gravy",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "milk",
                      "pp": 35,
                      "u": "ml"
                  },
                  {
                      "n": "frozen peas",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 6,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Boil the chopped potatoes until tender, about 15 minutes.",
                  "Meanwhile fry the sausages until golden and simmer the peas.",
                  "Soften the sliced onion, then make the gravy with the instant gravy and water as the packet directs, stirring in the onion.",
                  "Mash the potatoes with butter and milk; plate with sausages, peas and gravy."
              ],
              "didYouKnow": "Instant gravy granules are really just browned flour, salt and a little fat — which is exactly what a slow gravy is, minus the hour. Stirring a spoon of fried onion through the packet version is the cheat that makes it taste homemade."
          }
      ]
  },
  {
      "id": "sp-fish-chips",
      "cat": "plates",
      "goesWith": [
          "Slap Chips",
          "Mushy Peas",
          "Tartare Sauce",
          "Lemon Wedge",
          "Brown Vinegar"
      ],
      "diet": "meat",
      "protein": "fish",
      "name": "Fish & Chips",
      "emoji": "🐟",
      "cuisine": "British",
      "time": 45,
      "costPP": 60,
      "feel": "Shatteringly crisp golden batter, soft chips and a squeeze of lemon — Friday night on a plate.",
      "didYouKnow": "Fish and chips was so vital to British morale it was one of the few foods never rationed in either World War. It married fried fish, brought by Jewish immigrants, with chips from the industrial north — the takeaway that went on to conquer the world.",
      "freezes": false,
      "fridgeDays": 1,
      "ingredients": [
          {
              "n": "hake fillets",
              "pp": 160,
              "u": "g"
          },
          {
              "n": "potatoes",
              "pp": 280,
              "u": "g"
          },
          {
              "n": "cake flour",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "cornflour",
              "pp": 15,
              "u": "g"
          },
          {
              "n": "lager beer",
              "pp": 80,
              "u": "ml"
          },
          {
              "n": "sunflower oil",
              "pp": 60,
              "u": "ml"
          },
          {
              "n": "frozen peas",
              "pp": 70,
              "u": "g"
          },
          {
              "n": "lemon",
              "pp": 0.25,
              "u": ""
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Cut the potatoes into thick chips. Rinse off the starch, then dry them really well in a clean cloth — wet chips never crisp.",
          "Heat the oil to 150°C (a chip dropped in should bubble lazily). Fry the chips 6–7 minutes until soft and pale, not coloured; lift out and rest.",
          "Make the batter just before frying: whisk the flour, cornflour and a pinch of salt with the cold beer into a smooth, thick cream. The cold and the bubbles make it crisp.",
          "Turn the oil up to 190°C. Pat the fish dry, dip in batter, let the excess drip, then lower in gently. Fry 4–5 minutes until deep golden; drain on paper.",
          "Fry the chips a second time at 190°C for 2–3 minutes until golden and crunchy; salt at once. Serve with the fish, peas and a lemon wedge."
      ],
      "tip": "Dry the chips thoroughly and fry them twice — the first soft fry cooks them through, the second makes them crisp.",
      "nutrition": {
          "kcal": 680,
          "protein_g": 34,
          "carbs_g": 62,
          "fat_g": 32
      },
      "storage": "Best fresh — the batter softens on standing. Re-crisp chips in a hot oven; fish is best not reheated. Not for freezing once fried.",
      "versions": [
          {
              "name": "Beer-Battered",
              "icon": "🍺",
              "default": true,
              "time": 45,
              "costPP": 60,
              "nutrition": {
                  "kcal": 680,
                  "protein_g": 34,
                  "carbs_g": 62,
                  "fat_g": 32
              },
              "feel": "The chip-shop classic — an ice-cold beer batter that fries up into a crisp, blistered, golden shell.",
              "ingredients": [
                  {
                      "n": "hake fillets",
                      "pp": 160,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 280,
                      "u": "g"
                  },
                  {
                      "n": "cake flour",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "cornflour",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "lager beer",
                      "pp": 80,
                      "u": "ml"
                  },
                  {
                      "n": "sunflower oil",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "frozen peas",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.25,
                      "u": ""
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Cut the potatoes into thick chips, rinse off the starch and dry very well.",
                  "Fry the chips at 150°C for 6–7 minutes until soft and pale; rest them.",
                  "Whisk the flour, cornflour, salt and cold beer to a smooth thick cream just before frying.",
                  "Turn the oil to 190°C, dip the dried fish in batter and fry 4–5 minutes until deep golden; drain.",
                  "Fry the chips again at 190°C for 2–3 minutes until crisp; salt. Serve with fish, peas and lemon."
              ]
          },
          {
              "name": "Crispy Oven",
              "icon": "🌿",
              "time": 40,
              "costPP": 52,
              "nutrition": {
                  "kcal": 480,
                  "protein_g": 34,
                  "carbs_g": 56,
                  "fat_g": 14
              },
              "feel": "Crumbed and baked instead of battered and fried — all the crunch, far less oil.",
              "ingredients": [
                  {
                      "n": "hake fillets",
                      "pp": 160,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 280,
                      "u": "g"
                  },
                  {
                      "n": "breadcrumbs",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "cake flour",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "large eggs",
                      "pp": 0.5,
                      "u": "egg"
                  },
                  {
                      "n": "olive oil",
                      "pp": 15,
                      "u": "ml"
                  },
                  {
                      "n": "frozen peas",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.25,
                      "u": ""
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Cut the potatoes into chips, toss in a little olive oil and salt, spread on a tray and bake at 220°C for 30–35 minutes, turning once.",
                  "Set up three bowls: flour, beaten egg, breadcrumbs. Coat each fish fillet in flour, then egg, then crumbs.",
                  "Sit the fish on a lined tray, drizzle with oil and bake for the last 15–18 minutes until golden and flaking.",
                  "Serve with peas and a lemon wedge."
              ]
          },
          {
              "name": "Air-Fryer",
              "icon": "💨",
              "time": 30,
              "costPP": 50,
              "nutrition": {
                  "kcal": 450,
                  "protein_g": 34,
                  "carbs_g": 54,
                  "fat_g": 11
              },
              "feel": "Barely any oil, properly crisp — the modern weeknight fish and chips.",
              "ingredients": [
                  {
                      "n": "hake fillets",
                      "pp": 160,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 280,
                      "u": "g"
                  },
                  {
                      "n": "breadcrumbs",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "cake flour",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "large eggs",
                      "pp": 0.5,
                      "u": "egg"
                  },
                  {
                      "n": "sunflower oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "frozen peas",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.25,
                      "u": ""
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Cut the potatoes into chips, toss with a teaspoon of oil and salt, and air-fry at 200°C for 18–22 minutes, shaking halfway.",
                  "Crumb the fish: flour, then beaten egg, then breadcrumbs.",
                  "Air-fry the crumbed fish at 190°C for 10–12 minutes until golden and cooked through.",
                  "Warm the peas and serve with a lemon wedge."
              ]
          },
          {
              "name": "Budget (Crumbed)",
              "icon": "💰",
              "time": 35,
              "costPP": 38,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 30,
                  "carbs_g": 58,
                  "fat_g": 22
              },
              "feel": "Cheaper whiting, pan-crumbed, with proper slap chips and a splash of brown vinegar.",
              "ingredients": [
                  {
                      "n": "whiting fillets",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 280,
                      "u": "g"
                  },
                  {
                      "n": "cake flour",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "large eggs",
                      "pp": 0.5,
                      "u": "egg"
                  },
                  {
                      "n": "breadcrumbs",
                      "pp": 35,
                      "u": "g"
                  },
                  {
                      "n": "sunflower oil",
                      "pp": 45,
                      "u": "ml"
                  },
                  {
                      "n": "brown vinegar",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Cut the potatoes into chips, dry well, and fry in one go at 170°C until soft and golden; drain, salt and splash with brown vinegar.",
                  "Crumb the fish: flour, beaten egg, breadcrumbs.",
                  "Shallow-fry the fish in a little oil, 3 minutes a side, until golden and crisp.",
                  "Serve with the slap chips."
              ]
          }
      ]
  },

  // ── 🍝 PASTA & PIZZA ──
  {
    "id": "sp-lasagne",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "beef",
    "name": "Beef Lasagne",
    "emoji": "🍝",
    "cuisine": "Italian",
    "time": 75,
    "costPP": 40,
    "feel": "The full Sunday build — a slow beef ragù layered with pasta and a proper béchamel, baked until the top is bronzed and the edges crisp. Worth every minute.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Grated parmesan",
      "Steamed greens",
      "A glass of red"
    ],
    "didYouKnow": "The word \"lasagne\" originally meant the pot, not the pasta — it comes from the Greek \"lasanon\", a cooking vessel. Only later did it come to mean the flat sheets cooked in it. Baked lasagne as we know it comes from Naples and Emilia-Romagna.",
    "nutrition": {
      "kcal": 620,
      "protein_g": 32,
      "carbs_g": 52,
      "fat_g": 32
    },
    "storage": "Keeps 3 days and only gets better — the layers firm up overnight. Freezes brilliantly in portions for up to 2 months; bake from frozen, covered with foil.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Classic",
        "icon": "🏆",
        "default": true,
        "time": 75,
        "costPP": 40,
        "nutrition": {
          "kcal": 620,
          "protein_g": 32,
          "carbs_g": 52,
          "fat_g": 32
        },
        "feel": "The full Sunday build — a slow beef ragù layered with pasta and a proper béchamel, baked until the top is bronzed and the edges crisp. Worth every minute.",
        "ingredients": [
          {
            "n": "lasagne sheets",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 110,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 150,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "carrots",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "celery",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 150,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Make the ragù: soften the chopped onion, carrot, celery and garlic in the olive oil — this trio of onion, carrot and celery is the classic soffritto, the sweet base every good sauce is built on. Then brown the mince well, stir in the tomato paste, tinned tomatoes and herbs, and simmer 25–30 min until thick.",
          "Make the béchamel (white sauce): melt the butter, stir in the flour and cook 1–2 min, then whisk in the milk slowly until smooth and thick.",
          "Layer in a dish: a little ragù on the base, then sheets, ragù, a little béchamel — repeat, finishing with béchamel on top.",
          "Scatter the cheddar and parmesan over and bake at 180°C until golden and bubbling, 35–40 min.",
          "Rest 10 minutes before cutting — this lets the layers set so they lift out in neat slices instead of sliding apart."
        ],
        "didYouKnow": "The word \"lasagne\" originally meant the pot, not the pasta — it comes from the Greek \"lasanon\", a cooking vessel. Only later did it come to mean the flat sheets cooked in it. Baked lasagne as we know it comes from Naples and Emilia-Romagna."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 70,
        "costPP": 28,
        "nutrition": {
          "kcal": 560,
          "protein_g": 26,
          "carbs_g": 56,
          "fat_g": 24
        },
        "feel": "Less mince, more veg bulking the ragù, and cheddar standing in for parmesan — a big, generous lasagne that costs a fraction and feeds a crowd.",
        "ingredients": [
          {
            "n": "lasagne sheets",
            "pp": 65,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 75,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 170,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 14,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "carrots",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "celery",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 35,
            "u": "g"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          },
          {
            "n": "margarine",
            "pp": 20,
            "u": "g"
          },
          {
            "n": "beef stock",
            "pp": 200,
            "u": "ml"
          }
        ],
        "method": [
          "Soften the onion, grated carrot and garlic in the oil, then brown the mince. Add the tomato paste, tinned tomatoes and herbs and simmer 25 min.",
          "Make the white layer the thrifty way: melt a hard cooking margarine — the 80%-fat kind (a Rama brick is reliable); low-fat tub spreads are mostly water and won’t make a proper roux. Stir in the flour and cook 1–2 min, then whisk in warm, well-diluted beef stock until smooth and thick. This savoury \"mock béchamel\" costs a fraction of a milk one and suits a meaty lasagne beautifully.",
          "Layer ragù, sheets and béchamel, finishing with béchamel and the cheddar.",
          "Bake at 180°C until golden, 35–40 min, and rest before cutting."
        ],
        "didYouKnow": "You don’t need milk and butter for the white layer: a roux of margarine and well-diluted beef stock makes a savoury \"mock béchamel\" that’s cheaper and, in a meaty lasagne, even more moreish. It’s an old thrift-kitchen trick from the days when milk and butter were dear."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 45,
        "costPP": 38,
        "nutrition": {
          "kcal": 610,
          "protein_g": 31,
          "carbs_g": 54,
          "fat_g": 30
        },
        "feel": "A shortcut lasagne using no-precook sheets and a faster sauce — half the time, still that bubbling, golden-topped comfort.",
        "ingredients": [
          {
            "n": "lasagne sheets",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 110,
            "u": "g"
          },
          {
            "n": "tomato passata",
            "pp": 180,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 150,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 35,
            "u": "g"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          }
        ],
        "method": [
          "Brown the mince with the onion and garlic, stir in the passata, tomato paste and herbs and simmer just 10 min — a looser sauce is good here because the dry sheets drink it up.",
          "Quick béchamel: melt the butter, stir in the flour 1 min, whisk in the milk until thick.",
          "Layer ragù, dry no-precook sheets and béchamel, finishing with béchamel and the cheddar.",
          "Cover with foil and bake at 190°C for 30 min, then uncover 10 min to brown. Rest before cutting."
        ],
        "didYouKnow": "No-precook lasagne sheets are simply rolled thinner and pre-dried, so they soften by soaking up moisture from the sauce as they bake. That is why a quicker lasagne needs a slightly wetter, looser sauce than a traditional one."
      }
    ],
    "ingredients": [
      {
        "n": "lasagne sheets",
        "pp": 60,
        "u": "g"
      },
      {
        "n": "beef mince",
        "pp": 110,
        "u": "g"
      },
      {
        "n": "tinned tomatoes",
        "pp": 150,
        "u": "g"
      },
      {
        "n": "tomato paste",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "onion",
        "pp": 50,
        "u": "g"
      },
      {
        "n": "carrots",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "celery",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "garlic",
        "pp": 5,
        "u": "g"
      },
      {
        "n": "milk",
        "pp": 150,
        "u": "ml"
      },
      {
        "n": "butter",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "flour",
        "pp": 25,
        "u": "g"
      },
      {
        "n": "cheddar",
        "pp": 30,
        "u": "g"
      },
      {
        "n": "parmesan",
        "pp": 12,
        "u": "g"
      },
      {
        "n": "olive oil",
        "pp": 8,
        "u": "ml"
      },
      {
        "n": "dried Italian herbs",
        "pp": 1,
        "u": "g"
      }
    ]
  },
  {id:'sp-spag-bol', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Grated parmesan','A glass of red'], diet:'meat', protein:'beef', name:'Spaghetti Bolognese', emoji:'🍝', cuisine:'Italian', time:30, costPP:59,
  feel:'The weeknight rescue everyone already knows how to twirl.',
  ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],
  method:['Soften the chopped onion, carrot and garlic in a little oil.','Add the mince and brown well, breaking up any lumps.','Stir in the tomatoes and simmer gently for 25 minutes until thick and glossy, then season well with salt and pepper.','Cook the spaghetti, drain, and serve topped with the sauce and grated cheddar.'],
  tip:'A long, slow simmer is the whole secret — give the sauce time and it rewards you.',
  didYouKnow:'In Bologna, "spaghetti bolognese" doesn\'t exist — the real ragù is served on fresh tagliatelle, never spaghetti, and uses only a whisper of tomato. What the world calls "spag bol" is its travelled, tomato-rich cousin.',
  nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18}, storage:'Sauce keeps 3 days and freezes 2 months.',
  versions:[
    {name:'Slow Ragù',icon:'🍝',default:true,time:135,costPP:59,nutrition:{kcal:720,protein_g:38,carbs_g:62,fat_g:34},feel:'Not the 20-minute version — a true slow ragù, built on a sweet soffritto and finished with a secret splash of milk. The kind of sauce that makes the house smell like Sunday.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:90,u:'g'},{n:'pork mince',pp:40,u:'g'},{n:'streaky bacon',pp:20,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:12,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'red wine',pp:30,u:'ml'},{n:'beef stock',pp:60,u:'ml'},{n:'full cream milk',pp:40,u:'ml'},{n:'olive oil',pp:8,u:'ml'},{n:'parmesan',pp:15,u:'g'},{n:'dried Italian herbs',pp:1,u:'g'}],method:['Sweat finely diced onion, carrot and celery in the olive oil over low heat 10–12 min — the soffritto is the flavour base.','Render the bacon, add the garlic for a minute, then brown the beef and pork mince HARD in batches for deep colour.','Cook out the tomato paste 2 min, pour in the red wine and reduce almost away.','Add the tinned tomatoes, stock and a splash of milk; simmer the lowest heat 1.5–2 hours.','Toss the cooked spaghetti THROUGH the sauce with a little pasta water; finish with parmesan.']},
    {name:'Budget',icon:'💰',time:40,costPP:31,nutrition:{kcal:500,protein_g:24,carbs_g:70,fat_g:13},feel:'Lentils and grated veg stretch a little mince a long way — same rich, glossy sauce, half the cost, all real.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:70,u:'g'},{n:'brown lentils',pp:40,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'mixed herbs'}],method:['Soften the onion, finely grated carrot and garlic in the oil — grating the veg melts it into the sauce so no one spots the stretch.','Brown the mince hard, then stir in the tomato paste.','Add the lentils, tinned tomatoes and a cup of water; simmer 30 min until the lentils are soft and the sauce is thick.','Toss through the spaghetti — the lentils give it body and protein for a fraction of the meat cost.']},
    {name:'Quick',icon:'⚡',time:30,costPP:29,nutrition:{kcal:540,protein_g:28,carbs_g:64,fat_g:18},feel:'On the table in 30 — the honest weeknight rescue when time is short.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],method:['Soften the chopped onion and garlic in a little oil.','Add the mince and brown well, breaking up the lumps.','Stir in the tomatoes and simmer 20 min until thick.','Toss with spaghetti and top with grated cheddar.']},
    {name:'Vegetarian',icon:'🌱',time:50,costPP:45,nutrition:{kcal:470,protein_g:20,carbs_g:72,fat_g:12},feel:'Lentils and mushrooms bring all the savoury depth — you won\'t miss the meat.',ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'brown lentils',pp:70,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:12,u:'g'},{n:'tinned tomatoes',pp:120,u:'g'},{n:'red wine',pp:25,u:'ml'},{n:'olive oil',pp:8,u:'ml'},{n:'parmesan',pp:15,u:'g'},{n:'dried Italian herbs',pp:1,u:'g'}],method:['Sweat the soffritto slowly in olive oil.','Brown the chopped mushrooms hard for umami depth.','Add the lentils, tomato paste and wine, then the tinned tomatoes; simmer 30 min.','Finish with parmesan and toss through the pasta.']},
    {name:'Classic',icon:'🏆',time:150,costPP:45,nutrition:{kcal:700,protein_g:36,carbs_g:60,fat_g:33},feel:'The Bologna original — tagliatelle, pancetta, a whisper of tomato, white wine and a splash of milk.',ingredients:[{n:'tagliatelle or spaghetti',pp:90,u:'g'},{n:'beef mince',pp:110,u:'g'},{n:'streaky bacon',pp:25,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'full cream milk',pp:50,u:'ml'},{n:'beef stock',pp:40,u:'ml'},{n:'parmesan',pp:15,u:'g'}],method:['Soffritto with the pancetta until soft and sweet.','Brown the beef gently, add the white wine and let it cook off.','Stir in the milk (the authentic touch) and just a little tomato paste.','Simmer the gentlest 2.5 hours; serve on tagliatelle, never spaghetti.']}
  ]},

  // ── 🍛 STEWS & CURRIES ──
  {id:'sp-capemalay-curry', cat:'stewscurries', goesWith:['Yellow rice','Sambal','Blatjang (apricot chutney)','Roti','Sliced banana'], diet:'meat', protein:'chicken', name:'Cape Malay Chicken Curry', emoji:'🍛', cuisine:'Cape Malay', time:55, costPP:32,
    feel:'Warm, gently spiced and just a little sweet — the smell that fills the whole house on a Sunday.',
    ingredients:[{n:'chicken pieces',pp:180,u:'g'},{n:'onion',pp:80,u:'g'},{n:'tomatoes',pp:90,u:'g'},{n:'potatoes',pp:120,u:'g'},{n:'curry powder',pp:10,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'apricot jam',pp:10,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Slice the onions and fry them slowly in the oil over medium heat until soft and deep golden — about 8 minutes. This sweetness is the base of the curry.','Stir in the garlic-ginger paste, curry powder, a small piece of cinnamon and the bay leaves. Fry for 1 minute until fragrant — if it smells dusty it needs a few more seconds.','Add the chopped tomatoes and a spoon of apricot jam, and cook 5 minutes until the tomatoes break down into a thick base.','Add the chicken pieces and turn them to coat. Pour in just enough water to come halfway up, cover, and simmer gently 25 minutes.','Add the cubed potatoes and cook a further 20 minutes until the potatoes are soft and the chicken pulls from the bone. Season with salt.','Cook the rice separately and serve the curry spooned over, with a sambal on the side.'],
    tip:'Toast the curry powder in the oil for a few seconds before the tomato goes in — it wakes up all the spice.',
    didYouKnow:'Cape Malay cooking was shaped by enslaved and exiled people brought to the Cape from Indonesia, Malaysia and India in the 1600s and 1700s. That is why the curries are fragrant and warm rather than fiery, and why a spoon of fruit sweetness — apricot jam or chutney — is almost always in the pot.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:560,protein_g:32,carbs_g:58,fat_g:20}, storage:'Even better the next day; keeps 3 days in the fridge and freezes for 2 months.',
    versions:[
      {name:'Sunday Pot',icon:'🏆',default:true,time:75,costPP:38,nutrition:{kcal:600,protein_g:34,carbs_g:60,fat_g:24},
        feel:'Bone-in chicken simmered slow with whole spices and a spoon of apricot jam — the proper Cape Malay pot, sweet-savoury and fragrant.',
        tip:'Add the whole spices — cinnamon stick and bay — right at the start, so their oils have the full long simmer to bloom into the gravy.',
        didYouKnow:'The whole spices — cinnamon stick, cardamom, cloves, bay — are added at the start so their oils have time to bloom into the gravy. In a Cape Malay kitchen they are usually left in the pot and simply eaten around.',
        ingredients:[{n:'chicken pieces',pp:200,u:'g'},{n:'onion',pp:90,u:'g'},{n:'tomatoes',pp:100,u:'g'},{n:'potatoes',pp:140,u:'g'},{n:'curry powder',pp:12,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'apricot jam',pp:12,u:'g'},{n:'garlic-ginger paste',pp:10,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Fry the sliced onion slowly in the oil until soft and deep golden, 10 minutes — do not rush this.','Add the garlic-ginger paste, curry powder, a cinnamon stick and bay leaves; fry 1 minute until fragrant.','Stir in the tomatoes and apricot jam and cook to a thick base, 6 minutes.','Add the chicken, turn to coat, then pour in water to come halfway up. Cover and simmer very gently 40 minutes.','Add the potatoes and cook 25 minutes more until soft and the chicken falls off the bone.','Taste and season well with salt and pepper.','Stir a spoon of yoghurt through off the heat for body, season, and serve with yellow rice and sambals.']},
      {name:'Budget',icon:'💰',time:55,costPP:24,nutrition:{kcal:520,protein_g:24,carbs_g:64,fat_g:16},
        feel:'Drumsticks and extra potato stretch the pot a long way — same warm, fragrant gravy, gentler on the wallet.',
        tip:'Cut the extra potato small so some of it half-dissolves into the gravy and thickens it — that is what makes a little chicken feed everyone.',
        didYouKnow:'Bulking a curry with potato is a thrifty trick across the whole Cape: the potato drinks up the gravy and turns a little chicken into a full pot that feeds everyone.',
        ingredients:[{n:'chicken pieces',pp:120,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'onion',pp:80,u:'g'},{n:'tomatoes',pp:90,u:'g'},{n:'curry powder',pp:10,u:'g'},{n:'apricot jam',pp:8,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'rice',pp:80,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the sliced onion in the oil until soft and golden.','Add the garlic-ginger and curry powder and fry 1 minute until fragrant.','Stir in the tomato and apricot jam and cook to a base.','Add the drumsticks and plenty of cubed potato with water to cover halfway; simmer 40 minutes until everything is tender.','Season well with salt and pepper, then serve over rice — the potato makes it stretch.']},
      {name:'Quick',icon:'\u26a1',time:35,costPP:28,nutrition:{kcal:560,protein_g:32,carbs_g:58,fat_g:20},
        feel:'Boneless chicken and shop curry powder on a weeknight — fragrant and on the table in half an hour.',
        tip:'Add the chicken breast last and pull it off the heat the moment it turns white — breast dries out fast, unlike the bone-in cuts.',
        didYouKnow:'A good shop-bought Cape Malay or mild curry powder already blends the warm spices (coriander, cumin, turmeric, cinnamon) for you — the weeknight shortcut to the same gentle, fragrant pot.',
        ingredients:[{n:'chicken breast',pp:160,u:'g'},{n:'onion',pp:60,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'potatoes',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the chopped onion in oil until soft.','Add the garlic-ginger and curry powder and fry 1 minute.','Add the tomato and cubed potato with a splash of water; simmer 12 minutes until the potato is nearly soft.','Add the cubed chicken breast and cook 8 minutes more until just done — do not overcook or it goes dry.','Season well with salt and pepper, then serve over rice.']},
      {name:'Lamb',icon:'\ud83d\udc11',time:110,costPP:48,nutrition:{kcal:620,protein_g:34,carbs_g:50,fat_g:32},
        feel:'The same warm Cape spices around slow lamb on the bone — richer, deeper, special-occasion.',
        tip:'Brown the lamb hard and in batches before it goes near any liquid — do not crowd the pot, or it steams grey instead of colouring.',
        didYouKnow:'Lamb curry is the festive version in many Cape Malay homes, traditionally tied to Eid and family gatherings, where the longer, slower cook is part of the occasion.',
        ingredients:[{n:'lamb',pp:180,u:'g'},{n:'onion',pp:90,u:'g'},{n:'tomatoes',pp:100,u:'g'},{n:'potatoes',pp:140,u:'g'},{n:'curry powder',pp:12,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'apricot jam',pp:12,u:'g'},{n:'garlic-ginger paste',pp:10,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Brown the lamb pieces in the oil in batches and set aside.','Fry the sliced onion until deep golden, then add garlic-ginger, curry powder, cinnamon and bay; fry 1 minute.','Stir in tomato and apricot jam and cook to a thick base.','Return the lamb with water to cover; simmer very gently 1.5 hours until almost tender.','Add the potatoes and cook 30 minutes more until the lamb is spoon-soft. Season well with salt and pepper, then serve with rice.']}
    ]},
  {id:'sp-beef-stew', cat:'stewscurries', goesWith:['Rice','Pap','Mashed potato','Crusty bread'], diet:'meat', protein:'beef', name:'Farmhouse Beef Stew', emoji:'🥘', cuisine:'South African', time:130, costPP:44,
  feel:'Low and slow until the beef gives way to the fork and the gravy turns glossy and deep — proper farmhouse-pot cooking that looks after a whole table.',
  ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],
  method:['Pat the beef dry and toss in seasoned cake flour. Brown HARD in batches in a little oil in a heavy pot — never crowd it, a packed pot steams instead of sears and you lose the dark fond on the base where the flavour lives. Set the meat aside.','Soften the chopped onion in the same pot, scraping up the fond, then add the garlic for a minute.','Stir in the tomato paste and cook it out 2 minutes until it darkens — this loses the raw tang and builds the deep, rich base.','Return the beef, pour in the stock, drop in the bay and thyme. Bring to a bare simmer, cover, and cook low for 1.5 hours — low and slow is what melts the connective tissue to silk.','Add the carrots and potatoes for the last 40 minutes so they hold their shape instead of melting away.','Taste and season well with salt and pepper.','Finish with a splash of Worcestershire and check the seasoning. The gravy should coat the back of a spoon — if it is thin, simmer uncovered a few minutes to reduce. Serve over rice, pap or with bread.'],
  tip:'Brown the meat properly and in batches — that fond is the whole flavour of the gravy — and add the potatoes late so they do not disintegrate.',
  didYouKnow:'Browning the meat doesn\'t "seal in the juices" — that\'s a century-old myth. It\'s the Maillard reaction: sugars and proteins forming hundreds of new flavour compounds. That dark fond on the pot is pure flavour you\'re about to scrape up.',
  nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24}, storage:'Improves overnight as the flavours marry; keeps 3 days, freezes 3 months. Reheat gently, loosen with a splash of stock.',
  versions:[
    {name:'Farmhouse',icon:'🥘',default:true,time:130,costPP:44,nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24},feel:'The full farmhouse-pot stew — browned hard, simmered low, glossy and deep. The one that fills the house with Sunday.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],method:['Pat the beef dry, toss in seasoned cake flour, brown HARD in batches — don\'t crowd the pot, the fond is the flavour. Set aside.','Soften the onion in the fond, add garlic for a minute.','Cook out the tomato paste 2 min until it darkens.','Return the beef, add stock, bay and thyme; simmer low and covered 1.5 hours.','Add carrots and potatoes for the last 40 min.','Finish with Worcestershire; reduce uncovered if the gravy is thin.','Taste and season well with salt and pepper.']},
    {name:'Budget',icon:'💰',time:120,costPP:23,nutrition:{kcal:430,protein_g:24,carbs_g:48,fat_g:16},feel:'Stretches less meat across a fuller pot — more potato, more gravy, every cent feeding the table. All real, no packets.',ingredients:[{n:'beef stewing meat',pp:100,u:'g'},{n:'potatoes',pp:220,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'beef stock powder',pp:6,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'oil',pp:10,u:'ml'}],method:['Toss the beef in seasoned flour and brown for colour and to thicken the gravy later.','Soften the onion, stir in the tomato paste, then return the beef.','Add water and the stock powder (real concentrated stock, no soup packets), bring to a simmer.','Simmer covered 1 hour, add the potatoes and carrots, and cook 30 min more until tender and the gravy has thickened from the floured meat.','Taste and season well with salt and pepper.']},
    {name:'Quick',icon:'⚡',time:45,costPP:44,nutrition:{kcal:500,protein_g:37,carbs_g:36,fat_g:23},feel:'Pressure-cooker farmhouse stew — the same deep flavour, ready in 45 instead of two hours.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'oil',pp:10,u:'ml'}],method:['Brown the floured beef in the pressure cooker on sauté.','Add onion, garlic and tomato paste, cook out 2 min.','Add stock, seal, and pressure-cook 20 min.','Release, add carrots and potatoes, simmer open 12–15 min until tender and the gravy thickens.','Taste and season well with salt and pepper.']},
    {name:'Red Wine',icon:'🍷',time:150,costPP:55,nutrition:{kcal:560,protein_g:39,carbs_g:34,fat_g:28},feel:'The grown-up version — beef braised in red wine with mushrooms until the gravy is dark, silky and deeply savoury.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'streaky bacon',pp:20,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'red wine',pp:60,u:'ml'},{n:'beef stock',pp:150,u:'ml'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:150,u:'g'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:8,u:'ml'}],method:['Render the chopped bacon, then brown the floured beef HARD in batches in the fat. Set aside.','Soften onion and garlic, brown the mushrooms hard for umami.','Cook out the tomato paste, pour in the red wine and reduce by half — this burns off the sharpness and concentrates the flavour.','Return the beef and bacon with the stock, bay and thyme; braise low and covered 1.5–2 hours.','Add carrots and baby potatoes for the last 40 min; reduce uncovered until the gravy is glossy and coats a spoon.','Taste and season well with salt and pepper.']},
    {name:'Over Coals',icon:'🔥',time:180,costPP:44,nutrition:{kcal:520,protein_g:38,carbs_g:36,fat_g:25},feel:'The potjie way — browned in a three-legged pot and left to its own devices over low coals, layered and never stirred, until everything melts together.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:180,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'}],method:['Get a bed of coals low and steady — gentle heat is the whole game with a potjie.','Brown the floured beef in batches in the pot, then soften the onion and garlic and cook out the tomato paste.','Pour in the stock with the bay and thyme, settle the meat in an even layer.','Layer the carrots and baby potatoes ON TOP — do NOT stir; the steam cooks them down into the stew.','Lid on, low coals, 2.5–3 hours. Only stir right at the end to bring the gravy together. Cross-link: see the Potjie shelf in Braai.','Taste and season well with salt and pepper.']}
  ]},

  // ── 🥧 PIES & OVEN BAKES ──
  {id:'sp-cottage-pie', cat:'ovenbakes', goesWith:['Frozen peas','Green salad','Gravy'], diet:'meat', protein:'beef', name:'Cottage Pie', emoji:'🥧', cuisine:'British', time:65, costPP:38,
    feel:'Rich, herb-laced beef gravy under a buttery, cheese-topped mash — proper, deeply savoury comfort food.',
    ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'celery',pp:30,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'butter',pp:20,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'cheddar',pp:30,u:'g'}],
    method:['Brown the beef mince hard in a little oil, breaking it up, until well coloured — colour is flavour, so do not rush it. Lift out.','Soften the onion, carrot, celery and garlic in the same pan, 5 minutes.','Stir in the tomato paste and cook 1 minute, then return the mince with the thyme, a couple of bay leaves and a good splash of Worcestershire sauce.','Add the stock and peas and simmer 15–20 minutes until rich and thick. Season well with salt and pepper with salt and black pepper, then fish out the bay leaves and spoon into a dish.','Boil the potatoes in salted water until soft, drain and steam-dry a minute, then mash with the butter, warm milk and half the cheese. Season the mash with salt, pepper and a pinch of nutmeg.','Spread over the mince, rough up the surface with a fork, scatter the rest of the cheese and bake at 190°C for 25–30 minutes until golden and bubbling. Rest 10 minutes before serving.'],
    tip:'Season the mash properly — salt, pepper and a pinch of nutmeg — and rough the top with a fork so the peaks crisp golden.',
    didYouKnow:'Cottage pie (beef) and shepherd\'s pie (lamb) are the same dish with different meat. "Cottage" referred to the humble homes of the rural poor, who topped leftover meat with cheap, filling potato.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:560,protein_g:26,carbs_g:52,fat_g:28}, storage:'Keeps 3 days; assembles ahead and freezes 2 months — bake from frozen, covered, then uncover to brown.',
    versions:[
      {name:'Classic',icon:'🏆',default:true,time:75,costPP:42,nutrition:{kcal:590,protein_g:28,carbs_g:52,fat_g:31},
        feel:'A deeply savoury beef gravy built on onion, carrot, celery and garlic, lifted with thyme, bay, Worcestershire and tomato paste, under a buttery cheese-and-nutmeg mash baked golden.',
        tip:'The trio of Worcestershire, tomato paste and thyme is what turns plain mince into a rich, restaurant-worthy gravy — do not skip them, and taste for salt before it goes in the oven.',
        didYouKnow:'A splash of Worcestershire sauce and a spoon of tomato paste add deep "umami" — savoury richness — that makes the gravy taste long-simmered even in 20 minutes; bay and thyme give it the classic aroma.',
        ingredients:[{n:'beef mince',pp:140,u:'g'},{n:'potatoes',pp:320,u:'g'},{n:'onion',pp:60,u:'g'},{n:'carrots',pp:70,u:'g'},{n:'celery',pp:40,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'worcestershire sauce',pp:6,u:'ml'},{n:'beef stock',pp:130,u:'ml'},{n:'fresh thyme',pp:3,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'butter',pp:25,u:'g'},{n:'milk',pp:35,u:'ml'},{n:'cheddar',pp:35,u:'g'}],
        method:['Brown the mince hard; lift out.','Soften onion, carrot, celery and garlic; stir in tomato paste and cook 1 minute.','Return the mince with thyme, bay and Worcestershire; add stock and peas.','Simmer 20 minutes until rich; season well with salt and pepper; discard the bay.','Mash the boiled potatoes with butter, warm milk and half the cheese; season with salt, pepper and nutmeg.','Top the mince, fork the surface, scatter cheese and bake 190°C for 30 minutes until golden. Rest 10 minutes.']},
      {name:'Budget',icon:'💰',time:65,costPP:28,nutrition:{kcal:520,protein_g:20,carbs_g:60,fat_g:20},
        feel:'Lentils stretch the mince and extra mash fills the dish — the same well-seasoned, savoury bake for less.',
        tip:'Replace a third of the mince with cooked brown lentils — with the Worcestershire and thyme in there, no one will notice.',
        didYouKnow:'Stirring cooked lentils into the mince stretches it a long way and adds fibre — a classic budget move that keeps the pie just as hearty, as long as you season it boldly.',
        ingredients:[{n:'beef mince',pp:80,u:'g'},{n:'brown lentils',pp:50,u:'g'},{n:'potatoes',pp:350,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:70,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'butter',pp:18,u:'g'},{n:'cheddar',pp:20,u:'g'}],
        method:['Brown the mince with onion, carrot and garlic; stir in the cooked lentils and tomato paste.','Add stock, peas, thyme and a splash of Worcestershire; simmer to a thick gravy and season well with salt and pepper.','Mash the potatoes with butter and a little cheese; season with salt, pepper and nutmeg.','Top, fork the surface and bake until golden.']},
      {name:'Quick',icon:'⚡',time:35,costPP:38,nutrition:{kcal:560,protein_g:26,carbs_g:52,fat_g:28},
        feel:'A fast, well-seasoned mince under quick mash, grilled golden — weeknight comfort that still tastes of something.',
        tip:'Even in a hurry, hit the mince with Worcestershire, thyme, salt and pepper — those four seconds are what stop it tasting flat.',
        didYouKnow:'Browning the mince hard and seasoning it boldly matters even more in a quick version — there is no long simmer to develop flavour, so it all comes from the sear and the seasoning.',
        ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:20,u:'g'}],
        method:['Boil diced potato until quick to mash.','Brown the mince and onion hard; add garlic, tomato paste, thyme, a splash of Worcestershire, stock and peas; simmer 10 minutes and season well with salt and pepper.','Mash the potato with butter; season with salt, pepper and nutmeg.','Top with mash and cheese and grill 5–8 minutes until golden.']}
    ]},
  {id:'sp-chicken-pie', cat:'ovenbakes', goesWith:['Mash','Frozen peas','Green salad'], diet:'meat', protein:'chicken', name:'Chicken & Mushroom Pie', emoji:'🥧', cuisine:'British', time:60, costPP:30,
    feel:'A creamy, herby chicken and vegetable filling under a crisp, golden puff-pastry crust — the ultimate comfort weekend pie.',
    ingredients:[{n:'chicken fillets',pp:140,u:'g'},{n:'puff pastry',pp:80,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'frozen peas',pp:40,u:'g'},{n:'milk',pp:80,u:'ml'},{n:'chicken stock',pp:80,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:15,u:'g'},{n:'eggs',pp:1,u:'each'}],
    method:['Melt the butter and soften the onion, garlic and carrot for 5 minutes, then add the sliced mushrooms and cook until golden.','Add the diced chicken and cook until it colours, then sprinkle over the flour and stir for 1 minute to cook off the raw taste.','Gradually pour in the stock and milk, whisking, and simmer to a thick, creamy sauce. Stir in the peas and thyme (or chopped parsley) and season generously with salt and plenty of black pepper. Cool slightly.','Spoon into a pie dish, lay over the rolled-out puff pastry and seal the edges. Cut a small slit in the top.','Brush with beaten egg and bake at 200°C for 25–30 minutes until puffed, deep golden and crisp.'],
    tip:'Season the creamy filling boldly before it goes in — a bland white sauce is the usual culprit behind a disappointing pie. Cut a slit so steam escapes and the pastry stays crisp.',
    didYouKnow:'That slit (or a ceramic "pie funnel") in the lid is not just decorative — it lets steam escape so the pastry crisps instead of going soggy from below.',
    freezes:true, fridgeDays:2,
    nutrition:{kcal:520,protein_g:30,carbs_g:34,fat_g:28}, storage:'Keeps 2 days; best reheated in the oven to re-crisp the pastry.',
    versions:[
      {name:'Puff-Topped',icon:'🏆',default:true,time:70,costPP:34,nutrition:{kcal:560,protein_g:32,carbs_g:36,fat_g:30},
        feel:'Tender chicken, mushrooms, carrot and peas in a creamy, thyme-scented sauce under a high, glossy, shatteringly crisp puff lid — the proper weekend pie.',
        tip:'Build the sauce properly — soften the veg, make a roux, then add liquid gradually and whisk — and season it until it actually tastes good before the lid goes on. Glaze with egg for a deep golden shine.',
        didYouKnow:'A splash of cream or a spoon of mustard stirred into the filling lifts it from plain to special, and tasting-and-seasoning the sauce before it is covered is the single biggest thing that separates a great pie from a bland one.',
        ingredients:[{n:'chicken fillets',pp:150,u:'g'},{n:'puff pastry',pp:90,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'cream',pp:30,u:'ml'},{n:'chicken stock',pp:90,u:'ml'},{n:'fresh thyme',pp:3,u:'g'},{n:'cake flour',pp:14,u:'g'},{n:'butter',pp:16,u:'g'},{n:'eggs',pp:1,u:'each'}],
        method:['Soften onion, garlic and carrot in butter; add mushrooms and brown.','Add the diced chicken and colour, then stir in the flour for 1 minute.','Gradually add stock, milk and cream, whisking to a thick creamy sauce; stir in peas and thyme and season well with salt and pepper. Cool slightly.','Spoon into a dish, top with puff pastry, seal and cut a slit.','Glaze with beaten egg and bake 200°C for 28 minutes until high and golden.']},
      {name:'Budget',icon:'💰',time:60,costPP:24,nutrition:{kcal:500,protein_g:24,carbs_g:40,fat_g:26},
        feel:'More mushrooms, carrot and onion, a little less chicken — the creamy, well-seasoned pie made to stretch.',
        tip:'Mushrooms are cheaper than chicken and add savoury, meaty depth — load them up, and season the sauce well to make up for less meat.',
        didYouKnow:'Mushrooms bring a savoury, almost meaty depth (they are naturally high in the same umami compounds as meat), so loading up on them lets you use less chicken without the pie tasting any less rich.',
        ingredients:[{n:'chicken fillets',pp:90,u:'g'},{n:'puff pastry',pp:80,u:'g'},{n:'mushrooms',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'milk',pp:90,u:'ml'},{n:'chicken stock',pp:80,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:12,u:'g'}],
        method:['Soften onion, garlic and carrot; add plenty of mushrooms and brown.','Add the chicken, then the flour for 1 minute.','Add stock and milk; simmer to a creamy sauce, stir in thyme and season well with salt and pepper.','Top with pastry, slit and bake until golden.']},
      {name:'Family Double-Crust',icon:'👨‍👩‍👧',time:80,costPP:38,nutrition:{kcal:600,protein_g:30,carbs_g:46,fat_g:34},
        feel:'Pastry top AND bottom for a proper hand-held family pie — crisp all the way round, with the same creamy, herby filling.',
        tip:'Blind-bake the base for 10 minutes first so the bottom crust cooks through and never goes soggy.',
        didYouKnow:'A double-crust pie needs its base "blind-baked" first — partly cooked empty — so the bottom pastry sets crisp before the wet filling goes in.',
        ingredients:[{n:'chicken fillets',pp:140,u:'g'},{n:'puff pastry',pp:140,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'frozen peas',pp:40,u:'g'},{n:'milk',pp:90,u:'ml'},{n:'chicken stock',pp:80,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'cake flour',pp:14,u:'g'},{n:'butter',pp:14,u:'g'},{n:'eggs',pp:1,u:'each'}],
        method:['Line a dish with pastry and blind-bake 10 minutes at 200°C.','Make the creamy chicken-mushroom-veg filling, season well with salt and pepper with salt, pepper and thyme; cool slightly.','Fill the base, lay over a pastry lid and seal; cut a slit and glaze with egg.','Bake 200°C for 30 minutes until golden top and bottom.']}
    ]},

  // ── 🍗 ROASTS ──
  {id:'sp-roast-chicken', cat:'ovenbakes', goesWith:['Roast potatoes','Steamed green veg','Gravy','Stuffing'], diet:'meat', protein:'chicken', name:'Lemon & Herb Roast Chicken & Veg', emoji:'🍗', cuisine:'Global', time:95, costPP:37,
  feel:'Butter and garlic pushed under the skin, lemon and herbs in the cavity, the veg caramelising in the chicken\'s own golden fat — the Sunday smell that gets everyone to the table on time.',
  ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],
  method:['Pat the chicken bone-dry inside and out — dry skin is the whole secret to crackle. Loosen the skin over the breast and push a paste of softened butter, crushed garlic and chopped herbs underneath, right onto the meat.','Halve the lemon and tuck it into the cavity with the onion and a sprig of herbs — it steams the bird from inside and keeps the breast juicy.','Rub the skin with oil and season well with salt and pepper. Toss the potatoes and carrots in the tin with oil and a drizzle of honey.','Roast at 200C for the first 20 minutes for colour, then drop to 180C and cook about 45 min per kg plus 20, basting the veg in the chicken fat once or twice — that fat is what caramelises them.','Rest the bird 10–15 minutes before carving so the juices settle back in. Tip the resting juices into the pan, simmer with the sticky bits, and you have an instant gravy.'],
  tip:'Dry the skin properly and start it hot — that is the whole difference between pale and golden, crackling skin. And always rest before carving.',
  didYouKnow:'That sprig of thyme or rosemary? Both are hardy perennials that thrive in a pot on a sunny sill or step — snip what you need and they keep giving for years, so you never buy a packet again.',
  nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32}, storage:'Keeps 3 days; leftovers are gold for sandwiches and soup.',
  versions:[
    {name:'Lemon & Herb',icon:'🍗',default:true,time:95,costPP:37,nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32},feel:'The full Sunday bird — butter and garlic under the skin, lemon and herbs in the cavity, veg golden in the chicken fat.',ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],method:['Pat the chicken bone-dry; push a butter-garlic-herb paste under the breast skin.','Lemon, onion and herbs in the cavity.','Oil and season the skin; toss the veg in oil and a little honey.','Roast hot at 200C for 20 min, then 180C ~45 min/kg + 20, basting the veg in the fat.','Rest 10–15 min; make a quick pan gravy from the juices.','Taste and season well with salt and pepper.']},
    {name:'Budget',icon:'💰',time:65,costPP:36,nutrition:{kcal:540,protein_g:36,carbs_g:42,fat_g:24},feel:'Cheapest cuts, fullest tray — bone-in pieces and a big bed of potato roasted in herbs. Feeds the table for less.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'mixed herbs'},{n:'salt & pepper'}],method:['Use the cheapest bone-in pieces (thighs and drumsticks have the most flavour for the money).','Toss everything in a roasting tin with oil, crushed garlic, herbs and seasoning.','Roast at 200C for 45–50 minutes, turning once, until the chicken is golden and the potatoes crisp.','Skin-on bone-in pieces baste the veg as they roast — no extra fat needed.','Taste and season well with salt and pepper.']},
    {name:'Quick',icon:'⚡',time:45,costPP:35,nutrition:{kcal:560,protein_g:40,carbs_g:34,fat_g:26},feel:'Same lemon-herb flavour, half the time — pieces not a whole bird, roasted hot and fast.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'thyme'},{n:'salt & pepper'}],method:['Toss the chicken pieces with oil, crushed garlic, lemon juice, thyme and seasoning.','Spread on a tray with the potatoes and carrots, cut small so they roast fast.','Roast hot at 220C for 35–40 minutes until golden and cooked through.','Pieces roast in a fraction of the time of a whole bird — no carving, no resting wait.','Taste and season well with salt and pepper.']},
    {name:'Healthy',icon:'❤️',time:50,costPP:36,nutrition:{kcal:430,protein_g:46,carbs_g:30,fat_g:12},feel:'Skinless and lean, barely any oil, and double the veg — all the lemon-herb flavour, far lighter. (See the Health Hub for more like this.)',ingredients:[{n:'chicken breasts',pp:200,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'sweet potatoes',pp:150,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'green beans',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'thyme'},{n:'rosemary'},{n:'salt & pepper'}],method:['Use skinless chicken portions and just a spray or 5ml of oil — the lemon, garlic and herbs do the flavour work, not fat.','Roast a big bed of sweet potato, carrot, onion and green beans tossed in the little oil with herbs.','Lay the chicken on top so it stays moist over the veg; squeeze over the lemon.','Roast at 190C for 35–40 minutes until the chicken is just cooked and the veg tender.','Taste and season well with salt and pepper.']}
  ]},
  {id:'sp-roast-beef', cat:'ovenbakes', goesWith:['Gravy','Roast potatoes','Green salad'], diet:'meat', protein:'beef', name:'Roast Beef', emoji:'🥩', cuisine:'British', time:110, costPP:38,
    feel:'A proper centrepiece — pink in the middle, everyone crowding the carving board.',
    ingredients:[{n:'beef roasting joint',pp:180,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'beef stock',pp:100,u:'ml'}],
    method:['Take the beef out of the fridge an hour before cooking so it roasts evenly. Pat it dry, rub with oil and season generously with salt and pepper.','Sear it all over in a screaming-hot pan to build a brown crust, then lift into a roasting tin with the veg around it.','Roast at 200°C, about 15 minutes per 500g for medium — use a thermometer if you have one.','Rest the beef loosely under foil for 15 minutes (this is not optional) while you make gravy from the pan juices and stock.','Carve thinly across the grain and serve with the roast veg and gravy.'],
    tip:'A meat thermometer removes all the guesswork — about 55°C for medium-rare, 60°C for medium.',
    didYouKnow:'Resting the meat after roasting lets the juices, driven to the centre by the heat, redistribute back through the meat — carve too soon and they run out onto the board instead of staying in each slice.',
    freezes:false, fridgeDays:3,
    nutrition:{kcal:560,protein_g:40,carbs_g:32,fat_g:28}, storage:'Keeps 3 days; slice cold for the best roast-beef sandwiches.',
    versions:[
      {name:'Sunday Roast',icon:'🏆',default:true,time:120,costPP:42,nutrition:{kcal:600,protein_g:42,carbs_g:34,fat_g:30},
        feel:'A seared, rested joint carved pink, with crispy roast potatoes, carrots and a proper pan gravy — the full Sunday spread.',
        tip:'Roast the potatoes in the beef fat for the crispest result, and make the gravy in the roasting tin to catch every browned bit.',
        didYouKnow:'Searing the beef before roasting triggers the Maillard reaction — the browning that creates hundreds of new savoury flavour compounds on the crust, the best-tasting part of the joint.',
        ingredients:[{n:'beef roasting joint',pp:190,u:'g'},{n:'potatoes',pp:220,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:60,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'beef stock',pp:120,u:'ml'},{n:'flour',pp:8,u:'g'}],
        method:['Bring the beef to room temperature; pat dry, oil and season hard.','Sear all over, then roast at 200°C, 15 min per 500g for medium.','Roast the potatoes in beef fat alongside until crisp.','Rest the beef 15–20 minutes; make gravy with flour, pan juices and stock.','Taste and season well with salt and pepper.','Carve thin across the grain and serve.']},
      {name:'Budget Pot-Roast',icon:'💰',time:180,costPP:30,nutrition:{kcal:520,protein_g:38,carbs_g:34,fat_g:24},
        feel:'A cheaper cut like brisket or chuck, braised low in stock until fork-tender — different technique, deep reward.',
        tip:'Cheaper cuts are tough roasted but turn meltingly tender pot-roasted low and slow in liquid — never try to roast them pink.',
        didYouKnow:'Tough, cheap cuts like brisket and chuck are full of collagen that only melts into tenderness with long, moist cooking — which is why they are pot-roasted, not roasted rare.',
        ingredients:[{n:'beef',pp:160,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:70,u:'g'},{n:'beef stock',pp:250,u:'ml'},{n:'flour',pp:10,u:'g'},{n:'olive oil',pp:12,u:'ml'}],
        method:['Brown the cheaper joint all over in a heavy pot.','Add the onion, stock and veg to come halfway up the meat.','Cover and braise at 150°C for 3 hours, turning once, until fork-tender.','Rest, then slice or pull; thicken the cooking liquid into gravy.','Taste and season well with salt and pepper.']},
      {name:'Herb-Crusted',icon:'🌟',time:120,costPP:55,nutrition:{kcal:620,protein_g:44,carbs_g:30,fat_g:34},
        feel:'A prime sirloin or rib joint under a mustard-and-herb crust, roasted pink — the special-occasion centrepiece.',
        tip:'Smear the seared joint with mustard then press on chopped herbs and breadcrumbs — the mustard glues the crust on as it roasts.',
        didYouKnow:'A mustard-and-herb crust does double duty: the mustard helps the herbs and crumbs adhere, and both form a savoury crust that seals in juices as the prime cut roasts.',
        ingredients:[{n:'beef roasting joint',pp:210,u:'g'},{n:'mustard',pp:8,u:'g'},{n:'breadcrumbs',pp:15,u:'g'},{n:'fresh parsley',pp:5,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'beef stock',pp:120,u:'ml'}],
        method:['Bring the joint to room temperature; season and sear all over.','Brush with mustard, then press on a mix of breadcrumbs and chopped herbs.','Roast at 200°C, 15 min per 500g, with potatoes alongside.','Rest 15–20 minutes; make gravy and carve thin.','Taste and season well with salt and pepper.']}
    ]},

  // ── 🍳 HOMESTYLE PLATES — added 22 Jun (Supper build, Batch 1) ──
  {
      "id": "sp-tuscan-chicken",
      "cat": "plates",
      "goesWith": [
          "Tagliatelle",
          "Crusty Bread",
          "Steamed Rice",
          "Green Salad",
          "Garlic Butter"
      ],
      "diet": "meat",
      "protein": "chicken",
      "name": "Creamy Tuscan Chicken",
      "emoji": "🍗",
      "cuisine": "Italian-inspired",
      "time": 30,
      "costPP": 42,
      "feel": "Golden chicken in a glossy sun-dried-tomato cream with wilted spinach and parmesan — one pan, restaurant-rich.",
      "didYouKnow": "'Tuscan' here is more marketing than tradition — real Tuscan cooking is rustic beans, bread and olive oil, not cream sauces. But this sun-dried-tomato, spinach and parmesan number became a runaway online hit, and it earns its place: quick, rich, and all in one pan.",
      "freezes": false,
      "fridgeDays": 3,
      "ingredients": [
          {
              "n": "chicken breast",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "cream",
              "pp": 60,
              "u": "ml"
          },
          {
              "n": "sun-dried tomatoes",
              "pp": 25,
              "u": "g"
          },
          {
              "n": "baby spinach",
              "pp": 40,
              "u": "g"
          },
          {
              "n": "garlic",
              "pp": 6,
              "u": "g"
          },
          {
              "n": "parmesan",
              "pp": 15,
              "u": "g"
          },
          {
              "n": "chicken stock",
              "pp": 60,
              "u": "ml"
          },
          {
              "n": "oil",
              "pp": 10,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Pat the chicken dry, season both sides with salt and pepper. Heat the oil in a pan over medium-high and sear the chicken 4–5 minutes a side until golden and just cooked; lift out.",
          "Turn the heat down, add the grated garlic and chopped sun-dried tomatoes and stir 1 minute until fragrant.",
          "Pour in the stock and let it bubble for a minute, scraping up the tasty bits, then stir in the cream and grated parmesan into a glossy sauce.",
          "Add the spinach and stir until just wilted, then slide the chicken back in to warm through and coat.",
          "Serve over pasta, rice or with crusty bread to mop the sauce."
      ],
      "tip": "Take the chicken off the heat the moment it's cooked — it carries on cooking in the warm sauce and stays juicy.",
      "nutrition": {
          "kcal": 520,
          "protein_g": 40,
          "carbs_g": 10,
          "fat_g": 34
      },
      "storage": "The chicken and sauce keep 3 days; reheat gently with a splash of milk or stock as the cream thickens. Cream sauces can split when frozen, so this one's best fresh.",
      "versions": [
          {
              "name": "Creamy Tuscan",
              "icon": "🏆",
              "default": true,
              "time": 30,
              "costPP": 42,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 40,
                  "carbs_g": 10,
                  "fat_g": 34
              },
              "feel": "The full version — seared chicken breast, sun-dried tomato, spinach and a real parmesan cream.",
              "ingredients": [
                  {
                      "n": "chicken breast",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "sun-dried tomatoes",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "baby spinach",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "parmesan",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Season and sear the chicken in oil until golden and just cooked; lift out.",
                  "Fry the garlic and chopped sun-dried tomatoes 1 minute.",
                  "Add the stock, then the cream and parmesan, into a glossy sauce.",
                  "Wilt in the spinach, return the chicken to coat.",
                  "Serve over pasta, rice or with crusty bread."
              ]
          },
          {
              "name": "Tuscan Salmon",
              "icon": "🐟",
              "time": 25,
              "costPP": 62,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 34,
                  "carbs_g": 9,
                  "fat_g": 40
              },
              "feel": "Swap the chicken for crisp-skinned salmon — the same creamy sauce, a touch more luxurious.",
              "ingredients": [
                  {
                      "n": "salmon fillet",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "sun-dried tomatoes",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "baby spinach",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "parmesan",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 50,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Pat the salmon dry and fry skin-side down in the oil until crisp, then flip briefly to cook through; lift out.",
                  "Fry the garlic and sun-dried tomatoes 1 minute.",
                  "Add stock, cream and parmesan into a sauce; wilt in the spinach.",
                  "Spoon the sauce over the salmon to serve."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 30,
              "costPP": 28,
              "nutrition": {
                  "kcal": 480,
                  "protein_g": 34,
                  "carbs_g": 12,
                  "fat_g": 30
              },
              "feel": "Cheaper thighs and a spoon of tomato paste stand in for the pricey sun-dried tomatoes — same comforting plate.",
              "ingredients": [
                  {
                      "n": "chicken thighs",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 50,
                      "u": "ml"
                  },
                  {
                      "n": "tomato paste",
                      "pp": 12,
                      "u": "g"
                  },
                  {
                      "n": "baby spinach",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 70,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Season and brown the thighs in oil; lift out.",
                  "Fry the garlic and tomato paste 1 minute to deepen it.",
                  "Add the stock and cream into a sauce.",
                  "Wilt in the spinach, return the chicken to coat, and serve over rice or pasta."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 22,
              "costPP": 40,
              "nutrition": {
                  "kcal": 510,
                  "protein_g": 38,
                  "carbs_g": 10,
                  "fat_g": 33
              },
              "feel": "On the table in twenty — pre-sliced chicken strips for a fast weeknight one-pan.",
              "ingredients": [
                  {
                      "n": "chicken breast",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "sun-dried tomatoes",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "baby spinach",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Slice the chicken into strips, season, and stir-fry in the oil until golden.",
                  "Add the garlic and sun-dried tomatoes for a minute.",
                  "Pour in the cream, wilt the spinach, and simmer 2 minutes into a sauce.",
                  "Serve straight away over rice or pasta."
              ]
          }
      ]
  },
  {
      "id": "sp-honey-garlic-chicken",
      "cat": "plates",
      "goesWith": [
          "Steamed Rice",
          "Stir-fried Greens",
          "Sesame Seeds",
          "Spring Onion",
          "Egg Fried Rice"
      ],
      "diet": "meat",
      "protein": "chicken",
      "name": "Sticky Honey-Garlic Chicken & Rice",
      "emoji": "🍯",
      "cuisine": "Asian-inspired",
      "time": 30,
      "costPP": 34,
      "feel": "Bite-sized chicken in a glossy honey-soy-garlic glaze over fluffy rice — sweet, sticky and gone in minutes.",
      "didYouKnow": "Honey and soy is the simplest 'sticky' glaze there is: the honey's sugars caramelise while the soy's salt and umami balance the sweetness, so it tastes far richer than two ingredients should. Thighs beat breasts here — the extra fat keeps them juicy as the glaze reduces.",
      "freezes": true,
      "fridgeDays": 3,
      "ingredients": [
          {
              "n": "chicken thighs",
              "pp": 170,
              "u": "g"
          },
          {
              "n": "honey",
              "pp": 20,
              "u": "g"
          },
          {
              "n": "soy sauce",
              "pp": 20,
              "u": "ml"
          },
          {
              "n": "garlic",
              "pp": 8,
              "u": "g"
          },
          {
              "n": "ginger",
              "pp": 5,
              "u": "g"
          },
          {
              "n": "rice",
              "pp": 75,
              "u": "g"
          },
          {
              "n": "spring onion",
              "pp": 10,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 10,
              "u": "ml"
          }
      ],
      "method": [
          "Rinse the rice until the water runs clear, then cook it (1 cup rice to 1.5 cups water, lid on, low heat, 12 minutes, then rest 5 minutes off the heat).",
          "Cut the chicken into bite-sized pieces. Heat the oil in a wide pan over medium-high and brown the chicken well on all sides, 6–8 minutes.",
          "Push the chicken aside, add the grated garlic and ginger and fry 30 seconds until fragrant.",
          "Pour in the honey and soy and let it bubble and reduce 2–3 minutes until it thickens into a sticky glaze that coats every piece.",
          "Serve over the rice, scattered with sliced spring onion."
      ],
      "tip": "Let the glaze bubble until it visibly thickens and coats the back of a spoon — that's when it turns properly sticky.",
      "nutrition": {
          "kcal": 560,
          "protein_g": 34,
          "carbs_g": 62,
          "fat_g": 18
      },
      "storage": "Keeps 3 days; the glaze reheats beautifully with a splash of water. Freezes up to 1 month — freeze the chicken and rice separately.",
      "versions": [
          {
              "name": "Sticky Honey-Garlic",
              "icon": "🏆",
              "default": true,
              "time": 30,
              "costPP": 34,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 34,
                  "carbs_g": 62,
                  "fat_g": 18
              },
              "feel": "Juicy thighs in a deep, glossy honey-soy-garlic glaze — the one worth licking off the spoon.",
              "ingredients": [
                  {
                      "n": "chicken thighs",
                      "pp": 170,
                      "u": "g"
                  },
                  {
                      "n": "honey",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 20,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "ginger",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "spring onion",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Cook the rinsed rice (1 : 1.5 with water, lid on, 12 min, rest 5).",
                  "Brown the bite-sized chicken in the oil, 6–8 minutes.",
                  "Fry the grated garlic and ginger 30 seconds.",
                  "Add honey and soy and bubble 2–3 minutes into a sticky glaze.",
                  "Serve over rice with spring onion."
              ]
          },
          {
              "name": "Spicy (Korean-style)",
              "icon": "🌶️",
              "time": 32,
              "costPP": 36,
              "nutrition": {
                  "kcal": 580,
                  "protein_g": 34,
                  "carbs_g": 64,
                  "fat_g": 19
              },
              "feel": "A spoon of gochujang turns the glaze fiery-sweet and lacquered — sticky Korean-style heat.",
              "ingredients": [
                  {
                      "n": "chicken thighs",
                      "pp": 170,
                      "u": "g"
                  },
                  {
                      "n": "honey",
                      "pp": 18,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 18,
                      "u": "ml"
                  },
                  {
                      "n": "gochujang",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "ginger",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "spring onion",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "sesame seeds",
                      "pp": 3,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Brown the bite-sized chicken in the oil.",
                  "Fry the garlic and ginger, then stir in the gochujang for 30 seconds.",
                  "Add honey and soy and bubble into a glossy, spicy glaze.",
                  "Serve over rice with spring onion and sesame seeds."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 30,
              "costPP": 24,
              "nutrition": {
                  "kcal": 540,
                  "protein_g": 30,
                  "carbs_g": 66,
                  "fat_g": 15
              },
              "feel": "Sugar and a little extra soy stretch the glaze; chicken pieces on the bone keep it cheap and tasty.",
              "ingredients": [
                  {
                      "n": "chicken pieces",
                      "pp": 180,
                      "u": "g"
                  },
                  {
                      "n": "sugar",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 22,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "spring onion",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Brown the chicken pieces well in the oil.",
                  "Add the garlic, then the sugar and soy with a splash of water; simmer until sticky and the chicken is cooked through.",
                  "Serve over rice with spring onion."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 20,
              "costPP": 33,
              "nutrition": {
                  "kcal": 550,
                  "protein_g": 34,
                  "carbs_g": 60,
                  "fat_g": 18
              },
              "feel": "Microwave rice and chicken strips — sticky supper in twenty.",
              "ingredients": [
                  {
                      "n": "chicken breast",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "honey",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 20,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "spring onion",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Use quick-cook or microwave rice.",
                  "Stir-fry chicken strips in the oil until golden.",
                  "Add garlic, then honey and soy; bubble 2 minutes into a glaze.",
                  "Serve over rice with spring onion."
              ]
          }
      ]
  },
  {
      "id": "sp-bunny-chow",
      "cat": "plates",
      "goesWith": [
          "Carrot Sambal",
          "Sliced Onion",
          "Fresh Chilli",
          "Amasi",
          "Atchar"
      ],
      "diet": "meat",
      "protein": "lamb",
      "name": "Durban Bunny Chow",
      "emoji": "🍛",
      "cuisine": "South African",
      "time": 70,
      "costPP": 40,
      "feel": "A hollowed half-loaf flooded with rich, slow-cooked Durban curry — eaten with your hands, no spoon in sight.",
      "didYouKnow": "Bunny chow has nothing to do with rabbits — it comes from Durban's Indian community, who hollowed out a loaf to make a portable 'bowl' of curry to carry to work. One telling credits the 'bania' merchants; either way, curry-in-bread became the city's signature street food.",
      "freezes": true,
      "fridgeDays": 3,
      "ingredients": [
          {
              "n": "lamb",
              "pp": 170,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 80,
              "u": "g"
          },
          {
              "n": "tomatoes",
              "pp": 100,
              "u": "g"
          },
          {
              "n": "Durban masala",
              "pp": 10,
              "u": "g"
          },
          {
              "n": "potatoes",
              "pp": 100,
              "u": "g"
          },
          {
              "n": "white loaf",
              "pp": 0.5,
              "u": ""
          },
          {
              "n": "garlic-ginger paste",
              "pp": 10,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 12,
              "u": "ml"
          },
          {
              "n": "salt"
          }
      ],
      "method": [
          "Heat the oil in a heavy pot and brown the lamb pieces all over; this colour is flavour.",
          "Add the chopped onion and the garlic-ginger paste and cook until soft and golden, about 8 minutes.",
          "Stir in the Durban masala and cook a minute until fragrant, then add the chopped tomatoes and a cup of water and simmer into a thick masala.",
          "Add the cubed potato, cover and simmer gently 45 minutes until the lamb is fall-apart tender and the gravy is rich; loosen with water if needed and season.",
          "Cut a loaf in half and hollow out each half to make a bread bowl. Spoon the curry in and top with the soft bread you pulled out (the 'virgin')."
      ],
      "tip": "Cook it low and slow — Durban curry is about patience; rushing it leaves the lamb tough and the gravy thin.",
      "nutrition": {
          "kcal": 620,
          "protein_g": 30,
          "carbs_g": 60,
          "fat_g": 28
      },
      "storage": "The curry keeps 3 days in the fridge and freezes up to 2 months — fill fresh bread each time, as the loaf goes soggy if stored full.",
      "versions": [
          {
              "name": "Lamb (the original)",
              "icon": "🏆",
              "didYouKnow": "The name has nothing to do with rabbits: in 1940s Durban, Indian workers hollowed a loaf into a portable “bowl” of curry to carry to work. One telling traces “bunny” to the “bania” merchant traders who first sold it.",
              "default": true,
              "time": 70,
              "costPP": 40,
              "nutrition": {
                  "kcal": 620,
                  "protein_g": 30,
                  "carbs_g": 60,
                  "fat_g": 28
              },
              "feel": "The Durban original — slow-cooked lamb on the bone, deep and rich, in a hollowed loaf.",
              "ingredients": [
                  {
                      "n": "lamb",
                      "pp": 170,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "Durban masala",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "white loaf",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic-ginger paste",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Brown the lamb in the oil in a heavy pot.",
                  "Soften the onion with the garlic-ginger paste, 8 minutes.",
                  "Add the masala, then tomatoes and a cup of water; simmer to a thick masala.",
                  "Add potato, cover and simmer 45 minutes until the lamb is tender.",
                  "Hollow out half-loaves and fill with the curry; top with the bread."
              ]
          },
          {
              "name": "Chicken",
              "icon": "🍗",
              "didYouKnow": "Bunny chow is ordered by size — a “quarter”, “half” or “full” loaf. The soft bread scooped from the middle is called the “virgin”, and it is served on top for dipping into the curry.",
              "time": 45,
              "costPP": 30,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 32,
                  "carbs_g": 58,
                  "fat_g": 20
              },
              "feel": "Quicker and cheaper with chicken on the bone — still a proper, fragrant Durban curry.",
              "ingredients": [
                  {
                      "n": "chicken pieces",
                      "pp": 180,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "Durban masala",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "white loaf",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic-ginger paste",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Brown the chicken pieces in the oil.",
                  "Soften the onion with the garlic-ginger paste.",
                  "Add masala, tomatoes and water; simmer to a masala.",
                  "Add potato and simmer 25–30 minutes until the chicken is cooked and tender.",
                  "Fill the hollowed loaves and top with the bread."
              ]
          },
          {
              "name": "Bean (vegetarian)",
              "icon": "🌱",
              "didYouKnow": "Many of the earliest bunny chows were meat-free. Sugar beans, despite the name, are not sweet — they simply break down as they cook and thicken the curry into the rich gravy that soaks the bread.",
              "time": 40,
              "costPP": 18,
              "nutrition": {
                  "kcal": 540,
                  "protein_g": 18,
                  "carbs_g": 78,
                  "fat_g": 14
              },
              "feel": "The classic meat-free 'beans bunny' — sugar beans in a rich curry gravy, the cheapest, most beloved version of all.",
              "ingredients": [
                  {
                      "n": "sugar beans",
                      "pp": 90,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "Durban masala",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "white loaf",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic-ginger paste",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Use tinned sugar beans, or soak and boil dried beans until soft first.",
                  "Soften the onion with the garlic-ginger paste in the oil.",
                  "Add the masala, then tomatoes and water; simmer to a thick gravy.",
                  "Add the potato and beans and simmer 20–25 minutes until thick and rich.",
                  "Fill the hollowed loaves and top with the bread."
              ]
          },
          {
              "name": "Quick (mince)",
              "icon": "⚡",
              "didYouKnow": "Made with mince, the filling is called “keema” (from the Hindi and Urdu word for minced meat) and cooks in a fraction of the time — the weeknight bunny chow.",
              "time": 30,
              "costPP": 26,
              "nutrition": {
                  "kcal": 580,
                  "protein_g": 26,
                  "carbs_g": 60,
                  "fat_g": 26
              },
              "feel": "A keema-style mince curry that's ready in half an hour — the weeknight bunny.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 100,
                      "u": "g"
                  },
                  {
                      "n": "Durban masala",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 90,
                      "u": "g"
                  },
                  {
                      "n": "white loaf",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic-ginger paste",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Brown the mince in the oil, breaking it up.",
                  "Add the onion and garlic-ginger paste; cook soft.",
                  "Stir in the masala, then tomatoes and a little water.",
                  "Add the diced potato and simmer 18–20 minutes until soft and thick.",
                  "Fill the hollowed loaves and top with the bread."
              ]
          }
      ]
  },
  {
      "id": "sp-steak-bites-mash",
      "cat": "plates",
      "goesWith": [
          "Creamy Mash",
          "Garlic Butter",
          "Sautéed Mushrooms",
          "Green Beans",
          "Peppercorn Sauce"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Garlic Butter Steak Bites & Mash",
      "emoji": "🥩",
      "cuisine": "Steakhouse",
      "time": 30,
      "costPP": 50,
      "feel": "Seared cubes of steak tumbled in garlic butter, spooned over silky mash — steakhouse comfort in twenty minutes.",
      "didYouKnow": "Searing meat in a smoking-hot pan triggers the Maillard reaction — the same browning that flavours toast and roast coffee — building hundreds of new savoury compounds on the crust. For bite-sized pieces the rule is: dry the meat, don't crowd the pan, and don't stir too soon, or they steam grey instead of searing brown.",
      "freezes": false,
      "fridgeDays": 1,
      "ingredients": [
          {
              "n": "rump steak",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "potatoes",
              "pp": 250,
              "u": "g"
          },
          {
              "n": "butter",
              "pp": 35,
              "u": "g"
          },
          {
              "n": "garlic",
              "pp": 6,
              "u": "g"
          },
          {
              "n": "fresh parsley",
              "pp": 3,
              "u": "g"
          },
          {
              "n": "full cream milk",
              "pp": 40,
              "u": "ml"
          },
          {
              "n": "oil",
              "pp": 8,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Boil the peeled, chopped potatoes in salted water until tender, 15–18 minutes; drain, steam-dry, then mash with butter and warm milk and season.",
          "Cut the steak into 2 cm cubes and pat them really dry with paper towel — dry meat sears instead of steaming. Season with salt and pepper.",
          "Get a pan smoking hot with the oil. Add the steak in a single layer, leaving space, and don't touch it for 1–2 minutes so a brown crust forms; then toss and sear another minute. Work in two batches if your pan is small.",
          "Turn off the heat, add the butter and grated garlic, and toss 30 seconds in the residual heat until fragrant (not burnt). Stir in the chopped parsley.",
          "Spoon the steak and all its garlic butter over the mash."
      ],
      "tip": "Dry the cubes well and sear in batches — a crowded pan drops the heat and the steak stews grey instead of browning.",
      "nutrition": {
          "kcal": 560,
          "protein_g": 34,
          "carbs_g": 34,
          "fat_g": 32
      },
      "storage": "Best fresh while the steak is pink and juicy; reheating cooks it further. The mash keeps 2 days in the fridge.",
      "versions": [
          {
              "name": "Garlic Butter",
              "icon": "🧄",
              "default": true,
              "time": 30,
              "costPP": 50,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 34,
                  "carbs_g": 34,
                  "fat_g": 32
              },
              "feel": "The one everyone orders — seared rump tossed in garlicky, parsley-flecked butter over silky mash.",
              "ingredients": [{"n":"rump steak","pp":150,"u":"g"},{"n":"potatoes","pp":250,"u":"g"},{"n":"butter","pp":40,"u":"g"},{"n":"fresh cream","pp":30,"u":"ml"},{"n":"white cheddar","pp":30,"u":"g"},{"n":"garlic","pp":8,"u":"g"},{"n":"Dijon mustard","pp":6,"u":"g"},{"n":"smoked paprika","pp":2,"u":"g"},{"n":"lemon","pp":8,"u":"g"},{"n":"fresh parsley","pp":3,"u":"g"},{"n":"chilli flakes","pp":1,"u":"g"},{"n":"oil","pp":8,"u":"ml"},{"n":"salt & pepper"}],
              "method": ["Make the mash first: boil the cubed potatoes in well-salted water 15-18 minutes until a knife slides through, then drain and steam-dry a minute. Mash with the butter, warm cream and grated white cheddar until silky, season well with salt and pepper, and keep warm. (For the full showpiece, fold in a whole head of roasted garlic - see the Roasted Garlic & Cheddar mash in Sides & Basics.)","Cut the steak into 2 cm cubes, pat them really dry with paper towel - a dry surface is the whole secret to a brown crust - and season generously with salt and pepper.","Heat the oil in a heavy pan until almost smoking. Sear the steak in a single layer, undisturbed, 1-2 minutes until a deep crust forms, then toss and sear 1 minute more for medium-rare; work in batches so it sears rather than steams. Lift out to rest.","Lower the heat and stir the soft butter together with the Dijon, smoked paprika, grated garlic, lemon juice, parsley and a pinch of chilli flakes - this is the 'cowboy butter'. Add it to the pan and let it melt and foam.","Return the steak and its juices and toss 1 minute until glossy and coated. Spoon over the cheddar mash and pour the pan butter over the top."]
          },
          {
              "name": "Peppercorn Sauce",
              "icon": "✨",
              "time": 35,
              "costPP": 56,
              "nutrition": {
                  "kcal": 620,
                  "protein_g": 34,
                  "carbs_g": 36,
                  "fat_g": 38
              },
              "feel": "The full bistro plate — a creamy, peppery pan sauce built in the same pan the steak seared in.",
              "ingredients": [
                  {
                      "n": "rump steak",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 50,
                      "u": "ml"
                  },
                  {
                      "n": "beef stock",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "black peppercorns",
                      "pp": 2,
                      "u": "g"
                  },
                  {
                      "n": "brandy",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "full cream milk",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Make the mash and keep warm.",
                  "Sear the dried, seasoned steak cubes hard in hot oil; lift out and rest.",
                  "Crush the peppercorns into the pan, add the brandy off the heat (it may flame), then the stock and cream; simmer 3–4 minutes into a glossy sauce.",
                  "Return the steak briefly to coat, then spoon everything over the mash."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 30,
              "costPP": 34,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 30,
                  "carbs_g": 34,
                  "fat_g": 28
              },
              "feel": "A cheaper cut, sliced thin across the grain and seared fast — tender and tasty for less.",
              "ingredients": [
                  {
                      "n": "tenderised steak",
                      "pp": 140,
                      "u": "g"
                  },
                  {
                      "n": "potatoes",
                      "pp": 250,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "garlic",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "fresh parsley",
                      "pp": 2,
                      "u": "g"
                  },
                  {
                      "n": "milk",
                      "pp": 35,
                      "u": "ml"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Boil and mash the potatoes with butter and milk.",
                  "Slice the cheaper steak thinly across the grain (this tenderises it), pat dry and season.",
                  "Sear hard and fast in a very hot pan, 1–2 minutes, so it stays tender.",
                  "Toss off the heat with butter, garlic and parsley; spoon over the mash."
              ]
          }
      ]
  },
  {
      "id": "sp-sloppy-joes",
      "cat": "plates",
      "goesWith": [
          "Slap Chips",
          "Coleslaw",
          "Pickles",
          "Cheese Slice",
          "Corn on the Cob"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Sloppy Joes",
      "emoji": "🍔",
      "cuisine": "American",
      "time": 25,
      "costPP": 30,
      "feel": "Sweet-and-tangy saucy mince piled into a soft toasted bun — gloriously messy, eat over a plate.",
      "didYouKnow": "The Sloppy Joe is said to have been invented by a cook named Joe in 1930s Iowa, who loosened a 'loose-meat' sandwich with tomato sauce. It became an American canteen and family staple precisely because it stretches a little mince to feed a crowd cheaply.",
      "freezes": true,
      "fridgeDays": 3,
      "ingredients": [
          {
              "n": "beef mince",
              "pp": 130,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "green pepper",
              "pp": 40,
              "u": "g"
          },
          {
              "n": "tomato sauce",
              "pp": 40,
              "u": "g"
          },
          {
              "n": "Worcestershire sauce",
              "pp": 5,
              "u": "ml"
          },
          {
              "n": "brown sugar",
              "pp": 5,
              "u": "g"
          },
          {
              "n": "burger buns",
              "pp": 1,
              "u": ""
          },
          {
              "n": "oil",
              "pp": 8,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Heat the oil in a pan and cook the chopped onion and green pepper until soft, about 5 minutes.",
          "Add the mince and brown it well, breaking up every lump with your spoon.",
          "Stir in the tomato sauce, Worcestershire and brown sugar with a splash of water and simmer 8–10 minutes until thick, glossy and saucy; season.",
          "Toast the buns cut-side down in a dry pan until golden.",
          "Pile the saucy mince into the buns and eat with plenty of napkins."
      ],
      "tip": "Let it simmer until it's thick and glossy, not watery — a runny filling soaks the bun and falls apart.",
      "nutrition": {
          "kcal": 480,
          "protein_g": 24,
          "carbs_g": 42,
          "fat_g": 24
      },
      "storage": "The mince keeps 3 days and freezes up to 2 months; toast fresh buns to serve.",
      "versions": [
          {
              "name": "Classic",
              "icon": "🏆",
              "default": true,
              "time": 25,
              "costPP": 30,
              "nutrition": {
                  "kcal": 480,
                  "protein_g": 24,
                  "carbs_g": 42,
                  "fat_g": 24
              },
              "feel": "Sweet, tangy, glossy mince in a toasted bun — the all-American original.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 130,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "green pepper",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "tomato sauce",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "Worcestershire sauce",
                      "pp": 5,
                      "u": "ml"
                  },
                  {
                      "n": "brown sugar",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "burger buns",
                      "pp": 1,
                      "u": ""
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Soften the chopped onion and green pepper in the oil.",
                  "Brown the mince well, breaking up the lumps.",
                  "Add tomato sauce, Worcestershire, sugar and a splash of water; simmer 8–10 minutes until thick.",
                  "Toast the buns and pile in the mince."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 25,
              "costPP": 20,
              "nutrition": {
                  "kcal": 450,
                  "protein_g": 18,
                  "carbs_g": 50,
                  "fat_g": 18
              },
              "feel": "Grated carrot and a tin of lentils stretch the mince further — same saucy bun, less spend.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "brown lentils",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "carrots",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "tomato sauce",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "brown sugar",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "burger buns",
                      "pp": 1,
                      "u": ""
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Soften the onion and finely grated carrot in the oil.",
                  "Brown the mince, then add the tinned lentils.",
                  "Stir in tomato sauce, sugar and water; simmer until thick.",
                  "Toast the buns and fill."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 18,
              "costPP": 29,
              "nutrition": {
                  "kcal": 470,
                  "protein_g": 24,
                  "carbs_g": 42,
                  "fat_g": 23
              },
              "feel": "Skip the pepper, lean on the pantry — saucy mince buns in under twenty.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 130,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "tomato sauce",
                      "pp": 45,
                      "u": "g"
                  },
                  {
                      "n": "Worcestershire sauce",
                      "pp": 5,
                      "u": "ml"
                  },
                  {
                      "n": "burger buns",
                      "pp": 1,
                      "u": ""
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Brown the mince with the chopped onion in the oil.",
                  "Add tomato sauce, Worcestershire and a splash of water; simmer 6–8 minutes.",
                  "Toast the buns and pile in the mince."
              ]
          }
      ]
  },
  {
      "id": "sp-beef-stroganoff",
      "cat": "plates",
      "goesWith": [
          "Tagliatelle",
          "Steamed Rice",
          "Buttered Pap",
          "Green Salad",
          "Crusty Bread"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Mushroom Beef Stroganoff",
      "emoji": "🍄",
      "cuisine": "Russian-inspired",
      "time": 30,
      "costPP": 46,
      "feel": "Tender beef strips and mushrooms in a creamy, paprika-flecked sauce over ribbons of tagliatelle.",
      "didYouKnow": "Beef Stroganoff is named after the wealthy Stroganov family of 19th-century Russia, whose French-trained chef created it. The sour-cream finish is the signature — and the golden rule is to add it off the boil, because high heat makes it split and curdle.",
      "freezes": false,
      "fridgeDays": 2,
      "ingredients": [
          {
              "n": "beef strips",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "mushrooms",
              "pp": 80,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "sour cream",
              "pp": 50,
              "u": "g"
          },
          {
              "n": "beef stock",
              "pp": 100,
              "u": "ml"
          },
          {
              "n": "paprika",
              "pp": 2,
              "u": "g"
          },
          {
              "n": "cake flour",
              "pp": 8,
              "u": "g"
          },
          {
              "n": "tagliatelle",
              "pp": 90,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 10,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Pat the beef strips dry and season. Sear them in batches in a smoking-hot oiled pan, 1 minute, just to brown; lift out so they stay tender.",
          "In the same pan soften the sliced onion and mushrooms until golden, about 6 minutes.",
          "Stir in the flour and paprika and cook 1 minute, then pour in the stock a little at a time, stirring into a smooth sauce.",
          "Turn the heat right down and stir in the sour cream; return the beef and warm through gently WITHOUT boiling.",
          "Serve over cooked tagliatelle or rice."
      ],
      "tip": "Add the sour cream off the boil and never let it bubble hard — high heat splits it into grainy curds.",
      "nutrition": {
          "kcal": 560,
          "protein_g": 34,
          "carbs_g": 48,
          "fat_g": 26
      },
      "storage": "Keeps 2 days; reheat very gently — the sour cream can split if boiled. Best not frozen.",
      "versions": [
          {
              "name": "Creamy Classic",
              "icon": "🏆",
              "default": true,
              "time": 30,
              "costPP": 46,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 34,
                  "carbs_g": 48,
                  "fat_g": 26
              },
              "feel": "Seared beef strips and mushrooms in a silky sour-cream and paprika sauce.",
              "ingredients": [{"n":"beef strips","pp":150,"u":"g"},{"n":"mushrooms","pp":90,"u":"g"},{"n":"onion","pp":70,"u":"g"},{"n":"butter","pp":25,"u":"g"},{"n":"sour cream","pp":40,"u":"ml"},{"n":"cake flour","pp":8,"u":"g"},{"n":"smoked paprika","pp":2,"u":"g"},{"n":"nutmeg","pp":0.3,"u":"g"},{"n":"brandy","pp":12,"u":"ml"},{"n":"beef stock","pp":80,"u":"ml"},{"n":"Dijon mustard","pp":5,"u":"g"},{"n":"worcestershire sauce","pp":5,"u":"ml"},{"n":"fresh dill","pp":3,"u":"g"},{"n":"fresh parsley","pp":3,"u":"g"},{"n":"oil","pp":6,"u":"ml"},{"n":"salt & pepper"}],
              "method": ["Melt half the butter in a wide pan over medium-low heat and cook the sliced onions slowly, 20-25 minutes, stirring now and then, until deeply golden and sweet - this slow caramelising is the backbone of the flavour. Season with a pinch of salt and lift out.","Turn the heat to high, add a little oil, and sear the dried, seasoned beef strips fast in batches (about 1 minute, still pink inside) so they brown rather than stew. Lift out with the onions.","Add the rest of the butter and fry the mushrooms until golden, then stir in the nutmeg and a good pinch of salt and pepper.","Sprinkle over the flour and smoked paprika, stir 1 minute, then pour in the brandy and let it bubble away, scraping up the brown bits - that deglaze is pure flavour.","Add the beef stock, Dijon and Worcestershire and simmer 5 minutes into a glossy gravy. Drop to low heat, stir in the sour cream (don't let it boil), and fold the beef and onions back in to warm through. Finish with chopped dill and parsley and serve over tagliatelle."]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 35,
              "costPP": 30,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 26,
                  "carbs_g": 52,
                  "fat_g": 22
              },
              "feel": "A cheaper braising cut, sliced thin, plus plain yoghurt for the tang — kinder on the wallet.",
              "ingredients": [
                  {
                      "n": "tenderised steak",
                      "pp": 140,
                      "u": "g"
                  },
                  {
                      "n": "mushrooms",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "plain yoghurt",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "beef stock",
                      "pp": 110,
                      "u": "ml"
                  },
                  {
                      "n": "paprika",
                      "pp": 2,
                      "u": "g"
                  },
                  {
                      "n": "cake flour",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "tagliatelle",
                      "pp": 90,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Slice the cheaper steak thin across the grain, pat dry and sear fast; lift out.",
                  "Soften the onion and mushrooms.",
                  "Add flour, paprika and stock into a sauce.",
                  "Off the heat stir in the yoghurt, return the beef gently.",
                  "Serve over pasta or rice."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 22,
              "costPP": 44,
              "nutrition": {
                  "kcal": 550,
                  "protein_g": 34,
                  "carbs_g": 46,
                  "fat_g": 26
              },
              "feel": "One pan, no fuss — creamy stroganoff over quick pasta in twenty minutes.",
              "ingredients": [
                  {
                      "n": "beef strips",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "mushrooms",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "sour cream",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "beef stock",
                      "pp": 90,
                      "u": "ml"
                  },
                  {
                      "n": "paprika",
                      "pp": 2,
                      "u": "g"
                  },
                  {
                      "n": "tagliatelle",
                      "pp": 90,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Sear the beef strips fast; lift out.",
                  "Fry the onion and mushrooms, add stock and paprika and bubble to reduce.",
                  "Off the heat stir in the sour cream and return the beef.",
                  "Toss with cooked pasta."
              ]
          }
      ]
  },
  {
      "id": "sp-chicken-a-la-king",
      "cat": "plates",
      "goesWith": [
          "Steamed Rice",
          "Buttered Toast",
          "Puff Pastry",
          "Green Peas",
          "Crusty Bread"
      ],
      "diet": "meat",
      "protein": "chicken",
      "name": "Chicken a la King",
      "emoji": "👑",
      "cuisine": "Retro classic",
      "time": 30,
      "costPP": 36,
      "feel": "Tender chicken, mushrooms and peppers in a velvety cream sauce — the retro Sunday supper, spooned over rice or toast.",
      "didYouKnow": "Chicken à la King sounds French and grand, but it was almost certainly born in an American hotel kitchen around 1900. The 'king' was a surname — a hotel owner or chef called King — not royalty, though the rich cream sauce certainly eats like it.",
      "freezes": false,
      "fridgeDays": 2,
      "ingredients": [
          {
              "n": "chicken breast",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "mushrooms",
              "pp": 70,
              "u": "g"
          },
          {
              "n": "green pepper",
              "pp": 40,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 50,
              "u": "g"
          },
          {
              "n": "cream",
              "pp": 50,
              "u": "ml"
          },
          {
              "n": "chicken stock",
              "pp": 120,
              "u": "ml"
          },
          {
              "n": "cake flour",
              "pp": 12,
              "u": "g"
          },
          {
              "n": "butter",
              "pp": 20,
              "u": "g"
          },
          {
              "n": "rice",
              "pp": 75,
              "u": "g"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Cook the rice and set aside. Poach or pan-cook the chicken breast, then dice it.",
          "Melt the butter in a pan and soften the chopped onion, mushrooms and pepper until tender, about 6 minutes.",
          "Stir in the flour and cook 1 minute, then add the stock slowly, stirring into a smooth sauce.",
          "Add the diced chicken and the cream and simmer gently until thick and velvety; season well.",
          "Spoon over rice or hot buttered toast."
      ],
      "tip": "Add the flour to the soft veg and cook it for a minute before the liquid — that cooks out the raw flour taste and stops lumps.",
      "nutrition": {
          "kcal": 520,
          "protein_g": 34,
          "carbs_g": 44,
          "fat_g": 24
      },
      "storage": "Keeps 2 days; reheat gently without boiling. Cream sauces don't freeze well, so this is best fresh.",
      "versions": [
          {
              "name": "Creamy Classic",
              "icon": "🏆",
              "default": true,
              "time": 30,
              "costPP": 36,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 34,
                  "carbs_g": 44,
                  "fat_g": 24
              },
              "feel": "The retro original — chicken, mushrooms and peppers in a velvety cream sauce over rice or toast.",
              "ingredients": [
                  {
                      "n": "chicken breast",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "mushrooms",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "green pepper",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 50,
                      "u": "ml"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 120,
                      "u": "ml"
                  },
                  {
                      "n": "cake flour",
                      "pp": 12,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Cook the rice; cook and dice the chicken.",
                  "Soften the onion, mushrooms and pepper in butter.",
                  "Stir in flour, then the stock, into a smooth sauce.",
                  "Add the chicken and cream; simmer velvety and season.",
                  "Serve over rice or buttered toast."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 30,
              "costPP": 26,
              "nutrition": {
                  "kcal": 500,
                  "protein_g": 30,
                  "carbs_g": 46,
                  "fat_g": 22
              },
              "feel": "Thighs and milk-thickened sauce keep it cheap; just as comforting over rice.",
              "ingredients": [
                  {
                      "n": "chicken thighs",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "mushrooms",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "green pepper",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "full cream milk",
                      "pp": 120,
                      "u": "ml"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "cake flour",
                      "pp": 14,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 18,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Cook the rice; cook and dice the thighs.",
                  "Soften the veg in butter, stir in flour.",
                  "Add the stock and milk slowly into a sauce.",
                  "Add the chicken and simmer thick; season.",
                  "Serve over rice."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 20,
              "costPP": 35,
              "nutrition": {
                  "kcal": 510,
                  "protein_g": 34,
                  "carbs_g": 42,
                  "fat_g": 24
              },
              "feel": "Pre-cooked or rotisserie chicken makes this a twenty-minute creamy supper.",
              "ingredients": [
                  {
                      "n": "cooked chicken",
                      "pp": 140,
                      "u": "g"
                  },
                  {
                      "n": "mushrooms",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "cream",
                      "pp": 60,
                      "u": "ml"
                  },
                  {
                      "n": "chicken stock",
                      "pp": 100,
                      "u": "ml"
                  },
                  {
                      "n": "cake flour",
                      "pp": 10,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 18,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Use microwave rice and shredded cooked chicken.",
                  "Soften the onion and mushrooms in butter, stir in flour.",
                  "Add stock and cream into a sauce.",
                  "Stir in the chicken to warm through; serve over rice or toast."
              ]
          }
      ]
  },
  {
      "id": "sp-crispy-salmon",
      "cat": "plates",
      "goesWith": [
          "Baby Potatoes",
          "Green Beans",
          "Lemon Wedge",
          "Creamy Mash",
          "Side Salad"
      ],
      "diet": "meat",
      "protein": "fish",
      "name": "Crispy Salmon, Lemon Butter",
      "emoji": "🐟",
      "cuisine": "Global",
      "time": 25,
      "costPP": 68,
      "feel": "Crackling-crisp salmon skin, a glossy lemon-butter pan sauce, baby potatoes and green beans — quietly impressive.",
      "didYouKnow": "Crisp salmon skin is all about patience: lay the fillet skin-down in a hot pan and DON'T move it. The skin needs time to render its fat and release itself — lift it too soon and it tears and sticks. Press gently for the first minute so it doesn't curl.",
      "freezes": false,
      "fridgeDays": 1,
      "ingredients": [
          {
              "n": "salmon fillet",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "butter",
              "pp": 25,
              "u": "g"
          },
          {
              "n": "lemon",
              "pp": 0.5,
              "u": ""
          },
          {
              "n": "garlic",
              "pp": 5,
              "u": "g"
          },
          {
              "n": "baby potatoes",
              "pp": 180,
              "u": "g"
          },
          {
              "n": "green beans",
              "pp": 80,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 8,
              "u": "ml"
          },
          {
              "n": "salt & pepper"
          }
      ],
      "method": [
          "Boil the baby potatoes in salted water until tender, 15 minutes, adding the green beans for the last 3 minutes; drain.",
          "Pat the salmon really dry and season. Heat the oil in a pan over medium-high.",
          "Lay the salmon in skin-side down and press gently with a spatula for the first minute so it stays flat. Leave it untouched 4–5 minutes until the skin is crisp and releases easily, then flip and cook 1–2 minutes more.",
          "Lift out the salmon. Turn off the heat, add the butter, grated garlic and a good squeeze of lemon, swirling into a quick sauce.",
          "Plate the salmon with the potatoes and beans and spoon over the lemon butter."
      ],
      "tip": "Dry the skin thoroughly and don't move the fillet until it releases on its own — that patience is the whole secret to crisp skin.",
      "nutrition": {
          "kcal": 560,
          "protein_g": 36,
          "carbs_g": 30,
          "fat_g": 34
      },
      "storage": "Best fresh while the skin is crisp; keeps 1 day but the skin softens. Not for freezing once cooked.",
      "versions": [
          {
              "name": "Crispy Skin, Lemon Butter",
              "icon": "🏆",
              "default": true,
              "time": 25,
              "costPP": 68,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 36,
                  "carbs_g": 30,
                  "fat_g": 34
              },
              "feel": "Shatter-crisp skin and a glossy lemon-garlic butter — the version worth the salmon.",
              "ingredients": [
                  {
                      "n": "salmon fillet",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "baby potatoes",
                      "pp": 180,
                      "u": "g"
                  },
                  {
                      "n": "green beans",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Boil the baby potatoes, adding the beans for the last 3 minutes; drain.",
                  "Dry and season the salmon; heat the oil.",
                  "Fry skin-side down, pressing for a minute, 4–5 minutes until crisp; flip for 1–2 more.",
                  "Off the heat add butter, garlic and lemon into a sauce.",
                  "Plate with the potatoes and beans; spoon over the lemon butter."
              ]
          },
          {
              "name": "Budget (Trout)",
              "icon": "💰",
              "time": 25,
              "costPP": 44,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 34,
                  "carbs_g": 30,
                  "fat_g": 30
              },
              "feel": "Local rainbow trout is noticeably cheaper than salmon and just as good crisped in lemon butter.",
              "ingredients": [
                  {
                      "n": "trout fillet",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 22,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "baby potatoes",
                      "pp": 180,
                      "u": "g"
                  },
                  {
                      "n": "green beans",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Boil the potatoes and beans.",
                  "Dry and season the trout; fry skin-side down until crisp, then flip briefly.",
                  "Make the lemon-garlic butter in the pan.",
                  "Plate with potatoes and beans, spoon over the butter."
              ]
          },
          {
              "name": "Oven Traybake",
              "icon": "🔥",
              "time": 30,
              "costPP": 66,
              "nutrition": {
                  "kcal": 540,
                  "protein_g": 36,
                  "carbs_g": 32,
                  "fat_g": 31
              },
              "feel": "Everything on one tray — hands-off, no spitting pan, perfect for more than one fillet.",
              "ingredients": [
                  {
                      "n": "salmon fillet",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 25,
                      "u": "g"
                  },
                  {
                      "n": "lemon",
                      "pp": 0.5,
                      "u": ""
                  },
                  {
                      "n": "garlic",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "baby potatoes",
                      "pp": 180,
                      "u": "g"
                  },
                  {
                      "n": "green beans",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "olive oil",
                      "pp": 10,
                      "u": "ml"
                  },
                  {
                      "n": "salt & pepper"
                  }
              ],
              "method": [
                  "Halve the baby potatoes, toss in olive oil and salt, and roast at 200°C for 20 minutes.",
                  "Add the salmon and beans to the tray, dot with butter, garlic and lemon, and roast 10–12 minutes more until the salmon flakes.",
                  "Spoon the buttery pan juices over everything to serve."
              ]
          }
      ]
  },
  {
      "id": "sp-texmex-beef-bowl",
      "cat": "plates",
      "goesWith": [
          "Guacamole",
          "Sour Cream",
          "Tortilla Chips",
          "Fresh Salsa",
          "Lime Wedge"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Loaded Tex-Mex Beef Bowl",
      "emoji": "🌮",
      "cuisine": "Tex-Mex",
      "time": 30,
      "costPP": 38,
      "feel": "Spiced beef, beans, corn and cheese piled over rice — a build-your-own bowl everyone customises their own way.",
      "didYouKnow": "Tex-Mex isn't 'fake' Mexican — it's a genuine border cuisine that grew among Tejano families, with its own signatures Mexico barely uses: yellow cheddar, cumin-heavy chilli and flour tortillas. The build-your-own bowl is its most modern, customisable form.",
      "freezes": true,
      "fridgeDays": 3,
      "ingredients": [
          {
              "n": "beef mince",
              "pp": 130,
              "u": "g"
          },
          {
              "n": "rice",
              "pp": 75,
              "u": "g"
          },
          {
              "n": "tinned beans",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "sweetcorn",
              "pp": 50,
              "u": "g"
          },
          {
              "n": "tomatoes",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "cheddar",
              "pp": 30,
              "u": "g"
          },
          {
              "n": "taco spice",
              "pp": 8,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 8,
              "u": "ml"
          },
          {
              "n": "salt"
          }
      ],
      "method": [
          "Cook the rice and set aside.",
          "Heat the oil and brown the mince well, breaking up the lumps, then stir in the taco spice and a splash of water and simmer 5 minutes until rich and fragrant.",
          "Warm the drained beans and the sweetcorn (in the same pan or microwave).",
          "Build each bowl: rice at the base, then the spiced beef, beans, corn and chopped tomato.",
          "Top with grated cheddar and whatever you love — salsa, guacamole or a dollop of sour cream."
      ],
      "tip": "Bloom the taco spice in the hot beef with a splash of water for a minute — it wakes up the cumin and chilli far more than sprinkling it on at the end.",
      "nutrition": {
          "kcal": 600,
          "protein_g": 30,
          "carbs_g": 66,
          "fat_g": 24
      },
      "storage": "The spiced beef keeps 3 days and freezes up to 2 months; build the bowls fresh with rice and toppings.",
      "versions": [
          {
              "name": "Loaded Beef",
              "icon": "🏆",
              "default": true,
              "time": 30,
              "costPP": 38,
              "nutrition": {
                  "kcal": 600,
                  "protein_g": 30,
                  "carbs_g": 66,
                  "fat_g": 24
              },
              "feel": "The full build — spiced beef, beans, corn, tomato and a shower of cheddar over rice.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 130,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "tinned beans",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "sweetcorn",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "cheddar",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "taco spice",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Brown the mince, add taco spice and a splash of water; simmer 5 minutes.",
                  "Warm the beans and corn.",
                  "Build: rice, spiced beef, beans, corn, tomato.",
                  "Top with cheddar and your favourites."
              ]
          },
          {
              "name": "Veg (Bean & Corn)",
              "icon": "🌱",
              "time": 25,
              "costPP": 22,
              "nutrition": {
                  "kcal": 540,
                  "protein_g": 18,
                  "carbs_g": 82,
                  "fat_g": 14
              },
              "feel": "Double beans and corn instead of meat — hearty, cheap and just as loaded.",
              "ingredients": [
                  {
                      "n": "tinned beans",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "sweetcorn",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 70,
                      "u": "g"
                  },
                  {
                      "n": "cheddar",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "taco spice",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Warm the beans with the taco spice and a splash of water until saucy.",
                  "Build: rice, spiced beans, corn, tomato.",
                  "Top with cheddar, salsa or guacamole."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 28,
              "costPP": 26,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 22,
                  "carbs_g": 70,
                  "fat_g": 20
              },
              "feel": "A little mince stretched with extra beans and rice — same loaded bowl for less.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 85,
                      "u": "g"
                  },
                  {
                      "n": "tinned beans",
                      "pp": 90,
                      "u": "g"
                  },
                  {
                      "n": "sweetcorn",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "cheddar",
                      "pp": 20,
                      "u": "g"
                  },
                  {
                      "n": "taco spice",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Brown the mince, add the beans and taco spice with a splash of water; simmer.",
                  "Warm the corn.",
                  "Build the bowls with rice, the beef-and-bean mix, corn and tomato; top with cheddar."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 18,
              "costPP": 37,
              "nutrition": {
                  "kcal": 590,
                  "protein_g": 30,
                  "carbs_g": 64,
                  "fat_g": 24
              },
              "feel": "Microwave rice and tinned everything — a loaded bowl in under twenty.",
              "ingredients": [
                  {
                      "n": "beef mince",
                      "pp": 130,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "tinned beans",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "sweetcorn",
                      "pp": 50,
                      "u": "g"
                  },
                  {
                      "n": "cheddar",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "taco spice",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 8,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Use microwave rice.",
                  "Brown the mince with the taco spice and a splash of water.",
                  "Tip in the beans and corn to warm.",
                  "Pile over the rice and top with cheddar."
              ]
          }
      ]
  },
  {
      "id": "sp-beef-broccoli",
      "cat": "plates",
      "goesWith": [
          "Steamed Rice",
          "Egg Fried Rice",
          "Sesame Seeds",
          "Spring Onion",
          "Noodles"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Beef & Broccoli Stir-fry Bowl",
      "emoji": "🥦",
      "cuisine": "Chinese-inspired",
      "time": 25,
      "costPP": 44,
      "feel": "Glossy strips of beef and bright-green broccoli in a savoury soy sauce over rice — better than takeaway, faster too.",
      "didYouKnow": "The glossy coat on takeaway beef and broccoli is just cornflour — tossing the raw beef in it ('velveting') both thickens the sauce and gives the meat a silky, tender bite. A screaming-hot wok and quick cooking keep the broccoli bright green.",
      "freezes": false,
      "fridgeDays": 2,
      "ingredients": [
          {
              "n": "beef strips",
              "pp": 150,
              "u": "g"
          },
          {
              "n": "broccoli",
              "pp": 120,
              "u": "g"
          },
          {
              "n": "soy sauce",
              "pp": 20,
              "u": "ml"
          },
          {
              "n": "garlic",
              "pp": 6,
              "u": "g"
          },
          {
              "n": "ginger",
              "pp": 5,
              "u": "g"
          },
          {
              "n": "cornflour",
              "pp": 8,
              "u": "g"
          },
          {
              "n": "rice",
              "pp": 75,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 12,
              "u": "ml"
          }
      ],
      "method": [
          "Cook the rice and set aside.",
          "Toss the beef strips in the cornflour until lightly coated — this 'velveting' makes them silky and thickens the sauce.",
          "Get a wok or wide pan smoking hot with half the oil. Sear the beef fast, 1–2 minutes, until just browned; lift out so it stays tender.",
          "Add the rest of the oil and stir-fry the broccoli with the grated garlic and ginger for 2–3 minutes until bright green and just tender.",
          "Pour in the soy with a splash of water, return the beef, and toss 1 minute until everything is glossy and coated. Serve over rice."
      ],
      "tip": "Get the pan properly hot and don't overcrowd it — a cool, crowded wok steams the beef grey instead of searing it.",
      "nutrition": {
          "kcal": 520,
          "protein_g": 32,
          "carbs_g": 54,
          "fat_g": 18
      },
      "storage": "Best fresh and crisp; keeps 2 days but the broccoli softens on reheating. Not ideal for freezing.",
      "versions": [
          {
              "name": "Classic",
              "icon": "🏆",
              "default": true,
              "time": 25,
              "costPP": 44,
              "nutrition": {
                  "kcal": 520,
                  "protein_g": 32,
                  "carbs_g": 54,
                  "fat_g": 18
              },
              "feel": "Velveted beef and crisp broccoli in a glossy soy-garlic-ginger sauce.",
              "ingredients": [
                  {
                      "n": "beef strips",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "broccoli",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 20,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "ginger",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "cornflour",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Toss the beef in cornflour.",
                  "Sear the beef fast in a hot wok; lift out.",
                  "Stir-fry the broccoli with garlic and ginger 2–3 minutes.",
                  "Add soy and water, return the beef, toss glossy; serve over rice."
              ]
          },
          {
              "name": "Budget",
              "icon": "💰",
              "time": 25,
              "costPP": 30,
              "nutrition": {
                  "kcal": 500,
                  "protein_g": 24,
                  "carbs_g": 58,
                  "fat_g": 16
              },
              "feel": "A cheaper cut sliced thin, bulked with extra broccoli — same glossy stir-fry for less.",
              "ingredients": [
                  {
                      "n": "tenderised steak",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "broccoli",
                      "pp": 160,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 22,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "ginger",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "cornflour",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Cook the rice.",
                  "Slice the cheaper steak thin across the grain and toss in cornflour.",
                  "Sear fast and lift out.",
                  "Stir-fry the broccoli with garlic and ginger.",
                  "Add soy and water, return the beef, toss; serve over rice."
              ]
          },
          {
              "name": "Quick",
              "icon": "⚡",
              "time": 18,
              "costPP": 42,
              "nutrition": {
                  "kcal": 510,
                  "protein_g": 32,
                  "carbs_g": 52,
                  "fat_g": 18
              },
              "feel": "Microwave rice and one hot wok — glossy beef and broccoli in under twenty.",
              "ingredients": [
                  {
                      "n": "beef strips",
                      "pp": 150,
                      "u": "g"
                  },
                  {
                      "n": "broccoli",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "soy sauce",
                      "pp": 20,
                      "u": "ml"
                  },
                  {
                      "n": "garlic",
                      "pp": 6,
                      "u": "g"
                  },
                  {
                      "n": "cornflour",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "rice",
                      "pp": 75,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 12,
                      "u": "ml"
                  }
              ],
              "method": [
                  "Use microwave rice.",
                  "Toss the beef in cornflour and sear fast; lift out.",
                  "Stir-fry the broccoli with garlic 2 minutes.",
                  "Add soy and water, return the beef, toss glossy; serve over rice."
              ]
          }
      ]
  },
  {
      "id": "sp-vetkoek-mince",
      "cat": "plates",
      "goesWith": [
          "Grated Cheese",
          "Atchar",
          "Sweet Chilli",
          "Side Salad",
          "Apricot Jam"
      ],
      "diet": "meat",
      "protein": "beef",
      "name": "Vetkoek & Curried Mince",
      "emoji": "🍩",
      "cuisine": "South African",
      "time": 70,
      "costPP": 28,
      "feel": "Golden, pillowy fried dough split open and stuffed with rich curried mince — proper padkos comfort.",
      "didYouKnow": "Vetkoek means 'fat cake' in Afrikaans — a deep-fried bread roll of pure Voortrekker resourcefulness, made from the simplest dough and cooked in a pot over a fire. Split and filled with curried mince it's a whole meal; with syrup or jam it's a treat. The dough must be soft and well-risen to fry up light, not heavy.",
      "freezes": true,
      "fridgeDays": 2,
      "ingredients": [
          {
              "n": "cake flour",
              "pp": 120,
              "u": "g"
          },
          {
              "n": "instant yeast",
              "pp": 3,
              "u": "g"
          },
          {
              "n": "sugar",
              "pp": 5,
              "u": "g"
          },
          {
              "n": "beef mince",
              "pp": 120,
              "u": "g"
          },
          {
              "n": "onion",
              "pp": 60,
              "u": "g"
          },
          {
              "n": "curry powder",
              "pp": 8,
              "u": "g"
          },
          {
              "n": "tomatoes",
              "pp": 80,
              "u": "g"
          },
          {
              "n": "oil",
              "pp": 40,
              "u": "ml"
          },
          {
              "n": "salt"
          }
      ],
      "method": [
          "Mix the flour, yeast, sugar and a pinch of salt. Stir in enough warm water (about 80 ml per portion) to make a soft, slightly sticky dough; knead briefly until smooth.",
          "Cover and leave somewhere warm until doubled in size, about 40 minutes.",
          "Meanwhile make the filling: brown the mince with the chopped onion, stir in the curry powder and cook a minute, then add the tomatoes and a splash of water and simmer 15 minutes into a thick, rich curry; season.",
          "Heat oil about 5 cm deep to medium (a pinch of dough should sizzle gently, not violently). Shape the risen dough into balls and fry, turning, 4–5 minutes until deep golden and cooked through; drain on paper.",
          "Split the warm vetkoek and spoon in the curried mince."
      ],
      "tip": "Keep the oil at a steady medium heat — too hot and the vetkoek browns before the middle cooks, leaving it raw inside.",
      "nutrition": {
          "kcal": 620,
          "protein_g": 24,
          "carbs_g": 68,
          "fat_g": 28
      },
      "storage": "The curried mince keeps 3 days and freezes 2 months. Vetkoek are best fresh and warm but freeze up to 1 month — refresh in a hot oven.",
      "versions": [
          {
              "name": "Curried Mince",
              "icon": "🏆",
              "default": true,
              "time": 70,
              "costPP": 28,
              "nutrition": {
                  "kcal": 620,
                  "protein_g": 24,
                  "carbs_g": 68,
                  "fat_g": 28
              },
              "feel": "The classic filling — rich, savoury curried mince in a golden, pillowy vetkoek.",
              "ingredients": [
                  {
                      "n": "cake flour",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "instant yeast",
                      "pp": 3,
                      "u": "g"
                  },
                  {
                      "n": "sugar",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "beef mince",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "curry powder",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Make a soft dough with the flour, yeast, sugar, salt and warm water; rise 40 minutes until doubled.",
                  "Brown the mince with the onion and curry powder, add tomatoes and simmer into a thick curry.",
                  "Fry the dough balls in medium oil, turning, until golden and cooked through.",
                  "Split the warm vetkoek and fill with the mince."
              ]
          },
          {
              "name": "Cheese & Mince",
              "icon": "🧀",
              "time": 70,
              "costPP": 33,
              "nutrition": {
                  "kcal": 700,
                  "protein_g": 28,
                  "carbs_g": 68,
                  "fat_g": 36
              },
              "feel": "A handful of grated cheddar melted into the hot mince — the indulgent garage-shop favourite.",
              "ingredients": [
                  {
                      "n": "cake flour",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "instant yeast",
                      "pp": 3,
                      "u": "g"
                  },
                  {
                      "n": "sugar",
                      "pp": 5,
                      "u": "g"
                  },
                  {
                      "n": "beef mince",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "onion",
                      "pp": 60,
                      "u": "g"
                  },
                  {
                      "n": "curry powder",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "tomatoes",
                      "pp": 80,
                      "u": "g"
                  },
                  {
                      "n": "cheddar",
                      "pp": 40,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Make and rise the dough as for the classic.",
                  "Make the curried mince, then stir grated cheddar through it off the heat until melted.",
                  "Fry the dough balls until golden.",
                  "Split and fill with the cheesy mince."
              ]
          },
          {
              "name": "Sweet (Jam & Syrup)",
              "icon": "🍯",
              "time": 60,
              "costPP": 16,
              "nutrition": {
                  "kcal": 560,
                  "protein_g": 10,
                  "carbs_g": 90,
                  "fat_g": 18
              },
              "feel": "The teatime treat — warm vetkoek split and spread with butter, apricot jam and a drizzle of syrup.",
              "ingredients": [
                  {
                      "n": "cake flour",
                      "pp": 120,
                      "u": "g"
                  },
                  {
                      "n": "instant yeast",
                      "pp": 3,
                      "u": "g"
                  },
                  {
                      "n": "sugar",
                      "pp": 8,
                      "u": "g"
                  },
                  {
                      "n": "butter",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "apricot jam",
                      "pp": 30,
                      "u": "g"
                  },
                  {
                      "n": "golden syrup",
                      "pp": 15,
                      "u": "g"
                  },
                  {
                      "n": "oil",
                      "pp": 40,
                      "u": "ml"
                  },
                  {
                      "n": "salt"
                  }
              ],
              "method": [
                  "Make a soft dough with the flour, yeast, sugar, salt and warm water; rise until doubled.",
                  "Fry the dough balls in medium oil until deep golden and cooked through; drain.",
                  "Split the warm vetkoek and spread with butter.",
                  "Add apricot jam and a drizzle of golden syrup."
              ]
          }
      ]
  },

  // ── 🍝 PASTA & PIZZA — added 22 Jun (Supper build, Batch 2) ──
  {
    "id": "sp-mac-cheese",
    "cat": "pastapizza",
    "diet": "veg",
    "protein": "veg",
    "name": "Creamy Mac & Cheese",
    "emoji": "🧀",
    "cuisine": "American",
    "time": 35,
    "costPP": 30,
    "feel": "The proper Sunday version — a silky cheddar-and-mozzarella sauce folded through the macaroni, topped and baked until the cheese blisters and the edges go crunchy.",
    "goesWith": [
      "Green salad",
      "Crusty bread",
      "Roast tomatoes",
      "Crispy bacon",
      "Steamed broccoli"
    ],
    "didYouKnow": "That cheese sauce has a posh name: a mornay, a white béchamel with cheese melted in. Béchamel is one of the French \"mother sauces\" every chef learns first — so a humble mac & cheese is built on classic restaurant technique.",
    "nutrition": {
      "kcal": 580,
      "protein_g": 24,
      "carbs_g": 58,
      "fat_g": 28
    },
    "storage": "Keeps 3 days in the fridge. Reheat low and slow with a good splash of milk stirred in, or it tightens and goes oily. The baked version freezes in portions for up to 2 months.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Baked Three-Cheese",
        "icon": "🏆",
        "default": true,
        "time": 35,
        "costPP": 30,
        "nutrition": {
          "kcal": 580,
          "protein_g": 24,
          "carbs_g": 58,
          "fat_g": 28
        },
        "feel": "The proper Sunday version — a silky cheddar-and-mozzarella sauce folded through the macaroni, topped and baked until the cheese blisters and the edges go crunchy.",
        "ingredients": [
          {
            "n": "macaroni",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 55,
            "u": "g"
          },
          {
            "n": "mozzarella",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 8,
            "u": "g"
          }
        ],
        "method": [
          "Boil the macaroni in well-salted water until just tender — about a minute less than the packet says, because it bakes again in the oven. Drain.",
          "Make a roux: melt the butter, stir in the flour and cook 1–2 min until it smells biscuity — this cooks out the raw-flour taste.",
          "Pour in the milk a splash at a time, whisking hard after each one so no lumps form, until it thickens to a pouring custard.",
          "Take the pot OFF the heat before adding the cheese — a boiling cheese sauce turns grainy. Stir in the cheddar and mustard until glossy.",
          "Fold the macaroni through, tip into a dish, scatter the mozzarella and parmesan on top, and bake at 200°C (or grill) until golden and bubbling, 12–15 min."
        ],
        "didYouKnow": "That cheese sauce has a posh name: a mornay, a white béchamel with cheese melted in. Béchamel is one of the French \"mother sauces\" every chef learns first — so a humble mac & cheese is built on classic restaurant technique."
      },
      {
        "name": "Stovetop",
        "icon": "⚡",
        "time": 15,
        "costPP": 28,
        "nutrition": {
          "kcal": 540,
          "protein_g": 22,
          "carbs_g": 56,
          "fat_g": 25
        },
        "feel": "No oven, no waiting — a loose, creamy mac stirred together straight in the pot and eaten while it is still molten.",
        "ingredients": [
          {
            "n": "macaroni",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 55,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 180,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the macaroni until just tender and drain, keeping a little of the starchy pasta water.",
          "In the same pot melt the butter, stir in the flour and cook 1 min, then whisk in the milk until smooth and slightly thickened.",
          "Off the heat, stir in the cheddar and mustard until glossy — loosen with a splash of pasta water if it is too thick.",
          "Tip the macaroni back in, stir to coat, and serve straight away while creamy."
        ],
        "didYouKnow": "Cheese sauce splits because heat makes the proteins clench and squeeze the fat out. Keeping it off the boil and stirring the cheese in at the very end is the whole trick to a smooth, pourable sauce."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 30,
        "costPP": 20,
        "nutrition": {
          "kcal": 560,
          "protein_g": 21,
          "carbs_g": 60,
          "fat_g": 25
        },
        "feel": "One block of cheddar, milk and a roux — no mozzarella, no parmesan, still rich and golden. The version that feeds the whole family for next to nothing.",
        "ingredients": [
          {
            "n": "macaroni",
            "pp": 95,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 45,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 20,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the macaroni until just tender and drain.",
          "Melt the butter, stir in the flour and cook 1–2 min, then whisk in the milk bit by bit until smooth and thickened.",
          "Off the heat, stir in most of the cheddar and the mustard until glossy.",
          "Fold through the macaroni, scatter the last of the cheese on top and grill or bake until golden, about 12 min."
        ],
        "didYouKnow": "Mac & cheese is grander than it looks: Thomas Jefferson served a baked \"macaroni pie\" at the United States president's table in 1802 after tasting the dish in Europe, helping turn it into an American favourite."
      },
      {
        "name": "Loaded",
        "icon": "🥓",
        "time": 40,
        "costPP": 38,
        "nutrition": {
          "kcal": 690,
          "protein_g": 29,
          "carbs_g": 62,
          "fat_g": 38
        },
        "feel": "The baked three-cheese pushed over the top: crispy bacon through the middle and a buttery golden crumb on top for crunch against all that cream.",
        "ingredients": [
          {
            "n": "macaroni",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 55,
            "u": "g"
          },
          {
            "n": "mozzarella",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "streaky bacon",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "breadcrumbs",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Fry the bacon until crisp, then chop. Boil the macaroni until just tender and drain.",
          "Make a roux: melt most of the butter, stir in the flour 1–2 min, then whisk in the milk until smooth and thick.",
          "Off the heat stir in the cheddar and mustard, then fold through the macaroni and bacon.",
          "Tip into a dish and top with mozzarella. Toss the breadcrumbs in the last of the melted butter and scatter over.",
          "Bake at 200°C until the crumb is deep golden and the sauce bubbles at the edges, 15–18 min."
        ],
        "didYouKnow": "A buttered crumb topping is called a gratin — French for \"scrapings\" — and it was originally prized for the crunchy bits stuck to the dish, not the soft middle. The crumbs toast as the sauce bakes, giving crunch against the cream."
      }
    ]
  },
  {
    "id": "sp-spag-meatballs",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "beef",
    "name": "Spaghetti & Meatballs",
    "emoji": "🍝",
    "cuisine": "Italian-American",
    "time": 40,
    "costPP": 45,
    "feel": "Tender beef meatballs simmered right in the tomato sauce so they drink up the flavour, piled on spaghetti. The secret is bread soaked in milk, which keeps them soft instead of bouncy.",
    "goesWith": [
      "Garlic bread",
      "Green salad",
      "Grated parmesan",
      "Steamed greens",
      "A glass of red"
    ],
    "didYouKnow": "Spaghetti and meatballs is barely Italian — it was invented by Italian immigrants in America around 1900, who suddenly had cheap meat and made the balls huge. In Italy, meatballs (polpette) are small and eaten on their own, not on pasta.",
    "nutrition": {
      "kcal": 680,
      "protein_g": 36,
      "carbs_g": 66,
      "fat_g": 28
    },
    "storage": "Keeps 3 days; the sauce and meatballs freeze beautifully for up to 2 months — freeze them without the pasta and boil fresh spaghetti on the day.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Classic Beef",
        "icon": "🏆",
        "default": true,
        "time": 40,
        "costPP": 45,
        "nutrition": {
          "kcal": 680,
          "protein_g": 36,
          "carbs_g": 66,
          "fat_g": 28
        },
        "feel": "Tender beef meatballs simmered right in the tomato sauce so they drink up the flavour, piled on spaghetti. The secret is bread soaked in milk, which keeps them soft instead of bouncy.",
        "ingredients": [
          {
            "n": "spaghetti",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "breadcrumbs",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 25,
            "u": "ml"
          },
          {
            "n": "egg",
            "pp": 0.25,
            "u": "egg"
          },
          {
            "n": "onion",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 150,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Soak the breadcrumbs in the milk a few minutes until mushy — this \"panade\" is what keeps the meatballs tender.",
          "Mix the mince, soaked crumbs, egg, half the garlic, salt and pepper with your hands until just combined — over-mixing makes them tough. Roll into balls.",
          "Brown the meatballs in the olive oil on all sides (they don't need to cook through yet), then lift out.",
          "In the same pan soften the onion and the rest of the garlic, stir in the tomato paste 1 min, add the tinned tomatoes and herbs, and simmer 10 min.",
          "Slip the meatballs back into the sauce and simmer gently 12–15 min until cooked through. Serve on spaghetti with parmesan."
        ],
        "didYouKnow": "Spaghetti and meatballs is barely Italian — it was invented by Italian immigrants in America around 1900, who suddenly had cheap meat and made the balls huge. In Italy, meatballs (polpette) are small and eaten on their own, not on pasta."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 40,
        "costPP": 33,
        "nutrition": {
          "kcal": 620,
          "protein_g": 28,
          "carbs_g": 70,
          "fat_g": 22
        },
        "feel": "More bread, a little less meat, and the meatballs stretch just as far — a pot that feeds a hungry family without anyone noticing the saving.",
        "ingredients": [
          {
            "n": "spaghetti",
            "pp": 95,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 70,
            "u": "g"
          },
          {
            "n": "breadcrumbs",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 30,
            "u": "ml"
          },
          {
            "n": "egg",
            "pp": 0.25,
            "u": "egg"
          },
          {
            "n": "onion",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 160,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          }
        ],
        "method": [
          "Soak the breadcrumbs in the milk until mushy. Mix with the mince, egg, half the garlic, salt and pepper and roll into balls.",
          "Brown the meatballs in the oil, then lift out.",
          "Soften the onion and remaining garlic, add the tomato paste, tinned tomatoes and herbs and simmer 10 min.",
          "Return the meatballs and simmer gently 12–15 min. Serve on spaghetti."
        ],
        "didYouKnow": "Bulking meatballs with bread is not a cheat — Italian nonnas have always done it. The starch holds moisture, so a meatball with bread in it is actually juicier than one that is pure meat."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 25,
        "costPP": 42,
        "nutrition": {
          "kcal": 650,
          "protein_g": 35,
          "carbs_g": 64,
          "fat_g": 26
        },
        "feel": "Shop-bought passata and no browning step — meatballs poached straight in a simmering sauce, ready in the time the spaghetti boils.",
        "ingredients": [
          {
            "n": "spaghetti",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "beef mince",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "breadcrumbs",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "egg",
            "pp": 0.25,
            "u": "egg"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "tomato passata",
            "pp": 180,
            "u": "g"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 10,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the spaghetti. Meanwhile mix the mince, breadcrumbs, egg, garlic, salt and pepper and roll small balls.",
          "Heat the passata with the herbs and a splash of oil in a wide pan until simmering.",
          "Drop the raw meatballs straight into the simmering sauce, cover, and poach 12–15 min, turning once — cooking them in the sauce keeps them soft and saves a pan.",
          "Serve on the spaghetti with parmesan."
        ],
        "didYouKnow": "Passata — Italian for \"passed\", as in passed through a sieve — is just smooth, uncooked tomato purée. Because it is already smooth, it turns into a sauce in minutes, which is why it beats chopping fresh tomatoes on a busy night."
      }
    ]
  },
  {
    "id": "sp-chicken-alfredo",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "chicken",
    "name": "Creamy Chicken Alfredo",
    "emoji": "🍝",
    "cuisine": "Italian-American",
    "time": 30,
    "costPP": 48,
    "feel": "Pan-fried chicken in a glossy parmesan cream that clings to every strand of fettuccine. Rich, fast, and exactly what people mean when they order Alfredo.",
    "goesWith": [
      "Garlic bread",
      "Green salad",
      "Steamed broccoli",
      "Grated parmesan",
      "Black pepper"
    ],
    "didYouKnow": "Real Italian \"Alfredo\" has no cream at all — Alfredo di Lelio created it in Rome in 1908 from just butter and parmesan whipped with pasta water. The cream-and-chicken version is entirely American, named after the same man.",
    "nutrition": {
      "kcal": 720,
      "protein_g": 42,
      "carbs_g": 60,
      "fat_g": 34
    },
    "storage": "Best eaten fresh — cream sauces thicken and can split on reheating. If you must keep it, store 2 days and reheat very gently with a splash of milk, stirring constantly. Not suited to freezing.",
    "freezes": false,
    "fridgeDays": 2,
    "versions": [
      {
        "name": "Classic Cream",
        "icon": "🏆",
        "default": true,
        "time": 30,
        "costPP": 48,
        "nutrition": {
          "kcal": 720,
          "protein_g": 42,
          "carbs_g": 60,
          "fat_g": 34
        },
        "feel": "Pan-fried chicken in a glossy parmesan cream that clings to every strand of fettuccine. Rich, fast, and exactly what people mean when they order Alfredo.",
        "ingredients": [{"n":"fettuccine","pp":90,"u":"g"},{"n":"chicken breasts","pp":120,"u":"g"},{"n":"fresh cream","pp":80,"u":"ml"},{"n":"parmesan","pp":25,"u":"g"},{"n":"butter","pp":20,"u":"g"},{"n":"garlic","pp":6,"u":"g"},{"n":"smoked paprika","pp":1,"u":"g"},{"n":"mixed herbs","pp":1,"u":"g"},{"n":"nutmeg","pp":0.3,"u":"g"},{"n":"fresh parsley","pp":3,"u":"g"},{"n":"olive oil","pp":6,"u":"ml"},{"n":"salt & pepper"}],
        "method": ["Season the chicken well with salt, pepper, the smoked paprika and the mixed herbs, then fry in the olive oil over medium-high heat until golden and cooked through, 5-6 minutes a side. Rest, then slice.","Turn the heat down, melt the butter in the same pan and soften the garlic a minute without browning it.","Pour in the cream, add a small grating of nutmeg and a good pinch of black pepper, and let it bubble gently 2 minutes to thicken slightly.","Off the heat, stir in the parmesan until it melts into a smooth sauce - adding it off the boil stops it going stringy - and check the salt.","Toss the cooked fettuccine through with a splash of pasta water to loosen, top with the sliced chicken and finish with chopped parsley."],
        "didYouKnow": "Real Italian \"Alfredo\" has no cream at all — Alfredo di Lelio created it in Rome in 1908 from just butter and parmesan whipped with pasta water. The cream-and-chicken version is entirely American, named after the same man."
      },
      {
        "name": "Lighter",
        "icon": "🍗",
        "time": 30,
        "costPP": 40,
        "nutrition": {
          "kcal": 620,
          "protein_g": 44,
          "carbs_g": 62,
          "fat_g": 22
        },
        "feel": "The same comfort with a milk-based sauce thickened the gentle way — lighter on the cream but still silky, so you can have it on a weeknight.",
        "ingredients": [
          {
            "n": "fettuccine",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "chicken breasts",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 180,
            "u": "ml"
          },
          {
            "n": "parmesan",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "butter",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          }
        ],
        "method": [
          "Fry the seasoned chicken until golden and cooked through, then rest and slice.",
          "Melt the butter, soften the garlic, then stir in the flour and cook 1 min to make a roux.",
          "Whisk in the milk slowly until smooth and thickened into a light sauce.",
          "Off the heat, stir in the parmesan until melted, then toss through the fettuccine and top with the chicken."
        ],
        "didYouKnow": "You can fake the richness of cream with a roux and milk — the flour thickens the milk so it coats the pasta like a cream sauce, for a fraction of the fat. It is the same trick behind a cheese sauce."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 20,
        "costPP": 46,
        "nutrition": {
          "kcal": 700,
          "protein_g": 42,
          "carbs_g": 60,
          "fat_g": 32
        },
        "feel": "Everything in one pan while the pasta boils — chicken, cream, parmesan, done in twenty minutes flat.",
        "ingredients": [
          {
            "n": "fettuccine",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "chicken breasts",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 80,
            "u": "ml"
          },
          {
            "n": "parmesan",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 5,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the fettuccine. Meanwhile cut the chicken into small strips so it cooks fast, and fry in the oil until golden and done.",
          "Add the garlic a minute, pour in the cream and let it bubble 2 min.",
          "Off the heat, stir in the parmesan, then drag the drained pasta straight into the pan with a splash of its water and toss to coat."
        ],
        "didYouKnow": "Cutting the chicken into strips is not just faster — more surface area means more golden, browned edges, and that browning (the Maillard reaction) is where much of the savoury flavour lives."
      }
    ]
  },
  {
    "id": "sp-tuna-pasta-bake",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "fish",
    "name": "Cheesy Tuna Pasta Bake",
    "emoji": "🐟",
    "cuisine": "Family classic",
    "time": 35,
    "costPP": 33,
    "feel": "The lunchbox hero — pasta and tuna folded into a cheesy white sauce with sweet peas and corn, baked under a golden cheese lid. Pure pantry comfort.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Frozen peas",
      "Sliced tomato",
      "Crusty bread"
    ],
    "didYouKnow": "The tuna bake is a child of the tin: canned tuna only became a pantry staple in the early 1900s, when canning made deep-sea fish cheap and shelf-stable. Suddenly families far from the coast could put fish on the table any night.",
    "nutrition": {
      "kcal": 560,
      "protein_g": 30,
      "carbs_g": 58,
      "fat_g": 22
    },
    "storage": "Keeps 3 days; reheat with a splash of milk so it doesn't dry out. Freezes in portions for up to 2 months — ideal for lunchboxes.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Creamy Baked",
        "icon": "🏆",
        "default": true,
        "time": 35,
        "costPP": 33,
        "nutrition": {
          "kcal": 560,
          "protein_g": 30,
          "carbs_g": 58,
          "fat_g": 22
        },
        "feel": "The lunchbox hero — pasta and tuna folded into a cheesy white sauce with sweet peas and corn, baked under a golden cheese lid. Pure pantry comfort.",
        "ingredients": [
          {
            "n": "pasta",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "tinned tuna",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "frozen peas",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "sweetcorn",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the pasta until just tender and drain. Heat the oven to 200°C.",
          "Soften the chopped onion in the butter, stir in the flour and cook 1–2 min, then whisk in the milk bit by bit until smooth and thick.",
          "Off the heat, stir in most of the cheddar and the mustard, then fold through the drained tuna, peas, corn and pasta.",
          "Tip into a dish, scatter the last of the cheese on top, and bake until golden and bubbling, about 15 min."
        ],
        "didYouKnow": "The tuna bake is a child of the tin: canned tuna only became a pantry staple in the early 1900s, when canning made deep-sea fish cheap and shelf-stable. Suddenly families far from the coast could put fish on the table any night."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 35,
        "costPP": 24,
        "nutrition": {
          "kcal": 540,
          "protein_g": 27,
          "carbs_g": 62,
          "fat_g": 18
        },
        "feel": "Stretched with extra pasta and pilchards, one block of cheddar and no frills — a whole baking dish that costs almost nothing and still disappears.",
        "ingredients": [
          {
            "n": "pasta",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "tinned pilchards",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "frozen peas",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the pasta and drain. Heat the oven to 200°C.",
          "Soften the onion in the butter, stir in the flour 1–2 min, then whisk in the milk until smooth and thick.",
          "Off the heat stir in most of the cheddar and the mustard, then fold through the pilchards (broken up), peas and pasta.",
          "Top with the last of the cheese and bake until golden, about 15 min."
        ],
        "didYouKnow": "Tinned pilchards in tomato sauce are one of South Africa's most-eaten proteins — cheaper than tuna and just as rich in omega-3. Swapped into a bake they bring their own savoury tomato sauce with them, so you need less seasoning."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 18,
        "costPP": 31,
        "nutrition": {
          "kcal": 540,
          "protein_g": 29,
          "carbs_g": 56,
          "fat_g": 20
        },
        "feel": "No oven — everything stirred together in the pot and on the table in under twenty minutes. The weeknight version of the bake.",
        "ingredients": [
          {
            "n": "pasta",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "tinned tuna",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 45,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 180,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "frozen peas",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the pasta, adding the frozen peas for the last 2 minutes. Drain.",
          "In the same pot melt the butter, stir in the flour 1 min, then whisk in the milk until smooth and thickened.",
          "Off the heat, stir in the cheddar and mustard, then fold through the tuna and pasta. Serve straight away while creamy."
        ],
        "didYouKnow": "Cooking the peas in with the pasta for the last two minutes saves a pot — frozen peas are blanched before freezing, so they only need to heat through, not really cook."
      }
    ]
  },
  {id:'sp-margherita-pizza', cat:'pastapizza', goesWith:['Napoletana Sauce','Green salad','Garlic bread','Rocket','Chilli oil'], diet:'veg', protein:'veg', name:'Margherita Pizza', emoji:'🍕', cuisine:'Italian', time:30, costPP:46,
    feel:'A blistered base, bright tomato, melting mozzarella and fresh basil — the pizza that proves simple is hardest to beat.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Get your oven roaring — slide a pizza stone, steel or upturned baking tray in and preheat it as hot as the oven goes (240 to 260°C) for at least 30 minutes.','Stretch the base by hand on a floured peel or sheet of baking paper; never roll it, which crushes out the air.','Spread a thin layer of passata mixed with the crushed garlic — thin is the secret, too much sauce steams the base soggy. Season the passata with a good pinch of salt.','Tear over the mozzarella, leaving a clear border for the crust to puff.','Cook it two ways — WOOD-FIRED (~400°C+): slide it on and bake 60 to 90 seconds, turning once, until the crust is leopard-spotted. HOME OVEN: bake 8 to 12 minutes on the preheated stone until the crust is blistered and the cheese bubbles.','Finish with torn fresh basil and a drizzle of olive oil — basil after baking, so it stays fragrant and green.'],
    tip:'Make your own base (see Pizza Dough) and sauce (see Napoletana) in Sides & Basics — both freeze, so a stash means pizza in minutes. And pizza wants the HOTTEST oven you have: 180°C only gives a pale, soft base. Save moderate heat for thick pan pizzas; for a crisp thin crust, max it out and preheat a stone or tray.',
    didYouKnow:'The Margherita was supposedly built in 1889 for Queen Margherita of Savoy, its tomato-red, mozzarella-white and basil-green echoing the new Italian flag. Whether the tale is exact or polished over time, the colour-coded patriotism stuck — and it remains the benchmark every pizzaiolo is judged by.',
    nutrition:{kcal:600,protein_g:24,carbs_g:74,fat_g:24}, storage:'Best eaten fresh and hot. Reheat leftovers in a hot dry pan or air-fryer, never the microwave, to keep the base crisp.',
    versions:[
      {name:'Classic',icon:'🍕',default:true,time:30,costPP:46,nutrition:{kcal:600,protein_g:24,carbs_g:74,fat_g:24},feel:'Tomato, mozzarella, basil — the benchmark.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat a stone or tray as hot as the oven goes for 30 minutes.','Hand-stretch the base; spread thinly with Napoletana sauce — passata seasoned with olive oil, grated garlic, torn basil and salt (tap the Napoletana Sauce link for the full recipe and richer cooked versions).','Tear over the mozzarella, leaving a clear crust border.','WOOD-FIRED: 60 to 90 sec turning once. HOME OVEN (240 to 260°C): 8 to 12 minutes until blistered and bubbling.','Finish with fresh basil and a drizzle of olive oil.']},
      {name:'Bufala',icon:'🧀',time:30,costPP:47,nutrition:{kcal:620,protein_g:25,carbs_g:74,fat_g:26},feel:'Made with creamy buffalo mozzarella, added near the end so it stays soft and milky rather than oily.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'buffalo mozzarella',pp:70,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray screaming hot.','Stretch the base and spread thinly with passata.','Bake the base with just the sauce first for a few minutes.','Tear over the buffalo mozzarella and return briefly until just melted — WOOD-FIRED 30 sec / HOME OVEN 3 to 4 minutes.','Finish with basil and olive oil.']},
      {name:'Marinara (no cheese)',icon:'🌿',time:25,costPP:27,nutrition:{kcal:440,protein_g:11,carbs_g:72,fat_g:12},feel:'The original Neapolitan pizza — no cheese at all, just tomato, garlic, oregano and oil. Naturally vegan and surprisingly moreish.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:70,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:10,u:'ml'}],method:['Preheat the stone or tray as hot as possible.','Stretch the base; spread with passata, sliced garlic and oregano.','Drizzle generously with olive oil.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 10 minutes until the crust chars at the edges.','Drizzle with a little more oil to serve.']},
      {name:'Rocket & parmesan',icon:'🥬',time:30,costPP:61,nutrition:{kcal:640,protein_g:28,carbs_g:74,fat_g:28},feel:'A classic Margherita finished, off the heat, with a handful of peppery rocket and shavings of parmesan — fresh against the hot cheese.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'rocket',pp:15,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Build and bake a classic Margherita until blistered and bubbling.','The moment it comes out, pile on the fresh rocket.','Shave over the parmesan and drizzle with olive oil.','Eat at once, while the rocket is just wilting from the heat.']}
    ]},
  {id:'sp-pepperoni-pizza', cat:'pastapizza', goesWith:['Napoletana Sauce','Green salad','Garlic bread','Chilli flakes','Ranch dip'], diet:'meat', protein:'pork', name:'Pepperoni Pizza', emoji:'🍕', cuisine:'Italian-American', time:30, costPP:65,
    feel:'Crisp base, gooey cheese and curls of spicy pepperoni crisping into little cups of fat — the pizza everyone reaches for first.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:40,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base; spread thinly with passata and a pinch of oregano.','Scatter over the mozzarella, then arrange the pepperoni on top — on top, not buried, so the edges crisp.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is golden and the pepperoni edges curl and crisp.','Slice and serve hot, with chilli flakes for those who want them.'],
    tip:'Make your own base (Pizza Dough) and sauce (Napoletana) in Sides & Basics for a fraction of the cost. Letting the pepperoni crisp into little cups is half the joy — keep it on top of the cheese, not under it. And remember: pizza wants the hottest oven you have, not 180°C.',
    didYouKnow:'Pepperoni is an American invention, not an Italian one — it was created by Italian-American butchers in early-1900s New York. Ask for "pepperoni" in Italy and you will be handed bell peppers ("peperoni"), not spicy sausage. The cupping, crisping kind beloved on pizza is a specific natural-casing American salami.',
    nutrition:{kcal:680,protein_g:30,carbs_g:74,fat_g:32}, storage:'Best fresh. Reheat in a hot dry pan or air-fryer to re-crisp the base.',
    versions:[
      {name:'Classic',icon:'🍕',default:true,time:30,costPP:65,nutrition:{kcal:680,protein_g:30,carbs_g:74,fat_g:32},feel:'Pepperoni, mozzarella, tomato — the one everyone orders.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:40,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray screaming hot.','Stretch the base; spread thinly with Napoletana sauce (passata seasoned with olive oil, garlic, oregano and salt — tap the link for the full recipe).','Scatter mozzarella, then pepperoni on top.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes until the pepperoni cups and crisps.','Slice and serve hot.']},
      {name:'Diavola (spicy)',icon:'🌶️',time:30,costPP:67,nutrition:{kcal:700,protein_g:31,carbs_g:74,fat_g:34},feel:'Turned up to fiery — extra chilli and a hit of heat through the sauce for the spice-lovers.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:45,u:'g'},{n:'chilli',pp:4,u:'g'},{n:'chilli flakes',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray as hot as possible.','Spread the base with passata spiked with chilli flakes.','Top with mozzarella, pepperoni and sliced fresh chilli.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with a little chilli oil if you dare.']},
      {name:'Pepperoni & mushroom',icon:'🍄',time:30,costPP:67,nutrition:{kcal:700,protein_g:31,carbs_g:76,fat_g:33},feel:'Earthy mushrooms alongside the spicy pepperoni — a little more substantial, a little more grown-up.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:35,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray hot.','Spread thinly with oregano passata; scatter mozzarella.','Arrange the thinly sliced mushrooms and pepperoni on top.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until the mushrooms are golden and the pepperoni crisp.','Slice and serve.']},
      {name:'Meat feast',icon:'🥩',time:30,costPP:71,nutrition:{kcal:780,protein_g:38,carbs_g:74,fat_g:42},feel:'Pepperoni, salami and ham piled together — for when one meat simply will not do.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:30,u:'g'},{n:'salami',pp:25,u:'g'},{n:'ham',pp:30,u:'g'},{n:'oregano',pp:1,u:'g'}],method:['Preheat the stone or tray screaming hot.','Spread thinly with oregano passata; scatter mozzarella.','Layer on the pepperoni, salami and torn ham.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until crisp and bubbling.','Slice and serve hot.']}
    ]},
  {
    "id": "sp-prawn-linguine",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "fish",
    "name": "Garlic Prawn Linguine",
    "emoji": "🦐",
    "cuisine": "Italian",
    "time": 25,
    "costPP": 57,
    "feel": "Juicy prawns tossed with garlic, chilli, lemon and linguine — a coastal supper in 25 minutes, built on nothing but good olive oil and a squeeze of fresh lemon.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Lemon wedges",
      "Crusty bread",
      "A glass of white"
    ],
    "didYouKnow": "Prawns cook in barely two minutes because their muscle has very little connective tissue — there is almost nothing to break down. That is also why they turn from tender to rubbery so fast: overcook them by a minute and the proteins squeeze tight.",
    "nutrition": {
      "kcal": 560,
      "protein_g": 32,
      "carbs_g": 64,
      "fat_g": 18
    },
    "storage": "Best eaten fresh — prawns toughen and go rubbery when reheated. If you must keep it, store 1 day and warm very gently. Not suited to freezing once cooked.",
    "freezes": false,
    "fridgeDays": 1,
    "versions": [
      {
        "name": "Garlic & Chilli",
        "icon": "🏆",
        "default": true,
        "time": 25,
        "costPP": 57,
        "nutrition": {
          "kcal": 560,
          "protein_g": 32,
          "carbs_g": 64,
          "fat_g": 18
        },
        "feel": "Juicy prawns tossed with garlic, chilli, lemon and linguine — a coastal supper in 25 minutes, built on nothing but good olive oil and a squeeze of fresh lemon.",
        "ingredients": [{"n":"prawns","pp":120,"u":"g"},{"n":"linguine","pp":80,"u":"g"},{"n":"garlic","pp":10,"u":"g"},{"n":"chilli","pp":2,"u":"g"},{"n":"white wine","pp":25,"u":"ml"},{"n":"lemon","pp":15,"u":"g"},{"n":"fresh parsley","pp":4,"u":"g"},{"n":"olive oil","pp":15,"u":"ml"},{"n":"butter","pp":10,"u":"g"}],
        "method": ["Get the linguine boiling in well-salted water and cook until just tender. Save a mug of the pasta water before draining.","While it cooks, gently sizzle the sliced garlic and chilli in the olive oil and butter over medium heat — keep it gentle, burnt garlic turns bitter.","Turn the heat up, add the prawns and cook just until they turn pink and curl, about 2 minutes a side. The moment they are pink they are done — any longer and they go rubbery.","Pour in the white wine and let it bubble and reduce by half, scraping up the tasty bits from the pan — this is the backbone of the sauce.","Add a good squeeze of lemon and a splash of pasta water to loosen it into a light, glossy sauce, then toss the drained linguine through with the parsley."],
        "didYouKnow": "Prawns cook in barely two minutes because their muscle has very little connective tissue — there is almost nothing to break down. That is also why they turn from tender to rubbery so fast: overcook them by a minute and the proteins squeeze tight."
      },
      {
        "name": "Tomato & Wine",
        "icon": "🍅",
        "time": 30,
        "costPP": 60,
        "nutrition": {
          "kcal": 580,
          "protein_g": 32,
          "carbs_g": 62,
          "fat_g": 18
        },
        "feel": "The same prawns and linguine, but in a light tomato-and-white-wine sauce — a little richer, a little more special, the kind of thing you would order out.",
        "ingredients": [
          {
            "n": "prawns",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "linguine",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 10,
            "u": "g"
          },
          {
            "n": "chilli",
            "pp": 2,
            "u": "g"
          },
          {
            "n": "cherry tomatoes",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "white wine",
            "pp": 30,
            "u": "ml"
          },
          {
            "n": "fresh parsley",
            "pp": 4,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 12,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the linguine until just tender, saving a little pasta water.",
          "Sizzle the garlic and chilli gently in the oil, add the halved cherry tomatoes and let them soften and collapse, 3–4 min.",
          "Pour in the white wine and let it bubble hard for a minute to cook off the sharp alcohol, leaving just the flavour.",
          "Add the prawns and cook until just pink, then toss the linguine and parsley through with a splash of pasta water."
        ],
        "didYouKnow": "When you add wine to a hot pan and let it bubble, the alcohol boils off at 78°C — well below water — so the harsh edge cooks away in about a minute while the fruity, savoury flavours stay behind."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 25,
        "costPP": 42,
        "nutrition": {
          "kcal": 540,
          "protein_g": 30,
          "carbs_g": 64,
          "fat_g": 15
        },
        "feel": "Frozen prawns, no wine, and the same big garlic-and-lemon flavour — a treat-feeling supper that does not cost a treat-sized amount.",
        "ingredients": [
          {
            "n": "frozen prawns",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "spaghetti",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 10,
            "u": "g"
          },
          {
            "n": "chilli",
            "pp": 2,
            "u": "g"
          },
          {
            "n": "lemon",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 12,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the spaghetti until just tender, saving a little pasta water.",
          "Thaw the prawns quickly by sitting them in a bowl of cool water for a few minutes, then pat dry — dry prawns brown instead of stewing.",
          "Sizzle the garlic and chilli gently in the oil, add the prawns and cook just until pink.",
          "Squeeze in the lemon, add a splash of pasta water, and toss the spaghetti through."
        ],
        "didYouKnow": "Frozen prawns are often fresher than \"fresh\" ones — most are flash-frozen on the boat within hours of being caught, while the ones on the fish counter have usually been thawed from that same freeze. Buying them frozen just means you thaw them yourself."
      }
    ]
  },
  {
    "id": "sp-cannelloni",
    "cat": "pastapizza",
    "diet": "veg",
    "protein": "veg",
    "name": "Spinach & Ricotta Cannelloni",
    "emoji": "🥬",
    "cuisine": "Italian",
    "time": 50,
    "costPP": 60,
    "feel": "Pasta tubes stuffed with creamy spinach and ricotta, blanketed in tomato sauce and melted mozzarella, baked until bubbling. A proper make-ahead crowd-pleaser.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Roast vegetables",
      "Grated parmesan",
      "A glass of red"
    ],
    "didYouKnow": "Ricotta isn't really a cheese in the usual sense — it's made from the watery whey left over after other cheeses are made. \"Ricotta\" means \"re-cooked\": the whey is heated again until soft curds form, which is why it's so light and milky.",
    "nutrition": {
      "kcal": 520,
      "protein_g": 24,
      "carbs_g": 56,
      "fat_g": 22
    },
    "storage": "Keeps 3 days and reheats beautifully. Freezes well — assemble but don't bake, freeze, then bake from frozen with foil on for an easy future supper.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Classic Baked",
        "icon": "🏆",
        "default": true,
        "time": 50,
        "costPP": 60,
        "nutrition": {
          "kcal": 520,
          "protein_g": 24,
          "carbs_g": 56,
          "fat_g": 22
        },
        "feel": "Pasta tubes stuffed with creamy spinach and ricotta, blanketed in tomato sauce and melted mozzarella, baked until bubbling. A proper make-ahead crowd-pleaser.",
        "ingredients": [
          {
            "n": "cannelloni tubes",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "ricotta",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "baby spinach",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "tomato passata",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "mozzarella",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Wilt the spinach in a dry pan or with a splash of water, then squeeze it really dry in a cloth — wet spinach makes a watery filling.",
          "Chop the spinach and mix with the ricotta, parmesan, a little garlic, salt and pepper.",
          "Spoon or pipe the filling into the cannelloni tubes — a small spoon, or a sandwich bag with a corner snipped off, works well.",
          "Spread a little passata in a dish, lay the tubes on top, then cover with the rest of the passata and the mozzarella.",
          "Bake at 180°C until the pasta is tender and the top is golden and bubbling, 30–35 min. The tubes soften by drinking up the sauce, so make sure they are well covered."
        ],
        "didYouKnow": "Ricotta isn't really a cheese in the usual sense — it's made from the watery whey left over after other cheeses are made. \"Ricotta\" means \"re-cooked\": the whey is heated again until soft curds form, which is why it's so light and milky."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 50,
        "costPP": 44,
        "nutrition": {
          "kcal": 470,
          "protein_g": 26,
          "carbs_g": 56,
          "fat_g": 16
        },
        "feel": "Smooth cottage cheese in place of ricotta and cheddar on top — the same comforting baked tubes for a good bit less.",
        "ingredients": [
          {
            "n": "cannelloni tubes",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "cottage cheese",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "baby spinach",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "tomato passata",
            "pp": 130,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Wilt the spinach and squeeze it really dry, then chop.",
          "Mix with the cottage cheese, garlic, salt and pepper. For a smoother filling, give the cottage cheese a quick mash or blend first.",
          "Fill the tubes, lay them over a little passata, then cover with the rest plus the cheddar.",
          "Bake at 180°C until tender and golden, 30–35 min."
        ],
        "didYouKnow": "Cottage cheese and ricotta are close cousins — both are fresh, unaged curd cheeses. Cottage cheese is lumpier and tangier because the curds are rinsed and left whole, while ricotta's curds are finer, but in a baked filling they behave almost identically."
      },
      {
        "name": "Extra Veg",
        "icon": "🌱",
        "time": 55,
        "costPP": 58,
        "nutrition": {
          "kcal": 510,
          "protein_g": 24,
          "carbs_g": 54,
          "fat_g": 22
        },
        "feel": "The classic, with sautéed mushrooms folded through the filling for an earthy, meaty depth — proof a veg dish can feel hearty.",
        "ingredients": [
          {
            "n": "cannelloni tubes",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "ricotta",
            "pp": 70,
            "u": "g"
          },
          {
            "n": "baby spinach",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "mushrooms",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "tomato passata",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "mozzarella",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 10,
            "u": "ml"
          }
        ],
        "method": [
          "Fry the chopped mushrooms in a little oil until golden and any water has cooked off — this stops the filling going soggy.",
          "Wilt and squeeze the spinach dry, chop, and mix with the mushrooms, ricotta, parmesan and garlic.",
          "Fill the tubes, lay over a little passata, then cover with the rest and the mozzarella.",
          "Bake at 180°C until tender and golden, 30–35 min."
        ],
        "didYouKnow": "Mushrooms are about 90% water, which is why they shrink so dramatically in the pan. Cooking that water off first concentrates their savoury, almost meaty flavour (umami) and stops them watering down your filling."
      }
    ]
  },
  {
    "id": "sp-pesto-chicken-pasta",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "chicken",
    "name": "Pesto Chicken Pasta",
    "emoji": "🌿",
    "cuisine": "Italian-inspired",
    "time": 25,
    "costPP": 54,
    "feel": "Fragrant basil pesto coating pasta with golden chicken and bursts of sweet cherry tomato — fast, fresh and green.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Cherry tomatoes",
      "Grated parmesan",
      "Toasted pine nuts"
    ],
    "didYouKnow": "Pesto gets its name from how it was traditionally made — \"pestare\" means to pound or crush, in a pestle and mortar (same root word). The basil is bruised, not blended, which keeps the oils from heating up and turning bitter.",
    "nutrition": {
      "kcal": 580,
      "protein_g": 36,
      "carbs_g": 54,
      "fat_g": 26
    },
    "storage": "Keeps 2 days and is lovely cold as a pasta salad the next day. The pesto can dull in colour but the flavour holds. Not suited to freezing.",
    "freezes": false,
    "fridgeDays": 2,
    "versions": [
      {
        "name": "Classic Pesto",
        "icon": "🏆",
        "default": true,
        "time": 25,
        "costPP": 54,
        "nutrition": {
          "kcal": 580,
          "protein_g": 36,
          "carbs_g": 54,
          "fat_g": 26
        },
        "feel": "Fragrant basil pesto coating pasta with golden chicken and bursts of sweet cherry tomato — fast, fresh and green.",
        "ingredients": [
          {
            "n": "chicken breast",
            "pp": 130,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "basil pesto",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "cherry tomatoes",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 10,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the pasta until just tender, saving a mug of pasta water before draining.",
          "Season the sliced chicken and sear in the oil over medium-high heat until golden and cooked through, 5–6 min.",
          "Add the halved cherry tomatoes and warm just until they start to soften.",
          "Take the pan OFF the heat, then stir in the pesto with the drained pasta and a splash of pasta water — adding pesto off the heat keeps it fresh and green instead of dull and oily."
        ],
        "didYouKnow": "Pesto gets its name from how it was traditionally made — \"pestare\" means to pound or crush, in a pestle and mortar (same root word). The basil is bruised, not blended, which keeps the oils from heating up and turning bitter."
      },
      {
        "name": "Creamy Pesto",
        "icon": "🍃",
        "time": 25,
        "costPP": 56,
        "nutrition": {
          "kcal": 640,
          "protein_g": 36,
          "carbs_g": 54,
          "fat_g": 34
        },
        "feel": "A spoon of cream stirred through the pesto makes it mellow and silky — the version kids tend to fall for.",
        "ingredients": [
          {
            "n": "chicken breast",
            "pp": 130,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "basil pesto",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 50,
            "u": "ml"
          },
          {
            "n": "cherry tomatoes",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 10,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the pasta until just tender, saving a little pasta water.",
          "Sear the seasoned sliced chicken in the oil until golden and cooked through.",
          "Add the cherry tomatoes briefly, then lower the heat and pour in the cream, letting it warm through (don't boil hard or it can split).",
          "Off the heat, stir in the pesto and the drained pasta, loosening with pasta water. The cream softens the pesto's punch into something rounder."
        ],
        "didYouKnow": "Stirring cream into pesto does more than mellow it — the fat in cream carries flavour and coats the tongue, which is why creamy sauces taste richer and \"rounder\" than oily ones, even with less pesto."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 25,
        "costPP": 40,
        "nutrition": {
          "kcal": 560,
          "protein_g": 30,
          "carbs_g": 60,
          "fat_g": 22
        },
        "feel": "A little less chicken, pasta doing the heavy lifting, and pesto stretched with a splash of oil and parmesan — still vivid and green, easy on the pocket.",
        "ingredients": [
          {
            "n": "chicken breast",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 95,
            "u": "g"
          },
          {
            "n": "basil pesto",
            "pp": 22,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 12,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the pasta until just tender, saving plenty of pasta water.",
          "Sear the seasoned sliced chicken in the oil until golden and cooked.",
          "Off the heat, loosen the pesto with a little olive oil and a good splash of starchy pasta water so it stretches and coats everything.",
          "Toss the pasta and chicken through, finishing with parmesan."
        ],
        "didYouKnow": "Starchy pasta water is a cook's secret weapon: the dissolved starch helps oil and pesto cling to the pasta and stretch into a glossy sauce. A few spoonfuls can make a little pesto coat a whole bowl — never tip it all down the drain."
      }
    ]
  },
  {
    "id": "sp-cajun-pasta",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "chicken",
    "name": "One-Pan Cajun Chicken & Sausage Pasta",
    "emoji": "🌶️",
    "cuisine": "Cajun",
    "time": 35,
    "costPP": 32,
    "feel": "Smoky Cajun chicken and sausage in a creamy tomato sauce, with the pasta cooked right in the pan so it drinks up all that flavour. One pot, big reward.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Crusty bread",
      "Grated cheese",
      "Sliced spring onion"
    ],
    "didYouKnow": "Cajun seasoning comes from the Acadian French who settled in Louisiana — \"Cajun\" is a worn-down version of \"Acadian\". The smoky warmth usually comes from paprika and cayenne rather than one fiery chilli, which is why it's deeply flavoured without being blistering.",
    "nutrition": {
      "kcal": 620,
      "protein_g": 34,
      "carbs_g": 64,
      "fat_g": 26
    },
    "storage": "Keeps 3 days; the sauce thickens in the fridge, so loosen with a splash of stock or milk when reheating. Freezes in portions for up to 2 months.",
    "freezes": true,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Creamy Cajun",
        "icon": "🏆",
        "default": true,
        "time": 35,
        "costPP": 32,
        "nutrition": {
          "kcal": 620,
          "protein_g": 34,
          "carbs_g": 64,
          "fat_g": 26
        },
        "feel": "Smoky Cajun chicken and sausage in a creamy tomato sauce, with the pasta cooked right in the pan so it drinks up all that flavour. One pot, big reward.",
        "ingredients": [
          {
            "n": "chicken breast",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "sausage",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 40,
            "u": "ml"
          },
          {
            "n": "tomato",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "Cajun spice",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "stock",
            "pp": 200,
            "u": "ml"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Brown the sliced chicken and sausage with the Cajun spice in the oil over medium-high heat, then lift out — browning is where the smoky flavour builds.",
          "Soften the onion and garlic in the same pan, then add the chopped tomato and let it break down.",
          "Pour in the stock and the dry pasta, stir, and simmer until the pasta is tender and the liquid has reduced to a sauce, 12–15 min — stir now and then so it doesn't stick.",
          "Return the chicken and sausage, stir in the cream, and warm through."
        ],
        "didYouKnow": "Cajun seasoning comes from the Acadian French who settled in Louisiana — \"Cajun\" is a worn-down version of \"Acadian\". The smoky warmth usually comes from paprika and cayenne rather than one fiery chilli, which is why it's deeply flavoured without being blistering."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 35,
        "costPP": 24,
        "nutrition": {
          "kcal": 560,
          "protein_g": 32,
          "carbs_g": 66,
          "fat_g": 16
        },
        "feel": "Chicken only, no sausage, milk in place of cream — the same smoky one-pan comfort, stretched for the whole family.",
        "ingredients": [
          {
            "n": "chicken breast",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 60,
            "u": "ml"
          },
          {
            "n": "tomato",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "Cajun spice",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "stock",
            "pp": 220,
            "u": "ml"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Brown the sliced chicken with the Cajun spice, then lift out.",
          "Soften the onion and garlic, add the tomato and let it break down.",
          "Add the stock and dry pasta and simmer until the pasta is tender and the liquid reduced, 12–15 min.",
          "Return the chicken and stir in the milk to make it creamy — keep the heat gentle so the milk doesn't split."
        ],
        "didYouKnow": "A splash of milk can stand in for cream in a tomato sauce, but it needs gentle heat — the acid in tomatoes can curdle milk if it boils hard. Adding it at the end, off a rolling boil, keeps it smooth."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 25,
        "costPP": 30,
        "nutrition": {
          "kcal": 640,
          "protein_g": 28,
          "carbs_g": 64,
          "fat_g": 32
        },
        "feel": "Smoked sausage does the flavour work so you skip browning chicken — everything simmered together for a fiery weeknight bowl in 25 minutes.",
        "ingredients": [
          {
            "n": "smoked sausage",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 40,
            "u": "ml"
          },
          {
            "n": "tomato",
            "pp": 80,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "Cajun spice",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "stock",
            "pp": 200,
            "u": "ml"
          },
          {
            "n": "olive oil",
            "pp": 6,
            "u": "ml"
          }
        ],
        "method": [
          "Brown the sliced smoked sausage with the Cajun spice — it's already cooked, so it just needs colour and a minute to release its smoky fat.",
          "Soften the onion and garlic, add the tomato, then the stock and dry pasta.",
          "Simmer until the pasta is tender and saucy, 12–15 min.",
          "Stir in the cream and warm through."
        ],
        "didYouKnow": "Smoked sausage is already fully cooked, so it only needs warming and a quick browning to wake up its flavour. That's why it's the fastest protein for a weeknight pan — no worrying whether it's cooked through."
      }
    ]
  },
  {
    "id": "sp-carbonara",
    "cat": "pastapizza",
    "diet": "meat",
    "protein": "pork",
    "name": "Spaghetti Carbonara",
    "emoji": "🥓",
    "cuisine": "Italian",
    "time": 25,
    "costPP": 49,
    "feel": "The real thing — no cream, ever. Just egg, parmesan and pasta water whipped into a glossy sauce by the heat of the spaghetti itself, with crisp pork and a storm of black pepper.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Black pepper",
      "Grated parmesan",
      "A glass of white"
    ],
    "didYouKnow": "Authentic carbonara contains no cream — Romans would be appalled. The creaminess is an illusion made by egg and starchy pasta water whisked together off the heat. The dish only appeared after World War II, possibly when Italian cooks met American soldiers' bacon and eggs.",
    "nutrition": {
      "kcal": 680,
      "protein_g": 30,
      "carbs_g": 64,
      "fat_g": 32
    },
    "storage": "Carbonara is a fresh-from-the-pan dish — the egg sauce sets if it sits and turns claggy when reheated. Best eaten immediately; not suited to keeping or freezing.",
    "freezes": false,
    "fridgeDays": 1,
    "versions": [
      {
        "name": "Roman Classic",
        "icon": "🏆",
        "default": true,
        "time": 25,
        "costPP": 49,
        "nutrition": {
          "kcal": 680,
          "protein_g": 30,
          "carbs_g": 64,
          "fat_g": 32
        },
        "feel": "The real thing — no cream, ever. Just egg, parmesan and pasta water whipped into a glossy sauce by the heat of the spaghetti itself, with crisp pork and a storm of black pepper.",
        "ingredients": [
          {
            "n": "spaghetti",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "streaky bacon",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "egg",
            "pp": 1,
            "u": "egg"
          },
          {
            "n": "parmesan",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "black pepper",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Get the spaghetti boiling in well-salted water. Fry the chopped bacon slowly until the fat renders and it crisps — no oil needed.",
          "In a bowl, beat the egg with most of the grated parmesan and a big grind of black pepper into a paste.",
          "Save a mug of the starchy pasta water, then drain the spaghetti and tip it into the bacon pan, OFF the heat.",
          "Working fast, pour in the egg mix and toss hard, adding splashes of hot pasta water — the residual heat cooks the egg into a silky sauce. The pan MUST be off the heat or you get scrambled egg.",
          "Loosen with more pasta water until glossy and serve at once with extra parmesan and pepper."
        ],
        "didYouKnow": "Authentic carbonara contains no cream — Romans would be appalled. The creaminess is an illusion made by egg and starchy pasta water whisked together off the heat. The dish only appeared after World War II, possibly when Italian cooks met American soldiers' bacon and eggs."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 25,
        "costPP": 36,
        "nutrition": {
          "kcal": 640,
          "protein_g": 28,
          "carbs_g": 64,
          "fat_g": 28
        },
        "feel": "The same egg-and-pepper magic with everyday streaky bacon and a little less cheese — proof you don't need fancy ingredients for a restaurant trick.",
        "ingredients": [
          {
            "n": "spaghetti",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "streaky bacon",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "egg",
            "pp": 1,
            "u": "egg"
          },
          {
            "n": "parmesan",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "black pepper",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Boil the spaghetti. Fry the chopped bacon slowly until crisp.",
          "Beat the egg with the parmesan and plenty of black pepper.",
          "Save a mug of pasta water, drain, and tip the spaghetti into the bacon pan OFF the heat.",
          "Pour in the egg mix and toss fast with splashes of pasta water until glossy. Serve at once."
        ],
        "didYouKnow": "The name comes from \"carbonaro\", Italian for a charcoal burner — one story says it was the hearty food of charcoal workers in the Apennine mountains, and that the heavy black pepper is meant to echo flecks of coal dust."
      }
    ]
  },
  {
    "id": "sp-feta-tomato-pasta",
    "cat": "pastapizza",
    "diet": "veg",
    "protein": "veg",
    "name": "Baked Feta & Tomato Pasta",
    "emoji": "🧀",
    "cuisine": "Mediterranean",
    "time": 35,
    "costPP": 40,
    "feel": "A whole block of feta baked in the middle of sweet cherry tomatoes until soft and creamy, then smashed into a sauce and tossed with pasta. The famous viral one — and worth the hype.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Crusty bread",
      "Black olives",
      "Fresh basil"
    ],
    "didYouKnow": "This dish went so viral in 2021 that shops in Finland sold out of feta entirely — the original \"uunifetapasta\" had been a Finnish food-blogger favourite for years before the internet found it. Baking cheese until it melts into a sauce is the whole trick.",
    "nutrition": {
      "kcal": 540,
      "protein_g": 18,
      "carbs_g": 66,
      "fat_g": 22
    },
    "storage": "Keeps 2 days and is nice cold the next day, but best made fresh — the baked feta sauce is at its creamiest straight from the oven. Not suited to freezing.",
    "freezes": false,
    "fridgeDays": 2,
    "versions": [
      {
        "name": "Classic Baked Feta",
        "icon": "🏆",
        "default": true,
        "time": 35,
        "costPP": 40,
        "nutrition": {
          "kcal": 540,
          "protein_g": 18,
          "carbs_g": 66,
          "fat_g": 22
        },
        "feel": "A whole block of feta baked in the middle of sweet cherry tomatoes until soft and creamy, then smashed into a sauce and tossed with pasta. The famous viral one — and worth the hype.",
        "ingredients": [
          {
            "n": "feta",
            "pp": 70,
            "u": "g"
          },
          {
            "n": "cherry tomatoes",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 15,
            "u": "ml"
          },
          {
            "n": "fresh basil",
            "pp": 4,
            "u": "g"
          }
        ],
        "method": [
          "Sit the block of feta in the middle of an oven dish, pile the cherry tomatoes and whole garlic cloves around it, and drizzle everything generously with olive oil.",
          "Bake at 200°C until the tomatoes burst and collapse and the feta is soft and golden at the edges, about 25 min.",
          "Meanwhile boil the pasta until just tender, saving a little pasta water.",
          "Squash the soft garlic out of its skins, then mash the feta and burst tomatoes together into a creamy sauce. Toss the pasta through with a splash of pasta water and the torn basil."
        ],
        "didYouKnow": "This dish went so viral in 2021 that shops in Finland sold out of feta entirely — the original \"uunifetapasta\" had been a Finnish food-blogger favourite for years before the internet found it. Baking cheese until it melts into a sauce is the whole trick."
      },
      {
        "name": "Spicy",
        "icon": "🌶️",
        "time": 35,
        "costPP": 42,
        "nutrition": {
          "kcal": 545,
          "protein_g": 18,
          "carbs_g": 66,
          "fat_g": 22
        },
        "feel": "The same creamy baked feta, lifted with chilli flakes and a little garlic heat — a gentle warmth that cuts through the richness.",
        "ingredients": [
          {
            "n": "feta",
            "pp": 70,
            "u": "g"
          },
          {
            "n": "cherry tomatoes",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "chilli flakes",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 15,
            "u": "ml"
          },
          {
            "n": "fresh basil",
            "pp": 4,
            "u": "g"
          }
        ],
        "method": [
          "Sit the feta in a dish, surround with cherry tomatoes and garlic, scatter over the chilli flakes and drizzle with oil.",
          "Bake at 200°C until the tomatoes burst and the feta softens, about 25 min.",
          "Boil the pasta until just tender, saving a little water.",
          "Mash the feta, tomatoes and squeezed-out garlic into a sauce, then toss the pasta through with a splash of pasta water and the basil."
        ],
        "didYouKnow": "Chilli heat comes from a compound called capsaicin, which doesn't dissolve in water but loves fat — which is exactly why a little chilli works so well in this rich, oily, cheesy sauce: the fat carries the warmth evenly through every bite."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 35,
        "costPP": 30,
        "nutrition": {
          "kcal": 510,
          "protein_g": 16,
          "carbs_g": 68,
          "fat_g": 17
        },
        "feel": "Tinned tomatoes doing some of the work alongside a smaller piece of feta — the same creamy, tangy bowl for less.",
        "ingredients": [
          {
            "n": "feta",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "cherry tomatoes",
            "pp": 60,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 95,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 12,
            "u": "ml"
          },
          {
            "n": "fresh basil",
            "pp": 4,
            "u": "g"
          }
        ],
        "method": [
          "Sit the feta in a dish with the cherry tomatoes, garlic and a little of the tinned tomatoes around it, and drizzle with oil.",
          "Bake at 200°C until soft and bubbling, about 25 min.",
          "Boil the pasta until just tender, saving a little water.",
          "Stir the rest of the tinned tomatoes into the baked feta and tomatoes, mash into a sauce, and toss the pasta through with basil."
        ],
        "didYouKnow": "A little feta goes a long way because it's brined — stored in salty water — which concentrates its flavour far beyond its size. Even a small block seasons a whole dish, so you can stretch it with tinned tomatoes without losing the tang."
      }
    ]
  },
  {
    "id": "sp-pumpkin-sage-pasta",
    "cat": "pastapizza",
    "diet": "veg",
    "protein": "veg",
    "name": "Creamy Pumpkin & Sage Rigatoni",
    "emoji": "🎃",
    "cuisine": "Italian-inspired",
    "time": 35,
    "costPP": 36,
    "feel": "Velvety roasted pumpkin and crispy sage in a creamy sauce clinging to rigatoni — autumn comfort in a bowl, sweet and savoury at once.",
    "goesWith": [
      "Green salad",
      "Garlic bread",
      "Toasted pumpkin seeds",
      "Grated parmesan",
      "Crispy sage"
    ],
    "didYouKnow": "Sage was once valued more as medicine than food — its name comes from the Latin \"salvere\", to heal or be well (the same root as \"salvation\"). Frying it in butter for a few seconds turns the leaves crisp and nutty, mellowing their strong, almost medicinal punch.",
    "nutrition": {
      "kcal": 520,
      "protein_g": 16,
      "carbs_g": 70,
      "fat_g": 20
    },
    "storage": "Keeps 2 days; reheat gently with a splash of milk or pasta water to loosen the sauce. The pumpkin purée freezes well on its own for up to 2 months.",
    "freezes": false,
    "fridgeDays": 2,
    "versions": [
      {
        "name": "Roasted Pumpkin & Sage",
        "icon": "🏆",
        "default": true,
        "time": 35,
        "costPP": 36,
        "nutrition": {
          "kcal": 520,
          "protein_g": 16,
          "carbs_g": 70,
          "fat_g": 20
        },
        "feel": "Velvety roasted pumpkin and crispy sage in a creamy sauce clinging to rigatoni — autumn comfort in a bowl, sweet and savoury at once.",
        "ingredients": [
          {
            "n": "pumpkin",
            "pp": 150,
            "u": "g"
          },
          {
            "n": "rigatoni",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 40,
            "u": "ml"
          },
          {
            "n": "fresh sage",
            "pp": 3,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 20,
            "u": "g"
          },
          {
            "n": "butter",
            "pp": 15,
            "u": "g"
          }
        ],
        "method": [
          "Roast the cubed pumpkin with a little oil at 200°C until soft and caramelised at the edges, 25–30 min — roasting, not boiling, is what gives it deep, sweet flavour.",
          "Mash or blend the roasted pumpkin with a little pasta water and the garlic into a smooth purée.",
          "Crisp the sage leaves in the butter for a minute until they smell nutty, then lift them out.",
          "Boil the rigatoni until just tender. Toss it with the pumpkin purée, cream and parmesan, loosening with pasta water, and scatter the crispy sage on top."
        ],
        "didYouKnow": "Sage was once valued more as medicine than food — its name comes from the Latin \"salvere\", to heal or be well (the same root as \"salvation\"). Frying it in butter for a few seconds turns the leaves crisp and nutty, mellowing their strong, almost medicinal punch."
      },
      {
        "name": "Budget",
        "icon": "💰",
        "time": 30,
        "costPP": 26,
        "nutrition": {
          "kcal": 490,
          "protein_g": 15,
          "carbs_g": 72,
          "fat_g": 15
        },
        "feel": "Butternut instead of pumpkin, milk in place of cream, and the same silky, comforting orange sauce — gentle on the budget, big on flavour.",
        "ingredients": [
          {
            "n": "butternut",
            "pp": 160,
            "u": "g"
          },
          {
            "n": "pasta",
            "pp": 95,
            "u": "g"
          },
          {
            "n": "milk",
            "pp": 80,
            "u": "ml"
          },
          {
            "n": "fresh sage",
            "pp": 3,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "butter",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 8,
            "u": "g"
          }
        ],
        "method": [
          "Roast the cubed butternut until soft and caramelised, then mash with a little of its cooking water into a purée.",
          "Crisp the sage in the butter, lift out, then stir the flour into the buttery pan and cook 1 min.",
          "Whisk in the milk to make a light sauce, then stir in the butternut purée and parmesan.",
          "Toss the cooked pasta through, loosening with pasta water, and top with the crispy sage."
        ],
        "didYouKnow": "Butternut and pumpkin are so close they're often used interchangeably — both are winter squash. Butternut is usually sweeter and less watery, which actually makes it easier to roast into a smooth, concentrated purée."
      },
      {
        "name": "Quick",
        "icon": "⚡",
        "time": 20,
        "costPP": 34,
        "nutrition": {
          "kcal": 530,
          "protein_g": 16,
          "carbs_g": 68,
          "fat_g": 22
        },
        "feel": "Skip the oven — pumpkin softened fast in the pan and blended creamy, on the table in twenty minutes.",
        "ingredients": [
          {
            "n": "pumpkin",
            "pp": 150,
            "u": "g"
          },
          {
            "n": "rigatoni",
            "pp": 90,
            "u": "g"
          },
          {
            "n": "fresh cream",
            "pp": 40,
            "u": "ml"
          },
          {
            "n": "fresh sage",
            "pp": 3,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 8,
            "u": "g"
          },
          {
            "n": "parmesan",
            "pp": 18,
            "u": "g"
          },
          {
            "n": "butter",
            "pp": 15,
            "u": "g"
          },
          {
            "n": "stock",
            "pp": 100,
            "u": "ml"
          }
        ],
        "method": [
          "Boil the rigatoni until just tender. Meanwhile cut the pumpkin small so it cooks fast.",
          "Sauté the pumpkin and garlic in the butter, add the stock, cover and simmer until very soft, about 10 min.",
          "Mash or blend smooth, then stir in the cream and parmesan.",
          "Crisp the sage in a little extra butter, toss the sauce through the pasta, and scatter the sage on top."
        ],
        "didYouKnow": "Cutting pumpkin into smaller pieces doesn't just speed cooking — more cut surface means more water escapes as steam, so it softens and concentrates faster. A big chunk would still be firm in the middle when small pieces are already meltingly soft."
      }
    ]
  },
  {id:'sp-creamy-gnocchi', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Grated parmesan'], diet:'veg', protein:'veg', name:'Gnocchi alla Boscaiola', photoName:'Creamy Spinach & Mushroom Gnocchi', emoji:'🥔', cuisine:'Italian', time:25, costPP:61,
    feel:'Pillowy gnocchi tumbled through a silky garlic-cream sauce with earthy mushrooms and wilted spinach — comfort food that comes together in one pan.',
    ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'onion',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'butter',pp:10,u:'g'}],
    method:['Boil the gnocchi in salted water until they float, about 2 minutes, then scoop out (save a little of the water).','In the same pan, soften the onion in butter, then add the sliced mushrooms and cook until golden and any water has cooked off.','Add the garlic, then the cream, and let it bubble into a sauce.','Stir in the spinach until just wilted, then fold the gnocchi back through with the parmesan, loosening with a splash of the cooking water.','Season well and serve at once.'],
    tip:'Make your own pillowy gnocchi from scratch — see Potato Gnocchi in Sides & Basics (it freezes, so a batch goes a long way). For extra texture, pan-fry the boiled gnocchi in a little butter until golden before saucing.',
    didYouKnow:'Anything called "alla Fiorentina" — Florence-style — contains spinach, and the name traces back to Catherine de\' Medici of Florence, who so loved spinach that she had it served at every meal after she married into the French court in the 1500s. She is often credited with shaping French cuisine itself.',
    nutrition:{kcal:480,protein_g:14,carbs_g:62,fat_g:20}, storage:'Best fresh; the cream sauce can split on reheating, so warm gently with a splash of milk.',
    versions:[
      {name:'Creamy classic',icon:'🥔',default:true,time:25,costPP:61,nutrition:{kcal:480,protein_g:14,carbs_g:62,fat_g:20},feel:'Garlic cream, mushrooms and spinach — the everyday version.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'onion',pp:30,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'butter',pp:10,u:'g'}],method:['Boil the gnocchi until they float; scoop out, saving a little water.','Soften the onion in butter, add mushrooms and brown.','Add garlic, then cream, and bubble into a sauce.','Wilt the spinach, fold the gnocchi back through with parmesan and a splash of water.','Season and serve.']},
      {name:'Rosa (tomato-cream)',icon:'🍅',time:25,costPP:56,nutrition:{kcal:470,protein_g:14,carbs_g:64,fat_g:18},feel:'A blush of tomato through the cream — a rosa sauce that is a little lighter and brighter.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'baby spinach',pp:40,u:'g'},{n:'tomato passata',pp:60,u:'g'},{n:'cream',pp:30,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'butter',pp:10,u:'g'}],method:['Boil the gnocchi until they float; scoop out.','Brown the mushrooms in butter, add garlic.','Add the passata and simmer, then stir in the cream for a rosa sauce.','Wilt the spinach, fold the gnocchi back with parmesan.','Season and serve.']},
      {name:'Garlic butter (lighter)',icon:'🧄',time:20,costPP:59,nutrition:{kcal:420,protein_g:12,carbs_g:62,fat_g:14},feel:'No cream — just garlic butter, mushrooms and spinach. Lighter but still rich.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:20,u:'g'},{n:'lemon',pp:8,u:'g'}],method:['Boil the gnocchi until they float; scoop out, saving water.','Brown the mushrooms in butter, then add plenty of garlic.','Wilt the spinach, then fold the gnocchi through with parmesan and a squeeze of lemon, loosening with the cooking water.','Season generously and serve.']},
      {name:'With bacon',icon:'🥓',time:25,costPP:67,nutrition:{kcal:560,protein_g:18,carbs_g:62,fat_g:28},feel:'Crispy bacon adds a salty, smoky crunch through the creamy gnocchi.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:15,u:'g'}],method:['Boil the gnocchi until they float; scoop out.','Crisp the chopped bacon, then brown the mushrooms in the bacon fat.','Add garlic and cream and bubble into a sauce.','Wilt the spinach, fold the gnocchi and most of the bacon back through with parmesan.','Scatter the rest of the bacon over to serve.']}
    ]},
  {id:'sp-gnocchi-sorrentina', cat:'pastapizza', goesWith:['Green salad','Garlic bread','A glass of red'], diet:'veg', protein:'veg', name:'Gnocchi alla Sorrentina', emoji:'🧀', cuisine:'Italian', time:35, costPP:53,
    feel:'Gnocchi baked in a bright tomato sauce under a blanket of melting mozzarella until the top crisps and the inside stays soft — the Amalfi coast in a dish.',
    ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'tomato passata',pp:120,u:'g'},{n:'mozzarella',pp:50,u:'g'},{n:'fresh basil',pp:4,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the garlic in olive oil, add the passata and a few torn basil leaves, and simmer 10 minutes into a bright sauce, seasoned with salt and pepper.','Boil the gnocchi until they float, then drain and fold into the sauce.','Tip into an oven dish, tear over the mozzarella and scatter with parmesan.','Bake at 200°C until bubbling and the top is golden and crisp, about 15 minutes.','Finish with fresh basil and serve straight from the dish.'],
    tip:'Make your own gnocchi (see Potato Gnocchi in Sides & Basics) and your own Napoletana sauce (Basic Sauces) — this dish is the perfect home for both. Use a good melting mozzarella, not the pre-grated pizza kind, for proper molten strands.',
    didYouKnow:'This dish is named after Sorrento, on the cliffs above the Bay of Naples, where it is traditionally baked in individual terracotta dishes with local San Marzano tomatoes and fior di latte mozzarella. The baking is the whole point — it gives you crisp, caramelised edges over a soft, saucy middle.',
    nutrition:{kcal:460,protein_g:16,carbs_g:66,fat_g:15}, storage:'Keeps 3 days; reheats beautifully and even freezes well before baking.',
    versions:[
      {name:'Classic',icon:'🧀',default:true,time:35,costPP:53,nutrition:{kcal:460,protein_g:16,carbs_g:66,fat_g:15},feel:'Tomato, basil and mozzarella, baked — the original.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'tomato passata',pp:120,u:'g'},{n:'mozzarella',pp:50,u:'g'},{n:'fresh basil',pp:4,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Simmer a garlicky passata-and-basil sauce 10 minutes.','Boil the gnocchi until they float; fold into the sauce.','Tip into a dish, top with mozzarella and parmesan.','Bake at 200°C 15 minutes until golden and bubbling.','Finish with basil.']},
      {name:'Arrabbiata (spicy)',icon:'🌶️',time:35,costPP:51,nutrition:{kcal:470,protein_g:16,carbs_g:66,fat_g:15},feel:'The same baked comfort with a chilli kick through the sauce.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'tomato passata',pp:120,u:'g'},{n:'mozzarella',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chilli',pp:3,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Soften garlic and chilli in oil, add passata and simmer 10 minutes.','Boil the gnocchi until they float; fold into the sauce.','Top with mozzarella and parmesan; bake at 200°C 15 minutes.','Finish with basil or parsley.']},
      {name:'Four cheese',icon:'🧈',time:35,costPP:59,nutrition:{kcal:540,protein_g:20,carbs_g:64,fat_g:24},feel:'For the cheese-lovers — mozzarella, parmesan, blue cheese and cream stirred through.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'tomato passata',pp:100,u:'g'},{n:'mozzarella',pp:50,u:'g'},{n:'blue cheese',pp:20,u:'g'},{n:'cream',pp:25,u:'ml'},{n:'parmesan',pp:15,u:'g'},{n:'garlic',pp:5,u:'g'}],method:['Simmer a garlicky passata sauce, then stir in a little cream.','Boil the gnocchi until they float; fold into the sauce.','Top with mozzarella, dot with blue cheese and scatter parmesan.','Bake at 200°C 15 minutes until molten and golden.']}
    ]},
  {id:'sp-brown-butter-gnocchi', cat:'pastapizza', goesWith:['Green salad','Crusty bread','Shaved parmesan'], diet:'veg', protein:'veg', name:'Gnocchi di Zucca al Burro e Salvia', photoName:'Brown Butter & Sage Butternut Gnocchi', emoji:'🧈', cuisine:'Italian', time:20, costPP:43,
    feel:'Gnocchi crisped in nutty brown butter with frizzled sage and a storm of parmesan — three ingredients, ten minutes, pure magic. The classic partner for butternut gnocchi.',
    ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'butter',pp:30,u:'g'},{n:'fresh sage',pp:3,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'garlic',pp:4,u:'g'}],
    method:['Boil the gnocchi until they float, then drain well.','Melt the butter in a wide pan and let it foam, then keep cooking until it smells nutty and turns golden-brown — this is beurre noisette.','Add the sage leaves and let them crisp, then the garlic for a few seconds.','Add the drained gnocchi and toss until coated and lightly golden at the edges.','Off the heat, toss through the parmesan and plenty of black pepper, and serve.'],
    tip:'This sauce was made for the Butternut Gnocchi in Sides & Basics — the nutty butter against the sweet squash is unbeatable. Watch the butter closely; it goes from golden to burnt in seconds.',
    didYouKnow:'Brown butter is called beurre noisette in French — "hazelnut butter" — for the nutty smell and colour it takes on as the milk solids gently toast. And sage (salvia) gets its name from the Latin salvere, "to be saved": it was one of the most prized medicinal herbs of the medieval garden, believed to cure almost anything.',
    nutrition:{kcal:440,protein_g:12,carbs_g:60,fat_g:18}, storage:'Best fresh and hot, straight from the pan.',
    versions:[
      {name:'Classic',icon:'🧈',default:true,time:20,costPP:43,nutrition:{kcal:440,protein_g:12,carbs_g:60,fat_g:18},feel:'Brown butter, sage, parmesan — perfection in three ingredients.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'butter',pp:30,u:'g'},{n:'fresh sage',pp:3,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'garlic',pp:4,u:'g'}],method:['Boil the gnocchi until they float; drain.','Brown the butter until nutty and golden.','Crisp the sage, add garlic.','Toss the gnocchi until golden at the edges.','Off the heat, toss through parmesan and black pepper.']},
      {name:'With crispy bacon',icon:'🥓',time:20,costPP:51,nutrition:{kcal:520,protein_g:16,carbs_g:60,fat_g:26},feel:'Crispy bacon bits add salt and crunch to the nutty butter.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'butter',pp:25,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'fresh sage',pp:3,u:'g'},{n:'parmesan',pp:20,u:'g'}],method:['Boil the gnocchi until they float; drain.','Crisp the chopped bacon, then add the butter and brown it.','Crisp the sage, toss in the gnocchi until golden.','Off the heat, toss through parmesan and pepper.','Scatter over the bacon to serve.']},
      {name:'With toasted pine nuts',icon:'🌰',time:20,costPP:54,nutrition:{kcal:500,protein_g:14,carbs_g:60,fat_g:24},feel:'Toasted pine nuts bring extra nuttiness and a delicate crunch.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'butter',pp:30,u:'g'},{n:'fresh sage',pp:3,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'pine nuts',pp:10,u:'g'}],method:['Toast the pine nuts dry until golden; set aside.','Boil the gnocchi until they float; drain.','Brown the butter, crisp the sage.','Toss the gnocchi until golden, then off the heat add parmesan and pepper.','Scatter over the pine nuts.']},
      {name:'Blue cheese',icon:'🧀',time:20,costPP:41,nutrition:{kcal:520,protein_g:16,carbs_g:60,fat_g:26},feel:'A little blue cheese melted in turns the brown butter into a bold, savoury sauce.',ingredients:[{n:'gnocchi',pp:200,u:'g'},{n:'butter',pp:25,u:'g'},{n:'blue cheese',pp:30,u:'g'},{n:'fresh sage',pp:3,u:'g'},{n:'parmesan',pp:10,u:'g'}],method:['Boil the gnocchi until they float; drain, saving a splash of water.','Brown the butter and crisp the sage.','Toss in the gnocchi, then crumble in the blue cheese with a splash of the cooking water to make a sauce.','Off the heat, toss through parmesan and pepper.']}
    ]},
  {id:'sp-tagliatelle-ragu', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Grated parmesan','A glass of red'], diet:'meat', protein:'beef', name:'Tagliatelle al Ragù alla Bolognese', photoName:'Tagliatelle al Ragu', emoji:'🍝', cuisine:'Italian', time:150, costPP:42,
    feel:'The real Bolognese — a deep, slow-cooked meat ragù clinging to fresh tagliatelle, never spaghetti. The dish the whole world copies and rarely gets right.',
    ingredients:[{n:'tagliatelle',pp:100,u:'g'},{n:'beef mince',pp:100,u:'g'},{n:'pork mince',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:25,u:'g'},{n:'tomato passata',pp:60,u:'g'},{n:'red wine',pp:30,u:'ml'},{n:'cream',pp:15,u:'ml'},{n:'garlic',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Finely chop the onion, carrot and celery (the soffritto) and soften slowly in oil and a little butter without colouring, about 10 minutes.','Add the beef and pork mince and brown well, breaking up every lump until deeply coloured.','Pour in the red wine and let it cook away, then add the passata and a splash of water.','Simmer as gently as you can, partly covered, for 1½ to 2 hours, topping up with water — the longer and slower, the better. Stir in the cream near the end for silkiness, and season the ragù well with salt and pepper.','Cook the fresh tagliatelle for just 2 to 3 minutes, then toss it through the ragù with a little pasta water and the parmesan so the sauce coats every strand.'],
    tip:'Toss the pasta IN the sauce, never sauce on top of plain pasta — that is the difference between a good and a great plate. Make your own tagliatelle from scratch — see Fresh Egg Pasta in Sides & Basics; the ragù deserves it.',
    didYouKnow:'The real ragù alla Bolognese is so precious to Bologna that the official recipe was registered with the city\'s Chamber of Commerce in 1982 — and it is always served on tagliatelle, never spaghetti. The correct width of a cooked tagliatella is even defined by a golden ribbon kept at the Chamber: exactly one twelve-thousand-two-hundred-and-seventieth of the height of the city\'s Asinelli tower.',
    nutrition:{kcal:620,protein_g:32,carbs_g:66,fat_g:24}, storage:'The ragù keeps 3 days and freezes 3 months — it is even better the next day. Cook fresh pasta to order.',
    versions:[
      {name:'Slow ragù',icon:'🍝',default:true,time:150,costPP:42,nutrition:{kcal:620,protein_g:32,carbs_g:66,fat_g:24},feel:'Beef and pork, soffritto, wine, the full slow simmer — the proper way.',ingredients:[{n:'tagliatelle',pp:100,u:'g'},{n:'beef mince',pp:100,u:'g'},{n:'pork mince',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:25,u:'g'},{n:'tomato passata',pp:60,u:'g'},{n:'red wine',pp:30,u:'ml'},{n:'cream',pp:15,u:'ml'},{n:'garlic',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],method:['Soften the chopped soffritto slowly in oil and butter.','Brown the beef and pork mince well.','Add wine and cook off, then passata and water.','Simmer gently 1½ to 2 hours; stir in cream near the end.','Toss the fresh tagliatelle through the ragù with parmesan and pasta water.']},
      {name:'Quick weeknight',icon:'⚡',time:40,costPP:38,nutrition:{kcal:600,protein_g:30,carbs_g:66,fat_g:22},feel:'All the flavour you can build in 40 minutes — for a school night.',ingredients:[{n:'tagliatelle',pp:100,u:'g'},{n:'beef mince',pp:130,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'tomato passata',pp:80,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'parmesan',pp:15,u:'g'}],method:['Soften the onion and carrot, then brown the mince.','Add garlic, passata and a splash of water.','Simmer hard for 25 to 30 minutes until rich.','Toss the cooked tagliatelle through with parmesan and pasta water.']},
      {name:'White ragù (no tomato)',icon:'🤍',time:120,costPP:38,nutrition:{kcal:600,protein_g:32,carbs_g:64,fat_g:24},feel:'The older, tomato-free ragù bianco — meat, wine, milk and stock, pale and deeply savoury.',ingredients:[{n:'tagliatelle',pp:100,u:'g'},{n:'beef mince',pp:90,u:'g'},{n:'pork mince',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:30,u:'g'},{n:'celery',pp:25,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'full cream milk',pp:60,u:'ml'},{n:'parmesan',pp:15,u:'g'}],method:['Soften the soffritto slowly in butter.','Brown the beef and pork mince well.','Add white wine and cook off, then the milk and a little stock.','Simmer very gently 1½ hours until pale, thick and savoury.','Toss the fresh tagliatelle through with parmesan.']}
    ]},
  {id:'sp-cacio-e-pepe', cat:'pastapizza', goesWith:['Green salad','A glass of white'], diet:'veg', protein:'veg', name:'Tonnarelli Cacio e Pepe', photoName:'Cacio e Pepe', emoji:'🧀', cuisine:'Italian', time:20, costPP:33,
    feel:'Three ingredients — pasta, cheese and pepper — turned into a glossy, peppery, cheese-coated bowl. Roman cucina povera at its most deceptively simple.',
    ingredients:[{n:'tagliatelle',pp:110,u:'g'},{n:'parmesan',pp:35,u:'g'},{n:'black pepper',pp:3,u:'g'},{n:'butter',pp:5,u:'g'}],
    method:['Toast the coarsely cracked black pepper in a dry pan for a few seconds until fragrant.','Cook the pasta in well-salted water until just al dente, saving plenty of the starchy water.','Grate the cheese very finely (use pecorino romano if you can find it) and mix with a little cool pasta water into a paste.','Off the heat or on the lowest flame, toss the drained pasta with the pepper, the cheese paste and splashes of hot pasta water, working fast until it emulsifies into a glossy, clinging sauce.','Serve at once, with more pepper and cheese.'],
    tip:'Make your own fresh pasta — see Fresh Egg Pasta in Sides & Basics — and this humble dish becomes special. The trick is temperature: too hot and the cheese clumps into strings, so pull the pan off the heat before the cheese goes in.',
    didYouKnow:'Cacio e pepe was the food of Roman shepherds — pecorino cheese and dried pasta kept for weeks in the saddlebag, and black pepper, once worth its weight in silver, gave warmth on cold nights in the hills. Just three ingredients, yet it is one of the hardest dishes to get right, because the sauce is a real emulsion of cheese, fat and starchy water.',
    nutrition:{kcal:520,protein_g:20,carbs_g:64,fat_g:18}, storage:'Best fresh and eaten immediately — it waits for no one.',
    versions:[
      {name:'Classic',icon:'🧀',default:true,time:20,costPP:33,nutrition:{kcal:520,protein_g:20,carbs_g:64,fat_g:18},feel:'Pasta, pecorino, pepper — nothing else needed.',ingredients:[{n:'tagliatelle',pp:110,u:'g'},{n:'parmesan',pp:35,u:'g'},{n:'black pepper',pp:3,u:'g'},{n:'butter',pp:5,u:'g'}],method:['Toast the cracked pepper in a dry pan.','Cook the pasta al dente, saving the starchy water.','Mix finely grated cheese with a little cool pasta water into a paste.','Off the heat, toss the pasta with pepper, cheese paste and hot pasta water until glossy.','Serve at once with more pepper.']},
      {name:'With guanciale',icon:'🥓',time:25,costPP:43,nutrition:{kcal:620,protein_g:24,carbs_g:64,fat_g:28},feel:'Add crisp guanciale (or bacon) and it edges towards a gricia — smoky and rich.',ingredients:[{n:'tagliatelle',pp:110,u:'g'},{n:'parmesan',pp:35,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'black pepper',pp:3,u:'g'}],method:['Crisp the chopped bacon (or guanciale) slowly, keeping the rendered fat.','Cook the pasta al dente, saving the water.','Mix grated cheese with cool pasta water into a paste.','Off the heat, toss the pasta with the bacon and its fat, the pepper, cheese paste and hot pasta water until glossy.','Serve with extra pepper.']},
      {name:'Extra peppery',icon:'🌶️',time:20,costPP:36,nutrition:{kcal:520,protein_g:20,carbs_g:64,fat_g:18},feel:'For pepper-lovers — double the toasted black pepper for real warmth.',ingredients:[{n:'tagliatelle',pp:110,u:'g'},{n:'parmesan',pp:35,u:'g'},{n:'black pepper',pp:6,u:'g'},{n:'butter',pp:5,u:'g'}],method:['Toast a generous amount of cracked pepper in a dry pan.','Cook the pasta al dente, saving the water.','Make the cheese paste with cool pasta water.','Off the heat, toss pasta with the pepper, cheese paste and hot water until glossy.','Finish with yet more pepper.']}
    ]},
  {id:'sp-bbq-chicken-pizza', cat:'pastapizza', goesWith:['Coleslaw','Corn on the cob','Green salad'], diet:'meat', protein:'chicken', name:'BBQ Chicken Pizza', emoji:'🍕', cuisine:'American', time:30, costPP:53,
    feel:'Smoky barbecue sauce instead of tomato, tender chicken, sweet red onion and melted cheese — a crowd-pleaser that breaks the rules.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:80,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'fresh coriander',pp:4,u:'g'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Cook the chicken first if raw — pan-fry or grill until just done, then shred or slice (leftover roast or rotisserie chicken is perfect here).','Hand-stretch the base and spread with barbecue sauce instead of tomato.','Scatter over the chicken, thinly sliced red onion and mozzarella.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is crisp and the cheese bubbling.','Finish with fresh coriander and a final drizzle of barbecue sauce.'],
    tip:'The chicken must be cooked before it goes on — the short, hot bake will not cook raw meat through. Use leftover roast or rotisserie chicken to turn this into a 20-minute supper. Make your own base in Sides & Basics to save on cost.',
    didYouKnow:'BBQ chicken pizza was popularised in 1985 by California Pizza Kitchen, whose founders put it on the menu of their very first Beverly Hills restaurant. It was one of the dishes that launched the whole "gourmet" and Californian pizza movement — proof that pizza did not have to mean tomato and pepperoni.',
    nutrition:{kcal:660,protein_g:36,carbs_g:76,fat_g:24}, storage:'Best fresh; reheat in a hot pan or air-fryer.',
    versions:[
      {name:'Classic BBQ',icon:'🍕',default:true,time:30,costPP:53,nutrition:{kcal:660,protein_g:36,carbs_g:76,fat_g:24},feel:'BBQ sauce, chicken, red onion and coriander — the original.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:80,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'fresh coriander',pp:4,u:'g'}],method:['Preheat the stone or tray hot; cook and shred the chicken.','Stretch the base and spread with BBQ sauce.','Top with chicken, red onion and mozzarella.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with coriander and a drizzle of BBQ sauce.']},
      {name:'BBQ chicken & bacon',icon:'🥓',time:30,costPP:59,nutrition:{kcal:740,protein_g:40,carbs_g:76,fat_g:32},feel:'Crispy bacon joins the party — smoky on smoky, the most popular version for a reason.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:70,u:'g'},{n:'bacon',pp:35,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'red onion',pp:30,u:'g'}],method:['Preheat the stone or tray hot; cook the chicken and crisp the bacon.','Stretch the base and spread with BBQ sauce.','Top with chicken, bacon, red onion and mozzarella.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with coriander if you like.']},
      {name:'Spicy BBQ',icon:'🌶️',time:30,costPP:51,nutrition:{kcal:680,protein_g:37,carbs_g:76,fat_g:25},feel:'Sliced fresh chilli and a smoky-hot kick for those who like sweet heat.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:80,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'chilli',pp:5,u:'g'}],method:['Preheat the stone or tray hot; cook and shred the chicken.','Stretch the base; spread with BBQ sauce.','Top with chicken, red onion, sliced chilli and mozzarella.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with coriander and extra chilli.']},
      {name:'BBQ chicken & feta',icon:'🧀',time:30,costPP:55,nutrition:{kcal:680,protein_g:37,carbs_g:76,fat_g:27},feel:'A South African favourite — salty crumbled feta against the sweet smoky sauce.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'bbq sauce',pp:40,u:'g'},{n:'chicken breast',pp:80,u:'g'},{n:'mozzarella',pp:50,u:'g'},{n:'feta',pp:35,u:'g'},{n:'red onion',pp:30,u:'g'}],method:['Preheat the stone or tray hot; cook and shred the chicken.','Stretch the base; spread with BBQ sauce.','Top with chicken, red onion and mozzarella; crumble over the feta.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with coriander.']}
    ]},
  {id:'sp-regina-pizza', cat:'pastapizza', goesWith:['Napoletana Sauce','Green salad','Garlic bread'], diet:'meat', protein:'pork', name:'Regina Pizza (Ham & Mushroom)', emoji:'🍕', cuisine:'Italian', time:30, costPP:52,
    feel:'Ham and mushroom on tomato and mozzarella — the timeless pizzeria classic that has never gone out of style.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base and spread thinly with Napoletana sauce (passata seasoned with olive oil, garlic, oregano and salt — tap the link for the full recipe).','Scatter over the mozzarella, then the torn ham and thinly sliced mushrooms.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is crisp, the mushrooms golden and the cheese bubbling.','Slice and serve hot.'],
    tip:'Slice the mushrooms thinly so they cook through and crisp rather than steam and weep water onto the base. Make your own base and sauce in Sides & Basics to bring the cost right down.',
    didYouKnow:'"Regina" means queen — and like the Margherita, this combination is said to honour Italian royalty. Ham-and-mushroom became the default "fancy" pizza across post-war Europe, the standard against which a pizzeria was quietly judged. In South Africa it is still one of the most-ordered pizzas of all.',
    nutrition:{kcal:640,protein_g:34,carbs_g:74,fat_g:24}, storage:'Best fresh; reheat in a hot pan or air-fryer.',
    versions:[
      {name:'Regina',icon:'🍕',default:true,time:30,costPP:52,nutrition:{kcal:640,protein_g:34,carbs_g:74,fat_g:24},feel:'Ham and mushroom — the queen of classics.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with Napoletana sauce (passata seasoned with olive oil, garlic, oregano and salt — tap the link for the full recipe).','Top with mozzarella, ham and thinly sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Slice and serve hot.']},
      {name:'Hawaiian',icon:'🍍',time:30,costPP:48,nutrition:{kcal:660,protein_g:33,carbs_g:80,fat_g:23},feel:'Ham and pineapple — endlessly argued over, eternally ordered. Sweet, salty and unapologetic.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'pineapple',pp:60,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with passata.','Top with mozzarella, ham and well-drained pineapple chunks (drain them well or they water the base down).','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes until the pineapple edges caramelise.','Slice and serve.']},
      {name:'Ham, bacon & mushroom',icon:'🥓',time:30,costPP:57,nutrition:{kcal:720,protein_g:38,carbs_g:74,fat_g:32},feel:'Double the smoke — ham and crispy bacon with earthy mushrooms.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:35,u:'g'},{n:'bacon',pp:30,u:'g'},{n:'mushrooms',pp:45,u:'g'}],method:['Preheat the stone or tray hot; crisp the bacon first.','Stretch the base; spread thinly with passata.','Top with mozzarella, ham, bacon and sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Slice and serve hot.']},
      {name:'Capricciosa',icon:'🫒',time:30,costPP:54,nutrition:{kcal:700,protein_g:36,carbs_g:74,fat_g:30},feel:'The "capricious" pizza — ham, mushroom, olives and a baked egg cracked into the centre. A whole meal on a base.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:60,u:'g'},{n:'ham',pp:35,u:'g'},{n:'mushrooms',pp:40,u:'g'},{n:'black olives',pp:20,u:'g'},{n:'large eggs',pp:1,u:'egg'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with passata and scatter mozzarella.','Top with ham, mushrooms and olives, leaving a clear space in the centre.','Crack the egg into the centre, then bake — WOOD-FIRED 90 sec / HOME OVEN (240 to 260°C) 9 to 12 minutes until the white is set but the yolk still soft.','Slice through the egg so it runs over each piece.']}
    ]},
  {id:'sp-mediterranean-pizza', cat:'pastapizza', goesWith:['Napoletana Sauce','Green salad','Tzatziki','Garlic bread'], diet:'veg', protein:'veg', name:'Mediterranean Veg Pizza', emoji:'🍕', cuisine:'Mediterranean', time:30, costPP:54,
    feel:'Feta, peppers, olives and red onion on a crisp base — sunshine food, proof that a meat-free pizza can be the best one on the table.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:40,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'black olives',pp:25,u:'g'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base and spread thinly with passata.','Scatter over the mozzarella, then the sliced peppers, red onion and olives.','Crumble over the feta — it holds its shape and goes lightly golden.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is crisp and the veg lightly charred.','Finish with a drizzle of olive oil and fresh herbs if you have them.'],
    tip:'Slice the vegetables thinly so they soften in the short bake. Make your own base and Napoletana sauce in Sides & Basics. As always, the hotter the oven the better — 180°C will leave the base pale and soft.',
    didYouKnow:'Olives and the trees that bear them are among the oldest cultivated foods on earth — some living olive trees in the Mediterranean are over 1,000 years old, and a few are claimed to be 2,000 or more. The bitter raw olive is inedible; every olive you eat has been cured in brine, oil or salt to draw the bitterness out.',
    nutrition:{kcal:580,protein_g:22,carbs_g:74,fat_g:24}, storage:'Best fresh; lovely cold the next day too.',
    versions:[
      {name:'Mediterranean',icon:'🫒',default:true,time:30,costPP:54,nutrition:{kcal:580,protein_g:22,carbs_g:74,fat_g:24},feel:'Feta, peppers, olives, red onion — sunshine on a base.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:40,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'black olives',pp:25,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with Napoletana sauce (passata seasoned with olive oil, garlic and salt) and scatter mozzarella.','Top with peppers, red onion and olives; crumble over feta.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with olive oil and fresh herbs.']},
      {name:'Funghi (mushroom)',icon:'🍄',time:30,costPP:51,nutrition:{kcal:560,protein_g:22,carbs_g:74,fat_g:22},feel:'A simple, earthy mushroom-and-garlic pizza — let good mushrooms be the star.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'fresh parsley',pp:3,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with garlicky passata.','Top with mozzarella and a generous layer of thinly sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until the mushrooms are golden.','Finish with chopped parsley.']},
      {name:'Four cheese',icon:'🧀',time:30,costPP:62,nutrition:{kcal:680,protein_g:30,carbs_g:72,fat_g:34},feel:'Quattro formaggi — mozzarella, feta, parmesan and blue cheese melted together, no sauce needed. Rich and unashamed.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:30,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'blue cheese',pp:25,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray hot.','Stretch the base; brush lightly with olive oil instead of sauce.','Scatter over the mozzarella and feta, dot with blue cheese and shave over parmesan.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 11 minutes until molten and golden.','A drizzle of honey over the top is a wonderful finish, if you like.']},
      {name:'Roast veg',icon:'🌶️',time:40,costPP:45,nutrition:{kcal:560,protein_g:20,carbs_g:74,fat_g:22},feel:'Peppers, courgette and brinjal roasted first until sweet and smoky, then piled on — deeper and richer than raw veg.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'courgette',pp:35,u:'g'},{n:'brinjal',pp:35,u:'g'},{n:'olive oil',pp:10,u:'ml'}],method:['Toss the sliced peppers, courgette and brinjal in olive oil and roast at 220°C until soft and caramelised; this can be done ahead.','Preheat the stone or tray hot.','Stretch the base; spread thinly with Napoletana sauce (passata seasoned with olive oil, garlic and salt) and scatter mozzarella.','Pile on the roast veg.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with olive oil and herbs.']}
    ]},
  {id:'sp-lamb-bredie', cat:'stewscurries', goesWith:['Rice','Pap','Crusty bread','Sweet potato'], diet:'meat', protein:'lamb', name:'Lamb Tomato Bredie', emoji:'\ud83c\udf72', cuisine:'South African', time:120, costPP:47,
    feel:'Slow-braised lamb in a rich tomato and onion stew — an Afrikaans Sunday classic that only gets better with time.',
    ingredients:[{n:'lamb',pp:160,u:'g'},{n:'tomatoes',pp:160,u:'g'},{n:'onion',pp:90,u:'g'},{n:'potatoes',pp:120,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Pat the lamb dry and brown it hard in the oil in batches — do not crowd the pot, and let each batch get a deep colour before turning. Set aside.','Soften the sliced onion in the same pot, scraping up the brown bits, until golden.','Add the chopped tomato, garlic and a pinch of sugar (it balances the tomato) and cook 10 minutes into a thick base.','Return the lamb with the stock, cover, and simmer the gentlest bubble for 1.5 hours.','Add the cubed potato for the last 30 minutes and cook until the lamb falls apart and the gravy is thick and glossy. Season well with salt and pepper, then serve.'],
    tip:'Low and slow is everything — a bredie should barely bubble, never boil hard.',
    didYouKnow:'"Bredie" comes from an old Cape word for a one-pot stew where meat and vegetables cook down together until soft. The famous variation, waterblommetjiebredie, swaps the tomato for the little water-hawthorn flowers that grow in Western Cape dams in winter.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:520,protein_g:34,carbs_g:30,fat_g:28}, storage:'Even better the next day; keeps 3 days and freezes well.',
    versions:[
      {name:'Sunday Bredie',icon:'\ud83c\udfc6',default:true,time:150,costPP:50,nutrition:{kcal:560,protein_g:36,carbs_g:30,fat_g:32},
        feel:'Lamb on the bone, browned hard and braised the slowest you dare, until the gravy is thick enough to stand a spoon in.',
        didYouKnow:'Traditionally a bredie is built on neck or knuckle — bone-in cuts whose marrow and connective tissue melt into the gravy over the long cook, which is exactly what gives it that sticky richness.',
        ingredients:[{n:'lamb',pp:200,u:'g'},{n:'tomatoes',pp:170,u:'g'},{n:'onion',pp:100,u:'g'},{n:'potatoes',pp:120,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Brown the bone-in lamb hard in batches and set aside.','Soften the onion until golden, scraping the pot.','Add tomato, garlic and a pinch of sugar; cook 12 minutes to a thick base.','Return the lamb with the stock, cover, and braise the gentlest simmer 2 hours.','Add the potato for the last 30 minutes; the gravy should be thick and the meat falling off the bone. Season well with salt and pepper, then serve with rice or pap.']},
      {name:'Budget',icon:'\ud83d\udcb0',time:120,costPP:34,nutrition:{kcal:480,protein_g:26,carbs_g:40,fat_g:22},
        feel:'A little less lamb, a little more potato and onion — the same deep tomato gravy that makes a Sunday.',
        didYouKnow:'A bredie was historically a thrift dish: a small amount of tough, cheap meat made to feed a whole family by braising it slow with whatever vegetables were to hand.',
        ingredients:[{n:'lamb',pp:110,u:'g'},{n:'tomatoes',pp:160,u:'g'},{n:'onion',pp:100,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the lamb in the oil and set aside.','Soften the onion until golden, then add tomato, garlic and a pinch of sugar; cook to a base.','Return the lamb with stock and plenty of cubed potato.','Cover and simmer gently 1.5 hours until the lamb is tender and the potato has thickened the gravy. Season well with salt and pepper, then serve.']},
      {name:'Green Bean',icon:'\ud83c\udf3f',time:130,costPP:46,nutrition:{kcal:500,protein_g:34,carbs_g:26,fat_g:28},
        feel:'The classic green-bean bredie — sliced beans cooked down soft into the lamb until they almost melt.',
        didYouKnow:'Green-bean bredie (boontjiebredie) is the most common version on Afrikaans tables, and the beans are deliberately cooked far past bright-green — soft and silky is the point, not crisp.',
        ingredients:[{n:'lamb',pp:160,u:'g'},{n:'green beans',pp:120,u:'g'},{n:'tomatoes',pp:140,u:'g'},{n:'onion',pp:90,u:'g'},{n:'potatoes',pp:100,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the lamb in batches and set aside.','Soften the onion, then add tomato, garlic and a pinch of sugar; cook to a base.','Return the lamb with the stock; simmer gently 1 hour.','Add the sliced green beans and cubed potato and cook a further 45 minutes until everything is meltingly soft. Season well with salt and pepper, then serve.']}
    ]},
  {id:'sp-butter-chicken', cat:'stewscurries', goesWith:['Basmati rice','Naan','Cucumber raita','Fresh coriander'], diet:'meat', protein:'chicken', name:'Butter Chicken', emoji:'\ud83d\udc14', cuisine:'Indian', time:45, costPP:36,
    feel:'Tender chicken in a velvety tomato, butter and cream sauce — mild, rich and utterly moreish.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'}],
    method:['Cut the chicken into chunks and toss with the yoghurt, half the garlic-ginger paste and half the garam masala. Leave 20 minutes if you have it.','Melt half the butter in a pan and sear the chicken in batches just until coloured — it finishes in the sauce, so do not cook it through. Set aside.','In the same pan melt the rest of the butter, soften the onion, then add the remaining garlic-ginger and garam masala and fry 1 minute.','Add the chopped tomato and a splash of water; simmer 10 minutes until soft, then blend the sauce smooth (this is what makes it silky).','Taste and season with salt, with a squeeze of lemon to lift it.','Return the sauce to low heat, stir in the cream, then the chicken, and simmer gently 8 minutes until cooked through. Serve with rice or naan.'],
    tip:'Blending the sauce before the cream goes in gives that signature silky, restaurant texture.',
    didYouKnow:'Butter chicken was invented in 1950s Delhi at the Moti Mahal restaurant, reportedly to rescue leftover tandoori chicken: the cooks tossed the dry roasted pieces into a gravy of tomato, butter and cream, and a global favourite was born.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:560,protein_g:36,carbs_g:16,fat_g:38}, storage:'Keeps 3 days; freezes well — add a splash of cream when you reheat.',
    versions:[
      {name:'Restaurant-Style',icon:'\ud83c\udfc6',default:true,time:55,costPP:42,nutrition:{kcal:620,protein_g:38,carbs_g:16,fat_g:44},
        feel:'Marinated, charred chicken folded into a blended tomato gravy enriched with butter, cream and a handful of cashews — the takeaway version, at home.',
        didYouKnow:'A spoon of ground cashews stirred into the gravy is the classic trick for thickening and enriching it without more cream — it is how many restaurants get that luxurious body.',
        ingredients:[{"n":"chicken thighs","pp":160,"u":"g"},{"n":"plain yoghurt","pp":30,"u":"g"},{"n":"ghee","pp":12,"u":"g"},{"n":"onion","pp":50,"u":"g"},{"n":"ginger-garlic paste","pp":12,"u":"g"},{"n":"garam masala","pp":5,"u":"g"},{"n":"cumin","pp":2,"u":"g"},{"n":"coriander","pp":2,"u":"g"},{"n":"turmeric","pp":1,"u":"g"},{"n":"chilli powder","pp":2,"u":"g"},{"n":"tinned tomatoes","pp":90,"u":"g"},{"n":"cashews","pp":12,"u":"g"},{"n":"fresh cream","pp":40,"u":"ml"},{"n":"butter","pp":15,"u":"g"},{"n":"sugar","pp":4,"u":"g"},{"n":"kasuri methi","pp":1,"u":"g"},{"n":"lemon","pp":8,"u":"g"},{"n":"salt & pepper"}],
        method:["Marinate the chicken thigh chunks in the yoghurt, lemon, half the ginger-garlic, the turmeric, cumin and half the garam masala with a good pinch of salt - 30 minutes, or overnight for the deepest flavour.","Sear or grill the chicken hard until charred at the edges but not cooked through, then set aside; those charred edges are where the smoky depth comes from.","Melt the ghee, soften the diced onion, then add the rest of the ginger-garlic and fry 1 minute. Stir in the remaining garam masala, the coriander and chilli powder and toast 1 minute until fragrant.","Add the tinned tomatoes, the sugar and the cashews; simmer 12-15 minutes until rich and the fat splits, then blend completely smooth and season with salt.","Return to low heat, stir in the cream and a pinch of crushed kasuri methi (dried fenugreek - the signature butter-chicken aroma), then fold in the charred chicken and simmer gently 8 minutes. Finish with a knob of butter and a squeeze of lemon."]},
      {name:'Budget',icon:'\ud83d\udcb0',time:40,costPP:26,nutrition:{kcal:480,protein_g:30,carbs_g:20,fat_g:28},
        feel:'Less cream, a little milk to stretch it, and the cheaper cut — the same warm, buttery gravy on a budget.',
        didYouKnow:'Whisking a spoon of plain yoghurt into the gravy (off the heat, so it does not split) gives a creamy tang for a fraction of what cream costs.',
        ingredients:[{n:'chicken thighs',pp:140,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'milk',pp:40,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'yoghurt',pp:40,u:'ml'}],
        method:['Soften the onion in the butter, add garlic-ginger and garam masala, fry 1 minute.','Add the tomato and a splash of water; simmer 10 minutes and blend smooth.','Stir in the milk and the raw cubed chicken; simmer gently 12 minutes until cooked.','Take off the heat and stir through the yoghurt so it does not split. Season well with salt and pepper, then serve.']},
      {name:'Paneer',icon:'\ud83e\uddc0',time:35,costPP:34,nutrition:{kcal:520,protein_g:22,carbs_g:22,fat_g:38},
        feel:'The same butter gravy around golden cubes of paneer — the much-loved vegetarian version, butter paneer.',
        didYouKnow:'Swap the chicken for paneer and you have butter paneer (paneer makhani) — paneer is a fresh, non-melting cheese, so it holds its shape and soaks up the gravy instead of dissolving.',
        ingredients:[{n:'paneer',pp:120,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'}],
        method:['Fry the paneer cubes in a little of the butter until golden on the edges; set aside.','Soften the onion in the rest of the butter, add garlic-ginger and garam masala, fry 1 minute.','Add the tomato and a splash of water; simmer 10 minutes and blend smooth.','Taste and season with salt, with a squeeze of lemon to lift it.','Stir in the cream, then fold in the paneer and warm through gently 3 minutes — do not boil hard or the paneer toughens. Serve with rice or naan.']}
    ]},
  {id:'sp-chicken-tikka-masala', cat:'stewscurries', goesWith:['Basmati rice','Naan','Fresh coriander','Lemon wedge'], diet:'meat', protein:'chicken', name:'Chicken Tikka Masala', emoji:'\ud83c\udf5b', cuisine:'Indian', time:45, costPP:32,
    feel:'Charred spiced chicken in a creamy, fragrant tomato masala — the takeaway favourite, made at home.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:7,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Cut the chicken into chunks and toss with the yoghurt, garlic-ginger and half the garam masala. Leave 20 minutes if you can.','Heat a pan very hot with the oil and char the chicken hard in batches until coloured and just cooked. Set aside — that scorched edge is the whole point of "tikka".','Soften the onion in the same pan, add the rest of the garam masala and fry 1 minute.','Add the chopped tomato and a splash of water; simmer 10 minutes into a rich sauce (blend it smooth if you like it silky).','Taste and season with salt, with a squeeze of lemon to lift it.','Stir in the cream and the charred chicken and warm through 3 minutes. Finish with coriander and serve with rice or naan.'],
    tip:'Get the pan properly hot and char the chicken hard before it goes near the sauce — that smoky edge is what sets tikka masala apart.',
    didYouKnow:'Chicken tikka masala is widely claimed to have been invented in Britain, not India — one popular story credits a Glasgow chef who added a tin of tomato soup and cream to spiced chicken for a customer who wanted more gravy. A former UK foreign secretary once called it "a true British national dish".',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:540,protein_g:38,carbs_g:18,fat_g:32}, storage:'Keeps 3 days; freezes well — stir in fresh cream when reheating.',
    versions:[
      {name:'Charred & Creamy',icon:'\ud83c\udfc6',default:true,time:55,costPP:38,nutrition:{kcal:580,protein_g:40,carbs_g:18,fat_g:36},
        feel:'Yoghurt-marinated chicken charred hard on a grill, then folded into a smooth, fragrant masala finished with cream — the full restaurant treatment.',
        didYouKnow:'The "tikka" is the marinated, char-grilled chicken on its own; the "masala" is the spiced creamy sauce it is later bathed in. Put them together and you get the dish — two techniques, one bowl.',
        ingredients:[{n:'chicken breast',pp:170,u:'g'},{n:'tomatoes',pp:140,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:8,u:'g'},{n:'garlic-ginger paste',pp:10,u:'g'},{n:'yoghurt',pp:50,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Marinate the chicken chunks in the yoghurt, garlic-ginger and half the garam masala for at least 30 minutes.','Char the chicken hard under a grill or in a screaming-hot pan until the edges blacken and it is just cooked; set aside.','Soften the onion in the oil, add the rest of the garam masala, fry 1 minute.','Add the tomato with a splash of water, simmer 12 minutes, then blend smooth.','Stir in the cream and the charred chicken; warm through and finish with coriander.','Taste and season with salt, with a squeeze of lemon to lift it.']},
      {name:'Budget',icon:'\ud83d\udcb0',time:35,costPP:25,nutrition:{kcal:470,protein_g:32,carbs_g:22,fat_g:24},
        feel:'Pan-charred chicken thighs and a little milk in place of cream — same smoky, spiced bowl for less.',
        didYouKnow:'Chicken thighs are cheaper than breast and almost impossible to dry out, which makes them the budget cook\u2019s secret weapon in any curry.',
        ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'milk',pp:40,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Toss the diced thigh in yoghurt and garlic-ginger; char hard in the hot oil and set aside.','Soften the onion, add the garam masala, fry 1 minute.','Add the tomato and a splash of water; simmer 10 minutes.','Stir in the milk and the chicken, warm through, and finish with coriander. Season well with salt and pepper, then serve.']},
      {name:'Paneer Tikka',icon:'\ud83e\uddc0',time:35,costPP:33,nutrition:{kcal:520,protein_g:22,carbs_g:24,fat_g:34},
        feel:'Charred marinated paneer instead of chicken — the vegetarian tikka, every bit as smoky and rich.',
        didYouKnow:'Paneer takes a spiced yoghurt marinade and a hard char beautifully, which is why paneer tikka is one of the most popular vegetarian starters across India.',
        ingredients:[{n:'paneer',pp:120,u:'g'},{n:'tomatoes',pp:130,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:7,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Toss the paneer cubes in the yoghurt, garlic-ginger and half the garam masala.','Char the paneer hard in the hot oil until coloured on the edges; set aside.','Soften the onion, add the rest of the garam masala, fry 1 minute.','Add the tomato and a splash of water; simmer 10 minutes and blend smooth.','Stir in the cream and the paneer, warm through gently, and finish with coriander.','Taste and season with salt, with a squeeze of lemon to lift it.']}
    ]},
  {id:'sp-chicken-tinga', cat:'stewscurries', goesWith:['Tortillas','Rice','Sour cream','Avocado','Fresh coriander'], diet:'meat', protein:'chicken', name:'Mexican Chicken Tinga', emoji:'🌮', cuisine:'Mexican', time:35, costPP:25,
    feel:'Smoky shredded chicken in a chipotle-tomato sauce — pile it into tacos, bowls or quesadillas.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Simmer the chicken thighs in the stock with half the onion for 15 minutes until cooked, then lift out and shred with two forks. Keep the cooking liquid.','Blend the tomato, the rest of the onion, the garlic and the smoked paprika into a smooth, smoky sauce.','Fry the sauce in the oil for 5 minutes until thickened and darkened.','Fold in the shredded chicken with a splash of the reserved stock and cook until rich and coating.','Taste and season well with salt and pepper.','Serve in warm tortillas or over rice with coriander and a dollop of sour cream.'],
    tip:'Chipotle in adobo gives the truest smoky heat, but smoked paprika with a little chilli gets you most of the way there.',
    didYouKnow:'Tinga comes from Puebla in Mexico — shredded meat in a smoky chipotle-and-tomato sauce, traditionally piled onto crisp fried tostadas.',
    freezes:true, fridgeDays:4,
    nutrition:{kcal:420,protein_g:34,carbs_g:14,fat_g:24}, storage:'Keeps 4 days; freezes brilliantly — perfect for batch taco nights.',
    versions:[
      {name:'Chipotle',icon:'🏆',default:true,time:40,costPP:29,nutrition:{kcal:440,protein_g:35,carbs_g:14,fat_g:26},
        feel:'Poached, hand-shredded thigh in a deep chipotle-tomato sauce, fried down until smoky and rich — taqueria-style.',
        tip:'Fry the blended sauce hard before the chicken goes back in — cooking it down concentrates the smoke and colour.',
        didYouKnow:'The smoky heat of tinga comes from chipotles — which are simply ripe red jalapeños that have been smoke-dried, then usually packed in tangy adobo sauce.',
        ingredients:[{n:'chicken thighs',pp:170,u:'g'},{n:'tomato',pp:140,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:6,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'chilli',pp:4,u:'g'},{n:'chicken stock',pp:120,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Poach the thighs in the stock with half the onion 15 min; shred and reserve the liquid.','Blend the tomato, remaining onion, garlic, smoked paprika and chilli to a smooth sauce.','Fry the sauce in the oil 6–8 minutes until darkened and thick.','Fold in the shredded chicken and a splash of stock; cook until coating.','Taste and season well with salt and pepper.','Serve in tortillas with coriander, avocado and sour cream.']},
      {name:'Budget',icon:'💰',time:35,costPP:21,nutrition:{kcal:400,protein_g:32,carbs_g:16,fat_g:22},
        feel:'Poached and shredded thighs go further than pieces — and the poaching liquid becomes the sauce.',
        tip:'Shredding stretches the meat across far more tacos than slicing does, and nothing is wasted — the poaching stock flavours the sauce.',
        didYouKnow:'Poaching and shredding chicken thighs stretches the meat across more servings than pieces do, and the poaching liquid becomes the base of the sauce — nothing wasted.',
        ingredients:[{n:'chicken thighs',pp:120,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:120,u:'ml'},{n:'oil',pp:8,u:'ml'}],
        method:['Poach the thighs in the stock with half the onion; shred and keep the liquid.','Blend tomato, onion, garlic and paprika; fry in the oil until thick.','Fold in the chicken with plenty of the reserved stock to stretch it.','Taste and season well with salt and pepper.','Serve in tortillas or over rice.']},
      {name:'Quick',icon:'⚡',time:20,costPP:27,nutrition:{kcal:420,protein_g:34,carbs_g:14,fat_g:24},
        feel:'Built on leftover or rotisserie chicken — smoky tacos in twenty minutes flat.',
        tip:'Use cooked chicken you already have — shred it straight into the smoky sauce and skip the poaching entirely.',
        didYouKnow:'Tinga is the perfect home for leftover or rotisserie chicken — shred it straight into the smoky sauce and supper is ready in twenty minutes.',
        ingredients:[{n:'cooked chicken',pp:120,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:80,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Blend the tomato, onion, garlic and smoked paprika to a sauce.','Fry it in the oil 5 minutes until thick.','Fold in the shredded cooked chicken and a splash of stock; warm through.','Pile into tortillas with your toppings.','Taste and season well with salt and pepper.']}
    ]},
  {id:'sp-chorizo-hake-orzo', cat:'stewscurries', goesWith:['Green salad','Garlic bread','Lemon','Fresh parsley'], diet:'meat', protein:'fish', name:'Spanish Chorizo & Hake Orzo', emoji:'🐟', cuisine:'Spanish', time:40, costPP:55,
    feel:'Smoky chorizo, flaky hake and orzo cooked together in one pan — an impressive midweek showstopper.',
    ingredients:[{n:'hake fillet',pp:120,u:'g'},{n:'chorizo',pp:40,u:'g'},{n:'orzo',pp:80,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Slice the chorizo and fry it in the oil over medium heat until its bright orange oil runs out, 3 minutes — that smoky oil is the base of the whole dish.','Add the chopped onion and smoked paprika and soften, 5 minutes.','Stir in the orzo to coat, then add the tomato and the fish stock. Simmer, stirring now and then, until the orzo is almost tender, about 10 minutes.','Lay the hake fillets on top, cover, and cook 6–8 minutes until the fish flakes and the orzo is creamy.','Finish with parsley and a squeeze of lemon and bring the whole pan to the table.','Taste and season with salt, pepper and a squeeze of lemon.'],
    tip:'Let the chorizo render its smoky oil first — everything that follows is built on that flavour.',
    didYouKnow:'Orzo is pasta shaped like a large grain of rice — its name means "barley" in Italian, even though it is made from wheat. Cooking it risotto-style in the pan, in just enough stock, makes it turn creamy.',
    freezes:false, fridgeDays:1,
    nutrition:{kcal:560,protein_g:36,carbs_g:58,fat_g:22}, storage:'Best fresh; keeps 1 day — the orzo drinks up the sauce as it sits.',
    versions:[
      {name:'Smoky One-Pan',icon:'🏆',default:true,time:40,costPP:55,nutrition:{kcal:560,protein_g:36,carbs_g:58,fat_g:22},
        feel:'Chorizo oil, sweet paprika and creamy orzo with flaky hake steamed on top — one pan, real wow.',
        tip:'Do not stir once the fish is on — let it steam gently so the fillets stay in proud flakes.',
        didYouKnow:'Spanish chorizo is cured with pimentón (smoked paprika); fry it and the fat renders out a brilliant smoky orange that colours and flavours the entire pan.',
        ingredients:[{n:'hake fillet',pp:130,u:'g'},{n:'chorizo',pp:45,u:'g'},{n:'orzo',pp:85,u:'g'},{n:'tomato',pp:90,u:'g'},{n:'onion',pp:55,u:'g'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:230,u:'ml'},{n:'fresh parsley',pp:4,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the sliced chorizo until its oil runs orange and smoky.','Soften the onion with the smoked paprika.','Stir in the orzo, then the tomato and stock; simmer 10 minutes until almost tender.','Nestle the hake on top, cover, cook 6–8 minutes until it flakes.','Finish with parsley and lemon.','Taste and season with salt, pepper and a squeeze of lemon.']},
      {name:'Budget',icon:'💰',time:35,costPP:38,nutrition:{kcal:520,protein_g:30,carbs_g:60,fat_g:18},
        feel:'Less chorizo, everyday hake and orzo to fill it out — the same smoky comfort for less.',
        tip:'A little chorizo goes a long way — even 30g renders enough smoky oil to flavour the whole pan.',
        didYouKnow:'Hake is one of South Africa\'s most abundant and affordable line fish, which is why it is the everyday white fish in so many local kitchens.',
        ingredients:[{n:'hake fillet',pp:110,u:'g'},{n:'chorizo',pp:25,u:'g'},{n:'orzo',pp:100,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:4,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'oil',pp:8,u:'ml'}],
        method:['Render the little bit of chorizo, then soften the onion with extra paprika to make up the smoke.','Stir in the orzo, tomato and stock; simmer until almost tender.','Lay the hake on top and steam until it flakes. Season well with salt and pepper, then serve.']},
      {name:'Quick',icon:'⚡',time:25,costPP:55,nutrition:{kcal:560,protein_g:36,carbs_g:58,fat_g:22},
        feel:'Everything in one pan, fish steamed on top — done in the time the orzo takes.',
        tip:'Cut the hake into chunks and stir them through for the last 5 minutes if you are in a real hurry.',
        didYouKnow:'Orzo cooks in about the same time the fish needs to steam through, so the whole dish lands in one pan in well under half an hour.',
        ingredients:[{n:'hake fillet',pp:120,u:'g'},{n:'chorizo',pp:40,u:'g'},{n:'orzo',pp:80,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Render the chorizo, soften the onion with paprika.','Add orzo, tomato and stock; simmer 9 minutes.','Taste and season with salt, pepper and a squeeze of lemon.','Stir chunks of hake through for the last 5 minutes until just cooked. Serve.']},
      {name:'Salmon & Prawn',icon:'🌟',time:45,costPP:85,nutrition:{kcal:620,protein_g:40,carbs_g:56,fat_g:30},
        feel:'Rich salmon and sweet prawns in the smoky orzo, finished with cream and lemon — the dinner-party version.',
        tip:'Add the prawns and salmon near the end — both cook in minutes and turn rubbery if pushed too far.',
        didYouKnow:'Salmon\'s natural richness stands up beautifully to the smoky chorizo, and a handful of prawns turns this humble one-pan into a proper celebration dish.',
        ingredients:[{n:'salmon',pp:120,u:'g'},{n:'prawns',pp:60,u:'g'},{n:'chorizo',pp:35,u:'g'},{n:'orzo',pp:85,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'cream',pp:30,u:'ml'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'fresh parsley',pp:5,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Render the chorizo, soften the onion with the paprika.','Stir in the orzo, tomato and stock; simmer 10 minutes until almost tender.','Nestle the salmon on top, cover and cook 4 minutes; add the prawns and cook 3 minutes more until pink and the salmon flakes.','Taste and season with salt, pepper and a squeeze of lemon.','Stir in the cream off the heat, finish with parsley and lemon, and serve.']}
    ]},
  {id:'sp-chicken-cacciatore', cat:'stewscurries', goesWith:['Crusty bread','Mash','Rice','Green salad'], diet:'meat', protein:'chicken', name:'Chicken Cacciatore', emoji:'🍗', cuisine:'Italian', time:50, costPP:32,
    feel:'Italian hunter-style chicken braised with tomatoes, peppers and olives — rustic and freezer-friendly.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'red pepper',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olives',pp:20,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Season the chicken thighs and brown them skin-side down in the oil until deep golden, then turn and colour the other side. Set aside — do not rush this, the colour is flavour.','In the same pan soften the onion, pepper and garlic in the chicken fat.','Add the tomato, stock and olives and bring to a simmer, scraping up the brown bits stuck to the pan.','Return the chicken, cover and braise gently 30 minutes until tender and the sauce is rich.','Serve with crusty bread, polenta or mash to mop up the sauce.'],
    tip:'Browning the chicken skin first builds a deep, savoury base — those stuck bits scraped off the pan are pure flavour.',
    didYouKnow:'"Alla cacciatora" means "hunter\'s style" — a rustic braise the hunter\'s household would throw together from whatever was on hand: tomatoes, herbs, wine and olives.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:480,protein_g:34,carbs_g:16,fat_g:30}, storage:'Keeps 3 days, better the next day; freezes brilliantly.',
    versions:[
      {name:'Hunter-Style',icon:'🏆',default:true,time:60,costPP:36,nutrition:{kcal:510,protein_g:35,carbs_g:18,fat_g:32},
        feel:'Golden-browned thighs braised low with peppers, olives and a splash of wine — the full rustic Italian bowl.',
        tip:'A splash of red wine in with the tomatoes adds real depth — let it bubble a minute to cook off the sharpness.',
        didYouKnow:'Browning the chicken skin-side down first renders its fat and leaves a sticky golden fond on the pan — deglazed with stock or wine, that fond becomes the soul of the sauce.',
        ingredients:[{n:'chicken thighs',pp:160,u:'g'},{n:'tomato',pp:130,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'onion',pp:55,u:'g'},{n:'olives',pp:25,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'red wine',pp:30,u:'ml'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the thighs hard, skin-side first; set aside.','Soften onion, pepper and garlic in the fat.','Pour in the wine and let it reduce a minute, then add the tomato, stock and olives.','Return the chicken, cover and braise gently 35 minutes.','Rest 5 minutes and serve with bread or polenta.']},
      {name:'Budget',icon:'💰',time:50,costPP:24,nutrition:{kcal:450,protein_g:30,carbs_g:16,fat_g:28},
        feel:'Cheap bone-in drumsticks and thighs, no olives — the same hearty braise for less.',
        tip:'Bone-in pieces are cheaper and stay juicier through a long braise than breast ever could.',
        didYouKnow:'Drumsticks and thighs on the bone cost less than breast and stay succulent through a long braise — the cut a thrifty hunter\'s kitchen would actually have used.',
        ingredients:[{n:'chicken thighs',pp:170,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the bone-in pieces well; set aside.','Soften the onion, pepper and garlic.','Add the tomato and stock, return the chicken, cover and braise 35 minutes until tender.','Serve with mash or rice.']},
      {name:'Quick',icon:'⚡',time:30,costPP:32,nutrition:{kcal:470,protein_g:34,carbs_g:16,fat_g:28},
        feel:'Diced chicken and a fast simmer — hunter-style flavour on a weeknight.',
        tip:'Dice the chicken so it cooks through in 15 minutes instead of braising on the bone.',
        didYouKnow:'Cut the chicken into bite-size pieces and the braise that usually takes an hour comes together in half the time, with the same rustic flavour.',
        ingredients:[{n:'chicken breast',pp:140,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'red pepper',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olives',pp:20,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the diced chicken; set aside.','Soften the onion, pepper and garlic.','Add the tomato and olives, return the chicken, simmer 15 minutes. Serve.']},
      {name:'White (in bianco)',icon:'🍷',time:55,costPP:35,nutrition:{kcal:490,protein_g:35,carbs_g:10,fat_g:32},
        feel:'No tomato — chicken braised in white wine, garlic and herbs for a lighter, paler version.',
        tip:'Without tomato to hide behind, season carefully and lean on the wine, garlic and a little lemon at the end.',
        didYouKnow:'In several Italian regions cacciatore is made "in bianco" — with white wine and no tomato at all — for a lighter, more delicate braise than the familiar red version.',
        ingredients:[{n:'chicken thighs',pp:160,u:'g'},{n:'white wine',pp:50,u:'ml'},{n:'onion',pp:55,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'olives',pp:25,u:'g'},{n:'chicken stock',pp:120,u:'ml'},{n:'lemon',pp:0.5,u:''},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the thighs hard, skin-side first; set aside.','Soften the onion and garlic, then pour in the wine and reduce by half.','Add the stock and olives, return the chicken, cover and braise 35 minutes.','Taste and season well with salt and pepper.','Finish with a squeeze of lemon and serve.']}
    ]},
  {id:'sp-lamb-guinness-stew', cat:'stewscurries', goesWith:['Mash','Crusty bread','Peas'], diet:'meat', protein:'lamb', name:'Lamb & Guinness Stew', emoji:'🍺', cuisine:'Irish', time:130, costPP:50,
    feel:'Lamb slow-braised in dark stout until meltingly tender, with carrots and a deep, savoury gravy.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'stout',pp:80,u:'ml'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:70,u:'g'},{n:'potato',pp:100,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'flour',pp:10,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Toss the lamb chunks in seasoned flour, then brown them in the oil in batches until deeply coloured. Crowding the pan steams the meat, so do it in stages.','Soften the onion in the same pot, scraping up the brown bits.','Return the lamb with the stout, stock, carrots and potato. Bring to a gentle simmer.','Cover and braise low and slow for about 2 hours, until the lamb is spoon-tender and the gravy thick.','Season well with salt and pepper, then serve with creamy mash and peas.'],
    tip:'No need to pre-fry everything fancy — the long, gentle braise does all the work.',
    didYouKnow:'Stout gets its dark colour and bittersweet depth from barley roasted almost to coffee. In a long braise the alcohol cooks off, leaving only that malty, savoury richness behind.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:560,protein_g:34,carbs_g:36,fat_g:28}, storage:'Keeps 3 days and is even better the next day; freezes well.',
    versions:[
      {name:'Low & Slow',icon:'🏆',default:true,time:150,costPP:54,nutrition:{kcal:580,protein_g:36,carbs_g:36,fat_g:30},
        feel:'Floured, browned lamb braised two-plus hours in stout until it falls apart in a glossy, deep-brown gravy.',
        tip:'Give it the full two hours on the lowest heat — you cannot rush connective tissue into tenderness.',
        didYouKnow:'The alcohol in the stout cooks off within the first few minutes of simmering — what stays behind is pure malty, roasted depth — which is why a long-braised stout stew suits the whole family.',
        ingredients:[{"n":"lamb","pp":180,"u":"g"},{"n":"bacon","pp":30,"u":"g"},{"n":"cake flour","pp":12,"u":"g"},{"n":"onion","pp":70,"u":"g"},{"n":"garlic","pp":8,"u":"g"},{"n":"tomato paste","pp":12,"u":"g"},{"n":"stout","pp":100,"u":"ml"},{"n":"beef stock","pp":120,"u":"ml"},{"n":"worcestershire sauce","pp":5,"u":"ml"},{"n":"thyme","pp":2,"u":"g"},{"n":"rosemary","pp":2,"u":"g"},{"n":"bay leaves","pp":0.5,"u":"g"},{"n":"carrots","pp":80,"u":"g"},{"n":"potatoes","pp":150,"u":"g"},{"n":"oil","pp":8,"u":"ml"},{"n":"salt & pepper"}],
        method:["Crisp the diced bacon in a heavy pot, then lift it out, leaving the smoky fat behind - that fat is your searing base.","Toss the lamb in seasoned flour and brown it hard in the bacon fat in batches until deeply coloured; don't crowd the pot or it stews instead of searing. Lift out.","Soften the onion in the same pot, then stir in the garlic and tomato paste and cook 1-2 minutes until the paste darkens - cooking it out deepens the whole stew.","Pour in the stout and scrape up every brown bit, then return the lamb and bacon with the stock, Worcestershire and a bundle of thyme, rosemary and bay. Bring to a simmer, cover, and braise on the lowest heat for 1.5 hours.","Stir in the carrots and potatoes and simmer uncovered another 40-60 minutes until the lamb is spoon-tender and the sauce glossy. Season well with salt and pepper, fish out the herb bundle, and rest before serving with mash."]},
      {name:'Budget',icon:'💰',time:140,costPP:36,nutrition:{kcal:540,protein_g:32,carbs_g:40,fat_g:26},
        feel:'Cheaper neck or shoulder, more veg — the thriftiest cut makes the BEST stew.',
        tip:'Ask for lamb neck or shoulder — the cheapest cuts have the most connective tissue, which melts into the richest gravy.',
        didYouKnow:'Neck and shoulder are the cheapest lamb cuts and the best for stew — their connective tissue melts into the gravy over a long braise, which lean cuts never do.',
        ingredients:[{n:'lamb',pp:130,u:'g'},{n:'stout',pp:80,u:'ml'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:80,u:'g'},{n:'potato',pp:150,u:'g'},{n:'beef stock',pp:160,u:'ml'},{n:'flour',pp:10,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Flour and brown the neck/shoulder pieces.','Soften the onion, return the lamb with stout, stock and plenty of carrot and potato.','Braise low 2 hours until tender. Season well with salt and pepper, then serve.']},
      {name:'Beef & Guinness',icon:'🐄',time:150,costPP:42,nutrition:{kcal:560,protein_g:36,carbs_g:38,fat_g:26},
        feel:'The classic Irish version with beef shin or chuck — even cheaper, just as deep and rich.',
        tip:'Beef shin and chuck need the same long, low braise as lamb neck — give them time and they turn silky.',
        didYouKnow:'Swap the lamb for beef shin or chuck and you have the original Irish beef-and-stout stew — often cheaper than lamb and every bit as rich.',
        ingredients:[{n:'beef',pp:150,u:'g'},{n:'stout',pp:100,u:'ml'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:80,u:'g'},{n:'potato',pp:120,u:'g'},{n:'beef stock',pp:160,u:'ml'},{n:'flour',pp:12,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Flour and brown the beef hard in batches.','Soften the onion, return the beef with stout, stock, carrots and potato.','Cover and braise low 2.5 hours until silky. Season well with salt and pepper, then serve with mash.']}
    ]},
  {id:'sp-trini-pelau', cat:'stewscurries', goesWith:['Coleslaw','Green salad','Fresh thyme'], diet:'meat', protein:'chicken', name:'Trinidadian Pelau', emoji:'🍚', cuisine:'Caribbean', time:50, costPP:27,
    feel:'Caribbean one-pot of caramel-browned chicken, rice, peas and coconut milk — sweet, savoury and warming.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'rice',pp:75,u:'g'},{n:'pigeon peas',pp:50,u:'g'},{n:'coconut milk',pp:80,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'sugar',pp:8,u:'g'},{n:'fresh thyme',pp:2,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Heat the oil in a heavy pot until hot, then add the sugar and let it melt and darken to a deep caramel — almost smoking. This "browning" is the heart of pelau, so be brave.','Add the chicken pieces and turn them in the dark caramel until coated and seared.','Stir in the onion, pigeon peas, rice, coconut milk, thyme and enough water to cook the rice.','Cover and simmer on low until the rice is tender and the liquid is absorbed, about 25 minutes.','Taste and season well with salt and pepper.','Rest 5 minutes, then fluff and serve.'],
    tip:'Burning the sugar to a deep caramel before the chicken goes in gives pelau its colour and signature flavour — push it darker than feels comfortable.',
    didYouKnow:'Pelau\'s signature is "browning" — sugar caramelised almost to burning in hot oil before the meat goes in. That near-burnt sugar gives the whole pot its deep colour and bittersweet edge.',
    freezes:true, fridgeDays:2,
    nutrition:{kcal:580,protein_g:28,carbs_g:66,fat_g:22}, storage:'Keeps 2 days; reheat with a splash of water to loosen the rice.',
    versions:[
      {name:'Burnt Sugar',icon:'🏆',default:true,time:55,costPP:30,nutrition:{kcal:600,protein_g:30,carbs_g:66,fat_g:24},
        feel:'Chicken seared in deep, near-burnt caramel, then simmered with peas, coconut and thyme into a sweet-savoury one-pot.',
        tip:'The caramel should be dark and almost smoking before the chicken hits it — too pale and the pelau tastes flat and sweet instead of deep.',
        didYouKnow:'Getting the caramel dark — right to the edge of burning — is what separates a real pelau from a sweet rice dish; the bitterness of the burnt sugar is balanced by the coconut milk.',
        ingredients:[{n:'chicken thighs',pp:160,u:'g'},{n:'rice',pp:80,u:'g'},{n:'pigeon peas',pp:60,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'sugar',pp:10,u:'g'},{n:'fresh thyme',pp:3,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Caramelise the sugar in the hot oil until very dark.','Sear the chicken in the caramel until coated.','Add onion, garlic, peas, rice, coconut milk, thyme and water.','Cover and simmer low 25 minutes until the rice is tender.','Taste and season well with salt and pepper.','Rest, fluff and serve.']},
      {name:'Budget',icon:'💰',time:50,costPP:20,nutrition:{kcal:560,protein_g:24,carbs_g:70,fat_g:18},
        feel:'More rice and peas, a little chicken — a big, filling pot for very little.',
        tip:'Pigeon peas (or any tinned bean) stretch the pot and make it filling without adding much cost.',
        didYouKnow:'Pigeon peas — also called gungo peas — are the traditional pulse in pelau, but any tinned bean stretches the pot just as well on a budget.',
        ingredients:[{n:'chicken thighs',pp:110,u:'g'},{n:'rice',pp:90,u:'g'},{n:'pigeon peas',pp:70,u:'g'},{n:'coconut milk',pp:70,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'sugar',pp:8,u:'g'},{n:'fresh thyme',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Darken the sugar in the oil, sear the chicken.','Add plenty of rice and peas, the onion, coconut milk, thyme and water.','Taste and season well with salt and pepper.','Cover and simmer 25 minutes. Rest and serve.']},
      {name:'Quick',icon:'⚡',time:35,costPP:27,nutrition:{kcal:580,protein_g:28,carbs_g:66,fat_g:22},
        feel:'The same one-pot, with diced chicken and tinned peas for speed.',
        tip:'Use diced chicken and tinned pigeon peas so everything cooks in the time the rice takes.',
        didYouKnow:'Pelau is built to be a quick one-pot — once the browning is done, everything cooks together in the time the rice needs.',
        ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'rice',pp:75,u:'g'},{n:'pigeon peas',pp:50,u:'g'},{n:'coconut milk',pp:80,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'sugar',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Caramelise the sugar, sear the diced chicken.','Add the onion, tinned peas, rice, coconut milk and water.','Taste and season well with salt and pepper.','Cover and simmer 20 minutes until the rice is done. Fluff and serve.']}
    ]},
  {id:'sp-seafood-risotto', cat:'stewscurries', goesWith:['Green salad','Lemon','Garlic bread','White wine'], diet:'meat', protein:'fish', name:'Seafood Risotto', emoji:'🦐', cuisine:'Italian', time:40, costPP:60,
    feel:'Creamy, slow-stirred risotto studded with prawns and mussels — a comforting coastal classic.',
    ingredients:[{n:'arborio rice',pp:75,u:'g'},{n:'mixed seafood',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'fish stock',pp:300,u:'ml'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:20,u:'g'},{n:'garlic',pp:6,u:'g'}],
    method:['Heat the fish stock in a pot and keep it warm on a low heat beside you — adding cold stock would stop the cooking.','Soften the onion and garlic in half the butter, then add the rice and toast it for a minute until the edges look glassy.','Pour in the wine and stir until it is absorbed.','Now add the warm stock one ladle at a time, stirring almost constantly and only adding the next ladle once the last is absorbed — this is what coaxes the starch out and makes it creamy. Keep going 18–20 minutes until the rice is creamy but still has a slight bite.','Taste and season with salt, pepper and a squeeze of lemon.','Stir in the seafood for the last 4 minutes until just cooked. Beat in the rest of the butter off the heat and serve at once.'],
    tip:'Add the stock gradually and keep stirring — that slow coaxing is the whole secret to a creamy risotto.',
    didYouKnow:'A proper risotto needs no cream at all — the creaminess comes entirely from the starch released by short-grain rice (arborio or carnaroli) as you stir it with the stock.',
    freezes:false, fridgeDays:1,
    nutrition:{kcal:540,protein_g:30,carbs_g:64,fat_g:16}, storage:'Best eaten straight away; risotto firms up and does not keep or reheat well.',
    versions:[
      {name:'Frutti di Mare',icon:'🏆',default:true,time:45,costPP:68,nutrition:{kcal:560,protein_g:32,carbs_g:64,fat_g:18},
        feel:'A generous mix of prawns, mussels and calamari folded through a glossy, slow-stirred risotto — the full coastal feast.',
        tip:'Cook mussels just until they open and add calamari only for a minute or two — seafood toughens the moment it overcooks.',
        didYouKnow:'"Frutti di mare" means "fruits of the sea" — and in Italy a seafood risotto is traditionally served WITHOUT parmesan, as cheese is thought to overpower delicate seafood.',
        ingredients:[{n:'arborio rice',pp:80,u:'g'},{n:'mixed seafood',pp:140,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'white wine',pp:40,u:'ml'},{n:'fish stock',pp:320,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'fresh parsley',pp:5,u:'g'},{n:'oil',pp:8,u:'ml'}],
        method:['Keep the fish stock warm beside the pan.','Soften the onion and garlic in the butter and oil; toast the rice 1 minute.','Add the wine, let it absorb.','Add warm stock a ladle at a time, stirring, 18 minutes, until creamy with a slight bite.','Fold in the mixed seafood for the last 4 minutes. Finish with parsley and a final knob of butter — hold the cheese.','Taste and season with salt, pepper and a squeeze of lemon.']},
      {name:'Prawn & Pea',icon:'🦐',time:35,costPP:55,nutrition:{kcal:520,protein_g:28,carbs_g:66,fat_g:14},
        feel:'Sweet prawns and bright peas through a creamy risotto — simpler, lighter and a little cheaper.',
        tip:'Throw the peas in for the last 2 minutes only — they need barely any cooking and keep their fresh colour.',
        didYouKnow:'Prawns and peas are a classic risotto pairing — the sweetness of both plays against the savoury rice, and frozen peas work perfectly here.',
        ingredients:[{n:'arborio rice',pp:80,u:'g'},{n:'prawns',pp:110,u:'g'},{n:'peas',pp:50,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'fish stock',pp:300,u:'ml'},{n:'butter',pp:20,u:'g'},{n:'oil',pp:8,u:'ml'}],
        method:['Keep the stock warm. Soften onion and garlic, toast the rice.','Add wine, then stock a ladle at a time, stirring, 18 minutes.','Fold in the prawns for the last 4 minutes and the peas for the last 2.','Taste and season with salt, pepper and a squeeze of lemon.','Beat in the butter off the heat and serve.']},
      {name:'Mushroom (veg)',icon:'🍄',time:40,costPP:38,nutrition:{kcal:480,protein_g:14,carbs_g:68,fat_g:16},
        feel:'Earthy mushrooms and parmesan through a creamy risotto — the much-loved vegetarian classic.',
        tip:'Brown the mushrooms hard and separately first — crowd them and they steam pale instead of going deep and savoury.',
        didYouKnow:'Risotto ai funghi (mushroom risotto) is the vegetarian classic Italians make most often at home — and unlike seafood risotto, this one is finished generously with parmesan.',
        ingredients:[{n:'arborio rice',pp:85,u:'g'},{n:'mushrooms',pp:120,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'white wine',pp:30,u:'ml'},{n:'vegetable stock',pp:300,u:'ml'},{n:'parmesan',pp:25,u:'g'},{n:'butter',pp:25,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the sliced mushrooms hard in the oil until deep golden; set aside.','Soften the onion and garlic in butter; toast the rice.','Add wine, then warm stock a ladle at a time, stirring, 18 minutes.','Taste and season with salt, pepper and a squeeze of lemon.','Fold the mushrooms back in, then beat in the butter and parmesan off the heat. Serve at once.']},
      {name:'Smoked Salmon & Pea',icon:'🌟',time:35,costPP:72,nutrition:{kcal:560,protein_g:30,carbs_g:64,fat_g:20},
        feel:'Ribbons of smoked salmon and peas stirred through at the end, with a squeeze of lemon — elegant and gourmet.',
        tip:'Stir the smoked salmon in off the heat at the very end — it only needs the warmth of the rice, never cooking.',
        didYouKnow:'Folding cold smoked salmon through at the end, rather than cooking it, keeps its silky texture and delicate smoke — a quietly luxurious finish.',
        ingredients:[{n:'arborio rice',pp:80,u:'g'},{n:'smoked salmon',pp:60,u:'g'},{n:'peas',pp:50,u:'g'},{n:'onion',pp:45,u:'g'},{n:'white wine',pp:40,u:'ml'},{n:'fish stock',pp:300,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'oil',pp:8,u:'ml'}],
        method:['Keep stock warm. Soften the onion, toast the rice, add the wine.','Add stock a ladle at a time, stirring, 18 minutes; add the peas for the last 2.','Off the heat, beat in the butter, then fold through torn smoked salmon and a squeeze of lemon.','Taste and season with salt, pepper and a squeeze of lemon.','Serve immediately while silky.']}
    ]},
  {id:'sp-bombay-egg-potato', cat:'stewscurries', goesWith:['Rice','Roti','Fresh coriander','Banana sambal'], diet:'veg', protein:'veg', name:'Bombay Egg & Potato Curry', emoji:'🥔', cuisine:'Indian', time:35, costPP:20,
    feel:'Soft-boiled eggs and potatoes in a spiced tomato curry — a quick store-cupboard supper full of flavour.',
    ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Boil the eggs for 8 minutes, then cool under cold water and peel. Boil the cubed potatoes separately until just tender.','Fry the chopped onion in the oil until soft, then add the curry powder, turmeric and garlic-ginger and fry 1 minute until fragrant.','Add the chopped tomato and a splash of water and simmer 5 minutes into a sauce.','Add the cooked potatoes and the halved eggs and warm through gently — do not stir hard or the eggs break up.','Taste and season with salt, with a squeeze of lemon to lift it.','Finish with fresh coriander and serve with rice or roti.'],
    tip:'This is the supper to make when the cupboard looks bare — it is built entirely on pantry staples.',
    didYouKnow:'Egg curry (anda curry) is a staple of Indian home kitchens and railway canteens alike — cheap, filling and made almost entirely from things already in the pantry.',
    freezes:false, fridgeDays:2,
    nutrition:{kcal:380,protein_g:16,carbs_g:42,fat_g:16}, storage:'Best fresh; the sauce keeps 2 days but add the eggs fresh if you can.',
    versions:[
      {name:'Bombay',icon:'🏆',default:true,time:40,costPP:23,nutrition:{kcal:410,protein_g:17,carbs_g:42,fat_g:20},
        feel:'Eggs scored and fried golden so the spiced tomato sauce clings to them — the proper Bombay treatment.',
        tip:'Score the peeled eggs and fry them in a little oil before they go in — the sauce grips the crinkled surface instead of sliding off.',
        didYouKnow:'Frying or lightly scoring the boiled eggs before they meet the sauce lets the spices cling to them — a small step that makes a real difference to every bite.',
        ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:7,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'fresh coriander',pp:5,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Hard-boil and peel the eggs; make a few shallow scores in each. Boil the cubed potato until just tender.','Fry the scored eggs in a little of the oil until lightly golden; set aside.','Fry the onion, then the curry powder, turmeric and garlic-ginger for a minute.','Add the tomato and a splash of water; simmer 6 minutes to a thick sauce.','Add the potato and eggs, warm through gently, finish with coriander.','Taste and season with salt, with a squeeze of lemon to lift it.']},
      {name:'Budget',icon:'💰',time:35,costPP:16,nutrition:{kcal:360,protein_g:15,carbs_g:46,fat_g:14},
        feel:'More potato, the same good eggs — a complete protein supper for very little.',
        tip:'Eggs are the cheapest complete protein in the shop; lean on extra potato to make the pot stretch further.',
        didYouKnow:'Eggs are one of the cheapest complete proteins you can buy, and potato bulks the curry into a full meal — this is frugal cooking at its best.',
        ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:200,u:'g'},{n:'tomato',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:5,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Boil the eggs and plenty of cubed potato until done.','Fry the onion with the curry powder, turmeric and garlic-ginger.','Add the tomato and water; simmer to a sauce.','Fold in the potato and halved eggs, warm through, season well with salt and pepper and serve.']},
      {name:'Quick',icon:'⚡',time:30,costPP:20,nutrition:{kcal:380,protein_g:16,carbs_g:42,fat_g:16},
        feel:'Eggs and potatoes boiled in one pot while the sauce cooks — supper in half an hour.',
        tip:'Boil the eggs and potato together in one pot to save time and washing up while the sauce simmers alongside.',
        didYouKnow:'Boil the eggs and potatoes in the same pot while the sauce cooks, and the whole curry is on the table in thirty minutes flat.',
        ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Boil the eggs and cubed potato together until done; drain.','Meanwhile fry the onion, curry powder and garlic-ginger, then add tomato and water and simmer to a sauce.','Taste and season with salt, with a squeeze of lemon to lift it.','Fold in the potato and halved eggs, warm through and serve with rice or roti.']}
    ]},
  {id:'sp-coconut-chickpea-curry', cat:'stewscurries', goesWith:['Rice','Roti','Banana sambal','Fresh coriander','Lime'], diet:'vegan', protein:'veg', name:'Coconut Chickpea Curry', emoji:'🥥', cuisine:'Indian-inspired', time:30, costPP:33,
    feel:'Chickpeas and spinach simmered in a creamy coconut-tomato sauce — a vegan curry that satisfies everyone.',
    ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Heat the oil in a pot and fry the chopped onion until soft, about 6 minutes.','Add the garlic-ginger paste and curry powder and fry for 1 minute until fragrant — if it smells dusty, give it a few more seconds.','Add the chopped tomato and a splash of water; cook 5 minutes until it breaks down into a sauce.','Pour in the coconut milk and the drained chickpeas and simmer gently 10 minutes until thick and creamy.','Taste and season with salt, with a squeeze of lemon to lift it.','Stir in the spinach and cook just until wilted. Season, finish with a squeeze of lime, and serve with rice or roti.'],
    tip:'A squeeze of lime at the very end lifts the whole curry — coconut curries need that little hit of acid.',
    didYouKnow:'Chickpeas are one of the oldest cultivated legumes on earth, grown for over 7,000 years. Tinned ones are already fully cooked, which is the whole reason this curry comes together in half an hour.',
    freezes:true, fridgeDays:4,
    nutrition:{kcal:400,protein_g:14,carbs_g:44,fat_g:20}, storage:'Keeps 4 days; freezes well; the flavours deepen overnight.',
    versions:[
      {name:'Creamy Coconut',icon:'🏆',default:true,time:35,costPP:36,nutrition:{kcal:440,protein_g:15,carbs_g:46,fat_g:24},
        feel:'Full-fat coconut milk, a proper bloomed spice base and a finish of fresh coriander and lime — the lush, restaurant-style bowl.',
        tip:'Use FULL-FAT coconut milk and stir the thick cream from the top of the tin in last — that is what keeps the sauce silky instead of thin.',
        didYouKnow:'The cream that rises to the top of a tin of coconut milk is the richest part. Stirring it in at the end, off a hard boil, keeps the sauce glossy and stops it splitting.',
        ingredients:[{n:'chickpeas',pp:110,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'tomato',pp:90,u:'g'},{n:'baby spinach',pp:60,u:'g'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:7,u:'g'},{n:'garlic-ginger paste',pp:10,u:'g'},{n:'fresh coriander',pp:5,u:'g'},{n:'lime',pp:0.5,u:''},{n:'oil',pp:12,u:'ml'}],
        method:['Fry the onion in the oil until soft and just turning golden, 8 minutes.','Add the garlic-ginger and curry powder; fry 1 minute until fragrant.','Add the tomato and a splash of water and cook to a thick base, 6 minutes.','Pour in most of the coconut milk and the chickpeas; simmer gently 12 minutes.','Stir in the spinach to wilt, then the reserved thick coconut cream off the heat. Finish with coriander and a good squeeze of lime.','Taste and season with salt, with a squeeze of lemon to lift it.']},
      {name:'Budget',icon:'💰',time:50,costPP:22,nutrition:{kcal:410,protein_g:16,carbs_g:48,fat_g:18},
        feel:'Dried chickpeas soaked overnight and a tin of coconut milk — the thriftiest big pot, for next to nothing.',
        tip:'Soak the dried chickpeas overnight in plenty of water — they swell to nearly triple their weight, so a small bag makes a huge pot.',
        didYouKnow:'Dried chickpeas cost a fraction of tinned and roughly triple in weight once soaked and cooked — the single cheapest way to fill this curry out.',
        ingredients:[{n:'chickpeas',pp:50,u:'g'},{n:'coconut milk',pp:90,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Soak the dried chickpeas overnight, then boil in fresh water until tender (about 45 min) — do this ahead.','Fry the onion, then the garlic-ginger and curry powder, 1 minute.','Add the tomato and cook to a base.','Add the coconut milk and cooked chickpeas; simmer 10 minutes.','Wilt in the spinach, season well with salt and pepper and serve.']},
      {name:'Quick',icon:'⚡',time:15,costPP:33,nutrition:{kcal:400,protein_g:14,carbs_g:44,fat_g:20},
        feel:'A tin of chickpeas, a tin of coconut milk, a spoon of curry powder — the honest 15-minute pantry curry.',
        tip:'Everything here is from the cupboard — keep a tin of chickpeas and coconut milk in, and supper is never more than 15 minutes away.',
        didYouKnow:'A tin of chickpeas, a tin of coconut milk and a spoon of curry powder is the original store-cupboard curry — no fresh shopping required.',
        ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the garlic-ginger and curry powder in the oil for a minute.','Add the tomato, coconut milk and drained chickpeas all at once; simmer 8 minutes.','Stir in the spinach to wilt, season well with salt and pepper and serve over rice.']},
      {name:'Sweet Potato',icon:'🍠',time:45,costPP:31,nutrition:{kcal:460,protein_g:14,carbs_g:58,fat_g:18},
        feel:'Roasted sweet potato folded through for natural sweetness and body — a hearty, complete vegan meal.',
        tip:'Roast the sweet potato rather than boil it — the caramelised edges add a depth that boiling washes away.',
        didYouKnow:'Sweet potato adds natural sweetness and enough body to turn this from a side curry into a full, satisfying meal — no meat needed.',
        ingredients:[{n:'chickpeas',pp:80,u:'g'},{n:'sweet potato',pp:120,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Toss cubed sweet potato in a little oil and roast at 200°C for 25 minutes until caramelised at the edges.','Meanwhile fry the onion, then the garlic-ginger and curry powder.','Add the tomato and cook to a base, then the coconut milk and chickpeas; simmer 10 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Fold through the roasted sweet potato and the spinach; warm through and serve.']}
    ]},
  {id:'sp-dhal', cat:'stewscurries', goesWith:['Rice','Roti','Banana sambal','Fresh coriander'], diet:'vegan', protein:'veg', name:'Lentil & Spinach Dhal', emoji:'🌱', cuisine:'Indian', time:35, costPP:24,
    feel:'Golden lentils simmered soft with spices and spinach — humble, nourishing and deeply comforting.',
    ingredients:[{n:'red lentils',pp:80,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'cumin seeds',pp:2,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Rinse the red lentils under cold water until it runs clear, then put them in a pot with the turmeric and three times their volume of water.','Bring to a boil, then turn down and simmer 20 minutes, stirring now and then, until the lentils collapse into a soft porridge. Top up with water if it gets too thick.','While that cooks, make the tarka: heat the oil in a small pan, add the cumin seeds and let them sizzle, then add the chopped onion and garlic-ginger and fry until golden.','Stir the tarka and the chopped tomato into the lentils and simmer 5 minutes more.','Add the spinach to wilt, season well with salt and pepper with salt, and serve with rice or roti.'],
    tip:'Pouring a sizzling spiced tarka over the dhal at the end is the whole secret — it wakes up all the flavour.',
    didYouKnow:'The word "dhal" means both the dried split pulse and the dish made from it. Across India it is the everyday staple, eaten with rice or roti at almost every meal.',
    freezes:true, fridgeDays:4,
    nutrition:{kcal:340,protein_g:18,carbs_g:50,fat_g:8}, storage:'Keeps 4 days; thickens as it sits — just loosen with a splash of water when reheating.',
    versions:[
      {name:'Tarka Dhal',icon:'🏆',default:true,time:40,costPP:26,nutrition:{kcal:360,protein_g:18,carbs_g:50,fat_g:11},
        feel:'Soft golden lentils crowned with a fragrant tarka of cumin, garlic and chilli sizzled in ghee — the proper bowl.',
        tip:'Make the tarka LAST, while the dhal is still hot, and pour it over at the table — the sizzle and aroma are part of the dish.',
        didYouKnow:'The tarka (also tadka) is whole spices bloomed in hot oil or ghee and poured over the finished dhal. That sizzle you hear is the spices releasing their oils into the fat.',
        ingredients:[{n:'red lentils',pp:90,u:'g'},{n:'tomato',pp:70,u:'g'},{n:'onion',pp:60,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'cumin seeds',pp:3,u:'g'},{n:'garlic-ginger paste',pp:10,u:'g'},{n:'butter',pp:10,u:'g'},{n:'fresh coriander',pp:5,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Simmer the rinsed lentils with turmeric and plenty of water 20–25 minutes until soft and creamy.','Stir in the tomato and cook 5 minutes; season.','For the tarka, heat the butter and oil, sizzle the cumin seeds, then fry the onion and garlic-ginger until deep golden.','Pour the hot tarka over the dhal, stir half through and leave the rest on top.','Taste and season with salt, with a squeeze of lemon to lift it.','Wilt in the spinach, finish with coriander and serve.']},
      {name:'Budget',icon:'💰',time:35,costPP:16,nutrition:{kcal:330,protein_g:18,carbs_g:52,fat_g:6},
        feel:'Pure lentils, onion and spice — one of the cheapest, most filling meals you can cook.',
        tip:'Red lentils need no soaking and cook in 20 minutes — keep a bag in the cupboard as your cheapest protein.',
        didYouKnow:'Red lentils are among the cheapest proteins you can buy and need no soaking — they were the original budget protein long before it had a name.',
        ingredients:[{n:'red lentils',pp:90,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'onion',pp:60,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'cumin seeds',pp:2,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Simmer the rinsed lentils with turmeric and water until soft, 20 minutes.','Fry the onion, cumin and garlic-ginger in the oil until golden.','Stir into the lentils with the tomato; simmer 5 minutes.','Season generously with salt and pepper and serve with rice — it is a full meal on its own.']},
      {name:'Quick',icon:'⚡',time:25,costPP:24,nutrition:{kcal:340,protein_g:18,carbs_g:50,fat_g:8},
        feel:'Red lentils collapse fast — the speediest way to a creamy, comforting bowl.',
        tip:'Red lentils break down quicker than any other pulse, so stir often near the end to stop them catching on the base.',
        didYouKnow:'Red lentils collapse into a creamy dhal faster than any other pulse, which is exactly why they are the weeknight choice over slower chana or whole lentils.',
        ingredients:[{n:'red lentils',pp:80,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the onion and garlic-ginger in the oil for 3 minutes.','Add the rinsed lentils, turmeric, tomato and plenty of water; simmer hard 15 minutes, stirring, until soft.','Wilt in the spinach, season well with salt and pepper and serve.']},
      {name:'Coconut Dhal',icon:'🥥',time:40,costPP:30,nutrition:{kcal:420,protein_g:18,carbs_g:50,fat_g:18},
        feel:'Finished with coconut milk for a richer, sweeter, South-Indian-style bowl.',
        tip:'Add the coconut milk near the end and barely simmer — a hard boil can make it grainy.',
        didYouKnow:'In South India, dhal is often finished with coconut milk for a richer, sweeter bowl — a regional twist on the same humble lentil base.',
        ingredients:[{n:'red lentils',pp:80,u:'g'},{n:'coconut milk',pp:80,u:'ml'},{n:'tomato',pp:60,u:'g'},{n:'onion',pp:50,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'cumin seeds',pp:2,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Simmer the rinsed lentils with turmeric and water until soft.','Fry the onion, cumin and garlic-ginger and stir in with the tomato.','Pour in the coconut milk and simmer gently 5 minutes — do not boil hard.','Wilt in the spinach, season well with salt and pepper and serve.']}
    ]},
  {id:'sp-chilli-con-carne', cat:'stewscurries', goesWith:['Rice','Sour cream','Grated cheddar','Tortillas','Fresh coriander'], diet:'meat', protein:'beef', name:'Beef Chilli con Carne', emoji:'🌶️', cuisine:'Tex-Mex', time:45, costPP:32,
    feel:'Rich, smoky beef chilli with beans and a hint of dark chocolate — perfect with rice or a baked potato.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'kidney beans',pp:60,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:4,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'dark chocolate',pp:5,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Heat the oil in a pot and fry the chopped onion until soft.','Add the beef mince and brown it well, breaking up every lump with a spoon — let it colour properly, that browning is flavour.','Stir in the smoked paprika and cumin and cook a minute until fragrant.','Add the tomato, drained kidney beans and the stock; simmer gently 30 minutes until rich and thick.','Stir in a square of dark chocolate to melt — it deepens the chilli without sweetening it. Season well with salt and pepper, then serve over rice or with a baked potato.'],
    tip:'A little dark chocolate or cocoa rounds out the chilli and takes the edge off the tomato without ever tasting sweet.',
    didYouKnow:'"Chilli con carne" simply means "chilli with meat" — and despite the Spanish name it was born in Texas, not Mexico, which is why it is properly called a Tex-Mex dish.',
    freezes:true, fridgeDays:4,
    nutrition:{kcal:460,protein_g:28,carbs_g:38,fat_g:22}, storage:'Keeps 4 days, even better reheated; freezes brilliantly.',
    versions:[
      {name:'Smoky Slow',icon:'🏆',default:true,time:90,costPP:36,nutrition:{kcal:500,protein_g:30,carbs_g:38,fat_g:26},
        feel:'Browned mince and a long, low simmer with smoked paprika, cumin and a whisper of cocoa — deep, rich and proper.',
        tip:'Give it the full hour-plus on the lowest heat — chilli, like a good ragù, only gets better the longer it goes.',
        didYouKnow:'A square of dark chocolate or a spoon of cocoa stirred in near the end deepens the chilli without sweetening it — a trick borrowed straight from Mexican mole sauce.',
        ingredients:[{n:'beef mince',pp:140,u:'g'},{n:'kidney beans',pp:70,u:'g'},{n:'tomato',pp:140,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:4,u:'g'},{n:'dark chocolate',pp:6,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Soften the onion and garlic in the oil.','Brown the mince hard, in batches if needed, for deep colour.','Cook out the smoked paprika and cumin for a minute.','Add the tomato, beans and stock; simmer the lowest heat 60–75 minutes, stirring now and then.','Melt in the dark chocolate, season and rest 10 minutes before serving.','Taste and season well with salt and pepper.']},
      {name:'Budget',icon:'💰',time:45,costPP:24,nutrition:{kcal:430,protein_g:24,carbs_g:46,fat_g:16},
        feel:'Less mince, more beans — a heartier, cheaper pot that loses nothing in flavour.',
        tip:'Add a second tin of beans in place of some mince — they soak up the smoky sauce and stretch the pot a long way.',
        didYouKnow:'Beans stretch a little mince a long way and add fibre and protein — historically many chilli pots used beans precisely because meat was dear.',
        ingredients:[{n:'beef mince',pp:80,u:'g'},{n:'kidney beans',pp:120,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:4,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the onion, then brown the mince well.','Stir in the smoked paprika and cumin.','Add the tomato, a generous double helping of beans and the stock; simmer 30 minutes.','Season well with salt and pepper, then serve over rice — the beans make it filling and cheap.']},
      {name:'Quick',icon:'⚡',time:30,costPP:32,nutrition:{kcal:460,protein_g:28,carbs_g:38,fat_g:22},
        feel:'Browned mince, a tin of tomatoes, a tin of beans, a spoon of spice — a rich bowl in half an hour.',
        tip:'Keep tinned tomatoes and beans in the cupboard and this is a 30-minute supper any night of the week.',
        didYouKnow:'Browned mince, a tin of tomatoes, a tin of beans and a spoon of chilli spice make a genuinely rich bowl in thirty minutes — the reliable weeknight chilli.',
        ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'kidney beans',pp:60,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:4,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the onion and mince together.','Add the smoked paprika and cumin, then the tomato and beans.','Simmer hard 20 minutes until thick. Season well with salt and pepper, then serve.']},
      {name:'Three-Bean (veg)',icon:'🌱',time:35,costPP:26,nutrition:{kcal:400,protein_g:18,carbs_g:56,fat_g:10},
        feel:'Mince swapped for a third bean — every bit as hearty and smoky, fully vegetarian.',
        tip:'Mash a ladle of the beans against the side of the pot to thicken the sauce in place of the mince.',
        didYouKnow:'Swap the mince for a third bean and the chilli is just as satisfying — beans were the original protein in plenty of chilli pots anyway.',
        ingredients:[{n:'kidney beans',pp:80,u:'g'},{n:'black beans',pp:80,u:'g'},{n:'butter beans',pp:60,u:'g'},{n:'tomato',pp:130,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'dark chocolate',pp:5,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Soften the onion in the oil, then cook out the smoked paprika and cumin.','Add the tomato and all three drained beans with a splash of water.','Simmer 25 minutes, mashing a few beans to thicken.','Melt in the dark chocolate, season well with salt and pepper and serve.']}
    ]},
  {id:'sp-thai-green-curry', cat:'stewscurries', goesWith:['Jasmine rice','Fresh basil','Lime','Fresh coriander'], diet:'meat', protein:'chicken', name:'Thai Green Chicken Curry', emoji:'🥥', cuisine:'Thai', time:30, costPP:40,
    feel:'Fragrant coconut green curry with chicken, green beans and basil — aromatic and ready in 30 minutes.',
    ingredients:[{n:'chicken breast',pp:140,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'green curry paste',pp:20,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'baby marrow',pp:40,u:'g'},{n:'fish sauce',pp:8,u:'ml'},{n:'fresh basil',pp:4,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the green curry paste in a little oil over medium heat for 1–2 minutes until it smells fragrant — this blooms the spices.','Pour in about a third of the coconut milk and let it bubble and split slightly, then add the rest and bring to a gentle simmer.','Add the sliced chicken and the vegetables and simmer 8–10 minutes until the chicken is cooked through.','Season with the fish sauce and a pinch of sugar — taste and balance until it is savoury, a little sweet and fragrant.','Taste and season with salt, with a squeeze of lemon to lift it.','Tear in the fresh basil off the heat and serve with jasmine rice.'],
    tip:'Frying the curry paste first blooms the spices and is the difference between a flat curry and a fragrant one.',
    didYouKnow:'Thai green curry (gaeng keow wan) is named for its colour, which comes from fresh green chillies and herbs — and despite looking gentle, it is traditionally the hottest of the Thai curries.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:480,protein_g:32,carbs_g:18,fat_g:32}, storage:'Keeps 3 days; freezes well — add the basil fresh when reheating.',
    versions:[
      {name:'From-Scratch Paste',icon:'🏆',default:true,time:45,costPP:46,nutrition:{kcal:500,protein_g:33,carbs_g:18,fat_g:34},
        feel:'A green curry paste pounded fresh from chilli, lemongrass and coriander — worlds more fragrant than the jar.',
        tip:'Pound the paste in a mortar or blitz it fine, and toast it in oil until really aromatic — fresh paste is the whole difference.',
        didYouKnow:'A traditional green curry paste is pounded from green chilli, lemongrass, galangal, coriander root and shrimp paste — far fresher and more fragrant than anything in a jar.',
        ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'coconut milk',pp:140,u:'ml'},{n:'green chilli',pp:10,u:'g'},{n:'lemongrass',pp:8,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'fresh coriander',pp:8,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'baby marrow',pp:40,u:'g'},{n:'fish sauce',pp:10,u:'ml'},{n:'fresh basil',pp:5,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Blitz or pound the green chilli, lemongrass, garlic-ginger and coriander into a rough paste.','Fry the paste in the oil 2–3 minutes until deeply fragrant.','Add a third of the coconut milk to sizzle, then the rest; bring to a simmer.','Add the chicken and vegetables; simmer 10 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Season with fish sauce and a pinch of sugar, tear in basil and serve with jasmine rice.']},
      {name:'Budget',icon:'💰',time:30,costPP:30,nutrition:{kcal:450,protein_g:28,carbs_g:20,fat_g:30},
        feel:'A good jar of paste and a tin of coconut milk — most of the magic, a fraction of the fuss.',
        tip:'A jar of green curry paste keeps for months and stretches across many curries — the budget cook\'s shortcut to fragrant.',
        didYouKnow:'A good jarred green curry paste plus a tin of coconut milk delivers most of the magic of the real thing for a fraction of the effort and cost.',
        ingredients:[{n:'chicken thighs',pp:130,u:'g'},{n:'coconut milk',pp:110,u:'ml'},{n:'green curry paste',pp:18,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'baby marrow',pp:50,u:'g'},{n:'fish sauce',pp:8,u:'ml'},{n:'oil',pp:8,u:'ml'}],
        method:['Fry the paste in the oil until fragrant.','Add the coconut milk and bring to a simmer.','Add the diced thigh and vegetables; simmer 12 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Season with fish sauce and a pinch of sugar; serve with rice.']},
      {name:'Quick',icon:'⚡',time:25,costPP:40,nutrition:{kcal:480,protein_g:32,carbs_g:18,fat_g:32},
        feel:'Paste, coconut milk, quick-cooking chicken and veg — a fragrant curry in under 30 minutes.',
        tip:'Slice the chicken thin so it cooks in minutes — this is a fast curry, not a slow braise.',
        didYouKnow:'Fry the paste, pour in coconut milk, add thinly sliced chicken and quick veg — green curry is one of the fastest fragrant suppers there is.',
        ingredients:[{n:'chicken breast',pp:140,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'green curry paste',pp:20,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'fish sauce',pp:8,u:'ml'},{n:'fresh basil',pp:4,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the paste in the oil 1 minute.','Add the coconut milk and simmer.','Add thinly sliced chicken and the beans; cook 8 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Season with fish sauce, tear in basil and serve.']},
      {name:'Vegetable & Tofu',icon:'🌱',time:30,costPP:34,nutrition:{kcal:420,protein_g:18,carbs_g:24,fat_g:30},
        feel:'Tofu and a pile of vegetables in the fragrant green sauce — just as good without the meat.',
        tip:'Press the tofu and fry it golden first so it holds its shape and soaks up the sauce instead of crumbling.',
        didYouKnow:'Green curry is just as good meat-free — firm tofu, pressed and fried, drinks up the fragrant sauce and holds its shape in the pot.',
        ingredients:[{n:'tofu',pp:120,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'green curry paste',pp:20,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'baby marrow',pp:50,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'fish sauce',pp:8,u:'ml'},{n:'fresh basil',pp:4,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Press the tofu, cube it and fry in the oil until golden on all sides; set aside.','Fry the paste, add the coconut milk and simmer.','Add the vegetables and cook 6 minutes, then fold in the tofu.','Taste and season with salt, with a squeeze of lemon to lift it.','Season with fish sauce (or soy for vegan), tear in basil and serve.']}
    ]},
  {id:'sp-moroccan-tagine', cat:'stewscurries', goesWith:['Couscous','Rice','Fresh coriander'], diet:'meat', protein:'lamb', name:'Moroccan Lamb & Apricot Tagine', emoji:'🍑', cuisine:'Moroccan', time:120, costPP:54,
    feel:'Lamb slow-cooked with warm spices, sweet apricots and chickpeas — fragrant, tender and special.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'dried apricots',pp:30,u:'g'},{n:'chickpeas',pp:60,u:'g'},{n:'onion',pp:60,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'ras el hanout',pp:5,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb chunks in the oil until coloured all over, then set aside.','Soften the onion in the same pot, then stir in the ras el hanout and cook a minute until the kitchen smells fragrant.','Return the lamb with the tomato, apricots, chickpeas and stock.','Cover and simmer very gently for about 1.5 hours, until the lamb is tender and the sauce is rich and lightly sweet.','Taste and season well with salt and pepper.','Serve over couscous with fresh coriander.'],
    tip:'The apricots melt into the sauce as it cooks and balance the warm spice with a gentle sweetness.',
    didYouKnow:'A tagine is both the cone-lidded clay pot AND the stew cooked in it — the tall cone traps rising steam, condenses it and drips it back down, keeping everything moist with very little liquid.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:540,protein_g:32,carbs_g:38,fat_g:28}, storage:'Keeps 3 days and improves overnight; freezes well.',
    versions:[
      {name:'Lamb & Apricot',icon:'🏆',default:true,time:135,costPP:58,nutrition:{kcal:560,protein_g:33,carbs_g:40,fat_g:30},
        feel:'Lamb braised low with ras el hanout, sweet apricots and chickpeas until fragrant and falling-apart tender.',
        tip:'Toast the ras el hanout in the oil for a minute before the liquid goes in — blooming the spices wakes up the whole blend.',
        didYouKnow:'Ras el hanout means "head of the shop" — traditionally the very best blend a spice seller offers, often a dozen or more spices including rose, cumin, ginger and cinnamon.',
        ingredients:[{n:'lamb',pp:160,u:'g'},{n:'dried apricots',pp:35,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomato',pp:90,u:'g'},{n:'ras el hanout',pp:6,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'fresh coriander',pp:5,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the lamb all over; set aside.','Soften the onion, bloom the ras el hanout 1 minute.','Return the lamb with tomato, apricots, chickpeas and stock.','Cover and braise gently 1.5–2 hours until tender.','Taste and season well with salt and pepper.','Finish with coriander and serve over couscous.']},
      {name:'Budget',icon:'💰',time:90,costPP:34,nutrition:{kcal:480,protein_g:24,carbs_g:48,fat_g:20},
        feel:'Chicken thighs and extra chickpeas in place of lamb — the same fragrant, sweet-savoury pot for less.',
        tip:'Chicken thighs need only about 40 minutes, so this version is quicker as well as cheaper.',
        didYouKnow:'Chicken thighs or extra chickpeas stand in beautifully for lamb, keeping the tagine cheap and quicker without losing its fragrant, sweet-savoury soul.',
        ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'dried apricots',pp:30,u:'g'},{n:'chickpeas',pp:90,u:'g'},{n:'onion',pp:60,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'ras el hanout',pp:5,u:'g'},{n:'chicken stock',pp:180,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the chicken; set aside.','Soften the onion, bloom the ras el hanout.','Return the chicken with tomato, apricots, chickpeas and stock.','Taste and season well with salt and pepper.','Cover and simmer 40 minutes until tender. Serve over couscous.']},
      {name:'Chicken & Olive',icon:'🫒',time:90,costPP:40,nutrition:{kcal:470,protein_g:30,carbs_g:24,fat_g:28},
        feel:'Chicken with green olives and a bright, salty-sour lift of preserved lemon — the savoury Moroccan classic.',
        tip:'Add the olives near the end so they keep their bite; a little lemon zest stands in well if you have no preserved lemon.',
        didYouKnow:'A classic Moroccan tagine pairs chicken with green olives and preserved lemon — the salty, sour lemon cutting through the rich, spiced sauce.',
        ingredients:[{n:'chicken thighs',pp:160,u:'g'},{n:'olives',pp:30,u:'g'},{n:'onion',pp:70,u:'g'},{n:'ras el hanout',pp:5,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'chicken stock',pp:200,u:'ml'},{n:'fresh coriander',pp:5,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Brown the chicken; set aside.','Soften the onion, bloom the ras el hanout.','Return the chicken with the stock and lemon; cover and simmer 35 minutes.','Taste and season well with salt and pepper.','Stir in the olives for the last 5 minutes, finish with coriander and serve.']},
      {name:'Vegetable (vegan)',icon:'🌱',time:60,costPP:30,nutrition:{kcal:420,protein_g:13,carbs_g:62,fat_g:14},
        feel:'Chickpeas, sweet potato and apricots in the fragrant spiced sauce — a hearty meat-free tagine.',
        tip:'Roast the sweet potato a little first if you have time — it holds its shape better than when boiled straight in.',
        didYouKnow:'Chickpeas, sweet potato and dried fruit make a tagine every bit as hearty meat-free — vegetable tagines are everyday eating across Morocco, not an afterthought.',
        ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'sweet potato',pp:120,u:'g'},{n:'dried apricots',pp:30,u:'g'},{n:'onion',pp:60,u:'g'},{n:'tomato',pp:90,u:'g'},{n:'ras el hanout',pp:5,u:'g'},{n:'vegetable stock',pp:200,u:'ml'},{n:'oil',pp:12,u:'ml'}],
        method:['Soften the onion in the oil, bloom the ras el hanout.','Add the tomato, sweet potato, chickpeas, apricots and stock.','Cover and simmer 30–35 minutes until the sweet potato is tender and the sauce rich.','Taste and season well with salt and pepper.','Serve over couscous with coriander.']}
    ]},
  {id:'sp-chicken-pilau', cat:'stewscurries', goesWith:['Carrot sambal','Banana sambal','Roti','Plain yoghurt'], diet:'meat', protein:'chicken', name:'Chicken Pilau', emoji:'🍚', cuisine:'Indian', time:50, costPP:38,
    feel:'Fragrant basmati cooked with spiced chicken and whole spices — the lighter, everyday cousin of biryani.',
    ingredients:[{n:'chicken thighs',pp:140,u:'g'},{n:'basmati rice',pp:75,u:'g'},{n:'onion',pp:60,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'garam masala',pp:5,u:'g'},{n:'chicken stock',pp:150,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Rinse the basmati rice in a few changes of cold water until it runs clear, then leave it to soak while you start.','Heat the oil in a wide pot and fry the sliced onion until deep golden — this colour flavours the whole dish.','Add the chicken pieces, the cinnamon stick and bay leaves and brown for a few minutes.','Stir in the ginger-garlic and garam masala and cook 1 minute until fragrant.','Drain the rice, stir it through to coat in the spices, then pour in the stock. Bring to a boil, cover tightly, turn the heat to low and cook 12–15 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Turn off the heat and leave it covered to steam 10 minutes more, then fluff with a fork and serve with sambals.'],
    tip:'Unlike biryani, pilau cooks everything together in one pot — simpler and quicker, but every grain still carries the spice.',
    didYouKnow:'Pilau (pilaf, pulao) is the gentle cousin of biryani: everything cooks together in one pot, rather than par-cooking rice and meat separately and layering them.',
    freezes:true, fridgeDays:2,
    nutrition:{kcal:520,protein_g:28,carbs_g:62,fat_g:18}, storage:'Keeps 2 days; reheat covered with a splash of water so the rice stays fluffy.',
    versions:[
      {name:'Whole-Spice',icon:'🏆',default:true,time:55,costPP:42,nutrition:{kcal:540,protein_g:30,carbs_g:62,fat_g:20},
        feel:'Deep-fried golden onions and whole spices bloomed in the oil, so every grain of rice carries the perfume.',
        tip:'Fry the onions slowly to a deep golden brown before anything else — they are the flavour and colour of the whole pot.',
        didYouKnow:'The whole spices — cinnamon, cardamom, cloves, bay — are bloomed in the hot oil first so their perfume infuses every single grain of rice as it cooks.',
        ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'basmati rice',pp:80,u:'g'},{n:'onion',pp:80,u:'g'},{n:'ginger-garlic paste',pp:10,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'bay leaves',pp:1,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'chicken stock',pp:150,u:'ml'},{n:'oil',pp:14,u:'ml'}],
        method:['Rinse and soak the rice. Fry the sliced onion slowly until deep golden, 10 minutes.','Add the chicken, cinnamon and bay; brown a few minutes.','Stir in the ginger-garlic, garam masala and a spoon of yoghurt; cook 2 minutes.','Add the drained rice, coat, then pour in the stock. Boil, cover, lowest heat 12–15 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Rest covered 10 minutes, fluff and serve with sambals.']},
      {name:'Budget',icon:'💰',time:50,costPP:28,nutrition:{kcal:500,protein_g:26,carbs_g:64,fat_g:16},
        feel:'One pot, cheap thighs and plain rice carrying all the spice — filling and frugal.',
        tip:'Everything cooks in one pot, so it is light on fuel and washing up as well as on the wallet.',
        didYouKnow:'Cooking the rice and chicken together in one pot uses less fuel and fewer dishes, and bone-in or thigh meat keeps it cheap and moist.',
        ingredients:[{n:'chicken thighs',pp:120,u:'g'},{n:'rice',pp:80,u:'g'},{n:'onion',pp:60,u:'g'},{n:'ginger-garlic paste',pp:6,u:'g'},{n:'garam masala',pp:5,u:'g'},{n:'chicken stock',pp:150,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the onion until golden, add the chicken and brown.','Stir in the ginger-garlic and garam masala.','Add the rinsed rice, coat, then the stock; boil, cover and cook low 15 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Rest covered 10 minutes, fluff and serve.']},
      {name:'Quick',icon:'⚡',time:35,costPP:38,nutrition:{kcal:520,protein_g:28,carbs_g:62,fat_g:18},
        feel:'Brown, add rice and stock, cover and walk away — the rice steams itself.',
        tip:'Once the lid is on, do not lift it or stir — let the rice steam undisturbed or it goes gluey.',
        didYouKnow:'Once the rice and stock go in and the lid is on, the rice steams itself — leave it alone and it does the work while you set the table.',
        ingredients:[{n:'chicken thighs',pp:140,u:'g'},{n:'basmati rice',pp:75,u:'g'},{n:'onion',pp:50,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'garam masala',pp:5,u:'g'},{n:'chicken stock',pp:150,u:'ml'},{n:'oil',pp:10,u:'ml'}],
        method:['Brown the onion and chicken together in the oil.','Add the ginger-garlic and garam masala, then the rinsed rice; coat well.','Pour in the stock, boil, cover and cook low 12 minutes.','Taste and season with salt, with a squeeze of lemon to lift it.','Rest 8 minutes covered, fluff and serve.']}
    ]},

  // ── 🥧 OVEN BAKES & ROASTS — added 22 Jun (Supper build, Batch 4) ──
  {id:'sp-bobotie', cat:'ovenbakes', goesWith:['Yellow rice','Apricot chutney','Banana sambal','Carrot sambal'], diet:'meat', protein:'beef', name:'Classic Bobotie', emoji:'🍛', cuisine:'South African', time:75, costPP:34,
    feel:'Curried mince baked under a golden savoury custard — sweet, spiced and unmistakably South African.',
    ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'bread',pp:15,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'chutney',pp:15,u:'g'},{n:'raisins',pp:15,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Soak the slice of bread in a little of the milk until soft.','Fry the chopped onion in the oil until soft, then stir in the curry powder and cook 1 minute until fragrant.','Add the mince and brown it, breaking up the lumps, then stir in the chutney, raisins and the soaked, mashed bread. Cook a few minutes until rich. Season well with salt and pepper.','Press the mince into an oven dish and tuck a few bay leaves upright into the surface.','Beat the egg with the rest of the milk and the turmeric, pour it gently over the mince, and bake at 180°C until the custard is set and golden, about 35 minutes. Serve with yellow rice and chutney.'],
    tip:'The chutney and raisins give bobotie its signature sweet-savoury balance — do not skip them.',
    didYouKnow:'Bobotie is widely regarded as South Africa\'s national dish. Its roots are Cape Malay, carried to the Cape from the Dutch East Indies in the 1600s and 1700s — the name itself likely comes from the Indonesian "bobotok".',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:520,protein_g:28,carbs_g:36,fat_g:28}, storage:'Keeps 3 days; reheats beautifully — many say it is better the next day.',
    versions:[
      {name:'Cape Malay',icon:'🏆',default:true,time:80,costPP:38,nutrition:{kcal:560,protein_g:30,carbs_g:36,fat_g:32},
        feel:'The full traditional bobotie — curried mince with chutney, raisins and a hint of almond, under a turmeric-gold custard with bay leaves standing proud.',
        tip:'Stand the bay leaves upright in the custard before baking — they perfume the top as it sets and are the classic finishing touch.',
        didYouKnow:'The bay leaves stood upright in the custard are traditional, not just decorative — they gently perfume the egg topping as it bakes into a savoury, sliceable custard, almost a savoury crème.',
        ingredients:[{n:'beef mince',pp:160,u:'g'},{n:'bread',pp:20,u:'g'},{n:'milk',pp:70,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:70,u:'g'},{n:'curry powder',pp:9,u:'g'},{n:'chutney',pp:20,u:'g'},{n:'raisins',pp:20,u:'g'},{n:'almonds',pp:10,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Soak the bread in some of the milk.','Soften the onion, add curry powder, fry 1 minute.','Brown the mince, then stir in the chutney, raisins, flaked almonds and mashed bread; cook to rich. Season well with salt and pepper.','Press into a dish and stand bay leaves upright in the top.','Beat egg, remaining milk and turmeric; pour over and bake 180°C for 35 minutes until golden and set. Serve with yellow rice.']},
      {name:'Budget',icon:'💰',time:75,costPP:26,nutrition:{kcal:480,protein_g:24,carbs_g:42,fat_g:24},
        feel:'More soaked bread to stretch the mince — the thrifty version that loses none of the flavour.',
        tip:'An extra slice of soaked bread bulks the mince out and keeps it moist — a classic make-it-go-further trick.',
        didYouKnow:'Soaking stale bread to bulk out and moisten mince is one of the oldest thrift techniques in home cooking — bobotie was built to make a little meat feed a family.',
        ingredients:[{n:'beef mince',pp:110,u:'g'},{n:'bread',pp:30,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:70,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'chutney',pp:15,u:'g'},{n:'raisins',pp:15,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Soak two slices of bread in the milk.','Soften the onion with the curry powder.','Brown the mince, stir in the chutney, raisins and plenty of soaked bread; season well with salt and pepper.','Press into a dish, top with the egg-milk-turmeric custard and bake until set and golden.']},
      {name:'Quick',icon:'⚡',time:35,costPP:34,nutrition:{kcal:510,protein_g:28,carbs_g:36,fat_g:27},
        feel:'Skips the long bake — curried mince finished under the grill with the custard set on top.',
        tip:'Pour the custard over the hot cooked mince and finish under the grill for 5–8 minutes instead of baking from cold.',
        didYouKnow:'Because the mince is already cooked, the custard only needs to set — a few minutes under a hot grill does the job when you cannot wait for the oven.',
        ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'bread',pp:15,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'chutney',pp:15,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Soak the bread in milk.','Fry the onion and curry powder, brown the mince, stir in chutney and soaked bread; season.','Spread in a heatproof dish, pour over the beaten egg, milk and turmeric.','Taste and season well with salt and pepper.','Set under a hot grill 5–8 minutes until the custard is just set and golden. Serve at once.']},
      {name:'Lentil (veg)',icon:'🌱',time:70,costPP:24,nutrition:{kcal:430,protein_g:18,carbs_g:54,fat_g:14},
        feel:'Brown lentils in place of mince — a hearty vegetarian bobotie that holds the custard just as well.',
        tip:'Cook the lentils until soft but not mushy so the base holds together under the custard.',
        didYouKnow:'Brown lentils make a hearty vegetarian bobotie that holds its shape under the custard — the sweet-spiced character comes from the chutney and curry, not the meat.',
        ingredients:[{n:'brown lentils',pp:90,u:'g'},{n:'bread',pp:20,u:'g'},{n:'milk',pp:70,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:70,u:'g'},{n:'curry powder',pp:9,u:'g'},{n:'chutney',pp:20,u:'g'},{n:'raisins',pp:20,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Simmer the brown lentils until soft but still holding shape; drain.','Soften the onion with the curry powder.','Stir in the lentils, chutney, raisins and soaked bread; season well with salt and pepper.','Press into a dish, top with the egg-milk-turmeric custard and bay leaves, and bake 180°C for 30 minutes until set.']}
    ]},
  {id:'sp-pork-belly', cat:'ovenbakes', goesWith:['Apple sauce','Roast potatoes','Green salad'], diet:'meat', protein:'pork', name:'Slow-Roast Pork Belly & Crackling', emoji:'🐖', cuisine:'Global', time:180, costPP:35,
    feel:'Hours of slow roasting give meltingly soft pork under shatteringly crisp crackling.',
    ingredients:[{n:'pork belly',pp:180,u:'g'},{n:'salt',pp:3,u:'g'},{n:'fennel seeds',pp:2,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'onion',pp:60,u:'g'},{n:'apple',pp:50,u:'g'}],
    method:['Score the pork skin in close lines (not into the meat), then rub it all over with salt and the crushed fennel. Leave it uncovered in the fridge for a few hours, or overnight, to dry the skin out.','Roast low at 160°C for about 2.5 hours until the meat is meltingly tender.','Turn the oven up to 230°C for the last 20 minutes to blister the skin into crackling.','Roast the potatoes and onion alongside in the rendered fat. Rest the pork, then carve and serve with apple sauce.'],
    tip:'A dry skin is the whole secret to crackling — pat it bone-dry and salt it well ahead of time.',
    didYouKnow:'Crackling works because moisture is its enemy: drying and salting the skin pulls water out, so when the heat hits, the skin blisters and crisps instead of steaming soft.',
    freezes:false, fridgeDays:3,
    nutrition:{kcal:680,protein_g:32,carbs_g:28,fat_g:48}, storage:'Keeps 3 days; the crackling is best eaten fresh.',
    versions:[
      {name:'Classic Crackling',icon:'🏆',default:true,time:200,costPP:38,nutrition:{kcal:700,protein_g:33,carbs_g:28,fat_g:50},
        feel:'Skin dried overnight and salted, slow-roasted soft then blasted crisp — proper shattering crackling over tender pork.',
        tip:'Dry the skin uncovered in the fridge overnight — the single biggest thing you can do for perfect crackling.',
        didYouKnow:'The low-then-high method is doing two jobs: the long, gentle roast melts the tough collagen in the meat into softness, while the final blast of heat crisps the dried skin.',
        ingredients:[{n:'pork belly',pp:190,u:'g'},{n:'salt',pp:4,u:'g'},{n:'fennel seeds',pp:3,u:'g'},{n:'baby potatoes',pp:220,u:'g'},{n:'onion',pp:60,u:'g'},{n:'apple',pp:60,u:'g'}],
        method:['Score and salt the skin; dry uncovered in the fridge overnight.','Roast at 160°C for 2.5 hours until tender.','Blast at 230°C for 20 minutes to crackle the skin.','Roast potatoes in the fat; rest the pork and serve with apple sauce.']},
      {name:'Sticky Asian',icon:'🍯',time:190,costPP:42,nutrition:{kcal:720,protein_g:32,carbs_g:36,fat_g:48},
        feel:'The same tender belly glazed with soy, honey, ginger and star anise — sweet, salty and lacquered.',
        tip:'Glaze only in the last 15 minutes — the sugars in honey and soy burn quickly under high heat.',
        didYouKnow:'Star anise, soy and honey are the backbone of Chinese red-braised pork; the sugars caramelise into a glossy, lacquered glaze as they roast.',
        ingredients:[{n:'pork belly',pp:180,u:'g'},{n:'soy sauce',pp:15,u:'ml'},{n:'honey',pp:15,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'salt',pp:3,u:'g'}],
        method:['Score and salt the skin; dry it well.','Roast at 160°C for 2.5 hours until tender.','Mix soy, honey and ginger-garlic; brush over the meat (not the skin) for the last 15 minutes.','Blast the skin separately to crisp, then carve and serve glazed.']},
      {name:'Quick Belly Slices',icon:'⚡',time:40,costPP:35,nutrition:{kcal:620,protein_g:30,carbs_g:20,fat_g:46},
        feel:'Thin belly slices roasted hot and fast until crisp at the edges — belly flavour on a weeknight.',
        tip:'Buy the belly ready-sliced and roast hot — thin slices crisp in a fraction of the time a whole piece needs.',
        didYouKnow:'Cut into thin slices, pork belly crisps in about 30 minutes at high heat — you trade the soft, slow-roast texture for speed and crunchy edges.',
        ingredients:[{n:'pork belly',pp:160,u:'g'},{n:'salt',pp:3,u:'g'},{n:'fennel seeds',pp:2,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'onion',pp:50,u:'g'}],
        method:['Toss belly slices with salt and crushed fennel.','Lay on a rack over a tray with the potatoes below to catch the fat.','Roast at 220°C for 30–35 minutes until crisp at the edges. Serve with apple sauce.']}
    ]},
  {id:'sp-fish-pie', cat:'ovenbakes', goesWith:['Frozen peas','Green salad','Lemon'], diet:'meat', protein:'fish', name:'Creamy Fish Pie', emoji:'🥧', cuisine:'British', time:50, costPP:53,
    feel:'Flaky fish in a creamy, lemony parsley sauce under a fluffy, golden cheese-and-nutmeg mash — ultimate comfort food.',
    ingredients:[{n:'white fish',pp:120,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'flour',pp:15,u:'g'},{n:'butter',pp:25,u:'g'}],
    method:['Poach the fish gently in the milk for a few minutes with a bay leaf if you have one, then lift it out and flake it, keeping the milk.','Make a white sauce: melt the butter, stir in the flour, then whisk in the warm poaching milk until thick and smooth. Stir in chopped parsley, a squeeze of lemon and a little Dijon, and season well with salt and pepper with salt, pepper and a pinch of nutmeg.','Fold the flaked fish and peas through the sauce and spread into a dish.','Boil the potatoes in salted water and mash with butter and a splash of milk; season the mash with salt, pepper and nutmeg.','Spread over the filling, fork the top, scatter cheese and bake at 190°C for about 25 minutes until golden and bubbling.'],
    tip:'A bland white sauce ruins a fish pie — season it boldly with salt, pepper, nutmeg, lemon and parsley, and taste before it goes in.',
    didYouKnow:'A classic fish pie was built on thrift and the catch of the day — a mix of white fish, smoked fish and whatever else was going, bound in a well-seasoned sauce and stretched under cheap potato.',
    freezes:true, fridgeDays:2,
    nutrition:{kcal:560,protein_g:32,carbs_g:50,fat_g:26}, storage:'Keeps 2 days; freezes well before baking — bake from frozen, covered, then brown.',
    versions:[
      {name:'Creamy',icon:'🏆',default:true,time:55,costPP:60,nutrition:{kcal:580,protein_g:34,carbs_g:50,fat_g:28},
        feel:'White fish, smoked fish and prawns in a lemony parsley cream sauce, with hidden egg, under a golden cheese-and-nutmeg mash — the full luxurious pie.',
        tip:'Tuck quartered hard-boiled eggs into the filling, and season the sauce with nutmeg, lemon, parsley and plenty of pepper — that depth is what makes it special.',
        didYouKnow:'Quartered hard-boiled eggs tucked into the filling are traditional in a proper fish pie — they add richness and were once a way to make a little fish feed more people.',
        ingredients:[{n:'white fish',pp:90,u:'g'},{n:'smoked fish',pp:40,u:'g'},{n:'prawns',pp:40,u:'g'},{n:'eggs',pp:1,u:'each'},{n:'potatoes',pp:280,u:'g'},{n:'milk',pp:220,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'fresh parsley',pp:5,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'flour',pp:16,u:'g'},{n:'butter',pp:28,u:'g'}],
        method:['Poach the white and smoked fish in the milk; flake and reserve the milk.','Make a white sauce with butter, flour and the milk; stir in parsley, lemon, a little Dijon and season with salt, pepper and nutmeg.','Fold in the fish, prawns and peas; spread in a dish and tuck in quartered boiled eggs.','Mash the potatoes with butter; season with salt, pepper and nutmeg.','Top with mash and cheese; bake 190°C for 28 minutes until golden.']},
      {name:'Budget',icon:'💰',time:50,costPP:40,nutrition:{kcal:540,protein_g:28,carbs_g:54,fat_g:22},
        feel:'Just good hake in a well-seasoned, lemony cream sauce under plenty of mash — the everyday version.',
        tip:'Hake alone makes a lovely pie — lean on parsley, lemon, nutmeg and seasoning to give the cheaper version real flavour.',
        didYouKnow:'Hake on its own makes a perfectly good fish pie — the smoked fish and prawns of the deluxe version are a treat, not a requirement, as long as the sauce is well seasoned.',
        ingredients:[{n:'white fish',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:25,u:'g'},{n:'frozen peas',pp:60,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'flour',pp:15,u:'g'},{n:'butter',pp:22,u:'g'}],
        method:['Poach the hake in the milk; flake and keep the milk.','Make the white sauce; stir in parsley and lemon and season well with salt and pepper with salt, pepper and nutmeg.','Fold in the fish and peas; top with plenty of seasoned mash and a little cheese; bake until golden.']},
      {name:'Quick',icon:'⚡',time:30,costPP:53,nutrition:{kcal:560,protein_g:32,carbs_g:50,fat_g:26},
        feel:'A well-seasoned sauce, fish and peas grilled under quick mash — comfort without the wait.',
        tip:'Cut the fish small so it cooks straight in the hot sauce — and season the sauce hard with lemon, parsley and pepper.',
        didYouKnow:'Diced fish poaches through in the hot white sauce in minutes, so you can skip the separate poaching step entirely and grill the top to finish.',
        ingredients:[{n:'white fish',pp:120,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'lemon',pp:0.5,u:''},{n:'flour',pp:15,u:'g'},{n:'butter',pp:25,u:'g'}],
        method:['Boil diced potato for quick mash.','Make the white sauce, season well with salt and pepper with salt, pepper, nutmeg, lemon and parsley, then stir in diced raw fish and peas and cook 4 minutes.','Spread in a dish, top with seasoned mash and cheese, and grill until golden.']}
    ]},
  {id:'sp-nacho-bake', cat:'ovenbakes', goesWith:['Sour cream','Avocado','Fresh coriander'], diet:'meat', protein:'beef', name:'Tex-Mex Beef Nacho Bake', emoji:'🌮', cuisine:'Tex-Mex', time:40, costPP:38,
    feel:'Spiced beef and beans layered with tortilla chips and melted cheese, baked into a loaded nacho feast.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'tortilla chips',pp:50,u:'g'},{n:'tinned beans',pp:60,u:'g'},{n:'tinned tomatoes',pp:90,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chilli powder',pp:4,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Heat the oil and soften the onion with a good pinch of salt for 5 minutes, then add the garlic for a minute.','Add the beef mince and brown it hard, breaking it up, until well coloured.','Stir in the chilli powder, cumin and a pinch of cayenne and cook 1 minute, then add the tinned tomatoes, drained beans and a splash of water. Simmer 10 minutes into a thick chilli and season well with salt and pepper.','Scatter half the tortilla chips in a dish, spoon over the beef, then the rest of the chips and a thick layer of grated cheese.','Bake at 180°C until melted and bubbling, about 12 minutes. Top with avocado, sour cream and chopped coriander and serve at once.'],
    tip:'Season the beef chilli properly with salt and taste it before it goes in — under-seasoned mince is the only thing that lets a nacho bake down.',
    didYouKnow:'Nachos were invented in 1940 by Ignacio "Nacho" Anaya in Piedras Negras, just over the Mexican border — he threw together fried tortillas, cheese and jalapeños for a group of hungry guests, and named them after himself.',
    freezes:false, fridgeDays:1,
    nutrition:{kcal:600,protein_g:28,carbs_g:52,fat_g:32}, storage:'Best eaten fresh; the chips soften on keeping.',
    versions:[
      {name:'Loaded',icon:'🏆',default:true,time:45,costPP:44,nutrition:{kcal:660,protein_g:32,carbs_g:52,fat_g:38},
        feel:'A properly spiced beef chilli — chilli powder, cumin and a kick of cayenne — layered with chips and a blend of cheddar and pepper-jack, finished with sour cream, avo and fresh coriander.',
        tip:'Build the chilli on a base of softened onion and garlic, season it with salt as you go, and use half cheddar, half pepper-jack for that proper melty Tex-Mex stretch.',
        didYouKnow:'Real Tex-Mex seasoning is not one mystery "taco" powder but a balance of chilli powder for warmth, cumin for earthiness and a little cayenne for heat — building them separately lets you taste and adjust.',
        ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'tortilla chips',pp:60,u:'g'},{n:'tinned beans',pp:60,u:'g'},{n:'tinned tomatoes',pp:100,u:'g'},{n:'cheddar',pp:70,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chilli powder',pp:5,u:'g'},{n:'cumin',pp:4,u:'g'},{n:'sour cream',pp:40,u:'g'},{n:'avocado',pp:40,u:'g'},{n:'fresh coriander',pp:5,u:'g'},{n:'oil',pp:12,u:'ml'}],
        method:['Soften the onion in the oil with a pinch of salt, then add the garlic.','Brown the mince hard for deep colour.','Add the chilli powder, cumin and a pinch of cayenne; cook 1 minute, then the tomatoes, beans and a splash of water. Simmer 10 minutes; season well with salt and pepper and taste.','Layer chips, beef and a cheddar-and-pepper-jack blend — twice — for cheese all the way through.','Bake 180°C for 12 minutes until bubbling. Top with sour cream, avocado and coriander.']},
      {name:'Budget',icon:'💰',time:40,costPP:28,nutrition:{kcal:560,protein_g:24,carbs_g:58,fat_g:24},
        feel:'More beans, less mince, the same well-spiced base — a big, cheap, crowd-pleasing tray.',
        tip:'Beans are cheaper than mince and just as filling — push the ratio towards beans, and keep seasoning with salt, chilli and cumin so it never tastes thin.',
        didYouKnow:'Beans bulk the chilli out far more cheaply than mince and bring fibre and protein of their own — the original frugal Tex-Mex stretch.',
        ingredients:[{n:'beef mince',pp:80,u:'g'},{n:'tortilla chips',pp:50,u:'g'},{n:'tinned beans',pp:120,u:'g'},{n:'tinned tomatoes',pp:90,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chilli powder',pp:4,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Soften the onion and garlic with a pinch of salt.','Brown the mince, then add the chilli powder and cumin.','Stir in a double helping of beans, the tomatoes and a splash of water; simmer and season well with salt and pepper.','Layer with chips and cheese; bake until melted and bubbling.']},
      {name:'Vegetarian',icon:'🌱',time:35,costPP:30,nutrition:{kcal:520,protein_g:18,carbs_g:64,fat_g:22},
        feel:'A spiced three-bean chilli in place of the beef, layered with chips and cheese — no one misses the meat.',
        tip:'Mash some of the beans into the sauce for body, and season boldly with salt, chilli powder and cumin where the mince would have been.',
        didYouKnow:'A spiced bean chilli holds its own as a nacho base — mashing a portion of the beans gives the saucy body that mince would otherwise provide.',
        ingredients:[{n:'tinned beans',pp:80,u:'g'},{n:'black beans',pp:80,u:'g'},{n:'tortilla chips',pp:50,u:'g'},{n:'tinned tomatoes',pp:100,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chilli powder',pp:5,u:'g'},{n:'cumin',pp:4,u:'g'},{n:'oil',pp:10,u:'ml'}],
        method:['Fry the onion and garlic with a pinch of salt, then the chilli powder and cumin.','Add both beans and the tomatoes, mashing some, and simmer thick; season well with salt and pepper.','Layer with chips and cheese.','Bake 180°C for 12 minutes. Top with avo and coriander and serve.']}
    ]},
  {id:'sp-moussaka', cat:'ovenbakes', goesWith:['Greek salad','Crusty bread','Green salad'], diet:'meat', protein:'lamb', name:'Greek Lamb Moussaka', emoji:'🍆', cuisine:'Greek', time:75, costPP:51,
    feel:'Layers of cinnamon-spiced lamb, soft aubergine and a creamy nutmeg bechamel, baked golden — Greece on a plate.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'aubergine',pp:120,u:'g'},{n:'potato',pp:100,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'},{n:'cheddar',pp:25,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Salt the aubergine slices and leave 15 minutes, then pat dry — this draws out bitterness and stops them soaking up oil. Fry the aubergine and potato slices until golden.','Cook the lamb mince with onion and garlic until browned, then add the tomato, a good pinch of cinnamon and a little oregano. Simmer into a thick ragu and season well with salt and pepper.','Make a bechamel: melt the butter, stir in the flour, then whisk in the milk over the heat until thick. Off the heat beat in most of the cheese, a pinch of nutmeg and salt and pepper.','Layer potato, aubergine and lamb in a dish, pour over the bechamel, scatter the rest of the cheese and bake at 180°C until golden, about 35 minutes.','Rest 15 minutes before cutting so the layers hold.'],
    tip:'Season every layer — the lamb, and especially the bechamel with nutmeg, salt and pepper — and rest it before cutting so the layers hold.',
    didYouKnow:'The creamy béchamel top of moussaka is a relatively modern addition — Greek chef Nikolaos Tselementes added it in the 1920s to give the rustic dish a refined, French-inspired finish.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:620,protein_g:30,carbs_g:38,fat_g:38}, storage:'Keeps 3 days and is better the next day; freezes well.',
    versions:[
      {name:'Classic',icon:'🏆',default:true,time:110,costPP:58,nutrition:{kcal:680,protein_g:32,carbs_g:40,fat_g:44},
  feel:'The real thing, made properly — salted, golden aubergine, a deeply spiced red-wine lamb sauce with cinnamon and oregano, and a thick nutmeg bechamel, layered and baked into clean, proud slices. A labour of love that dirties every pot in the kitchen, and worth every one.',
  tip:'It is a big job, so make it a day ahead — it actually tastes better reheated. Roast the aubergine rather than fry it for far less mess and oil, and rest it well before cutting or the layers slide.',
  didYouKnow:'Salting the aubergine first (called "degorging") draws out moisture and bitterness so the slices turn golden and silky instead of soggy and oily — the single step that separates a great moussaka from a watery one.',
  ingredients:[{n:'aubergine',pp:170,u:'g'},{n:'lamb mince',pp:120,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'red wine',pp:25,u:'ml'},{n:'tinned tomatoes',pp:70,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'beef stock',pp:45,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'dried oregano',pp:1,u:'g'},{n:'cinnamon',pp:1,u:'g'},{n:'milk',pp:55,u:'ml'},{n:'flour',pp:11,u:'g'},{n:'butter',pp:16,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'olive oil',pp:14,u:'ml'}],
  method:[
    'Slice the aubergine into 1cm rounds, lay them out and salt both sides. Leave 20 minutes — you will see bitter moisture bead on the surface — then pat every slice thoroughly dry. This stops them drinking up oil like sponges.',
    'Brush the slices with olive oil and roast at 200\u00b0C for 20\u201325 minutes until soft and golden (or fry in batches, but roasting is far less greasy and less work). Set aside.',
    'For the meat sauce, soften the diced onion in a little olive oil for 5 minutes, then add the garlic for a minute.',
    'Add the lamb mince and brown it hard, breaking up every lump, until deeply coloured. Pour in the red wine and let it bubble away to almost nothing, scraping up the browned bits.',
    'Stir in the tomato paste and cook 2 minutes, then add the crushed (tinned) tomatoes, the stock, a crumbled stock cube, a couple of bay leaves, the sugar, oregano and cinnamon.',
    'Simmer gently 20\u201325 minutes until thick and rich. Season well with salt and pepper and discard the bay leaves.',
    'Make the bechamel: melt the butter, stir in the flour and cook 1 minute, then whisk in the milk over the heat until thick and smooth. Off the heat beat in most of the cheese, a good grating of nutmeg, and salt and pepper (an egg yolk here makes it richer still).',
    'Layer in a deep dish: half the aubergine, all the meat sauce, then the rest of the aubergine. Pour the bechamel over and spread to the edges, then scatter the last of the cheese.',
    'Bake at 180\u00b0C for 40\u201345 minutes until deep golden and set. Now the hard part: rest it at least 20 minutes before cutting — this is the secret to clean slices that hold their layers instead of sliding apart.'
  ]},
      {name:'Budget',icon:'💰',time:75,costPP:36,nutrition:{kcal:560,protein_g:22,carbs_g:50,fat_g:28},
        feel:'More potato, less lamb — a hearty, well-seasoned layered bake that stretches the meat.',
        tip:'Build it potato-heavy with a thinner layer of well-seasoned, cinnamon-spiced lamb — the spiced sauce flavours the whole dish.',
        didYouKnow:'Layering generously with potato and a thinner spread of lamb keeps the spiced, layered character while using far less of the costly mince — bold seasoning carries it.',
        ingredients:[{n:'lamb mince',pp:90,u:'g'},{n:'aubergine',pp:100,u:'g'},{n:'potato',pp:200,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:18,u:'g'},{n:'cheddar',pp:20,u:'g'},{n:'oil',pp:14,u:'ml'}],
        method:['Fry the aubergine and plenty of potato until golden.','Cook a thinner lamb-and-tomato ragu with onion, garlic and cinnamon; season well with salt and pepper.','Make the béchamel and season with nutmeg, salt and pepper.','Layer potato-heavy, top with béchamel and cheese, and bake until golden.']},
      {name:'Vegetarian',icon:'🌱',time:70,costPP:30,nutrition:{kcal:480,protein_g:16,carbs_g:54,fat_g:22},
        feel:'Cinnamon-spiced lentils and chickpeas in place of lamb, the same aubergine and nutmeg béchamel — a hearty, well-seasoned meat-free moussaka.',
        tip:'Season the lentil layer as boldly as you would the meat — tomato paste, cinnamon, salt and pepper keep it rich and "meaty".',
        didYouKnow:'Lentils and chickpeas stand in for the lamb beautifully — the dish\'s identity lives in the aubergine, cinnamon and nutmeg béchamel as much as the meat.',
        ingredients:[{n:'brown lentils',pp:90,u:'g'},{n:'chickpeas',pp:50,u:'g'},{n:'aubergine',pp:140,u:'g'},{n:'potato',pp:120,u:'g'},{n:'tomato',pp:110,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'milk',pp:160,u:'ml'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'},{n:'cheddar',pp:25,u:'g'},{n:'oil',pp:16,u:'ml'}],
        method:['Fry the aubergine and potato until golden.','Cook the lentils and chickpeas with onion, garlic, tomato, tomato paste and cinnamon into a rich base; season well with salt and pepper.','Make the béchamel and season with nutmeg, salt and pepper.','Layer, top with béchamel and cheese, and bake 180°C for 35 minutes. Rest before cutting.']}
    ]},
  {id:'sp-shepherds-pie', cat:'ovenbakes', goesWith:['Frozen peas','Green salad','Gravy'], diet:'meat', protein:'lamb', name:'Shepherd\'s Pie', emoji:'🐑', cuisine:'British', time:60, costPP:48,
    feel:'Savoury lamb mince with rosemary and thyme under a golden, buttery mashed-potato crust — true cottage comfort.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'flour',pp:8,u:'g'},{n:'butter',pp:20,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'cheddar',pp:20,u:'g'}],
    method:['Brown the lamb mince with the onion, carrot and garlic, then pour off any excess fat.','Stir in the flour and tomato paste, then the stock, peas, thyme, a little rosemary and a splash of Worcestershire. Simmer into a rich gravy and season well with salt and pepper.','Boil the potatoes in salted water, drain and mash with the butter, warm milk and half the cheese; season with salt, pepper and a pinch of nutmeg.','Spread the mash over the lamb, rough up the surface with a fork, scatter the rest of the cheese and bake at 190°C for 25–30 minutes until golden and crisp.'],
    tip:'Rosemary and thyme are what make it taste of shepherd\'s pie rather than cottage pie — and season the mash, do not leave it plain.',
    didYouKnow:'A shepherd tends sheep — which is exactly how you remember that shepherd\'s pie is made with lamb, while its beef twin is called cottage pie. The lamb name appeared later, to tell the two apart.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:560,protein_g:28,carbs_g:48,fat_g:28}, storage:'Keeps 3 days; freezes well, baked or unbaked.',
    versions:[
      {name:'Classic',icon:'🏆',default:true,time:70,costPP:54,nutrition:{kcal:600,protein_g:30,carbs_g:50,fat_g:32},
  feel:'A deeply savoury lamb gravy with parsley, rosemary and thyme, peas, carrots and a little sweetcorn, under a rich garlic-and-parmesan mash baked golden — the proper, generous version.',
  tip:'Season the mash hard with garlic powder, parmesan, salt and pepper until it tastes great on its own, and rough the top with a fork (or pipe it) so the peaks crisp golden.',
  didYouKnow:'Parsley, rosemary and thyme are the classic herb backbone of a British shepherd\'s pie; rosemary in particular has a natural affinity with lamb, cutting its richness and giving the gravy its unmistakable flavour.',
  ingredients:[{n:'lamb mince',pp:150,u:'g'},{n:'onion',pp:55,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'dried parsley',pp:1,u:'g'},{n:'dried rosemary',pp:1,u:'g'},{n:'fresh thyme',pp:2,u:'g'},{n:'flour',pp:10,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'worcestershire sauce',pp:6,u:'ml'},{n:'beef stock',pp:90,u:'ml'},{n:'frozen peas',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'frozen corn',pp:30,u:'g'},{n:'potatoes',pp:280,u:'g'},{n:'butter',pp:25,u:'g'},{n:'cream',pp:30,u:'ml'},{n:'parmesan',pp:20,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
  method:[
    'Heat the olive oil and soften the chopped onion for 5 minutes, then add the garlic for a minute.',
    'Add the lamb mince and brown it hard, breaking it up; pour off any excess fat (lamb gives off a lot).',
    'Stir in the dried parsley, rosemary and thyme, then the flour and tomato paste, and cook 1 minute to lose the raw flour taste.',
    'Pour in the beef stock with a good splash of Worcestershire sauce, then add the peas, carrots and sweetcorn. Simmer 10\u201315 minutes into a rich, thick gravy and season well with salt and pepper.',
    'Meanwhile boil the potatoes in salted water until soft, drain and steam-dry a minute, then mash with the butter, cream and parmesan. Season with garlic powder, salt and pepper until the mash tastes really good on its own.',
    'Spread the lamb filling in a dish and top with the mash, spreading it to the edges to seal. Rough the surface up with a fork (or pipe it for proper peaks).',
    'Bake at 200\u00b0C for 25\u201330 minutes until golden and crisp at the peaks. Rest 10 minutes before serving.'
  ]},
      {name:'Budget',icon:'💰',time:60,costPP:34,nutrition:{kcal:520,protein_g:22,carbs_g:54,fat_g:22},
        feel:'Half lamb, half lentils, more seasoned mash — the same herby comfort for a lot less.',
        tip:'Lamb is the priciest mince — stretch it with cooked lentils and lean on the herbs and seasoning to carry the flavour.',
        didYouKnow:'Lamb mince is the most expensive of the common minces, so stretching it with lentils or extra vegetables is the classic way to keep this pie affordable — bold seasoning keeps it tasting rich.',
        ingredients:[{n:'lamb mince',pp:80,u:'g'},{n:'brown lentils',pp:50,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'carrots',pp:70,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'flour',pp:8,u:'g'},{n:'butter',pp:18,u:'g'},{n:'cheddar',pp:15,u:'g'}],
        method:['Brown the lamb with onion, carrot and garlic; stir in cooked lentils and tomato paste.','Add flour, stock, peas, thyme and Worcestershire; simmer to a gravy and season well with salt and pepper.','Mash the potatoes with butter; season with salt, pepper and nutmeg.','Top, fork and bake until golden.']},
      {name:'Quick',icon:'⚡',time:35,costPP:48,nutrition:{kcal:560,protein_g:28,carbs_g:48,fat_g:28},
        feel:'Fast herby lamb gravy, quick mash, grilled golden — weeknight shepherd\'s pie with real flavour.',
        tip:'Pre-boil diced potato while the gravy cooks, and do not skip the thyme, rosemary and seasoning even when rushing.',
        didYouKnow:'Since the gravy goes on hot, the assembled pie only needs the top browned — a few minutes under the grill stands in for the long bake.',
        ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'fresh thyme',pp:2,u:'g'},{n:'flour',pp:8,u:'g'},{n:'butter',pp:20,u:'g'}],
        method:['Boil diced potato until quick to mash.','Brown the lamb with onion and garlic, add flour, tomato paste, stock, peas, thyme and Worcestershire; simmer 10 minutes and season well with salt and pepper.','Mash with butter; season with salt, pepper and nutmeg.','Top, fork and grill 6–8 minutes until golden.']}
    ]},
  {id:'sp-chicken-bacon-bake', cat:'ovenbakes', goesWith:['Green salad','Garlic bread','Frozen peas'], diet:'meat', protein:'chicken', name:'Loaded Chicken & Bacon Pasta Bake', emoji:'🧀', cuisine:'Family classic', time:45, costPP:44,
    feel:'Creamy chicken, crispy bacon and pasta under a blanket of melted cheese — a guaranteed family win.',
    ingredients:[{n:'chicken breast',pp:120,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chicken stock',pp:100,u:'ml'}],
    method:['Cook the pasta until just tender (a minute under, since it bakes again), then drain.','Sear the diced chicken and crisp the bacon in the same pan, then soften the onion and garlic.','Add the cream and stock and simmer into a sauce, then fold in the pasta, chicken and bacon.','Tip into a dish, top with grated cheese and bake at 180°C until golden and bubbling, about 20 minutes.','Taste and season well with salt and pepper.'],
    tip:'Save some crispy bacon to scatter on top after baking for extra crunch.',
    didYouKnow:'Baked pasta is a tradition far older than this comfort version — Italian "pasta al forno" has layered and baked pasta with sauce and cheese for centuries; the crisp cheese crust is everyone\'s favourite part.',
    freezes:true, fridgeDays:3,
    nutrition:{kcal:660,protein_g:38,carbs_g:58,fat_g:32}, storage:'Keeps 3 days and reheats well; freezes well before the final bake.',
    versions:[
      {name:'Loaded',icon:'🏆',default:true,time:50,costPP:50,nutrition:{kcal:720,protein_g:42,carbs_g:60,fat_g:36},
  feel:'Tender chicken and crispy bacon in a creamy tomato sauce with sweet peppers and wilted spinach, tossed through pasta and baked under a golden cheddar-and-mozzarella crust — the full crowd-pleaser.',
  tip:'Cook the pasta a minute under so it finishes in the oven, and save some crispy bacon and torn parsley to scatter on after baking for crunch and freshness.',
  didYouKnow:'Two cheeses do two jobs here — cheddar for deep, savoury flavour and mozzarella for that golden, stretchy pull. Cooking the pasta a minute under lets it finish in the oven and drink up the sauce instead of turning soft.',
  ingredients:[{n:'pasta',pp:95,u:'g'},{n:'chicken breast',pp:130,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'onion',pp:50,u:'g'},{n:'red pepper',pp:45,u:'g'},{n:'yellow pepper',pp:45,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'dried oregano',pp:1,u:'g'},{n:'fresh thyme',pp:2,u:'g'},{n:'tinned tomatoes',pp:130,u:'g'},{n:'cream',pp:30,u:'ml'},{n:'baby spinach',pp:40,u:'g'},{n:'cheddar',pp:35,u:'g'},{n:'mozzarella',pp:35,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'oil',pp:8,u:'ml'}],
  method:[
    'Boil the pasta for 1 minute less than the pack says, then drain — it finishes cooking in the oven.',
    'Meanwhile, crisp the chopped bacon in a large pan until golden; lift out and set aside.',
    'In the same pan, seal the bite-size chicken chunks in the oil until coloured, about 5 minutes, then add the onion and soften 3\u20134 minutes.',
    'Add the chopped peppers, garlic, tomato paste, oregano and thyme with a good pinch of salt and pepper; cook 2\u20133 minutes.',
    'Stir in the tinned tomatoes and cream and bring to a gentle bubble, then fold in the pasta, spinach and most of the bacon. Taste and season well with salt and pepper.',
    'Tip into a large baking dish and top with the cheddar and mozzarella.',
    'Bake at 190\u00b0C for 20\u201325 minutes until the cheese is golden and bubbling, then scatter over the reserved crispy bacon and torn parsley before serving.'
  ]},
      {name:'Budget',icon:'💰',time:45,costPP:32,nutrition:{kcal:600,protein_g:28,carbs_g:64,fat_g:24},
        feel:'More pasta, a milk-based sauce and a little bacon for flavour — the same comfort for less.',
        tip:'Make the sauce with milk thickened by a little flour instead of cream — far cheaper and still creamy.',
        didYouKnow:'A flour-thickened milk sauce (a béchamel) costs a fraction of cream and bakes up just as creamy — the everyday way to a budget pasta bake.',
        ingredients:[{n:'chicken breast',pp:90,u:'g'},{n:'bacon',pp:25,u:'g'},{n:'pasta',pp:110,u:'g'},{n:'milk',pp:120,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'onion',pp:45,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:12,u:'g'}],
        method:['Cook the pasta a minute under.','Sear the chicken and bacon; set aside.','Make a béchamel with butter, flour and milk; stir in cheese.','Fold in pasta, chicken and bacon, top with cheese and bake until golden.','Taste and season well with salt and pepper.']},
      {name:'Quick',icon:'⚡',time:30,costPP:44,nutrition:{kcal:660,protein_g:38,carbs_g:58,fat_g:32},
        feel:'Stovetop creamy chicken pasta, grilled with cheese on top — done in half an hour.',
        tip:'Skip the oven entirely — finish under the grill just to melt and brown the cheese.',
        didYouKnow:'If the filling is already hot, a few minutes under the grill melts and browns the cheese topping just as well as a full bake.',
        ingredients:[{n:'chicken breast',pp:120,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'}],
        method:['Cook the pasta. Sear chicken and bacon, soften onion and garlic.','Add cream, simmer to a sauce, fold in the pasta.','Tip into a heatproof dish, top with cheese and grill until melted and golden.','Taste and season well with salt and pepper.']}
    ]},
  {id:'sp-stuffed-chicken', cat:'ovenbakes', goesWith:['Roast potatoes','Green salad','Lemon'], diet:'meat', protein:'chicken', name:'Creamy Spinach & Feta Stuffed Chicken', emoji:'🐔', cuisine:'Mediterranean', time:40, costPP:46,
  feel:'Chicken breasts stuffed with creamy spinach and feta, baked until juicy and golden.',
  ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'baby spinach',pp:45,u:'g'},{n:'feta',pp:35,u:'g'},{n:'cream cheese',pp:25,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'baby potatoes',pp:180,u:'g'}],
  method:['Wilt the spinach, squeeze out all the liquid and chop, then mix with the crumbled feta, cream cheese and garlic. Season with salt, pepper and a grating of nutmeg.','Cut a deep pocket in each chicken breast and pack in the filling; secure with a toothpick.','Season the outside and sear in olive oil to colour on both sides, then bake at 190\u00b0C with the potatoes until the chicken is cooked through and juicy, about 18 minutes.','Spoon over the pan juices and serve.'],
  tip:'Squeeze the spinach really dry and secure the pocket with a toothpick so the filling stays put instead of leaking out.',
  didYouKnow:'Spinach and feta is the classic filling of Greek spanakopita; here it is tucked inside the chicken instead of pastry, keeping the breast moist as it bakes.',
  freezes:false, fridgeDays:2,
  nutrition:{kcal:540,protein_g:44,carbs_g:26,fat_g:30}, storage:'Keeps 2 days; best reheated gently so the chicken stays juicy.',
  versions:[
    {name:'Spinach & Feta',icon:'🏆',default:true,time:45,costPP:50,nutrition:{kcal:560,protein_g:45,carbs_g:14,fat_g:34},
      feel:'A proper egg-bound spinach-and-feta filling tucked into seared chicken, finished with a bright white-wine-and-lemon butter pan sauce — restaurant-worthy and not hard.',
      tip:'Squeeze every drop of liquid from the spinach and bind the filling with an egg yolk — it sets in the oven instead of oozing out, and the wine-lemon pan sauce is what lifts the whole plate.',
      didYouKnow:'The egg yolk is the chef\'s trick that binds a spinach-and-feta filling — it sets gently in the heat so the stuffing stays put when you cut in, exactly as it does in a spanakopita.',
      ingredients:[{n:'chicken breast',pp:160,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'feta',pp:40,u:'g'},{n:'onion',pp:12,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'eggs',pp:0.25,u:'each'},{n:'butter',pp:18,u:'g'},{n:'olive oil',pp:6,u:'ml'},{n:'white wine',pp:30,u:'ml'},{n:'lemon',pp:0.5,u:''}],
      method:[
        'Wilt the spinach in a dry pan or the microwave, then squeeze out ALL the liquid and chop it — wet spinach makes the filling leak.',
        'Mix the spinach with the crumbled feta, finely minced onion, garlic, a grating of nutmeg, the egg yolk and a pinch of salt. The yolk binds the filling so it sets rather than oozing.',
        'Cut a deep horizontal pocket in each chicken breast (not all the way through), pack in the filling and secure with a toothpick. Season the outside.',
        'Sear the chicken in the butter and olive oil until golden on both sides, then transfer to the oven at 190\u00b0C for 15\u201318 minutes until cooked through and juicy.',
        'For the pan sauce, deglaze the pan with the white wine, scraping up the browned bits; reduce by half, then stir in the lemon juice and a knob of butter and season.',
        'Spoon the bright, buttery sauce over the chicken to serve.'
      ]},
    {name:'Budget',icon:'💰',time:40,costPP:34,nutrition:{kcal:520,protein_g:42,carbs_g:28,fat_g:26},
      feel:'More spinach, a little feta stretched with cream cheese, baked with potatoes — the same juicy stuffed chicken for less.',
      tip:'Cream cheese stretches a little feta a long way and keeps the filling creamy; bake the potatoes alongside to make it a full meal.',
      didYouKnow:'A spoon of cream cheese stretches expensive feta and keeps the filling soft and creamy — a thrifty swap that loses none of the comfort.',
      ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'baby spinach',pp:60,u:'g'},{n:'feta',pp:25,u:'g'},{n:'cream cheese',pp:30,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'baby potatoes',pp:200,u:'g'}],
      method:['Wilt and squeeze the spinach dry; mix with the feta, cream cheese and garlic and season with salt, pepper and nutmeg.','Pocket and stuff the chicken; secure with a toothpick.','Sear to colour, then bake at 190\u00b0C with the potatoes until cooked through, about 18 minutes. Season and serve with the pan juices.']},
    {name:'Quick',icon:'⚡',time:25,costPP:46,nutrition:{kcal:540,protein_g:44,carbs_g:14,fat_g:32},
      feel:'Butterflied and rolled rather than pocketed, pan-cooked start to finish — stuffed chicken on a weeknight.',
      tip:'Butterfly the breast flat, spread the filling and roll it — quicker than cutting a pocket, and it cooks through faster in the pan.',
      didYouKnow:'Butterflying and rolling the breast around the filling cooks faster and more evenly than a thick stuffed pocket — the weeknight shortcut to the same dish.',
      ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'baby spinach',pp:45,u:'g'},{n:'feta',pp:35,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'butter',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'lemon',pp:0.5,u:''}],
      method:['Wilt and squeeze the spinach; mix with the feta and garlic and season with salt, pepper and nutmeg.','Butterfly each breast flat, spread with the filling and roll up; secure with a toothpick.','Pan-cook in the butter and oil over medium heat, turning, until golden and cooked through, about 12 minutes.','Finish with a squeeze of lemon and the buttery pan juices.']},
    {name:'Sun-Dried Tomato & Mozzarella',icon:'🍅',time:45,costPP:52,nutrition:{kcal:580,protein_g:45,carbs_g:16,fat_g:36},
      feel:'A melting filling of sun-dried tomato, mozzarella and basil — an Italian twist on the stuffed breast.',
      tip:'Use mozzarella that melts; the sun-dried tomato brings a sweet-savoury punch that needs no extra salt.',
      didYouKnow:'Sun-dried tomatoes are intensely sweet-savoury because drying concentrates their natural sugars and umami — a little goes a long way in a filling.',
      ingredients:[{n:'chicken breast',pp:160,u:'g'},{n:'mozzarella',pp:40,u:'g'},{n:'sun-dried tomatoes',pp:25,u:'g'},{n:'fresh basil',pp:4,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'butter',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'baby potatoes',pp:180,u:'g'}],
      method:['Chop the sun-dried tomatoes and mix with the torn mozzarella, basil and garlic; season with pepper (the tomatoes bring the salt).','Pocket each chicken breast and pack in the filling; secure with a toothpick.','Sear in butter and oil to colour, then bake at 190\u00b0C with the potatoes until cooked through and the cheese is molten, about 18 minutes. Season and serve.']}
  ]},
  {id:'sp-thai-peanut-chicken', cat:'ovenbakes', goesWith:['Jasmine rice','Cucumber ribbons','Fresh coriander','Lime wedges'], diet:'meat', protein:'chicken', name:'Thai Peanut Chicken Casserole', emoji:'🥜', cuisine:'Thai-inspired', time:55, costPP:42,
    feel:'Chicken thighs baked in a scratch coconut-peanut curry under a golden coconut-coriander scone crust — nutty, fragrant and properly comforting.',
    didYouKnow:'Thai peanut sauces grow out of the satay tradition, where grilled skewers are served with a peanut-and-curry-paste dip. Building the sauce from red curry paste, peanut butter and coconut milk instead of a bottle is what turns a mild casserole into something that actually tastes of Thailand.',
    freezes:true, fridgeDays:3,
    ingredients:[{n:'chicken thighs',pp:160,u:'g'},{n:'coconut milk',pp:90,u:'ml'},{n:'peanut butter',pp:25,u:'g'},{n:'red curry paste',pp:15,u:'g'},{n:'fish sauce',pp:6,u:'ml'},{n:'garlic',pp:6,u:'g'},{n:'ginger',pp:6,u:'g'},{n:'brown sugar',pp:5,u:'g'},{n:'lime',pp:10,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'peanuts',pp:10,u:'g'},{n:'fresh coriander',pp:5,u:'g'},{n:'self raising flour',pp:45,u:'g'},{n:'butter',pp:15,u:'g'},{n:'desiccated coconut',pp:8,u:'g'},{n:'buttermilk',pp:35,u:'ml'},{n:'oil',pp:8,u:'ml'},{n:'salt & pepper'}],
    method:[
      'Heat the oven to 190°C. Season the chicken thighs all over with salt and pepper, then brown them in the oil in a wide oven dish over medium-high heat until golden on both sides — this colour is flavour. Lift out and set aside.',
      'In the same dish, fry the red curry paste, garlic and ginger for 1 minute until fragrant, then stir in the peanut butter, coconut milk, fish sauce and brown sugar. Simmer 2 minutes into a glossy sauce and taste — it should be savoury, nutty and a little sweet; season with a pinch of salt if it needs it.',
      'Return the chicken, tuck in the sliced red pepper, and spoon the sauce over. The sauce should sit just below the chicken so the tops stay proud of it.',
      'For the crust, rub the cold butter into the flour with a pinch of salt until crumbly, then stir in the coconut and most of the coriander. Pour in the buttermilk and bring together with a light hand — knead only enough to form a soft dough, or the scones turn tough. Pat out 2 cm thick, cut into rounds and sit them over the sauce, spaced apart so they have room to rise.',
      'Brush the scones with a little buttermilk and bake 30–35 minutes, until the crust is risen and deep golden and the sauce bubbles up between the rounds. Finish with the lime squeezed over, the chopped peanuts and the rest of the coriander.'
    ],
    tip:'Build the peanut sauce from red curry paste rather than a bottle, and bake the scone crust from scratch — the two upgrades are the whole difference between everyday and special.',
    nutrition:{kcal:680,protein_g:38,carbs_g:42,fat_g:38}, storage:'Keeps 3 days; the crust softens but reheats well covered in a low oven. Sauce freezes 1 month.'},
  {id:'sp-cowboy-bake', cat:'ovenbakes', goesWith:['Green salad','Sour cream','Pickled jalapeños','Coriander'], diet:'meat', protein:'beef', name:'Cowboy Bean & Beef Bake', emoji:'🫘', cuisine:'American', time:65, costPP:44,
    feel:'Smoky beef and beans under a golden scratch jalapeño-cheddar cornbread crust — proper rib-sticking, chuckwagon comfort.',
    didYouKnow:'"Cowboy beans" trace back to the chuckwagon cooks of the great American cattle drives, who simmered beans with whatever beef and smoky seasoning they had. The cornbread lid is pure South of the USA — and mealie meal stands in for cornmeal beautifully, so it is right at home in a South African kitchen.',
    freezes:true, fridgeDays:3,
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'baked beans',pp:110,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'tinned tomatoes',pp:80,u:'g'},{n:'bbq sauce',pp:15,u:'ml'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'chilli powder',pp:2,u:'g'},{n:'cayenne pepper',pp:1,u:'g'},{n:'worcestershire sauce',pp:5,u:'ml'},{n:'oil',pp:8,u:'ml'},{n:'maize meal',pp:35,u:'g'},{n:'cake flour',pp:30,u:'g'},{n:'baking powder',pp:4,u:'g'},{n:'white sugar',pp:5,u:'g'},{n:'buttermilk',pp:50,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'butter',pp:12,u:'g'},{n:'creamed corn',pp:40,u:'g'},{n:'jalapenos',pp:15,u:'g'},{n:'cheddar',pp:45,u:'g'},{n:'salt & pepper'}],
    method:[
      'Heat the oven to 190°C. Brown the mince hard in the oil with the chopped onion, garlic and a good pinch of salt, breaking it up, until deeply coloured — a proper brown crust on the meat is where the savoury depth comes from.',
      'Stir in the smoked paprika, cumin, chilli powder and cayenne and cook 1 minute to wake them up, then add the tinned tomatoes, baked beans, BBQ sauce and Worcestershire. Simmer 5 minutes into a thick, saucy base and season well with salt and pepper. Tip into a baking dish.',
      'For the cornbread, whisk the maize meal, flour, baking powder, sugar and a pinch of salt in one bowl. In another, whisk the buttermilk, egg and melted butter, then fold in the creamed corn, chopped jalapeños and half the cheddar. Stir wet into dry just until combined — do not overmix, or the crust bakes heavy.',
      'Pour the batter evenly over the hot beef and beans (pouring it onto the hot filling helps the underside cook through), scatter with the rest of the cheddar, and bake 30–35 minutes until the cornbread is deep golden and a skewer comes out clean. Rest 10 minutes before serving so it slices.'
    ],
    tip:'Season the beef hard and do not overmix the cornbread batter — lumpy-but-just-combined bakes light, overworked bakes dense.',
    nutrition:{kcal:700,protein_g:34,carbs_g:58,fat_g:36}, storage:'Keeps 3 days; reheats well covered. Freezes 1 month.',
    versions:[
      {name:'Jalapeño Cornbread',icon:'🏆',default:true,time:65,costPP:44,nutrition:{kcal:700,protein_g:34,carbs_g:58,fat_g:36},
        feel:'Smoky beef and beans under a golden scratch jalapeño-cheddar cornbread crust — proper rib-sticking, chuckwagon comfort.',
        tip:'Mealie meal stands in for cornmeal perfectly — fold creamed corn and jalapeños through the batter and do not overmix it.',
        didYouKnow:'The cornbread lid is the classic American way to cap a pot of cowboy beans — and South African mealie meal makes the scratch version effortless.',
        ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'baked beans',pp:110,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'tinned tomatoes',pp:80,u:'g'},{n:'bbq sauce',pp:15,u:'ml'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'chilli powder',pp:2,u:'g'},{n:'cayenne pepper',pp:1,u:'g'},{n:'worcestershire sauce',pp:5,u:'ml'},{n:'oil',pp:8,u:'ml'},{n:'maize meal',pp:35,u:'g'},{n:'cake flour',pp:30,u:'g'},{n:'baking powder',pp:4,u:'g'},{n:'white sugar',pp:5,u:'g'},{n:'buttermilk',pp:50,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'butter',pp:12,u:'g'},{n:'creamed corn',pp:40,u:'g'},{n:'jalapenos',pp:15,u:'g'},{n:'cheddar',pp:45,u:'g'},{n:'salt & pepper'}],
        method:[
          'Brown the mince hard with onion, garlic and a pinch of salt until deeply coloured.',
          'Stir in the smoked paprika, cumin, chilli powder and cayenne for 1 minute, then add the tomatoes, beans, BBQ sauce and Worcestershire; simmer thick and season well with salt and pepper. Tip into a dish.',
          'Whisk maize meal, flour, baking powder, sugar and salt; separately whisk buttermilk, egg and melted butter, then fold in creamed corn, jalapeños and half the cheddar. Combine just until mixed.',
          'Pour over the hot filling, scatter the rest of the cheddar, and bake 190°C for 30–35 minutes until golden and clean-skewered. Rest 10 minutes.'
        ]},
      {name:'Budget',icon:'💰',time:50,costPP:30,nutrition:{kcal:560,protein_g:22,carbs_g:62,fat_g:22},
        feel:'Beans-forward with just enough beef, under thrifty tiled potato and a little cheese — a huge, cheap, well-seasoned tray.',
        tip:'Two tins of beans and a little mince feeds a crowd for very little — lean on smoked paprika, cumin and salt so it still tastes rich.',
        didYouKnow:'Built beans-forward with a little mince and a lot of potato, this is one of the cheapest ways to feed a hungry table.',
        ingredients:[{n:'beef mince',pp:80,u:'g'},{n:'baked beans',pp:150,u:'g'},{n:'potato',pp:200,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'cheddar',pp:30,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'tinned tomatoes',pp:60,u:'g'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],
        method:[
          'Brown the little bit of mince with onion, garlic and a pinch of salt.',
          'Add the smoked paprika and cumin, then plenty of beans and the tomato; simmer and season well with salt and pepper.',
          'Top with lots of thin potato slices, brush with oil and salt them, scatter a little cheese; bake 180°C until tender and golden.'
        ]},
      {name:'Quick',icon:'⚡',time:30,costPP:40,nutrition:{kcal:580,protein_g:28,carbs_g:54,fat_g:28},
        feel:'Par-boiled potato slices over a fast, well-spiced beef-and-bean base, grilled golden — comfort in half an hour.',
        tip:'Par-boil the potato slices for 5 minutes first, and season both the beef and the potato so nothing tastes flat.',
        didYouKnow:'Par-cooking the potato first means the whole bake only needs a few minutes under the grill to brown — no long oven wait.',
        ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'baked beans',pp:100,u:'g'},{n:'potato',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'cumin',pp:3,u:'g'},{n:'tinned tomatoes',pp:60,u:'g'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],
        method:[
          'Par-boil thin potato slices 5 minutes; season with salt.',
          'Brown the mince with onion, garlic and salt; stir in smoked paprika, cumin, tomato and beans and season well with salt and pepper.',
          'Top with the potato and cheese; grill 6–8 minutes until golden.'
        ]}
    ]},
  {id:'sp-honey-mustard-traybake', cat:'ovenbakes', goesWith:['Green salad','Steamed greens','Crusty bread'], diet:'meat', protein:'chicken', name:'Honey-Mustard Chicken Traybake', emoji:'🍯', cuisine:'Global', time:55, costPP:34,
    feel:'Crisp-skinned chicken thighs and caramelised baby potatoes in a sticky, tangy honey-mustard glaze — one tray, deeply savoury, no fuss.',
    didYouKnow:'The trick chefs use on a sticky glaze is to hold half of it back: brushed on near the end, the sugars catch and gloss instead of scorching. Honey browns fast, so glaze applied too early just burns.',
    freezes:false, fridgeDays:3,
    ingredients:[{n:'chicken thighs',pp:170,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'honey',pp:15,u:'g'},{n:'Dijon mustard',pp:10,u:'g'},{n:'wholegrain mustard',pp:10,u:'g'},{n:'apple cider vinegar',pp:8,u:'ml'},{n:'garlic',pp:8,u:'g'},{n:'thyme',pp:2,u:'g'},{n:'rosemary',pp:2,u:'g'},{n:'smoked paprika',pp:2,u:'g'},{n:'butter',pp:8,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'fresh parsley',pp:4,u:'g'},{n:'lemon',pp:10,u:'g'},{n:'salt & pepper'}],
    method:[
      'Heat the oven to 200°C. Pat the chicken thighs really dry and season all over with salt and pepper — dry skin is the secret to crispness. Halve the baby potatoes and chunk the carrots, toss them with the olive oil, the rosemary, a little salt and pepper, and spread on a large tray.',
      'Sit the chicken on top, skin-side up, and roast for 20 minutes to give the potatoes a head start and start crisping the skin.',
      'Meanwhile whisk the honey, both mustards, the apple cider vinegar, garlic, thyme, smoked paprika and the soft butter into a glaze, with a pinch of salt and pepper. The vinegar is important — it balances the honey so the glaze tastes bright, not just sweet.',
      'Brush HALF the glaze over the chicken and potatoes and roast another 20–25 minutes, until the chicken reaches 75°C and the skin is bronzed and the veg caramelised. Brush the reserved glaze on for the last 5 minutes so it stays glossy rather than burning.',
      'Rest 5 minutes, then squeeze over the lemon, scatter with parsley, and spoon the sticky pan juices over everything to serve.'
    ],
    tip:'Reserve half the glaze for the final five minutes — brushed on too early, honey scorches; added late, it turns glossy and sticky.',
    nutrition:{kcal:600,protein_g:34,carbs_g:46,fat_g:30}, storage:'Keeps 3 days; lovely cold in lunchboxes.'},
  {id:'sp-med-baked-fish', cat:'ovenbakes', goesWith:['Crusty bread','Couscous','Green salad','Lemon wedges'], diet:'meat', protein:'fish', name:'Mediterranean Baked Fish', emoji:'🐟', cuisine:'Mediterranean', time:35, costPP:60,
    feel:'Hake baked over burst tomatoes, olives and capers with wine and lemon — light, briny and full of sunshine.',
    didYouKnow:'Baking white fish over burst tomatoes, olives and capers is the home cook\'s cousin of Italian acqua pazza — "crazy water" — where fishermen poached the day\'s catch in seawater, tomatoes and herbs right on the boat.',
    freezes:false, fridgeDays:1,
    ingredients:[{n:'hake fillets',pp:160,u:'g'},{n:'cherry tomatoes',pp:100,u:'g'},{n:'red onion',pp:50,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olives',pp:25,u:'g'},{n:'capers',pp:8,u:'g'},{n:'white wine',pp:20,u:'ml'},{n:'olive oil',pp:15,u:'ml'},{n:'lemon',pp:15,u:'g'},{n:'fresh parsley',pp:5,u:'g'},{n:'fresh basil',pp:4,u:'g'},{n:'oregano',pp:2,u:'g'},{n:'chilli flakes',pp:1,u:'g'},{n:'salt & pepper'}],
    method:[
      'Heat the oven to 200°C. Pat the hake really dry with paper towel — wet fish steams grey instead of taking on flavour — then season both sides with salt and pepper and set aside.',
      'In an oven dish, toss the halved cherry tomatoes, sliced red onion, garlic, olives and capers with the olive oil, oregano, chilli flakes and a good pinch of salt and pepper, then pour in the white wine.',
      'Roast this base on its own for about 12 minutes, until the tomatoes slump and burst and the wine cooks down into a savoury, jammy sauce — building the flavour first is what stops the dish tasting watery.',
      'Nestle the seasoned hake on top of the hot sauce so it stays moist, spoon a little over, and bake another 12–15 minutes until the fish is opaque and flakes easily — pull it the moment it flakes, overbaked fish goes dry.',
      'Squeeze over the lemon and scatter generously with the fresh parsley and basil, added off the heat so they stay bright and fragrant. Serve from the dish with crusty bread or couscous to mop up the sauce.'
    ],
    tip:'Season the fish separately from the sauce, and add the fresh herbs only at the end — seasoning just the tomatoes leaves the fish flat, and herbs cooked in lose their lift.',
    nutrition:{kcal:390,protein_g:36,carbs_g:14,fat_g:22}, storage:'Best fresh; keeps 1 day in the fridge.'},
  {id:'sp-halloumi-veg-bake', cat:'ovenbakes', goesWith:['Couscous','Crusty bread','Herby yoghurt','Green salad'], diet:'veg', protein:'veg', name:'Roasted Veg & Halloumi Bake', emoji:'🧀', cuisine:'Mediterranean', time:45, costPP:51,
    feel:'Sweet caramelised vegetables, crispy chickpeas and golden halloumi, baked together and lifted with lemon, basil and toasted pine nuts — a hearty meat-free tray supper.',
    didYouKnow:'Halloumi has a famously high melting point, so it browns and crisps in the oven instead of collapsing — but it does go squeaky-rubbery if it cooks too long, which is why it goes in last.',
    freezes:false, fridgeDays:2,
    ingredients:[{n:'halloumi',pp:90,u:'g'},{n:'baby marrow',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:60,u:'g'},{n:'cherry tomatoes',pp:80,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olive oil',pp:18,u:'ml'},{n:'smoked paprika',pp:3,u:'g'},{n:'oregano',pp:2,u:'g'},{n:'honey',pp:5,u:'g'},{n:'cornflour',pp:8,u:'g'},{n:'pine nuts',pp:8,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'chilli flakes',pp:1,u:'g'},{n:'salt & pepper'}],
    method:[
      'Heat the oven to 200°C. Toss the chunked red pepper, red onion, baby marrow, garlic and drained chickpeas with most of the olive oil, the smoked paprika, oregano, chilli flakes, a drizzle of honey and a good pinch of salt and pepper. Spread out on a large tray in a single layer — crowd it and the veg steams instead of caramelising.',
      'Roast for 20 minutes, then add the cherry tomatoes, give everything a toss, and roast another 10 minutes until the veg is soft and catching at the edges and the chickpeas are crisp.',
      'Meanwhile, pat the halloumi dry, cut into thick fingers and toss in the cornflour with a little salt and pepper — the cornflour gives it a properly golden, crisp crust. Toast the pine nuts in a dry pan until just golden.',
      'Nestle the halloumi into the hot tray, drizzle with the last of the oil, and roast a final 10–12 minutes until golden — no longer, or it turns squeaky.',
      'Finish with a good squeeze of lemon, the toasted pine nuts and plenty of torn basil. Serve with couscous or bread.'
    ],
    tip:'Dust the halloumi in cornflour and add it last — the coating crisps it golden, and the late timing keeps it soft inside instead of rubbery.',
    nutrition:{kcal:520,protein_g:22,carbs_g:36,fat_g:32}, storage:'Keeps 2 days; good cold the next day.'},

  // ── 🍔 FRIED & GRILLED — added 22 Jun (Supper build, Batch 5 / final) ──
  {id:"sp-smash-burger",cat:"friedgrilled",goesWith:["Slap chips","Pickles","Burger Sauce","Onion rings"],diet:"meat",protein:"beef",name:"Smash Burger with Burger Sauce",emoji:"🍔",cuisine:"American",time:25,costPP:46,feel:"A craggy, cheese-draped smash patty with tangy burger sauce — fast-food magic, done properly at home.",didYouKnow:"The smash burger is all about the Maillard reaction: pressing the patty thin onto blazing-hot metal maximises browning, which is exactly why a smashed patty tastes beefier than a thick one cooked gently.",freezes:false,fridgeDays:1,ingredients:[{n:"beef mince",pp:160,u:"g"},{n:"burger bun",pp:1,u:"each"},{n:"cheddar slice",pp:20,u:"g"},{n:"onion",pp:40,u:"g"},{n:"mayo",pp:15,u:"g"},{n:"tomato sauce",pp:8,u:"g"},{n:"mustard",pp:4,u:"g"},{n:"pickles",pp:12,u:"g"},{n:"lettuce",pp:15,u:"g"},{n:"oil",pp:6,u:"ml"},{n:"salt & pepper"}],method:["Make the burger sauce first: stir the mayo, tomato sauce, a little mustard and a spoon of finely chopped pickles together, and chill while you cook.","Divide the mince into loose, rough balls — do not pack them tight, a loose ball gives a craggier crust. Do not season them yet.","Get a heavy pan or flat griddle screaming hot. Sit a ball in, smash it flat with a spatula and hold for 10 seconds — maximum contact with the hot metal is what builds the lacy browned crust. Now season the top hard with salt and pepper.","Sear undisturbed for 2 minutes until the edges are deep brown and crisp, then flip, lay a slice of cheddar on top and cook 1 minute more to melt (a splash of water under a lid melts it faster).","Toast the bun cut-side down in the beef fat. Build: burger sauce on both halves, lettuce, thin raw onion, the cheesy patty, top bun. Press gently and eat straight away."],tip:"Loose balls, a screaming-hot surface and salt only AFTER the smash — that is the holy trinity of a craggy, beefy crust.",nutrition:{kcal:620,protein_g:32,carbs_g:34,fat_g:38},storage:"Best fresh; the cooked patties keep 1 day and reheat in a pan."},
  {id:"sp-buttermilk-chicken",cat:"friedgrilled",goesWith:["Slap chips","Coleslaw","Corn on the cob","Hot honey"],diet:"meat",protein:"chicken",name:"Crispy Buttermilk Fried Chicken",emoji:"🍗",cuisine:"American / Southern",time:90,costPP:40,feel:"Shatteringly crisp, deeply seasoned crust over juicy buttermilk-brined chicken — the Sunday-best fry-up.",didYouKnow:"The acid in buttermilk gently breaks down the chicken's surface proteins, so it stays juicy — and it clings to the flour far better than water would, which is what builds that signature shaggy, craggy crust.",freezes:false,fridgeDays:2,ingredients:[{n:"chicken pieces",pp:180,u:"g"},{n:"buttermilk",pp:120,u:"ml"},{n:"flour",pp:70,u:"g"},{n:"paprika",pp:4,u:"g"},{n:"smoked paprika",pp:3,u:"g"},{n:"garlic powder",pp:3,u:"g"},{n:"cayenne pepper",pp:2,u:"g"},{n:"oil for frying",pp:50,u:"ml"},{n:"salt & pepper"}],method:["Brine the chicken in the buttermilk with a big pinch of salt, the garlic powder and half the paprika for at least an hour — overnight is better. The buttermilk tenderises and seasons right through.","Mix the flour with the rest of the paprika, the smoked paprika, the cayenne, a good teaspoon of salt and plenty of pepper. Spoon a couple of tablespoons of the buttermilk into the flour and rub it in — those little clumps fry into extra-craggy crunch.","Lift each piece straight from the buttermilk (let it drip, do not wipe) and press firmly into the seasoned flour, coating every crevice. Rest the coated pieces 10 minutes so the crust sets.","Heat the oil to 170°C (a pinch of flour should sizzle steadily). Fry in batches without crowding, 12-15 minutes turning once, until deep golden and 75°C inside — keep the oil around 165-170°C so the crust cooks in time with the meat.","Drain on a wire rack (never paper, which steams the underside soggy) and season with a little salt while hot."],tip:"Buttermilk-brine for tenderness, rub a little buttermilk into the flour for craggy bits, and hold the oil at a steady 165-170°C — too hot and the crust burns before the inside cooks.",nutrition:{kcal:560,protein_g:38,carbs_g:30,fat_g:30},storage:"Keeps 2 days; re-crisp in a hot oven, not the microwave."},
  {id:"sp-korean-chicken",cat:"friedgrilled",goesWith:["Steamed rice","Pickled radish","Spring onion","Cold beer"],diet:"meat",protein:"chicken",name:"Korean Sticky Fried Chicken",emoji:"🍗",cuisine:"Korean",time:45,costPP:42,feel:"Glass-crunchy double-fried chicken in a sticky gochujang glaze — sweet, garlicky and gently fiery.",didYouKnow:"Gochujang, a fermented Korean chilli paste, is the soul of yangnyeom sauce — its slow-built, fermented umami and gentle heat are why the glaze tastes deep and complex, not just spicy-sweet. Chicken and beer together is so loved in Korea it has its own name: chimaek.",freezes:false,fridgeDays:2,ingredients:[{n:"chicken pieces",pp:170,u:"g"},{n:"cornflour",pp:30,u:"g"},{n:"flour",pp:20,u:"g"},{n:"gochujang",pp:20,u:"g"},{n:"tomato sauce",pp:15,u:"g"},{n:"honey",pp:15,u:"g"},{n:"soy sauce",pp:12,u:"ml"},{n:"garlic",pp:8,u:"g"},{n:"ginger",pp:6,u:"g"},{n:"sesame oil",pp:5,u:"ml"},{n:"white vinegar",pp:6,u:"ml"},{n:"sesame seeds",pp:3,u:"g"},{n:"spring onion",pp:8,u:"g"},{n:"oil for frying",pp:50,u:"ml"},{n:"salt & pepper"}],method:["Season the chicken with salt and pepper, then toss in a 50/50 mix of cornflour and flour until dry-coated — the cornflour is what gives that glassy, shattering crunch.","Double-fry for the signature crackle: fry at 160°C for 6-7 minutes until pale and just cooked, rest 5 minutes, then fry again at 190°C for 3-4 minutes until deep golden and hard-crisp. Drain on a rack.","Make the yangnyeom glaze: gently sizzle the grated garlic and ginger in the sesame oil, then add the gochujang, tomato sauce, honey, soy and vinegar and simmer 2-3 minutes into a glossy, sticky sauce.","Toss the hot chicken through the warm glaze (or brush it on, which keeps it crisp longer) until evenly coated.","Finish with the sesame seeds and sliced spring onion, and eat straight away while the crust is still crackly."],tip:"Double-frying is non-negotiable — the first fry cooks it, the second sets a glassy crust that survives the sticky sauce instead of going soft.",nutrition:{kcal:600,protein_g:34,carbs_g:48,fat_g:28},storage:"Best fresh; keeps 2 days but the crust softens — re-crisp in a hot oven."},
  {id:"sp-pulled-pork-roll",cat:"friedgrilled",goesWith:["Slap chips","Coleslaw","Pickles","Extra BBQ sauce"],diet:"meat",protein:"pork",name:"Pulled Pork Roll & Fries",emoji:"🥪",cuisine:"American",time:200,costPP:44,feel:"Slow-pulled smoky-sweet pork piled into a soft roll with crunchy slaw and salty chips — proper weekend eating.",didYouKnow:"Pork shoulder is full of collagen and fat that only break down with long, gentle heat — rush it and it is tough and chewy; give it three slow hours and the same cut shreds like silk.",freezes:true,fridgeDays:3,ingredients:[{n:"pork shoulder",pp:200,u:"g"},{n:"soft roll",pp:1,u:"each"},{n:"bbq sauce",pp:30,u:"g"},{n:"smoked paprika",pp:4,u:"g"},{n:"brown sugar",pp:5,u:"g"},{n:"cumin",pp:2,u:"g"},{n:"garlic powder",pp:2,u:"g"},{n:"cayenne pepper",pp:1,u:"g"},{n:"coleslaw",pp:60,u:"g"},{n:"slap chips",pp:150,u:"g"},{n:"oil",pp:8,u:"ml"},{n:"salt & pepper"}],method:["Make a proper rub: mix the smoked paprika, brown sugar, cumin, garlic powder, cayenne and a good teaspoon of salt and pepper. Massage it all over the pork shoulder.","Sit the pork in a dish, cover tightly with foil and slow-roast at 150°C for about 3 hours, until it shreds with no resistance — low and slow is what renders the fat and collagen into meltingly soft meat.","Shred the warm pork with two forks, discarding any hard fat, and toss it through the BBQ sauce plus a few spoons of the resting juices for moisture.","Bake or fry the slap chips until golden, and toss them with a little salt (and a splash of vinegar, SA-style, if you like).","Pile the saucy pork into the soft roll, top with the crunchy coleslaw for freshness, and serve with the chips alongside."],tip:"A real rub of smoked paprika, brown sugar and cumin beats any all-purpose blend — and 3 hours at 150°C is what turns a tough shoulder fall-apart tender.",nutrition:{kcal:680,protein_g:34,carbs_g:52,fat_g:36},storage:"The pulled pork keeps 3 days and freezes 1 month; assemble the rolls fresh."},
  {id:"sp-fish-cakes",cat:"friedgrilled",goesWith:["Tartare Sauce","Slap chips","Green salad","Lemon wedges"],diet:"meat",protein:"fish",name:"Crispy Fish Cakes with Tartare",emoji:"🐟",cuisine:"British",time:45,costPP:52,feel:"Crisp golden fish cakes with a soft, well-seasoned middle and a sharp caper-and-gherkin tartare.",didYouKnow:"Tartare sauce was born in 19th-century France as the partner to steak tartare; the gherkins and capers were there to cut through rich food, which is exactly why it became the classic fish-cake match.",freezes:true,fridgeDays:2,ingredients:[{n:"white fish",pp:120,u:"g"},{n:"potato",pp:130,u:"g"},{n:"large eggs",pp:1,u:"egg"},{n:"breadcrumbs",pp:45,u:"g"},{n:"spring onion",pp:15,u:"g"},{n:"mayo",pp:25,u:"g"},{n:"gherkin",pp:12,u:"g"},{n:"capers",pp:8,u:"g"},{n:"lemon",pp:12,u:"g"},{n:"fresh parsley",pp:4,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"oil",pp:20,u:"ml"},{n:"salt & pepper"}],method:["Boil the potatoes until tender, drain well and let them steam-dry for a minute, then mash — a dry mash is what holds the cakes together and lets them crisp; a wet one makes them slump.","Flake the cooked fish in (leave some chunks for texture) with the sliced spring onion, chopped parsley, a little paprika and plenty of salt and pepper. Taste it — under-seasoned fish cakes are the usual let-down.","Shape into firm cakes and chill 20 minutes so they set — the fridge is what stops them falling apart in the pan.","Dust each lightly in flour, dip in beaten egg, then press into the breadcrumbs for a craggy crust.","Shallow-fry in the oil over medium heat, 3-4 minutes a side, until deep golden and hot through; drain on a rack.","Make the tartare: stir the chopped gherkin, capers, a squeeze of lemon and a little parsley into the mayo. Serve the crisp cakes with the tartare and lemon wedges."],tip:"Dry the mash and chill the shaped cakes — two small steps that are the whole difference between crisp cakes and ones that collapse. Capers and gherkin make the tartare sing.",nutrition:{kcal:480,protein_g:26,carbs_g:38,fat_g:24},storage:"Keeps 2 days; freezes well crumbed. Re-crisp in the oven."},
  {id:"sp-beef-fajitas",cat:"friedgrilled",goesWith:["Guacamole","Sour cream","Tomato salsa","Warm tortillas"],diet:"meat",protein:"beef",name:"Sizzling Beef Fajitas",emoji:"🫓",cuisine:"Tex-Mex",time:30,costPP:46,feel:"Sizzling smoky-charred beef strips and sweet peppers, piled into warm tortillas with avo and lime.",didYouKnow:"\"Fajita\" comes from faja, Spanish for \"belt\" or \"strip\" — it originally meant the skirt-steak cut itself, the thin strip ranch cooks were given as part of their pay, long before it meant a spice or a wrap.",freezes:false,fridgeDays:1,ingredients:[{n:"rump steak",pp:150,u:"g"},{n:"tortillas",pp:2,u:"each"},{n:"red pepper",pp:60,u:"g"},{n:"onion",pp:50,u:"g"},{n:"cumin",pp:3,u:"g"},{n:"smoked paprika",pp:3,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"oregano",pp:1,u:"g"},{n:"garlic",pp:6,u:"g"},{n:"cayenne pepper",pp:1,u:"g"},{n:"lime",pp:12,u:"g"},{n:"avocado",pp:40,u:"g"},{n:"sour cream",pp:20,u:"g"},{n:"fresh coriander",pp:4,u:"g"},{n:"oil",pp:12,u:"ml"},{n:"salt & pepper"}],method:["Make a real fajita rub from named spices — cumin, smoked paprika, paprika, oregano, grated garlic, a pinch of cayenne, salt and pepper — not a mystery \"fajita\" sachet. Toss the sliced steak in it with a squeeze of lime and rest 15 minutes.","Slice the peppers and onion thick so they keep some bite once charred.","Get a pan or griddle screaming hot and sear the steak fast in a single layer, 1-2 minutes — don't crowd it or it stews — then set aside to rest (resting keeps it juicy).","In the same hot pan, char the peppers and onion until smoky-edged and just tender, scraping up the beefy bits stuck to the pan. Season.","Return the steak and any resting juices, toss together with another squeeze of lime and the chopped coriander.","Serve sizzling with warm tortillas, smashed avo and sour cream — let everyone build their own at the table."],tip:"Real named spices beat any \"fajita seasoning\" sachet. Sear the beef hard and fast then rest it — over-cooked strips go grey and chewy.",nutrition:{kcal:560,protein_g:34,carbs_g:42,fat_g:26},storage:"Best fresh; cooked filling keeps 1 day."},
  {id:"sp-chicken-quesadillas",cat:"friedgrilled",goesWith:["Tomato salsa","Guacamole","Sour cream","Lime wedges"],diet:"meat",protein:"chicken",name:"Cheesy Chicken Quesadillas",emoji:"🫓",cuisine:"Tex-Mex",time:25,costPP:38,feel:"Golden, crunchy tortilla parcels oozing with spiced chicken and stretchy melted cheese.",didYouKnow:"Quesadilla means \"little cheesy thing\", from queso — and in much of Mexico a true quesadilla must contain cheese, a point people still argue about online to this day.",freezes:false,fridgeDays:1,ingredients:[{n:"chicken breast",pp:130,u:"g"},{n:"tortillas",pp:2,u:"each"},{n:"cheddar",pp:45,u:"g"},{n:"mozzarella",pp:20,u:"g"},{n:"red pepper",pp:40,u:"g"},{n:"onion",pp:30,u:"g"},{n:"cumin",pp:2,u:"g"},{n:"smoked paprika",pp:2,u:"g"},{n:"paprika",pp:1,u:"g"},{n:"oregano",pp:1,u:"g"},{n:"garlic",pp:5,u:"g"},{n:"cayenne pepper",pp:1,u:"g"},{n:"lime",pp:8,u:"g"},{n:"fresh coriander",pp:3,u:"g"},{n:"tomato salsa",pp:25,u:"g"},{n:"oil",pp:10,u:"ml"},{n:"salt & pepper"}],method:["Season the diced chicken with a proper blend — cumin, smoked paprika, paprika, oregano, grated garlic, a pinch of cayenne, salt and pepper — real spices, not a \"taco\" sachet.","Fry the chicken with the pepper and onion over medium-high heat until cooked and a little charred, then squeeze in lime and fold through the coriander. Chop or shred it.","Mix the two cheeses — cheddar for flavour, mozzarella for the stretch and melt.","Scatter chicken and cheese over half of each tortilla, fold over, and toast in a dry pan, pressing with a spatula, until deep golden — the press is what fuses it so it doesn't fall apart.","Flip once and crisp the other side, then rest a minute so the cheese sets (and doesn't ooze out), cut into wedges and serve with salsa and lime."],tip:"Two cheeses — cheddar for taste, mozzarella for the pull — and press the quesadilla as it toasts so it seals. Rest it before cutting so the cheese stays in.",nutrition:{kcal:540,protein_g:36,carbs_g:40,fat_g:26},storage:"Best fresh and hot; re-crisp in a dry pan, not the microwave."},
  {id:"sp-chicken-schnitzel",cat:"friedgrilled",goesWith:["Slap chips","Green salad","Lemon wedges","Mushroom sauce"],diet:"meat",protein:"chicken",name:"Crunchy Chicken Schnitzel",emoji:"🍗",cuisine:"European",time:30,costPP:38,feel:"Golden parmesan-crumbed schnitzel, thin and crisp with a juicy centre and a squeeze of lemon.",didYouKnow:"Pounding the breast thin is not just about speed — even thickness means the whole schnitzel reaches the perfect doneness at once, so the crust crisps up before the meat has a chance to overcook and dry out.",freezes:true,fridgeDays:2,ingredients:[{n:"chicken breast",pp:160,u:"g"},{n:"flour",pp:30,u:"g"},{n:"large eggs",pp:1,u:"egg"},{n:"breadcrumbs",pp:55,u:"g"},{n:"parmesan",pp:15,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"fresh parsley",pp:3,u:"g"},{n:"lemon",pp:12,u:"g"},{n:"oil",pp:30,u:"ml"},{n:"salt & pepper"}],method:["Butterfly the chicken breast and pound it between two sheets of plastic to an even 1 cm — thin and even means it cooks fast and stays juicy rather than drying out.","Set up three bowls: seasoned flour (with salt, pepper and the paprika); beaten egg; and breadcrumbs mixed with the grated parmesan and chopped parsley. The parmesan in the crumb is the upgrade — it fries into savoury golden crunch.","Dust the chicken in flour, dip fully in egg, then press firmly into the crumb on both sides so it really sticks. Rest 10 minutes to let the coating set.","Shallow-fry in 1 cm of oil over steady medium-high heat, 3-4 minutes a side, until deep golden and cooked through; spoon hot oil over the top so it puffs and crisps evenly.","Drain on a rack, season with a little salt, and serve with a generous wedge of lemon — the acid cuts the richness."],tip:"Pound it thin and even, season every layer (flour, egg AND crumb), and put parmesan in the crumb for golden, savoury crunch.",nutrition:{kcal:520,protein_g:40,carbs_g:32,fat_g:24},storage:"Keeps 2 days; freezes crumbed-but-raw. Re-crisp in the oven, not the microwave."},
  {id:"sp-chilli-dogs",cat:"friedgrilled",goesWith:["Slap chips","Crispy onions","Jalapeños","Mustard"],diet:"meat",protein:"beef",name:"Loaded Chilli Dogs",emoji:"🌭",cuisine:"American",time:35,costPP:38,feel:"A charred dog smothered in thick, spiced beef chilli, melted cheese and sharp raw onion.",didYouKnow:"The chilli dog is American diner royalty — and the trick is that chilli-for-dogs is cooked thicker and finer than a bowl chilli, so it clings to the sausage instead of sliding off the bun.",freezes:true,fridgeDays:3,ingredients:[{n:"hot dog sausages",pp:2,u:"each"},{n:"hot dog rolls",pp:2,u:"each"},{n:"beef mince",pp:90,u:"g"},{n:"kidney beans",pp:40,u:"g"},{n:"chopped tomatoes",pp:60,u:"g"},{n:"tomato paste",pp:10,u:"g"},{n:"cheddar",pp:30,u:"g"},{n:"onion",pp:35,u:"g"},{n:"cumin",pp:2,u:"g"},{n:"smoked paprika",pp:2,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"oregano",pp:1,u:"g"},{n:"garlic",pp:6,u:"g"},{n:"cayenne pepper",pp:1,u:"g"},{n:"oil",pp:8,u:"ml"},{n:"salt & pepper"}],method:["Build a proper quick chilli: soften half the onion in the oil, add the mince and brown it hard — real colour means real flavour — then stir in the garlic, cumin, smoked paprika, paprika, oregano and a pinch of cayenne and cook a minute until fragrant.","Add the tomato paste and cook it out for a minute (this kills the raw-tin taste), then the chopped tomatoes and the drained kidney beans. Season with salt and pepper and simmer 10-15 minutes into a thick, glossy chilli that holds its shape on a spoon.","Grill or fry the sausages until lightly charred and hot through.","Tuck a sausage into each roll and spoon the thick chilli over, then top with grated cheddar and the rest of the raw onion.","Flash under a hot grill until the cheese melts and bubbles. Eat immediately — and keep the napkins close."],tip:"Brown the mince properly and cook the tomato paste out — that is where a chilli dog goes from \"tinned\" to crave-worthy. Real cumin and smoked paprika do the rest.",nutrition:{kcal:620,protein_g:30,carbs_g:48,fat_g:34},storage:"The chilli keeps 3 days and freezes a month; assemble fresh."},
  {id:"sp-boerewors-roll",cat:"friedgrilled",goesWith:["Mrs Balls Chutney","Slap chips","Mustard","Crispy onions"],diet:"meat",protein:"beef",name:"Boerewors Roll & Tomato Smoor",emoji:"🌭",cuisine:"South African",time:35,costPP:34,feel:"Juicy coriander-spiced wors in a soft roll under a thick, sweet-tangy tomato smoor — pure braai-day comfort.",didYouKnow:"Boerewors means \"farmer's sausage\" and by South African law must be at least 90% meat, led by that signature coriander-seed spicing — the coil shape and a proper homemade smoor are what make the boerie roll a braai institution.",freezes:false,fridgeDays:1,ingredients:[{n:"boerewors",pp:160,u:"g"},{n:"hot dog roll",pp:1,u:"each"},{n:"tomato",pp:90,u:"g"},{n:"onion",pp:70,u:"g"},{n:"garlic",pp:5,u:"g"},{n:"curry powder",pp:2,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"sugar",pp:4,u:"g"},{n:"chutney",pp:12,u:"g"},{n:"worcestershire sauce",pp:4,u:"ml"},{n:"mustard",pp:5,u:"g"},{n:"oil",pp:8,u:"ml"},{n:"salt & pepper"}],method:["Make a proper tomato smoor, not a squirt of sauce: fry the sliced onion slowly in the oil until soft and golden — caramelised onion is the backbone of a real boerie relish.","Add the garlic, curry powder and paprika and fry 1 minute until fragrant, then add the chopped tomato, the sugar, a splash of Worcestershire and a spoon of chutney. Season and simmer 15 minutes into a thick, sticky smoor.","Grill the boerewors over medium coals (or a hot pan) in one coil, turning, until cooked through and lightly charred — never prick it, or you pour the juices into the fire.","Warm and lightly toast the roll and smear with a little mustard.","Tuck the wors in, pile the warm smoor generously over the top, and finish with an extra dot of chutney. Eat with both hands."],tip:"A real boerie is all about the homemade tomato smoor — caramelised onion, curry powder and a spoon of chutney. And never prick the wors; the casing is holding all the juice.",nutrition:{kcal:600,protein_g:26,carbs_g:44,fat_g:36},storage:"Eat fresh; the smoor keeps 3 days and freezes well."},
  {id:"sp-peri-peri-chicken",cat:"friedgrilled",goesWith:["Slap chips","Peri-Peri Mayo","Green salad","Garlic bread"],diet:"meat",protein:"chicken",name:"Peri-Peri Flame-Grilled Chicken",emoji:"🔥",cuisine:"South African / Mozambican",time:75,costPP:30,feel:"Fiery, garlicky, citrus-bright flame-grilled chicken with charred, glossy skin — the SA flame-grill classic.",didYouKnow:"Peri-peri (\"pepper-pepper\" in Swahili) was born when Portuguese settlers met the African bird's-eye chilli in Mozambique — the fiery, garlicky, citrusy marinade that followed is the very same one that made Nando's famous worldwide.",freezes:false,fridgeDays:2,ingredients:[{n:"chicken (flattened)",pp:220,u:"g"},{n:"peri-peri chilli",pp:10,u:"g"},{n:"garlic",pp:10,u:"g"},{n:"lemon",pp:18,u:"g"},{n:"smoked paprika",pp:4,u:"g"},{n:"paprika",pp:2,u:"g"},{n:"oregano",pp:1,u:"g"},{n:"red pepper",pp:30,u:"g"},{n:"white wine vinegar",pp:8,u:"ml"},{n:"oil",pp:15,u:"ml"},{n:"salt & pepper"}],method:["Make the peri-peri sauce: blend the bird's-eye (peri-peri) chillies, garlic, lemon juice, smoked paprika, a little oregano, the vinegar, a roasted red pepper and the oil into a smooth, fiery red sauce. Season with salt.","Spatchcock the chicken — cut out the backbone and press it flat — so it cooks evenly and fast and takes on more marinade.","Coat the chicken in HALF the sauce, working some under the skin, and marinate at least an hour, ideally overnight. Keep the other half back for basting and serving — never reuse marinade that touched raw chicken.","Grill skin-side first over medium coals or a hot griddle, turning and basting with the reserved sauce, 30-40 minutes, until charred, glossy and cooked through (juices run clear). Use two-zone heat and watch the flames — the sugars catch fast.","Rest 5 minutes, then serve with the remaining sauce, lemon and a cold drink."],tip:"Spatchcock for even cooking, and ALWAYS keep half the sauce back for basting and serving. Cook to the side of the flames, not straight over them, so the sugary marinade chars instead of burning.",nutrition:{kcal:520,protein_g:44,carbs_g:8,fat_g:34},storage:"Keeps 2 days; the marinade keeps a week in the fridge."},
  {id:"sp-lamb-sosaties",cat:"friedgrilled",goesWith:["Yellow Rice","Green salad","Sambals","Chutney"],diet:"meat",protein:"lamb",name:"Cape Malay Lamb Sosaties",emoji:"🍢",cuisine:"South African",time:60,costPP:48,feel:"Sweet-and-spicy curried lamb skewers threaded with apricots — the Cape Malay braai classic, caramelised over the coals.",didYouKnow:"Sosatie comes from the Cape Malay \"sate\" (skewered meat) and \"saus\" (spicy sauce). The sweet apricot-and-curry marinade is a close cousin of bobotie — both are cornerstones of Cape Malay cooking.",freezes:true,fridgeDays:2,ingredients:[{n:"lamb",pp:170,u:"g"},{n:"dried apricots",pp:30,u:"g"},{n:"onion",pp:60,u:"g"},{n:"garlic",pp:6,u:"g"},{n:"ginger",pp:4,u:"g"},{n:"curry powder",pp:5,u:"g"},{n:"turmeric",pp:2,u:"g"},{n:"cumin",pp:2,u:"g"},{n:"coriander",pp:2,u:"g"},{n:"apricot jam",pp:18,u:"g"},{n:"vinegar",pp:10,u:"ml"},{n:"brown sugar",pp:5,u:"g"},{n:"bay leaves",pp:1,u:"g"},{n:"oil",pp:10,u:"ml"},{n:"salt & pepper"}],method:["Cook the marinade first — this is the Cape Malay secret: soften the chopped onion in the oil, then add the garlic, ginger, curry powder, turmeric, cumin and coriander and fry until fragrant.","Stir in the vinegar, apricot jam, brown sugar and a bay leaf, and simmer 10-15 minutes until thick and jammy — cooking the marinade caramelises the sugars and blooms the spices. Cool it completely.","Toss the lamb cubes in the cooled marinade, cover and refrigerate at least overnight, up to 2-3 days — the long soak tenderises the meat and flavours it right through.","Thread the lamb onto soaked skewers, alternating with dried apricots and chunks of onion.","Grill over medium coals, turning and basting, 10-12 minutes, until caramelised and just cooked — don't dry them out. Boil any leftover marinade a few minutes and serve as a sauce.","Serve with geelrys (yellow rice) and a fresh salad."],tip:"Cook the marinade first and cool it — that caramelised, spiced apricot base is what makes a real sosatie. Then marinate at least overnight; longer is better.",nutrition:{kcal:540,protein_g:32,carbs_g:34,fat_g:30},storage:"Marinated raw skewers freeze 1 month; cooked keep 2 days."},
  {id:"sp-halloumi-burger",cat:"friedgrilled",goesWith:["Slap chips","Green salad","Sweet chilli sauce","Rocket"],diet:"veg",protein:"veg",name:"Halloumi & Avo Burger",emoji:"🍔",cuisine:"Global",time:20,costPP:44,feel:"Crisp golden halloumi, cool avocado and a sweet-chilli kick — the meat-free burger that doesn't feel like a compromise.",didYouKnow:"Halloumi's unusually high melting point lets it crisp and brown in the pan instead of oozing — it is one of the only cheeses you can properly fry or grill and have it hold its shape.",freezes:false,fridgeDays:1,ingredients:[{n:"halloumi",pp:90,u:"g"},{n:"burger bun",pp:1,u:"each"},{n:"avocado",pp:70,u:"g"},{n:"tomato",pp:30,u:"g"},{n:"red onion",pp:25,u:"g"},{n:"lettuce",pp:15,u:"g"},{n:"cornflour",pp:6,u:"g"},{n:"sweet chilli sauce",pp:15,u:"g"},{n:"mayo",pp:10,u:"g"},{n:"lemon",pp:8,u:"g"},{n:"oil",pp:8,u:"ml"},{n:"salt & pepper"}],method:["Pat the halloumi dry, slice into thick slabs and toss in the cornflour with a little pepper — the cornflour gives a properly golden, crisp crust instead of a bald slice.","Fry in the oil over medium-high heat until deep golden and crisp on both sides, about 2 minutes a side. Halloumi is salty, so taste before adding any salt.","Mash the avocado with a squeeze of lemon and a pinch of salt into a quick, fresh smash.","Toast the bun cut-side down. Spread the base with the avo smash and the lid with the mayo stirred into the sweet chilli sauce.","Stack: lettuce, the crisp halloumi, tomato and thin red onion. Press the lid on and serve while the halloumi is hot and squeaky."],tip:"Dust the halloumi in cornflour for a crisp golden crust, and do not salt it — it is salty enough, so let the avo and sweet chilli bring the balance.",nutrition:{kcal:560,protein_g:22,carbs_g:40,fat_g:34},storage:"Best fresh and hot; halloumi goes rubbery once cold."},
  {id:"sp-tofu-bean-burger",cat:"friedgrilled",goesWith:["Slap chips","Green salad","Vegan mayo","Pickles"],diet:"vegan",protein:"veg",name:"Crispy Tofu Bean Burger",emoji:"🍔",cuisine:"Global",time:30,costPP:32,feel:"A crisp, well-spiced bean-and-tofu patty that actually holds together — a veg burger with real backbone.",didYouKnow:"Beans and tofu together cover what a veg patty usually misses: the beans bring body and a creamy bind, while pressed-dry tofu adds protein and a surface that genuinely crisps in the pan.",freezes:true,fridgeDays:3,ingredients:[{n:"firm tofu",pp:80,u:"g"},{n:"tinned beans",pp:90,u:"g"},{n:"breadcrumbs",pp:35,u:"g"},{n:"burger bun",pp:1,u:"each"},{n:"onion",pp:30,u:"g"},{n:"garlic",pp:6,u:"g"},{n:"cumin",pp:2,u:"g"},{n:"smoked paprika",pp:2,u:"g"},{n:"coriander",pp:2,u:"g"},{n:"vegan mayo",pp:20,u:"g"},{n:"lettuce",pp:15,u:"g"},{n:"tomato",pp:30,u:"g"},{n:"oil",pp:12,u:"ml"},{n:"salt & pepper"}],method:["Press the tofu in a clean cloth for 10 minutes to squeeze out the water — dry tofu binds and crisps, wet tofu makes a mushy patty.","Mash the drained beans roughly (leave some texture), then mix in the crumbled tofu, finely chopped onion, garlic, the cumin, smoked paprika and ground coriander, the breadcrumbs and a good pinch of salt and pepper. Squeeze it together until it holds a shape.","Form firm patties and chill 15 minutes so they set and hold together in the pan.","Fry in the oil over medium heat, 3-4 minutes a side, until deep golden and crisp — do not move them early or the crust tears.","Toast the bun, spread with vegan mayo, and stack the patty with lettuce, tomato and onion."],tip:"Press the tofu dry and chill the patties — that is the difference between a crisp, holding-together burger and a sad mush. Real cumin, smoked paprika and coriander give it proper flavour.",nutrition:{kcal:480,protein_g:20,carbs_g:48,fat_g:22},storage:"Patties keep 3 days and freeze 1 month; cook from chilled."},
  {id:"sp-birria-tacos",cat:"friedgrilled",goesWith:["Consommé","Lime wedges","Onion & Coriander","Tomato salsa"],diet:"meat",protein:"beef",name:"Beef Birria Tacos (Quesabirria)",emoji:"🌮",cuisine:"Mexican",time:210,costPP:50,feel:"Chilli-braised beef and melted cheese in a crisp, red-stained taco, dunked in rich consommé — the viral taco-truck legend.",didYouKnow:"Birria began in Jalisco, Mexico as a celebration stew of chilli-braised meat; the crispy, cheese-filled, consommé-dunked \"quesabirria\" taco was born from Tijuana street carts in the 2000s and then went viral around the world.",freezes:true,fridgeDays:3,ingredients:[{n:"beef chuck",pp:170,u:"g"},{n:"dried chillies (guajillo & ancho)",pp:10,u:"g"},{n:"tomato",pp:80,u:"g"},{n:"onion",pp:50,u:"g"},{n:"garlic",pp:8,u:"g"},{n:"tortillas",pp:2,u:"each"},{n:"mozzarella",pp:30,u:"g"},{n:"cheddar",pp:20,u:"g"},{n:"beef stock",pp:200,u:"ml"},{n:"cumin",pp:2,u:"g"},{n:"oregano",pp:2,u:"g"},{n:"cinnamon",pp:1,u:"g"},{n:"bay leaves",pp:1,u:"g"},{n:"vinegar",pp:6,u:"ml"},{n:"lime",pp:10,u:"g"},{n:"fresh coriander",pp:4,u:"g"},{n:"oil",pp:10,u:"ml"},{n:"salt & pepper"}],method:["Toast the dried chillies (guajillo and ancho are ideal — or any dried red chillies) in a dry pan 30 seconds until fragrant, then soak in boiling water 20 minutes until soft. Toasting wakes up their deep, fruity-smoky flavour.","Blend the soaked chillies with the tomato, onion, garlic, cumin, oregano, a little cinnamon, the vinegar and a splash of stock into a smooth red adobo.","Season and sear the beef chunks hard on all sides — the brown crust is non-negotiable flavour — then pour over the adobo and the rest of the stock, add a bay leaf, and braise covered (low oven 150°C or a gentle simmer) about 3 hours, until it shreds easily.","Shred the beef. Skim the rust-red, chilli-stained fat off the top of the broth — that's the magic for the tortillas — and keep the remaining broth as your consommé for dipping.","Dip each tortilla in the skimmed red fat, lay it in a hot pan, scatter with the cheeses and shredded beef, fold and fry until crisp and the cheese melts — this is quesabirria.","Top with chopped onion and coriander and serve with a bowl of warm consommé and lime — dunk every bite."],tip:"Toast then soak the chillies, and don't skip skimming the red chilli-fat — frying the tortillas in it is what makes quesabirria taste like the taco truck. Guajillo and ancho if you can find them; any dried red chillies work.",nutrition:{kcal:640,protein_g:38,carbs_g:34,fat_g:38},storage:"The braised beef keeps 3 days and freezes a month; crisp the tacos fresh."},
  {id:"sp-gatsby",cat:"friedgrilled",goesWith:["Atchar","Peri-Peri Mayo","Extra slap chips","Cold drink"],diet:"meat",protein:"beef",name:"Cape Town Gatsby",emoji:"🥖",cuisine:"South African",time:45,costPP:48,feel:"The legendary foot-long Cape Town chip roll — masala steak, hot slap chips, peri-peri and atchar, made to be shared.",didYouKnow:"Born in 1976 in Athlone, Cape Town, the Gatsby was named when a worker called the giant chip-and-polony roll a \"Gatsby smash\" after the film of the day — and the one unbreakable rule still stands: no slap chips, no Gatsby.",freezes:false,fridgeDays:1,ingredients:[{n:"rump steak",pp:160,u:"g"},{n:"long roll",pp:1,u:"each"},{n:"slap chips",pp:180,u:"g"},{n:"durban masala",pp:8,u:"g"},{n:"garlic",pp:6,u:"g"},{n:"atchar",pp:20,u:"g"},{n:"peri-peri sauce",pp:20,u:"g"},{n:"mayo",pp:15,u:"g"},{n:"lettuce",pp:30,u:"g"},{n:"tomato",pp:40,u:"g"},{n:"onion",pp:30,u:"g"},{n:"white vinegar",pp:5,u:"ml"},{n:"oil",pp:12,u:"ml"},{n:"salt & pepper"}],method:["Cut the rump into thin strips and toss with the Durban masala, grated garlic, a pinch of salt and a little oil. Leave to marinate 20 minutes, or overnight — masala is potent, so it seasons fast.","Fry the slap chips until golden and soft-crisp, then toss them HOT with salt and a splash of white vinegar — proper Cape Town slap chips, and they have to go in hot.","Sear the marinated steak strips in a screaming-hot pan, fast, until just cooked and a little charred, then rest a minute.","Stir the mayo with a little peri-peri into a peri-peri mayo. Split the long roll (keep it hinged at the back) and spread the inside with the peri-peri mayo and the atchar.","Layer chips first — always chips first, it is the rule — then the masala steak, more chips, then lettuce, tomato and onion. Drizzle with extra peri-peri, press shut and cut into sharing portions."],tip:"Chips go in HOT and FIRST — that is Gatsby law. A soft roll (never crusty), masala steak, peri-peri mayo and atchar do the rest.",nutrition:{kcal:720,protein_g:34,carbs_g:74,fat_g:32},storage:"Eat fresh — a Gatsby waits for no one. Best within the hour."},
];

var BAKES_RECIPES = [
  // ── 🥞 QUICK BREADS (Fluffy Pancakes moved from Breakfast 16 Jun; id kept stable) ──
  {id:'bf-pancakes', cat:'quickbreads', name:'Fluffy Pancakes', emoji:'🥞', cuisine:'American', time:20, costPP:7,
    feel:'A lazy Sunday stack with syrup running down the sides.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'milk',pp:90,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'sugar',pp:8,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'butter',pp:8,u:'g'},{n:'maple syrup'}],
    method:['Whisk the flour, sugar and baking powder in a bowl.','Beat in the egg and milk until just combined — a few lumps are fine.','Cook spoonfuls in a buttered pan over medium heat until bubbles form, then flip and cook the other side.','Stack and serve with maple syrup.'],
    tip:'Avoid overmixing — a few lumps in the batter make fluffier pancakes.',
    nutrition:{kcal:340,protein_g:9,carbs_g:52,fat_g:11}, storage:'Keep 2 days; reheat in a toaster or dry pan.'},
  // ── 🫓 FLATBREADS ──
  {id:'bk-braai-flatbread', cat:'flatbreads', name:'Braai Flatbread', emoji:'🫓', cuisine:'South African', time:55, costPP:3,
    feel:'Charred at the edges, soft and steamy inside — torn straight off the grid while everyone hovers.',
    ingredients:[{n:'cake flour',pp:100,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'sugar',pp:3,u:'g'},{n:'salt',pp:2,u:'g'},{n:'lukewarm water',pp:62,u:'ml'},{n:'sunflower oil',pp:10,u:'ml'}],
    method:['Stir the flour, yeast, sugar and salt together in a bowl.','Make a well, pour in the lukewarm water and most of the oil, and mix to a soft, slightly sticky dough.','Knead on a floured surface for 6–8 minutes until smooth and springy, then cover and leave to prove in a warm spot for about 40 minutes, until doubled.','Knock back, divide into one ball per person, and press or roll each into a flat round about 1cm thick.','Cook over medium braai coals (or in a dry, hot pan) for 2–3 minutes a side, until puffed with charred spots.','Brush with the last of the oil or a little butter and serve warm, torn straight off the grid.'],
    tip:'No braai going? A hot, dry cast-iron pan gives the same charred, puffy result on the stove.',
    nutrition:{kcal:250,protein_g:7,carbs_g:48,fat_g:4}, storage:'Best fresh and warm; reheat next-day flatbreads on the braai or in a pan for a minute a side.'},

  // ── 🥖 BREADS (added Jun 2026) ──
  {id:'bk-pita', cat:'flatbreads', name:'Pita Bread', emoji:'🫓', cuisine:'Middle Eastern', time:120, costPP:2,
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
  {id:'bk-baguette', cat:'breads', name:'French Baguette', emoji:'🥖', cuisine:'French', time:300, costPP:1,
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
  {id:'bk-godamba-roti', cat:'flatbreads', name:'Godamba Roti', emoji:'🫓', cuisine:'Sri Lankan', time:180, costPP:1,
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
  {id:'bk-drop-dumplings', cat:'quickbreads', name:'Fluffy Drop Dumplings', emoji:'🥟', cuisine:'Global', time:25, costPP:4,
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
  {id:'bk-banana-bread', cat:'quickbreads', name:'Banana Bread', emoji:'🍌', cuisine:'Global', time:70, costPP:7,
    feel:'The smell that fills the whole house \u2014 sweet, dark, banana-rich, best warm with a slick of butter.',
    ingredients:[{n:'bananas',pp:0.58,u:'each'},{n:'butter',pp:12.5,u:'g'},{n:'sugar',pp:25,u:'g'},{n:'eggs',pp:0.17,u:'each'},{n:'vanilla extract',pp:0.8,u:'ml'},{n:'bicarbonate of soda',pp:0.8,u:'g'},{n:'salt',pp:0.5,u:'g'},{n:'cake flour',pp:32,u:'g'}],
    method:['Heat the oven to 175C. Grease and flour a standard loaf tin (about 23x13cm).','Mash the bananas with a fork until smooth but still a little chunky.','Stir the melted butter into the mashed banana, then mix in the sugar, egg and vanilla.','Sprinkle over the bicarb and salt and stir well. Add the flour and fold in just until no streaks remain \u2014 do not overmix.','Pour into the tin and bake 50 to 60 minutes, until a toothpick in the centre comes out clean or with a few moist crumbs.','Cool in the tin 10 minutes, then turn out onto a wire rack.'],
    tip:'The darker the bananas, the sweeter the loaf. Not ripe enough? Roast them in their skins at 150C for 15 minutes to soften fast. Fold in a handful of toasted walnuts or pecans before baking if you like.',
    nutrition:{kcal:280,protein_g:4,carbs_g:42,fat_g:11}, storage:'Wrapped tightly, stays moist 3 to 4 days. Freezes beautifully \u2014 slice first for grab-and-go.'},

  {id:'bk-sponge-cake', cat:'cakes', name:'Classic Sponge Cake', emoji:'🍰', cuisine:'Global', time:45, costPP:4,
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
  {id:'ln-greek-salad', cat:'salads', name:'Greek Salad', emoji:'🥗', cuisine:'Greek', time:15, costPP:33, diet:'veg', // ⚑DUP
    feel:'Sunshine in a bowl — crunch, salt and a slick of good oil.',
    ingredients:[{n:'cucumber',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'green pepper',pp:50,u:'g'},{n:'feta',pp:60,u:'g'},{n:'kalamata olives',pp:25,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'dried oregano'}],
    method:['Chop the cucumber, tomatoes and pepper into chunky pieces and slice the onion thinly.','Pile into a bowl and scatter over the olives.','Lay a slab of feta on top, drizzle with olive oil and a squeeze of lemon, and dust with oregano.','Toss gently at the table so the feta stays in pieces.'],
    tip:'Salt the tomatoes a few minutes ahead — the juice that draws out becomes half your dressing.',
    nutrition:{kcal:320,protein_g:10,carbs_g:16,fat_g:25}, storage:'Best fresh; undressed it keeps a day in the fridge.'},

  {id:'ln-pasta-salad', cat:'salads', name:'Pasta Salad', emoji:'🍝', cuisine:'Italian-ish', time:20, costPP:30, diet:'veg', // ⚑DUP
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

  {id:'ln-caprese', cat:'salads', name:'Caprese Salad', emoji:'🍅', cuisine:'Italian', time:10, costPP:36, diet:'veg',
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

  {id:'ln-panzanella', cat:'salads', name:'Panzanella', emoji:'🍞', cuisine:'Tuscan', time:20, costPP:25, diet:'veg',
    feel:'The Italian answer to leftover bread — juicy, garlicky, generous.',
    ingredients:[{n:'ciabatta',pp:80,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'cucumber',pp:80,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'basil',pp:4,u:'g'},{n:'olive oil',pp:18,u:'ml'},{n:'red wine vinegar',pp:8,u:'ml'}],
    method:['Tear the bread into chunks and toast or pan-crisp until golden.','Chop the tomatoes over a bowl to catch every drop of juice, then add cucumber and thin onion.','Toss the bread through with olive oil and vinegar and let it sit 10 minutes to soak.','Fold in torn basil and season just before serving.'],
    tip:'Slightly stale bread is the whole point — it drinks the dressing without going to mush.',
    nutrition:{kcal:360,protein_g:8,carbs_g:44,fat_g:17}, storage:'Eat within a few hours; the bread softens over time.'},

  {id:'ln-beet-goat', cat:'salads', name:'Beet & Goat Cheese Salad', emoji:'🫐', cuisine:'Bistro', time:20, costPP:68, diet:'veg',
    feel:'Earthy, sweet beets against tangy cheese — a proper grown-up lunch.',
    ingredients:[{n:'beetroot',pp:140,u:'g'},{n:'chevin goat cheese',pp:50,u:'g'},{n:'rocket',pp:40,u:'g'},{n:'walnuts',pp:20,u:'g'},{n:'honey',pp:8,u:'ml'},{n:'olive oil',pp:12,u:'ml'}],
    method:['Roast or boil the beetroot until tender, then peel and cut into wedges.','Toast the walnuts in a dry pan until fragrant.','Pile rocket on a plate, add the warm beets and crumble over the goat cheese.','Drizzle with honey and oil whisked with a little lemon, and scatter the nuts.'],
    tip:'Use ready-cooked vacuum-packed beetroot to turn this into a 10-minute lunch.',
    nutrition:{kcal:340,protein_g:11,carbs_g:22,fat_g:24}, storage:'Components keep 3 days; assemble fresh.'},

  {id:'ln-halloumi-grain', cat:'salads', name:'Warm Halloumi & Grain Salad', emoji:'🧀', cuisine:'Mediterranean', time:25, costPP:53, diet:'veg',
    feel:'Squeaky golden halloumi over nutty grains — filling without being heavy.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'pearl barley',pp:70,u:'g'},{n:'rocket',pp:30,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'olive oil',pp:12,u:'ml'},{n:'mint',pp:3,u:'g'}],
    method:['Simmer the barley until tender, about 25 minutes, then drain and dress while warm with oil and lemon.','Slice the halloumi and fry in a dry hot pan until golden on both sides.','Fold the tomatoes and rocket through the warm grains.','Top with the halloumi and a scatter of torn mint.'],
    tip:'Swap barley for couscous if you want it on the table in 10 minutes.',
    nutrition:{kcal:430,protein_g:18,carbs_g:42,fat_g:22}, storage:'Grain base keeps 3 days; fry halloumi to order.'},

  {id:'ln-halloumi-peach', cat:'salads', name:'Grilled Halloumi & Peach Salad', emoji:'🍑', cuisine:'Summery', time:15, costPP:49, diet:'veg',
    feel:'Smoky, sweet and salty all at once — the salad that tastes like a braai afternoon.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'peaches',pp:90,u:'g'},{n:'rocket',pp:40,u:'g'},{n:'honey',pp:6,u:'ml'},{n:'olive oil',pp:10,u:'ml'},{n:'mint',pp:3,u:'g'}],
    method:['Cut the peaches into wedges and the halloumi into thick slices.','Grill or pan-char both until marked and golden.','Lay over rocket and drizzle with honey, oil and lemon.','Finish with torn mint and a grind of black pepper.'],
    tip:'Out of season? Tinned peaches, patted dry and charred hard, work beautifully.',
    nutrition:{kcal:390,protein_g:15,carbs_g:24,fat_g:25}, storage:'Best fresh and warm.'},

  {id:'ln-asian-chopped', cat:'salads', name:'Asian Chopped Salad', emoji:'🥬', cuisine:'East Asian', time:15, costPP:28, diet:'vegan',
    feel:'Crunch on crunch with a sesame-ginger hit that wakes you up.',
    ingredients:[{n:'cabbage',pp:100,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'peanuts',pp:20,u:'g'},{n:'soy sauce',pp:12,u:'ml'},{n:'sesame oil',pp:8,u:'ml'},{n:'ginger',pp:5,u:'g'}],
    method:['Shred the cabbage and carrots finely and slice the pepper into thin strips.','Whisk soy, sesame oil, grated ginger, lime and a little sugar into a dressing.','Toss the veg through the dressing until well coated.','Top with crushed peanuts and sliced spring onion.'],
    tip:'Add a handful of fresh coriander and a pinch of chilli flakes for real lift.',
    nutrition:{kcal:260,protein_g:8,carbs_g:22,fat_g:16}, storage:'Undressed slaw keeps 2 days; dress to order.'},

  {id:'ln-sweetpotato-kale', cat:'salads', name:'Roasted Sweet Potato & Kale Salad', emoji:'🍠', cuisine:'Modern', time:35, costPP:27, diet:'vegan',
    feel:'Warm, hearty and good for you in a way you can actually taste.',
    ingredients:[{n:'sweet potato',pp:180,u:'g'},{n:'kale',pp:60,u:'g'},{n:'chickpeas',pp:80,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'tahini',pp:15,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Cube the sweet potato, toss in oil and roast at 200°C for 25 minutes until soft and caramelised.','Add the drained chickpeas for the last 10 minutes to crisp.','Massage the torn kale with a little oil and salt until it softens.','Pile everything together and drizzle with tahini loosened with lemon and water.'],
    tip:'A pinch of cumin and smoked paprika on the sweet potato makes it sing.',
    nutrition:{kcal:400,protein_g:12,carbs_g:54,fat_g:16}, storage:'Keeps 3 days; dressing separate.'},

  {id:'ln-falafel-tahini', cat:'salads', name:'Falafel & Tahini Salad', emoji:'🧆', cuisine:'Middle Eastern', time:20, costPP:45, diet:'vegan', // ⚑DUP falafel master
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

  {id:'ln-cauli-chickpea', cat:'salads', name:'Roast Cauliflower, Chickpea & Tahini Salad', emoji:'🥦', cuisine:'Middle Eastern', time:35, costPP:37, diet:'vegan',
    feel:'Spiced, golden and hearty — a bowl that eats like a meal.',
    ingredients:[{n:'cauliflower',pp:180,u:'g'},{n:'chickpeas',pp:90,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lemon',pp:0.3,u:''},{n:'parsley',pp:5,u:'g'},{n:'cumin'}],
    method:['Break the cauliflower into florets, toss with chickpeas, oil and cumin, and roast at 200°C for 25 minutes until charred.','Whisk the tahini with lemon, garlic and water into a loose dressing.','Tumble the warm roast veg onto a plate.','Drizzle with tahini and scatter chopped parsley.'],
    tip:'A handful of pomegranate or raisins adds a sweet burst against the spice.',
    nutrition:{kcal:390,protein_g:14,carbs_g:38,fat_g:22}, storage:'Keeps 3 days; superb cold.'},

  {id:'ln-couscous-roastveg', cat:'salads', name:'Mediterranean Couscous & Roast Veg Salad', emoji:'🫑', cuisine:'Mediterranean', time:30, costPP:30, diet:'vegan',
    feel:'Fluffy couscous studded with sweet, sticky roasted vegetables.',
    ingredients:[{n:'couscous',pp:70,u:'g'},{n:'courgettes',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:40,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lemon',pp:0.3,u:''},{n:'mint',pp:4,u:'g'}],
    method:['Chop the veg into chunks, toss in oil and roast at 200°C for 20 minutes until caramelised.','Pour boiling stock over the couscous, cover for 5 minutes, then fluff with a fork.','Fold the warm veg through the couscous with lemon and olive oil.','Finish with chopped mint and season generously.'],
    tip:'Stir in a spoon of harissa or pesto for an instant flavour upgrade.',
    nutrition:{kcal:370,protein_g:9,carbs_g:56,fat_g:13}, storage:'Keeps 3 days; great packed for work.'},

  {id:'ln-chickpea-avo', cat:'salads', name:'Smoky Chickpea & Avocado Salad', emoji:'🥑', cuisine:'Modern', time:15, costPP:23, diet:'vegan',
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

  {id:'ln-chicken-mayo-salad', cat:'salads', name:'Chicken Mayo Salad', emoji:'🥗', cuisine:'Classic', time:20, costPP:25, diet:'meat',
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

  {id:'ln-tuna-salad', cat:'salads', name:'Tuna Salad', emoji:'🐟', cuisine:'Classic', time:10, costPP:21, diet:'meat',
    feel:'Pantry to plate in ten minutes — protein-packed and never boring.',
    ingredients:[{n:'tuna',pp:80,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'tomatoes',pp:70,u:'g'},{n:'red onion',pp:20,u:'g'},{n:'mayonnaise',pp:18,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Drain the tuna and flake it into a bowl.','Fold through mayo, lemon and finely diced onion.','Chop the salad veg and arrange on a plate.','Spoon the tuna over and season.'],
    tip:'Swap mayo for olive oil and a few capers for a lighter, Mediterranean version.',
    nutrition:{kcal:300,protein_g:26,carbs_g:10,fat_g:17}, storage:'Tuna mix keeps 2 days.'},

  {id:'ln-prawn-avo', cat:'salads', name:'Prawn & Avo Salad', emoji:'🦐', cuisine:'Coastal', time:15, costPP:44, diet:'meat',
    feel:'A little bit fancy — sweet prawns, buttery avo, a tangy pink dressing.',
    ingredients:[{n:'prawns',pp:90,u:'g'},{n:'avocado',pp:80,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'mayonnaise',pp:20,u:'g'},{n:'tomato sauce',pp:8,u:'g'},{n:'lemon',pp:0.3,u:''}],
    method:['Cook the prawns quickly in a hot pan with a little butter and garlic until pink, then cool.','Mix mayo with a little tomato sauce, lemon and a dash of Tabasco for a Marie Rose dressing.','Slice the avocado over a bed of leaves.','Pile the prawns on and spoon over the dressing.'],
    tip:'Frozen prawns work perfectly — defrost fully and pat very dry before cooking.',
    nutrition:{kcal:380,protein_g:22,carbs_g:9,fat_g:29}, storage:'Best fresh.'},

  {id:'ln-steak-blue', cat:'salads', name:'Steak & Blue Cheese Salad', emoji:'🥩', cuisine:'Steakhouse', time:20, costPP:71, diet:'meat',
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

  {id:'ln-thai-beef', cat:'salads', name:'Thai Beef Salad', emoji:'🌶️', cuisine:'Thai', time:20, costPP:38, diet:'meat',
    feel:'Hot, sour, salty, sweet — the salad that hits every note at once.',
    ingredients:[{n:'rump steak',pp:110,u:'g'},{n:'lettuce',pp:60,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'coriander',pp:5,u:'g'},{n:'fish sauce',pp:10,u:'ml'},{n:'lime',pp:0.5,u:''},{n:'chilli',pp:3,u:'g'}],
    method:['Sear the steak hard, rest and slice thinly against the grain.','Make a dressing of fish sauce, lime juice, a little sugar and chopped chilli.','Toss cucumber, onion, herbs and leaves with most of the dressing.','Lay the beef over and spoon the rest of the dressing on top.'],
    tip:'Mint and Thai basil alongside the coriander make it taste like the real thing.',
    nutrition:{kcal:340,protein_g:30,carbs_g:12,fat_g:18}, storage:'Best fresh.'},

  {id:'ln-periperi-chicken-salad', cat:'salads', name:'Peri-Peri Chicken Salad', emoji:'🔥', cuisine:'South African', time:25, costPP:22, diet:'meat',
    feel:'Smoky, spicy Portuguese-SA chicken over cooling greens.',
    ingredients:[{n:'chicken breasts',pp:120,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'lettuce',pp:80,u:'g'},{n:'tomatoes',pp:70,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red onion',pp:25,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Marinate the chicken in peri-peri sauce for at least 15 minutes.','Grill or pan-fry until charred and cooked through, then slice.','Build a salad of leaves, tomato, cucumber and onion.','Top with the hot chicken and an extra drizzle of peri-peri.'],
    tip:'Make your own peri-peri base with bird\'s-eye chilli, garlic, lemon and paprika.',
    nutrition:{kcal:380,protein_g:34,carbs_g:12,fat_g:20}, storage:'Chicken keeps 2 days; great cold.'},

  {id:'ln-nicoise', cat:'salads', name:'Tuna Niçoise', emoji:'🥚', cuisine:'French', time:25, costPP:32, diet:'meat',
    feel:'A composed, sunny plate from the south of France — proper lunch, no apologies.',
    ingredients:[{n:'tuna',pp:80,u:'g'},{n:'baby potatoes',pp:100,u:'g'},{n:'green beans',pp:60,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'black olives',pp:20,u:'g'},{n:'olive oil',pp:14,u:'ml'},{n:'lettuce',pp:40,u:'g'}],
    method:['Boil the potatoes until tender and the beans until just crisp, then cool.','Soft-boil the eggs for 7 minutes, peel and halve.','Arrange leaves, potatoes, beans, tomatoes and flaked tuna in sections on a plate.','Add the egg and olives and dress with oil, lemon and a little mustard.'],
    tip:'Keep everything in groups rather than tossed — niçoise is meant to be composed.',
    nutrition:{kcal:430,protein_g:28,carbs_g:28,fat_g:23}, storage:'Components keep 2 days; assemble fresh.'},


  // ───────────────── 🍲 SOUPS (21) ─────────────────
  {id:'ln-tomato-soup', cat:'soups', name:'Tomato Soup', emoji:'🍅', cuisine:'Classic', time:30, costPP:22, diet:'veg', // ⚑DUP
    feel:'A warm red bowl that tastes like being looked after.',
    ingredients:[{n:'tomatoes',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cream',pp:25,u:'ml'},{n:'tomato paste',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'basil',pp:3,u:'g'}],
    method:['Soften the chopped onion and garlic in olive oil over medium heat.','Stir in the tomato paste, then add the chopped tomatoes and stock and simmer 20 minutes.','Blend until smooth, then stir through the cream and torn basil.','Season well and serve with bread for dipping.'],
    tip:'A pinch of sugar balances the acidity of the tomatoes beautifully.',
    nutrition:{kcal:180,protein_g:4,carbs_g:18,fat_g:11}, storage:'Keeps 3 days; freezes well before the cream goes in.'},

  {id:'ln-chicken-soup', cat:'soups', name:'Chicken Soup', emoji:'🍗', cuisine:'Classic', time:45, costPP:49, diet:'meat', // ⚑DUP
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

  {id:'ln-lentil-soup', cat:'soups', name:'Lentil Soup', emoji:'🟤', cuisine:'Middle Eastern', time:40, costPP:13, diet:'vegan', // ⚑DUP
    feel:'Humble, hearty and quietly filling — a bowl with backbone.',
    ingredients:[{n:'lentils',pp:70,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:350,u:'ml'},{n:'cumin'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion, carrot and garlic in oil with a good pinch of cumin.','Add the rinsed lentils and stock and bring to a simmer.','Cook 25 to 30 minutes until the lentils are soft, then blend partly for a creamy-but-textured finish.','Season well and finish with a squeeze of lemon.'],
    tip:'Red lentils break down fastest and need no soaking — ideal for a quick soup.',
    nutrition:{kcal:230,protein_g:13,carbs_g:36,fat_g:5}, storage:'Keeps 4 days; thickens as it sits — loosen with water.'},

  {id:'ln-broccoli-cheese-soup', cat:'soups', name:'Broccoli & Cheese Soup', emoji:'🥦', cuisine:'Comfort', time:30, costPP:30, diet:'veg', // ⚑DUP
    feel:'Velvety, cheesy and green — comfort that almost feels virtuous.',
    ingredients:[{n:'broccoli',pp:150,u:'g'},{n:'potatoes',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'}],
    method:['Soften the onion, then add the potato, broccoli stalks and stock and simmer 15 minutes.','Add the broccoli florets and cook 5 minutes more until just tender.','Blend until smooth, then stir in the grated cheddar and cream off the heat.','Season and serve with extra cheese on top.'],
    tip:'Keep a few florets aside to drop in whole for texture.',
    nutrition:{kcal:280,protein_g:13,carbs_g:18,fat_g:18}, storage:'Keeps 3 days; reheat gently so the cheese stays smooth.'},

  {id:'ln-butternut-soup', cat:'soups', name:'Butternut Soup', emoji:'🎃', cuisine:'South African', time:40, costPP:12, diet:'veg',
    feel:'Sweet, silky and golden — winter in a bowl.',
    ingredients:[{n:'butternut',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'},{n:'nutmeg'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and garlic in oil.','Add the cubed butternut and stock and simmer 25 minutes until very soft.','Blend until silky smooth, then stir in the cream and a grating of nutmeg.','Season and serve with a swirl of cream and toasted seeds.'],
    tip:'Roasting the butternut first instead of boiling deepens the sweetness.',
    nutrition:{kcal:190,protein_g:4,carbs_g:28,fat_g:8}, storage:'Keeps 4 days; freezes beautifully.'},

  {id:'ln-pumpkin-soup', cat:'soups', name:'Pumpkin Soup', emoji:'🎃', cuisine:'Classic', time:40, costPP:16, diet:'veg',
    feel:'Mellow and creamy, the gentler cousin of butternut.',
    ingredients:[{n:'pumpkin',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:20,u:'ml'},{n:'ginger',pp:5,u:'g'}],
    method:['Soften the onion, garlic and a little grated ginger in oil.','Add the pumpkin and stock and simmer 25 minutes until tender.','Blend smooth and stir through the cream.','Season well and finish with black pepper.'],
    tip:'A pinch of cinnamon or curry powder takes pumpkin soup somewhere lovely.',
    nutrition:{kcal:170,protein_g:4,carbs_g:24,fat_g:8}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-minestrone', cat:'soups', name:'Minestrone', emoji:'🍅', cuisine:'Italian', time:40, costPP:22, diet:'veg',
    feel:'A bowl that eats like a meal — beans, pasta and a garden of veg.',
    ingredients:[{n:'tomatoes',pp:100,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'celery',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'butter beans',pp:60,u:'g'},{n:'pasta',pp:30,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'parmesan',pp:10,u:'g'}],
    method:['Soften the onion, carrot and celery in oil.','Add the tomatoes, beans and stock and simmer 15 minutes.','Stir in the small pasta and cook until just tender.','Season and serve with grated parmesan and a drizzle of oil.'],
    tip:'Add a spoon of pesto at the end for an instant flavour lift.',
    nutrition:{kcal:260,protein_g:11,carbs_g:40,fat_g:7}, storage:'Keeps 3 days; the pasta softens, so add fresh if reheating.'},

  {id:'ln-pea-ham-soup', cat:'soups', name:'Pea & Ham Soup', emoji:'🫛', cuisine:'British', time:60, costPP:24, diet:'meat',
    feel:'Thick, smoky and old-fashioned — a soup that sticks to your ribs.',
    ingredients:[{n:'split peas',pp:70,u:'g'},{n:'gammon',pp:70,u:'g'},{n:'onion',pp:40,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'vegetable stock',pp:350,u:'ml'}],
    method:['Soften the onion and carrot, then add the rinsed split peas and stock.','Add the gammon and simmer gently for 45 minutes until the peas collapse.','Lift out the gammon, shred it, and return it to the pot.','Season carefully — the gammon is already salty.'],
    tip:'A leftover ham bone simmered in the pot makes this soup extraordinary.',
    nutrition:{kcal:300,protein_g:22,carbs_g:36,fat_g:7}, storage:'Keeps 4 days; thickens a lot — loosen with stock.'},

  {id:'ln-french-onion', cat:'soups', name:'French Onion Soup', emoji:'🧅', cuisine:'French', time:60, costPP:57, diet:'veg',
    feel:'Deep, sweet caramelised onions under a raft of bubbling cheese.',
    ingredients:[{n:'onion',pp:200,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'baguette',pp:0.25,u:''},{n:'gruyere cheese',pp:40,u:'g'},{n:'butter',pp:10,u:'g'},{n:'garlic',pp:4,u:'g'}],
    method:['Cook the thinly sliced onions slowly in butter for 30 minutes until deep golden and sweet.','Add the stock and a little garlic and simmer 15 minutes.','Ladle into bowls, top with toasted baguette slices and grated gruyere.','Grill until the cheese is bubbling and golden.'],
    tip:'Patience with the onions is everything — let them go properly dark, not just soft.',
    nutrition:{kcal:320,protein_g:13,carbs_g:30,fat_g:17}, storage:'Soup base keeps 4 days; add bread and cheese to order.'},

  {id:'ln-mushroom-soup', cat:'soups', name:'Creamy Mushroom Soup', emoji:'🍄', cuisine:'Classic', time:35, costPP:27, diet:'veg',
    feel:'Earthy, silky and a little bit luxurious.',
    ingredients:[{n:'mushrooms',pp:180,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cream',pp:30,u:'ml'},{n:'butter',pp:10,u:'g'},{n:'thyme'}],
    method:['Fry the sliced mushrooms in butter over high heat until deeply golden — don\'t crowd the pan.','Add the onion, garlic and thyme and soften.','Pour in the stock, simmer 10 minutes, then blend (leave some chunks if you like).','Stir in the cream, season well and serve.'],
    tip:'Hold back a few fried mushrooms to spoon on top for texture.',
    nutrition:{kcal:240,protein_g:7,carbs_g:12,fat_g:18}, storage:'Keeps 3 days; reheat gently.'},

  {id:'ln-potato-leek-soup', cat:'soups', name:'Potato & Leek Soup', emoji:'🥔', cuisine:'French', time:40, costPP:20, diet:'veg',
    feel:'Soft, creamy and soothing — the definition of a quiet evening.',
    ingredients:[{n:'potatoes',pp:180,u:'g'},{n:'leek',pp:80,u:'g'},{n:'onion',pp:30,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'cream',pp:25,u:'ml'},{n:'butter',pp:10,u:'g'}],
    method:['Soften the sliced leek and onion gently in butter without colouring.','Add the cubed potato and stock and simmer 20 minutes until tender.','Blend until smooth and silky.','Stir in the cream, season generously and serve.'],
    tip:'Serve it chilled in summer and you have vichyssoise.',
    nutrition:{kcal:250,protein_g:5,carbs_g:34,fat_g:11}, storage:'Keeps 3 days; freezes before cream is added.'},

  {id:'ln-red-pepper-soup', cat:'soups', name:'Roasted Red Pepper Soup', emoji:'🫑', cuisine:'Mediterranean', time:45, costPP:28, diet:'vegan',
    feel:'Smoky, sweet and a gorgeous deep red.',
    ingredients:[{n:'red pepper',pp:180,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'olive oil',pp:10,u:'ml'},{n:'paprika'}],
    method:['Roast the peppers and tomatoes at 220°C until blistered and soft, then peel the peppers.','Soften the onion and garlic in oil with a little smoked paprika.','Add the roasted veg and stock and simmer 10 minutes.','Blend smooth, season and finish with a drizzle of oil.'],
    tip:'A jar of roasted peppers makes this a fast weeknight soup.',
    nutrition:{kcal:160,protein_g:3,carbs_g:18,fat_g:9}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-chicken-sweetcorn-soup', cat:'soups', name:'Chicken & Sweetcorn Soup', emoji:'🌽', cuisine:'Chinese', time:30, costPP:57, diet:'meat',
    feel:'Silky, comforting takeaway-style soup made better at home.',
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'sweetcorn',pp:80,u:'g'},{n:'chicken broth',pp:350,u:'ml'},{n:'large eggs',pp:0.5,u:'egg'},{n:'spring onion',pp:15,u:'g'},{n:'cornflour',pp:8,u:'g'},{n:'soy sauce',pp:10,u:'ml'}],
    method:['Simmer the shredded chicken in the broth with the sweetcorn for 10 minutes.','Thicken with cornflour slaked in a little water until silky.','Turn off the heat and slowly stream in the beaten egg, stirring, to make ribbons.','Finish with soy sauce and sliced spring onion.'],
    tip:'Creamed sweetcorn gives a richer, more authentic texture.',
    nutrition:{kcal:200,protein_g:18,carbs_g:18,fat_g:6}, storage:'Keeps 2 days; reheat gently.'},

  {id:'ln-tom-kha', cat:'soups', name:'Thai Coconut Soup (Tom Kha)', emoji:'🥥', cuisine:'Thai', time:30, costPP:34, diet:'vegan',
    feel:'Fragrant, creamy and sour-sweet — a hug with lemongrass.',
    ingredients:[{n:'coconut milk',pp:200,u:'ml'},{n:'mushrooms',pp:80,u:'g'},{n:'vegetable stock',pp:150,u:'ml'},{n:'lemongrass',pp:8,u:'g'},{n:'ginger',pp:8,u:'g'},{n:'lime',pp:0.5,u:''},{n:'soy sauce',pp:10,u:'ml'},{n:'chilli',pp:3,u:'g'}],
    method:['Simmer the stock with bruised lemongrass, sliced ginger and chilli for 5 minutes to infuse.','Add the coconut milk and mushrooms and simmer gently 8 minutes — don\'t boil hard.','Season with soy sauce and a good squeeze of lime.','Finish with fresh coriander and extra lime to taste.'],
    tip:'Balance is everything — keep tasting and adjust lime, soy and chilli.',
    nutrition:{kcal:260,protein_g:4,carbs_g:12,fat_g:23}, storage:'Best fresh; keeps 2 days.'},

  {id:'ln-curried-butternut-soup', cat:'soups', name:'Curried Butternut Soup', emoji:'🍛', cuisine:'Fusion', time:40, costPP:17, diet:'vegan',
    feel:'Golden butternut with a warm curry hum and creamy coconut.',
    ingredients:[{n:'butternut',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'coconut milk',pp:120,u:'ml'},{n:'vegetable stock',pp:200,u:'ml'},{n:'curry powder',pp:5,u:'g'},{n:'ginger',pp:5,u:'g'}],
    method:['Soften the onion, garlic and ginger in oil with the curry powder until fragrant.','Add the butternut and stock and simmer 25 minutes until soft.','Blend smooth, then stir in the coconut milk.','Season and finish with coriander and a squeeze of lime.'],
    tip:'Toast the curry powder in the oil first — it wakes up all the spices.',
    nutrition:{kcal:230,protein_g:4,carbs_g:30,fat_g:12}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-beef-barley-soup', cat:'soups', name:'Beef & Barley Soup', emoji:'🥩', cuisine:'Hearty', time:90, costPP:34, diet:'meat',
    feel:'Slow-cooked, deeply savoury and properly filling — a meal in a bowl.',
    ingredients:[{n:'beef stewing meat',pp:90,u:'g'},{n:'barley',pp:40,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'celery',pp:30,u:'g'},{n:'beef stock',pp:350,u:'ml'}],
    method:['Brown the diced beef well in a heavy pot, then set aside.','Soften the onion, carrot and celery in the same pot.','Return the beef, add the barley and stock, and simmer gently 1 to 1.5 hours until the beef is tender and the barley plump.','Season well and serve with crusty bread.'],
    tip:'The longer and slower it cooks, the better — this one rewards patience.',
    nutrition:{kcal:300,protein_g:22,carbs_g:30,fat_g:10}, storage:'Keeps 4 days; thickens as the barley swells.'},

  {id:'ln-chicken-noodle-soup', cat:'soups', name:'Chicken Noodle Soup', emoji:'🍜', cuisine:'Classic', time:35, costPP:48, diet:'meat',
    feel:'The bowl that quietly fixes a bad day.',
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'noodles',pp:50,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'celery',pp:30,u:'g'},{n:'onion',pp:30,u:'g'},{n:'chicken broth',pp:350,u:'ml'}],
    method:['Soften the onion, carrot and celery, then add the broth and bring to a simmer.','Add the chicken and poach gently 12 minutes, then lift out and shred.','Cook the noodles in the broth until tender.','Return the chicken, season well, and finish with parsley.'],
    tip:'Cook the noodles separately if you\'re making it ahead, so they don\'t go soggy.',
    nutrition:{kcal:240,protein_g:20,carbs_g:28,fat_g:5}, storage:'Keeps 2 days; noodles soften, so add fresh when reheating.'},

  {id:'ln-carrot-coriander-soup', cat:'soups', name:'Carrot & Coriander Soup', emoji:'🥕', cuisine:'British', time:35, costPP:15, diet:'vegan',
    feel:'Bright orange and fragrant — fresh and light but still comforting.',
    ingredients:[{n:'carrots',pp:200,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'vegetable stock',pp:300,u:'ml'},{n:'coriander',pp:5,u:'g'},{n:'cumin'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and garlic in oil with a pinch of ground coriander and cumin.','Add the sliced carrots and stock and simmer 25 minutes until soft.','Blend smooth, then stir through most of the chopped fresh coriander.','Season and serve topped with the rest of the coriander.'],
    tip:'Toasting whole coriander seeds and grinding them fresh makes a real difference.',
    nutrition:{kcal:150,protein_g:3,carbs_g:24,fat_g:5}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-black-bean-soup', cat:'soups', name:'Spicy Black Bean Soup', emoji:'🫘', cuisine:'Latin', time:35, costPP:21, diet:'vegan',
    feel:'Smoky, spicy and substantial — a bowl with real character.',
    ingredients:[{n:'black beans',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'tomatoes',pp:60,u:'g'},{n:'vegetable stock',pp:250,u:'ml'},{n:'cumin'},{n:'chilli',pp:3,u:'g'}],
    method:['Soften the onion, pepper and garlic in oil with cumin and chilli.','Add the black beans, tomatoes and stock and simmer 15 minutes.','Blend about half the soup to thicken it, leaving the rest chunky.','Season well and serve with lime, coriander and a dollop of yoghurt.'],
    tip:'A little smoked paprika or chipotle gives it a gorgeous smoky depth.',
    nutrition:{kcal:240,protein_g:13,carbs_g:38,fat_g:4}, storage:'Keeps 4 days; freezes well.'},

  {id:'ln-sweetpotato-peanut-soup', cat:'soups', name:'Sweet Potato & Peanut Soup', emoji:'🥜', cuisine:'West African', time:40, costPP:16, diet:'vegan',
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

  {id:'ln-pita-hummus-chicken', cat:'handhelds', name:'Pita, Hummus & Chicken', emoji:'🥙', cuisine:'Mediterranean', time:20, costPP:33, diet:'meat', // ⚑DUP
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

  {id:'ln-steak-roll', cat:'handhelds', name:'Steak Roll', emoji:'🥖', cuisine:'Steakhouse', time:25, costPP:56, diet:'meat',
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

  {id:'ln-banh-mi', cat:'handhelds', name:'Banh Mi', emoji:'🥖', cuisine:'Vietnamese', time:25, costPP:32, diet:'meat',
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
  {id:'ln-fried-rice', cat:'quick', name:'Fried Rice', emoji:'🍚', cuisine:'Chinese', time:20, costPP:23, diet:'veg', // ⚑DUP
    feel:'The best way to turn last night\'s rice into today\'s lunch.',
    ingredients:[{n:'rice',pp:80,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'frozen peas',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'soy sauce',pp:14,u:'ml'},{n:'sesame oil',pp:6,u:'ml'}],
    method:['Use cold, cooked rice — fresh rice goes mushy.','Scramble the egg in a hot oiled wok and set aside.','Stir-fry the peas, carrot and spring onion, add the rice and toss over high heat.','Return the egg, splash in soy and sesame oil, and toss to combine.'],
    tip:'Day-old rice is the secret — the drier grains fry up separate and golden.',
    nutrition:{kcal:340,protein_g:11,carbs_g:52,fat_g:10}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-shakshuka', cat:'quick', name:'Shakshuka', emoji:'🍅', cuisine:'North African', time:25, costPP:29, diet:'veg', // ⚑DUP
    feel:'Eggs poached in a bubbling, spiced tomato hug.',
    ingredients:[{n:'large eggs',pp:2,u:'egg'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:40,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'tomato paste',pp:15,u:'g'},{n:'feta',pp:25,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Soften the onion and pepper in oil, then stir in tomato paste, paprika and cumin.','Add the chopped tomatoes and simmer 10 minutes until thick.','Make wells and crack in the eggs; cover and cook until the whites set.','Crumble over feta and serve with bread.'],
    tip:'Keep the heat gentle once the eggs are in so the yolks stay soft.',
    nutrition:{kcal:320,protein_g:17,carbs_g:18,fat_g:20}, storage:'Sauce keeps 3 days; add fresh eggs to reheat.'},

  {id:'ln-buddha-bowl', cat:'quick', name:'Buddha Bowl', emoji:'🥗', cuisine:'Modern', time:25, costPP:21, diet:'vegan', // ⚑DUP
    feel:'A bright, balanced bowl that makes you feel good after.',
    ingredients:[{n:'rice',pp:70,u:'g'},{n:'chickpeas',pp:80,u:'g'},{n:'sweet potato',pp:100,u:'g'},{n:'avocado',pp:50,u:'g'},{n:'lettuce',pp:40,u:'g'},{n:'tahini',pp:18,u:'g'},{n:'lemon',pp:0.2,u:''}],
    method:['Roast the cubed sweet potato and chickpeas with oil and spices until golden.','Cook the rice (brown or white).','Arrange rice, roast veg, avocado and leaves in sections in a bowl.','Drizzle with tahini loosened with lemon and water.'],
    tip:'Build it in sections rather than mixing — it looks better and you can taste each part.',
    nutrition:{kcal:450,protein_g:13,carbs_g:60,fat_g:18}, storage:'Components keep 3 days; assemble to order.'},

  {id:'ln-mac-cheese', cat:'quick', name:'Mac & Cheese', emoji:'🧀', cuisine:'Comfort', time:30, costPP:21, diet:'veg',
    feel:'Molten, golden-topped comfort in its purest form.',
    ingredients:[{n:'macaroni',pp:90,u:'g'},{n:'cheddar',pp:60,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'cake flour',pp:15,u:'g'}],
    method:['Boil the macaroni until just tender and drain.','Make a roux with butter and flour, then whisk in the milk to a smooth sauce.','Melt in most of the cheese, season, and stir through the pasta.','Top with the rest of the cheese and grill until bubbling and golden.'],
    tip:'A little mustard or nutmeg in the sauce makes the cheese taste even cheesier.',
    nutrition:{kcal:520,protein_g:22,carbs_g:54,fat_g:24}, storage:'Keeps 3 days; reheat with a splash of milk.'},

  {id:'ln-spaghetti-napoli', cat:'quick', name:'Spaghetti Napoli', emoji:'🍝', cuisine:'Italian', time:25, costPP:28, diet:'veg',
    feel:'Simple, garlicky tomato pasta — Italy on a weeknight.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'onion',pp:40,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'basil',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Soften the onion and garlic in olive oil.','Add the chopped tomatoes and simmer 15 minutes until rich and glossy, then season well with salt and pepper.','Cook the spaghetti and toss through the sauce with torn basil.','Serve with grated parmesan and a drizzle of oil.'],
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

  {id:'ln-egg-fried-rice', cat:'quick', name:'Egg Fried Rice', emoji:'🍳', cuisine:'Chinese', time:15, costPP:25, diet:'veg',
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

  {id:'ln-baked-potato', cat:'quick', name:'Baked Potato & Toppings', emoji:'🥔', cuisine:'Classic', time:60, costPP:18, diet:'veg',
    feel:'A fluffy jacket potato is a blank canvas for whatever you fancy.',
    ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'butter',pp:15,u:'g'},{n:'baked beans',pp:80,u:'g'}],
    method:['Prick the potatoes and bake at 200°C for 50 to 60 minutes until the skin is crisp and the inside fluffy.','Split open and fluff the inside with a fork.','Add butter, then your toppings — cheese, beans, or whatever you like.','Season well and serve.'],
    tip:'Rub the skin with oil and salt before baking for the crispest jacket.',
    nutrition:{kcal:420,protein_g:15,carbs_g:58,fat_g:15}, storage:'Best fresh; bake extra to reheat.'},

  {id:'ln-savoury-pancakes', cat:'quick', name:'Savoury Pancakes', emoji:'🥞', cuisine:'Classic', time:25, costPP:22, diet:'veg',
    feel:'Thin, foldable pancakes wrapped around a savoury filling.',
    ingredients:[{n:'cake flour',pp:50,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'milk',pp:120,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'butter',pp:10,u:'g'}],
    method:['Whisk the flour, egg and milk into a smooth thin batter and rest 15 minutes.','Fry thin pancakes in a little butter until golden.','Fry the mushrooms and fold them with cheese into the warm pancakes.','Serve folded or rolled.'],
    tip:'Let the batter rest — it makes the pancakes tender rather than rubbery.',
    nutrition:{kcal:380,protein_g:16,carbs_g:38,fat_g:18}, storage:'Pancakes keep 2 days; reheat in a pan.'},

  {id:'ln-sweetpotato-feta', cat:'quick', name:'Sweet Potato & Feta Bowl', emoji:'🍠', cuisine:'Modern', time:35, costPP:39, diet:'veg',
    feel:'Sweet, salty and golden — a warm bowl that feels like a treat.',
    ingredients:[{n:'sweet potato',pp:200,u:'g'},{n:'feta',pp:40,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'rocket',pp:30,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'honey',pp:6,u:'ml'}],
    method:['Roast the cubed sweet potato and chickpeas with oil until soft and caramelised.','Pile onto a bed of rocket.','Crumble over the feta and drizzle with honey and a little oil.','Season with black pepper.'],
    tip:'A pinch of chilli flakes against the sweet potato and honey is lovely.',
    nutrition:{kcal:430,protein_g:13,carbs_g:54,fat_g:18}, storage:'Roast veg keeps 3 days.'},

  {id:'ln-chicken-rice-bowl', cat:'quick', name:'Chicken & Rice Bowl', emoji:'🍚', cuisine:'Modern', time:25, costPP:18, diet:'meat',
    feel:'A simple, satisfying bowl that hits the spot every time.',
    ingredients:[{n:'chicken breasts',pp:110,u:'g'},{n:'rice',pp:80,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'mayonnaise',pp:15,u:'g'},{n:'soy sauce',pp:10,u:'ml'}],
    method:['Season and pan-fry the chicken until golden, then slice.','Cook the rice.','Build the bowl with rice, chicken and fresh veg.','Drizzle with a quick sauce of mayo, soy and sriracha.'],
    tip:'Marinate the chicken in soy, garlic and honey for extra flavour.',
    nutrition:{kcal:480,protein_g:34,carbs_g:56,fat_g:12}, storage:'Components keep 3 days.'},

  {id:'ln-couscous-bowl', cat:'quick', name:'Couscous Bowl', emoji:'🥣', cuisine:'North African', time:20, costPP:26, diet:'vegan',
    feel:'Fluffy, herby and quick — ready almost as fast as the kettle boils.',
    ingredients:[{n:'couscous',pp:80,u:'g'},{n:'chickpeas',pp:70,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'parsley',pp:5,u:'g'},{n:'lemon',pp:0.3,u:''},{n:'olive oil',pp:12,u:'ml'}],
    method:['Pour boiling stock over the couscous, cover 5 minutes, then fluff with a fork.','Fold through the chickpeas and chopped veg.','Dress with lemon, olive oil and lots of parsley.','Season well.'],
    tip:'Stir a spoon of harissa through for warmth and depth.',
    nutrition:{kcal:400,protein_g:12,carbs_g:60,fat_g:13}, storage:'Keeps 3 days; great packed.'},

  {id:'ln-poke-bowl', cat:'quick', name:'Poke Bowl', emoji:'🐟', cuisine:'Hawaiian', time:20, costPP:30, diet:'meat',
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

  {id:'ln-nasi-goreng', cat:'quick', name:'Nasi Goreng', emoji:'🍚', cuisine:'Indonesian', time:25, costPP:26, diet:'meat',
    feel:'Sweet-savoury fried rice with a fried egg crowning the top.',
    ingredients:[{n:'rice',pp:90,u:'g'},{n:'chicken breasts',pp:80,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'soy sauce',pp:16,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'spring onion',pp:20,u:'g'},{n:'chilli',pp:3,u:'g'}],
    method:['Stir-fry the diced chicken with garlic and chilli until cooked.','Add cold cooked rice and toss over high heat.','Season with sweet soy (soy plus a little sugar) until sticky and dark.','Top each bowl with a fried egg.'],
    tip:'Kecap manis (sweet soy) is the authentic touch — or just add brown sugar to soy.',
    nutrition:{kcal:460,protein_g:26,carbs_g:58,fat_g:14}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-singapore-noodles', cat:'quick', name:'Singapore Noodles', emoji:'🍜', cuisine:'Chinese', time:25, costPP:41, diet:'meat',
    feel:'Light curried noodles tangled with prawns and crunchy veg.',
    ingredients:[{n:'rice noodles',pp:80,u:'g'},{n:'prawns',pp:70,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'red pepper',pp:40,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'soy sauce',pp:14,u:'ml'}],
    method:['Soak the rice noodles until soft, then drain.','Scramble the egg and set aside; stir-fry the prawns and veg.','Add the noodles and curry powder and toss over high heat.','Return the egg, splash in soy, and toss to combine.'],
    tip:'The curry powder is what makes them Singapore noodles — add it to the oil so it blooms.',
    nutrition:{kcal:420,protein_g:20,carbs_g:54,fat_g:12}, storage:'Best fresh; keeps 1 day.'},

  {id:'ln-gnocchi-tomato', cat:'quick', name:'Gnocchi & Tomato', emoji:'🥟', cuisine:'Italian', time:20, costPP:38, diet:'veg',
    feel:'Pillowy gnocchi in a rich tomato sauce — fast, cosy comfort.',
    ingredients:[{n:'gnocchi',pp:150,u:'g'},{n:'tomatoes',pp:120,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'onion',pp:30,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'basil',pp:4,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Simmer a quick tomato sauce with onion, garlic and basil, seasoned with salt and pepper.','Boil the gnocchi until they float, then drain.','Toss the gnocchi through the sauce.','Serve with parmesan and a drizzle of oil.'],
    tip:'Pan-fry the boiled gnocchi in a little butter first for crispy edges.',
    nutrition:{kcal:400,protein_g:11,carbs_g:64,fat_g:11}, storage:'Best fresh; sauce keeps 4 days.'},

  {id:'ln-halloumi-roastveg-bowl', cat:'quick', name:'Halloumi & Roast Veg Bowl', emoji:'🧀', cuisine:'Mediterranean', time:35, costPP:47, diet:'veg',
    feel:'Golden halloumi over warm, sticky roasted vegetables.',
    ingredients:[{n:'halloumi',pp:80,u:'g'},{n:'courgettes',pp:80,u:'g'},{n:'red pepper',pp:70,u:'g'},{n:'red onion',pp:40,u:'g'},{n:'couscous',pp:60,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'lemon',pp:0.3,u:''}],
    method:['Roast the chopped veg with oil at 200°C for 20 minutes until caramelised.','Make the couscous with boiling stock and fluff.','Fry the sliced halloumi until golden.','Build the bowl with couscous, roast veg and halloumi, and finish with lemon.'],
    tip:'Fry the halloumi last so it\'s hot and squeaky when it hits the bowl.',
    nutrition:{kcal:470,protein_g:18,carbs_g:46,fat_g:24}, storage:'Roast veg keeps 3 days; fry halloumi to order.'},

  {id:'ln-pap-sheba', cat:'quick', name:'Pap & Sheba', emoji:'🌽', cuisine:'South African', time:30, costPP:13, diet:'vegan',
    feel:'Soft, comforting pap under a rich, savoury tomato-onion relish.',
    ingredients:[{n:'maize meal',pp:80,u:'g'},{n:'tomatoes',pp:120,u:'g'},{n:'onion',pp:50,u:'g'},{n:'green pepper',pp:30,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cook the pap: rain maize meal into boiling salted water, then steam covered 20 minutes, stirring now and then.','For the sheba, fry the onion and pepper, then add tomatoes and tomato paste.','Simmer the relish until thick and rich, and season well.','Spoon the sheba over the pap.'],
    tip:'A pinch of curry powder or chakalaka spice lifts the sheba beautifully.',
    nutrition:{kcal:340,protein_g:7,carbs_g:62,fat_g:8}, storage:'Both keep 3 days; reheat with a splash of water.'},

  {id:'ln-curry-rice', cat:'quick', name:'Curry & Rice', emoji:'🍛', cuisine:'South African', time:40, costPP:21, diet:'meat',
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

  {id:'ln-biltong-salad', cat:'savbakes', name:'Biltong & Salad Plate', emoji:'🥩', cuisine:'South African', time:10, costPP:35, diet:'meat', // ⚑DUP
    feel:'A proper South African snack plate — savoury, fresh and moreish.',
    ingredients:[{n:'biltong',pp:50,u:'g'},{n:'lettuce',pp:50,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'cucumber',pp:50,u:'g'},{n:'feta',pp:30,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Arrange a bed of leaves, tomato and cucumber.','Scatter over sliced biltong and crumbled feta.','Drizzle with olive oil and a squeeze of lemon.','Season with black pepper.'],
    tip:'Add avocado and a handful of nuts to turn the plate into a full meal.',
    nutrition:{kcal:320,protein_g:24,carbs_g:8,fat_g:21}, storage:'Best fresh; biltong keeps for ages.'},

  {id:'ln-sausage-rolls', cat:'savbakes', name:'Sausage Rolls', emoji:'🌭', cuisine:'British', time:40, costPP:20, diet:'meat', // ⚑DUP
    feel:'Flaky, golden pastry around a savoury, herby sausage middle.',
    ingredients:[{n:'puff pastry',pp:80,u:'g'},{n:'sausage meat',pp:90,u:'g'},{n:'onion',pp:20,u:'g'},{n:'large eggs',pp:0.25,u:'egg'},{n:'mixed herbs'}],
    method:['Mix the sausage meat with grated onion, herbs and seasoning.','Roll into a log along a strip of pastry and seal the edge underneath.','Cut into pieces, brush with beaten egg, and score the tops.','Bake at 200°C for 25 minutes until puffed and deep golden.'],
    tip:'Chill the rolls for 10 minutes before baking so the pastry puffs higher.',
    nutrition:{kcal:380,protein_g:12,carbs_g:26,fat_g:26}, storage:'Freeze uncooked; bake from frozen.'},

  {id:'ln-hummus-veg-sticks', cat:'savbakes', name:'Hummus & Veg Sticks', emoji:'🥕', cuisine:'Mediterranean', time:10, costPP:29, diet:'vegan', // ⚑DUP
    feel:'Fresh, crunchy and the easiest healthy snack-lunch going.',
    ingredients:[{n:'hummus',pp:60,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'cucumber',pp:60,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'celery',pp:40,u:'g'}],
    method:['Spoon the hummus into a bowl and swirl with a little olive oil and paprika.','Cut the vegetables into sticks.','Arrange around the hummus for dipping.'],
    tip:'Add pita wedges or olives to make it a fuller mezze plate.',
    nutrition:{kcal:220,protein_g:8,carbs_g:24,fat_g:11}, storage:'Veg keeps 3 days in water in the fridge.'},

  {id:'ln-chicken-livers-periperi', cat:'savbakes', name:'Peri-Peri Chicken Livers', emoji:'🔥', cuisine:'South African', time:25, costPP:15, diet:'meat', // ⚑DUP
    feel:'Rich, spicy livers in a buttery peri-peri sauce — proper starter food.',
    ingredients:[{n:'chicken livers',pp:120,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'peri-peri sauce',pp:20,u:'g'},{n:'tomatoes',pp:50,u:'g'},{n:'butter',pp:12,u:'g'}],
    method:['Clean and trim the livers.','Fry the onion and garlic in butter, then add the livers and brown.','Stir in the peri-peri and tomato and simmer 8 minutes until just cooked through.','Serve hot with bread to mop up the sauce.'],
    tip:'Don\'t overcook the livers — they should be just pink and tender inside.',
    nutrition:{kcal:280,protein_g:24,carbs_g:8,fat_g:17}, storage:'Keeps 2 days; reheat gently.'},

  {id:'ln-mini-quiches', cat:'savbakes', name:'Mini Quiches', emoji:'🥧', cuisine:'French', time:40, costPP:22, diet:'veg',
    feel:'Buttery little tarts with a soft, savoury egg filling.',
    ingredients:[{n:'puff pastry',pp:60,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'cream',pp:30,u:'ml'},{n:'cheddar',pp:30,u:'g'},{n:'onion',pp:20,u:'g'},{n:'spinach',pp:30,u:'g'}],
    method:['Line a muffin tin with pastry rounds.','Whisk the eggs with cream, cheese and seasoning.','Add a little softened onion and spinach to each, then pour in the egg mix.','Bake at 180°C for 20 to 25 minutes until set and golden.'],
    tip:'Don\'t overfill — leave a few millimetres so they don\'t spill as they puff.',
    nutrition:{kcal:300,protein_g:11,carbs_g:20,fat_g:20}, storage:'Keep 3 days; great cold in lunchboxes.'},

  {id:'ln-savoury-muffins', cat:'savbakes', name:'Savoury Muffins', emoji:'🧁', cuisine:'Modern', time:35, costPP:13, diet:'veg',
    feel:'Cheesy, savoury muffins that work for breakfast, lunch or a snack.',
    ingredients:[{n:'cake flour',pp:60,u:'g'},{n:'large eggs',pp:0.5,u:'egg'},{n:'milk',pp:80,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'baking powder',pp:3,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Mix the dry ingredients in one bowl and the wet in another.','Fold together with the cheese and any extras (corn, herbs, spring onion) until just combined.','Spoon into muffin cases.','Bake at 190°C for 20 minutes until risen and golden.'],
    tip:'Don\'t overmix — a few lumps in the batter make for lighter muffins.',
    nutrition:{kcal:260,protein_g:9,carbs_g:30,fat_g:11}, storage:'Keep 3 days; freeze well.'},

  {id:'ln-cheese-crackers-board', cat:'savbakes', name:'Cheese & Crackers Board', emoji:'🧀', cuisine:'Classic', time:10, costPP:25, diet:'veg',
    feel:'A graze-able little board — no cooking, all pleasure.',
    ingredients:[{n:'cheddar',pp:50,u:'g'},{n:'crackers',pp:40,u:'g'},{n:'grapes',pp:60,u:'g'},{n:'chutney',pp:20,u:'g'},{n:'nuts',pp:20,u:'g'}],
    method:['Slice the cheese and arrange on a board with the crackers.','Add the grapes, a little pot of chutney and a handful of nuts.','Serve as a relaxed, graze-able lunch.'],
    tip:'Mix a hard and a soft cheese, and add fresh fruit, for variety and balance.',
    nutrition:{kcal:420,protein_g:15,carbs_g:32,fat_g:26}, storage:'Components keep well; assemble fresh.'},

  {id:'ln-chicken-goujons', cat:'savbakes', name:'Chicken Goujons', emoji:'🍗', cuisine:'Comfort', time:30, costPP:20, diet:'meat',
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
  {id:'ln-bacon-cheese-wedges', cat:'savbakes', diet:'meat', protein:'pork', name:'Bacon Cheese Potato Wedges', emoji:'🥔', cuisine:'American', time:60, costPP:26,
    feel:'Crisp wedges drowning in melty cheese and bacon — the plate every fork drifts toward.',
    ingredients:[{n:'potatoes',pp:200,u:'g'},{n:'bacon',pp:15,u:'g'},{n:'cheddar cheese',pp:30,u:'g'},{n:'mozzarella',pp:15,u:'g'},{n:'plain yoghurt',pp:40,u:'g'},{n:'ranch dressing',pp:20,u:'ml'},{n:'milk',pp:10,u:'ml'},{n:'spring onion',pp:10,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cut the potatoes into thick steak-fry wedges, dry well and toss with the olive oil.','Stir the yoghurt, ranch and milk together for the sauce and set aside.','Spread the wedges in a single layer on a lined tray, season, and bake at 200°C for about 40 minutes until tender and golden.','Spread half the sauce on an oven dish, lay the wedges on top and spoon over the rest, then scatter with the cheeses and bacon.','Return to the oven for 5–10 minutes until melted and bubbling, then finish with sliced spring onion.'],
    tip:'Dry the cut wedges well before oiling so they crisp instead of steam.',
    nutrition:{kcal:420,protein_g:16,carbs_g:38,fat_g:24}, storage:'Best fresh and hot.'},
];


var SIDES_BASICS_RECIPES = [
  {id:'sb-chips', cat:'potato', diet:'veg', protein:'veg', name:'Chips', emoji:'🍟', cuisine:'South African', time:35, costPP:7,
    feel:'The side that makes everything better — done your way, from shatter-crisp to proper slap chips.',
    ingredients:[{n:'potatoes',pp:300,u:'g'},{n:'sunflower oil',pp:40,u:'ml'},{n:'salt'}],
    method:['Cut the potatoes into thick chips, rinse off the surface starch and dry well.','Blanch in oil at 140°C about 6 min until soft but pale; lift out and rest.','Crank to 190°C and fry again until deep gold and crisp.','Drain and salt at once.'],
    tip:'Double-frying is the whole secret — a low blanch then a hot crisp. Wet potatoes never go crispy, so dry them properly.',
    nutrition:{kcal:350,protein_g:5,carbs_g:48,fat_g:15}, storage:'Best fresh; chips never reheat well.',
    versions:[
      {name:'Crispy',icon:'🍟',default:true,time:35,costPP:7,nutrition:{kcal:350,protein_g:5,carbs_g:48,fat_g:15},feel:'Shatter-crisp outside, fluffy inside — the proper double-fried chip.',ingredients:[{n:'potatoes',pp:300,u:'g'},{n:'sunflower oil',pp:40,u:'ml'},{n:'salt'}],method:['Cut into thick chips, rinse off starch and dry thoroughly.','Blanch in oil at 140°C for 6 min until soft but pale; rest.','Fry again at 190°C until deep gold and crisp.','Drain and salt at once.']},
      {name:'Slap chips',icon:'🥔',time:25,costPP:8,nutrition:{kcal:360,protein_g:5,carbs_g:48,fat_g:16},feel:'The takeaway classic — soft, golden, salty, made for a splash of brown vinegar.',ingredients:[{n:'potatoes',pp:300,u:'g'},{n:'sunflower oil',pp:45,u:'ml'},{n:'brown vinegar',pp:8,u:'ml'},{n:'salt'}],method:['Cut into thick chips and dry.','Fry in one go at 170°C until soft and pale gold — do NOT crisp them.','Drain, salt generously and finish with a splash of brown vinegar.']},
      {name:'Oven-baked',icon:'🌿',time:40,costPP:9,nutrition:{kcal:220,protein_g:5,carbs_g:42,fat_g:5},feel:'All the comfort, a fraction of the oil — the everyday healthy chip.',ingredients:[{n:'potatoes',pp:300,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'paprika',pp:1,u:'g'},{n:'salt'}],method:['Cut into chips, toss in just the oil, paprika and salt.','Spread in a single layer on a tray — do not crowd them.','Bake at 220°C for 30–35 min, turning once, until golden.']},
      {name:'Air-fryer',icon:'💨',time:30,costPP:6,nutrition:{kcal:210,protein_g:5,carbs_g:42,fat_g:4},feel:'Barely any oil, properly crisp — the modern weeknight chip.',ingredients:[{n:'potatoes',pp:300,u:'g'},{n:'sunflower oil',pp:5,u:'ml'},{n:'salt'}],method:['Cut into chips, soak 10 min, then dry very well.','Toss in just a teaspoon of oil.','Air-fry at 200°C for 20–25 min, shaking the basket halfway.','Salt at once.']},
      {name:'Sweet potato',icon:'🍠',time:35,costPP:13,nutrition:{kcal:240,protein_g:4,carbs_g:46,fat_g:6},feel:'Sweet, savoury and a little smoky — the chip with a vegetable’s worth of goodness.',ingredients:[{n:'sweet potato',pp:300,u:'g'},{n:'cornflour',pp:8,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'salt'}],method:['Cut into thin fries and dry well.','Toss in the cornflour (it helps them crisp), then the oil and salt.','Bake at 220°C for 25–30 min — watch closely near the end, they catch fast.']}
    ]},

  {id:'sb-mash', cat:'potato', diet:'veg', protein:'veg', name:'Mash', emoji:'🥔', cuisine:'Global', time:25, costPP:10,
    feel:'Silky, buttery comfort — the side that turns a plate into a hug.',
    ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'butter',pp:25,u:'g'},{n:'full cream milk',pp:45,u:'ml'},{n:'salt'}],
    method:['Boil peeled, chopped potatoes in well-salted water until completely tender.','Drain and let the steam dry them off for a minute.','Mash with the butter and warmed milk until silky; season with salt and white pepper.'],
    tip:'Warm the milk before it goes in — cold milk makes gluey mash. And never use a blender; it turns potato to glue.',
    nutrition:{kcal:250,protein_g:5,carbs_g:34,fat_g:11}, storage:'Keeps 2 days; reheat with a splash of warm milk.',
    versions:[
      {name:'Creamy classic',icon:'🥔',default:true,time:25,costPP:10,nutrition:{kcal:250,protein_g:5,carbs_g:34,fat_g:11},feel:'The everyday silky mash — butter, warm milk and not a lump in sight.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'butter',pp:25,u:'g'},{n:'full cream milk',pp:45,u:'ml'},{n:'salt'}],method:['Boil peeled, chopped potatoes in salted water until completely tender.','Drain and steam-dry a minute.','Mash with butter and warmed milk until silky; season with salt and white pepper.']},
      {name:'Rich buttery',icon:'🧈',time:25,costPP:18,nutrition:{kcal:340,protein_g:5,carbs_g:33,fat_g:22},feel:'The restaurant mash — more butter than you think is sensible, and that’s the point.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'butter',pp:45,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'salt'}],method:['Boil and steam-dry the potatoes.','Mash with the butter, then beat in warm cream a little at a time.','Season well — a glossy, loose, luxurious mash.']},
      {name:'Sweet potato',icon:'🍠',time:30,costPP:12,nutrition:{kcal:240,protein_g:4,carbs_g:42,fat_g:8},feel:'Sweet, warm-spiced and golden — the mash that doubles as comfort food.',ingredients:[{n:'sweet potato',pp:250,u:'g'},{n:'butter',pp:25,u:'g'},{n:'ground cinnamon',pp:1,u:'g'},{n:'salt'}],method:['Boil or roast the sweet potato until soft.','Mash with butter, a pinch of cinnamon and salt.','Loosen with a little warm milk if needed.']},
      {name:'Mixed veg',icon:'🥦',time:30,costPP:11,nutrition:{kcal:230,protein_g:6,carbs_g:32,fat_g:9},feel:'Potato, carrot and greens mashed together — sneaky veg the whole table eats.',ingredients:[{n:'potatoes',pp:170,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'frozen peas',pp:40,u:'g'},{n:'butter',pp:20,u:'g'},{n:'full cream milk',pp:35,u:'ml'},{n:'salt'}],method:['Boil the potatoes and carrots together until tender; add the peas for the last 3 min.','Drain and steam-dry.','Mash with butter and warm milk; season well.']},
      {name:'Garlic',icon:'🧄',time:35,costPP:14,nutrition:{kcal:260,protein_g:5,carbs_g:34,fat_g:12},feel:'Mellow roasted garlic folded through silky mash — quietly irresistible.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'butter',pp:25,u:'g'},{n:'full cream milk',pp:45,u:'ml'},{n:'fresh parsley',pp:3,u:'g'},{n:'salt'}],method:['Roast the whole garlic until soft and sweet, then squeeze out the cloves.','Boil and steam-dry the potatoes.','Mash with the roasted garlic, butter and warm milk; fold in chopped parsley and season.']},{name:'Roasted Garlic & Cheddar',icon:'\ud83e\uddc0',time:55,costPP:18,nutrition:{kcal:320,protein_g:8,carbs_g:34,fat_g:17},feel:'Whole roasted garlic and sharp white cheddar mashed through cream-rich potato - the showpiece mash.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'garlic',pp:12,u:'g'},{n:'butter',pp:30,u:'g'},{n:'fresh cream',pp:30,u:'ml'},{n:'white cheddar',pp:40,u:'g'},{n:'olive oil',pp:3,u:'ml'},{n:'salt'}],method:['Slice the top off a whole head of garlic, drizzle with oil, wrap in foil and roast at 200C for 40 minutes until soft and sweet.','Boil the cubed potatoes in well-salted water until tender, then drain and steam-dry.','Mash with the butter and warm cream, squeeze in the roasted garlic and fold through the grated cheddar until melted and silky; season well with salt and pepper.']}
    ]},
  {id:'sb-potato-gnocchi', cat:'staples', goesWith:['Sage brown butter','Napoletana tomato sauce','Gorgonzola cream','Pesto','Grated parmesan'], diet:'veg', protein:'veg', name:'Potato Gnocchi', emoji:'🥔', cuisine:'Italian', time:50, costPP:6,
    feel:'Soft little potato pillows you rolled with your own hands — the kind of thing that feels impossible until the first batch proves you wrong.',
    ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cake flour',pp:60,u:'g'},{n:'salt'}],
    method:['Boil the potatoes whole in their skins until a knife slides through easily, then peel while still warm.','Rice or mash them smoothly — no lumps — and spread out to cool and steam off for 5 minutes.','Tip the cooled potato onto a floured board, scatter over the flour and a good pinch of salt, and bring together gently into a soft dough. Stop the moment it comes together.','Roll into long ropes about as thick as your thumb, cut into 2 cm pillows, and press each one against the back of a fork for ridges.','Drop into well-salted simmering water; they are done about 30 seconds after they float to the top. Lift out and dress straight away.'],
    tip:'The single biggest secret is keeping the dough dry — boil the potatoes in their skins (not chopped in water), and add only as much flour as you need. Over-floured, over-worked gnocchi turn rubbery.',
    didYouKnow:'Gnocchi are older than the potato in them. The original Roman gnocchi were made from semolina or flour for centuries — potato gnocchi only appeared after the potato travelled from the Americas to Europe in the 1500s and 1600s. In Rome, Thursday is still traditionally "giovedì gnocchi" — gnocchi day.',
    nutrition:{kcal:400,protein_g:9,carbs_g:82,fat_g:1}, storage:'Best fresh. Freeze raw gnocchi on a floured tray until solid, then bag — cook from frozen straight into boiling water.',
    versions:[
      {name:'Classic (eggless)',icon:'🥔',default:true,time:50,costPP:6,nutrition:{kcal:400,protein_g:9,carbs_g:82,fat_g:1},feel:'The most traditional version — just potato, flour and salt. Lighter and more delicate, the way a Roman nonna would make them.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cake flour',pp:60,u:'g'},{n:'salt'}],method:['Boil the potatoes whole in their skins until tender, then peel while warm.','Rice or mash smoothly and let cool and dry for 5 minutes.','Add the flour and salt; bring together into a soft dough, working as little as possible.','Roll into thumb-thick ropes, cut into 2 cm pillows, ridge on a fork.','Boil in salted water; lift out 30 seconds after they float.']},
      {name:'Egg-enriched',icon:'🥚',time:50,costPP:7,nutrition:{kcal:420,protein_g:11,carbs_g:80,fat_g:4},feel:'A little egg makes the dough sturdier and more forgiving — the easiest version to roll if it is your first time.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cake flour',pp:60,u:'g'},{n:'large eggs',pp:0.25,u:'egg'},{n:'salt'}],method:['Boil, peel and rice the potatoes as for the classic.','Mix in the beaten egg, then the flour and salt, into a soft dough.','Roll, cut and ridge into pillows.','Boil in salted water until they float, then 30 seconds more.']},
      {name:'Ricotta gnudi',icon:'🧀',time:30,costPP:37,nutrition:{kcal:330,protein_g:16,carbs_g:30,fat_g:16},feel:'No potato at all — pillowy ricotta dumplings that come together in half the time. Soft as a cloud.',ingredients:[{n:'ricotta',pp:120,u:'g'},{n:'cake flour',pp:35,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'large eggs',pp:0.25,u:'egg'},{n:'salt'}],method:['Drain the ricotta well, then mix with the parmesan, egg and a pinch of salt.','Fold in just enough flour to make a soft, barely-holding dough.','With floured hands, roll into small balls or short logs.','Simmer gently in salted water for 2 to 3 minutes until they float and feel set.']},
      {name:'Baked-potato (fluffiest)',icon:'🔥',time:90,costPP:6,nutrition:{kcal:400,protein_g:9,carbs_g:82,fat_g:1},feel:'Baking instead of boiling drives off every drop of water — the driest potato, the fluffiest gnocchi, the least flour.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'cake flour',pp:50,u:'g'},{n:'salt'}],method:['Bake the whole potatoes at 200°C for about an hour until completely soft.','Scoop out the flesh while hot and rice it; let the steam escape.','Work in the flour and salt to a soft dough — you will need less than the boiled method.','Roll, cut, ridge and boil as usual.']}
    ]},
  {id:'sb-butternut-gnocchi', cat:'staples', goesWith:['Sage brown butter','Crispy sage leaves','Toasted pine nuts','Parmesan','Brown butter & amaretti'], diet:'veg', protein:'veg', name:'Butternut Gnocchi', emoji:'🎃', cuisine:'Italian', time:60, costPP:14,
    feel:'Sweet, golden, autumn-coloured pillows — gnocchi di zucca, the northern Italian cousin that tastes like comfort.',
    ingredients:[{n:'butternut',pp:250,u:'g'},{n:'cake flour',pp:75,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'nutmeg'},{n:'salt'}],
    method:['Roast the peeled, cubed butternut at 200°C until soft and a little caramelised — roasting (not boiling) keeps it dry.','Mash smoothly and let it cool and steam off; the drier the better.','Mix in the parmesan, a grating of nutmeg and salt, then work in the flour to a soft dough. Butternut is wetter than potato, so add flour gradually.','Roll into ropes, cut into pillows and ridge on a fork.','Boil in salted water and lift out shortly after they float.'],
    tip:'Butternut holds more water than potato, so roast it rather than boil it, and resist dumping in extra flour to "fix" a sticky dough — a light hand keeps them tender. Brown butter and sage is the classic partner.',
    didYouKnow:'Butternut gnocchi — gnocchi di zucca — comes from northern Italy around Mantua, where pumpkin and squash have been prized since the 1500s. The local trick is a whisper of crushed amaretti biscuits in the dough, which sounds strange but echoes the squash\'s natural sweetness. And botanically, butternut is a fruit, not a vegetable.',
    nutrition:{kcal:340,protein_g:9,carbs_g:68,fat_g:3}, storage:'Freeze raw on a floured tray, then bag; cook from frozen. Cooked gnocchi keep a day and pan-fry beautifully next day.',
    versions:[
      {name:'Classic butternut',icon:'🎃',default:true,time:60,costPP:14,nutrition:{kcal:340,protein_g:9,carbs_g:68,fat_g:3},feel:'Roasted butternut, parmesan and a little nutmeg — sweet, golden and gentle.',ingredients:[{n:'butternut',pp:250,u:'g'},{n:'cake flour',pp:75,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'nutmeg'},{n:'salt'}],method:['Roast the cubed butternut until soft and lightly caramelised.','Mash smoothly and cool to dry it out.','Mix in parmesan, nutmeg and salt, then work in the flour gradually to a soft dough.','Roll, cut, ridge and boil until they float.']},
      {name:'Sweet potato',icon:'🍠',time:60,costPP:18,nutrition:{kcal:360,protein_g:8,carbs_g:74,fat_g:2},feel:'Swap butternut for sweet potato — even sweeter and a deeper orange.',ingredients:[{n:'sweet potato',pp:250,u:'g'},{n:'cake flour',pp:75,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'nutmeg'},{n:'salt'}],method:['Roast or bake the sweet potato until soft.','Mash and dry off, then mix in parmesan, nutmeg and salt.','Work in the flour to a soft dough; roll, cut and ridge.','Boil in salted water until they float.']},
      {name:'Warm-spiced',icon:'✨',time:60,costPP:14,nutrition:{kcal:340,protein_g:9,carbs_g:68,fat_g:3},feel:'A pinch of cinnamon joins the nutmeg — leans into the squash\'s sweetness for a cosy, almost festive plate.',ingredients:[{n:'butternut',pp:250,u:'g'},{n:'cake flour',pp:75,u:'g'},{n:'parmesan',pp:12,u:'g'},{n:'nutmeg'},{n:'ground cinnamon',pp:1,u:'g'},{n:'salt'}],method:['Roast and mash the butternut, then cool to dry.','Mix in parmesan, nutmeg, cinnamon and salt.','Work in the flour to a soft dough; roll, cut and ridge.','Boil until they float; serve with brown butter and sage.']}
    ]},
  {id:'sb-fresh-pasta', cat:'staples', goesWith:['Napoletana tomato sauce','Sage brown butter','Pesto','Slow ragù','Grated parmesan'], diet:'veg', protein:'veg', name:'Fresh Egg Pasta', emoji:'🍝', cuisine:'Italian', time:60, costPP:6,
    feel:'Silky ribbons you rolled and cut yourself — the difference between fresh pasta and a packet is the kind of thing you only understand once you have tasted it.',
    ingredients:[{n:'cake flour',pp:100,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'salt'}],
    method:['Tip the flour onto a board, make a well in the middle and crack in the eggs with a pinch of salt.','Beat the eggs with a fork, slowly pulling in flour from the walls until it forms a shaggy dough.','Knead firmly for a full 8 to 10 minutes until smooth and elastic — it should spring back when poked. Wrap and rest 30 minutes.','Roll out thinly, by machine or rolling pin, dusting with flour so it never sticks. You should almost be able to see your hand through it.','Fold loosely and cut into ribbons, or shape as you like. Cook in well-salted boiling water for just 2 to 3 minutes.'],
    tip:'The golden ratio is one egg to 100 g of flour per person — easy to scale, and worth memorising. Rest the dough so the gluten relaxes, and never skip the long knead; that is what gives the bite.',
    didYouKnow:'Italy has two pasta traditions divided by geography. The wealthy egg-and-soft-wheat north makes fresh pasta all\'uovo — tagliatelle, lasagne, ravioli — while the hot, dry south, where hard durum wheat grows, makes eggless dried pasta from just semolina and water. Neither is "more authentic"; they are two different foods born of two different lands.',
    nutrition:{kcal:420,protein_g:16,carbs_g:74,fat_g:6}, storage:'Dry cut pasta on a floured tray for a day, or freeze in nests. Fresh dough keeps wrapped in the fridge for a day.',
    versions:[
      {name:'Classic egg',icon:'🥚',default:true,time:60,costPP:6,nutrition:{kcal:420,protein_g:16,carbs_g:74,fat_g:6},feel:'The northern Italian standard — one egg to 100 g flour. Rich, golden and tender.',ingredients:[{n:'cake flour',pp:100,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'salt'}],method:['Mound the flour, well in the centre, crack in the eggs and salt.','Beat with a fork, pulling in flour until shaggy.','Knead 8 to 10 minutes until smooth and elastic; rest 30 minutes wrapped.','Roll thin, cut into ribbons.','Boil in salted water 2 to 3 minutes.']},
      {name:'Semolina bite',icon:'🌾',time:60,costPP:7,nutrition:{kcal:420,protein_g:16,carbs_g:75,fat_g:6},feel:'Part of the flour swapped for fine semolina — a firmer, more toothsome ribbon that holds sauce better.',ingredients:[{n:'cake flour',pp:70,u:'g'},{n:'fine semolina',pp:30,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'salt'}],method:['Mix the flour and semolina, make a well, add eggs and salt.','Bring together and knead 10 minutes — the semolina dough is firmer.','Rest 30 minutes, then roll a little thicker than all-flour pasta.','Cut and boil 3 minutes.']},
      {name:'Eggless (semolina)',icon:'🌱',time:60,costPP:4,nutrition:{kcal:360,protein_g:11,carbs_g:74,fat_g:1},feel:'The southern Italian way — just semolina and warm water. Naturally vegan, chewy and golden.',ingredients:[{n:'fine semolina',pp:100,u:'g'},{n:'salt'}],method:['Mound the semolina with salt, make a well and add warm water a little at a time.','Bring together and knead 10 minutes until smooth; it will feel firm.','Rest 30 minutes covered.','Roll and shape — wonderful for orecchiette or cavatelli — and boil 4 to 5 minutes.']},
      {name:'Spinach (verde)',icon:'🟢',time:70,costPP:11,nutrition:{kcal:430,protein_g:18,carbs_g:75,fat_g:6},feel:'Cooked spinach kneaded in turns the dough a vivid green — pasta verde, the classic base for spinach-and-ricotta lasagne.',ingredients:[{n:'cake flour',pp:110,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'spinach',pp:50,u:'g'},{n:'salt'}],method:['Cook the spinach, squeeze it bone-dry and chop very finely (or purée).','Mound the flour, add eggs, spinach and salt; bring together — add a little extra flour as the spinach adds moisture.','Knead 10 minutes, rest 30 minutes.','Roll thin and cut; boil 2 to 3 minutes.']},
      {name:'Herb & pepper',icon:'🌿',time:60,costPP:8,nutrition:{kcal:420,protein_g:16,carbs_g:74,fat_g:6},feel:'Fresh herbs and cracked black pepper folded through — flecks of green and a gentle warmth in every ribbon.',ingredients:[{n:'cake flour',pp:100,u:'g'},{n:'large eggs',pp:1,u:'egg'},{n:'basil',pp:3,u:'g'},{n:'black pepper'},{n:'salt'}],method:['Finely chop the herbs.','Make the classic egg dough, working the herbs, pepper and salt in with the eggs.','Knead 8 to 10 minutes, rest 30 minutes.','Roll thin, cut and boil 2 to 3 minutes.']}
    ]},
  {id:'sb-pizza-dough', cat:'staples', goesWith:['Napoletana sauce','Mozzarella','Fresh basil','Your favourite toppings'], diet:'veg', protein:'veg', name:'Pizza Dough', emoji:'🍕', cuisine:'Italian', time:90, costPP:6,
    feel:'A proper homemade base for the price of nothing — bouncy, blistered and miles better than a bought one. Once you make your own, the shop bases feel like cardboard.',
    ingredients:[{n:'bread flour',pp:150,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'salt',pp:3,u:'g'}],
    method:['Mix the flour, yeast, sugar and salt in a bowl (keep the salt and yeast apart until the flour goes in — salt can knock the yeast back).','Add the olive oil and about 95 ml lukewarm water per base, and bring together into a shaggy dough.','Knead firmly for 8 to 10 minutes until smooth, springy and elastic — it should pass a "windowpane" test where a stretched piece goes thin without tearing.','Oil the bowl, cover, and leave to rise somewhere warm until doubled, about 1 to 1½ hours.','Knock back, divide into bases (about 250 g of dough each), and shape into tight balls. Rest 15 minutes, then stretch by hand — never roll with a pin, which knocks out the air that makes the crust puff.'],
    tip:'Bread flour gives the chew; if you can find Italian "00" flour, it makes the silkiest base of all. The single biggest upgrade is a long cold rise in the fridge (see the overnight version) — time does what kneading cannot.',
    didYouKnow:'True Neapolitan pizza is protected by law. To be called "Vera Pizza Napoletana" it may contain only flour, water, salt and yeast — not even oil — and must bake for 60 to 90 seconds in a wood-fired oven at around 430 to 480°C. The "00" on Italian flour refers to how finely it is milled, not its strength: 00 is the softest, most powdery grind.',
    nutrition:{kcal:360,protein_g:11,carbs_g:68,fat_g:5}, storage:'FREEZING — Raw dough balls freeze best: rub with extra oil, wrap tight, freeze up to 2 months; thaw in the fridge overnight then proof at room temp 2 hours before shaping. Or PAR-BAKE bases (stretch, bake naked 5–7 min at 220°C until set but pale), cool, wrap and freeze; top and finish from frozen. Freeze sauce SEPARATELY — sauce on raw dough goes soggy.',
    versions:[
      {name:'Classic (same-day)',icon:'🍕',default:true,time:90,costPP:6,nutrition:{kcal:360,protein_g:11,carbs_g:68,fat_g:5},feel:'Mixed, kneaded and risen in an afternoon — ready for supper.',ingredients:[{n:'bread flour',pp:150,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'salt',pp:3,u:'g'}],method:['Mix the flour, yeast, sugar and salt, keeping salt and yeast apart until combined with the flour.','Add the oil and ~95 ml lukewarm water per base; bring together.','Knead 8 to 10 minutes until smooth and elastic.','Rise covered somewhere warm until doubled, 1 to 1½ hours.','Divide into ~250 g balls, rest 15 minutes, then hand-stretch into bases.']},
      {name:'Overnight cold-ferment',icon:'❄️',time:90,costPP:6,nutrition:{kcal:360,protein_g:11,carbs_g:68,fat_g:5},feel:'The flavour version — a slow cold rise builds a deeper, almost sourdough-like taste and a crust that blisters beautifully.',ingredients:[{n:'bread flour',pp:150,u:'g'},{n:'instant yeast',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'salt',pp:3,u:'g'}],method:['Mix and knead as for the classic, using only half the yeast.','Lightly oil, cover tightly and refrigerate 24 to 72 hours — the longer, the tastier.','Take the dough out 2 hours before you bake to come to room temperature.','Divide into ~250 g balls, rest, then hand-stretch.','Bake as hot as you can — cold-fermented dough chars and puffs like a dream.']},
      {name:'Freezer dough (make-ahead)',icon:'🧊',time:90,costPP:7,nutrition:{kcal:370,protein_g:11,carbs_g:68,fat_g:6},feel:'Make a big batch when you have time, freeze the balls, and pizza night is never more than a thaw away.',ingredients:[{n:'bread flour',pp:150,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'salt',pp:3,u:'g'}],method:['Make the dough with a little extra olive oil — it keeps the dough from drying out in the freezer.','Let it complete its first rise until doubled (freezing after the rise locks in flavour and spring).','Divide into ~250 g balls, rub each with oil, and wrap tightly in cling film, then bag. Freeze up to 2 months.','To use: thaw a ball in the fridge overnight (or 6 hours), then leave at room temperature 2 to 4 hours until soft and puffy.','Hand-stretch and bake as usual. (For ready-to-grab bases instead, par-bake naked 5 to 7 minutes at 220°C until set but pale, cool, wrap and freeze.)']},
      {name:'No-knead',icon:'🥄',time:90,costPP:6,nutrition:{kcal:360,protein_g:11,carbs_g:68,fat_g:5},feel:'No kneading at all — a wet dough and a long rest do the work for you. Forgiving and hands-off.',ingredients:[{n:'bread flour',pp:150,u:'g'},{n:'instant yeast',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'salt',pp:3,u:'g'}],method:['Stir the flour, yeast and salt with ~105 ml water per base into a sticky, shaggy dough — no kneading.','Cover and leave at room temperature 2 to 3 hours, or in the fridge overnight, until bubbly and risen.','Tip onto a well-floured surface, fold over itself a few times, and divide into bases.','Stretch gently — the dough is soft, so coax rather than pull.','Bake as hot as possible.']},
      {name:'Wholewheat',icon:'🌾',time:90,costPP:6,nutrition:{kcal:350,protein_g:12,carbs_g:64,fat_g:6},feel:'Half wholewheat flour for a nuttier, heartier base with a little more bite.',ingredients:[{n:'bread flour',pp:75,u:'g'},{n:'wholewheat flour',pp:75,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'sugar',pp:2,u:'g'},{n:'salt',pp:3,u:'g'}],method:['Mix the two flours with the yeast, sugar and salt.','Add oil and a little more water than usual (~105 ml per base — wholewheat drinks more); bring together.','Knead 8 to 10 minutes until elastic.','Rise covered until doubled, about 1½ hours.','Divide, rest and hand-stretch; bake hot.']}
    ]},
  {id:'sb-napoletana-sauce', cat:'sauces', goesWith:['Pizza Dough','Mozzarella','Fresh basil','Pasta'], diet:'veg', protein:'veg', name:'Napoletana Pizza Sauce', emoji:'🍅', cuisine:'Italian', time:10, costPP:6,
    feel:'The real pizza sauce — bright, raw and barely touched, so the tomato tastes like tomato. Nothing like a cooked pasta sugo; this one finishes cooking on the pizza itself.',
    ingredients:[{n:'tomato passata',pp:70,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'garlic',pp:3,u:'g'},{n:'fresh basil',pp:2,u:'g'},{n:'salt'}],
    method:['Tip the passata (or hand-crushed tinned whole tomatoes) into a bowl.','Stir in a little olive oil, a grating of garlic, torn basil and a good pinch of salt.','That is it — do not cook it. Spread it thinly over your base and let it cook on the pizza.'],
    tip:'The classic Neapolitan sauce is uncooked — cooking it twice (in the bowl and on the pizza) makes it dull and jammy. A thin layer is plenty; too much sauce steams the base soggy.',
    didYouKnow:'On a true Neapolitan pizza the sauce is never cooked first. The pizzaiolo crushes raw San Marzano tomatoes by hand, seasons them with just salt, and spreads them on cold — the 60-second blast of a wood-fired oven is the only cooking the sauce ever gets. Pizza Margherita itself was built around these tomatoes in 1889.',
    nutrition:{kcal:45,protein_g:1,carbs_g:5,fat_g:3}, storage:'Keeps 4 days in the fridge and freezes beautifully — portion into tubs or an ice-cube tray so you can pull out exactly one pizza\'s worth.',
    versions:[
      {name:'Classic (no-cook)',icon:'🍅',default:true,time:10,costPP:6,nutrition:{kcal:45,protein_g:1,carbs_g:5,fat_g:3},feel:'Raw, bright and pure — the authentic pizza sauce.',ingredients:[{n:'tomato passata',pp:70,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'garlic',pp:3,u:'g'},{n:'fresh basil',pp:2,u:'g'},{n:'salt'}],method:['Mix the passata with olive oil, grated garlic, torn basil and salt.','Do not cook it — spread thinly on the base and let it cook on the pizza.']},
      {name:'Garlic & herb',icon:'🧄',time:10,costPP:6,nutrition:{kcal:48,protein_g:1,carbs_g:6,fat_g:3},feel:'A little more garlic and dried oregano stirred through — the South African pizzeria flavour everyone knows.',ingredients:[{n:'tomato passata',pp:70,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'salt'}],method:['Stir the passata with olive oil, plenty of grated garlic, dried oregano and salt.','Use straight away, uncooked, on the base.']},
      {name:'Rich cooked (sugo)',icon:'🔥',time:30,costPP:9,nutrition:{kcal:70,protein_g:2,carbs_g:8,fat_g:4},feel:'For those who like a sweeter, thicker, cooked sauce — gently simmered with onion and garlic until jammy.',ingredients:[{n:'tomato passata',pp:90,u:'g'},{n:'onion',pp:25,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'},{n:'tomato paste',pp:8,u:'g'},{n:'sugar'},{n:'salt'}],method:['Soften the finely chopped onion and garlic in olive oil without colouring.','Stir in the tomato paste, then the passata, a pinch of sugar and salt.','Simmer gently 20 minutes until thick and glossy; cool before spreading on the base.']},
      {name:'Arrabbiata (spicy)',icon:'🌶️',time:10,costPP:5,nutrition:{kcal:48,protein_g:1,carbs_g:6,fat_g:3},feel:'The same bright raw sauce with a kick of chilli — for a fiery base.',ingredients:[{n:'tomato passata',pp:70,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'garlic',pp:4,u:'g'},{n:'chilli flakes',pp:1,u:'g'},{n:'salt'}],method:['Mix the passata with olive oil, grated garlic, chilli flakes and salt.','Spread thinly, uncooked, on the base.']}
    ]},
  {
    "id": "sb-bechamel",
    "cat": "sauces",
    "diet": "veg",
    "protein": "veg",
    "name": "Béchamel (White Sauce)",
    "emoji": "🥛",
    "cuisine": "French",
    "time": 15,
    "costPP": 7,
    "feel": "The mother of all white sauces — butter, flour and milk cooked into something silky and pourable. Master this one and mac & cheese, lasagne and a dozen others are yours.",
    "goesWith": [
      "Lasagne",
      "Macaroni cheese",
      "Cauliflower cheese",
      "Fish pie",
      "Moussaka",
      "Croque monsieur"
    ],
    "didYouKnow": "Béchamel is one of the five French \"mother sauces\" codified by the chef Auguste Escoffier — the foundations hundreds of other sauces are built from. Add cheese and it becomes a Mornay. The ratio to remember is equal weights of butter and flour; the rest is milk.",
    "nutrition": {
      "kcal": 180,
      "protein_g": 6,
      "carbs_g": 14,
      "fat_g": 11
    },
    "storage": "Best made fresh, but keeps 3 days — press cling film onto the surface so a skin doesn’t form, and reheat gently, whisking. Freezing can turn it grainy; whisk hard when reheating to bring it back.",
    "freezes": false,
    "fridgeDays": 3,
    "versions": [
      {
        "name": "Classic",
        "icon": "🏆",
        "default": true,
        "time": 15,
        "costPP": 7,
        "nutrition": {
          "kcal": 180,
          "protein_g": 6,
          "carbs_g": 14,
          "fat_g": 11
        },
        "feel": "The mother of all white sauces — butter, flour and milk cooked into something silky and pourable. Master this one and mac & cheese, lasagne and a dozen others are yours.",
        "ingredients": [
          {
            "n": "milk",
            "pp": 250,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "nutmeg",
            "pp": 0.3,
            "u": "g"
          },
          {
            "n": "salt",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Melt the butter gently in a pot — don’t let it brown.",
          "Stir in the flour and cook, stirring, for 1–2 minutes until it smells biscuity. This paste is a roux, and cooking it now removes any raw-flour taste later.",
          "Take the pot OFF the heat and add the milk a good splash at a time, whisking hard after each addition so no lumps form — cold milk into a hot roux off the heat is the lump-free trick.",
          "Back on medium heat, keep whisking until it thickens to a smooth, pourable custard, 3–4 min. Season with salt and a little grated nutmeg."
        ],
        "didYouKnow": "Béchamel is one of the five French \"mother sauces\" codified by the chef Auguste Escoffier — the foundations hundreds of other sauces are built from. Add cheese and it becomes a Mornay. The ratio to remember is equal weights of butter and flour; the rest is milk."
      },
      {
        "name": "Thrifty",
        "icon": "💰",
        "time": 15,
        "costPP": 5,
        "nutrition": {
          "kcal": 165,
          "protein_g": 6,
          "carbs_g": 14,
          "fat_g": 9
        },
        "feel": "The same silky sauce made with margarine instead of butter — an old thrift-kitchen standby that costs less and works just as well in a bake.",
        "ingredients": [
          {
            "n": "milk",
            "pp": 250,
            "u": "ml"
          },
          {
            "n": "margarine",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "salt",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Melt the margarine — use a hard cooking/baking margarine at about 80% fat (such as Rama); low-fat tub spreads are mostly water and won’t thicken into a proper roux. Stir in the flour and cook 1–2 min to a roux.",
          "Off the heat, whisk in the milk a splash at a time until smooth, then return to the heat and whisk until thickened. Season with salt and nutmeg.",
          "For a savoury \"mock béchamel\" in meaty bakes like lasagne or cottage pie, swap the milk for well-diluted beef stock — a clever old trick that costs even less."
        ],
        "didYouKnow": "In leaner times cooks made a perfectly good white sauce with margarine, and even stock instead of milk — the science is identical: flour granules swell and thicken whatever liquid you whisk into the roux. The fat just carries flavour, so margarine does the job a fraction cheaper."
      },
      {
        "name": "Cheese (Mornay)",
        "icon": "🧀",
        "time": 18,
        "costPP": 10,
        "nutrition": {
          "kcal": 260,
          "protein_g": 13,
          "carbs_g": 14,
          "fat_g": 17
        },
        "feel": "Béchamel’s most famous child — stir grated cheese into the finished sauce and you have a Mornay, the glossy sauce behind mac & cheese, cauliflower cheese and croque monsieur.",
        "ingredients": [
          {
            "n": "milk",
            "pp": 250,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "flour",
            "pp": 25,
            "u": "g"
          },
          {
            "n": "cheddar",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "mustard powder",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "salt",
            "pp": 1,
            "u": "g"
          }
        ],
        "method": [
          "Make a classic béchamel: a roux of butter and flour, then whisk in the milk off the heat and thicken.",
          "Take the pot OFF the heat before adding the cheese — a boiling cheese sauce turns grainy and stringy.",
          "Stir in the grated cheddar and a pinch of mustard powder until glossy and smooth."
        ],
        "didYouKnow": "Adding cheese to a béchamel makes a Mornay, named after a French nobleman. The mustard isn’t for heat — a tiny pinch sharpens and amplifies the cheese, an old chef’s trick to make cheese taste cheesier."
      }
    ]
  },
  {
    "id": "sb-mince-sauce",
    "cat": "sauces",
    "diet": "meat",
    "protein": "beef",
    "name": "Classic French Mince Sauce",
    "emoji": "🥩",
    "cuisine": "French",
    "time": 90,
    "costPP": 24,
    "feel": "A proper mince sauce the old French way — built slowly on a mirepoix of onion, carrot and celery, deepened with a splash of red wine and a bouquet garni, then simmered gently until rich and glossy. Nothing like a packet mince.",
    "goesWith": [
      "Tagliatelle",
      "Spaghetti",
      "Lasagne",
      "Mashed potato",
      "Baked potato",
      "Soft polenta"
    ],
    "didYouKnow": "This is the mince sauce done the proper French way — slow-cooked on a mirepoix and a bouquet garni rather than a packet. It’s the classic method championed by old-school cookery writers like Robert Carrier, who taught a generation that a real ragù is simmered gently for an hour or more, never rushed. That long, low cook is what turns plain mince into something glossy and deep.",
    "nutrition": {
      "kcal": 280,
      "protein_g": 18,
      "carbs_g": 10,
      "fat_g": 16
    },
    "storage": "Keeps 4 days and only improves overnight. Freezes brilliantly for up to 3 months — make a double batch and freeze in portions; it’s the base for spaghetti bolognese, lasagne, cottage pie and more.",
    "freezes": true,
    "fridgeDays": 4,
    "versions": [
      {
        "name": "Classic French",
        "icon": "🏆",
        "default": true,
        "time": 90,
        "costPP": 24,
        "nutrition": {
          "kcal": 280,
          "protein_g": 18,
          "carbs_g": 10,
          "fat_g": 16
        },
        "feel": "A proper mince sauce the old French way — built slowly on a mirepoix of onion, carrot and celery, deepened with a splash of red wine and a bouquet garni, then simmered gently until rich and glossy. Nothing like a packet mince.",
        "ingredients": [
          {
            "n": "beef mince",
            "pp": 100,
            "u": "g"
          },
          {
            "n": "streaky bacon",
            "pp": 20,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "carrot",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "celery",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 120,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "red wine",
            "pp": 30,
            "u": "ml"
          },
          {
            "n": "beef stock",
            "pp": 80,
            "u": "ml"
          },
          {
            "n": "bay leaves",
            "pp": 0.5,
            "u": "g"
          },
          {
            "n": "fresh thyme",
            "pp": 2,
            "u": "g"
          },
          {
            "n": "fresh parsley",
            "pp": 3,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          },
          {
            "n": "butter",
            "pp": 8,
            "u": "g"
          }
        ],
        "method": [
          "Finely dice the onion, carrot and celery — this trio is the French flavour base called a mirepoix, and cooking it slowly is the whole secret. Sweat it gently in the oil and butter with the chopped bacon for 10–12 minutes until soft and sweet, not browned.",
          "Add the garlic for a minute, then turn the heat up and brown the mince hard, breaking it up well — the browned crust is where the deep, savoury flavour comes from.",
          "Stir in the tomato paste and cook 2 minutes, then pour in the red wine and let it bubble away to almost nothing, scraping up the sticky bits from the base.",
          "Add the tinned tomatoes, beef stock and a bouquet garni — a little bundle of bay, thyme and parsley tied with string so you can fish it out later.",
          "Turn the heat right down and simmer gently, half-covered, for at least an hour (longer is better), stirring now and then. It’s ready when it’s thick, glossy and deeply savoury. Lift out the bouquet garni before serving."
        ],
        "didYouKnow": "This is the mince sauce done the proper French way — slow-cooked on a mirepoix and a bouquet garni rather than a packet. It’s the classic method championed by old-school cookery writers like Robert Carrier, who taught a generation that a real ragù is simmered gently for an hour or more, never rushed. That long, low cook is what turns plain mince into something glossy and deep."
      },
      {
        "name": "Weeknight",
        "icon": "⚡",
        "time": 30,
        "costPP": 18,
        "nutrition": {
          "kcal": 300,
          "protein_g": 19,
          "carbs_g": 12,
          "fat_g": 18
        },
        "feel": "The same French bones — mirepoix, tomato, a gentle simmer — sped up for a school night, with dried herbs standing in for the bouquet garni.",
        "ingredients": [
          {
            "n": "beef mince",
            "pp": 110,
            "u": "g"
          },
          {
            "n": "onion",
            "pp": 50,
            "u": "g"
          },
          {
            "n": "carrot",
            "pp": 40,
            "u": "g"
          },
          {
            "n": "celery",
            "pp": 30,
            "u": "g"
          },
          {
            "n": "garlic",
            "pp": 6,
            "u": "g"
          },
          {
            "n": "tinned tomatoes",
            "pp": 130,
            "u": "g"
          },
          {
            "n": "tomato paste",
            "pp": 12,
            "u": "g"
          },
          {
            "n": "beef stock",
            "pp": 60,
            "u": "ml"
          },
          {
            "n": "dried Italian herbs",
            "pp": 1,
            "u": "g"
          },
          {
            "n": "olive oil",
            "pp": 8,
            "u": "ml"
          }
        ],
        "method": [
          "Soften the diced onion, carrot, celery and garlic in the oil for about 5 minutes.",
          "Brown the mince well, then stir in the tomato paste for a minute.",
          "Add the tinned tomatoes, beef stock and dried herbs, and simmer 20–25 minutes until thick, stirring now and then."
        ],
        "didYouKnow": "A bundle of fresh herbs (a bouquet garni) gives the roundest flavour, but a spoon of dried mixed herbs is the everyday shortcut — dried herbs are simply fresh ones with the water removed, so the flavour is concentrated and holds up well to a quick simmer."
      }
    ]
  },
];

function mealSectionHTML(sectionKey){
  const configs = {
    breakfast:  {title:"Breakfast",         emoji:"🍳", color:"#d0a020", bg:"#181008", border:"#3a2010", recipes:typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],  sub:"Morning meals · Start your day right", cats:[{id:"eggs",e:"🍳",l:"Eggs"},{id:"fryups",e:"🥓",l:"Fry-Ups"},{id:"toast",e:"🍞",l:"Toast"},{id:"pancakes",e:"🥞",l:"Pancakes & Waffles"},{id:"oats",e:"🥣",l:"Oats & Porridge"},{id:"baked",e:"🧁",l:"Baked"},{id:"smoothies",e:"🥤",l:"Smoothies & Bowls"}]},
    lightlunch: {title:"Light Lunch",       emoji:"🥗", color:"#30a070", bg:"#081810", border:"#1a4025", recipes:typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],sub:"Salads · Wraps · Soups · Quick meals", cats:[{id:'salads',e:'🥗',l:'Salads & Bowls'},{id:'handhelds',e:'🥪',l:'Sandwiches & Wraps'},{id:'soups',e:'🍲',l:'Soups'},{id:'savbakes',e:'🥧',l:'Savoury Bakes'},{id:'quick',e:'⚡',l:'Quick & Light'}]},
    supper:     {title:"Supper",            emoji:"🍽️", color:"#6080d0", bg:"#080f18", border:"#1a2840", recipes:typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],        sub:"Evening meals · Family dinners", cats:[{id:'plates',e:'🍳',l:'Homestyle Plates'},{id:'pastapizza',e:'🍝',l:'Pasta & Pizza'},{id:'stewscurries',e:'🍛',l:'Stews, Curries & One-Pots'},{id:'ovenbakes',e:'🥧',l:'Oven Bakes & Roasts'},{id:'friedgrilled',e:'🍔',l:'Fried & Grilled'}]},
    bakes:      {title:"Bakes & Cakes",     emoji:"🧁", color:"#d06080", bg:"#180810", border:"#401020", recipes:typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],          sub:"Cakes · Biscuits · Breads · Desserts", cats:[{id:'breads',e:'🍞',l:'Breads & Rolls'},{id:'flatbreads',e:'🫓',l:'Flatbreads'},{id:'quickbreads',e:'🧁',l:'Muffins & Quick Breads'},{id:'biscuits',e:'🍪',l:'Biscuits & Rusks'},{id:'cakes',e:'🎂',l:'Cakes & Cupcakes'},{id:'pastries',e:'🥐',l:'Pastries & Tarts'}]},
    sidesbasics:{title:"Sides & Basics",    emoji:"🍟", color:"#c08040", bg:"#180f08", border:"#3a2410", recipes:typeof SIDES_BASICS_RECIPES!=='undefined'?SIDES_BASICS_RECIPES:[], sub:"Chips · Mash · the building blocks", cats:[{id:'potato',e:'🥔',l:'Potato Sides'},{id:'rice',e:'🍚',l:'Rice & Grains'},{id:'staples',e:'🍝',l:'Staples & Doughs'},{id:'sauces',e:'🥫',l:'Basic Sauces'}]},
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
    return recipeDetailFromResult(activeRecipe, "closeMealRecipe()", S.searchServings||4, cfg.color, cfg.bg, cfg.border);
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
    {s:'sidesbasics',e:'🍟', t:'Sides & Basics',        sub:'Chips · Mash · the building blocks',    b:'#c08040', bg:'#180f08'},
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
  const qtyMatch = raw.match(/([\d.]+)\s*(g|kg|ml|L|l)(?![a-z])/i);
  const ingredient = raw.replace(/([\d.]+)\s*(g|kg|ml|L|l)(?![a-z])/gi,'').replace(/^\s*[\d.]+\s+/,'').trim();
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
  if(typeof applyRecipeVersion==='function') r = applyRecipeVersion(r);   // ⭐ versions: render the chosen version
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
    <div style="position:relative;">
      ${(typeof recipePhoto==='function')?recipePhoto(r.photoName||r.name, r.emoji, 200):''}
      <button onclick="${backAction}" style="position:absolute;top:10px;left:10px;z-index:3;background:rgba(8,4,2,0.65);border:1px solid ${border};border-radius:20px;color:${color};font-size:13px;padding:5px 12px;cursor:pointer;">← Back</button>
    </div>
    <div style="padding:0 16px 16px;max-width:600px;margin:0 auto;">
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;margin:6px 0 2px;line-height:1.25;">${r.emoji||'🍽️'} ${dietTag(r.diet)}${r.name}</h1>
      <div style="font-size:13px;color:${color};font-style:italic;margin-bottom:12px;">Full recipe and method</div>

      ${r.feel?`<div style="font-style:italic;color:${color};font-size:13px;text-align:center;line-height:1.5;margin-bottom:14px;">“${r.feel}”</div>`:''}

      ${typeof versionStripHTML==='function'?versionStripHTML(r,color):''}

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
            <span style="font-size:14px;color:#e0d4b8;flex:1;">${(typeof crossLinkFor==='function'&&typeof INGREDIENT_LINKS!=='undefined'&&crossLinkFor(INGREDIENT_LINKS,i.n))?`<span onclick="${crossLinkFor(INGREDIENT_LINKS,i.n)}" style="color:${color};font-weight:bold;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;">${i.n} ↗</span>`:i.n} — <span style="color:#908066;font-size:13px;">${ppStr}</span> · <strong style="color:#f5c842;">${totalStr} total</strong></span>
          </div>`;
        }).join('')}
        ${(r.ingredients||[]).some(i=>/rice|pap|mealie|samp|meat|mince|chicken|beef|lamb|pork|steak|wors|sausage|fish|snoek|bacon|biltong|chop|\brib/i.test(i.n))?`<div style="margin-top:8px;padding-top:6px;border-top:1px solid #1a1810;font-size:13px;color:#8e7c7c;font-style:italic;">📏 Raw/dry weights · Rice+pap grow 3x when cooked · Meat shrinks ~25%</div>`:''}
      </div>

      <!-- Method -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px;">
          <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;">Method</div>
          ${(r.method&&r.method.length)?`<button onclick="set({cookRecipe:{section:'meals',id:'${r.id}'},cookStep:0});window.scrollTo(0,0);" style="background:${color};border:none;border-radius:8px;color:#fff;font-size:13px;font-weight:bold;padding:8px 14px;cursor:pointer;">👨‍🍳 Start Cooking →</button>`:''}
        </div>
        ${(r.method||[]).map((step,si)=>{const _sec=(typeof parseStepTime==='function')?parseStepTime(step):0;const _tmr=_sec?`<div style="margin-top:7px;"><button onclick="startTimer(${_sec},'Step ${si+1}')" style="display:inline-block;background:#0a0808;border:1px solid ${color};border-radius:6px;color:#f5c842;font-size:13px;font-weight:bold;padding:4px 11px;cursor:pointer;">⏱️ ${(typeof fmtTimerLabel==='function')?fmtTimerLabel(_sec):Math.round(_sec/60)+' min'}</button></div>`:'';return `<div style="display:flex;gap:12px;margin-bottom:14px;"><div style="width:24px;height:24px;border-radius:50%;background:#0a0808;border:1px solid ${color};color:${color};font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${si+1}</div><div style="flex:1;"><p style="margin:2px 0 0;font-size:14px;color:#e0d4b8;line-height:1.7;">${step}</p>${_tmr}</div></div>`;}).join('')}
      </div>

      <!-- Goes Well With -->
      ${(r.goesWith&&r.goesWith.length)?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:8px;">❤ Goes Well With</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${r.goesWith.map(g=>{const _lk=(typeof crossLinkFor==='function'&&typeof GOESWITH_LINKS!=='undefined')?crossLinkFor(GOESWITH_LINKS,g):null;return _lk?`<span onclick="${_lk}" style="padding:6px 13px;border-radius:16px;border:1px solid ${color};color:${color};font-size:13px;font-weight:bold;cursor:pointer;">${g} ›</span>`:`<span style="padding:6px 13px;border-radius:16px;border:1px solid ${border};color:#e0d4b8;font-size:13px;">${g}</span>`;}).join('')}</div>
      </div>`:''}

      <!-- Tip -->
      ${r.tip?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:6px;">💡 Tip</div>
        <p style="font-size:13px;color:#e0d4b8;line-height:1.6;margin:0;">${r.tip}</p>
      </div>`:''}

      <!-- Did You Know — the fourth voice (TINZA_DIDYOUKNOW_STANDARD) -->
      ${r.didYouKnow?`<div style="background:#100b06;border:1px solid ${border};border-left:3px solid ${color};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:6px;">💡 Did You Know</div>
        <p style="font-size:13px;color:#e0d4b8;line-height:1.6;margin:0;">${r.didYouKnow}</p>
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
    sidesbasics: typeof SIDES_BASICS_RECIPES!=='undefined'?SIDES_BASICS_RECIPES:[],
  };
  const arr = sectionRecipes[sec]||[];
  const r = arr.find(x=>x.id===id);
  if(r){ var _y=window.scrollY||0;
    // persist the list scroll onto the history entry we're leaving, so Back returns to the exact spot (mirrors openRecipe)
    try { var _st=history.state; if(_st && _st.tinza){ _st._scroll=_y; history.replaceState(_st,''); } } catch(_e){}
    setQuiet({mealActiveRecipe: Object.assign({},r,{_section:sec}), _mealListScroll:_y}); window.scrollTo(0,0); requestAnimationFrame(function(){ window.scrollTo(0,0); }); }
}

// Close a meal recipe by CONSUMING the history entry that openMealRecipe pushed
// (mirrors closeRecipe) — a setQuiet close would push a fresh forward entry, so a
// hardware/swipe back would bounce straight back INTO the recipe. This was the
// "can't get out of the curry" trap, worst on recipes with goesWith cross-links.
function closeMealRecipe(){
  if(typeof _appNavDepth!=='undefined' && _appNavDepth>0 && typeof history!=='undefined'){
    try { history.back(); return; } catch(_e){}
  }
  setQuiet({mealActiveRecipe:null});
  window.scrollTo(0,S._mealListScroll||0);
  requestAnimationFrame(function(){ window.scrollTo(0,S._mealListScroll||0); });
}

// Register FMF/meals into the universal recipe resolver so the shared cook mode
// (genericCookView) can find these recipes by id and apply the active version.
// (Enables 👨‍🍳 Start Cooking on FMF; also the first half of the sides cross-link unlock.)
if(typeof RECIPE_SOURCES!=='undefined'){
  RECIPE_SOURCES.meals = function(id){
    var arrs = [
      typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
      typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
      typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
      typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
      typeof SIDES_BASICS_RECIPES!=='undefined'?SIDES_BASICS_RECIPES:[]
    ];
    var r=null;
    for(var a=0;a<arrs.length;a++){ var f=(arrs[a]||[]).find(function(x){return x&&x.id===id;}); if(f){ r=f; break; } }
    if(!r) return null;
    return (typeof applyRecipeVersion==='function') ? applyRecipeVersion(r) : r;
  };
  // K1 UNLOCK: render builder so openRecipe('meals',id) shows an FMF/Sides recipe
  // (sauces, mash, dough…) via the shared bakes page — they share the same shape.
  // This is what makes goesWith cross-links to Sides recipes actually open.
  if(typeof registerRecipeBuilder==='function' && typeof bakesRecipeOpts==='function'){
    registerRecipeBuilder('meals', function(item, recipe, vr){ return bakesRecipeOpts(item); });
  }
}
function toggleMealPlan(id){
  const sec = S.screen||'';
  const sectionRecipes = {
    breakfast: typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
    lightlunch: typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
    supper: typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
    bakes: typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
    sidesbasics: typeof SIDES_BASICS_RECIPES!=='undefined'?SIDES_BASICS_RECIPES:[],
  };
  const r = (sectionRecipes[sec]||[]).find(x=>x.id===id);
  if(!r) return;
  const rv = (typeof applyRecipeVersion==='function') ? applyRecipeVersion(r) : r;   // ⭐ versions: plan the chosen version
  const vname = (rv.versions && rv._activeVersion) ? ' ('+rv._activeVersion+')' : '';
  togglePlanItem('mealPlan', {id:rv.id, name:rv.name+vname, emoji:rv.emoji||'🍽️', time:rv.time||0, ingredients:rv.ingredients||[], costPP:rv.costPP||0, nutrition:rv.nutrition||null, serves:1});
}
function openWorldRecipe(id){
  // World Kitchen uses r.id to set _wkRecipe
  set({_wkRecipe: id});
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

