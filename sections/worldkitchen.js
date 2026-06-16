/* ---- Flag headers (flagcdn placeholders until real food photos) ---- */
var WK_FLAG = {
  usa:'us', canada:'ca', mexico:'mx', guatemala:'gt',
  jamaica:'jm', trinidad:'tt', cuba:'cu',
  brazil:'br', colombia:'co', peru:'pe',
  argentina:'ar', chile:'cl',
  france:'fr', italy:'it', spain:'es', germany:'de',
  england:'gb-eng', scotland:'gb-sct', wales:'gb-wls', nireland:'gb-nir',
  greece:'gr', portugal:'pt',
  russia:'ru', poland:'pl', ukraine:'ua',
  sweden:'se', norway:'no', denmark:'dk',
  turkey:'tr',
  morocco:'ma', egypt:'eg', tunisia:'tn',
  nigeria:'ng', ghana:'gh', senegal:'sn',
  ethiopia:'et', kenya:'ke', tanzania:'tz',
  sa:'za', mozambique:'mz', zimbabwe:'zw',
  lebanon:'lb', israel:'il', jordan:'jo',
  uae:'ae', saudi:'sa',
  iran:'ir',
  india:'in', pakistan:'pk', srilanka:'lk',
  uzbekistan:'uz', kazakhstan:'kz',
  china:'cn', japan:'jp', korea:'kr',
  thailand:'th', vietnam:'vn', indonesia:'id', malaysia:'my',
  australia:'au', newzealand:'nz', fiji:'fj'
};
function wkFlagUrl(id){ var c = WK_FLAG[id]; return c ? ('https://flagcdn.com/' + c + '.svg') : ''; }

function worldKitchenHTML(){

  // ── COOKING MODE (overlays any WK screen) ───────────────────────
  if(S.wkCooking){
    return wkCookingView();
  }

  // ── SUB-SCREENS ──────────────────────────────────────────────────
  if(S.wkScreen === 'wkdata'){
    return wkDataCountryHTML();
  }
  if(S.wkScreen === 'wkplan'){
    return wkMyPlanView();
  }
  return wkWorldHome();
}



/* ============================================================
   World Kitchen navigation (Jun 2026)
   Continent -> Region -> Country -> Recipe, driven by the
   WK_AFRICA / WK_EUROPE data files.
   (Old dead path -- wkSAKitchensHTML / wkCountryHTML /
   wkRecipeDetailHTML / COUNTRY_RECIPES / initWKMap / the SVG
   map -- removed 11 Jun 2026 in the cleanup session.)
   ============================================================ */

/* Combined recipe pool from the data modules. */
function wkPool(){
  return [].concat(window.WK_AFRICA || [], window.WK_EUROPE || [], window.WK_WORLD || [], window.WK_SOUTHAFRICA || []);
}

/* country -> [continent, region] using the UN geoscheme.
   Grouping is by COUNTRY, so the data's own cuisine tags don't
   need to match — new recipes file themselves by country name. */
var WK_COUNTRY_GEO = {
  "Egypt":["Africa","Northern Africa"], "Morocco":["Africa","Northern Africa"], "Tunisia":["Africa","Northern Africa"],
  "Ghana":["Africa","Western Africa"], "Nigeria":["Africa","Western Africa"], "Senegal":["Africa","Western Africa"],
  "Ethiopia":["Africa","Eastern Africa"], "Kenya":["Africa","Eastern Africa"], "Tanzania":["Africa","Eastern Africa"],
  "Mozambique":["Africa","Eastern Africa"], "Zimbabwe":["Africa","Eastern Africa"],
  "Belgium":["Europe","Western Europe"],
  "Greece":["Europe","Southern Europe"], "Portugal":["Europe","Southern Europe"],
  "Denmark":["Europe","Northern Europe"], "Finland":["Europe","Northern Europe"],
  "Norway":["Europe","Northern Europe"], "Sweden":["Europe","Northern Europe"],
  "Netherlands":["Europe","Western Europe"], "Switzerland":["Europe","Western Europe"], "Austria":["Europe","Western Europe"],
  "Poland":["Europe","Eastern Europe"], "Ukraine":["Europe","Eastern Europe"], "Russia":["Europe","Eastern Europe"],
  "Hungary":["Europe","Eastern Europe"], "Turkey":["Europe","Eastern Europe"], "Georgia":["Europe","Eastern Europe"],
  "India":["Asia","Southern Asia"], "Pakistan":["Asia","Southern Asia"], "Sri Lanka":["Asia","Southern Asia"],
  "Cape Malay":["Africa","Southern Africa"], "Indian":["Africa","Southern Africa"], "Zulu":["Africa","Southern Africa"],
  "Sotho":["Africa","Southern Africa"], "Xhosa":["Africa","Southern Africa"], "Boerekos":["Africa","Southern Africa"]
};

/* The six continent boxes, each with its UN regions in display order. */
var WK_CONTINENTS = [
  { key:"Africa",        emoji:"🌍", regions:["Northern Africa","Western Africa","Middle Africa","Eastern Africa","Southern Africa"] },
  { key:"Europe",        emoji:"🥐", regions:["Northern Europe","Western Europe","Southern Europe","Eastern Europe"] },
  { key:"Asia",          emoji:"🥢", regions:["Eastern Asia","South-eastern Asia","Southern Asia","Western Asia","Central Asia"] },
  { key:"North America", emoji:"🌮", regions:["Northern America","Central America","Caribbean"] },
  { key:"South America", emoji:"🔥", regions:["South America"] },
  { key:"Oceania",       emoji:"🌺", regions:["Australia & New Zealand","Pacific Islands"] }
];

/* Distinct countries in the data that map to a given continent+region. */
function wkCountriesIn(continent, region){
  var pool = wkPool(), seen = {}, out = [];
  for(var i=0;i<pool.length;i++){
    var c = pool[i].country, g = WK_COUNTRY_GEO[c];
    if(g && g[0]===continent && g[1]===region && !seen[c]){ seen[c]=1; out.push(c); }
  }
  return out.sort();
}

/* Regions of a continent that actually have at least one recipe. */
function wkRegionsWithData(continent){
  var def = null;
  for(var i=0;i<WK_CONTINENTS.length;i++){ if(WK_CONTINENTS[i].key===continent) def = WK_CONTINENTS[i]; }
  if(!def) return [];
  return def.regions.filter(function(r){ return wkCountriesIn(continent, r).length > 0; });
}

/* course value -> tab id */
function wkCourseToTab(course){
  switch((course||"").toLowerCase()){
    case "starter": return "starters";
    case "side":    return "sides";
    case "dessert": return "desserts";
    case "drink":   return "drinks";
    case "beverage":return "drinks";
    default:        return "mains";
  }
}

/* A tappable recipe card (used in country lists and search results). */
/* course → emoji, so every list row carries an icon like braai's rows */
function wkCourseEmoji(course){
  var t = wkCourseToTab(course);
  return ({starters:'🥗', mains:'🍽️', sides:'🥘', desserts:'🍮', drinks:'🍷'})[t] || '🍽️';
}

/* Braai-style row: emoji · name/note · green "Recipe →" button (WK green theme). */
function wkRecipeCard(r){
  var green='#c06020', cream='#f5e8cc', feelCol='#e0d4b8';
  var disp = (typeof tinzaDisplayName === 'function')
    ? tinzaDisplayName(r)
    : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
  var emoji = wkCourseEmoji(r.course);
  // Standard row: name + ONE feel one-liner. Use howThisFeels when written;
  // fall back to country (keeps cross-cuisine search useful) until the writing pass fills feel lines.
  var sub   = r.howThisFeels ? r.howThisFeels : r.country;
  var open  = "wkOpenRecipe('"+r.country+"','"+r.id+"')";
  var checked = (typeof wkInPlan === 'function') && wkInPlan(r.id);
  // live per-person portion — recalculates as dishes are added to the plan
  var pk = (typeof wkPoolOf==='function') ? wkPoolOf(r.course) : 'main';
  var grams = '';
  if(pk !== 'drink' && typeof wkEffectiveMult==='function'){
    var apC = wkAppetite();
    var dc  = Math.max(1, (wkPlanPoolCounts()[pk]) || 0);
    var mainIt = wkClassifyMain(wkParseIngredients(r.ingredients)).item;
    if(mainIt){ var sc = wkScaleLine(mainIt, wkEffectiveMult(r, dc, apC)); if(!sc.faded) grams = sc.amt; }
  }
  // ── per-person cost (FREE hook) — show only when ingredients are priced ──
  var costPP = '';
  if(typeof wkCostRecipe==='function' && typeof wkEffectiveMult==='function'){
    var _ap  = (typeof wkAppetite==='function') ? wkAppetite() : null;
    var _cpp = wkCostRecipe(r, wkEffectiveMult(r, 1, _ap));
    if(_cpp && _cpp.priced > 0 && _cpp.total > 0) costPP = _cpp.total;
  }
  var box = '<div onclick="event.stopPropagation();wkPlanToggle(\''+r.id+'\',4)" '
    + 'title="'+(checked?'In plan — tap to remove':'Add to plan')+'" '
    + 'style="width:22px;height:22px;flex-shrink:0;border-radius:5px;border:1px solid '+green+';'
    + 'background:'+(checked?green:'transparent')+';color:#fff;display:flex;align-items:center;'
    + 'justify-content:center;font-size:14px;font-weight:bold;cursor:pointer;">'+(checked?'✓':'')+'</div>';
  return '<div onclick="'+open+'" '
    + 'style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;">'
    +   '<div style="display:flex;align-items:flex-start;gap:12px;">'
    +     box
    +     '<span style="font-size:20px;flex-shrink:0;line-height:1.35;">'+emoji+'</span>'
    +     '<div style="flex:1;min-width:0;">'
    +       '<div style="font-size:16px;color:'+cream+';font-weight:bold;line-height:1.35;">'+disp+'</div>'
    +       '<div style="font-size:14px;color:'+feelCol+';margin-top:4px;line-height:1.4;">'+sub+'</div>'
    +       (costPP ? '<div style="font-size:13px;color:#f5c842;font-weight:bold;margin-top:4px;">≈ R'+costPP+' pp</div>' : '')
    +     '</div>'
    +     '<span style="font-size:26px;font-weight:bold;color:#f5c842;flex-shrink:0;align-self:center;line-height:1;">›</span>'
    +   '</div>'
    + '</div>';
}

