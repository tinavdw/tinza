// Fallback card gradient for Events (warmCard) — a festive plum→deep-plum wash with a
// warm-gold highlight, behind the emoji on photoless cards. Decorative literal.
var EVENTS_GRAD = 'radial-gradient(130% 120% at 22% 10%, #e0b34a 0%, transparent 50%), linear-gradient(155deg, #6a2747, #2a0f1e)';

// ── FINGER-FOOD COST ENGINE ──────────────────────────────────────────────
// Finger foods are priced per PIECE, then scaled by pieces-per-person. The
// piece count comes from the occasion tier (recipe page = full tier "star")
// or the plan's division (My Plan). Cost always follows the pieces shown at
// that spot, so page / plan / platters agree. Buffet mains keep their costPP.
function isFingerPieceItem(r){
  return !!(r && r.makes && r.base300 && r.base300.some(function(i){ return i && i.pp!=null; }));
}
var FINGER_UNIT_G = { egg:50 };   // grams per unit for count-priced items written by weight
function fingerPerPieceCost(r){
  if(!r || !r.base300 || typeof priceOf!=='function') return 0;
  var total=0;
  r.base300.forEach(function(i){
    if(!i || i.pp==null) return;
    var pr = priceOf(i.n);
    if(!pr) return;
    var qty = i.pp, u = String(i.u||'').toLowerCase();
    if(pr.per==='count'){
      if(u==='g' || u==='ml'){
        var uw = FINGER_UNIT_G[String(pr.key||'').toLowerCase()];
        if(!uw) return;                 // unknown count-by-weight → skip, never explode
        total += (qty/uw) * pr.price;   // fractional count, NO round-up
      } else {
        total += qty * pr.price;        // already an actual count
      }
    } else if(u==='g' || u==='ml'){
      total += (qty/1000) * pr.price;   // weight/volume priced (R per kg / per L)
    } else if(u==='kg' || u==='l'){
      total += qty * pr.price;
    }
  });
  return total;                          // rands per piece, unrounded
}
function fingerTier(etype){
  etype = etype || (typeof S!=='undefined' && S.eventFingerEventType) || 'standalone';
  var mn = etype==='standalone'?12:etype==='premeal'?5:4;
  var mx = etype==='standalone'?15:etype==='premeal'?6:5;
  return { min:mn, max:mx, avg:(mn+mx)/2,
    label: etype==='standalone'?'🥪 Snacks only':etype==='premeal'?'🍽️ Before a meal':'🔥 At a braai' };
}
// per-person cost = per-piece × pieces-per-person (defaults to full tier avg)
function fingerCostPP(r, piecesPP){
  var per = fingerPerPieceCost(r);
  if(!per) return r.costPP||0;        // fallback to static if unpriced
  if(piecesPP==null) piecesPP = fingerTier().avg;
  return Math.round(per * piecesPP);
}

function eventsTopNav(accent){
  accent = accent || 'var(--accent)';
  var eAct = "set({screen:'events',eventTab:null,eventActiveRecipe:null,buffetStep:1,activeCake:null,cakeCat:null,beverageCat:null,fingerView:'browse',kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null})";
  var hAct = "set({screen:'home',eventTab:null,eventActiveRecipe:null,buffetStep:1,activeCake:null,cakeCat:null,beverageCat:null,kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null})";
  return '<div style="display:flex;gap:8px;margin-bottom:12px;">'
    + '<button onclick="'+eAct+'" style="flex:1;padding:8px;background:rgba(0,0,0,0.25);border:1px solid '+accent+';border-radius:8px;color:'+accent+';font-size:13px;cursor:pointer;font-family:Georgia,serif;">\u2190 Events</button>'
    + '<button onclick="'+hAct+'" style="flex:1;padding:8px;background:rgba(0,0,0,0.25);border:1px solid '+accent+';border-radius:8px;color:'+accent+';font-size:13px;cursor:pointer;font-family:Georgia,serif;">\uD83C\uDFE0 Home</button>'
    + '</div>';
}

// Shared guest stepper for EVERY Events ± control (recipe page + planner).
// Reaches small groups (floor 2 — so 4 and 6 work) and steps sensibly when
// the count gets big: ±1 below 20, ±5 to 100, ±10 above. Max 500.
function eventGuestStep(n, dir){
  n = (n==null || isNaN(n)) ? 20 : n;
  var step = n < 30 ? 1 : (n < 100 ? 5 : 10);
  var v = dir < 0 ? n - step : n + step;
  return Math.max(2, Math.min(500, v));
}

// After a tab set()/draw(), jump the viewport to the top of the active tab's .content
// (header + tab grid scrolled off above). Double rAF so it fires once the new content has
// laid out. Deterministic — replaces the old _savedScroll=null draw()-flag hack, which
// depended on _savedScroll happening to be null at draw time (not guaranteed, e.g. after
// returning from a recipe). Does not affect recipe-open scroll, history, or other screens.
function eventsScrollToContent(){
  var go=function(){ var c=document.querySelector('.content'); if(c) window.scrollTo(0, Math.max(0, c.getBoundingClientRect().top + window.scrollY - 8)); };
  requestAnimationFrame(function(){ go(); requestAnimationFrame(go); });
}

