let S = {
  screen: 'home',
  people: 4,
  appetite: 'normal',
  servings: 1,

  // Braai
  braiStep: 1,
  braaiView: 'browse',
  braaiSidesFilter: 'all',
  selectedMeats: [],
  selectedSides: [],
  braaiMeatRecipe: null,
  braiCat: null,
  activeCat: null,
  howItWorksOpen: false,
  portionHelpOpen: false,

  // Health
  healthTab: 'smoothies',
  healthGroup: null,
  vitalCat: null,
  activeSmoothie: null,
  healthOpenSmoothie: null,
  healthOpenJuice: null,
  activeOats: null,
  activeMuffin: null,
  activeRaw: null,
  healthPlan: [],
  healthPlanOpen: false,

  // Events
  eventTab: 'mains',
  eventGuests: 20,
  eventActiveRecipe: null,
  eventStep: 1,
  buffetStep: 1,
  eventSelectedStarters: [],
  eventSelectedMains: [],
  eventSelectedSides: [],
  eventSelectedSalads: [],
  eventSelectedDesserts: [],
  eventSelectedSauces: [],
  checkedBuffetItems: {},

  // Budget
  budget: 150,
  budgetAmount: 150,
  budgetPeople: 4,
  budgetPlanView: false,
  budgetStep: 1,

  // World Kitchen
  wkScreen: null,
  wkCountry: null,
  wkSelectedRegion: null,
  wkActiveCountry: null,
  wkTab: 'starters',
  wkSACulture: null,
  wkRecipeDetail: null,
  wkSearch: '',
  wkHowOpen: false,
  wkPortionOpen: false,
  wkGuests: 10,
  wkPlan: [],

  // Furry Friends
  furryPet: 'dog',
  furryHowOpen: false,
  dogView: 'browse',
  catView: 'browse',
  activeDog: null,
  activeCat2: null,
  dogSize: 'medium',
  dogAge: 'adult',
  catAge: 'adult',
  dogPlan: [],
  catPlan: [],

  // Tiny Tummies / Kiddies
  babyView: 'browse',
  activeBaby: null,
  kiddiesView: 'browse',

  // Mood / Surprise
  moodSelected: [],
  moodRecipes: [],
  moodAIRecipes: [],
  moodLoading: false,
  moodAILoading: false,
  moodPage: 1,
  moodPlan: [],
  moodPlanView: false,
  moodServings: 2,
  moodActiveRecipe: null,

  // Meals / Search
  find: '',
  recipeServings: 2,
  recipeAdjustments: {},

  // Finger Foods
  fingerSection: null,
  fingerView: 'browse',
  fingerShopCart: [],

  // Misc
  checkedShopItems: [],
  recentlyViewed: [],
};


let USER_TIER = "free";

// ── APPETITE ─────────────────────────────────────────────────────
const APPETITE = {
  big:    { label:"💪 Big Eaters",     sub:"Men / hungry crowd",      mult:1.25 },
  normal: { label:"👨‍👩‍👧 Family Mix",      sub:"Adults and kids",         mult:1.0  },
  light:  { label:"🥗 Light & Economy",sub:"Lighter portions, budget", mult:0.7  },
};

