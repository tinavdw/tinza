/* BUBBLY UPGRADES — replace the existing mimosa + bellini entries in
   beveragesData.js with these (same id/category/format, now with a Did You Know
   and a sparkling-grape Mocktail version chip). Code: find each existing
   id:"mimosa" / id:"bellini" object in EVENTS_BEVERAGE_RECIPES and replace the
   whole object. Then node --check + confirm both open with a Mocktail chip.
   These stay in the BUBBLY category — do NOT move them. */
var BUBBLY_UPGRADES = [

  { id:"mimosa", name:"Mimosa", emoji:"🍊", category:"bubbly", serves:"8", minGuests:8, glassware:"Flutes", serveNote:"Half bubbly, half juice — add the fizz last",
    didYouKnow:"Named after the bright yellow mimosa flower for its colour — a 1920s creation at the Ritz in Paris that became the world's favourite brunch drink.",
    base300:[{n:"MCC / sparkling wine",a:"75ml per glass · 600ml per 8"},{n:"Fresh orange juice",a:"75ml per glass · 600ml per 8"},{n:"— GARNISH:",a:""},{n:"Orange twist",a:"1 per glass"}],
    method:["Chill both the bubbly and the orange juice.","Half-fill each flute with orange juice.","Top gently with sparkling wine.","Finish with an orange twist."],
    tip:"Use freshly squeezed juice — it's the difference between nice and special.",
    versions:[
      {name:"Classic", icon:"🍊", default:true,
        base300:[{n:"MCC / sparkling wine",a:"75ml per glass · 600ml per 8"},{n:"Fresh orange juice",a:"75ml per glass · 600ml per 8"},{n:"— GARNISH:",a:""},{n:"Orange twist",a:"1 per glass"}],
        method:["Chill both the bubbly and the orange juice.","Half-fill each flute with orange juice.","Top gently with sparkling wine.","Finish with an orange twist."]},
      {name:"Mocktail", icon:"🧒", serveNote:"🧒 Alcohol-free — sparkling grape juice keeps the celebration fizz.",
        base300:[{n:"Sparkling white grape juice",a:"75ml per glass · 600ml per 8"},{n:"Fresh orange juice",a:"75ml per glass · 600ml per 8"},{n:"— GARNISH:",a:""},{n:"Orange twist",a:"1 per glass"}],
        method:["Chill both the grape juice and the orange juice.","Half-fill each flute with orange juice.","Top gently with sparkling grape juice.","Finish with an orange twist."]}
    ] },

  { id:"bellini", name:"Bellini", emoji:"🍑", category:"bubbly", serves:"8", minGuests:8, glassware:"Flutes", serveNote:"Peach purée + bubbly — add the fizz last",
    didYouKnow:"Invented at Harry's Bar in Venice in the 1940s — named after the soft pink tones in a painting by the Renaissance artist Giovanni Bellini.",
    base300:[{n:"MCC / sparkling wine",a:"100ml per glass · 800ml per 8"},{n:"Peach purée",a:"40ml per glass · 320ml per 8"},{n:"— GARNISH:",a:""},{n:"Peach slice",a:"1 per glass"}],
    method:["Spoon the peach purée into each chilled flute.","Top gently with sparkling wine.","Stir very lightly.","Garnish with a thin peach slice."],
    tip:"Use ripe white peaches blended smooth — tinned peaches work in a pinch.",
    versions:[
      {name:"Classic", icon:"🍑", default:true,
        base300:[{n:"MCC / sparkling wine",a:"100ml per glass · 800ml per 8"},{n:"Peach purée",a:"40ml per glass · 320ml per 8"},{n:"— GARNISH:",a:""},{n:"Peach slice",a:"1 per glass"}],
        method:["Spoon the peach purée into each chilled flute.","Top gently with sparkling wine.","Stir very lightly.","Garnish with a thin peach slice."]},
      {name:"Mocktail", icon:"🧒", serveNote:"🧒 Alcohol-free — sparkling grape juice over peach, just as pretty.",
        base300:[{n:"Sparkling white grape juice",a:"100ml per glass · 800ml per 8"},{n:"Peach purée",a:"40ml per glass · 320ml per 8"},{n:"— GARNISH:",a:""},{n:"Peach slice",a:"1 per glass"}],
        method:["Spoon the peach purée into each chilled flute.","Top gently with sparkling grape juice.","Stir very lightly.","Garnish with a thin peach slice."]}
    ] }

];
