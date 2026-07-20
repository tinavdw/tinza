// ══ MOOD TAGS ═══════════════════════ MF123 · 20 Jul · Law 6 · Law 45 ══
// THE SINGLE EDITABLE MOOD STORE. One object. { 'source:section:id': ['mood', …] }.
//
// 🩸 THE KEY IS `source:section:id` — NOT the bare id. Re-measured 20 Jul against
// 92105af: 19 BARE IDS COLLIDE ACROSS 38 RECORDS (potatosalad, slaphakskeentjies,
// tzatziki, hummus, chakalaka, breadbutterpudding …). "potatosalad" is BOTH
// events/Potato Salad AND braai/Potato Salad. A duplicate key in an object literal
// OVERWRITES SILENTLY — one of the two tags would just vanish, and nothing would
// say so. ⚖️ Law 3 — a document that is wrong is silent.
// `source:section:id` → 2,083 / 2,083 distinct.
//
// ⚖️ Law 6 — this is the SAME key shape tinzaStore uses for favourites, built by
// the SAME function: tinzaStore.favKey(r). Do NOT hand-roll the key here.
//
// ⚖️ RULED 15 Jul (RULINGS §3) — A MOOD IS A TAG, NOT A KEYWORD GUESS.
// The keyword predicates (MOOD_QUERY, core.js) put Fish & Chips under "Impress"
// and Burger Buns under "Sweet". A guess is not a shelf. A tag is.
//
// 🩸 TAG HERE AND NOWHERE ELSE. Never inline a `mood:` on a record — the moment
// tags live in two places one of them is wrong and silent. ⚖️ Law 6 · Law 3.
//
// A record whose key is NOT in this map gets `mood: []` — on NO shelf. That is
// CORRECT: untagged is not "maybe". ⚖️ Law 45 — UNKNOWN IS NOT YES.
//
// ⚠️ A key that resolves to NO record is a DEAD TAG — the dish was renamed, moved
// room, or never existed, and the tag silently does nothing. Census check 17 fails
// loud on that. ⚖️ Law 42 — the ratchet.
//
// ── THE VALID MOODS (must match MOOD_QUERY's keys, core.js:2000) ──
//   healthy · celebrating · fussy · cold · sweet · exhausted
//   sick · quick · adventurous · pickmeup · lazy · impress
//
// ── HOW A MOOD GRADUATES ──
// buildMoodPool() still runs on MOOD_QUERY keywords. A mood flips to
// allRecipes({mood}) only once ~15 recipes carry that tag — per mood, one task
// each. Census check 17 prints the per-mood tally: that is the scoreboard.
// ⚖️ Law 36 — the count is the backlog number.
//
// ⚠️ SEED — 71 records, ONE mood live: celebrating (71). Measured 20 Jul vs 92105af:
// every key below resolves to exactly ONE record in the live index (0 dead, 0 ambiguous).
// The other 11 moods are still empty — their content pass has not run. ⚖️ Law 36.
//
// 🩸 celebrating IS NOT FLIPPED. buildMoodPool() still serves it from MOOD_QUERY keywords.
// The tags are seeded so Tina can SEE them land first; the shelf flip is a separate
// decision, ruled after she has looked. Do not flip it here.
//
// ⚠️ beefstroganoff carries FOUR moods — it was in the MF123 seed (pickmeup/cold/lazy)
// AND the celebrating pass. MERGED, not overwritten: a second
// 'db:events:beefstroganoff': line would have silently eaten the first three. That is the whole reason for this key
// shape — the trap is real, and it is inside this file. ⚖️ Law 6 · Law 3.

