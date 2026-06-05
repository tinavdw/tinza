// ── KIDDIES PARTY PLANNER ─────────────────────────────────────────
// Rebuilt on the v33 Braai template. Brown token palette, matching
// header / how-it-works collapsible / counter / box styling / nav.
// 3-layer flow:  12 theme boxes → 5 category boxes → recipe rows.
// Data lives in KIDS_THEMES and MASTER_SNACKS (unchanged).

// ── shared helpers ────────────────────────────────────────────────
function kidsSlug(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}

// clean display name: never show the word twice. Returns {name, extra}.
// equal -> just label; descriptor fuller (e.g. "rainbow pasta") -> use it;
// label fuller (e.g. "icing butter" vs "butter") -> keep label; otherwise both.
function kidsName(label,rest){
  label=String(label||'').trim(); rest=String(rest||'').trim();
  if(!rest) return {name:label,extra:''};
  const l=label.toLowerCase(), r=rest.toLowerCase();
  if(l===r) return {name:label,extra:''};
  if(r.includes(l)) return {name:rest,extra:''};
  if(l.includes(r)) return {name:label,extra:''};
  return {name:label,extra:rest};
}

// scaled ingredient rows from a base12 object (base of 12, scale to k kids)
function kidsScaleRows(base,k){
  return Object.entries(base||{}).map(([key,val])=>{
    const m=String(val).match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
    if(m){const n=parseFloat(m[1]);const u=m[2]||'';const rest=(m[3]||'').trim();const sc=Math.round(n*k/12*10)/10;
      const nm=kidsName(key.replace(/_/g,' '),rest);
      return `<div style="font-size:13px;color:#d8c8a8;line-height:1.9;">· ${nm.name}: <b style="color:#f5e8cc;">${sc}${u}</b>${nm.extra?` <span style="color:#7a5030;">${nm.extra}</span>`:''}</div>`;}
    return `<div style="font-size:13px;color:#d8c8a8;line-height:1.9;">· ${key.replace(/_/g,' ')}: <b style="color:#f5e8cc;">${val}</b></div>`;
  }).join('');
}

// braai-style large ingredient rows for the recipe detail screen
function kidsScaleRowsBig(base,k){
  return Object.entries(base||{}).map(([key,val])=>{
    const label=key.replace(/_/g,' ');
    const m=String(val).match(/^([\d.]+)\s*(g|ml|kg|L)?(.*)$/i);
    if(m){
      const n=parseFloat(m[1]);const u=m[2]||'';const rest=(m[3]||'').trim();
      const nm=kidsName(label,rest);
      const pp=Math.round(n/12*10)/10;        // per child (base is for 12)
      const tot=Math.round(n*k/12*10)/10;     // total for k kids
      return `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:10px 0;border-bottom:1px solid #2a1a10;">
        <span style="font-size:14px;color:#f5e8cc;">${nm.name}${nm.extra?` <span style="color:#7a5030;font-size:12px;">${nm.extra}</span>`:''}</span>
        <span style="font-size:13px;color:#7a5030;white-space:nowrap;text-align:right;">${pp}${u} pp · <b style="color:#f5c842;">${tot}${u} total</b></span>
      </div>`;
    }
    return `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:10px 0;border-bottom:1px solid #2a1a10;">
      <span style="font-size:14px;color:#f5e8cc;">${label}</span>
      <span style="font-size:14px;color:#f5c842;font-weight:bold;white-space:nowrap;">${val}</span>
    </div>`;
  }).join('');
}

// photo box with graceful emoji fallback (Images/Image/<Exact Recipe Name>.jpg)
function kidsPhotoBox(name,emoji,h){
  h=h||120;
  return `<div style="position:relative;width:100%;height:${h}px;border-radius:8px;overflow:hidden;margin-bottom:8px;background:#0f0c08;">
    <img src="Images/Image/${encodeURIComponent(cleanPhotoName(name))}.jpg" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';">
    <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:40px;background:#161210;border:1px dashed #3a2010;">${emoji||'🎂'}</div>
  </div>`;
}

// braai-style photo header
function kidsHeader(title,subtitle,backAction,backLabel,headerImg,tint){
  tint = tint || '#2a1808';
  return `<div class="header" style="padding:0;overflow:hidden;">
    <div style="position:relative;height:155px;background:linear-gradient(135deg,#1a0f06 0%,${tint} 100%);">
      <img src="https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image%20header/${encodeURIComponent(headerImg)}.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.05) 0%,rgba(8,4,2,0.88) 100%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:10px 14px 10px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <button onclick="${backAction}" style="flex-shrink:0;background:rgba(0,0,0,0.5);border:1px solid #c06020;color:#c06020;font-size:12px;cursor:pointer;padding:5px 10px;border-radius:6px;white-space:nowrap;">${backLabel}</button>
        </div>
        <h1 style="font-size:20px;font-weight:bold;color:#f5e8cc;margin:0 0 2px;text-shadow:0 2px 6px rgba(0,0,0,0.9);">${title}</h1>
        <p style="margin:0;font-size:11px;color:#c07040;font-style:italic;">${subtitle}</p>
      </div>
    </div>
  </div>`;
}

// how-it-works collapsible + kid counter + slider  (braai control bar)
function kidsControlBar(k,openKey,isOpen,howHTML){
  return `<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:10px 14px;margin-bottom:10px;">
    <div style="display:flex;align-items:center;gap:12px;">
      <button onclick="set({${openKey}:!S.${openKey}})" style="background:none;border:none;padding:0;color:#c8a84b;font-size:12px;font-family:Georgia,serif;cursor:pointer;white-space:nowrap;display:flex;align-items:center;gap:4px;flex-shrink:0;">
        <span style="font-size:10px;">${isOpen?'▲':'▼'}</span>
        <span style="text-decoration:underline;text-underline-offset:2px;">How it works</span>
      </button>
      <div style="width:1px;height:20px;background:#3a2010;flex-shrink:0;"></div>
      <div style="display:flex;align-items:center;gap:8px;flex:1;">
        <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:26px;height:26px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#c06020;font-size:16px;line-height:1;cursor:pointer;flex-shrink:0;">−</button>
        <span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${k}</span>
        <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:26px;height:26px;border-radius:50%;background:#2a1808;border:2px solid #c06020;color:#c06020;font-size:16px;line-height:1;cursor:pointer;flex-shrink:0;">+</button>
        <input type="range" min="4" max="50" value="${k}" oninput="S.kidsCount=parseInt(this.value);draw();" style="flex:1;accent-color:#c06020;height:4px;">
      </div>
      <span style="font-size:10px;color:#4a3020;flex-shrink:0;">kids</span>
    </div>
    ${isOpen?`
    <div onclick="event.stopPropagation()" style="margin-top:8px;padding:10px 12px;background:#1a1208;border-left:2px solid #c06020;border-radius:0 6px 6px 0;">
      <div style="font-size:12px;color:#c8b898;line-height:2;">${howHTML}</div>
    </div>`:''}
  </div>`;
}

// budget pills removed (Easy/Medium/Fancy dropped — single menu per theme)
function kidsBudgetPills(budget){ return ''; }

