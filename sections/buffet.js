// ── EVENTS COLOUR CONSTANTS ───────────────────────────────────────
const BC    = '#c06020';   // primary pink/magenta border & text
const BCbg  = '#1a1208';   // dark background for events header

// ── PORTION BRAIN — calcPortions ─────────────────────────────────
function calcPortions(recipes, type, guests){
  const count = recipes.length;
  if(!count) return [];
  return recipes.map(r => {
    let gpp;
    if(type === 'mains'){
      const base = [350, 175, 117, 88];
      gpp = base[Math.min(count-1, 3)];
    } else if(type === 'starters'){
      gpp = count === 1 ? 150 : count === 2 ? 100 : 75;
    } else if(type === 'salads' || type === 'sides'){
      const pct = [1, 0.8, 0.67, 0.57, 0.5];
      gpp = Math.round(100 * pct[Math.min(count-1, 4)]);
    } else if(type === 'desserts'){
      gpp = 120;
    } else {
      gpp = r.perPerson ? r.perPerson.meat : 100;
    }
    const totalG  = Math.round(gpp * guests * 1.1);
    const totalKg = (totalG / 1000).toFixed(2);
    return { ...r, gPerPerson: gpp, totalKg, totalG };
  });
}

// ── SHOPPING LIST HTML ────────────────────────────────────────────
function shopListHTML(mains, sides, salads, starters, desserts){
  const g = S.eventGuests;
  const all = [...(starters||[]), ...(mains||[]), ...(sides||[]), ...(salads||[]), ...(desserts||[])];
  if(!all.length) return '<div style="font-size:12px;color:#c06020;padding:10px;">No dishes selected yet.</div>';
  const map = {};
  for(const r of all){
    if(!r.ingredients) continue;
    for(const ing of r.ingredients){
      if(!ing || !ing.n) continue;
      const key = ing.n.toLowerCase().trim();
      if(!map[key]) map[key] = { n: ing.n, total: 0, u: ing.u||'' };
      if(ing.pp && (ing.u==='g'||ing.u==='ml'||ing.u==='kg'||ing.u==='l')){
        map[key].total += ing.pp * g * 1.1;
      }
    }
  }
  const items = Object.values(map);
  const listHTML = items.map(i => {
    const amt = i.total > 0 ? (i.u==='g'||i.u==='ml') ? `${Math.round(i.total)}${i.u}` : `${(i.total/1000).toFixed(1)}${i.u==='g'?'kg':'L'}` : '';
    return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1208;font-size:12px;">
      <span style="color:#d0b8c8;">${i.n}</span>
      <span style="color:#f5c842;flex-shrink:0;margin-left:8px;">${amt}</span>
    </div>`;
  }).join('');
  return `<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-top:10px;">
    <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:10px;">🛒 Shopping List — ${g} guests (+10% buffer)</div>
    ${listHTML}
    <div style="font-size:10px;color:#af689e;margin-top:8px;">Always verify quantities with your supplier.</div>
  </div>`;
}

function buffetItemCard(r, selArr, stateKey){
  const isPro = tierAllows('pro');
  const sel = isPro && (S[stateKey]||[]).includes(r.id);
  const bg  = sel ? '#2a1808' : '#161018';
  const bdr = sel ? BC : '#3a1020';
  const recipeBtn = `<button onclick="event.stopPropagation();openEventRecipe('${r.id}')" style="background:none;border:1px solid #3a2010;border-radius:6px;padding:4px 10px;color:${BC};font-size:11px;cursor:pointer;flex-shrink:0;margin-left:8px;">Recipe →</button>`;

  if(!isPro){
    // Free: browse only, no tick box, just recipe button
    return `<div style="background:#161018;border:1px solid #2a1a10;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;">
        <div style="flex:1;">
          <div style="font-size:14px;color:#c8b898;">${r.emoji||'🍽️'} ${r.name}</div>
          ${r.perPerson?`<div style="font-size:11px;color:#c46188;margin-top:2px;">${r.perPerson.meat} ${r.perPerson.unit||'g'} per person</div>`:''}
        </div>
        ${recipeBtn}
      </div>
    </div>`;
  }

  // Pro: full checkbox selection
  const checkbox = `<div style="width:22px;height:22px;border-radius:5px;border:2px solid ${sel?BC:'#3a2010'};background:${sel?BC:'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:10px;">${sel?'<span style="color:#fff;font-size:13px;font-weight:bold;">✓</span>':''}</div>`;
  const toggleAction = `setQuiet({${stateKey}:toggle(S.${stateKey}||[],'${r.id}')})`;
  return `<div onclick="${toggleAction}" style="background:${bg};border:1px solid ${bdr};border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;">
    <div style="display:flex;align-items:center;">
      ${checkbox}
      <div style="flex:1;">
        <div style="font-size:14px;color:#e0d4b8;">${r.emoji||'🍽️'} ${r.name}${r.costPP?` <span style="background:#1a1208;border:1px solid #3a2010;border-radius:8px;font-size:10px;color:#c060a0;padding:2px 6px;margin-left:4px;">~R${r.costPP}/pp</span>`:''}</div>
        ${r.perPerson?`<div style="font-size:11px;color:#c06020;margin-top:2px;">${r.perPerson.meat} ${r.perPerson.unit||'g'} per person</div>`:''}
      </div>
      ${recipeBtn}
    </div>
  </div>`;
}

  function buffetQuickNav(activeStep){
    const secs = [
      {step:2,emoji:'🥗',label:'Starters', count:(S.eventSelectedStarters||[]).length},
      {step:3,emoji:'🥩',label:'Mains',    count:(S.eventSelectedMains||[]).length},
      {step:4,emoji:'🥘',label:'Sides',    count:(S.eventSelectedSides||[]).length},
      {step:5,emoji:'🥙',label:'Salads',   count:(S.eventSelectedSalads||[]).length},
      {step:6,emoji:'🎂',label:'Desserts', count:(S.eventSelectedDesserts||[]).length},
      {step:8,emoji:'🫙',label:'Sauces',   count:(S.eventSelectedSauces||[]).length},
      {step:7,emoji:'📋',label:'My Plan',  count:null},
    ];
    return eventsTopNav() + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:14px;">'
      + secs.map(s=>{
          const isActive = activeStep===s.step;
          const hasSel = s.count>0;
          return '<button onclick="set({buffetStep:'+s.step+'})"'
            +' style="padding:8px 4px;border-radius:8px;border:1px solid '+(isActive?'#c06020':hasSel?'#3a2010':'#2a1a10')+';'
            +'background:'+(isActive?'#1a1208':hasSel?'#180818':'transparent')+';cursor:pointer;text-align:center;position:relative;">'
            +'<div style="font-size:16px;">'+s.emoji+'</div>'
            +'<div style="font-size:10px;color:'+(isActive?'#f5c842':hasSel?'#c070a0':'#5a3050')+';margin-top:2px;">'+s.label+'</div>'
            +(hasSel?'<div style="position:absolute;top:3px;right:5px;background:#c06020;color:white;border-radius:7px;font-size:9px;padding:1px 4px;">'+s.count+'</div>':'')
            +'</button>';
        }).join('')
      + '</div>';
  }
  function buffetPlanBtn(){
    const total=(S.eventSelectedStarters||[]).length+(S.eventSelectedMains||[]).length+(S.eventSelectedSides||[]).length+(S.eventSelectedSalads||[]).length+(S.eventSelectedDesserts||[]).length+(S.eventSelectedSauces||[]).length;
    if(!total) return '';
    return '<button onclick="set({buffetStep:7})" style="width:100%;padding:14px;margin:12px 0;border-radius:10px;border:2px solid #c06020;background:#1a1208;color:#f5c842;font-size:14px;cursor:pointer;font-family:Georgia,serif;">'
      +'📋 See my Buffet Plan & Shopping List →'
      +'<div style="font-size:11px;color:#c06020;margin-top:3px;">'+total+' dish'+(total!==1?'es':'')+' selected</div>'
      +'</button>';
  }


function buffetStep1(){
  const isPro = tierAllows('pro');
  const secs=[
    {step:2,emoji:'🥗',label:'Starters', count:(S.eventSelectedStarters||[]).length},
    {step:3,emoji:'🥩',label:'Mains',    count:(S.eventSelectedMains||[]).length},
    {step:4,emoji:'🥘',label:'Sides',    count:(S.eventSelectedSides||[]).length},
    {step:5,emoji:'🥙',label:'Salads',   count:(S.eventSelectedSalads||[]).length},
    {step:6,emoji:'🎂',label:'Desserts', count:(S.eventSelectedDesserts||[]).length},
    {step:8,emoji:'🫙',label:'Sauces',   count:(S.eventSelectedSauces||[]).length},
    {step:7,emoji:'📋',label:'My Plan',  count:null},
  ];
  const totalSel = secs.slice(0,6).reduce((s,x)=>s+x.count,0);
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({screen:'home',eventTab:'bigcooking',buffetStep:1})" style="color:${BC};">← Home</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🍽️ Buffet Planner</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${isPro?'Build your full menu — quantities, cost, shopping list':'Browse recipes and see quantities'}</p>
    </div>
    <div class="content">
      ${eventsTopNav()}
      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">How many guests?</div>
      <div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">
          <button onclick="set({eventGuests:Math.max(6,S.eventGuests-(S.eventGuests<=20?1:5))})" style="width:44px;height:44px;border-radius:50%;background:#1a1208;border:2px solid ${BC};color:${BC};font-size:24px;cursor:pointer;">−</button>
          <div style="flex:1;text-align:center;"><div style="font-size:52px;color:#f5c842;font-weight:bold;">${S.eventGuests}</div><div style="font-size:11px;color:#c06020;margin-top:-4px;">guests</div></div>
          <button onclick="set({eventGuests:Math.min(350,S.eventGuests+(S.eventGuests<20?1:5))})" style="width:44px;height:44px;border-radius:50%;background:#1a1208;border:2px solid ${BC};color:${BC};font-size:24px;cursor:pointer;">+</button>
        </div>
        <input type="range" min="6" max="350" step="1" value="${S.eventGuests}" oninput="set({eventGuests:parseInt(this.value)})" style="accent-color:${BC};width:100%;cursor:pointer;display:block;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#df3d9e;margin-top:4px;">${[6,20,50,100,150,200,350].map(n=>`<span>${n}</span>`).join('')}</div>
      </div>
      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:10px;">Choose your courses</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
        ${secs.map(s=>{
          const hasSel=s.count>0;
          const isPlan=s.step===7; const isSauces=s.step===8;
          return `<button onclick="set({buffetStep:${s.step}})"
            style="padding:14px 4px;border-radius:10px;border:2px solid ${hasSel?'#c06020':isPlan&&totalSel>0?'#c0a020':'#2a1a10'};
                   background:${hasSel?'#1a1208':isPlan&&totalSel>0?'#181808':'#120810'};cursor:pointer;text-align:center;position:relative;">
            <div style="font-size:26px;">${s.emoji}</div>
            <div style="font-size:11px;color:${hasSel?'#f5c842':isPlan&&totalSel>0?'#f5c842':'#703050'};margin-top:5px;font-weight:${hasSel?'bold':'normal'};">${s.label}</div>
            ${hasSel?`<div style="margin-top:3px;background:#c06020;color:white;border-radius:7px;font-size:9px;padding:1px 0;">${s.count} picked</div>`:''}
            ${isPlan&&totalSel>0?`<div style="margin-top:3px;background:#c0a020;color:#181808;border-radius:7px;font-size:9px;padding:1px 0;">${totalSel} dishes</div>`:''}
          </button>`;
        }).join('')}
      </div>
      <div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:10px 12px;font-size:11px;color:#8a7ba7;line-height:1.7;">
        💡 Tap any course to browse and select dishes. Pink badge = dishes picked. Jump between courses freely — selections are saved. Tap <strong style="color:#f5c842;">📋 My Plan</strong> anytime to see quantities, costs and shopping list.
      </div>
    </div>
  </div>`;
}
function buffetStep2(){
  const g = S.eventGuests;
  const isPro = tierAllows('pro');
  const selCount = (S.eventSelectedStarters||[]).length;
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:1})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🥗 Starters</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${isPro?selCount+' selected · ':''} ${g} guests · 110g pp each</p>
    </div>
    <div class="content">
      ${buffetQuickNav(2)}
      ${!isPro?`<div style="background:#181008;border:1px dashed #c0a020;border-radius:10px;padding:10px 14px;margin-bottom:12px;text-align:center;font-size:12px;color:#a08030;">👑 Upgrade to <strong>Tinza Pro</strong> to tick dishes, build your menu and get a shopping list</div>`:''}
      ${EVENTS_STARTERS.map(r=>buffetItemCard(r,'eventSelectedStarters','eventSelectedStarters')).join('')}
      ${buffetQuickNav(2)}
      ${buffetPlanBtn()}
    </div>
  </div>`;
}

function buffetStep3(){
  const g = S.eventGuests;
  const n = (S.eventSelectedMains||[]).length;
  const scale = ['PORTION_RULES.mains.scale'][0];
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:2})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🥩 Main Dishes</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${n} selected · portions reduce as you add more · ${g} guests</p>
    </div>
    <div class="content">
      ${buffetQuickNav(3)}
      ${n>1?`<div style="background:#160f08;border:1px solid #3a2010;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:11px;color:#d090a0;">⚖️ Smart scaling: ${n} mains selected — portion per main reduces so total stays ~200g pp</div>`:''}
      ${EVENTS_BIG_COOKING_MAINS.map(r=>buffetItemCard(r,'eventSelectedMains','eventSelectedMains')).join('')}
      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin:14px 0 8px;">🫙 Sauces & Gravies</div>
      ${EVENTS_SAUCES.filter(s=>['beefgravy','mintsauce','applesauce','tartaresauce','creamymustardsauce','peppersauce','chimichurri','monkeygland','cheesesauce','lemonherbsauce','periperi'].includes(s.id)).map(r=>buffetItemCard(r,'eventSelectedMains','eventSelectedMains')).join('')}
      ${buffetQuickNav(3)}
      ${buffetPlanBtn()}
    </div>
  </div>`;
}

function buffetStep4(){
  const g = S.eventGuests;
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:3})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🥘 Side Dishes</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${(S.eventSelectedSides||[]).length} selected · ${g} guests</p>
    </div>
    <div class="content">
      ${buffetQuickNav(4)}
      ${EVENTS_BIG_COOKING_SIDES.map(r=>buffetItemCard(r,'eventSelectedSides','eventSelectedSides')).join('')}
      ${buffetQuickNav(4)}
      ${buffetPlanBtn()}
    </div>
  </div>`;
}

function buffetStep5(){
  const g = S.eventGuests;
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:4})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🥙 Salads</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${(S.eventSelectedSalads||[]).length} selected · ${g} guests</p>
    </div>
    <div class="content">
      ${buffetQuickNav(5)}
      ${EVENTS_BIG_COOKING_SALADS.map(r=>buffetItemCard(r,'eventSelectedSalads','eventSelectedSalads')).join('')}
      ${buffetQuickNav(5)}
      ${buffetPlanBtn()}
    </div>
  </div>`;
}

