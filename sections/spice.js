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
    id: "garam-masala", emoji: "🍛",
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
    id: "peri-peri-sauce", emoji: "🔥",
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
    // MF125-B · SIDE, not CONDIMENT. Eaten by the bowl alongside pap, not spooned on
    // like a relish. Spice-room MEMBERSHIP does not imply the CONDIMENT slot — Monkey
    // Gland Sauce is CONDIMENT because its record says so, not because it lives here.
    // Authored on the record; spice only transports it. ⚖️ MF125 · ruled 21 Jul.
    slot: "SIDE",
    id: "chakalaka", emoji: "🥕",
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
    id: "banana-sambal", emoji: "🍌",
    name: "Banana Sambal",
    type: "relish",
    shelf: "sambals-relishes",
    region: "South Africa · Cape Malay & Durban",
    flavourChips: ["Sweet", "Cooling", "Fresh"],
    heat: 0,
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:2, unit:"", name:"firm bananas" },
        { qty:15, unit:"ml", name:"lemon juice" },
        { qty:20, unit:"g", name:"desiccated coconut" },
        { qty:5, unit:"g", name:"sugar (optional)" }
      ],
      method: "Slice the bananas into coins just before serving. Toss them first in the lemon juice until every slice is coated — this is what stops them going brown and adds a fresh tang. Sprinkle over the coconut (and a pinch of sugar if you like it sweeter) and turn gently to coat. Serve cool, within an hour or two, alongside a hot curry — the soft sweetness tames the heat. CREAMY VERSION: skip the coconut and instead fold the lemoned banana through a spoon of mayonnaise with a pinch of sugar, for a cool, creamy sambal."
    },
    pairsWith: ["Cape Malay curry", "Durban curry", "bunny chow", "breyani", "bobotie"],
    aliases: ["banana sambal", "sliced banana", "banana & coconut sambal", "banana coconut sambal"],
    story: "On a South African curry table, banana sambal is the gentle one — cool, sweet slices in lemon and coconut, there to soothe a fierce Durban or Cape Malay curry. The lemon does double duty: it brightens the flavour and keeps the banana from browning before the meal.",
    howThisFeels: ""
  },

  {
    id: "carrot-sambal", emoji: "🥕",
    name: "Carrot Sambal",
    type: "relish",
    shelf: "sambals-relishes",
    region: "South Africa · Cape Malay",
    flavourChips: ["Fresh", "Tangy", "Mild-spiced"],
    heat: 1,
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:200, unit:"g", name:"carrots" },
        { qty:20, unit:"ml", name:"lemon juice" },
        { qty:5, unit:"g", name:"sugar" },
        { qty:3, unit:"g", name:"green chilli" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"ground cumin" }
      ],
      method: "Coarsely grate the carrots into a bowl. Stir through the lemon juice, sugar, finely chopped chilli, salt and a pinch of cumin. Toss well and let it sit 10 minutes for the flavours to come together. Serve cool alongside curry — the fresh, tangy crunch is the bright contrast to a rich, saucy pot."
    },
    pairsWith: ["Cape Malay curry", "bobotie", "breyani", "Durban curry"],
    aliases: ["carrot sambal", "sambal", "carrot salad", "geraspte wortelslaai"],
    story: "Sambals on the Cape table are the fresh, cooling foils to a hot curry — not the fiery Indonesian kind. A simple grated-carrot sambal with lemon and a whisper of chilli is the classic: bright and crunchy against the warm gravy.",
    howThisFeels: ""
  },

  {
    id: "mango-atchar", emoji: "🥭",
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
    id: "apricot-chutney", emoji: "🍑",
    name: "Apricot Chutney",
    type: "chutney",
    shelf: "chutneys-atchars",
    region: "South Africa · Cape Malay",
    flavourChips: ["Sweet", "Tangy", "Mild-spiced"],
    heat: 1,
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:250, label:"1 jar" },
      ingredients: [
        { qty:150, unit:"g", name:"dried apricots" },
        { qty:80, unit:"g", name:"onion" },
        { qty:60, unit:"g", name:"brown sugar" },
        { qty:120, unit:"ml", name:"brown vinegar" },
        { qty:120, unit:"ml", name:"water" },
        { qty:5, unit:"g", name:"garlic" },
        { qty:5, unit:"g", name:"fresh ginger" },
        { qty:3, unit:"g", name:"mild curry powder" },
        { qty:5, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"chilli flakes (optional)" }
      ],
      method: "Snip the dried apricots small and soak in the water 30 minutes to soften. Finely chop the onion, garlic and ginger. Tip everything — apricots and their soaking water, onion, garlic, ginger, sugar, vinegar, curry powder, salt and chilli — into a pot. Bring to a gentle simmer and cook 25–35 minutes, stirring now and then, until the apricots break down and the chutney is thick, glossy and jammy. Mash to the texture you like, chunky or smooth. Spoon into a sterilised jar while hot; it keeps in the fridge for weeks and deepens over a few days. Serve alongside bobotie, curries, cold meats and cheese."
    },
    pairsWith: ["bobotie", "curries", "cold meats", "cheese & crackers"],
    aliases: ["apricot chutney", "blatjang", "appelkoos blatjang", "apricot blatjang"],
    story: "Blatjang is the Cape Malay name for fruit chutney — a sweet-spiced preserve that became inseparable from the South African table, the standing partner to bobotie, bredies and cold meats. Apricot is its most-loved version.",
    howThisFeels: ""
  },

  {
    id: "chimichurri", emoji: "🌿",
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
    id: "monkey-gland-sauce", emoji: "🥩",
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
    id: "berbere", emoji: "🧂",
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
    id: "ras-el-hanout", emoji: "🧂",
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
    id: "baharat", emoji: "🧂",
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
    id: "zaatar", emoji: "🌿",
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
    id: "dukkah", emoji: "🌰",
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
    id: "chinese-five-spice", emoji: "🧂",
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
    id: "shichimi-togarashi", emoji: "🧂",
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
    id: "cajun-seasoning", emoji: "🍖",
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
    id: "jerk-seasoning", emoji: "🍖",
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
    id: "cape-malay-curry-powder", emoji: "🍛",
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
    id: "durban-masala", emoji: "🍛",
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
    id: "tandoori-masala", emoji: "🍛",
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
        { qty:2, unit:"g", name:"Garam Masala" },
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
    id: "harissa-spice", emoji: "🌶️",
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
    id: "avocado-salsa-verde",
    name: "Creamy Avocado Salsa Verde",
    type: "relish",
    shelf: "sambals-relishes",
    region: "Mexico",
    emoji: "🥑",
    flavourChips: ["Tangy", "Herby", "Hot"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode: "batch", unit: "g", base: 350, step: 350, label: "1 bowl" },
      ingredients: [
        { qty: 200, unit: "g",  name: "avocado" },
        { qty: 25,  unit: "g",  name: "fresh coriander" },
        { qty: 20,  unit: "g",  name: "green chilli" },
        { qty: 8,   unit: "g",  name: "garlic cloves" },
        { qty: 50,  unit: "g",  name: "onion" },
        { qty: 30,  unit: "ml", name: "lime juice" },
        { qty: 3,   unit: "g",  name: "salt" },
        { qty: 60,  unit: "ml", name: "water" }
      ],
      method: "Halve the avocado, twist out the stone and scoop the flesh straight into the blender — don't chop it first, you'll only bruise it and lose the silk. Throw the coriander in stalks and all: the stalks carry more flavour than the leaves and they blitz away to nothing. Drop the chillies in whole, seeds and membranes included — take the seeds out and you take out most of the fire, so that's your dial. Add the garlic, onion, lime juice and salt. Pulse in short bursts until everything is broken down, then run it flat out until it turns completely smooth, pale green and glossy. Stream in water 15ml at a time, and only if it's too thick to pour — you want it to fall off a spoon slowly, not run off it. Taste. It will nearly always want more lime and a little more salt; keep going until it makes you sit up. Eat it the day you make it — the acid holds the colour for about a day and then it browns like guacamole, and there's nothing to be done about that.",
      storage: "Same day, ideally within hours. Press cling film flat onto the surface so no air touches it and it will hold overnight in the fridge — but it will darken. It does not freeze."
    },
    pairsWith: ["tacos", "grilled chicken", "corn chips", "eggs", "grilled fish"],
    aliases: ["avocado salsa", "salsa de aguacate", "creamy green salsa", "avocado salsa verde"],
    story: "This is not a tomatillo salsa verde with avocado stirred in — it's its own thing, salsa de aguacate, the pale creamy green one sitting in a squeeze bottle on every taqueria counter in Mexico. Where a tomatillo salsa is tart and thin and slaps you, this one is rich and cool and coats. And it's the one that actually works in South Africa: tomatillos are all but unbuyable here, while avocados are everywhere and cheap. So instead of a sad substitution, you get the better sauce — five minutes, one blender, no cooking, no stove.",
    howThisFeels: "Cool, creamy and grassy, with the heat arriving late and low. It coats a taco rather than splashing off it."
  },
  {
    id: "fajita-seasoning", emoji: "🧂",
    name: "Fajita Seasoning",
    type: "blend",
    shelf: "spice-blends",
    region: "Tex-Mex \u00b7 Rio Grande",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode: "batch", unit: "g", base: 20, step: 10, label: "small jar" },
      ingredients: [
        { qty: 6, unit: "g", name: "smoked paprika" },
        { qty: 4, unit: "g", name: "ground cumin" },
        { qty: 3, unit: "g", name: "ground coriander" },
        { qty: 2, unit: "g", name: "garlic powder" },
        { qty: 2, unit: "g", name: "onion powder" },
        { qty: 1, unit: "g", name: "dried oregano" },
        { qty: 1, unit: "g", name: "chilli powder" },
        { qty: 1, unit: "g", name: "black pepper" }
      ],
      method: "Stir everything together dry \u2014 no roasting. Now use it as a RUB, not a sauce base: toss strips of steak, chicken or peppers in a little oil, coat them heavily, and leave 20 minutes. Sear in a screaming-hot dry pan in one layer, no crowding, until the edges char. Finish OFF the heat with a hard squeeze of lime \u2014 the acid is the other half of this blend and it has to go on last."
    },
    pairsWith: ["steak fajitas", "chicken fajitas", "charred peppers and onions", "prawns", "halloumi"],
    aliases: ["fajita spice", "fajita seasoning", "fajita rub"],
    story: "A fajita is named for the faja \u2014 the belt, the strip \u2014 the skirt steak that ranch hands along the Rio Grande were handed as part-payment because nobody else wanted it. They grilled it hard over open wood and cut it across the grain. That origin is the whole recipe: this is a dry rub for fast, fierce, charred cooking, not a powder you simmer into mince. Which is exactly why it is not taco seasoning, however often the two get swapped. Taco leads with chilli and lives in a wet pan. Fajita leads with smoked paprika and ground coriander, carries far less heat, and lives on dry metal at maximum heat \u2014 finished with lime.",
    howThisFeels: "Smoke first, then a warm earthy hum, then a citrus lift that arrives late. Barely hot \u2014 the fire here is the pan, not the chilli."
  },
  {
    id: "taco-seasoning", emoji: "🧂",
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
    aliases: ["taco seasoning", "mexican seasoning",  "taco spice"],
    story: "The Tex-Mex pantry shortcut — chilli, cumin and oregano doing the heavy lifting. It is what turns a pan of mince into taco night.",
    howThisFeels: ""
  },

  {
    id: "chesapeake-bay-seasoning", emoji: "🧂",
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
    id: "lebanese-seven-spice", emoji: "🧂",
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
    id: "panch-phoron", emoji: "🧂",
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
    id: "quatre-epices", emoji: "🧂",
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
    id: "chaat-masala", emoji: "🍛",
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
    id: "sri-lankan-roasted-curry-powder", emoji: "🍛",
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
    id: "madras-curry-powder", emoji: "🍛",
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
    id: "breyani-masala", emoji: "🍛",
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
    id: "mixed-spice", emoji: "🧂",
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
    id: "khmeli-suneli", emoji: "🌿",
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
    id: "advieh", emoji: "🧂",
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
    id: "hawaij-soup", emoji: "🍲",
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
    id: "suya-spice", emoji: "🥜",
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
    id: "adobo-seasoning", emoji: "🧂",
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
    id: "chicken-rub", emoji: "🍖",
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
    id: "fish-rub", emoji: "🐟",
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
    id: "pork-rub", emoji: "🍖",
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
    id: "steak-rub", emoji: "🍖",
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
    id: "lamb-rub", emoji: "🧄",
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
    id: "ginger-garlic-paste", emoji: "🧄",
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
    id: "chermoula", emoji: "🌿",
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
    id: "thai-green-curry-paste", emoji: "🍛",
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
    id: "thai-red-curry-paste", emoji: "🍛",
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
    id: "tartare-sauce", emoji: "🥚",
    name: "Tartare Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Fish-shop classic",
    flavourChips: ["Tangy", "Creamy", "Fresh"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:120, unit:"g", name:"mayonnaise" },
        { qty:40, unit:"g", name:"gherkins" },
        { qty:15, unit:"g", name:"capers" },
        { qty:20, unit:"g", name:"onion" },
        { qty:0.5, unit:"each", name:"lemon" },
        { qty:5, unit:"g", name:"parsley" },
        { qty:5, unit:"g", name:"mustard" },
        { qty:1, unit:"g", name:"black pepper" }
      ],
      method: "Finely chop the gherkins, capers, onion and parsley. Stir them through the mayonnaise with a teaspoon of mustard, a good squeeze of lemon and a grind of black pepper. Taste, and add more lemon if you want it sharper. Rest it for 10 minutes before serving so the flavours come together — perfect with crumbed fish, fish cakes or hot chips."
    },
    pairsWith: ["fish cakes", "crumbed fish", "calamari", "hot chips", "schnitzel"],
    aliases: ["tartare sauce", "tartar sauce", "tartare"],
    story: "The fish-shop staple — mayonnaise sharpened with gherkins, capers and lemon. A real homemade tartare costs a fraction of the jarred kind and tastes alive next to it.",
    howThisFeels: ""
  },

  {
    id: "mushroom-sauce", emoji: "🍄",
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
    id: "pepper-sauce", emoji: "🧂",
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
    id: "cheese-sauce", emoji: "🥛",
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
    id: "creamy-garlic-sauce", emoji: "🧄",
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
    id: "brown-gravy", emoji: "🥣",
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
    id: "onion-gravy", emoji: "🧅",
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
    id: "bearnaise-sauce", emoji: "🥚",
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
    id: "hollandaise-sauce", emoji: "🥚",
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
    id: "bechamel-sauce", emoji: "🥛",
    name: "Béchamel (White Sauce)",
    type: "sauce",
    shelf: "sauces",
    region: "France",
    flavourChips: ["Warm", "Earthy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"", base:4, step:1, label:"" },
      ingredients: [
        { qty:500, unit:"ml", name:"milk" },
        { qty:60, unit:"g", name:"butter" },
        { qty:60, unit:"g", name:"flour" },
        { qty:2, unit:"g", name:"salt" },
        { qty:1, unit:"g", name:"white pepper" },
        { qty:1, unit:"g", name:"nutmeg" }
      ],
      method: "Make the roux: melt the butter over medium-low heat, then add the flour all at once and whisk constantly for 1–2 minutes — cook out the raw flour taste without letting it brown. Add the milk gradually: pour in about 100ml and whisk hard until smooth, then add the rest in batches, whisking so no lumps form. Turn the heat low and stir until it reaches a gentle simmer; cook about 5 minutes until thick enough to coat the back of a spoon (nappe). Off the heat, season with salt, white pepper and the pinch of nutmeg. Fold straight into cooked chicken, sautéed veg and herbs for a chicken pie filling."
    },
    pairsWith: ["chicken pie (Hoenderpastei)", "lasagne", "moussaka", "vegetable gratin", "fish pie"],
    aliases: ["bechamel", "béchamel", "white sauce", "basic white sauce", "hoenderpastei white sauce"],
    story: "The classic French mother sauce — a roux of butter and flour loosened with milk — and the creamy base for the Boerekos chicken pie (Hoenderpastei). This 60g:60g:500ml ratio gives a medium-thick sauce that sets perfectly as a pie filling. Cook the roux without colour, add cold milk to a warm roux (never hot-on-hot, or it lumps), use white pepper to keep it pristine, and stop at nappe — when a finger drawn down the back of a spoon leaves a clean trail. To level up, swap 100ml of the milk for chicken stock or dry white wine, or stir in a teaspoon of Dijon or a splash of cream at the end.",
    howThisFeels: ""
  },

  {
    id: "diane-sauce", emoji: "🥩",
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
    id: "blue-cheese-sauce", emoji: "🥛",
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
    id: "brandy-cream-sauce", emoji: "🥛",
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
    id: "chasseur-sauce", emoji: "🍄",
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
    id: "red-wine-jus", emoji: "🍷",
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
    id: "sweet-chilli-sauce", emoji: "🌶️",
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
    id: "sriracha", emoji: "🌶️",
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
    id: "chilli-garlic-sauce", emoji: "🌶️",
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
    id: "harissa-paste", emoji: "🌶️",
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
    id: "crispy-chilli-oil", emoji: "🌶️",
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
    id: "louisiana-hot-sauce", emoji: "🌶️",
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
    aliases: ["louisiana hot sauce", "cayenne pepper sauce", "tabasco-style"],
    story: "The thin, tangy, cayenne-and-vinegar hot sauce of the American South, traditionally aged through a slow ferment. The fermentation is what turns raw heat into that bright, rounded sourness.",
    howThisFeels: ""
  },

  {
    id: "habanero-mango-hot-sauce", emoji: "🌶️",
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
    id: "gochujang", emoji: "🌶️",
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
    id: "fermented-chilli-mash", emoji: "🌶️",
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
    id: "scotch-bonnet-sauce", emoji: "🌶️",
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
    aliases: ["scotch bonnet sauce", "caribbean hot sauce", "west indian pepper sauce", "hot sauce"],
    story: "The mustard-yellow pepper sauce of the West Indies, built on the fruity, blistering scotch bonnet. Carrot and mustard round it out, but make no mistake — this is the fiercest bottle on the shelf.",
    howThisFeels: ""
  },

  {
    id: "tomato-ketchup", emoji: "🍅",
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
    id: "mayonnaise", emoji: "🥚",
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
    id: "aioli", emoji: "🥚",
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
    id: "marie-rose-sauce", emoji: "🦐",
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
    id: "english-mustard", emoji: "🟡",
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
    id: "dijon-mustard", emoji: "🟡",
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
    id: "wholegrain-mustard", emoji: "🟡",
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
    id: "honey-mustard", emoji: "🍯",
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
    id: "bbq-sauce", emoji: "🍖",
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
    id: "sweet-and-sour-sauce", emoji: "🍍",
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
    id: "teriyaki-sauce", emoji: "🍶",
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
    id: "hoisin-sauce", emoji: "🥢",
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
        { qty:2, unit:"g", name:"Chinese Five Spice" }
      ],
      method: "Whisk all the ingredients together until smooth (miso stands in beautifully for the traditional fermented soybean paste). Thin with a splash of water if needed. Use as a glaze for pork and duck, a stir-fry seasoning, or the smear in pancakes and lettuce wraps."
    },
    pairsWith: ["Peking duck", "char siu pork", "stir-fries", "ribs", "lettuce wraps"],
    aliases: ["hoisin sauce", "hoisin"],
    story: "Dark, sweet and savoury, hoisin is the Chinese 'barbecue' sauce — though there is no seafood in it despite the name meaning 'sea'. It is the glossy smear that makes Peking duck sing.",
    howThisFeels: ""
  },

  {
    id: "plum-sauce", emoji: "🥢",
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
    id: "hummus", emoji: "🥣",
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
    id: "guacamole", emoji: "🥑",
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
    id: "tzatziki", emoji: "🥣",
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
    id: "baba-ganoush", emoji: "🍆",
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
    id: "spinach-artichoke-dip", emoji: "🥬",
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
    id: "muhammara", emoji: "🌰",
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
    id: "whipped-feta-dip", emoji: "🧀",
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
    id: "french-onion-dip", emoji: "🧅",
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
    id: "queso-dip", emoji: "🧀",
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
    id: "tapenade", emoji: "🥫",
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
    id: "buffalo-chicken-dip", emoji: "🍗",
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
    id: "white-bean-dip", emoji: "🥄",
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
    id: "labneh", emoji: "🥛",
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
    id: "skordalia", emoji: "🥔",
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
    id: "romesco", emoji: "🍅",
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
    id: "caponata", emoji: "🍆",
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
    id: "queso-fundido", emoji: "🧀",
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
    id: "whipped-ricotta", emoji: "🥛",
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
    id: "cowboy-caviar", emoji: "🌽",
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
    id: "bagna-cauda", emoji: "🐟",
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
    id: "beetroot-hummus", emoji: "🥗",
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
    id: "mint-fava-bean-dip", emoji: "🍃",
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
    id: "smoked-salmon-dip", emoji: "🍣",
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
    id: "taramasalata", emoji: "🐟",
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
    id: "smoky-paprika-yogurt", emoji: "🥣",
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
    id: "herby-cucumber-yogurt", emoji: "🌿",
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
    id: "spiced-sumac-dip", emoji: "🧂",
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
    id: "fry-sauce", emoji: "🍟",
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
    id: "spicy-umami-mayo", emoji: "🥚",
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
    id: "garlic-chive-mayo", emoji: "🧄",
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
    id: "creamy-jalapeno-ranch", emoji: "🥗",
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
    id: "roasted-red-pepper-feta-dip", emoji: "🧀",
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
    id: "caramelized-onion-bacon-jam-dip", emoji: "🧅",
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
    id: "coronation-mayo-dip", emoji: "🍛",
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
    id: "hot-corn-green-chile-dip", emoji: "🌽",
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
    id: "blue-cheese-walnut-dip", emoji: "🧀",
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
    id: "green-goddess-dip", emoji: "🌿",
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
    id: "pimento-cheese-dip", emoji: "🧀",
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
  },

  {
    id: "cherry-sauce", emoji: "🍒",
    name: "Cherry Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Global · European",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"serves", unit:"serving", base:6, step:1, label:"6 servings" },
      ingredients: [
        { qty:300, unit:"g", name:"cherries (fresh or frozen, pitted)" },
        { qty:180, unit:"ml", name:"water" },
        { qty:3, unit:"tbsp", name:"sugar" },
        { qty:1, unit:"tbsp", name:"cornflour (Maizena)" },
        { qty:1, unit:"tbsp", name:"lemon juice" },
        { qty:1, unit:"pinch", name:"salt" },
        { qty:0.25, unit:"tsp", name:"vanilla or almond extract (optional)" }
      ],
      method: "Mix the cornflour with a quarter-cup of the water until completely smooth and set this slurry aside. In a medium saucepan combine the cherries, the remaining water, sugar, lemon juice and a pinch of salt, and bring to a gentle boil over medium heat. Reduce to low and simmer 3–5 minutes — frozen cherries release more liquid, so simmer an extra minute or two for a thicker sauce. Whisk the slurry again, pour it in and stir constantly about 1 minute until the sauce turns thick, glossy and translucent. Off the heat, stir in the vanilla or almond extract if using. Cool 10–15 minutes — it thickens more as it cools — and serve warm or chilled. Using sour cherries? Push the sugar to 6 tbsp to balance the tartness."
    },
    pairsWith: ["pancakes", "waffles", "cheesecake", "ice cream", "rice pudding", "yoghurt"],
    aliases: ["cherry sauce", "cherry glaze", "cherry topping"],
    story: "The glossy red spoonful that turns plain pudding into pudding. Fresh or frozen both work, and frozen are usually cheaper and already pitted. Keeps in a sealed jar in the fridge up to a week — lovely stirred through yoghurt or oats the next day.",
    howThisFeels: "Spooned warm over something cold and creamy — the little gasp of tart against sweet."
  },

  {
    id: "basil-pesto", emoji: "🌿",
    name: "Basil Pesto",
    type: "paste",
    shelf: "sauces",
    region: "Italy · Liguria",
    flavourChips: ["Herby", "Aromatic", "Sharp"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"portion", base:6, step:1, label:"" },
      ingredients: [
        { qty:100, unit:"g", name:"fresh basil" },
        { qty:30, unit:"g", name:"parmesan (grated)" },
        { qty:30, unit:"g", name:"pine nuts (or cashews)" },
        { qty:1, unit:"clove", name:"garlic" },
        { qty:80, unit:"ml", name:"olive oil" },
        { qty:1, unit:"pinch", name:"salt" },
        { qty: 15, unit: "ml", name:"lemon juice (keeps it green)" }
      ],
      method: "Blitz the basil, parmesan, pine nuts, garlic, olive oil and a pinch of salt to a coarse paste — pulse rather than purée so it keeps a little texture. Squeeze in a little lemon juice to hold the vivid green, and loosen with a touch more oil if you want it pourable. Toss through hot pasta the moment it is drained, or spoon over grilled chicken, fish or roasted vegetables."
    },
    pairsWith: ["pasta", "grilled chicken", "fish", "roasted vegetables", "bruschetta"],
    aliases: ["pesto", "basil pesto", "pesto genovese", "basil pesto pasta salad"],
    story: "The green Ligurian classic — basil, parmesan, pine nuts and good oil pounded to a coarse paste. Pulse rather than purée, and finish with lemon to hold the colour. Cashews are a cheaper, friendly stand-in for pine nuts.",
    howThisFeels: "Bright, grassy and sharp with parmesan — summer stirred through a warm bowl of pasta."
  },

  {
    id: "date-paste", emoji: "🌴",
    name: "Date Paste",
    type: "paste",
    shelf: "sauces",
    region: "Middle East · North Africa",
    flavourChips: ["Earthy", "Warm", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:250, step:50, label:"small jar" },
      ingredients: [
        { qty:200, unit:"g", name:"pitted dates (Medjool or soft)" },
        { qty:120, unit:"ml", name:"hot water" },
        { qty:1, unit:"tsp", name:"lemon juice (optional)" }
      ],
      method: "Pit the dates if they are not already, then soak them in the hot water for 15–30 minutes until very soft (longer for drier dates). Tip the dates and most of the soaking water into a blender or food processor and blitz to a thick, smooth paste, adding the soaking water a splash at a time until it loosens to the texture you want. Blend in the lemon juice if using — it brightens the sweetness and helps it keep. Store in a sealed jar in the fridge up to two weeks, or freeze in spoonfuls. Use as a natural sweetener in baking, smoothies and energy balls, or as the binding sweetness in Makroudh and other date pastries."
    },
    pairsWith: ["Makroudh", "oats", "smoothies", "energy balls", "baking"],
    aliases: ["date paste", "date puree", "dates paste"],
    story: "The oldest sweetener there is — just dates and water, blitzed thick. A spoonful does the work of sugar with fibre and flavour to spare.",
    howThisFeels: "Sticky, dark and toffee-sweet — sweetness that tastes like it came from something real."
  },

  {
    id: "sambar-masala", emoji: "🍛",
    name: "Sambar Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "South India",
    flavourChips: ["Earthy", "Warm", "Tangy"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:30, step:10, label:"small jar" },
      ingredients: [
        { qty:2, unit:"tsp", name:"mild curry powder (Rajah or Hinds)" },
        { qty:1, unit:"tsp", name:"ground cumin (jeera)" },
        { qty:1, unit:"tsp", name:"ground coriander" },
        { qty:1, unit:"pinch", name:"turmeric" },
        { qty:1, unit:"pinch", name:"cayenne pepper or chilli powder" }
      ],
      method: "For a quick SA-pantry sambar masala, stir the mild curry powder, cumin and coriander together as the masala base, then add a pinch of turmeric and a few pinches of cayenne or chilli to your heat level. That covers the spice — the signature SOUR tang of sambar comes separately from tamarind: stir a small spoon of tamarind paste, or a good squeeze of lemon juice, into the pot when you add the masala. For a deeper homemade blend, dry-roast whole cumin, coriander, fenugreek, a few dried red chillies and a spoon of chana dal until fragrant, then grind to a powder."
    },
    pairsWith: ["sambar (lentil and vegetable stew)", "idli", "dosa", "steamed rice", "vada"],
    aliases: ["sambar", "sambar masala", "sambar powder", "sambar podi"],
    story: "The backbone of South Indian comfort food — earthy, warm and tangy, built to season a lentil-and-vegetable stew. Most SA supermarkets do not stock it, so a pantry mix plus tamarind gets you very close.",
    howThisFeels: "Warm, sour and grounding — the smell of a Sunday pot that has been going a while."
  },


  // ─────────────── STOCKS (type:"stock") ───────────────
  {
    id: "beef-stock", emoji: "🍲", name: "Beef Stock", type: "stock", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Rich", "Roasted", "Deep"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2.5, unit:"kg", name:"beef bones (marrow & knuckle)" },
        { qty:250, unit:"g", name:"onion (skins on is fine)" },
        { qty:150, unit:"g", name:"carrot (peels and ends count)" },
        { qty:150, unit:"g", name:"celery (leafy tops too)" },
        { qty:2, unit:"tbsp", name:"tomato paste" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:8, unit:"", name:"peppercorns" },
        { qty:1, unit:"", name:"small handful parsley stems" },
        { qty:2, unit:"", name:"thyme sprigs" },
        { qty:4, unit:"L", name:"cold water" }
      ],
      method: "Roast the bones at 220°C until deeply browned, turning now and then — dark brown is flavour, so don't burn them (about 50 min). Add the onion, carrot and celery to the tray, stir in the tomato paste, and roast on until it darkens (about 30 min). Tip everything into a big pot, splash a little water onto the roasting tray and scrape up every browned bit into the pot — that's pure flavour. Add the cold water, bring slowly to a bare simmer and skim the foam off through the first hour. Drop in the herbs and peppercorns, then simmer low and lazy, lid off, never bubbling hard, for about 7 hours. Strain through a fine sieve, bin the solids and cool fast. Simmer it back down to 2L if you want it richer."
    },
    pairsWith: ["beef stew", "gravy", "French onion soup", "risotto", "pan sauces"],
    aliases: ["beef stock", "beef broth", "beef bone broth", "brown stock"],
    story: "The backbone of every good gravy and stew, built from cheap or free butcher's bones. Roasting them first is the difference between a pale, thin stock and one with real depth and colour. Knuckle bones give the body — that soft jelly when it's cold — and marrow gives the richness; cold beef stock should wobble, that's how you know it's good. Make a big batch and freeze it: homemade beats a cube every time, with no salt bomb.",
    howThisFeels: "The smell that says something serious is on the go — bones, time, and almost no money."
  },

  {
    id: "chicken-stock", emoji: "🍲", name: "Chicken Stock", type: "stock", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Golden", "Clean", "Comforting"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"chicken bones (carcasses, wings, necks)" },
        { qty:250, unit:"g", name:"onion (skins on)" },
        { qty:150, unit:"g", name:"carrot (ends and peels)" },
        { qty:150, unit:"g", name:"celery (tops too)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:10, unit:"", name:"peppercorns" },
        { qty:1, unit:"", name:"small handful parsley stems" },
        { qty:2, unit:"", name:"thyme sprigs" },
        { qty:3.5, unit:"L", name:"cold water" }
      ],
      method: "Snap or cut the carcasses smaller — more cut surface means more flavour out. Put the bones and veg in a pot and cover with the cold water. Bring slowly to a gentle simmer and skim off the foam, then add the herbs. Keep it just trembling, never boiling, for about 4 hours. Strain through a fine sieve, and reduce gently to 2L if you like. A handful of chicken feet (cheap at most SA butchers) turns ordinary stock into something that sets like jelly — restaurant body for a few rand.",
    },
    pairsWith: ["chicken soup", "risotto", "paella", "gravy", "poaching liquid"],
    aliases: ["chicken stock", "chicken broth", "chicken bone broth", "golden stock"],
    story: "What last night's roast becomes when you don't throw the bones away — the most-used stock in the kitchen and the easiest to make. A clean, gentle simmer keeps it golden; a hard boil turns it cloudy and greasy. Save carcasses, wings and necks in the freezer until you have enough.",
    howThisFeels: "What last night's roast chicken becomes when you don't throw the bones away."
  },

  {
    id: "vegetable-stock", emoji: "🍲", name: "Vegetable Stock", type: "stock", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Light", "Savoury", "Thrifty"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:300, unit:"g", name:"onion (skins and all)" },
        { qty:200, unit:"g", name:"carrot (peels, ends, the lot)" },
        { qty:200, unit:"g", name:"celery (including the leaves)" },
        { qty:150, unit:"g", name:"leek (green tops too)" },
        { qty:200, unit:"g", name:"mushrooms (stems count)" },
        { qty:2, unit:"", name:"garlic cloves (skins fine)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:8, unit:"", name:"peppercorns" },
        { qty:1, unit:"", name:"small handful parsley stems" },
        { qty:2, unit:"", name:"thyme sprigs" },
        { qty:10, unit:"g", name:"dried porcini (optional)" },
        { qty:3, unit:"L", name:"cold water" }
      ],
      method: "For a deeper stock, roast the onion, carrot, celery, leek and mushrooms at 220°C until they take on colour (about 35 min) — skip this for a lighter, paler stock. Tip everything into a pot with the water and herbs and bring to a gentle simmer. Simmer for about 75 minutes and stop on time: vegetable stock turns bitter if you cook it too long. Strain and discard the solids.",
    },
    pairsWith: ["veg soups", "lentils", "risotto", "grains", "stews"],
    aliases: ["vegetable stock", "veg stock", "vegetable broth"],
    story: "The thrifty hero — built from the bag of peels, skins and trimmings you'd otherwise bin. Keep that bag in the freezer and make a batch whenever it's full. Mushrooms carry natural glutamates — the same savoury hit meat gives — which is why a handful makes a veg stock taste like it's hiding something richer. Don't over-simmer it; 75 minutes is plenty before it sours.",
    howThisFeels: "The bag of peels you've been saving, finally earning its keep."
  },

  {
    id: "fish-stock", emoji: "🍲", name: "Fish Stock", type: "stock", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Delicate", "Briny", "Quick"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:1.5, unit:"kg", name:"white fish frames & heads (hake; not oily fish)" },
        { qty:250, unit:"g", name:"onion" },
        { qty:100, unit:"g", name:"celery" },
        { qty:100, unit:"g", name:"leek" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:6, unit:"", name:"peppercorns" },
        { qty:1, unit:"", name:"small handful parsley stems" },
        { qty:250, unit:"ml", name:"dry white wine (optional)" },
        { qty:15, unit:"ml", name:"sunflower oil (for sweating)" },
        { qty:3, unit:"L", name:"cold water" }
      ],
      method: "Rinse the frames under cold water and pull off any blood or gills — that's what causes bitterness. Sweat the onion, celery and leek gently in the oil (or a little butter) without letting them colour. Add the fish frames and cook gently for a few minutes (about 5 min). Pour in the wine, if using, and let it reduce by half. Add the cold water and aromatics, bring to a gentle simmer and keep it short — fish gives up its flavour fast and long cooking turns it unpleasant (about 35 min). Strain carefully, and reduce to 2L if needed.",
    },
    pairsWith: ["seafood chowder", "paella", "fish soup", "seafood risotto", "white-wine sauces"],
    aliases: ["fish stock", "fish broth", "fumet"],
    story: "The quickest stock of all — forty minutes, not hours. Use the frames of white fish like hake, never oily fish like mackerel or sardines, and never let it boil hard or overcook, or it turns bitter. A good fumet smells fresh and marine — like the sea, never 'fishy'; if it smells off, the frames weren't fresh enough. The base of every great seafood soup and paella.",
    howThisFeels: "Quick, clean, faintly of the sea — done in forty minutes, unlike the others."
  },

  // ─────────────── BROTHS (type:"broth") ───────────────
  {
    id: "chicken-bone-broth", emoji: "🍲", name: "Chicken Bone Broth", type: "broth", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Gelatinous", "Golden", "Healing"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"chicken carcasses, necks and wings" },
        { qty:12, unit:"", name:"raw chicken feet" },
        { qty:2, unit:"L", name:"water (or enough to cover)" },
        { qty:1, unit:"tbsp", name:"apple cider vinegar" },
        { qty:200, unit:"g", name:"onion (skin on for colour)" },
        { qty:150, unit:"g", name:"carrot" },
        { qty:100, unit:"g", name:"celery (leafy tops too)" },
        { qty:30, unit:"g", name:"garlic (halved, unpeeled)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:1, unit:"tsp", name:"black peppercorns" },
        { qty:1, unit:"", name:"small handful parsley (optional)" }
      ],
      method: "Put the carcasses, necks, wings and chicken feet into a large pot with the apple cider vinegar and enough cold water to cover (about 2L). Bring to a gentle simmer — never let it boil. Cover and hold a very low, barely-moving simmer, bones alone, for the first 5–6 hours. In the final 2–3 hours add the onion, carrot, celery, garlic, bay leaves, peppercorns and parsley — adding the veg late keeps the broth fresh and clear instead of muddy. Do not add salt during the simmer: it concentrates as the liquid reduces and turns unpredictable — season only when you later cook with the broth. Strain through a fine-mesh sieve into glass jars and cool. When cold it should set to a firm jelly — that's the collagen, and that's how you know it's good."
    },
    pairsWith: ["sipping", "chicken soup", "risotto", "gravy", "pet meals"],
    aliases: ["chicken bone broth", "bone broth", "chicken broth homemade"],
    story: "Not the same as chicken stock — a broth is all about the gelatin. The chicken feet are non-negotiable: they hold the highest concentration of collagen, and they're what turn a thin liquid into a broth that wobbles like jelly when it's cold. Twelve feet to a 2L batch gives a properly firm set. Keep the heat to a bare, barely-moving simmer so it stays clean and golden, and add the aromatics only in the last couple of hours so they lift the broth rather than muddy it. Cheap to make from carcasses you'd otherwise bin.",
    howThisFeels: "The jar that sets to a wobble in the fridge — proof the goodness came out."
  },
  {
    id: "beef-bone-broth", emoji: "🍲", name: "Beef Bone Broth", type: "broth", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Deep", "Roasted", "Gelatinous"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"meaty beef bones (cut open)" },
        { qty:2, unit:"L", name:"water" },
        { qty:1, unit:"tbsp", name:"apple cider vinegar" },
        { qty:200, unit:"g", name:"onion (skin on for colour)" },
        { qty:150, unit:"g", name:"carrot" },
        { qty:100, unit:"g", name:"celery (leafy tops too)" },
        { qty:30, unit:"g", name:"garlic (halved, unpeeled)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:1, unit:"tsp", name:"black peppercorns" },
        { qty:1, unit:"", name:"small handful parsley (optional)" }
      ],
      method: "Heat the oven to 200°C and roast the bones for about 45 minutes, until deep dark brown — that colour is flavour. Tip them into a pot with the water and apple cider vinegar. Bring to a bare simmer and hold it low and uncovered, bones alone, for the bulk of the time (about 15–21 hours of an 18–24 hour batch), topping up with a little water if the level drops too far. In the final 3 hours add the onion, carrot, celery, garlic, bay leaves, peppercorns and parsley. No salt during the simmer — it concentrates as the liquid reduces and can ruin a later reduction; season the final dish instead. Strain and chill overnight, then lift off the solid fat layer the next day."
    },
    pairsWith: ["sipping", "beef stew", "soups", "gravy", "pet meals"],
    aliases: ["beef bone broth", "bone broth", "beef broth homemade"],
    story: "Richer and deeper than beef stock, and built for the long haul — 18 to 24 hours of the gentlest simmer. Build it on cheap meaty soup bones; a marrow bone or two adds richness, and a piece of oxtail — the best beef cut for body — gives the most gelatin of all, though both are optional extras rather than essentials. Roasting the bones first gives the dark colour; for even more depth, char the onion and carrot before they go in. Add the veg only in the last few hours so it stays sweet. Chill overnight and the fat lifts off in a clean cap.",
    howThisFeels: "Low and slow for a whole day — the kitchen smells like patience."
  },
  {
    id: "fish-bone-broth", emoji: "🍲", name: "Fish Bone Broth", type: "broth", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Delicate", "Briny", "Quick"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"white fish bones and heads (gills removed)" },
        { qty:2, unit:"L", name:"water" },
        { qty:1, unit:"tsp", name:"apple cider vinegar" },
        { qty:200, unit:"g", name:"onion (skin on for colour)" },
        { qty:150, unit:"g", name:"carrot" },
        { qty:100, unit:"g", name:"celery (leafy tops too)" },
        { qty:30, unit:"g", name:"garlic (halved, unpeeled)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:1, unit:"tsp", name:"black peppercorns" },
        { qty:1, unit:"", name:"small handful parsley (optional)" }
      ],
      method: "Rinse the bones and heads thoroughly under cold water and pull out the gills — that is what causes bitterness and cloudiness. Because fish cooks for only an hour, the vegetables go in from the start: put the bones in a pot with the water, apple cider vinegar, onion, carrot, celery, garlic, bay leaves, peppercorns and parsley. Bring to a gentle simmer and keep it short — 1 hour maximum, never a hard boil, or it turns cloudy and bitter. No salt during the simmer. Strain straight away through cheesecloth."
    },
    pairsWith: ["seafood chowder", "paella", "fish soup", "risotto", "sipping"],
    aliases: ["fish bone broth", "bone broth", "fish broth homemade"],
    story: "The quickest of all the broths — one hour, not the long haul of the meat versions, because fish gives up its flavour fast and long cooking only turns it bitter. Since the cook is so short, the aromatics go in at the start rather than the end. Use neutral white fish frames like hake or snapper, never oily fish like salmon or mackerel, which turn it rancid. A good one smells fresh and marine, like the sea, never 'fishy'.",
    howThisFeels: "Done in an hour, faintly of the sea — the gentle one of the family."
  },
  {
    id: "lamb-bone-broth", emoji: "🍲", name: "Lamb Bone Broth", type: "broth", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Robust", "Intense", "Gelatinous"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"lamb bones (neck, shanks or trotters)" },
        { qty:2, unit:"L", name:"water" },
        { qty:1, unit:"tbsp", name:"apple cider vinegar" },
        { qty:200, unit:"g", name:"onion (skin on for colour)" },
        { qty:150, unit:"g", name:"carrot" },
        { qty:100, unit:"g", name:"celery (leafy tops too)" },
        { qty:30, unit:"g", name:"garlic (halved, unpeeled)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:1, unit:"tsp", name:"black peppercorns" },
        { qty:2, unit:"", name:"rosemary sprigs (optional)" }
      ],
      method: "Roast the bones at 200°C for about 30 minutes to render off some of the heavy lamb fat. Transfer to a pot with the water and apple cider vinegar. Bring to a bare simmer and hold it low, bones alone, for the first 9–12 hours. In the final 3 hours add the onion, carrot, celery, garlic, bay leaves and peppercorns; if the lamb flavour feels too strong, add the rosemary for the last hour only. No salt during the simmer — season the final dish. Strain and refrigerate — lamb fat sets harder than chicken or beef fat, so skim it off once fully chilled."
    },
    pairsWith: ["lamb stew", "hearty curries", "soups", "sipping", "gravy"],
    aliases: ["lamb bone broth", "bone broth", "lamb broth homemade"],
    story: "Robust and intense — the boldest broth of the lot, and a brilliant base for hearty curries and lamb stews. Neck, shanks and trotters are the cuts that give body. Roasting first renders off some of the heavy fat that can otherwise overwhelm. Lamb fat sets firm and waxy when chilled, so it skims off cleanly the next day. If the flavour runs too strong, a little rosemary in the last hour rounds it out.",
    howThisFeels: "Deep and unapologetic — a broth with its mind made up."
  },
  {
    id: "pork-bone-broth", emoji: "🍲", name: "Pork Bone Broth", type: "broth", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Creamy", "Rich", "Gelatinous"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:2000, step:500, label:"~2L batch" },
      ingredients: [
        { qty:2, unit:"kg", name:"pork bones (pig's trotters and neck bones)" },
        { qty:2, unit:"L", name:"water" },
        { qty:1, unit:"tbsp", name:"apple cider vinegar" },
        { qty:200, unit:"g", name:"onion (skin on for colour)" },
        { qty:150, unit:"g", name:"carrot" },
        { qty:100, unit:"g", name:"celery (leafy tops too)" },
        { qty:30, unit:"g", name:"garlic (halved, unpeeled)" },
        { qty:2, unit:"", name:"bay leaves" },
        { qty:1, unit:"tsp", name:"black peppercorns" }
      ],
      method: "Blanch the bones in boiling water for 10 minutes, then drain and rinse them thoroughly to wash off all the scum. Add to a clean pot with fresh water and the apple cider vinegar. Bring to a simmer and hold it, bones alone, for the first 7–9 hours. In the final 3 hours add the onion, carrot, celery, garlic, bay leaves and peppercorns. No salt during the simmer. Strain and cool — it should set into a very firm, pale, creamy jelly."
    },
    pairsWith: ["ramen", "noodle soup", "stews", "sipping", "gravy"],
    aliases: ["pork bone broth", "bone broth", "tonkotsu broth", "pork broth homemade"],
    story: "The king of jelly — the most viscous, creamy broth of all, in the tonkotsu style. Pig's trotters are the single best source of natural gelatin there is, with neck bones rounding out the body. Blanching first and rinsing off the scum keeps it clean before the long simmer. It turns naturally cloudy and creamy as the marrow and collagen emulsify — that's the goal here, not a fault. Add the veg only near the end so it stays sweet.",
    howThisFeels: "Cloudy, creamy, and so set you could almost slice it."
  },

  // ─────────────── PASTES (type:"paste") ───────────────
  {
    id: "tahini", emoji: "🌰", name: "Tahini", type: "paste", shelf: "sauces",
    region: "Kitchen Basics",
    flavourChips: ["Nutty", "Creamy", "Earthy"],
    whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"hulled white sesame seeds" },
        { qty:2, unit:"tbsp", name:"neutral oil (optional, e.g. grapeseed or light olive)" },
        { qty:1, unit:"", name:"pinch salt (optional)" }
      ],
      method: "Spread the sesame seeds in a large dry pan over medium-low heat and toast for 3–5 minutes, stirring constantly, until light golden and fragrant — do not let them brown or they turn bitter. Tip them straight onto a cold plate to stop the cooking and let them cool completely; blending them warm makes the paste grainy. Add the cooled seeds to a food processor and run for 1–2 minutes to a coarse, crumbly meal. Scrape down, then keep processing on high for another 3–5 minutes — the friction releases the natural oils and it turns to a paste. If it's still too thick, add the neutral oil a tablespoon at a time until it's smooth and pourable, with a pinch of salt if you like. Store in a clean glass jar: a few weeks in the pantry, up to 3 months in the fridge."
    },
    pairsWith: ["hummus", "salad dressings", "baba ganoush", "halva", "drizzling over roast veg"],
    aliases: ["tahini", "tahina", "sesame paste"],
    story: "Authentic tahini is a one-ingredient masterpiece — purely ground sesame seeds, with the name coming from the Arabic tahana, 'to grind'. Hulled white seeds give the classic mild, silky, pale paste; unhulled seeds make a darker, more bitter, more mineral-rich version. It's quietly strange stuff too: tahini is a non-Newtonian fluid, so it stiffens the harder you stir it, and if your jar sets solid you just loosen it with a splash of water or oil. One chef's secret carries straight into hummus — add the lemon juice and garlic only at the very end, because acid hitting tahini too early makes it seize and clump.",
    howThisFeels: "Warm sesame turning to silk under the blade — older than almost any kitchen."
  },

  {
    id: "peanut-butter", name: "Peanut Butter", nameAlt: "Roasted Peanut Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🥜", kcal: 180, costPP: 5, appearsIn: ["health"],
    flavourChips: ["Nutty", "Creamy", "Toasty"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"raw peanuts" },
        { qty:15, unit:"ml", name:"sunflower oil (optional)" },
        { qty:1, unit:"", name:"pinch salt (optional)" }
      ],
      method: "Toast the peanuts in a warm oven until fragrant and lightly golden, then let them cool completely. Blend patiently, scraping down often, until the nuts release their oils and turn silky smooth. Add the oil only if the blades struggle, and finish with a small pinch of salt if you like."
    },
    pairsWith: ["toast", "oats", "smoothies", "banana"],
    aliases: ["peanut butter", "groundnut spread"],
    story: "There is something deeply satisfying about making peanut butter from scratch, watching humble nuts transform into a glossy spread. The one trick is patience — it looks crumbly before it turns creamy. Give it time and it rewards you.",
    howThisFeels: "Like the steady hum of a blender in a quiet kitchen on a slow morning."
  },

  {
    id: "almond-butter", name: "Almond Butter", nameAlt: "Roasted Almond Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🌰", kcal: 185, costPP: 13, appearsIn: ["health"],
    flavourChips: ["Nutty", "Creamy", "Rich"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"almonds" },
        { qty:15, unit:"ml", name:"sunflower oil (optional)" },
        { qty:1, unit:"", name:"pinch salt (optional)" }
      ],
      method: "Toast the almonds until just golden and aromatic, then cool fully. Blend steadily, letting the mixture move from coarse crumbs to a thick paste, then to a smooth butter as the oils release. Add oil only if needed to loosen."
    },
    pairsWith: ["toast", "oats", "smoothies", "apple slices"],
    aliases: ["almond butter", "almond spread"],
    story: "Almond butter feels like a small luxury made at home. The key is not rushing the blend — almonds take a little longer but become beautifully creamy. A gentle roast deepens the flavour.",
    howThisFeels: "Soft, warm and comforting, like sunlight on a wooden countertop."
  },

  {
    id: "cashew-butter", name: "Cashew Butter", nameAlt: "Creamy Cashew Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🥜", kcal: 175, costPP: 16, appearsIn: ["health"],
    flavourChips: ["Mild", "Creamy", "Buttery"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"cashew nuts" },
        { qty:10, unit:"ml", name:"sunflower oil (optional)" },
        { qty:5, unit:"ml", name:"honey (optional)" }
      ],
      method: "Lightly toast the cashews until pale golden, then cool. Blend slowly, pausing to scrape down, until the mixture turns smooth and creamy. Add a touch of oil or honey if you want a softer, slightly sweet finish."
    },
    pairsWith: ["toast", "smoothies", "porridge", "banana"],
    aliases: ["cashew butter", "cashew spread"],
    story: "Cashew butter is the gentlest of all nut butters, almost naturally sweet. It blends quicker than most and becomes silky without much effort. A small drizzle of honey brings out its softness.",
    howThisFeels: "Quiet and mellow, like a slow afternoon with nothing pressing to do."
  },

  {
    id: "macadamia-butter", name: "Macadamia Butter", nameAlt: "Macadamia Nut Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🌰", kcal: 200, costPP: 17, appearsIn: ["health"],
    flavourChips: ["Rich", "Buttery", "Smooth"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"macadamia nuts" },
        { qty:1, unit:"", name:"pinch salt (optional)" }
      ],
      method: "Toast the macadamias lightly until just fragrant, then cool. Blend until the oils release quickly into a very smooth, almost glossy butter. Finish with a pinch of salt if desired."
    },
    pairsWith: ["toast", "oats", "fruit", "yoghurt"],
    aliases: ["macadamia butter", "macadamia spread"],
    story: "Macadamias are naturally rich, so this butter comes together almost effortlessly. The key is a gentle roast — too much and you lose their delicate flavour. It feels indulgent but simple.",
    howThisFeels: "Silky and luxurious, like something special made without fuss."
  },

  {
    id: "hazelnut-butter", name: "Hazelnut Butter", nameAlt: "Roasted Hazelnut Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🌰", kcal: 195, costPP: 9, appearsIn: ["health"],
    flavourChips: ["Toasty", "Deep", "Nutty"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:300, unit:"g", name:"hazelnuts" },
        { qty:10, unit:"ml", name:"sunflower oil (optional)" }
      ],
      method: "Toast the hazelnuts until the skins loosen and the aroma deepens, then rub off most of the skins and cool. Blend until smooth, adding a touch of oil only if needed."
    },
    pairsWith: ["toast", "pancakes", "oats", "apple slices"],
    aliases: ["hazelnut butter", "hazelnut spread"],
    story: "Hazelnuts bring a deeper, roasted flavour that feels a little more grown-up. Removing most of the skins keeps the taste smooth. It is worth the small extra step.",
    howThisFeels: "Warm and toasty, like the scent of nuts in a winter kitchen."
  },

  {
    id: "mixed-nut-butter", name: "Mixed Nut Butter", nameAlt: "Roasted Mixed Nut Spread",
    type: "paste", shelf: "sauces", region: "Kitchen Basics",
    emoji: "🥜", kcal: 182, costPP: 14, appearsIn: ["health"],
    flavourChips: ["Balanced", "Nutty", "Creamy"], whenToUse: "start",
    makeYourOwn: {
      yield: { mode:"batch", unit:"ml", base:250, step:50, label:"~250ml" },
      ingredients: [
        { qty:150, unit:"g", name:"almonds" },
        { qty:150, unit:"g", name:"cashew nuts" },
        { qty:10, unit:"ml", name:"sunflower oil (optional)" }
      ],
      method: "Toast the nuts together until lightly golden, then cool. Blend steadily until smooth, letting the natural oils combine into a balanced, creamy spread. Add oil only if needed."
    },
    pairsWith: ["toast", "smoothies", "oats", "fruit"],
    aliases: ["mixed nut butter", "nut blend spread"],
    story: "Mixing nuts gives you the best of each — depth from almonds and creaminess from cashews. It is a simple way to build flavour without extra effort. The balance is what makes it special.",
    howThisFeels: "Layered and steady, like familiar flavours coming together quietly."
  },


  {
    id: "strawberry-jam", emoji: "🍓",
    name: "Strawberry Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"fresh strawberries" },
        { qty:400, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Hull and roughly chop the strawberries, then combine with the sugar and a good squeeze of lemon juice in a wide pot and let them sit 15 minutes until the juices run. Bring to a rolling boil over medium-high heat, stirring often, and boil hard for 15 to 20 minutes. Test for set by dropping a little onto a cold saucer — if it wrinkles when you push it, it is ready. Skim off any foam and pour into clean, hot, sterilised jars and seal while hot. Use a wide pot, not a deep one: more surface area sets it far faster. Sealed jars keep for months in the cupboard; once opened, refrigerate up to 3 weeks, or freeze as freezer-jam up to 6 months."
    },
    pairsWith: ["scones", "buttered toast", "croissants", "yoghurt", "rice pudding"],
    aliases: ["jam", "strawberry jam", "strawberry preserve", "strawberry conserve"],
    story: "Summer strawberries caught in a jar — nothing like the shop stuff. Jam sets thanks to pectin, a natural gum in fruit that firms up when boiled with sugar and acid. Strawberries are low in pectin, which is why a squeeze of lemon juice is the old trick: the acid helps the set and brightens the flavour at the same time.",
    howThisFeels: "Bright, sweet and a little jammy-sticky — the taste of summer on a warm scone."
  },
  {
    id: "apricot-jam", emoji: "🍑",
    name: "Apricot Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Mediterranean",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"fresh apricots (halved, stoned)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Halve and stone the apricots, then chop the larger ones and combine with the sugar and a good squeeze of lemon juice in a wide pot. Let them stand 20 minutes until the juices run and the sugar starts to dissolve. Bring to a rolling boil over medium-high heat, stirring often, and boil hard for 12 to 18 minutes — apricots break down fast, so watch them. Test for set by dropping a little onto a cold saucer: if it wrinkles when you push it, it is ready. Skim any foam, then pot into clean, hot, sterilised jars and seal while hot. Apricots carry a fair amount of natural pectin and acid, so they set more easily than strawberries. Sealed jars keep for months in the cupboard; once opened, refrigerate up to 3 weeks."
    },
    pairsWith: ["buttered toast", "scones", "roast lamb glaze", "cheese board", "yoghurt"],
    aliases: ["jam", "apricot jam", "apricot preserve", "appelkoos konfyt"],
    story: "Apricot jam is the quiet workhorse of the South African pantry — the glaze on a Sunday gammon, the layer inside a hertzoggie, the spoonful that sweetens a bobotie. The Klein Karoo grows some of the best apricots in the world, and jam is how the short summer glut is caught for the rest of the year.",
    howThisFeels: "Golden, honeyed and gently tart — sunshine in a jar with a soft, spoonable set.",
    versions: [
      {
        name: "Classic Apricot",
        icon: "🏆",
        default: true
      },
      {
        name: "Apricot & Almond (Noyau)",
        icon: "🌰",
        howThisFeels: "The old French trick — a few cracked kernels steeped in, lending a marzipan-almond whisper under the fruit.",
        delta: {
          addIng: [
            { item:{ qty:4, unit:"", name:"apricot kernels (cracked from the stones)" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam, then pot", to:"Drop the cracked kernels in for the last 5 minutes of boiling, then fish them out. Skim any foam, then pot" }
          ]
        }
      },
      {
        name: "Dried Apricot (Year-Round)",
        icon: "📦",
        howThisFeels: "No fresh fruit needed — plump dried apricots soaked soft, for a deeper, toffee-edged jam you can make in any month.",
        delta: {
          swapIng: [
            { from:"fresh apricots (halved, stoned)", to:{ qty:300, unit:"g", name:"dried apricots, snipped small" } }
          ],
          addIng: [
            { item:{ qty:400, unit:"ml", name:"water (to soak)" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Let them stand 20 minutes until the juices run and the sugar starts to dissolve.", to:"Soak the snipped dried apricots in the water for 1 hour until plump, then tip fruit and soaking water into the pot with the sugar and lemon." }
          ]
        }
      },
      {
        name: "Apricot & Rosemary",
        icon: "🌿",
        howThisFeels: "A grown-up, savoury-leaning jam — one sprig of rosemary infused in turns it into a glaze for lamb or a partner for hard cheese.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"rosemary sprig" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam, then pot", to:"Fish out the rosemary sprig, skim any foam, then pot" }
          ]
        }
      }
    ]
  },

  {
    id: "fig-jam", emoji: "🍯",
    name: "Fig Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Mediterranean",
    flavourChips: ["Sweet", "Fruity", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"ripe figs (stemmed, chopped)" },
        { qty:350, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Trim the stems and chop the ripe figs, skins and all, then combine with the sugar and a good squeeze of lemon juice in a wide pot. Let them stand 30 minutes until the juices run. Bring to a rolling boil over medium-high heat, stirring often, and boil for 20 to 25 minutes until thick and glossy, mashing against the side of the pot to break the fruit down. Test for set on a cold saucer. Figs are low in acid and pectin, so the lemon juice is not optional — it sharpens the flavour and helps the set. Pot into clean, hot, sterilised jars and seal while hot. Keeps for months sealed; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["blue cheese", "brie", "cured ham", "sourdough toast", "roast pork"],
    aliases: ["jam", "fig jam", "fig preserve", "fig conserve"],
    story: "Ripe fig jam is the cheese board's best friend — deep, seedy and honeyed, the sweet foil to a sharp blue or a salty ham. This is the purple-fig version; South Africa's famous green-fig konfyt is a different preserve entirely, made from hard unripe figs syruped whole.",
    howThisFeels: "Dark, jammy and full of tiny crunchy seeds — rich enough to feel almost like dessert.",
    versions: [
      {
        name: "Classic Fig",
        icon: "🏆",
        default: true
      },
      {
        name: "Fig & Vanilla",
        icon: "🌸",
        howThisFeels: "Softer and rounder — a split vanilla pod steeped in turns the earthy fig almost floral.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"vanilla pod (split)" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Pot into clean, hot, sterilised jars", to:"Fish out the vanilla pod, then pot into clean, hot, sterilised jars" }
          ]
        }
      },
      {
        name: "Fig, Red Wine & Star Anise",
        icon: "🍷",
        howThisFeels: "A brooding, grown-up preserve — red wine and star anise reduced in, made for a winter cheese board.",
        delta: {
          addIng: [
            { item:{ qty:80, unit:"ml", name:"red wine" }, after:"lemon juice" },
            { item:{ qty:2, unit:"", name:"star anise" }, after:"red wine" }
          ],
          swapStep: [
            { from:"Bring to a rolling boil over medium-high heat, stirring often,", to:"Add the red wine and star anise, bring to a rolling boil over medium-high heat, stirring often," },
            { from:"Test for set on a cold saucer.", to:"Fish out the star anise, then test for set on a cold saucer." }
          ]
        }
      },
      {
        name: "Fig & Balsamic",
        icon: "🫒",
        howThisFeels: "Tipped savoury — a splash of balsamic cuts the sweetness into something you would spoon over roast pork or a burger.",
        delta: {
          addIng: [
            { item:{ qty:30, unit:"ml", name:"balsamic vinegar" }, after:"lemon juice" }
          ]
        }
      }
    ]
  },

  {
    id: "raspberry-jam", emoji: "🍓",
    name: "Raspberry Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"raspberries (fresh or frozen)" },
        { qty:450, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Combine the raspberries with the sugar and a squeeze of lemon juice in a wide pot — frozen berries work beautifully and need no defrosting. Let them stand 15 minutes until the juices run, then bring to a rolling boil over medium-high heat, stirring often. Boil hard for just 8 to 12 minutes: raspberries are quick and you want to keep their bright colour and fresh flavour. Test for set on a cold saucer. Skim any foam and pot into clean, hot, sterilised jars while hot. Raspberries hold a moderate amount of natural pectin, so they usually set without any help. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["scones", "Victoria sponge", "buttered toast", "rice pudding", "vanilla ice cream"],
    aliases: ["jam", "raspberry jam", "raspberry preserve", "raspberry conserve"],
    story: "Raspberry is one of the easiest jams there is — high enough in pectin to set on its own, and quick to cook so it keeps that vivid, almost tart-sweet flavour. The only real debate is seeds or no seeds, and that comes down to whether you are spreading it on toast or hiding it inside a cake.",
    howThisFeels: "Jewel-bright and tangy-sweet, with tiny seeds that give a gentle crunch.",
    versions: [
      {
        name: "Classic (with seeds)",
        icon: "🏆",
        default: true
      },
      {
        name: "Seedless Raspberry",
        icon: "🥄",
        howThisFeels: "Silky and smooth — half the pulp pushed through a sieve, for the glossy jam that goes inside cakes and thumbprint biscuits.",
        delta: {
          swapStep: [
            { from:"Skim any foam and pot into clean, hot, sterilised jars while hot.", to:"Push about half the hot jam through a fine sieve to catch the seeds, stir it back in, skim any foam and pot into clean, hot, sterilised jars while hot." }
          ]
        }
      },
      {
        name: "Raspberry & Rose",
        icon: "🌹",
        howThisFeels: "A drop of rosewater at the end lifts raspberry into something perfumed and Turkish-delight pretty — go gently, it is powerful.",
        delta: {
          addIng: [
            { item:{ qty:2, unit:"ml", name:"rosewater" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Stir in the rosewater off the heat, skim any foam and pot" }
          ]
        }
      },
      {
        name: "No-Cook Chia Fridge Jam",
        icon: "🌱",
        howThisFeels: "A modern, uncooked riff — mashed raspberries thickened with chia instead of a sugar boil. Not a true keeping jam, but fresh and quick.",
        delta: {
          swapIng: [
            { from:"sugar", to:{ qty:60, unit:"g", name:"honey or maple syrup" } }
          ],
          addIng: [
            { item:{ qty:20, unit:"g", name:"chia seeds" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Combine the raspberries with the sugar and a squeeze of lemon juice in a wide pot — frozen berries work beautifully and need no defrosting.", to:"Mash the raspberries in a bowl with the honey and lemon (warm frozen berries gently first)." },
            { from:"Let them stand 15 minutes until the juices run, then bring to a rolling boil over medium-high heat, stirring often.", to:"Stir in the chia seeds and let stand 20 minutes, stirring once or twice, until thickened to a spoonable jam." },
            { from:"Boil hard for just 8 to 12 minutes: raspberries are quick and you want to keep their bright colour and fresh flavour.", to:"No cooking needed." },
            { from:"Test for set on a cold saucer.", to:"" },
            { from:"Skim any foam and pot into clean, hot, sterilised jars while hot.", to:"Spoon into a clean jar and keep in the fridge." },
            { from:"Raspberries hold a moderate amount of natural pectin, so they usually set without any help. Sealed jars keep for months; refrigerate up to 3 weeks once opened.", to:"Keeps in the fridge for about 1 week — this is a fresh jam, not a preserved one." }
          ]
        }
      }
    ]
  },

  {
    id: "plum-jam", emoji: "🍇",
    name: "Plum Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"plums (stoned, chopped)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty:50, unit:"ml", name:"water" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Stone and chop the plums, keeping the skins on — they hold most of the pectin and give the jam its ruby colour. Put them in a wide pot with the water and simmer gently for 10 minutes until the skins soften, then add the sugar and lemon juice and stir until dissolved. Bring to a rolling boil and cook hard for 15 to 20 minutes, stirring often, until thick. Test for set on a cold saucer. Skim any foam and pot into clean, hot, sterilised jars while hot. Plums range from sweet to sharp, so taste as you go and add a little more lemon if it needs lifting. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["toast", "croissants", "roast duck", "cheese board", "steamed pudding"],
    aliases: ["jam", "plum jam", "plum preserve", "plum conserve"],
    story: "Plum jam is a late-summer classic that almost sets itself — the skins are rich in pectin, so it firms up with barely any help. It swings easily from a simple breakfast jam to a spiced Christmas preserve, which is why it turns up in so many guises around the world.",
    howThisFeels: "Deep ruby-red, sweet with a tart edge and a slightly sticky, generous set.",
    versions: [
      {
        name: "Classic Plum",
        icon: "🏆",
        default: true
      },
      {
        name: "Spiced Christmas Plum",
        icon: "🎄",
        howThisFeels: "Cinnamon, star anise and clove simmered in — the warming, festive plum jam that smells of the whole holiday.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"water" },
            { item:{ qty:2, unit:"", name:"star anise" }, after:"cinnamon stick" },
            { item:{ qty:3, unit:"", name:"cloves" }, after:"star anise" }
          ],
          swapStep: [
            { from:"Put them in a wide pot with the water and simmer gently for 10 minutes until the skins soften,", to:"Put them in a wide pot with the water and whole spices and simmer gently for 10 minutes until the skins soften," },
            { from:"Skim any foam and pot", to:"Fish out the whole spices, skim any foam and pot" }
          ]
        }
      },
      {
        name: "Plum & Ginger",
        icon: "🫚",
        howThisFeels: "Fresh ginger grated in gives a warm, peppery lift that cuts the sweetness — lovely with cold roast meats.",
        delta: {
          addIng: [
            { item:{ qty:15, unit:"g", name:"fresh ginger, grated" }, after:"water" }
          ]
        }
      },
      {
        name: "Chinese Suan Mei (savoury-sour)",
        icon: "🥢",
        howThisFeels: "The strange, wonderful one — five-spice, soy and extra vinegar pull plum jam towards a savoury dipping sauce for spring rolls and crispy duck. Not for your toast.",
        delta: {
          swapIng: [
            { from:"sugar", to:{ qty:250, unit:"g", name:"sugar" } }
          ],
          addIng: [
            { item:{ qty:40, unit:"ml", name:"rice vinegar" }, after:"water" },
            { item:{ qty:20, unit:"ml", name:"soy sauce" }, after:"rice vinegar" },
            { item:{ qty:3, unit:"g", name:"Chinese five-spice" }, after:"soy sauce" }
          ],
          swapStep: [
            { from:"until thick. Test for set on a cold saucer.", to:"until thick and glossy but still pourable — this is a sauce, not a firm jam. Blend smooth if you like." }
          ]
        }
      }
    ]
  },

  {
    id: "peach-jam", emoji: "🍑",
    name: "Peach Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"peaches (peeled, stoned, chopped)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "To peel the peaches easily, score a cross in the base, dip in boiling water for 30 seconds, then slip the skins off under cold water. Stone and chop the flesh and combine with the sugar and a generous squeeze of lemon juice in a wide pot. Let stand 20 minutes, then bring to a rolling boil, stirring often, and cook for 20 to 25 minutes until thick. Test for set on a cold saucer. Peaches are low in pectin and acid, so the lemon juice matters — for a firmer set, add a little jam sugar or a peeled, grated apple. Skim any foam and pot into clean, hot, sterilised jars while hot. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["toast", "scones", "waffles", "yoghurt", "vanilla ice cream"],
    aliases: ["jam", "peach jam", "peach preserve", "peach conserve"],
    story: "Peach jam is high summer in a jar, all fragrance and gold. Because peaches are soft on both pectin and acid, it stays looser than a berry jam — which many people love, spooned over ice cream or swirled through yoghurt as much as spread on toast.",
    howThisFeels: "Soft, golden and fragrant with a loose, syrupy set — more like a fruit spoon than a firm jelly.",
    versions: [
      {
        name: "Classic Peach",
        icon: "🏆",
        default: true
      },
      {
        name: "Peach & Amaretto",
        icon: "🥃",
        howThisFeels: "A splash of amaretto at the end brings out the almond note hiding in the peach stone — grown-up and dessert-like.",
        delta: {
          addIng: [
            { item:{ qty:20, unit:"ml", name:"amaretto" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Stir in the amaretto off the heat, skim any foam and pot" }
          ]
        }
      },
      {
        name: "Peach, Vanilla & Bourbon",
        icon: "🌸",
        howThisFeels: "Vanilla and a nip of bourbon make a smoky, Southern-US style peach preserve — extraordinary on a warm biscuit.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"vanilla pod (split)" }, after:"lemon juice" },
            { item:{ qty:20, unit:"ml", name:"bourbon" }, after:"vanilla pod (split)" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Fish out the vanilla pod, stir in the bourbon off the heat, skim any foam and pot" }
          ]
        }
      },
      {
        name: "White Peach & Elderflower",
        icon: "🌼",
        howThisFeels: "Delicate and floral — pale white peaches with a splash of elderflower cordial, barely there and lovely on scones.",
        delta: {
          swapIng: [
            { from:"peaches (peeled, stoned, chopped)", to:{ qty:500, unit:"g", name:"white peaches (peeled, stoned, chopped)" } }
          ],
          addIng: [
            { item:{ qty:30, unit:"ml", name:"elderflower cordial" }, after:"lemon juice" }
          ]
        }
      }
    ]
  },

  {
    id: "cherry-jam", emoji: "🍒",
    name: "Cherry Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"cherries (pitted)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty: 30, unit: "ml", name:"lemon juice" }
      ],
      method: "Pit the cherries — a clean paperclip or the wrong end of a piping nozzle works if you have no cherry pitter — and halve the larger ones. Combine with the sugar and a good double squeeze of lemon juice in a wide pot and let stand 30 minutes. Bring to a rolling boil, stirring often, and cook for 15 to 20 minutes. Test for set on a cold saucer. Cherries are very low in pectin, so cherry jam always stays on the soft side: lean on the lemon juice, add a little jam sugar or grated apple if you want it firmer, and do not expect a stiff set. Skim any foam and pot into clean, hot, sterilised jars while hot. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["croissants", "brioche", "cheesecake", "dark chocolate cake", "brie"],
    aliases: ["jam", "cherry jam", "cherry preserve", "cherry conserve"],
    story: "Cherry jam is a labour of love — the pitting takes patience and the set is always loose, because cherries carry almost no pectin. But the flavour is worth it: deep, wine-dark and only just sweet. South Africa's cherry country is Ficksburg in the Free State, whose short season is celebrated with a festival every November.",
    howThisFeels: "Wine-dark, glossy and loose-set, with whole soft cherries suspended in a rich syrup.",
    versions: [
      {
        name: "Classic Cherry",
        icon: "🏆",
        default: true
      },
      {
        name: "Black Cherry & Kirsch",
        icon: "🍒",
        howThisFeels: "Dark cherries with a shot of kirsch — the Black Forest in a jar, made for chocolate cake and cheesecake.",
        delta: {
          swapIng: [
            { from:"cherries (pitted)", to:{ qty:500, unit:"g", name:"black cherries (pitted)" } }
          ],
          addIng: [
            { item:{ qty:20, unit:"ml", name:"kirsch" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Stir in the kirsch off the heat, skim any foam and pot" }
          ]
        }
      },
      {
        name: "Cherry & Almond",
        icon: "🌰",
        howThisFeels: "A drop of almond extract leans into cherry's natural marzipan side — classic Bakewell-tart flavours.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"ml", name:"almond extract" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Stir in the almond extract off the heat, skim any foam and pot" }
          ]
        }
      },
      {
        name: "Sour Morello Cherry",
        icon: "😖",
        howThisFeels: "Made with sharp Morello cherries and a touch more sugar — bracingly tart-sweet, the classic partner to game and duck.",
        delta: {
          swapIng: [
            { from:"cherries (pitted)", to:{ qty:500, unit:"g", name:"Morello (sour) cherries, pitted" } },
            { from:"sugar", to:{ qty:450, unit:"g", name:"sugar" } }
          ]
        }
      }
    ]
  },

  {
    id: "seville-marmalade", emoji: "🍊",
    name: "Seville Orange Marmalade",
    type: "paste",
    shelf: "jams-preserves",
    region: "Britain",
    flavourChips: ["Tangy", "Sweet", "Bitter"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"Seville oranges (whole)" },
        { qty:1000, unit:"ml", name:"water" },
        { qty:900, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Scrub the oranges, then simmer them whole in the water for about 2 hours until the peel is completely soft and a skewer slides in easily — this is the one step you cannot rush, because sugar sets peel hard and it will never soften afterwards. Lift out the oranges, halve them and scoop the pulp, pips and membranes into a square of muslin; tie it up and return it to the pan, as this bag holds most of the pectin. Shred the peel as thick or fine as you like and add it back with the sugar and lemon juice. Boil hard for 15 to 25 minutes, squeezing the muslin bag against the side now and then, until it reaches setting point on a cold saucer. Let it stand 10 minutes before potting so the peel suspends evenly instead of floating, then pot into hot sterilised jars. Sealed jars keep for a year or more."
    },
    pairsWith: ["hot buttered toast", "crumpets", "scones", "glazed ham", "bread & butter pudding"],
    aliases: ["marmalade", "seville marmalade", "orange marmalade", "seville orange marmalade"],
    story: "True marmalade means bitter Seville oranges, which are too sour to eat but make the definitive dark, bittersweet breakfast preserve. Their season is famously short — a few weeks in deep winter — so marmalade-making is a January ritual for anyone serious about it. The bitterness is the point: it is what stops a sweet preserve from cloying.",
    howThisFeels: "Dark amber and glassy, bittersweet with strands of chewy peel — the grown-up end of the toast rack.",
    versions: [
      {
        name: "Classic Dark & Bitter",
        icon: "🏆",
        default: true
      },
      {
        name: "Whisky Marmalade",
        icon: "🥃",
        howThisFeels: "A slug of whisky stirred in off the heat — warming, smoky and unmistakably for grown-ups.",
        delta: {
          addIng: [
            { item:{ qty:40, unit:"ml", name:"whisky" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Let it stand 10 minutes before potting", to:"Stir in the whisky, then let it stand 10 minutes before potting" }
          ]
        }
      },
      {
        name: "Ginger Marmalade",
        icon: "🫚",
        howThisFeels: "Chopped stem ginger woven through — a warm, spicy heat that plays beautifully against the bitter peel.",
        delta: {
          addIng: [
            { item:{ qty:50, unit:"g", name:"stem ginger, chopped" }, after:"sugar" }
          ],
          swapStep: [
            { from:"add it back with the sugar and lemon juice", to:"add it back with the sugar, chopped stem ginger and lemon juice" }
          ]
        }
      },
      {
        name: "Fine-Cut",
        icon: "✂️",
        howThisFeels: "Same marmalade, delicate shreds — for those who love the flavour but not a mouthful of chewy peel.",
        delta: {
          swapStep: [
            { from:"Shred the peel as thick or fine as you like", to:"Shred the peel into very fine, short threads" }
          ]
        }
      }
    ]
  },

  {
    id: "lemon-marmalade", emoji: "🍊",
    name: "Lemon Marmalade",
    type: "paste",
    shelf: "jams-preserves",
    region: "Britain",
    flavourChips: ["Tangy", "Sweet", "Zesty"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"lemons (whole)" },
        { qty:900, unit:"ml", name:"water" },
        { qty:800, unit:"g", name:"sugar" }
      ],
      method: "Scrub the lemons, halve them and squeeze out the juice, keeping every pip. Tie the pips and any loose membrane in a square of muslin — lemons are rich in pectin and most of it lives here. Shred the peel and halves finely, then simmer the peel, juice, water and muslin bag together for about 1 hour until the peel is meltingly soft. Add the sugar, stir until dissolved, then boil hard for 10 to 15 minutes, squeezing the muslin bag now and then, until it reaches setting point on a cold saucer. Lemon marmalade sets readily thanks to all that pectin, so start testing early. Let it stand 10 minutes, then pot into hot sterilised jars."
    },
    pairsWith: ["toast", "scones", "yoghurt", "steamed sponge pudding", "roast chicken glaze"],
    aliases: ["lemon marmalade", "marmalade", "lemon preserve"],
    story: "Brighter and sharper than orange marmalade, lemon marmalade is all sunshine and zing. It sets beautifully because lemons carry so much natural pectin in their pips and pith — which is exactly why the muslin bag of pips is never thrown away.",
    howThisFeels: "Pale gold and sharp-sweet, with a clean citrus zing that wakes up a slice of toast.",
    versions: [
      {
        name: "Classic Lemon",
        icon: "🏆",
        default: true
      },
      {
        name: "Lemon & Lime",
        icon: "🍈",
        howThisFeels: "Swap a third of the lemons for limes — sharper, greener and a little more tropical.",
        delta: {
          swapIng: [
            { from:"lemons (whole)", to:{ qty:350, unit:"g", name:"lemons (whole)" } }
          ],
          addIng: [
            { item:{ qty:150, unit:"g", name:"limes (whole)" }, after:"lemons (whole)" }
          ],
          swapStep: [
            { from:"Scrub the lemons, halve them", to:"Scrub the lemons and limes, halve them" }
          ]
        }
      },
      {
        name: "Lemon & Rosemary",
        icon: "🌿",
        howThisFeels: "One sprig of rosemary infused in gives a savoury, resinous edge — lovely with cheese or brushed over roast chicken.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"rosemary sprig" }, after:"water" }
          ],
          swapStep: [
            { from:"Let it stand 10 minutes, then pot", to:"Fish out the rosemary sprig, let it stand 10 minutes, then pot" }
          ]
        }
      }
    ]
  },

  {
    id: "three-fruit-marmalade", emoji: "🍊",
    name: "Three-Fruit Marmalade",
    type: "paste",
    shelf: "jams-preserves",
    region: "Britain",
    flavourChips: ["Tangy", "Sweet", "Bitter"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:600, step:100, label:"1 jar" },
      ingredients: [
        { qty:1, unit:"", name:"grapefruit" },
        { qty:2, unit:"", name:"oranges" },
        { qty:2, unit:"", name:"lemons" },
        { qty:1500, unit:"ml", name:"water" },
        { qty:1200, unit:"g", name:"sugar" }
      ],
      method: "This is the marmalade for any time of year, since it uses ordinary sweet oranges rather than seasonal Sevilles — the lemon and grapefruit supply the bitterness and pectin instead. Halve all the fruit, squeeze the juice and reserve every pip and membrane tied in muslin. Shred the peel finely, then simmer peel, juice, water and the muslin bag for about 1.5 to 2 hours until the peel is soft. Add the sugar, dissolve, then boil hard until it reaches setting point on a cold saucer, squeezing the muslin bag as you go. Let it stand 10 minutes so the peel suspends evenly, then pot into hot sterilised jars. Sealed jars keep for a year or more."
    },
    pairsWith: ["toast", "croissants", "scones", "cheese board", "duck glaze"],
    aliases: ["three fruit marmalade", "3-fruit marmalade", "three-fruit marmalade", "mixed marmalade"],
    story: "Three-fruit marmalade — grapefruit, orange and lemon — was the clever answer to the short Seville season: a balanced, year-round marmalade you can make with fruit from any supermarket. The three fruits cover all the bases: sweetness from the orange, sharpness from the lemon, and a gentle bitterness from the grapefruit.",
    howThisFeels: "Golden and balanced — sweet, sharp and just bitter enough, with a tangle of mixed peel.",
    versions: [
      {
        name: "Classic Three-Fruit",
        icon: "🏆",
        default: true
      },
      {
        name: "Pink Grapefruit",
        icon: "🌸",
        howThisFeels: "A pink grapefruit swap gives a softer, rosier, less bitter marmalade with a beautiful blush.",
        delta: {
          swapIng: [
            { from:"grapefruit", to:{ qty:1, unit:"", name:"pink grapefruit" } }
          ]
        }
      },
      {
        name: "Whisky & Ginger",
        icon: "🥃",
        howThisFeels: "Stem ginger and a splash of whisky — the celebration version, all warmth and depth.",
        delta: {
          addIng: [
            { item:{ qty:50, unit:"g", name:"stem ginger, chopped" }, after:"sugar" },
            { item:{ qty:40, unit:"ml", name:"whisky" }, after:"stem ginger, chopped" }
          ],
          swapStep: [
            { from:"Add the sugar, dissolve,", to:"Add the sugar and chopped stem ginger, dissolve," },
            { from:"Let it stand 10 minutes so the peel suspends evenly", to:"Stir in the whisky, then let it stand 10 minutes so the peel suspends evenly" }
          ]
        }
      }
    ]
  },

  {
    id: "lemon-curd", emoji: "🍋",
    name: "Lemon Curd",
    type: "paste",
    shelf: "jams-preserves",
    region: "Britain",
    flavourChips: ["Tangy", "Sweet", "Silky"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 jar" },
      ingredients: [
        { qty:3, unit:"", name:"eggs" },
        { qty:1, unit:"", name:"egg yolk" },
        { qty:150, unit:"g", name:"sugar" },
        { qty:2, unit:"", name:"lemons (zest and juice)" },
        { qty:100, unit:"g", name:"butter, cubed" }
      ],
      method: "Whisk the eggs, extra yolk and sugar together in a heatproof bowl until smooth, then whisk in the lemon zest and juice. Set the bowl over a pan of barely simmering water — the water must not touch the bowl — and stir constantly with a spatula. The one rule of curd is never let it boil, or the eggs scramble; keep the heat gentle and the spatula moving. After 8 to 12 minutes it will thicken enough to coat the back of the spoon and hold a line when you draw a finger through. Take it off the heat and beat in the cubed butter a few pieces at a time until glossy. Strain through a sieve for a perfectly silky curd, then pot and refrigerate — curd is a fresh preserve and keeps about 2 to 3 weeks in the fridge."
    },
    pairsWith: ["scones", "Victoria sponge", "meringues", "pancakes", "cheesecake"],
    aliases: ["lemon curd", "lemon cheese", "curd"],
    story: "Lemon curd is not a boiled jam at all but a cooked custard — eggs, butter, sugar and citrus thickened gently into something between a spread and a dessert. Because it is egg-based it does not keep like jam, but few things beat it warm off the spoon or folded through whipped cream.",
    howThisFeels: "Sunshine-yellow, silky and rich, sharp with lemon and smooth as velvet.",
    versions: [
      {
        name: "Classic Lemon",
        icon: "🏆",
        default: true
      },
      {
        name: "Lime Curd",
        icon: "🍈",
        howThisFeels: "Sharper and more fragrant — limes in place of lemons, gorgeous with coconut or in a key-lime tart.",
        delta: {
          swapIng: [
            { from:"lemons (zest and juice)", to:{ qty:4, unit:"", name:"limes (zest and juice)" } }
          ]
        }
      },
      {
        name: "Passionfruit Lemon",
        icon: "🌺",
        howThisFeels: "Passionfruit pulp stirred in with the lemon — a tropical curd with tiny crunchy seeds.",
        delta: {
          swapIng: [
            { from:"lemons (zest and juice)", to:{ qty:1, unit:"", name:"lemon (zest and juice)" } }
          ],
          addIng: [
            { item:{ qty:80, unit:"g", name:"passionfruit pulp" }, after:"lemon (zest and juice)" }
          ],
          swapStep: [
            { from:"whisk in the lemon zest and juice", to:"whisk in the lemon zest and juice and the passionfruit pulp" }
          ]
        }
      },
      {
        name: "Lemon & Elderflower",
        icon: "🌼",
        howThisFeels: "A splash of elderflower cordial lifts the curd into something floral and English-summer pretty.",
        delta: {
          addIng: [
            { item:{ qty:20, unit:"ml", name:"elderflower cordial" }, after:"lemons (zest and juice)" }
          ]
        }
      }
    ]
  },

  {
    id: "passionfruit-curd", emoji: "🥝",
    name: "Passionfruit Curd",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Tangy", "Sweet", "Fragrant"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 jar" },
      ingredients: [
        { qty:120, unit:"g", name:"passionfruit pulp (about 6 granadillas)" },
        { qty:3, unit:"", name:"eggs" },
        { qty:1, unit:"", name:"egg yolk" },
        { qty:150, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" },
        { qty:100, unit:"g", name:"butter, cubed" }
      ],
      method: "Scoop the pulp from the granadillas — leave the seeds in for their pretty crunch, or push half through a sieve if you prefer it smoother. Whisk the eggs, yolk and sugar smooth in a heatproof bowl, then whisk in the passionfruit pulp and a squeeze of lemon to sharpen it. Set over barely simmering water, not touching, and stir constantly; as with any curd, never let it boil or the eggs will scramble. After 8 to 12 minutes it will coat the back of a spoon, at which point beat in the butter off the heat until glossy. Pot and refrigerate — it keeps about 2 to 3 weeks. Passionfruit curd is the most fragrant of all the curds and turns a plain pavlova or sponge into something special."
    },
    pairsWith: ["pavlova", "sponge cake", "scones", "yoghurt", "tartlets"],
    aliases: ["passionfruit curd", "granadilla curd", "passion fruit curd"],
    story: "In South Africa passionfruit is granadilla, and a granadilla curd is one of the loveliest ways to catch that intense, perfumed tang. Like all curds it is a gentle egg custard rather than a boiled jam, so it stays fresh and bright — and the little black seeds give it a signature crunch.",
    howThisFeels: "Deep gold and intensely fragrant, tangy-sweet with a scatter of crunchy black seeds.",
    versions: [
      {
        name: "Classic Granadilla",
        icon: "🏆",
        default: true
      },
      {
        name: "Passionfruit & Mango",
        icon: "🥭",
        howThisFeels: "Mango purée softens the sharp passionfruit into something rounder and sunnier.",
        delta: {
          swapIng: [
            { from:"passionfruit pulp (about 6 granadillas)", to:{ qty:70, unit:"g", name:"passionfruit pulp (about 4 granadillas)" } }
          ],
          addIng: [
            { item:{ qty:80, unit:"g", name:"mango purée" }, after:"passionfruit pulp (about 4 granadillas)" }
          ],
          swapStep: [
            { from:"whisk in the passionfruit pulp", to:"whisk in the passionfruit pulp and mango purée" }
          ]
        }
      },
      {
        name: "Granadilla & White Chocolate",
        icon: "🍫",
        howThisFeels: "A little melted white chocolate beaten in at the end makes a dense, dessert-like curd — almost a truffle filling.",
        delta: {
          addIng: [
            { item:{ qty:50, unit:"g", name:"white chocolate, melted" }, after:"butter, cubed" }
          ],
          swapStep: [
            { from:"beat in the butter off the heat until glossy", to:"beat in the butter and melted white chocolate off the heat until glossy" }
          ]
        }
      }
    ]
  },

  {
    id: "orange-curd", emoji: "🍊",
    name: "Orange Curd",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Tangy", "Silky"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 jar" },
      ingredients: [
        { qty:2, unit:"", name:"oranges (zest and juice)" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:3, unit:"", name:"eggs" },
        { qty:1, unit:"", name:"egg yolk" },
        { qty:130, unit:"g", name:"sugar" },
        { qty:100, unit:"g", name:"butter, cubed" }
      ],
      method: "Orange curd has one trick: reduce the orange juice by half in a small pan first, because orange juice is watery and mild, and reducing it concentrates the flavour so the curd actually tastes of orange. Add the lemon juice too — its sharpness stops the curd tasting flat and oversweet. Whisk the eggs, yolk and sugar smooth, then whisk in the orange zest, reduced orange juice and lemon juice. Cook over barely simmering water, stirring constantly and never boiling, for 8 to 12 minutes until it coats the back of a spoon. Beat in the butter off the heat until glossy, strain if you like it silky, then pot and refrigerate for up to 2 to 3 weeks."
    },
    pairsWith: ["scones", "sponge cake", "French toast", "crêpes", "chocolate tart"],
    aliases: ["orange curd", "curd"],
    story: "Orange curd is less common than lemon for a good reason — orange juice is mild and watery, so a naive version tastes of nothing. The fix is to reduce the juice first and sharpen it with lemon, and then it becomes a gorgeous, mellow, marmalade-coloured curd all of its own.",
    howThisFeels: "Warm marmalade-orange, silky and mellow with a bright citrus lift.",
    versions: [
      {
        name: "Classic Orange",
        icon: "🏆",
        default: true
      },
      {
        name: "Blood Orange",
        icon: "🩸",
        howThisFeels: "Blood oranges give a dramatic sunset colour and a deeper, berry-edged flavour.",
        delta: {
          swapIng: [
            { from:"oranges (zest and juice)", to:{ qty:2, unit:"", name:"blood oranges (zest and juice)" } }
          ]
        }
      },
      {
        name: "Naartjie Curd",
        icon: "🍊",
        howThisFeels: "The South African version — sweet, easy-peel naartjies for a softer, more perfumed, less acidic curd.",
        delta: {
          swapIng: [
            { from:"oranges (zest and juice)", to:{ qty:4, unit:"", name:"naartjies (zest and juice)" } }
          ]
        }
      },
      {
        name: "Orange & Cardamom",
        icon: "🌰",
        howThisFeels: "A pinch of ground cardamom turns it warm and aromatic — beautiful with anything almond.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"g", name:"ground cardamom" }, after:"sugar" }
          ],
          swapStep: [
            { from:"Whisk the eggs, yolk and sugar smooth", to:"Whisk the eggs, yolk, sugar and cardamom smooth" }
          ]
        }
      }
    ]
  },
  {
    id: "watermelon-konfyt", emoji: "🍉",
    name: "Watermelon Konfyt",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Warm", "Translucent"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 batch" },
      ingredients: [
        { qty:1000, unit:"g", name:"watermelon rind (white part only)" },
        { qty:15, unit:"g", name:"slaked lime (pickling lime, for soaking)" },
        { qty:1000, unit:"g", name:"sugar" },
        { qty:40, unit:"g", name:"fresh ginger, bruised" },
        { qty:1, unit:"", name:"lemon (juice and slices)" }
      ],
      method: "Peel off every scrap of green skin and scrape away all the pink flesh — waatlemoenkonfyt is made from the firm white rind alone. Cut it into neat cubes or strips. Stir the slaked lime into about 2 litres of water and soak the rind overnight; this is the step that keeps the konfyt firm and glassy instead of collapsing to mush. The next day rinse the rind very, very thoroughly in several changes of fresh water — do not skip this, all the lime must be gone — then simmer in clean water until just tender. Make a syrup with the sugar, the bruised ginger, the lemon and about 500ml water; add the drained rind and boil gently until the cubes turn translucent and the syrup is thick, which can take a couple of hours or two shorter sessions a day apart. Pot the rind and syrup into hot sterilised jars. It keeps for a year and is the classic partner to a wedge of farm cheese."
    },
    pairsWith: ["farm cheese", "buttered bread", "koeksisters", "cheese board", "vanilla ice cream"],
    aliases: ["watermelon konfyt", "waatlemoenkonfyt", "watermelon preserve", "konfyt"],
    story: "Waatlemoenkonfyt is Karoo thrift turned into a delicacy — the rind that most people throw away, soaked in kalk (slaked lime) to firm it, then slowly candied in ginger syrup until every cube glows translucent. It is a preserve that demands patience, made over days, and it is treasured exactly because of that effort.",
    howThisFeels: "Glassy, jewel-like cubes in a thick ginger syrup — chewy, sweet and gently warming.",
    versions: [
      {
        name: "Classic (Ginger)",
        icon: "🏆",
        default: true
      },
      {
        name: "Extra Ginger",
        icon: "🫚",
        howThisFeels: "A double hit of ginger — more warmth and bite against the sweet, glassy rind.",
        delta: {
          swapIng: [
            { from:"fresh ginger, bruised", to:{ qty:80, unit:"g", name:"fresh ginger, bruised" } }
          ]
        }
      },
      {
        name: "Naartjie & Cinnamon",
        icon: "🍊",
        howThisFeels: "Naartjie peel and a cinnamon stick in the syrup give a fragrant, festive edge.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"naartjie (peel and juice)" }, after:"lemon (juice and slices)" },
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"naartjie (peel and juice)" }
          ],
          swapStep: [
            { from:"the lemon and about 500ml water", to:"the lemon, naartjie peel and juice, cinnamon stick and about 500ml water" }
          ]
        }
      }
    ]
  },

  {
    id: "green-fig-konfyt", emoji: "🍯",
    name: "Green Fig Konfyt",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Warm", "Whole-fruit"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 batch" },
      ingredients: [
        { qty:1000, unit:"g", name:"small green (unripe) figs" },
        { qty:15, unit:"g", name:"slaked lime (pickling lime, for soaking)" },
        { qty:1000, unit:"g", name:"sugar" },
        { qty:40, unit:"g", name:"fresh ginger, bruised" },
        { qty:1, unit:"", name:"lemon (juice and slices)" }
      ],
      method: "Choose small, firm, completely unripe figs and cut a little cross in the base of each one so the syrup can work its way in. Soak them overnight in the slaked lime dissolved in about 2 litres of water — this firms the figs so they hold their shape through the long cooking. Rinse extremely well in several changes of fresh water until no trace of lime remains, then parboil the figs briefly and drain. Make a syrup with the sugar, ginger, lemon and about 750ml water, add the figs, and simmer gently; the traditional way is to bring them to the boil, then leave them to stand off the heat, and repeat over two or three days until the figs turn deep amber-green and translucent right through. Pot the whole figs upright in hot sterilised jars and cover with the syrup. Serve one whole fig at a time, with cheese or a spoon of cream."
    },
    pairsWith: ["farm cheese", "cream", "cheese board", "koeksisters", "brandy tart"],
    aliases: ["green fig konfyt", "groenvykonfyt", "green fig preserve", "fig konfyt"],
    story: "Groenvykonfyt is the queen of the Cape preserves — whole baby green figs candied slowly until dark and glossy, each one a little jewel served proudly on its own. Like watermelon konfyt it relies on a slaked-lime soak to keep the figs firm, and on the patience of boiling-and-standing over several days.",
    howThisFeels: "Whole glossy figs, deep amber-green and translucent, sweet and syrupy with a warm ginger note.",
    versions: [
      {
        name: "Classic (Ginger)",
        icon: "🏆",
        default: true
      },
      {
        name: "Spiced (Cinnamon & Clove)",
        icon: "🎄",
        howThisFeels: "Cinnamon and clove in the syrup make a warmer, more festive konfyt.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"lemon (juice and slices)" },
            { item:{ qty:4, unit:"", name:"cloves" }, after:"cinnamon stick" }
          ],
          swapStep: [
            { from:"Make a syrup with the sugar, ginger, lemon and about 750ml water", to:"Make a syrup with the sugar, ginger, lemon, cinnamon, cloves and about 750ml water" }
          ]
        }
      },
      {
        name: "Extra Ginger",
        icon: "🫚",
        howThisFeels: "More bruised ginger for a spicier, less purely-sweet fig.",
        delta: {
          swapIng: [
            { from:"fresh ginger, bruised", to:{ qty:80, unit:"g", name:"fresh ginger, bruised" } }
          ]
        }
      }
    ]
  },

  {
    id: "makataan-konfyt", emoji: "🍉",
    name: "Makataan Konfyt",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Warm", "Translucent"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 batch" },
      ingredients: [
        { qty:1000, unit:"g", name:"makataan flesh (cubed)" },
        { qty:15, unit:"g", name:"slaked lime (pickling lime, for soaking)" },
        { qty:1000, unit:"g", name:"sugar" },
        { qty:50, unit:"g", name:"fresh ginger, bruised" },
        { qty:1, unit:"", name:"lemon (juice and slices)" }
      ],
      method: "Makataan is the hard wild preserving-melon of the Karoo, and unlike watermelon konfyt you use its firm pale flesh, not the rind — cut it into neat cubes, discarding the seeds. Soak the cubes overnight in the slaked lime dissolved in about 2 litres of water to keep them firm and glassy. Rinse extraordinarily well in several changes of fresh water until all the lime is gone, then parboil in clean water until just tender. Make a syrup with the sugar, plenty of bruised ginger, the lemon and about 500ml water; add the drained makataan and boil gently until the cubes are translucent and the syrup thick, over a couple of hours or two sessions. Makataan takes ginger even more generously than watermelon does. Pot into hot sterilised jars."
    },
    pairsWith: ["farm cheese", "buttered rusks", "cheese board", "cream", "koeksisters"],
    aliases: ["makataan konfyt", "makataankonfyt", "maketaan konfyt", "citron melon konfyt"],
    story: "Makataan (the citron or preserving melon) grows wild and hardy across the Karoo, too tough and bland to eat raw but perfect for konfyt. Where waatlemoenkonfyt uses the rind of an eating watermelon, makataankonfyt uses the firm flesh of this special melon — and it takes a heavier hand of ginger, which is its signature.",
    howThisFeels: "Firm, glassy cubes heavy with ginger syrup — the Karoo's answer to candied fruit.",
    versions: [
      {
        name: "Classic (Heavy Ginger)",
        icon: "🏆",
        default: true
      },
      {
        name: "Lemon & Naartjie",
        icon: "🍊",
        howThisFeels: "Extra citrus in the syrup brightens the sweetness with naartjie and lemon peel.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"naartjie (peel and juice)" }, after:"lemon (juice and slices)" }
          ],
          swapStep: [
            { from:"the lemon and about 500ml water", to:"the lemon, naartjie peel and juice, and about 500ml water" }
          ]
        }
      }
    ]
  },

  {
    id: "korrelkonfyt", emoji: "🍇",
    name: "Korrelkonfyt",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Fruity", "Whole-fruit"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 batch" },
      ingredients: [
        { qty:1000, unit:"g", name:"hanepoot (muscat) grapes" },
        { qty:600, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:200, unit:"ml", name:"water" }
      ],
      method: "Korrelkonfyt takes its name from the korrel, the single grape — the whole point is that each grape stays whole and plump in the syrup. Nick each grape and squeeze out the pips, or slit and flick them out with a pin, keeping the grape as intact as you can (seedless grapes save you the trouble but the old hanepoot flavour is worth the work). Bring the sugar, water and lemon juice to a simmer until the sugar dissolves, then slide in the grapes and cook gently — never at a hard boil, which would burst them — until the grapes are glossy and the syrup has thickened to a light set, about 30 to 40 minutes. Skim any foam and pot into hot sterilised jars. The muscat perfume is what makes it special."
    },
    pairsWith: ["buttered toast", "farm cheese", "scones", "melktert", "yoghurt"],
    aliases: ["korrelkonfyt", "grape konfyt", "grape jam", "hanepoot konfyt"],
    story: "Korrelkonfyt is the Cape winelands' whole-grape preserve, traditionally made with fragrant hanepoot (muscat) grapes at the end of the harvest. The skill is in keeping every grape whole and suspended in its perfumed syrup — a jam where texture matters as much as taste.",
    howThisFeels: "Whole plump grapes in a light muscat syrup — soft, sweet and perfumed.",
    versions: [
      {
        name: "Classic Hanepoot",
        icon: "🏆",
        default: true
      },
      {
        name: "Lemon & Cinnamon",
        icon: "🍋",
        howThisFeels: "A cinnamon stick and extra lemon give the muscat grapes a warmer, spiced edge.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"lemon (juice)" }
          ],
          swapStep: [
            { from:"Bring the sugar, water and lemon juice to a simmer", to:"Bring the sugar, water, cinnamon stick and lemon juice to a simmer" }
          ]
        }
      },
      {
        name: "Red Grape",
        icon: "🍇",
        howThisFeels: "Made with red grapes for a deeper colour and a jammier, less floral flavour.",
        delta: {
          swapIng: [
            { from:"hanepoot (muscat) grapes", to:{ qty:1000, unit:"g", name:"red grapes" } }
          ]
        }
      }
    ]
  },

  {
    id: "blueberry-jam", emoji: "🍇",
    name: "Blueberry Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Global",
    flavourChips: ["Sweet", "Fruity", "Tangy"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"blueberries (fresh or frozen)" },
        { qty:350, unit:"g", name:"sugar" },
        { qty: 15, unit: "ml", name:"lemon juice" }
      ],
      method: "Combine the blueberries with the sugar and a good squeeze of lemon juice in a wide pot — frozen berries work perfectly and need no defrosting. Let them stand 15 minutes until the juices run, then bring to a rolling boil, stirring often and crushing some of the berries against the side of the pot to release their pectin while leaving others whole. Boil for 10 to 15 minutes until thick, testing for set on a cold saucer. Blueberries are only moderately high in pectin and quite low in acid, so the lemon juice does real work here, both for the set and to stop the jam tasting flat. Skim any foam and pot into hot sterilised jars. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["toast", "pancakes", "scones", "yoghurt", "cheesecake"],
    aliases: ["blueberry jam", "blueberry preserve", "blueberry conserve"],
    story: "Blueberry jam is deep, sweet and only just tart, with a colour close to purple-black. The trick is balance: crushing some berries for a good set while keeping others whole for texture, and leaning on lemon to lift a fruit that can otherwise taste a little flat and one-note.",
    howThisFeels: "Deep purple-black and glossy, sweet with a gentle tang and whole berries throughout.",
    versions: [
      {
        name: "Classic Blueberry",
        icon: "🏆",
        default: true
      },
      {
        name: "Blueberry & Lemon",
        icon: "🍋",
        howThisFeels: "Extra lemon zest sharpens and brightens — the jam tastes fresher and less sweet.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"lemon zest" }, after:"lemon juice" }
          ]
        }
      },
      {
        name: "Blueberry & Vanilla",
        icon: "🌸",
        howThisFeels: "A split vanilla pod rounds the berries into something softer and dessert-like.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"vanilla pod (split)" }, after:"lemon juice" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Fish out the vanilla pod, skim any foam and pot" }
          ]
        }
      },
      {
        name: "Blueberry & Fynbos Honey",
        icon: "🍯",
        howThisFeels: "Part of the sugar swapped for fragrant fynbos honey — a floral, distinctly South African note.",
        delta: {
          swapIng: [
            { from:"sugar", to:{ qty:250, unit:"g", name:"sugar" } }
          ],
          addIng: [
            { item:{ qty:100, unit:"g", name:"fynbos honey" }, after:"sugar" }
          ],
          swapStep: [
            { from:"Combine the blueberries with the sugar", to:"Combine the blueberries with the sugar and honey" }
          ]
        }
      }
    ]
  },

  {
    id: "cape-gooseberry-jam", emoji: "🟡",
    name: "Cape Gooseberry Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Tangy", "Fruity"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"Cape gooseberries (appelliefies), husked" },
        { qty:350, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:80, unit:"ml", name:"water" }
      ],
      method: "Pull off the papery husks and rinse the appelliefies well — they can be a little sticky underneath. Halve them and put them in a wide pot with the sugar, lemon juice and water, and let them stand 15 minutes. Bring to a rolling boil, stirring often, and cook for 15 to 20 minutes until thick and jammy, testing for set on a cold saucer. Cape gooseberries are naturally high in pectin, so they set willingly — start testing early. Skim any foam and pot into hot sterilised jars. The flavour is unmistakable: sweet-tart, faintly tropical, a little like a cross between an apricot and a tomato. Sealed jars keep for months; refrigerate up to 3 weeks once opened."
    },
    pairsWith: ["toast", "scones", "farm cheese", "yoghurt", "malva pudding"],
    aliases: ["cape gooseberry jam", "appelliefiekonfyt", "appelliefie jam", "gooseberry jam", "physalis jam"],
    story: "The Cape gooseberry — appelliefie — is the little golden physalis in its papery lantern, and its jam is a South African favourite for good reason: sweet-tart, richly perfumed and naturally pectin-rich so it sets like a dream. It is a different fruit from the green European gooseberry, though both make a fine jam.",
    howThisFeels: "Golden-amber and glossy, sweet-tart and faintly tropical with a soft, easy set.",
    versions: [
      {
        name: "Classic Appelliefie",
        icon: "🏆",
        default: true
      },
      {
        name: "Gooseberry & Ginger",
        icon: "🫚",
        howThisFeels: "Grated fresh ginger adds a warm bite that suits the fruit's tang beautifully.",
        delta: {
          addIng: [
            { item:{ qty:15, unit:"g", name:"fresh ginger, grated" }, after:"water" }
          ]
        }
      },
      {
        name: "Gooseberry & Vanilla",
        icon: "🌸",
        howThisFeels: "A split vanilla pod turns the tartness soft and mellow, almost custardy.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"vanilla pod (split)" }, after:"water" }
          ],
          swapStep: [
            { from:"Skim any foam and pot", to:"Fish out the vanilla pod, skim any foam and pot" }
          ]
        }
      }
    ]
  },

  {
    id: "tomato-jam", emoji: "🍅",
    name: "Tomato Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Warm", "Savoury-edge"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:800, step:100, label:"1 jar" },
      ingredients: [
        { qty:800, unit:"g", name:"ripe tomatoes (peeled, chopped)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty:25, unit:"g", name:"fresh ginger, bruised" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "To peel the tomatoes easily, score a cross in the base, dip in boiling water for 30 seconds, then slip off the skins. Chop them and put them in a wide pot with the sugar, bruised ginger, lemon juice and salt. Bring to a boil, then lower to a steady simmer and cook — stirring more and more often as it thickens — for 45 minutes to over an hour, until it reduces to a thick, sticky, glossy jam. Tomato jam takes real time because tomatoes are so watery, so do not rush the reduction. Fish out the ginger, skim, and pot into hot sterilised jars. Tamatiekonfyt sits right on the sweet-savoury line: gorgeous on the cheese board, with cold meats, on a burger, or beside a curry."
    },
    pairsWith: ["cheese board", "cold meats", "burgers", "boerewors", "curry"],
    aliases: ["tomato jam", "tamatiekonfyt", "tomato konfyt", "tomato preserve"],
    story: "Tomato jam — tamatiekonfyt — is one of the oldest South African preserves, a sweet-savoury spoonful of tomato, sugar and ginger that walks the line between jam and relish. Botanically the tomato is a fruit, and here it is treated like one, cooked long and slow until it is sticky, dark and deeply savoury-sweet.",
    howThisFeels: "Thick, sticky and dark red, sweet up front with a savoury, gingery depth underneath.",
    versions: [
      {
        name: "Classic Sweet (Ginger)",
        icon: "🏆",
        default: true
      },
      {
        name: "Chilli Tomato (Braai Relish)",
        icon: "🌶️",
        howThisFeels: "Chilli and a splash of vinegar tip it savoury — a sticky relish made for boerewors and burgers.",
        delta: {
          swapIng: [
            { from:"sugar", to:{ qty:300, unit:"g", name:"sugar" } }
          ],
          addIng: [
            { item:{ qty:6, unit:"g", name:"chilli flakes" }, after:"fresh ginger, bruised" },
            { item:{ qty:30, unit:"ml", name:"red wine vinegar" }, after:"chilli flakes" }
          ],
          swapStep: [
            { from:"the sugar, bruised ginger, lemon juice and salt", to:"the sugar, bruised ginger, chilli flakes, vinegar, lemon juice and salt" }
          ]
        }
      },
      {
        name: "Smoky (Paprika)",
        icon: "🔥",
        howThisFeels: "Smoked paprika gives a mellow, barbecue-style smokiness — halfway to a homemade ketchup.",
        delta: {
          addIng: [
            { item:{ qty:5, unit:"g", name:"smoked paprika" }, after:"salt" }
          ],
          swapStep: [
            { from:"the sugar, bruised ginger, lemon juice and salt", to:"the sugar, bruised ginger, lemon juice, salt and smoked paprika" }
          ]
        }
      }
    ]
  },

  {
    id: "naartjie-konfyt", emoji: "🍊",
    name: "Naartjie Konfyt",
    type: "paste",
    shelf: "jams-preserves",
    region: "South Africa",
    flavourChips: ["Sweet", "Zesty", "Warm"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 jar" },
      ingredients: [
        { qty:10, unit:"", name:"naartjies (peel of)" },
        { qty:500, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:400, unit:"ml", name:"water" }
      ],
      method: "Peel the naartjies in big pieces and scrape away most of the soft white pith from the inside of the peel, since too much pith turns the konfyt bitter. Cut the peel into strips, or roll each piece up and thread the rolls onto cotton the old-fashioned way. Boil the peel in plenty of fresh water for a few minutes, drain, and repeat two or three times in fresh water each time — this is what draws out the bitterness. Now make a syrup with the sugar, water and lemon juice, add the blanched peel, and simmer gently for about an hour until the peel is soft and translucent and the syrup has thickened. Pot the peel and syrup into hot sterilised jars. Eat the candied strips with cheese, chop them into cakes and tarts, or serve as a sweet konfyt on buttered bread."
    },
    pairsWith: ["farm cheese", "buttered bread", "fruit cake", "koeksisters", "vanilla ice cream"],
    aliases: ["naartjie konfyt", "naartjiekonfyt", "candied naartjie peel", "citrus peel konfyt"],
    story: "Naartjie konfyt turns the peel most people throw away into a sweet, glossy treat — candied strips of fragrant naartjie skin in syrup, a thrifty Cape tradition. The secret is boiling the peel in several changes of water first to chase out the bitterness, leaving only the perfumed citrus oils behind.",
    howThisFeels: "Glossy, translucent strips of sweet citrus peel, chewy and perfumed with a warm zest.",
    versions: [
      {
        name: "Classic Naartjie",
        icon: "🏆",
        default: true
      },
      {
        name: "Spiced (Cinnamon & Star Anise)",
        icon: "🎄",
        howThisFeels: "Cinnamon and star anise in the syrup make a mulled, festive peel — lovely at Christmas.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"lemon (juice)" },
            { item:{ qty:2, unit:"", name:"star anise" }, after:"cinnamon stick" }
          ],
          swapStep: [
            { from:"make a syrup with the sugar, water and lemon juice", to:"make a syrup with the sugar, water, cinnamon, star anise and lemon juice" }
          ]
        }
      },
      {
        name: "Orange Peel",
        icon: "🍊",
        howThisFeels: "Made with orange peel instead — larger strips, a little more bitter, classic for dipping in dark chocolate.",
        delta: {
          swapIng: [
            { from:"naartjies (peel of)", to:{ qty:4, unit:"", name:"oranges (peel of)" } }
          ]
        }
      }
    ]
  },

  {
    id: "membrillo", emoji: "🍐",
    name: "Membrillo (Quince Paste)",
    type: "paste",
    shelf: "jams-preserves",
    region: "Spain",
    flavourChips: ["Sweet", "Fruity", "Sliceable"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 block" },
      ingredients: [
        { qty:1000, unit:"g", name:"quinces" },
        { qty:800, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" }
      ],
      method: "Rub the grey fluff off the quinces, then chop them roughly — skin, core and all, since the peel and pips are full of the pectin that sets the paste. Simmer in just enough water to cover until completely soft, about 40 minutes, then drain and push through a sieve or blend to a smooth purée. Weigh the purée and return it to the pan with roughly three-quarters its weight in sugar and the lemon juice. Now cook it low and slow, stirring almost constantly for 45 minutes to over an hour — it will darken from pale gold to a deep brick-red and thicken until a spoon dragged across the bottom leaves a clear trail. Take care: thick membrillo spits like lava, so use a long spoon and keep the heat gentle. Scrape into a lined tin, smooth the top, and leave uncovered overnight to set to a firm, sliceable block. It is the classic partner to Manchego and keeps for months."
    },
    pairsWith: ["Manchego", "cheese board", "cured ham", "roast lamb", "buttered toast"],
    aliases: ["membrillo", "quince paste", "dulce de membrillo", "quince cheese"],
    story: "Dulce de membrillo is Spain's firm, sliceable quince paste — the sweet red block that turns a wedge of salty Manchego into a perfect mouthful. Raw quince is hard, sour and inedible, but long cooking with sugar performs alchemy: the pale flesh turns deep ruby and the sourness becomes a deep, honeyed perfume.",
    howThisFeels: "A firm, sliceable block of deep ruby-red, sweet and floral with a grainy, quince perfume.",
    versions: [
      {
        name: "Classic Sliceable",
        icon: "🏆",
        default: true
      },
      {
        name: "Spiced (Cinnamon & Clove)",
        icon: "🎄",
        howThisFeels: "Warm spice woven in — a Christmassy membrillo that is wonderful with a mature cheese.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"lemon (juice)" },
            { item:{ qty:3, unit:"", name:"cloves" }, after:"cinnamon stick" }
          ],
          swapStep: [
            { from:"return it to the pan with roughly three-quarters its weight in sugar and the lemon juice", to:"return it to the pan with roughly three-quarters its weight in sugar, the lemon juice, the cinnamon stick and cloves" },
            { from:"Scrape into a lined tin", to:"Fish out the cinnamon and cloves, then scrape into a lined tin" }
          ]
        }
      },
      {
        name: "Membrillo Picante (for Cheese)",
        icon: "🌶️",
        howThisFeels: "A pinch of smoked chilli tips it savoury — a grown-up cheese-board paste with a slow warmth.",
        delta: {
          addIng: [
            { item:{ qty:3, unit:"g", name:"smoked chilli flakes" }, after:"lemon (juice)" }
          ],
          swapStep: [
            { from:"roughly three-quarters its weight in sugar and the lemon juice", to:"roughly three-quarters its weight in sugar, the lemon juice and the smoked chilli" }
          ]
        }
      },
      {
        name: "Soft & Spoonable",
        icon: "🥄",
        howThisFeels: "Cooked a shorter time to a thick spoonable jam rather than a firm block — for those who want to spread it.",
        delta: {
          swapStep: [
            { from:"Scrape into a lined tin, smooth the top, and leave uncovered overnight to set to a firm, sliceable block.", to:"Stop while it is still thick but spoonable and pot into hot sterilised jars — it will stay soft enough to spread." }
          ]
        }
      }
    ]
  },

  {
    id: "quince-jam", emoji: "🍐",
    name: "Quince Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Middle East",
    flavourChips: ["Sweet", "Fruity", "Fragrant"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 jar" },
      ingredients: [
        { qty:1000, unit:"g", name:"quinces (peeled, grated or diced)" },
        { qty:800, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:600, unit:"ml", name:"water" }
      ],
      method: "Where membrillo is a firm block, quince jam stays soft and spreadable and shows off quince's party trick — the way it blushes from pale cream to deep rose-red the longer it cooks. Peel and core the quinces, tying the peels and cores in muslin for their pectin, and grate or finely dice the flesh. Simmer the flesh and muslin bag in the water for 40 minutes to an hour until the fruit is tender and has turned a rich pink. Add the sugar and lemon juice, squeeze and remove the muslin bag, then boil hard until it reaches setting point on a cold saucer. Pot into hot sterilised jars. The colour deepens further in the jar, so do not worry if it still looks pale when you pot it."
    },
    pairsWith: ["toast", "cheese board", "yoghurt", "roast pork", "scones"],
    aliases: ["quince jam", "quince preserve", "moraba-ye beh", "quince conserve"],
    story: "Quince jam is loved across the Middle East and Mediterranean for its extraordinary colour and honeyed, floral scent. The magic is chemical — the same long, slow cooking that softens the stony fruit also turns its pale flesh a deep ruby-rose, so patience is rewarded twice over, in texture and in colour.",
    howThisFeels: "Rose-red and glossy, honey-sweet and softly fragrant with tender shreds of fruit.",
    versions: [
      {
        name: "Classic Quince",
        icon: "🏆",
        default: true
      },
      {
        name: "Persian Rose (Moraba)",
        icon: "🌹",
        howThisFeels: "A little rosewater and cardamom make the classic Persian moraba-ye beh — deeply perfumed and exotic.",
        delta: {
          addIng: [
            { item:{ qty:3, unit:"ml", name:"rosewater" }, after:"lemon (juice)" },
            { item:{ qty:2, unit:"g", name:"ground cardamom" }, after:"rosewater" }
          ],
          swapStep: [
            { from:"Add the sugar and lemon juice", to:"Add the sugar, lemon juice and cardamom" },
            { from:"Pot into hot sterilised jars.", to:"Stir in the rosewater off the heat, then pot into hot sterilised jars." }
          ]
        }
      },
      {
        name: "Spiced (Cinnamon & Star Anise)",
        icon: "🎄",
        howThisFeels: "Warm whole spices simmered in give a mulled, wintery depth.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"water" },
            { item:{ qty:2, unit:"", name:"star anise" }, after:"cinnamon stick" }
          ],
          swapStep: [
            { from:"Simmer the flesh and muslin bag in the water", to:"Simmer the flesh, muslin bag and whole spices in the water" },
            { from:"squeeze and remove the muslin bag", to:"squeeze and remove the muslin bag and fish out the whole spices" }
          ]
        }
      }
    ]
  },

  {
    id: "rose-petal-jam", emoji: "🌹",
    name: "Rose-Petal Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Middle East",
    flavourChips: ["Sweet", "Floral", "Fragrant"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 small jar" },
      ingredients: [
        { qty:100, unit:"g", name:"fragrant rose petals (unsprayed, pesticide-free)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:300, unit:"ml", name:"water" }
      ],
      method: "Use only fragrant, unsprayed roses — pesticide-free damask or the deepest pink garden roses — because you are eating the petals and supermarket roses are usually sprayed. Snip off the bitter white heel at the base of each petal. Put the petals in a bowl with about a third of the sugar and the lemon juice and rub them between your fingers for a few minutes; they will bruise, soften and release their colour and scent. Boil the rest of the sugar with the water to a light syrup, add the sugared petals and lemon, and simmer very gently for 20 to 30 minutes until the petals are soft and translucent and the syrup thickens — the lemon keeps the colour a vivid pink rather than dull brown. Pot into small hot sterilised jars. A little goes a long way, spooned over yoghurt, ice cream or into Turkish delight."
    },
    pairsWith: ["yoghurt", "vanilla ice cream", "rice pudding", "clotted cream scones", "baklava"],
    aliases: ["rose petal jam", "gul receli", "rose jam", "rose preserve", "gulkand"],
    story: "Rose-petal jam — gül reçeli in Turkey — is one of the world's most romantic preserves, catching the scent of a whole rose garden in a spoonful. It stretches from the Balkans through Turkey and Persia to India's sun-cooked gulkand, and everywhere it is treasured as much for its perfume as its taste. The one rule is unsprayed roses only.",
    howThisFeels: "A vivid pink, intensely perfumed syrup studded with soft translucent petals — a rose garden on a spoon.",
    versions: [
      {
        name: "Classic Rose",
        icon: "🏆",
        default: true
      },
      {
        name: "Rose & Cardamom",
        icon: "🌰",
        howThisFeels: "Crushed cardamom adds a warm, resinous spice that deepens the floral scent.",
        delta: {
          addIng: [
            { item:{ qty:2, unit:"g", name:"ground cardamom" }, after:"lemon (juice)" }
          ],
          swapStep: [
            { from:"add the sugared petals and lemon", to:"add the sugared petals, cardamom and lemon" }
          ]
        }
      },
      {
        name: "Persian Rose & Saffron",
        icon: "🌸",
        howThisFeels: "A pinch of saffron turns it golden-pink and gives a honeyed, luxurious Persian character.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"g", name:"saffron threads" }, after:"water" }
          ],
          swapStep: [
            { from:"Boil the rest of the sugar with the water", to:"Boil the rest of the sugar with the water and saffron" }
          ]
        }
      }
    ]
  },

  {
    id: "date-jam", emoji: "🌴",
    name: "Date Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Middle East",
    flavourChips: ["Sweet", "Warm", "Rich"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:400, step:100, label:"1 jar" },
      ingredients: [
        { qty:300, unit:"g", name:"soft pitted dates, chopped" },
        { qty:350, unit:"ml", name:"water" },
        { qty:1, unit:"", name:"orange (zest and juice)" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:2, unit:"g", name:"ground cinnamon" },
        { qty:1, unit:"g", name:"salt" }
      ],
      method: "Unlike a plain date paste for sweetening, this is a spiced spread for the breakfast table — dates cooked down with citrus and warm spice into something jammy and toffee-rich, with no added sugar needed since the dates are sweet enough. Simmer the chopped dates in the water with the orange juice for 10 to 15 minutes until very soft and collapsing. Mash well with a fork, or blend for a smoother spread, loosening with a splash more water if it gets too stiff. Stir in the orange zest, lemon juice, cinnamon and salt — the lemon is important, cutting the sweetness so it tastes of dates rather than just sugar. Cook another few minutes to a thick, spreadable jam, then pot into a sterilised jar. It keeps a couple of weeks in the fridge and is lovely on toast, with cheese, or swirled into porridge."
    },
    pairsWith: ["toast", "porridge", "cheese board", "pancakes", "yoghurt"],
    aliases: ["date jam", "date spread", "spiced date jam", "date butter"],
    story: "Date jam is the Middle Eastern answer to a sweet spread that needs no sugar at all — dates are already nature's caramel, and cooking them down with orange, lemon and cinnamon turns them into a glossy, toffee-rich preserve. It is close cousin to the date syrups and pastes of the region, but brightened and spiced for the toast rack.",
    howThisFeels: "Dark, glossy and toffee-rich, deeply sweet with a warm cinnamon-and-citrus lift.",
    versions: [
      {
        name: "Classic Spiced Date",
        icon: "🏆",
        default: true
      },
      {
        name: "Date & Tahini",
        icon: "🥜",
        howThisFeels: "Tahini swirled in gives a nutty, savoury richness — the classic Levantine pairing of dates and sesame.",
        delta: {
          addIng: [
            { item:{ qty:40, unit:"g", name:"tahini" }, after:"salt" }
          ],
          swapStep: [
            { from:"Cook another few minutes to a thick, spreadable jam", to:"Swirl the tahini through, then cook another few minutes to a thick, spreadable jam" }
          ]
        }
      },
      {
        name: "Date, Walnut & Cardamom",
        icon: "🌰",
        howThisFeels: "Toasted walnuts and cardamom make a chunkier, more festive spread — almost a filling for pastries.",
        delta: {
          swapIng: [
            { from:"ground cinnamon", to:{ qty:2, unit:"g", name:"ground cardamom" } }
          ],
          addIng: [
            { item:{ qty:50, unit:"g", name:"walnuts, toasted and chopped" }, after:"salt" }
          ],
          swapStep: [
            { from:"cinnamon and salt", to:"cardamom and salt" },
            { from:"Cook another few minutes to a thick, spreadable jam", to:"Stir in the toasted walnuts, then cook another few minutes to a thick, spreadable jam" }
          ]
        }
      }
    ]
  },

  {
    id: "cherry-confiture", emoji: "🍒",
    name: "Cherry Confiture",
    type: "paste",
    shelf: "jams-preserves",
    region: "France",
    flavourChips: ["Sweet", "Fruity", "Whole-fruit"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:500, step:100, label:"1 jar" },
      ingredients: [
        { qty:500, unit:"g", name:"cherries (pitted, kept whole)" },
        { qty:400, unit:"g", name:"sugar" },
        { qty:1, unit:"", name:"lemon (juice)" },
        { qty:60, unit:"ml", name:"redcurrant juice (or a spoon of redcurrant jelly)" },
        { qty:20, unit:"ml", name:"kirsch" }
      ],
      method: "A French confiture is a different thing from a set jam — the whole cherries stay proudly intact, suspended in a loose, glossy syrup rather than crushed to a firm spread. Pit the cherries, keeping them whole, and layer them with the sugar and lemon juice in a bowl; leave overnight so the sugar draws the juices out without breaking the fruit. The next day, lift the cherries out with a slotted spoon and boil the syrup with the redcurrant juice hard until it reaches a light set — the redcurrant lends both pectin and a welcome tartness against the sweet cherries. Slip the whole cherries back in for just 3 to 4 minutes so they warm through but stay whole, then stir in the kirsch off the heat. Pot into hot sterilised jars. This is a spoon-fruit as much as a jam: glorious over ice cream, in a clafoutis, or with duck."
    },
    pairsWith: ["vanilla ice cream", "clafoutis", "brioche", "roast duck", "dark chocolate cake"],
    aliases: ["cherry confiture", "confiture de cerises", "whole cherry preserve", "cherry preserve"],
    story: "Confiture de cerises is the French art of the whole-fruit preserve, where success is judged on how many cherries survive intact and glossy in the jar. It is a looser, more elegant thing than a British-style set jam — closer to a fruit dessert you would spoon over cream — and the traditional touch of redcurrant and kirsch is what lifts it from sweet to sophisticated.",
    howThisFeels: "Whole glossy cherries in a loose, ruby, kirsch-scented syrup — a spoon-fruit fit for dessert.",
    versions: [
      {
        name: "Classic (with Kirsch)",
        icon: "🏆",
        default: true
      },
      {
        name: "Griotte (Sour Cherry)",
        icon: "🍒",
        howThisFeels: "Made with sour griotte cherries — sharper and more intense, the true French confiture cherry.",
        delta: {
          swapIng: [
            { from:"cherries (pitted, kept whole)", to:{ qty:500, unit:"g", name:"griotte (sour) cherries, pitted and kept whole" } }
          ]
        }
      },
      {
        name: "Confiture Quatre-Fruits",
        icon: "🍓",
        howThisFeels: "The classic four-red-fruits confiture — cherries joined by strawberries, redcurrants and raspberries for a jewelled mixed preserve.",
        delta: {
          swapIng: [
            { from:"cherries (pitted, kept whole)", to:{ qty:200, unit:"g", name:"cherries (pitted, kept whole)" } }
          ],
          addIng: [
            { item:{ qty:150, unit:"g", name:"strawberries, hulled" }, after:"cherries (pitted, kept whole)" },
            { item:{ qty:100, unit:"g", name:"redcurrants" }, after:"strawberries, hulled" },
            { item:{ qty:50, unit:"g", name:"raspberries" }, after:"redcurrants" }
          ],
          swapStep: [
            { from:"Pit the cherries, keeping them whole, and layer them with the sugar and lemon juice", to:"Pit the cherries and layer them and all the other fruit with the sugar and lemon juice" }
          ]
        }
      }
    ]
  },

  {
    id: "onion-confit", emoji: "🧅",
    name: "Onion Confit",
    type: "paste",
    shelf: "jams-preserves",
    region: "France",
    flavourChips: ["Sweet", "Savoury-edge", "Sticky"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:600, step:100, label:"1 jar" },
      ingredients: [
        { qty:600, unit:"g", name:"red onions, thinly sliced" },
        { qty:30, unit:"g", name:"butter" },
        { qty:60, unit:"g", name:"sugar" },
        { qty:60, unit:"ml", name:"red wine" },
        { qty:40, unit:"ml", name:"red wine vinegar" },
        { qty:3, unit:"g", name:"salt" }
      ],
      method: "Where a British onion chutney is led by vinegar, the French confiture d'oignons leans on butter and red wine for something glossier and winier — a jammy confit for the cheese board and pâté. Melt the butter in a wide pan and add the red onions with the salt; cook them very gently for 30 to 40 minutes, stirring now and then, until deeply soft and collapsed — low and slow is the whole secret, as high heat browns them bitter instead of sweet. Stir in the sugar and let it cook a few minutes to caramelise, then pour in the red wine and vinegar and let it bubble. Reduce, stirring more often as it thickens, for another 15 to 20 minutes until sticky, glossy and jammy with almost no liquid left. Pot into a hot sterilised jar. It keeps a few weeks in the fridge and is glorious with pâté, cold meats, a burger or a wedge of sharp cheese."
    },
    pairsWith: ["pâté", "cheese board", "burgers", "cold meats", "grilled steak"],
    aliases: ["onion confit", "onion marmalade", "confiture d'oignons", "red onion jam"],
    story: "Confiture d'oignons is the French bistro's secret weapon — sweet red onions cooked down slowly with red wine into a sticky, glossy jam that turns up beside every pâté and terrine. Unlike the sharper British onion chutney, this one is buttery and wine-rich, sweet with just enough acidity to keep it lively.",
    howThisFeels: "Dark, glossy and sticky, sweet with a savoury, wine-rich depth — the cheese board's best friend.",
    versions: [
      {
        name: "Classic Red Wine",
        icon: "🏆",
        default: true
      },
      {
        name: "Balsamic",
        icon: "🫒",
        howThisFeels: "Balsamic in place of the red wine vinegar makes it darker, sweeter and more syrupy.",
        delta: {
          swapIng: [
            { from:"red wine vinegar", to:{ qty:40, unit:"ml", name:"balsamic vinegar" } }
          ]
        }
      },
      {
        name: "Cassis (very French)",
        icon: "🍇",
        howThisFeels: "A splash of crème de cassis deepens the colour to near-black and adds a blackcurrant richness.",
        delta: {
          addIng: [
            { item:{ qty:30, unit:"ml", name:"crème de cassis" }, after:"red wine vinegar" }
          ],
          swapStep: [
            { from:"pour in the red wine and vinegar", to:"pour in the red wine, cassis and vinegar" }
          ]
        }
      },
      {
        name: "Port & Thyme",
        icon: "🌿",
        howThisFeels: "Port and fresh thyme give a warm, herby, fortified depth — especially good with blue cheese.",
        delta: {
          swapIng: [
            { from:"red wine", to:{ qty:60, unit:"ml", name:"port" } }
          ],
          addIng: [
            { item:{ qty:2, unit:"g", name:"fresh thyme leaves" }, after:"salt" }
          ],
          swapStep: [
            { from:"add the red onions with the salt", to:"add the red onions with the salt and thyme" }
          ]
        }
      }
    ]
  },

  {
    id: "apple-butter", emoji: "🍎",
    name: "Apple Butter",
    type: "paste",
    shelf: "jams-preserves",
    region: "United States",
    flavourChips: ["Sweet", "Warm", "Spiced"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 jar" },
      ingredients: [
        { qty:1000, unit:"g", name:"apples (peeled, cored, chopped)" },
        { qty:250, unit:"ml", name:"apple juice or cider" },
        { qty:150, unit:"g", name:"brown sugar" },
        { qty:3, unit:"g", name:"ground cinnamon" },
        { qty:1, unit:"g", name:"ground cloves" },
        { qty:1, unit:"", name:"lemon (juice)" }
      ],
      method: "Despite the name there is no dairy in apple butter — 'butter' describes the silky, spreadable texture it cooks down to. Simmer the apples in the apple juice until completely collapsed to a soft sauce, about 20 minutes, then blend or mash smooth. Stir in the brown sugar, cinnamon, cloves and lemon juice and now cook it long and low, stirring more and more often, for 1 to 2 hours — this is the step that makes apple butter, slowly driving off the water until it darkens to a deep glossy mahogany and mounds thickly on a spoon. If it spits, drop the heat and half-cover the pan. It is ready when a spoonful holds its shape and the surface looks glossy and dark. Pot into hot sterilised jars. Spread it thick on toast, swirl into porridge, or serve with pork or sharp cheddar."
    },
    pairsWith: ["toast", "porridge", "pancakes", "roast pork", "sharp cheddar"],
    aliases: ["apple butter", "spiced apple butter", "apple preserve"],
    story: "Apple butter is an American autumn tradition, born from communal 'butter boils' where windfall apples were cooked down all day in huge copper kettles over a fire. The long, slow cook is everything: it caramelises the natural sugars and concentrates the apples into a dark, spiced, spreadable butter far richer than any apple sauce.",
    howThisFeels: "Deep mahogany-brown, silky-smooth and thickly spreadable, warm with cinnamon and clove.",
    versions: [
      {
        name: "Classic Spiced",
        icon: "🏆",
        default: true
      },
      {
        name: "Bourbon Apple Butter",
        icon: "🥃",
        howThisFeels: "A slug of bourbon stirred in at the end adds a smoky, caramel warmth — very Southern.",
        delta: {
          addIng: [
            { item:{ qty:30, unit:"ml", name:"bourbon" }, after:"lemon (juice)" }
          ],
          swapStep: [
            { from:"It is ready when a spoonful holds its shape", to:"Stir in the bourbon near the end. It is ready when a spoonful holds its shape" }
          ]
        }
      },
      {
        name: "Pear Butter",
        icon: "🍐",
        howThisFeels: "Made with pears instead — mellower, floral and honeyed, with a little less spice.",
        delta: {
          swapIng: [
            { from:"apples (peeled, cored, chopped)", to:{ qty:1000, unit:"g", name:"pears (peeled, cored, chopped)" } },
            { from:"apple juice or cider", to:{ qty:250, unit:"ml", name:"pear or apple juice" } }
          ]
        }
      },
      {
        name: "Naturally Sweet (No Added Sugar)",
        icon: "🍏",
        howThisFeels: "Sweet apples cooked down with no added sugar at all — the fruit alone, for a purer, tarter butter.",
        delta: {
          removeIng: [
            { item:"brown sugar" }
          ],
          swapStep: [
            { from:"Stir in the brown sugar, cinnamon, cloves and lemon juice", to:"Stir in the cinnamon, cloves and lemon juice (no sugar — use naturally sweet apples like Golden Delicious or Fuji)" }
          ]
        }
      }
    ]
  },

  {
    id: "preserved-lemons", emoji: "🍋",
    name: "Preserved Lemons",
    type: "paste",
    shelf: "jams-preserves",
    region: "Morocco",
    flavourChips: ["Salty", "Tangy", "Fermented"],
    whenToUse: "mid",
    makeYourOwn: {
      yield: { mode:"batch", unit:"", base:6, step:2, label:"1 jar" },
      ingredients: [
        { qty:6, unit:"", name:"unwaxed lemons" },
        { qty:120, unit:"g", name:"coarse salt" },
        { qty:150, unit:"ml", name:"extra lemon juice (to cover)" }
      ],
      method: "Scrub the lemons well (if they are waxed, soak in warm water and rub the wax off). Cut each lemon into quarters from the top, but stop short of the base so it stays joined at the bottom. Pack coarse salt generously into every cut and all over the outside, then push the lemons hard into a clean sterilised jar, packing salt between them; press down firmly so they start to release their juice. Top up with extra lemon juice until every lemon is completely submerged — keeping them under the brine is what stops mould and lets them ferment safely. Seal, leave at room temperature for 3 to 4 weeks, and turn the jar daily for the first week to move the salt around. They are ready when the rinds are soft and the juice has gone syrupy. To use, lift one out with a clean fork, rinse, scrape away and discard the soft flesh, and finely slice or chop only the intense salty rind — that is the treasure — for tagines, roast chicken, dressings and grain salads. Once opened, keep in the fridge, always submerged, and they last a year."
    },
    pairsWith: ["chicken tagine", "roast chicken", "couscous", "grain salads", "grilled fish"],
    aliases: ["preserved lemons", "salt preserved lemons", "l'hamd markad", "moroccan lemons"],
    story: "Preserved lemons are the backbone of Moroccan cooking — whole lemons packed in salt and their own juice and left to ferment until the rind turns soft, mellow and deeply savoury. The salt draws out the water and the slow ferment transforms the harsh peel into something you could never get from a fresh lemon: intense, almost floral, and unmistakably itself.",
    howThisFeels: "Soft, silky, translucent rind — intensely salty, sour and savoury, with a mellow, almost floral depth.",
    versions: [
      {
        name: "Classic",
        icon: "🏆",
        default: true
      },
      {
        name: "Spiced",
        icon: "🌿",
        howThisFeels: "Bay, cinnamon, coriander seed and a dried chilli tucked into the jar perfume the lemons as they cure.",
        delta: {
          addIng: [
            { item:{ qty:2, unit:"", name:"bay leaves" }, after:"coarse salt" },
            { item:{ qty:1, unit:"", name:"cinnamon stick" }, after:"bay leaves" },
            { item:{ qty:5, unit:"g", name:"coriander seeds" }, after:"cinnamon stick" },
            { item:{ qty:1, unit:"", name:"dried chilli" }, after:"coriander seeds" }
          ],
          swapStep: [
            { from:"push the lemons hard into a clean sterilised jar", to:"tuck the bay, cinnamon, coriander seeds and chilli among the lemons and push them hard into a clean sterilised jar" }
          ]
        }
      },
      {
        name: "Preserved Limes",
        icon: "🍈",
        howThisFeels: "Made with limes — smaller, sharper and more aromatic, wonderful in South-East Asian and Indian cooking.",
        delta: {
          swapIng: [
            { from:"unwaxed lemons", to:{ qty:10, unit:"", name:"unwaxed limes" } },
            { from:"extra lemon juice (to cover)", to:{ qty:150, unit:"ml", name:"extra lime juice (to cover)" } }
          ]
        }
      },
      {
        name: "Quick (One Week)",
        icon: "⏱️",
        howThisFeels: "Thinly sliced rather than quartered, so they cure in about a week instead of a month — less deep, but fast.",
        delta: {
          swapStep: [
            { from:"Cut each lemon into quarters from the top, but stop short of the base so it stays joined at the bottom.", to:"Slice the lemons thinly into rounds." },
            { from:"leave at room temperature for 3 to 4 weeks, and turn the jar daily for the first week", to:"leave at room temperature for about 1 week, turning the jar daily" }
          ]
        }
      }
    ]
  },

  {
    id: "marrow-ginger-jam", emoji: "🥒",
    name: "Marrow & Ginger Jam",
    type: "paste",
    shelf: "jams-preserves",
    region: "Britain · old-fashioned",
    flavourChips: ["Sweet", "Warm", "Translucent"],
    whenToUse: "finish",
    makeYourOwn: {
      yield: { mode:"batch", unit:"g", base:1000, step:200, label:"1 jar" },
      ingredients: [
        { qty:1000, unit:"g", name:"marrow (peeled, deseeded, cubed)" },
        { qty:800, unit:"g", name:"sugar" },
        { qty:60, unit:"g", name:"fresh ginger, bruised" },
        { qty:2, unit:"", name:"lemons (zest and juice)" }
      ],
      method: "This is the wonderful oddity of the preserving world — a jam made from marrow, a vegetable with almost no flavour of its own, which is exactly the point: it becomes a translucent, glassy canvas for ginger and lemon. Peel the marrow, scoop out the seeds, and cut the firm flesh into neat small cubes. Layer the cubes with the sugar in a bowl and leave overnight, so the sugar draws out the marrow's considerable water. The next day tip everything into a pot with the bruised ginger and the lemon zest and juice, tying the ginger peelings and lemon pips in muslin and adding it too, since marrow has no pectin of its own and needs the help. Simmer gently until the marrow cubes turn clear and candied and the syrup thickens to a light set, about 45 minutes to an hour — the cubes should stay whole, like little jewels of candied ginger. Squeeze and remove the muslin, then pot into hot sterilised jars."
    },
    pairsWith: ["buttered toast", "scones", "farm cheese", "rice pudding", "steamed sponge"],
    aliases: ["marrow jam", "marrow and ginger jam", "marrow ginger jam", "marrow konfyt"],
    story: "Marrow and ginger jam is a thrifty piece of old-fashioned garden magic — the answer to the giant marrow that got away and grew to the size of a rugby ball. Because marrow tastes of almost nothing, the jam is all about the ginger and lemon it carries, and the strange delight of biting into a translucent, glassy cube that looks like candied fruit but started life as a humble vegetable.",
    howThisFeels: "Amber and glassy, with translucent cubes that glow like candied fruit — sweet, gingery and surprising.",
    versions: [
      {
        name: "Classic",
        icon: "🏆",
        default: true
      },
      {
        name: "Extra Ginger (Crystallised)",
        icon: "🫚",
        howThisFeels: "Chopped crystallised ginger stirred in near the end for a real, chewy ginger punch.",
        delta: {
          addIng: [
            { item:{ qty:60, unit:"g", name:"crystallised ginger, chopped" }, after:"fresh ginger, bruised" }
          ],
          swapStep: [
            { from:"Squeeze and remove the muslin", to:"Stir in the crystallised ginger, then squeeze and remove the muslin" }
          ]
        }
      },
      {
        name: "Marrow, Ginger & Chilli",
        icon: "🌶️",
        howThisFeels: "A dried chilli in the pot adds a slow warmth behind the ginger — surprisingly good with cheese.",
        delta: {
          addIng: [
            { item:{ qty:1, unit:"", name:"dried chilli" }, after:"fresh ginger, bruised" }
          ],
          swapStep: [
            { from:"tip everything into a pot with the bruised ginger", to:"tip everything into a pot with the bruised ginger, the dried chilli" }
          ]
        }
      }
    ]
  },

