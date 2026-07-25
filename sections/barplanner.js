/* ═══════════════════════════════════════════════════════════════════════════
   TINZA · BAR PLANNER — the "Drinks Brain" (wedding/event beverage calculator)
   SCAFFOLD 28 Jun 2026 · built from the locked spec (8 Jun + 23 Jun), for Code
   to verify the maths + wire the nav hook. Own file by design (rule X18): never
   bolt into events.js. PRO-only (rule: whole Events section is Pro).

   WIRING (Code does this — minimal events.js hook, logic stays here):
     • Beverages category list: add a tile → set({beverageCat:'barplanner'})
     • Beverages render branch: if(S.beverageCat==='barplanner') return barPlannerHTML();
     • NAV_KEYS already includes 'beverageCat', so Back works with no dead end.

   PRICING: all midPrice values are SA mid-shelf ESTIMATES (Checkers LiquorShop /
   Tops at Spar class) — VERIFY before launch, same as the bread/vienna pass.

   GLOBAL-READY: spirit/wine/beer names are GENERIC categories (Brandy, Whisky/
   Scotch, Bourbon, Gin, Vodka, Rum, Tequila, Cane) so they read in any country;
   the `eg` field carries regional brand examples only. SA is the default flavour
   (brandy preset, Rand prices). Currency + a per-region price overlay are a future
   layer — the whole app is Rand-costed today, so prices stay Rand for now.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── DATA: representative SA bar items · packPrice = pack cost · serves = drinks
   per pack · tot-based spirits computed from totMl at run time ──────────────── */
var BAR_ITEMS = {
  // SPIRITS — generic GLOBAL categories (name reads worldwide); eg = regional
  // examples only. SA default = brandy. Add more spirits here freely.
  spirits: {
    brandy:  { name:"Brandy",          eg:"Klipdrift, Richelieu, KWV", bottleMl:750, midPrice:190, mixer:"coke",     mixerMl:200 },
    whisky:  { name:"Whisky / Scotch", eg:"J&B, Bells, Johnnie Walker", bottleMl:750, midPrice:260, mixer:"coke",    mixerMl:200 },
    bourbon: { name:"Bourbon",         eg:"Jim Beam, Jack Daniel's",   bottleMl:750, midPrice:300, mixer:"coke",     mixerMl:200 },
    gin:     { name:"Gin",             eg:"Gordon's, Tanqueray",       bottleMl:750, midPrice:230, mixer:"tonic",    mixerMl:150 },
    vodka:   { name:"Vodka",           eg:"Smirnoff, Absolut",         bottleMl:750, midPrice:190, mixer:"lemonade", mixerMl:200 },
    rum:     { name:"Rum",             eg:"Bacardi, Captain Morgan",   bottleMl:750, midPrice:200, mixer:"coke",     mixerMl:200 },
    tequila: { name:"Tequila",         eg:"Olmeca, Jose Cuervo",       bottleMl:750, midPrice:280, mixer:"lemonade", mixerMl:120 },
    cane:    { name:"Cane",            eg:"Mainstay (SA)",             bottleMl:750, midPrice:170, mixer:"coke",     mixerMl:200 }
  },
  // WINE — 750ml, ~5 glasses (150ml) per bottle
  wine:      { name:"Wine (red / white)", eg:"house wine", bottleMl:750, glassMl:150, midPrice:70 },
  // BUBBLY for the toast — 750ml, ~6 flutes per bottle
  bubbly:    { name:"Sparkling wine", eg:"Champagne, Prosecco, Cap Classique (SA)", bottleMl:750, glassMl:120, midPrice:95 },
  // BEER & CIDER — case of 24, one unit = one drink
  beer:      { name:"Beer",  eg:"Castle, Black Label (SA)", caseQty:24, midPrice:290 },
  cider:     { name:"Cider", eg:"Savanna, Hunter's (SA)",   caseQty:24, midPrice:320 },
  // SOFT & MIXERS — 2L, ~8 glasses (250ml) per bottle; mixers measured by ml
  soft:      { name:"Soft drinks (Coke/lemonade 2L)",  bottleMl:2000, glassMl:250, midPrice:28 },
  coke:      { name:"Coke (2L mixer)",     bottleMl:2000, midPrice:28 },
  tonic:     { name:"Tonic (1L mixer)",    bottleMl:1000, midPrice:24 },
  lemonade:  { name:"Lemonade (2L mixer)", bottleMl:2000, midPrice:25 },
  // EXTRAS
  ice:       { name:"Ice (2kg bag)", bagKg:2, midPrice:30 },
  lemons:    { name:"Lemons (garnish)", each:true, midPrice:3 }
};