/* braai-style grid tile: emoji on top, bold title, subtitle. dim = coming-soon, accent = green-featured. */
function wkGridCard(emoji, title, sub, onclick, dim, accent){
  var green='#c06020', cream='#f5e8cc';
  var bg = dim ? '#140d06' : (accent ? '#1a1208' : '#161210');
  var bd = dim ? '#2a1a10' : (accent ? green   : '#2a1a10');
  return '<div'+(dim?'':' onclick="'+onclick+'"')+' '
    + 'style="background:'+bg+';border:1px solid '+bd+';border-radius:14px;padding:14px 8px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:96px;cursor:'+(dim?'default':'pointer')+';opacity:'+(dim?'0.5':'1')+';">'
    +   '<div style="font-size:24px;margin-bottom:6px;line-height:1;">'+emoji+'</div>'
    +   '<div style="font-size:16px;color:'+(dim?'#6a5440':cream)+';font-weight:bold;line-height:1.2;">'+title+'</div>'
    +   (sub ? '<div style="font-size:14px;color:'+(dim?'#6a5440':'#e0d4b8')+';margin-top:4px;line-height:1.2;">'+sub+'</div>' : '')
    + '</div>';
}

/* ── HOME / drill-down: continents → regions → countries (braai-style grids) ── */
function wkWorldHome(){
  var green = '#c06020', cream = '#f5e8cc';
  var search = (S.wkSearch || '').trim();

  // V33 shared 200px photo header (core.js sectionHeader). Header image
  // lives in Images/Headers/ — emoji-falls-back until the file is added.
  var header = sectionHeader({
    title:'World Kitchen',
    tagline:'Tap a continent, then a region, then a country',
    emoji:'🌍',
    img:'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/world-map.jpg',
    backJs:"set({screen:'home',wkContinent:null,wkRegion:null,wkSearch:''})", backLabel:'← Home',
    myPlan:{ count:(S.wkPlan||[]).length, onclick:"set({wkScreen:'wkplan'})" },
    search:{ value:(S.wkSearch||'').replace(/"/g,'&quot;'), placeholder:'Search dishes, countries…', oninput:'set({wkSearch:this.value})', clearJs:"set({wkSearch:''})" }
  });

  var wrap = function(inner){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'+header+inner+'</div>'; };
  var pad  = function(inner){ return '<div style="padding:14px 16px 30px;max-width:600px;margin:0 auto;">'+inner+'</div>'; };
  var backRow = function(label, action){ return '<div onclick="'+action+'" style="display:inline-block;color:'+green+';font-size:13px;cursor:pointer;margin-bottom:12px;font-family:Georgia,serif;">'+label+'</div>'; };
  var heading = function(t){ return '<h2 style="font-size:19px;font-weight:normal;color:'+cream+';margin:0 0 10px;font-family:Georgia,serif;">'+t+'</h2>'; };
  var contEmoji = function(key){ for(var i=0;i<WK_CONTINENTS.length;i++){ if(WK_CONTINENTS[i].key===key) return WK_CONTINENTS[i].emoji; } return '🌍'; };

  // ── SEARCH MODE (works from any level) ──
  if(search){
    var results = (typeof tinzaSearch === 'function') ? tinzaSearch(search, wkPool()) : [];
    var rbody = '<div style="padding:14px 16px;max-width:600px;margin:0 auto;">'
      + '<div style="font-size:13px;color:#e0d4b8;margin-bottom:10px;">'+results.length+' result'+(results.length===1?'':'s')+' for “'+search+'”</div>'
      + (results.length ? results.slice(0,80).map(wkRecipeCard).join('')
         : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:24px;text-align:center;color:#e0d4b8;font-size:13px;">No dishes found. Try another word.</div>')
      + '</div>';
    return wrap(rbody);
  }

  // ── LEVEL 3: COUNTRIES grid (continent + region chosen) ──
  if(S.wkContinent && S.wkRegion){
    var l3countries = wkCountriesIn(S.wkContinent, S.wkRegion);
    var l3grid = l3countries.length
      ? '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">'
        + l3countries.map(function(ct){
            var dishes = wkPool().filter(function(x){return x.country===ct || (x.sharedWith && x.sharedWith.indexOf(ct) !== -1);}).length;
            return wkGridCard('🍲', ct, dishes+' dish'+(dishes===1?'':'es'),
              "set({wkScreen:'wkdata',wkDataCountry:'"+ct.replace(/'/g,"\\'")+"',wkDataTab:'mains',wkDataRecipe:null});window.scrollTo(0,0)", false);
          }).join('')
        + '</div>'
      : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">No countries here yet.</div>';
    return wrap(pad( backRow('← '+S.wkContinent, "set({wkRegion:null});window.scrollTo(0,0)") + heading(S.wkRegion) + l3grid ));
  }

  // ── LEVEL 2: REGIONS grid (continent chosen) ──
  if(S.wkContinent){
    var l2regions = wkRegionsWithData(S.wkContinent);
    var ce = contEmoji(S.wkContinent);
    var l2grid = l2regions.length
      ? '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">'
        + l2regions.map(function(reg){
            var nc = wkCountriesIn(S.wkContinent, reg).length;
            return wkGridCard(ce, reg, nc+' '+(nc===1?'country':'countries'),
              "set({wkRegion:'"+reg.replace(/'/g,"\\'")+"'});window.scrollTo(0,0)", false);
          }).join('')
        + '</div>'
      : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">🌍 Recipes being added — coming soon</div>';
    return wrap(pad( backRow('← World Kitchen', "set({wkContinent:null,wkRegion:null});window.scrollTo(0,0)") + heading(S.wkContinent) + l2grid ));
  }

  // ── LEVEL 1: HOME — SA + 6 continents in one 4-wide grid (braai-style: 4 on top, 3 under) ──
  var saTile = wkGridCard('🇿🇦', 'SA Kitchens', 'Our heritage', "set({wkContinent:'Africa',wkRegion:'Southern Africa'});window.scrollTo(0,0)", false, true);
  var contTiles = WK_CONTINENTS.map(function(c){
        var regions = wkRegionsWithData(c.key);
        var count = 0; regions.forEach(function(r){ count += wkCountriesIn(c.key, r).length; });
        var live = count > 0;
        return wkGridCard(c.emoji, c.key, live ? (count+' countries') : 'Coming soon',
          "set({wkContinent:'"+c.key.replace(/'/g,"\\'")+"',wkRegion:null});window.scrollTo(0,0)", !live, false);
      }).join('');
  var contGrid = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">' + saTile + contTiles + '</div>';

  // Standard §4a item 2 — the shared "How it works" + guest stepper box, the
  // same one Braai uses (core.js howItWorks). Guests bind to wkGuests so the
  // whole menu scales from here, matching the My Plan stepper.
  var hiw = howItWorks({
    stepper:{
      state:'wkGuests', min:1, max:100,
      decJs:"set({wkGuests:Math.max(1,(S.wkGuests||10)-1)})",
      incJs:"set({wkGuests:(S.wkGuests||10)+1})"
    }
  });

  return wrap( pad(hiw + contGrid) );
}

/* ── COUNTRY recipe list + RECIPE detail (data-driven) ── */
function wkDataCountryHTML(){
  var green = '#c06020', cream = '#f5e8cc';
  var pool = wkPool();
  var country = S.wkDataCountry;

  // ── DETAIL ──
  if(S.wkDataRecipe){
    var r = null;
    for(var i=0;i<pool.length;i++){ if(pool[i].id === S.wkDataRecipe){ r = pool[i]; break; } }
    if(!r){
      return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;">'
        + '<button onclick="set({wkDataRecipe:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button>'
        + '<p style="margin-top:20px;">Recipe not found.</p></div>';
    }
    return wkDetailV33(r, country);
  }

  // ── COUNTRY LIST ──
  var tab = S.wkDataTab || 'mains';
  var TABS = [{id:'starters',e:'🥗',l:'Starters'},{id:'mains',e:'🍽️',l:'Mains'},{id:'sides',e:'🥘',l:'Sides'},{id:'desserts',e:'🍮',l:'Desserts'},{id:'drinks',e:'🍷',l:'Drinks'}];
  var recipes = pool.filter(function(x){ return x.country === country || (x.sharedWith && x.sharedWith.indexOf(country) !== -1); });
  var inTab = recipes.filter(function(x){ return wkCourseToTab(x.course) === tab; });

  var planCounts = (typeof wkPlanPoolCounts==='function') ? wkPlanPoolCounts() : {};
  var tabPool = {starters:'starter', mains:'main', sides:'side', desserts:'dessert', drinks:'drink'};
  var tabsBar = '<div style="display:flex;gap:4px;margin-bottom:12px;">'
    + TABS.map(function(t){
        var n = recipes.filter(function(x){return wkCourseToTab(x.course)===t.id;}).length;
        var pn = planCounts[tabPool[t.id]] || 0;
        var sel = tab===t.id;
        var badge = pn>0 ? '<span style="display:inline-block;min-width:15px;margin-left:3px;padding:0 4px;border-radius:8px;background:#c97a30;color:#1a0f06;font-size:13px;font-weight:bold;line-height:15px;vertical-align:middle;">'+pn+'</span>' : '';
        return '<button onclick="set({wkDataTab:\''+t.id+'\'})" style="flex:1;padding:10px 4px;border-radius:8px;border:1px solid '+(sel?green:'#2a1a10')+';background:'+(sel?'#3a2410':'#0f0e0c')+';color:'+(sel?'#f5e8cc':'#e0d4b8')+';font-weight:'+(sel?'bold':'normal')+';font-size:14px;cursor:pointer;font-family:Georgia,serif;line-height:1.3;">'+t.e+'<br>'+t.l+' ('+n+')'+badge+'</button>';
      }).join('')
    + '</div>';

  var list = inTab.length
    ? inTab.map(wkRecipeCard).join('')
    : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">No '+tab+' for '+country+' yet.</div>';

  // V33 shared 200px photo header (core.js sectionHeader). Country banner
  // lives in Images/Headers/<Country>.jpg — emoji-falls-back until added.
  var hdr = sectionHeader({
    title: country,
    tagline: recipes.length + ' dish' + (recipes.length===1?'':'es'),
    emoji: '🍽️',
    img: 'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/' + encodeURIComponent(country) + '.jpg',
    backJs: "set({wkScreen:null,wkDataCountry:null,wkDataRecipe:null});window.scrollTo(0,0);",
    backLabel: '← World Kitchen',
    myPlan: { count:(S.wkPlan||[]).length, onclick:"set({wkScreen:'wkplan'})" }
  });

  return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'
    + hdr
    + '<div style="padding:16px;max-width:600px;margin:0 auto;">'+tabsBar+'<div style="display:flex;flex-direction:column;gap:0;">'+list+'</div></div>'
    + '</div>';
}


/* ============================================================
   Tinza — World Kitchen · Stage 2 engine  (appended to worldkitchen.js)
   v33 recipe detail · per-person serving stepper · partial PRICE_DB
   costing · "to taste" handling · SA substitutions · My Plan + shopping.
   Self-contained. No core.js dependency except recipePhoto() & set()/S.
   ============================================================ */

/* ── SA substitution notes (handoff: niter kibbeh → ghee, etc.) ──
   Keyed by a lowercase substring that may appear in an ingredient name.
   Surfaced as a "🇿🇦 SA swaps" box on any recipe that uses them.        */
var WK_SUBS = {
  "niter kibbeh": "Niter kibbeh → use ghee (or clarified butter) simmered 2 min with a pinch of cardamom, cumin & turmeric.",
  "berbere":      "Berbere → mix paprika + cayenne + a pinch each of cumin, coriander, ginger & cinnamon.",
  "injera":       "Injera → a thin sourdough wrap or store pancake works as a scoop if teff isn't available.",
  "teff":         "Teff flour → swap with a 50/50 wholewheat + cake flour mix (texture differs slightly).",
  "harissa":      "Harissa → blend tomato paste + chilli + garlic + a little olive oil & cumin.",
  "ras el hanout":"Ras el hanout → cumin + coriander + cinnamon + paprika + a pinch of ginger & nutmeg.",
  "scotch bonnet":"Scotch bonnet → habanero, or any fiery chilli (use less — they're milder here).",
  "scent leaves": "Scent leaves (uziza/utazi) → fresh basil is the closest easy swap.",
  "crayfish":     "Ground crayfish → it's dried, ground shrimp (a seasoning used in tiny pinches — not SA rock-lobster). Closest swap: ground dried shrimp/prawns; or a little shrimp paste, fish sauce or anchovy — or simply omit.",
  "egusi":        "Egusi (melon seed) → ground pumpkin seeds or ground sunflower seeds.",
  "fufu":         "Fufu → mashed potato or polenta-style maize meal makes an easy stand-in.",
  "orzo":         "Orzo → any tiny pasta, or a handful of broken spaghetti / rice.",
  "fava bean":    "Fava (broad) beans → tinned butter beans are the easiest local swap.",
  "black-eyed pea":"Black-eyed peas → sold as 'black-eyed beans' (same as cowpeas) at most SA shops; sugar beans work in a pinch.",
  "plantain":     "Plantain → use a firm, very-green (under-ripe) banana, fried.",
  "millet flour": "Millet flour → maize meal / corn flour works for tuo zaafi-style dishes.",
  "reindeer":     "Reindeer → we don't get it here; use venison or other local game (springbok/kudu) — beef works too.",
  "veal":         "Veal → a good substitute is beef steak, tenderised and flattened thin; chicken breasts also work.",
  "cod":          "Cod → fresh: hake. Salted/dried cod: Portuguese bacalhau (salt cod) is sold at SA Portuguese delis and many supermarkets — use that; salted snoek is a good local fallback if you can't find it.",
  "sardine":      "Fresh sardines → scarce here; fresh Maasbanker (Cape mackerel) is the local stand-in.",
  "clam":         "Clams → hard to find fresh; fresh mussels are the easy local swap (frozen clams work too).",
  "rabbit":       "Rabbit → not easy to find; chicken pieces are the simplest local substitute.",
  "molokhia":     "Molokhia (jute mallow) leaves → hard to find fresh in SA; use frozen molokhia from a Middle-Eastern/Egyptian shop, or substitute spinach (a little okra stirred in brings back the silky texture).",
  "quark":        "Quark → smooth/creamed cottage cheese, or thick plain yoghurt, is the easy SA swap (cream cheese at a push).",
  "herring":      "Herring → fresh or pickled herring is scarce here; for fresh use maasbanker or sardines, or grab a jar of pickled herring where you can find it.",
  "octopus":      "Octopus → calamari / squid (tubes & heads, usually frozen) is the easy local swap.",
  "perch":        "Perch → any firm white fish works; hake is the easy SA choice.",
  "carp":         "Carp → any firm white or freshwater fish; hake or tilapia work well here.",
  "saucisson":    "Saucisson → any cured/smoked sausage or a firm salami stands in well.",
  "bratwurst":    "Bratwurst → a good plain pork sausage (or boerewors) is the easy local swap.",
  "blood sausage":"Blood sausage (black pudding) → a spiced pork sausage is the easy stand-in, or simply leave it out.",
  "suckling pig": "Suckling pig → a pork shoulder or leg roast is the practical SA stand-in (crackling and all).",
  "duck":         "Duck → look at Woolworths or Asian grocers; chicken pieces work if you can't find it.",
  "raclette":     "Raclette cheese → gouda or any good melting cheese works if raclette is hard to find.",
  "juniper":      "Juniper berries → tricky to find; a small splash of gin gives the same piney note, or simply omit."
};

/* ── parse a per-person ingredient string into structured items ──
   handles: "40g rice" · "10ml veg oil" · "3g cardamom + cinnamon"
            "1/4 egg (scale accordingly)" · "Pinch salt"
            "cumin, salt, chilli" (comma list → separate to-taste lines)      */
function wkParseQty(t){
  t = String(t).trim();
  var uni = {"¼":0.25,"½":0.5,"¾":0.75,"⅓":0.333,"⅔":0.667,"⅛":0.125};
  if(uni[t] != null) return uni[t];
  if(/^\d+\/\d+$/.test(t)){ var p=t.split('/'); return parseFloat(p[0])/parseFloat(p[1]); }
  var f = parseFloat(t);
  return isNaN(f) ? null : f;
}

function wkParseIngredients(str){
  var out = [];
  if(!str) return out;
  str.split('·').forEach(function(chunk){
    chunk = chunk.trim();
    if(!chunk) return;

    // pull out a parenthetical note, keep the rest for parsing
    var note = '';
    var nm = chunk.match(/\(([^)]*)\)/);
    if(nm) note = nm[1].trim();
    var body = chunk.replace(/\([^)]*\)/g,'').trim();

    // leading quantity? "40g rice", "1/4 egg", "3g cardamom + cinnamon", "120–150ml water" (range)
    var m = body.match(/^([0-9]+\/[0-9]+|[0-9]+(?:\.[0-9]+)?|[¼½¾⅓⅔⅛])\s*(?:[–—-]\s*[0-9]+(?:\.[0-9]+)?)?\s*(kg|g|ml|l)?\s*(.*)$/i);
    if(m && wkParseQty(m[1]) != null && (m[2] || m[3])){
      var qty  = wkParseQty(m[1]);
      var unit = m[2] ? m[2].toLowerCase() : null;     // null => countable (eggs etc.)
      var name = (m[3]||'').trim();
      if(name){ out.push({ qty:qty, unit:unit, name:name, note:note, toTaste:false }); return; }
    }

    // no parseable amount — treat as "to taste".
    // comma list of bare spices → split into separate lines.
    var parts = (body.indexOf(',') > -1 && !/[0-9]/.test(body)) ? body.split(',') : [body];
    parts.forEach(function(p){
      p = p.trim().replace(/^(pinch of|pinch|a dash of|dash of|zest of|handful of)\s+/i,'').trim();
      if(p) out.push({ qty:null, unit:null, name:p, note:note, toTaste:true });
    });
  });
  return out;
}

/* ── display one scaled ingredient line for N servings ── */
function wkFmtAmount(qty, unit){
  if(unit === 'g'){  return qty >= 1000 ? (Math.round(qty/100)/10)+'kg' : (Math.round(qty*10)/10)+'g'; }
  if(unit === 'ml'){ return qty >= 1000 ? (Math.round(qty/100)/10)+'L'  : (Math.round(qty*10)/10)+'ml'; }
  if(unit === 'kg'){ return (Math.round(qty*100)/100)+'kg'; }
  if(unit === 'l'){  return (Math.round(qty*100)/100)+'L'; }
  // countable
  var v = Math.round(qty*100)/100;
  return (Number.isInteger(v) ? v : v);
}
function wkScaleLine(item, n){
  if(item.toTaste || item.qty == null){
    return { amt:'to taste', name:item.name, note:item.note, faded:true };
  }
  var scaled = item.qty * n;
  var amt = wkFmtAmount(scaled, item.unit);
  if(item.unit == null) amt = amt + '×';     // countable, e.g. eggs
  return { amt:amt, name:item.name, note:item.note, faded:false };
}

/* ── PRICE_DB lookup: longest whole-word key contained in the name ── */
function wkCleanName(name){
  return String(name||'').toLowerCase()
    .split('/')[0]                              // "goat meat/fish" → "goat meat"
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ').trim();
}
function wkIsWater(name){ var n=wkCleanName(name); return /^(water|tap water|boiling water|warm water|cold water|ice water|warm water or milk)$/.test(n) || (/\bwater\b/.test(n) && /\b(stock|broth)\b/.test(n)); }
var WK_ALIAS = { "veg oil":"sunflower oil","vegetable oil":"sunflower oil","frying oil":"sunflower oil","cooking oil":"sunflower oil","oil":"sunflower oil",
  // ── SA coverage aliases (8 Jun 2026) — conservative, lean-high ──
  "mince":"beef mince","beef or lamb mince":"beef mince","lamb mince":"beef mince",
  "lamb":"mutton","lamb pieces":"mutton","bone in lamb pieces":"mutton","lamb chops":"mutton","lamb or chicken cubes":"mutton","lamb or beef pieces":"mutton","chicken or lamb pieces":"mutton","bone in mutton or lamb":"mutton",
  "fish":"hake","white fish":"hake","firm white fish":"hake",
  "ghee":"butter","ghee or oil":"butter","ghee or butter":"butter","butter or ghee":"butter","butter or oil":"butter","oil or butter":"butter","butter or margarine":"butter",
  "cheese":"cheddar","cheddar cheese":"cheddar",
  "flour":"cake flour","flour for dusting":"cake flour","self raising flour":"cake flour",
  "carrot":"carrots",
  "masala":"curry powder","durban masala":"curry powder","durban curry masala":"curry powder","breyani masala":"curry powder","biryani masala":"curry powder","mild curry powder":"curry powder",
  "potatoes":"potato","potato chunks":"potato","potato cubes":"potato",
  "yoghurt":"yoghurt","plain yoghurt":"yoghurt",
  "full cream milk":"milk","full-cream milk":"milk","full fat milk":"milk","whole milk":"milk" };
function wkPriceLookup(name){
  if(typeof PRICE_DB === 'undefined') return null;
  var n = wkCleanName(name);
  if(!n) return null;
  if(/\beggs?\b/.test(n)) return { key:'egg', price:(PRICE_DB['eggs_each']||PRICE_DB['eggs']||3.7), per:'count' };
  if(PRICE_DB[n] != null) return { key:n, price:PRICE_DB[n], per:'weight' };
  // deplural
  if(n.slice(-1)==='s' && PRICE_DB[n.slice(0,-1)] != null) return { key:n.slice(0,-1), price:PRICE_DB[n.slice(0,-1)], per:'weight' };
  if(WK_ALIAS[n] && PRICE_DB[WK_ALIAS[n]] != null) return { key:WK_ALIAS[n], price:PRICE_DB[WK_ALIAS[n]], per:'weight' };
  // stock/broth = cheap pantry liquid — never let it fall through to a raw-protein price
  if(/\b(stock|broth)\b/.test(n)) return null;
  // longest key that appears as a whole word inside the name
  var best=null;
  for(var k in PRICE_DB){
    if(typeof PRICE_DB[k] !== 'number') continue;
    var re = new RegExp('\\b'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b');
    if(re.test(n) && (!best || k.length > best.length)) best = k;
  }
  if(best) return { key:best, price:PRICE_DB[best], per:'weight' };
  return null;
}

/* ── cost one recipe for N servings · returns {total, priced, missing[]} ── */
function wkCostRecipe(recipe, n){
  var items = wkParseIngredients(recipe.ingredients);
  var total = 0, priced = 0, missing = [];
  items.forEach(function(it){
    if(it.toTaste || it.qty == null) return;          // spices/seasoning — skip
    if(wkIsWater(it.name)) return;                       // water — not bought
    var pr = wkPriceLookup(it.name);
    if(!pr){ missing.push(it.name); return; }
    var q = it.qty * n, c = 0;
    if(pr.per === 'count')      c = Math.ceil(q) * pr.price;          // eggs
    else if(it.unit === 'g')    c = (q/1000) * pr.price;
    else if(it.unit === 'kg')   c = q * pr.price;
    else if(it.unit === 'ml')   c = (q/1000) * pr.price;             // R per L
    else if(it.unit === 'l')    c = q * pr.price;
    else { missing.push(it.name); return; }            // countable but not egg → unpriced
    total += c; priced++;
  });
  return { total:Math.round(total), priced:priced, missing:missing };
}

/* ── My Plan state (its own list — never touches braai's plan) ── */
function wkPlanFind(id){ var p=S.wkPlan||[]; for(var i=0;i<p.length;i++) if(p[i].id===id) return i; return -1; }
function wkInPlan(id){ return wkPlanFind(id) > -1; }
function wkPlanToggle(id, servings){
  var p = (S.wkPlan||[]).slice();
  var i = wkPlanFind(id);
  if(i > -1) p.splice(i,1);
  else p.push({ id:id, servings: Math.max(1, servings||1) });
  set({ wkPlan:p });
}
function wkPlanSetServings(id, servings){
  var p = (S.wkPlan||[]).slice();
  var i = wkPlanFind(id);
  if(i > -1){ p[i] = { id:id, servings:Math.max(1,servings) }; set({ wkPlan:p }); }
}
function wkPlanClearAll(){
  if(typeof confirm === 'function' && !confirm('Clear all dishes from your World Kitchen plan?')) return;
  set({ wkPlan:[] });
}

/* ── scroll-aware recipe nav: remember list position, restore on back ──
   feeds draw()'s _savedScroll (same mechanism openEvent uses) so we work
   WITH the core scroll logic, never against it. No core.js changes. */
function wkOpenRecipe(country, id, servings){
  if(servings) S.wkServings = servings;   // preserve servings when passed
  S.wkDataCountry = country;              // so Back lands on this country's list
  openRecipe('world', id);               // universal opener snapshots where we are
}
function wkBackFromRecipe(){
  var root = document.getElementById('root');
  if(root) root._savedScroll = (S.wkListScroll || 0);   // land back where we were
  set({ wkDataRecipe:null });
}

/* ── CROSS-LINKS (16 Jun): a WK dish → its component recipe (Bakes / Spice) ──
   Keyed by WK recipe id. Opens the target via the universal opener so Back
   returns to the dish (closeRecipe's _viewingRecipe restore). Rendered through
   the shared crossLinkBox() so every cross-link looks identical (Rule Zero). */
var WK_CROSS_LINKS = {
  'egypt-hawawshi':               { open:"openBakesRecipe('bk-pita')",           name:'Pita Bread',            emoji:'🫓' },
  'morocco-rfissa':               { open:"openBakesRecipe('bk-msemen')",         name:'Msemen',                emoji:'🫓' },
  'turkey-beyti-kebap':           { open:"openBakesRecipe('bk-lavash')",         name:'Lavash',                emoji:'🫓' },
  'poland-zapiekanka':            { open:"openBakesRecipe('bk-baguette')",       name:'French Baguette',       emoji:'🥖' },
  'austria-bauernschmaus':        { open:"openBakesRecipe('bk-drop-dumplings')", name:'Fluffy Drop Dumplings', emoji:'🥟' },
  'hungary-hortobagyi-palacsinta':{ open:"openBakesRecipe('bf-pancakes')",       name:'Fluffy Pancakes',       emoji:'🥞' },
  'denmark-risalamande':          { open:"openSpiceRecipe('cherry-sauce')",      name:'Cherry Sauce',          emoji:'🍒' },
  'sweden-prinsesstarta':         { open:"openBakesRecipe('bk-sponge-cake')",    name:'Classic Sponge Cake',   emoji:'🍰' },
  'sri-lanka-kottu-roti':         { open:"openBakesRecipe('bk-godamba-roti')",   name:'Godamba Roti',          emoji:'🫓' },
  'boerekos-hoenderpastei':       { open:"openSpiceRecipe('bechamel-sauce')",    name:'Béchamel (White Sauce)',emoji:'🥛' }
};

/* ── v33 RECIPE DETAIL ── */
function wkRecipeOpts(r, country, universal){
  var green='#c06020';
  var n = Math.max(1, S.wkServings || 1);
  var disp = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
  var items = wkParseIngredients(r.ingredients);
  var apD = (typeof wkAppetite==='function') ? wkAppetite() : {mult:1,label:'Normal'};
  var baseMult = (typeof wkEffectiveMult==='function') ? wkEffectiveMult(r, 1, apD) : 1;  // standalone-dish standard portion
  var cost  = wkCostRecipe(r, n * baseMult);
  var inPlan = wkInPlan(r.id);

  // main item + raw-carb flag (drives the qty box + the raw note)
  var mainItem = (typeof wkClassifyMain==='function') ? wkClassifyMain(items).item : null;
  if(!mainItem){ for(var mi=0; mi<items.length; mi++){ if(items[mi].qty != null && !items[mi].toTaste){ mainItem = items[mi]; break; } } }
  var rawCarb = mainItem && /\b(rice|pasta|macaroni|spaghetti|noodle|noodles|couscous|bulgur|semolina|flour|lentil|lentils|bean|beans|chickpea|chickpeas|samp|grain)\b/.test((typeof wkCleanName==='function')?wkCleanName(mainItem.name):String(mainItem.name||'').toLowerCase());

  // ── green qty box (shared qtyBox) — drives S.wkServings ──
  var qtyTotal = mainItem ? (wkScaleLine(mainItem, baseMult * n).amt + ' ' + mainItem.name) : (n + ' ' + (n===1?'serving':'servings'));
  var qtyPP    = mainItem ? (wkScaleLine(mainItem, baseMult).amt + ' per person' + (rawCarb ? ' · raw' : '')) : '';
  var _cpp = (cost.priced>0 && cost.total>0) ? wkCostRecipe(r, baseMult).total : null;
  var costInfo = (_cpp!=null)
    ? '\uD83D\uDCB0 Food cost: <b style="color:#c8e840;">R'+_cpp+'</b> pp \u00b7 <b style="color:#c8e840;">R'+cost.total.toLocaleString()+'</b> total'
      + '<div style="font-size:12px;color:#7a8d4a;margin-top:5px;line-height:1.45;">This food cost is for costing only \u2014 it\u2019s not the same as the cost at the grocery store.</div>'
    : '';
  var qtyHTML = qtyBox({
    label:'How Much To Make', total:qtyTotal, ppLine:qtyPP, n:n, info:costInfo,
    decJs:"set({wkServings:Math.max(1,(S.wkServings||1)-1)})",
    incJs:"set({wkServings:(S.wkServings||1)+1})"
  });

  // ── ingredients (shared shell + rows): "Xg pp · Yg total" ──
  var ingRows = items.map(function(it){
    var ppS  = wkScaleLine(it, baseMult);
    var totS = wkScaleLine(it, baseMult * n);
    var amt;
    if(ppS.faded){ amt = '<span style="color:#e0d4b8;font-weight:normal;font-style:italic;">to taste</span>'; }
    else if(n === 1){ amt = totS.amt; }
    else { amt = '<span style="color:#e0d4b8;font-weight:normal;font-size:13px;">'+ppS.amt+' pp · </span>'+totS.amt; }
    return ingredientRow(ppS.name, amt, ppS.note);
  }).join('');
  var ingredientsHTML = ingredientsBox(ingRows, n);

  // ── SA swaps → notes slot (shared box shell) ──
  var hay = (r.ingredients||'').toLowerCase(); var swaps = [];
  for(var key in WK_SUBS){ if(hay.indexOf(key) > -1) swaps.push(WK_SUBS[key]); }
  var notesHTML = swaps.length
    ? recipeBox('🇿🇦 SA swaps', swaps.map(function(s){ return '<div style="font-size:15px;color:#f0ebe1;line-height:1.5;padding:4px 0;">• '+s+'</div>'; }).join(''))
    : '';
  // cross-link card (Bakes / Spice component recipe) — shared crossLinkBox, sits
  // right under the ingredients so "1 pita" etc. links to "make your own".
  var _cl = (typeof WK_CROSS_LINKS!=='undefined') ? WK_CROSS_LINKS[r.id] : null;
  if(_cl && typeof crossLinkBox==='function'){
    notesHTML = crossLinkBox({ emoji:_cl.emoji, label:'Make your own', targetName:_cl.name, onclick:_cl.open }) + notesHTML;
  }

  // ── method (shared shell + steps) ──
  var steps = (r.method||'').split(/\.\s+/).map(function(x){return x.trim();}).filter(Boolean);
  var stepsHTML = steps.map(function(s,si){
    return methodStep(si, s+(s.slice(-1).match(/[.!?]/)?'':'.'), wkStepTimer(s));
  }).join('');
  var methodHTML = methodBox(stepsHTML, steps.length ? "set({wkCooking:{id:'"+r.id+"',step:0}});window.scrollTo(0,0);" : '');

  // ── extras slot: cost (Pro-gated) + tip + chef notes ──
  var costNote = cost.missing.length
    ? '<div style="font-size:14px;color:#9ab36a;margin-top:6px;">≈ estimate — not yet priced: '+cost.missing.slice(0,6).join(', ')+(cost.missing.length>6?'…':'')+'</div>'
    : '<div style="font-size:13px;color:#e0d4b8;margin-top:6px;">all ingredients priced</div>';
  var isWkPro = (typeof USER_TIER !== 'undefined') && USER_TIER === 'pro';
  var costBox = !isWkPro
    ? '<div style="background:#160f08;border:1px dashed #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">'
      + '<div style="font-size:22px;color:#e0d4b8;letter-spacing:6px;margin-bottom:6px;">R \u2022 \u2022 \u2022 \u2022</div>'
      + '<div style="font-size:13px;color:#e0d4b8;">\ud83d\udcb0 Cost estimate \u2014 <strong style="color:'+green+';">Tinza Pro R99/month</strong></div></div>'
    : '<div style="background:#160f08;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;">'
      +   '<div style="font-size:13px;color:#e0d4b8;">\ud83d\udcb0 Estimated cost \u00b7 '+n+' '+(n===1?'serving':'servings')+'</div>'
      +   '<div style="font-size:24px;color:'+green+';font-weight:bold;">'+(cost.priced?('~R'+cost.total):'\u2014')+'</div></div>'
      + (cost.priced ? '<div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid #2a1a10;"><span style="font-size:13px;color:#e0d4b8;">Per person</span><span style="font-size:14px;color:#c0a030;font-weight:bold;">~R'+Math.round(cost.total/n)+'</span></div>' : '')
      + costNote + '</div>';
  var tipBox = r.tip ? recipeBox('💡 Tip', '<div style="font-size:16px;color:#f0ebe1;line-height:1.6;">'+r.tip+'</div>') : '';
  function infoRow(label, val){ return val ? '<div style="margin-bottom:8px;"><span style="color:'+green+';font-size:13px;">'+label+': </span><span style="font-size:15px;color:#f0ebe1;">'+val+'</span></div>' : ''; }
  var extraInner = infoRow('👩‍🍳 Chef notes', r.chefNotes)+infoRow('🍷 Pairs with', r.pairsWith)+infoRow('📊 Nutrition', r.nutrition)+infoRow('🧊 Storage', r.storage)+infoRow('💡 Did you know', r.trivia);
  var extrasHTML = costBox + tipBox + (extraInner ? recipeBox('', extraInner) : '');

  // ── goes well with (array → shared box) ──
  var gwwList = [];
  if(r.goesWith && r.goesWith.length){ gwwList = [].concat(r.goesWith); }
  else if(r.pairsWith){ gwwList = r.pairsWith.split(/,|\band\b|&/i).map(function(x){return x.trim();}).filter(Boolean); }
  else { var gt=wkCourseToTab(r.course); gwwList = (gt==='desserts'?['Coffee','Fresh cream','Berries']:gt==='starters'?['A main course','Fresh bread','Lemon wedges']:['Fresh salad','Crusty bread','Steamed rice']); }
  gwwList = gwwList.map(function(g){ return String(g).replace(/[.;,\s]+$/,'').trim(); }).filter(Boolean);

  // ── sub line: native-script name (if any) + the feel one-liner ──
  var nonLatin = /[^\u0000-\u024F\u1E00-\u1EFF]/.test(r.name||'');
  var sub = (nonLatin ? '<span style="font-style:italic;">'+r.name+'</span>' : '')
          + (nonLatin && r.howThisFeels ? ' · ' : '')
          + (r.howThisFeels ? '<span style="font-style:italic;">'+r.howThisFeels+'</span>' : '');

  // ── back / nav: internal browsing vs universal cross-link ──
  var _back   = universal ? "closeRecipe()" : "wkBackFromRecipe()";
  var _planJs = universal
    ? "closeRecipe({screen:'worldkitchen',wkScreen:'wkplan',wkDataRecipe:null})"
    : "var _r=document.getElementById('root');if(_r)_r._savedScroll=0;set({wkScreen:'wkplan',wkDataRecipe:null});";
  var _homeJs = universal ? "closeRecipe({screen:'home'})" : "set({screen:'home'})";

  // ── opts for the ONE shared page builder (Standard §4b) ──
  return {
    photoName: r.name, photoEmoji: '🍽️',
    backJs: _back, backLabel: '← '+country,
    name: disp,
    sub: sub,
    meta: { origin:r.country, time:r.cookTime, kcal:r.kcal },
    qtyHTML: qtyHTML,
    portionRawNote: rawCarb ? 'Amounts shown are <strong style="color:#e0d4b8;">raw / uncooked</strong> \u2014 rice &amp; pasta roughly triple once cooked.' : '',
    ingredientsHTML: ingredientsHTML,
    notesHTML: notesHTML,
    methodHTML: methodHTML,
    goesWith: gwwList,
    extrasHTML: extrasHTML,
    actions: { addJs: "wkPlanToggle('"+r.id+"',"+n+")", inPlan: inPlan },
    nav: { backJs:_back, planJs:_planJs, planCount:(S.wkPlan||[]).length, homeJs:_homeJs }
  };
}

// internal browsing keeps its exact behaviour (renders the opts as before)
function wkDetailV33(r, country){ return recipePage(wkRecipeOpts(r, country, false)); }

// register World Kitchen on the universal opener — reachable from any section
if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.world = function(id){ return wkPool().find(function(r){ return r && r.id === id; }); };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.world = function(item, recipe, vr){ return wkRecipeOpts(item, item.country, true); };
}

/* parse a cook time out of a method step → pill label ("⏲ 20 min", "⏲ overnight") */
function wkStepTimer(txt){
  var m = (txt||'').match(/(\d+(?:\s*[–-]\s*\d+)?)\s*(min(?:ute)?s?|hours?|hrs?)\b/i);
  if(m){ return '⏲ ' + m[1].replace(/\s+/g,'') + ' ' + (/h/i.test(m[2]) ? 'hr' : 'min'); }
  if(/overnight/i.test(txt)) return '⏲ overnight';
  return '';
}

/* ── fullscreen step-by-step cooking mode (self-contained, no core.js) ── */
function wkCookingView(){
  var green='#c06020', cream='#f5e8cc';
  var c = S.wkCooking || {};
  var pool = wkPool();
  var r = null;
  for(var i=0;i<pool.length;i++){ if(pool[i].id === c.id){ r = pool[i]; break; } }
  if(!r){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;"><button onclick="set({wkCooking:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button><p style="margin-top:20px;">Recipe not found.</p></div>'; }

  var disp = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : r.name;
  var steps = (r.method||'').split(/\.\s+/).map(function(x){return x.trim();}).filter(Boolean);
  if(!steps.length){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;"><button onclick="set({wkCooking:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button><p style="margin-top:20px;">No method steps for this recipe yet.</p></div>'; }

  var idx = Math.min(Math.max(0, c.step||0), steps.length-1);
  var step = steps[idx];
  if(step.slice(-1).match(/[.!?]/) === null) step += '.';
  var tp = wkStepTimer(step);
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;

  return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;display:flex;flex-direction:column;">'
    // header
    + '<div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:14px 16px;">'
    +   '<button onclick="set({wkCooking:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+green+';font-size:13px;cursor:pointer;font-family:Georgia,serif;padding:0;">✕ Exit cooking mode</button>'
    +   '<div style="font-size:17px;color:'+cream+';margin-top:6px;">'+disp+'</div>'
    +   '<div style="font-size:13px;color:#e0d4b8;margin-top:2px;">Step '+(idx+1)+' of '+steps.length+'</div>'
    +   '<div style="height:5px;background:#0f0e0c;border-radius:3px;margin-top:10px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:'+green+';"></div></div>'
    + '</div>'
    // step body
    + '<div style="flex:1;padding:28px 22px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   '<div style="width:46px;height:46px;border-radius:50%;background:#1a1208;border:2px solid '+green+';display:flex;align-items:center;justify-content:center;font-size:20px;color:'+green+';margin-bottom:18px;">'+(idx+1)+'</div>'
    +   '<div style="font-size:20px;color:#dce8de;line-height:1.65;">'+step+'</div>'
    +   (tp ? '<div style="margin-top:18px;"><span style="display:inline-block;background:#1a1208;border:1px solid '+green+';border-radius:8px;color:'+green+';font-size:14px;padding:6px 14px;">'+tp+'</span></div>' : '')
    + '</div>'
    // nav
    + '<div style="display:flex;gap:10px;padding:16px 22px 30px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   (idx>0 ? '<button onclick="set({wkCooking:{id:\''+r.id+'\',step:'+(idx-1)+'}});window.scrollTo(0,0);" style="flex:1;padding:14px;border-radius:12px;background:#160f08;border:1px solid '+green+';color:'+green+';font-size:15px;cursor:pointer;font-family:Georgia,serif;">← Previous</button>' : '')
    +   (last
        ? '<button onclick="set({wkCooking:null});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+green+';border:1px solid '+green+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;">✓ Done</button>'
        : '<button onclick="set({wkCooking:{id:\''+r.id+'\',step:'+(idx+1)+'}});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+green+';border:1px solid '+green+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;">Next step →</button>')
    + '</div>'
    + '</div>';
}

/* ── consolidated, costed shopping list across the whole WK plan ──
   aggregates parsed ingredients (scaled per recipe servings), +10% buffer. */
function wkBuildPlanShopping(){
  var pool = wkPool();
  var map = {}, missing = {};
  var counts = wkPlanPoolCounts(), ap = wkAppetite(), guests = wkGuests();
  (S.wkPlan||[]).forEach(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(!r) return;
    var pk = wkPoolOf(r.course);
    var n = guests * wkEffectiveMult(r, counts[pk]||1, ap) * wkBumpOf(r.id);   // plate-anchored per-person x guests x bump
    wkParseIngredients(r.ingredients).forEach(function(it){
      if(it.toTaste || it.qty==null){
        var tk = wkCleanName(it.name) || it.name;
        if(!map['~'+tk]) map['~'+tk] = { name:it.name, toTaste:true };
        return;
      }
      if(wkIsWater(it.name)) return;                    // water — not bought
      var pr = wkPriceLookup(it.name);
      var key = (pr ? pr.key : wkCleanName(it.name)) + '|' + (pr&&pr.per==='count'?'count':(it.unit==='kg'?'g':it.unit==='l'?'ml':it.unit));
      var qty = it.qty * n;
      // normalise to base unit g / ml / count
      var unit = it.unit, amt = qty;
      if(unit==='kg'){ unit='g'; amt=qty*1000; }
      if(unit==='l'){  unit='ml'; amt=qty*1000; }
      if(pr && pr.per==='count'){ unit='count'; }
      if(!map[key]) map[key] = { name:(pr?it.name:it.name), unit:unit, amt:0, price:pr?pr.price:null, per:pr?pr.per:null };
      map[key].amt += amt;
      if(!pr) missing[wkCleanName(it.name)] = 1;
    });
  });

  var out = [], total = 0;
  Object.keys(map).forEach(function(k){
    var e = map[k];
    if(e.toTaste){ out.push({ name:e.name, amt:'to taste', cost:null, aisle:(typeof aisleCategory==='function'?aisleCategory(e.name):'🧂 Other'), faded:true }); return; }
    var buffered = e.amt * 1.10;   // +10% buffer (Tinza standard)
    var amtStr, cost=null;
    if(e.unit==='count'){ var c=Math.ceil(buffered); amtStr=c+'×'; if(e.price!=null){ cost=Math.round(c*e.price); } }
    else if(e.unit==='ml'){ amtStr = buffered>=1000?(Math.round(buffered/100)/10)+'L':(Math.round(buffered))+'ml'; if(e.price!=null) cost=Math.round((buffered/1000)*e.price); }
    else { amtStr = buffered>=1000?(Math.round(buffered/100)/10)+'kg':(Math.round(buffered))+'g'; if(e.price!=null) cost=Math.round((buffered/1000)*e.price); }
    if(cost!=null) total += cost;
    out.push({ name:e.name, amt:amtStr, cost:cost, aisle:(typeof aisleCategory==='function'?aisleCategory(e.name):'🧂 Other'), faded:false });
  });

  var order=['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  out.sort(function(a,b){ var ai=order.indexOf(a.aisle), bi=order.indexOf(b.aisle); if(ai!==bi) return ai-bi; return a.name.localeCompare(b.name); });
  return { items:out, total:Math.round(total), missing:Object.keys(missing) };
}

/* ── MY PLAN screen ── */
/* ── My Plan tick-off / share / print (WK-aware, self-contained — never touches braai) ── */
function wkToggleShop(name){
  var c = Object.assign({}, S.wkCheckedShop || {});
  c[name] = !c[name];
  set({ wkCheckedShop: c });
}
function wkPlanShareText(includeList){
  var pool = wkPool(), plan = S.wkPlan || [];
  var L = ['*My World Kitchen Plan*', ''];
  plan.forEach(function(e){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===e.id){ r=pool[i]; break; } }
    if(!r) return;
    var n = Math.max(1, e.servings||1);
    var disp = (typeof tinzaDisplayName==='function') ? tinzaDisplayName(r) : r.name;
    L.push('\u2022 ' + disp + '  (' + n + ' ' + (n===1?'serving':'servings') + ')');
  });
  if(includeList){
    var shop = wkBuildPlanShopping(), cur='';
    L.push('', '*Shopping list*  (+10% buffer)');
    shop.items.forEach(function(it){
      if(it.aisle!==cur){ cur=it.aisle; L.push('', it.aisle); }
      L.push('  [ ] ' + it.name + ' \u2014 ' + it.amt + (it.cost!=null ? ' (R'+it.cost+')' : ''));
    });
    L.push('', 'Estimated total: ~R' + shop.total);
  }
  L.push('', '\u2014 made with Tinza');
  return L.join('\n');
}
function wkShareDishes(){ window.open('https://wa.me/?text=' + encodeURIComponent(wkPlanShareText(false)), '_blank'); }
function wkShareWithList(){ window.open('https://wa.me/?text=' + encodeURIComponent(wkPlanShareText(true)), '_blank'); }
function wkPrintPlan(){
  var pool = wkPool(), plan = S.wkPlan || [];
  var rows = plan.map(function(e){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===e.id){ r=pool[i]; break; } }
    if(!r) return '';
    var n = Math.max(1, e.servings||1);
    var disp = (typeof tinzaDisplayName==='function') ? tinzaDisplayName(r) : r.name;
    return '<li>' + disp + ' &mdash; ' + n + ' ' + (n===1?'serving':'servings') + '</li>';
  }).join('');
  var shop = wkBuildPlanShopping(), cur='', sl='';
  shop.items.forEach(function(it){
    if(it.aisle!==cur){ cur=it.aisle; sl += '<h3>'+it.aisle+'</h3>'; }
    sl += '<div>&#9744; ' + it.name + ' &mdash; ' + it.amt + (it.cost!=null?' (R'+it.cost+')':'') + '</div>';
  });
  var w = window.open('', '_blank');
  if(!w){ alert('Please allow pop-ups to print your plan.'); return; }
  w.document.write('<html><head><title>My World Kitchen Plan</title>'
    + '<style>body{font-family:Georgia,serif;color:#7f7f7f;padding:28px;line-height:1.6;}h1{font-size:22px;}h2{font-size:15px;margin-top:22px;}h3{font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#808080;margin:14px 0 4px;}ul{margin:0;padding-left:20px;}li{margin:4px 0;}.tot{margin-top:18px;font-weight:bold;}</style></head><body>'
    + '<h1>&#127757; My World Kitchen Plan</h1><h2>Dishes</h2><ul>' + rows + '</ul>'
    + '<h2>Shopping list <span style="font-weight:normal;font-size:13px;color:#808080;">(+10% buffer)</span></h2>' + sl
    + '<div class="tot">Estimated total: ~R' + shop.total + '</div></body></html>');
  w.document.close(); w.focus(); setTimeout(function(){ w.print(); }, 300);
}

/* -- Portion Brain pools (Jun 2026): spread by COURSE at plan level --
   Each dish shows a fraction of its solo per-person portion, set by how
   many dishes share its course. Floors stop the 'teaspoon of mousse'.
   Self-contained in worldkitchen.js -- no core.js changes. */
function wkPoolOf(course){
  switch(course){
    case 'side': case 'salad': return 'side';
    case 'dessert': return 'dessert';
    case 'starter': case 'snack': case 'finger': return 'starter';
    case 'drink': case 'beverage': return 'drink';
    default: return 'main';
  }
}
function wkSpreadMult(poolKey, count){
  if(count<=1) return 1.0;
  if(poolKey==='side'){    if(count===2)return 0.80; if(count===3)return 0.667; if(count===4)return 0.567; return 0.50; }
  if(poolKey==='dessert'){ if(count===2)return 0.75; if(count===3)return 0.65;  if(count===4)return 0.58;  return 0.55; }
  if(poolKey==='starter'){ if(count===2)return 0.80; if(count===3)return 0.70;  if(count===4)return 0.62;  return 0.55; }
  if(poolKey==='drink')  return 1.0;                       // drinks: per guest, never divided
  if(count===2)return 0.65; if(count===3)return 0.50; return 0.50;   // main / veg-main (floor 50%, researched)
}
var WK_POOL_LABEL = { main:'Main', side:'Side', dessert:'Dessert', starter:'Starter', drink:'Drink' };
function wkPlanPoolCounts(){
  var pool = wkPool(), counts = {};
  (S.wkPlan||[]).forEach(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(r){ var pk=wkPoolOf(r.course); counts[pk]=(counts[pk]||0)+1; }
  });
  return counts;
}
function wkAppetite(){
  if(typeof APPETITE !== 'undefined' && S.appetite && APPETITE[S.appetite]) return APPETITE[S.appetite];
  return { mult:1, label:'Normal' };
}
function wkGuests(){ return Math.max(1, S.wkGuests || 10); }
function wkPoolBase(poolKey){
  // standard solo per-person base (grams) for non-main pools
  if(poolKey==='side') return 150;
  if(poolKey==='dessert') return 120;
  if(poolKey==='starter') return 60;
  if(poolKey==='drink') return null;     // drinks: keep authored, per guest
  return 180;                            // fallback
}
function wkMainCategory(name){
  var n = (typeof wkCleanName==='function') ? wkCleanName(name) : String(name||'').toLowerCase();
  if(/\b(fish|hake|snoek|kingklip|kabeljou|yellowtail|salmon|tuna|trout|sardine|sardines|pilchard|pilchards|anchovy|anchovies|mackerel|prawn|prawns|shrimp|calamari|squid|mussel|mussels|crab|lobster|crayfish|oyster|oysters|scallop|scallops|seafood|octopus|cod|clam|clams|herring|haring|perch|sea bass|bass|dogfish|whitebait)\b/.test(n)) return 'fish';
  if(/\b(bone[- ]?in|on the bone|chop|chops|rib|ribs|wing|wings|drumstick|drumsticks|shank|neck|oxtail|trotter|cutlet|cutlets|spatchcock|whole chicken)\b/.test(n)) return 'bonein';
  if(/\b(beef|lamb|mutton|pork|chicken|mince|minced|steak|fillet|sausage|wors|boerewors|brisket|chuck|goat|sosatie|kebab|bacon|ham|gammon|venison|duck|turkey|meatball|meatballs|meats|frikkadel|rabbit|reindeer|liver|veal|bratwurst|saucisson|suckling|pig|meat|tongue)\b/.test(n)) return 'meat';
  if(/\b(lentil|lentils|bean|beans|chickpea|chickpeas|chana|dal|dhal|fava|soya|cowpea|black-eyed|black eyed|split pea|split peas|shiro)\b/.test(n)) return 'pulse';
  if(/\b(paneer|tofu|halloumi|egg|eggs|mushroom|mushrooms|butternut|aubergine|brinjal|eggplant|cauliflower|spinach|jackfruit|okra|plantain)\b/.test(n)) return 'veg';
  return null;
}
function wkClassifyMain(items){
  // find the protein/main ingredient + its category; fall back to first weighted line
  var i, cat, firstWeighted=null;
  for(i=0;i<items.length;i++){
    var it=items[i];
    if(it.qty==null || it.toTaste) continue;
    if(!firstWeighted) firstWeighted=it;
    cat = wkMainCategory(it.name);
    if(cat) return { item:it, cat:cat };
  }
  if(firstWeighted){
    var fwn = (typeof wkCleanName==='function') ? wkCleanName(firstWeighted.name) : String(firstWeighted.name||'').toLowerCase();
    if(/\b(rice|pasta|noodle|noodles|spaghetti|macaroni|penne|tagliatelle|vermicelli|flour|bread|dough|couscous|polenta|semolina|potato|potatoes|dumpling|dumplings|gnocchi|injera|roti|paratha|pierogi|vareniki|tortilla|maize|samp)\b/.test(fwn))
      return { item:firstWeighted, cat:'carb' };   // starch-led main -> keep authored amounts
  }
  return { item:firstWeighted, cat:'veg' };   // no protein found -> treat as veg/composed main (200g)
}
function wkMainBase(cat){
  if(cat==='bonein') return 250;   // bone-in meat / poultry
  if(cat==='fish')   return 160;   // fish / seafood
  if(cat==='veg')    return 200;   // vegetarian main (~lasagne + a bit)
  if(cat==='carb')   return null;  // starch-led main (pasta/rice/dough) -> keep authored amounts
  if(cat==='pulse')  return null;  // dry pulses (lentils/beans/chickpeas) -> keep authored DRY amounts
  return 180;                      // boneless meat / poultry (default)
}
function wkEffectiveMult(r, count, ap){
  // scale the recipe's authored per-person amounts so the MAIN ingredient lands
  // on its CATEGORY plate (base x spread), floored by the curve.
  var pk = wkPoolOf(r.course);
  var mult = (ap && ap.mult) || 1;
  if(pk==='drink') return mult;                         // per guest, authored amounts
  var items = wkParseIngredients(r.ingredients), main, base, i;
  if(pk==='main'){
    var cls = wkClassifyMain(items);                    // meat / bonein / fish / veg / carb
    main = cls.item; base = wkMainBase(cls.cat);
    if(base==null) return wkSpreadMult('main', count) * mult;   // carb/composed main: keep authored, just spread
  } else {
    base = wkPoolBase(pk); main=null;
    for(i=0;i<items.length;i++){ if(items[i].qty!=null && !items[i].toTaste){ main=items[i]; break; } }
    // composed dish on a starch base (rice pudding, semolina, couscous…): the first
    // ingredient is small but the dish is large — keep AUTHORED amounts, don't rescale
    // to the pool base. (Was forcing Risalamande's 30g rice → 120g dessert = 4x.)
    if(main){
      var _mn = (typeof wkCleanName==='function') ? wkCleanName(main.name) : String(main.name||'').toLowerCase();
      if(/\b(rice|pasta|noodle|noodles|flour|bread|dough|couscous|polenta|semolina|oats|samp|maize|tapioca|sago|vermicelli|barley)\b/.test(_mn)) return wkSpreadMult(pk, count) * mult;
    }
  }
  var spread = wkSpreadMult(pk, count), authored=null;
  if(main && main.unit){
    var u=main.unit, q=main.qty;
    if(u==='kg'){ q=q*1000; } if(u==='l'){ q=q*1000; }
    if(u==='g'||u==='kg'||u==='ml'||u==='l') authored=q;
  }
  if(authored && authored>0) return (base*spread*mult)/authored;
  return spread*mult;
}
function wkBumpOf(id){ var b=S.wkBump||{}; return b[id]||1; }
function wkSetBump(id, mult){ var b=Object.assign({},S.wkBump||{}); b[id]=Math.max(0.25, Math.round(mult*100)/100); set({wkBump:b}); }

// ROUTED through the shared planView() (15 Jun 2026 — WK proof pass). World
// Kitchen now renders its whole plan from buildPlanData/planView/shoppingView,
// matching the §4g One Template and sharing ONE costing path with Braai. WK
// keeps only its own portion brain (wkEffectiveMult etc.) + alias table; it
// hands planView raw, already-scaled dishes.
function wkMyPlanView(){
  var pool = wkPool();
  var plan = S.wkPlan || [];
  var guests = wkGuests();
  var header = {
    title:'Your World Kitchen Plan', emoji:'🌍',
    img:'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/world-map.jpg',
    tagline:'Everything you need, costed and ready',
    backJs:"set({wkScreen:null});window.scrollTo(0,0)", backLabel:'← World Kitchen',
    myPlan:{ count:plan.length, onclick:"set({wkScreen:'wkplan'})" }
  };
  if(!plan.length){
    return planView({ header:header, dishes:[], empty:'Your plan is empty. Open any dish and tap ＋ Add to My Plan.' });
  }
  var counts = wkPlanPoolCounts(), ap = wkAppetite(), gaps = {};
  var dishes = plan.map(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(!r) return null;
    var disp = (typeof tinzaDisplayName==='function') ? tinzaDisplayName(r) : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
    var pk = wkPoolOf(r.course), cnt = counts[pk] || 1;
    var spread = wkSpreadMult(pk, cnt), bump = wkBumpOf(r.id);
    var mult = wkEffectiveMult(r, cnt, ap) * bump;    // per-person factor on authored amounts
    var n = guests * mult;                            // party total
    var parsed = wkParseIngredients(r.ingredients);
    // CONCRETE scaled TOTALS for the one builder — never ratios (the parser only
    // ever yields a number or a to-taste line, so the §4g "no ratio amounts" rule holds).
    var ings = [];
    parsed.forEach(function(it){
      if(it.toTaste || it.qty==null) return;          // to-taste spices: not costed/shopped
      if(wkIsWater(it.name)) return;                  // water: not bought
      var unit=it.unit, amt=it.qty*n, u, a;
      if(unit==='kg'){ u='g'; a=amt*1000; }
      else if(unit==='l'){ u='ml'; a=amt*1000; }
      else if(unit==='g'||unit==='ml'){ u=unit; a=amt; }
      else { u='pcs'; a=amt; }                        // countable (eggs etc.)
      // resolve through WK's alias table so the ONE engine (priceOf) can price it
      var pr = (typeof wkPriceLookup==='function') ? wkPriceLookup(it.name) : null;
      var pn = pr ? pr.key : it.name;
      // flag a gap only when the actual pricing ENGINE (priceOf — what the row uses)
      // ALSO can't price it, so the flag matches what shows (bay-leaf reconcile).
      if(!pr && !(typeof priceOf==='function' && priceOf(pn))) gaps[wkCleanName(it.name)] = it.name;
      ings.push({ name:it.name, amt:a, unit:u, priceName: pn });
    });
    var portionPct = Math.round(spread*100), poolLabel = (WK_POOL_LABEL[pk]||'Dish');
    var shareNote = (pk==='drink')
      ? poolLabel+' · per guest'
      : (cnt>1 ? poolLabel+' · 1 of '+cnt+' · '+portionPct+'% of plate' : poolLabel+' · full portion');
    if(bump!==1) shareNote += ' · <span style="color:#f5c842;">'+bump+'×</span>';
    var mainItem = wkClassifyMain(parsed).item;
    var mainLine = mainItem
      ? mainItem.name+': <span style="color:#e0d4b8;font-size:13px;">'+wkScaleLine(mainItem, mult).amt+' pp</span> <span style="color:#e0d4b8;">·</span> <strong style="color:#c06020;">'+wkScaleLine(mainItem, mult*guests).amt+' total</strong>'
      : '';
    var kc = (typeof r.kcal==='number') ? r.kcal : parseFloat(r.kcal);
    var kcalPP = isNaN(kc) ? null : Math.round(kc * mult);
    return {
      id:r.id, name:disp, emoji:(r.emoji||'🍽️'), kcalPP:kcalPP, guests:guests,
      nameJs:"wkOpenRecipe('"+r.country+"','"+r.id+"',"+Math.max(1,Math.round(n))+")",
      removeJs:"wkPlanToggle('"+r.id+"')",
      lines:[shareNote, mainLine],
      ingredients:ings
    };
  }).filter(Boolean);
  // surface PRICE_DB gaps so they can be filled (template §4: every shopping row must price)
  var gapList = Object.keys(gaps).map(function(k){ return gaps[k]; });
  if(gapList.length && typeof console!=='undefined' && console.warn) console.warn('[Tinza] World Kitchen PRICE_DB gaps ('+gapList.length+'): '+gapList.join(', '));
  // clean bottom (no Georgia): free dish-share · start-new · text nav
  var footer = ''
    + '<button onclick="wkShareDishes()" style="width:100%;padding:12px;border-radius:10px;cursor:pointer;background:#142e1a;border:1px solid #25d366;color:#25d366;font-size:13px;font-weight:bold;margin-bottom:10px;">📲 Share my dishes</button>'
    + '<button onclick="if(confirm(\'Clear your World Kitchen plan and start fresh?\')){set({wkPlan:[],wkCheckedShop:{}});window.scrollTo(0,0);}" style="width:100%;padding:12px;border-radius:10px;cursor:pointer;background:#1a1208;border:1px solid #c06020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:14px;">🔄 Start a New Plan</button>'
    + '<div style="display:flex;justify-content:space-between;padding:0 4px 24px;font-size:13px;">'
    +   '<button onclick="set({wkScreen:null});window.scrollTo(0,0);" style="background:none;border:none;color:#c06020;cursor:pointer;">← World Kitchen</button>'
    +   '<button onclick="set({screen:\'home\'})" style="background:none;border:none;color:#e0d4b8;cursor:pointer;">Home</button>'
    + '</div>';
  return planView({
    header: header,
    guests: {
      value:guests, label:'Guests', note:'the whole menu scales to this',
      decJs:"set({wkGuests:Math.max(1,(S.wkGuests||10)-1)})",
      incJs:"set({wkGuests:(S.wkGuests||10)+1})",
      portionHowHTML: (typeof portionHowBox==='function') ? portionHowBox() : ''
    },
    dishes: dishes,
    checked: S.wkCheckedShop || {},
    toggleFn: 'wkToggleShop',
    shareJs: 'wkShareWithList()',
    printJs: 'wkPrintPlan()',
    footerHTML: footer
  });
}
