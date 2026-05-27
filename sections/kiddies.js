// ── KIDDIES BIRTHDAY PARTIES — rebuilt on Braai v33 template ─────

function kidsPartyHTML(){
  const k   = S.kidsCount  || 12;
  const budget = S.kidsBudget || 'easy';
  const themeId = S.kidsTheme;
  const kscreen = S.kidsScreen || 'themes';

  if(S.kidsShowMasterSnacks) return kidsMasterSnacksHTML(k);
  if(themeId && kscreen === 'theme-detail') return kidsThemeDetailHTML(themeId, k, budget);
  if(themeId && kscreen === 'category') return kidsCategoryHTML(themeId, k, budget);
  if(themeId && kscreen === 'recipe') return kidsRecipeHTML(themeId, k, budget);

  return kidsStep1HTML(k, budget);
}

// ─────────────────────────────────────────────────────────────────
// STEP 1 — THEME GRID
// ─────────────────────────────────────────────────────────────────
function kidsStep1HTML(k, budget){
  const total = (S.kidsSelectedItems||[]).length;
  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">

    <!-- HEADER — same pattern as Braai v33 -->
    <div style="position:relative;height:160px;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#3d0c1f 0%,#1a0814 60%,#0f0e0c 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 40%,rgba(15,14,12,0.95) 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:14px 16px 12px;">
        <div style="font-size:10px;color:#d04080;margin-bottom:4px;cursor:pointer;letter-spacing:1px;text-transform:uppercase;" onclick="set({eventTab:'bigcooking'})">← Events</div>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;margin:0 0 2px;letter-spacing:-0.5px;">🎂 Kiddies Birthday Parties</h1>
        <p style="font-size:11px;color:#803060;font-style:italic;margin:0;">12 themes · 4 to 50 kids · Easy, Medium or Fancy</p>
      </div>
    </div>

    <!-- CONTROLS BOX — same pattern as Braai v33 one-box -->
    <div style="margin:0 12px 14px;background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:14px 14px 10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:11px;color:#d04080;cursor:pointer;text-decoration:underline;" onclick="set({kidsShowHowItWorks:!S.kidsShowHowItWorks})">
          ${S.kidsShowHowItWorks?'▲':'▼'} How it works
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:#d04080;">👧 Kids:</span>
          <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:26px;height:26px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:16px;cursor:pointer;line-height:1;">−</button>
          <span style="font-size:18px;color:#f5e8cc;font-weight:bold;min-width:28px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:26px;height:26px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:16px;cursor:pointer;line-height:1;">+</button>
        </div>
      </div>
      ${S.kidsShowHowItWorks ? `
      <div style="padding:10px;background:#100810;border-radius:8px;border:1px solid #3a1020;font-size:11px;color:#c08090;line-height:1.7;margin-bottom:10px;" onclick="set({kidsShowHowItWorks:false})">
        <b style="color:#f070a0;">Pick a theme</b> → browse 5 category blocks → tap any recipe for full scaled ingredients + method.<br>
        <b style="color:#f070a0;">Tick items</b> → they land in My Plan with a live shopping list and cost summary.<br>
        <b style="color:#f070a0;">Swap snacks</b> from the Master Snacks library at any time. Tap outside to close.
      </div>` : ''}
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${['easy','medium','fancy'].map(b=>`
          <button onclick="set({kidsBudget:'${b}'})" style="padding:5px 14px;border-radius:20px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:11px;cursor:pointer;">
            ${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}
          </button>`).join('')}
        ${total>0?`<div style="margin-left:auto;font-size:11px;color:#f070a0;cursor:pointer;padding:5px 10px;border:1px solid #803060;border-radius:20px;background:#2a0818;" onclick="set({kidsScreen:'myplan'})">📋 My Plan (${total})</div>`:''}
      </div>
    </div>

    <!-- THEME GRID — 2 col, same card style as Braai section boxes -->
    <div style="padding:0 12px;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
      ${(typeof KIDS_THEMES !== 'undefined' ? KIDS_THEMES : KIDS_THEMES_DATA).map(th=>`
        <div onclick="set({kidsTheme:'${th.id}',kidsScreen:'theme-detail'})"
          style="background:#1a0814;border:1px solid #2a1020;border-radius:12px;padding:14px 10px 12px;cursor:pointer;text-align:center;transition:border-color 0.2s;"
          onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='#2a1020'">
          <div style="font-size:34px;margin-bottom:6px;">${th.emoji}</div>
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;line-height:1.3;margin-bottom:6px;">${th.name}</div>
          <div style="display:flex;gap:4px;justify-content:center;margin-bottom:5px;">
            ${th.colours.map(c=>`<div style="width:9px;height:9px;border-radius:50%;background:${c};"></div>`).join('')}
          </div>
          <div style="font-size:9px;color:#803060;font-style:italic;">${th.vibe.split('—')[0].trim()}</div>
        </div>`).join('')}
    </div>

    <!-- ADD/DELETE SNACKS — dashed box, same as Braai v33 -->
    <div style="margin:0 12px 24px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px dashed #803060;border-radius:10px;padding:14px;text-align:center;cursor:pointer;">
        <div style="font-size:14px;color:#f070a0;margin-bottom:3px;">🍿 Add / Delete Snacks</div>
        <div style="font-size:11px;color:#803060;">12 reusable building blocks · all scaled to ${k} kids</div>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// THEME DETAIL — 5 CATEGORY BLOCKS
// ─────────────────────────────────────────────────────────────────
function kidsThemeDetailHTML(themeId, k, budget){
  const th = (typeof KIDS_THEMES !== 'undefined' ? KIDS_THEMES : KIDS_THEMES_DATA).find(t=>t.id===themeId);
  if(!th) return '<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>';

  const cats = [
    { id:'savoury',  emoji:'🥩', label:'Savoury',          sub:'Mains & hot bites' },
    { id:'sweet',    emoji:'🍬', label:'Sweet',             sub:'Treats & sweets' },
    { id:'cake',     emoji:'🎂', label:'Cake',              sub:'Birthday cake + icing' },
    { id:'drinks',   emoji:'🧃', label:'Drinks & Crisps',   sub:'Drinks, crisps & dips' },
    { id:'planner',  emoji:'🎈', label:'Party Planner',     sub:'Decor, games & timeline' },
  ];

  const sel = S.kidsSelectedItems||[];
  const thSel = sel.filter(x=>x.themeId===themeId).length;

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">

    <!-- HEADER -->
    <div style="position:relative;height:150px;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,${th.colours[0]}44 0%,#1a0814 70%,#0f0e0c 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 30%,rgba(15,14,12,0.97) 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 16px 10px;">
        <div style="font-size:10px;color:#d04080;cursor:pointer;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;" onclick="set({kidsScreen:'themes',kidsTheme:null})">← All Themes</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:32px;">${th.emoji}</span>
          <div>
            <div style="font-size:19px;color:#f5e8cc;">${th.name}</div>
            <div style="font-size:10px;color:#a07080;font-style:italic;">${th.vibe}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTROLS BOX -->
    <div style="margin:0 12px 14px;background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:12px 14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
        <div style="display:flex;gap:5px;">
          ${['easy','medium','fancy'].map(b=>`
            <button onclick="set({kidsBudget:'${b}'})" style="padding:4px 10px;border-radius:16px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">
              ${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}
            </button>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;line-height:1;">−</button>
          <span style="font-size:16px;color:#f5e8cc;font-weight:bold;min-width:26px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;line-height:1;">+</button>
          <span style="font-size:10px;color:#d04080;">kids</span>
        </div>
      </div>
    </div>

    <!-- 5 CATEGORY BLOCKS — same collapsible style as Braai v33 -->
    <div style="padding:0 12px;display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">
      ${cats.map(cat=>`
        <div style="background:#1a0814;border:1px solid #2a1020;border-radius:12px;overflow:hidden;">
          <div onclick="set({kidsOpenCat:S.kidsOpenCat==='${cat.id}'?null:'${cat.id}'})"
            style="display:flex;align-items:center;justify-content:space-between;padding:13px 14px;cursor:pointer;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:22px;">${cat.emoji}</span>
              <div>
                <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">${cat.label}</div>
                <div style="font-size:10px;color:#703050;font-style:italic;">${cat.sub}</div>
              </div>
            </div>
            <div style="font-size:18px;color:#803060;transition:transform 0.2s;transform:${S.kidsOpenCat===cat.id?'rotate(180deg)':'rotate(0deg)'};">▾</div>
          </div>
          ${S.kidsOpenCat===cat.id ? kidsCatContent(cat.id, th, k, budget) : ''}
        </div>`).join('')}
    </div>

    <!-- ADD/DELETE SNACKS -->
    <div style="margin:0 12px 14px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px dashed #803060;border-radius:10px;padding:13px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:2px;">🍿 Add / Delete Snacks</div>
        <div style="font-size:10px;color:#803060;">12 reusable building blocks · scaled to ${k} kids</div>
      </div>
    </div>

    <!-- MY PLAN BUTTON -->
    ${thSel>0?`
    <div style="margin:0 12px 24px;">
      <div onclick="set({kidsScreen:'myplan'})" style="background:#2a0818;border:1px solid #803060;border-radius:10px;padding:13px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:#f070a0;">📋 My Plan — ${thSel} item${thSel>1?'s':''} selected</div>
        <div style="font-size:10px;color:#803060;margin-top:3px;">View shopping list, costs & summary</div>
      </div>
    </div>`:`
    <div style="margin:0 12px 24px;">
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:13px;text-align:center;opacity:0.5;">
        <div style="font-size:12px;color:#703050;">📋 My Plan — tick items above to build your list</div>
      </div>
    </div>`}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// CATEGORY CONTENT (renders inside collapsible)
// ─────────────────────────────────────────────────────────────────
function kidsCatContent(catId, th, k, budget){
  switch(catId){
    case 'savoury':  return kidsSavouryContent(th, k, budget);
    case 'sweet':    return kidsSweetContent(th, k, budget);
    case 'cake':     return kidsCakeContent(th, k, budget);
    case 'drinks':   return kidsDrinksContent(th, k, budget);
    case 'planner':  return kidsPlannerContent(th, k);
    default: return '';
  }
}

// ─────────────────────────────────────────────────────────────────
// SAVOURY BLOCK
// ─────────────────────────────────────────────────────────────────
function kidsSavouryContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  const budgetKey = budget||'easy';
  const recipes = th.recipes ? th.recipes.filter(r=>r.type==='savoury') : [];

  if(!recipes.length) return `<div style="padding:12px 14px 14px;font-size:11px;color:#703050;font-style:italic;">No savoury recipes for this theme yet.</div>`;

  return `<div style="padding:8px 12px 14px;">
    ${recipes.map(r=>{
      const isSel = sel.some(x=>x.id===r.name&&x.themeId===th.id);
      const cost = r.costEasy ? (budget==='fancy'?r.costFancy:budget==='medium'?r.costMedium:r.costEasy) : null;
      const kcalTotal = r.kcal ? Math.round(r.kcal * k) : null;
      return `
      <div style="background:#100810;border:1px solid ${isSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;margin-bottom:8px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div style="flex:1;">
            <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${r.name}</div>
            <div style="font-size:10px;color:#703050;margin-top:2px;">${r.per||''} per child · ${r.time||''}min · ~${r.kcal||''}kcal</div>
            ${cost?`<div style="font-size:10px;color:#d04080;margin-top:2px;">~R${Math.round(cost*k)} for ${k} kids</div>`:''}
          </div>
          <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='${r.name}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'${r.name}',themeId:'${th.id}',cat:'savoury',name:'${r.name}',kcal:${r.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
            style="width:28px;height:28px;border-radius:50%;border:2px solid ${isSel?'#d04080':'#3a1020'};background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
            ${isSel?'✓':''}
          </div>
        </div>
        <div onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='${r.name}'?null:'${r.name}'})" style="font-size:10px;color:#d04080;margin-top:8px;cursor:pointer;text-decoration:underline;">
          ${S.kidsOpenRecipe===r.name?'▲ Hide recipe':'▼ Show recipe'}
        </div>
        ${S.kidsOpenRecipe===r.name?`
        <div style="margin-top:8px;padding:10px;background:#1a0814;border-radius:8px;">
          <div style="font-size:10px;color:#906080;margin-bottom:6px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
          ${r.base12?Object.entries(r.base12).map(([key,val])=>{
            const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
            if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
              return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
            return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
          }).join(''):''}
          ${r.method?`<div style="font-size:10px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${r.method}</div>`:''}
        </div>`:''}
      </div>`}).join('')}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// SWEET BLOCK
// ─────────────────────────────────────────────────────────────────
function kidsSweetContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  const recipes = th.recipes ? th.recipes.filter(r=>r.type==='sweet'||r.type==='healthy') : [];

  if(!recipes.length) return `<div style="padding:12px 14px 14px;font-size:11px;color:#703050;font-style:italic;">No sweet recipes for this theme yet.</div>`;

  return `<div style="padding:8px 12px 14px;">
    ${recipes.map(r=>{
      const isSel = sel.some(x=>x.id===r.name&&x.themeId===th.id);
      const cost = r.costEasy ? (budget==='fancy'?r.costFancy:budget==='medium'?r.costMedium:r.costEasy) : null;
      return `
      <div style="background:#100810;border:1px solid ${isSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;margin-bottom:8px;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div style="flex:1;">
            <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${r.name}</div>
            <div style="font-size:10px;color:#703050;margin-top:2px;">${r.per||''} per child · ~${r.kcal||''}kcal</div>
            ${cost?`<div style="font-size:10px;color:#d04080;margin-top:2px;">~R${Math.round(cost*k)} for ${k} kids</div>`:''}
          </div>
          <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='${r.name}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'${r.name}',themeId:'${th.id}',cat:'sweet',name:'${r.name}',kcal:${r.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
            style="width:28px;height:28px;border-radius:50%;border:2px solid ${isSel?'#d04080':'#3a1020'};background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
            ${isSel?'✓':''}
          </div>
        </div>
        <div onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='${r.name}'?null:'${r.name}'})" style="font-size:10px;color:#d04080;margin-top:8px;cursor:pointer;text-decoration:underline;">
          ${S.kidsOpenRecipe===r.name?'▲ Hide recipe':'▼ Show recipe'}
        </div>
        ${S.kidsOpenRecipe===r.name?`
        <div style="margin-top:8px;padding:10px;background:#1a0814;border-radius:8px;">
          <div style="font-size:10px;color:#906080;margin-bottom:6px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
          ${r.base12?Object.entries(r.base12).map(([key,val])=>{
            const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
            if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
              return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
            return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
          }).join(''):''}
          ${r.method?`<div style="font-size:10px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${r.method}</div>`:''}
        </div>`:''}
      </div>`}).join('')}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// CAKE BLOCK
