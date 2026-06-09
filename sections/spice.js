// ── TINZA SPICE ROOM ─────────────────────────────────────────────────────────
// "Everything that enhances your food."
// PILOT FILE — 6 entries, structured + scalable. Roll the rest from the seed list.
//
// SCHEMA (locked):
//   id, name, type, shelf, region
//   flavourChips  [max 3]  Warm · Earthy · Tangy · Hot · Aromatic · Herby
//   whenToUse     start | mid | finish
//   makeYourOwn:
//     yield:       { mode:"batch"|"serves", unit:"g"|"ml"|"", base:N, step:N, label:"" }
//                  batch  → base/step are AMOUNTS (g or ml); min = base; ingredients × (amount/base)
//                  serves → base/step are PEOPLE (unit ""); min = base; braai-style pp · total
//     ingredients: [ { qty:N, unit:"g"|"ml"|"", name:"" } ]   unit "" = counted item (onions, cloves)
//     method:      "joined prose"
//   pairsWith     [names]      aliases [strings]   story "2 sentences"   howThisFeels ""

var SPICE_DB = [

  {
    id: "garam-masala",
    name: "Garam Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "North India",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"cumin seeds" },
        { qty:5, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"green cardamom pods" },
        { qty:2, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"whole cloves" },
        { qty:2, unit:"g", name:"cinnamon (broken stick)" },
        { qty:1, unit:"g", name:"bay leaves" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Dry-roast the cumin, coriander, cardamom, peppercorns, cloves, cinnamon and bay in a hot dry pan over medium heat, shaking constantly until they darken a shade and smell toasty (2–3 min). Tip onto a cold plate and let them cool completely. Grind to a fine powder with the grated nutmeg, then store airtight away from light. Add near the END of cooking — the aroma is delicate and burns off if simmered too long."
    },
    pairsWith: ["Butter Chicken", "dhal", "biryani", "roast vegetables"],
    aliases: ["garam masala", "garam-masala"],
    story: "Garam means 'warm' — not chilli-hot, but the warming spices believed to lift the body's heat. Every family and region grinds its own, so no two tins ever taste quite the same.",
    howThisFeels: ""
  },

  {
    id: "peri-peri-sauce",
    name: "Peri-Peri Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Mozambique · Afro-Portuguese",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:12, unit:"g", name:"African bird's-eye chillies" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:60, unit:"ml", name:"lemon juice" },
        { qty:30, unit:"ml", name:"red wine vinegar" },
        { qty:7, unit:"g", name:"smoked paprika" },
        { qty:1, unit:"g", name:"dried oregano" },
        { qty:100, unit:"ml", name:"olive oil" },
        { qty:5, unit:"g", name:"salt" }
      ],
      method: "Blend the chillies, garlic, lemon juice, vinegar, paprika, oregano and salt to a coarse paste. With the motor running, stream in the olive oil until it loosens into a pourable sauce. Warm gently in a pan for 5 min to marry the flavours (do not boil). Use as a marinade and a baste DURING cooking, then keep a little back fresh to spoon over at the table."
    },
    pairsWith: ["Frango Piri-Piri", "flame-grilled chicken", "prawns", "slap chips"],
    aliases: ["peri-peri", "peri peri", "piri-piri", "piri piri", "peri-peri sauce"],
    story: "Portuguese traders met the tiny, fierce bird's-eye chilli in Mozambique and carried it across their world — the name simply means 'pepper-pepper' in Swahili. It became the soul of flame-grilled chicken from Maputo to Joburg.",
    howThisFeels: ""
  },

  {
    id: "chakalaka",
    name: "Chakalaka",
    type: "relish",
    shelf: "sambals-relishes",
    region: "South Africa · township kitchens",
    flavourChips: ["Tangy", "Hot", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"onion" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:200, unit:"g", name:"carrots" },
        { qty:120, unit:"g", name:"green pepper" },
        { qty:7, unit:"g", name:"curry powder" },
        { qty:400, unit:"g", name:"chopped tomatoes" },
        { qty:410, unit:"g", name:"baked beans" },
        { qty:10, unit:"g", name:"green chilli" },
        { qty:30, unit:"ml", name:"sunflower oil" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Fry the onion and garlic in the oil until soft and golden. Stir in the carrots, green pepper, chilli and curry powder and cook 3–4 min so the spice blooms. Add the tomatoes and simmer 10 min until thick and glossy. Fold the baked beans through at the very end, just to heat — overcooking turns them to mush. Serve warm or at room temperature ALONGSIDE the meal, not cooked into it."
    },
    pairsWith: ["pap", "braai meat", "boerewors", "fresh bread"],
    aliases: ["chakalaka", "chaka laka"],
    story: "Born in the mine hostels and township kitchens of Gauteng, chakalaka was a way to turn a few cheap vegetables and a tin of beans into something bright and fiery. It's now on every braai table and Sunday plate in the country.",
    howThisFeels: ""
  },

  {
    id: "mango-atchar",
    name: "Mango Atchar",
    type: "chutney",
    shelf: "chutneys-atchars",
    region: "South Africa · Cape Malay & Indian",
    flavourChips: ["Tangy", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:200, unit:"g", name:"green (unripe) mango" },
        { qty:15, unit:"g", name:"atchar / achar masala" },
        { qty:3, unit:"g", name:"turmeric" },
        { qty:7, unit:"g", name:"chilli powder" },
        { qty:2, unit:"g", name:"fenugreek (methi) seeds" },
        { qty:2, unit:"g", name:"mustard seeds" },
        { qty:60, unit:"ml", name:"sunflower oil" },
        { qty:10, unit:"g", name:"salt" }
      ],
      method: "Toss the shredded green mango with the salt and leave in a colander for a few hours to draw out the liquid, then pat dry. Heat the oil until shimmering, drop in the mustard and fenugreek seeds and let them crackle, then stir in the turmeric, chilli and atchar masala off the heat. Mix the spiced oil through the mango until every strand is coated. Pack into a sterilised jar, top with a film of oil, and leave to mature for at least 3 days. Serve a spoonful on the side to cut through rich, saucy dishes."
    },
    pairsWith: ["bunny chow", "Durban curry", "breyani", "bread & butter"],
    aliases: ["mango atchar", "atchar", "achar", "mango achar"],
    story: "Atchar travelled with indentured workers from India to the sugar-cane coast of Natal, where the green mango harvest made it a household staple. Sharp, oily and fierce, a spoonful is meant to wake up the whole plate.",
    howThisFeels: ""
  },

  {
    id: "chimichurri",
    name: "Chimichurri",
    type: "sauce",
    shelf: "sauces",
    region: "Argentina · Uruguay",
    flavourChips: ["Herby", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:60, unit:"g", name:"flat-leaf parsley" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"dried oregano" },
        { qty:1, unit:"g", name:"red chilli flakes" },
        { qty:60, unit:"ml", name:"red wine vinegar" },
        { qty:120, unit:"ml", name:"olive oil" },
        { qty:5, unit:"g", name:"salt" }
      ],
      method: "Chop the parsley and garlic as finely as you can by hand — a blender bruises it and turns it bitter. Stir in the oregano, chilli flakes, salt and vinegar, then loosen with the olive oil to a loose, spoonable sauce. Leave it to stand at room temperature for at least 30 min so the flavours open up. Spoon raw over hot grilled meat at the table — never cook it."
    },
    pairsWith: ["grilled steak", "braai", "flame-grilled chicken", "roast vegetables"],
    aliases: ["chimichurri", "chimi churri"],
    story: "On the Argentine and Uruguayan grill, chimichurri is the green counterpoint to all that char and fat — bright, sharp and garlicky. It's never blended smooth and never cooked; the freshness IS the point.",
    howThisFeels: ""
  },

  {
    id: "monkey-gland-sauce",
    name: "Monkey Gland Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "South Africa",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"onion" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:125, unit:"ml", name:"tomato sauce (ketchup)" },
        { qty:60, unit:"ml", name:"fruit chutney" },
        { qty:30, unit:"ml", name:"Worcestershire sauce" },
        { qty:12, unit:"g", name:"brown sugar" },
        { qty:15, unit:"ml", name:"white vinegar" },
        { qty:5, unit:"g", name:"Dijon mustard" },
        { qty:15, unit:"ml", name:"sunflower oil" }
      ],
      method: "Fry the onion and garlic in the oil until soft and just colouring. Stir in the tomato sauce, chutney, Worcestershire, sugar, vinegar and mustard. Simmer gently 8–10 min until thickened and glossy, loosening with a splash of water if it gets too tight. Spoon over a grilled steak or burger to FINISH — there's no actual gland in it, despite the name."
    },
    pairsWith: ["grilled steak", "burgers", "boerewors", "braai"],
    aliases: ["monkey gland", "monkeygland", "monkey-gland", "monkey gland sauce"],
    story: "A Johannesburg steakhouse invention from the 1930s, named as a cheeky nod to a quack 'youth' surgery of the era — there's nothing exotic in it at all. It's pure SA comfort: sweet, tangy, faintly spiced, and poured generously over a rump.",
    howThisFeels: ""
  },

  {
    id: "berbere",
    name: "Berbere",
    type: "blend",
    shelf: "spice-blends",
    region: "Ethiopia · Eritrea",
    flavourChips: ["Hot", "Warm", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"dried red chilli / cayenne" },
        { qty:5, unit:"g", name:"sweet paprika" },
        { qty:2, unit:"g", name:"coriander seeds" },
        { qty:1, unit:"g", name:"cumin seeds" },
        { qty:1, unit:"g", name:"fenugreek seeds" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Dry-roast the coriander, cumin, fenugreek, cardamom, peppercorns and cloves over medium heat until fragrant (2 min), then cool. Grind to a powder and stir through the chilli, paprika, ginger and cinnamon. Berbere is the backbone of Ethiopian cooking — bloom it in oil or spiced butter at the START of a stew to build the whole dish on top of it."
    },
    pairsWith: ["doro wat", "misir wat (red lentils)", "beef tibs", "berbere stews"],
    aliases: ["berbere"],
    story: "Berbere is the fiery red soul of Ethiopian and Eritrean cooking, where a household's blend can run to fifteen spices. It is toasted, ground and folded into nearly every wat (stew), giving them their deep red colour and slow-building heat.",
    howThisFeels: ""
  },

  {
    id: "ras-el-hanout",
    name: "Ras el Hanout",
    type: "blend",
    shelf: "spice-blends",
    region: "Morocco",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"ground ginger" },
        { qty:2, unit:"g", name:"turmeric" },
        { qty:2, unit:"g", name:"sweet paprika" },
        { qty:2, unit:"g", name:"black peppercorns" },
        { qty:2, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"allspice berries" },
        { qty:1, unit:"g", name:"nutmeg" },
        { qty:1, unit:"g", name:"dried rosebuds (optional)" }
      ],
      method: "Toast the whole seeds, peppercorns, cardamom and allspice until aromatic, then cool and grind with the rosebuds and nutmeg. Stir through the ground ginger, turmeric, paprika and cinnamon. Use at the START of a tagine or stew, or rub onto meat and vegetables before roasting."
    },
    pairsWith: ["lamb tagine", "couscous", "roast vegetables", "chicken"],
    aliases: ["ras el hanout", "ras-el-hanout"],
    story: "The name means 'head of the shop' — the spice merchant's pride, his finest blend, which could once run to thirty or more spices. Warm, floral and complex, it carries the whole perfume of a Moroccan souk.",
    howThisFeels: ""
  },

  {
    id: "baharat",
    name: "Baharat",
    type: "blend",
    shelf: "spice-blends",
    region: "Middle East · Levant & Gulf",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"black peppercorns" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"sweet paprika" },
        { qty:2, unit:"g", name:"cinnamon" },
        { qty:2, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"whole cloves" },
        { qty:1, unit:"g", name:"nutmeg" },
        { qty:1, unit:"g", name:"allspice berries" }
      ],
      method: "Toast the peppercorns, cumin, coriander, cardamom, cloves and allspice until fragrant, cool, then grind with the nutmeg. Mix through the paprika and cinnamon. Baharat simply means 'spices' — work it into mince for kofta, rub it on meat, or stir it into rice and soups from the START."
    },
    pairsWith: ["kofta", "shawarma", "spiced rice", "grilled lamb", "lentil soup"],
    aliases: ["baharat"],
    story: "Baharat is the everyday warm-spice blend of the Levant and the Gulf, where almost every kitchen keeps a jar. Each region tilts it differently — more cinnamon here, dried lime or rose there — but it always brings a deep, sweet warmth.",
    howThisFeels: ""
  },

  {
    id: "zaatar",
    name: "Za'atar",
    type: "blend",
    shelf: "spice-blends",
    region: "Levant",
    flavourChips: ["Herby", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:7, unit:"g", name:"dried thyme / oregano" },
        { qty:6, unit:"g", name:"sesame seeds" },
        { qty:5, unit:"g", name:"sumac" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Toast the sesame seeds in a dry pan until pale gold, then cool. Crush the dried thyme a little to release its oils and mix everything together — za'atar is a blend, not a powder, so keep some texture. Stir into olive oil for a bread dip, or sprinkle over labneh, eggs and flatbread to FINISH."
    },
    pairsWith: ["manakish flatbread", "labneh", "olive oil dip", "roast vegetables", "eggs"],
    aliases: ["zaatar", "za'atar", "zahtar"],
    story: "Za'atar names both the wild herb and the tangy blend built around it, brightened with sour-red sumac and nutty sesame. Across the Levant it is breakfast itself — scooped with oil and warm bread.",
    howThisFeels: ""
  },

  {
    id: "dukkah",
    name: "Dukkah",
    type: "blend",
    shelf: "spice-blends",
    region: "Egypt",
    flavourChips: ["Earthy", "Aromatic", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"hazelnuts" },
        { qty:5, unit:"g", name:"sesame seeds" },
        { qty:4, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"cumin seeds" },
        { qty:1, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Toast the hazelnuts and rub off the skins, then toast the sesame, coriander and cumin separately until fragrant. Cool everything, then pound coarsely — dukkah should stay crunchy and crumbly, never a paste or a fine powder. Serve as a FINISH: dip bread in olive oil, then into the dukkah, or scatter over roast vegetables, eggs and salads."
    },
    pairsWith: ["bread & olive oil", "roast vegetables", "boiled eggs", "salads", "labneh"],
    aliases: ["dukkah", "duqqa"],
    story: "Dukkah is an Egyptian street snack of crushed nuts, seeds and spices, traditionally sold in paper cones to eat with bread and oil. The word comes from 'to pound' — the texture is the whole point.",
    howThisFeels: ""
  },

  {
    id: "chinese-five-spice",
    name: "Chinese Five Spice",
    type: "blend",
    shelf: "spice-blends",
    region: "China",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"star anise" },
        { qty:4, unit:"g", name:"fennel seeds" },
        { qty:4, unit:"g", name:"cassia / cinnamon" },
        { qty:4, unit:"g", name:"Sichuan peppercorns" },
        { qty:3, unit:"g", name:"whole cloves" }
      ],
      method: "Lightly toast the star anise, fennel, Sichuan pepper and cloves until aromatic, then cool and grind to a fine powder with the cassia. Use a little — it is potent. Rub onto pork or duck before roasting, or add at the START of a braise to perfume the whole pot."
    },
    pairsWith: ["roast pork belly", "char siu", "Peking duck", "red-braised dishes"],
    aliases: ["five spice", "five-spice", "5 spice", "chinese five spice"],
    story: "Built to balance the five Chinese flavours — sweet, sour, bitter, pungent and salty — in a single warming blend dominated by star anise. A pinch transforms roast pork and slow braises.",
    howThisFeels: ""
  },

  {
    id: "shichimi-togarashi",
    name: "Shichimi Togarashi",
    type: "blend",
    shelf: "spice-blends",
    region: "Japan",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"dried chilli flakes" },
        { qty:4, unit:"g", name:"sesame seeds" },
        { qty:3, unit:"g", name:"dried orange / mandarin peel" },
        { qty:2, unit:"g", name:"Sichuan / sansho peppercorns" },
        { qty:2, unit:"g", name:"nori flakes" },
        { qty:2, unit:"g", name:"ground ginger" },
        { qty:2, unit:"g", name:"black sesame seeds" }
      ],
      method: "Lightly toast the sesame seeds, then grind the dried peel and sansho pepper coarsely. Mix everything together but keep it flaky and textured, not powdered. Shichimi means 'seven flavours' — it is a table FINISH, shaken over hot food just before eating."
    },
    pairsWith: ["ramen", "udon", "rice bowls", "grilled chicken", "edamame"],
    aliases: ["shichimi", "togarashi", "shichimi togarashi", "seven spice"],
    story: "A seven-spice blend created by Edo-era herb sellers in old Tokyo, balancing chilli heat against citrus peel, sesame and seaweed. It lives on the table, not in the pot — a final lift of heat and aroma.",
    howThisFeels: ""
  },

  {
    id: "cajun-seasoning",
    name: "Cajun Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "USA · Louisiana",
    flavourChips: ["Hot", "Earthy", "Herby"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"sweet paprika" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"onion powder" },
        { qty:2, unit:"g", name:"cayenne pepper" },
        { qty:2, unit:"g", name:"dried oregano" },
        { qty:2, unit:"g", name:"dried thyme" },
        { qty:2, unit:"g", name:"black pepper" }
      ],
      method: "Simply stir all the ground spices and dried herbs together — no roasting needed. Rub generously onto fish, chicken or prawns and sear in a hot pan to blacken, or stir into jambalaya and gumbo as they cook."
    },
    pairsWith: ["blackened fish", "jambalaya", "prawns", "fried chicken", "potato wedges"],
    aliases: ["cajun", "cajun spice", "cajun seasoning", "blackening spice"],
    story: "The working blend of Louisiana's Cajun kitchens — paprika and cayenne for colour and bite, garlic, onion and herbs for depth. It is what makes 'blackened' food sing.",
    howThisFeels: ""
  },

  {
    id: "jerk-seasoning",
    name: "Jerk Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "Jamaica",
    flavourChips: ["Hot", "Aromatic", "Herby"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"ground allspice" },
        { qty:3, unit:"g", name:"dried thyme" },
        { qty:3, unit:"g", name:"cayenne / scotch bonnet powder" },
        { qty:3, unit:"g", name:"brown sugar" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:1, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Mix all the dry ingredients together for a rub. For true wet jerk, blend this with spring onion, fresh thyme, a little oil and lime juice into a paste. Coat chicken or pork and leave to marinate, then grill over the smokiest fire you can manage."
    },
    pairsWith: ["jerk chicken", "jerk pork", "grilled fish", "rice & peas"],
    aliases: ["jerk", "jerk seasoning", "jerk spice", "jerk rub"],
    story: "Jerk traces back to the Maroons, escaped enslaved people who slow-smoked meat over pimento (allspice) wood in the Jamaican hills. Allspice and fierce scotch bonnet are its two non-negotiable souls.",
    howThisFeels: ""
  },

  {
    id: "cape-malay-curry-powder",
    name: "Cape Malay Curry Powder",
    type: "blend",
    shelf: "spice-blends",
    region: "South Africa · Cape Malay",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"turmeric" },
        { qty:2, unit:"g", name:"fennel seeds" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"chilli powder" },
        { qty:1, unit:"g", name:"fenugreek seeds" },
        { qty:1, unit:"g", name:"allspice berries" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Toast the coriander, cumin, fennel, cardamom, fenugreek, allspice and cloves until fragrant, cool, then grind with the cinnamon. Stir through the turmeric, ginger and chilli. This is a gentle, fragrant curry powder — bloom it in oil with onions at the START of a bredie, bobotie or breyani."
    },
    pairsWith: ["bobotie", "Cape Malay chicken curry", "breyani", "denningvleis", "pickled fish"],
    aliases: ["cape malay curry powder", "cape malay masala", "cape malay curry"],
    story: "Brought to the Cape by enslaved and exiled people from the Indonesian archipelago and India, this blend leans fragrant and warm rather than fiery. It is the quiet heart of Bo-Kaap cooking, from bobotie to pickled fish.",
    howThisFeels: ""
  },

  {
    id: "durban-masala",
    name: "Durban Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "South Africa · Durban",
    flavourChips: ["Hot", "Warm", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:7, unit:"g", name:"Kashmiri / red chilli powder" },
        { qty:4, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"turmeric" },
        { qty:1, unit:"g", name:"fennel seeds" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"fenugreek seeds" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Toast the coriander, cumin, fennel, cardamom, fenugreek and cloves, cool, then grind with the cinnamon. Mix through the chilli powder and turmeric for that signature fiery red colour. Bloom it in hot oil at the START of a Durban curry or bunny chow — it is meant to be properly hot."
    },
    pairsWith: ["Durban curry", "bunny chow", "breyani", "sugar bean curry", "mutton curry"],
    aliases: ["durban masala", "durban curry powder", "mother-in-law masala", "durban curry"],
    story: "Forged by Durban's Indian community, the largest outside India, this masala is built for heat and colour. The fieriest grade is cheekily sold as 'mother-in-law' — proceed with respect.",
    howThisFeels: ""
  },

  {
    id: "tandoori-masala",
    name: "Tandoori Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "India · Punjab",
    flavourChips: ["Warm", "Tangy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"Kashmiri chilli / paprika" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"ground ginger" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:2, unit:"g", name:"garam masala" },
        { qty:1, unit:"g", name:"turmeric" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Toast the cumin, coriander, cardamom and cloves, cool, then grind with the cinnamon. Mix through the chilli, ginger, garlic, turmeric and garam masala. Whisk a few spoonfuls into yoghurt with lemon to make a marinade, coat chicken or paneer, and leave it MID-process before the fierce heat of a grill or oven."
    },
    pairsWith: ["tandoori chicken", "chicken tikka", "paneer tikka", "naan-side grills"],
    aliases: ["tandoori masala", "tandoori spice", "tikka masala spice"],
    story: "The blend behind the blistered red chicken of the Punjabi tandoor, where Kashmiri chilli gives colour without ferocious heat. Its home is a yoghurt marinade, which carries the spices deep into the meat.",
    howThisFeels: ""
  },

  {
    id: "harissa-spice",
    name: "Harissa (Dry Spice)",
    type: "blend",
    shelf: "spice-blends",
    region: "Tunisia",
    flavourChips: ["Hot", "Earthy", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:8, unit:"g", name:"dried red chilli" },
        { qty:3, unit:"g", name:"caraway seeds" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:1, unit:"g", name:"smoked paprika" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Toast the caraway, coriander and cumin until fragrant, cool, then grind with the dried chilli. Stir through the garlic, paprika and salt. This is the dry version — to make true harissa paste, pound it with a little olive oil, lemon and roasted red pepper. Add at the START of a stew, or use the paste as a marinade."
    },
    pairsWith: ["couscous", "grilled lamb", "roast vegetables", "eggs", "soups"],
    aliases: ["harissa spice", "harissa powder"],
    story: "Harissa is the fiery red heart of Tunisian cooking, usually a pounded paste but built on this dry blend of chilli and caraway. A spoonful wakes up everything from couscous to a fried egg.",
    howThisFeels: ""
  },

  {
    id: "taco-seasoning",
    name: "Taco / Mexican Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "Mexico · Tex-Mex",
    flavourChips: ["Warm", "Earthy", "Hot"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"chilli powder" },
        { qty:4, unit:"g", name:"ground cumin" },
        { qty:3, unit:"g", name:"sweet paprika" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:2, unit:"g", name:"dried oregano" },
        { qty:1, unit:"g", name:"cayenne pepper" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Stir all the ground spices and oregano together — no roasting needed. Brown your mince or chicken, then add the seasoning with a splash of water and simmer until it clings. Build tacos, fajitas or nachos on top."
    },
    pairsWith: ["beef tacos", "fajitas", "nachos", "refried beans", "Mexican rice"],
    aliases: ["taco seasoning", "mexican seasoning", "fajita spice", "taco spice"],
    story: "The Tex-Mex pantry shortcut — chilli, cumin and oregano doing the heavy lifting. It is what turns a pan of mince into taco night.",
    howThisFeels: ""
  },

  {
    id: "chesapeake-bay-seasoning",
    name: "Chesapeake Bay Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "USA · Chesapeake Bay",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"celery salt" },
        { qty:4, unit:"g", name:"sweet paprika" },
        { qty:3, unit:"g", name:"black pepper" },
        { qty:2, unit:"g", name:"dry mustard" },
        { qty:1, unit:"g", name:"ground bay leaf" },
        { qty:1, unit:"g", name:"cayenne pepper" },
        { qty:1, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"allspice berries" },
        { qty:1, unit:"g", name:"nutmeg" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Grind the bay, allspice, nutmeg and cloves to a powder, then mix with everything else. Toss it over prawns, crab or calamari before a quick fry or boil, or dust it onto chips and corn. This is the classic Old Bay-style seafood seasoning."
    },
    pairsWith: ["prawns", "crab", "calamari", "potato chips", "corn on the cob"],
    aliases: ["old bay", "old bay-style", "seafood seasoning", "chesapeake seasoning"],
    story: "The seafood seasoning of America's Chesapeake Bay, tangy with celery salt and warm with allspice and mustard. It is shaken over anything that comes out of the water — and a good few things that don't.",
    howThisFeels: ""
  },

  {
    id: "lebanese-seven-spice",
    name: "Lebanese Seven Spice",
    type: "blend",
    shelf: "spice-blends",
    region: "Lebanon",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"black peppercorns" },
        { qty:4, unit:"g", name:"allspice berries" },
        { qty:3, unit:"g", name:"cinnamon" },
        { qty:2, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"whole cloves" },
        { qty:2, unit:"g", name:"nutmeg" },
        { qty:2, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"cumin seeds" }
      ],
      method: "Toast the peppercorns, allspice, coriander, cloves and cumin until fragrant, cool, then grind with the cinnamon and nutmeg. Stir in the ginger. Work it into mince at the START of kibbeh or stuffed vegetables, or stir into rice."
    },
    pairsWith: ["kibbeh", "stuffed vegetables", "spiced rice", "meat stews", "kofta"],
    aliases: ["lebanese seven spice", "sabaa baharat", "lebanese 7 spice"],
    story: "Sabaa baharat — 'seven spices' — is the Lebanese kitchen's all-purpose warm blend, leaning sweeter and more allspice-forward than its Gulf cousins. It seasons everything from kibbeh to the Sunday rice.",
    howThisFeels: ""
  },

  {
    id: "panch-phoron",
    name: "Panch Phoron",
    type: "blend",
    shelf: "spice-blends",
    region: "East India · Bengal",
    flavourChips: ["Earthy", "Aromatic", "Warm"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"cumin seeds" },
        { qty:4, unit:"g", name:"brown mustard seeds" },
        { qty:4, unit:"g", name:"fennel seeds" },
        { qty:4, unit:"g", name:"fenugreek seeds" },
        { qty:4, unit:"g", name:"nigella seeds" }
      ],
      method: "Simply mix the five whole seeds in equal parts — DO NOT grind this one. To use, heat oil or ghee until shimmering, drop in a spoonful and let the seeds crackle and pop for a few seconds (this is the 'tarka'), then pour the spiced oil over dal or stir your vegetables straight in. The whole-seed crunch is the point."
    },
    pairsWith: ["dal", "potato curry", "Bengali fish curry", "pumpkin", "pickles"],
    aliases: ["panch phoron", "panch phoran", "bengali five spice"],
    story: "Panch phoron — 'five spices' — is Bengal's whole-seed tempering blend, never ground. Bloomed in hot oil, it releases a nutty, earthy aroma that defines the cooking of eastern India and Bangladesh.",
    howThisFeels: ""
  },

  {
    id: "quatre-epices",
    name: "Quatre Épices",
    type: "blend",
    shelf: "spice-blends",
    region: "France",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:8, unit:"g", name:"white peppercorns" },
        { qty:4, unit:"g", name:"nutmeg" },
        { qty:4, unit:"g", name:"ground ginger" },
        { qty:3, unit:"g", name:"whole cloves" },
        { qty:1, unit:"g", name:"cinnamon" }
      ],
      method: "Grind the peppercorns and cloves finely, then mix with the nutmeg, ginger and cinnamon. Use a small pinch — it is pungent. Stir into pâtés, terrines and charcuterie, or add at the START of a long-simmered stew or soup."
    },
    pairsWith: ["pâté & terrines", "slow stews", "winter soups", "gingerbread", "braised pork"],
    aliases: ["quatre epices", "quatre épices", "four spice", "french four spice"],
    story: "The French 'four spices' — pepper, nutmeg, ginger and clove — a baker's and charcutier's blend that bridges sweet and savoury. A whisper of it deepens any slow-cooked dish.",
    howThisFeels: ""
  },

  {
    id: "chaat-masala",
    name: "Chaat Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "India",
    flavourChips: ["Tangy", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"amchur (dried mango powder)" },
        { qty:4, unit:"g", name:"cumin seeds" },
        { qty:4, unit:"g", name:"black salt (kala namak)" },
        { qty:2, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"chilli powder" },
        { qty:1, unit:"g", name:"asafoetida (hing)" }
      ],
      method: "Toast the cumin and coriander until dark and fragrant, cool, then grind. Mix through the amchur, black salt and everything else. Chaat masala is a FINISH, never cooked — sprinkle it over fresh fruit, fried snacks, grilled corn or even a cold drink for a sour, salty, slightly sulphurous tang."
    },
    pairsWith: ["fresh fruit", "bhel & chaat", "grilled corn", "fried snacks", "fresh lime soda"],
    aliases: ["chaat masala", "chat masala"],
    story: "Chaat masala is India's tangy table sprinkle, its funk coming from sour dried-mango amchur and sulphurous black salt. It turns plain fruit or a handful of crisps into a craving.",
    howThisFeels: ""
  },

  {
    id: "sri-lankan-roasted-curry-powder",
    name: "Sri Lankan Roasted Curry Powder",
    type: "blend",
    shelf: "spice-blends",
    region: "Sri Lanka",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"coriander seeds" },
        { qty:4, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"fennel seeds" },
        { qty:2, unit:"g", name:"dried red chilli" },
        { qty:1, unit:"g", name:"cinnamon" },
        { qty:1, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"whole cloves" },
        { qty:1, unit:"g", name:"curry leaves" },
        { qty:1, unit:"g", name:"raw rice" }
      ],
      method: "The defining step is the dark roast: toast the coriander, cumin, fennel, cinnamon, cardamom, cloves, curry leaves and rice over medium heat until deep chocolate-brown and very fragrant (5–8 min), stirring constantly so nothing burns. Cool, then grind with the chilli. Bloom in oil at the START of a Sri Lankan curry — the dark roast gives it a smoky, nutty depth no other curry powder has."
    },
    pairsWith: ["Sri Lankan chicken curry", "fish curry", "dhal", "jackfruit curry"],
    aliases: ["sri lankan curry powder", "roasted curry powder", "thuna paha", "dark curry powder"],
    story: "Unlike its golden Indian cousins, Sri Lankan curry powder is roasted dark and deep, giving the island's curries their distinctive smoky brown colour. The long, careful roast is the whole secret.",
    howThisFeels: ""
  },

  {
    id: "madras-curry-powder",
    name: "Madras Curry Powder",
    type: "blend",
    shelf: "spice-blends",
    region: "South India",
    flavourChips: ["Hot", "Warm", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"turmeric" },
        { qty:3, unit:"g", name:"dried red chilli" },
        { qty:1, unit:"g", name:"fennel seeds" },
        { qty:1, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"fenugreek seeds" },
        { qty:1, unit:"g", name:"brown mustard seeds" },
        { qty:1, unit:"g", name:"curry leaves" },
        { qty:1, unit:"g", name:"cinnamon" }
      ],
      method: "Toast the coriander, cumin, fennel, peppercorns, fenugreek, mustard and curry leaves until fragrant, cool, then grind with the cinnamon. Mix through the turmeric and chilli. Hotter and more golden than a northern blend — bloom it in oil at the START of a South Indian meat or lentil curry."
    },
    pairsWith: ["Madras curry", "lamb curry", "sambar", "lentil curry", "vegetable curry"],
    aliases: ["madras curry powder", "madras masala", "hot curry powder"],
    story: "Named for the old South Indian port city, Madras curry powder is the hotter, more golden style that travelled the British Empire. Turmeric and chilli give it both its glow and its bite.",
    howThisFeels: ""
  },

  {
    id: "breyani-masala",
    name: "Breyani Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "South Africa · India",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"dried red chilli" },
        { qty:2, unit:"g", name:"star anise" },
        { qty:2, unit:"g", name:"cinnamon" },
        { qty:2, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"whole cloves" },
        { qty:1, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"fennel seeds" },
        { qty:1, unit:"g", name:"bay leaves" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Toast the coriander, cumin, star anise, cardamom, cloves, peppercorns, fennel and bay until fragrant, cool, then grind with the cinnamon and nutmeg. Mix in the chilli. This is a fragrant, festive blend — bloom it at the START when frying the onions and meat for a breyani, before the rice goes in to layer."
    },
    pairsWith: ["breyani", "biryani", "akni", "layered rice dishes", "mutton breyani"],
    aliases: ["breyani masala", "biryani masala", "biriyani masala"],
    story: "The aromatic, star-anise-laced blend behind South Africa's beloved breyani, brought and adapted by Cape Malay and Indian cooks. It is the smell of a wedding, an Eid table, a Sunday worth waiting for.",
    howThisFeels: ""
  },

  {
    id: "mixed-spice",
    name: "Mixed Spice (Baking)",
    type: "blend",
    shelf: "spice-blends",
    region: "Britain · South Africa",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:7, unit:"g", name:"cinnamon" },
        { qty:4, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"nutmeg" },
        { qty:2, unit:"g", name:"ground ginger" },
        { qty:2, unit:"g", name:"allspice berries" },
        { qty:2, unit:"g", name:"whole cloves" }
      ],
      method: "Toast the coriander, allspice and cloves lightly, cool, then grind with the cinnamon, nutmeg and ginger. This is the warm sweet-baking blend — stir it into cake batters, milk tart, fruit cake and hot cross buns. Add it to the mix rather than the heat, so the aroma survives the bake."
    },
    pairsWith: ["melktert", "hot cross buns", "fruit cake", "baked apples", "koeksisters"],
    aliases: ["mixed spice", "pudding spice", "baking spice"],
    story: "The gentle warmth of a baking cupboard — cinnamon, nutmeg and clove — that scents everything from milk tart to hot cross buns. Different from pumpkin spice only in the leaning, and in the memories attached.",
    howThisFeels: ""
  },

  {
    id: "khmeli-suneli",
    name: "Khmeli Suneli",
    type: "blend",
    shelf: "spice-blends",
    region: "Georgia",
    flavourChips: ["Herby", "Earthy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"dried coriander" },
        { qty:3, unit:"g", name:"fenugreek seeds" },
        { qty:3, unit:"g", name:"dried savory" },
        { qty:3, unit:"g", name:"dried marigold petals" },
        { qty:2, unit:"g", name:"dried dill" },
        { qty:2, unit:"g", name:"dried basil" },
        { qty:1, unit:"g", name:"dried mint" },
        { qty:1, unit:"g", name:"black peppercorns" },
        { qty:1, unit:"g", name:"bay leaves" }
      ],
      method: "Grind the coriander, fenugreek, peppercorns and bay, then mix with the dried herbs and marigold — no roasting, the freshness of the dried herbs is the point. Marigold stands in for the costlier saffron and gives the warm colour. Stir into Georgian stews and bean dishes partway through cooking (MID), or into walnut sauces."
    },
    pairsWith: ["chakhokhbili (chicken stew)", "kharcho soup", "lobio (beans)", "walnut sauces"],
    aliases: ["khmeli suneli", "khmeli-suneli", "georgian spice"],
    story: "Khmeli suneli is the herby soul of Georgian cooking, built on dried herbs and the marigold that locals call 'Imeretian saffron'. It perfumes the stews and walnut sauces of the Caucasus.",
    howThisFeels: ""
  },

  {
    id: "advieh",
    name: "Advieh",
    type: "blend",
    shelf: "spice-blends",
    region: "Iran · Persia",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"cinnamon" },
        { qty:4, unit:"g", name:"green cardamom pods" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:3, unit:"g", name:"dried rose petals" },
        { qty:2, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"nutmeg" },
        { qty:2, unit:"g", name:"turmeric" }
      ],
      method: "Toast the cumin, cardamom and coriander until fragrant, cool, then grind with the rose petals, cinnamon and nutmeg. Stir through the turmeric. Add at the START of a Persian rice dish or stew — the rose and cardamom give it that unmistakable floral warmth."
    },
    pairsWith: ["Persian jewelled rice", "khoresh stews", "roast chicken", "rice pudding"],
    aliases: ["advieh", "persian spice", "persian advieh"],
    story: "Advieh is the perfumed spice blend of Persian cooking, where dried rose petals sit happily alongside cumin and cardamom. It scents the celebratory rice dishes that anchor an Iranian table.",
    howThisFeels: ""
  },

  {
    id: "hawaij-soup",
    name: "Hawaij (for Soup)",
    type: "blend",
    shelf: "spice-blends",
    region: "Yemen",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"cumin seeds" },
        { qty:4, unit:"g", name:"black peppercorns" },
        { qty:4, unit:"g", name:"turmeric" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"green cardamom pods" },
        { qty:1, unit:"g", name:"whole cloves" }
      ],
      method: "Toast the cumin, peppercorns, coriander, cardamom and cloves until fragrant, cool, then grind with the turmeric. Stir into the START of a soup or stew, or rub onto chicken before roasting. This is the savoury 'soup' hawaij — Yemen also has a sweet coffee version built on ginger and cinnamon."
    },
    pairsWith: ["Yemeni soup", "lentil soup", "roast chicken", "beef stew"],
    aliases: ["hawaij", "hawaij for soup", "hawayej"],
    story: "Hawaij is the everyday Yemeni blend, turmeric-gold and warmly peppery, carried by Yemeni Jews into Israeli kitchens too. A spoonful turns plain broth into something that tastes slow-cooked.",
    howThisFeels: ""
  },

  {
    id: "suya-spice",
    name: "Suya Spice (Yaji)",
    type: "blend",
    shelf: "spice-blends",
    region: "Nigeria · West Africa",
    flavourChips: ["Earthy", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:8, unit:"g", name:"roasted peanut powder" },
        { qty:4, unit:"g", name:"chilli powder" },
        { qty:3, unit:"g", name:"ground ginger" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:2, unit:"g", name:"sweet paprika" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Grind roasted peanuts to a dry, oil-free powder, then mix with all the spices. Press onto skewered beef before grilling, and dust more over the moment it comes off the fire. Contains peanuts — leave the nuts out and bump the paprika for an allergy-friendly version."
    },
    pairsWith: ["suya beef skewers", "grilled chicken", "kebabs", "grilled plantain"],
    aliases: ["suya", "yaji", "suya spice"],
    story: "Yaji is the peanut-and-chilli rub behind suya, the smoky skewered street meat sold from roadside grills across Nigeria and West Africa. The dry-ground peanut is what makes it unmistakable.",
    howThisFeels: ""
  },

  {
    id: "adobo-seasoning",
    name: "Adobo Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "Latin America · Caribbean",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"garlic powder" },
        { qty:4, unit:"g", name:"dried oregano" },
        { qty:3, unit:"g", name:"onion powder" },
        { qty:3, unit:"g", name:"black pepper" },
        { qty:2, unit:"g", name:"turmeric" },
        { qty:2, unit:"g", name:"ground cumin" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Mix everything together — all ground, no roasting. Rub generously onto chicken, pork or fish before cooking, or stir into rice and beans. This is the dry all-purpose Latin adobo seasoning, not the Filipino braised dish of the same name."
    },
    pairsWith: ["roast chicken", "pork", "rice & beans", "grilled meat"],
    aliases: ["adobo", "adobo seasoning", "latin adobo"],
    story: "Adobo seasoning is the everyday all-purpose blend of Latin American and Caribbean kitchens, where garlic and oregano do the talking. It seasons almost everything that hits the pan.",
    howThisFeels: ""
  },

  {
    id: "chicken-rub",
    name: "All-Purpose Chicken Rub",
    type: "rub",
    shelf: "spice-blends",
    region: "All-purpose",
    flavourChips: ["Warm", "Herby", "Earthy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"sweet paprika" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"onion powder" },
        { qty:3, unit:"g", name:"brown sugar" },
        { qty:2, unit:"g", name:"dried thyme" },
        { qty:2, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"dried oregano" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Mix everything together. Pat the chicken dry, rub it all over (under the skin too), and rest for 20 min or overnight. Roast, grill or air-fry — the sugar helps it colour and crisp. About 20g covers one whole chicken or a tray of pieces."
    },
    pairsWith: ["roast chicken", "grilled chicken", "wings", "chicken thighs"],
    aliases: ["chicken rub", "chicken seasoning", "poultry rub"],
    story: "The reliable all-rounder for poultry — paprika and herbs for savour, a little sugar for colour and crisp skin. Keep a jar on hand and a roast chicken is always twenty minutes of seasoning away.",
    howThisFeels: ""
  },

  {
    id: "fish-rub",
    name: "Fish & Seafood Rub",
    type: "rub",
    shelf: "spice-blends",
    region: "All-purpose",
    flavourChips: ["Tangy", "Herby", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"sweet paprika" },
        { qty:3, unit:"g", name:"dried dill" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"dried lemon zest" },
        { qty:3, unit:"g", name:"black pepper" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:1, unit:"g", name:"cayenne pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Mix everything together. Use a light hand — fish is delicate. Pat the fillets or prawns dry, dust both sides, and pan-fry, grill or bake. The lemon and dill keep it fresh rather than heavy."
    },
    pairsWith: ["grilled hake", "salmon", "prawns", "calamari", "fish cakes"],
    aliases: ["fish rub", "seafood rub", "fish seasoning"],
    story: "A bright, lemony rub built for the sea — dill and citrus to lift, just a whisper of cayenne behind. It lets the fish stay the star.",
    howThisFeels: ""
  },

  {
    id: "pork-rub",
    name: "Pork Rub (Sweet & Smoky)",
    type: "rub",
    shelf: "spice-blends",
    region: "USA · BBQ",
    flavourChips: ["Warm", "Earthy", "Tangy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:5, unit:"g", name:"brown sugar" },
        { qty:4, unit:"g", name:"sweet paprika" },
        { qty:3, unit:"g", name:"smoked paprika" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:2, unit:"g", name:"dry mustard" },
        { qty:1, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Mix everything together. Rub thickly onto ribs, shoulder or chops and rest at least an hour (overnight is better). Cook low and slow — the sugar and smoked paprika form a sweet, dark bark. Mop with a little sauce near the end if you like."
    },
    pairsWith: ["pork ribs", "pork shoulder", "pork chops", "pork belly"],
    aliases: ["pork rub", "rib rub", "bbq pork rub"],
    story: "The sweet, smoky bark-builder for low-and-slow pork. Brown sugar caramelises, smoked paprika does the work a fire used to — and ribs come out looking like a competition.",
    howThisFeels: ""
  },

  {
    id: "steak-rub",
    name: "Steak & Beef Rub",
    type: "rub",
    shelf: "spice-blends",
    region: "All-purpose",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:6, unit:"g", name:"black peppercorns" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"smoked paprika" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:2, unit:"g", name:"dry mustard" },
        { qty:2, unit:"g", name:"dried thyme" },
        { qty:1, unit:"g", name:"coriander seeds" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Coarsely crack the peppercorns and coriander, then mix with everything else — keep it coarse for a crust. Press firmly onto steak or a beef roast and rest 30 min. Sear hard in a screaming-hot pan or over coals for a peppery bark."
    },
    pairsWith: ["rump steak", "sirloin", "beef roast", "brisket"],
    aliases: ["steak rub", "beef rub", "steak seasoning"],
    story: "A coarse, peppery crust built for beef and the hard sear it loves. Cracked pepper and smoked paprika give you steakhouse bark off your own braai.",
    howThisFeels: ""
  },

  {
    id: "lamb-rub",
    name: "Lamb Rub (Rosemary & Garlic)",
    type: "rub",
    shelf: "spice-blends",
    region: "Mediterranean",
    flavourChips: ["Herby", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:20, step:10, label:"small jar" },
      ingredients: [
        { qty:4, unit:"g", name:"dried rosemary" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:2, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"dried mint" },
        { qty:2, unit:"g", name:"black pepper" },
        { qty:2, unit:"g", name:"sweet paprika" },
        { qty:1, unit:"g", name:"dried thyme" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Crush the rosemary and toast and grind the coriander and cumin, then mix with everything else. Rub over lamb — leg, chops or sosatie cubes — and rest. The rosemary, garlic and mint are lamb's three best friends."
    },
    pairsWith: ["roast leg of lamb", "lamb chops", "lamb sosaties", "kebabs"],
    aliases: ["lamb rub", "lamb seasoning"],
    story: "Rosemary, garlic and mint — the classic Mediterranean trio for lamb — dried into a rub you can reach for any night. It makes a humble chop taste like a Sunday roast.",
    howThisFeels: ""
  },

  {
    id: "ginger-garlic-paste",
    name: "Ginger-Garlic Paste",
    type: "paste",
    shelf: "spice-blends",
    region: "India · Asia",
    flavourChips: ["Aromatic", "Warm", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:100, step:50, label:"small tub" },
      ingredients: [
        { qty:43, unit:"g", name:"fresh ginger" },
        { qty:43, unit:"g", name:"garlic cloves" },
        { qty:12, unit:"ml", name:"sunflower oil" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Peel the ginger and garlic and blend with the oil and salt to a smooth paste, adding a splash more oil if needed. The oil and salt help it keep. Store in a jar in the fridge for up to two weeks, or freeze in an ice-cube tray. Fry a spoonful at the START of almost any curry, stir-fry or marinade — this is the workhorse base of Indian and Asian cooking."
    },
    pairsWith: ["every curry", "stir-fries", "marinades", "dals", "biryani"],
    aliases: ["ginger garlic paste", "ginger-garlic paste", "adrak lehsun paste"],
    story: "Equal parts ginger and garlic, blended smooth — the single most-used base in Indian and much of Asian cooking. A jar in the fridge quietly saves you ten minutes every single time you cook.",
    howThisFeels: ""
  },

  {
    id: "chermoula",
    name: "Chermoula",
    type: "paste",
    shelf: "spice-blends",
    region: "Morocco · North Africa",
    flavourChips: ["Herby", "Tangy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:100, step:50, label:"small tub" },
      ingredients: [
        { qty:25, unit:"g", name:"fresh coriander" },
        { qty:15, unit:"g", name:"fresh parsley" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:4, unit:"g", name:"ground cumin" },
        { qty:4, unit:"g", name:"sweet paprika" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Blend or finely chop the coriander, parsley and garlic, then stir in the cumin, paprika, lemon and oil to a loose, spoonable paste. Use it two ways: marinate fish, chicken or vegetables in it before cooking, or spoon it fresh over the food as it comes off the heat. Keeps a few days in the fridge under a film of oil."
    },
    pairsWith: ["grilled fish", "chicken", "roast vegetables", "tagine", "prawns"],
    aliases: ["chermoula", "charmoula"],
    story: "Chermoula is North Africa's green herb-and-spice marinade, built on coriander, garlic and warm cumin. It is what Moroccan cooks reach for whenever fish meets fire.",
    howThisFeels: ""
  },

  {
    id: "thai-green-curry-paste",
    name: "Thai Green Curry Paste",
    type: "paste",
    shelf: "spice-blends",
    region: "Thailand",
    flavourChips: ["Herby", "Hot", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:100, step:50, label:"small tub" },
      ingredients: [
        { qty:25, unit:"g", name:"green chillies" },
        { qty:20, unit:"g", name:"lemongrass" },
        { qty:15, unit:"g", name:"shallots" },
        { qty:10, unit:"g", name:"galangal" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:8, unit:"g", name:"coriander roots & stems" },
        { qty:4, unit:"g", name:"shrimp paste" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"kaffir lime zest" },
        { qty:2, unit:"g", name:"cumin seeds" }
      ],
      method: "Toast and grind the coriander and cumin seeds. Pound everything together in a mortar (or blend with a splash of water) to a smooth green paste, hardest things first. Fry a few spoonfuls in thick coconut cream at the START until fragrant and split, then build your curry on it. Contains shrimp paste — for a vegetarian version, swap in a little light soy or miso."
    },
    pairsWith: ["green chicken curry", "fish curry", "vegetable curry", "coconut soup"],
    aliases: ["green curry paste", "thai green curry paste", "gaeng keow wan"],
    story: "Green curry paste gets its colour and grassy heat from fresh green chillies pounded with lemongrass, galangal and coriander root. Fried in coconut cream, it is the fragrant base of Thailand's most famous curry.",
    howThisFeels: ""
  },

  {
    id: "thai-red-curry-paste",
    name: "Thai Red Curry Paste",
    type: "paste",
    shelf: "spice-blends",
    region: "Thailand",
    flavourChips: ["Hot", "Aromatic", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:100, step:50, label:"small tub" },
      ingredients: [
        { qty:25, unit:"g", name:"dried red chillies" },
        { qty:20, unit:"g", name:"lemongrass" },
        { qty:15, unit:"g", name:"shallots" },
        { qty:10, unit:"g", name:"galangal" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:4, unit:"g", name:"shrimp paste" },
        { qty:3, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"kaffir lime zest" },
        { qty:2, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Soak the dried chillies in warm water until soft. Toast and grind the coriander and cumin. Pound or blend everything to a smooth red paste, hardest items first. Fry in thick coconut cream at the START until the oil splits and it smells fragrant, then build the curry. Contains shrimp paste — swap for soy or miso to keep it vegetarian."
    },
    pairsWith: ["red beef curry", "duck curry", "prawn curry", "vegetable curry"],
    aliases: ["red curry paste", "thai red curry paste", "gaeng ped"],
    story: "Red curry paste swaps fresh green chillies for soaked dried red ones, giving deeper heat and a brick-red colour. It is the versatile workhorse of the Thai curry world.",
    howThisFeels: ""
  },

  {
    id: "mushroom-sauce",
    name: "Creamy Mushroom Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"button mushrooms" },
        { qty:200, unit:"ml", name:"cream" },
        { qty:100, unit:"ml", name:"beef stock" },
        { qty:80, unit:"g", name:"onion" },
        { qty:30, unit:"g", name:"butter" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:10, unit:"g", name:"flour" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Slice the mushrooms and fry in the butter with the chopped onion and garlic until golden and the water has cooked off. Dust over the flour and stir for a minute, then pour in the stock and cream. Simmer gently until it thickens enough to coat the back of a spoon, and season. Spoon hot over steak, chicken or a plate of pasta."
    },
    pairsWith: ["steak", "grilled chicken", "schnitzel", "pasta", "boerewors"],
    aliases: ["mushroom sauce", "creamy mushroom sauce"],
    story: "The steakhouse standby — mushrooms browned hard, then loosened with cream and stock. Getting real colour on the mushrooms first is the difference between rich and watery.",
    howThisFeels: ""
  },

  {
    id: "pepper-sauce",
    name: "Pepper Sauce (Peppercorn)",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Warm", "Hot", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"ml", name:"cream" },
        { qty:150, unit:"ml", name:"beef stock" },
        { qty:60, unit:"g", name:"onion" },
        { qty:30, unit:"ml", name:"brandy" },
        { qty:20, unit:"g", name:"butter" },
        { qty:8, unit:"g", name:"black peppercorns" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Crush the peppercorns coarsely. Soften the chopped onion in the butter, then deglaze with the brandy (stand back if it flames). Add the stock and reduce by half, then pour in the cream and the crushed pepper. Simmer until glossy and season. Pour hot over a seared steak."
    },
    pairsWith: ["steak", "beef fillet", "ostrich fillet", "burgers"],
    aliases: ["pepper sauce", "peppercorn sauce", "sauce au poivre"],
    story: "Sauce au poivre — cracked black pepper bloomed in cream and brandy — is the classic partner to a good steak. The coarse crush is what gives it that warm, biting heat.",
    howThisFeels: ""
  },

  {
    id: "cheese-sauce",
    name: "Cheese Sauce (Mornay)",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:350, unit:"ml", name:"milk" },
        { qty:100, unit:"g", name:"cheddar cheese" },
        { qty:30, unit:"g", name:"butter" },
        { qty:30, unit:"g", name:"flour" },
        { qty:2, unit:"g", name:"mustard powder" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Melt the butter, stir in the flour and cook the paste for a minute. Whisk in the milk a little at a time to a smooth white sauce, then simmer until thickened. Off the heat, stir in the grated cheese, mustard and nutmeg until melted and glossy. Pour over cauliflower, macaroni, gammon or vegetables."
    },
    pairsWith: ["cauliflower", "macaroni", "gammon", "vegetables", "fish"],
    aliases: ["cheese sauce", "mornay sauce", "mornay"],
    story: "A béchamel enriched with cheese — the French call it Mornay, every home cook calls it the reason to eat cauliflower. Add the cheese off the heat so it stays smooth, never grainy.",
    howThisFeels: ""
  },

  {
    id: "creamy-garlic-sauce",
    name: "Creamy Garlic Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"ml", name:"cream" },
        { qty:80, unit:"ml", name:"chicken stock" },
        { qty:30, unit:"g", name:"parmesan cheese" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:20, unit:"g", name:"butter" },
        { qty:5, unit:"g", name:"parsley" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Soften the finely chopped garlic in the butter without colouring it — burnt garlic turns bitter. Add the stock and cream and simmer until slightly reduced, then stir in the grated parmesan and chopped parsley. Season and spoon hot over chicken, steak or prawns."
    },
    pairsWith: ["grilled chicken", "steak", "prawns", "pasta", "mushrooms"],
    aliases: ["creamy garlic sauce", "garlic cream sauce"],
    story: "Gentle garlic melted into cream and a little parmesan — comforting rather than fierce. The trick is to coax the garlic soft and sweet, never let it brown.",
    howThisFeels: ""
  },

  {
    id: "brown-gravy",
    name: "Brown Gravy",
    type: "sauce",
    shelf: "sauces",
    region: "Britain",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:400, unit:"ml", name:"beef stock" },
        { qty:60, unit:"g", name:"onion" },
        { qty:30, unit:"g", name:"butter" },
        { qty:30, unit:"g", name:"flour" },
        { qty:5, unit:"ml", name:"Worcestershire sauce" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Soften the chopped onion in the butter (or use the pan drippings from a roast), then stir in the flour and cook until nut-brown for colour and flavour. Whisk in the stock slowly, add the Worcestershire, and simmer until smooth and thickened. Season and pour over everything."
    },
    pairsWith: ["roast beef", "bangers & mash", "roast chicken", "mashed potato"],
    aliases: ["gravy", "brown gravy", "meat gravy"],
    story: "The sauce that makes a roast a roast. Cook the flour properly brown for depth — pale gravy tastes of nothing but thickening.",
    howThisFeels: ""
  },

  {
    id: "onion-gravy",
    name: "Onion Gravy",
    type: "sauce",
    shelf: "sauces",
    region: "Britain",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:350, unit:"ml", name:"beef stock" },
        { qty:250, unit:"g", name:"onion" },
        { qty:30, unit:"g", name:"butter" },
        { qty:15, unit:"g", name:"flour" },
        { qty:5, unit:"g", name:"brown sugar" },
        { qty:5, unit:"ml", name:"Worcestershire sauce" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Slice the onions thinly and cook them slowly in the butter with the sugar until deeply caramelised and sweet — this takes patience, 15–20 min. Stir in the flour, then the stock and Worcestershire, and simmer until thickened. Season and serve over bangers, boerewors or liver."
    },
    pairsWith: ["bangers & mash", "boerewors", "liver & onions", "roast"],
    aliases: ["onion gravy"],
    story: "Slow-caramelised onions melted into a savoury gravy — pure comfort poured over mash. The whole flavour is in the patience you give the onions.",
    howThisFeels: ""
  },

  {
    id: "bearnaise-sauce",
    name: "Béarnaise Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Tangy", "Herby", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"butter" },
        { qty:30, unit:"ml", name:"white wine vinegar" },
        { qty:30, unit:"g", name:"shallots" },
        { qty:3, unit:"", name:"egg yolks" },
        { qty:5, unit:"g", name:"fresh tarragon" },
        { qty:1, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Simmer the vinegar with the chopped shallot and half the tarragon until reduced to a spoonful, then cool slightly and strain. Whisk the yolks with the reduction in a bowl over barely-simmering water until pale and thick. Slowly stream in the warm melted butter, whisking, until thick and glossy, then fold in the rest of the tarragon and season. Serve warm at once over steak."
    },
    pairsWith: ["steak", "beef fillet", "grilled fish", "asparagus"],
    aliases: ["bearnaise", "béarnaise", "bearnaise sauce"],
    story: "Béarnaise is hollandaise's herby cousin, sharpened with a tarragon-and-vinegar reduction — the definitive sauce for a good steak. Keep the heat gentle so the eggs thicken without scrambling.",
    howThisFeels: ""
  },

  {
    id: "hollandaise-sauce",
    name: "Hollandaise Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"butter" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:10, unit:"ml", name:"white wine vinegar" },
        { qty:3, unit:"", name:"egg yolks" },
        { qty:1, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"cayenne pepper" }
      ],
      method: "Whisk the yolks with the lemon juice and vinegar in a bowl set over barely-simmering water until pale and thickened. Slowly stream in the warm melted butter, whisking constantly, until thick and glossy. Season with salt and a pinch of cayenne. Keep it warm, not hot, and use straight away over eggs, fish or asparagus."
    },
    pairsWith: ["eggs benedict", "asparagus", "grilled fish", "salmon", "gammon"],
    aliases: ["hollandaise", "hollandaise sauce"],
    story: "One of the French mother sauces — egg yolks and butter emulsified into something rich and lemony. Gentle heat and steady whisking are all that stand between you and it splitting.",
    howThisFeels: ""
  },

  {
    id: "bechamel-sauce",
    name: "Béchamel (White Sauce)",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:400, unit:"ml", name:"milk" },
        { qty:40, unit:"g", name:"butter" },
        { qty:40, unit:"g", name:"flour" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"bay leaves" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Warm the milk with the bay leaf, then set aside to infuse. Melt the butter, stir in the flour and cook the roux for a minute without colouring. Whisk in the strained milk a little at a time to keep it smooth, then simmer gently until thickened. Season with salt and nutmeg. This is the base for lasagne, gratins and cheese sauce."
    },
    pairsWith: ["lasagne", "moussaka", "vegetable gratin", "fish pie"],
    aliases: ["bechamel", "béchamel", "white sauce", "basic white sauce"],
    story: "The simplest of the French mother sauces — just butter, flour and milk — and the foundation of a hundred others. Master this and cheese sauce, lasagne and gratins all follow.",
    howThisFeels: ""
  },

  {
    id: "diane-sauce",
    name: "Diane Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Warm", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"ml", name:"cream" },
        { qty:100, unit:"g", name:"button mushrooms" },
        { qty:100, unit:"ml", name:"beef stock" },
        { qty:40, unit:"g", name:"shallots" },
        { qty:30, unit:"ml", name:"brandy" },
        { qty:30, unit:"g", name:"butter" },
        { qty:10, unit:"ml", name:"Worcestershire sauce" },
        { qty:8, unit:"g", name:"Dijon mustard" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"g", name:"parsley" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Sauté the chopped shallot, garlic and sliced mushrooms in the butter until soft. Deglaze with the brandy, then add the Worcestershire, mustard and stock and let it bubble. Pour in the cream and reduce until it coats a spoon, then finish with chopped parsley and season. Spoon over a pan-fried steak."
    },
    pairsWith: ["steak Diane", "beef fillet", "chicken", "pork medallions"],
    aliases: ["diane sauce", "steak diane sauce"],
    story: "The tableside steakhouse showstopper — brandy, mushrooms, mustard and cream built straight in the steak pan. Flambéing the brandy is theatre; the mustard tang is the substance.",
    howThisFeels: ""
  },

  {
    id: "blue-cheese-sauce",
    name: "Blue Cheese Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Earthy", "Tangy", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"ml", name:"cream" },
        { qty:100, unit:"g", name:"blue cheese" },
        { qty:15, unit:"g", name:"butter" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Melt the butter and soften the finely chopped garlic without colouring. Pour in the cream and bring to a gentle simmer, then crumble in the blue cheese and stir until melted into a smooth, tangy sauce. Loosen with a splash of milk if needed, and finish with black pepper. Pour over steak or burgers."
    },
    pairsWith: ["steak", "burgers", "chicken wings", "gnocchi", "pasta"],
    aliases: ["blue cheese sauce", "gorgonzola sauce"],
    story: "Sharp, salty blue cheese melted into cream — a bold partner for red meat. Use a punchy blue; a timid one disappears into the cream.",
    howThisFeels: ""
  },

  {
    id: "brandy-cream-sauce",
    name: "Brandy Cream Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Steakhouse classic",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"ml", name:"cream" },
        { qty:100, unit:"ml", name:"beef stock" },
        { qty:40, unit:"ml", name:"brandy" },
        { qty:40, unit:"g", name:"shallots" },
        { qty:25, unit:"g", name:"butter" },
        { qty:5, unit:"g", name:"Dijon mustard" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Soften the chopped shallot in the butter, then deglaze with the brandy and let it cook off for a minute. Add the stock and reduce a little, then stir in the cream and mustard and simmer until it coats a spoon. Season and serve hot over steak, fillet or pork."
    },
    pairsWith: ["steak", "beef fillet", "chicken", "pork fillet"],
    aliases: ["brandy cream sauce", "brandy sauce"],
    story: "Smooth, warming and faintly boozy — brandy cooked into cream with a whisper of mustard. A restaurant-feeling sauce that comes together in one pan while the steak rests.",
    howThisFeels: ""
  },

  {
    id: "chasseur-sauce",
    name: "Chasseur (Hunter's) Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Earthy", "Herby", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"ml", name:"chicken stock" },
        { qty:150, unit:"g", name:"button mushrooms" },
        { qty:100, unit:"g", name:"tomatoes" },
        { qty:60, unit:"ml", name:"white wine" },
        { qty:60, unit:"g", name:"shallots" },
        { qty:25, unit:"g", name:"butter" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"fresh tarragon" },
        { qty:3, unit:"g", name:"parsley" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Sauté the sliced mushrooms and chopped shallot and garlic in the butter until golden. Pour in the white wine and let it reduce by half, then add the chopped tomato and stock and simmer until slightly thickened. Stir in the chopped tarragon and parsley and season. Spoon over chicken or beef."
    },
    pairsWith: ["chicken chasseur", "beef", "pork", "rabbit"],
    aliases: ["chasseur sauce", "hunter's sauce", "hunters sauce"],
    story: "Chasseur — 'hunter's' sauce — pairs mushrooms and tomato with wine and tarragon, a rustic French classic for chicken and game. It tastes of an autumn forest and a long lunch.",
    howThisFeels: ""
  },

  {
    id: "red-wine-jus",
    name: "Red Wine Jus",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:400, unit:"ml", name:"beef stock" },
        { qty:150, unit:"ml", name:"red wine" },
        { qty:50, unit:"g", name:"shallots" },
        { qty:30, unit:"g", name:"butter" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"fresh thyme" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Soften the chopped shallot and garlic in a little of the butter, then pour in the red wine and reduce until syrupy. Add the stock and thyme and reduce by half until it lightly coats a spoon. Strain if you like it silky, then whisk in the cold butter off the heat for shine. Season and spoon over roast beef, fillet or lamb."
    },
    pairsWith: ["roast beef", "beef fillet", "roast lamb", "venison"],
    aliases: ["red wine jus", "jus", "red wine reduction", "madeira jus"],
    story: "A glossy reduction of red wine and stock, finished with cold butter for shine — the restaurant sauce that makes a simple roast feel special. Reduce slowly and don't rush the gloss.",
    howThisFeels: ""
  },

  {
    id: "sweet-chilli-sauce",
    name: "Sweet Chilli Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Thailand",
    flavourChips: ["Tangy", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:120, unit:"g", name:"sugar" },
        { qty:120, unit:"ml", name:"white vinegar" },
        { qty:100, unit:"ml", name:"water" },
        { qty:30, unit:"g", name:"red chillies" },
        { qty:15, unit:"g", name:"garlic cloves" },
        { qty:8, unit:"g", name:"cornflour" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Blend the chillies and garlic to a flecked purée. Simmer with the sugar, vinegar, water and salt for 5 minutes, then stir in the cornflour slaked with a little cold water and cook until clear and lightly syrupy. Cool — it thickens as it sits. The gentlest of the parade: sweet first, warm after."
    },
    pairsWith: ["spring rolls", "fried chicken", "calamari", "samoosas", "dipping"],
    aliases: ["sweet chilli sauce", "thai sweet chilli"],
    story: "Thailand's sticky, sweet dipping sauce — barely hot, all about that sugar-and-vinegar shimmer. It is the friendliest doorway into chilli sauces, loved by children and the heat-shy alike.",
    howThisFeels: ""
  },

  {
    id: "sriracha",
    name: "Sriracha",
    type: "sauce",
    shelf: "sauces",
    region: "Thailand · USA",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:150, unit:"g", name:"red chillies" },
        { qty:60, unit:"ml", name:"white vinegar" },
        { qty:30, unit:"g", name:"sugar" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:8, unit:"g", name:"salt" }
      ],
      method: "Blend the chillies, garlic, sugar and salt to a smooth paste. For the real tang, let it sit covered at room temperature for 3–5 days to ferment lightly, then blend with the vinegar, simmer briefly and strain smooth. Bottle and keep in the fridge. Medium heat, garlicky, good on everything."
    },
    pairsWith: ["noodles", "fried eggs", "burgers", "spicy mayo", "rice bowls"],
    aliases: ["sriracha", "rooster sauce"],
    story: "Named for the Thai seaside town of Si Racha but made famous in California, sriracha is the garlicky, tangy squeeze-bottle sauce that conquered the world. A light ferment gives the original its rounded depth.",
    howThisFeels: ""
  },

  {
    id: "chilli-garlic-sauce",
    name: "Chilli Garlic Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "China · SE Asia",
    flavourChips: ["Hot", "Aromatic", "Tangy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:120, unit:"g", name:"red chillies" },
        { qty:40, unit:"g", name:"garlic cloves" },
        { qty:40, unit:"ml", name:"white vinegar" },
        { qty:20, unit:"ml", name:"sunflower oil" },
        { qty:15, unit:"g", name:"sugar" },
        { qty:8, unit:"g", name:"salt" }
      ],
      method: "Blend the chillies and garlic to a coarse, chunky paste — not smooth. Cook gently in the oil for a few minutes to take off the raw edge, then stir in the vinegar, sugar and salt. Jar and refrigerate. Stir into stir-fries and noodles, or spoon on at the table."
    },
    pairsWith: ["noodles", "dumplings", "stir-fries", "fried rice", "eggs"],
    aliases: ["chilli garlic sauce", "chili garlic sauce"],
    story: "The chunky, garlic-forward chilli sauce that lives on every Asian dining table. Coarser than sriracha and made to be both cooked into food and spooned over it.",
    howThisFeels: ""
  },

  {
    id: "sambal-oelek",
    name: "Sambal Oelek",
    type: "paste",
    shelf: "sauces",
    region: "Indonesia",
    flavourChips: ["Hot", "Tangy", "Earthy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:200, unit:"g", name:"fresh red chillies" },
        { qty:20, unit:"ml", name:"white vinegar" },
        { qty:8, unit:"g", name:"salt" },
        { qty:5, unit:"g", name:"sugar" }
      ],
      method: "Grind the fresh chillies coarsely with the salt — traditionally in a stone mortar (the 'oelek') — leaving plenty of texture and seeds. Cook briefly in a dry or lightly oiled pan to soften, then stir in the vinegar and sugar. This is raw chilli heat, nothing to hide behind — use it as a building block in cooking or a fierce condiment."
    },
    pairsWith: ["nasi goreng", "satay", "stir-fries", "rice", "fried eggs"],
    aliases: ["sambal oelek", "sambal ulek"],
    story: "The purest of the Indonesian sambals — just pounded fresh chilli and salt, named for the mortar it is made in. It is the chilli hit that underpins a whole archipelago of cooking.",
    howThisFeels: ""
  },

  {
    id: "harissa-paste",
    name: "Harissa Paste",
    type: "paste",
    shelf: "sauces",
    region: "Tunisia",
    flavourChips: ["Hot", "Earthy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:80, unit:"g", name:"dried red chillies" },
        { qty:80, unit:"g", name:"roasted red peppers" },
        { qty:40, unit:"ml", name:"olive oil" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:4, unit:"g", name:"caraway seeds" },
        { qty:4, unit:"g", name:"coriander seeds" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:6, unit:"g", name:"salt" }
      ],
      method: "Soak the dried chillies in hot water until soft, then drain. Toast and grind the caraway, coriander and cumin. Blend everything to a thick, smooth paste, streaming in the olive oil. Store in a jar under a film of oil. This is the wet partner to the dry Harissa blend — stir into stews, rub on meat, or thin with oil and lemon as a sauce."
    },
    pairsWith: ["couscous", "grilled lamb", "roast vegetables", "eggs", "soups"],
    aliases: ["harissa", "harissa paste"],
    story: "Harissa in its true form — a deep red paste of soaked chilli, roasted pepper and caraway, slicked with olive oil. A jar in the fridge is Tunisia's answer to ketchup.",
    howThisFeels: ""
  },

  {
    id: "zhug",
    name: "Zhug (Green Chilli Sauce)",
    type: "paste",
    shelf: "sauces",
    region: "Yemen",
    flavourChips: ["Hot", "Herby", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small tub" },
      ingredients: [
        { qty:60, unit:"g", name:"fresh green chillies" },
        { qty:40, unit:"g", name:"fresh coriander" },
        { qty:20, unit:"g", name:"fresh parsley" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:15, unit:"g", name:"garlic cloves" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:3, unit:"g", name:"cumin seeds" },
        { qty:2, unit:"g", name:"green cardamom pods" },
        { qty:4, unit:"g", name:"salt" }
      ],
      method: "Toast and grind the cumin and cardamom. Blend the green chillies, coriander, parsley and garlic to a coarse green paste with the spices, then loosen with olive oil and lemon. Fresh and fierce — best made the day you use it. Spoon over falafel, grilled meat, eggs or into soup to FINISH."
    },
    pairsWith: ["falafel", "grilled meat", "eggs", "lentil soup", "flatbread"],
    aliases: ["zhug", "schug", "skhug", "green chilli sauce"],
    story: "Zhug is the fiery green herb-and-chilli relish of Yemen, carried into Israeli and wider Middle Eastern kitchens. Bright with coriander and lethal with green chilli, it wakes up everything it touches.",
    howThisFeels: ""
  },

  {
    id: "crispy-chilli-oil",
    name: "Crispy Chilli Oil",
    type: "sauce",
    shelf: "sauces",
    region: "China",
    flavourChips: ["Hot", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:180, unit:"ml", name:"sunflower oil" },
        { qty:40, unit:"g", name:"dried chilli flakes" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:20, unit:"g", name:"shallots" },
        { qty:8, unit:"g", name:"sesame seeds" },
        { qty:5, unit:"g", name:"sugar" },
        { qty:5, unit:"g", name:"salt" },
        { qty:3, unit:"g", name:"Sichuan peppercorns" },
        { qty:2, unit:"g", name:"star anise" }
      ],
      method: "Put the chilli flakes, sesame, sugar and salt in a heatproof bowl. Gently fry the thinly sliced garlic and shallots with the star anise and Sichuan pepper in the oil until golden and crisp, then pour the hot oil (and the crispy bits) straight over the chilli flakes — it will sizzle. Stir, cool, and jar. Spoon over noodles, dumplings, rice and eggs."
    },
    pairsWith: ["noodles", "dumplings", "rice", "fried eggs", "vegetables"],
    aliases: ["chilli oil", "chili crisp", "crispy chilli oil", "chilli crisp"],
    story: "The addictive crunchy chilli oil of Chinese kitchens — as much about the crispy fried garlic and shallot as the heat. Once you make a jar, you will find excuses to put it on everything.",
    howThisFeels: ""
  },

  {
    id: "louisiana-hot-sauce",
    name: "Louisiana Hot Sauce (Fermented)",
    type: "sauce",
    shelf: "sauces",
    region: "USA · Louisiana",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:200, unit:"g", name:"red cayenne chillies" },
        { qty:100, unit:"ml", name:"white vinegar" },
        { qty:15, unit:"g", name:"salt" }
      ],
      method: "Chop the chillies and mix with the salt, then pack into a clean jar so they sit under their own juices (top up with a light brine if needed). Cover loosely and ferment at room temperature for 1–2 weeks until pleasantly sour and tangy, burping the jar daily. Blend the fermented mash with the vinegar, strain, and bottle. This is the classic tangy Tabasco-style sauce — and right up your Fermentastic alley."
    },
    pairsWith: ["fried chicken", "eggs", "gumbo", "collard greens", "oysters"],
    aliases: ["louisiana hot sauce", "cayenne pepper sauce", "tabasco-style", "hot sauce"],
    story: "The thin, tangy, cayenne-and-vinegar hot sauce of the American South, traditionally aged through a slow ferment. The fermentation is what turns raw heat into that bright, rounded sourness.",
    howThisFeels: ""
  },

  {
    id: "habanero-mango-hot-sauce",
    name: "Habanero Mango Hot Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Caribbean",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:120, unit:"g", name:"ripe mango" },
        { qty:80, unit:"ml", name:"white vinegar" },
        { qty:40, unit:"g", name:"habanero chillies" },
        { qty:40, unit:"g", name:"onion" },
        { qty:15, unit:"ml", name:"lime juice" },
        { qty:10, unit:"g", name:"garlic cloves" },
        { qty:10, unit:"g", name:"sugar" },
        { qty:6, unit:"g", name:"salt" }
      ],
      method: "Simmer the chopped mango, onion, garlic, habanero, vinegar, sugar and salt together for 10 minutes until soft, then blend smooth and stir in the lime. Bottle and refrigerate. Wear gloves with the habaneros — this is very hot, with the fruit riding on top of the burn."
    },
    pairsWith: ["grilled chicken", "fish tacos", "jerk pork", "prawns"],
    aliases: ["habanero hot sauce", "mango habanero"],
    story: "Caribbean heat at its most seductive — fierce habanero softened, just barely, by ripe tropical mango. The sweetness draws you in before the burn arrives.",
    howThisFeels: ""
  },

  {
    id: "gochujang",
    name: "Gochujang (Korean Chilli Paste)",
    type: "paste",
    shelf: "sauces",
    region: "Korea",
    flavourChips: ["Hot", "Warm", "Earthy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:70, unit:"g", name:"gochugaru (Korean chilli powder)" },
        { qty:60, unit:"g", name:"glutinous rice flour" },
        { qty:30, unit:"g", name:"fermented soybean powder" },
        { qty:20, unit:"g", name:"barley malt powder" },
        { qty:25, unit:"g", name:"salt" },
        { qty:200, unit:"ml", name:"water" }
      ],
      method: "Whisk the rice flour and malt powder into the water and cook gently to a loose, glossy paste, then cool. Stir in the gochugaru, fermented soybean powder and salt until smooth and deep red. Traditionally this is packed into a crock and fermented in the sun for months to develop its savoury depth; even a few weeks in a cool spot rewards the patience. Use in marinades, stews and bibimbap."
    },
    pairsWith: ["bibimbap", "bulgogi", "tteokbokki", "marinades", "Korean stews"],
    aliases: ["gochujang", "korean chilli paste", "korean chili paste"],
    story: "Gochujang is Korea's deep, sweet-savoury fermented chilli paste, aged for months until the heat turns round and umami-rich. It is sticky, complex and quietly fiery — the soul of Korean cooking.",
    howThisFeels: ""
  },

  {
    id: "fermented-chilli-mash",
    name: "Fermented Chilli Mash Hot Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Global · craft",
    flavourChips: ["Hot", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:250, unit:"g", name:"mixed red chillies" },
        { qty:20, unit:"g", name:"garlic cloves" },
        { qty:18, unit:"g", name:"salt" },
        { qty:60, unit:"ml", name:"apple cider vinegar" }
      ],
      method: "Blend the chillies and garlic with the salt (about 2–3% of the weight) into a rough mash and pack into a jar under a weight so everything stays below the brine. Ferment with an airlock or loose lid for 1–4 weeks until pleasantly sour, tasting as it goes. Blend the finished mash with the vinegar, then bottle and keep in the fridge. This is the craft-hot-sauce method — your fermentation know-how is the whole advantage here."
    },
    pairsWith: ["eggs", "tacos", "wings", "rice", "grilled meat"],
    aliases: ["fermented hot sauce", "chilli mash hot sauce"],
    story: "The method behind every cult craft hot sauce — a salted chilli mash left to ferment until it turns deep, sour and complex. Less a fixed recipe than a technique, and one a fermenter will take to instantly.",
    howThisFeels: ""
  },

  {
    id: "scotch-bonnet-sauce",
    name: "Scotch Bonnet Pepper Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Caribbean · West Indies",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:90, unit:"ml", name:"white vinegar" },
        { qty:60, unit:"g", name:"scotch bonnet chillies" },
        { qty:50, unit:"g", name:"onion" },
        { qty:40, unit:"g", name:"carrots" },
        { qty:15, unit:"ml", name:"lime juice" },
        { qty:12, unit:"g", name:"garlic cloves" },
        { qty:10, unit:"g", name:"mustard" },
        { qty:8, unit:"g", name:"sugar" },
        { qty:6, unit:"g", name:"salt" }
      ],
      method: "Simmer the chopped carrot, onion, garlic and scotch bonnets in the vinegar until soft, then blend smooth with the mustard, lime, sugar and salt. The carrot softens the colour and the ferocity just a little. Bottle and refrigerate — and treat it with respect, because this is at the very top of the heat scale."
    },
    pairsWith: ["jerk chicken", "grilled fish", "rice & peas", "Caribbean stews"],
    aliases: ["scotch bonnet sauce", "caribbean hot sauce", "west indian pepper sauce"],
    story: "The mustard-yellow pepper sauce of the West Indies, built on the fruity, blistering scotch bonnet. Carrot and mustard round it out, but make no mistake — this is the fiercest bottle on the shelf.",
    howThisFeels: ""
  },

  {
    id: "tomato-ketchup",
    name: "Tomato Ketchup",
    type: "sauce",
    shelf: "sauces",
    region: "Staple condiment",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:120, unit:"g", name:"tomato paste" },
        { qty:80, unit:"ml", name:"water" },
        { qty:60, unit:"g", name:"brown sugar" },
        { qty:60, unit:"ml", name:"white vinegar" },
        { qty:30, unit:"g", name:"onion" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"mustard powder" },
        { qty:1, unit:"g", name:"allspice berries" }
      ],
      method: "Soften the grated onion and garlic, then add the tomato paste, water, sugar, vinegar, salt and ground spices. Simmer gently for 15–20 minutes until thick and glossy, then blend smooth. Cool and bottle — it keeps for weeks in the fridge and tastes nothing like the store stuff."
    },
    pairsWith: ["chips", "burgers", "eggs", "sausages", "boerewors rolls"],
    aliases: ["ketchup", "tomato sauce", "tomato ketchup"],
    story: "The world's favourite condiment, born from a long line of fermented and spiced sauces before tomatoes took over. Homemade, it is brighter and less sweet than the bottle — and ridiculously easy.",
    howThisFeels: ""
  },

  {
    id: "mayonnaise",
    name: "Mayonnaise",
    type: "sauce",
    shelf: "sauces",
    region: "Staple condiment",
    flavourChips: ["Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:200, unit:"ml", name:"sunflower oil" },
        { qty:2, unit:"", name:"egg yolks" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:10, unit:"ml", name:"white wine vinegar" },
        { qty:5, unit:"g", name:"Dijon mustard" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Whisk the egg yolks with the mustard, lemon and a pinch of salt until pale. Add the oil drop by drop at first, whisking constantly, then in a slow thin stream as it thickens into a glossy emulsion. Loosen with the vinegar and adjust salt. Uses raw egg, so keep it cold and use within a few days."
    },
    pairsWith: ["chips", "sandwiches", "potato salad", "fish", "burgers"],
    aliases: ["mayonnaise", "mayo"],
    story: "Just yolks, oil and acid coaxed into a glossy emulsion — the mother of a hundred dips and dressings. Add the oil slowly and it forgives you; rush it and it splits.",
    howThisFeels: ""
  },

  {
    id: "aioli",
    name: "Aioli (Garlic Mayo)",
    type: "sauce",
    shelf: "sauces",
    region: "Mediterranean",
    flavourChips: ["Aromatic", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:180, unit:"ml", name:"olive oil" },
        { qty:2, unit:"", name:"egg yolks" },
        { qty:15, unit:"g", name:"garlic cloves" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:3, unit:"g", name:"Dijon mustard" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Crush the garlic to a paste with the salt. Whisk it with the egg yolks, mustard and lemon, then stream in the olive oil slowly, whisking, until thick and glossy. Use a mild olive oil or half sunflower — too much strong olive oil turns bitter. Uses raw egg; keep cold."
    },
    pairsWith: ["chips", "prawns", "grilled vegetables", "crusty bread", "calamari"],
    aliases: ["aioli", "garlic mayo", "garlic mayonnaise"],
    story: "The garlic-heavy mayonnaise of the Mediterranean coast, from Provence to Catalonia. Bold, golden and unapologetically garlicky — the friend of anything fried or grilled.",
    howThisFeels: ""
  },

  {
    id: "tartare-sauce",
    name: "Tartare Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Staple condiment",
    flavourChips: ["Tangy", "Herby", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small tub" },
      ingredients: [
        { qty:120, unit:"g", name:"mayonnaise" },
        { qty:20, unit:"g", name:"gherkins" },
        { qty:10, unit:"g", name:"capers" },
        { qty:10, unit:"g", name:"shallots" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:4, unit:"g", name:"parsley" },
        { qty:3, unit:"g", name:"Dijon mustard" }
      ],
      method: "Finely chop the gherkins, capers, shallot and parsley. Fold them through the mayonnaise with the lemon and mustard, then chill for an hour so the flavours marry. Sharp, herby and crunchy — the only thing fried fish really wants."
    },
    pairsWith: ["fried fish", "calamari", "fish cakes", "prawns", "chips"],
    aliases: ["tartare sauce", "tartar sauce"],
    story: "Mayonnaise sharpened with gherkin, caper and lemon — the classic partner to anything that swam and was then crumbed. It cuts through the richest fry like nothing else.",
    howThisFeels: ""
  },

  {
    id: "marie-rose-sauce",
    name: "Marie Rose Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Staple condiment",
    flavourChips: ["Tangy", "Aromatic", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small tub" },
      ingredients: [
        { qty:100, unit:"g", name:"mayonnaise" },
        { qty:30, unit:"g", name:"tomato ketchup" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:4, unit:"ml", name:"Worcestershire sauce" },
        { qty:1, unit:"g", name:"cayenne pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Stir the mayonnaise and ketchup together with the lemon, Worcestershire, a pinch of cayenne and salt until smooth and pale pink. A splash of brandy is the classic optional flourish. Chill and serve with prawns or seafood."
    },
    pairsWith: ["prawn cocktail", "seafood", "crab", "sandwiches", "fish"],
    aliases: ["marie rose sauce", "seafood cocktail sauce", "cocktail sauce"],
    story: "The blushing pink prawn-cocktail sauce of the 1970s dinner party — mayonnaise and ketchup with a knowing splash of brandy. Retro, yes, and still exactly right with cold prawns.",
    howThisFeels: ""
  },

  {
    id: "english-mustard",
    name: "English Mustard",
    type: "sauce",
    shelf: "sauces",
    region: "Britain",
    flavourChips: ["Hot", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:100, step:50, label:"small jar" },
      ingredients: [
        { qty:55, unit:"g", name:"mustard powder" },
        { qty:45, unit:"ml", name:"water" },
        { qty:12, unit:"ml", name:"white vinegar" },
        { qty:3, unit:"g", name:"sugar" },
        { qty:3, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"turmeric" }
      ],
      method: "Mix the mustard powder and turmeric with the cold water to a smooth paste and leave it for 10–15 minutes — this resting is when the fierce heat develops. Stir in the vinegar, sugar and salt, which tame and set it. Let it mellow a day before using. Ferociously hot, the way it should be."
    },
    pairsWith: ["roast beef", "gammon", "sausages", "cheese", "pies"],
    aliases: ["english mustard", "hot mustard"],
    story: "Bright yellow and eye-wateringly fierce, English mustard is meant to clear your sinuses. The heat only blooms once the powder meets cold water and rests — so patience makes it punch.",
    howThisFeels: ""
  },

  {
    id: "dijon-mustard",
    name: "Dijon Mustard",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Tangy", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small jar" },
      ingredients: [
        { qty:60, unit:"g", name:"yellow mustard seeds" },
        { qty:60, unit:"ml", name:"white wine" },
        { qty:40, unit:"ml", name:"white wine vinegar" },
        { qty:20, unit:"ml", name:"water" },
        { qty:5, unit:"g", name:"honey" },
        { qty:4, unit:"g", name:"salt" }
      ],
      method: "Soak the mustard seeds in the wine, vinegar and water for a day or two until plump and softened. Blend to a smooth paste with the honey and salt, adding a little water if needed. It tastes harsh at first — leave it a few days in the fridge to round out into that classic creamy, tangy Dijon."
    },
    pairsWith: ["steak", "vinaigrette", "sandwiches", "cream sauces", "roast chicken"],
    aliases: ["dijon mustard", "dijon"],
    story: "The smooth, sharp wine-based mustard of Burgundy that became the world's cooking mustard. It sharpens a vinaigrette, binds a cream sauce, and lifts a sandwich — the most useful jar in the door.",
    howThisFeels: ""
  },

  {
    id: "wholegrain-mustard",
    name: "Wholegrain Mustard",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Tangy", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small jar" },
      ingredients: [
        { qty:45, unit:"g", name:"brown mustard seeds" },
        { qty:25, unit:"g", name:"yellow mustard seeds" },
        { qty:50, unit:"ml", name:"white wine vinegar" },
        { qty:30, unit:"ml", name:"water" },
        { qty:8, unit:"g", name:"honey" },
        { qty:4, unit:"g", name:"salt" }
      ],
      method: "Soak both mustard seeds in the vinegar and water for a day until plump. Pulse just enough to break some of the seeds while leaving most whole for that signature pop, then stir in the honey and salt. Rest a few days to mellow. The grainy, rustic mustard for cheese boards and dressings."
    },
    pairsWith: ["cheese board", "ham", "sausages", "salad dressing", "pork"],
    aliases: ["wholegrain mustard", "grainy mustard", "seeded mustard"],
    story: "Half-crushed mustard seeds in a tangy brine, with that satisfying burst between the teeth. Rustic and milder than smooth mustard, it belongs on every cheese board.",
    howThisFeels: ""
  },

  {
    id: "honey-mustard",
    name: "Honey Mustard",
    type: "sauce",
    shelf: "sauces",
    region: "Staple condiment",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:150, step:50, label:"small jar" },
      ingredients: [
        { qty:60, unit:"g", name:"Dijon mustard" },
        { qty:50, unit:"g", name:"honey" },
        { qty:30, unit:"g", name:"mayonnaise" },
        { qty:8, unit:"ml", name:"white wine vinegar" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Whisk the Dijon, honey, mayonnaise and vinegar together until smooth and glossy, then season. Adjust to taste — more honey for sweeter, more mustard for sharper. Equally a dip for chicken strips, a sandwich smear, or a quick salad dressing thinned with a little oil."
    },
    pairsWith: ["chicken strips", "pretzels", "salads", "ham", "chips"],
    aliases: ["honey mustard", "honey mustard sauce"],
    story: "The sweet-sharp crowd-pleaser — Dijon and honey met in the middle and never looked back. Dip, dressing or smear, it is the one even the children reach for.",
    howThisFeels: ""
  },

  {
    id: "bbq-sauce",
    name: "BBQ Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "USA · BBQ",
    flavourChips: ["Tangy", "Warm", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:120, unit:"g", name:"tomato ketchup" },
        { qty:40, unit:"g", name:"brown sugar" },
        { qty:40, unit:"ml", name:"cider vinegar" },
        { qty:20, unit:"ml", name:"treacle" },
        { qty:15, unit:"ml", name:"Worcestershire sauce" },
        { qty:4, unit:"g", name:"smoked paprika" },
        { qty:3, unit:"g", name:"mustard powder" },
        { qty:3, unit:"g", name:"garlic powder" },
        { qty:3, unit:"g", name:"onion powder" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Whisk everything together in a pan and simmer gently for 10–15 minutes until thickened and glossy, stirring so it doesn't catch. Smoked paprika does the work of a smoker. Mop onto ribs and chicken near the end of cooking, and serve more on the side."
    },
    pairsWith: ["pork ribs", "chicken wings", "burgers", "pulled pork", "braai"],
    aliases: ["bbq sauce", "barbecue sauce", "smoky bbq sauce"],
    story: "Sweet, tangy and smoky — the sticky American basting-and-dipping sauce. Brush it on too early and the sugar burns; save it for the last few minutes and the end of the meal.",
    howThisFeels: ""
  },

  {
    id: "sweet-and-sour-sauce",
    name: "Sweet & Sour Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "China · Cantonese",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:100, unit:"ml", name:"pineapple juice" },
        { qty:60, unit:"g", name:"sugar" },
        { qty:60, unit:"ml", name:"white vinegar" },
        { qty:40, unit:"g", name:"tomato ketchup" },
        { qty:30, unit:"ml", name:"water" },
        { qty:15, unit:"ml", name:"soy sauce" },
        { qty:10, unit:"g", name:"cornflour" },
        { qty:5, unit:"g", name:"ginger" },
        { qty:5, unit:"g", name:"garlic cloves" }
      ],
      method: "Simmer the pineapple juice, sugar, vinegar, ketchup, water, soy, grated ginger and garlic together until the sugar dissolves. Stir in the cornflour slaked with a little cold water and cook until glossy and thickened. Toss through crispy pork, chicken or prawns at the end."
    },
    pairsWith: ["sweet & sour pork", "chicken", "prawns", "spring rolls", "fried rice"],
    aliases: ["sweet and sour sauce", "sweet & sour sauce"],
    story: "The glossy, ruby-red sauce of the Cantonese takeaway, balancing sugar against vinegar over a fruity base. Pineapple keeps it from being one-note sweet.",
    howThisFeels: ""
  },

  {
    id: "teriyaki-sauce",
    name: "Teriyaki Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Japan",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 bottle" },
      ingredients: [
        { qty:120, unit:"ml", name:"soy sauce" },
        { qty:60, unit:"ml", name:"mirin" },
        { qty:40, unit:"g", name:"sugar" },
        { qty:40, unit:"ml", name:"water" },
        { qty:8, unit:"g", name:"ginger" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:6, unit:"g", name:"cornflour" }
      ],
      method: "Simmer the soy, mirin, sugar, water, grated ginger and garlic until the sugar dissolves. Stir in the cornflour slaked with cold water and simmer to a light, glossy glaze. Brush onto chicken, salmon or beef as it grills, or toss through a stir-fry at the end."
    },
    pairsWith: ["chicken", "salmon", "beef", "rice bowls", "stir-fries"],
    aliases: ["teriyaki sauce", "teriyaki"],
    story: "The glossy soy-and-mirin glaze of Japanese cooking — 'teri' means the shine it gives. Sweet, salty and savoury all at once, it lacquers anything it touches.",
    howThisFeels: ""
  },

  {
    id: "hoisin-sauce",
    name: "Hoisin Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "China",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:60, unit:"g", name:"miso paste" },
        { qty:40, unit:"g", name:"honey" },
        { qty:40, unit:"ml", name:"soy sauce" },
        { qty:20, unit:"ml", name:"rice vinegar" },
        { qty:10, unit:"ml", name:"sesame oil" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"g", name:"sriracha" },
        { qty:2, unit:"g", name:"Chinese five spice" }
      ],
      method: "Whisk all the ingredients together until smooth (miso stands in beautifully for the traditional fermented soybean paste). Thin with a splash of water if needed. Use as a glaze for pork and duck, a stir-fry seasoning, or the smear in pancakes and lettuce wraps."
    },
    pairsWith: ["Peking duck", "char siu pork", "stir-fries", "ribs", "lettuce wraps"],
    aliases: ["hoisin sauce", "hoisin"],
    story: "Dark, sweet and savoury, hoisin is the Chinese 'barbecue' sauce — though there is no seafood in it despite the name meaning 'sea'. It is the glossy smear that makes Peking duck sing.",
    howThisFeels: ""
  },

  {
    id: "plum-sauce",
    name: "Plum Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "China",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:200, unit:"g", name:"plums" },
        { qty:60, unit:"g", name:"sugar" },
        { qty:50, unit:"ml", name:"rice vinegar" },
        { qty:10, unit:"ml", name:"soy sauce" },
        { qty:8, unit:"g", name:"ginger" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"star anise" },
        { qty:1, unit:"g", name:"dried chilli flakes" }
      ],
      method: "Stone and chop the plums, then simmer with all the other ingredients until completely soft and jammy, about 20 minutes. Fish out the star anise and blend smooth. Cool and jar — sweet, tangy and lightly spiced, the classic dip for spring rolls and duck."
    },
    pairsWith: ["spring rolls", "Peking duck", "roast pork", "samoosas", "dipping"],
    aliases: ["plum sauce", "chinese plum sauce"],
    story: "A sweet-sour jammy dip of stewed plums and warm spice, the Chinese takeaway companion to anything crispy. Made fresh when plums are in season, it is a different thing entirely.",
    howThisFeels: ""
  },

  {
    id: "hummus",
    name: "Hummus",
    type: "dip",
    shelf: "dressings-dips",
    region: "Middle East · Levant",
    flavourChips: ["Earthy", "Aromatic", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:240, unit:"g", name:"tinned chickpeas (drained)" },
        { qty:60, unit:"g", name:"tahini" },
        { qty:30, unit:"ml", name:"lemon juice" },
        { qty:30, unit:"ml", name:"olive oil" },
        { qty:30, unit:"ml", name:"water" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"ground cumin" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Blend the drained chickpeas with the tahini, lemon, garlic, cumin and water until very smooth, scraping down as you go — patience here is what makes it silky. Stream in the olive oil and season. Loosen with a little more water for a softer dip, and swirl extra oil on top to serve."
    },
    pairsWith: ["pita bread", "crudités", "falafel", "grilled meat", "flatbread"],
    aliases: ["hummus", "houmous"],
    story: "The chickpea-and-tahini dip that anchors tables across the Levant, each country quietly certain its version is the true one. Blending it properly smooth is the whole art.",
    howThisFeels: ""
  },

  {
    id: "guacamole",
    name: "Guacamole",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mexico",
    flavourChips: ["Tangy", "Herby", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:300, unit:"g", name:"ripe avocados" },
        { qty:80, unit:"g", name:"tomatoes" },
        { qty:40, unit:"g", name:"onion" },
        { qty:20, unit:"ml", name:"lime juice" },
        { qty:8, unit:"g", name:"fresh coriander" },
        { qty:6, unit:"g", name:"green chilli" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Mash the avocado flesh to your liking — chunky is good. Fold through the finely chopped tomato, onion, coriander and chilli, then the lime and salt. Press cling film right onto the surface if not serving at once, so it keeps its colour. Best made fresh and eaten soon."
    },
    pairsWith: ["tortilla chips", "tacos", "nachos", "grilled meat", "eggs"],
    aliases: ["guacamole", "guac"],
    story: "Mexico's fresh avocado dip, named from the Aztec 'ahuacamolli'. Lime and salt keep the richness in check — and there is no shame in liking it chunky.",
    howThisFeels: ""
  },

  {
    id: "tzatziki",
    name: "Tzatziki",
    type: "dip",
    shelf: "dressings-dips",
    region: "Greece",
    flavourChips: ["Tangy", "Herby", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"thick Greek yoghurt" },
        { qty:120, unit:"g", name:"cucumber" },
        { qty:15, unit:"ml", name:"olive oil" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"g", name:"fresh dill" },
        { qty:3, unit:"g", name:"fresh mint" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Grate the cucumber, then squeeze out as much water as you can — this stops a watery dip. Stir it into the yoghurt with the crushed garlic, chopped dill and mint, olive oil, lemon and salt. Rest in the fridge for an hour for the garlic to mellow and the flavours to settle."
    },
    pairsWith: ["pita bread", "souvlaki", "grilled lamb", "roast vegetables", "falafel"],
    aliases: ["tzatziki"],
    story: "Cool, garlicky Greek yoghurt with cucumber and herbs — the refreshing counterpoint to a charred souvlaki. Wringing the cucumber dry is the step nobody should skip.",
    howThisFeels: ""
  },

  {
    id: "baba-ganoush",
    name: "Baba Ganoush",
    type: "dip",
    shelf: "dressings-dips",
    region: "Middle East · Levant",
    flavourChips: ["Earthy", "Aromatic", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:350, unit:"g", name:"aubergines" },
        { qty:50, unit:"g", name:"tahini" },
        { qty:25, unit:"ml", name:"lemon juice" },
        { qty:20, unit:"ml", name:"olive oil" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"ground cumin" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Char the whole aubergines over a flame or under a hot grill until the skin blackens and the flesh collapses — this smokiness is the soul of the dish. Cool, scoop out the flesh and let it drain, then mash or pulse with the tahini, lemon, garlic and cumin. Keep some texture, season, and finish with olive oil."
    },
    pairsWith: ["pita bread", "flatbread", "crudités", "grilled meat", "falafel"],
    aliases: ["baba ganoush", "baba ghanoush", "mutabal"],
    story: "The smoky cousin of hummus, built on aubergine charred until it almost falls apart. That fire-roasted smokiness is what separates a great one from a dull beige paste.",
    howThisFeels: ""
  },

  {
    id: "spinach-artichoke-dip",
    name: "Spinach Artichoke Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:120, unit:"g", name:"cream cheese" },
        { qty:120, unit:"g", name:"artichoke hearts" },
        { qty:100, unit:"g", name:"spinach" },
        { qty:60, unit:"g", name:"mozzarella cheese" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:40, unit:"g", name:"mayonnaise" },
        { qty:30, unit:"g", name:"parmesan cheese" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Wilt the spinach and squeeze it dry, then chop with the drained artichoke hearts. Mix into the softened cream cheese, sour cream and mayo with the garlic and most of the cheese. Spread into a dish, top with the rest of the cheese, and bake at 200°C until bubbling and golden. Serve hot."
    },
    pairsWith: ["tortilla chips", "toasted bread", "crackers", "crudités"],
    aliases: ["spinach artichoke dip", "spinach and artichoke dip"],
    story: "The warm, gooey, cheesy crowd-pleaser of American gatherings — the dish that empties first at any party. Squeezing the spinach properly dry is what keeps it rich instead of watery.",
    howThisFeels: ""
  },

  {
    id: "salsa",
    name: "Salsa (Pico de Gallo)",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mexico",
    flavourChips: ["Tangy", "Hot", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"tomatoes" },
        { qty:60, unit:"g", name:"onion" },
        { qty:20, unit:"ml", name:"lime juice" },
        { qty:10, unit:"g", name:"fresh coriander" },
        { qty:10, unit:"g", name:"green chilli" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Finely dice the tomatoes, onion and chilli and chop the coriander. Mix everything with the lime, garlic and salt, then leave it to sit for 15 minutes so the flavours come together and the onion softens. Drain off excess liquid if you like it chunky rather than soupy."
    },
    pairsWith: ["tortilla chips", "tacos", "grilled meat", "eggs", "nachos"],
    aliases: ["salsa", "pico de gallo", "tomato salsa"],
    story: "Fresh chopped tomato, onion, chilli and lime — the bright, raw 'rooster's beak' salsa of Mexico. No cooking, just good knife work and a little patience while it mingles.",
    howThisFeels: ""
  },

  {
    id: "muhammara",
    name: "Muhammara",
    type: "dip",
    shelf: "dressings-dips",
    region: "Syria · Levant",
    flavourChips: ["Hot", "Earthy", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"roasted red peppers" },
        { qty:80, unit:"g", name:"walnuts" },
        { qty:30, unit:"g", name:"breadcrumbs" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:20, unit:"ml", name:"pomegranate molasses" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"ground cumin" },
        { qty:2, unit:"g", name:"chilli flakes" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Toast the walnuts, then pulse with the roasted peppers, breadcrumbs, garlic, cumin and chilli to a coarse paste — keep some texture. Stir in the pomegranate molasses, lemon and olive oil and season. The sweet-sour molasses against the smoky pepper and nutty walnut is the whole point."
    },
    pairsWith: ["pita bread", "flatbread", "grilled meat", "crudités", "cheese"],
    aliases: ["muhammara"],
    story: "A smoky, sweet-sour dip of roasted red pepper and walnut from Aleppo, lifted by tangy pomegranate molasses. Bolder and more interesting than its hummus neighbours on the meze table.",
    howThisFeels: ""
  },

  {
    id: "whipped-feta-dip",
    name: "Whipped Feta Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Greece",
    flavourChips: ["Tangy", "Aromatic", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"feta cheese" },
        { qty:60, unit:"g", name:"cream cheese" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"g", name:"honey" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Blend the feta, cream cheese, olive oil, lemon and garlic until light, smooth and whipped — a food processor does it in a minute. Season with black pepper. Spread into a bowl, swirl the top, and finish with a drizzle of honey and extra oil. Bright, salty and creamy all at once."
    },
    pairsWith: ["pita bread", "crudités", "roast vegetables", "toasted bread", "watermelon"],
    aliases: ["whipped feta", "whipped feta dip"],
    story: "Salty feta whipped with cream cheese until cloud-light, then drizzled with honey for a salty-sweet hit. A simple trick that turns a humble block of feta into something elegant.",
    howThisFeels: ""
  },

  {
    id: "french-onion-dip",
    name: "French Onion Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"onion" },
        { qty:200, unit:"g", name:"sour cream" },
        { qty:60, unit:"g", name:"mayonnaise" },
        { qty:20, unit:"g", name:"butter" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:5, unit:"ml", name:"Worcestershire sauce" },
        { qty:4, unit:"g", name:"chives" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Cook the finely chopped onions slowly in the butter until deeply caramelised and sweet — 20 minutes of patience, no shortcuts. Cool completely, then fold into the sour cream and mayonnaise with the garlic, Worcestershire and chives. Chill an hour; it tastes even better the next day."
    },
    pairsWith: ["potato crisps", "crackers", "crudités", "chips"],
    aliases: ["french onion dip"],
    story: "Caramelised onions folded into sour cream — the retro party dip that beats any powder-packet version into the ground. The whole thing lives or dies on properly browned onions.",
    howThisFeels: ""
  },

  {
    id: "queso-dip",
    name: "Queso Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mexico · Tex-Mex",
    flavourChips: ["Warm", "Aromatic", "Hot"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"cheddar cheese" },
        { qty:150, unit:"ml", name:"milk" },
        { qty:40, unit:"g", name:"tomatoes" },
        { qty:30, unit:"g", name:"onion" },
        { qty:20, unit:"g", name:"green chilli" },
        { qty:15, unit:"g", name:"butter" },
        { qty:15, unit:"g", name:"flour" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"ground cumin" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Soften the chopped onion, garlic and chilli in the butter, then stir in the flour and milk to make a smooth, loose white sauce. Off the heat, melt in the grated cheese a handful at a time until glossy, then fold through the chopped tomato and cumin. Serve hot and gooey — loosen with a splash of milk as it cools."
    },
    pairsWith: ["tortilla chips", "nachos", "tacos", "fries", "hot dogs"],
    aliases: ["queso", "queso dip", "cheese dip"],
    story: "The molten cheese dip of Tex-Mex, flecked with green chilli and best eaten while it is still dangerously hot. A little flour and milk keep it smooth instead of splitting into an oily mess.",
    howThisFeels: ""
  },

  {
    id: "tapenade",
    name: "Tapenade",
    type: "dip",
    shelf: "dressings-dips",
    region: "France · Provence",
    flavourChips: ["Earthy", "Tangy", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"pitted black olives" },
        { qty:40, unit:"ml", name:"olive oil" },
        { qty:20, unit:"g", name:"capers" },
        { qty:15, unit:"g", name:"anchovies" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"fresh thyme" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Pulse the olives, capers, anchovies, garlic and thyme to a coarse paste — not smooth, you want some bite. Loosen with the olive oil and lemon and season with pepper (it rarely needs salt). For a vegetarian version, leave out the anchovies and add a splash more caper brine. Spread on crostini or use to stuff chicken."
    },
    pairsWith: ["crostini", "crudités", "grilled fish", "roast chicken", "crusty bread"],
    aliases: ["tapenade", "olive tapenade"],
    story: "The intense, salty olive spread of Provence, its name from the capers ('tapenes') that share the bowl. A little goes a long way — it is all about that briny, savoury punch.",
    howThisFeels: ""
  },

  {
    id: "buffalo-chicken-dip",
    name: "Buffalo Chicken Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Hot", "Warm", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"cooked chicken" },
        { qty:150, unit:"g", name:"cream cheese" },
        { qty:80, unit:"g", name:"cheddar cheese" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:50, unit:"ml", name:"hot sauce" },
        { qty:30, unit:"g", name:"blue cheese" },
        { qty:10, unit:"g", name:"spring onions" },
        { qty:5, unit:"g", name:"garlic cloves" }
      ],
      method: "Shred the cooked chicken and mix with the softened cream cheese, sour cream, hot sauce, garlic and most of the cheddar. Spread into a dish, scatter the rest of the cheddar and the crumbled blue cheese on top, and bake at 190°C until bubbling. Finish with sliced spring onion and serve hot."
    },
    pairsWith: ["tortilla chips", "celery sticks", "crackers", "toasted bread"],
    aliases: ["buffalo chicken dip"],
    story: "All the flavour of hot wings in a scoopable, cheesy bake — the indulgent star of American game-day spreads. Use a proper cayenne hot sauce and don't be shy with it.",
    howThisFeels: ""
  },

  {
    id: "white-bean-dip",
    name: "White Bean Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Italy · Mediterranean",
    flavourChips: ["Earthy", "Aromatic", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:240, unit:"g", name:"tinned cannellini beans (drained)" },
        { qty:30, unit:"ml", name:"olive oil" },
        { qty:20, unit:"ml", name:"lemon juice" },
        { qty:20, unit:"ml", name:"water" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"fresh rosemary" },
        { qty:1, unit:"g", name:"ground cumin" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Gently warm the garlic and rosemary in the olive oil to soften and perfume it. Blend the drained beans with the lemon, water and the warm garlicky oil until smooth and creamy, then season. Lighter and earthier than hummus, and just as quick — loosen with a little water to your liking."
    },
    pairsWith: ["crostini", "crudités", "flatbread", "grilled vegetables", "bread"],
    aliases: ["white bean dip", "cannellini dip"],
    story: "A creamy, earthy Italian-style dip of soft white beans, garlic and rosemary — the Mediterranean answer to hummus. Quietly elegant, and made from a tin you already have in the cupboard.",
    howThisFeels: ""
  },

  {
    id: "labneh",
    name: "Labneh",
    type: "dip",
    shelf: "dressings-dips",
    region: "Middle East · Levant",
    flavourChips: ["Tangy", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:350, unit:"g", name:"thick yoghurt" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"za'atar" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Stir the salt and crushed garlic through the yoghurt, then spoon it into a muslin-lined sieve and let it drain in the fridge for 12–24 hours until thick and spreadable like a soft cheese. Spread onto a plate, swirl, and finish with a generous pool of olive oil, a squeeze of lemon and a dusting of za'atar."
    },
    pairsWith: ["pita bread", "flatbread", "olives", "crudités", "grilled vegetables"],
    aliases: ["labneh", "labne", "yoghurt cheese"],
    story: "Yoghurt strained until it becomes a soft, tangy cheese — the everyday staple of the Levantine breakfast table. All it asks is time and a square of cloth.",
    howThisFeels: ""
  },

  {
    id: "skordalia",
    name: "Skordalia",
    type: "dip",
    shelf: "dressings-dips",
    region: "Greece",
    flavourChips: ["Aromatic", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"potatoes" },
        { qty:60, unit:"ml", name:"olive oil" },
        { qty:20, unit:"ml", name:"white wine vinegar" },
        { qty:15, unit:"g", name:"garlic cloves" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Boil the potatoes until soft, then mash smooth while still warm. Pound the garlic with the salt to a paste and beat it in, then gradually work in the olive oil, vinegar and lemon a little at a time until thick and emulsified, like a garlicky mash. Punchy and fiercely garlicky — a Greek meze classic."
    },
    pairsWith: ["fried fish", "beetroot", "fried vegetables", "bread"],
    aliases: ["skordalia"],
    story: "A thick, potent garlic emulsion thickened with potato or bread — the Greek answer to aioli, and just as unafraid of garlic. Traditionally pounded by hand for the smoothest result.",
    howThisFeels: ""
  },

  {
    id: "romesco",
    name: "Romesco",
    type: "dip",
    shelf: "dressings-dips",
    region: "Spain · Catalonia",
    flavourChips: ["Earthy", "Aromatic", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"roasted red peppers" },
        { qty:80, unit:"g", name:"tomatoes" },
        { qty:60, unit:"g", name:"almonds" },
        { qty:40, unit:"ml", name:"olive oil" },
        { qty:30, unit:"g", name:"bread" },
        { qty:20, unit:"ml", name:"sherry vinegar" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"smoked paprika" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Toast the almonds and the bread until golden. Blend them with the roasted peppers, tomato, garlic, smoked paprika and vinegar to a coarse paste, then stream in the olive oil. Keep some texture from the nuts — romesco should be rustic, smoky and a little grainy."
    },
    pairsWith: ["grilled spring onions", "fish", "grilled chicken", "prawns", "bread"],
    aliases: ["romesco", "romesco sauce"],
    story: "The smoky, nutty Catalan sauce of roasted peppers, almonds and bread — born to be scooped up with charred spring onions at a calçotada. Vibrant, rustic and endlessly useful.",
    howThisFeels: ""
  },

  {
    id: "caponata",
    name: "Caponata",
    type: "dip",
    shelf: "dressings-dips",
    region: "Italy · Sicily",
    flavourChips: ["Tangy", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"aubergine" },
        { qty:120, unit:"g", name:"tomatoes" },
        { qty:60, unit:"g", name:"celery" },
        { qty:60, unit:"g", name:"onion" },
        { qty:40, unit:"g", name:"green olives" },
        { qty:40, unit:"ml", name:"olive oil" },
        { qty:25, unit:"ml", name:"red wine vinegar" },
        { qty:15, unit:"g", name:"sugar" },
        { qty:15, unit:"g", name:"capers" },
        { qty:15, unit:"g", name:"pine nuts" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Fry the diced aubergine in the oil until golden, then set aside. Soften the celery and onion, add the tomato, olives and capers, and cook down. Return the aubergine, then add the vinegar and sugar and simmer until jammy and sweet-sour. Stir in toasted pine nuts and cool — caponata is always better at room temperature the next day."
    },
    pairsWith: ["crusty bread", "crostini", "grilled fish", "cheese", "pasta"],
    aliases: ["caponata"],
    story: "Sicily's sweet-and-sour aubergine relish, its agrodolce balance of vinegar and sugar singing against salty olives and capers. Like many great things, it tastes even better the day after you make it.",
    howThisFeels: ""
  },

  {
    id: "queso-fundido",
    name: "Queso Fundido",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mexico",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"mozzarella cheese" },
        { qty:100, unit:"g", name:"chorizo" },
        { qty:40, unit:"g", name:"onion" },
        { qty:40, unit:"g", name:"tomatoes" },
        { qty:20, unit:"g", name:"green chilli" },
        { qty:5, unit:"g", name:"garlic cloves" }
      ],
      method: "Fry the crumbled chorizo until its oil runs, then soften the onion, chilli and garlic in it. Pile the grated cheese into a hot ovenproof dish, scatter the chorizo mix and tomato on top, and bake or grill until molten and bubbling. Serve immediately, scooped into warm tortillas — it sets fast as it cools, so eat it stretchy and hot."
    },
    pairsWith: ["warm tortillas", "tortilla chips", "tacos"],
    aliases: ["queso fundido"],
    story: "Mexico's molten cheese dish — a hot skillet of stretchy melted cheese shot through with spiced chorizo. It waits for no one: scoop it into tortillas the moment it leaves the heat.",
    howThisFeels: ""
  },

  {
    id: "whipped-ricotta",
    name: "Whipped Ricotta",
    type: "dip",
    shelf: "dressings-dips",
    region: "Italy",
    flavourChips: ["Aromatic", "Tangy", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:250, unit:"g", name:"ricotta cheese" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:8, unit:"g", name:"honey" },
        { qty:4, unit:"g", name:"garlic cloves" },
        { qty:4, unit:"g", name:"fresh herbs" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Blend the ricotta with the olive oil, lemon, garlic and a little salt until completely light and airy — a minute in the processor transforms its texture. Spread into a shallow bowl, make swirls with the back of a spoon, and finish with a drizzle of honey, fresh herbs, oil and cracked pepper. Elegant and barely any work."
    },
    pairsWith: ["crostini", "crackers", "roast vegetables", "fresh fruit", "bread"],
    aliases: ["whipped ricotta", "whipped ricotta dip"],
    story: "Humble ricotta whipped until it turns into a light, elegant cloud — the easiest way to make a cheap tub of cheese look like a restaurant starter. Sweet with honey or savoury with herbs, it goes both ways.",
    howThisFeels: ""
  },

  {
    id: "cowboy-caviar",
    name: "Cowboy Caviar",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA · Texas",
    flavourChips: ["Tangy", "Herby", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"black beans (drained)" },
        { qty:100, unit:"g", name:"sweetcorn" },
        { qty:80, unit:"g", name:"tomatoes" },
        { qty:60, unit:"g", name:"red pepper" },
        { qty:40, unit:"g", name:"onion" },
        { qty:20, unit:"ml", name:"lime juice" },
        { qty:20, unit:"ml", name:"olive oil" },
        { qty:8, unit:"g", name:"fresh coriander" },
        { qty:8, unit:"g", name:"green chilli" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Finely dice the tomato, pepper, onion and chilli and chop the coriander. Toss everything with the drained beans and corn, then dress with lime, olive oil and salt. Let it sit for half an hour so the flavours mingle. Somewhere between a salsa and a salad — scoop it with chips or pile it onto grilled meat."
    },
    pairsWith: ["tortilla chips", "grilled meat", "tacos", "salads"],
    aliases: ["cowboy caviar", "texas caviar"],
    story: "A chunky Texan dip of beans, corn and crisp vegetables in a zingy lime dressing — fresh, healthy-ish and endlessly scoopable. It straddles the line between dip and salad, and nobody minds.",
    howThisFeels: ""
  },

  {
    id: "bagna-cauda",
    name: "Bagna Cauda",
    type: "dip",
    shelf: "dressings-dips",
    region: "Italy · Piedmont",
    flavourChips: ["Aromatic", "Earthy", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:80, unit:"ml", name:"olive oil" },
        { qty:60, unit:"g", name:"butter" },
        { qty:40, unit:"g", name:"anchovies" },
        { qty:25, unit:"g", name:"garlic cloves" },
        { qty:30, unit:"ml", name:"cream" }
      ],
      method: "Melt the butter with the olive oil over very low heat, add the finely chopped garlic and cook gently until soft but not coloured. Add the anchovies and stir until they completely dissolve into the warm oil, then whisk in the cream for a smoother bath. Keep it warm over a tealight or burner and dip raw and blanched vegetables straight in."
    },
    pairsWith: ["raw vegetables", "blanched vegetables", "crusty bread", "crudités"],
    aliases: ["bagna cauda"],
    story: "The Piedmontese 'hot bath' — a warm, garlicky, anchovy-rich dip kept bubbling at the table for dipping vegetables. A communal winter ritual of northern Italy, intense and deeply savoury.",
    howThisFeels: ""
  },

  {
    id: "beetroot-hummus",
    name: "Beetroot Hummus",
    type: "dip",
    shelf: "dressings-dips",
    region: "Middle East · modern",
    flavourChips: ["Earthy", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:180, unit:"g", name:"tinned chickpeas (drained)" },
        { qty:120, unit:"g", name:"cooked beetroot" },
        { qty:50, unit:"g", name:"tahini" },
        { qty:25, unit:"ml", name:"lemon juice" },
        { qty:25, unit:"ml", name:"olive oil" },
        { qty:8, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"ground cumin" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Blend the chickpeas, cooked beetroot, tahini, lemon, garlic and cumin until completely smooth, then stream in the olive oil. The beetroot gives it an earthy sweetness and a startling magenta colour that makes any spread look spectacular. Loosen with a little water if needed."
    },
    pairsWith: ["pita bread", "crudités", "flatbread", "feta", "grilled lamb"],
    aliases: ["beetroot hummus", "beet hummus"],
    story: "Classic hummus turned a vivid, jewel-bright pink with roasted beetroot, earthy and faintly sweet. As much a centrepiece for the eye as a dip for the table.",
    howThisFeels: ""
  },

  {
    id: "mint-fava-bean-dip",
    name: "Mint Fava Bean Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mediterranean",
    flavourChips: ["Herby", "Tangy", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:240, unit:"g", name:"broad beans (podded)" },
        { qty:30, unit:"ml", name:"olive oil" },
        { qty:20, unit:"ml", name:"lemon juice" },
        { qty:20, unit:"g", name:"parmesan cheese" },
        { qty:8, unit:"g", name:"fresh mint" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Blanch the podded broad beans briefly, then slip off the grey skins for the brightest green and sweetest flavour. Blend with the mint, lemon, garlic, parmesan and olive oil to a coarse, vivid green purée and season. Fresh, grassy and spring-like — leave out the parmesan to keep it vegan."
    },
    pairsWith: ["crostini", "pita bread", "crudités", "grilled lamb", "feta"],
    aliases: ["fava bean dip", "broad bean dip", "mint fava dip"],
    story: "A vibrant, spring-green dip of fresh broad beans and mint — light, grassy and bright on the plate. Slipping the skins off the beans is fiddly but turns it from drab to dazzling.",
    howThisFeels: ""
  },

  {
    id: "smoked-salmon-dip",
    name: "Smoked Salmon Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Scandinavia",
    flavourChips: ["Tangy", "Aromatic", "Herby"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"cream cheese" },
        { qty:100, unit:"g", name:"smoked salmon" },
        { qty:50, unit:"g", name:"sour cream" },
        { qty:12, unit:"ml", name:"lemon juice" },
        { qty:10, unit:"g", name:"capers" },
        { qty:6, unit:"g", name:"fresh dill" },
        { qty:4, unit:"g", name:"chives" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Beat the cream cheese and sour cream together until smooth, then fold through the flaked smoked salmon, chopped dill, chives, capers and lemon. Leave it a little chunky so you get pieces of salmon throughout. Season with pepper — it rarely needs salt. Chill before serving."
    },
    pairsWith: ["blinis", "crackers", "cucumber rounds", "toast", "bagels"],
    aliases: ["smoked salmon dip", "salmon pâté"],
    story: "Rich, dill-flecked cream cheese shot through with smoked salmon — the Scandinavian-style dip that elevates a simple cracker into something celebratory. Keep it chunky so every scoop finds salmon.",
    howThisFeels: ""
  },

  {
    id: "taramasalata",
    name: "Taramasalata",
    type: "dip",
    shelf: "dressings-dips",
    region: "Greece",
    flavourChips: ["Tangy", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:120, unit:"ml", name:"olive oil" },
        { qty:80, unit:"g", name:"smoked cod roe" },
        { qty:60, unit:"g", name:"bread" },
        { qty:30, unit:"ml", name:"lemon juice" },
        { qty:20, unit:"g", name:"onion" },
        { qty:4, unit:"g", name:"garlic cloves" }
      ],
      method: "Soak the bread (crusts removed) in a little water, then squeeze out the excess. Blend it with the cod roe, grated onion, garlic and lemon, then stream in the olive oil slowly as for a mayonnaise until pale, smooth and thick. Add the oil gradually or it will split. Traditionally pink-blushed, though good roe makes it a soft beige."
    },
    pairsWith: ["pita bread", "crudités", "olives", "crusty bread"],
    aliases: ["taramasalata", "taramosalata"],
    story: "The velvety Greek dip of cured fish roe emulsified with oil and bread, a fixture of the meze table. Made well it is delicate and savoury — a world away from the lurid pink tubs.",
    howThisFeels: ""
  },

  {
    id: "smoky-paprika-yogurt",
    name: "Smoky Paprika Yogurt",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mediterranean · modern",
    flavourChips: ["Tangy", "Aromatic", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:300, unit:"g", name:"thick yoghurt" },
        { qty:20, unit:"ml", name:"olive oil" },
        { qty:10, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:4, unit:"g", name:"smoked paprika" },
        { qty:3, unit:"g", name:"fresh mint" },
        { qty:1, unit:"g", name:"ground cumin" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Stir the yoghurt with the crushed garlic, lemon, cumin and salt. Warm the smoked paprika gently in the olive oil for a few seconds to bloom its colour and flavour, then swirl most of it through the yoghurt and drizzle the rest on top with chopped mint. Light, tangy and gently smoky."
    },
    pairsWith: ["grilled meat", "flatbread", "roast vegetables", "falafel", "crudités"],
    aliases: ["smoky paprika yogurt", "paprika yoghurt dip"],
    story: "Cool yoghurt lifted with smoky paprika bloomed in warm oil — a light, tangy dip that pairs with almost anything off the grill. The trick is warming the paprika so its flavour wakes up.",
    howThisFeels: ""
  },

  {
    id: "herby-cucumber-yogurt",
    name: "Herby Cucumber Yogurt",
    type: "dip",
    shelf: "dressings-dips",
    region: "Mediterranean",
    flavourChips: ["Herby", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:300, unit:"g", name:"thick yoghurt" },
        { qty:100, unit:"g", name:"cucumber" },
        { qty:12, unit:"ml", name:"olive oil" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"fresh dill" },
        { qty:5, unit:"g", name:"fresh mint" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:4, unit:"g", name:"fresh parsley" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Grate the cucumber and squeeze it really dry. Stir it through the yoghurt with all the chopped herbs, garlic, oil, lemon and salt — this is a herbier, thicker cousin of tzatziki, leaning hard on the fresh green. Rest in the fridge before serving."
    },
    pairsWith: ["pita bread", "grilled lamb", "roast vegetables", "falafel", "crudités"],
    aliases: ["herby cucumber yogurt", "herbed yoghurt dip"],
    story: "A thick, herb-packed yoghurt dip — like tzatziki turned up, with dill, mint and parsley all crowding in. Cool, green and endlessly scoopable alongside anything off the grill.",
    howThisFeels: ""
  },

  {
    id: "spiced-sumac-dip",
    name: "Spiced Sumac Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Middle East · Levant",
    flavourChips: ["Tangy", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:320, unit:"g", name:"thick yoghurt" },
        { qty:15, unit:"ml", name:"olive oil" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:6, unit:"g", name:"sumac" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:3, unit:"g", name:"fresh mint" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Use a good thick (or strained) yoghurt and stir through the crushed garlic, lemon and salt. Spread into a bowl, then dust generously with the tangy red sumac and drizzle with olive oil, finishing with chopped mint. The sumac brings a bright, lemony sourness without any actual lemon needed."
    },
    pairsWith: ["flatbread", "grilled meat", "roast vegetables", "falafel", "crudités"],
    aliases: ["sumac dip", "spiced sumac yoghurt"],
    story: "Thick, garlicky yoghurt crowned with tangy crimson sumac — simple but striking, both to taste and to look at. Sumac does the work of lemon with a deeper, fruitier sourness.",
    howThisFeels: ""
  },

  {
    id: "fry-sauce",
    name: "Fry Sauce",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:100, unit:"g", name:"mayonnaise" },
        { qty:80, unit:"g", name:"tomato ketchup" },
        { qty:5, unit:"ml", name:"white vinegar" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:1, unit:"g", name:"smoked paprika" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Whisk the mayonnaise and ketchup together — roughly equal parts — with the vinegar, garlic powder and a pinch of smoked paprika. Adjust to taste. That's it: the simplest, most addictive sauce for a plate of hot chips."
    },
    pairsWith: ["chips", "burgers", "onion rings", "hot dogs"],
    aliases: ["fry sauce", "burger sauce"],
    story: "The sweet-and-tangy mayo-and-ketchup mix that diners swear by — humble, instant and impossible to stop dipping into. Proof that the best sauce is sometimes two things you already have.",
    howThisFeels: ""
  },

  {
    id: "spicy-umami-mayo",
    name: "Spicy Umami Mayo",
    type: "dip",
    shelf: "dressings-dips",
    region: "Asian-fusion",
    flavourChips: ["Hot", "Aromatic", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:120, unit:"g", name:"mayonnaise" },
        { qty:25, unit:"g", name:"sriracha" },
        { qty:8, unit:"ml", name:"soy sauce" },
        { qty:5, unit:"ml", name:"sesame oil" },
        { qty:5, unit:"ml", name:"lime juice" },
        { qty:3, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"sugar" }
      ],
      method: "Whisk everything together until smooth and pale orange. The mayo carries the heat of the sriracha while the soy and sesame add deep savoury umami and the lime keeps it bright. Adjust the sriracha to your heat tolerance."
    },
    pairsWith: ["sushi", "chips", "prawns", "burgers", "rice bowls"],
    aliases: ["spicy mayo", "sriracha mayo", "umami mayo"],
    story: "The creamy, addictive drizzle on every sushi burrito and loaded fry — mayo, sriracha and soy in dangerous harmony. Once it's in the fridge you will find reasons to use it.",
    howThisFeels: ""
  },

  {
    id: "garlic-chive-mayo",
    name: "Garlic & Chive Mayo",
    type: "dip",
    shelf: "dressings-dips",
    region: "Classic",
    flavourChips: ["Aromatic", "Herby", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:130, unit:"g", name:"mayonnaise" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:6, unit:"g", name:"fresh chives" },
        { qty:6, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Stir the crushed garlic, finely snipped chives and lemon through the mayonnaise and season. Let it sit for half an hour so the garlic mellows into the mayo. Simple, savoury and exactly what a bowl of plain crisps or hot chips is asking for."
    },
    pairsWith: ["potato crisps", "chips", "sandwiches", "grilled vegetables"],
    aliases: ["garlic chive mayo", "garlic mayo dip"],
    story: "A no-fuss savoury mayo, fragrant with garlic and freshened with chives — the easy upgrade from plain mayonnaise. The kind of thing that quietly disappears at a braai.",
    howThisFeels: ""
  },

  {
    id: "creamy-jalapeno-ranch",
    name: "Creamy Jalapeño Ranch",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA · Tex-Mex",
    flavourChips: ["Tangy", "Herby", "Hot"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:80, unit:"g", name:"mayonnaise" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:40, unit:"ml", name:"buttermilk" },
        { qty:20, unit:"g", name:"jalapeño" },
        { qty:8, unit:"ml", name:"lime juice" },
        { qty:6, unit:"g", name:"fresh coriander" },
        { qty:4, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"dried dill" },
        { qty:2, unit:"g", name:"onion powder" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Blend everything together until smooth and pale green, then loosen with a little more buttermilk if you want it pourable for a dressing. The jalapeño and coriander give classic ranch a fresh, spicy kick. Chill before serving — it sharpens as it sits."
    },
    pairsWith: ["chicken wings", "chips", "crudités", "tacos", "salads"],
    aliases: ["jalapeño ranch", "creamy jalapeno ranch", "ranch dip"],
    story: "Cool, herby ranch with a green chilli kick — dip and dressing in one bowl. The coriander and lime drag the American classic somewhere a little more interesting.",
    howThisFeels: ""
  },

  {
    id: "roasted-red-pepper-feta-dip",
    name: "Roasted Red Pepper & Feta Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Greece",
    flavourChips: ["Tangy", "Aromatic", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"roasted red peppers" },
        { qty:120, unit:"g", name:"feta cheese" },
        { qty:40, unit:"g", name:"cream cheese" },
        { qty:20, unit:"ml", name:"olive oil" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"chilli flakes" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Blend the roasted peppers, feta, cream cheese, garlic, lemon and olive oil until smooth and creamy. Add the chilli flakes for a gentle warmth — this is the Greek tirokafteri, the smooth, salty-sweet, slightly spicy pepper-and-feta dip. Drizzle with oil and a few more chilli flakes to serve."
    },
    pairsWith: ["pita bread", "crudités", "grilled bread", "roast vegetables"],
    aliases: ["roasted red pepper feta dip", "tirokafteri", "htipiti"],
    story: "The smooth, salty-sweet Greek dip of roasted pepper whipped with feta, known as tirokafteri when the chilli bites. Smoky pepper and tangy cheese were made for each other.",
    howThisFeels: ""
  },

  {
    id: "caramelized-onion-bacon-jam-dip",
    name: "Caramelized Onion & Bacon Jam Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Warm", "Earthy", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:150, unit:"g", name:"onion" },
        { qty:120, unit:"g", name:"sour cream" },
        { qty:80, unit:"g", name:"bacon" },
        { qty:60, unit:"g", name:"cream cheese" },
        { qty:10, unit:"g", name:"brown sugar" },
        { qty:10, unit:"ml", name:"balsamic vinegar" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:4, unit:"g", name:"chives" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Fry the chopped bacon until crisp, then cook the onions slowly in the bacon fat until deeply caramelised, adding the sugar and balsamic to make a sticky jam. Cool, then fold most of it through the softened cream cheese and sour cream with the garlic. Top with the rest of the bacon jam and chives. Decadent, sweet and salty."
    },
    pairsWith: ["potato crisps", "crackers", "crostini", "crudités"],
    aliases: ["bacon jam dip", "caramelized onion bacon dip"],
    story: "Sticky-sweet caramelised onions and crisp bacon folded into a cool creamy base — pure salty-sweet indulgence. The kind of dip that ruins all other dips for you.",
    howThisFeels: ""
  },

  {
    id: "coronation-mayo-dip",
    name: "Coronation Mayo Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Britain",
    flavourChips: ["Warm", "Aromatic", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:120, unit:"g", name:"mayonnaise" },
        { qty:30, unit:"g", name:"mango chutney" },
        { qty:15, unit:"g", name:"sultanas" },
        { qty:8, unit:"ml", name:"lemon juice" },
        { qty:4, unit:"g", name:"curry powder" },
        { qty:3, unit:"g", name:"fresh coriander" },
        { qty:1, unit:"g", name:"ground ginger" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Warm the curry powder gently in a dry pan for a few seconds to take off the raw edge, then cool and stir it through the mayonnaise with the mango chutney, lemon, ginger and sultanas. Mild, fruity and gently spiced — fold in shredded chicken for a coronation chicken, or serve as a dip as is."
    },
    pairsWith: ["cold chicken", "sandwiches", "crackers", "jacket potato", "samoosas"],
    aliases: ["coronation mayo", "coronation dip", "curried mayo"],
    story: "The mild, fruity curried mayonnaise invented for a 1953 coronation banquet — sweet with mango chutney and gently spiced. Retro, comforting, and the soul of a good chicken sandwich.",
    howThisFeels: ""
  },

  {
    id: "hot-corn-green-chile-dip",
    name: "Hot Corn & Green Chile Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA · Tex-Mex",
    flavourChips: ["Warm", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"sweetcorn" },
        { qty:100, unit:"g", name:"cream cheese" },
        { qty:60, unit:"g", name:"cheddar cheese" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:40, unit:"g", name:"mayonnaise" },
        { qty:25, unit:"g", name:"green chilli" },
        { qty:15, unit:"g", name:"spring onions" },
        { qty:5, unit:"g", name:"garlic cloves" },
        { qty:2, unit:"g", name:"salt" }
      ],
      method: "Char the corn in a dry pan for extra flavour if you have a minute. Mix it with the softened cream cheese, sour cream, mayo, garlic, chopped green chilli and most of the cheddar. Spread into a dish, top with the rest of the cheese, and bake at 190°C until bubbling and golden. Scatter spring onions and serve hot."
    },
    pairsWith: ["tortilla chips", "crackers", "toasted bread"],
    aliases: ["hot corn dip", "corn and green chile dip", "jalapeño corn dip"],
    story: "A warm, gooey comfort-food dip of sweet corn, melty cheese and green chilli — game-day food at its most shameless. Charring the corn first is the small step that lifts it.",
    howThisFeels: ""
  },

  {
    id: "blue-cheese-walnut-dip",
    name: "Blue Cheese & Walnut Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "Classic",
    flavourChips: ["Earthy", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:100, unit:"g", name:"blue cheese" },
        { qty:100, unit:"g", name:"cream cheese" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:40, unit:"g", name:"walnuts" },
        { qty:8, unit:"g", name:"honey" },
        { qty:4, unit:"g", name:"chives" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Mash the blue cheese into the softened cream cheese and sour cream until creamy but still flecked. Fold through most of the toasted, chopped walnuts and a little honey to balance the sharpness. Top with the rest of the walnuts, more honey and chives. Bold, rich and grown-up."
    },
    pairsWith: ["crackers", "crudités", "pear slices", "crostini", "celery"],
    aliases: ["blue cheese walnut dip", "blue cheese dip"],
    story: "Sharp blue cheese softened into cream, with toasted walnuts for crunch and honey to bridge the two — a sophisticated, grown-up dip. Best with a glass of something red.",
    howThisFeels: ""
  },

  {
    id: "green-goddess-dip",
    name: "Green Goddess Dip",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA",
    flavourChips: ["Herby", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:80, unit:"g", name:"mayonnaise" },
        { qty:60, unit:"g", name:"sour cream" },
        { qty:12, unit:"ml", name:"lemon juice" },
        { qty:10, unit:"g", name:"fresh parsley" },
        { qty:8, unit:"g", name:"fresh basil" },
        { qty:8, unit:"g", name:"anchovies" },
        { qty:6, unit:"g", name:"fresh chives" },
        { qty:4, unit:"g", name:"fresh tarragon" },
        { qty:4, unit:"g", name:"garlic cloves" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Blend everything together until vividly green and smooth. The anchovy gives a savoury backbone without tasting fishy — leave it out and add a splash of caper brine for a vegetarian version. Use thick as a dip or loosen with a little buttermilk for a dressing."
    },
    pairsWith: ["crudités", "salads", "grilled chicken", "crackers", "boiled eggs"],
    aliases: ["green goddess dip", "green goddess"],
    story: "A 1920s San Francisco creation, this herb-packed green dip is all parsley, tarragon and chive over a creamy base. Vibrant and fresh, it makes a plate of raw vegetables feel like a treat.",
    howThisFeels: ""
  },

  {
    id: "pimento-cheese-dip",
    name: "Pimento Cheese",
    type: "dip",
    shelf: "dressings-dips",
    region: "USA · Southern",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"sharp cheddar cheese" },
        { qty:80, unit:"g", name:"mayonnaise" },
        { qty:50, unit:"g", name:"roasted red peppers" },
        { qty:40, unit:"g", name:"cream cheese" },
        { qty:2, unit:"g", name:"garlic powder" },
        { qty:1, unit:"g", name:"cayenne pepper" },
        { qty:1, unit:"g", name:"black pepper" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Grate the cheddar (don't use pre-grated — it won't bind the same). Mix it with the mayonnaise, softened cream cheese, finely chopped pimentos (roasted red peppers), garlic powder, cayenne and seasoning until thick and spreadable. Leave it a few hours in the fridge for the flavours to come together. Spread on crackers, celery or a burger."
    },
    pairsWith: ["crackers", "celery sticks", "white bread", "burgers", "sandwiches"],
    aliases: ["pimento cheese", "pimiento cheese", "pimento cheese dip"],
    story: "The 'caviar of the South' — sharp cheddar bound with mayonnaise and sweet pimento peppers into a thick, tangy spread. On a cracker, in a sandwich or on a burger, it is pure Southern comfort.",
    howThisFeels: ""
  }

];

