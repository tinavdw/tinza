function kidsPartyHTML(){
  const k = S.kidsCount||12;
  const budget = S.kidsBudget||'easy';
  const themeId = S.kidsTheme;
  const kscreen = S.kidsScreen||'themes';

  if(S.kidsShowMasterSnacks) return kidsMasterSnacksHTML(k);
  if(themeId && kscreen==='theme-detail') return kidsThemeDetailHTML(themeId, k, budget);

  // THEME GRID
  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="position:relative;background:linear-gradient(160deg,#1a0814 0%,#2a1020 100%);border-bottom:1px solid #803060;padding:20px 20px 14px;">
      <div style="font-size:11px;color:#d04080;margin-bottom:6px;cursor:pointer;" onclick="set({eventTab:'bigcooking'})">← Events</div>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;margin:0 0 4px;">🎂 Kiddies Birthday Parties</h1>
      <p style="font-size:11px;color:#803060;font-style:italic;margin:0 0 12px;">12 themes · 4 to 50 kids · Easy, Medium or Fancy</p>
      <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px;">
        <div style="flex:1;min-width:160px;">
          <div onclick="set({kidsShowHowItWorks:!S.kidsShowHowItWorks})" style="font-size:12px;color:#d04080;cursor:pointer;text-decoration:underline;display:inline-block;">${S.kidsShowHowItWorks?'▲':'▼'} How it works</div>
          ${S.kidsShowHowItWorks?`<div style="margin-top:8px;padding:10px;background:#1a0010;border-radius:8px;border:1px solid #601040;font-size:11px;color:#c08090;line-height:1.7;" onclick="set({kidsShowHowItWorks:false})">
            <b style="color:#f070a0;">Pick a theme</b> → set your kid count and budget level → every recipe, drink, cake and shopping list scales automatically.<br>
            <b style="color:#f070a0;">Swap or add snacks</b> from the Master Snacks library on any theme.<br>
            <b style="color:#f070a0;">Decor and prep timeline</b> are built into every theme card. Tap outside to close.
          </div>`:''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:#1a0010;border:1px solid #601040;border-radius:10px;padding:8px 12px;">
          <span style="font-size:11px;color:#d04080;">👧 Kids:</span>
          <button onclick="set({kidsCount:Math.max(4,S.kidsCount-1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;">−</button>
          <span style="font-size:18px;color:#f5e8cc;font-weight:bold;min-width:28px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,S.kidsCount+1)})" style="width:24px;height:24px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:14px;cursor:pointer;">+</button>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${['easy','medium','fancy'].map(b=>`<button onclick="set({kidsBudget:'${b}'})" style="padding:6px 14px;border-radius:20px;border:1px solid ${budget===b?'#d04080':'#3a1020'};background:${budget===b?'#2a0818':'transparent'};color:${budget===b?'#f070a0':'#703050'};font-size:11px;cursor:pointer;font-family:Georgia,serif;">${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}</button>`).join('')}
      </div>
    </div>
    <div style="padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
      ${KIDS_THEMES.map(th=>`
        <div onclick="set({kidsTheme:'${th.id}',kidsScreen:'theme-detail'})" style="background:#1a0814;border:1px solid #3a1020;border-radius:12px;padding:14px 10px;cursor:pointer;text-align:center;" onmouseover="this.style.borderColor='#803060'" onmouseout="this.style.borderColor='#3a1020'">
          <div style="font-size:32px;margin-bottom:6px;">${th.emoji}</div>
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;line-height:1.3;">${th.name}</div>
          <div style="margin-top:6px;display:flex;gap:3px;justify-content:center;">
            ${th.colours.map(c=>`<div style="width:10px;height:10px;border-radius:50%;background:${c};"></div>`).join('')}
          </div>
          <div style="font-size:9px;color:#803060;margin-top:5px;font-style:italic;">${th.vibe.split('—')[0].trim()}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin:0 16px 24px;" onclick="set({kidsShowMasterSnacks:true})">
      <div style="background:#1a0814;border:1px dashed #803060;border-radius:10px;padding:14px;text-align:center;cursor:pointer;">
        <div style="font-size:15px;margin-bottom:4px;">🍿 Master Snacks Library</div>
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

  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="padding:20px 20px 16px;background:linear-gradient(160deg,#1a0814 0%,${th.colours[0]}22 100%);border-bottom:1px solid ${th.colours[0]}60;">
      <div style="font-size:11px;color:#d04080;cursor:pointer;margin-bottom:8px;" onclick="set({kidsScreen:'themes',kidsTheme:null})">← All Themes</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
        <span style="font-size:36px;">${th.emoji}</span>
        <div>
          <div style="font-size:20px;color:#f5e8cc;font-family:Georgia,serif;">${th.name}</div>
          <div style="font-size:11px;color:#a07080;font-style:italic;">${th.vibe}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
        ${th.colours.map(c=>`<div style="width:16px;height:16px;border-radius:4px;background:${c};"></div>`).join('')}
        <span style="font-size:10px;color:#703050;">${th.palette}</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:6px;background:#1a0010;border:1px solid #601040;border-radius:8px;padding:6px 10px;">
          <span style="font-size:10px;color:#d04080;">👧 Kids:</span>
          <button onclick="set({kidsCount:Math.max(4,S.kidsCount-1)})" style="width:22px;height:22px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:12px;cursor:pointer;">−</button>
          <span style="font-size:16px;color:#f5e8cc;font-weight:bold;min-width:26px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,S.kidsCount+1)})" style="width:22px;height:22px;border-radius:50%;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:12px;cursor:pointer;">+</button>
        </div>
        <div style="display:flex;gap:5px;">
          ${['easy','medium','fancy'].map(b=>`<button onclick="set({kidsBudget:'${b}'})" style="padding:4px 10px;border-radius:16px;border:1px solid ${budgetKey===b?'#d04080':'#3a1020'};background:${budgetKey===b?'#2a0818':'transparent'};color:${budgetKey===b?'#f070a0':'#703050'};font-size:10px;cursor:pointer;font-family:Georgia,serif;">${{easy:'🌿 Easy',medium:'🎈 Medium',fancy:'✨ Fancy'}[b]}</button>`).join('')}
        </div>
      </div>
    </div>

    <div style="padding:16px;">
      <!-- MENU -->
      <div style="margin-bottom:16px;">
        <div style="font-size:13px;color:#f070a0;font-family:Georgia,serif;margin-bottom:10px;">🍽️ Suggested Menu</div>
        ${th.recipes.filter(r=>menuItems.includes(r.name)).map(r=>`
          <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:8px;">
            <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${r.name}</div>
            <div style="font-size:10px;color:#703050;margin-top:2px;">${r.type==='savoury'?'🥩 Savoury':r.type==='sweet'?'🍬 Sweet':'🥗 Healthy'} · ${r.per} per child · ${r.time} min · ~${r.kcal} kcal</div>
            <div style="margin-top:8px;padding:8px;background:#100810;border-radius:6px;">
              <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
              ${Object.entries(r.base12).map(([key,val])=>{
                const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
                if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}
                return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
              }).join('')}
            </div>
            <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">${r.method}</div>
          </div>
        `).join('')}
      </div>

      <!-- CRISPS & DIPS -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🥔 Crisps & Dips Add-On</div>
          <div style="display:flex;gap:4px;">
            <button onclick="set({kidsCrispType:'regular'})" style="padding:3px 8px;border-radius:12px;border:1px solid ${crispType==='regular'?'#d04080':'#3a1020'};background:${crispType==='regular'?'#2a0818':'transparent'};color:${crispType==='regular'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Regular</button>
            <button onclick="set({kidsCrispType:'healthy'})" style="padding:3px 8px;border-radius:12px;border:1px solid ${crispType==='healthy'?'#d04080':'#3a1020'};background:${crispType==='healthy'?'#2a0818':'transparent'};color:${crispType==='healthy'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Healthy</button>
          </div>
        </div>
        ${crispType==='regular'?`
          <div style="font-size:10px;color:#c08090;">· Crisps: <b style="color:#f5e8cc;">${crispPackets} x 120g packet${crispPackets>1?'s':''} of crisps</b> <span style="color:#703050;">(1 pack per 4 kids)</span></div>
          <div style="font-size:10px;color:#c08090;margin-top:3px;">· Dip options: French onion dip · Cheese & chive · Guacamole · Salsa</div>
          <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">Easy dip: Mix 250ml sour cream + 1 packet French onion soup powder. Done!</div>
        `:`
          <div style="font-size:10px;color:#c08090;">· Swap for: <b style="color:#f5e8cc;">${veggieSticks}</b> + popcorn + rice cakes</div>
          <div style="font-size:10px;color:#c08090;margin-top:3px;">· Healthy dip: Hummus · Yoghurt dip · Tzatziki</div>
          <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">Quick dip: 250ml plain yogurt + 1 garlic clove + lemon juice + dill.</div>
        `}
      </div>

      <!-- DRINK -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🥤 ${th.drink.name}</div>
          <div style="display:flex;gap:4px;">
            <button onclick="set({kidsDrinkType:'storebought'})" style="padding:3px 8px;border-radius:12px;border:1px solid ${drinkType==='storebought'?'#d04080':'#3a1020'};background:${drinkType==='storebought'?'#2a0818':'transparent'};color:${drinkType==='storebought'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Store-bought</button>
            <button onclick="set({kidsDrinkType:'made'})" style="padding:3px 8px;border-radius:12px;border:1px solid ${drinkType==='made'?'#d04080':'#3a1020'};background:${drinkType==='made'?'#2a0818':'transparent'};color:${drinkType==='made'?'#f070a0':'#703050'};font-size:9px;cursor:pointer;">Make it</button>
          </div>
        </div>
        <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b> = ${k*250}ml total:</div>
        ${drinkType==='storebought'?`<div style="font-size:11px;color:#f5e8cc;">${th.drink.storebought}</div>`:`
          ${Object.entries(th.drink.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(L|ml|g)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
          <div style="font-size:10px;color:#806070;margin-top:6px;font-style:italic;">${th.drink.method}</div>
        `}
        <div style="font-size:9px;color:#703050;margin-top:4px;">~${th.drink.kcal} kcal per child</div>
      </div>

      <!-- CAKE -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;margin-bottom:8px;">🎂 ${th.cake.name}</div>
        <div style="font-size:10px;color:#906080;margin-bottom:6px;">Scaled for <b style="color:#f070a0;">${k} kids</b>:</div>
        ${Object.entries(th.cake.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(g|ml|L|kg)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
        <div style="font-size:10px;color:#806070;margin-top:8px;font-style:italic;">${th.cake.method}</div>
        <div style="font-size:9px;color:#703050;margin-top:4px;">~${th.cake.kcal} kcal per slice</div>
      </div>

      <!-- MASTER SNACKS SWAP -->
      <div onclick="set({kidsShowMasterSnacks:true})" style="background:#1a0010;border:1px dashed #803060;border-radius:10px;padding:12px;margin-bottom:16px;cursor:pointer;text-align:center;">
        <div style="font-size:13px;color:#f070a0;">🔄 Want to swap or add snacks?</div>
        <div style="font-size:10px;color:#703050;margin-top:4px;">Master Snacks — 12 building blocks, all scaled to ${k} kids</div>
      </div>

      <!-- DECOR -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div onclick="set({kidsShowDecor:!S.kidsShowDecor})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">🎈 Decor Ideas</div>
          <div style="font-size:11px;color:#d04080;">${S.kidsShowDecor?'▲ Hide':'▼ Show'}</div>
        </div>
        ${S.kidsShowDecor?`
          <div style="margin-top:10px;">
            <div style="font-size:11px;color:#f070a0;margin-bottom:5px;">🌿 Budget Decor</div>
            ${th.decor.budget.map(d=>`<div style="font-size:10px;color:#c08090;margin-bottom:3px;">· ${d}</div>`).join('')}
            <div style="font-size:11px;color:#f070a0;margin-top:10px;margin-bottom:5px;">✨ Styled Decor</div>
            ${th.decor.styled.map(d=>`<div style="font-size:10px;color:#c08090;margin-bottom:3px;">· ${d}</div>`).join('')}
            <div style="margin-top:10px;padding:8px;background:#100810;border-radius:6px;">
              <div style="font-size:10px;color:#f070a0;margin-bottom:3px;">📸 Photo Spot</div>
              <div style="font-size:10px;color:#c08090;">${th.decor.photospot}</div>
            </div>
            <div style="margin-top:10px;">
              <div style="font-size:10px;color:#f070a0;margin-bottom:5px;">🗺️ Zone Layout</div>
              ${th.zones.map(z=>`<div style="font-size:10px;color:#c08090;margin-bottom:2px;">${z}</div>`).join('')}
            </div>
          </div>
        `:''}
      </div>

      <!-- PREP TIMELINE -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div onclick="set({kidsShowTimeline:!S.kidsShowTimeline})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
          <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">⏱️ Prep Timeline</div>
          <div style="font-size:11px;color:#d04080;">${S.kidsShowTimeline?'▲ Hide':'▼ Show'}</div>
        </div>
        ${S.kidsShowTimeline?`
          <div style="margin-top:10px;">
            <div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:#f070a0;">2 Days Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.two}</div></div></div>
            <div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:#f070a0;">1 Day Ahead</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.one}</div></div></div>
            <div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:#f070a0;">Party Morning</div><div style="font-size:11px;color:#f5e8cc;">${th.timeline.morning}</div></div></div>
          </div>
        `:''}
      </div>

      <!-- GAMES -->
      <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:16px;">
        <div style="font-size:12px;color:#f5e8cc;font-weight:bold;margin-bottom:6px;">🎮 Party Games</div>
        <div style="font-size:10px;color:#c08090;">${th.games}</div>
      </div>

      <!-- SHOPPING LIST PRO -->
      <div style="background:#1a0020;border:1px solid #601040;border-radius:10px;padding:14px;margin-bottom:24px;text-align:center;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:4px;">📋 Shopping List</div>
        <div style="font-size:10px;color:#703050;margin-bottom:10px;">Complete auto-scaled list for ${k} kids — all food, drink, cake and crisps</div>
        <button style="padding:8px 20px;border-radius:20px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;font-family:Georgia,serif;">🔒 Pro Feature — Generate Shopping List</button>
      </div>

    </div>
  </div>`;
}

function kidsMasterSnacksHTML(k){
  const tc = {savoury:'#e0a060',sweet:'#e060a0',healthy:'#60c080'};
  return `
  <div style="background:#0f0e0c;min-height:100vh;">
    <div style="background:#1a0814;border-bottom:1px solid #803060;padding:16px 20px;">
      <div style="font-size:11px;color:#d04080;cursor:pointer;margin-bottom:8px;" onclick="set({kidsShowMasterSnacks:false})">← Back</div>
      <h2 style="font-size:20px;font-weight:normal;color:#f5e8cc;margin:0 0 4px;">🍿 Master Snacks</h2>
      <p style="font-size:11px;color:#803060;font-style:italic;margin:0;">12 reusable building blocks · All scaled to <b style="color:#f070a0;">${k} kids</b></p>
    </div>
    <div style="padding:16px;">
      ${MASTER_SNACKS.map(s=>`
        <div style="background:#1a0814;border:1px solid #2a1020;border-radius:10px;padding:12px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-size:12px;color:#f5e8cc;font-weight:bold;">${s.id}. ${s.name}</div>
            <div style="font-size:9px;padding:2px 7px;border-radius:8px;background:#1a0010;color:${tc[s.type]||'#c08090'};border:1px solid ${tc[s.type]||'#3a1020'};">${s.type}</div>
          </div>
          <div style="margin-top:8px;padding:8px;background:#100810;border-radius:6px;">
            <div style="font-size:10px;color:#906080;margin-bottom:4px;">For <b style="color:#f070a0;">${k} kids</b>:</div>
            ${Object.entries(s.base12).map(([key,val])=>{const m=val.match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=m[3]||'';const sc=Math.round(n*k/12*10)/10;return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${sc}${u}${rest}</b></div>`;}return `<div style="font-size:10px;color:#c08090;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;}).join('')}
          </div>
          <div style="font-size:10px;color:#703050;margin-top:5px;">Per person: ${s.perPerson} · ~${s.kcal} kcal</div>
        </div>
      `).join('')}
      <div style="background:#1a0020;border:1px solid #601040;border-radius:10px;padding:14px;margin-bottom:24px;text-align:center;">
        <div style="font-size:13px;color:#f070a0;margin-bottom:4px;">📋 Add to Shopping List</div>
        <div style="font-size:10px;color:#703050;margin-bottom:10px;">Select snacks and generate a combined shopping list</div>
        <button style="padding:8px 20px;border-radius:20px;border:1px solid #803060;background:#2a0818;color:#f070a0;font-size:11px;cursor:pointer;">🔒 Pro Feature</button>
      </div>
    </div>
  </div>`;
}


