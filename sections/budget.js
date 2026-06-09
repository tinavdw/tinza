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
    return recipeDetailFromResult(active, "setQuiet({_budgetActiveRecipe:null})", S.budgetPeople||4, color, bg, border);
  }

  const budgetHowOpen = S.budgetHowOpen || false;

  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#161210 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(2,8,2,0.3) 0%,rgba(2,8,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #3a2010;border-radius:20px;color:${color};font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">💰 Budget Meals</h1>
        <p style="margin:0 0 10px;font-size:13px;color:#c0915a;font-style:italic;">${budget>=500?'🎉 Party & event planning mode':'R40 – R500 · Real food · Real savings'}</p>
        <div style="display:flex;align-items:center;background:rgba(6,16,8,0.85);border:1px solid #3a2010;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:${color};margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search budget recipes…"
            oninput="set({budgetSearch:this.value})"
            value="${S.budgetSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#e0d4b8;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.budgetSearch?`<button onclick="set({budgetSearch:''})" style="background:none;border:none;color:#b0936a;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + PEOPLE SLIDER ══ -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">

        <div style="flex:1;">
          <button onclick="set({budgetHowOpen:!S.budgetHowOpen})"
            style="background:none;border:none;color:${color};font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${budgetHowOpen?'▲':'▼'} How it works
          </button>
          ${budgetHowOpen?`
            <div onclick="set({budgetHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#c8a86a;line-height:1.6;">
              <strong style="color:${color};">1. Enter your budget</strong> — type any amount from R40 upwards.<br>
              <strong style="color:${color};">2. Set people count</strong> — we calculate cost per person automatically.<br>
              <strong style="color:${color};">3. Tap Find Recipes</strong> — Tinza Chef finds real meals within your budget.<br>
              <strong style="color:${color};">4. Want more?</strong> — tap "Show me 3 more" for extra ideas.<br>
              <span style="color:#b0936a;font-size:11px;">R500+ unlocks party & event planning mode.</span>
            </div>
          `:''}
        </div>

        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <button onclick="setQuiet({budgetPeople:Math.max(1,(S.budgetPeople||4)-1)})"
            style="width:32px;height:32px;border-radius:50%;background:#1a1208;border:2px solid ${color};color:${color};font-size:18px;line-height:1;cursor:pointer;">−</button>
          <div style="text-align:center;min-width:52px;">
            <div style="font-size:22px;color:#f5c842;font-weight:bold;line-height:1;">${people}</div>
            <div style="font-size:9px;color:#b0936a;letter-spacing:1px;text-transform:uppercase;">people</div>
          </div>
          <button onclick="setQuiet({budgetPeople:Math.min(500,(S.budgetPeople||4)+1)})"
            style="width:32px;height:32px;border-radius:50%;background:#1a1208;border:2px solid ${color};color:${color};font-size:18px;line-height:1;cursor:pointer;">+</button>
        </div>
      </div>
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Budget input -->
      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
          <div>
            <div style="font-size:10px;color:#b0936a;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">My budget</div>
            <div style="display:flex;align-items:center;gap:6px;background:#1a1208;border:2px solid ${border};border-radius:10px;padding:10px 12px;">
              <span style="font-size:16px;color:${color};font-weight:bold;">R</span>
              <input type="number" value="${S.budgetAmount||''}" placeholder="100"
                oninput="S.budgetAmount=this.value"
                style="flex:1;background:transparent;border:none;color:#f5e8cc;font-size:18px;font-family:Georgia,serif;outline:none;width:100%;" />
            </div>
          </div>
          <div>
            <div style="font-size:10px;color:#b0936a;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">People count</div>
            <div style="font-size:18px;color:#f5c842;font-weight:bold;padding:10px 0;">${people} people</div>
          </div>
        </div>

        ${budget && people ? `<div style="font-size:12px;color:${color};margin-bottom:12px;text-align:center;">= R${(budget/people).toFixed(0)} per person${budget>=500?' · 🎉 Party/event mode':' · '+people+' people'}</div>` : ''}

        <!-- Quick budget buttons -->
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${[40,50,60,70,80,90,100,110,120,130,140,150,160,180,200,220,240,260,280,300,350,400,450,500,600].map(amt=>`<button onclick="S.budgetAmount=${amt};setQuiet({budgetAmount:${amt}})" style="padding:5px 10px;border-radius:16px;border:1px solid ${parseFloat(S.budgetAmount)===amt?color:border};background:${parseFloat(S.budgetAmount)===amt?bg:'transparent'};color:${parseFloat(S.budgetAmount)===amt?color:'#7a5a30'};font-size:11px;cursor:pointer;white-space:nowrap;">R${amt}</button>`).join('')}
        </div>

        <button onclick="findBudgetRecipes()" style="width:100%;padding:14px;border-radius:10px;background:#1a1208;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes...':'🔍 Find Budget Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#c0915a;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Finding recipes for R${budget} for ${people} people...</div>
        <div style="font-size:11px;color:#b0936a;margin-top:6px;">R${(budget/people).toFixed(0)} per person</div>
      </div>`:''}

      ${results&&results.length>0&&results[0]._waiting?`
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:40px;margin-bottom:12px;">👨‍🍳</div>
          <div style="font-size:14px;color:${color};margin-bottom:6px;">Tinza Chef is finding more ideas...</div>
          <div style="font-size:11px;color:#b0936a;">Just a moment</div>
        </div>
      `:''}

      ${results&&results.length>0&&results[0]._nomore?`
        <div style="text-align:center;padding:30px 20px;">
          <div style="font-size:13px;color:#b0936a;margin-bottom:12px;">That's all the recipes for this budget!</div>
          <button onclick="findBudgetRecipes()" style="padding:10px 20px;background:${bg};border:2px solid ${color};border-radius:10px;color:${color};font-size:13px;cursor:pointer;">🔄 Start again</button>
        </div>
      `:''}

      ${results&&results.length>0&&!results[0]._waiting&&!results[0]._nomore&&!results[0]._error?`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;">Recipes within your budget</div>
          ${S._budgetAILoading ? `<div style="font-size:10px;color:#b0936a;font-style:italic;">✨ Finding more...</div>` : ''}
        </div>
        ${results.map((r,i)=>`
          <div style="background:${isPlanItem('budgetPlan',r.id)?bg:'#161210'};border:1px solid ${isPlanItem('budgetPlan',r.id)?color:'#2a1a10'};border-radius:10px;padding:12px;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="(function(){const pi={id:r.id,name:r.name,emoji:r.emoji||'💰',time:r.time||0,costPP:r.costPP,ingredients:r.ingredients||[],serves:1};togglePlanItem('budgetPlan',pi);})()">
              <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('budgetPlan',r.id)?color:'transparent'};border:2px solid ${isPlanItem('budgetPlan',r.id)?color:'#2a1a10'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('budgetPlan',r.id)?'✓':''}</div>
              <span style="font-size:20px;">${r.emoji||'🍽️'}</span>
              <div style="flex:1;">
                <div style="font-size:14px;color:${isPlanItem('budgetPlan',r.id)?'#f5e8cc':'#c8b898'};font-weight:${isPlanItem('budgetPlan',r.id)?'bold':'normal'};">${r.name}</div>
                <div style="font-size:10px;color:${isPlanItem('budgetPlan',r.id)?color:'#7a5a30'};margin-top:2px;">⏱️ ${r.time||'?'} min · R${r.costPP||'?'} pp</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                <button onclick="event.stopPropagation();openBudgetRecipe(${i})" style="background:${color};border:none;border-radius:6px;padding:4px 10px;font-size:11px;color:#fff;cursor:pointer;white-space:nowrap;">Recipe →</button>
              </div>
            </div>
            <span style="font-size:28px;flex-shrink:0;">${r.emoji||'🍽️'}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:14px;color:#f5e8cc;margin-bottom:2px;">${r.name}</div>
              <div style="font-size:11px;color:${color};">⏱️ ${r.time||'?'} min${r.cuisine?' · '+r.cuisine:''}</div>
              <div style="margin-top:4px;">
                <span style="background:#1a1208;border:1px solid #c06020;border-radius:8px;font-size:11px;color:#c06020;padding:3px 8px;font-weight:bold;">R${r.costPP||'?'} pp</span>
                ${r._fromAI?`<span style="font-size:9px;color:#b0936a;margin-left:6px;">✨ Chef</span>`:''}
              </div>
            </div>
              <span style="color:${color};font-size:14px;flex-shrink:0;">→</span>
            </div>
          </div>`).join('')}
        ${sectionPlanBtn('budgetPlan',"I've Got R"+budget,'💰',color,bg,people,"setQuiet({budgetPlanView:true})")}
        <button onclick="getMoreBudgetRecipes()" style="width:100%;padding:11px;border-radius:10px;background:#1a1208;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">
          ✨ Show me 3 more recipes
        </button>
      `:''}

      ${results&&results.length>0&&results[0]._error?`
        <div style="text-align:center;padding:20px;">
          <div style="font-size:13px;color:#b0936a;">${results[0]._msg||'No more recipes found.'}</div>
          <button onclick="findBudgetRecipes()" style="padding:10px 20px;background:${bg};border:2px solid ${color};border-radius:10px;color:${color};font-size:13px;cursor:pointer;margin-top:12px;">🔄 Start again</button>
        </div>
      `:''}

      ${!results&&!loading?`
        <!-- Budget tips when no search yet -->
        <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:14px;margin-top:4px;">
          <div style="font-size:12px;color:${color};font-weight:bold;margin-bottom:10px;">💡 SA Budget Cooking Tips</div>
          ${[
            {t:"Mince & Legumes",d:"Beef mince and tinned beans are the best value protein sources. Stretch mince further by mixing with grated carrot and onion."},
            {t:"Bone-in chicken",d:"Chicken drumsticks and thighs cost half the price of breasts and give twice the flavour. Always buy bone-in for curries and stews."},
            {t:"Maize meal & Rice",d:"Pap and rice are the most filling, affordable starches. Buy in bulk (5–10kg) for maximum savings."},
            {t:"Tinned tomatoes",d:"The most versatile ingredient in budget cooking. Always have 3–4 tins in the pantry. Cheaper and more flavourful than fresh for cooking."},
            {t:"Cook from scratch",d:"A homemade curry or stew for 4 costs R60–80. The same from a restaurant costs R400+. Your time is the ingredient."},
          ].map(t=>`<div style="margin-bottom:8px;"><div style="font-size:12px;color:#e0d4b8;font-weight:bold;">${t.t}</div><div style="font-size:11px;color:#b0936a;line-height:1.5;">${t.d}</div></div>`).join('')}
        </div>
      `:''}
    </div>
  </div>`;
}


function braaiRecipeAction(action) {
  if(action === 'kitchen') { alert("Save to My Kitchen — coming soon!"); }
  else if(action === 'download') { alert("Download — coming soon!"); }
}
function portionHelpContent() {
  if(!S.portionHelpOpen) return '';
  return '<div style="margin-top:8px;font-size:12px;color:#9a8868;line-height:2.2;">'
    + '1 &middot; Pick <b style="color:#f5c842;">one dish</b> and you get a full plate of it<br>'
    + '2 &middot; Pick <b style="color:#f5c842;">two dishes</b> and you get half of each — same total food<br>'
    + '3 &middot; Pick <b style="color:#f5c842;">three dishes</b> and you get a third of each — still the same<br>'
    + '4 &middot; Think of it like slicing a pizza — more slices, but the same pizza<br>'
    + '5 &middot; Want more food per person? Tap <b style="color:#f5c842;">Big Eaters</b> in your Profile'
    + '</div>';
}

