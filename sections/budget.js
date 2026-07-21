// Fix: same out-of-scope `r` bug as mood — read from state by baked-in index.
function budgetTogglePlan(i){
  var r=(S._budgetResults||[])[i]; if(!r) return;
  togglePlanItem('budgetPlan',{id:r.id,name:r.name||'',emoji:r.emoji||'💰',time:r.time||0,costPP:r.costPP||0,ingredients:r.ingredients||[],nutrition:r.nutrition||null,serves:1});
}
// R15/person is the MEAT LINE (L15): below = honest stretcher mode (pap·beans·soup),
// R15pp+ = meat features. Per-person, so it converts by group size (R30/2 · R60/4 · R90/6).
var BUDGET_MEAT_LINE_PP = 15;
// MF133 · THE "✨ Show me 3 more recipes" BUTTON IS REMOVED FROM THIS RENDER.
// The chef endpoint returns 503 (netlify/functions/claude.js), so the button failed
// politely into a loop that cannot succeed. A broken control is worse than a missing
// one. ⚖️ Law 7 — a button that cannot do what it says is a lie.
// ⛔ getMoreBudgetRecipes() (line ~359) is DELIBERATELY LEFT INTACT — MF78 turns it
// back on. 🔁 RESTORE THIS BUTTON WHEN MF78 LANDS.
function budgetPlannerHTML(){
  const budget = parseFloat(S.budgetAmount||0);
  const people = parseInt(S.budgetPeople||4);
  const color = '#c06020'; const bg = '#1a1208'; const border = '#3a2010';
  if(S.budgetPlanView){
    window._sectionPlanForShare = S.budgetPlan||[];
    return sectionPlanView('budgetPlan',"I've Got R"+budget+' Plan','💰',color,bg,border,people,"setQuiet({budgetPlanView:false})");
  }
  const results = S._budgetResults;
  const loading = S._budgetLoading;
  const error = S._budgetError;
  const active = S._budgetActiveRecipe;

  if(active){
    // Shopping list = only what they need to buy (all ingredients - userHas:false)
    return recipeDetailFromResult(active, "budgetCloseRecipe()", S.budgetPeople||4, color, bg, border);
  }

  const budgetHowOpen = S.budgetHowOpen || false;

  return `<div class="warm" style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#161210 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(2,8,2,0.3) 0%,rgba(2,8,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #3a2010;border-radius:20px;color:${color};font-size:13px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">💰 Budget Meals</h1>
        <p style="margin:0 0 10px;font-size:13px;color:#e0d4b8;font-style:italic;">R40 – R500 · Real food · Real savings</p>
        <div style="display:flex;align-items:center;background:rgba(6,16,8,0.85);border:1px solid #3a2010;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:${color};margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search budget recipes…"
            oninput="set({budgetSearch:this.value})"
            value="${S.budgetSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#e0d4b8;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.budgetSearch?`<button onclick="set({budgetSearch:''})" style="background:none;border:none;color:#e0d4b8;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + PEOPLE SLIDER ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">

        <div style="flex:1;">
          <button onclick="set({budgetHowOpen:!S.budgetHowOpen})"
            style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${budgetHowOpen?'▲':'▼'} How it works
          </button>
          ${budgetHowOpen?`
            <div onclick="set({budgetHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#e0d4b8;line-height:1.6;">
              <strong style="color:${color};">1. Enter your budget</strong> — type any amount from R40 upwards.<br>
              <strong style="color:${color};">2. Set people count</strong> — we calculate cost per person automatically.<br>
              <strong style="color:${color};">3. Tap Find Recipes</strong> — Tinza Chef finds real meals within your budget.<br>
              <strong style="color:${color};">4. Want more?</strong> — tap "Show me 3 more" for extra ideas.<br>
            </div>
          `:''}
        </div>

        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({budgetPeople:Math.max(1,(S.budgetPeople||4)-1)})"
            style="width:32px;height:32px;border-radius:50%;background:#1a1208;border:2px solid ${color};color:${color};font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f5c842;font-weight:bold;line-height:1;">${people}</div>
            <div style="font-size:13px;color:#e0d4b8;letter-spacing:1px;text-transform:uppercase;">people</div>
          </div>
          <button onclick="setQuiet({budgetPeople:Math.min(12,(S.budgetPeople||4)+1)})"
            style="width:32px;height:32px;border-radius:50%;background:#1a1208;border:2px solid ${color};color:${color};font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Budget input -->
      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
          <div>
            <div style="font-size:13px;color:#e0d4b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">My budget</div>
            <div style="display:flex;align-items:center;gap:6px;background:#1a1208;border:2px solid ${border};border-radius:10px;padding:10px 12px;">
              <span style="font-size:16px;color:${color};font-weight:bold;">R</span>
              <input type="number" value="${S.budgetAmount||''}" placeholder="100"
                oninput="S.budgetAmount=this.value"
                style="flex:1;background:transparent;border:none;color:#f5e8cc;font-size:18px;font-family:Georgia,serif;outline:none;width:100%;" />
            </div>
          </div>
          <div>
            <div style="font-size:13px;color:#e0d4b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">People count</div>
            <div style="font-size:18px;color:#f5c842;font-weight:bold;padding:10px 0;">${people} people</div>
          </div>
        </div>

        ${budget && people ? `<div style="font-size:13px;color:${color};margin-bottom:12px;text-align:center;">= R${((budget/people)%1===0)?(budget/people).toFixed(0):(budget/people).toFixed(2)} per person to spend${budget>=500?' · 🎉 Party/event mode':''}</div>` : ''}

        <!-- Quick budget buttons -->
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
          ${[40,50,60,70,80,90,100,110,120,130,140,150,160,180,200,220,240,260,280,300,350,400,450,500].map(amt=>`<button onclick="selectBudget(${amt})" style="padding:9px 15px;border-radius:18px;border:1px solid ${parseFloat(S.budgetAmount)===amt?color:border};background:${parseFloat(S.budgetAmount)===amt?bg:'transparent'};color:${parseFloat(S.budgetAmount)===amt?'#f5c842':'#e0d4b8'};font-size:14px;font-weight:${parseFloat(S.budgetAmount)===amt?'bold':'normal'};cursor:pointer;white-space:nowrap;">R${amt}</button>`).join('')}
        </div>

        <button onclick="findBudgetRecipes();scrollToBudgetResults()" style="width:100%;padding:14px;border-radius:10px;background:#1a1208;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes...':'🔍 Find Budget Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#e0d4b8;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Finding recipes for R${budget} for ${people} people...</div>
        <div style="font-size:13px;color:#e0d4b8;margin-top:6px;">R${(budget/people).toFixed(0)} per person</div>
      </div>`:''}

      ${results&&results.length>0&&results[0]._waiting?`
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:40px;margin-bottom:12px;">👨‍🍳</div>
          <div style="font-size:14px;color:${color};margin-bottom:6px;">Tinza Chef is finding more ideas...</div>
          <div style="font-size:13px;color:#e0d4b8;">Just a moment</div>
        </div>
      `:''}

      ${results&&results.length>0&&results[0]._nomore?`
        <div style="text-align:center;padding:30px 20px;">
          <div style="font-size:13px;color:#e0d4b8;margin-bottom:12px;">That's all the recipes for this budget!</div>
          <button onclick="findBudgetRecipes()" style="padding:10px 20px;background:${bg};border:2px solid ${color};border-radius:10px;color:${color};font-size:13px;cursor:pointer;">🔄 Start again</button>
        </div>
      `:''}

      ${results&&results.length>0&&!results[0]._waiting&&!results[0]._nomore&&!results[0]._error?`
        <div id="budgetResults" style="scroll-margin-top:12px;"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:13px;letter-spacing:2px;color:${color};text-transform:uppercase;">Recipes within your budget</div>
          ${S._budgetAILoading ? `<div style="font-size:13px;color:#e0d4b8;font-style:italic;">✨ Finding more...</div>` : ''}
        </div>
        ${(budget/people) < BUDGET_MEAT_LINE_PP && budget < 500 ? `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:10px;font-size:13px;color:#e0d4b8;line-height:1.55;">
          💛 <b style="color:${color};">Tight budget, honest food.</b> At around R${((budget/people)%1===0)?(budget/people).toFixed(0):(budget/people).toFixed(2)} a person there isn't room for meat tonight — so these are proper end-of-month meals that stretch the pot: pap, beans, hearty soups and clever veg. Add a little more per person and meat comes back on the menu.
        </div>` : ''}
        ${results.map((r,i)=>`
          <div style="background:${isPlanItem('budgetPlan',r.id)?bg:'#161210'};border:1px solid ${isPlanItem('budgetPlan',r.id)?color:'#2a1a10'};border-radius:10px;padding:12px;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="budgetTogglePlan(${i})">
              <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('budgetPlan',r.id)?color:'transparent'};border:2px solid ${isPlanItem('budgetPlan',r.id)?color:'#2a1a10'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('budgetPlan',r.id)?'✓':''}</div>
              <span style="font-size:20px;">${r.emoji||'🍽️'}</span>
              <div style="flex:1;">
                <div style="font-size:14px;color:${isPlanItem('budgetPlan',r.id)?'#f5e8cc':'#e0d4b8'};font-weight:${isPlanItem('budgetPlan',r.id)?'bold':'normal'};">${(typeof tinzaDisplayName==='function')?tinzaDisplayName(r):r.name}</div>
                <div style="font-size:13px;color:${isPlanItem('budgetPlan',r.id)?color:'#7a5a30'};margin-top:2px;">⏱️ ${r.time||'?'} min · R${r.costPP||'?'} pp</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                <button onclick="event.stopPropagation();budgetOpenRecipe(${i})" style="background:${color};border:none;border-radius:6px;padding:4px 10px;font-size:13px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
              </div>
            </div>

          </div>`).join('')}
        ${sectionPlanBtn('budgetPlan',"I've Got R"+budget,'💰',color,bg,people,"setQuiet({budgetPlanView:true})")}
      `:''}

      ${results&&results.length>0&&results[0]._error?`
        <div style="text-align:center;padding:20px;">
          <div style="font-size:13px;color:#e0d4b8;">${results[0]._msg||'No more recipes found.'}</div>
          <button onclick="findBudgetRecipes()" style="padding:10px 20px;background:${bg};border:2px solid ${color};border-radius:10px;color:${color};font-size:13px;cursor:pointer;margin-top:12px;">🔄 Start again</button>
        </div>
      `:''}

      ${!results&&!loading?`
        <!-- Budget tips when no search yet -->
        <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:14px;margin-top:4px;">
          <div style="font-size:13px;color:${color};font-weight:bold;margin-bottom:10px;">💡 SA Budget Cooking Tips</div>
          ${[
            {t:"Mince & Legumes",d:"Beef mince and tinned beans are the best value protein sources. Stretch mince further by mixing with grated carrot and onion."},
            {t:"Bone-in chicken",d:"Chicken drumsticks and thighs cost half the price of breasts and give twice the flavour. Always buy bone-in for curries and stews."},
            {t:"Maize meal & Rice",d:"Pap and rice are the most filling, affordable starches. Buy in bulk (5–10kg) for maximum savings."},
            {t:"Tinned tomatoes",d:"The most versatile ingredient in budget cooking. Always have 3–4 tins in the pantry. Cheaper and more flavourful than fresh for cooking."},
            {t:"Cook from scratch",d:"A homemade curry or stew for 4 costs R60–80. The same from a restaurant costs R400+. Your time is the ingredient."},
          ].map(t=>`<div style="margin-bottom:8px;"><div style="font-size:13px;color:#e0d4b8;font-weight:bold;">${t.t}</div><div style="font-size:13px;color:#e0d4b8;line-height:1.5;">${t.d}</div></div>`).join('')}
        </div>
      `:''}
    </div>
  </div>`;
}


