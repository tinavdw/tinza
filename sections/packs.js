/* ============================================================
   TINZA — PACK_DB  (packs.js)
   The "buy number" data: how each ingredient is SOLD.

   Two-cost model (Standard §6.3):
     · COOK number = exact recipe amount (drives the meal cost).
     · BUY  number = what goes in the trolley (drives the shop total).

   THREE buy-types:
     1. BY WEIGHT — meat, fish, loose veg/fruit. NO entry here at all;
        no pack ⇒ buy = cook (you buy the grams you need).
     2. BY PACK  — sold in fixed sizes. Listed below with `size`
        (grams for solids, millilitres for liquids). costRecipe rounds
        the need UP to the fewest whole packs.
     3. BY EACH  — countable with a size ladder (eggs). Listed with
        `each:true` + `ladder:[…]`; rounds up to the next rung.

   PRICE: intentionally OMITTED. PRICE_DB's per-kg figures were derived
   FROM real pack prices, so  packs × (size/1000 × per-kg)  reproduces the
   shelf price exactly. Only add `price:` to override a verified pack price.
   ============================================================ */
const PACK_DB = {

  // ── BY PACK · BAKING & FLOURS — 1 kg bag ──
  "cake flour":        { size: 1000 },
  "wheat flour":       { size: 1000 },
  "wholewheat flour":  { size: 1000 },
  "rye flour":         { size: 1000 },
  "flour":             { size: 1000 },
  "self raising flour":{ size: 1000 },
  "white sugar":       { size: 1000 },
  "brown sugar":       { size: 1000 },
  "sugar":             { size: 1000 },
  "icing sugar":       { size: 500 },
  "castor sugar":      { size: 500 },
  "cornflour":         { size: 250 },
  "almond flour":      { size: 300 },
  "semolina":          { size: 500 },
  "baking powder":     { size: 200 },
  "bicarbonate of soda":{ size: 500 },
  "cream of tartar":   { size: 100 },
  "vanilla essence":   { size: 100 },   // ml
  "coconut fine":      { size: 200 },
  "desiccated coconut":{ size: 200 },

  // ── BY PACK · STARCHES & GRAINS ──
  "maize meal":        { size: 1000 },
  "mieliepap":         { size: 1000 },
  "pap":               { size: 1000 },
  "white rice":        { size: 1000 },
  "rice":              { size: 1000 },
  "brown rice":        { size: 1000 },
  "basmati rice":      { size: 1000 },
  "jasmine rice":      { size: 1000 },
  "arborio rice":      { size: 500 },
  "samp":              { size: 1000 },
  "samp and beans":    { size: 500 },
  "pearl wheat":       { size: 500 },
  "oats":              { size: 1000 },
  "muesli":            { size: 750 },
  "polenta":           { size: 500 },
  "pasta":             { size: 500 },
  "spaghetti":         { size: 500 },
  "macaroni":          { size: 500 },
  "couscous":          { size: 500 },
  "lentils":           { size: 500 },
  "red lentils":       { size: 500 },
  "brown lentils":     { size: 500 },
  "chickpeas":         { size: 500 },
  "red kidney beans":  { size: 500 },

  // ── BY PACK · DAIRY ──
  "milk":              { size: 1000 },  // 1 L
  "cream":             { size: 250 },   // ml
  "butter":            { size: 500 },
  "yoghurt":           { size: 1000 },
  "cream cheese":      { size: 250 },
  "feta":              { size: 200 },
  "feta cheese":       { size: 200 },
  "mozzarella":        { size: 500 },
  "cheddar cheese":    { size: 800 },
  "gouda cheese":      { size: 800 },
  "cheddar":           { size: 800 },

  // ── BY PACK · OILS, VINEGARS & SAUCES (ml) ──
  "sunflower oil":     { size: 750 },
  "olive oil":         { size: 500 },
  "coconut oil":       { size: 375 },
  "white vinegar":     { size: 750 },
  "balsamic vinegar":  { size: 500 },
  "apple cider vinegar":{ size: 375 },
  "soy sauce":         { size: 250 },
  "worcestershire sauce":{ size: 250 },
  "peri peri sauce":   { size: 250 },
  "oyster sauce":      { size: 250 },
  "tomato sauce":      { size: 700 },
  "mustard":           { size: 500 },
  "mayonnaise":        { size: 750 },

  // ── BY PACK · TINS & JARS (per tin/jar) ──
  "tinned tomatoes":   { size: 410 },
  "canned tomatoes":   { size: 410 },
  "chopped tomatoes":  { size: 410 },
  "tomato puree":      { size: 410 },
  "tomato paste":      { size: 115 },
  "coconut milk":      { size: 400 },
  "coconut cream":     { size: 400 },
  "condensed milk":    { size: 385 },
  "baked beans":       { size: 410 },
  "sugar beans":       { size: 410 },
  "butter beans":      { size: 400 },
  "chakalaka":         { size: 410 },
  "tinned corn":       { size: 410 },
  "corned beef":       { size: 300 },
  "chutney":           { size: 470 },
  "apricot jam":       { size: 900 },
  "honey":             { size: 500 },
  "golden syrup":      { size: 300 },
  "peanut butter":     { size: 400 },

  // ── FLEXIBLE · loose for small amounts, bag once it's worth it ──
  //    `looseUnder` grams ⇒ shown loose (buy exact). At/above ⇒ round to `bag`.
  //    (Veg you can buy either way: a handful loose, or a 1 kg packet.)
  "potato":         { flex: true, bag: 1000, looseUnder: 800 },
  "potatoes":       { flex: true, bag: 1000, looseUnder: 800 },
  "sweet potato":   { flex: true, bag: 1000, looseUnder: 800 },
  "sweet potatoes": { flex: true, bag: 1000, looseUnder: 800 },
  "onion":          { flex: true, bag: 1000, looseUnder: 800 },
  "onions":         { flex: true, bag: 1000, looseUnder: 800 },
  "red onion":      { flex: true, bag: 1000, looseUnder: 800 },
  "tomato":         { flex: true, bag: 1000, looseUnder: 800 },
  "tomatoes":       { flex: true, bag: 1000, looseUnder: 800 },
  // (butternut, pumpkin, garlic, chilli stay BY WEIGHT — no entry — bought
  //  loose or cut per kg. Peppers can get a 2-pack rule later if wanted.)

  // ── BY EACH · LADDER (rounds up to the next tray you can buy) ──
  "eggs":              { each: true, ladder: [6, 12, 18, 24] },
  "eggs_each":         { each: true, ladder: [6, 12, 18, 24] }

};
