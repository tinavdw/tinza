// ════════════════════════════════════════════════════════════════
//  BREAKFAST RECIPE LIBRARY — seeded across the 5 locked pills
//  cat: savoury | warm | sweet | fresh | go
//  ingredient shape: {n: buy-name, pp: per-person amount, u: g|ml|egg|''}
// ════════════════════════════════════════════════════════════════
var BREAKFAST_RECIPES = [
  {
    "id": "bf-porridge-pap",
    "cat": "warm",
    "name": "Porridge & Pap",
    "emoji": "🥣",
    "cuisine": "South African",
    "photoName": "Porridge and Pap",
    "didYouKnow": "Sorghum — the grain behind Maltabella — is one of Africa’s oldest cultivated cereals, grown for thousands of years before maize ever arrived from the Americas.",
    "feel": "The taste of a thousand farm mornings.",
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
    "costPP": 4,
    "time": 20,
    "nutrition": {
      "kcal": 250,
      "protein_g": 6,
      "carbs_g": 52,
      "fat_g": 3
    },
    "tip": "For stiff pap use less water; for soft breakfast pap keep it loose and pourable.",
    "storage": "Keeps 3 days; reheat with a splash of water.",
    "versions": [
      {
        "name": "Mealie Pap & Milk",
        "icon": "🌽",
        "default": true,
        "feel": "The taste of a thousand farm mornings.",
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
        "costPP": 4,
        "time": 20,
        "nutrition": {
          "kcal": 250,
          "protein_g": 6,
          "carbs_g": 52,
          "fat_g": 3
        },
        "tip": "For stiff pap use less water; for soft breakfast pap keep it loose and pourable.",
        "storage": "Keeps 3 days; reheat with a splash of water."
      },
      {
        "name": "Maltabella",
        "icon": "🌾",
        "feel": "Dark, malty and warm — the porridge that raised a country.",
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
        "costPP": 8,
        "time": 15,
        "nutrition": {
          "kcal": 240,
          "protein_g": 7,
          "carbs_g": 47,
          "fat_g": 3
        },
        "tip": "Always start in cold water to keep it lump-free.",
        "storage": "Keeps 2 days; loosen with milk."
      },
      {
        "name": "Maizena",
        "icon": "🥛",
        "feel": "Smooth, silky and gentle — the porridge of small mornings.",
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
        "costPP": 6,
        "time": 12,
        "nutrition": {
          "kcal": 230,
          "protein_g": 9,
          "carbs_g": 38,
          "fat_g": 6
        },
        "tip": "Keep whisking as it thickens so it stays velvety.",
        "storage": "Best fresh; thickens on standing."
      },
      {
        "name": "Putu Pap",
        "icon": "🥄",
        "feel": "Dry, crumbly pap — comfort by the spoonful.",
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
        "costPP": 3,
        "time": 25,
        "nutrition": {
          "kcal": 250,
          "protein_g": 6,
          "carbs_g": 52,
          "fat_g": 3
        },
        "tip": "The no-stir start is what gives putu its crumbly texture.",
        "storage": "Keeps 3 days; steam to refresh."
      },
      {
        "name": "Cheesy Krummelpap",
        "icon": "🧀",
        "feel": "Crumbly pap turned rich and savoury with melting cheese.",
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
        "costPP": 9,
        "time": 25,
        "nutrition": {
          "kcal": 330,
          "protein_g": 12,
          "carbs_g": 48,
          "fat_g": 12
        },
        "tip": "Lovely with crispy bacon bits stirred in.",
        "storage": "Best fresh."
      }
    ]
  },
  {
    "id": "bf-oats",
    "cat": "warm",
    "name": "Oats",
    "emoji": "🥣",
    "cuisine": "Global",
    "photoName": "Oats",
    "didYouKnow": "Oats turn creamy in milk thanks to beta-glucan, a soluble fibre that thickens as it cooks — the same fibre that helps keep you full all morning.",
    "feel": "A warm bowl that quietly says the day can wait.",
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
    "costPP": 10,
    "time": 10,
    "nutrition": {
      "kcal": 290,
      "protein_g": 11,
      "carbs_g": 48,
      "fat_g": 7
    },
    "tip": "Swap half the milk for water if you like it lighter, or use all milk for extra creaminess.",
    "storage": "Keeps 2 days; loosen with milk when reheating.",
    "versions": [
      {
        "name": "Creamy",
        "icon": "🥣",
        "default": true,
        "feel": "A warm bowl that quietly says the day can wait.",
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
        "costPP": 10,
        "time": 10,
        "nutrition": {
          "kcal": 290,
          "protein_g": 11,
          "carbs_g": 48,
          "fat_g": 7
        },
        "tip": "Swap half the milk for water if you like it lighter, or use all milk for extra creaminess.",
        "storage": "Keeps 2 days; loosen with milk when reheating."
      },
      {
        "name": "Overnight Jar",
        "icon": "🫙",
        "feel": "Tomorrow-morning sorted before you go to bed.",
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
        "costPP": 12,
        "time": 5,
        "nutrition": {
          "kcal": 320,
          "protein_g": 12,
          "carbs_g": 52,
          "fat_g": 7
        },
        "tip": "Layer in fruit and a spoon of peanut butter for variety each night.",
        "storage": "Keeps 3 days in the fridge."
      },
      {
        "name": "Malva / Melktert Oats",
        "icon": "🍮",
        "feel": "Two of our best puddings — melktert and malva — turned into a warm breakfast bowl.",
        "time": 10,
        "costPP": 9,
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
        "storage": "Best fresh and warm. Keeps 2 days in the fridge; loosen with a splash of milk when reheating. Cooked oats freeze up to 1 month."
      },
      {
        "name": "Rooibos & Honey Oats",
        "icon": "🍵",
        "feel": "Earthy, naturally sweet rooibos cooked right into the oats — a proper SA cuppa in a bowl.",
        "time": 10,
        "costPP": 7,
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
        "storage": "Best fresh. Keeps 2 days in the fridge; loosen with milk when reheating. Freezes up to 1 month."
      },
      {
        "name": "Peppermint Crisp Oats",
        "icon": "🌿",
        "feel": "Peppermint Crisp tart for breakfast — caramel-swirled oats under a shower of minty chocolate.",
        "time": 8,
        "costPP": 12,
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
        "storage": "Best fresh and warm while the chocolate melts. The plain caramel oats keep 2 days; add the chocolate when serving. Freezes (without chocolate) up to 1 month."
      },
      {
        "name": "Curry & Coconut Oats",
        "icon": "🍛",
        "feel": "Savoury, golden and aromatic — oats reimagined as a cosy spiced bowl, breakfast or light supper.",
        "time": 12,
        "costPP": 12,
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
        "storage": "Best fresh. Keeps 2 days in the fridge; loosen with a splash of water or coconut milk when reheating. Freezes up to 1 month — add the cashews fresh."
      },
      {
        "name": "Custard Protein Oats",
        "icon": "💪",
        "feel": "Thick, custardy and high-protein — oats that taste like warm cake batter.",
        "time": 10,
        "costPP": 9,
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
        "storage": "Best fresh and warm. Keeps 1 day in the fridge (it sets firm — loosen with hot milk). The egg means it is best not frozen."
      },
      {
        "name": "Bircher",
        "icon": "🥶",
        "feel": "Cool and gentle, like an early morning before the house wakes.",
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
        "costPP": 19,
        "time": 5,
        "nutrition": {
          "kcal": 290,
          "protein_g": 9,
          "carbs_g": 50,
          "fat_g": 5
        },
        "tip": "Stir halfway through soaking for an even texture. (Overnight — 5 min active.)",
        "storage": "Fridge, up to 2 days."
      },
      {
        "name": "Mango",
        "icon": "🥭",
        "feel": "Bright and easy, like a warm breeze through an open window.",
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
        "costPP": 13,
        "time": 10,
        "nutrition": {
          "kcal": 300,
          "protein_g": 9,
          "carbs_g": 52,
          "fat_g": 6
        },
        "tip": "Add the mango right at the end to keep it bright.",
        "storage": "Best fresh."
      },
      {
        "name": "Baked Berry",
        "icon": "🫐",
        "feel": "Cosy and baked through, like something shared at a quiet table.",
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
        "costPP": 23,
        "time": 25,
        "nutrition": {
          "kcal": 340,
          "protein_g": 12,
          "carbs_g": 50,
          "fat_g": 9
        },
        "tip": "Let it rest a few minutes before serving for the best texture.",
        "storage": "Fridge, up to 2 days."
      }
    ],
    "freezes": true,
    "fridgeDays": 2
  },
  {
    "id": "bf-fruit-yoghurt-bowls",
    "cat": "fresh",
    "name": "Fruit & Yoghurt Bowls",
    "emoji": "🍓",
    "cuisine": "Global",
    "photoName": "Fruit and Yoghurt Bowl",
    "didYouKnow": "Amasi — naturally soured milk — is one of South Africa’s oldest foods, traditionally cultured in a calabash gourd long before fridges existed.",
    "feel": "Cool, crunchy and bright — breakfast without the fuss.",
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
    "costPP": 22,
    "time": 5,
    "nutrition": {
      "kcal": 280,
      "protein_g": 12,
      "carbs_g": 42,
      "fat_g": 8
    },
    "tip": "Layer it in a glass jar the night before, granola on top, for a grab-and-go version.",
    "storage": "Assemble fresh; keep components separate.",
    "versions": [
      {
        "name": "Yoghurt & Granola",
        "icon": "🥣",
        "default": true,
        "feel": "Cool, crunchy and bright — breakfast without the fuss.",
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
        "costPP": 22,
        "time": 5,
        "nutrition": {
          "kcal": 280,
          "protein_g": 12,
          "carbs_g": 42,
          "fat_g": 8
        },
        "tip": "Layer it in a glass jar the night before, granola on top, for a grab-and-go version.",
        "storage": "Assemble fresh; keep components separate."
      },
      {
        "name": "Amasi & Fruit",
        "icon": "🥛",
        "feel": "Tangy, cool amasi over sweet fruit — an old friend.",
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
        "costPP": 12,
        "time": 5,
        "nutrition": {
          "kcal": 220,
          "protein_g": 9,
          "carbs_g": 34,
          "fat_g": 5
        },
        "tip": "Lovely with a spoon of crunchy granola over the top.",
        "storage": "Assemble fresh."
      },
      {
        "name": "Cottage & Peaches",
        "icon": "🍑",
        "feel": "Light, high-protein and quietly delicious.",
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
        "costPP": 22,
        "time": 5,
        "nutrition": {
          "kcal": 200,
          "protein_g": 16,
          "carbs_g": 22,
          "fat_g": 5
        },
        "tip": "Any soft fruit works; try it with grated apple in winter.",
        "storage": "Assemble fresh."
      },
      {
        "name": "Tropical Fruit",
        "icon": "🍍",
        "feel": "A bright, juicy plate that wakes the whole table up.",
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
        "costPP": 12,
        "time": 8,
        "nutrition": {
          "kcal": 150,
          "protein_g": 2,
          "carbs_g": 38,
          "fat_g": 1
        },
        "tip": "A sprinkle of toasted coconut makes it feel special.",
        "storage": "Best fresh; keeps 1 day cut."
      },
      {
        "name": "Boererusk & Amasi Bowl",
        "icon": "🍮",
        "feel": "Beskuit dunked in maas — the oldest, most comforting SA breakfast there is.",
        "time": 5,
        "costPP": 12,
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
        "storage": "Assemble fresh and eat soon — the rusks go soggy if it stands. Not for freezing."
      },
      {
        "name": "Stewed Fruit & Yoghurt",
        "icon": "🍑",
        "feel": "Gestoofde vrugte over cool yoghurt — a Sunday-at-ouma's kind of breakfast.",
        "time": 15,
        "costPP": 10,
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
        "storage": "The stewed fruit keeps 5 days in the fridge and freezes up to 3 months — spoon over fresh yoghurt each time."
      },
      {
        "name": "Granadilla & Honey Yoghurt",
        "icon": "🥭",
        "feel": "Thick yoghurt under tart, perfumed granadilla — summer in three spoons.",
        "time": 5,
        "costPP": 11,
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
        "storage": "Assemble fresh and eat right away. Not for freezing."
      },
      {
        "name": "Stone Fruit & Hot Honey",
        "icon": "🍯",
        "feel": "Sweet summer stone fruit with a sneaky chilli-honey kick — sophisticated and a little surprising.",
        "time": 5,
        "costPP": 13,
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
        "storage": "Assemble fresh and eat right away. The hot honey keeps in a jar for weeks. Not for freezing."
      }
    ],
    "freezes": false,
    "fridgeDays": 1
  },
  {
    "id": "bf-toast-toppers",
    "cat": "go",
    "name": "Toast Toppers",
    "emoji": "🍞",
    "cuisine": "Global",
    "photoName": "Toast Toppers",
    "didYouKnow": "Toasting isn’t just for crunch — the browning (the Maillard reaction) creates hundreds of new flavour compounds that plain bread simply doesn’t have.",
    "feel": "Creamy, green and a little bit smug — in the best way.",
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
    "costPP": 16,
    "time": 8,
    "nutrition": {
      "kcal": 300,
      "protein_g": 7,
      "carbs_g": 28,
      "fat_g": 19
    },
    "tip": "A poached egg on top turns this into a proper meal.",
    "storage": "Best fresh; avocado browns quickly.",
    "versions": [
      {
        "name": "Smashed Avo",
        "icon": "🥑",
        "default": true,
        "feel": "Creamy, green and a little bit smug — in the best way.",
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
        "costPP": 16,
        "time": 8,
        "nutrition": {
          "kcal": 300,
          "protein_g": 7,
          "carbs_g": 28,
          "fat_g": 19
        },
        "tip": "A poached egg on top turns this into a proper meal.",
        "storage": "Best fresh; avocado browns quickly."
      },
      {
        "name": "PB & Banana",
        "icon": "🍌",
        "feel": "The lunchbox hero, fast and filling.",
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
        "costPP": 9,
        "time": 5,
        "nutrition": {
          "kcal": 360,
          "protein_g": 11,
          "carbs_g": 48,
          "fat_g": 15
        },
        "tip": "Use brown bread for extra staying power before school.",
        "storage": "Best fresh."
      },
      {
        "name": "Honey Brick",
        "icon": "🍯",
        "feel": "A thick toast block, custard-soaked and baked sweet and golden.",
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
        "costPP": 10,
        "time": 20,
        "nutrition": {
          "kcal": 360,
          "protein_g": 6,
          "carbs_g": 48,
          "fat_g": 17
        },
        "tip": "Day-old bread holds the brick shape best.",
        "storage": "Best fresh and warm."
      },
      {
        "name": "French Toast",
        "icon": "🍳",
        "feel": "Day-old bread, reborn as something special.",
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
        "costPP": 12,
        "time": 15,
        "nutrition": {
          "kcal": 360,
          "protein_g": 13,
          "carbs_g": 44,
          "fat_g": 15
        },
        "tip": "Slightly stale bread soaks up the custard best without going soggy.",
        "storage": "Best fresh; eat the same morning."
      },
      {
        "name": "Chakalaka Beans",
        "icon": "🫘",
        "feel": "Beans on toast with a proper South African kick.",
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
        "costPP": 11,
        "time": 12,
        "nutrition": {
          "kcal": 320,
          "protein_g": 13,
          "carbs_g": 50,
          "fat_g": 8
        },
        "tip": "A handful of grated cheese melted on top is never wrong.",
        "storage": "The bean mix keeps 3 days."
      },
      {
        "name": "Savoury Mince",
        "icon": "🥩",
        "feel": "Rich, oniony mince piled on buttered toast.",
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
        "costPP": 15,
        "time": 20,
        "nutrition": {
          "kcal": 420,
          "protein_g": 24,
          "carbs_g": 30,
          "fat_g": 22
        },
        "tip": "A dash of Worcestershire or chutney rounds it out beautifully.",
        "storage": "Mince keeps 3 days."
      }
    ]
  },
  {
    "id": "bf-eggs",
    "cat": "savoury",
    "name": "Eggs, Your Way",
    "emoji": "🍳",
    "cuisine": "Global",
    "photoName": "Eggs",
    "didYouKnow": "A fresh egg sinks and lies flat in water; as it ages the air pocket inside grows, so a stale one stands up or floats — the cook’s oldest freshness test.",
    "feel": "The everyday omelette that never lets you down.",
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
    "costPP": 17,
    "time": 10,
    "nutrition": {
      "kcal": 340,
      "protein_g": 22,
      "carbs_g": 4,
      "fat_g": 26
    },
    "tip": "Take it off the heat while the centre is still a touch soft; it carries on cooking.",
    "storage": "Best fresh.",
    "versions": [
      {
        "name": "Cheese & Tomato",
        "icon": "🧀",
        "default": true,
        "feel": "The everyday omelette that never lets you down.",
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
        "costPP": 17,
        "time": 10,
        "nutrition": {
          "kcal": 340,
          "protein_g": 22,
          "carbs_g": 4,
          "fat_g": 26
        },
        "tip": "Take it off the heat while the centre is still a touch soft; it carries on cooking.",
        "storage": "Best fresh."
      },
      {
        "name": "Mushroom & Feta",
        "icon": "🍄",
        "feel": "Earthy mushrooms and salty feta, folded warm.",
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
        "costPP": 20,
        "time": 12,
        "nutrition": {
          "kcal": 330,
          "protein_g": 21,
          "carbs_g": 3,
          "fat_g": 26
        },
        "tip": "Cook the mushrooms first and dry, so the omelette does not go watery.",
        "storage": "Best fresh."
      },
      {
        "name": "Hash Brown",
        "icon": "🥔",
        "feel": "Crispy potato cooked right into a loaded omelette.",
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
        "costPP": 17,
        "time": 20,
        "nutrition": {
          "kcal": 380,
          "protein_g": 19,
          "carbs_g": 24,
          "fat_g": 23
        },
        "tip": "Squeezing the grated potato dry is what gets you crisp, not soggy.",
        "storage": "Best fresh."
      },
      {
        "name": "Masala Scramble",
        "icon": "🌶️",
        "feel": "Soft scrambled eggs lifted with onion, chilli and masala.",
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
        "costPP": 12,
        "time": 15,
        "nutrition": {
          "kcal": 260,
          "protein_g": 17,
          "carbs_g": 7,
          "fat_g": 18
        },
        "tip": "Pull it off the heat while still glossy; the eggs firm up as you plate.",
        "storage": "Best fresh."
      },
      {
        "name": "Cloud Eggs",
        "icon": "☁️",
        "feel": "Whipped egg-white clouds with a sunny yolk nested in.",
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
        "costPP": 9,
        "time": 12,
        "nutrition": {
          "kcal": 180,
          "protein_g": 14,
          "carbs_g": 1,
          "fat_g": 13
        },
        "tip": "Watch them closely; the whites colour fast at high heat.",
        "storage": "Best fresh."
      }
    ]
  },
  {
    "id": "bf-pancakes",
    "cat": "sweet",
    "name": "Pancakes",
    "emoji": "🥞",
    "cuisine": "Global",
    "photoName": "Pancakes",
    "didYouKnow": "Pannekoek and crêpes are essentially the same thin batter — the real difference is the name and the filling, from Dutch farm kitchens to Paris street carts.",
    "feel": "Thin, lacy pancakes rolled with cinnamon sugar.",
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
    "costPP": 7,
    "time": 20,
    "nutrition": {
      "kcal": 230,
      "protein_g": 7,
      "carbs_g": 34,
      "fat_g": 8
    },
    "tip": "Rest the batter 10 minutes for thinner, more tender pancakes.",
    "storage": "Best fresh; stack with paper between to reheat.",
    "versions": [
      {
        "name": "Pannekoek",
        "icon": "🥞",
        "default": true,
        "feel": "Thin, lacy pancakes rolled with cinnamon sugar.",
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
        "costPP": 7,
        "time": 20,
        "nutrition": {
          "kcal": 230,
          "protein_g": 7,
          "carbs_g": 34,
          "fat_g": 8
        },
        "tip": "Rest the batter 10 minutes for thinner, more tender pancakes.",
        "storage": "Best fresh; stack with paper between to reheat."
      },
      {
        "name": "Plaatkoekies",
        "icon": "🥞",
        "feel": "Little thick drop scones, golden and fluffy.",
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
        "costPP": 7,
        "time": 15,
        "nutrition": {
          "kcal": 240,
          "protein_g": 7,
          "carbs_g": 38,
          "fat_g": 6
        },
        "tip": "Wait for the bubbles before flipping; that is when they are ready.",
        "storage": "Keeps 2 days; toast to refresh."
      },
      {
        "name": "Crêpes",
        "icon": "🇫🇷",
        "feel": "Paper-thin and tender, ready for any filling.",
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
        "costPP": 7,
        "time": 20,
        "nutrition": {
          "kcal": 200,
          "protein_g": 7,
          "carbs_g": 26,
          "fat_g": 8
        },
        "tip": "The first crêpe is always a test one; do not worry about it.",
        "storage": "Stack with paper; keeps 2 days."
      }
    ]
  },
  {
    "id": "bf-fry-up",
    "cat": "savoury",
    "name": "Fry-Up",
    "emoji": "🥓",
    "cuisine": "South African",
    "photoName": "Fry Up",
    "didYouKnow": "To be sold as “boerewors” in South Africa, the law requires at least 90% meat — anything less has to be labelled as something else.",
    "feel": "The smell that pulls everyone out of bed.",
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
    "costPP": 26,
    "time": 15,
    "nutrition": {
      "kcal": 430,
      "protein_g": 24,
      "carbs_g": 22,
      "fat_g": 28
    },
    "tip": "Cook the eggs last so the yolks stay runny and warm on the plate.",
    "storage": "Best fresh; cooked bacon keeps 2 days in the fridge.",
    "versions": [
      {
        "name": "Bacon & Eggs",
        "icon": "🥓",
        "default": true,
        "feel": "The smell that pulls everyone out of bed.",
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
        "costPP": 26,
        "time": 15,
        "nutrition": {
          "kcal": 430,
          "protein_g": 24,
          "carbs_g": 22,
          "fat_g": 28
        },
        "tip": "Cook the eggs last so the yolks stay runny and warm on the plate.",
        "storage": "Best fresh; cooked bacon keeps 2 days in the fridge."
      },
      {
        "name": "Boerewors & Eggs",
        "icon": "🌭",
        "feel": "A coil of wors and a soft egg — a proper farm start.",
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
        "costPP": 18,
        "time": 20,
        "nutrition": {
          "kcal": 460,
          "protein_g": 24,
          "carbs_g": 18,
          "fat_g": 32
        },
        "tip": "Do not prick the wors; keeping it whole holds the juices in.",
        "storage": "Best fresh; cooked wors keeps 2 days."
      }
    ]
  },
  {
    "id": "bf-waffles",
    "cat": "sweet",
    "name": "Waffles",
    "emoji": "🧇",
    "cuisine": "Global",
    "photoName": "Waffles",
    "freezes": true,
    "fridgeDays": 2,
    "time": 20,
    "costPP": 9,
    "feel": "Crisp pockets, soft middle — the waffle every other one is measured against.",
    "goesWith": [
      "Berry Smoothie",
      "Fresh Berries",
      "Crispy Bacon"
    ],
    "didYouKnow": "Those deep pockets are not just pretty — the grid hugely increases the surface area, so a waffle crisps far more than a flat pancake while the wells cradle pools of butter and syrup. The name comes from the Dutch \"wafel\", and the hinged irons go back to the Middle Ages, when bakers pressed batter between two patterned metal plates held over the fire.",
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
      "Lift out and serve straight away while crisp."
    ],
    "tip": "Do not open the iron too early — let the steam slowing down tell you it is done.",
    "nutrition": {
      "kcal": 380,
      "protein_g": 10,
      "carbs_g": 48,
      "fat_g": 16
    },
    "storage": "Best fresh and crisp. Keeps 2 days in the fridge and freezes well — crisp straight from frozen in a toaster.",
    "versions": [
      {
        "name": "Classic Buttermilk",
        "icon": "⭐",
        "default": true,
        "feel": "Crisp pockets, soft middle — the waffle every other one is measured against.",
        "time": 20,
        "costPP": 9,
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
        "name": "Banana & Pecan",
        "icon": "🍌",
        "feel": "Banana-sweet and nutty — pudding that gets to be breakfast.",
        "time": 22,
        "costPP": 13,
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
        "name": "Cheesy Savoury",
        "icon": "🧀",
        "feel": "No sugar here — a crisp, cheesy waffle built to carry a runny egg.",
        "time": 22,
        "costPP": 13,
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
        "name": "Choc Chip",
        "icon": "🍫",
        "feel": "Melty chocolate pockets — the treat-morning waffle.",
        "time": 20,
        "costPP": 12,
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
        "name": "Bacon & Syrup",
        "icon": "🥓",
        "feel": "Crisp bacon, deep golden waffle, a flood of syrup — the diner classic.",
        "time": 22,
        "costPP": 15,
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
      }
    ]
  },
  {
    "id": "bf-frittata",
    "cat": "savoury",
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
    "id": "bf-muffins",
    "cat": "go",
    "name": "Muffins",
    "emoji": "🧁",
    "cuisine": "Global",
    "photoName": "Muffins",
    "freezes": true,
    "fridgeDays": 3,
    "time": 35,
    "costPP": 15,
    "feel": "Smoky bacon, tangy atchar, melty cheddar — a braai in a breakfast muffin.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "A muffin is a \"quick bread\" — no yeast, no proving, just baking powder doing the lifting, which is why you go from bowl to oven in minutes. The one golden rule is the muffin method: stir the wet into the dry only until just combined. Overmix and you build gluten, and light breakfast muffins turn into little rubber balls.",
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
    "storage": "Keeps 3 days airtight; freezes well — warm before eating.",
    "versions": [
      {
        "name": "Bacon, Atchar & Cheddar",
        "icon": "⭐",
        "default": true,
        "feel": "Smoky bacon, tangy atchar, melty cheddar — a braai in a breakfast muffin.",
        "time": 35,
        "costPP": 15,
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
        "name": "Potato & Sour Cream",
        "icon": "🥔",
        "feel": "A twice-baked potato you can hold in one hand — rich, savoury and moreish.",
        "time": 38,
        "costPP": 9,
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
        "name": "Cottage Cheese & Quinoa",
        "icon": "💪",
        "feel": "Flourless and protein-packed — a savoury muffin that actually keeps you full.",
        "time": 35,
        "costPP": 12,
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
        "name": "Carrot & Pineapple",
        "icon": "🥕",
        "feel": "Carrot cake's wholesome cousin — sweet, spiced and full of good things.",
        "time": 35,
        "costPP": 10,
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
        "name": "Biltong & Cheese",
        "icon": "🥩",
        "feel": "Two of the most South African things there are, baked into breakfast.",
        "time": 35,
        "costPP": 16,
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
        "name": "Malva Pudding Muffin",
        "icon": "🍮",
        "feel": "South Africa's favourite pudding, shrunk into a sticky breakfast muffin.",
        "time": 35,
        "costPP": 12,
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
      }
    ]
  },
  {
    "id": "bf-scones",
    "cat": "go",
    "name": "Scones",
    "emoji": "🥮",
    "cuisine": "Global",
    "photoName": "Scones",
    "time": 30,
    "costPP": 12,
    "freezes": true,
    "fridgeDays": 3,
    "feel": "Sweet strawberries with a sneaky kick of black pepper — a bakery scone that gets people talking.",
    "goesWith": [
      "Smoothies",
      "Fresh Fruit"
    ],
    "didYouKnow": "The secret to a tall, flaky scone is cold hands and a light touch: keep the butter cold so it steams into layers, and bring the dough together only just — overworking makes them tough and flat. And never twist the cutter; press it straight down, or the scones rise lopsided.",
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
    "storage": "Best the day they are baked. Keep 2 days airtight in the fridge; freeze unglazed up to 2 months and add the glaze after warming.",
    "versions": [
      {
        "name": "Strawberry & Black Pepper",
        "icon": "⭐",
        "default": true,
        "feel": "Sweet strawberries with a sneaky kick of black pepper — a bakery scone that gets people talking.",
        "time": 30,
        "costPP": 12,
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
        "name": "Buttermilk, Jam & Cream",
        "icon": "🍓",
        "feel": "The teatime classic — but split it open for homemade strawberry jam, not the shop stuff.",
        "time": 25,
        "costPP": 9,
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
        "name": "Jalapeno & Cheddar",
        "icon": "🌶️",
        "feel": "Sharp cheddar and a slow chilli warmth — the savoury scone that does not even need butter.",
        "time": 30,
        "costPP": 10,
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
        "name": "Butternut, Feta & Chive",
        "icon": "🎃",
        "feel": "Golden, naturally sweet butternut against salty feta — proper SA tea-time.",
        "time": 35,
        "costPP": 10,
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
        "name": "Earl Grey, Honey & Lavender",
        "icon": "🫖",
        "feel": "A whole pot of fancy tea baked into a scone — earthy bergamot and a whisper of lavender.",
        "time": 28,
        "costPP": 11,
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
        "name": "Blue Cheese, Fig & Walnut",
        "icon": "🧀",
        "feel": "A cheeseboard you can hold — funky blue cheese, sweet figs and toasty walnuts.",
        "time": 30,
        "costPP": 14,
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
      }
    ]
  },
  {
    "id": "bf-smoothies",
    "cat": "go",
    "name": "Smoothies",
    "emoji": "🥤",
    "cuisine": "Global",
    "photoName": "Smoothie",
    "freezes": false,
    "fridgeDays": 1,
    "time": 5,
    "costPP": 18,
    "feel": "Breakfast you can drink with one hand on the car keys.",
    "goesWith": [
      "Toast Toppers",
      "Fresh Fruit"
    ],
    "didYouKnow": "A smoothie only earns its place at breakfast if it actually fills you — blended fruit on its own spikes your sugar and leaves you hungry by mid-morning. The fix is something with staying power: yoghurt or amasi for protein, and banana, oats or peanut butter for slow-release energy. That is the whole difference between a drink and a breakfast.",
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
    "storage": "Drink fresh; keeps a few hours chilled. Not for freezing once blended — freeze the fruit first for a thicker drink.",
    "versions": [
      {
        "name": "Berry Banana",
        "icon": "⭐",
        "default": true,
        "feel": "Breakfast you can drink with one hand on the car keys.",
        "time": 5,
        "costPP": 18,
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
        "name": "Green",
        "icon": "🥬",
        "feel": "A whole salad you can drink without noticing.",
        "time": 5,
        "costPP": 12,
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
        "name": "Tropical",
        "icon": "🥭",
        "feel": "A holiday in a glass — sunshine mango and tangy granadilla.",
        "time": 5,
        "costPP": 16,
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
        "name": "Peanut Butter Banana",
        "icon": "🥜",
        "feel": "Thick, nutty and filling — breakfast that actually holds you to lunch.",
        "time": 5,
        "costPP": 12,
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
        "name": "Amasi Berry",
        "icon": "🧉",
        "feel": "Tangy maas and berries — creamy, local, and full of good bacteria.",
        "time": 5,
        "costPP": 13,
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
        "name": "Red Berry & Beet",
        "icon": "🫐",
        "feel": "Earthy beetroot and sweet berries — vivid pink and packed with iron.",
        "time": 5,
        "costPP": 15,
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
        "name": "Avocado & Date",
        "icon": "🥑",
        "feel": "Thick as a milkshake, rich and silky — avo does what ice cream pretends to.",
        "time": 5,
        "costPP": 16,
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
    ]
  },
  {
    "id": "bf-omelette-waffle",
    "cat": "savoury",
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
    "cat": "savoury",
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
    "cat": "savoury",
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
    "cat": "savoury",
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
    "cat": "savoury",
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
    "storage": "Sauce keeps 3 days; add fresh eggs when reheating."
  },
  {
    "id": "bf-egg-wrap",
    "cat": "go",
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
    "storage": "Best fresh; eat within a few hours."
  }
];