var BAR_PRESETS = {
  full:      { label:"Full Bar",             split:{ spirits:25, wine:25, beerCider:25, soft:25 } },
  winebub:   { label:"Wine & Bubbly",        split:{ spirits:0,  wine:60, beerCider:0,  soft:40 } },
  beerwine:  { label:"Beer & Wine",          split:{ spirits:0,  wine:35, beerCider:45, soft:20 } },
  highveld:  { label:"Brandy-&-Coke Highveld",split:{ spirits:45, wine:10, beerCider:25, soft:20 } }
};

var BAR_BUFFERS = { exact:0, safe:0.15, generous:0.25 };

/* ── ENGINE: the Drinks Brain ────────────────────────────────────────────────
   opts = { guests, hours, totMl(25|50), split{spirits,wine,beerCider,soft},
            buffer('exact'|'safe'|'generous'), mode('open'|'cash'|'limited'),
            cap(R), spirit(key), toast(bool), mixers(bool), ice(bool) }
   Maths (from locked spec):
     • ~1 drink/guest/hr, 2 in hour 1  →  drinks/guest = hours + 1
     • buffer % on top
     • split distributes total drinks across the 4 categories
     • spirits → tots → 750ml bottles · wine → glasses → bottles
       beer/cider → units → cases of 24 · soft → 250ml glasses → 2L bottles
     • toast = 1 MCC flute/guest (~6/bottle) · ice = 1kg per 2-3 guests
   Returns a structured plan for the renderer. NOTE for Code: tune the rounding,
   the non-drinker shift, and per-category spirit choice. ───────────────────── */