// This is the braaiRecipeAction that ACTUALLY RUNS: core.js:4278 declares the same
// global, but budget.js loads later and overwrites it. ⚖️ Law 6 — two functions, one
// name. The 'kitchen' branch is deleted 15 Jul: the heart is the only save.
function braaiRecipeAction(action) {
  if(action === 'download') { alert("Download — coming soon!"); }
}
function portionHelpContent() {
  if(!S.portionHelpOpen) return '';
  return '<div style="margin-top:8px;font-size:13px;color:#9a8868;line-height:2.2;">'
    + '1 &middot; Pick <b style="color:#f5c842;">one dish</b> and you get a full plate of it<br>'
    + '2 &middot; Pick <b style="color:#f5c842;">two dishes</b> and you get half of each — same total food<br>'
    + '3 &middot; Pick <b style="color:#f5c842;">three dishes</b> and you get a third of each — still the same<br>'
    + '4 &middot; Think of it like slicing a pizza — more slices, but the same pizza<br>'
    + '5 &middot; Want more food per person? Tap <b style="color:#f5c842;">Big Eaters</b> in your Profile'
    + '</div>';
}

// ── BUDGET RECIPE FINDER (rebuilt 27 Jun — lost in the monolith→module split) ──
// Filters every priced meal recipe down to what fits "I've got Rxxx for N people",
// cheapest first. Pure local filter, no AI dependency — always works.
function _budgetPool(perPersonBudget){
  // ── UNIVERSAL INDEX re-point (3 Jul, TINZA_UNIVERSAL_INDEX_BRIEF §4) ──
  // The pool is now every recipe whose mealRole === 'main', across ALL sections,
  // so World Kitchen SA mains (Bobotie etc.), FMF lunch/supper mains and the floor
  // stretchers finally surface here. Braai is excluded (portion-brain, not per-person
  // costPP). Breakfast / Sides & Basics / Bakes fall out for free — their mealRole
  // isn't 'main'. Everything DOWNSTREAM is unchanged: findBudgetRecipes() still drops
  // costPP==null, keeps costPP <= per, de-dupes by id and sorts cheapest-first.
  if(typeof allRecipes === 'function'){
    var pool = allRecipes({ mealRole:'main' }).filter(function(r){ return r.section !== 'braai'; });
    // Floor-blend behaviour kept intact: the end-of-month stretcher meals join ONLY
    // when money is genuinely tight (≤ ~R15pp ≈ R60 for a family of 4). Above that the
    // proper library meals take over — otherwise the cheapest floor meals float to the
    // top of every budget. (2 Jul rule, preserved.)
    if(!(perPersonBudget != null && perPersonBudget <= 15)){
      pool = pool.filter(function(r){ return r.section !== 'floor'; });
    }
    return pool;
  }
  // ── Fallback: index not loaded → original hand-rolled pool (never regress) ──
  var pool = [];
  if(typeof LIGHTLUNCH_RECIPES  !== 'undefined') pool = pool.concat(LIGHTLUNCH_RECIPES);
  if(typeof SUPPER_RECIPES      !== 'undefined') pool = pool.concat(SUPPER_RECIPES);
  if(perPersonBudget != null && perPersonBudget <= 15 && typeof BUDGET_FLOOR_RECIPES !== 'undefined'){
    pool = pool.concat(BUDGET_FLOOR_RECIPES);
  }
  return pool;
}
/* ── B3 VARIETY (3 Jul, L59) ─────────────────────────────────────────────────
   Cheapest-first alone was swamped by the big cheap-vegan World Kitchen corpus,
   so the top of every budget looked the same. Fix = diversify the axis the query
   left open: bucket each result by protein/format and round-robin across buckets
   (via balancedOrder in index.js), cheapest-first WITHIN a bucket. Bucket ORDER
   is SA-first so the opening rows feel recognisable (meat → fish → beans → …). */
