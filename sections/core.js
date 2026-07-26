function set(upd){ Object.assign(S,upd); draw(); }

function setQuiet(upd){
  const root=document.getElementById("root");
  if(root) root._savedScroll = window.scrollY;
  Object.assign(S,upd);
  draw();
}

// ── MF59-B · RENDER-EMPTY-ON-ENTRY (Law 31). ──────────────────────
// The search query belongs to the ONE screen it was typed on. searchVal()
// derives the input's value AT RENDER: it returns the persisted query ONLY
// while we are still on its owner screen; on any screen change the owner is
// nulled (in draw(), the floor every nav path lands on — Law 33), so the box
// renders empty on the way IN without ever clearing the query on the way OUT.
// Same screen re-render (backspace) → owner matches → query survives (MF46).
function searchVal(key){
  return (typeof S !== 'undefined' && S._searchOwner === S.screen) ? (S[key] || '') : '';
}

// ── MF46 · ONE live-search helper (the globalSearchLive pattern, LIFTED not invented). ──
// The <input> lives inside the template draw() rebuilds, so oninput="set({xSearch})" fired
// draw() → #root rebuilt → the element being typed into DESTROYED mid-keystroke ("La"). This
// NEVER calls draw(): it writes ONLY the results container and persists the query silently, so
// the input survives the keystroke. Debounced ~150ms (a room otherwise re-queries 1000+
// records per letter). NOT a focus-restore setTimeout (that was tried 25 May, didn't hold) —
// this is the debounce §1 asks for, and it never touches the input.
//   spec: { sections:[...] } scoped-global · { filterFn:fn } pluggable (Kiddies themes) ·
//         { stateKey:'xSearch' } silent persist · { maxCostPP:n } Budget cap · { debounce:n }
function liveSearch(inputEl, resultsId, spec){
  if(!inputEl) return;
  spec = spec || {};
  if(typeof S !== 'undefined'){
    S.searchPrevScreen = S.screen;                       // Back target once a result opens
    if(spec.stateKey){ S[spec.stateKey] = inputEl.value; S._searchOwner = S.screen; }  // silent persist — NO draw(); MF59-B · this query belongs to THIS screen
  }
  clearTimeout(inputEl._tinzaDeb);
  inputEl._tinzaDeb = setTimeout(function(){
    var el = document.getElementById(resultsId);
    if(!el) return;
    var qv = inputEl.value || '';
    if(typeof spec.filterFn === 'function'){ el.innerHTML = spec.filterFn(qv) || ''; return; }
    if(!qv || qv.trim().length < 2){ if(typeof S!=='undefined') S.searchResults = []; el.innerHTML = ''; return; }
    var hits = (typeof tinzaAllSearch === 'function') ? tinzaAllSearch(qv, { sections:spec.sections, mealCat:spec.mealCat, maxCostPP:spec.maxCostPP }) : [];
    if(typeof S !== 'undefined'){ S.searchResults = hits; S.searchQuery = qv; S.searchScope = spec.sections || null; S.searchScopeLabel = spec.label || null; }  // MF49/56 · scope + label drive "found in <room>"
    el.innerHTML = (typeof renderSearchResults === 'function') ? renderSearchResults(qv, hits) : '';
  }, spec.debounce != null ? spec.debounce : 150);
}

// ── DEVICE BACK / IN-APP HISTORY ──────────────────────────────────
// Makes the phone's back button (and edge swipe-back) step back ONE
// screen INSIDE the app instead of leaving the site. Only Home → back
// exits. Plans, carts and slider values never revert — only the screen
// you are looking at goes back one step.
const NAV_DATA_KEYS = ['selectedMeats','selectedSides','wkPlan','healthPlan','dogPlan','catPlan','moodPlan','checkedShopItems','fingerShopCart','recipeAdjustments','recentlyViewed','people','eventGuests','appetite','servings','recipeServings','moodServings','budget','budgetAmount','budgetPeople'];
// MF99 · Every room opened its own private "recipe is open" key, and goBack() only ever knew
// about ONE of them (budget). These three all close the SAME way — setQuiet({key:null}) — which
// is exactly what each room's own top-Back button already does. ⚖️ Law 6 · Law 35.
// 🩸 MF149-A · §24.6 — ONE KEY, ONE CLOSE PATH. moodActiveRecipe + mealActiveRecipe were in
// BOTH this list AND navSignature(). In the signature = opening the recipe PUSHES a history
// entry. In this list = goBack() step (2b) closed it with setQuiet, which pushes ANOTHER
// entry — so the phone's Back walked chips → recipe → chips → recipe forever. Proven on live
// by Tina (Sides & Basics → Chips). A key that pushes must be closed by CONSUMING that push.
// ⛔ Neither key goes back in here. They stay in navSignature() (dropping them there would
//    pop straight past the list to Home) and are closed by closeMealRecipe()/closeMoodRecipe(),
//    which goBack() calls by name. ⚖️ §24.6.
const SIMPLE_RECIPE_KEYS = ['_anchorActiveRecipe','_fourActiveRecipe','_searchActiveRecipe'];
let _navRestoring = false;
// Forward app-history depth = (history entries WE pushed) − (popstate-backs WE consumed).
// 0 = sitting on the first app screen (nothing of ours to go back into). This is the
// app's OWN source of truth for the back stack, so closeRecipe's pop-vs-set decision is
// deterministic instead of probing the browser's flaky history.state.tinza (which flips
// after popstate-to-non-tinza / replaceState / mixed hardware+in-app backs).
let _appNavDepth = 0;
// Back-nav (3 Jul): the _appNavDepth at which the CURRENT top-level screen was entered.
// Stored inside each history entry (state.rootDepth) so it survives popstate without going
// stale. goBack() uses it to tell "deeper inside this section" (step back one) apart from
// "at this section's root screen" (its logical parent is Home) — so Back from a section's
// root never walks history into an unrelated earlier screen (the FMF leak).
let _screenRootDepth = 0;
let _lastNavScreen = null;
function navSnapshot(){
  try { return JSON.parse(JSON.stringify(S)); }
  catch(_e){ return Object.assign({}, S); }
}
// ⚖️ THIS IS A CONTRACT, NOT A LIST. Every key a room NAVIGATES by must appear here.
// draw() pushes a history entry only when this string changes, so a level the signature
// cannot see is a level Back cannot walk — goBack() step (3) finds nothing and falls
// through to step (4), which dumps her on Home. That is not a goBack() bug; it is a
// signature gap, and it produced the SAME symptom in five different rooms.
// 25 Jul · REMOVED S.wkCountry + S.wkSelectedRegion — DEAD. They appeared only here and
// in the tier-switcher clear-down; worldkitchen.js has never written either. The signature
// was watching keys that do not exist while the real drill (wkContinent → wkRegion →
// wkDataCountry) went completely unseen. ⚖️ Law 19 — measured, not assumed. Census 8 rung ⑤.
// ADDED: wkContinent · wkRegion · wkDataCountry · wkDataTab · wkCourseTab · mealPlanView ·
//        healthGroupTab · catSection · dogSection · barMode.
// ⏸️ NOT added: S.cookStep (cooking mode) — Back there should EXIT the mode, not walk 12
//    steps backwards. Tina's call, not mine. S.searchPrevScreen is a memo, not a level.
// 🩸 26 Jul · §24.8 · MF149-D — REMOVED SEVEN KEYS NO ROOM HAS EVER SET:
//    eventActiveRecipe · weddingCakeView · kidsShowMasterSnacks · wkSACulture ·
//    wkRecipeDetail · activeSmoothie · activeCat2.
//    Each was measured first (Law 19): the ONLY writes anywhere in sections/ were `:null`
//    in the tier-switcher clear-down, plus one in a COMMENT. A signature entry for a key
//    nothing sets is a slot that is always '' — it can never change, so it can never
//    cause a push. It cost nothing and taught every reader that the door existed.
//    ⛔ S.mealCat was ALSO listed TWICE. The duplicate is gone; the key stays.
function navSignature(){
  return [S.screen, S.viewingRecipe?(S.viewingRecipe.id||'r'):'', S.eventTab||'', S.buffetStep||'', S.braiStep||'', S.braiCat||'', S.braaiView||'', S.activeCat||'', S.fingerSection||'', S.fingerView||'', S.kidsScreen||'', S.kidsTheme||'', S.wkScreen||'', S.wkContinent||'', S.wkRegion||'', S.wkDataCountry||'', S.wkDataTab||'', S.wkCourseTab||'', S.wkTab||'', S.babyView||'', S.activeBaby?'b':'', S.kiddiesView||'', S.healthTab||'', S.healthGroup||'', (S.moodSelected||[]).length, S.moodActiveRecipe?'mr':'', S.moodPlanView?'mp':'', S.dogView||'', S.catView||'', S.activeDog?'d':'', S.furryPet||'', S.budgetPlanView?'bp':'', S.budgetStep||'', S.beverageCat||'', S.cakeCat||'', S.mealCat||'', S.mealPlanView?'mpv':'', S.healthGroupTab||'', S.catSection||'', S.dogSection||'', S.barMode||'', S.mealActiveRecipe?(S.mealActiveRecipe.id||'mar'):''].join('|');
}
// ⚖️ §24.7 — A LATERAL REPLACES. IT NEVER PUSHES.
// A LEVEL is a place she walked INTO: Home → Supper → a recipe. Back should walk it.
// A LATERAL is a pill that swaps what ONE level SHOWS: Homestyle Plates → Oven Bakes.
// She did not go anywhere. But navSignature() watches these keys (it must — the screen
// really did change), so draw() pushed a history entry for every pill tap, and the phone's
// Back then walked her through every pill she had ever tried before it let her out of the
// room. Tina, on live: Homestyle Plates → Oven Bakes → Back → Homestyle Plates.
// ⛔ eventTab is DELIBERATELY NOT HERE. Tina checked Events buffet + cakes on live
//    26 Jul and both Backs were fine — eventTab is a LEVEL move (§24.9's Events chain),
//    not a pill. It may only join this list if her fingers ever prove the same symptom
//    there, and they have not. DO NOT TOUCH A WORKING ROOM.
// 📌 First-pill fact, measured: meals.js falls back to cats[0].id, so there is no
//    "unfiltered" state to lose — replacing the entry loses nothing she could go back to.
const LATERAL_KEYS = ['mealCat','wkDataTab','wkCourseTab','healthGroupTab','beverageCat',
                      'cakeCat','catSection','dogSection','barMode','braiCat','fingerView','healthTab'];
// The signature with the laterals blanked. ⚖️ Law 6 — this does NOT re-implement
// navSignature(); it CALLS it with the lateral keys temporarily cleared, so the two can
// never drift apart the way two hand-kept lists always do. Synchronous, and S is restored
// in a finally, so the live state is never left blanked even if the signature throws.
function navSignatureCore(){
  var saved = {}, i, k;
  for(i=0;i<LATERAL_KEYS.length;i++){ k=LATERAL_KEYS[i]; saved[k]=S[k]; S[k]=undefined; }
  try { return navSignature(); }
  finally { for(i=0;i<LATERAL_KEYS.length;i++){ k=LATERAL_KEYS[i]; S[k]=saved[k]; } }
}
function navInit(){
  if(window._tinzaNavInit) return;
  window._tinzaNavInit = true;
  window._navSig = navSignature();
  window._navSigCore = navSignatureCore();
  _lastNavScreen = S.screen;
  _screenRootDepth = 0;
  try { history.replaceState({tinza:true, sig:window._navSig, snap:navSnapshot(), rootDepth:0}, ''); } catch(_e){}
  window.addEventListener('popstate', function(e){
    const st = e.state;
    if(st && st.tinza && st.snap){
      _navRestoring = true;
      const restored = st.snap;
      // keep live data (plans/carts/sliders) — only navigation reverts
      NAV_DATA_KEYS.forEach(function(k){ if(k in S) restored[k] = S[k]; });
      S = restored;
      window._navSig = st.sig;
      window._navSigCore = navSignatureCore();   // §24.7 — recompute against the RESTORED state
      _appNavDepth = Math.max(0, _appNavDepth - 1);   // a back consumed one of our forward entries
      // restore this entry's section-root depth + screen so goBack stays accurate after popstate
      _screenRootDepth = (typeof st.rootDepth === 'number') ? st.rootDepth : Math.min(_screenRootDepth, _appNavDepth);
      _lastNavScreen = restored.screen;
      if(st._scroll != null){ var _r = document.getElementById('root'); if(_r) _r._savedScroll = st._scroll; }
      draw();
      _navRestoring = false;
    }
    // else: no Tinza history state (we're at/under the first screen) →
    // let the browser do its normal thing. Back from Home leaves the app.
  });
}

const POPULAR_RECIPES = {
  sa:[
    { id:"pr_bobotie", name:"Bobotie", intl:"Spiced Mince Bake", emoji:"🍛", cuisine:"South African", time:75, serves:6,
      tags:["cape malay","mince","curry","bakes","dinner"],
      ingredients:[
        {n:"Beef or lamb mince",pp:150,u:"g"},
        {n:"Onion (finely diced)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Curry powder",pp:3,u:"g"},
        {n:"Turmeric",pp:1,u:"g"},
        {n:"Apricot jam",pp:15,u:"g"},
        {n:"Chutney (fruit chutney)",pp:15,u:"g"},
        {n:"White bread (soaked in milk)",pp:30,u:"g"},
        {n:"Milk (for soaking bread)",pp:30,u:"ml"},
        {n:"Egg",pp:0.3,u:"egg"},
        {n:"Lemon juice",pp:5,u:"ml"},
        {n:"Raisins",pp:15,u:"g"},
        {n:"Almonds (flaked)",pp:10,u:"g"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Eggs (for topping)",pp:0.5,u:"egg"},
        {n:"Milk (for topping)",pp:30,u:"ml"},
        {n:"Turmeric (for topping)",pp:0.5,u:"g"},
      ],
      method:["Preheat oven to 180°C.","Sauté onion and garlic until soft. Add curry powder and turmeric, cook 1 min.","Add mince. Brown completely — no pink remaining.","Add jam, chutney, lemon juice and raisins. Mix well.","Squeeze bread dry and crumble into mince. Mix. Season well.","Spoon into greased baking dish. Press bay leaves on top.","Beat eggs with milk and turmeric. Pour over the mince.","Bake 35–40 min until topping is set and golden.","Remove bay leaves before serving. Serve with yellow rice and chutney."],
      tip:"The bread is what makes Bobotie uniquely South African — it absorbs the spices and gives the dish its characteristic moist texture. Don't skip the apricot jam — it's the secret sweetness that balances the curry.",
      howItFeels:"The smell of this in the oven is childhood, Sunday afternoons and someone's ouma.",
      storage:"Fridge 3 days. Freezes well without the egg topping." },

    { id:"pr_malvapudding", name:"Malva Pudding", intl:"SA Sticky Toffee Pudding", emoji:"🍮", cuisine:"South African", time:60, serves:8,
      tags:["dessert","bakes","sweet","classic","pudding"],
      ingredients:[
        {n:"Sugar",pp:30,u:"g"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Apricot jam",pp:15,u:"g"},
        {n:"Butter (melted)",pp:8,u:"g"},
        {n:"Cake flour",pp:30,u:"g"},
        {n:"Bicarbonate of soda",pp:0.5,u:"g"},
        {n:"Vinegar",pp:3,u:"ml"},
        {n:"Milk",pp:30,u:"ml"},
        {n:"Cream",pp:45,u:"ml"},
        {n:"Butter (for sauce)",pp:15,u:"g"},
        {n:"Sugar (for sauce)",pp:20,u:"g"},
        {n:"Hot water",pp:15,u:"ml"},
        {n:"Vanilla essence",pp:1,u:"ml"},
      ],
      method:["Preheat oven to 180°C. Grease a baking dish well.","Beat sugar and egg until pale and fluffy — about 3 min.","Add jam, melted butter, vinegar and milk. Mix well.","Sift flour and bicarb together. Fold into wet mixture.","Pour into greased dish. Bake 30–35 min until deep golden brown and a skewer comes out clean.","SAUCE: Combine cream, butter, sugar, hot water and vanilla in a small pot. Heat until butter melts and sugar dissolves — do not boil.","While pudding is still hot and fresh from the oven, poke holes all over with a skewer.","Pour ALL the warm sauce over the hot pudding. It will absorb completely — don't panic.","Serve immediately with extra cream or vanilla ice cream."],
      tip:"The sauce must go on while the pudding is HOT — this is non-negotiable. Cold pudding won't absorb the sauce.",
      howItFeels:"Warm, sweet, sticky — like being wrapped in a hug at a winter braai.",
      storage:"Fridge 3 days. Reheat in microwave with a splash of cream." },

    { id:"pr_koeksisters", name:"Koeksisters", intl:"Syrup-Glazed Plaited Pastry", emoji:"🍩", cuisine:"South African", time:90, serves:12,
      tags:["dessert","sweet","fried","afrikaner","syrup"],
      ingredients:[
        {n:"Cake flour",pp:25,u:"g"},
        {n:"Baking powder",pp:0.5,u:"g"},
        {n:"Salt",pp:0.2,u:"g"},
        {n:"Butter (cold)",pp:4,u:"g"},
        {n:"Egg",pp:0.1,u:"egg"},
        {n:"Milk",pp:15,u:"ml"},
        {n:"Oil (for deep frying)",pp:null,u:""},
        {n:"Sugar (for syrup)",pp:50,u:"g"},
        {n:"Water (for syrup)",pp:25,u:"ml"},
        {n:"Cream of tartar",pp:0.2,u:"g"},
        {n:"Lemon juice",pp:2,u:"ml"},
      ],
      method:["SYRUP (make the day before — must be ice cold): Dissolve sugar in water over low heat. Add cream of tartar and lemon juice. Boil 10 min. Cool completely. Refrigerate overnight.","Sift flour, baking powder and salt. Rub in cold butter until breadcrumb texture.","Add egg and milk. Mix to a soft dough. Rest 10 min.","Roll out 5mm thick. Cut into 8cm × 2cm strips. Cut each strip almost through lengthways. Plait.","Heat oil to 180°C. Fry in batches until golden brown — about 3 min.","IMMEDIATELY drop hot koeksisters into the ice-cold syrup. Remove after 30 seconds. Place on wire rack."],
      tip:"Syrup must be ice cold — put it in the freezer 30 min before frying. They go straight from hot oil into cold syrup. The thermal shock creates that signature crispy-sticky texture.",
      howItFeels:"Sticky fingers and sugar-rush — the original SA street food.",
      storage:"Room temperature 3 days. Do not refrigerate — they go soggy." },

    { id:"pr_frikkadels", name:"Frikkadels", intl:"SA Beef Meatballs", emoji:"🍖", cuisine:"South African", time:40, serves:4,
      tags:["mince","meatballs","dinner","afrikaner","family"],
      ingredients:[
        {n:"Beef mince",pp:125,u:"g"},
        {n:"Onion (very finely grated)",pp:20,u:"g"},
        {n:"White bread (crusts removed, soaked in milk)",pp:25,u:"g"},
        {n:"Milk (for soaking)",pp:30,u:"ml"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Worcestershire sauce",pp:3,u:"ml"},
        {n:"Fresh parsley (finely chopped)",pp:5,u:"g"},
        {n:"Salt and pepper",pp:null,u:""},
        {n:"Oil or butter (for frying)",pp:10,u:"ml"},
      ],
      method:["Squeeze bread dry. Combine all ingredients except oil. Mix well — hands are best.","Shape into slightly flattened balls — about 4cm diameter.","Heat oil in pan over medium heat. Fry in batches — don't crowd the pan.","Fry 4 min per side until deep golden brown and cooked through.","Rest 5 min before serving."],
      tip:"Grated onion rather than diced — it disappears into the meat and adds moisture without chunks. Soaked bread is what makes frikkadels light rather than dense.",
      howItFeels:"Every SA home has a frikkadel memory. This is that memory.",
      storage:"Fridge 3 days. Freezer 2 months." },

    { id:"pr_vetkoek", name:"Vetkoek with Mince", intl:"Fried Dough Bread with Mince", emoji:"🍞", cuisine:"South African", time:60, serves:6,
      tags:["bread","fried","mince","street food","afrikaner"],
      ingredients:[
        {n:"Bread flour",pp:60,u:"g"},
        {n:"Instant yeast",pp:1,u:"g"},
        {n:"Salt",pp:0.5,u:"g"},
        {n:"Sugar",pp:2,u:"g"},
        {n:"Lukewarm water",pp:40,u:"ml"},
        {n:"Oil for deep frying",pp:null,u:""},
        {n:"Beef mince",pp:60,u:"g"},
        {n:"Onion (diced)",pp:15,u:"g"},
        {n:"Tomato (diced)",pp:20,u:"g"},
        {n:"Curry powder",pp:1,u:"g"},
        {n:"Salt and pepper",pp:null,u:""},
      ],
      method:["Mix flour, yeast, salt and sugar. Add water gradually — mix to a soft dough.","Knead 8 min until smooth. Cover and prove 1 hour until doubled.","MINCE: Fry onion until soft. Add mince, brown completely. Add tomato and curry powder. Simmer 10 min. Season well.","Knock dough back. Divide into balls (about 70g each). Flatten slightly.","Heat oil to 170°C. Fry vetkoek in batches, 4–5 min per side until deep golden brown.","Split open immediately and fill with curry mince."],
      tip:"Oil temperature is critical — too hot and they're raw inside, too cool and they're greasy. Test with a small piece of dough first.",
      howItFeels:"Sommer standing by the stall, vetkoek in hand, watching the world go by.",
      storage:"Vetkoek best eaten fresh. Mince fridge 3 days." },

    { id:"pr_sosaties", name:"Sosaties", intl:"Cape Malay Skewers", emoji:"🍢", cuisine:"South African", time:240, serves:6,
      tags:["braai","skewer","cape malay","lamb","marinade"],
      ingredients:[
        {n:"Lamb (shoulder or leg, cubed 3cm)",pp:150,u:"g"},
        {n:"Dried apricots",pp:15,u:"g"},
        {n:"Onion (cut in wedges)",pp:20,u:"g"},
        {n:"Onion (finely diced — for marinade)",pp:15,u:"g"},
        {n:"Garlic",pp:2,u:"g"},
        {n:"Curry powder",pp:3,u:"g"},
        {n:"Turmeric",pp:0.5,u:"g"},
        {n:"Apricot jam",pp:20,u:"g"},
        {n:"White wine vinegar",pp:10,u:"ml"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Oil",pp:5,u:"ml"},
      ],
      method:["MARINADE: Fry onion and garlic in oil until soft. Add curry powder and turmeric — cook 1 min. Add jam and vinegar. Cool completely.","Combine lamb cubes with marinade. Add bay leaves. Marinate minimum 4 hours — overnight is best.","Thread lamb onto skewers alternating with dried apricots and onion wedges.","Braai over medium-hot coals — about 12–15 min, turning regularly.","Baste with remaining marinade while cooking.","Rest 5 min before serving."],
      tip:"Overnight marinating is worth it — the apricot jam tenderises the lamb. Don't grill too hot — the jam burns easily.",
      howItFeels:"Cape Malay heritage on a stick — smoke, spice, sweetness.",
      storage:"Raw marinated meat fridge 2 days. Cooked 3 days." },

    { id:"pr_potjiekos", name:"Potjiekos — Lamb Neck", intl:"SA Slow-Cooked Pot Stew", emoji:"🥘", cuisine:"South African", time:180, serves:6,
      tags:["potjie","braai","slow cook","lamb","stew"],
      ingredients:[
        {n:"Lamb neck pieces",pp:200,u:"g"},
        {n:"Onion (roughly chopped)",pp:25,u:"g"},
        {n:"Garlic (minced)",pp:3,u:"g"},
        {n:"Carrots (cut in chunks)",pp:30,u:"g"},
        {n:"Potatoes (quartered)",pp:60,u:"g"},
        {n:"Butternut (cubed)",pp:40,u:"g"},
        {n:"Green beans",pp:20,u:"g"},
        {n:"Tomato paste",pp:10,u:"g"},
        {n:"Red wine",pp:40,u:"ml"},
        {n:"Beef stock",pp:40,u:"ml"},
        {n:"Dried thyme",pp:0.5,u:"g"},
        {n:"Bay leaves",pp:null,u:""},
        {n:"Oil",pp:8,u:"ml"},
      ],
      method:["Heat oil in potjie over hot coals. Brown lamb neck in batches — deep colour means deep flavour.","Add onion and garlic. Cook until soft.","Add tomato paste. Stir and cook 2 min.","Add wine and stock. Season well.","LAYER — do not stir: add carrots, then potatoes, then butternut on top.","Cover with lid. Simmer over low coals 2–2.5 hours.","Add green beans on top in last 20 min.","THE RULE: do not stir. Serve by spooning layers from top to bottom."],
      tip:"The no-stir rule is sacred in potjiekos. Each layer steams and cooks in sequence. Stirring breaks the layers and makes it a stew. Trust the process.",
      howItFeels:"Time slows down around a potjie. This is not fast food.",
      storage:"Fridge 3 days. Tastes better the next day." },

    { id:"pr_melktert", name:"Melktert", intl:"SA Milk Tart", emoji:"🥧", cuisine:"South African", time:60, serves:8,
      tags:["dessert","bakes","sweet","afrikaner","tart","milk tart"],
      ingredients:[
        {n:"Butter (cold, cubed)",pp:15,u:"g"},
        {n:"Cake flour",pp:25,u:"g"},
        {n:"Icing sugar",pp:5,u:"g"},
        {n:"Egg yolk",pp:0.1,u:"egg"},
        {n:"Cold water",pp:5,u:"ml"},
        {n:"Full cream milk",pp:90,u:"ml"},
        {n:"Sugar",pp:15,u:"g"},
        {n:"Flour",pp:8,u:"g"},
        {n:"Cornflour",pp:5,u:"g"},
        {n:"Egg",pp:0.25,u:"egg"},
        {n:"Butter",pp:5,u:"g"},
        {n:"Vanilla essence",pp:0.5,u:"ml"},
        {n:"Cinnamon (for dusting)",pp:null,u:""},
      ],
      method:["PASTRY: Rub cold butter into flour and icing sugar until breadcrumbs. Add egg yolk and water. Press into tart tin. Refrigerate 20 min. Blind bake at 190°C for 15 min.","FILLING: Heat milk until just below boiling.","Whisk sugar, flour and cornflour together. Add eggs. Whisk smooth.","Slowly pour hot milk into egg mixture, whisking continuously.","Return to pot over low heat. Stir continuously until thick — about 5 min.","Remove from heat. Add butter and vanilla.","Pour into baked shell. Cool. Dust generously with cinnamon.","Refrigerate 2 hours before serving."],
      tip:"The filling thickens quickly once it starts — don't stop stirring or you'll get lumps.",
      howItFeels:"Cinnamon on your fingers, cold tart on a hot day — pure Afrikaner comfort.",
      storage:"Fridge 3 days." },

    { id:"pr_peppermintcrisptart", name:"Peppermint Crisp Tart", emoji:"🍫", cuisine:"South African", time:20, serves:10,
      tags:["dessert","no bake","sweet","chocolate","cream","easy"],
      ingredients:[
        {n:"Tennis biscuits (or similar plain sweet biscuits)",pp:25,u:"g"},
        {n:"Whipping cream",pp:60,u:"ml"},
        {n:"Caramel treat (tinned)",pp:40,u:"g"},
        {n:"Peppermint Crisp chocolate (grated)",pp:15,u:"g"},
      ],
      method:["Whip cream to soft peaks — not stiff.","Fold caramel treat into whipped cream until combined and smooth.","Layer biscuits in a dish in a single layer.","Spread caramel cream mixture over biscuits.","Repeat layers: biscuits, cream mixture, biscuits, cream mixture.","Top with grated peppermint crisp chocolate.","Refrigerate minimum 4 hours — overnight best."],
      tip:"It MUST be made the day before — the biscuits need time to absorb the cream and soften. Grate the chocolate while still cold from the fridge.",
      howItFeels:"Green, minty, nostalgic — every South African school fundraiser ever.",
      storage:"Fridge 3 days." },

    { id:"pr_chakalaka", name:"Chakalaka", emoji:"🥫", cuisine:"South African", time:30, serves:6,
      tags:["relish","spicy","veg","braai side","township"],
      ingredients:[
        {n:"Onion (finely diced)",pp:20,u:"g"},
        {n:"Garlic (minced)",pp:2,u:"g"},
        {n:"Green pepper (diced)",pp:20,u:"g"},
        {n:"Carrots (grated)",pp:30,u:"g"},
        {n:"Tinned baked beans",pp:50,u:"g"},
        {n:"Tinned tomatoes (chopped)",pp:40,u:"g"},
        {n:"Curry powder",pp:2,u:"g"},
        {n:"Paprika",pp:1,u:"g"},
        {n:"Chilli (optional)",pp:null,u:""},
        {n:"Oil",pp:5,u:"ml"},
        {n:"Salt",pp:null,u:""},
      ],
      method:["Heat oil. Fry onion until soft and beginning to colour.","Add garlic, green pepper and carrots. Cook 5 min.","Add curry powder and paprika. Stir and cook 1 min.","Add tinned tomatoes. Simmer 10 min.","Add baked beans. Simmer 5 min more. Season well.","Serve hot or cold as a braai side."],
      tip:"It improves overnight as flavours develop. Non-negotiable braai side.",
      howItFeels:"Spicy, bright, alive — it wakes up everything else on the plate.",
      storage:"Fridge 5 days. Freezer 2 months." },

    { id:"pr_bunny_chow", name:"Bunny Chow — Lamb Curry", emoji:"🍞", cuisine:"South African", time:90, serves:4,
      tags:["durban","curry","bread","street food","lamb"],
      ingredients:[
        {n:"Lamb shoulder (bone-in, chunked)",pp:200,u:"g"},
        {n:"Onion (finely diced)",pp:30,u:"g"},
        {n:"Garlic (minced)",pp:4,u:"g"},
        {n:"Ginger (grated)",pp:4,u:"g"},
        {n:"Tinned tomatoes",pp:60,u:"g"},
        {n:"Potatoes (quartered)",pp:80,u:"g"},
        {n:"Durban curry powder (hot)",pp:5,u:"g"},
        {n:"Turmeric",pp:1,u:"g"},
        {n:"Cumin seeds",pp:1,u:"g"},
        {n:"Curry leaves (fresh or dried)",pp:null,u:""},
        {n:"Oil",pp:8,u:"ml"},
        {n:"White bread loaf (quarter loaf per person)",pp:1,u:"quarter loaf"},
      ],
      method:["Heat oil. Fry cumin seeds until they pop. Add onion — cook until deep golden.","Add garlic, ginger and curry leaves. Fry 1 min.","Add curry powder and turmeric. Stir and cook 2 min.","Add lamb. Brown all over.","Add tinned tomatoes. Season well. Simmer 45 min covered.","Add potatoes. Cook uncovered 20 min more until thick.","Hollow out a quarter loaf of white bread. Fill with hot curry. Replace bread lid."],
      tip:"The curry must be thick and reduced — a watery bunny chow is a sad bunny chow. Always serve with the scooped bread for mopping.",
      howItFeels:"Street food royalty. You need napkins and you don't care.",
      storage:"Curry fridge 3 days. Always make fresh bread." },
  ]
};
// ── SHARED "COMING SOON" PLACEHOLDER (one standard for every stub screen) ──
function comingSoonHTML(emoji, title, subtitle){
  return `<div>
    <div class="header" style="background:#1a1008;border-bottom:1px solid #6a3010;">
      <button class="back-btn" onclick="set({screen:'home'})" style="color:var(--accent);">← Home</button>
      <h1 style="font-size:24px;font-weight:normal;color:var(--ink);">${emoji||'🍽️'} ${title||'Coming soon'}</h1>
    </div>
    <div class="content" style="text-align:center;padding:48px 24px;">
      <div style="font-size:54px;margin-bottom:16px;">${emoji||'🍽️'}</div>
      <div style="font-size:18px;color:var(--ink);margin-bottom:10px;">${title||'Coming soon'}</div>
      <div style="font-size:13px;color:#a8997e;line-height:1.7;max-width:320px;margin:0 auto;">${subtitle||'This part of Tinza is on the way.'}</div>
    </div>
  </div>`;
}

// ── PROFILE (Appearance: Light / Dark / Auto theme switch) ───────────
function profileHTML(){
  function seg(val,label){
    var on = (typeof THEME!=='undefined') && THEME===val;
    return '<button onclick="setTheme(\''+val+'\')" aria-pressed="'+(on?'true':'false')+'" style="flex:1;padding:11px 8px;border:none;border-radius:8px;background:'+(on?'var(--accent)':'transparent')+';color:'+(on?'#fff':'#a8997e')+';font-size:14px;font-weight:'+(on?'bold':'normal')+';cursor:pointer;font-family:Georgia,serif;">'+label+'</button>';
  }
  return `<div>
    <div class="header" style="background:#1a1008;border-bottom:1px solid #6a3010;">
      <button class="back-btn" onclick="set({screen:'home'})" style="color:var(--accent);">← Home</button>
      <h1 style="font-size:24px;font-weight:normal;color:var(--ink);">👤 Profile</h1>
    </div>
    <div class="content">
      <div onclick="tinzaDevTap()" style="font-size:11px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">Appearance</div>
      <div style="background:#161210;border:1px solid #2a1a10;border-radius:12px;padding:5px;display:flex;gap:4px;">
        ${seg('light','Light')}${seg('dark','Dark')}${seg('auto','Auto')}
      </div>
      <p style="font-size:12px;color:#8a7055;line-height:1.7;margin:10px 2px 28px;">Light keeps the warm parchment for daytime. Dark is cream on dark brown — kinder at night and won't glare in bright sun. Auto follows your phone. Covers the recipe pages today; the rest as they turn warm.</p>
      <div style="font-size:11px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">Coming soon</div>
      <div style="font-size:13px;color:#a8997e;line-height:1.7;">Your dietary preferences, ingredients to avoid, budget tiers and units will live here.</div>
    </div>
  </div>`;
}

// ── PERSISTENT BOTTOM NAV BAR (fixed, every screen) ──────────────────
function bottomBarHTML(){
  const showBack = !(S.screen==='home' && !S.viewingRecipe);
  const backBtn = showBack ? `<button onclick="goBack()" aria-label="Back" style="flex:1;background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:4px 0;"><span style="font-size:22px;color:var(--accent);line-height:1;">←</span><span style="font-size:13px;letter-spacing:0.3px;color:var(--accent);">Back</span></button>` : '';
  const tabs = [
    {screen:'home',    emoji:'🏠', label:'Home'},
    {screen:'search',  emoji:'🔍', label:'Search'},
    {screen:'mymenu',  emoji:'📋', label:'My Menu'},
    {screen:'profile', emoji:'👤', label:'Profile'},
  ];
  return `<div style="position:fixed;left:0;right:0;bottom:0;max-width:600px;margin:0 auto;z-index:150;background:#140f0a;border-top:1px solid #3a2810;display:flex;padding:6px 0 8px;">
    ${backBtn}
    ${tabs.map(t=>{
      const on = S.screen===t.screen;
      return `<button onclick="bottomBarGo('${t.screen}')" style="flex:1;background:none;border:none;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:4px 0;">
        <span style="font-size:20px;${on?'':'opacity:0.7;'}">${t.emoji}</span>
        <span style="font-size:13px;letter-spacing:0.3px;color:${on?'var(--gold)':'#7a6448'};">${t.label}</span>
      </button>`;
    }).join('')}
  </div>`;
}
function bottomBarGo(screen){
  if(screen==='home'){
    // clear navigation state only — plans/carts/sliders are left untouched
    set({screen:'home', viewingRecipe:false, eventTab:null, buffetStep:1, eventActiveRecipe:null,
         braiStep:1, braiCat:null, braaiView:'browse', wkScreen:null, wkSACulture:null, wkRecipeDetail:null,
         activeBaby:null, activeDog:null, activeCat2:null, fingerSection:null, kidsScreen:null, kidsTheme:null});
  } else {
    set({screen:screen, viewingRecipe:false, searchScope:null, searchScopeLabel:null, mealSearch:'', searchQuery:''});   // MF49/59 · bottom-nav = whole-app, fresh query
  }
}

// ── LEAVING A SEARCH SCREEN — the ONE definition ───────── ⚖️ Law 6 · census 8 ──
// TWO Back buttons live on the search screen: the header one (utils.js:246) and the
// bottom-left one (goBack). They had already drifted — the header honoured
// S.searchPrevScreen, goBack ignored it and dumped her on Home. One screen, two Backs,
// two different answers. They now call THIS, so they cannot drift again.
// BOTH screen names are live and both render through searchPageHTML(): 'search'
// (bottom-nav + Home tile + globalSearch) and the legacy 'search_results'
// (braai.js:28, spice.js:7987). Neither is dead — do not "tidy" one away.
const SEARCH_SCREENS = ['search','search_results'];
function tinzaOnSearchScreen(){
  return typeof S !== 'undefined' && SEARCH_SCREENS.indexOf(S.screen) !== -1;
}
// 🛡️ FAIL SAFE — an unset, stale or self-referential target means Home, never a loop.
// 🚪 The target is CONSUMED (set to null) on the way out, so a search done in Braai an
//    hour ago can never hijack a Back press in some other room later.
function tinzaSearchBack(){
  var to = S.searchPrevScreen;
  if(!to || SEARCH_SCREENS.indexOf(to) !== -1) to = 'home';
  set({ screen: to, _searchActiveRecipe: null, searchPrevScreen: null,
        searchQuery: '', searchResults: [], searchScope: null, searchScopeLabel: null });
}

function goBack(){
  if(typeof S!=='undefined'){
    // (0) Returned from a Makeable shelf cross-link (bakes/spice) → the jump pushed a
    //     history entry over the origin recipe, so CONSUME it; popstate restores the
    //     recipe/list you came from instead of goBack step-4 dropping you on Home. (MF28-4b)
    if(S._shelfJump && _appNavDepth > 0 && typeof history !== 'undefined'){
      try{ history.back(); return; }catch(_e){}
    }
    // (0c) COOKING MODE — Back EXITS the mode. ⚖️ §24.1, RULED 25 Jul.
    //      Cooking mode is not a place, it is a MODE a recipe is put into: full-screen,
    //      one step at a time. Walking Back through twelve steps would cost twelve presses
    //      to leave, and the twelfth would land on the recipe she was already reading.
    //      This is exactly WHY S.cookStep is NOT in navSignature() — no history entries,
    //      nothing to walk. Without this step, Back fell to (4) and dumped her on HOME
    //      from mid-recipe, mid-cook, hands covered in flour.
    if(S.cookRecipe){ set({cookRecipe:null, cookStep:0}); window.scrollTo(0,0); return; }
    // (1) Details that pushed NO history entry (budget recipe isn't in navSignature) →
    //     close via their own closer, returning to that section's own list.
    if(S._budgetActiveRecipe && typeof budgetCloseRecipe==='function'){ budgetCloseRecipe(); return; }
    // (2) Universal recipe view → closeRecipe (cross-link aware; consumes its pushed entry).
    if(S.viewingRecipe && typeof closeRecipe==='function'){ closeRecipe(); return; }
    // (2a) MF149-A · §24.6 — the two rooms whose recipe view PUSHES a history entry
    //      (mealActiveRecipe + moodActiveRecipe are both in navSignature()). They must be
    //      closed by CONSUMING that entry, never by a fresh setQuiet — which is exactly what
    //      their own closers do. Same shape as step (2)'s viewingRecipe. These sit ABOVE
    //      (2b) because (2b) is the generic setQuiet close, and it was intercepting them.
    if(S.mealActiveRecipe && typeof closeMealRecipe==='function'){ closeMealRecipe(); return; }
    if(S.moodActiveRecipe && typeof closeMoodRecipe==='function'){ closeMoodRecipe(); return; }
    // (2b) MF99 · A room's PRIVATE recipe view that pushed NO entry (not in navSignature())
    //      → close it the way that room's own Back does. Without this, Back falls through to
    //      step (4) and dumps her on HOME. ⚖️ Law 6.
    for(var _i=0; _i<SIMPLE_RECIPE_KEYS.length; _i++){
      var _k = SIMPLE_RECIPE_KEYS[_i];
      if(S[_k]){ var _p = {}; _p[_k] = null; setQuiet(_p); return; }
    }
    // (3) Deeper inside the current section (a sub-view/recipe that DID push an entry) →
    //     step back ONE level within the section via the history it created. popstate's
    //     snapshot restore brings back the exact prior sub-state.
    if(_appNavDepth > _screenRootDepth && typeof history !== 'undefined'){
      try{ history.back(); return; }catch(_e){}
    }
    // (3b) A SEARCH screen entered FROM a room → that room is the parent, not Home.
    //      braai.js, spice.js and liveSearch() have all been writing S.searchPrevScreen
    //      since MF46/MF49; goBack() simply never read it, so the bottom-left Back and the
    //      header Back on the SAME screen disagreed. ONE reader, not one fix per room.
    //      ⚖️ Law 6 · census 8.
    if(tinzaOnSearchScreen()){ tinzaSearchBack(); return; }
    // (4) At the section's ROOT screen → its logical parent is Home. Deterministic, so Back
    //     never walks history into an unrelated earlier screen (the FMF leak). (3 Jul fix)
    if(S.screen && S.screen !== 'home'){ bottomBarGo('home'); return; }
  }
  try{ history.back(); }catch(_e){}
}

// ── DEV MODE ──────────────────────────── ⚖️ Law 6 · Law 19 ──
// localhost or ?dev. The ONE definition — index.js:383 had this regex inline as a
// local `var _tinzaDev` inside adaptWorld(), which core.js could never see. Copying
// it here would have made two flags that drift apart; index.js now calls this instead.
// (Do NOT delete — MF44 · Law 19. The instrument stays; it just doesn't ship to users.)
// MF133 · DEV IS A STORED FLAG ON HER DEVICE, NEVER A URL. ⚖️ RULED 21 Jul, §17.2.
// 🩸 The `?dev` query parse is DELETED, not weakened — and it must not come back as
// `?dev=<secret>` either. A URL flag is shareable, screenshottable, guessable, survives
// being pasted into WhatsApp, and lands in Netlify's request logs. It is a password
// written on the door.
// 🛡️ FAIL CLOSED — anything other than a stored `true` is false. Fresh device,
// incognito, cleared storage → not dev. Same shape tierLevel() uses for an unknown tier.
// 🚪 THIS STAYS THE ONE DEFINITION. Nothing else may read a dev flag or invent one. ⚖️ Law 6.
// ⛔ DEV IS NOT PRO. It renders the tier switcher; the switcher sets USER_TIER;
//    tierAllows() reads USER_TIER. Three separate things, and they stay separate —
//    at launch PayFast sets the tier, and a dev flag that implied Pro would make the
//    real gate permanently untestable, and would mean Tina can never again see her
//    own app as a free user sees it. ⚖️ §17.3.
function tinzaIsDev(){
  try {
    if(/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return true;   // her own machine, no gesture needed
    return tinzaStore.getPref('dev') === true;                              // fail closed: anything else is NOT dev
  } catch(e){ return false; }
}

// MF133 · the gesture that arms dev: SEVEN taps on the Appearance heading (profileHTML).
// Seven is past accident and short of a chore. A gesture, not a typed secret — the
// tablet is where dev mode is actually needed, and typing a URL on it is the thing
// being removed. ⛔ No visible hint, label or counter: if it announces itself it is
// not hidden. ⚖️ §17.2.
var _devTaps = 0, _devTapT = 0;
function tinzaDevTap(){
  var now = Date.now();
  if(now - _devTapT > 3000) _devTaps = 0;   // a slow tap is not a gesture
  _devTapT = now;
  if(++_devTaps >= 7){
    _devTaps = 0;
    try{ tinzaStore.setPref('dev', true); }catch(e){}
    draw();
  }
}

// ── THEME (light | dark | auto) ───────────────────────────────────
// Read at load (core.js runs before utils.js's first draw()) so there's no flash.
// 'light' = parchment · 'dark' = warm-dark · 'auto' = follow the phone. Default auto.
// Reads through tinzaStore — the ONE user-state door (tinzaStore.js, loaded FIRST in
// index.html). The legacy `tinzaTheme` key was folded into preferences.theme by the
// v0→v1 migration and deleted. ⚖️ Law 6 — no direct localStorage outside the store.
var THEME = (function(){ try{ var t=tinzaStore.getPref('theme'); return (t==='light'||t==='dark'||t==='auto')?t:'auto'; }catch(e){ return 'auto'; } })();
function themeIsNight(){
  if(THEME==='dark') return true;
  if(THEME==='auto'){ try{ return matchMedia('(prefers-color-scheme: dark)').matches; }catch(e){ return false; } }
  return false;
}
function setTheme(t){ THEME=(t==='light'||t==='dark'||t==='auto')?t:'auto'; try{ tinzaStore.setPref('theme', THEME); }catch(e){} draw(); }
// In auto mode, flip live when the phone changes light/dark.
try{ if(typeof matchMedia==='function'){ matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){ if(THEME==='auto') draw(); }); } }catch(e){}

function draw(){
  // Close How It Works when tapping anywhere on page
  if(S.howItWorksOpen) {
    setTimeout(function(){
      function closeHIW(e) {
        var hiw = document.getElementById('howItWorksBlock');
        if(hiw && !hiw.contains(e.target)) {
          document.removeEventListener('click', closeHIW);
          set({howItWorksOpen:false});
        }
      }
      document.addEventListener('click', closeHIW);
    }, 100);
  }
  // Close How Portion Size Works when tapping anywhere on page
  if(S.portionHelpOpen) {
    setTimeout(function(){
      function closePH(e) {
        var ph = document.getElementById('portionHelpBlock');
        if(ph && !ph.contains(e.target)) {
          document.removeEventListener('click', closePH);
          set({portionHelpOpen:false});
        }
      }
      document.addEventListener('click', closePH);
    }, 100);
  }
  // Wire search input after draw (both the bottom-nav 'search' screen and the
  // legacy section 'search_results' screen render the same universal search page)
  if(S.screen === "search_results" || S.screen === "search") {
    setTimeout(function(){
      var el = document.getElementById("searchPageInput");
      if(el && !el._wired) {
        el._wired = true;
        el.focus();
        el.oninput = function(){ globalSearchLive(this.value); };
      }
    }, 30);
  }

  const root = document.getElementById("root");
  if(!root) return;

  const prevContext = root._lastContext||'';
  const currContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'') + (S.kidsScreen||'') + (S.kidsTheme||'');
  const sameContext = prevContext === currContext;
  const screenChanged = (root._lastScreen||'') !== S.screen;   // section change → land at top
  if(screenChanged) S._searchOwner = null;   // MF59-B · a query belongs to the screen it was typed on; on any screen change it is no longer on-screen. Runs BEFORE section content renders this pass, so searchVal() reads the nulled owner in the same draw (Law 31/33).
  if(screenChanged) S.viewingRecipe = null;     // MF95 · the RECIPE belongs to the screen it was opened on
  // Leaving World Kitchen entirely resets its plan so the count starts at 0 next visit.
  if((root._lastScreen||'') === "worldkitchen" && S.screen !== "worldkitchen"){
    S.wkPlan = []; S.wkBump = {};
    // ⚖️ §24.5 — the drill is FIVE keys and this named THREE. wkContinent/wkRegion survived
    // the exit, so re-entering from Home re-opened the last REGION (Southern Africa) instead
    // of the continent grid. ONE door now; nothing here hand-nulls the drill. ⚖️ Law 6.
    if(typeof wkResetDrill === 'function'){ wkResetDrill(); }
    else { S.wkScreen = null; S.wkContinent = null; S.wkRegion = null; S.wkDataCountry = null; S.wkDataRecipe = null; }
  }
  const scrollToRestore = screenChanged ? 0 : (root._savedScroll != null ? root._savedScroll : (sameContext ? window.scrollY : 0));
  // Stage 1 scroll-to-content: on an in-section navigation (new tab/category/list — not a quiet toggle/slider), land on the content instead of the banner
  const jumpToContent = !screenChanged && root._savedScroll == null && !sameContext;
  const openedRecipe = !!S.viewingRecipe && (root._lastVR !== ((S.viewingRecipe && S.viewingRecipe.id) || 'vr'));
  root._savedScroll = null;

  const tierBar=`<div style="background:#0f0d0a;border-bottom:2px solid #2a1f10;padding:8px 16px;">
    <div style="font-size:13px;color:#a87849;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Testing — Switch Tier:</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
      <button onclick="USER_TIER='free';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;wkResetDrill();S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='free'?'var(--accent)':'#2a1808'};background:${USER_TIER==='free'?'#2a1808':'var(--card)'};color:${USER_TIER==='free'?'var(--accent)':'#4a3020'};font-size:13px;">🆓 Free</button>
      <button onclick="USER_TIER='pro';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;wkResetDrill();S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='pro'?'#c0a020':'#181808'};background:${USER_TIER==='pro'?'#181808':'var(--card)'};color:${USER_TIER==='pro'?'var(--gold)':'#403820'};font-size:13px;">👑 Pro</button>
      <button onclick="USER_TIER='deluxe';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;wkResetDrill();S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='deluxe'?'#40c0a0':'#0a1810'};background:${USER_TIER==='deluxe'?'#0a1810':'var(--card)'};color:${USER_TIER==='deluxe'?'#40c0a0':'#204030'};font-size:13px;">💎 Deluxe</button>
    </div>
  </div>`;

  // MF133 · WHEN DEV IS ON IT SAYS SO, AND SAYING SO IS THE OFF SWITCH.
  // ⛔ A hidden flag with no visible state is how you ship a debug build. ⚖️ Law 3 —
  // the screen never lies about what it is. ⚖️ §17.2.
  // ⚠️ ON LOCALHOST THIS TAP WILL NOT MAKE THE STRIP GO AWAY, and that is CORRECT, not
  // a bug: tinzaIsDev() returns true for localhost/127.0.0.1 unconditionally (§17.2 —
  // nobody else can be on her localhost). The tap does write `dev:false`, so it takes
  // effect the moment the same browser loads the real site. Verified 21 Jul on
  // localhost:8899. ➡️ TEST THE OFF SWITCH ON tinza.netlify.app, NEVER ON LOCALHOST.
  const _devLocal = (location.hostname==='localhost' || location.hostname==='127.0.0.1');  // MF132 §2.G
  const devStrip = `<div onclick="tinzaStore.setPref('dev',false);draw();" style="background:var(--accent);color:#fff;padding:6px 16px;font-size:12px;letter-spacing:1px;text-align:center;cursor:pointer;">🔧 DEV MODE ON · ${_devLocal ? 'localhost' : 'tap to turn off'}</div>`;

  let content="";
  try{
  if(S.wkCooking && typeof wkCookingView==='function'){ content=wkCookingView(); }
  else if(S.healthCooking && typeof healthCookingView==='function'){ content=healthCookingView(); }
  else if(S.braaiCooking && typeof braaiCookingView==='function'){ content=braaiCookingView(); }
  else if(S.eventsCooking && typeof eventsCookingView==='function'){ content=eventsCookingView(); }
  else if(S.cookRecipe && typeof genericCookView==='function'){ content=genericCookView(); }
  else if(S.viewingRecipe){ content=recipeView(); }
  else if(S.screen==="home"){ content=homeHTML(); }
  else if(S.screen==="braai"){ content=braaiHTML(); }
  else if(S.screen==="search_results"){ content=searchResultsHTML(); }
  else if(S.screen==="babyapp"){ content=S.babyView==='myplan'?babyMyPlanView():S.activeBaby?babyRecipeHTML_screen():babyListHTML(); }
  else if(S.screen==="search"){ content=searchHTML(); }
  else if(S.screen==="worldkitchen"){ content=worldKitchenHTML(); }
  else if(S.screen==="feedfamily"){ content=feedingFamilyHTML(); }
  else if(S.screen==="breakfast"){ content=breakfastHTML(); }
  else if(S.screen==="lightlunch"){ content=lightlunchHTML(); }
  else if(S.screen==="supper"){ content=supperHTML(); }
  else if(S.screen==="bakes"){ content=bakesHTML(); }
  else if(S.screen==="sidesbasics"){ content=sidesbasicsHTML(); }
  else if(S.screen==="budget"){ content = tierAllows('pro') ? budgetPlannerHTML() : budgetLockPanel(); }  // MF132 §2.A — room is Pro (all filter, no badge half). One door, honest count inside.
  else if(S.screen==="ingredient"){ content=anchorIngredientHTML(); }
  else if(S.screen==="fourIngredients"){ content=fourIngredientsHTML(); }
  else if(S.screen==="mood"){ content=moodHTML(); }
  else if(S.screen==="weekplanner"){ content=comingSoonHTML("📅","Weekly Meal Planner","7-day planner coming soon"); }
  else if(S.screen==="furryapp"){ content=furryHTML(); }
  else if(S.screen==="tinyfurry"){ content=tinyFurryHTML(); }
  else if(S.screen==="smoothies"){ content=smoothiesHTML(); }
  else if(S.screen==="events"){ content=eventsHTML(); }
  else if(S.screen==="health"){ content=healthHTML(); }
  else if(S.screen==="tinyTummies"){ content=tinyTummiesHTML(); }
  else if(S.screen==="kiddies"){ content=kiddiesHTML(); }
  else if(S.screen==="spice"){ content=spiceRoomHTML(); }
  else if(S.screen==="profile"){ content=profileHTML(); }
  else if(S.screen==="mymenu"){ content=comingSoonHTML("📋","My Menu","One place for everything you've planned across all sections — with a combined shopping list. Coming soon. For now, each section keeps its own plan."); }
  else{ content=homeHTML(); }
  }catch(_err){
    console.error('[Tinza] Render error on screen "'+(S.screen||'?')+'" (tab:'+(S.eventTab||'-')+', step:'+(S.buffetStep||'-')+'):', _err);
    // DIAGNOSTIC, not a fix. The boundary already console.error'd the real cause — but a
    // tablet has no console to read, so on localhost/?dev we put the message + the first
    // stack line ON THE SCREEN, where Tina can screenshot it. Non-dev users see the
    // friendly screen, unchanged. ⚖️ Law 19 — the instrument stays, it just doesn't ship.
    var _devBlock = '';
    try {
      if(typeof tinzaIsDev === 'function' && tinzaIsDev()){
        var _esc = function(s){ return String(s == null ? '' : s)
          .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
        var _line1 = String((_err && _err.stack) || '').split('\n')[1] || '(no stack)';
        _devBlock = '<div style="margin:0 auto 18px;max-width:340px;text-align:left;background:var(--card2);'
          + 'border:1px solid var(--accent);border-radius:8px;padding:10px 12px;overflow-x:auto;">'
          + '<div style="font-size:11px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">dev · the real error</div>'
          + '<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:var(--ink);line-height:1.5;word-break:break-word;">'
          + _esc((_err && _err.message) || _err) + '</div>'
          + '<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:var(--ink-soft);line-height:1.5;margin-top:6px;word-break:break-word;">'
          + _esc(_line1.trim()) + '</div>'
          + '<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:var(--ink-soft);margin-top:6px;">screen: '
          + _esc(S.screen||'?') + ' · tab: ' + _esc(S.eventTab||'-') + ' · step: ' + _esc(S.buffetStep||'-') + '</div>'
          + '</div>';
      }
    } catch(_e2){ _devBlock = ''; }   // the boundary must NEVER throw from inside itself
    content=`<div style="padding:56px 24px;text-align:center;color:var(--ink);font-family:Georgia,serif;">
      <div style="font-size:42px;margin-bottom:12px;">🛠️</div>
      <div style="font-size:18px;margin-bottom:8px;">This part hit a snag</div>
      <div style="font-size:13px;color:#c0a0b0;line-height:1.6;max-width:320px;margin:0 auto 20px;">The <strong>${S.screen||'section'}</strong> screen couldn't finish loading, so the rest of the app stayed where it was. Head home and pick another section — nothing is lost.</div>
      ${_devBlock}
      <button onclick="set({screen:'home',viewingRecipe:false,eventTab:null,buffetStep:1,activeCake:null,cakeCat:null,eventActiveRecipe:null})" style="background:#2a1808;border:1px solid var(--accent);border-radius:20px;color:var(--gold);font-size:14px;padding:10px 24px;cursor:pointer;font-family:Georgia,serif;">← Back to Home</button>
    </div>`;
  }

  // Preserve focus + caret across re-renders so typing in inputs (e.g. search boxes) survives the redraw
  const _ae = document.activeElement;
  const _aeId = _ae && _ae.id ? _ae.id : null;
  const _aeStart = _ae ? _ae.selectionStart : null;
  const _aeEnd = _ae ? _ae.selectionEnd : null;

  // Phase 1 Warm Spice: only the gold pair (Braai + World Kitchen) is wrapped in .warm,
  // which flips the tokenised palette to parchment + Fraunces/Mulish/DM Mono. Every other
  // screen renders on the dark shell exactly as before. tierBar + bottom nav stay outside.
  const _warm = (S.screen==='braai' || S.screen==='worldkitchen' || S.screen==='health' || S.screen==='events'
    || S.screen==='feedfamily' || S.screen==='breakfast' || S.screen==='lightlunch' || S.screen==='supper' || S.screen==='bakes' || S.screen==='sidesbasics');
  // Theme: 'night' class forces dark-warm; body.theme-auto lets the @media rule follow the phone.
  const _night = themeIsNight();
  try{ document.body.classList.toggle('theme-auto', THEME==='auto'); }catch(_e){}
  const _body = _warm
    ? '<div class="warm'+(_night?' night':'')+'" style="background:var(--bg);min-height:100vh;color:var(--ink);">'+content+'</div>'
    : content;
  // MF133 · THE POINT OF THE WHOLE JOB. tierBar rendered UNCONDITIONALLY to every
  // visitor, and its 👑 Pro button sets USER_TIER='pro' — opening cost · My Plan ·
  // shopping list · the nutrition grid · dietary filters · favourites. The chef leaked
  // $2.02; this leaked the entire R90 product, and it survived precisely because it was
  // SILENT: no Rand, no error, no bill. ⚖️ §17.1 · census 24 watches this line.
  root.innerHTML = (tinzaIsDev() ? tierBar + devStrip : '') + _body + bottomBarHTML();
  document.body.style.paddingBottom = "62px";

  if(_aeId){
    const _ne = document.getElementById(_aeId);
    if(_ne){ try{ _ne.focus({preventScroll:true}); if(_aeStart!=null) _ne.setSelectionRange(_aeStart, _aeEnd); }catch(_e){} }
  }

  // Sync sliders
  const guestSlider = document.querySelector('input[type=range][min="6"]');
  if(guestSlider) guestSlider.value = S.eventGuests;
  const peopleSlider = document.querySelector('input[type=range][min="1"]');
  if(peopleSlider) peopleSlider.value = S.people;
  root._lastContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'') + (S.kidsScreen||'') + (S.kidsTheme||'');
  root._lastScreen = S.screen;
  root._lastVR = S.viewingRecipe ? (S.viewingRecipe.id || 'vr') : null;

  // ── Device-back history: push a history entry on each forward nav ──
  navInit();
  if(!_navRestoring){
    const _sig = navSignature();
    if(window._navSig !== undefined && _sig !== window._navSig){
      // §24.7 · THE PUSH DECISION. The signature changed — but did she MOVE, or did she
      // just swap a pill? navSignatureCore() answers it: if everything OUTSIDE the
      // laterals is identical, the only differing keys are laterals, so this is the SAME
      // level wearing a different filter. REPLACE the entry in place; do not push, and
      // leave _appNavDepth alone — there is no new level for Back to walk back out of.
      const _core = navSignatureCore();
      if(window._navSigCore !== undefined && _core === window._navSigCore){
        // carry the entry's saved scroll across the replace, or a lateral would silently
        // eat the list position Back is supposed to restore
        let _sc = null; try { _sc = (history.state && history.state._scroll != null) ? history.state._scroll : null; } catch(_e){}
        const _st = {tinza:true, sig:_sig, snap:navSnapshot(), rootDepth:_screenRootDepth};
        if(_sc != null) _st._scroll = _sc;
        try { history.replaceState(_st, ''); } catch(_e){}
      } else {
        // Entering a different top-level screen starts a new section → this new entry IS the
        // section root. Staying on the same screen (sub-nav) keeps the existing root depth.
        if(S.screen !== _lastNavScreen) _screenRootDepth = _appNavDepth + 1;
        try { history.pushState({tinza:true, sig:_sig, snap:navSnapshot(), rootDepth:_screenRootDepth}, ''); _appNavDepth++; } catch(_e){}
      }
      window._navSigCore = _core;
    }
    window._navSig = _sig;
    _lastNavScreen = S.screen;
  }

  if(openedRecipe){
    window.scrollTo(0, 0);
    requestAnimationFrame(()=>{ window.scrollTo(0, 0); });
  } else if(jumpToContent){
    const ct = ()=>{ const el=root.querySelector('.content'); return el ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - 8) : 0; };
    window.scrollTo(0, ct());
    requestAnimationFrame(()=>{ window.scrollTo(0, ct()); });
  } else {
    window.scrollTo(0, scrollToRestore);
    requestAnimationFrame(()=>{ window.scrollTo(0, scrollToRestore); });
  }
}

function openEvent(id,t){
  // Look up recipe from all events arrays
  const all=[
    ...EVENTS_BIG_COOKING_MAINS,...EVENTS_BIG_COOKING_SIDES,...EVENTS_BIG_COOKING_SALADS,
    ...EVENTS_STARTERS,...EVENTS_DESSERTS,...EVENTS_SAUCES,
    ...(EVENTS_FINGER_FOODS.meaty||[]),...(EVENTS_FINGER_FOODS.pastry||[]),
    ...(EVENTS_FINGER_FOODS.sweet||[]),...(EVENTS_FINGER_FOODS.veggie||[]),
    ...(EVENTS_FINGER_FOODS.savoury||[]),
  ];
  const r = all.find(x=>x.id===id);
  if(r){
    const root=document.getElementById("root");
    if(root) root._savedScroll = 0;   // open recipe scrolled to the top, not the list position
    openRecipe('events', id);   // universal opener → eventsRecipeOpts (green page, cook mode, cost box)
  }
}
function toggle(arr,id){ return arr.includes(id)?arr.filter(x=>x!==id):[...arr,id]; }
function fingerShopToggle(key){ var c=Object.assign({},S.fingerShopCart||{}); c[key]=!c[key]; setQuiet({fingerShopCart:c}); }

// Strip qualifier words so ingredients sort by their main name
// "Organic carrots (peeled)" → "carrots (peeled)"  "Fresh mint leaves" → "mint leaves"
function shopSortKey(name){
  return name
    .replace(/^(organic|fresh|frozen|dried|tinned|canned|full.fat|full cream|low.fat|low.sodium|plain|natural|unsalted|salted|lean|raw|cooked|large|medium|small|ripe|fine|finely|quality|baby)\s+/gi, '')
    .toLowerCase()
    .trim();
}
// ── TIER GATE (11 Jul) ────────────────────────────────────────────────────────
// This was `function tierAllows(t){ return true; }` — "All features unlocked" — which
// meant the Pro gate on FOOD COST, MY PLAN and the SHOPPING LIST was open to everyone.
// Rand-denominated costing IS the R50/month, and it was being given away.
// Built as a LEVEL (locked decision: 0=Free, 1=Pro, 2=Deluxe), not a boolean, so Deluxe
// has somewhere to go later without another rewrite.
var TIER_LEVEL = { free:0, pro:1, deluxe:2 };
function tierLevel(){
  if(typeof USER_TIER === 'undefined') return 0;   // unknown tier → FREE (fail closed, never Pro).
                                                   // A fresh/incognito session must land on Free.
  var lv = TIER_LEVEL[String(USER_TIER).toLowerCase()];
  return (lv == null) ? 0 : lv;
}
function tierAllows(t){
  var need = TIER_LEVEL[String(t == null ? 'free' : t).toLowerCase()];
  if(need == null) need = 0;
  return tierLevel() >= need;
}
function maxMeats(){ return tierAllows('pro') ? 99 : 2; }  // MF132 §2.H — was USER_TIER==="free"?2:99, which fails OPEN (anything not the exact string "free" → 99). Now inherits tierAllows' fail-closed door. NOT arithmetic — calcMeat/PORTION_BRAAI untouched.

function tierBadgeSmall(t){ return ""; } // No tier badges shown

// ── §7 GATE LAYER (11 Jul) — NUMBERS ARE PRO · FOOD IS FREE ────────────────────
// The ONLY three renderers allowed to emit a Rand / kcal / macro to the DOM. Every
// site routes through these; nothing renders money, calories or macros anywhere else.
// Gate = tier LEVEL via tierAllows('pro') → Deluxe(2) >= Pro(1), so Deluxe renders
// IDENTICALLY to Pro (never empty). NEVER USER_TIER==='pro'. Two lock shapes:
// INLINE (cards/rows/meta) → a small 🔒 that keeps the row; SURFACE (plan/shopping/
// nutrition/leftovers) → the full teaser panel, cloned from shoppingView (below).
var TINZA_LOCK = '<span title="Tinza Pro — R90/month" style="color:var(--accent);font-weight:700;white-space:nowrap;">🔒</span>';
function lockPanel(title, blurb){
  return '<div style="background:var(--card2);border:1px dashed var(--line);border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;">'
    + '<div style="font-size:32px;margin-bottom:8px;">🔒</div>'
    + '<div style="font-size:14px;color:var(--accent);margin-bottom:6px;font-weight:bold;">' + (title || 'Tinza Pro') + '</div>'
    + (blurb ? '<div style="font-size:13px;color:var(--ink-soft);margin-bottom:10px;line-height:1.6;">' + blurb + '</div>' : '')
    + '<div style="font-size:13px;color:var(--accent);font-weight:bold;">Unlock with Tinza Pro — R90/month</div></div>';
}
// RANDS. o.html = the site's exact Pro figure (pills / meta / cart / totals), OR pass
// o.pp + o.total (+ optional o.label, o.note) for the standard "Food cost" line.
// o.surface:true → full teaser panel on Free (My Plan, cost+shopping surfaces).
function costLine(o){
  o = o || {};
  var pro = tierAllows('pro');
  if(o.surface) return pro ? (o.html || '') : lockPanel(o.title || 'Cost', o.blurb || '');
  if(o.html != null) return pro ? o.html : (o.label != null ? (o.label + ' · ' + TINZA_LOCK) : TINZA_LOCK);
  var head = '💰 ' + (o.label != null ? o.label : 'Food cost');   // built "Food cost" line
  if(!pro) return head + ' · ' + TINZA_LOCK;
  return head + ': <b style="color:var(--green);">R' + o.pp + '</b> pp · <b style="color:var(--green);">R' + o.total + '</b> total'
    + (o.note ? '<div style="font-size:12px;color:var(--green);margin-top:5px;line-height:1.45;">' + o.note + '</div>' : '');
}
// KCAL. o.html = the site's exact Pro figure, OR o.kcal for a bare number. o.label → labelled lock.
function kcalChip(o){
  o = o || {};
  if(o.html == null && !o.kcal) return '';   // no kcal data (incl. 0) → NO chip, any tier (Spice has no calories)
  if(!tierAllows('pro')) return o.surface ? lockPanel(o.title || 'Calories', o.blurb || '') : (o.label != null ? (o.label + ' · ' + TINZA_LOCK) : TINZA_LOCK);
  return (o.html != null) ? o.html : ('' + o.kcal);
}
// MACROS. Builds the 4-cell grid (the ONE grid, replacing all three copies). Returns a BODY
// meant to sit inside a caller's box (recipeBox / section card). Free → the "📊 • • •" teaser
// body (byte-matched to the old nutritionBoxHTML teaser — sameness).
function nutritionGrid(nut){
  if(!nut || nut.kcal == null) return '';
  if(!tierAllows('pro')) return '<div style="text-align:center;padding:4px 0;"><div style="font-size:20px;color:var(--accent);letter-spacing:5px;margin-bottom:4px;">📊 • • •</div><div style="font-size:13px;color:var(--ink-soft);">Full nutrition — <strong style="color:var(--accent);">Tinza Pro R90/month</strong></div></div>';
  var cells = [['kcal', nut.kcal], ['protein', (nut.protein_g || 0) + 'g'], ['carbs', (nut.carbs_g || 0) + 'g'], ['fat', (nut.fat_g || 0) + 'g']];
  return '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;text-align:center;">'
    + cells.map(function(x){ return '<div style="background:var(--card2);border-radius:8px;padding:8px 4px;"><div style="font-size:16px;font-weight:bold;color:var(--ink);">' + x[1] + '</div><div style="font-size:13px;color:var(--ink-soft);text-transform:uppercase;">' + x[0] + '</div></div>'; }).join('')
    + '</div>';
}

function recipeBtn(type,id,returnStep){
  return `<div style="margin-top:6px;"><button style="background:var(--accent);border:none;border-radius:6px;padding:5px 12px;font-size:13px;color:#fff;cursor:pointer;font-family:Georgia,serif;" onclick="event.stopPropagation();set({viewingRecipe:{type:'${type}',id:'${id}',returnStep:${returnStep}}})">📖 See Recipe & Method</button></div>`;
}

// ══════════════════════════════════════════════════════════════
// PORTION BRAIN — unified scaling for all dish types
// Rule: the more dishes of ANY type, the smaller each portion.
// User can override up with the serving adjuster on recipe detail.
// ══════════════════════════════════════════════════════════════

// Protein scaling multipliers (Family Mix base = 350g pp)
// Applied on top of the soloG base value
function meatSpreadMult(count){
  // Braai grazing taper (Standard §6.1): each meat = its CUT base × this share.
  // Equal share per meat (same cut always matches), but the TOTAL grows with
  // variety — people graze more off the grill when there is more on it.
  // 1→100% | 2→70% each | 3→58% each | 4+→50% each
  if(count<=1) return 1.0;
  if(count===2) return 0.70;
  if(count===3) return 0.58;
  return 0.50;
}

// Sides scaling: base perPerson shrinks as more sides added
// Based on decisions doc: 1→150g, 2→120g, 3→100g, 4→85g, 5+→75g
// We express this as a fraction of the 1-side base (150g = 1.0)
function sideSpreadMult(count){
  if(count<=1) return 1.0;
  if(count===2) return 0.80;   // 120/150
  if(count===3) return 0.667;  // 100/150
  if(count===4) return 0.567;  // 85/150
  return 0.5;                  // 75/150 (5+ stays here)
}

// ── SHARED PORTION STANDARD (Standard §6.1) ────────────────────────
// One bone-aware source for per-person grams. A section derives its portion
// (and therefore its cost) from a recipe's CUT type, not a magic number.
// Bone-in is heavier because ~25–30% is bone you buy but don't eat.
//   PORTION = everyday §6.1 base · PORTION_BRAAI = the generous braai tier.
var PORTION       = { boneless:180, bonein:250, fish:160, shellfish:180, veg:200, side:150, dessert:120, starter:60, drink:0 };
var PORTION_BRAAI = { boneless:300, bonein:400, fish:280, shellfish:320, veg:250 };
function portionG(cut, braai){
  if(!cut) return 0;
  var t = braai ? (PORTION_BRAAI[cut] != null ? PORTION_BRAAI[cut] : PORTION[cut]) : PORTION[cut];
  return t || 0;
}
// Braai's per-person base: cut-derived (bone-aware) when classified, else legacy soloG.
function braaiBaseG(meat){
  var c = (typeof BRAAI_CUT !== 'undefined' && meat && BRAAI_CUT[meat.id]) ? BRAAI_CUT[meat.id] : null;
  return (c ? portionG(c, true) : 0) || (meat && meat.soloG) || 0;
}

function calcMeat(meat){
  // Portion (§6.1): cut-derived, bone-aware. Every meat (incl. kebabs) is counted
  // as RAW meat by its CUT base (BRAAI_CUT→PORTION_BRAAI) — no skewer/per-meat magic.
  // Same cut always lands on the same grams; the only difference is the grazing
  // taper when several meats share the plate. isSolo mirrors the recipe page so
  // plan rows, shopping list and recipe detail can never disagree.
  const appetiteMult = APPETITE[S.appetite].mult;
  const isSolo = !(S.selectedMeats.includes(meat.id) && S.selectedMeats.length > 1);
  const base = (typeof braaiBaseG==="function" ? braaiBaseG(meat) : (meat.soloG||0)) || 0;
  const spread = isSolo ? 1 : meatSpreadMult(S.selectedMeats.length);
  const g = Math.round(base * spread * appetiteMult * S.people);
  return {display: g>=1000?(g/1000).toFixed(1)+"kg":g+"g", grams:g};
}

function calcSide(side){
  const count = S.selectedSides.length;
  const spreadMult = sideSpreadMult(count);
  const appetiteMult = APPETITE[S.appetite].mult;
  // perPerson is the 1-side base amount — scale down with more sides
  const qty = side.perPerson * spreadMult * appetiteMult * S.people;
  if(side.unit==="g") return qty>=1000?(qty/1000).toFixed(1)+"kg":Math.round(qty)+"g";
  if(side.unit==="ml") return qty>=1000?(qty/1000).toFixed(1)+"L":Math.round(qty)+"ml";
  if(side.unit==="pcs") return Math.ceil(qty)+" pcs";
  if(side.unit==="slices"||side.unit==="slice") return Math.ceil(qty)+" slices";
  if(side.unit==="stick") return Math.ceil(qty)+" sticks";
  if(side.unit==="portion") return Math.ceil(qty)+" portions";
  if(side.unit==="wheel") return qty<0.5?"share 1 wheel":Math.ceil(qty)+" wheel(s)";
  return Math.round(qty*10)/10+" "+side.unit;
}
function calcSideCost(side){
  const mult=APPETITE[S.appetite].mult;
  const p=S.budget==="pantry"?side.pantryP:S.budget==="indulge"?side.indulgeP:side.stdP;
  return Math.round(p*mult*S.people);
}

// ── SHARED COSTING ENGINE (Standard §6.2–6.3) ──────────────────────
// One price list (PRICE_DB), one lookup. priceOf() returns the unit price +
// how the item is sold (weight | count, plus its pack once PACK_DB lands).
// costRecipe() turns amounts into the COOK number now and the pack-rounded
// BUY number the moment PACK_DB is live. Never fake a price — an unresolved
// name returns null and the caller HIDES the figure (same as World).
var PRICE_ALIAS = {
  // Suya Spice's "roasted peanut powder" is kuli-kuli — roasted peanuts, ground. NOT the
  // R769/kg defatted supplement powder (that key exists separately as "peanut butter powder").
  "roasted peanut powder": "peanuts",
  "makataan flesh": "makataan",

  // ── 11 Jul · names that pointed at NOTHING while the price sat there under another label ──
  "thick caramel": "caramel treat",          // Peppermint Crisp Tart said "thick caramel (tinned)";
                                             // Amarula Cheesecake said "caramel treat". Same tin.
  "jelly": "jelly powder",                   // Trifle said "jelly (packet)". jelly powder was priced all along.
  "day old brioche": "brioche",
  "african bird s eye chillies": "birds eye chillies",
  "sichuan sansho peppercorns": "sichuan peppercorns",

  // ── 11 Jul · costing-integrity alias pass. Synonyms of things ALREADY priced —
  // no new prices needed, and the recipe keeps its real name ("African bird's-eye
  // chillies" stays on the card; only the LOOKUP is redirected).
  "red chillies": "chilli",
  "fresh green chillies": "green chilli",
  "mixed red chillies": "chilli",
  "dried red chillies": "dried chillies",
  // NOT aliased on purpose (Tina, 11 Jul): African bird's-eye, habanero, scotch bonnet and
  // fresh cayenne are DISTINCT chillies — hotter, dearer per kg, and much smaller, so a generic
  // "chilli" alias gets both the price AND the weight wrong. They stay null until priced properly.
  "cayenne scotch bonnet powder": "cayenne pepper",
  "peppercorns": "black pepper",
  "white peppercorns": "black pepper",
  "mealie meal": "maize meal",
  "orange zest": "oranges",
  "fresh herbs": "mixed herbs",
  "gruy re": "emmental cheese",
  "almond extract": "vanilla essence",
  "almond essence": "vanilla essence",
  "vanilla or almond extract": "vanilla essence",
  "tinned cannellini beans": "butter beans",
  // ── loose-ends alias pass (26 Jun): broths→stock, brewed espresso→coffee, greens→lettuce, gruyère ──
  "dried italian herbs": "mixed herbs",   // 27 Jun · spag bol Slow Ragù + Veg versions
  "mixed greens": "lettuce",
  "vegetable broth": "low-sodium vegetable stock",
  "low sodium vegetable broth": "low-sodium vegetable stock",
  "low sodium broth": "stock",
  "bone broth homemade or low sodium": "low-sodium bone broth",
  "strong espresso chilled": "coffee",
  "fresh espresso cooled": "coffee",
  "gruy re or emmental grated fresh": "emmental cheese",
  // ── E1 alias pass · Tina-confirmed (lamb=stewing/neck per cut guide; nuts=mixed; black=red kidney) ──
  "lamb": "lamb neck",
  "nuts": "mixed nuts",
  "black beans canned drained": "red kidney beans",
  "canned black beans drained": "red kidney beans",

  // ── E1 price-integrity alias pass (26 Jun) — point names at existing priced keys ──
  "oil": "sunflower oil",
  "cooking oil": "sunflower oil",
  "oil for deep frying": "sunflower oil",

  // ── 1 Jul · SUPPER versions — truthful display names → priced keys ──
  "meat free sausages": "plant-based sausage",   // veg wors roll / bean chilli dogs (priceClean drops the hyphen)
  "meat free sausage": "plant-based sausage",
  "soya boerewors": "plant-based sausage",
  "veg dogs": "plant-based sausage",
  "instant mash": "potatoes",                    // budget convenience; cross-links to sb-mash
  "oven chips": "slap chips",                     // budget convenience; cross-links to sb-chips
  "oil for browning": "sunflower oil",
  "neutral oil": "sunflower oil",
  "neutral oil sunflower or grapeseed 70": "sunflower oil",
  "neutral oil sunflower": "sunflower oil",
  "neutral oil sunflower fridge cold": "sunflower oil",
  "sunflower or grapeseed oil": "sunflower oil",
  "sunflower or macadamia oil": "sunflower oil",
  "flour for sauce": "cake flour",
  "flour for gravy": "cake flour",
  "flour for dusting shanks": "cake flour",
  "b schamel flour": "cake flour",
  "linguine": "pasta",
  "fettuccine": "pasta",
  "rigatoni": "pasta",
  "tagliatelle": "pasta",
  "lasagne sheets": "pasta",
  "lasagna sheets": "pasta",
  "cannelloni tubes": "pasta",
  "burger buns": "hamburger rolls",
  "soft roll": "hamburger rolls",
  "hot dog roll": "hot dog rolls",
  "long roll": "hot dog rolls",
  "samosa pastry": "samoosa pur",
  "samoosa pastry strips": "samoosa pur",
  "balsamic reduction": "balsamic glaze",
  "vanilla bean paste": "vanilla extract",
  "tortilla chips": "tortillas",
  "tortilla wrap": "tortillas",
  "vegan mayo": "mayonnaise",
  "carrot julienned": "carrots",
  "carrot sliced thin": "carrots",
  "pear": "pears",
  "pear sliced": "pears",

  "chips":"potato",
  // MF28 CALL2: "lamb chops"→braai chops alias DELETED — a category, not a buy-name (Law 16). Method tick-list; fails loud until named.
  "fries":"potato",
  "flatbread":"bread",
  "crayfish":"prawns",
  "prawn meat":"prawns",
  "gherkins":"pickles",
  "gherkin":"pickles",
  "berbere":"garam masala",
  "lime juice":"lemon juice",
  "bay leaf":"bay leaves",
  "apple":"apples",
  "grated coconut":"coconut flakes",
  "sultanas":"raisins",
  "stewing lamb shoulder or neck":"lamb potjiekos",
  "zucchini":"baby marrow",
  "courgette":"baby marrow",
  "aubergine":"brinjal",
  "eggplant":"brinjal",
  "oregano":"origanum",
  "marjoram":"origanum",
  "plain flour":"cake flour",
  "all purpose flour":"cake flour",
  "spanspek":"melon",
  "shrimp":"prawns",
  "prawn":"prawns",
  "wine":"white wine",
  "ketchup":"tomato sauce",
  "mayo":"mayonnaise",
  "vanilla":"vanilla essence",
  "filo":"phyllo pastry",
  "filo pastry":"phyllo pastry",
  "chicken stock":"stock",
  "vegetable stock":"stock",
  "veg stock":"stock",
  "broth":"stock",
  "stewing lamb":"lamb potjiekos",
  // MF28 R4: "lamb shoulder"→lamb neck DELETED (double-alias; mutton copy also removed). 1 line "Lamb shoulder (bone-in, chunked)" now fails loud → tick-list.
  "lamb pieces":"lamb neck",
  // MF28 12 Jul (SIGNED): reconcile — one product, one price. Aliases (not deletes) so nothing silently falls back.
  "lamb leg":"leg of lamb","lamb roast":"leg of lamb","lamb ribs":"lamb riblets",
  "caster sugar":"castor sugar",   // spelling variant → the R84 fine-milled key (plain sugar is R35)
  "mince":"beef mince","beef or lamb mince":"beef mince",   // MF28: deleted lamb mince→beef mince (the 2.2x-under lie; real key R215)
  "fish":"hake","white fish":"hake","firm white fish":"hake","firm white fish hake":"hake",
  "cheese":"cheddar","cheddar cheese":"cheddar",
  "flour":"cake flour","self raising flour":"cake flour","flour for dusting":"cake flour",
  "carrot":"carrots","potatoes":"potato","yoghurt":"yoghurt","plain yoghurt":"yoghurt",
  "raw peanuts":"peanuts","rolled oats":"oats","frozen berries":"frozen blueberries","linseed":"flaxseed",
  // "full-cream milk" must price as MILK, not CREAM (the longest-word match picks
  // "cream" out of "full cream milk" → ~7x overcharge). Fixes Risalamande + Amasi ×2.
  "full cream milk":"milk","full-cream milk":"milk","full fat milk":"milk","whole milk":"milk",
  "baking soda":"bicarbonate of soda","bicarb":"bicarbonate of soda",
  "coconut":"desiccated coconut","niter kibbeh":"ghee","amaranth leaves":"spinach","roasted flour":"cake flour","broad beans":"dried fava beans","fish stock":"stock","flour-based dough":"cake flour","pastry dough":"shortcrust pastry","maize kernels":"sweetcorn","merguez":"boerewors","grated cheese":"cheddar","dried mloukhia powder":"spinach","curry spices":"curry powder","ground crayfish":"prawns","dried shrimp":"prawns","kontomire":"spinach","ground cashews":"cashew nuts","cashew":"cashew nuts","ground peanuts":"peanuts","peanut":"peanuts","groundnut":"peanuts","peppermint essence":"vanilla essence","rose water":"vanilla essence","dried apricot":"dried apricots","stock powder":"stock","vegetable stock powder":"stock","beef stock powder":"stock","chicken stock powder":"stock","roasted maize kernels":"sweetcorn","sorghum grains":"sorghum meal","wors":"boerewors","white sauce":"milk","black peppercorns":"black pepper","short grain rice":"rice","rabbit":"chicken","rabbit meat":"chicken","bacalhau":"salted snoek","lamb cutlets":"leg of lamb","ground almonds":"almonds","roasted red peppers":"red pepper","padron peppers":"green pepper","lemon soda":"soda water","lager":"beer","lager beer":"beer","espresso":"coffee","short pasta":"macaroni","green peppers":"green pepper","chicken heart":"chicken hearts","beef liver":"chicken livers","low-sodium chicken broth":"chicken broth","flat pasta":"macaroni","orzo pasta":"macaroni","warqa pastry":"phyllo pastry","sheet warqa pastry":"phyllo pastry","meaty beef bones":"beef bones","pig s trotters":"pork bones","pork trotters":"pork bones","white fish bones and heads":"fish frames","white fish bones and heads gills removed":"fish frames","chicken carcasses necks and wings":"chicken frames","garlic-ginger paste":"ginger-garlic paste","ginger garlic paste":"ginger-garlic paste","ginger and garlic paste":"ginger-garlic paste",
  // World Kitchen gap aliases (15 Jun) — every target was verified present in
  // PRICE_DB, so these use a REAL substitute price, never an invented rand.
  "lamb cubes":"lamb neck","bell pepper":"green pepper","red bell pepper":"green pepper",
  "scotch bonnet":"chilli","scotch bonnet pepper":"chilli","maize flour":"maize meal",
  "corn flour":"maize meal","gram flour":"cake flour","palm oil":"sunflower oil",
  "peanut oil":"sunflower oil","sweet wine":"white wine","port wine":"red wine",
  "niter kibbeh or oil":"ghee",
  // World Kitchen exotic aliases (16 Jun) — every target verified present in
  // PRICE_DB (real substitute price, never invented). egusi now -> pumpkin seeds
  // (priced today); argan oil -> existing sesame oil (alias-only, no price added).
  "ground egusi seeds":"pumpkin seeds","biscuits":"marie biscuits","biscuit crumbs":"marie biscuits",
  "swiss chard":"spinach","steak":"beef","beans":"sugar beans",   // MF28: deleted dead black beans→sugar beans (real key R50 wins)
  "brown beans":"sugar beans","peeled beans":"sugar beans","white beans":"butter beans",
  "cod":"hake","chouri o":"chorizo","collard greens or kale":"kale",   // MF28: deleted goat meat→mutton (wrong animal)
  "chopped collard greens":"kale","buffalo curd":"double cream yoghurt","molokhia":"spinach",
  "molokhia leaves":"spinach","injera":"teff flour","torn injera":"teff flour",
  "shiro powder":"chickpea flour","argan oil":"sesame oil","minced meat":"beef","cooked meat":"pork",
  "cured meat":"smoked pork neck","cured meats":"smoked pork neck","white fish fillets":"basa",
  "white fish fillet":"basa","firm white fish fillets":"basa","dogfish":"basa","perch fillets":"basa",
  "vendace fish":"basa","carp fish":"basa","mixed fish":"basa",
  // MF28: deleted "caramel"→condensed milk (unbuyable flavour word) + "caramel treat"→condensed milk (real key R125 wins)
  "breadcrumb":"breadcrumbs",
  "burger bun":"hamburger rolls",
  "cornstarch":"cornflour",
  "whole grain flour":"cake flour",
  "whole wheat flour":"cake flour",
  "atta":"cake flour",
  "bread flour":"cake flour",
  "phyllo sheet":"phyllo pastry",
  "phyllo sheets":"phyllo pastry",
  "phyllo dough":"phyllo pastry",
  "malsouka":"phyllo pastry",
  "warqa":"phyllo pastry",
  "kunafa":"phyllo pastry",
  "kataifi":"phyllo pastry",
  "shredded phyllo":"phyllo pastry",
  "pastry wrappers":"samoosa pur",
  "pastry shell":"puff pastry",
  "tart shells":"puff pastry",
  "shortcrust pastry base":"puff pastry",
  "flour based dough":"puff pastry",
  "raclette":"gruyere cheese",
  "sulguni":"halloumi cheese",
  "twarog":"cottage cheese",
  "quark":"cottage cheese",
  "curd cheese":"cottage cheese",
  "fresh ayib":"cottage cheese",
  "whey cheese":"cottage cheese",
  "bryndza":"feta",
  "orzo":"pasta",
  "vermicelli":"pasta",
  "olive":"olives",
  "squid":"calamari rings",
  "sardines":"tinned sardines",
  "octopus":"calamari rings",
  "cooked octopus":"calamari rings",
  "clams":"mussels",
  // MF28: deleted "mackerel"→tinned sardines (not mackerel; real keys "mackerel tinned"/"mackerel frozen")
  "sea bass":"basa",
  "reindeer meat":"beef",
  "smoked fish or shrimp":"smoked fish",
  "fresh crab pieces":"crab",
  "corn dough":"maize meal",
  "fermented corn dough":"maize meal",
  "cassava dough":"cassava",
  "sour rye starter":"rye flour",
  "almond paste":"marzipan",
  "green plantain":"plantain",
  "green plantains":"plantain",
  "ripe plantain":"plantain",
  "fried ripe plantain":"plantain",
  "cassava root":"cassava",
  "date paste":"dates",
  "pitted dates":"dates",
  "plum":"plums",
  "sour plums":"plums",
  "green plums":"plums",
  "dried plums":"prunes",
  "grape leaves":"vine leaves",
  "wheat":"wheat berries",
  "buckwheat groats":"buckwheat",
  "icing":"icing sugar",
  "candied peel":"candied fruit",
  "mixed peel":"candied fruit",
  "palm soup base":"palm nut extract",
  "veal cutlet":"veal",
  "veal escalope":"veal",
  "veal schnitzel":"veal",
  "veal shin":"veal",
  "veal osso buco":"veal",
  "sukuma wiki":"kale",
  "amaranth":"spinach",
  "wild greens":"spinach",
  "greens":"spinach",
  "oil for frying":"sunflower oil",
  "suckling pig":"pork",
  "dried fava":"butter beans",
  "green gram":"lentils",
  "sprouted beans":"lentils",
  "gelatine":"gelatin",
  "powdered gelatin":"gelatin",
  "gelatine powder":"gelatin",
  "leaf gelatin":"gelatin",
  "gelatin sheets":"gelatin",
  "gelatin leaves":"gelatin",
  "instant coffee":"coffee",
  "ground coffee":"coffee",
  "filter coffee":"coffee",
  "tea bags":"tea",
  "tea bag":"tea",
  "black tea":"tea",
  "green tea":"tea",
  "fennel seeds":"fennel seed",
  "maizena":"cornflour",
  "starch":"cornflour",
  "corn starch":"cornflour",
  "potato starch":"cornflour",
  "tapioca starch":"cornflour",
  "garlic cloves":"garlic","garlic clove":"garlic",

};

// ── AVG WEIGHT (g per unit) — the "costing brain" from TINZA_AVG_WEIGHT_DB (locked).
// Lets the engine convert a recipe WEIGHT into whole units for count-priced items
// (avocado, lemon, etc. are sold each), so grams cost at the per-gram rate (green =
// exact food cost) and the trolley rounds up to whole units (gold = shop spend).
// Without this, "80 g avocado" was read as "80 avocados". Keyed by priceOf() key.
var AVG_WEIGHT_G = {
  // ── 11 Jul · costing-integrity ────────────────────────────────────────────────
  // These are priced per-COUNT in PRICE_DB but had no average weight, so a recipe
  // written in GRAMS had its gram number read as a COUNT OF WHOLE ITEMS.
  // Thai Green Curry Paste's 25g of chillies was billing for 25 whole chillies (R25).
  // 85 ingredient lines app-wide, all OVER-charging. No card edits needed — just weights.
  "garlic cloves":5, "garlic clove":5,      // one clove
  "green chilli":15, "green chillies":15, chilli:15, chillies:15,

  avocado:200, lemon:100, lime:70, apple:150, banana:120,
  tomato:120, onion:150, "green pepper":150, "red pepper":150, carrot:80,
  "corn on the cob":200, corn:200, mielie:200, garlic:50, egg:58,
  "hamburger roll":65, "burger buns":65, "hot-dog roll":50, vienna:30,
  "russian sausage":90, tortilla:60, "large tortilla":60,

  // ══ MF136 · 21 Jul · COMPLETE THE TABLE ═════════════════════════════════════
  // Every count-priced PRICE_DB key (`<name>_each`) MUST have a weight here, or
  // costRecipe cannot convert an authored gram amount and now refuses to price it.
  // Census 22 asserts the set is complete. Was 28 entries against 49 keys.
  //
  // 🩸 SOURCE IS RECORDED PER KEY. Three classes, and only two are repo-derived:
  //   [A] synonym of an entry already in this table (strongest — Tina authored it)
  //   [B] derived from PACK_DB: "white loaf" is size 700, and each bread key's
  //       PACK_DB ladder is its slices-per-loaf, so 700 / slices = one slice
  //   [C] standard reference weight. NOT verified against a live source in this
  //       session, and NOT derived from anything in the repo. ⚠️ CONFIRM THESE.
  //
  // ⛔ A METHOD I TRIED AND REJECTED: deriving weight from PRICE_DB as
  // (price_each / price_per_kg) x 1000. It reproduces only 4 of the 7 known keys
  // and returns absurdities — lemon 1000g, eggs 1000g, bay leaves 0g — because the
  // per-kg and per-each prices are not the same product. Do not revive it.

  // ── [A] synonyms of entries above ──
  eggs:58,                       // = egg 58
  "burger bun":65,               // = burger buns 65
  chillis:15, "small chilli":15, // = chilli 15  ⚠️ "small" implies less; kept equal, conservative
  tortillas:60, "tortilla wrap":60,   // = tortilla / large tortilla 60
  "smoked viennas":30,           // = vienna 30
  "hot dog sausages":30,         // = vienna 30 — same PRICE_DB _each (R3.54), same product

  // ── [B] derived from PACK_DB: 700 g white loaf / slices-per-loaf ladder ──
  "white bread":32,              // 700 / 22 slices
  "brown bread":32,              // 700 / 22
  "wholewheat bread":32,         // 700 / 22
  "thick white bread":44,        // 700 / 16
  "sourdough bread":50,          // 700 / 14
  "rye bread":39,                // 700 / 18
  "bread slice":32, "bread slices":32,          // = white bread
  "unsliced white loaf":700,     // PACK_DB "white loaf" { size: 700 }
  // ⚠️ the 700 g loaf mass is PACK_DB's white loaf, applied across bread types.
  //    A rye or sourdough loaf is not always 700 g. Flagged, not hidden.

  // ── [C] standard reference. NOT repo-derived. CONFIRM BEFORE TRUSTING. ──
  "bread roll":60, "bread rolls":60,
  "portuguese roll":60, "portuguese rolls":60,
  pita:60, "pita bread":60, "pita breads":60,
  flatbread:90, flatbreads:90,   // R12.50 each — a large naan/roti-style, not a pita
  "corn tortillas":30,           // smaller than a wheat tortilla
  baguette:250, "small baguette or roll":80,
  roti:60,
  "pizza base":250,
  granadilla:35,
  wafer:5, "wafer shell":5, "wafer shells":5,

  // ⚠️ BAY LEAVES — THIS OVERRIDES AN EARLIER IN-CODE RULING. FLAGGED, NOT SLIPPED IN.
  // The old comment read: "bay leaves deliberately NOT listed: a card saying '1g bay
  // leaves' means ONE LEAF, not five. Adding a weight there would over-count them."
  // That reasoning stands as CONTENT, but the omission is no longer survivable: with
  // the bridge now mandatory, a missing weight makes the ingredient UNPRICED, which
  // drops recipe coverage and can hide a whole card's price (Law 20). So the key must
  // exist. 0.2 g is the physical weight of a dried bay leaf — AVG_WEIGHT_G is a table
  // of physical weights, and putting a non-physical number in it to paper over an
  // authoring habit is the kind of lie that bites later.
  // 🩸 CONSEQUENCE, STATED: "2g bay leaves" now reads as 10 leaves (R1.50), not 2
  // (R0.30). Pennies either way, exactly as the original comment said — but Tina rules
  // whether the fix is this weight or re-authoring those cards to "2 leaves".
  "bay leaves":0.2, "bay leaf":0.2
};
// recipe unit → grams (null if not a weight/volume unit, e.g. 'each'/'egg')
function unitToGrams(qty, unit){
  if(qty==null) return null;
  var u = String(unit==null?'':unit).trim().toLowerCase();   // was CASE-SENSITIVE: "L" (every stock's water) returned null
  if(u==='g'||u==='ml') return qty;
  if(u==='kg'||u==='l') return qty*1000;
  // 11 Jul · kitchen units that were silently costing R0. Approximate BY DESIGN — an
  // approximate cost beats a confident zero. New cards should still use g/ml per the
  // Ingredient Standard; this is a safety net, not a licence.
  // NOT listed on purpose: 'egg', 'each', 'yolk', 'slice', 'clove', '' — those must fall
  // through to null so the COUNT path handles them (and a yolk keeps costing a whole egg).
  var KITCHEN = { tsp:5, tbsp:15, pinch:0.5, squeeze:5, cup:240, stick:3 };
  if(KITCHEN[u]!=null) return qty*KITCHEN[u];
  return null;
}

function priceClean(name){
  // 11 Jul · costing-integrity fix. The old version FLATTENED parentheses into the key
  // ("lemons (zest and juice)" → "lemons zest and juice" → no match) and hard-split on "/",
  // throwing away the half that might have matched. It now only DROPS the parenthetical.
  // Nothing else is destroyed here — priceOf() retries narrower variants instead, so a name
  // like "chicken carcasses, necks and wings" still gets its full-string shot at the DB first.
  return String(name||'').toLowerCase()
    .replace(/\([^)]*\)/g,' ')
    .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
}
// The narrower fallbacks, tried in order and ONLY if the full name found nothing.
function priceVariants(name){
  var raw = String(name||'').toLowerCase().replace(/\([^)]*\)/g,' ');
  var v = [];
  if(raw.indexOf(',')>-1) v.push(raw.split(',')[0]);   // "rhubarb, chopped"  → "rhubarb"
  if(raw.indexOf('/')>-1){                              // "cassia / cinnamon" → both halves
    raw.split('/').forEach(function(p){ v.push(p); });
  }
  return v.map(priceClean).filter(function(x){ return x; });
}
// → { key, price, per:'weight'|'count', pack } or null
// ── MF28 L2 · ANIMAL-COLLISION GUARD (one door — every resolver calls this) ─────────
// A plant/identity-qualified name that resolves to a BARE animal noun is a refund
// (almond→milk, nut→butter, soya→mince). FAIL LOUD: block it → the resolver returns
// null → the ingredient drops into the "N/M ingredients priced" honesty line. It is
// NOT an error; it is the feature that makes every OTHER rand on the screen believable.
// Set = confirmed 9 + insurance 3 (mince/bacon/sausage). Dry-run over all rooms: the
// candidate words chicken/beef/egg/stock/broth/fish were TRIMMED — they false-positived
// on "vegetable stock", "chicken or vegetable broth", "egg noodles" (correct answers).
var L2_ANIMAL = { milk:1, butter:1, cheese:1, cream:1, yoghurt:1, yogurt:1, buttermilk:1, ghee:1, honey:1, mince:1, bacon:1, sausage:1 };
var L2_PLANT  = /\b(almond|oat|soy|soya|cashew|coconut|rice|hemp|pea|nut|vegan|plant|flax|chia|tofu|tempeh|seitan|jackfruit|aquafaba)\b/;
function l2Blocks(name, key){
  if(!key || !L2_ANIMAL[key]) return false;                 // key isn't a bare animal noun → never fires
  var n = (typeof priceClean==='function') ? priceClean(name) : String(name||'').toLowerCase();
  if(n === key || n === key + 's') return false;            // the name literally IS the animal → legit purchase
  return L2_PLANT.test(n);                                   // plant qualifier next to an animal price → block
}
function priceOf(name){
  var hit = _priceLookup(priceClean(name));
  if(hit) return l2Blocks(name, hit.key) ? null : hit;
  var vs = priceVariants(name);          // full name failed → try narrower readings of it
  for(var i=0;i<vs.length;i++){ hit = _priceLookup(vs[i]); if(hit) return l2Blocks(name, hit.key) ? null : hit; }
  return null;
}
function _priceLookup(n){
  if(typeof PRICE_DB==='undefined') return null;
  if(!n) return null;
  var pk = (typeof PACK_DB!=='undefined' && PACK_DB[n]) ? PACK_DB[n] : null;
  function out(key,price,per){ return { key:key, price:price, per:per, pack: pk || ((typeof PACK_DB!=='undefined' && PACK_DB[key]) ? PACK_DB[key] : null) }; }
  if(/\beggs?\b/.test(n)) return out('egg',(PRICE_DB['eggs_each']||PRICE_DB['eggs']||3.7),'count');
  // items sold by the unit carry a "<name>_each" key → price per unit, count up (lemon, etc.)
  if(PRICE_DB[n+'_each']!=null) return out(n,PRICE_DB[n+'_each'],'count');
  if(n.slice(-1)==='s' && PRICE_DB[n.slice(0,-1)+'_each']!=null) return out(n.slice(0,-1),PRICE_DB[n.slice(0,-1)+'_each'],'count');
  if(PRICE_DB[n]!=null) return out(n,PRICE_DB[n],'weight');
  if(n.slice(-1)==='s' && PRICE_DB[n.slice(0,-1)]!=null) return out(n.slice(0,-1),PRICE_DB[n.slice(0,-1)],'weight');
  if(PRICE_ALIAS[n] && PRICE_DB[PRICE_ALIAS[n]]!=null) return out(PRICE_ALIAS[n],PRICE_DB[PRICE_ALIAS[n]],'weight');
  var n2 = n.replace(/\b(fresh|dried|frozen|ground|chopped|sliced|diced|minced|grated|cubed|crushed|raw|cooked|peeled)\b/g,' ').replace(/\s+/g,' ').trim();
  if(n2 && n2!==n){
    if(PRICE_DB[n2]!=null) return out(n2,PRICE_DB[n2],'weight');
    if(n2.slice(-1)==='s' && PRICE_DB[n2.slice(0,-1)]!=null) return out(n2.slice(0,-1),PRICE_DB[n2.slice(0,-1)],'weight');
    if(PRICE_ALIAS[n2] && PRICE_DB[PRICE_ALIAS[n2]]!=null) return out(PRICE_ALIAS[n2],PRICE_DB[PRICE_ALIAS[n2]],'weight');
  }
  // 11 Jul · the resolver only ever de-pluralised ONE way (plural→singular), so
  // "unwaxed lemons" missed the priced key "lemon" and "orange zest" missed "oranges".
  // Try singular→plural too, and de-pluralise the string before the word-match sweep.
  if(PRICE_DB[n+'s']!=null) return out(n+'s',PRICE_DB[n+'s'],'weight');
  if(n2 && PRICE_DB[n2+'s']!=null) return out(n2+'s',PRICE_DB[n2+'s'],'weight');
  function depl(x){ return x.replace(/\b(\w{3,}?)ies\b/g,'$1y').replace(/\b(\w{3,}?)s\b/g,'$1'); }
  var n3 = depl(n), n4 = n2 ? depl(n2) : '';
  if(n3!==n && PRICE_DB[n3]!=null) return out(n3,PRICE_DB[n3],'weight');
  if(n3!==n && PRICE_DB[n3+'_each']!=null) return out(n3,PRICE_DB[n3+'_each'],'count');
  if(n4 && PRICE_DB[n4]!=null) return out(n4,PRICE_DB[n4],'weight');
  var best=null;
  for(var k in PRICE_DB){
    if(typeof PRICE_DB[k]!=='number') continue;
    var re = new RegExp('\\b'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b');
    if((re.test(n) || (n2 && re.test(n2)) || re.test(n3) || (n4 && re.test(n4))) && (!best || k.length>best.length)) best=k;
  }
  if(best) return out(best,PRICE_DB[best],'weight');
  return null;
}
// cost a list of {name, qty, unit:'g'|'kg'|'ml'|'l'} for n servings.
// → { cook, buy, priced, missing[] }. buy === cook until PACK_DB exists.
// ══ MF124 · THE ONE COSTING ENGINE ══════════════════ 21 Jul · Law 6 ══
// 🩸 wkCostRecipe() and mealsCostPP() ARE DELETED. They were two more copies of this
// arithmetic, and BOTH lacked the count->weight bridge below, so "100g apple" costed as
// ceil(100) x R5 = R500. Bircher Muesli shipped at R510 against a true R13.63.
// ⛔ DO NOT WRITE A THIRD. If a surface needs different SKIP rules (WK drops water,
// Meals drops pantry) it filters its own items and calls THIS. Skip rules are the
// caller's; the arithmetic is ours.
//
// `lookup` is the NAME->PRICE resolver, defaulting to priceOf(). World Kitchen passes
// wkPriceLookup, which carries WK_ALIAS ("veg oil"->sunflower oil) and a stock/broth
// guard that priceOf does not. Measured 21 Jul: forcing WK onto priceOf flips the 0.8
// coverage gate on 24 records — ethiopia-ayib goes 100% -> 0% and LOSES its price
// entirely. That is a Law 20 harm, and collapsing the two RESOLVERS is a different job
// from collapsing the two ENGINES. One arithmetic now; one resolver is still owed.
// ── THE ONE PRICED LINE ────────────────────────────────────── MF124 · Law 6 ──
// The whole costing bug lived in FOUR copies of this six-line calculation, and three
// of them were missing the count→weight branch. There is now exactly one copy, and
// every caller — costRecipe() below, buildPlanData()'s lineCook() — goes through it.
// Returns { cook, buy } in rand, or NULL when the line cannot be honestly priced.
// ⛔ If you need different SKIP rules, filter your items BEFORE you call. Do not
// copy this function. That is how R510 Bircher Muesli happened.
function costOneLine(pr, qty, unit){
  if(!pr || qty==null) return null;
  if(pr.per==='count'){
    var gC = unitToGrams(qty, unit);
    if(gC!=null){
      // A WEIGHT was authored for an each-priced item ("100g apple"). It MUST go
      // through the average unit weight. ⛔ NEVER fall through to ceil(qty)*price:
      // that reads 100 GRAMS as 100 APPLES and is the whole MF124 bug.
      var avgG = AVG_WEIGHT_G[pr.key];
      // ⚖️ Law 45 · UNKNOWN IS NOT A NUMBER. No average weight = we cannot convert,
      // so we say so and the surface hides the figure. A wrong price is worse than
      // no price (Law 20). Census 22 keeps AVG_WEIGHT_G complete for every
      // count-priced PRICE_DB key, which makes this branch unreachable.
      if(!avgG) return null;
      var unitsC = gC / avgG;
      return { cook: unitsC * pr.price,                  // exact food cost (green)
               buy:  Math.ceil(unitsC) * pr.price };     // whole units (gold)
    }
    var whole = Math.ceil(qty) * pr.price;               // a genuine COUNT ("2 lemons")
    return { cook: whole, buy: whole };
  }
  // 11 Jul — this used to be a SECOND, hardcoded copy of the unit table (g/kg/ml/l only),
  // so "squeeze", "tsp", "tbsp", "pinch" and capital "L" all fell into missing[] even
  // though their price resolved perfectly. One unit table now, in unitToGrams().
  var gW = unitToGrams(qty, unit);
  if(gW==null) return null;
  var w = (gW/1000)*pr.price;
  return { cook: w, buy: w };
}

function costRecipe(items,n,lookup){
  n = n||1; var cook=0, buy=0, priced=0, missing=[];
  var _look = (typeof lookup==='function') ? lookup : priceOf;
  (items||[]).forEach(function(it){
    if(it==null || it.qty==null) return;
    var pr = _look(it.name);
    if(!pr){ missing.push(it.name); return; }
    var q = it.qty*n;
    var line = costOneLine(pr, q, it.unit);
    if(!line){ missing.push(it.name); return; }
    var c = line.cook, b = line.buy;
    cook += c; priced++;
    if(pr.pack && pr.pack.size && pr.per!=='count'){
      var need = unitToGrams(q, it.unit); if(need==null) need = q;
      var packs = Math.ceil(need/pr.pack.size);
      buy += packs*(pr.pack.price!=null ? pr.pack.price : (pr.pack.size/1000)*pr.price);
    } else { buy += b; }
  });
  return { cook:Math.round(cook), buy:Math.round(buy), priced:priced, missing:missing };
}
// one weight-priced protein → exact cost per person (Braai's meat hook)
function proteinCostPP(name, gramsPP){
  var pr = priceOf(name);
  if(!pr || pr.per!=='weight' || !gramsPP) return null;
  return Math.round((gramsPP/1000)*pr.price);
}

function normIngredientKey(name){
  return name.toLowerCase()
    .replace(/^(organic|fresh|frozen|dried|large|medium|small|baby|whole|raw|cooked|crushed|sliced|chopped|diced|minced|grated|peeled)\s+/g,'')
    .replace(/\s+(organic|fresh|frozen|dried|large|medium|small|baby|whole|raw|cooked|crushed|sliced|chopped|diced|minced|grated|peeled)$/g,'')
    .replace(/\s*\(.*?\)/g,'')
    .replace(/[^a-z0-9\s]/g,'')
    .replace(/\s+/g,' ')
    .trim();
}

function aisleCategory(name){
  const n = name.toLowerCase();
  if(/\b(black pepper|white pepper|ground pepper|peppercorns?|braai (salt|spice)|mixed spice|masala|garam)\b/.test(n)) return '🥫 Pantry';
  if(/\b(beef|lamb|pork|chicken|boerewors|wors|mince|steak|rib|fillet|brisket|sosatie|kudu|game|fish|prawn|calamari|mussel|tuna|salmon|sardine|pilchard|anchovy|sausages?|kebab|espetada|loin chop|rib chop|neck|chuck|biltong)\b/.test(n)) return '🥩 Meat & Fish';
  if(/\b(egg|milk|cream|butter|yoghurt|yogurt|cheese|halloumi|feta|mozzarella)\b/.test(n)) return '🥛 Dairy & Eggs';
  if(/\b(onion|garlic|tomato|potato|carrot|brinjal|pepper|courgette|leek|celery|cabbage|spinach|kale|lettuce|mushroom|butternut|pumpkin|sweet potato|broccoli|cauliflower|aubergine|cucumber|spring onion|parsley|coriander|basil|rosemary|thyme|sage|mint|dill|chilli|ginger|lemon|lime|avocado|corn|mealies|peas)\b/.test(n)) return '🥦 Fruit & Veg';
  if(/\b(oil|flour|sugar|salt|vinegar|honey|mustard|soy|worcestershire|balsamic|cornflour|bread|bun|roll|pasta|rice|noodle|maize meal|couscous|oats|lentil|chickpea|tomato paste|stock|cube|coconut|jam|chutney|curry|cumin|paprika|turmeric|cinnamon|clove|nutmeg|herb|spice|breadcrumb|panko|almond|walnut|peanut|sesame|tahini|hot sauce|basting|marinade|rub|braai spice|seasoning|cayenne|chilli flakes)\b/.test(n)) return '🥫 Pantry';
  return '🧂 Other';
}


function buildShoppingList(){
  const map={};
  const skipNames = ['water','tap water','ice water','boiling water','warm water','salted water','salt & pepper','salt and pepper','to taste','for serving','to serve','butcher\'s string'];
  
  function add(name, amt, unit, source, priceName){
    const skip = skipNames.some(s => name.toLowerCase().includes(s));
    if(skip || !amt || amt <= 0) return;
    // Use normalised key for deduplication — handles "organic brinjal" + "brinjal" as same item
    const key = normIngredientKey(name);
    if(!key) return;
    if(map[key]){
      map[key].amt += amt;
      if(source && !map[key].sources.includes(source)) map[key].sources.push(source);
      if(priceName && !map[key].priceName) map[key].priceName = priceName;
    } else {
      map[key] = { name, amt, unit, priceName: priceName||null, sources: source ? [source] : [], aisle: aisleCategory(name) };
    }
  }

  // ── MEATS: break into actual ingredients using recipe.ingredients ──
  S.selectedMeats.forEach(mid => {
    const m = MEAT_GROUPS.flatMap(g => g.items).find(x => x.id === mid);
    if(!m) return;
    const recipe = m.recipe;
    const servings = S.recipeServings || S.people;
    const mult = APPETITE[S.appetite].mult * servings * meatSpreadMult(S.selectedMeats.length);
    
    // Add the main protein itself
    add(m.name, calcMeat(m).grams, "g", m.name, (typeof BRAAI_PRICEKEY!=='undefined' && BRAAI_PRICEKEY[m.id]) ? BRAAI_PRICEKEY[m.id] : null);
    
    // Parse ingredient list for extra ingredients (marinades, rubs, sauces)
    if(recipe && recipe.ingredients){
      recipe.ingredients.forEach((ing, i) => {
        if(i === 0) return; // skip — that's the main protein, already added
        if(ing.startsWith("—")) return; // section divider
        // Parse: "Garlic — 5g per person (crushed)" → name="Garlic", amt=5*mult, unit="g"
        // Pattern: "Name — Xg/ml per person" or "Name — X tbsp/tsp per person"
        let m2;
        // Pattern 1: "Garlic — 5g per person" or "Garlic — 5ml per person"
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s*(g|ml|kg|L)\s+per\s+p/i);
        if(m2){ add(m2[1].trim(), parseFloat(m2[2])*(m2[3]==='kg'?1000:m2[3]==='L'?1000:1)*mult, m2[3]==='kg'?'g':m2[3]==='L'?'ml':m2[3], m.name); return; }
        // Pattern 2: "Garlic — 2 tbsp per person"
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s*(tbsp|tsp)\s+per\s+p/i);
        if(m2){ add(m2[1].trim(), parseFloat(m2[2])*(m2[3]==='tbsp'?15:5)*mult, 'ml', m.name); return; }
        // Pattern 3: "Eggs — 1 per 3 people" or "Bay leaves — 1 per 4 people" → countable, round UP
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.]+)\s+per\s+(\d+)\s+people?/i);
        if(m2){ const qty = Math.ceil((parseFloat(m2[2]) / parseInt(m2[3])) * mult); add(m2[1].trim(), qty, 'pcs', m.name); return; }
        // Pattern 4: "Eggs — ½ per person" or "Eggs — 0.5 per person" → round UP
        m2 = ing.match(/^([^—]+?)\s*—\s*([\d.\/½⅓¼¾]+)\s+per\s+person/i);
        if(m2){
          let frac = m2[2].replace('½','0.5').replace('⅓','0.333').replace('¼','0.25').replace('¾','0.75');
          const qty = Math.ceil(parseFloat(frac) * mult);
          if(!isNaN(qty) && qty > 0) add(m2[1].trim(), qty, 'pcs', m.name);
          return;
        }
        // If no parseable quantity, skip (e.g. "Fresh rosemary — to taste")
      });
    }
  });

  // ── SIDES: use existing shopping[] arrays ──
  S.selectedSides.forEach(sid => {
    const s = SIDES_GROUPS.flatMap(g => g.items).find(x => x.id === sid);
    if(!s || !s.shopping) return;
    const mult = APPETITE[S.appetite].mult * S.people * sideSpreadMult(S.selectedSides.length);
    s.shopping.forEach(ing => { if(ing.per > 0) add(ing.name, Math.round(ing.per*mult*10)/10, ing.unit, s.name); });
  });

  // Sort by aisle order, then name
  const aisleOrder = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  const items = Object.values(map);
  // attach the two numbers per line — COOK (exact, what the meal uses) and
  // BUY (what goes in the trolley): by-weight gets a +10% safety, by-pack
  // rounds up to whole packs, flex veg goes loose-or-bag, eggs use the tray ladder.
  items.forEach(it => {
    const pr = (typeof priceOf === 'function') ? priceOf(it.priceName || it.name) : null;
    const pk = pr ? pr.pack : null;
    const need = it.amt;
    // COOK — exact, no buffer
    // MF124 · was a sixth copy of the line arithmetic. Its count branch had the SAME
    // unbridged `else Math.ceil(need) * pr.price` fallback — dead today only because
    // AVG_WEIGHT_G is now complete for every count-priced key, which is a data promise,
    // not a code guarantee. Routed through the one costOneLine() so it cannot come back.
    if(!pr) it.cookCost = null;
    else {
      const _cl = (typeof costOneLine==='function') ? costOneLine(pr, need, it.unit) : null;
      it.cookCost = _cl ? Math.round(_cl.cook) : null;
    }
    // BUY — what you actually put in the trolley
    it.loose = false; it.packLine = false; it.buyAmt = need; it.buyUnit = it.unit; it.buyPacks = 0; it.packSize = 0;
    if(!pr){ it.buyCost = null; }
    else if(pr.per === 'count' && unitToGrams(need, it.unit)!=null && AVG_WEIGHT_G[pr.key]){  // weight given for an each-priced item → whole units
      const u = Math.ceil(unitToGrams(need, it.unit) / AVG_WEIGHT_G[pr.key]);
      it.buyAmt = u; it.buyUnit = 'pcs'; it.buyCost = Math.round(u * pr.price);
    }
    else if(pr.per === 'count' && pk && pk.ladder){            // eggs — round up the tray ladder
      const n0 = Math.ceil(need), last = pk.ladder[pk.ladder.length - 1];
      const rung = pk.ladder.find(r => r >= n0) || (last * Math.ceil(n0 / last));
      it.buyAmt = rung; it.buyUnit = 'pcs'; it.packLine = (rung !== n0);
      it.buyCost = Math.round(rung * pr.price);
    }
    else if(pr.per === 'count'){                               // other countables
      const n0 = Math.ceil(need); it.buyAmt = n0; it.buyUnit = 'pcs';
      it.buyCost = Math.round(n0 * pr.price);
    }
    else if(pk && pk.ladder){                                  // weight/volume ladder — round up the rungs
      const lad = pk.ladder, top = lad[lad.length - 1];
      const found = lad.find(r => r >= need);
      if(found){ it.buyPacks = 1; it.packSize = found; it.buyAmt = found; }
      else { it.buyPacks = Math.ceil(need / top); it.packSize = top; it.buyAmt = it.buyPacks * top; }
      it.packLine = true;
      it.buyCost = Math.round((it.buyAmt / 1000) * pr.price);
      // money-saving "buy loose" tip when the bag dwarfs what the recipe needs
      if(pk.loosable && need < it.packSize * 0.6){ it.looseTip = Math.round(need); it.looseTipCost = Math.round((need / 1000) * pr.price); }
    }
    else if(pk && pk.size){                                    // single standard pack — round up to whole packs
      const packs = Math.ceil(need / pk.size); it.buyAmt = packs * pk.size; it.buyPacks = packs; it.packSize = pk.size;
      it.packLine = true;
      it.buyCost = Math.round(packs * (pk.price != null ? pk.price : (pk.size / 1000) * pr.price));
    }
    else {                                                     // by weight (all meat, loose veg) — +10% safety, no rounding
      it.loose = true; it.buyAmt = Math.round(need * 1.10);
      it.buyCost = Math.round((it.buyAmt / 1000) * pr.price);
    }
  });
  items.sort((a,b) => {
    const ai = aisleOrder.indexOf(a.aisle), bi = aisleOrder.indexOf(b.aisle);
    if(ai !== bi) return ai - bi;
    return a.name.localeCompare(b.name);
  });
  return items;
}

function totalCost(){ let t=0; S.selectedMeats.forEach(mid=>{ const m=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===mid); if(m) t+=(calcMeat(m).grams/1000)*(MEAT_COSTS[mid]||120); }); S.selectedSides.forEach(sid=>{ const s=SIDES_GROUPS.flatMap(g=>g.items).find(x=>x.id===sid); if(s) t+=calcSideCost(s); }); return Math.round(t); }
function totalCals(){ let c=0; S.selectedMeats.forEach(mid=>{ const m=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===mid); if(m) c+=(calcMeat(m).grams/100)*(MEAT_CALS[mid]||200); }); return Math.round(c/S.people); }
function scaleAmt(str,mult){ if(!str) return str; const m=str.match(/^([0-9.]+)(.*)/); if(!m) return str; return (Math.round(parseFloat(m[1])*mult*10)/10)+m[2]; }

// ── PART H — HUMANE COOK-TIME DISPLAY (shared, app-wide · Rule Zero) ──────────
// Long bakes are REAL totals (croissants ~720 min, sourdough/Danish ~600 = overnight
// proves, chills and laminations) — verified against the data, no summing bug — but
// "720 min" reads as absurd and scary. Show anything ≥90 min in HOURS, and flag the
// long, mostly-hands-off bakes as "make-ahead" so the number reassures instead of scares.
function fmtCookTime(min){
  min = Number(min)||0;
  if(min<=0) return '';
  if(min<90) return min+' min';
  var h = Math.round(min/6)/10;                 // one-decimal hours
  return (h%1===0 ? h : h.toFixed(1))+' hr';
}
function isMakeAhead(min){ return (Number(min)||0) >= 240; }  // 4 hr+ → dominated by hands-off rest/chill/ferment

// ══ LAW 55 · NO ALCOHOL ON ANY SURFACE INTENDED FOR CHILDREN ═══════════
// RULED 20 Jul 2026. A HARD EXCLUSION, applied at the query BEFORE any predicate
// runs. A record must not be able to EARN its way onto a child surface.
//
// 🩸 WHY IT IS A GATE AND NOT A REMOVAL. The symptom was two records — Amarula
// Cheesecake and Gin & Tonic Cheesecake on "Fussy little ones". The CAUSE was
// substring matching: the fussy predicate matched `cheese` inside "cheesecake".
// Pull the two records and the next cheesecake walks straight back on. Same fault
// put Crunchy Ginger Biscuits on the sick shelf via `ginger`. Gate the SURFACE.
//
// 🩸 DETECT ON THE INGREDIENTS AND THE METHOD, NEVER ON THE NAME ALONE. Amarula
// and Gin happen to be in these two titles; the next one is a splash of brandy in
// step 4 of a recipe with a perfectly clean name. The name is checked too, but it
// is the weakest signal, not the test.
//
// ⚠️ WORD BOUNDARIES ARE LOAD-BEARING. Without \b this gate eats `ginger` (gin),
// `rump` (rum), `margarine`/`aubergine` (gin), `portion`/`Portuguese` (port).
// That is the very substring bug this rules against — do not loosen them.
var CHILD_UNSAFE_RE = /\b(alcohol|alcoholic|wine|beer|brandy|rum|vodka|gin|whisky|whiskey|liqueur|sherry|port|amarula|advocaat|van der hum|cider|champagne|prosecco|marsala|kirsch|schnapps|tequila|bourbon|cognac|armagnac|grappa|vermouth|sambuca|ouzo|limoncello|amaretto|kahlua|baileys|triple sec|cointreau|calvados|mead|sake|soju)\b/i;

// Contexts where a token above is NOT alcohol. Vinegar is the big one: "red wine
// vinegar" and "apple cider vinegar" appear across 16 ingredient lines and are not
// drinkable alcohol. ⚖️ Ruled: vanilla essence/extract is FINE and is not gated —
// no essence or extract token appears above, so it passes untouched.
var CHILD_SAFE_CTX = /vinegar|non-?alcoholic|alcohol[-\s]?free|virgin\b|mocktail/i;

function _childUnsafeLine(s){
  s = String(s == null ? '' : s);
  if (!s) return false;
  if (CHILD_SAFE_CTX.test(s)) return false;      // judged per LINE, so "red wine
  return CHILD_UNSAFE_RE.test(s);                // vinegar" clears while "red wine" does not
}

// TRUE = keep this record away from children. Unknown is NOT safe: if a record
// carries no ingredients at all we cannot clear it, but neither can we condemn it
// on nothing — so it passes, and census 21 counts what could not be inspected.
// ⚖️ Law 45 — say what you actually know.
// ⚠️ WALK ANY SHAPE. The child surfaces do not agree on one: allRecipes gives
// ingredients:[{n}], BABY_RECIPES gives `base`, MASTER_SNACKS and the KIDS_THEMES
// recipes give `base12` as an OBJECT ({flour:"600g cake flour", …}), and a theme
// nests whole recipes under recipes[] / drink / cake. A first cut of this walked
// only strings and arrays, so String({}) === "[object Object]" and every kiddies
// ingredient list silently scanned as the literal text "[object Object]" —
// a gate that inspects nothing and passes everything. ⚖️ Law 3 · Law 22.
function _scanAny(v, depth){
  if (v == null) return false;
  if (depth > 6) return false;                            // cycles/absurd nesting
  if (typeof v === 'string') return _childUnsafeLine(v);
  if (typeof v === 'number' || typeof v === 'boolean') return false;
  if (Array.isArray(v)){
    for (var i = 0; i < v.length; i++) if (_scanAny(v[i], depth + 1)) return true;
    return false;
  }
  if (typeof v === 'object'){
    for (var k in v){
      if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
      if (_scanAny(v[k], depth + 1)) return true;
    }
  }
  return false;
}

function tinzaHasAlcohol(r){
  if (!r) return false;
  var i, ings = r.ingredients || [];
  for (i = 0; i < ings.length; i++){
    var n = ings[i] && (ings[i].n || ings[i].name || ings[i]);
    if (_scanAny(n, 0)) return true;
  }
  if (_scanAny(r.method, 0)) return true;
  if (_scanAny(r.base,   0)) return true;   // BABY_RECIPES
  if (_scanAny(r.base12, 0)) return true;   // MASTER_SNACKS + KIDS_THEMES recipes (OBJECT)
  if (_scanAny(r.recipes,0)) return true;   // a KIDS_THEME nests whole recipes
  if (_scanAny(r.drink,  0)) return true;   // …and a party drink
  if (_scanAny(r.cake,   0)) return true;   // …and a cake
  if (_childUnsafeLine(r.name)) return true;            // weakest signal, checked last
  return false;
}

// THE ONE GATE. Every child-facing surface calls this and nothing else. ⚖️ Law 6.
function childSafe(list){
  return (Array.isArray(list) ? list : []).filter(function(r){ return !tinzaHasAlcohol(r); });
}

// The child-facing surfaces, named. Adding one here is a RULING, not a tidy-up.
//   fussy   — "Fussy little ones · Kid friendly · Hidden veg · No drama"
//   kiddies — the party planner (themes, snacks, cakes)
//   tiny    — Tiny Tummies, baby food
var CHILD_FACING_MOODS = { fussy: true };

if (typeof window !== 'undefined'){
  window.tinzaHasAlcohol = tinzaHasAlcohol;
  window.childSafe = childSafe;
  window.CHILD_FACING_MOODS = CHILD_FACING_MOODS;
}

// ── MOOD FEATURE ─────────────────────────────────────────────────────

const MOODS = [
  { id:"exhausted",    e:"😴", label:"I'm exhausted",           sub:"Low effort · Quick · Comfort",          colour:"#6060a0", bg:"#0a0a18", prompt:"extremely quick and easy comfort food recipe requiring minimal effort, ideally one pot or one pan, under 20 minutes, no complicated steps, South African home cooking style" },
  { id:"pickmeup",     e:"😊", label:"I need a pick-me-up",     sub:"Comfort · Treat · Lift your mood",       colour:"#a06040", bg:"#180e08", prompt:"comforting, mood-lifting food — something warm and satisfying that feels like a treat, emotionally uplifting, South African comfort classics or a balanced treat meal" },
  { id:"sick",         e:"🤒", label:"I'm not feeling well",    sub:"Light · Nourishing · Easy to digest",   colour:"#40a060", bg:"#081808", prompt:"gentle, light, easy to digest food for someone who is sick — soothing broth, soft textures, nothing heavy, good for an upset stomach or mild illness" },
  { id:"impress",      e:"🔥", label:"I want to impress",       sub:"Special · Impressive · Worth the effort",colour:"var(--accent)", bg:"#1a0e08", prompt:"impressive dinner party recipe that looks and tastes spectacular, something special to wow guests, can be a bit more effort, restaurant quality at home" },
  { id:"healthy",      e:"🌿", label:"I want to be healthy",    sub:"Nutritious · Balanced · Energising",     colour:"#20a060", bg:"#081a10", prompt:"healthy, nutritious, balanced meal — lots of vegetables, lean protein, wholesome ingredients, energising and genuinely good for you, not boring" },
  { id:"quick",        e:"⚡", label:"Need it fast",             sub:"Under 20 minutes · No fuss",             colour:"#c0a020", bg:"#181200", prompt:"very fast recipe ready in under 20 minutes, quick weeknight dinner, minimal prep, simple ingredients most people have at home" },
  { id:"lazy",         e:"🛋️", label:"I'm feeling lazy",        sub:"Minimal effort · Dump & go · One pot",  colour:"#8040a0", bg:"#100818", prompt:"a proper lazy meal — one pot or one pan, everything thrown in together, minimal chopping and washing up, still hearty and satisfying" },
  { id:"fussy",        e:"😤", label:"Fussy little ones",        sub:"Kid friendly · Hidden veg · No drama",   colour:"#d04080", bg:"#1a0810", prompt:"recipe for picky fussy children — familiar safe flavours, nothing too spicy or weird, hidden vegetables welcome, something kids will actually eat without a battle" },
  { id:"cold",         e:"🌧️", label:"It's cold & cloudy",     sub:"Soup · Stew · Warm from the inside",     colour:"#4080a0", bg:"#080e18", prompt:"warming winter comfort food — thick soups, hearty stews, something that warms you from the inside out on a cold rainy South African day" },
  { id:"sweet",        e:"🍰", label:"I need something sweet",  sub:"Dessert · Bake · Treat yourself",        colour:"#d06080", bg:"#1a0810", prompt:"baking or dessert recipe — something sweet and indulgent, a cake, tart, pudding or biscuits, South African bakes preferred" },
  { id:"adventurous",  e:"🌍", label:"I'm feeling adventurous", sub:"New flavours · Bold · Explore",          colour:"#a09060", bg:"#181408", prompt:"an adventurous recipe with bold or exotic flavours — try a new technique or cuisine, something interesting and different from everyday cooking" },
  { id:"celebrating",  e:"🎉", label:"I'm hosting/celebrating", sub:"Crowd pleaser · Impressive · High volume", colour:"#c0a020", bg:"#181200", prompt:"a show-stopping recipe for hosting or celebrating — feeds a crowd, impressive presentation, family-style or platter sharing, a real celebration meal" },
];

// ── MOOD RECIPE DATABASE — instant load, no API wait ─────────────────
// All amounts are per 1 person (pp). Scales automatically.
// nutrition: {kcal, protein_g, carbs_g, fat_g} per serving
const MOOD_DB = {

  exhausted: [
    { name:"One-Pan Garlic Butter Chicken & Veg", emoji:"🍗", time:25, why:"Everything in one pan — dinner sorted with almost no effort",
      photo:"",
      ingredients:[
        {n:"Chicken thighs (bone-in)",pp:150,u:"g"},{n:"Potato (chopped 2cm)",pp:200,u:"g"},
        {n:"Carrot (chopped)",pp:100,u:"g"},{n:"Butter",pp:10,u:"g"},
        {n:"Garlic (crushed)",pp:10,u:"g"},{n:"Baby spinach",pp:50,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Place chicken, potatoes and carrots in a baking dish. Dot with butter and add crushed garlic. Season well.","Bake 20–22 min. Stir in spinach for the last 3 min.","Serve straight from the dish."],
      tip:"No washing up the pan — serve it straight to the table. Swap potato for sweet potato if you like.",
      nutrition:{kcal:520,protein_g:35,carbs_g:45,fat_g:22} },

    { name:"Egg & Spinach Rice Bowl", emoji:"🍳", time:15, why:"Fast, filling, uses what you have — no shopping needed",
      photo:"",
      ingredients:[
        {n:"Cooked rice (leftover is perfect)",pp:100,u:"g"},{n:"Eggs",pp:2,u:""},
        {n:"Baby spinach",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Sunflower oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Heat oil in a pan. Fry tomato and spinach 2 min until wilted.","Add rice and stir to warm through.","Push everything to the side. Scramble eggs in the gap, then mix everything together.","Season. Serve immediately."],
      tip:"Cold leftover rice works best here — it fries rather than steams. Top with fresh chilli if you have it.",
      nutrition:{kcal:420,protein_g:18,carbs_g:50,fat_g:15} },

    { name:"Banana Peanut Butter Oat Bowl", emoji:"🍌", time:10, why:"Zero cooking, maximum energy — ready in 10 minutes flat",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:150,u:"ml"},
        {n:"Banana (mashed)",pp:120,u:"g"},{n:"Peanut butter",pp:30,u:"g"},
        {n:"Cinnamon",pp:2,u:"g"},{n:"Pumpkin seeds (optional)",pp:10,u:"g"}
      ],
      method:["Mash banana in a bowl.","Add oats, milk, peanut butter and cinnamon. Stir well.","Let it sit 5 min to soften — or eat immediately for a chewier texture.","Top with pumpkin seeds."],
      tip:"Make this the night before and refrigerate — overnight oats need zero morning effort. Swap milk for yoghurt for extra protein.",
      nutrition:{kcal:480,protein_g:15,carbs_g:65,fat_g:18} },
  ],

  pickmeup: [
    { name:"Berry Yoghurt Smoothie Bowl", emoji:"🍓", time:10, why:"Antioxidant-rich and beautiful — feels like a treat but is genuinely good for you",
      photo:"",
      ingredients:[
        {n:"Banana",pp:120,u:"g"},{n:"Mixed berries (frozen works perfectly)",pp:150,u:"g"},
        {n:"Plain yoghurt",pp:150,u:"g"},{n:"Rolled oats",pp:30,u:"g"},
        {n:"Mixed nuts (chopped)",pp:30,u:"g"},{n:"Honey (optional)",pp:10,u:"g"}
      ],
      method:["Blend banana, berries and yoghurt until smooth.","Pour into a bowl.","Top with oats and chopped nuts.","Drizzle with honey if using."],
      tip:"Frozen berries are cheaper and work just as well as fresh. The oats and nuts add crunch and keep you full longer.",
      nutrition:{kcal:420,protein_g:15,carbs_g:55,fat_g:15} },

    { name:"Mango Chilli Chicken Wraps", emoji:"🌯", time:20, why:"Sweet heat — the kind of meal that genuinely lifts your spirits",
      photo:"",
      ingredients:[
        {n:"Chicken breast (sliced into strips)",pp:150,u:"g"},{n:"Ripe mango (diced)",pp:80,u:"g"},
        {n:"Flour tortilla",pp:60,u:"g"},{n:"Fresh chilli (sliced)",pp:5,u:"g"},
        {n:"Fresh coriander",pp:10,u:"g"},{n:"Lime juice",pp:15,u:"ml"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a pan over high heat. Season chicken and fry 8–10 min until golden and cooked through.","Add mango and chilli for the last 3 min.","Warm tortilla in a dry pan 30 sec per side.","Fill with chicken mixture and scatter over coriander. Squeeze lime juice over. Roll up."],
      tip:"Can't find mango? Tinned peach works surprisingly well. Make your own tortilla with 100g flour, 60ml water, pinch salt — fry in a dry pan.",
      nutrition:{kcal:450,protein_g:30,carbs_g:45,fat_g:12} },

    { name:"Turmeric Golden Milk Oat Porridge", emoji:"🌟", time:12, why:"Anti-inflammatory and warming — feel-good food from the inside out",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:300,u:"ml"},
        {n:"Ground turmeric",pp:5,u:"g"},{n:"Fresh ginger (grated)",pp:5,u:"g"},
        {n:"Banana (sliced)",pp:120,u:"g"},{n:"Mixed nuts (roughly chopped)",pp:30,u:"g"},
        {n:"Honey",pp:10,u:"g"},{n:"Cinnamon",pp:1,u:"g"}
      ],
      method:["Combine oats, milk, turmeric, ginger and cinnamon in a small pot.","Simmer over medium heat stirring regularly for 7–8 min until thick and creamy.","Pour into a bowl. Top with sliced banana and nuts.","Drizzle with honey."],
      tip:"The turmeric and ginger are genuinely anti-inflammatory. Use plant milk if preferred. Make a big batch — reheats perfectly with a splash of milk.",
      nutrition:{kcal:460,protein_g:14,carbs_g:60,fat_g:18} },
  ],

  sick: [
    { name:"Healing Chicken Ginger Broth", emoji:"🍜", time:35, why:"The ultimate sick-day soup — soothing, hydrating, deeply nourishing",
      photo:"",
      ingredients:[
        {n:"Chicken thigh (bone-in)",pp:150,u:"g"},{n:"Carrot (sliced)",pp:100,u:"g"},
        {n:"Onion (quartered)",pp:80,u:"g"},{n:"Fresh ginger (sliced)",pp:30,u:"g"},
        {n:"Garlic cloves (crushed)",pp:10,u:"g"},{n:"Fresh thyme",pp:5,u:"g"},
        {n:"Water",pp:500,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Place all ingredients in a pot. Bring to the boil. Skim any foam off the top.","Reduce heat. Simmer gently for 30 min.","Remove chicken. Shred meat off the bone and return to the pot. Discard bone.","Taste and season with salt. Sip as soup or serve over rice."],
      tip:"The ginger and garlic have genuine antibacterial properties. The more you simmer, the deeper the flavour and the more nourishing the broth. Can be made in advance and reheated.",
      nutrition:{kcal:250,protein_g:28,carbs_g:15,fat_g:8} },

    { name:"Turmeric Coconut Lentil Soup", emoji:"🥣", time:30, why:"Gut-friendly, anti-inflammatory, easy to digest — gentle on a sick stomach",
      photo:"",
      ingredients:[
        {n:"Red lentils (rinsed)",pp:100,u:"g"},{n:"Carrot (diced)",pp:100,u:"g"},
        {n:"Coconut milk",pp:200,u:"ml"},{n:"Ground turmeric",pp:5,u:"g"},
        {n:"Garlic (minced)",pp:10,u:"g"},{n:"Lemon juice",pp:15,u:"ml"},
        {n:"Water",pp:400,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry garlic and turmeric in a small amount of oil for 1 min.","Add red lentils, carrot, coconut milk and water. Bring to the boil.","Simmer 20 min until lentils are completely soft.","Squeeze in lemon juice. Season. Blend smooth if desired."],
      tip:"Red lentils dissolve into the soup as they cook — no soaking needed and they're extremely easy to digest. Blend for a silky smooth texture.",
      nutrition:{kcal:380,protein_g:15,carbs_g:40,fat_g:15} },

    { name:"Ginger Honey Oats with Lemon Tea", emoji:"🫖", time:15, why:"The gentlest possible meal — soothing for throat, stomach and soul",
      photo:"",
      ingredients:[
        {n:"Rolled oats",pp:50,u:"g"},{n:"Full cream milk",pp:200,u:"ml"},
        {n:"Water",pp:100,u:"ml"},{n:"Honey",pp:15,u:"g"},
        {n:"Fresh ginger (grated)",pp:10,u:"g"},{n:"Lemon juice",pp:15,u:"ml"},
        {n:"Cinnamon",pp:1,u:"g"}
      ],
      method:["Cook oats in milk and water over medium heat, stirring, for 5–7 min until creamy.","Stir in ginger and cinnamon.","Pour into a bowl. Drizzle over honey.","Make a separate mug of hot water with lemon juice and a little honey to sip alongside."],
      tip:"Honey has mild antibacterial properties and is genuinely soothing for a sore throat. The ginger helps with nausea. Eat this warm, not hot.",
      nutrition:{kcal:280,protein_g:8,carbs_g:55,fat_g:4} },
  ],

  impress: [
    { name:"Rosemary Garlic Lamb Chops with Roasted Veg", emoji:"🍖", time:35, why:"Restaurant quality, minimal technique — always gets compliments",
      photo:"",
      ingredients:[
        {n:"Lamb loin chops",pp:180,u:"g"},{n:"Fresh rosemary (chopped)",pp:10,u:"g"},
        {n:"Garlic (crushed)",pp:15,u:"g"},{n:"Potato (halved)",pp:200,u:"g"},
        {n:"Asparagus",pp:150,u:"g"},{n:"Olive oil",pp:15,u:"ml"},
        {n:"Lemon (for serving)",pp:0.25,u:""},{n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Rub lamb chops with garlic, rosemary, olive oil, salt and pepper. Rest 10 min.","Toss potatoes in oil and season. Roast at 200°C for 15 min.","Add lamb to the roasting pan. Roast 12–15 min (pink inside) or 18 min (well done).","Steam or griddle asparagus 4–5 min. Serve with a lemon wedge."],
      tip:"Rest the lamb 5 min under foil before serving — it makes a real difference. Serve with a simple mint yoghurt: plain yoghurt + fresh mint + pinch of salt.",
      nutrition:{kcal:580,protein_g:42,carbs_g:38,fat_g:28} },

    { name:"Creamy Garlic Prawn Linguine", emoji:"🦐", time:28, why:"Looks like fine dining, comes together in under 30 minutes",
      photo:"",
      ingredients:[
        {n:"Prawns (peeled, deveined)",pp:160,u:"g"},{n:"Linguine or spaghetti",pp:100,u:"g"},
        {n:"Garlic (finely sliced)",pp:20,u:"g"},{n:"Fresh cream",pp:150,u:"ml"},
        {n:"Butter",pp:20,u:"g"},{n:"Fresh parsley (chopped)",pp:10,u:"g"},
        {n:"Red chilli (sliced)",pp:5,u:"g"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Cook pasta in salted boiling water until al dente. Reserve 50ml pasta water before draining.","Melt butter in a wide pan. Fry garlic and chilli 1 min — don't let it burn.","Add prawns. Cook 3–4 min until pink. Remove prawns and set aside.","Add cream and lemon juice to the pan. Simmer 3 min until slightly reduced.","Toss pasta in the sauce, adding a splash of pasta water if needed. Return prawns.","Finish with parsley and black pepper."],
      tip:"The secret is pasta water — the starch makes the sauce silky and helps it cling to the pasta. Don't skip this step.",
      nutrition:{kcal:620,protein_g:35,carbs_g:52,fat_g:28} },

    { name:"Pan-Seared Steak with Mushroom Cream Sauce", emoji:"🥩", time:30, why:"A classic that never fails to impress — learn this one recipe and use it forever",
      photo:"",
      ingredients:[
        {n:"Sirloin or rump steak",pp:180,u:"g"},{n:"Mixed mushrooms (sliced)",pp:150,u:"g"},
        {n:"Butter",pp:15,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Fresh cream",pp:100,u:"ml"},{n:"Fresh thyme",pp:3,u:"g"},
        {n:"Olive oil",pp:10,u:"ml"},{n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Take steak out of fridge 20 min before cooking. Pat dry with paper towel. Season generously.","Heat oil in a heavy pan until almost smoking. Sear steak 3–4 min per side. Add butter and baste last 2 min.","Rest steak on a board, loosely covered, for 5 min.","In the same pan, fry mushrooms and garlic 4 min. Add cream and thyme. Simmer 3–4 min until thickened.","Slice steak against the grain. Pour mushroom sauce over."],
      tip:"NEVER press the steak down with a spatula — you're squeezing out the juices. The resting period is non-negotiable. Cutting against the grain makes it tender.",
      nutrition:{kcal:550,protein_g:45,carbs_g:8,fat_g:38} },
  ],

  healthy: [
    { name:"Lemon Herb Grilled Chicken Quinoa Bowl", emoji:"🥗", time:30, why:"High protein, complex carbs, genuinely delicious — not sad diet food",
      photo:"",
      ingredients:[
        {n:"Chicken breast",pp:150,u:"g"},{n:"Quinoa (uncooked)",pp:60,u:"g"},
        {n:"Cucumber (diced)",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Avocado (sliced)",pp:70,u:"g"},{n:"Lemon juice",pp:30,u:"ml"},
        {n:"Fresh herbs (parsley or coriander)",pp:10,u:"g"},
        {n:"Olive oil",pp:15,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Cook quinoa: rinse, then simmer in double the volume of water for 15 min. Fluff with a fork.","Season chicken with salt, pepper and half the lemon juice. Grill or pan-fry 6–7 min per side.","Let chicken rest 3 min. Slice.","Assemble bowl: quinoa base, sliced chicken, cucumber, tomato and avocado.","Whisk remaining lemon juice with olive oil and herbs. Drizzle over."],
      tip:"Quinoa is a complete protein — it contains all essential amino acids. Cook a big batch on Sunday for quick healthy meals all week.",
      nutrition:{kcal:480,protein_g:42,carbs_g:45,fat_g:18} },

    { name:"Mediterranean Chickpea & Feta Salad", emoji:"🫘", time:20, why:"No cooking required, packed with protein and fibre, genuinely satisfying",
      photo:"",
      ingredients:[
        {n:"Cooked or tinned chickpeas (drained)",pp:200,u:"g"},
        {n:"Feta cheese (crumbled)",pp:50,u:"g"},
        {n:"Cucumber (diced)",pp:100,u:"g"},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Red onion (finely diced)",pp:20,u:"g"},{n:"Olive oil",pp:30,u:"ml"},
        {n:"Lemon juice",pp:20,u:"ml"},{n:"Dried oreganum",pp:2,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Drain and rinse chickpeas thoroughly.","Combine chickpeas, cucumber, tomato and red onion in a bowl.","Whisk olive oil, lemon juice and oreganum together.","Pour dressing over salad. Toss well.","Crumble feta over the top. Season with pepper."],
      tip:"This gets better as it sits — make it 30 min ahead and let the flavours marry. Add pitted olives and roasted peppers if you want to push it further.",
      nutrition:{kcal:420,protein_g:18,carbs_g:38,fat_g:22} },

    { name:"Baked Hake with Sweet Potato & Broccoli", emoji:"🐟", time:32, why:"Omega-3s, complex carbs and greens in one simple bake",
      photo:"",
      ingredients:[
        {n:"Hake fillet",pp:160,u:"g"},{n:"Sweet potato (cubed)",pp:200,u:"g"},
        {n:"Broccoli (florets)",pp:150,u:"g"},{n:"Garlic (minced)",pp:10,u:"g"},
        {n:"Olive oil",pp:20,u:"ml"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Paprika",pp:2,u:"g"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Toss sweet potato in oil, salt and paprika. Roast 15 min.","Add broccoli and garlic to the tray. Push to the sides.","Place hake in the centre. Drizzle with olive oil and lemon juice. Season.","Bake a further 15 min until fish flakes easily."],
      tip:"Frozen hake works perfectly here — defrost overnight in the fridge. The sweet potato absorbs all the lemon and garlic from the fish. White fish is one of the leanest proteins available.",
      nutrition:{kcal:410,protein_g:35,carbs_g:42,fat_g:12} },
  ],

  quick: [
    { name:"Garlic Egg Fried Rice", emoji:"🍳", time:15, why:"15 minutes from cold pan to hot plate — uses what everyone has at home",
      photo:"",
      ingredients:[
        {n:"Cooked rice (cold, leftover)",pp:200,u:"g"},{n:"Eggs",pp:2,u:""},
        {n:"Frozen peas",pp:80,u:"g"},{n:"Garlic (minced)",pp:15,u:"g"},
        {n:"Spring onion (sliced)",pp:15,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Soy sauce (or salt + dash vinegar)",pp:15,u:"ml"}
      ],
      method:["Heat oil in a wok or large pan until very hot.","Fry garlic 30 sec. Add cold rice — press flat and let it fry undisturbed 2 min.","Push rice to the side. Crack eggs into the gap. Scramble, then mix into rice.","Add peas and soy sauce. Toss 2 min. Scatter spring onion over. Serve immediately."],
      tip:"This only works with cold day-old rice — fresh warm rice goes soggy. Keep leftover rice in the fridge exactly for this purpose.",
      nutrition:{kcal:430,protein_g:16,carbs_g:65,fat_g:12} },

    { name:"Speedy Lemon Chicken Strips", emoji:"🍋", time:18, why:"Fast, lean, flavourful — proper protein in under 20 minutes",
      photo:"",
      ingredients:[
        {n:"Chicken breast (sliced into strips)",pp:150,u:"g"},
        {n:"Lemon juice",pp:30,u:"ml"},{n:"Garlic (minced)",pp:15,u:"g"},
        {n:"Baby spinach",pp:100,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Season chicken strips with salt, pepper and half the lemon juice.","Heat oil in a pan over high heat. Fry chicken and garlic 8–10 min until golden and cooked through.","Add remaining lemon juice and spinach. Toss until spinach wilts, about 1 min.","Serve over rice or with bread."],
      tip:"Slice chicken thinner and it cooks faster. The lemon juice deglazes the pan and picks up all the flavour stuck to the bottom.",
      nutrition:{kcal:320,protein_g:38,carbs_g:8,fat_g:14} },

    { name:"Quick Veggie Omelette", emoji:"🥚", time:12, why:"The fastest hot meal — 3 eggs and whatever is in the fridge",
      photo:"",
      ingredients:[
        {n:"Eggs",pp:3,u:""},{n:"Tomato (diced)",pp:100,u:"g"},
        {n:"Baby spinach",pp:80,u:"g"},{n:"Cheddar or any cheese (grated)",pp:40,u:"g"},
        {n:"Oil or butter",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Beat eggs with salt and pepper.","Heat oil in a non-stick pan over medium heat. Pour in eggs.","As the edges set, lift them and tilt the pan to let raw egg flow underneath.","When mostly set, scatter tomato, spinach and cheese over one half.","Fold in half. Serve immediately."],
      tip:"The perfect omelette is pale yellow outside, just barely set inside. Medium heat, not high. Any veg or leftovers work as a filling.",
      nutrition:{kcal:380,protein_g:24,carbs_g:10,fat_g:26} },
  ],

  lazy: [
    { name:"Dump & Bake Chicken & Rice", emoji:"🍚", time:40, why:"Everything goes in one dish — 8 minutes of effort, the oven does the rest",
      photo:"",
      ingredients:[
        {n:"Chicken thighs (bone-in)",pp:150,u:"g"},{n:"White rice (uncooked)",pp:70,u:"g"},
        {n:"Chicken stock",pp:200,u:"ml"},{n:"Carrot (sliced)",pp:100,u:"g"},
        {n:"Garlic (crushed)",pp:15,u:"g"},{n:"Paprika",pp:2,u:"g"},
        {n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 190°C.","Put rice in the base of a baking dish. Pour stock over.","Place carrot and garlic on top of rice. Season.","Place chicken thighs on top. Sprinkle with paprika. Season well.","Cover tightly with foil. Bake 35 min. Remove foil last 5 min to brown skin."],
      tip:"The rice absorbs all the chicken juices as it cooks — it's incredibly flavourful. Do NOT lift the foil before 35 min or the steam escapes and rice won't cook.",
      nutrition:{kcal:480,protein_g:35,carbs_g:52,fat_g:14} },

    { name:"One-Pot Lentil & Vegetable Stew", emoji:"🫘", time:35, why:"One pot, rough chop, walk away — warm hearty food with minimal effort",
      photo:"",
      ingredients:[
        {n:"Brown or green lentils",pp:100,u:"g"},{n:"Potato (cubed)",pp:150,u:"g"},
        {n:"Carrot (sliced)",pp:100,u:"g"},{n:"Onion (roughly chopped)",pp:80,u:"g"},
        {n:"Garlic (crushed)",pp:10,u:"g"},{n:"Tinned tomatoes",pp:100,u:"g"},
        {n:"Vegetable stock or water",pp:400,u:"ml"},{n:"Curry powder",pp:3,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a pot. Fry onion and garlic 3 min — just soften, don't stress about colour.","Add curry powder, stir 1 min.","Add everything else. Bring to boil.","Reduce heat, cover, simmer 25 min until lentils and potatoes are soft. Season."],
      tip:"Brown lentils hold their shape better than red lentils if you prefer texture. This freezes perfectly — make double and freeze half.",
      nutrition:{kcal:390,protein_g:22,carbs_g:65,fat_g:5} },

    { name:"Cheesy Broccoli Baked Potatoes", emoji:"🥔", time:38, why:"Microwave the potatoes, the oven does the rest — ultimate lazy comfort food",
      photo:"",
      ingredients:[
        {n:"Large potatoes",pp:300,u:"g"},{n:"Broccoli (florets)",pp:150,u:"g"},
        {n:"Cheddar (grated)",pp:60,u:"g"},{n:"Milk",pp:100,u:"ml"},
        {n:"Butter",pp:15,u:"g"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Pierce potatoes with a fork. Microwave 8–10 min until soft (or bake at 200°C for 45 min).","Steam broccoli 5 min until just tender.","Cut potatoes in half. Scoop out flesh into a bowl.","Mash with butter, milk, salt and pepper. Mix in broccoli.","Spoon back into potato skins. Top with cheese.","Grill 3–4 min until cheese is bubbling and golden."],
      tip:"If you don't have a microwave, pierce the potato and wrap in damp paper towel — it speeds up oven cooking. Any leftover cheese and veg works as filling.",
      nutrition:{kcal:460,protein_g:18,carbs_g:68,fat_g:14} },
  ],

  fussy: [
    { name:"Hidden Veg Mini Meatballs with Pasta", emoji:"🍝", time:30, why:"Kids eat the veg without knowing — sneaky nutrition in every bite",
      photo:"",
      ingredients:[
        {n:"Beef mince",pp:150,u:"g"},{n:"Carrot (finely grated)",pp:40,u:"g"},
        {n:"Zucchini / baby marrow (finely grated)",pp:40,u:"g"},
        {n:"Breadcrumbs",pp:25,u:"g"},{n:"Egg",pp:0.5,u:""},
        {n:"Pasta (any shape kids like)",pp:80,u:"g"},
        {n:"Tinned tomatoes (for sauce)",pp:100,u:"g"},
        {n:"Garlic (crushed)",pp:5,u:"g"},{n:"Oil",pp:10,u:"ml"},
        {n:"Salt",pp:null,u:""}
      ],
      method:["Squeeze moisture out of grated zucchini with your hands. Mix with mince, carrot, breadcrumbs and egg. Season.","Roll into small balls (2cm diameter).","Brown meatballs in oil 6–8 min. Remove and set aside.","In the same pan, fry garlic 1 min. Add tomatoes. Simmer 8 min. Return meatballs to sauce.","Cook pasta separately. Serve meatballs and sauce over pasta."],
      tip:"The grated vegetables completely disappear into the meatballs — kids will never know. The moisture from the veg also keeps meatballs tender and juicy.",
      nutrition:{kcal:520,protein_g:32,carbs_g:55,fat_g:16} },

    { name:"Cheesy Chicken Quesadillas", emoji:"🧀", time:18, why:"Crispy, cheesy, easy to eat — kids always say yes to quesadillas",
      photo:"",
      ingredients:[
        {n:"Chicken breast (cooked, shredded)",pp:120,u:"g"},
        {n:"Cheddar or mozzarella (grated)",pp:60,u:"g"},
        {n:"Flour tortillas (small)",pp:60,u:"g"},
        {n:"Mild tomato or tomato sauce",pp:30,u:"g"},
        {n:"Oil",pp:5,u:"ml"}
      ],
      method:["Spread tomato sauce on one tortilla.","Top with shredded chicken and cheese. Place second tortilla on top.","Heat a dry pan over medium heat. Place quesadilla in pan.","Cook 2–3 min until golden. Carefully flip. Cook 2 min more.","Remove and cut into triangles with scissors or a knife."],
      tip:"Use leftover roast chicken, rotisserie chicken, or poach a breast for 15 min. Cut into triangles with kitchen scissors — kids love picking up the points.",
      nutrition:{kcal:480,protein_g:35,carbs_g:42,fat_g:20} },

    { name:"Smiley Face Veggie Mini Pizzas", emoji:"🍕", time:28, why:"Kids make their own smiley faces — they always eat what they create",
      photo:"",
      ingredients:[
        {n:"Pizza bases or English muffins",pp:100,u:"g"},
        {n:"Tinned tomato or pizza sauce",pp:40,u:"g"},
        {n:"Mozzarella or cheddar (grated)",pp:60,u:"g"},
        {n:"Cherry tomatoes (halved)",pp:30,u:"g"},
        {n:"Olive slices (eyes)",pp:10,u:"g"},
        {n:"Bell pepper strips (mouth)",pp:20,u:"g"},
        {n:"Mushrooms sliced (optional extras)",pp:20,u:"g"}
      ],
      method:["Preheat oven to 200°C.","Spread tomato sauce on bases. Scatter cheese over.","Set out the toppings and let kids make their own smiley faces.","Bake 10–12 min until cheese is melted and bases are golden."],
      tip:"The golden rule: kids eat what they make themselves. Lay out the toppings in small bowls and step back. Even the fussiest eaters engage with food they've assembled.",
      nutrition:{kcal:450,protein_g:18,carbs_g:65,fat_g:14} },
  ],

  cold: [
    { name:"Hearty Beef & Root Vegetable Stew", emoji:"🥘", time:90, why:"The ultimate cold-day pot — beef falls apart, house smells incredible",
      photo:"",
      ingredients:[
        {n:"Beef stew meat (chuck or shin, cubed)",pp:180,u:"g"},
        {n:"Carrot (chunked)",pp:100,u:"g"},{n:"Potato (quartered)",pp:150,u:"g"},
        {n:"Onion (diced)",pp:100,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Beef stock",pp:300,u:"ml"},{n:"Flour (for dusting)",pp:10,u:"g"},
        {n:"Tomato paste",pp:15,u:"g"},{n:"Fresh thyme",pp:3,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Dust beef cubes in flour. Season well.","Brown beef in hot oil in batches — don't overcrowd. Remove and set aside.","Fry onion and garlic in the same pot 3 min. Add tomato paste. Cook 1 min.","Return beef. Add stock and thyme. Bring to boil. Cover, simmer 45 min.","Add carrots and potatoes. Cook uncovered 30 min until beef is tender and sauce is thick.","Season well. Serve with bread to mop up the gravy."],
      tip:"Browning the beef in batches is the most important step — it builds the flavour base. If you skip this the stew tastes flat. Shin takes longer to cook than chuck but has more collagen and makes a richer gravy.",
      nutrition:{kcal:520,protein_g:38,carbs_g:45,fat_g:18} },

    { name:"Thick Tomato & Lentil Soup with Bread", emoji:"🍅", time:40, why:"Cheap, filling, warming — this is what cold days were made for",
      photo:"",
      ingredients:[
        {n:"Red lentils (rinsed)",pp:80,u:"g"},{n:"Tinned tomatoes",pp:200,u:"g"},
        {n:"Onion (diced)",pp:60,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Carrot (diced)",pp:60,u:"g"},{n:"Vegetable or chicken stock",pp:400,u:"ml"},
        {n:"Smoked paprika",pp:3,u:"g"},{n:"Cumin",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Fry onion, garlic and carrot in oil 5 min until soft.","Add paprika and cumin. Fry 1 min.","Add tomatoes, lentils and stock. Bring to boil.","Simmer 25 min until lentils have dissolved into the soup.","Blend partially for a thick, chunky texture — or fully for smooth.","Season well. Serve with crusty bread."],
      tip:"Smoked paprika is the secret weapon here — it adds depth and a slight smokiness that tastes like it took hours. A swirl of cream or a drizzle of olive oil to serve makes it feel special.",
      nutrition:{kcal:380,protein_g:18,carbs_g:55,fat_g:8} },

    { name:"Warm Butternut & Lentil Curry", emoji:"🎃", time:40, why:"Thick, spiced, warming — a vegetarian pot that satisfies like meat",
      photo:"",
      ingredients:[
        {n:"Butternut (cubed)",pp:200,u:"g"},{n:"Red lentils",pp:80,u:"g"},
        {n:"Onion (diced)",pp:60,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Coconut milk",pp:150,u:"ml"},{n:"Vegetable stock",pp:200,u:"ml"},
        {n:"Curry powder",pp:5,u:"g"},{n:"Ground ginger",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry onion and garlic in oil 3 min. Add curry powder and ginger — fry 2 min.","Add butternut and stir to coat with spices.","Add lentils, coconut milk and stock. Bring to boil.","Simmer uncovered 25 min until butternut is tender and lentils have broken down.","Season. Serve with rice or bread."],
      tip:"Butternut is one of the cheapest and most nutritious vegetables in SA. When it's in season, buy a whole one — it keeps for weeks on the counter.",
      nutrition:{kcal:430,protein_g:16,carbs_g:58,fat_g:14} },
  ],

  sweet: [
    { name:"Baked Cinnamon Apples with Vanilla Yoghurt", emoji:"🍎", time:25, why:"Feels completely indulgent, genuinely healthy — warm, fragrant, satisfying",
      photo:"",
      ingredients:[
        {n:"Apple (large)",pp:200,u:"g"},{n:"Butter",pp:15,u:"g"},
        {n:"Honey",pp:15,u:"g"},{n:"Cinnamon",pp:3,u:"g"},
        {n:"Walnuts or pecan nuts (roughly chopped)",pp:20,u:"g"},
        {n:"Plain yoghurt",pp:150,u:"g"},{n:"Vanilla essence",pp:2,u:"ml"}
      ],
      method:["Preheat oven to 180°C.","Core each apple from the top, leaving the base intact.","Mix butter, honey, cinnamon and nuts. Press into the hollow of each apple.","Place in a baking dish with 2 tbsp water in the base.","Bake 20 min until apples are soft and caramelised.","Mix yoghurt with vanilla. Serve baked apple with yoghurt alongside."],
      tip:"Granny Smith apples hold their shape better when baked. Golden Delicious go softer and sweeter. Both are excellent. The yoghurt and honey are a better pairing than cream.",
      nutrition:{kcal:320,protein_g:6,carbs_g:48,fat_g:12} },

    { name:"Banana Oat Pancakes", emoji:"🥞", time:20, why:"3 ingredients, no flour, no sugar — tastes like a proper treat",
      photo:"",
      ingredients:[
        {n:"Banana (ripe, mashed)",pp:120,u:"g"},{n:"Rolled oats",pp:60,u:"g"},
        {n:"Eggs",pp:1,u:""},{n:"Full cream milk",pp:50,u:"ml"},
        {n:"Cinnamon",pp:2,u:"g"},{n:"Oil or butter",pp:10,u:"ml"},
        {n:"Honey or maple syrup to serve",pp:15,u:"g"}
      ],
      method:["Mash banana thoroughly in a bowl.","Add oats, egg, milk and cinnamon. Mix well. Let sit 2 min.","Heat a little oil in a non-stick pan over medium heat.","Drop spoonfuls of batter in. Cook 2–3 min until bubbles form and edges look dry.","Flip carefully. Cook 2 min more.","Serve with a drizzle of honey."],
      tip:"The riper the banana, the sweeter and more banana-flavoured the pancakes. Black-spotted bananas are ideal. These freeze well — pop in the toaster to reheat.",
      nutrition:{kcal:380,protein_g:12,carbs_g:58,fat_g:10} },

    { name:"Chocolate Chia Pudding with Strawberries", emoji:"🍫", time:10, why:"10 minutes prep, then it sets itself — a make-ahead treat with zero guilt",
      photo:"",
      ingredients:[
        {n:"Chia seeds",pp:30,u:"g"},{n:"Full cream milk",pp:200,u:"ml"},
        {n:"Cocoa powder (unsweetened)",pp:15,u:"g"},{n:"Honey",pp:15,u:"g"},
        {n:"Strawberries (sliced)",pp:100,u:"g"},{n:"Vanilla essence",pp:2,u:"ml"}
      ],
      method:["Whisk milk, cocoa powder, honey and vanilla together until smooth.","Add chia seeds and stir well.","Stir again after 5 min to prevent clumping.","Refrigerate at least 30 min (or overnight) until thick and pudding-like.","Top with sliced strawberries before serving."],
      tip:"This must be made ahead — it needs at least 30 min to set but overnight is better. Chia seeds are nutritionally exceptional: omega-3, protein and fibre. Use coconut milk for a richer flavour.",
      nutrition:{kcal:290,protein_g:10,carbs_g:35,fat_g:14} },
  ],

  adventurous: [
    { name:"Thai Basil Beef Stir-Fry", emoji:"🌿", time:22, why:"Bold, aromatic, completely different from everyday cooking",
      photo:"",
      ingredients:[
        {n:"Beef strips (rump or sirloin)",pp:150,u:"g"},
        {n:"Fresh basil (large handful)",pp:20,u:"g"},
        {n:"Garlic (thinly sliced)",pp:15,u:"g"},{n:"Fresh ginger (grated)",pp:15,u:"g"},
        {n:"Red chilli (sliced)",pp:10,u:"g"},{n:"Green beans (trimmed)",pp:100,u:"g"},
        {n:"Oil",pp:15,u:"ml"},{n:"Lime juice",pp:20,u:"ml"},
        {n:"Soy sauce",pp:15,u:"ml"},{n:"Fish sauce (optional)",pp:5,u:"ml"}
      ],
      method:["Get a wok or large pan VERY hot. Add oil.","Fry garlic, ginger and chilli 30 sec — it should sizzle loudly.","Add beef strips. Stir-fry on high heat 3–4 min. Don't stir constantly — let it catch some colour.","Add green beans. Toss 2 min.","Remove from heat. Add basil, lime juice, soy and fish sauce. Toss.","Serve immediately over jasmine rice."],
      tip:"High heat is non-negotiable for stir-fry — without it you get a steam rather than a fry. Add the basil off the heat so it doesn't go black. Thai basil is different from Italian basil but both work.",
      nutrition:{kcal:390,protein_g:35,carbs_g:12,fat_g:22} },

    { name:"Moroccan Chickpea Tagine", emoji:"🥫", time:40, why:"North African spices, dried fruit, depth of flavour — truly different",
      photo:"",
      ingredients:[
        {n:"Tinned chickpeas (drained)",pp:200,u:"g"},
        {n:"Butternut or sweet potato (cubed)",pp:150,u:"g"},
        {n:"Tinned tomatoes",pp:100,u:"g"},{n:"Onion (diced)",pp:60,u:"g"},
        {n:"Dried apricots (halved)",pp:30,u:"g"},
        {n:"Chicken or vegetable stock",pp:150,u:"ml"},
        {n:"Ground cumin",pp:3,u:"g"},{n:"Ground coriander",pp:2,u:"g"},
        {n:"Cinnamon",pp:1,u:"g"},{n:"Smoked paprika",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Salt",pp:null,u:""}
      ],
      method:["Fry onion in oil 5 min. Add all spices — fry 2 min, stirring constantly.","Add butternut, tomatoes, stock and dried apricots. Stir well.","Bring to boil. Cover and simmer 20 min.","Add chickpeas. Simmer uncovered 10 min until sauce thickens and butternut is soft.","Season. Serve with couscous or bread."],
      tip:"The combination of spiced vegetables, sweet dried fruit and chickpeas is a genuine North African flavour profile. Serve with couscous: pour 150ml boiling water over 80g couscous per person, cover 5 min, fluff.",
      nutrition:{kcal:420,protein_g:18,carbs_g:68,fat_g:8} },

    { name:"Korean-Style Beef Rice Bowl", emoji:"🍚", time:25, why:"Sticky, caramelised, umami-rich — completely addictive",
      photo:"",
      ingredients:[
        {n:"Beef mince or thin strips",pp:150,u:"g"},
        {n:"Soy sauce",pp:20,u:"ml"},{n:"Honey",pp:15,u:"g"},
        {n:"Garlic (minced)",pp:15,u:"g"},{n:"Ginger (grated)",pp:10,u:"g"},
        {n:"Sesame oil",pp:5,u:"ml"},{n:"White rice (uncooked)",pp:80,u:"g"},
        {n:"Baby spinach",pp:80,u:"g"},{n:"Spring onion (sliced)",pp:15,u:"g"},
        {n:"Sesame seeds",pp:5,u:"g"},{n:"Chilli flakes (optional)",pp:1,u:"g"}
      ],
      method:["Cook rice.","Mix soy sauce, honey, garlic, ginger and sesame oil together.","Fry beef in a hot pan 5 min. Add marinade sauce. Cook 3–4 min until caramelised and sticky.","Wilt spinach in the pan with the beef for 1 min.","Serve over rice. Top with spring onion, sesame seeds and chilli flakes."],
      tip:"Sesame oil is the key flavour here — a little goes a long way. Don't substitute it. The honey and soy together create the characteristic sticky glaze. Gochujang paste (Korean chilli paste) is an excellent addition if available.",
      nutrition:{kcal:480,protein_g:32,carbs_g:55,fat_g:15} },
  ],

  celebrating: [
    { name:"Roast Garlic Rosemary Leg of Lamb", emoji:"🍖", time:90, why:"The centrepiece of any South African celebration — nothing says special like lamb",
      photo:"",
      ingredients:[
        {n:"Leg or shoulder of lamb",pp:350,u:"g"},
        {n:"Fresh rosemary",pp:10,u:"g"},{n:"Garlic cloves",pp:15,u:"g"},
        {n:"Olive oil",pp:15,u:"ml"},{n:"Potato (halved)",pp:200,u:"g"},
        {n:"Carrot (chunked)",pp:100,u:"g"},{n:"Lemon juice",pp:20,u:"ml"},
        {n:"Salt & black pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C. Make small cuts all over the lamb with a knife.","Push slices of garlic and small rosemary sprigs into the cuts.","Rub all over with olive oil, lemon juice, salt and pepper.","Place potatoes and carrots in the roasting pan. Place lamb on top.","Roast 20 min per 500g for medium, plus 20 min extra (approx 70–90 min for a 2kg leg).","Rest 20 min covered with foil before carving."],
      tip:"The garlic and rosemary pushed into the cuts perfume the entire joint. Resting is non-negotiable — a well-rested leg will be more juicy. Use the pan juices to make gravy by deglazing with a little stock.",
      nutrition:{kcal:620,protein_g:45,carbs_g:42,fat_g:30} },

    { name:"Seafood Rice (Paella Style)", emoji:"🦐", time:45, why:"A spectacular sharing dish — colourful, fragrant, looks like a feast",
      photo:"",
      ingredients:[
        {n:"White rice",pp:80,u:"g"},{n:"Prawns (peeled)",pp:100,u:"g"},
        {n:"Mussels",pp:80,u:"g"},{n:"Tinned tomatoes",pp:100,u:"g"},
        {n:"Onion (diced)",pp:30,u:"g"},{n:"Garlic (crushed)",pp:10,u:"g"},
        {n:"Chicken or fish stock",pp:300,u:"ml"},
        {n:"Turmeric",pp:2,u:"g"},{n:"Smoked paprika",pp:2,u:"g"},
        {n:"Oil",pp:10,u:"ml"},{n:"Lemon (for serving)",pp:0.25,u:""},
        {n:"Fresh parsley",pp:5,u:"g"},{n:"Salt",pp:null,u:""}
      ],
      method:["Heat oil in a wide pan. Fry onion and garlic 3 min.","Add tomatoes, turmeric and paprika. Cook 3 min.","Add rice. Stir to coat. Add stock. Bring to boil.","Simmer uncovered 15 min, DO NOT stir.","Add mussels and prawns on top of the rice. Cover with foil.","Steam 8–10 min until rice has absorbed all liquid and seafood is cooked.","Scatter parsley. Serve with lemon wedges."],
      tip:"Do NOT stir paella-style rice after adding the stock — you want a crust to form on the bottom called 'socarrat'. It's considered the best part. Add a pinch of saffron if you have it.",
      nutrition:{kcal:480,protein_g:32,carbs_g:58,fat_g:12} },

    { name:"Herb Butter Roast Chicken", emoji:"🍗", time:90, why:"The ultimate crowd-pleaser — everyone loves a perfect roast chicken",
      photo:"",
      ingredients:[
        {n:"Whole chicken",pp:400,u:"g"},{n:"Softened butter",pp:40,u:"g"},
        {n:"Garlic (minced)",pp:10,u:"g"},
        {n:"Mixed fresh herbs (rosemary, thyme, parsley)",pp:10,u:"g"},
        {n:"Lemon",pp:0.25,u:""},{n:"Potato (quartered)",pp:150,u:"g"},
        {n:"Olive oil",pp:10,u:"ml"},{n:"Salt & pepper",pp:null,u:""}
      ],
      method:["Preheat oven to 200°C.","Mix butter with garlic, herbs, lemon zest, salt and pepper.","Carefully push butter under the chicken skin over the breast using your fingers.","Rub remaining butter over the outside. Season well.","Place lemon halves inside the cavity.","Toss potatoes in olive oil and season. Place in roasting pan. Put chicken on top.","Roast 20 min per 500g + 20 min extra. Juices run clear when done.","Rest 15 min before carving."],
      tip:"Butter under the skin is the game-changer — it bastes the breast meat from inside as it cooks, keeping it moist. Always rest a roast chicken or the juices will run out when carved.",
      nutrition:{kcal:580,protein_g:48,carbs_g:25,fat_g:32} },
  ],
};

// ══ MF117 · THE MOOD LIBRARY ═══════════════ 15 Jul · Law 22 · Law 35 ══
// The 36 hand-typed MOOD_DB cards above are an ISLAND: no id, so a tap opened a stub
// with no method, no photo, no cost. This layer READS the real catalogue instead —
// 1,667 eatable records, every one with an id, so every card is a live recipe.
//
// ⛔ It does NOT touch allRecipes() (index.js) — that is the shared hot path.
//    MF117 only reads its cache and filters. (STABILITY RULE 1.)
// ⛔ MOOD_DB STAYS for one release as the emergency fallback. Do not delete working
//    code in the same session that replaces it. Delete it once the tablet confirms.

// The eatable gate. MEASURED 15 Jul: 1,667 of 2,083 pass. The other 416 are correctly
// excluded — CONDIMENT 217 · DRINK 119 · PETFOOD 62 · BABYFOOD 18. Nobody moods their
// way to a chutney or to dog food.
var MOOD_EAT_SLOTS = ['SUPPER','LUNCH','BREAKFAST','SIDE','STARTER','TREAT'];

// One predicate per mood. These are the TESTED definitions — they produced the measured
// yields, re-verified against this commit (all 12 exact). Every mood clears 10 with room
// to spare, so the paid AI NEVER fires for the first pages. ⚖️ Law 43.
//   ⚠ time === null is INELIGIBLE for time-gated moods (quick/exhausted/lazy). A null-time
//     recipe under "need it fast" is a LIE — unknown must never masquerade as fast. Law 45.
//   ⚠ searchText indexes name + cuisine + country + ingredient NOUNS — NOT method prose.
//     Probed: "one pot" / "one pan" = 0 hits. `lazy` therefore uses a STRUCTURAL proxy
//     (short time + few ingredients), never a keyword.
//   ⚠ protein is 6% covered — never query it.
function _moodText(r, words){
  var hay = r.searchText || '';
  for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) >= 0) return true;
  return false;
}
function _moodDiet(r, ds){
  var d = r.diet || [];
  for (var i = 0; i < ds.length; i++) if (d.indexOf(ds[i]) >= 0) return true;
  return false;
}
var _MOOD_MEALSLOT = ['SUPPER','LUNCH','BREAKFAST'];
var MOOD_QUERY = {
  healthy:     function(r){ return r.section === 'health' || _moodDiet(r, ['vegan','vegetarian','pescatarian']); },
  celebrating: function(r){ return r.section === 'events' || r.section === 'braai' || (r.costPP != null && r.costPP >= 45); },
  fussy:       function(r){ return _moodText(r, ['chicken','pasta','mince','cheese','nugget','sausage','macaroni']); },
  cold:        function(r){ return _moodText(r, ['soup','stew','potjie','curry','casserole','bake']); },
  sweet:       function(r){ return r.slot === 'TREAT'; },
  exhausted:   function(r){ return _MOOD_MEALSLOT.indexOf(r.slot) >= 0 && r.time != null && r.time <= 25; },
  sick:        function(r){ return _moodText(r, ['soup','broth','congee','porridge','ginger']); },
  quick:       function(r){ return _MOOD_MEALSLOT.indexOf(r.slot) >= 0 && r.time != null && r.time <= 20; },
  adventurous: function(r){ return r.section === 'world' && _moodText(r, ['curry','spice','chilli','fermented','tagine','laksa']); },
  pickmeup:    function(r){ return _MOOD_MEALSLOT.indexOf(r.slot) >= 0 && _moodText(r, ['smoothie','bowl','fresh','bright','zing','citrus']); },
  lazy:        function(r){ return (r.slot === 'SUPPER' || r.slot === 'LUNCH') && r.time != null && r.time <= 30 && (r.ingredients || []).length <= 7; },
  impress:     function(r){ return r.slot === 'SUPPER' && _moodText(r, ['roast','lamb','fillet','rib','duck','slow']); }
};

// Build a mood's pool: the eatable catalogue, filtered by the mood, then balanced by
// section so a shelf isn't ten World Kitchen dishes in a row. balancedOrder is the ONE
// variety engine — the budget finder already calls it (index.js:572). ⚖️ Law 6 · Law 35.
// ── WHICH MOODS ARE TAG-DRIVEN ══════════ MF123 · 20 Jul · RULINGS §3 ══
// A mood listed here reads its shelf from the TAGS (MOOD_TAGS, sections/moodTags.js)
// instead of guessing with a MOOD_QUERY keyword predicate. ⚖️ RULED 15 Jul — A MOOD IS
// A TAG, NOT A KEYWORD GUESS. The guesses put Fish & Chips under "Impress".
//
// 🩸 A MOOD GRADUATES ONE AT A TIME, AND ONLY ONCE ITS TAGS ARE IN. Do NOT add a mood
// here before ~15 records carry it — census check 17 prints the tally, and Law 43 says
// a shelf under 10 fires the PAID chef on page one. Adding a name here with no tags
// behind it does not empty a shelf loudly; it empties it SILENTLY. ⚖️ Law 3 · Law 43.
var MOOD_TAGGED = { celebrating: true };   // 130 tags · flipped 20 Jul

function buildMoodPool(moodId){
  var q = MOOD_QUERY[moodId];
  if (!q || typeof allRecipes !== 'function') return [];
  var pool;
  // The eat-slot gate applies to BOTH paths — a tag is not a licence to serve a
  // chutney as supper. Census check 17 ③ watches it. ⚖️ Law 6 — one gate, not two.
  try {
    // ⚖️ LAW 55 · the child gate runs FIRST, on the raw catalogue, before the mood
    // predicate or the tag filter is even consulted. A record cannot earn its way
    // onto a child surface by matching a keyword, carrying a tag, or any other route.
    var candidates = allRecipes() || [];
    if (CHILD_FACING_MOODS[moodId]) candidates = childSafe(candidates);
    pool = MOOD_TAGGED[moodId]
      ? candidates.filter(function(r){
          return r && MOOD_EAT_SLOTS.indexOf(r.slot) >= 0 && (r.mood || []).indexOf(moodId) >= 0;
        })
      : candidates.filter(function(r){
          return r && MOOD_EAT_SLOTS.indexOf(r.slot) >= 0 && q(r);
        });
  } catch(e){ return []; }
  // MF127 · TWO AXES: slot dealt proportionally to this shelf's own pool, with the
  // section round-robin kept as the tiebreak INSIDE each slot. Celebrating was 60
  // mains deep before its first side; the spread now arrives with the mains.
  // No ratio is written here — the pool states its own. ⚖️ Law 6.
  if (typeof balancedOrder === 'function') pool = balancedOrder(pool, { bucketOf:'section', proportionalBy:'slot' });
  return pool;
}

// Cached per mood tap, KEYED BY MOOD ID — an unkeyed S.moodPool would serve the previous
// mood's shelf after a "← Change mood". Rebuilds only when the id actually changes.
function moodPool(moodId){
  if (S._moodPoolId === moodId && Array.isArray(S.moodPool)) return S.moodPool;
  S.moodPool = buildMoodPool(moodId);
  S._moodPoolId = moodId;
  return S.moodPool;
}

// ── MOOD PAGED SYSTEM ────────────────────────────────────────────
// Page 0 = first 3, page 1 = next 3, … The library pool is now hundreds deep per mood,
// so the AI branch is a genuine <10 fallback that in practice never fires.
// AI starts fetching in background the moment a mood is selected.

function getMoodPageRecipes(moodId, page) {
  // MF117 · the live catalogue. MOOD_DB is the fallback ONLY if the pool comes back
  // empty (a broken index) — degrade to the old cards, never to a blank shelf. Law 3.
  const db = moodPool(moodId).length ? moodPool(moodId) : (MOOD_DB[moodId] || []);
  const start = page * 3;
  const slice = db.slice(start, start + 3);
  if (slice.length === 0) return null;
  return slice.map(r => ({...r, serves:1, _fromLibrary:true}));
}

async function startMoodAIFetch(mood) {
  // Fire and forget — AI fetches 6 more recipes in background
  if (S.moodAILoading || S.moodAIRecipes) return;
  S.moodAILoading = true;
  try {
    const prompt = `You are Tinza Chef, a South African recipe assistant.
Mood: "${mood.label}". Generate 6 different recipe suggestions for: ${mood.prompt}.

Return ONLY a JSON array of exactly 6 recipes (no markdown, no backticks):
[{"name":"Recipe name","emoji":"single emoji","serves":1,"time":25,"why":"One sentence why this fits the mood","ingredients":[{"n":"Ingredient","pp":100,"u":"g"}],"method":["Step 1","Step 2","Step 3"],"tip":"One practical tip","nutrition":{"kcal":400,"protein_g":25,"carbs_g":40,"fat_g":12}}]

Rules: pp = amount per 1 person. Serves = 1. All grams or ml. SA ingredients. Vary suggestions well.`;

    const resp = await fetch('/.netlify/functions/claude', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({model:'claude-sonnet-4-20250514', max_tokens:4000,
        messages:[{role:'user',content:prompt}]})
    });
    const data = await resp.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    const recipes = JSON.parse(clean);
    S.moodAIRecipes = Array.isArray(recipes) ? recipes.map(r=>({...r,_fromAI:true})) : [];
    S.moodAILoading = false;
    draw(); // redraw silently when AI finishes
  } catch(e) {
    S.moodAILoading = false;
  }
}

async function callMoodChef(mood) {
  // Reset paging state
  S.moodPage = 0;
  S.moodAIRecipes = null;
  S.moodAILoading = false;

  // MF117 · build this mood's pool ONCE, up front, off the cached catalogue.
  moodPool(mood.id);

  // Show first 3 from the library instantly
  const firstPage = getMoodPageRecipes(mood.id, 0);
  S.moodRecipes = firstPage || [];
  S.moodLoading = false;
  draw();

  // 💰 MF117 · DO NOT PREFETCH THE PAID CHEF WHEN THE LIBRARY CAN CARRY THE SHELF.
  // Before MF117 a mood held 6 cards = 2 pages, so page 3 genuinely needed the AI and
  // prefetching on tap was right. The pool is now 160–784 deep — 53 to 261 pages. An
  // eager prefetch buys a PAID Sonnet call (4,000 max_tokens, /.netlify/functions/claude)
  // on EVERY mood tap, for pages she will never reach. 12 moods = 12 paid calls for
  // nothing. Nothing is lost by waiting: getMoreMoodRecipes() ALREADY fires the chef on
  // demand at the end of the library ("AI not started yet — fire it now and wait").
  // ⚖️ Law 20 — the cache is not a shortcut, it IS the business model.
  // ⚖️ MF78 — the AI cost cap. The chef is live and firing. This is real money.
  if ((S.moodPool || []).length < 10) startMoodAIFetch(mood);
}

function getMoreMoodRecipes(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  const nextPage = (S.moodPage || 0) + 1;
  S.moodPage = nextPage;
  // MF116-A · count the real pages, don't assume 2. MF117 · that is now the LIVE pool
  // (hundreds deep), so the AI offset below is a genuine end-of-library fallback.
  const _poolLen = moodPool(moodId).length || (MOOD_DB[moodId]||[]).length;
  const _dbPages = Math.ceil(_poolLen / 3);

  // DB page 1 (recipes 4-6)
  const dbPage = getMoodPageRecipes(moodId, nextPage);
  if (dbPage) {
    S.moodRecipes = (S.moodRecipes||[]).filter(x => !x._waiting && !x._error).concat(dbPage);   // MF116-B · MORE adds, never deletes
    draw();
    return;
  }

  // DB exhausted — use AI recipes if ready
  const aiOffset = (nextPage - _dbPages) * 3;   // MF116-A · AI bank starts after the real DB pages
  if (S.moodAIRecipes && S.moodAIRecipes.length > aiOffset) {
    S.moodRecipes = (S.moodRecipes||[]).filter(x => !x._waiting && !x._error).concat(S.moodAIRecipes.slice(aiOffset, aiOffset + 3));   // MF116-B · MORE adds, never deletes
    draw();
    return;
  }

  // AI still loading — show a waiting state and fire new AI call if needed
  if (S.moodAILoading) {
    S.moodRecipes = [{_waiting:true}];
    draw();
    // Poll until AI is done
    const poll = setInterval(() => {
      if (!S.moodAILoading) {
        clearInterval(poll);
        const aiOff = ((S.moodPage||0) - _dbPages) * 3;
        S.moodRecipes = (S.moodRecipes||[]).filter(x => !x._waiting && !x._error).concat((S.moodAIRecipes||[]).slice(aiOff, aiOff + 3));   // MF116-B · MORE adds, never deletes
        if (S.moodRecipes.length === 0) {
          S.moodRecipes = [{_error:true, _msg:'No more recipes found. Try a different mood.'}];
        }
        draw();
      }
    }, 800);
    return;
  }

  // AI not started yet — fire it now and wait
  if (mood) {
    S.moodRecipes = [{_waiting:true}];
    draw();
    startMoodAIFetch(mood).then(() => {
      const aiOff = ((S.moodPage||0) - _dbPages) * 3;
      S.moodRecipes = (S.moodRecipes||[]).filter(x => !x._waiting && !x._error).concat((S.moodAIRecipes||[]).slice(aiOff, aiOff + 3));   // MF116-B · MORE adds, never deletes
      if (S.moodRecipes.length === 0) {
        S.moodRecipes = [{_error:true, _msg:'No more recipes right now. Try again shortly.'}];
      }
      draw();
    });
  }
}


// Fix: the mood add-to-plan box previously ran an inline fn referencing the
// map var `r`, which is out of scope at click time (silent ReferenceError ->
// box did nothing). Read the recipe from state by baked-in index instead.
function moodTogglePlan(i){
  var r=(S.moodRecipes||[])[i]; if(!r) return;
  var pid=r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase();
  togglePlanItem('moodPlan',{id:pid,name:r.name||'',emoji:r.emoji||'😋',time:r.time||0,ingredients:r.ingredients||[],nutrition:r.nutrition||null,costPP:r.costPP||0,serves:1});
}
// MF133 · THE "✨ Show me 3 more ideas" BUTTON IS REMOVED FROM THIS RENDER.
// The chef endpoint returns 503 (netlify/functions/claude.js). It did not crash — it
// failed POLITELY into a loop that cannot succeed: the error path below renders
// "Couldn't load recipes right now" with a ← Start again button that re-calls the same
// dead endpoint, and a Free user was shown that loop as a reason to pay R90.
// A broken control is worse than a missing one. ⚖️ Law 7 — a button that cannot do what
// it says is a lie. ⚖️ Law 3 — if you cannot do the thing, do not offer it.
// ⛔ getMoreMoodRecipes() itself is DELIBERATELY LEFT INTACT — MF78 turns it back on.
// 🔁 RESTORE THIS BUTTON WHEN MF78 LANDS.
function moodHTML(){
  if(S.moodPlanView){
    window._sectionPlanForShare = S.moodPlan||[];
    return sectionPlanView('moodPlan','Just Feed Me Plan','😋','#8060c0','#0f0818','#2a1840',S.moodServings||1,"setQuiet({moodPlanView:false})",'← Just Feed Me');
  }
  const mood = MOODS.find(m=>m.id===S.moodSelected);
  const recipes = S.moodRecipes;
  const loading = S.moodLoading;
  const servings = S.moodServings||4;

  // ── RECIPE DETAIL VIEW ──
  if(S.moodActiveRecipe){
    const r = S.moodActiveRecipe;
    const mood = MOODS.find(m=>m.id===S.moodSelected)||{colour:'#8060c0',bg:'#0f0818'};
    return recipeDetailFromResult(
      r,
      "closeMoodRecipe()",
      S.moodServings||1,
      mood.colour,
      mood.bg,
      mood.colour
    );
  }

  // ── RESULTS VIEW ──
  if(mood && (loading || recipes)){
    return `<div style="min-height:100vh;background:var(--bg);">
      <div style="background:#100818;border-bottom:1px solid ${mood.colour};padding:14px 20px;">
        <button onclick="setQuiet({moodSelected:null,moodRecipes:null,moodLoading:false})" style="background:none;border:none;color:${mood.colour};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Change mood</button>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:32px;">${mood.e}</span>
          <div>
            <h1 style="font-size:20px;font-weight:normal;color:var(--ink);margin:0 0 2px;">${mood.label}</h1>
            <div style="font-size:13px;color:${mood.colour};font-style:italic;">${mood.sub}</div>
          </div>
        </div>
      </div>
      <div class="content">
        ${loading ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:var(--ink);margin-bottom:8px;">Finding the perfect recipes for you...</div>
            <div style="font-size:13px;color:#9771b8;">Tinza Chef is thinking</div>
          </div>` : ''}

        ${recipes && recipes[0]?._error ? `
          <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:32px;margin-bottom:12px;">😕</div>
            <div style="font-size:14px;color:var(--ink);margin-bottom:8px;">${recipes[0]._msg||"Couldn't load recipes right now"}</div>
            <button onclick="callMoodChef(MOODS.find(m=>m.id==='${mood.id}'))" style="padding:12px 24px;background:#100818;border:2px solid ${mood.colour};border-radius:10px;color:${mood.colour};font-size:13px;cursor:pointer;margin-top:12px;">← Start again</button>
          </div>` : ''}

        ${recipes && recipes[0]?._waiting ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:var(--ink);margin-bottom:8px;">Tinza Chef is finding more ideas...</div>
            <div style="font-size:13px;color:#9771b8;">Just a moment</div>
          </div>` : ''}

        ${recipes && !recipes[0]?._error && !recipes[0]?._waiting ? `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div style="font-size:13px;letter-spacing:2px;color:#9771b8;text-transform:uppercase;">3 recipes for your mood</div>
            ${S.moodAILoading ? `<div style="font-size:13px;color:#9771b8;font-style:italic;">✨ Finding more...</div>` : ''}
          </div>
          ${recipes.map((r,i)=>`
            <div style="background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.bg:'var(--card)'};border:1px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="moodTogglePlan(${i})" >
                <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'transparent'};border:2px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#8a6a48'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'✓':''}</div>
                <span style="font-size:20px;">${r.emoji}</span>
                <div style="flex:1;">
                  <div style="font-size:14px;color:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'var(--ink)':'var(--ink-soft)'};font-weight:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'bold':'normal'};">${r.name}</div>
                  <div style="font-size:13px;color:${mood.colour};margin-top:2px;font-style:italic;">${(function(){
                    // MF117 · a live record has no `why` (that was MOOD_DB prose) and may have
                    // NO time at all — 20% of the eatable pool is time-null. The old template
                    // hard-printed "⏱️ ${r.time} min", which renders "⏱️ null min" on those.
                    // Build the line from what EXISTS. ⚖️ Law 45 — say nothing, never say null.
                    var bits = [];
                    var why = r.why || r.feel || '';
                    if (why) bits.push(why);
                    if (r.time != null) bits.push('⏱️ ' + r.time + ' min');
                    return bits.join(' · ');
                  })()}
                </div>
                </div><!-- MF126 · closes <div style="flex:1;"> — WAS MISSING. Every card
                     was appended INSIDE the previous card's flex:1 box, so each "Show me 3
                     more ideas" nested one level deeper and the column narrowed every press;
                     by the fifth batch the name wrapped one word per line. The browser
                     forgives an unclosed div by auto-closing it at the parent — which is
                     exactly why it never threw and nothing caught it. Census 19 counts the
                     tags now. ⚖️ Law 42. -->
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                  <button onclick="event.stopPropagation();openMoodRecipe(${i})" style="background:${mood.colour};border:none;border-radius:6px;padding:4px 10px;font-size:13px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
                </div>
              </div>
            </div>`).join('')}
          ${sectionPlanBtn('moodPlan','Just Feed Me','😋','#8060c0','#0f0818',S.moodServings||1,"setQuiet({moodPlanView:true})")}

          ` : ''}
      </div>
    </div>`;
  }

  // ── MOOD SELECTOR (home) ──
  return `<div style="min-height:100vh;background:var(--bg);">
    <div style="background:linear-gradient(135deg,#100818,#1a0e28);border-bottom:1px solid #2a1840;padding:14px 20px;">
      <button onclick="set({screen:'home'})" style="background:none;border:none;color:#8e72c7;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😴</span>
        <div>
          <h1 style="margin:0;font-size:22px;font-weight:normal;color:var(--ink);">Just Feed Me</h1>
          <p style="margin:0;font-size:13px;color:#9276a9;font-style:italic;">How are you feeling right now?</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div style="font-size:13px;color:#9771b8;margin-bottom:16px;line-height:1.6;">
        Tap how you're feeling and Tinza will suggest the perfect recipes — no thinking required.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${MOODS.map(m=>`
          <button onclick="set({moodSelected:'${m.id}',moodRecipes:null,moodLoading:false});callMoodChef(MOODS.find(x=>x.id==='${m.id}'))"
            style="background:${m.bg};border:2px solid ${m.colour};border-radius:14px;padding:14px 12px;cursor:pointer;text-align:left;">
            <div style="font-size:26px;margin-bottom:6px;">${m.e}</div>
            <div style="font-size:16px;color:var(--ink);font-weight:bold;margin-bottom:3px;line-height:1.2;">${m.label}</div>
            <div style="font-size:13px;color:${m.colour};line-height:1.3;">${m.sub}</div>
          </button>`).join('')}
      </div>
    </div>
  </div>`;
}

// ── END MOOD FEATURE ──────────────────────────────────────────────────

// ── DRAW ──────────────────────────────────────────────────────────

function homeHTML(){
  // ── HOME SCREEN ──────────────────────────────────────────────────
  // Two types of blocks: RECIPE SECTIONS (go to recipes) and FEATURE TOOLS (do something)

  const recipeSections = [
    // Row 1 — core cooking
    {s:"braai",      e:"🔥", t:"Braai & Fire Cooking",   sub:"BBQ · Grilled & Fire Foods · Meats · Sides · Salads", b:"var(--accent)", bg:"var(--card2)"},
    {s:"worldkitchen",e:"🌍",t:"World Kitchen",           sub:"SA Classics · International · All cuisines",         b:"var(--accent)", bg:"var(--card2)"},
    {s:"spice",      e:"🧂", t:"Tinza Spice Room",         sub:"Spice blends · Sauces · Chutneys · Atchars · Sambals · Preserves", b:"var(--accent)", bg:"var(--card2)"},
    // Row 2 — everyday family cooking (Breakfast · Light Lunch · Supper · Bakes live inside)
    {s:"feedfamily", e:"🍽️", t:"Feeding My Family",        sub:"Breakfast · Light Lunch · Supper · Bakes & Cakes",  b:"var(--accent)", bg:"var(--card2)"},
    // Row 3 — speciality
    {s:"health",     e:"🌿", t:"Health Hub",              sub:"Juices · Smoothies · Raw · Fermented",              b:"var(--accent)", bg:"var(--card2)"},
    {s:"events", reset:"eventTab:null,buffetStep:1,cakeCat:null,beverageCat:null,eventActiveRecipe:null", e:"🎉", t:"Events & Celebrations",   sub:"Buffet · Finger Foods · Cakes · Beverages",         b:"var(--accent)", bg:"var(--card2)"},
    {s:"tinyfurry",  e:"🍼🐾", t:"Tiny & Furry",         sub:"Tiny Tummies (babies & toddlers) · Furry Friends (dogs & cats)", b:"var(--accent)", bg:"var(--card2)"},
  ];

  const featureTools = [
    {s:"search",    e:"🔍", t:"Search & Discover",    sub:"Find any recipe instantly",                    b:"var(--accent)", bg:"var(--card2)", reset:"searchScope:null"},
    {s:"budget",    e:"💰", t:"I've Got R100",         sub:"Budget planner · Make the most of your money", b:"var(--accent)", bg:"var(--card2)", reset:"budget:null,budgetAmount:null,budgetSearch:'',budgetStep:1,_budgetResults:null,_budgetError:null,_budgetLoading:false,_budgetAILoading:false,_budgetActiveRecipe:null,budgetHowOpen:false,budgetPlanView:false"},
    {s:"ingredient",e:"🐔", t:"I Have Chicken...",     sub:"One ingredient · All matching recipes",        b:"var(--accent)", bg:"var(--card2)", reset:"anchorInput:'',_anchorResults:null,_anchorError:null,_anchorLoading:false,_anchorActiveRecipe:null,anchorHowOpen:false"},
    {s:"fourIngredients",e:"🧅",t:"4 Ingredients",    sub:"What's in your fridge? Get a recipe",          b:"var(--accent)", bg:"var(--card2)", reset:"ing1:'',ing2:'',ing3:'',ing4:'',_fourResults:null,_fourAI:null,_fourAILoading:false,_fourLoading:false,_fourError:null,_fourPage:5,_fourActiveRecipe:null,fourHowOpen:false"},
    {s:"mood",      e:"😴", t:"Just Feed Me",          sub:"Tell us how you feel · We do the rest",        b:"var(--accent)", bg:"var(--card2)", reset:"moodSelected:null,moodRecipes:null,moodAIRecipes:null,moodAILoading:false,moodLoading:false,moodPage:1,moodActiveRecipe:null,moodPlanView:false"},
    {s:"weekplanner",e:"📅",t:"Weekly Meal Planner",  sub:"Plan 7 days · Auto shopping list",             b:"var(--accent)", bg:"var(--card2)"},
  ];

  return `<div style="min-height:100vh;background:var(--bg);">
    <div style="background:linear-gradient(135deg,var(--card2),#2d1f0a);border-bottom:1px solid #4a3520;padding:16px 20px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😊</span>
        <div>
          <h1 style="margin:0;font-size:26px;font-weight:normal;color:var(--ink);letter-spacing:3px;">Tinza</h1>
          <p style="margin:0;font-size:13px;color:#c4a87c;font-style:italic;">Every dish, made easy</p>
        </div>
      </div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Recipe Sections -->
      <div style="font-size:13px;letter-spacing:2px;color:#b0986a;text-transform:uppercase;margin-bottom:10px;">📖 Recipes</div>
      ${recipeSections.map(o=>`
        <button onclick="set({screen:'${o.s}'${o.reset?','+o.reset:''}})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:var(--ink);margin-bottom:2px;">${o.t}</div>
            <div style="font-size:13px;color:#c4a87c;line-height:1.4;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join("")}

      <!-- Feature Tools -->
      <div style="font-size:13px;letter-spacing:2px;color:#b0986a;text-transform:uppercase;margin:16px 0 10px;">⚡ Smart Features</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${featureTools.map(o=>`
          <button onclick="set({screen:'${o.s}'${o.reset?','+o.reset:''}})"
            style="display:flex;flex-direction:column;align-items:flex-start;padding:14px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;cursor:pointer;text-align:left;">
            <span style="font-size:26px;margin-bottom:6px;">${o.e}</span>
            <div style="font-size:13px;color:var(--ink);margin-bottom:3px;font-weight:bold;">${o.t}</div>
            <div style="font-size:13px;color:#c4a87c;line-height:1.4;">${o.sub}</div>
          </button>`).join("")}
      </div>

    </div>
  </div>`;
}


// ── RECIPE VIEW ───────────────────────────────────────────────────
// ── Shared recipe photo box — ONE source of truth for every section ──
// Looks for Images/Image/<exact recipe name>.jpg; falls back to emoji + "Photo coming soon".
// Any section (current or new) can call recipePhoto(name, emoji) and get the same box.
// Strip accents so "Purée" matches a plain "Puree.jpg" file — one cleaner for all photo lookups
function cleanPhotoName(s){ return String(s||'').trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[\/\\:*?"<>|]/g,' ').replace(/\s+/g,' ').trim(); }
// Display-name photo fallback (FIX 1): some photos are saved under the DISPLAY
// name "Name (Alt)" rather than the bare name. When a recipe has a nameAlt and
// its bare name doesn't already end with ")" (the SAME rule as tinzaDisplayName,
// so it never builds a doubled "(x) (y)" filename), emit a data-alt-src=…display
// .jpg that the loader tries before giving up. No nameAlt → '' → no change.
function photoAltAttr(bare, alt){
  bare = String(bare||''); alt = String(alt||'');
  if(!alt || /\)\s*$/.test(bare.trim())) return '';
  var u = 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image/' + encodeURIComponent(cleanPhotoName(bare + ' (' + alt + ')')) + '.jpg';
  return ' data-alt-src="' + u + '"';
}
// Photo loader fallback chain: bare.jpg → bare.png → display.jpg → display.png →
// emoji panel. The display steps only run when the renderer set data-alt-src
// (recipe has a nameAlt). Lets photos be saved under either the bare or the
// display name, in either format. Standard §5.5 prefers .jpg.
function photoSwap(el){
  var s = el.getAttribute('src') || '';
  if(/\.jpe?g(\?|$)/i.test(s) && !el.dataset.triedPng){
    el.dataset.triedPng = '1';
    el.setAttribute('src', s.replace(/\.jpe?g(\?|$)/i, '.png$1'));
    return;
  }
  // bare image (jpg+png) exhausted → try the display-name image, if one was given
  if(el.dataset.altSrc && !el.dataset.triedAlt){
    el.dataset.triedAlt = '1';
    el.dataset.triedPng = '';                 // re-enable jpg→png for the display image
    el.setAttribute('src', el.dataset.altSrc);
    return;
  }
  el.style.display='none';
  if(el.nextElementSibling) el.nextElementSibling.style.display='flex';
}

function recipePhoto(name, emoji, height, nameAlt){
  height = height || 200;
  const url = 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image/' + encodeURIComponent(cleanPhotoName(name)) + '.jpg';
  return `<div style="position:relative;height:${height}px;overflow:hidden;background:#1a0e08;border-radius:10px;margin-bottom:12px;">
    <img src="${url}"${photoAltAttr(name, nameAlt)} onerror="photoSwap(this)" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:6px;background:#1a0e08;">
      <span style="font-size:48px;">${emoji||'🍽️'}</span>
      <span style="font-size:13px;color:#b47527;">📷 Photo coming soon</span>
    </div>
  </div>`;
}

// Phase 1 Warm Spice: true only on the gold-pair screens (which draw() wraps in .warm).
// Shared renderers branch on this to emit Warm Spice structure for Braai + World Kitchen
// while EVERY other section keeps its exact current markup (same code path as before).
function inWarm(){ return S.screen==='braai' || S.screen==='worldkitchen' || S.screen==='health' || S.screen==='events'
  || S.screen==='feedfamily' || S.screen==='breakfast' || S.screen==='lightlunch' || S.screen==='supper' || S.screen==='bakes' || S.screen==='sidesbasics'; }

// ── THE SHARED WARM-SPICE CARD (Phase 1, gold pair) ────────────────
// One name-on-image card → Braai itemCard() and World Kitchen wkRecipeCard()
// both route here so they can never drift (Rule Zero). 1200×640 photo with a
// dark scrim, the NAME on the image (Fraunces), an optional top-left plan
// checkbox + top-right badge, then a meta strip: green R-pp chip · meta text.
//   warmCard({ name, emoji, sub, costPP, meta, openJs, toggleJs, sel, badge, grad })
function warmCard(o){
  o = o || {};
  const url = 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image/' + encodeURIComponent(cleanPhotoName(o.photoName || o.name||'')) + '.jpg';
  const grad = o.grad || 'radial-gradient(130% 120% at 20% 8%, #e9a949 0%, transparent 52%), linear-gradient(155deg, #9c3d22, #54200f)';
  const check = o.toggleJs
    ? `<div onclick="event.stopPropagation();${o.toggleJs}" title="${o.sel?'In plan — tap to remove':'Add to plan'}" style="position:absolute;top:10px;left:11px;z-index:3;width:26px;height:26px;border-radius:7px;border:1px solid rgba(255,255,255,0.85);background:${o.sel?'var(--cost-green)':'rgba(35,18,10,0.45)'};color:${o.sel?'#2c211a':'#fff'};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:bold;cursor:pointer;">${o.sel?'✓':''}</div>`
    : '';
  const badge = o.badge ? `<span style="position:absolute;top:10px;right:11px;z-index:3;font-size:11px;font-weight:800;color:#3c2a06;background:var(--shop-gold);padding:5px 10px;border-radius:999px;">${o.badge}</span>` : '';
  // Cost chip: default "R{costPP} pp". Callers may pass a pre-formatted costText
  // (e.g. finger foods show "≈R13.35/piece") to override the label — same green
  // dot, same styling, so the gold pair is unaffected (they pass no costText).
  const chip = (o.costText || o.costPP) ? `<span class="mono" style="display:inline-flex;align-items:center;gap:7px;background:var(--green-tint);border-radius:999px;padding:6px 12px;font-size:13px;font-weight:500;color:var(--green);"><span style="width:8px;height:8px;border-radius:50%;background:var(--cost-green);flex-shrink:0;"></span>${costLine({html: o.costText || ('R'+o.costPP+' pp')})}</span>` : '';
  // Version-count hint — byte-for-byte the cost chip's anatomy (same .mono, gap, padding,
  // radius, font-size/weight), differing ONLY in colour: an --accent dot (navigational,
  // interactive) + --ink-soft text on a neutral --line2 border. Green (food cost) and gold
  // (shop-spend) meanings are LOCKED per §3, so this touches neither.
  const vchip = (o.versions && o.versions > 1) ? `<span class="mono" style="display:inline-flex;align-items:center;gap:7px;background:transparent;border:1px solid var(--line2);border-radius:999px;padding:6px 12px;font-size:13px;font-weight:500;color:var(--ink-soft);"><span style="width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0;"></span>${o.versions} versions</span>` : '';
  const meta = o.meta ? `<span style="color:var(--ink-soft);font-weight:700;font-size:12.5px;">${o.meta}</span>` : '';
  const metaRow = (chip||vchip||meta) ? `<div style="display:flex;align-items:center;gap:9px;padding:11px 13px 12px;flex-wrap:wrap;">${chip}${vchip}${meta}</div>` : '<div style="height:6px;"></div>';
  return `<div onclick="${o.openJs||''}" style="background:var(--card);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:0 10px 24px -18px rgba(120,70,30,0.5);margin-bottom:14px;cursor:pointer;">
    <div style="position:relative;aspect-ratio:1200/640;display:flex;align-items:flex-end;background:${grad};">
      <img src="${url}"${photoAltAttr(o.photoName || o.name, o.photoAlt)} onerror="photoSwap(this)" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:0;" />
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;z-index:0;"><span style="font-size:54px;opacity:0.9;">${o.emoji||'🍽️'}</span></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(35,18,10,0.78),rgba(35,18,10,0.12) 45%,transparent 65%);z-index:1;"></div>
      ${check}${badge}
      <div style="position:relative;z-index:2;padding:0 0 12px 14px;">
        ${o.sub?`<div style="color:var(--on-media-soft);font-weight:800;font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:3px;">${o.sub}</div>`:''}
        <h3 class="ttl" style="color:var(--on-media);font-weight:600;font-size:22px;margin:0;line-height:1.15;text-shadow:0 2px 8px rgba(0,0,0,0.45);">${o.name||''}</h3>
      </div>
    </div>
    ${metaRow}
  </div>`;
}

// ── SHARED QUANTITY BOX ───────────────────────────────────────────
// ONE box, identical within a theme, sits directly under the recipe name.
// Sections pass already-computed display strings. The −/+ stepper drives
// S.recipeServings by default (pass decJs/incJs to use a section's own state).
function qtyBox(o){
  o = o || {};
  const label  = o.label  || 'How Much To Make';
  const sub    = o.sub    || '';
  const total  = o.total  || '';
  const ppLine = o.ppLine || '';
  const info   = o.info   || '';   // optional thin strip: 💰 cost · 🔥 kcal
  const n = (o.n != null) ? o.n : (S.recipeServings || S.people);
  const decJs = o.decJs || "event.stopPropagation();(function(){var n=Math.max(1,(S.recipeServings||S.people)-1);var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();";
  const incJs = o.incJs || "event.stopPropagation();(function(){var n=(S.recipeServings||S.people)+1;var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();";
  if(inWarm()){
    return `
    <div style="background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:14px;margin-bottom:14px;box-shadow:0 10px 24px -18px rgba(120,70,30,0.45);">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <div style="font-size:11px;font-weight:800;letter-spacing:0.12em;color:var(--paprika);text-transform:uppercase;">${label}</div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
          <button onclick="${decJs}" aria-label="fewer servings" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--line);background:#fff;color:var(--ink);font-size:20px;line-height:1;cursor:pointer;">−</button>
          <span class="mono" style="font-size:20px;color:var(--ink);font-weight:600;min-width:26px;text-align:center;">${n}</span>
          <button onclick="${incJs}" aria-label="more servings" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--line);background:#fff;color:var(--ink);font-size:20px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
      ${sub?`<div style="font-size:13px;color:var(--ink-soft);margin-top:8px;">${sub}</div>`:''}
      ${total?`<div style="display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-top:11px;">
          <span class="mono" style="display:inline-flex;align-items:center;gap:7px;background:var(--green-tint);border-radius:999px;padding:7px 13px;font-size:15px;font-weight:500;color:var(--green);"><span style="width:8px;height:8px;border-radius:50%;background:var(--cost-green);flex-shrink:0;"></span>${total}</span>
          ${ppLine?`<span style="font-size:12.5px;font-weight:700;color:var(--ink-soft);">${ppLine}</span>`:''}
        </div>`:''}
      ${info?`<div style="margin-top:11px;padding-top:11px;border-top:1px solid var(--line);font-size:13px;color:var(--ink-soft);">${info}</div>`:''}
    </div>`;
  }
  return `
    <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:12px;margin-bottom:14px;">
      <div style="font-size:13px;letter-spacing:2px;color:var(--green-mid);text-transform:uppercase;margin-bottom:6px;">🧮 ${label}</div>
      ${sub?`<div style="font-size:13px;color:#718933;margin-bottom:10px;">${sub}</div>`:''}
      <div style="background:#0f1a04;border:1px solid #4a7010;border-radius:8px;padding:10px 12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            ${total?`<div style="font-size:13px;color:var(--green-mid);margin-bottom:2px;">Total:</div><div style="font-size:20px;font-weight:bold;color:var(--green);line-height:1.1;letter-spacing:-0.3px;">${total}</div>`:''}
            ${ppLine?`<div style="font-size:13px;color:#718d28;margin-top:3px;">${ppLine}</div>`:''}
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;"><button onclick="${decJs}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:var(--green-mid);font-size:20px;line-height:1;cursor:pointer;">−</button><span style="font-size:22px;color:var(--gold);font-weight:bold;min-width:28px;text-align:center;">${n}</span><button onclick="${incJs}" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:var(--green-mid);font-size:20px;line-height:1;cursor:pointer;">+</button></div>
        </div>
        ${info?`<div style="margin-top:10px;padding-top:10px;border-top:1px solid #2a3a14;font-size:13px;color:#9ab05a;">${info}</div>`:''}
      </div>
    </div>`;
}

// ══ §24.9 · THE LEVEL MAPS + topBack() ═══════════════ RULED, Tina 26–27 Jul ══
// 🩸 TOP Back = exactly TWO levels up.  BOTTOM Back = exactly ONE.  Every room, no
//    exceptions. Before this, every screen hand-rolled its own multi-key jump and the
//    label was written by hand beside it — so "← World Kitchen" cleared the country but
//    not the continent and re-rendered the REGION LIST while wearing the room's name.
//    It was not lying on purpose. It was two keys short, and nothing could see that.
//
//   chain = [{name, go}, …]   front door FIRST.
//           `go` = the state write that LANDS on that level, nulling everything below it.
//           `name` = what the label says. A level with no name is UNDECLARED (see below).
//   depth = how far below the front door the CURRENT screen sits. Front door = 0.
//
//   topBack(chain, depth) → { backJs, backLabel }   ·  chain[depth-2], labelled '← '+name
//
// ⛔ LATERALS ARE NEVER CHAIN LEVELS (§24.7). A pill that swaps what ONE level shows
//    (mealCat, cakeCat, healthGroupTab, wkDataTab…) is not a level she walked into.
// 🚪 THE CHAIN IS THE DOOR'S CHAIN (§24.4). Entered via Boerekos → walk Boerekos's
//    parents, never the dish's origin. That is why worldkitchen takes the door as an arg.
// 🛡️ FAIL SAFE — an undeclared level (null, or missing name/go) means HOME, never a
//    mislabelled jump. A Back that says one thing and does another is the bug this
//    whole ruling exists to kill; sending her Home is honest and always reachable.
function topBack(chain, depth){
  var lvl = (chain && depth >= 2) ? chain[depth-2] : null;
  // depth 0 (the front door) and depth 1 (one below it) have no grandparent INSIDE the
  // room — two levels up IS Home. ⚖️ THE DEPTH-1 CLAMP, ruled by Tina 27 Jul 2026.
  if(!lvl || !lvl.go || !lvl.name) return { backJs:"bottomBarGo('home')", backLabel:'← Home' };
  return { backJs: lvl.go, backLabel: '← ' + lvl.name };
}

// The declared levels, one room per key. ⚖️ ONE HOME for every chain — a room that
// declares its levels here can never disagree with itself the way the hand-rolled
// jumps did.
// ⚠️ A level is declared `null` where its NAME lives inside that room's own private
//    table (health's groupDefs, braai's SIDES_GROUPS, events' tabs, meals' configs).
//    Copying those names here would be a second home for them — exactly the drift
//    ⚖️ Law 15 was written about. NOTHING reads those levels today: every one of those
//    rooms is 3 levels deep, so only chain[0] is ever asked for. When a room grows a
//    4th level, that room names its level 1 here — it does not get copied.
var TINZA_CHAINS = {
  // World Kitchen · continents → regions → countries → dishes → recipe (5 levels)
  // The only chain read below level 0, so every level is named — and every name comes
  // from WK_COUNTRY_GEO, the room's own single source, never a copy of it.
  worldkitchen: function(door){
    var q = function(s){ return String(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'"); };
    var d    = door || S.wkDataCountry || '';
    var geo  = (typeof WK_COUNTRY_GEO!=='undefined' && WK_COUNTRY_GEO[d]) ? WK_COUNTRY_GEO[d] : null;
    var cont = geo ? geo[0] : (S.wkContinent||'');
    var reg  = geo ? geo[1] : (S.wkRegion||'');
    // ⚖️ §24.5 · Law 6 — CALL wkResetDrill(); NEVER hand-null the five drill keys. It
    // clears all five in one place, then the level writes back only the ones it stands on.
    // Hand-nulling three of five is how "I clicked WK and landed in Southern Africa"
    // happened: a key left behind is a screen left behind.
    var lands = function(sets){ return "wkResetDrill();set({screen:'worldkitchen',viewingRecipe:null,wkSearch:''"+(sets?","+sets:"")+"});window.scrollTo(0,0)"; };
    return [
      { name:'World Kitchen', go: lands('') },
      cont        ? { name:cont, go: lands("wkContinent:'"+q(cont)+"'") } : null,
      (cont&&reg) ? { name:reg,  go: lands("wkContinent:'"+q(cont)+"',wkRegion:'"+q(reg)+"'") } : null,
      d ? { name:d, go: lands("wkContinent:'"+q(cont)+"',wkRegion:'"+q(reg)+"',wkScreen:'wkdata',wkDataCountry:'"+q(d)+"',wkDataTab:'mains'") } : null
    ];
  },
  // Kiddies lives INSIDE Events, so its front door is the Events tile grid.
  // Events grid → themes → theme categories → category → recipe/plan (5 levels).
  // `theme` is the DOOR she walked in by (§24.4) — the recipe page knows its own themeId
  // and must not read S.kidsTheme, which a cross-link can have moved on.
  kiddies: function(theme){
    var q  = function(s){ return String(s||'').replace(/'/g,"\\'"); };
    var tid = theme || S.kidsTheme || '';
    var th = (typeof KIDS_THEMES!=='undefined' && tid)
      ? KIDS_THEMES.filter(function(t){ return t.id===tid; })[0] : null;
    var toKids = "kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null,kidsOpenRecipe:null,viewingRecipe:null";
    return [
      { name:'Events',          go:"set({screen:'events',eventTab:null,eventActiveRecipe:null,buffetStep:1,activeCake:null,cakeCat:null,beverageCat:null,fingerView:'browse',"+toKids+"});window.scrollTo(0,0)" },
      { name:'Kiddies Parties', go:"set({screen:'events',eventTab:'kiddies',"+toKids+"});window.scrollTo(0,0)" },
      th ? { name: th.emoji+' '+th.name,
             go:"set({screen:'events',eventTab:'kiddies',kidsScreen:'categories',kidsTheme:'"+q(th.id)+"',kidsCategory:null,kidsOpenRecipe:null,kidsRecipe:null,viewingRecipe:null});window.scrollTo(0,0)" } : null,
      null   // level 3 = the category. Named by kiddies.js when a 6th level appears.
    ];
  },
  events: function(){
    return [
      { name:'Events', go:"set({screen:'events',eventTab:null,eventActiveRecipe:null,buffetStep:1,activeCake:null,cakeCat:null,beverageCat:null,fingerView:'browse',kidsScreen:'themes',kidsTheme:null,kidsRecipe:null,kidsCategory:null,viewingRecipe:null});window.scrollTo(0,0)" },
      null   // level 1 = the tab. Its label lives in eventsHTML's own `tabs`.
    ];
  },
  meals: function(){
    return [
      { name:'Family Meals', go:"set({screen:'feedfamily',mealActiveRecipe:null,mealPlanView:false,viewingRecipe:null,mealSearch:''})" },
      null   // level 1 = the shelf. Its label lives in mealSectionHTML's own `configs`.
    ];
  },
  braai: function(){
    return [
      { name:'Braai', go:"set({screen:'braai',braiStep:1,braiCat:null,braaiView:'browse',viewingRecipe:null})" },
      null   // level 1 = the category. Its label lives in braai.js's own SIDES_GROUPS.
    ];
  },
  health: function(){
    return [
      { name:'Health Hub', go:"set({screen:'health',healthGroup:null,healthGroupTab:null,healthShowPlan:false,viewingRecipe:null})" },
      null   // level 1 = the group. Its label lives in healthGroupScreen's own groupDefs.
    ];
  },
  spice: function(){
    return [
      { name:'Spice Room', go:"set({screen:'spice',spiceShelf:null,spiceEntry:null,spiceFilter:null,spiceGroupFilter:null,viewingRecipe:null})" },
      null   // level 1 = the shelf. Its label lives in spice.js's own SPICE_SHELVES.
    ];
  },
  mood: function(){
    return [
      { name:'Just Feed Me', go:"set({screen:'mood',moodSelected:null,moodRecipes:null,moodLoading:false,moodActiveRecipe:null,moodPlanView:false,viewingRecipe:null})" },
      null   // level 1 = the mood list. Its label lives in MOODS.
    ];
  },
  budget: function(){
    return [
      { name:"I've Got R100", go:"set({screen:'budget',budgetStep:1,budgetPlanView:false,_budgetActiveRecipe:null,viewingRecipe:null})" },
      null   // level 1 = the step.
    ];
  }
};

// ── SHARED SECTION HEADER ─────────────────────────────────────────
// ONE 200px photo header, identical in every section. Real photo +
// gradient, with ← back + title + tagline + search overlaid, and an
// optional grid of wrapped category boxes baked in below.
// NO gliding / horizontal-scroll scale, ever — boxes wrap into a grid.
// Sections pass their own photo URL, labels and onclick strings; the
// function itself holds no section logic, so it can never drift.
//
//   sectionHeader({
//     title:'World Kitchen', tagline:'Flavours from every corner',
//     emoji:'🌍',
//     img:'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/worldkitchen.jpg',
//     backJs:"set({screen:'home'})", backLabel:'← Home',
//     search:{ value:S.wkSearch||'', placeholder:'Search cuisines…',
//              oninput:'set({wkSearch:this.value})', clearJs:"set({wkSearch:''})" },
//     cats:[ {emoji:'🫕', label:'Boerekos', active:false, onclick:"setQuiet({wkSACulture:'boerekos'})"} , ... ]
//   })
//
// img = a full image URL (header pics live wherever you store them).
// Leave img out and it falls back to the emoji on a warm gradient.
function sectionHeader(o){
  o = o || {};
  const title     = o.title     || '';
  const tagline   = o.tagline   || '';
  const emoji     = o.emoji     || '🍽️';
  const img       = o.img       || '';
  const backJs    = o.backJs    || '';
  const backLabel = o.backLabel || '← Back';
  const cats      = o.cats      || [];
  const s         = o.search    || null;

  const photoLayer = img
    ? `<img src="${img}" onerror="photoSwap(this)" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 35%;display:block;z-index:0;" />
       <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--line) 0%,var(--card2) 100%);z-index:0;"><span style="font-size:52px;">${emoji}</span></div>`
    : `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--line) 0%,var(--card2) 100%);z-index:0;"><span style="font-size:52px;opacity:0.5;">${emoji}</span></div>`;

  const myPlanBtn = o.myPlan
    ? `<button onclick="var _r=document.getElementById('root');if(_r)_r._savedScroll=0;${o.myPlan.onclick||''}" style="position:absolute;top:14px;right:16px;z-index:3;background:rgba(0,0,0,0.42);border:1px solid rgba(255,255,255,0.6);border-radius:20px;color:#fff;font-size:13px;font-weight:bold;padding:5px 13px;cursor:pointer;white-space:nowrap;">🧺 ${o.myPlan.label||'My Plan'} (${o.myPlan.count||0})</button>`
    : '';

  const backBtn = backJs
    ? `<button onclick="var _r=document.getElementById('root');if(_r)_r._savedScroll=0;${backJs}" style="flex-shrink:0;background:rgba(0,0,0,0.5);border:1px solid var(--accent);color:var(--accent);font-size:13px;cursor:pointer;padding:5px 10px;border-radius:6px;white-space:nowrap;">${backLabel}</button>`
    : '';

  // search: clickable (navigate) OR inline input — same visual pill, flex:1
  let searchEl = '';
  if(s){
    if(s.onclick){
      searchEl = `<div onclick="${s.onclick}" style="flex:1;padding:7px 12px;background:rgba(15,8,4,0.75);border:1px solid #4a2a10;border-radius:8px;color:var(--accent2);font-size:13px;cursor:text;">🔍 ${s.placeholder||'Search recipes…'}</div>`;
    } else {
      searchEl = `<div style="flex:1;display:flex;align-items:center;min-height:48px;box-sizing:border-box;padding:4px 12px;background:rgba(15,8,4,0.75);border:1px solid #4a2a10;border-radius:8px;">
        <span style="color:var(--accent2);margin-right:8px;font-size:16px;">🔍</span>
        <input type="text" placeholder="${s.placeholder||'Search recipes…'}" oninput="${s.oninput||''}" value="${s.value||''}" style="flex:1;width:100%;background:none;border:none;outline:none;color:var(--on-media-soft);font-size:16px;line-height:24px;min-width:0;" />
        ${s.value?`<button onclick="${s.clearJs||''}" style="background:none;border:none;color:var(--on-media-soft);font-size:15px;cursor:pointer;flex-shrink:0;">×</button>`:''}
      </div>`;
    }
  }

  const topRow = (backBtn||searchEl)
    ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">${backBtn}${searchEl}</div>`
    : '';

  const header = `
    <div class="header" style="padding:0;overflow:hidden;">
      <div style="position:relative;height:200px;">
        ${photoLayer}
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.05) 0%,rgba(8,4,2,0.88) 100%);z-index:1;"></div>
        ${myPlanBtn}
        <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 14px 12px;">
          ${topRow}
          ${inWarm()
            ? (tagline?`<div style="color:var(--on-media-soft);font-weight:800;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:3px;">${tagline}</div>`:'')
              + `<h1 class="ttl" style="font-size:28px;font-weight:600;color:var(--on-media);margin:0;line-height:1.1;text-shadow:0 2px 10px rgba(0,0,0,0.5);">${emoji} ${title}</h1>`
            : `<h1 class="ttl" style="font-size:22px;font-weight:bold;color:var(--on-media);margin:0 0 2px;text-shadow:0 2px 6px rgba(0,0,0,0.9);">${emoji} ${title}</h1>`
              + (tagline?`<p style="margin:0;font-size:13px;color:#c07040;font-style:italic;">${tagline}</p>`:'')}
        </div>
      </div>
    </div>`;

  let catBlock = '';
  if(cats.length){
    catBlock = `
    <div style="padding:12px 16px 4px;max-width:600px;margin:0 auto;display:flex;flex-wrap:wrap;gap:8px;">
      ${cats.map(c=>`
        <div onclick="${c.onclick||''}" style="flex:1 1 calc(33.333% - 8px);min-width:96px;box-sizing:border-box;background:${c.active?'var(--card2)':'var(--card)'};border:1px solid ${c.active?'var(--accent)':'var(--line)'};border-radius:14px;padding:14px 8px;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;">
          <span style="font-size:24px;">${c.emoji||''}</span>
          <span style="font-size:13px;color:var(--ink);font-weight:bold;line-height:1.2;">${c.label||''}</span>
        </div>`).join('')}
    </div>`;
  }

  return header + catBlock;
}

// §4a.2 / §8 — THE shared "How it works" box. The one collapsible help box that
// sits at the top of every section landing (Standard §4a, item 2). Built ONCE so
// no section hand-rolls its own — that hand-rolling IS the drift this kills (WK,
// Health, Spice, Furry, Meals, Budget each had a bespoke box: different copy,
// colours, toggle keys, and the banned Georgia font). Route every landing here.
//   howItWorks({ steps, openKey, stepper })
//   - steps   : array of HTML step lines (defaults to the universal 5 steps)
//   - openKey : state flag for open/closed (default 'howItWorksOpen', so the
//               shared tap-outside-to-close handler in draw() covers it)
//   - stepper : { state, min, max, decJs, incJs } shows the guest ± control on
//               the right (Standard §4a: one box — link left, stepper right);
//               omit it for a link-only box. guestBar() delegates here.
function howItWorks(o){
  o = o || {};
  const openKey = o.openKey || 'howItWorksOpen';
  const steps = o.steps || [
    '1 · Browse each section and tap <strong style="color:var(--gold);">Recipe ›</strong> to read first',
    '2 · Tick the <strong style="color:var(--gold);">☑ checkbox</strong> on any dish to add to your plan',
    '3 · Add more dishes — portions <strong style="color:var(--gold);">divide automatically</strong>',
    '4 · Tap <strong style="color:var(--gold);">My Plan</strong> for quantities, cost &amp; shopping list',
    '5 · Share your list directly to WhatsApp or your store'
  ];
  let stepperEl = '';
  if(o.stepper){
    const st  = o.stepper;
    const gk  = st.state || 'people';
    const min = (st.min!=null) ? st.min : 1;
    const max = (st.max!=null) ? st.max : 100;
    const decJs = st.decJs || `set({${gk}:Math.max(${min},S.${gk}-1)})`;
    const incJs = st.incJs || `set({${gk}:Math.min(${max},S.${gk}+1)})`;
    stepperEl = `
        <div style="width:1px;height:20px;background:var(--line2);flex-shrink:0;"></div>
        <div style="display:flex;align-items:center;gap:8px;flex:1;">
          <button onclick="${decJs}" style="width:26px;height:26px;border-radius:50%;background:#2a1808;border:2px solid var(--accent);color:var(--accent);font-size:16px;line-height:1;cursor:pointer;flex-shrink:0;">−</button>
          <span style="font-size:22px;color:var(--gold);font-weight:bold;min-width:28px;text-align:center;">${S[gk]}</span>
          <button onclick="${incJs}" style="width:26px;height:26px;border-radius:50%;background:#2a1808;border:2px solid var(--accent);color:var(--accent);font-size:16px;line-height:1;cursor:pointer;flex-shrink:0;">+</button>
          <input type="range" min="${min}" max="${max}" value="${S[gk]}" oninput="S.${gk}=parseInt(this.value);draw();" style="flex:1;accent-color:var(--accent);height:4px;">
        </div>`;
  }
  return `
    <div id="howItWorksBlock" style="background:var(--card);border:1px solid var(--line2);border-radius:10px;padding:10px 14px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <button onclick="set({${openKey}:!S.${openKey}})" style="background:none;border:none;padding:0;color:#c8a84b;font-size:13px;cursor:pointer;white-space:nowrap;display:flex;align-items:center;gap:4px;flex-shrink:0;">
          <span style="font-size:13px;">${S[openKey] ? '▲' : '▼'}</span>
          <span style="text-decoration:underline;text-underline-offset:2px;">How it works</span>
        </button>${stepperEl}
      </div>
      ${S[openKey] ? `
      <div onclick="event.stopPropagation()" style="margin-top:8px;padding:10px 12px;background:var(--card2);border-left:2px solid var(--accent);border-radius:0 6px 6px 0;">
        <div style="font-size:13px;color:var(--ink-soft);line-height:2;">${steps.join('<br>')}</div>
      </div>` : ''}
    </div>`;
}

// §4a.2 back-compat shim — guestBar() = the How-it-works box WITH the guest
// stepper. Kept so Braai/Events keep rendering unchanged; it now delegates to
// howItWorks() so there is ONE source of truth (Standard §8). o.state / o.min /
// o.max / o.decJs / o.incJs drive the stepper; o.howItWorks overrides the steps.
function guestBar(o){
  o = o || {};
  return howItWorks({
    steps: o.howItWorks,
    stepper: { state:o.state, min:o.min, max:o.max, decJs:o.decJs, incJs:o.incJs }
  });
}
// ══ THE NORMALISER AT THE DOOR ═══════ RULED 15 Jul 2026 · Law 6 · Law 45 ══
// ONE definition of the reserved contract slots and their defaults.
// (TINZA_RULINGS.md "THE NORMALISER AT THE DOOR" · sections/TINZA_CONTRACT_SLOTS.md)
//
// STANDALONE ON PURPOSE. rec() (index.js) calls it as its FINAL step. The future
// Chef and Add-a-Recipe paths (source:'chef' | 'user') call the SAME function, so
// EVERY record door produces complete records. ⚖️ Law 6 — one door, not one per room.
//
// PURE — never mutates raw; returns a copy.
// ADDITIVE — new keys only. An existing value ALWAYS carries through; a default
// NEVER overwrites it.
//
// ⛔ IT DOES NOT KNOW THE PER-ROOM INGREDIENT MAP. `ingredients` | `base300` | `base`
//    | `shopping` | braai's nested it.recipe.ingredients — THE ADAPTERS OWN THAT
//    (index.js:307/402). Re-deriving it here would be a SECOND ENGINE. ⚖️ Law 6.

// getIngredients(r) — a SHAPE-UPGRADE, NOT A PARSER.
// Returns [{n,pp,u, qty,unit,name, priceRef?, makeYourOwnId?}].
// ⚖️ BOTH VOCABULARIES COEXIST (ruled 15 Jul): 1,893 recipes and every renderer read
// .n/.pp/.u — returning only {qty,unit,name} would blank the ingredient list on every
// page in the app. The contract's shape is ADDED alongside, never swapped in.
// The WK `·`-string is parsed HERE, at the door, via the EXISTING wkParseIngredients().
function getIngredients(r){
  var src = r && r.ingredients;
  if(src == null) return [];

  // WK ships a `·`-string (1,021 recipes, 7 globals). Reuse worldkitchen.js's parser —
  // never write a second one. adaptWorld() already parses at index-build; this is the
  // safety net for any door that hands us a RAW WK recipe (Chef / Add-a-Recipe).
  if(typeof src === 'string'){
    if(typeof wkParseIngredients !== 'function') return [];
    src = (wkParseIngredients(src) || []).map(function(it){
      return { n: it.name || '', pp: (it.toTaste || it.qty == null) ? null : it.qty, u: it.unit || '' };
    });
  }
  if(!Array.isArray(src)) return [];

  // Reuse index.js's normIng() when it is exposed, so the {n,pp,u} rules live in ONE
  // place. Fall back to the same mapping only if index.js has not loaded yet.
  var items = (typeof normIng === 'function')
    ? normIng(src)
    : src.filter(Boolean).map(function(i){
        return { n: i.n || i.name || '', pp: (i.pp != null ? i.pp : null), u: i.u || '' };
      }).filter(function(i){ return i.n; });

  return items.map(function(i, ix){
    var raw = src[ix] || {};
    var out = {
      n: i.n, pp: i.pp, u: i.u,          // the shape the whole app reads today
      qty: i.pp, unit: i.u, name: i.n    // the contract shape — ADDED, not swapped
    };
    if(raw.priceRef != null)      out.priceRef = raw.priceRef;
    if(raw.makeYourOwnId != null) out.makeYourOwnId = raw.makeYourOwnId;
    return out;
  });
}

function normalizeRecipe(raw){
  var o = raw || {}, out = {}, k;
  for(k in o) if(Object.prototype.hasOwnProperty.call(o, k)) out[k] = o[k];   // copy — never mutate

  out.ingredients = getIngredients(o);
  out.steps    = (o.steps    != null) ? o.steps    : [];
  out.tags     = (o.tags     != null) ? o.tags     : [];
  out.goesWith = (o.goesWith != null) ? o.goesWith : [];

  // 🆕 PROVENANCE IS `source`, NOT `origin`. ⚖️ Law 46 — the word `origin` was ALREADY
  // TAKEN: metaStrip() (below) prints it as a 📍 PIN, fed r.cuisine/country/region.
  // Provenance = source (db|chef|user). Location = origin. One word, one meaning.
  out.source     = (o.source     != null) ? o.source : 'db';
  out.visibility = (o.visibility != null) ? o.visibility : (out.source === 'user' ? 'private' : 'public');

  // 🩸 contains → null. NEVER []. ⚖️ LAW 45 — UNKNOWN IS NOT NO.
  // [] reads as "this recipe contains NO allergens" — a SAFETY CLAIM we have not earned
  // on 2,083 recipes where the field was never derived. null = we do not know yet.
  // PASSTHROUGH ONLY. No auto-derivation until deriveContains() ships with a confirmed list.
  out.contains = (o.contains != null) ? o.contains : null;

  // `yield` is RECIPE-LEVEL and is NOT spice.js's makeYourOwn.yield ({mode,unit,base,
  // step,label}, read at spice.js:7905/7926/8128/8341). Two different paths at two
  // different levels. They do not collide. NEVER flatten one into the other.
  out.yield = (o.yield != null) ? o.yield : null;

  // MF144 · the vessel holder is a reserved passthrough. It was being dropped app-wide:
  // rec() (index.js) hands this door an explicit field list that omitted it, so every
  // finder/search/mood record lost its holder (Cottage Pie opened at 4, no dish line),
  // while direct openers using the source record were fine. The door defaults it here
  // AND rec() now forwards it — census check 12 asserts it survives, so it can't regress.
  out.equipment = (o.equipment != null) ? o.equipment : null;

  // normDiet() (index.js) is the ONE diet vocabulary — MF94-A. Empty → ['unknown'] (Law 45).
  out.diet = (typeof normDiet === 'function') ? normDiet(o.diet)
           : (Array.isArray(o.diet) && o.diet.length) ? o.diet : ['unknown'];

  // versions → [] (ruled 15 Jul). ⚠️ [] is TRUTHY where null was FALSY — every reader that
  // tests `r.versions` as a bare boolean flips. budget.js:283 (_budgetComp) was the one
  // such site and is now guarded with `.length`. If you add a `versions: []` reader,
  // test `.length`, never the array itself. Census check 12 watches this.
  out.versions = (o.versions != null) ? o.versions : [];

  // MF123 · mood → ALWAYS an array, never null. Read from MOOD_TAGS (sections/moodTags.js
  // — THE single tag store, loaded one file before index.js). Untagged → [] = on NO mood
  // shelf. ⚖️ Law 45 — unknown is not yes. ⚖️ Law 6 — one map, never inlined per record.
  //
  // 🩸 KEYED BY tinzaStore.favKey(out) — `source:section:id`, the SAME key favourites use.
  // NOT the bare id: 19 bare ids collide across 38 records, and a duplicate key in an
  // object literal overwrites SILENTLY. favKey runs on `out`, after source/section are
  // defaulted above, so the key is the normalised one. ⚖️ Law 6 · Law 46.
  //
  // ⚠️ [] is TRUTHY. Any reader must test `.length`, never the array itself (same trap
  // `versions: []` sprang above). Census check 17 counts what is tagged.
  if (Array.isArray(o.mood)) out.mood = o.mood;
  else {
    var _mk = (typeof tinzaStore !== 'undefined' && tinzaStore.favKey) ? tinzaStore.favKey(out) : '';
    var _mt = (_mk && typeof MOOD_TAGS !== 'undefined') ? MOOD_TAGS[_mk] : null;
    out.mood = _mt ? _mt.slice() : [];
  }

  return out;
}

// ── SHARED RECIPE-PAGE COMPONENTS (Standard §4b) ──────────────────
// One definition each → every section's recipe page is identical by
// construction. Sections pass CONTENT; the chrome — boxes, arrows,
// info layout, order, colours, sizes — lives here and cannot drift.
// Pairs with qtyBox() + sectionHeader(). Mood is the only exception
// (its colour accents are handled inside the mood section).

// §4b.2 — meta strip under the name: origin · time · kcal
function metaStrip(o){
  o = o || {};
  var chips = [];
  if(o.origin) chips.push('📍 ' + o.origin);
  if(o.time)   chips.push('⏱ ' + o.time);
  if(o.kcal)   chips.push('🔥 ' + kcalChip({kcal:o.kcal}));
  if(!chips.length) return '';
  return '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">'
    + chips.map(function(c){ return '<span style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:6px 11px;font-size:14px;color:var(--ink-soft);">' + c + '</span>'; }).join('')
    + '</div>';
}

// §4b.4 — "How portion size works" collapsible. rawNote optional; bodyOverride
// replaces the default pizza analogy (finger foods explain pieces-per-tier).
function portionHowBox(rawNote, bodyOverride){
  var body = bodyOverride || 'Think of it like slicing a pizza — one dish on its own gives a full helping; add it to a plan with other dishes and each helping gets smaller to share the plate, but the total food stays the same. Want more? Tap + above to add guests.';
  return '<div style="margin-bottom:12px;">'
    + '<span id="howPortion-btn" onclick="(function(){var c=document.getElementById(\'howPortion-body\');var b=document.getElementById(\'howPortion-btn\');var o=c.style.display===\'block\';c.style.display=o?\'none\':\'block\';b.textContent=o?\'▼ How portion size works\':\'▲ How portion size works\';})()" style="font-size:13px;color:var(--accent);cursor:pointer;user-select:none;">▼ How portion size works</span>'
    + '<div id="howPortion-body" style="display:none;background:var(--card);border:1px solid var(--line);border-radius:8px;padding:12px;margin-top:6px;font-size:15px;color:var(--ink-soft);line-height:1.6;">'
    +   body
    +   (rawNote ? '<div style="margin-top:8px;color:#748646;">' + rawNote + '</div>' : '')
    + '</div></div>';
}

// shared titled box shell — the one consistent card used for every titled block
function recipeBox(title, innerHTML){
  return '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px;">'
    + (title ? '<div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin-bottom:8px;">' + title + '</div>' : '')
    + innerHTML + '</div>';
}

// §4b.5 — ingredients box + a single ingredient row (name left, gold amount right)
function ingredientsBox(rowsHTML, n, unitLabel){
  // 11 Jul — this only ever knew how to say "for N people". Spice is 131 BATCH cards
  // (yield in g/ml), so Apricot Jam was rendering "INGREDIENTS · FOR 500 PEOPLE".
  // Pass a unit and it says "makes 500 g" instead. No unit → unchanged for every other room.
  // unitLabel omitted  → a serving-based recipe: "for 4 people"
  // unitLabel given     → a batch: "makes 500 g". An EMPTY string still means batch,
  //                       just with no noun ("makes 6") — e.g. Preserved Lemons, which
  //                       you count rather than weigh. Don't collapse '' back to people.
  var head = (unitLabel != null)
    ? 'Ingredients · makes ' + n + (unitLabel ? ' ' + unitLabel : '')
    : 'Ingredients · for ' + n + ' ' + (n===1?'person':'people');
  return recipeBox(head, rowsHTML);
}
function ingredientRow(name, amount, note){
  var lk = crossLinkFor(ingredientLinks(), name);
  var nameHTML = lk
    ? '<span onclick="'+lk+'" style="color:var(--accent);font-weight:bold;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;">' + name + ' ↗</span>'
    : name;
  return '<div style="display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);">'
    + '<span style="font-size:16px;color:var(--ink2);line-height:1.4;">' + nameHTML + (note ? ' <span style="color:var(--ink-soft);font-size:13px;">(' + note + ')</span>' : '') + '</span>'
    + '<span class="mono" style="font-size:16px;color:var(--gold);font-weight:bold;white-space:nowrap;">' + amount + '</span></div>';
}

// ── MF142 · VESSELS SCALE IN A SLOT (⚖️ Rulings §10 · 24 Jul 2026) ──────────────
// A recipe may carry an OPTIONAL recipe-level field:
//   equipment:[ { n:'22cm springform tin', per:12 } ]   // per = yield-units ONE holder covers
// The engine multiplies by the scaled batch and renders its OWN "🍽️ You'll Need"
// line — the holder scales in a slot, NEVER in method prose (no number inside
// r.method is ever touched). The renderer is UNIT-AGNOSTIC: `per` just has to be in
// the same unit as scaledYield — servings for a serving recipe, g/ml for a preserve.
// No `equipment` field → returns '' → the page is byte-identical (silent absence).
// Pluralise the LAST word only ("22cm springform tin"→"…tins", "ovenproof dish"→
// "…dishes", "muffin tray"→"…trays"): s/ss/sh/ch/x → +es · consonant+y → -y+ies ·
// else → +s. Prep/dimensions live earlier in the phrase, so only the noun changes.
function pluralizeLastWord(name){
  var parts = String(name).split(' ');
  var w = parts[parts.length-1];
  if(!w) return name;
  if(/(s|ss|sh|ch|x)$/i.test(w)) parts[parts.length-1] = w + 'es';
  else if(/[^aeiou]y$/i.test(w)) parts[parts.length-1] = w.slice(0,-1) + 'ies';
  else parts[parts.length-1] = w + 's';
  return parts.join(' ');
}
function equipmentLine(r, scaledYield){
  if(!r || !Array.isArray(r.equipment) || !r.equipment.length) return '';
  var rows = r.equipment.map(function(e){
    var count = Math.max(1, Math.ceil((scaledYield||1) / (e.per||1)));
    // >1 holder → plural noun (e.nPlural override wins for irregulars); 1 stays singular.
    var name  = (count>1) ? (e.nPlural || pluralizeLastWord(e.n)) : e.n;
    var label = (count>1 ? count+' × ' : '1 × ') + name;
    return '<div style="font-size:14px;color:var(--ink2);padding:3px 0;">• '+label+'</div>';
  }).join('');
  // ⚖️ THE HOLDER IS A RECOMMENDATION, NOT A REQUIREMENT (Rulings §10, 25 Jul).
  // A chef owns every tin on this list; a woman cooking at home uses what is in her
  // cupboard, and she must never be told her dish is wrong. So the box GUIDES — it
  // names the size the method was written for, then says out loud that close is fine
  // and what changes if it isn't. Never "you'll need".
  rows += '<div style="font-size:13px;color:var(--ink-soft);line-height:1.5;padding:6px 0 0;">'
        + 'A guide, not a rule — cook it in what you have. Anything close in size works. '
        + 'A smaller dish bakes deeper and needs a little longer; a bigger one bakes flatter and is done sooner.'
        + '</div>';
  return recipeBox('🍽️ What To Cook It In', rows);   // reuse the shared titled box
}
// The per-unit CONTRACT banner (Rulings §10 · point 4). Method prose is authored for
// ONE finished unit; once the batch needs more than one holder — a modelled bake making
// >1 unit (batches>1), or any single holder overflowing its capacity — this states the
// contract so every per-unit ratio in the prose stays correct. Gated on r.equipment so
// a recipe with no declared holder is byte-identical (no banner ever). {unit} = the
// bake's unitWord where known, else "batch". Sits directly under the qty card.
function equipmentContract(r, scaledYield, unitWord, batches){
  if(!r || !Array.isArray(r.equipment) || !r.equipment.length) return '';
  var b = Math.max(1, batches||1);
  var maxHolders = 1;
  r.equipment.forEach(function(e){
    var c = Math.max(1, Math.ceil((scaledYield||1) / (e.per||1)));
    if(c > maxHolders) maxHolders = c;
  });
  var n = Math.max(b, maxHolders);
  if(n <= 1) return '';
  // The noun matters: "all 2" is a dangling number. A modelled bake knows its unit
  // (cake, tray); a soft oven dish does not, so it borrows the honest word — "dish".
  var soft = r.equipment.find(function(e){ return e && e.soft; });
  var unit = unitWord || (soft ? 'dish' : 'batch');
  return '<div style="font-size:13px;color:var(--ink-soft);line-height:1.5;background:var(--card2);border:1px solid var(--line);border-radius:8px;padding:9px 12px;margin-bottom:12px;">'
    + 'This method makes 1 ' + unit + ' — work one at a time. The ingredient amounts above are your total for all '
    + n + ' ' + pluralizeLastWord(unit) + '.'
    + '</div>';
}

// ── MF144 · SOFT oven-dish default (⚖️ shared — every opener seeds through THIS) ──
// A soft oven-dish (lasagne, bobotie, gratin…) has NO bakesPortion round-up model, so
// it scales freely up AND down. When the user hasn't dialled a count, the dial opens at
// the holder's `per` (serves 6) instead of the section's own default. A real user count
// still wins because callers put it FIRST: `S.count || softDefaultN(r, base)`. The dial
// seed lives in ~5 openers (bakes · Search/Mood/Budget · World Kitchen · Health · Events)
// — routing them all through one helper is the whole point (no per-section drift).
function softDefaultN(r, base){
  var s = (r && r.equipment || []).find(function(e){ return e && e.soft; });
  return s ? (s.per || 6) : base;
}
// The soft-dish assumption line for the qtyBox sub-slot. '' when no soft holder → the
// page is byte-identical for every non-soft recipe. One string, one door (Rule Zero).
function softDishNote(r){
  var s = (r && r.equipment || []).find(function(e){ return e && e.soft; });
  return s ? 'Built for a standard dish that serves 6 — scale down for a smaller dish, or make the full dish and freeze the rest.' : '';
}

// §4b.6 — method box + a single numbered step (optional timer HTML)
function methodBox(stepsHTML, startJs){
  return '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px;">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px;">'
    +   '<div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;">Method</div>'
    +   (startJs ? (tierAllows('pro')   // §7 — FREE READS THE RECIPE, PRO COOKS IT: cook mode is Pro
          ? '<button onclick="' + startJs + '" style="background:var(--accent);border:none;border-radius:8px;color:#fff;font-size:13px;padding:8px 14px;cursor:pointer;">👨‍🍳 Start Cooking →</button>'
          : '<span style="background:var(--card2);border:1px dashed var(--line);border-radius:8px;color:var(--ink-soft);font-size:13px;padding:8px 14px;white-space:nowrap;">🔒 Start Cooking — Pro</span>') : '')
    + '</div>' + stepsHTML + '</div>';
}
function methodStep(i, text, timerLabel){
  var timer = timerLabel
    ? '<div style="margin-top:7px;"><span style="display:inline-block;background:var(--card2);border:1px solid var(--accent);border-radius:6px;color:var(--gold);font-size:14px;font-weight:bold;padding:4px 11px;">' + timerLabel + '</span></div>'
    : '';
  return '<div style="display:flex;gap:12px;margin-bottom:16px;align-items:flex-start;">'
    + '<div style="min-width:26px;height:26px;border-radius:50%;background:var(--accent);border:1px solid var(--accent);color:var(--on-media);font-size:15px;font-weight:bold;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">' + (i+1) + '</div>'
    + '<div style="flex:1;"><p style="margin:0;font-size:17px;color:var(--ink2);line-height:1.6;">' + text + '</p>' + timer + '</div></div>';
}

// §4b.7 — Goes Well With pills
// ── SHARED CROSS-LINK MAPS — "remember where the links go" ─────────────
// goesWith pills + named ingredients become clickable when (and only when) they
// have an entry here. Additive: anything WITHOUT an entry renders exactly as before.
// Keys are matched case-insensitively (trimmed). Extend as component recipes are built.
var GOESWITH_LINKS = {
  // → Spice recipes (safe: universal dispatch via RECIPE_SOURCES.spice / openSpiceRecipe)
  'pesto':                      "openSpiceRecipe('basil-pesto')",
  'sambal':                     "openSpiceRecipe('carrot-sambal')",
  'blatjang (apricot chutney)': "openSpiceRecipe('apricot-chutney')",
  'apricot chutney':            "openSpiceRecipe('apricot-chutney')",
  'sliced banana':              "openSpiceRecipe('banana-sambal')",
  'banana sambal':              "openSpiceRecipe('banana-sambal')",
  'gravy':                      "openSpiceRecipe('brown-gravy')",
  'chilli oil':                 "openSpiceRecipe('crispy-chilli-oil')",
  'ranch dip':                  "openSpiceRecipe('creamy-jalapeno-ranch')",
  'tzatziki':                   "openSpiceRecipe('tzatziki')",
  'cucumber raita':             null,  // TODO build Cucumber Raita (Spice > Sambals & Relishes), then wire
  'yellow rice':                null,  // TODO build Yellow Rice / geelrys (Sides & Basics), then wire
  // → Sides & Basics recipes — NOW WIRED (29 Jun): RECIPE_SOURCES.meals + RECIPE_BUILDERS.meals are both live.
  'napoletana sauce':           "openRecipe('meals','sb-napoletana-sauce')",
  'napoletana pizza sauce':     "openRecipe('meals','sb-napoletana-sauce')",
  'pizza sauce':                "openRecipe('meals','sb-napoletana-sauce')",
  'mash':                       "openRecipe('meals','sb-mash')",
  'creamy mash':                "openRecipe('meals','sb-mash')",
  'chips':                      "openRecipe('meals','sb-chips')",
  'slap chips':                 "openRecipe('meals','sb-chips')",
  'oven chips':                 "openRecipe('meals','sb-chips')",
  'tartare':                    "openSpiceRecipe('tartare-sauce')",
  'tartare sauce':              "openSpiceRecipe('tartare-sauce')",
  'pizza dough':                "openRecipe('meals','sb-pizza-dough')",
  // ── PART G · enticing-name aliases (6 Jul) — master bakes cards were renamed to broader,
  //    more appetising names; goesWith resolves by EXACT name, so these keep every existing
  //    goesWith reference (to the OLD name) pointing at the renamed card. ──
  'chocolate cake':             "openRecipe('meals','bk-chocolate-cake')",
  'carrot cake':                "openRecipe('meals','bk-carrot-cake')",
  'vanilla butter cake':        "openRecipe('meals','bk-vanilla-cake')",
  'classic cheesecake':         "openRecipe('meals','bk-classic-cheesecake')",
  'red velvet':                 "openRecipe('meals','bk-red-velvet')",
  'shortbread':                 "openRecipe('meals','bk-shortbread')",
  'chocolate chip cookies':     "openRecipe('meals','bk-choc-chip')",
  'oat cookies':                "openRecipe('meals','bk-oat-cookies')",
  'peanut butter cookies':      "openRecipe('meals','bk-peanut-butter')",
  'ginger biscuits':            "openRecipe('meals','bk-ginger-biscuits')",
  'beer bread':                 "openRecipe('meals','bk-beer-bread')"
};
// ── MF26 · MAKEABLE — every ingredient we can make links to its recipe ──────────
// RULE: the link NEVER changes a price. Cost always comes from PRICE_DB (shop-spend),
// because the shopping list has to put a ROLL in the trolley, not flour and yeast.
// The hand-written entries below are overrides and win. Everything else is merged in
// from the GENERATED makeable.js, so the map can no longer drift behind the recipes.
var INGREDIENT_LINKS_MANUAL = {
  'garlic-ginger paste': "openSpiceRecipe('ginger-garlic-paste')",
  'ginger-garlic paste': "openSpiceRecipe('ginger-garlic-paste')",
  'basil pesto':         "openSpiceRecipe('basil-pesto')",
  // ── 1 Jul · SUPPER versions — "make your own" links to component recipes ──
  'tartare sauce':       "openSpiceRecipe('tartare-sauce')",
  'tartare':             "openSpiceRecipe('tartare-sauce')",
  'instant mash':        "openRecipe('meals','sb-mash')",
  'mash':                "openRecipe('meals','sb-mash')",
  'oven chips':          "openRecipe('meals','sb-chips')",
  'slap chips':          "openRecipe('meals','sb-chips')",
  'chips':               "openRecipe('meals','sb-chips')"
};
// Built lazily on first render (never at load) so it cannot depend on script order.
var _ingLinksCache = null;
function ingredientLinks(){
  if(_ingLinksCache) return _ingLinksCache;
  var m = {};
  for(var mk in INGREDIENT_LINKS_MANUAL) m[mk] = INGREDIENT_LINKS_MANUAL[mk];
  if(typeof MAKEABLE !== 'undefined'){
    for(var k in MAKEABLE){
      var v = MAKEABLE[k];
      var js = (v.type === 'dish')
        ? (v.section === 'spice' ? "openSpiceRecipe('" + v.id + "')" : "openBakesRecipe('" + v.id + "')")
        : (v.section === 'spice'
            ? "openMakeableShelf('spice',{spiceShelf:'" + v.id + "',spiceEntry:null,spiceListOpen:false})"
            : "openMakeableShelf('bakes',{mealCat:'" + v.id + "'})");
      var key = String(k).replace(/_each$/,'').toLowerCase();
      if(!m[key]) m[key] = js;
      var alt = /s$/.test(key) ? key.replace(/s$/,'') : key + 's';   // exact-match map, so seed both
      if(!m[alt]) m[alt] = js;
    }
  }
  _ingLinksCache = m;
  return m;
}
var INGREDIENT_LINKS = INGREDIENT_LINKS_MANUAL;   // legacy name kept alive for any other caller
function crossLinkFor(map, label){
  if(!map || label==null) return null;
  var k = String(label).trim().toLowerCase();
  return (Object.prototype.hasOwnProperty.call(map,k) && map[k]) ? map[k] : null;
}
// Makeable ingredient → shelf cross-link (bakes category / spice shelf). A bare
// set({screen:…}) here made the shelf a NEW section root, so goBack() step-4 sent
// the in-app Back button to Home instead of the recipe you came from (the FMF-style
// leak). The screen change still pushes a history entry whose PRIOR entry is the
// origin recipe, so the fix is only to mark this jump: goBack() then consumes that
// entry with history.back() (popstate restores the origin) instead of jumping Home,
// and no _appNavDepth drift (history.back is the same consume path as a normal
// Back). The flag rides in the pushed snapshot and clears on the popstate. (MF28-4b)
function openMakeableShelf(screen, patch){
  set(Object.assign({}, patch || {}, { screen: screen, _shelfJump: true }));
}

// ── goesWith → openable card, BY NAME (P5) ────────────────────────────────────
// goesWith values already match real card names, so rather than hand-wiring every
// pairing we look the name up in the meals recipe source (breakfast/lunch/supper/
// bakes/sides — the sections openRecipe('meals',id) renders via the shared page).
// The explicit GOESWITH_LINKS map still wins first for special cases (Spice sauces,
// aliases); a null/absent map entry falls through to auto-resolution. EXACT
// normalised-name match only, so "Rice" never grabs "Rice Pudding". Built lazily
// and cached (source arrays are static after load).
var _goesWithNameIndex = null;
function _goesWithNorm(s){ return (typeof tinzaNormalize==='function') ? tinzaNormalize(s) : String(s==null?'':s).toLowerCase().replace(/\s+/g,' ').trim(); }
function _buildGoesWithNameIndex(){
  var idx = {};
  function add(r, src){
    if(!r || !r.id) return;
    var keys = [r.name, r.nameAlt].concat(r.aliases||[]);   // P5b: index nameAlt + aliases too, so English/roman names resolve to native-script cards
    for(var i=0;i<keys.length;i++){
      var k = _goesWithNorm(keys[i]);
      if(k && !idx[k]) idx[k] = {id:r.id, src:src};          // first card of a given name wins
    }
  }
  var mealsArrs = [
    typeof BREAKFAST_RECIPES!=='undefined'?BREAKFAST_RECIPES:[],
    typeof LIGHTLUNCH_RECIPES!=='undefined'?LIGHTLUNCH_RECIPES:[],
    typeof SUPPER_RECIPES!=='undefined'?SUPPER_RECIPES:[],
    typeof BAKES_RECIPES!=='undefined'?BAKES_RECIPES:[],
    typeof SIDES_BASICS_RECIPES!=='undefined'?SIDES_BASICS_RECIPES:[]
  ];
  for(var a=0;a<mealsArrs.length;a++){ (mealsArrs[a]||[]).forEach(function(r){ add(r,'meals'); }); }
  if(typeof wkPool==='function'){ (wkPool()||[]).forEach(function(r){ add(r,'world'); }); }   // P5b: World Kitchen cards clickable too
  return idx;
}
function goesWithLink(label){
  if(label==null) return null;
  if(typeof GOESWITH_LINKS!=='undefined'){
    var k = String(label).trim().toLowerCase();
    if(Object.prototype.hasOwnProperty.call(GOESWITH_LINKS,k) && GOESWITH_LINKS[k]) return GOESWITH_LINKS[k];
  }
  if(!_goesWithNameIndex) _goesWithNameIndex = _buildGoesWithNameIndex();
  var e = _goesWithNameIndex[_goesWithNorm(label)];
  return e ? ("openRecipe('" + e.src + "','" + e.id + "')") : null;
}

function goesWellBox(items){
  if(!items || !items.length) return '';
  return recipeBox('❤ Goes Well With',
    '<div style="display:flex;flex-wrap:wrap;gap:6px;">'
    + items.slice(0,6).map(function(g){
        var lk = (typeof goesWithLink==='function') ? goesWithLink(g) : null;
        if(lk){
          return '<span onclick="'+lk+'" style="padding:6px 13px;border-radius:16px;border:1px solid var(--accent);color:var(--accent);font-size:14px;font-weight:bold;cursor:pointer;">' + g + ' ›</span>';
        }
        return '<span style="padding:6px 13px;border-radius:16px;border:1px solid var(--line);color:var(--ink-soft);font-size:14px;">' + g + '</span>';
      }).join('')
    + '</div>');
}

// ── THE SHARED CROSS-LINK CARD ──────────────────────────────────────
// One clickable card linking a dish to a component recipe it uses (e.g.
// Hawawshi → Pita). Built once so every cross-link looks identical (Rule
// Zero). Tapping opens the target via the universal opener; Back returns
// to THIS recipe (handled by closeRecipe's _viewingRecipe restore).
//   crossLinkBox({ emoji, label, targetName, onclick })
function crossLinkBox(o){
  o = o || {};
  if(!o.onclick || !o.targetName) return '';
  return '<div onclick="' + o.onclick + '" style="background:var(--card2);border:1px solid var(--accent);border-radius:10px;padding:12px 14px;margin-bottom:12px;cursor:pointer;display:flex;align-items:center;gap:12px;">'
    + '<span style="font-size:24px;flex-shrink:0;">' + (o.emoji || '🔗') + '</span>'
    + '<div style="flex:1;min-width:0;">'
    +   '<div style="font-size:13px;color:var(--accent);text-transform:uppercase;letter-spacing:0.06em;">' + (o.label || 'Make your own') + '</div>'
    +   '<div style="font-size:16px;color:var(--ink);font-weight:bold;line-height:1.3;">' + o.targetName + '</div>'
    + '</div>'
    + '<span style="font-size:26px;color:var(--gold);flex-shrink:0;line-height:1;">›</span></div>';
}

// §4b.8 — bottom action pair: Add to Plan · Download
// 🩸 "💾 My Kitchen" was DELETED 15 Jul. It was a save that never saved: an alert()
// stub in every room, and in Meals a 🔖 button writing S.savedRecipes — in memory,
// keyed by BARE ID (so favouriting the events Potato Salad also lit the braai one),
// gone the moment she closed the app. Nothing was migrated because nothing was ever
// on disk. THE HEART (favouriteHeart, top-right of the photo header) IS THE ONLY SAVE.
// ⚖️ Law 3 — a button that cannot do what it says is a lie. ⚖️ Law 6 — one door.
function recipeActions(o){
  o = o || {};
  var add = !tierAllows('pro')   // §7 — Add to Plan is a My-Plan (Pro) entry point; Free sees a Pro chip, not a working button
    ? '<button onclick="" style="flex:1;padding:12px 8px;border-radius:10px;cursor:default;font-size:13px;font-weight:bold;background:var(--card2);border:1px dashed var(--line);color:var(--ink-soft);">📋 Add to Plan — 🔒 Pro</button>'
    : '<button onclick="' + (o.addJs || '') + '" style="flex:1;padding:12px 8px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:bold;'
    + (o.inPlan ? 'background:var(--card2);border:1px solid var(--accent);color:var(--accent);' : 'background:var(--accent);border:1px solid var(--accent);color:#1a0f06;') + '">'
    + (o.inPlan ? '✓ In Plan' : '📋 Add to Plan') + '</button>';
  var dl = tierAllows('pro')   // §7 — Download is Pro (cook/keep). Free reads on screen.
    ? '<button onclick="' + (o.downloadJs || "alert('Download — coming soon')") + '" style="flex:1;padding:12px 8px;border-radius:10px;background:var(--card2);border:1px solid var(--line);color:var(--ink);font-size:14px;cursor:pointer;">⬇️ Download</button>'
    : '<button onclick="" style="flex:1;padding:12px 8px;border-radius:10px;background:var(--card2);border:1px dashed var(--line);color:var(--ink-soft);font-size:14px;cursor:default;">🔒 Download</button>';
  return '<div style="display:flex;gap:8px;margin-bottom:12px;">' + add + dl + '</div>';
}

// §4b.9 — bottom text nav: Back | My Plan | Home
function recipeNav(o){
  o = o || {};
  return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0 36px;border-top:1px solid var(--line);font-size:13px;">'
    + '<button onclick="' + (o.backJs || '') + '" style="background:none;border:none;color:var(--accent);cursor:pointer;">← Back</button>'
    + (o.planJs ? '<button onclick="' + o.planJs + '" style="background:none;border:none;color:var(--accent);cursor:pointer;">🧺 My Plan' + (tierAllows('pro') && o.planCount != null ? ' (' + o.planCount + ')' : '') + '</button>' : '')
    + '<button onclick="' + (o.homeJs || "set({screen:'home'})") + '" style="background:none;border:none;color:var(--ink-soft);cursor:pointer;">Home</button></div>';
}

// §3 — the shared list ROW: [✓] emoji NAME (cream 16 bold) + one feel line (14) + Recipe ›
function recipeRow(o){
  o = o || {};
  var check = o.checked ? '<span style="color:var(--accent);font-size:16px;flex-shrink:0;">✓</span>' : '';
  return '<div onclick="' + (o.onclick || '') + '" style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:6px;cursor:pointer;display:flex;align-items:center;gap:12px;">'
    + check
    + '<div style="flex:1;min-width:0;">'
    +   '<div style="font-size:16px;color:var(--ink);font-weight:bold;line-height:1.3;">' + (o.emoji ? o.emoji + ' ' : '') + (o.name || '') + '</div>'
    +   (o.feel ? '<div style="font-size:14px;color:var(--ink-soft);line-height:1.4;margin-top:2px;">' + o.feel + '</div>' : '')
    + '</div>'
    + '<span style="color:var(--accent);font-size:14px;white-space:nowrap;flex-shrink:0;">Recipe <span style="font-size:22px;font-weight:bold;color:var(--gold);vertical-align:middle;line-height:0;">›</span></span></div>';
}

// §4c — THE SHARED PLAN DISH-ROW. One row, identical in every section's My
// Plan, so Braai / World Kitchen / Events can never drift. Bakes the locked
// layout: NAME (cream 16 bold) -> stacked meta lines under it (secondary) ->
// green Food-cost TOTAL on the right (var(--green-soft) label + var(--green) number). The
// cost is the per-dish TOTAL for the guests chosen, and is OMITTED when the
// dish isn't priced (never faked). Gold var(--gold) stays reserved for the
// shopping list. Sections feed CONTENT only; the chrome lives here.
//   planDishRow({ emoji, name, nameJs, lines:[...], costTotal, openJs, removeJs })
function planDishRow(o){
  o = o || {};
  var emoji = o.emoji ? '<span style="font-size:18px;flex-shrink:0;line-height:1.4;">'+o.emoji+'</span>' : '';
  var lines = (o.lines||[]).filter(Boolean).map(function(l){
    return '<div style="font-size:13px;color:var(--ink-mut);margin-top:2px;line-height:1.45;">'+l+'</div>';
  }).join('');
  var nameOpen = o.nameJs ? ' onclick="'+o.nameJs+'"' : '';
  var nameCur  = o.nameJs ? 'cursor:pointer;' : '';
  var left = '<div'+nameOpen+' style="flex:1;min-width:0;'+nameCur+'">'
    + '<div style="font-size:16px;color:var(--ink);font-weight:bold;line-height:1.35;">'+(o.name||'')+'</div>'
    + lines + '</div>';
  var cost = (o.costTotal!=null)
    ? (inWarm()
        ? '<span class="mono" style="display:inline-flex;align-items:center;gap:6px;background:var(--green-tint);border-radius:999px;padding:5px 11px;font-size:13px;font-weight:500;color:var(--green);white-space:nowrap;"><span style="width:7px;height:7px;border-radius:50%;background:var(--cost-green);flex-shrink:0;"></span>R'+Number(o.costTotal).toLocaleString()+'</span>'
        : '<div style="font-size:12px;color:var(--green-soft);text-align:right;">Food cost</div>'
          + '<div style="font-size:16px;color:var(--green);font-weight:bold;white-space:nowrap;text-align:right;">R'+Number(o.costTotal).toLocaleString()+'</div>')
    : '';
  var openBtn = o.openJs ? '<span onclick="'+o.openJs+'" style="font-size:22px;color:var(--accent);cursor:pointer;line-height:1;">\u203a</span>' : '';
  var rm = o.removeJs ? '<button onclick="'+o.removeJs+'" title="Remove from plan" style="background:none;border:1px solid #6a3030;border-radius:6px;padding:3px 9px;color:#c07a68;font-size:14px;line-height:1;cursor:pointer;">\u2715</button>' : '';
  var btns = (openBtn||rm) ? '<div style="display:flex;align-items:center;gap:8px;margin-top:'+(cost?'6px':'0')+';">'+openBtn+rm+'</div>' : '';
  var right = (cost||btns) ? '<div style="display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;">'+cost+btns+'</div>' : '';
  return '<div style="display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--line3);">'
    + emoji + left + right + '</div>';
}

// §6.3 — PANTRY classifier. Spices / seasonings / herbs / leavening are "you
// may already have" items: they're LISTED separately and kept OUT of the
// headline cost so the budget total stays honest (and so the long tail of
// unpriced spices stops reading as a costing defect). Fresh peppers/chillies
// are real veg, never pantry. Used by buildPlanData() + shoppingView().
function isPantryItem(name){
  var n = ' ' + String(name||'').toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim() + ' ';
  if(/\b(bell|sweet|red|green|yellow|orange|capsicum|scotch|jalapeno|banana)\b/.test(n) && /\bpepper(s)?\b/.test(n)) return false; // fresh peppers = veg
  return /\b(salt|pepper|peppercorns?|paprika|cumin|coriander|turmeric|cinnamon|cloves?|nutmeg|cardamom|cardamon|masala|curry powder|curry spice|curry spices|spice|spices|seasoning|herb|herbs|bay leaf|bay leaves|oregano|thyme|rosemary|sage|marjoram|basil|mint|dill|chilli flakes|chili flakes|chilli powder|cayenne|allspice|mixed spice|garam|berbere|harissa|mitmita|baking powder|baking soda|bicarb|bicarbonate|cream of tartar|vanilla|saffron|caraway|poppy seeds?|mustard seeds?|fenugreek|star anise|aniseed|nigella|sumac|zaatar|tea|teas|coffee|coffees|sambar|sambar powder|khmeli suneli|tarhana|fennel seed|fennel seeds|starch|cornflour|maizena|food colouring|food coloring|spice mix)\b/.test(n);
}

// §6.4 — THE ONE PLAN-DATA BUILDER. Fed raw, already-portioned dishes by ANY
// section, it owns every SHARED concern so Braai / World Kitchen / Events can
// never drift on money: prices through the one engine (priceOf), de-dupes
// (normIngredientKey), aisle-tags (aisleCategory), pack-rounds (PACK_DB) into a
// two-price items[], and sums plan totals + per-dish cost (so a dish's plan-row
// R and the shopping list can never disagree). Sections keep ONLY their own
// portion brain — they hand over TOTAL party amounts; this never re-portions.
//   dish = { id, name, emoji, group, kcalPP, guests, lines:[..], nameJs, openJs,
//            removeJs, ingredients:[{ name, amt, unit:'g'|'kg'|'ml'|'l'|'pcs', priceName }] }
//            amt = TOTAL for the party (section pre-scales).
//   → { dishes:[{…dish, costTotal, costPP}], items:[…two-price…], totals:{…} }
function buildPlanData(dishes){
  dishes = dishes || [];
  var skip = ['water','tap water','ice water','boiling water','warm water','salted water','salt & pepper','salt and pepper','to taste','for serving','to serve',"butcher's string"];
  var map = {};
  // MF124 · was a FOURTH copy of the line arithmetic, and it had the same missing
  // count→weight branch: "80g avocado" priced as ceil(80) x R13 = R1040 on a SHOPPING
  // LIST. 137 ingredient lines app-wide could reach it. Now routed through the one
  // costOneLine(). Returns unrounded rand, exactly as before — the caller sums first
  // and rounds once, so no per-line rounding drift is introduced.
  function lineCook(name, amt, unit){
    var pr = (typeof priceOf==='function') ? priceOf(name) : null;
    if(!pr) return null;
    var line = (typeof costOneLine==='function') ? costOneLine(pr, amt, unit) : null;
    return line ? line.cook : null;
  }
  function add(name, amt, unit, priceName, pantry){
    if(!name || amt==null || amt<=0) return;
    var low = name.toLowerCase();
    for(var i=0;i<skip.length;i++){ if(low.indexOf(skip[i])>-1) return; }
    // de-dup by priceName when known (merges alias dupes: butter / butter or oil
    // / oil or butter -> ONE line, template §4) — else by normalised display name.
    var key = priceName ? ('§'+String(priceName).toLowerCase()) : ((typeof normIngredientKey==='function') ? normIngredientKey(name) : low);
    if(!key) return;
    if(map[key]){ map[key].amt += amt; if(priceName && !map[key].priceName) map[key].priceName = priceName; }
    else map[key] = { name:name, amt:amt, unit:unit, priceName:priceName||null, pantry:!!pantry, aisle:(typeof aisleCategory==='function'?aisleCategory(name):'🧂 Other') };
  }
  var outDishes = [], missing = [], costTotalSum = 0, costPPSum = 0, kcalPPSum = 0, anyCost = false;
  dishes.forEach(function(d){
    var dishCook = 0, priced = false;
    (d.ingredients||[]).forEach(function(ing){
      if(!ing || ing.amt==null) return;
      // pantry spices/seasonings are LISTED but never costed into the headline (§6.3)
      var pantry = (typeof isPantryItem==='function') && isPantryItem(ing.name);
      if(!pantry){
        var c = lineCook(ing.priceName||ing.name, ing.amt, ing.unit);
        if(c!=null){ dishCook += c; priced = true; } else if(ing.name) missing.push(ing.name);
      }
      add(ing.name, ing.amt, ing.unit, ing.priceName, pantry);
    });
    var g = d.guests || S.people || 1;
    var ct = priced ? Math.round(dishCook) : null;
    var pp = priced ? Math.round(dishCook/g) : null;
    if(ct!=null){ costTotalSum += ct; costPPSum += pp; anyCost = true; }
    if(d.kcalPP!=null) kcalPPSum += d.kcalPP;
    outDishes.push(Object.assign({}, d, { costTotal:ct, costPP:pp }));
  });
  // cost each merged line two ways (cook exact / buy pack-rounded) — the same
  // logic as buildShoppingList(); Braai folds onto this builder when it routes.
  var items = Object.keys(map).map(function(k){ return map[k]; });
  var cookTotal = 0, buyTotal = 0;
  items.forEach(function(it){
    var pr = (typeof priceOf==='function') ? priceOf(it.priceName||it.name) : null;
    var pk = pr ? pr.pack : null, need = it.amt;
    // MF114 — a GRAM amount for a COUNT-priced item must become UNITS before it is billed.
    // Lifted verbatim from costRecipe() (core.js:1225) and buildShoppingList() (core.js:1367),
    // which have always done this. buildPlanData() is a COPY that never got it, so a chef card
    // saying "108g eggs" for 2 people billed 216 EGGS at R3.70 = R799 instead of R14.
    // unitToGrams() returns null for 'egg'/'clove'/'pcs'/'' — so a real COUNT is never touched.
    if (pr && pr.per === 'count' && AVG_WEIGHT_G[pr.key]) {
      var _g = (typeof unitToGrams === 'function') ? unitToGrams(need, it.unit) : null;
      if (_g != null) { need = _g / AVG_WEIGHT_G[pr.key]; it.amt = need; it.unit = ''; }
    }
    // MF124 · `need` was converted to whole units just above when the item is
    // count-priced, so costOneLine sees a real count (unit '') and bills it as one.
    // Routed through the one engine rather than keeping a private ceil().
    if(!pr) it.cookCost = null;
    else {
      var _cl2 = (typeof costOneLine==='function') ? costOneLine(pr, need, it.unit) : null;
      it.cookCost = _cl2 ? Math.round(_cl2.cook) : null;
    }
    it.loose=false; it.packLine=false; it.buyAmt=need; it.buyUnit=it.unit; it.buyPacks=0; it.packSize=0;
    if(!pr){ it.buyCost=null; }
    else if(pr.per==='count' && pk && pk.ladder){ var n0=Math.ceil(need), last=pk.ladder[pk.ladder.length-1]; var rung=pk.ladder.find(function(r){return r>=n0;})||(last*Math.ceil(n0/last)); it.buyAmt=rung; it.buyUnit='pcs'; it.packLine=(rung!==n0); it.buyCost=Math.round(rung*pr.price); }
    else if(pr.per==='count'){ var c0=Math.ceil(need); it.buyAmt=c0; it.buyUnit='pcs'; it.buyCost=Math.round(c0*pr.price); }
    else if(pk && pk.ladder){ var lad=pk.ladder, top=lad[lad.length-1], found=lad.find(function(r){return r>=need;}); if(found){ it.buyPacks=1; it.packSize=found; it.buyAmt=found; } else { it.buyPacks=Math.ceil(need/top); it.packSize=top; it.buyAmt=it.buyPacks*top; } it.packLine=true; it.buyCost=Math.round((it.buyAmt/1000)*pr.price); if(pk.loosable && need<it.packSize*0.6){ it.looseTip=Math.round(need); it.looseTipCost=Math.round((need/1000)*pr.price); } }
    else if(pk && pk.size){ var packs=Math.ceil(need/pk.size); it.buyAmt=packs*pk.size; it.buyPacks=packs; it.packSize=pk.size; it.packLine=true; it.buyCost=Math.round(packs*(pk.price!=null?pk.price:(pk.size/1000)*pr.price)); }
    else { it.loose=true; it.buyAmt=Math.round(need*1.10); it.buyCost=Math.round((it.buyAmt/1000)*pr.price); }
    if(!it.pantry){                                  // pantry items never hit the headline totals (§6.3)
      if(it.cookCost!=null) cookTotal += it.cookCost;
      if(it.buyCost!=null) buyTotal += it.buyCost;
    }
  });
  var aisleOrder = ['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  items.sort(function(a,b){ var ai=aisleOrder.indexOf(a.aisle), bi=aisleOrder.indexOf(b.aisle); if(ai!==bi) return ai-bi; return a.name.localeCompare(b.name); });
  // de-dup the missing list, keep it short
  var seen={}, miss=[]; missing.forEach(function(m){ if(!seen[m]){ seen[m]=1; miss.push(m); } });
  // THE green "food cost" total = the per-dish sum (costTotalSum), used by BOTH
  // the plan summary (costTotal) AND the shopping block (cookTotal) so they can
  // never diverge and equal the sum of the visible dish-row greens. (cookTotal
  // from the merged loop is left for reference but not surfaced.) buyTotal (gold)
  // stays the merged, pack-rounded number — it legitimately differs (whole packs).
  return { dishes:outDishes, items:items, totals:{
    cookTotal:anyCost?Math.round(costTotalSum):null, buyTotal:Math.round(buyTotal),
    costPP:anyCost?Math.round(costPPSum):null, costTotal:anyCost?Math.round(costTotalSum):null,
    kcalPP:kcalPPSum?Math.round(kcalPPSum):null, missing:miss } };
}

// §4c — THE ONE GUEST STEPPER CARD (its own shared card, NOT folded into
// howItWorks). Reused on every plan page; the +/- match qtyBox's feel exactly
// (34px green circles) so there is one stepper everywhere.
//   o = { value, decJs, incJs, label, note, portionHowHTML }
function guestStepperCard(o){
  o = o || {};
  var label = o.label || 'Guests';
  var note  = (o.note!=null) ? o.note : 'the whole menu scales to this';
  var val   = (o.value!=null) ? o.value : (S.people || 1);
  return '<div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:12px;margin-bottom:14px;">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">'
    +   '<div><div style="font-size:13px;letter-spacing:2px;color:var(--green-mid);text-transform:uppercase;">👥 ' + label + '</div>'
    +     (note ? '<div style="font-size:13px;color:#718933;margin-top:2px;">' + note + '</div>' : '') + '</div>'
    +   '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">'
    +     '<button onclick="' + (o.decJs||'') + '" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:var(--green-mid);font-size:20px;line-height:1;cursor:pointer;">−</button>'
    +     '<span style="font-size:22px;color:var(--gold);font-weight:bold;min-width:28px;text-align:center;">' + val + '</span>'
    +     '<button onclick="' + (o.incJs||'') + '" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:var(--green-mid);font-size:20px;line-height:1;cursor:pointer;">+</button>'
    +   '</div>'
    + '</div>' + (o.portionHowHTML || '') + '</div>';
}

// §4d / §6.3 — THE ONE SHOPPING BLOCK. Renders buildPlanData()'s items[] +
// totals: aisle-grouped tap-to-tick rows, the TWO totals (food cost green /
// shop spend gold + plain-language reason line), share/print, missing note.
// Whole block is PRO/peekable (§7) via tierAllows('pro').
//   o = { items, totals, checked, toggleFn, shareJs, gmailJs, printJs }
function shoppingView(o){
  o = o || {};
  var items = o.items || [], totals = o.totals || {}, checked = o.checked || {};
  var isPro = (typeof tierAllows==='function') ? tierAllows('pro') : true;
  var toggleFn = o.toggleFn || '';
  var money = function(n){ return 'R' + Math.round(n||0).toLocaleString(); };
  var fmtBuy = function(it){
    var u = it.buyUnit || it.unit;
    if(u==='pcs'){ return Math.ceil(it.buyAmt) + (((it.name||'').toLowerCase().indexOf('egg')>-1) ? ' eggs' : ' pcs'); }
    if(it.buyPacks>0){ var sz = it.packSize || (it.buyAmt/it.buyPacks); var szStr = (sz>=1000 ? (sz/1000)+(u==='ml'?'L':'kg') : sz+(u==='ml'?'ml':'g')); return (it.buyPacks===1 ? szStr : it.buyPacks+'×'+szStr); }
    if(u==='ml'||u==='l'){ var a=it.buyAmt; return a>=1000 ? (Math.round(a/100)/10)+'L' : Math.round(a)+'ml'; }
    var gx=it.buyAmt; return gx>=1000 ? (Math.round(gx/100)/10)+'kg' : Math.round(gx)+'g';
  };
  if(!isPro){
    return '<div style="background:var(--card2);border:1px dashed var(--line);border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;">'
      + '<div style="font-size:32px;margin-bottom:8px;">🔒</div>'
      + '<div style="font-size:14px;color:var(--accent);margin-bottom:6px;font-weight:bold;">Shopping list &amp; cost</div>'
      + '<div style="font-size:13px;color:var(--ink-soft);margin-bottom:10px;line-height:1.6;">Every ingredient across your plan, combined with no duplicates, aisle-sorted and costed two ways.</div>'
      + '<div style="font-size:13px;color:var(--accent);font-weight:bold;">Unlock with Tinza Pro — R90/month</div></div>';
  }
  if(!items.length) return '';
  // pantry spices/seasonings list separately (§6.3) — never in the aisle rows or totals
  var mainItems = items.filter(function(it){ return !it.pantry; });
  var pantryItems = items.filter(function(it){ return it.pantry; });
  var rows = '', lastAisle = null;
  mainItems.forEach(function(it){
    if(it.aisle!==lastAisle){ lastAisle=it.aisle; rows += '<div style="font-size:13px;letter-spacing:0.06em;color:#b56d37;text-transform:uppercase;margin:12px 0 4px;">'+it.aisle+'</div>'; }
    var on = !!checked[it.name];
    var nm = (it.name||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    var loose = it.loose ? ' <span style="color:#9a6238;font-size:12px;">loose</span>' : '';
    var priceStr = (it.buyCost!=null) ? ' · ' + money(it.buyCost) : '';
    var qty = (it.qtyStr!=null) ? it.qtyStr : fmtBuy(it);   // optional per-item display override; falls back to the computed buy amount
    rows += '<div onclick="' + (toggleFn ? toggleFn+"('"+nm+"')" : '') + '" style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--card2);cursor:pointer;opacity:'+(on?'0.4':'1')+';">'
      + '<div style="width:20px;height:20px;border-radius:4px;border:2px solid var(--accent);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:'+(on?'var(--accent)':'transparent')+';color:#fff;font-size:13px;">'+(on?'✓':'')+'</div>'
      + '<span style="flex:1;font-size:15px;color:'+(on?'var(--ink-dim)':'var(--ink2)')+';'+(on?'text-decoration:line-through;':'')+'">'+it.name+loose+'</span>'
      + '<span style="font-size:15px;color:'+(on?'var(--ink-dim)':'var(--gold)')+';font-weight:bold;white-space:nowrap;">'+qty+priceStr+'</span></div>';
  });
  // §6.3 Pantry group — "you may already have", listed but NOT in the totals
  var pantryBlock = pantryItems.length
    ? '<div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--line);">'
      + '<div style="font-size:13px;letter-spacing:0.06em;color:#8a7355;text-transform:uppercase;">🧂 Pantry — you may already have</div>'
      + '<div style="font-size:12px;color:#8a7355;margin:2px 0 6px;">Spices &amp; seasonings — not added to the totals below.</div>'
      + pantryItems.map(function(it){
          var on=!!checked[it.name]; var nm=(it.name||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");
          return '<div onclick="'+(toggleFn?toggleFn+"('"+nm+"')":'')+'" style="display:flex;align-items:center;gap:10px;padding:6px 0;cursor:pointer;opacity:'+(on?'0.4':'0.9')+';">'
            + '<div style="width:18px;height:18px;border-radius:4px;border:2px solid var(--ink-dim);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:'+(on?'var(--ink-dim)':'transparent')+';color:#fff;font-size:12px;">'+(on?'✓':'')+'</div>'
            + '<span style="flex:1;font-size:14px;color:#b0987a;'+(on?'text-decoration:line-through;':'')+'">'+it.name+'</span></div>';
        }).join('')
      + '</div>'
    : '';
  var cook = totals.cookTotal, buy = totals.buyTotal;
  var totalsBlock = '<div style="border-top:1px solid var(--line);margin-top:14px;padding-top:14px;">'
    + (cook!=null ? '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;"><span style="font-size:15px;color:var(--green-soft);">What the food costs</span><span class="mono" style="font-size:20px;color:var(--green);font-weight:bold;">'+money(cook)+'</span></div>' : '')
    + (buy!=null ? '<div style="display:flex;justify-content:space-between;align-items:baseline;"><span style="font-size:16px;color:var(--ink);font-weight:bold;">What you\'ll spend</span><span class="mono" style="font-size:26px;color:var(--gold);font-weight:bold;">'+money(buy)+'</span></div>' : '')
    + ((cook!=null && buy!=null && buy>cook) ? '<div style="font-size:13px;color:#a98f6a;line-height:1.55;margin-top:8px;">More than the food because shops sell whole packs — the extra stays in your kitchen.</div>' : '')
    + ((totals.missing && totals.missing.length) ? '<div style="font-size:12px;color:#b1734c;margin-top:8px;">Not yet costed: '+totals.missing.slice(0,8).join(', ')+(totals.missing.length>8?'…':'')+'</div>' : '')
    + '</div>';
  // §4d — ONE combined bottom collapsible "About these prices & totals":
  // the two costs + the +10% buffer + ways-to-save (loose tips), merged so the
  // wording is identical everywhere (replaces Braai's "ways to save" + Events'
  // "SA retail prices" — same box now). Only the one-line note sits up top.
  var ln = function(g){ return g>=1000 ? (Math.round(g/100)/10)+'kg' : Math.round(g)+'g'; };
  var looseTips = items.filter(function(it){ return it.looseTip; });
  var aboutBody = ''
    + '<p style="margin:0 0 8px;"><strong style="color:var(--ink);">What the food costs</strong> — the exact recipe amounts at SA retail prices. A planning guide, not a quote.</p>'
    + '<p style="margin:0 0 8px;"><strong style="color:var(--ink);">What you\'ll spend</strong> — usually a little more, because shops sell whole packs (a 1&nbsp;kg bag when you need 200&nbsp;g, a dozen eggs when you need eight). The extra stays in your kitchen.</p>'
    + '<p style="margin:0 0 8px;">The <strong style="color:var(--ink);">+10% buffer</strong> on loose / by-weight items covers trimming and spillage — that is separate from pack-rounding; both can show, clearly labelled.</p>'
    + (looseTips.length ? '<div style="border-top:1px solid var(--line);margin:10px 0;"></div><p style="margin:0 0 6px;color:var(--ink);font-weight:bold;">💡 Buy loose to save</p>'
        + looseTips.map(function(t){ return '<div style="display:flex;justify-content:space-between;gap:10px;padding:3px 0;"><span>'+t.name+'</span><span style="color:var(--green-soft);white-space:nowrap;">~'+ln(t.looseTip)+(t.looseTipCost!=null?' ≈ R'+t.looseTipCost:'')+'</span></div>'; }).join('') : '')
    + '<p style="margin:10px 0 0;color:#8a7355;">Estimates from standard packs — watch for specials; bigger bags are often better value if you\'ll use them.</p>';
  var about = '<div style="margin-top:14px;">'
    + '<div id="shop-about-tog" onclick="(function(){var b=document.getElementById(\'shop-about-body\');var t=document.getElementById(\'shop-about-tog\');var o=b.style.display===\'block\';b.style.display=o?\'none\':\'block\';t.innerHTML=(o?\'▼\':\'▲\')+\' About these prices &amp; totals\';})()" style="font-size:13px;color:#b56d37;cursor:pointer;user-select:none;padding:6px 0;">▼ About these prices &amp; totals</div>'
    + '<div id="shop-about-body" style="display:none;background:var(--card2);border:1px solid var(--line);border-radius:8px;padding:12px 14px;font-size:13px;color:var(--ink-soft);line-height:1.6;">'+aboutBody+'</div></div>';
  if(o.noCost){ totalsBlock=''; about=''; }   // quantities-only lists (e.g. drinks): no cost totals / price explainer
  var share = (o.shareJs||o.gmailJs||o.printJs)
    ? '<div style="display:flex;gap:8px;margin-top:12px;">'
      + (o.shareJs ? '<button onclick="'+o.shareJs+'" style="flex:1;padding:10px;border-radius:8px;background:#142e1a;border:1px solid #25d366;color:#25d366;font-size:13px;font-weight:bold;cursor:pointer;">📲 WhatsApp</button>' : '')
      + (o.gmailJs ? '<button onclick="'+o.gmailJs+'" style="flex:1;padding:10px;border-radius:8px;background:var(--card2);border:1px solid var(--line);color:var(--ink);font-size:13px;cursor:pointer;">✉️ Email</button>' : '')
      + (o.printJs ? '<button onclick="'+o.printJs+'" style="flex:1;padding:10px;border-radius:8px;background:var(--card2);border:1px solid var(--line);color:var(--ink);font-size:13px;cursor:pointer;">🖨️ Print</button>' : '')
      + '</div>' : '';
  return '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:14px;">'
    + '<div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin-bottom:4px;">🛒 Shopping List</div>'
    + '<div style="font-size:13px;color:#b56d37;margin-bottom:8px;">✅ Tap items you already have · '+(o.noCost?'quantities for your guest count':'SA retail prices, planning guide only')+'</div>'
    + rows + pantryBlock + totalsBlock + about + share + '</div>';
}

// §4c — THE WHOLE PLAN PAGE. Section feeds RAW dishes (+ header/guest info);
// this calls buildPlanData() (one builder), renders the §4c dish-rows grouped,
// the plan totals (cost pp/total = PRO/peekable §7; kcal = always-on), and
// embeds shoppingView(). Built once so every section's plan page is identical.
//   o = { header:{…sectionHeader…}, quickNavHTML, guests:{value,decJs,incJs,…},
//         dishes:[…raw…], checked, toggleFn, shareJs, gmailJs, printJs, empty }
function planView(o){
  o = o || {};
  var isPro = (typeof tierAllows==='function') ? tierAllows('pro') : true;
  if(!isPro){   // §7 — My Plan is a whole Pro feature; Free gets the SURFACE teaser, not a working plan
    var _hdrLock = (typeof sectionHeader==='function') ? sectionHeader(o.header || {}) : '';
    return '<div>' + _hdrLock + '<div class="content">' + (o.quickNavHTML||'')
      + lockPanel('My Plan', 'Build a meal plan for your guest count, then get one combined, aisle-sorted shopping list costed two ways.')
      + '</div></div>';
  }
  var data = buildPlanData(o.dishes || []);
  var hdr = (typeof sectionHeader==='function') ? sectionHeader(o.header || {}) : '';
  var money = function(n){ return 'R' + Math.round(n||0).toLocaleString(); };
  if(!data.dishes.length){
    return '<div>' + hdr + '<div class="content">' + (o.quickNavHTML||'')
      + '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:16px;text-align:center;color:#b1734c;font-size:14px;">'
      + (o.empty || 'Your plan is empty — add some dishes.') + '</div></div></div>';
  }
  var guests = o.guests ? guestStepperCard(o.guests) : '';
  // group dishes by d.group (preserve first-seen order); '' = ungrouped single list
  var order = [], groups = {};
  data.dishes.forEach(function(d){ var g=d.group||''; if(!groups[g]){ groups[g]=[]; order.push(g); } groups[g].push(d); });
  var rowOf = function(d){ return planDishRow({ emoji:d.emoji, name:d.name, nameJs:d.nameJs, lines:d.lines, costTotal:isPro?d.costTotal:null, openJs:d.openJs, removeJs:d.removeJs }); };
  var secs = '';
  order.forEach(function(g){
    if(g) secs += '<div style="font-size:13px;letter-spacing:2px;color:#b56d37;text-transform:uppercase;margin:14px 0 6px;">'+g+'</div>';
    secs += '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:4px 14px;margin-bottom:12px;">'+groups[g].map(rowOf).join('')+'</div>';
  });
  var t = data.totals;
  var costRow = (t.costPP!=null)
    ? (isPro
        ? '<div style="display:flex;justify-content:space-between;align-items:baseline;"><span style="font-size:14px;color:var(--green-soft);">Est. food cost</span><span style="font-size:15px;color:var(--green);font-weight:bold;">'+money(t.costPP)+' pp · '+money(t.costTotal)+' total</span></div>'
        : '<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:14px;color:var(--green-soft);">Est. food cost</span><span style="font-size:13px;color:var(--accent);font-weight:bold;">🔒 Pro</span></div>')
    : '';
  var kcalRow = (t.kcalPP!=null)
    ? '<div style="display:flex;justify-content:space-between;align-items:baseline;"><span style="font-size:14px;color:var(--ink-soft);">Calories</span><span style="font-size:14px;color:var(--gold);">~'+t.kcalPP+' kcal pp <span style="color:#9a8a6a;">(estimate)</span></span></div>'
    : '';
  // §4g/§3 — summary block: Total dishes · Cost pp + total (Pro) · kcal (always)
  var dishesRow = '<div style="display:flex;justify-content:space-between;align-items:baseline;"><span style="font-size:14px;color:var(--ink-soft);">Total dishes</span><span style="font-size:14px;color:var(--ink);font-weight:bold;">'+data.dishes.length+'</span></div>';
  var totalsCard = '<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:12px;display:flex;flex-direction:column;gap:6px;">'+dishesRow+costRow+kcalRow+'</div>';
  var shop = shoppingView({ items:data.items, totals:data.totals, checked:o.checked, toggleFn:o.toggleFn, shareJs:o.shareJs, gmailJs:o.gmailJs, printJs:o.printJs });
  return '<div>' + hdr + '<div class="content">' + (o.quickNavHTML||'') + guests + secs + totalsCard + shop + (o.footerHTML||'') + '</div></div>';
}

// §4b — THE WHOLE-PAGE ASSEMBLER. This lays out EVERY recipe page with
// the same wrapper, max-width, padding, block order and sizing. Sections
// feed CONTENT only (qty/ingredients/method already built from the shared
// components above) — the page layout itself lives here and cannot differ.
// This is the page every other section is compared against.
// Fixed order: photo+back → name → sub → meta → qty → "how portion" →
//   ingredients → notes-slot → method → goes-well → extras-slot → actions → nav.
// ── UNIVERSAL RECIPE OPENER (the spine) ───────────────────────────
// One opener for the whole app. Any section can open any recipe, and
// Back lands you exactly where you jumped from — across sections.
//
//   resolveRecipe(section,id) -> { item, recipe }   (looks up the data)
//   RECIPE_BUILDERS[section](item,recipe,vr) -> recipePage opts (the view)
//   openRecipe(section,id,opts)   -> opens it + snapshots where you are
//   closeRecipe(extra?)           -> restores that exact spot + scroll
//
// Braai's meat/side path is the reference and is left untouched: it has
// no builder registered, so recipeView() falls through to its existing
// code. Sections migrate onto this one at a time (World Kitchen first).

var RECIPE_SOURCES = {
  // braai — the reference source, already live
  meat: function(id){ return MEAT_GROUPS.flatMap(function(g){return g.items;}).find(function(x){return x.id===id;}); },
  side: function(id){ return SIDES_GROUPS.flatMap(function(g){return g.items;}).find(function(x){return x.id===id;}); }
  // world / health / events / kiddies / spice register as each is migrated
};
var RECIPE_BUILDERS = {}; // section -> function(item,recipe,vr){ return recipePage opts }

function registerRecipeSource(key, fn){ RECIPE_SOURCES[key] = fn; }
function registerRecipeBuilder(key, fn){ RECIPE_BUILDERS[key] = fn; }

function resolveRecipe(section, id){
  var fn = RECIPE_SOURCES[section];
  var item = fn ? fn(id) : null;
  return item ? { item: item, recipe: item.recipe } : null;
}

// Nav-location state keys (mirrors historyKey) — snapshotted so Back can
// restore the exact origin screen. Selection arrays (plans) are excluded
// on purpose: we restore WHERE you were, never what you'd chosen.
// 🩸 26 Jul · §24.8 · MF149-D — PURGED NINE DEAD KEYS. wkCountry + wkSelectedRegion have
// been dead since the WK drill moved to wkContinent → wkRegion → wkDataCountry (25 Jul);
// the other seven are the ones navSignature() dropped in the same commit. Restoring a key
// no room ever sets restores nothing, and a list that names it says the door is there.
var NAV_KEYS = ['screen','eventTab','buffetStep','braiStep','braiCat','braaiView','braaiSidesFilter','activeCat','fingerSection','fingerView','kidsScreen','kidsTheme','kidsCategory','kiddiesView','wkScreen','wkTab','wkDataCountry','wkDataTab','babyView','activeBaby','healthTab','healthGroup','healthGroupTab','moodActiveRecipe','moodPlanView','dogView','catView','activeDog','furryPet','budgetPlanView','budgetStep','cakeCat','beverageCat','mealCat','mealActiveRecipe'];

function snapshotNav(){
  var s = {};
  for(var i=0;i<NAV_KEYS.length;i++){ var k=NAV_KEYS[i]; if(S[k]!==undefined) s[k]=S[k]; }
  var root = document.getElementById('root');
  s._scroll = (root && root._savedScroll != null) ? root._savedScroll : (window.scrollY || (document.scrollingElement && document.scrollingElement.scrollTop) || 0);
  s._viewingRecipe = S.viewingRecipe || null;   // so a recipe→recipe cross-link can return to the origin recipe
  return s;
}

function openRecipe(section, id, opts){
  opts = opts || {};
  // Persist the live list scroll onto the history entry we're leaving, so Back (popstate)
  // returns to the exact spot. App scrolls on <html>, so window.scrollY is the real value.
  try { var _st = history.state; if(_st && _st.tinza){ _st._scroll = window.scrollY; history.replaceState(_st, ''); } } catch(_e){}
  var returnTo = opts.returnTo || snapshotNav();
  var root = document.getElementById('root');
  if(root) root._savedScroll = 0; // the recipe itself opens at the top
  set({ viewingRecipe: { type: section, id: id, returnTo: returnTo, returnStep: opts.returnStep },
        recipeServings: (opts.servings != null ? opts.servings : null) });
}

function closeRecipe(extra){
  var vr = S.viewingRecipe;
  // cross-link return: if we opened this recipe FROM another recipe (and no explicit
  // destination was passed), go back to that origin recipe; otherwise clear to the screen.
  var backToRecipe = (!extra && vr && vr.returnTo && vr.returnTo._viewingRecipe) ? vr.returnTo._viewingRecipe : null;
  // Plain close (no explicit destination, no cross-link origin recipe): the recipe
  // pushed exactly ONE forward history entry when it opened, so CONSUME it with
  // history.back() — popstate's full-snapshot restore is the single authority and
  // brings back the exact list (eventTab + cakeCat/beverageCat/wkCountry/healthGroup…).
  // One Back = one level. The decision keys off OUR OWN _appNavDepth (>0 = there IS a
  // prior app entry to return to), NOT the browser's flaky history.state.tinza — so the
  // path is chosen consistently every time (no 6→7 push anomaly, no stack desync).
  // A set()→draw() close instead would push a fresh state and overshoot list→picker→hub.
  // (extra / cross-link / first-screen-deep-link fall through to the set path below.)
  if(!extra && !backToRecipe && vr && _appNavDepth > 0 && typeof history !== 'undefined'){
    try { history.back(); return; } catch(_e){}
  }
  var patch = { viewingRecipe: backToRecipe, recipeServings: null };
  if(vr && vr.returnTo){
    for(var i=0;i<NAV_KEYS.length;i++){ var k=NAV_KEYS[i]; if(k in vr.returnTo) patch[k]=vr.returnTo[k]; }
    if(vr.returnTo._scroll != null){ var root=document.getElementById('root'); if(root) root._savedScroll = vr.returnTo._scroll; }
  }
  if(extra){ for(var ek in extra){ patch[ek]=extra[ek]; } }
  set(patch);
}

function recipeNotFound(){
  return '<div style="padding:20px;"><button onclick="closeRecipe()" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;">\u2190 Back</button><p style="margin-top:12px;color:var(--ink2);">Recipe not found.</p></div>';
}

// ── BAKES on the universal opener (cross-link target: breads/flatbreads/cakes) ──
// Bakes recipes live in BAKES_RECIPES (meals.js, shape {id,name,emoji,cuisine,
// time,costPP,feel,ingredients:[{n,pp,u}],method:[..],tip,nutrition,storage}).
// bakesRecipeOpts() turns one into recipePage opts using ONLY the shared page
// components, so a cross-linked Pita/Sponge looks identical to every other recipe.
// openBakesRecipe(id) = the universal opener, so Back returns to wherever you
// jumped from (incl. another recipe, via the _viewingRecipe snapshot above).
function bakesRecipeOpts(r, servingsKey){
  if(!r) return { name:'Recipe not found' };
  var _bkTop = topBack(TINZA_CHAINS.meals(), 2);
  // ⭐ versions: overlay the chosen version BEFORE costing/rendering, and show the
  // "Choose your version" strip (Rule Zero — same chips as recipeDetailFromResult).
  // Reached via WK cross-links (openBakesRecipe → openRecipe('bakes')).
  if(typeof applyRecipeVersion==='function') r = applyRecipeVersion(r);
  // ── serving scaler (Session 3 · Option A "caller passes its count"): the section
  // that opens the page names its own count-state key; default keeps the historic
  // S.recipeServings so the bakes browse + every cross-link caller is unchanged.
  var sk = servingsKey || 'recipeServings';
  // MF144 · seed through the shared softDefaultN — a soft oven-dish opens at serves 6,
  // any real user count wins (it's first). Non-soft → base 4 → byte-identical.
  var n = Math.max(1, S[sk] || S.people || softDefaultN(r, 4));
  var isPro = (typeof tierAllows==='function') ? tierAllows('pro') : true;
  // ── bakes portion model (Batch Law · §PART I): bakes answer in WHOLE units — you
  // can't bake ⅓ of a cake. `scale` is the ingredient/cost multiplier: whole units
  // produced for a modelled bake, else the raw people count. bakesPortion() lives in
  // meals.js (guarded); non-bakes recipes get scale===n → byte-identical old output.
  var bakeP = (typeof bakesPortion==='function') ? bakesPortion(r) : null;
  var bakeBatches = bakeP ? Math.max(1, Math.ceil(n / bakeP.perBatch)) : 1;
  var bakeUnits   = bakeP ? bakeBatches * bakeP.perBatch : 0;
  var scale = bakeP ? bakeUnits : n;
  var fmt = function(v,u){
    if(u==='g'||u==='ml'){ return v>=1000 ? (Math.round(v/100)/10)+(u==='g'?'kg':'L') : (Math.round(v*10)/10)+u; }
    return (Math.round(v*10)/10)+(u?(' '+u):'');
  };
  var rows = (r.ingredients||[]).map(function(it){
    if(it.pp==null) return ingredientRow(it.n, '<span style="color:var(--ink-soft);font-style:italic;">to taste</span>');
    var tot = it.pp*scale, u = it.u||'';
    var totStr = (u==='egg') ? (Math.ceil(tot)+' egg'+(Math.ceil(tot)>1?'s':'')) : fmt(tot,u);
    var ppStr  = (u==='egg') ? (it.pp+' egg') : fmt(it.pp,u);
    var amt = (n===1 && !bakeP) ? totStr : '<span style="color:var(--ink-soft);font-weight:normal;font-size:13px;">'+ppStr+' pp · </span>'+totStr;
    return ingredientRow(it.n, amt);
  }).join('');
  // Batch Law (MF120 follow-through): a modelled bake's ingredients header must speak
  // the same language as its stepper. Ungated, this read "for 4 people" beside a stepper
  // saying "makes 1 cheesecake · serves 12" — the sister renderer recipeDetailFromResult
  // already gates on bakeP; this one did not. Now it reads "makes 1 cheesecake". Non-bakes
  // (bakeP null) fall through to the people branch untouched.
  var ingredientsHTML = bakeP
    ? ingredientsBox(rows, bakeBatches, bakeP.unitWord + (bakeBatches>1?'s':''))
    : ingredientsBox(rows, n);
  // MF142 — the scaling vessel (bakes yield in whole units). '' when no equipment field.
  var _eqYield = bakeP ? bakeUnits : n;
  var equipHTML = equipmentContract(r, _eqYield, bakeP?bakeP.unitWord:null, bakeBatches) + equipmentLine(r, _eqYield);
  var stepsHTML = (r.method||[]).map(function(s,i){ return methodStep(i, s); }).join('');
  var methodHTML = methodBox(stepsHTML, '');
  var kcal = (r.nutrition && r.nutrition.kcal!=null) ? r.nutrition.kcal : null;
  var info = '';
  if(r.costPP!=null){
    var costTot = r.costPP*scale;
    var costEach = bakeP ? Math.round(costTot/n) : r.costPP;
    info = costLine({ pp:costEach, total:costTot }); }
  if(kcal!=null){ info += (info?'<br>':'') + kcalChip({ html:'🔥 ~'+kcal+' kcal pp', label:'🔥 Calories' }); }
  // Batch-Law note ("makes 1 cake · serves 12 · 1 slice each") in the qtyBox sub slot.
  var scaleNote = bakeP
    ? (bakeP.mode==='slice'
        ? 'makes '+bakeBatches+' '+bakeP.unitWord+(bakeBatches>1?'s':'')+' · serves '+bakeUnits+' · 1 '+bakeP.pieceWord+' each'
        : 'makes '+bakeBatches+' '+bakeP.unitWord+(bakeBatches>1?'s':'')+' · ~'+bakeUnits+' '+bakeP.pieceWord+'s')
    : softDishNote(r);   // MF144 · SOFT oven-dish assumption ('' when no soft holder → byte-identical)
  // Batch Law: for a modelled bake the stepper counts WHOLE UNITS (1 cheesecake, 2…),
  // not people — so it never reads "4 people" beside "serves 12". Non-bakes unchanged.
  var _incTarget = bakeP ? bakeP.perBatch*(bakeBatches+1) : 0;
  var _decTarget = bakeP ? Math.max(1, bakeP.perBatch*(bakeBatches-1)) : 0;
  var qtyHTML = qtyBox({
    label:'How Much To Make',
    sub: scaleNote,
    total: bakeP ? '' : (n+' '+(n===1?'serving':'servings')),
    n: bakeP ? bakeBatches : n,
    info:info,
    decJs: bakeP ? ("set({"+sk+":"+_decTarget+"})") : "set({"+sk+":Math.max(1,(S."+sk+"||S.people||4)-1)})",
    incJs: bakeP ? ("set({"+sk+":"+_incTarget+"})") : "set({"+sk+":(S."+sk+"||S.people||4)+1})"
  });
  var tipBox   = r.tip     ? recipeBox('💡 Tip', '<div style="font-size:16px;color:var(--ink2);line-height:1.6;">'+r.tip+'</div>') : '';
  var dykBox   = r.didYouKnow ? recipeBox('💡 Did You Know', '<div style="font-size:15px;color:var(--ink2);line-height:1.6;">'+r.didYouKnow+'</div>') : '';
  // ── nutrition macro grid (kcal · protein · carbs · fat) — matches the FMF warm
  // branch so bakes/FMF pages read identically once FMF routes through here.
  var _nut = (r.nutrition && typeof r.nutrition==='object' && r.nutrition.kcal!=null) ? r.nutrition : null;
  var nutriBox = _nut ? recipeBox('📊 Nutrition — per serving', nutritionGrid(_nut)) : '';
  var storeBox = r.storage ? recipeBox('🧊 Storage', '<div style="font-size:15px;color:var(--ink2);line-height:1.5;">'+r.storage+'</div>') : '';
  // ── WhatsApp share button (superset action; matches the FMF warm branch). Passed
  // via recipePage's optional shareHTML slot, so callers that omit it are unchanged.
  var _rid = r.id || (r.name||'').replace(/\s+/g,'-').toLowerCase();
  var _rname = (r.name||'').replace(/'/g,'').replace(/"/g,'');
  var _remoji = r.emoji||'🍰';
  var _waLines = (r.ingredients||[]).filter(function(i){return i.pp;}).map(function(i){
    var raw=i.pp*scale, u=i.u||'';
    var d=(u==='egg')?(Math.ceil(raw)+' egg'+(Math.ceil(raw)>1?'s':'')):((raw>=1000&&(u==='g'||u==='ml'))?(Math.round(raw/100)/10)+(u==='g'?'kg':'L'):(Math.round(raw*10)/10)+u);
    return '• '+i.n+': '+d;
  }).join('\n');
  var _waText = encodeURIComponent(_remoji+' *'+_rname+'*\nFor '+n+' people · '+(r.time?(r.time+' min'):'?')+'\n\nIngredients:\n'+_waLines+'\n\nFrom Tinza tinza.netlify.app');
  var shareHTML = '<button onclick="window.open(\'https://wa.me/?text='+_waText+'\',\'_blank\')" style="width:100%;padding:13px;border-radius:10px;background:var(--card);border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Recipe via WhatsApp</button>';
  return {
    photoName:r.photoName||r.name, photoEmoji:r.emoji||'🍰',
    // ⚖️ §24.9 — a bakes recipe is DEPTH 2 (Family Meals → shelf → recipe), so the photo
    // Back is two up: Family Meals, NAMED. The bottom nav Back stays closeRecipe() —
    // exactly one level, back to the shelf she was reading.
    backJs:_bkTop.backJs, backLabel:_bkTop.backLabel,
    name:r.name,
    sub: r.feel ? '<span style="font-style:italic;">'+r.feel+'</span>' : '',
    meta:{ origin:r.cuisine, time:(r.time?r.time+' min':''), kcal:kcal },
    versionHTML: (typeof versionStripHTML==='function') ? versionStripHTML(r, 'var(--accent)') : '',
    qtyHTML:qtyHTML, equipHTML:equipHTML, ingredientsHTML:ingredientsHTML, methodHTML:methodHTML,
    goesWith: (r.goesWith && r.goesWith.length) ? r.goesWith : [],
    extrasHTML: tipBox + dykBox + nutriBox + storeBox,
    actions: {},   // legacy save deleted 15 Jul — the heart is the only save
    shareHTML: shareHTML,
    nav:{ backJs:'closeRecipe()', homeJs:"closeRecipe({screen:'home'})" }
  };
}
function openBakesRecipe(id){ if(typeof openRecipe==='function') openRecipe('bakes', id); }
registerRecipeSource('bakes', function(id){
  var arr = (typeof BAKES_RECIPES!=='undefined') ? BAKES_RECIPES : [];
  return arr.find(function(x){ return x && x.id===id; }) || null;
});
registerRecipeBuilder('bakes', function(item, recipe, vr){ return bakesRecipeOpts(item); });

// ── THE FAVOURITE HEART ─────────────── ruled 15 Jul · Law 6 · Rule Zero ──
// ONE shared element on the ONE shared recipe page, so it appears in EVERY room
// identically BY CONSTRUCTION — that is the point, not a side effect.
//
// ⚠️ THE KEY IS PERSISTED USER DATA. It must be the SAME key a future Favourites
// shelf computes from allRecipes(), or her hearts go dark the day the shelf ships.
// So we resolve the CANONICAL index record — never a synthetic one — whenever we can.
//
// 🩸 The opener's namespace is NOT the index's section: openRecipe('side'|'meat')
// is section 'braai'; openRecipe('cakes') is section 'events'. Keying off vr.type
// would write 'db:side:potatosalad' today and look for 'db:braai:potatosalad'
// tomorrow. This map is the ONLY place those two vocabularies meet. ⚖️ Law 46.
// 🩸 MEASURED 15 Jul, do not guess (⚖️ Law 22): FMF stamps mealActiveRecipe._section with
// the SCREEN name, not the index section — breakfast/lightlunch/supper are all section
// 'meals', and sidesbasics is 'sides'. Today every FMF id is unique, so a single-hit
// lookup resolves canonically BY LUCK. The day one FMF dish collides, an unmapped
// type mints 'db:supper:potatosalad' — a key that matches no record, ever. Mapped here
// so it is right BY DESIGN. Census 14 fails if any value is not a real index section.
var VR_TYPE_SECTION = {
  meat:'braai', side:'braai', cakes:'events',
  breakfast:'meals', lightlunch:'meals', supper:'meals', sidesbasics:'sides'
};

// Resolve {type,id} from the opener into the canonical index record.
// Falls back to a stamped synthetic so a room the index does not carry (kiddies)
// still gets a working heart instead of a crash. ⚖️ Law 45 — unknown is not no.
function recipeFavRecord(vr){
  if(!vr || !vr.id) return null;
  var sec = VR_TYPE_SECTION[vr.type] || vr.type;
  var idx = (typeof allRecipes === 'function') ? (allRecipes() || []) : [];
  var hits = idx.filter(function(r){ return r.id === vr.id; });
  if(hits.length === 1) return hits[0];
  if(hits.length > 1){                                  // 19 bare ids collide across rooms
    var exact = hits.filter(function(r){ return r.section === sec; });
    if(exact.length) return exact[0];
  }
  return { source:'db', section: sec, id: vr.id };
}

// Tap handler. Rebuilds the record through the ONE resolver, so the key written
// here and the key read by the heart can never drift apart.
function toggleRecipeFavourite(type, id){
  try {
    var rec = recipeFavRecord({ type:type, id:id });
    if(rec) tinzaStore.toggleFavourite(rec);            // TIER-BLIND: the store saves for everyone
  } catch(e){}
  if(typeof draw === 'function') draw();
}

// The heart itself. Outline = not saved · SOLID warm terracotta = saved.
// var(--accent) only — never --gold (shop-spend means money, Law: never mix meaning).
// Mirrors the back button's furniture exactly: same scrim, same border, same radius,
// same top offset — top-RIGHT because that is the scan-endpoint where actions live.
function favouriteHeart(vr){
  if(!vr || !vr.id) return '';
  var saved = false;
  try { saved = tinzaStore.isFavourite(recipeFavRecord(vr)); } catch(e){ saved = false; }
  var fill   = saved ? 'var(--accent)' : 'none';
  var stroke = saved ? 'var(--accent)' : 'var(--ink-soft)';
  var label  = saved ? 'Remove from Favourites' : 'Save to Favourites';
  var js = "toggleRecipeFavourite('" + String(vr.type).replace(/'/g,"\\'") + "','" + String(vr.id).replace(/'/g,"\\'") + "')";
  return '<button onclick="' + js + '" aria-label="' + label + '" aria-pressed="' + (saved ? 'true' : 'false') + '" title="' + label + '"'
    + ' style="position:absolute;top:10px;right:10px;z-index:3;background:rgba(8,4,2,0.65);border:1px solid var(--line2);border-radius:20px;padding:5px 10px;cursor:pointer;line-height:0;">'
    + '<svg width="22" height="22" viewBox="0 0 24 24" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M12 20.7C12 20.7 3.6 15.9 3.6 9.9a4.8 4.8 0 0 1 8.4-3.2 4.8 4.8 0 0 1 8.4 3.2c0 6-8.4 10.8-8.4 10.8z"/>'
    + '</svg></button>';
}

function recipePage(o){
  o = o || {};
  var back = o.backJs
    ? '<button onclick="' + o.backJs + '" style="position:absolute;top:10px;left:10px;z-index:3;background:rgba(8,4,2,0.65);border:1px solid var(--line2);border-radius:20px;color:var(--accent);font-size:13px;padding:5px 12px;cursor:pointer;">' + (o.backLabel || '← Back') + '</button>'
    : '';
  // o.favourite = {type,id} from the opener. Omitted → no heart, so any caller that
  // does not pass it renders byte-identically to before.
  var heart = (typeof favouriteHeart === 'function') ? favouriteHeart(o.favourite) : '';
  var photo   = (typeof recipePhoto === 'function') ? recipePhoto(o.photoName || '', o.photoEmoji || '🍽️', 200, o.photoAlt) : '';
  var sub     = o.sub ? '<div style="font-size:13px;color:var(--ink-soft);margin-bottom:12px;">' + o.sub + '</div>' : '';
  var meta    = (typeof metaStrip === 'function')     ? metaStrip(o.meta || {}) : '';
  var portion = (typeof portionHowBox === 'function') ? portionHowBox(o.portionRawNote || '', o.portionHowText || '') : '';
  var goes    = (typeof goesWellBox === 'function')   ? goesWellBox(o.goesWith || []) : '';
  var actions = (typeof recipeActions === 'function') ? recipeActions(o.actions || {}) : '';
  var nav     = (typeof recipeNav === 'function')     ? recipeNav(o.nav || {}) : '';
  return '<div style="min-height:100vh;background:var(--bg);">'
    + '<div style="position:relative;">' + photo + back + heart + '</div>'
    + '<div style="padding:0 16px;max-width:600px;margin:0 auto;">'
    +   '<h1 style="font-size:22px;font-weight:bold;color:var(--ink);margin:8px 0 2px;line-height:1.25;">' + (o.name || '') + '</h1>'
    +   sub
    +   meta
    +   (o.versionHTML || '')      // version selector slot — sections that pass it (Meals-style strip)
    +   (o.qtyHTML || '')
    +   (o.equipHTML || '')      // MF142 — scaling vessel holders + per-unit contract; '' when no equipment → byte-identical
    +   portion
    +   (o.ingredientsHTML || '')
    +   (o.notesHTML || '')        // fixed slot 1 — section notes (e.g. SA swaps)
    +   (o.methodHTML || '')
    +   goes
    +   (o.extrasHTML || '')       // fixed slot 2 — section extras (cost, tip, trivia, coal guide)
    +   actions
    +   (o.shareHTML || '')        // optional share slot (e.g. WhatsApp) — empty for callers that omit it, so existing pages are byte-identical
    +   nav
    + '</div></div>';
}

// ── RECIPE VERSIONS (⭐ Tinza's Best · ⚡ Quick · 🌱 Veg · 💰 Budget · 🏆 Classic) ──
// A recipe may carry: versions:[{name, icon?, default?, feel, ingredients, method,
// costPP, time, nutrition, tip, storage}]. The active version overlays the base so
// EVERY renderer shows it transparently, and the chosen version flows into My Plan /
// shopping. Recipes WITHOUT `versions` are untouched (fully backwards-compatible).
function activeVersionName(r){
  if(!r || !r.versions || !r.versions.length) return null;
  var sel = (S.recipeVersion||{})[r.id];
  if(sel && r.versions.some(function(v){return v.name===sel;})) return sel;
  var def = r.versions.find(function(v){return v.default;});
  return (def||r.versions[0]).name;
}
function applyRecipeVersion(r){
  if(!r || !r.versions || !r.versions.length) return r;
  var name = activeVersionName(r);
  var v = r.versions.find(function(x){return x.name===name;}) || r.versions[0];
  var out = Object.assign({}, r);
  ['feel','ingredients','method','costPP','time','nutrition','tip','storage','didYouKnow','goesWith','howThisFeels','cookTime','chefNotes','kcal','trivia','pairsWith'].forEach(function(k){
    if(v[k]!=null) out[k]=v[k];
  });
  if(v.delta) out = applyVersionDelta(out, v.delta);   // BD11: delta-merge (tweak the base, don't re-author the whole recipe)
  // BD13: spice cards hold their data in makeYourOwn (object ingredients {qty,unit,name}
  // + string method), not top-level ingredients/method — so run the delta there too.
  if(v.delta && out.makeYourOwn){ out.makeYourOwn = applyMakeYourOwnDelta(out.makeYourOwn, v.delta); }
  // BD12: a Meals delta version inherits the base costPP but may have swapped
  // ingredients (beef→lamb, etc.) — nudge the headline cost by the COMPUTED
  // difference so it stays honest, no hand-set costPP needed. Meals arrays only
  // (WK already recomputes its own); needs a base costPP; an explicit version costPP wins.
  if(v.delta && v.costPP==null && r.costPP!=null && typeof costRecipe==='function'
     && Array.isArray(out.ingredients) && Array.isArray(r.ingredients)){
    // MF124 · both sides now priced by the ONE engine. Same skip rules as before
    // (pantry out), same difference-nudge, but the count->weight bridge is no longer
    // missing — so a delta that swaps a count-priced item no longer moves the headline
    // by hundreds of rand. Measured 21 Jul: 0 deltas currently touch one, so this
    // changes no live number today; it removes a live trap.
    var _b = costRecipe(mealsCostItems(r.ingredients), 1);
    var _m = costRecipe(mealsCostItems(out.ingredients), 1);
    var _bC = _b && _b.priced ? _b.cook : null;
    var _mC = _m && _m.priced ? _m.cook : null;
    if(_bC!=null && _mC!=null) out.costPP = Math.max(0, Math.round(r.costPP + (_mC - _bC)));
  }
  out._activeVersion = v.name;
  return out;
}
// ── MAKE-YOUR-OWN DELTA (BD13) ── the spice-shelf twin of applyVersionDelta.
// Spice cards store makeYourOwn.ingredients as OBJECTS {qty,unit,name} and
// makeYourOwn.method as one string. A version `delta` tweaks them by NAME match:
//   swapIng:[{from:"<name substring>", to:{qty,unit,name}}]   (to may also be {name:"…"} to keep qty/unit)
//   removeIng:[{item:"<name substring>"}]   (bare string also accepted)
//   addIng:[{item:{qty,unit,name}, after?:"<name substring>"}]
//   swapStep:[{from:"<verbatim method substring>", to:"…"}]  ·  addStep:[{text:"…"}]
// Returns a fresh makeYourOwn — the base card is never mutated.
function applyMakeYourOwnDelta(my, d){
  var out = Object.assign({}, my);
  var ings = (out.ingredients||[]).slice();
  var findIdx = function(key){ for(var i=0;i<ings.length;i++){ var nm=ings[i]&&ings[i].name; if(nm && String(nm).indexOf(key)>-1) return i; } return -1; };
  (d.swapIng||[]).forEach(function(s){ var i=findIdx(s.from); if(i>-1){ ings[i]=(s.to&&s.to.qty!=null)?s.to:Object.assign({},ings[i],s.to); } });
  (d.removeIng||[]).forEach(function(rm){ var key=(rm&&rm.item!=null)?rm.item:rm; ings=ings.filter(function(x){ return !(x&&x.name&&String(x.name).indexOf(key)>-1); }); });
  (d.addIng||[]).forEach(function(a){ var item=(a&&a.item!=null)?a.item:a, after=a&&a.after, idx=after?findIdx(after):-1; if(idx>-1) ings.splice(idx+1,0,item); else ings.push(item); });
  out.ingredients = ings;
  if(out.method!=null && (d.swapStep||d.addStep)){
    var m = String(out.method);
    (d.swapStep||[]).forEach(function(s){ m = m.split(s.from).join(s.to); });
    (d.addStep||[]).forEach(function(a){ m = m + ' ' + (a.text!=null?a.text:a); });
    out.method = m;
  }
  return out;
}
// ── VERSION DELTA MERGE (BD11) ── a version may carry `delta` to TWEAK the base
// instead of re-listing the whole recipe: swapIng / addIng / removeIng (addIng
// takes an optional {after:"name"} anchor) and swapStep / addStep. Works whether
// ingredients/method are Meals-style arrays ({n,pp,u} / [steps]) OR WK-style
// strings (" · "-joined ingredients / one-paragraph method). No `delta` ⇒ nothing
// runs, so every existing version renders byte-identical (fully back-compatible).
function applyVersionDelta(out, d){
  if(out.ingredients!=null && (d.swapIng||d.addIng||d.removeIng)){
    var isArr = Array.isArray(out.ingredients);
    var ings = isArr ? out.ingredients.slice() : String(out.ingredients).split(' · ');
    var hit = function(x,key){ var nm = isArr ? (x&&x.n||'') : String(x); return isArr ? nm===key : nm.indexOf(key)>-1; };
    (d.swapIng||[]).forEach(function(s){ for(var i=0;i<ings.length;i++){ if(hit(ings[i],s.from)){ ings[i]=s.to; break; } } });
    (d.removeIng||[]).forEach(function(rm){ ings = ings.filter(function(x){ return !hit(x,rm); }); });
    (d.addIng||[]).forEach(function(a){
      var item=(a&&a.item!=null)?a.item:a, after=a&&a.after, idx=-1;
      if(after){ for(var i=0;i<ings.length;i++){ if(hit(ings[i],after)){ idx=i; break; } } }
      if(idx>-1) ings.splice(idx+1,0,item); else ings.push(item);
    });
    out.ingredients = isArr ? ings : ings.join(' · ');
  }
  if(out.method!=null && (d.swapStep||d.addStep)){
    var mArr = Array.isArray(out.method);
    var steps = mArr ? out.method.slice() : [String(out.method)];
    (d.swapStep||[]).forEach(function(s){ steps = steps.map(function(st){ return String(st).split(s.from).join(s.to); }); });
    (d.addStep||[]).forEach(function(a){
      if(mArr){ var at=(a.after==null?steps.length-1:a.after); steps.splice(at+1,0,a.text); }
      else steps[0] = steps[0]+' '+a.text;
    });
    out.method = mArr ? steps : steps.join(' ');
  }
  return out;
}
// BD12: per-person food cost from Meals {n,pp,u} ingredients — mirrors buildPlanData's
// lineCook (priceOf + per/unit rules) and skips pantry items (§6.3). null if unpriceable.
// ══ MF124 · mealsCostPP() DELETED — it was a second copy of costRecipe's arithmetic
// carrying the same missing count->weight bridge. Only its SKIP RULES survive here;
// the sums are costRecipe's. ⚖️ Law 6.
// Meals skips PANTRY items (salt, spices, bay leaves) — World Kitchen does not skip
// them and drops water instead. Skip rules belong to the caller; arithmetic does not.
function mealsCostItems(ings){
  var out=[];
  (ings||[]).forEach(function(ing){
    if(!ing) return;
    var nm=ing.n||ing.name, amt=(ing.pp!=null?ing.pp:ing.amt), u=ing.u||ing.unit;
    if(!nm || amt==null || amt<=0) return;
    if(typeof isPantryItem==='function' && isPantryItem(nm)) return;
    out.push({ name: ing.priceName||nm, qty: amt, unit: u });
  });
  return out;
}
function setRecipeVersion(id, name){
  var m = Object.assign({}, S.recipeVersion||{}); m[id]=name;
  set({recipeVersion:m});
}
function versionStripHTML(r, color){
  if(!r || !r.versions || !r.versions.length) return '';
  color = color || 'var(--accent)';
  var active = activeVersionName(r);
  var chips = r.versions.map(function(v){
    var on = v.name===active;
    var label = String((v.icon?v.icon+' ':'') + v.name).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var nm  = String(v.name).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    var rid = String(r.id).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');
    return '<button onclick="setRecipeVersion(\''+rid+'\',\''+nm+'\')" style="cursor:pointer;border:1px solid '+color+';border-radius:999px;padding:7px 12px;font-size:13px;font-weight:bold;white-space:nowrap;'
      + (on ? 'background:'+color+';color:#0f0e0c;' : 'background:transparent;color:'+color+';') + '">'+label+'</button>';
  }).join('');
  return '<div style="margin-bottom:14px;">'
    + '<div style="font-size:12px;letter-spacing:1.5px;color:'+color+';text-transform:uppercase;margin-bottom:7px;">🍽️ Choose your version</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:7px;">'+chips+'</div></div>';
}

// Braai cross-links (16 Jun): a filled/dressed dish → its component recipe (base
// dough / dressing). Both ends are Braai sides; opened via the universal opener
// so Back returns to the dish (closeRecipe's _viewingRecipe restore). Rendered
// through the shared crossLinkBox() — same card as World Kitchen (Rule Zero).
var BRAAI_CROSS_LINKS = {
  'roosterkoek-garlic-cheese': { open:"openRecipe('side','roosterkoek')",        name:'Roosterkoek (the base dough)',      emoji:'🍞' },
  'roosterkoek-boerewors':     { open:"openRecipe('side','roosterkoek')",        name:'Roosterkoek (the base dough)',      emoji:'🍞' },
  'biltongsalad':              { open:"openRecipe('side','roquefortbraai')",     name:'Roquefort Blue Cheese Dressing',    emoji:'🧀' },
  'greekbraai':                { open:"openRecipe('side','greekdressingbraai')", name:'Greek Salad Dressing (Ladolemono)', emoji:'🫒' },
  'pestopastasalad':           { open:"openSpiceRecipe('basil-pesto')",          name:'Basil Pesto',                       emoji:'🌿' }
};

// ╔═ NUTRITION + LEFTOVERS ENGINE (computed · Session-3 data-fields · braai pilot) ═
// ══ NUTRITION ENGINE — computed, not authored ═════════════════════════════════
// Per-100g/ml macros [kcal, protein_g, carbs_g, fat_g]. Standard reference values.
var NUTRITION_DB = {
  // fats / oils
  "olive oil":[884,0,0,100],"sunflower oil":[884,0,0,100],"vegetable oil":[884,0,0,100],"canola oil":[884,0,0,100],"sesame oil":[884,0,0,100],"butter":[717,0.9,0.1,81],
  // aromatics / veg
  "garlic":[149,6.4,33,0.5],"onion":[40,1.1,9.3,0.1],"red onion":[40,1.1,9.3,0.1],"spring onion":[32,1.8,7.3,0.2],"baby onions":[40,1.1,9.3,0.1],"baby pickling onions":[40,1.1,9.3,0.1],
  "carrot":[41,0.9,10,0.2],"red chilli":[40,1.9,9,0.4],"green chilli":[40,1.9,9,0.4],"bird's eye chillies":[40,1.9,9,0.4],"fresh ginger":[80,1.8,18,0.8],
  "tomato":[18,0.9,3.9,0.2],"cherry tomatoes":[18,0.9,3.9,0.2],"rosa tomatoes":[18,0.9,3.9,0.2],"baby tomatoes":[18,0.9,3.9,0.2],"ripe tomato":[18,0.9,3.9,0.2],"ripe tomatoes":[18,0.9,3.9,0.2],
  "cabbage":[25,1.3,6,0.1],"white cabbage":[25,1.3,6,0.1],"purple cabbage":[31,1.4,7,0.2],"potato":[77,2,17,0.1],"potatoes":[77,2,17,0.1],"waxy potatoes":[77,2,17,0.1],"sweet potato":[86,1.6,20,0.1],
  "baby spinach":[23,2.9,3.6,0.4],"fresh spinach":[23,2.9,3.6,0.4],"cucumber":[15,0.7,3.6,0.1],"red pepper":[31,1,6,0.3],"green pepper":[20,0.9,4.6,0.2],"bell pepper":[31,1,6,0.3],"bell peppers":[31,1,6,0.3],"mixed bell peppers":[28,1,6,0.3],
  "button mushrooms":[22,3.1,3.3,0.3],"mushrooms":[22,3.1,3.3,0.3],"baby marrow":[17,1.2,3.1,0.3],"baby marrows":[17,1.2,3.1,0.3],"brinjal":[25,1,6,0.2],"corn on the cob":[86,3.3,19,1.4],"sweetcorn":[86,3.3,19,1.4],"frozen peas":[81,5,14,0.4],
  "radishes":[16,0.7,3.4,0.1],"lettuce":[15,1.4,2.9,0.2],"rocket and spinach mix":[25,2.6,3.7,0.7],"raw beetroot":[43,1.6,10,0.2],"mango":[60,0.8,15,0.4],"fresh pineapple":[50,0.5,13,0.1],
  "fresh strawberries":[32,0.7,7.7,0.3],"strawberries":[32,0.7,7.7,0.3],"fresh blueberries":[57,0.7,14,0.3],"ripe bananas":[89,1.1,23,0.3],
  // herbs / spices
  "black pepper":[251,10,64,3.3],"smoked paprika":[282,14,54,13],"paprika":[282,14,54,13],"sweet or smoked paprika":[282,14,54,13],"fresh rosemary":[131,3.3,21,5.9],
  "fresh parsley":[36,3,6,0.8],"flat-leaf parsley":[36,3,6,0.8],"fresh thyme":[101,5.6,24,1.7],"dried thyme":[276,9,64,7],"dried oregano":[265,9,69,4.3],"dried oreganum":[265,9,69,4.3],"dried origanum or rosemary":[265,9,69,4.3],
  "turmeric":[312,10,67,3.3],"turmeric powder":[312,10,67,3.3],"curry powder":[325,14,56,14],"cumin":[375,18,44,22],"ground cumin":[375,18,44,22],"garam masala":[330,13,50,15],"cayenne pepper":[318,12,57,17],
  "chilli flakes":[282,13,50,14],"crushed chilli spice":[282,13,50,14],"bay leaves":[313,8,75,8],"fresh bay leaves":[49,1.2,11,0.4],"fennel seeds":[345,16,52,15],"cinnamon":[247,4,81,1.2],"ground cinnamon":[247,4,81,1.2],
  "garlic powder":[331,16,73,0.7],"fresh coriander":[23,2.1,3.7,0.5],"coriander":[23,2.1,3.7,0.5],"fresh mint":[70,3.8,15,0.9],"fresh mint leaves":[70,3.8,15,0.9],"fresh basil":[23,3.2,2.7,0.6],"fresh dill":[43,3.5,7,1.1],"fresh cilantro":[23,2.1,3.7,0.5],
  "mixed dried herbs":[265,9,69,4.3],"mixed herbs":[265,9,69,4.3],"braai spice blend":[150,10,30,3],"braai spice":[150,10,30,3],"sesame seeds":[573,18,23,50],"saffron":[310,11,65,6],"vanilla essence":[288,0.1,13,0.1],
  // salts / water (zero-macro)
  "coarse salt":[0,0,0,0],"salt":[0,0,0,0],"sea salt":[0,0,0,0],"coarse sea salt":[0,0,0,0],"table salt":[0,0,0,0],"salted water":[0,0,0,0],"water":[0,0,0,0],"ice water":[0,0,0,0],"warm water":[0,0,0,0],"lukewarm water":[0,0,0,0],
  "salt and pepper":[0,0,0,0],"salt and black pepper":[0,0,0,0],"coarse salt and black pepper":[0,0,0,0],"salt and white pepper":[0,0,0,0],"cracked black pepper":[251,10,64,3.3],"cracked black peppercorns":[251,10,64,3.3],
  // sweet / acid / sauce
  "honey":[304,0.3,82,0],"brown sugar":[380,0,98,0],"sugar":[387,0,100,0],"castor sugar":[387,0,100,0],"lemon juice":[22,0.4,6.9,0.2],"fresh lemon juice":[22,0.4,6.9,0.2],"lemon zest":[47,1.5,16,0.3],"lemon":[29,1.1,9,0.3],"lime juice":[25,0.4,8.4,0.1],
  "white vinegar":[18,0,0.9,0],"apple cider vinegar":[18,0,0.9,0],"red wine vinegar":[19,0,0.3,0],"balsamic vinegar":[88,0.5,17,0],"balsamic glaze":[150,0.5,34,0],"vinegar":[18,0,0.9,0],
  "soy sauce":[53,8,5,0.1],"worcestershire sauce":[78,0,19,0],"dijon mustard":[66,4,6,4],"wholegrain mustard":[66,4,6,4],"dijon or english mustard":[66,4,6,4],"tomato sauce":[100,1.4,24,0.2],"tomato paste":[82,4.3,19,0.5],
  "mayonnaise":[680,1,0.6,75],"apricot jam":[250,0.5,62,0],"jam":[250,0.5,62,0],"chutney":[190,0.5,47,0.2],"peri-peri sauce":[70,1,8,4],"peri-peri or bbq sauce":[110,1,22,1],"basting sauce":[110,1,22,1],"basil pesto":[450,4,6,45],"sweet relish or finely diced gherkin":[130,0.5,32,0.2],
  "tinned crushed pineapple":[60,0.4,15,0.1],"cooked chopped tomatoes":[32,1.6,7,0.3],"tinned chopped tomatoes":[32,1.6,7,0.3],"orange juice":[45,0.7,10,0.2],
  // dairy / cheese
  "fresh cream":[340,2,3,36],"cream":[340,2,3,36],"sour cream":[193,2.4,4,19],"milk":[64,3.3,4.8,3.6],"full cream milk":[64,3.3,4.8,3.6],"full-fat plain yoghurt":[61,3.5,4.7,3.3],"plain yoghurt":[61,3.5,4.7,3.3],"greek yoghurt":[97,9,4,5],
  "cheddar":[403,25,1.3,33],"sharp cheddar":[403,25,1.3,33],"feta":[264,14,4,21],"mozzarella":[280,28,3,17],"blue cheese":[353,21,2.3,29],"parmesan":[431,38,4,29],"hard cheese":[400,26,2,32],
  // nuts / dried fruit
  "dried apricots":[241,3.4,63,0.5],"raisins":[299,3.1,79,0.5],"currants":[283,4,74,0.3],"toasted walnuts":[654,15,14,65],"raw almonds":[579,21,22,50],"peanuts":[567,26,16,49],
  // grains / starch / bread / bake
  "cake flour":[364,10,76,1],"plain flour":[364,10,76,1],"bread flour":[361,12,73,1.5],"cornflour":[381,0.3,91,0.1],"couscous":[112,3.8,23,0.2],"pasta":[131,5,25,1.1],
  "white bread":[265,9,49,3.2],"french loaf":[265,9,49,3.2],"roosterkoek":[280,8,52,4],"roosterkoek dough":[280,8,52,4],"digestive biscuits":[471,7,66,20],"puff pastry":[558,7,45,38],"instant yeast":[325,40,41,7.5],"baking powder":[53,0,28,0],
  // legumes / tinned
  "mixed bean salad":[120,6,20,1],"tinned baked beans":[94,5,15,0.5],
  // side proteins / cured / olives
  "eggs":[143,13,0.7,10],"hard-boiled eggs":[143,13,0.7,10],"streaky bacon":[541,37,1.4,42],"streaky bacon or caul fat":[541,37,1.4,42],"sliced biltong":[250,55,3,3],"anchovy fillets":[210,29,0,10],
  "capers in wine vinegar":[23,2.4,5,0.9],"kalamata olives":[115,0.8,6,11],"smoked chorizo":[455,24,2,38],"calamari tubes":[92,15.6,3,1.4],"large prawns":[99,24,0.2,0.3],"fresh mussels":[86,12,3.7,2.2],"firm white fish":[105,23,0,1],
  // sweets / chocolate
  "milk chocolate":[535,7.6,59,30],"dark chocolate":[598,7.8,46,43],"marshmallows":[318,1.8,81,0.2],"mini marshmallows":[318,1.8,81,0.2],"large marshmallows":[318,1.8,81,0.2],
  // alcohol / stock
  "white wine":[82,0.1,2.6,0],"brandy":[231,0,0.1,0],"beef stock":[4,0.5,0.4,0.1],"stock":[4,0.5,0.4,0.1],
  // veg extras
  "halloumi":[321,22,2.2,26],"halloumi & veggie":[321,22,2.2,26],
  "maize meal":[362,8,76,1.5],"coarse maize meal":[362,8,76,1.5],"fish or chicken stock cube":[240,12,20,10],"stock cube":[240,12,20,10],"salad dressing":[400,1,6,40],"boerewors":[297,14,2,26]
};
var NUTRI_ALIAS = {
  "extra-virgin olive oil":"olive oil","extra virgin olive oil":"olive oil","canola or sunflower oil":"sunflower oil","butter or oil":"butter","garlic butter to finish":"butter",
  "fresh garlic":"garlic","crushed garlic":"garlic","onions":"onion","carrots":"carrot","red or yellow pepper":"red pepper","green peppers":"green pepper","mixed bell peppers":"bell peppers",
  "flat-leaf parsley":"fresh parsley","dried origanum or rosemary":"dried oregano","turmeric powder":"turmeric","ground cinnamon":"cinnamon","maldon salt":"sea salt","flaky salt":"sea salt","ground black pepper":"black pepper",
  "castor sugar":"sugar","white sugar":"sugar","fresh lemon juice":"lemon juice","lemon wedges to serve":"lemon","lime wedges to serve":"lime juice","full-fat plain yoghurt":"plain yoghurt","greek yoghurt":"greek yoghurt",
  "sharp cheddar":"cheddar","hard cheese":"parmesan","large prawns":"prawns","firm white fish":"snoek","calamari tubes":"calamari tubes","sweet or smoked paprika":"smoked paprika","bird's eye chillies":"red chilli",
  "coarse maize meal":"maize meal","roosterkoek dough":"roosterkoek","tomato & onion relish":"tomato sauce","tinned baked beans":"tinned baked beans"
};
// per-100g raw, keyed by braai MEAT ITEM id (so the protein line never misses on wording)
var MEAT_NUTRI = {
  boerewors:[297,14,2,26],cocktailwors:[300,12,3,27],rump:[175,22,0,9],fillet:[160,22,0,8],tbone:[200,20,0,13],chuck:[210,19,0,15],shortrib:[250,18,0,20],brisket:[240,18,0,18],
  beefkebabs:[175,22,0,9],beefsouvlaki:[175,22,0,9],turkishkebabs:[240,17,1,18],kudu:[110,22,0,2],beefkofta:[240,17,1,18],marinatedfillet:[165,22,2,8],
  porkchops:[231,21,0,16],porkribchops:[240,20,0,18],spareribs:[290,17,0,24],porkcurrysosaties:[230,20,2,15],dirtyporkneck:[250,18,0,20],porkneckhoneymustard:[255,18,3,19],porkshishkabobs:[180,21,1,10],apricotcurrychops:[235,21,3,15],
  lambchops:[282,17,0,23],lambribchops:[290,16,0,25],lambribs:[300,15,0,27],sosaties:[200,17,3,13],butterfliedleg:[230,18,0,17],lambleganchoviolive:[235,18,1,17],
  honeysoychiicken:[200,18,3,13],greekchicken:[190,18,1,12],lemonherbflatty:[190,19,0,12],yoghurtchickenkebabs:[150,20,2,7],bbqchicken:[205,18,4,13],chickenkebaabs:[150,22,1,6],wings:[203,18,0,14],hardbody:[190,19,0,12],
  snoek:[130,24,0,4],prawns:[99,24,0.2,0.3],mixedseafoodkebabs:[100,20,1,2],espetada:[110,20,2,2],honeymustardSalmon:[210,20,3,13],seafoodpaella:[130,12,10,4],
  mushroomskewers:[22,3.1,3.3,0.3],caulisteaks:[30,2,5,0.5],stuffedbutternut:[45,1,11,0.2],brinjalskewers:[25,1,6,0.2],mixedvegbraai:[40,2,8,0.4],halloumiskewers:[321,22,2.2,26]
};
// non-food / equipment / "to serve" garnish — excluded from the count entirely
var NUTRI_SKIP_RE = /\b(to serve|butcher'?s string|clean green sticks|metal skewers|long metal skewers|foil container|tinfoil|900ml|skewers to|pitasto|dough \(makes)\b/i;

function nutriNorm(name){ return String(name).split('—')[0].trim().toLowerCase().replace(/\s*\(.*?\)\s*/g,'').trim(); }
function nutriLookup(name){ var n=nutriNorm(name); if(NUTRITION_DB[n])return NUTRITION_DB[n]; if(NUTRI_ALIAS[n]&&NUTRITION_DB[NUTRI_ALIAS[n]])return NUTRITION_DB[NUTRI_ALIAS[n]]; return null; }
function nutriGrams(str){
  var m;
  if(m=str.match(/([\d.]+)\s*(g|kg)\s+per\s+p/i)) return parseFloat(m[1])*(m[2].toLowerCase()==='kg'?1000:1);
  if(m=str.match(/([\d.]+)\s*(ml|l)\s+per\s+p/i)) return parseFloat(m[1])*(m[2].toLowerCase()==='l'?1000:1);
  if(m=str.match(/([\d.]+)\s*tbsp\s+per\s+p/i)) return parseFloat(m[1])*15;
  if(m=str.match(/([\d.]+)\s*tsp\s+per\s+p/i)) return parseFloat(m[1])*5;
  if(m=str.match(/([\d.]+)\s*(g|ml)\s*pp\b/i)) return parseFloat(m[1]);
  return null;
}
function computeBraaiNutrition(item){
  if(!item||!item.recipe) return null;
  var ings=item.recipe.ingredients||[], kcal=0,p=0,c=0,f=0,hit=0,tot=0;
  var isMeat = (typeof MEAT_NUTRI!=='undefined') && MEAT_NUTRI[item.id]!=null;
  ings.forEach(function(ing,i){
    if(typeof ing!=='string'||!ing.trim()||ing.trim().charAt(0)==='—') return;
    if(NUTRI_SKIP_RE.test(ing)) return;             // equipment / garnish — not counted
    tot++;
    var mac, grams;
    if(i===0 && isMeat){ mac=MEAT_NUTRI[item.id]; grams=item.soloG || nutriGrams(ing) || 150; }
    else { mac=nutriLookup(ing); grams=nutriGrams(ing); if(grams==null) grams=5; }
    if(!mac) return;                                 // miss (counted in tot, not hit)
    hit++; kcal+=mac[0]*grams/100; p+=mac[1]*grams/100; c+=mac[2]*grams/100; f+=mac[3]*grams/100;
  });
  if(!tot) return null;
  return { kcal:Math.round(kcal), protein_g:Math.round(p), carbs_g:Math.round(c), fat_g:Math.round(f), cover:hit/tot, hit:hit, tot:tot, isMeat:isMeat };
}

// ── shared nutrition grid (same markup as the superset's nutriBox) ──
function nutritionBoxHTML(nut, isMeat){
  if(!nut || nut.kcal==null) return '';
  // routes through the ONE grid renderer (nutritionGrid): grid on Pro/Deluxe, "\ud83d\udcca \u2022 \u2022 \u2022" teaser on Free.
  var _pro = tierAllows('pro');
  var caveat = (isMeat && _pro) ? '<div style="font-size:12px;color:var(--ink-soft);margin-top:8px;line-height:1.4;">Calories are for a regular trim \u2014 a fattier cut runs higher.</div>' : '';
  return (typeof recipeBox==='function') ? recipeBox('\ud83d\udcca Nutrition \u2014 per serving' + (_pro?' (estimate)':''), nutritionGrid(nut) + caveat) : '';
}
// ── LEFTOVER IDEAS (Pro content · keyed by BASE LEFTOVER, not meat group) ──
// Reframed 7 Jul (TINZA_LEFTOVERS_RESEARCH.md): the star leftover is as often rice/
// bread/pap/veg as it is meat. Ideas lean unusual-first — never the sad sandwich.
var LEFTOVER_IDEAS = {
  rice:    ['Crisp it into egg-and-mayo rice cakes, pan-fried till golden','Fry into nasi- or kimchi-style rice with whatever veg is around','Roll into cheese-stuffed arancini balls, crumbed and fried','Stir a handful into soup for instant body','Simmer with milk, sugar & cinnamon into rice pudding'],
  bread:   ['Soak into pain perdu \u2014 "lost bread" rescued with egg & milk','Tear into panzanella; tomatoes, oil & herbs bring it back to life','Blitz into pangrattato: garlicky toasted crumbs over pasta','Layer into a savoury cheese-and-herb strata bake','Cube and bake into croutons for soup'],
  pasta:   ['Bake into a frittata di pasta \u2014 egg, cheese, golden edges','Toss cold with a sharp vinaigrette & leftover veg into a salad','Layer into a bubbling cream-and-cheese gratin','Crisp the edges in a hot pan for pasta "chips"'],
  potato:  ['Fry into bubble & squeak patties with any leftover veg','Crisp into loaded potato-skin "nachos"','Fold into a Spanish-style frittata','Blitz into a quick, creamy potato soup'],
  pap:     ['Next-morning breakfast: warm with milk, sugar & a little cinnamon','Slice cold stiff pap and fry into crispy "pap chips"','Crumble into a pap-and-sheba bake with grated cheese','Bind into pap fritters and pan-fry golden'],
  'roast-veg': ['Blitz into a smoky roasted-veg soup','Fold into a frittata or through fritter batter','Layer into wraps or a grain bowl with a punchy dressing','Cut braai mielies off the cob into a charred corn salsa','Pile onto toast with feta & herbs'],
  chicken: ['Shred into wraps with a zingy slaw','Fold into a creamy tetrazzini-style pasta bake','Drop into a fast noodle or tortilla soup','Pile into tacos or nachos with pickled onion'],
  beef:    ['Jan Braai\'s trick: freeze the offcuts in a tub till you have enough for a braai-meat lasagne or potjie','Quick stroganoff \u2014 onions, mushrooms & chutney folded through pap or pasta','Dice into a breakfast hash with potato & a fried egg','Pile onto meaty nachos with melted cheese'],
  lamb:    ['Fold into a quick lamb curry','Warm into pita with tzatziki & tomato','Layer into a shepherd\'s pie','Toss cold through a grain & herb salad'],
  pork:    ['Pull into soft rolls with apple & slaw','Dice into egg fried rice or a breakfast hash','Shred for tacos with pickled onion','Toss through noodles with soy & ginger'],
  seafood: ['Flake into a seafood pasta or risotto','Bind into fishcakes with mash & herbs','Pile onto toast with lemon, chilli & olive oil','Stir through a cold noodle salad'],
  beans:   ['Simmer into a smoky soup or chilli','Mash into fritters or a quick dip','Toss cold through a grain salad','Blitz into a creamy hummus-style spread'],
  cheese:  ['Melt the odds and ends into a bubbling toastie or bake','Grate into fritter or scone batter','Blitz hard-cheese ends into a rough pesto-style sauce','Crumble over roasted veg to finish'],
  fruit:   ['Blend into a smoothie or freeze into popsicles','Simmer into a compote for yoghurt or pancakes','Fold into a quick loaf or muffins','Grill or caramelise as a warm dessert'],
  egg:     ['The universal binder \u2014 turns almost any leftover into a frittata, patty or fried rice','Whisk into a quick shakshuka base','Hard-boil for a fast salad or sandwich topper']
};
// Heritage hook — the world's best dishes were born from leftovers (rotates).
var LEFTOVER_HERITAGE = [
  'Nasi goreng, Indonesia\'s national dish, is really a clever way to use up yesterday\'s rice.',
  'French toast\'s real name \u2014 pain perdu \u2014 means "lost bread": stale bread rescued with egg and milk.',
  'Bubble & squeak turned leftover roast veg into something the British actively crave.',
  'Chilaquiles is a beloved Mexican breakfast built from yesterday\'s tortillas, crisped in salsa.',
  'Ribollita \u2014 Tuscan for "reboiled" \u2014 is yesterday\'s soup, better the second day.',
  'Feijoada, Brazil\'s national stew, began as beans cooked with the day\'s meat scraps.',
  'Tetrazzini exists to reinvent leftover roast chicken into a creamy pasta bake.'
];
// ── FOOD-SAFETY / STORAGE ENGINE (ONE source, TWO views: leftovers + storage) ──
// Safety CLASSES; both the leftover "keep it safe" note and the Storage box read here.
var SAFETY_CLASS = {
  starch:     { strict:true,  fridge:'1 day (cool fast)',        freeze:'freezes 1\u20132 months',  reheat:'reheat once, steaming hot',
                note:'Rice, pasta, pap & potato need extra care: cool fast (spread thin \u2014 never leave it in the pot), refrigerate within 1 hour (sooner on a hot day) and eat within a day or so. Reheat once until steaming hot, and only what you\'ll eat. The toxin these starches can form isn\'t destroyed by reheating \u2014 safe storage, not reheating, is what protects you.' },
  cookedMeat: { strict:false, fridge:'3\u20134 days',             freeze:'freezes ~3 months',       reheat:'reheat once, steaming hot',
                note:'Cool and refrigerate within 2 hours, keep below 5\u00b0C, and reheat once until piping hot.' },
  seafood:    { strict:false, fridge:'1\u20132 days',            freeze:'freezes 1\u20132 months',  reheat:'reheat once, steaming hot',
                note:'Cooked seafood is best within a day or two \u2014 chill within 2 hours and reheat once, piping hot.' },
  cookedVeg:  { strict:false, fridge:'3\u20134 days',             freeze:'freezes 2\u20133 months',  reheat:'reheat once, steaming hot',
                note:'Cool and refrigerate within 2 hours, keep below 5\u00b0C, and reheat once until piping hot.' },
  dairy:      { strict:false, fridge:'3\u20134 days',             freeze:'freezing changes texture', reheat:'',
                note:'Keep chilled below 5\u00b0C and covered; use within a few days.' },
  fruit:      { strict:false, fridge:'2\u20133 days',             freeze:'freezes well for smoothies',reheat:'',
                note:'Keep chilled; overripe fruit freezes well for smoothies and baking.' },
  bake:       { strict:false, fridge:'airtight, 2\u20133 days',   freeze:'freezes well',            reheat:'',
                note:'Keep airtight at room temperature for 2\u20133 days, or freeze for longer.' },
  default:    { strict:false, fridge:'3\u20134 days',             freeze:'freezes well',            reheat:'reheat once, steaming hot',
                note:'Cool and refrigerate within 2 hours, keep below 5\u00b0C, and reheat once until piping hot.' }
};
// base-leftover key → safety class
var LEFTOVER_CLASS = {
  rice:'starch', pasta:'starch', potato:'starch', pap:'starch',
  beef:'cookedMeat', lamb:'cookedMeat', pork:'cookedMeat', chicken:'cookedMeat',
  seafood:'seafood', 'roast-veg':'cookedVeg', beans:'cookedVeg',
  cheese:'dairy', fruit:'fruit', bread:'bake', egg:'default'
};
function _safetyClassFor(keys){
  var cls='default', locked=false;
  (keys||[]).forEach(function(k){
    var c=LEFTOVER_CLASS[k]; if(!c || !SAFETY_CLASS[c]) return;
    if(SAFETY_CLASS[c].strict){ cls=c; locked=true; }      // strict (starch) always wins
    else if(!locked){ cls=c; }
  });
  return SAFETY_CLASS[cls] || SAFETY_CLASS.default;
}
function leftoverBoxHTML(keys){
  if(typeof keys==='string') keys=[keys];
  keys=(keys||[]).filter(function(k){ return LEFTOVER_IDEAS[k]; });
  if(!keys.length) return '';
  var isPro = tierAllows('pro');   // §7 level gate (Deluxe==Pro), never USER_TIER==='pro'
  // Food-safety note lives ONCE, in the always-free Storage box (its natural home, and
  // it always renders alongside leftovers) — not repeated here, to avoid duplication.
  if(!isPro){
    var teaser='<div style="text-align:center;padding:4px 0;"><div style="font-size:20px;color:var(--accent);letter-spacing:5px;margin-bottom:4px;">\u267b \u2022 \u2022 \u2022</div><div style="font-size:13px;color:var(--ink-soft);">Leftover ideas \u2014 <strong style="color:var(--accent);">Tinza Pro R90/month</strong></div></div>';
    return (typeof recipeBox==='function') ? recipeBox('\u267b\ufe0f Leftover ideas', teaser) : '';
  }
  var heritage = LEFTOVER_HERITAGE.length ? '<div style="font-size:12.5px;color:var(--ink-soft);font-style:italic;margin-bottom:10px;line-height:1.45;">\ud83d\udca1 '+LEFTOVER_HERITAGE[Math.floor(Math.random()*LEFTOVER_HERITAGE.length)]+'</div>' : '';
  var body = keys.map(function(k){
    var label = keys.length>1 ? '<div style="font-size:12px;font-weight:bold;color:var(--accent);text-transform:capitalize;margin:6px 0 3px;">'+k.replace('-',' ')+'</div>' : '';
    var lis = LEFTOVER_IDEAS[k].map(function(x){ return '<li style="margin-bottom:6px;line-height:1.5;">'+x+'</li>'; }).join('');
    return label + '<ul style="margin:0 0 4px;padding-left:20px;font-size:15px;color:var(--ink2);">'+lis+'</ul>';
  }).join('');
  return (typeof recipeBox==='function') ? recipeBox('\u267b\ufe0f Leftover ideas', heritage + body) : '';
}
// ── STORAGE box (same SAFETY_CLASS engine · Pro-gated, but the safety line always shows) ──
// WK leftover-key deriver: map a World Kitchen card to a LEFTOVER_IDEAS key by its main
// component (protein → starch → beans → cheese → veg). Desserts & drinks get none.
function wkLeftoverKeys(r){
  if(!r) return null;
  if(/dessert|drink/.test((r.course||'').toLowerCase())) return null;
  var hay=((typeof r.ingredients==='string'?r.ingredients:'')+' '+(r.name||'')+' '+(r.nameAlt||'')).toLowerCase();
  var map=[
    [/\b(beef|mince|steak|brisket|oxtail)\b/,'beef'],
    [/\b(lamb|mutton)\b/,'lamb'],
    [/\b(pork|bacon|ham|speck|chorizo|sausage)\b/,'pork'],
    [/\b(chicken|poultry)\b/,'chicken'],
    [/\b(prawn|shrimp|fish|octopus|squid|calamari|mussel|seafood|cod|salmon|tuna|anchov)\b/,'seafood'],
    [/\b(orzo|pasta|spaghetti|noodle|macaroni|bucatini|kritharaki)\b/,'pasta'],
    [/\b(rice|risotto|pilaf)\b/,'rice'],
    [/\b(potato)\b/,'potato'],
    [/\b(beans|lentil|chickpea|split pea|fava)\b/,'beans'],
    [/\b(feta|halloumi|graviera|kefalotyri|parmesan|cheese)\b/,'cheese'],
    [/\b(bread|phyllo|filo|loaf|pita)\b/,'bread']
  ];
  for(var i=0;i<map.length;i++){ if(map[i][0].test(hay)) return [map[i][1]]; }
  if(/\b(aubergine|eggplant|courgette|zucchini|tomato|pepper|vegetable|spinach|greens|okra|mushroom)\b/.test(hay)) return ['roast-veg'];
  return null;
}
function storageBoxHTML(cls){
  var sc = SAFETY_CLASS[cls]; if(!sc) return '';
  var isPro = tierAllows('pro');   // §7 level gate (Deluxe==Pro), never USER_TIER==='pro'
  var safetyLine='<div style="font-size:12px;color:var(--ink-soft);margin-top:8px;line-height:1.45;">'+sc.note+'</div>';
  if(!isPro){
    var teaser='<div style="text-align:center;padding:4px 0;"><div style="font-size:20px;color:var(--accent);letter-spacing:5px;margin-bottom:4px;">\ud83d\udce6 \u2022 \u2022 \u2022</div><div style="font-size:13px;color:var(--ink-soft);">Storage guide \u2014 <strong style="color:var(--accent);">Tinza Pro R90/month</strong></div></div>';
    return (typeof recipeBox==='function') ? recipeBox('\ud83d\udce6 Storage & safety', teaser + safetyLine) : '';
  }
  var rows=[['Fridge',sc.fridge],['Freezer',sc.freeze]]; if(sc.reheat) rows.push(['Reheat',sc.reheat]);
  var grid=rows.map(function(r){ return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--card2);font-size:14px;"><span style="color:var(--ink-soft);">'+r[0]+'</span><span style="color:var(--ink2);font-weight:600;">'+r[1]+'</span></div>'; }).join('');
  return (typeof recipeBox==='function') ? recipeBox('\ud83d\udce6 Storage & safety', grid + safetyLine) : '';
}


function recipeView(){
  const vr=S.viewingRecipe;
  // Universal dispatch: any migrated section renders through its builder.
  // Braai (meat/side) has no builder, so it falls through to the code below.
  if(vr && vr.type && RECIPE_BUILDERS[vr.type]){
    var res = resolveRecipe(vr.type, vr.id);
    if(!res) return recipeNotFound();
    var _opts = RECIPE_BUILDERS[vr.type](res.item, res.recipe, vr) || {};
    _opts.favourite = { type: vr.type, id: vr.id };   // the heart — one shared element, every room
    return recipePage(_opts);
  }
  let item, recipe;
  const isMeat = vr.type==="meat";
  if(isMeat){ item=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  else { item=SIDES_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  recipe=item?.recipe;
  if(!item||!recipe) return `<div style="padding:20px;"><button onclick="set({viewingRecipe:null})" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;">← Back</button><p style="margin-top:12px;">Recipe not found.</p></div>`;
  const rl=vr.returnStep===2?"Mains":vr.returnStep===3?"Sides":"Plan";
  const p = S.recipeServings || S.people;
  const ap = APPETITE[S.appetite];
  function fmtG(g){ return g >= 1000 ? (g/1000).toFixed(1)+"kg" : g+"g"; }

  // ── QUANTITY BLOCK (shared qtyBox — lives directly under the name) ──
  let quantityBlock = "";
  let meatPP = 0;   // cut-based per-person grams — ONE source for the green box AND the main-protein ingredient line (Part C reconcile)
  if(isMeat){
    const alreadySelected = S.selectedMeats.includes(vr.id);
    const numMeats = S.selectedMeats.length;
    const isSolo = !(alreadySelected && numMeats > 1);
    // Portion: cut-based (Standard §6.1) — mirrors calcMeat so the recipe page,
    // plan rows and shopping list agree. Kebabs counted RAW, never the skewer.
    const base = (typeof braaiBaseG==="function" ? braaiBaseG(item) : (item.soloG||0)) || 0;
    const spread = isSolo ? 1 : meatSpreadMult(numMeats);
    const pp = Math.round(base * spread * ap.mult);
    meatPP = pp;
    const totalDisplay = fmtG(pp * p);
    const ppLine = `${pp}g per person`;
    const portionNote = isSolo ? "full portion" : `shared across ${numMeats} meats`;
    // Food cost (Standard §4b): per person AND total for the guests selected.
    let costInfo = "";
    if(typeof braaiMeatCostPP==="function"){
      const cpSolo = braaiMeatCostPP(item);
      if(cpSolo != null){
        const cpp  = isSolo ? cpSolo : Math.round(cpSolo * meatSpreadMult(numMeats));
        const ctot = cpp * p;
        costInfo = costLine({ pp:cpp, total:ctot.toLocaleString(), note:'This food cost is for costing only \u2014 it\u2019s not the same as the cost at the grocery store.' });
      }
    }
    quantityBlock = qtyBox({ label:'How Much To Make', sub:`${p} people \u00b7 ${ap.label} \u00b7 ${portionNote}`, total:totalDisplay, ppLine:ppLine, info:costInfo });
  } else {
    const qty = calcSide(item);
    quantityBlock = qtyBox({ label:'How Much To Make', sub:`${p} people · ${ap.label}`, total:qty, ppLine:`${item.perPerson}${item.unit} per person` });
  }

  // ── INGREDIENTS (shared ingredientsBox/ingredientRow + Braai per-person scaling) ──
  const ingRowsHTML = (()=>{
    const isSelected = isMeat && S.selectedMeats.includes(vr.id);
    const mult = ap.mult;
    return recipe.ingredients.map((ing, i)=>{
      // Section dividers — pass through as a full-width sub-row
      if(ing === "—" || ing.startsWith("—")){
        return '<div style="padding:7px 0;font-size:13px;color:var(--ink-soft);font-style:italic;border-bottom:1px solid var(--line);">'+ing+'</div>';
      }
      // First ingredient of a MEAT = the main protein. Show the CUT-BASED grams
      // (braaiBaseG → BRAAI_CUT → PORTION_BRAAI + grazing taper) so the ingredient
      // line reconciles with the green qty box, plan rows and shopping list —
      // NEVER the legacy hardcoded "350g per person solo…" string (Part C, the 800g bug).
      if(i===0 && isMeat){
        const proteinName = ing.split("—")[0].trim();
        const tot = meatPP * p;
        const totS = (tot>=1000)?(Math.round(tot/100)/10)+'kg':tot+'g';
        return ingredientRow(proteinName, `${meatPP}g pp · <strong style="color:var(--gold);">${totS} total</strong>`);
      }
      // Scale all recognised per-person patterns inline
      let scaled = ing;
      scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(g|ml|kg|L)\s+per\s+p(?:erson|ortion)/gi, (m,num,unit)=>{ let total=parseFloat(num)*mult*p; let u=unit; if((u==='g'||u==='ml')&&total>=1000){total=Math.round(total/100)/10;u=u==='g'?'kg':'L';}else{total=Math.round(total*10)/10;} return `${num}${unit} pp · <strong style="color:var(--gold);">${total}${u} total</strong>`; });
      scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(tbsp|tsp)\s+per\s+p(?:erson|ortion)/gi, (m,num,unit)=>{ const mlMult=unit.toLowerCase()==='tbsp'?15:5; const total=Math.round(parseFloat(num)*mlMult*mult*p); return `${num} ${unit} pp · <strong style="color:var(--gold);">${total}ml total</strong>`; });
      scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+(slices?|pieces?|scoops?)\s+per\s+p(?:erson|ortion)/gi, (m,num,unit)=>{ const total=Math.round(parseFloat(num)*mult*p); return `${num} ${unit} pp · <strong style="color:var(--gold);">${total} total</strong>`; });
      scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+per\s+p(?:erson|ortion)(?!\s*\()/gi, (m,num)=>{ const total=Math.round(parseFloat(num)*mult*p); return `${num} pp · <strong style="color:var(--gold);">${total} total</strong>`; });
      scaled = scaled.replace(/([¼½⅓⅔¾⅛]|\d+\/\d+)\s+per\s+p(?:erson|ortion)/gi, (m,frac)=>{ const map={'¼':0.25,'½':0.5,'⅓':0.333,'⅔':0.667,'¾':0.75,'⅛':0.125}; const val=map[frac]||(frac.includes('/')?parseFloat(frac.split('/')[0])/parseFloat(frac.split('/')[1]):null); if(!val)return m; const total=Math.ceil(val*mult*p); return `${frac} pp · <strong style="color:var(--gold);">${total} total</strong>`; });
      // "Xg pp" / "Xml dry pp" shorthand (Braai salads/sides authored with pp, not "per person").
      // Lookahead (?!\s*·) skips strings the "per person" rules above already turned into "X pp · …total".
      scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(g|ml|kg|L)((?:\s+(?!pp\b)[a-z]+)?)\s+pp\b(?!\s*·)/gi, (m,num,unit,qual)=>{ let total=parseFloat(num)*mult*p; let u=unit; if((u==='g'||u==='ml')&&total>=1000){total=Math.round(total/100)/10;u=u==='g'?'kg':'L';}else{total=Math.round(total*10)/10;} return `${num}${unit}${qual||''} pp · <strong style="color:var(--gold);">${total}${u} total</strong>`; });
      // Split name (left) from amount (right) on the first em-dash, for the shared two-column row
      const di = scaled.indexOf('—');
      if(di > -1){ return ingredientRow(scaled.slice(0,di).trim(), scaled.slice(di+1).trim()); }
      return ingredientRow(scaled, '');
    }).join("");
  })();
  const ingredientsHTML = ingredientsBox(ingRowsHTML, p);

  // ── COAL & HEAT GUIDE (Braai-specific → notes slot, just before method) ──
  const fireGuideHTML = (()=>{
    const ct = recipe.coalType||'';
    const isFireDish = vr.type === 'meat' && item.requiresFire !== false && ['coals','braai','fire','grid','direct','indirect','heat','stovetop','oven','fry','pan'].some(w=>ct.toLowerCase().includes(w));
    if(!isFireDish) return '';
    const isActualFire = ['coals','braai','fire','grid','direct','indirect'].some(w=>ct.toLowerCase().includes(w));
    const open = S.fireGuideOpen;
    return `<div style="background:#2a1008;border:1px solid #8a3010;border-radius:10px;padding:12px;margin-bottom:12px;">
      <button onclick="set({fireGuideOpen:!S.fireGuideOpen})" style="width:100%;background:none;border:none;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:space-between;text-align:left;">
        <span style="font-size:13px;color:#e06030;text-transform:uppercase;letter-spacing:2px;">${isActualFire?'🔥 Coal & Heat Guide':'🍳 Cooking Method'}</span>
        <span style="font-size:13px;color:#e06030;">${open?'▲':'▼'}</span>
      </button>
      ${open?`<div style="margin-top:8px;">
        <p style="font-size:14px;color:var(--gold);font-weight:bold;margin-bottom:${isActualFire?'8px':'0'}">${ct}</p>
        ${isActualFire?`<div style="background:#1a0a04;border-radius:6px;padding:8px 10px;">
          <p style="font-size:13px;color:#ae744d;font-style:italic;margin-bottom:5px;">🖐 Hand test — hold palm-down 10cm above coals:</p>
          <div style="font-size:13px;color:#bc6c56;line-height:1.9;">
            🔥🔥 <span style="color:var(--gold);font-weight:bold;">2 sec</span> — Scorching (steaks, prawns)<br>
            🔥 <span style="color:var(--gold);font-weight:bold;">3 sec</span> — High (short rib, espetada)<br>
            🔸 <span style="color:var(--gold);font-weight:bold;">4–5 sec</span> — Medium (chops, kebabs)<br>
            🔹 <span style="color:var(--gold);font-weight:bold;">6+ sec</span> — Low (brisket, potbrood)
          </div>
        </div>`:''}
      </div>`:''}
    </div>`;
  })();

  // ── METHOD (shared methodBox/methodStep markup + clickable per-step timers) ──
  const methodStepsHTML = (recipe.method||[]).map((step,i)=>{
    const secs = parseStepTime(step);
    const timer = !secs ? '' : (tierAllows('pro')   // §7 — step timers are Pro; Free still reads the duration
      ? `<div style="margin-top:7px;"><button onclick="startTimer(${secs},'Step ${i+1}: ${Math.round(secs/60)} min')" style="display:inline-block;background:var(--card2);border:1px solid var(--accent);border-radius:6px;color:var(--gold);font-size:14px;font-weight:bold;padding:4px 11px;cursor:pointer;">⏱️ ${fmtTimerLabel(secs)}</button></div>`
      : `<div style="margin-top:7px;"><span style="display:inline-block;background:var(--card2);border:1px dashed var(--line);border-radius:6px;color:var(--ink-soft);font-size:14px;padding:4px 11px;">⏱️ ${fmtTimerLabel(secs)} · 🔒 Pro</span></div>`);
    return '<div style="display:flex;gap:12px;margin-bottom:16px;align-items:flex-start;">'
      + '<div style="min-width:26px;height:26px;border-radius:50%;background:var(--accent);border:1px solid var(--accent);color:var(--on-media);font-size:15px;font-weight:bold;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">'+(i+1)+'</div>'
      + '<div style="flex:1;"><p style="margin:0;font-size:16px;color:var(--ink2);line-height:1.6;">'+step+'</p>'+timer+'</div></div>';
  }).join('');
  const methodHTML = methodBox(methodStepsHTML, (recipe.method && recipe.method.length) ? `set({braaiCooking:{id:'${vr.id}',type:'${vr.type}',step:0}});window.scrollTo(0,0);` : '');

  // ── GOES WELL WITH (Braai-specific clickable pills → extras slot) ──
  const goesWellWith = {
    boerewors:   [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Chakalaka',s:'braai',t:'relishes'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    rump:        [{e:'🥫',n:'Garlic Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'}],
    fillet:      [{e:'🥫',n:'Pepper Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'}],
    beefribs:    [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🥫',n:'Chakalaka',s:'braai',t:'relishes'}],
    chicken:     [{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    wings:       [{e:'🥫',n:'Dipping Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    sosaties:    [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🥫',n:'Satay Sauce',s:'braai',t:'relishes'}],
    lambchops:   [{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Mint Salad',s:'braai',t:'salads'},{e:'🥫',n:'Garlic Sauce',s:'braai',t:'relishes'}],
    porkchops:   [{e:'🍎',n:'Apple Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'}],
    spareribs:   [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    prawns:      [{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'},{e:'🥫',n:'Lemon Butter',s:'braai',t:'relishes'}],
    espetada:    [{e:'🥗',n:'Portuguese Roll',s:'braai',t:'extras'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🥫',n:'Garlic Sauce',s:'braai',t:'relishes'}],
  };
  const gww = goesWellWith[vr.id] || [];
  const goesWellBlock = gww.length ? `
    <div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px;">
      <div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">❤ Goes Well With</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">${gww.map(g=>`<button onclick="set({braiStep:3,braaiView:'browse',braaiSidesFilter:'${g.t}',viewingRecipe:null})" style="padding:6px 13px;border-radius:16px;border:1px solid var(--line);background:transparent;color:var(--ink-soft);font-size:14px;cursor:pointer;">${g.e} ${g.n}</button>`).join('')}</div>
    </div>` : '';

  // ── COST ESTIMATE (Braai-specific → extras slot) ──
  const costBlock = (()=>{
    const costData = calcRecipeCost(recipe.ingredients, p);
    if(tierAllows('pro') && costData){
      const meatCostRand = isMeat ? Math.round((calcMeat(item).grams/1000)*(MEAT_COSTS[vr.id]||120)) : 0;
      const ingsCostRand = costData.total;
      const totalEst = meatCostRand + ingsCostRand;
      const ppEst = Math.round(totalEst / p);
      const coverage = costData.matched + "/" + costData.totalItems + " ingredients priced";
      const allPriced = costData.matched === costData.totalItems;
      const coverLine = allPriced ? "all ingredients priced" : ("Based on " + costData.matched + "/" + costData.totalItems + " ingredients priced");
      return `<div style="background:var(--card);border:1px solid var(--line2);border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:13px;color:var(--ink-soft);">💰 Estimated cost · ${p} ${p===1?'serving':'servings'}</div>
          <div style="font-size:24px;font-weight:bold;color:var(--gold);">~R${totalEst.toLocaleString()}</div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid var(--line);">
          <span style="font-size:13px;color:var(--ink-soft);">Per person</span>
          <span style="font-size:14px;color:var(--gold);font-weight:bold;">~R${ppEst}</span>
        </div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:6px;">${coverLine}</div>
      </div>`;
    } else if(!tierAllows('pro')){
      return `<div style="background:var(--card2);border:1px dashed var(--line);border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">
        <div style="font-size:22px;color:var(--accent);letter-spacing:6px;margin-bottom:6px;">R • • • •</div>
        <div style="font-size:13px;color:var(--ink-soft);">💰 Cost estimate — <strong style="color:var(--accent);">Tinza Pro R90/month</strong></div>
      </div>`;
    }
    return '';
  })();

  // ── TIP (Braai-specific → extras slot) ──
  const tipBlock = recipe.tip ? `<div style="background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px;">
      <div style="font-size:13px;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin-bottom:8px;">💡 Tip</div>
      <p style="font-size:15px;color:var(--ink-soft);line-height:1.6;">${recipe.tip}</p>
    </div>` : '';

  // ── PLAN / SAVE / DOWNLOAD action data ──
  const isInPlan = isMeat ? (S.selectedMeats||[]).includes(vr.id) : (S.selectedSides||[]).includes(vr.id);
  const togglePlan = isMeat
    ? (isInPlan ? "set({selectedMeats:S.selectedMeats.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedMeats:[...S.selectedMeats,S.viewingRecipe.id]})")
    : (isInPlan ? "set({selectedSides:S.selectedSides.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedSides:[...S.selectedSides,S.viewingRecipe.id]})");

  // cross-link card (component recipe: base dough / dressing) — shared crossLinkBox,
  // sits under the ingredients. Back uses closeRecipe() so it returns to THIS dish.
  const _bcl = (typeof BRAAI_CROSS_LINKS!=='undefined') ? BRAAI_CROSS_LINKS[vr.id] : null;
  const braaiCross = (_bcl && typeof crossLinkBox==='function')
    ? crossLinkBox({ emoji:_bcl.emoji, label:'Make your own', targetName:_bcl.name, onclick:_bcl.open })
    : '';

  // ── WhatsApp share (superset parity · SAME green button as bakes/FMF). Braai
  // ingredients are STRINGS ("Beef rump — 350g per person"), not {n,pp,u} objects,
  // so the share text is built from the string list here. The meat protein line uses
  // the reconciled cut-based meatPP (matches the page — never the legacy authored
  // string, Part C). Purely additive → passed via recipePage's optional shareHTML
  // slot; every other slot on the page is byte-identical.
  const _shName  = (item.name||'').replace(/'/g,'').replace(/"/g,'');
  const _shEmoji = item.emoji || '\u{1F356}';
  const _shTime  = recipe.cookTime || recipe.time || '';
  const _shLines = (recipe.ingredients||[]).map((ing,i)=>{
    if(typeof ing!=='string' || !ing.trim() || ing.trim().startsWith('—')) return null;
    if(i===0 && isMeat){ return '• '+ing.split('—')[0].trim()+': '+meatPP+'g per person'; }
    const di = ing.indexOf('—');
    return '• '+(di>-1 ? (ing.slice(0,di).trim()+': '+ing.slice(di+1).trim()) : ing.trim());
  }).filter(Boolean).join('\n');
  const _shText = encodeURIComponent(_shEmoji+' *'+_shName+'*\nFor '+p+' people'+(_shTime?(' · '+_shTime):'')+'\n\nIngredients:\n'+_shLines+'\n\nFrom Tinza tinza.netlify.app');
  const braaiShareHTML = '<button onclick="window.open(\'https://wa.me/?text='+_shText+'\',\'_blank\')" style="width:100%;padding:13px;border-radius:10px;background:var(--card);border:2px solid #25d366;color:#25d366;font-size:13px;cursor:pointer;margin-bottom:12px;">📱 Share Recipe via WhatsApp</button>';
  // ── computed nutrition + leftover ideas (superset parity · engine above) ──
  const _braaiNut = (typeof computeBraaiNutrition==='function') ? computeBraaiNutrition(item) : null;
  const nutritionBlock = (typeof nutritionBoxHTML==='function') ? nutritionBoxHTML(_braaiNut, isMeat) : '';
  // ── derive the BASE LEFTOVER key for this braai dish (meat group id, or side id) ──
  const _meatGroupId = (isMeat && typeof MEAT_GROUPS!=='undefined') ? ((MEAT_GROUPS.find(function(g){return g.items.some(function(x){return x.id===vr.id;});})||{}).id) : null;
  const BRAAI_MEAT_LEFTOVER = { beef:'beef', pork:'pork', lamb:'lamb', chicken:'chicken', seafood:'seafood', veg:'roast-veg' };
  const BRAAI_SIDE_LEFTOVER = { stywepap:'pap', pap:'pap', potbake:'potato', sweetpotato:'potato', mielies:'roast-veg', braaibroodjies:'bread', garlicbread:'bread', stokbrood:'bread', roosterkoek:'bread', 'roosterkoek-garlic-cheese':'bread', 'roosterkoek-boerewors':'bread', 'cheese-corn-potbrood':'bread', 'braai-flatbread':'bread', grilledpineapple:'fruit', marshmallowbanana:'fruit' };
  const _leftoverKey = isMeat ? BRAAI_MEAT_LEFTOVER[_meatGroupId] : BRAAI_SIDE_LEFTOVER[vr.id];
  const leftoverBlock = (_leftoverKey && typeof leftoverBoxHTML==='function') ? leftoverBoxHTML(_leftoverKey) : '';
  // ── storage & safety (same SAFETY_CLASS engine — the "two views" of one source) ──
  const _storeCls = _leftoverKey && typeof LEFTOVER_CLASS!=='undefined' ? LEFTOVER_CLASS[_leftoverKey] : (isMeat ? 'cookedMeat' : null);
  const storageBlock = (_storeCls && typeof storageBoxHTML==='function') ? storageBoxHTML(_storeCls) : '';
  // ── ASSEMBLE through the shared whole-page layout (identical to World Kitchen) ──
  return recipePage({
    backJs:"closeRecipe()",
    backLabel:"← "+rl,
    favourite:{ type:vr.type, id:vr.id },   // braai has no builder — it falls through here
    photoName:item.photoName||item.name,
    photoEmoji:item.emoji,
    name:item.name,
    qtyHTML:quantityBlock,
    equipHTML: equipmentContract(recipe, p, null, 1) + equipmentLine(recipe, p),   // MF142 — '' when no equipment field (braai grids aren't fixed holders)
    ingredientsHTML:ingredientsHTML,
    notesHTML: braaiCross + fireGuideHTML,
    methodHTML:methodHTML,
    extrasHTML: goesWellBlock + costBlock + tipBlock + nutritionBlock + storageBlock + leftoverBlock,
    shareHTML: braaiShareHTML,
    actions:{ inPlan:isInPlan, addJs:togglePlan, downloadJs:"braaiRecipeAction('download')" },   // legacy save deleted 15 Jul — the heart is the only save
    nav:{ backJs:"closeRecipe()", planJs:"var _r=document.getElementById('root');if(_r)_r._savedScroll=0;set({viewingRecipe:null,recipeServings:null,braaiView:'myplan'})", homeJs:"set({screen:'home',viewingRecipe:null,recipeServings:null})" }
  });
}

// ── BRAAI ─────────────────────────────────────────────────────────

// Braai step-by-step cooking mode — mirrors wkCookingView (Standard §4b cook mode).
// State: S.braaiCooking = {id, type, step}. Re-resolves the recipe so no quote-laden
// data is ever embedded in an onclick (the old openCookingMode bug).
function braaiCookingView(){
  var accent='var(--accent)', cream='var(--ink)';
  var c = S.braaiCooking || {};
  var isMeat = c.type==='meat';
  var item = isMeat
    ? MEAT_GROUPS.flatMap(function(g){return g.items;}).find(function(x){return x.id===c.id;})
    : SIDES_GROUPS.flatMap(function(g){return g.items;}).find(function(x){return x.id===c.id;});
  var recipe = item && item.recipe;
  var steps = (recipe && recipe.method) || [];
  if(!item || !steps.length){
    return '<div style="min-height:100vh;background:var(--bg);padding:20px;color:var(--ink-soft);">'
      + '<button onclick="set({braaiCooking:null})" style="background:none;border:none;color:'+accent+';font-size:14px;cursor:pointer;padding:0;">← Back</button>'
      + '<p style="margin-top:20px;">'+(item?'No method steps for this recipe yet.':'Recipe not found.')+'</p></div>';
  }
  var idx = Math.min(Math.max(0, c.step||0), steps.length-1);
  var step = steps[idx];
  var secs = (typeof parseStepTime==='function') ? parseStepTime(step) : 0;
  var timer = secs
    ? '<div style="margin-top:18px;"><button onclick="startTimer('+secs+',\'Step '+(idx+1)+'\')" style="display:inline-block;background:var(--card2);border:1px solid '+accent+';border-radius:8px;color:var(--gold);font-size:15px;font-weight:bold;padding:7px 16px;cursor:pointer;">\u23f1\ufe0f '+((typeof fmtTimerLabel==='function')?fmtTimerLabel(secs):(Math.round(secs/60)+' min'))+'</button></div>'
    : '';
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;
  var nm = item.name || 'Recipe';
  var setStep = function(n){ return 'set({braaiCooking:{id:\''+c.id+'\',type:\''+c.type+'\',step:'+n+'}});window.scrollTo(0,0);'; };
  return '<div style="min-height:100vh;background:var(--bg);display:flex;flex-direction:column;">'
    // header + progress
    + '<div style="background:var(--card2);border-bottom:1px solid var(--line2);padding:14px 16px;">'
    +   '<button onclick="set({braaiCooking:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+accent+';font-size:13px;cursor:pointer;padding:0;">\u2715 Exit cooking mode</button>'
    +   '<div style="font-size:17px;color:'+cream+';margin-top:6px;">'+nm+'</div>'
    +   '<div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">Step '+(idx+1)+' of '+steps.length+'</div>'
    +   '<div style="height:5px;background:var(--bg);border-radius:3px;margin-top:10px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:'+accent+';"></div></div>'
    + '</div>'
    // step body — short steps centre via auto margins; a long step pushes the
    // margins to 0 so the page scrolls naturally instead of clipping
    + '<div style="flex:1;display:flex;flex-direction:column;padding:28px 22px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   '<div style="margin:auto 0;">'
    +     '<div style="width:48px;height:48px;border-radius:50%;background:var(--card2);border:2px solid '+accent+';display:flex;align-items:center;justify-content:center;font-size:21px;color:'+accent+';margin-bottom:20px;">'+(idx+1)+'</div>'
    +     '<div style="font-size:23px;color:var(--ink2);line-height:1.7;">'+step+'</div>'
    +     timer
    +   '</div>'
    + '</div>'
    // nav
    + '<div style="display:flex;gap:10px;padding:16px 22px 30px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   (idx>0 ? '<button onclick="'+setStep(idx-1)+'" style="flex:1;padding:14px;border-radius:12px;background:var(--card2);border:1px solid '+accent+';color:'+accent+';font-size:15px;cursor:pointer;">\u2190 Previous</button>' : '')
    +   (last
        ? '<button onclick="set({braaiCooking:null});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">\u2713 Done</button>'
        : '<button onclick="'+setStep(idx+1)+'" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">Next step \u2192</button>')
    + '</div>'
    + '</div>';
}

// ── SHARED generic cook mode (any universal-opener recipe: spice / bakes / …) ──
// Reads S.cookRecipe={section,id} + S.cookStep; resolves steps from the recipe's
// method (string → split, or array). Same fullscreen stepper UI as the section
// cook views — built ONCE so spice/bakes don't each duplicate it (Rule Zero).
function genericCookView(){
  var accent='var(--accent)', cream='var(--ink)';
  var c = S.cookRecipe || {};
  var res = (typeof resolveRecipe==='function') ? resolveRecipe(c.section, c.id) : null;
  var r = res && res.item;
  var steps = [];
  if(r){
    var m = (r.makeYourOwn && r.makeYourOwn.method) || r.method;
    if(Array.isArray(m)) steps = m.slice();
    else if(typeof m==='string') steps = m.split(/\.\s+/).map(function(x){return x.trim();}).filter(Boolean).map(function(s){return s.slice(-1).match(/[.!?]/)?s:s+'.';});
  }
  if(!r || !steps.length){
    return '<div style="min-height:100vh;background:var(--bg);padding:20px;color:var(--ink-soft);">'
      + '<button onclick="set({cookRecipe:null,cookStep:0})" style="background:none;border:none;color:'+accent+';font-size:14px;cursor:pointer;padding:0;">← Back</button>'
      + '<p style="margin-top:20px;">'+(r?'No method steps for this recipe yet.':'Recipe not found.')+'</p></div>';
  }
  var idx = Math.min(Math.max(0, S.cookStep||0), steps.length-1);
  var step = steps[idx];
  var secs = (typeof parseStepTime==='function') ? parseStepTime(step) : 0;
  var timer = secs
    ? '<div style="margin-top:18px;"><button onclick="startTimer('+secs+',\'Step '+(idx+1)+'\')" style="display:inline-block;background:var(--card2);border:1px solid '+accent+';border-radius:8px;color:var(--gold);font-size:15px;font-weight:bold;padding:7px 16px;cursor:pointer;">⏱️ '+((typeof fmtTimerLabel==='function')?fmtTimerLabel(secs):(Math.round(secs/60)+' min'))+'</button></div>'
    : '';
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;
  var nm = r.name || 'Recipe';
  var setStep = function(n){ return 'set({cookStep:'+n+'});window.scrollTo(0,0);'; };
  return '<div style="min-height:100vh;background:var(--bg);display:flex;flex-direction:column;">'
    + '<div style="background:var(--card2);border-bottom:1px solid var(--line2);padding:14px 16px;">'
    +   '<button onclick="set({cookRecipe:null,cookStep:0});window.scrollTo(0,0);" style="background:none;border:none;color:'+accent+';font-size:13px;cursor:pointer;padding:0;">✕ Exit cooking mode</button>'
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
    +   (idx>0 ? '<button onclick="'+setStep(idx-1)+'" style="flex:1;padding:14px;border-radius:12px;background:var(--card2);border:1px solid '+accent+';color:'+accent+';font-size:15px;cursor:pointer;">← Previous</button>' : '')
    +   (last
        ? '<button onclick="set({cookRecipe:null,cookStep:0});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">✓ Done</button>'
        : '<button onclick="'+setStep(idx+1)+'" style="flex:2;padding:14px;border-radius:12px;background:'+accent+';border:1px solid '+accent+';color:#fff;font-size:15px;font-weight:bold;cursor:pointer;">Next step →</button>')
    + '</div>'
    + '</div>';
}

// ⚠️ budget.js:194 declares braaiRecipeAction TOO, and loads AFTER core.js — so ITS
// definition wins and this one never runs. Left in place (out of scope), but the
// 'kitchen' branch is gone from both. ⚖️ Law 6 — one name, one function. Two is a bug.
function braaiRecipeAction(type){
  if(type==='download') alert('⬇️ Download Recipe — coming with Pro!');
}

function braaiNavGo(id){
  if(id==='mains')   { set({braiStep:2,braaiView:'browse'}); }
  else if(id==='salads')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'salads'}); }
  else if(id==='starchy')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'starchy'}); }
  else if(id==='sauces')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'relishes'}); }
  else if(id==='desserts')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'desserts'}); }
  else if(id==='extras')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'extras'}); }
  else if(id==='myplan')   { 
    const root=document.getElementById('root'); if(root) root._savedScroll=0;
    set({braaiView:'myplan',viewingRecipe:null,recipeServings:null});
  }
}

function braaiQuickNav(activeCat){
  const selMeats = S.selectedMeats||[];
  const selSides = S.selectedSides||[];
  const total = selMeats.length + selSides.length;
  const sections = [
    {id:'mains',   emoji:'🥩', label:'Mains',    count:selMeats.length},
    {id:'salads',  emoji:'🥗', label:'Salads',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='salads')?.items.some(x=>x.id===sid)).length},
    {id:'starchy', emoji:'🌽', label:'Side Meals',  count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='starchy')?.items.some(x=>x.id===sid)).length},
    {id:'sauces',  emoji:'🥫', label:'Sauces',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='relishes')?.items.some(x=>x.id===sid)).length},
    {id:'desserts',emoji:'🍫', label:'Desserts', count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='desserts')?.items.some(x=>x.id===sid)).length},
  ];
  return `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:14px;">
    ${sections.map(s=>{
      const isActive = activeCat===s.id;
      const borderCol = isActive?(s.highlight?'#c0a020':'var(--accent)'):s.count>0?(s.highlight?'#6a5010':'#5a2010'):'#4a3424';
      const bgCol = isActive?(s.highlight?'#1a1408':'#2a1008'):s.count>0?'#1a1008':'transparent';
      const textCol = isActive?'var(--gold)':s.count>0?'#e0b878':'var(--ink-soft)';
      return `<button onclick="braaiNavGo('${s.id}')"
        style="padding:8px 4px;border-radius:10px;border:1px solid ${borderCol};
               background:${bgCol};cursor:pointer;text-align:center;position:relative;">
        <div style="font-size:18px;">${s.emoji}</div>
        <div style="font-size:13px;color:${textCol};margin-top:3px;font-weight:${isActive?'bold':'normal'};">${s.label}</div>
        ${s.count>0?`<div style="position:absolute;top:2px;right:2px;background:${s.highlight?'#c0a020':'var(--accent)'};color:${s.highlight?'#181808':'white'};border-radius:5px;font-size:13px;padding:1px 4px;">${s.count}</div>`:''}
      </button>`;
    }).join('')}
  </div>`;
}
function braaiMyPlanBtn(){
  const meatCount = (S.selectedMeats||[]).length;
  const sideCount = (S.selectedSides||[]).length;
  const total = meatCount + sideCount;
  if(!total) return '';
  if(!tierAllows('pro')) return `<div style="background:var(--card2);border:1px dashed var(--line);border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;"><div style="font-size:13px;color:var(--ink-soft);">📋 My Plan — <strong style="color:var(--accent);">Tinza Pro R90/month</strong></div></div>`;
  return `<button onclick="var _r=document.getElementById('root');if(_r)_r._savedScroll=0;set({braaiView:'myplan',viewingRecipe:null,recipeServings:null})" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid var(--accent);background:#1a1008;color:var(--gold);font-size:14px;cursor:pointer;font-family:Georgia,serif;">
    📋 See my Braai Plan & Shopping List →
    <div style="font-size:13px;color:#c36633;margin-top:3px;">${meatCount} meat${meatCount!==1?'s':''} · ${sideCount} side${sideCount!==1?'s':''} · ${S.people} people</div>
  </button>`;
}