// ── BRAAI MEAT GROUPS — organised by animal ───────────────────────
const MEAT_GROUPS = [

  // ── BEEF ────────────────────────────────────────────────────────
  { id:"beef", label:"🐄 Beef", items:[
    { id:"boerewors", name:"Boerewors", intl:"SA Spiced Coil Sausage", emoji:"🌀", unit:"g", soloG:350, sharedG:150, note:"The soul of every braai",
      recipe:{ coalType:"Medium coals (4–5 sec hand test)", ingredients:["Boerewors — 350g per person solo, 150g if sharing","Coarse salt — 2g per person","Sunflower oil — 5ml per person (light brush)"],
        method:["Bring to room temperature 20 min before braaiing.","Lightly brush with oil to prevent sticking.","Medium coals — not too hot or casing will burst.","Do NOT pierce the casing — ever!","Cook 15–20 min turning every 4–5 min until golden brown.","Slice and serve immediately. Enjoy! 😊"],
        tip:"Never pierce boerewors — all the flavour is in the juices. Medium heat only." }},
    { id:"cocktailwors", name:"Cocktail Sausages", emoji:"🌭", unit:"pcs", soloG:200, sharedG:100, gramEach:30, soloPcs:7, sharedPcs:4, note:"Great starter while main meats cook",
      recipe:{ coalType:"Medium coals", ingredients:["Cocktail sausages — 7 per person solo, 4 as part of spread","Basting sauce — 15ml per person (apply last 3 min only)","Coarse salt — 2g per person","Black pepper — 1g per person","Sunflower oil — 5ml per person (light brush)"],
        method:["Medium coals. Cook 10–12 min turning regularly until golden.","Brush with basting sauce last 3 min only.","Serve as starter while main meats cook. Enjoy! 😊"],
        tip:"Perfect braai starter — pop them on when guests arrive." }},
    { id:"rump", name:"Rump Steak", emoji:"🥩", unit:"g", soloG:300, sharedG:150, note:"Best value steak — full of flavour",
      recipe:{ coalType:"Medium-high grey coals (3 sec hand test)", ingredients:["Rump steak — 250–300g per person","Coarse salt — 5g per person","Black pepper — 2g per person","Olive oil — 15ml per person"],
        method:["Remove from fridge 30 min before braai.","Pat dry. Rub with oil, salt and pepper.","Medium-high coals. 4 min per side for medium-rare.","Render fat cap by standing fat-side down 1–2 min.","REST 5 min off heat before cutting.","Slice against the grain. Enjoy! 😊"],
        tip:"Rump has more flavour than fillet. Always cut against the grain." }},
    { id:"fillet", name:"Beef Fillet", emoji:"🥩", unit:"g", soloG:250, sharedG:120, note:"Most tender cut — treat it with respect",
      recipe:{ coalType:"High heat grey coals (2–3 sec hand test)", ingredients:["Beef fillet — 200–250g per person","Coarse sea salt — 5g per person","Black pepper — 2g per person","Olive oil — 15ml per person","Butter — 15g per person (last 2 min)","Fresh rosemary — 2g per person (last 2 min)"],
        method:["Remove from fridge 30 min before braai.","Rub with oil, salt and pepper only.","High heat. Do NOT move for 3 min.","Flip once. 3 min for medium-rare.","Last 2 min: add butter and rosemary on meat.","REST 5 min — non-negotiable! Enjoy! 😊"],
        tip:"Medium-rare (pink centre) is the only correct way to serve fillet." }},
    { id:"tbone", name:"T-Bone Steak", emoji:"🥩", unit:"pcs", soloG:400, sharedG:300, gramEach:400, soloPcs:1, sharedPcs:1, note:"Two cuts in one — a full meal",
      recipe:{ coalType:"High heat grey coals", ingredients:["T-bone steak — 350–400g per person (ask butcher to cut 3cm thick)","Coarse salt — 8g per person (generous both sides)","Cracked black pepper — 3g per person","Olive oil — 15ml per person","Garlic butter to finish — 10g butter + 1 clove garlic (optional)"],
        method:["Bring to room temperature 30 min before.","Oil and season generously.","High heat. Sear each side 4 min without moving.","Stand on bone edge 2 min for thick spine.","Rest 5 min. Enjoy! 😊"],
        tip:"Two cuts in one — fillet (tender) and sirloin (flavourful)." }},
    { id:"chuck", name:"Beef Chuck (Shisanyama)", emoji:"🔥", unit:"g", soloG:400, sharedG:200, note:"Scorching hot — char is the flavour",
      recipe:{ coalType:"SCORCHING hot — near-red coals", ingredients:["Thick-cut beef chuck — 300–400g per person","Coarse salt — 8g per person","Black pepper — 3g per person","Garlic powder — 3g per person","Braai spice blend — 10g per person (heavy coating)","Sunflower oil — 15ml per person"],
        method:["🔥 SHISANYAMA: High heat and char is everything.","Season very generously. Rub with oil.","Coals must be near-red with intense heat.","Fat WILL flare up — this is the magic! Don't panic.","Char marks ARE the flavour. 5–6 min per side.","Rest 5 min. Serve with phutu pap and chakalaka. Enjoy! 😊"],
        tip:"Buy at butchery, season heavily, throw on red-hot coals. The char IS the flavour." }},
    { id:"shortrib", name:"Short Rib (thin sliced)", emoji:"🥩", unit:"g", soloG:350, sharedG:180, note:"Crispy, caramelised — Shisanyama special",
      recipe:{ coalType:"High heat", ingredients:["Short rib (Shisanyama cut) — 250–300g per person, sliced 5–8mm across the bone","Coarse salt — 8g per person (generous both sides)","Braai spice blend — 10g per person (heavy coating)","Sunflower oil — 10ml per person (light brush)","Garlic powder — 3g per person"],
        method:["Ask butcher to slice thin (5–8mm) across the bone.","Season and oil lightly.","Very high heat. 3–4 min per side.","Fat renders and crisps — the best part!","Serve immediately. Enjoy! 😊"],
        tip:"The thin slicing is key — gets crispy and caramelised." }},
    { id:"brisket", name:"Brisket (low and slow)", emoji:"🥩", unit:"g", soloG:300, sharedG:150, note:"3–4 hour cook — plan ahead",
      recipe:{ coalType:"LOW indirect heat — 3 to 4 hours", ingredients:["Whole beef brisket — 250–300g per person","Coarse salt — 2.5g per person","Black pepper — 1.5g per person","Garlic powder — 1.5g per person","Smoked paprika — 1.5g per person","Worcestershire sauce — 4ml per person","Sunflower oil — 4ml per person"],
        method:["Rub all over with spices and Worcestershire.","Indirect heat — coals to sides, meat in middle.","Cover braai. Maintain 120–140°C.","Add coals every 45 min.","After 3 hours — should pull apart easily.","Slice against the grain. Enjoy! 😊"],
        tip:"Use hardwood (kameeldoring) for sustained heat." }},
    { id:"beefkebabs", name:"Marinated Beef Kebabs", emoji:"🍢", unit:"pcs", soloG:320, sharedG:160, gramEach:100, soloPcs:3, sharedPcs:2, note:"Bold marinade — hearty skewers",
      recipe:{ coalType:"Medium-high coals", ingredients:["Beef sirloin or rump (cubed 4cm) — 100g per person","Soy sauce — 3ml per person","Worcestershire sauce — 2ml per person","Olive oil — 3ml per person","Garlic — 2g per person (crushed)","Brown sugar — 1.5g per person","Smoked paprika — 0.6g per person","Red onion — 20g per person (wedges)","Bell pepper — 25g per person (chunks)"],
        method:["Mix soy, Worcestershire, oil, garlic, sugar and paprika. Marinate beef 4+ hours.","Thread beef, red onion and pepper alternately onto skewers.","Medium-high coals. 3–4 min per side for medium-rare.","Rest 3 min before serving. Enjoy! 😊"],
        tip:"The longer the marinade, the deeper the flavour — overnight is best." }},
    { id:"beefsouvlaki", name:"Beef Souvlaki", emoji:"🍢", unit:"pcs", soloG:300, sharedG:150, gramEach:100, soloPcs:3, sharedPcs:2, note:"Greek-style — lemon, oreganum, olive oil",
      recipe:{ coalType:"Medium-high coals", ingredients:["Beef sirloin or lamb (cubed 4cm) — 100g per person","Olive oil — 4ml per person","Lemon juice — 6ml per person","Dried oreganum — 1g per person","Garlic — 1.5g per person (crushed)","Coarse salt — 1g per person","Black pepper — 0.4g per person","Red onion — 20g per person","Lemon wedges to serve"],
        method:["Combine olive oil, lemon juice, oreganum, garlic, salt and pepper.","Marinate beef minimum 2 hours (4+ is better).","Thread onto skewers with onion wedges.","Medium-high coals. 3–4 min per side.","Serve with pita, tzatziki and lemon wedges. Enjoy! 😊"],
        tip:"Oreganum and lemon are the soul of souvlaki. Don't skip either." }},
    { id:"turkishkebabs", name:"Turkish Beef Kebabs (Adana)", emoji:"🍢", unit:"pcs", soloG:280, sharedG:140, gramEach:140, soloPcs:2, sharedPcs:2, note:"Spiced minced beef on flat skewers",
      recipe:{ coalType:"High heat — direct", ingredients:["Beef mince (20% fat — don't use lean) — 140g per person","Onion — 20g per person (grated, excess squeezed out)","Crushed Chilli Spice — 5g per person","Cumin — 3g per person","Garlic — 5g per person (crushed)","Flat-leaf parsley — 5g per person (finely chopped)","Coarse salt — 3g per person","Black pepper — 2g per person"],
        method:["Mix all ingredients very well by hand — the fat must be evenly distributed.","Refrigerate 30 min to firm up — essential!","Mould firmly around flat metal skewers in a long sausage shape.","Press firmly so it holds — if it falls off, it needs more mixing.","High heat. 3–4 min per side, turning only once.","Serve with flatbread, grilled tomato, onion salad and yoghurt. Enjoy! 😊"],
        tip:"Fat content is non-negotiable — lean mince falls off the skewer. 20% fat mince only." }},
    { id:"kudu", name:"Kudu Fillet", emoji:"🦌", unit:"g", soloG:200, sharedG:100, note:"Game meat — medium-rare or nothing",
      recipe:{ coalType:"VERY high heat — fast cook", ingredients:["Kudu fillet — 150–200g per person","Streaky bacon or caul fat — 30g per person (for wrapping)","Red wine vinegar — 30ml per person (marinade)","Garlic — 5g per person (crushed)","Olive oil — 15ml per person","Coarse salt — 3g per person","Black pepper — 2g per person"],
        method:["Marinate 24–48 hours in red wine vinegar + garlic + oil.","Pat dry. Wrap tightly in streaky bacon or caul fat.","Very high heat. 3 min per side MAX for medium-rare.","⚠️ NEVER past medium-rare — becomes shoe leather!","Rest 3 min. Slice thin. Enjoy! 😊"],
        tip:"The RULE with venison: medium-rare or nothing." }},
    { id:"beefkofta", name:"Beef Kofta Kebabs", emoji:"🍢", unit:"pcs", soloG:280, sharedG:200, gramEach:140, soloPcs:2, sharedPcs:2, note:"Middle Eastern spiced mince — fragrant and juicy",
      recipe:{ coalType:"Medium-high coals — direct heat", ingredients:["Beef mince (20% fat) — 83g per person","Onion — 17g per person (finely minced)","Garlic — 3g per person (finely minced)","Sweet or smoked paprika — 2g per person","Ground cumin — 1g per person","Turmeric — 1g per person","Sea salt — 1g per person","Black pepper — 0.5g per person","Crushed Chilli Spice — 0.5g per person (adjust to taste)","Fresh parsley — 3g per person (chopped)","Fresh coriander — 2g per person (chopped)","Fresh mint — 1g per person (chopped)"],
        method:["Combine all spices in a small bowl. Mix well.","Add mince, spice blend, garlic, onion and fresh herbs to large bowl. Mix thoroughly by hand.","Cover and refrigerate 30 min minimum — this lets the spices bloom.","Shape into long cylinders around metal skewers or soaked wooden skewers. Squeeze firmly.","Medium-high heat. 5–6 min per side. Turn halfway through only.","Total cook: 10–12 min. Enjoy! 😊"],
        tip:"20% fat mince is non-negotiable — lean mince falls apart and dries out. Refrigerating after mixing is what makes the kofta hold together on the skewer." }},
    { id:"marinatedfillet", name:"Marinated Beef Fillet (Honey Soy Baste)", emoji:"🥩", unit:"g", soloG:220, sharedG:160, note:"Whole fillet — sticky glaze, sear then rest",
      recipe:{ coalType:"VERY high heat for searing, then rest", ingredients:["Beef fillet (whole) — 200g per person","Coarse salt — 5g per person","Black pepper — 3g per person","Olive oil — 15ml per person (for searing)","— BASTING SAUCE:","Soy sauce — 30ml per person","Red chilli — ½ per person (seeded, chopped)","Honey — 15ml per person","Canola or sunflower oil — 10ml per person"],
        method:["Mix basting: soy sauce, chilli, honey and oil. Set aside.","Season fillet all over with salt, pepper and olive oil.","VERY hot braai. Sear all over — resist turning constantly. Build a proper golden crust.","Remove from heat. Pour basting sauce over fillet while it rests.","Just before serving: return to braai. Baste continuously until sticky and catching slightly — not burning.","Remove. Rest 10 min. Slice. Dress with remaining basting sauce. Enjoy! 😊"],
        tip:"The two-stage cook is the secret: first build the crust, then add the sweet baste only at the end — added earlier it burns. Rest the meat before the final baste, not after." }},
  ]},

  // ── PORK ────────────────────────────────────────────────────────
  { id:"pork", label:"🐷 Pork", items:[
    { id:"porkchops", name:"Pork Loin Chops", emoji:"🍖", unit:"pcs", soloG:260, sharedG:130, gramEach:130, soloPcs:2, sharedPcs:1, note:"Marinate in apple cider — keeps it juicy",
      recipe:{ coalType:"Medium heat", ingredients:["Pork loin chops (bone-in) — 2 per person (±200g each)","Apple cider vinegar — 6ml per person","Garlic — 2g per person (crushed)","Soy sauce — 3ml per person","Brown sugar — 2g per person","Olive oil — 3ml per person","Coarse salt — 1g per person","Black pepper — 0.6g per person"],
        method:["Marinate 2+ hours.","Medium coals. 5 min per side. Juices run clear near bone.","Rest 3 min. Enjoy! 😊"],
        tip:"Pork dries out fast. The vinegar marinade keeps it juicy." }},
    { id:"porkribchops", name:"Pork Rib Chops", emoji:"🍖", unit:"pcs", soloG:300, sharedG:150, gramEach:150, soloPcs:2, sharedPcs:1, note:"Thick, meaty — sticky glaze essential",
      recipe:{ coalType:"Medium coals", ingredients:["Pork rib chops — 2 per person (±150g each, bone-in)","Honey — 20ml per person","Soy sauce — 15ml per person","Apple cider vinegar — 10ml per person","Garlic — 5g per person (crushed)","Smoked paprika — 3g per person","Coarse salt — 4g per person","Black pepper — 2g per person"],
        method:["Mix honey, soy, vinegar, garlic and paprika. Marinate 2+ hours.","Medium coals. Start indirect 10 min each side.","Move to direct heat. Baste with remaining glaze every 2 min.","Cook until sticky and golden — about 25 min total.","Juices run clear. Rest 3 min. Enjoy! 😊"],
        tip:"The indirect start followed by a sticky direct glaze is what makes rib chops great." }},
    { id:"spareribs", name:"Pork Spareribs", emoji:"🍖", unit:"g", soloG:450, sharedG:350, note:"Low and slow — 2.5 hours to perfection",
      recipe:{ coalType:"Indirect LOW heat — 2 to 2.5 hours", ingredients:["Full rack pork spareribs — 450g raw per person solo (bone-in)","Coarse salt — 4.5g per person","Black pepper — 2g per person","Smoked paprika — 3.5g per person","Garlic powder — 2g per person","Brown sugar — 7g per person","Honey — 15ml per person (glaze, last 20 min)","Soy sauce — 10ml per person (glaze)","Apple cider vinegar — 7ml per person (glaze)"],
        method:["Dry rub: mix salt, pepper, paprika, garlic powder and brown sugar. Rub all over.","Wrap tightly in foil. Indirect heat at 130–150°C for 2 hours.","Unwrap carefully — steam is HOT. Ribs should be tender but holding together.","Mix honey, soy and vinegar for glaze.","Move to direct heat. Brush glaze every 5 min for 20–30 min until sticky and caramelised.","Cut between bones. Serve immediately. Enjoy! 😊"],
        tip:"The foil phase is non-negotiable — it's what makes the meat fall off the bone. Never rush spareribs." }},
    { id:"porkcurrysosaties", name:"Pork Curry Sosaties", emoji:"🍢", unit:"pcs", soloG:280, sharedG:140, gramEach:80, soloPcs:4, sharedPcs:2, note:"Cape Malay twist on pork — incredible",
      recipe:{ coalType:"Medium coals", ingredients:["Pork shoulder (cubed 3cm) — 80g per person","Curry powder — 1.5g per person","Apricot jam — 15g per person","White vinegar — 10ml per person","Garlic — 1.5g per person (crushed)","Dried apricots — 4 per person (24g)","Red onion — 4 wedges per person (40g)","Bay leaves — 2 per person"],
        method:["Mix curry powder, jam, vinegar and garlic. Marinate pork 4+ hours minimum.","Thread: pork, apricot, onion, bay leaf. Repeat.","Medium coals. Turn every 3–4 min. 18–20 min total.","Juices must run clear — pork must be cooked through.","Rest 2 min. Enjoy! 😊"],
        tip:"Pork shoulder has enough fat to stay juicy through the full cook. Never use pork loin on sosaties." }},
    { id:"dirtyporkneck", name:"Dirty Pork Neck Steaks", emoji:"🐷", unit:"g", soloG:300, sharedG:200, note:"Thick-cut with creamy mustard sauce",
      recipe:{ coalType:"Medium-high coals — direct heat", ingredients:["Pork neck steaks — 250–300g per person (ask butcher to cut 3cm thick)","Coarse salt — 6g per person","Black pepper — 3g per person","Garlic powder — 3g per person","Olive oil — 15ml per person","— CREAMY MUSTARD SAUCE:","Wholegrain mustard — 8ml per person","Dijon mustard — 4ml per person","Fresh cream — 25ml per person","Butter — 5g per person","Garlic — 1g per person (crushed)","Lemon juice — 3ml per person"],
        method:["Bring pork neck steaks to room temperature 20 min before braai.","Season generously with salt, pepper, garlic powder and olive oil.","Medium-high coals. 4–5 min per side — pork neck can handle more heat than loin.","Rest 5 min — non-negotiable, the juices need to settle.","SAUCE: Melt butter in pan. Add garlic 1 min. Whisk in both mustards and cream.","Simmer 3–4 min until slightly thickened. Squeeze in lemon juice.","Pour sauce over rested steaks. Serve immediately. Enjoy! 😊"],
        tip:"Pork neck has beautiful marbling — it's almost impossible to dry out. The creamy mustard sauce takes 5 minutes and makes this a restaurant-level braai." }},
    { id:"porkneckhoneymustard", name:"Pork Neck with Honey Mustard Glaze", emoji:"🐷", unit:"g", soloG:400, sharedG:250, note:"Weber indirect — the ultimate centrepiece",
      recipe:{ coalType:"Indirect: 200°C for 30 min → 160–175°C for 2.5 hours", ingredients:["Pork neck roast — 400g raw per person (2kg feeds 4–5)","Coarse salt — 2g per person","Fresh rosemary — 1 large branch per person","Fresh bay leaves — 1 large branch per person","Butcher's string — for trussing","— HONEY MUSTARD GLAZE:","Wholegrain mustard — 9ml per person","Honey — 9ml per person"],
        method:["Light coal baskets on SIDES only — indirect heat setup.","Season pork neck all over with coarse salt.","Cover with rosemary and bay leaf branches on all sides.","Truss firmly with butcher's string using a loop and simple knot to hold herbs against meat.","Start at 200°C indirect for 30 min to seal.","Reduce to 160–175°C. Maintain for 2.5 hours, adding coals as needed.","GLAZE: 15 min before done — add honey and wholegrain mustard to small saucepan. Place in Weber alongside meat to warm into sticky glaze. Stir occasionally.","Remove pork from Weber. Cut string and remove herb branches.","Carve into thick slices. Pour glaze over generously. Serve immediately. Enjoy! 😊"],
        tip:"The herbs under the string infuse gently through the long cook. The glaze goes on AFTER carving — not during cooking or it burns. This is a showstopper centrepiece braai." }},
    { id:"porkshishkabobs", name:"Pork Tenderloin Shish Kabobs", emoji:"🍢", unit:"pcs", soloG:300, sharedG:180, gramEach:90, soloPcs:3, sharedPcs:2, note:"Herb-marinated — tender and quick",
      recipe:{ coalType:"Medium-high coals", ingredients:["Pork tenderloin (cubed 3cm) — 150g per person","Mixed dried herbs — 2g per person","Sea salt — 2g per person","Garlic powder — 1g per person","Black pepper — 1g per person","Olive oil — 13ml per person","Red onion — 30g per person (2cm cubes)","Fresh parsley — 5g per person (to garnish)"],
        method:["Combine pork cubes, separated onion pieces, olive oil and all seasonings in a bowl. Toss well.","Cover and marinate in fridge 4 hours minimum — overnight is best.","Remove from fridge 30 min before cooking — let come to room temperature.","Thread onto skewers alternating pork and onion. Leave small gaps — don't crowd.","Medium-high coals. 8–10 min total. Turn like a triangle: 3 min per side on 3 sides.","Cook until no pink remains and juices run clear. Garnish with parsley. Enjoy! 😊"],
        tip:"Pork tenderloin is very lean — the oil in the marinade is what keeps it moist. Don't skip it and don't overcook — once the juices run clear, it's done." }},
    { id:"apricotcurrychops", name:"Apricot Curry Pork Chops", emoji:"🍖", unit:"pcs", soloG:280, sharedG:180, gramEach:280, soloPcs:1, sharedPcs:1, note:"Sweet-sour-spicy — incredible depth of flavour",
      recipe:{ coalType:"Direct then indirect 180°C", ingredients:["Pork chops — 1 per person (±280g each)","Coarse salt — 5g per person","Black pepper — 2g per person","Vegetable oil — 4ml per person","— APRICOT CURRY SAUCE:","Orange juice — 25ml per person","Water — 50ml per person","Dijon mustard — 11ml per person","Soy sauce — 11ml per person","Curry powder — 3ml per person","Dried apricots — 25g per person (sliced)","Red onion — 50g per person (sliced)"],
        method:["Mix orange juice, water, mustard, soy sauce and curry powder. Set aside.","Season pork chops with salt and pepper.","Slice dried apricots and onions.","Braai setup: direct AND indirect heat zones at 180°C.","Sear pork chops 2 min per side over direct heat.","Move chops to indirect heat.","Place griddle pan or cast iron pan on braai. Add oil, then apricots and onions. Cook 2 min, stirring.","Pour orange juice mixture into pan. Stir.","Return pork chops to pan with sauce. Cook until sauce thickens slightly and pork reaches 75°C internal.","Serve chops covered in sauce. Enjoy! 😊"],
        tip:"The two-zone setup (direct sear + indirect finish in the sauce) is what makes this recipe special. The apricots dissolve into the sauce and become incredibly sticky and sweet." }},
  ]},

  // ── LAMB ────────────────────────────────────────────────────────
  { id:"lamb", label:"🐑 Lamb", items:[
    { id:"lambchops", name:"Lamb Loin Chops", emoji:"🍖", unit:"pcs", soloG:360, sharedG:180, gramEach:120, soloPcs:3, sharedPcs:2, note:"King of the braai — no argument",
      recipe:{ coalType:"Medium coals (4–5 sec hand test)", ingredients:["Lamb loin chops — 3 per person as main (about 120g each)","Olive oil — 15ml per person","Garlic — 5g per person (crushed)","Fresh rosemary — 3g per person (chopped)","Lemon juice — 10ml per person","Coarse salt — 5g per person","Black pepper — 2g per person"],
        method:["Marinate in olive oil, garlic, rosemary and lemon 1 hour min.","Medium coals. 4–5 min per side.","Fat should render golden, not black.","Rest 3 min. Enjoy! 😊"],
        tip:"The fat is where all the flavour is — don't trim it." }},
    { id:"lambribchops", name:"Lamb Rib Chops", emoji:"🍖", unit:"pcs", soloG:300, sharedG:150, gramEach:75, soloPcs:4, sharedPcs:2, note:"Smaller, faster — perfect party chops",
      recipe:{ coalType:"Medium-high coals", ingredients:["Lamb rib chops — 4 per person as main (about 75g each)","Olive oil — 15ml per person","Garlic — 5g per person (crushed)","Fresh thyme — 3g per person","Lemon zest — from ½ lemon per person","Lemon juice — 10ml per person","Coarse salt — 4g per person","Black pepper — 2g per person"],
        method:["Marinate in olive oil, garlic, thyme, lemon zest and juice — 30 min minimum.","Medium-high coals. 2–3 min per side only.","Rib chops are thin — they cook fast! Watch carefully.","Fat should be golden, not charred.","Rest 2 min. Serve immediately. Enjoy! 😊"],
        tip:"Rib chops cook faster than loin chops — they need high heat and a quick hand. Never walk away from them." }},
    { id:"lambribs", name:"Lemon & Garlic Lamb Ribs", emoji:"🍖", unit:"g", soloG:400, sharedG:300, note:"Low and slow — sticky and falling off the bone",
      recipe:{ coalType:"Indirect LOW heat — 1.5 to 2 hours", ingredients:["Lamb breast ribs — 400g raw per person (high bone-to-meat ratio)","Olive oil — 12ml per person","Lemon juice — 24ml per person","Lemon zest — from ¼ lemon per person","Garlic — 12g per person (crushed)","Fresh rosemary — 4g per person","Dried oreganum — 2.5g per person","Coarse salt — 6.5g per person","Black pepper — 2.5g per person","Honey — 16ml per person (glaze, last 20 min)"],
        method:["Mix olive oil, lemon, garlic, rosemary, oreganum, salt and pepper. Rub all over ribs.","Marinate 4+ hours or overnight in fridge.","Indirect heat at 140–160°C for 1.5–2 hours until very tender.","Mix honey with leftover marinade for glaze.","Move to direct heat. Brush glaze on. Cook 5 min per side until sticky.","Cut between bones. Serve immediately. Enjoy! 😊"],
        tip:"Lamb breast ribs have a lot of fat — the slow cook renders it down beautifully. The lemon keeps cutting through the richness." }},
    { id:"sosaties", name:"Lamb Sosaties", emoji:"🍢", unit:"pcs", soloG:280, sharedG:140, gramEach:80, soloPcs:4, sharedPcs:2, note:"Cape Malay classic",
      recipe:{ coalType:"Medium coals", ingredients:["Lamb leg (cubed 3cm) — 80g per person","Dried apricots — 4 per person (24g)","Red onion — 4 wedges per person (40g)","Bay leaves — 2 per person","Curry powder — 1.5g per person","Apricot jam — 15g per person","White vinegar — 10ml per person","Garlic — 1.5g per person (crushed)"],
        method:["Marinade: curry powder, jam, vinegar, garlic. Coat lamb. 4 hours min.","Thread: lamb, apricot, onion, bay leaf.","Medium coals. Turn every 3–4 min. 15 min total.","Rest 2 min. Enjoy! 😊"],
        tip:"Traditional Cape Malay. Sweet-sour-spicy marinade is non-negotiable." }},
    { id:"butterfliedleg", name:"Butterflied Leg of Lamb", emoji:"🐑", unit:"g", soloG:350, sharedG:280, note:"The showstopper — feeds a crowd beautifully",
      recipe:{ coalType:"Medium-high coals — direct, then indirect to finish", ingredients:["Leg of lamb (butterflied, bone removed) — 350g raw per person","Olive oil — 8ml per person","Garlic — 4g per person (crushed)","Fresh rosemary — 2.5g per person (finely chopped)","Fresh thyme — 1.5g per person","Lemon juice — 8ml per person","Lemon zest — from ⅓ lemon per person","Dijon mustard — 4ml per person","Coarse salt — 3.5g per person","Black pepper — 1.5g per person"],
        method:["Ask butcher to butterfly and flatten the leg — or buy it ready butterflied.","Mix oil, garlic, rosemary, thyme, lemon, mustard, salt and pepper into a paste.","Rub ALL over the lamb. Marinate minimum 4 hours — overnight is best.","Lay flat on grid. Medium-high direct heat. 5–6 min per side to sear.","Move to indirect. Cook 20–30 min more to reach 60°C internal (medium-rare).","REST 15 min minimum — lamb this large needs to rest!","Carve across the grain into thick slices. Enjoy! 😊"],
        tip:"A butterflied leg has uneven thickness — you'll get well-done edges and pink centre. This is perfect — different guests can choose their piece. The 15 min rest is non-negotiable." }},
    { id:"lambleganchoviolive", name:"Leg of Lamb with Anchovy & Olive Marinade", emoji:"🐑", unit:"g", soloG:300, sharedG:240, note:"Serves 10–12 — whole leg on indirect heat",
      recipe:{ coalType:"Indirect medium coals — cover with lid", ingredients:["Whole leg of lamb — 250–300g raw per person (2.5–3kg serves 10–12)","Coarse salt — 2.5g per person","Black pepper — 1.5g per person","— ANCHOVY-OLIVE MARINADE:","Fresh rosemary — 1 small sprig per person","Flat-leaf parsley — 5g per person (roughly chopped)","Anchovy fillets — 1 per person (in oil)","Garlic — 2g per person (finely grated)","Capers in wine vinegar — 3g per person","Kalamata olives (pitted) — 15g per person","Dijon or English mustard — 6ml per person","Pitas (toasted) to serve"],
        method:["Score the leg of lamb all over with a sharp knife — 2cm deep cuts.","Season generously with salt all over and into the cuts.","Blend rosemary, parsley, anchovies, garlic, capers, olives and mustard to a chunky paste.","Spread marinade all over lamb, pushing into scored cuts.","Refrigerate uncovered 4 hours minimum — overnight gives best results.","Remove from fridge 3 HOURS before cooking — it must come to room temperature.","Prepare braai for indirect medium coals. Place lamb over indirect heat.","Cover with lid. Turn every 20–30 min. Total 1.5–2 hours for medium meat.","Rest in roasting dish with lid 20 min minimum.","Carve and serve with toasted pitas. Enjoy! 😊"],
        tip:"Taking the lamb out 3 hours before cooking is critical for even cooking — this is not optional. The anchovy-olive marinade sounds powerful but becomes mellow and savoury through the long cook." }},
  ]},

  // ── CHICKEN ─────────────────────────────────────────────────────
  { id:"chicken", label:"🍗 Chicken", items:[
    { id:"honeysoychiicken", name:"Honey & Soy Chicken Pieces", emoji:"🍗", unit:"pcs", soloG:320, sharedG:160, gramEach:140, soloPcs:3, sharedPcs:2, note:"Sweet, sticky, caramelised — crowd favourite",
      recipe:{ coalType:"Medium indirect heat — patience is everything", ingredients:["Bone-in chicken pieces — 2–3 per person (±300g total)","Honey — 30ml per person","Soy sauce — 20ml per person","Garlic — 8g per person (crushed)","Fresh ginger — 5g per person (grated)","Olive oil — 10ml per person","Apple cider vinegar — 10ml per person","Sesame seeds — 3g per person (optional, to finish)"],
        method:["Mix honey, soy, garlic, ginger, oil and vinegar. Marinate chicken 4+ hours (overnight better).","Medium indirect heat only. 30–35 min turning every 10 min.","Move to direct heat last 10 min. Baste with remaining marinade every 2 min.","Watch closely — the honey burns fast!","Juices must run completely clear. Rest 5 min. Enjoy! 😊"],
        tip:"The indirect start is what stops the honey from burning. Always finish on direct heat to caramelise." }},
    { id:"greekchicken", name:"Greek Chicken Pieces", emoji:"🍗", unit:"pcs", soloG:320, sharedG:160, gramEach:140, soloPcs:3, sharedPcs:2, note:"Lemon, oreganum, garlic — effortlessly good",
      recipe:{ coalType:"Medium indirect heat", ingredients:["Bone-in chicken pieces — 2–3 per person (±300g total)","Olive oil — 30ml per person","Lemon juice — 30ml per person","Lemon zest — from ½ lemon per person","Garlic — 10g per person (crushed)","Dried oreganum — 5g per person","Dried thyme — 2g per person","Coarse salt — 5g per person","Black pepper — 2g per person"],
        method:["Mix all ingredients. Marinate chicken minimum 4 hours — overnight is best.","Medium indirect heat. 35–40 min turning every 10 min.","Finish direct heat 5 min per side for colour.","Juices run clear. Rest 5 min. Serve with lemon wedges. Enjoy! 😊"],
        tip:"The oreganum doubles with heat — don't be shy with it. Serve with tzatziki and warm pita for a complete spread." }},
    { id:"lemonherbflatty", name:"Lemon & Herb Chicken Flatty", emoji:"🍗", unit:"pcs", soloG:500, sharedG:350, gramEach:500, soloPcs:1, sharedPcs:1, note:"Spatchcocked whole chicken — spectacular on the grid",
      recipe:{ coalType:"Medium indirect heat — 45 to 60 min", ingredients:["Whole chicken (spatchcocked, flattened) — 1 per 1–2 people (±1.2–1.5kg bird)","Olive oil — 15ml per person","Lemon juice — 15ml per person","Lemon zest — ½ lemon per person","Garlic — 7.5g per person (crushed)","Fresh thyme — 2.5g per person (stripped)","Fresh rosemary — 2.5g per person (chopped)","Coarse salt — 5g per person","Black pepper — 2g per person","Butter — 10g per person (optional, under skin)"],
        method:["Ask butcher to spatchcock (butterfly) the chicken OR do it yourself: cut along backbone, flip and press flat firmly.","Loosen skin over breast. Push butter and garlic mixture under skin.","Mix oil, lemon, herbs, salt and pepper. Rub all over and under skin.","Marinate 4 hours minimum — overnight best.","Grid bone-side DOWN over indirect heat. 40–50 min.","Flip skin-side down last 10–15 min over direct heat for crispy golden skin.","Juices completely clear. REST 10 min minimum.","Carve into quarters. Enjoy! 😊"],
        tip:"Spatchcocking gives you the whole bird in half the time with dramatically crispier skin. The butter under the skin is the secret to a moist breast." }},
    { id:"yoghurtchickenkebabs", name:"Yoghurt Chicken Kebabs", emoji:"🍢", unit:"pcs", soloG:300, sharedG:150, gramEach:80, soloPcs:4, sharedPcs:2, note:"Tender, juicy — yoghurt tenderises beautifully",
      recipe:{ coalType:"Medium coals", ingredients:["Chicken thigh (boneless, cubed 3cm) — 80g per person","Full-fat plain yoghurt — 60g per person","Garlic — 5g per person (crushed)","Fresh ginger — 5g per person (grated)","Cumin — 3g per person","Coriander — 2g per person","Turmeric — 1g per person","Smoked paprika — 2g per person","Lemon juice — 10ml per person","Coarse salt — 4g per person"],
        method:["Mix yoghurt and all spices. Coat chicken completely. Marinate 4+ hours minimum.","Scrape off excess yoghurt (it burns). Thread onto skewers.","Medium coals. Turn every 3–4 min. 18–20 min total.","Yoghurt will char slightly on outside — this is correct, not burnt.","Juices run clear. Rest 3 min. Enjoy! 😊"],
        tip:"The yoghurt marinade tenderises the chicken and creates a beautiful caramelised coating. Scraping off excess before grilling is key." }},
    { id:"bbqchicken", name:"BBQ Chicken Pieces", emoji:"🍗", unit:"pcs", soloG:320, sharedG:160, gramEach:140, soloPcs:3, sharedPcs:2, note:"Classic braai chicken — sticky and smoky",
      recipe:{ coalType:"Medium indirect heat", ingredients:["Bone-in chicken pieces — 2–3 per person (±300g total)","Tomato sauce (ketchup) — 30ml per person","Honey — 15ml per person","Soy sauce — 10ml per person","Apple cider vinegar — 10ml per person","Smoked paprika — 3g per person","Garlic — 5g per person (crushed)","Worcestershire sauce — 5ml per person"],
        method:["Mix all sauce ingredients. Reserve half for basting.","Marinate chicken in remaining sauce 2+ hours.","Medium indirect heat. 30–35 min turning every 10 min.","Move to direct heat last 10 min. Baste reserved sauce every 2 min.","Juices run completely clear. Rest 5 min. Enjoy! 😊"],
        tip:"Reserve half the sauce for basting at the end — the initial marinade is cooked, so basting fresh sauce gives a bright flavour boost." }},
    { id:"chickenkebaabs", name:"Peri-Peri Chicken Kebabs", emoji:"🍢", unit:"pcs", soloG:300, sharedG:150, gramEach:80, soloPcs:4, sharedPcs:2, note:"Always a crowd favourite",
      recipe:{ coalType:"Medium heat", ingredients:["Chicken thigh (boneless, cubed 3cm) — 80g per person","Peri-peri sauce — 15ml per person (plus extra to brush)","Garlic — 5g per person (crushed)","Lemon juice — 10ml per person","Olive oil — 10ml per person","Bell peppers — 30g per person (chunks)","Red onion — 20g per person (wedges)","Button mushrooms — 20g per person"],
        method:["Marinate 2+ hours.","Thread: chicken, pepper, onion, mushroom.","Medium coals. Turn every 3–4 min. 20 min total.","Brush with peri-peri last 5 min. Juices run clear. Enjoy! 😊"],
        tip:"Chicken thigh stays juicier than breast on kebabs." }},
    { id:"wings", name:"Chicken Wings", emoji:"🍗", unit:"pcs", soloG:400, sharedG:200, gramEach:60, soloPcs:7, sharedPcs:4, note:"Lots of bone — always make more than you think",
      recipe:{ coalType:"Medium heat", ingredients:["Chicken wings — 7 per person (±400g)","Peri-peri or BBQ sauce — 20ml per person","Garlic — 5g per person (crushed)","Olive oil — 10ml per person","Coarse salt — 5g per person","Black pepper — 2g per person"],
        method:["Marinate 2+ hours.","Medium coals. 20–25 min. Turn every 5 min.","Sauce last 5 min only — sugar burns!","Enjoy! 😊"],
        tip:"Always make more than you think. They disappear fast!" }},
    { id:"hardbody", name:"Slow-Roasted Lemon & Garlic Chicken", emoji:"🐔", unit:"pcs", soloG:400, sharedG:200, gramEach:200, soloPcs:2, sharedPcs:1, note:"Low and slow — real depth of flavour",
      recipe:{ coalType:"Indirect medium heat — low and slow", ingredients:["Whole chicken (spatchcocked or cut up) — 400g per person","Coarse salt — 8g per person","Braai spice — 8g per person","Garlic — 8g per person (crushed)","Lemon juice — 30ml per person","Olive oil — 30ml per person"],
        method:["Marinate overnight.","Indirect heat only. 60–90 min turning every 15 min.","Finish over direct heat last 10 min.","Juices completely clear. Enjoy! 😊"],
        tip:"Hardbody has real depth of flavour. Worth the extra time." }},
  ]},

  // ── SEAFOOD ─────────────────────────────────────────────────────
  { id:"seafood", label:"🐟 Seafood", items:[
    { id:"snoek", name:"Snoek", emoji:"🐟", unit:"g", soloG:300, sharedG:150, note:"Apricot baste — West Coast classic",
      recipe:{ coalType:"Medium coals — not too hot", ingredients:["Fresh snoek (butterflied) — 300g per person","Apricot jam — 20ml per person","Butter — 17g per person","Garlic — 3g per person (crushed)","Lemon juice — 10ml per person","Coarse salt — 2g per person"],
        method:["Baste: melt butter, add jam, garlic and lemon.","Skin-side down on oiled grid. Baste generously.","15–20 min skin-side down. Flip last 5 min.","Flakes easily when done. Enjoy! 😊"],
        tip:"Apricot-butter baste is non-negotiable. Never high heat." }},
    { id:"prawns", name:"Prawns (shell-on)", emoji:"🦐", unit:"pcs", soloG:300, sharedG:150, gramEach:30, soloPcs:10, sharedPcs:6, note:"2 min per side max — the only rule",
      recipe:{ coalType:"SCORCHING heat — very fast", ingredients:["Large prawns shell-on — 10 per person (±300g)","Butter — 6g per person","Garlic — 2g per person (crushed)","Lemon juice — 2.5ml per person","Chilli flakes — 0.3g per person"],
        method:["Melt butter with garlic, lemon and chilli. Brush over prawns.","SCORCHING heat. 2–3 min per side ONLY.","Pink shells + white flesh = done.","⚠️ 2 min per side MAX. Enjoy! 😊"],
        tip:"High heat, fast, shell-on. That's the whole secret." }},
    { id:"mixedseafoodkebabs", name:"Mixed Seafood Kebabs", emoji:"🍢", unit:"pcs", soloG:280, sharedG:180, gramEach:90, soloPcs:3, sharedPcs:2, note:"Impressive and fast — 8 min total cook",
      recipe:{ coalType:"High heat — very fast", ingredients:["Large prawns (shelled, deveined) — 30g each","Firm white fish (yellowtail or hake, cubed 4cm) — 30g per person","Calamari tubes (sliced into rings) — 20g per person","Baby marrows (sliced) — 15g per person","Cherry tomatoes — 2 per person","— MARINADE:","Olive oil — 20ml per person","Lemon juice — 15ml per person","Garlic — 5g per person (crushed)","Fresh parsley — 5g per person (chopped)","Coarse salt — 3g per person","Black pepper — 2g per person"],
        method:["Mix marinade ingredients. Coat all seafood gently. 30 min maximum — acid cooks seafood!","Soak wooden skewers 30 min. Thread: prawn, fish, calamari ring, cherry tomato, marrow. Repeat.","SCORCHING heat. Turn gently only once — after 3–4 min.","Total cook time: 6–8 min. Do not overcook — seafood is done when just opaque.","Squeeze fresh lemon over immediately. Serve. Enjoy! 😊"],
        tip:"Seafood overcooks in seconds. 6–8 min total is all it needs. The moment it turns opaque, it's done. Calamari goes rubbery after 2 min — skewer it between more forgiving pieces." }},
    { id:"espetada", name:"Seafood Espetada", emoji:"🍢", unit:"pcs", soloG:320, sharedG:160, gramEach:100, soloPcs:3, sharedPcs:2, note:"Portuguese-style — massive salt, bay leaves",
      recipe:{ coalType:"High heat", ingredients:["Beef sirloin — 100g per person (large 5cm cubes)","Coarse sea salt — 10g per person (very generous)","Fresh bay leaves — 4 per person","Garlic — 5g per person (crushed)","Olive oil — 15ml per person","Black pepper — 2g per person"],
        method:["Thread large cubes onto skewers with bay leaves between.","Rub with salt, garlic, oil and pepper.","High heat. 3–4 min per side. Medium-rare.","Enjoy! 😊"],
        tip:"Large chunks, tons of salt, bay leaves — simplicity IS the genius." }},
    { id:"honeymustardSalmon", name:"Honey & Mustard Salmon", emoji:"🐟", unit:"g", soloG:200, sharedG:150, note:"Foil-baked on the braai — 15 min",
      recipe:{ coalType:"Medium coals — foil method", ingredients:["Salmon portions — 200g per person","Butter — 20g per person","Honey — 20ml per person","Wholegrain mustard — 20ml per person","Dijon mustard — 20ml per person","Lemon — 1 slice per person","Coarse salt — 3g per person","Black pepper — 2g per person"],
        method:["Place all marinade ingredients (butter, honey, both mustards, lemon, salt, pepper) in a small cast iron pot or disposable foil tray on the braai.","Heat until butter melts and mixture is combined — about 3 min.","Lay salmon portions on a large piece of foil. Fold up edges to make a boat.","Pour warm marinade over salmon.","Close foil loosely. Cook on medium coals 12–15 min until salmon flakes easily.","Open foil carefully — steam is very hot. Serve immediately. Enjoy! 😊"],
        tip:"The foil method gives you perfectly moist salmon every time. Never direct-grill salmon — it falls apart on the grid." }},
    { id:"seafoodpaella", name:"Braai Seafood Paella", emoji:"🥘", unit:"g", soloG:350, sharedG:280, note:"Show-stopper — feeds a crowd from one pan",
      recipe:{ coalType:"Medium-high coals — paella pan directly on grid", ingredients:["Paella rice — 65g dry per person","Large prawns (deveined) — 40g per person","Fresh mussels — 40g per person","Smoked chorizo (cubed) — 17g per person","Onion — 13g per person (finely chopped)","Red pepper — 13g per person (diced)","Garlic — 5g per person (minced)","Smoked paprika — 5ml per person","White wine — 10ml per person","Fish or chicken stock cube — 1 cube per 6 people","Saffron — 1 pinch per 6 people (steep in 30ml boiling water)","Butter — 3g per person","Olive oil — 3ml per person","Frozen peas — 8g per person","Coarse salt and black pepper — 3g per person","Lime wedges to serve"],
        method:["Melt butter and olive oil in paella pan directly on hot braai coals.","Sauté onion, pepper and garlic until translucent — about 5 min.","Add paprika and chorizo. Sauté until chorizo is crispy.","Add dry rice. Stir 2–3 min until coated and slightly toasted.","Deglaze with white wine. Stir until absorbed.","Add saffron water, bay leaf and stock (diluted in 1L warm water per 6 people). Stir well.","Simmer without stirring 10 min — don't touch the rice!","Lay all seafood and peas on top. Press gently into rice.","Cover loosely with foil. Steam 15 min until mussels open and prawns are pink.","Discard any mussels that haven't opened. Season. Serve from the pan with lime wedges. Enjoy! 😊"],
        tip:"Never stir after adding the stock — the socarrat (crispy bottom layer) is the most prized part of any paella. If you hear gentle sizzling near the end, that's it forming. Perfect." }},
  ]},

  // ── VEGETARIAN ──────────────────────────────────────────────────
  { id:"veg", label:"🥦 Vegetarian", items:[
    { id:"mushroomskewers", name:"Balsamic Garlic Mushroom Skewers", emoji:"🍄", unit:"g", soloG:300, sharedG:200, note:"Meaty, umami — the best veg skewer",
      recipe:{ coalType:"Medium-high coals", ingredients:["Button or portobello mushrooms — 250g per person (cubed 2cm)","Balsamic vinegar — 8ml per person","Soy sauce — 4ml per person","Garlic — 2g per person (minced)","Fresh thyme — 1g per person (chopped)","Coarse salt — 1g per person","Black pepper — 0.5g per person"],
        method:["Mix balsamic, soy, garlic, thyme, salt and pepper.","Toss mushrooms in marinade. Rest 30 min minimum.","Thread onto soaked skewers (do not overcrowd).","Medium-high coals. 2–3 min per side until just tender and slightly charred.","Serve immediately — mushrooms release liquid as they sit. Enjoy! 😊"],
        tip:"Use portobello or large button mushrooms — small ones fall through the grid. The balsamic caramelises beautifully. Don't skip the 30-min marinade." }},
    { id:"caulisteaks", name:"Grilled Cauliflower Steaks with Tahini", emoji:"🥦", unit:"g", soloG:350, sharedG:280, note:"Impressive centrepiece — looks and tastes amazing",
      recipe:{ coalType:"Medium heat (180–230°C) — Weber griddle pan", ingredients:["Cauliflower head — 1 head per 3–4 people (cut into 3 steaks approx 1cm thick)","Olive oil — 15ml per person","Raw almonds — 25g per person (to toast)","Currants — 13g per person","Fresh mint leaves — 5g per person","Plain yoghurt — 30ml per person (to serve)","— TURMERIC & CHILLI SEASONING:","Sea salt — 2g per person","Turmeric powder — 2g per person","Ground cumin — 1g per person","Dried oreganum — 1g per person"],
        method:["Mix seasoning: salt, turmeric, cumin, oreganum.","Sit cauliflower stalk-side up. Cut 3 steaks approx 1cm thick keeping stalk intact so they hold together.","Brush both sides with olive oil. Season all over with turmeric mix.","Preheat Weber griddle pan over medium coals.","Toast almonds in griddle pan 4 min, stirring. Remove.","Place cauliflower steaks on griddle. 10 min direct medium heat.","Flip with wide metal spatula. 10 min more.","If not yet tender: brush remaining oil, flip, 4 min more each side.","Roughly chop toasted almonds. Serve steaks with almonds, currants, mint and yoghurt. Enjoy! 😊"],
        tip:"The stalk holds the steak together — don't cut it out. A wide metal spatula is essential for flipping without breaking. Don't rush — the 20-min cook is minimum." }},
    { id:"stuffedbutternut", name:"Butternut Stuffed with Spinach Couscous", emoji:"🎃", unit:"pcs", soloG:400, sharedG:350, gramEach:400, soloPcs:1, sharedPcs:1, note:"Oven or braai — warming and filling",
      recipe:{ coalType:"Indirect heat OR oven 180°C", ingredients:["Butternut — ½ per person (1 butternut feeds 2)","Olive oil — 8ml per person","Sea salt — 2g per person","— FILLING (per person):","Baby spinach (chopped) — 20g","Couscous (dry) — 42ml per person (about 40g dry)","Cooked chopped tomatoes — 25g per person","Fresh basil — 5g per person (chopped)","— TOPPING (per person):","Radishes — 1 per person (sliced)","Spring onion — 1 per person (sliced)","Red chilli — ¼ per person (grated)","Hard cheese — 13g per person (grated)"],
        method:["Halve butternut. Remove seeds. Rub with olive oil and salt.","Indirect braai heat 180°C, or bake in oven 40 min until tender.","Cook couscous: pour 1:1.5 boiling water over dry couscous. Cover 5 min. Fluff with fork.","Mix cooked couscous with spinach, tomato and basil.","Spoon filling generously into cooked butternut halves.","Top with radishes, spring onion, chilli and grated cheese.","Return to braai or oven 5 min to warm toppings. Enjoy! 😊"],
        tip:"The butternut can be baked ahead — fill and finish on the braai just before serving. Works as both a main for vegetarians and a stunning side dish." }},
    { id:"brinjalskewers", name:"Brinjal & Onion Kebabs with Carrot Tzatziki", emoji:"🍆", unit:"g", soloG:280, sharedG:220, note:"Spiced overnight marinade — carrot tzatziki makes it",
      recipe:{ coalType:"Hot coals — direct", ingredients:["Brinjal — 100g per person (cubed 3cm)","Baby onions — 40g per person (wedges)","Red onion — 30g per person (wedges)","— MARINADE (per person):","Olive oil — 25ml per person","Garam masala — 5g per person","Cayenne pepper — 2g per person","Garlic — 3g per person (minced)","Coarse salt — 2g per person","— CARROT TZATZIKI (per person):","Olive oil — 5ml per person","Carrot — 20g per person (grated)","Fennel seeds — 0.5g per person","Smoked paprika — 1g per person","Honey — 5ml per person","Greek yoghurt — 40g per person","Fresh dill — 2g per person (chopped)","Salt and pepper — to taste"],
        method:["Mix oil, garam masala, cayenne, garlic and salt. Toss brinjal and onion.","Marinate 4 hours minimum — overnight is much better.","Soak bamboo skewers 30 min in water. Thread vegetables alternating.","Grill over hot coals until charred and soft — brinjal should be completely tender.","TZATZIKI: Fry grated carrot in olive oil. Add fennel seeds 2 min. Add paprika and honey. Remove from heat.","Cool completely. Stir into Greek yoghurt. Top with dill. Season.","Serve kebabs with carrot tzatziki alongside. Enjoy! 😊"],
        tip:"The overnight marinade transforms brinjal completely. The carrot tzatziki is non-negotiable — it balances the spice perfectly. Make both a day ahead." }},
    { id:"mixedvegbraai", name:"Mixed Braaied Vegetables", emoji:"🫑", unit:"g", soloG:300, sharedG:250, note:"Simple, stunning — the perfect side or veg main",
      recipe:{ coalType:"Medium-high direct heat 200–260°C", ingredients:["Courgettes (baby marrow) — 90g per person","Brinjal — 90g per person","Red or yellow pepper — 60g per person (1 pepper per 2 people)","Extra-virgin olive oil — 10ml per person","Coarse sea salt — 13g per person","Black pepper — 5g per person"],
        method:["Slice courgettes lengthways into planks. Slice brinjal into rounds. Halve and deseed pepper.","Brush all vegetables on both sides with olive oil. Season with salt and pepper.","Prepare braai for direct medium-high heat (200–260°C). Close lid if possible.","Braai in batches if needed: courgettes 4 min total (2 min per side), brinjal 10 min total, peppers 12–14 min total.","Remove each vegetable as it's done — don't wait for everything at once.","Cut into bite-sized pieces. Toss together and serve warm. Enjoy! 😊"],
        tip:"Each vegetable has a different timing — don't cook them together and expect them all to be ready at once. Remove them as they finish and toss together at the end." }},
    { id:"halloumiskewers", name:"Halloumi & Veggie Skewers", emoji:"🧀", unit:"g", soloG:250, sharedG:200, note:"Salty, crispy, charred — everyone loves halloumi",
      recipe:{ coalType:"Medium-hot coals", ingredients:["Halloumi cheese — 70g per person (cubed 3cm)","Baby marrow (courgette) — 35g per person (thick rounds)","Red onion — 17g per person (chunks)","Mixed bell peppers — 17g per person (chunks)","Baby tomatoes — 15g per person (whole)","Extra-virgin olive oil — 10ml per person","Fresh lemon juice — 5ml per person","Dried origanum or rosemary — 2g per person"],
        method:["Cut halloumi and vegetables into similar-sized chunks.","Thread alternating onto skewers: halloumi, marrow, pepper, tomato, onion.","Drizzle generously with olive oil. Squeeze over lemon juice. Sprinkle with origanum.","Medium-hot coals. Braai 5–7 min turning frequently.","Halloumi should be golden-brown with distinct char marks.","Serve immediately — halloumi goes rubbery as it cools. Enjoy! 😊"],
        tip:"Halloumi must be eaten hot — it goes rubbery within minutes of cooling. Have everything ready to serve the moment it comes off the grid." }},
  ]},
];
const SIDES_GROUPS = [
  { id:"starchy", label:"🌽 Side Meals", items:[
    { id:"stywepap", name:"Stywe Pap (Stiff Pap)", emoji:"🌽", tier:"free", perPerson:80, unit:"g", note:"Firm and sliceable — cut into wedges", pantryP:8, stdP:10, indulgeP:12,
      shopping:[{name:"Coarse maize meal",per:80,unit:"g"},{name:"Butter",per:5,unit:"g"},{name:"Salt",per:2,unit:"g"}],
      recipe:{ coalType:"Any heat — pot to the side", ingredients:["Coarse maize meal — 80g dry per person","Salted water — 80ml per person (less water = stiffer)","Butter — 5g per person","Salt — 3g per person"],
        method:["Bring salted water to boil. Use LESS water than phutu.","Slowly pour in maize meal stirring constantly.","Very low heat. Cover. Cook 30–35 min barely stirring.","Should pull away from sides of pot — dense and firm.","Turn out onto board. Slice into wedges. Enjoy! 😊"],
        tip:"LESS water than Phutu Pap. Stywe Pap must be firm enough to slice and hold its shape." }},
    { id:"pap", name:"Phutu Pap", emoji:"🌽", tier:"free", perPerson:80, unit:"g", note:"Serve with Sheba sauce", pantryP:8, stdP:10, indulgeP:12,
      shopping:[{name:"Coarse maize meal",per:80,unit:"g"},{name:"Butter",per:5,unit:"g"}],
      recipe:{ coalType:"Any heat — pot to the side", ingredients:["Coarse maize meal — 80g dry per person","Salted water — 120ml per person","Butter — 5g per person (optional)","Salt — 3g per person"],
        method:["Bring salted water to boil.","Slowly pour in maize meal stirring constantly.","Very low heat. Cover. Steam 25–30 min stirring every 10 min.","Break into crumbles with a fork — dry and crumbly, NOT smooth.","Serve with Sheba sauce. Enjoy! 😊"],
        tip:"Phutu is the backbone of Shisanyama. Crumbly not smooth." }},
    { id:"potbake", name:"Creamy Potato Bake", emoji:"🥔", tier:"free", perPerson:200, unit:"g", note:"Raw potato weight", pantryP:15, stdP:22, indulgeP:30,
      shopping:[{name:"Potatoes",per:200,unit:"g"},{name:"Fresh cream",per:50,unit:"ml"},{name:"Cheddar cheese",per:25,unit:"g"},{name:"Onion",per:20,unit:"g"}],
      recipe:{ coalType:"Indirect medium heat", ingredients:["Potatoes — 200g raw per person, thinly sliced","Fresh cream — 50ml per person","Cheddar — 25g per person (grated)","Onion — 20g per person (sliced)","Butter — 5g per person","Dried thyme — 1g per person","Garlic powder — 1g per person (pinch)","Salt — 3g per person","Black pepper — 1g per person"],
        method:["Layer potatoes with onion, thyme, garlic powder, salt and pepper.","Pour cream over. Top with cheese.","Cover tightly with foil. Indirect heat 45 min.","Uncover last 15 min until golden. Rest 10 min. Enjoy! 😊"],
        tip:"Pantry: use margarine. Indulge: add gruyère." }},
    { id:"sweetpotato", name:"Braai Sweet Potato", emoji:"🍠", tier:"free", perPerson:150, unit:"g", note:"Wrap in foil — 45 min in coals", pantryP:6, stdP:8, indulgeP:10,
      shopping:[{name:"Sweet potatoes",per:150,unit:"g"},{name:"Butter",per:10,unit:"g"},{name:"Cinnamon",per:0.5,unit:"g"}],
      recipe:{ coalType:"Directly in coals or wrapped on grid", ingredients:["Sweet potato — 150g pp (medium ones)","Butter — 10g pp","Cinnamon — 0.5g pp","Salt — 1g pp","Brown sugar — 3g pp (optional)"],
        method:["Wash sweet potatoes. DO NOT peel.","Wrap in TWO layers of foil.","Place directly in medium coals or on grid. 40–50 min.","Test with a skewer — must be completely soft.","Slice open. Fill with butter, cinnamon and pinch of sugar. Enjoy! 😊"],
        tip:"Two layers of foil is non-negotiable — one layer burns through." }},
    { id:"mielies", name:"Mielies (Corn on the Cob)", emoji:"🌽", tier:"free", perPerson:1, unit:"pcs", note:"Soak in water first", pantryP:5, stdP:6, indulgeP:6,
      shopping:[{name:"Corn on the cob",per:1,unit:""},{name:"Butter",per:10,unit:"g"}],
      recipe:{ coalType:"Medium-high heat", ingredients:["Corn on the cob — 1 per person","Butter — 15g per person","Coarse salt — 3g per person"],
        method:["Leave inner husks on. Soak in water 10 min.","Medium-high coals. Turn every few minutes.","15–20 min until husks charred.","Remove husks. Slather in butter and salt. Enjoy! 😊"],
        tip:"The slight char is what makes braai mielies special." }},
    { id:"braaipie", name:"Braai Pie (Spinach, Bacon and Feta)", emoji:"🥧", tier:"free", perPerson:1, unit:"slice", note:"Rooster essential — gentle fire always", pantryP:10, stdP:14, indulgeP:18,
      shopping:[{name:"Puff pastry",per:0.1,unit:"roll"},{name:"Spinach",per:30,unit:"g"},{name:"Feta cheese",per:20,unit:"g"},{name:"Mozzarella",per:15,unit:"g"},{name:"Bacon",per:20,unit:"g"}],
      recipe:{ coalType:"VERY gentle coals — patience is everything", ingredients:["Puff pastry — 90g per person","Fresh spinach — 31g per person","Streaky bacon — 25g per person (diced)","Feta — 25g per person (crumbled)","Mozzarella — 19g per person (grated)","Fresh cream — 13ml per person","Eggs — 2 large (for 8)","Sunflower oil — 2ml per person (for greasing)","Salt — 0.4g per person","Black pepper — 0.3g per person"],
        method:["Fry bacon until crispy. Set aside.","In same pan, wilt spinach until all moisture is gone — squeeze out completely.","Return bacon. Add cream and one beaten egg. Stir 1 min. Season. Cool completely.","Roll out first pastry slightly larger than original. Lay inside the greased rooster.","Pile filling in centre leaving a clear 2cm border.","Crumble feta over filling. Top with mozzarella.","Roll out second pastry slightly larger than the first — must cover the heaped filling.","Mix remaining egg with splash of milk. Brush the 2cm border of bottom pastry.","Lay second pastry over. Press edges firmly with a fork to seal properly.","Brush entire top with egg wash.","Clip the rooster closed — do NOT press too hard or pie breaks through.","Very gentle coals. Turn only 3–4 times total in 15–20 min.","The gentler the fire, the less turning needed — the less risk of losing filling.","Enjoy! 😊"],
        tip:"The secret: GENTLE fire, well-sealed edges and patience. The second pastry must be slightly bigger to cover the heaped filling." }},

  ]},
  { id:"salads", label:"🥗 Salads", items:[
    { id:"coleslaw", name:"Coleslaw", emoji:"🥗", tier:"free", perPerson:80, unit:"g", note:"Finished salad", pantryP:8, stdP:11, indulgeP:15,
      shopping:[{name:"White cabbage",per:50,unit:"g"},{name:"Carrot",per:15,unit:"g"},{name:"Mayonnaise",per:20,unit:"g"},{name:"White vinegar",per:5,unit:"ml"}],
      recipe:{ coalType:"No fire needed — make ahead", ingredients:["White cabbage — 50g per person, finely shredded","Carrot — 15g per person, grated","Mayonnaise — 20g per person","White vinegar — 5ml per person","Sugar — 3g per person","Salt — 2g per person","Black pepper — 1g per person"],
        method:["Shred cabbage and grate carrot.","Mix mayo, vinegar, sugar and seasoning.","Toss with vegetables. Refrigerate 30 min min.","Gets better overnight. Enjoy! 😊"],
        tip:"Make the night before for the best braai coleslaw." }},
    { id:"potatosalad", name:"Potato Salad", emoji:"🥗", tier:"free", perPerson:100, unit:"g", note:"Finished salad", pantryP:10, stdP:14, indulgeP:18,
      shopping:[{name:"Potatoes",per:100,unit:"g"},{name:"Mayonnaise",per:25,unit:"g"},{name:"Onion",per:10,unit:"g"},{name:"Eggs",per:0.3,unit:""}],
      recipe:{ coalType:"Stovetop — make ahead", ingredients:["Waxy potatoes — 100g per person","Mayonnaise — 25g per person","Spring onion — 10g per person (sliced)","Hard-boiled eggs — 1 per 3 people","Dijon mustard — 3g per person","White vinegar — 5ml per person","Salt — 2g per person","Black pepper — 1g per person"],
        method:["Boil potatoes until just tender — 15 min. Cool completely.","Hard-boil eggs 10 min. Cool, peel and chop.","Mix mayo, mustard, vinegar. Toss with potatoes, eggs, onion.","Refrigerate 1+ hour. Enjoy! 😊"],
        tip:"Always start with cold potatoes — warm potatoes go gluey." }},
    { id:"threebeans", name:"Three Bean Salad", emoji:"🥙", tier:"free", perPerson:60, unit:"g", note:"Make the day before", pantryP:6, stdP:8, indulgeP:8,
      shopping:[{name:"Mixed bean salad (tin)",per:0.2,unit:"tin"},{name:"White vinegar",per:5,unit:"ml"},{name:"Onion",per:10,unit:"g"},{name:"Sugar",per:2,unit:"g"}],
      recipe:{ coalType:"No fire needed", ingredients:["Mixed bean salad (tinned, drained) — 0.2 tin per person (60g drained)","Red onion — 10g per person (finely diced)","White vinegar — 5ml per person","Sugar — 2g per person","Salt — 1g per person","Black pepper — 1g per person"],
        method:["Drain and rinse beans. Mix vinegar, sugar and seasoning.","Toss beans with onion and dressing.","Refrigerate overnight — must be made day before. Enjoy! 😊"],
        tip:"Must be made day before — vinegar needs time to soak in." }},
    { id:"greensalad", name:"Garden Green Salad", emoji:"🥬", tier:"free", perPerson:60, unit:"g", note:"Lettuce, cucumber, tomato, green pepper", pantryP:5, stdP:7, indulgeP:10,
      shopping:[{name:"Lettuce",per:30,unit:"g"},{name:"Cucumber",per:15,unit:"g"},{name:"Tomato",per:20,unit:"g"},{name:"Green pepper",per:10,unit:"g"},{name:"Salad dressing",per:10,unit:"ml"}],
      recipe:{ coalType:"No fire needed", ingredients:["Lettuce — 30g per person (torn)","Cucumber — 15g per person (sliced)","Tomato — 20g per person (quartered)","Green pepper — 10g per person (sliced)","Salad dressing — 10ml per person"],
        method:["Wash and dry all vegetables well.","Combine in large bowl.","Dress JUST before serving. Enjoy! 😊"],
        tip:"Dress at the very last minute — never before." }},
    { id:"carrotpineapple", name:"Carrot and Pineapple Salad", emoji:"🥕", tier:"free", perPerson:70, unit:"g", note:"SA classic", pantryP:5, stdP:7, indulgeP:8,
      shopping:[{name:"Carrots",per:40,unit:"g"},{name:"Tinned pineapple crushed (drained)",per:0.1,unit:"tin"},{name:"Mayonnaise",per:15,unit:"g"},{name:"Sugar",per:2,unit:"g"}],
      recipe:{ coalType:"No fire needed", ingredients:["Carrots — 40g per person, finely grated","Tinned crushed pineapple — 20g per person (well drained)","Mayonnaise — 15g per person","Sugar — 2g per person","Salt — 1g per person"],
        method:["Grate carrots finely. Drain pineapple very well.","Mix carrot, pineapple, mayo, sugar and salt.","Refrigerate at least 1 hour. Enjoy! 😊"],
        tip:"Drain pineapple very well or the salad goes soggy." }},
    { id:"greekbraai", name:"Greek Salad", emoji:"🫒", tier:"free", perPerson:90, unit:"g", note:"No vinegar — olive oil only", pantryP:8, stdP:12, indulgeP:16,
      shopping:[{name:"Rosa tomatoes",per:30,unit:"g"},{name:"Cucumber",per:20,unit:"g"},{name:"Kalamata olives",per:15,unit:"g"},{name:"Feta cheese",per:20,unit:"g"},{name:"Olive oil",per:5,unit:"ml"}],
      recipe:{ coalType:"No fire needed", ingredients:["Rosa tomatoes — 30g pp (halved)","Cucumber — 20g pp (chunky)","Kalamata olives — 15g pp","Feta — 20g pp","Red onion — 10g pp (thin rings)","Olive oil — 5ml pp","Dried oregano — 0.5g pp","Salt and black pepper"],
        method:["Combine tomatoes, cucumber, olives and onion.","Drizzle olive oil. Season with oregano, salt and pepper.","Top with feta — never mix it in.","Serve immediately. Enjoy! 😊"],
        tip:"Authentic Greek salad never uses vinegar — olive oil only. Feta on top, not tossed in." }},
    { id:"slaphakskeentjies", name:"Slaphakskeentjies", emoji:"🧅", tier:"free", perPerson:80, unit:"g", note:"Sweet & sour baby onions — SA classic", pantryP:6, stdP:8, indulgeP:8,
      shopping:[{name:"Baby pickling onions",per:80,unit:"g"},{name:"White vinegar",per:10,unit:"ml"},{name:"Sugar",per:8,unit:"g"},{name:"Turmeric",per:0.5,unit:"g"},{name:"Eggs",per:0.25,unit:""}],
      recipe:{ coalType:"Stovetop — make ahead", ingredients:["Baby pickling onions — 80g pp (peeled, whole)","White vinegar — 10ml pp","Sugar — 8g pp","Turmeric — 0.5g pp","Cornflour — 1g pp","Eggs — 1 per 4 people (beaten)","Salt — 1g pp"],
        method:["Boil onions 15 min until just tender. Drain.","Mix vinegar, sugar, turmeric, cornflour and beaten egg in saucepan.","Heat gently stirring constantly until thick and glossy.","Pour over onions. Toss. Cool. Refrigerate overnight. Enjoy! 😊"],
        tip:"The sweet-sour-turmeric sauce is the signature. Always made the day before. A South African braai institution." }},
    { id:"biltongsalad", name:"Biltong & Blue Cheese Salad", emoji:"🧀", tier:"plus", perPerson:80, unit:"g", note:"SA showstopper salad", pantryP:18, stdP:25, indulgeP:32,
      shopping:[{name:"Rocket and spinach leaves",per:40,unit:"g"},{name:"Sliced biltong",per:20,unit:"g"},{name:"Blue cheese",per:15,unit:"g"},{name:"Walnuts",per:10,unit:"g"},{name:"Balsamic glaze",per:5,unit:"ml"}],
      recipe:{ coalType:"No fire needed", ingredients:["Rocket and spinach mix — 40g pp","Sliced biltong — 20g pp","Blue cheese — 15g pp (crumbled)","Toasted walnuts — 10g pp","Cherry tomatoes — 15g pp","Balsamic glaze — 5ml pp","Olive oil — 5ml pp"],
        method:["Arrange leaves on platter.","Scatter tomatoes, walnuts and biltong.","Crumble blue cheese on top.","Drizzle balsamic glaze and olive oil just before serving. Enjoy! 😊"],
        tip:"The combination of biltong, blue cheese and balsamic is uniquely South African. Don't dress too early." }},
    { id:"roastedbeetroot", name:"Roasted Beetroot & Feta Salad", emoji:"🫐", tier:"plus", perPerson:100, unit:"g", note:"Roast beets in foil on the braai", pantryP:10, stdP:16, indulgeP:22,
      shopping:[{name:"Raw beetroot",per:80,unit:"g"},{name:"Feta cheese",per:25,unit:"g"},{name:"Baby spinach",per:20,unit:"g"},{name:"Walnuts",per:10,unit:"g"},{name:"Balsamic vinegar",per:5,unit:"ml"},{name:"Olive oil",per:8,unit:"ml"}],
      recipe:{ coalType:"Indirect heat — foil wrapped", ingredients:["Raw beetroot — 80g pp (whole, unpeeled)","Feta — 25g pp (crumbled)","Baby spinach — 20g pp","Toasted walnuts — 10g pp","Balsamic vinegar — 5ml pp","Olive oil — 8ml pp","Honey — 2ml pp"],
        method:["Wrap whole beetroot tightly in foil.","Place on braai indirect heat 45–60 min until skewer-tender.","Cool. Peel (skin slips off). Slice into wedges.","Arrange spinach, top with beetroot, feta and walnuts.","Drizzle balsamic, olive oil and honey. Enjoy! 😊"],
        tip:"Never boil beetroot — roasting on the braai concentrates the sweetness." }},
    { id:"pestopastasalad", name:"Basil Pesto Pasta Salad", emoji:"🍝", tier:"plus", perPerson:100, unit:"g", note:"Toss with pesto while still warm", pantryP:10, stdP:15, indulgeP:20,
      shopping:[{name:"Pasta (penne or fusilli)",per:60,unit:"g"},{name:"Basil pesto",photoName:"Basil Pesto",per:15,unit:"g"},{name:"Rosa tomatoes",per:20,unit:"g"},{name:"Parmesan",per:8,unit:"g"},{name:"Olive oil",per:5,unit:"ml"}],
      recipe:{ coalType:"Stovetop — make ahead", ingredients:["Pasta — 60g dry pp","Basil pesto — 15g pp","Rosa tomatoes — 20g pp (halved)","Parmesan — 8g pp (shaved)","Olive oil — 5ml pp"],
        method:["Basil pesto — make your own (recipe linked above) or use a good shop-bought jar.","Cook pasta al dente. Drain — do NOT rinse.","Toss immediately while warm with the pesto.","Add tomatoes, olive oil. Season. Cool.","Top with parmesan before serving. Enjoy! 😊"],
        tip:"Toss with pesto while still hot — cold pasta doesn't absorb flavour." }},

    { id:"thousandislandbraai", name:"Thousand Island Dressing", emoji:"🥗", tier:"free", perPerson:20, unit:"ml", note:"SA braai salad classic", pantryP:3, stdP:4, indulgeP:4,
      shopping:[{name:"Mayonnaise",per:12,unit:"ml"},{name:"Tomato sauce",per:5,unit:"ml"},{name:"Sweet relish",per:3,unit:"g"}],
      recipe:{ coalType:"No cooking needed", ingredients:["Mayonnaise — 12ml pp","Tomato sauce (ketchup) — 5ml pp","Sweet relish or finely diced gherkin — 3g pp","Lemon juice — 1ml pp","Salt and pepper"],
        method:["Mix all ingredients together.","Taste and adjust seasoning.","Refrigerate until serving. Enjoy! 😊"],
        tip:"Make the day before for best flavour." }},
    { id:"roquefortbraai", name:"Roquefort Blue Cheese Dressing", emoji:"🧀", tier:"plus", perPerson:20, unit:"ml", note:"Pairs with biltong salad", pantryP:5, stdP:7, indulgeP:8,
      shopping:[{name:"Blue cheese",per:8,unit:"g"},{name:"Sour cream",per:8,unit:"ml"},{name:"Mayonnaise",per:5,unit:"ml"},{name:"Lemon juice",per:2,unit:"ml"}],
      recipe:{ coalType:"No cooking needed", ingredients:["Blue cheese — 8g pp (crumbled)","Sour cream — 8ml pp","Mayonnaise — 5ml pp","Lemon juice — 2ml pp","Salt and pepper"],
        method:["Crumble blue cheese. Mix with sour cream and mayo.","Add lemon juice. Season lightly (cheese is salty).","Refrigerate 30 min minimum. Enjoy! 😊"],
        tip:"Use real Roquefort or a local blue cheese like Dalewood." }},
    { id:"frenchvinaigrettebraai", name:"Classic French Vinaigrette", emoji:"🫙", tier:"free", perPerson:15, unit:"ml", note:"Shake to combine", pantryP:2, stdP:3, indulgeP:3,
      shopping:[{name:"Olive oil",per:10,unit:"ml"},{name:"Red wine vinegar",per:5,unit:"ml"},{name:"Dijon mustard",photoName:"Dijon Mustard",per:1,unit:"g"}],
      recipe:{ coalType:"No cooking needed", ingredients:["Olive oil — 10ml pp","Red wine vinegar — 5ml pp","Dijon mustard — 1g pp","Garlic — 0.5g pp (crushed)","Honey — 0.5ml pp","Salt and black pepper"],
        method:["Put all ingredients in a jar. Seal and shake vigorously.","Taste and adjust acid/oil balance.","Dress salad JUST before serving. Enjoy! 😊"],
        tip:"3 parts oil to 1 part acid — the ratio that never fails." }},
    { id:"greekdressingbraai", name:"Greek Salad Dressing (Ladolemono)", emoji:"🫒", tier:"free", perPerson:15, unit:"ml", note:"Olive oil + lemon — the authentic Greek way", pantryP:2, stdP:3, indulgeP:3,
      shopping:[{name:"Olive oil",per:10,unit:"ml"},{name:"Lemon juice",per:5,unit:"ml"},{name:"Dried oregano",per:0.3,unit:"g"}],
      recipe:{ coalType:"No cooking needed", ingredients:["Extra-virgin olive oil — 10ml pp","Fresh lemon juice — 5ml pp","Dried oregano — 0.3g pp","Salt and black pepper"],
        method:["Whisk or shake oil and lemon together.","Add oregano and seasoning.","Pour over salad just before serving. Enjoy! 😊"],
        tip:"Authentic Greek salad uses ONLY olive oil and lemon — never vinegar." }},

    { id:"mangocabbageslaw", name:"Mango Purple Cabbage Slaw", emoji:"🥭", tier:"free", perPerson:110, unit:"g", note:"Vibrant — make 1 hour ahead", pantryP:8, stdP:12, indulgeP:16,
      shopping:[{name:"Purple cabbage",per:80,unit:"g"},{name:"Mango",per:50,unit:"g"},{name:"Carrot",per:30,unit:"g"},{name:"Lime juice",per:10,unit:"ml"},{name:"Sesame oil",per:5,unit:"ml"},{name:"Fresh ginger",per:2,unit:"g"},{name:"Fresh cilantro",per:5,unit:"g"}],
      recipe:{ coalType:"No fire needed", ingredients:["Purple cabbage — 80g pp (thinly shredded)","Mango — 50g pp (diced)","Carrot — 30g pp (grated)","Lime juice — 10ml pp","Sesame oil — 5ml pp","Fresh ginger — 2g pp (grated)","Fresh cilantro — 5g pp (chopped)","Sea salt — tiny pinch"],
        method:["Shred cabbage and grate carrot.","Dice mango into small uniform cubes.","Whisk lime juice, sesame oil, ginger and salt.","Combine cabbage, mango and carrot. Pour dressing over.","Fold in cilantro just before serving. Rest 10 min."],
        tip:"For best crunch, toss dressing in right before eating. Store dressing and veg separately if prepping ahead." }},

  ]},
  { id:"relishes", label:"🫑 Relishes and Sauces", items:[
    { id:"sheba", name:"Sheba Sauce (Tomato and Onion)", emoji:"🍅", tier:"free", perPerson:60, unit:"ml", note:"Essential with phutu pap", pantryP:4, stdP:6, indulgeP:6,
      shopping:[{name:"Onion",per:20,unit:"g"},{name:"Tomato",per:40,unit:"g"},{name:"Tomato paste",per:5,unit:"g"},{name:"Oil",per:3,unit:"ml"}],
      recipe:{ coalType:"Any heat — pot to the side", ingredients:["Onions — 20g per person, finely diced","Ripe tomatoes — 40g per person, chopped","Tomato paste — 5g per person","Sunflower oil — 5ml per person","Sugar — 2g per person","Salt — 2g per person","Black pepper — 1g per person"],
        method:["Heat oil. Fry onion golden — 5 min.","Add tomatoes and tomato paste.","Season with salt, pepper and pinch sugar.","Simmer 15–20 min until thick.","Serve hot alongside phutu pap. Enjoy! 😊"],
        tip:"Always served with phutu pap. The soul of Shisanyama." }},
    { id:"chakalaka", name:"Chakalaka", emoji:"🫑", tier:"free", perPerson:60, unit:"g", note:"Spicy vegetable relish", pantryP:6, stdP:8, indulgeP:8,
      shopping:[{name:"Onion",per:15,unit:"g"},{name:"Carrot",per:15,unit:"g"},{name:"Green pepper",per:10,unit:"g"},{name:"Baked beans (tin)",per:0.15,unit:"tin"},{name:"Chopped tomatoes (tin)",per:0.15,unit:"tin"}],
      recipe:{ coalType:"Any heat — make ahead", ingredients:["Onion — 15g per person (finely diced)","Garlic — 3g per person (crushed)","Curry powder — 3g per person","Turmeric — 1g per person","Carrot — 15g per person (grated)","Green peppers — 10g per person (diced)","Red chilli — 2g per person (finely chopped)","Tinned baked beans — 0.15 tin per person","Tinned chopped tomatoes — 0.15 tin per person","Sunflower oil — 5ml per person"],
        method:["Heat oil. Fry onion 5 min. Add garlic, curry, turmeric 1 min.","Add carrot, peppers, chilli 5 min.","Add tomatoes 10 min. Add beans. Season. Enjoy! 😊"],
        tip:"Make day before — tastes even better the next day." }},
    { id:"secretbaste", name:"Secret Basting Sauce", emoji:"🫙", tier:"free", perPerson:30, unit:"ml", note:"Brush on LAST 5–8 min only!", pantryP:3, stdP:4, indulgeP:5,
      shopping:[{name:"Tomato sauce",per:15,unit:"ml"},{name:"Chutney",per:10,unit:"ml"},{name:"Worcestershire sauce",per:3,unit:"ml"},{name:"Soy sauce",per:3,unit:"ml"}],
      recipe:{ coalType:"No cooking needed", ingredients:["Tomato sauce (ketchup) — 30ml per person","Chutney — 15ml per person","Soy sauce — 4ml per person","Worcestershire sauce — 4ml per person","Brown sugar — 2g per person","Smoked paprika — 0.6g per person","Lemon juice — 2ml per person"],
        method:["Combine all. Stir well. Taste and adjust.","⚠️ GOLDEN RULE: Apply ONLY in the LAST 5–8 minutes!","Sugar WILL burn if applied too early.","Brush on for a gorgeous sticky caramelised glaze. Enjoy! 😊"],
        tip:"Chutney is non-negotiable. Apply ONLY last 5–8 min." }},
    { id:"peppersauce", name:"Creamy Pepper Sauce", emoji:"🫙", tier:"plus", perPerson:60, unit:"ml", note:"Classic steakhouse sauce", pantryP:8, stdP:12, indulgeP:16,
      shopping:[{name:"Butter",per:10,unit:"g"},{name:"Onion",per:15,unit:"g"},{name:"Brandy",per:5,unit:"ml"},{name:"Fresh cream",per:40,unit:"ml"},{name:"Cracked black peppercorns",per:2,unit:"g"},{name:"Beef stock",photoName:"Beef Stock",per:15,unit:"ml"}],
      recipe:{ coalType:"Stovetop — make just before serving", ingredients:["Butter — 10g pp","Onion — 15g pp (finely diced)","Garlic — 2g pp (crushed)","Brandy — 5ml pp","Beef stock — 15ml pp","Fresh cream — 40ml pp","Cracked black peppercorns — 2g pp"],
        method:["Melt butter. Fry onion and garlic until soft — 5 min.","Add cracked peppercorns. Toast 30 seconds.","Add brandy — it will flame briefly. Reduce 1 min.","Add stock. Reduce by half. Add cream. Simmer 3–4 min.","Season. Serve immediately. Enjoy! 😊"],
        tip:"The brandy is non-negotiable — it lifts the whole sauce. Don't let cream boil hard or it splits." }},
    { id:"mushroomsauce", name:"Creamy Mushroom Sauce", emoji:"🍄", tier:"plus", perPerson:60, unit:"ml", note:"Goes with everything", pantryP:8, stdP:11, indulgeP:15,
      shopping:[{name:"Button mushrooms",per:50,unit:"g"},{name:"Butter",per:8,unit:"g"},{name:"Garlic",per:2,unit:"g"},{name:"Fresh cream",per:40,unit:"ml"},{name:"Fresh thyme",per:0.5,unit:"g"}],
      recipe:{ coalType:"Stovetop — make just before serving", ingredients:["Button mushrooms — 50g pp (sliced)","Butter — 8g pp","Garlic — 2g pp (crushed)","Fresh thyme — 0.5g pp","Fresh cream — 40ml pp","Stock — 10ml pp"],
        method:["Melt butter over HIGH heat. Add mushrooms in a SINGLE layer — don't crowd.","Do NOT stir for 2 min — let them brown. Then toss.","Add garlic and thyme. Cook 1 min.","Add stock. Reduce 1 min. Add cream. Simmer until thick and glossy — 3 min.","Season well. Enjoy! 😊"],
        tip:"High heat and no crowding — mushrooms must brown, not steam. A crowded pan gives grey soggy mushrooms." }},
    { id:"garlicbutter", name:"Herb Garlic Butter", emoji:"🧈", tier:"free", perPerson:15, unit:"g", note:"Melts on hot meat — magic", pantryP:3, stdP:4, indulgeP:5,
      shopping:[{name:"Butter",per:15,unit:"g"},{name:"Garlic",per:2,unit:"g"},{name:"Fresh parsley",per:2,unit:"g"},{name:"Lemon juice",per:2,unit:"ml"}],
      recipe:{ coalType:"No cooking needed — make ahead", ingredients:["Butter — 15g pp (softened)","Garlic — 2g pp (very finely crushed)","Fresh parsley — 2g pp (finely chopped)","Lemon juice — 2ml pp","Salt — 0.5g pp"],
        method:["Soften butter to room temperature.","Mix in garlic, parsley, lemon and seasoning.","Roll in cling wrap to form a log. Refrigerate until firm.","Slice coins directly onto hot meat just off the braai. Enjoy! 😊"],
        tip:"Make the day before. The coin of butter melting on hot rested meat is one of the great braai moments." }},
    { id:"toumbraai", name:"Toum (Garlic Cream)", emoji:"🧄", tier:"plus", perPerson:20, unit:"ml", note:"Lebanese garlic sauce — incredible with chicken", pantryP:4, stdP:6, indulgeP:6,
      shopping:[{name:"Garlic",per:5,unit:"g"},{name:"Sunflower oil",per:10,unit:"ml"},{name:"Lemon juice",per:3,unit:"ml"},{name:"Ice water",per:3,unit:"ml"}],
      recipe:{ coalType:"No cooking — food processor", ingredients:["Garlic — 5g pp (peeled, centre germ removed)","Sunflower oil — 10ml pp (or macadamia oil — lighter flavour)","Lemon juice — 3ml pp","Ice water — 3ml pp","Salt — 0.5g pp"],
        method:["Remove green centre germ from garlic cloves — this prevents bitterness.","Blend garlic with salt until fine paste.","With blender running, add oil ONE DROP AT A TIME at first.","Alternate oil and lemon juice/ice water very slowly.","Keep going until thick, white and fluffy — like whipped cream.","Refrigerate. Keeps 1 month. Enjoy! 😊"],
        tip:"The one drop at a time rule is non-negotiable. Rush it and it splits into oily liquid. Macadamia oil gives a lighter, less bitter flavour than sunflower." }},
    { id:"cheesesaucebraai", name:"Cheese Sauce (Mornay)", emoji:"🧀", tier:"plus", perPerson:60, unit:"ml", note:"For steaks and veg — silky and rich", pantryP:8, stdP:12, indulgeP:16,
      shopping:[{name:"Butter",per:8,unit:"g"},{name:"Flour",per:5,unit:"g"},{name:"Milk",per:60,unit:"ml"},{name:"Cheddar cheese",per:20,unit:"g"}],
      recipe:{ coalType:"Stovetop — make just before serving", ingredients:["Butter — 8g pp","Plain flour — 5g pp","Full cream milk — 60ml pp (warm)","Cheddar — 20g pp (grated)","Dijon mustard — 2g pp","Salt and white pepper"],
        method:["Melt butter. Add flour. Stir 1 min — cook out the rawness.","Add warm milk gradually whisking constantly.","Simmer 3 min until thick and smooth.","Remove from heat. Add cheese and mustard. Stir until melted. Enjoy! 😊"],
        tip:"Add cheese OFF the heat — too much heat makes it grainy." }},
    { id:"monkeyglandbraai", name:"Monkey Gland Sauce", emoji:"🫙", tier:"free", perPerson:30, unit:"ml", note:"Classic SA steakhouse sauce", pantryP:4, stdP:6, indulgeP:6,
      shopping:[{name:"Tomato sauce",per:15,unit:"ml"},{name:"Chutney",per:10,unit:"ml"},{name:"Onion",per:10,unit:"g"},{name:"Worcestershire sauce",per:3,unit:"ml"}],
      recipe:{ coalType:"Stovetop — 10 min", ingredients:["Onion — 10g pp (finely diced)","Garlic — 2g pp","Tomato sauce — 15ml pp","Chutney — 10ml pp","Worcestershire sauce — 3ml pp","Brown sugar — 2g pp","Vinegar — 2ml pp"],
        method:["Fry onion and garlic 5 min until soft.","Add all remaining ingredients.","Simmer 5 min stirring. Season. Enjoy! 😊"],
        tip:"The SA steakhouse classic. Goes with any grilled meat." }},
        { id:"periperibraai", name:"Peri-Peri Sauce", emoji:"🌶️", tier:"plus", perPerson:25, unit:"ml", note:"SA classic — adjustable heat", pantryP:3, stdP:5, indulgeP:5,
      shopping:[{name:"Bird's eye chillies",per:3,unit:"g"},{name:"Garlic",per:3,unit:"g"},{name:"Lemon juice",per:8,unit:"ml"},{name:"Olive oil",per:8,unit:"ml"},{name:"Smoked paprika",per:1,unit:"g"}],
      recipe:{ coalType:"No cooking needed — blend and rest", ingredients:["Bird's eye chillies — 3g pp (adjust to taste)","Garlic — 3g pp","Lemon juice — 8ml pp","Olive oil — 8ml pp","Smoked paprika — 1g pp","Salt — 1g pp"],
        method:["Blend all ingredients until smooth.","Taste and adjust chilli and salt.","Rest 30 min minimum before serving. Enjoy! 😊"],
        tip:"Made from scratch it's incomparably better than bottled. The resting time is non-negotiable — raw garlic and chilli need time to mellow." }},

  ]},
  { id:"extras", label:"🍞 Breads", items:[
    { id:"braaibroodjies", name:"Braaibroodjies", emoji:"🥪", tier:"free", perPerson:2, unit:"pcs", note:"Chutney essential!", pantryP:8, stdP:11, indulgeP:15,
      shopping:[{name:"White bread",per:2,unit:"slices"},{name:"Butter",per:15,unit:"g"},{name:"Cheddar cheese",per:20,unit:"g"},{name:"Tomato",per:30,unit:"g"},{name:"Onion",per:15,unit:"g"},{name:"Chutney",per:10,unit:"ml"}],
      recipe:{ coalType:"LOW heat — hold rooster HIGH above coals", ingredients:["White bread — 2 slices per person","Butter — 15g per person (for OUTSIDE of bread)","Sharp cheddar — 20g per person (sliced)","Ripe tomato — 30g per person (sliced)","Onion — 15g per person (thin rings)","Chutney — 10ml per person","Salt — 2g per person","Black pepper — 1g per person"],
        method:["Butter the OUTSIDE of both slices.","Inside: smear chutney, layer cheddar, tomato, onion. Season.","Use a folding handheld rooster.","Hold HIGH above coals — low and slow is the secret.","Turn every minute. 10–12 min until golden. Enjoy! 😊"],
        tip:"If burning, you're too close to the coals. Low heat and patience." }},
    { id:"garlicbread", name:"Cheesy Garlic Bread", emoji:"🥖", tier:"free", perPerson:2, unit:"slices", note:"2 slices per person", pantryP:6, stdP:9, indulgeP:13,
      shopping:[{name:"French loaf",per:0.15,unit:""},{name:"Butter",per:20,unit:"g"},{name:"Garlic",per:3,unit:"g"},{name:"Mozzarella",per:20,unit:"g"}],
      recipe:{ coalType:"Side of braai — medium indirect", ingredients:["French loaf — 1 per 6 people (share)","Butter — 17g per person (softened)","Garlic — 3.5g per person (crushed)","Fresh parsley — 2g per person (chopped)","Mozzarella — 25g per person (grated)","Salt — 0.5g per person"],
        method:["Slice loaf at 2cm intervals — don't cut all the way through.","Stuff garlic butter and mozzarella into each cut.","Wrap tightly in foil.","Side of grid — not over hot coals. 15 min, turn once.","Open foil last 3 min to crisp. Enjoy! 😊"],
        tip:"Side of braai is perfect — enough heat without burning." }},
    { id:"stokbrood", name:"Stokbrood", emoji:"🍡", tier:"plus", perPerson:1, unit:"stick", note:"Kids love it!", pantryP:4, stdP:6, indulgeP:6,
      shopping:[{name:"Bread flour",per:80,unit:"g"},{name:"Instant yeast",per:1,unit:"g"},{name:"Butter",per:10,unit:"g"},{name:"Jam",per:15,unit:"g"}],
      recipe:{ coalType:"Medium heat — hold HIGH above coals", ingredients:[
        "🍞 DOUGH (makes 6 sticks — scale up as needed):",
        "Bread flour — 80g per person",
        "Instant yeast — 2g per person",
        "Salt — 2g per person",
        "Sugar — 2g per person",
        "Warm water — 50ml per person",
        "Olive oil — 5ml per person",
        "—",
        "Clean green sticks — 1cm thick, arm's length (1 per person)",
        "Butter — 10g per person (for filling)",
        "Jam — 15g per person (or swap for cheddar — 15g pp)"],
        method:[
          "Mix flour, yeast, salt and sugar. Add oil and warm water. Mix until dough forms.",
          "Knead 8–10 min until smooth and elastic. Cover, rest 1 hour until doubled.",
          "Punch down. Divide into portions — about 80g each (approx 1 handful).",
          "Roll each portion into a long snake, about 2cm thick.",
          "Wrap in a spiral around your clean green stick, pressing firmly so it doesn't unravel.",
          "Hold HIGH over medium coals — NOT in the coals. Rotate slowly and constantly.",
          "10–15 min until golden brown and hollow-sounding when tapped.",
          "Slide off carefully. Fill the hole with butter and jam, or press in grated cheese! Enjoy! 😊"],
        tip:"Shortcut: use store-bought pizza dough (80g per stick). But the homemade dough is 10× better and it's easy! The key is to hold the stick HIGH above the coals — low and slow wins." }},
    { id:"roosterkoek", name:"Braai Bread Rolls", emoji:"🍞", tier:"free", perPerson:1, unit:"roll", note:"Smoky crust — cooked over coals", pantryP:4, stdP:5, indulgeP:6,
      shopping:[{name:"Cake flour",per:125,unit:"g"},{name:"Instant yeast",per:2,unit:"g"},{name:"Sugar",per:5,unit:"g"},{name:"Salt",per:2,unit:"g"},{name:"Butter",per:10,unit:"g"}],
      recipe:{ coalType:"Medium coals — NOT flames", ingredients:["Cake flour — 125g per person","Instant yeast — 2g per person","Sugar — 5g per person","Salt — 2g per person","Lukewarm water — 80ml per person","Butter or oil — 10g per person"],
        method:["Mix flour, yeast, sugar and salt in a bowl.","Add lukewarm water gradually and mix into a soft dough.","Knead 8–10 min until smooth and elastic.","Work in the butter or oil until incorporated.","Cover and rise in a warm place 45–60 min until doubled.","Divide into 1 ball per person, flatten slightly, rest 10–15 min.","Cook on the grid over medium coals 10–15 min, turning often, until browned and hollow-sounding when tapped.","Slice open and serve warm. Enjoy! 😊"],
        tip:"Coals, never flames — that's the smoky crust. Pairs with boerewors, braaied steak, garlic butter or apricot jam. Keeps 2 days; reheat on the grid." }},
    { id:"roosterkoek-garlic-cheese", name:"Roosterkoek with Garlic Butter & Cheese", emoji:"🧄", tier:"free", perPerson:1, unit:"roll", note:"The indulgent one", pantryP:8, stdP:11, indulgeP:14,
      shopping:[{name:"Cake flour",per:125,unit:"g"},{name:"Instant yeast",per:2,unit:"g"},{name:"Sugar",per:5,unit:"g"},{name:"Salt",per:2,unit:"g"},{name:"Butter",per:25,unit:"g"},{name:"Garlic",per:3,unit:"g"},{name:"Cheddar cheese",per:30,unit:"g"},{name:"Parsley",per:2,unit:"g"}],
      recipe:{ coalType:"Medium coals — NOT flames", ingredients:["Roosterkoek dough — 1 portion per person (see Roosterkoek recipe)","Butter — 15g per person (softened)","Garlic — 1 clove per person (crushed)","Cheddar — 30g per person (grated)","Fresh parsley — 2g per person (optional)"],
        method:["Make the roosterkoek as per the basic recipe.","Mix the softened butter with crushed garlic and parsley.","Slice the cooked roosterkoek open.","Spread the garlic butter generously inside.","Add the grated cheese.","Return briefly to the grid to melt the cheese.","Serve immediately. Enjoy! 😊"],
        tip:"A modern braai favourite. Pairs with braaied chicken, tomato relish and salads. Best eaten fresh — reheat wrapped in foil over coals." }},
    { id:"roosterkoek-boerewors", name:"Roosterkoek with Boerewors & Relish", emoji:"🌭", tier:"free", perPerson:1, unit:"roll", note:"The braai 'burger'", pantryP:16, stdP:19, indulgeP:23,
      shopping:[{name:"Cake flour",per:125,unit:"g"},{name:"Instant yeast",per:2,unit:"g"},{name:"Sugar",per:5,unit:"g"},{name:"Salt",per:2,unit:"g"},{name:"Butter",per:10,unit:"g"},{name:"Boerewors",per:120,unit:"g"},{name:"Tomato",per:30,unit:"g"},{name:"Onion",per:15,unit:"g"}],
      recipe:{ coalType:"Medium coals — NOT flames", ingredients:["Roosterkoek — 1 per person (see Roosterkoek recipe)","Boerewors — 120g per person","Tomato & onion relish — 40g per person"],
        method:["Make the roosterkoek as per the base recipe.","Braai the boerewors over medium coals until cooked through.","Slice the roosterkoek open.","Place the wors inside and top with tomato & onion relish.","Serve hot. Enjoy! 😊"],
        tip:"Essentially a South African braai 'burger'. Pairs with potato salad, coleslaw and braai pap. Assemble fresh — store components separately." }},
    { id:"cheese-corn-potbrood", name:"Cheese & Corn Potbrood", emoji:"🥘", tier:"free", perPerson:1, unit:"slice", note:"Baked in a cast-iron pot", pantryP:12, stdP:15, indulgeP:18,
      shopping:[{name:"Cake flour",per:125,unit:"g"},{name:"Baking powder",per:5,unit:"g"},{name:"Salt",per:2,unit:"g"},{name:"Sweetcorn",per:50,unit:"g"},{name:"Cheddar cheese",per:40,unit:"g"},{name:"Milk",per:80,unit:"ml"},{name:"Butter",per:15,unit:"g"}],
      recipe:{ coalType:"Low coals — some on the lid", ingredients:["Cake flour — 125g per person","Baking powder — 5g per person","Salt — 2g per person","Sweetcorn — 50g per person","Cheddar — 40g per person (grated)","Milk — 80ml per person","Butter — 15g per person (melted)"],
        method:["Grease a small pot or potjie lid.","Mix the flour, baking powder and salt.","Stir in the corn and grated cheese.","Stir in the milk and melted butter to a thick batter.","Pour into the pot.","Bake over low coals with some coals on the lid, 30–40 min, until golden and cooked through.","Rest before slicing. Enjoy! 😊"],
        tip:"Traditional campfire pot bread. Pairs with braaied lamb chops, stews and chakalaka. Keeps 2–3 days; reheat in foil over coals." }},
    { id:"braai-flatbread", name:"Braai Flatbreads", emoji:"🫓", tier:"free", perPerson:1, unit:"flatbread", note:"Thin, quick, charred", pantryP:4, stdP:5, indulgeP:6,
      shopping:[{name:"Cake flour",per:100,unit:"g"},{name:"Salt",per:2,unit:"g"},{name:"Olive oil",per:10,unit:"ml"}],
      recipe:{ coalType:"Medium coals — NOT flames", ingredients:["Cake flour — 100g per person","Salt — 2g per person","Olive oil — 10ml per person","Water — 60ml per person"],
        method:["Mix the flour and salt.","Add the oil and water to form a soft dough.","Knead briefly, about 5 min.","Rest 15 min.","Divide into portions and roll thin.","Cook directly on the grid over medium coals.","Flip when bubbles form and char spots appear.","Cook until lightly crisp and cooked through. Enjoy! 😊"],
        tip:"One of the oldest breads — ideal for quick cooking over flames. Pairs with hummus, braaied vegetables and grilled meats. Best fresh; reheat quickly on the grid." }},
  ]},
  { id:"desserts", label:"🍫 Fire Desserts", items:[
    { id:"marshmallowbanana", name:"Baked Marshmallow Banana", emoji:"🍌", tier:"plus", perPerson:1, unit:"pcs", note:"Kids favourite — 10 min on the grid", pantryP:5, stdP:6, indulgeP:6,
      shopping:[{name:"Ripe bananas",per:1,unit:""},{name:"Mini marshmallows",per:15,unit:"g"}],
      recipe:{ coalType:"Medium-low — gentle heat only", ingredients:["Ripe bananas — 1 per person (about 120g each)","Mini marshmallows — 30g per person"],
        method:["Do NOT peel. Cut a deep slit along inside curve.","Press down to open cavity. Fill generously with marshmallows.","Place on grid over medium-low coals. 10 min.","Scoop out with a spoon. Enjoy! 😊"],
        tip:"Use ripe bananas — sweeter and softer." }},
    { id:"grilledpineapple", name:"Grilled Pineapple", emoji:"🍍", tier:"plus", perPerson:2, unit:"slices", note:"Cinnamon sugar — 3 min per side", pantryP:4, stdP:5, indulgeP:5,
      shopping:[{name:"Fresh pineapple",per:0.2,unit:""},{name:"Brown sugar",per:10,unit:"g"},{name:"Cinnamon",per:0,unit:""}],
      recipe:{ coalType:"Medium-high direct heat", ingredients:["Fresh pineapple — 2cm slices, 2 per person (about 200g total)","Brown sugar — 30g per person","Ground cinnamon — 3g per person"],
        method:["Mix brown sugar and cinnamon. Coat pineapple slices.","Medium-high coals. 2–3 min per side until caramelised.","Serve with vanilla ice cream if available. Enjoy! 😊"],
        tip:"Heat concentrates the sweetness beautifully." }},
    { id:"breadbutterpudding", name:"Braai Bread and Butter Pudding", emoji:"🍓", tier:"pro", perPerson:1, unit:"portion", note:"The showstopper!", pantryP:14, stdP:18, indulgeP:22,
      shopping:[{name:"White bread",per:1,unit:"slice"},{name:"Butter",per:17,unit:"g"},{name:"Castor sugar",per:10,unit:"g"},{name:"Eggs",per:0.5,unit:""},{name:"Milk",per:42,unit:"ml"},{name:"Fresh strawberries",per:17,unit:"g"},{name:"Fresh blueberries",per:8,unit:"g"},{name:"Lemon",per:0.17,unit:""}],
      recipe:{ coalType:"Medium indirect heat — 20 to 25 min", ingredients:["White bread — 1 slice per person","Butter (melted) — 17g per person","Castor sugar — 10g per person","Eggs — 1 per 2 people","Full cream milk — 42ml per person","Fresh strawberries — 17g per person (sliced)","Fresh blueberries — 8g per person","Lemon zest — ⅙ lemon per person","Raisins — 8g per person (optional)","900ml foil container (1 per 6 people) + tinfoil"],
        method:["Brush bread with melted butter both sides. Cut into triangles.","Layer in foil container: bread, castor sugar, fruit and lemon zest. Repeat.","Beat milk and eggs. Pour over pudding. Cover tightly with foil.","Bake on grid over medium indirect heat 20–25 min until set. Enjoy! 😊"],
        tip:"Serve straight from the foil container — it looks spectacular." }},
    { id:"braaismores", name:"Braai S'mores", emoji:"🍪", tier:"free", perPerson:2, unit:"pcs", note:"Toasted marshmallows — everyone gets a stick", pantryP:4, stdP:5, indulgeP:6,
      shopping:[{name:"Digestive biscuits",per:2,unit:"pcs"},{name:"Large marshmallows",per:2,unit:"pcs"},{name:"Milk chocolate",per:15,unit:"g"}],
      recipe:{ coalType:"Open flame — toasting over coals", ingredients:["Digestive biscuits — 2 pp","Large marshmallows — 2 pp","Milk chocolate — 15g pp","Long metal skewers — 1 pp"],
        method:["Thread marshmallow onto skewer.","Hold over open flame — rotate slowly for even golden toasting.","Sandwich toasted marshmallow and chocolate between 2 biscuits. Enjoy! 😊"],
        tip:"Buy extra marshmallows — people always want more than they think." }},
    { id:"chocolatefondue", name:"Braai Chocolate Fondue", emoji:"🍫", tier:"plus", perPerson:40, unit:"g", note:"Cast iron pot — everyone dips", pantryP:8, stdP:12, indulgeP:18,
      shopping:[{name:"Dark chocolate (50–70%)",per:30,unit:"g"},{name:"Fresh cream",per:15,unit:"ml"},{name:"Marshmallows for dipping",per:20,unit:"g"},{name:"Strawberries",per:30,unit:"g"}],
      recipe:{ coalType:"Indirect gentle heat — edge of braai", ingredients:["Dark chocolate — 30g pp (broken)","Fresh cream — 15ml pp","Butter — 3g pp","Vanilla essence — 1ml pp","Marshmallows — 20g pp","Strawberries — 30g pp"],
        method:["Place chocolate, cream and butter in small cast iron pot.","Gentle indirect heat — do NOT boil. Stir constantly until smooth.","Add vanilla. Keep warm on side of braai.","Serve with skewers and dippers alongside. Enjoy! 😊"],
        tip:"Keep the pot on the very edge of the braai — too much heat seizes the chocolate." }},

  ]},
];