if (typeof window !== "undefined") window.SPICE_DB = SPICE_DB;
if (typeof module !== "undefined" && module.exports) module.exports = SPICE_DB;


// ── TINZA SPICE ROOM — SCREEN (v33) ──────────────────────────────────────────
// State: S.spiceShelf · S.spiceEntry · S.spiceFilter · S.spiceScale (amount or people) · S.spiceHowOpen

var SPICE_SHELVES = [
  {id:"spice-blends",     e:"🌶️", t:"Spice Blends & Masalas", sub:"Garam masala · peri-peri · the real way", b:"#c0501a", bg:"#1d0e05"},
  {id:"sauces",           e:"🥫", t:"Sauces",                 sub:"Hot · herby · pan & savoury",            b:"#b83020", bg:"#1d0807"},
  {id:"chutneys-atchars", e:"🫙", t:"Chutneys & Atchars",     sub:"Fruit · hot atchar · savoury",           b:"#c08020", bg:"#1a1206"},
  {id:"sambals-relishes", e:"🥗", t:"Sambals & Relishes",     sub:"Fresh · cooked · SA",                    b:"#a08020", bg:"#16140a"},
  {id:"jams-preserves",   e:"🍓", t:"Jams & Preserves",       sub:"Fruit jams · marmalades · fermented",    b:"#b03050", bg:"#1a0810"},
  {id:"dressings-dips",   e:"🥣", t:"Dressings & Dips",       sub:"Creamy dips · oil & vinegar · bean dips",b:"#9060a0", bg:"#140a18"}
];