// the 5 categories for a theme
function kidsCategoryDefs(th){
  const sav=(th.recipes||[]).filter(r=>r.type==='savoury');
  const swt=(th.recipes||[]).filter(r=>r.type==='sweet'||r.type==='healthy');
  return [
    {id:'savoury', emoji:'🍢', label:'Savoury',   sub:'Snacks & bites',      count:sav.length},
    {id:'sweet',   emoji:'🍬', label:'Sweet',     sub:'Treats & goodies',    count:swt.length},
    {id:'cake',    emoji:'🎂', label:'The Cake',  sub:'Showstopper',         count:th.cake?1:0},
    {id:'drinks',  emoji:'🥤', label:'Drinks',    sub:'& Crisps add-on',     count:th.drink?1:0},
    {id:'planner', emoji:'🎉', label:'Planner',   sub:'Decor · Games · Time',count:0},
    {id:'plan',    emoji:'📋', label:'My Plan',   sub:'List · Cost · Shop',  count:0, plan:true},
  ];
}

// ── ROUTER + LAYER 1: theme landing ───────────────────────────────
function kidsPartyHTML(){
  const k = S.kidsCount||12;
  const budget = S.kidsBudget||'easy';

  if(S.kidsTheme && S.kidsScreen==='plan')        return kidsPlanHTML(S.kidsTheme,k,budget);
  if(S.kidsTheme && S.kidsScreen==='recipe')      return kidsRecipeDetailHTML(S.kidsTheme,S.kidsCategory||'savoury',S.kidsRecipe,k);
  if(S.kidsTheme && S.kidsScreen==='category')   return kidsCategoryHTML(S.kidsTheme,S.kidsCategory||'savoury',k,budget);
  if(S.kidsTheme && S.kidsScreen==='categories')  return kidsThemeCategoriesHTML(S.kidsTheme,k,budget);

  const searchVal = S.kidsSearch||'';
  const isOpen = S.kidsHowOpen||false;
  const filteredThemes = searchVal
    ? KIDS_THEMES.filter(t=>t.name.toLowerCase().includes(searchVal.toLowerCase())||(t.vibe||'').toLowerCase().includes(searchVal.toLowerCase()))
    : KIDS_THEMES;

  const howHTML = `
    1 · Pick a <strong style="color:#f5c842;">theme</strong> from the 12 boxes below<br>
    2 · Open a <strong style="color:#f5c842;">category</strong> — Savoury, Sweet, Cake, Drinks or Planner<br>
    3 · Set your <strong style="color:#f5c842;">kid count</strong> — every recipe scales automatically<br>
    4 · Add extras with <strong style="color:#f5c842;">+ Add more snacks</strong> on the Savoury &amp; Sweet pages`;

  return `<div>
    ${kidsHeader('🎂 Kiddies Parties','12 themes · 4 to 50 kids · scales automatically',"set({eventTab:null,kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null})",'← Events','kiddies')}
    <div class="content">
      <div style="display:flex;align-items:center;background:#161210;border:1px solid #3a2010;border-radius:20px;padding:7px 14px;margin-bottom:12px;">
        <span style="color:#c06020;margin-right:8px;font-size:14px;">🔍</span>
        <input type="text" id="kidsSearchInput" placeholder="Search themes…" oninput="set({kidsSearch:this.value})" value="${searchVal}" style="flex:1;background:none;border:none;outline:none;color:#f5e8cc;font-size:13px;font-family:Georgia,serif;"/>
        ${searchVal?`<button onclick="set({kidsSearch:''})" style="background:none;border:none;color:#6a4020;font-size:16px;cursor:pointer;">×</button>`:''}
      </div>

      <div style="font-size:10px;letter-spacing:2px;color:#6a4020;text-transform:uppercase;margin-bottom:10px;">Choose a party theme</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
        ${filteredThemes.length===0?`<div style="grid-column:1/-1;text-align:center;padding:30px 16px;background:#161210;border:1px solid #3a2010;border-radius:12px;"><div style="font-size:32px;margin-bottom:8px;">🎈</div><div style="font-size:13px;color:#a07050;">No themes match "${searchVal}"</div></div>`:''}
        ${filteredThemes.map(th=>`
          <div onclick="set({kidsTheme:'${th.id}',kidsScreen:'categories',kidsRemoved:[]})" style="background:#161210;border:1px solid #3a2010;border-radius:12px;padding:12px 6px;cursor:pointer;text-align:center;position:relative;">
            <div style="font-size:24px;margin-bottom:5px;">${th.emoji}</div>
            <div style="font-size:11px;color:#f5e8cc;font-weight:bold;margin-bottom:3px;line-height:1.2;">${th.name}</div>
            <div style="display:flex;gap:3px;justify-content:center;">${(th.colours||[]).slice(0,4).map(c=>`<div style="width:8px;height:8px;border-radius:50%;background:${c};"></div>`).join('')}</div>
          </div>`).join('')}
      </div>

      ${kidsControlBar(k,'kidsHowOpen',isOpen,howHTML)}
      ${kidsBudgetPills(budget)}
    </div>
  </div>`;
}

// ── LAYER 2: the 5 category boxes for a theme ─────────────────────
function kidsThemeCategoriesHTML(themeId,k,budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:#f5e8cc;">Theme not found. <button onclick="set({kidsScreen:'themes',kidsTheme:null})" style="color:#c06020;background:none;border:none;cursor:pointer;">← All themes</button></div>`;
  const isOpen = S.kidsCatHowOpen||false;
  const tint = (th.colours&&th.colours[0])?th.colours[0]+'33':'#2a1808';
  const cats = kidsCategoryDefs(th);
  const howHTML = `Each box opens its own recipes. <strong style="color:#f5c842;">Everything scales</strong> to your kid count. Add extra snacks with <strong style="color:#f5c842;">+ Add more snacks</strong> on the Savoury &amp; Sweet pages.`;

  return `<div>
    ${kidsHeader(th.emoji+' '+th.name, th.vibe||'', "set({kidsScreen:'themes',kidsTheme:null})", '← 12 Themes', th.name, tint)}
    <div class="content">
      <div style="font-size:10px;letter-spacing:2px;color:#6a4020;text-transform:uppercase;margin-bottom:10px;">What do you want to plan?</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:14px;">
        ${cats.map(c=>`
          <div onclick="set({kidsScreen:'${c.id==='cake'?'recipe':(c.plan?'plan':'category')}',kidsCategory:'${c.id}'})" style="background:#161210;border:1px solid ${c.plan?'#c0a020':'#3a2010'};border-radius:10px;padding:10px 4px;cursor:pointer;text-align:center;position:relative;">
            <div style="font-size:20px;margin-bottom:3px;">${c.emoji}</div>
            <div style="font-size:10px;color:#f5e8cc;font-weight:bold;margin-bottom:1px;">${c.label}</div>
            <div style="font-size:8px;color:#6a4020;line-height:1.3;">${c.sub}</div>
            ${c.count>0?`<div style="position:absolute;top:3px;right:3px;background:#c06020;color:#fff;border-radius:5px;font-size:8px;padding:1px 4px;">${c.count}</div>`:''}
          </div>`).join('')}
      </div>

      ${kidsControlBar(k,'kidsCatHowOpen',isOpen,howHTML)}
      ${kidsBudgetPills(budget)}
    </div>
  </div>`;
}