var BUDGET_BUCKET_ORDER = ['meat','fish','beans','pastarice','soup','veg'];
function budgetBucket(r){
  // classify on the dish's OWN identity — name + its (paren-stripped) ingredient
  // NAMES — NOT searchText. searchText also folds in goesWith/pairsWith ("goes with
  // grilled chicken"), cuisine + nameAlt. That pollution was dumping vegan rice
  // dishes into the MEAT bucket, where their ~R10 price (no meat in the pot!) buried
  // the real R25–R44 SA meat mains. Ingredient names are already paren-stripped, so
  // "stock (chicken/beef/veg)" reads as just "stock". (3 Jul — review-a follow-up)
  var t = ((r && r.name || '') + ' ' +
           ((r && r.ingredients || []).map(function(i){ return i.n; }).join(' '))).toLowerCase();
  // precedence = the dish's DOMINANT identity, not just any word it contains
  if(/\b(beef|mince|frikkadel|meatballs?|steak|chops?|lamb|mutton|skaap|pork|bacon|gammon|ham|sausages?|boerewors|wors|viennas?|polony|chicken|hoender|drumsticks?|thighs?|ribs?|oxtail|liver|bobotie|bunny chow|vleis)\b/.test(t)) return 'meat';
  if(/\b(fish|hake|snoek|pilchards?|sardines?|tuna|prawns?|shrimps?|mussels?|calamari|kingklip|maasbanker|vis)\b/.test(t)) return 'fish';
  if(/\b(beans?|lentils?|dhal|dal|chickpeas?|samp|cowpeas?|split peas?|soya mince|soy mince|tofu|falafel)\b/.test(t)) return 'beans';
  if(/\b(pasta|spaghetti|macaroni|noodles?|rice|risotto|lasagn[ae]|penne|fusilli|mac and cheese|mac & cheese)\b/.test(t)) return 'pastarice';
  if(/\b(soups?|broth|bisque)\b/.test(t)) return 'soup';
  return 'veg';
}
// SA-FIRST home advantage (3 Jul): rank a recipe's "home-ness" so recognisable SA
// dishes lead every bucket and the un-costed-meat World imposters fall below.
function _budgetHomeRank(r){
  var cu = (r && r.cuisine || '').toLowerCase();
  // unmistakably SA — incl. World Kitchen SA sub-cuisines (Cape Malay/Zulu/Sotho/Xhosa/Boerekos)
  if(/south[\s-]?africa|cape\s?malay|zulu|sotho|xhosa|tswana|venda|boerekos|boere|afrikaan|karoo/.test(cu)) return 3;
  if(r && (r.section==='meals' || r.section==='floor')) return 2;  // our curated home library
  return 1;                                                        // foreign World Kitchen etc.
}
// review-c dedup helpers: collapse identical dish NAMES to one finder row, keeping
// the most detailed record. Index keeps both — this trims the VIEW only.
function _budgetDupKey(r){
  var k = String(r && r.name || '').toLowerCase().replace(/[^a-z0-9]+/g,'');
  return k || ('id:' + (r && r.id));   // never fold blank names together
}
function _budgetComp(r){
  if(!r) return -1;
  return ((r.ingredients && r.ingredients.length) || 0)
       + ((r.method && r.method.length) || 0)
       + ((r.versions && r.versions.length) ? 3 : 0)   // .length, NOT the array: the DOOR now
                                                       // defaults versions to [] (ruled 15 Jul)
                                                       // and [] is TRUTHY where null was FALSY.
                                                       // Bare `r.versions` would score EVERY
                                                       // recipe 3 and kill this signal.
       + (r.nutrition ? 2 : 0)
       + (r.feel      ? 1 : 0);
}
// "Match my budget" (Tina 3 Jul): above the stretch zone (>R15pp) show dishes that
// USE the per-person budget, not the cheapest that scrape in. Start tight — 70% of
// budget — and relax the floor only as far as needed to keep a full list, so R75
// shows ~R53–75 dishes, never R8, and never comes up empty. In the tight zone
// (<=R15pp) there's no floor: every cheap option still matters.
var BUDGET_BAND_FRACS = [0.7, 0.5, 0.3, 0];