var SPICE_WHENMAP = {
  start:  {label:"Goes in at the start", e:"🔥", c:"#c06020"},
  mid:    {label:"Add while it cooks",   e:"🍲", c:"#c08030"},
  finish: {label:"Finish / serve alongside", e:"✨", c:"#c0a030"}
};

var SPICE_CHIPCOLOR = {
  "Warm":"#c0601a", "Earthy":"#9a7030", "Tangy":"#c0a020",
  "Hot":"#c03020", "Aromatic":"#b07040", "Herby":"#609040"
};

function spiceDB(){ return (typeof SPICE_DB!=="undefined" && SPICE_DB) || []; }
function spiceEntriesFor(shelfId){ return spiceDB().filter(e=>e.shelf===shelfId); }

// ── CATEGORY GROUPING (derived — touches no data) ─────────────────────────────
var SPICE_SAUCE_CHILLI = ["peri-peri-sauce","sweet-chilli-sauce","sriracha","chilli-garlic-sauce","sambal-oelek","harissa-paste","zhug","crispy-chilli-oil","louisiana-hot-sauce","habanero-mango-hot-sauce","gochujang","fermented-chilli-mash","scotch-bonnet-sauce"];
var SPICE_SAUCE_CONDIMENT = ["tomato-ketchup","mayonnaise","aioli","tartare-sauce","marie-rose-sauce","english-mustard","dijon-mustard","wholegrain-mustard","honey-mustard","bbq-sauce","sweet-and-sour-sauce","teriyaki-sauce","hoisin-sauce","plum-sauce"];
// blend sub-categories (rubs/pastes handled by type; everything else by id-set, default Asia & Europe)
var SPICE_BLEND_CURRY = ["garam-masala","cape-malay-curry-powder","durban-masala","madras-curry-powder","tandoori-masala","chaat-masala","breyani-masala","sri-lankan-roasted-curry-powder","panch-phoron"];
var SPICE_BLEND_MEDME = ["ras-el-hanout","harissa-spice","dukkah","zaatar","baharat","lebanese-seven-spice","advieh","hawaij-soup","khmeli-suneli"];
var SPICE_BLEND_AFAM = ["berbere","suya-spice","cajun-seasoning","jerk-seasoning","taco-seasoning","chesapeake-bay-seasoning","adobo-seasoning"];
// dip sub-categories (default Veg & Mezze)
var SPICE_DIP_WARM = ["spinach-artichoke-dip","queso-dip","buffalo-chicken-dip","queso-fundido","hot-corn-green-chile-dip"];
var SPICE_DIP_CREAMY = ["whipped-feta-dip","french-onion-dip","whipped-ricotta","smoked-salmon-dip","roasted-red-pepper-feta-dip","caramelized-onion-bacon-jam-dip","blue-cheese-walnut-dip","pimento-cheese-dip"];
var SPICE_DIP_MAYO = ["fry-sauce","spicy-umami-mayo","garlic-chive-mayo","creamy-jalapeno-ranch","coronation-mayo-dip","green-goddess-dip"];
var SPICE_DIP_BEAN = ["hummus","white-bean-dip","beetroot-hummus","mint-fava-bean-dip","cowboy-caviar"];
var SPICE_DIP_YOGURT = ["tzatziki","labneh","smoky-paprika-yogurt","herby-cucumber-yogurt","spiced-sumac-dip"];
var SPICE_GROUP_ORDER = {
  "spice-blends": ["Curry & Masala","Mediterranean & Mid-East","Africa & Americas","Asia & Europe","Rubs","Pastes"],
  "sauces": ["Meat & Meal Sauces","Chilli Sauces","Condiments"],
  "dressings-dips": ["Warm & Cheesy","Creamy & Cheese","Mayo-based","Bean & Pulse","Veg & Mezze","Yogurt"]
};
function spiceGroup(e){
  if(!e) return null;
  if(e.shelf==="spice-blends"){
    if(e.type==="rub") return "Rubs";
    if(e.type==="paste") return "Pastes";
    if(SPICE_BLEND_CURRY.indexOf(e.id)>=0) return "Curry & Masala";
    if(SPICE_BLEND_MEDME.indexOf(e.id)>=0) return "Mediterranean & Mid-East";
    if(SPICE_BLEND_AFAM.indexOf(e.id)>=0) return "Africa & Americas";
    return "Asia & Europe";
  }
  if(e.shelf==="sauces"){
    if(SPICE_SAUCE_CHILLI.indexOf(e.id)>=0) return "Chilli Sauces";
    if(SPICE_SAUCE_CONDIMENT.indexOf(e.id)>=0) return "Condiments";
    return "Meat & Meal Sauces";
  }
  if(e.shelf==="dressings-dips"){
    if(SPICE_DIP_WARM.indexOf(e.id)>=0) return "Warm & Cheesy";
    if(SPICE_DIP_CREAMY.indexOf(e.id)>=0) return "Creamy & Cheese";
    if(SPICE_DIP_MAYO.indexOf(e.id)>=0) return "Mayo-based";
    if(SPICE_DIP_BEAN.indexOf(e.id)>=0) return "Bean & Pulse";
    if(SPICE_DIP_YOGURT.indexOf(e.id)>=0) return "Yogurt";
    return "Veg & Mezze";
  }
  return null;
}
function spiceGroupsFor(shelfId, entries){
  const present = [...new Set(entries.map(spiceGroup).filter(Boolean))];
  const order = SPICE_GROUP_ORDER[shelfId] || [];
  return present.sort((a,b)=>{ const ia=order.indexOf(a), ib=order.indexOf(b); return (ia<0?99:ia)-(ib<0?99:ib); });
}

