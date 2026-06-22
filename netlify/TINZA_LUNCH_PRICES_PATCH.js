// ════════════════════════════════════════════════════════════════════
//  TINZA — LUNCH PRICE PATCH (proposed) · 22 Jun 2026
//  These buy-names appear in LIGHTLUNCH recipes but are NOT yet in PRICE_DB.
//  Values below are MY ESTIMATES (Pretoria retail, 2026) — replace with your
//  Tina-sourced numbers, then paste these lines into PRICE_DB in prices.js.
//  R/kg unless the key ends _each (then it's per-count, like your pita_each).
//  ⚠ Nothing here blocks shipping salads — each recipe carries its own costPP.
//     These only sharpen the shopping-list "shop spend" total.
// ════════════════════════════════════════════════════════════════════

// ── needed by SALADS bucket (this batch) ──
"tofu": 110,                 // EST — firm block ~R45/400g
"soba noodles": 120,         // EST
"falafel": 120,              // EST — ready-made / from mix
"chevin goat cheese": 550,   // EST — ~R55/100g log
"peaches": 40,               // EST — seasonal
"ciabatta_each": 30,         // EST — per loaf (or substitute existing "sourdough")
"corn chips": 200,           // EST — ~R40/200g
"sour cream": 160,           // EST — ~R40/250ml
"taco spice": 150,           // EST — seasoning sachet
"peri-peri sauce": 60,       // EST

// ── needed by LATER buckets (Soups / Sandwiches / Quick) — add now, confirm once ──
"edamame": 120,              // EST — frozen
"gnocchi": 140,              // EST
"ramen noodles": 90,         // EST
"rice noodles": 90,          // EST
"quinoa": 180,               // EST
"miso": 200,                 // EST — paste
"sriracha": 80,              // EST
"dijon mustard": 120,        // EST
"naan_each": 12,             // EST — per piece
"sun-dried tomatoes": 250,   // EST
"kimchi": 120,               // EST
"swiss cheese": 160,         // EST
"pastrami": 250,             // EST
"brioche_each": 8,           // EST — per roll
"rye bread_each": 35,        // EST — per loaf
"lemongrass": 120,           // EST
"red curry paste": 150,      // EST
"pak choi": 60,              // EST
"beansprouts": 40,           // EST
"pesto": 360,                // EST — basil pesto ~R45/125g

// Variants that ALREADY price under another key (no add needed, just FYI):
//   kalamata olives / black olives → "olives"      pearl barley → "barley"
//   baby potatoes → "potatoes"     smoked paprika → "paprika"
//   large eggs → "eggs"            streaky bacon → "bacon streaky"
//   lime → "lime_each"             cos lettuce → "lettuce"

// ── added for SOUPS batch (Batch 2) ──
"vegetable stock": 15,       // EST — from cubes, per-litre equiv
"split peas": 30,            // EST
"black beans": 40,           // EST — dried/tinned
"egg noodles": 60,           // EST
// (chicken broth, gammon, barley, butter beans, gruyere cheese, celery already priced ✓)

// ── added for SANDWICHES batch (Batch 3) ──
"atchar": 60,                // EST — mango atchar
"slap chips": 30,            // EST — frozen chips
"bbq sauce": 50,             // EST
// (ciabatta, pastrami, swiss cheese, falafel already listed above; brown bread,
//  hot dog rolls, hamburger rolls, baguette, tortillas, pita, boerewors,
//  corned beef, sauerkraut, gruyere, gherkins, chutney, ham, polony-as-option ✓)

// ── added for HEALTH HUB salads (Batch 6 → health.js) ──
"dried cranberries": 150,    // EST
"sunflower seeds": 90,       // EST
// (edamame, quinoa, pumpkin seeds, almonds, walnuts, beetroot, brown rice already covered)