function findBudgetRecipes(){
  var budget = parseFloat(S.budgetAmount||0);
  var people = parseInt(S.budgetPeople||4) || 1;
  if(!budget || budget <= 0){ setQuiet({_budgetError:'Enter a budget first 💰', _budgetResults:null}); return; }
  var per = budget / people;
  var q = (S.budgetSearch||'').trim().toLowerCase();

  // 1 · priced mains within [lower, per]. The lower bound (above the stretch zone)
  //     keeps dishes far below the spend out of a bigger budget — so R30pp stops
  //     leading with R11 chicken feet and starts feeling matched to the money.
  var basePool = _budgetPool(per);
  function _passBudget(r, lo){
    if(!r || !r.costPP) return false;                                  // only priced recipes
    if(r.costPP > per || r.costPP < lo) return false;                  // inside the [lo, per] band
    if(q && (r.name||'').toLowerCase().indexOf(q) < 0) return false;   // honour the search box
    return true;
  }
  // Graded band: start at 70% of budget and relax the floor only as far as needed
  // to keep a full list — so shown dishes hug the per-person figure. (Tina 3 Jul)
  var within = [], fracs = (per > BUDGET_MEAT_LINE_PP) ? BUDGET_BAND_FRACS : [0];
  for(var _fi = 0; _fi < fracs.length; _fi++){
    within = basePool.filter(function(r){ return _passBudget(r, per * fracs[_fi]); });
    if(within.length >= 6) break;   // enough near-budget dishes → stop relaxing
  }

  // 2 · de-dupe by id AND by name (review-c) — the two Boboties become one row,
  //     keeping the most comprehensive version.
  var byKey = {};
  within.forEach(function(r){
    var k = _budgetDupKey(r);
    if(!byKey[k] || _budgetComp(r) > _budgetComp(byKey[k])) byKey[k] = r;
  });
  var uniq = Object.keys(byKey).map(function(k){ return byKey[k]; });

  // 3 · order: B3 variety round-robin (review-a), cheapest-first within each
  //     bucket. Falls back to plain cheapest-first if the index isn't loaded.
  var pool = (typeof balancedOrder === 'function')
    ? balancedOrder(uniq, {
        bucketOf: budgetBucket,
        order:    BUDGET_BUCKET_ORDER,
        // SA-first WITHIN each bucket: home library (+ SA cuisines) lead, cheapest as
        // the tiebreak — so recognisable SA dishes head every row and the World dishes
        // whose meat was never costed drop below instead of hijacking the top. (3 Jul)
        within:   function(a,b){
          // SA-first, then NEAREST the budget so dishes that USE the figure lead
          // (Tina: "show dishes near the figure"). (3 Jul)
          return (_budgetHomeRank(b) - _budgetHomeRank(a))
              || (Math.abs((a.costPP||0) - per) - Math.abs((b.costPP||0) - per));
        }
      })
    : uniq.sort(function(a,b){ return (a.costPP||0) - (b.costPP||0); });
  if(!pool.length){
    window._tinzaBudgetPage = [];
    setQuiet({_budgetError:null, _budgetLoading:false, _budgetResults:[{_nomore:true}]});
    return;
  }
  window._budgetPoolAll = pool;
  window._budgetShown   = Math.min(6, pool.length);
  var page = pool.slice(0, window._budgetShown);
  window._tinzaBudgetPage = page;                                      // openBudgetRecipe() reads this
  setQuiet({_budgetError:null, _budgetLoading:false, _budgetResults:page});
}
function getMoreBudgetRecipes(){
  var pool = window._budgetPoolAll || [];
  if(!pool.length){ findBudgetRecipes(); return; }
  window._budgetShown = Math.min((window._budgetShown||6) + 3, pool.length);
  var page = pool.slice(0, window._budgetShown);
  window._tinzaBudgetPage = page;
  setQuiet({_budgetResults:page});
}

/* ── Finder UX helpers (3 Jul) — chip runs the search + jumps to results;
   opening a recipe snapshots scroll so Back returns to the exact row. ── */
function selectBudget(amt){
  S.budgetAmount = amt;
  setQuiet({ budgetAmount: amt });   // highlight the chip + re-render
  findBudgetRecipes();               // library-first = instant, no wait
  scrollToBudgetResults();
}
function scrollToBudgetResults(){
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    var el = document.getElementById('budgetResults');
    if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  }); });
}
function budgetOpenRecipe(i){
  window._budgetScrollY = window.scrollY ||
    (document.scrollingElement && document.scrollingElement.scrollTop) || 0;
  openBudgetRecipe(i);                          // meals.js — sets _budgetActiveRecipe
  requestAnimationFrame(function(){ window.scrollTo(0,0); });  // recipe opens at top
}
function budgetCloseRecipe(){
  var y = window._budgetScrollY || 0;
  setQuiet({ _budgetActiveRecipe:null });       // back to the results list
  window.scrollTo(0, y);                         // restore immediately — no flash to the top
  requestAnimationFrame(function(){ window.scrollTo(0, y); });  // correct once the list height is back
}