// ════════════════════════════════════════════════════════════════
//  SUPPER RECIPE LIBRARY — seeded across the 5 locked pills
//  cat: plates | pastapizza | stewscurries | ovenbakes | roasts
// ════════════════════════════════════════════════════════════════
var SUPPER_RECIPES = [
  // ── 🍳 HOMESTYLE PLATES ──
  {id:'sp-bangers-mash', cat:'plates', diet:'meat', protein:'pork', name:'Bangers & Mash', emoji:'🌭', cuisine:'British / South African', time:35, costPP:36,
    feel:'Soft mash, sticky onion gravy — the supper that feels like a hug.',
    ingredients:[{n:'pork sausages',pp:150,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'onion',pp:60,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'milk',pp:30,u:'ml'},{n:'frozen peas',pp:60,u:'g'}],
    method:['Boil the peeled, chopped potatoes in salted water until tender, about 15 minutes.','Meanwhile fry the sausages over medium heat until browned all over, then set aside.','Soften the sliced onion in the same pan, add the stock and simmer into a glossy gravy.','Mash the potatoes with butter and milk. Plate the mash, sausages and peas, and pour over the onion gravy.'],
    tip:'Prick the sausages once or twice so they brown evenly without bursting.',
    nutrition:{kcal:620,protein_g:26,carbs_g:52,fat_g:34}, storage:'Keeps 2 days; reheat with a splash of milk in the mash.'},
  {id:'sp-fish-chips', cat:'plates', diet:'meat', protein:'fish', name:'Fish & Chips', emoji:'🐟', cuisine:'British', time:40, costPP:56,
    feel:'Crispy batter, soft chips, a squeeze of lemon — Friday on a plate.',
    ingredients:[{n:'hake fillets',pp:160,u:'g'},{n:'potatoes',pp:280,u:'g'},{n:'cake flour',pp:50,u:'g'},{n:'sunflower oil',pp:40,u:'ml'},{n:'frozen peas',pp:70,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'salt & pepper'}],
    method:['Cut the potatoes into chips, par-boil 4 minutes, then drain and dry well.','Make a batter with the flour, a pinch of salt and enough cold water for a smooth coating.','Fry the chips in hot oil until golden, drain on paper towel and keep warm.','Dip the fish in batter and fry until crisp and golden. Serve with chips, peas and a wedge of lemon.'],
    tip:'Dry the chips thoroughly before frying — wet potatoes never go crisp.',
    nutrition:{kcal:680,protein_g:34,carbs_g:62,fat_g:32}, storage:'Best fresh; the batter softens on standing.'},

  // ── 🍝 PASTA & PIZZA ──
  {id:'sp-lasagne', cat:'pastapizza', diet:'meat', protein:'beef', name:'Beef Lasagne', emoji:'🍝', cuisine:'Italian', time:75, costPP:37,
    feel:'Layers of meaty, cheesy comfort that pull the whole table in.',
    ingredients:[{n:'lasagne sheets',pp:60,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'milk',pp:120,u:'ml'},{n:'cake flour',pp:15,u:'g'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:40,u:'g'}],
    method:['Brown the mince with the chopped onion, add the tomatoes and simmer 20 minutes into a rich ragu.','Make a white sauce: melt the butter, stir in the flour, then whisk in the milk until thick and smooth.','Layer ragu, lasagne sheets and white sauce in a dish, repeating and finishing with sauce and grated cheddar.','Bake at 180C for 35 to 40 minutes until golden. Rest 10 minutes before slicing.'],
    tip:'Let it rest before cutting so the layers hold instead of sliding apart.',
    nutrition:{kcal:590,protein_g:30,carbs_g:48,fat_g:30}, storage:'Keeps 3 days; freezes well in portions for up to 2 months.'},
  {id:'sp-spag-bol', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Grated parmesan','A glass of red'], diet:'meat', protein:'beef', name:'Spaghetti Bolognese', emoji:'🍝', cuisine:'Italian', time:30, costPP:59,
  feel:'The weeknight rescue everyone already knows how to twirl.',
  ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'tomatoes',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:40,u:'g'},{n:'garlic'},{n:'cheddar',pp:20,u:'g'}],
  method:['Soften the chopped onion, carrot and garlic in a little oil.','Add the mince and brown well, breaking up any lumps.','Stir in the tomatoes and simmer gently for 25 minutes until thick and glossy.','Cook the spaghetti, drain, and serve topped with the sauce and grated cheddar.'],
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
  {id:'sp-capemalay-curry', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Cape Malay Chicken Curry', emoji:'🍛', cuisine:'Cape Malay', time:55, costPP:28,
    feel:'Warm, gently spiced and fragrant — the smell that fills the whole house.',
    ingredients:[{n:'chicken pieces',pp:180,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomatoes',pp:80,u:'g'},{n:'potatoes',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the sliced onion in oil until soft and golden.','Stir in the curry powder and cook a minute until fragrant.','Add the chicken, tomatoes and potatoes with a little water, cover and simmer 35 minutes until tender.','Cook the rice separately and serve the curry spooned over the top.'],
    tip:'Toast the curry powder in the oil first — it wakes up all the spice.',
    nutrition:{kcal:560,protein_g:32,carbs_g:58,fat_g:20}, storage:'Even better next day; keeps 3 days, freezes 2 months.'},
  {id:'sp-beef-stew', cat:'stewscurries', goesWith:['Rice','Pap','Mashed potato','Crusty bread'], diet:'meat', protein:'beef', name:'Farmhouse Beef Stew', emoji:'🥘', cuisine:'South African', time:130, costPP:44,
  feel:'Low and slow until the beef gives way to the fork and the gravy turns glossy and deep — proper farmhouse-pot cooking that looks after a whole table.',
  ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],
  method:['Pat the beef dry and toss in seasoned cake flour. Brown HARD in batches in a little oil in a heavy pot — never crowd it, a packed pot steams instead of sears and you lose the dark fond on the base where the flavour lives. Set the meat aside.','Soften the chopped onion in the same pot, scraping up the fond, then add the garlic for a minute.','Stir in the tomato paste and cook it out 2 minutes until it darkens — this loses the raw tang and builds the deep, rich base.','Return the beef, pour in the stock, drop in the bay and thyme. Bring to a bare simmer, cover, and cook low for 1.5 hours — low and slow is what melts the connective tissue to silk.','Add the carrots and potatoes for the last 40 minutes so they hold their shape instead of melting away.','Finish with a splash of Worcestershire and check the seasoning. The gravy should coat the back of a spoon — if it is thin, simmer uncovered a few minutes to reduce. Serve over rice, pap or with bread.'],
  tip:'Brown the meat properly and in batches — that fond is the whole flavour of the gravy — and add the potatoes late so they do not disintegrate.',
  didYouKnow:'Browning the meat doesn\'t "seal in the juices" — that\'s a century-old myth. It\'s the Maillard reaction: sugars and proteins forming hundreds of new flavour compounds. That dark fond on the pot is pure flavour you\'re about to scrape up.',
  nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24}, storage:'Improves overnight as the flavours marry; keeps 3 days, freezes 3 months. Reheat gently, loosen with a splash of stock.',
  versions:[
    {name:'Farmhouse',icon:'🥘',default:true,time:130,costPP:44,nutrition:{kcal:510,protein_g:38,carbs_g:36,fat_g:24},feel:'The full farmhouse-pot stew — browned hard, simmered low, glossy and deep. The one that fills the house with Sunday.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'Worcestershire sauce',pp:5,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'},{n:'salt & pepper'}],method:['Pat the beef dry, toss in seasoned cake flour, brown HARD in batches — don\'t crowd the pot, the fond is the flavour. Set aside.','Soften the onion in the fond, add garlic for a minute.','Cook out the tomato paste 2 min until it darkens.','Return the beef, add stock, bay and thyme; simmer low and covered 1.5 hours.','Add carrots and potatoes for the last 40 min.','Finish with Worcestershire; reduce uncovered if the gravy is thin.']},
    {name:'Budget',icon:'💰',time:120,costPP:23,nutrition:{kcal:430,protein_g:24,carbs_g:48,fat_g:16},feel:'Stretches less meat across a fuller pot — more potato, more gravy, every cent feeding the table. All real, no packets.',ingredients:[{n:'beef stewing meat',pp:100,u:'g'},{n:'potatoes',pp:220,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'cake flour',pp:12,u:'g'},{n:'beef stock powder',pp:6,u:'g'},{n:'tomato paste',pp:8,u:'g'},{n:'oil',pp:10,u:'ml'}],method:['Toss the beef in seasoned flour and brown for colour and to thicken the gravy later.','Soften the onion, stir in the tomato paste, then return the beef.','Add water and the stock powder (real concentrated stock, no soup packets), bring to a simmer.','Simmer covered 1 hour, add the potatoes and carrots, and cook 30 min more until tender and the gravy has thickened from the floured meat.']},
    {name:'Quick',icon:'⚡',time:45,costPP:44,nutrition:{kcal:500,protein_g:37,carbs_g:36,fat_g:23},feel:'Pressure-cooker farmhouse stew — the same deep flavour, ready in 45 instead of two hours.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'potatoes',pp:150,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'oil',pp:10,u:'ml'}],method:['Brown the floured beef in the pressure cooker on sauté.','Add onion, garlic and tomato paste, cook out 2 min.','Add stock, seal, and pressure-cook 20 min.','Release, add carrots and potatoes, simmer open 12–15 min until tender and the gravy thickens.']},
    {name:'Red Wine',icon:'🍷',time:150,costPP:55,nutrition:{kcal:560,protein_g:39,carbs_g:34,fat_g:28},feel:'The grown-up version — beef braised in red wine with mushrooms until the gravy is dark, silky and deeply savoury.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'streaky bacon',pp:20,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'mushrooms',pp:70,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'red wine',pp:60,u:'ml'},{n:'beef stock',pp:150,u:'ml'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:150,u:'g'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:8,u:'ml'}],method:['Render the chopped bacon, then brown the floured beef HARD in batches in the fat. Set aside.','Soften onion and garlic, brown the mushrooms hard for umami.','Cook out the tomato paste, pour in the red wine and reduce by half — this burns off the sharpness and concentrates the flavour.','Return the beef and bacon with the stock, bay and thyme; braise low and covered 1.5–2 hours.','Add carrots and baby potatoes for the last 40 min; reduce uncovered until the gravy is glossy and coats a spoon.']},
    {name:'Over Coals',icon:'🔥',time:180,costPP:44,nutrition:{kcal:520,protein_g:38,carbs_g:36,fat_g:25},feel:'The potjie way — browned in a three-legged pot and left to its own devices over low coals, layered and never stirred, until everything melts together.',ingredients:[{n:'beef stewing meat',pp:180,u:'g'},{n:'cake flour',pp:10,u:'g'},{n:'onion',pp:60,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'tomato paste',pp:10,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'baby potatoes',pp:180,u:'g'},{n:'beef stock',pp:200,u:'ml'},{n:'bay leaves'},{n:'thyme'},{n:'oil',pp:10,u:'ml'}],method:['Get a bed of coals low and steady — gentle heat is the whole game with a potjie.','Brown the floured beef in batches in the pot, then soften the onion and garlic and cook out the tomato paste.','Pour in the stock with the bay and thyme, settle the meat in an even layer.','Layer the carrots and baby potatoes ON TOP — do NOT stir; the steam cooks them down into the stew.','Lid on, low coals, 2.5–3 hours. Only stir right at the end to bring the gravy together. Cross-link: see the Potjie shelf in Braai.']}
  ]},

  // ── 🥧 PIES & OVEN BAKES ──
  {id:'sp-cottage-pie', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Cottage Pie', emoji:'🥧', cuisine:'British', time:65, costPP:38,
    feel:'A golden mash lid over savoury mince — proper comfort food.',
    ingredients:[{n:'beef mince',pp:120,u:'g'},{n:'potatoes',pp:300,u:'g'},{n:'onion',pp:50,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'beef stock',pp:100,u:'ml'},{n:'butter',pp:15,u:'g'},{n:'cheddar',pp:20,u:'g'}],
    method:['Brown the mince with the chopped onion and carrot.','Add the stock and peas and simmer until thickened, then spoon into an oven dish.','Boil and mash the potatoes with butter, and spread over the mince.','Top with grated cheddar and bake at 190C for 25 to 30 minutes until golden.'],
    tip:'Rough up the mash with a fork before baking for extra crispy peaks.',
    nutrition:{kcal:560,protein_g:26,carbs_g:52,fat_g:28}, storage:'Keeps 3 days; assembles ahead and freezes 2 months.'},
  {id:'sp-chicken-pie', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Chicken & Mushroom Pie', emoji:'🥧', cuisine:'British', time:60, costPP:30,
    feel:'Flaky pastry giving way to a creamy, savoury filling.',
    ingredients:[{n:'chicken fillets',pp:140,u:'g'},{n:'puff pastry',pp:80,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'onion',pp:40,u:'g'},{n:'milk',pp:80,u:'ml'},{n:'cake flour',pp:12,u:'g'},{n:'butter',pp:12,u:'g'}],
    method:['Cook the diced chicken, onion and sliced mushrooms in butter until just done.','Stir in the flour, then the milk, and simmer into a creamy sauce. Season and cool slightly.','Spoon into a pie dish and top with the rolled-out puff pastry, sealing the edges.','Brush with a little milk and bake at 200C for 25 to 30 minutes until puffed and golden.'],
    tip:'Cut a small slit in the pastry lid so steam escapes and the top stays crisp.',
    nutrition:{kcal:520,protein_g:30,carbs_g:34,fat_g:28}, storage:'Keeps 2 days; best reheated in the oven to re-crisp the pastry.'},

  // ── 🍗 ROASTS ──
  {id:'sp-roast-chicken', cat:'ovenbakes', goesWith:['Roast potatoes','Steamed green veg','Gravy','Stuffing'], diet:'meat', protein:'chicken', name:'Lemon & Herb Roast Chicken & Veg', emoji:'🍗', cuisine:'Global', time:95, costPP:37,
  feel:'Butter and garlic pushed under the skin, lemon and herbs in the cavity, the veg caramelising in the chicken\'s own golden fat — the Sunday smell that gets everyone to the table on time.',
  ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],
  method:['Pat the chicken bone-dry inside and out — dry skin is the whole secret to crackle. Loosen the skin over the breast and push a paste of softened butter, crushed garlic and chopped herbs underneath, right onto the meat.','Halve the lemon and tuck it into the cavity with the onion and a sprig of herbs — it steams the bird from inside and keeps the breast juicy.','Rub the skin with oil and season well. Toss the potatoes and carrots in the tin with oil and a drizzle of honey.','Roast at 200C for the first 20 minutes for colour, then drop to 180C and cook about 45 min per kg plus 20, basting the veg in the chicken fat once or twice — that fat is what caramelises them.','Rest the bird 10–15 minutes before carving so the juices settle back in. Tip the resting juices into the pan, simmer with the sticky bits, and you have an instant gravy.'],
  tip:'Dry the skin properly and start it hot — that is the whole difference between pale and golden, crackling skin. And always rest before carving.',
  didYouKnow:'That sprig of thyme or rosemary? Both are hardy perennials that thrive in a pot on a sunny sill or step — snip what you need and they keep giving for years, so you never buy a packet again.',
  nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32}, storage:'Keeps 3 days; leftovers are gold for sandwiches and soup.',
  versions:[
    {name:'Lemon & Herb',icon:'🍗',default:true,time:95,costPP:37,nutrition:{kcal:620,protein_g:44,carbs_g:36,fat_g:32},feel:'The full Sunday bird — butter and garlic under the skin, lemon and herbs in the cavity, veg golden in the chicken fat.',ingredients:[{n:'whole chicken',pp:300,u:'g'},{n:'butter',pp:12,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'thyme'},{n:'rosemary'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:90,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'honey',pp:5,u:'g'},{n:'salt & pepper'}],method:['Pat the chicken bone-dry; push a butter-garlic-herb paste under the breast skin.','Lemon, onion and herbs in the cavity.','Oil and season the skin; toss the veg in oil and a little honey.','Roast hot at 200C for 20 min, then 180C ~45 min/kg + 20, basting the veg in the fat.','Rest 10–15 min; make a quick pan gravy from the juices.']},
    {name:'Budget',icon:'💰',time:65,costPP:36,nutrition:{kcal:540,protein_g:36,carbs_g:42,fat_g:24},feel:'Cheapest cuts, fullest tray — bone-in pieces and a big bed of potato roasted in herbs. Feeds the table for less.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'onion',pp:60,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'garlic',pp:5,u:'g'},{n:'mixed herbs'},{n:'salt & pepper'}],method:['Use the cheapest bone-in pieces (thighs and drumsticks have the most flavour for the money).','Toss everything in a roasting tin with oil, crushed garlic, herbs and seasoning.','Roast at 200C for 45–50 minutes, turning once, until the chicken is golden and the potatoes crisp.','Skin-on bone-in pieces baste the veg as they roast — no extra fat needed.']},
    {name:'Quick',icon:'⚡',time:45,costPP:35,nutrition:{kcal:560,protein_g:40,carbs_g:34,fat_g:26},feel:'Same lemon-herb flavour, half the time — pieces not a whole bird, roasted hot and fast.',ingredients:[{n:'chicken pieces',pp:250,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'thyme'},{n:'salt & pepper'}],method:['Toss the chicken pieces with oil, crushed garlic, lemon juice, thyme and seasoning.','Spread on a tray with the potatoes and carrots, cut small so they roast fast.','Roast hot at 220C for 35–40 minutes until golden and cooked through.','Pieces roast in a fraction of the time of a whole bird — no carving, no resting wait.']},
    {name:'Healthy',icon:'❤️',time:50,costPP:36,nutrition:{kcal:430,protein_g:46,carbs_g:30,fat_g:12},feel:'Skinless and lean, barely any oil, and double the veg — all the lemon-herb flavour, far lighter. (See the Health Hub for more like this.)',ingredients:[{n:'chicken breasts',pp:200,u:'g'},{n:'lemon',pp:0.25,u:''},{n:'garlic',pp:6,u:'g'},{n:'sweet potatoes',pp:150,u:'g'},{n:'carrots',pp:100,u:'g'},{n:'green beans',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:5,u:'ml'},{n:'thyme'},{n:'rosemary'},{n:'salt & pepper'}],method:['Use skinless chicken portions and just a spray or 5ml of oil — the lemon, garlic and herbs do the flavour work, not fat.','Roast a big bed of sweet potato, carrot, onion and green beans tossed in the little oil with herbs.','Lay the chicken on top so it stays moist over the veg; squeeze over the lemon.','Roast at 190C for 35–40 minutes until the chicken is just cooked and the veg tender.']}
  ]},
  {id:'sp-roast-beef', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Roast Beef', emoji:'🥩', cuisine:'British', time:110, costPP:38,
    feel:'A proper centrepiece — pink in the middle, everyone crowding the carving board.',
    ingredients:[{n:'beef roasting joint',pp:180,u:'g'},{n:'potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'olive oil',pp:12,u:'ml'},{n:'beef stock',pp:100,u:'ml'},{n:'salt & pepper'}],
    method:['Bring the beef to room temperature, rub with oil, salt and pepper, and sear all over in a hot pan.','Transfer to a roasting tin with the veg and roast at 200C, about 15 minutes per 500g for medium.','Rest the beef under foil 15 minutes while you make gravy from the pan juices and stock.','Carve thinly across the grain and serve with the roast veg and gravy.'],
    tip:'A meat thermometer removes the guesswork — about 55C for medium-rare.',
    nutrition:{kcal:560,protein_g:40,carbs_g:32,fat_g:28}, storage:'Keeps 3 days; slice cold for the best roast-beef sandwiches.'},

  // ── 🍳 HOMESTYLE PLATES — added 22 Jun (Supper build, Batch 1) ──
  {id:'sp-tuscan-chicken', cat:'plates', diet:'meat', protein:'chicken', name:'Creamy Tuscan Chicken', emoji:'🐔', cuisine:'Italian-inspired', time:30, costPP:45,
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
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'onion',pp:70,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'potato',pp:80,u:'g'},{n:'white loaf',pp:350,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb, then soften the onion with the garlic, ginger and curry powder.','Add the tomato and a little water and simmer until it forms a thick masala.','Add the potato and cook gently until the lamb is tender and the gravy is rich, about 45 minutes.','Hollow out a half-loaf of bread to make a bowl.','Spoon the curry into the bread and top with the soft centre you pulled out.'],
    tip:'Keep the curry thick so it does not soak through the bread too fast.',
    nutrition:{kcal:680,protein_g:32,carbs_g:70,fat_g:30}, storage:'Make the curry ahead (keeps 3 days, freezes well) and fill the bread fresh.'},
  {id:'sp-steak-bites-mash', cat:'plates', diet:'meat', protein:'beef', name:'Garlic Butter Steak Bites & Mash', emoji:'🥩', cuisine:'Steakhouse', time:30, costPP:48,
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
  {id:'sp-beef-stroganoff', cat:'plates', diet:'meat', protein:'beef', name:'Mushroom Beef Stroganoff', emoji:'🍄', cuisine:'Russian-inspired', time:35, costPP:42,
    feel:'Tender strips of beef and mushrooms in a creamy, tangy sauce over ribbons of pasta or rice.',
    ingredients:[{n:'beef strips',pp:140,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'sour cream',pp:40,u:'ml'},{n:'beef stock',pp:100,u:'ml'},{n:'paprika',pp:3,u:'g'},{n:'flour',pp:8,u:'g'},{n:'tagliatelle or spaghetti',pp:75,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Sear the beef strips quickly over high heat and set aside.','Soften the onion and mushrooms, dust with flour and paprika, then pour in the stock to make a sauce.','Stir in the sour cream and return the beef, warming through gently without boiling.','Serve over tagliatelle or rice.'],
    tip:'Add the beef back at the very end so it stays tender — long cooking toughens the strips.',
    nutrition:{kcal:560,protein_g:34,carbs_g:44,fat_g:28}, storage:'Keeps 2 days; reheat gently so the cream does not split.'},
  {id:'sp-chicken-a-la-king', cat:'plates', diet:'meat', protein:'chicken', name:'Chicken a la King', emoji:'🥘', cuisine:'Retro classic', time:30, costPP:32,
    feel:'Creamy chicken, mushrooms and peppers in a velvety sauce — a retro favourite that never goes out of style.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'mushrooms',pp:60,u:'g'},{n:'green pepper',pp:40,u:'g'},{n:'onion',pp:40,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'chicken stock',pp:120,u:'ml'},{n:'flour',pp:12,u:'g'},{n:'butter',pp:18,u:'g'},{n:'rice',pp:75,u:'g'}],
    method:['Soften the onion, mushrooms and pepper in the butter.','Stir in the flour, then slowly add the stock to make a smooth sauce.','Add the cooked diced chicken and the cream and simmer until thick and velvety.','Serve over rice or on hot buttered toast.'],
    tip:'A spoon of sherry or a squeeze of lemon brightens the whole dish.',
    nutrition:{kcal:500,protein_g:32,carbs_g:38,fat_g:24}, storage:'Keeps 2 days; loosen with milk when reheating.'},
  {id:'sp-crispy-salmon', cat:'plates', diet:'meat', protein:'fish', name:'Crispy Salmon, Lemon Butter', emoji:'🐟', cuisine:'Global', time:25, costPP:117,
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
  {id:'sp-beef-broccoli', cat:'plates', diet:'meat', protein:'beef', name:'Beef & Broccoli Stir-fry Bowl', emoji:'🥦', cuisine:'Chinese-inspired', time:25, costPP:40,
    feel:'Glossy strips of beef and crisp-tender broccoli in a savoury stir-fry sauce — faster than the takeaway.',
    ingredients:[{n:'beef strips',pp:140,u:'g'},{n:'broccoli',pp:100,u:'g'},{n:'soy sauce',pp:20,u:'ml'},{n:'garlic',pp:8,u:'g'},{n:'ginger',pp:5,u:'g'},{n:'cornflour',pp:6,u:'g'},{n:'rice',pp:75,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Toss the beef strips in a little cornflour and sear quickly in a hot wok, then set aside.','Stir-fry the broccoli with the garlic and ginger until bright green.','Add the soy and a splash of water, return the beef and toss until everything is coated in a glossy sauce.','Serve over steamed rice.'],
    tip:'High heat and a hot pan are everything — stir-fry fast so the beef stays tender and the broccoli stays crunchy.',
    nutrition:{kcal:520,protein_g:32,carbs_g:58,fat_g:18}, storage:'Keeps 2 days; reheat in a hot pan to keep the texture.'},
  {id:'sp-vetkoek-mince', cat:'plates', diet:'meat', protein:'beef', name:'Vetkoek & Curried Mince', emoji:'🫓', cuisine:'South African', time:50, costPP:25,
    feel:'Golden fried vetkoek split and stuffed with rich curried mince — an SA classic that feeds a family for next to nothing.',
    ingredients:[{n:'cake flour',pp:80,u:'g'},{n:'instant yeast',pp:2,u:'g'},{n:'sugar',pp:5,u:'g'},{n:'beef mince',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'oil for frying',pp:30,u:'ml'}],
    method:['Mix the flour, yeast, sugar, a pinch of salt and warm water into a soft dough and let it rise until doubled, about 40 minutes.','Brown the mince with the onion and curry powder, add the tomato and simmer into a thick curry.','Shape the dough into balls and deep-fry in medium-hot oil until golden and cooked through.','Split the warm vetkoek and spoon in the curried mince.'],
    tip:'Keep the oil at a steady medium heat so the vetkoek cooks through without burning outside.',
    nutrition:{kcal:560,protein_g:22,carbs_g:64,fat_g:24}, storage:'Mince keeps 3 days; vetkoek best fresh and warm.'},

  // ── 🍝 PASTA & PIZZA — added 22 Jun (Supper build, Batch 2) ──
  {id:'sp-mac-cheese', cat:'pastapizza', diet:'veg', protein:'veg', name:'Creamy Mac & Cheese', emoji:'🧀', cuisine:'American', time:30, costPP:27,
    feel:'Elbow macaroni smothered in a silky three-cheese sauce, baked until golden and bubbling.',
    ingredients:[{n:'macaroni',pp:90,u:'g'},{n:'cheddar',pp:50,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'flour',pp:20,u:'g'},{n:'mozzarella',pp:20,u:'g'},{n:'mustard powder',pp:1,u:'g'}],
    method:['Cook the macaroni until just tender and drain.','Melt the butter, stir in the flour, then whisk in the milk to make a smooth white sauce.','Off the heat, stir in the cheddar and mustard until glossy.','Fold through the macaroni, top with mozzarella and grill or bake until golden and bubbling.'],
    tip:'A pinch of mustard powder makes the cheese taste cheesier without adding heat.',
    nutrition:{kcal:560,protein_g:22,carbs_g:58,fat_g:26}, storage:'Keeps 3 days; reheat with a splash of milk.'},
  {id:'sp-spag-meatballs', cat:'pastapizza', diet:'meat', protein:'beef', name:'Spaghetti & Meatballs', emoji:'🍝', cuisine:'Italian-American', time:40, costPP:43,
    feel:'Tender beef meatballs simmered in a rich tomato sauce, piled on spaghetti and showered with parmesan.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'spaghetti',pp:80,u:'g'},{n:'tomato',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'breadcrumbs',pp:15,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Mix the mince with breadcrumbs, garlic and seasoning and roll into balls.','Brown the meatballs all over, then set aside.','Soften the onion, add the tomato and simmer into a rich sauce.','Return the meatballs and simmer until cooked through.','Serve over spaghetti with parmesan.'],
    tip:'Brown the meatballs first for flavour, then let them finish cooking gently in the sauce.',
    nutrition:{kcal:600,protein_g:32,carbs_g:62,fat_g:24}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-chicken-alfredo', cat:'pastapizza', diet:'meat', protein:'chicken', name:'Creamy Chicken Alfredo', emoji:'🍝', cuisine:'Italian-American', time:30, costPP:48,
    feel:'Silky parmesan cream sauce clinging to fettuccine with golden strips of chicken.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'fettuccine',pp:80,u:'g'},{n:'cream',pp:60,u:'ml'},{n:'parmesan',pp:25,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Cook the fettuccine until just tender.','Sear the sliced chicken in butter until golden, then add the garlic.','Pour in the cream and parmesan and simmer into a glossy sauce.','Toss the pasta through with a splash of pasta water to loosen.','Serve at once with extra parmesan.'],
    tip:'A ladle of starchy pasta water makes the sauce silky and helps it cling.',
    nutrition:{kcal:640,protein_g:38,carbs_g:56,fat_g:30}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-tuna-pasta-bake', cat:'pastapizza', diet:'meat', protein:'fish', name:'Cheesy Tuna Pasta Bake', emoji:'🐟', cuisine:'Family classic', time:35, costPP:32,
    feel:'Creamy tuna and pasta under a golden cheese crust, the ultimate pantry-friendly comfort bake.',
    ingredients:[{n:'pasta',pp:90,u:'g'},{n:'tinned tuna',pp:80,u:'g'},{n:'milk',pp:200,u:'ml'},{n:'cheddar',pp:40,u:'g'},{n:'sweetcorn',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Cook the pasta until just tender.','Make a white sauce with the butter, flour and milk, then stir in half the cheese.','Fold in the drained tuna, corn and pasta.','Tip into a dish, top with the rest of the cheese and bake at 180C until golden and bubbling.'],
    tip:'A handful of crushed crisps or breadcrumbs on top gives extra crunch.',
    nutrition:{kcal:540,protein_g:30,carbs_g:60,fat_g:20}, storage:'Keeps 3 days; reheats well.'},
  {id:'sp-margherita-pizza', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Rocket','Chilli oil'], diet:'veg', protein:'veg', name:'Margherita Pizza', emoji:'🍕', cuisine:'Italian', time:30, costPP:46,
    feel:'A blistered base, bright tomato, melting mozzarella and fresh basil — the pizza that proves simple is hardest to beat.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Get your oven roaring — slide a pizza stone, steel or upturned baking tray in and preheat it as hot as the oven goes (240 to 260°C) for at least 30 minutes.','Stretch the base by hand on a floured peel or sheet of baking paper; never roll it, which crushes out the air.','Spread a thin layer of passata mixed with the crushed garlic — thin is the secret, too much sauce steams the base soggy.','Tear over the mozzarella, leaving a clear border for the crust to puff.','Cook it two ways — WOOD-FIRED (~400°C+): slide it on and bake 60 to 90 seconds, turning once, until the crust is leopard-spotted. HOME OVEN: bake 8 to 12 minutes on the preheated stone until the crust is blistered and the cheese bubbles.','Finish with torn fresh basil and a drizzle of olive oil — basil after baking, so it stays fragrant and green.'],
    tip:'Make your own base (see Pizza Dough) and sauce (see Napoletana) in Sides & Basics — both freeze, so a stash means pizza in minutes. And pizza wants the HOTTEST oven you have: 180°C only gives a pale, soft base. Save moderate heat for thick pan pizzas; for a crisp thin crust, max it out and preheat a stone or tray.',
    didYouKnow:'The Margherita was supposedly built in 1889 for Queen Margherita of Savoy, its tomato-red, mozzarella-white and basil-green echoing the new Italian flag. Whether the tale is exact or polished over time, the colour-coded patriotism stuck — and it remains the benchmark every pizzaiolo is judged by.',
    nutrition:{kcal:600,protein_g:24,carbs_g:74,fat_g:24}, storage:'Best eaten fresh and hot. Reheat leftovers in a hot dry pan or air-fryer, never the microwave, to keep the base crisp.',
    versions:[
      {name:'Classic',icon:'🍕',default:true,time:30,costPP:46,nutrition:{kcal:600,protein_g:24,carbs_g:74,fat_g:24},feel:'Tomato, mozzarella, basil — the benchmark.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'garlic',pp:4,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat a stone or tray as hot as the oven goes for 30 minutes.','Hand-stretch the base; spread thinly with garlicky passata.','Tear over the mozzarella, leaving a clear crust border.','WOOD-FIRED: 60 to 90 sec turning once. HOME OVEN (240 to 260°C): 8 to 12 minutes until blistered and bubbling.','Finish with fresh basil and a drizzle of olive oil.']},
      {name:'Bufala',icon:'🧀',time:30,costPP:47,nutrition:{kcal:620,protein_g:25,carbs_g:74,fat_g:26},feel:'Made with creamy buffalo mozzarella, added near the end so it stays soft and milky rather than oily.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'buffalo mozzarella',pp:70,u:'g'},{n:'fresh basil',pp:5,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray screaming hot.','Stretch the base and spread thinly with passata.','Bake the base with just the sauce first for a few minutes.','Tear over the buffalo mozzarella and return briefly until just melted — WOOD-FIRED 30 sec / HOME OVEN 3 to 4 minutes.','Finish with basil and olive oil.']},
      {name:'Marinara (no cheese)',icon:'🌿',time:25,costPP:27,nutrition:{kcal:440,protein_g:11,carbs_g:72,fat_g:12},feel:'The original Neapolitan pizza — no cheese at all, just tomato, garlic, oregano and oil. Naturally vegan and surprisingly moreish.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:70,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:10,u:'ml'}],method:['Preheat the stone or tray as hot as possible.','Stretch the base; spread with passata, sliced garlic and oregano.','Drizzle generously with olive oil.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 10 minutes until the crust chars at the edges.','Drizzle with a little more oil to serve.']},
      {name:'Rocket & parmesan',icon:'🥬',time:30,costPP:61,nutrition:{kcal:640,protein_g:28,carbs_g:74,fat_g:28},feel:'A classic Margherita finished, off the heat, with a handful of peppery rocket and shavings of parmesan — fresh against the hot cheese.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'rocket',pp:15,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Build and bake a classic Margherita until blistered and bubbling.','The moment it comes out, pile on the fresh rocket.','Shave over the parmesan and drizzle with olive oil.','Eat at once, while the rocket is just wilting from the heat.']}
    ]},
  {id:'sp-pepperoni-pizza', cat:'pastapizza', goesWith:['Green salad','Garlic bread','Chilli flakes','Ranch dip'], diet:'meat', protein:'pork', name:'Pepperoni Pizza', emoji:'🍕', cuisine:'Italian-American', time:30, costPP:65,
    feel:'Crisp base, gooey cheese and curls of spicy pepperoni crisping into little cups of fat — the pizza everyone reaches for first.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:40,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base; spread thinly with passata and a pinch of oregano.','Scatter over the mozzarella, then arrange the pepperoni on top — on top, not buried, so the edges crisp.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is golden and the pepperoni edges curl and crisp.','Slice and serve hot, with chilli flakes for those who want them.'],
    tip:'Make your own base (Pizza Dough) and sauce (Napoletana) in Sides & Basics for a fraction of the cost. Letting the pepperoni crisp into little cups is half the joy — keep it on top of the cheese, not under it. And remember: pizza wants the hottest oven you have, not 180°C.',
    didYouKnow:'Pepperoni is an American invention, not an Italian one — it was created by Italian-American butchers in early-1900s New York. Ask for "pepperoni" in Italy and you will be handed bell peppers ("peperoni"), not spicy sausage. The cupping, crisping kind beloved on pizza is a specific natural-casing American salami.',
    nutrition:{kcal:680,protein_g:30,carbs_g:74,fat_g:32}, storage:'Best fresh. Reheat in a hot dry pan or air-fryer to re-crisp the base.',
    versions:[
      {name:'Classic',icon:'🍕',default:true,time:30,costPP:65,nutrition:{kcal:680,protein_g:30,carbs_g:74,fat_g:32},feel:'Pepperoni, mozzarella, tomato — the one everyone orders.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:40,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray screaming hot.','Stretch the base; spread thinly with oregano passata.','Scatter mozzarella, then pepperoni on top.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes until the pepperoni cups and crisps.','Slice and serve hot.']},
      {name:'Diavola (spicy)',icon:'🌶️',time:30,costPP:67,nutrition:{kcal:700,protein_g:31,carbs_g:74,fat_g:34},feel:'Turned up to fiery — extra chilli and a hit of heat through the sauce for the spice-lovers.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:45,u:'g'},{n:'chilli',pp:4,u:'g'},{n:'chilli flakes',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray as hot as possible.','Spread the base with passata spiked with chilli flakes.','Top with mozzarella, pepperoni and sliced fresh chilli.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with a little chilli oil if you dare.']},
      {name:'Pepperoni & mushroom',icon:'🍄',time:30,costPP:67,nutrition:{kcal:700,protein_g:31,carbs_g:76,fat_g:33},feel:'Earthy mushrooms alongside the spicy pepperoni — a little more substantial, a little more grown-up.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:35,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray hot.','Spread thinly with oregano passata; scatter mozzarella.','Arrange the thinly sliced mushrooms and pepperoni on top.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until the mushrooms are golden and the pepperoni crisp.','Slice and serve.']},
      {name:'Meat feast',icon:'🥩',time:30,costPP:71,nutrition:{kcal:780,protein_g:38,carbs_g:74,fat_g:42},feel:'Pepperoni, salami and ham piled together — for when one meat simply will not do.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'pepperoni',pp:30,u:'g'},{n:'salami',pp:25,u:'g'},{n:'ham',pp:30,u:'g'},{n:'oregano',pp:1,u:'g'}],method:['Preheat the stone or tray screaming hot.','Spread thinly with oregano passata; scatter mozzarella.','Layer on the pepperoni, salami and torn ham.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until crisp and bubbling.','Slice and serve hot.']}
    ]},
  {id:'sp-prawn-linguine', cat:'pastapizza', diet:'meat', protein:'fish', name:'Garlic Prawn Linguine', emoji:'🦐', cuisine:'Italian', time:25, costPP:57,
    feel:'Juicy prawns tossed with garlic, chilli, lemon and linguine — a coastal supper in 25 minutes.',
    ingredients:[{n:'prawns',pp:120,u:'g'},{n:'linguine',pp:80,u:'g'},{n:'garlic',pp:10,u:'g'},{n:'chilli',pp:2,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'fresh parsley',pp:4,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'butter',pp:10,u:'g'}],
    method:['Cook the linguine until just tender.','Sizzle the garlic and chilli in oil and butter, then add the prawns and cook until just pink.','Add a squeeze of lemon and a splash of pasta water.','Toss the linguine through with the parsley and serve.'],
    tip:'Do not overcook the prawns — they are done the moment they turn pink and curl.',
    nutrition:{kcal:560,protein_g:32,carbs_g:64,fat_g:18}, storage:'Best fresh.'},
  {id:'sp-cannelloni', cat:'pastapizza', diet:'veg', protein:'veg', name:'Spinach & Ricotta Cannelloni', emoji:'🥬', cuisine:'Italian', time:50, costPP:60,
    feel:'Pasta tubes stuffed with creamy spinach and ricotta, blanketed in tomato sauce and melted cheese.',
    ingredients:[{n:'cannelloni tubes',pp:90,u:'g'},{n:'ricotta',pp:80,u:'g'},{n:'baby spinach',pp:60,u:'g'},{n:'tomato passata',pp:120,u:'g'},{n:'mozzarella',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'parmesan',pp:15,u:'g'}],
    method:['Wilt the spinach, squeeze dry and mix with the ricotta and parmesan.','Spoon the filling into the cannelloni tubes.','Lay them in a dish over a little passata, cover with the rest of the passata and the mozzarella.','Bake at 180C until bubbling and the pasta is tender, about 30 minutes.'],
    tip:'Use a piping bag or a small spoon and a steady hand to fill the tubes without splitting them.',
    nutrition:{kcal:520,protein_g:24,carbs_g:56,fat_g:22}, storage:'Keeps 3 days; freezes well before baking.'},
  {id:'sp-pesto-chicken-pasta', cat:'pastapizza', diet:'meat', protein:'chicken', name:'Pesto Chicken Pasta', emoji:'🌿', cuisine:'Italian-inspired', time:25, costPP:54,
    feel:'Fragrant basil pesto coating pasta with golden chicken and bursts of cherry tomato.',
    ingredients:[{n:'chicken breast',pp:130,u:'g'},{n:'pasta',pp:80,u:'g'},{n:'basil pesto',pp:30,u:'g'},{n:'cherry tomatoes',pp:60,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'olive oil',pp:10,u:'ml'}],
    method:['Cook the pasta until just tender, saving a little water.','Sear the sliced chicken in oil until golden.','Add the cherry tomatoes and warm until they soften.','Toss through the pasta, pesto and a splash of pasta water to make it glossy.','Finish with parmesan.'],
    tip:'Stir the pesto in off the heat so it stays fresh and green rather than dulling.',
    nutrition:{kcal:580,protein_g:36,carbs_g:54,fat_g:26}, storage:'Keeps 2 days; lovely cold as a pasta salad.'},
  {id:'sp-cajun-pasta', cat:'pastapizza', diet:'meat', protein:'chicken', name:'One-Pan Cajun Chicken & Sausage Pasta', emoji:'🌶️', cuisine:'Cajun', time:35, costPP:32,
    feel:'Smoky Cajun chicken and sausage in a creamy tomato sauce with pasta cooked right in the pan.',
    ingredients:[{n:'chicken breast',pp:100,u:'g'},{n:'sausage',pp:50,u:'g'},{n:'pasta',pp:80,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'Cajun spice',pp:6,u:'g'},{n:'chicken stock',pp:200,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the chicken and sliced sausage with the Cajun spice, then set aside.','Soften the onion, add the tomato, stock and pasta and simmer until the pasta is tender and the liquid reduced.','Stir in the cream and return the meat.','Simmer briefly into a glossy one-pan sauce.'],
    tip:'Cooking the pasta in the sauce means one pan and a richer flavour — just stir so it does not stick.',
    nutrition:{kcal:620,protein_g:34,carbs_g:64,fat_g:26}, storage:'Keeps 3 days; loosen with stock when reheating.'},
  {id:'sp-carbonara', cat:'pastapizza', diet:'meat', protein:'pork', name:'Spaghetti Carbonara', emoji:'🥓', cuisine:'Italian', time:25, costPP:49,
    feel:'Silky egg-and-parmesan sauce coating spaghetti with crisp bacon — no cream, just the real thing.',
    ingredients:[{n:'spaghetti',pp:90,u:'g'},{n:'bacon',pp:60,u:'g'},{n:'eggs',pp:1.5,u:'each'},{n:'parmesan',pp:30,u:'g'},{n:'black pepper',pp:2,u:'g'},{n:'garlic',pp:4,u:'g'}],
    method:['Cook the spaghetti until just tender, saving a mug of pasta water.','Fry the chopped bacon until crisp.','Beat the eggs with the parmesan and plenty of black pepper.','Off the heat, toss the hot drained pasta with the bacon, then the egg mixture, loosening with pasta water into a silky sauce.','Serve at once.'],
    tip:'Take the pan off the heat before adding the eggs, or you get scrambled egg instead of a silky sauce.',
    nutrition:{kcal:620,protein_g:30,carbs_g:64,fat_g:28}, storage:'Best fresh, eat straight away.'},
  {id:'sp-feta-tomato-pasta', cat:'pastapizza', diet:'veg', protein:'veg', name:'Baked Feta & Tomato Pasta', emoji:'🧀', cuisine:'Mediterranean', time:35, costPP:40,
    feel:'A whole block of feta baked with sweet cherry tomatoes until creamy, then tossed into pasta — the famous viral one.',
    ingredients:[{n:'feta',pp:70,u:'g'},{n:'cherry tomatoes',pp:120,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olive oil',pp:15,u:'ml'},{n:'fresh basil',pp:4,u:'g'}],
    method:['Put the feta in the middle of a dish, surround with cherry tomatoes and garlic, drizzle with oil and bake at 200C until the tomatoes burst and the feta is soft, about 25 minutes.','Cook the pasta meanwhile.','Mash the feta and tomatoes into a creamy sauce.','Fold through the pasta with fresh basil.'],
    tip:'Let the tomatoes blister and collapse — that sweetness is what makes the sauce.',
    nutrition:{kcal:540,protein_g:18,carbs_g:66,fat_g:22}, storage:'Keeps 2 days; nice cold too.'},
  {id:'sp-pumpkin-sage-pasta', cat:'pastapizza', diet:'veg', protein:'veg', name:'Creamy Pumpkin & Sage Rigatoni', emoji:'🎃', cuisine:'Italian-inspired', time:35, costPP:36,
    feel:'Velvety roasted pumpkin and crispy sage in a creamy sauce — autumn comfort in a bowl.',
    ingredients:[{n:'pumpkin',pp:150,u:'g'},{n:'rigatoni',pp:90,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'fresh sage',pp:3,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'parmesan',pp:20,u:'g'},{n:'butter',pp:15,u:'g'}],
    method:['Roast the cubed pumpkin until soft and caramelised, then mash or blend with a little pasta water into a smooth puree.','Crisp the sage in the butter.','Toss the cooked rigatoni with the pumpkin puree, cream and parmesan, loosening with pasta water.','Finish with the crispy sage.'],
    tip:'Roasting the pumpkin rather than boiling it gives a deeper, sweeter flavour.',
    nutrition:{kcal:520,protein_g:16,carbs_g:70,fat_g:20}, storage:'Keeps 2 days.'},
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
    method:['Soften the garlic in olive oil, add the passata and a few torn basil leaves, and simmer 10 minutes into a bright sauce.','Boil the gnocchi until they float, then drain and fold into the sauce.','Tip into an oven dish, tear over the mozzarella and scatter with parmesan.','Bake at 200°C until bubbling and the top is golden and crisp, about 15 minutes.','Finish with fresh basil and serve straight from the dish.'],
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
    method:['Finely chop the onion, carrot and celery (the soffritto) and soften slowly in oil and a little butter without colouring, about 10 minutes.','Add the beef and pork mince and brown well, breaking up every lump until deeply coloured.','Pour in the red wine and let it cook away, then add the passata and a splash of water.','Simmer as gently as you can, partly covered, for 1½ to 2 hours, topping up with water — the longer and slower, the better. Stir in the cream near the end for silkiness.','Cook the fresh tagliatelle for just 2 to 3 minutes, then toss it through the ragù with a little pasta water and the parmesan so the sauce coats every strand.'],
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
  {id:'sp-regina-pizza', cat:'pastapizza', goesWith:['Green salad','Garlic bread'], diet:'meat', protein:'pork', name:'Regina Pizza (Ham & Mushroom)', emoji:'🍕', cuisine:'Italian', time:30, costPP:52,
    feel:'Ham and mushroom on tomato and mozzarella — the timeless pizzeria classic that has never gone out of style.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base and spread thinly with oregano passata.','Scatter over the mozzarella, then the torn ham and thinly sliced mushrooms.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is crisp, the mushrooms golden and the cheese bubbling.','Slice and serve hot.'],
    tip:'Slice the mushrooms thinly so they cook through and crisp rather than steam and weep water onto the base. Make your own base and sauce in Sides & Basics to bring the cost right down.',
    didYouKnow:'"Regina" means queen — and like the Margherita, this combination is said to honour Italian royalty. Ham-and-mushroom became the default "fancy" pizza across post-war Europe, the standard against which a pizzeria was quietly judged. In South Africa it is still one of the most-ordered pizzas of all.',
    nutrition:{kcal:640,protein_g:34,carbs_g:74,fat_g:24}, storage:'Best fresh; reheat in a hot pan or air-fryer.',
    versions:[
      {name:'Regina',icon:'🍕',default:true,time:30,costPP:52,nutrition:{kcal:640,protein_g:34,carbs_g:74,fat_g:24},feel:'Ham and mushroom — the queen of classics.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'mushrooms',pp:50,u:'g'},{n:'oregano',pp:1,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with oregano passata.','Top with mozzarella, ham and thinly sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Slice and serve hot.']},
      {name:'Hawaiian',icon:'🍍',time:30,costPP:48,nutrition:{kcal:660,protein_g:33,carbs_g:80,fat_g:23},feel:'Ham and pineapple — endlessly argued over, eternally ordered. Sweet, salty and unapologetic.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:45,u:'g'},{n:'pineapple',pp:60,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with passata.','Top with mozzarella, ham and well-drained pineapple chunks (drain them well or they water the base down).','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes until the pineapple edges caramelise.','Slice and serve.']},
      {name:'Ham, bacon & mushroom',icon:'🥓',time:30,costPP:57,nutrition:{kcal:720,protein_g:38,carbs_g:74,fat_g:32},feel:'Double the smoke — ham and crispy bacon with earthy mushrooms.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'ham',pp:35,u:'g'},{n:'bacon',pp:30,u:'g'},{n:'mushrooms',pp:45,u:'g'}],method:['Preheat the stone or tray hot; crisp the bacon first.','Stretch the base; spread thinly with passata.','Top with mozzarella, ham, bacon and sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Slice and serve hot.']},
      {name:'Capricciosa',icon:'🫒',time:30,costPP:54,nutrition:{kcal:700,protein_g:36,carbs_g:74,fat_g:30},feel:'The "capricious" pizza — ham, mushroom, olives and a baked egg cracked into the centre. A whole meal on a base.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:60,u:'g'},{n:'ham',pp:35,u:'g'},{n:'mushrooms',pp:40,u:'g'},{n:'black olives',pp:20,u:'g'},{n:'large eggs',pp:1,u:'egg'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with passata and scatter mozzarella.','Top with ham, mushrooms and olives, leaving a clear space in the centre.','Crack the egg into the centre, then bake — WOOD-FIRED 90 sec / HOME OVEN (240 to 260°C) 9 to 12 minutes until the white is set but the yolk still soft.','Slice through the egg so it runs over each piece.']}
    ]},
  {id:'sp-mediterranean-pizza', cat:'pastapizza', goesWith:['Green salad','Tzatziki','Garlic bread'], diet:'veg', protein:'veg', name:'Mediterranean Veg Pizza', emoji:'🍕', cuisine:'Mediterranean', time:30, costPP:54,
    feel:'Feta, peppers, olives and red onion on a crisp base — sunshine food, proof that a meat-free pizza can be the best one on the table.',
    ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:40,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'black olives',pp:25,u:'g'}],
    method:['Preheat a pizza stone, steel or upturned tray as hot as the oven goes (240 to 260°C) for 30 minutes.','Hand-stretch the base and spread thinly with passata.','Scatter over the mozzarella, then the sliced peppers, red onion and olives.','Crumble over the feta — it holds its shape and goes lightly golden.','Cook it two ways — WOOD-FIRED (~400°C+): 60 to 90 seconds, turning once. HOME OVEN: 8 to 12 minutes until the crust is crisp and the veg lightly charred.','Finish with a drizzle of olive oil and fresh herbs if you have them.'],
    tip:'Slice the vegetables thinly so they soften in the short bake. Make your own base and Napoletana sauce in Sides & Basics. As always, the hotter the oven the better — 180°C will leave the base pale and soft.',
    didYouKnow:'Olives and the trees that bear them are among the oldest cultivated foods on earth — some living olive trees in the Mediterranean are over 1,000 years old, and a few are claimed to be 2,000 or more. The bitter raw olive is inedible; every olive you eat has been cured in brine, oil or salt to draw the bitterness out.',
    nutrition:{kcal:580,protein_g:22,carbs_g:74,fat_g:24}, storage:'Best fresh; lovely cold the next day too.',
    versions:[
      {name:'Mediterranean',icon:'🫒',default:true,time:30,costPP:54,nutrition:{kcal:580,protein_g:22,carbs_g:74,fat_g:24},feel:'Feta, peppers, olives, red onion — sunshine on a base.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:40,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'red onion',pp:30,u:'g'},{n:'black olives',pp:25,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with passata and scatter mozzarella.','Top with peppers, red onion and olives; crumble over feta.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with olive oil and fresh herbs.']},
      {name:'Funghi (mushroom)',icon:'🍄',time:30,costPP:51,nutrition:{kcal:560,protein_g:22,carbs_g:74,fat_g:22},feel:'A simple, earthy mushroom-and-garlic pizza — let good mushrooms be the star.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:65,u:'g'},{n:'mushrooms',pp:80,u:'g'},{n:'garlic',pp:5,u:'g'},{n:'fresh parsley',pp:3,u:'g'}],method:['Preheat the stone or tray hot.','Stretch the base; spread thinly with garlicky passata.','Top with mozzarella and a generous layer of thinly sliced mushrooms.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 9 to 12 minutes until the mushrooms are golden.','Finish with chopped parsley.']},
      {name:'Four cheese',icon:'🧀',time:30,costPP:62,nutrition:{kcal:680,protein_g:30,carbs_g:72,fat_g:34},feel:'Quattro formaggi — mozzarella, feta, parmesan and blue cheese melted together, no sauce needed. Rich and unashamed.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'mozzarella',pp:55,u:'g'},{n:'feta',pp:30,u:'g'},{n:'parmesan',pp:15,u:'g'},{n:'blue cheese',pp:25,u:'g'},{n:'olive oil',pp:8,u:'ml'}],method:['Preheat the stone or tray hot.','Stretch the base; brush lightly with olive oil instead of sauce.','Scatter over the mozzarella and feta, dot with blue cheese and shave over parmesan.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 11 minutes until molten and golden.','A drizzle of honey over the top is a wonderful finish, if you like.']},
      {name:'Roast veg',icon:'🌶️',time:40,costPP:45,nutrition:{kcal:560,protein_g:20,carbs_g:74,fat_g:22},feel:'Peppers, courgette and brinjal roasted first until sweet and smoky, then piled on — deeper and richer than raw veg.',ingredients:[{n:'pizza base',pp:1,u:'each'},{n:'tomato passata',pp:60,u:'g'},{n:'mozzarella',pp:55,u:'g'},{n:'green pepper',pp:35,u:'g'},{n:'courgette',pp:35,u:'g'},{n:'brinjal',pp:35,u:'g'},{n:'olive oil',pp:10,u:'ml'}],method:['Toss the sliced peppers, courgette and brinjal in olive oil and roast at 220°C until soft and caramelised; this can be done ahead.','Preheat the stone or tray hot.','Stretch the base; spread thinly with passata and scatter mozzarella.','Pile on the roast veg.','WOOD-FIRED: 60 to 90 sec. HOME OVEN (240 to 260°C): 8 to 12 minutes.','Finish with olive oil and herbs.']}
    ]},
  {id:'sp-lamb-bredie', cat:'stewscurries', diet:'meat', protein:'lamb', name:'Lamb Tomato Bredie', emoji:'🍲', cuisine:'South African', time:120, costPP:47,
    feel:'Slow-braised lamb in a rich tomato and onion stew — an Afrikaans Sunday classic that only gets better with time.',
    ingredients:[{n:'lamb',pp:150,u:'g'},{n:'tomato',pp:150,u:'g'},{n:'onion',pp:80,u:'g'},{n:'potato',pp:100,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'beef stock',pp:150,u:'ml'},{n:'sugar',pp:3,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Brown the lamb in batches and set aside.','Soften the onion, then add the tomato, garlic and a pinch of sugar and cook into a thick base.','Return the lamb with the stock, cover and simmer gently for 1.5 hours until tender.','Add the potato for the last 30 minutes and cook until the lamb is falling apart and the gravy is rich.'],
    tip:'Low and slow is everything — the bredie should barely bubble.',
    nutrition:{kcal:520,protein_g:34,carbs_g:30,fat_g:28}, storage:'Keeps 3 days, even better the next day; freezes well.'},
  {id:'sp-butter-chicken', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Butter Chicken', emoji:'🐔', cuisine:'Indian', time:45, costPP:33,
    feel:'Tender chicken in a velvety tomato, butter and cream sauce — mild, rich and utterly moreish.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'butter',pp:25,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:6,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'}],
    method:['Marinate the chicken in yoghurt, ginger-garlic and half the masala for 30 minutes, then sear and set aside.','Soften the onion in butter, add the tomato and remaining masala and simmer into a smooth sauce (blend for silkiness).','Return the chicken, stir in the cream and simmer gently until cooked through and glossy.','Serve with rice or naan.'],
    tip:'Blending the sauce before adding the cream gives that signature silky texture.',
    nutrition:{kcal:560,protein_g:36,carbs_g:16,fat_g:38}, storage:'Keeps 3 days; freezes well without the cream.'},
  {id:'sp-chicken-tikka-masala', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Chicken Tikka Masala', emoji:'🍛', cuisine:'Indian', time:45, costPP:30,
    feel:'Charred spiced chicken in a creamy, fragrant tomato masala — the takeaway favourite made at home.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'cream',pp:40,u:'ml'},{n:'onion',pp:50,u:'g'},{n:'garam masala',pp:7,u:'g'},{n:'ginger-garlic paste',pp:8,u:'g'},{n:'yoghurt',pp:30,u:'ml'},{n:'oil',pp:12,u:'ml'}],
    method:['Marinate the chicken in yoghurt, ginger-garlic and spices, then grill or pan-char until just cooked and set aside.','Soften the onion, add the tomato and masala and simmer into a rich sauce.','Stir in the cream and the charred chicken and warm through.','Finish with coriander and serve with rice.'],
    tip:'Char the marinated chicken hard before saucing — that smoky edge is what sets tikka masala apart.',
    nutrition:{kcal:540,protein_g:38,carbs_g:18,fat_g:32}, storage:'Keeps 3 days.'},
  {id:'sp-chicken-tinga', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Mexican Chicken Tinga', emoji:'🌮', cuisine:'Mexican', time:35, costPP:25,
    feel:'Smoky shredded chicken in a chipotle-tomato sauce — pile it into tacos, bowls or quesadillas.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'tomato',pp:120,u:'g'},{n:'onion',pp:60,u:'g'},{n:'smoked paprika',pp:5,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'chicken stock',pp:100,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Poach or pan-cook the chicken, then shred.','Blend the tomato, onion, garlic and smoked paprika into a smoky sauce.','Simmer the sauce until thickened, then fold in the shredded chicken and a splash of stock.','Cook until rich and coating, then serve in tacos, bowls or over rice with a dollop of yoghurt.'],
    tip:'Chipotle in adobo gives the truest smoky heat, but smoked paprika and a little chilli works too.',
    nutrition:{kcal:420,protein_g:34,carbs_g:14,fat_g:24}, storage:'Keeps 4 days; freezes brilliantly.'},
  {id:'sp-chorizo-hake-orzo', cat:'stewscurries', diet:'meat', protein:'fish', name:'Spanish Chorizo & Hake Orzo', emoji:'🐟', cuisine:'Spanish', time:40, costPP:55,
    feel:'Smoky chorizo, flaky hake and orzo cooked together in one pan — an impressive midweek showstopper.',
    ingredients:[{n:'hake fillet',pp:120,u:'g'},{n:'chorizo',pp:40,u:'g'},{n:'orzo',pp:80,u:'g'},{n:'tomato',pp:80,u:'g'},{n:'onion',pp:50,u:'g'},{n:'smoked paprika',pp:3,u:'g'},{n:'fish stock',pp:220,u:'ml'},{n:'oil',pp:10,u:'ml'}],
    method:['Fry the sliced chorizo until its oil runs, then soften the onion with the paprika.','Stir in the orzo, tomato and stock and simmer until the orzo is almost tender.','Nestle the hake fillets on top, cover and cook until the fish flakes and the orzo is creamy.','Finish with parsley and lemon.'],
    tip:'Let the chorizo render its smoky oil first — that flavours everything that follows.',
    nutrition:{kcal:560,protein_g:36,carbs_g:58,fat_g:22}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-chicken-cacciatore', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Chicken Cacciatore', emoji:'🍗', cuisine:'Italian', time:50, costPP:32,
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
  {id:'sp-trini-pelau', cat:'stewscurries', diet:'meat', protein:'chicken', name:'Trinidadian Pelau', emoji:'🍚', cuisine:'Caribbean', time:50, costPP:27,
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
  {id:'sp-bombay-egg-potato', cat:'stewscurries', diet:'veg', protein:'veg', name:'Bombay Egg & Potato Curry', emoji:'🥔', cuisine:'Indian', time:35, costPP:20,
    feel:'Soft-boiled eggs and potatoes in a spiced tomato curry — a quick store-cupboard supper full of flavour.',
    ingredients:[{n:'eggs',pp:2,u:'each'},{n:'potato',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'garlic-ginger paste',pp:6,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Boil the eggs and potatoes until just done.','Fry the onion with the curry powder, turmeric and garlic-ginger until fragrant.','Add the tomato and a splash of water and simmer into a sauce.','Add the potatoes and halved eggs and warm through gently. Finish with coriander and serve with rice or roti.'],
    tip:'This is the supper to make when the cupboard looks bare — it is built on pantry staples.',
    nutrition:{kcal:380,protein_g:16,carbs_g:42,fat_g:16}, storage:'Keeps 2 days; add the eggs fresh if you can.'},
  {id:'sp-coconut-chickpea-curry', cat:'stewscurries', diet:'vegan', protein:'veg', name:'Coconut Chickpea Curry', emoji:'🥥', cuisine:'Indian-inspired', time:30, costPP:33,
    feel:'Chickpeas and spinach simmered in a creamy coconut-tomato sauce — a vegan curry that satisfies everyone.',
    ingredients:[{n:'chickpeas',pp:100,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'tomato',pp:80,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'curry powder',pp:6,u:'g'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'oil',pp:12,u:'ml'}],
    method:['Fry the onion with the curry powder and garlic-ginger until fragrant.','Add the tomato and cook into a sauce.','Pour in the coconut milk and chickpeas and simmer until thick and creamy.','Stir in the spinach until wilted and serve with rice or roti.'],
    tip:'A squeeze of lime at the end lifts the whole curry.',
    nutrition:{kcal:400,protein_g:14,carbs_g:44,fat_g:20}, storage:'Keeps 4 days; freezes well; flavours deepen overnight.'},
  {id:'sp-dhal', cat:'stewscurries', diet:'vegan', protein:'veg', name:'Lentil & Spinach Dhal', emoji:'🌱', cuisine:'Indian', time:35, costPP:24,
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
  {id:'sp-moroccan-tagine', cat:'stewscurries', diet:'meat', protein:'lamb', name:'Moroccan Lamb & Apricot Tagine', emoji:'🍑', cuisine:'Moroccan', time:120, costPP:54,
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
  {id:'sp-bobotie', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Classic Bobotie', emoji:'🍛', cuisine:'South African', time:75, costPP:34,
    feel:'Curried mince baked under a golden savoury custard — sweet, spiced and unmistakably South African.',
    ingredients:[{n:'beef mince',pp:150,u:'g'},{n:'bread',pp:15,u:'g'},{n:'milk',pp:60,u:'ml'},{n:'eggs',pp:1,u:'each'},{n:'onion',pp:60,u:'g'},{n:'curry powder',pp:8,u:'g'},{n:'chutney',pp:15,u:'g'},{n:'raisins',pp:15,u:'g'},{n:'turmeric',pp:2,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Soak the bread in some of the milk.','Fry the onion and curry powder, then add the mince, chutney, raisins and soaked bread and cook until rich.','Press into a dish and tuck in bay leaves.','Beat the egg with the remaining milk and turmeric, pour over the top and bake at 180C until the custard is set and golden, about 35 minutes. Serve with yellow rice and chutney.'],
    tip:'The chutney and raisins give bobotie its signature sweet-savoury balance — do not skip them.',
    nutrition:{kcal:520,protein_g:28,carbs_g:36,fat_g:28}, storage:'Keeps 3 days; reheats beautifully.'},
  {id:'sp-pork-belly', cat:'ovenbakes', diet:'meat', protein:'pork', name:'Slow-Roast Pork Belly & Crackling', emoji:'🐖', cuisine:'Global', time:180, costPP:35,
    feel:'Hours of slow roasting give meltingly soft pork under shatteringly crisp crackling.',
    ingredients:[{n:'pork belly',pp:180,u:'g'},{n:'salt',pp:3,u:'g'},{n:'fennel seeds',pp:2,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'onion',pp:60,u:'g'},{n:'apple',pp:50,u:'g'}],
    method:['Score the pork skin, rub with salt and spice and leave uncovered in the fridge to dry.','Roast low at 160C for about 2.5 hours until the meat is tender.','Blast the heat to 230C for the last 20 minutes to crisp the crackling.','Roast the potatoes and onion alongside. Rest, then carve and serve with apple sauce.'],
    tip:'A dry skin is the secret to crackling — pat it bone-dry and salt it well ahead.',
    nutrition:{kcal:680,protein_g:32,carbs_g:28,fat_g:48}, storage:'Keeps 3 days; crackling is best fresh.'},
  {id:'sp-fish-pie', cat:'ovenbakes', diet:'meat', protein:'fish', name:'Creamy Fish Pie', emoji:'🥧', cuisine:'British', time:50, costPP:53,
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
  {id:'sp-moussaka', cat:'ovenbakes', diet:'meat', protein:'lamb', name:'Greek Lamb Moussaka', emoji:'🍆', cuisine:'Greek', time:75, costPP:51,
    feel:'Layers of spiced lamb, soft aubergine and a creamy bechamel, baked golden — Greece on a plate.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'aubergine',pp:120,u:'g'},{n:'potato',pp:100,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'milk',pp:150,u:'ml'},{n:'flour',pp:15,u:'g'},{n:'butter',pp:20,u:'g'},{n:'cheddar',pp:25,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Fry slices of aubergine and potato until golden.','Cook the lamb mince with onion, tomato and a pinch of cinnamon into a rich ragu.','Make a bechamel with the butter, flour and milk.','Layer potato, aubergine and lamb in a dish, top with bechamel and cheese and bake at 180C until golden, about 35 minutes.'],
    tip:'Let it rest 15 minutes before cutting so the layers hold together.',
    nutrition:{kcal:620,protein_g:30,carbs_g:38,fat_g:38}, storage:'Keeps 3 days; better the next day.'},
  {id:'sp-shepherds-pie', cat:'ovenbakes', diet:'meat', protein:'lamb', name:'Shepherd\'s Pie', emoji:'🐑', cuisine:'British', time:60, costPP:48,
    feel:'Savoury lamb mince and veg under a golden mashed-potato crust — true cottage comfort.',
    ingredients:[{n:'lamb mince',pp:140,u:'g'},{n:'potatoes',pp:250,u:'g'},{n:'carrots',pp:60,u:'g'},{n:'frozen peas',pp:50,u:'g'},{n:'onion',pp:50,u:'g'},{n:'beef stock',pp:120,u:'ml'},{n:'flour',pp:8,u:'g'},{n:'butter',pp:20,u:'g'}],
    method:['Brown the lamb with the onion and carrots.','Stir in the flour, then the stock and peas and simmer into a rich gravy.','Spread in a dish and top with buttery mash, roughing up the surface with a fork.','Bake at 190C until the top is golden and crisp.'],
    tip:'Rough up the mash with a fork — those peaks crisp up beautifully in the oven.',
    nutrition:{kcal:560,protein_g:28,carbs_g:48,fat_g:28}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-chicken-bacon-bake', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Loaded Chicken & Bacon Pasta Bake', emoji:'🧀', cuisine:'Family classic', time:45, costPP:44,
    feel:'Creamy chicken, crispy bacon and pasta under a blanket of melted cheese — a guaranteed family win.',
    ingredients:[{n:'chicken breast',pp:120,u:'g'},{n:'bacon',pp:40,u:'g'},{n:'pasta',pp:90,u:'g'},{n:'cream',pp:50,u:'ml'},{n:'cheddar',pp:50,u:'g'},{n:'onion',pp:40,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'chicken stock',pp:100,u:'ml'}],
    method:['Cook the pasta until just tender.','Sear the chicken and crisp the bacon, then soften the onion and garlic.','Add the cream and stock and simmer into a sauce, then fold in the pasta, chicken and bacon.','Tip into a dish, top with cheese and bake at 180C until golden and bubbling.'],
    tip:'Save some crispy bacon to scatter on top after baking for extra crunch.',
    nutrition:{kcal:660,protein_g:38,carbs_g:58,fat_g:32}, storage:'Keeps 3 days; reheats well.'},
  {id:'sp-stuffed-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Creamy Spinach & Feta Stuffed Chicken', emoji:'🐔', cuisine:'Mediterranean', time:40, costPP:46,
    feel:'Chicken breasts stuffed with creamy spinach and feta, baked until juicy and golden.',
    ingredients:[{n:'chicken breast',pp:150,u:'g'},{n:'baby spinach',pp:50,u:'g'},{n:'feta',pp:40,u:'g'},{n:'cream cheese',pp:30,u:'g'},{n:'garlic',pp:6,u:'g'},{n:'olive oil',pp:10,u:'ml'},{n:'baby potatoes',pp:180,u:'g'}],
    method:['Wilt the spinach and mix with the feta, cream cheese and garlic.','Cut a pocket in each chicken breast and stuff with the mixture.','Sear to colour, then bake at 190C with the potatoes until the chicken is cooked through and juicy.','Spoon over the pan juices to serve.'],
    tip:'Secure the pocket with a toothpick so the filling stays put while it bakes.',
    nutrition:{kcal:540,protein_g:44,carbs_g:26,fat_g:30}, storage:'Keeps 2 days.'},
  {id:'sp-thai-peanut-chicken', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Thai Peanut Chicken Casserole', emoji:'🥜', cuisine:'Thai-inspired', time:45, costPP:35,
    feel:'Chicken baked in a creamy coconut-peanut sauce — mild, nutty and a little bit different.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'coconut milk',pp:100,u:'ml'},{n:'peanut butter',pp:25,u:'g'},{n:'rice',pp:75,u:'g'},{n:'red pepper',pp:50,u:'g'},{n:'soy sauce',pp:10,u:'ml'},{n:'garlic-ginger paste',pp:8,u:'g'},{n:'lime',pp:10,u:'g'}],
    method:['Whisk the coconut milk, peanut butter, soy and garlic-ginger into a sauce.','Place the chicken and peppers in a dish, pour over the sauce.','Bake at 180C until the chicken is tender and the sauce thickened, about 35 minutes.','Finish with lime and coriander and serve over rice.'],
    tip:'A squeeze of lime at the end cuts through the richness of the peanut sauce.',
    nutrition:{kcal:620,protein_g:34,carbs_g:56,fat_g:30}, storage:'Keeps 3 days.'},
  {id:'sp-cowboy-bake', cat:'ovenbakes', diet:'meat', protein:'beef', name:'Cowboy Bean & Beef Bake', emoji:'🫘', cuisine:'American', time:50, costPP:40,
    feel:'Smoky beef and beans topped with sliced potato and cheese — hearty, rib-sticking and easy.',
    ingredients:[{n:'beef mince',pp:130,u:'g'},{n:'baked beans',pp:100,u:'g'},{n:'potato',pp:150,u:'g'},{n:'onion',pp:50,u:'g'},{n:'cheddar',pp:40,u:'g'},{n:'smoky spice',pp:5,u:'g'},{n:'tomato',pp:60,u:'g'},{n:'oil',pp:10,u:'ml'}],
    method:['Brown the mince with the onion and smoky spice.','Stir in the tomato and baked beans and simmer briefly.','Tip into a dish and layer thinly sliced potato over the top.','Scatter with cheese and bake at 180C until the potato is tender and the top golden.'],
    tip:'Slice the potatoes thinly so they cook through and crisp at the edges.',
    nutrition:{kcal:580,protein_g:28,carbs_g:54,fat_g:28}, storage:'Keeps 3 days; freezes well.'},
  {id:'sp-honey-mustard-traybake', cat:'ovenbakes', diet:'meat', protein:'chicken', name:'Honey-Mustard Chicken Traybake', emoji:'🍯', cuisine:'Global', time:50, costPP:28,
    feel:'Chicken, potatoes and veg roasted together in a sticky honey-mustard glaze — one tray, no fuss.',
    ingredients:[{n:'chicken thighs',pp:150,u:'g'},{n:'baby potatoes',pp:200,u:'g'},{n:'carrots',pp:80,u:'g'},{n:'honey',pp:15,u:'g'},{n:'wholegrain mustard',pp:12,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'olive oil',pp:12,u:'ml'}],
    method:['Whisk the honey, mustard, garlic and oil into a glaze.','Toss the chicken, potatoes and carrots in the glaze and spread on a tray.','Roast at 200C, turning once, until the chicken is golden and sticky and the veg tender, about 40 minutes.'],
    tip:'Spread everything in a single layer so it roasts and caramelises instead of steaming.',
    nutrition:{kcal:540,protein_g:32,carbs_g:48,fat_g:24}, storage:'Keeps 3 days; great cold in lunchboxes.'},
  {id:'sp-med-baked-fish', cat:'ovenbakes', diet:'meat', protein:'fish', name:'Mediterranean Baked Fish', emoji:'🐟', cuisine:'Mediterranean', time:35, costPP:60,
    feel:'White fish baked over tomatoes, olives and peppers — light, fresh and full of sunshine.',
    ingredients:[{n:'white fish',pp:150,u:'g'},{n:'tomato',pp:100,u:'g'},{n:'red pepper',pp:60,u:'g'},{n:'olives',pp:20,u:'g'},{n:'onion',pp:50,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'olive oil',pp:15,u:'ml'}],
    method:['Soften the onion, pepper and garlic in oil, then add the tomato and olives and cook into a chunky sauce.','Spoon into a dish, lay the fish on top and drizzle with oil and lemon.','Bake at 190C until the fish flakes easily, about 18 minutes.','Serve with crusty bread or couscous.'],
    tip:'Bake the fish on top of the sauce so it stays moist and soaks up the flavour.',
    nutrition:{kcal:420,protein_g:34,carbs_g:18,fat_g:22}, storage:'Best fresh; keeps 1 day.'},
  {id:'sp-halloumi-veg-bake', cat:'ovenbakes', diet:'veg', protein:'veg', name:'Roasted Veg & Halloumi Bake', emoji:'🧀', cuisine:'Mediterranean', time:40, costPP:51,
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
  {id:'sp-buttermilk-chicken', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Crispy Buttermilk Fried Chicken', emoji:'🍗', cuisine:'American', time:75, costPP:28,
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
  {id:'sp-fish-cakes', cat:'friedgrilled', diet:'meat', protein:'fish', name:'Crispy Fish Cakes with Tartare', emoji:'🐟', cuisine:'British', time:40, costPP:52,
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
  {id:'sp-chicken-schnitzel', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Crunchy Chicken Schnitzel', emoji:'🐔', cuisine:'Global', time:30, costPP:27,
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
  {id:'sp-peri-peri-chicken', cat:'friedgrilled', diet:'meat', protein:'chicken', name:'Peri-Peri Flame-Grilled Chicken', emoji:'🌶️', cuisine:'South African', time:75, costPP:24,
    feel:'Butterflied chicken marinated in fiery peri-peri and flame-grilled until charred and juicy.',
    ingredients:[{n:'chicken (flattened)',pp:200,u:'g'},{n:'peri-peri chilli',pp:8,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'lemon',pp:15,u:'g'},{n:'paprika',pp:4,u:'g'},{n:'oil',pp:15,u:'ml'}],
    method:['Blend the chilli, garlic, lemon, paprika and oil into a peri-peri marinade.','Butterfly the chicken flat and coat in the marinade for at least an hour.','Grill over medium coals or in a hot griddle, basting, until charred and cooked through.','Rest and serve with extra sauce.'],
    tip:'Butterflying the chicken flat helps it cook evenly and pick up maximum char.',
    nutrition:{kcal:520,protein_g:44,carbs_g:6,fat_g:34}, storage:'Marinate up to a day ahead; grill fresh.'},
  {id:'sp-lamb-sosaties', cat:'friedgrilled', diet:'meat', protein:'lamb', name:'Lamb Sosaties', emoji:'🍢', cuisine:'South African', time:60, costPP:46,
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
    ingredients:[{n:'chicken breasts',pp:80,u:'g'},{n:'egg noodles',pp:50,u:'g'},{n:'carrots',pp:50,u:'g'},{n:'celery',pp:30,u:'g'},{n:'onion',pp:30,u:'g'},{n:'chicken broth',pp:350,u:'ml'}],
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
    method:['Simmer a quick tomato sauce with onion, garlic and basil.','Boil the gnocchi until they float, then drain.','Toss the gnocchi through the sauce.','Serve with parmesan and a drizzle of oil.'],
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
      {name:'Garlic',icon:'🧄',time:35,costPP:14,nutrition:{kcal:260,protein_g:5,carbs_g:34,fat_g:12},feel:'Mellow roasted garlic folded through silky mash — quietly irresistible.',ingredients:[{n:'potatoes',pp:250,u:'g'},{n:'garlic',pp:8,u:'g'},{n:'butter',pp:25,u:'g'},{n:'full cream milk',pp:45,u:'ml'},{n:'fresh parsley',pp:3,u:'g'},{n:'salt'}],method:['Roast the whole garlic until soft and sweet, then squeeze out the cloves.','Boil and steam-dry the potatoes.','Mash with the roasted garlic, butter and warm milk; fold in chopped parsley and season.']}
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
];

function mealSectionHTML(sectionKey){
  const configs = {
    breakfast:  {title:"Breakfast",         emoji:"🍳", color:"#d0a020", bg:"#181008", border:"#3a2010", recipes:typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],  sub:"Morning meals · Start your day right", cats:[{id:'savoury',e:'🍳',l:'Savoury & Cooked'},{id:'warm',e:'🥣',l:'Warm & Comforting'},{id:'sweet',e:'🥐',l:'Sweet & Baked'},{id:'fresh',e:'🍓',l:'Fresh & Light'},{id:'go',e:'🥤',l:'On the Go'}]},
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
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${r.emoji||'🍽️'} ${dietTag(r.diet)}${r.name}</h1>
      <div style="font-size:13px;color:${color};font-style:italic;">Full recipe and method</div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

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

      <!-- Goes Well With -->
      ${(r.goesWith&&r.goesWith.length)?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:8px;">❤ Goes Well With</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${r.goesWith.map(g=>`<span style="padding:6px 13px;border-radius:16px;border:1px solid ${border};color:#e0d4b8;font-size:13px;">${g}</span>`).join('')}</div>
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
  if(r) setQuiet({mealActiveRecipe: Object.assign({},r,{_section:sec})});
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