// ── Themed Crisps & Dips + homemade Popcorn ───────────────────────
// 6 homemade popcorn methods (no store-bought), each used by 2 themes.
// All start from kernels: pop ~10g kernels per kid in a little oil, lid on.
function kidsSnackExtras(id){
  const POP={
    butter:  {flav:'butter & sea salt', how:'Toss hot popcorn in melted butter + a little fine salt.'},
    cinnamon:{flav:'cinnamon-sugar',     how:'Toss in melted butter, then dust with sugar + cinnamon (3:1).'},
    caramel: {flav:'golden caramel',     how:'Boil sugar + butter + a splash of golden syrup to light gold, pour over, spread to set.'},
    cheesy:  {flav:'cheesy',             how:'Toss hot popcorn in a little melted butter + grated cheddar or parmesan + pinch salt.'},
    choc:    {flav:'chocolate drizzle',  how:'Drizzle melted white/milk chocolate over, scatter sprinkles, leave 10 min to set.'},
    jelly:   {flav:'jelly-dusted',       how:'Toss in melted butter, dust with 1 sachet jelly powder (blue for ocean / split into colours for rainbow).'}
  };
  const M={
    dino:        {pop:['Dino Crunch Popcorn','cheesy'],     dips:[['Swamp Dip','guacamole'],['Lava Dip','tomato salsa'],['Fossil Dip','onion & chive']]},
    unicorn:     {pop:['Unicorn Cloud Popcorn','choc'],     dips:[['Rainbow Dip','sweet chilli'],['Cloud Dip','cheesy'],['Garden Dip','garlic & herb']]},
    space:       {pop:['Moon Rock Popcorn','cheesy'],       dips:[['Alien Dip','guacamole'],['Meteor Dip','BBQ'],['Cosmic Dip','cheese & chive']]},
    pirate:      {pop:['Treasure Gold Popcorn','caramel'],  dips:[['Treasure Dip','cheesy'],['Shark Bite Dip','sweet chilli'],['Sea Salt Dip','onion & chive']]},
    mermaid:     {pop:['Ocean Foam Popcorn','jelly'],       dips:[['Ocean Dip','tzatziki'],['Coral Dip','sweet chilli'],['Pearl Dip','cheese & chive']]},
    construction:{pop:['Cement Mixer Popcorn','butter'],    dips:[['Cement Dip','onion & chive'],['Brick Dip','BBQ'],['Digger Dip','cheesy']]},
    safari:      {pop:['Safari Trail Popcorn','cinnamon'],  dips:[['Jungle Dip','guacamole'],['Watering Hole Dip','tzatziki'],['Roar Dip','sweet chilli']]},
    rainbow:     {pop:['Rainbow Popcorn','jelly'],          dips:[['Red Dip','tomato salsa'],['Yellow Dip','cheesy'],['Green Dip','guacamole']]},
    princess:    {pop:['Princess Pink Popcorn','choc'],     dips:[['Royal Dip','garlic & herb'],['Tea Party Dip','creamy mustard'],['Rose Dip','thousand island']]},
    farmyard:    {pop:['Haystack Popcorn','cinnamon'],      dips:[['Barn Dip','onion & chive'],['Hay Dip','cheesy'],['Mud Dip','guacamole']]},
    braai:       {pop:['Braai Butter Popcorn','butter'],    dips:[['Smoky Dip','BBQ'],['Chakalaka Dip','tomato salsa'],['Boere Dip','onion & chive']]},
    big5:        {pop:['Bushveld Gold Popcorn','caramel'],  dips:[['Sunset Dip','BBQ'],['Bushveld Dip','guacamole'],['Watering Hole Dip','tzatziki']]}
  };
  const t=M[id]||M.braai, p=POP[t.pop[1]];
  return {popName:t.pop[0], popKey:t.pop[1], popFlav:p.flav, popHow:p.how, dips:t.dips};
}

