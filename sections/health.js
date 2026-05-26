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
  if(type==='juice') item = (typeof FRESH_JUICES!=='undefined'?FRESH_JUICES:[]).find(x=>x.id===id);
  else if(type==='smoothie') item = (typeof SMOOTHIES!=='undefined'?SMOOTHIES:[]).find(x=>x.id===id);
  else if(type==='oats') item = (typeof OVERNIGHT_OATS!=='undefined'?OVERNIGHT_OATS:[]).find(x=>x.id===id);
  else if(type==='muffin') item = (typeof HEALTHY_MUFFINS!=='undefined'?HEALTHY_MUFFINS:[]).find(x=>x.id===id);
  else if(type==='raw') item = (typeof RAW_AND_REAL!=='undefined'?RAW_AND_REAL:[]).find(x=>x.id===id);
  if(!item) return;
  set({healthPlan:[...plan,{id,name:item.name,emoji:item.emoji,type,kcal:item.kcal,shopping:item.shopping||item.base300||[],servings}]});
}

function healthToggleExtById(id){
  const plan = S.healthPlan||[];
  const inPlan = plan.some(x=>x.id===id);
  if(inPlan){ set({healthPlan:plan.filter(x=>x.id!==id)}); return; }
  const allExt = [
    ...(typeof KETO_RECIPES!=='undefined'?KETO_RECIPES:[]),
    ...(typeof WEIGHTLOSS_RECIPES!=='undefined'?WEIGHTLOSS_RECIPES:[]),
    ...(typeof HIGHPROTEIN_RECIPES!=='undefined'?HIGHPROTEIN_RECIPES:[]),
    ...(typeof PLANTBASED_RECIPES!=='undefined'?PLANTBASED_RECIPES:[]),
    ...(typeof VEGETARIAN_RECIPES!=='undefined'?VEGETARIAN_RECIPES:[]),
    ...(typeof GUTHEALTH_RECIPES!=='undefined'?GUTHEALTH_RECIPES:[]),
    ...(typeof DIABETIC_RECIPES!=='undefined'?DIABETIC_RECIPES:[]),
    ...(typeof ANTIINFLAM_RECIPES!=='undefined'?ANTIINFLAM_RECIPES:[]),
    ...(typeof IMMUNITY_RECIPES!=='undefined'?IMMUNITY_RECIPES:[]),
  ];
  const item = allExt.find(x=>x.id===id);
  if(!item) return;
  const srv = S.servings||1;
  set({healthPlan:[...plan,{id,name:item.name,emoji:item.emoji,type:'health',kcal:item.kcal,shopping:item.base300||[],servings:srv}]});
}

function renderHealthList(items, type, openFn, isPro){
  return items.map(function(item){
    var canView = tierAllows(item.tier||'free');
    var sel = (S.healthPlan||[]).some(function(x){return x.id===item.id;});
    var disabled = !canView;
    var srv = S.servings||1;
    var info = type==='juice' ? (item.kcal*srv)+' kcal \u00b7 '+(srv*300)+'ml'+(item.costPP?' \u00b7 ~R'+(item.costPP*srv)+'/pp':'')
      : type==='smoothie' ? (item.kcal*srv)+' kcal'+(item.costPP?' \u00b7 ~R'+(item.costPP*srv)+'/pp':'')
      : type==='oats' ? (item.kcal*srv)+' kcal'+(item.costPP?' \u00b7 ~R'+(item.costPP*srv)+'/pp':'')
      : type==='muffin' ? item.kcal+' kcal each \u00b7 '+(srv*(item.makes||12))+' muffins'
      : (item.kcal*srv)+' kcal';
    var onclk = disabled
      ? "alert('\ud83d\udc51 Upgrade to Pro to unlock')"
      : 'healthToggleById(\''+item.id+'\',\''+type+'\',S.servings)';
    var recipeBtn = disabled
      ? '<span style="font-size:10px;background:#1a1008;border:1px solid #c06020;border-radius:6px;color:#c08030;padding:3px 7px;">\ud83d\udc51 PRO</span>'
      : '<button onclick="event.stopPropagation();'+openFn+'(\''+item.id+'\')" style="background:#208060;border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe \u2192</button>';
    return '<div style="background:'+(sel?'#0a2018':disabled?'#0f0e0c':'#0f1a18')+';border:1px solid '+(sel?'#30c090':disabled?'#1a2018':'#1a4035')+';border-radius:10px;padding:12px;margin-bottom:6px;opacity:'+(disabled?0.45:1)+';">'
      +'<div style="display:flex;align-items:center;gap:10px;cursor:'+(disabled?'not-allowed':'pointer')+'" onclick="'+onclk+'">'
      +'<div style="width:22px;height:22px;border-radius:6px;background:'+(sel?'#30c090':'transparent')+';border:2px solid '+(sel?'#30c090':'#1a4035')+';display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#0f0e0c;">'+(sel?'\u2713':'')+'</div>'
      +'<span style="font-size:20px;">'+item.emoji+'</span>'
      +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:14px;color:'+(sel?'#f5e8cc':'#c0d4b0')+';font-weight:'+(sel?'bold':'normal')+';">'+item.name+'</div>'
        +'<div style="font-size:10px;color:'+(sel?'#30c090':'#406050')+';margin-top:2px;">'+info+'</div>'
      +'</div>'
      +'<div style="display:flex;align-items:center;flex-shrink:0;">'+recipeBtn+'</div>'
      +'</div></div>';
  }).join('');
}


