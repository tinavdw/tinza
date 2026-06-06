function mealSectionHTML(sectionKey){
  const configs = {
    breakfast:  {title:"Breakfast",         emoji:"🍳", color:"#d0a020", bg:"#181008", border:"#3a2010", recipes:typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],  sub:"Morning meals · Start your day right"},
    lightlunch: {title:"Light Lunch",       emoji:"🥗", color:"#30a070", bg:"#081810", border:"#1a4025", recipes:typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],sub:"Salads · Wraps · Soups · Quick meals"},
    supper:     {title:"Supper",            emoji:"🍽️", color:"#6080d0", bg:"#080f18", border:"#1a2840", recipes:typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],        sub:"Evening meals · Family dinners"},
    bakes:      {title:"Bakes & Cakes",     emoji:"🧁", color:"#d06080", bg:"#180810", border:"#401020", recipes:typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],          sub:"Cakes · Biscuits · Breads · Desserts"},
  };
  const cfg = configs[sectionKey];
  if(!cfg) return comingSoonHTML("🍽️","Section","Coming soon");

  // Plan view
  if(S.mealPlanView){
    window._sectionPlanForShare = S.mealPlan||[];
    return sectionPlanView('mealPlan', cfg.title+' Plan', cfg.emoji||'🍽️', cfg.color, cfg.bg, cfg.border, S.searchServings||4, "setQuiet({mealPlanView:false})");
  }

  // Recipe detail view
  const activeRecipe = S.mealActiveRecipe;
  if(activeRecipe && activeRecipe._section===sectionKey){
    return recipeDetailFromResult(activeRecipe, "setQuiet({mealActiveRecipe:null})", S.searchServings||4, cfg.color, cfg.bg, cfg.border);
  }

  // List view
  const sort = S.mealSort||'popular';
  let recipes = [...(cfg.recipes||[])];
  if(sort==='az') recipes.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='time') recipes.sort((a,b)=>a.time-b.time);

  const mealHowOpen = S.mealHowOpen || false;

  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${cfg.bg} 0%,#0f0e0c 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,4,0.3) 0%,rgba(8,6,4,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'feedfamily'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${cfg.border};border-radius:20px;color:${cfg.color};font-size:12px;padding:5px 12px;cursor:pointer;">← Family Meals</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">${cfg.emoji} ${cfg.title}</h1>
        <p style="margin:0 0 10px;font-size:11px;color:${cfg.color};font-style:italic;opacity:0.9;">${cfg.sub}</p>
        <div style="display:flex;align-items:center;background:rgba(12,10,8,0.85);border:1px solid ${cfg.border};border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:${cfg.color};margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search ${cfg.title.toLowerCase()} recipes…"
            oninput="set({mealSearch:this.value})"
            value="${S.mealSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#e0d0c0;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.mealSearch?`<button onclick="set({mealSearch:''})" style="background:none;border:none;color:${cfg.border};font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + SORT ══ -->
    <div style="background:${cfg.bg};border-bottom:1px solid ${cfg.border};padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;">
        <div style="flex:1;">
          <button onclick="set({mealHowOpen:!S.mealHowOpen})"
            style="background:none;border:none;color:${cfg.color};font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${mealHowOpen?'▲':'▼'} How it works
          </button>
          ${mealHowOpen?`
            <div onclick="set({mealHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#b0a080;line-height:1.6;">
              <strong style="color:${cfg.color};">1. Browse recipes</strong> — sort by popular, A–Z or quickest.<br>
              <strong style="color:${cfg.color};">2. Tap Recipe →</strong> — full ingredients, method and scaling.<br>
              <strong style="color:${cfg.color};">3. Add to My Plan</strong> — build your weekly meal plan.<br>
              <span style="color:#4a4a40;font-size:11px;">All quantities scale automatically per person.</span>
            </div>
          `:''}
        </div>
        <!-- Sort pills -->
        <div style="display:flex;gap:5px;flex-shrink:0;">
          ${[{id:'popular',l:'⭐'},{id:'az',l:'A–Z'},{id:'time',l:'⏱️'}].map(s=>`<button onclick="setQuiet({mealSort:'${s.id}'})" style="padding:5px 10px;border-radius:20px;border:1px solid ${sort===s.id?cfg.color:cfg.border};background:${sort===s.id?'rgba(255,255,255,0.1)':'transparent'};color:${sort===s.id?cfg.color:'#4a4a40'};font-size:11px;cursor:pointer;">${s.l}</button>`).join('')}
        </div>
      </div>
    </div>

    <div style="padding:12px 16px;max-width:600px;margin:0 auto;">
      <div style="font-size:11px;color:#4a4a40;margin-bottom:10px;">${recipes.length} recipes</div>
      ${recipes.map((r,i)=>{
        const inPlan = isPlanItem('mealPlan', r.id);
        return `<div style="background:${inPlan?cfg.bg:'#161210'};border:1px solid ${inPlan?cfg.color:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
          <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="(function(){const pi={id:'${r.id}',name:'${r.name.replace(/'/g,'')}',emoji:'${r.emoji||'🍽️'}',time:${r.time||0},ingredients:r.ingredients||[],serves:1};togglePlanItem('mealPlan',pi);})()" >
            <div style="width:22px;height:22px;border-radius:6px;background:${inPlan?cfg.color:'transparent'};border:2px solid ${inPlan?cfg.color:'#3a2010'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${inPlan?'✓':''}</div>
            <span style="font-size:20px;">${r.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:14px;color:${inPlan?'#f5e8cc':'#c8b898'};font-weight:${inPlan?'bold':'normal'};">${r.name}</div>
              <div style="font-size:10px;color:${inPlan?cfg.color:'#5a5040'};margin-top:2px;">${r.cuisine} · ⏱️ ${r.time} min</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
              <button onclick="event.stopPropagation();openMealRecipe('${r.id}')" style="background:${cfg.color};border:none;border-radius:6px;padding:4px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
            </div>
          </div>
        </div>`;
      }).join('')}
      ${sectionPlanBtn('mealPlan', cfg.title, cfg.emoji||'🍽️', cfg.color, cfg.bg, S.searchServings||4, "setQuiet({mealPlanView:true})")}
      <div style="margin-top:8px;padding:14px;background:${cfg.bg};border:1px solid ${cfg.border};border-radius:10px;text-align:center;">
        <div style="font-size:12px;color:#4a4a40;margin-bottom:8px;">Can't find what you're looking for?</div>
        <button onclick="set({screen:'search'})" style="padding:10px 20px;background:#0a1020;border:2px solid #4080d0;border-radius:10px;color:#4080d0;font-size:13px;cursor:pointer;">🔍 Search All Recipes</button>
      </div>
    </div>
  </div>`;
}

// ── TINY & FURRY — front door to Tiny Tummies + Furry Friends (braai v33 template) ──
function tinyFurryHTML(){
  const ONES = [
    {s:'babyapp',  e:'🍼', t:'Tiny Tummies',  sub:'Age-appropriate baby & toddler recipes',  b:'#e07090', bg:'#1a1018'},
    {s:'furryapp', e:'🐾', t:'Furry Friends',  sub:'Dogs & Cats · Meals · Treats & Biscuits', b:'#9060d0', bg:'#120f1a'},
  ];
  const HEAD = '#c878c8', HBG = '#160f18', HBORDER = '#3a2a40';
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${HBG} 0%,#0f0e0c 100%);">
      <img src="Images/Image%20header/tinyfurry.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,10,0.3) 0%,rgba(8,6,10,0.78) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍼🐾 Tiny & Furry</h1>
        <p style="margin:0;font-size:11px;color:${HEAD};font-style:italic;opacity:0.9;">The littlest and furriest mouths — fed with the same love</p>
      </div>
    </div>

    <!-- ══ SECTION BOXES (braai v33 list rows) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin-bottom:10px;">Who are we feeding?</div>
      ${ONES.map(o=>`
        <button onclick="set({screen:'${o.s}'})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${o.t}</div>
            <div style="font-size:11px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join('')}
    </div>
  </div>`;
}


function breakfastHTML(){ return mealSectionHTML('breakfast'); }
function lightlunchHTML(){ return mealSectionHTML('lightlunch'); }
function supperHTML(){ return mealSectionHTML('supper'); }
function bakesHTML(){ return mealSectionHTML('bakes'); }

// ── FEEDING MY FAMILY — front door to the 4 everyday-cooking sections (braai v33 template) ──
function feedingFamilyHTML(){
  const MEALS = [
    {s:'breakfast',  e:'🍳', t:'Breakfast',             sub:'Eggs · Oats · Pancakes · Smoothies',    b:'#d0a020', bg:'#1a1500'},
    {s:'lightlunch', e:'🥗', t:'Light Lunch',           sub:'Salads · Wraps · Soups · Quick meals',  b:'#40a060', bg:'#0a1a10'},
    {s:'supper',     e:'🍲', t:'Supper',                sub:'Family meals · Pasta · Curries · Stews', b:'#8040c0', bg:'#100818'},
    {s:'bakes',      e:'🍰', t:'Bakes, Cakes & Breads', sub:'Cakes · Biscuits · Breads · Rusks',     b:'#d06080', bg:'#1a0810'},
  ];
  const HEAD = '#c08040', HBG = '#1a1208', HBORDER = '#4a3520';
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,${HBG} 0%,#0f0e0c 100%);">
      <img src="Images/Image%20header/feedfamily.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,4,0.3) 0%,rgba(8,6,4,0.78) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid ${HBORDER};border-radius:20px;color:${HEAD};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 16px;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍽️ Feeding My Family</h1>
        <p style="margin:0;font-size:11px;color:${HEAD};font-style:italic;opacity:0.9;">Everyday cooking — morning to night, and something sweet</p>
      </div>
    </div>

    <!-- ══ MEAL-TYPE BOXES (braai v33 list rows) ══ -->
    <div style="padding:16px;max-width:600px;margin:0 auto;">
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin-bottom:10px;">Choose a meal</div>
      ${MEALS.map(o=>`
        <button onclick="set({screen:'${o.s}'})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${o.t}</div>
            <div style="font-size:11px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join('')}
    </div>
  </div>`;
}


// ── 4 INGREDIENTS & ANCHOR INGREDIENT ────────────────────────────

async function findFourIngredients(){
  const ing = [
    S.ing1||'', S.ing2||'', S.ing3||'', S.ing4||''
  ].map(i=>i.trim()).filter(Boolean);

  if(ing.length < 2){
    setQuiet({_fourError:'Please enter at least 2 ingredients', _fourResults:null, _fourLoading:false});
    return;
  }

  setQuiet({_fourLoading:true, _fourResults:null, _fourError:null});

  // First search the app database
  const allRecipes = [
    ...(BREAKFAST_RECIPES||[]), ...(LIGHTLUNCH_RECIPES||[]),
    ...(SUPPER_RECIPES||[]), ...(BAKES_RECIPES||[]),
    ...(POPULAR_RECIPES.sa||[]), ...(POPULAR_RECIPES.international||[]),
    ...(WK_RECIPES||[]).filter(r=>r.ingredients),
  ];

  const ingLower = ing.map(i=>i.toLowerCase());
  const dbMatches = [];
  allRecipes.forEach(r=>{
    const recipeText = JSON.stringify(r).toLowerCase();
    const matched = ingLower.filter(i=>recipeText.includes(i));
    if(matched.length >= 2){
      dbMatches.push({...r, _matchCount:matched.length, _matched:matched, _source:'db'});
    }
  });
  dbMatches.sort((a,b)=>b._matchCount-a._matchCount);

  // Call Tinza Chef for generated recipes
  try {
    const prompt = `You are Tinza Chef, a South African recipe assistant.