// Build full v33-template recipe objects for the homemade popcorn + themed dips,
// so they open exactly like every other recipe (photo, Serves box, ingredients, method).
function kidsPopcornRecipe(id){
  const sx=kidsSnackExtras(id);
  const BASE={kernels:'120g popcorn kernels', oil:'40ml sunflower oil'};
  const F={
    butter:  {type:'savoury',kcal:95, add:{butter:'50g butter',salt:'5g fine salt'},                                 finish:'Melt the butter and pour over, tossing well. Sprinkle over the fine salt and toss again.'},
    cinnamon:{type:'sweet',  kcal:130,add:{butter:'50g butter',sugar:'60g sugar',cinnamon:'10g ground cinnamon'},    finish:'Melt the butter and toss through the warm popcorn. Mix the sugar and cinnamon, dust over and toss to coat.'},
    caramel: {type:'sweet',  kcal:155,add:{sugar:'120g sugar',butter:'70g butter',syrup:'40ml golden syrup'},        finish:'Boil the sugar, butter and golden syrup together until light gold, about 4 minutes. Pour over the popcorn and stir, then spread on baking paper to set.'},
    cheesy:  {type:'savoury',kcal:120,add:{butter:'40g butter',cheese:'60g grated cheddar',salt:'3g fine salt'},     finish:'Melt the butter and toss through. Sprinkle over the grated cheese and salt while hot, tossing until coated.'},
    choc:    {type:'sweet',  kcal:165,add:{chocolate:'150g white or milk chocolate',sprinkles:'30g sprinkles'},      finish:'Melt the chocolate gently. Drizzle over the popcorn, scatter the sprinkles, and leave 10 minutes to set.'},
    jelly:   {type:'sweet',  kcal:135,add:{butter:'40g butter',jelly:'80g jelly powder'},                            finish:'Melt the butter and toss through. Dust over the jelly powder while warm, tossing to colour — blue for ocean, or split into colours for rainbow.'}
  };
  const f=F[sx.popKey]||F.butter;
  return {name:sx.popName, type:f.type, emoji:'🍿', per:'1 cup', time:15, kcal:f.kcal,
    base12:Object.assign({}, BASE, f.add),
    method:'Pop the kernels in the oil in a large pot with the lid on over medium heat, shaking now and then, until the popping slows. Tip into a big bowl. '+f.finish};
}
function kidsDipsRecipe(id){
  const sx=kidsSnackExtras(id);
  const ADD={
    'guacamole':'2 ripe avocados, mashed, + lemon','tomato salsa':'200g chopped tomato + ½ onion',
    'onion & chive':'1 packet onion soup powder + chives','sweet chilli':'60ml sweet chilli sauce',
    'cheesy':'80g grated cheddar','cheese & chive':'80g cream cheese + chives',
    'BBQ':'60ml BBQ sauce + pinch paprika','garlic & herb':'2 cloves garlic + mixed herbs',
    'tzatziki':'½ cucumber grated + garlic + dill','creamy mustard':'30ml wholegrain mustard + honey',
    'thousand island':'30ml mayo + tomato sauce + relish'
  };
  const niceName=sx.dips.map(d=>d[0].replace(/ Dip$/,'')).join(', ').replace(/, ([^,]+)$/,' & $1')+' Dips';
  const base12={sour_cream:'600g sour cream or plain yoghurt'};
  sx.dips.forEach(d=>{ base12[d[0].replace(/ /g,'_')]=ADD[d[1]]||d[1]; });
  const method='Split the sour cream or yoghurt evenly into three bowls. '+
    sx.dips.map(d=>`For ${d[0]}, stir ${ADD[d[1]]||d[1]} into one bowl.`).join(' ')+
    ' Chill for 15 minutes before serving.';
  return {name:niceName, type:'savoury', emoji:'🥣', per:'2 tbsp', time:10, kcal:60, base12, method};
}
function kidsDrinkRecipe(th){
  const d=th.drink; if(!d) return null;
  const sb=d.storebought?'Store-bought option: '+d.storebought+' ':'';
  return {name:d.name, type:'drink', emoji:'🥤', per:'≈250ml', time:5, kcal:d.kcal||null,
    base12:d.base12||{}, method:sb+(d.method||'Mix together and chill well. Serve cold.')};
}
function kidsCrispsRecipe(){
  return {name:'Crisps', type:'crisps', emoji:'🥔', per:'¼ packet', kcal:130,
    base12:{crisps:'360g crisps'},
    method:'Buy one large (120g) packet of crisps for every 4 kids and tip into bowls. For a healthy table, swap the crisps for carrot and cucumber sticks plus rice cakes.'};
}
// ── Extra snacks pulled from the costed Finger Foods recipes ───────
const KIDS_EXTRA_SNACKS = {
  savoury:['pz_margherita','sausagerolls','crumbedchickenstrips','baconviennas','minibeefmeatballs','ribletbites','rumpbites','worspineappleskewers'],
  sweet:['vanillacupcakes','fudgybrownies','chocdippedstrawberries','minilamingtons','peppermentcups','datecoconutballs','minimalavpudding','fruitskewers']
};
function kidsFingerById(id){
  if(typeof EVENTS_FINGER_FOODS==='undefined') return null;
  for(const g of Object.values(EVENTS_FINGER_FOODS)){
    if(Array.isArray(g)){ const f=g.find(x=>x&&x.id===id); if(f) return f; }
  }
  return null;
}
// convert a Finger Food into the kiddies recipe shape (per-child amounts + method + cost)
function kidsFingerToRecipe(id,type){
  const f=kidsFingerById(id); if(!f) return null;
  const base12={};
  (f.base300||[]).forEach(ing=>{ if(ing&&ing.pp!=null){ base12[ing.n]=(Math.round(ing.pp*12*100)/100)+(ing.u||''); } });
  const method=Array.isArray(f.method)?f.method.join(' '):(f.method||'');
  return {name:f.name, type:type||'savoury', emoji:f.emoji||'🍽️', per:'1 piece', kcal:f.kcal||null, costPP:f.costPP||0, base12, method, _finger:true};
}
function kidsExtraRecipeByName(name){
  for(const type of ['savoury','sweet']){
    for(const id of KIDS_EXTRA_SNACKS[type]){
      const f=kidsFingerById(id);
      if(f && f.name===name) return kidsFingerToRecipe(id,type);
    }
  }
  return null;
}
function kidsAddedSnacks(themeId){ return (S.kidsAddedSnacks&&S.kidsAddedSnacks[themeId])||[]; }
function kidsToggleSnack(themeId,id){
  var m=Object.assign({},S.kidsAddedSnacks||{});
  var arr=(m[themeId]||[]).slice();
  var i=arr.indexOf(id);
  if(i>=0) arr.splice(i,1); else arr.push(id);
  m[themeId]=arr; set({kidsAddedSnacks:m});
}
function kidsSyntheticRecipe(th,name){
  const pop=kidsPopcornRecipe(th.id); if(name===pop.name) return pop;
  const dip=kidsDipsRecipe(th.id); if(name===dip.name) return dip;
  if(th.drink && name===th.drink.name) return kidsDrinkRecipe(th);
  if(name==='Crisps') return kidsCrispsRecipe();
  return kidsExtraRecipeByName(name);
}

