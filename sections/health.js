function healthOpenJuice(id){
  const j = FRESH_JUICES.find(x=>x.id===id);
  if(j) set({activeSmoothie:{...j, colour:'#f070a0', cat:'freshjuice'}});
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
  const bg = inPlan ? '#d04080' : 'transparent';
  const br = inPlan ? '#d04080' : '#601040';
  const tick = inPlan ? '&#x2713;' : '';
  return '<div onclick="healthToggleById(\''+id+'\',\''+type+'\',S.servings)" style="width:24px;height:24px;border-radius:6px;background:'+bg+';border:2px solid '+br+';display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;color:#f5e8cc;">'+tick+'</div>';
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
    var info = type==='juice' ? (item.kcal*srv)+' kcal · '+(srv*300)+'ml'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='smoothie' ? (item.kcal*srv)+' kcal'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='oats' ? (item.kcal*srv)+' kcal'+(item.costPP?' · ~R'+(item.costPP*srv)+'/pp':'')
      : type==='muffin' ? item.kcal+' kcal each · '+(srv*(item.makes||12))+' muffins'
      : (item.kcal*srv)+' kcal';
    var cardBg   = sel ? '#2a0832' : disabled ? '#120810' : '#1a0820';
    var cardBdr  = sel ? '#d04080' : disabled ? '#2a1020' : '#601040';
    var cbBg     = sel ? '#d04080' : 'transparent';
    var cbBdr    = sel ? '#d04080' : '#601040';
    var nameCl   = sel ? '#f5e8cc' : '#e0c4d4';
    var infoCl   = sel ? '#f070a0' : '#a03060';
    var onclk = disabled
      ? "alert('👑 Upgrade to Pro to unlock')"
      : 'healthToggleById(\''+item.id+'\',\''+type+'\',S.servings)';
    var recipeBtn = disabled
      ? '<span style="font-size:10px;background:#1a0820;border:1px solid #803060;border-radius:6px;color:#a03060;padding:3px 7px;">👑 PRO</span>'
      : '<button onclick="event.stopPropagation();'+openFn+'(\''+item.id+'\')" style="background:#2a0818;border:1px solid #d04080;border-radius:6px;padding:5px 10px;font-size:11px;color:#f070a0;cursor:pointer;white-space:nowrap;font-family:Georgia,serif;">Recipe →</button>';
    return '<div style="background:'+cardBg+';border:1px solid '+cardBdr+';border-radius:10px;padding:12px;margin-bottom:6px;opacity:'+(disabled?0.5:1)+';">'
      +'<div style="display:flex;align-items:center;gap:10px;cursor:'+(disabled?'not-allowed':'pointer')+'" onclick="'+onclk+'">'
      +'<div style="width:22px;height:22px;border-radius:6px;background:'+cbBg+';border:2px solid '+cbBdr+';display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;color:#f5e8cc;">'+(sel?'✓':'')+'</div>'
      +'<span style="font-size:20px;">'+item.emoji+'</span>'
      +'<div style="flex:1;min-width:0;">'
        +'<div style="font-size:14px;color:'+nameCl+';font-weight:'+(sel?'bold':'normal')+';font-family:Georgia,serif;">'+item.name+'</div>'
        +'<div style="font-size:10px;color:'+infoCl+';margin-top:2px;">'+info+'</div>'
        +(item.howItFeels?'<div style="font-size:10px;color:#803060;margin-top:1px;font-style:italic;">'+item.howItFeels+'</div>':'')
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

function healthToggleShopItem(key){
  var c = Object.assign({},S.checkedHealthItems||{});
  c[key] = !c[key];
  set({checkedHealthItems:c});
}

function renderHealthMyPlan(isPro){
  const plan = S.healthPlan||[];
  const checked = S.checkedHealthItems||{};
  if(plan.length===0){
    return '<div style="text-align:center;padding:40px 20px;">'
      +'<div style="font-size:40px;margin-bottom:16px;">📋</div>'
      +'<div style="font-size:16px;color:#f070a0;margin-bottom:8px;font-family:Georgia,serif;">Your Health Plan is empty</div>'
      +'<div style="font-size:13px;color:#a03060;margin-bottom:20px;">Tap any recipe checkbox to add to your plan</div>'
      +'<button onclick="set({vitalCat:null,healthGroup:null})" style="padding:12px 24px;background:#1a0820;border:2px solid #d04080;border-radius:10px;color:#f070a0;font-size:14px;cursor:pointer;font-family:Georgia,serif;">← Browse Recipes</button>'
      +'</div>';
  }
  const shopMap = {};
  plan.forEach(function(item){
    (item.shopping||[]).forEach(function(ing){
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
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #2a0818;">'
      +'<div style="display:flex;align-items:center;gap:10px;">'
      +'<span style="font-size:20px;">'+item.emoji+'</span>'
      +'<div><div style="font-size:14px;color:#e0c4d4;font-family:Georgia,serif;">'+item.name+'</div>'
      +'<div style="font-size:11px;color:#f070a0;margin-top:2px;">'+(item.servings||1)+' serving'+((item.servings||1)!==1?'s':'')+' · '+item.type+'</div></div></div>'
      +'<button onclick="healthRemoveFromPlan(\''+item.id+'\')" style="background:#1a0820;border:1px solid #601040;border-radius:6px;padding:4px 10px;color:#d04080;font-size:11px;cursor:pointer;font-family:Georgia,serif;">Remove</button>'
      +'</div>';
  }).join('');
  var shopHtml = shopItems.length===0
    ? '<div style="color:#a03060;font-size:12px;padding:8px 0;">Add recipes with ingredients to see your list</div>'
    : shopItems.map(function(item){
        var ck = checked['h_'+item.key] || false;
        var totalStr = item.total>=1000&&item.unit==='g'?(item.total/1000).toFixed(1)+'kg'
          :item.total>=1000&&item.unit==='ml'?(item.total/1000).toFixed(1)+'L'
          :Math.round(item.total*10)/10+(item.unit||'');
        return '<div onclick="healthToggleShopItem(&quot;h_'+item.key+'&quot;)" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #1a0818;cursor:pointer;opacity:'+(ck?0.35:1)+';">'
          +'<div style="width:20px;height:20px;border-radius:4px;border:2px solid '+(ck?'#d04080':'#601040')+';background:'+(ck?'#d04080':'transparent')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+(ck?'<span style="color:#f5e8cc;font-size:11px;">✓</span>':'')+'</div>'
          +'<div style="flex:1;"><div style="font-size:13px;color:'+(ck?'#3a1020':'#e0c4d4')+';">'+item.name+'</div>'
          +'<div style="font-size:10px;color:#803060;">'+item.source+'</div></div>'
          +'<div style="font-size:13px;color:'+(ck?'#3a1020':'#f5c842')+';font-weight:bold;">'+totalStr+'</div>'
          +'</div>';
      }).join('');
  var kcalPerPerson = plan.reduce(function(sum,i){return sum+(i.kcal||0);},0);
  return '<div style="font-size:16px;color:#f070a0;font-weight:bold;margin-bottom:4px;font-family:Georgia,serif;">📋 My Health Plan</div>'
    +'<div style="font-size:12px;color:#a03060;margin-bottom:14px;">'+plan.length+' recipe'+(plan.length!==1?'s':'')+' · '+(S.servings||1)+' person'+((S.servings||1)!==1?'s':'')+' · '+kcalPerPerson+' kcal/person</div>'
    +'<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:12px;">'+planHtml+'</div>'
    +(isPro
      ? '<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:14px;margin-bottom:12px;"><div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:13px;color:#d04080;">🔥 Calories per person</div><div style="font-size:10px;color:#803060;margin-top:2px;">All selected dishes combined</div></div><div style="font-size:26px;color:#f070a0;font-weight:bold;">'+kcalPerPerson+'<span style="font-size:12px;"> kcal</span></div></div></div>'
      : '<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;"><div style="font-size:12px;color:#a03060;">🔥 Calorie counter — <strong style="color:#f070a0;">Tinza Pro R99/month</strong></div></div>')
    +'<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:14px;margin-bottom:12px;">'
      +'<div style="font-size:10px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">💰 Cost Estimate</div>'
      +'<div style="font-size:14px;color:#603040;font-style:italic;">Ingredient pricing coming soon</div>'
      +'<div style="font-size:10px;color:#401020;margin-top:6px;line-height:1.5;">Based on current Checkers/retail prices · Always buy 10% extra</div>'
    +'</div>'
    +'<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:12px;">'
      +'<div style="font-size:11px;color:#f070a0;font-weight:bold;margin-bottom:6px;">⚖️ How portions work</div>'
      +'<div style="font-size:11px;color:#a07080;line-height:1.8;font-family:Georgia,serif;"><b style="color:#e0c4d4;">Drinks & smoothies</b> — fixed portion (200–300ml).<br><b style="color:#e0c4d4;">Muffins</b> — 1 muffin per person.<br><b style="color:#e0c4d4;">Meals & salads</b> — pizza rule: 1 dish = full plate. 2 = half each.<br><span style="color:#803060;font-size:10px;">Tip: plan 1 drink + 1–2 meals for a full day.</span></div>'
    +'</div>'
    +'<div style="font-size:10px;letter-spacing:2px;color:#f070a0;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List</div>'
    +(isPro
      ? '<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:11px;color:#a03060;margin-bottom:8px;">Tap items you already have to tick them off</div>'+shopHtml+(shopItems.length>0?'<div style="margin-top:10px;padding-top:8px;border-top:1px solid #2a0818;display:flex;justify-content:space-between;"><span style="font-size:11px;color:#a03060;">'+shopItems.filter(function(i){return !checked['h_'+i.key];}).length+' of '+shopItems.length+' items remaining</span><button onclick="set({checkedHealthItems:{}})" style="background:none;border:none;color:#d04080;font-size:11px;cursor:pointer;text-decoration:underline;">Reset all</button></div>':'')+'</div>'
      : '<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;"><div style="font-size:32px;margin-bottom:8px;">🔒</div><div style="font-size:14px;color:#f070a0;font-weight:bold;margin-bottom:6px;font-family:Georgia,serif;">Full Shopping List</div><div style="font-size:12px;color:#803060;margin-bottom:10px;line-height:1.6;">All ingredients combined, no duplicates</div><div style="font-size:13px;color:#d04080;font-weight:bold;">Unlock with Tinza Pro — R99/month</div></div>')
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">'
    +'<button onclick="healthSharePlan()" style="padding:14px;border-radius:10px;border:1px solid #601040;background:#1a0820;color:#d04080;font-size:12px;cursor:pointer;font-family:Georgia,serif;">📲 Share Plan</button>'
    +(isPro?'<button onclick="healthShareShoppingList()" style="padding:14px;border-radius:10px;border:2px solid #d04080;background:#2a0818;color:#f070a0;font-size:12px;cursor:pointer;font-family:Georgia,serif;">📲 Share List</button>':'<div></div>')
    +'</div>';
}

function healthHTML(){
  const isPro = tierAllows('pro');
  const srv = S.servings||1;
  const howOpen = S.healthHowOpen||false;
  const activeTab = S.healthTab||'smoothies';
  const searchVal = S.healthSearch||'';

  if(S.healthShowPlan) return `
    <div style="min-height:100vh;background:#0f0e0c;">
      <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#0a1008 0%,#1a2810 100%);">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.3) 0%,rgba(10,4,14,0.75) 100%);z-index:1;"></div>
        <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #803060;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
        <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 14px;">
          <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🌿 Health Hub</h1>
          <p style="margin:0;font-size:11px;color:#d090b0;font-style:italic;">My Plan</p>
        </div>
      </div>
      <div style="background:#1a0814;border-bottom:1px solid #401030;padding:10px 16px;">
        <button onclick="set({healthShowPlan:false})" style="background:none;border:none;color:#d04080;font-size:13px;cursor:pointer;padding:0;font-family:Georgia,serif;">← Back to Browse</button>
      </div>
      <div class="content">${renderHealthMyPlan(isPro)}</div>
    </div>`;

  const tabs = [
    {id:'smoothies', label:'🥤 Smoothies'},
    {id:'juices',    label:'🍊 Fresh Juices'},
    {id:'oats',      label:'🌾 Overnight Oats'},
    {id:'muffins',   label:'🧁 Muffins'},
    {id:'raw',       label:'🥗 Raw & Real'},
    {id:'plans',     label:'💪 Meal Plans'},
  ];

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#0a1008 0%,#182814 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.3) 0%,rgba(10,4,14,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #803060;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🌿 Health Hub</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#d090b0;font-style:italic;">Juices · Smoothies · Oats · Healthy bakes · Meal plans</p>
        <div style="display:flex;align-items:center;background:rgba(30,8,24,0.85);border:1px solid #803060;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#d04080;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search health recipes…" oninput="set({healthSearch:this.value})" value="${searchVal}" style="flex:1;background:none;border:none;outline:none;color:#f0d0e0;font-size:13px;font-family:Georgia,serif;"/>
          ${searchVal?`<button onclick="set({healthSearch:''})" style="background:none;border:none;color:#803060;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>
    <div style="background:#1a0814;border-bottom:1px solid #401030;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="flex:1;">
          <button onclick="set({healthHowOpen:!S.healthHowOpen})" style="background:none;border:none;color:#d04080;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${howOpen?'▲':'▼'} How it works
          </button>
          ${howOpen?`<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c0a0b0;line-height:1.6;font-family:Georgia,serif;"><strong style="color:#f070a0;">1. Pick a category</strong> — Smoothies, Juices, Oats, Muffins or Meal Plans.<br><strong style="color:#f070a0;">2. Set servings</strong> — use the ± control. All quantities scale automatically.<br><strong style="color:#f070a0;">3. Add to plan</strong> — tap any recipe checkbox.<br><strong style="color:#f070a0;">4. Shopping list</strong> — all ingredients in My Plan (Pro).<br><span style="color:#803060;font-size:11px;">Tip: plan 1 drink + 1–2 meals for a balanced day.</span></div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({servings:Math.max(1,S.servings-1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f070a0;font-weight:bold;line-height:1;">${srv}</div>
            <div style="font-size:9px;color:#803060;letter-spacing:1px;text-transform:uppercase;">${srv===1?'person':'people'}</div>
          </div>
          <button onclick="setQuiet({servings:Math.min(20,S.servings+1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;margin-top:12px;-webkit-overflow-scrolling:touch;">
        ${tabs.map(t=>`<button onclick="set({healthTab:'${t.id}'})" style="flex-shrink:0;padding:7px 12px;border-radius:20px;border:1px solid ${activeTab===t.id?'#d04080':'#3a1020'};background:${activeTab===t.id?'#2a0818':'transparent'};color:${activeTab===t.id?'#f070a0':'#703050'};font-size:11px;cursor:pointer;font-family:Georgia,serif;white-space:nowrap;">${t.label}</button>`).join('')}
      </div>
      ${(S.healthPlan||[]).length>0?`<button onclick="set({healthShowPlan:true})" style="width:100%;margin-top:10px;padding:10px;background:#2a0818;border:2px solid #d04080;border-radius:8px;color:#f070a0;font-size:13px;cursor:pointer;font-family:Georgia,serif;">📋 My Plan (${(S.healthPlan||[]).length} recipe${(S.healthPlan||[]).length!==1?'s':''}) →</button>`:''}
    </div>
    <div class="content">
      ${activeTab==='smoothies'?`<div style="margin-bottom:4px;"><div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin:14px 0 8px;">🥤 Smoothies</div>${renderHealthList(typeof SMOOTHIES!=='undefined'?SMOOTHIES:[], 'smoothie', 'healthOpenSmoothie', isPro)}</div>`:''}
      ${activeTab==='juices'?`<div style="margin-bottom:4px;"><div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin:14px 0 8px;">🍊 Fresh Juices</div>${renderHealthList(typeof FRESH_JUICES!=='undefined'?FRESH_JUICES:[], 'juice', 'healthOpenJuice', isPro)}</div>`:''}
      ${activeTab==='oats'?`<div style="margin-bottom:4px;"><div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin:14px 0 8px;">🌾 Overnight Oats</div>${renderHealthList(typeof OVERNIGHT_OATS!=='undefined'?OVERNIGHT_OATS:[], 'oats', 'healthOpenOats', isPro)}</div>`:''}
      ${activeTab==='muffins'?`<div style="margin-bottom:4px;"><div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin:14px 0 8px;">🧁 Healthy Muffins</div>${renderHealthList(typeof HEALTHY_MUFFINS!=='undefined'?HEALTHY_MUFFINS:[], 'muffin', 'healthOpenMuffin', isPro)}</div>`:''}
      ${activeTab==='raw'?`<div style="margin-bottom:4px;"><div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin:14px 0 8px;">🥗 Raw & Real</div>${renderHealthList(typeof RAW_AND_REAL!=='undefined'?RAW_AND_REAL:[], 'raw', 'healthOpenRaw', isPro)}</div>`:''}
      ${activeTab==='plans'?`<div style="background:#1a0820;border:1px solid #601040;border-radius:12px;padding:20px;text-align:center;margin-top:20px;"><div style="font-size:36px;margin-bottom:10px;">💪</div><div style="font-size:15px;color:#f070a0;margin-bottom:8px;font-family:Georgia,serif;">Meal Plans</div><div style="font-size:12px;color:#803060;line-height:1.6;">Keto · Weight Loss · High Protein · Plant-Based · Gut Health — coming soon!</div></div>`:''}
    </div>
  </div>`;
}
