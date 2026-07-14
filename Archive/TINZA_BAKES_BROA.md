# TINZA — Broa de Milho · Bakes card · 10 Jul 2026
### Paste into `bakes_additions.js` → `BAKES_ADDITIONS` array (breads cat). Matches existing schema exactly.
### id `bk-broa` = cross-link target for caldo verde + the bacalhau dishes + leitão via `openBakesRecipe('bk-broa')`.

```js
  {id:'bk-broa', cat:'breads', name:'Broa de Milho (Portuguese Corn Bread)', emoji:'🌽', cuisine:'Portuguese', time:130, costPP:3,
    feel:'Dense, golden corn bread with a crackly crust — Portugal\'s partner for caldo verde and cod.',
    ingredients:[{n:'fine maize meal',pp:38,u:'g'},{n:'rye flour',pp:13,u:'g'},{n:'cake flour',pp:25,u:'g'},{n:'instant yeast',pp:1.3,u:'g'},{n:'salt',pp:1,u:'g'},{n:'water',pp:47,u:'ml'}],
    method:['Scald the maize meal: pour about half the water, boiling, over it and stir to a thick paste; cool until just warm — this softens the corn and stops a gritty crumb.','Mix in the rye and cake flours, yeast and salt, adding the rest of the warm water to a stiff, slightly sticky dough.','Knead 8–10 minutes until it holds together — corn doughs stay denser than wheat.','Cover and prove until puffy, about 1 hour.','Shape into a round loaf on a floured tray; dust the top with a little maize meal. Prove 30–40 minutes.','Bake at 200°C with a tray of water in the oven for steam, 35–40 minutes, until deep golden and hollow-sounding.','Cool fully before slicing — broa firms as it cools.'],
    tip:'Scalding the maize meal is the secret to a tender, non-gritty crumb. Cross-link target for caldo verde and the bacalhau dishes.',
    nutrition:{kcal:180,protein_g:5,carbs_g:36,fat_g:1.5}, storage:'Best day-of; keeps 2–3 days wrapped, or slice and freeze — toast from frozen.'},
```

**After you push:** the heroes' `crossLinks[]` can carry `{ name:'Broa de Milho', target:"openBakesRecipe('bk-broa')", emoji:'🌽' }` — I've updated the hero specs to reflect this. Code wires it when placing (it's in wk_europe.js, its file).