// ── LAYER 3: recipe rows for one category ─────────────────────────
function kidsCategoryHTML(themeId,catId,k,budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>`;
  const isOpen = S.kidsCatHowOpen||false;
  const tint = (th.colours&&th.colours[0])?th.colours[0]+'33':'#2a1808';
  const cats = kidsCategoryDefs(th);
  const labels={savoury:'🍢 Savoury Snacks',sweet:'🍬 Sweet Treats',cake:'🎂 The Cake',drinks:'🥤 Drinks & Crisps',planner:'🎉 Party Planner'};
  const howHTML = `Tap any recipe to open its <strong style="color:#f5c842;">ingredients, method &amp; photo</strong>. Quantities are already scaled to <b style="color:#f5c842;">${k} kids</b>.`;

  const pills = cats.map(c=>`<button onclick="set({kidsCategory:'${c.id}'${c.id==='cake'?",kidsScreen:'recipe'":''}})" style="flex-shrink:0;padding:6px 12px;border-radius:20px;border:1px solid ${catId===c.id?'#c06020':'#3a2010'};background:${catId===c.id?'#2a1008':'#0f0c08'};color:${catId===c.id?'#f5c842':'#6a4020'};font-size:11px;cursor:pointer;white-space:nowrap;">${c.emoji} ${c.label}</button>`).join('');

  let body='';
  if(catId==='savoury'||catId==='sweet'){
    const list=(th.recipes||[]).filter(r=> catId==='savoury' ? r.type==='savoury' : (r.type==='sweet'||r.type==='healthy'));
    const menu=(th.foods&&(th.foods[budget]||th.foods.easy))||[];
    const recipeCards = list.length===0 ? `<p style="font-size:13px;color:#4a3020;font-style:italic;">No recipes in this category yet.</p>`
      : list.map(r=>{
        const inMenu=menu.includes(r.name);
        const typeLabel=r.type==='savoury'?'🥩 Savoury':r.type==='sweet'?'🍬 Sweet':'🥗 Healthy';
        const nameEsc=r.name.replace(/'/g,"\\'");
        return `<div onclick="set({kidsScreen:'recipe',kidsRecipe:'${nameEsc}'})" style="background:#161210;border:1px solid #2a1a10;border-radius:10px;margin-bottom:6px;display:flex;align-items:center;gap:10px;padding:13px;cursor:pointer;">
            <span style="font-size:22px;">${r.emoji||'🍽️'}</span>
            <div style="flex:1;">
              <div style="font-size:15px;color:#f5e8cc;">${r.name}</div>
              <div style="font-size:11px;color:#7a5030;margin-top:3px;">${typeLabel} · ${r.per||''} per child · ${r.time||'?'} min · ~${r.kcal||'?'} kcal</div>
            </div>
            <span style="font-size:12px;color:#fff;background:#c06020;border-radius:6px;padding:5px 11px;white-space:nowrap;">Recipe →</span>
          </div>`;
      }).join('');
    const stype = catId==='savoury'?'savoury':'sweet';
    const added = kidsAddedSnacks(themeId);
    const extraIds = KIDS_EXTRA_SNACKS[stype]||[];
    const addedCards = extraIds.filter(id=>added.includes(id)).map(id=>{
      const r=kidsFingerToRecipe(id,stype); if(!r) return '';
      const nameEsc=r.name.replace(/'/g,"\\'");
      return `<div onclick="set({kidsScreen:'recipe',kidsRecipe:'${nameEsc}'})" style="background:#161210;border:1px solid #4a3015;border-radius:10px;margin-bottom:6px;display:flex;align-items:center;gap:10px;padding:13px;cursor:pointer;">
          <span style="font-size:22px;">${r.emoji}</span>
          <div style="flex:1;"><div style="font-size:15px;color:#f5e8cc;">${r.name} <span style="font-size:8px;color:#6aaa50;border:1px solid #4a8040;border-radius:6px;padding:1px 5px;margin-left:4px;">added</span></div>
            <div style="font-size:11px;color:#7a5030;margin-top:3px;">🍽️ Finger food · ~R${r.costPP}/child</div></div>
          <span style="font-size:12px;color:#fff;background:#c06020;border-radius:6px;padding:5px 11px;white-space:nowrap;">Recipe →</span>
        </div>`;
    }).join('');
    const showAdd = S.kidsShowAddSnacks||false;
    const pickerRows = extraIds.map(id=>{
      const f=kidsFingerById(id); if(!f) return '';
      const on=added.includes(id);
      return `<div onclick="kidsToggleSnack('${themeId}','${id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid #1e1a10;cursor:pointer;">
          <span style="font-size:16px;">${f.emoji||'🍽️'}</span>
          <div style="flex:1;font-size:13px;color:${on?'#6aaa50':'#c8b898'};">${f.name} <span style="color:#6a4020;">~R${f.costPP}/pp</span></div>
          <span style="font-size:11px;color:${on?'#6aaa50':'#c06020'};border:1px solid ${on?'#4a8040':'#c06020'};border-radius:6px;padding:3px 9px;white-space:nowrap;">${on?'✓ Added':'+ Add'}</span>
        </div>`;
    }).join('');
    const picker = `
      <button onclick="set({kidsShowAddSnacks:${showAdd?'false':'true'}})" style="width:100%;padding:12px;margin-top:8px;border-radius:10px;cursor:pointer;background:#1a1408;border:1px dashed #c0a020;color:#f5c842;font-size:13px;font-family:Georgia,serif;">+ Add more snacks ${showAdd?'▲':'▼'}</button>
      ${showAdd?`<div style="background:#120c08;border:1px solid #2a1a10;border-radius:10px;margin-top:6px;overflow:hidden;">${pickerRows}</div>`:''}`;
    body = recipeCards + addedCards + picker;
  }
  else if(catId==='cake'){
    const c=th.cake;
    body = !c ? `<p style="font-size:13px;color:#4a3020;font-style:italic;">No cake for this theme yet.</p>` : `
      <div onclick="set({kidsScreen:'recipe'})" style="background:#161210;border:1px solid #2a1a10;border-radius:10px;display:flex;align-items:center;gap:10px;padding:13px;cursor:pointer;">
        <span style="font-size:22px;">🎂</span>
        <div style="flex:1;"><div style="font-size:15px;color:#f5e8cc;">${c.name}</div><div style="font-size:11px;color:#7a5030;margin-top:3px;">🎂 The Cake${c.kcal?` · ~${c.kcal} kcal per slice`:''}</div></div>
        <span style="font-size:12px;color:#fff;background:#c06020;border-radius:6px;padding:5px 11px;white-space:nowrap;">Recipe →</span>
      </div>`;
  }
  else if(catId==='drinks'){
    const d=th.drink;
    const crispPackets=Math.ceil(k/4);
    const popRec=kidsPopcornRecipe(th.id), dipRec=kidsDipsRecipe(th.id);
    const esc=s=>s.replace(/'/g,"\\'");
    const recCard=(emoji,nm,sub,openName)=>`<div onclick="set({kidsScreen:'recipe',kidsRecipe:'${esc(openName)}'})" style="background:#161210;border:1px solid #2a1a10;border-radius:10px;margin-bottom:6px;display:flex;align-items:center;gap:10px;padding:13px;cursor:pointer;"><span style="font-size:22px;">${emoji}</span><div style="flex:1;"><div style="font-size:15px;color:#f5e8cc;">${nm}</div><div style="font-size:11px;color:#7a5030;margin-top:3px;">${sub}</div></div><span style="font-size:12px;color:#fff;background:#c06020;border-radius:6px;padding:5px 11px;white-space:nowrap;">Recipe →</span></div>`;
    body = `
      ${d?recCard('🥤',d.name,'🥤 Drink · '+(k*250)+'ml total · store-bought or make it',d.name):''}
      ${recCard('🥔','Crisps','🥔 '+crispPackets+' × 120g packet'+(crispPackets>1?'s':'')+' · or healthy swap','Crisps')}
      ${recCard('🍿',popRec.name,(popRec.type==='savoury'?'🥩 Savoury':'🍬 Sweet')+' popcorn · homemade · ~'+popRec.kcal+' kcal',popRec.name)}
      ${recCard('🥣',dipRec.name,'🥣 3 homemade dips · ~'+dipRec.kcal+' kcal · '+dipRec.time+' min',dipRec.name)}`;
  }
  else { // planner
    const dShow=S.kidsShowDecor, tShow=S.kidsShowTimeline;
    const box=(open,key,title,inner)=>`<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:8px;">
      <div onclick="set({${key}:!S.${key}})" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;min-height:24px;">
        <div style="font-size:13px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;">${title}</div>
        <div style="font-size:11px;color:#c06020;">${open?'▲ Hide':'▼ Show'}</div>
      </div>${open?`<div onclick="event.stopPropagation()" style="margin-top:10px;">${inner}</div>`:''}</div>`;
    const dec=th.decor||{}, zones=th.zones||[], tl=th.timeline||{};
    const decorInner=`
      <div style="font-size:11px;color:#c06020;margin-bottom:5px;">🌿 Budget Decor</div>${(dec.budget||[]).map(d=>`<div style="font-size:11px;color:#c8b898;margin-bottom:3px;">· ${d}</div>`).join('')}
      <div style="font-size:11px;color:#c06020;margin:10px 0 5px;">✨ Styled Decor</div>${(dec.styled||[]).map(d=>`<div style="font-size:11px;color:#c8b898;margin-bottom:3px;">· ${d}</div>`).join('')}
      ${dec.photospot?`<div style="margin-top:10px;padding:8px;background:#120c08;border-radius:6px;"><div style="font-size:11px;color:#c06020;margin-bottom:3px;">📸 Photo Spot</div><div style="font-size:11px;color:#c8b898;">${dec.photospot}</div></div>`:''}
      ${zones.length?`<div style="margin-top:10px;"><div style="font-size:11px;color:#c06020;margin-bottom:5px;">🗺️ Zone Layout</div>${zones.map(z=>`<div style="font-size:11px;color:#c8b898;margin-bottom:2px;">${z}</div>`).join('')}</div>`:''}`;
    const tlInner=`
      ${tl.two?`<div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:#c06020;">2 Days Ahead</div><div style="font-size:11px;color:#f5e8cc;">${tl.two}</div></div></div>`:''}
      ${tl.one?`<div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:#c06020;">1 Day Ahead</div><div style="font-size:11px;color:#f5e8cc;">${tl.one}</div></div></div>`:''}
      ${tl.morning?`<div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:#c06020;">Party Morning</div><div style="font-size:11px;color:#f5e8cc;">${tl.morning}</div></div></div>`:''}`;
    body = `
      ${(dec.budget||dec.styled||zones.length)?box(dShow,'kidsShowDecor','🎈 Decor Ideas',decorInner):''}
      ${(tl.two||tl.one||tl.morning)?box(tShow,'kidsShowTimeline','⏱️ Prep Timeline',tlInner):''}
      ${th.games?`<div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-bottom:8px;"><div style="font-size:13px;color:#f5e8cc;font-weight:bold;font-family:Georgia,serif;margin-bottom:6px;">🎮 Party Games</div><div style="font-size:11px;color:#c8b898;line-height:1.7;">${th.games}</div></div>`:''}
      ${((typeof tierAllows==='function')?tierAllows('pro'):false)
        ? `<div onclick="set({kidsScreen:'plan',kidsCategory:'plan'})" style="background:#1a1408;border:1px solid #c0a020;border-radius:10px;padding:16px;margin-bottom:8px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:#f5c842;margin-bottom:4px;font-family:Georgia,serif;">📋 Full Shopping List</div>
        <div style="font-size:10px;color:#6a4020;margin-bottom:8px;">Auto-scaled &amp; consolidated for ${k} kids</div>
        <div style="font-size:12px;color:#fff;background:#c06020;border-radius:6px;padding:6px 14px;display:inline-block;">Open list →</div>
      </div>`
        : `<div style="background:#1a1408;border:1px solid #3a2010;border-radius:10px;padding:18px;margin-bottom:8px;text-align:center;">
        <div style="font-size:28px;margin-bottom:6px;">🔒</div>
        <div style="font-size:13px;color:#f5c842;margin-bottom:4px;font-family:Georgia,serif;">Full Shopping List</div>
        <div style="font-size:10px;color:#6a4020;margin-bottom:8px;">Auto-scaled &amp; consolidated for ${k} kids</div>
        <div style="font-size:12px;color:#c06020;font-weight:bold;">Unlock with Tinza Pro — R99/month</div>
      </div>`}`;
  }

  return `<div>
    ${kidsHeader(th.emoji+' '+th.name, labels[catId]||'', "set({kidsScreen:'categories',kidsCategory:null,kidsOpenRecipe:null})", '← '+th.name, th.name, tint)}
    <div class="content">
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;-webkit-overflow-scrolling:touch;scrollbar-width:none;">${pills}</div>
      ${kidsControlBar(k,'kidsCatHowOpen',isOpen,howHTML)}
      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;padding:4px 0 10px;border-bottom:1px solid #2a1a10;margin-bottom:12px;">${labels[catId]||''}</div>
      ${body}
      <button onclick="set({kidsScreen:'categories',kidsCategory:null,kidsOpenRecipe:null})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#161210;border:1px solid #3a2010;color:#6a4020;font-size:13px;margin:10px 0 20px;">← Back to ${th.name}</button>
    </div>
  </div>`;
}

// ── LAYER 4: braai-style recipe detail ────────────────────────────
function kidsRecipeDetailHTML(themeId,catId,recipeName,k){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>`;
  const tint = (th.colours&&th.colours[0])?th.colours[0]+'33':'#2a1808';
  let rec;
  if(catId==='cake'){
    const c=th.cake;
    if(!c) return `<div style="padding:20px;color:#f5e8cc;">No cake here.</div>`;
    rec={name:c.name,base12:c.base12,method:c.method,kcal:c.kcal,emoji:'🎂',type:'cake',per:'1 slice',time:''};
  } else {
    rec=(th.recipes||[]).find(r=>r.name===recipeName) || kidsSyntheticRecipe(th,recipeName);
  }
  if(!rec) return `<div style="padding:20px;color:#f5e8cc;">Recipe not found. <button onclick="set({kidsScreen:'category'})" style="color:#c06020;background:none;border:none;cursor:pointer;">← Back</button></div>`;

  const photoEmoji = rec.emoji || (rec.type==='cake'?'🎂':rec.type==='savoury'?'🍢':rec.type==='healthy'?'🥗':'🍬');
  const typeLabel=rec.type==='savoury'?'🥩 Savoury':rec.type==='sweet'?'🍬 Sweet':rec.type==='healthy'?'🥗 Healthy':rec.type==='drink'?'🥤 Drink':rec.type==='crisps'?'🥔 Crisps':'🎂 Cake';
  const meta=[typeLabel, rec.per?rec.per+' per child':'', rec.time?rec.time+' min':'', rec.kcal?'~'+rec.kcal+' kcal':''].filter(Boolean).join(' · ');
  const steps=(rec.method||'').split(/(?<=[.!?])\s+/).map(s=>s.trim()).filter(Boolean);
  const methodHTML = steps.length
    ? steps.map((s,i)=>`<div style="display:flex;gap:10px;margin-bottom:11px;align-items:flex-start;">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;border:2px solid #c06020;color:#c06020;font-size:12px;font-weight:bold;display:flex;align-items:center;justify-content:center;">${i+1}</div>
        <div style="font-size:14px;color:#c8b898;line-height:1.55;padding-top:1px;">${s}</div>
      </div>`).join('')
    : `<div style="font-size:13px;color:#4a3020;font-style:italic;">No method steps yet.</div>`;

  return `<div>
    <div class="header" style="background:#161210;border-bottom:1px solid #3a2010;">
      <button onclick="set({kidsScreen:'category',kidsRecipe:null})" style="background:rgba(0,0,0,0.4);border:1px solid #c06020;color:#c06020;font-size:12px;cursor:pointer;padding:5px 10px;border-radius:6px;margin-bottom:8px;">← ${th.emoji} ${th.name}</button>
      <h1 style="font-size:20px;font-weight:bold;color:#f5e8cc;margin:0 0 2px;font-family:Georgia,serif;">${photoEmoji} ${rec.name}</h1>
      <p style="margin:0;font-size:11px;color:#c07040;font-style:italic;">${meta}</p>
    </div>
    <div class="content">
      ${recipePhoto(rec.name,photoEmoji)}

      <div style="background:#0d1a0a;border:1px solid #2a5020;border-radius:12px;padding:14px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:10px;letter-spacing:1px;color:#5a8040;text-transform:uppercase;">Serves</div>
          <div style="font-size:30px;color:#f5c842;font-weight:bold;line-height:1;">${k} <span style="font-size:16px;color:#6aaa50;">kids</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})" style="width:34px;height:34px;border-radius:50%;background:transparent;border:2px solid #4a8040;color:#6aaa50;font-size:18px;line-height:1;cursor:pointer;">−</button>
          <span style="font-size:24px;color:#f5e8cc;font-weight:bold;min-width:30px;text-align:center;">${k}</span>
          <button onclick="set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" style="width:34px;height:34px;border-radius:50%;background:transparent;border:2px solid #4a8040;color:#6aaa50;font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>

      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:4px;">🧺 Ingredients</div>
      <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:6px 14px 12px;margin-bottom:16px;">
        ${kidsScaleRowsBig(rec.base12,k)}
      </div>

      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">👩‍🍳 Method</div>
      <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:16px;">
        ${methodHTML}
      </div>

      <div style="display:flex;gap:8px;margin-bottom:22px;">
        <button onclick="set({kidsScreen:'categories',kidsRecipe:null})" style="flex:1;padding:12px 8px;border-radius:10px;background:#161210;border:1px solid #3a2010;color:#c07040;font-size:12px;cursor:pointer;line-height:1.3;">← ${th.name} menu</button>
        <button onclick="set({kidsScreen:'themes',kidsTheme:null,kidsRecipe:null})" style="flex:1;padding:12px 8px;border-radius:10px;background:#1a1408;border:1px solid #c0a020;color:#f5c842;font-size:12px;cursor:pointer;line-height:1.3;">🎂 Kiddies Party</button>
      </div>
    </div>
  </div>`;
}