{
  "id": "mango-chutney", emoji: "🥭",
  "name": "Mango Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "India · Bengal & Anglo-Indian",
  "flavourChips": [
    "Sweet",
    "Tangy",
    "Gently spiced"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 300,
      "step": 300,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 250,
        "unit": "g",
        "name": "firm mango (slightly under-ripe), diced"
      },
      {
        "qty": 90,
        "unit": "g",
        "name": "sugar"
      },
      {
        "qty": 60,
        "unit": "ml",
        "name": "white wine or cider vinegar"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "fresh ginger, grated"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "garlic, grated"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "chilli flakes"
      },
      {
        "qty": 1,
        "unit": "g",
        "name": "nigella (kalonji) seeds"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Use mango that still has some bite — fully ripe fruit collapses to a stringy purée instead of holding in glossy chunks. Warm the vinegar and sugar together until the sugar dissolves, then add the ginger, garlic, chilli, nigella and salt. Tip in the mango and simmer gently, stirring now and then, for 30–40 minutes until the syrup is thick and jammy and coats the back of a spoon — it thickens more as it cools, so stop while it still looks a touch loose. Pot into a sterilised jar while hot and seal. Leave it a week if you can: chutney is raw and sharp on day one, and rounds out into something mellow and deep only after it matures."
  },
  "pairsWith": [
    "curry",
    "poppadoms",
    "cheese & crackers",
    "cold ham",
    "samosas"
  ],
  "aliases": [
    "mango chutney",
    "aam chutney",
    "major grey",
    "anglo-indian chutney"
  ],
  "story": "The sweet, jarred 'Major Grey' mango chutney of every curry house is a colonial invention — British officers in India acquired a taste for the local aam ki launji and had it bottled sweeter and milder for export, naming it after a probably-fictional 19th-century army officer. In Bengal the original is sharper, tempered with panch phoron.",
  "howThisFeels": "Glossy amber chunks of mango in a sweet-sharp, ginger-warm syrup — the spoonful that turns a plain curry into a feast.",
  "versions": [
    {
      "name": "Major Grey (Classic Sweet)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Hot Mango",
      "icon": "🌶️",
      "howThisFeels": "The same sweet mango with a real backbone of heat — Kashmiri chilli for colour and a slow burn.",
      "delta": {
        "swapIng": [
          {
            "from": "chilli flakes",
            "to": { "qty": 8, "unit": "g", "name": "Kashmiri chilli powder" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 2, "unit": "g", "name": "mustard seeds" }
          }
        ],
        "swapStep": [
          {
            "from": "add the ginger, garlic, chilli, nigella and salt",
            "to": "crackle the mustard seeds in a little hot oil first, then add the ginger, garlic, Kashmiri chilli, nigella and salt"
          }
        ]
      }
    },
    {
      "name": "Bengali Aam (Panch Phoron)",
      "icon": "🌿",
      "howThisFeels": "The sharper Bengali original — the five-spice panch phoron tempered in mustard oil gives it a savoury, almost bitter edge under the sweetness.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 3, "unit": "g", "name": "panch phoron (five-spice mix)" }
          },
          {
            "item": { "qty": 15, "unit": "ml", "name": "mustard oil" }
          }
        ],
        "removeIng": [
          {
            "item": "nigella (kalonji) seeds"
          }
        ],
        "swapStep": [
          {
            "from": "Warm the vinegar and sugar together until the sugar dissolves, then add the ginger, garlic, chilli, nigella and salt.",
            "to": "Heat the mustard oil to smoking, let it cool a touch, then crackle the panch phoron in it. Add the vinegar and sugar, dissolve, then the ginger, garlic and chilli."
          }
        ]
      }
    },
    {
      "name": "Green Mango & Lime",
      "icon": "🍈",
      "howThisFeels": "Sharper and fresher — hard green mango and lime, barely sweet, closer to an atchar than a jam.",
      "delta": {
        "swapIng": [
          {
            "from": "firm mango (slightly under-ripe), diced",
            "to": { "qty": 250, "unit": "g", "name": "green (unripe) mango, diced" }
          },
          {
            "from": "sugar",
            "to": { "qty": 40, "unit": "g", "name": "sugar" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 20, "unit": "ml", "name": "lime juice" },
            "after": "white wine or cider vinegar"
          }
        ]
      }
    }
  ]
},
{
  "id": "coriander-mint-chutney", emoji: "🍃",
  "name": "Coriander & Mint Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "India · North",
  "flavourChips": [
    "Fresh",
    "Herby",
    "Zingy"
  ],
  "whenToUse": "finish",
  "heat": 2,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 150,
      "step": 150,
      "label": "1 small bowl"
    },
    "ingredients": [
      {
        "qty": 40,
        "unit": "g",
        "name": "fresh coriander (leaves & tender stalks)"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "fresh mint leaves"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "green chilli"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "fresh ginger"
      },
      {
        "qty": 20,
        "unit": "ml",
        "name": "lemon juice"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "sugar"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      },
      {
        "qty": 20,
        "unit": "ml",
        "name": "cold water"
      }
    ],
    "method": "This is a raw, fresh chutney — its whole appeal is a vivid, grassy green, and the enemy is heat and time, both of which dull it to khaki. Blitz everything together with just enough cold water to get the blades moving, no more, so it stays a thick paste rather than a watery sauce. A splash of lemon juice does double duty — it sharpens the flavour and its acid keeps the green bright. Taste and balance: it should be punchy, a little hot, sour and barely sweet all at once. Use it the same day for the best colour; a cube or two frozen in an ice tray keeps that fresh green far better than a day in the fridge."
  },
  "pairsWith": [
    "samosas",
    "tandoori",
    "bhajis",
    "grilled meats",
    "sandwiches"
  ],
  "aliases": [
    "hari chutney",
    "green chutney",
    "coriander chutney",
    "mint chutney",
    "dhania chutney"
  ],
  "story": "Green chutney is India's ketchup — on every chaat cart and in every tiffin — but the mint-heavy version has a special job at tandoori restaurants: its cooling herbs and yoghurt-free sharpness are the deliberate foil to the smoky, chilli-red heat of the grill.",
  "howThisFeels": "A vivid, grassy-green paste that hits fresh, hot and lemon-sharp all at once — the cooling jolt beside anything off the grill.",
  "versions": [
    {
      "name": "Classic (Restaurant-Style)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Coconut-Mint (South Indian)",
      "icon": "🥥",
      "howThisFeels": "Rounder and milder — fresh coconut softens the herbs into a creamy, cooling South-Indian chutney.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 40, "unit": "g", "name": "fresh (or desiccated, soaked) coconut" }
          }
        ],
        "swapStep": [
          {
            "from": "Blitz everything together with just enough cold water",
            "to": "Blitz the coconut in first to a rough paste, then add the herbs and blitz with just enough cold water"
          }
        ]
      }
    },
    {
      "name": "Yoghurt Mint (Raita-Style)",
      "icon": "🥛",
      "howThisFeels": "Creamy and cooling — the herb paste loosened with yoghurt into a dip that quenches a fiery curry.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 80, "unit": "g", "name": "plain yoghurt" }
          }
        ],
        "removeIng": [
          {
            "item": "cold water"
          }
        ],
        "swapStep": [
          {
            "from": "Use it the same day for the best colour",
            "to": "Stir the fresh paste through the yoghurt just before serving so it stays bright. Use it the same day"
          }
        ]
      }
    },
    {
      "name": "Fiery Green",
      "icon": "🔥",
      "howThisFeels": "For the heat-seekers — double the green chilli and a little garlic, pure and punchy.",
      "delta": {
        "swapIng": [
          {
            "from": "green chilli",
            "to": { "qty": 40, "unit": "g", "name": "green chilli" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 4, "unit": "g", "name": "garlic" }
          }
        ]
      }
    }
  ]
},
{
  "id": "tamarind-date-chutney", emoji: "🌴",
  "name": "Tamarind & Date Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "India · North",
  "flavourChips": [
    "Sweet-sour",
    "Sticky",
    "Spiced"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 250,
      "step": 250,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 40,
        "unit": "g",
        "name": "seedless tamarind pulp"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "pitted dates"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "jaggery or brown sugar"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "roasted cumin, ground"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "dried ginger (saunth)"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "chilli powder"
      },
      {
        "qty": 1,
        "unit": "g",
        "name": "black salt (kala namak)"
      },
      {
        "qty": 250,
        "unit": "ml",
        "name": "water"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Simmer the tamarind and chopped dates in the water for 10–15 minutes until both are soft and collapsing. Push the lot through a sieve — this step is worth the effort, straining out the tamarind fibres and date skins for the silky, glossy texture that makes a good imli chutney. Return the smooth pulp to the pan with the jaggery, roasted cumin, dried ginger, chilli, black salt and salt, and simmer another 10 minutes until it thickens to a pourable, syrupy sauce that just coats a spoon. Remember it thickens further as it cools, so keep it slightly loose. The black salt is not optional — its sulphurous tang is exactly the chaat-cart flavour this chutney is chasing."
  },
  "pairsWith": [
    "samosas",
    "bhel puri",
    "pakoras",
    "dahi vada",
    "chaat"
  ],
  "aliases": [
    "imli chutney",
    "tamarind chutney",
    "sweet chutney",
    "saunth",
    "meethi chutney"
  ],
  "story": "The sweet, dark counterpart to green chutney, imli ki chutney is the sticky glue of Indian street food — every plate of bhel puri and dahi vada is finished with a drizzle. Its sweet-sour-salty balance is built to make the mouth water, which is precisely why chaat, dressed with it, is so hard to stop eating.",
  "howThisFeels": "A glossy, molasses-dark drizzle that hits sweet, then sour, then a salty tang — the sticky finish that makes street-food chaat irresistible.",
  "versions": [
    {
      "name": "Classic Sweet-Sour",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Ginger & Jaggery",
      "icon": "🫚",
      "howThisFeels": "Warmer and deeper — extra fresh ginger and dark jaggery for a treaclier, spicier finish.",
      "delta": {
        "swapIng": [
          {
            "from": "jaggery or brown sugar",
            "to": { "qty": 60, "unit": "g", "name": "dark jaggery" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 10, "unit": "g", "name": "fresh ginger, grated" }
          }
        ]
      }
    },
    {
      "name": "Extra-Hot",
      "icon": "🌶️",
      "howThisFeels": "The sweet-sour base with a genuine kick — more chilli and a pinch of black pepper for a slow heat.",
      "delta": {
        "swapIng": [
          {
            "from": "chilli powder",
            "to": { "qty": 6, "unit": "g", "name": "chilli powder" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 1, "unit": "g", "name": "black pepper" }
          }
        ]
      }
    }
  ]
},
{
  "id": "coconut-chutney", emoji: "🥥",
  "name": "Coconut Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "India · South",
  "flavourChips": [
    "Creamy",
    "Fresh",
    "Nutty"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 200,
      "step": 200,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 100,
        "unit": "g",
        "name": "fresh grated coconut (or desiccated, soaked in warm water)"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "roasted chana dal (or peanuts)"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "green chilli"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "fresh ginger"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      },
      {
        "qty": 60,
        "unit": "ml",
        "name": "water"
      },
      {
        "qty": 10,
        "unit": "ml",
        "name": "coconut or sunflower oil"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "mustard seeds"
      },
      {
        "qty": 1,
        "unit": "g",
        "name": "urad dal"
      },
      {
        "qty": 1,
        "unit": "g",
        "name": "dried red chilli"
      },
      {
        "qty": 6,
        "unit": "g",
        "name": "curry leaves"
      }
    ],
    "method": "Blitz the coconut, roasted chana dal, green chilli, ginger and salt with just enough water to a thick, spoonable paste — the dal is the secret to body, thickening the chutney so it clings to an idli instead of running off. Now the tempering (tadka), which is the whole soul of a South Indian chutney: heat the oil until shimmering, drop in the mustard seeds and wait for them to pop, then add the urad dal, dried red chilli and curry leaves and fry just until the dal turns golden and the leaves crackle — seconds, not minutes, or it burns bitter. Pour this sizzling spiced oil straight over the coconut paste and stir it through. Serve within a few hours; fresh coconut sours quickly."
  },
  "pairsWith": [
    "idli",
    "dosa",
    "vada",
    "upma",
    "uttapam"
  ],
  "aliases": [
    "thengai chutney",
    "coconut chutney",
    "nariyal chutney",
    "white chutney"
  ],
  "story": "The mandatory partner to idli and dosa across South India — no breakfast plate is complete without a mound of it. The finishing tadka of popping mustard seeds and curry leaves is not garnish but the point: that hot, spiced oil is what lifts a bland coconut paste into something fragrant.",
  "howThisFeels": "A cool, creamy mound of coconut crowned with a sizzle of mustard seeds and curry leaves — the soft white cloud beside a crisp golden dosa.",
  "versions": [
    {
      "name": "Classic White",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Red Coconut (Kashmiri)",
      "icon": "🌶️",
      "howThisFeels": "Blush-pink and warmer — dried Kashmiri chillies blended in for gentle heat and colour.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 3, "unit": "", "name": "dried Kashmiri chillies (soaked)" }
          }
        ],
        "removeIng": [
          {
            "item": "green chilli"
          }
        ],
        "swapStep": [
          {
            "from": "Blitz the coconut, roasted chana dal, green chilli, ginger and salt",
            "to": "Blitz the coconut, roasted chana dal, soaked Kashmiri chillies, ginger and salt"
          }
        ]
      }
    },
    {
      "name": "Coriander-Coconut",
      "icon": "🌿",
      "howThisFeels": "Green and herby — a handful of fresh coriander blended through the coconut for a fresher, brighter chutney.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 20, "unit": "g", "name": "fresh coriander" }
          }
        ]
      }
    },
    {
      "name": "Roasted Gram (Hotel-Style)",
      "icon": "🥜",
      "howThisFeels": "Thicker and nuttier — the extra-roasted-gram version tiffin rooms make so it holds its shape on the plate.",
      "delta": {
        "swapIng": [
          {
            "from": "roasted chana dal (or peanuts)",
            "to": { "qty": 40, "unit": "g", "name": "roasted chana dal" }
          }
        ]
      }
    }
  ]
},
{
  "id": "lime-pickle", emoji: "🥒",
  "name": "Lime Pickle",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "India",
  "flavourChips": [
    "Fierce",
    "Salty-sour",
    "Oily"
  ],
  "whenToUse": "finish",
  "heat": 3,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 300,
      "step": 300,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 250,
        "unit": "g",
        "name": "limes (about 6), quartered"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "salt"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "chilli powder"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "mustard seeds, ground"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "fenugreek (methi) seeds, ground"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "turmeric"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "asafoetida (hing)"
      },
      {
        "qty": 120,
        "unit": "ml",
        "name": "mustard or sunflower oil"
      }
    ],
    "method": "The salt does the real work here, not vinegar: pack the quartered limes with the salt and turmeric into a sterilised jar and leave them in a sunny spot for a week to ten days, shaking daily, until the skins soften and turn translucent and the limes sit in their own drawn-out juice. This slow salt-cure is what makes a lime pickle keep for a year. Then heat the oil until it just smokes and cool it a little — smoking-then-cooled mustard oil loses its raw bite — and stir in the ground mustard, fenugreek, chilli and asafoetida. Pour this hot spiced oil over the cured limes, mix well, and cap with a film of oil so nothing sits exposed to air. Mature another two weeks before eating: a young lime pickle is harsh and bitter, a matured one deep and mellow-fierce."
  },
  "pairsWith": [
    "dal & rice",
    "curd rice",
    "parathas",
    "biryani",
    "curry"
  ],
  "aliases": [
    "lime pickle",
    "nimbu ka achar",
    "nimbu achar",
    "lemon pickle"
  ],
  "story": "Indian pickle (achar) is preserved not by vinegar like a Western one, but by salt, chilli, oil and sun — a technique older than refrigeration, built for a hot climate. A properly cured jar of lime pickle keeps for a year on the shelf, mellowing all the while, and a fierce half-teaspoon is meant to wake up an entire plate of plain dal and rice.",
  "howThisFeels": "Soft, translucent limes soaked in fierce red spiced oil — a tiny, salty-sour, mouth-puckering jolt that makes plain rice sing.",
  "versions": [
    {
      "name": "Classic Hot",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Sweet Lime",
      "icon": "🍯",
      "howThisFeels": "Sweet-and-fierce — jaggery folded in to round off the salt-sour bite, gentler on the tongue.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 60, "unit": "g", "name": "jaggery or sugar" }
          }
        ],
        "swapStep": [
          {
            "from": "Pour this hot spiced oil over the cured limes, mix well",
            "to": "Melt the jaggery into the hot spiced oil until syrupy, then pour over the cured limes and mix well"
          }
        ]
      }
    },
    {
      "name": "Instant Lime (No Cure)",
      "icon": "⏱️",
      "howThisFeels": "The cheat's version — soft-cooked limes and spiced oil ready in an afternoon instead of three weeks.",
      "delta": {
        "swapStep": [
          {
            "from": "The salt does the real work here, not vinegar: pack the quartered limes with the salt and turmeric into a sterilised jar and leave them in a sunny spot for a week to ten days, shaking daily, until the skins soften and turn translucent and the limes sit in their own drawn-out juice. This slow salt-cure is what makes a lime pickle keep for a year.",
            "to": "Steam the quartered limes for 10 minutes until the skins are soft, then toss with the salt and turmeric — steaming shortcuts the long salt-cure, though the pickle then keeps weeks rather than a year."
          }
        ]
      }
    }
  ]
},
{
  "id": "green-tomato-chutney", emoji: "🍅",
  "name": "Green Tomato Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "Britain",
  "flavourChips": [
    "Tangy",
    "Savoury",
    "Autumnal"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 400,
      "step": 400,
      "label": "1 large jar"
    },
    "ingredients": [
      {
        "qty": 350,
        "unit": "g",
        "name": "green (unripe) tomatoes, chopped"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "onion, chopped"
      },
      {
        "qty": 60,
        "unit": "g",
        "name": "sugar"
      },
      {
        "qty": 100,
        "unit": "ml",
        "name": "malt or cider vinegar"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "sultanas"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "fresh ginger, grated"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "mustard powder"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "mixed spice"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "This is the classic British answer to the glut of end-of-season tomatoes that never ripened before the frost. Put everything in a wide, heavy pan and bring to a gentle simmer. Now the one rule of a good chutney: cook it low and slow, uncovered, for a full hour or more, stirring more often as it thickens, until it turns dark, glossy and reduced. It is ready when you draw a wooden spoon across the base and it leaves a clear channel that doesn't immediately flood back with vinegar — that 'trail' is how you know the liquid has cooked off and it will set rather than weep in the jar. Pot hot into sterilised jars. Then the hard part: hide it for at least a month, ideally three, because a fresh chutney tastes harshly of raw vinegar and needs time to mellow into something mature and rounded."
  },
  "pairsWith": [
    "cheddar",
    "cold meats",
    "pork pie",
    "ploughman's",
    "sausages"
  ],
  "aliases": [
    "green tomato chutney",
    "ploughman's chutney",
    "british chutney"
  ],
  "story": "The word 'chutney' entered English from Hindi 'chatni' during the Raj, but the British reinvented it into something quite different — a long-cooked, vinegar-preserved relish for the cheeseboard rather than a fresh Indian side. Green tomato chutney is thrift itself: a way to use the hard, unripe tomatoes left clinging to the vine when the growing season runs out.",
  "howThisFeels": "Dark, glossy and mellow-tangy, sweet with sultanas and sharp with malt vinegar — the jar that makes a wedge of cheddar a proper ploughman's.",
  "versions": [
    {
      "name": "Classic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Apple & Raisin",
      "icon": "🍎",
      "howThisFeels": "Sweeter and softer — cooking apple and plump raisins for a mellower, fruitier autumn chutney.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 100, "unit": "g", "name": "cooking apple, diced" }
          }
        ],
        "swapIng": [
          {
            "from": "sultanas",
            "to": { "qty": 60, "unit": "g", "name": "raisins" }
          }
        ]
      }
    },
    {
      "name": "Spiced (with Chilli)",
      "icon": "🌶️",
      "howThisFeels": "A warmer, gutsier version — fresh chilli and extra ginger to lift it beyond the mild cheeseboard classic.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 10, "unit": "g", "name": "fresh chilli, chopped" }
          }
        ],
        "swapIng": [
          {
            "from": "fresh ginger, grated",
            "to": { "qty": 16, "unit": "g", "name": "fresh ginger, grated" }
          }
        ]
      }
    }
  ]
},
{
  "id": "caramelised-onion-chutney", emoji: "🧅",
  "name": "Caramelised Onion Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "Britain & France",
  "flavourChips": [
    "Sweet",
    "Deep",
    "Savoury"
  ],
  "whenToUse": "finish",
  "heat": 0,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 300,
      "step": 300,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 400,
        "unit": "g",
        "name": "red onions, thinly sliced"
      },
      {
        "qty": 20,
        "unit": "ml",
        "name": "olive oil"
      },
      {
        "qty": 60,
        "unit": "g",
        "name": "brown sugar"
      },
      {
        "qty": 60,
        "unit": "ml",
        "name": "balsamic vinegar"
      },
      {
        "qty": 30,
        "unit": "ml",
        "name": "red wine (optional)"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "fresh thyme"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "The whole flavour of this chutney is built on genuinely caramelised onions, which cannot be rushed — the biggest mistake is cranking the heat and browning them fast, which tastes burnt and bitter, not sweet. Cook the sliced onions in the oil over low heat, with a pinch of salt to draw out their water, stirring now and then for a full 25–30 minutes until they collapse to a soft, deep-golden jam. Only now add the sugar, balsamic, wine and thyme and turn the heat up a little; simmer another 15–20 minutes until the liquid reduces to a thick, sticky, glossy syrup that clings to the onions and leaves a trail when you draw a spoon across the pan. Pot hot. It's good within a day but better after a week, and keeps for months."
  },
  "pairsWith": [
    "brie & camembert",
    "burgers",
    "cheese board",
    "steak",
    "sausage rolls"
  ],
  "aliases": [
    "onion chutney",
    "caramelised onion chutney",
    "onion marmalade",
    "red onion chutney",
    "onion confit"
  ],
  "story": "Halfway between an English cheeseboard chutney and a French 'confit d'oignon', this is really just onions coaxed to their sweetest possible self. The trick — low and slow — is the same one behind French onion soup: onions are full of sugar, and patience alone turns their sharpness into deep, jammy caramel with nothing added but time.",
  "howThisFeels": "Sticky, wine-dark strands of onion cooked down to a sweet, savoury jam — the melting spoonful that makes a wedge of brie unforgettable.",
  "versions": [
    {
      "name": "Classic Balsamic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Thyme & Red Wine",
      "icon": "🍷",
      "howThisFeels": "Deeper and more French — a proper glug of red wine and plenty of thyme for a confit-style richness.",
      "delta": {
        "swapIng": [
          {
            "from": "red wine (optional)",
            "to": { "qty": 90, "unit": "ml", "name": "red wine" }
          }
        ],
        "swapStep": [
          {
            "from": "simmer another 15–20 minutes until the liquid reduces",
            "to": "simmer another 20–25 minutes, letting the wine cook right down, until the liquid reduces"
          }
        ]
      }
    },
    {
      "name": "Chilli Onion",
      "icon": "🌶️",
      "howThisFeels": "Sweet-hot — a hit of chilli against the jammy onion, brilliant on a burger.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 6, "unit": "g", "name": "chilli flakes" }
          }
        ]
      }
    }
  ]
},
{
  "id": "rhubarb-ginger-chutney", emoji: "🌱",
  "name": "Rhubarb & Ginger Chutney",
  "type": "chutney",
  "shelf": "chutneys-atchars",
  "region": "Britain (unusual)",
  "flavourChips": [
    "Sharp-sweet",
    "Warming",
    "Unexpected"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 350,
      "step": 350,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "rhubarb, chopped"
      },
      {
        "qty": 70,
        "unit": "g",
        "name": "onion, finely chopped"
      },
      {
        "qty": 80,
        "unit": "g",
        "name": "brown sugar"
      },
      {
        "qty": 80,
        "unit": "ml",
        "name": "cider vinegar"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "stem ginger (or fresh ginger), chopped"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "sultanas"
      },
      {
        "qty": 1,
        "unit": "g",
        "name": "chilli flakes"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Rhubarb is a surprising but brilliant chutney base — it's technically a vegetable, mouth-puckeringly sour, and cooks down fast, so it needs a shorter, gentler simmer than a tomato or mango chutney or it turns to slush. Put everything in a pan and bring to a gentle simmer, then cook 25–35 minutes, stirring, just until the rhubarb has broken down and the mixture is thick, glossy and jammy — stop while a few soft strands still hold their shape. It should taste sharp-sweet with a real warmth of ginger. Pot hot into sterilised jars, and give it two weeks to settle before eating. Unexpected but excellent with sharp cheese, cold pork, or oily fish like mackerel."
  },
  "pairsWith": [
    "mackerel",
    "pork",
    "sharp cheddar",
    "goat's cheese",
    "cold cuts"
  ],
  "aliases": [
    "rhubarb chutney",
    "rhubarb ginger chutney"
  ],
  "story": "A country-kitchen oddity that deserves to be better known: rhubarb's fierce sourness, which usually gets buried under sugar in a crumble, is exactly what makes a great savoury chutney — its acidity does the job vinegar does elsewhere, and ginger is its oldest and most natural partner. It cuts through oily mackerel the way a squeeze of lemon would, only sweeter.",
  "howThisFeels": "Blush-pink and sharp-sweet with a real hum of ginger — the unexpected chutney that cuts clean through oily fish or a slab of sharp cheese.",
  "versions": [
    {
      "name": "Classic Rhubarb & Ginger",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Rhubarb & Date",
      "icon": "🌴",
      "howThisFeels": "Softer and darker — chopped dates melt in for a mellower, treacly sweetness against the sour rhubarb.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 60, "unit": "g", "name": "pitted dates, chopped" }
          }
        ],
        "swapIng": [
          {
            "from": "brown sugar",
            "to": { "qty": 50, "unit": "g", "name": "brown sugar" }
          }
        ]
      }
    },
    {
      "name": "Rhubarb & Star Anise",
      "icon": "🌟",
      "howThisFeels": "Fragrant and grown-up — a whole star anise infuses a gentle liquorice warmth through the pink.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 1, "unit": "", "name": "star anise (whole, removed after cooking)" }
          }
        ]
      }
    }
  ]
},
{
  "id": "tomato-onion-sambal", emoji: "🍅",
  "name": "Tomato & Onion Sambal",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "South Africa · Cape Malay",
  "flavourChips": [
    "Fresh",
    "Sharp",
    "Cooling"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 200,
      "step": 200,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 150,
        "unit": "g",
        "name": "firm tomatoes, diced"
      },
      {
        "qty": 60,
        "unit": "g",
        "name": "onion, finely diced"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "green chilli, chopped"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "fresh coriander (dhania), chopped"
      },
      {
        "qty": 15,
        "unit": "ml",
        "name": "white or brown vinegar"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "sugar"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "The one trick that makes a good tomato sambal is taking the raw fierceness out of the onion, and there are two ways: either rinse the diced onion under cold water and squeeze it dry, or toss it with the salt and vinegar first and let it sit ten minutes to mellow. Use firm tomatoes and dice them small so the sambal stays chunky and fresh rather than turning to a watery pulp — and if the tomatoes are very juicy, tip off some of the seeds and liquid. Mix everything together, taste, and balance the vinegar and sugar so it's sharp but not sour. Serve it cold and fresh the same day; its whole job is to cut through a rich, saucy curry or a plate of braai meat with a clean, bright bite."
  },
  "pairsWith": [
    "curry",
    "biryani",
    "braai meat",
    "bunny chow",
    "roti"
  ],
  "aliases": [
    "tomato sambal",
    "tomato and onion sambal",
    "onion sambal",
    "smoor"
  ],
  "story": "Sambals — small fresh relishes served alongside a main dish — came to the Cape with enslaved cooks from the Indonesian archipelago, where 'sambal' means a chilli-based condiment. At the Cape they softened into these cooling tomato, onion and cucumber sides that are now the fixed companions of every curry and every braai.",
  "howThisFeels": "A cold, sharp tumble of tomato and onion flecked with green chilli and dhania — the clean, fresh bite that cuts a rich curry in half.",
  "versions": [
    {
      "name": "Classic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Cucumber & Tomato",
      "icon": "🥒",
      "howThisFeels": "Cooler still — crisp cucumber folded in for extra crunch and freshness against a fiery curry.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 80, "unit": "g", "name": "cucumber, diced" }
          }
        ]
      }
    },
    {
      "name": "Extra Chilli & Dhania",
      "icon": "🌶️",
      "howThisFeels": "Punchier and greener — double the chilli and a big handful of fresh coriander.",
      "delta": {
        "swapIng": [
          {
            "from": "green chilli, chopped",
            "to": { "qty": 30, "unit": "g", "name": "green chilli, chopped" }
          },
          {
            "from": "fresh coriander (dhania), chopped",
            "to": { "qty": 20, "unit": "g", "name": "fresh coriander (dhania), chopped" }
          }
        ]
      }
    }
  ]
},
{
  "id": "sambal-oelek", emoji: "🌶️",
  "name": "Sambal Oelek",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Indonesia",
  "flavourChips": [
    "Fiery",
    "Pure chilli",
    "Salty-sour"
  ],
  "whenToUse": "mid",
  "heat": 4,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 150,
      "step": 150,
      "label": "1 small jar"
    },
    "ingredients": [
      {
        "qty": 150,
        "unit": "g",
        "name": "red chilli"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "salt"
      },
      {
        "qty": 15,
        "unit": "ml",
        "name": "vinegar"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "sugar"
      }
    ],
    "method": "Sambal oelek is the purest sambal — nothing but chilli, salt and a little acid — and its name comes from the 'ulekan', the stone mortar it's traditionally ground in. That rough grinding matters: pounding (or a quick, coarse blitz) gives it a chunky, seed-flecked texture, not a smooth sauce. For the truest flavour, steam or blanch the chillies for a few minutes first to soften them and take off the raw green edge, then pound with the salt to a rough paste. Work in the vinegar and sugar — lime juice in place of the vinegar gives a brighter, more Southeast Asian edge if you have it. You can use it raw and bright, or fry it in a little oil for a few minutes to deepen and mellow it into a keeping sambal. This is a building block as much as a condiment — a spoonful stirred into stir-fries, noodles and marinades, or dolloped on the side for the brave."
  },
  "pairsWith": [
    "nasi goreng",
    "satay",
    "noodles",
    "fried rice",
    "grilled fish"
  ],
  "aliases": [
    "sambal oelek",
    "sambal ulek",
    "chilli paste",
    "indonesian chilli"
  ],
  "story": "Indonesia has hundreds of sambals, but oelek is the mother of them all — the plain chilli base from which the others are built. Because it's just pounded chilli and salt, it carries the pure, undiluted heat and fruitiness of the chilli itself, which is why cooks reach for it as an ingredient, not only a table sauce.",
  "howThisFeels": "A fierce, seed-flecked scarlet paste of pure pounded chilli — a fingertip's worth wakes up a whole bowl of noodles.",
  "versions": [
    {
      "name": "Classic (Raw)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Cooked (Bajak-Style)",
      "icon": "🍳",
      "howThisFeels": "Darker, sweeter and mellower — fried down with shallot and a little palm sugar into a keeping sambal.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 40, "unit": "g", "name": "shallot, chopped" }
          },
          {
            "item": { "qty": 20, "unit": "ml", "name": "oil" }
          },
          {
            "item": { "qty": 10, "unit": "g", "name": "palm sugar" }
          }
        ],
        "swapStep": [
          {
            "from": "You can use it raw and bright, or fry it in a little oil for a few minutes to deepen and mellow it into a keeping sambal.",
            "to": "Fry the shallot in the oil until soft, add the chilli paste and palm sugar, and cook down 10–15 minutes until dark, jammy and glossy — this is the deeper, sweeter sambal bajak that keeps for weeks."
          }
        ]
      }
    },
    {
      "name": "Garlic (Sambal Bawang)",
      "icon": "🧄",
      "howThisFeels": "Sharper and more savoury — plenty of raw garlic pounded through for a pungent kick.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 20, "unit": "g", "name": "garlic" }
          }
        ]
      }
    }
  ]
},
{
  "id": "sambal-matah", emoji: "🌶️",
  "name": "Sambal Matah",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Indonesia · Bali",
  "flavourChips": [
    "Raw",
    "Zingy",
    "Aromatic"
  ],
  "whenToUse": "finish",
  "heat": 3,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 150,
      "step": 150,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 50,
        "unit": "g",
        "name": "shallots, very thinly sliced"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "lemongrass (tender inner core), finely sliced"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "red chilli, thinly sliced"
      },
      {
        "qty": 6,
        "unit": "g",
        "name": "garlic, thinly sliced"
      },
      {
        "qty": 6,
        "unit": "g",
        "name": "kaffir lime leaf, shredded"
      },
      {
        "qty": 30,
        "unit": "ml",
        "name": "coconut oil"
      },
      {
        "qty": 10,
        "unit": "ml",
        "name": "lime juice"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "'Matah' means raw, and that's the whole character — where most sambals are pounded and cooked, this Balinese one is a fresh, crunchy tangle of thinly-sliced aromatics. The knife work is the dish: slice the shallots, lemongrass, chilli, garlic and lime leaf as finely as you possibly can, because coarse pieces make it harsh and fibrous. The classic method is to warm the coconut oil until just hot, then pour it over the raw sliced aromatics and scrunch it all together with your hands — the warm oil lightly wilts and releases their fragrance without cooking them, so it stays fresh and crunchy. Finish with lime and salt. Serve at once, piled generously over grilled fish or chicken; it doesn't keep, it's meant to be made and eaten fresh."
  },
  "pairsWith": [
    "grilled fish",
    "satay lilit",
    "chicken",
    "rice",
    "seafood"
  ],
  "aliases": [
    "sambal matah",
    "balinese raw sambal",
    "matah"
  ],
  "story": "Sambal matah is Bali's signature raw sambal, built for the island's grilled seafood. Unusually among sambals it's barely spicy by Indonesian standards — its point isn't heat but the intense fresh perfume of lemongrass and kaffir lime, released by nothing more than a splash of warm coconut oil.",
  "howThisFeels": "A crunchy, fragrant tangle of raw shallot and lemongrass just kissed with warm coconut oil — Bali's fresh, citrus-scented answer to a chilli paste.",
  "versions": [
    {
      "name": "Classic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Extra Lemongrass & Lime",
      "icon": "🌿",
      "howThisFeels": "Even more perfumed — double the lemongrass and lime leaf for a heady, citrus-grass hit.",
      "delta": {
        "swapIng": [
          {
            "from": "lemongrass (tender inner core), finely sliced",
            "to": { "qty": 35, "unit": "g", "name": "lemongrass (tender inner core), finely sliced" }
          },
          {
            "from": "kaffir lime leaf, shredded",
            "to": { "qty": 10, "unit": "g", "name": "kaffir lime leaf, shredded" }
          }
        ]
      }
    },
    {
      "name": "With Toasted Shrimp Paste",
      "icon": "🦐",
      "howThisFeels": "Deeper and savoury — a little toasted terasi folded in for the funky, umami depth of a traditional Balinese kitchen.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 5, "unit": "g", "name": "toasted shrimp paste (terasi)" }
          }
        ]
      }
    }
  ]
},
{
  "id": "pol-sambol", emoji: "🥥",
  "name": "Pol Sambol",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Sri Lanka",
  "flavourChips": [
    "Coconut",
    "Fiery",
    "Tangy"
  ],
  "whenToUse": "finish",
  "heat": 3,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 200,
      "step": 200,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 100,
        "unit": "g",
        "name": "fresh grated coconut (or desiccated, soaked in warm water)"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "onion or shallot, finely chopped"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "Kashmiri chilli powder"
      },
      {
        "qty": 10,
        "unit": "ml",
        "name": "lime juice"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "Maldive fish flakes (optional)"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Pol sambol is Sri Lanka's daily bread-and-butter relish, and the secret to a good one is moisture and pounding, not a dry mix. If using desiccated coconut, soak it first so it plumps back up soft and juicy — a dry pol sambol is a sad one. Pound (or pulse) the coconut with the onion, chilli, salt and Maldive fish flakes so the ingredients bruise and release their oils and the whole thing takes on a warm red-orange stain from the chilli. Squeeze in the lime and work it through until it clumps together, moist and vivid. Taste for the classic Sri Lankan balance — hot, salty and sour all at full volume. Eat it fresh, heaped beside rice and curry or, most famously, stuffed into a fresh coconut roti or spread on bread for breakfast."
  },
  "pairsWith": [
    "rice & curry",
    "roti",
    "string hoppers",
    "bread",
    "hoppers"
  ],
  "aliases": [
    "pol sambol",
    "coconut sambol",
    "coconut sambal",
    "sri lankan coconut relish"
  ],
  "story": "Pol sambol (pol means coconut) is on the Sri Lankan table at practically every meal, breakfast included. The traditional funk comes from Maldive fish — dried, smoked tuna shaved into flakes — which gives it a deep savoury backbone; leave it out and it's a perfectly good vegan sambol, add it and it's the real, umami-rich thing.",
  "howThisFeels": "A vivid red-orange mound of coconut pounded with chilli and lime — fierce, tangy and moreish, the relish Sri Lankans eat with everything, even breakfast.",
  "versions": [
    {
      "name": "Classic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Seeni Sambol (Caramelised Onion)",
      "icon": "🧅",
      "howThisFeels": "The sweet cousin — onions cooked low and slow with sugar and tamarind into a dark, sticky, sweet-hot relish.",
      "kcal": null,
      "ingredients": [
        {
          "qty": 200,
          "unit": "g",
          "name": "onions, thinly sliced"
        },
        {
          "qty": 20,
          "unit": "ml",
          "name": "oil"
        },
        {
          "qty": 8,
          "unit": "g",
          "name": "Kashmiri chilli powder"
        },
        {
          "qty": 15,
          "unit": "g",
          "name": "sugar"
        },
        {
          "qty": 10,
          "unit": "g",
          "name": "tamarind pulp"
        },
        {
          "qty": 5,
          "unit": "g",
          "name": "curry leaves"
        },
        {
          "qty": 4,
          "unit": "g",
          "name": "salt"
        }
      ],
      "method": "Seeni sambol ('sugar sambol') is the sweet, jammy relative of pol sambol. Fry the sliced onions slowly in the oil with the curry leaves for 20–25 minutes until deep golden and collapsing — patience here is everything, as with any caramelised onion. Stir in the chilli, sugar, salt and tamarind and cook another 10 minutes until dark, sticky and glossy. It should taste sweet, sour and hot all at once. Keeps well for a week and is brilliant in a bread roll or with hoppers."
    },
    {
      "name": "Extra Hot",
      "icon": "🔥",
      "howThisFeels": "Turned up — extra chilli and a fresh green chilli pounded in for a real Sri Lankan burn.",
      "delta": {
        "swapIng": [
          {
            "from": "Kashmiri chilli powder",
            "to": { "qty": 14, "unit": "g", "name": "Kashmiri chilli powder" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 10, "unit": "g", "name": "green chilli" }
          }
        ]
      }
    }
  ]
},
{
  "id": "pico-de-gallo", emoji: "🍅",
  "name": "Pico de Gallo",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Mexico",
  "flavourChips": [
    "Fresh",
    "Crunchy",
    "Zesty"
  ],
  "whenToUse": "finish",
  "heat": 2,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 250,
      "step": 250,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 200,
        "unit": "g",
        "name": "firm tomatoes, deseeded and diced"
      },
      {
        "qty": 60,
        "unit": "g",
        "name": "onion, finely diced"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "jalapeño or serrano chilli, finely chopped"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "fresh coriander (cilantro), chopped"
      },
      {
        "qty": 20,
        "unit": "ml",
        "name": "lime juice"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Pico de gallo is a chopped salsa, not a blended one — everything stays in small, distinct, crunchy dice, which is exactly what separates it from a jarred sauce. The single most important step is deseeding the tomatoes and, if they're watery, salting the dice and draining them for ten minutes: a wet pico turns to soup and dilutes everything. Rinse the diced onion under cold water if you want to tame its bite. Toss the tomato, onion, chilli and coriander with the lime and salt, and — the part most people skip — let it sit 15–20 minutes before serving so the flavours marry and the raw onion softens. Best within a few hours; it weeps and dulls overnight. Pile it on tacos, grilled meat, eggs, or just scoop it with a chip."
  },
  "pairsWith": [
    "tacos",
    "grilled meat",
    "nachos",
    "eggs",
    "quesadillas"
  ],
  "aliases": [
    "pico de gallo",
    "salsa fresca",
    "salsa cruda",
    "mexican salsa"
  ],
  "story": "'Pico de gallo' means 'rooster's beak' — nobody's quite sure why, though the best guess is that it was once eaten pinched between finger and thumb, a pecking motion like a rooster's peck. Its red, white and green also happen to be the colours of the Mexican flag, which is why it's sometimes called salsa bandera, 'flag salsa'.",
  "howThisFeels": "A bright, crunchy confetti of tomato, onion and lime-soaked chilli — the fresh, chip-scooping salsa that lands on every Mexican table.",
  "versions": [
    {
      "name": "Classic",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Mango Pico",
      "icon": "🥭",
      "howThisFeels": "Sweet-hot and tropical — diced mango against the chilli and lime, brilliant on fish tacos.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 100, "unit": "g", "name": "firm mango, diced" }
          }
        ],
        "swapIng": [
          {
            "from": "firm tomatoes, deseeded and diced",
            "to": { "qty": 120, "unit": "g", "name": "firm tomatoes, deseeded and diced" }
          }
        ]
      }
    },
    {
      "name": "Charred (Salsa Asada)",
      "icon": "🔥",
      "howThisFeels": "Smoky and deeper — the tomatoes, onion and chilli blistered on a hot pan before chopping.",
      "delta": {
        "swapStep": [
          {
            "from": "Toss the tomato, onion, chilli and coriander with the lime and salt",
            "to": "Char the whole tomatoes, onion and chilli on a dry hot pan until blistered and blackened in spots, then chop and toss with the coriander, lime and salt"
          }
        ]
      }
    }
  ]
},
{
  "id": "salsa-verde-tomatillo", emoji: "🌿",
  "name": "Salsa Verde (Tomatillo)",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Mexico",
  "flavourChips": [
    "Tangy",
    "Bright",
    "Green-chilli"
  ],
  "whenToUse": "finish",
  "heat": 2,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 250,
      "step": 250,
      "label": "1 bowl"
    },
    "ingredients": [
      {
        "qty": 300,
        "unit": "g",
        "name": "tomatillos (or green tomatoes + extra lime), husked"
      },
      {
        "qty": 40,
        "unit": "g",
        "name": "onion"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "green chilli (serrano/jalapeño)"
      },
      {
        "qty": 6,
        "unit": "g",
        "name": "garlic"
      },
      {
        "qty": 20,
        "unit": "g",
        "name": "fresh coriander (cilantro)"
      },
      {
        "qty": 10,
        "unit": "ml",
        "name": "lime juice"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "This is the tangy green salsa of Mexico, and its sourness comes from tomatillos — small husked fruit that taste sharp and citrusy, not like a tomato at all (green tomatoes plus extra lime are the nearest substitute). The making decision is raw versus cooked: for a bright, sharp salsa cruda, simply blitz everything raw. For the deeper, mellower salsa verde most cocinas serve, first char the tomatillos, onion, chilli and garlic on a dry hot pan (comal) until blackened and soft — that roasting turns their sourness sweet and smoky. Either way, blitz to a slightly chunky sauce, not a smooth purée, and stir the coriander and lime through at the end so they stay fresh. Season well; tomatillos need salt to sing. Spoon over tacos, enchiladas, eggs or grilled pork."
  },
  "pairsWith": [
    "tacos",
    "enchiladas",
    "carnitas",
    "eggs",
    "grilled pork"
  ],
  "aliases": [
    "salsa verde",
    "tomatillo salsa",
    "green salsa",
    "salsa verde cruda"
  ],
  "story": "Green salsa is one of the oldest foods of the Americas — tomatillos were cultivated by the Aztecs long before the red tomato rose to fame, and the word comes from the Nahuatl 'tomatl'. Its bright acidity is the natural partner to rich, fatty meats like carnitas, which is why it's the default salsa in a taquería's pork corner.",
  "howThisFeels": "A tangy, jade-green sauce, sharp and a little smoky — the citrus-bright salsa that cuts straight through rich, fatty pork.",
  "versions": [
    {
      "name": "Raw (Cruda)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Roasted (Asada)",
      "icon": "🔥",
      "howThisFeels": "Deeper and sweeter — everything charred on a hot pan first for a smoky, mellow green salsa.",
      "delta": {
        "swapStep": [
          {
            "from": "for a bright, sharp salsa cruda, simply blitz everything raw",
            "to": "char the tomatillos, onion, chilli and garlic on a dry hot pan until blackened and soft, then blitz — the roasting is the whole point of this version"
          }
        ]
      }
    },
    {
      "name": "Avocado (Salsa Verde Cremosa)",
      "icon": "🥑",
      "howThisFeels": "Silky and mellow — a whole avocado blended in turns the sharp green salsa into a creamy, pourable dressing.",
      "delta": {
        "addIng": [
          {
            "item": { "qty": 1, "unit": "", "name": "ripe avocado" }
          }
        ],
        "swapStep": [
          {
            "from": "blitz to a slightly chunky sauce, not a smooth purée",
            "to": "blitz with the avocado to a smooth, creamy, pourable sauce"
          }
        ]
      }
    }
  ]
},
{
  "id": "zhoug", emoji: "🌶️",
  "name": "Zhoug",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Yemen · Middle East",
  "flavourChips": [
    "Fiery",
    "Herby",
    "Aromatic"
  ],
  "whenToUse": "finish",
  "heat": 4,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 150,
      "step": 150,
      "label": "1 small jar"
    },
    "ingredients": [
      {
        "qty": 40,
        "unit": "g",
        "name": "fresh coriander (leaves & stalks)"
      },
      {
        "qty": 15,
        "unit": "g",
        "name": "fresh parsley"
      },
      {
        "qty": 30,
        "unit": "g",
        "name": "green chilli"
      },
      {
        "qty": 10,
        "unit": "g",
        "name": "garlic"
      },
      {
        "qty": 3,
        "unit": "g",
        "name": "ground cumin"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "ground cardamom"
      },
      {
        "qty": 60,
        "unit": "ml",
        "name": "olive oil"
      },
      {
        "qty": 10,
        "unit": "ml",
        "name": "lemon juice"
      },
      {
        "qty": 4,
        "unit": "g",
        "name": "salt"
      }
    ],
    "method": "Zhoug is the fiery green hot sauce of Yemen that travelled to Israel and now turns up in every hummus and shawarma. It's really a chilli-charged herb paste, and the two things that make it are a mountain of fresh coriander and the warm spices — cumin and, crucially, cardamom, which gives zhoug its distinctive perfumed edge you won't find in other green chilli sauces. Pound or pulse the herbs, chilli and garlic to a coarse paste — keep it a little rough, not a smooth sauce — then stir in the spices, salt, lemon and enough olive oil to make it spoonable and glossy. Taste: it should be searingly hot, garlicky, and green. A spoonful stirred into soup, spooned over grilled meat, or swirled through hummus lifts the whole plate. Keeps a week under a film of oil."
  },
  "pairsWith": [
    "hummus",
    "shawarma",
    "falafel",
    "grilled meat",
    "soup"
  ],
  "aliases": [
    "zhoug",
    "skhug",
    "s'chug",
    "zhug",
    "yemeni hot sauce"
  ],
  "story": "Zhoug (skhug in Hebrew) is Yemen's national condiment, carried to Israel by Yemenite Jews in the mid-20th century, where it became a staple of the whole region's street food. The tell-tale note is cardamom — a spice Yemen has traded in for over a thousand years — which perfumes the fierce green heat in a way no other chilli sauce does.",
  "howThisFeels": "A fierce, cardamom-scented green paste, all coriander and chilli and garlic — the Yemeni hot sauce that sets a bowl of hummus alight.",
  "versions": [
    {
      "name": "Green (Classic)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Red Zhoug",
      "icon": "🔴",
      "howThisFeels": "Earthier and deeper — made with red chillies and a little tomato instead of the green herbs' brightness.",
      "delta": {
        "swapIng": [
          {
            "from": "green chilli",
            "to": { "qty": 40, "unit": "g", "name": "red chilli" }
          }
        ],
        "addIng": [
          {
            "item": { "qty": 30, "unit": "g", "name": "tomato" }
          }
        ],
        "removeIng": [
          {
            "item": "fresh parsley"
          }
        ]
      }
    },
    {
      "name": "Extra Garlic",
      "icon": "🧄",
      "howThisFeels": "Sharper and more pungent — a double hit of raw garlic for the true Yemeni intensity.",
      "delta": {
        "swapIng": [
          {
            "from": "garlic",
            "to": { "qty": 22, "unit": "g", "name": "garlic" }
          }
        ]
      }
    }
  ]
},
{
  "id": "ajvar", emoji: "🍆",
  "name": "Ajvar",
  "type": "relish",
  "shelf": "sambals-relishes",
  "region": "Balkans (unusual)",
  "flavourChips": [
    "Smoky",
    "Sweet-savoury",
    "Silky"
  ],
  "whenToUse": "finish",
  "heat": 1,
  "makeYourOwn": {
    "yield": {
      "mode": "batch",
      "unit": "g",
      "base": 300,
      "step": 300,
      "label": "1 jar"
    },
    "ingredients": [
      {
        "qty": 400,
        "unit": "g",
        "name": "red peppers (romano/bell)"
      },
      {
        "qty": 100,
        "unit": "g",
        "name": "aubergine (optional, for a softer ajvar)"
      },
      {
        "qty": 8,
        "unit": "g",
        "name": "garlic"
      },
      {
        "qty": 40,
        "unit": "ml",
        "name": "olive or sunflower oil"
      },
      {
        "qty": 15,
        "unit": "ml",
        "name": "red wine vinegar"
      },
      {
        "qty": 5,
        "unit": "g",
        "name": "salt"
      },
      {
        "qty": 2,
        "unit": "g",
        "name": "chilli flakes (optional)"
      }
    ],
    "method": "Ajvar is a Balkan relish that lives or dies on one step: the peppers must be roasted until the skins are properly blackened and blistered, then steamed under a lid or in a bag and peeled — that char is the whole smoky soul of it, and un-roasted peppers make a raw, tinny ajvar. Peel and deseed the roasted peppers (and aubergine, if using, for a softer texture). Chop or pulse them coarse, then — the traditional part — cook the pulp down slowly in the oil for 30–40 minutes, stirring often, until it darkens, thickens and turns glossy and jammy, and the water has cooked off. Stir in the garlic, vinegar and salt near the end. Patience here is everything; a good ajvar is cooked down a long way. Pot hot; it keeps for weeks and, in the Balkans, is made by the vat-load every autumn to see families through winter."
  },
  "pairsWith": [
    "bread",
    "grilled meat",
    "cheese",
    "ćevapi",
    "eggs"
  ],
  "aliases": [
    "ajvar",
    "aivar",
    "roasted pepper relish",
    "balkan pepper relish"
  ],
  "story": "Ajvar is such a fixture across Serbia, Macedonia and the whole Balkans that it's nicknamed 'Serbian caviar' — every family has its own recipe, and 'ajvar days' each autumn, when the red pepper harvest comes in and whole neighbourhoods roast and cook down peppers together, are a genuine social event. The name traces to the same Turkish root as 'caviar'.",
  "howThisFeels": "A silky, brick-red spread of slow-cooked roasted peppers, sweet and deeply smoky — the Balkan 'caviar' you slather on bread by the spoonful.",
  "versions": [
    {
      "name": "Mild (Blagi)",
      "icon": "🏆",
      "default": true
    },
    {
      "name": "Hot (Ljuti)",
      "icon": "🌶️",
      "howThisFeels": "The fiery version — a good handful of hot chillies roasted and cooked down with the peppers.",
      "delta": {
        "swapIng": [
          {
            "from": "chilli flakes (optional)",
            "to": { "qty": 40, "unit": "g", "name": "hot red chillies (roasted with the peppers)" }
          }
        ]
      }
    },
    {
      "name": "Aubergine (Malidžano-Style)",
      "icon": "🍆",
      "howThisFeels": "Softer and creamier — a bigger share of roasted aubergine for a lush, velvety relish.",
      "delta": {
        "swapIng": [
          {
            "from": "aubergine (optional, for a softer ajvar)",
            "to": { "qty": 250, "unit": "g", "name": "aubergine (roasted)" }
          },
          {
            "from": "red peppers (romano/bell)",
            "to": { "qty": 300, "unit": "g", "name": "red peppers (romano/bell)" }
          }
        ]
      }
    }
  ]
}
];

