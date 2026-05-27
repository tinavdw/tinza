// ── KIDDIES BIRTHDAY PARTIES — rebuilt on Braai v33 template ─────

function kidsPartyHTML(){
  const k      = S.kidsCount  || 12;
  const budget = S.kidsBudget || 'easy';
  const themeId = S.kidsTheme;
  const kscreen = S.kidsScreen || 'themes';

  if(S.kidsShowMasterSnacks) return kidsMasterSnacksHTML(k);
  if(kscreen === 'myplan') return kidsMyPlanHTML();
  if(themeId && S.kidsActiveCat) return kidsCategoryPageHTML(themeId, S.kidsActiveCat, k, budget);
  if(themeId && kscreen === 'theme-detail') return kidsThemeDetailHTML(themeId, k, budget);
  return kidsStep1HTML(k, budget);
}

// ─────────────────────────────────────────────────────────────────
// STEP 1 — THEME GRID  (compact cards, same size as Braai boxes)
// ─────────────────────────────────────────────────────────────────
function kidsStep1HTML(k, budget){
  const total = (S.kidsSelectedItems||[]).length;
  const themes = typeof KIDS_THEMES !== 'undefined' ? KIDS_THEMES : (typeof KIDS_THEMES_DATA !== 'undefined' ? KIDS_THEMES_DATA : []);
  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">

    <!-- HEADER — photo style, same height as Braai -->
    <div style="position:relative;height:155px;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#3d0c1f 0%,#1a0814 60%,#0f0e0c 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 40%,rgba(15,14,12,0.95) 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:14px 16px 12px;">
        <div style="font-size:10px;color:#d04080;margin-bottom:4px;cursor:pointer;letter-spacing:1px;text-transform:uppercase;" onclick="set({eventTab:'bigcooking'})">← Events</div>
        <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;margin:0 0 2px;">🎂 Kiddies Birthday Parties</h1>
        <p style="font-size:11px;color:#803060;font-style:italic;margin:0;">12 themes · 4 to 50 kids · Easy, Medium or Fancy</p>
      </div>
    </div>

    <!-- ONE CONTROLS BOX — how it works left, kids ± right -->
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
        <b style="color:#f070a0;">Pick a theme</b> → pick a category → tap any recipe to see scaled ingredients + method.<br>
        <b style="color:#f070a0;">Tick items</b> → they land in My Plan with shopping list and cost. Tap outside to close.
      </div>` : ''}
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${['easy','medium','fancy'].map(b=>`
          <button onclick="set({kidsBudget:'${b}'})" style="padding:5px 14px;border-radius:20px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:11px;cursor:pointer;">
            ${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}
          </button>`).join('')}
        ${total>0?`<div style="margin-left:auto;font-size:11px;color:#f070a0;cursor:pointer;padding:5px 10px;border:1px solid #803060;border-radius:20px;background:#2a0818;" onclick="set({kidsScreen:'myplan'})">📋 My Plan (${total})</div>`:''}
      </div>
    </div>

    <!-- THEME GRID — same compact size as Braai boxes, 3 col -->
    <div style="padding:0 12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;">
      ${themes.map(th=>`
        <div onclick="set({kidsTheme:'${th.id}',kidsScreen:'theme-detail',kidsActiveCat:null})"
          style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px 6px;cursor:pointer;text-align:center;"
          onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='#2a1020'">
          <div style="font-size:26px;margin-bottom:4px;">${th.emoji}</div>
          <div style="font-size:11px;color:#f5e8cc;font-weight:bold;line-height:1.3;">${th.name}</div>
        </div>`).join('')}
    </div>

    <!-- ADD/DELETE SNACKS dashed box -->
    <div style="margin:0 12px 24px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px dashed #803060;border-radius:10px;padding:12px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:2px;">🍿 Add / Delete Snacks</div>
        <div style="font-size:11px;color:#803060;">12 reusable building blocks · scaled to ${k} kids</div>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// THEME DETAIL — compact category boxes like Braai step 2 boxes
// ─────────────────────────────────────────────────────────────────
function kidsThemeDetailHTML(themeId, k, budget){
  const themes = typeof KIDS_THEMES !== 'undefined' ? KIDS_THEMES : (typeof KIDS_THEMES_DATA !== 'undefined' ? KIDS_THEMES_DATA : []);
  const th = themes.find(t=>t.id===themeId);
  if(!th) return '<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>';

  const cats = [
    { id:'savoury', emoji:'🥩', label:'Savoury',         sub:'Mains & hot bites' },
    { id:'sweet',   emoji:'🍬', label:'Sweet',            sub:'Treats & sweets' },
    { id:'cake',    emoji:'🎂', label:'Cake',             sub:'Birthday cake + icing' },
    { id:'drinks',  emoji:'🧃', label:'Drinks & Crisps',  sub:'Drinks, crisps & dips' },
    { id:'planner', emoji:'🎈', label:'Party Planner',    sub:'Decor, games & timeline' },
  ];

  const sel = S.kidsSelectedItems||[];
  const thSel = sel.filter(x=>x.themeId===themeId).length;

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">

    <!-- HEADER -->
    <div style="position:relative;height:140px;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,${th.colours&&th.colours[0]?th.colours[0]+'44':'#3d0c1f'} 0%,#1a0814 70%,#0f0e0c 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 30%,rgba(15,14,12,0.97) 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 16px 10px;">
        <div style="font-size:10px;color:#d04080;cursor:pointer;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;" onclick="set({kidsScreen:'themes',kidsTheme:null})">← All Themes</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:28px;">${th.emoji}</span>
          <div>
            <div style="font-size:18px;color:#f5e8cc;">${th.name}</div>
            <div style="font-size:10px;color:#a07080;font-style:italic;">${th.vibe||''}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ONE CONTROLS BOX — budget + kids count -->
    <div style="margin:0 12px 12px;background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:10px 12px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
        <div style="display:flex;gap:5px;">
          ${['easy','medium','fancy'].map(b=>`
            <button onclick="set({kidsBudget:'${b}'})" style="padding:4px 10px;border-radius:16px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">
              ${{easy:'🌿 Easy',medium:'🎈 Med',fancy:'✨ Fancy'}[b]}
            </button>`).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;line-height:1;">−</button>
          <span style="font-size:16px;color:#f5e8cc;font-weight:bold;min-width:24px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;line-height:1;">+</button>
          <span style="font-size:10px;color:#d04080;">kids</span>
        </div>
      </div>
    </div>

    <!-- WHAT ARE YOU PLANNING? — same label + 3-col grid as Braai -->
    <div style="padding:0 12px;margin-bottom:4px;">
      <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">WHAT ARE YOU PLANNING?</div>
    </div>
    <div style="padding:0 12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px;">
      ${cats.map(cat=>`
        <div onclick="set({kidsActiveCat:'${cat.id}'})"
          style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:14px 6px;cursor:pointer;text-align:center;"
          onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='#2a1020'">
          <div style="font-size:26px;margin-bottom:5px;">${cat.emoji}</div>
          <div style="font-size:11px;color:#f5e8cc;font-weight:bold;line-height:1.3;">${cat.label}</div>
          <div style="font-size:9px;color:#703050;margin-top:2px;">${cat.sub}</div>
        </div>`).join('')}
      <!-- My Plan box — like Braai -->
      <div onclick="set({kidsScreen:'myplan'})"
        style="background:${thSel>0?'#2a0818':'#1a0814'};border:${thSel>0?'2px solid #d04080':'1px solid #2a1020'};border-radius:10px;padding:14px 6px;cursor:pointer;text-align:center;"
        onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='${thSel>0?'#d04080':'#2a1020'}'">
        <div style="font-size:26px;margin-bottom:5px;">📋</div>
        <div style="font-size:11px;color:${thSel>0?'#f070a0':'#f5e8cc'};font-weight:bold;line-height:1.3;">My Plan</div>
        <div style="font-size:9px;color:#703050;margin-top:2px;">${thSel>0?thSel+' item'+(thSel>1?'s':'')+ ' · Cost · Shopping':'Quantities · Cost · Shopping'}</div>
      </div>
    </div>

    <!-- ADD/DELETE SNACKS -->
    <div style="margin:8px 12px 24px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px dashed #803060;border-radius:10px;padding:12px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:2px;">🍿 Add / Delete Snacks</div>
        <div style="font-size:11px;color:#803060;">12 reusable building blocks · scaled to ${k} kids</div>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// CATEGORY PAGE — header + compact category pills + recipe list like Braai
// ─────────────────────────────────────────────────────────────────
function kidsCategoryPageHTML(themeId, catId, k, budget){
  const themes = typeof KIDS_THEMES !== 'undefined' ? KIDS_THEMES : (typeof KIDS_THEMES_DATA !== 'undefined' ? KIDS_THEMES_DATA : []);
  const th = themes.find(t=>t.id===themeId);
  if(!th) return '<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>';

  const cats = [
    { id:'savoury', emoji:'🥩', label:'Savoury' },
    { id:'sweet',   emoji:'🍬', label:'Sweet' },
    { id:'cake',    emoji:'🎂', label:'Cake' },
    { id:'drinks',  emoji:'🧃', label:'Drinks & Crisps' },
    { id:'planner', emoji:'🎈', label:'Party Planner' },
  ];

  const sel = S.kidsSelectedItems||[];
  const thSel = sel.filter(x=>x.themeId===themeId).length;
  const activeCat = cats.find(c=>c.id===catId)||{emoji:'',label:''};

  let catContent = '';
  switch(catId){
    case 'savoury':  catContent = kidsSavouryContent(th, k, budget); break;
    case 'sweet':    catContent = kidsSweetContent(th, k, budget); break;
    case 'cake':     catContent = kidsCakeContent(th, k, budget); break;
    case 'drinks':   catContent = kidsDrinksContent(th, k, budget); break;
    case 'planner':  catContent = kidsPlannerContent(th, k); break;
  }

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">

    <!-- HEADER — same as Braai step header -->
    <div style="background:#1a0814;border-bottom:1px solid #3a1020;padding:12px 16px 10px;">
      <div style="font-size:10px;color:#d04080;cursor:pointer;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;" onclick="set({kidsActiveCat:null})">← ${th.name}</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="font-size:22px;">${activeCat.emoji}</span>
        <div>
          <div style="font-size:16px;color:#f5e8cc;font-weight:bold;">Choose ${activeCat.label}</div>
          <div style="font-size:10px;color:#803060;">scaled for ${k} kids · ${budget} budget</div>
        </div>
      </div>

      <!-- How portion size works — same collapsible as Braai -->
      <div style="margin-bottom:8px;">
        <button onclick="set({kidsShowPortionInfo:!S.kidsShowPortionInfo})"
          style="background:#1a0820;border:1px solid #3a1020;border-radius:8px;padding:6px 12px;font-size:11px;color:#d04080;cursor:pointer;width:100%;text-align:left;">
          ${S.kidsShowPortionInfo?'▲':'▼'} ⚖️ How portion size works
        </button>
        ${S.kidsShowPortionInfo?`
        <div style="padding:10px;background:#100810;border:1px solid #3a1020;border-radius:0 0 8px 8px;font-size:11px;color:#c08090;line-height:1.7;">
          All quantities scale automatically as you add more dishes — the more you add, the smaller each individual portion, keeping total food per child constant.
        </div>`:''}
      </div>

      <!-- CATEGORY PILLS — like Braai's Beef / Pork / Lamb etc. -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${cats.map(cat=>{
          const isActive = cat.id===catId;
          return `<button onclick="set({kidsActiveCat:'${cat.id}'})"
            style="padding:5px 12px;border-radius:20px;border:1px solid ${isActive?'#d04080':'#3a1020'};background:${isActive?'#2a0818':'transparent'};color:${isActive?'#f070a0':'#703050'};font-size:11px;cursor:pointer;white-space:nowrap;">
            ${cat.emoji} ${cat.label}
          </button>`;
        }).join('')}
      </div>
    </div>

    <!-- CONTROLS: budget + kids count in one compact row -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;background:#140010;border-bottom:1px solid #2a1020;">
      <div style="display:flex;gap:4px;">
        ${['easy','medium','fancy'].map(b=>`
          <button onclick="set({kidsBudget:'${b}'})" style="padding:3px 8px;border-radius:14px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">
            ${{easy:'🌿 Easy',medium:'🎈 Med',fancy:'✨ Fancy'}[b]}
          </button>`).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:22px;height:22px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:13px;cursor:pointer;line-height:1;">−</button>
        <span style="font-size:14px;color:#f5e8cc;font-weight:bold;min-width:20px;text-align:center;">${k}</span>
        <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:22px;height:22px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:13px;cursor:pointer;line-height:1;">+</button>
        <span style="font-size:10px;color:#d04080;">kids</span>
      </div>
    </div>

    <!-- CATEGORY CONTENT -->
    <div style="padding:0 12px;">
      ${catContent}
    </div>

    <!-- BOTTOM NAV — Back | My Plan | Home — same as Braai -->
    <div style="display:flex;justify-content:space-around;padding:14px 0 24px;border-top:1px solid #2a1020;margin:8px 12px 0;font-size:11px;">
      <span style="color:#d04080;cursor:pointer;" onclick="set({kidsActiveCat:null})">← Back</span>
      <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'myplan'})">📋 My Plan${thSel>0?' ('+thSel+')':''}</span>
      <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'themes',kidsTheme:null,kidsActiveCat:null})">All Themes</span>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// SAVOURY — recipe list exactly like Braai (checkbox + name + subtitle + Recipe →)
// ─────────────────────────────────────────────────────────────────
function kidsSavouryContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  const recipes = th.recipes ? th.recipes.filter(r=>r.type==='savoury') : [];
  if(!recipes.length) return `<div style="padding:16px 0;font-size:11px;color:#703050;font-style:italic;">No savoury recipes for this theme yet.</div>`;

  return `
  <div style="margin-top:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">🥩 SAVOURY — ${recipes.length} OPTIONS</div>
    ${recipes.map(r=>{
      const isSel = sel.some(x=>x.id===r.name&&x.themeId===th.id);
      const cost = r.costEasy ? (budget==='fancy'?r.costFancy:budget==='medium'?r.costMedium:r.costEasy) : null;
      return `
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:10px;">
          <!-- CHECKBOX — same as Braai -->
          <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='${r.name}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'${r.name}',themeId:'${th.id}',cat:'savoury',name:'${r.name}',kcal:${r.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
            style="width:22px;height:22px;border:2px solid ${isSel?'#d04080':'#503050'};border-radius:4px;background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
            ${isSel?'✓':''}
          </div>
          <!-- NAME + SUBTITLE -->
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">${r.name}</div>
            <div style="font-size:11px;color:#803060;margin-top:1px;">${r.per||''} per child · ${r.time||''}min · ~${r.kcal||''}kcal${cost?` · ~R${Math.round(cost*k)}`:''}${r.note?` · ${r.note}`:''}</div>
          </div>
          <!-- RECIPE BUTTON — same orange style as Braai -->
          <button onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='${r.name}'?null:'${r.name}'})"
            style="flex-shrink:0;padding:6px 12px;background:#c06010;border:none;border-radius:6px;color:#fff;font-size:11px;cursor:pointer;white-space:nowrap;">
            ${S.kidsOpenRecipe===r.name?'▲ Hide':'Recipe →'}
          </button>
        </div>
        ${S.kidsOpenRecipe===r.name?`
        <div style="margin-top:10px;padding:10px;background:#100810;border-radius:8px;border-top:1px solid #2a1020;">
          <div style="font-size:10px;color:#906080;margin-bottom:6px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
          ${r.base12?Object.entries(r.base12).map(([key,val])=>{
            const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
            if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
              return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
            return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
          }).join(''):''}
          ${r.method?`<div style="font-size:11px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${r.method}</div>`:''}
        </div>`:''}
      </div>`;}).join('')}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// SWEET — same Braai recipe list style
// ─────────────────────────────────────────────────────────────────
function kidsSweetContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  const recipes = th.recipes ? th.recipes.filter(r=>r.type==='sweet'||r.type==='healthy') : [];
  if(!recipes.length) return `<div style="padding:16px 0;font-size:11px;color:#703050;font-style:italic;">No sweet recipes for this theme yet.</div>`;

  return `
  <div style="margin-top:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">🍬 SWEET — ${recipes.length} OPTIONS</div>
    ${recipes.map(r=>{
      const isSel = sel.some(x=>x.id===r.name&&x.themeId===th.id);
      const cost = r.costEasy ? (budget==='fancy'?r.costFancy:budget==='medium'?r.costMedium:r.costEasy) : null;
      return `
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='${r.name}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'${r.name}',themeId:'${th.id}',cat:'sweet',name:'${r.name}',kcal:${r.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
            style="width:22px;height:22px;border:2px solid ${isSel?'#d04080':'#503050'};border-radius:4px;background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
            ${isSel?'✓':''}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">${r.name}</div>
            <div style="font-size:11px;color:#803060;margin-top:1px;">${r.per||''} per child · ~${r.kcal||''}kcal${cost?` · ~R${Math.round(cost*k)}`:''}${r.note?` · ${r.note}`:''}</div>
          </div>
          <button onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='${r.name}'?null:'${r.name}'})"
            style="flex-shrink:0;padding:6px 12px;background:#c06010;border:none;border-radius:6px;color:#fff;font-size:11px;cursor:pointer;white-space:nowrap;">
            ${S.kidsOpenRecipe===r.name?'▲ Hide':'Recipe →'}
          </button>
        </div>
        ${S.kidsOpenRecipe===r.name?`
        <div style="margin-top:10px;padding:10px;background:#100810;border-radius:8px;border-top:1px solid #2a1020;">
          <div style="font-size:10px;color:#906080;margin-bottom:6px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
          ${r.base12?Object.entries(r.base12).map(([key,val])=>{
            const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
            if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
              return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
            return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
          }).join(''):''}
          ${r.method?`<div style="font-size:11px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${r.method}</div>`:''}
        </div>`:''}
      </div>`;}).join('')}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// CAKE
