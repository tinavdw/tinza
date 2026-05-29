function kidsPartyHTML(){
  const k = S.kidsCount||12;
  const budget = S.kidsBudget||'easy';
  const themeId = S.kidsTheme;
  const kscreen = S.kidsScreen||'themes';
  const searchVal = S.kidsSearch||'';
  const howOpen = S.kidsShowHowItWorks||false;

  if(S.kidsShowMasterSnacks) return kidsMasterSnacksHTML(k);
  if(themeId && kscreen==='theme-detail') return kidsThemeDetailHTML(themeId, k, budget);

  const filteredThemes = searchVal
    ? KIDS_THEMES.filter(t=>t.name.toLowerCase().includes(searchVal.toLowerCase())||t.vibe.toLowerCase().includes(searchVal.toLowerCase()))
    : KIDS_THEMES;

  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a0814 0%,#2a1020 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.3) 0%,rgba(10,4,14,0.75) 100%);z-index:1;"></div>
      <button onclick="set({eventTab:'bigcooking'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #803060;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;font-family:Georgia,serif;">← Events</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🎂 Kiddies Birthday Parties</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#d090b0;font-style:italic;">12 themes · 4 to 50 kids · Easy, Medium or Fancy</p>
        <div style="display:flex;align-items:center;background:rgba(30,8,24,0.85);border:1px solid #803060;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#d04080;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search themes…" oninput="set({kidsSearch:this.value})" value="${searchVal}" style="flex:1;background:none;border:none;outline:none;color:#f0d0e0;font-size:13px;font-family:Georgia,serif;"/>
          ${searchVal?`<button onclick="set({kidsSearch:''})" style="background:none;border:none;color:#803060;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>
    <div style="background:#1a0814;border-bottom:1px solid #401030;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="flex:1;">
          <button onclick="set({kidsShowHowItWorks:!S.kidsShowHowItWorks})" style="background:none;border:none;color:#d04080;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${howOpen?'▲':'▼'} How it works
          </button>
          ${howOpen?`<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c0a0b0;line-height:1.6;font-family:Georgia,serif;"><strong style="color:#f070a0;">Pick a theme</strong> → set your kid count and budget level → every recipe, drink, cake and shopping list scales automatically.<br><strong style="color:#f070a0;">Swap or add snacks</strong> from the Master Snacks library on any theme.<br><strong style="color:#f070a0;">Decor and prep timeline</strong> are built into every theme card.</div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({kidsCount:Math.max(4,S.kidsCount-1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f070a0;font-weight:bold;line-height:1;">${k}</div>
            <div style="font-size:9px;color:#803060;letter-spacing:1px;text-transform:uppercase;">kids</div>
          </div>
          <button onclick="setQuiet({kidsCount:Math.min(50,S.kidsCount+1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:12px;">
        ${['easy','medium','fancy'].map(b=>`<button onclick="set({kidsBudget:'${b}'})" style="flex:1;padding:7px 8px;border-radius:20px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:11px;cursor:pointer;font-family:Georgia,serif;">${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}</button>`).join('')}
      </div>
    </div>
    <div style="padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
      ${filteredThemes.length===0?`<div style="grid-column:1/-1;text-align:center;padding:40px 20px;"><div style="font-size:36px;margin-bottom:10px;">🎈</div><div style="font-size:14px;color:#a03060;">No themes match "${searchVal}"</div><button onclick="set({kidsSearch:''})" style="margin-top:10px;background:none;border:1px solid #601040;border-radius:20px;color:#d04080;padding:6px 16px;cursor:pointer;font-size:12px;font-family:Georgia,serif;">Clear search</button></div>`:''}
      ${filteredThemes.map(th=>`
        <div onclick="set({kidsTheme:'${th.id}',kidsScreen:'theme-detail'})" style="background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:14px 10px;cursor:pointer;text-align:center;" onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='#3a1020'">
          <div style="font-size:32px;margin-bottom:6px;">${th.emoji}</div>
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;line-height:1.3;">${th.name}</div>
          <div style="margin-top:6px;display:flex;gap:3px;justify-content:center;">${th.colours.map(c=>`<div style="width:10px;height:10px;border-radius:50%;background:${c};"></div>`).join('')}</div>
          <div style="font-size:9px;color:#803060;margin-top:5px;font-style:italic;">${th.vibe.split('—')[0].trim()}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin:0 16px 24px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px solid #601040;border-radius:10px;padding:14px;text-align:center;cursor:pointer;">
        <div style="font-size:15px;margin-bottom:4px;color:#f5e8cc;font-family:Georgia,serif;">🍿 Master Snacks Library</div>
        <div style="font-size:11px;color:#803060;">12 reusable building blocks — add to any theme, all scaled to your kid count</div>
      </div>
    </div>
  </div>`;
}

function kidsThemeDetailHTML(themeId, k, budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return '<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>';
  const budgetKey = budget||'easy';
  const menuItems = th.foods[budgetKey]||th.foods['easy'];
  const drinkType = S.kidsDrinkType||'storebought';
  const crispType = S.kidsCrispType||'regular';
  const crispPackets = Math.ceil(k/4);
  const veggieSticks = Math.round(k*40)+'g carrot/cucumber sticks';
  const howOpen = S.kidsDetailHowOpen||false;

  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a0814 0%,${th.colours[0]}22 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.3) 0%,rgba(10,4,14,0.75) 100%);z-index:1;"></div>
      <button onclick="set({kidsScreen:'themes',kidsTheme:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #803060;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;font-family:Georgia,serif;">← All Themes</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 14px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
          <span style="font-size:32px;">${th.emoji}</span>
          <div>
            <h1 style="margin:0;font-size:22px;color:#f5e8cc;font-family:Georgia,serif;">${th.name}</h1>
            <p style="margin:0;font-size:11px;color:#d090b0;font-style:italic;">${th.vibe}</p>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:4px;">${th.colours.map(c=>`<div style="width:12px;height:12px;border-radius:3px;background:${c};"></div>`).join('')}<span style="font-size:10px;color:#d090b0;margin-left:4px;">${th.palette}</span></div>
      </div>
    </div>
    <div style="background:#1a0814;border-bottom:1px solid #401030;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;">
        <div style="flex:1;">
          <button onclick="set({kidsDetailHowOpen:!S.kidsDetailHowOpen})" style="background:none;border:none;color:#d04080;font-size:12px;cursor:pointer;padding:0;">
            ${howOpen?'▲':'▼'} How it works
          </button>
          ${howOpen?`<div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:10px;margin-top:8px;font-size:11px;color:#c0a0b0;line-height:1.6;font-family:Georgia,serif;">All quantities scale to your kid count automatically. Switch budget levels to see simpler or fancier options.</div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({kidsCount:Math.max(4,S.kidsCount-1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f070a0;font-weight:bold;line-height:1;">${k}</div>
            <div style="font-size:9px;color:#803060;letter-spacing:1px;text-transform:uppercase;">kids</div>
          </div>
          <button onclick="setQuiet({kidsCount:Math.min(50,S.kidsCount+1)})" style="width:32px;height:32px;border-radius:50%;background:#2a0818;border:2px solid #d04080;color:#d04080;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
      <div style="display:flex;gap:5px;">
        ${['easy','medium','fancy'].map(b=>`<button onclick="set({kidsBudget:'${b}'})" style="flex:1;padding:6px 4px;border-radius:20px;border:1px solid ${budgetKey===b?'#d04080':'#3a1020'};background:${budgetKey===b?'#2a0818':'transparent'};color:${budgetKey===b?'#f070a0':'#703050'};font-size:10px;cursor:pointer;font-family:Georgia,serif;">${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}</button>`).join('')}
      </div>
    </div>
    <div style="padding:16px;">
      <div style="margin-bottom:16px;">
        <div style="font-size:10px;letter-spacing:2px;color:#d04080;text-transform:uppercase;margin-bottom:10px;">🍽️ Suggested Menu</div>
        ${th.recipes.filter(r=>menuItems.includes(r.name)).map(r=>`
          <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:8px;">
            <div style="font-size:13px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">${r.name}</div>
            <div style="font-size:10px;color:#a03060;margin-top:2px;">${r.type==='savoury'?'🥩 Savoury':r.type==='sweet'?'🍬 Sweet':'🥗 Healthy'} · ${r.per} per child · ${r.time} min · ~${r.kcal} kcal</div>
            <div style="margin-top:8px;padding:8px;background:#120810;border-radius:6px;">
              <div style="font-size:10px;color:#803060;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
              ${Object.entries(r.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
            </div>
            <div style="font-size:10px;color:#803060;margin-top:6px;font-style:italic;">${r.method}</div>
          </div>
        `).join('')}
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">🥔 Crisps & Dips Add-On</div>
          <div style="display:flex;gap:4px;">
            <button onclick="set({kidsCrispType:'regular'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${crispType==='regular'?'#d04080':'#3a1020'};background:${crispType==='regular'?'#2a0818':'transparent'};color:${crispType==='regular'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;font-family:Georgia,serif;">Regular</button>
            <button onclick="set({kidsCrispType:'healthy'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${crispType==='healthy'?'#d04080':'#3a1020'};background:${crispType==='healthy'?'#2a0818':'transparent'};color:${crispType==='healthy'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;font-family:Georgia,serif;">Healthy</button>
          </div>
        </div>
        ${crispType==='regular'?`<div style="font-size:10px;color:#c0a0b0;">· Crisps: <b style="color:#f5e8cc;">${crispPackets} x 120g packet${crispPackets>1?'s':''}</b> <span style="color:#803060;">(1 pack per 4 kids)</span></div><div style="font-size:10px;color:#c0a0b0;margin-top:3px;">· Dip options: French onion · Cheese & chive · Guacamole · Salsa</div><div style="font-size:10px;color:#803060;margin-top:6px;font-style:italic;">Easy dip: Mix 250ml sour cream + 1 packet French onion soup powder.</div>`:`<div style="font-size:10px;color:#c0a0b0;">· Swap for: <b style="color:#f5e8cc;">${veggieSticks}</b> + popcorn + rice cakes</div><div style="font-size:10px;color:#c0a0b0;margin-top:3px;">· Healthy dip: Hummus · Yoghurt dip · Tzatziki</div><div style="font-size:10px;color:#803060;margin-top:6px;font-style:italic;">Quick dip: 250ml plain yoghurt + garlic + lemon + dill.</div>`}
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">🥤 ${th.drink.name}</div>
          <div style="display:flex;gap:4px;">
            <button onclick="set({kidsDrinkType:'storebought'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${drinkType==='storebought'?'#d04080':'#3a1020'};background:${drinkType==='storebought'?'#2a0818':'transparent'};color:${drinkType==='storebought'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;font-family:Georgia,serif;">Store-bought</button>
            <button onclick="set({kidsDrinkType:'made'})" style="padding:4px 10px;border-radius:12px;border:1px solid ${drinkType==='made'?'#d04080':'#3a1020'};background:${drinkType==='made'?'#2a0818':'transparent'};color:${drinkType==='made'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;font-family:Georgia,serif;">Make it</button>
          </div>
        </div>
        <div style="font-size:10px;color:#a03060;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b> = ${k*250}ml total:</div>
        ${drinkType==='storebought'?`<div style="font-size:11px;color:#f5e8cc;font-family:Georgia,serif;">${th.drink.storebought}</div>`:`${Object.entries(th.drink.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(L|ml|g)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}<div style="font-size:10px;color:#803060;margin-top:6px;font-style:italic;">${th.drink.method}</div>`}
        <div style="font-size:9px;color:#601040;margin-top:4px;">~${th.drink.kcal} kcal per child</div>
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;margin-bottom:8px;font-family:Georgia,serif;">🎂 ${th.cake.name}</div>
        <div style="font-size:10px;color:#a03060;margin-bottom:6px;">Scaled for <b style="color:#f070a0;">${k} kids</b>:</div>
        ${Object.entries(th.cake.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(g|ml|L|kg)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
        <div style="font-size:10px;color:#803060;margin-top:8px;font-style:italic;">${th.cake.method}</div>
        <div style="font-size:9px;color:#601040;margin-top:4px;">~${th.cake.kcal} kcal per slice</div>
      </div>
      <div onclick="set({kidsShowMasterSnacks:true})" style="background:#1a0814;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;cursor:pointer;text-align:center;">
        <div style="font-size:13px;color:#f070a0;font-family:Georgia,serif;">🔄 Want to swap or add snacks?</div>
        <div style="font-size:10px;color:#803060;margin-top:4px;">Master Snacks — 12 building blocks, all scaled to ${k} kids</div>
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div onclick="set({kidsShowDecor:!S.kidsShowDecor})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;min-height:44px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">🎈 Decor Ideas</div>
          <div style="font-size:11px;color:#d04080;">${S.kidsShowDecor?'▲ Hide':'▼ Show'}</div>
        </div>
        ${S.kidsShowDecor?`<div style="margin-top:10px;"><div style="font-size:11px;color:#f070a0;margin-bottom:5px;">🌿 Budget Decor</div>${th.decor.budget.map(d=>`<div style="font-size:10px;color:#c0a0b0;margin-bottom:3px;">· ${d}</div>`).join('')}<div style="font-size:11px;color:#f070a0;margin-top:10px;margin-bottom:5px;">✨ Styled Decor</div>${th.decor.styled.map(d=>`<div style="font-size:10px;color:#c0a0b0;margin-bottom:3px;">· ${d}</div>`).join('')}<div style="margin-top:10px;padding:8px;background:#120810;border-radius:6px;"><div style="font-size:10px;color:#f070a0;margin-bottom:3px;">📸 Photo Spot</div><div style="font-size:10px;color:#c0a0b0;">${th.decor.photospot}</div></div><div style="margin-top:10px;"><div style="font-size:10px;color:#f070a0;margin-bottom:5px;">🗺️ Zone Layout</div>${th.zones.map(z=>`<div style="font-size:10px;color:#c0a0b0;margin-bottom:2px;">${z}</div>`).join('')}</div></div>`:''}
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div onclick="set({kidsShowTimeline:!S.kidsShowTimeline})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;min-height:44px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">⏱️ Prep Timeline</div>
          <div style="font-size:11px;color:#d04080;">${S.kidsShowTimeline?'▲ Hide':'▼ Show'}</div>
        </div>
        ${S.kidsShowTimeline?`<div style="margin-top:10px;"><div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:#f070a0;">2 Days Ahead</div><div style="font-size:11px;color:#f5e8cc;font-family:Georgia,serif;">${th.timeline.two}</div></div></div><div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:#f070a0;">1 Day Ahead</div><div style="font-size:11px;color:#f5e8cc;font-family:Georgia,serif;">${th.timeline.one}</div></div></div><div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:#f070a0;">Party Morning</div><div style="font-size:11px;color:#f5e8cc;font-family:Georgia,serif;">${th.timeline.morning}</div></div></div></div>`:''}
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;margin-bottom:6px;font-family:Georgia,serif;">🎮 Party Games</div>
        <div style="font-size:10px;color:#c0a0b0;line-height:1.6;">${th.games}</div>
      </div>
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:20px;margin-bottom:24px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">🔒</div>
        <div style="font-size:13px;color:#f070a0;margin-bottom:4px;font-family:Georgia,serif;">Shopping List</div>
        <div style="font-size:10px;color:#803060;margin-bottom:10px;">Complete auto-scaled list for ${k} kids</div>
        <div style="font-size:13px;color:#d04080;font-weight:bold;">Unlock with Tinza Pro — R99/month</div>
      </div>
    </div>
  </div>`;
}

function kidsMasterSnacksHTML(k){
  const tc = {savoury:'#d04080',sweet:'#f070a0',healthy:'#c0d080'};
  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="position:relative;height:160px;overflow:hidden;background:linear-gradient(135deg,#1a0814 0%,#2a1020 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,14,0.3) 0%,rgba(10,4,14,0.75) 100%);z-index:1;"></div>
      <button onclick="set({kidsShowMasterSnacks:false})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #803060;border-radius:20px;color:#f070a0;font-size:12px;padding:5px 12px;cursor:pointer;font-family:Georgia,serif;">← Back</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 14px;">
        <h1 style="font-size:22px;font-weight:bold;color:#f5e8cc;margin:0 0 2px;font-family:Georgia,serif;">🍿 Master Snacks</h1>
        <p style="font-size:11px;color:#d090b0;font-style:italic;margin:0;">12 reusable building blocks · All scaled to <b style="color:#f070a0;">${k} kids</b></p>
      </div>
    </div>
    <div style="padding:16px;">
      ${MASTER_SNACKS.map(s=>`
        <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:12px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">${s.id}. ${s.name}</div>
            <div style="font-size:9px;padding:2px 7px;border-radius:8px;background:#1a0820;color:${tc[s.type]||'#c0a0b0'};border:1px solid ${tc[s.type]||'#601040'};">${s.type}</div>
          </div>
          <div style="margin-top:8px;padding:8px;background:#120810;border-radius:6px;">
            <div style="font-size:10px;color:#a03060;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
            ${Object.entries(s.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c0a0b0;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
          </div>
          <div style="font-size:10px;color:#803060;margin-top:5px;">Per child: ${s.perPerson} · ~${s.kcal} kcal</div>
        </div>
      `).join('')}
      <div style="background:#1a0820;border:1px solid #601040;border-radius:10px;padding:20px;margin-bottom:24px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">🔒</div>
        <div style="font-size:13px;color:#f070a0;margin-bottom:4px;font-family:Georgia,serif;">Full Shopping List</div>
        <div style="font-size:10px;color:#803060;margin-bottom:10px;line-height:1.6;">All ingredients auto-scaled and consolidated</div>
        <div style="font-size:13px;color:#d04080;font-weight:bold;">Unlock with Tinza Pro — R99/month</div>
      </div>
    </div>
  </div>`;
}
