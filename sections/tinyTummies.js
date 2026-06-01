function babyListHTML(){
  const isPro = tierAllows('pro');
  const filtered = S.babyFilter==="all" ? BABY_RECIPES : BABY_RECIPES.filter(b=>b.stage===S.babyFilter);
  const planIds = S.babyPlan||[];

  // "Go to My Plan" button at bottom (like braai)
  const planBtn = planIds.length>0 ? `
    <div onclick="set({screen:'babyapp',babyView:'myplan',activeBaby:null})"
      style="position:sticky;bottom:12px;margin:12px 0;background:#1a2e1a;border:2px solid #25d366;border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:14px;color:#40d080;font-weight:bold;">📋 Go to My Plan & Shopping List →</div>
        <div style="font-size:11px;color:#256040;margin-top:2px;">${planIds.length} recipe${planIds.length>1?'s':''} selected · tap to see quantities and shopping list</div>
      </div>
      <span style="font-size:22px;">🛒</span>
    </div>` : '';

  const tinyHowOpen = S.tinyHowOpen || false;
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a0f18 0%,#2a0a20 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(14,6,12,0.3) 0%,rgba(14,6,12,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home',activeBaby:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #5a2040;border-radius:20px;color:#e07090;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🍼 Tiny Tummies</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#c07090;font-style:italic;">Safe, nutritious recipes for every stage of your baby's journey</p>
        <div style="display:flex;align-items:center;background:rgba(26,15,24,0.85);border:1px solid #5a2040;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#e07090;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search baby recipes…"
            oninput="set({tinySearch:this.value})"
            value="${S.tinySearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#f0c0d0;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.tinySearch?`<button onclick="set({tinySearch:''})" style="background:none;border:none;color:#5a2040;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + STAGE FILTER ══ -->
    <div style="background:#1a0f18;border-bottom:1px solid #3a1030;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;">
        <div style="flex:1;">
          <button onclick="set({tinyHowOpen:!S.tinyHowOpen})"
            style="background:none;border:none;color:#e07090;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${tinyHowOpen?'▲':'▼'} How it works
          </button>
          ${tinyHowOpen?`
            <div onclick="set({tinyHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#120a10;border:1px solid #4a1030;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c090a0;line-height:1.6;">
              <strong style="color:#e07090;">1. Filter by stage</strong> — 4–6 months, 6–9 months, or 9–12m+.<br>
              <strong style="color:#e07090;">2. Tap any recipe</strong> — ingredients scale by batch size.<br>
              <strong style="color:#e07090;">3. Add to My Plan</strong> — build your weekly meal prep list.<br>
              <span style="color:#5a2040;font-size:11px;">⚠️ Always consult your paediatrician before introducing new foods.</span>
            </div>
          `:''}
        </div>
      </div>
      <!-- Stage filter pills -->
      <div style="display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;">
        ${[{id:"all",label:"All Ages",emoji:"👶"},{id:"stage1",label:"4–6 months",emoji:"🌱"},{id:"stage2",label:"6–9 months",emoji:"🌿"},{id:"stage3",label:"9–12m+",emoji:"🌳"}].map(f=>`<button onclick="setQuiet({babyFilter:'${f.id}'})"
          style="flex-shrink:0;padding:7px 12px;border-radius:20px;border:1px solid ${S.babyFilter===f.id?'#c04070':'#3a1030'};background:${S.babyFilter===f.id?'#2a0818':'transparent'};color:${S.babyFilter===f.id?'#f07090':'#6a3050'};font-size:11px;cursor:pointer;white-space:nowrap;">${f.emoji} ${f.label}</button>`).join("")}
      </div>
    </div>

    <div class="content">
      <div style="background:#1a0810;border:1px solid #6a1030;border-radius:10px;padding:12px;margin-bottom:14px;">
        <p style="margin:0 0 4px;font-size:11px;color:#e07090;font-weight:bold;">⚠️ Medical Disclaimer</p>
        <p style="margin:0;font-size:11px;color:#c06070;line-height:1.6;">General recipe ideas only — not medical or nutritional advice. Always consult your paediatrician before introducing solids. Introduce one new food at a time and wait 3–5 days to check for reactions. No honey or salt for babies under 12 months. Organic produce is always best where available and affordable.</p>
      </div>

      <div style="font-size:10px;letter-spacing:2px;color:#6a2040;text-transform:uppercase;margin-bottom:8px;">Filter by stage</div>
      <div class="pill-row" style="margin-bottom:14px;">
        ${[{id:"all",label:"All Ages",emoji:"👶"},{id:"stage1",label:"4–6 months",emoji:"🌱"},{id:"stage2",label:"6–9 months",emoji:"🌿"},{id:"stage3",label:"9–12m+",emoji:"🌳"}].map(f=>`<button class="pill" onclick="setQuiet({babyFilter:'${f.id}'})" style="background:${S.babyFilter===f.id?"#c04070":"#161210"};border-color:${S.babyFilter===f.id?"#c04070":"#3a2030"};color:${S.babyFilter===f.id?"#fff":"#6a4050"};">${f.emoji} ${f.label}</button>`).join("")}
      </div>

      ${filtered.map(b=>{
        const bi = BABY_RECIPES.indexOf(b);
        const inPlan = planIds.includes(b.id);
        return `<div style="background:#1a0f18;border:1px solid ${inPlan?'#c04070':'#3a2030'};border-radius:10px;padding:12px;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${isPro?`<div style="width:22px;height:22px;border-radius:5px;border:2px solid ${inPlan?'#c04070':'#5a2040'};background:${inPlan?'#c04070':'transparent'};display:flex;align-items:center;justify-content:center;font-size:12px;color:white;cursor:pointer;flex-shrink:0;" onclick="setQuiet({babyPlan:toggle(S.babyPlan||[],'${b.id}')})">${inPlan?'✓':''}</div>`:'<div style="width:22px;flex-shrink:0;"></div>'}
            <span style="font-size:28px;">${b.emoji}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${b.name}</div>
              <div style="font-size:11px;color:#7a4060;margin-bottom:5px;">${b.stageLabel} · ⏱️ ${b.time} min</div>
              <div>${(b.badges||[]).map(badge=>`<span style="background:#2a1020;border:1px solid #5a2040;border-radius:10px;font-size:9px;color:#c07090;padding:2px 6px;margin:1px;display:inline-block;">${badge}</span>`).join("")}</div>
            </div>
            <button onclick="setQuiet({activeBaby:BABY_RECIPES[${bi}],babyView:null})" style="background:#c04070;border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;flex-shrink:0;">Recipe →</button>
          </div>
        </div>`;
      }).join("")}

      ${planBtn}
    </div>
  </div>`;
}

function babyMyPlanView(){
  const planIds = S.babyPlan||[];
  const batches = S.babyBatches||1;
  const planRecipes = BABY_RECIPES.filter(r=>planIds.includes(r.id));

  // Build flat shopping list
  const map = {};
  planRecipes.forEach(r=>{
    (r.base||[]).forEach(i=>{
      if(!i||!i.n||!i.pp) return;
      const key = i.n.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
      const amt = i.pp*batches;
      if(map[key]){ map[key].raw+=amt; if(!map[key].dishes.includes(r.name)) map[key].dishes.push(r.name); }
      else map[key]={name:i.n,raw:amt,unit:i.u,dishes:[r.name]};
    });
  });
  function fmt(raw,unit){
    if(unit==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
    return Math.round(raw*10)/10+(unit||'');
  }
  const allItems = Object.values(map).sort((a,b)=>shopSortKey(a.name).localeCompare(shopSortKey(b.name)));
  const cart = S.fingerShopCart||{};

  const waText = '🍼 *Tiny Tummies Shopping List — '+batches+' batch'+(batches>1?'es':'')+'*\n\n'
    + allItems.map(i=>'• '+i.name+': '+fmt(i.raw,i.unit)).join('\n');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#1a0f18;border-bottom:1px solid #5a2040;padding:14px 20px;">
      <button onclick="set({babyView:null,activeBaby:null})" style="background:none;border:none;color:#e07090;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Recipes</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">📋 My Baby Meal Plan</h1>
      <p style="margin:0;font-size:11px;color:#a06070;">${planRecipes.length} recipe${planRecipes.length!==1?'s':''} selected</p>
    </div>
    <div class="content">

      <!-- Selected recipes -->
      <div style="font-size:10px;letter-spacing:2px;color:#6a2040;text-transform:uppercase;margin-bottom:8px;">Selected Recipes</div>
      <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:4px 12px;margin-bottom:12px;">
        ${planRecipes.length===0?'<p style="font-size:13px;color:#4a2030;font-style:italic;padding:8px 0;">No recipes selected yet.</p>':
          planRecipes.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #2a1020;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:20px;">${r.emoji}</span>
              <div>
                <div style="font-size:14px;color:#f5e8cc;">${r.name}</div>
                <div style="font-size:11px;color:#7a4060;">${r.stageLabel}</div>
              </div>
            </div>
            <button onclick="setQuiet({babyPlan:(S.babyPlan||[]).filter(x=>x!=='${r.id}')})" style="background:none;border:none;color:#8a3050;font-size:11px;cursor:pointer;">✕ Remove</button>
          </div>`).join('')}
      </div>

      <!-- Batch scaler -->
      <div style="font-size:10px;letter-spacing:2px;color:#6a2040;text-transform:uppercase;margin-bottom:8px;">Batches to Make</div>
      <div style="display:flex;align-items:center;gap:14px;background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:12px;margin-bottom:16px;">
        <button onclick="setQuiet({babyBatches:Math.max(1,S.babyBatches-1)})" style="width:36px;height:36px;border-radius:50%;background:#2a0f20;border:2px solid #e07090;color:#e07090;font-size:20px;cursor:pointer;">−</button>
        <span style="font-size:32px;color:#f5c842;font-weight:bold;min-width:40px;text-align:center;">${batches}</span>
        <button onclick="setQuiet({babyBatches:Math.min(10,S.babyBatches+1)})" style="width:36px;height:36px;border-radius:50%;background:#2a0f20;border:2px solid #e07090;color:#e07090;font-size:20px;cursor:pointer;">+</button>
        <span style="font-size:12px;color:#6a4050;">All shopping quantities multiply</span>
      </div>

      <!-- Shopping list -->
      <div style="font-size:10px;letter-spacing:2px;color:#6a2040;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List</div>
      <div style="background:#161210;border:1px solid #4a2035;border-radius:10px;padding:4px 12px;margin-bottom:8px;">
        <div style="font-size:11px;color:#6a4050;padding:8px 0 4px;">✅ Tap items you already have to remove</div>
        ${allItems.length===0?'<p style="font-size:13px;color:#4a2030;font-style:italic;padding:8px 0;">Add recipes to your plan to generate the shopping list.</p>':
          allItems.map(i=>{
            const key = i.name.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
            const inCart = (S.fingerShopCart||{})[key];
            const shared = i.dishes.length>1?` <span style="font-size:10px;color:#6a4050;">· ${i.dishes.length} recipes</span>`:'';
            return `<div onclick="fingerShopToggle('${key}')" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #2a1020;cursor:pointer;opacity:${inCart?0.35:1};">
              <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${inCart?'#c04070':'#5a2040'};background:${inCart?'#c04070':'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;">${inCart?'✓':''}</div>
              <span style="flex:1;font-size:13px;color:${inCart?'#4a2030':'#c0a0b0'};text-decoration:${inCart?'line-through':'none'};">${i.name}${shared}</span>
              <span style="font-size:13px;color:${inCart?'#4a2030':'#f5c842'};font-weight:bold;flex-shrink:0;">${fmt(i.raw,i.unit)}</span>
            </div>`;
          }).join('')}
        ${allItems.length>0?`<div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="font-size:11px;color:#6a4050;">${allItems.filter(i=>!(S.fingerShopCart||{})[ i.name.toLowerCase().replace(/[^a-z]/g,'').slice(0,18)]).length} of ${allItems.length} items remaining</span><button onclick="setQuiet({fingerShopCart:{}})" style="background:none;border:none;color:#8a3050;font-size:11px;cursor:pointer;text-decoration:underline;">Reset all</button></div>`:''}
      </div>

      <!-- Share & print -->
      <button onclick="window.print()" style="width:100%;padding:12px;margin-bottom:8px;border-radius:10px;border:2px solid #6060c0;background:#1a1a2e;color:#a0a0f0;font-size:13px;cursor:pointer;">🖨️ Print / Save as PDF</button>
      <a href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" style="display:block;width:100%;padding:13px;margin-bottom:8px;border-radius:10px;border:2px solid #25d366;background:#0a1a0a;color:#25d366;font-size:13px;text-align:center;text-decoration:none;box-sizing:border-box;">📲 Send Shopping List via WhatsApp</a>
      <button onclick="set({babyPlan:[],babyView:null,activeBaby:null})" style="width:100%;padding:12px;margin-bottom:20px;border-radius:10px;border:2px solid #c04070;background:#1a0810;color:#e07090;font-size:13px;cursor:pointer;">🔄 Start a New Plan</button>
    </div>
  </div>`;
}

function babyShopListHTML(){ return babyMyPlanView(); }

function babyRecipeHTML_screen(){
  const b = S.activeBaby;
  if(!b) return babyListHTML();
  if(S.babyView==='myplan') return babyMyPlanView();
  const isPro = tierAllows('pro');
  const inPlan = (S.babyPlan||[]).includes(b.id);
  const batches = S.babyBatches||1;
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <!-- Photo header -->
    <div style="position:relative;height:220px;overflow:hidden;background:#1a0f18;">
      <img src="${'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/recipe/'+encodeURIComponent(b.name.trim())+'.jpg'}"
           onerror="this.style.display='none';this.nextSibling.style.display='flex'"
           style="width:100%;height:100%;object-fit:cover;display:block;">
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:6px;background:#1a0f18;">
        <span style="font-size:48px;">${b.emoji}</span>
        <span style="font-size:11px;color:#6a4050;">📷 Photo coming soon</span>
      </div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.2) 0%,rgba(10,4,14,0.85) 100%);z-index:1;pointer-events:none;"></div>
      <button onclick="setQuiet({activeBaby:null,babyView:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #e07090;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;">← Back to Tiny Tummies</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px;">
        <h1 style="margin:0 0 4px;font-size:20px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">${b.emoji} ${b.name}</h1>
        <div style="font-size:11px;color:#c06080;font-style:italic;">${b.stageLabel} · ⏱️ ${b.time} min</div>
      </div>
    </div>
    <div class="content">
      <div style="margin-bottom:12px;">${(b.badges||[]).map(badge=>`<span style="background:#2a1020;border:1px solid #5a2040;border-radius:12px;font-size:10px;color:#c07090;padding:3px 8px;margin:2px;display:inline-block;">${badge}</span>`).join("")}</div>

      <div style="display:flex;align-items:center;gap:12px;background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:11px;color:#c06080;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Batches</div>
        <button onclick="setQuiet({babyBatches:Math.max(1,S.babyBatches-1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0f20;border:2px solid #e07090;color:#e07090;font-size:18px;cursor:pointer;">−</button>
        <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${batches}</span>
        <button onclick="setQuiet({babyBatches:Math.min(10,S.babyBatches+1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0f20;border:2px solid #e07090;color:#e07090;font-size:18px;cursor:pointer;">+</button>
        <span style="font-size:11px;color:#6a4050;">All quantities multiply</span>
      </div>

      <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e07090;text-transform:uppercase;margin-bottom:10px;">Ingredients${batches>1?' — '+batches+' batches':''}</div>
        ${(b.base||[]).map(ing=>{
          if(!ing||!ing.n) return '';
          if(!ing.pp) return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #2a1520;"><span style="color:#e07090;flex-shrink:0;">•</span><span style="font-size:13px;color:#a07080;font-style:italic;">${ing.n} — to taste</span></div>`;
          const raw = ing.pp*batches;
          let display = ing.u==='egg' ? Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'') : (raw>=1000&&(ing.u==='g'||ing.u==='ml')) ? (Math.round(raw/100)/10)+(ing.u==='g'?'kg':'L') : Math.round(raw*10)/10+(ing.u||'');
          return `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid #2a1520;"><span style="font-size:13px;color:#e0d4b8;flex:1;">${ing.n}</span><span style="font-size:13px;color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${display}</span></div>`;
        }).join("")}
      </div>

      <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e07090;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(b.method||[]).map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:14px;"><div class="step-num" style="background:#2d0f20;border:1px solid #e07090;color:#e07090;">${i+1}</div><p style="margin:2px 0 0;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p></div>`).join("")}
      </div>

      <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e07090;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;">${b.tip}</p>
      </div>

      ${b.nutrition&&b.nutrition.length?`<div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e07090;text-transform:uppercase;margin-bottom:8px;">💚 Nutritional Highlights</div>
        ${b.nutrition.map(n=>`<div style="display:flex;gap:8px;padding:4px 0;"><span style="color:#60c060;flex-shrink:0;">✓</span><span style="font-size:12px;color:#a0c0a0;">${n}</span></div>`).join("")}
      </div>`:''}

      <div class="grid2" style="margin-bottom:12px;">
        <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:12px;"><div style="font-size:10px;color:#c06080;text-transform:uppercase;margin-bottom:4px;">🧊 Storage</div><p style="margin:0;font-size:12px;color:#a09080;line-height:1.5;">${b.storage}</p></div>
        <div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:12px;"><div style="font-size:10px;color:#c06080;text-transform:uppercase;margin-bottom:4px;">⚠️ Allergens</div><p style="margin:0;font-size:12px;color:#a09080;line-height:1.5;">${b.allergens}</p></div>
      </div>

      ${isPro?`<button onclick="setQuiet({babyPlan:toggle(S.babyPlan||[],'${b.id}')})" style="width:100%;padding:14px;border-radius:10px;border:2px solid ${inPlan?'#e07090':'#4a2035'};background:${inPlan?'#2a0f20':'#1a0f18'};color:${inPlan?'#f070a0':'#7a4060'};font-size:14px;cursor:pointer;margin-bottom:10px;">${inPlan?'✓ In My Plan — tap to remove':'+ Add to My Meal Plan'}</button>`:
      `<div style="background:#1a0f18;border:1px solid #4a2035;border-radius:10px;padding:10px;text-align:center;color:#6a3050;font-size:12px;margin-bottom:10px;">Add to Plan — Pro feature</div>`}

      <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('👶 *'+b.name+'*\n'+b.stageLabel+'\n\nIngredients:\n'+(b.base||[]).filter(i=>i&&i.pp).map(i=>{const r=i.pp*${batches};let d=i.u==='egg'?Math.ceil(r)+' egg'+(Math.ceil(r)>1?'s':''):((r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||''));return '• '+i.n+': '+d;}).join('\n')+'\n\nMade with Tinza 😊'),'_blank')" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#1a2e1a;border:2px solid #25d366;color:#25d366;font-size:13px;font-weight:bold;margin-bottom:20px;">📱 Share Recipe on WhatsApp</button>
    </div>
  </div>`;
}
// ── DOG ───────────────────────────────────────────────────────────
// ── DOG ───────────────────────────────────────────────────────────
function dogPlanBtn(){
  const ids = S.dogPlan||[];
  if(!ids.length) return '';
  return `<div onclick="setQuiet({dogView:'myplan',activeDog:null})"
    style="position:sticky;bottom:12px;margin:12px 0;background:#1a1030;border:2px solid #9070e0;border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
    <div>
      <div style="font-size:14px;color:#b090f0;font-weight:bold;">📋 Go to My Plan & Shopping List →</div>
      <div style="font-size:11px;color:#6040a0;margin-top:2px;">${ids.length} recipe${ids.length>1?'s':''} selected</div>
    </div>
    <span style="font-size:22px;">🛒</span>
  </div>`;
}

function dogMyPlanView(){
  const planIds = S.dogPlan||[];
  const size = S.dogSize||'medium';
  const age = S.dogAge||'adult';
  const count = S.dogCount||1;
  const sizeMult = DOG_SIZE_MULT[size]||1;
  const ageMult = DOG_AGE_MULT[age]||1;
  const totalMult = sizeMult * ageMult * count;

  const allRecipes = Object.values(DOG_RECIPES).flat();
  const planRecipes = allRecipes.filter(r=>planIds.includes(r.id));

  const map = {};
  planRecipes.forEach(r=>{
    (r.base||[]).forEach(i=>{
      if(!i||!i.n||!i.pp) return;
      const key = i.n.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
      const amt = typeof i.pp === 'number' ? i.pp * totalMult : 0;
      if(map[key]){ map[key].raw+=amt; if(!map[key].dishes.includes(r.name)) map[key].dishes.push(r.name); }
      else map[key]={name:i.n,raw:amt,unit:i.u,dishes:[r.name]};
    });
  });
  function fmt(raw,unit){
    if(!raw) return unit||'';
    if(unit==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
    return Math.round(raw*10)/10+(unit||'');
  }
  const allItems = Object.values(map).filter(i=>i.raw>0).sort((a,b)=>shopSortKey(a.name).localeCompare(shopSortKey(b.name)));
  const waText = '🐾 *Dog Shopping List*\n${size} dog · ${age} · ${count} dog${count>1?"s":""}\n\n'
    + allItems.map(i=>'• '+i.name+': '+fmt(i.raw,i.unit)).join('\n');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#120f1a;border-bottom:1px solid #6040b0;padding:14px 20px;">
      <button onclick="setQuiet({dogView:null,activeDog:null})" style="background:none;border:none;color:#9060d0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Recipes</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">📋 Dog Meal Plan</h1>
      <p style="margin:0;font-size:11px;color:#7060a0;">${planRecipes.length} recipe${planRecipes.length!==1?'s':''} · ${size} · ${age} · ${count} dog${count>1?'s':''}</p>
    </div>
    <div class="content">
      <div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:4px 12px;margin-bottom:12px;">
        ${planRecipes.length===0?'<p style="font-size:13px;color:#4a3060;font-style:italic;padding:8px 0;">No recipes selected.</p>':
          planRecipes.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #2a1a40;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:20px;">${r.emoji}</span>
              <div><div style="font-size:14px;color:#f5e8cc;">${r.name}</div></div>
            </div>
            <button onclick="setQuiet({dogPlan:(S.dogPlan||[]).filter(x=>x!=='${r.id}')})" style="background:none;border:none;color:#8a5080;font-size:11px;cursor:pointer;">✕ Remove</button>
          </div>`).join('')}
      </div>
      <div style="font-size:11px;color:#7060a0;background:#120f1a;border:1px solid #3a2070;border-radius:8px;padding:10px;margin-bottom:14px;">${DOG_AGE_NOTES[age]||''}</div>
      <div style="font-size:10px;letter-spacing:2px;color:#6040a0;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List</div>
      <div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:4px 12px;margin-bottom:8px;">
        <div style="font-size:11px;color:#6040a0;padding:8px 0 4px;">✅ Tap items you already have</div>
        ${allItems.length===0?'<p style="font-size:13px;color:#4a3060;font-style:italic;padding:8px 0;">Add recipes to generate the list.</p>':
          allItems.map(i=>{
            const key=i.name.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
            const inCart=(S.fingerShopCart||{})[key];
            return `<div onclick="fingerShopToggle('${key}')" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #1a0f30;cursor:pointer;opacity:${inCart?0.35:1};">
              <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${inCart?'#9070e0':'#4030a0'};background:${inCart?'#9070e0':'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;">${inCart?'✓':''}</div>
              <span style="flex:1;font-size:13px;color:${inCart?'#3a2050':'#c0a0e0'};text-decoration:${inCart?'line-through':'none'};">${i.name}${i.dishes.length>1?' <span style="font-size:10px;color:#6040a0;">· '+i.dishes.length+' recipes</span>':''}</span>
              <span style="font-size:13px;color:${inCart?'#3a2050':'#f5c842'};font-weight:bold;flex-shrink:0;">${fmt(i.raw,i.unit)}</span>
            </div>`;
          }).join('')}
      </div>
      <button onclick="window.print()" style="width:100%;padding:12px;margin-bottom:8px;border-radius:10px;border:2px solid #6060c0;background:#1a1a2e;color:#a0a0f0;font-size:13px;cursor:pointer;">🖨️ Print / Save as PDF</button>
      <a href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" style="display:block;width:100%;padding:13px;margin-bottom:8px;border-radius:10px;border:2px solid #25d366;background:#0a1a0a;color:#25d366;font-size:13px;text-align:center;text-decoration:none;box-sizing:border-box;">📲 Send Shopping List via WhatsApp</a>
      <button onclick="set({dogPlan:[],dogView:null,activeDog:null})" style="width:100%;padding:12px;margin-bottom:20px;border-radius:10px;border:2px solid #9070e0;background:#120f1a;color:#b090f0;font-size:13px;cursor:pointer;">🔄 Start a New Plan</button>
    </div>
  </div>`;
}

function dogListHTML(){
  const isPro = tierAllows('pro');
  const sec = DOG_SECTIONS_LIST.find(s=>s.id===S.dogSection)||DOG_SECTIONS_LIST[0];
  const age = S.dogAge||'adult';
  let recipes = DOG_RECIPES[S.dogSection]||[];
  if(age!=='all') recipes = recipes.filter(r=>!r.ages||r.ages.includes(age));
  const planIds = S.dogPlan||[];
  const color = sec.color||'#9070e0';

  return `<div>
    <div style="background:#120f1a;border-bottom:1px solid #4030a0;padding:12px 16px;">
      <div style="font-size:10px;letter-spacing:2px;color:#6040a0;text-transform:uppercase;margin-bottom:8px;">Dog Size</div>
      <div class="grid3" style="margin-bottom:12px;">
        ${[{id:"small",l:"🐩 Small",n:"Under 10kg"},{id:"medium",l:"🐕 Medium",n:"10–25kg"},{id:"large",l:"🦮 Large",n:"Over 25kg"}].map(sz=>`<button onclick="setQuiet({dogSize:'${sz.id}'})" style="padding:8px 4px;border-radius:10px;cursor:pointer;text-align:center;background:${S.dogSize===sz.id?"#1a1030":"#161210"};border:2px solid ${S.dogSize===sz.id?"#9070e0":"#2a2040"};color:${S.dogSize===sz.id?"#c0a0ff":"#5a4070"};"><div style="font-size:13px;">${sz.l}</div><div style="font-size:9px;margin-top:2px;color:${S.dogSize===sz.id?"#9070e0":"#3a2a50"};">${sz.n}</div></button>`).join("")}
      </div>
      <div style="font-size:10px;letter-spacing:2px;color:#6040a0;text-transform:uppercase;margin-bottom:8px;">Age Stage</div>
      <div class="pill-row" style="margin-bottom:12px;">
        ${DOG_AGE_STAGES.map(a=>`<button class="pill" onclick="setQuiet({dogAge:'${a.id}',activeDog:null})" style="background:${age===a.id?"#9070e0":"#161210"};border-color:${age===a.id?"#9070e0":"#2a2040"};color:${age===a.id?"#fff":"#5a4070"};">${a.emoji} ${a.label}</button>`).join("")}
      </div>
      <div style="font-size:10px;letter-spacing:2px;color:#6040a0;text-transform:uppercase;margin-bottom:8px;">Number of Dogs</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
        <button onclick="setQuiet({dogCount:Math.max(1,S.dogCount-1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1030;border:2px solid #9070e0;color:#9070e0;font-size:18px;cursor:pointer;">−</button>
        <div style="flex:1;text-align:center;font-size:28px;color:#c0a0ff;font-weight:bold;">${S.dogCount}</div>
        <button onclick="setQuiet({dogCount:Math.min(10,S.dogCount+1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1030;border:2px solid #9070e0;color:#9070e0;font-size:18px;cursor:pointer;">+</button>
        <span style="font-size:11px;color:#6040a0;">${S.dogCount} dog${S.dogCount>1?'s':''}</span>
      </div>
    </div>
    <div class="content">
      <div style="font-size:11px;color:#7060a0;background:#120f1a;border:1px solid #3a2070;border-radius:8px;padding:8px 12px;margin-bottom:12px;">${DOG_AGE_NOTES[age]||'Select an age stage above to see appropriate recipes.'}</div>
      <div class="pill-row" style="margin-bottom:12px;">
        ${DOG_SECTIONS_LIST.map(s=>`<button class="pill" onclick="setQuiet({dogSection:'${s.id}',activeDog:null})" style="background:${S.dogSection===s.id?s.color:"#161210"};border-color:${S.dogSection===s.id?s.color:"#2a2040"};color:${S.dogSection===s.id?"#fff":"#5a4070"};">${s.label}</button>`).join("")}
      </div>
      ${S.dogSection==="care"?dogCareHTML():`
        <div style="font-size:10px;letter-spacing:2px;color:#6040a0;text-transform:uppercase;margin-bottom:8px;">${sec.label} — ${age==='all'?'All Ages':DOG_AGE_STAGES.find(a=>a.id===age)?.label||age}</div>
        ${recipes.length===0?`<div style="text-align:center;padding:30px;color:#4a3060;font-size:13px;">No ${sec.label.replace(/[^a-z ]/gi,'')} recipes for this age stage yet.</div>`:''}
        ${recipes.map((d,i)=>{
          const allowed=tierAllows(d.tier||"free");
          const inPlan=planIds.includes(d.id);
          if(!allowed) return `<div style="background:#0f0e0c;border:1px solid #1a1020;border-radius:10px;padding:12px;margin-bottom:8px;opacity:0.6;">
            <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:24px;">🔒</span><div><div style="font-size:14px;color:#3a2050;">${d.name}</div><div style="font-size:11px;color:#2a1040;">Unlock with Pro</div></div></div></div>`;
          return `<div style="background:#120f1a;border:1px solid ${inPlan?color:'#2a1a40'};border-radius:10px;padding:12px;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:10px;">
              ${isPro?`<div style="width:22px;height:22px;border-radius:5px;border:2px solid ${inPlan?color:'#4030a0'};background:${inPlan?color:'transparent'};display:flex;align-items:center;justify-content:center;font-size:12px;color:white;cursor:pointer;flex-shrink:0;" onclick="setQuiet({dogPlan:toggle(S.dogPlan||[],'${d.id}')})">${inPlan?'✓':''}</div>`:'<div style="width:22px;flex-shrink:0;"></div>'}
              <span style="font-size:24px;">${d.emoji}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:14px;color:#f5e8cc;margin-bottom:2px;">${d.name}</div>
                <div style="font-size:11px;color:#6040a0;">⏱️ ${d.time} min${d.ages&&d.ages.length?` · ${d.ages.map(a=>DOG_AGE_STAGES.find(x=>x.id===a)?.label||a).join(', ')}`:''}${d.storage?' · '+d.storage.split('.')[0]:''}</div>
              </div>
              <button onclick="setQuiet({activeDog:DOG_RECIPES['${S.dogSection}'][${i}]})" style="background:${color};border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;flex-shrink:0;">Recipe →</button>
            </div>
          </div>`;
        }).join("")}
      `}
      ${dogPlanBtn()}
    </div>
  </div>`;
}

