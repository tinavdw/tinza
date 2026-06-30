/* ============================================================
   TINZA — PACK_DB  (packs.js)
   How each ingredient is SOLD → the "buy number" (Standard §6.3).

   ONE RULE: round the recipe's need UP to the next real pack.

   Shapes:
     · { ladder:[...] }        sold in several sizes — pick the smallest
                               rung that covers the need; past the top rung,
                               buy whole multiples of the top rung.
     · { size: N }             one standard pack (grams for solids, ml liquids).
     · { each:true, ladder }   countable tray ladder (eggs).
     · loosable:true           a money-saving "buy loose" tip may show for
                               small amounts (fresh veg you can also buy loose).
     · NO ENTRY                bought by weight — meat, fish, butternut,
                               pumpkin, garlic, chilli. Buy the kg you need.

   PRICE is omitted on purpose: PRICE_DB's per-kg was derived FROM pack
   prices, so size × per-kg reproduces the shelf price. Add `price:` only
   to override a verified pack price.

   NOTE: every total is an ESTIMATE — standard packs + average prices.
   Specials and your own shop will move it. The shopping list says so.
   ============================================================ */
const PACK_DB = {

  // ── LADDER · BIG STAPLES (1 / 2 / 5 / 10 kg — 2 kg is usually best value) ──
  "cake flour":   { ladder: [1000, 2000, 5000, 10000] },
  "wheat flour":  { ladder: [1000, 2000, 5000, 10000] },
  "flour":        { ladder: [1000, 2000, 5000, 10000] },
  "white sugar":  { ladder: [1000, 2000, 5000, 10000] },
  "brown sugar":  { ladder: [1000, 2000, 5000, 10000] },
  "sugar":        { ladder: [1000, 2000, 5000, 10000] },
  "maize meal":   { ladder: [1000, 2000, 5000, 10000] },
  "mieliepap":    { ladder: [1000, 2000, 5000, 10000] },
  "pap":          { ladder: [1000, 2000, 5000, 10000] },
  "white rice":   { ladder: [1000, 2000, 5000, 10000] },
  "rice":         { ladder: [1000, 2000, 5000, 10000] },
  "brown rice":   { ladder: [1000, 2000, 5000] },

  // ── LADDER · BAGGED FRESH VEG (1 / 2 kg — loose tip allowed) ──
  "potato":         { ladder: [1000, 2000], loosable: true },
  "potatoes":       { ladder: [1000, 2000], loosable: true },
  "sweet potato":   { ladder: [1000, 2000], loosable: true },
  "sweet potatoes": { ladder: [1000, 2000], loosable: true },
  "onion":          { ladder: [1000, 2000], loosable: true },
  "onions":         { ladder: [1000, 2000], loosable: true },
  "red onion":      { ladder: [1000, 2000], loosable: true },
  "tomato":         { ladder: [1000, 2000], loosable: true },
  "tomatoes":       { ladder: [1000, 2000], loosable: true },

  // ── LADDER · MILK (1 L / 2 L) ──
  "milk":           { ladder: [1000, 2000] },

  // ── BY PACK · BAKING & SMALLER STAPLES ──
  "wholewheat flour":  { size: 1000 },
  "rye flour":         { size: 1000 },
  "self raising flour":{ size: 1000 },
  "icing sugar":       { size: 500 },
  "castor sugar":      { size: 500 },
  "cornflour":         { size: 250 },
  "instant mash":      { size: 104, price: 27.99 },  // 1 Jul · Smash Garlic Butter 104g R27.99
  "almond flour":      { size: 300 },
  "semolina":          { size: 500 },
  "baking powder":     { size: 200 },
  "bicarbonate of soda":{ size: 500 },
  "cream of tartar":   { size: 100 },
  "vanilla essence":   { size: 100 },
  "coconut fine":      { size: 200 },
  "desiccated coconut":{ size: 200 },
  "basmati rice":      { size: 2000 },
  "jasmine rice":      { size: 2000 },
  "arborio rice":      { size: 500 },
  "samp":              { ladder: [1000, 2000] },
  "samp and beans":    { size: 500 },
  "pearl wheat":       { size: 500 },
  "oats":              { ladder: [1000, 2000] },
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
  "cream":             { size: 250 },
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
  "sunflower oil":     { ladder: [750, 2000, 5000] },
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
  "creamed corn":      { size: 410 },
  "cream style corn":  { size: 410 },
  "red curry paste":   { size: 110 },
  "corned beef":       { size: 300 },
  "chutney":           { size: 470 },
  "apricot jam":       { size: 900 },
  "honey":             { size: 500 },
  "golden syrup":      { size: 300 },
  "peanut butter":     { size: 400 },

  // ── BY EACH · TRAY LADDER ──
  "eggs":              { each: true, ladder: [6, 12, 18, 24] },
  "eggs_each":         { each: true, ladder: [6, 12, 18, 24] },

  // ── BY EACH · BREAD / WRAPS / BUNS (round up to a whole loaf/pack for shop-spend) ──
  "white bread":       { each: true, ladder: [22] },   // 700g loaf ≈ 22 slices
  "brown bread":       { each: true, ladder: [22] },
  "wholewheat bread":  { each: true, ladder: [22] },
  "rye bread":         { each: true, ladder: [18] },
  "sourdough bread":   { each: true, ladder: [14] },
  "thick white bread": { each: true, ladder: [16] },
  "tortillas":         { each: true, ladder: [8] },
  "tortilla wrap":     { each: true, ladder: [8] },
  "burger bun":        { each: true, ladder: [6] },
  "hamburger roll":    { each: true, ladder: [6] },

  // ── BY PACK · UNSLICED LOAF (hollowed-loaf dishes; round up to a whole R15 loaf) ──
  "white loaf":        { size: 700, price: 15 },

  // ── BY EACH · SMOKED VIENNAS / HOT DOG SAUSAGES (1kg pack = 24, standard-size; cocktail viennas differ ~60-70) ──
  "hot dog sausages":  { each: true, ladder: [24] },
  "smoked viennas":    { each: true, ladder: [24] }

};