function drinksBrain(opts){
  opts = opts || {};
  var guests = Math.max(1, parseInt(opts.guests || 50, 10));
  var hours  = Math.max(1, parseInt(opts.hours || 5, 10));
  var totMl  = (opts.totMl===50) ? 50 : 25;
  var split  = opts.split || BAR_PRESETS.full.split;
  var bufPct = BAR_BUFFERS[opts.buffer || 'safe'] || 0;

  var perGuest    = hours + 1;                      // 2 in hour 1, 1/hr after
  var totalDrinks = Math.ceil(guests * perGuest * (1 + bufPct));

  // split → drinks per category (guard: if all zero, fall back to full bar)
  var sTot = (split.spirits||0)+(split.wine||0)+(split.beerCider||0)+(split.soft||0);
  if(sTot<=0){ split = BAR_PRESETS.full.split; sTot = 100; }
  function share(pct){ return Math.round(totalDrinks * (pct||0) / sTot); }

  var dSpirits   = share(split.spirits);
  var dWine      = share(split.wine);
  var dBeerCider = share(split.beerCider);
  var dSoft      = share(split.soft);

  var lines = [];      // each: {name, qtyLabel, packs, cost}
  function addLine(name, qtyLabel, packs, unitPrice){
    var cost = Math.round(packs * unitPrice);
    lines.push({ name:name, qtyLabel:qtyLabel, packs:packs, cost:cost });
    return cost;
  }

  var total = 0;

  // SPIRITS — representative spirit (default brandy = Highveld staple)
  if(dSpirits>0){
    var sp = BAR_ITEMS.spirits[opts.spirit || 'brandy'] || BAR_ITEMS.spirits.brandy;
    var totsPerBottle = Math.floor(sp.bottleMl / totMl);          // 750/25 = 30
    var bottles = Math.ceil(dSpirits / totsPerBottle);
    total += addLine(sp.name, bottles+' × 750ml ('+dSpirits+' × '+totMl+'ml tots)', bottles, sp.midPrice);
    // paired mixer for tot+mixer
    if(opts.mixers!==false){
      var mx = BAR_ITEMS[sp.mixer] || BAR_ITEMS.coke;
      var mixerMl = dSpirits * (sp.mixerMl || 200);
      var mixerPacks = Math.ceil(mixerMl / mx.bottleMl);
      total += addLine('↳ '+mx.name, mixerPacks+' for the mix', mixerPacks, mx.midPrice);
    }
  }

  // WINE
  if(dWine>0){
    var w = BAR_ITEMS.wine;
    var glassesPerBottle = Math.floor(w.bottleMl / w.glassMl); // 5
    var wBottles = Math.ceil(dWine / glassesPerBottle);
    total += addLine(w.name, wBottles+' × 750ml ('+dWine+' glasses)', wBottles, w.midPrice);
  }

  // BEER & CIDER — split this category 60/40 beer/cider by default
  if(dBeerCider>0){
    var beerUnits  = Math.round(dBeerCider * 0.6);
    var ciderUnits = dBeerCider - beerUnits;
    if(beerUnits>0){
      var bCases = Math.ceil(beerUnits / BAR_ITEMS.beer.caseQty);
      total += addLine(BAR_ITEMS.beer.name, bCases+' × case of 24 ('+beerUnits+')', bCases, BAR_ITEMS.beer.midPrice);
    }
    if(ciderUnits>0){
      var cCases = Math.ceil(ciderUnits / BAR_ITEMS.cider.caseQty);
      total += addLine(BAR_ITEMS.cider.name, cCases+' × case of 24 ('+ciderUnits+')', cCases, BAR_ITEMS.cider.midPrice);
    }
  }

  // SOFT (also where non-drinkers land)
  if(dSoft>0){
    var sf = BAR_ITEMS.soft;
    var sfPerBottle = Math.floor(sf.bottleMl / sf.glassMl);  // 8
    var sfBottles = Math.ceil(dSoft / sfPerBottle);
    total += addLine(sf.name, sfBottles+' × 2L ('+dSoft+' glasses)', sfBottles, sf.midPrice);
  }

  // TOAST — 1 flute/guest
  if(opts.toast){
    var bb = BAR_ITEMS.bubbly;
    var flutesPerBottle = Math.floor(bb.bottleMl / bb.glassMl); // 6
    var bbBottles = Math.ceil(guests / flutesPerBottle);
    total += addLine('🥂 '+bb.name+' (toast)', bbBottles+' × 750ml (1 flute/guest)', bbBottles, bb.midPrice);
  }

  // ICE — 1kg per 2.5 guests
  if(opts.ice!==false){
    var iceKg = Math.ceil(guests / 2.5);
    var iceBags = Math.ceil(iceKg / BAR_ITEMS.ice.bagKg);
    total += addLine(BAR_ITEMS.ice.name, iceBags+' bag'+(iceBags!==1?'s':'')+' (~'+iceKg+'kg)', iceBags, BAR_ITEMS.ice.midPrice);
  }

  var avgDrinkCost = totalDrinks>0 ? (total/totalDrinks) : 0;

  // MODE output
  var modeNote = '';
  var mode = opts.mode || 'open';
  if(mode==='cash'){
    modeNote = 'Cash bar — guests pay per drink. Quantities above are what to STOCK; your spend is recovered at the bar.';
  } else if(mode==='limited'){
    var cap = Math.max(0, parseFloat(opts.cap || 0));
    var drinksCovered = avgDrinkCost>0 ? Math.floor(cap / avgDrinkCost) : 0;
    var pctCovered = totalDrinks>0 ? Math.min(100, Math.round(drinksCovered/totalDrinks*100)) : 0;
    modeNote = 'Limited tab of R'+cap+' covers about '+drinksCovered+' drinks (~'+pctCovered+'% of the event) at ~R'
      + avgDrinkCost.toFixed(2)+'/drink — then it switches to a cash bar.';
  } else {
    modeNote = 'Open bar — host covers everything below.';
  }

  return {
    guests:guests, hours:hours, totMl:totMl,
    totalDrinks:totalDrinks, perGuest:perGuest,
    breakdown:{ spirits:dSpirits, wine:dWine, beerCider:dBeerCider, soft:dSoft },
    lines:lines, total:Math.round(total), avgDrinkCost:avgDrinkCost,
    mode:mode, modeNote:modeNote
  };
}