function dogCareHTML(){
  return `<div style="background:#120f1a;border:1px solid #3a2070;border-radius:10px;padding:14px;margin-bottom:12px;">
    <div style="font-size:12px;color:#c0a0e0;font-weight:bold;margin-bottom:10px;">💧 Dog Feeding & Wellness Guide</div>
    ${[
      {h:"Water",t:"Fresh water must ALWAYS be available. A 25kg dog needs approximately 1.5–2L per day. Double this in SA summer."},
      {h:"Never feed dogs",t:"Xylitol (in many peanut butters and sweets), onions, garlic, grapes, raisins, chocolate, macadamia nuts, cooked bones, alcohol, avocado flesh, and anything with salt or sugar."},
      {h:"Puppy (0–6m)",t:"3–4 small meals per day. High protein and calcium for bone development. No raw food — developing immune systems are vulnerable."},
      {h:"Junior (6–12m)",t:"2–3 meals per day. Transition to adult-style food gradually over 2 weeks. Continue high protein."},
      {h:"Adult (1–8yr)",t:"2 meals per day. Maintain healthy weight — you should feel ribs without pressing hard. Rotate proteins weekly."},
      {h:"Senior (8yr+)",t:"Smaller, more digestible portions. Increase omega-3 for joints. Watch weight — seniors often need fewer calories. Soft food if dental issues."},
    ].map(t=>`<div style="margin-bottom:10px;"><div style="font-size:12px;color:#9070e0;font-weight:bold;margin-bottom:3px;">${t.h}</div><div style="font-size:12px;color:#a090c0;line-height:1.6;">${t.t}</div></div>`).join('')}
  </div>`;
}

