// Universal opener. A Kiddies recipe's identity = (theme, category, name).
// Category comes from where you tapped (savoury / sweet / drinks); the cake
// has its own opener because it lives at th.cake, not in th.recipes.
function openKidsRecipe(name){
  openRecipe('kiddies', kiddiesId(S.kidsTheme, S.kidsCategory||'savoury', name));
}
function openKidsCake(themeId){
  var th=(typeof KIDS_THEMES!=='undefined')?KIDS_THEMES.find(function(t){return t.id===themeId;}):null;
  if(!th||!th.cake) return;
  var rt=(typeof snapshotNav==='function')?snapshotNav():{};
  rt.kidsScreen='category'; rt.kidsCategory='cake'; rt.kidsTheme=themeId;  // Back lands on the cake list
  openRecipe('kiddies', kiddiesId(themeId,'cake',th.cake.name), {returnTo:rt});
}
function kiddiesId(themeId,catId,name){ return String(themeId)+'\u00a7'+String(catId)+'\u00a7'+String(name); }
// ── KIDDIES PARTY PLANNER ─────────────────────────────────────────
// Rebuilt on the v33 Braai template. Brown token palette, matching
// header / how-it-works collapsible / counter / box styling / nav.
// 3-layer flow:  12 theme boxes → 5 category boxes → recipe rows.
// Data lives in KIDS_THEMES and MASTER_SNACKS (unchanged).