The user has these ingredients: ${ing.join(', ')}

Generate 4 different recipe ideas that use most or all of these ingredients.
For each recipe, note which of the user's ingredients it uses.

Return ONLY a JSON array (no markdown, no backticks):
[
  {
    "name": "Recipe Name",
    "emoji": "single emoji",
    "time": 30,
    "cuisine": "cuisine type",
    "uses": ["ingredient1", "ingredient2"],
    "missing": ["other ingredient needed"],
    "serves": 4,
    "ingredients": [
      {"n": "ingredient name", "pp": 100, "u": "g", "userHas": true},
      {"n": "another ingredient", "pp": 15, "u": "ml", "userHas": false}
    ],
    "method": ["Step 1", "Step 2", "Step 3"],
    "tip": "One useful tip"
  }
]

Rules:
- All amounts in grams (g) or millilitres (ml) only
- pp = amount per 1 serving
- userHas = true if this ingredient was provided by the user
- Keep it practical and South African-friendly
- Generate exactly 4 recipes`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:2000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const chefRecipes = JSON.parse(clean);
    chefRecipes.forEach(r=>{ r._source='chef'; r._matchCount=(r.uses||[]).length; });

    // Combine: db matches first, then chef recipes
    const combined = [...dbMatches.slice(0,2), ...chefRecipes];
    setQuiet({_fourResults:combined, _fourLoading:false, _fourError:null});
  } catch(e){
    // Even if chef fails, show db results
    setQuiet({_fourResults:dbMatches.length>0?dbMatches:[], _fourLoading:false,
      _fourError:dbMatches.length===0?'No recipes found. Try different ingredients.':null});
  }
}

async function findAnchorIngredient(){
  const raw = (S.anchorInput||'').trim();
  if(!raw){
    setQuiet({_anchorError:'Please enter an ingredient', _anchorResults:null, _anchorLoading:false});
    return;
  }

  setQuiet({_anchorLoading:true, _anchorResults:null, _anchorError:null});

  // Parse quantity if given e.g. "beef mince 300g" or "whole chicken 1.1kg"
  const qtyMatch = raw.match(/([\d.]+)\s*(g|kg|ml|L|l)/i);
  const ingredient = raw.replace(/([\d.]+)\s*(g|kg|ml|L|l)/gi,'').trim();
  const userQty = qtyMatch ? parseFloat(qtyMatch[1]) * (qtyMatch[2].toLowerCase()==='kg'?1000:qtyMatch[2].toLowerCase()==='l'?1000:1) : null;
  const userUnit = qtyMatch ? (qtyMatch[2].toLowerCase()==='kg'?'g':qtyMatch[2].toLowerCase()==='l'?'ml':qtyMatch[2].toLowerCase()) : null;

  // Search database
  const allRecipes = [
    ...(BREAKFAST_RECIPES||[]), ...(LIGHTLUNCH_RECIPES||[]),
    ...(SUPPER_RECIPES||[]), ...(BAKES_RECIPES||[]),
    ...(POPULAR_RECIPES.sa||[]), ...(POPULAR_RECIPES.international||[]),
  ];
  const ingLower = ingredient.toLowerCase();
  const dbMatches = allRecipes.filter(r=>JSON.stringify(r).toLowerCase().includes(ingLower))
    .map(r=>({...r, _source:'db', _userQty:userQty, _userUnit:userUnit, _ingredient:ingredient}));

  // Call Tinza Chef
  try {
    const qtyNote = userQty ? ` The user has exactly ${userQty}${userUnit} of ${ingredient}.` : '';
    const prompt = `You are Tinza Chef, a South African recipe assistant.
