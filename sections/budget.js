function budgetPlannerHTML(){
  const budget = parseFloat(S.budgetAmount||0);
  const people = parseInt(S.budgetPeople||4);
  const color = '#25a050'; const bg = '#061008'; const border = '#1a4025';
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

  return `<div style="min-height:100vh;background:#0f0e0c;">
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="set({screen:'home'})" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← Home</button>
      <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;">💰 I've Got R${budget||'?'}</h1>
      <p style="margin:4px 0 0;font-size:11px;color:${color};opacity:0.8;">${budget>=500?'🎉 Party & event planning mode':'Find recipes that fit your budget'}</p>
    </div>
    <div style="padding:16px;max-width:600px;margin:0 auto;">

      <!-- Budget input -->
      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:16px;margin-bottom:14px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
          <div>
            <div style="font-size:10px;color:#3a6030;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">My budget</div>
            <div style="display:flex;align-items:center;gap:6px;background:#061008;border:2px solid ${border};border-radius:10px;padding:10px 12px;">
              <span style="font-size:16px;color:${color};font-weight:bold;">R</span>
              <input type="number" value="${S.budgetAmount||''}" placeholder="100"
                oninput="S.budgetAmount=this.value"
                style="flex:1;background:transparent;border:none;color:#f5e8cc;font-size:18px;font-family:Georgia,serif;outline:none;width:100%;" />
            </div>
          </div>
          <div>
            <div style="font-size:10px;color:#3a6030;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">For how many people</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <button onclick="setQuiet({budgetPeople:Math.max(1,(S.budgetPeople||4)-1)})" style="width:32px;height:32px;border-radius:50%;background:#061008;border:2px solid ${color};color:${color};font-size:18px;cursor:pointer;">−</button>
              <span style="font-size:24px;color:#f5c842;font-weight:bold;min-width:28px;text-align:center;">${people}</span>
              <button onclick="setQuiet({budgetPeople:Math.min(500,(S.budgetPeople||4)+1)})" style="width:32px;height:32px;border-radius:50%;background:#061008;border:2px solid ${color};color:${color};font-size:18px;cursor:pointer;">+</button>
            </div>
          </div>
        </div>

        ${budget && people ? `<div style="font-size:12px;color:${color};margin-bottom:12px;text-align:center;">= R${(budget/people).toFixed(0)} per person${budget>=500?' · 🎉 Party/event mode':' · '+people+' people'}</div>` : ''}

        <!-- Quick budget buttons -->
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${[40,50,60,70,80,90,100,110,120,130,140,150,160,180,200,220,240,260,280,300,350,400,450,500,600].map(amt=>`<button onclick="S.budgetAmount=${amt};setQuiet({budgetAmount:${amt}})" style="padding:5px 10px;border-radius:16px;border:1px solid ${parseFloat(S.budgetAmount)===amt?color:border};background:${parseFloat(S.budgetAmount)===amt?bg:'transparent'};color:${parseFloat(S.budgetAmount)===amt?color:'#3a6030'};font-size:11px;cursor:pointer;white-space:nowrap;">R${amt}</button>`).join('')}
        </div>

        <button onclick="findBudgetRecipes()" style="width:100%;padding:14px;border-radius:10px;background:#061008;border:2px solid ${color};color:${color};font-size:14px;cursor:pointer;font-family:Georgia,serif;">
          ${loading?'👨‍🍳 Finding recipes...':'🔍 Find Budget Recipes'}
        </button>
      </div>

      ${error?`<div style="background:#0a1a08;border:1px solid #2a4020;border-radius:10px;padding:12px;margin-bottom:12px;font-size:13px;color:#60a050;text-align:center;">${error}</div>`:''}

      ${loading?`<div style="text-align:center;padding:30px;">
        <div style="font-size:32px;margin-bottom:12px;">👨‍🍳</div>
        <div style="font-size:14px;color:${color};">Finding recipes for R${budget} for ${people} people...</div>
        <div style="font-size:11px;color:#3a6030;margin-top:6px;">R${(budget/people).toFixed(0)} per person</div>
      </div>`:''}

      ${results&&results.length>0&&results[0]._waiting?`
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:40px;margin-bottom:12px;">👨‍🍳</div>
          <div style="font-size:14px;color:${color};margin-bottom:6px;">Tinza Chef is finding more ideas...</div>
          <div style="font-size:11px;color:#3a6030;">Just a moment</div>
        </div>
      `:''}

      ${results&&results.length>0&&results[0]._nomore?`
        <div style="text-align:center;padding:30px 20px;">
          <div style="font-size:13px;color:#3a6030;margin-bottom:12px;">That's all the recipes for this budget!</div>
          <button onclick="findBudgetRecipes()" style="padding:10px 20px;background:${bg};border:2px solid ${color};border-radius:10px;color:${color};font-size:13px;cursor:pointer;">🔄 Start again</button>
        </div>
      `:''}

      ${results&&results.length>0&&!results[0]._waiting&&!results[0]._nomore&&!results[0]._error?`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:10px;letter-spacing:2px;color:${color};text-transform:uppercase;">Recipes within your budget</div>
          ${S._budgetAILoading ? `<div style="font-size:10px;color:#3a6030;font-style:italic;">✨ Finding more...</div>` : ''}
        </div>
        ${results.map((r,i)=>`
          <div style="background:${isPlanItem('budgetPlan',r.id)?bg:'#161210'};border:1px solid ${isPlanItem('budgetPlan',r.id)?color:'#2a2a20'};border-radius:10px;padding:12px;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="(function(){const pi={id:r.id,name:r.name,emoji:r.emoji||'💰',time:r.time||0,costPP:r.costPP,ingredients:r.ingredients||[],serves:1};togglePlanItem('budgetPlan',pi);})()">
              <div style="width:22px;height:22px;border-radius:6px;background:${isPlanItem('budgetPlan',r.id)?color:'transparent'};border:2px solid ${isPlanItem('budgetPlan',r.id)?color:'#1a3020'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${isPlanItem('budgetPlan',r.id)?'✓':''}</div>
              <span style="font-size:20px;">${r.emoji||'🍽️'}</span>
              <div style="flex:1;">
                <div style="font-size:14px;color:${isPlanItem('budgetPlan',r.id)?'#f5e8cc':'#c8b898'};font-weight:${isPlanItem('budgetPlan',r.id)?'bold':'normal'};">${r.name}</div>
                <div style="font-size:10px;color:${isPlanItem('budgetPlan',r.id)?color:'#3a6030'};margin-top:2px;">⏱️ ${r.time||'?'} min · R${r.costPP||'?'} pp</div>
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
                <span style="background:#061008;border:1px solid #25a050;border-radius:8px;font-size:11px;color:#25a050;padding:3px 8px;font-weight:bold;">R${r.costPP||'?'} pp</span>
                ${r._fromAI?`<span style="font-size:9px;color:#3a6030;margin-left:6px;">✨ Chef</span>`:''}
              </div>
            </div>
              <span style="color:${color};font-size:14px;flex-shrink:0;">→</span>
            </div>
          </div>`).join('')}
        ${sectionPlanBtn('budgetPlan',"I've Got R"+budget,'💰',color,bg,people,"setQuiet({budgetPlanView:true})")}
        <button onclick="getMoreBudgetRecipes()" style="width:100%;padding:11px;border-radius:10px;background:#061008;border:1px solid ${color};color:${color};font-size:13px;cursor:pointer;margin-top:4px;margin-bottom:20px;">
          ✨ Show me 3 more recipes
        </button>
      `:''}

      ${results&&results.length>0&&results[0]._error?`
        <div style="text-align:center;padding:20px;">
          <div style="font-size:13px;color:#3a6030;">${results[0]._msg||'No more recipes found.'}</div>
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
          ].map(t=>`<div style="margin-bottom:8px;"><div style="font-size:12px;color:#c0d8b0;font-weight:bold;">${t.t}</div><div style="font-size:11px;color:#608060;line-height:1.5;">${t.d}</div></div>`).join('')}
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