function healthSharePlan(){
  var plan = S.healthPlan||[];
  var txt = plan.map(function(i){return i.emoji+' '+i.name+' ('+i.servings+' serving'+(i.servings!==1?'s':'')+')';}).join('\n');
  window.open('https://wa.me/?text='+encodeURIComponent('📋 *My Health Plan*\n\n'+txt+'\n\nFrom Tinza tinza.netlify.app'),'_blank');
}
function healthShareShoppingList(){
  var plan = S.healthPlan||[];
  var map = {};
  plan.forEach(function(item){
    (item.shopping||[]).forEach(function(ing){
      if(!ing||!ing.n||!ing.pp) return;
      var k = ing.n.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,20);
      var t = Math.round((ing.pp||0)*(item.servings||1)*10)/10;
      if(!map[k]){map[k]={n:ing.n,t:0,u:ing.u||''};}
      map[k].t += t;
    });
  });
  var lines = Object.values(map).map(function(i){
    var s = i.t>=1000&&i.u==='g'?(i.t/1000).toFixed(1)+'kg':i.t>=1000&&i.u==='ml'?(i.t/1000).toFixed(1)+'L':(Math.round(i.t*10)/10)+(i.u||'');
    return '• '+i.n+': '+s;
  }).join('\n');
  window.open('https://wa.me/?text='+encodeURIComponent('🛒 *Health Shopping List*\n\n'+lines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');
}
function healthRemoveFromPlan(id){
  set({healthPlan:(S.healthPlan||[]).filter(function(x){return x.id!==id;})});
}
function renderHealthMyPlan(isPro){
  const plan = S.healthPlan||[];
  const checked = S.checkedHealthItems||{};
  if(plan.length===0){
    return '<div style="text-align:center;padding:40px 20px;">'
      +'<div style="font-size:40px;margin-bottom:16px;">&#x1F4CB;</div>'
      +'<div style="font-size:16px;color:#40d0a0;margin-bottom:8px;">Your Health Plan is empty</div>'
      +'<div style="font-size:13px;color:#208060;margin-bottom:20px;">Tap any recipe checkbox to add to your plan</div>'
      +'<button onclick="set({vitalCat:null,healthGroup:null})" style="padding:12px 24px;background:#0a2018;border:2px solid #30c090;border-radius:10px;color:#40d0a0;font-size:14px;cursor:pointer;">← Browse Recipes</button>'
      +'</div>';
  }

  // Build shopping list from plan
  const shopMap = {};
  plan.forEach(function(item){
    var shoppingArr = item.shopping||[];
    shoppingArr.forEach(function(ing){
      if(!ing||!ing.n) return;
      var skip = ['water','ice','salt','pepper'].some(function(w){return ing.n.toLowerCase().indexOf(w)>=0;});
      if(skip) return;
      var total = Math.round(((ing.pp||0) * (item.servings||1)) * 10)/10;
      if(!total) return;
      var key = ing.n.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,20);
      if(shopMap[key]){ shopMap[key].total += total; }
      else { shopMap[key] = {name:ing.n, total:total, unit:ing.u||'', source:item.name, key:key}; }
    });
  });
  var shopItems = Object.values(shopMap).sort(function(a,b){return a.name.localeCompare(b.name);});

  var planHtml = plan.map(function(item){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #1a2a25;">'
      +'<div style="display:flex;align-items:center;gap:10px;">'
      +'<span style="font-size:20px;">'+item.emoji+'</span>'
      +'<div><div style="font-size:14px;color:#e0d4b8;">'+item.name+'</div>'
      +'<div style="font-size:11px;color:#30c090;margin-top:2px;">'+(item.servings||1)+' serving'+((item.servings||1)!==1?'s':'')+' · '+item.type+'</div></div></div>'
      +'<button onclick="healthRemoveFromPlan(\''+item.id+'\')" style="background:#0a2018;border:1px solid #1a4035;border-radius:6px;padding:4px 10px;color:#208060;font-size:11px;cursor:pointer;">Remove</button>'
      +'</div>';
  }).join('');

  var shopHtml = shopItems.length===0
    ? '<div style="color:#208060;font-size:12px;padding:8px 0;">Add recipes with ingredients to see your list</div>'
    : shopItems.map(function(item){
        var ck = checked['h_'+item.key] || false;
        var totalStr = item.total>=1000&&item.unit==='g'?(item.total/1000).toFixed(1)+'kg'
          :item.total>=1000&&item.unit==='ml'?(item.total/1000).toFixed(1)+'L'
          :Math.round(item.total*10)/10+(item.unit||'');
        return '<div onclick="healthToggleShopItem(&quot;h_'+item.key+'&quot;)" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #0a1a15;cursor:pointer;opacity:'+(ck?0.35:1)+';">'
          +'<div style="width:20px;height:20px;border-radius:4px;border:2px solid '+(ck?'#30c090':'#1a4035')+';background:'+(ck?'#30c090':'transparent')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+(ck?'<span style="color:#0f0e0c;font-size:11px;">&#x2713;</span>':'')+'</div>'
          +'<div style="flex:1;"><div style="font-size:13px;color:'+(ck?'#1a3028':'#e0d4b8')+';">'+item.name+'</div>'
          +'<div style="font-size:10px;color:#208060;">'+item.source+'</div></div>'
          +'<div style="font-size:13px;color:'+(ck?'#1a3028':'#f5c842')+';font-weight:bold;">'+totalStr+'</div>'
          +'</div>';
      }).join('');

  var totalKcal = plan.reduce(function(sum,i){return sum+(i.kcal||0)*(i.servings||1);},0);
  var waLines = shopItems.map(function(i){
    var t = i.total>=1000&&i.unit==='g'?(i.total/1000).toFixed(1)+'kg':i.total>=1000&&i.unit==='ml'?(i.total/1000).toFixed(1)+'L':Math.round(i.total*10)/10+(i.unit||'');
    return '• '+i.name+': '+t;
  }).join('\n');

  return '<div style="font-size:16px;color:#40d0a0;font-weight:bold;margin-bottom:4px;">&#x1F4CB; My Health Plan</div>'
    +'<div style="font-size:12px;color:#208060;margin-bottom:14px;">'+plan.length+' recipe'+(plan.length!==1?'s':'')+' selected</div>'

    +'<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:12px;margin-bottom:12px;">'+planHtml+'</div>'

    +(isPro?''
      +'<div style="background:#0f1a08;border:1px solid #208050;border-radius:10px;padding:14px;margin-bottom:12px;">'
      +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">'
      +'<div style="font-size:13px;color:#208060;">&#x1F525; Total calories</div>'
      +'<div style="font-size:22px;color:#40d0a0;font-weight:bold;">'+totalKcal+' <span style="font-size:12px;">kcal</span></div>'
      +'</div></div>'
      : '<div style="background:#0f1808;border:1px dashed #1a4020;border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;">'
      +'<div style="font-size:12px;color:#208060;">&#x1F525; Calorie counter — <strong style="color:#30c090;">Tinza Pro R99/month</strong></div></div>')

    +'<div style="font-size:10px;letter-spacing:2px;color:#30c090;text-transform:uppercase;margin-bottom:8px;">&#x1F6D2; Shopping List</div>'
    +(isPro
      ? '<div style="background:#0f1a18;border:1px solid #1a4035;border-radius:10px;padding:12px;margin-bottom:12px;">'
        +'<div style="font-size:11px;color:#208060;margin-bottom:8px;">Tap items you already have</div>'
        +shopHtml
        +(shopItems.length>0?'<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2818;display:flex;justify-content:space-between;">'
          +'<span style="font-size:11px;color:#208060;">'+shopItems.filter(function(i){return !checked['h_'+i.key];}).length+' of '+shopItems.length+' items remaining</span>'
          +'<button onclick="set({checkedHealthItems:{}})" style="background:none;border:none;color:#208060;font-size:11px;cursor:pointer;text-decoration:underline;">Reset all</button>'
          +'</div>':'')
        +'</div>'
      : '<div style="background:#0f1808;border:1px dashed #1a4020;border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;">'
        +'<div style="font-size:32px;margin-bottom:8px;">&#x1F512;</div>'
        +'<div style="font-size:14px;color:#208060;font-weight:bold;margin-bottom:6px;">Full Shopping List</div>'
        +'<div style="font-size:12px;color:#1a4030;margin-bottom:10px;line-height:1.6;">All ingredients combined, no duplicates</div>'
        +'<div style="font-size:13px;color:#30c090;font-weight:bold;">Unlock with Tinza Pro — R99/month</div></div>')

    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">'
    +'<button onclick="healthSharePlan()" style="padding:14px;border-radius:10px;cursor:pointer;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:12px;font-weight:bold;line-height:1.4;">&#x1F4F1; Share Plan<br><span style="font-size:9px;opacity:0.7;">Free</span></button>'
    +(isPro
      ? '<button onclick="healthShareShoppingList()" style="padding:14px;border-radius:10px;cursor:pointer;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:12px;font-weight:bold;line-height:1.4;">&#x1F4F1; Share + Shopping List<br><span style="font-size:9px;opacity:0.7;">Pro</span></button>'
      : '<button style="padding:14px;border-radius:10px;cursor:not-allowed;background:#0f0e0c;border:2px solid #1a2018;color:#1a4030;font-size:12px;line-height:1.4;">&#x1F512; Full Shopping List<br><span style="font-size:9px;">Pro only</span></button>')
    +'</div>'

    +(isPro?'<button onclick="window.print()" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#0a1a10;border:2px solid #30c090;color:#40d0a0;font-size:13px;font-weight:bold;margin-bottom:10px;">&#x1F5A8;&#xFE0F; Print / Save as PDF &#x1F451; Pro</button>':
      '<button style="width:100%;padding:13px;border-radius:10px;cursor:not-allowed;background:#0f0e0c;border:1px solid #1a2018;color:#1a4030;font-size:13px;margin-bottom:10px;">&#x1F512; Print / Save as PDF — Pro only</button>')

    +'<button onclick="set({healthPlan:[],checkedHealthItems:{},vitalCat:null,healthGroup:null})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#0a1a10;border:2px solid #30c090;color:#40d0a0;font-size:13px;margin-bottom:10px;font-weight:bold;">&#x1F504; Start a New Health Plan</button>'
    +'<button onclick="set({vitalCat:null,healthGroup:null})" style="width:100%;padding:12px;background:#0f1a18;border:1px solid #1a4035;border-radius:10px;color:#208060;font-size:13px;cursor:pointer;margin-bottom:20px;">&#8592; Back to Health Hub</button>';
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
  {id:'keto_egg_muffins',tier:'free', emoji:'🧁', name:'Spinach Mushroom Egg Muffins', kcal:300, feel:'Savoury, portable and filling — the keto breakfast that travels.',
   badges:['🥑 Keto','🥚 High-Protein','⚡ Meal Prep'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Fresh spinach (chopped)',pp:50,u:'g'},{n:'Mushrooms (diced)',pp:50,u:'g'},{n:'Cheddar cheese (grated)',pp:30,u:'g'},{n:'Heavy cream',pp:10,u:'ml'},{n:'Butter (for greasing)',pp:5,u:'g'}],
   method:['Preheat oven to 190°C. Grease a muffin tin with butter.','Sauté mushrooms and spinach in butter 3–4 minutes until softened.','Whisk eggs, heavy cream, cheese, salt, pepper and garlic powder.','Stir in sautéed vegetables. Divide into muffin cups. Bake 18–22 minutes until golden.'],
   tip:'Bake a large batch and refrigerate up to 4 days. Reheat in microwave or oven. Freeze up to 2 months.'},
  {id:'keto_shrimp',    tier:'free',  emoji:'🦐', name:'Garlic Butter Prawn Zoodles',  kcal:330, feel:'Light but decadent — butter-glossed prawns over silky zucchini ribbons.',
   badges:['🥑 Keto','🦐 Omega-3','⚡ 15 min'],
   base300:[{n:'Prawns (peeled, deveined)',pp:150,u:'g'},{n:'Zucchini/baby marrow (spiralised)',pp:150,u:'g'},{n:'Butter',pp:15,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Fresh parsley',pp:5,u:'g'}],
   method:['Heat olive oil and butter in a large pan over medium-high.','Add minced garlic and prawns — cook 2–3 minutes per side until pink.','Add zucchini, lemon juice and parsley — stir-fry 3–4 minutes until zucchini is tender-crisp.','Serve immediately hot.'],
   tip:'Use a large skillet for big batches. Not ideal for freezing — best eaten fresh.'},
  {id:'keto_chicken_salad',tier:'free',emoji:'🥗',name:'Chicken Avocado Bacon Salad',  kcal:400, feel:'Rich, satisfying and completely keto — the salad that replaced lunch forever.',
   badges:['🥑 Keto','🥓 High-Fat','🍗 Protein'],
   base300:[{n:'Cooked chicken breast (diced)',pp:120,u:'g'},{n:'Avocado (diced)',pp:75,u:'g'},{n:'Bacon (cooked, crumbled)',pp:40,u:'g'},{n:'Mixed greens',pp:50,u:'g'},{n:'Cherry tomatoes (halved)',pp:50,u:'g'},{n:'Olive oil',pp:15,u:'ml'},{n:'Apple cider vinegar',pp:5,u:'ml'}],
   method:['Cook and crumble bacon — dice cooked chicken.','Whisk olive oil, vinegar, salt and pepper for dressing.','In a bowl, combine greens, chicken, avocado, tomatoes and bacon.','Drizzle dressing and toss gently. Serve chilled.'],
   tip:'Prep components separately for gatherings — assemble fresh to prevent sogginess.'},
  {id:'keto_broccoli_soup',tier:'free',emoji:'🥦',name:'Creamy Broccoli Cheese Soup',  kcal:360, feel:'Velvety, rich and warming — all the comfort, none of the carbs.',
   badges:['🥑 Keto','🧀 Creamy','🥦 High-Fat'],
   base300:[{n:'Broccoli florets',pp:200,u:'g'},{n:'Heavy cream',pp:150,u:'ml'},{n:'Cheddar cheese (grated)',pp:40,u:'g'},{n:'Butter',pp:20,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Chicken or vegetable broth',pp:200,u:'ml'}],
   method:['Melt butter in a pot — sauté garlic 1 minute.','Add broccoli and broth — simmer 8–10 minutes until tender.','Stir in heavy cream and cheese until melted and smooth.','Blend partially with immersion blender for creaminess. Season and serve hot.'],
   tip:'Use a large pot or slow cooker for batches. Refrigerates 4 days. Freezes up to 2 months.'},
  {id:'keto_choc_mousse',tier:'plus', emoji:'🍫', name:'Keto Chocolate Avocado Mousse', kcal:240, feel:'Silky, rich and genuinely surprising — healthy fat masquerading as dessert.',
   badges:['🥑 Keto Dessert','🍫 Low-Sugar','🥥 Healthy Fat'],
   base300:[{n:'Ripe avocado',pp:75,u:'g'},{n:'Unsweetened cocoa powder',pp:15,u:'g'},{n:'Heavy cream',pp:30,u:'ml'},{n:'Coconut oil (melted)',pp:10,u:'g'},{n:'Vanilla extract',pp:5,u:'ml'},{n:'Stevia or monk fruit sweetener (to taste)',pp:2,u:'g'}],
   method:['Blend avocado, cocoa, cream, melted coconut oil, vanilla, salt and sweetener until smooth.','Taste and adjust sweetness.','Chill in bowls or jars for 30+ minutes.','Serve cold.'],
   tip:'Portion into small cups for dessert table at gatherings. Refrigerates up to 3 days. Do not freeze.'},
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
  {id:'wl_egg_white',   tier:'free',  emoji:'🥚', name:'Lemon Herb Egg White Scramble',kcal:200, feel:'Light and fresh — high protein without the yolk calories.',
   badges:['⚖️ Low-Cal','🥚 High-Protein','⚡ Quick'],
   base300:[{n:'Egg whites',pp:200,u:'g'},{n:'Fresh spinach',pp:100,u:'g'},{n:'Mushrooms (sliced)',pp:80,u:'g'},{n:'Bell pepper (diced)',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat olive oil in a non-stick pan over medium.','Sauté garlic, mushrooms and bell pepper for 4–5 minutes.','Add spinach and cook until wilted (1–2 minutes).','Pour in egg whites, lemon juice, herbs and pepper. Stir gently until set.'],
   tip:'Prep veggies ahead for fast morning meals. Pairs well with sliced tomatoes.'},
  {id:'wl_tuna_boats',  tier:'free',  emoji:'🥒', name:'Tuna Cucumber Boat Salad',    kcal:180, feel:'Cool, crunchy and clever — a meal disguised as a snack.',
   badges:['⚖️ Low-Cal','🥒 Hydrating','🐟 Lean Protein'],
   base300:[{n:'Canned tuna in water (drained)',pp:100,u:'g'},{n:'Cucumbers (halved, scooped)',pp:400,u:'g'},{n:'Cherry tomatoes (halved)',pp:100,u:'g'},{n:'Celery (diced)',pp:50,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Mix tuna, diced celery, tomatoes, lemon juice, olive oil, dill and pepper in a bowl.','Scoop seeds from cucumber halves to create boats.','Fill generously with tuna mixture.','Chill 10 minutes before serving cold.'],
   tip:'Perfect portable lunch for busy days. Keep filling separate for longer storage.'},
  {id:'wl_cabbage_soup', tier:'free', emoji:'🥬', name:'Spicy Cabbage Lentil Soup',   kcal:210, feel:'Hearty, filling and incredibly low-calorie — soup that actually satisfies.',
   badges:['⚖️ Low-Cal','🌶️ Spiced','🥬 High-Fibre'],
   base300:[{n:'Dry red lentils (rinsed)',pp:60,u:'g'},{n:'Low-sodium vegetable broth',pp:300,u:'ml'},{n:'Cabbage (shredded)',pp:150,u:'g'},{n:'Carrots (sliced)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Ground turmeric',pp:2,u:'g'}],
   method:['Heat oil in a pot. Sauté garlic, ginger and chilli for 1 minute.','Add carrots, cabbage and lentils — stir 2 minutes.','Pour in broth and turmeric. Bring to boil, then simmer 20–25 minutes until lentils soften.','Serve hot, optionally partially blended.'],
   tip:'Make a big batch on weekends for easy weekday lunches. Freezes up to 3 months.'},
  {id:'wl_grilled_chicken',tier:'free',emoji:'🍗',name:'Grilled Lemon Chicken & Asparagus',kcal:230,feel:'Clean and perfectly seasoned — lean protein with zero compromise.',
   badges:['⚖️ Low-Cal','🍗 Lean Protein','💪 Muscle-Friendly'],
   base300:[{n:'Chicken breast (thin sliced)',pp:120,u:'g'},{n:'Asparagus spears',pp:200,u:'g'},{n:'Lemon juice + zest',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh rosemary',pp:2,u:'g'}],
   method:['Mix lemon juice, zest, olive oil, garlic, rosemary and pepper.','Marinate chicken and asparagus for 10–15 minutes.','Grill or pan-sear chicken 4–5 minutes per side and asparagus 6–8 minutes.','Serve hot with a large mixed green salad.'],
   tip:'Batch grill for multiple meals. Refrigerates up to 3 days.'},
  {id:'wl_cauliflower_stew',tier:'free',emoji:'🥦',name:'Cauliflower Chickpea Stew',   kcal:210, feel:'Surprisingly filling for the calories — fibre-rich food doing its job.',
   badges:['⚖️ Low-Cal','🥦 High-Fibre','🌿 Spiced'],
   base300:[{n:'Cauliflower florets',pp:150,u:'g'},{n:'Cooked chickpeas',pp:80,u:'g'},{n:'Vegetable broth',pp:300,u:'ml'},{n:'Chopped tomatoes (canned)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Ground cumin and turmeric',pp:3,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat oil — sauté garlic and spices 1 minute.','Add cauliflower, chickpeas and tomatoes.','Pour in broth and simmer 15–18 minutes until tender.','Serve hot.'],
   tip:'Slow cooker friendly. Refrigerates up to 4 days. Freezes up to 3 months.'},
  {id:'wl_chia_apple',   tier:'free', emoji:'🫙', name:'Apple Cinnamon Chia Pudding', kcal:180, feel:'Naturally sweet, creamy and filling — a dessert that earns its place.',
   badges:['⚖️ Low-Cal','🌾 High-Fibre','⏱️ Make Ahead'],
   base300:[{n:'Chia seeds',pp:15,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Apple (grated)',pp:80,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['Mix chia seeds, almond milk, lemon juice and cinnamon in a jar.','Stir well and let sit 5 minutes — stir again.','Fold in grated apple.','Refrigerate overnight. Serve cold.'],
   tip:'Make jars in advance. Refrigerates up to 4 days. Add extra cinnamon to serve.'},
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
  {id:'hp_grilled_chicken',tier:'free',emoji:'🍗',name:'Lemon Garlic Grilled Chicken & Broccoli',kcal:300,feel:'Clean, lean and properly seasoned — protein that doesn\'t feel like a compromise.',
   badges:['💪 High-Protein','🍗 Lean','⚡ Quick'],
   base300:[{n:'Chicken breast (boneless)',pp:150,u:'g'},{n:'Broccoli florets',pp:200,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice + zest',pp:15,u:'ml'},{n:'Olive oil',pp:5,u:'ml'},{n:'Fresh herbs (rosemary/thyme)',pp:3,u:'g'}],
   method:['Mix lemon juice, zest, olive oil, minced garlic, herbs and pepper for marinade.','Coat chicken and broccoli in the marinade — let sit 10–15 minutes.','Grill or pan-sear chicken 5–6 minutes per side until cooked through (75°C internal).','Grill or steam broccoli 6–8 minutes until tender-crisp. Serve hot.'],
   tip:'Prepare marinade in advance. Cold leftover chicken slices are great in wraps.'},
  {id:'hp_tuna_yogurt',  tier:'free', emoji:'🫙', name:'Tuna Greek Yogurt Salad Bowl', kcal:280, feel:'Creamy, tangy and packed with protein — a bowl that actually keeps you full.',
   badges:['💪 High-Protein','🥛 Probiotics','🥗 Quick'],
   base300:[{n:'Canned tuna in water (drained)',pp:120,u:'g'},{n:'Plain Greek yogurt (5% fat)',pp:150,u:'g'},{n:'Cucumber (diced)',pp:100,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Celery (diced)',pp:50,u:'g'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh dill',pp:3,u:'g'}],
   method:['In a bowl, mix Greek yogurt, lemon juice, dill and black pepper.','Add drained tuna and break apart while mixing.','Gently fold in diced cucumber, tomatoes and celery.','Chill for 10–15 minutes. Serve cold.'],
   tip:'Great for meal prep — portion into jars for grab-and-go lunches. Refrigerates up to 2 days.'},
  {id:'hp_turkey_meatballs',tier:'free',emoji:'🍗',name:'Baked Turkey Meatballs & Spinach',kcal:310,feel:'Tender, herby and satisfying — lean meatballs that don\'t compromise on flavour.',
   badges:['💪 High-Protein','🍗 Lean Turkey','🌿 Iron-Rich'],
   base300:[{n:'Lean ground turkey',pp:150,u:'g'},{n:'Fresh spinach (chopped)',pp:100,u:'g'},{n:'Egg',pp:1,u:''},{n:'Onion (finely chopped)',pp:10,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Dried oregano and parsley',pp:2,u:'g'}],
   method:['Preheat oven to 200°C. Line baking tray with parchment.','Sauté onion and garlic in olive oil 2 minutes. Add spinach and wilt.','Combine turkey, egg, sautéed mixture, herbs and pepper. Mix well.','Form into meatballs and bake 18–22 minutes. Serve hot.'],
   tip:'Double the batch and freeze half. Pairs well with zucchini noodles or a simple tomato sauce.'},
  {id:'hp_salmon_chickpea',tier:'plus',emoji:'🐟',name:'Salmon Chickpea Salad',        kcal:330, feel:'Omega-3s meet plant protein — two of the best ingredients you can eat, together.',
   badges:['💪 High-Protein','🐟 Omega-3','🫘 Plant Protein'],
   base300:[{n:'Cooked salmon (flaked)',pp:100,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Mixed greens',pp:100,u:'g'},{n:'Cucumber and cherry tomatoes',pp:80,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh parsley',pp:3,u:'g'}],
   method:['Whisk olive oil, lemon juice, parsley and pepper for dressing.','In a large bowl, combine flaked salmon, chickpeas, greens, cucumber and tomatoes.','Drizzle dressing and toss gently just before serving.','Serve chilled.'],
   tip:'Ideal for high-protein lunch platters at events. Refrigerate undressed components up to 2 days.'},
  {id:'hp_lentil_chili',  tier:'free', emoji:'🫘', name:'Lentil Turkey Chilli',         kcal:340, feel:'Rich, spiced and deeply filling — a chilli that\'s actually good for you.',
   badges:['💪 High-Protein','🫘 Plant Protein','🌶️ Warming'],
   base300:[{n:'Lean ground turkey',pp:100,u:'g'},{n:'Dry green lentils (rinsed)',pp:60,u:'g'},{n:'Low-sodium broth',pp:300,u:'ml'},{n:'Chopped tomatoes',pp:100,u:'g'},{n:'Bell pepper and onion',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Chilli powder and ground cumin',pp:4,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat oil in a pot. Brown turkey with garlic, onion and spices for 5 minutes.','Add bell pepper, tomatoes, lentils and broth.','Bring to boil, then simmer 25–30 minutes until lentils are tender.','Adjust seasoning and serve hot.'],
   tip:'Use a slow cooker on low for 6–8 hours for effortless large batches. Add a dollop of Greek yogurt to serve.'},
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
  {id:'pb_chickpea_bowl',tier:'free', emoji:'🥣', name:'Chickpea Avocado Power Bowl',  kcal:340, feel:'Colourful and alive — like eating sunshine in a bowl.',
   badges:['🌱 Vegan','🥣 Whole-Food','💪 Plant Protein'],
   base300:[{n:'Cooked chickpeas',pp:120,u:'g'},{n:'Avocado (diced)',pp:75,u:'g'},{n:'Mixed greens',pp:100,u:'g'},{n:'Cherry tomatoes and cucumber (diced)',pp:100,u:'g'},{n:'Red onion (sliced)',pp:40,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Whisk olive oil, lemon juice, parsley and black pepper for dressing.','In a large bowl, combine chickpeas, diced avocado, greens, tomatoes, cucumber and onion.','Drizzle dressing and toss gently just before serving.','Serve chilled.'],
   tip:'Prep ingredients separately for customisable bowls at gatherings. Refrigerate undressed components up to 2 days.'},
  {id:'pb_lentil_soup',  tier:'free', emoji:'🍲', name:'Spicy Lentil Vegetable Soup',  kcal:260, feel:'Warming and deeply filling — plant protein that keeps you going all afternoon.',
   badges:['🌱 Vegan','🫘 High-Protein','🌶️ Spiced'],
   base300:[{n:'Dry red lentils (rinsed)',pp:70,u:'g'},{n:'Vegetable broth',pp:350,u:'ml'},{n:'Carrots (sliced)',pp:100,u:'g'},{n:'Zucchini/baby marrow (diced)',pp:100,u:'g'},{n:'Spinach',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Ground cumin',pp:2,u:'g'},{n:'Chilli flakes',pp:1,u:'g'}],
   method:['Heat oil in a pot. Sauté garlic, ginger and spices for 1 minute.','Add carrots, zucchini and lentils — stir 2 minutes.','Pour in broth and bring to boil, then simmer 20–25 minutes.','Stir in spinach for last 3 minutes. Serve hot with lemon wedges.'],
   tip:'Use a slow cooker on low for 6–8 hours for effortless batches. Freezes up to 3 months.'},
  {id:'pb_tofu_skewers', tier:'free', emoji:'🍢', name:'Marinated Tofu Veggie Skewers', kcal:280, feel:'Charred edges and juicy centres — even the braai crowd will come back for seconds.',
   badges:['🌱 Vegan','🟡 Plant Protein','🔥 Grill-Friendly'],
   base300:[{n:'Firm tofu (cubed)',pp:150,u:'g'},{n:'Bell peppers and zucchini (chunked)',pp:150,u:'g'},{n:'Cherry tomatoes',pp:100,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Low-sodium tamari',pp:10,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Smoked paprika',pp:2,u:'g'}],
   method:['Mix olive oil, tamari, garlic and herbs for marinade.','Toss tofu and vegetables in marinade — let sit 15–20 minutes.','Thread onto skewers.','Grill or bake at 200°C for 12–15 minutes, turning halfway. Serve hot.'],
   tip:'Assemble skewers ahead for quick grilling at gatherings. Pairs well with tahini drizzle or a fresh salad.'},
  {id:'pb_quinoa_salad', tier:'free', emoji:'🥗', name:'Quinoa Black Bean Salad',       kcal:330, feel:'Hearty, filling and colourful — a plant salad that actually satisfies.',
   badges:['🌱 Vegan','🌾 Complete Protein','🥗 Crowd Pleaser'],
   base300:[{n:'Cooked quinoa',pp:80,u:'g'},{n:'Cooked black beans',pp:100,u:'g'},{n:'Corn kernels (fresh or thawed)',pp:100,u:'g'},{n:'Cherry tomatoes and avocado (diced)',pp:100,u:'g'},{n:'Mixed greens',pp:80,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Lime juice',pp:10,u:'ml'},{n:'Ground cumin',pp:2,u:'g'}],
   method:['Whisk olive oil, lime juice, fresh coriander and cumin for dressing.','Combine quinoa, black beans, corn, tomatoes, avocado and greens.','Toss with dressing just before serving.','Serve chilled.'],
   tip:'Excellent for potlucks — scales easily in large bowls. Refrigerates up to 2 days.'},
  {id:'pb_cauliflower_curry',tier:'plus',emoji:'🍛',name:'Creamy Cauliflower Chickpea Curry',kcal:300,feel:'Velvety, spiced and rich — plant-based comfort at its best.',
   badges:['🌱 Vegan','🥥 Creamy','🌶️ Warming'],
   base300:[{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cauliflower florets',pp:200,u:'g'},{n:'Light coconut milk',pp:150,u:'ml'},{n:'Chopped tomatoes (canned)',pp:100,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Curry powder',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat oil — sauté garlic, ginger and spices for 1 minute.','Add cauliflower and tomatoes — cook 4 minutes.','Add chickpeas and coconut milk — simmer 12–15 minutes until tender.','Serve hot with brown rice or greens.'],
   tip:'Adjust spice level for larger groups. Refrigerates up to 4 days. Freezes up to 2 months.'},
  {id:'pb_stuffed_peppers',tier:'free',emoji:'🫑',name:'Mushroom Lentil Stuffed Peppers',kcal:280,feel:'Vibrant, earthy and satisfying — a meal that looks as good as it tastes.',
   badges:['🌱 Vegan','🫘 Plant Protein','🫑 Colourful'],
   base300:[{n:'Bell peppers (halved)',pp:2,u:''},{n:'Cooked lentils',pp:80,u:'g'},{n:'Mushrooms (chopped)',pp:100,u:'g'},{n:'Spinach and onion',pp:50,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Dried mixed herbs',pp:2,u:'g'}],
   method:['Preheat oven to 200°C. Brush peppers with oil and bake 10 minutes.','Sauté onion, garlic, mushrooms and spinach — mix with cooked lentils and herbs.','Stuff peppers with the mixture.','Bake another 15–20 minutes. Serve hot.'],
   tip:'Prepare filling ahead. Refrigerates up to 3 days. Reheat in oven.'},
  {id:'pb_chia_flax',    tier:'free', emoji:'🫙', name:'Berry Chia Flax Pudding',       kcal:240, feel:'Creamy, nutty and berry-bright — omega-3s and fibre working quietly overnight.',
   badges:['🌱 Vegan','🌾 Omega-3','⏱️ Make Ahead'],
   base300:[{n:'Chia seeds',pp:20,u:'g'},{n:'Ground flaxseeds',pp:10,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Mixed berries',pp:100,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['Mix chia seeds, flaxseeds, almond milk, cinnamon and lemon juice in a jar.','Stir well and rest 5 minutes — stir again.','Fold in berries.','Refrigerate overnight. Serve cold.'],
   tip:'Portion into jars for easy servings. Refrigerates up to 4 days. Top with extra berries or nuts.'},
];

const VEGETARIAN_RECIPES = [
  {id:'veg_omelette',    tier:'free',  emoji:'🍳', name:'Veggie Cheese Omelette',       kcal:340, feel:'Golden and pillowy — proper eggs done right, no apologies needed.',
   badges:['🥚 High-Protein','🧀 Satisfying','⚡ 10 min'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Cheddar cheese (grated)',pp:40,u:'g'},{n:'Baby spinach',pp:80,u:'g'},{n:'Mushrooms (sliced)',pp:60,u:'g'},{n:'Red pepper (diced)',pp:50,u:'g'},{n:'Garlic (minced)',pp:2,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Heat olive oil in a non-stick pan over medium. Sauté garlic, mushrooms and pepper 4 min.','Add spinach — cook until wilted, about 1 min.','Beat eggs with salt and pepper. Pour over the veg.','Sprinkle cheese. Cook 3–4 min, fold omelette and cook 1 min more. Serve hot.'],
   tip:'Don\'t rush the veg — properly cooked mushrooms add deep savoury flavour. Wet mushrooms = watery omelette.'},
  {id:'veg_shakshuka',   tier:'free',  emoji:'🍅', name:'Shakshuka with Feta',          kcal:280, feel:'Smoky, bubbling and aromatic — the whole kitchen smells like a North African kitchen.',
   badges:['🥚 Protein','🌶️ Spiced','🍅 One-Pan'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Canned tomatoes',pp:150,u:'g'},{n:'Feta cheese (crumbled)',pp:40,u:'g'},{n:'Red pepper (diced)',pp:80,u:'g'},{n:'Onion (diced)',pp:60,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Smoked paprika',pp:2,u:'g'},{n:'Olive oil',pp:10,u:'ml'}],
   method:['Sauté onion and pepper in olive oil 5 min. Add garlic, cumin and paprika — 1 min.','Add tomatoes. Simmer 8–10 min until thick. Season generously.','Make wells and crack eggs in. Cover and cook on low 5–7 min until whites are just set.','Crumble feta over the top. Serve straight from the pan with bread.'],
   tip:'Runny yolks are the goal — pull off heat while still wobbly. The residual heat finishes them.'},
  {id:'veg_caprese',     tier:'free',  emoji:'🧀', name:'Caprese Chickpea Salad',       kcal:295, feel:'Summer on a plate — fresh mozzarella and basil smell like a garden.',
   badges:['🧀 Protein','🌿 Fresh','🥗 No-Cook'],
   base300:[{n:'Buffalo mozzarella (torn)',pp:80,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cherry tomatoes (halved)',pp:150,u:'g'},{n:'Fresh basil leaves',pp:10,u:'g'},{n:'Extra virgin olive oil',pp:15,u:'ml'},{n:'Balsamic vinegar',pp:10,u:'ml'}],
   method:['Halve tomatoes. Drain and rinse chickpeas.','Arrange tomatoes, chickpeas and torn mozzarella on a plate.','Scatter fresh basil leaves.','Drizzle generously with olive oil and balsamic. Season and serve immediately.'],
   tip:'Real buffalo mozzarella makes a difference here. If all you have is the rubbery block, drain it and tear it — it works.'},
  {id:'veg_stuffedpep',  tier:'free',  emoji:'🫑', name:'Ricotta-Spinach Stuffed Peppers', kcal:320, feel:'Melt-in-the-mouth filling inside a sweet roasted shell — comfort vegetarian.',
   badges:['🧀 Creamy','🥚 Protein','🫑 Baked'],
   base300:[{n:'Bell peppers (large, halved)',pp:1,u:''},{n:'Ricotta cheese',pp:120,u:'g'},{n:'Baby spinach (chopped)',pp:100,u:'g'},{n:'Mozzarella (grated)',pp:40,u:'g'},{n:'Garlic (2 cloves)',pp:6,u:'g'},{n:'Tomato sauce',pp:80,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Preheat oven 190°C. Brush pepper halves with oil. Bake 10 min.','Sauté garlic and spinach 2 min. Mix with ricotta, salt and pepper.','Spoon filling into peppers. Top with tomato sauce and mozzarella.','Bake 18–22 min until cheese is golden and bubbling. Serve hot.'],
   tip:'The par-bake is important — raw peppers with filling need too long and the filling overcooks.'},
  {id:'veg_paneer',      tier:'plus',  emoji:'🍛', name:'Paneer Tikka Skewers',         kcal:310, feel:'Charred edges, creamy centre — the braai recipe that converts meat-eaters.',
   badges:['🧀 High-Protein','🌶️ Spiced','🔥 Braai-Friendly'],
   base300:[{n:'Paneer (cubed)',pp:150,u:'g'},{n:'Red and yellow pepper (chunked)',pp:150,u:'g'},{n:'Plain yoghurt',pp:50,u:'g'},{n:'Turmeric',pp:1,u:'g'},{n:'Cumin',pp:2,u:'g'},{n:'Garam masala',pp:2,u:'g'},{n:'Ginger (grated)',pp:3,u:'g'},{n:'Garlic (minced)',pp:3,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Sunflower oil',pp:10,u:'ml'}],
   method:['Mix yoghurt, spices, ginger, garlic, lemon and oil into a marinade.','Toss paneer and peppers in marinade. Rest at least 30 min (longer is better).','Thread onto skewers, alternating paneer and pepper.','Grill or bake at 200°C for 12–15 min, turning halfway, until charred at edges.'],
   tip:'Paneer doesn\'t melt — it gets golden and holds its shape. Perfect for braaing. Buy firm paneer, not the soft block.'},
  {id:'veg_halloumisalad',tier:'free', emoji:'🥗', name:'Halloumi & Quinoa Salad',      kcal:370, feel:'Salty, golden halloumi against nutty quinoa — a proper main course salad.',
   badges:['🧀 Protein','🌾 Wholesome','🥗 Filling'],
   base300:[{n:'Halloumi (sliced)',pp:80,u:'g'},{n:'Cooked quinoa',pp:100,u:'g'},{n:'Mixed greens',pp:80,u:'g'},{n:'Cherry tomatoes (halved)',pp:80,u:'g'},{n:'Cucumber (sliced)',pp:60,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:10,u:'ml'}],
   method:['Cook quinoa per packet. Cool slightly.','Slice halloumi 1cm thick. Grill or pan-fry in a dry pan 2 min per side until golden.','Whisk olive oil and lemon juice for dressing.','Build salad: greens, quinoa, tomatoes, cucumber. Top with warm halloumi. Drizzle dressing.'],
   tip:'Halloumi must be eaten hot — it becomes rubbery when cold. Time it so it goes straight from pan to plate.'},
  {id:'veg_chickpea_salad',tier:'free',emoji:'🫙',name:'Greek Yogurt Chickpea Salad',   kcal:300, feel:'Cool, tangy and satisfying — probiotics and protein in one bowl.',
   badges:['🧀 Protein','🦠 Probiotics','🥗 Refreshing'],
   base300:[{n:'Plain Greek yogurt',pp:150,u:'g'},{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Cucumber and cherry tomatoes (diced)',pp:100,u:'g'},{n:'Red onion (sliced)',pp:50,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Fresh dill',pp:3,u:'g'}],
   method:['Whisk olive oil, lemon juice, dill and pepper.','In a bowl, combine chickpeas, cucumber, tomatoes and onion.','Fold in Greek yogurt and dressing gently.','Chill 10 minutes before serving cold.'],
   tip:'Ideal for buffet-style servings. Refrigerates up to 2 days. Pairs well with pita bread.'},
  {id:'veg_broccoli_lentil',tier:'free',emoji:'🥦',name:'Cheesy Broccoli Lentil Bake', kcal:310, feel:'Golden, bubbling and deeply comforting — the kind of bake you go back to twice.',
   badges:['🧀 Calcium','🫘 Plant Protein','🥦 High-Fibre'],
   base300:[{n:'Cooked lentils',pp:80,u:'g'},{n:'Broccoli florets (steamed)',pp:150,u:'g'},{n:'Cheddar cheese (grated)',pp:50,u:'g'},{n:'Milk',pp:100,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['Preheat oven to 200°C. Steam broccoli 5 minutes.','Mix lentils, broccoli, milk, garlic, herbs and half the cheese.','Transfer to baking dish, top with remaining cheese.','Bake 18–22 minutes until bubbly and golden. Serve hot.'],
   tip:'Assemble ahead and bake fresh. Refrigerates up to 4 days. Freezes up to 2 months.'},
  {id:'veg_avocado_toast',tier:'free', emoji:'🥑', name:'Egg & Avocado Toast Bowl',     kcal:330, feel:'A simple breakfast that punches well above its ingredients.',
   badges:['🥚 Protein','🥑 Healthy Fats','⚡ 15 min'],
   base300:[{n:'Eggs (hard-boiled, sliced)',pp:2,u:''},{n:'Avocado (mashed)',pp:75,u:'g'},{n:'Cherry tomatoes',pp:80,u:'g'},{n:'Cucumber',pp:50,u:'g'},{n:'Whole grain bread (toasted)',pp:60,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['Hard-boil eggs for 8–10 minutes, cool and slice.','Mash avocado with lemon juice and fresh herbs.','Chop vegetables.','Layer on toasted bread or in bowls. Serve cold.'],
   tip:'Refrigerate components up to 2 days. Assemble fresh for best results. Pairs well with fresh fruit.'},
  {id:'veg_stuffed_shells',tier:'plus',emoji:'🍝',name:'Spinach Ricotta Stuffed Shells', kcal:360, feel:'Creamy, saucy and Italian-comforting — the vegetarian showstopper.',
   badges:['🧀 Creamy','🌿 Iron-Rich','🍝 Comfort Food'],
   base300:[{n:'Large pasta shells (cooked)',pp:80,u:'g'},{n:'Ricotta cheese',pp:120,u:'g'},{n:'Spinach (chopped)',pp:100,u:'g'},{n:'Mozzarella (grated)',pp:40,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Tomato sauce',pp:80,u:'ml'}],
   method:['Preheat oven to 190°C. Sauté garlic and spinach.','Mix spinach with ricotta, herbs and pepper.','Stuff shells and place in baking dish with tomato sauce.','Top with mozzarella and bake 20–25 minutes. Serve hot.'],
   tip:'Boil pasta in batches for large groups. Refrigerates up to 3 days. Reheat in oven.'},
  {id:'veg_mushroom_rice',tier:'free', emoji:'🍄', name:'Mushroom Egg Fried Rice',      kcal:330, feel:'Umami-rich and deeply savoury — proper fried rice energy without the takeaway guilt.',
   badges:['🍄 Umami','🥚 Protein','🍚 Satisfying'],
   base300:[{n:'Cooked brown rice',pp:100,u:'g'},{n:'Eggs',pp:2,u:''},{n:'Mushrooms (sliced)',pp:100,u:'g'},{n:'Peas and carrots (mixed)',pp:80,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Fresh ginger (grated)',pp:3,u:'g'},{n:'Low-sodium soy sauce',pp:5,u:'ml'},{n:'Sunflower oil',pp:5,u:'ml'}],
   method:['Scramble eggs in a little oil — set aside.','Stir-fry garlic, ginger and mushrooms in oil.','Add vegetables, cold rice and soy sauce. Stir-fry 4 minutes on high heat.','Mix in scrambled eggs. Serve hot.'],
   tip:'Use leftover or day-old rice — fresh rice is too wet for frying. High heat makes the difference.'},
  {id:'veg_quesadilla',  tier:'free',  emoji:'🫓', name:'Cheese & Vegetable Quesadilla',kcal:350, feel:'Melty, crispy and satisfying — one of those meals that disappears too quickly.',
   badges:['🧀 Protein','🌶️ Flavourful','⚡ 10 min'],
   base300:[{n:'Whole wheat tortillas',pp:2,u:''},{n:'Cheddar cheese (grated)',pp:50,u:'g'},{n:'Black beans (canned, drained)',pp:80,u:'g'},{n:'Bell pepper and spinach (sautéed)',pp:80,u:'g'},{n:'Sunflower oil',pp:5,u:'ml'}],
   method:['Sauté vegetables in a little oil.','Fill tortilla with cheese, beans and veggies.','Fold and cook in pan 3 minutes per side until golden and cheese melts.','Serve hot, cut into wedges.'],
   tip:'Pairs well with salsa or Greek yogurt as a dip. Refrigerates up to 2 days — reheat in pan to restore crispiness.'},
  {id:'veg_shakshuka_pdf',tier:'free', emoji:'🍅', name:'Baked Egg & Feta Shakshuka',  kcal:280, feel:'Smoky tomato, salty feta, runny yolk — one-pan magic.',
   badges:['🥚 Protein','🧀 Feta','🍅 One-Pan'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Tomato sauce (canned or homemade)',pp:150,u:'g'},{n:'Feta cheese (crumbled)',pp:40,u:'g'},{n:'Bell pepper and onion (sautéed)',pp:80,u:'g'},{n:'Ground cumin',pp:2,u:'g'},{n:'Smoked paprika',pp:1,u:'g'}],
   method:['Sauté onion, pepper and spices until soft.','Add tomato sauce and simmer 5 minutes.','Make wells and crack eggs into them.','Top with feta and bake 8–10 minutes at 200°C. Serve hot with pita.'],
   tip:'Runny yolks are the goal. Pull from oven while still wobbly — residual heat finishes them.'},
  {id:'veg_berry_ricotta',tier:'free', emoji:'🫙', name:'Berry Ricotta Parfait',        kcal:260, feel:'Light, creamy and beautiful — a dessert that doubles as a healthy breakfast.',
   badges:['🧀 Protein','🫐 Antioxidants','⚡ 5 min'],
   base300:[{n:'Ricotta cheese',pp:150,u:'g'},{n:'Mixed berries (fresh)',pp:100,u:'g'},{n:'Chia seeds',pp:10,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'}],
   method:['Layer ricotta, berries and chia seeds in glasses.','Sprinkle cinnamon between layers.','Chill 15 minutes before serving cold.','Finish with extra berries and a drizzle of honey if desired.'],
   tip:'Beautiful layered presentation for gatherings. Refrigerates up to 2 days. Add a handful of nuts for crunch.'},
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
  {id:'gh_kefir_oats',   tier:'free',  emoji:'🥛', name:'Apple Cinnamon Kefir Oats',   kcal:250, feel:'Tangy, sweet and quietly alive — your gut bacteria are having breakfast too.',
   badges:['🦠 Probiotics','🌾 Prebiotic','⏱️ Make Ahead'],
   base300:[{n:'Plain kefir (unsweetened, live cultures)',pp:200,u:'ml'},{n:'Rolled oats',pp:40,u:'g'},{n:'Apple (grated)',pp:80,u:'g'},{n:'Ground flaxseeds',pp:5,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'},{n:'Lemon juice',pp:5,u:'ml'}],
   method:['In a jar, combine kefir, rolled oats, grated apple, flaxseeds, cinnamon and lemon juice.','Stir thoroughly for 1 minute to ensure even distribution.','Cover and refrigerate overnight (minimum 6 hours) until oats soften.','Stir gently before serving cold. Top with extra apple slices if desired.'],
   tip:'Prepare jars in advance for convenient breakfasts. Refrigerates up to 4 days. Add a handful of pumpkin seeds or walnuts for crunch.'},
  {id:'gh_bone_broth',   tier:'free',  emoji:'🍲', name:'Turmeric Ginger Bone Broth',  kcal:140, feel:'Ancient and restorative — your gut lining is thanking you with every sip.',
   badges:['🦠 Gut-Healing','🌿 Anti-Inflam','🍲 Collagen'],
   base300:[{n:'Bone broth (homemade or low-sodium)',pp:400,u:'ml'},{n:'Mixed vegetables (carrots, celery, spinach)',pp:100,u:'g'},{n:'Fresh ginger (grated)',pp:8,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:5,u:'ml'},{n:'Fresh parsley',pp:5,u:'g'}],
   method:['Heat olive oil in a pot over medium. Sauté garlic, ginger and turmeric for 1–2 minutes.','Add chopped carrots and celery — cook 4 minutes.','Pour in bone broth and bring to a gentle simmer for 15 minutes.','Add spinach in the last 3 minutes. Stir in fresh parsley before serving hot.'],
   tip:'Use a slow cooker on low for 4–6 hours for large batch preparation. Freeze up to 3 months. Pairs well with fermented vegetables on the side.'},
  {id:'gh_tempeh_slaw',  tier:'free',  emoji:'🥗', name:'Tempeh Cabbage Slaw',         kcal:270, feel:'Crunchy, nutty and probiotic-rich — a gut-health meal that actually tastes exciting.',
   badges:['🦠 Probiotics','🌿 Prebiotic','🥗 Fermented'],
   base300:[{n:'Tempeh (steamed and crumbled)',pp:100,u:'g'},{n:'Shredded cabbage (green or red)',pp:150,u:'g'},{n:'Carrot (grated)',pp:80,u:'g'},{n:'Cucumber (sliced)',pp:50,u:'g'},{n:'Tahini',pp:15,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'}],
   method:['Steam tempeh for 8–10 minutes, then crumble.','In a large bowl, combine shredded cabbage, grated carrot, cucumber and crumbled tempeh.','Whisk tahini, lemon juice, garlic and a splash of water for a smooth dressing.','Toss salad with dressing and fresh herbs just before serving. Serve chilled.'],
   tip:'Ideal for make-ahead lunch platters. Refrigerate undressed components up to 3 days. Dressed salad best within 1 day.'},
  {id:'gh_yogurt_lentil',tier:'free',  emoji:'🫘', name:'Spinach Garlic Yogurt Lentils',kcal:260, feel:'Earthy and comforting — one of those meals that feeds you on every level.',
   badges:['🦠 Probiotics','🌾 Prebiotic','🫘 High-Fibre'],
   base300:[{n:'Dry green or brown lentils (rinsed)',pp:70,u:'g'},{n:'Vegetable broth',pp:350,u:'ml'},{n:'Fresh spinach',pp:100,u:'g'},{n:'Garlic (minced)',pp:8,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Plain Greek yogurt (stirred in at end)',pp:50,u:'g'}],
   method:['Heat oil in a pot. Sauté garlic and ginger for 1 minute.','Add lentils and broth — bring to boil, then simmer 20–25 minutes until lentils are tender.','Stir in spinach for the last 5 minutes until wilted.','Remove from heat and stir in Greek yogurt and fresh dill. Serve hot.'],
   tip:'Stir yogurt in OFF the heat to preserve live cultures. Portion into containers for easy reheating during the week.'},
  {id:'gh_tempeh_bake',  tier:'plus',  emoji:'🥦', name:'Broccoli Mushroom Tempeh Bake',kcal:280, feel:'Golden, hearty and deeply satisfying — your gut microbiome loves every bite.',
   badges:['🦠 Probiotics','🥦 Prebiotic','🌿 High-Fibre'],
   base300:[{n:'Tempeh (cubed)',pp:100,u:'g'},{n:'Broccoli florets',pp:150,u:'g'},{n:'Mushrooms (sliced)',pp:100,u:'g'},{n:'Garlic (minced)',pp:10,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Low-sodium tamari',pp:5,u:'ml'}],
   method:['Preheat oven to 200°C. Line a baking tray with parchment.','Toss tempeh cubes, broccoli and mushrooms with olive oil, garlic, tamari and herbs.','Spread evenly on the tray.','Bake 18–22 minutes, stirring halfway, until tempeh is golden and vegetables are tender.'],
   tip:'Scale up on one large tray for easy oven-to-table serving at gatherings. Pairs well with sauerkraut or a simple green salad.'},
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
  {id:'db_spinach_eggs', tier:'free',  emoji:'🥬', name:'Lemon Garlic Spinach Egg Scramble',kcal:240, feel:'Fresh, bright and sustaining — exactly what mornings should taste like.',
   badges:['🩸 Low-GI','🥚 High-Protein','⚡ Quick'],
   base300:[{n:'Eggs',pp:2,u:''},{n:'Fresh spinach',pp:100,u:'g'},{n:'Mushrooms (sliced)',pp:50,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:10,u:'ml'},{n:'Extra virgin olive oil',pp:5,u:'ml'},{n:'Black pepper and herbs (oregano/thyme)',pp:1,u:'pinch'}],
   method:['Heat olive oil in a non-stick pan over medium heat.','Add minced garlic and mushrooms — sauté 3–4 minutes until mushrooms soften.','Add spinach and cook 1–2 minutes until wilted.','Whisk eggs with lemon juice, pepper and herbs. Pour into pan. Stir gently 3–4 minutes until just set.'],
   tip:'Prepare veggies ahead for quick morning cooking. Pairs well with sliced avocado.'},
  {id:'db_tuna_wraps',   tier:'free',  emoji:'🥬', name:'Avocado Tuna Lettuce Wraps',   kcal:260, feel:'Crunchy, cool and satisfying — no energy crash afterward.',
   badges:['🩸 Low-GI','🐟 Omega-3','🥗 Low-Carb'],
   base300:[{n:'Canned tuna in water (drained)',pp:100,u:'g'},{n:'Avocado (mashed)',pp:75,u:'g'},{n:'Cherry tomatoes (halved)',pp:100,u:'g'},{n:'Cucumber (diced)',pp:50,u:'g'},{n:'Large lettuce leaves',pp:80,u:'g'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Olive oil',pp:5,u:'ml'}],
   method:['In a bowl, mix tuna, mashed avocado, tomatoes, cucumber, lemon juice, olive oil and dill.','Gently combine until well incorporated but not mushy.','Spoon mixture evenly into lettuce leaves.','Roll or fold into wraps. Serve chilled.'],
   tip:'Great for lunchboxes — keep filling and lettuce separate until ready to eat. Refrigerate components up to 2 days.'},
  {id:'db_salmon_asparagus',tier:'plus',emoji:'🐟',name:'Baked Salmon with Asparagus',  kcal:305, feel:'Clean, elegant and quietly powerful — your blood sugar will thank you.',
   badges:['🩸 Low-GI','🐟 Omega-3','💪 High-Protein'],
   base300:[{n:'Salmon fillet',pp:120,u:'g'},{n:'Asparagus spears',pp:150,u:'g'},{n:'Extra virgin olive oil',pp:5,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Lemon juice',pp:15,u:'ml'},{n:'Black pepper and dried rosemary',pp:1,u:'pinch'}],
   method:['Preheat oven to 200°C. Line a baking tray with parchment paper.','Place salmon and asparagus on tray. Drizzle with olive oil and lemon juice.','Sprinkle minced garlic, pepper and rosemary evenly.','Bake for 12–15 minutes until salmon flakes easily and asparagus is tender. Rest 1 minute.'],
   tip:'Make a large tray for easy family-style serving. Pairs well with cauliflower rice or a green salad.'},
  {id:'db_chia_pudding', tier:'free',  emoji:'🫙', name:'Berry Chia Overnight Pudding', kcal:200, feel:'Creamy and cool — wakes up your morning without waking up your blood sugar.',
   badges:['🩸 Low-GI','🌾 High-Fibre','⏱️ Make Ahead'],
   base300:[{n:'Chia seeds',pp:20,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Fresh or frozen berries (strawberries/blueberries)',pp:50,u:'g'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'}],
   method:['In a jar, combine chia seeds, almond milk, lemon juice and cinnamon.','Stir thoroughly for 1 minute to prevent clumping. Let sit 5 minutes and stir again.','Gently fold in berries.','Cover and refrigerate overnight (minimum 4 hours). Serve cold.'],
   tip:'Prepare individual jars the night before for grab-and-go. Refrigerates up to 4 days. Sprinkle pumpkin seeds for crunch.'},
  {id:'db_turkey_stirfry',tier:'free', emoji:'🍗', name:'Turkey Zucchini Stir-Fry',     kcal:280, feel:'Light, savoury and quick — weeknight eating that actually serves your health.',
   badges:['🩸 Low-GI','🍗 Lean Protein','⚡ 20 min'],
   base300:[{n:'Lean ground turkey',pp:120,u:'g'},{n:'Zucchini (spiralised or diced)',pp:200,u:'g'},{n:'Bell pepper (sliced)',pp:50,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Garlic (minced)',pp:5,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Low-sodium tamari or coconut aminos',pp:10,u:'ml'}],
   method:['Heat olive oil in a large pan over medium-high heat.','Add ground turkey, ginger and garlic — cook 5–6 minutes breaking up meat until browned.','Add zucchini and bell pepper — stir-fry 4–5 minutes until just tender.','Stir in tamari and fresh coriander. Cook 1 more minute. Serve hot.'],
   tip:'Use a wok for larger batches. Pairs well with cauliflower mash or a small portion of quinoa.'},
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
  {id:'ai_turmeric_smoothie',tier:'free',emoji:'🟡',name:'Turmeric Ginger Berry Smoothie',kcal:180,feel:'Bright and earthy at once — inflammation doesn\'t stand a chance.',
   badges:['🌿 Anti-Inflam','🟡 Curcumin','🫐 Antioxidants'],
   base300:[{n:'Frozen mixed berries',pp:100,u:'g'},{n:'Fresh spinach or kale',pp:50,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Fresh ginger (peeled)',pp:5,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Black pepper (pinch)',pp:0.5,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Chia seeds',pp:5,u:'g'}],
   method:['Add almond milk, lemon juice, spinach and chia to blender.','Add banana, berries, grated ginger and turmeric.','Blend on high 1–2 minutes until smooth. Add 20–50ml water if thick.','Serve immediately in chilled glasses.'],
   tip:'Prep frozen ingredient packs for quick assembly. Best consumed fresh — freeze leftovers as popsicles.'},
  {id:'ai_turmeric_soup',tier:'free',  emoji:'🍲', name:'Golden Turmeric Vegetable Soup',kcal:110, feel:'Soothing and golden — like sunshine in a bowl on a hard day.',
   badges:['🌿 Anti-Inflam','🟡 Turmeric','🌱 Vegan'],
   base300:[{n:'Low-sodium vegetable broth',pp:400,u:'ml'},{n:'Carrots (sliced)',pp:50,u:'g'},{n:'Celery (chopped)',pp:50,u:'g'},{n:'Zucchini or spinach',pp:50,u:'g'},{n:'Fresh ginger (grated)',pp:10,u:'g'},{n:'Ground turmeric',pp:3,u:'g'},{n:'Garlic (minced)',pp:10,u:'g'},{n:'Extra virgin olive oil',pp:5,u:'ml'}],
   method:['Heat olive oil in a large pot over medium. Sauté garlic, ginger and turmeric 1 minute.','Add carrots and celery — cook 4–5 minutes.','Pour in broth, bring to gentle boil, then simmer 15–20 minutes until veg softens.','Add zucchini or spinach in last 5 minutes. Stir in fresh herbs. Serve hot.'],
   tip:'Keep warm in a slow cooker for gatherings. Partially blend for creaminess. Freezes up to 3 months.'},
  {id:'ai_avocado_salad',tier:'free',  emoji:'🥗', name:'Avocado Berry Chickpea Salad',kcal:305, feel:'Colourful and alive — the kind of salad that actually fills you up.',
   badges:['🌿 Anti-Inflam','🥑 Healthy Fats','🫘 Plant Protein'],
   base300:[{n:'Cooked chickpeas',pp:100,u:'g'},{n:'Avocado (diced)',pp:75,u:'g'},{n:'Mixed berries or cherry tomatoes',pp:100,u:'g'},{n:'Mixed greens (spinach/rocket)',pp:50,u:'g'},{n:'Red onion (thinly sliced)',pp:30,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Ground turmeric (pinch)',pp:0.5,u:'g'}],
   method:['Whisk olive oil, lemon juice, turmeric, pepper and fresh herbs for dressing.','In a large bowl, combine chickpeas, diced avocado, berries/tomatoes, greens and onion.','Drizzle dressing and toss gently just before serving to prevent sogginess.','Serve chilled.'],
   tip:'Set up as a build-your-own salad bar for gatherings. Keep dressing and avocado separate until serving.'},
  {id:'ai_salmon_broccoli',tier:'plus',emoji:'🐟',name:'Ginger Turmeric Baked Salmon',  kcal:350, feel:'Golden edges, flaky flesh — restaurant-quality anti-inflammatory eating.',
   badges:['🐟 Omega-3','🌿 Anti-Inflam','💪 High-Protein'],
   base300:[{n:'Salmon fillet (wild-caught)',pp:120,u:'g'},{n:'Broccoli florets',pp:150,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Extra virgin olive oil',pp:10,u:'ml'},{n:'Garlic (minced)',pp:4,u:'g'},{n:'Lemon zest + juice',pp:15,u:'ml'}],
   method:['Preheat oven to 200°C. Line baking tray with parchment.','Mix olive oil, ginger, turmeric, garlic, lemon zest/juice and pepper.','Place salmon on tray, brush with half the marinade. Toss broccoli with remaining.','Bake 12–15 minutes until salmon flakes easily and broccoli is tender-crisp.'],
   tip:'Prepare marinade ahead for quick cooking. Pairs perfectly with quinoa or sweet potato.'},
  {id:'ai_lentil_stew',  tier:'free',  emoji:'🫘', name:'Lentil Turmeric Stew',         kcal:275, feel:'Deep, earthy and filling — slow-release energy that lasts all afternoon.',
   badges:['🌿 Anti-Inflam','🫘 Plant Protein','🌾 High-Fibre'],
   base300:[{n:'Dry red lentils',pp:80,u:'g'},{n:'Vegetable broth',pp:400,u:'ml'},{n:'Carrots (sliced)',pp:50,u:'g'},{n:'Fresh spinach',pp:50,u:'g'},{n:'Fresh ginger (grated)',pp:10,u:'g'},{n:'Ground turmeric',pp:3,u:'g'},{n:'Onion (diced)',pp:50,u:'g'},{n:'Olive oil',pp:10,u:'ml'},{n:'Garlic (minced)',pp:5,u:'g'}],
   method:['Heat oil in pot. Sauté chopped onion, garlic, ginger and turmeric 3–4 minutes.','Add carrots and lentils — stir 1 minute.','Pour in broth, bring to boil, then simmer 20–25 minutes until lentils are soft.','Stir in spinach for the last 5 minutes. Season and serve hot.'],
   tip:'Batch cook and portion for meals — refrigerates 4 days, freezes 3 months. Gets better overnight.'},
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
  {id:'im_golden_milk',  tier:'free',  emoji:'🟡', name:'Golden Milk Turmeric Latte',  kcal:100, feel:'Warm, spiced and calming — a mug that feels like a hug for your immune system.',
   badges:['🛡️ Immunity','🟡 Curcumin','☕ Warming'],
   base300:[{n:'Unsweetened almond milk (or oat milk)',pp:250,u:'ml'},{n:'Ground turmeric',pp:2,u:'g'},{n:'Ground cinnamon',pp:1,u:'g'},{n:'Black pepper (pinch)',pp:0.5,u:'g'},{n:'Fresh ginger (grated)',pp:5,u:'g'},{n:'Raw honey (optional)',pp:5,u:'g'}],
   method:['Gently heat milk in a small saucepan over medium-low heat.','Add turmeric, cinnamon, black pepper and grated ginger. Whisk well.','Simmer (do not boil) for 5–7 minutes, stirring occasionally.','Remove from heat, stir in honey. Strain if using fresh ginger. Serve warm.'],
   tip:'Fat helps absorb curcumin — use full-fat milk or add a small dash of coconut oil. Make a spice mix in advance for quick daily batches.'},
  {id:'im_berry_smoothie',tier:'free', emoji:'🫐', name:'Berry Spinach Immunity Smoothie', kcal:175, feel:'Bright, fresh and alive — you can almost taste the vitamins going to work.',
   badges:['🛡️ Immunity','🫐 Antioxidants','🌿 Vitamin C'],
   base300:[{n:'Frozen mixed berries (blueberries/strawberries)',pp:100,u:'g'},{n:'Fresh spinach',pp:50,u:'g'},{n:'Banana',pp:60,u:'g'},{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Lemon juice',pp:5,u:'ml'},{n:'Chia seeds (optional)',pp:5,u:'g'}],
   method:['Add milk, lemon juice and spinach to blender first.','Add banana, berries and chia seeds.','Blend on high until creamy and smooth (1–2 minutes). Add a splash of water if too thick.','Taste and serve immediately.'],
   tip:'Prep smoothie packs with pre-portioned frozen ingredients — freeze them in bags for quick daily blending. Best consumed fresh.'},
  {id:'im_garlic_broth',  tier:'free', emoji:'🍲', name:'Garlic Ginger Vegetable Broth',kcal:95, feel:'Quiet and restorative — what you want when your body needs support.',
   badges:['🛡️ Immunity','🧄 Allicin','🌿 Anti-Inflam'],
   base300:[{n:'Vegetable broth (low-sodium)',pp:400,u:'ml'},{n:'Fresh ginger (grated)',pp:10,u:'g'},{n:'Garlic (minced)',pp:10,u:'g'},{n:'Carrots (sliced)',pp:50,u:'g'},{n:'Celery (chopped)',pp:50,u:'g'},{n:'Onion (chopped)',pp:30,u:'g'},{n:'Turmeric powder',pp:1,u:'g'},{n:'Black pepper (pinch)',pp:0.5,u:'g'}],
   method:['Heat a dash of olive oil in a pot. Sauté onion, carrot and celery for 5 minutes.','Add minced garlic and ginger — cook 1–2 minutes (do not burn garlic).','Pour in broth, add turmeric and pepper. Bring to boil, then simmer 15–20 minutes.','Stir in fresh parsley or coriander at end. Serve hot.'],
   tip:'Make a large batch and keep in the fridge for 4 days. Sip as a warm drink or use as a base for other soups. Freeze up to 3 months.'},
  {id:'im_chia_pudding',  tier:'free', emoji:'🫙', name:'Citrus Berry Chia Pudding',    kcal:200, feel:'Creamy, tart and fresh — a breakfast that quietly does serious work.',
   badges:['🛡️ Immunity','🫐 Vitamin C','🌾 Omega-3'],
   base300:[{n:'Unsweetened almond milk',pp:200,u:'ml'},{n:'Chia seeds',pp:20,u:'g'},{n:'Mixed berries (fresh or frozen)',pp:100,u:'g'},{n:'Orange or lemon juice',pp:30,u:'ml'},{n:'Raw honey (optional)',pp:5,u:'g'}],
   method:['In a jar, mix chia seeds, milk, honey and citrus juice. Stir well to avoid clumps.','Let sit 5 minutes, stir again to prevent settling.','Fold in berries. Cover and refrigerate 2+ hours or overnight.','Top with extra fresh berries before serving cold.'],
   tip:'Layer in glasses for attractive individual servings. Refrigerates up to 4 days — make a batch on Sunday for the whole week.'},
  {id:'im_yogurt_parfait',tier:'free', emoji:'🥛', name:'Greek Yogurt Berry Nut Parfait',kcal:250, feel:'Cool, crunchy and protein-rich — the kind of snack that doubles as a health investment.',
   badges:['🛡️ Immunity','🦠 Probiotics','🌰 Healthy Fats'],
   base300:[{n:'Plain Greek yogurt (unsweetened)',pp:150,u:'g'},{n:'Mixed fresh berries',pp:100,u:'g'},{n:'Mixed nuts and seeds (almonds, walnuts, pumpkin seeds)',pp:20,u:'g'},{n:'Raw honey (optional drizzle)',pp:5,u:'g'},{n:'Ground cinnamon (pinch)',pp:0.5,u:'g'}],
   method:['Layer in a glass or jar: start with yogurt base (about half).','Add a layer of berries and sprinkle nuts and cinnamon.','Repeat layers, finishing with berries and nuts on top.','Drizzle honey. Serve chilled.'],
   tip:'Set up a parfait bar for gatherings — bowls of ingredients, everyone builds their own. Assemble fresh; nuts soften if left overnight.'},
];

// ── GENERIC RENDER FOR EXTENDED HEALTH CATEGORIES ────────────────────────────
function renderExtHealthList(recipes, isPro) {
  return recipes.map(function(r) {
    var canView = r.tier==='free' || isPro;
    var sel = (S.healthPlan||[]).some(function(x){return x.id===r.id;});
    var disabled = !canView;
    var onclk = disabled
      ? "alert('\ud83d\udc51 Upgrade to Pro to unlock')"
      : 'healthToggleExtById(\''+r.id+'\')';
    var safeR = JSON.stringify(r).replace(/"/g,"'");
    var recipeBtn = disabled
      ? '<span style="font-size:10px;background:#1a1008;border:1px solid #c06020;border-radius:6px;color:#c08030;padding:3px 7px;">\ud83d\udc51 PRO</span>'
      : '<button onclick="event.stopPropagation();set({extHealthRecipe:'+safeR+',vitalCat:S.vitalCat})" style="background:#208060;border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe \u2192</button>';
    return '<div style="background:'+(sel?'#0a2018':disabled?'#0f0e0c':'#0f1a18')+';border:1px solid '+(sel?'#30c090':disabled?'#1a2018':'#1a4035')+';border-radius:10px;padding:12px;margin-bottom:6px;opacity:'+(disabled?0.45:1)+';">'
      +'<div style="display:flex;align-items:center;gap:10px;cursor:'+(disabled?'not-allowed':'pointer')+'" onclick="'+onclk+'">'
      +'<div style="width:22px;height:22px;border-radius:6px;background:'+(sel?'#30c090':'transparent')+';border:2px solid '+(sel?'#30c090':'#1a4035')+';display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#0f0e0c;">'+(sel?'\u2713':'')+'</div>'
      +'<span style="font-size:20px;">'+r.emoji+'</span>'
      +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:14px;color:'+(sel?'#f5e8cc':'#c0d4b0')+';font-weight:'+(sel?'bold':'normal')+';">'+r.name+'</div>'
        +'<div style="font-size:10px;color:'+(sel?'#30c090':'#406050')+';margin-top:2px;">'+r.kcal+' kcal \u00b7 '+r.feel+'</div>'
      +'</div>'
      +'<div style="display:flex;align-items:center;flex-shrink:0;">'+recipeBtn+'</div>'
      +'</div></div>';
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
      <button onclick="(function(){var id=S.extHealthRecipe.id;var plan=S.healthPlan||[];var inPlan=plan.some(function(x){return x.id===id;});if(inPlan){set({healthPlan:plan.filter(function(x){return x.id!==id;})});}else{var r=S.extHealthRecipe;set({healthPlan:[...plan,{id:r.id,name:r.name,emoji:r.emoji,type:'health',kcal:r.kcal,shopping:r.base300||[],servings:S.servings||1}]});}})()" style="width:100%;padding:13px;background:${(S.healthPlan||[]).some(x=>x.id===r.id)?'#0a2018':'#0f1a18'};border:2px solid ${(S.healthPlan||[]).some(x=>x.id===r.id)?'#30c090':'#1a4035'};border-radius:10px;color:${(S.healthPlan||[]).some(x=>x.id===r.id)?'#40d0a0':'#208060'};font-size:14px;cursor:pointer;margin-bottom:10px;">${(S.healthPlan||[]).some(x=>x.id===r.id)?'✓ In My Plan — tap to remove':'+ Add to My Plan'}</button>
      <button onclick="set({extHealthRecipe:null})" style="width:100%;padding:12px;background:#0a2018;border:1px solid #1a4035;border-radius:10px;color:#30c090;font-size:14px;cursor:pointer;margin-bottom:20px;">← Back to Health Hub</button>
    </div>
  </div>`;
}

// Map category id to recipe array + description
const EXT_HEALTH_MAP = {
  keto:         {recipes:typeof KETO_RECIPES!=='undefined'?KETO_RECIPES:[], desc:'High-fat, low-carb — your body runs on ketones not glucose. 🥑'},
  weightloss:   {recipes:typeof WEIGHTLOSS_RECIPES!=='undefined'?WEIGHTLOSS_RECIPES:[], desc:'Low-calorie, high-volume — full without the excess. 🥗'},
  highprotein:  {recipes:typeof HIGHPROTEIN_RECIPES!=='undefined'?HIGHPROTEIN_RECIPES:[], desc:'Build muscle, recover faster, stay full longer. 💪'},
  vegan:        {recipes:typeof PLANTBASED_RECIPES!=='undefined'?PLANTBASED_RECIPES:[], desc:'100% plant-powered — whole foods, full flavour. 🌱'},
  vegetarian:   {recipes:typeof VEGETARIAN_RECIPES!=='undefined'?VEGETARIAN_RECIPES:[], desc:'Eggs, dairy & plants — comforting, satisfying, no meat. 🧀'},
  guthealth:    {recipes:typeof GUTHEALTH_RECIPES!=='undefined'?GUTHEALTH_RECIPES:[], desc:'Feed your microbiome — fibre, ferments and probiotics. 🦠'},
  diabetic:     {recipes:typeof DIABETIC_RECIPES!=='undefined'?DIABETIC_RECIPES:[], desc:'Low GI, blood-sugar balanced — no spikes, no crashes. 🩸'},
  antiinflam:   {recipes:typeof ANTIINFLAM_RECIPES!=='undefined'?ANTIINFLAM_RECIPES:[], desc:'Reduce chronic inflammation with targeted whole foods. 🌿'},
  immunity:     {recipes:typeof IMMUNITY_RECIPES!=='undefined'?IMMUNITY_RECIPES:[], desc:'Fortify your defences from the inside out. 🛡️'},
};

function smoothiesHTML(){
  const isPro = tierAllows('pro');
  const vitalCat = S.vitalCat || null;
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

  // ── HEALTH GROUPS — same pattern as Braai "What are you planning?" ──
  const HEALTH_GROUPS = [
    { id:'lifestyle',  emoji:'🌱', label:'Lifestyle',         sub:'Vegan · Raw · Vegetarian',
      cats:[
        {id:'vegan',       emoji:'🌱', label:'Vegan',           desc:'100% plant-powered — whole foods, full flavour.'},
        {id:'raw',         emoji:'🥗', label:'Raw Foods',        desc:'Unprocessed. Enzyme-rich. Real food as nature intended.'},
        {id:'vegetarian',  emoji:'🥚', label:'Vegetarian',       desc:'Eggs, dairy & plants — no meat, full satisfaction.'},
      ]},
    { id:'drinks',     emoji:'🥤', label:'Drinks',             sub:'Juices · Smoothies',
      cats:[
        {id:'freshjuice',  emoji:'🍋', label:'Fresh Juice',      desc:'Cold-pressed and freshly squeezed — pure fruit and veg.'},
        {id:'smoothie',    emoji:'🥤', label:'Smoothies',         desc:'Blended, nourishing, quick.'},
      ]},
    { id:'gut',        emoji:'🦠', label:'Gut & Living Foods', sub:'Gut Health · Fermented',
      cats:[
        {id:'guthealth',   emoji:'🦠', label:'Gut Health',       desc:'Fibre, prebiotics and probiotics for your microbiome.'},
        {id:'fermented',   emoji:'🫙', label:'Fermented Foods',   desc:'Living cultures, ancient wisdom, modern gut science.'},
      ]},
    { id:'fresheasy',  emoji:'🥗', label:'Fresh & Easy',       sub:'Oats · Muffins · Salads',
      cats:[
        {id:'oats',        emoji:'🌙', label:'Overnight Oats',   desc:'Prep the night before — wake up to a ready breakfast.'},
        {id:'muffins',     emoji:'🧁', label:'Muffins',           desc:'No refined sugar · Wholesome · Meal prep friendly.'},
        {id:'salads',      emoji:'🥗', label:'Salads',            desc:'Fresh, flexible — add any protein you like.'},
      ]},
    { id:'bodygoals',  emoji:'💪', label:'Body Goals',          sub:'Keto · Weight Loss · High-Protein',
      cats:[
        {id:'keto',        emoji:'🥑', label:'Keto / Low-Carb',  desc:'High-fat, low-carb — your body runs on ketones.'},
        {id:'weightloss',  emoji:'⚖️', label:'Weight Loss',       desc:'Low-calorie, high-volume — full without the excess.'},
        {id:'highprotein', emoji:'💪', label:'High-Protein',      desc:'Build muscle, recover faster, stay full longer.'},
      ]},
    { id:'wellness',   emoji:'🩺', label:'Wellness',            sub:'Diabetic · Immunity · Anti-Inflammatory',
      cats:[
        {id:'diabetic',    emoji:'🩸', label:'Diabetic-Friendly', desc:'Low GI, blood-sugar balanced — no spikes, no crashes.'},
        {id:'immunity',    emoji:'🛡️', label:'Immunity Boost',    desc:'Fortify your defences from the inside out.'},
        {id:'antiinflam',  emoji:'🌿', label:'Anti-Inflammatory', desc:'Reduce chronic inflammation with targeted whole foods.'},
      ]},
  ];

  const vc = vitalCat;
  const activeGroup = HEALTH_GROUPS.find(g => g.cats.some(c => c.id === vc));
  const healthGroup = S.healthGroup || null; // which group card was tapped

  // Serving counter
  const isMuffins = vc==="muffins";
  const srv = S.servings||1;
  const hubCounter = `
    <div style="background:#0f1a18;border:1px solid #1a3028;border-radius:10px;padding:12px;margin-bottom:16px;">
      <div style="font-size:10px;color:#208060;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">${isMuffins?'🧁 Batches':'👥 Servings'}</div>
      <div style="display:flex;gap:6px;margin-bottom:10px;">
        <button onclick="set({servings:1})" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid ${srv<=2?'#20c080':'#1a3028'};background:${srv<=2?'#0a2018':'transparent'};color:${srv<=2?'#30d090':'#406050'};font-size:12px;cursor:pointer;line-height:1.3;">🧍 Just me<br><span style="font-size:10px;opacity:0.7;">1–2</span></button>
        <button onclick="set({servings:4})" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid ${srv>=3&&srv<=6?'#20c080':'#1a3028'};background:${srv>=3&&srv<=6?'#0a2018':'transparent'};color:${srv>=3&&srv<=6?'#30d090':'#406050'};font-size:12px;cursor:pointer;line-height:1.3;">👨‍👩‍👧 Family<br><span style="font-size:10px;opacity:0.7;">3–6</span></button>
        <button onclick="set({servings:10})" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid ${srv>=7?'#20c080':'#1a3028'};background:${srv>=7?'#0a2018':'transparent'};color:${srv>=7?'#30d090':'#406050'};font-size:12px;cursor:pointer;line-height:1.3;">🎉 Crowd<br><span style="font-size:10px;opacity:0.7;">7+</span></button>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <button onclick="set({servings:Math.max(1,S.servings-1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;line-height:1;cursor:pointer;flex-shrink:0;">−</button>
        <div style="flex:1;text-align:center;">
          <span style="font-size:28px;color:#40d0a0;font-weight:bold;">${srv}</span>
          <span style="font-size:11px;color:#208060;margin-left:4px;">${isMuffins?'batches':'servings'}</span>
        </div>
        <button onclick="set({servings:Math.min(50,S.servings+1)})" style="width:36px;height:36px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:20px;line-height:1;cursor:pointer;flex-shrink:0;">+</button>
      </div>
    </div>`;

  const healthHowOpen = S.healthHowOpen || false;

  // ── RECIPE DETAIL VIEW (ext categories) ───────────────────────────
  if(S.extHealthRecipe && EXT_HEALTH_MAP[vc]) {
    return extHealthRecipeHTML(S.extHealthRecipe, S.servings||1);
  }

  // ── RECIPE LIST VIEW (inside a category) ─────────────────────────
  // If a vitalCat is set AND we know which group it belongs to, show the recipe list
  if(vc && activeGroup) {
    const extCat = EXT_HEALTH_MAP[vc];
    const listContent = extCat ? `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">${extCat.desc}</p>
        ${renderExtHealthList(extCat.recipes, isPro)}
      ` :
      vc==="freshjuice" ? `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Cold-pressed and freshly squeezed — pure fruit and veg 🍋</p>
        ${renderHealthList(FRESH_JUICES,"juice","healthOpenJuice",isPro)}
      ` :
      vc==="smoothie" ? `
        <div class="pill-row">
          ${SMOOTHIE_CATS.map(c=>`<button class="pill" onclick="set({smoothieCat:'${c.id}'})" style="background:${S.smoothieCat===c.id?"#0a2018":"transparent"};border-color:${S.smoothieCat===c.id?"#20c080":"#1a3028"};color:${S.smoothieCat===c.id?"#30d090":"#408060"};">${c.emoji} ${c.label}</button>`).join("")}
        </div>
        ${renderHealthList(SMOOTHIES.filter(sm=>S.smoothieCat==="all"||sm.cat===S.smoothieCat),"smoothie","healthOpenSmoothie",isPro)}
      ` :
      vc==="oats" ? `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Prep the night before — wake up to a ready breakfast 🌅</p>
        ${renderHealthList(OVERNIGHT_OATS,"oats","healthOpenOats",isPro)}
      ` :
      vc==="muffins" ? `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">No refined sugar · Wholesome ingredients · Meal prep friendly 🧁</p>
        ${renderHealthList(HEALTHY_MUFFINS,"muffin","healthOpenMuffin",isPro)}
      ` :
      vc==="raw" ? `
        <p style="font-size:12px;color:#208060;font-style:italic;margin-bottom:14px;">Unprocessed. Enzyme-rich. Real food as nature intended 🌿</p>
        ${renderHealthList(RAW_AND_REAL,"raw","healthOpenRaw",isPro)}
      ` :
      vc==="fermented" ? fermentedTabHTML() :
      vc==="salads" ? `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:48px;margin-bottom:16px;">🥗</div>
          <div style="font-size:18px;color:#40d0a0;margin-bottom:8px;">Salads — Coming Soon</div>
          <div style="font-size:13px;color:#208060;line-height:1.6;">Fresh, flexible salads with any protein you like.<br>Recipes loading soon!</div>
        </div>
      ` :
      vc==="myplan" ? renderHealthMyPlan(isPro) : '';

    // Find the active cat details for the sub-header
    const activeCat = activeGroup.cats.find(c => c.id === vc);

    return `<div style="min-height:100vh;background:#0f0e0c;">
      <!-- Sub-section header -->
      <div style="background:#0f1a18;border-bottom:1px solid #1a4030;padding:14px 16px;">
        <button onclick="set({vitalCat:null,healthGroup:null,extHealthRecipe:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;padding:0;display:block;margin-bottom:10px;">← ${activeGroup.emoji} ${activeGroup.label}</button>
        <h2 style="margin:0 0 2px;font-size:20px;color:#f5e8cc;font-family:Georgia,serif;">${activeCat?activeCat.emoji:''} ${activeCat?activeCat.label:''}</h2>
        <p style="margin:0 0 10px;font-size:11px;color:#60c090;">${activeCat?activeCat.desc:''}</p>
        <!-- pill tabs for sibling cats in this group -->
        <div style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:2px;">
          ${activeGroup.cats.map(c=>`
            <button onclick="set({vitalCat:'${c.id}',extHealthRecipe:null})"
              style="flex-shrink:0;padding:6px 12px;border-radius:20px;border:1px solid ${vc===c.id?'#20c080':'#1a3028'};background:${vc===c.id?'#0a2018':'transparent'};color:${vc===c.id?'#30d090':'#408060'};font-size:11px;cursor:pointer;white-space:nowrap;">
              ${c.emoji} ${c.label}
            </button>`).join('')}
        </div>
      </div>
      <div class="content">${listContent}</div>
    </div>`;
  }

  // ── GROUP CARD VIEW (tapped a group, show its cats) ───────────────
  if(healthGroup) {
    const grp = HEALTH_GROUPS.find(g => g.id === healthGroup);
    if(grp) {
      return `<div style="min-height:100vh;background:#0f0e0c;">
        <div style="background:#0f1a18;border-bottom:1px solid #1a4030;padding:14px 16px;">
          <button onclick="set({healthGroup:null,vitalCat:null})" style="background:none;border:none;color:#30c090;font-size:13px;cursor:pointer;padding:0;display:block;margin-bottom:10px;">← Health Hub</button>
          <h2 style="margin:0 0 4px;font-size:22px;color:#f5e8cc;font-family:Georgia,serif;">${grp.emoji} ${grp.label}</h2>
          <p style="margin:0;font-size:11px;color:#60c090;">${grp.sub}</p>
        </div>
        <div class="content">
          <p style="font-size:11px;color:#208060;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">What are you looking for?</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${grp.cats.map(c=>`
              <div onclick="set({vitalCat:'${c.id}',healthGroup:'${grp.id}',extHealthRecipe:null})"
                style="background:#0f1a18;border:1px solid #1a4030;border-radius:12px;padding:12px 6px;cursor:pointer;text-align:center;position:relative;">
                <div style="font-size:26px;margin-bottom:5px;">${c.emoji}</div>
                <div style="font-size:11px;color:#e0d4b8;font-weight:bold;margin-bottom:2px;">${c.label}</div>
                <div style="font-size:9px;color:#406050;line-height:1.3;">${c.desc}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
    }
  }

  // ── HOME SCREEN — 6 big cards, exactly like Braai ────────────────
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#0a1a10 0%,#0f2818 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(4,14,8,0.3) 0%,rgba(4,14,8,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #208060;border-radius:20px;color:#30c090;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🌿 Health Hub</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#60c090;font-style:italic;">Nourish · Heal · Energise</p>
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

    <!-- ══ HOW IT WORKS + COUNTER ══ -->
    <div style="background:#0f1a18;border-bottom:1px solid #1a3028;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
      <div style="flex:1;">
        <button onclick="set({healthHowOpen:!S.healthHowOpen})"
          style="background:none;border:none;color:#30c090;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
          ${healthHowOpen?'▲':'▼'} How it works
        </button>
        ${healthHowOpen?`
          <div onclick="set({healthHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
          <div style="position:relative;z-index:10;background:#0a1a10;border:1px solid #1a4030;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#90c0a0;line-height:1.6;">
            <strong style="color:#30c090;">1. Pick a category</strong> — tap any card below.<br>
            <strong style="color:#30c090;">2. Set servings</strong> — all quantities scale automatically.<br>
            <strong style="color:#30c090;">3. Add to My Plan</strong> — build your weekly health routine.<br>
            <strong style="color:#30c090;">4. Shopping list</strong> — everything in one list, ready to share.<br>
            <span style="color:#208060;font-size:11px;">All recipes in grams and ml — no guesswork.</span>
          </div>
        `:''}
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
        <button onclick="set({servings:Math.max(1,S.servings-1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:18px;line-height:1;cursor:pointer;">−</button>
        <div style="text-align:center;min-width:44px;">
          <div style="font-size:22px;color:#30d090;font-weight:bold;line-height:1;">${S.servings||1}</div>
          <div style="font-size:9px;color:#208060;letter-spacing:1px;text-transform:uppercase;">people</div>
        </div>
        <button onclick="set({servings:Math.min(50,S.servings+1)})" style="width:32px;height:32px;border-radius:50%;background:#0a2018;border:2px solid #20c080;color:#20c080;font-size:18px;line-height:1;cursor:pointer;">+</button>
      </div>
    </div>

    <!-- ══ 6 CATEGORY CARDS — same as Braai ══ -->
    <div class="content">
      <p style="font-size:11px;color:#208060;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">What are you looking for?</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
        ${HEALTH_GROUPS.map(g=>`
          <div onclick="set({healthGroup:'${g.id}',vitalCat:null,extHealthRecipe:null})"
            style="background:#0f1a18;border:1px solid #1a4030;border-radius:12px;padding:12px 6px;cursor:pointer;text-align:center;position:relative;">
            <div style="font-size:26px;margin-bottom:5px;">${g.emoji}</div>
            <div style="font-size:12px;color:#e0d4b8;font-weight:bold;margin-bottom:2px;">${g.label}</div>
            <div style="font-size:9px;color:#406050;line-height:1.3;">${g.sub}</div>
          </div>`).join('')}
      </div>
      <!-- My Plan shortcut -->
      <div onclick="set({vitalCat:'myplan',healthGroup:'myplan'})"
        style="background:#0a1a10;border:2px solid #1a4030;border-radius:14px;padding:16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <div>
          <div style="font-size:15px;color:#40d0a0;font-weight:bold;">📋 My Health Plan</div>
          <div style="font-size:11px;color:#208060;margin-top:2px;">Saved recipes · Shopping list</div>
        </div>
        <span style="font-size:22px;">🛒</span>
      </div>
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