var MOOD_TAGS = {
  'db:events:beefstroganoff':                  ['pickmeup', 'cold', 'lazy', 'celebrating'],   // Beef Stroganoff
  'db:events:roastchicken':                    ['celebrating'],   // Roast Chicken
  'db:events:slowroastbeef':                   ['celebrating'],   // Slow Roast Beef with Red Wine Gravy
  'db:events:roastpork':                       ['celebrating'],   // Roast Pork with Crackling
  'db:events:lambshanks':                      ['celebrating'],   // Braised Lamb Shanks
  'db:events:aitchboneroast':                  ['celebrating'],   // Aitchbone Beef Roast
  'db:events:roastlamb':                       ['celebrating'],   // Roast Leg of Lamb
  'db:events:butterfliedlamb':                 ['celebrating'],   // 48-Hour Butterflied Leg of Lamb
  'db:braai:butterfliedleg':                   ['celebrating'],   // Butterflied Leg of Lamb
  'db:braai:lambleganchoviolive':              ['celebrating'],   // Leg of Lamb with Anchovy & Olive Marinade
  'db:braai:hardbody':                         ['celebrating'],   // Slow-Roasted Lemon & Garlic Chicken
  'db:meals:sp-roast-beef':                    ['celebrating'],   // Roast Beef
  'db:meals:sp-pork-belly':                    ['celebrating'],   // Slow-Roast Pork Belly & Crackling
  'db:meals:sp-roast-chicken':                 ['celebrating'],   // Lemon & Herb Roast Chicken & Veg
  'db:world:spain-cochinillo-asado':           ['celebrating'],   // Cochinillo Asado
  'db:world:spain-cordero-asado':              ['celebrating'],   // Cordero Asado
  'db:world:austria-tafelspitz':               ['celebrating'],   // Tafelspitz
  'db:world:poland-kaczka-pieczona':           ['celebrating'],   // Kaczka pieczona
  'db:world:austria-zwiebelrostbraten':        ['celebrating'],   // Zwiebelrostbraten
  'db:world:we-sauerbraten':                   ['celebrating'],   // Sauerbraten
  'db:world:we-schweinshaxe':                  ['celebrating'],   // Roast pork knuckle
  'db:world:boerekos-skaapboud':               ['celebrating'],   // Skaapboud (Roast Leg of Lamb)
  'db:world:boerekos-roast-pork-belly':        ['celebrating'],   // Oondgeroosterde Varkpens (Oven-Roasted Pork Belly)
  'db:world:boerekos-springbok-leg-roast':     ['celebrating'],   // Springbokboud (Roast Leg of Springbok)
  'db:world:boerekos-gemsbok-stuffed-fillet':  ['celebrating'],   // Gestopte Gemsbokfilet (Stuffed Gemsbok Fillet)
  'db:world:poland-pierogi-ruskie':            ['celebrating'],   // Pierogi ruskie
  'db:world:cape-malay-samoosas':              ['celebrating'],   // Samoosas
  'db:bakes:bk-vetkoek':                       ['celebrating'],   // Vetkoek
  'db:world:boerekos-koeksisters':             ['celebrating'],   // Koeksisters (Syrup-Plaited Doughnuts)
  'db:meals:sp-tagliatelle-ragu':              ['celebrating'],   // Tagliatelle al Ragù alla Bolognese
  'db:meals:sp-prawn-linguine':                ['celebrating'],   // Garlic Prawn Linguine
  'db:meals:sp-carbonara':                     ['celebrating'],   // Spaghetti Carbonara
  'db:world:tanzania-zanzibar-biryani':        ['celebrating'],   // Zanzibar Biryani
  'db:world:india-hyderabadi-chicken-biryani': ['celebrating'],   // Hyderabadi Chicken Biryani
  'db:world:india-mutton-biryani':             ['celebrating'],   // Mutton Biryani
  'db:world:indian-lamb-biryani':              ['celebrating'],   // Lamb Biryani
  'db:world:indian-vegetable-biryani':         ['celebrating'],   // Vegetable Biryani
  'db:world:nigeria-jollof-rice':              ['celebrating'],   // Nigerian Jollof Rice
  'db:world:ghana-jollof-rice':                ['celebrating'],   // Ghanaian Jollof Rice
  'db:world:spain-paella-valenciana':          ['celebrating'],   // Paella Valenciana
  'db:world:spain-paella-marisco':             ['celebrating'],   // Paella de Marisco
  'db:world:spain-arroz-negro':                ['celebrating'],   // Arroz Negro
  'db:world:portugal-arroz-de-pato':           ['celebrating'],   // Arroz de Pato
  'db:world:portugal-arroz-de-marisco':        ['celebrating'],   // Arroz de Marisco
  'db:braai:seafoodpaella':                    ['celebrating'],   // Braai Seafood Paella
  'db:world:senegal-thieboudienne':            ['celebrating'],   // Thieboudienne
  'db:world:tanzania-pilau':                   ['celebrating'],   // Pilau
  'db:meals:sp-chicken-pilau':                 ['celebrating'],   // Chicken Pilau
  'db:world:cape-malay-yellow-rice':           ['celebrating'],   // Cape Malay Yellow Rice
  'db:world:switzerland-saffron-risotto':      ['celebrating'],   // Risotto allo Zafferano Ticinese
  'db:meals:sp-seafood-risotto':               ['celebrating'],   // Seafood Risotto
  'db:events:chickenpie':                      ['celebrating'],   // Chicken Pie
  'db:events:lasagna':                         ['celebrating'],   // Lasagna
  'db:events:butterchicken':                   ['celebrating'],   // Butter Chicken (Murgh Makhani)
  'db:events:fishcurry':                       ['celebrating'],   // Cape Malay Fish Curry
  'db:events:chickenaaking':                   ['celebrating'],   // Chicken à la King
  'db:events:potjiekos':                       ['celebrating'],   // Mutton Potjiekos
  'db:events:bakedhake':                       ['celebrating'],   // Baked Hake with Lemon Herb Crust
  'db:events:dijontymeporkchops':              ['celebrating'],   // Gourmet Dijon & Thyme Pork Chops
  'db:events:roastpotatoes':                   ['celebrating'],   // Roast Potatoes
  'db:events:sweetcarrots':                    ['celebrating'],   // Honey-Thyme Glazed Carrots
  'db:events:savouryrice':                     ['celebrating'],   // Savoury Rice
  'db:events:sweetpatats':                     ['celebrating'],   // Caramelised Sweet Potato Bake
  'db:events:pumpkinbake':                     ['celebrating'],   // Roasted Pumpkin Bake
  'db:events:papsheba':                        ['celebrating'],   // Pap & Sous (Putu & Stywe Pap)
  'db:events:creamyspinach':                   ['celebrating'],   // Creamy Spinach
  'db:events:umngqusho':                       ['celebrating'],   // Umngqusho (Samp & Beans)
  'db:events:cauliflowercheese':               ['celebrating'],   // Cauliflower & Cheese Bake
  'db:events:slaphakskeentjies':               ['celebrating'],   // Slaphakskeentjies
  'db:braai:slaphakskeentjies':                ['celebrating'],   // Slaphakskeentjies
  'db:world:boerekos-crispy-roast-potatoes':   ['celebrating']   // Bros Gebraaide Aartappels (Crispy Roast Potatoes)
};

if (typeof window !== 'undefined') window.MOOD_TAGS = MOOD_TAGS;