function eventsHTML(){
  const et = S.eventTab;
  if(S.eventGuests==null||isNaN(S.eventGuests)) S.eventGuests=20;
  const guests = S.eventGuests;
  const isPro = tierAllows('pro');

  // Recipe lookup is handled by openEvent() using the global arrays

  // ── HELPERS ──
  // Smart quantity display for recipe view — calculates actual amounts needed
  function recipeQuantities(r){
    if(!r.perPerson) return '';
    const meat = r.perPerson.meat;
    const unit = r.perPerson.unit||'g';
    const totalG = Math.round(meat * guests);
    const totalKg = (totalG/1000).toFixed(1);
    const boneInExtra = r.boneIn ? ` (bone-in — order ${(totalG*1.35/1000).toFixed(1)}kg raw)` : '';
    return `<div style="background:var(--card2);border:1px solid var(--accent);border-radius:10px;padding:12px;margin-bottom:14px;">
      <div style="font-size:13px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:8px;">📊 Quantities for ${guests} guests</div>
      <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;">
        <span style="color:var(--ink-soft);">Main protein needed</span>
        <span style="color:var(--gold);font-weight:bold;">${totalKg}kg${boneInExtra}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;">
        <span style="color:var(--ink-soft);">Per person portion</span>
        <span style="color:var(--gold);">${meat}${unit}</span>
      </div>
      ${r.costPP?`<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;border-top:1px solid var(--card2);margin-top:4px;">
        <span style="color:var(--ink-soft);">Estimated total cost</span>
        <span style="color:var(--gold);font-weight:bold;">${costLine({html:'~R'+Math.round(r.costPP*guests).toLocaleString()+' (R'+r.costPP+'/pp)'})}</span>
      </div>`:''}
    </div>`;
  }

  function selBtn(label, category, id, isSelected){
    const bg = isSelected ? 'var(--card2)' : 'var(--card2)';
    const border = isSelected ? 'var(--accent)' : 'var(--line2)';
    const check = isSelected ? '<span style="color:var(--accent);font-size:13px;margin-right:4px;">✓</span>' : '';
    return `<button onclick="set({${category}:toggle(S.${category}||[],'${id}')})" style="background:${bg};border:1px solid ${border};border-radius:6px;padding:4px 10px;font-size:13px;color:var(--ink-soft);cursor:pointer;margin:2px;">${check}${label}</button>`;
  }

  // ── SAVOURY PLATTER DATA ──
  const SAVOURY_PLATTERS = {
    sandwiches: {
      id:'sandwiches', name:'Mini Cocktail Sandwiches', emoji:'🥪',
      unitLabel:'sandwiches', piecesPerUnit:1,
      description:'6 fillings · scaled per 1 sandwich (2 halves) · can cut each half into 2 quarters for smaller bites',
      scalingNote:'Each sandwich = 1 slice of bread + filling. Cut crust off, then cut in half. Each half can be halved again into quarters for smaller bites. Minimum recommended batch: 4 sandwiches per filling.',
      baseIngredients:[
        {n:'White or wholewheat sandwich bread (1 slice per sandwich)',a:'25g per sandwich',u:'g',pp:25},
        {n:'Salted butter (softened — moisture barrier)',a:'5g per sandwich',u:'g',pp:5},
      ],
      baseMethod:[
        'Bring butter to room temperature — cold butter tears the bread.',
        'Lay bread slice flat. Spread butter edge to edge, right to the crust.',
        'Apply filling evenly — do not pile. Even thickness = clean cut.',
        'Using a sharp serrated knife, slice the crust off all 4 sides in one firm motion.',
        'Cut in half. Each half is one portion. To make quarters, cut each half diagonally.',
        'Cover with a slightly damp clean cloth and cling wrap until service — prevents drying.',
        'Do not refrigerate assembled sandwiches longer than 2 hours — bread toughens.',
      ],
      varieties:[
        { id:'sw_chickenmayo', name:'Chicken Mayo', emoji:'🐔',
          ingredients:[
            {n:'Cooked chicken breast (finely shredded)',u:'g',pp:20},
            {n:'Mayonnaise (full fat)',u:'g',pp:8},
            {n:'White onion (very finely grated)',u:'g',pp:3},
            {n:'Celery (very finely diced)',u:'g',pp:3},
            {n:'Fresh lemon juice',u:'ml',pp:1},
            {n:'Salt and white pepper',u:'',pp:null},
          ],
          method:[
            'Poach chicken breast in lightly salted water with a bay leaf and a few peppercorns until just cooked through — about 15–18 minutes. Do not boil hard.',
            'Remove and cool completely before shredding. Shred with two forks until very fine — no large chunks.',
            'Grate the onion on the finest grater setting. This distributes flavour without visible pieces.',
            'Combine chicken, mayo, grated onion, celery and lemon juice. Mix well.',
            'Season with salt and white pepper. Taste — it should be well seasoned.',
            'Rest filling 10 minutes in the fridge before spreading — it firms up and spreads cleanly.',
          ],
          tip:'The grated onion is the secret — it melts into the mayo and gives depth without big pieces. White pepper rather than black keeps the filling pale and neat-looking.' },
        { id:'sw_hammustard', name:'Ham & Mustard', emoji:'🍖',
          ingredients:[
            {n:'Shaved deli ham (thin-cut)',u:'g',pp:25},
            {n:'Dijon mustard',u:'g',pp:5},
            {n:'Wholegrain mustard',u:'g',pp:3},
            {n:'Cream cheese (softened)',u:'g',pp:5},
          ],
          method:[
            'Mix Dijon and wholegrain mustard together with the softened cream cheese.',
            'The cream cheese softens the sharpness of the mustard and helps it spread evenly without soaking into the bread.',
            'Spread the mustard-cream cheese mixture directly onto the buttered bread.',
            'Lay shaved ham flat in a single even layer — do not pile or fold.',
            'Cut crusts and halve as per base method.',
          ],
          tip:'Using two mustards — Dijon for heat, wholegrain for texture — gives complexity. The cream cheese is the secret binder that prevents the mustard from making the bread soggy.' },
        { id:'sw_biltong', name:'Biltong Spread', emoji:'🥩',
          ingredients:[
            {n:'Biltong (wet or medium — finely ground)',u:'g',pp:15},
            {n:'Cream cheese (full fat, softened)',u:'g',pp:12},
            {n:'White onion (very finely grated)',u:'g',pp:2},
            {n:'Fresh chives (finely snipped)',u:'g',pp:1},
            {n:'Black pepper (coarsely ground)',u:'',pp:null},
          ],
          method:[
            'Grind biltong in a food processor or blender to a very fine crumb — no large pieces.',
            'If biltong is very dry, blitz with 1 tsp water to loosen slightly.',
            'Combine ground biltong, cream cheese, grated onion and chives. Mix until smooth and spreadable.',
            'Season with coarsely ground black pepper. Biltong is already salty — taste before adding any extra salt.',
            'Spread generously onto buttered bread. The spread should be about 5mm thick.',
          ],
          tip:'Wet or medium biltong gives a creamier spread than dry biltong. The onion and chives lift it from simple to special. This is always the first filling to disappear at any SA event.' },
        { id:'sw_salami', name:'Salami & Mayo', emoji:'🍕',
          ingredients:[
            {n:'Italian salami (thin-sliced)',u:'g',pp:20},
            {n:'Mayonnaise (full fat)',u:'g',pp:8},
            {n:'Dijon mustard',u:'g',pp:2},
            {n:'Fresh rocket or baby spinach leaves',u:'g',pp:2},
          ],
          method:[
            'Combine mayo and Dijon mustard and spread onto buttered bread.',
            'Lay salami slices flat — one layer, slight overlap is fine.',
            'Add a few rocket leaves on top of the salami for a peppery bite.',
            'Press firmly before cutting so layers hold together.',
          ],
          tip:'The Dijon in the mayo cuts through the fat of the salami. Rocket gives a slight peppery contrast — do not skip it. Press the sandwich firmly before cutting for a clean edge.' },
        { id:'sw_eggmayo', name:'Egg Mayo', emoji:'🥚',
          ingredients:[
            {n:'Large eggs (hard-boiled)',u:'g',pp:30},
            {n:'Mayonnaise (full fat)',u:'g',pp:8},
            {n:'White onion (very finely grated)',u:'g',pp:2},
            {n:'Dijon mustard',u:'g',pp:1},
            {n:'Fresh chives (finely snipped)',u:'g',pp:1},
            {n:'Salt, white pepper and sweet paprika',u:'',pp:null},
          ],
          method:[
            'Cover eggs in cold water, bring to the boil. Once boiling, cook exactly 10 minutes. Transfer immediately to ice water for 5 minutes.',
            'Peel and mash eggs with a fork until fine — no large lumps. A slightly rough texture is fine, but no chunks.',
            'Add mayo, grated onion, Dijon, chives, salt and white pepper. Mix well.',
            'Taste — egg mayo needs good seasoning. Do not be shy with the salt.',
            'Refrigerate filling 15 minutes before using — it firms up and spreads cleanly.',
          ],
          tip:'The grated onion melts in and gives a background savoury note. A pinch of sweet paprika dusted on top of the finished sandwich halves makes them look professional. Egg mayo must be made fresh on the day.' },
        { id:'sw_creamcheese', name:'Cream Cheese & Cucumber', emoji:'🥒',
          ingredients:[
            {n:'Cream cheese (full fat, softened)',u:'g',pp:20},
            {n:'Cucumber (English cucumber — paper-thin slices)',u:'g',pp:15},
            {n:'Fresh dill (finely chopped)',u:'g',pp:1},
            {n:'Lemon zest (finely grated)',u:'g',pp:0.5},
            {n:'Salt and white pepper',u:'',pp:null},
          ],
          method:[
            'CRITICAL STEP: Slice cucumber paper-thin. Lay slices on a clean kitchen towel. Salt lightly. Leave 10 minutes. Pat completely dry — any water left will make the bread soggy within 30 minutes.',
            'Mix softened cream cheese with dill and lemon zest. Season with white pepper and a small pinch of salt.',
            'Spread cream cheese mixture generously onto buttered bread.',
            'Arrange dried cucumber slices in a single overlapping layer.',
            'Press gently, cut crusts, and halve immediately. Do not leave assembled — the cucumber still releases moisture over time.',
          ],
          tip:'The drying step is non-negotiable. Lemon zest (not juice — juice makes the cream cheese wet) brightens the whole flavour. This is the most elegant and requested option at summer events.' },
      ]
    },
    bruschetta: {
      id:'bruschetta', name:'Bruschetta Platter', emoji:'🍞',
      unitLabel:'slices', piecesPerUnit:1,
      description:'6 toppings · scaled per 1 bruschetta slice · toast ahead, top to order',
      scalingNote:'Scale all topping ingredients by number of slices needed. Bread base and all toppings are per 1 slice.',
      baseIngredients:[
        {n:'Sourdough or ciabatta (1.5–2cm thick slices)',a:'30g per slice',u:'g',pp:30},
        {n:'Extra virgin olive oil (for brushing)',a:'3ml per slice',u:'ml',pp:3},
        {n:'Raw garlic clove (for rubbing — 1 clove serves 6 slices)',a:'shared',u:'',pp:null},
        {n:'Flaky sea salt (for finishing)',a:'pinch per slice',u:'',pp:null},
      ],
      baseMethod:[
        'Slice bread 1.5–2cm thick on a slight diagonal for the classic bruschetta shape.',
        'Brush both sides generously with olive oil.',
        'Toast on a hot griddle pan or under the grill until golden with clear char marks — about 2 minutes per side. The bread must be genuinely crisp, not just warm.',
        'While hot, immediately rub the top surface once firmly with a raw garlic clove — the toast acts as a grater and absorbs the flavour.',
        'Finish with a pinch of flaky sea salt before topping.',
        'Top and serve within 5 minutes — toasted bread softens quickly once topped.',
      ],
      varieties:[
        { id:'br_tomatobasil', name:'Tomato & Basil', emoji:'🍅',
          ingredients:[
            {n:'Vine-ripened tomatoes (seeds removed, finely diced)',u:'g',pp:18},
            {n:'Fresh basil leaves (torn — never cut with metal)',u:'g',pp:1},
            {n:'Extra virgin olive oil',u:'ml',pp:2},
            {n:'Balsamic glaze',u:'ml',pp:1},
            {n:'Flaky sea salt and black pepper',u:'',pp:null},
          ],
          method:[
            'Halve and deseed tomatoes. Dice finely into 5mm pieces — remove all gel and seeds or the topping becomes watery.',
            'Place diced tomato in a sieve over a bowl. Sprinkle with a pinch of salt. Leave 10 minutes to drain. This step is not optional.',
            'Toss drained tomato with olive oil. Season with black pepper.',
            'Spoon onto warm toasted bread. Tear basil leaves over the top — tearing keeps the edges green.',
            'Drizzle balsamic glaze in a thin zigzag. Serve within 3 minutes.',
          ],
          tip:'The draining step is what separates soggy from perfect. Use a proper balsamic glaze (thick and sweet), not balsamic vinegar. Tear the basil — metal on fresh basil causes the edges to blacken within minutes.' },
        { id:'br_parmaham', name:'Parma Ham & Fig', emoji:'🍯',
          ingredients:[
            {n:'Parma ham (Prosciutto — half slice per bruschetta)',u:'g',pp:10},
            {n:'Fresh fig (¼ per bruschetta, thinly sliced) OR fig preserve',u:'g',pp:8},
            {n:'Fresh rocket leaves',u:'g',pp:2},
            {n:'Extra virgin olive oil (finishing drizzle)',u:'ml',pp:1},
            {n:'Black pepper (coarsely cracked)',u:'',pp:null},
          ],
          method:[
            'Lay the Parma ham flat on the toasted bread — do not scrunch or roll, it should drape naturally.',
            'Place 1–2 thin fig slices (or a small teaspoon of fig preserve) on top of the ham.',
            'Add a small cluster of rocket leaves to one side.',
            'Finish with a drizzle of olive oil and a crack of coarse black pepper.',
          ],
          tip:'Fresh figs in season are far superior — slice them just before service as they oxidise quickly. Out of season, a quality fig preserve works beautifully. The rocket cuts through the richness of the ham with a peppery bite.' },
        { id:'br_chicken', name:'Roasted Chicken & Pesto', emoji:'🐔',
          ingredients:[
            {n:'Roasted chicken breast (hand-shredded — not diced)',u:'g',pp:15},
            {n:'Basil pesto (jarred or fresh)',u:'g',pp:5},
            {n:'Cream cheese (softened)',u:'g',pp:3},
            {n:'Baby spinach or rocket (small leaves)',u:'g',pp:1},
            {n:'Salt and black pepper',u:'',pp:null},
          ],
          method:[
            'Roast chicken breast at 180°C with olive oil, salt, pepper and a sprig of thyme — about 20 minutes until cooked through. Rest 10 minutes before shredding.',
            'Shred chicken by hand into irregular pieces — this gives a rustic texture that holds the pesto better than even dices.',
            'Mix shredded chicken with pesto and cream cheese. The cream cheese softens the pesto and makes it cling to the chicken.',
            'Season well. The mixture should be moist enough to spoon, but not wet.',
            'Pile onto toasted bread. Add a leaf or two of baby spinach for colour.',
          ],
          tip:'Hand-shredded chicken holds pesto far better than diced chicken. The small amount of cream cheese is the trick — it binds the topping and stops the oily pesto from making the bread soggy immediately.' },
        { id:'br_prawn', name:'Prawn & Marie Rose', emoji:'🍤',
          ingredients:[
            {n:'Medium prawns (shelled, deveined)',u:'g',pp:15},
            {n:'Mayonnaise (full fat)',u:'g',pp:4},
            {n:'Tomato ketchup',u:'g',pp:2},
            {n:'Fresh lemon juice',u:'ml',pp:1},
            {n:'Worcestershire sauce',u:'ml',pp:0.5},
            {n:'Pinch of cayenne pepper',u:'',pp:null},
            {n:'Fresh flat-leaf parsley (for garnish)',u:'g',pp:0.5},
          ],
          method:[
            'PRAWN PREP: Bring a pot of salted water to a rolling boil. Add prawns. Cook exactly 2–3 minutes until pink and just curled. Do not overcook — rubbery prawns ruin the bruschetta.',
            'Immediately transfer prawns to ice water for 2 minutes to stop cooking. Drain and pat completely dry.',
            'MARIE ROSE SAUCE: Combine mayo, ketchup, lemon juice, Worcestershire sauce and cayenne. Mix well. Taste — it should be tangy, slightly sweet and have a gentle kick.',
            'Toss prawns gently in just enough sauce to coat. Do not drown them.',
            'Spoon 2–3 prawns per bruschetta slice. Add a sprig of parsley. Serve immediately.',
          ],
          tip:'The ice bath is essential — it stops cooking instantly and keeps prawns tender and plump. Pat them completely dry before saucing or the water dilutes the Marie Rose. Serve within 10 minutes of topping or the bread softens.' },
        { id:'br_salmon', name:'Smoked Salmon & Cream Cheese', emoji:'🐟',
          ingredients:[
            {n:'Smoked salmon (good quality — thin slices)',u:'g',pp:10},
            {n:'Cream cheese (full fat, softened)',u:'g',pp:10},
            {n:'Fresh dill (finely chopped)',u:'g',pp:0.5},
            {n:'Lemon zest (finely grated)',u:'g',pp:0.3},
            {n:'Fresh lemon juice (finishing squeeze)',u:'ml',pp:0.5},
            {n:'Capers (rinsed, for garnish)',u:'g',pp:1},
            {n:'Black pepper (coarsely cracked)',u:'',pp:null},
          ],
          method:[
            'Mix softened cream cheese with dill and lemon zest. Do not add lemon juice to the cream cheese — it makes it watery. Season with black pepper.',
            'Spread a generous layer of cream cheese mixture onto the toasted bread.',
            'Drape the smoked salmon loosely on top — it should look elegant and natural, not tightly pressed down.',
            'Add 2–3 capers to one side and a tiny squeeze of fresh lemon juice just before serving.',
            'Finish with a small frond of fresh dill.',
          ],
          tip:'Zest goes into the cream cheese (flavour without water), juice goes on top just before serving (brightness). Quality smoked salmon is non-negotiable here — it is the centrepiece. The capers add a sharp, briny contrast that cuts the richness beautifully.' },
        { id:'br_mushroom', name:'Balsamic Mushrooms & Brie', emoji:'🍄',
          ingredients:[
            {n:'Button mushrooms (sliced 3mm thick)',u:'g',pp:15},
            {n:'Salted butter',u:'g',pp:2},
            {n:'Fresh thyme leaves',u:'g',pp:0.3},
            {n:'Garlic (finely minced)',u:'g',pp:0.5},
            {n:'Balsamic vinegar (not glaze)',u:'ml',pp:1},
            {n:'Brie cheese (rind on — thin slice)',u:'g',pp:5},
            {n:'Fresh flat-leaf parsley',u:'g',pp:0.3},
          ],
          method:[
            'Heat a pan until quite hot. Add butter.',
            'Add mushrooms in a SINGLE LAYER — do not crowd the pan or they will steam instead of sear. If making large quantities, do this in batches.',
            'Do not stir for 90 seconds. Let them sear and get colour.',
            'Add thyme and garlic. Toss and cook 1 more minute.',
            'Add balsamic vinegar. It will sizzle dramatically. Toss to coat and cook 30 seconds until reduced and glossy.',
            'Remove from heat. Season. The mushrooms should be glossy, not wet.',
            'Spoon onto toasted bread while still warm. Lay a thin slice of Brie on top immediately — the warmth of the mushrooms will start to melt it.',
            'Garnish with parsley. Serve within 5 minutes.',
          ],
          tip:'Single layer in the pan is the most important rule — crowded mushrooms release water and stew instead of caramelising. The Brie must go on while the mushrooms are warm so it begins to melt at the edges. This is the most impressive vegetarian option on the platter.' },
      ]
    },
    pizzas: {
      id:'pizzas', name:'Mini Pizza Platter', emoji:'🍕',
      unitLabel:'mini pizzas', piecesPerUnit:1,
      description:'6 toppings · proper pizza dough and tomato base · par-bake ahead, top and finish to order',
      scalingNote:'Dough and tomato base scale per pizza. Toppings scale per pizza. These bases can be made larger for full-size pizza — simply increase the dough ball size to 250g per pizza.',
      baseIngredients:[
        {n:'Type 00 flour (or cake flour if unavailable)',a:'25g per pizza',u:'g',pp:25},
        {n:'Lukewarm water (36°C — warm to the wrist, not hot)',a:'15ml per pizza',u:'ml',pp:15},
        {n:'Instant yeast',a:'0.25g per pizza',u:'g',pp:0.25},
        {n:'Fine salt',a:'0.5g per pizza',u:'g',pp:0.5},
        {n:'Olive oil (for dough and pan)',a:'1ml per pizza',u:'ml',pp:1},
      ],
      tomatoBase:[
        {n:'Whole peeled tinned tomatoes (San Marzano type)',a:'15g per pizza',u:'g',pp:15},
        {n:'Garlic (finely minced)',a:'0.5g per pizza',u:'g',pp:0.5},
        {n:'Olive oil',a:'1ml per pizza',u:'ml',pp:1},
        {n:'Fresh basil (2–3 leaves)',a:'shared — add to base while cooking',u:'',pp:null},
        {n:'Fine salt and black pepper',a:'to taste',u:'',pp:null},
        {n:'Pinch of sugar (balances acidity)',a:'tiny pinch',u:'',pp:null},
      ],
      cheeseBlend:[
        {n:'Mozzarella (low-moisture, grated — 80% of cheese)',a:'12g per pizza',u:'g',pp:12},
        {n:'Parmesan (finely grated — 20% of cheese)',a:'3g per pizza',u:'g',pp:3},
      ],
      baseMethod:[
        'DOUGH (make at least 2 hours ahead): Mix flour, yeast and salt. Add water and olive oil. Mix until a rough dough forms.',
        'Knead on a lightly floured surface for 8–10 minutes until smooth and elastic. It should spring back when poked.',
        'Coat with a thin film of olive oil, cover with a damp cloth. Prove at room temperature for 1–1.5 hours until doubled in size.',
        'Knock back gently. Divide into individual dough balls. Roll each ball to 3mm thick, 10cm diameter rounds.',
        'For par-baking (highly recommended for events): Bake plain dough bases at 220°C for 5 minutes until set but not golden. Cool and refrigerate or freeze until needed.',
        'TOMATO BASE: Gently sauté garlic in olive oil for 1 minute — do not brown. Add crushed tinned tomatoes, basil, salt, pepper and sugar.',
        'Simmer uncovered on low heat for 15–20 minutes, stirring occasionally, until thick and reduced. It must be thick — watery sauce makes the base soggy.',
        'Blend smooth with a stick blender. Cool before using.',
        'ASSEMBLY: Spread a thin, even layer of tomato base on each par-baked base — about 10g per mini pizza. Less is more.',
        'Sprinkle the mozzarella-Parmesan blend evenly. Then add your chosen topping.',
        'FINAL BAKE: 220°C for 6–8 minutes until cheese is bubbling and the edges are golden.',
      ],
      varieties:[
        { id:'pz_margherita', name:'Margherita', emoji:'🌿',
          ingredients:[
            {n:'Fresh buffalo mozzarella (torn — 1 small piece per pizza)',u:'g',pp:5},
            {n:'Fresh basil leaves (added AFTER baking)',u:'g',pp:2},
            {n:'Drizzle of extra virgin olive oil (after baking)',u:'ml',pp:1},
          ],
          method:[
            'Use the standard dough, tomato base and grated cheese blend as the foundation.',
            'Add a small torn piece of fresh buffalo mozzarella on top of the grated cheese blend — this gives a creamy centre.',
            'Bake at 220°C for 6–8 minutes.',
            'AFTER baking: immediately place fresh basil leaves on top and drizzle with extra virgin olive oil.',
            'The heat from the pizza wilts the basil perfectly without cooking it.',
          ],
          tip:'Fresh basil goes on AFTER baking — it turns black and bitter if baked. The drizzle of good olive oil after baking is what makes a Margherita exceptional. Simple, but it must be done correctly.' },
        { id:'pz_seafood', name:'Seafood', emoji:'🦐',
          ingredients:[
            {n:'Medium prawns (shelled, deveined)',u:'g',pp:6},
            {n:'Calamari tubes (sliced into 5mm rings)',u:'g',pp:5},
            {n:'Olive oil (for pan-frying)',u:'ml',pp:2},
            {n:'Garlic (minced)',u:'g',pp:0.5},
            {n:'Fresh lemon juice (after baking)',u:'ml',pp:1},
            {n:'Fresh flat-leaf parsley (after baking)',u:'g',pp:0.5},
          ],
          method:[
            'PRAWN PREP: Pat prawns completely dry with paper towel. This is critical — wet seafood steams and makes the base soggy.',
            'CALAMARI PREP: Slice tubes into 5mm rings. Pat dry.',
            'Heat a small pan with olive oil until very hot (near smoking). Add garlic and sauté 30 seconds.',
            'Add prawns and calamari to the hot pan. Sear for 90 seconds only — they will continue cooking in the oven. They should be half-cooked at this stage.',
            'Season lightly with salt and pepper. Remove from heat. Pat dry again if any liquid has come out.',
            'Arrange pre-cooked seafood on the cheese-topped base. Do not overlap — single layer.',
            'Bake at 220°C for 5–6 minutes. The seafood finishes cooking in the oven.',
            'After baking: squeeze lemon juice over immediately and scatter flat-leaf parsley.',
          ],
          tip:'The pre-sear is not about cooking the seafood fully — it is about driving off surface moisture. Wet seafood on a pizza creates steam that ruins the base. The lemon squeeze after baking is essential — it lifts the whole pizza and cuts the richness of the cheese.' },
        { id:'pz_hawaiian', name:'Hawaiian', emoji:'🍍',
          ingredients:[
            {n:'Quality deli ham (thin-sliced)',u:'g',pp:5},
            {n:'Pineapple (fresh or tinned — finely diced into 5mm pieces)',u:'g',pp:5},
          ],
          method:[
            'If using tinned pineapple: drain and press in kitchen towel. Leave to dry for 10 minutes. Then dice into 5mm pieces. This removes excess syrup.',
            'If using fresh pineapple: dice into 5mm pieces and pat dry.',
            'Lay ham slices evenly on the cheese-topped base.',
            'Scatter dried pineapple pieces — do not pile. Even distribution ensures every bite gets a piece.',
            'Bake at 220°C for 6–8 minutes until cheese is bubbling and ham edges begin to crisp.',
          ],
          tip:'Small pineapple pieces and thoroughly dried pineapple are the keys to this pizza working. Large wet pieces weep juice all over the base during baking. Do not be embarrassed to make this pizza — it remains wildly popular at events.' },
        { id:'pz_mexican', name:'Mexican', emoji:'🌶️',
          ingredients:[
            {n:'Lean beef mince (80/20)',u:'g',pp:5},
            {n:'White onion (very finely diced)',u:'g',pp:2},
            {n:'Garlic (minced)',u:'g',pp:0.3},
            {n:'Tomato paste',u:'g',pp:1},
            {n:'Ground cumin',u:'g',pp:0.2},
            {n:'Smoked paprika',u:'g',pp:0.2},
            {n:'Dried oreganum',u:'g',pp:0.1},
            {n:'Jalapeño (fresh or pickled — finely sliced)',u:'g',pp:2},
            {n:'Fresh coriander (after baking)',u:'g',pp:0.5},
          ],
          method:[
            'MINCE PREP (do ahead): Heat a pan over high heat. Add a splash of oil.',
            'Sauté onion and garlic until softened — about 3 minutes.',
            'Add mince. Break up thoroughly with a wooden spoon. Cook until completely browned with no pink remaining.',
            'Add tomato paste, cumin, smoked paprika and oreganum. Stir well.',
            'Season generously with salt and pepper. The mince must be well-seasoned at this stage.',
            'Cook 2 more minutes until fragrant and dry — it should not be wet or saucy.',
            'Cool completely before topping pizza bases.',
            'Spoon a thin layer of cooled mince on the cheese-topped base. Add 2–3 jalapeño slices.',
            'Bake at 220°C for 6–8 minutes.',
            'After baking: scatter fresh coriander leaves.',
          ],
          tip:'The mince must be dry — not wet and saucy. Excess moisture is the enemy of a crisp pizza base. The spice blend (cumin + smoked paprika + oreganum) is a classic taco seasoning that translates perfectly to pizza. Cook and season the mince the day before for best flavour.' },
        { id:'pz_vegetarian', name:'Vegetarian', emoji:'🫑',
          ingredients:[
            {n:'Red or yellow bell pepper (finely diced into 5mm pieces)',u:'g',pp:5},
            {n:'Button mushrooms (thinly sliced — pre-sautéed)',u:'g',pp:5},
            {n:'Red onion (very thinly sliced)',u:'g',pp:2},
            {n:'Olive oil (for sautéing mushrooms)',u:'ml',pp:1},
            {n:'Dried oreganum (for finishing)',u:'g',pp:0.2},
          ],
          method:[
            'MUSHROOM PREP: Heat a pan until hot. Sauté sliced mushrooms in a single layer in olive oil — 2 minutes per side. Do not overcrowd. They must get colour and release their moisture before going on the pizza.',
            'Season mushrooms lightly with salt. Set aside on paper towel to drain.',
            'Scatter bell pepper, pre-sautéed mushrooms and red onion rings onto the cheese-topped base.',
            'Keep it single layer — overfilling a mini pizza causes it to collapse when picked up.',
            'Bake at 220°C for 7–8 minutes until vegetables are tender and cheese is golden.',
            'Finish with a pinch of dried oreganum after baking.',
          ],
          tip:'Pre-sautéing the mushrooms is non-negotiable — raw mushrooms on a pizza release up to 40% of their weight in water during baking. The red and yellow pepper combination gives a beautiful colour contrast. Oreganum after baking gives a fresher flavour than baking it in.' },
        { id:'pz_salami', name:'Italian Salami', emoji:'🍕',
          ingredients:[
            {n:'Italian salami (thin-sliced — not too large, 3–4cm diameter)',u:'g',pp:5},
            {n:'Fresh basil (after baking)',u:'g',pp:1},
            {n:'Drizzle of honey (optional — after baking)',u:'ml',pp:0.5},
          ],
          method:[
            'Place salami slices ON TOP of the cheese — not under it.',
            'Spacing: each small pizza should have 3–4 salami slices placed slightly overlapping in the centre.',
            'Bake at 220°C for 6–8 minutes. The salami edges will curl up and caramelise — this is correct and desirable.',
            'After baking: add a fresh basil leaf or two.',
            'Optional but excellent: a tiny drizzle of honey over the hot salami after baking creates a sweet-savoury contrast.',
          ],
          tip:'Salami on top of the cheese is the correct technique — it crisps at the edges and develops a beautiful caramelised flavour. Under the cheese it just steams. The optional honey drizzle is a restaurant trick — the sweet-salty combination makes this the most memorable pizza on the platter.' },
      ]
    }
  };

  // ── SAVOURY PLATTER BUILDER ──
  function savouryPlattersHTML(){
    const platters = [SAVOURY_PLATTERS.sandwiches, SAVOURY_PLATTERS.bruschetta, SAVOURY_PLATTERS.pizzas];
    const varStateKey = {sandwiches:'sandwichVarieties', bruschetta:'bruschettaVarieties', pizzas:'pizzaVarieties'};
    const expanded = S.savouryExpanded;

    // Piece calc shared logic
    const etype2 = S.eventFingerEventType||'standalone';
    const guideMin2 = etype2==='standalone'?12:etype2==='premeal'?5:4;
    const guideMax2 = etype2==='standalone'?15:etype2==='premeal'?6:5;
    // Count ALL selected items including platters that have varieties chosen
    const regularSelected = (S.eventSelectedFingers||[]).length;
    const plattersSelected = platters.filter(p=>(S[varStateKey[p.id]]||[]).length>0).length;
    const totalTypes = Math.max(regularSelected + plattersSelected, 1);
    const piecesNeededPP = Math.ceil((guideMin2+guideMax2)/2/totalTypes);
    const totalPiecesPerPlatter = piecesNeededPP * guests;

    function fmtAmt(raw, u){
      if((u==='g'||u==='ml') && raw>=1000) return (Math.round(raw/100)/10)+(u==='g'?'kg':'L');
      if(u==='slices') return Math.ceil(raw)+' slices';
      return (Math.round(raw*10)/10)+(u||'');
    }

    return `<div style="margin-bottom:4px;">
      <div style="font-size:13px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:6px;">🍽️ Savoury Platters</div>
      <div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:10px 12px;margin-bottom:10px;font-size:13px;color:var(--accent);line-height:1.6;">
        Tap a platter to choose your fillings. Selected platters join your snack count and shopping list automatically.
      </div>
      ${platters.map(p=>{
        const vKey = varStateKey[p.id];
        const chosen = S[vKey]||[];
        const isExpanded = expanded===p.id;
        const isSelected = chosen.length > 0;
        const unitWord = p.id==='sandwiches'?'sandwich':p.id==='bruschetta'?'slice':'pizza';
        const unitsNeeded = Math.ceil(totalPiecesPerPlatter/(p.piecesPerUnit||1));

        const bg = isSelected ? 'var(--card2)' : 'var(--card2)';
        const border = isSelected ? 'var(--accent)' : 'var(--line2)';
        const check = isSelected ? '✅ ' : '';

        return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;margin-bottom:8px;overflow:hidden;">

          <!-- Header row -->
          <div style="padding:12px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;"
               onclick="setQuiet({savouryExpanded:S.savouryExpanded==='${p.id}'?null:'${p.id}'})">
            <div style="flex:1;">
              <div style="font-size:15px;color:var(--ink-soft);">${check}${p.emoji} ${p.name}</div>
              <div style="font-size:13px;color:var(--accent);margin-top:3px;">
                ${isSelected
                  ? `${chosen.length} of ${p.varieties.length} fillings selected · ${piecesNeededPP} ${p.unitLabel} pp · ${totalPiecesPerPlatter} total`
                  : p.description}
              </div>
            </div>
            <div style="color:var(--accent);font-size:20px;margin-left:12px;flex-shrink:0;">${isExpanded?'▲':'▼'}</div>
          </div>

          <!-- Expanded panel -->
          ${isExpanded?`<div style="border-top:1px solid var(--card2);padding:12px;">

            <div style="font-size:13px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">
              ${chosen.length} of ${p.varieties.length} selected — tap to toggle
            </div>

            ${p.varieties.map(v=>{
              const isChosen = chosen.includes(v.id);
              return `<div style="background:${isChosen?'var(--card2)':'var(--card2)'};border:1px solid ${isChosen?'var(--accent)':'var(--line)'};border-radius:8px;margin-bottom:6px;overflow:hidden;">

                <!-- Variety toggle row — min 48px for mobile tap -->
                <div style="display:flex;align-items:center;padding:12px;cursor:pointer;min-height:48px;"
                     onclick="setQuiet({${vKey}:S.${vKey}&&S.${vKey}.includes('${v.id}')?S.${vKey}.filter(x=>x!=='${v.id}'):[...(S.${vKey}||[]),'${v.id}']})">
                  <div style="width:30px;height:30px;border-radius:50%;border:2px solid ${isChosen?'var(--accent)':'var(--line2)'};background:${isChosen?'var(--accent)':'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px;font-size:16px;">
                    ${isChosen?'✓':''}
                  </div>
                  <div style="flex:1;">
                    <div style="font-size:14px;color:var(--ink-soft);">${v.emoji} ${v.name}</div>
                    <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">
                      ${v.ingredients.filter(i=>i.pp!=null).map(i=>i.pp+(i.u||'')+'g pp').join(' · ')}
                    </div>
                  </div>
                </div>

                <!-- Ingredient detail (only when chosen) -->
                ${isChosen?`<div style="border-top:1px solid var(--card2);padding:10px 12px;background:var(--card2);">
                  ${v.ingredients.map(i=>{
                    if(i.pp==null) return `<div style="font-size:13px;color:var(--ink-soft);padding:2px 0;">• ${i.n} — to taste</div>`;
                    const raw = i.pp * unitsNeeded;
                    const tot = fmtAmt(raw, i.u);
                    return `<div style="display:flex;justify-content:space-between;align-items:baseline;padding:4px 0;border-bottom:1px solid var(--line);font-size:13px;">
                      <span style="color:var(--ink-soft);flex:1;">${i.n}</span>
                      <span style="flex-shrink:0;margin-left:8px;">
                        <span style="color:var(--ink-soft);font-size:13px;">${i.pp}${i.u||''} per ${unitWord} · </span>
                        <span style="color:var(--gold);font-weight:bold;">${tot} total</span>
                      </span>
                    </div>`;
                  }).join('')}
                  ${v.method&&v.method.length?`<div style="margin-top:10px;">
                    <div style="font-size:13px;letter-spacing:1px;color:var(--accent);text-transform:uppercase;margin-bottom:6px;">Method</div>
                    ${v.method.map((step,si)=>`<div style="display:flex;gap:8px;margin-bottom:8px;">
                      <div style="min-width:20px;height:20px;border-radius:50%;border:1px solid var(--accent);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;margin-top:1px;">${si+1}</div>
                      <p style="margin:0;font-size:13px;color:var(--ink-soft);line-height:1.6;">${step}</p>
                    </div>`).join('')}
                  </div>`:''}
                  <div style="font-size:13px;color:var(--ink-soft);font-style:italic;margin-top:8px;line-height:1.5;background:var(--card2);border-left:2px solid var(--line2);padding:6px 8px;border-radius:0 6px 6px 0;">💡 ${v.tip}</div>
                </div>`:''}
              </div>`;
            }).join('')}

            <!-- Base ingredients -->
            <div style="margin-top:10px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px;">
              <div style="font-size:13px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Base ingredients (all varieties)</div>
              ${p.baseIngredients.map(i=>{
                if(i.pp==null) return `<div style="font-size:13px;color:var(--accent);padding:2px 0;">• ${i.n}</div>`;
                const raw = i.pp * unitsNeeded;
                const tot = fmtAmt(raw, i.u);
                return `<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--line);">
                  <span style="color:var(--ink-soft);">${i.n}</span>
                  <span style="color:var(--gold);font-weight:bold;">${tot} total</span>
                </div>`;
              }).join('')}
            </div>

            <!-- Pizza: tomato base + cheese blend extra sections -->
            ${p.tomatoBase?`<div style="margin-top:8px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px;">
              <div style="font-size:13px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍅 Tomato Base (from scratch)</div>
              ${p.tomatoBase.map(i=>{
                if(i.pp==null) return `<div style="font-size:13px;color:var(--accent);padding:2px 0;">• ${i.n}</div>`;
                const raw = i.pp * unitsNeeded;
                const tot = fmtAmt(raw, i.u);
                return `<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--line);">
                  <span style="color:var(--ink-soft);">${i.n}</span>
                  <span style="color:var(--gold);font-weight:bold;">${tot} total</span>
                </div>`;
              }).join('')}
            </div>
            <div style="margin-top:8px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px;">
              <div style="font-size:13px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🧀 Cheese Blend</div>
              ${p.cheeseBlend.map(i=>{
                const raw = i.pp * unitsNeeded;
                const tot = fmtAmt(raw, i.u);
                return `<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--line);">
                  <span style="color:var(--ink-soft);">${i.n}</span>
                  <span style="color:var(--gold);font-weight:bold;">${tot} total</span>
                </div>`;
              }).join('')}
            </div>`:''}

            <!-- Base method (pizza & bruschetta) -->
            ${p.baseMethod?`<div style="margin-top:8px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px;">
              <div style="font-size:13px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Base Method</div>
              ${p.baseMethod.map((step,si)=>`<div style="display:flex;gap:8px;margin-bottom:8px;">
                <div style="min-width:20px;height:20px;border-radius:50%;border:1px solid var(--accent);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;margin-top:1px;">${si+1}</div>
                <p style="margin:0;font-size:13px;color:var(--ink-soft);line-height:1.6;">${step}</p>
              </div>`).join('')}
            </div>`:''}

            <!-- Sandwich base method -->
            ${p.baseMethod&&p.id==='sandwiches'?`<div style="margin-top:4px;font-size:13px;color:var(--ink-soft);font-style:italic;padding:6px 8px;background:var(--card2);border-left:2px solid var(--line2);border-radius:0 6px 6px 0;">
              Minimum recommended: 4 sandwiches per filling. Scale per sandwich (1 slice of bread). Cut each half into 2 quarters for smaller bites.
            </div>`:''}

            ${chosen.length>0?`<div style="margin-top:10px;background:var(--card2);border:1px solid var(--line2);border-radius:8px;padding:10px;font-size:13px;">
              <div style="color:var(--gold);font-weight:bold;margin-bottom:6px;">📊 For ${guests} guests · ${piecesNeededPP} ${p.unitLabel} pp</div>
              <div style="display:flex;justify-content:space-between;padding:2px 0;"><span style="color:var(--ink-soft);">Total ${p.unitLabel} needed</span><span style="color:var(--gold);font-weight:bold;">${totalPiecesPerPlatter}</span></div>
              <div style="display:flex;justify-content:space-between;padding:2px 0;"><span style="color:var(--ink-soft);">Total ${unitWord}s to prepare</span><span style="color:var(--gold);font-weight:bold;">${unitsNeeded}</span></div>
              <div style="display:flex;justify-content:space-between;padding:2px 0;"><span style="color:var(--ink-soft);">Fillings selected</span><span style="color:var(--gold);font-weight:bold;">${chosen.length} of ${p.varieties.length}</span></div>
            </div>`:''}

          </div>`:''}
        </div>`;
      }).join('')}
    </div>`;
  }

  // ── FINGER FOODS QUICK-NAV ──
  function fingerQuickNav(activeSection){
    const secs=[
      {id:'meaty', emoji:'🥩', label:'Meaty',   items:EVENTS_FINGER_FOODS.meaty||[]},
      {id:'pastry',emoji:'🥐', label:'Pastry',  items:EVENTS_FINGER_FOODS.pastry||[]},
      {id:'sweet', emoji:'🍫', label:'Sweet',   items:EVENTS_FINGER_FOODS.sweet||[]},
      {id:'savoury',emoji:'🍽️',label:'Savoury',items:EVENTS_FINGER_FOODS.savoury||[]},
      {id:'veggie',emoji:'🥗', label:'Sauces', items:EVENTS_FINGER_FOODS.veggie||[]},
      {id:'myplan',emoji:'📋', label:'My Plan', items:[]},
    ];
    const selected = S.eventSelectedFingers||[];
    const totalAll = selected.length;
    return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:14px;">
      ${secs.map(s=>{
        const isActive = activeSection===s.id;
        const selCount = s.items.filter(r=>selected.includes(r.id)).length;
        const hasSel = selCount>0;
        const isPlan = s.id==='myplan';
        const action = isPlan ? "set({fingerView:'myplan'})" : `setQuiet({fingerSection:'${s.id}',savouryExpanded:null,fingerView:'browse'})`;
        return `<button onclick="${action}"
          style="padding:8px 4px;border-radius:8px;border:1px solid ${isActive?'var(--accent)':hasSel?'var(--line2)':isPlan&&totalAll>0?'var(--gold)':'var(--line)'};
                 background:${isActive?'var(--card2)':hasSel?'var(--card2)':isPlan&&totalAll>0?'var(--card2)':'transparent'};
                 cursor:pointer;text-align:center;position:relative;">
          <div style="font-size:16px;">${s.emoji}</div>
          <div style="font-size:13px;color:${isActive?'var(--gold)':hasSel?'var(--ink-soft)':isPlan&&totalAll>0?'var(--gold)':'var(--ink-soft)'};margin-top:2px;">${s.label}</div>
          ${hasSel?`<div style="position:absolute;top:3px;right:4px;background:var(--accent);color:white;border-radius:6px;font-size:13px;padding:1px 4px;">${selCount}</div>`:''}
          ${isPlan&&totalAll>0?`<div style="position:absolute;top:3px;right:4px;background:var(--gold);color:var(--card2);border-radius:6px;font-size:13px;padding:1px 4px;">${totalAll}</div>`:''}
        </button>`;
      }).join('')}
    </div>`;
  }

  function fingerMyPlanBtn(){
    const selected = S.eventSelectedFingers||[];
    const total = selected.length;
    if(!total) return '';
    return `<button onclick="set({fingerView:'myplan'})" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid var(--accent);background:var(--card2);color:var(--gold);font-size:14px;cursor:pointer;font-family:Georgia,serif;">
      📋 See my Finger Food Plan & Shopping List →
      <div style="font-size:13px;color:var(--accent);margin-top:3px;">${total} type${total!==1?'s':''} selected · ${guests} guests</div>
    </button>`;
  }


  // ── FINGER FOODS MY PLAN VIEW ──
  function fingerMyPlanHTML(){
    const selected = S.eventSelectedFingers||[];
    const etype = S.eventFingerEventType||'standalone';
    const guideMin = etype==='standalone'?12:etype==='premeal'?5:4;
    const guideMax = etype==='standalone'?15:etype==='premeal'?6:5;
    const totalTypes = selected.length;
    const piecesPerType = totalTypes>0 ? Math.ceil((guideMin+guideMax)/2/Math.max(totalTypes,1)) : 0;

    const allFingers = [
      ...(EVENTS_FINGER_FOODS.meaty||[]),
      ...(EVENTS_FINGER_FOODS.pastry||[]),
      ...(EVENTS_FINGER_FOODS.sweet||[]),
      ...(EVENTS_FINGER_FOODS.savoury||[]),
      ...(EVENTS_FINGER_FOODS.veggie||[]),
    ];
    const selectedItems = allFingers.filter(r=>selected.includes(r.id));

    if(totalTypes===0) return `<div style="background:var(--card2);border:1px solid #806000;border-radius:10px;padding:20px;text-align:center;margin:20px 0;">
      <div style="font-size:36px;margin-bottom:10px;">🥪</div>
      <div style="font-size:14px;color:var(--gold);margin-bottom:8px;">No snacks selected yet</div>
      <div style="font-size:13px;color:var(--gold);margin-bottom:14px;">Go back and tap any snack or platter to add it to your event</div>
      <button onclick="set({fingerView:'browse'})" style="padding:10px 20px;background:var(--card2);border:1px solid var(--gold);border-radius:8px;color:var(--gold);cursor:pointer;font-size:13px;">← Browse snacks</button>
    </div>`;

    // ── Summary header ──
    const totalCostPP = selectedItems.reduce((s,r)=>s+(isFingerPieceItem(r)?fingerCostPP(r,piecesPerType):(r.costPP||0)),0);
    const totalCost = totalCostPP * guests;

    // ── By-dish view ──
    function fmtAmt(pp, u, totalPcs){
      if(pp==null) return null;
      const raw = pp * totalPcs;
      if((u==='g'||u==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(u==='g'?'kg':'L');
      return Math.round(raw*10)/10+(u||'');
    }

    const byDishHTML = `<div style="margin-bottom:16px;">
      <div style="font-size:13px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">🍽️ Selected Snacks</div>
      ${selectedItems.map(r=>{
        const totalPcs = piecesPerType * guests;
        return `<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:14px;margin-bottom:8px;display:flex;align-items:flex-start;gap:12px;">
          <span style="font-size:20px;flex-shrink:0;line-height:1.35;">${r.emoji||'🍽️'}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:16px;color:var(--ink);font-weight:bold;line-height:1.35;">${r.name}</div>
            <div style="font-size:13px;color:var(--ink-soft);margin-top:4px;">${piecesPerType} pieces pp · ${totalPcs} total${(function(){var c=isFingerPieceItem(r)?fingerCostPP(r,piecesPerType):r.costPP;return c?(' · '+costLine({html:'~R'+c+'/pp'})):'';})()}</div>
          </div>
          <span onclick="openRecipe('events','${r.id}')" style="font-size:22px;color:var(--accent);flex-shrink:0;align-self:center;line-height:1;cursor:pointer;">›</span>
        </div>`;
      }).join('')}
    </div>`;

    // ── Consolidated shopping list → shared shoppingView (E1 migration) ──
    const shopItems = fingerShopItems(selectedItems, piecesPerType*guests);
    const fingerWaMsg = encodeURIComponent(
      '🥪 Finger Food Shopping List — '+guests+' guests\n\n'
      + shopItems.map(function(it){ return '• '+it.name+': '+it.qtyStr; }).join('\n')
    );
    return `<div>
      ${fingerQuickNav('myplan')}

      <!-- Summary -->
      <div style="background:var(--card2);border:2px solid var(--accent);border-radius:12px;padding:14px;margin-bottom:16px;">
        <div style="font-size:15px;color:var(--gold);font-weight:bold;margin-bottom:6px;">📋 My Finger Food Plan</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-bottom:10px;">${guests} guests · ${totalTypes} snack type${totalTypes!==1?'s':''} · ~${piecesPerType} pieces pp per type</div>
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;border-top:1px solid var(--card2);">
          <span style="color:var(--ink-soft);">Estimated total cost</span>
          <span style="color:var(--gold);font-weight:bold;">${costLine({html:'~R'+Math.round(totalCost).toLocaleString()+' · R'+Math.round(totalCostPP)+'/pp'})}</span>
        </div>
      </div>

      ${byDishHTML}
      ${shoppingView({
        items: shopItems,
        totals: { cookTotal:null, buyTotal:null },
        checked: S.checkedFingerItems||{},
        toggleFn: 'fingerToggleShop',
        shareJs: shopItems.length ? `window.open('https://wa.me/?text=${fingerWaMsg}','_blank')` : '',
        noCost: true
      })}
      ${shopItems.length ? packSizeNote('var(--accent)') : ''}
      <button onclick="set({fingerView:'browse'})" style="width:100%;padding:12px;margin-top:4px;border-radius:10px;border:1px solid var(--line2);background:var(--card2);color:var(--accent);font-size:13px;cursor:pointer;">
        ← Back to Browse
      </button>
    </div>`;
  }


  function shopListHTML(mains,sides,salads,starters,desserts){
    const all = [...(mains||[]),...(sides||[]),...(salads||[]),...(starters||[]),...(desserts||[])];
    if(!all.length) return '';
    // Categorise ingredients
    const butchery=[], produce=[], dairy=[], dryGoods=[], pantry=[], sauceItems=[];
    const BUTCHERY_KEYS = ['beef','lamb','pork','chicken','hake','fish','mince','snoek','mutton','venison','wors','boerewors'];
    const DAIRY_KEYS = ['cream','milk','butter','cheese','yoghurt','feta','egg'];
    const PRODUCE_KEYS = ['onion','garlic','tomato','potato','carrot','lemon','apple','butternut','pumpkin','pepper','celery','spinach','mushroom','cabbage','basil','parsley','mint','coriander','ginger','rosemary','thyme'];

    all.forEach(recipe=>{
      // For meat/protein items, show scaled quantity
      const meatKg = recipe.perPerson?.meat ? (recipe.perPerson.meat * guests / 1000).toFixed(1) : null;
      const meatUnit = recipe.perPerson?.unit||'g';
      const ingrs = recipe.pantry || recipe.base300?.map(i=>i.n+(i.a?' — '+i.a:'')) || [];
      ingrs.forEach((ing,idx)=>{
        const raw = typeof ing === 'string' ? ing : (ing.n+(ing.a?' — '+ing.a:''));
        const lower = raw.toLowerCase();
        // First ingredient of pantry = main protein, show scaled kg
        const scaledNote = (idx===0 && meatKg && meatUnit!=='shank') ? ` → <strong style="color:var(--gold);">${meatKg}kg for ${guests} guests</strong>` : 
                           (idx===0 && meatKg && meatUnit==='shank') ? ` → <strong style="color:var(--gold);">${guests} shanks</strong>` : '';
        const item = `<div style="padding:3px 0;font-size:13px;color:var(--ink-soft);border-bottom:1px solid var(--card2);">• ${raw}${scaledNote} <span style="color:var(--accent);font-size:13px;">(${recipe.name})</span></div>`;
        if(BUTCHERY_KEYS.some(k=>lower.includes(k))) butchery.push(item);
        else if(DAIRY_KEYS.some(k=>lower.includes(k))) dairy.push(item);
        else if(PRODUCE_KEYS.some(k=>lower.includes(k))) produce.push(item);
        else if(lower.includes('flour')||lower.includes('sugar')||lower.includes('rice')||lower.includes('pasta')||lower.includes('bread')) dryGoods.push(item);
        else pantry.push(item);
      });
    });

    function section(title, items, emoji){
      if(!items.length) return '';
      return `<div style="margin-bottom:12px;"><div style="font-size:13px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:6px;">${emoji} ${title} (${items.length} items)</div>${items.join('')}</div>`;
    }

    return `<div style="margin-top:12px;background:var(--bg);border:1px solid var(--line2);border-radius:10px;padding:12px;">
      <div style="font-size:13px;color:var(--gold);margin-bottom:10px;">🛒 Shopping list — ${guests} guests (+10% buffer included)</div>
      <div style="background:var(--card2);border:1px solid var(--accent);border-radius:6px;padding:8px;margin-bottom:10px;font-size:13px;color:var(--accent);">⚠️ Quantities are per-recipe pantry amounts. Scale by your exact guest count. Always verify totals with a professional caterer for events of 50+ people.</div>
      ${section('Butchery',butchery,'🥩')}
      ${section('Produce',produce,'🥦')}
      ${section('Dairy',dairy,'🥛')}
      ${section('Dry goods',dryGoods,'🌾')}
      ${section('Pantry',pantry,'🫙')}
    </div>`;
  }

  // ── SELECTABLE EVENT CARD (Pro: toggle + open; Plus/Free: open only) ──
  function eventCard(r, type, category){
    const isSelected = category && isPro && (S[category]||[]).includes(r.id);
    const bg = isSelected ? 'var(--card2)' : 'var(--card2)';
    const border = isSelected ? 'var(--accent)' : 'var(--line2)';
    const check = isSelected ? '<span style="color:var(--accent);font-size:16px;margin-right:6px;">✓</span>' : '';
    const toggleAction = (category && isPro) ? `setQuiet({${category}:toggle(S.${category}||[],'${r.id}')})` : `openRecipe('events','${r.id}')`;
    const openAction = `openRecipe('events','${r.id}')`;

    // Route through the shared Warm Spice card (Standard §3): card opens the recipe,
    // checkbox toggles the plan (only when a Pro category selection is active).
    // META = "HOW THIS FEELS" (Tina 23 Jul: gram pp already shows on the recipe page, so
    // the card line is spent on the evocative one-liner — matches WK + Spice). Reads BOTH
    // field names (howThisFeels app-wide · howItFeels in Health) until they're unified.
    // Graceful fallback so no card goes blank until events feel-copy is authored (Fable):
    // How This Feels → region → per-person portion ("{meat} {unit} pp", buffet.js:71 shape).
    // A portion is a quantity, never gated. Halal/Kosher flags always kept.
    const _feel = r.howThisFeels || r.howItFeels || '';
    const _portionPP = r.perPerson ? (r.perPerson.meat + ' ' + (r.perPerson.unit||'g') + ' pp') : '';
    const eMeta = [
      (_feel || r.region || _portionPP),
      (r.halalFlag ? '⚠️ Halal' : ''),
      (r.kosherFlag ? '⚠️ Kosher' : '')
    ].filter(Boolean).join(' · ');
    // Finger-piece items show the REAL per-piece cost (same value/rounding the
    // recipe page uses, L1713) labelled "/piece" — never the stale static costPP.
    // Buffet mains etc. keep their per-person "pp" badge. Pro-gating unchanged.
    // Cost gate lives in warmCard → costLine (tierAllows('pro')): Pro sees the price,
    // Free sees the lock. The old caller-side isPlus guard was a dead tier ('plus' ∉
    // TIER_LEVEL) that hid the chip from everyone — Tina ruled 23 Jul: price shows for Pro.
    const _isFinger = isFingerPieceItem(r);
    const _perPiece = _isFinger ? fingerPerPieceCost(r) : 0;
    const _costText = (_isFinger && _perPiece > 0)
      ? '≈R' + (Math.round(_perPiece*100)/100) + '/piece'
      : '';
    return warmCard({
      name: r.name,
      photoName: r.photoName || r.name,
      emoji: r.emoji || '🍽️',
      meta: eMeta,
      costPP: (!_isFinger && r.costPP) ? r.costPP : '',
      costText: _costText,
      openJs: openAction,
      toggleJs: (category && isPro) ? `setQuiet({${category}:toggle(S.${category}||[],'${r.id}')})` : '',
      sel: isSelected,
      grad: EVENTS_GRAD
    });
  }

  // ── Kiddies opens as its own page (Model B) — bypasses the tab wrapper ──
  if(et==='kiddies') return kidsPartyHTML();

  // ── Big Buffet opens as its own standalone page (Model B), like Kiddies.
  //    buffetStepN renders its own header + ← Events nav, so you LAND on the
  //    buffet (nothing to scroll up into) and the plan stops at the top.
  //    Restores the prior isolated behaviour. ──
  if(et==='bigcooking'){
    const bs = S.buffetStep||1;
    if(bs===2) return buffetStep2();
    if(bs===3) return buffetStep3();
    if(bs===4) return buffetStep4();
    if(bs===5) return buffetStep5();
    if(bs===6) return buffetStep6();
    if(bs===7) return buffetStep7();
    if(bs===8) return buffetStep8();
    return buffetStep1();
  }

  // ── Buffet step flow — returns standalone, bypasses tab wrapper ──
  const tabs = [
    {id:'bigcooking', label:'🍽️ Big Buffet',             feel:'Generous spreads, everyone back for seconds'},
    {id:'fingerfoods',label:'🥪 Finger Foods & Snacks',   feel:'Little bites that vanish off the platter'},
    {id:'weddingcake',label:'🎂 Celebration Cakes',       feel:'The showstopper everyone gathers around'},
    {id:'kiddies',    label:'🎈 Kiddies Parties',         feel:'Colour, sugar and squeals of delight'},
    {id:'beverages',  label:'🍹 Beverages & Cocktails',   feel:'Something cold to raise and clink'},
  ];

  const howItWorksOpen = S.eventsHowOpen || false;

  return `<div style="min-height:100vh;background:var(--bg);">

    ${sectionHeader({
      title: et ? (tabs.find(t=>t.id===et)||{}).label.replace(/^\S+\s*/,'') || 'Events & Celebrations' : 'Events & Celebrations',
      emoji: et ? ((tabs.find(t=>t.id===et)||{}).label||'🎉').split(' ')[0] : '🎉',
      tagline: et ? ((tabs.find(t=>t.id===et)||{}).feel || '') : 'Every gathering that brings your people to one table',
      img:'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/Events.jpg',
      // ⚖️ §24 · A TOP BACK MUST NAME WHERE IT GOES. Inside a tab, the room front door is
      // the Events tile grid — not Home. Same shape as World Kitchen (Boerekos → WK).
      backJs: et ? "set({eventTab:null,eventActiveRecipe:null,buffetStep:1,activeCake:null,cakeCat:null,beverageCat:null,fingerView:'browse',kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null});window.scrollTo(0,0)"
                 : "set({screen:'home'})",
      backLabel: et ? '← Events' : '← Home',
      search:{ value:(S.eventsSearch||'').replace(/"/g,'&quot;'), placeholder:'Search Events…', oninput:"liveSearch(this,'eventsSearchResults',{sections:['events','beverages'],stateKey:'eventsSearch'})", clearJs:"set({eventsSearch:'',searchResults:[]})" }
    })}

    <div id="eventsSearchResults" style="max-width:600px;margin:0 auto;padding:0 16px;"></div>
    <!-- HOW IT WORKS + GUEST STEPPER (shared) -->
    <div style="padding:12px 16px;">
      ${guestBar({
        state:'eventGuests', min:6, max:350,
        decJs:"setQuiet({eventGuests:eventGuestStep(S.eventGuests,-1)})",
        incJs:"setQuiet({eventGuests:eventGuestStep(S.eventGuests,1)})",
        howItWorks:[
          '<strong style="color:var(--gold);">1. Pick your tab</strong> — Buffet, Finger Foods, Celebration Cakes, Kiddies Parties or Beverages.',
          '<strong style="color:var(--gold);">2. Set your guest count</strong> — use the ± slider here.',
          '<strong style="color:var(--gold);">3. Select dishes</strong> — portions auto-scale as you add more.',
          '<strong style="color:var(--gold);">4. Generate shopping list</strong> — sorted by supermarket aisle.',
          '<span style="color:var(--accent);">Pro tip: the more dishes you add, the smaller each portion — your total plate stays constant.</span>'
        ]
      })}

      <!-- Tab grid = the Events FRONT DOOR. ⚖️ §24 — it renders ONLY when no tab is open.
           It used to render on every screen and eventsScrollToContent() just scrolled past
           it, so scrolling back up to reach the Back button walked her through all four
           tabs she had not chosen. A front door is a place you go to, not a thing you
           carry with you. The guest bar above STAYS — it is the ONE Events guest count (§2.2). -->
      ${et ? '' : `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;">
        ${tabs.map(t=>{
          const isActive = et===t.id;
          const onClick = t.id==='kiddies'
            ? `set({eventTab:'kiddies',eventShowShopList:false,kidsScreen:'themes',kidsTheme:null,kidsCategory:null,kidsRecipe:null});window.scrollTo(0,0)`
            : `set({eventTab:'${t.id}',eventShowShopList:false});window.scrollTo(0,0)`;
          return `<div onclick="${onClick}"
            style="background:${isActive?'var(--card2)':'var(--bg)'};border:1px solid ${isActive?'var(--accent)':'var(--line)'};border-radius:14px;padding:14px 8px;cursor:pointer;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:96px;"
            onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='${isActive?'var(--accent)':'var(--line)'}'">
            <div style="font-size:24px;margin-bottom:4px;">${t.label.split(' ')[0]}</div>
            <div style="font-size:16px;color:${isActive?'var(--gold)':'var(--ink-soft)'};font-family:Georgia,serif;font-weight:${isActive?'bold':'normal'};">${t.label.replace(/^\S+\s*/,'')}</div>
            <div style="font-size:13px;color:var(--ink-soft);font-style:italic;line-height:1.3;margin-top:4px;">${t.feel}</div>
          </div>`;
        }).join('')}
      </div>`}
    </div>

    <div class="content">

    ${et==='beverages'?`
      ${(()=>{
        const bevCat = S.beverageCat || null;
        if(bevCat==='barplanner') return barPlannerHTML();
        if(bevCat==='myplan'){
          const selBevs = (S.eventSelectedBeverages||[]);
          const selRecipes = EVENTS_BEVERAGE_RECIPES.filter(b=>selBevs.includes(b.id));
          const bevG = S.beverageGuests||50;
          const bevWaMsg = encodeURIComponent(
            `🥂 Tinza Drinks Plan — ${bevG} guests\n\n`
            + drinkShopItems(selRecipes, bevG).map(function(it){ return `• ${it.name}: ${it.qtyStr}`; }).join('\n')
          );
          return `
            <button onclick="set({beverageCat:null})" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;margin-bottom:14px;padding:0;">← All Categories</button>
            <div style="font-size:16px;color:var(--ink-soft);margin-bottom:4px;">🥂 My Drinks Plan</div>
            <div style="font-size:13px;color:var(--accent);margin-bottom:14px;">${selRecipes.length} drink${selRecipes.length!==1?'s':''} · ${bevG} guests</div>
            ${selRecipes.map(bev=>{
              const servesMatch = (bev.serves||'').toString().match(/\d+/);
              const baseServes = servesMatch ? parseInt(servesMatch[0]) : 0;
              const batches = baseServes>0 ? Math.ceil(bevG / baseServes) : 1;
              return `<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:12px;margin-bottom:8px;">
                <div style="font-size:15px;color:var(--ink-soft);">${bev.emoji} ${bev.name}</div>
                <div style="font-size:13px;color:var(--accent);margin-top:3px;">Serves ${bev.serves} · <strong style="color:var(--gold);">${batches}×</strong> batch${batches!==1?'es':''} needed for ${bevG} guests</div>
              </div>`;
            }).join('')}
            ${selRecipes.length===0
              ? '<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:12px;margin-bottom:16px;color:var(--accent);font-size:13px;">Select drinks and set guest count to generate list</div>'
              : shoppingView({
                  items: drinkShopItems(selRecipes, bevG),
                  totals: { cookTotal:null, buyTotal:null },
                  checked: S.checkedBeverageItems||{},
                  toggleFn: 'beverageToggleShop',
                  shareJs: `window.open('https://wa.me/?text=${bevWaMsg}','_blank')`,
                  noCost: true
                })}
            <button onclick="set({beverageCat:null})" style="width:100%;padding:12px;background:var(--card2);border:1px solid var(--line2);border-radius:10px;color:var(--accent);font-size:14px;cursor:pointer;">← Back</button>
          `;
        }

        if(bevCat) {
          const catObj = BEVERAGE_CATEGORIES.find(c=>c.id===bevCat);
          const catRecipes = EVENTS_BEVERAGE_RECIPES.filter(b=>b.category===bevCat);
          return `
            <button onclick="set({beverageCat:null})" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;margin-bottom:14px;padding:0;">← All Categories</button>
            <div style="font-size:16px;color:var(--ink-soft);margin-bottom:4px;">${catObj?.label}</div>
            <p style="font-size:13px;color:var(--accent);margin-bottom:14px;">${catObj?.desc}</p>
            ${catRecipes.map(bev=>{
              const isSel = (S.eventSelectedBeverages||[]).includes(bev.id);
              return warmCard({
                name: bev.name,
                photoName: bev.photoName || bev.name,
                emoji: bev.emoji || '🍹',
                meta: 'Serves ' + bev.serves + ' · 🥂 ' + bev.glassware,
                openJs: `openRecipe('beverages','${bev.id}')`,
                toggleJs: isPro ? `setQuiet({eventSelectedBeverages:toggle(S.eventSelectedBeverages||[],'${bev.id}')})` : '',
                sel: isSel,
                grad: EVENTS_GRAD
              });
            }).join('')}
          `;
        }

        return `
          <p style="font-size:13px;color:var(--accent);font-style:italic;margin-bottom:14px;">Bulk Drinks, Cocktails & Bar 🍹🍸🥂🥤</p>
          <div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:13px;color:var(--ink-soft);">
            🥂 <strong style="color:var(--ink-soft);">Rough quantities:</strong> ~1.5 drinks pp in the first hour, ~1/hour after · 750ml bottle ≈ 5 wine glasses or 15 tots
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
            ${BEVERAGE_CATEGORIES.map((cat,idx)=>{
              const count = EVENTS_BEVERAGE_RECIPES.filter(r=>r.category===cat.id).length;
              const isBig = idx < 2;
              return `<div onclick="set({beverageCat:'${cat.id}'})" style="background:${isBig?'var(--card2)':'var(--card2)'};border:${isBig?'2px':'1px'} solid ${isBig?'var(--accent)':'var(--line2)'};border-radius:14px;padding:${isBig?'18px':'14px'};cursor:pointer;text-align:center;">
                <div style="font-size:${isBig?'30px':'22px'};margin-bottom:6px;">${cat.label.split(' ')[0]}</div>
                <div style="font-size:${isBig?'14px':'12px'};color:${isBig?'var(--gold)':'var(--ink-soft)'};font-weight:bold;">${cat.label.substring(cat.label.indexOf(' ')+1)}</div>
                <div style="font-size:13px;color:var(--accent);margin-top:4px;">${cat.desc}</div>
                <div style="font-size:13px;color:var(--ink-soft);margin-top:6px;border-top:1px solid var(--card2);padding-top:6px;">${count} recipe${count!==1?'s':''}</div>
              </div>`;
            }).join('')}
            <div onclick="set({beverageCat:'barplanner'})" style="background:var(--card2);border:1px solid var(--line2);border-radius:14px;padding:14px;cursor:pointer;text-align:center;">
              <div style="font-size:22px;margin-bottom:6px;">🍸</div>
              <div style="font-size:12px;color:var(--ink-soft);font-weight:bold;">Bar Planner</div>
              <div style="font-size:13px;color:var(--accent);margin-top:4px;">How much to buy for the whole event</div>
              <div style="font-size:13px;color:var(--ink-soft);margin-top:6px;border-top:1px solid var(--card2);padding-top:6px;">Pro 👑</div>
            </div>
          </div>
          ${isPro&&(S.eventSelectedBeverages||[]).length>0?`
            <button onclick="set({beverageCat:'myplan'})" style="width:100%;padding:14px;background:var(--card2);border:2px solid var(--accent);border-radius:12px;color:var(--gold);font-size:14px;cursor:pointer;margin-top:4px;">
              🥂 My Drinks Plan — ${(S.eventSelectedBeverages||[]).length} drink${(S.eventSelectedBeverages||[]).length!==1?'s':''} selected
            </button>
          `:''}
        `;
      })()}
    `:''}

    ${et==='fingerfoods'?`
      ${S.fingerView==='myplan' ? fingerMyPlanHTML() : `
      ${guestBar({
        state:'eventGuests', min:6, max:350,
        decJs:"setQuiet({eventGuests:eventGuestStep(S.eventGuests,-1)})",
        incJs:"setQuiet({eventGuests:eventGuestStep(S.eventGuests,1)})"
      })}
      ${(()=>{
        const ETYPES=[
          {id:'standalone',label:'🥪 Snacks only',sub:'12–15 pcs pp'},
          {id:'premeal',   label:'🍽️ Before a meal',sub:'5–6 pcs pp'},
          {id:'braai',     label:'🔥 At a braai',sub:'4–5 pcs pp'},
        ];
        const cur=ETYPES.find(t=>t.id===(S.eventFingerEventType||'standalone'))||ETYPES[0];
        return `<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;margin-bottom:10px;overflow:hidden;">
          <div onclick="setQuiet({fingerEventTypeOpen:S.fingerEventTypeOpen===false})" style="padding:10px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;min-height:44px;">
            <strong style="color:var(--accent);font-size:13px;">📏 Event type — <span style="color:var(--ink);font-weight:normal;">${cur.label}</span></strong>
            <span style="color:var(--accent);font-size:14px;">${S.fingerEventTypeOpen===false?'▼':'▲'}</span>
          </div>
          ${S.fingerEventTypeOpen!==false?`<div style="padding:0 12px 12px;border-top:1px solid var(--card2);">
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;">
              ${ETYPES.map(t=>{const on=(S.eventFingerEventType||'standalone')===t.id;return `<button onclick="setQuiet({eventFingerEventType:'${t.id}'})" style="flex:1;min-width:90px;padding:8px 6px;border-radius:8px;border:1px solid ${on?'var(--accent)':'var(--line2)'};background:${on?'var(--card2)':'transparent'};cursor:pointer;text-align:center;">
                <div style="font-size:13px;color:${on?'var(--gold)':'var(--ink-soft)'};">${t.label}</div>
                <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">${t.sub}</div>
              </button>`;}).join()}
            </div>
          </div>`:''}
        </div>`;
      })()}
      ${fingerMyPlanBtn()}
      <div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;margin-bottom:14px;overflow:hidden;">
        <div onclick="setQuiet({fingerHelpOpen:!S.fingerHelpOpen})" style="padding:10px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;min-height:44px;">
          <strong style="color:var(--accent);font-size:13px;">🥪 How finger foods work</strong>
          <span style="color:var(--accent);font-size:14px;">${S.fingerHelpOpen?'▲':'▼'}</span>
        </div>
        ${S.fingerHelpOpen?`<div style="padding:0 14px 12px;font-size:13px;color:var(--ink-mut);line-height:1.7;border-top:1px solid var(--card2);">
          Tap any snack or platter to add it. The calculator splits your target portion evenly across all selections and generates a shopping list.<br><br>
          <span style="color:var(--ink-mut);">💡 <strong>Savoury Platters</strong> work standalone — or combine with other snacks for a full spread. Everything integrates automatically.</span>
        </div>`:''}
      </div>
      ${(()=>{
        const fs = S.fingerSection||'meaty';
        const allSecs = [
          {id:'meaty',  emoji:'🥩', label:'Meaty',   fullLabel:'Meaty Snacks',     items:EVENTS_FINGER_FOODS.meaty||[],  kind:'finger'},
          {id:'pastry', emoji:'🥐', label:'Pastry',  fullLabel:'Pastry',           items:EVENTS_FINGER_FOODS.pastry||[], kind:'finger'},
          {id:'sweet',  emoji:'🍫', label:'Sweet',   fullLabel:'Sweet Bites',      items:EVENTS_FINGER_FOODS.sweet||[],  kind:'finger'},
          {id:'savoury',emoji:'🍽️', label:'Savoury', fullLabel:'Savoury Bites', items:EVENTS_FINGER_FOODS.savoury||[], kind:'finger'},
          {id:'sauces', emoji:'🫙', label:'Sauces',  fullLabel:'Sauces & Dips',    items:EVENTS_SAUCES||[],              kind:'sauce'},
        ];
        const hasAnySelected = (S.eventSelectedFingers||[]).length>0;

        function miniNav(){
  const isPro = tierAllows('pro');
          return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin:8px 0 12px;">
            ${allSecs.map(s=>{
              const isActive = fs===s.id;
              const sc = (S.eventSelectedFingers||[]).filter(id=>s.items.find(x=>x.id===id)).length;
              return `<button onclick="setQuiet({fingerSection:'${s.id}',savouryExpanded:null,fingerView:'browse'})"
                style="padding:8px 2px;border-radius:8px;min-height:48px;border:1px solid ${isActive?'var(--accent)':sc>0?'var(--line2)':'var(--line)'};background:${isActive?'var(--card2)':sc>0?'var(--card2)':'transparent'};cursor:pointer;text-align:center;position:relative;">
                <div style="font-size:15px;">${s.emoji}</div>
                <div style="font-size:13px;color:${isActive?'var(--gold)':sc>0?'var(--ink-soft)':'var(--ink-soft)'};margin-top:2px;">${s.label}</div>
                ${sc>0?`<div style="position:absolute;top:3px;right:3px;background:var(--accent);color:white;border-radius:5px;font-size:13px;padding:1px 3px;">${sc}</div>`:''}
              </button>`;
            }).join('')}
            <button onclick="set({fingerView:'myplan'})"
              style="padding:8px 2px;border-radius:8px;min-height:48px;border:1px solid ${hasAnySelected?'var(--gold)':'var(--line)'};background:${hasAnySelected?'var(--card2)':'transparent'};cursor:pointer;text-align:center;">
              <div style="font-size:15px;">📋</div>
              <div style="font-size:13px;color:${hasAnySelected?'var(--gold)':'var(--ink-soft)'};margin-top:2px;">My Plan</div>
            </button>
          </div>`;
        }

        const active = allSecs.find(s=>s.id===fs)||allSecs[0];
        const activeSelCount = (S.eventSelectedFingers||[]).filter(id=>active.items.find(x=>x.id===id)).length;

        let body='';
        if(active.kind==='sauce') body=(EVENTS_SAUCES||[]).map(r=>eventCard(r,'sauce',isPro?'eventSelectedFingers':null)).join('');
        else body=(active.items||[]).map(r=>eventCard(r,'finger',isPro?'eventSelectedFingers':null)).join('');

        return `
          ${miniNav()}
          <div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;overflow:hidden;margin-bottom:8px;">
            <div style="padding:10px 14px;border-bottom:1px solid var(--card2);display:flex;align-items:center;justify-content:space-between;">
              <span style="font-size:15px;color:var(--gold);font-weight:bold;">${active.emoji} ${active.fullLabel}</span>
              ${activeSelCount>0?`<span style="background:var(--card2);border:1px solid var(--accent);border-radius:10px;font-size:13px;color:var(--gold);padding:2px 8px;">${activeSelCount} selected</span>`:''}
            </div>
            <div style="padding:10px;">${body}</div>
          </div>
          ${miniNav()}
          ${fingerMyPlanBtn()}
        `;
      })()}
      `}
    `:''}

    ${et==='weddingcake'?`
      ${(()=>{
        const cakeCat = S.cakeCat || null;
        if(cakeCat==='myplan'){
          const selCakes = (S.eventSelectedCakes||[]);
          const selRecipes = CELEBRATION_CAKE_RECIPES.filter(c=>selCakes.includes(c.id));
          const cakeG = S.cakeGuests||50;
          const cakeWaMsg = encodeURIComponent(
            `🎂 Tinza Cake Plan — ${cakeG} guests\n\n`
            + cakeShopItems(selRecipes, cakeG).map(function(it){ return `• ${it.name}: ${it.qtyStr}`; }).join('\n')
          );
          return `
            <button onclick="set({cakeCat:null})" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;margin-bottom:14px;padding:0;">← All Categories</button>
            <div style="font-size:16px;color:var(--ink-soft);margin-bottom:4px;">🎂 My Cake Plan</div>
            <div style="font-size:13px;color:var(--accent);margin-bottom:14px;">${selRecipes.length} cake${selRecipes.length!==1?'s':''} · ${cakeG} guests</div>
            ${selRecipes.map(cake=>{
              const servesMatch = (cake.serves||'100').toString().match(/\d+/);
              const baseServes = servesMatch ? parseInt(servesMatch[0]) : 100;
              const batches = Math.ceil(cakeG / baseServes);
              return `<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:12px;margin-bottom:8px;">
                <div style="font-size:15px;color:var(--ink-soft);">${cake.emoji} ${cake.name}</div>
                <div style="font-size:13px;color:var(--accent);margin-top:3px;">Serves ${cake.serves} · <strong style="color:var(--gold);">${batches}×</strong> batch${batches!==1?'es':''} needed for ${cakeG} guests</div>
              </div>`;
            }).join('')}
            ${selRecipes.length===0
              ? '<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:12px;margin-bottom:16px;color:var(--accent);font-size:13px;">Select cakes and set guest count to generate list</div>'
              : shoppingView({
                  items: cakeShopItems(selRecipes, cakeG),
                  totals: { cookTotal:null, buyTotal:null },
                  checked: S.checkedCakeItems||{},
                  toggleFn: 'cakeToggleShop',
                  shareJs: `window.open('https://wa.me/?text=${cakeWaMsg}','_blank')`,
                  noCost: true
                })}
            <button onclick="set({cakeCat:null})" style="width:100%;padding:12px;background:var(--card2);border:1px solid var(--line2);border-radius:10px;color:var(--accent);font-size:14px;cursor:pointer;">← Back</button>
          `;
        }

        if(cakeCat) {
          const catObj = CAKE_CATEGORIES.find(c=>c.id===cakeCat);
          const catRecipes = CELEBRATION_CAKE_RECIPES.filter(c=>c.category===cakeCat);
          return `
            <button onclick="set({cakeCat:null})" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;margin-bottom:14px;padding:0;">← All Categories</button>
            <div style="font-size:16px;color:var(--ink-soft);margin-bottom:4px;">${catObj?.label}</div>
            <p style="font-size:13px;color:var(--accent);margin-bottom:14px;">${catObj?.desc}</p>
            ${catRecipes.map(cake=>{
              const isSel = (S.eventSelectedCakes||[]).includes(cake.id);
              return warmCard({
                name: cake.name,
                photoName: cake.photoName || cake.name,
                emoji: cake.emoji || '🎂',
                meta: 'Serves ' + cake.serves + ' · 🍦 ' + cake.icingType,
                openJs: `openRecipe('cakes','${cake.id}')`,
                toggleJs: isPro ? `setQuiet({eventSelectedCakes:toggle(S.eventSelectedCakes||[],'${cake.id}')})` : '',
                sel: isSel,
                grad: EVENTS_GRAD
              });
            }).join('')}
          `;
        }

        return `
          <p style="font-size:13px;color:var(--accent);font-style:italic;margin-bottom:14px;">Celebration & Event Cakes 💍🎂🍼🍰</p>
          <div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:13px;color:var(--ink-soft);">
            🎂 <strong style="color:var(--ink-soft);">Portion guide:</strong> Standard slice = 100–120g · 25cm round = ~30 portions · 30cm round = ~50 portions
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
            ${CAKE_CATEGORIES.map((cat,idx)=>{
              const count = CELEBRATION_CAKE_RECIPES.filter(r=>r.category===cat.id).length;
              const isBig = idx < 2;
              return `<div onclick="set({cakeCat:'${cat.id}'})" style="background:${isBig?'var(--card2)':'var(--card2)'};border:${isBig?'2px':'1px'} solid ${isBig?'var(--accent)':'var(--line2)'};border-radius:14px;padding:${isBig?'18px':'14px'};cursor:pointer;text-align:center;">
                <div style="font-size:${isBig?'30px':'22px'};margin-bottom:6px;">${cat.label.split(' ')[0]}</div>
                <div style="font-size:${isBig?'14px':'12px'};color:${isBig?'var(--gold)':'var(--ink-soft)'};font-weight:bold;">${cat.label.substring(cat.label.indexOf(' ')+1)}</div>
                <div style="font-size:13px;color:var(--accent);margin-top:4px;">${cat.desc}</div>
                <div style="font-size:13px;color:var(--ink-soft);margin-top:6px;border-top:1px solid var(--card2);padding-top:6px;">${count} recipe${count!==1?'s':''}</div>
              </div>`;
            }).join('')}
          </div>
          ${isPro&&(S.eventSelectedCakes||[]).length>0?`
            <button onclick="set({cakeCat:'myplan'})" style="width:100%;padding:14px;background:var(--card2);border:2px solid var(--accent);border-radius:12px;color:var(--gold);font-size:14px;cursor:pointer;margin-top:4px;">
              📋 My Cake Plan — ${(S.eventSelectedCakes||[]).length} cake${(S.eventSelectedCakes||[]).length!==1?'s':''} selected
            </button>
          `:''}
        `;
      })()}
    `:''}

    </div>
  </div>`;
}



// ══════════════════════════════════════════════════════════════
// TIMER SYSTEM
// ══════════════════════════════════════════════════════════════
let _timerInterval = null;
let _timerRemaining = 0;


/* ═══════════════════════════════════════════════════════════════════
   EVENTS → universal opener (Standard §4b). Migrated 13 Jun 2026.
   Source resolves an id across every EVENTS_* array and tags it with the
   plan key for its category; builder folds the caterer's quantity logic
   (trays / tubs / shanks / ml / pcs / kg, bone-in) into the shared green
   qtyBox, scales base300 through the shared ingredient row, and wires a
   real Add-to-Plan toggle. No cook mode (Events never had one).
   The old eventsRecipeView (buffet.js) + the if(aer) dispatch have been
   removed — recipe detail now flows through openRecipe('events').
   ═══════════════════════════════════════════════════════════════════ */
function eventsAllGroups(){
  var F = (typeof EVENTS_FINGER_FOODS!=='undefined') ? EVENTS_FINGER_FOODS : {};
  var g = function(a){ return (typeof a!=='undefined' && a) ? a : []; };
  return [
    { a:g(typeof EVENTS_BIG_COOKING_MAINS!=='undefined'?EVENTS_BIG_COOKING_MAINS:null),  k:'eventSelectedMains' },
    { a:g(typeof EVENTS_BIG_COOKING_SIDES!=='undefined'?EVENTS_BIG_COOKING_SIDES:null),  k:'eventSelectedSides' },
    { a:g(typeof EVENTS_BIG_COOKING_SALADS!=='undefined'?EVENTS_BIG_COOKING_SALADS:null),k:'eventSelectedSalads' },
    { a:g(typeof EVENTS_STARTERS!=='undefined'?EVENTS_STARTERS:null),                    k:'eventSelectedStarters' },
    { a:g(typeof EVENTS_DESSERTS!=='undefined'?EVENTS_DESSERTS:null),                    k:'eventSelectedDesserts' },
    { a:g(typeof EVENTS_SAUCES!=='undefined'?EVENTS_SAUCES:null),                        k:'eventSelectedFingers' },
    { a:F.meaty||[],   k:'eventSelectedFingers' },
    { a:F.pastry||[],  k:'eventSelectedFingers' },
    { a:F.sweet||[],   k:'eventSelectedFingers' },
    { a:F.veggie||[],  k:'eventSelectedFingers' },
    { a:F.savoury||[], k:'eventSelectedFingers' }
  ];
}
function eventsResolve(id){
  var groups = eventsAllGroups();
  for(var gi=0; gi<groups.length; gi++){
    var found = groups[gi].a.find(function(x){ return x && x.id===id; });
    if(found){ var copy = Object.assign({}, found); copy._planKey = groups[gi].k; return copy; }
  }
  return null;
}

function eventsRecipeOpts(r, guests){
  if(!r) return { name:'Recipe not found', backJs:'closeRecipe()', backLabel:'\u2190 Back',
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" } };
  guests = guests || 20;
  var emoji   = r.emoji || '\uD83C\uDF7D\uFE0F';
  var planKey = r._planKey || 'eventSelectedFingers';

  function fmtAmt(n, unit){
    var v = Math.round(n*10)/10;
    if((unit==='g'||unit==='ml') && v>=1000) return (Math.round(v/100)/10) + (unit==='g'?'kg':'L');
    return v + (unit||'');
  }
  function parseFrac(s){
    var f={'\u00BC':0.25,'\u00BD':0.5,'\u2153':0.333,'\u2154':0.667,'\u00BE':0.75,'\u215B':0.125};
    if(f[s]!=null) return f[s];
    if(String(s).indexOf('/')>-1){ var p=String(s).split('/'); return parseFloat(p[0])/parseFloat(p[1]); }
    return parseFloat(s)||null;
  }
  // "X<unit> per person" scalers → {pp,total,rest} (ported from eventsRecipeView)
  function scaleA(a){
    if(!a) return null; var m;
    if((m=a.match(/^(\d+(?:\.\d+)?)\s*(g|ml|kg|L)\s+per\s+p(?:erson|ortion)/i))){
      var t=parseFloat(m[1])*guests; var rest=a.slice(m[0].length).replace(/^\s*[,(]?/,'').trim();
      return {pp:m[1]+m[2]+' pp', total:fmtAmt(t,m[2]), rest:rest}; }
    if((m=a.match(/^(\d+(?:\.\d+)?)\s+(slices?|pieces?|portions?|scoops?|cups?)\s+per\s+p(?:erson|ortion)/i))){
      var t2=Math.round(parseFloat(m[1])*guests); return {pp:m[1]+' '+m[2]+' pp', total:t2+' '+m[2]+' total', rest:a.slice(m[0].length).trim()}; }
    if((m=a.match(/^(\d+(?:\.\d+)?)\s+(tbsp|tsp)\s+per\s+p(?:erson|ortion)/i))){
      var ml=m[2].toLowerCase()==='tbsp'?15:5; var t3=Math.round(parseFloat(m[1])*ml*guests);
      return {pp:m[1]+' '+m[2]+' pp', total:fmtAmt(t3,'ml'), rest:a.slice(m[0].length).trim()}; }
    if((m=a.match(/^(\d+(?:\.\d+)?)\s+per\s+p(?:erson|ortion)/i))){
      var t4=Math.round(parseFloat(m[1])*guests); return {pp:m[1]+' pp', total:t4+' total', rest:a.slice(m[0].length).trim()}; }
    if((m=a.match(/^([\u00BC\u00BD\u2153\u2154\u00BE\u215B]|\d+\/\d+)\s*per\s+p(?:erson|ortion)/i))){
      var fr=parseFrac(m[1]); var t5=fr?Math.ceil(fr*guests):null;
      return t5!=null?{pp:m[1]+' pp', total:t5+' total', rest:a.slice(m[0].length).trim()}:null; }
    return null;
  }

  // ── QUANTITY folded into the shared green qtyBox (total + ppLine + info) ──
  var qTotal='', qPP='', qInfo='';
  var pp = r.perPerson;
  if(pp){
    var u = String(pp.unit||'g'), meat = pp.meat;
    if(u==='ml'||u==='L'){ qTotal=(meat*guests/1000).toFixed(1)+'L'; qPP=meat+'ml per person'; }
    else if(u.indexOf('ice cream')>-1){ qTotal=(meat*guests/1000)+'kg'; qPP=meat+'g per person';
      qInfo='\uD83C\uDF68 Buy '+Math.ceil(guests/10)+' \u00D7 2L tubs OR '+Math.ceil(guests/25)+' \u00D7 5L bulk tubs'; }
    else if(u==='shank'){ qTotal=guests+' shanks'; qPP='1 shank per person'; }
    else if(u.indexOf('tray')>-1){ var trays=Math.ceil(guests/20); qTotal=trays+' tray'+(trays>1?'s':'')+' ('+guests+' portions)';
      qPP='1 tray = 20 portions'; qInfo='Scale each ingredient \u00D7 '+trays; }
    else if(u==='pcs'||u==='pieces'){ qTotal=Math.round(meat*guests)+' pieces'; qPP=meat+' per person'; }
    else { qTotal=(meat*guests/1000).toFixed(1)+'kg'; qPP=meat+'g per person';
      if(r.boneIn) qInfo='\uD83E\uDDB4 Bone-in \u2014 order '+(meat*guests*1.35/1000).toFixed(1)+'kg raw'; }
  } else if(r.ppG){
    var tg=r.ppG*guests; qTotal=(tg>=1000?(Math.round(tg/100)/10)+(r.ppG<5?'L':'g'):tg+'g'); qPP=r.ppG+'g per person';
  } else { qPP='scaled below'; }
  if(isFingerPieceItem(r)){
    var _ft = fingerTier();
    var _perPiece = fingerPerPieceCost(r);
    // Recipe page = spread GUIDE, not a per-snack count. The exact "how many of
    // THIS" lives in My Plan (tier total / snacks chosen). No contradiction.
    qTotal = _ft.min+'\u2013'+_ft.max+' pieces pp';
    qPP = 'across your whole spread \u00b7 '+_ft.label;
    var _ppTxt = (_perPiece>0)
      ? costLine({ html:'\uD83D\uDCB0 <b style="color:var(--green);">\u2248R'+(Math.round(_perPiece*100)/100)+'</b> per piece. ', label:'\uD83D\uDCB0 Per-piece cost' })
      : '';
    var _fNote = _ppTxt+'How many of <b>this</b> to make depends on the snacks you pick \u2014 add it to <b>My Plan</b> for your amount + spread cost.'
      +'<div style="font-size:12px;color:var(--green);margin-top:5px;line-height:1.45;">Costing only \u2014 not the grocery-store price.</div>';
    qInfo = qInfo ? (qInfo+'<div style="margin-top:6px;">'+_fNote+'</div>') : _fNote;
  } else if(r.costPP){
    var ctot=Math.round(r.costPP*guests);
    var _clStr = costLine({ pp:r.costPP, total:ctot.toLocaleString(), note:'This food cost is for costing only \u2014 it\u2019s not the same as the cost at the grocery store.' });
    qInfo = qInfo ? (qInfo+'<div style="margin-top:6px;">'+_clStr+'</div>') : _clStr;
  }
  var qtyHTML = qtyBox({
    label:'How Much To Make', sub: guests+' guests', total:qTotal, ppLine:qPP, n:guests, info:qInfo,
    decJs:"set({eventGuests:eventGuestStep(S.eventGuests,-1)})",
    incJs:"set({eventGuests:eventGuestStep(S.eventGuests,1)})"
  });

  // ── INGREDIENTS (shared ingredientsBox/ingredientRow) ──
  var ingRows='';
  if(r.base300 && r.base300.length){
    var hasPP = r.base300.some(function(i){ return i && i.pp!=null; });
    var isSauceDip = hasPP && !r.makes;
    ingRows = r.base300.map(function(i){
      if(!i || !i.n) return '';
      if(hasPP && i.pp!=null){
        var unit=i.u||''; var word=isSauceDip?'pp':'per piece';
        return ingredientRow(i.n, '<span style="color:var(--ink-soft);font-size:13px;font-weight:normal;">'+i.pp+unit+' '+word+' \u00B7 </span>'+fmtAmt(i.pp*guests,unit)+' total', '');
      }
      if(!i.a) return ingredientRow(i.n, '', '');
      var sc=scaleA(i.a);
      if(sc) return ingredientRow(i.n, '<span style="color:var(--ink-soft);font-size:13px;font-weight:normal;">'+sc.pp+' \u00B7 </span>'+sc.total, sc.rest||'');
      return ingredientRow(i.n, '<span style="color:var(--ink-soft);font-size:13px;font-style:italic;font-weight:normal;">'+i.a+'</span>', '');
    }).join('');
  } else if(r.pantry && r.pantry.length){
    ingRows = r.pantry.map(function(p){ return ingredientRow(p, '', ''); }).join('');
  }
  var ingredientsHTML = ingRows ? ingredientsBox(ingRows, guests) : '';

  // ── METHOD (shared methodBox/methodStep + cook mode + per-step timers) ──
  var methodHTML='';
  if(r.method && r.method.length){
    var stepsHTML = r.method.map(function(s,i){ return methodStep(i, s, eventsStepTimer(s)); }).join('');
    methodHTML = methodBox(stepsHTML, "set({eventsCooking:{id:'"+r.id+"',step:0}});window.scrollTo(0,0);");
  }

  // ── EXTRAS: compact cost box + tip + ml/person line + chef-notes (mirror World Kitchen) ──
  var evGreen = 'var(--accent)';
  var isEvPro = tierAllows('pro');   // §7 level gate (Deluxe==Pro), never USER_TIER==='pro'
  var extras='';
  // compact cost box (Pro-gated) — finger foods use tier-scaled per-piece cost
  var boxCostPP = isFingerPieceItem(r) ? 0 : r.costPP;
  if(boxCostPP){
    var evTot = Math.round(boxCostPP*guests);
    extras += !isEvPro
      ? '<div style="background:var(--card2);border:1px dashed var(--line2);border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">'
        + '<div style="font-size:22px;color:var(--ink-soft);letter-spacing:6px;margin-bottom:6px;">R \u2022 \u2022 \u2022 \u2022</div>'
        + '<div style="font-size:13px;color:var(--ink-soft);">\uD83D\uDCB0 Cost estimate \u2014 <strong style="color:'+evGreen+';">Tinza Pro R90/month</strong></div></div>'
      : '<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:14px;margin-bottom:12px;">'
        + '<div style="display:flex;justify-content:space-between;align-items:center;">'
        +   '<div style="font-size:13px;color:var(--ink-soft);">\uD83D\uDCB0 Estimated cost \u00B7 '+guests+' guests</div>'
        +   '<div style="font-size:24px;color:'+evGreen+';font-weight:bold;">~R'+evTot.toLocaleString()+'</div></div>'
        + '<div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid var(--line);"><span style="font-size:13px;color:var(--ink-soft);">Per person</span><span style="font-size:14px;color:var(--gold);font-weight:bold;">~R'+boxCostPP+'</span></div>'
        + '<div style="font-size:13px;color:var(--ink-soft);margin-top:6px;">estimated food cost</div></div>';
  }
  if(r.tip) extras += '<div style="background:var(--card2);border:1px solid var(--line2);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:14px;color:var(--ink-soft);"><span style="color:var(--accent);">\uD83D\uDCA1 TIP: </span>'+r.tip+'</div>';
  if(r.mlPerPerson) extras += '<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:14px;color:var(--ink-soft);">\uD83E\uDD44 '+r.mlPerPerson+'ml per person \u00B7 '+(r.mlPerPerson*guests/1000).toFixed(1)+'L for '+guests+' guests</div>';
  // chef-notes box — guarded, renders only when data exists (future-proof parity)
  function evInfoRow(label, val){ return val ? '<div style="margin-bottom:8px;"><span style="color:'+evGreen+';font-size:13px;">'+label+': </span><span style="font-size:15px;color:var(--ink2);">'+val+'</span></div>' : ''; }
  var evExtraInner = evInfoRow('\uD83D\uDC69\u200D\uD83C\uDF73 Chef notes', r.chefNotes)+evInfoRow('\uD83C\uDF77 Pairs with', r.pairsWith)+evInfoRow('\uD83D\uDCCA Nutrition', r.nutrition)+evInfoRow('\uD83E\uDDCA Storage', r.storage)+evInfoRow('\uD83D\uDCA1 Did you know', r.trivia);
  if(evExtraInner) extras += recipeBox('', evExtraInner);

  // ── ACTIONS: real plan toggle for this dish's category ──
  var inPlan = ((S[planKey]||[]).indexOf(r.id) >= 0);
  var addJs  = "set({"+planKey+":toggle(S."+planKey+"||[],'"+r.id+"')})";
  var planCount = (S[planKey]||[]).length;

  return {
    photoName:r.photoName||r.name, photoEmoji:emoji,
    portionHowText: isFingerPieceItem(r) ? 'Finger foods are counted in pieces per person, set by the event type above \u2014 about 4\u20135 each at a braai, 5\u20136 before a meal, and 12\u201315 for a snacks-only spread. That total is shared across the snacks you pick, so each one scales down to keep the spread sensible. Set your exact amounts in My Plan.' : '',
    backJs:"closeRecipe()", backLabel:'\u2190 Back',
    name:r.name, sub:(r.region||''),
    meta:{ time: r.time?(r.time+' min'):'', kcal:r.kcal },
    qtyHTML:qtyHTML, equipHTML:equipmentContract(r, guests, null, 1) + equipmentLine(r, guests), ingredientsHTML:ingredientsHTML, methodHTML:methodHTML, extrasHTML:extras,
    actions:{ addJs:addJs, inPlan:inPlan },
    nav:{ backJs:"closeRecipe()", planJs:"closeRecipe()", planCount:planCount, homeJs:"closeRecipe({screen:'home'})" }
  };
}

/* per-step timer label for the recipe page (static pill via methodStep) —
   braai-style clock + fmtTimerLabel inside World-style methodStep structure */
function eventsStepTimer(step){
  if(typeof parseStepTime!=='function') return '';
  var secs = parseStepTime(step);
  if(!secs) return '';
  return '\u23F1\uFE0F ' + ((typeof fmtTimerLabel==='function') ? fmtTimerLabel(secs) : (Math.round(secs/60)+' min'));
}

/* Events step-by-step cooking mode — mirrors braaiCookingView (Standard §4b cook mode).
   State: S.eventsCooking = {id, step}. Re-resolves via eventsResolve so no quote-laden
   data is embedded in an onclick. Events method is already an array of steps. */
function eventsCookingView(){
  var accent='var(--accent)', cream='var(--ink)';
  var c = S.eventsCooking || {};
  var r = eventsResolve(c.id);
  var steps = (r && r.method) || [];
  if(!r || !steps.length){
    return '<div style="min-height:100vh;background:var(--bg);padding:20px;color:var(--ink-soft);">'
      + '<button onclick="set({eventsCooking:null})" style="background:none;border:none;color:'+accent+';font-size:14px;cursor:pointer;padding:0;">\u2190 Back</button>'
      + '<p style="margin-top:20px;">'+(r?'No method steps for this recipe yet.':'Recipe not found.')+'</p></div>';
  }
  var idx = Math.min(Math.max(0, c.step||0), steps.length-1);
  var step = steps[idx];
  var secs = (typeof parseStepTime==='function') ? parseStepTime(step) : 0;
  var timer = secs
    ? '<div style="margin-top:18px;"><button onclick="startTimer('+secs+',\'Step '+(idx+1)+'\')" style="display:inline-block;background:var(--card2);border:1px solid '+accent+';border-radius:8px;color:var(--gold);font-size:15px;font-weight:bold;padding:7px 16px;cursor:pointer;">\u23F1\uFE0F '+((typeof fmtTimerLabel==='function')?fmtTimerLabel(secs):(Math.round(secs/60)+' min'))+'</button></div>'
    : '';
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;
  var nm = r.name || 'Recipe';
  var setStep = function(n){ return 'set({eventsCooking:{id:\''+c.id+'\',step:'+n+'}});window.scrollTo(0,0);'; };
  return '<div style="min-height:100vh;background:var(--bg);display:flex;flex-direction:column;">'
    + '<div style="background:var(--card2);border-bottom:1px solid var(--line2);padding:14px 16px;">'
    +   '<button onclick="set({eventsCooking:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+accent+';font-size:13px;cursor:pointer;padding:0;">\u2715 Exit cooking mode</button>'
    +   '<div style="font-size:17px;color:'+cream+';margin-top:6px;">'+nm+'</div>'
    +   '<div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">Step '+(idx+1)+' of '+steps.length+'</div>'
    +   '<div style="height:5px;background:var(--bg);border-radius:3px;margin-top:10px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:'+accent+';"></div></div>'
    + '</div>'
    + '<div style="flex:1;display:flex;flex-direction:column;padding:28px 22px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   '<div style="margin:auto 0;">'
    +     '<div style="width:48px;height:48px;border-radius:50%;background:var(--card2);border:2px solid '+accent+';display:flex;align-items:center;justify-content:center;font-size:21px;color:'+accent+';margin-bottom:20px;">'+(idx+1)+'</div>'
    +     '<div style="font-size:23px;color:var(--ink2);line-height:1.7;">'+step+'</div>'
    +     timer
    +   '</div>'
    + '</div>'
    + '<div style="display:flex;gap:10px;padding:16px 22px 30px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   (idx>0 ? '<button onclick="'+setStep(idx-1)+'" style="flex:1;padding:14px;border-radius:12px;background:var(--card2);border:1px solid '+accent+';color:'+accent+';font-size:15px;cursor:pointer;">\u2190 Previous</button>' : '')
    +   (last
        ? '<button onclick="set({eventsCooking:null});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">\u2713 Done</button>'
        : '<button onclick="'+setStep(idx+1)+'" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">Next step \u2192</button>')
    + '</div>'
    + '</div>';
}

if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.events = function(id){ return eventsResolve(id); };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.events = function(item, recipe, vr){ return eventsRecipeOpts(item, (S.eventGuests||20)); };
}


/* ═══════════════════════════════════════════════════════════════════
   CELEBRATION CAKES → universal opener (Standard §4b). Migrated 14 Jun 2026.
   Replaces the hand-rolled if(activeCake) page + openCakeRecipe/activeCake.
   Source finds the cake in CELEBRATION_CAKE_RECIPES; builder folds the
   batches-needed logic into the shared green qtyBox, scales base300 through
   the shared ingredient row (per-portion · scaled total), renders method via
   the shared method box, wires a real Add-to-Plan toggle (eventSelectedCakes).
   Guest count = S.cakeGuests (its own 10–500 slider). Back keeps cakeCat so it
   lands on the category list you came from. No cook mode (cakes never had one).
   ═══════════════════════════════════════════════════════════════════ */
function cakesResolve(id){
  var arr = (typeof CELEBRATION_CAKE_RECIPES!=='undefined') ? CELEBRATION_CAKE_RECIPES : [];
  return arr.find(function(c){ return c && c.id===id; }) || null;
}

function cakesRecipeOpts(cake, guests){
  if(!cake) return { name:'Recipe not found', backJs:'closeRecipe()', backLabel:'\u2190 Back',
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" } };
  guests = guests || 50;
  var emoji = cake.emoji || '\uD83C\uDF82';
  var isPro = tierAllows('pro');   // §7 level gate (Deluxe==Pro), never USER_TIER==='pro'

  // serves number (first integer in the serves string) → batches + extra slices
  var servesParts = String(cake.serves||'50').match(/\d+/g);
  var servesNum = servesParts ? parseInt(servesParts[0],10) : 50;
  var batchesNeeded = Math.max(1, Math.ceil(guests / servesNum));
  var slicesOver = (batchesNeeded * servesNum) - guests;

  // ── SUB: cake badge row (serves · icing · stability) — warm palette ──
  function badge(txt){ return '<span style="display:inline-block;background:var(--card);border:1px solid var(--line);border-radius:8px;font-size:13px;color:var(--ink-soft);padding:3px 9px;margin:0 6px 6px 0;">'+txt+'</span>'; }
  var sub = '<div style="margin-top:4px;">'
    + badge('\uD83C\uDF82 Serves '+cake.serves)
    + badge('\uD83C\uDF66 '+cake.icingType)
    + (cake.stabilityNote ? badge('\uD83C\uDFD7\uFE0F '+cake.stabilityNote) : '')
    + '</div>';

  // ── QTY (shared green box): batches needed + extra slices + 10% tip ──
  var qInfo = (slicesOver>0 ? slicesOver+' extra slice'+(slicesOver!==1?'s':'')+' \u2014 keep for late arrivals<br>' : '')
    + '\uD83D\uDCA1 Always bake for ~10% more than your RSVP count.';
  var qtyHTML = qtyBox({
    label:'How Many To Bake', sub: guests+' guests \u00b7 serves '+cake.serves+' per batch',
    total: batchesNeeded+'\u00d7 batch'+(batchesNeeded!==1?'es':''),
    ppLine: 'one batch serves '+cake.serves, n: guests, info: qInfo,
    decJs:"setQuiet({cakeGuests:Math.max(10,(S.cakeGuests||50)-((S.cakeGuests||50)<=20?1:5))})",
    incJs:"setQuiet({cakeGuests:Math.min(500,(S.cakeGuests||50)+((S.cakeGuests||50)<20?1:5))})"
  });

  // ── INGREDIENTS (shared box/row): per-portion · scaled total; "—" = sub-head ──
  var ratio = guests / servesNum;
  function fmtScaled(totalPart){
    var m = totalPart.match(/^([\d.]+)\s*(g|kg|ml|L)(?![a-z])/);
    if(!m || ratio===1) return totalPart;
    var base = parseFloat(m[1]), unit = m[2];
    var scaled = Math.round(base*ratio*10)/10;
    if(unit==='g'  && scaled>=1000) return (scaled/1000).toFixed(1)+'kg';
    if(unit==='kg')                 return scaled.toFixed(1)+'kg';
    if(unit==='ml' && scaled>=1000) return (scaled/1000).toFixed(1)+'L';
    return scaled+unit;
  }
  var ingRows = (cake.base300||[]).map(function(ing){
    if(!ing || !ing.n) return '';
    if(ing.n.trim().charAt(0)==='\u2014'){
      return '<div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin:12px 0 6px;padding-top:8px;border-top:1px solid var(--line);">'+ing.n.replace('\u2014','').trim()+'</div>';
    }
    if(!ing.a) return ingredientRow(ing.n, '', '');
    var parts = ing.a.split('\u00b7');
    if(parts.length>1){
      var perPart = parts[0].trim(), totalPart = fmtScaled(parts[1].trim());
      var amt = '<span style="color:var(--ink-soft);font-size:13px;font-weight:normal;">'+perPart+' \u00b7 </span>'+totalPart;
      return ingredientRow(ing.n, amt, '');
    }
    return ingredientRow(ing.n, ing.a, '');
  }).join('');
  var ingredientsHTML = ingRows ? ingredientsBox(ingRows, guests) : '';

  // ── METHOD (shared box/steps) — no timers / cook mode for cakes ──
  var methodHTML = '';
  if(cake.method && cake.method.length){
    var stepsHTML = cake.method.map(function(s,i){ return methodStep(i, s, ''); }).join('');
    methodHTML = methodBox(stepsHTML, '');
  }

  // ── EXTRAS: tip + Baker Briefing (Pro-gated) ──
  var extras = '';
  if(cake.tip) extras += '<div style="background:var(--card2);border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:14px;color:var(--ink-soft);"><span style="color:var(--accent);">\uD83D\uDCA1 TIP: </span>'+cake.tip+'</div>';
  if(typeof BAKER_BRIEFING!=='undefined' && BAKER_BRIEFING.length){
    if(isPro){
      var briefInner = BAKER_BRIEFING.map(function(b){ return '<div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid var(--line);"><span style="color:var(--accent);font-size:13px;">\u2713</span><span style="font-size:14px;color:var(--ink2);">'+b+'</span></div>'; }).join('');
      extras += recipeBox('\uD83D\uDCCB Baker Briefing Checklist', briefInner);
    } else {
      extras += '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px;text-align:center;color:var(--accent);font-size:13px;margin-bottom:12px;">\uD83D\uDC51 Baker Briefing Checklist \u2014 Tinza Pro</div>';
    }
  }

  // ── ACTIONS: real plan toggle (eventSelectedCakes) ──
  var inPlan = ((S.eventSelectedCakes||[]).indexOf(cake.id) >= 0);
  var addJs  = "set({eventSelectedCakes:toggle(S.eventSelectedCakes||[],'"+cake.id+"')})";
  var planCount = (S.eventSelectedCakes||[]).length;

  return {
    photoName:cake.photoName||cake.name, photoEmoji:emoji,
    backJs:"closeRecipe()", backLabel:'\u2190 Back',
    name:cake.name, sub:sub, meta:{},
    qtyHTML:qtyHTML, equipHTML:equipmentContract(cake, guests, null, batchesNeeded) + equipmentLine(cake, guests), ingredientsHTML:ingredientsHTML, methodHTML:methodHTML, extrasHTML:extras,
    actions:{ addJs:addJs, inPlan:inPlan },
    nav:{ backJs:"closeRecipe()", planJs:"closeRecipe({cakeCat:'myplan'})", planCount:planCount, homeJs:"closeRecipe({screen:'home'})" }
  };
}

if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.cakes = function(id){ return cakesResolve(id); };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.cakes = function(item, recipe, vr){ return cakesRecipeOpts(item, (S.cakeGuests||50)); };
}

/* ═══════════════════════════════════════════════════════════════════
   BEVERAGES → universal opener (Standard §4b). Cloned from CAKES.
   Source finds the drink in EVENTS_BEVERAGE_RECIPES; builder folds the
   batches-needed logic into the shared green qtyBox, scales base300 through
   the shared ingredient row (per-glass · scaled total), renders method via the
   shared method box, wires a real Add-to-Plan toggle (eventSelectedBeverages).
   Guest count = S.beverageGuests (its own 10–500 slider). serves can be a range
   ("15–20"), "6 per bottle", or wordy ("per glass"/"per shot") — the first integer
   drives batches; NO integer → batches=1, ratio=1 (shows per-glass amounts, no NaN).
   No cook mode (drinks never had one). Extra badges: 🥂 glassware · 📝 serveNote.
   ═══════════════════════════════════════════════════════════════════ */
function beveragesResolve(id){
  var arr = (typeof EVENTS_BEVERAGE_RECIPES!=='undefined') ? EVENTS_BEVERAGE_RECIPES : [];
  return arr.find(function(b){ return b && b.id===id; }) || null;
}

function beveragesRecipeOpts(bev, guests){
  if(!bev) return { name:'Recipe not found', backJs:'closeRecipe()', backLabel:'← Back',
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" } };
  guests = guests || 50;
  var emoji = bev.emoji || '🍹';

  // ⭐ VERSIONS — overlay the chosen version onto a COPY (shared core.js fns).
  // applyRecipeVersion handles feel/method/tip/etc; base300 + serveNote/glassware
  // aren't in its key list, so overlay those explicitly. The base entry stays the
  // default for shopping / back-compat. A drink with NO versions is untouched.
  if(bev.versions && bev.versions.length && typeof activeVersionName==='function'){
    bev = (typeof applyRecipeVersion==='function') ? applyRecipeVersion(bev) : Object.assign({}, bev);
    var _vn = activeVersionName(bev);
    var _v  = (bev.versions||[]).find(function(x){ return x.name===_vn; });
    if(_v){ ['base300','serveNote','glassware'].forEach(function(k){ if(_v[k]!=null) bev[k]=_v[k]; }); }
  }
  var verStrip = (bev.versions && bev.versions.length && typeof versionStripHTML==='function')
    ? versionStripHTML(bev,'var(--accent)') : '';

  // serves number (first integer) → batches; guard "per glass"/"per shot" (no number → 1)
  var servesParts = String(bev.serves||'').match(/\d+/g);
  var servesNum = servesParts ? parseInt(servesParts[0],10) : 0;            // 0 = no number
  var batchesNeeded = servesNum>0 ? Math.max(1, Math.ceil(guests / servesNum)) : 1;
  var slicesOver = servesNum>0 ? (batchesNeeded * servesNum) - guests : 0;

  // ── SUB: badge row (serves · glassware · serving note) — mirrors cakes ──
  function badge(txt){ return '<span style="display:inline-block;background:var(--card);border:1px solid var(--line);border-radius:8px;font-size:13px;color:var(--ink-soft);padding:3px 9px;margin:0 6px 6px 0;">'+txt+'</span>'; }
  var sub = '<div style="margin-top:4px;">'
    + badge('🍹 Serves '+bev.serves)
    + badge('🥂 '+bev.glassware)
    + '</div>'
    + (bev.serveNote ? '<div style="margin-top:6px;font-size:13px;color:var(--ink-soft);font-style:italic;line-height:1.4;">📝 '+bev.serveNote+'</div>' : '');

  // ── QTY (shared green box): batches needed + extra servings + 10% tip ──
  var qInfo = (slicesOver>0 ? slicesOver+' extra serving'+(slicesOver!==1?'s':'')+' — keep for top-ups<br>' : '')
    + '💡 Cater for ~1.5 drinks per person in the first hour, ~1/hour after.';
  var qtyHTML = qtyBox({
    label:'How Much To Make', sub: guests+' guests · serves '+bev.serves+' per batch',
    total: batchesNeeded+'× batch'+(batchesNeeded!==1?'es':''),
    ppLine: 'one batch serves '+bev.serves, n: guests, info: qInfo,
    decJs:"setQuiet({beverageGuests:Math.max(10,(S.beverageGuests||50)-((S.beverageGuests||50)<=20?1:5))})",
    incJs:"setQuiet({beverageGuests:Math.min(500,(S.beverageGuests||50)+((S.beverageGuests||50)<20?1:5))})"
  });

  // ── INGREDIENTS (shared box/row): per-glass · scaled total; "—" = sub-head ──
  var ratio = servesNum>0 ? (guests / servesNum) : 1;                       // never divide by NaN
  function fmtScaled(totalPart){
    var m = totalPart.match(/^([\d.]+)\s*(g|kg|ml|L)(?![a-z])/);
    if(!m || ratio===1) return totalPart;
    var base = parseFloat(m[1]), unit = m[2];
    var scaled = Math.round(base*ratio*10)/10;
    if(unit==='g'  && scaled>=1000) return (scaled/1000).toFixed(1)+'kg';
    if(unit==='kg')                 return scaled.toFixed(1)+'kg';
    if(unit==='ml' && scaled>=1000) return (scaled/1000).toFixed(1)+'L';
    return scaled+unit;
  }
  var ingRows = (bev.base300||[]).map(function(ing){
    if(!ing || !ing.n) return '';
    if(ing.n.trim().charAt(0)==='—'){
      return '<div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin:12px 0 6px;padding-top:8px;border-top:1px solid var(--line);">'+ing.n.replace('—','').trim()+'</div>';
    }
    if(!ing.a) return ingredientRow(ing.n, '', '');
    var parts = ing.a.split('·');
    if(parts.length>1){
      var perPart = parts[0].trim(), totalPart = fmtScaled(parts[1].trim());
      var amt = '<span style="color:var(--ink-soft);font-size:13px;font-weight:normal;">'+perPart+' · </span>'+totalPart;
      return ingredientRow(ing.n, amt, '');
    }
    return ingredientRow(ing.n, ing.a, '');
  }).join('');
  var ingredientsHTML = ingRows ? ingredientsBox(ingRows, guests) : '';

  // ── METHOD (shared box/steps) — no timers / cook mode for drinks ──
  var methodHTML = '';
  if(bev.method && bev.method.length){
    var stepsHTML = bev.method.map(function(s,i){ return methodStep(i, s, ''); }).join('');
    methodHTML = methodBox(stepsHTML, '');
  }

  // ── EXTRAS: Did You Know + tip (no Baker Briefing — that is cakes-specific) ──
  var extras = '';
  if(bev.didYouKnow) extras += (typeof recipeBox==='function')
    ? recipeBox('💡 Did You Know', '<div style="font-size:15px;color:var(--ink2);line-height:1.6;">'+bev.didYouKnow+'</div>')
    : '<div style="background:var(--card2);border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:14px;color:var(--ink-soft);"><span style="color:var(--accent);">💡 DID YOU KNOW: </span>'+bev.didYouKnow+'</div>';
  if(bev.tip) extras += '<div style="background:var(--card2);border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:12px;font-size:14px;color:var(--ink-soft);"><span style="color:var(--accent);">💡 TIP: </span>'+bev.tip+'</div>';

  // ── ACTIONS: real plan toggle (eventSelectedBeverages) ──
  var inPlan = ((S.eventSelectedBeverages||[]).indexOf(bev.id) >= 0);
  var addJs  = "set({eventSelectedBeverages:toggle(S.eventSelectedBeverages||[],'"+bev.id+"')})";
  var planCount = (S.eventSelectedBeverages||[]).length;

  return {
    photoName:bev.photoName||bev.name, photoEmoji:emoji,
    backJs:"closeRecipe()", backLabel:'← Back',
    name:bev.name, sub:sub, meta:{},
    qtyHTML:verStrip+qtyHTML, equipHTML:equipmentContract(bev, guests, null, batchesNeeded) + equipmentLine(bev, guests), ingredientsHTML:ingredientsHTML, methodHTML:methodHTML, extrasHTML:extras,
    actions:{ addJs:addJs, inPlan:inPlan },
    nav:{ backJs:"closeRecipe()", planJs:"closeRecipe({beverageCat:'myplan'})", planCount:planCount, homeJs:"closeRecipe({screen:'home'})" }
  };
}

if(typeof RECIPE_SOURCES !== 'undefined'){
  RECIPE_SOURCES.beverages = function(id){ return beveragesResolve(id); };
}
if(typeof RECIPE_BUILDERS !== 'undefined'){
  RECIPE_BUILDERS.beverages = function(item, recipe, vr){ return beveragesRecipeOpts(item, (S.beverageGuests||50)); };
}

// Drinks shopping list = QUANTITIES only (no cost). Scales each drink's base300 to
// the guest count (batch drinks by serves-ratio, per-glass/per-shot by ×guests),
// merges by ingredient into a pre-formatted qtyStr, and tags the 🥂 Bar & Drinks
// aisle — fed straight into the shared shoppingView({noCost:true}).
function drinkShopItems(selRecipes, bevG){
  var shopMap = {};
  var entry = function(n){ var k=n.toLowerCase().replace(/[^a-z0-9]/g,''); if(!shopMap[k]) shopMap[k]={name:n, ml:0, g:0, count:0, texts:[]}; return shopMap[k]; };
  var acc = function(n,value,unit){ var e=entry(n); var u=(unit||'').toLowerCase();
    if(u==='l') e.ml+=value*1000; else if(u==='ml') e.ml+=value;
    else if(u==='kg') e.g+=value*1000; else if(u==='g') e.g+=value;
    else e.count+=value; };
  var txt = function(n,text){ var e=entry(n); if(text && e.texts.indexOf(text)<0) e.texts.push(text); };
  (selRecipes||[]).forEach(function(bev){
    // version-aware: if this drink has a chosen version, use ITS base300
    if(bev.versions && bev.versions.length && typeof activeVersionName==='function'){
      var _vn = activeVersionName(bev);
      var _v  = bev.versions.find(function(x){ return x.name===_vn; });
      if(_v && _v.base300) bev = Object.assign({}, bev, {base300:_v.base300});
    }
    var sm = (bev.serves||'').toString().match(/\d+/);
    var baseServes = sm ? parseInt(sm[0]) : 0;
    var ratio = baseServes>0 ? (bevG / baseServes) : 1;
    (bev.base300||[]).forEach(function(ing){
      if(!ing || !ing.n || ing.n.startsWith('—')) return;
      var a = (ing.a||'').trim(); if(!a) return;
      var p = a.split('·');
      if(p.length>1){
        var m = p[1].trim().match(/^([\d.]+)\s*((?:g|kg|ml|L)(?![a-z]))?/);
        if(m && m[1]) acc(ing.n, parseFloat(m[1])*ratio, m[2]||'');
      } else if(baseServes===0){
        var m2 = a.match(/^([\d.]+)\s*((?:g|kg|ml|L)(?![a-z]))?/);
        if(m2 && m2[1]) acc(ing.n, parseFloat(m2[1])*bevG, m2[2]||'');
        else txt(ing.n, a);
      }
    });
  });
  var fmt = function(e){ var parts=[];
    if(e.ml>0){ var v=Math.round(e.ml*10)/10; parts.push(v>=1000?(v/1000).toFixed(v%1000?1:0)+'L':v+'ml'); }
    if(e.g>0){ var v2=Math.round(e.g*10)/10; parts.push(v2>=1000?(v2/1000).toFixed(1)+'kg':v2+'g'); }
    if(e.count>0) parts.push(String(Math.round(e.count)));
    if(e.texts.length) parts.push(e.texts.join(', '));
    return parts.join(' + ') || '—'; };
  return Object.keys(shopMap).map(function(k){ var e=shopMap[k]; return { name:e.name, qtyStr:fmt(e), aisle:'🥂 Bar & Drinks' }; });
}
window.beverageToggleShop = function(name){ var m=Object.assign({}, S.checkedBeverageItems||{}); m[name]=!m[name]; setQuiet({checkedBeverageItems:m}); };

// Cake shopping list = QUANTITIES only (no cost). Scales each cake's base300 by the
// guest/serves ratio, merges by ingredient into a pre-formatted qtyStr, tags the
// 🎂 Baking & Cake aisle — fed straight into the shared shoppingView({noCost:true}).
function cakeShopItems(selRecipes, cakeG){
  var shopMap = {};
  var entry = function(n){ var k=n.toLowerCase().replace(/[^a-z0-9]/g,''); if(!shopMap[k]) shopMap[k]={name:n, ml:0, g:0, count:0}; return shopMap[k]; };
  var acc = function(n,value,unit){ var e=entry(n); var u=(unit||'').toLowerCase();
    if(u==='l') e.ml+=value*1000; else if(u==='ml') e.ml+=value;
    else if(u==='kg') e.g+=value*1000; else if(u==='g') e.g+=value;
    else e.count+=value; };
  (selRecipes||[]).forEach(function(cake){
    var sm = (cake.serves||'100').toString().match(/\d+/);
    var baseServes = sm ? parseInt(sm[0]) : 100;
    var ratio = cakeG / baseServes;
    (cake.base300||[]).forEach(function(ing){
      if(!ing || !ing.n || ing.n.startsWith('—')) return;
      var p = (ing.a||'').split('·');
      if(p.length<2) return;
      var m = p[1].trim().match(/^([\d.]+)\s*((?:g|kg|ml|L)(?![a-z]))?/);
      if(m && m[1]) acc(ing.n, parseFloat(m[1])*ratio, m[2]||'');
    });
  });
  var fmt = function(e){ var parts=[];
    if(e.ml>0){ var v=Math.round(e.ml*10)/10; parts.push(v>=1000?(v/1000).toFixed(v%1000?1:0)+'L':v+'ml'); }
    if(e.g>0){ var v2=Math.round(e.g*10)/10; parts.push(v2>=1000?(v2/1000).toFixed(1)+'kg':v2+'g'); }
    if(e.count>0) parts.push(String(Math.round(e.count)));
    return parts.join(' + ') || '—'; };
  return Object.keys(shopMap).map(function(k){ var e=shopMap[k]; return { name:e.name, qtyStr:fmt(e), aisle:'🎂 Baking & Cake' }; });
}
window.cakeToggleShop = function(name){ var m=Object.assign({}, S.checkedCakeItems||{}); m[name]=!m[name]; setQuiet({checkedCakeItems:m}); };

// 🥪 Finger-food shopping (E1) — per-piece amounts × total pieces, accumulated by
// ingredient, multi-aisle categorised + pre-sorted, fed to shared shoppingView({noCost:true}).
function fingerShopItems(selectedItems, totalPcs){
  var MEAT_KEYS=['chicken','beef','lamb','pork','mince','prawn','calamari','salmon','tuna','sardine','fish','salami','ham','bacon','biltong','turkey','wors','sausage','boerewors'];
  var DAIRY_KEYS=['egg','milk','cream','butter','cheese','mozzarella','parmesan','brie','feta','cream cheese','yoghurt','kefir','goat milk'];
  var PRODUCE_KEYS=['tomato','onion','garlic','lemon','basil','parsley','dill','thyme','coriander','chive','rocket','spinach','cucumber','fig','mushroom','pepper','pineapple','avocado','potato','zucchini','apple','celery','jalap','ginger','lettuce'];
  var BAKERY_KEYS=['bread','flour','dough','yeast','ciabatta','sourdough','pastry','puff'];
  var PANTRY_KEYS=['oil','vinegar','mayo','mayonnaise','mustard','ketchup','salt','pepper','sugar','honey','pesto','capers','balsamic','worcestershire','paprika','cumin','oreganum','cayenne','soy','tahini','jam','sauce','paste','stock','oat','rice','pasta','coconut','chocolate'];
  var AISLE={meat:'🥩 Butchery & Meat',dairy:'🥛 Dairy & Fridge',produce:'🥦 Fresh Produce',bakery:'🍞 Bakery',pantry:'🫙 Pantry & Dry Goods',other:'🛒 Other'};
  var ORDER=['meat','dairy','produce','bakery','pantry','other'];
  function cat(name){ var n=(name||'').toLowerCase();
    if(MEAT_KEYS.some(function(k){return n.indexOf(k)>-1;}))return 'meat';
    if(DAIRY_KEYS.some(function(k){return n.indexOf(k)>-1;}))return 'dairy';
    if(PRODUCE_KEYS.some(function(k){return n.indexOf(k)>-1;}))return 'produce';
    if(BAKERY_KEYS.some(function(k){return n.indexOf(k)>-1;}))return 'bakery';
    if(PANTRY_KEYS.some(function(k){return n.indexOf(k)>-1;}))return 'pantry';
    return 'other'; }
  var map={};
  (selectedItems||[]).forEach(function(r){
    (r.base300||[]).forEach(function(i){
      if(!i||!i.n||i.pp==null) return;
      var key=i.n.toLowerCase().replace(/[^a-z]/g,'').slice(0,18);
      var raw=i.pp*totalPcs;
      if(map[key]){ map[key].raw+=raw; }
      else { map[key]={name:i.n, raw:raw, unit:i.u||'', cat:cat(i.n)}; }
    });
  });
  function fmt(raw,unit){ var u=unit||'';
    if((u==='g'||u==='ml')&&raw>=1000) return (Math.round(raw/100)/10)+(u==='g'?'kg':'L');
    if(u==='slices') return Math.ceil(raw)+' slices';
    return Math.round(raw*10)/10+(u||''); }
  return Object.keys(map).map(function(k){ return map[k]; })
    .sort(function(a,b){ var d=ORDER.indexOf(a.cat)-ORDER.indexOf(b.cat); return d!==0?d:shopSortKey(a.name).localeCompare(shopSortKey(b.name)); })
    .map(function(e){ return { name:e.name, qtyStr:fmt(e.raw,e.unit), aisle:AISLE[e.cat] }; });
}
window.fingerToggleShop = function(name){ var m=Object.assign({}, S.checkedFingerItems||{}); m[name]=!m[name]; setQuiet({checkedFingerItems:m}); };