// current scale for the open entry (lazy-init to its base)
function spiceCurScale(e){
  const y = e.makeYourOwn.yield;
  return (S.spiceScale==null) ? y.base : S.spiceScale;
}
// format a measured amount; counts stay as small numbers
function spiceFmt(n, unit){
  if(unit==="g" || unit==="ml"){
    const r = Math.round(n);
    if(r>=1000) return (r/1000).toFixed(r%1000?1:0) + (unit==="g"?"kg":"l");
    return r + unit;
  }
  // counted item
  const v = Math.round(n*10)/10;
  return (v % 1 === 0) ? String(v) : v.toFixed(1);
}

// ── SHOPPING LIST (standalone, reuses core's aisleCategory + normIngredientKey) ──
function spiceCart(){ return S.spiceCart || {}; }
function spiceCartCount(){ return Object.keys(spiceCart()).length; }
function spiceScaledIngredients(e, scale){
  const base = e.makeYourOwn.yield.base;
  return (e.makeYourOwn.ingredients||[]).map(i=>({ name:i.name, amt:i.qty*(scale/base), unit:i.unit }));
}
function spiceItemKey(name, unit){
  const k = (typeof normIngredientKey==="function") ? normIngredientKey(name) : String(name).toLowerCase();
  return k + "|" + unit;
}
function spiceBuildList(){
  const cart = spiceCart(); const map = {};
  Object.keys(cart).forEach(id=>{
    const e = spiceDB().find(x=>x.id===id); if(!e) return;
    spiceScaledIngredients(e, cart[id]).forEach(ing=>{
      if(!ing.amt || ing.amt<=0) return;
      const key = spiceItemKey(ing.name, ing.unit);
      if(map[key]){ map[key].amt += ing.amt; if(!map[key].sources.includes(e.name)) map[key].sources.push(e.name); }
      else { map[key] = { key, name:ing.name, amt:ing.amt, unit:ing.unit, sources:[e.name],
        aisle:(typeof aisleCategory==="function") ? aisleCategory(ing.name) : "🧂 Other" }; }
    });
  });
  return map;
}
function spiceListText(){
  const map = spiceBuildList();
  const order = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  let out = "🧂 Tinza Spice Room — Shopping List\n";
  order.forEach(a=>{
    const its = Object.values(map).filter(i=>i.aisle===a);
    if(!its.length) return;
    out += "\n" + a + "\n";
    its.forEach(i=> out += "• " + i.name + " — " + spiceFmt(i.amt, i.unit) + "\n");
  });
  return out.trim();
}

