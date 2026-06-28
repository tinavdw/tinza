/* ═══════════════════════════════════════════════════════════════════════════
   TINZA · NEW DRINKS BATCH — 17 cocktails + Rock Shandy (mocktail)
   28 Jun 2026. Code: insert every object into the EVENTS_BEVERAGE_RECIPES array
   in beveragesData.js — each carries its own `category` field, so they route
   themselves (17 → cocktails, rockshandy → mocktails). Includes the 4 sample
   drinks (Negroni / Whisky Sour / Tom Collins / Tequila Sunrise) so this single
   file supersedes cocktails_sample.js. Schema matches Mojito: per-glass · per-10.
   Mocktail version chips on: Tequila Sunrise · Moscow Mule · Bloody Mary.
   PRICING: drinks are text-amount (uncosted) like the rest. NOTE: Mimosa & Bellini
   REMOVED — they already exist in the bubbly category.
   ═══════════════════════════════════════════════════════════════════════════ */
var NEW_DRINKS = [

  /* ── from the approved sample ── */
  { id:"negroni", name:"Negroni", emoji:"🍊", category:"cocktails", serves:"10", minGuests:8, glassware:"Rocks glasses", serveNote:"Equal parts — stir over ice, never shake, to keep it clear",
    didYouKnow:"Invented in Florence in 1919 when Count Camillo Negroni asked for his Americano made with gin instead of soda — the barman swapped the lemon for an orange slice to mark the change.",
    base300:[{n:"Gin",a:"30ml per glass · 300ml per 10"},{n:"Campari",a:"30ml per glass · 300ml per 10"},{n:"Sweet red vermouth",a:"30ml per glass · 300ml per 10"},{n:"— GARNISH:",a:""},{n:"Orange slice",a:"1 per glass"},{n:"Ice (cubed)",a:"plenty"}],
    method:["Fill a rocks glass with ice.","Add equal parts gin, Campari and sweet vermouth.","Stir 20–30 seconds to chill.","Garnish with an orange slice."],
    tip:"Batch ahead: mix equal parts in a bottle, chill, pour over ice to serve a crowd fast." },

  { id:"whiskysour", name:"Whisky Sour", emoji:"🥃", category:"cocktails", serves:"10", minGuests:8, glassware:"Rocks glasses", serveNote:"Shake hard with ice — a good sour is ice-cold and frothy",
    didYouKnow:"The 'sour' — spirit, citrus and sugar — is one of the oldest cocktail templates in print, appearing in Jerry Thomas's 1862 Bartenders Guide.",
    base300:[{n:"Bourbon or whisky",a:"50ml per glass · 500ml per 10"},{n:"Fresh lemon juice",a:"25ml per glass · 250ml per 10"},{n:"Sugar syrup",a:"15ml per glass · 150ml per 10"},{n:"Egg white (optional, for froth)",a:"1 per 2 glasses"},{n:"— GARNISH:",a:""},{n:"Angostura bitters",a:"a few drops per glass"},{n:"Lemon slice & cherry",a:"1 per glass"}],
    method:["If using egg white, dry-shake (no ice) first to build froth.","Add ice and shake hard with whisky, lemon and sugar syrup.","Strain over fresh ice.","Dot the foam with bitters and garnish."],
    tip:"No egg white? A splash of aquafaba (chickpea water) gives the same silky foam." },

  { id:"tomcollins", name:"Tom Collins", emoji:"🍸", category:"cocktails", serves:"10", minGuests:8, glassware:"Tall / Collins glasses", serveNote:"Build it tall over ice and top with soda last",
    didYouKnow:"Named after an 1874 New York hoax where strangers sent you chasing a 'Tom Collins' who was badmouthing you — bartenders turned the joke into a drink.",
    base300:[{n:"Gin",a:"50ml per glass · 500ml per 10"},{n:"Fresh lemon juice",a:"25ml per glass · 250ml per 10"},{n:"Sugar syrup",a:"15ml per glass · 150ml per 10"},{n:"Soda water (to top)",a:"80ml per glass · 800ml per 10"},{n:"— GARNISH:",a:""},{n:"Lemon slice & cherry",a:"1 per glass"}],
    method:["Build gin, lemon and sugar syrup over ice in a tall glass.","Top with soda water.","Stir gently.","Garnish with lemon and cherry."],
    tip:"Swap gin for vodka and it's a Vodka Collins; for whisky, a John Collins." },

  { id:"tequilasunrise", name:"Tequila Sunrise", emoji:"🌅", category:"cocktails", serves:"10", minGuests:8, glassware:"Tall glasses", serveNote:"Pour the grenadine slowly so it sinks and 'rises' — don't stir",
    didYouKnow:"The modern version was made at the Trident bar in California in the 1970s and became the Rolling Stones' drink on their 1972 tour — Mick Jagger called it the 'cocktail tour'.",
    base300:[{n:"Tequila",a:"50ml per glass · 500ml per 10"},{n:"Orange juice",a:"100ml per glass · 1L per 10"},{n:"Grenadine",a:"10ml per glass · 100ml per 10"},{n:"— GARNISH:",a:""},{n:"Orange slice & cherry",a:"1 per glass"}],
    method:["Fill a tall glass with ice.","Add tequila and orange juice.","Slowly pour grenadine down the inside so it sinks.","Leave to rise — don't stir. Garnish."],
    tip:"The unstirred grenadine is the whole point — that's the sunrise.",
    versions:[
      {name:"Classic", icon:"🌅", default:true,
        base300:[{n:"Tequila",a:"50ml per glass · 500ml per 10"},{n:"Orange juice",a:"100ml per glass · 1L per 10"},{n:"Grenadine",a:"10ml per glass · 100ml per 10"},{n:"— GARNISH:",a:""},{n:"Orange slice & cherry",a:"1 per glass"}],
        method:["Fill a tall glass with ice.","Add tequila and orange juice.","Slowly pour grenadine down the inside so it sinks.","Leave to rise — don't stir. Garnish."]},
      {name:"Mocktail", icon:"🧃", serveNote:"🧒 Alcohol-free — same beautiful sunrise, kids' and drivers' favourite.",
        base300:[{n:"Orange juice",a:"130ml per glass · 1.3L per 10"},{n:"Soda water (a splash)",a:"30ml per glass · 300ml per 10"},{n:"Grenadine",a:"10ml per glass · 100ml per 10"},{n:"— GARNISH:",a:""},{n:"Orange slice & cherry",a:"1 per glass"}],
        method:["Fill a tall glass with ice.","Add orange juice and a splash of soda.","Slowly pour grenadine down the inside so it sinks.","Leave to rise — don't stir. Garnish."]}
    ] },

  /* ── new cocktails ── */
  { id:"martini", name:"Martini", emoji:"🍸", category:"cocktails", serves:"10", minGuests:8, glassware:"Martini glasses", serveNote:"Stir with ice and strain — keep it ice-cold and crystal clear",
    didYouKnow:"Shaken or stirred? Classic bartending says STIR a Martini — shaking clouds it with ice shards. James Bond's 'shaken, not stirred' was his own quirk, not the rule.",
    base300:[{n:"Gin (or vodka)",a:"60ml per glass · 600ml per 10"},{n:"Dry vermouth",a:"10ml per glass · 100ml per 10"},{n:"— GARNISH:",a:""},{n:"Olives or lemon twist",a:"1–2 per glass"}],
    method:["Stir gin and dry vermouth with plenty of ice for 20–30 seconds.","Strain into a chilled martini glass.","Garnish with olives or a lemon twist.","For a 'dry' martini, use less vermouth; 'dirty', add a splash of olive brine."],
    tip:"Chill the glasses in the freezer first — a warm martini is a sad martini." },

  { id:"harveywallbanger", name:"Harvey Wallbanger", emoji:"🍊", category:"cocktails", serves:"10", minGuests:8, glassware:"Tall glasses", serveNote:"Float the Galliano on top — that golden layer is the signature",
    didYouKnow:"A 1970s disco-era classic — basically a Screwdriver with a float of Galliano, the tall golden Italian vanilla-herb liqueur.",
    base300:[{n:"Vodka",a:"45ml per glass · 450ml per 10"},{n:"Orange juice",a:"90ml per glass · 900ml per 10"},{n:"Galliano (to float)",a:"15ml per glass · 150ml per 10"},{n:"— GARNISH:",a:""},{n:"Orange slice & cherry",a:"1 per glass"}],
    method:["Fill a tall glass with ice.","Add vodka and orange juice, stir.","Gently float the Galliano on top over the back of a spoon.","Garnish with orange and a cherry."],
    tip:"No Galliano? A little vanilla syrup gives a similar warm, golden note." },

  { id:"sidecar", name:"Sidecar", emoji:"🍋", category:"cocktails", serves:"10", minGuests:8, glassware:"Coupe glasses (sugar-rimmed)", serveNote:"Shake hard and strain — sharp, citrussy and elegant",
    didYouKnow:"A Prohibition-era classic said to be named after an army captain who arrived at a Paris bar in a motorcycle sidecar.",
    base300:[{n:"Cognac or brandy",a:"50ml per glass · 500ml per 10"},{n:"Cointreau / triple sec",a:"20ml per glass · 200ml per 10"},{n:"Fresh lemon juice",a:"20ml per glass · 200ml per 10"},{n:"— GARNISH:",a:""},{n:"Sugar (for the rim)",a:"a little per glass"},{n:"Lemon twist",a:"1 per glass"}],
    method:["Rim the glass with sugar and chill it.","Shake brandy, Cointreau and lemon hard with ice.","Strain into the sugar-rimmed coupe.","Garnish with a lemon twist."],
    tip:"SA brandy shines here — it's a great way to dress up a local bottle." },

  { id:"gimlet", name:"Gimlet", emoji:"🍈", category:"cocktails", serves:"10", minGuests:8, glassware:"Coupe glasses", serveNote:"Sharp, clean and bracing — gin and lime, nothing to hide behind",
    didYouKnow:"Once a British navy drink — gin cut with lime cordial to ward off scurvy on long voyages.",
    base300:[{n:"Gin",a:"60ml per glass · 600ml per 10"},{n:"Lime cordial",a:"20ml per glass · 200ml per 10"},{n:"— GARNISH:",a:""},{n:"Lime wheel",a:"1 per glass"}],
    method:["Shake gin and lime cordial with ice until very cold.","Strain into a chilled coupe.","Garnish with a lime wheel.","Prefer fresh? Use 25ml fresh lime juice + 15ml sugar syrup instead of cordial."],
    tip:"A vodka gimlet works just as well for non-gin drinkers." },

  { id:"maitai", name:"Mai Tai", emoji:"🌺", category:"cocktails", serves:"10", minGuests:8, glassware:"Rocks glasses (crushed ice)", serveNote:"Pile on crushed ice — it's a tiki drink, lean into it",
    didYouKnow:"Created by Trader Vic in 1944 — legend says the first taster, a friend from Tahiti, exclaimed 'Maita'i!' (Tahitian for 'very good').",
    base300:[{n:"Aged / dark rum",a:"40ml per glass · 400ml per 10"},{n:"Orange curaçao",a:"20ml per glass · 200ml per 10"},{n:"Orgeat (almond syrup)",a:"15ml per glass · 150ml per 10"},{n:"Fresh lime juice",a:"25ml per glass · 250ml per 10"},{n:"— GARNISH:",a:""},{n:"Mint sprig & lime shell",a:"1 per glass"}],
    method:["Shake rum, curaçao, orgeat and lime with crushed ice.","Pour unstrained into a rocks glass.","Top with more crushed ice.","Garnish with a mint sprig and a spent lime shell."],
    tip:"Float a little extra dark rum on top for a 'shipwreck' finish." },

  { id:"passionfruitmartini", name:"Passionfruit Martini", emoji:"🍹", category:"cocktails", serves:"10", minGuests:8, glassware:"Martini glasses (+ shot glasses)", serveNote:"Serve with a side shot of bubbly — sip, shot, sip",
    didYouKnow:"A modern London classic from the early 2000s — on most bar menus it's the cheekily-named 'Pornstar Martini'. Always served with a little shot of prosecco on the side.",
    base300:[{n:"Vanilla vodka",a:"50ml per glass · 500ml per 10"},{n:"Passionfruit purée (or Passoã)",a:"25ml per glass · 250ml per 10"},{n:"Fresh lime juice",a:"15ml per glass · 150ml per 10"},{n:"Vanilla sugar syrup",a:"10ml per glass · 100ml per 10"},{n:"Prosecco (side shot)",a:"30ml per glass · 300ml per 10"},{n:"— GARNISH:",a:""},{n:"Half a fresh passionfruit",a:"½ per glass"}],
    method:["Shake the vodka, passionfruit, lime and vanilla syrup hard with ice.","Strain into a chilled martini glass.","Float half a fresh passionfruit on top.","Serve with a small side shot of prosecco."],
    tip:"Pour the prosecco shot last so it's lively." },

  { id:"singaporesling", name:"Singapore Sling", emoji:"🍒", category:"cocktails", serves:"10", minGuests:8, glassware:"Tall / Hurricane glasses", serveNote:"Long, fruity and ruby-red — a proper holiday drink",
    didYouKnow:"Created around 1915 at the Raffles Hotel in Singapore — its pink colour let ladies of the era 'drink' in public when alcohol wasn't proper for them.",
    base300:[{n:"Gin",a:"30ml per glass · 300ml per 10"},{n:"Cherry liqueur",a:"15ml per glass · 150ml per 10"},{n:"Pineapple juice",a:"100ml per glass · 1L per 10"},{n:"Fresh lime juice",a:"15ml per glass · 150ml per 10"},{n:"Grenadine",a:"10ml per glass · 100ml per 10"},{n:"— GARNISH:",a:""},{n:"Angostura bitters",a:"a dash per glass"},{n:"Pineapple wedge & cherry",a:"1 per glass"}],
    method:["Shake gin, cherry liqueur, pineapple, lime and grenadine with ice.","Strain into a tall glass over fresh ice.","Add a dash of bitters.","Garnish with a pineapple wedge and cherry."],
    tip:"A splash of soda lengthens it nicely for a hot day." },

  { id:"oldfashioned", name:"Old Fashioned", emoji:"🥃", category:"cocktails", serves:"10", minGuests:8, glassware:"Rocks glasses", serveNote:"Spirit-forward — stir slowly over a big ice cube",
    didYouKnow:"One of the very first drinks to be called a 'cocktail' in the early 1800s — whisky, sugar, water and bitters. When fancier drinks took over, drinkers asked for it the 'old-fashioned' way.",
    base300:[{n:"Bourbon or whisky",a:"50ml per glass · 500ml per 10"},{n:"Sugar syrup",a:"10ml per glass · 100ml per 10"},{n:"Angostura bitters",a:"2–3 dashes per glass"},{n:"— GARNISH:",a:""},{n:"Orange peel",a:"1 per glass"}],
    method:["Add sugar syrup and bitters to a rocks glass.","Add the whisky and a large ice cube.","Stir slowly for 20–30 seconds.","Express an orange peel over the top and drop it in."],
    tip:"A big single ice cube melts slower — less dilution, more flavour." },

  { id:"moscowmule", name:"Moscow Mule", emoji:"🫚", category:"cocktails", serves:"10", minGuests:8, glassware:"Copper mugs / tall glasses", serveNote:"Spicy ginger kick — serve really cold, ideally in a copper mug",
    didYouKnow:"Born in 1941 Los Angeles to shift unsold vodka and ginger beer — the copper mug was a third struggling product the trio threw into the deal.",
    base300:[{n:"Vodka",a:"50ml per glass · 500ml per 10"},{n:"Fresh lime juice",a:"15ml per glass · 150ml per 10"},{n:"Ginger beer (to top)",a:"120ml per glass · 1.2L per 10"},{n:"— GARNISH:",a:""},{n:"Lime wedge & mint",a:"1 per glass"}],
    method:["Fill a copper mug or tall glass with ice.","Add vodka and lime juice.","Top with ginger beer.","Garnish with a lime wedge and mint."],
    tip:"Use a fiery ginger beer, not ginger ale — the spice is the point.",
    versions:[
      {name:"Classic", icon:"🫚", default:true,
        base300:[{n:"Vodka",a:"50ml per glass · 500ml per 10"},{n:"Fresh lime juice",a:"15ml per glass · 150ml per 10"},{n:"Ginger beer (to top)",a:"120ml per glass · 1.2L per 10"},{n:"— GARNISH:",a:""},{n:"Lime wedge & mint",a:"1 per glass"}],
        method:["Fill a mug with ice.","Add vodka and lime.","Top with ginger beer.","Garnish."]},
      {name:"Mocktail", icon:"🧒", serveNote:"🧒 Alcohol-free Virgin Mule — all the ginger kick, no vodka.",
        base300:[{n:"Fresh lime juice",a:"20ml per glass · 200ml per 10"},{n:"Ginger beer (to top)",a:"160ml per glass · 1.6L per 10"},{n:"— GARNISH:",a:""},{n:"Lime wedge & mint",a:"1 per glass"}],
        method:["Fill a mug with ice.","Add the lime juice.","Top with ginger beer.","Garnish with lime and mint."]}
    ] },

  { id:"martinez", name:"Martinez", emoji:"🍒", category:"cocktails", serves:"10", minGuests:8, glassware:"Coupe glasses", serveNote:"The smooth, sweet grandfather of the Martini — stir and strain",
    didYouKnow:"Widely seen as the bridge between the Manhattan and the Martini — richer and sweeter than today's dry Martini.",
    base300:[{n:"Gin",a:"45ml per glass · 450ml per 10"},{n:"Sweet red vermouth",a:"45ml per glass · 450ml per 10"},{n:"Maraschino liqueur",a:"7ml per glass · 70ml per 10"},{n:"— GARNISH:",a:""},{n:"Angostura bitters",a:"2 dashes per glass"},{n:"Lemon twist",a:"1 per glass"}],
    method:["Stir gin, vermouth, maraschino and bitters with ice.","Strain into a chilled coupe.","Express a lemon twist over the top and drop it in."],
    tip:"Use an Old Tom or floral gin for the most authentic, rounded flavour." },

  { id:"sazerac", name:"Sazerac", emoji:"🥃", category:"cocktails", serves:"10", minGuests:8, glassware:"Rocks glasses (chilled)", serveNote:"Rinse the glass with absinthe, tip it out, then build — that aroma is everything",
    didYouKnow:"New Orleans' signature cocktail and one of America's oldest, dating to the 1850s — originally made with cognac before rye whisky took over.",
    base300:[{n:"Rye whisky (or cognac)",a:"50ml per glass · 500ml per 10"},{n:"Sugar syrup",a:"10ml per glass · 100ml per 10"},{n:"Peychaud's bitters",a:"3 dashes per glass"},{n:"Absinthe (to rinse)",a:"a splash per glass"},{n:"— GARNISH:",a:""},{n:"Lemon peel",a:"1 per glass"}],
    method:["Rinse a chilled rocks glass with absinthe and tip out the excess.","Stir the whisky, sugar and Peychaud's with ice.","Strain into the absinthe-rinsed glass (no ice).","Express a lemon peel over the top — traditionally discarded, not dropped in."],
    tip:"No Peychaud's? Angostura works, though the flavour shifts a little." },

  { id:"bloodymary", name:"Bloody Mary", emoji:"🍅", category:"cocktails", serves:"10", minGuests:8, glassware:"Tall glasses", serveNote:"Savoury and spicy — adjust the heat to taste, garnish generously",
    didYouKnow:"The ultimate brunch and hangover drink, made famous at Harry's New York Bar in 1920s Paris. The celery-stick garnish was a 1960s Chicago addition.",
    base300:[{n:"Vodka",a:"45ml per glass · 450ml per 10"},{n:"Tomato juice",a:"90ml per glass · 900ml per 10"},{n:"Fresh lemon juice",a:"15ml per glass · 150ml per 10"},{n:"Worcestershire sauce",a:"2 dashes per glass"},{n:"Tabasco",a:"to taste"},{n:"— SEASONING & GARNISH:",a:""},{n:"Salt, pepper & celery salt",a:"a pinch per glass"},{n:"Celery stick & lemon",a:"1 per glass"}],
    method:["Fill a tall glass with ice.","Add vodka, tomato juice, lemon, Worcestershire and Tabasco.","Season with salt, pepper and celery salt; stir (or 'roll' between two glasses).","Garnish with a celery stick and lemon wedge."],
    tip:"A pinch of smoked paprika or a dash of pickle brine adds real depth.",
    versions:[
      {name:"Classic", icon:"🍅", default:true,
        base300:[{n:"Vodka",a:"45ml per glass · 450ml per 10"},{n:"Tomato juice",a:"90ml per glass · 900ml per 10"},{n:"Fresh lemon juice",a:"15ml per glass · 150ml per 10"},{n:"Worcestershire sauce",a:"2 dashes per glass"},{n:"Tabasco",a:"to taste"},{n:"— SEASONING & GARNISH:",a:""},{n:"Salt, pepper & celery salt",a:"a pinch per glass"},{n:"Celery stick & lemon",a:"1 per glass"}],
        method:["Fill a tall glass with ice.","Add vodka, tomato juice, lemon, Worcestershire and Tabasco.","Season and stir.","Garnish with celery and lemon."]},
      {name:"Mocktail", icon:"🧒", serveNote:"🧒 Alcohol-free Virgin Mary — all the savoury kick, no vodka.",
        base300:[{n:"Tomato juice",a:"130ml per glass · 1.3L per 10"},{n:"Fresh lemon juice",a:"15ml per glass · 150ml per 10"},{n:"Worcestershire sauce",a:"2 dashes per glass"},{n:"Tabasco",a:"to taste"},{n:"— SEASONING & GARNISH:",a:""},{n:"Salt, pepper & celery salt",a:"a pinch per glass"},{n:"Celery stick & lemon",a:"1 per glass"}],
        method:["Fill a tall glass with ice.","Add tomato juice, lemon, Worcestershire and Tabasco.","Season and stir.","Garnish with celery and lemon."]}
    ] },

  { id:"vesper", name:"Vesper", emoji:"🕸️", category:"cocktails", serves:"10", minGuests:8, glassware:"Coupe glasses", serveNote:"Strong and elegant — gin, vodka and a whisper of Lillet",
    didYouKnow:"James Bond's own invention in Casino Royale (1953), named after Vesper Lynd — the one time 'shaken, not stirred' actually applies.",
    base300:[{n:"Gin",a:"60ml per glass · 600ml per 10"},{n:"Vodka",a:"15ml per glass · 150ml per 10"},{n:"Lillet Blanc",a:"7ml per glass · 70ml per 10"},{n:"— GARNISH:",a:""},{n:"Lemon twist",a:"1 per glass"}],
    method:["Shake gin, vodka and Lillet Blanc hard with ice until very cold.","Strain into a chilled coupe.","Express a large lemon twist over the top and drop it in."],
    tip:"Lillet Blanc has replaced the original (now-discontinued) Kina Lillet — a touch of dry vermouth also works." },

  /* ── Rock Shandy — non-alcoholic, lives in MOCKTAILS ── */
  { id:"rockshandy", name:"Rock Shandy", emoji:"🍋", category:"mocktails", serves:"10", minGuests:6, glassware:"Tall glasses", serveNote:"The SA classic — equal lemonade and soda with a dash of bitters",
    didYouKnow:"A South African and British favourite — half lemonade, half soda, with a few dashes of Angostura bitters for that signature pink tint and grown-up edge. Beloved at golf clubs and braais alike.",
    base300:[{n:"Lemonade",a:"150ml per glass · 1.5L per 10"},{n:"Soda water",a:"150ml per glass · 1.5L per 10"},{n:"Angostura bitters",a:"4–5 dashes per glass"},{n:"— GARNISH:",a:""},{n:"Lemon slice",a:"1 per glass"},{n:"Ice",a:"plenty"}],
    method:["Fill a tall glass with ice.","Pour in equal parts lemonade and soda water.","Add 4–5 dashes of Angostura bitters.","Stir once and garnish with a lemon slice."],
    tip:"The bitters are technically a trace of alcohol — leave them out entirely for a fully alcohol-free version for kids." }

];
