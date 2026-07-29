const PRICE_ASOF = 'July 2026';   // pricing as-of date — single source; referenced by meals.js + health.js cost footers
const PRICE_BASIS = 'Checkers, mid-shelf, national';
// ⚖️ §30.4 (Tina, 29 Jul 2026) — THE BASIS WAS UNDECLARED UNTIL NOW AND IT IS LOAD-BEARING.
// Nearly every key here was sourced at ONE retailer. That is a FEATURE for recipe-to-recipe
// comparison (one basis = comparable numbers) and a known bias in absolute rands (a shopper at a
// cheaper chain pays less than the app says). It only stays honest if it stays consistent:
// ⛔ RE-PRICE AT THE SAME RETAILER. An anchor walk done somewhere else injects a step-change that
// looks exactly like inflation and is not. If the basis ever changes, change it HERE, in one place,
// and re-price the whole anchor set in the same pass — never key by key.
// ⚠️ This constant is for the code and the audit trail. It must NOT surface as a retailer name in
// app prose (no-retailer-names law). Display wording is "typical national supermarket prices".
// ⚖️ §30.5 — THE HIGH BIAS IS DELIBERATE. DO NOT "IMPROVE" IT BY AVERAGING RETAILERS.
// A dearer basis is the CORRECT direction of error for a budgeting tool: a plan that comes in under
// is a good surprise, one that comes in over is a broken promise. Averaging across chains would
// look more accurate, would read better in a spec, and would silently delete that margin — leaving
// every shopper at a dearer store short. ⛔ Anyone tempted to "fix" this: it is not a bug.
const PRICE_DB = {
  // ── WK pricing pass (1 Jul, Tina-sourced) — duck/trout priced (buyable in SA), count-items ──
  "duck": 200,                    // whole duck R160–250/kg → honest mid
  "trout": 400,                   // whole gutted R360–425/kg → honest mid
  "garlic clove_each": 0.3, "garlic cloves_each": 0.3,   // ~5g clove of R60/kg garlic
  "bread roll_each": 3.5, "bread rolls_each": 3.5,       // 6-pack ~R20
  "pita bread_each": 4, "pita breads_each": 4,   // MF137 · dead "pita_each": 4 deleted — L487 R7.70 (R46/6-pack, Tina's own measure) always won
  "bay leaf_each": 0.15, "bay leaves_each": 0.15,        // negligible aromatic
  "bread slice_each": 1, "bread slices_each": 1,         // loaf ~R18 / 18 slices
  "chilli_each": 1, "chillies_each": 1, "chillis_each": 1,
  "green chilli_each": 1, "green chillies_each": 1, "small chilli_each": 1,
  // ── WK tail (1 Jul, Tina-sourced) — specialty spices/items, real prices not guesses ──
  "mitmita": 240,                 // Ethiopian chili R150–240/kg
  "berbere": 200, "berbere sauce base": 200,
  "fenugreek": 300, "fenugreek seeds": 300,   // R15–50/100g
  "pine resin": 1250,             // R75–125 per 50–100g
  "wafer shell_each": 4, "wafer shells_each": 4,   // ~R44 / 12-pack
  // ── World Kitchen exotic prices (16 Jun, Tina-sourced) ──
  "dried kapenta soaked": 350,
  "dried mopane worms": 450,
  "pumpkin seeds": 150,
  "unsliced white loaf_each": 15,   // per loaf (count) — _each so priceOf counts it, not R/kg
  "chorizo": 350,
  "kale": 87,
  "waterblommetjies": 95,
  "cleaned waterblommetjies": 95,
  "kithul treacle": 98,
  "double cream yoghurt": 47, "double cream plain yoghurt": 47,   // R47/1kg (Tina 11 Jul)
  "teff flour": 96,
  "dried hibiscus flowers": 1400,
  "basa": 160,
  "smoked pork neck": 140,
  "gammon": 200,
  // ── added 13 Jun (Tina source list 3) ──
  "raisins": 168,
  "prunes": 200,
  "sultanas": 120,
  "jaggery": 100,
  "durban masala": 350,
  "curry leaves": 650,
  "sorghum meal": 35,
  "paneer": 250,
  "cottage cheese": 172,
  "buttermilk": 46,
  "sesame seeds": 244,
  "beer": 38,
  "herring": 308,
  "pickles": 76,
  "sauerkraut": 110,
  // ── added 13 Jun (Tina source list 2) ──
  "harissa": 480,
  "ghee": 200,
  "ras el hanout": 778,
  "red wine": 45,
  "leek": 100,
  "lime_each": 8.75,
  // ── added from Tina price lists r1-3 (auto-generated) ──
  "yeast": 90,
  "white wine": 47,
  "whisky": 293,              // R220/750ml → R293/L (Tina)
  "sherry": 93,               // R70/750ml → R93/L (Tina)
  "fish sauce": 200,
  "sesame oil": 600,
  "chilli oil": 490,           // R48.95/100ml (Woolworths) and R125/250ml (Banhoek) both → ~R490/L.
                               // Tina-sourced 29 Jul 2026. ⚠️ FIXES A LIVE WRONG PRICE, not a gap:
                               // without this key "chilli oil" fell through to `chilli` R80/kg — a
                               // FRESH CHILLI price, ~6x under, live in 24 wk_china.js mentions.

  "pine nuts": 1175,
  "sweetcorn": 59,
  "peas": 61,
  "almonds": 330,
  "macadamia nuts": 450,      // R45/100g
  "hazelnuts": 228,           // R228/kg
  "cashew nuts": 430,         // R43/100g (Tina) — same 100g-pack shape as walnuts/almonds
  "peanuts": 128,             // R32/250g (Tina)
  "dried apricots": 400,      // R40/100g (Tina)
  "ginger-garlic paste": 140, // store jar ~R40/290g — overrides the garlic-match R280
  "grape juice": 30,          // R30/L
  "guinea fowl": 305,         // game bird (Tina)
  "squid ink": 4375,          // Spain (Tina)
  "manchego cheese": 1200,    // Spain (Tina)
  "tiger nuts": 400,          // Spain — horchata (Tina)
  "chickpea flour": 114,
  "coriander": 650,
  "dill": 650,
  "thyme": 650,
  "rosemary": 650,
  "basil": 650,
  "mint": 650,
  "bay leaves": 2444,
  "cardamom": 3083,
  "cloves": 1022,
  "coconut flakes": 230,
  "pecan nuts": 530,
  // ── DASHI — PER LITRE OF MADE-UP DASHI, 29 Jul 2026 (Tina-sourced) ──
  // §29.1/29.2: a real bought product fills the slot (instant hon dashi granules), so it
  // gets a key, priced as the STORE route. It follows the "stock" precedent immediately
  // below, and for the identical reason: every Japan record writes dashi in ML
  // ("300ml dashi"), and wkPriceLookup costs ml as (qty/1000) x price. A per-KG GRANULE
  // price here would repeat the exact bug the stock comment records - 300ml of miso-soup
  // dashi would cost R570 instead of R4.
  // ARITHMETIC: retail 40g pack R76 = R1.90/g. Ajinomoto's on-pack dose is 4g per 600ml
  // = 6.67 g/L. 6.67 x R1.90 = R12.67/L -> R13.
  // ⚠️ JUDGEMENT CALL, ONE WORD TO OVERRULE: bulk packs (R120/500g, R240/1kg - both
  //    R0.24/g) would give R1.60/L, which is CHEAPER THAN PLAIN STOCK R8 and is not what
  //    a home cook buys. The 40g pack is the honest store route per 29.2.
  // ⚠️ OMNIVORE (§29.3). Hon dashi carries bonito. The diet tagger must read "dashi" as
  //    animal and "kombu and shiitake dashi" as NOT, without substring-matching between them.
  "dashi": 13,              // per L made-up - NOT the granule price
  "stock": 8,               // LIQUID stock (per L) — was 170 (powder price) which over-priced 68+ recipes using "<ml> stock"
  "chilli": 80,
  // ── BEEF (adjusted per roadmap) ──
  "beef rump": 225,           // Roadmap: R225 (butchery R200)
  "beef fillet": 380,         // Roadmap: R380 (matches butchery)
  "beef t-bone": 290,         // Roadmap: R290 (butchery R140)
  "beef tbone": 290,
  "tbone steak": 290,
  "t-bone steak": 290,
  "beef chuck": 130,
  "beef brisket": 130,
  "brisket": 130,             // bare key so "Brisket" lines match
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

  // ── LAMB (SIGNED 12 Jul 2026 · TINZA_LAMB_SIGNED.md · RECONCILE, don't add) ──
  "lamb loin chops": 255,     // src:online when:2026-07 conf:online
  "lamb rib chops": 255,      // src:online when:2026-07 conf:online  (rack cutlets, premium — keep)
  "lamb braai chops": 195,    // src:PnP when:2026-07 conf:shelf  (PnP Bulk Lamb Braai Chops R194.99)
  "lamb shoulder chops": 220, // src:online when:2026-07 conf:online  (braai default when a recipe just says "lamb chops")
  "lamb riblets": 205,        // src:online when:2026-07 conf:online  (braai belly ribs)
  "leg of lamb": 205,         // src:online when:2026-07 conf:online
  "butterflied leg of lamb": 205, // src:online when:2026-07 conf:online  (same meat as leg)
  "lamb neck": 170,           // src:online when:2026-07 conf:online
  "lamb mince": 215,          // src:Woolworths/butchery survey when:2026-07 conf:online  (ground — NOT stew; R200 was a beef-mince-under)
  "lamb shank": 180,          // src:online when:2026-07 conf:online
  "lamb potjiekos": 150,      // src:Shoprite/PnP when:2026-07 conf:shelf range:130-170  (forequarter MIX, not neck)
  "lamb knuckles": 200,       // src:online when:2026-07 conf:online  (mid premium band R169-235)
  "lamb rump": 310,           // src:online when:2026-07 conf:online  (steak)
  "mutton": 180,              // src:online when:2026-07 conf:online  (separate animal-age)
  // DELETED & reconciled: "lamb rib" R220 (ambiguous rack/riblets) · "lamb roast" R190 (a method, not a product). Both are now aliases → core.js.

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
  // MF137 · dead "pork belly": 120 deleted — the later R150 always won silently.
  // R150 ruled 22 Jul: SA shelf R129.99 (PnP) to R186.99 (Woolworths), honest middle.
  "pork mince": 125,
  "pork bangers": 110,
  "pork braai chops": 100,
  "spare ribs": 100,
  "pork rashers": 125,
  "bacon streaky": 250,       // R50/200g → R250/kg
  "bacon shoulder": 250,      // R50/200g → R250/kg
  "bacon": 250,
  "viennas": 134,             // R47/350g → R134/kg (cocktail viennas, processed/boiled)
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
  "chicken necks": 35,        // cheap offal — floor recipes (2 Jul)
  "chicken giblets": 42,      // cheap offal — floor recipes (2 Jul)
  "chicken gizzards": 48,     // cheap offal — floor recipes (2 Jul)
  "chicken": 90,

  // ── SEAFOOD ──
  "hake fillet": 257,         // R154/600g → ~R257/kg
  "hake": 180,                // MF28 R3: reconciled 257→180 (frozen fillet, what SA cooks buy; R257 was v20, no provenance, +43% over-pricing inflated the green number). VALUE-reconciled not aliased so the ~8 "…→hake" aliases (cod/white fish/carp…) don't cascade to null. src:SeaHarvest/I&J when:2026-07 conf:shelf

  "prawn meat": 350,          // R140/400g → R350/kg
  "prawns": 350,
  "mussels": 250,             // R100/400g → R250/kg
  "seafood mix": 157,         // R110/700g → R157/kg
  "calamari rings": 313,      // R125/400g → R313/kg
  "snoek": 147,               // MF134: reconciled 165→147. Gutted whole, bone-in, butterflied ready-to-grill. Pre-packed 1kg R130–165 → honest mid. R165 was the band ceiling AND sat above the R90–150 fillet band, which a bone-in price must never do (you are paying for the frame). Yield to flakes 50–55%. src:PnP/Checkers when:2026-07 conf:shelf (Tina 22 Jul 2026)
  "snoek fillet": 120,        // R90–150/kg fresh or frozen → honest mid. Separate buy from braai snoek. (Tina 22 Jul 2026)
  "maasbanker": 60,           // WHOLE ROUND. Fresh R60–62.90/kg; frozen 800g R39.99–51.99 → R50–65/kg; 2kg bulk R149.99 → R75/kg (worse value). Honest mid R60. Yield to flakes 40–45%. (Tina 22 Jul 2026)
  "whole mackerel": 60,       // WHOLE ROUND, frozen R59.99/kg. Same whole-weight rule as maasbanker. (Tina 22 Jul 2026)
  "tinned mackerel": 92,      // R36.99/400g → R92/kg. Drained flakes, no waste. (Tina 22 Jul 2026)
  "tiger prawns": 394,        // R315/800g → R394/kg
  "salmon": 680,              // R340/500g → R680/kg
  "haddock fillets": 325,     // R130/400g → R325/kg
  "salted snoek": 180,        // R90/500g → R180/kg
  "canned tuna": 171,         // R29/170g → R171/kg
  "tuna steak": 350,          // src:Tina when:2026-07 conf:shelf  R140/400g → R350/kg (fresh — unfences Marmitako)
  "canned salmon": 300,       // R120/400g → R300/kg
  "pilchards": 65,            // R29/400g → was R73/kg, adjusted to R65 (8 Jun 2026)
  "barley": 35,               // pet recipes (Tina)
  "barley flour": 40,         // Libya — bazin (Tina)
  "chicken frames": 30,       // pet raw — R30/kg (Tina)
  "chicken hearts": 55,       // pet — R55/kg (Tina)
  "beef bones": 55,           // meaty soup bones (Tina, Jun 2026)
  "pork bones": 45,           // (Tina)
  "chicken feet": 40,         // (Tina)
  "lamb bones": 60,           // (Tina)
  "fish frames": 50,          // maasbanker/white fish (Tina)
  "dried porcini": 2000,      // (Tina)
  "marrow bones": 80,         // optional (Tina)
  "tahini": 250,              // ground sesame ~R250/kg (Tina)

  // ── EGGS ──
  "eggs": 3.7,                // R22/6 pack → ~R3.67 each (price per egg)
  "eggs_each": 3.7,

  // ── DAIRY ──
  "milk": 20,                 // per litre
  // ── MF28 SIGNED ADDITIONS · 12 Jul 2026 · plant/dairy-free + reconciled fish (TINZA_LAMB_SIGNED.md · brief §1B) ──
  "almond milk": 37,          // src:AlmondBreeze/PnP-DisChem when:2026-07 conf:shelf  (1L R33-40)
  "oat milk": 35,             // src:online when:2026-07 conf:shelf  (1L; organic dearer)
  "almond butter": 320,       // src:online when:2026-07 conf:shelf  (250g @ R68-86)
  "cashew butter": 340,       // src:online when:2026-07 conf:shelf  (250g @ R85; 1kg tub ~R255/kg)
  "cashew cheese": 396,       // src:Yokos/Checkers when:2026-07 conf:shelf range:396-625
  "date syrup": 323,          // src:Nanuki/Wildsprout when:2026-07 conf:shelf range:264-560  (NOT honey)
  "caramel essence": 350,     // src:online when:2026-07 conf:shelf  (40ml @ R14; per L)
  "hake fillets": 180,        // src:SeaHarvest/I&J when:2026-07 conf:shelf  (frozen 800g @ R145) — SA default white fish
  "basa fillets": 181,        // src:PnP-Fishmonger when:2026-07 conf:shelf  (frozen 800g @ R145)
  "tilapia whole": 60,        // src:PnP/SuperbHyper when:2026-07 conf:shelf  (800g @ R50)
  "mackerel tinned": 95,      // src:CapePoint when:2026-07 conf:shelf  (400g @ R38, middlecut)
  "mackerel frozen": 75,      // src:Shoprite-CapePoint when:2026-07 conf:shelf  (2kg @ R150)
  "butter": 160,              // R80/500g → R160/kg
  "margarine": 70,            // R35/500g → R70/kg (the thrifty béchamel fat)
  "cream": 148,               // R37/250ml → R148/L (approx per kg)
  "cheddar cheese": 187,      // R149.99/800g → R187/kg
  "gouda cheese": 225,        // R180/800g → R225/kg
  "feta cheese": 230,         // R46/200g → R230/kg
  "feta": 230,
  "cheddar": 187,             // R149.99/800g → R187/kg
  "parmesan": 750,            // R30/40g → R750/kg
  "brie": 400,                // R50/125g → R400/kg
  "camembert": 456,           // R57/125g → R456/kg
  "cream cheese": 180,        // R45/250g → R180/kg
  "mozzarella": 275,          // R150/500g → R300/kg
  "yoghurt": 45,              // per kg
  "greek yoghurt": 80,        // R80/kg (thicker, strained)
  "ice cream": 45,            // R82/1.8L ≈ R45/kg
  "chocolate": 313,           // R25/80g → R313/kg

  // ── PRODUCE (FRESH) ──
  "potato": 18,               // R35/2kg → R18/kg
  "potatoes": 18,
  "sweet potato": 30,         // per kg
  "sweet potatoes": 30,
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
  "wasabi": 1775,            // src:Tina when:2026-07-30 conf:shelf  TUBES R38-104 per 35-45g. The four corners of
                             // that bracket normalise to R844/kg (R38/45g) · R1086 (R38/35g) · R2311 (R104/45g) ·
                             // R2971/kg (R104/35g), so this key is the MIDPOINT OF HER OWN RANGE: R71 / 40g = R1775/kg.
                             // ⚠️ THE SPREAD IS A PRODUCT DIFFERENCE, NOT NOISE: the cheap tubes are horseradish,
                             // mustard and colour with little or no real wasabi in them, the dear ones carry a real
                             // percentage. The cards mean THE ORDINARY TUBE, so one edit moves this to R850 (cheap end)
                             // or R2950 (real end) if that is the call. ⚖️ WHY THE MIDPOINT IS SAFE HERE: every wasabi
                             // line app-wide is 3g or 5g, so the whole bracket is worth about R6 on a card —
                             // 3g costs R2.53 at the cheap end, R5.33 here, R8.91 at the dear end.
                             // Written in GRAMS everywhere, so this must stay a per-kg weight key, never a _each tube.
                             // Live in wk_japan.js: sashimi, zaru soba, hosomaki, temaki, nigirizushi.
  "pickled ginger": 280,     // src:Tina when:2026-07 conf:shelf  R15-70 per 110-454g jar → a wide band; the mainstream buy
                             // (~150g at R30-40, 340g jar at R50) lands R150-270/kg, took R280 per §31.1. Same number the
                             // wrong route was already rendering via `ginger` — the money was fine, the ROUTE was fragile and
                             // would have broken silently the day fresh ginger repriced. ⚠️ Covers gari AND beni shoga, which
                             // are not the same product; at 10-20g a card they cannot diverge enough to matter. Ruled, not missed.
  "mushroom": 165,            // R37/225g → R165/kg
  "button mushrooms": 148,    // R37/250g → R148/kg
  "avocado": 65,              // per kg (R13/each ÷ ~200g). avocado_each handles COUNT; this weight key is for gram lines ("ripe avocado"). Was 13 → implied R13/kg (a latent under-price on any weight use).
  "avocado_each": 13,         // each
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
  "brinjal": 43,              // R42.99/1kg PnP → R43/kg
  "aubergine": 43,
  "eggplant": 43,
  "halloumi": 258,            // R57.99/225g Cyprus Foods → ~R258/kg
  "halloumi cheese": 310,
  "beetroot": 25,             // R25/kg
  "celery": 27,               // each
  "pineapple": 25,            // each
  "lemon": 8,                 // each (R8/lemon)
  "lemon_each": 8,
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
  "brown rice": 35,           // R35/1kg (Tina 11 Jul)
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
  "condensed milk": 119,      // R46/385g → R119/kg (Tina 11 Jul)
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
  // ── POTATO STARCH — OWN KEY, 29 Jul 2026 (Tina-sourced: R50–70 per retail 500g) ──
  // A7 EXCEPTION #2, taken for the same reason as "chilli oil" (§29.5): this was a live
  // WRONG price, not a missing one. wkPriceLookup() reads WK_ALIAS in worldkitchen.js,
  // which has no potato-starch entry, so the name fell through to the longest-whole-word
  // rung and landed on "potato" R18 — 6.7x under, rendering as a number that looks fine,
  // live in the pushed wk_europe.js as well as wk_japan.js.
  // ⚠️ IT IS NOT CORNFLOUR. The core.js:1340 alias to cornflour R68 is STRUCK in the same
  //    edit: at R120/kg potato starch is ~1.8x cornflour, and aliasing a dearer product to
  //    a cheaper one is the MF28 lamb->mutton mistake. An exact key beats an alias.
  "potato starch": 120,       // R50-70/500g -> R100-140/kg -> honest mid
  "cornflour": 68,            // R17/250g → R68/kg
  "white sugar": 35,          // per kg
  "brown sugar": 35,
  "castor sugar": 84,         // src:PnP/Shoprite when:2026-07 conf:shelf  (500g R37-49; finer-milled, 2.4x plain sugar R35 — "caster sugar" aliases here)
  "icing sugar": 100,         // R50/500g → R100/kg
  "baking powder": 76,        // R38/200g → R190/kg... use smaller R76
  "bicarbonate of soda": 72,  // R36/500g → R72/kg
  "vanilla essence": 330,     // R32/100ml → R320/kg-approx
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
  "flaxseed": 140,            // R140/kg
  "walnuts": 370,             // R37/100g → R370/kg
  "walnut": 370,              // R37/100g → R370/kg

  // ── OILS & CONDIMENTS ──
  "sunflower oil": 48,        // R95/2L → R48/kg (litre)
  "olive oil": 250,           // per litre
  "coconut oil": 80,          // per litre
  "balsamic vinegar": 180,    // R90/500ml → R180/L
  "balsamic glaze": 360,      // R54/150ml → R360/L
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
  "jam": 50,                  // bare key (R45/900g → R50/kg)

  // ── HERBS & SPICES ──
  "paprika": 364,             // R20/55g → R364/kg
  "turmeric": 351,            // R20/57g → R351/kg
  "ground ginger": 440,       // R22/50g → R440/kg
  "dried ginger": 440,
  "origanum": 688,            // R22/32g → R688/kg
  "cayenne pepper": 556,      // R25/45g → R556/kg
  "cinnamon": 550, "ground cinnamon": 550,   // R22/40g → R550/kg (Tina 11 Jul)
  "ground cloves": 470,
  "cumin": 470,
  "curry powder": 300,        // R30/100g → R300/kg
  "garam masala": 300,
  "garlic powder": 755,       // R40/53g → R755/kg
  "garlic salt": 340,         // R34/100g → R340/kg
  "chili flakes": 700,        // R28/40g → R700/kg
  "crushed chilli spice": 868, // R33/38g → ~R868/kg (SA replacement for pul biber)
  "braai spice": 225,         // R45/200g → R225/kg
  "braai spice blend": 225,
  "nutmeg": 764,              // R42/55g → R764/kg
  "black pepper": 760,        // R38/50g → R760/kg
  "salt": 30,                 // per kg
  "saffron": 100000,          // R50/0.5g → very expensive, use tiny amounts
  "mixed herbs": 1111,        // R20/18g → R1111/kg
  "stock cubes": 1.5,         // R1.50 each

  // ── FROZEN ──
  "mixed vegetables": 55,     // frozen mixed veg ~R54.99/kg (Tina — always use frozen)
  "frozen mixed vegetables": 55,
  "mixed veg": 55,
  "frozen peas": 67,          // R50/750g → R67/kg
  "frozen corn": 106,         // R53/500g → R106/kg
  "frozen broccoli": 67,      // R50/750g → R67/kg
  "frozen green beans": 67,
  "frozen spinach": 107,      // R80/750g → R107/kg
  "frozen blueberries": 140,  // R140/kg

  // ── BREAD & PASTRY ── (slices/buns/wraps are count-priced via *_each in the SESSION ADD block below;
  //                        these weight keys only cover gram uses e.g. breadcrumb/binder)
  "brown bread": 26,          // R18/700g loaf → R26/kg (gram use only)
  "white bread": 30,          // R21/700g loaf → R30/kg (gram use only; _each wins for slices)
  "hamburger rolls": 3,       // legacy weight key — superseded by hamburger roll_each below
  "bread": 18,                // generic — breadcrumb/binder gram use

  // ── CEREAL ──
  "oats": 50,                 // per kg
  "muesli": 107,              // R80/750g → R107/kg

  // ── KIDDIES PARTY (added Jun 2026, per kg unless noted) ──
  "breadcrumbs": 150,         // R30/200g
  "instant chocolate pudding": 167, // R15/90g
  "chocolate biscuits": 225,  // R45/200g
  "marie biscuits": 90,       // R18/200g → R90/kg
  "tennis biscuits": 115,     // R23/200g → R115/kg
  "jelly babies": 280,        // R35/125g
  "sprinkles": 453,           // R34/75g
  "dark chocolate": 313,      // R25/80g
  "chocolate bar": 226,       // R19/84g
  "marshmallows": 169,        // R22/130g
  "food colouring": 15,       // R15 per 40ml bottle (per-item, tiny amounts used)

  // ── KIDDIES UNICORN (Jun 2026) ──
  "tortillas": 139,           // R50/8 wraps (~360g)
  "white chocolate": 313,     // R25/80g
  "fruit cocktail": 98,       // R40/410g tin
  "apple juice": 40,          // R40/1L
  "strawberry juice": 54,     // R27/500ml
  "popcorn kernels": 30,      // ESTIMATE - confirm price

  // ── KIDDIES SPACE (Jun 2026) ──
  "hot dog rolls": 35,        // R3.50 each (~100g)
  "pretzels": 175,            // R35/200g
  "cocktail buns": 60,        // ESTIMATE - confirm price
  "blueberry cordial": 60,    // R45/750ml
  "soda water": 15,           // ESTIMATE - confirm price
  "lemonade": 10,             // ESTIMATE - confirm price

  // ── KIDDIES PIRATE/MERMAID/CONSTRUCTION (Jun 2026) ──
  "bbq sauce": 107,           // R40/375ml
  "lemon juice": 56,          // R28/500ml -> R56/L (Tina round 2)
  "blue lemonade": 12,        // ESTIMATE - confirm (fizzy)
  "pineapple juice": 40,      // ESTIMATE - confirm price
  "shell pasta": 30,          // ESTIMATE - confirm price
  "tuna": 120,                // ESTIMATE - confirm (tinned)
  "jelly powder": 60,         // ESTIMATE - confirm price
  "desiccated coconut": 160,  // R32/200g (Tina, 16 Jun)
  "liver": 90,                // calf's / chicken liver, R80–100 mid (Tina) — covers "calf's liver"
  "pita_each": 7.7,           // per pita, R46/6-pack (Tina)
  "molokhia leaves": 525,     // dried/frozen, R105/200g (Tina)
  "kunafa pastry": 166,       // R83/500g (Tina)
  "kataifi pastry": 166,      // = kunafa pastry
  "ice cream cones": 40,      // ESTIMATE - confirm price
  "smarties": 200,            // ESTIMATE - confirm price
  "taco shells": 200,         // R67/12 shells (~335g)
  "kidney beans": 35,         // ESTIMATE - confirm (tinned)
  "orange juice": 25,         // ESTIMATE - confirm price
  "blue fizzy drink": 12,     // ESTIMATE - confirm price
  "hummus": 333,              // R40/120g

  // ── KIDDIES FRUIT/SNACKS (Jun 2026) ──
  "grapes": 100,              // R50/500g
  "melon": 150,               // cut melon R35/320g (whole ~R50 each)
  "crisps": 192,              // R23/120g packet

  // ── KIDDIES SAFARI/RAINBOW/PRINCESS/FARMYARD/BRAAI/BIG5 (Jun 2026) — many ESTIMATES, confirm at SA&#39;s biggest retailers ──
  "worcester sauce": 60,      // ESTIMATE
  "guava juice": 35,          // ESTIMATE
  "vetkoek": 40,              // ESTIMATE (flour-based, per kg)
  "instant yeast": 90,       // ESTIMATE (R20/100g)
  "cornmeal": 30,             // ESTIMATE
  "chow mein noodles": 60,    // ESTIMATE
  "rice krispies": 80,        // ESTIMATE
  "kefir": 60,                // ESTIMATE
  "mixed berries": 120,       // ESTIMATE (frozen)
  "bananas": 25,              // ESTIMATE
  "mango": 40,                // ESTIMATE
  "pawpaw": 30,               // ESTIMATE
  "granadilla": 180,          // ESTIMATE (pulp) — updated 17 Jun
  "granadilla_each": 10,      // per fruit (count)
  "apple_each": 5,            // per fruit (count)
  "mushrooms": 90,            // ESTIMATE
  "rooibos": 8,               // ESTIMATE (brewed, per L)
  "koeksisters": 120,         // ESTIMATE
  "syrup": 50,                // ESTIMATE
  "ketchup": 45,              // ESTIMATE
  "vinegar": 25,              // ESTIMATE

  // ── KIDDIES ADDITIONS (Jun 3 2026) ──
  "cocoa": 680,               // R85/125g → R680/kg
  "icing cocoa": 680,         // = cocoa (used in choc icing)
  "crackers": 165,            // R66/400g → R165/kg
  "gummies": 280,             // R28/100g → R280/kg
  "oranges": 15,              // R30/2kg → R15/kg
  "oreos": 130,               // R130/kg
  "strawberries": 200,        // R80/400g → R200/kg
  "yogurt": 45,               // alias of yoghurt (per kg)
  "sugar": 35,                // alias of white sugar (per kg)
  "golden sugar": 35,         // = sugar + trace gold luster dust / yellow colouring
  "pink colouring": 15,       // = food colouring (R15/40ml bottle, tiny amounts)
  "sausage": 130,             // sausage-roll filling / sausage meat (≈ boerewors)
  "cocktail sausage": 180,    // R135/750g → R180/kg (braai-able, NOT viennas)
  "tartare sauce": 300,       // 1 Jul · R47.99/160g → R300/kg (jarred) — own key, NOT cream of tartar
  "plant-based sausage": 140, // 1 Jul · Fry's Frozen Braai Sausages 380g R52.99 → ~R140/kg (meat-free/veg dogs)
  "plant-based sausages": 140,
  "english muffins": 55,      // interim — placeholder pizzas, to be swapped to Finger Foods mini-pizzas
  "cold water": 0,            // free
  "hot water": 0,             // free

  // ── ADDITIONS (8 June 2026) — prices lean HIGH, round UP ──
  "turkey mince": 280,
  "turkey breast": 180,
  "beef heart": 110,
  "organ meat": 90,
  "ground edible bone": 50,
  "beef marrow bones": 200,
  "parsley": 650,
  "mint leaves": 650,
  "kelp powder": 600,
  "coconut flour": 130,
  "pumpkin": 35,
  "pumpkin puree": 35,
  "fish oil": 260,
  "flaxseed oil": 260,
  "low-sodium bone broth": 100,
  "chicken broth": 100,       // ready-to-use, gelatin-rich — R50/500ml → R100/L (Tina)
  "low-sodium vegetable stock": 100,
  "tinned sardines": 208,
  "fresh sardines": 115,      // fresh whole sardines — kept separate from tinned R208
  "dried fava beans": 35,     // dried broad/fava beans (16 Jun 2026)
  "mixed nuts": 30,           // matches pp:30 used in core.js recipe lines
  "orange blossom water": 360, // R360/L deli flavouring — used 5–10ml so impact tiny
  "samoosa pur": 110,         // samoosa pastry strips, R110/kg

  // ── GAME, OFFAL & EXTRA MEATS (8 Jun 2026) — lean HIGH, round UP ──
  "game meat": 130,           // game stewing/shin high end (~R125) rounded up
  "springbok": 140,           // game leg (Tina)
  "kudu": 195,                // Mike's Mouse R195/kg
  "kudu fillet": 195,
  "gemsbok fillet": 400,      // fillet high end, no till surprise
  "warthog": 100,             // deboned leg high end
  "pork": 110,                // generic pork
  "pork belly": 150,          // high end
  "pork fat": 60,             // cheap trim
  "beef": 130,                // generic stewing beef
  "beef stock": 50,           // mostly water + cube
  "stock powder": 50,         // tiny quantities
  "dried beef": 300,          // biltong-style, lean high
  "oxtail": 160,              // oxtail pieces, lean high
  "mixed meat": 130,          // braai mixed grill
  // "lamb leg" & "lamb ribs" keys DELETED 12 Jul (SIGNED) → now aliases in core.js (leg of lamb / lamb riblets). One product, one price.
  "lamb liver": 70,           // your figure (R60–70 high)
  "tripe": 130,               // Afval cleaned tripe high end
  "trotters": 130,            // pig/sheep trotters
  "caul fat": 160,            // netvet (Skilpadjies) high end
  // ── Session adds (Jun 2026, Tina-sourced) ──
  "currants": 160,
  "mixed fruit": 180,
  "marzipan": 575,
  "plantain": 44,
  "cassava": 56,
  "pistachios": 800,
  "bulgur": 150,
  "okra": 71,
  "custard": 36,
  "tamarind paste": 522,
  "pomegranate seeds": 287,
  "sour cherries": 180,
  "plums": 40,
  "wood apple pulp": 170,
  "crab": 400,
  "crab meat": 660,
  "crab sticks": 120,        // src:Tina when:2026-07 conf:shelf  R32-52/500g · R75-99/800g-1kg → R64-124/kg, took the top per §31.1.
                             // ⛔ THIRD crab key, deliberately. Surimi is not crab: without this, "crab sticks" fell through to
                             // `crab` R400 — a 3-6x over-charge wearing the right word (the rice bran → rice shape). Do not merge.
  "gruyere cheese": 971,
  "emmental cheese": 600,
  "ouzo": 320,
  "aguardente": 499,
  "cola": 12.5,
  "radish": 108,
  "daikon": 45,                // R45/kg. TINA-SOURCED 29 Jul 2026 (MF152 ADD list), LOCKED IN 30 Jul on
                               // her instruction. ⚠️ A DISTINCT VEGETABLE FROM `radish` R108 ABOVE —
                               // 2.4x apart, never alias one to the other in either direction. Both keys
                               // are 6 characters, so "daikon radish" would TIE in wkPriceLookup's
                               // longest-whole-word rung and resolve by object key order, i.e. by luck.
                               // WK_ALIAS carries an explicit "daikon radish" -> "daikon" line above that
                               // rung so the tie can never be reached. Used in wk_japan.js (tempura,
                               // tamagoyaki, agedashi tofu, zaru soba, sashimi) and wk_china.js
                               // (turnip cake 900g, lanzhou beef noodle 300g).
  "vine leaves": 61,
  "endive": 60,
  "millet flour": 85,
  "buckwheat": 160,
  "wheat berries": 50,
  "yam": 227,
  "yam flour": 110,
  "green papaya": 32,
  "young jackfruit": 108,
  "bratwurst": 135,
  "saucisson vaudois": 650,
  "anchovies": 650,
  "fish roe": 400,
  "dried sprats": 150,
  "smoked fish": 120,
  "brown cheese": 1000,
  "kvass": 15,
  "fine semolina": 43,
  "cherries": 180,
  "malt": 36,
  "black eyed pea flour": 170,
  "marmalade": 100,
  "candied fruit": 430,
  "palm nut extract": 250,
  "berry sauce": 195,
  "veal": 375,
  "wafer_each": 4,   // per unit (count)
  "banana_each": 2.5,   // per unit (count)
  "baguette_each": 30,   // per unit (count)
  "small baguette or roll_each": 20,   // per unit (count)
  "roti_each": 11,   // per unit (count)

  "gelatin": 350,   // baking sachets R15-20/50g -> ~R350/kg

  "fennel seed": 590,   // 100g premium R59 -> ~R590/kg
  "coffee": 1050,   // instant R210/200g -> R1050/kg
  "tea": 300,   // R50/80 bags -> ~R300/kg

  // ── Finger-food ingredients (PRICE_DB audit, 19 Jun 2026) — were NULL -> counted R0 ──
  // Base keys; priceOf's longest-word fallback resolves the parenthetical variants too.
  "rump steak": 225,          // = beef rump (Roadmap R225/kg) — was the big zero
  "shortcrust pastry": 82,   // R32.99/400g PnP Today (Tina, 22 Jul) — same shelf price as puff
  "bell pepper": 50,          // = green pepper R50/kg
  "blue cheese": 260,         // SA blue/gorgonzola ~R260/kg
  "calamari": 130,            // frozen tubes/rings ~R130/kg
  "cornstarch": 68,           // = cornflour R68/kg
  "coconut biscuits": 90,     // ~ marie biscuits R90/kg
  "oreganum": 688,            // = origanum R688/kg (SA spelling variant)
  "sage": 688,                // dried herb ~ origanum
  "chives": 650,              // fresh herb R13/20g -> ~R650/kg
  "vanilla extract": 330,     // essence R330/L
  "white pepper": 240,        // ground white pepper ~R240/kg
  "fig": 120,                 // fresh figs ~R120/kg (seasonal)
  "kiwi": 80,                 // ~R80/kg
  "peppermint crisp": 306,    // 49g bar R15 -> ~R306/kg
  "sourdough": 75,            // loaf R45/600g -> ~R75/kg
  "digestive": 90,            // ~ marie biscuits (priceClean takes 'digestive' before the '/')
  "vegetable oil": 48,        // = sunflower oil R48/L
  "extra coconut": 160,       // = desiccated coconut R160/kg ('Extra Coconut (for rolling)')
  "water": 0.02,              // municipal ~R0.02/L — keeps water ~free while resolving the miss
  "jalape": 80,               // jalapeño: priceClean strips the n~ to 'jalape o…' -> key the surviving token, priced as chilli


  // ── Tina prices, 26 Jun (from filled worklist) ──
  "ciabatta": 113,
  "gnocchi": 100,
  "falafel": 224,
  "pizza base_each": 20,
  "atchar": 123,
  "coleslaw": 83,
  "ranch dressing": 67,
  "tofu": 171,                // per kg — RULED 29 Jul 2026 (was 250, was 225). Tina-sourced live: Woolworths R59.99/350g = R171/kg; PnP + Checkers ordinary 350–400g blocks R125–171/kg; ~R250/kg ONLY on specialist 200g lines. R250 was the TOP of the range being used as the mid — same error shape as "stock": 8 (was 170, a powder price) at line 97. Honest mid = R171.
  "tempeh": 318,
  "edamame": 140,
  "granola": 163,
  "pepperoni": 550,
  "asparagus": 513,           // fresh, 150g/R77 (Tina)
  "tinned asparagus": 197,    // bottled/tinned 330g/R65 (Tina)
  "blackberries": 375,
  "grapefruit": 26,
  "peaches": 35,
  "medjool dates": 140,
  "medjool date": 140,
  "parsnip": 104,
  "brussels sprouts": 193,    // RENAMED 12 Jul from bare "sprouts" — a bare key mispriced "bean sprouts" at R193. src:online when:2026-07 conf:online
  "bean sprouts": 270,        // src:Woolies/PnP when:2026-07 conf:shelf  (100g punnet ~R27)
  "microgreens": 193,
  "lemongrass": 500,
  "tamari": 867,
  "erythritol": 190,
  "xylitol": 190,
  "instant espresso": 800,   // R160/200g (Tina) — brewed espresso costs as coffee via alias
  "whipping cream": 148,
  "fresh cream": 148,
  "watermelon": 30,        // R30/kg — pre-cut bumps it (Tina, 26 Jun)
  "quinoa": 240,           // R120/500g (Tina, 26 Jun)
  "ricotta": 200,
  "mascarpone": 280,
  "roquefort": 470,
  "swiss cheese": 940,
  "goat cheese": 650,
  "chevre": 650,
  "chevin goat cheese": 650,
  "taco spice": 500,
  "cajun spice": 250,
  "fajita spice": 800,
  "masala spice": 200,
  "breyani masala": 200,
  "potjiekos spice blend": 188,
  "smoky spice": 900,
  "smoky spice rub": 900,

  // ══════════ SESSION ADD · 27 Jun 2026 (part 4 — missing-price / alias lock) ══════════
  // COUNT-PRICED bread/buns/wraps (per slice/unit). These resolve u:'' and u:'each'
  // recipe lines. Shop-spend (gold) rounds up to a whole loaf/pack via PACK_DB ladders.
  "white bread_each": 0.95,        // R21 loaf ÷ 22 slices
  "brown bread_each": 0.82,        // R18 loaf ÷ 22 slices
  "wholewheat bread_each": 0.91,   // ~R20 loaf ÷ 22 slices
  "rye bread_each": 1.65,          // ESTIMATE ~R30 loaf ÷ 18 — verify on Sixty60 pass
  "sourdough bread_each": 2.80,    // ESTIMATE pricier loaf ~14 slices — verify
  "thick white bread_each": 1.40,  // thick cut ~16 slices/loaf — verify
  "hamburger roll_each": 4.30,     // ~R26 / 6-pack — verify
  "burger bun_each": 4.30,         // = hamburger roll
  "tortillas_each": 6.25,          // R50 / 8 wraps
  "tortilla wrap_each": 6.25,      // = tortillas (singular synonym; 'wraps' plural-strips to this)

  // UNSLICED loaf — for hollowed-loaf dishes (bunny chow), used BY WEIGHT. Cheaper than sliced.
  "white loaf": 21.43,             // unsliced white loaf R15 / 700g → R21.43/kg  (half loaf 350g ≈ R7.50)

  // WEIGHT/VOLUME prices (prices confirmed by Tina 27 Jun)
  "stout": 36,                     // R27 / 750ml → R36/L
  "green curry paste": 960,        // R48 / 50g
  "gochujang": 321,                // R77 / 240g  (sub 50:50 tomato paste + hot sauce)
  "mixed seafood": 157,            // = seafood mix (R110/700g → R157/kg)

  // SESSION ADD continued · 27 Jun (part 5)
  "hot dog sausages_each": 3.54,   // smoked viennas R84.99/kg ÷ 24 per 1kg pack (standard-size)
  "smoked viennas_each": 3.54,     // = hot dog sausages
  "tinned beans": 41,              // savoury tinned beans — baked-bean proxy (R17/410g → R41/kg)
  // ── breakfast NULL-cost gaps (29 Jun · from bugsweep) ──
  // exact keys: resolve before the substring matcher, so no mis-matches
  "berries": 120,                  // = mixed berries (frozen)
  "masala": 300,                   // = garam masala (akoori scramble) — confirmed
  "nectarine": 35,                 // = peaches proxy (in season ~R40/kg)
  "jalapenos": 80,                 // = chilli proxy — confirmed FRESH (recipe deseeds + finely chops)
  "garlic cloves": 280,            // = garlic — exact key KILLS the old "garlic cloves"→cloves(R1022) mis-match (carryover, not breakfast)
  "amasi": 19,                     // 2kg/R38 → R19/kg (Tina)
  "cashews": 350,                  // 100g/R35 → R350/kg (Tina)
  "dried fruit": 240,              // mixed, 500g/R120 → R240/kg (Tina)
  "hot sauce": 160,                // R40/250ml → R160/L, AVERAGE (Tina 11 Jul) — MAKEABLE: Spice > Sauces
  "culinary lavender": 3500,       // 10g/R35 → R3500/kg (Tina); used in pinches
  // ── FMF plates batch gaps (29 Jun) ──
  "economy steak": 90,             // ESTIMATE — cheap braising cut (blade/chuck); confirm (NOTE: recipes renamed to "tenderised steak" — key below)
  "trout fillet": 180,             // ESTIMATE — rainbow trout, cheaper than salmon; confirm
  // ── FMF price-gap sweep (29 Jun · session 12) — closes R0 holes found by the live priceOf audit ──
  "tenderised steak": 110,         // Tina-confirmed — Checkers ~R99–110/kg (the renamed "economy steak"; fixes 3 budget versions that were costing R0)
  "whiting": 90,                   // ESTIMATE — cheap firm white fish (Fish & Chips budget); covers "whiting fillets" via substring
  "russian sausage": 95,           // ESTIMATE — SA Russian; "russian sausages" plural-resolves to this
  "ramen noodles": 50,             // ESTIMATE — instant/fresh ramen
  "soba noodles": 75,              // ESTIMATE — buckwheat, dearer than wheat
  "rice noodles": 45,              // ESTIMATE — was mis-resolving to plain rice R27; exact key fixes
  "noodles": 80,                   // Tina-sourced — egg noodles 454g @ R35–40 ≈ R80/kg (also the target for the renamed "egg noodles" soup)
  "mixed stir fry veg": 45,        // ESTIMATE — frozen stir-fry mix (cleaned key form, no hyphen)
  "spring roll wrappers": 60,      // ESTIMATE — pastry sheets; small per-recipe use
  "slap chips": 35,                // ESTIMATE — frozen thick-cut chips
  "corn chips": 120,               // ESTIMATE — tortilla/corn chips (~R30/250g)
  "instant gravy": 90,             // ESTIMATE — gravy powder; pinch use
  "dried chillies": 200,           // ESTIMATE — dried/concentrated (was R0; "dried" stripped to "chillies" which matched nothing)
  "chilli flakes": 180,            // ESTIMATE — dried flakes; was mis-resolving to FRESH chilli R80
  "brandy": 200,                   // ESTIMATE — per litre (used in ml)
  "spice mix": 120,                // ESTIMATE — generic blend; vague name, consider naming the specific spice in-recipe
  // ── added 29 Jun (oven-bakes WOW batch) ──
  "red curry paste": 900,          // ESTIMATE — Thai red curry paste (~R50/110g jar), matches green curry paste shape
  "creamed corn": 59,              // cream-style sweetcorn tin (~R24/410g) = tinned corn proxy
  "cream style corn": 59,          // alias for creamed corn
  "kasuri methi": 800,             // ESTIMATE — dried fenugreek leaves (~R35/45g), pinch use
  "dried fenugreek": 800,          // = kasuri methi
  "sweet chilli sauce": 55,        // ESTIMATE — ~R28/500ml bottle → R55/L (was unpriced, used in halloumi burger)
  "oregano": 900,                  // ESTIMATE — dried oregano (~R30/15-20g), pinch use; cf mixed herbs 1111
  "sour cream": 100,               // ESTIMATE — ~R25/250ml tub → R100/kg
  "lime": 140,                     // ESTIMATE — ~R10/lime (~70g) → R140/kg (gram use; lime_each handles count)
  // ── FMF close-out pass (11 Jul, Tina-sourced) ──
  "hot smoked snoek": 450,         // R89.99/200g → R450/kg (plain "snoek" R147 stays separate)
  "smoked snoek": 450,             // MF134: was MISSING. 4 live recipes use this exact string — Korslose Snoek-en-Uietert, Smoked Snoek Scrambled Eggs, Smoorsnoek on Roosterkoek, Smoked Snoek & Baby Potato Salad — and were word-matching down to plain snoek or resolving null. Same value as hot smoked snoek. (22 Jul 2026)
  "dukkah": 600,                   // R36/60g → R600/kg. MAKEABLE: Spice > Blends
  "pearl barley": 70,              // R35/500g → R70/kg
  "ground coffee": 496,            // R124/250g → R496/kg (instant "coffee" R1050 stays separate)
  "english mustard": 327,          // R55/168g → R327/kg (prepared "mustard" R84/L stays separate)
  "green chilli": 80,              // R80/kg fresh — per-weight; "green chilli_each" R1 stays for count lines
  "portuguese roll_each": 4, "portuguese rolls_each": 4,   // R4 each. MAKEABLE: Bakes > Rolls
  "flatbread_each": 12.5, "flatbreads_each": 12.5,         // 3 for R37 → R12.33. MAKEABLE: Bakes > Flatbreads

  // ── Spice costing close-out (11 Jul, Tina-sourced) ────────────────────────
  "shallots": 60,                  // R30/500g. NOTE: often unavailable in SA — sub yellow onion (cooked) / red onion + garlic (raw)
  "star anise": 1000,              // R25/25g
  "sumac": 600,                    // R30/50g. Sub: lemon zest
  "apricots": 36,                  // R36/kg FRESH ("dried apricots" is a separate key)
  "quinces": 35,                   // R35/kg. Sub: green apples
  "rhubarb": 150,                  // R60/400g. Very scarce — sub Granny Smith
  "raspberries": 320,              // R40/125g
  "cape gooseberries": 400, "gooseberries": 400,   // R50/125g (appelliefies)
  "marrow": 66,                    // R53/800g. Card wants the MATURE marrow (seeds scooped), not baby marrow
  "passionfruit pulp": 110,        // R110/kg (granadilla)
  "tomatillos": 119,               // R19/4 ≈ 160g → ESTIMATE. Sub: green tomatoes + extra lime
  "galangal": 880,                 // R22/25g POWDER (fresh is near-impossible in SA). Sub: ginger
  "shrimp paste": 437,             // R58–110 per 185–200g jar → honest mid. Sub: fish sauce
  "miso paste": 135,               // R27/200g. Sub: soy sauce
  "sriracha": 74,                  // R32/435ml → R74/L
  "mirin": 200,                    // R30/150g
  "nori flakes": 4150,             // R415/100g
  "gochugaru": 800,                // R80/100g — Korean dried chilli, NOT fresh chilli
  "amchur": 260,                   // R26/100g — dried mango powder, NOT fresh mango
  "asafoetida": 400,               // R20/50g (hing)
  "sichuan peppercorns": 1300,     // R65/50g
  "nigella seeds": 600,            // R30/50g. Sub: black sesame seeds
  "allspice": 760,                 // R19/25g
  "caraway seeds": 760,            // R19/25g
  "rosewater": 320,                // R80/250ml
  "tarragon": 1000,                // R20/20g fresh
  "caramel treat": 125,            // src:Nestle/Checkers when:2026-07 conf:shelf  (R45/360g tin)
  "shortbread biscuits": 150,      // R30/200g
  "gin": 253,                      // R190/750ml
  "smoked cod roe": 514,           // R90/175g
  "brioche": 135,                  // R35/4 day-old → ESTIMATE at ~65g each
  // The four specialty chillies. Not one of them is a generic "chilli": hotter, dearer,
  // and much smaller. Tina: you can't get all four everywhere — R80–120/kg → honest average.
  "birds eye chillies": 100,
  "habanero chillies": 100,
  "scotch bonnet chillies": 100,
  "red cayenne chillies": 100,

  // ── final four (11 Jul, Tina-sourced) ─────────────────────────────────
  "makataan": 30,                  // ESTIMATE: R70/whole melon; ~4kg melon × ~60% usable flesh ≈ 2.4kg → R30/kg
  "artichoke hearts": 150,         // R60/400g tin
  "dried savory": 1900,            // ESTIMATE: R45–90 per 20–50g bottle → honest mid
  "dried marigold petals": 1740,   // R79–95 per 50g → mid R87/50g
  "peanut butter powder": 769,     // R199.99/260g — the defatted supplement powder, NOT kuli-kuli

  "preserved lemons": 150,         // R75/500g jar (R95/1kg is better value). MAKEABLE: Spice > Jams & Preserves

  "lime juice": 290,               // a lime is R8.75 and yields ~30ml → ~R290/L. Was falling back to LEMON juice R56/L (5× too cheap).

  // ── FMF vegan breakfast batch · Bank A (11 Jul 2026, Tina-sourced + integrity fixes) ──
  "kala namak": 200,               // black salt — R200/kg, 100g pack (small jar). Green = ~2g pinch (cents); gold = the R25–R69 jar. RULING per brief: conservative-high.
  "corn tortillas_each": 5,        // count — distinct product from flour "tortillas" (R50/8). ~R60/12-pack specialty → R5 each.
  "nutritional yeast": 450,        // ~R45/100g. Was resolving to baker's "yeast" R90 — wrong product AND understated. Fixed.
  "chia seeds": 300,               // ~R60/200g → R300/kg. Was MISSING entirely.
  "maple syrup": 400,              // ~R100/250ml → R400/L. Was resolving to golden "syrup" R50 — wrong product AND understated. Fixed.
  "soy milk": 30,                  // R30/L. Was resolving to dairy "milk" R20 — non-vegan buy-name. Fixed for the vegan batch.
  "black beans": 50,               // tinned ~R20/400g → R50/kg. Was resolving to "sugar beans" R78 — different variety. Fixed.

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
      {n:"Hake fillets (cooked, flaked, ALL bones removed)",pp:100,u:"g",cat:"meat"},
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
    {"id":"maizemealchickencrunch","name":"Maize Meal & Chicken Crunch Biscuits","emoji":"🦴","time":45,"tier":"free","batchRecipe":true,"batchYield":24,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Maize meal","pp":120,"u":"g"},{"n":"Chicken mince (cooked, shredded)","pp":150,"u":"g"},{"n":"Egg","pp":1,"u":"egg"},{"n":"Water","pp":60,"u":"ml"}],"method":["Mix maize meal, shredded chicken and egg.","Add water to form dough.","Roll and cut.","Bake at 180°C until hard.","Cool completely before serving."],"tip":"Crunchy and budget-friendly — for junior to senior dogs.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"oatcheesebiscuits","name":"Oat & Cottage Cheese Biscuits","emoji":"🧀","time":40,"tier":"free","batchRecipe":true,"batchYield":20,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Oats","pp":120,"u":"g"},{"n":"Cottage cheese (plain)","pp":100,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Blend oats.","Mix all ingredients.","Shape and bake.","Cool completely before serving."],"tip":"Easy to digest — good for older dogs.","storage":"Fridge: 4 days. Freezer: 1 month."},
    {"id":"livertrainingbiscuits","name":"Chicken Liver Training Biscuits","emoji":"🍗","time":50,"tier":"free","batchRecipe":true,"batchYield":30,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Chicken livers (cooked)","pp":150,"u":"g"},{"n":"Oats","pp":100,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Blend oats.","Mix with liver and egg.","Bake thin and dry.","Break pieces.","Cool completely before serving."],"tip":"Use small pieces — rich but affordable.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"butternutoatbiscuits","name":"Butternut & Oat Biscuits","emoji":"🎃","time":40,"tier":"free","batchRecipe":true,"batchYield":22,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Butternut (mashed)","pp":150,"u":"g"},{"n":"Oats","pp":120,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Blend oats.","Mix all.","Shape and bake.","Cool completely before serving."],"tip":"Naturally sweet and gentle.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"eggbarleybiscuits","name":"Egg & Barley Crunch Biscuits","emoji":"🥚","time":45,"tier":"free","batchRecipe":true,"batchYield":20,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Barley (cooked)","pp":150,"u":"g"},{"n":"Egg","pp":2,"u":"egg"},{"n":"Oats","pp":80,"u":"g"}],"method":["Blend oats.","Mix all.","Shape and bake.","Cool completely before serving."],"tip":"Crunch helps teeth.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"pilchardoatbiscuits","name":"Pilchard & Oat Biscuits","emoji":"🐟","time":40,"tier":"free","batchRecipe":true,"batchYield":24,"batchUnit":"biscuits","ages":["junior","adult","senior"],"base":[{"n":"Pilchards in water","pp":1,"u":"tin"},{"n":"Oats","pp":120,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Mash fish.","Mix all.","Bake until dry.","Cool completely before serving."],"tip":"Omega-3 boost on a budget.","storage":"Fridge: 5 days. Freezer: 2 months."},
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
    {"id":"carrotbarleychews","name":"Carrot & Barley Dental Chews","emoji":"🥕","time":50,"tier":"free","batchRecipe":true,"batchYield":18,"batchUnit":"chews","ages":["junior","adult","senior"],"base":[{"n":"Barley (cooked)","pp":120,"u":"g"},{"n":"Carrots (grated)","pp":120,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Mix all.","Shape sticks.","Bake until hard.","Cool completely before serving."],"tip":"Helps scrape teeth naturally.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"sweetpotatodentalsticks","name":"Sweet Potato Dental Sticks","emoji":"🍠","time":120,"tier":"free","batchRecipe":true,"batchYield":15,"batchUnit":"sticks","ages":["junior","adult","senior"],"base":[{"n":"Sweet potatoes (sliced)","pp":2,"u":""}],"method":["Slice and bake low heat until chewy.","Cool completely before serving."],"tip":"Supervise chewing always.","storage":"Fridge: 7 days. Freezer: 2 months."},
    {"id":"gemmarrowchewsticks","name":"Baby Marrow Chew Sticks","emoji":"🥒","time":90,"tier":"free","batchRecipe":true,"batchYield":16,"batchUnit":"sticks","ages":["junior","adult","senior"],"base":[{"n":"Baby marrow (sliced)","pp":3,"u":""}],"method":["Slice and dry bake.","Cool completely before serving."],"tip":"Light chew option.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"oatcarrotbones","name":"Oat & Carrot Dental Bones","emoji":"🦴","time":50,"tier":"free","batchRecipe":true,"batchYield":18,"batchUnit":"bones","ages":["junior","adult","senior"],"base":[{"n":"Oats","pp":120,"u":"g"},{"n":"Carrots (grated)","pp":120,"u":"g"},{"n":"Egg","pp":1,"u":"egg"}],"method":["Mix, shape and bake hard.","Cool completely before serving."],"tip":"Firm texture = better cleaning.","storage":"Fridge: 5 days. Freezer: 2 months."},
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
    {"id":"pilchardpumpkinbowl","name":"Pilchard & Pumpkin Bowl","emoji":"🐟","time":25,"tier":"free","ages":["puppy","junior","adult","senior"],"base":[{"n":"Pilchards in water","pp":1,"u":"tin"},{"n":"Pumpkin","pp":120,"u":"g"},{"n":"Brown rice","pp":80,"u":"g"}],"method":["Cook rice.","Steam pumpkin.","Mix all.","Cool completely before serving."],"tip":"Gentle and nutritious for all ages.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"chickenoatsoftbowl","name":"Chicken & Oat Soft Bowl","emoji":"🍗","time":25,"tier":"free","ages":["puppy","junior","adult","senior"],"base":[{"n":"Chicken mince","pp":180,"u":"g"},{"n":"Oats","pp":80,"u":"g"},{"n":"Carrots","pp":60,"u":"g"}],"method":["Cook oats.","Cook chicken.","Mix all.","Cool completely before serving."],"tip":"Soft and puppy-safe.","storage":"Fridge: 3 days. Freezer: 1 month."},
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
    {"id":"chickenframebarf","name":"Chicken Frame BARF Mix","emoji":"🍗","time":10,"tier":"free","ages":["adult","senior"],"base":[{"n":"Chicken frames (raw)","pp":200,"u":"g"},{"n":"Chicken hearts","pp":80,"u":"g"},{"n":"Carrots","pp":50,"u":"g"}],"method":["Crush and mix.","Serve fresh."],"tip":"Never feed cooked bones.","storage":"Fridge: 1 day. Freezer: 1 month."},
    {"id":"pilchardrawmix","name":"Raw Pilchard & Veg Blend","emoji":"🐟","time":10,"tier":"free","ages":["adult","senior"],"base":[{"n":"Pilchards","pp":1,"u":"tin"},{"n":"Carrots","pp":40,"u":"g"},{"n":"Spinach","pp":30,"u":"g"}],"method":["Mix and serve."],"tip":"Soft raw option.","storage":"Fridge: 1 day. Freezer: 1 month."},
    {"id":"offalrichrawmix","name":"Offal-Rich Raw Mix","emoji":"🥩","time":10,"tier":"free","ages":["adult","senior"],"base":[{"n":"Beef heart","pp":150,"u":"g"},{"n":"Beef liver","pp":40,"u":"g"},{"n":"Carrots","pp":40,"u":"g"}],"method":["Mix and serve."],"tip":"Keep liver under 10%.","storage":"Fridge: 1 day. Freezer: 1 month."},
    {"id":"gentlerawchickenmix","name":"Gentle Chicken Raw Mix","emoji":"🍗","time":10,"tier":"free","ages":["adult"],"base":[{"n":"Chicken mince (raw)","pp":200,"u":"g"},{"n":"Pumpkin","pp":50,"u":"g"}],"method":["Mix and serve."],"tip":"Simple raw starter.","storage":"Fridge: 1 day. Freezer: 1 month."},
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
    {"id":"pilchardicecubes","name":"Pilchard Ice Cubes","emoji":"🧊","time":10,"tier":"free","ages":["junior","adult","senior"],"base":[{"n":"Pilchards","pp":1,"u":"tin"},{"n":"Water","pp":100,"u":"ml"}],"method":["Blend and freeze."],"tip":"Cooling treat — not for puppies.","storage":"Fridge: 1 day. Freezer: 1 month."},
    {"id":"pumpkinbananafrozen","name":"Pumpkin & Banana Frozen Bites","emoji":"🍌","time":15,"tier":"free","ages":["junior","adult","senior"],"base":[{"n":"Pumpkin","pp":120,"u":"g"},{"n":"Banana","pp":1,"u":""}],"method":["Mash and freeze."],"tip":"Gentle frozen snack.","storage":"Fridge: 1 day. Freezer: 1 month."},
    {"id":"chickenbrothice","name":"Chicken Broth Ice Cubes","emoji":"🧊","time":20,"tier":"free","ages":["junior","adult","senior"],"base":[{"n":"Low-sodium chicken broth","pp":200,"u":"ml"}],"method":["Freeze."],"tip":"Hydrating and simple.","storage":"Fridge: 1 day. Freezer: 1 month."},
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
    {"id":"lowfatpancreatitisbowl","name":"Low-Fat Pancreatitis Support Bowl","emoji":"🥣","time":30,"tier":"free","ages":["adult","senior"],"base":[{"n":"Chicken breast","pp":150,"u":"g"},{"n":"Pumpkin","pp":120,"u":"g"},{"n":"White rice","pp":80,"u":"g"}],"method":["Cook all and mix.","Cool completely before serving."],"tip":"Very low fat support meal.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"limitedingredientlambalt","name":"Limited Ingredient Chicken Bowl","emoji":"🍗","time":25,"tier":"free","ages":["adult"],"base":[{"n":"Chicken mince","pp":200,"u":"g"},{"n":"Sweet potato","pp":120,"u":"g"}],"method":["Cook and mix.","Cool completely before serving."],"tip":"Great for food trials.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"weightlossleanbowl","name":"Lean Weight-Loss Bowl","emoji":"🥕","time":25,"tier":"free","ages":["adult","senior"],"base":[{"n":"Chicken mince","pp":150,"u":"g"},{"n":"Green beans","pp":100,"u":"g"},{"n":"Pumpkin","pp":80,"u":"g"}],"method":["Cook and mix.","Cool completely before serving."],"tip":"Low calorie and filling.","storage":"Fridge: 3 days. Freezer: 1 month."},
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
    {"id":"livercrumbtreats","name":"Dried Liver Crumb Treats","emoji":"🍗","time":60,"tier":"free","batchRecipe":true,"batchYield":40,"batchUnit":"crumbs","ages":["growth","adult","senior"],"base":[{"n":"Chicken livers","pp":200,"u":"g"}],"method":["Dry bake and crush.","Cool completely before serving."],"tip":"Use sparingly — very rich.","storage":"Fridge: 5 days. Freezer: 2 months."},
    {"id":"pilchardnibbles","name":"Pilchard Soft Nibbles","emoji":"🐟","time":20,"tier":"free","ages":["growth","adult","senior"],"base":[{"n":"Pilchards","pp":1,"u":"tin"}],"method":["Mash and serve."],"tip":"Soft and protein-rich.","storage":"Fridge: 2 days. Freezer: 1 month."},
    {"id":"chickenhearttreats","name":"Chicken Heart Bites","emoji":"🍗","time":25,"tier":"free","ages":["growth","adult","senior"],"base":[{"n":"Chicken hearts","pp":150,"u":"g"}],"method":["Cook, chop and cool completely before serving."],"tip":"Natural taurine source.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"goatmilksnackdrops","name":"Goat Milk Frozen Drops","emoji":"🥛","time":10,"tier":"free","ages":["growth","adult","senior"],"base":[{"n":"Goat milk","pp":100,"u":"ml"}],"method":["Freeze in small portions."],"tip":"Avoid for kittens.","storage":"Fridge: 1 day. Freezer: 1 month."},
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
    {"id":"hairballsupportmeal","name":"Hairball Support Meal","emoji":"🐈","time":25,"tier":"free","ages":["adult","senior"],"base":[{"n":"Chicken mince","pp":150,"u":"g"},{"n":"Pumpkin","pp":80,"u":"g"},{"n":"Chicken hearts","pp":80,"u":"g"},{"n":"Taurine supplement","pp":null,"u":""}],"method":["Cook, mix and add taurine.","Cool completely before serving."],"tip":"Helps reduce hairballs.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"sensitivestomachcat","name":"Sensitive Stomach Cat Bowl","emoji":"🍗","time":25,"tier":"free","ages":["adult","senior"],"base":[{"n":"Chicken mince","pp":180,"u":"g"},{"n":"Pumpkin","pp":60,"u":"g"},{"n":"Goat milk","pp":30,"u":"ml"},{"n":"Taurine supplement","pp":null,"u":""}],"method":["Cook and mix.","Cool completely before serving."],"tip":"Gentle digestion support.","storage":"Fridge: 3 days. Freezer: 1 month."},
    {"id":"weightcontrolcatmeal","name":"Weight Control Cat Meal","emoji":"🐟","time":25,"tier":"free","ages":["adult","senior"],"base":[{"n":"Pilchards","pp":1,"u":"tin"},{"n":"Chicken hearts","pp":80,"u":"g"},{"n":"Pumpkin","pp":60,"u":"g"},{"n":"Taurine supplement","pp":null,"u":""}],"method":["Cook hearts, mix all.","Cool completely before serving."],"tip":"High protein, lower calorie.","storage":"Fridge: 3 days. Freezer: 1 month."},
  ],
  care:[{ id:"catcare", name:"Daily Care Guide", emoji:"💧", time:0, tier:"free", ages:["kitten","growth","adult","senior"], base:[], method:[], tip:"", storage:"" }],
};