function spiceRoomHTML(){
  if(S.spiceListOpen) return spiceListView();
  if(S.spiceEntry) return spiceEntryView();
  if(S.spiceShelf) return spiceShelfView();
  return spiceLandingView();
}

// ── LANDING ──────────────────────────────────────────────────────────────────
function spiceLandingView(){
  const howOpen = !!S.spiceHowOpen;
  return `<div>
    <div class="header" style="padding:0;overflow:hidden;">
      <div style="position:relative;height:150px;background:linear-gradient(135deg,#2a1206,#3a1d08 55%,#1d0e05);display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="position:absolute;top:14px;right:16px;font-size:44px;opacity:0.35;">🧂</div>
        <div style="padding:14px 16px;">
          <button class="back-btn" onclick="set({screen:'home'})" style="color:#e0a060;margin-bottom:8px;">← Home</button>
          <h1 style="margin:0;font-size:24px;font-weight:normal;color:#f5e8cc;letter-spacing:1px;">Tinza Spice Room</h1>
          <p style="margin:2px 0 0;font-size:12px;color:#c09060;font-style:italic;">Everything that enhances your food</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div onclick="S.searchPrevScreen='spice';S.searchQuery='';S.searchResults=[];S.screen='search_results';draw();window.scrollTo(0,0);"
        style="padding:9px 14px;background:#161009;border:1px solid #4a2a10;border-radius:10px;color:#b8895a;font-size:13px;cursor:text;margin-bottom:12px;">🔍 Search blends, sauces & condiments…</div>

      ${spiceCartCount()>0?`<button onclick="set({spiceListOpen:true})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#14180a;border:2px solid #6a8020;border-radius:10px;color:#c8e840;font-size:13px;font-weight:bold;cursor:pointer;margin-bottom:12px;">
        <span>🛒 My Spice Shopping List</span><span style="background:#6a8020;color:#0f0e0c;border-radius:20px;padding:1px 9px;font-size:12px;">${spiceCartCount()}</span>
      </button>`:''}

      <div class="how-it-works" style="margin-bottom:14px;cursor:pointer;" onclick="set({spiceHowOpen:${howOpen?'false':'true'}})">
        <span style="font-size:12px;color:#c08040;">${howOpen?'▲':'▼'} How it works</span>
        ${howOpen?`<div style="font-size:12px;color:#c2a888;line-height:1.6;margin-top:8px;">Pick a shelf, then an entry. Every entry shows its <strong style="color:#c0a060;">flavour</strong>, <strong style="color:#c0a060;">when to add it</strong>, and a <strong style="color:#c0a060;">Make Your Own</strong> recipe. Blends and preserves scale by <strong style="color:#c0a060;">batch</strong> (a small jar, a bottle); fresh sauces and relishes scale by <strong style="color:#c0a060;">people</strong>, just like the braai.</div>`:''}
      </div>

      <div class="grid2" style="gap:8px;">
        ${SPICE_SHELVES.map(sh=>{
          const n = spiceEntriesFor(sh.id).length;
          const countTxt = n>0 ? `${n} ${n===1?'entry':'entries'}` : 'coming soon';
          return `<button onclick="set({spiceShelf:'${sh.id}',spiceFilter:null,spiceGroupFilter:null,spiceShown:8})"
            style="display:flex;flex-direction:column;align-items:flex-start;padding:14px;background:${sh.bg};border:2px solid ${sh.b};border-radius:14px;cursor:pointer;text-align:left;min-height:104px;">
            <span style="font-size:26px;margin-bottom:6px;">${sh.e}</span>
            <div style="font-size:13px;color:#f5e8cc;font-weight:bold;margin-bottom:3px;line-height:1.3;">${sh.t}</div>
            <div style="font-size:10px;color:#c0a274;line-height:1.35;margin-bottom:6px;flex:1;">${sh.sub}</div>
            <div style="font-size:10px;color:${n>0?sh.b:'#a88a5e'};letter-spacing:0.5px;">${countTxt}</div>
          </button>`;
        }).join("")}
      </div>
      <div style="height:24px;"></div>
    </div>
  </div>`;
}