/* ── RENDER ─────────────────────────────────────────────────────────────────
   Mirrors budget.js: v33 photo header, set()/setQuiet() state, stepper + chip
   controls, var(--token) colours, back button (no dead end). PRO-gated. ──── */
function barPlannerHTML(){
  var color = 'var(--accent)', bg = 'var(--card2)', border = 'var(--line)';
  var isPro = (typeof tierAllows==='function') ? tierAllows('pro') : true;

  // state defaults
  var guests  = parseInt(S.barGuests || 50, 10);
  var hours   = parseInt(S.barHours || 5, 10);
  var totMl   = (S.barTot===50) ? 50 : 25;
  var presetK = S.barPreset || 'full';
  var split   = S.barSplit || BAR_PRESETS[presetK].split;
  var buffer  = S.barBuffer || 'safe';
  var mode    = S.barMode || 'open';
  var cap     = S.barCap || 5000;
  var toast   = S.barToast !== false;   // default on
  var ice     = S.barIce   !== false;   // default on
  var mixers  = S.barMixers !== false;  // default on

  var back = '<button onclick="set({beverageCat:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid '+border+';border-radius:20px;color:'+color+';font-size:13px;padding:5px 12px;cursor:pointer;">← Beverages</button>';

  var header = '<div style="position:relative;height:170px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#161210 100%);">'
    + '<div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(2,8,2,0.3) 0%,rgba(2,8,2,0.75) 100%);z-index:1;"></div>'
    + back
    + '<div style="position:absolute;bottom:16px;left:18px;z-index:2;">'
    +   '<div style="font-size:40px;line-height:1;">🍸</div>'
    +   '<div style="font-family:Fraunces,serif;font-size:24px;color:#fff;margin-top:6px;">Bar Planner</div>'
    +   '<div style="font-size:13px;color:#e0d4b8;">The Drinks Brain — how much to buy for the whole event</div>'
    + '</div></div>';

  if(!isPro){
    return '<div style="min-height:100vh;background:#0f0e0c;">'+header
      + '<div style="padding:28px 18px;text-align:center;color:var(--ink-soft);">'
      + '<div style="font-size:32px;">👑</div>'
      + '<div style="font-family:Fraunces,serif;font-size:20px;color:var(--gold);margin:8px 0;">Bar Planner is a Pro feature</div>'
      + '<div style="font-size:15px;line-height:1.6;max-width:340px;margin:0 auto;">Work out exactly how much beer, wine, spirits, mixers and ice you need for a wedding or big event — and what it costs — for R90/mo.</div>'
      + '</div></div>';
  }

  // ── controls ──
  function stepper(label, val, decJs, incJs, suffix){
    return '<div style="background:'+bg+';border:1px solid '+border+';border-radius:12px;padding:12px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">'
      + '<span style="font-size:14px;color:var(--ink);">'+label+'</span>'
      + '<span style="display:flex;align-items:center;gap:14px;">'
      +   '<button onclick="'+decJs+'" style="width:34px;height:34px;border-radius:50%;border:1px solid '+color+';background:transparent;color:'+color+';font-size:18px;cursor:pointer;">−</button>'
      +   '<span style="font-family:DM Mono,monospace;font-size:18px;color:var(--gold);min-width:64px;text-align:center;">'+val+(suffix||'')+'</span>'
      +   '<button onclick="'+incJs+'" style="width:34px;height:34px;border-radius:50%;border:1px solid '+color+';background:transparent;color:'+color+';font-size:18px;cursor:pointer;">+</button>'
      + '</span></div>';
  }
  function chipRow(opts2, activeVal, setKey){
    return '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">'
      + opts2.map(function(o){
          var on = o.v===activeVal;
          return '<button onclick="set({'+setKey+':\''+o.v+'\'})" style="padding:9px 14px;border-radius:18px;border:1px solid '+(on?color:border)+';background:'+(on?bg:'transparent')+';color:'+(on?'var(--gold)':'var(--ink-soft)')+';font-size:13px;font-weight:'+(on?'bold':'normal')+';cursor:pointer;white-space:nowrap;">'+o.l+'</button>';
        }).join('')
      + '</div>';
  }
  function sectionLabel(t){ return '<div style="font-size:12px;letter-spacing:1.5px;color:'+color+';text-transform:uppercase;margin:18px 0 8px;">'+t+'</div>'; }

  var controls = '';
  controls += sectionLabel('The event');
  controls += stepper('Guests', guests,
    "setQuiet({barGuests:Math.max(2,(S.barGuests||50)-((S.barGuests||50)<=20?1:5))})",
    "setQuiet({barGuests:Math.min(1000,(S.barGuests||50)+((S.barGuests||50)<20?1:5))})");
  controls += stepper('Hours', hours,
    "setQuiet({barHours:Math.max(1,(S.barHours||5)-1)})",
    "setQuiet({barHours:Math.min(12,(S.barHours||5)+1)})", 'h');
  controls += chipRow([{v:25,l:'Singles (25ml)'},{v:50,l:'Doubles (50ml)'}].map(function(o){return {v:o.v,l:o.l};}), totMl, 'barTot');

  controls += sectionLabel('Bar style');
  controls += chipRow(Object.keys(BAR_PRESETS).map(function(k){return {v:k,l:BAR_PRESETS[k].label};}), presetK, 'barPreset');
  controls += '<div style="font-size:13px;color:var(--ink-soft);margin-bottom:6px;">Split — '
    + 'Spirits '+(split.spirits||0)+'% · Wine '+(split.wine||0)+'% · Beer/Cider '+(split.beerCider||0)+'% · Soft '+(split.soft||0)+'%</div>';

  // Spirit of choice — the global menu (brandy here, bourbon/scotch elsewhere)
  if((split.spirits||0)>0){
    var spK = S.barSpirit || 'brandy';
    controls += sectionLabel('Spirit of choice');
    controls += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px;">'
      + Object.keys(BAR_ITEMS.spirits).map(function(k){
          var sp = BAR_ITEMS.spirits[k], on = k===spK;
          return '<button onclick="set({barSpirit:\''+k+'\'})" style="padding:9px 14px;border-radius:18px;border:1px solid '+(on?color:border)+';background:'+(on?bg:'transparent')+';color:'+(on?'var(--gold)':'var(--ink-soft)')+';font-size:13px;font-weight:'+(on?'bold':'normal')+';cursor:pointer;white-space:nowrap;">'+sp.name+'</button>';
        }).join('')
      + '</div>';
    var spEg = (BAR_ITEMS.spirits[spK]||{}).eg;
    if(spEg) controls += '<div style="font-size:12px;color:var(--ink-soft);margin-bottom:12px;">e.g. '+spEg+'</div>';
  }

  controls += sectionLabel('Buffer');
  controls += chipRow([{v:'exact',l:'Exact'},{v:'safe',l:'Safe +15%'},{v:'generous',l:'Generous +25%'}], buffer, 'barBuffer');

  controls += sectionLabel('Bar mode');
  controls += chipRow([{v:'open',l:'Open bar'},{v:'cash',l:'Cash bar'},{v:'limited',l:'Limited tab'}], mode, 'barMode');
  if(mode==='limited'){
    controls += '<div style="background:'+bg+';border:1px solid '+border+';border-radius:12px;padding:12px 14px;margin-bottom:10px;">'
      + '<span style="font-size:14px;color:var(--ink);">Tab limit (R) </span>'
      + '<input type="number" value="'+cap+'" oninput="S.barCap=this.value" onchange="setQuiet({barCap:this.value})" style="width:110px;background:#0f0d0a;border:1px solid '+border+';border-radius:8px;color:var(--gold);font-family:DM Mono,monospace;font-size:16px;padding:6px 10px;">'
      + '</div>';
  }

  controls += sectionLabel('Extras');
  function toggleBtn(label, on, key){
    return '<button onclick="set({'+key+':'+(!on)+'})" style="padding:9px 14px;border-radius:18px;border:1px solid '+(on?color:border)+';background:'+(on?bg:'transparent')+';color:'+(on?'var(--gold)':'var(--ink-soft)')+';font-size:13px;cursor:pointer;">'+label+' '+(on?'ON':'OFF')+'</button>';
  }
  controls += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">'
    + toggleBtn('🥂 Toast', toast, 'barToast')
    + toggleBtn('🥤 Mixers', mixers, 'barMixers')
    + toggleBtn('🧊 Ice', ice, 'barIce')
    + '</div>';

  // ── compute ──
  var plan = drinksBrain({ guests:guests, hours:hours, totMl:totMl, split:split,
    buffer:buffer, mode:mode, cap:cap, spirit:S.barSpirit, toast:toast, mixers:mixers, ice:ice });

  var rows = plan.lines.map(function(l){
    return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:9px 0;border-bottom:1px solid '+border+';">'
      + '<span style="font-size:14px;color:var(--ink);">'+l.name+'<br><span style="font-size:12px;color:var(--ink-soft);">'+l.qtyLabel+'</span></span>'
      + '<span style="font-family:DM Mono,monospace;font-size:14px;color:#876213;white-space:nowrap;">R'+l.cost+'</span>'
      + '</div>';
  }).join('');

  var output = '<div style="margin-top:6px;">'
    + sectionLabel('Your bar — '+plan.totalDrinks+' drinks for '+plan.guests+' guests over '+plan.hours+'h')
    + '<div style="background:'+bg+';border:1px solid '+border+';border-radius:14px;padding:14px 16px;">'
    +   rows
    +   '<div style="display:flex;justify-content:space-between;align-items:baseline;padding-top:12px;margin-top:6px;">'
    +     '<span style="font-size:15px;color:var(--gold);font-weight:bold;">Shop spend</span>'
    +     '<span style="font-family:DM Mono,monospace;font-size:20px;color:#876213;font-weight:bold;">R'+plan.total+'</span>'
    +   '</div>'
    + '</div>'
    + '<div style="font-size:13px;color:var(--ink-soft);font-style:italic;line-height:1.5;margin-top:10px;">📝 '+plan.modeNote+'</div>'
    + '</div>';

  return '<div style="min-height:100vh;background:#0f0e0c;">'+header
    + '<div style="padding:16px 18px 90px;">'+controls+output+'</div></div>';
}

/* ── exports for non-module load (script-tag global), harmless under node ── */
if(typeof window!=='undefined'){
  window.barPlannerHTML = barPlannerHTML;
  window.drinksBrain    = drinksBrain;
}
