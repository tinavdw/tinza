function healthOpenJuice(id){
  const j = FRESH_JUICES.find(x=>x.id===id);
  if(j) set({activeSmoothie:{...j, colour:'#40c060', cat:'freshjuice'}});
}
function healthOpenSmoothie(id){
  const sm = SMOOTHIES.find(x=>x.id===id);
  if(sm) set({activeSmoothie:sm});
}
function healthOpenOats(id){
  const oa = OVERNIGHT_OATS.find(x=>x.id===id);
  if(oa) set({activeOats:oa});
}
function healthOpenMuffin(id){
  const mu = HEALTHY_MUFFINS.find(x=>x.id===id);
  if(mu) set({activeMuffin:mu});
}
function healthOpenRaw(id){
  const rw = RAW_AND_REAL.find(x=>x.id===id);
  if(rw) set({activeRaw:rw});
}
function healthTogglePlan(id, name, emoji, type, kcal, shopping, servings){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  set({healthPlan: inPlan ? plan.filter(x=>x.id!==id) : [...plan, {id,name,emoji,type,kcal,shopping:shopping||[],servings}]});
}

function healthCheckbox(id, type){
  const inPlan = (S.healthPlan||[]).some(x=>x.id===id);
  const bg = inPlan ? '#30c090' : 'transparent';
  const br = inPlan ? '#30c090' : '#1a4035';
  const tick = inPlan ? '&#x2713;' : '';
  return '<div onclick="healthToggleById(\''+id+'\',\''+type+'\',S.servings)" style="width:24px;height:24px;border-radius:6px;background:'+bg+';border:2px solid '+br+';display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;color:#0f0e0c;">'+tick+'</div>';
}

function healthToggleById(id, type, servings){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  if(inPlan){ set({healthPlan:plan.filter(x=>x.id!==id)}); return; }
  let item;
  if(type==='juice') item = FRESH_JUICES.find(x=>x.id===id);
  else if(type==='smoothie') item = SMOOTHIES.find(x=>x.id===id);
  else if(type==='oats') item = OVERNIGHT_OATS.find(x=>x.id===id);
  else if(type==='muffin') item = HEALTHY_MUFFINS.find(x=>x.id===id);
  if(!item) return;
  set({healthPlan:[...plan,{id,name:item.name,emoji:item.emoji,type,kcal:item.kcal,shopping:item.shopping||[],servings}]});
}

function renderHealthList(items, type, openFn, isPro){
  return items.map(function(item){
    if(!tierAllows(item.tier||'free')){
      return '<div onclick="alert(\'Upgrade to Pro to unlock!\')" style="background:#0f0e0c;border:1px solid #1a1808;border-radius:12px;padding:14px;margin-bottom:10px;cursor:pointer;opacity:0.6;">'
        +'<div style="display:flex;align-items:center;gap:12px;">'
        +'<div style="width:44px;height:44px;border-radius:10px;background:#1a1808;display:flex;align-items:center;justify-content:center;font-size:24px;">&#x1F512;</div>'
        +'<div style="flex:1;"><div style="font-size:15px;color:#4a3020;">'+item.name+'</div></div>'
        +'</div></div>';
    }
    var inPlan = (S.healthPlan||[]).some(function(x){return x.id===item.id;});
    var bg = inPlan ? '#0a2018' : '#0f1a18';
    var br = inPlan ? '#30c090' : '#1a4035';
    var cb = isPro
      ? '<div onclick="healthToggleById(\''+item.id+'\',\''+type+'\',S.servings)" style="width:24px;height:24px;border-radius:6px;background:'+(inPlan?'#30c090':'transparent')+';border:2px solid '+(inPlan?'#30c090':'#1a4035')+';display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;color:#0f0e0c;">'+(inPlan?'&#x2713;':'')+'</div>'
      : '';
    var bdg = item.badges.map(function(b){
      return '<span style="background:#0a2018;border:1px solid #1a4030;border-radius:10px;font-size:9px;color:#30a070;padding:2px 6px;margin:1px;display:inline-block;">'+b+'</span>';
    }).join('');
    var info = type==='juice' ? '~'+(item.kcal*S.servings)+' kcal &middot; '+(S.servings*300)+'ml &middot; ~R'+(item.costPP*S.servings)+'/pp'
      : type==='smoothie' ? '~'+(item.kcal*S.servings)+' kcal &middot; '+(S.servings*300)+'ml'+(item.costPP?' &middot; ~R'+(item.costPP*S.servings)+'/pp':'')
      : type==='oats' ? '~'+(item.kcal*S.servings)+' kcal &middot; '+S.servings+' serving'+(S.servings>1?'s':'')+(item.costPP?' &middot; ~R'+(item.costPP*S.servings)+'/pp':'')
      : type==='muffin' ? '~'+item.kcal+' kcal each &middot; '+(S.servings*(item.makes||12))+' muffins'+(item.costPP?' &middot; ~R'+item.costPP+' each':'')
      : '~'+(item.kcal*S.servings)+' kcal &middot; '+S.servings+' serving'+(S.servings>1?'s':'')+(item.costPP?' &middot; ~R'+(item.costPP*S.servings)+'/pp':'');
    var iconBg = type==='juice' ? '#0a2818' : '#1a3020';
    var iconBr = type==='juice' ? '#1a5030' : '#2a5040';
    var iconStyle = type==='smoothie' ? 'background:'+item.colour+'22;border:1px solid '+item.colour+'44;' : 'background:'+iconBg+';border:1px solid '+iconBr+';';
    return '<div style="background:'+bg+';border:1px solid '+br+';border-radius:12px;padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:10px;">'
      + cb
      + '<div onclick="'+openFn+'(\''+item.id+'\')" style="display:flex;align-items:center;gap:12px;flex:1;cursor:pointer;">'
      + '<div style="width:44px;height:44px;border-radius:10px;'+iconStyle+'display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">'+item.emoji+'</div>'
      + '<div style="flex:1;">'
      + '<div style="font-size:15px;color:#e0d4b8;margin-bottom:4px;">'+item.name+'</div>'
      + '<div style="font-size:11px;color:#30c090;">'+info+'</div>'
      + '<div style="margin-top:4px;">'+bdg+'</div>'
      + '</div>'
      + '<span style="color:#30c090;font-size:18px;">&#x2192;</span>'
      + '</div></div>';
  }).join('');
}

function renderHealthMyPlan(isPro){
  const plan = S.healthPlan||[];
  const checked = S.checkedHealthItems||{};
  if(plan.length===0){
    return '<div style="text-align:center;padding:40px 20px;">'
      +'<div style="font-size:40px;margin-bottom:16px;">&#x1F4CB;</div>'
      +'<div style="font-size:16px;color:#40d0a0;margin-bottom:8px;">Your Health Plan is empty</div>'
      +'<div style="font-size:13px;color:#208060;">Tap any recipe and press "Add to My Plan"</div>'
      +'</div>';
  }
  const shopMap = {};
  plan.forEach(function(item){
    (item.shopping||[]).forEach(function(ing){
      if(!ing||!ing.n) return;
      var skip = ['water','ice'].some(function(w){return ing.n.toLowerCase().indexOf(w)>=0;});
      if(skip) return;
      var total = Math.round((ing.pp||0) * item.servings * 10)/10;
      if(!total) return;
      var key = ing.n.toLowerCase().replace(/[^a-z0-9]/g,'');
      if(shopMap[key]){ shopMap[key].total += total; }
      else { shopMap[key] = {name:ing.n, total:total, unit:ing.u||'', source:item.name}; }
    });
  });
  var shopItems = Object.values(shopMap);
  var planHtml = plan.map(function(item){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #1a2a25;">'
      +'<div><div style="font-size:14px;color:#e0d4b8;">'+item.emoji+' '+item.name+'</div>'
      +'<div style="font-size:11px;color:#30c090;margin-top:2px;">'+item.servings+' serving'+(item.servings!==1?'s':'')+' &middot; '+item.type+'</div></div>'
      +'<button onclick="set({healthPlan:(S.healthPlan||[]).filter(function(x){return x.id!==\''+item.id+'\';})});" style="background:#0a2018;border:1px solid #1a4035;border-radius:6px;padding:4px 10px;color:#208060;font-size:11px;cursor:pointer;">Remove</button>'
      +'</div>';
  }).join('');
  var shopHtml = shopItems.length===0
    ? '<div style="color:#208060;font-size:12px;">Add items with shopping arrays to see the list</div>'
    : shopItems.map(function(item){
        var ck = checked['h_'+item.name.replace(/\s/g,'_')];
        var totalStr = item.total>=1000&&item.unit==='g'?(item.total/1000).toFixed(1)+'kg'
          :item.total>=1000&&item.unit==='ml'?(item.total/1000).toFixed(1)+'L'
          :item.total+(item.unit||'');
        return '<div onclick="healthToggleShopItem(\'h_'+item.name.replace(/[^a-z0-9]/gi,'_')+'\')" style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #0a1a15;cursor:pointer;opacity:'+( ck?0.35:1)+';">'
          +'style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #0a1a15;cursor:pointer;opacity:'+(ck?0.35:1)+';">'
          +'<div style="width:20px;height:20px;border-radius:4px;border:2px solid '+(ck?'#30c090':'#1a4035')+';background:'+(ck?'#30c090':'transparent')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+(ck?'<span style="color:#0f0e0c;font-size:11px;">&#x2713;</span>':'')+'</div>'
          +'<div style="flex:1;"><div style="font-size:13px;color:'+(ck?'#1a3028':'#e0d4b8')+';">'+item.name+'</div>'
          +'<div style="font-size:10px;color:#208060;">'+item.source+'</div></div>'
          +'<div style="font-size:13px;color:'+(ck?'#1a3028':'#f5c842')+';font-weight:bold;">'+totalStr+'</div>'
          +'</div>';
      }).join('');
  return '<div style="font-size:16px;color:#40d0a0;margin-bottom:4px;">&#x1F4CB; My Health Plan</div>'
    +'<div style="font-size:12px;color:#208060;margin-bottom:14px;">'+plan.length+' item'+(plan.length!==1?'s':'')+' selected</div>'
    +'<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:12px;margin-bottom:14px;">'+planHtml+'</div>'
    +'<div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">&#x1F6D2; Shopping List</div>'
    +'<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:12px;margin-bottom:14px;">'+shopHtml+'</div>'
    +'<button onclick="set({healthPlan:[],checkedHealthItems:{}})" style="width:100%;padding:12px;background:#0f1a18;border:1px solid #1a4035;border-radius:10px;color:#208060;font-size:13px;cursor:pointer;margin-bottom:10px;">&#x1F504; Clear Plan</button>';
}

function healthToggleShopItem(key){
  var checked = Object.assign({}, S.checkedHealthItems||{});
  checked[key] = !checked[key];
  setQuiet({checkedHealthItems:checked});
}