// ── SHELF (list of entries) ────────────────────────────────────────────────
function spiceShelfView(){
  const shelf = SPICE_SHELVES.find(s=>s.id===S.spiceShelf) || SPICE_SHELVES[0];
  const entries = spiceEntriesFor(shelf.id);

  const groups = spiceGroupsFor(shelf.id, entries);
  const useGroups = groups.length > 1;
  const regions = [...new Set(entries.map(e=>e.region))];
  const useRegions = !useGroups && regions.length > 1;

  const gFilter = S.spiceGroupFilter;
  const rFilter = S.spiceFilter;
  let list = entries;
  if(useGroups && gFilter) list = entries.filter(e=>spiceGroup(e)===gFilter);
  else if(useRegions && rFilter) list = entries.filter(e=>e.region===rFilter);

  const PAGE = 8;
  const shownN = S.spiceShown || PAGE;
  const visible = list.slice(0, shownN);
  const moreCount = list.length - visible.length;

  const pillBase = "padding:6px 12px;border-radius:20px;border:1px solid;font-size:12px;cursor:pointer;white-space:nowrap;";
  function pill(label, active, onclick, count){
    return `<button class="pill" onclick="${onclick}" style="${pillBase}background:${active?'#2a1808':'#161009'};border-color:${active?'#c08040':'#3a2510'};color:${active?'#f5c842':'#b89868'};">${label}${count!=null?` <span style="opacity:0.6;">${count}</span>`:''}</button>`;
  }

  let pills = "";
  if(useGroups){
    pills = `<div class="pill-row" style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px;">
      ${pill("All", !gFilter, `set({spiceGroupFilter:null,spiceShown:${PAGE}})`, entries.length)}
      ${groups.map(g=>pill(g, gFilter===g, `set({spiceGroupFilter:'${g.replace(/'/g,"\\'")}',spiceShown:${PAGE}})`, entries.filter(e=>spiceGroup(e)===g).length)).join("")}
    </div>`;
  } else if(useRegions){
    pills = `<div class="pill-row" style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px;">
      ${pill("All", !rFilter, `set({spiceFilter:null,spiceShown:${PAGE}})`)}
      ${regions.map(r=>pill(r, rFilter===r, `set({spiceFilter:'${r.replace(/'/g,"\\'")}',spiceShown:${PAGE}})`)).join("")}
    </div>`;
  }

  const rows = list.length===0
    ? `<div style="background:#161009;border:1px dashed #4a3018;border-radius:12px;padding:28px 16px;text-align:center;">
        <div style="font-size:34px;margin-bottom:10px;opacity:0.5;">${shelf.e}</div>
        <div style="font-size:14px;color:#c08040;margin-bottom:4px;">${shelf.t} — coming soon</div>
        <div style="font-size:12px;color:#b09060;line-height:1.5;">We're filling this shelf next.</div>
      </div>`
    : visible.map(e=>{
        const w = SPICE_WHENMAP[e.whenToUse] || {};
        const chips = (e.flavourChips||[]).slice(0,3).map(c=>`<span style="font-size:10px;color:${SPICE_CHIPCOLOR[c]||'#a08050'};border:1px solid ${SPICE_CHIPCOLOR[c]||'#a08050'};border-radius:20px;padding:2px 8px;">${c}</span>`).join("");
        const inCart = spiceCart()[e.id] !== undefined;
        const baseAmt = e.makeYourOwn.yield.base;
        return `<div style="display:flex;align-items:stretch;gap:10px;background:#161009;border:1px solid ${inCart?'#5a6a20':'#3a2510'};border-radius:12px;padding:13px;margin-bottom:8px;">
          <button onclick="(function(){var c=Object.assign({},S.spiceCart||{});if(c['${e.id}']!==undefined)delete c['${e.id}'];else c['${e.id}']=${baseAmt};set({spiceCart:c});})()"
            title="Add to shopping list"
            style="flex-shrink:0;align-self:center;width:24px;height:24px;border-radius:6px;border:2px solid ${inCart?'#6a8020':'#a88a5e'};background:${inCart?'#6a8020':'transparent'};color:#0f0e0c;font-size:15px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;">${inCart?'✓':''}</button>
          <button onclick="set({spiceEntry:'${e.id}',spiceScale:null})"
            style="flex:1;display:block;text-align:left;background:none;border:none;padding:0;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
              <div style="flex:1;font-size:15px;color:#f5e8cc;font-weight:bold;">${e.name}</div>
              <span style="font-size:15px;color:#c08040;">→</span>
            </div>
            <div style="font-size:11px;color:#c0a274;font-style:italic;margin-bottom:7px;">${e.region}</div>
            <div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center;">
              ${chips}
              ${w.label?`<span style="font-size:10px;color:#b89868;margin-left:2px;">· ${w.e} ${w.label}</span>`:''}
            </div>
          </button>
        </div>`;
      }).join("");

  const countLine = list.length>PAGE
    ? `<div style="font-size:11px;color:#a88a5e;margin-bottom:10px;">Showing ${visible.length} of ${list.length}</div>` : "";
  const moreBtn = moreCount>0
    ? `<button onclick="set({spiceShown:${shownN+PAGE}})" style="width:100%;padding:12px;border-radius:10px;cursor:pointer;background:transparent;border:1px solid #4a3018;color:#c08040;font-size:13px;font-weight:bold;margin-top:4px;">＋ Show ${Math.min(PAGE,moreCount)} more  ·  ${moreCount} left</button>` : "";

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({spiceShelf:null,spiceFilter:null,spiceGroupFilter:null,spiceShown:${PAGE}})" style="color:#c08040;">← Spice Room</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:26px;">${shelf.e}</span>
        <h1 style="margin:0;font-size:19px;font-weight:normal;color:#f5e8cc;">${shelf.t}</h1>
      </div>
    </div>
    <div class="content">
      ${pills}
      ${spiceCartCount()>0?`<button onclick="set({spiceListOpen:true})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#14180a;border:2px solid #6a8020;border-radius:10px;color:#c8e840;font-size:13px;font-weight:bold;cursor:pointer;margin-bottom:12px;">
        <span>🛒 My Spice Shopping List</span><span style="background:#6a8020;color:#0f0e0c;border-radius:20px;padding:1px 9px;font-size:12px;">${spiceCartCount()}</span>
      </button>`:''}
      ${countLine}
      ${rows}
      ${moreBtn}
      <div style="height:24px;"></div>
    </div>
  </div>`;
}

// ── ENTRY DETAIL (v33 recipe template) ───────────────────────────────────────
function spiceEntryView(){
  const e = spiceDB().find(x=>x.id===S.spiceEntry);
  const shelf = SPICE_SHELVES.find(s=>s.id===(e&&e.shelf)) || SPICE_SHELVES[0];
  if(!e) return `<div class="content"><button class="back-btn" onclick="set({spiceEntry:null,spiceScale:null})" style="color:#c08040;">← Back</button><p style="margin-top:12px;color:#c0a080;">Entry not found.</p></div>`;

  const w = SPICE_WHENMAP[e.whenToUse] || {};
  const chips = (e.flavourChips||[]).slice(0,3).map(c=>`<span style="font-size:12px;color:${SPICE_CHIPCOLOR[c]||'#a08050'};border:1px solid ${SPICE_CHIPCOLOR[c]||'#a08050'};border-radius:20px;padding:4px 12px;">${c}</span>`).join("");

  const my = e.makeYourOwn;
  const y = my.yield;
  const cur = spiceCurScale(e);
  const isBatch = y.mode === "batch";

  // ── GREEN "MAKE YOUR OWN" BOX + SCALER ──
  let greenBox;
  if(isBatch){
    const dec = `set({spiceScale:Math.max(${y.base}, ${cur} - ${y.step})})`;
    const inc = `set({spiceScale:${cur} + ${y.step}})`;
    greenBox = `
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:4px;">🥄 Make Your Own</div>
            <div style="font-size:22px;font-weight:bold;color:#c8e840;line-height:1;">${spiceFmt(cur, y.unit)}</div>
            <div style="font-size:10px;color:#8aa848;margin-top:3px;">${y.label}${cur>y.base?` · ${Math.round(cur/y.base*10)/10}× batch`:""}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            <button onclick="${dec}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button>
            <span style="font-size:18px;color:#f5c842;font-weight:bold;min-width:54px;text-align:center;">${spiceFmt(cur, y.unit)}</span>
            <button onclick="${inc}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button>
          </div>
        </div>
      </div>`;
  } else {
    const dec = `set({spiceScale:Math.max(${y.base}, ${cur} - 1)})`;
    const inc = `set({spiceScale:Math.min(100, ${cur} + 1)})`;
    greenBox = `
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:4px;">🥄 Make Your Own</div>
            <div style="font-size:12px;color:#9ab858;">Enough for the table — scales with people</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            <button onclick="${dec}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button>
            <span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${cur}</span>
            <button onclick="${inc}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button>
          </div>
        </div>
        <div style="font-size:10px;color:#8aa848;margin-top:6px;">${cur} people</div>
      </div>`;
  }

  // ── INGREDIENTS (scaled) ──
  const ingHTML = (my.ingredients||[]).map(ing=>{
    let right;
    if(isBatch){
      const factor = cur / y.base;
      const amt = ing.qty * factor;
      right = (ing.unit==="") ? `${spiceFmt(amt,"")}` : spiceFmt(amt, ing.unit);
      return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #1e1a10;">
        <span style="width:5px;height:5px;border-radius:50%;background:#c08040;flex-shrink:0;"></span>
        <span style="flex:1;font-size:14px;color:#e0d4b8;">${ing.name}</span>
        <span style="font-size:13px;color:#f5c842;font-weight:bold;">${right}</span>
      </div>`;
    } else {
      const total = ing.qty * (cur / y.base);
      if(ing.unit===""){
        const tot = Math.max(1, Math.round(total));
        return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #1e1a10;">
          <span style="width:5px;height:5px;border-radius:50%;background:#c08040;flex-shrink:0;"></span>
          <span style="flex:1;font-size:14px;color:#e0d4b8;">${ing.name}</span>
          <span style="font-size:13px;color:#f5c842;font-weight:bold;">${tot}</span>
        </div>`;
      }
      const pp = ing.qty / y.base;
      return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #1e1a10;">
        <span style="width:5px;height:5px;border-radius:50%;background:#c08040;flex-shrink:0;"></span>
        <span style="flex:1;font-size:14px;color:#e0d4b8;">${ing.name} <span style="color:#b0a070;font-size:11px;">· ${spiceFmt(pp,ing.unit)} pp</span></span>
        <span style="font-size:13px;color:#f5c842;font-weight:bold;">${spiceFmt(total, ing.unit)}</span>
      </div>`;
    }
  }).join("");

  // method prose → numbered steps
  const steps = (my.method||"").split(/(?<=[.!?])\s+(?=[A-Z(])/).map(s=>s.trim()).filter(Boolean);
  const pairs = e.pairsWith || [];

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({spiceEntry:null,spiceScale:null})" style="color:#c08040;">← ${shelf.t}</button>
    </div>
    <div class="content">
      ${typeof recipePhoto==="function" ? recipePhoto(e.name, shelf.e, 150) : ""}

      <h1 style="margin:10px 0 2px;font-size:22px;font-weight:normal;color:#f5e8cc;">${e.name}</h1>
      <div style="font-size:12px;color:#c0a274;font-style:italic;margin-bottom:10px;">${e.region}</div>

      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${chips}</div>

      ${w.label?`<div style="display:inline-flex;align-items:center;gap:7px;background:#16100a;border:1px solid ${w.c};border-radius:10px;padding:8px 12px;margin-bottom:14px;">
        <span style="font-size:16px;">${w.e}</span>
        <div><div style="font-size:9px;letter-spacing:1px;color:#b89868;text-transform:uppercase;">When to use</div><div style="font-size:13px;color:${w.c};">${w.label}</div></div>
      </div>`:''}

      ${greenBox}

      <div style="background:#141008;border:1px solid #3a2810;border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
          <div style="font-size:10px;letter-spacing:1.5px;color:#b89868;text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#a88a5e;">${isBatch?`for ${spiceFmt(cur,y.unit)}`:`scaled for ${cur} ${cur===1?'person':'people'}`}</div>
        </div>
        ${ingHTML}
      </div>

      <div style="margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:1.5px;color:#b89868;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${steps.map((s,i)=>`<div style="display:flex;gap:12px;margin-bottom:12px;">
          <div class="step-num" style="background:#2a1808;border:2px solid #c06020;color:#f5c842;">${i+1}</div>
          <div style="flex:1;font-size:14px;color:#e0d4b8;line-height:1.6;padding-top:2px;">${s}</div>
        </div>`).join("")}
      </div>

      ${pairs.length?`<div class="goes-well">
        <div style="font-size:10px;letter-spacing:1.5px;color:#8a8ab0;text-transform:uppercase;margin-bottom:8px;">🍽️ Goes Well With</div>
        <div>${pairs.map(p=>`<span class="goes-well-pill">${p}</span>`).join("")}</div>
      </div>`:''}

      ${e.story?`<div style="background:#16100a;border-left:2px solid #c08040;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:14px;">
        <div style="font-size:13px;color:#c0a880;line-height:1.7;font-style:italic;">${e.story}</div>
      </div>`:''}

      ${e.howThisFeels?`<div style="text-align:center;font-size:13px;color:#c09060;font-style:italic;margin-bottom:14px;">${e.howThisFeels}</div>`:''}

      ${(function(){
        const inCart = spiceCart()[e.id] !== undefined;
        const addLabel = inCart ? "✓ In Shopping List — tap to update amount" : "➕ Add to Shopping List";
        return `<button onclick="(function(){var c=Object.assign({},S.spiceCart||{});c['${e.id}']=${cur};set({spiceCart:c});})()" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:${inCart?'#14180a':'#0f1404'};border:2px solid #6a8020;color:#c8e840;font-size:13px;font-weight:bold;margin-bottom:10px;">${addLabel}</button>
        ${spiceCartCount()>0?`<button onclick="set({spiceListOpen:true})" style="width:100%;padding:11px;border-radius:10px;cursor:pointer;background:transparent;border:1px solid #4a5a20;color:#9ab050;font-size:12px;margin-bottom:10px;">🛒 View Shopping List (${spiceCartCount()})</button>`:''}`;
      })()}

      <button onclick="alert('💾 Save to My Kitchen — coming with Pro!')" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#181008;border:2px solid #c06020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:10px;">💾 Save to My Kitchen</button>

      <div style="display:flex;gap:14px;justify-content:center;font-size:13px;padding:6px 0 24px;">
        <button onclick="set({spiceEntry:null,spiceScale:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">← ${shelf.t}</button>
        <span style="color:#3a2810;">|</span>
        <button onclick="set({spiceShelf:null,spiceEntry:null,spiceScale:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">🧂 Spice Room</button>
        <span style="color:#3a2810;">|</span>
        <button onclick="set({screen:'home',spiceShelf:null,spiceEntry:null,spiceScale:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">🏠 Home</button>
      </div>
    </div>
  </div>`;
}

// ── SHOPPING LIST VIEW ───────────────────────────────────────────────────────
function spiceListView(){
  const map = spiceBuildList();
  const items = Object.values(map);
  const order = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  const checked = S.spiceChecked || {};
  const sources = [...new Set(items.flatMap(i=>i.sources))];
  const remaining = items.filter(i=>!checked[i.key]).length;

  const body = items.length===0
    ? `<div style="background:#161009;border:1px dashed #4a3018;border-radius:12px;padding:28px 16px;text-align:center;">
         <div style="font-size:34px;margin-bottom:10px;opacity:0.5;">🛒</div>
         <div style="font-size:14px;color:#c08040;margin-bottom:4px;">Your shopping list is empty</div>
         <div style="font-size:12px;color:#b09060;line-height:1.5;">Open any entry and tap <strong style="color:#9ab050;">Add to Shopping List</strong>.</div>
       </div>`
    : order.map(a=>{
        const its = items.filter(i=>i.aisle===a);
        if(!its.length) return "";
        return `<div style="font-size:11px;letter-spacing:1px;color:#b89868;text-transform:uppercase;margin:14px 0 6px;">${a}</div>` +
          its.map(i=>{
            const on = !!checked[i.key];
            return `<button onclick="(function(){var c=Object.assign({},S.spiceChecked||{});if(c['${i.key}'])delete c['${i.key}'];else c['${i.key}']=true;set({spiceChecked:c});})()"
              style="width:100%;display:flex;align-items:center;gap:11px;padding:11px 12px;background:#161009;border:1px solid ${on?'#2a2010':'#3a2510'};border-radius:10px;margin-bottom:6px;cursor:pointer;text-align:left;opacity:${on?0.5:1};">
              <span style="width:20px;height:20px;border-radius:5px;border:2px solid ${on?'#6a8020':'#a88a5e'};background:${on?'#6a8020':'transparent'};color:#0f0e0c;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${on?'✓':''}</span>
              <span style="flex:1;font-size:14px;color:#e0d4b8;${on?'text-decoration:line-through;':''}">${i.name}</span>
              <span style="font-size:13px;color:#f5c842;font-weight:bold;${on?'text-decoration:line-through;':''}">${spiceFmt(i.amt, i.unit)}</span>
            </button>`;
          }).join("");
      }).join("");

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({spiceListOpen:false})" style="color:#c08040;">← Spice Room</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:24px;">🛒</span>
        <h1 style="margin:0;font-size:19px;font-weight:normal;color:#f5e8cc;">Shopping List</h1>
      </div>
    </div>
    <div class="content">
      ${sources.length?`<div style="font-size:12px;color:#c0a274;margin-bottom:4px;">For: ${sources.join(" · ")}</div>`:''}
      ${items.length?`<div style="font-size:11px;color:#b89868;margin-bottom:10px;">✅ Tap items you already have to tick them off · ${remaining} of ${items.length} left to buy</div>`:''}
      ${body}
      ${items.length?`<div style="display:flex;gap:8px;margin:18px 0 24px;">
        <button onclick="navigator.clipboard&&navigator.clipboard.writeText(spiceListText());alert('📋 Shopping list copied — paste into WhatsApp, Notes, anywhere.')" style="flex:1;padding:12px;border-radius:10px;cursor:pointer;background:#0f1404;border:2px solid #6a8020;color:#c8e840;font-size:13px;font-weight:bold;">📋 Copy List</button>
        <button onclick="if(confirm('Clear the whole shopping list?'))set({spiceCart:{},spiceChecked:{},spiceListOpen:false})" style="padding:12px 16px;border-radius:10px;cursor:pointer;background:transparent;border:1px solid #5a3520;color:#b07050;font-size:13px;">Clear all</button>
      </div>`:'<div style="height:24px;"></div>'}
    </div>
  </div>`;
}

if (typeof window !== "undefined") {
  window.spiceRoomHTML = spiceRoomHTML;
  window.spiceLandingView = spiceLandingView;
  window.spiceShelfView = spiceShelfView;
  window.spiceEntryView = spiceEntryView;
  window.spiceListView = spiceListView;
  window.spiceListText = spiceListText;
}