// ── MY PLAN · SHOPPING LIST · COSTING ─────────────────────────────
// Reuses the app's lookupPrice / normIngredientKey / aisleCategory.
// Costs weight/volume items (g·kg·ml·l) that exist in PRICE_DB.
// Count items, store-bought packs and anything without a price are
// flagged "price needed" rather than shown as R0.

function kidsToggleRemoved(key){
  const r = S.kidsRemoved || [];
  S.kidsRemoved = r.includes(key) ? r.filter(x=>x!==key) : [...r, key];
  draw();
}

// gather the items currently in the plan (budget menu + cake + drink + crisps), minus removed
function kidsPlanItems(th, budget){
  const removed = S.kidsRemoved || [];
  const menu = (th.foods && (th.foods[budget] || th.foods.easy)) || [];
  const items = [];
  menu.forEach(n=>{
    const r = (th.recipes||[]).find(x=>x.name===n);
    if(r) items.push({key:r.name, label:r.name, emoji:r.emoji||'🍽️', base12:r.base12, removed:removed.includes(r.name)});
  });
  if(th.cake)  items.push({key:'CAKE',  label:th.cake.name,  emoji:'🎂', base12:th.cake.base12,  removed:removed.includes('CAKE')});
  if(th.drink) items.push({key:'DRINK', label:th.drink.name, emoji:'🥤', base12:th.drink.base12, removed:removed.includes('DRINK')});
  const pop = kidsPopcornRecipe(th.id);
  items.push({key:'POPCORN', label:pop.name, emoji:'🍿', base12:pop.base12, removed:removed.includes('POPCORN')});
  const dip = kidsDipsRecipe(th.id);
  items.push({key:'DIPS', label:dip.name, emoji:'🥣', base12:dip.base12, removed:removed.includes('DIPS')});
  const added=kidsAddedSnacks(th.id);
  ['savoury','sweet'].forEach(type=>{
    (KIDS_EXTRA_SNACKS[type]||[]).forEach(id=>{
      if(!added.includes(id)) return;
      const f=kidsFingerById(id); if(!f) return;
      items.push({key:'X_'+id, label:f.name, emoji:f.emoji||'🍽️', base12:{}, costPP:f.costPP||0, snack:true, removed:removed.includes('X_'+id)});
    });
  });
  return items;
}