// ─────────────────────────────────────────────────────────────────
function kidsCakeContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  if(!th.cake) return `<div style="padding:12px 14px 14px;font-size:11px;color:#703050;font-style:italic;">No cake data for this theme yet.</div>`;

  const isSel = sel.some(x=>x.id==='cake_'+th.id&&x.themeId===th.id);
  const cost = th.cake.costEasy ? (budget==='fancy'?th.cake.costFancy:budget==='medium'?th.cake.costMedium:th.cake.costEasy) : null;

  return `<div style="padding:8px 12px 14px;">
    <div style="background:#100810;border:1px solid ${isSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${th.cake.name}</div>
          <div style="font-size:10px;color:#703050;margin-top:2px;">~${th.cake.kcal||''}kcal per slice</div>
          ${cost?`<div style="font-size:10px;color:#d04080;margin-top:2px;">~R${Math.round(cost*k)} for ${k} kids</div>`:''}
        </div>
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='cake_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'cake_${th.id}',themeId:'${th.id}',cat:'cake',name:'${th.cake.name}',kcal:${th.cake.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
          style="width:28px;height:28px;border-radius:50%;border:2px solid ${isSel?'#d04080':'#3a1020'};background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
          ${isSel?'✓':''}
        </div>
      </div>
      <div onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='cake_${th.id}'?null:'cake_${th.id}'})" style="font-size:10px;color:#d04080;margin-top:8px;cursor:pointer;text-decoration:underline;">
        ${S.kidsOpenRecipe==='cake_'+th.id?'▲ Hide recipe':'▼ Show recipe'}
      </div>
      ${S.kidsOpenRecipe==='cake_'+th.id?`
      <div style="margin-top:8px;padding:10px;background:#1a0814;border-radius:8px;">
        <div style="font-size:10px;color:#906080;margin-bottom:6px;">Scaled for <b style="color:#f070a0;">${k} kids</b>:</div>
        ${th.cake.base12?Object.entries(th.cake.base12).map(([key,val])=>{
          const m=val.match(/^([\d.]+)\s*(g|ml|L|kg)?(.*)$/i);
          if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
            return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
          return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
        }).join(''):''}
        ${th.cake.method?`<div style="font-size:10px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${th.cake.method}</div>`:''}
      </div>`:''}
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// DRINKS & CRISPS BLOCK
// ─────────────────────────────────────────────────────────────────
function kidsDrinksContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  const drinkType = S.kidsDrinkType||'storebought';
  const crispType = S.kidsCrispType||'regular';
  const crispPackets = Math.ceil(k/4);
  const veggieSticks = Math.round(k*40)+'g carrot/cucumber sticks';
  const isDrinkSel = sel.some(x=>x.id==='drink_'+th.id&&x.themeId===th.id);
  const isCrispSel = sel.some(x=>x.id==='crisps_'+th.id&&x.themeId===th.id);
  const drinkCost = th.drink ? (budget==='fancy'?th.drink.costFancy||8:budget==='medium'?th.drink.costMedium||6:th.drink.costEasy||4) : 5;
  const crispCost = crispType==='regular' ? crispPackets*22 : Math.round(k*3.5);

  return `<div style="padding:8px 12px 14px;">

    <!-- DRINK -->
    ${th.drink?`
    <div style="background:#100810;border:1px solid ${isDrinkSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;margin-bottom:10px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🥤 ${th.drink.name}</div>
          <div style="font-size:10px;color:#d04080;margin-top:2px;">~R${Math.round(drinkCost*k)} for ${k} kids</div>
        </div>
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='drink_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'drink_${th.id}',themeId:'${th.id}',cat:'drink',name:'${th.drink.name}',kcal:${th.drink.kcal||80},cost:${drinkCost}});set({kidsSelectedItems:[...s]})})()"
          style="width:28px;height:28px;border-radius:50%;border:2px solid ${isDrinkSel?'#d04080':'#3a1020'};background:${isDrinkSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
          ${isDrinkSel?'✓':''}
        </div>
      </div>
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <button onclick="set({kidsDrinkType:'storebought'})" style="padding:3px 9px;border-radius:12px;border:1px solid ${drinkType==='storebought'?'#d04080':'#3a1020'};background:${drinkType==='storebought'?'#2a0818':'transparent'};color:${drinkType==='storebought'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Store-bought</button>
        <button onclick="set({kidsDrinkType:'made'})" style="padding:3px 9px;border-radius:12px;border:1px solid ${drinkType==='made'?'#d04080':'#3a1020'};background:${drinkType==='made'?'#2a0818':'transparent'};color:${drinkType==='made'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Make it</button>
      </div>
      <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b> = ${k*250}ml total:</div>
      ${drinkType==='storebought'?`<div style="font-size:11px;color:#f5e8cc;">${th.drink.storebought||'2L cool drink + ice'}</div>`:
        th.drink.base12?Object.entries(th.drink.base12).map(([key,val])=>{
          const m=val.match(/^([\d.]+)\s*(L|ml|g)?(.*)$/i);
          if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
            return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
          return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
        }).join('')+'<div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">'+(th.drink.method||'')+'</div>':''}
      <div style="font-size:9px;color:#703050;margin-top:4px;">~${th.drink.kcal||80} kcal per child</div>
    </div>`:'' }

    <!-- CRISPS & DIPS -->
    <div style="background:#100810;border:1px solid ${isCrispSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🥔 Crisps & Dips</div>
          <div style="font-size:10px;color:#d04080;margin-top:2px;">~R${crispCost} for ${k} kids</div>
        </div>
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='crisps_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'crisps_${th.id}',themeId:'${th.id}',cat:'crisps',name:'Crisps & Dips',kcal:120,cost:${crispCost/k}});set({kidsSelectedItems:[...s]})})()"
          style="width:28px;height:28px;border-radius:50%;border:2px solid ${isCrispSel?'#d04080':'#3a1020'};background:${isCrispSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
          ${isCrispSel?'✓':''}
        </div>
      </div>
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <button onclick="set({kidsCrispType:'regular'})" style="padding:3px 9px;border-radius:12px;border:1px solid ${crispType==='regular'?'#d04080':'#3a1020'};background:${crispType==='regular'?'#2a0818':'transparent'};color:${crispType==='regular'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Regular</button>
        <button onclick="set({kidsCrispType:'healthy'})" style="padding:3px 9px;border-radius:12px;border:1px solid ${crispType==='healthy'?'#d04080':'#3a1020'};background:${crispType==='healthy'?'#2a0818':'transparent'};color:${crispType==='healthy'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Healthy</button>
      </div>
      ${crispType==='regular'?`
        <div style="font-size:10px;color:#c08090;margin-bottom:2px;">· Crisps: <b style="color:#f5e8cc;">${crispPackets} × 120g packet${crispPackets>1?'s':''}</b> <span style="color:#703050;">(1 pack per 4 kids)</span></div>
        <div style="font-size:10px;color:#c08090;margin-bottom:6px;">· Dip options: French onion · Cheese & chive · Guacamole · Salsa</div>
        <div style="font-size:10px;color:#806070;font-style:italic;">Quick dip: 250ml sour cream + 1 packet French onion soup powder.</div>
      `:`
        <div style="font-size:10px;color:#c08090;margin-bottom:2px;">· Swap for: <b style="color:#f5e8cc;">${veggieSticks}</b> + popcorn + rice cakes</div>
        <div style="font-size:10px;color:#c08090;margin-bottom:6px;">· Healthy dip: Hummus · Yoghurt dip · Tzatziki</div>
        <div style="font-size:10px;color:#806070;font-style:italic;">Quick dip: 250ml plain yogurt + garlic clove + lemon juice + dill.</div>
      `}
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// PARTY PLANNER BLOCK
// ─────────────────────────────────────────────────────────────────
function kidsPlannerContent(th, k){
  return `<div style="padding:8px 12px 14px;">

    <!-- DECOR -->
    <div style="background:#100810;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:10px;">
      <div onclick="set({kidsShowDecor:!S.kidsShowDecor})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🎈 Decor Ideas</div>
        <div style="font-size:11px;color:#d04080;">${S.kidsShowDecor?'▲ Hide':'▼ Show'}</div>
      </div>
      ${S.kidsShowDecor&&th.decor?`
      <div style="margin-top:10px;">
        <div style="font-size:10px;color:#f070a0;margin-bottom:4px;">🌿 Budget Decor</div>
        ${th.decor.budget.map(d=>`<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${d}</div>`).join('')}
        <div style="font-size:10px;color:#f070a0;margin-top:8px;margin-bottom:4px;">✨ Styled Decor</div>
        ${th.decor.styled.map(d=>`<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${d}</div>`).join('')}
        ${th.decor.photospot?`
        <div style="margin-top:8px;padding:8px;background:#1a0814;border-radius:6px;">
          <div style="font-size:10px;color:#f070a0;margin-bottom:2px;">📸 Photo Spot</div>
          <div style="font-size:10px;color:#c08090;">${th.decor.photospot}</div>
        </div>`:''}
        ${th.zones?`
        <div style="margin-top:8px;">
          <div style="font-size:10px;color:#f070a0;margin-bottom:4px;">🗺️ Zone Layout</div>
          ${th.zones.map(z=>`<div style="font-size:10px;color:#c08090;margin-bottom:2px;">${z}</div>`).join('')}
        </div>`:''}
      </div>`:''}
    </div>

    <!-- PREP TIMELINE -->
    <div style="background:#100810;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:10px;">
      <div onclick="set({kidsShowTimeline:!S.kidsShowTimeline})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">⏱️ Prep Timeline</div>
        <div style="font-size:11px;color:#d04080;">${S.kidsShowTimeline?'▲ Hide':'▼ Show'}</div>
      </div>
      ${S.kidsShowTimeline&&th.timeline?`
      <div style="margin-top:10px;">
        <div style="display:flex;gap:8px;margin-bottom:8px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:#f070a0;">2 Days Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.two}</div></div></div>
        <div style="display:flex;gap:8px;margin-bottom:8px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:#f070a0;">1 Day Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.one}</div></div></div>
        <div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:#f070a0;">Party Morning</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.morning}</div></div></div>
      </div>`:''}
    </div>

    <!-- GAMES -->
    ${th.games?`
    <div style="background:#100810;border:1px solid #2a1020;border-radius:10px;padding:12px;">
      <div style="font-size:12px;color:#f5e8cc;font-weight:bold;margin-bottom:6px;">🎮 Party Games</div>
      <div style="font-size:10px;color:#c08090;line-height:1.6;">${th.games}</div>
    </div>`:''}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// MY PLAN VIEW
// ─────────────────────────────────────────────────────────────────
function kidsMyPlanHTML(){
  const k   = S.kidsCount||12;
  const sel = S.kidsSelectedItems||[];
  const themeId = S.kidsTheme;

  if(!sel.length) return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;padding:20px;">
    <div style="font-size:11px;color:#d04080;cursor:pointer;margin-bottom:16px;" onclick="set({kidsScreen:'theme-detail'})">← Back</div>
    <div style="text-align:center;padding:40px 0;color:#703050;font-style:italic;">No items selected yet.<br>Go back and tick items to build your plan.</div>
  </div>`;

  // Group by category
  const groups = {};
  sel.forEach(item=>{
    if(!groups[item.cat]) groups[item.cat]=[];
    groups[item.cat].push(item);
  });

  const totalCost  = sel.reduce((a,x)=>a+(x.cost||0)*k,0);
  const totalKcal  = sel.reduce((a,x)=>a+(x.kcal||0),0);
  const catLabels  = {savoury:'🥩 Savoury',sweet:'🍬 Sweet',cake:'🎂 Cake',drink:'🥤 Drinks',crisps:'🥔 Crisps & Dips'};

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">
    <div style="background:#1a0814;border-bottom:1px solid #3a1020;padding:16px 16px 12px;">
      <div style="font-size:10px;color:#d04080;cursor:pointer;margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;" onclick="set({kidsScreen:'theme-detail'})">← Back to Theme</div>
      <div style="font-size:20px;color:#f5e8cc;">📋 My Party Plan</div>
      <div style="font-size:11px;color:#803060;margin-top:2px;">${k} kids · ${sel.length} item${sel.length>1?'s':''} selected</div>
    </div>

    <div style="padding:14px 12px;">

      <!-- COST SUMMARY BOX -->
      <div style="background:#1a0814;border:1px solid #803060;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">💰 Cost Summary</div>
          <div style="font-size:16px;color:#f070a0;font-weight:bold;">~R${Math.round(totalCost)}</div>
        </div>
        <div style="font-size:10px;color:#c08090;">Per child: ~R${Math.round(totalCost/k)} · ~${totalKcal} kcal per child</div>
        <div style="height:1px;background:#3a1020;margin:10px 0;"></div>
        ${Object.entries(groups).map(([cat,items])=>`
          <div style="display:flex;justify-content:space-between;font-size:10px;color:#906080;margin-bottom:3px;">
            <span>${catLabels[cat]||cat}</span>
            <span>R${Math.round(items.reduce((a,x)=>a+(x.cost||0)*k,0))}</span>
          </div>`).join('')}
      </div>

      <!-- ITEMS BY CATEGORY -->
      ${Object.entries(groups).map(([cat,items])=>`
        <div style="margin-bottom:12px;">
          <div style="font-size:11px;color:#d04080;margin-bottom:6px;letter-spacing:0.5px;">${catLabels[cat]||cat}</div>
          ${items.map(item=>`
            <div style="background:#1a0814;border:1px solid #2a1020;border-radius:8px;padding:10px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:11px;color:#f5e8cc;">${item.name}</div>
                <div style="font-size:10px;color:#703050;margin-top:1px;">R${Math.round((item.cost||0)*k)} · ${item.kcal||0} kcal/child</div>
              </div>
              <div onclick="(function(){var s=S.kidsSelectedItems||[];set({kidsSelectedItems:s.filter(x=>!(x.id==='${item.id}'&&x.themeId==='${item.themeId}'))})})()"
                style="font-size:10px;color:#803060;cursor:pointer;padding:4px 8px;border:1px solid #3a1020;border-radius:8px;">✕ Remove</div>
            </div>`).join('')}
        </div>`).join('')}

      <!-- SHOPPING LIST -->
      <div style="background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:13px;color:#f5e8cc;font-weight:bold;margin-bottom:10px;">🛒 Shopping List</div>
        <div style="font-size:10px;color:#703050;font-style:italic;margin-bottom:8px;">Scaled for ${k} kids · +10% buffer included</div>
        ${sel.map(item=>`
          <div style="padding:6px 0;border-bottom:1px solid #2a1020;">
            <div style="font-size:10px;color:#d04080;margin-bottom:3px;">${catLabels[item.cat]||item.cat} — ${item.name}</div>
            ${item.ingredients ? item.ingredients.map(ing=>`<div style="font-size:10px;color:#c08090;margin-bottom:1px;">· ${ing}</div>`).join('') :
              `<div style="font-size:10px;color:#c08090;">· See recipe for scaled quantities</div>`}
          </div>`).join('')}
      </div>

      <!-- ACTIONS -->
      <div style="display:flex;gap:8px;margin-bottom:24px;">
        <button style="flex:1;padding:10px;border-radius:10px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;font-family:Georgia,serif;">
          📤 Share Plan
        </button>
        <button style="flex:1;padding:10px;border-radius:10px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;font-family:Georgia,serif;">
          ⬇️ Download (Pro)
        </button>
      </div>

      <!-- BOTTOM NAV — same as Braai v33 -->
      <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid #2a1020;font-size:11px;">
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'theme-detail'})">← Back</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'themes',kidsTheme:null})">All Themes</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({activeSection:'home'})">Home</span>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// ADD / DELETE SNACKS (was "Master Snacks")
// ─────────────────────────────────────────────────────────────────
function kidsMasterSnacksHTML(k){
  const sel = S.kidsSelectedItems||[];
  const tc = {savoury:'#e0a060',sweet:'#e060a0',healthy:'#60c080'};
  const snacks = typeof MASTER_SNACKS !== 'undefined' ? MASTER_SNACKS : [];

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">
    <div style="background:#1a0814;border-bottom:1px solid #803060;padding:16px 16px 12px;">
      <div style="font-size:10px;color:#d04080;cursor:pointer;margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;" onclick="set({kidsShowMasterSnacks:false})">← Back</div>
      <div style="font-size:20px;color:#f5e8cc;">🍿 Add / Delete Snacks</div>
      <p style="font-size:11px;color:#803060;font-style:italic;margin:4px 0 0;">12 reusable building blocks · all scaled to <b style="color:#f070a0;">${k} kids</b></p>
    </div>
    <div style="padding:14px 12px;">
      ${snacks.length ? snacks.map(s=>{
        const isSel = sel.some(x=>x.id==='snack_'+s.id&&x.themeId==='__snack__');
        const cost = s.costEasy ? s.costEasy : null;
        return `
        <div style="background:#1a0814;border:1px solid ${isSel?'#d04080':'#2a1020'};border-radius:10px;padding:12px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
            <div style="flex:1;">
              <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${s.id}. ${s.name}</div>
              <div style="font-size:9px;padding:2px 7px;border-radius:8px;background:#1a0010;color:${tc[s.type]||'#c08090'};border:1px solid ${tc[s.type]||'#3a1020'};display:inline-block;margin-top:3px;">${s.type}</div>
              ${cost?`<div style="font-size:10px;color:#d04080;margin-top:3px;">~R${Math.round(cost*k)} for ${k} kids</div>`:''}
            </div>
            <div onclick="(function(){var s2=S.kidsSelectedItems||[];var idx=s2.findIndex(x=>x.id==='snack_${s.id}'&&x.themeId==='__snack__');if(idx>=0)s2.splice(idx,1);else s2.push({id:'snack_${s.id}',themeId:'__snack__',cat:'savoury',name:'${s.name}',kcal:${s.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s2]})})()"
              style="width:28px;height:28px;border-radius:50%;border:2px solid ${isSel?'#d04080':'#3a1020'};background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;">
              ${isSel?'✓':''}
            </div>
          </div>
          <div style="margin-top:8px;padding:8px;background:#100810;border-radius:6px;">
            <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
            ${s.base12?Object.entries(s.base12).map(([key,val])=>{
              const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
              if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
                return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
              return `<div style="font-size:10px;color:#c08090;margin-bottom:2px;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
            }).join(''):''}
            <div style="font-size:10px;color:#703050;margin-top:5px;">Per person: ${s.perPerson||''} · ~${s.kcal||'?'} kcal</div>
          </div>
        </div>`}).join('') : `<div style="font-size:11px;color:#703050;font-style:italic;text-align:center;padding:40px 0;">No snacks data loaded yet.</div>`}

      <!-- PRO CTA -->
      <div style="background:#1a0020;border:1px solid #601040;border-radius:10px;padding:14px;margin-bottom:24px;text-align:center;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:4px;">📋 Add to Shopping List</div>
        <div style="font-size:10px;color:#703050;margin-bottom:10px;">Select snacks and generate a combined shopping list</div>
        <button style="padding:8px 20px;border-radius:20px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;">🔒 Pro Feature</button>
      </div>

      <!-- BOTTOM NAV -->
      <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid #2a1020;font-size:11px;">
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsShowMasterSnacks:false})">← Back</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'myplan'})">My Plan</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({activeSection:'home'})">Home</span>
      </div>
    </div>
  </div>`;
}
