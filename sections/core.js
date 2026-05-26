function set(upd){ Object.assign(S,upd); draw(); }

// Lightweight state update that preserves scroll — used for checkbox toggles
function setQuiet(upd){
  const root=document.getElementById("root");
  if(root) root._savedScroll = window.scrollY; // save BEFORE state change
  Object.assign(S,upd);
  draw();
}
const POPULAR_RECIPES = {

  sa:[
    // ── SA CLASSICS ──────────────────────────────────────────────
    { id:"pr_bobotie", name:"Bobotie", intl:"Spiced Mince Bake", emoji:"🍛", cuisine:"South African", time:75, serves:6,
      tags:["cape malay","mince","curry","bakes","dinner"],
      ingredients:[
        {n:"Beef or lamb mince",pp:150,u:"g"},
        {n:"Onion (finely diced)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Curry powder",pp:3,u:"g"},
        {n:"Turmeric",pp:1,u:"g"},
        {n:"Apricot jam",pp:15,u:"g"},
        {n:"Chutney (Mrs Ball's style)",pp:15,u:"g"},
        {n:"White bread (soaked in milk)",pp:30,u:"g"},
        {n:"Milk (for soaking bread)",pp:30,u:"ml"},
        {n:"Egg",pp:0.3,u:"egg"},
        {n:"Lemon juice",pp:5,u:"ml"},
        {n:"Raisins",pp:15,u:"g"},
        {n:"Almonds (flaked)",pp:10,u:"g"},
        {n:"Bay leaves",pp:null,u:""},
        // Topping
        {n:"Eggs (for topping)",pp:0.5,u:"egg"},
        {n:"Milk (for topping)",pp:30,u:"ml"},
        {n:"Turmeric (for topping)",pp:0.5,u:"g"},
      ],
      method:["Preheat oven to 180°C.","Sauté onion and garlic until soft. Add curry powder and turmeric, cook 1 min.","Add mince. Brown completely — no pink remaining.","Add jam, chutney, lemon juice and raisins. Mix well.","Squeeze bread dry and crumble into mince. Mix. Season well.","Spoon into greased baking dish. Press bay leaves on top.","Beat eggs with milk and turmeric. Pour over the mince.","Bake 35–40 min until topping is set and golden.","Remove bay leaves before serving. Serve with yellow rice and chutney."],
      tip:"The bread is what makes Bobotie uniquely South African — it absorbs the spices and gives the dish its characteristic moist texture. Don't skip the apricot jam — it's the secret sweetness that balances the curry.",
      storage:"Fridge 3 days. Freezes well without the egg topping." },

    { id:"pr_malvapudding", name:"Malva Pudding", intl:"SA Sticky Toffee Pudding", emoji:"🍮", cuisine:"South African", time:60, serves:8,
      tags:["dessert","bakes","sweet","classic","pudding"],
      ingredients:[
        {n:"Sugar",pp:30,u:"g"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Apricot jam",pp:15,u:"g"},
        {n:"Butter (melted)",pp:8,u:"g"},
        {n:"Cake flour",pp:30,u:"g"},
        {n:"Bicarbonate of soda",pp:0.5,u:"g"},
        {n:"Vinegar",pp:3,u:"ml"},
        {n:"Milk",pp:30,u:"ml"},
        // Sauce
        {n:"Cream",pp:45,u:"ml"},
        {n:"Butter (for sauce)",pp:15,u:"g"},
        {n:"Sugar (for sauce)",pp:20,u:"g"},
        {n:"Hot water",pp:15,u:"ml"},
        {n:"Vanilla essence",pp:1,u:"ml"},
      ],
      method:["Preheat oven to 180°C. Grease a baking dish well.","Beat sugar and egg until pale and fluffy — about 3 min.","Add jam, melted butter, vinegar and milk. Mix well.","Sift flour and bicarb together. Fold into wet mixture.","Pour into greased dish. Bake 30–35 min until deep golden brown and a skewer comes out clean.","SAUCE: Combine cream, butter, sugar, hot water and vanilla in a small pot. Heat until butter melts and sugar dissolves — do not boil.","While pudding is still hot and fresh from the oven, poke holes all over with a skewer.","Pour ALL the warm sauce over the hot pudding. It will absorb completely — don't panic.","Serve immediately with extra cream or vanilla ice cream."],
      tip:"The sauce must go on while the pudding is HOT — this is non-negotiable. Cold pudding won't absorb the sauce. The pudding should look almost sticky and glossy when done correctly.",
      storage:"Fridge 3 days. Reheat in microwave with a splash of cream." },

    { id:"pr_koeksisters", name:"Koeksisters", intl:"Syrup-Glazed Plaited Pastry", emoji:"🍩", cuisine:"South African", time:90, serves:12,
      tags:["dessert","sweet","fried","afrikaner","syrup"],
      ingredients:[
        {n:"Cake flour",pp:25,u:"g"},
        {n:"Baking powder",pp:0.5,u:"g"},
        {n:"Salt",pp:0.2,u:"g"},
        {n:"Butter (cold)",pp:4,u:"g"},
        {n:"Egg",pp:0.1,u:"egg"},
        {n:"Milk",pp:15,u:"ml"},
        {n:"Oil (for deep frying)",pp:null,u:""},
        // Syrup
        {n:"Sugar (for syrup)",pp:50,u:"g"},
        {n:"Water (for syrup)",pp:25,u:"ml"},
        {n:"Cream of tartar",pp:0.2,u:"g"},
        {n:"Lemon juice",pp:2,u:"ml"},
      ],
      method:["SYRUP (make the day before — must be ice cold): Dissolve sugar in water over low heat. Add cream of tartar and lemon juice. Boil 10 min. Cool completely. Refrigerate overnight — MUST be ice cold.","Sift flour, baking powder and salt. Rub in cold butter until breadcrumb texture.","Add egg and milk. Mix to a soft dough. Rest 10 min.","Roll out 5mm thick. Cut into 8cm × 2cm strips. Cut each strip almost through lengthways to create two strands joined at one end. Plait.","Heat oil to 180°C. Fry in batches until golden brown — about 3 min.","IMMEDIATELY drop hot koeksisters into the ice-cold syrup. They must go from boiling oil directly into freezing syrup — the temperature shock is what makes them crispy outside and syrupy inside.","Remove after 30 seconds. Place on wire rack."],
      tip:"Two things make perfect koeksisters: (1) syrup must be ice cold — put it in the freezer 30 min before frying. (2) They go straight from hot oil into cold syrup. The thermal shock creates that signature crispy-sticky texture.",
      storage:"Room temperature 3 days. Do not refrigerate — they go soggy." },

    { id:"pr_frikkadels", name:"Frikkadels", intl:"SA Beef Meatballs", emoji:"🍖", cuisine:"South African", time:40, serves:4,
      tags:["mince","meatballs","dinner","afrikaner","family"],
      ingredients:[
        {n:"Beef mince",pp:125,u:"g"},
        {n:"Onion (very finely grated)",pp:20,u:"g"},
        {n:"White bread (crusts removed, soaked in milk)",pp:25,u:"g"},
        {n:"Milk (for soaking)",pp:30,u:"ml"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Worcestershire sauce",pp:3,u:"ml"},
        {n:"Fresh parsley (finely chopped)",pp:5,u:"g"},
        {n:"Salt and pepper",pp:null,u:""},
        {n:"Oil or butter (for frying)",pp:10,u:"ml"},
      ],
      method:["Squeeze bread dry. Combine all ingredients except oil. Mix well — hands are best.","Shape into slightly flattened balls — about 4cm diameter.","Heat oil in pan over medium heat. Fry in batches — don't crowd the pan.","Fry 4 min per side until deep golden brown and cooked through.","Rest 5 min before serving."],
      tip:"Grated onion rather than diced — it disappears into the meat and adds moisture without chunks. Soaked bread is what makes frikkadels light rather than dense. Flatten slightly so they cook evenly.",
      storage:"Fridge 3 days. Freezer 2 months." },

    { id:"pr_vetkoek", name:"Vetkoek with Mince", intl:"Fried Dough Bread with Mince", emoji:"🍞", cuisine:"South African", time:60, serves:6,
      tags:["bread","fried","mince","street food","afrikaner"],
      ingredients:[
        {n:"Bread flour",pp:60,u:"g"},
        {n:"Instant yeast",pp:1,u:"g"},
        {n:"Salt",pp:0.5,u:"g"},
        {n:"Sugar",pp:2,u:"g"},
        {n:"Lukewarm water",pp:40,u:"ml"},
        {n:"Oil for deep frying",pp:null,u:""},
        // Mince filling
        {n:"Beef mince",pp:60,u:"g"},
        {n:"Onion (diced)",pp:15,u:"g"},
        {n:"Tomato (diced)",pp:20,u:"g"},
        {n:"Curry powder",pp:1,u:"g"},
        {n:"Salt and pepper",pp:null,u:""},
      ],
      method:["Mix flour, yeast, salt and sugar. Add water gradually — mix to a soft dough.","Knead 8 min until smooth. Cover and prove 1 hour until doubled.","MINCE: Fry onion until soft. Add mince, brown completely. Add tomato and curry powder. Simmer 10 min. Season well.","Knock dough back. Divide into balls (about 70g each). Flatten slightly.","Heat oil to 170°C. Fry vetkoek in batches, 4–5 min per side until deep golden brown and hollow-sounding when tapped.","Split open immediately and fill with curry mince."],
      tip:"Oil temperature is critical — too hot and they're raw inside, too cool and they're greasy. Test with a small piece of dough first. The dough should float and bubble immediately.",
      storage:"Vetkoek best eaten fresh. Mince fridge 3 days." },

    { id:"pr_sosaties", name:"Sosaties", intl:"Cape Malay Skewers", emoji:"🍢", cuisine:"South African", time:240, serves:6,
      tags:["braai","skewer","cape malay","lamb","marinade"],
      ingredients:[
        {n:"Lamb (shoulder or leg, cubed 3cm)",pp:150,u:"g"},
        {n:"Dried apricots",pp:15,u:"g"},
        {n:"Onion (cut in wedges)",pp:20,u:"g"},
        // Marinade
        {n:"Onion (finely diced — for marinade)",pp:15,u:"g"},
        {n:"Garlic",pp:2,u:"g"},
        {n:"Curry powder",pp:3,u:"g"},
        {n:"Turmeric",pp:0.5,u:"g"},
        {n:"Apricot jam",pp:20,u:"g"},
        {n:"White wine vinegar",pp:10,u:"ml"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Oil",pp:5,u:"ml"},
      ],
      method:["MARINADE: Fry onion and garlic in oil until soft. Add curry powder and turmeric — cook 1 min. Add jam and vinegar. Cool completely.","Combine lamb cubes with marinade. Add bay leaves. Marinate minimum 4 hours — overnight is best.","Thread lamb onto skewers alternating with dried apricots and onion wedges.","Braai over medium-hot coals — about 12–15 min, turning regularly.","Baste with remaining marinade while cooking.","Rest 5 min before serving."],
      tip:"The sweet-sour-spicy marinade is what makes sosaties Cape Malay. Overnight marinating is worth it — the apricot jam tenderises the lamb. Don't grill too hot — the jam burns easily.",
      storage:"Raw marinated meat fridge 2 days. Cooked 3 days." },

    { id:"pr_potjiekos", name:"Potjiekos — Lamb Neck", intl:"SA Slow-Cooked Pot Stew", emoji:"🥘", cuisine:"South African", time:180, serves:6,
      tags:["potjie","braai","slow cook","lamb","stew"],
      ingredients:[
        {n:"Lamb neck pieces",pp:200,u:"g"},
        {n:"Onion (roughly chopped)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Carrots (cut in chunks)",pp:30,u:"g"},
        {n:"Potatoes (quartered)",pp:60,u:"g"},
        {n:"Butternut (cubed)",pp:40,u:"g"},
        {n:"Green beans",pp:20,u:"g"},
        {n:"Tomato paste",pp:10,u:"g"},
        {n:"Red wine",pp:40,u:"ml"},
        {n:"Beef stock",pp:40,u:"ml"},
        {n:"Dried thyme",pp:0.5,u:"g"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Oil",pp:8,u:"ml"},
      ],
      method:["Heat oil in potjie over hot coals. Brown lamb neck in batches — deep colour means deep flavour.","Add onion and garlic. Cook until soft.","Add tomato paste. Stir and cook 2 min.","Add wine and stock. Season well.","LAYER — do not stir: add carrots, then potatoes, then butternut on top.","Cover with lid. Simmer over low coals 2–2.5 hours. Manage coals to maintain gentle simmer.","Add green beans on top in last 20 min.","THE RULE: do not stir. Serve by spooning layers from top to bottom."],
      tip:"The no-stir rule is sacred in potjiekos. Each layer steams and cooks in sequence. Stirring breaks the layers and makes it a stew. Trust the process.",
      storage:"Fridge 3 days. Tastes better the next day." },

    { id:"pr_melktert", name:"Melktert", intl:"SA Milk Tart", emoji:"🥧", cuisine:"South African", time:60, serves:8,
      tags:["dessert","bakes","sweet","afrikaner","tart","milk tart"],
      ingredients:[
        // Pastry
        {n:"Butter (cold, cubed)",pp:15,u:"g"},
        {n:"Cake flour",pp:25,u:"g"},
        {n:"Icing sugar",pp:5,u:"g"},
        {n:"Egg yolk",pp:0.1,u:"egg"},
        {n:"Cold water",pp:5,u:"ml"},
        // Filling
        {n:"Full cream milk",pp:90,u:"ml"},
        {n:"Sugar",pp:15,u:"g"},
        {n:"Flour",pp:8,u:"g"},
        {n:"Cornflour",pp:5,u:"g"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Butter",pp:5,u:"g"},
        {n:"Vanilla essence",pp:0.5,u:"ml"},
        {n:"Cinnamon (for dusting)",pp:null,u:""},
      ],
      method:["PASTRY: Rub cold butter into flour and icing sugar until breadcrumbs. Add egg yolk and water. Press into tart tin. Refrigerate 20 min. Blind bake at 190°C for 15 min.","FILLING: Heat milk until just below boiling.","Whisk sugar, flour and cornflour together. Add eggs. Whisk smooth.","Slowly pour hot milk into egg mixture, whisking continuously.","Return to pot over low heat. Stir continuously until thick — about 5 min.","Remove from heat. Add butter and vanilla.","Pour into baked shell. Cool. Dust generously with cinnamon.","Refrigerate 2 hours before serving."],
      tip:"The filling thickens quickly once it starts — don't stop stirring or you'll get lumps. A perfectly set melktert should wobble slightly in the centre when the tin is shaken.",
      storage:"Fridge 3 days." },

    { id:"pr_peppermintcrisptart", name:"Peppermint Crisp Tart", emoji:"🍫", cuisine:"South African", time:20, serves:10,
      tags:["dessert","no bake","sweet","chocolate","cream","easy"],
      ingredients:[
        {n:"Tennis biscuits (or similar)",pp:25,u:"g"},
        {n:"Whipping cream",pp:60,u:"ml"},
        {n:"Caramel treat (tin)",pp:40,u:"g"},
        {n:"Peppermint Crisp chocolate bar (grated)",pp:15,u:"g"},
      ],
      method:["Whip cream to soft peaks — not stiff.","Fold caramel treat into whipped cream until combined and smooth.","Layer tennis biscuits in a dish in a single layer.","Spread caramel cream mixture over biscuits.","Repeat layers: biscuits, cream mixture, biscuits, cream mixture.","Top with grated Peppermint Crisp chocolate.","Refrigerate minimum 4 hours — overnight best. The biscuits soften to a cake-like texture."],
      tip:"South Africa's most iconic no-bake dessert. It MUST be made the day before — the biscuits need time to absorb the cream and soften. Grate the Peppermint Crisp while still cold from the fridge so it doesn't melt.",
      storage:"Fridge 3 days." },

    { id:"pr_chakalaka", name:"Chakalaka", emoji:"🫙", cuisine:"South African", time:30, serves:6,
      tags:["relish","spicy","veg","braai side","township"],
      ingredients:[
        {n:"Onion (finely diced)",pp:20,u:"g"},
        {n:"Garlic (minced)",pp:2,u:"g"},
        {n:"Green pepper (diced)",pp:20,u:"g"},
        {n:"Carrots (grated)",pp:30,u:"g"},
        {n:"Tinned baked beans",pp:50,u:"g"},
        {n:"Tinned tomatoes (chopped)",pp:40,u:"g"},
        {n:"Curry powder",pp:2,u:"g"},
        {n:"Paprika",pp:1,u:"g"},
        {n:"Chilli (optional)",pp:null,u:""},
        {n:"Oil",pp:5,u:"ml"},
        {n:"Salt",pp:null,u:""},
      ],
      method:["Heat oil. Fry onion until soft and beginning to colour.","Add garlic, green pepper and carrots. Cook 5 min.","Add curry powder and paprika. Stir and cook 1 min.","Add tinned tomatoes. Simmer 10 min.","Add baked beans. Simmer 5 min more. Season well.","Serve hot or cold as a braai side."],
      tip:"Every family has their own chakalaka recipe — this is the classic township version. Some add cabbage, some add more chilli. It improves overnight as flavours develop. Non-negotiable braai side.",
      storage:"Fridge 5 days. Freezer 2 months." },

    { id:"pr_bunny_chow", name:"Bunny Chow — Lamb Curry", emoji:"🍞", cuisine:"South African", time:90, serves:4,
      tags:["durban","curry","bread","street food","lamb"],
      ingredients:[
        {n:"Lamb shoulder (bone-in, chunked)",pp:200,u:"g"},
        {n:"Onion (finely diced)",pp:30,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Ginger (grated)",pp:4,u:"g"},
        {n:"Tinned tomatoes",pp:60,u:"g"},
        {n:"Potatoes (quartered)",pp:80,u:"g"},
        {n:"Durban curry powder (hot)",pp:5,u:"g"},
        {n:"Turmeric",pp:1,u:"g"},
        {n:"Cumin seeds",pp:1,u:"g"},
        {n:"Curry leaves (fresh or dried)",pp:null,u:""},
        {n:"Oil",pp:8,u:"ml"},
        {n:"White bread loaf (quarter loaf per person)",pp:1,u:"quarter loaf"},
      ],
      method:["Heat oil. Fry cumin seeds until they pop. Add onion — cook until deep golden, not just soft.","Add garlic, ginger and curry leaves. Fry 1 min.","Add curry powder and turmeric. Stir and cook 2 min — the spices must bloom in the oil.","Add lamb. Brown on all sides.","Add tomatoes. Reduce heat. Simmer covered 45 min.","Add potatoes. Cook 20 min until soft and curry is thick.","BUNNY: Cut the top off a quarter loaf. Hollow out the inside (keep bread for dipping). Fill with curry. Replace top.","Serve immediately with the scooped bread for dipping."],
      tip:"Authentic Durban bunny chow uses a quarter loaf of white bread — no rolls, no fancy bread. The bread is the bowl AND the utensil. Durban curry is hot — adjust curry powder to your heat tolerance.",
      storage:"Curry fridge 3 days. Assemble bunnies fresh only." },

    { id:"pr_rusks", name:"Buttermilk Rusks", emoji:"🍪", cuisine:"South African", time:480, serves:20,
      tags:["bakes","breakfast","dip","afrikaner","coffee"],
      ingredients:[
        {n:"Cake flour",pp:30,u:"g"},
        {n:"Sugar",pp:8,u:"g"},
        {n:"Baking powder",pp:0.5,u:"g"},
        {n:"Salt",pp:0.2,u:"g"},
        {n:"Butter (melted)",pp:10,u:"g"},
        {n:"Buttermilk",pp:25,u:"ml"},
        {n:"Egg",pp:0.1,u:"egg"},
      ],
      method:["Preheat oven to 180°C. Grease rusk pan or loaf tin.","Sift flour, sugar, baking powder and salt.","Mix buttermilk, melted butter and egg.","Combine wet and dry — mix until just combined. Do not overmix.","Press into pan. Bake 45 min until golden and a skewer comes out clean.","Cool completely. Cut into fingers.","DRYING: Place on oven racks. Set oven to 70°C. Dry overnight (8–10 hours) until completely dry and hard."],
      tip:"The drying step is what makes a rusk — biscotti's South African cousin. They must be completely dry to keep for months. Test by tapping — should sound hollow. Dip in coffee before eating.",
      storage:"Airtight container 2–3 months." },

    { id:"pr_stampkoring", name:"Stampkoring & Bacon", emoji:"🌾", cuisine:"South African", time:45, serves:4,
      tags:["starch","afrikaner","wheat","hearty","side"],
      ingredients:[
        {n:"Pearl wheat (stampkoring)",pp:80,u:"g"},
        {n:"Bacon (diced)",pp:30,u:"g"},
        {n:"Onion (diced)",pp:20,u:"g"},
        {n:"Butter",pp:8,u:"g"},
        {n:"Chicken stock",pp:120,u:"ml"},
        {n:"Salt and pepper",pp:null,u:""},
      ],
      method:["Rinse pearl wheat. Soak in cold water 30 min (optional but speeds cooking).","Fry bacon until crispy. Remove. Fry onion in bacon fat until golden.","Add drained wheat. Toast 2 min stirring.","Add stock. Bring to boil. Reduce to low simmer.","Cook covered 30–35 min stirring occasionally, adding more stock if needed.","Wheat should be tender but still have bite — like al dente pasta.","Add butter. Season. Top with crispy bacon."],
      tip:"Pearl wheat is one of South Africa's most underrated ingredients. It has a nutty, satisfying flavour and holds up beautifully. It's the starch that every Afrikaner grandmother makes for Sunday lunch.",
      storage:"Fridge 3 days." },

    { id:"pr_waterblommetjiebredie", name:"Waterblommetjie Bredie", emoji:"🌸", cuisine:"South African", time:120, serves:4,
      tags:["cape","lamb","stew","waterblommetjie","seasonal"],
      ingredients:[
        {n:"Lamb shoulder or rib (bone-in)",pp:200,u:"g"},
        {n:"Waterblommetjies (tinned or fresh)",pp:80,u:"g"},
        {n:"Onion (sliced)",pp:25,u:"g"},
        {n:"Potatoes (quartered)",pp:80,u:"g"},
        {n:"Sorrel or lemon juice",pp:10,u:"ml"},
        {n:"White wine",pp:30,u:"ml"},
        {n:"Water or light stock",pp:80,u:"ml"},
        {n:"Oil",pp:8,u:"ml"},
        {n:"Salt and pepper",pp:null,u:""},
      ],
      method:["Brown lamb in batches in hot oil — good colour is essential.","Fry onion in same pot until soft.","Return lamb. Add wine and stock. Season.","Simmer covered 45 min on low heat.","Add potatoes and waterblommetjies.","Cook 30 min until potatoes are soft and stew is rich.","Add sorrel or lemon juice. Adjust seasoning.","Serve with white rice."],
      tip:"Waterblommetjies (Cape pondweed flowers) are uniquely South African — available fresh in winter or tinned year-round. They taste like a cross between asparagus and artichoke. A Cape kitchen icon.",
      storage:"Fridge 3 days. Improves overnight." },

    { id:"pr_amarula_cheesecake", name:"Amarula Cheesecake", emoji:"🎂", cuisine:"South African", time:30, serves:10,
      tags:["dessert","no bake","cheesecake","amarula","cream"],
      ingredients:[
        {n:"Tennis biscuits (crushed)",pp:25,u:"g"},
        {n:"Butter (melted — for base)",pp:10,u:"g"},
        {n:"Cream cheese",pp:60,u:"g"},
        {n:"Whipping cream",pp:50,u:"ml"},
        {n:"Icing sugar",pp:15,u:"g"},
        {n:"Amarula liqueur",pp:15,u:"ml"},
        {n:"Gelatine (1 tsp dissolved in 2 tbsp hot water)",pp:1,u:"g"},
      ],
      method:["BASE: Mix crushed biscuits with melted butter. Press into springform tin. Refrigerate 20 min.","Dissolve gelatine in 2 tbsp hot water. Cool slightly.","Beat cream cheese and icing sugar until smooth.","Whip cream to soft peaks.","Add Amarula to cream cheese mixture. Mix well. Fold in whipped cream.","Add cooled gelatine. Mix quickly and thoroughly.","Pour over biscuit base. Refrigerate minimum 4 hours.","Drizzle extra Amarula over before serving."],
      tip:"Amarula is South Africa's gift to the world. The caramel and marula fruit notes make this cheesecake instantly recognisable as South African. Set the gelatine by refrigerating overnight for best results.",
      storage:"Fridge 3 days." },

    { id:"pr_snoek_pate", name:"Smoked Snoek Pâté", emoji:"🐟", cuisine:"South African", time:15, serves:8,
      tags:["starter","fish","cape","snoek","spread"],
      ingredients:[
        {n:"Smoked snoek (flaked, all bones removed)",pp:50,u:"g"},
        {n:"Cream cheese",pp:30,u:"g"},
        {n:"Butter (softened)",pp:10,u:"g"},
        {n:"Lemon juice",pp:5,u:"ml"},
        {n:"Chilli flakes (optional)",pp:null,u:""},
        {n:"Fresh parsley or chives",pp:3,u:"g"},
      ],
      method:["CRITICAL: Remove every single bone from the snoek. Feel through the flesh carefully.","Blend or mash snoek, cream cheese, butter and lemon juice until smooth.","Add chilli flakes if using. Season — snoek is already salty so taste first.","Fold in chopped herbs.","Refrigerate 30 min before serving.","Serve with roosterkoek, vetkoek or crackers."],
      tip:"Smoked snoek is one of the Cape's most distinctive flavours — oily, smoky, intense. The cream cheese softens the saltiness. This pâté is a non-negotiable at any Cape beach braai.",
      storage:"Fridge 3 days." },
  ],

  international:[
    // ── ITALIAN ──
    { id:"pr_spag_bol", name:"Spaghetti Bolognese", emoji:"🍝", cuisine:"Italian", time:60, serves:4,
      tags:["pasta","italian","mince","beef","dinner","family"],
      ingredients:[
        {n:"Spaghetti",pp:100,u:"g"},
        {n:"Beef mince",pp:100,u:"g"},
        {n:"Onion (finely diced)",pp:30,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Carrot (finely diced)",pp:20,u:"g"},
        {n:"Celery (finely diced)",pp:15,u:"g"},
        {n:"Tinned whole tomatoes",pp:100,u:"g"},
        {n:"Tomato paste",pp:15,u:"g"},
        {n:"Red wine",pp:30,u:"ml"},
        {n:"Beef stock",pp:30,u:"ml"},
        {n:"Olive oil",pp:8,u:"ml"},
        {n:"Dried oreganum",pp:1,u:"g"},
        {n:"Parmesan (grated, to serve)",pp:15,u:"g"},
      ],
      method:["Heat olive oil. Fry onion, carrot and celery over medium heat 8 min until soft — this is the soffritto base.","Add garlic. Cook 1 min.","Add mince. Break up and brown completely — this takes 10 min properly done.","Add tomato paste. Cook 2 min stirring.","Add wine. Let it bubble and reduce by half.","Add tinned tomatoes, stock and oreganum. Break up tomatoes.","Simmer uncovered 30 min until rich and thick.","Cook spaghetti in well-salted boiling water until al dente. Reserve 1 cup pasta water.","Toss pasta with sauce. Add pasta water if needed to loosen.","Serve topped with parmesan."],
      tip:"The soffritto (onion, carrot, celery cooked slowly) is the flavour foundation. Don't rush it. The sauce improves dramatically if made the day before.",
      storage:"Sauce fridge 4 days. Freezer 3 months." },

    { id:"pr_chicken_tikka", name:"Chicken Tikka Masala", emoji:"🍛", cuisine:"Indian", time:60, serves:4,
      tags:["curry","indian","chicken","creamy","dinner"],
      ingredients:[
        {n:"Chicken thighs (boneless, cubed)",pp:150,u:"g"},
        {n:"Plain yoghurt (for marinade)",pp:30,u:"g"},
        {n:"Garam masala",pp:2,u:"g"},
        {n:"Turmeric",pp:0.5,u:"g"},
        {n:"Ginger (grated)",pp:5,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Tinned tomatoes",pp:80,u:"g"},
        {n:"Cream",pp:40,u:"ml"},
        {n:"Onion (finely diced)",pp:30,u:"g"},
        {n:"Butter",pp:10,u:"g"},
        {n:"Tikka masala paste or powder",pp:8,u:"g"},
        {n:"Oil",pp:5,u:"ml"},
        {n:"Fresh coriander (to serve)",pp:5,u:"g"},
      ],
      method:["MARINADE: Mix yoghurt, half the ginger, half the garlic, garam masala and turmeric. Coat chicken. Marinate 30 min minimum.","Grill or pan-fry marinated chicken until charred at edges — this char is the tikka character.","SAUCE: Melt butter in pan. Fry onion 8 min until golden.","Add remaining garlic and ginger. Cook 1 min.","Add tikka paste. Cook 2 min.","Add tomatoes. Simmer 15 min until reduced.","Add cream. Simmer 5 min.","Add grilled chicken pieces. Simmer 5 min.","Serve with basmati rice. Top with coriander."],
      tip:"The char on the chicken from the grill is essential — it gives the smoky note that separates tikka masala from a plain curry. Don't skip marinating.",
      storage:"Fridge 3 days. Freezer 2 months." },

    { id:"pr_lasagne", name:"Classic Beef Lasagne", emoji:"🥘", cuisine:"Italian", time:90, serves:6,
      tags:["pasta","italian","beef","bakes","family","dinner"],
      ingredients:[
        {n:"Lasagne sheets (dried)",pp:30,u:"g"},
        {n:"Beef mince",pp:100,u:"g"},
        {n:"Onion (diced)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Tinned tomatoes",pp:80,u:"g"},
        {n:"Tomato paste",pp:10,u:"g"},
        {n:"Red wine",pp:20,u:"ml"},
        // Béchamel
        {n:"Butter (for béchamel)",pp:12,u:"g"},
        {n:"Flour",pp:12,u:"g"},
        {n:"Full cream milk",pp:120,u:"ml"},
        {n:"Nutmeg",pp:null,u:""},
        {n:"Mozzarella (grated)",pp:30,u:"g"},
        {n:"Parmesan (grated)",pp:15,u:"g"},
      ],
      method:["MEAT SAUCE: Brown mince with onion and garlic. Add tomato paste, wine and tinned tomatoes. Simmer 30 min until thick.","BÉCHAMEL: Melt butter. Add flour, stir 1 min. Gradually whisk in milk. Cook stirring until thick. Season with nutmeg, salt and pepper.","LAYER in baking dish: béchamel, lasagne sheets, meat sauce, béchamel, lasagne sheets, meat sauce, béchamel on top.","Top with mozzarella and parmesan.","Bake at 180°C for 35–40 min until bubbling and golden.","REST 15 min before cutting — essential for clean slices."],
      tip:"The resting time after baking is the most ignored step — cutting immediately means it falls apart. 15 min rest gives it time to set into proper slices.",
      storage:"Fridge 4 days. Freezer 3 months." },

    { id:"pr_butter_chicken", name:"Butter Chicken", emoji:"🍗", cuisine:"Indian", time:50, serves:4,
      tags:["curry","indian","chicken","mild","creamy","dinner"],
      ingredients:[
        {n:"Chicken thighs (boneless)",pp:150,u:"g"},
        {n:"Butter",pp:20,u:"g"},
        {n:"Onion (finely diced)",pp:30,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Ginger (grated)",pp:4,u:"g"},
        {n:"Tinned tomatoes",pp:100,u:"g"},
        {n:"Cream",pp:60,u:"ml"},
        {n:"Garam masala",pp:2,u:"g"},
        {n:"Cumin",pp:1,u:"g"},
        {n:"Coriander powder",pp:1,u:"g"},
        {n:"Turmeric",pp:0.5,u:"g"},
        {n:"Chilli powder (mild)",pp:1,u:"g"},
        {n:"Sugar",pp:3,u:"g"},
        {n:"Salt",pp:null,u:""},
      ],
      method:["Season and pan-fry chicken in butter until golden. Remove and set aside.","In same pan, fry onion in butter until very soft — 10 min.","Add garlic and ginger. Cook 2 min.","Add all spices. Stir and cook 2 min until fragrant.","Add tomatoes. Simmer 15 min.","Blend sauce smooth with stick blender.","Return to heat. Add cream and sugar. Simmer 5 min.","Add chicken. Simmer 10 min until cooked through.","Serve with basmati rice and naan."],
      tip:"Blending the sauce is what creates butter chicken's signature velvety texture. The sugar balances the tomato acidity — don't skip it.",
      storage:"Fridge 3 days. Freezer 2 months." },

    { id:"pr_pad_thai", name:"Pad Thai", emoji:"🍜", cuisine:"Thai", time:25, serves:2,
      tags:["thai","noodles","quick","prawn","stir fry"],
      ingredients:[
        {n:"Rice noodles (flat, 3mm)",pp:80,u:"g"},
        {n:"Prawns (shelled) or chicken strips",pp:80,u:"g"},
        {n:"Egg",pp:1,u:"egg"},
        {n:"Bean sprouts",pp:40,u:"g"},
        {n:"Spring onions (sliced)",pp:15,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Fish sauce",pp:10,u:"ml"},
        {n:"Tamarind paste",pp:10,u:"g"},
        {n:"Palm or brown sugar",pp:8,u:"g"},
        {n:"Soy sauce",pp:5,u:"ml"},
        {n:"Oil",pp:15,u:"ml"},
        {n:"Roasted peanuts (crushed)",pp:15,u:"g"},
        {n:"Lime (to serve)",pp:0.5,u:""},
      ],
      method:["Soak rice noodles in cold water 30 min. Drain.","Mix fish sauce, tamarind paste and sugar — this is your pad thai sauce.","Heat wok until smoking. Add oil.","Stir-fry prawns or chicken 2 min. Push to side.","Add garlic. Cook 30 sec.","Add noodles and sauce. Toss 2 min.","Push everything to side. Scramble egg in the space. Fold into noodles.","Add bean sprouts and spring onions. Toss 30 sec — keep crunch.","Serve topped with peanuts, lime and extra fish sauce."],
      tip:"Wok heat is everything. If your wok isn't smoking hot, you get steamed noodles not stir-fried. Cook in small batches if needed.",
      storage:"Best eaten immediately." },

    { id:"pr_beef_stew", name:"Classic Beef Stew", emoji:"🥘", cuisine:"International", time:150, serves:6,
      tags:["stew","beef","comfort","winter","dinner"],
      ingredients:[
        {n:"Beef chuck (cubed 4cm)",pp:150,u:"g"},
        {n:"Onion (roughly chopped)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Carrots (chunked)",pp:30,u:"g"},
        {n:"Celery (chunked)",pp:20,u:"g"},
        {n:"Potatoes (quartered)",pp:60,u:"g"},
        {n:"Tomato paste",pp:10,u:"g"},
        {n:"Beef stock",pp:80,u:"ml"},
        {n:"Red wine",pp:40,u:"ml"},
        {n:"Flour (for dusting)",pp:8,u:"g"},
        {n:"Thyme and bay leaves",pp:null,u:""},
        {n:"Oil",pp:10,u:"ml"},
      ],
      method:["Dust beef cubes in flour, salt and pepper.","Brown in hot oil in batches — don't crowd. Real colour = real flavour.","Fry onion and garlic in same pot.","Add tomato paste. Cook 2 min.","Add wine. Bubble and scrape up the brown bits.","Add stock, thyme and bay leaves. Return beef.","Simmer covered low heat 1.5 hours.","Add carrots, celery and potatoes. Cook 30 min until tender.","Adjust seasoning. Remove bay leaves."],
      tip:"Browning the beef in batches is the most important step — crowding the pan causes steaming not browning, and you lose all the flavour. The flour coating helps thicken the stew naturally.",
      storage:"Fridge 4 days. Freezer 3 months. Better next day." },

    { id:"pr_chicken_soup", name:"Chicken Noodle Soup", emoji:"🍲", cuisine:"International", time:90, serves:6,
      tags:["soup","chicken","comfort","winter","noodles","family"],
      ingredients:[
        {n:"Whole chicken or chicken pieces",pp:150,u:"g"},
        {n:"Onion (halved)",pp:25,u:"g"},
        {n:"Carrots (sliced)",pp:30,u:"g"},
        {n:"Celery (sliced)",pp:20,u:"g"},
        {n:"Garlic (whole cloves)",pp:3,u:"g"},
        {n:"Egg noodles or pasta",pp:30,u:"g"},
        {n:"Fresh parsley",pp:5,u:"g"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Peppercorns",pp:null,u:""},
        {n:"Salt",pp:null,u:""},
      ],
      method:["Place chicken in large pot. Cover with cold water. Add onion, garlic, bay leaves and peppercorns.","Bring to boil. Skim foam from surface.","Reduce to gentle simmer. Cook 1 hour.","Remove chicken. Strain broth — this is liquid gold.","Shred chicken meat. Discard skin and bones.","Return broth to pot. Add carrots and celery. Cook 15 min.","Add noodles. Cook until tender.","Return shredded chicken. Add parsley. Season generously."],
      tip:"Starting with cold water extracts maximum flavour from the bones. Skimming the foam in the first 10 minutes gives a clear, clean broth. This soup genuinely does make you feel better.",
      storage:"Fridge 4 days. Broth freezes 3 months." },

    { id:"pr_shakshuka", name:"Shakshuka", emoji:"🍳", cuisine:"Middle Eastern", time:30, serves:3,
      tags:["eggs","breakfast","brunch","middle eastern","tomato","vegetarian"],
      ingredients:[
        {n:"Eggs",pp:2,u:"egg"},
        {n:"Tinned tomatoes (whole peeled)",pp:120,u:"g"},
        {n:"Onion (diced)",pp:25,u:"g"},
        {n:"Red pepper (diced)",pp:30,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Cumin",pp:1,u:"g"},
        {n:"Paprika",pp:1,u:"g"},
        {n:"Chilli flakes",pp:0.5,u:"g"},
        {n:"Olive oil",pp:8,u:"ml"},
        {n:"Fresh parsley or coriander",pp:5,u:"g"},
        {n:"Feta cheese (crumbled, optional)",pp:15,u:"g"},
      ],
      method:["Heat olive oil in wide pan. Fry onion and red pepper 8 min until soft.","Add garlic, cumin, paprika and chilli. Cook 1 min.","Add tomatoes. Break up. Simmer 10 min until sauce thickens. Season well.","Make wells in the sauce. Crack eggs into the wells.","Cover. Cook 5–8 min until whites are set but yolks still runny.","Top with feta and parsley. Serve immediately from the pan with crusty bread."],
      tip:"The egg yolks should still be runny — they continue cooking in the residual heat. Remove from heat when whites are just set. Serve directly from the pan.",
      storage:"Best eaten immediately. Sauce alone fridge 3 days." },

    { id:"pr_roast_chicken", name:"Roast Chicken", emoji:"🍗", cuisine:"International", time:90, serves:4,
      tags:["roast","chicken","sunday lunch","family","classic"],
      ingredients:[
        {n:"Whole chicken",pp:400,u:"g"},
        {n:"Butter (softened)",pp:20,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Lemon (halved)",pp:0.25,u:""},
        {n:"Fresh thyme or rosemary",pp:5,u:"g"},
        {n:"Olive oil",pp:10,u:"ml"},
        {n:"Salt (coarse)",pp:null,u:""},
        {n:"Black pepper",pp:null,u:""},
        {n:"Onion (quartered — for roasting pan)",pp:25,u:"g"},
        {n:"Carrots (chunked — for roasting pan)",pp:30,u:"g"},
      ],
      method:["Preheat oven to 200°C.","Pat chicken completely dry — moisture is the enemy of crispy skin.","Mix butter with garlic and thyme. Gently loosen skin over breast. Push butter mixture under the skin.","Rub outside with olive oil. Season generously with salt and pepper inside and out.","Stuff cavity with lemon halves and remaining herbs.","Place on bed of onion and carrots in roasting tin.","Roast 20 min per 500g PLUS 20 min extra. Internal temperature 75°C at thickest part.","REST 15 min before carving — non-negotiable."],
      tip:"Completely dry skin before roasting. Butter under the skin bastes the breast from inside. Resting lets juices redistribute — cut too soon and they all run out.",
      storage:"Fridge 3 days." },

    { id:"pr_chocolate_cake", name:"Classic Chocolate Cake", emoji:"🎂", cuisine:"International", time:60, serves:10,
      tags:["dessert","cake","chocolate","bakes","birthday","sweet"],
      ingredients:[
        {n:"Cake flour",pp:20,u:"g"},
        {n:"Cocoa powder",pp:5,u:"g"},
        {n:"Sugar",pp:20,u:"g"},
        {n:"Baking powder",pp:0.4,u:"g"},
        {n:"Bicarbonate of soda",pp:0.2,u:"g"},
        {n:"Salt",pp:0.1,u:"g"},
        {n:"Egg",pp:0.2,u:"egg"},
        {n:"Buttermilk",pp:20,u:"ml"},
        {n:"Oil",pp:10,u:"ml"},
        {n:"Hot water or coffee",pp:20,u:"ml"},
        // Ganache
        {n:"Dark chocolate (70%)",pp:15,u:"g"},
        {n:"Cream (for ganache)",pp:10,u:"ml"},
      ],
      method:["Preheat oven to 180°C. Grease and flour two cake tins.","Sift dry ingredients together.","Whisk eggs, buttermilk and oil.","Combine wet and dry. Add hot water or coffee — batter will be thin. This is correct.","Divide between tins. Bake 30–35 min until skewer comes out clean.","Cool completely before frosting.","GANACHE: Heat cream until just boiling. Pour over chopped chocolate. Stir until smooth. Cool until spreadable.","Sandwich and frost with ganache."],
      tip:"Hot coffee intensifies the chocolate flavour dramatically without making it taste like coffee. The thin batter is correct — it bakes into a moist, dense cake.",
      storage:"Room temperature 3 days. Fridge 5 days." },
  ]
};


// ── MEAL SECTION RECIPES ──────────────────────────────────────────
// All amounts are pp (per person). Scale by servings.
// Tags: meal type + cuisine + key ingredients

const BREAKFAST_RECIPES = [
  { id:"br_scrambledeggs", name:"Creamy Scrambled Eggs", emoji:"🍳", time:10, cuisine:"Classic",
    tags:["eggs","quick","vegetarian","protein"],
    ingredients:[
      {n:"Large eggs",pp:2,u:"egg"},
      {n:"Butter",pp:8,u:"g"},
      {n:"Full cream milk or cream",pp:20,u:"ml"},
      {n:"Salt and white pepper",pp:null,u:""},
      {n:"Fresh chives (optional)",pp:3,u:"g"},
    ],
    method:["Whisk eggs and milk together. Season with salt and white pepper.","Melt butter in non-stick pan over VERY low heat — lower than you think.","Pour in egg mixture. Let it sit 20 seconds. Then gently fold with a spatula — don't stir.","Keep folding slowly every 20–30 seconds. Remove from heat when still slightly underdone.","Rest in pan 30 seconds — residual heat finishes them. Top with chives."],
    tip:"Low and slow is everything. The moment eggs touch high heat they become rubbery. Remove from heat slightly underdone — they finish cooking in the pan.",
    storage:"Eat immediately." },

  { id:"br_fullenglish", name:"Full SA Breakfast", emoji:"🍳", time:25, cuisine:"South African",
    tags:["eggs","bacon","sausage","hearty","weekend"],
    ingredients:[
      {n:"Bacon rashers",pp:2,u:""},
      {n:"Boerewors or breakfast sausage",pp:80,u:"g"},
      {n:"Eggs",pp:2,u:"egg"},
      {n:"Tomato (halved)",pp:0.5,u:""},
      {n:"Butter (for frying)",pp:10,u:"g"},
      {n:"Mushrooms (sliced)",pp:50,u:"g"},
      {n:"Toast (to serve)",pp:1,u:"slice"},
    ],
    method:["Fry bacon in dry pan until crispy. Remove. Keep warm.","Fry boerewors in same pan until cooked through. Remove.","Fry mushrooms in bacon fat until golden. Season.","Halve tomato. Fry cut-side down until caramelised.","Fry eggs in butter — sunny side up or to your liking.","Serve everything together with toast and strong tea or coffee."],
    tip:"The secret is cooking everything in the same pan — the bacon fat flavours everything else. Never wash the pan between items.",
    storage:"Eat immediately." },

  { id:"br_shakshuka", name:"Shakshuka", emoji:"🍅", time:30, cuisine:"Middle Eastern",
    tags:["eggs","vegetarian","spicy","brunch","tomato"],
    ingredients:[
      {n:"Eggs",pp:2,u:"egg"},
      {n:"Tinned chopped tomatoes",pp:120,u:"g"},
      {n:"Onion (diced)",pp:25,u:"g"},
      {n:"Red pepper (diced)",pp:30,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Cumin",pp:1,u:"g"},
      {n:"Paprika",pp:1,u:"g"},
      {n:"Chilli flakes",pp:0.5,u:"g"},
      {n:"Olive oil",pp:8,u:"ml"},
      {n:"Feta cheese (crumbled)",pp:15,u:"g"},
      {n:"Fresh parsley",pp:5,u:"g"},
    ],
    method:["Heat olive oil. Fry onion and pepper 8 min until soft.","Add garlic, cumin, paprika, chilli. Cook 1 min.","Add tomatoes. Simmer 10 min until thick. Season well.","Make wells in the sauce. Crack eggs into the wells.","Cover. Cook 5–8 min until whites are set but yolks still runny.","Top with feta and parsley. Serve from the pan with bread."],
    tip:"Remove from heat when whites are just set — yolks continue cooking in residual heat. Serve immediately from the pan.",
    storage:"Sauce keeps 3 days. Assemble fresh." },

  { id:"br_frenchtoast", name:"French Toast", emoji:"🍞", time:15, cuisine:"Classic",
    tags:["bread","sweet","eggs","quick","weekend"],
    ingredients:[
      {n:"Thick bread slices (brioche or white)",pp:2,u:"slice"},
      {n:"Eggs",pp:1,u:"egg"},
      {n:"Full cream milk",pp:30,u:"ml"},
      {n:"Vanilla essence",pp:1,u:"ml"},
      {n:"Cinnamon",pp:0.5,u:"g"},
      {n:"Sugar",pp:5,u:"g"},
      {n:"Butter (for frying)",pp:10,u:"g"},
      {n:"Maple syrup or honey (to serve)",pp:15,u:"ml"},
    ],
    method:["Whisk eggs, milk, vanilla, cinnamon and sugar together in a shallow dish.","Dip bread slices in egg mixture — 20 seconds per side. Let it soak in.","Melt butter in pan over medium heat.","Fry 2–3 min per side until deep golden and caramelised.","Serve with maple syrup, fresh fruit or a dusting of icing sugar."],
    tip:"Brioche makes the best French toast — its richness absorbs the custard beautifully. Day-old bread works better than fresh.",
    storage:"Eat immediately." },

  { id:"br_oatmeal", name:"Stovetop Oats with Banana & Honey", emoji:"🥣", time:10, cuisine:"Classic",
    tags:["oats","healthy","quick","vegetarian","fruit"],
    ingredients:[
      {n:"Rolled oats",pp:60,u:"g"},
      {n:"Full cream milk",pp:150,u:"ml"},
      {n:"Water",pp:50,u:"ml"},
      {n:"Ripe banana (sliced)",pp:0.5,u:""},
      {n:"Honey",pp:15,u:"ml"},
      {n:"Cinnamon",pp:0.5,u:"g"},
      {n:"Salt (pinch)",pp:null,u:""},
    ],
    method:["Combine oats, milk, water and salt in a small pot.","Cook over medium heat stirring regularly for 5–7 min until creamy.","The oats should be thick and creamy — add more milk if too stiff.","Serve topped with sliced banana, honey and cinnamon."],
    tip:"A pinch of salt is the secret — it balances the sweetness and brings out the oat flavour. Always add it.",
    storage:"Fridge 2 days. Add milk when reheating." },

  { id:"br_avodatoast", name:"Avocado Toast", emoji:"🥑", time:10, cuisine:"Modern",
    tags:["avocado","vegetarian","quick","healthy","brunch"],
    ingredients:[
      {n:"Sourdough or rye bread",pp:2,u:"slice"},
      {n:"Ripe avocado",pp:0.5,u:""},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"Chilli flakes",pp:0.5,u:"g"},
      {n:"Flaky sea salt",pp:null,u:""},
      {n:"Eggs (poached — optional)",pp:1,u:"egg"},
      {n:"Olive oil (drizzle)",pp:5,u:"ml"},
    ],
    method:["Toast bread until golden and crisp.","Mash avocado with lemon juice and a pinch of salt. Keep chunky — not a paste.","Spread on toast. Top with chilli flakes and olive oil drizzle.","Optional: top with a poached egg. Bring water to simmer, add a splash of vinegar, swirl, crack egg in. Cook 3 min."],
    tip:"The avocado must be perfectly ripe — press the skin gently, it should give slightly. Underripe avocado is hard and tasteless. Lemon juice prevents browning and adds brightness.",
    storage:"Assemble fresh only." },

  { id:"br_pancakes", name:"Fluffy Pancakes", emoji:"🥞", time:20, cuisine:"Classic",
    tags:["sweet","weekend","family","quick","batter"],
    ingredients:[
      {n:"Cake flour",pp:40,u:"g"},
      {n:"Baking powder",pp:1,u:"g"},
      {n:"Sugar",pp:8,u:"g"},
      {n:"Salt (pinch)",pp:null,u:""},
      {n:"Egg",pp:0.5,u:"egg"},
      {n:"Full cream milk",pp:60,u:"ml"},
      {n:"Butter (melted)",pp:8,u:"g"},
      {n:"Butter (for frying)",pp:5,u:"g"},
      {n:"Maple syrup or honey (to serve)",pp:20,u:"ml"},
    ],
    method:["Sift flour, baking powder, sugar and salt together.","Whisk egg, milk and melted butter. Add to dry ingredients. Mix until JUST combined — lumps are fine. Do not overmix.","Rest batter 5 min.","Heat pan over medium-low heat. Melt a small knob of butter.","Drop ladlefuls of batter. Cook until bubbles appear on top and edges look dry — about 2 min. Flip. Cook 1 min.","Serve with maple syrup, honey or fresh fruit."],
    tip:"Do not overmix — lumps in pancake batter are good. Overmixing develops gluten and makes pancakes tough. The resting time lets the baking powder activate.",
    storage:"Fridge 1 day. Reheat in toaster." },

  { id:"br_samaize", name:"SA Maize Porridge (Pap)", emoji:"🌽", time:20, cuisine:"South African",
    tags:["pap","maize","traditional","gluten free","hearty"],
    ingredients:[
      {n:"Fine maize meal",pp:60,u:"g"},
      {n:"Water",pp:200,u:"ml"},
      {n:"Full cream milk",pp:50,u:"ml"},
      {n:"Butter",pp:10,u:"g"},
      {n:"Salt (pinch)",pp:null,u:""},
      {n:"Sugar (optional)",pp:5,u:"g"},
    ],
    method:["Bring water and milk to a gentle boil.","Whisk in maize meal slowly and continuously — no lumps.","Reduce to low heat. Stir every 2 min for 12–15 min until thick and smooth.","Add butter and salt. Stir through.","Serve sweet (with sugar and more butter) or savoury (with eggs or tomato relish)."],
    tip:"The key is continuous whisking when adding the maize meal — add it in a slow stream while whisking hard. Once in, low and slow makes it smooth.",
    storage:"Fridge 2 days. Add milk when reheating." },

  { id:"br_eggs_benedict", name:"Eggs Benedict", emoji:"🍳", time:25, cuisine:"Classic",
    tags:["eggs","bacon","brunch","weekend","special"],
    ingredients:[
      {n:"English muffin or bread roll",pp:1,u:""},
      {n:"Bacon or ham (grilled)",pp:2,u:"slice"},
      {n:"Eggs (poached)",pp:2,u:"egg"},
      {n:"Butter (for hollandaise)",pp:40,u:"g"},
      {n:"Egg yolks (for hollandaise)",pp:1,u:"egg"},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"White wine vinegar (for poaching)",pp:5,u:"ml"},
    ],
    method:["HOLLANDAISE: Melt butter. Whisk egg yolks and lemon juice in a bowl over simmering water (double boiler) until pale. Slowly drizzle in melted butter whisking constantly. Season.","POACHED EGGS: Bring water to simmer. Add vinegar. Swirl water. Crack egg into a cup, slide into swirling water. Cook 3 min. Remove with slotted spoon.","Toast muffin. Top with bacon, then poached egg, then hollandaise.","Serve immediately."],
    tip:"Hollandaise waits for no one — serve immediately. Have everything ready before you start poaching eggs.",
    storage:"Eat immediately." },

  { id:"br_muesli", name:"Toasted Muesli with Yoghurt", emoji:"🥣", time:25, cuisine:"Classic",
    tags:["healthy","oats","fruit","vegetarian","prep ahead"],
    ingredients:[
      {n:"Rolled oats",pp:50,u:"g"},
      {n:"Mixed nuts (roughly chopped)",pp:20,u:"g"},
      {n:"Sunflower or pumpkin seeds",pp:10,u:"g"},
      {n:"Honey",pp:15,u:"ml"},
      {n:"Coconut oil (melted)",pp:8,u:"ml"},
      {n:"Cinnamon",pp:0.5,u:"g"},
      {n:"Dried cranberries or raisins",pp:15,u:"g"},
      {n:"Plain Greek yoghurt (to serve)",pp:80,u:"g"},
      {n:"Fresh fruit (to serve)",pp:80,u:"g"},
    ],
    method:["Preheat oven to 160°C.","Mix oats, nuts and seeds with honey, coconut oil and cinnamon.","Spread on baking tray. Bake 20 min, stirring once, until golden.","Add dried fruit when out of the oven. Cool completely.","Serve with Greek yoghurt and fresh fruit."],
    tip:"Make a big batch — it keeps for 2 weeks in an airtight jar. The lower oven temperature toasts slowly without burning. Don't skip stirring halfway through.",
    storage:"Airtight jar 2 weeks." },

  { id:"br_smoothiebowl", name:"Smoothie Bowl", emoji:"🍓", time:10, cuisine:"Modern",
    tags:["healthy","fruit","vegetarian","quick","colourful"],
    ingredients:[
      {n:"Frozen banana",pp:1,u:""},
      {n:"Frozen mixed berries",pp:80,u:"g"},
      {n:"Plain yoghurt",pp:60,u:"g"},
      {n:"Milk or coconut milk",pp:30,u:"ml"},
      {n:"Granola or toasted oats (topping)",pp:30,u:"g"},
      {n:"Fresh fruit (topping)",pp:50,u:"g"},
      {n:"Honey (drizzle)",pp:10,u:"ml"},
      {n:"Chia seeds (optional)",pp:5,u:"g"},
    ],
    method:["Blend frozen banana, frozen berries, yoghurt and milk until thick and smooth. It should be thicker than a drinkable smoothie.","Pour into a bowl — the mixture should hold a spoon upright.","Top with granola, fresh fruit, honey and chia seeds.","Eat immediately before it melts."],
    tip:"The frozen fruit is essential — fresh fruit makes it too thin and liquid. Blend as little as possible to keep it thick.",
    storage:"Eat immediately." },

  { id:"br_vetkoek_egg", name:"Vetkoek with Egg & Cheese", emoji:"🫓", time:45, cuisine:"South African",
    tags:["bread","fried","eggs","traditional","hearty"],
    ingredients:[
      {n:"Bread flour",pp:60,u:"g"},
      {n:"Instant yeast",pp:1,u:"g"},
      {n:"Salt",pp:0.5,u:"g"},
      {n:"Sugar",pp:2,u:"g"},
      {n:"Lukewarm water",pp:40,u:"ml"},
      {n:"Oil for deep frying",pp:null,u:""},
      {n:"Eggs (fried or scrambled)",pp:2,u:"egg"},
      {n:"Cheddar cheese (grated)",pp:30,u:"g"},
    ],
    method:["Mix flour, yeast, salt, sugar. Add water gradually to form soft dough. Knead 5 min.","Cover and prove 30 min.","Divide into balls. Flatten slightly.","Fry at 170°C — 4 min per side until deep golden.","Split open while hot. Fill with fried egg and melted cheese."],
    tip:"SA's ultimate breakfast street food. Oil temperature is critical — too hot and they're raw inside. Test with a small piece of dough first.",
    storage:"Eat fresh. Dough can be proved overnight in fridge." },
];

const LIGHTLUNCH_RECIPES = [
  { id:"ll_chickenwrap", name:"Chicken & Avo Wrap", emoji:"🌯", time:15, cuisine:"Modern",
    tags:["chicken","avocado","quick","healthy","wrap"],
    ingredients:[
      {n:"Large flour tortilla",pp:1,u:""},
      {n:"Cooked chicken breast (shredded or sliced)",pp:100,u:"g"},
      {n:"Ripe avocado (sliced)",pp:0.5,u:""},
      {n:"Baby spinach or lettuce",pp:20,u:"g"},
      {n:"Cherry tomatoes (halved)",pp:40,u:"g"},
      {n:"Cream cheese or mayo",pp:20,u:"g"},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"Salt and pepper",pp:null,u:""},
    ],
    method:["Warm tortilla in dry pan 30 seconds per side.","Spread cream cheese over tortilla.","Layer spinach, chicken, avocado and tomatoes.","Squeeze lemon juice over. Season.","Fold sides in, roll tightly. Cut diagonally."],
    tip:"Warm the tortilla before filling — it becomes pliable and won't crack when rolling. Roll tightly so fillings don't fall out.",
    storage:"Assemble fresh. Filling keeps 2 days in fridge." },

  { id:"ll_greeksalad", name:"Greek Salad", emoji:"🥗", time:10, cuisine:"Greek",
    tags:["salad","vegetarian","quick","feta","fresh","no cook"],
    ingredients:[
      {n:"English cucumber (chunked)",pp:80,u:"g"},
      {n:"Ripe tomatoes (chunked)",pp:100,u:"g"},
      {n:"Red onion (thinly sliced)",pp:20,u:"g"},
      {n:"Kalamata olives",pp:20,u:"g"},
      {n:"Feta cheese (chunked)",pp:40,u:"g"},
      {n:"Extra virgin olive oil",pp:15,u:"ml"},
      {n:"Red wine vinegar",pp:5,u:"ml"},
      {n:"Dried oreganum",pp:0.5,u:"g"},
      {n:"Salt and pepper",pp:null,u:""},
    ],
    method:["Combine cucumber, tomatoes, red onion and olives.","Drizzle with olive oil and vinegar. Season with oreganum, salt and pepper.","Toss gently.","Place feta on top — do not mix it in or it crumbles too much.","Rest 5 min before serving so vegetables absorb the dressing."],
    tip:"The feta goes on top, not mixed in. Resting 5 min lets the salt draw juices from the tomatoes and cucumber which becomes the dressing.",
    storage:"Fridge 1 day (gets watery after that)." },

  { id:"ll_tomatosoup", name:"Roasted Tomato Soup", emoji:"🍅", time:50, cuisine:"Classic",
    tags:["soup","vegetarian","warm","comfort","tomato"],
    ingredients:[
      {n:"Ripe tomatoes (halved)",pp:200,u:"g"},
      {n:"Onion (quartered)",pp:30,u:"g"},
      {n:"Garlic cloves (whole)",pp:3,u:"g"},
      {n:"Olive oil",pp:15,u:"ml"},
      {n:"Vegetable stock",pp:100,u:"ml"},
      {n:"Fresh basil",pp:5,u:"g"},
      {n:"Cream (optional)",pp:30,u:"ml"},
      {n:"Sugar (pinch)",pp:2,u:"g"},
      {n:"Salt and pepper",pp:null,u:""},
    ],
    method:["Preheat oven to 200°C.","Place tomatoes, onion and garlic on a baking tray. Drizzle with olive oil. Season.","Roast 30 min until caramelised and slightly charred at edges.","Transfer to blender with stock and basil. Blend smooth.","Return to pot. Add cream if using. Heat through. Adjust seasoning with salt, pepper and a pinch of sugar.","Serve with crusty bread."],
    tip:"Roasting is what separates great tomato soup from mediocre — it concentrates the flavour and adds a smoky depth that you can't get from tinned tomatoes.",
    storage:"Fridge 4 days. Freezer 3 months." },

  { id:"ll_caesarsalad", name:"Caesar Salad", emoji:"🥬", time:15, cuisine:"Classic",
    tags:["salad","chicken","classic","quick","lunch"],
    ingredients:[
      {n:"Cos or romaine lettuce (torn)",pp:80,u:"g"},
      {n:"Cooked chicken breast (sliced)",pp:80,u:"g"},
      {n:"Parmesan (shaved or grated)",pp:20,u:"g"},
      {n:"Bread (torn, fried in olive oil — croutons)",pp:30,u:"g"},
      {n:"Anchovy fillets (optional)",pp:2,u:""},
      {n:"Mayonnaise",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:1,u:"g"},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"Worcestershire sauce",pp:3,u:"ml"},
      {n:"Olive oil",pp:5,u:"ml"},
    ],
    method:["DRESSING: Whisk mayo, garlic, lemon juice and Worcestershire sauce. Add a little olive oil. Season.","CROUTONS: Tear bread into chunks. Fry in olive oil until golden and crispy.","Toss lettuce with dressing — coat every leaf.","Top with chicken, parmesan and croutons.","Serve immediately — dressed salad wilts quickly."],
    tip:"Dress the salad right before serving. The anchovy in the dressing is traditional and adds depth without tasting fishy — don't skip it.",
    storage:"Undressed salad fridge 1 day. Dress fresh." },

  { id:"ll_lentilsoup", name:"Red Lentil Soup", emoji:"🍲", time:35, cuisine:"Middle Eastern",
    tags:["soup","vegan","healthy","lentils","quick","hearty"],
    ingredients:[
      {n:"Red lentils (rinsed)",pp:60,u:"g"},
      {n:"Onion (diced)",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Carrot (diced)",pp:30,u:"g"},
      {n:"Tinned tomatoes",pp:60,u:"g"},
      {n:"Vegetable stock",pp:200,u:"ml"},
      {n:"Cumin",pp:1,u:"g"},
      {n:"Turmeric",pp:0.5,u:"g"},
      {n:"Smoked paprika",pp:0.5,u:"g"},
      {n:"Olive oil",pp:8,u:"ml"},
      {n:"Lemon juice",pp:8,u:"ml"},
    ],
    method:["Fry onion, garlic and carrot in olive oil 5 min.","Add cumin, turmeric and paprika. Cook 1 min.","Add rinsed lentils, tomatoes and stock. Bring to boil.","Simmer uncovered 20 min until lentils are completely soft.","Blend partially — half smooth, half chunky for texture.","Add lemon juice. Season. Serve with bread."],
    tip:"Red lentils are the only lentil that needs no soaking and cooks in 20 min. The lemon juice at the end is essential — it brightens the whole soup.",
    storage:"Fridge 4 days. Freezer 3 months." },

  { id:"ll_nicoise", name:"Tuna Niçoise Salad", emoji:"🐟", time:20, cuisine:"French",
    tags:["salad","tuna","protein","healthy","french"],
    ingredients:[
      {n:"Tinned tuna (in olive oil, drained)",pp:80,u:"g"},
      {n:"Baby potatoes (boiled, halved)",pp:80,u:"g"},
      {n:"Green beans (blanched)",pp:50,u:"g"},
      {n:"Cherry tomatoes (halved)",pp:60,u:"g"},
      {n:"Eggs (hard boiled, quartered)",pp:1,u:"egg"},
      {n:"Kalamata olives",pp:15,u:"g"},
      {n:"Olive oil",pp:15,u:"ml"},
      {n:"Dijon mustard",pp:5,u:"g"},
      {n:"Red wine vinegar",pp:5,u:"ml"},
      {n:"Capers",pp:5,u:"g"},
    ],
    method:["Boil potatoes in salted water until tender — 12 min. Drain and cool.","Blanch green beans 2 min in boiling water. Plunge into ice water. Drain.","Hard boil eggs 10 min. Cool in ice water. Peel and quarter.","DRESSING: Whisk olive oil, mustard, vinegar. Season.","Arrange all elements on a platter. Drizzle with dressing."],
    tip:"Arrange elements separately — don't toss. Each component should be identifiable. Tuna in olive oil is far superior to brine for this salad.",
    storage:"Undressed keeps 1 day. Dress fresh." },

  { id:"ll_clubsandwich", name:"Classic Club Sandwich", emoji:"🥪", time:15, cuisine:"Classic",
    tags:["sandwich","chicken","bacon","quick","hearty"],
    ingredients:[
      {n:"White or wholewheat bread",pp:3,u:"slice"},
      {n:"Cooked chicken breast (sliced)",pp:60,u:"g"},
      {n:"Bacon (crispy)",pp:2,u:"slice"},
      {n:"Tomato (sliced)",pp:40,u:"g"},
      {n:"Lettuce",pp:15,u:"g"},
      {n:"Mayonnaise",pp:20,u:"g"},
      {n:"Butter (softened)",pp:8,u:"g"},
    ],
    method:["Toast all bread slices until golden.","Spread butter on first slice. Add lettuce and tomato.","Spread mayo on second slice. Add chicken.","Spread mayo on third slice. Add bacon.","Stack: bread, lettuce/tomato, bread, chicken, bread, bacon — in that order.","Secure with toothpicks. Cut diagonally into 4 triangles."],
    tip:"Toast is non-negotiable for a club sandwich — untoasted bread collapses under the triple layer. Cut on the diagonal so you can see all the beautiful layers.",
    storage:"Assemble fresh." },

  { id:"ll_minestrone", name:"Minestrone Soup", emoji:"🍲", time:45, cuisine:"Italian",
    tags:["soup","vegetable","italian","hearty","healthy"],
    ingredients:[
      {n:"Onion (diced)",pp:25,u:"g"},
      {n:"Carrot (diced)",pp:30,u:"g"},
      {n:"Celery (diced)",pp:20,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Tinned tomatoes",pp:80,u:"g"},
      {n:"Vegetable stock",pp:200,u:"ml"},
      {n:"Tinned cannellini beans (drained)",pp:50,u:"g"},
      {n:"Small pasta (macaroni or stars)",pp:30,u:"g"},
      {n:"Zucchini (diced)",pp:40,u:"g"},
      {n:"Baby spinach",pp:20,u:"g"},
      {n:"Olive oil",pp:8,u:"ml"},
      {n:"Parmesan rind (optional)",pp:null,u:""},
      {n:"Dried oreganum",pp:0.5,u:"g"},
    ],
    method:["Heat olive oil. Fry onion, carrot and celery 8 min until soft — the soffritto base.","Add garlic and oreganum. Cook 1 min.","Add tomatoes and stock. Add parmesan rind if using.","Simmer 15 min.","Add beans, pasta and zucchini. Cook 10 min until pasta is tender.","Add spinach in last 2 min. Remove parmesan rind. Season."],
    tip:"A parmesan rind simmered in the soup adds incredible depth — save your parmesan rinds in the freezer. The soup is even better the next day.",
    storage:"Fridge 4 days (pasta absorbs liquid — add stock when reheating)." },

  { id:"ll_hummus_platter", name:"Hummus & Veggie Platter", emoji:"🥙", time:15, cuisine:"Middle Eastern",
    tags:["vegetarian","dip","healthy","no cook","sharing"],
    ingredients:[
      {n:"Tinned chickpeas (drained, rinsed)",pp:80,u:"g"},
      {n:"Tahini",pp:20,u:"g"},
      {n:"Lemon juice",pp:10,u:"ml"},
      {n:"Garlic (minced)",pp:1,u:"g"},
      {n:"Olive oil",pp:10,u:"ml"},
      {n:"Cumin",pp:0.5,u:"g"},
      {n:"Paprika (for serving)",pp:null,u:""},
      {n:"Carrot sticks",pp:40,u:"g"},
      {n:"Cucumber sticks",pp:40,u:"g"},
      {n:"Pita bread or flatbread",pp:1,u:""},
    ],
    method:["Blend chickpeas, tahini, lemon juice, garlic and most of the olive oil until very smooth — at least 3 min. Add ice water 1 tbsp at a time to reach creamy consistency.","Season well. Taste — it should be tangy and nutty.","Spread on plate. Make a well in the centre. Drizzle olive oil into the well. Dust with paprika.","Serve with carrot, cucumber and warmed pita."],
    tip:"The secret to smooth hummus is blending for much longer than you think — 3 full minutes with ice water added gradually. Warm chickpeas blend smoother.",
    storage:"Fridge 5 days." },

  { id:"ll_quiche", name:"Quiche Lorraine", emoji:"🥧", time:60, cuisine:"French",
    tags:["eggs","bacon","bake","french","lunch"],
    ingredients:[
      {n:"Shortcrust pastry (store-bought or homemade)",pp:60,u:"g"},
      {n:"Bacon (diced)",pp:40,u:"g"},
      {n:"Onion (finely diced)",pp:20,u:"g"},
      {n:"Eggs",pp:1,u:"egg"},
      {n:"Cream",pp:60,u:"ml"},
      {n:"Gruyère or cheddar (grated)",pp:25,u:"g"},
      {n:"Butter",pp:5,u:"g"},
      {n:"Salt, pepper, nutmeg",pp:null,u:""},
    ],
    method:["Line tart tin with pastry. Refrigerate 20 min. Blind bake at 190°C for 15 min.","Fry bacon and onion in butter until cooked. Cool slightly.","Whisk eggs and cream. Season with salt, pepper and nutmeg.","Scatter bacon and onion in pastry case. Pour over egg mixture. Top with cheese.","Bake at 170°C for 25–30 min until just set — it should wobble slightly in the centre.","Rest 10 min before slicing."],
    tip:"The quiche must come out of the oven while still slightly wobbly — it firms up as it rests. Overbaked quiche is rubbery.",
    storage:"Fridge 3 days. Serve at room temperature." },
];

const SUPPER_RECIPES = [
  { id:"su_spagbol", name:"Spaghetti Bolognese", emoji:"🍝", time:60, cuisine:"Italian",
    tags:["pasta","beef","family","classic","italian"],
    ingredients:[
      {n:"Spaghetti",pp:100,u:"g"},
      {n:"Beef mince",pp:100,u:"g"},
      {n:"Onion (finely diced)",pp:30,u:"g"},
      {n:"Garlic (minced)",pp:4,u:"g"},
      {n:"Carrot (finely diced)",pp:20,u:"g"},
      {n:"Celery (finely diced)",pp:15,u:"g"},
      {n:"Tinned whole tomatoes",pp:100,u:"g"},
      {n:"Tomato paste",pp:15,u:"g"},
      {n:"Red wine",pp:30,u:"ml"},
      {n:"Beef stock",pp:30,u:"ml"},
      {n:"Olive oil",pp:8,u:"ml"},
      {n:"Dried oreganum",pp:1,u:"g"},
      {n:"Parmesan (grated)",pp:15,u:"g"},
    ],
    method:["Heat olive oil. Fry onion, carrot and celery 8 min — the soffritto. Don't rush.","Add garlic. Cook 1 min. Add mince — brown completely. Takes 10 min properly done.","Add tomato paste. Cook 2 min stirring. Add wine. Reduce by half.","Add tomatoes, stock and oreganum. Simmer uncovered 30 min until rich and thick.","Cook spaghetti in well-salted water until al dente. Reserve 1 cup pasta water.","Toss pasta with sauce. Add pasta water to loosen if needed. Top with parmesan."],
    tip:"The soffritto and properly browning the mince are the two most important steps. Don't combine the pasta and sauce too early — do it just before serving.",
    storage:"Sauce fridge 4 days. Freezer 3 months." },

  { id:"su_chickencurry", name:"SA Chicken Curry", emoji:"🍛", time:50, cuisine:"South African",
    tags:["curry","chicken","family","spicy","south african"],
    ingredients:[
      {n:"Chicken pieces (bone-in thighs or drumsticks)",pp:180,u:"g"},
      {n:"Onion (finely diced)",pp:30,u:"g"},
      {n:"Garlic (minced)",pp:4,u:"g"},
      {n:"Ginger (grated)",pp:4,u:"g"},
      {n:"Curry powder (medium)",pp:5,u:"g"},
      {n:"Turmeric",pp:1,u:"g"},
      {n:"Tinned tomatoes",pp:80,u:"g"},
      {n:"Potatoes (quartered)",pp:80,u:"g"},
      {n:"Curry leaves",pp:null,u:""},
      {n:"Oil",pp:8,u:"ml"},
      {n:"Salt",pp:null,u:""},
    ],
    method:["Heat oil. Fry onion until deep golden — about 10 min. This is the flavour base.","Add garlic, ginger and curry leaves. Fry 1 min.","Add curry powder and turmeric. Stir and cook 2 min — spices must bloom in oil.","Add chicken. Brown on all sides.","Add tomatoes. Season. Simmer covered 20 min.","Add potatoes. Cook uncovered 20 min until potatoes are soft and sauce is thick.","Serve with rice and roti."],
    tip:"Frying the onions until truly golden (not just soft) is what gives SA curry its characteristic depth. The spices must fry in oil — not steam — to bloom properly.",
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"su_beefstew", name:"Hearty Beef Stew", emoji:"🥘", time:150, cuisine:"Classic",
    tags:["beef","stew","winter","comfort","slow cook"],
    ingredients:[
      {n:"Beef chuck (cubed 4cm)",pp:150,u:"g"},
      {n:"Onion (roughly chopped)",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Carrots (chunked)",pp:40,u:"g"},
      {n:"Celery (chunked)",pp:20,u:"g"},
      {n:"Potatoes (quartered)",pp:80,u:"g"},
      {n:"Tomato paste",pp:10,u:"g"},
      {n:"Beef stock",pp:100,u:"ml"},
      {n:"Red wine",pp:40,u:"ml"},
      {n:"Flour (for dusting)",pp:8,u:"g"},
      {n:"Thyme and bay leaves",pp:null,u:""},
      {n:"Oil",pp:10,u:"ml"},
    ],
    method:["Dust beef cubes in flour, salt and pepper. Brown in batches in hot oil — real colour needed.","Fry onion and garlic in same pot.","Add tomato paste. Cook 2 min. Add wine — scrape up all brown bits.","Add stock, thyme and bay leaves. Return beef. Simmer covered low heat 1.5 hours.","Add carrots, celery and potatoes. Cook uncovered 30 min until tender and sauce thickens.","Remove bay leaves. Adjust seasoning."],
    tip:"Browning beef in small batches without crowding is the single most important step. Crowded meat steams instead of browns and you lose all the flavour.",
    storage:"Fridge 4 days. Freezer 3 months. Better next day." },

  { id:"su_lasagne", name:"Classic Beef Lasagne", emoji:"🥘", time:90, cuisine:"Italian",
    tags:["pasta","beef","italian","bake","family"],
    ingredients:[
      {n:"Lasagne sheets (dried)",pp:30,u:"g"},
      {n:"Beef mince",pp:100,u:"g"},
      {n:"Onion (diced)",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Tinned tomatoes",pp:80,u:"g"},
      {n:"Tomato paste",pp:10,u:"g"},
      {n:"Red wine",pp:20,u:"ml"},
      {n:"Butter (for béchamel)",pp:12,u:"g"},
      {n:"Flour (for béchamel)",pp:12,u:"g"},
      {n:"Full cream milk",pp:120,u:"ml"},
      {n:"Mozzarella (grated)",pp:30,u:"g"},
      {n:"Parmesan (grated)",pp:15,u:"g"},
      {n:"Nutmeg",pp:null,u:""},
    ],
    method:["MEAT SAUCE: Brown mince with onion and garlic. Add tomato paste, wine and tomatoes. Simmer 30 min until thick.","BÉCHAMEL: Melt butter. Add flour, stir 1 min. Whisk in milk gradually. Stir until thick. Season with nutmeg.","LAYER: béchamel, lasagne sheets, meat sauce, béchamel, lasagne sheets, meat sauce, béchamel on top.","Top with mozzarella and parmesan. Bake at 180°C for 35–40 min until bubbling and golden.","REST 15 min before cutting — essential."],
    tip:"The 15 min rest after baking is non-negotiable — cutting immediately makes it collapse. It needs time to set into proper slices.",
    storage:"Fridge 4 days. Freezer 3 months." },

  { id:"su_roastchicken", name:"Roast Chicken", emoji:"🍗", time:90, cuisine:"Classic",
    tags:["chicken","roast","sunday","family","classic"],
    ingredients:[
      {n:"Whole chicken",pp:400,u:"g"},
      {n:"Butter (softened)",pp:20,u:"g"},
      {n:"Garlic (minced)",pp:4,u:"g"},
      {n:"Fresh thyme or rosemary",pp:5,u:"g"},
      {n:"Lemon (halved)",pp:0.25,u:""},
      {n:"Olive oil",pp:10,u:"ml"},
      {n:"Onion (quartered — for pan)",pp:25,u:"g"},
      {n:"Carrots (chunked — for pan)",pp:30,u:"g"},
    ],
    method:["Preheat oven to 200°C. Pat chicken completely dry with paper towel.","Mix butter, garlic and thyme. Push under skin over breast. Rub outside with olive oil. Season generously.","Stuff cavity with lemon and remaining herbs. Place on bed of onion and carrots.","Roast 20 min per 500g PLUS 20 min extra. Internal temp 75°C.","REST 15 min before carving — juices redistribute.","Deglaze roasting pan with a little water for the best gravy."],
    tip:"Completely dry skin before roasting — moisture is the enemy of crispy skin. Butter under the skin bastes the breast from inside while roasting.",
    storage:"Fridge 3 days." },

  { id:"su_butterchicken", name:"Butter Chicken", emoji:"🍗", time:50, cuisine:"Indian",
    tags:["curry","chicken","mild","creamy","indian","family"],
    ingredients:[
      {n:"Chicken thighs (boneless)",pp:150,u:"g"},
      {n:"Butter",pp:20,u:"g"},
      {n:"Onion (finely diced)",pp:30,u:"g"},
      {n:"Garlic (minced)",pp:4,u:"g"},
      {n:"Ginger (grated)",pp:4,u:"g"},
      {n:"Tinned tomatoes",pp:100,u:"g"},
      {n:"Cream",pp:60,u:"ml"},
      {n:"Garam masala",pp:2,u:"g"},
      {n:"Cumin",pp:1,u:"g"},
      {n:"Coriander powder",pp:1,u:"g"},
      {n:"Turmeric",pp:0.5,u:"g"},
      {n:"Chilli powder (mild)",pp:1,u:"g"},
      {n:"Sugar",pp:3,u:"g"},
    ],
    method:["Pan-fry chicken in butter until golden. Remove.","Fry onion in butter until very soft — 10 min. Add garlic and ginger. Cook 2 min.","Add all spices. Stir and cook 2 min until fragrant.","Add tomatoes. Simmer 15 min. Blend sauce smooth.","Return to heat. Add cream and sugar. Simmer 5 min. Add chicken. Simmer 10 min.","Serve with basmati rice and naan."],
    tip:"Blending the sauce is what creates butter chicken's signature velvety texture. The sugar balances the tomato acidity.",
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"su_frikkadels", name:"Frikkadels in Tomato Sauce", emoji:"🍖", time:45, cuisine:"South African",
    tags:["mince","meatballs","south african","family","comfort"],
    ingredients:[
      {n:"Beef mince",pp:120,u:"g"},
      {n:"Onion (very finely grated)",pp:20,u:"g"},
      {n:"White bread (soaked in milk)",pp:25,u:"g"},
      {n:"Milk (for soaking)",pp:30,u:"ml"},
      {n:"Egg",pp:0.25,u:"egg"},
      {n:"Worcestershire sauce",pp:3,u:"ml"},
      {n:"Fresh parsley (chopped)",pp:5,u:"g"},
      {n:"Tinned tomatoes (for sauce)",pp:100,u:"g"},
      {n:"Onion (for sauce, diced)",pp:20,u:"g"},
      {n:"Garlic (for sauce)",pp:2,u:"g"},
      {n:"Oil",pp:10,u:"ml"},
    ],
    method:["Squeeze bread dry. Mix with mince, grated onion, egg, Worcestershire, parsley. Shape into balls.","Brown frikkadels in oil — 4 min per side. Remove.","Fry diced onion and garlic in same pan. Add tomatoes. Simmer 10 min.","Return frikkadels to sauce. Simmer covered 15 min.","Serve with pap, rice or mashed potato."],
    tip:"Grated onion is essential — it disappears into the meat giving moisture and flavour without chunks. Soaked bread is what makes them light.",
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"su_padthai", name:"Pad Thai", emoji:"🍜", time:25, cuisine:"Thai",
    tags:["noodles","thai","quick","prawn","stir fry"],
    ingredients:[
      {n:"Rice noodles (flat, 3mm)",pp:80,u:"g"},
      {n:"Prawns or chicken strips",pp:80,u:"g"},
      {n:"Egg",pp:1,u:"egg"},
      {n:"Bean sprouts",pp:40,u:"g"},
      {n:"Spring onions (sliced)",pp:15,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Fish sauce",pp:10,u:"ml"},
      {n:"Tamarind paste",pp:10,u:"g"},
      {n:"Brown sugar",pp:8,u:"g"},
      {n:"Oil",pp:15,u:"ml"},
      {n:"Roasted peanuts (crushed)",pp:15,u:"g"},
      {n:"Lime (to serve)",pp:0.5,u:""},
    ],
    method:["Soak rice noodles in cold water 30 min. Drain.","Mix fish sauce, tamarind and sugar — your pad thai sauce.","Heat wok until smoking. Add oil. Stir-fry protein 2 min. Push to side.","Add garlic 30 sec. Add noodles and sauce. Toss 2 min.","Push everything aside. Scramble egg. Fold into noodles.","Add bean sprouts and spring onions. Toss 30 sec — keep crunch.","Top with peanuts and lime. Serve immediately."],
    tip:"Wok heat is everything — if it isn't smoking hot you get steamed soggy noodles. Cook in small batches if needed.",
    storage:"Best eaten immediately." },

  { id:"su_lambchops_rosemary", name:"Rosemary & Garlic Lamb Chops", emoji:"🍖", time:20, cuisine:"South African",
    tags:["lamb","quick","elegant","dinner","garlic"],
    ingredients:[
      {n:"Lamb loin chops",pp:2,u:""},
      {n:"Fresh rosemary",pp:3,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Olive oil",pp:10,u:"ml"},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"Salt and pepper",pp:null,u:""},
      {n:"Butter (for basting)",pp:10,u:"g"},
    ],
    method:["Mix garlic, rosemary, olive oil and lemon juice. Coat chops. Marinate 30 min minimum.","Heat pan until very hot — almost smoking.","Season chops with salt and pepper just before cooking.","Sear 3 min per side for medium. Add butter and baste in last minute.","REST 5 min — non-negotiable for lamb."],
    tip:"Lamb chops are thin — they cook fast. High heat for a short time gives the perfect crust with a pink centre. Never pierce with a fork while cooking.",
    storage:"Fridge 2 days raw (marinated). Cooked 3 days." },

  { id:"su_mushroomrisotto", name:"Mushroom Risotto", emoji:"🍚", time:45, cuisine:"Italian",
    tags:["vegetarian","rice","italian","creamy","dinner"],
    ingredients:[
      {n:"Arborio or risotto rice",pp:80,u:"g"},
      {n:"Button mushrooms (sliced)",pp:80,u:"g"},
      {n:"Onion (finely diced)",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"White wine",pp:40,u:"ml"},
      {n:"Warm vegetable or chicken stock",pp:250,u:"ml"},
      {n:"Butter",pp:20,u:"g"},
      {n:"Parmesan (grated)",pp:25,u:"g"},
      {n:"Olive oil",pp:8,u:"ml"},
      {n:"Fresh thyme",pp:2,u:"g"},
    ],
    method:["Keep stock warm in a separate pot throughout.","Fry mushrooms in butter until golden. Season. Remove.","Fry onion and garlic in olive oil 5 min. Add rice — toast 2 min stirring.","Add wine — stir until absorbed.","Add warm stock one ladle at a time, stirring until each is absorbed before adding the next. Takes 18–20 min.","Stir in mushrooms, remaining butter and parmesan. Season. Rest 2 min.","Serve immediately — risotto waits for no one."],
    tip:"The stirring is what makes risotto — it releases the starch that creates the creamy texture without cream. Warm stock is essential — cold stock stops the cooking process.",
    storage:"Fridge 2 days. Reheat with a splash of stock." },

  { id:"su_chickennoodlesoup", name:"Chicken Noodle Soup", emoji:"🍲", time:90, cuisine:"Classic",
    tags:["soup","chicken","comfort","winter","family"],
    ingredients:[
      {n:"Chicken pieces or whole chicken",pp:150,u:"g"},
      {n:"Onion (halved)",pp:25,u:"g"},
      {n:"Carrots (sliced)",pp:40,u:"g"},
      {n:"Celery (sliced)",pp:25,u:"g"},
      {n:"Garlic (whole cloves)",pp:3,u:"g"},
      {n:"Egg noodles or pasta",pp:30,u:"g"},
      {n:"Fresh parsley",pp:5,u:"g"},
      {n:"Bay leaves and peppercorns",pp:null,u:""},
    ],
    method:["Place chicken in large pot. Cover with cold water. Add onion, garlic, bay leaves and peppercorns.","Bring to boil. Skim foam from surface — important for clear broth.","Simmer gently 1 hour. Remove chicken. Strain broth.","Shred chicken meat. Discard bones and skin.","Return broth to pot. Add carrots and celery. Cook 15 min.","Add noodles. Cook until tender. Return chicken. Add parsley. Season."],
    tip:"Starting with cold water extracts maximum flavour from the bones. Skimming the foam gives a clear, clean golden broth. This soup genuinely makes you feel better.",
    storage:"Fridge 4 days. Freeze broth 3 months." },

  { id:"su_bobotie", name:"Bobotie", emoji:"🍛", time:75, cuisine:"Cape Malay",
    tags:["mince","curry","cape malay","bake","south african","classic"],
    ingredients:[
      {n:"Beef or lamb mince",pp:150,u:"g"},
      {n:"Onion (finely diced)",pp:25,u:"g"},
      {n:"Garlic (minced)",pp:3,u:"g"},
      {n:"Curry powder",pp:3,u:"g"},
      {n:"Turmeric",pp:1,u:"g"},
      {n:"Apricot jam",pp:15,u:"g"},
      {n:"Chutney",pp:15,u:"g"},
      {n:"White bread (soaked in milk)",pp:30,u:"g"},
      {n:"Milk (for soaking)",pp:30,u:"ml"},
      {n:"Egg",pp:0.3,u:"egg"},
      {n:"Lemon juice",pp:5,u:"ml"},
      {n:"Raisins",pp:15,u:"g"},
      {n:"Almonds (flaked)",pp:10,u:"g"},
      {n:"Bay leaves",pp:null,u:""},
      {n:"Eggs (for topping)",pp:0.5,u:"egg"},
      {n:"Milk (for topping)",pp:30,u:"ml"},
      {n:"Turmeric (for topping)",pp:0.5,u:"g"},
    ],
    method:["Preheat oven to 180°C.","Fry onion and garlic until soft. Add curry powder and turmeric, cook 1 min.","Add mince. Brown completely.","Add jam, chutney, lemon juice and raisins. Squeeze bread dry and crumble in. Mix.","Spoon into greased baking dish. Press bay leaves on top.","Beat eggs with milk and turmeric. Pour over. Scatter almonds.","Bake 35–40 min until topping is set and golden.","Serve with yellow rice and chutney."],
    tip:"The bread soaked in milk is what makes Bobotie uniquely SA — it gives a moist, custard-like texture to the mince. Don't skip the apricot jam — it's the secret sweet note.",
    storage:"Fridge 3 days. Freezes well." },
];

const BAKES_RECIPES = [
  { id:"bk_choccake", name:"Classic Chocolate Cake", emoji:"🎂", time:60, cuisine:"Classic",
    tags:["cake","chocolate","dessert","birthday","bake"],
    ingredients:[
      {n:"Cake flour",pp:20,u:"g"},
      {n:"Cocoa powder",pp:5,u:"g"},
      {n:"Sugar",pp:20,u:"g"},
      {n:"Baking powder",pp:0.4,u:"g"},
      {n:"Bicarbonate of soda",pp:0.2,u:"g"},
      {n:"Egg",pp:0.2,u:"egg"},
      {n:"Buttermilk",pp:20,u:"ml"},
      {n:"Oil",pp:10,u:"ml"},
      {n:"Hot coffee or water",pp:20,u:"ml"},
      {n:"Dark chocolate (70%)",pp:15,u:"g"},
      {n:"Cream (for ganache)",pp:10,u:"ml"},
    ],
    method:["Preheat oven to 180°C. Grease and line two tins.","Sift all dry ingredients together.","Whisk eggs, buttermilk and oil. Combine with dry. Add hot coffee — batter will be thin. This is correct.","Divide between tins. Bake 30–35 min until skewer comes out clean.","Cool completely.","GANACHE: Heat cream until just boiling. Pour over chopped chocolate. Stir until smooth. Cool until spreadable.","Sandwich and frost with ganache."],
    tip:"Hot coffee intensifies the chocolate flavour dramatically without tasting of coffee. The thin batter is correct — it bakes into a moist, dense cake.",
    storage:"Room temperature 3 days. Fridge 5 days." },

  { id:"bk_malvapudding", name:"Malva Pudding", emoji:"🍮", time:60, cuisine:"South African",
    tags:["south african","dessert","bake","classic","warm"],
    ingredients:[
      {n:"Sugar",pp:30,u:"g"},
      {n:"Egg",pp:0.25,u:"egg"},
      {n:"Apricot jam",pp:15,u:"g"},
      {n:"Butter (melted)",pp:8,u:"g"},
      {n:"Cake flour",pp:30,u:"g"},
      {n:"Bicarbonate of soda",pp:0.5,u:"g"},
      {n:"Vinegar",pp:3,u:"ml"},
      {n:"Milk",pp:30,u:"ml"},
      {n:"Cream (for sauce)",pp:45,u:"ml"},
      {n:"Butter (for sauce)",pp:15,u:"g"},
      {n:"Sugar (for sauce)",pp:20,u:"g"},
      {n:"Hot water",pp:15,u:"ml"},
      {n:"Vanilla essence",pp:1,u:"ml"},
    ],
    method:["Preheat oven to 180°C. Grease baking dish.","Beat sugar and egg until pale and fluffy.","Add jam, melted butter, vinegar and milk.","Sift and fold in flour and bicarb.","Bake 30–35 min until deep golden.","SAUCE: Heat cream, butter, sugar, water and vanilla until butter melts.","While pudding is hot, poke holes all over. Pour ALL warm sauce over. It absorbs completely.","Serve immediately with cream or ice cream."],
    tip:"Sauce MUST go on while pudding is still hot from the oven. Cold pudding won't absorb the sauce. This is the most loved South African dessert for good reason.",
    storage:"Fridge 3 days. Reheat with a splash of cream." },

  { id:"bk_rusks", name:"Buttermilk Rusks", emoji:"🍪", time:480, cuisine:"South African",
    tags:["south african","bake","breakfast","coffee","dip"],
    ingredients:[
      {n:"Cake flour",pp:30,u:"g"},
      {n:"Sugar",pp:8,u:"g"},
      {n:"Baking powder",pp:0.5,u:"g"},
      {n:"Salt",pp:0.2,u:"g"},
      {n:"Butter (melted)",pp:10,u:"g"},
      {n:"Buttermilk",pp:25,u:"ml"},
      {n:"Egg",pp:0.1,u:"egg"},
    ],
    method:["Preheat oven to 180°C.","Sift flour, sugar, baking powder and salt.","Mix buttermilk, butter and egg. Combine wet and dry — do not overmix.","Press into loaf tin. Bake 45 min until golden.","Cool completely. Cut into fingers.","DRYING: Place on oven racks at 70°C overnight (8–10 hours) until completely dry and hard.","Tap to test — should sound hollow."],
    tip:"The overnight drying at very low temperature is what makes them rusks. They must be completely dry to last for months. Dip in coffee before eating.",
    storage:"Airtight container 2–3 months." },

  { id:"bk_bananabread", name:"Banana Bread", emoji:"🍌", time:65, cuisine:"Classic",
    tags:["bake","banana","breakfast","sweet","easy"],
    ingredients:[
      {n:"Very ripe bananas (mashed)",pp:0.5,u:""},
      {n:"Cake flour",pp:30,u:"g"},
      {n:"Sugar",pp:15,u:"g"},
      {n:"Baking powder",pp:0.4,u:"g"},
      {n:"Bicarbonate of soda",pp:0.2,u:"g"},
      {n:"Egg",pp:0.2,u:"egg"},
      {n:"Butter (melted)",pp:10,u:"g"},
      {n:"Buttermilk or plain yoghurt",pp:15,u:"ml"},
      {n:"Vanilla essence",pp:0.5,u:"ml"},
      {n:"Cinnamon",pp:0.3,u:"g"},
      {n:"Walnuts or chocolate chips (optional)",pp:10,u:"g"},
    ],
    method:["Preheat oven to 170°C. Grease loaf tin.","Mash bananas very well — no lumps. The riper the better.","Whisk egg, butter and buttermilk. Add mashed banana.","Sift dry ingredients. Fold into wet — mix until JUST combined.","Pour into tin. Bake 55–60 min until a skewer comes out clean.","Cool in tin 10 min. Turn out. Cool completely before slicing."],
    tip:"Overripe black bananas are the best — they have maximum sweetness and moisture. Banana bread should be moist and dense, not dry and crumbly. Don't overbake.",
    storage:"Room temperature 3 days. Fridge 5 days. Freezer 3 months." },

  { id:"bk_koeksisters", name:"Koeksisters", emoji:"🍩", time:90, cuisine:"South African",
    tags:["south african","fried","sweet","afrikaner","bake"],
    ingredients:[
      {n:"Cake flour",pp:25,u:"g"},
      {n:"Baking powder",pp:0.5,u:"g"},
      {n:"Butter (cold)",pp:4,u:"g"},
      {n:"Egg",pp:0.1,u:"egg"},
      {n:"Milk",pp:15,u:"ml"},
      {n:"Oil (for deep frying)",pp:null,u:""},
      {n:"Sugar (for syrup)",pp:50,u:"g"},
      {n:"Water (for syrup)",pp:25,u:"ml"},
      {n:"Cream of tartar",pp:0.2,u:"g"},
      {n:"Lemon juice",pp:2,u:"ml"},
    ],
    method:["SYRUP (day before): Boil sugar, water, cream of tartar and lemon juice 10 min. Cool completely. Refrigerate — must be ice cold.","Rub cold butter into flour and baking powder until breadcrumbs. Add egg and milk. Form soft dough.","Roll 5mm thick. Cut 8cm × 2cm strips. Split each almost through to create two strands. Plait.","Fry at 180°C until golden — about 3 min.","IMMEDIATELY drop hot koeksisters into ice-cold syrup. The thermal shock is the secret.","Remove after 30 sec. Place on wire rack."],
    tip:"Two rules: syrup must be ICE COLD (put in freezer before frying) and koeksisters go from boiling oil into freezing syrup. The temperature shock creates the crispy-sticky texture.",
    storage:"Room temperature 3 days. Never refrigerate — they go soggy." },

  { id:"bk_melktert", name:"Melktert", emoji:"🥧", time:60, cuisine:"South African",
    tags:["south african","dessert","bake","milk tart","afrikaner"],
    ingredients:[
      {n:"Butter (cold)",pp:15,u:"g"},
      {n:"Cake flour",pp:25,u:"g"},
      {n:"Icing sugar",pp:5,u:"g"},
      {n:"Egg yolk",pp:0.1,u:"egg"},
      {n:"Cold water",pp:5,u:"ml"},
      {n:"Full cream milk",pp:90,u:"ml"},
      {n:"Sugar",pp:15,u:"g"},
      {n:"Flour",pp:8,u:"g"},
      {n:"Cornflour",pp:5,u:"g"},
      {n:"Egg",pp:0.25,u:"egg"},
      {n:"Butter",pp:5,u:"g"},
      {n:"Vanilla essence",pp:0.5,u:"ml"},
      {n:"Cinnamon (for dusting)",pp:null,u:""},
    ],
    method:["PASTRY: Rub cold butter into flour and icing sugar. Add egg yolk and water. Press into tart tin. Refrigerate 20 min. Blind bake at 190°C for 15 min.","FILLING: Heat milk until just below boiling.","Whisk sugar, flour, cornflour and eggs until smooth.","Slowly pour hot milk into egg mixture, whisking continuously.","Return to pot. Stir continuously over low heat until very thick — about 5 min.","Remove from heat. Add butter and vanilla. Pour into pastry shell.","Refrigerate 2 hours. Dust generously with cinnamon before serving."],
    tip:"The filling thickens quickly once it starts — don't stop stirring or you get lumps. A properly set melktert wobbles slightly in the centre when the tin is shaken.",
    storage:"Fridge 3 days." },

  { id:"bk_sourdoughbread", name:"Sourdough Bread", emoji:"🍞", time:480, cuisine:"Classic",
    tags:["bread","bake","sourdough","long ferment","classic"],
    ingredients:[
      {n:"Bread flour (strong white)",pp:100,u:"g"},
      {n:"Active sourdough starter (bubbly)",pp:20,u:"g"},
      {n:"Lukewarm water (36°C)",pp:75,u:"ml"},
      {n:"Fine salt",pp:2,u:"g"},
    ],
    method:["Mix flour and water. Rest 30 min (autolyse — develops gluten without kneading).","Add starter and salt. Mix thoroughly.","STRETCH & FOLD: Wet hand, grab dough, stretch up and fold over. Rotate 90°. Repeat 4 times every 30 min for 4 sets over 2 hours.","BULK FERMENT: Cover. Leave at room temperature 4–6 hours until doubled and bubbly.","Shape into round or oval. Place in floured banneton or bowl. Cover.","COLD PROOF: Refrigerate overnight (8–16 hours).","Preheat oven to 250°C with Dutch oven inside for 45 min.","Score cold dough. Drop into hot Dutch oven. Bake covered 20 min, uncovered 25 min.","Cool 1 hour before slicing.","The sourdough starter recipe is in Health Hub → Fermented Foods."],
    tip:"Cold overnight proof develops the characteristic sourdough flavour — the longer the better. This bread is better on day 2 and 3. Never cut before it's completely cool.",
    storage:"Room temperature (paper bag) 4 days. Freezer 3 months." },

  { id:"bk_lemondrizzle", name:"Lemon Drizzle Cake", emoji:"🍋", time:55, cuisine:"British",
    tags:["cake","lemon","bake","afternoon tea","british"],
    ingredients:[
      {n:"Butter (softened)",pp:12,u:"g"},
      {n:"Sugar",pp:12,u:"g"},
      {n:"Egg",pp:0.2,u:"egg"},
      {n:"Cake flour",pp:15,u:"g"},
      {n:"Baking powder",pp:0.3,u:"g"},
      {n:"Lemon zest",pp:0.3,u:"g"},
      {n:"Lemon juice (for cake)",pp:3,u:"ml"},
      {n:"Milk",pp:8,u:"ml"},
      {n:"Icing sugar (for drizzle)",pp:10,u:"g"},
      {n:"Lemon juice (for drizzle)",pp:5,u:"ml"},
    ],
    method:["Preheat oven to 180°C. Grease loaf tin.","Beat butter and sugar until pale and fluffy — 4 min.","Add eggs one at a time. Beat well.","Fold in sifted flour and baking powder alternating with milk and lemon juice.","Add lemon zest. Pour into tin.","Bake 45–50 min until golden and a skewer comes out clean.","DRIZZLE: Mix icing sugar and lemon juice to a thin syrup.","While cake is still hot and in the tin, poke holes all over. Pour drizzle over — it soaks in as the cake cools."],
    tip:"The drizzle goes on hot — it soaks in and creates a moist, tangy crust as it cools. Don't skip this step.",
    storage:"Room temperature 4 days. Fridge 1 week." },

  { id:"bk_garlicbread", name:"Garlic Butter Bread", emoji:"🥖", time:15, cuisine:"Italian",
    tags:["bread","garlic","side","quick","bake"],
    ingredients:[
      {n:"Ciabatta or French loaf",pp:60,u:"g"},
      {n:"Butter (softened)",pp:20,u:"g"},
      {n:"Garlic (minced or pressed)",pp:3,u:"g"},
      {n:"Fresh parsley (finely chopped)",pp:3,u:"g"},
      {n:"Salt",pp:null,u:""},
    ],
    method:["Preheat oven to 200°C or turn on the grill.","Mix butter, garlic, parsley and a pinch of salt until smooth.","Cut bread in half lengthways. Spread garlic butter generously over cut surfaces.","Bake 8–10 min until edges are crispy and golden. Or grill for 3–4 min.","Serve immediately — garlic bread waits for no one."],
    tip:"The garlic must be minced very finely or pressed — chunky garlic burns before the bread crisps. Fresh parsley keeps it bright green and fresh.",
    storage:"Assemble ahead. Bake fresh." },

  { id:"bk_scones", name:"Classic Scones", emoji:"🫐", time:30, cuisine:"British",
    tags:["bake","british","afternoon tea","quick","cream"],
    ingredients:[
      {n:"Cake flour",pp:40,u:"g"},
      {n:"Baking powder",pp:1,u:"g"},
      {n:"Salt (pinch)",pp:null,u:""},
      {n:"Sugar",pp:5,u:"g"},
      {n:"Butter (cold, cubed)",pp:8,u:"g"},
      {n:"Buttermilk or milk",pp:25,u:"ml"},
      {n:"Egg (for brushing)",pp:0.1,u:"egg"},
      {n:"Jam and cream (to serve)",pp:30,u:"g"},
    ],
    method:["Preheat oven to 220°C.","Sift flour, baking powder, salt and sugar. Rub in cold butter until breadcrumb texture. Work quickly — butter must stay cold.","Add buttermilk. Mix until JUST combined — do not overmix.","Turn onto floured surface. Pat gently to 2.5cm thick. Do not roll.","Cut with sharp cutter dipped in flour. Do not twist — press straight down.","Brush tops with egg. Bake 12–15 min until golden.","Serve warm with jam and whipped cream."],
    tip:"Cold butter, minimal mixing, straight-down cutting — these three things separate good scones from bad ones. Overworked dough = tough scones. Twisted cutter = scones that won't rise straight.",
    storage:"Best eaten same day. Freeze unbaked." },
];


// ── BUDGET RECIPES DATABASE ───────────────────────────────────────
// All costs in South African Rand (R), approximate 2025 Checkers/Spar prices
// costPP = cost per person in Rands
// Recipes are practical, filling, family-friendly

const BUDGET_RECIPES = [

  // ── R40 BUDGET (costPP ~R10) ──────────────────────────────────
  { id:"bud_pilchard_pap", name:"Curried Pilchard Stew with Pap", emoji:"🐟", costPP:10, serves:4, time:30,
    tags:["fish","pap","budget","south african","filling"],
    ingredients:[
      {n:"Tinned pilchards in tomato sauce",pp:100,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:100,u:"g",userHas:false},
      {n:"Water",pp:300,u:"ml",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Carrot (grated)",pp:30,u:"g",userHas:false},
      {n:"Curry powder",pp:2,u:"g",userHas:false},
      {n:"Oil",pp:5,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion in oil until soft. Add grated carrot and curry powder. Cook 2 min.","Add pilchards with sauce. Mash fish into the sauce. Simmer 8 min.","Meanwhile: boil water, whisk in maize meal slowly. Cook on low heat 15 min stirring until thick and smooth.","Serve pilchard curry over stiff pap."],
    tip:"Grate the carrot into the sauce — it adds volume and nutrition and completely disappears. The starch water from boiling pap thickens any gravy naturally.",
    nutrition:{kcal:420,protein_g:22,carbs_g:55,fat_g:10},
    storage:"Fridge 2 days." },

  { id:"bud_samp_beans", name:"Sugar Bean Samp", emoji:"🫘", costPP:8, serves:4, time:90,
    tags:["vegetarian","south african","filling","vegan","traditional"],
    ingredients:[
      {n:"Samp & beans mix",pp:125,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Stock cube",pp:0.25,u:"",userHas:false},
      {n:"Water",pp:500,u:"ml",userHas:false},
      {n:"Oil",pp:5,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Soak samp and beans in cold water overnight if possible (or 2 hours minimum).","Drain. Boil with fresh water and stock cube for 60–75 min until very soft and creamy.","Fry onion in oil until golden. Stir into samp.","Season. The high starch content makes it naturally very thick and filling."],
    tip:"The overnight soak cuts cooking time in half and makes the beans more digestible. A classic South African staple — very filling and high in protein.",
    nutrition:{kcal:380,protein_g:18,carbs_g:70,fat_g:4},
    storage:"Fridge 4 days. Freezer 2 months." },

  { id:"bud_soya_cabbage", name:"Soya Mince & Cabbage", emoji:"🥬", costPP:7, serves:4, time:25,
    tags:["vegetarian","budget","filling","south african"],
    ingredients:[
      {n:"Soya mince (dry)",pp:50,u:"g",userHas:false},
      {n:"Cabbage (shredded)",pp:125,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Water",pp:400,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Rehydrate soya mince in boiling water for 10 min. Drain and squeeze dry.","Fry onion in oil until golden. Add curry powder and cook 1 min.","Add soya mince. Fry 3 min. Add shredded cabbage. Stir-fry 5 min until tender.","Make stiff pap separately. Serve soya and cabbage over pap."],
    tip:"Frying the cabbage with the soya doubles the volume of the dish. Soya mince is one of the highest protein budget ingredients available.",
    nutrition:{kcal:360,protein_g:20,carbs_g:50,fat_g:8},
    storage:"Fridge 3 days." },

  { id:"bud_egg_potato_curry", name:"Egg & Potato Curry", emoji:"🥚", costPP:9, serves:4, time:35,
    tags:["eggs","vegetarian","curry","filling","budget"],
    ingredients:[
      {n:"Eggs",pp:1,u:"",userHas:false},
      {n:"Potato (cubed)",pp:125,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:50,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Turmeric",pp:1,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Hard-boil eggs 10 min. Cool under cold water. Peel and halve.","Fry onion in oil until golden. Add curry powder and turmeric — cook 2 min.","Add potatoes and tomatoes. Add 100ml water per person. Simmer 20 min until potatoes are soft.","Carefully lower egg halves into the curry for the last 5 min. Serve with pap."],
    tip:"Halving the eggs and simmering in the curry sauce means every bite has egg flavour throughout. This classic budget meal is surprisingly satisfying.",
    nutrition:{kcal:400,protein_g:16,carbs_g:55,fat_g:12},
    storage:"Fridge 2 days." },

  { id:"bud_lentil_meatball", name:"Lentil Meatballs in Tomato Gravy", emoji:"🍲", costPP:8, serves:4, time:45,
    tags:["vegetarian","lentils","budget","filling"],
    ingredients:[
      {n:"Brown lentils (cooked)",pp:80,u:"g",userHas:false},
      {n:"Flour",pp:25,u:"g",userHas:false},
      {n:"Onion (finely diced)",pp:20,u:"g",userHas:false},
      {n:"Tinned tomatoes (for gravy)",pp:80,u:"g",userHas:false},
      {n:"Curry powder",pp:2,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Boil lentils until very soft. Drain and mash. Mix with flour, onion, curry powder and seasoning.","Shape into small balls. Fry in oil until golden on all sides.","Make tomato gravy: fry onion, add tomatoes and simmer 10 min.","Add lentil balls to gravy. Simmer 5 min. Serve with pap."],
    tip:"The starch water from boiling pasta or potatoes is a free thickener for any gravy — use it instead of flour.",
    nutrition:{kcal:350,protein_g:15,carbs_g:55,fat_g:8},
    storage:"Fridge 3 days." },

  { id:"bud_tomato_onion_pasta", name:"Tomato & Onion Macaroni", emoji:"🍝", costPP:6, serves:4, time:25,
    tags:["pasta","vegetarian","quick","budget","family"],
    ingredients:[
      {n:"Macaroni or any pasta",pp:100,u:"g",userHas:false},
      {n:"Onion (finely sliced)",pp:40,u:"g",userHas:false},
      {n:"Tinned tomato & onion mix",pp:80,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Sugar",pp:2,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook pasta in salted water until al dente. Reserve 50ml pasta water before draining.","Fry sliced onion in oil very slowly until deeply golden and sweet — 10–12 min.","Add garlic and cook 1 min. Add tinned tomato mix, sugar and seasoning. Simmer 5 min.","Toss pasta in sauce, adding pasta water if needed. Serve immediately."],
    tip:"Caramelising the onion slowly is what makes this dish — bulk with extra fried onions to add sweetness and volume. It turns a simple pasta into something genuinely satisfying.",
    nutrition:{kcal:380,protein_g:10,carbs_g:65,fat_g:8},
    storage:"Fridge 2 days." },

  { id:"bud_peri_livers", name:"Peri-Peri Chicken Livers with Pap", emoji:"🌶️", costPP:9, serves:4, time:25,
    tags:["chicken","liver","south african","budget","spicy"],
    ingredients:[
      {n:"Chicken livers (cleaned)",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Fresh chilli or chilli flakes",pp:3,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:50,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:100,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Make stiff pap: boil water, whisk in maize meal, cook 15 min.","Fry onion and garlic until golden. Add chilli and cook 1 min.","Add livers. Slice small to stretch further. Fry 5–6 min — do not overcook or they go tough.","Add tomatoes. Simmer 5 min to make a long onion gravy. Season.","Serve over pap."],
    tip:"Slice the livers small and make a 'long' onion gravy to stretch the meat further. Chicken livers are one of the most nutritious and affordable proteins available.",
    nutrition:{kcal:380,protein_g:24,carbs_g:48,fat_g:10},
    storage:"Fridge 2 days." },

  { id:"bud_carrot_pea_stew", name:"Curried Carrot & Pea Stew", emoji:"🥕", costPP:6, serves:4, time:30,
    tags:["vegetarian","vegan","budget","curry","filling"],
    ingredients:[
      {n:"Carrots (half grated, half diced)",pp:125,u:"g",userHas:false},
      {n:"Tinned peas (drained)",pp:60,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Water",pp:300,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion in oil until soft. Add curry powder and cook 1 min.","Add diced carrot. Cook 5 min. Add grated carrot — this thickens the sauce naturally.","Add water and peas. Simmer 15 min until carrots are completely tender.","Make pap separately. Serve stew over pap."],
    tip:"Always grate root vegetables into sauces to add volume and act as a natural thickener. Grating half the carrots into the sauce works much better than all diced.",
    nutrition:{kcal:320,protein_g:8,carbs_g:55,fat_g:7},
    storage:"Fridge 3 days." },

  { id:"bud_rice_baked_beans", name:"Savoury Rice & Baked Beans", emoji:"🫘", costPP:7, serves:4, time:20,
    tags:["vegetarian","quick","budget","filling","family"],
    ingredients:[
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Tinned baked beans",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Carrot (grated)",pp:30,u:"g",userHas:false},
      {n:"Oil",pp:5,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice in salted water.","Fry onion and carrot in oil until soft and golden.","Add baked beans and heat through 3 min.","Serve bean mixture over rice."],
    tip:"Fry onion and carrot first — this small step makes a huge difference. Beans and rice together provide complete protein — a nutritionally balanced budget meal.",
    nutrition:{kcal:360,protein_g:14,carbs_g:62,fat_g:6},
    storage:"Fridge 3 days." },

  { id:"bud_sweet_potato_eggs", name:"Sweet Potato Mash with Fried Eggs", emoji:"🍠", costPP:8, serves:4, time:25,
    tags:["eggs","vegetarian","healthy","budget","quick"],
    ingredients:[
      {n:"Sweet potato",pp:250,u:"g",userHas:false},
      {n:"Eggs",pp:1,u:"",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Butter",pp:10,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Boil or steam sweet potato until soft. Drain and mash with butter, salt and pepper.","Fry onion in oil until golden. Set aside.","Fry eggs to your liking in the same pan.","Serve sweet potato mash topped with fried onion and egg."],
    tip:"Sweet potato is exceptionally high in Vitamin A and is one of the most nutritious root vegetables. Serve one fried egg per person for a complete, balanced meal.",
    nutrition:{kcal:380,protein_g:12,carbs_g:55,fat_g:12},
    storage:"Mash fridge 2 days." },

  // ── R50 BUDGET (costPP ~R12) ──────────────────────────────────
  { id:"bud_creamy_livers", name:"Creamy Chicken Livers with Pap", emoji:"🍗", costPP:12, serves:4, time:25,
    tags:["chicken","liver","south african","creamy","budget"],
    ingredients:[
      {n:"Chicken livers (cleaned)",pp:125,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Full cream milk",pp:50,u:"ml",userHas:false},
      {n:"Flour",pp:10,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:100,u:"g",userHas:false},
      {n:"Butter",pp:10,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion in butter until soft. Add garlic. Add livers and cook 5 min.","Sprinkle flour over. Stir. Gradually add milk — cook stirring until creamy sauce forms.","Season well. Serve over stiff pap."],
    tip:"Use milk and flour to create a creamy sauce that makes this feel like a luxury dish. Don't overcook the livers — they should be slightly pink inside.",
    nutrition:{kcal:420,protein_g:28,carbs_g:48,fat_g:12},
    storage:"Fridge 2 days." },

  { id:"bud_wors_chakalaka", name:"Wors Coins with Chakalaka & Pap", emoji:"🌀", costPP:12, serves:4, time:25,
    tags:["boerewors","south african","budget","family","classic"],
    ingredients:[
      {n:"Boerewors or pork sausage",pp:50,u:"g",userHas:false},
      {n:"Tinned chakalaka",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:100,u:"g",userHas:false},
      {n:"Oil",pp:5,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Slice wors into coins — small so every bite has meat flavour.","Fry wors coins until golden. Remove. Fry onion in the same pan.","Add chakalaka and heat through with onion. Return wors.","Make stiff pap. Serve everything together."],
    tip:"Slicing wors into tiny coins is the trick — you use less meat but every single bite has the flavour. A tin of chakalaka is an excellent budget flavour booster.",
    nutrition:{kcal:420,protein_g:18,carbs_g:50,fat_g:14},
    storage:"Fridge 2 days." },

  { id:"bud_tinned_beef_potato", name:"Tinned Beef & Potato Hash", emoji:"🥩", costPP:13, serves:4, time:30,
    tags:["beef","potato","budget","filling","hash"],
    ingredients:[
      {n:"Tinned corned beef",pp:40,u:"g",userHas:false},
      {n:"Potato (diced small)",pp:125,u:"g",userHas:false},
      {n:"Carrot (diced)",pp:50,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion in oil until golden. Add diced potato and carrot.","Cook 12–15 min until potatoes are soft and slightly crispy.","Dice corned beef small. Add to pan. Fry together 5 min until a thick hash forms.","Season. Serve with pap."],
    tip:"Dice the meat very small — it fries with the potatoes until they form a thick, flavourful hash. Using less meat this way still gives a meaty taste throughout.",
    nutrition:{kcal:400,protein_g:16,carbs_g:58,fat_g:10},
    storage:"Fridge 2 days." },

  { id:"bud_split_pea_soup_meat", name:"Split Pea & Beef Trimming Stew", emoji:"🫘", costPP:12, serves:4, time:60,
    tags:["beef","peas","budget","filling","south african"],
    ingredients:[
      {n:"Beef trimmings or soup bones",pp:50,u:"g",userHas:false},
      {n:"Split peas (yellow or green)",pp:65,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Carrot (diced)",pp:40,u:"g",userHas:false},
      {n:"Stock cube",pp:0.25,u:"",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Water",pp:400,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Simmer beef trimmings in water with stock cube for 30 min.","Add split peas, onion and carrot. Simmer 25 min until peas dissolve into a thick sauce.","The peas create a meaty-tasting thick sauce — meat flavour is throughout.","Serve with stiff pap."],
    tip:"Split peas dissolve into a thick 'meat' sauce, making the meat feel like much more. They are exceptionally high in protein and very cheap.",
    nutrition:{kcal:380,protein_g:20,carbs_g:58,fat_g:6},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_peanut_butter_spinach", name:"Peanut Butter Spinach with Rice", emoji:"🥜", costPP:10, serves:4, time:20,
    tags:["vegetarian","vegan","south african","traditional","healthy"],
    ingredients:[
      {n:"Spinach or morogo (roughly chopped)",pp:100,u:"g",userHas:false},
      {n:"Peanut butter",pp:30,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Water",pp:50,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice in salted water.","Fry onion in oil until golden. Add spinach. Cook 3 min until wilted.","Stir in peanut butter and water. Mix well — it creates a thick sauce. Cook 3 min.","Season. Serve over rice."],
    tip:"A traditional South African nutritious dish. Peanut butter adds protein, healthy fat and a rich nutty flavour. High in iron from the spinach. Morogo (wild spinach) is ideal.",
    nutrition:{kcal:440,protein_g:16,carbs_g:55,fat_g:16},
    storage:"Fridge 2 days." },

  { id:"bud_double_bean_curry", name:"Double Bean Curry with Rice", emoji:"🍛", costPP:11, serves:4, time:25,
    tags:["vegetarian","vegan","budget","curry","filling"],
    ingredients:[
      {n:"Tinned baked beans",pp:80,u:"g",userHas:false},
      {n:"Tinned butter beans (drained)",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:50,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice.","Fry onion in oil until golden. Add curry powder — cook 1 min.","Add both types of beans and tomatoes. Simmer 10 min.","Season. Serve over rice."],
    tip:"Mixing two types of beans — baked beans and butter beans — provides variety in texture and a more complete protein profile. This is a genuinely complete nutritional meal.",
    nutrition:{kcal:420,protein_g:18,carbs_g:68,fat_g:6},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_fried_rice_veg_egg", name:"Fried Rice with Veg & Eggs", emoji:"🍳", costPP:11, serves:4, time:15,
    tags:["eggs","quick","budget","vegetarian","family"],
    ingredients:[
      {n:"Cooked rice (cold, leftover)",pp:150,u:"g",userHas:false},
      {n:"Frozen mixed vegetables",pp:65,u:"g",userHas:false},
      {n:"Eggs",pp:1,u:"",userHas:false},
      {n:"Spring onion (sliced)",pp:10,u:"g",userHas:false},
      {n:"Soy sauce or salt + vinegar",pp:10,u:"ml",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
    ],
    method:["Heat pan or wok until very hot. Add oil.","Fry garlic 30 sec. Add frozen veg — stir-fry 3 min.","Add cold rice. Press flat and fry 2 min without stirring.","Push to side. Scramble eggs. Mix everything together.","Add soy sauce and spring onion. Serve immediately."],
    tip:"Plenty of rice ensures everyone is full. Use cold day-old rice for best results. This is a quick healthy meal that uses up whatever you have.",
    nutrition:{kcal:420,protein_g:14,carbs_g:62,fat_g:10},
    storage:"Eat immediately." },

  { id:"bud_potato_cheese_pap", name:"Potato & Cheese Pap", emoji:"🧀", costPP:10, serves:4, time:30,
    tags:["vegetarian","comfort","budget","filling","family"],
    ingredients:[
      {n:"Maize meal (pap)",pp:100,u:"g",userHas:false},
      {n:"Potato (boiled, cubed)",pp:75,u:"g",userHas:false},
      {n:"Cheddar (grated)",pp:25,u:"g",userHas:false},
      {n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Full cream milk",pp:30,u:"ml",userHas:false},
      {n:"Butter",pp:10,u:"g",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Boil potatoes until soft. Drain.","Make pap: boil water, whisk in maize meal, cook 15 min. Add potatoes to the pap and mash together.","Stir in milk and butter. Fold in grated cheese.","Fry onion separately and serve on top."],
    tip:"Boiling potatoes into the pap gives a mashed potato texture. The cheese stirred in makes this feel like a comforting luxury meal on a very small budget.",
    nutrition:{kcal:440,protein_g:14,carbs_g:65,fat_g:12},
    storage:"Fridge 2 days." },

  // ── R60 BUDGET (costPP ~R15) ──────────────────────────────────
  { id:"bud_mince_cabbage", name:"Beef Mince & Cabbage Sizzle", emoji:"🥬", costPP:15, serves:4, time:25,
    tags:["beef","mince","cabbage","budget","family"],
    ingredients:[
      {n:"Beef mince",pp:65,u:"g",userHas:false},
      {n:"Cabbage (shredded)",pp:125,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice.","Brown mince with onion and garlic until cooked through.","Add shredded cabbage. Stir-fry on high heat 5 min — let it catch some colour.","Season well. Serve over rice."],
    tip:"Bulking mince with cabbage keeps the meal meaty but high-volume. The high heat on the cabbage caramelises it slightly and adds real flavour.",
    nutrition:{kcal:460,protein_g:24,carbs_g:58,fat_g:12},
    storage:"Fridge 3 days." },

  { id:"bud_chicken_neck_stew", name:"Chicken Neck Stew with Pap", emoji:"🍗", costPP:14, serves:4, time:75,
    tags:["chicken","stew","budget","south african","filling"],
    ingredients:[
      {n:"Chicken necks",pp:250,u:"g",userHas:false},
      {n:"Potato (diced)",pp:100,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Carrot (sliced)",pp:40,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion and garlic until golden. Brown chicken necks in batches.","Add tomatoes, potatoes and carrots. Add water to cover.","Simmer 60 min until meat falls off the bone.","Make stiff pap. Serve stew over pap."],
    tip:"Chicken necks are very cheap. Slow-cooking is essential — they need a full hour before the meat becomes tender and falls off. The bones give the gravy incredible depth.",
    nutrition:{kcal:460,protein_g:28,carbs_g:50,fat_g:14},
    storage:"Fridge 3 days." },

  { id:"bud_sardine_pasta_bake", name:"Sardine Pasta Bake", emoji:"🐟", costPP:14, serves:4, time:35,
    tags:["fish","pasta","budget","bake","family"],
    ingredients:[
      {n:"Tinned sardines (drained, flaked)",pp:60,u:"g",userHas:false},
      {n:"Macaroni or pasta",pp:100,u:"g",userHas:false},
      {n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Full cream milk",pp:80,u:"ml",userHas:false},
      {n:"Flour",pp:10,u:"g",userHas:false},
      {n:"Butter",pp:10,u:"g",userHas:false},
      {n:"Cheese (grated)",pp:20,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook pasta. Drain.","Make white sauce: melt butter, add flour, cook 1 min. Gradually add milk, stirring constantly until thick.","Fry onion. Add sardines and flake into onion. Mix with white sauce.","Combine with pasta. Pour into baking dish. Top with cheese.","Bake 200°C for 15 min until golden."],
    tip:"Flaking sardines into a white sauce completely transforms tinned fish — the result is a creamy, satisfying pasta bake with excellent omega-3 content.",
    nutrition:{kcal:480,protein_g:26,carbs_g:55,fat_g:16},
    storage:"Fridge 2 days." },

  { id:"bud_curried_mince_peas", name:"Curried Mince & Peas with Rice", emoji:"🍛", costPP:16, serves:4, time:30,
    tags:["beef","mince","curry","peas","south african","family"],
    ingredients:[
      {n:"Beef mince",pp:65,u:"g",userHas:false},
      {n:"Tinned peas (drained)",pp:60,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice.","Brown mince with onion and garlic. Add curry powder — cook 2 min.","Add tomatoes. Simmer 15 min. Add peas last 5 min.","Season. Serve over rice."],
    tip:"Classic South African comfort food. Peas add sweetness and nutrients without cost. Add grated carrot to the mince to stretch it further.",
    nutrition:{kcal:460,protein_g:24,carbs_g:58,fat_g:12},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_butternut_lentils", name:"Roasted Butternut & Lentil Potjie", emoji:"🎃", costPP:13, serves:4, time:45,
    tags:["vegetarian","vegan","budget","lentils","butternut","south african"],
    ingredients:[
      {n:"Butternut (cubed)",pp:250,u:"g",userHas:false},
      {n:"Brown lentils",pp:65,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion and garlic. Add curry powder — cook 2 min.","Add butternut, lentils and tomatoes. Add 300ml water per person.","Simmer 30 min until butternut is soft and lentils are cooked.","Make pap. Serve butternut and lentil curry over pap."],
    tip:"Roasted butternut and lentils provide an earthy, filling meal. Butternut is one of the cheapest nutritious vegetables in SA and in season most of the year.",
    nutrition:{kcal:400,protein_g:16,carbs_g:62,fat_g:8},
    storage:"Fridge 3 days. Freezer 2 months." },

  // ── R70 BUDGET (costPP ~R17) ──────────────────────────────────
  { id:"bud_savoury_mince_vetkoek", name:"Savoury Mince Vetkoek", emoji:"🍞", costPP:18, serves:4, time:70,
    tags:["south african","mince","bread","street food","family"],
    ingredients:[
      {n:"Bread flour",pp:60,u:"g",userHas:false},
      {n:"Instant yeast",pp:1,u:"g",userHas:false},
      {n:"Sugar",pp:2,u:"g",userHas:false},
      {n:"Lukewarm water",pp:40,u:"ml",userHas:false},
      {n:"Oil for frying",pp:null,u:"",userHas:false},
      {n:"Beef mince",pp:60,u:"g",userHas:false},
      {n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Carrot (grated)",pp:30,u:"g",userHas:false},
      {n:"Curry powder",pp:2,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:40,u:"g",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["DOUGH: Mix flour, yeast, sugar, salt and lukewarm water. Knead 5 min. Prove 30 min.","MINCE: Fry onion and garlic. Brown mince. Add grated carrot, curry powder and tomatoes. Simmer 10 min.","Fry golf-ball-sized vetkoek in 170°C oil — 4 min per side until deep golden.","Split and fill with curried mince."],
    tip:"Grate carrot into the mince to double the volume at almost no extra cost. Vetkoek dough can prove overnight in the fridge — make it the night before.",
    nutrition:{kcal:500,protein_g:22,carbs_g:65,fat_g:14},
    storage:"Vetkoek best fresh. Mince fridge 3 days." },

  { id:"bud_sausage_lentil_casserole", name:"Pork Sausage & Lentil Casserole", emoji:"🌭", costPP:17, serves:4, time:45,
    tags:["pork","sausage","lentils","budget","one pot"],
    ingredients:[
      {n:"Pork sausages",pp:60,u:"g",userHas:false},
      {n:"Brown lentils",pp:65,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Carrot (sliced)",pp:40,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Slice sausages into rounds. Brown in oil. Remove.","Fry onion and garlic. Add lentils, carrots, tomatoes and 300ml water.","Simmer 25 min. Return sausages. Cook 5 min until lentils are completely soft.","Make pap. Serve casserole over pap."],
    tip:"Slicing sausages and cooking with lentils creates a thick, meaty sauce. The lentils bulk out the sausage while adding protein and making it much more filling.",
    nutrition:{kcal:480,protein_g:24,carbs_g:58,fat_g:14},
    storage:"Fridge 3 days." },

  { id:"bud_chicken_wings_rice", name:"Sticky Chicken Wings & Rice", emoji:"🍗", costPP:17, serves:4, time:45,
    tags:["chicken","wings","rice","budget","family"],
    ingredients:[
      {n:"Chicken wings",pp:125,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Tinned mixed veg",pp:50,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Paprika",pp:2,u:"g",userHas:false},
      {n:"Soy sauce",pp:10,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Season wings with garlic, paprika and salt.","Fry wings until golden on all sides. Add soy sauce — let it caramelise and coat.","Meanwhile cook rice with tinned veg mixed in.","Serve wings over vegetable rice. Use pan juices as sauce."],
    tip:"Fry wings for flavour first, then simmer with rice so the rice absorbs all the chicken juices. This makes the rice taste rich and satisfying.",
    nutrition:{kcal:490,protein_g:30,carbs_g:52,fat_g:16},
    storage:"Fridge 2 days." },

  { id:"bud_trotters_beans", name:"Trotters & Butter Beans", emoji:"🦶", costPP:16, serves:4, time:120,
    tags:["pork","trotters","beans","south african","traditional","slow cook"],
    ingredients:[
      {n:"Pork trotters",pp:250,u:"g",userHas:false},
      {n:"Tinned butter beans (drained)",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Stock cube",pp:0.25,u:"",userHas:false},
      {n:"Water",pp:400,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion and garlic. Brown trotters.","Add stock cube and water. Bring to boil. Cover and simmer 90 min until very tender.","Add butter beans. Simmer 20 min — smash some beans slightly to thicken the sauce.","Make pap. Serve."],
    tip:"Classic South African slow-cooked meal. The collagen from the trotters makes a rich gelatinous sauce that is deeply satisfying. The beans thicken the gravy naturally.",
    nutrition:{kcal:500,protein_g:32,carbs_g:50,fat_g:18},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_veggie_burger_steaks", name:"Mince & Lentil Burger Steaks", emoji:"🍔", costPP:17, serves:4, time:35,
    tags:["beef","mince","lentils","budget","family"],
    ingredients:[
      {n:"Beef mince",pp:65,u:"g",userHas:false},
      {n:"Brown lentils (cooked)",pp:65,u:"g",userHas:false},
      {n:"Onion (grated)",pp:20,u:"g",userHas:false},
      {n:"Egg",pp:0.25,u:"",userHas:false},
      {n:"Breadcrumbs",pp:15,u:"g",userHas:false},
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Mash lentils. Mix with mince, grated onion, egg and breadcrumbs. Season well.","Shape into flat patties.","Fry in oil 4–5 min per side until cooked through.","Make pap. Serve patties over pap with tomato gravy."],
    tip:"Mixing mince and lentils 50/50 doubles the number of steaks you can make — and you genuinely cannot taste the difference.",
    nutrition:{kcal:470,protein_g:28,carbs_g:52,fat_g:14},
    storage:"Fridge 3 days. Freezer 2 months." },

  // ── R80 BUDGET (costPP ~R20) ──────────────────────────────────
  { id:"bud_chicken_thigh_potato", name:"Roast Chicken Thighs & Potato", emoji:"🍗", costPP:20, serves:4, time:55,
    tags:["chicken","roast","potato","budget","family"],
    ingredients:[
      {n:"Chicken thighs (bone-in, skin-on)",pp:185,u:"g",userHas:false},
      {n:"Potato (quartered)",pp:200,u:"g",userHas:false},
      {n:"Onion (quartered)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Paprika",pp:2,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 200°C.","Toss potatoes and onion in oil. Season. Spread in roasting pan.","Season chicken thighs with paprika, garlic and salt. Place on top of potatoes.","Roast 40–45 min until chicken is golden and potatoes are cooked through.","The potatoes absorb the chicken fat — they become crispy and deeply flavoured."],
    tip:"One whole chicken thigh per person with a large portion of sweet roast potato. Chicken thighs are much better value than breast and more flavourful.",
    nutrition:{kcal:560,protein_g:38,carbs_g:45,fat_g:24},
    storage:"Fridge 3 days." },

  { id:"bud_tuna_corn_pasta", name:"Tuna & Corn Pasta Bake", emoji:"🐟", costPP:17, serves:4, time:30,
    tags:["tuna","pasta","bake","budget","family"],
    ingredients:[
      {n:"Tinned tuna (in brine, drained)",pp:60,u:"g",userHas:false},
      {n:"Tinned corn (drained)",pp:50,u:"g",userHas:false},
      {n:"Macaroni",pp:100,u:"g",userHas:false},
      {n:"Cheese (grated)",pp:25,u:"g",userHas:false},
      {n:"Tinned cream of mushroom soup",pp:80,u:"ml",userHas:false},
      {n:"Milk",pp:30,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook macaroni in salted water. Drain.","Mix cream of mushroom soup with milk to thin slightly.","Combine pasta, tuna, corn and soup mixture. Season.","Pour into baking dish. Top with grated cheese.","Bake 200°C for 15 min until golden and bubbling."],
    tip:"Tinned cream of mushroom soup is one of South Africa's great budget cooking shortcuts — instant creamy sauce. Flake tuna into macaroni with corn for excellent value.",
    nutrition:{kcal:480,protein_g:28,carbs_g:58,fat_g:14},
    storage:"Fridge 2 days." },

  { id:"bud_pork_steak_mash", name:"Pork Steaks & Sweet Mash", emoji:"🐷", costPP:20, serves:4, time:35,
    tags:["pork","mash","budget","family","comfort"],
    ingredients:[
      {n:"Pork loin steaks",pp:100,u:"g",userHas:false},
      {n:"Potato (boiled)",pp:300,u:"g",userHas:false},
      {n:"Apple (diced)",pp:50,u:"g",userHas:false},
      {n:"Butter",pp:15,u:"g",userHas:false},
      {n:"Milk",pp:50,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Boil potatoes until soft. Mash with butter, milk and diced apple. Season.","Season pork steaks and fry in oil 4–5 min per side until cooked through.","Make a quick pan gravy: add 100ml water to the hot pan, scrape up the bits, season.","Serve pork over sweet potato-apple mash with pan gravy."],
    tip:"Pork is often cheaper than beef and pairs beautifully with apple. The sweet apple mash is a classic combination — don't skip it, it makes the dish.",
    nutrition:{kcal:520,protein_g:34,carbs_g:50,fat_g:18},
    storage:"Fridge 2 days." },

  { id:"bud_chicken_breast_stir_fry", name:"Chicken Breast Stir-Fry & Rice", emoji:"🥢", costPP:20, serves:4, time:25,
    tags:["chicken","stir-fry","rice","budget","healthy"],
    ingredients:[
      {n:"Chicken breast (thinly sliced)",pp:125,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Frozen stir-fry vegetables",pp:125,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Soy sauce",pp:10,u:"ml",userHas:false},
      {n:"Cornflour",pp:5,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice.","Toss sliced chicken in cornflour and soy sauce.","Heat wok until smoking hot. Fry chicken 5–6 min until golden.","Add garlic and frozen veg. Stir-fry 3 min on high heat.","Serve over rice."],
    tip:"Thin slices of chicken stretch much further — you use less but it goes across a large portion of fried rice. Cornflour gives the chicken a lovely golden coating.",
    nutrition:{kcal:480,protein_g:36,carbs_g:58,fat_g:10},
    storage:"Fridge 2 days." },

  { id:"bud_stewing_beef_dumplings", name:"Stewing Beef & Dombolo Dumplings", emoji:"🥘", costPP:22, serves:4, time:100,
    tags:["beef","stew","dumplings","south african","winter","family"],
    ingredients:[
      {n:"Beef stew meat (chuck or shin)",pp:100,u:"g",userHas:false},
      {n:"Cake flour (for dumplings)",pp:30,u:"g",userHas:false},
      {n:"Baking powder",pp:0.5,u:"g",userHas:false},
      {n:"Milk (for dumplings)",pp:20,u:"ml",userHas:false},
      {n:"Carrot (chunked)",pp:50,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Flour for dusting",pp:8,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Dust beef in flour. Brown in hot oil in batches. Add onion.","Add enough water to cover. Simmer 60 min covered.","Add carrots. Cook 20 more min.","DUMPLINGS: Mix cake flour, baking powder, salt and milk to a soft dough.","Drop spoonfuls onto the stew. Cover tightly. Cook 15 min — do not open the lid."],
    tip:"Dombolo dumplings steam on top of the stew and become soft, fluffy bread that absorbs all the gravy. NEVER open the lid during the 15 min steam.",
    nutrition:{kcal:510,protein_g:28,carbs_g:52,fat_g:18},
    storage:"Fridge 3 days. Freeze stew separately without dumplings." },

  // ── R90 BUDGET (costPP ~R22) ──────────────────────────────────
  { id:"bud_chicken_drumstick_curry", name:"Chicken Drumstick Curry & Rice", emoji:"🍛", costPP:22, serves:4, time:55,
    tags:["chicken","curry","south african","family","budget"],
    ingredients:[
      {n:"Chicken drumsticks",pp:200,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Potato (quartered)",pp:100,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Curry powder",pp:4,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion until golden — this is important for depth of flavour. Add garlic and curry powder.","Brown drumsticks. Add tomatoes and potatoes.","Add 150ml water per person. Simmer 35–40 min until chicken is cooked and sauce is thick.","Serve over rice."],
    tip:"Two drumsticks per person with a thick potato curry sauce. Drumsticks on the bone give far more flavour than boneless chicken. Buy the whole pack — best value.",
    nutrition:{kcal:520,protein_g:36,carbs_g:56,fat_g:14},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_shepherd_pie", name:"Beef Mince Shepherd's Pie", emoji:"🥧", costPP:22, serves:4, time:55,
    tags:["beef","mince","pie","family","comfort","south african"],
    ingredients:[
      {n:"Beef mince",pp:125,u:"g",userHas:false},
      {n:"Potato (boiled, mashed)",pp:250,u:"g",userHas:false},
      {n:"Tinned peas (drained)",pp:50,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Butter (for mash)",pp:15,u:"g",userHas:false},
      {n:"Milk (for mash)",pp:30,u:"ml",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Brown mince with onion and garlic. Add tomatoes and peas. Season. Simmer 10 min.","Make creamy mash: boil potatoes, drain, mash with butter and milk. Season.","Pour mince into a baking dish. Spread mash thickly over the top.","Bake 200°C for 20 min until golden and bubbling."],
    tip:"Layer mince with plenty of mash to feed 4 comfortably. Run a fork over the mash before baking to create ridges that crisp up beautifully.",
    nutrition:{kcal:540,protein_g:30,carbs_g:58,fat_g:18},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_hake_rice", name:"Steamed Hake Fillet & Rice", emoji:"🐟", costPP:20, serves:4, time:30,
    tags:["fish","hake","rice","healthy","budget","south african"],
    ingredients:[
      {n:"Frozen hake fillet",pp:125,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Frozen vegetables (mixed)",pp:80,u:"g",userHas:false},
      {n:"Lemon juice",pp:15,u:"ml",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Butter",pp:10,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice with frozen veg mixed in.","Season hake with garlic, lemon, salt and pepper.","Pan-fry in butter 3–4 min per side, or bake 200°C for 15 min.","Serve hake over vegetable rice with extra lemon."],
    tip:"Steam fish over the rice in a steamer or colander to preserve all juices. Hake is one of SA's most affordable quality fish — always a good choice.",
    nutrition:{kcal:430,protein_g:34,carbs_g:52,fat_g:10},
    storage:"Eat immediately." },

  { id:"bud_spaghetti_bol", name:"Spaghetti Bolognese", emoji:"🍝", costPP:22, serves:4, time:40,
    tags:["beef","mince","pasta","family","classic"],
    ingredients:[
      {n:"Beef mince",pp:125,u:"g",userHas:false},
      {n:"Spaghetti",pp:100,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Carrot (finely grated)",pp:30,u:"g",userHas:false},
      {n:"Tomato paste",pp:10,u:"g",userHas:false},
      {n:"Mixed herbs",pp:1,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Brown mince with onion and garlic. Add tomato paste — cook 2 min.","Add tinned tomatoes, grated carrot and herbs. Simmer 20 min.","Cook spaghetti in salted water until al dente.","Serve sauce over pasta."],
    tip:"Bulk the sauce with grated carrots — they completely disappear into the sauce, add nutrition and sweetness, and stretch the mince much further.",
    nutrition:{kcal:520,protein_g:30,carbs_g:60,fat_g:14},
    storage:"Sauce fridge 4 days. Freezer 3 months." },

  { id:"bud_chicken_a_la_king", name:"Chicken à la King with Rice", emoji:"🍗", costPP:22, serves:4, time:35,
    tags:["chicken","creamy","south african","family","comfort"],
    ingredients:[
      {n:"Chicken breast (cubed)",pp:125,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Mushrooms (sliced)",pp:60,u:"g",userHas:false},
      {n:"Full cream milk",pp:80,u:"ml",userHas:false},
      {n:"Flour",pp:10,u:"g",userHas:false},
      {n:"Butter",pp:15,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice.","Fry chicken in butter until golden. Remove.","Fry mushrooms and garlic in same pan. Add flour — stir 1 min.","Gradually add milk stirring constantly until creamy sauce forms.","Return chicken to sauce. Simmer 5 min. Season.","Serve over rice."],
    tip:"Creamy and filling. Use flour to thicken the sauce properly. Add a pinch of paprika or mustard powder to the sauce for extra flavour depth.",
    nutrition:{kcal:520,protein_g:36,carbs_g:52,fat_g:16},
    storage:"Fridge 2 days." },

  // ── R100 BUDGET (costPP ~R25) ──────────────────────────────────
  { id:"bud_beef_chuck_roast", name:"Slow Roast Beef Chuck", emoji:"🥩", costPP:25, serves:4, time:150,
    tags:["beef","roast","family","budget special","sunday"],
    ingredients:[
      {n:"Beef chuck roast",pp:150,u:"g",userHas:false},
      {n:"Potato (chunked)",pp:200,u:"g",userHas:false},
      {n:"Carrot (chunked)",pp:100,u:"g",userHas:false},
      {n:"Onion (quartered)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:8,u:"g",userHas:false},
      {n:"Beef stock cube",pp:0.25,u:"",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 160°C.","Season and sear beef all over in hot oil. Place in roasting pan.","Add vegetables, garlic and stock cube dissolved in 200ml water per person.","Cover tightly with foil. Slow roast 2–2.5 hours until beef pulls apart easily.","Uncover last 20 min to brown. Rest 15 min before slicing."],
    tip:"Slow roasting the beef with root veggies gives a Sunday lunch feel. Cut beef small and cook low and slow for melt-tender results. Use pan juices as gravy.",
    nutrition:{kcal:580,protein_g:40,carbs_g:48,fat_g:22},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_chicken_quarter_roast", name:"Roast Chicken Quarter & Butternut", emoji:"🎃", costPP:24, serves:4, time:60,
    tags:["chicken","roast","butternut","budget","family"],
    ingredients:[
      {n:"Chicken leg quarters",pp:250,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Butternut (cubed)",pp:250,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Paprika",pp:2,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 200°C.","Rub chicken with garlic, paprika, oil, salt and pepper.","Toss butternut in oil and season. Place in roasting pan with chicken on top.","Roast 45 min until chicken is golden and butternut is caramelised.","Cook rice. Serve chicken quarter with butternut and rice."],
    tip:"One whole quarter per person with sweet roast butternut. The chicken fat bastes the butternut as it roasts — incredibly flavourful. Butternut is cheap and very nutritious.",
    nutrition:{kcal:560,protein_g:40,carbs_g:52,fat_g:18},
    storage:"Fridge 3 days." },

  { id:"bud_boerewors_mash", name:"Boerewors & Creamy Mash", emoji:"🌀", costPP:25, serves:4, time:30,
    tags:["boerewors","south african","mash","comfort","family"],
    ingredients:[
      {n:"Boerewors",pp:150,u:"g",userHas:false},
      {n:"Potato (boiled, mashed)",pp:375,u:"g",userHas:false},
      {n:"Tinned peas (drained)",pp:60,u:"g",userHas:false},
      {n:"Butter",pp:20,u:"g",userHas:false},
      {n:"Full cream milk",pp:50,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Boil potatoes until soft. Drain. Mash with butter and milk until creamy. Season.","Fry or grill boerewors 15–20 min on medium heat — don't pierce it.","Heat peas through.","Serve whole sausage over a large portion of creamy mash with peas alongside."],
    tip:"Serve whole sausages with a large portion of creamy mash. Make the mash generously — it should be the centrepiece. Never pierce boerewors or all the juices escape.",
    nutrition:{kcal:600,protein_g:30,carbs_g:58,fat_g:26},
    storage:"Mash fridge 2 days." },

  { id:"bud_home_fish_chips", name:"Home-Style Fish & Chips", emoji:"🍟", costPP:24, serves:4, time:45,
    tags:["fish","hake","chips","south african","family","treat"],
    ingredients:[
      {n:"Frozen hake fillet",pp:200,u:"g",userHas:false},
      {n:"Potato (cut into chips)",pp:375,u:"g",userHas:false},
      {n:"Flour",pp:40,u:"g",userHas:false},
      {n:"Egg",pp:0.5,u:"",userHas:false},
      {n:"Cold water",pp:40,u:"ml",userHas:false},
      {n:"Oil for frying",pp:null,u:"",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Parboil chips in salted water 5 min. Drain and dry completely — this is key for crispiness.","Make batter: mix flour, egg and cold water to a thin consistency. Season.","Fry chips in hot oil 8–10 min until golden and crispy. Drain on paper towel. Season immediately with salt.","Dip fish in batter. Fry 4–5 min per side until batter is golden and crispy. Drain.","Serve immediately with chips, lemon wedges and vinegar."],
    tip:"Batter the fish at home for a huge family portion far cheaper than takeout. The secret to crispy batter is very cold water. Parboiling chips first means they cook faster and stay fluffy inside.",
    nutrition:{kcal:580,protein_g:36,carbs_g:62,fat_g:18},
    storage:"Eat immediately." },

  { id:"bud_pork_chops_rice", name:"Pan-Fried Pork Chops with Rice & Gravy", emoji:"🐷", costPP:25, serves:4, time:30,
    tags:["pork","chops","rice","budget","family"],
    ingredients:[
      {n:"Pork loin chops",pp:150,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Frozen mixed veg",pp:80,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Flour (for gravy)",pp:8,u:"g",userHas:false},
      {n:"Beef stock cube dissolved in water",pp:150,u:"ml",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook rice with veg mixed in.","Season chops and fry in oil 4 min per side until golden. Remove.","Make gravy in same pan: sprinkle flour, cook 1 min. Gradually add stock, scraping up bits. Simmer 3 min.","Return chops to gravy. Heat through 2 min.","Serve one chop per person with rice and gravy."],
    tip:"Fry chops and make a gravy in the same pan — all the flavour stuck to the bottom goes into the gravy. One chop per person is enough with generous rice.",
    nutrition:{kcal:560,protein_g:36,carbs_g:52,fat_g:18},
    storage:"Fridge 2 days." },

  // ── R110 BUDGET (costPP ~R27) ──────────────────────────────────
  { id:"bud_chicken_schnitzel", name:"Chicken Schnitzel with Mash & Peas", emoji:"🍗", costPP:28, serves:4, time:35,
    tags:["chicken","schnitzel","mash","family","comfort"],
    ingredients:[
      {n:"Chicken breast (flattened)",pp:150,u:"g",userHas:false},
      {n:"Breadcrumbs",pp:30,u:"g",userHas:false},
      {n:"Egg",pp:0.5,u:"",userHas:false},
      {n:"Flour",pp:15,u:"g",userHas:false},
      {n:"Potato (boiled, mashed)",pp:350,u:"g",userHas:false},
      {n:"Tinned peas (drained)",pp:60,u:"g",userHas:false},
      {n:"Butter",pp:15,u:"g",userHas:false},
      {n:"Milk",pp:40,u:"ml",userHas:false},
      {n:"Oil for frying",pp:null,u:"",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Flatten chicken breast to 1cm with a rolling pin or heavy pan.","Coat in flour, then beaten egg, then breadcrumbs.","Fry in shallow oil 3–4 min per side until golden and crispy.","Make creamy mash. Heat peas.","Serve schnitzel on mash with peas alongside."],
    tip:"Flattening the breast makes it look huge and cook evenly. The crumbing adds bulk and crunch. This is a restaurant-quality meal at a budget price.",
    nutrition:{kcal:560,protein_g:40,carbs_g:58,fat_g:18},
    storage:"Fridge 2 days (schnitzel best fresh)." },

  { id:"bud_mutton_curry", name:"SA Mutton Curry with Rice", emoji:"🍛", costPP:27, serves:4, time:75,
    tags:["mutton","curry","south african","family","slow cook"],
    ingredients:[
      {n:"Mutton (bone-in pieces)",pp:125,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Potato (quartered)",pp:100,u:"g",userHas:false},
      {n:"Onion (diced)",pp:30,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Curry powder",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Fry onion until very golden. Add garlic and curry powder — cook 2 min.","Brown mutton pieces well. Add tomatoes and potatoes.","Add water to cover. Simmer 50–60 min until meat is very tender and falling off the bone.","Season. Serve over rice."],
    tip:"Rich mutton flavour bulked with soft potatoes. Mutton needs time — don't rush it. The longer it simmers the more tender the meat. Bone-in pieces are always cheaper and more flavourful.",
    nutrition:{kcal:560,protein_g:34,carbs_g:58,fat_g:18},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_bacon_mushroom_pasta", name:"Creamy Bacon & Mushroom Pasta", emoji:"🥓", costPP:27, serves:4, time:25,
    tags:["bacon","mushroom","pasta","creamy","family","treat"],
    ingredients:[
      {n:"Streaky bacon",pp:62,u:"g",userHas:false},
      {n:"Mushrooms (sliced)",pp:62,u:"g",userHas:false},
      {n:"Pasta (any shape)",pp:100,u:"g",userHas:false},
      {n:"Fresh cream",pp:62,u:"ml",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Parmesan or cheddar (grated)",pp:15,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook pasta in salted water. Reserve pasta water before draining.","Fry bacon until crispy. Remove and chop.","Fry mushrooms and garlic in bacon fat 4 min.","Add cream. Simmer 3 min until slightly thickened.","Toss pasta in sauce with a splash of pasta water. Top with bacon and cheese."],
    tip:"A small amount of bacon gives huge flavour to the whole dish. The bacon fat is the best oil for this recipe — don't drain it. Pasta water is the secret to a silky sauce.",
    nutrition:{kcal:580,protein_g:24,carbs_g:55,fat_g:28},
    storage:"Fridge 2 days." },

  { id:"bud_beef_stir_fry_noodles", name:"Beef Stir-Fry with Noodles", emoji:"🥢", costPP:26, serves:4, time:25,
    tags:["beef","noodles","stir-fry","budget","healthy"],
    ingredients:[
      {n:"Beef strips (rump or chuck)",pp:125,u:"g",userHas:false},
      {n:"Noodles (egg or rice noodles)",pp:100,u:"g",userHas:false},
      {n:"Stir-fry vegetables (frozen or fresh)",pp:200,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Soy sauce",pp:15,u:"ml",userHas:false},
      {n:"Cornflour",pp:5,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook noodles per packet instructions. Drain.","Toss beef in cornflour and soy sauce.","Stir-fry beef in very hot oil 3–4 min. Add garlic and veg. Cook 3 min.","Add noodles. Toss everything together. Season."],
    tip:"High veg-to-meat ratio makes this very healthy and very filling. Use cornflour to coat the beef — it gives a lovely golden coating and thickens the sauce slightly.",
    nutrition:{kcal:540,protein_g:32,carbs_g:60,fat_g:16},
    storage:"Fridge 2 days." },

  // ── R120 BUDGET (costPP ~R30) ──────────────────────────────────
  { id:"bud_whole_roast_chicken", name:"Whole Roast Chicken with Roast Veg", emoji:"🍗", costPP:30, serves:4, time:90,
    tags:["chicken","roast","sunday","family","budget special"],
    ingredients:[
      {n:"Whole chicken",pp:350,u:"g",userHas:false},
      {n:"Potato (quartered)",pp:250,u:"g",userHas:false},
      {n:"Seasonal vegetables (carrots, butternut, onion)",pp:200,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:8,u:"g",userHas:false},
      {n:"Butter or olive oil",pp:15,u:"g",userHas:false},
      {n:"Mixed dried herbs",pp:2,u:"g",userHas:false},
      {n:"Lemon juice",pp:15,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 200°C.","Mix butter/oil with garlic, herbs, lemon, salt and pepper. Rub over chicken inside and out.","Toss vegetables in oil and season. Place in roasting pan.","Place chicken on top of vegetables. Roast 20 min per 500g of chicken + 20 min extra.","Rest 15 min. Carve. Use pan juices as gravy."],
    tip:"The king of Sunday lunches — provides leftovers for sandwiches. Potatoes roast in the chicken fat and become incredibly flavourful. Always rest a roast before carving.",
    nutrition:{kcal:620,protein_g:48,carbs_g:48,fat_g:24},
    storage:"Fridge 3 days. Use carcass for soup stock." },

  { id:"bud_beef_stroganoff", name:"Beef Stroganoff with Pasta", emoji:"🥩", costPP:30, serves:4, time:30,
    tags:["beef","mushroom","cream","pasta","special","family"],
    ingredients:[
      {n:"Beef strips (rump or sirloin)",pp:150,u:"g",userHas:false},
      {n:"Pasta (egg noodles or tagliatelle)",pp:100,u:"g",userHas:false},
      {n:"Mushrooms (sliced)",pp:62,u:"g",userHas:false},
      {n:"Sour cream or fresh cream",pp:62,u:"ml",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Beef stock",pp:60,u:"ml",userHas:false},
      {n:"Flour",pp:8,u:"g",userHas:false},
      {n:"Butter",pp:15,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Cook pasta.","Sear beef strips in hot butter 2 min. Remove — they should be medium-rare.","Fry onion and mushrooms in same pan. Add garlic. Add flour — cook 1 min.","Add stock. Simmer 3 min. Add sour cream. Heat through — don't boil.","Return beef to sauce. Serve over pasta."],
    tip:"A luxury meal with tender beef and a rich, tangy sauce. Sour cream is traditional and gives the characteristic flavour. Don't boil after adding cream or it will split.",
    nutrition:{kcal:620,protein_g:40,carbs_g:55,fat_g:25},
    storage:"Fridge 2 days." },

  { id:"bud_pork_crackling", name:"Pork Shoulder Roast with Crackling", emoji:"🐷", costPP:30, serves:4, time:150,
    tags:["pork","roast","crackling","sunday","family","special"],
    ingredients:[
      {n:"Pork shoulder (score the skin)",pp:250,u:"g",userHas:false},
      {n:"Potato (halved)",pp:250,u:"g",userHas:false},
      {n:"Butternut (cubed)",pp:200,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:8,u:"g",userHas:false},
      {n:"Mixed herbs",pp:2,u:"g",userHas:false},
      {n:"Coarse salt for skin",pp:5,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 230°C (high heat for crackling).","Score pork skin deeply with a sharp knife. Rub skin with coarse salt. Rub meat with garlic and herbs.","Roast at 230°C for 30 min — skin blisters and crackles. Reduce to 180°C.","Add vegetables to the pan. Roast 90 min until pork is cooked through.","Rest 20 min before carving."],
    tip:"The high heat at the start is non-negotiable for proper crackling — the skin must blister. Score deeply so the salt penetrates. Roast pork with high heat at the end if crackling needs more colour.",
    nutrition:{kcal:640,protein_g:44,carbs_g:45,fat_g:30},
    storage:"Fridge 3 days." },

  { id:"bud_lasagne", name:"Full Lasagne", emoji:"🍝", costPP:30, serves:4, time:80,
    tags:["beef","mince","lasagne","pasta","bake","family","special"],
    ingredients:[
      {n:"Beef mince",pp:150,u:"g",userHas:false},
      {n:"Lasagne sheets",pp:75,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:100,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Full cream milk (for white sauce)",pp:100,u:"ml",userHas:false},
      {n:"Flour (for white sauce)",pp:12,u:"g",userHas:false},
      {n:"Butter (for white sauce)",pp:12,u:"g",userHas:false},
      {n:"Cheese (grated)",pp:50,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["MEAT SAUCE: Brown mince with onion and garlic. Add tomatoes. Simmer 20 min. Season.","WHITE SAUCE: Melt butter. Add flour — cook 1 min. Gradually add milk, stirring until thick. Season.","ASSEMBLE: Layer lasagne sheets, meat sauce, white sauce, repeat. Top with white sauce and cheese.","Bake 180°C for 35 min until golden and bubbling.","Rest 10 min before cutting."],
    tip:"A dense, multi-layered classic that feeds 4 very well. Make extra meat sauce — it freezes perfectly for next time. Rest before cutting or it falls apart.",
    nutrition:{kcal:640,protein_g:38,carbs_g:58,fat_g:26},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_meatballs_tomato", name:"Jumbo Meatballs in Rich Tomato Sauce", emoji:"🍖", costPP:30, serves:4, time:50,
    tags:["beef","mince","meatballs","pasta","family","special"],
    ingredients:[
      {n:"Beef mince",pp:200,u:"g",userHas:false},
      {n:"Breadcrumbs",pp:20,u:"g",userHas:false},
      {n:"Egg",pp:0.25,u:"",userHas:false},
      {n:"Garlic (crushed)",pp:5,u:"g",userHas:false},
      {n:"Tinned tomatoes (for sauce)",pp:100,u:"g",userHas:false},
      {n:"Onion (diced, for sauce)",pp:25,u:"g",userHas:false},
      {n:"Spaghetti",pp:100,u:"g",userHas:false},
      {n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Mixed herbs",pp:1,u:"g",userHas:false},
      {n:"Salt & pepper",pp:null,u:"",userHas:false},
    ],
    method:["Mix mince, breadcrumbs, egg, half the garlic, herbs, salt and pepper. Shape into large balls.","Brown meatballs all over in oil. Remove.","Fry onion and remaining garlic. Add tomatoes and herbs. Simmer 10 min.","Return meatballs to sauce. Cover and simmer 20 min.","Cook spaghetti. Serve meatballs in rich sauce over pasta."],
    tip:"Large, juicy meatballs in a rich red sauce. The breadcrumbs keep meatballs light and tender — without them they go dense and tough. Brown well before simmering.",
    nutrition:{kcal:640,protein_g:40,carbs_g:60,fat_g:22},
    storage:"Fridge 3 days. Freezer 2 months." },

  // ── EXISTING CLASSICS (kept from original database) ──────────────
  { id:"bud_pap_chakalaka", name:"Pap & Chakalaka", emoji:"🌽", costPP:4, serves:4, time:30,
    tags:["vegetarian","south african","filling","quick"],
    ingredients:[
      {n:"Maize meal (pap)",pp:80,u:"g",userHas:false},{n:"Water",pp:300,u:"ml",userHas:false},
      {n:"Tinned baked beans",pp:50,u:"g",userHas:false},{n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:40,u:"g",userHas:false},{n:"Curry powder",pp:1,u:"g",userHas:false},
      {n:"Oil",pp:5,u:"ml",userHas:false},{n:"Salt",pp:null,u:"",userHas:false},
    ],
    method:["Boil water. Whisk in maize meal slowly. Cook on low heat 15 min stirring regularly until thick and smooth.","Fry onion in oil until soft. Add curry powder 1 min. Add tomatoes and baked beans. Simmer 10 min. Season.","Serve chakalaka over pap."],
    tip:"One of South Africa's most affordable and satisfying meals. Add a fried egg on top for extra protein at minimal cost.",
    nutrition:{kcal:340,protein_g:10,carbs_g:58,fat_g:6},
    storage:"Fridge 3 days." },

  { id:"bud_oat_porridge", name:"Creamy Oat Porridge", emoji:"🥣", costPP:3, serves:4, time:10,
    tags:["breakfast","healthy","quick","vegetarian","cheap"],
    ingredients:[
      {n:"Rolled oats",pp:60,u:"g",userHas:false},{n:"Full cream milk",pp:150,u:"ml",userHas:false},
      {n:"Water",pp:50,u:"ml",userHas:false},{n:"Sugar or honey",pp:8,u:"g",userHas:false},
      {n:"Cinnamon",pp:0.3,u:"g",userHas:false},{n:"Banana (sliced, optional)",pp:0.5,u:"",userHas:false},
    ],
    method:["Combine oats, milk and water in pot. Cook over medium heat stirring 5–7 min until creamy.","Add sugar and cinnamon. Top with banana if using."],
    tip:"The most cost-effective hot breakfast possible. Make a big batch and refrigerate.",
    nutrition:{kcal:320,protein_g:10,carbs_g:55,fat_g:6},
    storage:"Fridge 2 days. Add milk when reheating." },

  { id:"bud_frikkadels_pap", name:"Frikkadels with Pap & Tomato Gravy", emoji:"🍖", costPP:14, serves:4, time:40,
    tags:["south african","mince","family","filling","classic"],
    ingredients:[
      {n:"Beef mince",pp:100,u:"g",userHas:false},{n:"Onion (grated)",pp:15,u:"g",userHas:false},
      {n:"White bread (soaked in milk)",pp:20,u:"g",userHas:false},{n:"Egg",pp:0.25,u:"",userHas:false},
      {n:"Maize meal (for pap)",pp:80,u:"g",userHas:false},{n:"Tinned tomatoes (for gravy)",pp:80,u:"g",userHas:false},
      {n:"Onion (for gravy, diced)",pp:15,u:"g",userHas:false},{n:"Oil",pp:10,u:"ml",userHas:false},
      {n:"Salt and pepper",pp:null,u:"",userHas:false},
    ],
    method:["MIX frikkadels: mince, grated onion, squeezed bread, egg. Season. Shape into balls. Pan-fry until golden and cooked through.","GRAVY: Fry diced onion. Add tomatoes. Simmer 10 min. Season.","PAP: Boil water, whisk in maize meal, cook 15 min until thick.","Serve frikkadels in tomato gravy over pap."],
    tip:"The bread in the frikkadels stretches the mince and keeps them light. Use the cheapest beef mince available.",
    nutrition:{kcal:480,protein_g:28,carbs_g:55,fat_g:14},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_bean_curry", name:"Bean & Potato Curry with Rice", emoji:"🍛", costPP:7, serves:4, time:35,
    tags:["vegetarian","filling","curry","south african","vegan"],
    ingredients:[
      {n:"Tinned kidney or sugar beans (drained)",pp:80,u:"g",userHas:false},{n:"Potatoes (cubed)",pp:80,u:"g",userHas:false},
      {n:"Onion (diced)",pp:25,u:"g",userHas:false},{n:"Garlic",pp:2,u:"g",userHas:false},
      {n:"Tinned tomatoes",pp:60,u:"g",userHas:false},{n:"Curry powder",pp:3,u:"g",userHas:false},
      {n:"Turmeric",pp:0.5,u:"g",userHas:false},{n:"Oil",pp:8,u:"ml",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},
    ],
    method:["Cook rice in salted water.","Fry onion and garlic until golden. Add curry powder and turmeric — fry 2 min in oil.","Add tomatoes. Cook 5 min. Add potatoes. Cover and cook 15 min.","Add beans. Cook 5 more min until potatoes are soft and sauce is thick. Season.","Serve bean curry over rice."],
    tip:"Potatoes and beans together give complete protein. The curry powder does all the flavour work. Grate an extra carrot into the sauce to bulk it out further — it disappears completely.",
    nutrition:{kcal:440,protein_g:15,carbs_g:78,fat_g:7},
    storage:"Fridge 4 days. Freezer 2 months." },

  { id:"bud_bobotie_budget", name:"Budget Bobotie", emoji:"🍛", costPP:18, serves:6, time:60,
    tags:["south african","mince","cape malay","bake","classic"],
    ingredients:[
      {n:"Beef mince (economy)",pp:100,u:"g",userHas:false},{n:"Onion (diced)",pp:20,u:"g",userHas:false},
      {n:"Garlic",pp:2,u:"g",userHas:false},{n:"Curry powder",pp:2,u:"g",userHas:false},
      {n:"Apricot jam",pp:10,u:"g",userHas:false},{n:"Chutney",pp:10,u:"g",userHas:false},
      {n:"White bread (soaked in milk)",pp:20,u:"g",userHas:false},{n:"Egg (for topping)",pp:0.5,u:"",userHas:false},
      {n:"Milk (for topping)",pp:30,u:"ml",userHas:false},{n:"Raisins",pp:8,u:"g",userHas:false},
      {n:"White rice",pp:80,u:"g",userHas:false},{n:"Turmeric (for yellow rice)",pp:0.5,u:"g",userHas:false},
    ],
    method:["Fry onion and garlic. Add curry powder. Add mince — brown completely.","Add jam, chutney, raisins and squeezed bread. Mix well. Pour into baking dish.","Beat egg and milk. Pour over top. Bake 180°C for 35 min.","YELLOW RICE: Cook rice with turmeric and a handful of raisins. Serve bobotie over yellow rice."],
    tip:"Economy mince works perfectly — the spices and sweet sauce carry the flavour. The bread stretches the mince further and keeps it soft. Yellow rice is non-negotiable with bobotie.",
    nutrition:{kcal:560,protein_g:30,carbs_g:65,fat_g:16},
    storage:"Fridge 3 days. Freezes well." },

  { id:"bud_chicken_curry_rice", name:"SA Chicken Curry with Rice", emoji:"🍛", costPP:22, serves:4, time:50,
    tags:["chicken","curry","south african","family","rice"],
    ingredients:[
      {n:"Chicken drumsticks or thighs",pp:180,u:"g",userHas:false},{n:"Onion (diced)",pp:25,u:"g",userHas:false},
      {n:"Garlic",pp:3,u:"g",userHas:false},{n:"Curry powder",pp:4,u:"g",userHas:false},
      {n:"Turmeric",pp:0.5,u:"g",userHas:false},{n:"Tinned tomatoes",pp:60,u:"g",userHas:false},
      {n:"Potatoes (quartered)",pp:60,u:"g",userHas:false},{n:"White rice",pp:80,u:"g",userHas:false},
      {n:"Oil",pp:8,u:"ml",userHas:false},
    ],
    method:["Fry onion until golden. Add garlic and spices. Fry 2 min.","Brown chicken pieces. Add tomatoes. Simmer covered 20 min.","Add potatoes. Cook uncovered 20 min until thick. Serve with rice."],
    tip:"Chicken on the bone is always cheaper than boneless and gives far more flavour. Buy the whole pack of drumsticks — best value.",
    nutrition:{kcal:520,protein_g:35,carbs_g:55,fat_g:14},
    storage:"Fridge 3 days. Freezer 2 months." },

  { id:"bud_beef_stew_dumplings", name:"Hearty Beef Stew with Dumbolo", emoji:"🥘", costPP:25, serves:4, time:120,
    tags:["beef","stew","winter","family","comfort"],
    ingredients:[
      {n:"Beef stew meat (chuck or shin)",pp:130,u:"g",userHas:false},{n:"Onion",pp:25,u:"g",userHas:false},
      {n:"Carrots",pp:40,u:"g",userHas:false},{n:"Potatoes",pp:80,u:"g",userHas:false},
      {n:"Beef stock cube",pp:0.5,u:"",userHas:false},{n:"Flour (for dusting)",pp:8,u:"g",userHas:false},
      {n:"Cake flour (for dumplings)",pp:30,u:"g",userHas:false},{n:"Baking powder (for dumplings)",pp:0.5,u:"g",userHas:false},
      {n:"Milk (for dumplings)",pp:20,u:"ml",userHas:false},{n:"Oil",pp:10,u:"ml",userHas:false},
    ],
    method:["Dust beef in flour. Brown in batches in hot oil. Remove.","Fry onion. Add beef and stock (dissolved in water). Simmer 1 hour covered.","Add carrots and potatoes. Cook 25 min.","DUMPLINGS: Mix flour, baking powder, pinch salt and milk to soft dough. Drop spoonfuls into stew. Cover and cook 15 min — do not open lid."],
    tip:"Shin and chuck are the cheapest cuts and become melt-tender with long slow cooking. The dombolo dumplings soak up the gravy and make it incredibly filling.",
    nutrition:{kcal:520,protein_g:30,carbs_g:55,fat_g:16},
    storage:"Fridge 4 days. Freezer 3 months." },

  { id:"bud_roast_chicken_veg", name:"Roast Chicken with Roast Veg", emoji:"🍗", costPP:35, serves:4, time:90,
    tags:["chicken","roast","sunday","family","budget special"],
    ingredients:[
      {n:"Whole chicken",pp:400,u:"g",userHas:false},{n:"Potatoes (quartered)",pp:100,u:"g",userHas:false},
      {n:"Sweet potato (cubed)",pp:80,u:"g",userHas:false},{n:"Carrots (chunked)",pp:40,u:"g",userHas:false},
      {n:"Onion (quartered)",pp:25,u:"g",userHas:false},{n:"Garlic",pp:3,u:"g",userHas:false},
      {n:"Olive or sunflower oil",pp:15,u:"ml",userHas:false},{n:"Dried herbs",pp:1,u:"g",userHas:false},
      {n:"Salt and pepper",pp:null,u:"",userHas:false},
    ],
    method:["Preheat oven to 200°C. Pat chicken dry. Rub with oil, garlic and herbs. Season well.","Toss vegetables in oil. Season. Place in roasting pan.","Put chicken on top of vegetables. Roast 20 min per 500g + 20 min extra.","Rest 15 min. Serve with pan juices."],
    tip:"A whole chicken feeds 4–6 people and is much better value than buying chicken pieces. The vegetables roast in the chicken fat — no extra seasoning needed.",
    nutrition:{kcal:580,protein_g:42,carbs_g:45,fat_g:22},
    storage:"Fridge 3 days. Use carcass for soup stock." },
];

// Budget price tiers for filtering
const BUDGET_TIERS = [
  {id:"10",  label:"Under R10pp",  max:10,  emoji:"💛"},
  {id:"20",  label:"Under R20pp",  max:20,  emoji:"🟠"},
  {id:"30",  label:"Under R30pp",  max:30,  emoji:"🔴"},
  {id:"40",  label:"Under R40pp",  max:40,  emoji:"💜"},
];


// ── SEARCH ENGINE ─────────────────────────────────────────────────
function buildSearchIndex(){
  const idx = [];
  function add(name, emoji, section, sectionLabel, color, navAction, tags){
    idx.push({name, emoji, section, sectionLabel, color, navAction, tags:(tags||[]).map(t=>t.toLowerCase())});
  }

  // Braai
  (typeof BRAAI_MEATS!=='undefined'?BRAAI_MEATS:[]).forEach(r=>add(r.name,r.emoji||'🔥','braai','Braai & Fire Cooking','#c06020',`set({screen:'braai',braiStep:2,braiCat:'meaty',braaiView:null})`,[r.name]));
  (typeof SIDES_GROUPS!=='undefined'?SIDES_GROUPS:[]).forEach(g=>(g.items||[]).forEach(r=>add(r.name,r.emoji||'🥗','braai','Braai · '+g.label,'#c06020',`set({screen:'braai',braiStep:3,braiCat:'${g.id}'})`,[r.name,g.label])));

  // Events - Finger Foods
  Object.values(typeof EVENTS_FINGER_FOODS!=='undefined'?EVENTS_FINGER_FOODS:{}).flat().forEach(r=>add(r.name,r.emoji||'🍽️','events','Finger Foods','#d04080',`set({screen:'events',eventTab:'fingerfoods',fingerSection:'savoury',fingerView:'browse'})`,[r.name]));

  // Events - Buffet
  [...(typeof EVENTS_BIG_COOKING_MAINS!=='undefined'?EVENTS_BIG_COOKING_MAINS:[]),
   ...(typeof EVENTS_BIG_COOKING_SIDES!=='undefined'?EVENTS_BIG_COOKING_SIDES:[]),
   ...(typeof EVENTS_BIG_COOKING_SALADS!=='undefined'?EVENTS_BIG_COOKING_SALADS:[]),
   ...(typeof EVENTS_STARTERS!=='undefined'?EVENTS_STARTERS:[]),
   ...(typeof EVENTS_DESSERTS!=='undefined'?EVENTS_DESSERTS:[]),
  ].forEach(r=>add(r.name,r.emoji||'🍽️','events','Events · Buffet','#d04080',`set({screen:'events',eventTab:'bigcooking'})`,[r.name]));

  // Cultural
  (typeof EVENTS_CULTURAL!=='undefined'?EVENTS_CULTURAL:[]).forEach(g=>(g.dishes||[]).forEach(r=>add(r.name,r.emoji||'🌍','events','Cultural · '+g.name,'#d04080',`set({screen:'events',eventTab:'cultural'})`,[r.name,g.name])));

  // Health Hub
  [...(typeof FRESH_JUICES!=='undefined'?FRESH_JUICES:[]),
   ...(typeof SMOOTHIES!=='undefined'?SMOOTHIES:[]),
   ...(typeof OVERNIGHT_OATS!=='undefined'?OVERNIGHT_OATS:[]),
   ...(typeof HEALTHY_MUFFINS!=='undefined'?HEALTHY_MUFFINS:[]),
   ...(typeof RAW_AND_REAL!=='undefined'?RAW_AND_REAL:[]),
  ].forEach(r=>add(r.name,r.emoji||'🌿','smoothies','Health Hub','#20a080',`set({screen:'smoothies'})`,[r.name,...(r.badges||[])]));

  // Fermented
  (typeof FERMENTED_RECIPES!=='undefined'?FERMENTED_RECIPES:[]).forEach(r=>add(r.name,r.emoji||'🫙','smoothies','Health Hub · Fermented','#20a080',`set({screen:'smoothies',vitalCat:'fermented'})`,[r.name,...(r.badges||[])]));

  // Tiny Tummies
  (typeof BABY_RECIPES!=='undefined'?BABY_RECIPES:[]).forEach(r=>add(r.name,r.emoji||'🍼','babyapp','Tiny Tummies · '+r.stageLabel,'#e07090',`set({screen:'babyapp',activeBaby:null})`,[r.name,...(r.badges||[]),(r.stageLabel||'')]));

  // Dogs
  Object.values(typeof DOG_RECIPES!=='undefined'?DOG_RECIPES:{}).flat().forEach(r=>add(r.name,r.emoji||'🐕','furryapp','Furry Friends · Dogs','#9060d0',`set({screen:'furryapp',furryPet:'dog'})`,[r.name,...(r.ages||[])]));

  // Meal sections
  [...(BREAKFAST_RECIPES||[])].forEach(r=>add(r.name,r.emoji,'breakfast','Breakfast',r.color||'#d0a020','set({screen:\'breakfast\'})',[r.name,...(r.tags||[])]));
  [...(LIGHTLUNCH_RECIPES||[])].forEach(r=>add(r.name,r.emoji,'lightlunch','Light Lunch','#40a060','set({screen:\'lightlunch\'})',[r.name,...(r.tags||[])]));
  [...(SUPPER_RECIPES||[])].forEach(r=>add(r.name,r.emoji,'supper','Supper','#8040c0','set({screen:\'supper\'})',[r.name,...(r.tags||[])]));
  [...(BAKES_RECIPES||[])].forEach(r=>add(r.name,r.emoji,'bakes','Bakes & Cakes','#d06080','set({screen:\'bakes\'})',[r.name,...(r.tags||[])]));

  // Popular Recipes
  [...(POPULAR_RECIPES.sa||[]),...(POPULAR_RECIPES.international||[])].forEach(r=>
    add(r.name,r.emoji||'🍽️','search','Popular · '+r.cuisine,'#4080d0',
      `setQuiet({_popularRecipe:${JSON.stringify({id:r.id})}})`,
      [r.name,r.cuisine,...(r.tags||[])])
  );

  // Cats
  Object.values(typeof CAT_RECIPES!=='undefined'?CAT_RECIPES:{}).flat().forEach(r=>add(r.name,r.emoji||'🐱','furryapp','Furry Friends · Cats','#e08040',`set({screen:'furryapp',furryPet:'cat'})`,[r.name,...(r.ages||[])]));

  return idx;
}

// Debounce timer for search
var _searchTimer = null;

function doSearch(q){
  // Update state quietly without full redraw - just update results panel
  S.searchQuery = q;
  
  // Clear previous timer
  if(_searchTimer) clearTimeout(_searchTimer);
  
  if(!q||q.trim().length<2){
    S.chefRecipe=null; S.chefLoading=false; S._searchResults=[];
    updateSearchResults();
    return;
  }
  
  // Search immediately for in-app results
  const terms = q.toLowerCase().trim().split(/\s+/);
  const idx = buildSearchIndex();
  const results = idx.filter(item=>{
    const haystack = (item.name+' '+item.sectionLabel+' '+item.tags.join(' ')).toLowerCase();
    return terms.every(t=>haystack.includes(t));
  });
  
  S._searchResults = results;
  S.chefRecipe = null;
  updateSearchResults();
  
  // If no results, wait 800ms then call Tinza Chef
  if(results.length===0){
    S.chefLoading = true;
    updateSearchResults();
    _searchTimer = setTimeout(()=>{ callTinzaChef(q); }, 800);
  }
}

function updateSearchResults(){
  // Only update the results panel — don't rebuild the whole page
  const panel = document.getElementById('search-results-panel');
  if(panel) panel.innerHTML = buildSearchResultsHTML();
}

function buildSearchResultsHTML(){
  const q = S.searchQuery||'';
  const results = S._searchResults||[];
  const chef = S.chefRecipe;
  const loading = S.chefLoading;

  if(!q) return `<div style="text-align:center;padding:30px 0;">
    <div style="font-size:48px;margin-bottom:16px;">🔍</div>
    <div style="font-size:14px;color:#2040a0;margin-bottom:24px;">Search across all sections</div>
    <div style="text-align:left;">
      <div style="font-size:10px;letter-spacing:2px;color:#2040a0;text-transform:uppercase;margin-bottom:10px;">Try searching for...</div>
      ${['chicken','malva pudding','gluten free','baby 6 months','dog biscuit','kombucha','smoothie','braai salad'].map(s=>`<button onclick="document.getElementById('search-input').value='${s}';doSearch('${s}')" style="display:inline-block;margin:4px;padding:6px 12px;border-radius:20px;border:1px solid #2040a0;background:#0a0f20;color:#4080d0;font-size:12px;cursor:pointer;">${s}</button>`).join('')}
    </div>
  </div>
  <div style="margin-top:20px;">
    <div style="font-size:10px;letter-spacing:2px;color:#2040a0;text-transform:uppercase;margin-bottom:12px;">🇿🇦 SA Classics</div>
    ${(POPULAR_RECIPES.sa||[]).map(r=>`<div onclick="setQuiet({_popularRecipe:{id:'${r.id}'}})" style="background:#0f1020;border:1px solid #1a2a40;border-radius:10px;padding:10px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;cursor:pointer;">
      <span style="font-size:22px;">${r.emoji}</span>
      <div style="flex:1;">
        <div style="font-size:13px;color:#e0e8f0;">${r.name}</div>
        ${r.intl?`<div style="font-size:10px;color:#3a4a5a;font-style:italic;">${r.intl}</div>`:''}
        <div style="font-size:10px;color:#2040a0;margin-top:1px;">${r.cuisine} · ⏱️ ${r.time} min</div>
      </div>
      <span style="color:#4080d0;font-size:14px;">→</span>
    </div>`).join('')}
    <div style="font-size:10px;letter-spacing:2px;color:#2040a0;text-transform:uppercase;margin:16px 0 12px;">🌍 International Favourites</div>
    ${(POPULAR_RECIPES.international||[]).map(r=>`<div onclick="setQuiet({_popularRecipe:{id:'${r.id}'}})" style="background:#0f1020;border:1px solid #1a2a40;border-radius:10px;padding:10px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;cursor:pointer;">
      <span style="font-size:22px;">${r.emoji}</span>
      <div style="flex:1;"><div style="font-size:13px;color:#e0e8f0;">${r.name}</div><div style="font-size:10px;color:#2040a0;margin-top:2px;">${r.cuisine} · ⏱️ ${r.time} min</div></div>
      <span style="color:#4080d0;font-size:14px;">→</span>
    </div>`).join('')}
  </div>`;

  if(loading) return `<div style="text-align:center;padding:40px 0;">
    <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
    <div style="font-size:14px;color:#4080d0;">Finding the perfect recipe for you...</div>
    <div style="font-size:11px;color:#2040a0;margin-top:6px;">Just a moment</div>
  </div>`;

  let html = '';

  if(results.length>0){
    html += `<div style="font-size:10px;letter-spacing:2px;color:#4080d0;text-transform:uppercase;margin-bottom:10px;">${results.length} recipe${results.length!==1?'s':''} found</div>`;
    html += results.map(r=>`<div onclick="${r.navAction}" style="background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;">
      <span style="font-size:28px;">${r.emoji}</span>
      <div style="flex:1;">
        <div style="font-size:14px;color:#f5e8cc;">${r.name}</div>
        <div style="font-size:11px;color:#4060a0;margin-top:2px;">${r.sectionLabel}</div>
      </div>
      <span style="color:#4080d0;font-size:16px;">→</span>
    </div>`).join('');
  }

  if(chef && !chef._error){
    const servings = S.searchServings||4;
    function fmt(pp,u){ const r=pp*servings; if((u==='g'||u==='ml')&&r>=1000) return (Math.round(r/100)/10)+(u==='g'?'kg':'L'); return Math.round(r*10)/10+(u||''); }
    html += `<div style="background:#0f1020;border:2px solid #4080d0;border-radius:12px;padding:16px;margin-top:${results.length?'16px':'0'};">
      <div style="font-size:11px;color:#4060a0;margin-bottom:6px;">✨ Recipe found for you</div>
      <div style="font-size:18px;color:#f5e8cc;font-weight:bold;margin-bottom:4px;">${chef.emoji} ${chef.name}</div>
      <div style="font-size:11px;color:#4060a0;margin-bottom:12px;">⏱️ ${chef.time} min</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <button onclick="setQuiet({searchServings:Math.max(1,(S.searchServings||4)-1)});updateSearchResults()" style="width:28px;height:28px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:16px;cursor:pointer;">−</button>
        <span style="font-size:20px;color:#f5c842;font-weight:bold;min-width:24px;text-align:center;">${servings}</span>
        <button onclick="setQuiet({searchServings:Math.min(500,(S.searchServings||4)+1)});updateSearchResults()" style="width:28px;height:28px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:16px;cursor:pointer;">+</button>
        <span style="font-size:11px;color:#2040a0;">people · quantities scale</span>
      </div>
      <div style="margin-bottom:10px;">${(chef.ingredients||[]).map(i=>`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #1a2030;font-size:12px;"><span style="color:#c0c8e0;">${i.n}</span><span style="color:#f5c842;font-weight:bold;">${fmt(i.pp,i.u)}</span></div>`).join('')}</div>
      <button onclick="set({screen:'search',chefRecipe:S.chefRecipe,_searchResults:S._searchResults,searchQuery:S.searchQuery,_showChefFull:true})" style="width:100%;padding:10px;border-radius:8px;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:13px;cursor:pointer;margin-bottom:8px;">See Full Recipe & Method →</button>
      <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🍽️ *${chef.name}*\nFor ${servings} people\n\n'+chef.ingredients.map(i=>{const r=i.pp*${servings};return '• '+i.n+': '+((r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||''));}).join('\n')+'\n\nFound with Tinza 😊 tinza.netlify.app'),'_blank')" style="width:100%;padding:10px;border-radius:8px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;">📱 Share via WhatsApp</button>
    </div>`;
  }

  if(chef&&chef._error) html += `<div style="background:#1a0f10;border:1px solid #4a2020;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:13px;color:#c07070;">Couldn't find a recipe — try a different search term</div></div>`;

  return html || `<div style="text-align:center;padding:20px;color:#2040a0;font-size:13px;">No recipes found for "${q}"</div>`;
}

async function callTinzaChef(query){
  try {
    const prompt = `You are Tinza Chef, a South African recipe assistant. Generate a recipe for: "${query}"

Return ONLY a JSON object (no markdown, no backticks) in this exact format:
{
  "name": "Recipe name",
  "emoji": "single emoji",
  "serves": 4,
  "time": 30,
  "ingredients": [
    {"n": "Ingredient name", "pp": 100, "u": "g"},
    {"n": "Another ingredient", "pp": 15, "u": "ml"}
  ],
  "method": ["Step 1", "Step 2", "Step 3"],
  "tip": "One useful tip",
  "section": "appropriate section name"
}

Rules:
- All amounts in grams (g) or millilitres (ml) only - no cups, tablespoons etc
- pp = amount per 1 person/serving
- Use South African ingredients and context where appropriate
- Keep it practical and delicious`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const recipe = JSON.parse(clean);
    recipe._isChef = true;
    recipe._query = query;
    set({chefRecipe:recipe, chefLoading:false});
  } catch(e){
    set({chefRecipe:{_error:true, _query:query}, chefLoading:false});
  }
}

function searchHTML(){
  const q = S.searchQuery||'';
  const chef = S.chefRecipe;
  const servings = S.searchServings||4;

  // Popular recipe detail view
  if(S._popularRecipe){
    const allPop = [...(POPULAR_RECIPES.sa||[]),...(POPULAR_RECIPES.international||[])];
    const pr = allPop.find(r=>r.id===S._popularRecipe.id);
    if(pr){
      function fmt(pp,u){ const r=pp*servings; if((u==='g'||u==='ml')&&r>=1000) return (Math.round(r/100)/10)+(u==='g'?'kg':'L'); return Math.round(r*10)/10+(u||''); }
      return `<div style="min-height:100vh;background:#0f0e0c;">
        <div style="background:#0f1020;border-bottom:1px solid #2040a0;padding:14px 20px;">
          <button onclick="setQuiet({_popularRecipe:null})" style="background:none;border:none;color:#4080d0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
          <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${pr.emoji} ${pr.name}</h1>
          ${pr.intl?`<div style="font-size:11px;color:#4a5a6a;font-style:italic;margin-bottom:2px;">${pr.intl}</div>`:''}
          <div style="font-size:11px;color:#4060a0;">${pr.cuisine} · ⏱️ ${pr.time} min</div>
        </div>
        <div class="content">
          <div style="display:flex;align-items:center;gap:12px;background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:12px;margin-bottom:12px;">
            <div style="font-size:11px;color:#4080d0;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Servings</div>
            <button onclick="setQuiet({searchServings:Math.max(1,(S.searchServings||4)-1)});draw()" style="width:32px;height:32px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:18px;cursor:pointer;">−</button>
            <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${servings}</span>
            <button onclick="setQuiet({searchServings:Math.min(500,(S.searchServings||4)+1)});draw()" style="width:32px;height:32px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:18px;cursor:pointer;">+</button>
            <span style="font-size:11px;color:#2040a0;">people · all quantities scale</span>
          </div>
          <div style="background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#4080d0;text-transform:uppercase;margin-bottom:10px;">Ingredients — ${servings} serving${servings!==1?'s':''}</div>
            ${(pr.ingredients||[]).map(i=>!i.pp?`<div style="padding:5px 0;border-bottom:1px solid #1a2030;font-size:12px;color:#4060a0;font-style:italic;">• ${i.n} — to taste</div>`:
              `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1a2030;"><span style="font-size:13px;color:#c0c8e0;flex:1;">${i.n}</span><span style="font-size:13px;color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${fmt(i.pp,i.u)}</span></div>`).join('')}
          </div>
          <div style="background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#4080d0;text-transform:uppercase;margin-bottom:10px;">Method</div>
            ${(pr.method||[]).map((step,si)=>`<div style="display:flex;gap:12px;margin-bottom:12px;"><div class="step-num" style="background:#0a0f20;border:1px solid #4080d0;color:#4080d0;">${si+1}</div><p style="margin:2px 0 0;font-size:13px;color:#c0c8e0;line-height:1.7;">${step}</p></div>`).join('')}
          </div>
          ${pr.tip?`<div style="background:#0a0f20;border:1px solid #2040a0;border-radius:10px;padding:12px;margin-bottom:12px;"><span style="color:#4080d0;font-size:11px;">💡 TIP: </span><span style="font-size:12px;color:#8090c0;">${pr.tip}</span></div>`:''}
          ${pr.storage?`<div style="background:#0a0f20;border:1px solid #2040a0;border-radius:10px;padding:10px 12px;margin-bottom:12px;"><span style="color:#4080d0;font-size:11px;">🧊 STORAGE: </span><span style="font-size:12px;color:#8090c0;">${pr.storage}</span></div>`:''}
          <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🍽️ *${pr.name}*\nFor ${servings} people\n\nIngredients:\n'+(pr.ingredients||[]).filter(i=>i.pp).map(i=>{const r=i.pp*${servings};return '• '+i.n+': '+((r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||''));}).join('\n')+'\n\nFound with Tinza 😊 tinza.netlify.app'),'_blank')" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:20px;">📱 Share via WhatsApp</button>
        </div>
      </div>`;
    }
  }

  // Full recipe view
  if(chef && !chef._error && S._showChefFull){
    const servings = S.searchServings||4;
    function fmt(pp,u){ const r=pp*servings; if((u==='g'||u==='ml')&&r>=1000) return (Math.round(r/100)/10)+(u==='g'?'kg':'L'); return Math.round(r*10)/10+(u||''); }
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#0f1020;border-bottom:1px solid #2040a0;padding:14px 20px;">
        <button onclick="setQuiet({_showChefFull:false})" style="background:none;border:none;color:#4080d0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Search</button>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${chef.emoji} ${chef.name}</h1>
        <div style="font-size:11px;color:#4060a0;">⏱️ ${chef.time} min</div>
      </div>
      <div class="content">
        <div style="display:flex;align-items:center;gap:12px;background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:11px;color:#4080d0;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Servings</div>
          <button onclick="setQuiet({searchServings:Math.max(1,(S.searchServings||4)-1)});updateSearchResults()" style="width:32px;height:32px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:18px;cursor:pointer;">−</button>
          <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${servings}</span>
          <button onclick="setQuiet({searchServings:Math.min(500,(S.searchServings||4)+1)});updateSearchResults()" style="width:32px;height:32px;border-radius:50%;background:#0a0f20;border:2px solid #4080d0;color:#4080d0;font-size:18px;cursor:pointer;">+</button>
          <span style="font-size:11px;color:#2040a0;">people · all quantities scale</span>
        </div>
        <div style="background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#4080d0;text-transform:uppercase;margin-bottom:10px;">Ingredients — ${servings} serving${servings!==1?'s':''}</div>
          ${(chef.ingredients||[]).map(i=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1a2030;"><span style="font-size:13px;color:#c0c8e0;flex:1;">${i.n}</span><span style="font-size:13px;color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${fmt(i.pp,i.u)}</span></div>`).join('')}
        </div>
        <div style="background:#0f1020;border:1px solid #2040a0;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#4080d0;text-transform:uppercase;margin-bottom:10px;">Method</div>
          ${(chef.method||[]).map((step,si)=>`<div style="display:flex;gap:12px;margin-bottom:12px;"><div class="step-num" style="background:#0a0f20;border:1px solid #4080d0;color:#4080d0;">${si+1}</div><p style="margin:2px 0 0;font-size:13px;color:#c0c8e0;line-height:1.7;">${step}</p></div>`).join('')}
        </div>
        ${chef.tip?`<div style="background:#0a0f20;border:1px solid #2040a0;border-radius:10px;padding:12px;margin-bottom:12px;"><span style="color:#4080d0;font-size:11px;">💡 TIP: </span><span style="font-size:12px;color:#8090c0;">${chef.tip}</span></div>`:''}
        <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🍽️ *${chef.name}*\nFor ${servings} people\n\nIngredients:\n'+chef.ingredients.map(i=>{const r=i.pp*${servings};return '• '+i.n+': '+((r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||''));}).join('\n')+'\n\nFound with Tinza 😊 tinza.netlify.app'),'_blank')" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:20px;">📱 Share via WhatsApp</button>
      </div>
    </div>`;
  }

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#0f1020;border-bottom:1px solid #2040a0;padding:14px 20px;">
      <button onclick="set({screen:'home',searchQuery:'',chefRecipe:null,_searchResults:[],chefLoading:false,_showChefFull:false})" style="background:none;border:none;color:#4080d0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🔍 Search & Discover</h1>
      <p style="margin:4px 0 10px;font-size:11px;color:#4060a0;font-style:italic;">Search every recipe in Tinza</p>
      <div style="position:relative;">
        <input
          id="search-input"
          type="text"
          value="${q}"
          placeholder="Try: chicken, malva pudding, baby 6 months..."
          oninput="doSearch(this.value)"
          autocomplete="off"
          style="width:100%;padding:12px 40px 12px 14px;border-radius:10px;border:2px solid ${q?'#4080d0':'#2040a0'};background:#0a0f20;color:#f5e8cc;font-size:14px;font-family:Georgia,serif;box-sizing:border-box;outline:none;"
        />
        ${q?`<button onclick="S.searchQuery='';S._searchResults=[];S.chefRecipe=null;S.chefLoading=false;document.getElementById('search-input').value='';updateSearchResults()" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:#4060a0;font-size:18px;cursor:pointer;">✕</button>`:''}
      </div>
    </div>
    <div class="content">
      <div id="search-results-panel">${buildSearchResultsHTML()}</div>
    </div>
  </div>`;
}


function comingSoonHTML(emoji, title, sub){
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#1a1208;border-bottom:1px solid #4a3520;padding:14px 20px;">
      <button onclick="set({screen:'home'})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${emoji} ${title}</h1>
      <p style="margin:4px 0 0;font-size:11px;color:#7a6a50;">${sub}</p>
    </div>
    <div style="padding:40px 20px;text-align:center;">
      <div style="font-size:60px;margin-bottom:20px;">${emoji}</div>
      <div style="font-size:18px;color:#f5e8cc;margin-bottom:10px;">${title}</div>
      <div style="font-size:13px;color:#7a6a50;margin-bottom:30px;line-height:1.6;">This section is being built.<br>Check back soon!</div>
      <div style="font-size:11px;color:#4a3520;">In the meantime, use <strong style="color:#4080d0;">Search & Discover</strong><br>to find any recipe — or let Tinza Chef generate one for you.</div>
      <button onclick="set({screen:'search'})" style="margin-top:20px;padding:12px 24px;background:#0a1020;border:2px solid #4080d0;border-radius:10px;color:#4080d0;font-size:13px;cursor:pointer;">🔍 Go to Search</button>
    </div>
  </div>`;
}

// ── WORLD KITCHEN DATA ────────────────────────────────────────────
// Meal categories
const WK_MEALS = [
  {id:"all",       l:"All",           e:"🍽️"},
  {id:"breakfast", l:"Breakfast",     e:"🍳"},
  {id:"lunch",     l:"Light Lunch",   e:"🥗"},
  {id:"supper",    l:"Supper",        e:"🍲"},
  {id:"starter",   l:"Starters",      e:"🥙"},
  {id:"side",      l:"Side Dishes",   e:"🥦"},
  {id:"salad",     l:"Salads",        e:"🥬"},
  {id:"dessert",   l:"Desserts",      e:"🍮"},
  {id:"bakes",     l:"Bakes",         e:"🍞"},
  {id:"condiment", l:"Condiments",    e:"🫙"},
  {id:"beverage",  l:"Beverages",     e:"🍹"},
];

// Tag popular recipes with meal category and region
// sa = South African, int = International
const WK_RECIPES = [
  // ── SOUTH AFRICAN ──
  {id:"wk_bobotie",         region:"sa", meal:"supper",    pop:1,  name:"Bobotie",                    intl:"Spiced Mince Bake",              emoji:"🍛", time:75,  cuisine:"Cape Malay",    tags:["mince","curry","bakes","classic"]},
  {id:"wk_malvapudding",    region:"sa", meal:"dessert",   pop:2,  name:"Malva Pudding",              intl:"SA Sticky Toffee Pudding",       emoji:"🍮", time:60,  cuisine:"Afrikaner",     tags:["dessert","sweet","bakes","classic"]},
  {id:"wk_koeksisters",     region:"sa", meal:"bakes",     pop:4,  name:"Koeksisters",                intl:"Syrup-Glazed Plaited Pastry",    emoji:"🍩", time:90,  cuisine:"Afrikaner",     tags:["sweet","fried","syrup","bakes"]},
  {id:"wk_melktert",        region:"sa", meal:"dessert",   pop:5,  name:"Melktert",                   intl:"SA Milk Tart",                   emoji:"🥧", time:60,  cuisine:"Afrikaner",     tags:["tart","dessert","milk tart"]},
  {id:"wk_frikkadels",      region:"sa", meal:"supper",    pop:6,  name:"Frikkadels",                 intl:"SA Beef Meatballs",              emoji:"🍖", time:40,  cuisine:"Afrikaner",     tags:["mince","meatballs","family"]},
  {id:"wk_vetkoek",         region:"sa", meal:"lunch",     pop:7,  name:"Vetkoek with Mince",         intl:"Fried Dough Bread with Mince",   emoji:"🍞", time:60,  cuisine:"Afrikaner",     tags:["bread","fried","street food"]},
  {id:"wk_bunnychow",       region:"sa", meal:"lunch",     pop:9,  name:"Bunny Chow",                 intl:"Durban Curry Bread Bowl",        emoji:"🍞", time:90,  cuisine:"Durban Indian", tags:["curry","bread","street food"]},
  {id:"wk_peppermintcrisp", region:"sa", meal:"dessert",   pop:10, name:"Peppermint Crisp Tart",      emoji:"🍫", time:20,  cuisine:"South African", tags:["no bake","dessert","chocolate"]},
  {id:"wk_chakalaka",       region:"sa", meal:"condiment", pop:11, name:"Chakalaka",                  intl:"Spiced Vegetable Relish",        emoji:"🫙", time:30,  cuisine:"Township",      tags:["relish","spicy","braai side"]},
  {id:"wk_rusks",           region:"sa", meal:"bakes",     pop:12, name:"Buttermilk Rusks",           intl:"SA Hard Dipping Biscuits",       emoji:"🍪", time:480, cuisine:"Afrikaner",     tags:["bakes","dip","coffee","bakes"]},
  {id:"wk_stampkoring",     region:"sa", meal:"side",      pop:13, name:"Stampkoring & Bacon",        intl:"Crushed Wheat Berry & Bacon",    emoji:"🌾", time:45,  cuisine:"Afrikaner",     tags:["starch","side","wheat"]},
  {id:"wk_snoekpate",       region:"sa", meal:"starter",   pop:14, name:"Smoked Snoek Pâté",          intl:"Smoked Cape Fish Pâté",          emoji:"🐟", time:15,  cuisine:"Cape",          tags:["fish","starter","spread"]},
  {id:"wk_amarulacheesecake",region:"sa",meal:"dessert",   pop:15, name:"Amarula Cheesecake",         emoji:"🎂", time:30,  cuisine:"South African", tags:["dessert","no bake","amarula"]},
  {id:"wk_waterblommetjie",  region:"sa",meal:"supper",    pop:16, name:"Waterblommetjie Bredie",     intl:"Cape Water Lily Lamb Stew",      emoji:"🌸", time:120, cuisine:"Cape",          tags:["lamb","stew","cape","seasonal"]},
  // Cultural SA dishes from Events
  {id:"wk_durban_curry",    region:"sa", meal:"supper",    pop:17, name:"Durban Lamb Curry",          emoji:"🍛", time:90,  cuisine:"Durban Indian", tags:["curry","lamb","spicy"]},
  {id:"wk_bobotie2",        region:"sa", meal:"supper",    pop:18, name:"Cape Malay Bobotie",         intl:"Spiced Mince Bake — Cape Style", emoji:"🥘", time:75,  cuisine:"Cape Malay",    tags:["mince","cape malay","bakes"]},
  {id:"wk_umngqusho",       region:"sa", meal:"side",      pop:19, name:"Umngqusho",                  intl:"Samp & Beans",                   emoji:"🌽", time:60,  cuisine:"Xhosa",         tags:["beans","maize","traditional"]},
  {id:"wk_samoosas",        region:"sa", meal:"starter",   pop:20, name:"Samoosas",                   intl:"SA Fried Pastry Triangles",      emoji:"🥟", time:60,  cuisine:"Cape Malay",    tags:["starter","fried","snack"]},
  {id:"wk_denningvleis",    region:"sa", meal:"supper",    pop:21, name:"Denningvleis",               intl:"Cape Malay Tamarind Lamb",       emoji:"🥩", time:120, cuisine:"Cape Malay",    tags:["lamb","tamarind","cape"]},
  {id:"wk_breyani",         region:"sa", meal:"supper",    pop:22, name:"Cape Malay Breyani",         intl:"Cape Spiced Rice & Lamb",        emoji:"🍚", time:120, cuisine:"Cape Malay",    tags:["rice","lamb","spiced"]},

  // ── INTERNATIONAL ──
  {id:"wk_spagbol",         region:"int", meal:"supper",   pop:1,  name:"Spaghetti Bolognese",        emoji:"🍝", time:60,  cuisine:"Italian",       tags:["pasta","beef","classic"]},
  {id:"wk_lasagne",         region:"int", meal:"supper",   pop:2,  name:"Classic Beef Lasagne",       emoji:"🥘", time:90,  cuisine:"Italian",       tags:["pasta","beef","bakes"]},
  {id:"wk_chickentikka",    region:"int", meal:"supper",   pop:3,  name:"Chicken Tikka Masala",       emoji:"🍛", time:60,  cuisine:"Indian",        tags:["curry","chicken","creamy"]},
  {id:"wk_butterchicken",   region:"int", meal:"supper",   pop:4,  name:"Butter Chicken",             emoji:"🍗", time:50,  cuisine:"Indian",        tags:["curry","chicken","mild"]},
  {id:"wk_roastchicken",    region:"int", meal:"supper",   pop:5,  name:"Roast Chicken",              emoji:"🍗", time:90,  cuisine:"Classic",       tags:["roast","chicken","sunday"]},
  {id:"wk_beefstew",        region:"int", meal:"supper",   pop:6,  name:"Classic Beef Stew",          emoji:"🥘", time:150, cuisine:"Classic",       tags:["beef","stew","winter"]},
  {id:"wk_chickensoup",     region:"int", meal:"lunch",    pop:7,  name:"Chicken Noodle Soup",        emoji:"🍲", time:90,  cuisine:"Classic",       tags:["soup","chicken","comfort"]},
  {id:"wk_shakshuka",       region:"int", meal:"breakfast",pop:8,  name:"Shakshuka",                  emoji:"🍳", time:30,  cuisine:"Middle Eastern",tags:["eggs","breakfast","brunch"]},
  {id:"wk_padthai",         region:"int", meal:"supper",   pop:9,  name:"Pad Thai",                   emoji:"🍜", time:25,  cuisine:"Thai",          tags:["noodles","quick","prawn"]},
  {id:"wk_choccake",        region:"int", meal:"dessert",  pop:10, name:"Classic Chocolate Cake",     emoji:"🎂", time:60,  cuisine:"Classic",       tags:["cake","dessert","chocolate","bakes"]},
  {id:"wk_greeksalad",      region:"int", meal:"salad",    pop:11, name:"Greek Salad",                emoji:"🥗", time:10,  cuisine:"Greek",         tags:["salad","feta","olive","fresh"]},
  {id:"wk_caesarsalad",     region:"int", meal:"salad",    pop:12, name:"Caesar Salad",               emoji:"🥬", time:15,  cuisine:"American",      tags:["salad","chicken","classic"]},
  {id:"wk_guacamole",       region:"int", meal:"condiment",pop:13, name:"Guacamole",                  emoji:"🥑", time:10,  cuisine:"Mexican",       tags:["dip","avocado","condiment"]},
  {id:"wk_hummus",          region:"int", meal:"condiment",pop:14, name:"Hummus",                     emoji:"🥙", time:10,  cuisine:"Middle Eastern",tags:["dip","chickpea","condiment"]},
  {id:"wk_pancakes",        region:"int", meal:"breakfast",pop:15, name:"Fluffy Pancakes",            emoji:"🥞", time:20,  cuisine:"Classic",       tags:["breakfast","sweet","quick"]},
  {id:"wk_frenchomelette",  region:"int", meal:"breakfast",pop:16, name:"French Omelette",            emoji:"🍳", time:10,  cuisine:"French",        tags:["breakfast","eggs","quick"]},
  {id:"wk_mushroomrisotto", region:"int", meal:"supper",   pop:17, name:"Mushroom Risotto",           emoji:"🍚", time:45,  cuisine:"Italian",       tags:["rice","vegetarian","creamy"]},
  {id:"wk_tomatsoup",       region:"int", meal:"lunch",    pop:18, name:"Roasted Tomato Soup",        emoji:"🍅", time:50,  cuisine:"Classic",       tags:["soup","vegetarian","warm"]},
  {id:"wk_tiramisu",        region:"int", meal:"dessert",  pop:19, name:"Tiramisu",                   emoji:"☕", time:30,  cuisine:"Italian",       tags:["dessert","no bake","coffee"]},
  {id:"wk_lemondrizzle",    region:"int", meal:"bakes",    pop:20, name:"Lemon Drizzle Cake",         emoji:"🍋", time:55,  cuisine:"British",       tags:["cake","lemon","bakes"]},
  {id:"wk_tacos",           region:"int", meal:"supper",   pop:21, name:"Beef Tacos",                 emoji:"🌮", time:30,  cuisine:"Mexican",       tags:["beef","quick","family"]},
  {id:"wk_creamytomato",    region:"int", meal:"supper",   pop:22, name:"Creamy Tomato Pasta",        emoji:"🍝", time:25,  cuisine:"Italian",       tags:["pasta","quick","vegetarian"]},
  {id:"wk_garlicbread",     region:"int", meal:"bakes",    pop:23, name:"Garlic Bread",               emoji:"🥖", time:15,  cuisine:"Italian",       tags:["bread","side","bakes","garlic"]},
  {id:"wk_bananabread",     region:"int", meal:"bakes",    pop:24, name:"Banana Bread",               emoji:"🍌", time:65,  cuisine:"Classic",       tags:["bakes","breakfast","sweet"]},
  {id:"wk_lentilsoup",      region:"int", meal:"lunch",    pop:25, name:"Red Lentil Soup",            emoji:"🍲", time:35,  cuisine:"Middle Eastern",tags:["soup","vegan","healthy"]},
];

function draw(){
  // Close How It Works when tapping anywhere on page
  if(S.howItWorksOpen) {
    setTimeout(function(){
      function closeHIW(e) {
        var hiw = document.getElementById('howItWorksBlock');
        if(hiw && !hiw.contains(e.target)) {
          document.removeEventListener('click', closeHIW);
          set({howItWorksOpen:false});
        }
      }
      document.addEventListener('click', closeHIW);
    }, 100);
  }
  // Close How Portion Size Works when tapping anywhere on page
  if(S.portionHelpOpen) {
    setTimeout(function(){
      function closePH(e) {
        var ph = document.getElementById('portionHelpBlock');
        if(ph && !ph.contains(e.target)) {
          document.removeEventListener('click', closePH);
          set({portionHelpOpen:false});
        }
      }
      document.addEventListener('click', closePH);
    }, 100);
  }
  // Wire search input after draw (only on initial navigation to search screen)
  if(S.screen === "search_results") {
    setTimeout(function(){
      var el = document.getElementById("searchPageInput");
      if(el && !el._wired) {
        el._wired = true;
        el.focus();
        el.oninput = function(){ globalSearchLive(this.value); };
      }
    }, 30);
  }

  const root = document.getElementById("root");
  if(!root) return;

  const prevContext = root._lastContext||'';
  const currContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.eventActiveRecipe?'recipe':'') + (S.weddingCakeView||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'');
  const sameContext = prevContext === currContext;
  const scrollToRestore = root._savedScroll != null ? root._savedScroll : (sameContext ? window.scrollY : 0);
  root._savedScroll = null;

  const tierBar=`<div style="background:#0f0d0a;border-bottom:2px solid #2a1f10;padding:8px 16px;">
    <div style="font-size:10px;color:#4a3520;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Testing — Switch Tier:</div>
    <div class="grid2" style="gap:6px;">
      <button onclick="USER_TIER='free';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;S.wkScreen=null;S.wkSelectedRegion=null;S.wkCountry=null;S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='free'?'#c06020':'#2a1808'};background:${USER_TIER==='free'?'#2a1808':'#161210'};color:${USER_TIER==='free'?'#c06020':'#4a3020'};font-size:11px;">🆓 Free</button>
      <button onclick="USER_TIER='pro';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;S.wkScreen=null;S.wkSelectedRegion=null;S.wkCountry=null;S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='pro'?'#c0a020':'#181808'};background:${USER_TIER==='pro'?'#181808':'#161210'};color:${USER_TIER==='pro'?'#f5c842':'#403820'};font-size:11px;">👑 Pro</button>
    </div>
  </div>`;

  let content="";
  if(S.viewingRecipe){ content=recipeView(); }
  else if(S.screen==="home"){ content=homeHTML(); }
  else if(S.screen==="braai"){ content=braaiHTML(); }
  else if(S.screen==="search_results"){ content=searchResultsHTML(); }
  else if(S.screen==="babyapp"){ content=S.babyView==='myplan'?babyMyPlanView():S.activeBaby?babyRecipeHTML_screen():babyListHTML(); }
  else if(S.screen==="search"){ content=searchHTML(); }
  else if(S.screen==="worldkitchen"){ content=worldKitchenHTML(); }
  else if(S.screen==="breakfast"){ content=breakfastHTML(); }
  else if(S.screen==="lightlunch"){ content=lightlunchHTML(); }
  else if(S.screen==="supper"){ content=supperHTML(); }
  else if(S.screen==="bakes"){ content=bakesHTML(); }
  else if(S.screen==="budget"){ content=budgetPlannerHTML(); }
  else if(S.screen==="ingredient"){ content=anchorIngredientHTML(); }
  else if(S.screen==="fourIngredients"){ content=fourIngredientsHTML(); }
  else if(S.screen==="mood"){ content=moodHTML(); }
  else if(S.screen==="weekplanner"){ content=comingSoonHTML("📅","Weekly Meal Planner","7-day planner coming soon"); }
  else if(S.screen==="furryapp"){ content=furryHTML(); }
  else if(S.screen==="smoothies"){ content=smoothiesHTML(); }
  else if(S.screen==="events"){ content=eventsHTML(); }
  else{ content=homeHTML(); }

  root.innerHTML = tierBar + content;
  if(S.screen==="worldkitchen" && !S.wkScreen){ setTimeout(initWKMap, 50); }

  // Sync sliders
  const guestSlider = document.querySelector('input[type=range][min="6"]');
  if(guestSlider) guestSlider.value = S.eventGuests;
  const peopleSlider = document.querySelector('input[type=range][min="1"]');
  if(peopleSlider) peopleSlider.value = S.people;
  root._lastContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.eventActiveRecipe?'recipe':'') + (S.weddingCakeView||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'');

  window.scrollTo(0, scrollToRestore);
  requestAnimationFrame(()=>{ window.scrollTo(0, scrollToRestore); });
}

function openEvent(id,t){
  // Look up recipe from all events arrays
  const all=[
    ...EVENTS_BIG_COOKING_MAINS,...EVENTS_BIG_COOKING_SIDES,...EVENTS_BIG_COOKING_SALADS,
    ...EVENTS_STARTERS,...EVENTS_DESSERTS,...EVENTS_CULTURAL,...EVENTS_SAUCES,
    ...(EVENTS_FINGER_FOODS.meaty||[]),...(EVENTS_FINGER_FOODS.pastry||[]),
    ...(EVENTS_FINGER_FOODS.sweet||[]),...(EVENTS_FINGER_FOODS.veggie||[]),
    ...(EVENTS_FINGER_FOODS.savoury||[]),
  ];
  const r = all.find(x=>x.id===id);
  if(r){
    const root=document.getElementById("root");
    if(root) root._savedScroll = window.scrollY;
    const obj=Object.assign({},r,{_type:t}); setQuiet({eventActiveRecipe:obj});
  }
}
function toggle(arr,id){ return arr.includes(id)?arr.filter(x=>x!==id):[...arr,id]; }
function fingerShopToggle(key){ var c=Object.assign({},S.fingerShopCart||{}); c[key]=!c[key]; setQuiet({fingerShopCart:c}); }

// Strip qualifier words so ingredients sort by their main name
// "Organic carrots (peeled)" → "carrots (peeled)"  "Fresh mint leaves" → "mint leaves"
function shopSortKey(name){
  return name
    .replace(/^(organic|fresh|frozen|dried|tinned|canned|full.fat|full cream|low.fat|low.sodium|plain|natural|unsalted|salted|lean|raw|cooked|large|medium|small|ripe|fine|finely|quality|baby)\s+/gi, '')
    .toLowerCase()
    .trim();
}
function tierAllows(t){ return true; } // All features unlocked
function maxMeats(){ return USER_TIER==="free"?2:99; }

function tierBadgeSmall(t){ return ""; } // No tier badges shown

function recipeBtn(type,id,returnStep){
  return `<div style="margin-top:6px;"><button style="background:#c06020;border:none;border-radius:6px;padding:5px 12px;font-size:11px;color:#fff;cursor:pointer;font-family:Georgia,serif;" onclick="event.stopPropagation();set({viewingRecipe:{type:'${type}',id:'${id}',returnStep:${returnStep}}})">📖 See Recipe & Method</button></div>`;
}

// ══════════════════════════════════════════════════════════════
// PORTION BRAIN — unified scaling for all dish types
// Rule: the more dishes of ANY type, the smaller each portion.
// User can override up with the serving adjuster on recipe detail.
// ══════════════════════════════════════════════════════════════

// Protein scaling multipliers (Family Mix base = 350g pp)
// Applied on top of the soloG base value
function meatSpreadMult(count){
  // The PLATE stays the same size — it just gets divided across more dishes.
  // Total protein pp is constant at ~350g (Family Mix base).
  // 1→350g | 2→175g each | 3→117g each | 4+→88g each
  if(count<=1) return 1.0;
  if(count===2) return 0.50;   // 350 ÷ 2
  if(count===3) return 0.334;  // 350 ÷ 3
  return 0.252;                // 350 ÷ ~4 (floor — 5,6,7 dishes still 88g each)
}

// Sides scaling: base perPerson shrinks as more sides added
// Based on decisions doc: 1→150g, 2→120g, 3→100g, 4→85g, 5+→75g
// We express this as a fraction of the 1-side base (150g = 1.0)
function sideSpreadMult(count){
  if(count<=1) return 1.0;
  if(count===2) return 0.80;   // 120/150
  if(count===3) return 0.667;  // 100/150
  if(count===4) return 0.567;  // 85/150
  return 0.5;                  // 75/150 (5+ stays here)
}

function calcMeat(meat){
  const count = S.selectedMeats.length;
  const spreadMult = meatSpreadMult(count);
  const appetiteMult = APPETITE[S.appetite].mult;
  // soloG is the 1-dish base (350g for Family Mix standard protein)
  // We scale it down by spreadMult as more meats are added
  if(meat.unit==="g"){
    const g = Math.round(meat.soloG * spreadMult * appetiteMult * S.people);
    return {display: g>=1000?(g/1000).toFixed(1)+"kg":g+"g", grams:g};
  } else {
    const pcs = Math.max(1, Math.round(meat.soloPcs * spreadMult * appetiteMult * S.people));
    const g = pcs * (meat.gramEach||100);
    return {display: pcs+" pcs ("+(g>=1000?(g/1000).toFixed(1)+"kg":g+"g")+")", grams:g};
  }
}

function calcSide(side){
  const count = S.selectedSides.length;
  const spreadMult = sideSpreadMult(count);
  const appetiteMult = APPETITE[S.appetite].mult;
  // perPerson is the 1-side base amount — scale down with more sides
  const qty = side.perPerson * spreadMult * appetiteMult * S.people;
  if(side.unit==="g") return qty>=1000?(qty/1000).toFixed(1)+"kg":Math.round(qty)+"g";
  if(side.unit==="ml") return qty>=1000?(qty/1000).toFixed(1)+"L":Math.round(qty)+"ml";
  if(side.unit==="pcs") return Math.ceil(qty)+" pcs";
  if(side.unit==="slices"||side.unit==="slice") return Math.ceil(qty)+" slices";
  if(side.unit==="stick") return Math.ceil(qty)+" sticks";
  if(side.unit==="portion") return Math.ceil(qty)+" portions";
  if(side.unit==="wheel") return qty<0.5?"share 1 wheel":Math.ceil(qty)+" wheel(s)";
  return Math.round(qty*10)/10+" "+side.unit;
}
function calcSideCost(side){
  const mult=APPETITE[S.appetite].mult;
  const p=S.budget==="pantry"?side.pantryP:S.budget==="indulge"?side.indulgeP:side.stdP;
  return Math.round(p*mult*S.people);
}
function normIngredientKey(name){
  return name.toLowerCase()
    .replace(/^(organic|fresh|frozen|dried|large|medium|small|baby|whole|raw|cooked|crushed|sliced|chopped|diced|minced|grated|peeled)\s+/g,'')
    .replace(/\s+(organic|fresh|frozen|dried|large|medium|small|baby|whole|raw|cooked|crushed|sliced|chopped|diced|minced|grated|peeled)$/g,'')
    .replace(/\s*\(.*?\)/g,'')
    .replace(/[^a-z0-9\s]/g,'')
    .replace(/\s+/g,' ')
    .trim();
}

function aisleCategory(name){
  const n = name.toLowerCase();
  if(/\b(beef|lamb|pork|chicken|boerewors|wors|mince|steak|rib|fillet|brisket|sosatie|kudu|game|fish|prawn|calamari|mussel|tuna|salmon|sardine|pilchard|anchovy|sausage|kebab|espetada|loin chop|rib chop|neck|chuck|biltong)\b/.test(n)) return '🥩 Meat & Fish';
  if(/\b(egg|milk|cream|butter|yoghurt|yogurt|cheese|halloumi|feta|mozzarella)\b/.test(n)) return '🥛 Dairy & Eggs';
  if(/\b(onion|garlic|tomato|potato|carrot|brinjal|pepper|courgette|leek|celery|cabbage|spinach|kale|lettuce|mushroom|butternut|pumpkin|sweet potato|broccoli|cauliflower|aubergine|cucumber|spring onion|parsley|coriander|basil|rosemary|thyme|sage|mint|dill|chilli|ginger|lemon|lime|avocado|corn|mealies|peas)\b/.test(n)) return '🥦 Fruit & Veg';
  if(/\b(oil|flour|sugar|salt|vinegar|honey|mustard|soy|worcestershire|balsamic|cornflour|bread|bun|roll|pasta|rice|noodle|maize meal|couscous|oats|lentil|chickpea|tomato paste|stock|cube|coconut|jam|chutney|curry|cumin|paprika|turmeric|cinnamon|clove|nutmeg|herb|spice|breadcrumb|panko|almond|walnut|peanut|sesame|tahini|hot sauce|basting|marinade|rub|braai spice|seasoning|cayenne|chilli flakes)\b/.test(n)) return '🥫 Pantry';
  return '🧂 Other';
}


function buildShoppingList(){
  const map={};
  const skipNames = ['water','tap water','ice water','boiling water','warm water','salted water','salt & pepper','salt and pepper','to taste','for serving','to serve','butcher\'s string'];
  
  function add(name, amt, unit, source){
    const skip = skipNames.some(s => name.toLowerCase().includes(s));
    if(skip || !amt || amt <= 0) return;
    // Use normalised key for deduplication — handles "organic brinjal" + "brinjal" as same item
    const key = normIngredientKey(name);
    if(!key) return;
    if(map[key]){
      map[key].amt += amt;
      if(source && !map[key].sources.includes(source)) map[key].sources.push(source);
    } else {
      map[key] = { name, amt, unit, sources: source ? [source] : [], aisle: aisleCategory(name) };
    }
  }

  // ── MEATS: break into actual ingredients using recipe.ingredients ──
  S.selectedMeats.forEach(mid => {
    const m = MEAT_GROUPS.flatMap(g => g.items).find(x => x.id === mid);
    if(!m) return;
    const recipe = m.recipe;
    const servings = S.recipeServings || S.people;
    const mult = APPETITE[S.appetite].mult * servings * meatSpreadMult(S.selectedMeats.length);
    
    // Add the main protein itself
    add(m.name, calcMeat(m).grams, "g", m.name);
    
    // Parse ingredient list for extra ingredients (marinades, rubs, sauces)
    if(recipe && recipe.ingredients){
      recipe.ingredients.forEach((ing, i) => {
        if(i === 0) return; // skip — that's the main protein, already added
        if(ing.startsWith("—")) return; // section divider
        // Parse: "Garlic — 5g per person (crushed)" → name="Garlic", amt=5*mult, unit="g"
        // Pattern: "Name — Xg/ml per person" or "Name — X tbsp/tsp per person"
        let m2;
        // Pattern 1: "Garlic — 5g per person" or "Garlic — 5ml per person"
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s*(g|ml|kg|L)\s+per\s+p/i);
        if(m2){ add(m2[1].trim(), parseFloat(m2[2])*(m2[3]==='kg'?1000:m2[3]==='L'?1000:1)*mult, m2[3]==='kg'?'g':m2[3]==='L'?'ml':m2[3], m.name); return; }
        // Pattern 2: "Garlic — 2 tbsp per person"
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s*(tbsp|tsp)\s+per\s+p/i);
        if(m2){ add(m2[1].trim(), parseFloat(m2[2])*(m2[3]==='tbsp'?15:5)*mult, 'ml', m.name); return; }
        // Pattern 3: "Eggs — 1 per 3 people" or "Bay leaves — 1 per 4 people" → countable, round UP
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s+per\s+(\d+)\s+people?/i);
        if(m2){ const qty = Math.ceil((parseFloat(m2[2]) / parseInt(m2[3])) * mult); add(m2[1].trim(), qty, 'pcs', m.name); return; }
        // Pattern 4: "Eggs — ½ per person" or "Eggs — 0.5 per person" → round UP
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.\/½⅓¼¾]+)\s+per\s+person/i);
        if(m2){
          let frac = m2[2].replace('½','0.5').replace('⅓','0.333').replace('¼','0.25').replace('¾','0.75');
          const qty = Math.ceil(parseFloat(frac) * mult);
          if(!isNaN(qty) && qty > 0) add(m2[1].trim(), qty, 'pcs', m.name);
          return;
        }
        // If no parseable quantity, skip (e.g. "Fresh rosemary — to taste")
      });
    }
  });

  // ── SIDES: use existing shopping[] arrays ──
  S.selectedSides.forEach(sid => {
    const s = SIDES_GROUPS.flatMap(g => g.items).find(x => x.id === sid);
    if(!s || !s.shopping) return;
    const mult = APPETITE[S.appetite].mult * S.people * sideSpreadMult(S.selectedSides.length);
    s.shopping.forEach(ing => { if(ing.per > 0) add(ing.name, Math.round(ing.per*mult*10)/10, ing.unit, s.name); });
  });

  // Sort by aisle order, then name
  const aisleOrder = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  const items = Object.values(map);
  items.sort((a,b) => {
    const ai = aisleOrder.indexOf(a.aisle), bi = aisleOrder.indexOf(b.aisle);
    if(ai !== bi) return ai - bi;
    return a.name.localeCompare(b.name);
  });
  return items;
}

function totalCost(){ let t=0; S.selectedMeats.forEach(mid=>{ const m=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===mid); if(m) t+=(calcMeat(m).grams/1000)*(MEAT_COSTS[mid]||120); }); S.selectedSides.forEach(sid=>{ const s=SIDES_GROUPS.flatMap(g=>g.items).find(x=>x.id===sid); if(s) t+=calcSideCost(s); }); return Math.round(t); }
function totalCals(){ let c=0; S.selectedMeats.forEach(mid=>{ const m=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===mid); if(m) c+=(calcMeat(m).grams/100)*(MEAT_CALS[mid]||200); }); return Math.round(c/S.people); }
function scaleAmt(str,mult){ if(!str) return str; const m=str.match(/^([0-9.]+)(.*)/); if(!m) return str; return (Math.round(parseFloat(m[1])*mult*10)/10)+m[2]; }

// ── MOOD FEATURE ─────────────────────────────────────────────────────

const MOODS = [
  { id:"exhausted",    e:"😴", label:"I'm exhausted",           sub:"Low effort · Quick · Comfort",          colour:"#6060a0", bg:"#0a0a18", prompt:"extremely quick and easy comfort food recipe requiring minimal effort, ideally one pot or one pan, under 20 minutes, no complicated steps, South African home cooking style" },
  { id:"pickmeup",     e:"😊", label:"I need a pick-me-up",     sub:"Comfort · Treat · Lift your mood",       colour:"#a06040", bg:"#180e08", prompt:"comforting, mood-lifting food — something warm and satisfying that feels like a treat, emotionally uplifting, South African comfort classics or a balanced treat meal" },
  { id:"sick",         e:"🤒", label:"I'm not feeling well",    sub:"Light · Nourishing · Easy to digest",   colour:"#40a060", bg:"#081808", prompt:"gentle, light, easy to digest food for someone who is sick — soothing broth, soft textures, nothing heavy, good for an upset stomach or mild illness" },
  { id:"impress",      e:"🔥", label:"I want to impress",       sub:"Special · Impressive · Worth the effort",colour:"#c06020", bg:"#1a0e08", prompt:"impressive dinner party recipe that looks and tastes spectacular, something special to wow guests, can be a bit more effort, restaurant quality at home" },
  { id:"healthy",      e:"🌿", label:"I want to be healthy",    sub:"Nutritious · Balanced · Energising",     colour:"#20a060", bg:"#081a10", prompt:"healthy, nutritious, balanced meal — lots of vegetables, lean protein, wholesome ingredients, energising and genuinely good for you, not boring" },
  { id:"quick",        e:"⚡", label:"Need it fast",             sub:"Under 20 minutes · No fuss",             colour:"#c0a020", bg:"#181200", prompt:"very fast recipe ready in under 20 minutes, quick weeknight dinner, minimal prep, simple ingredients most people have at home" },
  { id:"lazy",         e:"🛋️", label:"I'm feeling lazy",        sub:"Minimal effort · Dump & go · One pot",  colour:"#8040a0", bg:"#100818", prompt:"a proper lazy meal — one pot or one pan, everything thrown in together, minimal chopping and washing up, still hearty and satisfying" },
  { id:"fussy",        e:"😤", label:"Fussy little ones",        sub:"Kid friendly · Hidden veg · No drama",   colour:"#d04080", bg:"#1a0810", prompt:"recipe for picky fussy children — familiar safe flavours, nothing too spicy or weird, hidden vegetables welcome, something kids will actually eat without a battle" },
  { id:"cold",         e:"🌧️", label:"It's cold & cloudy",     sub:"Soup · Stew · Warm from the inside",     colour:"#4080a0", bg:"#080e18", prompt:"warming winter comfort food — thick soups, hearty stews, something that warms you from the inside out on a cold rainy South African day" },
  { id:"sweet",        e:"🍰", label:"I need something sweet",  sub:"Dessert · Bake · Treat yourself",        colour:"#d06080", bg:"#1a0810", prompt:"baking or dessert recipe — something sweet and indulgent, a cake, tart, pudding or biscuits, South African bakes preferred" },
  { id:"adventurous",  e:"🌍", label:"I'm feeling adventurous", sub:"New flavours · Bold · Explore",          colour:"#a09060", bg:"#181408", prompt:"an adventurous recipe with bold or exotic flavours — try a new technique or cuisine, something interesting and different from everyday cooking" },
  { id:"celebrating",  e:"🎉", label:"I'm hosting/celebrating", sub:"Crowd pleaser · Impressive · High volume", colour:"#c0a020", bg:"#181200", prompt:"a show-stopping recipe for hosting or celebrating — feeds a crowd, impressive presentation, family-style or platter sharing, a real celebration meal" },
];

// ── MOOD RECIPE DATABASE — instant load, no API wait ─────────────────
// All amounts are per 1 person (pp). Scales automatically.
// nutrition: {kcal, protein_g, carbs_g, fat_g} per serving
const MOOD_DB = {

  exhausted: [
    { name:"One-Pan Garlic Butter Chicken & Veg", emoji:"🍗", time:25, why:"Everything in one pan — dinner sorted with almost no effort",
      photo:"",
      ingredients:[
        {n:"Chicken thighs (bone-in)",pp:150,u:"g"},{n:"Potato (chopped 2cm)",pp:200,u:"g"},
        {n:"Carrot (chopped)",pp:100,u:"g"},{n:"Butter",pp:10,u:"g"},
        {n:"Garlic (crushed)",pp:10,u:"g"},{n:"Baby spinach",pp:50,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Place chicken, potatoes and carrots in a baking dish. Dot with butter and add crushed garlic. Season well.","Bake 20–22 min. Stir in spinach for the last 3 min.","Serve straight from the dish."],
      tip:"No washing up the pan — serve it straight to the table. Swap potato for sweet potato if you like.",
      nutrition:{kcal:520,protein_g:35,carbs_g:45,fat_g:22} },

    { name:"Egg & Spinach Rice Bowl", emoji:"🍳", time:15, why:"Fast, filling, uses what you have — no shopping needed",
      photo:"",
      ingredients:[
        {n:"Cooked rice (leftover is perfect)",pp:100,u:"g"},{n:"Eggs",pp:2,u:""},
        {n:"Baby spinach",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Sunflower oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Heat oil in a pan. Fry tomato and spinach 2 min until wilted.","Add rice and stir to warm through.","Push everything to the side. Scramble eggs in the gap, then mix everything together.","Season. Serve immediately."],
      tip:"Cold leftover rice works best here — it fries rather than steams. Top with fresh chilli if you have it.",
      nutrition:{kcal:420,protein_g:18,carbs_g:50,fat_g:15} },

    { name:"Banana Peanut Butter Oat Bowl", emoji:"🍌", time:10, why:"Zero cooking, maximum energy — ready in 10 minutes flat",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:150,u:"ml"},
        {n:"Banana (mashed)",pp:120,u:"g"},{n:"Peanut butter",pp:30,u:"g"},
        {n:"Cinnamon",pp:2,u:"g"},{n:"Pumpkin seeds (optional)",pp:10,u:"g"}
      ],
      method:["Mash banana in a bowl.","Add oats, milk, peanut butter and cinnamon. Stir well.","Let it sit 5 min to soften — or eat immediately for a chewier texture.","Top with pumpkin seeds."],
      tip:"Make this the night before and refrigerate — overnight oats need zero morning effort. Swap milk for yoghurt for extra protein.",
      nutrition:{kcal:480,protein_g:15,carbs_g:65,fat_g:18} },
  ],

  pickmeup: [
    { name:"Berry Yoghurt Smoothie Bowl", emoji:"🍓", time:10, why:"Antioxidant-rich and beautiful — feels like a treat but is genuinely good for you",
      photo:"",
      ingredients:[
        {n:"Banana",pp:120,u:"g"},{n:"Mixed berries (frozen works perfectly)",pp:150,u:"g"},
        {n:"Plain yoghurt",pp:150,u:"g"},{n:"Rolled oats",pp:30,u:"g"},
        {n:"Mixed nuts (chopped)",pp:30,u:"g"},{n:"Honey (optional)",pp:10,u:"g"}
      ],
      method:["Blend banana, berries and yoghurt until smooth.","Pour into a bowl.","Top with oats and chopped nuts.","Drizzle with honey if using."],
      tip:"Frozen berries are cheaper and work just as well as fresh. The oats and nuts add crunch and keep you full longer.",
      nutrition:{kcal:420,protein_g:15,carbs_g:55,fat_g:15} },

    { name:"Mango Chilli Chicken Wraps", emoji:"🌯", time:20, why:"Sweet heat — the kind of meal that genuinely lifts your spirits",
      photo:"",
      ingredients:[
        {n:"Chicken breast (sliced into strips)",pp:150,u:"g"},{n:"Ripe mango (diced)",pp:80,u:"g"},
        {n:"Flour tortilla",pp:60,u:"g"},{n:"Fresh chilli (sliced)",pp:5,u:"g"},
        {n:"Fresh coriander",pp:10,u:"g"},{n:"Lime juice",pp:15,u:"ml"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a pan over high heat. Season chicken and fry 8–10 min until golden and cooked through.","Add mango and chilli for the last 3 min.","Warm tortilla in a dry pan 30 sec per side.","Fill with chicken mixture and scatter over coriander. Squeeze lime juice over. Roll up."],
      tip:"Can't find mango? Tinned peach works surprisingly well. Make your own tortilla with 100g flour, 60ml water, pinch salt — fry in a dry pan.",
      nutrition:{kcal:450,protein_g:30,carbs_g:45,fat_g:12} },

    { name:"Turmeric Golden Milk Oat Porridge", emoji:"🌟", time:12, why:"Anti-inflammatory and warming — feel-good food from the inside out",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:300,u:"ml"},
        {n:"Ground turmeric",pp:5,u:"g"},{n:"Fresh ginger (grated)",pp:5,u:"g"},
        {n:"Banana (sliced)",pp:120,u:"g"},{n:"Mixed nuts (roughly chopped)",pp:30,u:"g"},
        {n:"Honey",pp:10,u:"g"},{n:"Cinnamon",pp:1,u:"g"}
      ],
      method:["Combine oats, milk, turmeric, ginger and cinnamon in a small pot.","Simmer over medium heat stirring regularly for 7–8 min until thick and creamy.","Pour into a bowl. Top with sliced banana and nuts.","Drizzle with honey."],
      tip:"The turmeric and ginger are genuinely anti-inflammatory. Use plant milk if preferred. Make a big batch — reheats perfectly with a splash of milk.",
      nutrition:{kcal:460,protein_g:14,carbs_g:60,fat_g:18} },
  ],

  sick: [
    { name:"Healing Chicken Ginger Broth", emoji:"🍜", time:35, why:"The ultimate sick-day soup — soothing, hydrating, deeply nourishing",
      photo:"",
      ingredients:[
        {n:"Chicken thigh (bone-in)",pp:150,u:"g"},{n:"Carrot (sliced)",pp:100,u:"g"},
        {n:"Onion (quartered)",pp:80,u:"g"},{n:"Fresh ginger (sliced)",pp:30,u:"g"},
        {n:"Garlic cloves (crushed)",pp:10,u:"g"},{n:"Fresh thyme",pp:5,u:"g"},
        {n:"Water",pp:500,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Place all ingredients in a pot. Bring to the boil. Skim any foam off the top.","Reduce heat. Simmer gently for 30 min.","Remove chicken. Shred meat off the bone and return to the pot. Discard bone.","Taste and season with salt. Sip as soup or serve over rice."],
      tip:"The ginger and garlic have genuine antibacterial properties. The more you simmer, the deeper the flavour and the more nourishing the broth. Can be made in advance and reheated.",
      nutrition:{kcal:250,protein_g:28,carbs_g:15,fat_g:8} },

    { name:"Turmeric Coconut Lentil Soup", emoji:"🥣", time:30, why:"Gut-friendly, anti-inflammatory, easy to digest — gentle on a sick stomach",
      photo:"",
      ingredients:[
        {n:"Red lentils (rinsed)",pp:100,u:"g"},{n:"Carrot (diced)",pp:100,u:"g"},
        {n:"Coconut milk",pp:200,u:"ml"},{n:"Ground turmeric",pp:5,u:"g"},
        {n:"Garlic (minced)",pp:10,u:"g"},{n:"Lemon juice",pp:15,u:"ml"},
        {n:"Water",pp:400,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry garlic and turmeric in a small amount of oil for 1 min.","Add red lentils, carrot, coconut milk and water. Bring to the boil.","Simmer 20 min until lentils are completely soft.","Squeeze in lemon juice. Season. Blend smooth if desired."],
      tip:"Red lentils dissolve into the soup as they cook — no soaking needed and they're extremely easy to digest. Blend for a silky smooth texture.",
      nutrition:{kcal:380,protein_g:15,carbs_g:40,fat_g:15} },

    { name:"Ginger Honey Oats with Lemon Tea", emoji:"🫖", time:15, why:"The gentlest possible meal — soothing for throat, stomach and soul",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:200,u:"ml"},
        {n:"Water",pp:100,u:"ml"},{n:"Honey",pp:15,u:"g"},
        {n:"Fresh ginger (grated)",pp:10,u:"g"},{n:"Lemon juice",pp:15,u:"ml"},
        {n:"Cinnamon",pp:1,u:"g"}
      ],
      method:["Cook oats in milk and water over medium heat, stirring, for 5–7 min until creamy.","Stir in ginger and cinnamon.","Pour into a bowl. Drizzle over honey.","Make a separate mug of hot water with lemon juice and a little honey to sip alongside."],
      tip:"Honey has mild antibacterial properties and is genuinely soothing for a sore throat. The ginger helps with nausea. Eat this warm, not hot.",
      nutrition:{kcal:280,protein_g:8,carbs_g:55,fat_g:4} },
  ],

  impress: [
    { name:"Rosemary Garlic Lamb Chops with Roasted Veg", emoji:"🍖", time:35, why:"Restaurant quality, minimal technique — always gets compliments",
      photo:"",
      ingredients:[
        {n:"Lamb loin chops",pp:180,u:"g"},{n:"Fresh rosemary (chopped)",pp:10,u:"g"},
        {n:"Garlic (crushed)",pp:15,u:"g"},{n:"Potato (halved)",pp:200,u:"g"},
        {n:"Asparagus",pp:150,u:"g"},{n:"Olive oil",pp:15,u:"ml"},
        {n:"Lemon (for serving)",pp:0.25,u:""},{n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Rub lamb chops with garlic, rosemary, olive oil, salt and pepper. Rest 10 min.","Toss potatoes in oil and season. Roast at 200°C for 15 min.","Add lamb to the roasting pan. Roast 12–15 min (pink inside) or 18 min (well done).","Steam or griddle asparagus 4–5 min. Serve with a lemon wedge."],
      tip:"Rest the lamb 5 min under foil before serving — it makes a real difference. Serve with a simple mint yoghurt: plain yoghurt + fresh mint + pinch of salt.",
      nutrition:{kcal:580,protein_g:42,carbs_g:38,fat_g:28} },

    { name:"Creamy Garlic Prawn Linguine", emoji:"🦐", time:28, why:"Looks like fine dining, comes together in under 30 minutes",
      photo:"",
      ingredients:[
        {n:"Prawns (peeled, deveined)",pp:160,u:"g"},{n:"Linguine or spaghetti",pp:100,u:"g"},
        {n:"Garlic (finely sliced)",pp:20,u:"g"},{n:"Fresh cream",pp:150,u:"ml"},
        {n:"Butter",pp:20,u:"g"},{n:"Fresh parsley (chopped)",pp:10,u:"g"},
        {n:"Red chilli (sliced)",pp:5,u:"g"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Cook pasta in salted boiling water until al dente. Reserve 50ml pasta water before draining.","Melt butter in a wide pan. Fry garlic and chilli 1 min — don't let it burn.","Add prawns. Cook 3–4 min until pink. Remove prawns and set aside.","Add cream and lemon juice to the pan. Simmer 3 min until slightly reduced.","Toss pasta in the sauce, adding a splash of pasta water if needed. Return prawns.","Finish with parsley and black pepper."],
      tip:"The secret is pasta water — the starch makes the sauce silky and helps it cling to the pasta. Don't skip this step.",
      nutrition:{kcal:620,protein_g:35,carbs_g:52,fat_g:28} },

    { name:"Pan-Seared Steak with Mushroom Cream Sauce", emoji:"🥩", time:30, why:"A classic that never fails to impress — learn this one recipe and use it forever",
      photo:"",
      ingredients:[
        {n:"Sirloin or rump steak",pp:180,u:"g"},{n:"Mixed mushrooms (sliced)",pp:150,u:"g"},
        {n:"Butter",pp:15,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Fresh cream",pp:100,u:"ml"},{n:"Fresh thyme",pp:3,u:"g"},
        {n:"Olive oil",pp:10,u:"ml"},{n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Take steak out of fridge 20 min before cooking. Pat dry with paper towel. Season generously.","Heat oil in a heavy pan until almost smoking. Sear steak 3–4 min per side. Add butter and baste last 2 min.","Rest steak on a board, loosely covered, for 5 min.","In the same pan, fry mushrooms and garlic 4 min. Add cream and thyme. Simmer 3–4 min until thickened.","Slice steak against the grain. Pour mushroom sauce over."],
      tip:"NEVER press the steak down with a spatula — you're squeezing out the juices. The resting period is non-negotiable. Cutting against the grain makes it tender.",
      nutrition:{kcal:550,protein_g:45,carbs_g:8,fat_g:38} },
  ],

  healthy: [
    { name:"Lemon Herb Grilled Chicken Quinoa Bowl", emoji:"🥗", time:30, why:"High protein, complex carbs, genuinely delicious — not sad diet food",
      photo:"",
      ingredients:[
        {n:"Chicken breast",pp:150,u:"g"},{n:"Quinoa (uncooked)",pp:60,u:"g"},
        {n:"Cucumber (diced)",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Avocado (sliced)",pp:70,u:"g"},{n:"Lemon juice",pp:30,u:"ml"},
        {n:"Fresh herbs (parsley or coriander)",pp:10,u:"g"},
        {n:"Olive oil",pp:15,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Cook quinoa: rinse, then simmer in double the volume of water for 15 min. Fluff with a fork.","Season chicken with salt, pepper and half the lemon juice. Grill or pan-fry 6–7 min per side.","Let chicken rest 3 min. Slice.","Assemble bowl: quinoa base, sliced chicken, cucumber, tomato and avocado.","Whisk remaining lemon juice with olive oil and herbs. Drizzle over."],
      tip:"Quinoa is a complete protein — it contains all essential amino acids. Cook a big batch on Sunday for quick healthy meals all week.",
      nutrition:{kcal:480,protein_g:42,carbs_g:45,fat_g:18} },

    { name:"Mediterranean Chickpea & Feta Salad", emoji:"🫘", time:20, why:"No cooking required, packed with protein and fibre, genuinely satisfying",
      photo:"",
      ingredients:[
        {n:"Cooked or tinned chickpeas (drained)",pp:200,u:"g"},
        {n:"Feta cheese (crumbled)",pp:50,u:"g"},
        {n:"Cucumber (diced)",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Red onion (finely diced)",pp:20,u:"g"},{n:"Olive oil",pp:30,u:"ml"},
        {n:"Lemon juice",pp:20,u:"ml"},{n:"Dried oreganum",pp:2,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Drain and rinse chickpeas thoroughly.","Combine chickpeas, cucumber, tomato and red onion in a bowl.","Whisk olive oil, lemon juice and oreganum together.","Pour dressing over salad. Toss well.","Crumble feta over the top. Season with pepper."],
      tip:"This gets better as it sits — make it 30 min ahead and let the flavours marry. Add pitted olives and roasted peppers if you want to push it further.",
      nutrition:{kcal:420,protein_g:18,carbs_g:38,fat_g:22} },

    { name:"Baked Hake with Sweet Potato & Broccoli", emoji:"🐟", time:32, why:"Omega-3s, complex carbs and greens in one simple bake",
      photo:"",
      ingredients:[
        {n:"Hake fillet",pp:160,u:"g"},{n:"Sweet potato (cubed)",pp:200,u:"g"},
        {n:"Broccoli (florets)",pp:150,u:"g"},{n:"Garlic (minced)",pp:10,u:"g"},
        {n:"Olive oil",pp:20,u:"ml"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Paprika",pp:2,u:"g"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Toss sweet potato in oil, salt and paprika. Roast 15 min.","Add broccoli and garlic to the tray. Push to the sides.","Place hake in the centre. Drizzle with olive oil and lemon juice. Season.","Bake a further 15 min until fish flakes easily."],
      tip:"Frozen hake works perfectly here — defrost overnight in the fridge. The sweet potato absorbs all the lemon and garlic from the fish. White fish is one of the leanest proteins available.",
      nutrition:{kcal:410,protein_g:35,carbs_g:42,fat_g:12} },
  ],

  quick: [
    { name:"Garlic Egg Fried Rice", emoji:"🍳", time:15, why:"15 minutes from cold pan to hot plate — uses what everyone has at home",
      photo:"",
      ingredients:[
        {n:"Cooked rice (cold, leftover)",pp:200,u:"g"},{n:"Eggs",pp:2,u:""},
        {n:"Frozen peas",pp:80,u:"g"},{n:"Garlic (minced)",pp:15,u:"g"},
        {n:"Spring onion (sliced)",pp:15,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Soy sauce (or salt + dash vinegar)",pp:15,u:"ml"}
      ],
      method:["Heat oil in a wok or large pan until very hot.","Fry garlic 30 sec. Add cold rice — press flat and let it fry undisturbed 2 min.","Push rice to the side. Crack eggs into the gap. Scramble, then mix into rice.","Add peas and soy sauce. Toss 2 min. Scatter spring onion over. Serve immediately."],
      tip:"This only works with cold day-old rice — fresh warm rice goes soggy. Keep leftover rice in the fridge exactly for this purpose.",
      nutrition:{kcal:430,protein_g:16,carbs_g:65,fat_g:12} },

    { name:"Speedy Lemon Chicken Strips", emoji:"🍋", time:18, why:"Fast, lean, flavourful — proper protein in under 20 minutes",
      photo:"",
      ingredients:[
        {n:"Chicken breast (sliced into strips)",pp:150,u:"g"},
        {n:"Lemon juice",pp:30,u:"ml"},{n:"Garlic (minced)",pp:15,u:"g"},
        {n:"Baby spinach",pp:100,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Season chicken strips with salt, pepper and half the lemon juice.","Heat oil in a pan over high heat. Fry chicken and garlic 8–10 min until golden and cooked through.","Add remaining lemon juice and spinach. Toss until spinach wilts, about 1 min.","Serve over rice or with bread."],
      tip:"Slice chicken thinner and it cooks faster. The lemon juice deglazes the pan and picks up all the flavour stuck to the bottom.",
      nutrition:{kcal:320,protein_g:38,carbs_g:8,fat_g:14} },

    { name:"Quick Veggie Omelette", emoji:"🥚", time:12, why:"The fastest hot meal — 3 eggs and whatever is in the fridge",
      photo:"",
      ingredients:[
        {n:"Eggs",pp:3,u:""},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Baby spinach",pp:80,u:"g"},{n:"Cheddar or any cheese (grated)",pp:40,u:"g"},
        {n:"Oil or butter",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Beat eggs with salt and pepper.","Heat oil in a non-stick pan over medium heat. Pour in eggs.","As the edges set, lift them and tilt the pan to let raw egg flow underneath.","When mostly set, scatter tomato, spinach and cheese over one half.","Fold in half. Serve immediately."],
      tip:"The perfect omelette is pale yellow outside, just barely set inside. Medium heat, not high. Any veg or leftovers work as a filling.",
      nutrition:{kcal:380,protein_g:24,carbs_g:10,fat_g:26} },
  ],

  lazy: [
    { name:"Dump & Bake Chicken & Rice", emoji:"🍚", time:40, why:"Everything goes in one dish — 8 minutes of effort, the oven does the rest",
      photo:"",
      ingredients:[
        {n:"Chicken thighs (bone-in)",pp:150,u:"g"},{n:"White rice (uncooked)",pp:70,u:"g"},
        {n:"Chicken stock",pp:200,u:"ml"},{n:"Carrot (sliced)",pp:100,u:"g"},
        {n:"Garlic (crushed)",pp:15,u:"g"},{n:"Paprika",pp:2,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 190°C.","Put rice in the base of a baking dish. Pour stock over.","Place carrot and garlic on top of rice. Season.","Place chicken thighs on top. Sprinkle with paprika. Season well.","Cover tightly with foil. Bake 35 min. Remove foil last 5 min to brown skin."],
      tip:"The rice absorbs all the chicken juices as it cooks — it's incredibly flavourful. Do NOT lift the foil before 35 min or the steam escapes and rice won't cook.",
      nutrition:{kcal:480,protein_g:35,carbs_g:52,fat_g:14} },

    { name:"One-Pot Lentil & Vegetable Stew", emoji:"🫘", time:35, why:"One pot, rough chop, walk away — warm hearty food with minimal effort",
      photo:"",
      ingredients:[
        {n:"Brown or green lentils",pp:100,u:"g"},{n:"Potato (cubed)",pp:150,u:"g"},
        {n:"Carrot (sliced)",pp:100,u:"g"},{n:"Onion (roughly chopped)",pp:80,u:"g"},
        {n:"Garlic (crushed)",pp:10,u:"g"},{n:"Tinned tomatoes",pp:100,u:"g"},
        {n:"Vegetable stock or water",pp:400,u:"ml"},{n:"Curry powder",pp:3,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a pot. Fry onion and garlic 3 min — just soften, don't stress about colour.","Add curry powder, stir 1 min.","Add everything else. Bring to boil.","Reduce heat, cover, simmer 25 min until lentils and potatoes are soft. Season."],
      tip:"Brown lentils hold their shape better than red lentils if you prefer texture. This freezes perfectly — make double and freeze half.",
      nutrition:{kcal:390,protein_g:22,carbs_g:65,fat_g:5} },

    { name:"Cheesy Broccoli Baked Potatoes", emoji:"🥔", time:38, why:"Microwave the potatoes, the oven does the rest — ultimate lazy comfort food",
      photo:"",
      ingredients:[
        {n:"Large potatoes",pp:300,u:"g"},{n:"Broccoli (florets)",pp:150,u:"g"},
        {n:"Cheddar (grated)",pp:60,u:"g"},{n:"Milk",pp:100,u:"ml"},
        {n:"Butter",pp:15,u:"g"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Pierce potatoes with a fork. Microwave 8–10 min until soft (or bake at 200°C for 45 min).","Steam broccoli 5 min until just tender.","Cut potatoes in half. Scoop out flesh into a bowl.","Mash with butter, milk, salt and pepper. Mix in broccoli.","Spoon back into potato skins. Top with cheese.","Grill 3–4 min until cheese is bubbling and golden."],
      tip:"If you don't have a microwave, pierce the potato and wrap in damp paper towel — it speeds up oven cooking. Any leftover cheese and veg works as filling.",
      nutrition:{kcal:460,protein_g:18,carbs_g:68,fat_g:14} },
  ],

  fussy: [
    { name:"Hidden Veg Mini Meatballs with Pasta", emoji:"🍝", time:30, why:"Kids eat the veg without knowing — sneaky nutrition in every bite",
      photo:"",
      ingredients:[
        {n:"Beef mince",pp:150,u:"g"},{n:"Carrot (finely grated)",pp:40,u:"g"},
        {n:"Zucchini / baby marrow (finely grated)",pp:40,u:"g"},
        {n:"Breadcrumbs",pp:25,u:"g"},{n:"Egg",pp:0.5,u:""},
        {n:"Pasta (any shape kids like)",pp:80,u:"g"},
        {n:"Tinned tomatoes (for sauce)",pp:100,u:"g"},
        {n:"Garlic (crushed)",pp:5,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Salt",pp:null,u:""}
      ],
      method:["Squeeze moisture out of grated zucchini with your hands. Mix with mince, carrot, breadcrumbs and egg. Season.","Roll into small balls (2cm diameter).","Brown meatballs in oil 6–8 min. Remove and set aside.","In the same pan, fry garlic 1 min. Add tomatoes. Simmer 8 min. Return meatballs to sauce.","Cook pasta separately. Serve meatballs and sauce over pasta."],
      tip:"The grated vegetables completely disappear into the meatballs — kids will never know. The moisture from the veg also keeps meatballs tender and juicy.",
      nutrition:{kcal:520,protein_g:32,carbs_g:55,fat_g:16} },

    { name:"Cheesy Chicken Quesadillas", emoji:"🧀", time:18, why:"Crispy, cheesy, easy to eat — kids always say yes to quesadillas",
      photo:"",
      ingredients:[
        {n:"Chicken breast (cooked, shredded)",pp:120,u:"g"},
        {n:"Cheddar or mozzarella (grated)",pp:60,u:"g"},
        {n:"Flour tortillas (small)",pp:60,u:"g"},
        {n:"Mild tomato or tomato sauce",pp:30,u:"g"},
        {n:"Oil",pp:5,u:"ml"}
      ],
      method:["Spread tomato sauce on one tortilla.","Top with shredded chicken and cheese. Place second tortilla on top.","Heat a dry pan over medium heat. Place quesadilla in pan.","Cook 2–3 min until golden. Carefully flip. Cook 2 min more.","Remove and cut into triangles with scissors or a knife."],
      tip:"Use leftover roast chicken, rotisserie chicken, or poach a breast for 15 min. Cut into triangles with kitchen scissors — kids love picking up the points.",
      nutrition:{kcal:480,protein_g:35,carbs_g:42,fat_g:20} },

    { name:"Smiley Face Veggie Mini Pizzas", emoji:"🍕", time:28, why:"Kids make their own smiley faces — they always eat what they create",
      photo:"",
      ingredients:[
        {n:"Pizza bases or English muffins",pp:100,u:"g"},
        {n:"Tinned tomato or pizza sauce",pp:40,u:"g"},
        {n:"Mozzarella or cheddar (grated)",pp:60,u:"g"},
        {n:"Cherry tomatoes (halved)",pp:30,u:"g"},
        {n:"Olive slices (eyes)",pp:10,u:"g"},
        {n:"Bell pepper strips (mouth)",pp:20,u:"g"},
        {n:"Mushrooms sliced (optional extras)",pp:20,u:"g"}
      ],
      method:["Preheat oven to 200°C.","Spread tomato sauce on bases. Scatter cheese over.","Set out the toppings and let kids make their own smiley faces.","Bake 10–12 min until cheese is melted and bases are golden."],
      tip:"The golden rule: kids eat what they make themselves. Lay out the toppings in small bowls and step back. Even the fussiest eaters engage with food they've assembled.",
      nutrition:{kcal:450,protein_g:18,carbs_g:65,fat_g:14} },
  ],

  cold: [
    { name:"Hearty Beef & Root Vegetable Stew", emoji:"🥘", time:90, why:"The ultimate cold-day pot — beef falls apart, house smells incredible",
      photo:"",
      ingredients:[
        {n:"Beef stew meat (chuck or shin, cubed)",pp:180,u:"g"},
        {n:"Carrot (chunked)",pp:100,u:"g"},{n:"Potato (quartered)",pp:150,u:"g"},
        {n:"Onion (diced)",pp:100,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Beef stock",pp:300,u:"ml"},{n:"Flour (for dusting)",pp:10,u:"g"},
        {n:"Tomato paste",pp:15,u:"g"},{n:"Fresh thyme",pp:3,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Dust beef cubes in flour. Season well.","Brown beef in hot oil in batches — don't overcrowd. Remove and set aside.","Fry onion and garlic in the same pot 3 min. Add tomato paste. Cook 1 min.","Return beef. Add stock and thyme. Bring to boil. Cover, simmer 45 min.","Add carrots and potatoes. Cook uncovered 30 min until beef is tender and sauce is thick.","Season well. Serve with bread to mop up the gravy."],
      tip:"Browning the beef in batches is the most important step — it builds the flavour base. If you skip this the stew tastes flat. Shin takes longer to cook than chuck but has more collagen and makes a richer gravy.",
      nutrition:{kcal:520,protein_g:38,carbs_g:45,fat_g:18} },

    { name:"Thick Tomato & Lentil Soup with Bread", emoji:"🍅", time:40, why:"Cheap, filling, warming — this is what cold days were made for",
      photo:"",
      ingredients:[
        {n:"Red lentils (rinsed)",pp:80,u:"g"},{n:"Tinned tomatoes",pp:200,u:"g"},
        {n:"Onion (diced)",pp:60,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Carrot (diced)",pp:60,u:"g"},{n:"Vegetable or chicken stock",pp:400,u:"ml"},
        {n:"Smoked paprika",pp:3,u:"g"},{n:"Cumin",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Fry onion, garlic and carrot in oil 5 min until soft.","Add paprika and cumin. Fry 1 min.","Add tomatoes, lentils and stock. Bring to boil.","Simmer 25 min until lentils have dissolved into the soup.","Blend partially for a thick, chunky texture — or fully for smooth.","Season well. Serve with crusty bread."],
      tip:"Smoked paprika is the secret weapon here — it adds depth and a slight smokiness that tastes like it took hours. A swirl of cream or a drizzle of olive oil to serve makes it feel special.",
      nutrition:{kcal:380,protein_g:18,carbs_g:55,fat_g:8} },

    { name:"Warm Butternut & Lentil Curry", emoji:"🎃", time:40, why:"Thick, spiced, warming — a vegetarian pot that satisfies like meat",
      photo:"",
      ingredients:[
        {n:"Butternut (cubed)",pp:200,u:"g"},{n:"Red lentils",pp:80,u:"g"},
        {n:"Onion (diced)",pp:60,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Coconut milk",pp:150,u:"ml"},{n:"Vegetable stock",pp:200,u:"ml"},
        {n:"Curry powder",pp:5,u:"g"},{n:"Ground ginger",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry onion and garlic in oil 3 min. Add curry powder and ginger — fry 2 min.","Add butternut and stir to coat with spices.","Add lentils, coconut milk and stock. Bring to boil.","Simmer uncovered 25 min until butternut is tender and lentils have broken down.","Season. Serve with rice or bread."],
      tip:"Butternut is one of the cheapest and most nutritious vegetables in SA. When it's in season, buy a whole one — it keeps for weeks on the counter.",
      nutrition:{kcal:430,protein_g:16,carbs_g:58,fat_g:14} },
  ],

  sweet: [
    { name:"Baked Cinnamon Apples with Vanilla Yoghurt", emoji:"🍎", time:25, why:"Feels completely indulgent, genuinely healthy — warm, fragrant, satisfying",
      photo:"",
      ingredients:[
        {n:"Apple (large)",pp:200,u:"g"},{n:"Butter",pp:15,u:"g"},
        {n:"Honey",pp:15,u:"g"},{n:"Cinnamon",pp:3,u:"g"},
        {n:"Walnuts or pecan nuts (roughly chopped)",pp:20,u:"g"},
        {n:"Plain yoghurt",pp:150,u:"g"},{n:"Vanilla essence",pp:2,u:"ml"}
      ],
      method:["Preheat oven to 180°C.","Core each apple from the top, leaving the base intact.","Mix butter, honey, cinnamon and nuts. Press into the hollow of each apple.","Place in a baking dish with 2 tbsp water in the base.","Bake 20 min until apples are soft and caramelised.","Mix yoghurt with vanilla. Serve baked apple with yoghurt alongside."],
      tip:"Granny Smith apples hold their shape better when baked. Golden Delicious go softer and sweeter. Both are excellent. The yoghurt and honey are a better pairing than cream.",
      nutrition:{kcal:320,protein_g:6,carbs_g:48,fat_g:12} },

    { name:"Banana Oat Pancakes", emoji:"🥞", time:20, why:"3 ingredients, no flour, no sugar — tastes like a proper treat",
      photo:"",
      ingredients:[
        {n:"Banana (ripe, mashed)",pp:120,u:"g"},{n:"Rolled oats",pp:60,u:"g"},
        {n:"Eggs",pp:1,u:""},{n:"Full cream milk",pp:50,u:"ml"},
        {n:"Cinnamon",pp:2,u:"g"},{n:"Oil or butter",pp:10,u:"ml"},
        {n:"Honey or maple syrup to serve",pp:15,u:"g"}
      ],
      method:["Mash banana thoroughly in a bowl.","Add oats, egg, milk and cinnamon. Mix well. Let sit 2 min.","Heat a little oil in a non-stick pan over medium heat.","Drop spoonfuls of batter in. Cook 2–3 min until bubbles form and edges look dry.","Flip carefully. Cook 2 min more.","Serve with a drizzle of honey."],
      tip:"The riper the banana, the sweeter and more banana-flavoured the pancakes. Black-spotted bananas are ideal. These freeze well — pop in the toaster to reheat.",
      nutrition:{kcal:380,protein_g:12,carbs_g:58,fat_g:10} },

    { name:"Chocolate Chia Pudding with Strawberries", emoji:"🍫", time:10, why:"10 minutes prep, then it sets itself — a make-ahead treat with zero guilt",
      photo:"",
      ingredients:[
        {n:"Chia seeds",pp:30,u:"g"},{n:"Full cream milk",pp:200,u:"ml"},
        {n:"Cocoa powder (unsweetened)",pp:15,u:"g"},{n:"Honey",pp:15,u:"g"},
        {n:"Strawberries (sliced)",pp:100,u:"g"},{n:"Vanilla essence",pp:2,u:"ml"}
      ],
      method:["Whisk milk, cocoa powder, honey and vanilla together until smooth.","Add chia seeds and stir well.","Stir again after 5 min to prevent clumping.","Refrigerate at least 30 min (or overnight) until thick and pudding-like.","Top with sliced strawberries before serving."],
      tip:"This must be made ahead — it needs at least 30 min to set but overnight is better. Chia seeds are nutritionally exceptional: omega-3, protein and fibre. Use coconut milk for a richer flavour.",
      nutrition:{kcal:290,protein_g:10,carbs_g:35,fat_g:14} },
  ],

  adventurous: [
    { name:"Thai Basil Beef Stir-Fry", emoji:"🌿", time:22, why:"Bold, aromatic, completely different from everyday cooking",
      photo:"",
      ingredients:[
        {n:"Beef strips (rump or sirloin)",pp:150,u:"g"},
        {n:"Fresh basil (large handful)",pp:20,u:"g"},
        {n:"Garlic (thinly sliced)",pp:15,u:"g"},{n:"Fresh ginger (grated)",pp:15,u:"g"},
        {n:"Red chilli (sliced)",pp:10,u:"g"},{n:"Green beans (trimmed)",pp:100,u:"g"},
        {n:"Oil",pp:15,u:"ml"},{n:"Lime juice",pp:20,u:"ml"},
        {n:"Soy sauce",pp:15,u:"ml"},{n:"Fish sauce (optional)",pp:5,u:"ml"}
      ],
      method:["Get a wok or large pan VERY hot. Add oil.","Fry garlic, ginger and chilli 30 sec — it should sizzle loudly.","Add beef strips. Stir-fry on high heat 3–4 min. Don't stir constantly — let it catch some colour.","Add green beans. Toss 2 min.","Remove from heat. Add basil, lime juice, soy and fish sauce. Toss.","Serve immediately over jasmine rice."],
      tip:"High heat is non-negotiable for stir-fry — without it you get a steam rather than a fry. Add the basil off the heat so it doesn't go black. Thai basil is different from Italian basil but both work.",
      nutrition:{kcal:390,protein_g:35,carbs_g:12,fat_g:22} },

    { name:"Moroccan Chickpea Tagine", emoji:"🫙", time:40, why:"North African spices, dried fruit, depth of flavour — truly different",
      photo:"",
      ingredients:[
        {n:"Tinned chickpeas (drained)",pp:200,u:"g"},
        {n:"Butternut or sweet potato (cubed)",pp:150,u:"g"},
        {n:"Tinned tomatoes",pp:100,u:"g"},{n:"Onion (diced)",pp:60,u:"g"},
        {n:"Dried apricots (halved)",pp:30,u:"g"},
        {n:"Chicken or vegetable stock",pp:150,u:"ml"},
        {n:"Ground cumin",pp:3,u:"g"},{n:"Ground coriander",pp:2,u:"g"},
        {n:"Cinnamon",pp:1,u:"g"},{n:"Smoked paprika",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry onion in oil 5 min. Add all spices — fry 2 min, stirring constantly.","Add butternut, tomatoes, stock and dried apricots. Stir well.","Bring to boil. Cover and simmer 20 min.","Add chickpeas. Simmer uncovered 10 min until sauce thickens and butternut is soft.","Season. Serve with couscous or bread."],
      tip:"The combination of spiced vegetables, sweet dried fruit and chickpeas is a genuine North African flavour profile. Serve with couscous: pour 150ml boiling water over 80g couscous per person, cover 5 min, fluff.",
      nutrition:{kcal:420,protein_g:18,carbs_g:68,fat_g:8} },

    { name:"Korean-Style Beef Rice Bowl", emoji:"🍚", time:25, why:"Sticky, caramelised, umami-rich — completely addictive",
      photo:"",
      ingredients:[
        {n:"Beef mince or thin strips",pp:150,u:"g"},
        {n:"Soy sauce",pp:20,u:"ml"},{n:"Honey",pp:15,u:"g"},
        {n:"Garlic (minced)",pp:15,u:"g"},{n:"Ginger (grated)",pp:10,u:"g"},
        {n:"Sesame oil",pp:5,u:"ml"},{n:"White rice (uncooked)",pp:80,u:"g"},
        {n:"Baby spinach",pp:80,u:"g"},{n:"Spring onion (sliced)",pp:15,u:"g"},
        {n:"Sesame seeds",pp:5,u:"g"},{n:"Chilli flakes (optional)",pp:1,u:"g"}
      ],
      method:["Cook rice.","Mix soy sauce, honey, garlic, ginger and sesame oil together.","Fry beef in a hot pan 5 min. Add marinade sauce. Cook 3–4 min until caramelised and sticky.","Wilt spinach in the pan with the beef for 1 min.","Serve over rice. Top with spring onion, sesame seeds and chilli flakes."],
      tip:"Sesame oil is the key flavour here — a little goes a long way. Don't substitute it. The honey and soy together create the characteristic sticky glaze. Gochujang paste (Korean chilli paste) is an excellent addition if available.",
      nutrition:{kcal:480,protein_g:32,carbs_g:55,fat_g:15} },
  ],

  celebrating: [
    { name:"Roast Garlic Rosemary Leg of Lamb", emoji:"🍖", time:90, why:"The centrepiece of any South African celebration — nothing says special like lamb",
      photo:"",
      ingredients:[
        {n:"Leg or shoulder of lamb",pp:350,u:"g"},
        {n:"Fresh rosemary",pp:10,u:"g"},{n:"Garlic cloves",pp:15,u:"g"},
        {n:"Olive oil",pp:15,u:"ml"},{n:"Potato (halved)",pp:200,u:"g"},
        {n:"Carrot (chunked)",pp:100,u:"g"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C. Make small cuts all over the lamb with a knife.","Push slices of garlic and small rosemary sprigs into the cuts.","Rub all over with olive oil, lemon juice, salt and pepper.","Place potatoes and carrots in the roasting pan. Place lamb on top.","Roast 20 min per 500g for medium, plus 20 min extra (approx 70–90 min for a 2kg leg).","Rest 20 min covered with foil before carving."],
      tip:"The garlic and rosemary pushed into the cuts perfume the entire joint. Resting is non-negotiable — a well-rested leg will be more juicy. Use the pan juices to make gravy by deglazing with a little stock.",
      nutrition:{kcal:620,protein_g:45,carbs_g:42,fat_g:30} },

    { name:"Seafood Rice (Paella Style)", emoji:"🦐", time:45, why:"A spectacular sharing dish — colourful, fragrant, looks like a feast",
      photo:"",
      ingredients:[
        {n:"White rice",pp:80,u:"g"},{n:"Prawns (peeled)",pp:100,u:"g"},
        {n:"Mussels",pp:80,u:"g"},{n:"Tinned tomatoes",pp:100,u:"g"},
        {n:"Onion (diced)",pp:30,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Chicken or fish stock",pp:300,u:"ml"},
        {n:"Turmeric",pp:2,u:"g"},{n:"Smoked paprika",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Lemon (for serving)",pp:0.25,u:""},
        {n:"Fresh parsley",pp:5,u:"g"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a wide pan. Fry onion and garlic 3 min.","Add tomatoes, turmeric and paprika. Cook 3 min.","Add rice. Stir to coat. Add stock. Bring to boil.","Simmer uncovered 15 min, DO NOT stir.","Add mussels and prawns on top of the rice. Cover with foil.","Steam 8–10 min until rice has absorbed all liquid and seafood is cooked.","Scatter parsley. Serve with lemon wedges."],
      tip:"Do NOT stir paella-style rice after adding the stock — you want a crust to form on the bottom called 'socarrat'. It's considered the best part. Add a pinch of saffron if you have it.",
      nutrition:{kcal:480,protein_g:32,carbs_g:58,fat_g:12} },

    { name:"Herb Butter Roast Chicken", emoji:"🍗", time:90, why:"The ultimate crowd-pleaser — everyone loves a perfect roast chicken",
      photo:"",
      ingredients:[
        {n:"Whole chicken",pp:400,u:"g"},{n:"Softened butter",pp:40,u:"g"},
        {n:"Garlic (minced)",pp:10,u:"g"},
        {n:"Mixed fresh herbs (rosemary, thyme, parsley)",pp:10,u:"g"},
        {n:"Lemon",pp:0.25,u:""},{n:"Potato (quartered)",pp:150,u:"g"},
        {n:"Olive oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Mix butter with garlic, herbs, lemon zest, salt and pepper.","Carefully push butter under the chicken skin over the breast using your fingers.","Rub remaining butter over the outside. Season well.","Place lemon halves inside the cavity.","Toss potatoes in olive oil and season. Place in roasting pan. Put chicken on top.","Roast 20 min per 500g + 20 min extra. Juices run clear when done.","Rest 15 min before carving."],
      tip:"Butter under the skin is the game-changer — it bastes the breast meat from inside as it cooks, keeping it moist. Always rest a roast chicken or the juices will run out when carved.",
      nutrition:{kcal:580,protein_g:48,carbs_g:25,fat_g:32} },
  ],
};

// ── MOOD PAGED SYSTEM ────────────────────────────────────────────
// DB has 6 recipes per mood. Page 0 = first 3, Page 1 = next 3, Page 2+ = AI results.
// AI starts fetching in background the moment a mood is selected.

function getMoodPageRecipes(moodId, page) {
  const db = MOOD_DB[moodId] || [];
  const start = page * 3;
  const slice = db.slice(start, start + 3);
  if (slice.length === 0) return null;
  return slice.map(r => ({...r, serves:1, _fromDB:true}));
}

async function startMoodAIFetch(mood) {
  // Fire and forget — AI fetches 6 more recipes in background
  if (S.moodAILoading || S.moodAIRecipes) return;
  S.moodAILoading = true;
  try {
    const prompt = `You are Tinza Chef, a South African recipe assistant.
Mood: "${mood.label}". Generate 6 different recipe suggestions for: ${mood.prompt}.

Return ONLY a JSON array of exactly 6 recipes (no markdown, no backticks):
[{"name":"Recipe name","emoji":"single emoji","serves":1,"time":25,"why":"One sentence why this fits the mood","ingredients":[{"n":"Ingredient","pp":100,"u":"g"}],"method":["Step 1","Step 2","Step 3"],"tip":"One practical tip","nutrition":{"kcal":400,"protein_g":25,"carbs_g":40,"fat_g":12}}]

Rules: pp = amount per 1 person. Serves = 1. All grams or ml. SA ingredients. Vary suggestions well.`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:4000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const recipes = JSON.parse(clean);
    S.moodAIRecipes = Array.isArray(recipes) ? recipes.map(r=>({...r,_fromAI:true})) : [];
    S.moodAILoading = false;
    draw(); // redraw silently when AI finishes
  } catch(e) {
    S.moodAILoading = false;
  }
}

async function callMoodChef(mood) {
  // Reset paging state
  S.moodPage = 0;
  S.moodAIRecipes = null;
  S.moodAILoading = false;

  // Show first 3 from DB instantly
  const firstPage = getMoodPageRecipes(mood.id, 0);
  S.moodRecipes = firstPage || [];
  S.moodLoading = false;
  draw();

  // Start AI fetch in background immediately
  startMoodAIFetch(mood);
}

function getMoreMoodRecipes(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  const nextPage = (S.moodPage || 0) + 1;
  S.moodPage = nextPage;

  // DB page 1 (recipes 4-6)
  const dbPage = getMoodPageRecipes(moodId, nextPage);
  if (dbPage) {
    S.moodRecipes = dbPage;
    draw();
    return;
  }

  // DB exhausted — use AI recipes if ready
  const aiOffset = (nextPage - 2) * 3; // pages 2,3 use AI bank
  if (S.moodAIRecipes && S.moodAIRecipes.length > aiOffset) {
    S.moodRecipes = S.moodAIRecipes.slice(aiOffset, aiOffset + 3);
    draw();
    return;
  }

  // AI still loading — show a waiting state and fire new AI call if needed
  if (S.moodAILoading) {
    S.moodRecipes = [{_waiting:true}];
    draw();
    // Poll until AI is done
    const poll = setInterval(() => {
      if (!S.moodAILoading) {
        clearInterval(poll);
        const aiOff = ((S.moodPage||0) - 2) * 3;
        S.moodRecipes = (S.moodAIRecipes||[]).slice(aiOff, aiOff + 3);
        if (S.moodRecipes.length === 0) {
          S.moodRecipes = [{_error:true, _msg:'No more recipes found. Try a different mood.'}];
        }
        draw();
      }
    }, 800);
    return;
  }

  // AI not started yet — fire it now and wait
  if (mood) {
    S.moodRecipes = [{_waiting:true}];
    draw();
    startMoodAIFetch(mood).then(() => {
      const aiOff = ((S.moodPage||0) - 2) * 3;
      S.moodRecipes = (S.moodAIRecipes||[]).slice(aiOff, aiOff + 3);
      if (S.moodRecipes.length === 0) {
        S.moodRecipes = [{_error:true, _msg:'No more recipes right now. Try again shortly.'}];
      }
      draw();
    });
  }
}


function moodHTML(){
  if(S.moodPlanView){
    window._sectionPlanForShare = S.moodPlan||[];
    return sectionPlanView('moodPlan','Just Feed Me Plan','😋','#8060c0','#0f0818','#2a1840',S.moodServings||1,"setQuiet({moodPlanView:false})");
  }
  const mood = MOODS.find(m=>m.id===S.moodSelected);
  const recipes = S.moodRecipes;
  const loading = S.moodLoading;
  const servings = S.moodServings||4;

  // ── RECIPE DETAIL VIEW ──
  if(S.moodActiveRecipe){
    const r = S.moodActiveRecipe;
    const mood = MOODS.find(m=>m.id===S.moodSelected)||{colour:'#8060c0',bg:'#0f0818'};
    return recipeDetailFromResult(
      r,
      "setQuiet({moodActiveRecipe:null})",
      S.moodServings||1,
      mood.colour,
      mood.bg,
      mood.colour
    );
  }

  // ── RESULTS VIEW ──
  if(mood && (loading || recipes)){
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#100818;border-bottom:1px solid ${mood.colour};padding:14px 20px;">
        <button onclick="setQuiet({moodSelected:null,moodRecipes:null,moodLoading:false})" style="background:none;border:none;color:${mood.colour};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Change mood</button>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:32px;">${mood.e}</span>
          <div>
            <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;margin:0 0 2px;">${mood.label}</h1>
            <div style="font-size:11px;color:${mood.colour};font-style:italic;">${mood.sub}</div>
          </div>
        </div>
      </div>
      <div class="content">
        ${loading ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:8px;">Finding the perfect recipes for you...</div>
            <div style="font-size:12px;color:#4a3060;">Tinza Chef is thinking</div>
          </div>` : ''}

        ${recipes && recipes[0]?._error ? `
          <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:32px;margin-bottom:12px;">😕</div>
            <div style="font-size:14px;color:#f5e8cc;margin-bottom:8px;">${recipes[0]._msg||"Couldn't load recipes right now"}</div>
            <button onclick="callMoodChef(MOODS.find(m=>m.id==='${mood.id}'))" style="padding:12px 24px;background:#100818;border:2px solid ${mood.colour};border-radius:10px;color:${mood.colour};font-size:13px;cursor:pointer;margin-top:12px;">← Start again</button>
          </div>` : ''}

        ${recipes && recipes[0]?._waiting ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:8px;">Tinza Chef is finding more ideas...</div>
            <div style="font-size:12px;color:#4a3060;">Just a moment</div>
          </div>` : ''}

        ${recipes && !recipes[0]?._error && !recipes[0]?._waiting ? `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#4a3060;text-transform:uppercase;">3 recipes for your mood</div>
            ${S.moodAILoading ? `<div style="font-size:10px;color:#4a3060;font-style:italic;">✨ Finding more...</div>` : ''}
          </div>
          ${recipes.map((r,i)=>`
            <div style="background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.bg:'#161210'};border:1px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="(function(){const pid=r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase();const pi={id:pid,name:r.name||'',emoji:r.emoji||'😴',time:r.time||0,ingredients:r.ingredients||[],serves:1};togglePlanItem('moodPlan',pi);})()" >
                <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'transparent'};border:2px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#3a2060'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'✓':''}</div>
                <span style="font-size:20px;">${r.emoji}</span>
                <div style="flex:1;">
                  <div style="font-size:14px;color:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'#f5e8cc':'#c8b898'};font-weight:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'bold':'normal'};">${r.name}</div>
                  <div style="font-size:10px;color:${mood.colour};margin-top:2px;font-style:italic;">${r.why||''} · ⏱️ ${r.time} min</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                  <button onclick="event.stopPropagation();openMoodRecipe(${i})" style="background:${mood.colour};border:none;border-radius:6px;padding:4px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
                </div>
              </div>
            </div>`).join('')}
          ${sectionPlanBtn('moodPlan','Just Feed Me','😋','#8060c0','#0f0818','#2a1840',S.moodServings||1,"setQuiet({moodPlanView:true})")}

          <button onclick="getMoreMoodRecipes('${mood.id}')"
            style="width:100%;padding:11px;border-radius:10px;background:#0a0812;border:1px solid ${mood.colour};color:${mood.colour};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">
            ✨ Show me 3 more ideas
          </button>` : ''}
      </div>
    </div>`;
  }

  // ── MOOD SELECTOR (home) ──
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:linear-gradient(135deg,#100818,#1a0e28);border-bottom:1px solid #2a1840;padding:14px 20px;">
      <button onclick="set({screen:'home'})" style="background:none;border:none;color:#8060c0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😴</span>
        <div>
          <h1 style="margin:0;font-size:22px;font-weight:normal;color:#f5e8cc;">Just Feed Me</h1>
          <p style="margin:0;font-size:11px;color:#6a5080;font-style:italic;">How are you feeling right now?</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div style="font-size:11px;color:#4a3060;margin-bottom:16px;line-height:1.6;">
        Tap how you're feeling and Tinza will suggest the perfect recipes — no thinking required.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${MOODS.map(m=>`
          <button onclick="set({moodSelected:'${m.id}',moodRecipes:null,moodLoading:false});callMoodChef(MOODS.find(x=>x.id==='${m.id}'))"
            style="background:${m.bg};border:2px solid ${m.colour};border-radius:12px;padding:14px 12px;cursor:pointer;text-align:left;">
            <div style="font-size:26px;margin-bottom:6px;">${m.e}</div>
            <div style="font-size:13px;color:#f5e8cc;margin-bottom:3px;line-height:1.2;">${m.label}</div>
            <div style="font-size:10px;color:${m.colour};line-height:1.3;">${m.sub}</div>
          </button>`).join('')}
      </div>
    </div>
  </div>`;
}

// ── END MOOD FEATURE ──────────────────────────────────────────────────

// ── DRAW ──────────────────────────────────────────────────────────

function homeHTML(){
  // ── HOME SCREEN ──────────────────────────────────────────────────
  // Two types of blocks: RECIPE SECTIONS (go to recipes) and FEATURE TOOLS (do something)

  const recipeSections = [
    // Row 1 — core cooking
    {s:"braai",      e:"🔥", t:"Braai & Fire Cooking",   sub:"BBQ · Grilled & Fire Foods · Meats · Sides · Salads", b:"#c06020", bg:"#1a1008"},
    {s:"worldkitchen",e:"🌍",t:"World Kitchen",           sub:"SA Classics · International · All cuisines",         b:"#208060", bg:"#0a1810"},
    // Row 2 — meal types
    {s:"breakfast",  e:"🍳", t:"Breakfast",               sub:"Eggs · Oats · Pancakes · Smoothies",                b:"#d0a020", bg:"#1a1500"},
    {s:"lightlunch", e:"🥗", t:"Light Lunch",             sub:"Salads · Wraps · Soups · Quick meals",              b:"#40a060", bg:"#0a1a10"},
    {s:"supper",     e:"🍲", t:"Supper",                  sub:"Family meals · Pasta · Curries · Stews",            b:"#8040c0", bg:"#100818"},
    {s:"bakes",      e:"🍰", t:"Bakes, Cakes & Breads",   sub:"Cakes · Biscuits · Breads · Rusks",                 b:"#d06080", bg:"#1a0810"},
    // Row 3 — speciality
    {s:"smoothies",  e:"🌿", t:"Health Hub",              sub:"Juices · Smoothies · Raw · Fermented",              b:"#20a080", bg:"#0f1a18"},
    {s:"events",     e:"🎉", t:"Events & Celebrations",   sub:"Buffet · Finger Foods · Cakes · Beverages",         b:"#d04080", bg:"#1a0814"},
    {s:"babyapp",    e:"🍼", t:"Tiny Tummies",            sub:"Age-appropriate baby & toddler recipes",             b:"#e07090", bg:"#1a1018"},
    {s:"furryapp",   e:"🐾", t:"Furry Friends",           sub:"Dogs & Cats · Meals · Treats & Biscuits",           b:"#9060d0", bg:"#120f1a"},
  ];

  const featureTools = [
    {s:"search",    e:"🔍", t:"Search & Discover",    sub:"Find any recipe instantly",                    b:"#4080d0", bg:"#0a1020"},
    {s:"budget",    e:"💰", t:"I've Got R100",         sub:"Budget planner · Make the most of your money", b:"#40c060", bg:"#0a1a08"},
    {s:"ingredient",e:"🐔", t:"I Have Chicken...",     sub:"One ingredient · All matching recipes",        b:"#c08020", bg:"#1a1000"},
    {s:"fourIngredients",e:"🧅",t:"4 Ingredients",    sub:"What's in your fridge? Get a recipe",          b:"#a04080", bg:"#150010"},
    {s:"mood",      e:"😴", t:"Just Feed Me",          sub:"Tell us how you feel · We do the rest",        b:"#8060c0", bg:"#0f0818"},
    {s:"weekplanner",e:"📅",t:"Weekly Meal Planner",  sub:"Plan 7 days · Auto shopping list",             b:"#2080c0", bg:"#081020"},
  ];

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:linear-gradient(135deg,#1a1208,#2d1f0a);border-bottom:1px solid #4a3520;padding:16px 20px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😊</span>
        <div>
          <h1 style="margin:0;font-size:26px;font-weight:normal;color:#f5e8cc;letter-spacing:3px;">Tinza</h1>
          <p style="margin:0;font-size:11px;color:#8a7055;font-style:italic;">Every dish, made easy</p>
        </div>
      </div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Recipe Sections -->
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin-bottom:10px;">📖 Recipes</div>
      ${recipeSections.map(o=>`
        <button onclick="set({screen:'${o.s}'})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${o.t}</div>
            <div style="font-size:11px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join("")}

      <!-- Feature Tools -->
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin:16px 0 10px;">⚡ Smart Features</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${featureTools.map(o=>`
          <button onclick="set({screen:'${o.s}'})"
            style="display:flex;flex-direction:column;align-items:flex-start;padding:14px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;cursor:pointer;text-align:left;">
            <span style="font-size:26px;margin-bottom:6px;">${o.e}</span>
            <div style="font-size:13px;color:#f5e8cc;margin-bottom:3px;font-weight:bold;">${o.t}</div>
            <div style="font-size:10px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
          </button>`).join("")}
      </div>

    </div>
  </div>`;
}


// ── RECIPE VIEW ───────────────────────────────────────────────────
function recipeView(){
  const vr=S.viewingRecipe;
  let item, recipe;
  const isMeat = vr.type==="meat";
  if(isMeat){ item=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  else { item=SIDES_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  recipe=item?.recipe;
  if(!item||!recipe) return `<div style="padding:20px;"><button onclick="set({viewingRecipe:null})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;">← Back</button><p style="margin-top:12px;">Recipe not found.</p></div>`;
  const rl=vr.returnStep===2?"Mains":vr.returnStep===3?"Sides":"Plan";
  const p = S.recipeServings || S.people;
  const ap = APPETITE[S.appetite];

  // ── QUANTITY BLOCK ────────────────────────────────────────────────
  let quantityBlock = "";
  function fmtG(g){ return g >= 1000 ? (g/1000).toFixed(1)+"kg" : g+"g"; }

  if(isMeat){
    const alreadySelected = S.selectedMeats.includes(vr.id);

    if(alreadySelected){
      // ── SELECTED: show actual totals for their plan ──
      const numMeats = S.selectedMeats.length;
      const isSolo = numMeats <= 1;

      let totalDisplay, ppDisplay;
      if(item.unit === "g"){
        const pp = Math.round((isSolo ? item.soloG : item.sharedG) * ap.mult);
        const total = pp * p;
        totalDisplay = fmtG(total);
        ppDisplay = `${pp}g per person`;
      } else {
        const pcs = Math.round((isSolo ? item.soloPcs : item.sharedPcs) * ap.mult * p);
        const grams = pcs * (item.gramEach || 100);
        totalDisplay = `${pcs} pieces (${fmtG(grams)})`;
        ppDisplay = `${isSolo ? item.soloPcs : item.sharedPcs} per person`;
      }

      const portionType = isSolo ? "sole dish — full portion" : `${numMeats} meats selected — shared portion`;

      quantityBlock = `
        <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 For Your Plan</div>
          <div style="font-size:11px;color:#6a8030;margin-bottom:10px;">${p} people · ${ap.label} · ${portionType}</div>
          <div style="background:#0f1a04;border:1px solid #4a7010;border-radius:8px;padding:12px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
              <div>
                <div style="font-size:10px;color:#8ab030;margin-bottom:2px;">Total to buy:</div>
                <div style="font-size:26px;font-weight:bold;color:#c8e840;letter-spacing:-0.5px;line-height:1;">${totalDisplay}</div>
                <div style="font-size:10px;color:#5a7020;margin-top:3px;">${ppDisplay}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;"><button onclick="event.stopPropagation();(function(){var n=Math.max(1,(S.recipeServings||S.people)-1);var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button><span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${S.recipeServings||S.people}</span><button onclick="event.stopPropagation();(function(){var n=(S.recipeServings||S.people)+1;var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button></div>
            </div>
          </div>
        </div>`;

    } else {
      // ── BROWSING: just show per-person reference + how it works ──
      const soloDisplay = item.unit === "g"
        ? `${item.soloG}g pp`
        : `${item.soloPcs} per person`;
      const sharedDisplay = item.unit === "g"
        ? `${item.sharedG}g pp`
        : `${item.sharedPcs} per person`;

      const nm_browse = S.selectedMeats.length;
      const amult = APPETITE[S.appetite] ? APPETITE[S.appetite].mult : 1;
      const curG_browse = Math.round(item.soloG * meatSpreadMult(Math.max(1, nm_browse)) * amult);
      const curDisp_browse = curG_browse >= 1000 ? (curG_browse/1000).toFixed(1)+'kg' : curG_browse+'g';
      const soloG_browse = Math.round(item.soloG * amult);
      const soloDisp_browse = soloG_browse >= 1000 ? (soloG_browse/1000).toFixed(1)+'kg' : soloG_browse+'g';

      quantityBlock = '<div style="background:#141008;border:1px solid #3a2810;border-radius:10px;padding:12px;margin-bottom:14px;">'
        + (nm_browse <= 1
          ? '<div style="text-align:center;padding:6px 0;">'
            + '<div style="font-size:10px;color:#6a4020;margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;">Solo dish — full portion</div>'
            + '<div style="font-size:24px;font-weight:bold;color:#f5c842;">' + soloDisp_browse + ' <span style="font-size:12px;color:#5a9030;">pp</span></div>'
            + '</div>'
          : '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;">'
            + '<div style="flex:1;text-align:center;">'
            + '<div style="font-size:9px;color:#4a6020;text-transform:uppercase;">Solo</div>'
            + '<div style="font-size:15px;color:#6a8030;">' + soloDisp_browse + ' pp</div>'
            + '</div>'
            + '<div style="color:#3a4010;font-size:18px;">&#8594;</div>'
            + '<div style="flex:1;text-align:center;">'
            + '<div style="font-size:9px;color:#c8a84b;text-transform:uppercase;">With ' + nm_browse + ' dishes</div>'
            + '<div style="font-size:20px;font-weight:bold;color:#f5c842;">' + curDisp_browse + ' pp</div>'
            + '</div></div>'
        )
        + '</div>';
    }

  } else {
    // ── SIDE / SALAD / SAUCE / DESSERT: always show total (sides are always "selected" when viewed) ──
    const qty = calcSide(item);
    quantityBlock = `
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 How Much To Make</div>
        <div style="font-size:11px;color:#6a8030;margin-bottom:10px;">${p} people · ${ap.label}</div>
        <div style="background:#0f1a04;border:1px solid #4a7010;border-radius:8px;padding:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
            <div>
              <div style="font-size:10px;color:#8ab030;margin-bottom:2px;">Total quantity:</div>
              <div style="font-size:26px;font-weight:bold;color:#c8e840;line-height:1;">${qty}</div>
              <div style="font-size:10px;color:#5a7020;margin-top:3px;">${item.perPerson}${item.unit} per person</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;"><button onclick="event.stopPropagation();(function(){var n=Math.max(1,(S.recipeServings||S.people)-1);var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button><span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${S.recipeServings||S.people}</span><button onclick="event.stopPropagation();(function(){var n=(S.recipeServings||S.people)+1;var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button></div>
          </div>
        </div>

      </div>`;
  }
  // ── END QUANTITY BLOCK ────────────────────────────────────────────

  // ── GOES WELL WITH data for Braai items ──────────────────────────
  const goesWellWith = {
    boerewors:   [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Chakalaka',s:'braai',t:'relishes'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    rump:        [{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'}],
    fillet:      [{e:'🫙',n:'Pepper Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'}],
    beefribs:    [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🫙',n:'Chakalaka',s:'braai',t:'relishes'}],
    chicken:     [{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    wings:       [{e:'🫙',n:'Dipping Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    sosaties:    [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🫙',n:'Satay Sauce',s:'braai',t:'relishes'}],
    lambchops:   [{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Mint Salad',s:'braai',t:'salads'},{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'}],
    porkchops:   [{e:'🍎',n:'Apple Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'}],
    spareribs:   [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    prawns:      [{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'},{e:'🫙',n:'Lemon Butter',s:'braai',t:'relishes'}],
    espetada:    [{e:'🥗',n:'Portuguese Roll',s:'braai',t:'extras'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'}],
  };
  const gww = goesWellWith[vr.id] || [];
  const goesWellBlock = gww.length ? `
    <div class="goes-well">
      <div style="font-size:10px;letter-spacing:2px;color:#7a7aa0;text-transform:uppercase;margin-bottom:10px;">🤝 Goes Well With</div>
      <div>${gww.map(g=>`<button class="goes-well-pill" onclick="set({braiStep:3,braaiView:'browse',braaiSidesFilter:'${g.t}',viewingRecipe:null})">${g.e} ${g.n}</button>`).join('')}</div>
    </div>` : '';

  // ── SERVING ADJUSTER ─────────────────────────────────────────────
  const savedAdj = S.recipeAdjustments && vr && S.recipeAdjustments[vr.id];
  const recipeServings = savedAdj || S.recipeServings || S.people;
  const servingAdjuster = `
    <div class="serving-adjuster">
      <button class="serving-btn" onclick="set({recipeServings:Math.max(1,(S.recipeServings||S.people)-1)})">−</button>
      <div class="serving-display">
        <div class="serving-num">${recipeServings}</div>
        <div class="serving-label">people (tap ± to adjust)</div>
      </div>
      <button class="serving-btn" onclick="set({recipeServings:(S.recipeServings||S.people)+1})">+</button>
    </div>`;

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({viewingRecipe:null,recipeServings:null})" style="color:#c06020;">← Back to ${rl}</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${item.emoji} ${item.name}</h1>
      <div style="font-size:11px;color:#c06020;font-style:italic;">Full recipe and method</div>
    </div>
    <div class="content">
      <!-- Photo placeholder -->
      <div class="photo-placeholder">
        <span style="font-size:40px;">${item.emoji}</span>
        <span style="font-size:11px;color:#4a3010;">📷 Photo coming soon</span>
      </div>
      ${quantityBlock}
      ${(()=>{
        const ct = recipe.coalType||'';
        const isFireDish = vr.type === 'meat' && item.requiresFire !== false && ['coals','braai','fire','grid','direct','indirect','heat','stovetop','oven','fry','pan'].some(w=>ct.toLowerCase().includes(w));
        if(!isFireDish) return '';
        const isActualFire = ['coals','braai','fire','grid','direct','indirect'].some(w=>ct.toLowerCase().includes(w));
        return `<div style="background:#2a1008;border:1px solid #8a3010;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:10px;color:#e06030;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">${isActualFire?'🔥 Coal & Heat Guide':'🍳 Cooking Method'}</div>
          <p style="font-size:14px;color:#f5c842;font-weight:bold;margin-bottom:${isActualFire?'8px':'0'}">${ct}</p>
          ${isActualFire?`<div style="background:#1a0a04;border-radius:6px;padding:8px 10px;">
            <p style="font-size:11px;color:#906040;font-style:italic;margin-bottom:5px;">🖐 Hand test — hold palm-down 10cm above coals:</p>
            <div style="font-size:11px;color:#7a4030;line-height:1.9;">
              🔥🔥 <span style="color:#f5c842;font-weight:bold;">2 sec</span> — Scorching (steaks, prawns)<br>
              🔥 <span style="color:#f5c842;font-weight:bold;">3 sec</span> — High (short rib, espetada)<br>
              🔸 <span style="color:#f5c842;font-weight:bold;">4–5 sec</span> — Medium (chops, kebabs)<br>
              🔹 <span style="color:#f5c842;font-weight:bold;">6+ sec</span> — Low (brisket, potbrood)
            </div>
          </div>`:''}
        </div>`;
      })()}
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#5a3820;font-style:italic;">scaled for ${p} people</div>
        </div>
        ${(()=>{
          const isSelected = isMeat && S.selectedMeats.includes(vr.id);
          const mult = ap.mult;
          return recipe.ingredients.map((ing, i)=>{
            // Section dividers — pass through unchanged
            if(ing === "—" || ing.startsWith("—")) return `<div style="padding:5px 0;font-size:12px;color:#6a4020;font-style:italic;border-bottom:1px solid #1e1a10;">${ing}</div>`;

            // First ingredient of a SELECTED meat = main protein = handled by quantity block above
            if(i===0 && isSelected){
              const proteinName = ing.split("—")[0].trim();
              return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #1e1a10;">
                <span style="color:#c06020;flex-shrink:0;">•</span>
                <span style="font-size:14px;color:#e0d4b8;">${proteinName} — <span style="color:#f5c842;font-style:italic;">see quantity above ↑</span></span>
              </div>`;
            }

            // Scale all recognised patterns inline
            let scaled = ing;

            // Xg/ml/kg/L per person (or per portion)
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(g|ml|kg|L)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              let total = parseFloat(num) * mult * p;
              let u = unit;
              if((u==='g'||u==='ml') && total>=1000){ total=Math.round(total/100)/10; u=u==='g'?'kg':'L'; }
              else { total = Math.round(total*10)/10; }
              return `${num}${unit} pp · <strong style="color:#f5c842;">${total}${u} total</strong>`;
            });

            // X tbsp/tsp per person → convert to ml
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(tbsp|tsp)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              const mlMult = unit.toLowerCase()==='tbsp' ? 15 : 5;
              const total = Math.round(parseFloat(num) * mlMult * mult * p);
              return `${num} ${unit} pp · <strong style="color:#f5c842;">${total}ml total</strong>`;
            });

            // X slices/pieces per person
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+(slices?|pieces?|scoops?)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              const total = Math.round(parseFloat(num) * mult * p);
              return `${num} ${unit} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            // Plain X per person (piece count, no unit)
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+per\s+p(?:erson|ortion)(?!\s*\()/gi, (match, num)=>{
              const total = Math.round(parseFloat(num) * mult * p);
              return `${num} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            // Fraction per person (¼ ½ ⅓ etc)
            scaled = scaled.replace(/([¼½⅓⅔¾⅛]|\d+\/\d+)\s+per\s+p(?:erson|ortion)/gi, (match, frac)=>{
              const map={'¼':0.25,'½':0.5,'⅓':0.333,'⅔':0.667,'¾':0.75,'⅛':0.125};
              const val = map[frac] || (frac.includes('/')?parseFloat(frac.split('/')[0])/parseFloat(frac.split('/')[1]):null);
              if(!val) return match;
              const total = Math.ceil(val * mult * p);
              return `${frac} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            const changed = scaled !== ing;
            const isLast = i === recipe.ingredients.length-1;
            return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:${isLast?"none":"1px solid #1e1a10"};">
              <span style="color:#c06020;flex-shrink:0;">•</span>
              <span style="font-size:14px;color:${changed?"#e0d4b8":"#b09878"};">${scaled}</span>
            </div>`;
          }).join("");
        })()}
        ${isMeat && S.selectedMeats.includes(vr.id) ? `<div style="margin-top:8px;padding-top:8px;border-top:1px solid #1e1a10;font-size:10px;color:#4a3020;font-style:italic;">All quantities scaled for ${p} people · ${ap.label} appetite</div>` : ""}
      </div>
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">Method</div>
          <button onclick="openCookingMode('${item.name}',${JSON.stringify(recipe.method||[])})" style="background:#c06020;border:none;border-radius:8px;padding:8px 14px;font-size:12px;color:white;cursor:pointer;font-family:Georgia,serif;">👨‍🍳 Start Cooking →</button>
        </div>
        ${(()=>{
          return (recipe.method||[]).map((step,i)=>{
            const secs = parseStepTime(step);
            return `<div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
              <div class="step-num" style="background:#1a0f08;border:1px solid #c06020;color:#c06020;">${i+1}</div>
              <div style="flex:1;">
                <p style="margin:2px 0 6px;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p>
                ${secs?`<button class="timer-btn" onclick="startTimer(${secs},'Step ${i+1}: ${Math.round(secs/60)} min')">⏱️ ${fmtTimerLabel(secs)}</button>`:''}
              </div>
            </div>`;
          }).join('');
        })()}
      </div>
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;">${recipe.tip}</p>
      </div>
      ${(()=>{
        // 💰 Cost estimate card (Pro only)
        const costData = calcRecipeCost(recipe.ingredients, p);
        if(USER_TIER === "pro" && costData){
          const meatCostRand = isMeat ? Math.round((calcMeat(item).grams/1000)*(MEAT_COSTS[vr.id]||120)) : 0;
          const ingsCostRand = costData.total;
          const totalEst = meatCostRand + ingsCostRand;
          const ppEst = Math.round(totalEst / p);
          const coverage = costData.matched + "/" + costData.totalItems + " ingredients priced";
          return `<div style="background:#0f1a08;border:1px solid #5a8010;border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:10px;">💰 Cost Estimate</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <div style="font-size:13px;color:#6a8030;">Total for ${p} people</div>
              <div style="font-size:24px;font-weight:bold;color:#c8e840;">R${totalEst.toLocaleString()}</div>
            </div>
            <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #2a3010;">
              <div style="font-size:12px;color:#4a6020;">Per person</div>
              <div style="font-size:16px;font-weight:bold;color:#a0c030;">R${ppEst}</div>
            </div>
            <div style="margin-top:8px;font-size:10px;color:#4a5820;line-height:1.5;">Based on ${coverage} · Checkers/retail prices · May 2026<br>Always buy 10% extra. Prices subject to change.</div>
          </div>`;
        } else if(USER_TIER === "free"){
          return `<div style="background:#1a1008;border:1px dashed #5a3010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">
            <div style="font-size:22px;color:#2a1808;letter-spacing:6px;margin-bottom:6px;">R • • • •</div>
            <div style="font-size:12px;color:#6a3020;">💰 Cost estimate — <strong style="color:#c06020;">Tinza Pro R99/month</strong></div>
          </div>`;
        }
        return '';
      })()}
      ${goesWellBlock}
      ${(function(){
        var vr = S.viewingRecipe;
        var isInPlan = vr && vr.type === 'meat'
          ? (S.selectedMeats||[]).includes(vr.id)
          : (S.selectedSides||[]).includes(vr && vr.id);
        var togglePlan = vr && vr.type === 'meat'
          ? (isInPlan ? "set({selectedMeats:S.selectedMeats.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedMeats:[...S.selectedMeats,S.viewingRecipe.id]})")
          : (isInPlan ? "set({selectedSides:S.selectedSides.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedSides:[...S.selectedSides,S.viewingRecipe.id]})");
        return '<div style="border-top:1px solid #2a1a10;padding-top:14px;margin-bottom:20px;">'
          + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;">'
          + '<button onclick="' + togglePlan + '" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:' + (isInPlan ? '#1a3010' : '#1a1208') + ';border:2px solid ' + (isInPlan ? '#4a9020' : '#3a2010') + ';color:' + (isInPlan ? '#80c040' : '#6a4020') + ';font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">'
          + (isInPlan ? '&#10003;<br><b>In Plan</b>' : '&#9711;<br>Add to Plan')
          + '</button>'
          + '<button onclick="braaiRecipeAction(\'kitchen\')" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:#1a1208;border:1px solid #3a2010;color:#6a4020;font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">&#128190;<br>Save to<br>My Kitchen</button>'
          + '<button onclick="braaiRecipeAction(\'download\')" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:#1a1208;border:1px solid #3a2010;color:#6a4020;font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">&#11015;<br>Download<br>Recipe</button>'
          + '</div>'
          + '<div style="text-align:center;font-size:11px;color:#4a3020;padding-top:6px;border-top:1px solid #1e1a10;">'
          + '<button onclick="set({viewingRecipe:null,recipeServings:null})" style="background:none;border:none;color:#c06020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">&#8592; Back</button>'
          + ' &nbsp;|&nbsp; '
          + '<button onclick="set({viewingRecipe:null,recipeServings:null,braaiView:\'myplan\'})" style="background:none;border:none;color:#c0a020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">My Plan &#8594;</button>'
          + ' &nbsp;|&nbsp; '
          + '<button onclick="set({screen:\'home\',viewingRecipe:null,recipeServings:null})" style="background:none;border:none;color:#4a3020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">Home</button>'
          + '</div>'
          + '</div>';
      })()}
    </div>
  </div>`;
}

// ── BRAAI ─────────────────────────────────────────────────────────
function culturalGroupGo(id){
  set({activeCulturalGroup:id, activeCulturalRecipe:null});
}

function braaiNavGo(id){
  if(id==='mains')   { set({braiStep:2,braaiView:'browse'}); }
  else if(id==='salads')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'salads'}); }
  else if(id==='starchy')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'starchy'}); }
  else if(id==='sauces')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'relishes'}); }
  else if(id==='desserts')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'desserts'}); }
  else if(id==='breads')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'extras'}); }
  else if(id==='myplan')   { 
    if(USER_TIER==='pro') set({braaiView:'myplan'});
    else alert('📋 My Plan is a Tinza Pro feature — upgrade for R99/month');
  }
}

function braaiQuickNav(activeCat){
  const selMeats = S.selectedMeats||[];
  const selSides = S.selectedSides||[];
  const total = selMeats.length + selSides.length;
  const sections = [
    {id:'mains',   emoji:'🥩', label:'Mains',    count:selMeats.length},
    {id:'salads',  emoji:'🥗', label:'Salads',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='salads')?.items.some(x=>x.id===sid)).length},
    {id:'starchy', emoji:'🌽', label:'Side Meals',  count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='starchy')?.items.some(x=>x.id===sid)).length},
    {id:'sauces',  emoji:'🫙', label:'Sauces',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='relishes')?.items.some(x=>x.id===sid)).length},
    {id:'extras',  emoji:'🍞', label:'Breads',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='extras')?.items.some(x=>x.id===sid)).length},
    {id:'desserts',emoji:'🍫', label:'Desserts', count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='desserts')?.items.some(x=>x.id===sid)).length},
    {id:'myplan',  emoji:'📋', label:'My Plan',  count:total, highlight:true},
  ];
  return `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:14px;">
    ${sections.map(s=>{
      const isActive = activeCat===s.id;
      const borderCol = isActive?(s.highlight?'#c0a020':'#c06020'):s.count>0?(s.highlight?'#6a5010':'#5a2010'):'#2a1808';
      const bgCol = isActive?(s.highlight?'#1a1408':'#2a1008'):s.count>0?'#1a1008':'transparent';
      const textCol = isActive?'#f5c842':s.count>0?'#c09040':'#6a4020';
      return `<button onclick="braaiNavGo('${s.id}')"
        style="padding:8px 4px;border-radius:10px;border:1px solid ${borderCol};
               background:${bgCol};cursor:pointer;text-align:center;position:relative;">
        <div style="font-size:18px;">${s.emoji}</div>
        <div style="font-size:9px;color:${textCol};margin-top:3px;font-weight:${isActive?'bold':'normal'};">${s.label}</div>
        ${s.count>0?`<div style="position:absolute;top:2px;right:2px;background:${s.highlight?'#c0a020':'#c06020'};color:${s.highlight?'#181808':'white'};border-radius:5px;font-size:8px;padding:1px 3px;">${s.count}</div>`:''}
      </button>`;
    }).join('')}
  </div>`;
}
function braaiMyPlanBtn(){
  const meatCount = (S.selectedMeats||[]).length;
  const sideCount = (S.selectedSides||[]).length;
  const total = meatCount + sideCount;
  if(!total) return '';
  if(USER_TIER!=='pro') return `<div style="background:#1a1008;border:1px dashed #5a2010;border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;"><div style="font-size:12px;color:#6a3020;">📋 My Plan — <strong style="color:#c06020;">Tinza Pro R99/month</strong></div></div>`;
  return `<button onclick="set({braaiView:'myplan'})" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid #c06020;background:#1a1008;color:#f5c842;font-size:14px;cursor:pointer;font-family:Georgia,serif;">
    📋 See my Braai Plan & Shopping List →
    <div style="font-size:11px;color:#7a4020;margin-top:3px;">${meatCount} meat${meatCount!==1?'s':''} · ${sideCount} side${sideCount!==1?'s':''} · ${S.people} people</div>
  </button>`;
}