// helper: safe price lookup (app provides lookupPrice; fall back to null)
function kidsPrice(name){ try { return (typeof lookupPrice==='function') ? lookupPrice(name) : null; } catch(e){ return null; } }
function kidsAisle(name){ try { return (typeof aisleCategory==='function') ? aisleCategory(name) : '🧂 Other'; } catch(e){ return '🧂 Other'; } }
function kidsNorm(name){ try { return (typeof normIngredientKey==='function') ? normIngredientKey(name) : name.toLowerCase().trim(); } catch(e){ return name.toLowerCase().trim(); } }

// consolidate ingredients across the selected plan items, scaled to k kids
function kidsConsolidate(items, k){
  const map = {};
  items.filter(it=>!it.removed).forEach(it=>{
    Object.entries(it.base12||{}).forEach(([key,val])=>{
      String(val).split(/\s*\+\s*/).forEach(part=>{
        part = part.trim(); if(!part) return;
        const m = part.match(/^([\d.]+)\s*(g|kg|ml|l)?\s*(.*)$/i);
        let amt=null, unit='', name=part;
        if(m && m[1]!==undefined){ amt=parseFloat(m[1]); unit=(m[2]||'').toLowerCase(); name=(m[3]||'').trim() || key.replace(/_/g,' '); }
        else { name = part || key.replace(/_/g,' '); }
        let grams=null, count=null, liquid=false;
        if(amt!=null){
          const sc = amt * k / 12;
          if(unit==='kg'){ grams = sc*1000; }
          else if(unit==='l'){ grams = sc*1000; liquid=true; }
          else if(unit==='ml'){ grams = sc; liquid=true; }
          else if(unit==='g'){ grams = sc; }
          else count = sc;                       // no weight unit → counted item
        }
        const nk = kidsNorm(name) || name.toLowerCase();
        if(!map[nk]) map[nk] = {name:name, grams:0, count:0, hasGrams:false, hasCount:false, liquid:false};
        if(grams!=null){ map[nk].grams += grams; map[nk].hasGrams=true; if(liquid) map[nk].liquid=true; }
        if(count!=null){ map[nk].count += count; map[nk].hasCount=true; }
      });
    });
  });
  // crisps add-on (scales by packets, not /12)
  const packets = Math.ceil(k/4);
  map['__crisps'] = {name:'crisp packets (120g)', grams:0, count:packets, hasGrams:false, hasCount:true, packet:true};
  return Object.values(map);
}

function kidsFmtAmt(row){
  if(row.hasGrams){
    const v = Math.round(row.grams);
    if(row.liquid) return v>=1000 ? (v/1000).toFixed(v%1000?1:0)+'L' : v+'ml';
    return v>=1000 ? (v/1000).toFixed(v%1000?1:0)+'kg' : v+'g';
  }
  if(row.hasCount){ const c=Math.round(row.count*10)/10; return (row.packet? c+' × 120g' : c+'×'); }
  return '';
}