function dogRecipeHTML_screen(){
  const d = S.activeDog;
  if(!d) return dogListHTML();
  if(S.dogView==='myplan') return dogMyPlanView();
  const size = S.dogSize||'medium';
  const age = S.dogAge||'adult';
  const count = S.dogCount||1;
  const sizeMult = DOG_SIZE_MULT[size]||1;
  const ageMult = DOG_AGE_MULT[age]||1;
  const totalMult = d.batchRecipe ? (S.dogBatches||1) : sizeMult * ageMult * count;
  const isBatch = d.batchRecipe;
  const batches = S.dogBatches||1;
  const isPro = tierAllows('pro');
  const inPlan = (S.dogPlan||[]).includes(d.id);
  const color = '#9070e0';

  function fmt(raw, unit){
    if(!raw||raw===0) return unit||'';
    if(unit==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
    return Math.round(raw*10)/10+(unit||'');
  }

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#120f1a;border-bottom:1px solid #4030a0;padding:14px 20px;">
      <button onclick="setQuiet({activeDog:null})" style="background:none;border:none;color:#9060d0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${d.emoji} ${d.name}</h1>
      <div style="font-size:11px;color:#7060a0;">⏱️ ${d.time} min · ${size} dog · ${age}</div>
    </div>
    <div class="content">
      <div style="background:#120f1a;border:1px solid #3a2070;border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:11px;color:#7060a0;">${DOG_AGE_NOTES[age]||''}</div>

      ${isBatch?`<div style="display:flex;align-items:center;gap:12px;background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:11px;color:#9070e0;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Batches</div>
        <button onclick="setQuiet({dogBatches:Math.max(1,S.dogBatches-1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1030;border:2px solid #9070e0;color:#9070e0;font-size:18px;cursor:pointer;">−</button>
        <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${batches}</span>
        <button onclick="setQuiet({dogBatches:Math.min(10,S.dogBatches+1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1030;border:2px solid #9070e0;color:#9070e0;font-size:18px;cursor:pointer;">+</button>
        <div style="font-size:11px;color:#6040a0;flex:1;"><div>~${d.batchYield*batches} ${d.batchUnit} per batch</div><div style="font-size:10px;color:#4030a0;margin-top:2px;">Minimum batch = base amounts. Scale up for more.</div></div>
      </div>`:``}
      <div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#9070e0;text-transform:uppercase;margin-bottom:10px;">${isBatch?`Ingredients — ${batches} batch${batches>1?'es':''} · ~${d.batchYield*batches} ${d.batchUnit}`:`Ingredients — ${count} ${size} ${age} dog${count>1?'s':''}`}</div>
        ${(d.base||[]).map(i=>{
          if(!i||!i.n) return '';
          if(!i.pp) return `<div style="padding:6px 0;border-bottom:1px solid #1a0f30;font-size:13px;color:#7060a0;font-style:italic;">• ${i.n} — to taste / as directed by vet</div>`;
          const raw = i.pp*totalMult;
          return `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1a0f30;">
            <span style="font-size:13px;color:#c0a0e0;flex:1;">${i.n}</span>
            <span style="font-size:13px;color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${fmt(raw,i.u)}</span>
          </div>`;
        }).join('')}
      </div>

      <div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#9070e0;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(d.method||[]).map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:12px;"><div class="step-num" style="background:#1a1030;border:1px solid #9070e0;color:#9070e0;">${i+1}</div><p style="margin:2px 0 0;font-size:13px;color:#c0a0e0;line-height:1.7;">${step}</p></div>`).join('')}
      </div>

      ${d.tip?`<div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:10px;color:#9070e0;text-transform:uppercase;margin-bottom:6px;">💡 Tip</div><p style="font-size:12px;color:#c0a0e0;line-height:1.6;">${d.tip}</p></div>`:''}

      ${d.storage?`<div style="background:#120f1a;border:1px solid #4030a0;border-radius:10px;padding:10px 12px;margin-bottom:12px;"><div style="font-size:10px;color:#9070e0;text-transform:uppercase;margin-bottom:4px;">🧊 Storage</div><p style="margin:0;font-size:12px;color:#a090c0;">${d.storage}</p></div>`:''}

      ${isPro?`<button onclick="setQuiet({dogPlan:toggle(S.dogPlan||[],'${d.id}')})" style="width:100%;padding:14px;border-radius:10px;border:2px solid ${inPlan?color:'#4030a0'};background:${inPlan?'#1a1030':'#120f1a'};color:${inPlan?'#c0a0ff':'#6040a0'};font-size:14px;cursor:pointer;margin-bottom:10px;">${inPlan?'✓ In My Plan — tap to remove':'+ Add to My Meal Plan'}</button>`:
      `<div style="background:#120f1a;border:1px solid #3a2070;border-radius:10px;padding:10px;text-align:center;color:#4a3060;font-size:12px;margin-bottom:10px;">Add to Plan — Pro feature</div>`}

      <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🐾 *'+d.name+'*\nFor ${count} ${size} ${age} dog${count>1?"s":""}\n\n'+(d.base||[]).filter(i=>i&&i.pp).map(i=>{const r=i.pp*${totalMult};let disp=i.u==='egg'?Math.ceil(r)+' egg'+(Math.ceil(r)>1?'s':''):(r>=1000&&(i.u==='g'||i.u==='ml'))?(Math.round(r/100)/10)+(i.u==='g'?'kg':'L'):(Math.round(r*10)/10)+(i.u||'');return '• '+i.n+': '+disp;}).join('\n')+'\n\nMade with Tinza 😊'),'_blank')" style="width:100%;padding:13px;border-radius:10px;background:#1a2e1a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:20px;">📱 Share Recipe via WhatsApp</button>
    </div>
  </div>`;
}

// ── CAT ───────────────────────────────────────────────────────────
function catPlanBtn(){
  const ids = S.catPlan||[];
  if(!ids.length) return '';
  return `<div onclick="setQuiet({catView:'myplan',activeCat:null})"
    style="position:sticky;bottom:12px;margin:12px 0;background:#1a1008;border:2px solid #e08040;border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
    <div>
      <div style="font-size:14px;color:#f0a060;font-weight:bold;">📋 Go to My Plan & Shopping List →</div>
      <div style="font-size:11px;color:#804020;margin-top:2px;">${ids.length} recipe${ids.length>1?'s':''} selected</div>
    </div>
    <span style="font-size:22px;">🛒</span>
  </div>`;
}

function catMyPlanView(){
  const planIds = S.catPlan||[];
  const age = S.catAge||'adult';
  const count = S.catCount||1;
  const ageMult = CAT_AGE_MULT[age]||1;
  const totalMult = ageMult * count;

  const allRecipes = Object.values(CAT_RECIPES).flat();
  const planRecipes = allRecipes.filter(r=>planIds.includes(r.id));

  const map = {};
  planRecipes.forEach(r=>{
    (r.base||[]).forEach(i=>{
      if(!i||!i.n||!i.pp||typeof i.pp!=='number') return;
      const key = i.n.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
      const amt = i.pp * totalMult;
      if(map[key]){ map[key].raw+=amt; if(!map[key].dishes.includes(r.name)) map[key].dishes.push(r.name); }
      else map[key]={name:i.n,raw:amt,unit:i.u,dishes:[r.name]};
    });
  });
  function fmt(raw,unit){
    if(!raw) return unit||'';
    if(unit==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
    return Math.round(raw*10)/10+(unit||'');
  }
  const allItems = Object.values(map).filter(i=>i.raw>0).sort((a,b)=>shopSortKey(a.name).localeCompare(shopSortKey(b.name)));
  const waText = '🐱 *Cat Shopping List*\n${age} cat · ${count} cat${count>1?"s":""}\n\n'
    + allItems.map(i=>'• '+i.name+': '+fmt(i.raw,i.unit)).join('\n');

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#1a1008;border-bottom:1px solid #804020;padding:14px 20px;">
      <button onclick="setQuiet({catView:null,activeCat:null})" style="background:none;border:none;color:#e08040;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back to Recipes</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">📋 Cat Meal Plan</h1>
      <p style="margin:0;font-size:11px;color:#a06030;">${planRecipes.length} recipe${planRecipes.length!==1?'s':''} · ${age} · ${count} cat${count>1?'s':''}</p>
    </div>
    <div class="content">
      <div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:4px 12px;margin-bottom:12px;">
        ${planRecipes.length===0?'<p style="font-size:13px;color:#4a3020;font-style:italic;padding:8px 0;">No recipes selected.</p>':
          planRecipes.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #2a1a10;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:20px;">${r.emoji}</span>
              <div><div style="font-size:14px;color:#f5e8cc;">${r.name}</div></div>
            </div>
            <button onclick="setQuiet({catPlan:(S.catPlan||[]).filter(x=>x!=='${r.id}')})" style="background:none;border:none;color:#8a5020;font-size:11px;cursor:pointer;">✕ Remove</button>
          </div>`).join('')}
      </div>
      <div style="font-size:11px;color:#a06030;background:#1a1008;border:1px solid #503010;border-radius:8px;padding:10px;margin-bottom:14px;">${CAT_AGE_NOTES[age]||''}</div>
      <div style="font-size:10px;letter-spacing:2px;color:#804020;text-transform:uppercase;margin-bottom:8px;">🛒 Shopping List</div>
      <div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:4px 12px;margin-bottom:8px;">
        <div style="font-size:11px;color:#804020;padding:8px 0 4px;">✅ Tap items you already have</div>
        ${allItems.length===0?'<p style="font-size:13px;color:#4a3020;font-style:italic;padding:8px 0;">Add recipes to generate the list.</p>':
          allItems.map(i=>{
            const key=i.name.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
            const inCart=(S.fingerShopCart||{})[key];
            return `<div onclick="fingerShopToggle('${key}')" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #1a0f08;cursor:pointer;opacity:${inCart?0.35:1};">
              <div style="width:20px;height:20px;border-radius:4px;border:2px solid ${inCart?'#e08040':'#6a3010'};background:${inCart?'#e08040':'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;">${inCart?'✓':''}</div>
              <span style="flex:1;font-size:13px;color:${inCart?'#4a2010':'#d0a080'};text-decoration:${inCart?'line-through':'none'};">${i.name}${i.dishes.length>1?' <span style="font-size:10px;color:#804020;">· '+i.dishes.length+' recipes</span>':''}</span>
              <span style="font-size:13px;color:${inCart?'#4a2010':'#f5c842'};font-weight:bold;flex-shrink:0;">${fmt(i.raw,i.unit)}</span>
            </div>`;
          }).join('')}
      </div>
      <button onclick="window.print()" style="width:100%;padding:12px;margin-bottom:8px;border-radius:10px;border:2px solid #6060c0;background:#1a1a2e;color:#a0a0f0;font-size:13px;cursor:pointer;">🖨️ Print / Save as PDF</button>
      <a href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" style="display:block;width:100%;padding:13px;margin-bottom:8px;border-radius:10px;border:2px solid #25d366;background:#0a1a0a;color:#25d366;font-size:13px;text-align:center;text-decoration:none;box-sizing:border-box;">📲 Send Shopping List via WhatsApp</a>
      <button onclick="set({catPlan:[],catView:null,activeCat:null})" style="width:100%;padding:12px;margin-bottom:20px;border-radius:10px;border:2px solid #e08040;background:#1a1008;color:#f0a060;font-size:13px;cursor:pointer;">🔄 Start a New Plan</button>
    </div>
  </div>`;
}

function catListHTML(){
  const isPro = tierAllows('pro');
  const sec = CAT_SECTIONS_LIST.find(s=>s.id===S.catSection)||CAT_SECTIONS_LIST[0];
  const age = S.catAge||'adult';
  let recipes = CAT_RECIPES[S.catSection]||[];
  if(age!=='all') recipes = recipes.filter(r=>!r.ages||r.ages.includes(age));
  const planIds = S.catPlan||[];
  const color = sec.color||'#e08040';

  return `<div>
    <div style="background:#1a1008;border-bottom:1px solid #804020;padding:12px 16px;">
      <div style="font-size:10px;letter-spacing:2px;color:#804020;text-transform:uppercase;margin-bottom:8px;">Age Stage</div>
      <div class="pill-row" style="margin-bottom:12px;">
        ${CAT_AGE_STAGES.map(a=>`<button class="pill" onclick="setQuiet({catAge:'${a.id}',activeCat:null})" style="background:${age===a.id?"#e08040":"#161210"};border-color:${age===a.id?"#e08040":"#2a1a10"};color:${age===a.id?"#fff":"#6a4030"};">${a.emoji} ${a.label}</button>`).join("")}
      </div>
      <div style="font-size:10px;letter-spacing:2px;color:#804020;text-transform:uppercase;margin-bottom:8px;">Number of Cats</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
        <button onclick="setQuiet({catCount:Math.max(1,S.catCount-1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1008;border:2px solid #e08040;color:#e08040;font-size:18px;cursor:pointer;">−</button>
        <div style="flex:1;text-align:center;font-size:28px;color:#f0a060;font-weight:bold;">${S.catCount}</div>
        <button onclick="setQuiet({catCount:Math.min(10,S.catCount+1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1008;border:2px solid #e08040;color:#e08040;font-size:18px;cursor:pointer;">+</button>
        <span style="font-size:11px;color:#804020;">${S.catCount} cat${S.catCount>1?'s':''}</span>
      </div>
    </div>
    <div class="content">
      <div style="font-size:11px;color:#a06030;background:#1a1008;border:1px solid #503010;border-radius:8px;padding:8px 12px;margin-bottom:12px;">${CAT_AGE_NOTES[age]||'Select an age stage above.'}</div>
      <div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:10px 12px;margin-bottom:12px;">
        <div style="font-size:11px;color:#e08040;font-weight:bold;margin-bottom:4px;">⚠️ Taurine is non-negotiable</div>
        <div style="font-size:11px;color:#a06030;line-height:1.6;">Cats cannot synthesise taurine. Without it, they develop fatal heart disease and blindness. Add a taurine supplement to every home-cooked meal. Consult your vet for the correct local brand and dose.</div>
      </div>
      <div class="pill-row" style="margin-bottom:12px;">
        ${CAT_SECTIONS_LIST.map(s=>`<button class="pill" onclick="setQuiet({catSection:'${s.id}',activeCat:null})" style="background:${S.catSection===s.id?s.color:"#161210"};border-color:${S.catSection===s.id?s.color:"#2a1a10"};color:${S.catSection===s.id?"#fff":"#6a4030"};">${s.label}</button>`).join("")}
      </div>
      ${S.catSection==="care"?catCareHTML():`
        ${recipes.length===0?`<div style="text-align:center;padding:30px;color:#4a3020;font-size:13px;">No ${sec.label.replace(/[^a-z ]/gi,'')} recipes for this age stage yet.</div>`:''}
        ${recipes.map((c,i)=>{
          const allowed=tierAllows(c.tier||"free");
          const inPlan=planIds.includes(c.id);
          if(!allowed) return `<div style="background:#0f0e0c;border:1px solid #1a1008;border-radius:10px;padding:12px;margin-bottom:8px;opacity:0.6;">
            <div style="display:flex;align-items:center;gap:10px;"><span style="font-size:24px;">🔒</span><div><div style="font-size:14px;color:#3a2010;">${c.name}</div><div style="font-size:11px;color:#2a1008;">Unlock with Pro</div></div></div></div>`;
          return `<div style="background:#1a1008;border:1px solid ${inPlan?color:'#3a2010'};border-radius:10px;padding:12px;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:10px;">
              ${isPro?`<div style="width:22px;height:22px;border-radius:5px;border:2px solid ${inPlan?color:'#6a3010'};background:${inPlan?color:'transparent'};display:flex;align-items:center;justify-content:center;font-size:12px;color:white;cursor:pointer;flex-shrink:0;" onclick="setQuiet({catPlan:toggle(S.catPlan||[],'${c.id}')})">${inPlan?'✓':''}</div>`:'<div style="width:22px;flex-shrink:0;"></div>'}
              <span style="font-size:24px;">${c.emoji}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:14px;color:#f5e8cc;margin-bottom:2px;">${c.name}</div>
                <div style="font-size:11px;color:#804020;">⏱️ ${c.time} min${c.ages&&c.ages.length?` · ${c.ages.map(a=>CAT_AGE_STAGES.find(x=>x.id===a)?.label||a).join(', ')}`:''}${c.storage?' · '+c.storage.split('.')[0]:''}</div>
              </div>
              <button onclick="setQuiet({activeCat:CAT_RECIPES['${S.catSection}'][${i}]})" style="background:${color};border:none;border-radius:6px;padding:5px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;flex-shrink:0;">Recipe →</button>
            </div>
          </div>`;
        }).join("")}
      `}
      ${catPlanBtn()}
    </div>
  </div>`;
}

function catCareHTML(){
  return `<div style="background:#1a1008;border:1px solid #503010;border-radius:10px;padding:14px;margin-bottom:12px;">
    <div style="font-size:12px;color:#e08040;font-weight:bold;margin-bottom:10px;">💧 Cat Feeding & Wellness Guide</div>
    ${[
      {h:"Taurine",t:"Non-negotiable at every meal. Cats cannot produce taurine. Without it they develop dilated cardiomyopathy (heart failure) and central retinal degeneration (blindness). Add a supplement to every home-cooked meal."},
      {h:"Water",t:"Most cats are chronically dehydrated on dry food. Always add water or broth to meals. Fresh running water (cat fountain) dramatically increases water intake."},
      {h:"Never feed cats",t:"Onions, garlic, chives, grapes, raisins, chocolate, xylitol, alcohol, raw dough, macadamia nuts, dog food (long term), too much tuna (mercury), dairy in large amounts."},
      {h:"Kitten (0–6m)",t:"4–5 small meals per day. High protein for rapid growth. Immune building is critical. No raw food for kittens."},
      {h:"Growth (6–12m)",t:"3–4 meals per day. Still growing — high protein and fat. Transition to adult portions gradually."},
      {h:"Adult (1–10yr)",t:"2 meals per day. Wet food priority for hydration. Taurine at every meal. Rotate proteins."},
      {h:"Senior (10yr+)",t:"Warm soft food. Increased omega-3. More frequent smaller meals. Monitor kidney function — annual vet checks essential."},
    ].map(t=>`<div style="margin-bottom:10px;"><div style="font-size:12px;color:#e08040;font-weight:bold;margin-bottom:3px;">${t.h}</div><div style="font-size:12px;color:#c08050;line-height:1.6;">${t.t}</div></div>`).join('')}
  </div>`;
}

function catRecipeHTML_screen(){
  const c = S.activeCat;
  if(!c) return catListHTML();
  if(S.catView==='myplan') return catMyPlanView();
  const age = S.catAge||'adult';
  const count = S.catCount||1;
  const ageMult = CAT_AGE_MULT[age]||1;
  const isBatch = c.batchRecipe;
  const batches = S.catBatches||1;
  const totalMult = isBatch ? batches : ageMult * count;
  const isPro = tierAllows('pro');
  const inPlan = (S.catPlan||[]).includes(c.id);
  const color = '#e08040';

  function fmt(raw, unit){
    if(!raw) return unit||'';
    if(unit==='egg') return Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'');
    if((unit==='g'||unit==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(unit==='g'?'kg':'L');
    return Math.round(raw*10)/10+(unit||'');
  }

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:#1a1008;border-bottom:1px solid #804020;padding:14px 20px;">
      <button onclick="setQuiet({activeCat:null})" style="background:none;border:none;color:#e08040;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Back</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${c.emoji} ${c.name}</h1>
      <div style="font-size:11px;color:#a06030;">⏱️ ${c.time} min · ${age} cat · ${count} cat${count>1?'s':''}</div>
    </div>
    <div class="content">
      <div style="background:#1a1008;border:1px solid #503010;border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:11px;color:#a06030;">${CAT_AGE_NOTES[age]||''}</div>

      ${isBatch?`<div style="display:flex;align-items:center;gap:12px;background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:12px;margin-bottom:12px;">
        <div style="font-size:11px;color:#e08040;text-transform:uppercase;letter-spacing:1px;flex-shrink:0;">Batches</div>
        <button onclick="setQuiet({catBatches:Math.max(1,S.catBatches-1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1008;border:2px solid #e08040;color:#e08040;font-size:18px;cursor:pointer;">−</button>
        <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:30px;text-align:center;">${batches}</span>
        <button onclick="setQuiet({catBatches:Math.min(10,S.catBatches+1)})" style="width:32px;height:32px;border-radius:50%;background:#1a1008;border:2px solid #e08040;color:#e08040;font-size:18px;cursor:pointer;">+</button>
        <div style="font-size:11px;color:#a06030;flex:1;"><div>~${c.batchYield*batches} ${c.batchUnit} per batch</div><div style="font-size:10px;color:#6a3010;margin-top:2px;">Minimum batch = base amounts. Scale up for more.</div></div>
      </div>`:``}
      <div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e08040;text-transform:uppercase;margin-bottom:10px;">${isBatch?`Ingredients — ${batches} batch${batches>1?'es':''} · ~${c.batchYield*batches} ${c.batchUnit}`:`Ingredients — ${count} ${age} cat${count>1?'s':''}`}</div>
        ${(c.base||[]).map(i=>{
          if(!i||!i.n) return '';
          if(!i.pp||typeof i.pp!=='number') return `<div style="padding:6px 0;border-bottom:1px solid #1a0f08;font-size:13px;color:#806040;font-style:italic;">• ${i.n} — as directed by vet</div>`;
          const raw = i.pp*totalMult;
          return `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #1a0f08;">
            <span style="font-size:13px;color:#d0a080;flex:1;">${i.n}</span>
            <span style="font-size:13px;color:#f5c842;font-weight:bold;flex-shrink:0;margin-left:8px;">${fmt(raw,i.u)}</span>
          </div>`;
        }).join('')}
      </div>

      <div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#e08040;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${(c.method||[]).map((step,i)=>`<div style="display:flex;gap:12px;margin-bottom:12px;"><div class="step-num" style="background:#1a1008;border:1px solid #e08040;color:#e08040;">${i+1}</div><p style="margin:2px 0 0;font-size:13px;color:#c0a080;line-height:1.7;">${step}</p></div>`).join('')}
      </div>

      ${c.tip?`<div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:10px;color:#e08040;text-transform:uppercase;margin-bottom:6px;">💡 Tip</div><p style="font-size:12px;color:#c0a080;line-height:1.6;">${c.tip}</p></div>`:''}

      ${c.storage?`<div style="background:#1a1008;border:1px solid #6a3010;border-radius:10px;padding:10px 12px;margin-bottom:12px;"><div style="font-size:10px;color:#e08040;text-transform:uppercase;margin-bottom:4px;">🧊 Storage</div><p style="margin:0;font-size:12px;color:#a06030;">${c.storage}</p></div>`:''}

      ${isPro?`<button onclick="setQuiet({catPlan:toggle(S.catPlan||[],'${c.id}')})" style="width:100%;padding:14px;border-radius:10px;border:2px solid ${inPlan?color:'#6a3010'};background:${inPlan?'#1a1008':'#1a1008'};color:${inPlan?'#f0a060':'#804020'};font-size:14px;cursor:pointer;margin-bottom:10px;">${inPlan?'✓ In My Plan — tap to remove':'+ Add to My Meal Plan'}</button>`:
      `<div style="background:#1a1008;border:1px solid #503010;border-radius:10px;padding:10px;text-align:center;color:#5a3010;font-size:12px;margin-bottom:10px;">Add to Plan — Pro feature</div>`}

      <button onclick="window.open('https://wa.me/?text='+encodeURIComponent('🐱 *'+c.name+'*\nFor ${count} ${age} cat${count>1?"s":""}\n\nMade with Tinza 😊'),'_blank')" style="width:100%;padding:13px;border-radius:10px;background:#1a2e1a;border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:20px;">📱 Share Recipe via WhatsApp</button>
    </div>
  </div>`;
}