function lookupPrice(name){
  if(!name) return null;
  const q = name.toLowerCase().trim();
  // Exact match first
  if(PRICE_DB[q] !== undefined) return PRICE_DB[q];
  // Partial match — find best (longest key that appears in query, or query appears in key)
  let best = null, bestLen = 0;
  for(const [key, price] of Object.entries(PRICE_DB)){
    if(q.includes(key) || key.includes(q)){
      if(key.length > bestLen){ best = price; bestLen = key.length; }
    }
  }
  return best;
}

// ── INGREDIENT COST CALCULATOR ───────────────────────────────────────
// Parse an ingredient string like "Olive oil — 15ml per person"
// Returns cost in Rands for `guests` people, or null if unresolvable
function ingredientCost(ingStr, guests){
  if(!ingStr || typeof ingStr !== 'string') return null;
  if(ingStr === '—' || ingStr.startsWith('—')) return null;

  // Extract ingredient name (before the —)
  const namePart = ingStr.split('—')[0].trim();
  const price = lookupPrice(namePart);
  if(!price) return null;

  // Extract quantity and unit
  const qtyMatch = ingStr.match(/(\d+(?:\.\d+)?)\s*(g|ml|kg|L|tbsp|tsp)\s+per\s+p(?:erson|ortion)/i)
    || ingStr.match(/([¼½⅓⅔¾])\s*per\s+p(?:erson|ortion)/i);

  if(!qtyMatch) return null;

  let num, unit;
  const fracMap = {'¼':0.25,'½':0.5,'⅓':0.333,'⅔':0.667,'¾':0.75};
  if(fracMap[qtyMatch[1]]){ num = fracMap[qtyMatch[1]]; unit = 'unit'; }
  else { num = parseFloat(qtyMatch[1]); unit = (qtyMatch[2]||'g').toLowerCase(); }

  // Convert to kg
  let kg;
  if(unit === 'g') kg = (num * guests) / 1000;
  else if(unit === 'ml') kg = (num * guests) / 1000; // treat ml ≈ g for most liquids
  else if(unit === 'kg' || unit === 'l') kg = num * guests;
  else if(unit === 'tbsp') kg = (num * 15 * guests) / 1000;
  else if(unit === 'tsp') kg = (num * 5 * guests) / 1000;
  else if(unit === 'unit') kg = num * guests; // for piece-priced items
  else return null;

  return kg * price;
}

// ── RECIPE TOTAL COST ────────────────────────────────────────────────
// Given a recipe.ingredients array and guest count, return {total, perPerson, matched, total_items}
function calcRecipeCost(ingredients, guests){
  if(!ingredients || !guests) return null;
  let total = 0, matched = 0;
  for(const ing of ingredients){
    const c = ingredientCost(ing, guests);
    if(c != null){ total += c; matched++; }
  }
  if(matched === 0) return null;
  return {
    total: Math.round(total),
    perPerson: Math.round(total / guests),
    matched,
    totalItems: ingredients.filter(i => i && i !== '—' && !i.startsWith('—')).length
  };
}