function kidsPlanHTML(themeId, k, budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:#f5e8cc;">Theme not found.</div>`;
  const tint = (th.colours&&th.colours[0]) ? th.colours[0]+'33' : '#2a1808';

  // ── Pro gate: My Plan, shopping list & costing are a Pro feature ──
  const kidsIsPro = (typeof tierAllows==='function') ? tierAllows('pro') : false;
  if(!kidsIsPro){
    return `<div>
      ${kidsHeader('📋 '+th.name+' — Plan', 'Menu · shopping list · cost', "set({kidsScreen:'categories'})", '← '+(th.emoji+' '+th.name), th.name, tint)}
      <div class="content">
        <div style="background:#1a1408;border:1px solid #3a2010;border-radius:12px;padding:26px 18px;margin:8px 0 12px;text-align:center;">
          <div style="font-size:34px;margin-bottom:8px;">🔒</div>
          <div style="font-size:15px;color:#f5c842;margin-bottom:6px;font-family:Georgia,serif;">Party Plan &amp; Shopping List</div>
          <div style="font-size:12px;color:#c8b898;line-height:1.6;margin-bottom:14px;">Get your whole party menu auto-scaled to <b style="color:#f5c842;">${k} kids</b>, consolidated into one aisle-sorted shopping list with a live cost estimate.</div>
          <div style="font-size:13px;color:#fff;background:#c06020;border-radius:8px;padding:9px 18px;display:inline-block;">Unlock with Tinza Pro — R99/month</div>
        </div>
        <button onclick="set({kidsScreen:'categories'})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#161210;border:1px solid #3a2010;color:#6a4020;font-size:13px;margin:4px 0 20px;">← Back to ${th.name}</button>
      </div>
    </div>`;
  }

  const isOpen = S.kidsCatHowOpen || false;
  const howHTML = `Your theme's menu is loaded automatically. <strong style="color:#f5c842;">Tap ✕ to remove</strong> anything you won't make — the shopping list and cost update instantly. Everything scales to <b style="color:#f5c842;">${k} kids</b>.`;

  const items = kidsPlanItems(th, budget);
  const rows = kidsConsolidate(items, k);

  // cost each row
  let total = 0; let unpriced = [];
  rows.forEach(r=>{
    let cost = null;
    if(r.hasGrams){
      const p = kidsPrice(r.name);
      if(p!=null && r.grams>0){ cost = (r.grams/1000)*p; total += cost; }
    }
    r.cost = cost;
    r.aisle = kidsAisle(r.name);
    if(cost==null) unpriced.push(r.name);
  });
  items.filter(it=>it.snack && !it.removed).forEach(it=>{ total += (it.costPP||0)*k; });
  total = Math.round(total);
  const perChild = k>0 ? Math.round(total/k) : 0;

  // menu list with remove toggles
  const menuList = items.map(it=>`
    <div style="display:flex;align-items:center;gap:10px;padding:11px 12px;margin-bottom:6px;background:${it.removed?'#0f0c08':'#161210'};border:1px solid ${it.removed?'#1e1a10':'#2a1a10'};border-radius:10px;opacity:${it.removed?0.55:1};">
      <span style="font-size:18px;">${it.emoji}</span>
      <div style="flex:1;font-size:14px;color:${it.removed?'#6a4020':'#f5e8cc'};${it.removed?'text-decoration:line-through;':''}">${it.label}</div>
      <button onclick="kidsToggleRemoved('${it.key.replace(/'/g,"\\'")}')" style="flex-shrink:0;background:${it.removed?'#1a1408':'#2a1808'};border:1px solid ${it.removed?'#c0a020':'#c06020'};color:${it.removed?'#f5c842':'#c06020'};font-size:11px;border-radius:6px;padding:5px 10px;cursor:pointer;white-space:nowrap;">${it.removed?'＋ Add back':'✕ Remove'}</button>
    </div>`).join('');

  // shopping list grouped by aisle
  const aisleOrder = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  rows.sort((a,b)=> aisleOrder.indexOf(a.aisle)-aisleOrder.indexOf(b.aisle) || a.name.localeCompare(b.name));
  let shopHTML=''; let lastAisle=null;
  rows.forEach(r=>{
    if(r.aisle!==lastAisle){ shopHTML += `<div style="font-size:10px;letter-spacing:1.5px;color:#6a4020;text-transform:uppercase;padding:10px 0 4px;border-bottom:1px solid #1e1a10;margin-bottom:4px;">${r.aisle}</div>`; lastAisle=r.aisle; }
    const costTag = r.cost!=null
      ? `<span style="font-size:13px;color:#f5c842;font-weight:bold;white-space:nowrap;">R${Math.round(r.cost)}</span>`
      : `<span style="font-size:9px;color:#a07050;border:1px solid #4a3020;border-radius:6px;padding:2px 6px;white-space:nowrap;">price needed</span>`;
    shopHTML += `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:8px 0;">
      <span style="font-size:13px;color:#c8b898;">${r.name} <b style="color:#f5e8cc;">${kidsFmtAmt(r)}</b></span>${costTag}
    </div>`;
  });
  const snackItems = items.filter(it=>it.snack && !it.removed);
  if(snackItems.length){
    shopHTML += `<div style="font-size:10px;letter-spacing:1.5px;color:#6a4020;text-transform:uppercase;padding:10px 0 4px;border-bottom:1px solid #1e1a10;margin-bottom:4px;">🎉 Party Snacks (see recipe for ingredients)</div>`;
    snackItems.forEach(it=>{
      shopHTML += `<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:8px 0;">
        <span style="font-size:13px;color:#c8b898;">${it.emoji} ${it.label} <b style="color:#f5e8cc;">× ${k} kids</b></span>
        <span style="font-size:13px;color:#f5c842;font-weight:bold;white-space:nowrap;">R${Math.round((it.costPP||0)*k)}</span>
      </div>`;
    });
  }

  return `<div>
    ${kidsHeader('📋 '+th.name+' — Plan', 'Menu · shopping list · cost for '+k+' kids', "set({kidsScreen:'categories'})", '← '+(th.emoji+' '+th.name), th.name, tint)}
    <div class="content">
      ${kidsControlBar(k,'kidsCatHowOpen',isOpen,howHTML)}

      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">🎈 Your party menu</div>
      ${menuList}

      <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin:16px 0 6px;">🛒 Shopping list</div>
      <div style="background:#161210;border:1px solid #3a2010;border-radius:10px;padding:6px 14px 12px;margin-bottom:12px;">
        ${shopHTML || '<p style="font-size:13px;color:#4a3020;font-style:italic;">Nothing selected.</p>'}
      </div>

      <div style="background:#1a1408;border:1px solid #c0a020;border-radius:12px;padding:16px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <div style="font-size:10px;letter-spacing:1px;color:#8a7030;text-transform:uppercase;">Estimated cost</div>
            <div style="font-size:30px;color:#f5c842;font-weight:bold;line-height:1.1;">from R${total}</div>
            <div style="font-size:11px;color:#8a7030;">≈ R${perChild} per child</div>
          </div>
          <div style="font-size:28px;">🎂</div>
        </div>
        ${unpriced.length?`<div style="margin-top:10px;padding:8px 10px;background:#120c08;border-radius:6px;font-size:10px;color:#a07050;line-height:1.5;">⚠️ ${unpriced.length} item${unpriced.length>1?'s':''} not yet priced (counted items &amp; party extras). Add them to your price list and the total fills in automatically.</div>`:''}
      </div>

      <div style="display:flex;gap:8px;margin-bottom:22px;">
        <button onclick="set({kidsScreen:'categories'})" style="flex:1;padding:12px 8px;border-radius:10px;background:#161210;border:1px solid #3a2010;color:#c07040;font-size:12px;cursor:pointer;line-height:1.3;">← ${th.name} menu</button>
        <button onclick="set({kidsScreen:'themes',kidsTheme:null,kidsRemoved:[]})" style="flex:1;padding:12px 8px;border-radius:10px;background:#1a1408;border:1px solid #c0a020;color:#f5c842;font-size:12px;cursor:pointer;line-height:1.3;">🎂 Kiddies Party</button>
      </div>
    </div>
  </div>`;
}