// ── shared helpers ────────────────────────────────────────────────
function kidsSlug(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
// #6: "icing butter"/"icing milk"/"icing cocoa" are just butter/milk/cocoa (not real products); keep real "icing sugar".
function kidsKeyLabel(key){ const map={icing_butter:'butter',icing_milk:'milk',icing_cocoa:'cocoa'}; return (map[key]||String(key)).replace(/_/g,' '); }

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


// Shared section banner (sectionHeader) + the Events ←/🏠 nav strip, exactly like
// the other Events sub-sections (buffet renders sectionHeader + eventsTopNav too).
// Themed via the per-theme header image; emoji-on-gradient fallback when it 404s.
// `tint` is no longer used (the banner is photo-based) — kept in the signature so
// the existing call sites need no change.
function kidsHeader(title,subtitle,backAction,backLabel,headerImg,tint){
  return eventsTopNav('var(--accent)') + sectionHeader({
    title: title, emoji: '', tagline: subtitle,
    img: 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image%20header/'+encodeURIComponent(headerImg||'')+'.jpg',
    backJs: backAction, backLabel: backLabel
  });
}

// Shared ± kid-count stepper (guestStepperCard) — the same stepper every My Plan
// page uses. Slider dropped for sameness; the How-it-works copy rides in
// portionHowHTML as a collapsible. +/- still drive S.kidsCount → rescales the plan.
function kidsControlBar(k,openKey,isOpen,howHTML){
  var how = `<div onclick="set({${openKey}:!S.${openKey}})" style="margin-top:10px;color:var(--accent);font-size:12px;font-family:Georgia,serif;cursor:pointer;display:flex;align-items:center;gap:4px;"><span style="font-size:10px;">${isOpen?'▲':'▼'}</span><span style="text-decoration:underline;text-underline-offset:2px;">How it works</span></div>${isOpen?`<div style="margin-top:6px;font-size:12px;color:var(--ink-soft);line-height:2;">${howHTML}</div>`:''}`;
  return guestStepperCard({
    label:'Kids', value:k, note:'the whole party menu scales to this',
    decJs:"set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})",
    incJs:"set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})",
    portionHowHTML: how
  });
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
  if(S.kidsTheme && S.kidsScreen==='category')   return kidsCategoryHTML(S.kidsTheme,S.kidsCategory||'savoury',k,budget);
  if(S.kidsTheme && S.kidsScreen==='categories')  return kidsThemeCategoriesHTML(S.kidsTheme,k,budget);

  const searchVal = S.kidsSearch||'';
  const isOpen = S.kidsHowOpen||false;
  // MF46 · theme filter moved to kidsThemeGridInner() so liveSearch can call it as a pluggable
  // filterFn (themes are NOT recipes → not in the universal index; the mechanism is shared, the
  // filter is local). liveSearch writes #kidsThemesGrid directly — no draw(), input survives.

  const howHTML = `
    1 · Pick a <strong style="color:var(--accent);">theme</strong> from the 12 boxes below<br>
    2 · Open a <strong style="color:var(--accent);">category</strong> — Savoury, Sweet, Cake, Drinks or Planner<br>
    3 · Set your <strong style="color:var(--accent);">kid count</strong> — every recipe scales automatically<br>
    4 · Add extras with <strong style="color:var(--accent);">+ Add more snacks</strong> on the Savoury &amp; Sweet pages`;

  return `<div>
    ${kidsHeader('🎂 Kiddies Parties','12 themes · 4 to 50 kids · scales automatically',"set({eventTab:null,kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null})",'← Events','kiddies')}
    <div class="content">
      <div style="display:flex;align-items:center;background:var(--card);border:1px solid var(--line2);border-radius:20px;padding:7px 14px;margin-bottom:12px;">
        <span style="color:var(--accent);margin-right:8px;font-size:14px;">🔍</span>
        <input type="text" id="kidsSearchInput" placeholder="Search themes…" oninput="liveSearch(this,'kidsThemesGrid',{filterFn:kidsThemeGridInner,stateKey:'kidsSearch'})" value="${searchVal}" style="flex:1;width:100%;background:none;border:none;outline:none;color:var(--ink);font-size:13px;font-family:Georgia,serif;"/>
        ${searchVal?`<button onclick="set({kidsSearch:''})" style="background:none;border:none;color:var(--accent);font-size:16px;cursor:pointer;">×</button>`:''}
      </div>

      <div style="font-size:10px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">Choose a party theme</div>
      <div id="kidsThemesGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
        ${kidsThemeGridInner(searchVal)}
      </div>

      ${kidsControlBar(k,'kidsHowOpen',isOpen,howHTML)}
      ${kidsBudgetPills(budget)}
    </div>
  </div>`;
}

// MF46 · pluggable theme filter — returns the inner cards for #kidsThemesGrid. Shared by the
// initial render and liveSearch (which rewrites ONLY this container, never draw()).
function kidsThemeGridInner(q){
  var sv = String(q||'').toLowerCase();
  var themes = sv ? KIDS_THEMES.filter(function(t){ return t.name.toLowerCase().indexOf(sv)>=0 || (t.vibe||'').toLowerCase().indexOf(sv)>=0; }) : KIDS_THEMES;
  if(!themes.length) return '<div style="grid-column:1/-1;text-align:center;padding:30px 16px;background:var(--card);border:1px solid var(--line2);border-radius:12px;"><div style="font-size:32px;margin-bottom:8px;">🎈</div><div style="font-size:13px;color:var(--ink-mut);">No themes match "'+sv+'"</div></div>';
  return themes.map(function(th){
    return '<div onclick="set({kidsTheme:\''+th.id+'\',kidsScreen:\'categories\',kidsRemoved:[]})" style="background:var(--card);border:1px solid var(--line);border-radius:14px;padding:10px 8px;aspect-ratio:1;cursor:pointer;text-align:center;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;">'
      + '<div style="font-size:24px;margin-bottom:5px;">'+th.emoji+'</div>'
      + '<div style="font-size:16px;color:var(--ink);font-weight:bold;margin-bottom:3px;line-height:1.2;">'+th.name+'</div>'
      + '<div style="display:flex;gap:3px;justify-content:center;">'+((th.colours||[]).slice(0,4).map(function(c){return '<div style="width:8px;height:8px;border-radius:50%;background:'+c+';"></div>';}).join(''))+'</div></div>';
  }).join('');
}

// ── LAYER 2: the 5 category boxes for a theme ─────────────────────
function kidsThemeCategoriesHTML(themeId,k,budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:var(--ink);">Theme not found. <button onclick="set({kidsScreen:'themes',kidsTheme:null})" style="color:var(--accent);background:none;border:none;cursor:pointer;">← All themes</button></div>`;
  const isOpen = S.kidsCatHowOpen||false;
  const tint = (th.colours&&th.colours[0])?th.colours[0]+'33':'var(--card2)';
  const cats = kidsCategoryDefs(th);
  const howHTML = `Each box opens its own recipes. <strong style="color:var(--accent);">Everything scales</strong> to your kid count. Add extra snacks with <strong style="color:var(--accent);">+ Add more snacks</strong> on the Savoury &amp; Sweet pages.`;

  return `<div>
    ${kidsHeader(th.emoji+' '+th.name, th.vibe||'', "set({kidsScreen:'themes',kidsTheme:null})", '← 12 Themes', th.name, tint)}
    <div class="content">
      <div style="font-size:10px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">What do you want to plan?</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:14px;">
        ${cats.map(c=>`
          <div onclick="${c.id==='cake'?`openKidsCake('${themeId}')`:`set({kidsScreen:'${c.plan?'plan':'category'}',kidsCategory:'${c.id}'})`}" style="background:var(--card);border:1px solid ${c.plan?'var(--accent)':'var(--line)'};border-radius:14px;padding:10px 8px;aspect-ratio:1;cursor:pointer;text-align:center;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;">
            <div style="font-size:24px;margin-bottom:6px;">${c.emoji}</div>
            <div style="font-size:16px;color:var(--ink);font-weight:bold;margin-bottom:3px;line-height:1.2;">${c.label}</div>
            <div style="font-size:14px;color:var(--ink-soft);line-height:1.2;">${c.sub}</div>
            ${c.count>0?`<div style="position:absolute;top:3px;right:3px;background:var(--accent);color:var(--on-media);border-radius:5px;font-size:8px;padding:1px 4px;">${c.count}</div>`:''}
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
  return {name:'Crisps', photoName:'Crisps', type:'crisps', emoji:'🥔', per:'¼ packet', kcal:130,
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
    if(Array.isArray(g)){ const f=g.find(x=>x&&x.id===id); if(f){
      // ⚖️ LAW 55 · THE CHILD GATE. This is the door through which the kiddies party
      // planner reaches EVENTS_FINGER_FOODS — an ADULT party catalogue. A record must
      // not be able to earn its way onto a child surface, so it is refused HERE, at
      // the lookup, not filtered out of some list downstream where a second caller
      // could miss it. Returning null degrades exactly like an unknown id already does.
      if(typeof tinzaHasAlcohol==='function' && tinzaHasAlcohol(f)) return null;
      return f;
    } }
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
  if(!th) return `<div style="padding:20px;color:var(--ink);">Theme not found.</div>`;
  const isOpen = S.kidsCatHowOpen||false;
  const tint = (th.colours&&th.colours[0])?th.colours[0]+'33':'var(--card2)';
  const cats = kidsCategoryDefs(th);
  const labels={savoury:'🍢 Savoury Snacks',sweet:'🍬 Sweet Treats',cake:'🎂 The Cake',drinks:'🥤 Drinks & Crisps',planner:'🎉 Party Planner'};
  const howHTML = `Tap any recipe to open its <strong style="color:var(--accent);">ingredients, method &amp; photo</strong>. Quantities are already scaled to <b style="color:var(--accent);">${k} kids</b>.`;

  const pills = cats.map(c=>`<button onclick="${c.id==='cake'?`openKidsCake('${themeId}')`:`set({kidsCategory:'${c.id}'})`}" style="flex-shrink:0;padding:6px 12px;border-radius:20px;border:1px solid ${catId===c.id?'var(--accent)':'var(--line2)'};background:${catId===c.id?'var(--card2)':'var(--bg)'};color:${catId===c.id?'var(--accent)':'var(--ink-dim)'};font-size:11px;cursor:pointer;white-space:nowrap;">${c.emoji} ${c.label}</button>`).join('');

  let body='';
  if(catId==='savoury'||catId==='sweet'){
    const list=(th.recipes||[]).filter(r=> catId==='savoury' ? r.type==='savoury' : (r.type==='sweet'||r.type==='healthy'));
    const menu=(th.foods&&(th.foods[budget]||th.foods.easy))||[];
    const recipeCards = list.length===0 ? `<p style="font-size:13px;color:var(--ink-mut);font-style:italic;">No recipes in this category yet.</p>`
      : list.map(r=>{
        const inMenu=menu.includes(r.name);
        const typeLabel=r.type==='savoury'?'🥩 Savoury':r.type==='sweet'?'🍬 Sweet':'🥗 Healthy';
        const nameEsc=r.name.replace(/'/g,"\\'");
        return warmCard({
          name:r.name, photoName:r.name, emoji:r.emoji||'🍽️',
          meta:`${typeLabel} · ${r.per||''} per child · ${r.time||'?'} min · ~${r.kcal||'?'} kcal`,
          openJs:`openKidsRecipe('${nameEsc}')`
        });
      }).join('');
    const stype = catId==='savoury'?'savoury':'sweet';
    const added = kidsAddedSnacks(themeId);
    const extraIds = KIDS_EXTRA_SNACKS[stype]||[];
    const addedCards = extraIds.filter(id=>added.includes(id)).map(id=>{
      const r=kidsFingerToRecipe(id,stype); if(!r) return '';
      const nameEsc=r.name.replace(/'/g,"\\'");
      return warmCard({
        name:r.name, photoName:r.name, emoji:r.emoji||'🍽️', badge:'added',
        meta:`🍽️ Finger food · ${costLine({html:'~R'+r.costPP+'/child'})}`,
        openJs:`openKidsRecipe('${nameEsc}')`
      });
    }).join('');
    const showAdd = S.kidsShowAddSnacks||false;
    const pickerRows = extraIds.map(id=>{
      const f=kidsFingerById(id); if(!f) return '';
      const on=added.includes(id);
      return `<div onclick="kidsToggleSnack('${themeId}','${id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid var(--line);cursor:pointer;">
          <span style="font-size:16px;">${f.emoji||'🍽️'}</span>
          <div style="flex:1;font-size:13px;color:${on?'var(--green-soft)':'var(--ink-soft)'};">${f.name} <span style="color:var(--accent);">${costLine({html:'~R'+f.costPP+'/pp'})}</span></div>
          <span style="font-size:11px;color:${on?'var(--green-soft)':'var(--accent)'};border:1px solid ${on?'var(--green-soft)':'var(--accent)'};border-radius:6px;padding:3px 9px;white-space:nowrap;">${on?'✓ Added':'+ Add'}</span>
        </div>`;
    }).join('');
    const picker = `
      <button onclick="set({kidsShowAddSnacks:${showAdd?'false':'true'}})" style="width:100%;padding:12px;margin-top:8px;border-radius:10px;cursor:pointer;background:var(--card2);border:1px dashed var(--accent);color:var(--accent);font-size:13px;font-family:Georgia,serif;">+ Add more snacks ${showAdd?'▲':'▼'}</button>
      ${showAdd?`<div style="background:var(--bg);border:1px solid var(--line);border-radius:10px;margin-top:6px;overflow:hidden;">${pickerRows}</div>`:''}`;
    body = recipeCards + addedCards + picker;
  }
  else if(catId==='cake'){
    const c=th.cake;
    body = !c ? `<p style="font-size:13px;color:var(--ink-mut);font-style:italic;">No cake for this theme yet.</p>` : warmCard({
      name:c.name, photoName:c.name, emoji:'🎂',
      meta:`🎂 The Cake${c.kcal?` · ~${c.kcal} kcal per slice`:''}`,
      openJs:`openKidsCake('${themeId}')`
    });
  }
  else if(catId==='drinks'){
    const d=th.drink;
    const crispPackets=Math.ceil(k/4);
    const popRec=kidsPopcornRecipe(th.id), dipRec=kidsDipsRecipe(th.id);
    const esc=s=>s.replace(/'/g,"\\'");
    const recCard=(emoji,nm,sub,openName)=>warmCard({ name:nm, photoName:nm, emoji:emoji, meta:sub, openJs:`openKidsRecipe('${esc(openName)}')` });
    body = `
      ${d?recCard('🥤',d.name,'🥤 Drink · '+(k*250)+'ml total · store-bought or make it',d.name):''}
      ${recCard('🥔','Crisps','🥔 '+crispPackets+' × 120g packet'+(crispPackets>1?'s':'')+' · or healthy swap','Crisps')}
      ${recCard('🍿',popRec.name,(popRec.type==='savoury'?'🥩 Savoury':'🍬 Sweet')+' popcorn · homemade · '+kcalChip({html:'~'+popRec.kcal+' kcal'}),popRec.name)}
      ${recCard('🥣',dipRec.name,'🥣 3 homemade dips · '+kcalChip({html:'~'+dipRec.kcal+' kcal'})+' · '+dipRec.time+' min',dipRec.name)}`;
  }
  else { // planner
    const dec=th.decor||{}, zones=th.zones||[], tl=th.timeline||{};
    const decorInner=`
      <div style="font-size:11px;color:var(--accent);margin-bottom:5px;">🌿 Budget Decor</div>${(dec.budget||[]).map(d=>`<div style="font-size:11px;color:var(--ink-soft);margin-bottom:3px;">· ${d}</div>`).join('')}
      <div style="font-size:11px;color:var(--accent);margin:10px 0 5px;">✨ Styled Decor</div>${(dec.styled||[]).map(d=>`<div style="font-size:11px;color:var(--ink-soft);margin-bottom:3px;">· ${d}</div>`).join('')}
      ${dec.photospot?`<div style="margin-top:10px;padding:8px;background:var(--bg);border-radius:6px;"><div style="font-size:11px;color:var(--accent);margin-bottom:3px;">📸 Photo Spot</div><div style="font-size:11px;color:var(--ink-soft);">${dec.photospot}</div></div>`:''}
      ${zones.length?`<div style="margin-top:10px;"><div style="font-size:11px;color:var(--accent);margin-bottom:5px;">🗺️ Zone Layout</div>${zones.map(z=>`<div style="font-size:11px;color:var(--ink-soft);margin-bottom:2px;">${z}</div>`).join('')}</div>`:''}`;
    const tlInner=`
      ${tl.two?`<div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">📅</div><div><div style="font-size:10px;color:var(--accent);">2 Days Ahead</div><div style="font-size:11px;color:var(--ink);">${tl.two}</div></div></div>`:''}
      ${tl.one?`<div style="display:flex;gap:8px;margin-bottom:6px;"><div style="font-size:16px;">🌙</div><div><div style="font-size:10px;color:var(--accent);">1 Day Ahead</div><div style="font-size:11px;color:var(--ink);">${tl.one}</div></div></div>`:''}
      ${tl.morning?`<div style="display:flex;gap:8px;"><div style="font-size:16px;">☀️</div><div><div style="font-size:10px;color:var(--accent);">Party Morning</div><div style="font-size:11px;color:var(--ink);">${tl.morning}</div></div></div>`:''}`;
    body = `
      ${(dec.budget||dec.styled||zones.length)?recipeBox('🎈 Decor Ideas',decorInner):''}
      ${(tl.two||tl.one||tl.morning)?recipeBox('⏱️ Prep Timeline',tlInner):''}
      ${th.games?recipeBox('🎮 Party Games',`<div style="font-size:11px;color:var(--ink-soft);line-height:1.7;">${th.games}</div>`):''}
      ${((typeof tierAllows==='function')?tierAllows('pro'):false)
        ? `<div onclick="set({kidsScreen:'plan',kidsCategory:'plan'})" style="background:var(--card2);border:1px solid var(--accent);border-radius:10px;padding:16px;margin-bottom:8px;text-align:center;cursor:pointer;">
        <div style="font-size:13px;color:var(--accent);margin-bottom:4px;font-family:Georgia,serif;">📋 Full Shopping List</div>
        <div style="font-size:10px;color:var(--accent);margin-bottom:8px;">Auto-scaled &amp; consolidated for ${k} kids</div>
        <div style="font-size:12px;color:var(--on-media);background:var(--accent);border-radius:6px;padding:6px 14px;display:inline-block;">Open list →</div>
      </div>`
        : `<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:18px;margin-bottom:8px;text-align:center;">
        <div style="font-size:28px;margin-bottom:6px;">🔒</div>
        <div style="font-size:13px;color:var(--accent);margin-bottom:4px;font-family:Georgia,serif;">Full Shopping List</div>
        <div style="font-size:10px;color:var(--accent);margin-bottom:8px;">Auto-scaled &amp; consolidated for ${k} kids</div>
        <div style="font-size:12px;color:var(--accent);font-weight:bold;">Unlock with Tinza Pro — R50/month</div>
      </div>`}`;
  }

  return `<div>
    ${kidsHeader(th.emoji+' '+th.name, labels[catId]||'', "set({kidsScreen:'categories',kidsCategory:null,kidsOpenRecipe:null})", '← '+th.name, th.name, tint)}
    <div class="content">
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;-webkit-overflow-scrolling:touch;scrollbar-width:none;">${pills}</div>
      ${kidsControlBar(k,'kidsCatHowOpen',isOpen,howHTML)}
      <div style="font-size:10px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;padding:4px 0 10px;border-bottom:1px solid var(--line);margin-bottom:12px;">${labels[catId]||''}</div>
      ${body}
      <button onclick="set({kidsScreen:'categories',kidsCategory:null,kidsOpenRecipe:null})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:var(--card);border:1px solid var(--line2);color:var(--accent);font-size:13px;margin:10px 0 20px;">← Back to ${th.name}</button>
    </div>
  </div>`;
}



// ── KIDDIES ON THE UNIVERSAL OPENER (the spine) ───────────────────
// Recipe identity = (theme, category, name) encoded as one id. The
// resolver replays the exact resolution kidsRecipeDetailHTML used:
// cake → th.cake; everything else → th.recipes by name, else a
// synthetic recipe (popcorn / dips / drink / crisps / added snack).
// The builder feeds the shared recipePage so Kiddies looks identical
// to every other section and is cross-linkable.
function kidsExtraIdByName(name){
  if(typeof KIDS_EXTRA_SNACKS==='undefined') return null;
  var types=['savoury','sweet'];
  for(var ti=0;ti<types.length;ti++){
    var ids=KIDS_EXTRA_SNACKS[types[ti]]||[];
    for(var i=0;i<ids.length;i++){
      var f=(typeof kidsFingerById==='function')?kidsFingerById(ids[i]):null;
      if(f && f.name===name) return ids[i];
    }
  }
  return null;
}
function kiddiesResolve(themeId,catId,name){
  var th=(typeof KIDS_THEMES!=='undefined')?KIDS_THEMES.find(function(t){return t.id===themeId;}):null;
  if(!th) return null;
  var rec;
  if(catId==='cake'){
    var c=th.cake; if(!c) return null;
    rec={name:c.name, base12:c.base12, method:c.method, kcal:c.kcal, emoji:'\uD83C\uDF82', type:'cake', per:'1 slice', time:''};
  } else {
    rec=(th.recipes||[]).find(function(r){return r.name===name;}) || ((typeof kidsSyntheticRecipe==='function')?kidsSyntheticRecipe(th,name):null);
  }
  if(!rec) return null;
  var out=Object.assign({}, rec); out._themeId=themeId; out._catId=catId; return out;
}
function kiddiesRecipeOpts(rec, themeId, catId, k){
  if(!rec) return { name:'Recipe not found', backJs:'closeRecipe()', backLabel:'\u2190 Back',
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" } };
  k=k||12;
  var th=(typeof KIDS_THEMES!=='undefined')?KIDS_THEMES.find(function(t){return t.id===themeId;}):null;
  var emoji=rec.emoji || (rec.type==='cake'?'\uD83C\uDF82':rec.type==='savoury'?'\uD83C\uDF62':rec.type==='healthy'?'\uD83E\uDD57':rec.type==='drink'?'\uD83E\uDD64':rec.type==='crisps'?'\uD83E\uDD54':'\uD83C\uDF6C');
  var typeLabel=rec.type==='savoury'?'\uD83E\uDD69 Savoury':rec.type==='sweet'?'\uD83C\uDF6C Sweet':rec.type==='healthy'?'\uD83E\uDD57 Healthy':rec.type==='drink'?'\uD83E\uDD64 Drink':rec.type==='crisps'?'\uD83E\uDD54 Crisps':'\uD83C\uDF82 Cake';

  // ingredients: base12 (base of 12) → shared rows, scaled to k kids
  var ingRows=Object.keys(rec.base12||{}).map(function(key){
    var val=rec.base12[key];
    var label=(typeof kidsKeyLabel==='function')?kidsKeyLabel(key):key;
    var m=String(val).match(/^([\d.]+)\s*(?:(kg|ml|g|l)(?![a-z]))?(.*)$/i);
    if(m){
      var n=parseFloat(m[1]); var u=m[2]||''; var rest=(m[3]||'').trim();
      var nm=(typeof kidsName==='function')?kidsName(label,rest):{name:label,extra:rest};
      var pp=Math.round(n/12*10)/10;
      var tot=Math.round(n*k/12*10)/10;
      var amt=u
        ? '<span style="color:var(--ink-soft);font-weight:normal;font-size:13px;">'+pp+u+' pp \u00b7 </span>'+tot+u
        : ''+tot;
      return ingredientRow(nm.name, amt, nm.extra||'');
    }
    return ingredientRow(label, String(val), '');
  }).join('');
  var ingredientsHTML=ingredientsBox(ingRows || '<div style="color:var(--ink-soft);font-size:14px;">No ingredients listed.</div>', k);

  // green qty box wired to S.kidsCount (4–50). Food-cost only when known (added snacks carry costPP).
  var costInfo='';
  if(rec.costPP){
    var ct=Math.round(rec.costPP*k);
    costInfo=costLine({ pp:rec.costPP, total:ct.toLocaleString(), note:'This food cost is for costing only \u2014 it\u2019s not the same as the cost at the grocery store.' });
  }
  var qtyHTML=qtyBox({
    label:'How Much To Make',
    total: k+' '+(k===1?'kid':'kids'),
    ppLine: rec.kcal ? kcalChip({html:'~'+rec.kcal+' kcal per child', label:'🔥 Calories'}) : '',
    n: k, info: costInfo,
    decJs:"set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})",
    incJs:"set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})"
  });

  // method: one string → numbered steps. Kiddies has no separate cook mode.
  var steps=String(rec.method||'').split(/(?<=[.!?])\s+/).map(function(s){return s.trim();}).filter(Boolean);
  var stepsHTML=steps.map(function(s,si){ return methodStep(si, s, ''); }).join('');
  var methodHTML=steps.length ? methodBox(stepsHTML, '') : '';

  // add-to-plan: real toggle for added finger snacks; else jump to the party plan
  var snackId=kidsExtraIdByName(rec.name);
  var addJs, inPlan;
  if(snackId){
    var added=(typeof kidsAddedSnacks==='function')?kidsAddedSnacks(themeId):[];
    inPlan=added.indexOf(snackId)>=0;
    addJs="kidsToggleSnack('"+themeId+"','"+snackId+"')";
  } else {
    inPlan=false;
    addJs="closeRecipe({kidsScreen:'plan',kidsCategory:'plan'})";
  }

  var planCount=0;
  try { if(th && typeof kidsPlanItems==='function'){ planCount=(kidsPlanItems(th,(S.kidsBudget||'easy'))||[]).length; } } catch(e){}

  return {
    photoName: rec.name, photoEmoji: emoji,
    backJs:"closeRecipe()", backLabel:'\u2190 Back',
    name: rec.name,
    sub: [typeLabel, rec.per?rec.per+' per child':''].filter(Boolean).join(' \u00b7 '),
    meta: { time: rec.time?(rec.time+' min'):'', kcal: rec.kcal },
    qtyHTML: qtyHTML,
    ingredientsHTML: ingredientsHTML,
    methodHTML: methodHTML,
    actions: { addJs: addJs, inPlan: inPlan },
    nav: { backJs:"closeRecipe()", planJs:"closeRecipe({kidsScreen:'plan',kidsCategory:'plan'})", planCount:planCount, homeJs:"closeRecipe({screen:'home'})" }
  };
}
if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.kiddies = function(id){
    var p=String(id).split('\u00a7');
    return kiddiesResolve(p[0], p[1], p.slice(2).join('\u00a7'));
  };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.kiddies = function(item, recipe, vr){
    return kiddiesRecipeOpts(item, item._themeId, item._catId, (S.kidsCount||12));
  };
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
      // expand the snack's real base300 ingredients (via kidsFingerToRecipe) so it
      // costs + lands in the shared shopping list, instead of a flat costPP lump.
      const fr=kidsFingerToRecipe(id,type);
      items.push({key:'X_'+id, label:f.name, emoji:f.emoji||'🍽️', base12:(fr&&fr.base12)||{}, snack:true, removed:removed.includes('X_'+id)});
    });
  });
  return items;
}

// tick-off state for the shared shopping list (mirrors buffetToggleShop)
function kidsToggleShop(name){
  const c = Object.assign({}, S.kidsCheckedShop||{});
  c[name] = !c[name];
  setQuiet({kidsCheckedShop:c});
}

// parse ONE base12 value → scaled ingredient rows for buildPlanData.
// base12 values come in two shapes: "800g chicken breast" (name in the value)
// and "480g" from kidsFingerToRecipe (name only in the KEY) — handle both.
// Multi-part dip strings ("½ cucumber + garlic + dill") split on "+"; parts with
// no leading number (garlic, dill, sprinkles) are aromatics/decor → skipped from
// costing, exactly as the old consolidator did. Emits BASE units (g/ml/pcs) —
// kg/L are ×1000 so buildPlanData reads them correctly (it costs g/ml as amt/1000).
function kidsParseIng(key, val, k){
  const out=[];
  String(val).split(/\s*\+\s*/).forEach(part=>{
    part = String(part).replace(/\([^)]*\)/g,' ').trim();   // strip (parentheticals)
    if(!part) return;
    const m = part.match(/^([\d.]+)\s*(?:(kg|ml|g|l)(?![a-z]))?\s*(.*)$/i);
    let amt=null, unit='', name=part;
    if(m && m[1]!==undefined){ amt=parseFloat(m[1]); unit=(m[2]||'').toLowerCase(); name=(m[3]||'').trim() || kidsKeyLabel(key); }
    else { name = part || kidsKeyLabel(key); }
    if(amt==null || !isFinite(amt)) return;                  // no number → aromatic/decor, skip
    const sc = amt * k / 12;
    let outUnit, outAmt;
    if(unit==='kg'){ outUnit='g';  outAmt=sc*1000; }
    else if(unit==='l'){ outUnit='ml'; outAmt=sc*1000; }
    else if(unit==='ml'){ outUnit='ml'; outAmt=sc; }
    else if(unit==='g'){ outUnit='g';  outAmt=sc; }
    else { outUnit='pcs'; outAmt=sc; }                       // no weight unit → counted (eggs, buns, lettuce)
    if(!(outAmt>0)) return;
    out.push({ name:name, amt:outAmt, unit:outUnit, priceName:name });
  });
  return out;
}

// ADAPTER: selected plan items → dishes[] for planView → buildPlanData → shoppingView.
// buildPlanData does ALL the dedup / aisle-sort / two-total costing / pack-rounding,
// so we just hand it pre-scaled raw ingredients (it never re-portions).
function kidsPlanDishes(th, k, budget){
  const items = kidsPlanItems(th, budget).filter(it=>!it.removed);
  const dishes = items.map(it=>{
    const ings=[];
    Object.keys(it.base12||{}).forEach(key=>{
      kidsParseIng(key, it.base12[key], k).forEach(ing=>ings.push(ing));
    });
    return {
      name: it.label, emoji: it.emoji, guests: k, group:'',
      ingredients: ings,
      removeJs: "kidsToggleRemoved('"+String(it.key).replace(/'/g,"\\'")+"')"
    };
  });
  // crisps: 1 large (120g) packet per 4 kids — pre-scaled here (buildPlanData pack-rounds it)
  const packets = Math.ceil(k/4);
  dishes.push({
    name:'Crisps', emoji:'🥔', guests:k, group:'',
    ingredients:[{ name:'crisps',photoName:"Crisps", amt:packets*120, unit:'g', priceName:'crisps' }]
  });
  return dishes;
}

function kidsPlanHTML(themeId, k, budget){
  const th = KIDS_THEMES.find(t=>t.id===themeId);
  if(!th) return `<div style="padding:20px;color:var(--ink);">Theme not found.</div>`;
  const tint = (th.colours&&th.colours[0]) ? th.colours[0]+'33' : 'var(--card2)';

  // ── Pro gate: My Plan, shopping list & costing are a Pro feature ──
  const kidsIsPro = (typeof tierAllows==='function') ? tierAllows('pro') : false;
  if(!kidsIsPro){
    return `<div>
      ${kidsHeader('📋 '+th.name+' — Plan', 'Menu · shopping list · cost', "set({kidsScreen:'categories'})", '← '+(th.emoji+' '+th.name), th.name, tint)}
      <div class="content">
        <div style="background:var(--card2);border:1px solid var(--line2);border-radius:12px;padding:26px 18px;margin:8px 0 12px;text-align:center;">
          <div style="font-size:34px;margin-bottom:8px;">🔒</div>
          <div style="font-size:15px;color:var(--accent);margin-bottom:6px;font-family:Georgia,serif;">Party Plan &amp; Shopping List</div>
          <div style="font-size:12px;color:var(--ink-soft);line-height:1.6;margin-bottom:14px;">Get your whole party menu auto-scaled to <b style="color:var(--accent);">${k} kids</b>, consolidated into one aisle-sorted shopping list with a live cost estimate.</div>
          <div style="font-size:13px;color:var(--on-media);background:var(--accent);border-radius:8px;padding:9px 18px;display:inline-block;">Unlock with Tinza Pro — R50/month</div>
        </div>
        <button onclick="set({kidsScreen:'categories'})" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:var(--card);border:1px solid var(--line2);color:var(--accent);font-size:13px;margin:4px 0 20px;">← Back to ${th.name}</button>
      </div>
    </div>`;
  }

  const howHTML = `<div style="font-size:13px;color:var(--ink-soft);line-height:1.6;margin-bottom:10px;">Your theme's menu loads automatically. <strong style="color:var(--gold);">Tap ✕ Remove</strong> on anything you won't make — the shopping list and cost update instantly. Everything scales to <b style="color:var(--gold);">${k} kids</b>.</div>`;

  const footer = `<div style="display:flex;gap:8px;margin-bottom:22px;">
      <button onclick="set({kidsScreen:'categories'})" style="flex:1;padding:12px 8px;border-radius:10px;background:var(--card2);border:1px solid var(--line);color:var(--accent);font-size:12px;cursor:pointer;line-height:1.3;">← ${th.name} menu</button>
      <button onclick="set({kidsScreen:'themes',kidsTheme:null,kidsRemoved:[]})" style="flex:1;padding:12px 8px;border-radius:10px;background:var(--card);border:1px solid var(--gold);color:var(--gold);font-size:12px;cursor:pointer;line-height:1.3;">🎂 Kiddies Party</button>
    </div>`;

  // shared engine: kidsPlanDishes → planView → buildPlanData → shoppingView.
  // Remove toggles live on each dish row (removeJs); the +/- drives S.kidsCount (one
  // source of truth, same handler as kidsControlBar) so the whole plan rescales live.
  return planView({
    header:{
      title:'📋 '+th.name+' — Plan', emoji:th.emoji,
      tagline:'Menu · shopping list · cost for '+k+' kids',
      backJs:"set({kidsScreen:'categories'})", backLabel:'← '+th.emoji+' '+th.name
    },
    quickNavHTML: howHTML,
    guests:{ value:k, label:'Kids', note:'the whole party scales to this',
      decJs:"set({kidsCount:Math.max(4,(S.kidsCount||12)-1)})",
      incJs:"set({kidsCount:Math.min(50,(S.kidsCount||12)+1)})" },
    dishes: kidsPlanDishes(th, k, budget),
    checked: S.kidsCheckedShop||{},
    toggleFn: 'kidsToggleShop',
    footerHTML: footer
  });
}