The user has: ${raw}.${qtyNote}

Generate 4 different recipes that use ${ingredient} as the main ingredient.
${userQty ? `Scale each recipe to use approximately ${userQty}${userUnit} of ${ingredient}.` : ''}

Return ONLY a JSON array (no markdown, no backticks):
[
  {
    "name": "Recipe Name",
    "emoji": "single emoji",
    "time": 30,
    "cuisine": "cuisine type",
    "serves": 4,
    "mainIngredientPP": 150,
    "mainIngredientUnit": "g",
    "ingredients": [
      {"n": "${ingredient}", "pp": 150, "u": "g", "userHas": true},
      {"n": "other ingredient", "pp": 20, "u": "g", "userHas": false}
    ],
    "method": ["Step 1", "Step 2", "Step 3"],
    "tip": "One useful tip"
  }
]

Rules: all amounts in g or ml, pp = per serving, userHas true only for ${ingredient}`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:2000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const chefRecipes = JSON.parse(clean);
    chefRecipes.forEach(r=>{ r._source='chef'; r._userQty=userQty; r._userUnit=userUnit; r._ingredient=ingredient; });

    setQuiet({_anchorResults:[...dbMatches.slice(0,2),...chefRecipes], _anchorLoading:false, _anchorError:null});
  } catch(e){
    setQuiet({_anchorResults:dbMatches, _anchorLoading:false,
      _anchorError:dbMatches.length===0?'No recipes found. Try a different ingredient.':null});
  }
}

function recipeResultCard(r, onClickFn, color){
  const matchBadge = r._matchCount ? `<span style="background:#0a1808;border:1px solid #25a050;border-radius:8px;font-size:9px;color:#25a050;padding:2px 6px;margin-right:3px;">✓ ${r._matchCount} ingredient${r._matchCount>1?'s':''} matched</span>` : '';
  const sourceBadge = r._source==='db' ? `<span style="background:#0a1020;border:1px solid #4080d0;border-radius:8px;font-size:9px;color:#4080d0;padding:2px 6px;">In Tinza</span>` : '';
  return `<div onclick="${onClickFn}" style="background:#141210;border:1px solid #2a2820;border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;">
    <span style="font-size:28px;flex-shrink:0;">${r.emoji||'🍽️'}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-size:14px;color:#f5e8cc;margin-bottom:3px;">${r.name}</div>
      <div style="font-size:11px;color:${color||'#4080d0'};">${r.cuisine||''} · ⏱️ ${r.time||'?'} min</div>
      <div style="margin-top:4px;">${matchBadge}${sourceBadge}</div>
    </div>
    <span style="color:${color||'#4080d0'};font-size:14px;flex-shrink:0;">→</span>
  </div>`;
}

function recipeDetailFromResult(r, backAction, servings, color, bg, border){
  const sv = S._budgetActiveRecipe ? (S.budgetPeople||4)
           : S.moodActiveRecipe    ? (S.moodServings||1)
           : (S.searchServings||4);

  function fmtAmt(pp, u){
    if(!pp) return '';
    const raw = pp * sv;
    if(u==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((u==='g'||u==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(u==='g'?'kg':'L');
    return Math.round(raw*10)/10+(u||'');
  }

  // Pre-compute save state
  const _rid = r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase();
  const _saved = (S.savedRecipes||[]).some(x=>x.id===_rid);
  const _isPro = tierAllows('pro');
  const _rname = (r.name||'').replace(/'/g,'').replace(/"/g,'');
  const _remoji = r.emoji||'🍽️';

  // WhatsApp text built outside template literal
  const _waLines = (r.ingredients||[]).filter(i=>i.pp).map(i=>{
    const raw=i.pp*sv, u=i.u||'';
    const d=(raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L'):(Math.round(raw*10)/10)+u;
    return '• '+i.n+': '+d;
  }).join('\n');
  const _waText = encodeURIComponent(
    _remoji+' *'+_rname+'*\nFor '+sv+' people · '+(r.time||'?')+' min\n\nIngredients:\n'+_waLines+'\n\nFrom Tinza tinza.netlify.app'
  );

  // Cost estimate (if ingredients have costPP or we can estimate)
  const _costEstimate = (()=>{
    if(!_isPro) return `<div style="background:#1a1008;border:1px dashed #5a3010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">
      <div style="font-size:22px;color:#2a1808;letter-spacing:6px;margin-bottom:6px;">R • • • •</div>
      <div style="font-size:12px;color:#6a3020;">💰 Cost estimate — <strong style="color:${color};">Tinza Pro R99/month</strong></div>
    </div>`;
    if(r.costPP){
      const total = r.costPP * sv;
      return `<div style="background:#0f1a08;border:1px solid #5a8010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:10px;">💰 Cost Estimate</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#6a8030;">Total for ${sv} people</div>
          <div style="font-size:24px;font-weight:bold;color:#c8e840;">R${total}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #2a3010;">
          <div style="font-size:12px;color:#4a6020;">Per person</div>
          <div style="font-size:16px;font-weight:bold;color:#a0c030;">R${r.costPP}</div>
        </div>
        <div style="margin-top:8px;font-size:10px;color:#4a5820;">Checkers/retail prices · May 2026 · Always buy 10% extra.</div>
      </div>`;
    }
    return '';
  })();

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${r.emoji||'🍽️'} ${r.name}</h1>
      <div style="font-size:11px;color:${color};font-style:italic;">Full recipe and method</div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- How much to make block -->
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 How Much To Make</div>
        <div style="font-size:11px;color:#6a8030;margin-bottom:10px;">${sv} ${sv===1?'person':'people'}</div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.max(1,(S[_k]||4)-1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">−</button>
          <div style="flex:1;text-align:center;">
            <div style="font-size:32px;font-weight:bold;color:#c8e840;">${sv}</div>
            <div style="font-size:10px;color:#5a7020;">people · all quantities scale</div>
          </div>
          <button onclick="const _k=S._budgetActiveRecipe?'budgetPeople':S.moodActiveRecipe?'moodServings':'searchServings';setQuiet({[_k]:Math.min(500,(S[_k]||4)+1)})" style="width:36px;height:36px;border-radius:50%;background:#0f1a04;border:2px solid #6a8020;color:#8ab030;font-size:20px;cursor:pointer;">+</button>
        </div>
        <div style="margin-top:8px;font-size:10px;color:#4a6018;">💡 Adjust the number and all ingredients update instantly.</div>
      </div>

      <!-- Ingredients — bullet style like braai, no tick boxes -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#5a5040;font-style:italic;">scaled for ${sv} ${sv===1?'person':'people'}</div>
        </div>
        ${(r.ingredients||[]).map(i=>{
          if(!i.pp) return `<div style="padding:5px 0;border-bottom:1px solid #1a1810;font-size:12px;color:#4a4040;font-style:italic;">• ${i.n} — to taste</div>`;
          const raw=i.pp*sv, u=i.u||'';
          const ppStr=i.pp+(u==='egg'?' egg':u)+' pp';
          const totalStr=u==='egg'?Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'')
            :(raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L')
            :Math.round(raw*10)/10+u;
          return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #1a1810;">
            <span style="color:${color};flex-shrink:0;">•</span>
            <span style="font-size:14px;color:#e0d4b8;flex:1;">${i.n} — <span style="color:#5a5040;font-size:12px;">${ppStr}</span> · <strong style="color:#f5c842;">${totalStr} total</strong></span>
          </div>`;
        }).join('')}
        <div style="margin-top:8px;padding-top:6px;border-top:1px solid #1a1810;font-size:10px;color:#4a4040;font-style:italic;">📏 Raw/dry weights · Rice+pap grow 3x when cooked · Meat shrinks ~25%</div>
      </div>

      <!-- Method -->
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(r.method||[]).map((step,si)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div style="width:24px;height:24px;border-radius:50%;background:#0a0808;border:1px solid ${color};color:${color};font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${si+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join('')}
      </div>

      <!-- Tip -->
      ${r.tip?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:6px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;margin:0;">${r.tip}</p>
      </div>`:''}

      <!-- Nutrition -->
      ${r.nutrition?`<div style="background:#0a1008;border:1px solid #1a3020;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#40a060;text-transform:uppercase;margin-bottom:8px;">📊 Nutrition — per serving</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;text-align:center;">
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#f5c842;">${r.nutrition.kcal}</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">kcal</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#60c090;">${r.nutrition.protein_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">protein</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#80a0e0;">${r.nutrition.carbs_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">carbs</div></div>
          <div style="background:#061008;border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:#c08060;">${r.nutrition.fat_g}g</div><div style="font-size:9px;color:#40a060;text-transform:uppercase;">fat</div></div>
        </div>
      </div>`:''}

      <!-- Storage -->
      ${r.storage?`<div style="background:#0a0808;border:1px solid ${border};border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:11px;color:#607060;">📦 ${r.storage}</div>`:''}

      <!-- Cost estimate -->
      ${_costEstimate}

      <!-- Save button (Pro) -->
      ${_isPro?`<button onclick="toggleSavedRecipe('${_rid}','${_rname}','${_remoji}')" style="width:100%;padding:12px;border-radius:10px;background:${_saved?'#0a2008':'#080f08'};border:2px solid ${_saved?'#40c060':'#204020'};color:${_saved?'#40c060':'#406040'};font-size:13px;cursor:pointer;margin-bottom:10px;">${_saved?'✓ Saved to My Recipes — tap to remove':'🔖 Save to My Recipes'}</button>`
      :`<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#304030;font-size:12px;margin-bottom:10px;">👑 Save Recipes — Pro feature</div>`}

      <!-- WhatsApp -->
      <button onclick="window.open('https://wa.me/?text=${_waText}','_blank')" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Recipe via WhatsApp</button>

      <!-- Back button — orange like braai -->
      <button onclick="${backAction}" style="width:100%;padding:14px;border-radius:10px;cursor:pointer;background:${color};border:none;color:#fff;font-size:14px;font-weight:bold;margin-bottom:20px;">← Back</button>
    </div>
  </div>`;
}


// ── UNIVERSAL SECTION PLAN SYSTEM ────────────────────────────────
// planKey = 'wkPlan' | 'mealPlan' | 'moodPlan' | 'budgetPlan'
// item = {id, name, emoji, ingredients:[], serves:1}

function togglePlanItem(planKey, item){
  const plan = S[planKey]||[];
  const exists = plan.some(x=>x.id===item.id);
  if(exists){
    setQuiet({[planKey]: plan.filter(x=>x.id!==item.id)});
  } else {
    setQuiet({[planKey]: [...plan, item]});
  }
}

function isPlanItem(planKey, id){
  return (S[planKey]||[]).some(x=>x.id===id);
}

function buildCombinedShoppingList(plan, people){
  // Combine and deduplicate all ingredients across all plan recipes
  const totals = {};
  plan.forEach(r=>{
    const sv = people||1;
    (r.ingredients||[]).forEach(ing=>{
      if(!ing.pp || !ing.n) return;
      const key = ing.n.toLowerCase().trim();
      const amount = ing.pp * sv;
      if(!totals[key]){
        totals[key] = {n:ing.n, total:0, u:ing.u||''};
      }
      totals[key].total += amount;
    });
  });
  return Object.values(totals).sort((a,b)=>a.n.localeCompare(b.n));
}

function formatAmount(total, u){
  if(!u) return Math.round(total*10)/10+'';
  if((u==='g'||u==='ml') && total>=1000){
    return (Math.round(total/100)/10) + (u==='g'?'kg':'L');
  }
  return (Math.round(total*10)/10) + u;
}

function sectionPlanView(planKey, title, emoji, color, bg, border, people, backAction){
  const plan = S[planKey]||[];
  const shopItems = buildCombinedShoppingList(plan, people);
  const isPro = tierAllows('pro');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">${emoji} ${title}</h1>
      <div style="font-size:11px;color:${color};">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
    </div>
    <div class="content">

      <!-- Selected recipes -->
      <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin-bottom:10px;">Selected Recipes</div>
      ${plan.map(r=>{
        const _pid = r.id;
        return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:24px;">${r.emoji||'🍽️'}</span>
          <div style="flex:1;">
            <div style="font-size:14px;color:#f5e8cc;">${r.name}</div>
            <div style="font-size:11px;color:${color};">${r.time?'⏱️ '+r.time+' min':''}${r.costPP?' · R'+r.costPP+' pp':''}</div>
          </div>
          <button onclick="setQuiet({${planKey}:(S.${planKey}||[]).filter(x=>x.id!=='${_pid}')})" style="background:none;border:1px solid #601040;border-radius:6px;padding:3px 8px;color:#803060;font-size:11px;cursor:pointer;">✕</button>
        </div>`;
      }).join('')}

      <!-- Combined shopping list -->
      <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;margin:16px 0 10px;">🛒 Combined Shopping List — ${people} people</div>
      <div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:14px;margin-bottom:12px;">
        ${shopItems.map(ing=>{
          const key = 'plan_'+ing.n.replace(/\s+/g,'_');
          const ticked = (S._planChecked||{})[key];
          return `<div onclick="(function(){const ch=Object.assign({},S._planChecked||{});ch['${key}']=!ch['${key}'];setQuiet({_planChecked:ch});})()" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid ${border};cursor:pointer;">
            <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${ticked?color:'#3a3030'};background:${ticked?color:'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;">${ticked?'✓':''}</div>
            <span style="font-size:13px;color:${ticked?'#4a4040':'#c8c0b0'};flex:1;text-decoration:${ticked?'line-through':'none'};">${ing.n}</span>
            <span style="font-size:13px;color:${ticked?'#3a3030':'#f5c842'};font-weight:bold;">${formatAmount(ing.total,ing.u)}</span>
          </div>`;
        }).join('')}
        <div style="margin-top:10px;font-size:10px;color:#4a4040;font-style:italic;">📏 Raw/dry weights. Rice+pap grow 3x when cooked. Meat shrinks ~25%.</div>
      </div>

      <!-- Share buttons -->
      ${isPro ? `<button onclick="(function(){const sh=window._sectionPlanForShare||[];const sv=${people};const shLines=buildCombinedShoppingList(sh,sv).map(i=>'• '+i.n+': '+formatAmount(i.total,i.u)).join('\n');window.open('https://wa.me/?text='+encodeURIComponent('${emoji} ${title}\n${people} people\n\n🛒 Shopping List:\n'+shLines+'\n\nFrom Tinza tinza.netlify.app'),'_blank');})()" style="width:100%;padding:13px;border-radius:10px;background:#0a1a0a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:10px;">📱 Share Shopping List via WhatsApp</button>` 
      : `<div style="background:#080f08;border:1px solid #1a3020;border-radius:10px;padding:10px;text-align:center;color:#304030;font-size:12px;margin-bottom:10px;">👑 Share Shopping List — Pro feature</div>`}

      <button onclick="setQuiet({_planChecked:{}})" style="width:100%;padding:10px;border-radius:10px;background:transparent;border:1px solid #3a3030;color:#5a5050;font-size:12px;cursor:pointer;margin-bottom:20px;">↺ Reset tick boxes</button>
    </div>
  </div>`;
}

function sectionPlanBtn(planKey, title, emoji, color, bg, people, viewAction){
  const plan = S[planKey]||[];
  if(!plan.length) return '';
  const isPro = tierAllows('pro');
  if(!isPro) return `<div style="background:${bg};border:1px dashed ${color};border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;opacity:0.6;"><div style="font-size:12px;color:${color};">📋 My Plan — <strong>Tinza Pro</strong></div></div>`;
  return `<button onclick="${viewAction}" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid ${color};background:${bg};color:#f5e8cc;font-size:14px;cursor:pointer;">
    📋 See my ${title} Plan & Shopping List →
    <div style="font-size:11px;color:${color};margin-top:3px;">${plan.length} recipe${plan.length!==1?'s':''} · ${people} people</div>
  </button>`;
}

// Toggle saved recipe
function toggleSavedRecipe(id, name, emoji){
  const saved = (S.savedRecipes||[]).some(x=>x.id===id);
  if(saved){
    setQuiet({savedRecipes:(S.savedRecipes||[]).filter(x=>x.id!==id)});
  } else {
    setQuiet({savedRecipes:[...(S.savedRecipes||[]),{id,name,emoji,section:S.screen||''}]});
  }
}

// Toggle ingredient checkbox (tap to mark as already have)
function toggleIng(key){
  const ch = Object.assign({}, S._checkedIngs||{});
  ch[key] = !ch[key];
  setQuiet({_checkedIngs: ch});
}

// Global click handlers - avoids JSON.stringify in onclick attributes
function openBudgetRecipe(idx){
  const arr = window._tinzaBudgetPage||[];
  if(arr[idx]) setQuiet({_budgetActiveRecipe: arr[idx]});
}
function openMoodRecipe(idx){
  const arr = S.moodRecipes||[];
  if(arr[idx]) setQuiet({moodActiveRecipe: arr[idx]});
}
function openMealRecipe(id){
  const sec = S.screen||'';
  const sectionRecipes = {
    breakfast: typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
    lightlunch: typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
    supper: typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
    bakes: typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
  };
  const arr = sectionRecipes[sec]||[];
  const r = arr.find(x=>x.id===id);
  if(r) setQuiet({mealActiveRecipe: Object.assign({},r,{_section:sec})});
}
function openWorldRecipe(id){
  // World Kitchen uses r.id to set _wkRecipe
  set({activeCulturalRecipe: id, _wkRecipe: id});
}
function openEventRecipe(id){
  const allEventArrays = [
    ...(typeof EVENTS_STARTERS!=='undefined'?EVENTS_STARTERS:[]),
    ...(typeof EVENTS_BIG_COOKING_MAINS!=='undefined'?EVENTS_BIG_COOKING_MAINS:[]),
    ...(typeof EVENTS_BIG_COOKING_SIDES!=='undefined'?EVENTS_BIG_COOKING_SIDES:[]),
    ...(typeof EVENTS_BIG_COOKING_SALADS!=='undefined'?EVENTS_BIG_COOKING_SALADS:[]),
    ...(typeof EVENTS_DESSERTS!=='undefined'?EVENTS_DESSERTS:[]),
    ...(typeof EVENTS_SAUCES!=='undefined'?EVENTS_SAUCES:[]),
  ];
  const r = allEventArrays.find(x=>x.id===id);
  if(r) set({eventActiveRecipe: r});
}
function openCakeRecipe(id){
  const arr = typeof CELEBRATION_CAKE_RECIPES!=='undefined'?CELEBRATION_CAKE_RECIPES:[];
  const cake = arr.find(c=>c.id===id);
  if(cake) set({activeCake: cake});
}