// ══════════════════════════════════════════════════════════════
// HEALTH HUB — EXTENDED CATEGORIES (Keto, Weight Loss, High-Protein, etc.)
// ══════════════════════════════════════════════════════════════

const KETO_RECIPES = [
  {id:'ketobowl',       tier:'free',  emoji:'🥑', name:'Avocado Egg Bowl',          kcal:520, feel:'Rich, filling — like a proper grown-up breakfast that holds you till dinner.',
   badges:['🥑 Keto','🥚 High-Fat','⚡ Quick'],
   base300:[{n:'Avocado (ripe, halved)',pp:1,u:''},{n:'Eggs',pp:2,u:''},{n:'Feta cheese',pp:30,u:'g'},{n:'Cherry tomatoes',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Salt & black pepper',pp:1,u:'pinch'}],
   method:['Halve avocado and remove pip. Drizzle with olive oil.','Fry eggs in olive oil — sunny side up or scrambled.','Place eggs in avocado hollow. Top with crumbled feta and cherry tomatoes.','Season with salt and plenty of black pepper. Serve immediately.'],
   tip:'Add a drizzle of chilli flakes for heat. Works as breakfast, lunch or a quick supper.'},
  {id:'ketocourgetti',  tier:'free',  emoji:'🥒', name:'Zoodles with Creamy Pesto',  kcal:410, feel:'Light but rich — your fork keeps going back.',
   badges:['🥒 Low-Carb','🌿 Keto','🧀 Satisfying'],
   base300:[{n:'Baby marrow / zucchini (spiralised)',pp:300,u:'g'},{n:'Cream cheese',pp:60,u:'g'},{n:'Basil pesto',pp:30,u:'g'},{n:'Parmesan (grated)',pp:20,u:'g'},{n:'Pine nuts',pp:15,u:'g'},{n:'Garlic clove (minced)',pp:1,u:''}],
   method:['Spiralise zucchini. Sprinkle with salt, leave 5 min, then pat dry.','Sauté garlic in butter 1 min. Add cream cheese and pesto — stir to combine.','Toss zoodles in the sauce over low heat, 2–3 min max (keep crunch).','Plate. Top with parmesan and toasted pine nuts.'],
   tip:'Do NOT overcook the zoodles — they turn watery. 2 min in the pan is plenty.'},
  {id:'ketobolognese',  tier:'free',  emoji:'🍖', name:'Beef & Cauliflower Mince',   kcal:580, feel:'Proper comfort food that happens to be carb-free. Your body won\'t miss a thing.',
   badges:['🥩 Keto','💪 High-Protein','🍽️ Hearty'],
   base300:[{n:'Beef mince',pp:200,u:'g'},{n:'Cauliflower (blitzed to rice)',pp:200,u:'g'},{n:'Chopped tomatoes (tinned)',pp:100,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Dried oregano',pp:2,u:'g'}],
   method:['Sauté onion in olive oil 4 min. Add garlic, cook 1 min.','Add mince. Brown well, breaking up lumps — about 7 min.','Add tomatoes and oregano. Simmer uncovered 15 min.','Meanwhile, microwave cauliflower rice 3 min. Serve mince on cauli rice.'],
   tip:'Add a splash of cream at the end for extra richness — still keto.'},
  {id:'ketosalmon',     tier:'plus',  emoji:'🐟', name:'Butter-Baked Salmon',        kcal:490, feel:'Golden edges, soft centre — smells like it came from a restaurant kitchen.',
   badges:['🐟 Omega-3','🧈 Keto','⏱️ 20 min'],
   base300:[{n:'Salmon fillet',pp:180,u:'g'},{n:'Butter',pp:20,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Garlic (minced)',pp:3,u:'g'},{n:'Fresh dill or parsley',pp:5,u:'g'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Preheat oven 200°C. Place salmon in baking dish.','Mix melted butter, lemon juice and garlic. Pour over salmon.','Season with salt and pepper. Bake 12–15 min until just cooked through.','Finish with fresh herbs. Serve with steamed greens or salad.'],
   tip:'Pull salmon at 12 min if thicker fillets — residual heat finishes it. Overcooked salmon is dry.'},
  {id:'ketocheesecake', tier:'plus',  emoji:'🍰', name:'Keto Cheesecake Cups',       kcal:360, feel:'Silky and indulgent — you won\'t believe it has almost no sugar.',
   badges:['🍰 Keto Dessert','🧀 Creamy','🍓 Low-Sugar'],
   base300:[{n:'Cream cheese',pp:120,u:'g'},{n:'Heavy cream (whipped)',pp:80,u:'ml'},{n:'Erythritol or xylitol sweetener',pp:20,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'},{n:'Lemon zest',pp:2,u:'g'},{n:'Fresh berries (for topping)',pp:40,u:'g'}],
   method:['Beat cream cheese and sweetener until smooth.','Fold in whipped cream gently. Add vanilla and lemon zest.','Spoon into glasses or ramekins. Refrigerate at least 1 hour.','Top with fresh berries and serve cold.'],
   tip:'Use a hand mixer for the cream cheese — lumps are nearly impossible to remove by hand.'},
];

const WEIGHTLOSS_RECIPES = [
  {id:'wl_greekbowl',   tier:'free',  emoji:'🫙', name:'Greek Yoghurt Power Bowl',   kcal:280, feel:'Cool, tangy and strangely satisfying — fills you up without the guilt.',
   badges:['🥗 Low-Cal','💪 Protein','⚡ 5 min'],
   base300:[{n:'Low-fat Greek yoghurt',pp:200,u:'g'},{n:'Cucumber (diced)',pp:80,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Kalamata olives',pp:20,u:'g'},{n:'Feta cheese (crumbled)',pp:20,u:'g'},{n:'Olive oil drizzle',pp:5,u:'ml'}],
   method:['Spoon yoghurt into bowl.','Top with cucumber, tomatoes and olives.','Crumble feta over the top. Drizzle with olive oil.','Season with black pepper. Eat immediately.'],
   tip:'Swap feta for hummus to drop calories further. Keeps well — prep the veg ahead.'},
  {id:'wl_eggsoup',     tier:'free',  emoji:'🥚', name:'Egg Drop Vegetable Soup',    kcal:190, feel:'Warm and gentle — like a reset button in a bowl.',
   badges:['🍵 Low-Cal','🥦 Veg','⚡ Quick'],
   base300:[{n:'Vegetable stock',pp:400,u:'ml'},{n:'Baby spinach',pp:80,u:'g'},{n:'Eggs (beaten)',pp:2,u:''},{n:'Spring onions (sliced)',pp:30,u:'g'},{n:'Fresh ginger (grated)',pp:3,u:'g'},{n:'Soy sauce (low sodium)',pp:10,u:'ml'}],
   method:['Bring stock to a gentle boil. Add ginger and soy sauce.','Add spinach — it wilts in 1 min.','Slowly drizzle in beaten eggs while stirring gently — they cook in ribbons.','Serve hot, topped with spring onions.'],
   tip:'Do not boil vigorously when adding egg — you want wispy ribbons, not scrambled egg shreds.'},
  {id:'wl_turkey',      tier:'free',  emoji:'🍗', name:'Turkey Lettuce Wraps',       kcal:240, feel:'Crunchy, fresh and fun to eat — no one misses the tortilla.',
   badges:['🥬 Low-Cal','🍗 Lean Protein','🌶️ Flavourful'],
   base300:[{n:'Turkey mince',pp:150,u:'g'},{n:'Iceberg lettuce leaves (large)',pp:4,u:''},{n:'Red pepper (diced)',pp:60,u:'g'},{n:'Spring onions',pp:30,u:'g'},{n:'Soy sauce',pp:10,u:'ml'},{n:'Sesame oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:3,u:'g'}],
   method:['Cook turkey mince in a pan with sesame oil, breaking apart — 6 min.','Add garlic, red pepper and spring onion. Cook 3 min.','Add soy sauce. Stir and remove from heat.','Spoon into lettuce cups. Serve immediately.'],
   tip:'Finish with a drizzle of chilli sauce if you like heat. Serve on a platter — people love assembling their own.'},
  {id:'wl_broccolisoup', tier:'free',  emoji:'🥦', name:'Broccoli & Leek Soup',      kcal:175, feel:'Smooth and velvety — hard to believe it\'s mostly vegetables.',
   badges:['🥦 Low-Cal','🌱 Vegan','💚 Filling'],
   base300:[{n:'Broccoli florets',pp:250,u:'g'},{n:'Leek (sliced)',pp:100,u:'g'},{n:'Vegetable stock',pp:500,u:'ml'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Sauté leek and garlic in olive oil 4 min.','Add broccoli and stock. Bring to boil, simmer 12 min.','Blend until smooth. Season generously with salt and pepper.','Serve hot with a squeeze of lemon if available.'],
   tip:'Add a tablespoon of Greek yoghurt for creaminess without the calories. Freezes perfectly.'},
  {id:'wl_tuna',        tier:'plus',  emoji:'🐟', name:'Tuna-Stuffed Baby Peppers',  kcal:195, feel:'Snappy bite of colour and protein — perfect for meal prep.',
   badges:['🫑 Low-Cal','🐟 Protein','🌶️ Finger Food'],
   base300:[{n:'Baby peppers (halved, deseeded)',pp:6,u:''},{n:'Canned tuna (drained)',pp:120,u:'g'},{n:'Low-fat cottage cheese',pp:60,u:'g'},{n:'Celery (finely diced)',pp:30,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Chives or spring onion',pp:10,u:'g'}],
   method:['Mix tuna, cottage cheese, celery, lemon juice and chives together.','Season with salt and pepper to taste.','Spoon filling into halved peppers.','Serve cold. Keeps in fridge 2 days.'],
   tip:'Swap cottage cheese for Greek yoghurt if preferred. Makes a great lunchbox filler.'},
];

const HIGHPROTEIN_RECIPES = [
  {id:'hp_chickenchest',tier:'free',  emoji:'🍗', name:'Herb-Grilled Chicken Breast', kcal:310, feel:'Clean, satisfying, and perfectly seasoned — protein that doesn\'t feel like a punishment.',
   badges:['💪 High-Protein','🍗 Lean','⚡ Quick'],
   base300:[{n:'Chicken breast',pp:200,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Garlic powder',pp:2,u:'g'},{n:'Smoked paprika',pp:2,u:'g'},{n:'Dried thyme',pp:1,u:'g'},{n:'Salt & pepper',pp:1,u:'pinch'}],
   method:['Pound chicken to even thickness — about 2cm — so it cooks evenly.','Mix oil and all spices. Coat chicken thoroughly.','Grill or pan-fry 4–5 min per side over medium-high heat.','Rest 3 min before slicing. Serves with salad or veg.'],
   tip:'Do not skip resting — it keeps the juices in. Cold leftover chicken slices are great in wraps.'},
  {id:'hp_eggs',        tier:'free',  emoji:'🥚', name:'Scrambled Eggs with Cottage Cheese', kcal:290, feel:'Creamier than you expect — the cottage cheese melts right in.',
   badges:['🥚 High-Protein','🧀 Creamy','⚡ 8 min'],
   base300:[{n:'Eggs',pp:3,u:''},{n:'Cottage cheese',pp:80,u:'g'},{n:'Butter',pp:10,u:'g'},{n:'Chives (chopped)',pp:5,u:'g'},{n:'Salt & white pepper',pp:1,u:'pinch'}],
   method:['Beat eggs with cottage cheese. Season.','Melt butter in pan over low heat.','Add egg mixture. Stir gently and continuously — low and slow.','Remove from heat while still slightly underdone — residual heat finishes them. Top with chives.'],
   tip:'The key is LOW heat. High heat toughens eggs. 3–4 min of patient stirring beats 1 min of rubbery scramble.'},
  {id:'hp_lentil',      tier:'free',  emoji:'🫘', name:'Red Lentil Dhal',             kcal:380, feel:'Deeply warming and earthy — a bowl that feels like a hug.',
   badges:['🫘 Plant Protein','💪 High-Protein','🌱 Vegan'],
   base300:[{n:'Red lentils (dried)',pp:100,u:'g'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Vegetable stock',pp:400,u:'ml'},{n:'Onion (diced)',pp:80,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Ground cumin',pp:3,u:'g'},{n:'Turmeric',pp:2,u:'g'},{n:'Coconut oil',pp:10,u:'ml'}],
   method:['Sauté onion in coconut oil 5 min. Add garlic, cumin and turmeric — 1 min.','Rinse lentils. Add to pot with tomatoes and stock.','Bring to boil, reduce heat, simmer 20 min stirring occasionally.','Season generously. Serve with rice or flatbread.'],
   tip:'Red lentils break down and thicken naturally — no need to blend. Goes further with a squeeze of lemon.'},
  {id:'hp_cottage',     tier:'plus',  emoji:'🫙', name:'High-Protein Cottage Bowls',  kcal:340, feel:'Building-block eating — satisfying in the most practical way.',
   badges:['🧀 High-Protein','🥗 Low-Carb','⚡ 5 min'],
   base300:[{n:'Cottage cheese',pp:200,u:'g'},{n:'Cucumber (sliced)',pp:100,u:'g'},{n:'Sundried tomatoes',pp:30,u:'g'},{n:'Pumpkin seeds',pp:20,u:'g'},{n:'Olive oil drizzle',pp:5,u:'ml'},{n:'Fresh basil',pp:3,u:'g'}],
   method:['Spoon cottage cheese into bowl.','Arrange cucumber and sundried tomatoes around and on top.','Scatter pumpkin seeds. Drizzle with olive oil.','Finish with fresh basil and cracked pepper.'],
   tip:'Add a soft-boiled egg for extra protein. Works as breakfast, snack or light meal.'},
  {id:'hp_biltong',     tier:'free',  emoji:'🥩', name:'Biltong & Bean Protein Plate', kcal:420, feel:'Proudly South African and powerfully nutritious. No excuses for a bad gym session.',
   badges:['🇿🇦 SA Classic','💪 High-Protein','🥩 Iron-Rich'],
   base300:[{n:'Sliced biltong',pp:80,u:'g'},{n:'Canned chickpeas (drained)',pp:120,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Red onion (thinly sliced)',pp:40,u:'g'},{n:'Lemon dressing (oil + lemon)',pp:20,u:'ml'},{n:'Feta cheese',pp:30,u:'g'}],
   method:['Combine chickpeas, spinach and red onion in bowl.','Drizzle with lemon dressing. Toss gently.','Arrange biltong strips on top.','Crumble feta over. Serve immediately.'],
   tip:'Wet biltong works better here — adds moisture. Droëwors bits are great stirred through for crunch.'},
];

const PLANTBASED_RECIPES = [
  {id:'pb_buddha',      tier:'free',  emoji:'🥣', name:'Rainbow Buddha Bowl',         kcal:420, feel:'Colourful and alive — like eating sunshine on a plate.',
   badges:['🌱 Vegan','🥣 Whole-Food','🌈 Nourishing'],
   base300:[{n:'Cooked brown rice or quinoa',pp:150,u:'g'},{n:'Roasted chickpeas',pp:80,u:'g'},{n:'Roasted sweet potato (cubed)',pp:100,u:'g'},{n:'Shredded red cabbage',pp:60,u:'g'},{n:'Avocado (sliced)',pp:60,u:'g'},{n:'Tahini dressing',pp:30,u:'ml'}],
   method:['Roast cubed sweet potato at 200°C for 20 min with olive oil and salt.','Roast chickpeas same tray — add at the 10-min mark.','Build bowl: rice base, then arrange sweet potato, chickpeas, cabbage, avocado.','Drizzle with tahini dressing. Eat while still warm.'],
   tip:'Tahini dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 tsp garlic, enough water to drizzle. Perfect every time.'},
  {id:'pb_tofu',        tier:'free',  emoji:'🟡', name:'Crispy Tofu Stir-Fry',        kcal:370, feel:'Golden crispy tofu — this might convert the sceptics.',
   badges:['🌱 Vegan','🟡 Protein','🥢 Asian-Inspired'],
   base300:[{n:'Firm tofu (pressed, cubed)',pp:180,u:'g'},{n:'Broccoli florets',pp:120,u:'g'},{n:'Carrot (sliced thin)',pp:60,u:'g'},{n:'Soy sauce',pp:20,u:'ml'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Garlic (minced)',pp:3,u:'g'}],
   method:['Press tofu in a clean cloth for 15 min to remove moisture.','Cube and pan-fry in hot oil 3–4 min per side until golden. Remove.','Stir-fry ginger and garlic 30 sec. Add veg — 4 min.','Return tofu. Add soy sauce and sesame oil. Toss. Serve with rice.'],
   tip:'Pressing tofu is non-negotiable for crispiness. Wet tofu steams, pressed tofu fries. Night and day difference.'},
  {id:'pb_chakalaka',   tier:'free',  emoji:'🌶️', name:'Chakalaka Stuffed Gems',     kcal:295, feel:'Fiery, saucy, unmistakably South African. The plant-based braai side that outshines everything else.',
   badges:['🇿🇦 SA Classic','🌱 Vegan','🌶️ Spicy'],
   base300:[{n:'Baby gem squash',pp:2,u:''},{n:'Canned baked beans',pp:120,u:'g'},{n:'Canned tomatoes',pp:80,u:'g'},{n:'Carrot (grated)',pp:60,u:'g'},{n:'Onion (finely diced)',pp:60,u:'g'},{n:'Green pepper (diced)',pp:40,u:'g'},{n:'Curry powder',pp:4,u:'g'},{n:'Sunflower oil',pp:10,u:'ml'}],
   method:['Halve and boil gem squash 15 min until just tender. Scoop out seeds.','Sauté onion, carrot and green pepper in oil — 6 min.','Add curry powder 1 min, then tomatoes and beans. Simmer 10 min.','Spoon chakalaka into gem squash halves. Serve hot.'],
   tip:'Classic braai side that holds its own as a main. Make the chakalaka a day ahead — it tastes better.'},
  {id:'pb_lentilcurry', tier:'plus',  emoji:'🍛', name:'Coconut Lentil Curry',        kcal:440, feel:'Rich, creamy, fragrant — the kind of curry you make again the next week.',
   badges:['🌱 Vegan','🫘 Protein','🥥 Rich'],
   base300:[{n:'Green or brown lentils (dried)',pp:100,u:'g'},{n:'Coconut milk',pp:150,u:'ml'},{n:'Vegetable stock',pp:300,u:'ml'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Onion (diced)',pp:80,u:'g'},{n:'Garlic (3 cloves)',pp:9,u:'g'},{n:'Curry powder',pp:8,u:'g'},{n:'Spinach',pp:60,u:'g'}],
   method:['Sauté onion in oil 5 min. Add garlic and curry powder — 1 min.','Add lentils, tomatoes, stock. Bring to boil, simmer 25 min.','Stir in coconut milk. Simmer 5 min more.','Add spinach, cook 1 min until wilted. Season and serve with rice.'],
   tip:'Brown lentils hold their shape better than red. Both work — texture preference only.'},
];

const GUTHEALTH_RECIPES = [
  {id:'gh_kimchi_rice',  tier:'free',  emoji:'🍚', name:'Kimchi Fried Rice',           kcal:380, feel:'Funky, warming and alive — your gut flora will love you for it.',
   badges:['🦠 Probiotics','🌶️ Fermented','🍚 Satisfying'],
   base300:[{n:'Cooked rice (day-old is best)',pp:200,u:'g'},{n:'Kimchi (chopped)',pp:80,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Spring onions',pp:30,u:'g'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Soy sauce',pp:10,u:'ml'}],
   method:['Heat sesame oil in wok over high heat. Add cold rice — fry 3 min.','Push rice aside. Scramble eggs in centre, then mix through.','Add kimchi and soy sauce — stir-fry 2 min.','Serve topped with spring onions. Add extra kimchi on the side.'],
   tip:'Day-old rice fries best — fresh rice is too wet. If you only have fresh, spread it out to dry for 30 min first.'},
  {id:'gh_kefir_bowl',   tier:'free',  emoji:'🥛', name:'Kefir & Flaxseed Breakfast',  kcal:310, feel:'Tangy and nourishing — starts your digestive system gently.',
   badges:['🦠 Probiotics','🌾 Fibre','⚡ 5 min'],
   base300:[{n:'Plain kefir or Bulgarian yoghurt',pp:250,u:'ml'},{n:'Ground flaxseed',pp:15,u:'g'},{n:'Rolled oats',pp:30,u:'g'},{n:'Banana (sliced)',pp:80,u:'g'},{n:'Honey',pp:10,u:'g'},{n:'Blueberries',pp:60,u:'g'}],
   method:['Pour kefir into bowl.','Stir in flaxseed and oats. Let stand 5 min to soften.','Top with banana slices, blueberries and honey.','Eat immediately — the fibre activates quickly.'],
   tip:'Ground flaxseed beats whole — your gut absorbs the omega-3 far better. Store ground flax in the freezer.'},
  {id:'gh_fibre_soup',   tier:'free',  emoji:'🍲', name:'Black Bean & Veg Soup',       kcal:320, feel:'Thick, hearty and incredibly filling — prebiotic fuel in a bowl.',
   badges:['🫘 Prebiotic','🌿 High-Fibre','🥘 Warming'],
   base300:[{n:'Canned black beans (drained)',pp:150,u:'g'},{n:'Vegetable stock',pp:400,u:'ml'},{n:'Canned tomatoes',pp:100,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Carrot (diced)',pp:60,u:'g'},{n:'Celery (sliced)',pp:40,u:'g'},{n:'Cumin',pp:3,u:'g'},{n:'Smoked paprika',pp:2,u:'g'}],
   method:['Sauté onion, carrot and celery in oil — 6 min.','Add cumin and paprika — 1 min.','Add beans, tomatoes and stock. Simmer 20 min.','Blend a third of the soup for creaminess, stir back through. Season.'],
   tip:'Prebiotic fibre feeds your beneficial gut bacteria. Beans are one of the best sources. Do not skip.'},
  {id:'gh_miso_salmon',  tier:'plus',  emoji:'🍜', name:'Miso Soup with Tofu & Nori',  kcal:180, feel:'Umami, soothing and deeply restorative — your gut knows this is good.',
   badges:['🦠 Probiotics','🌊 Umami','⚡ 10 min'],
   base300:[{n:'Dashi or vegetable stock',pp:400,u:'ml'},{n:'White miso paste',pp:20,u:'g'},{n:'Silken tofu (cubed)',pp:100,u:'g'},{n:'Dried wakame seaweed',pp:5,u:'g'},{n:'Spring onions (sliced)',pp:20,u:'g'}],
   method:['Soak wakame in cold water 5 min. Drain.','Heat stock to just below boiling. Do NOT boil miso — heat kills the probiotics.','Dissolve miso paste in a ladle of warm stock, stir back into pot.','Add tofu and wakame. Serve topped with spring onions.'],
   tip:'NEVER boil miso after adding it. High heat kills all the beneficial bacteria. Keep it below a simmer.'},
];

const DIABETIC_RECIPES = [
  {id:'db_oatpancake',   tier:'free',  emoji:'🥞', name:'Oat & Egg Pancakes',          kcal:270, feel:'Hearty and subtly sweet — steady energy, no spike, no crash.',
   badges:['🩸 Low-GI','🌾 Fibre','⚡ Quick'],
   base300:[{n:'Rolled oats (blitzed to flour)',pp:60,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Low-fat milk or oat milk',pp:100,u:'ml'},{n:'Cinnamon',pp:2,u:'g'},{n:'Vanilla extract',pp:2,u:'ml'},{n:'Coconut oil for frying',pp:5,u:'ml'}],
   method:['Blend oats to fine flour. Whisk with eggs, milk, cinnamon and vanilla.','Rest batter 5 min.','Fry in a light-oiled pan over medium heat — 2 min per side.','Serve with fresh berries (no syrup). A drizzle of yoghurt works well.'],
   tip:'Berries are low GI. Use them instead of banana or syrup for a blood-sugar-friendly topping.'},
  {id:'db_sweetpot',     tier:'free',  emoji:'🍠', name:'Sweet Potato & Chickpea Bowl', kcal:360, feel:'Grounding and filling — the kind of meal that sustains without the afternoon slump.',
   badges:['🩸 Low-GI','🌱 Plant-Based','🍠 Nutritious'],
   base300:[{n:'Sweet potato (cubed, roasted)',pp:200,u:'g'},{n:'Canned chickpeas (drained)',pp:120,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Cumin',pp:2,u:'g'},{n:'Feta',pp:25,u:'g'}],
   method:['Toss sweet potato and chickpeas in oil, cumin, salt. Roast 200°C for 25 min.','Wilt spinach in a warm pan 1 min. Season.','Build bowl: spinach base, sweet potato, chickpeas on top.','Drizzle with lemon. Crumble feta. Serve.'],
   tip:'Sweet potato has a lower GI than white potato — a genuine swap that matters for blood sugar management.'},
  {id:'db_lentilsoup',   tier:'free',  emoji:'🍲', name:'Green Lentil Soup',            kcal:295, feel:'Steady, earthy warmth — energy that lasts for hours.',
   badges:['🩸 Low-GI','🫘 Fibre','🌿 Protein'],
   base300:[{n:'Green lentils (dried)',pp:80,u:'g'},{n:'Vegetable stock',pp:500,u:'ml'},{n:'Carrot (diced)',pp:80,u:'g'},{n:'Celery (sliced)',pp:60,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Turmeric',pp:2,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Olive oil',pp:10,u:'ml'}],
   method:['Sauté onion in oil 4 min. Add carrot, celery, spices — 2 min.','Rinse lentils, add with stock. Bring to boil, simmer 25 min.','Season generously. Serve with a squeeze of lemon.','Blend half if you prefer a smoother texture.'],
   tip:'Green lentils have a GI of around 30 — among the lowest of any food. An exceptional diabetic-friendly staple.'},
  {id:'db_eggveg',       tier:'plus',  emoji:'🍳', name:'Vegetable Omelette',           kcal:250, feel:'Light but filling — a breakfast that doesn\'t lie to you.',
   badges:['🩸 Low-GI','🥚 Protein','⚡ 10 min'],
   base300:[{n:'Eggs',pp:3,u:''},{n:'Baby spinach',pp:60,u:'g'},{n:'Mushrooms (sliced)',pp:80,u:'g'},{n:'Red pepper (diced)',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Feta or goat cheese',pp:25,u:'g'}],
   method:['Sauté mushrooms and red pepper in oil 4 min. Add spinach — 1 min.','Beat eggs, season. Pour over veg.','Cook on low-medium heat, lifting edges as it sets — 3 min.','Fold. Crumble cheese over. Serve immediately.'],
   tip:'Eggs are essentially zero GI — an ideal diabetic protein. Add more veg to bulk it out without raising GI.'},
];

const ANTIINFLAM_RECIPES = [
  {id:'ai_turmeric',     tier:'free',  emoji:'🟡', name:'Golden Turmeric Broth',       kcal:120, feel:'Warm and ancient — your joints notice this before your taste buds do.',
   badges:['🌿 Anti-Inflam','🟡 Turmeric','🌶️ Warming'],
   base300:[{n:'Vegetable or chicken stock',pp:400,u:'ml'},{n:'Turmeric powder',pp:3,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Black pepper (essential with turmeric)',pp:1,u:'pinch'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Coconut oil',pp:5,u:'ml'}],
   method:['Heat stock in a pot. Stir in turmeric, ginger and black pepper.','Simmer 5 min. Add lemon juice and coconut oil.','Taste and adjust seasoning.','Drink as a broth or pour over noodles/rice for a light meal.'],
   tip:'Black pepper is not optional — it activates turmeric\'s curcumin by 2000%. No black pepper = no anti-inflammatory benefit.'},
  {id:'ai_salmonbowl',   tier:'plus',  emoji:'🐟', name:'Omega-3 Salmon Bowl',         kcal:490, feel:'Deeply nourishing — the kind of meal you feel working.',
   badges:['🐟 Omega-3','🌿 Anti-Inflam','💪 Protein'],
   base300:[{n:'Salmon fillet',pp:180,u:'g'},{n:'Cooked brown rice',pp:150,u:'g'},{n:'Avocado (sliced)',pp:60,u:'g'},{n:'Edamame (shelled)',pp:80,u:'g'},{n:'Cucumber (sliced)',pp:60,u:'g'},{n:'Sesame seeds',pp:5,u:'g'},{n:'Low-sodium soy sauce',pp:15,u:'ml'}],
   method:['Season salmon with soy sauce and pepper. Pan-fry 3–4 min per side.','Build bowl: brown rice base, arrange cucumber, edamame, avocado.','Flake salmon over the top.','Drizzle remaining soy sauce. Scatter sesame seeds.'],
   tip:'Salmon, avocado and edamame are three of the most anti-inflammatory foods available. All in one bowl.'},
  {id:'ai_berrysalad',   tier:'free',  emoji:'🫐', name:'Berry & Walnut Salad',        kcal:310, feel:'Bright and antioxidant-rich — this tastes like prevention.',
   badges:['🫐 Antioxidants','🌿 Anti-Inflam','🌰 Omega-3'],
   base300:[{n:'Mixed salad leaves',pp:80,u:'g'},{n:'Mixed berries (blueberries, strawberries)',pp:100,u:'g'},{n:'Walnuts (roughly broken)',pp:30,u:'g'},{n:'Feta cheese',pp:30,u:'g'},{n:'Red onion (thinly sliced)',pp:20,u:'g'},{n:'Balsamic vinegar dressing',pp:20,u:'ml'}],
   method:['Toss salad leaves, berries and red onion together.','Add walnuts and crumbled feta.','Drizzle with balsamic dressing. Toss gently.','Serve immediately — berries release juice if left standing.'],
   tip:'Walnuts have the highest omega-3 of any tree nut. Blueberries are among the highest antioxidant foods. This salad earns its reputation.'},
  {id:'ai_gingerstir',   tier:'free',  emoji:'🥦', name:'Ginger Broccoli Stir-Fry',   kcal:280, feel:'Crisp, punchy and alive — you can almost feel the inflammation retreating.',
   badges:['🥦 Anti-Inflam','🌿 Ginger','🌱 Vegan'],
   base300:[{n:'Broccoli florets',pp:200,u:'g'},{n:'Fresh ginger (julienned)',pp:10,u:'g'},{n:'Garlic (sliced)',pp:5,u:'g'},{n:'Soy sauce',pp:15,u:'ml'},{n:'Sesame oil',pp:10,u:'ml'},{n:'Cashews',pp:30,u:'g'},{n:'Spring onions',pp:20,u:'g'}],
   method:['Heat sesame oil in wok to high. Add ginger and garlic — 30 sec.','Add broccoli — stir-fry on high heat 4 min (char is good).','Add cashews, toss 1 min.','Add soy sauce, toss. Serve immediately over rice. Top with spring onions.'],
   tip:'High heat is essential for stir-fry — medium heat stews the vegetables. Get the wok properly hot first.'},
];

const IMMUNITY_RECIPES = [
  {id:'im_citrus_shot',  tier:'free',  emoji:'🍊', name:'Immunity Ginger Shot',        kcal:70,  feel:'Sharp, fiery and alive — like waking up your immune system with a starting pistol.',
   badges:['🛡️ Immunity','🌶️ Ginger','🍋 Vitamin C'],
   base300:[{n:'Fresh ginger (grated)',pp:20,u:'g'},{n:'Lemon juice (freshly squeezed)',pp:30,u:'ml'},{n:'Orange juice (freshly squeezed)',pp:80,u:'ml'},{n:'Turmeric powder',pp:2,u:'g'},{n:'Black pepper',pp:1,u:'pinch'},{n:'Honey (optional)',pp:5,u:'g'}],
   method:['Grate ginger finely. Squeeze lemon and orange.','Combine all ingredients. Stir or shake vigorously.','Strain if desired or drink with pulp (more fibre that way).','Drink immediately — vitamin C degrades quickly once juiced.'],
   tip:'This is most effective on an empty stomach first thing in the morning. Make only what you\'ll drink — it oxidises fast.'},
  {id:'im_chickensoup',  tier:'free',  emoji:'🍲', name:'Bone Broth Chicken Soup',     kcal:260, feel:'Ancient, restorative warmth — the original medicine cabinet.',
   badges:['🛡️ Immunity','🍲 Gut-Healing','💪 Protein'],
   base300:[{n:'Chicken pieces (bone-in)',pp:200,u:'g'},{n:'Vegetable or bone broth',pp:500,u:'ml'},{n:'Carrot (diced)',pp:80,u:'g'},{n:'Celery (sliced)',pp:60,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Garlic (3 cloves)',pp:9,u:'g'},{n:'Fresh thyme',pp:3,u:'g'},{n:'Black pepper',pp:1,u:'pinch'}],
   method:['Place all ingredients in a pot. Bring to boil.','Reduce heat. Simmer covered for 45 min.','Remove chicken. Shred meat, discard bones.','Return meat to soup. Season generously. Serve hot.'],
   tip:'Bone broth contains collagen, glucosamine and glycine — all gut-healing compounds. The science behind "Grandma\'s soup" is real.'},
  {id:'im_citrus_salad', tier:'free',  emoji:'🥗', name:'Vitamin C Citrus Salad',      kcal:190, feel:'Bright and refreshing — each bite is a little burst of vitality.',
   badges:['🛡️ Immunity','🍊 Vitamin C','🌱 Vegan'],
   base300:[{n:'Orange (segmented)',pp:150,u:'g'},{n:'Red pepper (thinly sliced)',pp:80,u:'g'},{n:'Kiwi (sliced)',pp:80,u:'g'},{n:'Baby spinach',pp:60,u:'g'},{n:'Red onion (thinly sliced)',pp:20,u:'g'},{n:'Olive oil & lemon dressing',pp:20,u:'ml'}],
   method:['Arrange spinach as a base.','Arrange orange, kiwi and red pepper on top.','Scatter red onion.','Drizzle dressing. Serve immediately — vitamin C-rich foods oxidise fast.'],
   tip:'Red pepper has 3× more vitamin C than oranges. Kiwi has more vitamin C per gram than citrus. This salad is a genuine immunity powerhouse.'},
  {id:'im_garlicshrimp', tier:'plus',  emoji:'🦐', name:'Garlic & Chilli Prawns',      kcal:310, feel:'Bold, garlicky and unapologetic — garlic is nature\'s antibiotic.',
   badges:['🛡️ Immunity','🧄 Allicin','🌶️ Anti-Viral'],
   base300:[{n:'Prawns (shelled, deveined)',pp:200,u:'g'},{n:'Garlic (4 cloves, minced)',pp:12,u:'g'},{n:'Red chilli (sliced)',pp:5,u:'g'},{n:'Olive oil',pp:20,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Fresh parsley',pp:5,u:'g'}],
   method:['Heat olive oil in pan over medium-high heat.','Add garlic and chilli — cook 1 min.','Add prawns — cook 2 min per side until pink and curled.','Squeeze lemon over. Toss. Serve immediately with parsley.'],
   tip:'Garlic\'s allicin — its active immunity compound — is activated by crushing or mincing. Let it sit 5 min after chopping before cooking for maximum benefit.'},
];

// ── GENERIC RENDER FOR EXTENDED HEALTH CATEGORIES ────────────────────────────
function renderExtHealthList(recipes, isPro) {
  return recipes.map(r => {
    const isFree = r.tier === 'free';
    const canView = isFree || isPro;
    return `<div onclick="${canView ? `set({extHealthRecipe:${JSON.stringify(r)}})` : `alert('👑 Pro feature — unlock all recipes')`}"
      style="background:#0f1a18;border:1px solid ${isFree?'#1a4035':'#2a3028'};border-radius:12px;padding:14px;margin-bottom:12px;cursor:pointer;position:relative;">
      ${!isFree ? `<span style="position:absolute;top:10px;right:10px;font-size:10px;background:#1a1008;border:1px solid #c06020;border-radius:6px;color:#c08030;padding:2px 6px;">👑 PRO</span>` : ''}
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:28px;">${r.emoji}</span>
        <div style="flex:1;">
          <div style="font-size:15px;color:#f5e8cc;font-family:Georgia,serif;">${r.name}</div>
          <div style="font-size:11px;color:#208060;margin-top:2px;">${r.kcal} kcal pp</div>
          <div style="margin-top:6px;">${r.badges.map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:10px;font-size:10px;color:#30a070;padding:2px 7px;margin-right:4px;display:inline-block;margin-bottom:3px;">${b}</span>`).join('')}</div>
        </div>
      </div>
      <p style="margin:8px 0 0;font-size:12px;color:#80a090;font-style:italic;line-height:1.5;">${r.feel}</p>
    </div>`;
  }).join('');
}

function extHealthRecipeHTML(r, mult) {
  const isPro = tierAllows('pro');
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
      <button onclick="set({extHealthRecipe:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Health Hub</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${r.emoji} ${r.name}</h1>
      <div style="font-size:11px;color:#30c090;font-style:italic;">${r.kcal * mult} kcal · ${mult} serving${mult>1?'s':''}</div>
    </div>
    <div class="content">
      <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:12px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
        <div style="font-size:11px;color:#30c090;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Servings</div>
        <button onclick="set({servings:Math.max(1,S.servings-1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #30c090;color:#30c090;font-size:18px;cursor:pointer;">−</button>
        <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${mult}</span>
        <button onclick="set({servings:Math.min(20,S.servings+1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #30c090;color:#30c090;font-size:18px;cursor:pointer;">+</button>
      </div>
      <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:4px;">Ingredients</div>
        <div style="font-size:10px;color:#208060;margin-bottom:10px;">Per person → total for ${mult} serving${mult>1?'s':''}</div>
        ${r.base300.map((ing,i)=>{
          const pp = ing.pp || 0;
          const total = Math.round(pp * mult * 10) / 10;
          const u = ing.u || '';
          let totalStr = '';
          if(u==='g'&&total>=1000) totalStr=(total/1000).toFixed(1)+'kg';
          else if(u==='ml'&&total>=1000) totalStr=(total/1000).toFixed(1)+'L';
          else if(pp>0&&u) totalStr=total+u;
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:${i<r.base300.length-1?'1px solid #1a2a25':'none'};gap:8px;">
            <span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span>
            <div style="text-align:right;flex-shrink:0;">
              <span style="font-size:12px;color:#60d0a0;">${pp>0?(pp+(u||'')):'to taste'}</span>
              ${totalStr?`<span style="font-size:13px;color:#f5c842;font-weight:bold;margin-left:8px;">${totalStr}</span>`:''}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${r.method.map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div class="step-num" style="background:#0a2018;border:1px solid #30c090;color:#30c090;">${i+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join('')}
      </div>
      <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;">${r.tip}</p>
      </div>
      ${isPro ? `
      <button onclick="(function(){const lines=S.extHealthRecipe.base300.map(i=>{ const t=Math.round((i.pp||0)*(S.servings||1)*10)/10; return '• '+i.n+': '+(t>0?(t+(i.u||'')):'to taste'); }).join('\\n'); window.open('https://wa.me/?text='+encodeURIComponent('${r.emoji} *${r.name}*\\nFor '+(S.servings||1)+' serving'+((S.servings||1)>1?'s':'')+'\\n\\n'+lines+'\\n\\nFrom Tinza'),'_blank');})()"
        style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Shopping List via WhatsApp</button>` : `
      <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:10px;text-align:center;color:#208060;font-size:12px;margin-bottom:12px;">👑 Share shopping list — Pro feature</div>`}
      <button onclick="set({extHealthRecipe:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Health Hub</button>
    </div>
  </div>`;
}

// Map category id to recipe array + description
const EXT_HEALTH_MAP = {
  keto:       {recipes:typeof KETO_RECIPES!=='undefined'?KETO_RECIPES:[], desc:'High-fat, low-carb — your body runs on ketones not glucose. 🥑'},
  weightloss: {recipes:typeof WEIGHTLOSS_RECIPES!=='undefined'?WEIGHTLOSS_RECIPES:[], desc:'Low-calorie, high-volume — full without the excess. 🥗'},
  highprotein:{recipes:typeof HIGHPROTEIN_RECIPES!=='undefined'?HIGHPROTEIN_RECIPES:[], desc:'Build muscle, recover faster, stay full longer. 💪'},
  plantbased: {recipes:typeof PLANTBASED_RECIPES!=='undefined'?PLANTBASED_RECIPES:[], desc:'Whole-food, plant-powered — no animals harmed, full flavour. 🌱'},
  guthealth:  {recipes:typeof GUTHEALTH_RECIPES!=='undefined'?GUTHEALTH_RECIPES:[], desc:'Feed your microbiome — fibre, ferments and probiotics. 🦠'},
  diabetic:   {recipes:typeof DIABETIC_RECIPES!=='undefined'?DIABETIC_RECIPES:[], desc:'Low GI, blood-sugar balanced — no spikes, no crashes. 🩸'},
  antiinflam: {recipes:typeof ANTIINFLAM_RECIPES!=='undefined'?ANTIINFLAM_RECIPES:[], desc:'Reduce chronic inflammation with targeted whole foods. 🌿'},
  immunity:   {recipes:typeof IMMUNITY_RECIPES!=='undefined'?IMMUNITY_RECIPES:[], desc:'Fortify your defences from the inside out. 🛡️'},
};

function smoothiesHTML(){
  const isPro = tierAllows('pro');
  const vitalCat = S.vitalCat || "smoothie";
  const activeSmoothie = S.activeSmoothie;
  const activeOats = S.activeOats;
  const activeMuffin = S.activeMuffin;
  const activeRaw = S.activeRaw;

  // Sub-recipe views
  if(activeOats){
    const oa=activeOats, mult=S.servings||1;
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
        <button onclick="set({activeOats:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Overnight Collection</button>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${oa.emoji} ${oa.name}</h1>
        <div style="font-size:11px;color:#30c090;font-style:italic;">~${oa.kcal*mult} kcal · ${mult} serving${mult>1?"s":""} ${oa.costPP?`· ~R${oa.costPP*mult} (R${oa.costPP}/pp)`:''}</div>
      </div>
      <div class="content">
        <div style="margin-bottom:12px;">${oa.badges.map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:12px;font-size:10px;color:#30a070;padding:3px 8px;margin:2px;display:inline-block;">${b}</span>`).join("")}</div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:4px;">Ingredients</div>
          <div style="font-size:10px;color:#208060;margin-bottom:10px;">Per person → total for ${mult} serving${mult>1?"s":""}</div>
          ${oa.base300.map((ing,i)=>{
            const amtMatch = ing.a.match(/^([\d.]+)\s*(g|ml)/);
            let totalStr = '';
            if(amtMatch){
              const pp = parseFloat(amtMatch[1]);
              const unit = amtMatch[2];
              const total = Math.round(pp * mult * 10) / 10;
              if(unit==='g'&&total>=1000) totalStr = (total/1000).toFixed(1)+'kg';
              else if(unit==='ml'&&total>=1000) totalStr = (total/1000).toFixed(1)+'L';
              else totalStr = total+unit;
            }
            return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:${i<oa.base300.length-1?"1px solid #1a2a25":"none"};gap:8px;">
              <span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span>
              <div style="text-align:right;flex-shrink:0;">
                <span style="font-size:12px;color:#60d0a0;">${ing.a}</span>
                ${totalStr?`<span style="font-size:13px;color:#f5c842;font-weight:bold;margin-left:8px;">${totalStr} total</span>`:''}
              </div>
            </div>`;
          }).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Method</div>
          ${oa.method.map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div class="step-num" style="background:#0a2018;border:1px solid #30c090;color:#30c090;">${i+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;"><div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div><p style="font-size:13px;color:#c8b898;line-height:1.6;">${oa.tip}</p></div>
        ${(()=>{
          const _inPlan = (S.healthPlan||[]).some(x=>x.id===oa.id);
          return isPro ? `<button onclick="set({healthPlan:_inPlan?(S.healthPlan||[]).filter(x=>x.id!==oa.id):[...(S.healthPlan||[]),{id:oa.id,name:oa.name,emoji:oa.emoji,servings:mult,type:'oats',kcal:oa.kcal,shopping:oa.shopping||[]}]})" style="width:100%;padding:13px;background:${_inPlan?'#0a3020':'#0f1a18'};border:2px solid ${_inPlan?'#30c090':'#1a4035'};border-radius:10px;color:${_inPlan?'#40d0a0':'#208060'};font-size:14px;cursor:pointer;margin-bottom:10px;">${_inPlan?'✓ In My Plan — tap to remove':'+ Add to My Plan'}</button>` : `<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:10px;text-align:center;color:#208060;font-size:12px;margin-bottom:10px;">👑 Add to Plan — Pro feature</div>`;
        })()}
        <button onclick="set({activeOats:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Overnight Collection</button>
      </div>
    </div>`;
  }

  if(activeMuffin){
    const mu=activeMuffin;
    const batches=S.servings||1;
    const totalMuffins=mu.makes*batches;
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
        <button onclick="set({activeMuffin:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Muffins</button>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${mu.emoji} ${mu.name}</h1>
        <div style="font-size:11px;color:#30c090;font-style:italic;">~${mu.kcal} kcal each · Makes ${totalMuffins} muffins ${mu.costPP?`· ~R${mu.costPP} per muffin`:''}</div>
      </div>
      <div class="content">
        <div style="margin-bottom:12px;">${mu.badges.map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:12px;font-size:10px;color:#30a070;padding:3px 8px;margin:2px;display:inline-block;">${b}</span>`).join("")}</div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:4px;">Ingredients</div>
          <div style="font-size:10px;color:#208060;margin-bottom:10px;">Per muffin → full batch of ${mu.makes}</div>
          ${mu.base300.map((ing,i)=>{
            const parts = ing.a.split('·');
            return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:${i<mu.base300.length-1?"1px solid #1a2a25":"none"};gap:8px;">
              <span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span>
              <div style="text-align:right;flex-shrink:0;">
                ${parts.length>1
                  ? `<span style="font-size:11px;color:#60d0a0;">${parts[0].trim()}</span><span style="font-size:13px;color:#f5c842;font-weight:bold;margin-left:6px;">${parts[1].trim()}</span>`
                  : `<span style="font-size:13px;color:#40d0a0;font-weight:bold;">${ing.a}</span>`}
              </div>
            </div>`;
          }).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Method</div>
          ${mu.method.map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div class="step-num" style="background:#0a2018;border:1px solid #30c090;color:#30c090;">${i+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;"><div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div><p style="font-size:13px;color:#c8b898;line-height:1.6;">${mu.tip}</p></div>
        ${(()=>{
          const _inPlan = (S.healthPlan||[]).some(x=>x.id===mu.id);
          return isPro ? `<button onclick="set({healthPlan:_inPlan?(S.healthPlan||[]).filter(x=>x.id!==mu.id):[...(S.healthPlan||[]),{id:mu.id,name:mu.name,emoji:mu.emoji,servings:batches,type:'muffin',kcal:mu.kcal,makes:mu.makes,shopping:mu.shopping||[]}]})" style="width:100%;padding:13px;background:${_inPlan?'#0a3020':'#0f1a18'};border:2px solid ${_inPlan?'#30c090':'#1a4035'};border-radius:10px;color:${_inPlan?'#40d0a0':'#208060'};font-size:14px;cursor:pointer;margin-bottom:10px;">${_inPlan?'✓ In My Plan — tap to remove':'+ Add to My Plan'}</button>` : `<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:10px;text-align:center;color:#208060;font-size:12px;margin-bottom:10px;">👑 Add to Plan — Pro feature</div>`;
        })()}
        <button onclick="set({activeMuffin:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Muffins</button>
      </div>
    </div>`;
  }

  if(activeRaw){
    const rw=activeRaw, mult=S.servings||1;
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
        <button onclick="set({activeRaw:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Raw Foods</button>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${rw.emoji} ${rw.name}</h1>
        <div style="font-size:11px;color:#30c090;font-style:italic;">~${rw.kcal*mult} kcal · ${mult} serving${mult>1?"s":""} ${rw.costPP?`· ~R${rw.costPP*mult} (R${rw.costPP}/pp)`:''}</div>
      </div>
      <div class="content">
        <div style="margin-bottom:12px;">${rw.badges.map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:12px;font-size:10px;color:#30a070;padding:3px 8px;margin:2px;display:inline-block;">${b}</span>`).join("")}</div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Ingredients</div>
          ${rw.base300.map((ing,i)=>{
              if(ing.n.startsWith('—')) return `<div style="font-size:10px;letter-spacing:1px;color:#208060;text-transform:uppercase;margin:10px 0 6px;padding-top:8px;border-top:1px solid #1a2a25;">${ing.n.replace('—','').trim()}</div>`;
              const parts = ing.a.split('·');
              return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:${i<rw.base300.length-1?"1px solid #1a2a25":"none"};gap:8px;">
                <span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span>
                <div style="text-align:right;flex-shrink:0;">
                  ${parts.length>1
                    ? `<span style="font-size:11px;color:#60d0a0;">${parts[0].trim()}</span><span style="font-size:13px;color:#f5c842;font-weight:bold;margin-left:6px;">${parts[1].trim()}</span>`
                    : `<span style="font-size:13px;color:#40d0a0;font-weight:bold;">${ing.a}</span>`}
                </div>
              </div>`;
            }).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Method</div>
          ${rw.method.map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div class="step-num" style="background:#0a2018;border:1px solid #30c090;color:#30c090;">${i+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join("")}
        </div>
        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;"><div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div><p style="font-size:13px;color:#c8b898;line-height:1.6;">${rw.tip}</p></div>
        ${(()=>{
          const _inPlan = (S.healthPlan||[]).some(x=>x.id===rw.id);
          return isPro ? `<button onclick="set({healthPlan:_inPlan?(S.healthPlan||[]).filter(x=>x.id!==rw.id):[...(S.healthPlan||[]),{id:rw.id,name:rw.name,emoji:rw.emoji,servings:mult,type:'raw',kcal:rw.kcal,shopping:rw.shopping||[]}]})" style="width:100%;padding:13px;background:${_inPlan?'#0a3020':'#0f1a18'};border:2px solid ${_inPlan?'#30c090':'#1a4035'};border-radius:10px;color:${_inPlan?'#40d0a0':'#208060'};font-size:14px;cursor:pointer;margin-bottom:10px;">${_inPlan?'✓ In My Plan — tap to remove':'+ Add to My Plan'}</button>` : `<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:10px;text-align:center;color:#208060;font-size:12px;margin-bottom:10px;">👑 Add to Plan — Pro feature</div>`;
        })()}
        <button onclick="set({activeRaw:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Raw Foods</button>
      </div>
    </div>`;
  }

  if(activeSmoothie){
    const sm = activeSmoothie;
    const mult = S.servings||1;
    const isPro = tierAllows('pro');
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#0f1a18;border-bottom:1px solid ${sm.colour||'#30c090'};padding:14px 20px;">
        <button onclick="set({activeSmoothie:null})" style="background:none;border:none;color:${sm.colour||'#30c090'};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${sm.emoji||'🥤'} ${sm.name}</h1>
        <div style="font-size:11px;color:${sm.colour||'#30c090'};">~${sm.kcal*mult} kcal · ${mult} serving${mult>1?'s':''} ${sm.costPP?'· ~R'+(sm.costPP*mult)+' (R'+sm.costPP+'/pp)':''}</div>
      </div>
      <div class="content">
        <div style="margin-bottom:12px;">${(sm.badges||[]).map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:12px;font-size:10px;color:#30a070;padding:3px 8px;margin:2px;display:inline-block;">${b}</span>`).join('')}</div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;background:#0f1a18;border:1px solid #1a3028;border-radius:10px;padding:12px;">
          <button onclick="set({servings:Math.max(1,S.servings-1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;cursor:pointer;">−</button>
          <div style="flex:1;text-align:center;">
            <div style="font-size:32px;color:#40d0a0;font-weight:bold;">${mult}</div>
            <div style="font-size:10px;color:#208060;">servings</div>
          </div>
          <button onclick="set({servings:Math.min(50,S.servings+1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;cursor:pointer;">+</button>
        </div>

        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Ingredients — ${mult} serving${mult>1?'s':''}</div>
          ${(sm.base300||[]).map(ing=>{
            const m2 = (ing.a||'').match(/^([\d.]+)\s*(g|ml)/);
            let totalStr = '';
            if(m2){
              const pp=parseFloat(m2[1]), unit=m2[2], total=Math.round(pp*mult*10)/10;
              totalStr = (unit==='g'&&total>=1000)?(total/1000).toFixed(1)+'kg':(unit==='ml'&&total>=1000)?(total/1000).toFixed(1)+'L':total+unit;
            }
            return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1a2a25;">
              <span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span>
              <div style="text-align:right;flex-shrink:0;">
                <span style="font-size:12px;color:#60d0a0;">${ing.a}</span>
                ${totalStr?`<span style="font-size:13px;color:#f5c842;font-weight:bold;margin-left:8px;">${totalStr}</span>`:''}
              </div>
            </div>`;
          }).join('')}
        </div>

        <div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:14px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:10px;">Method</div>
          ${(sm.method||[]).map((step,si)=>`<div style="display:flex;gap:10px;margin-bottom:10px;">
            <div style="width:24px;height:24px;border-radius:50%;background:#0a2018;border:1px solid #30c090;color:#30c090;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${si+1}</div>
            <p style="margin:2px 0 0;font-size:13px;color:#c8c0b0;line-height:1.7;">${step}</p>
          </div>`).join('')}
        </div>

        ${sm.tip?`<div style="background:#0a1808;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-bottom:12px;">
          <span style="color:#30c090;font-size:11px;">💡 TIP: </span><span style="font-size:12px;color:#80c090;">${sm.tip}</span>
        </div>`:''}

        ${isPro?`<button onclick="(function(){const sm=S.activeSmoothie;const mult=S.servings||1;const lines=(sm.shopping||sm.base300||[]).map(i=>{const raw=(i.pp||parseFloat((i.a||'').match(/[\d.]+/)||0))*mult;const u=i.u||(i.a||'').replace(/[\d.]+/,'').trim()||'';return '• '+i.n+': '+((raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L'):(Math.round(raw*10)/10)+u);}).join('\n');window.open('https://wa.me/?text='+encodeURIComponent('🥤 *'+sm.name+'*\nFor '+mult+' serving'+(mult>1?'s':'')+'\n\n'+lines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');})()" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Shopping List via WhatsApp</button>`:''}

        <button onclick="set({activeSmoothie:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Health Hub</button>
      </div>
    </div>`;
  }

  const VITAL_CATS = [
    {id:"freshjuice",      label:"🍋 Fresh Juice",        desc:"Cold-pressed & freshly squeezed"},
    {id:"smoothie",        label:"🥤 Smoothies",           desc:"Blended & nourishing"},
    {id:"oats",            label:"🌙 Overnight Collection", desc:"Overnight oats & warm bowls"},
    {id:"muffins",         label:"🧁 Muffins",             desc:"Healthy bakes"},
    {id:"raw",             label:"🥗 Raw Foods",           desc:"Unprocessed snacks & meals"},
    {id:"fermented",       label:"🫙 Fermented Foods",     desc:"Probiotics & living cultures"},
    {id:"keto",            label:"🥑 Keto / Low-Carb",     desc:"Fat-fuelled, carb-free"},
    {id:"weightloss",      label:"🥗 Weight Loss",         desc:"Low-cal, high-satisfaction"},
    {id:"highprotein",     label:"💪 High-Protein",        desc:"Build and recover"},
    {id:"plantbased",      label:"🌱 Plant-Based",         desc:"Vegan & whole-food"},
    {id:"guthealth",       label:"🦠 Gut Health",          desc:"Fibre, prebiotics & probiotics"},
    {id:"diabetic",        label:"🩸 Diabetic-Friendly",   desc:"Low GI, blood-sugar balanced"},
    {id:"antiinflam",      label:"🌿 Anti-Inflammatory",   desc:"Reduce inflammation naturally"},
    {id:"immunity",        label:"🛡️ Immunity Boost",      desc:"Fortify from the inside"},
  ];

  const vc = vitalCat;

  // Shared per-person / serving counter used across all Health Hub tabs
  const isMuffins = vc==="muffins";
  const counterLabel = isMuffins ? "batches" : (S.servings===1?"person":"persons");
  const counterMin  = 1;
  const hubCounter = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;background:#0f1a18;border:1px solid #1a3028;border-radius:10px;padding:12px;">
      <button onclick="set({servings:Math.max(${counterMin},S.servings-1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;cursor:pointer;">−</button>
      <div style="flex:1;text-align:center;">
        <div style="font-size:32px;color:#40d0a0;font-weight:bold;">${S.servings}</div>
        <div style="font-size:10px;color:#208060;">${counterLabel}</div>
      </div>
      <button onclick="set({servings:Math.min(50,S.servings+1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;cursor:pointer;">+</button>
    </div>`;

  const healthHowOpen = S.healthHowOpen || false;

  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#0a1a10 0%,#0f2818 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(4,14,8,0.3) 0%,rgba(4,14,8,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #208060;border-radius:20px;color:#30c090;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🌿 Health Hub</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#60c090;font-style:italic;">Juices · Smoothies · Oats · Raw food · Fermented · Meal plans</p>
        <div style="display:flex;align-items:center;background:rgba(8,24,16,0.85);border:1px solid #208060;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#30c090;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search recipes, ingredients…"
            oninput="set({healthSearch:this.value})"
            value="${S.healthSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#c0e8d0;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.healthSearch?`<button onclick="set({healthSearch:''})" style="background:none;border:none;color:#208060;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + SERVINGS SLIDER ══ -->
    <div style="background:#0f1a18;border-bottom:1px solid #1a3028;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">

        <div style="flex:1;">
          <button onclick="set({healthHowOpen:!S.healthHowOpen})"
            style="background:none;border:none;color:#30c090;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${healthHowOpen?'▲':'▼'} How it works
          </button>
          ${healthHowOpen?`
            <div onclick="set({healthHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#0a1a10;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#90c0a0;line-height:1.6;">
              <strong style="color:#30c090;">1. Pick a category</strong> — Juices, Smoothies, Oats, Muffins, Raw or Fermented.<br>
              <strong style="color:#30c090;">2. Set servings</strong> — all ingredient quantities scale automatically.<br>
              <strong style="color:#30c090;">3. Add to My Plan</strong> — build your weekly health routine.<br>
              <strong style="color:#30c090;">4. Generate shopping list</strong> — everything you need in one list.<br>
              <span style="color:#208060;font-size:11px;">All recipes use grams and ml — no guesswork.</span>
            </div>
          `:''}
        </div>

        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="set({servings:Math.max(1,S.servings-1)})"
            style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#30d090;font-weight:bold;line-height:1;">${S.servings||1}</div>
            <div style="font-size:9px;color:#208060;letter-spacing:1px;text-transform:uppercase;">servings</div>
          </div>
          <button onclick="set({servings:Math.min(50,S.servings+1)})"
            style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>

      <!-- Tab strip -->
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;margin-top:12px;-webkit-overflow-scrolling:touch;">
        ${VITAL_CATS.map(c=>`<button onclick="set({vitalCat:'${c.id}',extHealthRecipe:null})"
          style="flex-shrink:0;padding:7px 12px;border-radius:20px;border:1px solid ${vc===c.id?'#20c080':'#1a3028'};background:${vc===c.id?'#0a2018':'transparent'};color:${vc===c.id?'#30d090':'#408060'};font-size:11px;cursor:pointer;font-family:Georgia,serif;white-space:nowrap;">${c.label}</button>`).join("")}
      </div>
    </div>

    <div class="content">
    ${vc==="freshjuice"?`
      <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Cold-pressed and freshly squeezed — pure fruit and veg 🍋</p>
      ${hubCounter}
            ${renderHealthList(FRESH_JUICES,"juice","healthOpenJuice",isPro)}
    `:""}
    ${vc==="smoothie"?`
      ${hubCounter}
      <div class="pill-row">
        ${SMOOTHIE_CATS.map(c=>`<button class="pill" onclick="set({smoothieCat:'${c.id}'})" style="background:${S.smoothieCat===c.id?"#0a2018":"transparent"};border-color:${S.smoothieCat===c.id?"#20c080":"#1a3028"};color:${S.smoothieCat===c.id?"#30d090":"#408060"};">${c.emoji} ${c.label}</button>`).join("")}
      </div>
      ${renderHealthList(SMOOTHIES.filter(sm=>S.smoothieCat==="all"||sm.cat===S.smoothieCat),"smoothie","healthOpenSmoothie",isPro)}
    `:""}
    ${vc==="oats"?`
      <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Prep the night before — wake up to a ready breakfast 🌅</p>
      ${hubCounter}
      ${renderHealthList(OVERNIGHT_OATS,"oats","healthOpenOats",isPro)}
    `:""}
    ${vc==="muffins"?`
      <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">No refined sugar · Wholesome ingredients · Meal prep friendly 🧁</p>
      ${hubCounter}
      ${renderHealthList(HEALTHY_MUFFINS,"muffin","healthOpenMuffin",isPro)}
    `:""}
    ${vc==="raw"?`
      <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Unprocessed. Enzyme-rich. Real food as nature intended 🌿</p>
      ${hubCounter}
      ${renderHealthList(RAW_AND_REAL,"raw","healthOpenRaw",isPro)}
    `:""}
    ${vc==="fermented"?`
      ${fermentedTabHTML()}
    `:""}
    ${vc==="myplan"?renderHealthMyPlan(isPro):""}
    ${(()=>{
      // Extended health categories — check if extHealthRecipe is set first (recipe detail view)
      if(S.extHealthRecipe && EXT_HEALTH_MAP[vc]) {
        return extHealthRecipeHTML(S.extHealthRecipe, S.servings||1);
      }
      const extCat = EXT_HEALTH_MAP[vc];
      if(!extCat) return '';
      return `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">${extCat.desc}</p>
        ${hubCounter}
        ${renderExtHealthList(extCat.recipes, isPro)}
      `;
    })()}
    </div>
  </div>`;
};


// ── FERMENTED TAB RENDER ──────────────────────────────────────────
function fermentedTabHTML(){
  const af = S.activeFermented;
  const batches = S.fermentBatches||1;
  const fermentPlan = S.fermentPlan||[];

  // ── RECIPE VIEW ──
  if(af){
    const ri = FERMENTED_RECIPES.findIndex(x=>x.id===af.id);
    const inPlan = fermentPlan.includes(af.id);

    // Scale ingredients by batches
    function fmtAmt(raw, unit){
      if(!raw&&raw!==0) return unit||'';
      if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
      return Math.round(raw*10)/10+(unit||'');
    }

    return `<div>
      <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
        <button onclick="setQuiet({activeFermented:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Fermented Foods</button>
        <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">${af.emoji} ${af.name}</h1>
        <div style="font-size:11px;color:#30c090;font-style:italic;">${af.batchLabel||'Per batch'}</div>
      </div>
      <div class="content">
        ${af.saltNote?`<div style="background:#0a2018;border:1px solid #1a4030;border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:12px;color:#40d0a0;">⚖️ ${af.saltNote}</div>`:''}

        <!-- Batch scaler -->
        <div style="display:flex;align-items:center;gap:12px;background:#0f1a18;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:11px;color:#30c090;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Batches</div>
          <button onclick="setQuiet({fermentBatches:Math.max(1,S.fermentBatches-1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #30c090;color:#30c090;font-size:18px;cursor:pointer;">−</button>
          <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${batches}</span>
          <button onclick="setQuiet({fermentBatches:Math.min(10,S.fermentBatches+1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #30c090;color:#30c090;font-size:18px;cursor:pointer;">+</button>
          <div style="font-size:11px;color:#206050;flex:1;">${af.batchLabel||'1 batch'} × ${batches}</div>
        </div>

        <!-- Ingredients -->
        <div style="background:#0f1a18;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#208060;text-transform:uppercase;margin-bottom:8px;">Ingredients — ${batches} batch${batches>1?'es':''}</div>
          ${(af.base300||[]).map(i=>{
            if(!i.pp) return `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #1a2818;"><span style="font-size:13px;color:#c0d4b0;">${i.n}</span><span style="font-size:12px;color:#406050;font-style:italic;">${i.a||'as needed'}</span></div>`;
            const raw = i.pp * batches;
            return `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #1a2818;">
              <span style="font-size:13px;color:#c0d4b0;">${i.n}</span>
              <span style="font-size:13px;color:#f5c842;font-weight:bold;">${fmtAmt(raw,i.u)}</span>
            </div>`;
          }).join('')}
        </div>

        <!-- Method -->
        <div style="background:#0f1a18;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#208060;text-transform:uppercase;margin-bottom:8px;">Method</div>
          ${(af.method||[]).map((s,i)=>`<div style="display:flex;gap:10px;margin-bottom:10px;"><div style="min-width:22px;height:22px;border-radius:50%;background:#0a2018;border:1px solid #20c080;display:flex;align-items:center;justify-content:center;font-size:11px;color:#20c080;flex-shrink:0;">${i+1}</div><div style="font-size:13px;color:#c0d0b0;line-height:1.6;">${s}</div></div>`).join('')}
        </div>

        ${af.tip?`<div style="background:#0a1a10;border:1px solid #1a4020;border-radius:10px;padding:10px 12px;margin-bottom:12px;"><span style="color:#20d080;font-size:11px;">💡 TIP: </span><span style="font-size:12px;color:#90d090;">${af.tip}</span></div>`:''}
        ${af.benefits?`<div style="font-size:11px;color:#208060;font-style:italic;padding:8px 0;margin-bottom:8px;">🌿 ${af.benefits}</div>`:''}

        <!-- Add to plan -->
        <button onclick="setQuiet({fermentPlan:toggle(S.fermentPlan||[],'${af.id}'),activeFermented:null})" style="width:100%;padding:14px;border-radius:10px;border:2px solid ${inPlan?'#30c090':'#1a4030'};background:${inPlan?'#0a2018':'#0f1a18'};color:${inPlan?'#40d0a0':'#206050'};font-size:14px;cursor:pointer;margin-bottom:10px;">${inPlan?'✓ In My Plan — tap to remove':'+ Add to My Fermented Plan'}</button>

        <button onclick="window.print()" style="width:100%;padding:12px;margin-bottom:8px;border-radius:10px;border:2px solid #4060a0;background:#0f1020;color:#8090d0;font-size:13px;cursor:pointer;">🖨️ Print Recipe</button>
        <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🫙 *${af.name}*\n${af.batchLabel||'1 batch'}\n\n'+(af.base300||[]).filter(i=>i.pp).map(i=>{const r=i.pp*${batches};return '• '+i.n+': '+((r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||''));}).join('\n')+'\n\nMade with Tinza 😊 tinza.netlify.app'),'_blank')" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:20px;">📱 Share via WhatsApp</button>
      </div>
    </div>`;
  }

  // ── MY PLAN VIEW ──
  if(S.fermentView==='myplan'){
    const planRecipes = FERMENTED_RECIPES.filter(r=>fermentPlan.includes(r.id));

    function fmtS(raw,unit){
      if(!raw) return unit||'';
      if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
      return Math.round(raw*10)/10+(unit||'');
    }

    const map = {};
    planRecipes.forEach(r=>{
      (r.base300||[]).forEach(i=>{
        if(!i||!i.n||!i.pp) return;
        const key = i.n.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
        if(map[key]){ map[key].raw+=i.pp; if(!map[key].dishes.includes(r.name)) map[key].dishes.push(r.name); }
        else map[key]={name:i.n,raw:i.pp,unit:i.u,dishes:[r.name]};
      });
    });
    const allItems = Object.values(map).sort((a,b)=>shopSortKey(a.name).localeCompare(shopSortKey(b.name)));
    const waText = '🫙 *Fermented Foods Shopping List*\n\n'+allItems.map(i=>'• '+i.name+': '+fmtS(i.raw,i.unit)).join('\n');

    return `<div>
      <div style="background:#0f1a18;border-bottom:1px solid #207060;padding:14px 20px;">
        <button onclick="setQuiet({fermentView:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Recipes</button>
        <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">📋 My Fermented Plan</h1>
        <p style="margin:0;font-size:11px;color:#208060;">${planRecipes.length} recipe${planRecipes.length!==1?'s':''} selected · all scaled per single batch</p>
      </div>
      <div class="content">
        <div style="background:#0f1a18;border:1px solid #1a4030;border-radius:10px;padding:4px 12px;margin-bottom:14px;">
          ${planRecipes.length===0?'<p style="font-size:13px;color:#1a4030;font-style:italic;padding:8px 0;">No recipes selected yet.</p>':
            planRecipes.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #1a2818;">
              <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:20px;">${r.emoji}</span><div><div style="font-size:14px;color:#e0d4b8;">${r.name}</div><div style="font-size:11px;color:#30c090;">${r.batchLabel||'1 batch'}</div></div></div>
              <button onclick="setQuiet({fermentPlan:(S.fermentPlan||[]).filter(x=>x!=='${r.id}')})" style="background:none;border:none;color:#406050;font-size:11px;cursor:pointer;">✕ Remove</button>
            </div>`).join('')}
        </div>
        <div style="font-size:10px;letter-spacing:2px;color:#208060;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List — 1 batch each</div>
        <div style="background:#0f1a18;border:1px solid #1a4030;border-radius:10px;padding:4px 12px;margin-bottom:8px;">
          ${allItems.length===0?'<p style="font-size:13px;color:#1a4030;font-style:italic;padding:8px 0;">Add recipes to generate list.</p>':
            allItems.map(i=>{
              const key=i.name.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
              const inCart=(S.fingerShopCart||{})[key];
              return `<div onclick="fingerShopToggle('${key}')" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #1a2818;cursor:pointer;opacity:${inCart?0.35:1};">
                <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${inCart?'#30c090':'#1a4030'};background:${inCart?'#30c090':'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#0f0e0c;">${inCart?'✓':''}</div>
                <span style="flex:1;font-size:13px;color:${inCart?'#1a3020':'#c0d4b0'};text-decoration:${inCart?'line-through':'none'};">${i.name}${i.dishes.length>1?` <span style="font-size:10px;color:#206050;">· ${i.dishes.length} recipes</span>`:''}</span>
                <span style="font-size:13px;color:${inCart?'#1a3020':'#f5c842'};font-weight:bold;">${fmtS(i.raw,i.unit)}</span>
              </div>`;
            }).join('')}
        </div>
        <button onclick="window.print()" style="width:100%;padding:12px;margin-bottom:8px;border-radius:10px;border:2px solid #4060a0;background:#0f1020;color:#8090d0;font-size:13px;cursor:pointer;">🖨️ Print / Save as PDF</button>
        <a href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" style="display:block;width:100%;padding:13px;margin-bottom:8px;border-radius:10px;border:2px solid #25d366;background:#0a1a0a;color:#25d366;font-size:13px;text-align:center;text-decoration:none;box-sizing:border-box;">📲 Send Shopping List via WhatsApp</a>
        <button onclick="set({fermentPlan:[],fermentView:null})" style="width:100%;padding:12px;margin-bottom:20px;border-radius:10px;border:2px solid #30c090;background:#0a1a10;color:#40d0a0;font-size:13px;cursor:pointer;">🔄 Start a New Plan</button>
      </div>
    </div>`;
  }

  // ── LIST VIEW ──
  const planBtn = fermentPlan.length>0 ? `
    <div onclick="setQuiet({fermentView:'myplan',activeFermented:null})"
      style="position:sticky;bottom:12px;margin:12px 0;background:#0a2018;border:2px solid #30c090;border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:14px;color:#40d0a0;font-weight:bold;">📋 Go to My Plan & Shopping List →</div>
        <div style="font-size:11px;color:#1a5030;margin-top:2px;">${fermentPlan.length} recipe${fermentPlan.length>1?'s':''} selected</div>
      </div>
      <span style="font-size:22px;">🛒</span>
    </div>` : '';

  return `
    <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Living foods. Ancient wisdom. Modern gut science. 🫙 All recipes scale per batch.</p>
    ${FERMENTED_RECIPES.map((r,i)=>`
      <div style="background:#0f1a18;border:1px solid ${fermentPlan.includes(r.id)?'#30c090':'#1a4035'};border-radius:12px;padding:14px;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:22px;height:22px;border-radius:5px;border:2px solid ${fermentPlan.includes(r.id)?'#30c090':'#1a4035'};background:${fermentPlan.includes(r.id)?'#30c090':'transparent'};display:flex;align-items:center;justify-content:center;font-size:12px;color:#0f0e0c;cursor:pointer;flex-shrink:0;" onclick="setQuiet({fermentPlan:toggle(S.fermentPlan||[],'${r.id}')})">${fermentPlan.includes(r.id)?'✓':''}</div>
          <div style="width:40px;height:40px;border-radius:10px;background:#0a2018;border:1px solid #1a4030;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${r.emoji}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:15px;color:#e0d4b8;margin-bottom:2px;">${r.name}</div>
            <div style="font-size:11px;color:#30c090;margin-bottom:4px;">${r.batchLabel||'per batch'} · ${r.saltNote||''}</div>
            <div>${(r.badges||[]).map(b=>`<span style="background:#0a2018;border:1px solid #1a4030;border-radius:10px;font-size:9px;color:#30a070;padding:2px 6px;margin:1px;display:inline-block;">${b}</span>`).join('')}</div>
          </div>
          <button onclick="setQuiet({activeFermented:FERMENTED_RECIPES[${i}],fermentBatches:S.fermentBatches||1})" style="background:#1a4030;border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#30c090;cursor:pointer;white-space:nowrap;flex-shrink:0;">Recipe →</button>
        </div>
      </div>`).join('')}
    <div style="background:#0f1a18;border:1px solid #1a4030;border-radius:12px;padding:14px;margin-top:8px;margin-bottom:60px;">
      <div style="font-size:13px;color:#40d0a0;margin-bottom:10px;">🔍 Fermentation Troubleshooting</div>
      ${FERMENT_TROUBLESHOOT.map(t=>`<div style="margin-bottom:10px;"><div style="font-size:12px;color:#e0d4b8;font-weight:bold;margin-bottom:3px;">${t.q}</div><div style="font-size:11px;color:#90d090;line-height:1.5;">${t.a}</div></div>`).join('')}
    </div>
    ${planBtn}`;
}


// ── BUFFET STEP FLOW ──────────────────────────────────────────────
const BC = '#d04080'; // buffet colour
const BCbg = '#1a0814';

