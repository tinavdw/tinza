function set(upd){ Object.assign(S,upd); draw(); }

function setQuiet(upd){
  const root=document.getElementById("root");
  if(root) root._savedScroll = window.scrollY;
  Object.assign(S,upd);
  draw();
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

    { id:"pr_chakalaka", name:"Chakalaka", emoji:"🫙", cuisine:"South African", time:30, serves:6,
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
  // Wire search input after draw (only on initial navigation to search screen)
  if(S.screen === "search_results") {
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
  const currContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.eventActiveRecipe?'recipe':'') + (S.weddingCakeView||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'') + (S.kidsScreen||'') + (S.kidsTheme||'') + (S.kidsShowMasterSnacks?'snacks':'');
  const sameContext = prevContext === currContext;
  const screenChanged = (root._lastScreen||'') !== S.screen;   // section change → land at top
  const scrollToRestore = screenChanged ? 0 : (root._savedScroll != null ? root._savedScroll : (sameContext ? window.scrollY : 0));
  // Stage 1 scroll-to-content: on an in-section navigation (new tab/category/list — not a quiet toggle/slider), land on the content instead of the banner
  const jumpToContent = !screenChanged && root._savedScroll == null && !sameContext;
  root._savedScroll = null;

  const tierBar=`<div style="background:#0f0d0a;border-bottom:2px solid #2a1f10;padding:8px 16px;">
    <div style="font-size:10px;color:#4a3520;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Testing — Switch Tier:</div>
    <div class="grid2" style="gap:6px;">
      <button onclick="USER_TIER='free';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;S.wkScreen=null;S.wkSelectedRegion=null;S.wkCountry=null;S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='free'?'#c06020':'#2a1808'};background:${USER_TIER==='free'?'#2a1808':'#161210'};color:${USER_TIER==='free'?'#c06020':'#4a3020'};font-size:11px;">🆓 Free</button>
      <button onclick="USER_TIER='pro';S.selectedMeats=[];S.selectedSides=[];S.checkedShopItems={};S.braiStep=1;S.activeBaby=null;S.activeDog=null;S.activeCat=null;S.activeFermented=null;S.wkScreen=null;S.wkSelectedRegion=null;S.wkCountry=null;S.wkSACulture=null;S.wkCourseTab='mains';S.wkRecipeDetail=null;draw()" style="padding:7px;border-radius:8px;border:2px solid ${USER_TIER==='pro'?'#c0a020':'#181808'};background:${USER_TIER==='pro'?'#181808':'#161210'};color:${USER_TIER==='pro'?'#f5c842':'#403820'};font-size:11px;">👑 Pro</button>
    </div>
  </div>`;

  let content="";
  try{
  if(S.viewingRecipe){ content=recipeView(); }
  else if(S.screen==="home"){ content=homeHTML(); }
  else if(S.screen==="braai"){ content=braaiHTML(); }
  else if(S.screen==="search_results"){ content=searchResultsHTML(); }
  else if(S.screen==="babyapp"){ content=S.babyView==='myplan'?babyMyPlanView():S.activeBaby?babyRecipeHTML_screen():babyListHTML(); }
  else if(S.screen==="search"){ content=searchHTML(); }
  else if(S.screen==="worldkitchen"){ content=worldKitchenHTML(); }
  else if(S.screen==="breakfast"){ content=breakfastHTML(); }
  else if(S.screen==="lightlunch"){ content=lightlunchHTML(); }
  else if(S.screen==="supper"){ content=supperHTML(); }
  else if(S.screen==="bakes"){ content=bakesHTML(); }
  else if(S.screen==="budget"){ content=budgetPlannerHTML(); }
  else if(S.screen==="ingredient"){ content=anchorIngredientHTML(); }
  else if(S.screen==="fourIngredients"){ content=fourIngredientsHTML(); }
  else if(S.screen==="mood"){ content=moodHTML(); }
  else if(S.screen==="weekplanner"){ content=comingSoonHTML("📅","Weekly Meal Planner","7-day planner coming soon"); }
  else if(S.screen==="furryapp"){ content=furryHTML(); }
  else if(S.screen==="smoothies"){ content=smoothiesHTML(); }
  else if(S.screen==="events"){ content=eventsHTML(); }
  else if(S.screen==="health"){ content=healthHTML(); }
  else if(S.screen==="tinyTummies"){ content=tinyTummiesHTML(); }
  else if(S.screen==="kiddies"){ content=kiddiesHTML(); }
  else{ content=homeHTML(); }
  }catch(_err){
    console.error('[Tinza] Render error on screen "'+(S.screen||'?')+'" (tab:'+(S.eventTab||'-')+', step:'+(S.buffetStep||'-')+'):', _err);
    content=`<div style="padding:56px 24px;text-align:center;color:#f5e8cc;font-family:Georgia,serif;">
      <div style="font-size:42px;margin-bottom:12px;">🛠️</div>
      <div style="font-size:18px;margin-bottom:8px;">This part hit a snag</div>
      <div style="font-size:13px;color:#c0a0b0;line-height:1.6;max-width:320px;margin:0 auto 20px;">The <strong>${S.screen||'section'}</strong> screen couldn't finish loading, so the rest of the app stayed where it was. Head home and pick another section — nothing is lost.</div>
      <button onclick="set({screen:'home',viewingRecipe:false,eventTab:null,buffetStep:1,activeCake:null,cakeCat:null,eventActiveRecipe:null})" style="background:#2a1808;border:1px solid #c06020;border-radius:20px;color:#f5c842;font-size:14px;padding:10px 24px;cursor:pointer;font-family:Georgia,serif;">← Back to Home</button>
    </div>`;
  }

  // Preserve focus + caret across re-renders so typing in inputs (e.g. search boxes) survives the redraw
  const _ae = document.activeElement;
  const _aeId = _ae && _ae.id ? _ae.id : null;
  const _aeStart = _ae ? _ae.selectionStart : null;
  const _aeEnd = _ae ? _ae.selectionEnd : null;

  root.innerHTML = tierBar + content;

  if(_aeId){
    const _ne = document.getElementById(_aeId);
    if(_ne){ try{ _ne.focus({preventScroll:true}); if(_aeStart!=null) _ne.setSelectionRange(_aeStart, _aeEnd); }catch(_e){} }
  }
  if(S.screen==="worldkitchen" && !S.wkScreen){ setTimeout(initWKMap, 50); }

  // Sync sliders
  const guestSlider = document.querySelector('input[type=range][min="6"]');
  if(guestSlider) guestSlider.value = S.eventGuests;
  const peopleSlider = document.querySelector('input[type=range][min="1"]');
  if(peopleSlider) peopleSlider.value = S.people;
  root._lastContext = S.screen + (S.eventTab||'') + (S.buffetStep||'') + (S.eventActiveRecipe?'recipe':'') + (S.weddingCakeView||'') + (S.braiStep||'') + (S.braiCat||'') + (S.braaiView||'') + (S.fingerSection||'') + (S.fingerView||'') + (S.kidsScreen||'') + (S.kidsTheme||'') + (S.kidsShowMasterSnacks?'snacks':'');
  root._lastScreen = S.screen;

  if(jumpToContent){
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
    ...EVENTS_STARTERS,...EVENTS_DESSERTS,...EVENTS_CULTURAL,...EVENTS_SAUCES,
    ...(EVENTS_FINGER_FOODS.meaty||[]),...(EVENTS_FINGER_FOODS.pastry||[]),
    ...(EVENTS_FINGER_FOODS.sweet||[]),...(EVENTS_FINGER_FOODS.veggie||[]),
    ...(EVENTS_FINGER_FOODS.savoury||[]),
  ];
  const r = all.find(x=>x.id===id);
  if(r){
    const root=document.getElementById("root");
    if(root) root._savedScroll = 0;   // open recipe scrolled to the top, not the list position
    const obj=Object.assign({},r,{_type:t}); set({eventActiveRecipe:obj});
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
function tierAllows(t){ return true; } // All features unlocked
function maxMeats(){ return USER_TIER==="free"?2:99; }

function tierBadgeSmall(t){ return ""; } // No tier badges shown

function recipeBtn(type,id,returnStep){
  return `<div style="margin-top:6px;"><button style="background:#c06020;border:none;border-radius:6px;padding:5px 12px;font-size:11px;color:#fff;cursor:pointer;font-family:Georgia,serif;" onclick="event.stopPropagation();set({viewingRecipe:{type:'${type}',id:'${id}',returnStep:${returnStep}}})">📖 See Recipe & Method</button></div>`;
}

// ══════════════════════════════════════════════════════════════
// PORTION BRAIN — unified scaling for all dish types
// Rule: the more dishes of ANY type, the smaller each portion.
// User can override up with the serving adjuster on recipe detail.
// ══════════════════════════════════════════════════════════════

// Protein scaling multipliers (Family Mix base = 350g pp)
// Applied on top of the soloG base value
function meatSpreadMult(count){
  // The PLATE stays the same size — it just gets divided across more dishes.
  // Total protein pp is constant at ~350g (Family Mix base).
  // 1→350g | 2→175g each | 3→117g each | 4+→88g each
  if(count<=1) return 1.0;
  if(count===2) return 0.50;   // 350 ÷ 2
  if(count===3) return 0.334;  // 350 ÷ 3
  return 0.252;                // 350 ÷ ~4 (floor — 5,6,7 dishes still 88g each)
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

function calcMeat(meat){
  const count = S.selectedMeats.length;
  const spreadMult = meatSpreadMult(count);
  const appetiteMult = APPETITE[S.appetite].mult;
  // soloG is the 1-dish base (350g for Family Mix standard protein)
  // We scale it down by spreadMult as more meats are added
  if(meat.unit==="g"){
    const g = Math.round(meat.soloG * spreadMult * appetiteMult * S.people);
    return {display: g>=1000?(g/1000).toFixed(1)+"kg":g+"g", grams:g};
  } else {
    const pcs = Math.max(1, Math.round(meat.soloPcs * spreadMult * appetiteMult * S.people));
    const g = pcs * (meat.gramEach||100);
    return {display: pcs+" pcs ("+(g>=1000?(g/1000).toFixed(1)+"kg":g+"g")+")", grams:g};
  }
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
  if(/\b(beef|lamb|pork|chicken|boerewors|wors|mince|steak|rib|fillet|brisket|sosatie|kudu|game|fish|prawn|calamari|mussel|tuna|salmon|sardine|pilchard|anchovy|sausage|kebab|espetada|loin chop|rib chop|neck|chuck|biltong)\b/.test(n)) return '🥩 Meat & Fish';
  if(/\b(egg|milk|cream|butter|yoghurt|yogurt|cheese|halloumi|feta|mozzarella)\b/.test(n)) return '🥛 Dairy & Eggs';
  if(/\b(onion|garlic|tomato|potato|carrot|brinjal|pepper|courgette|leek|celery|cabbage|spinach|kale|lettuce|mushroom|butternut|pumpkin|sweet potato|broccoli|cauliflower|aubergine|cucumber|spring onion|parsley|coriander|basil|rosemary|thyme|sage|mint|dill|chilli|ginger|lemon|lime|avocado|corn|mealies|peas)\b/.test(n)) return '🥦 Fruit & Veg';
  if(/\b(oil|flour|sugar|salt|vinegar|honey|mustard|soy|worcestershire|balsamic|cornflour|bread|bun|roll|pasta|rice|noodle|maize meal|couscous|oats|lentil|chickpea|tomato paste|stock|cube|coconut|jam|chutney|curry|cumin|paprika|turmeric|cinnamon|clove|nutmeg|herb|spice|breadcrumb|panko|almond|walnut|peanut|sesame|tahini|hot sauce|basting|marinade|rub|braai spice|seasoning|cayenne|chilli flakes)\b/.test(n)) return '🥫 Pantry';
  return '🧂 Other';
}


function buildShoppingList(){
  const map={};
  const skipNames = ['water','tap water','ice water','boiling water','warm water','salted water','salt & pepper','salt and pepper','to taste','for serving','to serve','butcher\'s string'];
  
  function add(name, amt, unit, source){
    const skip = skipNames.some(s => name.toLowerCase().includes(s));
    if(skip || !amt || amt <= 0) return;
    // Use normalised key for deduplication — handles "organic brinjal" + "brinjal" as same item
    const key = normIngredientKey(name);
    if(!key) return;
    if(map[key]){
      map[key].amt += amt;
      if(source && !map[key].sources.includes(source)) map[key].sources.push(source);
    } else {
      map[key] = { name, amt, unit, sources: source ? [source] : [], aisle: aisleCategory(name) };
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
    add(m.name, calcMeat(m).grams, "g", m.name);
    
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

// ── MOOD FEATURE ─────────────────────────────────────────────────────

const MOODS = [
  { id:"exhausted",    e:"😴", label:"I'm exhausted",           sub:"Low effort · Quick · Comfort",          colour:"#6060a0", bg:"#0a0a18", prompt:"extremely quick and easy comfort food recipe requiring minimal effort, ideally one pot or one pan, under 20 minutes, no complicated steps, South African home cooking style" },
  { id:"pickmeup",     e:"😊", label:"I need a pick-me-up",     sub:"Comfort · Treat · Lift your mood",       colour:"#a06040", bg:"#180e08", prompt:"comforting, mood-lifting food — something warm and satisfying that feels like a treat, emotionally uplifting, South African comfort classics or a balanced treat meal" },
  { id:"sick",         e:"🤒", label:"I'm not feeling well",    sub:"Light · Nourishing · Easy to digest",   colour:"#40a060", bg:"#081808", prompt:"gentle, light, easy to digest food for someone who is sick — soothing broth, soft textures, nothing heavy, good for an upset stomach or mild illness" },
  { id:"impress",      e:"🔥", label:"I want to impress",       sub:"Special · Impressive · Worth the effort",colour:"#c06020", bg:"#1a0e08", prompt:"impressive dinner party recipe that looks and tastes spectacular, something special to wow guests, can be a bit more effort, restaurant quality at home" },
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

    { name:"Moroccan Chickpea Tagine", emoji:"🫙", time:40, why:"North African spices, dried fruit, depth of flavour — truly different",
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

// ── MOOD PAGED SYSTEM ────────────────────────────────────────────
// DB has 6 recipes per mood. Page 0 = first 3, Page 1 = next 3, Page 2+ = AI results.
// AI starts fetching in background the moment a mood is selected.

function getMoodPageRecipes(moodId, page) {
  const db = MOOD_DB[moodId] || [];
  const start = page * 3;
  const slice = db.slice(start, start + 3);
  if (slice.length === 0) return null;
  return slice.map(r => ({...r, serves:1, _fromDB:true}));
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

  // Show first 3 from DB instantly
  const firstPage = getMoodPageRecipes(mood.id, 0);
  S.moodRecipes = firstPage || [];
  S.moodLoading = false;
  draw();

  // Start AI fetch in background immediately
  startMoodAIFetch(mood);
}

function getMoreMoodRecipes(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  const nextPage = (S.moodPage || 0) + 1;
  S.moodPage = nextPage;

  // DB page 1 (recipes 4-6)
  const dbPage = getMoodPageRecipes(moodId, nextPage);
  if (dbPage) {
    S.moodRecipes = dbPage;
    draw();
    return;
  }

  // DB exhausted — use AI recipes if ready
  const aiOffset = (nextPage - 2) * 3; // pages 2,3 use AI bank
  if (S.moodAIRecipes && S.moodAIRecipes.length > aiOffset) {
    S.moodRecipes = S.moodAIRecipes.slice(aiOffset, aiOffset + 3);
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
        const aiOff = ((S.moodPage||0) - 2) * 3;
        S.moodRecipes = (S.moodAIRecipes||[]).slice(aiOff, aiOff + 3);
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
      const aiOff = ((S.moodPage||0) - 2) * 3;
      S.moodRecipes = (S.moodAIRecipes||[]).slice(aiOff, aiOff + 3);
      if (S.moodRecipes.length === 0) {
        S.moodRecipes = [{_error:true, _msg:'No more recipes right now. Try again shortly.'}];
      }
      draw();
    });
  }
}


function moodHTML(){
  if(S.moodPlanView){
    window._sectionPlanForShare = S.moodPlan||[];
    return sectionPlanView('moodPlan','Just Feed Me Plan','😋','#8060c0','#0f0818','#2a1840',S.moodServings||1,"setQuiet({moodPlanView:false})");
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
      "setQuiet({moodActiveRecipe:null})",
      S.moodServings||1,
      mood.colour,
      mood.bg,
      mood.colour
    );
  }

  // ── RESULTS VIEW ──
  if(mood && (loading || recipes)){
    return `<div style="min-height:100vh;background:#0f0e0c;">
      <div style="background:#100818;border-bottom:1px solid ${mood.colour};padding:14px 20px;">
        <button onclick="setQuiet({moodSelected:null,moodRecipes:null,moodLoading:false})" style="background:none;border:none;color:${mood.colour};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Change mood</button>
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:32px;">${mood.e}</span>
          <div>
            <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;margin:0 0 2px;">${mood.label}</h1>
            <div style="font-size:11px;color:${mood.colour};font-style:italic;">${mood.sub}</div>
          </div>
        </div>
      </div>
      <div class="content">
        ${loading ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:8px;">Finding the perfect recipes for you...</div>
            <div style="font-size:12px;color:#4a3060;">Tinza Chef is thinking</div>
          </div>` : ''}

        ${recipes && recipes[0]?._error ? `
          <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:32px;margin-bottom:12px;">😕</div>
            <div style="font-size:14px;color:#f5e8cc;margin-bottom:8px;">${recipes[0]._msg||"Couldn't load recipes right now"}</div>
            <button onclick="callMoodChef(MOODS.find(m=>m.id==='${mood.id}'))" style="padding:12px 24px;background:#100818;border:2px solid ${mood.colour};border-radius:10px;color:${mood.colour};font-size:13px;cursor:pointer;margin-top:12px;">← Start again</button>
          </div>` : ''}

        ${recipes && recipes[0]?._waiting ? `
          <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:48px;margin-bottom:16px;">${mood.e}</div>
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:8px;">Tinza Chef is finding more ideas...</div>
            <div style="font-size:12px;color:#4a3060;">Just a moment</div>
          </div>` : ''}

        ${recipes && !recipes[0]?._error && !recipes[0]?._waiting ? `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#4a3060;text-transform:uppercase;">3 recipes for your mood</div>
            ${S.moodAILoading ? `<div style="font-size:10px;color:#4a3060;font-style:italic;">✨ Finding more...</div>` : ''}
          </div>
          ${recipes.map((r,i)=>`
            <div style="background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.bg:'#161210'};border:1px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="(function(){const pid=r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase();const pi={id:pid,name:r.name||'',emoji:r.emoji||'😴',time:r.time||0,ingredients:r.ingredients||[],serves:1};togglePlanItem('moodPlan',pi);})()" >
                <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'transparent'};border:2px solid ${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?mood.colour:'#3a2060'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'✓':''}</div>
                <span style="font-size:20px;">${r.emoji}</span>
                <div style="flex:1;">
                  <div style="font-size:14px;color:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'#f5e8cc':'#c8b898'};font-weight:${isPlanItem('moodPlan',r.id||(r.name||'').replace(/\s+/g,'-').toLowerCase())?'bold':'normal'};">${r.name}</div>
                  <div style="font-size:10px;color:${mood.colour};margin-top:2px;font-style:italic;">${r.why||''} · ⏱️ ${r.time} min</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                  <button onclick="event.stopPropagation();openMoodRecipe(${i})" style="background:${mood.colour};border:none;border-radius:6px;padding:4px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
                </div>
              </div>
            </div>`).join('')}
          ${sectionPlanBtn('moodPlan','Just Feed Me','😋','#8060c0','#0f0818','#2a1840',S.moodServings||1,"setQuiet({moodPlanView:true})")}

          <button onclick="getMoreMoodRecipes('${mood.id}')"
            style="width:100%;padding:11px;border-radius:10px;background:#0a0812;border:1px solid ${mood.colour};color:${mood.colour};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">
            ✨ Show me 3 more ideas
          </button>` : ''}
      </div>
    </div>`;
  }

  // ── MOOD SELECTOR (home) ──
  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:linear-gradient(135deg,#100818,#1a0e28);border-bottom:1px solid #2a1840;padding:14px 20px;">
      <button onclick="set({screen:'home'})" style="background:none;border:none;color:#8060c0;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😴</span>
        <div>
          <h1 style="margin:0;font-size:22px;font-weight:normal;color:#f5e8cc;">Just Feed Me</h1>
          <p style="margin:0;font-size:11px;color:#6a5080;font-style:italic;">How are you feeling right now?</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div style="font-size:11px;color:#4a3060;margin-bottom:16px;line-height:1.6;">
        Tap how you're feeling and Tinza will suggest the perfect recipes — no thinking required.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${MOODS.map(m=>`
          <button onclick="set({moodSelected:'${m.id}',moodRecipes:null,moodLoading:false});callMoodChef(MOODS.find(x=>x.id==='${m.id}'))"
            style="background:${m.bg};border:2px solid ${m.colour};border-radius:12px;padding:14px 12px;cursor:pointer;text-align:left;">
            <div style="font-size:26px;margin-bottom:6px;">${m.e}</div>
            <div style="font-size:13px;color:#f5e8cc;margin-bottom:3px;line-height:1.2;">${m.label}</div>
            <div style="font-size:10px;color:${m.colour};line-height:1.3;">${m.sub}</div>
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
    {s:"braai",      e:"🔥", t:"Braai & Fire Cooking",   sub:"BBQ · Grilled & Fire Foods · Meats · Sides · Salads", b:"#c06020", bg:"#1a1008"},
    {s:"worldkitchen",e:"🌍",t:"World Kitchen",           sub:"SA Classics · International · All cuisines",         b:"#208060", bg:"#0a1810"},
    // Row 2 — meal types
    {s:"breakfast",  e:"🍳", t:"Breakfast",               sub:"Eggs · Oats · Pancakes · Smoothies",                b:"#d0a020", bg:"#1a1500"},
    {s:"lightlunch", e:"🥗", t:"Light Lunch",             sub:"Salads · Wraps · Soups · Quick meals",              b:"#40a060", bg:"#0a1a10"},
    {s:"supper",     e:"🍲", t:"Supper",                  sub:"Family meals · Pasta · Curries · Stews",            b:"#8040c0", bg:"#100818"},
    {s:"bakes",      e:"🍰", t:"Bakes, Cakes & Breads",   sub:"Cakes · Biscuits · Breads · Rusks",                 b:"#d06080", bg:"#1a0810"},
    // Row 3 — speciality
    {s:"health",     e:"🌿", t:"Health Hub",              sub:"Juices · Smoothies · Raw · Fermented",              b:"#20a080", bg:"#0f1a18"},
    {s:"events",     e:"🎉", t:"Events & Celebrations",   sub:"Buffet · Finger Foods · Cakes · Beverages",         b:"#d04080", bg:"#1a0814"},
    {s:"babyapp",    e:"🍼", t:"Tiny Tummies",            sub:"Age-appropriate baby & toddler recipes",             b:"#e07090", bg:"#1a1018"},
    {s:"furryapp",   e:"🐾", t:"Furry Friends",           sub:"Dogs & Cats · Meals · Treats & Biscuits",           b:"#9060d0", bg:"#120f1a"},
  ];

  const featureTools = [
    {s:"search",    e:"🔍", t:"Search & Discover",    sub:"Find any recipe instantly",                    b:"#4080d0", bg:"#0a1020"},
    {s:"budget",    e:"💰", t:"I've Got R100",         sub:"Budget planner · Make the most of your money", b:"#40c060", bg:"#0a1a08"},
    {s:"ingredient",e:"🐔", t:"I Have Chicken...",     sub:"One ingredient · All matching recipes",        b:"#c08020", bg:"#1a1000"},
    {s:"fourIngredients",e:"🧅",t:"4 Ingredients",    sub:"What's in your fridge? Get a recipe",          b:"#a04080", bg:"#150010"},
    {s:"mood",      e:"😴", t:"Just Feed Me",          sub:"Tell us how you feel · We do the rest",        b:"#8060c0", bg:"#0f0818"},
    {s:"weekplanner",e:"📅",t:"Weekly Meal Planner",  sub:"Plan 7 days · Auto shopping list",             b:"#2080c0", bg:"#081020"},
  ];

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:linear-gradient(135deg,#1a1208,#2d1f0a);border-bottom:1px solid #4a3520;padding:16px 20px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:28px;">😊</span>
        <div>
          <h1 style="margin:0;font-size:26px;font-weight:normal;color:#f5e8cc;letter-spacing:3px;">Tinza</h1>
          <p style="margin:0;font-size:11px;color:#8a7055;font-style:italic;">Every dish, made easy</p>
        </div>
      </div>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Recipe Sections -->
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin-bottom:10px;">📖 Recipes</div>
      ${recipeSections.map(o=>`
        <button onclick="set({screen:'${o.s}'})"
          style="width:100%;display:flex;align-items:center;gap:14px;padding:14px 16px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;margin-bottom:8px;cursor:pointer;text-align:left;">
          <span style="font-size:30px;flex-shrink:0;">${o.e}</span>
          <div style="flex:1;">
            <div style="font-size:15px;color:#f5e8cc;margin-bottom:2px;">${o.t}</div>
            <div style="font-size:11px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
          </div>
          <span style="font-size:16px;color:${o.b};">→</span>
        </button>`).join("")}

      <!-- Feature Tools -->
      <div style="font-size:10px;letter-spacing:2px;color:#4a3520;text-transform:uppercase;margin:16px 0 10px;">⚡ Smart Features</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;">
        ${featureTools.map(o=>`
          <button onclick="set({screen:'${o.s}'})"
            style="display:flex;flex-direction:column;align-items:flex-start;padding:14px;background:${o.bg};border:2px solid ${o.b};border-radius:14px;cursor:pointer;text-align:left;">
            <span style="font-size:26px;margin-bottom:6px;">${o.e}</span>
            <div style="font-size:13px;color:#f5e8cc;margin-bottom:3px;font-weight:bold;">${o.t}</div>
            <div style="font-size:10px;color:#7a6a50;line-height:1.4;">${o.sub}</div>
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
function cleanPhotoName(s){ return String(s||'').trim().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function recipePhoto(name, emoji, height){
  height = height || 200;
  const url = 'https://raw.githubusercontent.com/tinavdw/tinza/refs/heads/main/Images/Image/' + encodeURIComponent(cleanPhotoName(name)) + '.jpg';
  return `<div style="position:relative;height:${height}px;overflow:hidden;background:#1a0e08;border-radius:10px;margin-bottom:12px;">
    <img src="${url}" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;gap:6px;background:#1a0e08;">
      <span style="font-size:48px;">${emoji||'🍽️'}</span>
      <span style="font-size:11px;color:#4a3010;">📷 Photo coming soon</span>
    </div>
  </div>`;
}

function recipeView(){
  const vr=S.viewingRecipe;
  let item, recipe;
  const isMeat = vr.type==="meat";
  if(isMeat){ item=MEAT_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  else { item=SIDES_GROUPS.flatMap(g=>g.items).find(x=>x.id===vr.id); }
  recipe=item?.recipe;
  if(!item||!recipe) return `<div style="padding:20px;"><button onclick="set({viewingRecipe:null})" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;">← Back</button><p style="margin-top:12px;">Recipe not found.</p></div>`;
  const rl=vr.returnStep===2?"Mains":vr.returnStep===3?"Sides":"Plan";
  const p = S.recipeServings || S.people;
  const ap = APPETITE[S.appetite];

  // ── QUANTITY BLOCK ────────────────────────────────────────────────
  let quantityBlock = "";
  function fmtG(g){ return g >= 1000 ? (g/1000).toFixed(1)+"kg" : g+"g"; }

  if(isMeat){
    const alreadySelected = S.selectedMeats.includes(vr.id);

    if(alreadySelected){
      // ── SELECTED: show actual totals for their plan ──
      const numMeats = S.selectedMeats.length;
      const isSolo = numMeats <= 1;

      let totalDisplay, ppDisplay;
      if(item.unit === "g"){
        const pp = Math.round((isSolo ? item.soloG : item.sharedG) * ap.mult);
        const total = pp * p;
        totalDisplay = fmtG(total);
        ppDisplay = `${pp}g per person`;
      } else {
        const pcs = Math.round((isSolo ? item.soloPcs : item.sharedPcs) * ap.mult * p);
        const grams = pcs * (item.gramEach || 100);
        totalDisplay = `${pcs} pieces (${fmtG(grams)})`;
        ppDisplay = `${isSolo ? item.soloPcs : item.sharedPcs} per person`;
      }

      const portionType = isSolo ? "sole dish — full portion" : `${numMeats} meats selected — shared portion`;

      quantityBlock = `
        <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 For Your Plan</div>
          <div style="font-size:11px;color:#6a8030;margin-bottom:10px;">${p} people · ${ap.label} · ${portionType}</div>
          <div style="background:#0f1a04;border:1px solid #4a7010;border-radius:8px;padding:12px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
              <div>
                <div style="font-size:10px;color:#8ab030;margin-bottom:2px;">Total to buy:</div>
                <div style="font-size:26px;font-weight:bold;color:#c8e840;letter-spacing:-0.5px;line-height:1;">${totalDisplay}</div>
                <div style="font-size:10px;color:#5a7020;margin-top:3px;">${ppDisplay}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;"><button onclick="event.stopPropagation();(function(){var n=Math.max(1,(S.recipeServings||S.people)-1);var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button><span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${S.recipeServings||S.people}</span><button onclick="event.stopPropagation();(function(){var n=(S.recipeServings||S.people)+1;var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button></div>
            </div>
          </div>
        </div>`;

    } else {
      // ── BROWSING: just show per-person reference + how it works ──
      const soloDisplay = item.unit === "g"
        ? `${item.soloG}g pp`
        : `${item.soloPcs} per person`;
      const sharedDisplay = item.unit === "g"
        ? `${item.sharedG}g pp`
        : `${item.sharedPcs} per person`;

      const nm_browse = S.selectedMeats.length;
      const amult = APPETITE[S.appetite] ? APPETITE[S.appetite].mult : 1;
      const curG_browse = Math.round(item.soloG * meatSpreadMult(Math.max(1, nm_browse)) * amult);
      const curDisp_browse = curG_browse >= 1000 ? (curG_browse/1000).toFixed(1)+'kg' : curG_browse+'g';
      const soloG_browse = Math.round(item.soloG * amult);
      const soloDisp_browse = soloG_browse >= 1000 ? (soloG_browse/1000).toFixed(1)+'kg' : soloG_browse+'g';

      quantityBlock = '<div style="background:#141008;border:1px solid #3a2810;border-radius:10px;padding:12px;margin-bottom:14px;">'
        + (nm_browse <= 1
          ? '<div style="text-align:center;padding:6px 0;">'
            + '<div style="font-size:10px;color:#6a4020;margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;">Solo dish — full portion</div>'
            + '<div style="font-size:24px;font-weight:bold;color:#f5c842;">' + soloDisp_browse + ' <span style="font-size:12px;color:#5a9030;">pp</span></div>'
            + '</div>'
          : '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;">'
            + '<div style="flex:1;text-align:center;">'
            + '<div style="font-size:9px;color:#4a6020;text-transform:uppercase;">Solo</div>'
            + '<div style="font-size:15px;color:#6a8030;">' + soloDisp_browse + ' pp</div>'
            + '</div>'
            + '<div style="color:#3a4010;font-size:18px;">&#8594;</div>'
            + '<div style="flex:1;text-align:center;">'
            + '<div style="font-size:9px;color:#c8a84b;text-transform:uppercase;">With ' + nm_browse + ' dishes</div>'
            + '<div style="font-size:20px;font-weight:bold;color:#f5c842;">' + curDisp_browse + ' pp</div>'
            + '</div></div>'
        )
        + '</div>';
    }

  } else {
    // ── SIDE / SALAD / SAUCE / DESSERT: always show total (sides are always "selected" when viewed) ──
    const qty = calcSide(item);
    quantityBlock = `
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:8px;">🧮 How Much To Make</div>
        <div style="font-size:11px;color:#6a8030;margin-bottom:10px;">${p} people · ${ap.label}</div>
        <div style="background:#0f1a04;border:1px solid #4a7010;border-radius:8px;padding:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
            <div>
              <div style="font-size:10px;color:#8ab030;margin-bottom:2px;">Total quantity:</div>
              <div style="font-size:26px;font-weight:bold;color:#c8e840;line-height:1;">${qty}</div>
              <div style="font-size:10px;color:#5a7020;margin-top:3px;">${item.perPerson}${item.unit} per person</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;"><button onclick="event.stopPropagation();(function(){var n=Math.max(1,(S.recipeServings||S.people)-1);var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">−</button><span style="font-size:22px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${S.recipeServings||S.people}</span><button onclick="event.stopPropagation();(function(){var n=(S.recipeServings||S.people)+1;var adj={...S.recipeAdjustments};if(S.viewingRecipe)adj[S.viewingRecipe.id]=n;set({recipeServings:n,recipeAdjustments:adj});})();" style="width:34px;height:34px;border-radius:50%;border:2px solid #6a9030;background:transparent;color:#8ab030;font-size:20px;line-height:1;cursor:pointer;">+</button></div>
          </div>
        </div>

      </div>`;
  }
  // ── END QUANTITY BLOCK ────────────────────────────────────────────

  // ── GOES WELL WITH data for Braai items ──────────────────────────
  const goesWellWith = {
    boerewors:   [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Chakalaka',s:'braai',t:'relishes'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    rump:        [{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'}],
    fillet:      [{e:'🫙',n:'Pepper Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'}],
    beefribs:    [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🫙',n:'Chakalaka',s:'braai',t:'relishes'}],
    chicken:     [{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    wings:       [{e:'🫙',n:'Dipping Sauce',s:'braai',t:'relishes'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Braaibroodjie',s:'braai',t:'extras'}],
    sosaties:    [{e:'🌽',n:'Phutu Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🫙',n:'Satay Sauce',s:'braai',t:'relishes'}],
    lambchops:   [{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Mint Salad',s:'braai',t:'salads'},{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'}],
    porkchops:   [{e:'🍎',n:'Apple Sauce',s:'braai',t:'relishes'},{e:'🥔',n:'Potato Bake',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'}],
    spareribs:   [{e:'🌽',n:'Stywe Pap',s:'braai',t:'starchy'},{e:'🥗',n:'Coleslaw',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'}],
    prawns:      [{e:'🥗',n:'Greek Salad',s:'braai',t:'salads'},{e:'🍞',n:'Garlic Bread',s:'braai',t:'extras'},{e:'🫙',n:'Lemon Butter',s:'braai',t:'relishes'}],
    espetada:    [{e:'🥗',n:'Portuguese Roll',s:'braai',t:'extras'},{e:'🥗',n:'Green Salad',s:'braai',t:'salads'},{e:'🫙',n:'Garlic Sauce',s:'braai',t:'relishes'}],
  };
  const gww = goesWellWith[vr.id] || [];
  const goesWellBlock = gww.length ? `
    <div class="goes-well">
      <div style="font-size:10px;letter-spacing:2px;color:#7a7aa0;text-transform:uppercase;margin-bottom:10px;">🤝 Goes Well With</div>
      <div>${gww.map(g=>`<button class="goes-well-pill" onclick="set({braiStep:3,braaiView:'browse',braaiSidesFilter:'${g.t}',viewingRecipe:null})">${g.e} ${g.n}</button>`).join('')}</div>
    </div>` : '';

  // ── SERVING ADJUSTER ─────────────────────────────────────────────
  const savedAdj = S.recipeAdjustments && vr && S.recipeAdjustments[vr.id];
  const recipeServings = savedAdj || S.recipeServings || S.people;
  const servingAdjuster = `
    <div class="serving-adjuster">
      <button class="serving-btn" onclick="set({recipeServings:Math.max(1,(S.recipeServings||S.people)-1)})">−</button>
      <div class="serving-display">
        <div class="serving-num">${recipeServings}</div>
        <div class="serving-label">people (tap ± to adjust)</div>
      </div>
      <button class="serving-btn" onclick="set({recipeServings:(S.recipeServings||S.people)+1})">+</button>
    </div>`;

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({viewingRecipe:null,recipeServings:null})" style="color:#c06020;">← Back to ${rl}</button>
      <h1 style="font-size:22px;font-weight:normal;color:#f5e8cc;">${item.emoji} ${item.name}</h1>
      <div style="font-size:11px;color:#c06020;font-style:italic;">Full recipe and method</div>
    </div>
    <div class="content">
      <!-- Photo header -->
      ${recipePhoto(item.name, item.emoji)}
      ${quantityBlock}
      ${(()=>{
        const ct = recipe.coalType||'';
        const isFireDish = vr.type === 'meat' && item.requiresFire !== false && ['coals','braai','fire','grid','direct','indirect','heat','stovetop','oven','fry','pan'].some(w=>ct.toLowerCase().includes(w));
        if(!isFireDish) return '';
        const isActualFire = ['coals','braai','fire','grid','direct','indirect'].some(w=>ct.toLowerCase().includes(w));
        return `<div style="background:#2a1008;border:1px solid #8a3010;border-radius:10px;padding:12px;margin-bottom:12px;">
          <div style="font-size:10px;color:#e06030;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">${isActualFire?'🔥 Coal & Heat Guide':'🍳 Cooking Method'}</div>
          <p style="font-size:14px;color:#f5c842;font-weight:bold;margin-bottom:${isActualFire?'8px':'0'}">${ct}</p>
          ${isActualFire?`<div style="background:#1a0a04;border-radius:6px;padding:8px 10px;">
            <p style="font-size:11px;color:#906040;font-style:italic;margin-bottom:5px;">🖐 Hand test — hold palm-down 10cm above coals:</p>
            <div style="font-size:11px;color:#7a4030;line-height:1.9;">
              🔥🔥 <span style="color:#f5c842;font-weight:bold;">2 sec</span> — Scorching (steaks, prawns)<br>
              🔥 <span style="color:#f5c842;font-weight:bold;">3 sec</span> — High (short rib, espetada)<br>
              🔸 <span style="color:#f5c842;font-weight:bold;">4–5 sec</span> — Medium (chops, kebabs)<br>
              🔹 <span style="color:#f5c842;font-weight:bold;">6+ sec</span> — Low (brisket, potbrood)
            </div>
          </div>`:''}
        </div>`;
      })()}
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">Ingredients</div>
          <div style="font-size:10px;color:#5a3820;font-style:italic;">scaled for ${p} people</div>
        </div>
        ${(()=>{
          const isSelected = isMeat && S.selectedMeats.includes(vr.id);
          const mult = ap.mult;
          return recipe.ingredients.map((ing, i)=>{
            // Section dividers — pass through unchanged
            if(ing === "—" || ing.startsWith("—")) return `<div style="padding:5px 0;font-size:12px;color:#6a4020;font-style:italic;border-bottom:1px solid #1e1a10;">${ing}</div>`;

            // First ingredient of a SELECTED meat = main protein = handled by quantity block above
            if(i===0 && isSelected){
              const proteinName = ing.split("—")[0].trim();
              return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid #1e1a10;">
                <span style="color:#c06020;flex-shrink:0;">•</span>
                <span style="font-size:14px;color:#e0d4b8;">${proteinName} — <span style="color:#f5c842;font-style:italic;">see quantity above ↑</span></span>
              </div>`;
            }

            // Scale all recognised patterns inline
            let scaled = ing;

            // Xg/ml/kg/L per person (or per portion)
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(g|ml|kg|L)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              let total = parseFloat(num) * mult * p;
              let u = unit;
              if((u==='g'||u==='ml') && total>=1000){ total=Math.round(total/100)/10; u=u==='g'?'kg':'L'; }
              else { total = Math.round(total*10)/10; }
              return `${num}${unit} pp · <strong style="color:#f5c842;">${total}${u} total</strong>`;
            });

            // X tbsp/tsp per person → convert to ml
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s*(tbsp|tsp)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              const mlMult = unit.toLowerCase()==='tbsp' ? 15 : 5;
              const total = Math.round(parseFloat(num) * mlMult * mult * p);
              return `${num} ${unit} pp · <strong style="color:#f5c842;">${total}ml total</strong>`;
            });

            // X slices/pieces per person
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+(slices?|pieces?|scoops?)\s+per\s+p(?:erson|ortion)/gi, (match, num, unit)=>{
              const total = Math.round(parseFloat(num) * mult * p);
              return `${num} ${unit} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            // Plain X per person (piece count, no unit)
            scaled = scaled.replace(/(\d+(?:\.\d+)?)\s+per\s+p(?:erson|ortion)(?!\s*\()/gi, (match, num)=>{
              const total = Math.round(parseFloat(num) * mult * p);
              return `${num} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            // Fraction per person (¼ ½ ⅓ etc)
            scaled = scaled.replace(/([¼½⅓⅔¾⅛]|\d+\/\d+)\s+per\s+p(?:erson|ortion)/gi, (match, frac)=>{
              const map={'¼':0.25,'½':0.5,'⅓':0.333,'⅔':0.667,'¾':0.75,'⅛':0.125};
              const val = map[frac] || (frac.includes('/')?parseFloat(frac.split('/')[0])/parseFloat(frac.split('/')[1]):null);
              if(!val) return match;
              const total = Math.ceil(val * mult * p);
              return `${frac} pp · <strong style="color:#f5c842;">${total} total</strong>`;
            });

            const changed = scaled !== ing;
            const isLast = i === recipe.ingredients.length-1;
            return `<div style="display:flex;gap:8px;padding:7px 0;border-bottom:${isLast?"none":"1px solid #1e1a10"};">
              <span style="color:#c06020;flex-shrink:0;">•</span>
              <span style="font-size:14px;color:${changed?"#e0d4b8":"#b09878"};">${scaled}</span>
            </div>`;
          }).join("");
        })()}
        ${isMeat && S.selectedMeats.includes(vr.id) ? `<div style="margin-top:8px;padding-top:8px;border-top:1px solid #1e1a10;font-size:10px;color:#4a3020;font-style:italic;">All quantities scaled for ${p} people · ${ap.label} appetite</div>` : ""}
      </div>
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;">Method</div>
          <button onclick="openCookingMode('${item.name}',${JSON.stringify(recipe.method||[])})" style="background:#c06020;border:none;border-radius:8px;padding:8px 14px;font-size:12px;color:white;cursor:pointer;font-family:Georgia,serif;">👨‍🍳 Start Cooking →</button>
        </div>
        ${(()=>{
          return (recipe.method||[]).map((step,i)=>{
            const secs = parseStepTime(step);
            return `<div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
              <div class="step-num" style="background:#1a0f08;border:1px solid #c06020;color:#c06020;">${i+1}</div>
              <div style="flex:1;">
                <p style="margin:2px 0 6px;font-size:14px;color:#c8b898;line-height:1.7;">${step}</p>
                ${secs?`<button class="timer-btn" onclick="startTimer(${secs},'Step ${i+1}: ${Math.round(secs/60)} min')">⏱️ ${fmtTimerLabel(secs)}</button>`:''}
              </div>
            </div>`;
          }).join('');
        })()}
      </div>
      <div style="background:#161208;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">
        <div style="font-size:10px;letter-spacing:2px;color:#c06020;text-transform:uppercase;margin-bottom:8px;">💡 Tip</div>
        <p style="font-size:13px;color:#c8b898;line-height:1.6;">${recipe.tip}</p>
      </div>
      ${(()=>{
        // 💰 Cost estimate card (Pro only)
        const costData = calcRecipeCost(recipe.ingredients, p);
        if(USER_TIER === "pro" && costData){
          const meatCostRand = isMeat ? Math.round((calcMeat(item).grams/1000)*(MEAT_COSTS[vr.id]||120)) : 0;
          const ingsCostRand = costData.total;
          const totalEst = meatCostRand + ingsCostRand;
          const ppEst = Math.round(totalEst / p);
          const coverage = costData.matched + "/" + costData.totalItems + " ingredients priced";
          return `<div style="background:#0f1a08;border:1px solid #5a8010;border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:10px;">💰 Cost Estimate</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <div style="font-size:13px;color:#6a8030;">Total for ${p} people</div>
              <div style="font-size:24px;font-weight:bold;color:#c8e840;">R${totalEst.toLocaleString()}</div>
            </div>
            <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #2a3010;">
              <div style="font-size:12px;color:#4a6020;">Per person</div>
              <div style="font-size:16px;font-weight:bold;color:#a0c030;">R${ppEst}</div>
            </div>
            <div style="margin-top:8px;font-size:10px;color:#4a5820;line-height:1.5;">Based on ${coverage} · Checkers/retail prices · May 2026<br>Always buy 10% extra. Prices subject to change.</div>
          </div>`;
        } else if(USER_TIER === "free"){
          return `<div style="background:#1a1008;border:1px dashed #5a3010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">
            <div style="font-size:22px;color:#2a1808;letter-spacing:6px;margin-bottom:6px;">R • • • •</div>
            <div style="font-size:12px;color:#6a3020;">💰 Cost estimate — <strong style="color:#c06020;">Tinza Pro R99/month</strong></div>
          </div>`;
        }
        return '';
      })()}
      ${goesWellBlock}
      ${(function(){
        var vr = S.viewingRecipe;
        var isInPlan = vr && vr.type === 'meat'
          ? (S.selectedMeats||[]).includes(vr.id)
          : (S.selectedSides||[]).includes(vr && vr.id);
        var togglePlan = vr && vr.type === 'meat'
          ? (isInPlan ? "set({selectedMeats:S.selectedMeats.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedMeats:[...S.selectedMeats,S.viewingRecipe.id]})")
          : (isInPlan ? "set({selectedSides:S.selectedSides.filter(x=>x!==S.viewingRecipe.id)})" : "set({selectedSides:[...S.selectedSides,S.viewingRecipe.id]})");
        return '<div style="border-top:1px solid #2a1a10;padding-top:14px;margin-bottom:20px;">'
          + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px;">'
          + '<button onclick="' + togglePlan + '" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:' + (isInPlan ? '#1a3010' : '#1a1208') + ';border:2px solid ' + (isInPlan ? '#4a9020' : '#3a2010') + ';color:' + (isInPlan ? '#80c040' : '#6a4020') + ';font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">'
          + (isInPlan ? '&#10003;<br><b>In Plan</b>' : '&#9711;<br>Add to Plan')
          + '</button>'
          + '<button onclick="braaiRecipeAction(\'kitchen\')" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:#1a1208;border:1px solid #3a2010;color:#6a4020;font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">&#128190;<br>Save to<br>My Kitchen</button>'
          + '<button onclick="braaiRecipeAction(\'download\')" style="padding:12px 6px;border-radius:10px;cursor:pointer;background:#1a1208;border:1px solid #3a2010;color:#6a4020;font-size:11px;font-family:Georgia,serif;text-align:center;line-height:1.6;">&#11015;<br>Download<br>Recipe</button>'
          + '</div>'
          + '<div style="text-align:center;font-size:11px;color:#4a3020;padding-top:6px;border-top:1px solid #1e1a10;">'
          + '<button onclick="set({viewingRecipe:null,recipeServings:null})" style="background:none;border:none;color:#c06020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">&#8592; Back</button>'
          + ' &nbsp;|&nbsp; '
          + '<button onclick="set({viewingRecipe:null,recipeServings:null,braaiView:\'myplan\'})" style="background:none;border:none;color:#c0a020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">My Plan &#8594;</button>'
          + ' &nbsp;|&nbsp; '
          + '<button onclick="set({screen:\'home\',viewingRecipe:null,recipeServings:null})" style="background:none;border:none;color:#4a3020;font-size:12px;cursor:pointer;font-family:Georgia,serif;text-decoration:underline;text-underline-offset:2px;">Home</button>'
          + '</div>'
          + '</div>';
      })()}
    </div>
  </div>`;
}

// ── BRAAI ─────────────────────────────────────────────────────────
function culturalGroupGo(id){
  set({activeCulturalGroup:id, activeCulturalRecipe:null});
}

function braaiRecipeAction(type){
  if(type==='kitchen') alert('💾 Save to My Kitchen — coming with Pro!');
  else if(type==='download') alert('⬇️ Download Recipe — coming with Pro!');
}

function braaiNavGo(id){
  if(id==='mains')   { set({braiStep:2,braaiView:'browse'}); }
  else if(id==='salads')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'salads'}); }
  else if(id==='starchy')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'starchy'}); }
  else if(id==='sauces')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'relishes'}); }
  else if(id==='desserts')  { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'desserts'}); }
  else if(id==='breads')   { set({braiStep:3,braaiView:'browse',braaiSidesFilter:'extras'}); }
  else if(id==='myplan')   { 
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
    {id:'sauces',  emoji:'🫙', label:'Sauces',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='relishes')?.items.some(x=>x.id===sid)).length},
    {id:'extras',  emoji:'🍞', label:'Breads',   count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='extras')?.items.some(x=>x.id===sid)).length},
    {id:'desserts',emoji:'🍫', label:'Desserts', count:selSides.filter(sid=>SIDES_GROUPS.find(g=>g.id==='desserts')?.items.some(x=>x.id===sid)).length},
    {id:'myplan',  emoji:'📋', label:'My Plan',  count:total, highlight:true},
  ];
  return `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:14px;">
    ${sections.map(s=>{
      const isActive = activeCat===s.id;
      const borderCol = isActive?(s.highlight?'#c0a020':'#c06020'):s.count>0?(s.highlight?'#6a5010':'#5a2010'):'#2a1808';
      const bgCol = isActive?(s.highlight?'#1a1408':'#2a1008'):s.count>0?'#1a1008':'transparent';
      const textCol = isActive?'#f5c842':s.count>0?'#c09040':'#6a4020';
      return `<button onclick="braaiNavGo('${s.id}')"
        style="padding:8px 4px;border-radius:10px;border:1px solid ${borderCol};
               background:${bgCol};cursor:pointer;text-align:center;position:relative;">
        <div style="font-size:18px;">${s.emoji}</div>
        <div style="font-size:9px;color:${textCol};margin-top:3px;font-weight:${isActive?'bold':'normal'};">${s.label}</div>
        ${s.count>0?`<div style="position:absolute;top:2px;right:2px;background:${s.highlight?'#c0a020':'#c06020'};color:${s.highlight?'#181808':'white'};border-radius:5px;font-size:8px;padding:1px 3px;">${s.count}</div>`:''}
      </button>`;
    }).join('')}
  </div>`;
}
function braaiMyPlanBtn(){
  const meatCount = (S.selectedMeats||[]).length;
  const sideCount = (S.selectedSides||[]).length;
  const total = meatCount + sideCount;
  if(!total) return '';
  if(USER_TIER!=='pro') return `<div style="background:#1a1008;border:1px dashed #5a2010;border-radius:10px;padding:12px;margin:10px 0 4px;text-align:center;"><div style="font-size:12px;color:#6a3020;">📋 My Plan — <strong style="color:#c06020;">Tinza Pro R99/month</strong></div></div>`;
  return `<button onclick="set({braaiView:'myplan',viewingRecipe:null,recipeServings:null})" style="width:100%;padding:14px;margin:10px 0 4px;border-radius:10px;border:2px solid #c06020;background:#1a1008;color:#f5c842;font-size:14px;cursor:pointer;font-family:Georgia,serif;">
    📋 See my Braai Plan & Shopping List →
    <div style="font-size:11px;color:#7a4020;margin-top:3px;">${meatCount} meat${meatCount!==1?'s':''} · ${sideCount} side${sideCount!==1?'s':''} · ${S.people} people</div>
  </button>`;
}