function buffetStep6(){
  const g = S.eventGuests;
  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:5})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🎂 Desserts</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${(S.eventSelectedDesserts||[]).length} selected · ${g} guests</p>
    </div>
    <div class="content">
      ${buffetQuickNav(6)}
      ${EVENTS_DESSERTS.map(r=>buffetItemCard(r,'eventSelectedDesserts','eventSelectedDesserts')).join('')}
      ${buffetQuickNav(6)}
      ${buffetPlanBtn()}
    </div>
  </div>`;
}

function buffetStep7(){
  const g = S.eventGuests;
  const isPro = tierAllows('pro');
  const starters = calcPortions(EVENTS_STARTERS.filter(r=>(S.eventSelectedStarters||[]).includes(r.id)),         'starters', g);
  const mains    = calcPortions(EVENTS_BIG_COOKING_MAINS.filter(r=>(S.eventSelectedMains||[]).includes(r.id)),   'mains',    g);
  const sides    = calcPortions(EVENTS_BIG_COOKING_SIDES.filter(r=>(S.eventSelectedSides||[]).includes(r.id)),   'sides',    g);
  const salads   = calcPortions(EVENTS_BIG_COOKING_SALADS.filter(r=>(S.eventSelectedSalads||[]).includes(r.id)), 'salads',   g);
  const desserts = calcPortions(EVENTS_DESSERTS.filter(r=>(S.eventSelectedDesserts||[]).includes(r.id)),         'desserts', g);
  const allPortioned = [...starters,...mains,...sides,...salads,...desserts];
  const totalCost = allPortioned.reduce((s,r)=>s+((r.costPP||0)*g),0);
  const costPP    = allPortioned.reduce((s,r)=>s+(r.costPP||0),0);

  function section(label, arr, stateKey){
    if(!arr.length) return '';
    return `<div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin:14px 0 6px;">${label}</div>
      <div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:8px;">
        ${arr.map(r=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1a1208;">
          <div style="flex:1;">
            <div style="font-size:14px;color:#f5e8cc;">${r.emoji||'🍽️'} ${r.name}</div>
            <div style="font-size:12px;color:#f5c842;margin-top:2px;">${r.gPerPerson}g pp · <strong>${r.totalKg}kg total</strong>${isPro&&r.costPP?` · ~R${Math.round(r.costPP*g).toLocaleString()}`:''}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;margin-left:8px;">
            <button onclick="openEventRecipe('${r.id}')" style="background:none;border:1px solid #3a2010;border-radius:6px;padding:3px 8px;color:${BC};font-size:11px;cursor:pointer;">Recipe →</button>
            <button onclick="setQuiet({${stateKey}:toggle(S.${stateKey}||[],'${r.id}')})" title="Remove from plan" style="background:none;border:1px solid #803050;border-radius:6px;padding:3px 9px;color:#d06088;font-size:14px;line-height:1;cursor:pointer;">✕</button>
          </div>
        </div>`).join('')}
      </div>`;
  }

  // ── SHOPPING LIST CATEGORY KEYS ──
  const BUTCHERY_KEYS=['beef','lamb','pork','chicken','hake','fish','mince','snoek','mutton','venison','wors','prosciutto','biltong','bacon','prawns','shrimp','prawn meat','prawn','liver','tripe','viennas','cocktail','mussel','seafood','calamari','tuna','sardine','pilchard','anchovy'];
  const DAIRY_KEYS=['cream','milk','butter','cheese','yoghurt','feta','egg','sour cream','condensed','mozzarella','parmesan','cheddar','mascarpone'];
  const STARCH_KEYS=['flour','rice','pasta','bread','maize','samp','couscous','biscuit','cornflour','bicarb','baking powder','yeast','oats','lasagna','spaghetti','macaroni','noodle','puff pastry','pastry','vetkoek','dough'];
  const VEG_KEYS=['onion','garlic','tomato','potato','carrot','lemon','lime','apple','butternut','pumpkin','pepper','spinach','mushroom','cabbage','parsley','mint','coriander','ginger','basil','celery','rocket','watercress','beetroot','avocado','melon','mango','pear','lettuce','spring onion','leek','courgette','broccoli','cauliflower','green bean','cucumber','radish'];
  const TINNED_KEYS=['tinned','tin ','canned','passata','baked beans','kidney beans','chickpeas','coconut milk','tomato paste','stock cube','stock powder','condensed milk'];
  const HERB_KEYS=['spice','seasoning','nutmeg','cinnamon','paprika','cumin','turmeric','bay leaf','thyme','rosemary','oregano','origanum','mixed herbs','curry powder','masala','garam','chilli flakes','dried herb','dried spice','all spice','fennel seed','caraway'];
  const PANTRY_KEYS=['salt','pepper','oil','vinegar','soy sauce','worcestershire','honey','sugar','jam','chutney','mustard','mayonnaise','sauce','stock cube','stock powder','stock','tamarind','brandy','wine','beer','balsamic','peri-peri','fish sauce','oyster sauce','tomato sauce','ketchup'];

  function getCategory(lower){
    if(BUTCHERY_KEYS.some(k=>lower.includes(k))) return 'butchery';
    if(DAIRY_KEYS.some(k=>lower.includes(k))) return 'dairy';
    if(STARCH_KEYS.some(k=>lower.includes(k))) return 'starch';
    if(TINNED_KEYS.some(k=>lower.includes(k))) return 'tinned';
    if(VEG_KEYS.some(k=>lower.includes(k))) return 'veg';
    if(HERB_KEYS.some(k=>lower.includes(k))) return 'herbs';
    if(PANTRY_KEYS.some(k=>lower.includes(k))) return 'pantry';
    return 'pantry';
  }

  // Strip cooking instructions from ingredient names for shopping list
  function cleanIngredientName(name){
    return name
      // Remove SOUS/sauce section prefixes
      .replace(/^SOUS\s*[—\-:]\s*/i, '')
      .replace(/^SAUCE\s*[—\-:]\s*/i, '')
      .replace(/^FILLING\s*[—\-:]\s*/i, '')
      .replace(/^HERB BUTTER\s*[—\-:]\s*/i, '')
      .replace(/^MARINADE\s*[—\-:]\s*/i, '')
      // Remove Béchamel prefix
      .replace(/^b[eé]schamel\s*[—\-:]\s*/i, '')
      // Remove cooking instruction qualifiers in brackets
      .replace(/\s*\((diced|chopped|minced|grated|sliced|halved|cubed|shredded|peeled|cleaned|trimmed|quartered|crumbled|softened|melted|beaten|whipped|finely|roughly|coarsely|thinly|thickly|whole|unpeeled|deveined|shelled|boneless|skinless|bone.in|deboned|butterflied|jointed|cubed [0-9]+cm)[^)]*\)/gi, '')
      // Remove standalone cooking instruction words at end
      .replace(/,?\s*(finely|roughly|thinly|coarsely)\s+(diced|chopped|sliced|grated|shredded)$/i, '')
      .replace(/\s*\(for [^)]+\)/i, '')  // "(for dusting)", "(for topping)" etc
      .replace(/\s*\(optional.*?\)/i, '')
      .trim();
  }

  // Convert stock to cubes, Béchamel to generic, clean up names
  function practicalIngredient(name, amt){
    const lower = name.toLowerCase();
    let n = cleanIngredientName(name);
    let a = amt||'';

    // Stock cubes — always pantry, show cube count
    if(lower.includes('stock') && (lower.includes('cube') || lower.includes('powder') || lower.includes('stock cube')))  {
      n = 'Stock cubes';
      const countMatch = a.match(/^(\d+)\s*cubes?/i);
      if(countMatch) return {name:n, amt:a}; // already formatted
      return {name:n, amt:'as needed'};
    }
    // Stock liquid → convert to cubes
    if(lower.includes('stock') && !lower.includes('cube') && !lower.includes('powder')){
      const mlMatch = a.match(/(\d+)\s*ml\s*per\s*(?:person|shank|kg|portion)/i);
      if(mlMatch){
        const mlPerUnit = parseInt(mlMatch[1]);
        const totalMl = mlPerUnit * g;
        const cubes = Math.ceil(totalMl / 500);
        return {name:'Stock cubes', amt:`${cubes} cubes (1 per 500ml water)`};
      }
      return {name:'Stock cubes', amt:'1 per 500ml water'};
    }

    // Flour duplicates — keep one generic entry
    if(lower.startsWith('flour') || lower.match(/^[a-z]+ flour/)) {
      n = 'Flour'; 
    }

    // Salt and pepper — always to pantry, one entry
    if(lower.includes('salt') && lower.includes('pepper')) {
      return {name:'Salt and pepper', amt:'to taste'};
    }

    // Garlic — always "Crushed garlic"
    if(lower.includes('garlic') && !lower.includes('powder') && !lower.includes('paste') && !lower.includes('bread')){
      n = 'Crushed garlic';
      // Convert cloves to grams: ~5g per clove
      const clovesMatch = a.match(/(\d+)\s*cloves?\s*per\s*(\d+)g/i);
      if(clovesMatch){
        const cloves = parseInt(clovesMatch[1]);
        const per = parseInt(clovesMatch[2]);
        // Estimate total garlic needed across recipe
        a = `~${Math.round(cloves*5*g/per)}g for ${g} guests`;
      }
    }

    // Onion — add count
    if(lower.match(/^onion/) && !lower.includes('spring') && !lower.includes('powder')){
      n = 'Onions';
      const perKgMatch = a.match(/(\d+)\s*(?:medium|large)?\s*per\s*(\d+)g/i);
      const perPortionMatch = a.match(/(\d+)\s*(?:medium|large)?\s*per\s*(\d+)\s*portions?/i);
      if(perKgMatch){
        const count = Math.ceil(parseInt(perKgMatch[1]) * g * 0.2); // rough estimate
        a = `~${count} medium onions for ${g} guests`;
      }
    }

    // Lemon — add count
    if(lower.startsWith('lemon') && !lower.includes('juice') && !lower.includes('zest only') && !lower.includes('grass')){
      n = 'Lemons';
      const perChickenMatch = a.match(/½\s*per\s*chicken/i);
      if(perChickenMatch) a = `${Math.ceil(g/8)} lemons (½ per chicken)`;
      const perPersonMatch = a.match(/1\s*per\s*(?:\d+\s*)?person/i);
      if(perPersonMatch) a = `${Math.ceil(g/6)} lemons`;
    }

    // Butter — consolidate Béchamel butter into just Butter
    if(n.toLowerCase() === 'butter' || n.toLowerCase().startsWith('butter')){
      n = 'Butter';
    }

    // Milk — consolidate all milk references
    if(lower.includes('full cream milk') || lower.includes('warm full cream') || (lower.includes('milk') && !lower.includes('condensed') && !lower.includes('coconut'))){
      n = 'Full cream milk';
      // Convert "600ml per tray" to litres
      const perTrayMatch = a.match(/(\d+)ml per tray/i);
      if(perTrayMatch){
        const trays = Math.ceil(g/20);
        a = `${((parseInt(perTrayMatch[1])*trays)/1000).toFixed(1)}L for ${trays} trays`;
      }
    }

    // Cheese — clean names
    if(lower.includes('mozzarella')) { n = 'Mozzarella'; }
    if(lower.includes('parmesan')) { n = 'Parmesan'; }
    if(lower.includes('feta')) { n = 'Feta'; }
    if(lower.includes('cheddar')) { n = 'Cheddar'; }

    // Tomato paste — quantity
    if(lower.includes('tomato paste')){
      n = 'Tomato paste';
    }

    // Tinned tomatoes — count tins
    if(lower.includes('tinned tomato') || lower.includes('tin tomato') || lower.match(/tomatoes.*tin/)){
      n = 'Tinned tomatoes (400g)';
      const perPortionMatch = a.match(/400g per (\d+) portions?/i);
      if(perPortionMatch){
        const tins = Math.ceil(g/parseInt(perPortionMatch[1]));
        a = `${tins} × 400g tins for ${g} guests`;
      }
    }

    // Cream — consolidate
    if(lower.includes('cream') && !lower.includes('sour') && !lower.includes('condensed') && !lower.includes('ice') && !lower.includes('whipping')){
      n = 'Cream';
    }

    // Peri-peri and hot sauces — show total ml
    if(lower.includes('peri') || lower.includes('hot sauce') || lower.includes('chilli sauce')){
      const mlPerKgMatch = a.match(/(\d+)ml per kg/i);
      if(mlPerKgMatch && perPersonMeat){
        // This is handled by computeQuantity via per 1000g normalisation
        // Just ensure amt stays as ml formula
      }
    }
    if(lower.match(/^egg/) && !lower.includes('yolk') && !lower.includes('white') && !lower.includes('wash') && !lower.includes('noodle')){
      n = 'Eggs';
    }
    if(lower === 'egg yolk') { n = 'Eggs'; a = a + ' (yolks only)'; }

    // Parsley — use grams (Checkers sells in ~30g punnets)
    if(lower.includes('fresh parsley') && !lower.includes('powder')){
      n = 'Fresh parsley';
      const perPortionMatch = a.match(/per (\d+) portions?/i);
      const per = perPortionMatch ? parseInt(perPortionMatch[1]) : 20;
      const grams = Math.ceil(30 * g / per / 30) * 30; // round up to nearest 30g punnet
      a = `${grams}g (${Math.ceil(grams/30)} × 30g punnet${Math.ceil(grams/30)>1?'s':''})`;
    }

    // Fresh coriander — 30g punnets
    if(lower.includes('fresh coriander')){
      n = 'Fresh coriander';
      const grams = Math.ceil(g/20) * 30;
      a = `${grams}g (${Math.ceil(grams/30)} × 30g punnet${Math.ceil(grams/30)>1?'s':''})`;
    }

    // Fresh basil — 15g punnets
    if(lower.includes('fresh basil')){
      n = 'Fresh basil';
      const grams = Math.ceil(g/20) * 15;
      a = `${grams}g (${Math.ceil(grams/15)} × 15g punnet${Math.ceil(grams/15)>1?'s':''})`;
    }

    // Fresh mint — 30g punnets
    if(lower.includes('fresh mint')){
      n = 'Fresh mint';
      const grams = Math.ceil(g/20) * 30;
      a = `${grams}g (${Math.ceil(grams/30)} × 30g punnet${Math.ceil(grams/30)>1?'s':''})`;
    }

    // Fresh thyme — 20g punnets
    if(lower.includes('fresh thyme')){
      n = 'Fresh thyme';
      const grams = Math.ceil(g/20) * 20;
      a = `${grams}g (${Math.ceil(grams/20)} × 20g punnet${Math.ceil(grams/20)>1?'s':''})`;
    }

    // Fresh rosemary — 20g punnets
    if(lower.includes('fresh rosemary')){
      n = 'Fresh rosemary';
      const grams = Math.ceil(g/20) * 20;
      a = `${grams}g (${Math.ceil(grams/20)} × 20g punnet${Math.ceil(grams/20)>1?'s':''})`;
    }

    return {name:n, amt:a};
  }

  // Better display for common ingredients
  function improveIngredientName(name, amt, guests){
    // Chicken: make buying advice practical
    const lower = name.toLowerCase();
    let n = name, a = amt||'';
    if(lower.includes('whole chicken') || lower.includes('chicken per 4')){
      n = 'Whole chickens';
      a = `${Math.ceil(guests/4)} chickens — chicken portions also work`;
    }
    if(lower.includes('cooked chicken') || lower.includes('rotisserie')){
      n = 'Cooked chicken (rotisserie or boiled portions)';
      a = `${(150*guests/1000).toFixed(1)}kg — buy ${Math.ceil(guests/4)} rotisserie chickens`;
    }
    return {name:n, amt:a};
  }

  // Normalise ingredient name for deduplication — strips cooking instructions first
  function normName(n){
    const cleaned = cleanIngredientName(n);
    return cleaned.toLowerCase()
      .replace(/b[eé]schamel\s*[—\-:]\s*/i,'')
      .replace(/\(.*?\)/g,'')          // remove bracketed info
      .replace(/—.*$/,'')              // remove everything after em dash
      .replace(/[^a-z\s]/g,'')
      .replace(/\s+/g,' ').trim()
      .split(' ').slice(0,2).join(' '); // 2 words for better merging
  }

  // Always compute the final quantity for 'g' guests — never show a formula
  function computeQuantity(amtStr, guestCount, isFirstIng, perPersonMeat, meatUnit){
    if(!amtStr) {
      // Use perPerson.meat for first ingredient of meat recipes
      if(isFirstIng && perPersonMeat && meatUnit!=='ml' && meatUnit!=='shank' && !String(meatUnit).includes('ice') && !String(meatUnit).includes('tray')){
        const kg = (perPersonMeat*guestCount/1000);
        return kg >= 1 ? `${kg.toFixed(1)}kg` : `${Math.round(perPersonMeat*guestCount)}g`;
      }
      return '';
    }
    // Normalise 'per kg X' → 'per 1000g X' for consistent parsing
    const a = amtStr.replace(/per kg\b/gi, 'per 1000g');

    // "X slices/pieces/rolls per person" → total count
    const perPersonCount = a.match(/^(\d+)\s*(slices?|pieces?|rolls?|sticks?|wings?|eggs?|balls?)\s*per\s*person/i);
    if(perPersonCount){
      return `${parseInt(perPersonCount[1]) * guestCount} ${perPersonCount[2].toLowerCase()}`;
    }
    const ppGram = a.match(/^([\d.]+)\s*(g|kg|ml|L)\s*per\s*person/i);
    if(ppGram){
      const n = parseFloat(ppGram[1]), u = ppGram[2].toLowerCase();
      const mult = u==='kg'||u==='l' ? 1000 : 1;
      const total = n * mult * guestCount;
      return total>=1000 ? `${(total/1000).toFixed(1)}${u==='ml'?'L':'kg'}` : `${Math.round(total)}${u==='kg'?'g':u}`;
    }

    // "1 per X persons/people" — straight count
    const perNPersons = a.match(/(\d+)\s*per\s*(\d+)\s*(?:persons?|people|guests?)/i);
    if(perNPersons){
      return `${Math.ceil(parseInt(perNPersons[1]) * guestCount / parseInt(perNPersons[2]))}`;
    }

    // "½ per person" or fraction per person
    const fracPer = a.match(/^(½|¼|¾|\d+\/\d+|\d*\.?\d+)\s*per\s*person/i);
    if(fracPer){
      const raw = fracPer[1];
      const num = raw==='½'?0.5 : raw==='¼'?0.25 : raw==='¾'?0.75 : parseFloat(raw);
      return `${Math.ceil(num * guestCount)}`;
    }

    // "1 pear per 2 persons" style  
    const perItemCount = a.match(/^([\d½¼¾]+)\s*(pear|lemon|apple|orange|avocado|egg|shank)s?\s*per\s*(\d+)\s*(?:persons?|people)/i);
    if(perItemCount){
      const raw = perItemCount[1];
      const num = raw==='½'?0.5 : raw==='¼'?0.25 : raw==='¾'?0.75 : parseFloat(raw);
      const per = parseInt(perItemCount[3]);
      return `${Math.ceil(num * guestCount / per)}`;
    }

    // "1 per X kg meat" → estimate based on perPersonMeat
    const perKg = a.match(/(\d+)\s*per\s*(\d+)\s*(g|kg)/i);
    if(perKg && perPersonMeat){
      const qty = parseInt(perKg[1]);
      const per = parseInt(perKg[2]) * (perKg[3].toLowerCase()==='kg'?1000:1);
      const totalMeat = perPersonMeat * guestCount;
      return `${Math.ceil(qty * totalMeat / per)}`;
    }

    // "X per Y portions" or "X per Y people"  
    const perPortions = a.match(/^([\d.]+)\s*(g|kg|ml|L|tbsp|tsp|cloves?|sticks?|bunch|bunches|tins?|rolls?|rashers?|large|medium|small)?\s*per\s*(\d+)\s*(?:portions?|people|guests?|persons?|shanks?|trays?)/i);
    // "X per tray" where 1 tray = 20 portions
    const perTray = a.match(/^([\d.]+)\s*(g|kg|ml|L|tbsp|tsp|×\s*\d+g\s*tins?|tins?)?\s*per\s*tray/i);
    if(perTray && !perPortions){
      const qty = parseFloat(perTray[1]);
      const u = (perTray[2]||'').toLowerCase().replace(/×.*$/,'').trim();
      const trays = Math.ceil(guestCount/20);
      const total = qty * trays;
      if(u==='kg') return `${(total).toFixed(1)}kg`;
      if(u==='g') return total>=1000?`${(total/1000).toFixed(1)}kg`:`${Math.round(total)}g`;
      if(u==='ml') return total>=1000?`${(total/1000).toFixed(1)}L`:`${Math.round(total)}ml`;
      if(u==='l') return `${(total).toFixed(1)}L`;
      if(u.includes('tin')) return `${Math.ceil(total)} tins`;
      return `${Math.ceil(total)}`;
    }
    if(perPortions){
      const qty = parseFloat(perPortions[1]);
      const u = (perPortions[2]||'').toLowerCase();
      const per = parseInt(perPortions[3]);
      const total = qty * guestCount / per;
      // Weight units
      if(u==='g'||u==='kg'){
        const grams = u==='kg' ? total*1000 : total;
        return grams>=1000 ? `${(grams/1000).toFixed(1)}kg` : `${Math.round(grams)}g`;
      }
      if(u==='ml'||u==='l'){
        const ml = u==='l' ? total*1000 : total;
        return ml>=1000 ? `${(ml/1000).toFixed(1)}L` : `${Math.round(ml)}ml`;
      }
      if(u==='bunch'||u==='bunches'){
        // Convert to grams — herbs sold by weight at Checkers
        const grams = Math.ceil(total) * 30; // default 30g per bunch
        return `${grams}g`;
      }
      if(u==='tin'||u==='tins') return `${Math.ceil(total)} tins`;
      if(u==='roll'||u==='rolls') return `${Math.ceil(total)} rolls`;
      // Count items (cloves, tbsp etc — show tbsp/tsp for pantry)
      if(u==='tbsp'){
        // Convert to ml for liquids. Dry ingredients (spices etc) stay as tbsp
        const isLiquid = amtStr && (amtStr.toLowerCase().includes('oil') || amtStr.toLowerCase().includes('sauce') || amtStr.toLowerCase().includes('vinegar') || amtStr.toLowerCase().includes('juice') || amtStr.toLowerCase().includes('honey') || amtStr.toLowerCase().includes('syrup') || amtStr.toLowerCase().includes('wine') || amtStr.toLowerCase().includes('milk') || amtStr.toLowerCase().includes('cream'));
        if(!isLiquid) return `${Math.ceil(total)} tbsp`;
        const ml = Math.round(total * 15);
        return ml >= 1000 ? `${(ml/1000).toFixed(1)}L` : `${ml}ml`;
      }
      if(u==='tsp'){
        // Convert to ml: 1 tsp = 5ml
        const ml = Math.round(total * 5);
        return ml >= 1000 ? `${(ml/1000).toFixed(1)}L` : `${ml}ml`;
      }
      if(u==='clove'||u==='cloves') return `${Math.ceil(total)} cloves`;
      // Plain count
      return `${Math.ceil(total)}`;
    }

    // "X per leg" — estimate based on perPerson.meat (leg serves ~10 people at 220g)
    const perLeg = a.match(/^([\d.]+)\s*(g|kg|tbsp|tsp|cloves?|sprigs?|lemon)s?\s*per\s*leg/i);
    if(perLeg && perPersonMeat){
      const qty = parseFloat(perLeg[1]);
      const u = (perLeg[2]||'').toLowerCase();
      const legsNeeded = Math.ceil(guestCount * perPersonMeat / 1000 / 2.5); // avg 2.5kg leg
      const total = qty * legsNeeded;
      if(u==='g') return total>=1000?`${(total/1000).toFixed(1)}kg`:`${Math.round(total)}g`;
      if(u==='kg') return `${(total).toFixed(1)}kg`;
      if(u==='tbsp') return `${Math.round(total*15)}ml`;
      if(u==='clove'||u==='cloves') return `${Math.ceil(total)} cloves`;
      if(u==='sprig'||u==='sprigs') return `${Math.ceil(total)} sprigs`;
      if(u==='lemon') return `${Math.ceil(total)} lemons`;
      return `${Math.ceil(total)}`;
    }

    // "Xg per 500g ingredient" type patterns — for spices scaled to main ingredient
    const perIngredientG = a.match(/^([\d.]+)g per (\d+)g\b/i);
    if(perIngredientG && perPersonMeat){
      const spiceG = parseFloat(perIngredientG[1]);
      const per = parseInt(perIngredientG[2]);
      const totalIngredientG = perPersonMeat * guestCount;
      const total = Math.ceil(spiceG * totalIngredientG / per);
      return total >= 1000 ? `${(total/1000).toFixed(1)}kg` : `${total}g`;
    }
    const bunchMatch = a.match(/^(\d+)\s*bunch/i);
    if(bunchMatch) return `${bunchMatch[1]} bunch${parseInt(bunchMatch[1])>1?'es':''}`;

    // "X tins" already computed
    const tinMatch = a.match(/^(\d+)\s*(?:×\s*)?(?:400g\s*)?tins?/i);
    if(tinMatch) return `${tinMatch[1]} tins`;

    // Fallback for first meat ingredient
    if(isFirstIng && perPersonMeat && meatUnit!=='ml' && meatUnit!=='shank'){
      const kg = (perPersonMeat*guestCount/1000);
      return kg>=1 ? `${kg.toFixed(1)}kg` : `${Math.round(perPersonMeat*guestCount)}g`;
    }

    return '';
  }

  function extractScaled(amtStr, guestCount, isFirstIngredient, perPersonMeat, meatUnit){
    const qty = computeQuantity(amtStr, guestCount, isFirstIngredient, perPersonMeat, meatUnit);
    if(!qty) return '';
    return `<strong style="color:#f5c842;">${qty}</strong>`;
  }

  const itemMap = new Map();
  allPortioned.forEach(r=>{
    const ingrs = r.base300 || [];
    ingrs.forEach((ing, idx)=>{
      if(!ing.n) return;
      const rawName = ing.n;
      const rawLower = rawName.toLowerCase();
      
      // Skip non-shopping items
      if(rawName.startsWith('—') || rawLower.includes('buying guide') || 
         rawLower.includes('serve with') || rawLower.includes('to serve') ||
         rawLower === 'water' || rawLower.includes('warm water') ||
         rawLower.includes('boiling water') || rawLower.includes('cold water') ||
         rawLower.includes('to taste') || rawLower === 'salt and pepper' && idx > 0) return;

      // Apply all name improvements FIRST
      const improved = improveIngredientName(rawName, ing.a||'', g);
      const practical = practicalIngredient(improved.name, improved.amt);
      
      // NOW compute norm on the cleaned/practical name
      const norm = normName(practical.name);
      const lower = practical.name.toLowerCase();
      const cat = getCategory(rawLower); // use original lower for category
      const scaledNote = extractScaled(practical.amt, g, idx===0, r.perPerson?.meat, r.perPerson?.unit||'g');

      if(itemMap.has(norm)){
        const existing = itemMap.get(norm);
        if(!existing.recipes.includes(r.name)) existing.recipes.push(r.name);
        // Accumulate quantities where possible — pick the one with a quantity
        if(!existing.scaledNote && scaledNote) existing.scaledNote = scaledNote;
      } else {
        const key = norm.replace(/\s/g,'_').slice(0,20)+'_'+Math.random().toString(36).slice(2,6);
        itemMap.set(norm, {key, name:practical.name, amt:practical.amt, scaledNote, cat, recipes:[r.name]});
      }
    });
  });
  // Add salt and pepper as single pantry item
  if(allPortioned.length > 0){
    itemMap.set('salt pepper', {key:'salt_pepper_consolidated', name:'Salt and pepper', amt:'to taste', scaledNote:'', cat:'pantry', recipes:['All dishes']});
  }
  const shopItems = Array.from(itemMap.values());
  const checked = S.checkedBuffetItems||{};
  const remaining = shopItems.filter(i=>!checked[i.key]).length;

  function shopCategory(title, cat, emoji){
    const items = shopItems.filter(i=>i.cat===cat);
    if(!items.length) return '';
    return `<div style="margin-bottom:4px;">
      ${items.map(i=>{
        const ck = checked[i.key];
        const qty = i.scaledNote ? i.scaledNote.replace(/<[^>]+>/g,'').trim() : '';
        // Always show something in yellow on the right
        const rightDisplay = qty || (i.amt && i.amt !== 'to taste' && i.amt !== 'as needed' ? i.amt : '');
        const recipeLabel = i.recipes.length===1
          ? `<span style="font-size:10px;color:#b46982;">${i.recipes[0]}</span>`
          : `<span style="font-size:10px;color:#c06020;">${i.recipes.length} dishes</span>`;
        return `<div onclick="setQuiet({checkedBuffetItems:{...S.checkedBuffetItems,'${i.key}':!S.checkedBuffetItems['${i.key}']}})"
          style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #160f08;cursor:pointer;opacity:${ck?0.35:1};">
          <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${ck?BC:'#3a2010'};background:${ck?BC:'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            ${ck?'<span style="color:#fff;font-size:11px;">✓</span>':''}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;color:${ck?'#4a2030':'#c8b898'};text-decoration:${ck?'line-through':'none'};">${i.name}</div>
            ${recipeLabel}
          </div>
          ${rightDisplay?`<div style="font-size:13px;color:${ck?'#4a2030':'#f5c842'};font-weight:bold;flex-shrink:0;margin-left:12px;text-align:right;max-width:120px;">${rightDisplay}</div>`:''}
        </div>`;
      }).join('')}
    `;
  }

  const whatsappMsg = encodeURIComponent(
    `🍽️ Tinza Buffet Plan — ${g} guests\n\n`
    +allPortioned.map(r=>`${r.emoji||'•'} ${r.name}: ${r.totalKg}kg`).join('\n')
    +(isPro?`\n\n💰 Total: ~R${Math.round(totalCost).toLocaleString()} (R${Math.round(costPP)}/pp)`:'')
    +`\n\n🛒 Shopping List:\n`
    +shopItems.filter(i=>!checked[i.key]).map(i=>i.name+(i.amt?' — '+i.amt:'')+(i.scaledNote?' ('+i.scaledNote.replace(/<[^>]+>/g,'')+')'  :'')).join('\n')
  );

  return `<div>
    <div class="header" style="background:${BCbg};border-bottom:1px solid #c06020;">
      <button class="back-btn" onclick="set({buffetStep:6})" style="color:${BC};">← Overview</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">📋 Your Buffet Plan</h1>
      <p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">${g} guests</p>
    </div>
    <div class="content">
      ${buffetQuickNav(7)}
      ${allPortioned.length===0?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:20px;text-align:center;color:#c06020;font-size:13px;">${isPro?'No dishes selected — ':'Browse recipes below — '}<button onclick="set({buffetStep:2})" style="background:none;border:none;color:${BC};cursor:pointer;font-size:13px;text-decoration:underline;">go back</button></div>`:''}

      ${section('🥗 STARTERS',starters,'eventSelectedStarters')}
      ${section('🥩 MAINS',mains,'eventSelectedMains')}
      ${section('🥘 SIDES',sides,'eventSelectedSides')}
      ${section('🥙 SALADS',salads,'eventSelectedSalads')}
      ${section('🎂 DESSERTS',desserts,'eventSelectedDesserts')}

      ${allPortioned.length>0?`
        ${isPro?`<div style="background:#1a1208;border:2px solid ${BC};border-radius:12px;padding:14px;margin:16px 0;">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:13px;color:#c8b898;">Total dishes</span>
            <span style="font-size:13px;color:#f5c842;font-weight:bold;">${allPortioned.length} dishes</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:13px;color:#c8b898;">Cost per person</span>
            <span style="font-size:15px;color:#f5c842;font-weight:bold;">~R${Math.round(costPP)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #3a2010;">
            <span style="font-size:14px;color:#c8b898;">Estimated total</span>
            <span style="font-size:20px;color:#f5c842;font-weight:bold;">~R${Math.round(totalCost).toLocaleString()}</span>
          </div>
        </div>`:`<div style="background:#181008;border:1px dashed #c0a020;border-radius:10px;padding:10px 14px;margin:12px 0;text-align:center;font-size:12px;color:#a08030;">👑 <strong>Tinza Pro</strong> — unlock costs, shopping list &amp; WhatsApp share</div>`}

        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;margin-top:16px;">🛒 Shopping List</div>
        ${!isPro?`<div style="background:#1a1008;border:1px dashed #5a2010;border-radius:10px;padding:20px;text-align:center;margin-bottom:14px;"><div style="font-size:28px;margin-bottom:8px;">🔒</div><div style="font-size:13px;color:#8a4020;font-weight:bold;margin-bottom:4px;">Shopping List — Pro feature</div><div style="font-size:12px;color:#5a3020;line-height:1.6;">Tap items you already have to remove them.<br>Share your list via WhatsApp.</div></div>`:`
        <div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:14px;">
          <div style="background:#1a1008;border:1px solid #3a2808;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:11px;color:#9d7a46;line-height:1.6;">
            💡 <strong style="color:#c0a040;">Prices based on Checkers retail — last updated May 2026.</strong> Buying in bulk, shopping specials, local markets or farm stalls will be cheaper. Use these as a planning guide only.
          </div>
          <div style="font-size:11px;color:#c06020;margin-bottom:10px;">✅ Tap items you already have to remove them from your list</div>
          ${shopCategory('Meat, Fish & Poultry','butchery','🥩')}
          ${shopCategory('Dairy & Eggs','dairy','🥛')}
          ${shopCategory('Starches & Baked Goods','starch','🌾')}
          ${shopCategory('Tinned & Jarred Goods','tinned','🥫')}
          ${shopCategory('Fresh Vegetables & Fruit','veg','🥦')}
          ${shopCategory('Herbs & Spices','herbs','🌿')}
          ${shopCategory('Pantry & Condiments','pantry','🫙')}
          ${shopItems.length>0?`<div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #1a1208;margin-top:4px;">
            <span style="font-size:11px;color:#c06020;">${remaining} of ${shopItems.length} items remaining</span>
            <button onclick="set({checkedBuffetItems:{}})" style="background:none;border:none;color:#c16382;font-size:11px;cursor:pointer;text-decoration:underline;">Reset all</button>
          </div>`:''}
        </div>`}

        <div class="grid2" style="gap:10px;margin-bottom:16px;">
          <button onclick="set({buffetStep:1,eventSelectedStarters:[],eventSelectedMains:[],eventSelectedSides:[],eventSelectedSalads:[],eventSelectedDesserts:[],checkedBuffetItems:{}})" style="padding:14px;border-radius:10px;cursor:pointer;background:#1a1208;border:2px solid #3a2010;color:#c06020;font-size:12px;">🔄 Start again</button>
          ${isPro?`<a href="https://wa.me/?text=${whatsappMsg}" target="_blank" style="display:flex;align-items:center;justify-content:center;padding:14px;border-radius:10px;background:#1a2e1a;border:2px solid #25d366;color:#25d366;font-size:12px;font-weight:bold;text-decoration:none;">📱 Share via WhatsApp</a>`:`<button onclick="alert('Upgrade to Tinza Pro to share your shopping list via WhatsApp')" style="padding:14px;border-radius:10px;cursor:pointer;background:#0f0e0c;border:2px solid #1a1808;color:#c06a35;font-size:12px;">🔒 WhatsApp Share (Pro)</button>`}
        </div>
        ${isPro?`<button onclick="window.printPlan('buffet')" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#181008;border:2px solid #c0a020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:16px;">🖨️ Print / Save as PDF <span style="font-size:10px;opacity:0.7;">👑 Pro</span></button>`:''}
      `:''}
    </div>
  </div>`;
}

function eventsRecipeView(aer, guests){
  const hasPantry = aer.pantry && aer.pantry.length;
  const hasBase300 = aer.base300 && aer.base300.length;

  // Smart quantity box — handles protein dishes, tray dishes, and per-piece dishes
  function recipeQuantities(r){
    // Sauce/dip quantity block — uses ppG field
    if(!r.perPerson && r.ppG){
      const total = r.ppG * guests;
      let totalDisplay;
      if(total >= 1000) totalDisplay = (Math.round(total/100)/10) + (r.ppG < 5 ? 'L' : 'g');
      else totalDisplay = total + 'g';
      return `<div style="background:#1a1208;border:1px solid #c06020;border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">📊 Quantities for ${guests} guests</div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;">
          <span style="color:#c8b898;">Total batch needed</span>
          <span style="color:#f5c842;font-weight:bold;">${totalDisplay}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;">
          <span style="color:#c8b898;">Per person portion</span>
          <span style="color:#f5c842;">${r.ppG}g pp</span>
        </div>
      </div>`;
    }
    if(!r.perPerson) return '';
    const unit = r.perPerson.unit||'g';
    const meat = r.perPerson.meat;
    const isMl  = unit === 'ml' || unit === 'L';
    const isIceCream = typeof unit === 'string' && unit.includes('ice cream');
    const isTray = typeof unit === 'string' && unit.includes('tray');
    const isShank = unit === 'shank';
    const isPcs = unit === 'pcs' || unit === 'pieces';

    let primaryLine = '';
    let scaledIngredients = '';

    if(isMl){
      const totalL = (meat*guests/1000).toFixed(1);
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Total volume needed</span><span style="color:#f5c842;font-weight:bold;">${totalL}L (${meat}ml per person)</span></div>`;
    } else if(isIceCream){
      const tubs2L = Math.ceil(guests/10);
      const tubs5L = Math.ceil(guests/25);
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Ice cream needed</span><span style="color:#f5c842;font-weight:bold;">${meat*guests/1000}kg (${meat}g pp)</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:12px;"><span style="color:#a96f7e;">Buy: ${tubs2L} × 2L tubs OR ${tubs5L} × 5L bulk tubs</span></div>`;
    } else if(isShank){
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Shanks needed</span><span style="color:#f5c842;font-weight:bold;">${guests} shanks</span></div>`;
    } else if(isTray){
      const traysNeeded = Math.ceil(guests / 20); // standard: 1 tray = 20 portions
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Trays needed</span><span style="color:#f5c842;font-weight:bold;">${traysNeeded} trays (${guests} portions)</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:12px;"><span style="color:#a96f7e;">1 tray = 20 portions · scale each ingredient × ${traysNeeded}</span></div>`;
      // Show scaled pantry for tray dishes
      if(hasPantry){
        scaledIngredients = `<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">Ingredients — scaled for ${traysNeeded} tray${traysNeeded>1?'s':''} (${guests} guests)</div>
          ${r.pantry.map(p=>{
            // Try to scale numbers in the string
            const scaled = p.replace(/(\d+(?:\.\d+)?)\s*(g|kg|ml|L)\b/gi, (m,num,u)=>{
              const n = parseFloat(num);
              const result = Math.round(n * traysNeeded * 10) / 10;
              return `<strong style="color:#f5c842;">${result}${u}</strong>`;
            }).replace(/(\d+)\s*(?:tin|roll|tray)s?/gi,(m,num)=>{
              const result = Math.round(parseInt(num)*traysNeeded);
              return `<strong style="color:#f5c842;">${result} ${m.replace(/\d+\s*/,'')}</strong>`;
            });
            return `<div style="padding:6px 0;border-bottom:1px solid #1a1208;font-size:13px;color:#c8b898;">• ${scaled}</div>`;
          }).join('')}
        </div>`;
      }
    } else if(isPcs){
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Total pieces needed</span><span style="color:#f5c842;font-weight:bold;">${Math.round(meat*guests)} pieces (${meat} pp)</span></div>`;
    } else {
      // Standard g/kg dish — derive a sensible label from the recipe name
      const name = (r.name||'').toLowerCase();
      let mainLabel = 'Main ingredient needed';
      if(name.includes('chicken') || name.includes('liver') || name.includes('wing') || name.includes('thigh') || name.includes('drumstick')) mainLabel = 'Chicken needed';
      else if(name.includes('beef') || name.includes('rump') || name.includes('fillet') || name.includes('brisket') || name.includes('chuck') || name.includes('stroganoff') || name.includes('steak') || name.includes('aitchbone')) mainLabel = 'Beef needed';
      else if(name.includes('lamb') || name.includes('shank') || name.includes('sosatie') || name.includes('mutton')) mainLabel = 'Lamb needed';
      else if(name.includes('pork') || name.includes('rib') || name.includes('crackling') || name.includes('potjie')) mainLabel = 'Pork/Mutton needed';
      else if(name.includes('fish') || name.includes('hake') || name.includes('snoek') || name.includes('salmon') || name.includes('sardine') || name.includes('pilchard')) mainLabel = 'Fish needed';
      else if(name.includes('mince') || name.includes('bolognaise') || name.includes('lasagna') || name.includes('meatball') || name.includes('shepherd') || name.includes('burger')) mainLabel = 'Mince needed';
      else if(name.includes('prawn') || name.includes('mussel') || name.includes('seafood') || name.includes('calamari')) mainLabel = 'Seafood needed';
      else if(name.includes('wors') || name.includes('boerewors') || name.includes('sausage')) mainLabel = 'Wors needed';
      else if(name.includes('potato') || name.includes('mash')) mainLabel = 'Potatoes needed';
      else if(name.includes('butternut') || name.includes('pumpkin') || name.includes('squash')) mainLabel = 'Butternut/Pumpkin needed';
      else if(name.includes('carrot')) mainLabel = 'Carrots needed';
      else if(name.includes('cabbage')) mainLabel = 'Cabbage needed';
      else if(name.includes('spinach')) mainLabel = 'Spinach needed';
      else if(name.includes('rice')) mainLabel = 'Rice needed (dry)';
      else if(name.includes('couscous')) mainLabel = 'Couscous needed (dry)';
      else if(name.includes('samp') || name.includes('umngqusho')) mainLabel = 'Samp & beans needed';
      else if(name.includes('pap') || name.includes('maize') || name.includes('putu')) mainLabel = 'Maize meal needed';
      else if(name.includes('sweet potato')) mainLabel = 'Sweet potatoes needed';
      else if(name.includes('salad') || name.includes('slaw')) mainLabel = 'Salad base needed';
      else if(name.includes('pie') || name.includes('tart')) mainLabel = 'Main ingredient needed';
      else if(name.includes('salsa') || name.includes('ushatini')) mainLabel = 'Tomatoes needed';
      else if(name.includes('tomato') && !name.includes('soup')) mainLabel = 'Tomatoes needed';
      const totalKg = (meat*guests/1000).toFixed(1);
      const boneNote = r.boneIn ? ` (bone-in — order ${(meat*guests*1.35/1000).toFixed(1)}kg raw)` : '';
      primaryLine = `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">${mainLabel}</span><span style="color:#f5c842;font-weight:bold;">${totalKg}kg${boneNote}</span></div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;"><span style="color:#c8b898;">Per person portion</span><span style="color:#f5c842;">${meat}g</span></div>`;
    }

    return `<div style="background:#1a1208;border:1px solid #c06020;border-radius:10px;padding:12px;margin-bottom:14px;">
      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">📊 Quantities for ${guests} guests</div>
      ${primaryLine}
      ${r.costPP?`<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;border-top:1px solid #1a1208;margin-top:4px;"><span style="color:#c8b898;">Estimated total cost</span><span style="color:#f5c842;font-weight:bold;">~R${Math.round(r.costPP*guests).toLocaleString()} (R${r.costPP}/pp)</span></div>`:''}
    </div>${scaledIngredients}`;
  }
  const quantityBlock = recipeQuantities(aer);
  // For tray dishes, recipeQuantities already includes scaled ingredients
  const isTrayDish = aer.perPerson && typeof (aer.perPerson.unit||'') === 'string' && (aer.perPerson.unit||'').includes('tray');
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#1a1208;border-bottom:1px solid #c06020;padding:14px 20px;">
      <button onclick="${aer._type==='finger' ? 'set({eventActiveRecipe:null,fingerSection:\'savoury\',fingerView:\'browse\'})' : 'set({eventActiveRecipe:null})'}" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">${aer.emoji||'🍽️'} ${aer.name}</h1>
      <div style="font-size:11px;color:#c06020;margin-top:2px;">${aer.region||''}</div>
    </div>
    <div class="content">
      ${eventsTopNav()}
      ${recipePhoto(aer.name, aer.emoji||'🍽️')}
      ${quantityBlock}
      ${hasPantry&&!isTrayDish?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">Ingredients (per recipe — scale to your guest count)</div>
        ${aer.pantry.map(p=>`<div style="padding:6px 0;border-bottom:1px solid #1a1208;font-size:13px;color:#c8b898;">• ${p}</div>`).join('')}
      </div>`:''}
      ${hasBase300?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#c06020;font-style:italic;">scaled for ${guests} guests</div>
        </div>
        ${(()=>{
          // ── universal ingredient scaler ──────────────────────────────
          function scaleIngredient(a, n){
            if(!a) return null;

            // Helper: fraction string → decimal
            function parseFrac(s){
              const f = {'¼':0.25,'½':0.5,'⅓':0.333,'⅔':0.667,'¾':0.75,'⅛':0.125};
              if(f[s]) return f[s];
              if(s.includes('/')) { const [p,q]=s.split('/'); return parseFloat(p)/parseFloat(q); }
              return parseFloat(s)||null;
            }

            // Helper: round to sensible decimal
            function fmt(n, unit){
              let v = Math.round(n*10)/10;
              if((unit==='g'||unit==='ml') && v>=1000){ return (Math.round(v/100)/10)+(unit==='g'?'kg':'L'); }
              if(v===Math.floor(v)) return v+unit;
              return v+unit;
            }

            // 1. "Xg/ml/kg/L per person" or "Xg/ml/kg/L per portion"
            const m1 = a.match(/^(\d+(?:\.\d+)?)\s*(g|ml|kg|L)\s+per\s+p(?:erson|ortion)/i);
            if(m1){
              const total = parseFloat(m1[1]) * guests;
              const rest = a.slice(m1[0].length).replace(/^\s*[,(]?/, '').trim();
              return { pp: m1[1]+m1[2]+' pp', total: fmt(total, m1[2]), rest };
            }

            // 2. "X slices/pieces/portions per person" (integer count with label)
            const m2 = a.match(/^(\d+(?:\.\d+)?)\s+(slices?|pieces?|portions?|scoops?|cups?|tbsp|tsp|per person)\s+per\s+p(?:erson|ortion)/i);
            if(m2){
              const total = Math.round(parseFloat(m2[1]) * guests);
              const unit = m2[2];
              const rest = a.slice(m2[0].length).trim();
              return { pp: m2[1]+' '+unit+' pp', total: total+' '+unit+' total', rest };
            }

            // 3. Plain number per person (no unit — pieces implied)
            const m3 = a.match(/^(\d+(?:\.\d+)?)\s+per\s+p(?:erson|ortion)/i);
            if(m3){
              const total = Math.round(parseFloat(m3[1]) * guests);
              const rest = a.slice(m3[0].length).trim();
              return { pp: m3[1]+' pp', total: total+' total', rest };
            }

            // 4. Fraction per person (¼, ½, etc.)
            const m4 = a.match(/^([¼½⅓⅔¾⅛]|\d+\/\d+)\s*per\s+p(?:erson|ortion)/i);
            if(m4){
              const frac = parseFrac(m4[1]);
              const total = frac ? Math.ceil(frac * guests) : null;
              const rest = a.slice(m4[0].length).trim();
              return total ? { pp: m4[1]+' pp', total: total+' total', rest } : null;
            }

            // 5. "X tbsp/tsp per person" — convert to ml
            const m5 = a.match(/^(\d+(?:\.\d+)?)\s+(tbsp|tsp)\s+per\s+p(?:erson|ortion)/i);
            if(m5){
              const mlMult = m5[2].toLowerCase()==='tbsp' ? 15 : 5;
              const total = Math.round(parseFloat(m5[1]) * mlMult * guests);
              const rest = a.slice(m5[0].length).trim();
              return { pp: m5[1]+' '+m5[2]+' pp', total: fmt(total,'ml'), rest };
            }

            return null; // not scalable
          }

          // ── pp-field scaler (works for sauces, dips, finger foods) ──
          const hasPP = aer.base300.some(i=>i && i.pp != null);
          // Sauce/dip: uses ppG (grams per person) directly
          const isSauceDip = hasPP && !aer.makes;
          const recMakes = aer.makes || 0;

          function fmtTotal(ppVal, unit, multiplier){
            if(ppVal == null) return null;
            const raw = ppVal * multiplier;
            if((unit==='g'||unit==='ml') && raw >= 1000){
              const v = Math.round(raw/100)/10;
              return v + (unit==='g'?'kg':'L');
            }
            const v = Math.round(raw*10)/10;
            return (v||'') + (unit||'');
          }

          return aer.base300.map((i,idx)=>{
            if(!i || !i.n) return '';
            const isLast = idx === aer.base300.length - 1;
            const border = isLast ? 'none' : '1px solid #1a1208';
            if(!i.a && i.pp == null) return `<div style="padding:5px 0;border-bottom:${border};font-size:12px;color:#c06020;font-style:italic;">${i.n}</div>`;

            // Sauce/dip or finger food: use pp field scaled to guests or pieces
            if(hasPP && i.pp != null){
              const ppAmt = i.pp;
              const unit = i.u||'';
              const multiplier = guests;
              const unitWord = isSauceDip ? 'pp' : 'per piece';
              const totalAmt = fmtTotal(ppAmt, unit, multiplier);
              const ppDisplay = ppAmt + (unit||'') + ' ' + unitWord;
              return `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:6px 0;border-bottom:${border};gap:8px;">
                <span style="font-size:13px;color:#c8b898;flex:1;">${i.n}</span>
                <span style="text-align:right;flex-shrink:0;">
                  <span style="font-size:11px;color:#aa6d8f;">${ppDisplay} · </span>
                  <span style="font-size:14px;color:#f5c842;font-weight:bold;">${totalAmt} total</span>
                </span>
              </div>`;
            }
            if(!i.a) return `<div style="padding:5px 0;border-bottom:${border};font-size:12px;color:#c06020;font-style:italic;">${i.n}</div>`;

            const scaled = scaleIngredient(i.a, i.n);
            if(scaled){
              return `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:6px 0;border-bottom:${border};gap:8px;">
                <span style="font-size:13px;color:#c8b898;flex:1;">${i.n}${scaled.rest?' <span style="font-size:11px;color:#c06020;">('+scaled.rest+')</span>':''}</span>
                <span style="text-align:right;flex-shrink:0;">
                  <span style="font-size:11px;color:#aa6d8f;">${scaled.pp} · </span>
                  <span style="font-size:14px;color:#f5c842;font-weight:bold;">${scaled.total}</span>
                </span>
              </div>`;
            } else {
              return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:${border};">
                <span style="font-size:13px;color:#c8b898;">${i.n}</span>
                <span style="font-size:12px;color:#a27196;font-style:italic;">${i.a}</span>
              </div>`;
            }
          }).join('');
        })()}
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid #1a1208;font-size:10px;color:#bb61a5;font-style:italic;">Scaled for ${guests} guests · adjust guest count on the planner screen</div>
      </div>`:''}
      ${aer.method?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">Method</div>
        ${aer.method.map((s,i)=>`<div style="display:flex;gap:10px;margin-bottom:10px;"><div style="min-width:24px;height:24px;border-radius:50%;background:#1a1208;border:1px solid #c06020;display:flex;align-items:center;justify-content:center;font-size:11px;color:#c06020;flex-shrink:0;">${i+1}</div><div style="font-size:13px;color:#c8b898;line-height:1.6;">${s}</div></div>`).join('')}
      </div>`:''}
      ${aer.tip?`<div style="background:#160f08;border:1px solid #3a2010;border-radius:10px;padding:10px 12px;margin-bottom:16px;"><span style="color:#e04080;font-size:11px;">💡 TIP: </span><span style="font-size:12px;color:#d090a0;">${aer.tip}</span></div>`:''}
      ${aer.mlPerPerson?`<div style="background:#1a1208;border:1px solid #3a2010;border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:12px;color:#c8b898;">🥄 ${aer.mlPerPerson}ml per person · ${(aer.mlPerPerson*guests/1000).toFixed(1)}L for ${guests} guests</div>`:''}
      ${(()=>{
        if(aer._type!=='finger') return '';
        const isPro = tierAllows('pro');
        const inPlan = (S.eventSelectedFingers||[]).includes(aer.id);
        if(isPro){
          return '<button onclick="set({eventSelectedFingers:toggle(S.eventSelectedFingers,\'' + aer.id + '\'),eventActiveRecipe:null,fingerSection:\'savoury\',fingerView:\'browse\'})" style="width:100%;padding:14px;background:' + (inPlan?'#1a1208':'#1a1208') + ';border:2px solid ' + (inPlan?'#c06020':'#3a2010') + ';border-radius:10px;color:' + (inPlan?'#f5c842':'#c06020') + ';font-size:14px;cursor:pointer;margin-bottom:12px;">' + (inPlan?'✓ Remove from Plan — back to list':'+ Add to Plan — back to list') + '</button>';
        }
        return '<div style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:10px;text-align:center;color:#c06020;font-size:12px;margin-bottom:12px;">👑 Add to Plan — Pro feature</div>';
      })()}
      <button onclick="set({eventActiveRecipe:null,fingerSection:'savoury',fingerView:'browse'})" style="width:100%;padding:12px;background:#0a0010;border:1px solid #3a2010;border-radius:10px;color:#c06020;font-size:13px;cursor:pointer;margin-bottom:20px;">← Back to Savoury</button>
    </div>
  </div>`;
}

// ── EVENTS & CELEBRATIONS RENDER ──────────────────────────────────
function buffetStep8(){
  const isPro = tierAllows('pro');
  const guests = S.eventGuests||6;
  const selSauces = S.eventSelectedSauces||[];
  const saucesToShow = ['beefgravy','mintsauce','applesauce','tartaresauce','creamymustardsauce','peppersauce','chimichurri','monkeygland','cheesesauce','lemonherbsauce','periperi'];
  const sauceList = EVENTS_SAUCES.filter(s=>saucesToShow.includes(s.id));

  const sauceCards = sauceList.map(r=>{
    const isSel = selSauces.includes(r.id);
    const checkBox = isPro ? '<div style="width:22px;height:22px;border-radius:6px;background:'+(isSel?'#c06020':'transparent')+';border:2px solid '+(isSel?'#c06020':'#3a2010')+';display:flex;align-items:center;justify-content:center;font-size:13px;color:white;flex-shrink:0;">'+(isSel?'&#x2713;':'')+'</div>' : '';
    const clickAction = isPro ? "set({eventSelectedSauces:toggle(S.eventSelectedSauces,'"+r.id+"')})" : '';
    return '<div onclick="'+clickAction+'" style="background:'+(isSel?'#1a1208':'#1a1208')+';border:1px solid '+(isSel?'#c06020':'#3a2010')+';border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:10px;">'
      + checkBox
      + '<div style="flex:1;">'
      + '<div style="font-size:14px;color:#e0d4b8;">'+(r.emoji||'🫙')+' '+r.name+'</div>'
      + (r.costPP ? '<div style="font-size:11px;color:#c06020;margin-top:2px;">~R'+r.costPP+'/pp</div>' : '')
      + '</div>'
      + '<button onclick="event.stopPropagation();openEvent(\"'+r.id+'\",\"sauce\")" style="background:none;border:1px solid #3a2010;border-radius:6px;padding:4px 10px;color:#c06020;font-size:11px;cursor:pointer;">Recipe →</button>'
      + '</div>';
  }).join('');

  return '<div>'
    + '<div class="header" style="background:'+BCbg+';border-bottom:1px solid #c06020;">'
    + '<button class="back-btn" onclick="set({buffetStep:6})" style="color:'+BC+';">← Desserts</button>'
    + '<h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">🫙 Sauces & Gravies</h1>'
    + '<p style="margin:0;font-size:11px;color:#c06020;font-style:italic;">'+selSauces.length+' selected · '+guests+' guests</p>'
    + '</div>'
    + '<div class="content">'
    + buffetQuickNav(8)
    + '<div style="background:#160f08;border:1px solid #3a2010;border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:11px;color:#c090a0;">💡 Select sauces and gravies to serve alongside your buffet. They will appear in your shopping list.</div>'
    + sauceCards
    + buffetQuickNav(8)
    + buffetPlanBtn()
    + '</div></div>';
}

// ═══════════════════════════════════════════════════════════════════
// KIDDIES PARTIES DATA & FUNCTIONS
// ═══════════════════════════════════════════════════════════════════
const KIDS_THEMES = [
  { id:'dino', emoji:'🦕', name:'Dinosaur Dig Party', palette:'Olive green · Rust orange · Sand beige', vibe:'Excavation adventure — wild, earthy and exciting',
    colours:['#4a6e3a','#c0622a','#c8b080'],
    foods:{easy:['Dino Claw Chicken Strips','Mini Ham & Cheese Pizza','Chocolate Dirt Cups','Marshmallow Chocolate Fudge','Dinosaur Eggs'],medium:['Dino Claw Chicken Strips','Mini Ham & Cheese Pizza','Dinosaur Eggs','Chocolate Dirt Cups','Marshmallow Chocolate Fudge'],fancy:['Dino Claw Chicken Strips','Mini Ham & Cheese Pizza','Dinosaur Eggs','Chocolate Dirt Cups','Marshmallow Chocolate Fudge','Dig Site Snack Board']},
    recipes:[
      {name:'Dino Claw Chicken Strips',type:'savoury',per:2,unit:'strips',base12:{chicken:'800g chicken breast',breadcrumbs:'200g breadcrumbs',eggs:'2 eggs',milk:'100ml milk',oil:'50ml oil'},method:'Dip strips in egg-milk mix, coat in seasoned breadcrumbs. Bake at 200°C for 25 min. Serve with tomato "lava" sauce. (Eggs scale at 1 per 6 kids.)',time:45,kcal:120},
      {name:'Mini Ham & Cheese Pizza',type:'savoury',per:2,unit:'mini pizzas',base12:{flour:'600g cake flour',yeast:'6g instant yeast',olive_oil:'25ml olive oil',tomato_sauce:'250g tomato sauce',mozzarella:'300g mozzarella',parmesan:'75g parmesan',ham:'120g ham',pineapple:'120g pineapple'},method:'DOUGH (start 2 hours ahead): mix the cake flour, yeast and a pinch of salt, add lukewarm water and the olive oil and knead 8-10 minutes until smooth. Cover and prove about 1-1.5 hours until doubled. Knock back and roll into 10cm rounds about 3mm thick (makes around 24). PAR-BAKE the plain bases at 220°C for 5 minutes until set but not golden, then cool. Warm the tomato sauce with a little garlic and a pinch of sugar for the base. Spread a thin layer on each base, then scatter over the grated mozzarella and parmesan. Lay a little chopped ham on top and scatter small dried pineapple pieces in a single layer (pat the pineapple dry first so it does not go soggy). BAKE at 220°C for 6-8 minutes until the cheese is bubbling and the edges are golden. Cool 2 minutes before serving. Makes about 24 mini pizzas — 2 per child for 12 kids.',time:140,kcal:175},
      {name:'Dinosaur Eggs',type:'savoury',per:1,unit:'egg',base12:{eggs:'12 eggs',water:'1000ml water',food_colouring:'10ml food colouring'},method:'Boil eggs until hard. Cool, then gently tap all over to make tiny cracks in the shell (do not peel). Add about 2ml food colouring to 1000ml water. Soak the cracked eggs in the coloured water for 4 hours. Peel to reveal a marbled "dinosaur egg" pattern. (Eggs scale at 1 per child.)',time:30,kcal:78},
      {name:'Chocolate Dirt Cups',type:'sweet',per:1,unit:'cup',base12:{instant_chocolate_pudding:'180g instant chocolate pudding',milk:'1000ml milk',chocolate_biscuits:'200g chocolate biscuits',jelly_babies:'125g jelly babies',sprinkles:'100g sprinkles'},method:'Make the pudding: pour 450-500ml cold milk per 90g pudding powder into a bowl, whisk vigorously 1-2 min until thick. Refrigerate 5 min to set. Crush the chocolate biscuits. Layer pudding and crushed biscuits in cups to look like soil. Top with a jelly baby and sprinkles.',time:15,kcal:250},
      {name:'Marshmallow Chocolate Fudge',type:'sweet',per:2,unit:'pieces',base12:{condensed_milk:'790g sweetened condensed milk',dark_chocolate:'240g dark chocolate',chocolate_bar:'252g chocolate bar',marshmallows:'125g marshmallows'},method:'Line an 18x28cm pan with baking paper. Melt condensed milk and dark chocolate in a saucepan over medium heat, stirring 5 min until smooth. Working quickly, stir in the chopped chocolate bar and quartered marshmallows. Pour into the pan, level the top, and refrigerate overnight until firm. Cut into squares.',time:20,kcal:160},
      {name:'Dig Site Snack Board',type:'healthy',per:1,unit:'serving',base12:{carrots:'400g carrots',grapes:'300g grapes',cheddar:'600g cheddar',tomatoes:'150g cherry tomatoes'},method:'Cut carrots into sticks and cheddar into blocks (50g per child). Arrange neatly with grapes and cherry tomatoes on a platter like a dig site.',time:10,kcal:80},
    ],
    drink:{name:'Swamp Juice',base12:{lemonade:'2000ml lemonade',apple:'500ml apple juice'},method:'Mix and chill. Add ice + lemon slices at serving.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 3 × 2L bottles fizzy cooldrink.',perChildMl:400,kcal:110},
    cake:{name:'Chocolate Volcano Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',cocoa:'50g cocoa',sugar:'200g sugar',butter:'150g butter',eggs:'3 eggs',milk:'200ml milk',icing_sugar:'400g icing sugar',icing_butter:'200g butter',icing_milk:'15ml milk',vanilla:'5ml vanilla extract',green_food_colouring:'5ml food colouring'},method:'Cream butter & sugar, add eggs, alternate dry ingredients + milk. Bake two 20cm rounds at 180°C for 30 min. For icing, beat icing sugar with butter, add milk gradually, then vanilla and a few drops of green colouring. Stack and decorate with green lava icing + chocolate rocks + dino toys.',kcal:350},
    decor:{budget:['Green & sand balloon clusters','Plastic dinosaurs on table','Kraft paper runner','Leaf branches for jungle feel'],styled:['Dinosaur dig site centrepiece with sand tray','Monstera leaf backdrop','Layered height using wooden crates','Moss + rocks for texture'],photospot:'Dig site with sand tray, shovels and dino fossils'},
    zones:['🎂 Volcano Cake Zone','🦕 Dig Site Snack Board','🎮 Fossil Hunt Activity','📸 Dig Site Photo Spot'],
    timeline:{two:'Bake volcano cake & make dino eggs',one:'Chicken strips & dirt cups',morning:'Mini pizzas, snack board & drinks'},
    games:'Egg hunt · Fossil dig in sandpit · Roar relay race'
  },
  { id:'unicorn', emoji:'🦄', name:'Unicorn Garden Party', palette:'Soft pink · Lavender · Mint · Cream', vibe:'Magical, gentle and dreamily beautiful',
    colours:['#e8a0c0','#c8a0e0','#a0d8c0'],
    foods:{easy:['Rainbow Wrap Pinwheels','Mini Meatballs','Fairy Fruit Skewers','Unicorn Popcorn','Rainbow Yogurt Cups','Cheesy Puff Pastry Stars'],medium:['Rainbow Wrap Pinwheels','Fairy Fruit Skewers','Cheesy Puff Pastry Stars','Unicorn Popcorn','Rainbow Yogurt Cups'],fancy:['Rainbow Wrap Pinwheels','Fairy Fruit Skewers','Cheesy Puff Pastry Stars','Unicorn Popcorn','Rainbow Yogurt Cups','Pastel Marshmallow Pops']},
    recipes:[
      {name:'Rainbow Wrap Pinwheels',type:'savoury',per:2,unit:'pieces',base12:{tortillas:'6 large tortillas',cream_cheese:'250g cream cheese',carrots:'150g carrots',cucumber:'150g cucumber',peppers:'100g peppers'},method:'Grate the carrots and finely slice the cucumber and peppers. Spread cream cheese over each tortilla, layer the veggies, roll tightly, chill, then slice into pinwheels.',time:45,kcal:110},
      {name:'Mini Meatballs',type:'savoury',per:3,unit:'meatballs',base12:{beef_mince:'800g beef mince',breadcrumbs:'90g breadcrumbs',milk:'150ml milk',onion:'150g onion',eggs:'3 eggs',tomato_sauce:'150g tomato sauce'},method:'PANADE: soak the breadcrumbs in the milk and mash to a smooth paste — this is the secret to juicy meatballs, never use them dry. Finely dice the onion and soften it in a little oil until golden, then cool completely (hot onion cooks the egg). Mix the beef mince with the panade, cooled onion, beaten egg and a pinch of salt. Mix gently with your hands until just combined — overworking makes them tough. Roll into small even balls with wet hands (about a heaped teaspoon each). Bake at 200°C on a lined tray for 12-15 minutes until golden and cooked through. STICKY GLAZE: simmer the tomato sauce with a spoon of apricot jam and a splash of soy sauce for 3-5 minutes until glossy, then toss the hot meatballs in it. (Eggs scale at 1 per 6 kids.) Makes about 36 — 3 per child for 12 kids.',time:40,kcal:130},
      {name:'Fairy Fruit Skewers',type:'healthy',per:2,unit:'skewers',base12:{strawberries:'400g strawberries',grapes:'400g grapes',melon:'300g melon',blueberries:'200g blueberries'},method:'Thread fruit in rainbow colour order on skewers.',time:10,kcal:60},
      {name:'Cheesy Puff Pastry Stars',type:'savoury',per:2,unit:'stars',base12:{pastry:'2 sheets puff pastry',cheese:'120g grated cheddar/parmesan',egg:'2 eggs (beaten, for glaze)'},method:'Preheat oven to 200°C and line a tray. Sprinkle cheese over half of each pastry sheet, fold the other half over and press to seal. Stamp out stars with a cookie cutter. Brush tops with beaten egg (or milk). Bake 12-15 min until puffed and golden.',time:25,kcal:65},
      {name:'Unicorn Popcorn',type:'sweet',per:1,unit:'serving',base12:{popcorn:'100g popcorn kernels',white_chocolate:'150g white chocolate',sprinkles:'50g sprinkles'},method:'Pop the kernels and spread on a lined tray. Melt the white chocolate in 30-second microwave bursts, stirring between each, until smooth. Drizzle over the popcorn and toss gently to coat. Scatter sprinkles while still wet. Set at room temp or 10-15 min in the fridge, then break into clusters.',time:25,kcal:150},
      {name:'Rainbow Yogurt Cups',type:'healthy',per:1,unit:'cup',base12:{yogurt:'1500ml yogurt',fruit_cocktail:'600g tinned fruit cocktail'},method:'Layer yogurt and drained fruit cocktail (50g per child) in clear cups. Option: use 50g fresh chopped seasonal fruit per child instead.',time:10,kcal:130},
      {name:'Pastel Marshmallow Pops',type:'sweet',per:2,unit:'pops',base12:{marshmallows:'24 large marshmallows',chocolate:'200g white chocolate',decor:'pastel sprinkles'},method:'Melt the white chocolate. Dip marshmallows on sticks into the melted white chocolate, then add pastel sprinkles before it sets.',time:15,kcal:110},
    ],
    drink:{name:'Pink Strawberry Milk',base12:{milk:'2000ml milk',apple_juice:'1000ml apple juice',strawberry_juice:'2000ml strawberry juice'},method:'Mix milk, apple juice and strawberry juice well and chill. Garnish with a fresh strawberry.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2L milk + 1L apple juice + 2L strawberry juice.',perChildMl:400,kcal:120},
    cake:{name:'Vanilla Rainbow Layer Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',icing_sugar:'500g icing sugar',icing_butter:'250g butter',icing_milk:'30ml milk',vanilla:'10ml vanilla extract',food_colouring:'5ml food colouring'},method:'Make the batter and divide into 4 bowls. Colour each bowl a different pastel shade. Bake each colour SEPARATELY as its own thin layer (4 separate layers). For icing, beat softened butter 5-7 min until pale, sift in icing sugar in 3 batches, add vanilla and milk gradually until smooth. Once all 4 layers are baked and cooled, stack them on top of each other with icing between each, so you end up with a 4-colour layered cake. Finish with unicorn topper + sprinkles.',kcal:380},
    decor:{budget:['Pastel balloon cluster (pink + lavender + white)','Ribbon streamers','White tablecloth with pastel cups','Fairy lights'],styled:['Full pastel balloon garland','Cloud cutouts hanging','Pearl bead table scatter','Styled dessert table with cake stands'],photospot:'Cloud backdrop with pastel streamers and "Magical" sign'},
    zones:['🎂 Rainbow Cake Zone','🦄 Pastel Snack Table','🎨 Craft Corner','📸 Cloud Photo Spot'],
    timeline:{two:'Bake cake layers & make marshmallow pops',one:'Make pinwheels, yogurt cups & popcorn',morning:'Fruit skewers & cheese stars on the day'},
    games:'Rainbow relay · Unicorn treasure hunt · Pin the horn on the unicorn'
  },
  { id:'space', emoji:'🚀', name:'Space Explorer Party', palette:'Navy blue · Silver · Deep purple · Neon accents', vibe:'Cosmic adventure — futuristic and exciting',
    colours:['#1a1a60','#8080a0','#6020a0'],
    foods:{easy:['Rocket Hot Dogs','Galaxy Popcorn','Planet Fruit Skewers','Meteor Brownies','Moon Cheese Balls'],medium:['Rocket Hot Dogs','Moon Cheese Balls','Alien Burgers','Galaxy Popcorn','Meteor Brownies'],fancy:['Rocket Hot Dogs','Moon Cheese Balls','Alien Burgers','Galaxy Popcorn','Meteor Brownies','Planet Fruit Skewers']},
    recipes:[
      {name:'Rocket Hot Dogs',type:'savoury',per:2,unit:'rockets',base12:{viennas:'800g viennas (12 — 1 per child)',rolls:'12 hot dog rolls (1 per child)',margarine:'30g margarine or butter',tomato_sauce:'150g tomato sauce',cheese:'100g cheddar'},method:'(Outside SA, use small smoked sausages instead of viennas.) Cut a slot along the top of each roll and smear the inside with margarine or butter. Push a whole vienna into the slot. Add a line of tomato sauce on top, then sprinkle over grated cheddar. Bake at 180°C for 12 min until the cheese melts. Once baked, cut each filled roll in half to make two mini "rockets".',time:25,kcal:160},
      {name:'Moon Cheese Balls',type:'savoury',per:2,unit:'balls',base12:{cream_cheese:'400g cream cheese',cheddar:'200g cheddar',pretzels:'100g pretzels'},method:'Grate the cheddar and crush the pretzels (or use breadcrumbs). Mix the cheeses, roll into balls, then coat in the crushed pretzels. Chill until firm.',time:15,kcal:90},
      {name:'Alien Burgers',type:'savoury',per:2,unit:'burgers',base12:{beef_mince:'1200g beef mince',buns:'24 cocktail buns',cheddar:'240g cheddar',lettuce:'1 lettuce',tomatoes:'500g tomatoes',oil:'72ml oil'},method:'Season the mince with salt and pepper, mix lightly. Divide into 24 portions (~50g), roll and press into patties slightly wider than the buns. Bake at 180°C for ~10 min, or fry 3-4 min each side. In the last minute, sprinkle grated cheddar on each patty to melt. Slice buns, add shredded lettuce, the cheesy patty and a tomato slice.',time:35,kcal:175},
      {name:'Galaxy Popcorn',type:'sweet',per:1,unit:'serving',base12:{popcorn:'100g popcorn kernels',white_chocolate:'150g white chocolate',sprinkles:'50g sprinkles'},method:'Pop the kernels and spread on a lined tray. Melt the white chocolate in 30-second microwave bursts, stirring between each. Drizzle over the popcorn and toss to coat. Scatter sprinkles (or edible silver stars) while wet. Set 10-15 min, then break into clusters.',time:25,kcal:150},
      {name:'Meteor Brownies',type:'sweet',per:2,unit:'brownies',base12:{butter:'200g butter',sugar:'200g sugar',cocoa:'100g cocoa',eggs:'3 eggs',flour:'150g flour'},method:'Melt the butter and stir in the cocoa. Beat in the sugar, then the eggs one at a time, then fold in the flour. Pour into a lined square tin and bake at 180°C for ~20 min until just set. Cool, then cut into "meteor" squares. (Brownies use a fixed 3-egg ratio, not the per-child egg rule.)',time:35,kcal:140},
      {name:'Planet Fruit Skewers',type:'healthy',per:2,unit:'skewers',base12:{strawberries:'400g strawberries',grapes:'400g grapes',melon:'300g melon',blueberries:'200g blueberries'},method:'Peel the melon and scoop into balls. Thread fruit onto skewers, alternating colours to look like planets.',time:10,kcal:55},
    ],
    drink:{name:'Blueberry Space Punch',base12:{lemonade:'2000ml lemonade',blueberry_cordial:'750ml blueberry cordial',soda_water:'200ml soda water'},method:'Dilute the cordial (1 part to 3) and mix with lemonade in a large jug; add a little blue colouring for a galaxy effect. Chill and serve with ice. (750ml cordial makes ~3L mixed.)',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 3L mixed berry juice (or 2 × 2L bottles).',perChildMl:400,kcal:115},
    cake:{name:'Galaxy Chocolate Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',cocoa:'50g cocoa',sugar:'200g sugar',butter:'150g butter',eggs:'3 eggs',milk:'200ml milk',icing_sugar:'500g icing sugar',icing_butter:'250g butter',icing_milk:'30ml milk',vanilla:'10ml vanilla extract',food_colouring:'5ml food colouring',stars_icing_sugar:'150g icing sugar'},method:'Bake two 20cm chocolate cakes. For icing, beat softened butter 5-7 min until pale, sift in 500g icing sugar in 3 batches, add vanilla and milk gradually; colour purple/black. Swirl over the cake. EDIBLE STARS: mix 150g icing sugar with 1 egg white (or 22ml water) a teaspoon at a time into a stiff dough, colour, roll to 3mm, cut stars, air-dry 12-24h until hard. Add stars + edible glitter to finish.',kcal:370},
    decor:{budget:['Navy blue + silver balloon cluster','Silver star stickers on dark tablecloth','Fairy lights as stars','Printable rocket cutouts'],styled:['Dark navy backdrop with foil star curtain','Silver + purple balloon garland','Glow-in-dark table scatter stars','Mission control printed banners'],photospot:'"Space launch" with black sheet + foil stars + rocket backdrop'},
    zones:['🎂 Galaxy Cake Zone','🚀 Mission Control Snack Table','🎮 Space Activity Zone','📸 Star Launch Photo Spot'],
    timeline:{two:'Bake galaxy cake & make brownies',one:'Hot dogs & sliders prepped, popcorn made',morning:'Fruit skewers & cheese balls on party morning'},
    games:'Space obstacle course · Alien freeze tag · Rocket balloon relay'
  },
  { id:'pirate', emoji:'🏴‍☠️', name:'Pirate Treasure Party', palette:'Black · Red · Gold · Deep blue', vibe:'Swashbuckling treasure hunt fun',
    colours:['#1a1a1a','#c02020','#c0a020'],
    foods:{easy:['Treasure Chest Sandwiches','Pirate Pizza Coins','Gold Coin Cookies','Golden Chocolate Biscuit Bark','Jolly Roger Fruit Skewers'],medium:['Treasure Chest Sandwiches','Pirate Pizza Coins','Cannonball Meatballs','Gold Coin Cookies','Golden Chocolate Biscuit Bark'],fancy:['Treasure Chest Sandwiches','Pirate Pizza Coins','Cannonball Meatballs','Gold Coin Cookies','Golden Chocolate Biscuit Bark','Jolly Roger Fruit Skewers']},
    recipes:[
      {name:'Treasure Chest Sandwiches',type:'savoury',per:2,unit:'chests',base12:{bread:'2 loaves sliced bread',ham:'300g ham',mayonnaise:'100g mayonnaise',cheese:'200g cheese slices'},method:'Mix ham with mayonnaise (or use chicken mayo). Make sandwiches and cut into treasure-chest shapes. Decorate edges with cheese "locks".',time:15,kcal:170},
      {name:'Pirate Pizza Coins',type:'savoury',per:2,unit:'pizza coins',base12:{flour:'600g cake flour',yeast:'6g instant yeast',olive_oil:'25ml olive oil',tomato_sauce:'250g tomato sauce',mozzarella:'300g mozzarella',parmesan:'75g parmesan',salami:'120g salami'},method:'DOUGH (start 2 hours ahead): mix the cake flour, yeast and a pinch of salt, add lukewarm water and the olive oil and knead 8-10 minutes until smooth. Cover and prove about 1-1.5 hours until doubled. Knock back and roll into small 8cm rounds about 3mm thick — these are your pirate coins (makes around 24). Par-bake the plain bases at 220°C for 5 minutes, then cool. Spread a thin layer of tomato sauce on each, then scatter over the grated mozzarella and parmesan. Lay 3-4 small salami slices ON TOP of the cheese, slightly overlapping in the centre like a gold doubloon. BAKE at 220°C for 6-8 minutes — the salami edges curl up and crisp, which is exactly what you want. Cool slightly and serve as round pizza coins. Makes about 24 coins — 2 per child for 12 kids.',time:140,kcal:175},
      {name:'Cannonball Meatballs',type:'savoury',per:2,unit:'meatballs',base12:{beef_mince:'800g beef mince',eggs:'1 egg',breadcrumbs:'50g breadcrumbs',bbq_sauce:'250ml bbq sauce'},method:'Mix mince, beaten egg, breadcrumbs and seasoning. Roll into balls. Bake at 200°C for 20 min. Serve with BBQ sauce for dipping (or use our Monkey Gland sauce from the Braai/Buffet section). (Eggs scale at 1 per 6 kids.)',time:35,kcal:110},
      {name:'Gold Coin Cookies',type:'sweet',per:2,unit:'cookies',base12:{butter:'250g butter',sugar:'150g sugar',flour:'350g flour',vanilla:'5ml vanilla extract',golden_sugar:'100g sugar'},method:'Cream butter & sugar, add flour + vanilla, roll out and cut coin shapes. Bake 180°C for 12 min. GOLDEN SUGAR: put 100g sugar in a sealed bag with a little gold luster dust or 1-2 drops yellow colouring, shake 1-2 min until evenly coated (air-dry 30 min if using liquid colour). Dust cookies with the golden sugar.',time:27,kcal:130},
      {name:'Golden Chocolate Biscuit Bark',type:'sweet',per:1,unit:'serving',base12:{chocolate:'480g dark chocolate',biscuits:'240g biscuits',golden_sugar:'60ml golden sugar'},method:'Line a tray with parchment. Melt the chocolate in 30-second microwave bursts, stirring until smooth. Fold in the crushed biscuits. Spread 0.5-1cm thick on the tray. While still wet, sprinkle generously with golden sugar. Chill 30 min until set, then break into treasure-map shards.',time:40,kcal:210},
      {name:'Jolly Roger Fruit Skewers',type:'healthy',per:2,unit:'sticks',base12:{pineapple:'600g pineapple',strawberries:'440g strawberries',grapes:'400g grapes',honey:'60g honey',lemon_juice:'30ml lemon juice'},method:'Cut pineapple into 2.5cm cubes, halve large strawberries, leave grapes whole. Thread 4-5 pieces (~60g) per skewer, alternating colours. Whisk honey (or sugar) with lemon/lime juice (add a splash of warm water if thick) and drizzle over just before serving.',time:15,kcal:50},
    ],
    drink:{name:'Ocean Punch',base12:{blue_lemonade:'3000ml blue lemonade',apple_juice:'1000ml apple juice',pineapple_juice:'1000ml pineapple juice'},method:'Mix all juices. Add a little blue colouring if needed. Serve with ice.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 3 × 2L bottles fizzy cooldrink.',perChildMl:400,kcal:105},
    cake:{name:'Pirate Ship Cake',base12:{flour:'350g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',icing_sugar:'600g icing sugar',icing_butter:'300g butter',icing_milk:'15ml milk',red_food_colouring:'2ml food colouring'},method:'Bake a rectangular loaf or two layers and shape into a ship hull. For red buttercream, beat softened butter 5 min until pale, sift in icing sugar on low then beat high 2 min, add red colouring gradually, then milk/water a little at a time to spreading consistency. Cover the hull, add wafer-cookie sails, chocolate cannons and gold-coin decorations.',kcal:390},
    decor:{budget:['Black & red balloon cluster','Gold foil coins scattered on table','Printable treasure map signs','Kraft paper table runner'],styled:['Treasure chest centrepiece with gold-wrapped sweets','Rope and anchor decorations','Gold and black balloon arch','Message in a bottle centrepieces'],photospot:'Treasure chest with gold-wrapped sweets and "X marks the spot" sign'},
    zones:['🎂 Treasure Chest Cake Zone','🍕 Shipwreck Snack Cove','🗺️ Treasure Hunt Zone','📸 Pirate Photo Spot'],
    timeline:{two:'Bake cake & make chocolate treasure bark',one:'Meatballs & cookies the day before',morning:'Sandwiches & fruit skewers on party day'},
    games:'Treasure hunt (map + clues) · Cannonball toss (bean bags) · Pirate sword relay (pool noodles)'
  },
  { id:'mermaid', emoji:'🧜', name:'Mermaid Lagoon Party', palette:'Turquoise · Ocean blue · Coral pink · Pearl white', vibe:'Underwater magic — elegant and shimmering',
    colours:['#2090b0','#e06080','#e0e8d0'],
    foods:{easy:['Ocean Sandwich Shapes','Mermaid Marshmallow Biscuit Bark','Mermaid Jelly Cups','Pearl Cookies','Blue Coconut Ice Pops'],medium:['Seashell Pasta Cups','Ocean Sandwich Shapes','Mermaid Jelly Cups','Pearl Cookies','Mermaid Marshmallow Biscuit Bark'],fancy:['Seashell Pasta Cups','Ocean Sandwich Shapes','Mermaid Jelly Cups','Pearl Cookies','Mermaid Marshmallow Biscuit Bark','Blue Coconut Ice Pops']},
    recipes:[
      {name:'Seashell Pasta Cups',type:'savoury',per:2,unit:'cups',base12:{pasta:'400g shell pasta',butter:'30g butter',flour:'30g flour',milk:'200ml milk',cheese:'160g cheddar',tuna:'150g tuna'},method:'Cook the pasta. CHEESE SAUCE: melt butter, whisk in flour 1 min, gradually add milk whisking until thick, stir in 60g of the cheddar until smooth. Mix sauce with pasta and tuna (or ham). Divide mixture among prepared muffin pans, pressing down well. Sprinkle with the remaining cheese. Bake 180°C for 10 min.',time:27,kcal:140},
      {name:'Ocean Sandwich Shapes',type:'savoury',per:2,unit:'shapes',base12:{bread:'300g sliced bread',chicken:'300g cooked chicken breast',mayonnaise:'120g mayonnaise',butter:'60g butter',onion:'40g onion',celery:'40g celery',lemon_juice:'10ml lemon juice'},method:'Poach the chicken breast in lightly salted water for 15-18 minutes (do not boil hard), cool completely, then shred very finely with two forks. Grate the onion on the finest setting so it melts into the filling. Mix the shredded chicken with the mayonnaise, grated onion, finely diced celery and lemon juice, and season with a little salt and white pepper. Rest the filling in the fridge 10 minutes so it firms up and spreads cleanly. Butter the bread edge to edge, spread the filling evenly and top with a second slice. Cut off the crusts, then press cookie cutters in to stamp out fish, shell and starfish shapes. Keep covered with a slightly damp cloth until serving so the bread stays soft. Makes about 24 shapes — 2 per child for 12 kids.',time:35,kcal:150},
      {name:'Mermaid Jelly Cups',type:'sweet',per:1,unit:'cup',base12:{jelly_powder:'6 packets jelly',hot_water:'1200ml hot water',cold_water:'1200ml cold water',pineapple:'180g pineapple',grapes:'180g grapes'},method:'Dissolve 3 blue jelly packets in 600ml boiling water, add 600ml cold water; repeat for green. Pour a ~40ml blue layer into each of 12 cups, chill 45-60 min until just set. Press in a few pieces of pineapple or halved grapes, pour green layer over, chill again. Repeat until full and firm (3-4 hours or overnight).',time:240,kcal:90},
      {name:'Blue Coconut Ice Pops',type:'sweet',per:2,unit:'pops',base12:{coconut_milk:'400ml coconut milk',pineapple_juice:'300ml pineapple juice',coconut:'50g desiccated coconut'},method:'Mix coconut milk, pineapple juice and a little blue colouring. Pour into moulds, freeze. Roll in desiccated coconut before serving.',time:250,kcal:75},
      {name:'Mermaid Marshmallow Biscuit Bark',type:'sweet',per:1,unit:'serving',base12:{white_chocolate:'480g white chocolate',biscuits:'240g biscuits',marshmallows:'240g marshmallows',sprinkles:'50g sprinkles'},method:'Roughly crush the biscuits (not to dust) and cut marshmallows small; combine in a bowl. Melt the white chocolate in 30-second microwave bursts until smooth. Pour over the biscuit-marshmallow mix and stir quickly with a light touch. Spread ~1cm thick on a lined tray, scatter sprinkles/edible glitter while wet. Chill 30-60 min, break into shards.',time:50,kcal:200},
      {name:'Pearl Cookies',type:'sweet',per:2,unit:'cookies',base12:{butter:'250g butter',sugar:'150g sugar',flour:'350g flour',vanilla:'5ml vanilla extract',sprinkles:'50g white sprinkles'},method:'Cream butter & sugar, add flour + vanilla. Roll into balls, flatten, press white sprinkles/pearl sugar on top. Bake 180°C for 12 min.',time:27,kcal:135},
    ],
    drink:{name:'Lagoon Lemonade',base12:{lemonade:'2000ml lemonade',blue_fizzy:'2000ml blue fizzy drink'},method:'Mix lemonade and blue fizzy drink (or pineapple juice). Add floating lemon "jellyfish" slices.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2L lemonade + 2L blue fizzy (or 3 × 2L bottles).',perChildMl:400,kcal:110},
    cake:{name:'Ocean Ombre Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',icing_sugar:'600g icing sugar',icing_butter:'300g butter',icing_milk:'15ml milk',blue_food_colouring:'2ml food colouring'},method:'Bake 3-4 layers. For icing, beat softened butter 5 min until pale, sift in icing sugar on low then beat high 2 min, add blue colouring gradually (deepens as it sits), then milk/water a little at a time. Ice from dark blue at the bottom to light turquoise on top (ombre). Add pearl sprinkles and a mermaid topper.',kcal:385},
    decor:{budget:['Turquoise & blue balloon cluster','Seashell garlands','Pearl bead scatter','Fishing net (tulle) draped over table'],styled:['Full ocean blue backdrop','Coral and seashell centrepieces','Iridescent table cloth','Layered "underwater" height using glass bowls'],photospot:'"Under the sea" with blue backdrop, blue pillows and seashells'},
    zones:['🎂 Ocean Cake Zone','🐚 Seashell Snack Bar','🎨 Mermaid Craft Corner','📸 Under the Sea Photo Spot'],
    timeline:{two:'Bake cake, make jelly cups & freeze ice pops',one:'Pasta cups & pearl cookies the day before',morning:'Fruit skewers & ocean sandwiches on party morning'},
    games:'Mermaid tail race (tie legs with scarves) · Treasure dive · Ocean wave tag'
  },
  { id:'construction', emoji:'🚜', name:'Construction Zone Party', palette:'Bright orange · Yellow · Black · Grey · Brown', vibe:'Busy building site — perfect for younger boys',
    colours:['#e07820','#d0c020','#1a1a1a'],
    foods:{easy:['Build-a-Burger Sliders','Veggie Patch Cups','Excavator Cupcakes','Chocolate Gravel Cones','Traffic Cone Cheese Puffs'],medium:['Build-a-Burger Sliders','Traffic Cone Cheese Puffs','Dirt Cup Taco Bowls','Excavator Cupcakes','Chocolate Gravel Cones'],fancy:['Build-a-Burger Sliders','Traffic Cone Cheese Puffs','Dirt Cup Taco Bowls','Excavator Cupcakes','Chocolate Gravel Cones','Veggie Patch Cups']},
    recipes:[
      {name:'Build-a-Burger Sliders',type:'savoury',per:2,unit:'burgers',base12:{beef_mince:'1200g beef mince',buns:'24 cocktail buns',cheddar:'240g cheddar',lettuce:'1 lettuce',tomatoes:'500g tomatoes',oil:'72ml oil'},method:'Season the mince, mix lightly. Divide into 24 portions (~50g), press into patties slightly wider than the buns. Bake at 180°C for ~10 min, or fry 3-4 min each side, melting cheddar on top in the last minute. Slice buns and let the kids "build" their own with lettuce and tomato.',time:35,kcal:185},
      {name:'Traffic Cone Cheese Puffs',type:'savoury',per:2,unit:'cones',base12:{puff_pastry:'400g puff pastry',cheddar:'300g cheddar'},method:'Cut pastry into triangles, roll into cone shapes, fill with grated cheddar. Bake 180°C for 15 min. Dust with paprika for the orange "cone" look.',time:25,kcal:120},
      {name:'Dirt Cup Taco Bowls',type:'savoury',per:1,unit:'bowl',base12:{taco_shells:'24 taco shells',beef_mince:'600g beef mince',kidney_beans:'360g kidney beans',cheddar:'300g cheddar',tomatoes:'360g tomatoes',oil:'60ml oil'},method:'Heat oil, brown the mince, stir in drained kidney beans, season with cumin and paprika, add a splash of water and simmer 5-8 min. SALSA: mix the chopped tomatoes with finely diced onion (optional), a squeeze of lime and a pinch of salt. Fill taco bowls with mince & beans, top with grated cheddar "dirt" and salsa.',time:25,kcal:160},
      {name:'Excavator Cupcakes',type:'sweet',per:2,unit:'cupcakes',base12:{butter:'250g butter',sugar:'250g sugar',eggs:'4 eggs',flour:'250g flour',icing_sugar:'240g icing sugar',cocoa:'60g cocoa',icing_butter:'120g butter',icing_milk:'60ml milk'},method:'Make cupcake batter, bake 180°C for 18 min. CHOC ICING: beat icing sugar, cocoa and softened butter, add milk gradually until smooth. Ice as chocolate "dirt". A mini excavator toy can be placed on top as decoration — it is NOT food, so remove before serving and keep away from small children (choking risk).',time:38,kcal:220},
      {name:'Chocolate Gravel Cones',type:'sweet',per:1,unit:'cone',base12:{chocolate:'300g milk chocolate',biscuits:'150g biscuits',ice_cream_cones:'12 ice cream cones',smarties:'150g smarties'},method:'Melt the chocolate in 30-second microwave bursts until smooth. Fold in the crushed biscuits (or rice krispies). Spoon into the cones almost to the top. While wet, press Smarties or golden sugar on top so they stick. Stand cones upright in a glass/stand and chill 30-60 min until firm.',time:50,kcal:145},
      {name:'Veggie Patch Cups',type:'healthy',per:1,unit:'cup',base12:{carrots:'250g carrots',cucumber:'150g cucumber',tomatoes:'300g cherry tomatoes',hummus:'200g hummus'},method:'Cut carrots and cucumber into sticks. Stand the veggie "plants" upright in hummus "soil" in small cups, with cherry tomatoes alongside.',time:10,kcal:85},
    ],
    drink:{name:'Fuel Station Juice',base12:{orange_juice:'4000ml orange juice',apple_juice:'1000ml apple juice'},method:'Mix the juices and pour into labelled small bottles ("Fuel").',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 4L orange juice + 1L apple juice.',perChildMl:400,kcal:120},
    cake:{name:'Chocolate Construction Site Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',cocoa:'50g cocoa',sugar:'200g sugar',butter:'150g butter',eggs:'3 eggs',milk:'200ml milk',icing_sugar:'500g icing sugar',icing_cocoa:'120g cocoa',icing_butter:'240g butter',icing_milk:'30ml milk',biscuits:'200g biscuits'},method:'Bake two chocolate layers. CHOC ICING: sift icing sugar and cocoa, beat in softened butter until smooth, add milk a little at a time. Cover the cake, then sprinkle crushed biscuits as "dirt". Add toy trucks, cones and road signs (decor only, remove before serving).',kcal:360},
    decor:{budget:['Orange & yellow balloon cluster','Yellow/black caution tape strips','Toy trucks on table','Brown kraft paper runner'],styled:['Orange traffic cones as centrepieces','Full construction zone backdrop','Hard hat photo props','Toy diggers + road signs on tiered display'],photospot:'"Construction zone" with hard hats, toy diggers and caution tape'},
    zones:['🎂 Construction Site Cake Zone','🍔 Build-Your-Own Snack Station','🚧 Building Activity Zone','📸 Hard Hat Photo Spot'],
    timeline:{two:'Bake cake & make chocolate gravel bark',one:'Cupcakes the day before',morning:'Veggie cups & sliders on party day'},
    games:'Tool relay race · Build a tower (blocks or boxes) · Cone obstacle course · Digger dig (sandpit)'
  },
  { id:'safari', emoji:'🦁', name:'Safari Adventure Party', palette:'Terracotta orange · Olive green · Sandy beige', vibe:'Wild African adventure — strong South African appeal',
    colours:['#c05030','#4a6e3a','#c8a868'],
    foods:{easy:['Zebra Sandwich Rolls','Safari Chicken Skewers','Jungle Fruit Skewers','Animal Print Cookies','Banana Jungle Muffins'],medium:['Zebra Sandwich Rolls','Lion Paw Mini Pizzas','Safari Chicken Skewers','Animal Print Cookies','Banana Jungle Muffins'],fancy:['Zebra Sandwich Rolls','Lion Paw Mini Pizzas','Safari Chicken Skewers','Animal Print Cookies','Banana Jungle Muffins','Jungle Fruit Skewers']},
    recipes:[
      {name:'Zebra Sandwich Rolls',type:'savoury',per:2,unit:'rolls',base12:{tortillas:'6 large tortillas',cream_cheese:'300g cream cheese',ham:'200g ham'},method:'Spread cream cheese over each tortilla, layer ham (or chicken slices), roll tightly, chill, then slice into pinwheels to show zebra "stripes".',time:45,kcal:115},
      {name:'Lion Paw Mini Pizzas',type:'savoury',per:2,unit:'mini pizzas',base12:{flour:'600g cake flour',yeast:'6g instant yeast',olive_oil:'25ml olive oil',tomato_sauce:'250g tomato sauce',mozzarella:'360g mozzarella',parmesan:'75g parmesan'},method:'DOUGH (start 2 hours ahead): mix the cake flour, yeast and a pinch of salt, add lukewarm water and the olive oil and knead 8-10 minutes until smooth. Cover and prove about 1-1.5 hours until doubled. Knock back and roll into 10cm rounds about 3mm thick (makes around 24). Par-bake the plain bases at 220°C for 5 minutes, then cool. Warm the tomato sauce with a little garlic and a pinch of sugar until thick. Spread a thin layer on each base and scatter over the grated mozzarella and parmesan. Arrange a few small cheese blobs around the edge so each one looks like a lion paw. BAKE at 220°C for 6-8 minutes until the cheese is bubbling and the edges are golden. Cool slightly before serving. Makes about 24 mini pizzas — 2 per child for 12 kids.',time:140,kcal:170},
      {name:'Safari Chicken Skewers',type:'savoury',per:2,unit:'skewers',base12:{chicken:'1000g chicken breast',ketchup:'250ml tomato ketchup',vinegar:'60ml vinegar',sugar:'60g brown sugar',peppers:'360g mixed peppers'},method:'BBQ SAUCE: whisk ketchup, vinegar and brown sugar in a small saucepan over low heat until the sugar dissolves and it is smooth. Cut chicken into 2.5cm cubes and peppers into similar squares. Thread 4 chicken pieces per skewer, alternating with peppers. Brush generously with the BBQ sauce. Grill or bake at 200°C for 15 min, turning halfway. (Soak wooden skewers in water 20 min first.)',time:30,kcal:130},
      {name:'Animal Print Cookies',type:'sweet',per:2,unit:'cookies',base12:{butter:'250g butter',sugar:'150g sugar',flour:'350g flour',vanilla:'5ml vanilla extract',cocoa:'20g cocoa'},method:'Cream butter & sugar, add flour + vanilla to make a vanilla dough. Set aside a portion and knead the cocoa into it for the dark "print". Combine into animal-print patterns, cut into shapes. Bake 180°C for 12 min.',time:27,kcal:135},
      {name:'Banana Jungle Muffins',type:'healthy',per:2,unit:'mini muffins',base12:{bananas:'3 ripe bananas',oats:'240g oats',flour:'180g cake flour',eggs:'2 eggs',honey:'100g honey',oil:'60ml sunflower oil',baking_powder:'5g baking powder'},method:'Preheat the oven to 180°C and line a mini-muffin tin. Mash the ripe bananas well, then mix in the beaten egg, honey and oil. Add the oats, cake flour, baking powder and a pinch of cinnamon and mix until just combined. Fill the mini cases three-quarters full. Bake 16-18 minutes until golden and a skewer comes out clean. Cool 5 minutes before removing. The riper the banana, the sweeter the muffin — no extra sugar needed. Makes about 24 mini muffins — 2 per child for 12 kids.',time:35,kcal:145},
      {name:'Jungle Fruit Skewers',type:'healthy',per:2,unit:'skewers',base12:{pineapple:'500g pineapple',mango:'400g mango',grapes:'300g grapes',strawberries:'200g strawberries'},method:'Thread fruit in jungle colour order. Add toy animal toppers.',time:10,kcal:65},
    ],
    drink:{name:'Baobab Fruit Punch',base12:{orange_juice:'2000ml orange juice',apple_juice:'1000ml apple juice',lemonade:'1500ml lemonade'},method:'Mix the juices and serve chilled. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2L orange + 1L apple + 1.5L lemonade.',perChildMl:400,kcal:115},
    cake:{name:'Safari Drip Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',icing_sugar:'400g icing sugar',icing_butter:'100g butter',chocolate:'50g chocolate',cream:'50g cream'},method:'Cream butter & sugar, beat in eggs one by one, then milk, then fold in flour + baking powder. Bake two 18-20cm layers at 180°C for 25-30 min, cool. Whip icing sugar with butter for buttercream; crumb-coat and chill 20 min, then a smooth final coat. GANACHE: heat 50g cream, pour over 50g chocolate, stir smooth, cool to honey consistency, then drip around the top edge. Finish with toy animals + leaf decorations.',kcal:380},
    decor:{budget:['Terracotta & olive balloon cluster','Leaf branches on table','Woven textures or hessian tablecloth','Animal print accents (sparingly)'],styled:['Full jungle backdrop with hanging leaves','Wooden crate display with height variation','Safari binoculars as table accents','Toy Big 5 animals on styled dessert table'],photospot:'"Safari lookout" with binoculars, safari hats and a toy jeep'},
    zones:['🎂 Watering Hole Cake Zone','🦒 Jungle Snack Safari','🎨 Animal Craft Corner','📸 Safari Photo Spot'],
    timeline:{two:'Bake safari cake & make muffins',one:'Chicken skewers & animal cookies the day before',morning:'Sandwich rolls & fruit skewers on party day'},
    games:'Animal charades · Safari binoculars hunt (hidden toy animals) · Lion roar relay'
  },
  { id:'rainbow', emoji:'🌈', name:'Rainbow Picnic Party', palette:'All bright rainbow colours · Natural greens and yellows', vibe:'Fresh, healthy and full of outdoor picnic fun',
    colours:['#e03030','#e0a020','#30a030'],
    foods:{easy:['Mini Picnic Sandwiches','BBQ Chicken Wings','Rainbow Veg Cups','Fruit Rainbow Platters','Oat Banana Muffins','Rainbow Rice Krispie Treats'],medium:['Rainbow Veg Cups','Mini Picnic Sandwiches','Colourful Pasta Salad Cups','Fruit Rainbow Platters','Oat Banana Muffins'],fancy:['Rainbow Veg Cups','Mini Picnic Sandwiches','Colourful Pasta Salad Cups','Fruit Rainbow Platters','Oat Banana Muffins','Rainbow Rice Krispie Treats']},
    recipes:[
      {name:'Rainbow Veg Cups',type:'healthy',per:1,unit:'cup',base12:{carrots:'400g carrots',cucumber:'360g cucumber',tomatoes:'300g cherry tomatoes',peppers:'200g peppers',yogurt:'300ml yogurt',lemon_juice:'30ml lemon juice',sugar:'15g sugar'},method:'Cut carrots, cucumber and peppers into colourful sticks. DIP: mix yogurt with 60g grated cucumber, lemon juice and sugar. Layer the veggies vertically in clear cups with the dip at the bottom.',time:10,kcal:80},
      {name:'Mini Picnic Sandwiches',type:'savoury',per:2,unit:'minis',base12:{bread:'300g sliced bread',ham:'250g ham',mustard:'40g mustard',cream_cheese:'60g cream cheese',butter:'60g butter'},method:'Mix the mustard with the softened cream cheese — the cream cheese softens the sharpness and stops the mustard soaking into the bread (go easy on the mustard for little ones). Butter the bread, then spread the mustard-cream cheese mixture on top. Lay the shaved ham flat in a single even layer — do not pile or fold it. Top with a second slice, cut off the crusts and cut each sandwich into small triangles or quarters. Keep covered until serving so they stay fresh. Makes about 24 minis — 2 per child for 12 kids.',time:25,kcal:155},
      {name:'BBQ Chicken Wings',type:'savoury',per:2,unit:'wings',base12:{chicken_wings:'1500g chicken wings',baking_powder:'5g baking powder',honey:'120ml honey',soy_sauce:'60ml soy sauce',garlic:'30g garlic'},method:'WING PREP: split each wing into two pieces and pat them completely bone-dry with paper towel — dry skin is the number one rule for crispy wings. CRISP-COAT: toss the dry wings with the baking powder and a pinch of salt, which crisps the skin like frying with no oil. Arrange on a wire rack over a tray and roast at 200°C for 40-45 minutes, turning halfway, until deep golden and genuinely crispy. GLAZE: whisk the honey, soy sauce and minced garlic in a small pot and simmer about 5 minutes until thick and syrupy. Toss the hot crispy wings in the warm glaze just before serving so the skin stays crisp. Cool enough for small hands. Makes about 24 wings — 2 per child for 12 kids.',time:55,kcal:160},
      {name:'Colourful Pasta Salad Cups',type:'savoury',per:1,unit:'cup',base12:{pasta:'400g rainbow pasta',tomatoes:'150g cherry tomatoes',cucumber:'120g cucumber',corn:'120g corn',mayonnaise:'200g mayonnaise',sugar:'30g sugar',lemon_juice:'30ml lemon juice',tomato_sauce:'30g tomato sauce'},method:'Cook the pasta and cool. Halve the cherry tomatoes, dice the cucumber, drain the corn. DRESSING: mix mayonnaise, sugar, lemon juice and tomato sauce. Toss everything together and spoon into cups.',time:25,kcal:140},
      {name:'Fruit Rainbow Platters',type:'healthy',per:1,unit:'serving',base12:{strawberries:'500g strawberries',oranges:'400g oranges',pineapple:'400g pineapple',grapes:'300g green grapes',blueberries:'300g blueberries'},method:'Arrange fruit in rainbow colour arcs on platters.',time:15,kcal:70},
      {name:'Oat Banana Muffins',type:'healthy',per:2,unit:'mini muffins',base12:{bananas:'3 ripe bananas',oats:'240g oats',flour:'180g cake flour',eggs:'2 eggs',honey:'100g honey',oil:'60ml sunflower oil',baking_powder:'5g baking powder'},method:'Preheat the oven to 180°C and line a mini-muffin tin. Mash the ripe bananas well, then mix in the beaten egg, honey and oil. Add the oats, cake flour, baking powder and a pinch of cinnamon and mix until just combined — do not overmix. Fill the mini cases three-quarters full. Bake 16-18 minutes until golden and a skewer comes out clean. Cool 5 minutes before removing. The riper the banana, the sweeter the muffin. Makes about 24 mini muffins — 2 per child for 12 kids.',time:35,kcal:145},
      {name:'Rainbow Rice Krispie Treats',type:'sweet',per:2,unit:'squares',base12:{butter:'60g butter',marshmallows:'300g marshmallows',krispies:'240g rice krispies'},method:'Melt the butter over low heat, add the marshmallows and stir until completely melted and smooth. Remove from heat and stir in the rice krispies (or crushed biscuits) until evenly coated. Press into a greased, lined tray about 1-2cm thick and cool 30-60 min before cutting into squares or shapes.',time:25,kcal:110},
    ],
    drink:{name:'Fruit Smoothie Cups',base12:{kefir:'1500ml kefir',fruit:'500g mixed berries',apple_juice:'1000ml apple juice'},method:'Blend the berries and banana with kefir (or yogurt drink) and apple juice. Serve cold. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2L apple juice + 1L orange juice + yogurt drink.',perChildMl:400,kcal:130},
    cake:{name:'Rainbow Naked Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',cream_cheese:'300g cream cheese',icing_sugar:'100g icing sugar',strawberries:'120g strawberries',blueberries:'120g blueberries'},method:'Cream butter & sugar, beat in eggs and milk, fold in flour + baking powder. Divide into 6 bowls, colour each (red/orange/yellow/green/blue/purple). Bake thin layers at 180°C for 12-15 min, cool completely. ICING: beat room-temp cream cheese smooth, sift in icing sugar, mix just until combined (do not overbeat). Stack layers with a thin "glue" layer of icing between, leaving sides exposed (naked look). Top generously with fresh fruit.',kcal:360},
    decor:{budget:['Rainbow bunting','Picnic blankets on grass','Fresh wildflowers in jars','Pastel cups and plates'],styled:['Wicker picnic baskets as centrepieces','Flower crown prop table','Rainbow fruit arc as table centrepiece','Daisy chain garlands'],photospot:'Classic picnic blanket on grass with rainbow fruit arc and flowers'},
    zones:['🎂 Rainbow Cake Zone','🌈 Rainbow Snack Picnic','🎨 Flower Crown Craft','📸 Rainbow Picnic Photo Spot'],
    timeline:{two:'Bake cake & make rice krispie treats',one:'Pasta salad & oat muffins the day before',morning:'Fresh fruit platter & veg cups on party day'},
    games:'Musical picnic blankets · Rainbow egg and spoon race · Fruit scavenger hunt'
  },
  { id:'princess', emoji:'👑', name:'Princess Tea Party', palette:'Soft pink · Gold · Lavender · Cream · White', vibe:'Elegant, fancy and magical for little princesses',
    colours:['#e8a0c0','#c0a020','#c8a0e0'],
    foods:{easy:['Mini Cucumber Sandwiches','Mini Jam Tarts','Royal Fruit Wands','Strawberry Fairy Cakes','Cheese Puff Pastries'],medium:['Mini Cucumber Sandwiches','Cheese Puff Pastries','Tiny Quiches','Strawberry Fairy Cakes','Mini Jam Tarts'],fancy:['Mini Cucumber Sandwiches','Cheese Puff Pastries','Tiny Quiches','Strawberry Fairy Cakes','Mini Jam Tarts','Royal Fruit Wands']},
    recipes:[
      {name:'Mini Cucumber Sandwiches',type:'savoury',per:2,unit:'triangles',base12:{bread:'2 loaves white bread',cream_cheese:'300g cream cheese',cucumber:'400g cucumber'},method:'Thinly slice the cucumber and sprinkle with a little salt to draw out the water (otherwise the bread goes soggy); pat dry. Spread cream cheese on the bread, layer the cucumber, cut into small triangles with crusts removed.',time:15,kcal:95},
      {name:'Cheese Puff Pastries',type:'savoury',per:2,unit:'puffs',base12:{puff_pastry:'400g puff pastry',cheese:'300g cheddar',eggs:'1 egg'},method:'Cut pastry into small squares, add grated cheese, fold or twist. Brush with beaten egg wash. Bake at 200°C for 15 min until golden.',time:25,kcal:130},
      {name:'Tiny Quiches',type:'savoury',per:2,unit:'mini quiches',base12:{eggs:'24 eggs',milk:'600ml milk',cheddar:'300g cheddar',ham:'240g ham'},method:'Preheat oven to 180°C and grease a mini muffin pan well. Whisk the eggs and milk, season lightly. Divide diced ham and grated cheddar among the cups, then pour the egg mix in to 3/4 full. Bake 15-20 min until set and golden. Cool 5 min, then run a knife around each to release.',time:33,kcal:110},
      {name:'Strawberry Fairy Cakes',type:'sweet',per:2,unit:'cakes',base12:{butter:'200g butter',sugar:'200g sugar',eggs:'4 eggs',flour:'200g flour',strawberries:'200g strawberries',icing_sugar:'200g icing sugar',pink_colouring:'2ml food colouring'},method:'Cream butter & sugar until pale, add eggs one by one, fold in flour, then gently fold in chopped strawberries. Spoon into mini cases 2/3 full, bake at 180°C for 15 min. Cool, then swirl pink icing (icing sugar beaten with a little water/butter + pink colouring) on top.',time:35,kcal:160},
      {name:'Mini Jam Tarts',type:'sweet',per:2,unit:'tarts',base12:{pastry:'400g shortcrust pastry',jam:'300g strawberry or mixed jam'},method:'Cut pastry into small rounds, press into mini tins, fill with jam. Bake at 190°C for 12 min.',time:27,kcal:125},
      {name:'Royal Fruit Wands',type:'healthy',per:2,unit:'wands',base12:{strawberries:'500g strawberries',grapes:'400g grapes',melon:'300g melon',pineapple:'200g pineapple'},method:'Thread fruit onto skewers to look like magic wands. Add star toppers.',time:10,kcal:60},
    ],
    drink:{name:'Pink Lemonade',base12:{lemonade:'2000ml lemonade',strawberry_juice:'2000ml strawberry juice'},method:'Mix lemonade and strawberry juice, add a little colouring for the perfect pink. Serve with lemon slices and ice. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2L lemonade + 2L strawberry juice (or 3 × 2L bottles).',perChildMl:400,kcal:115},
    cake:{name:'Strawberry Vanilla Tea Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',strawberries:'200g strawberries',icing_sugar:'500g icing sugar',cream_cheese:'300g cream cheese',icing_butter:'150g butter'},method:'Combine flour, baking powder, sugar and a pinch of salt. Separately mix melted butter, whisked eggs and milk. Fold dry into wet, fold in chopped strawberries (do not overmix). Divide between 2 greased pans, bake 180°C for ~25 min, cool. ICING: beat cream cheese + softened butter smooth, sift in icing sugar on low, then add 3-4 tbsp strawberry purée to taste/colour. Cover the cake, add crown topper, edible pearls and flowers.',kcal:375},
    decor:{budget:['Pink & gold balloon cluster','Crown cutouts as table decor','Lace tablecloth','Teacups & saucers for display'],styled:['Princess throne chair for birthday child','Pearl string garlands','Full pink & gold balloon arch','Gold candlesticks with fairy lights'],photospot:'Princess throne with crown, sceptre and "Once Upon a Time" backdrop'},
    zones:['🎂 Royal Cake Zone','☕ Princess Tea Table','🎨 Crown-Making Craft','📸 Princess Throne Photo Spot'],
    timeline:{two:'Bake tea cake & make jam tarts',one:'Sandwiches, quiches & puff pastries the day before',morning:'Royal fruit wands on party day'},
    games:'Princess parade · Tiara toss game · Royal treasure hunt'
  },
  { id:'farmyard', emoji:'🐄', name:'Farmyard Fun Party', palette:'Red · Yellow · Green · Brown · Barn red', vibe:'Wholesome, friendly farmyard fun',
    colours:['#c02020','#d0c020','#4a6e3a'],
    foods:{easy:['Corn Dog Muffins','Veggie Patch Cups','Haystack Fudge','Apple Oat Muffins','Farm Animal Fruit Skewers'],medium:['Corn Dog Muffins','Farmhouse Sliders','Veggie Patch Cups','Haystack Fudge','Apple Oat Muffins'],fancy:['Corn Dog Muffins','Farmhouse Sliders','Veggie Patch Cups','Haystack Fudge','Apple Oat Muffins','Farm Animal Fruit Skewers']},
    recipes:[
      {name:'Corn Dog Muffins',type:'savoury',per:2,unit:'mini muffins',base12:{cornmeal:'300g cornmeal',eggs:'2 eggs',milk:'200ml milk',viennas:'400g viennas',cheese:'100g cheddar',baking_powder:'10g baking powder'},method:'Mix cornmeal (or flour mix), baking powder, beaten eggs and milk into a batter. Cut the viennas into pieces. Pour batter into mini muffin tins, push a sausage piece and a little cheese into each. Bake at 180°C for 18 min.',time:33,kcal:110},
      {name:'Farmhouse Sliders',type:'savoury',per:2,unit:'burgers',base12:{beef_mince:'1200g beef mince',buns:'24 cocktail buns',cheddar:'240g cheddar',lettuce:'1 lettuce',tomatoes:'500g tomatoes',oil:'72ml oil'},method:'Season the mince, mix lightly. Divide into 24 portions (~50g), press into patties slightly wider than the buns. Bake at 180°C for ~10 min, or fry 3-4 min each side, melting cheddar on top in the last minute. Slice buns and serve with lettuce and tomato.',time:35,kcal:185},
      {name:'Veggie Patch Cups',type:'healthy',per:1,unit:'cup',base12:{carrots:'300g carrots',cucumber:'150g cucumber',tomatoes:'150g cherry tomatoes',hummus:'200g hummus',mayonnaise:'100g mayonnaise'},method:'Cut carrots, celery and cucumber into sticks. Mix hummus with mayonnaise for the "soil" dip. Stand veggie "crops" upright in the dip inside cups with cherry tomatoes.',time:10,kcal:85},
      {name:'Haystack Fudge',type:'sweet',per:2,unit:'squares',base12:{butter:'400g butter',cocoa:'35g cocoa',icing_sugar:'800g icing sugar',eggs:'2 eggs',marie_biscuits:'160g marie biscuits',tennis_biscuits:'160g tennis biscuits'},method:'Crush the Marie and Tennis biscuits into small bite-size pieces. Melt the butter in a pot or microwave-safe bowl. In a very large bowl, mix the melted butter with the cocoa and icing sugar until thick (it works out any lumps as you stir). Stir in the lightly beaten eggs and a little vanilla until smooth and glossy. Add the crushed biscuits and stir until thoroughly coated. Spoon into a flat dish lined with baking paper and flatten with a spatula. Refrigerate 2-4 hours until set, then cut into squares. Makes about 24 squares — 2 per child for 12 kids.',time:30,kcal:160},
      {name:'Apple Oat Muffins',type:'healthy',per:2,unit:'mini muffins',base12:{apples:'300g apples',oats:'180g oats',flour:'220g cake flour',eggs:'2 eggs',milk:'120ml milk',oil:'60ml sunflower oil',sugar:'120g brown sugar',baking_powder:'5g baking powder'},method:'Preheat the oven to 180°C and line a mini-muffin tin. Coarsely grate the apples (skin on for extra fibre) and squeeze out the excess moisture. Mix the dry ingredients — cake flour, oats, brown sugar, baking powder and a good pinch of cinnamon. Mix the wet ingredients — beaten egg, milk and oil. Combine the two, then fold in the grated apple until just mixed. Fill the mini cases three-quarters full. Bake 16-18 minutes until golden. Cool before serving. Makes about 24 mini muffins — 2 per child for 12 kids.',time:35,kcal:155},
      {name:'Farm Animal Fruit Skewers',type:'healthy',per:2,unit:'skewers',base12:{strawberries:'500g strawberries',bananas:'400g bananas',grapes:'300g grapes',melon:'200g melon'},method:'Thread fruit and add animal name labels.',time:10,kcal:65},
    ],
    drink:{name:'Fresh Apple Juice',base12:{apple_juice:'4000ml apple juice'},method:'Chill the juice (add a splash of sparkling water for fizz if you like). Serve in farm-themed bottles. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 2-3 × 2L bottles 100% apple juice.',perChildMl:400,kcal:110},
    cake:{name:'Barnyard Cake',base12:{flour:'300g flour',baking_powder:'10g baking powder',sugar:'250g sugar',butter:'200g butter',eggs:'4 eggs',milk:'150ml milk',icing_sugar:'400g icing sugar',icing_butter:'100g butter',green_food_colouring:'2ml food colouring',cocoa:'30g cocoa'},method:'Cream butter & sugar, beat in eggs one at a time, fold in flour + baking powder alternating with milk. Bake a rectangular cake at 180°C for 25-30 min, cool. Beat icing sugar with butter for buttercream; colour most of it green for "grass" and a little brown (with cocoa) for the barn. Spread green over the cake, pipe brown barn details (or build a cookie barn), and add toy farm animals (decor only - remove before serving, watch small children).',kcal:365},
    decor:{budget:['Red gingham tablecloth','Hay bales (or yellow fabric bundles)','Animal cutouts printed','Wooden crate centrepiece'],styled:['Barn sign backdrop','Sunflower bouquets in watering cans','Hay bale seating areas','Farm animal toy display'],photospot:'"Farmyard" setup with hay bale, sunflowers and stuffed animals'},
    zones:['🎂 Barnyard Cake Zone','🌽 Farm Snack Stand','🐔 Animal Activity Zone','📸 Farmyard Photo Spot'],
    timeline:{two:'Bake barn cake & make haystack cookies',one:'Muffins & sliders the day before',morning:'Veggie cups & fruit skewers on party day'},
    games:'Duck duck goose · Farm animal sounds relay · Wheelbarrow races · Egg and spoon (plastic eggs)'
  },
  { id:'braai', emoji:'🔥', name:'Braai Party', palette:'Red · Orange · Green · Brown · Gold', vibe:'Fun, smoky, family-style South African braai — relaxed and delicious',
    colours:['#c02020','#e06020','#2a5e28'],
    foods:{easy:['Mini Boerewors Rolls','Mielie Fritters','Braai Veggie Skewers','Koeksister Bites','Choco Braai Pops'],medium:['Mini Boerewors Rolls','Braai Chicken Wings','Mielie Fritters','Koeksister Bites','Choco Braai Pops'],fancy:['Mini Boerewors Rolls','Braai Chicken Wings','Mielie Fritters','Koeksister Bites','Choco Braai Pops','Braai Veggie Skewers']},
    recipes:[
      {name:'Mini Boerewors Rolls',type:'savoury',per:2,unit:'rolls',base12:{boerewors:'800g boerewors',hot_dog_rolls:'24 hot dog rolls',tomato_sauce:'150g tomato sauce'},method:'(Outside SA, use any good sausage/bangers.) Braai or bake the boerewors at 200°C for 15 min. Cut into small pieces and serve in rolls (24 small rolls, or 12 normal rolls cut in half) with tomato sauce or chakalaka.',time:25,kcal:175},
      {name:'Braai Chicken Wings',type:'savoury',per:2,unit:'wings',base12:{chicken_wings:'1500g chicken wings',bbq_sauce:'250ml bbq sauce',honey:'60ml honey'},method:'Split each wing into two pieces and pat them dry. Mix the BBQ sauce with the honey and toss the wings to coat, then marinate at least 30 minutes (or overnight in the fridge for more flavour). Braai over medium coals — not too hot or the sauce burns — turning often, for about 25 minutes until cooked through and sticky. No braai? Bake at 200°C for 35 minutes, turning halfway and brushing with extra sauce near the end. Make sure they are cooked right through before serving. Makes about 24 wings — 2 per child for 12 kids.',time:45,kcal:160},
      {name:'Mielie Fritters',type:'savoury',per:2,unit:'fritters',base12:{corn:'400g corn',flour:'200g flour',baking_powder:'8g baking powder',eggs:'2 eggs',milk:'150ml milk'},method:'Mix the corn (tinned or fresh), flour, baking powder, beaten eggs and milk into a batter. Fry spoonfuls in a pan until golden on both sides (or bake).',time:30,kcal:95},
      {name:'Choco Braai Pops',type:'sweet',per:2,unit:'pops',base12:{chocolate:'300g milk chocolate',marshmallows:'24 marshmallows',biscuits:'100g biscuits'},method:'Melt the chocolate gently in a bain-marie (or microwave in short bursts), not over direct heat. Dip marshmallows on sticks into the chocolate, roll in crushed tennis biscuits, then chill to set.',time:30,kcal:120},
      {name:'Koeksister Bites',type:'sweet',per:2,unit:'bites',base12:{flour:'250g cake flour',baking_powder:'10g baking powder',butter:'30g butter',eggs:'1 egg',milk:'100ml milk',sugar:'500g sugar',sunflower_oil:'500ml sunflower oil'},method:'SYRUP FIRST: combine the sugar with 250ml water and a squeeze of lemon juice in a pot, heat until dissolved then boil 5 minutes. Cool it right down in the fridge until ice cold — this cold-syrup, hot-koeksister contrast is what makes them sticky. DOUGH: sift the cake flour, baking powder and a pinch of salt, rub in the butter to fine crumbs, then mix the egg and milk in to form a soft dough. Knead gently 5 minutes, cover and rest 30 minutes. Roll out 1cm thick, cut into small strips and twist into little koeksister shapes. FRY in oil at 170°C until golden brown both sides. As each one comes out of the oil, drop it straight into the ice-cold syrup for 30-60 seconds, then lift out onto a rack to drain. Makes plenty of little bites — about 2 per child for 12 kids.',time:60,kcal:130},
      {name:'Braai Veggie Skewers',type:'healthy',per:2,unit:'skewers',base12:{mushrooms:'400g button mushrooms',tomatoes:'400g baby tomatoes',peppers:'300g green peppers',pineapple:'200g pineapple chunks'},method:'Thread veggies and pineapple on skewers. Brush with oil and braai lightly.',time:20,kcal:55},
    ],
    drink:{name:'Rooibos Iced Tea Punch',base12:{rooibos:'2000ml rooibos tea',apple_juice:'500ml apple juice',lemonade:'500ml lemonade'},method:'Brew strong rooibos, cool, mix with the juices. Serve over ice with lemon slices. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 1.5L rooibos iced tea + 500ml apple + 500ml lemonade (top up to ~4.8L).',perChildMl:400,kcal:95},
    cake:{name:'Braai Fire Cake',base12:{flour:'300g flour',cocoa:'50g cocoa',baking_powder:'10g baking powder',sugar:'200g sugar',butter:'150g butter',eggs:'3 eggs',milk:'200ml milk',icing_sugar:'500g icing sugar',icing_butter:'250g butter',red_food_colouring:'2ml food colouring',biscuits:'100g biscuits'},method:'Cream butter & sugar, beat in eggs one at a time, sift in flour + cocoa + baking powder, alternate with milk. Bake at 180°C for 25-30 min, cool. Beat icing sugar with butter for buttercream, divide and dye yellow / orange / red. Swirl on like flickering flames. Scatter crushed chocolate biscuits as "coals", and place a clean mini grid on top for the braai look.',kcal:355},
    decor:{budget:['Red & orange balloon cluster','Checkered tablecloth','Mini braai sets as decor','Wooden crates'],styled:['Full "braai station" backdrop with fairy lights','Real wood logs as decor','Fire-coloured balloon garland (red/orange/yellow)','Kraft paper with charcoal menu writing'],photospot:'"Braai Station" with toy grid, wood and fire-coloured balloons'},
    zones:['🎂 Braai Fire Cake Zone','🍖 Braai Snack Station','🎮 SA Games Zone','📸 Braai Station Photo Spot'],
    timeline:{two:'Bake braai fire cake & make koeksister bites',one:'Chicken wings & choco pops the day before',morning:'Fresh boerewors rolls, fritters & veggie skewers on party day'},
    games:'Braai relay (pass the tongs) · Sack race · Water balloon fire fight'
  },
  { id:'big5', emoji:'🦒', name:'Big 5 Bushveld Safari', palette:'Khaki · Olive green · Terracotta · Safari beige · Warm gold', vibe:'Authentic South African bushveld adventure — wild and educational',
    colours:['#8a7040','#4a6e3a','#c05030'],
    foods:{easy:['Lion Paw Biltong Rolls','Bushveld Fruit Salad Cups','Malva Pudding Bites','Safari Chocolate Mud Cups','Big 5 Chicken Skewers'],medium:['Big 5 Chicken Skewers','Bushveld Vetkoek Bites','Lion Paw Biltong Rolls','Malva Pudding Bites','Bushveld Fruit Salad Cups'],fancy:['Big 5 Chicken Skewers','Bushveld Vetkoek Bites','Lion Paw Biltong Rolls','Malva Pudding Bites','Bushveld Fruit Salad Cups','Safari Chocolate Mud Cups']},
    recipes:[
      {name:'Big 5 Chicken Skewers',type:'savoury',per:2,unit:'skewers',base12:{chicken:'800g chicken',ketchup:'100ml tomato ketchup',worcester_sauce:'50ml worcester sauce',sugar:'30g sugar',vinegar:'30ml vinegar',peppers:'300g mixed peppers & onions'},method:'MARINADE: whisk ketchup, Worcester sauce, sugar and vinegar together. Cut chicken and peppers into 2cm cubes. Thread 4 chicken pieces per skewer, alternating with peppers and onions. Coat in marinade and braai or oven-bake at 200°C for 15 min.',time:30,kcal:135},
      {name:'Bushveld Vetkoek Bites',type:'savoury',per:2,unit:'bites',base12:{flour:'600g cake flour',yeast:'10g instant yeast',sugar:'5g sugar',salt:'5g salt',water:'420ml lukewarm water',beef_mince:'480g beef mince',curry_powder:'6g mild curry powder',onion:'180g onion',oil:'500ml oil'},method:'DOUGH: mix flour, yeast, sugar and salt; add lukewarm water gradually into a soft elastic dough. Cover and rise 45-60 min until doubled. Knock back, divide into 24 golf-ball pieces, rest 10 min. FILLING: saute onion until soft, brown the mince, stir in curry powder, add a splash of water and simmer 10-15 min; cool slightly. Heat oil to medium and fry dough balls in batches 3-4 min per side until golden and puffed; drain. Cut a slit in each and spoon in the curry mince.',time:90,kcal:140},
      {name:'Lion Paw Biltong Rolls',type:'savoury',per:2,unit:'rolls',base12:{bread:'2 loaves sliced bread',cream_cheese:'300g cream cheese',biltong:'200g biltong'},method:'Use fresh soft bread. Flatten each slice thin with a rolling pin so it does not crack. Spread a thin layer of cream cheese, leaving a 5mm clean border at one edge to seal. Scatter finely sliced biltong over the cream cheese. Roll up tightly from the opposite edge, wrap in cling film and chill 30 min. Slice each roll into 3-4 mini "paws" with a sharp serrated knife.',time:40,kcal:120},
      {name:'Malva Pudding Bites',type:'sweet',per:2,unit:'bites',base12:{flour:'250g cake flour',sugar:'250g sugar',eggs:'2 eggs',apricot_jam:'45g apricot jam',butter:'75g butter',milk:'200ml milk',vinegar:'5ml brown vinegar',bicarb:'5g bicarbonate of soda',cream:'250ml fresh cream',vanilla:'5ml vanilla essence'},method:'Beat the eggs and sugar until pale. Mix in the apricot jam and 15g melted butter. Stir the vinegar and bicarbonate of soda into 125ml of the milk, then fold into the batter with the flour. Spoon into greased mini-muffin pans and bake 180°C for 15 min until risen and golden. Meanwhile warm the cream, the remaining 60g butter, a spoon of sugar, the last 75ml milk and the vanilla into a sauce. Prick the warm bites and spoon the sauce over so they drink it up. Cool a little and serve.',time:30,kcal:150},
      {name:'Bushveld Fruit Salad Cups',type:'healthy',per:1,unit:'cup',base12:{mango:'500g mango',pawpaw:'400g pawpaw',banana:'300g banana',granadilla:'200g granadilla pulp'},method:'Chop fresh fruit and layer in cups. Top with granadilla pulp.',time:10,kcal:75},
      {name:'Safari Chocolate Mud Cups',type:'sweet',per:1,unit:'cup',base12:{instant_chocolate_pudding:'180g instant chocolate pudding',milk:'1000ml milk',chocolate_biscuits:'200g chocolate biscuits',jelly_babies:'125g jelly babies'},method:'Same as the Chocolate Dirt Cups: make the pudding by whisking 450-500ml cold milk per 90g pudding powder for 1-2 min until thick, refrigerate 5 min. Crush the chocolate biscuits. Layer pudding and crushed biscuits in cups to look like mud, top with animal jelly sweets.',time:15,kcal:240},
    ],
    drink:{name:'Jungle Punch',base12:{orange_juice:'1500ml orange juice',guava_juice:'1000ml guava juice',lemonade:'500ml lemonade'},method:'Mix the juices and serve chilled with fruit slices. Allow 2 glasses (200ml) per child.',storebought:'Allow 2 glasses (200ml) per child = 400ml each. 12 kids = 4800ml ≈ 1.5L orange + 1L guava + 500ml lemonade (top up to ~4.8L).',perChildMl:400,kcal:120},
    cake:{name:'Big 5 Safari Drip Cake',base12:{flour:'300g flour',cocoa:'50g cocoa',baking_powder:'10g baking powder',sugar:'200g sugar',butter:'150g butter',eggs:'3 eggs',milk:'200ml milk',icing_sugar:'500g icing sugar',icing_butter:'250g butter',chocolate:'50g chocolate',cream:'50g cream'},method:'Cream butter & sugar, beat in eggs one by one, sift in flour + cocoa + baking powder alternating with milk. Bake two 18-20cm layers at 180°C for 25-30 min, cool. Whip icing sugar with butter for buttercream, tint khaki (green + brown). Crumb-coat the cake. GANACHE: heat 50g cream, pour over 50g chocolate, stir smooth, cool to honey consistency, then drip around the top edge down the khaki sides. Finish with Big 5 toy animals (decor) and mint/fondant leaves.',kcal:380},
    decor:{budget:['Khaki & green balloon cluster','Animal print accents (minimal)','Wooden crates','Leaf branches'],styled:['Jeep setup with blankets and binoculars','Full bushveld backdrop','Safari hat props for photos','Big 5 animal figurines on dessert table'],photospot:'"Jeep" setup with blankets, binoculars and plush Big 5 animals'},
    zones:['🎂 Watering Hole Cake Zone','🍖 Bushveld Snack Camp','🐘 Big 5 Hunt Activity','📸 Safari Jeep Photo Spot'],
    timeline:{two:'Bake safari cake & make biltong rolls',one:'Chicken skewers & malva pudding bites the day before',morning:'Fruit cups & vetkoek on party day'},
    games:'Big 5 animal scavenger hunt · Lion vs elephant tug-of-war · Bushveld obstacle course'
  },
];

const MASTER_SNACKS = [
  {id:1,name:'Mini Sliders',type:'savoury',base12:{mince:'800g beef or chicken mince',buns:'24 mini buns',cheese:'200g cheese slices',toppings:'lettuce/tomato'},perPerson:'67g mince + 2 buns + 17g cheese',kcal:180},
  {id:2,name:'Rainbow Fruit Skewers',type:'healthy',base12:{strawberries:'500g strawberries',grapes:'400g grapes',melon:'400g melon',pineapple:'300g pineapple or kiwi'},perPerson:'42g strawberries + 33g grapes + 33g melon',kcal:60},
  {id:3,name:'Veggie Cups with Dip',type:'healthy',base12:{veg:'500g carrot & cucumber sticks',tomatoes:'300g cherry tomatoes',dip:'300ml yogurt or hummus dip'},perPerson:'42g carrots/cucumber + 25g tomatoes + 25ml dip',kcal:85},
  {id:4,name:'Cheese & Cracker Stars',type:'savoury',base12:{cheese:'400g cheese slices',crackers:'300g crackers'},perPerson:'33g cheese + 25g crackers',kcal:90},
  {id:5,name:'Themed Popcorn',type:'sweet',base12:{kernels:'100g popcorn kernels',chocolate:'150g white/milk chocolate',sprinkles:'50g coloured sprinkles'},perPerson:'8g kernels + 12.5g chocolate + 4g sprinkles',kcal:150},
  {id:6,name:'Chocolate Dirt Cups',type:'sweet',base12:{pudding:'500g chocolate pudding',oreos:'200g crushed Oreos',gummies:'gummy sweets'},perPerson:'42g pudding + 17g Oreos + 1 gummy',kcal:250},
  {id:7,name:'Sausage Rolls',type:'savoury',base12:{pastry:'400g puff pastry',sausage:'600g sausage meat or boerewors filling'},perPerson:'33g pastry + 50g filling',kcal:140},
  {id:8,name:'Yogurt Rainbow Parfaits',type:'healthy',base12:{yogurt:'1500ml vanilla yogurt',purees:'400g mixed berry & mango purees'},perPerson:'125ml yogurt + 33g puree',kcal:130},
  {id:9,name:'Brownie Bites',type:'sweet',base12:{butter:'200g butter',sugar:'200g sugar',cocoa:'100g cocoa',eggs:'3 eggs',flour:'150g flour'},perPerson:'17g butter + 17g sugar + 12.5g flour',kcal:140},
  {id:10,name:'Biltong & Cheese Roll-Ups',type:'savoury',base12:{biltong:'300g sliced biltong',cheese:'300g cheese slices'},perPerson:'25g biltong + 25g cheese (SA favourite!)',kcal:110},
  {id:11,name:'Jelly Fruit Cups',type:'healthy',base12:{jelly:'3 packets jelly',water:'500ml water',fruit:'400g mixed fresh fruit'},perPerson:'1/4 packet jelly + 42ml water + 33g fruit',kcal:95},
  {id:12,name:'Rice Krispie Treats',type:'sweet',base12:{marshmallows:'200g marshmallows',krispies:'150g rice krispies',butter:'50g butter'},perPerson:'17g marshmallows + 12.5g krispies + 4g butter',kcal:110},
];

function kidsScaleVal(val, k){
  if(!val) return val;
  const m = val.match(/^([\d.]+)\s*(g|ml|kg|L|x)?(.*)$/i);
  if(!m) return val;
  const num=parseFloat(m[1]);const unit=m[2]||'';const rest=m[3]||'';
  const scaled=Math.round(num*k/12*10)/10;
  return `${scaled}${unit}${rest}`;
}