// ─────────────────────────────────────────────────────────────────
function kidsCakeContent(th, k, budget){
  const sel = S.kidsSelectedItems||[];
  if(!th.cake) return `<div style="padding:16px 0;font-size:11px;color:#703050;font-style:italic;">No cake data for this theme yet.</div>`;
  const isSel = sel.some(x=>x.id==='cake_'+th.id&&x.themeId===th.id);
  const cost = th.cake.costEasy ? (budget==='fancy'?th.cake.costFancy:budget==='medium'?th.cake.costMedium:th.cake.costEasy) : null;

  return `
  <div style="margin-top:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">🎂 CAKE</div>
    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='cake_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'cake_${th.id}',themeId:'${th.id}',cat:'cake',name:'${th.cake.name}',kcal:${th.cake.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s]})})()"
          style="width:22px;height:22px;border:2px solid ${isSel?'#d04080':'#503050'};border-radius:4px;background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
          ${isSel?'✓':''}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">${th.cake.name}</div>
          <div style="font-size:11px;color:#803060;margin-top:1px;">~${th.cake.kcal||''}kcal per slice${cost?` · ~R${Math.round(cost*k)}`:''}
          </div>
        </div>
        <button onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='cake_${th.id}'?null:'cake_${th.id}'})"
          style="flex-shrink:0;padding:6px 12px;background:#c06010;border:none;border-radius:6px;color:#fff;font-size:11px;cursor:pointer;white-space:nowrap;">
          ${S.kidsOpenRecipe==='cake_'+th.id?'▲ Hide':'Recipe →'}
        </button>
      </div>
      ${S.kidsOpenRecipe==='cake_'+th.id?`
      <div style="margin-top:10px;padding:10px;background:#100810;border-radius:8px;border-top:1px solid #2a1020;">
        <div style="font-size:10px;color:#906080;margin-bottom:6px;">Scaled for <b style="color:#f070a0;">${k} kids</b>:</div>
        ${th.cake.base12?Object.entries(th.cake.base12).map(([key,val])=>{
          const m=val.match(/^([\d.]+)\s*(g|ml|L|kg)?(.*)$/i);
          if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
            return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
          return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
        }).join(''):''}
        ${th.cake.method?`<div style="font-size:11px;color:#806070;margin-top:8px;font-style:italic;line-height:1.6;">${th.cake.method}</div>`:''}
      </div>`:''}
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// DRINKS & CRISPS
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

  return `
  <div style="margin-top:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">🧃 DRINKS & CRISPS</div>

    ${th.drink?`
    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='drink_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'drink_${th.id}',themeId:'${th.id}',cat:'drink',name:'${th.drink.name}',kcal:${th.drink.kcal||80},cost:${drinkCost}});set({kidsSelectedItems:[...s]})})()"
          style="width:22px;height:22px;border:2px solid ${isDrinkSel?'#d04080':'#503050'};border-radius:4px;background:${isDrinkSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
          ${isDrinkSel?'✓':''}
        </div>
        <div style="flex:1;">
          <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">🥤 ${th.drink.name}</div>
          <div style="font-size:11px;color:#803060;">~R${Math.round(drinkCost*k)} for ${k} kids · ~${th.drink.kcal||80}kcal/child</div>
        </div>
      </div>
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <button onclick="set({kidsDrinkType:'storebought'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${drinkType==='storebought'?'#d04080':'#3a1020'};background:${drinkType==='storebought'?'#2a0818':'transparent'};color:${drinkType==='storebought'?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">Store-bought</button>
        <button onclick="set({kidsDrinkType:'made'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${drinkType==='made'?'#d04080':'#3a1020'};background:${drinkType==='made'?'#2a0818':'transparent'};color:${drinkType==='made'?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">Make it</button>
      </div>
      <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b> = ${k*250}ml total:</div>
      ${drinkType==='storebought'?`<div style="font-size:11px;color:#f5e8cc;">${th.drink.storebought||'2L cool drink + ice'}</div>`:
        (th.drink.base12?Object.entries(th.drink.base12).map(([key,val])=>{
          const m=val.match(/^([\d.]+)\s*(L|ml|g)?(.*)$/i);
          if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
            return `<div style="font-size:11px;color:#c08090;padding:2px 0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
          return `<div style="font-size:11px;color:#c08090;padding:2px 0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
        }).join('')+'<div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">'+(th.drink.method||'')+'</div>':'')}
    </div>`:''}

    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <div onclick="(function(){var s=S.kidsSelectedItems||[];var idx=s.findIndex(x=>x.id==='crisps_${th.id}'&&x.themeId==='${th.id}');if(idx>=0)s.splice(idx,1);else s.push({id:'crisps_${th.id}',themeId:'${th.id}',cat:'crisps',name:'Crisps & Dips',kcal:120,cost:${crispCost/k}});set({kidsSelectedItems:[...s]})})()"
          style="width:22px;height:22px;border:2px solid ${isCrispSel?'#d04080':'#503050'};border-radius:4px;background:${isCrispSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
          ${isCrispSel?'✓':''}
        </div>
        <div style="flex:1;">
          <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">🥔 Crisps & Dips</div>
          <div style="font-size:11px;color:#803060;">~R${crispCost} for ${k} kids</div>
        </div>
      </div>
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <button onclick="set({kidsCrispType:'regular'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${crispType==='regular'?'#d04080':'#3a1020'};background:${crispType==='regular'?'#2a0818':'transparent'};color:${crispType==='regular'?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">Regular</button>
        <button onclick="set({kidsCrispType:'healthy'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${crispType==='healthy'?'#d04080':'#3a1020'};background:${crispType==='healthy'?'#2a0818':'transparent'};color:${crispType==='healthy'?'#f070a0':'#703050'};font-size:10px;cursor:pointer;">Healthy</button>
      </div>
      ${crispType==='regular'?`
        <div style="font-size:11px;color:#c08090;padding:2px 0;">· Crisps: <b style="color:#f5e8cc;">${crispPackets} × 120g packet${crispPackets>1?'s':''}</b> <span style="color:#703050;">(1 pack per 4 kids)</span></div>
        <div style="font-size:11px;color:#c08090;padding:2px 0;">· Dip options: French onion · Cheese & chive · Guacamole · Salsa</div>
        <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">Quick dip: 250ml sour cream + 1 packet French onion soup powder.</div>
      `:`
        <div style="font-size:11px;color:#c08090;padding:2px 0;">· Swap for: <b style="color:#f5e8cc;">${veggieSticks}</b> + popcorn + rice cakes</div>
        <div style="font-size:11px;color:#c08090;padding:2px 0;">· Healthy dip: Hummus · Yoghurt dip · Tzatziki</div>
        <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">Quick dip: 250ml plain yogurt + garlic + lemon + dill.</div>
      `}
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// PARTY PLANNER
// ─────────────────────────────────────────────────────────────────
function kidsPlannerContent(th, k){
  return `
  <div style="margin-top:12px;">
    <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">🎈 PARTY PLANNER</div>

    ${th.decor?`
    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div onclick="set({kidsShowDecor:!S.kidsShowDecor})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">🎨 Decor Ideas</div>
        <div style="font-size:11px;color:#d04080;">${S.kidsShowDecor?'▲ Hide':'▼ Show'}</div>
      </div>
      ${S.kidsShowDecor?`
      <div style="margin-top:10px;">
        <div style="font-size:10px;color:#f070a0;margin-bottom:4px;">🌿 Budget</div>
        ${th.decor.budget.map(d=>`<div style="font-size:11px;color:#c08090;padding:2px 0;">· ${d}</div>`).join('')}
        <div style="font-size:10px;color:#f070a0;margin-top:8px;margin-bottom:4px;">✨ Styled</div>
        ${th.decor.styled.map(d=>`<div style="font-size:11px;color:#c08090;padding:2px 0;">· ${d}</div>`).join('')}
        ${th.decor.photospot?`<div style="margin-top:8px;padding:8px;background:#100810;border-radius:6px;"><div style="font-size:10px;color:#f070a0;margin-bottom:2px;">📸 Photo Spot</div><div style="font-size:11px;color:#c08090;">${th.decor.photospot}</div></div>`:''}
        ${th.zones?`<div style="margin-top:8px;"><div style="font-size:10px;color:#f070a0;margin-bottom:4px;">🗺️ Zones</div>${th.zones.map(z=>`<div style="font-size:11px;color:#c08090;padding:2px 0;">${z}</div>`).join('')}</div>`:''}
      </div>`:''}
    </div>`:''}

    ${th.timeline?`
    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div onclick="set({kidsShowTimeline:!S.kidsShowTimeline})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">⏱️ Prep Timeline</div>
        <div style="font-size:11px;color:#d04080;">${S.kidsShowTimeline?'▲ Hide':'▼ Show'}</div>
      </div>
      ${S.kidsShowTimeline?`
      <div style="margin-top:10px;">
        <div style="display:flex;gap:8px;margin-bottom:8px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:#f070a0;">2 Days Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.two}</div></div></div>
        <div style="display:flex;gap:8px;margin-bottom:8px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:#f070a0;">1 Day Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.one}</div></div></div>
        <div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:#f070a0;">Party Morning</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.morning}</div></div></div>
      </div>`:''}
    </div>`:''}

    ${th.games?`
    <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="font-size:13px;color:#f5e8cc;font-weight:bold;margin-bottom:6px;">🎮 Party Games</div>
      <div style="font-size:11px;color:#c08090;line-height:1.6;">${th.games}</div>
    </div>`:''}
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// MY PLAN VIEW
// ─────────────────────────────────────────────────────────────────
function kidsMyPlanHTML(){
  const k   = S.kidsCount||12;
  const sel = S.kidsSelectedItems||[];
  if(!sel.length) return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;padding:20px;">
    <div style="font-size:11px;color:#d04080;cursor:pointer;margin-bottom:16px;" onclick="set({kidsScreen:'theme-detail'})">← Back</div>
    <div style="text-align:center;padding:40px 0;color:#703050;font-style:italic;">No items selected yet.<br>Go back and tick items to build your plan.</div>
  </div>`;

  const groups = {};
  sel.forEach(item=>{ if(!groups[item.cat]) groups[item.cat]=[]; groups[item.cat].push(item); });
  const totalCost = sel.reduce((a,x)=>a+(x.cost||0)*k,0);
  const totalKcal = sel.reduce((a,x)=>a+(x.kcal||0),0);
  const catLabels = {savoury:'🥩 Savoury',sweet:'🍬 Sweet',cake:'🎂 Cake',drink:'🥤 Drinks',crisps:'🥔 Crisps & Dips'};

  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">
    <div style="background:#1a0814;border-bottom:1px solid #3a1020;padding:16px 16px 12px;">
      <div style="font-size:10px;color:#d04080;cursor:pointer;margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;" onclick="set({kidsActiveCat:null})">← Back to Theme</div>
      <div style="font-size:20px;color:#f5e8cc;">📋 My Party Plan</div>
      <div style="font-size:11px;color:#803060;margin-top:2px;">${k} kids · ${sel.length} item${sel.length>1?'s':''} selected</div>
    </div>
    <div style="padding:14px 12px;">
      <div style="background:#1a0814;border:1px solid #803060;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">💰 Cost Summary</div>
          <div style="font-size:16px;color:#f070a0;font-weight:bold;">~R${Math.round(totalCost)}</div>
        </div>
        <div style="font-size:10px;color:#c08090;">Per child: ~R${Math.round(totalCost/k)} · ~${totalKcal} kcal per child</div>
        <div style="height:1px;background:#3a1020;margin:10px 0;"></div>
        ${Object.entries(groups).map(([cat,items])=>`
          <div style="display:flex;justify-content:space-between;font-size:10px;color:#906080;margin-bottom:3px;">
            <span>${catLabels[cat]||cat}</span><span>R${Math.round(items.reduce((a,x)=>a+(x.cost||0)*k,0))}</span>
          </div>`).join('')}
      </div>
      ${Object.entries(groups).map(([cat,items])=>`
        <div style="margin-bottom:12px;">
          <div style="font-size:11px;color:#d04080;margin-bottom:6px;">${catLabels[cat]||cat}</div>
          ${items.map(item=>`
            <div style="background:#1a0814;border:1px solid #2a1020;border-radius:8px;padding:10px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">
              <div><div style="font-size:11px;color:#f5e8cc;">${item.name}</div><div style="font-size:10px;color:#703050;margin-top:1px;">R${Math.round((item.cost||0)*k)} · ${item.kcal||0}kcal/child</div></div>
              <div onclick="(function(){var s=S.kidsSelectedItems||[];set({kidsSelectedItems:s.filter(x=>!(x.id==='${item.id}'&&x.themeId==='${item.themeId}'))})})()" style="font-size:10px;color:#803060;cursor:pointer;padding:4px 8px;border:1px solid #3a1020;border-radius:8px;">✕ Remove</div>
            </div>`).join('')}
        </div>`).join('')}
      <div style="background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:13px;color:#f5e8cc;font-weight:bold;margin-bottom:6px;">🛒 Shopping List</div>
        <div style="font-size:10px;color:#703050;font-style:italic;margin-bottom:8px;">Scaled for ${k} kids · +10% buffer included</div>
        ${sel.map(item=>`<div style="padding:5px 0;border-bottom:1px solid #2a1020;font-size:10px;color:#d04080;">${catLabels[item.cat]||item.cat} — ${item.name}</div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-bottom:24px;">
        <button style="flex:1;padding:10px;border-radius:10px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;">📤 Share Plan</button>
        <button style="flex:1;padding:10px;border-radius:10px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;">⬇️ Download (Pro)</button>
      </div>
      <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid #2a1020;font-size:11px;">
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsActiveCat:null})">← Back</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'themes',kidsTheme:null,kidsActiveCat:null})">All Themes</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({activeSection:'home'})">Home</span>
      </div>
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────
// ADD / DELETE SNACKS
// ─────────────────────────────────────────────────────────────────
function kidsMasterSnacksHTML(k){
  const sel = S.kidsSelectedItems||[];
  const snacks = typeof MASTER_SNACKS !== 'undefined' ? MASTER_SNACKS : [];
  return `
  <div style="background:#0f0e0c;min-height:100vh;font-family:Georgia,serif;">
    <div style="background:#1a0814;border-bottom:1px solid #803060;padding:16px 16px 12px;">
      <div style="font-size:10px;color:#d04080;cursor:pointer;margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;" onclick="set({kidsShowMasterSnacks:false})">← Back</div>
      <div style="font-size:20px;color:#f5e8cc;">🍿 Add / Delete Snacks</div>
      <p style="font-size:11px;color:#803060;font-style:italic;margin:4px 0 0;">12 reusable building blocks · all scaled to <b style="color:#f070a0;">${k} kids</b></p>
    </div>
    <div style="padding:14px 12px;">
      <div style="font-size:9px;letter-spacing:2px;color:#803060;text-transform:uppercase;margin-bottom:8px;">SNACKS — ${snacks.length} OPTIONS</div>
      ${snacks.length ? snacks.map(s=>{
        const isSel = sel.some(x=>x.id==='snack_'+s.id&&x.themeId==='__snack__');
        const cost = s.costEasy||null;
        return `
        <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div onclick="(function(){var s2=S.kidsSelectedItems||[];var idx=s2.findIndex(x=>x.id==='snack_${s.id}'&&x.themeId==='__snack__');if(idx>=0)s2.splice(idx,1);else s2.push({id:'snack_${s.id}',themeId:'__snack__',cat:'savoury',name:'${s.name}',kcal:${s.kcal||0},cost:${cost||0}});set({kidsSelectedItems:[...s2]})})()"
              style="width:22px;height:22px;border:2px solid ${isSel?'#d04080':'#503050'};border-radius:4px;background:${isSel?'#d04080':'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:12px;color:#fff;">
              ${isSel?'✓':''}
            </div>
            <div style="flex:1;">
              <div style="font-size:13px;color:#f5e8cc;font-weight:bold;">${s.id}. ${s.name}</div>
              <div style="font-size:11px;color:#803060;">Per person: ${s.perPerson||''} · ~${s.kcal||'?'}kcal${cost?` · ~R${Math.round(cost*k)}`:''}
              </div>
            </div>
            <button onclick="set({kidsOpenRecipe:S.kidsOpenRecipe==='snack_${s.id}'?null:'snack_${s.id}'})"
              style="flex-shrink:0;padding:6px 12px;background:#c06010;border:none;border-radius:6px;color:#fff;font-size:11px;cursor:pointer;white-space:nowrap;">
              ${S.kidsOpenRecipe==='snack_'+s.id?'▲ Hide':'Recipe →'}
            </button>
          </div>
          ${S.kidsOpenRecipe==='snack_'+s.id?`
          <div style="margin-top:10px;padding:10px;background:#100810;border-radius:8px;border-top:1px solid #2a1020;">
            <div style="font-size:10px;color:#906080;margin-bottom:6px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
            ${s.base12?Object.entries(s.base12).map(([key,val])=>{
              const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
              if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;
                return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
              return `<div style="font-size:11px;color:#c08090;padding:3px 0;border-bottom:1px solid #1a0010;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
            }).join(''):''}
          </div>`:''}
        </div>`}).join('') : `<div style="font-size:11px;color:#703050;font-style:italic;text-align:center;padding:40px 0;">No snacks data loaded yet.</div>`}
      <div style="display:flex;justify-content:space-around;padding:14px 0 24px;border-top:1px solid #2a1020;margin-top:8px;font-size:11px;">
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsShowMasterSnacks:false})">← Back</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({kidsScreen:'myplan'})">My Plan</span>
        <span style="color:#d04080;cursor:pointer;" onclick="set({activeSection:'home'})">Home</span>
      </div>
    </div>
  </div>`;
}