if (typeof window !== "undefined") window.SPICE_DB = SPICE_DB;
if (typeof module !== "undefined" && module.exports) module.exports = SPICE_DB;


// ── TINZA SPICE ROOM — SCREEN (v33) ──────────────────────────────────────────
// State: S.spiceShelf · S.spiceEntry · S.spiceFilter · S.spiceScale (amount or people) · S.spiceHowOpen

var SPICE_SHELVES = [
  {id:"spice-blends",     e:"🌶️", t:"Spice Blends & Masalas", sub:"Garam masala · peri-peri · the real way", b:"#c0501a", bg:"#1d0e05"},
  {id:"sauces",           e:"🥫", t:"Sauces",                 sub:"Hot · herby · pan & savoury",            b:"#b83020", bg:"#1d0807"},
  {id:"chutneys-atchars", e:"🥭", t:"Chutneys & Atchars",     sub:"Fruit · hot atchar · savoury",           b:"#c08020", bg:"#1a1206"},
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

// ── HEAT METER (locked 27 Jun) · field: heat 0–4 · None·Mild·Medium·Hot·Fiery ──
// 4-pip 🌶️ meter. Additive: entries with no `heat` render nothing (untouched).
var SPICE_HEAT = ["None","Mild","Medium","Hot","Fiery"];
var SPICE_HEAT_COLOR = ["#9a8a78","#cBA84c","#e08a2a","#e0562a","#e0431f"];
function heatMeterHTML(level){
  if(level==null) return "";
  level = Math.max(0, Math.min(4, level|0));
  var pips = "";
  for(var i=1;i<=4;i++){
    pips += '<span style="font-size:14px;'+(i<=level?"opacity:1;":"filter:grayscale(1);opacity:0.25;")+'">🌶️</span>';
  }
  return '<div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:12px;">'
    + '<span style="display:inline-flex;gap:2px;">'+pips+'</span>'
    + '<span style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:'+SPICE_HEAT_COLOR[level]+';">'+SPICE_HEAT[level]+'</span></div>';
}

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
  "sauces": ["Meat & Meal Sauces","Chilli Sauces","Condiments","Stocks & Broths"],
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
    if(e.type==="stock" || e.type==="broth") return "Stocks & Broths";
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
  const v = Math.round(n*10)/10;
  const num = (v % 1 === 0) ? String(v) : v.toFixed(1);
  // measured units (tbsp/tsp/pinch/clove/squeeze…) must keep their unit; only
  // serving/portion/bare-count stay a plain number (used by the yield stepper).
  return (unit && !/^(serving|servings|portion|portions|each|piece|pieces|unit|units)$/i.test(unit)) ? (num + ' ' + unit) : num;
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
      <div style="position:relative;height:200px;background:linear-gradient(135deg,#2a1206,#3a1d08 55%,#1d0e05);display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="position:absolute;top:18px;right:18px;font-size:54px;opacity:0.35;">🧂</div>
        <div style="padding:14px 16px;">
          <button class="back-btn" onclick="set({screen:'home'})" style="color:#e0a060;margin-bottom:8px;">← Home</button>
          <h1 style="margin:0;font-size:22px;font-weight:normal;color:#f5e8cc;letter-spacing:1px;">Tinza Spice Room</h1>
          <p style="margin:2px 0 0;font-size:13px;color:#c09060;font-style:italic;">Everything that enhances your food</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div onclick="S.searchPrevScreen='spice';S.searchScope=['spice'];S.searchQuery='';S.searchResults=[];S.screen='search_results';draw();window.scrollTo(0,0);"
        style="padding:9px 14px;background:#161009;border:1px solid #4a2a10;border-radius:10px;color:#b8895a;font-size:13px;cursor:text;margin-bottom:12px;">🔍 Search blends, sauces & condiments…</div>

      ${spiceCartCount()>0?`<button onclick="set({spiceListOpen:true})" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#14180a;border:2px solid #6a8020;border-radius:10px;color:#c8e840;font-size:13px;font-weight:bold;cursor:pointer;margin-bottom:12px;">
        <span>🛒 My Spice Shopping List</span><span style="background:#6a8020;color:#0f0e0c;border-radius:20px;padding:1px 9px;font-size:13px;">${spiceCartCount()}</span>
      </button>`:''}

      <div class="how-it-works" style="margin-bottom:14px;cursor:pointer;" onclick="set({spiceHowOpen:${howOpen?'false':'true'}})">
        <span style="font-size:13px;color:#c08040;">${howOpen?'▲':'▼'} How it works</span>
        ${howOpen?`<div style="font-size:13px;color:#c2a888;line-height:1.6;margin-top:8px;">Pick a shelf, then an entry. Every entry shows its <strong style="color:#c0a060;">flavour</strong>, <strong style="color:#c0a060;">when to add it</strong>, and a <strong style="color:#c0a060;">Make Your Own</strong> recipe. Blends and preserves scale by <strong style="color:#c0a060;">batch</strong> (a small jar, a bottle); fresh sauces and relishes scale by <strong style="color:#c0a060;">people</strong>, just like the braai.</div>`:''}
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${SPICE_SHELVES.map(sh=>{
          const n = spiceEntriesFor(sh.id).length;
          const countTxt = n>0 ? `${n} ${n===1?'entry':'entries'}` : 'coming soon';
          return `<button onclick="set({spiceShelf:'${sh.id}',spiceFilter:null,spiceGroupFilter:null,spiceShown:8})"
            style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;background:#161210;border:1px solid #2a1a10;border-radius:14px;cursor:pointer;text-align:center;min-height:96px;">
            <span style="font-size:24px;margin-bottom:6px;">${sh.e}</span>
            <div style="font-size:16px;color:#f5e8cc;font-weight:bold;margin-bottom:3px;line-height:1.3;">${sh.t}</div>
            <div style="font-size:14px;color:#c0a274;line-height:1.4;margin-bottom:6px;">${sh.sub}</div>
            <div style="font-size:13px;color:${n>0?'#c0915a':'#a88a5e'};letter-spacing:0.5px;">${countTxt}</div>
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

  const pillBase = "padding:6px 12px;border-radius:20px;border:1px solid;font-size:13px;cursor:pointer;white-space:nowrap;";
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
        <div style="font-size:13px;color:#b09060;line-height:1.5;">We're filling this shelf next.</div>
      </div>`
    : visible.map(e=>{
        const w = SPICE_WHENMAP[e.whenToUse] || {};
        const inCart = spiceCart()[e.id] !== undefined;
        const baseAmt = e.makeYourOwn.yield.base;
        // Shared Warm Spice photo card (Rule Zero) — identical to World Kitchen's
        // wkRecipeCard. NO cost chip (Spice has no per-person food cost). The
        // top-left checkbox toggles the EXISTING spice cart (not wkPlanToggle);
        // the card opens through the universal opener like WK, first resetting the
        // batch scale (the old row did spiceScale:null) so each entry opens fresh.
        // 11 Jul — the old note here said "NO cost chip (Spice has no per-person food cost)".
        // True for a batch, but a batch HAS a price: Apricot Jam is R33 per 500g jar. Braai has
        // shown a cost chip since v33 — Spice now matches (sameness). Pro-gated: Free sees no figure.
        const _pro  = (typeof tierAllows==='function') ? tierAllows('pro') : true;
        const _cst  = (typeof costRecipe==='function') ? costRecipe(e.makeYourOwn.ingredients||[], 1) : null;
        const _yd   = e.makeYourOwn.yield || {};
        let   _ctxt = '';
        if(_pro && _cst && _cst.cook > 0){
          _ctxt = (_yd.mode === 'batch')
            ? 'R' + _cst.cook + ' / ' + _yd.base + (_yd.unit ? ' ' + _yd.unit : '')
            : 'R' + Math.round(_cst.cook / (_yd.base || 1)) + ' pp';
        }
        return warmCard({
          name: e.name,
          photoName: e.name,
          emoji: e.emoji || shelf.e || '🧂',
          sub: spiceGroup(e) || shelf.t,
          meta: e.howThisFeels || (w.label ? (w.e+' '+w.label) : ''),
          costText: _ctxt,
          openJs: "S.spiceScale=null;openSpiceRecipe('"+e.id+"')",
          toggleJs: "(function(){var c=Object.assign({},S.spiceCart||{});if(c['"+e.id+"']!==undefined)delete c['"+e.id+"'];else c['"+e.id+"']="+baseAmt+";set({spiceCart:c});})()",
          sel: inCart
        });
      }).join("");

  const countLine = list.length>PAGE
    ? `<div style="font-size:13px;color:#a88a5e;margin-bottom:10px;">Showing ${visible.length} of ${list.length}</div>` : "";
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
        <span>🛒 My Spice Shopping List</span><span style="background:#6a8020;color:#0f0e0c;border-radius:20px;padding:1px 9px;font-size:13px;">${spiceCartCount()}</span>
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
  const chips = (e.flavourChips||[]).slice(0,3).map(c=>`<span style="font-size:13px;color:${SPICE_CHIPCOLOR[c]||'#a08050'};border:1px solid ${SPICE_CHIPCOLOR[c]||'#a08050'};border-radius:20px;padding:4px 12px;">${c}</span>`).join("");
  const heatMeter = heatMeterHTML(e.heat);

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
            <div style="font-size:13px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:4px;">🥄 Make Your Own</div>
            <div style="font-size:22px;font-weight:bold;color:#c8e840;line-height:1;">${spiceFmt(cur, y.unit)}</div>
            <div style="font-size:13px;color:#8aa848;margin-top:3px;">${y.label}${cur>y.base?` · ${Math.round(cur/y.base*10)/10}× batch`:""}</div>
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
            <div style="font-size:13px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:4px;">🥄 Make Your Own</div>
            <div style="font-size:13px;color:#9ab858;">Enough for the table — scales with people</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
            <button onclick="${dec}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button>
            <span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${cur}</span>
            <button onclick="${inc}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button>
          </div>
        </div>
        <div style="font-size:13px;color:#8aa848;margin-top:6px;">${cur} people</div>
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
        <span style="flex:1;font-size:14px;color:#e0d4b8;">${ing.name} <span style="color:#b0a070;font-size:13px;">· ${spiceFmt(pp,ing.unit)} pp</span></span>
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
      <div style="font-size:13px;color:#c0a274;font-style:italic;margin-bottom:10px;">${e.region}</div>

      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${chips}</div>
      ${heatMeter}

      ${w.label?`<div style="display:inline-flex;align-items:center;gap:7px;background:#16100a;border:1px solid ${w.c};border-radius:10px;padding:8px 12px;margin-bottom:14px;">
        <span style="font-size:16px;">${w.e}</span>
        <div><div style="font-size:13px;letter-spacing:1px;color:#b89868;text-transform:uppercase;">When to use</div><div style="font-size:13px;color:${w.c};">${w.label}</div></div>
      </div>`:''}

      ${greenBox}

      <div style="background:#141008;border:1px solid #3a2810;border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
          <div style="font-size:13px;letter-spacing:1.5px;color:#b89868;text-transform:uppercase;">Ingredients</div>
          <div style="font-size:13px;color:#a88a5e;">${isBatch?`for ${spiceFmt(cur,y.unit)}`:`scaled for ${cur} ${cur===1?'person':'people'}`}</div>
        </div>
        ${ingHTML}
      </div>

      <div style="margin-bottom:14px;">
        <div style="font-size:13px;letter-spacing:1.5px;color:#b89868;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${steps.map((s,i)=>`<div style="display:flex;gap:12px;margin-bottom:12px;">
          <div class="step-num" style="background:#2a1808;border:2px solid #c06020;color:#f5c842;">${i+1}</div>
          <div style="flex:1;font-size:14px;color:#e0d4b8;line-height:1.6;padding-top:2px;">${s}</div>
        </div>`).join("")}
      </div>

      ${pairs.length?`<div class="goes-well">
        <div style="font-size:13px;letter-spacing:1.5px;color:#8a8ab0;text-transform:uppercase;margin-bottom:8px;">🍽️ Goes Well With</div>
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
        ${spiceCartCount()>0?`<button onclick="set({spiceListOpen:true})" style="width:100%;padding:11px;border-radius:10px;cursor:pointer;background:transparent;border:1px solid #4a5a20;color:#9ab050;font-size:13px;margin-bottom:10px;">🛒 View Shopping List (${spiceCartCount()})</button>`:''}`;
      })()}


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
         <div style="font-size:13px;color:#b09060;line-height:1.5;">Open any entry and tap <strong style="color:#9ab050;">Add to Shopping List</strong>.</div>
       </div>`
    : order.map(a=>{
        const its = items.filter(i=>i.aisle===a);
        if(!its.length) return "";
        return `<div style="font-size:13px;letter-spacing:1px;color:#b89868;text-transform:uppercase;margin:14px 0 6px;">${a}</div>` +
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
      ${sources.length?`<div style="font-size:13px;color:#c0a274;margin-bottom:4px;">For: ${sources.join(" · ")}</div>`:''}
      ${items.length?`<div style="font-size:13px;color:#b89868;margin-bottom:10px;">✅ Tap items you already have to tick them off · ${remaining} of ${items.length} left to buy</div>`:''}
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

// ── SPICE on the universal opener (16 Jun) — cross-link target: sauces/dressings/dips ──
// Renders any SPICE_DB "make your own" entry through the shared recipePage
// components, reusing spice's own scale (spiceCurScale) + formatter (spiceFmt)
// so a cross-linked sauce looks & scales identically to the Spice-room view.
// (Spice's internal browsing is untouched — this only adds the universal path.)
function spiceRecipeOpts(r){
  if(!r || !r.makeYourOwn) return { name:(r?r.name:'Recipe not found'), backJs:'closeRecipe()', backLabel:'← Back', nav:{ backJs:'closeRecipe()' } };
  r = (typeof applyRecipeVersion==='function') ? applyRecipeVersion(r) : r;   // overlay chosen twist (version) before rendering
  var my = r.makeYourOwn, y = my.yield || { base:1, step:1, unit:'serving', label:'' };
  var base = y.base || 1, step = y.step || 1;
  var scale = (typeof spiceCurScale==='function') ? spiceCurScale(r) : base;
  var isBatch = (y.mode === 'batch');   // 131 of 191 spice cards. They make grams, not people.
  var factor = base ? (scale/base) : 1;
  var fmt = (typeof spiceFmt==='function') ? spiceFmt : function(n,u){ return (Math.round(n*10)/10)+(u||''); };
  var rows = (my.ingredients||[]).map(function(it){
    if(it.qty==null) return ingredientRow(it.name, '<span style="color:#e0d4b8;font-style:italic;">to taste</span>');
    // shared "pp · total" display (§5): per-serving = qty/base, total = qty*factor
    var ppAmt = it.qty/base, totAmt = it.qty*factor;
    // A BATCH has no "per person" — "1g pp" of apricot is meaningless. Only 'serves' gets the pp prefix.
    var amt = (isBatch || scale===1)
      ? fmt(totAmt, it.unit)
      : '<span style="color:#e0d4b8;font-weight:normal;font-size:13px;">'+fmt(ppAmt,it.unit)+' pp · </span>'+fmt(totAmt,it.unit);
    return ingredientRow(it.name, amt);
  }).join('');
  var ingredientsHTML = isBatch ? ingredientsBox(rows, scale, (y.unit||'')) : ingredientsBox(rows, scale);
  var steps = String(my.method||'').split(/\.\s+/).map(function(x){ return x.trim(); }).filter(Boolean);
  var stepsHTML = steps.map(function(s,i){
    var txt = s + (s.slice(-1).match(/[.!?]/)?'':'.');
    var sec = (typeof parseStepTime==='function') ? parseStepTime(txt) : 0;
    var tl  = sec ? ('⏱ ' + ((typeof fmtTimerLabel==='function') ? fmtTimerLabel(sec) : (Math.round(sec/60)+' min'))) : '';
    return methodStep(i, txt, tl);
  }).join('');
  // Start Cooking → shared generic cook view (core.js), same as other sections
  var methodHTML = methodBox(stepsHTML, steps.length ? "set({cookRecipe:{section:'spice',id:'"+r.id+"'},cookStep:0});window.scrollTo(0,0);" : '');
  var _u = (y.unit||'').trim();
  var _ul = _u ? ((_u==='serving'||_u==='portion') ? (_u + (scale===1?'':'s')) : _u) : 'servings';
  // 11 Jul — qtyBox has always had an `info` slot ("cost · kcal"). Spice never passed one,
  // so the Spice Room has NEVER shown a price, while Braai has since v33. Same shared function.
  // Free tier gets the Pro lock, never a figure.
  var _isPro = (typeof tierAllows==='function') ? tierAllows('pro') : true;
  var _cost  = (typeof costRecipe==='function') ? costRecipe(my.ingredients||[], factor) : null;
  var _info  = '';
  if(_cost && _cost.cook > 0){
    _info = costLine({ label:'💰 Food cost', html:'💰 Food cost: <b style="color:var(--green);">R' + _cost.cook + '</b>'
         + (isBatch ? (' for ' + scale + ' ' + _ul)
                    : (' · <b style="color:var(--green);">R' + Math.round(_cost.cook/(scale||1)) + '</b> pp')) });
  }
  var qtyHTML = qtyBox({
    label:'Make Your Own', total: scale + ' ' + _ul, n:scale, info:_info,
    decJs:"set({spiceScale:Math.max(" + step + "," + (scale - step) + ")})",
    incJs:"set({spiceScale:" + (scale + step) + "})"
  });
  var storyBox = r.story ? recipeBox('📖 Good to know', '<div style="font-size:15px;color:#f0ebe1;line-height:1.6;">'+r.story+'</div>') : '';
  return {
    photoName:r.name, photoEmoji:(r.emoji || '🥫'),   // 11 Jul: was hardcoded for all 191 cards
    backJs:'closeRecipe()', backLabel:'← Back',
    name:r.name,
    sub: r.howThisFeels ? '<span style="font-style:italic;">'+r.howThisFeels+'</span>' : '',
    meta:{ origin:r.region },
    versionHTML: (typeof versionStripHTML==='function') ? versionStripHTML(r, 'var(--accent)') : '',
    qtyHTML:qtyHTML, ingredientsHTML:ingredientsHTML, methodHTML:methodHTML,
    goesWith: (r.pairsWith||[]).slice(0,6),
    extrasHTML: storyBox,
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" }
  };
}
function openSpiceRecipe(id){ if(typeof openRecipe==='function') openRecipe('spice', id); }
if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.spice = function(id){ return spiceDB().find(function(e){ return e && e.id===id; }) || null; };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.spice = function(item, recipe, vr){ return spiceRecipeOpts(item); };
}
