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
// ⚠️ SEED — 127 records, ONE mood live: celebrating (127). Seeded in two passes
// (71 on 20 Jul, +59 top-up: in SA the braai IS the celebration), then −3 by the
// occasion ruling. Every key below resolves to exactly ONE record in the live
// index — 0 dead, 0 ambiguous, measured, not assumed. The other 11 moods are still
// empty — their content pass has not run. ⚖️ Law 36 — the count is the backlog number.
//
// ⚖️ RULED 20 Jul — CELEBRATING IS AN OCCASION TEST, NOT AN INCOME TEST.
// Humble food STAYS: pap, braaibroodjies, samoosas. Everyday food and self-treats GO.
// Removed on that ruling:
//   'db:braai:boerewors'    — boerewors is a Tuesday, not an occasion
//   'db:bakes:bk-vetkoek'   — a payday treat; also unslotted pending its versions call
//   'db:braai:chakalaka'    — everyday food, same call (MF126)
//
// 🩸 CHAKALAKA IS THE WORKED EXAMPLE OF THE TWO LAYERS. Its SLOT is SIDE and that is
// correct everywhere in the app — do NOT revert it. Only its MOOD TAG was wrong.
// A slot says WHAT A DISH IS. A mood tag says WHEN YOU WANT IT. They are set in two
// different files for exactly this reason, and a dish can be a perfectly good SIDE
// and still not be a celebration. ⚖️ Law 46 — one word, one meaning.
//
// ⚠️ beefstroganoff carries FOUR moods — it was in the MF123 seed (pickmeup/cold/lazy)
// AND the celebrating pass. MERGED, not overwritten: a second
// 'db:events:beefstroganoff': line would have silently eaten the first three.
// That is the whole reason for this key shape — the trap is real, and it is
// inside this file. ⚖️ Law 6 · Law 3.

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
  'db:world:boerekos-crispy-roast-potatoes':   ['celebrating'],   // Bros Gebraaide Aartappels (Crispy Roast Potatoes)
  'db:braai:fillet':                           ['celebrating'],   // Beef Fillet
  'db:braai:tbone':                            ['celebrating'],   // T-Bone Steak
  'db:braai:chuck':                            ['celebrating'],   // Beef Chuck (Shisanyama)
  'db:braai:brisket':                          ['celebrating'],   // Brisket (low and slow)
  'db:braai:shortrib':                         ['celebrating'],   // Short Rib (thin sliced)
  'db:braai:marinatedfillet':                  ['celebrating'],   // Marinated Beef Fillet (Honey Soy Baste)
  'db:braai:kudu':                             ['celebrating'],   // Kudu Fillet
  'db:braai:sosaties':                         ['celebrating'],   // Lamb Sosaties
  'db:braai:lambribchops':                     ['celebrating'],   // Lamb Rib Chops
  'db:braai:lambribs':                         ['celebrating'],   // Lemon & Garlic Lamb Ribs
  'db:braai:spareribs':                        ['celebrating'],   // Pork Spareribs
  'db:braai:lemonherbflatty':                  ['celebrating'],   // Lemon & Herb Chicken Flatty
  'db:braai:chickenkebaabs':                   ['celebrating'],   // Peri-Peri Chicken Kebabs
  'db:braai:beefkebabs':                       ['celebrating'],   // Marinated Beef Kebabs
  'db:braai:beefsouvlaki':                     ['celebrating'],   // Beef Souvlaki
  'db:braai:turkishkebabs':                    ['celebrating'],   // Turkish Beef Kebabs (Adana)
  'db:braai:snoek':                            ['celebrating'],   // Snoek
  'db:braai:prawns':                           ['celebrating'],   // Prawns (shell-on)
  'db:braai:espetada':                         ['celebrating'],   // Seafood Espetada
  'db:braai:mixedseafoodkebabs':               ['celebrating'],   // Mixed Seafood Kebabs
  'db:braai:honeymustardSalmon':               ['celebrating'],   // Honey & Mustard Salmon
  'db:braai:braaibroodjies':                   ['celebrating'],   // Braaibroodjies
  'db:braai:stokbrood':                        ['celebrating'],   // Stokbrood
  'db:braai:roosterkoek-garlic-cheese':        ['celebrating'],   // Roosterkoek with Garlic Butter & Cheese
  'db:braai:roosterkoek-boerewors':            ['celebrating'],   // Roosterkoek with Boerewors & Relish
  'db:braai:cheese-corn-potbrood':             ['celebrating'],   // Cheese & Corn Potbrood
  'db:braai:braaipie':                         ['celebrating'],   // Braai Pie (Spinach, Bacon and Feta)
  'db:braai:stywepap':                         ['celebrating'],   // Stywe Pap (Stiff Pap)
  'db:braai:pap':                              ['celebrating'],   // Phutu Pap
  'db:braai:mielies':                          ['celebrating'],   // Mielies (Corn on the Cob)
  'db:braai:potbake':                          ['celebrating'],   // Creamy Potato Bake
  'db:events:potatosalad':                     ['celebrating'],   // Potato Salad
  'db:braai:potatosalad':                      ['celebrating'],   // Potato Salad
  'db:braai:threebeans':                       ['celebrating'],   // Three Bean Salad
  'db:braai:sweetpotato':                      ['celebrating'],   // Braai Sweet Potato
  'db:braai:braaismores':                      ['celebrating'],   // Braai S'mores
  'db:braai:chocolatefondue':                  ['celebrating'],   // Braai Chocolate Fondue
  'db:braai:grilledpineapple':                 ['celebrating'],   // Grilled Pineapple
  'db:braai:breadbutterpudding':               ['celebrating'],   // Braai Bread and Butter Pudding
  'db:braai:marshmallowbanana':                ['celebrating'],   // Baked Marshmallow Banana
  'db:events:prawncocktail':                   ['celebrating'],   // Prawn Cocktail
  'db:events:melonprosciutto':                 ['celebrating'],   // Melon & Prosciutto Platter
  'db:events:bruschettatray':                  ['celebrating'],   // Bruschetta Platter (3 ways)
  'db:events:creamymussels':                   ['celebrating'],   // Creamy Garlic Mussels
  'db:events:periperilivers':                  ['celebrating'],   // Peri-Peri Chicken Livers
  'db:events:biltongsalad':                    ['celebrating'],   // Biltong & Blue Cheese Salad
  'db:braai:biltongsalad':                     ['celebrating'],   // Biltong & Blue Cheese Salad
  'db:events:butternutsoup':                   ['celebrating'],   // Roasted Butternut & Feta Soup
  'db:events:creamymash':                      ['celebrating'],   // Creamy Potato Mash
  'db:events:greenbeans':                      ['celebrating'],   // Sautéed Green Beans with Garlic & Almonds
  'db:events:couscous':                        ['celebrating'],   // Herb & Crunch Couscous
  'db:events:waldorfsalad':                    ['celebrating'],   // SA Waldorf Salad
  'db:events:copperpenny':                     ['celebrating'],   // Copper Penny Carrot Salad
  'db:events:friedcabbage':                    ['celebrating'],   // Curried Cabbage & Carrot Crunch
  'db:events:carrotsalad':                     ['celebrating'],   // Carrot, Butternut & Pineapple Salad
  'db:events:tomatobasil':                     ['celebrating'],   // Tomato, Chickpea & Feta Salad
  'db:events:spagbolognaise':                  ['celebrating']   // Spaghetti Bolognaise
};

if (typeof window !== 'undefined') window.MOOD_TAGS = MOOD_TAGS;
