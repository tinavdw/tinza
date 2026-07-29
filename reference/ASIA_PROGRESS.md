# ASIA LANE — PROGRESS
**The file is the memory.** Started 29 Jul 2026. Target: 240 recipes to WOW_STANDARD.md.

## SCOPE (Tina, 29 Jul)
| Country | Target | Banked | File | Wired |
|---|---|---|---|---|
| China | 50 | **50** ✅ | `sections/wk_china.js` | ⬜ not yet |
| Japan | 50 | **5** | `sections/wk_japan.js` | ⬜ **not yet — 2 lines** |
| Indonesia | 50 | 0 | `sections/wk_indonesia.js` | — |
| Thailand | 50 | 0 | `sections/wk_thailand.js` | — |
| Vietnam | 40 | 0 | `sections/wk_vietnam.js` | — |
| **TOTAL** | **240** | **55** | | |

Next lane after Asia: **South America.**

## RULINGS THIS LANE
- **A5 — STAPLES ARE REAL CARDS (Tina, 29 Jul).** How-to-make-it staples (tofu, chilli oil, stock, curry paste, rice paper, dashi, sambal…) get their own full WOW record with `course:"staple"`, and dishes reach them through the existing `crossLinks:[{name,target,emoji}]` mechanism rendered by `crossLinkBox()` in core.js. NOT a paragraph buried in a method. Rule: if a staple is bought in a packet but genuinely makeable, it earns a card.
- **A6 — Every record carries `crossLinks` (3 targets).** Batch 1 was retro-fitted. A dead target is a bug — the merge script asserts every target resolves before writing.
- **A7 — Prices deferred (Tina, 29 Jul).** ALL new Asian ingredient keys land in ONE batch after all five countries are authored, not per-country. MF152 is the running list — append to it, do not act on it yet.
- **A1 — One file per country.** Precedent `wk_france.js`. Smaller files, safer pushes, one Netlify batch per country. NOT one `wk_asia.js`.
- **A2 — Greenfield confirmed.** Audited 29 Jul: `wk_world.js` is South Asia only (India 32 · Pakistan 24 · Sri Lanka 30, cuisine=`south-asia`). China/Japan/Thailand/Vietnam/Indonesia have ZERO World Kitchen records. No dedupe pass needed. `cuisine` for this lane = `east-asia` (China, Japan) and `southeast-asia` (Thailand, Vietnam, Indonesia).
- **A3 — Schema control = the Snoek Curry record** in `wk_southafrica.js`. 24 keys, `type`/`diet`/`occasion` as arrays, `costPP` lives on versions never on the record, budget fork LEADS, exactly one `default:true`.
- **A4 — Dish selection: icons only.** No coffee-with-milk, no plain rice, no generic stir-fry. Every card must be a dish someone would cross town for.

## WIRING (THREE lines per country — CORRECTED 29 Jul)
⚠️ **The old "2 lines per country" note was WRONG and would have shipped 33 invisible recipes.**
There is a third, undocumented touchpoint: `WK_COUNTRY_GEO` in `worldkitchen.js` (~line 64).
`wkCountriesIn()` skips any record whose country is not in that map, so an unmapped country loads
into the pool, passes every check, and appears **nowhere** in the Continent → Region → Country nav.
No error, no blank screen, no console warning. Proven born-RED 29 Jul by removing the line: `{ China: 33 }` went unmapped.

```
1. index.html          →  <script src="sections/wk_china.js"></script>
2. worldkitchen.js:58  →  add   window.WK_CHINA || [],   to the wkPool() concat
3. worldkitchen.js:~79 →  add   "China":["Asia","Eastern Asia"],   to WK_COUNTRY_GEO
```
✅ **CHINA WIRED 29 Jul** — all three done by Claude, handed back as replacement files.
✅ Geo entries for **Japan · Indonesia · Thailand · Vietnam** were added at the same time
(Japan+China = `Eastern Asia`; ID/TH/VN = `South-eastern Asia`), so line 3 is now ALREADY DONE
for the remaining four countries. Those still need lines 1 and 2 each.
Region strings must match `WK_CONTINENTS` exactly — note it is `South-eastern Asia`, with the hyphen.

⚠️ A file that is not wired is not in the app. Push wk_china.js, index.html and worldkitchen.js TOGETHER.

---

## 🇨🇳 CHINA — ✅ CLOSED 50 / 50 (29 Jul 2026)

### DONE
1. ✅ **Hong Shao Rou** (Red-Braised Pork Belly) — 3 versions: Pork Neck budget R26 · Classic Belly R42 · With Tea Eggs R47. Caramel-colour law in method. Mao/Hunan moat.
2. ✅ **Mapo Tofu** — 3 versions: Vegetarian R22 · Classic Sichuan R31 · Mild Family Pot R30. Salt-poach + fry-the-doubanjiang-till-oil-runs-red laws. Mrs Chen moat.
3. ✅ **Gong Bao Chicken** — 3 versions: Chicken Breast budget R29 · Classic Chengdu R38 · Gong Bao Prawns R68. Velveting + everything-prepped-first laws. Ding Baozhen title moat.
4. ✅ **Char Siu** — 3 versions: Pork Fillet budget R33 · Classic Neck R41 · Char Siu Chicken R30. Reserve-a-spoon-of-marinade law. "Fork burn" + red bean curd moat.
5. ✅ **Dan Dan Noodles** — 3 versions: Peanut Butter budget R24 · Classic Chengdu R34 · Vegetarian R27. Sauce-seizes-then-smooths law, served unmixed. Carrying-pole moat.

6. ✅ **🔧 STAPLE — Homemade Tofu** — 3 versions: Lemon-Set budget R12 · Classic Nigari R16 · Silken R16. Soak→blend→boil 7min→strain→coagulate at 80°C→press. Liu An moat. Okara + whey both used in leftovers.
7. ✅ **🔧 STAPLE — Chilli Oil** — 3 versions: Plain Red budget R6 · Classic Aromatic R11 · Chilli Crisp R18. 120°C + THREE POURS law. Chillies-reached-China-1500s moat.
8. ✅ **Xiao Long Bao** — 3 versions: Gelatine Shortcut budget R31 · Classic Nanxiang R44 · Crab & Pork R78. Soup-goes-in-solid, stir-one-direction, boiling-water dough, thick base. Huang Mingxian 1871 moat.
9. ✅ **Roast Duck, Peking Style** — 3 versions: Duck Legs budget R42 · Classic Whole Bird R96 · Five Spice Chicken R34. Honest home-oven framing; scald→glaze→24-48hr uncovered fridge dry. Quanjude + carcass-as-course-two moat.
10. ✅ **Yu Xiang Qie Zi** — 3 versions: Vegan R21 · Classic with Pork R27 · Oven-Roasted R24. Salt-and-dry the aubergine, fry in batches, taste sauce in the bowl. No-fish-in-fish-fragrant moat.
11. ✅ **Cong You Bing** — 3 versions: Classic Coiled R14 · Folded Shortcut budget R12 · Sesame & Chilli R17. Oil PASTE not oil, coil-then-flatten, squash-from-the-edges finish. Marco Polo pizza legend moat.
12. ✅ **Hot & Sour Soup** — 3 versions: Vegetarian R19 · Classic Beijing R26 · With Prawns R52. Vinegar + white pepper OFF THE HEAT at the end; egg poured from a height into a bare simmer. Wood-ear + winter-medicine moat.


### BATCH 3 (29 Jul)
13. ✅ **Gu Lao Rou** (Sweet & Sour Pork, the real Cantonese one) — 3 versions: Shallow-Fried Chicken budget R27 · Classic Cantonese R38 · On the Bone R36. Laws: double-fry (cook → REST/DRY → crust), taste the sauce in the pan before the pork goes in. Moat: the boneless cube is the *export edition* of a bone-in dish, reworked for 19th-c foreign traders; "gu lou" = the stomach-rumble, self-promotion built into the name.
14. ✅ **Hui Guo Rou** (Twice-Cooked Pork) — 3 versions: Belly & Cabbage Stretch budget R24 · Classic Sichuan R32 · Green Garlic Season R35. Laws: CHILL the boiled belly before slicing (warm belly can't go thin, thin IS the dish); render the slices to "lamp shades" before any sauce. Moat: the first cook was the *ancestral offering* — plain and unseasoned because it wasn't yours to season; the family re-cooked it after.
15. ✅ **Steamed Whole Fish** (Qing Zheng Yu) — 3 versions: Fish Fillets budget R31 · Classic Whole Fish R48 · With Fermented Black Beans R52. Laws: 8 min per 500g over a HARD rolling boil, test at the score behind the head; POUR OFF the steaming liquid before saucing; 200°C oil must audibly sizzle on the raw ginger. Moat: fish/surplus homophone, leave some uneaten; head points at the guest of honour.
16. ✅ **Hong You Chao Shou** (Wontons in Chilli Oil) — 3 versions: Chicken Mince budget R22 · Classic Chengdu Pork R30 · Prawn & Pork R48. Laws: THREE WATERS (cold water in three times so wrappers stop thrashing while filling catches up); sauce built in the BOWL not the pot; seal squeezing air outward. Moat: chao shou = "folded arms" (winter street food) vs Cantonese "swallowing clouds" — same parcel, two pictures.
17. ✅ **Dry-Fried Green Beans** (Gan Bian Si Ji Dou) — 3 versions: Oven-Blistered budget R14 · Classic Dry-Fried R19 · Vegan with Mushroom R17. Laws: BONE-DRY beans; fry till skins wrinkle/blister; NOT ONE DROP of liquid after. Moat: the wrinkle rule is a *food-safety rule wearing a costume* (raw-bean lectins) — older than the chemistry explaining it. Ya cai explained properly.
18. ✅ **🔧 STAPLE — Master Stock (Lu Shui)** — 3 versions: Starter Batch budget R9 · Classic Lu Shui R15 · Sichuan Red R18. Laws: toast the dry spices; spices in MUSLIN; never boil the meat; after EVERY use strain → rolling boil 5 min → cool fast and FLAT → freeze; nothing floury ever. Moat: hundred-year stocks, gelatine accumulation is the real chemistry behind the romance, families evacuating with the pot.


### BATCH 4 (29 Jul)
19. ✅ **Beef Chow Fun** (Gon Chow Ngau Ho) — 3 versions: Chicken & Dried Noodle budget R26 · Classic R38 · Black Bean & Pepper R42. Laws: noodles to ROOM TEMP and separated by hand (cold ho fun snaps into rubble); NEVER stir — toss/flip, a spatula shreds them; bicarb-then-RINSE velveting; not one drop of liquid. Moat: it is the **hiring test** for a wok cook in Hong Kong — cheap ingredients, nowhere to hide; wok hei explained as chemistry not poetry.
20. ✅ **Zhajiangmian** (Beijing fried-sauce noodles) — 3 versions: Pork Mince budget R21 · Classic Diced Belly R30 · Vegetarian Mushroom & Tofu R23. Laws: DILUTE the paste with water before it meets the pan or it burns bitter; simmer 25–30 min until the OIL SPLITS and floats — that separation is doneness; the sauce is *meant* to taste too salty alone (it is a condiment for a pile of noodles). Moat: the 1900 Empress-Dowager roadside-inn legend, framed as legend, with the detail that makes it plausible (a sauce salty enough to keep unrefrigerated).
21. ✅ **Cumin Lamb** (Zi Ran Yang Rou, Xinjiang) — 3 versions: Cumin Chicken Thigh budget R32 · Classic Xinjiang Lamb R58 · Skewers Over Coals R62. Laws: toast + COARSELY crush whole cumin, and SPLIT it — half in the wok, half off the heat; sear in two batches or the lamb steams grey. Moat: cumin stopped in Xinjiang off the Silk Road; the Uyghur skewer practice of threading pure fat between lean cubes to self-baste. ⚡ The coals version is a natural Braai-shelf cross-appeal.
22. ✅ **Lion's Head Meatballs** (Shizi Tou) — 3 versions: Pork & Cabbage budget R23 · Classic Braised R33 · With Crab Meat R78. Laws: HAND-CHOP the pork, keep 70:30 fat; THROW the ball palm-to-palm rather than rolling it tight (rolling = bouncy, throwing = spoonable); never let the braise boil. Moat: Huaiyang is the **state-banquet cuisine precisely because it is mild** — diplomacy through blandness, done extremely well.
23. ✅ **Egg & Tomato Stir-Fry** (Xihongshi Chao Jidan) — 3 versions: Two-Egg Everyday budget R9 · Classic R13 · Over Noodles in Broth R17. Laws: PEEL the tomatoes; cook egg and tomato SEPARATELY and unite only at the end; the sugar is structural not sweetening; the tomato's own juice is the sauce, no water. Moat: the first dish nearly every Chinese person is taught, and yet barely a century old in this form — tomatoes arrived 16th c and were ornaments first.

⚖️ **VOCAB CATCH (29 Jul, worth keeping).** Batch 4 first went in with `diet:["halaal-friendly"]` on the lamb and `["pescatarian"]` on the fish. Both STRUCK — v1 diet vocabulary is `omnivore · vegetarian · vegan · unknown` only, and **halaal/kosher are separate laws and never diet tags** (Tina's dietary ruling, 12 Jul). Fixed to `["omnivore"]`. The merge validator now asserts the diet vocabulary and the rung was proven born-RED by re-introducing the bad token.

### BATCH 5 (29 Jul)
24. ✅ **Char Siu Bao** (steamed BBQ pork buns) — 3 versions: Chicken & Hoisin budget R14 · Classic Steamed R20 · Baked Golden Bao R23. Laws: filling thickened to gluey-on-the-spoon and CHILLED (it loosens in the steamer — a "correct" sauce becomes soup inside the bun); yeast AND baking powder together (yeast = flavour + slow rise, baking powder = the second sharp lift that SPLITS the top); rest 3 min off the heat before the lid comes off or the bun wrinkles and never recovers; cake flour for whiteness. Moat: the split top is the *smiling bun* — dim sum chefs are judged on it; cha siu sou (baked) is the younger sibling from Hong Kong's European-oven bakeries.
25. ✅ **Sheng Jian Bao** (Shanghai pan-fried pork buns) — 3 versions: Chicken & Cabbage budget R19 · Classic Shanghai Pork R27 · Soup-Filled with Jelly R33. Laws: DELIBERATELY under-prove the dough (a doubled dough goes bready and drinks the juice); cold stock into the mince a splash at a time, one direction, only after it has gone sticky — that mesh is the soup; fry → water + lid → the HISS CHANGING PITCH is the timer → uncover and re-crisp. Moat: *sheng* = raw — they go in raw, which is what separates them from every other bun on the street; the seam-up vs seam-down argument (Yang's fries the pleats).
26. ✅ **Salt & Pepper Squid** (Jiao Yan You Yu) — 3 versions: Salt & Pepper Chicken budget R26 · Classic Squid R44 · Salt & Pepper Prawns R62. Laws: squid has TWO WINDOWS — under 2 min or over 40, nothing between; crosshatch the inside (fibres run one way, scoring stops the curl); bone-dry, 190°C, 60–90 s, drain on a RACK not paper; the spiced salt goes on OFF THE HEAT; sieve the husks out of ground Sichuan pepper. Moat: jiu yan is a *technique*, not a recipe — squid, prawns, chops, tofu, chips; Sichuan pepper isn't pepper, it's a citrus husk, and the tingle measures ~50 Hz.
27. ✅ **Mala Xiang Guo** (dry hotpot) — 3 versions: Chicken & Cabbage budget R28 · Classic R41 · Mushroom & Tofu R30. Laws: it is an ASSEMBLY dish, not a stir-fry — every ingredient cooked to its own doneness first, blanched dry, never refreshed in cold water; fry the doubanjiang 60–90 s till the oil runs red (that, not the chilli, is the backbone); NOT ONE DROP of liquid at the final toss; dried chillies are aromatics, fish them out like a bay leaf. Moat: barely 30 years old — 1990s Sichuan/Chongqing canteens where you filled a basket by weight; hotpot for people with no table, no pot and no two hours.
28. ✅ **Century Egg & Pork Congee** (Pi Dan Shou Rou Zhou) — 3 versions: Plain Chicken budget R11 · Classic Century Egg & Salted Pork R19 · Fish & Ginger R26. Laws: CURE the pork overnight in coarse salt (seasons through + shreds instead of dissolving); oil-and-salt the rice 30 min (or freeze it) so the grains split; HARD boil 10 min then a whisper for an hour, scraping the bottom every 10; century egg in TWO HALVES — half melted into the base, half spooned on top; stop it looser than looks right, it sets as it cools. Moat: never a century — 6–8 weeks in alkali, pH ~12, cooking without heat; the Ming slaked-lime origin story is too neat and the chemistry backs it exactly.

### BATCH 6 (29 Jul) — the dim sum trolley
29. ✅ **Har Gow** (crystal prawn dumplings) — 3 versions: Prawn & Chicken budget R29 · Classic R46 · Prawn & Coriander w/ Chilli Oil R52. Laws: WHEAT STARCH, not flour — no gluten, behaves like plasticine, and the water must be genuinely off-the-boil or it never gelatinises; keep the dough covered every second (it cracks in ~90 s of open air and cannot be rescued with water); split the prawns — a third to paste for bind, the rest in chunks for bite; steam SIX minutes, not eight. Moat: 1920s Wucun teahouse outside Guangzhou; the skin is a by-product of washing gluten out for seitan; ten pleats is the trade benchmark and a chef's reputation rests on whether the skin tears under chopsticks.
30. ✅ **Siu Mai** — 3 versions: Pork & Mushroom budget R21 · Classic Pork & Prawn R33 · Crab & Prawn R68. Laws: 25% FAT mince, non-negotiable — the top is open so it loses moisture the whole cook; stir ONE direction two full minutes until it turns from loose mince to something that pulls back on the spoon; save a spoon of shiitake soaking liquid; push the filling DOWN into the wrapper, don't fold; press the base flat so it stands. Moat: it is NOT Cantonese in origin — Hohhot, Inner Mongolia, made with lamb, sold to caravan traders; *shao mai* ≈ sell-as-you-cook. The open frill exists so steam gets in, which is why it cooks faster than any closed dumpling.
31. ✅ **Turnip Cake** (Lo Bak Go) — 3 versions: Plain Radish budget R12 · Classic R22 · New Year Loaf R31. Laws: KEEP the radish cooking liquid and measure total liquid to 320ml (a young radish gives more than an old one — a fixed water quantity is why home cakes won't set); grate COARSE so there are threads in the slice; CHILL OVERNIGHT before frying — warm cake disintegrates in the pan, and this is where everyone goes wrong; fry undisturbed 3–4 min a side. Moat: contains no turnip (mistranslated daikon, a century ago, and restaurants still print it); *gou* = cake = homophone for rising — it's a Lunar New Year gift loaf, given uncut because slicing it cuts the year's luck.
32. ✅ **Egg Tarts** (Dan Tat) — 3 versions: Simple Shortcrust budget R8 · Classic HK R11 · Macau Puff Pastry R16. Laws: DISSOLVE the sugar in hot water first (whisking sugar into eggs = the pockmarked top); beat the eggs with a FORK, never to a froth; strain TWICE and lift remaining bubbles off with kitchen paper — every surface bubble is a crater; 200°C for 10 min then DROP to 160°C, because egg custard curdles above ~90°C; pull it while the centre still wobbles. Moat: English custard tart → Canton trade → 1920s Guangzhou department stores → post-war Hong Kong; the Macau version is *younger than most people eating it* (Andrew Stow, 1989) and its scorched black top is deliberate bitterness against the sugar.
33. ✅ **Wonton Noodle Soup** (Wonton Mein) — 3 versions: Pork & Cabbage budget R23 · Classic Prawn R39 · Whole Prawn & Chive R58. Laws: TOASTED DRIED FLOUNDER/SHRIMP in the broth is the thing home versions are missing; blanch and SCRUB the bones (a clouded broth never comes back); a whisper, never a boil; boil the wontons in PLAIN water — never in the broth, they shed cornflour and cloud it; noodles 45–60 seconds only; wontons sit ON TOP of the noodles. Moat: the bowl is small *on purpose* — sampan snack food in Victoria Harbour, priced for frequent small buys; the bamboo-pole kneading survives because the dough is too stiff for hands, and that stiffness IS the snap.

### BATCH 7 (29 Jul) — the regional spread
34. ✅ **Lanzhou Beef Noodle Soup** (Lanzhou Niurou Mian) — 3 versions: Dried Noodle Shortcut budget R28 · Classic Lanzhou R42 · Beef Shin & Marrow Bones R60. Laws: blanch AND scrub the bones, then never let the pot boil again — a clouded broth cannot be brought back; spices in MUSLIN (loose spices cloud a broth you spent two hours protecting); CHILL the shin before slicing or it shreds; the daikon is doing a job, not garnishing — it sweetens the broth and takes the metallic edge off long-cooked beef; bicarbonate raises the dough's pH so gluten relaxes, and a tearing dough wants more rest, never more force; noodles 60–90 s in unsalted water, never finished in the broth. Moat: the shop standard is a **colour chart, not a recipe** — one clear, two white, three red, four green, five yellow; a Hui (Chinese Muslim) dish from Gansu formalised c.1915, and beef-not-pork is precisely **why it travelled** — it could be eaten in every province, which no pork dish could claim. Noodle widths have names and you are asked which before anything else. ⚠️ The marrow version deliberately roasts the bones SEPARATE rather than boiling them in — boiled marrow fat emulsifies and clouds the pot.

35. ✅ **Chopped Chilli Fish Head** (Duo Jiao Yu Tou) — 3 versions: Home-Salted Chilli & Small Head budget R26 · Classic Hunan R36 · Double Chilli Red & Green R54. Laws: SPLIT the head flat through the crown (a domed head cooks the collar and the cheek at two different speeds); **NO SALT anywhere** — duo jiao is a salted ferment and carries all of it, and adding salt cannot be walked back; sugar rounds the ferment's sourness, it does not sweeten; ginger raft under the fish so steam circulates and the skin doesn't weld to the plate; HARD rolling boil, 12 min per 800g head, test behind the collar; **KEEP the liquid** — unlike Qing Zheng Yu you never pour it off, the noodles go in for the last 3 min to drink it. Moat: Hunan *xiang la* (fragrant heat from salt + fermentation) vs Sichuan *ma la* (numbing) — a Hunanese kitchen keeps jars, a Sichuanese one keeps a tin; the fleeing-scholar origin told as legend but plausible in the one detail that matters (a salted chilli jar is what a poor household *did* have). 🧂 Budget fork is a genuine 14-day lacto-ferment — Tina's own ground, and the green-vs-red chilli split in v3 is unripe-sourer-hotter vs ripe-rounder.


36. ✅ **Crossing-the-Bridge Noodles** (Guo Qiao Mi Xian) — 3 versions: Chicken Only budget R30 · Classic Yunnan Spread R46 · Prawn & Fish R70. Laws: the cook's ONLY job is arriving hot enough — scald the bowls and pour them out, broth at a genuine rolling boil, and float the rendered chicken fat as a CAP (oil does not evaporate, so it shuts off evaporative cooling and holds the bowl above 90°C); slice the raw meat thin enough to SEE LIGHT THROUGH, firming it 30 min in the freezer first — thick slices simply will not cook and that is the dish's one real failure; add in ORDER — raw meat spread apart, then eggs, then veg, **noodles LAST** (noodles first cools the broth and you get soup with soft noodles instead). Moat: the scholar on the lake island and the wife whose fat-capped broth arrived scalding — told as legend, but the physics is exactly right, which is the point; Yunnan is rice country not wheat country, hence mi xian; and the bowl is a **genuine hazard** — the fat cap suppresses steam, so it gives none of the visual warnings people rely on and restaurants warn customers as routine.


37. ✅ **Di San Xian** (Three Treasures of the Earth) — **VEGAN · course:side** — 3 versions: Oven-Roasted budget R12 · Classic Dongbei R18 · With Fried Tofu & Extra Garlic R24. Laws: three vegetables fried SEPARATELY to their own doneness, then ≤60 s together — a minute of stewing at the end undoes the whole point; soak the potato till the water runs clear (surface starch is what glues wedges together) and dry it completely; **aubergine is air pockets that collapse under heat** — it drinks oil for 30 s and then gives it back, so HIGH heat fast is what makes it rich and LOW heat is what makes it greasy, not the quantity of oil; drain on a RACK not paper; TEAR the peppers (ragged edges hold sauce); sauce and slurry both mixed before the wok goes on. Moat: the name sounds ancient and the dish can't be — potato and pepper are New World crops that reached China after the 16th c, aubergine is the genuinely old one; what actually put the three together is **cellar storage** — they are the three things a Dongbei household could keep through a long winter. 📌 Fills two gaps at once: vegan (was 3 of 36) and `side` (was 1 of 36).


38. ✅ **Big Plate Chicken** (Da Pan Ji, Xinjiang) — 3 versions: Chicken Pieces & Dried Noodles budget R32 · Classic R44 · Free-Range Bird & Cumin Lamb Ribs R62. Laws: chicken ON THE BONE, chopped through it — marrow and cut-bone collagen ARE the sauce, and this sauce has a second job to do; rock sugar to AMBER first (the mahogany comes from caramel, not soy — amber to burnt is ~15 seconds); fry the doubanjiang a full minute till the oil runs red; boil the beer hard for a minute BEFORE the water (drives off harsh alcohol, keeps the malt); **NO CORNFLOUR — the potatoes are the thickener**, so use floury not waxy and do not stir hard once they are in; peppers in for the last 3 min only; oil the resting dough ropes, never flour (flour dries, and a dry rope will not stretch); noodles go UNDER the chicken in the platter, never mixed. Moat: barely 40 years old — 1980s highway truck stops, several towns still arguing over it and one county with a registered standard; a genuine **hybrid** (Han/Hui bean paste + Sichuan pepper meeting Uyghur belt noodles and big shared plates); the noodles are a *convention, not a course* — they come out when the meat is gone, often off-bill, because leaving the sauce is the real waste.


### BATCH 8 (29 Jul) — the table
39. ✅ **🔧 STAPLE — Suan Cai** (Chinese sour cabbage) — **VEGAN** — 3 versions: Quick Shredded Jar budget R6 · Classic Whole-Head R9 · Sichuan Sour Mustard Greens R14. Laws: **salt at 2–2.5% of the WEIGHED vegetable** — the one number in the recipe, too little and spoilage outruns the lactic bacteria, too much and both are inhibited; heads kept WHOLE and halved through the root (the stem is what survives a month underwater; shredded collapses); glass or ceramic, **never metal** — acid plus salt corrodes it; cooled BOILED water so the leaves' own bacteria run uncontested; **everything under the brine, always** — one floating leaf is how a crock goes wrong; cover loosely, CO₂ needs out; temperature is the throttle (3–4 wks at 18–22°C, 6–8 cold and better); cloudy brine and bubbles are correct, slimy/pink/fuzzy is binned untasted, and a white film is kahm yeast not mould. Moat: the Great-Wall-to-sauerkraut travel story is told more confidently than the evidence supports — **stated as unproven**, because cabbage + salt + a cold cellar is not a hard invention and several places got there independently; what IS certain is that it is the same lactic process as sauerkraut and kimchi, and the preservation is a *by-product of the souring*, not something added. ⚖️ Two different jars share the name — northeastern cabbage vs southwestern mustard greens; v3 is the sour-fish-soup one, and it is wilted a day in the air first then re-weighed for salt.


40. ✅ **Chongqing Hotpot** (Ma La Huo Guo) — 3 versions: Vegetable & Tofu Pot budget R32 · Classic Chongqing R62 · The Full Offal Spread R88. Laws: the base is **FRIED, not boiled** — 30–40 min on the lowest heat until the OIL SEPARATES and floats deep red, and it is not finished before that however good it smells; soak and blitz the dried chillies to a ciba paste (whole dry chillies leave heat sitting on top instead of running through); **beef tallow is not optional** — capsaicin and the Sichuan-pepper tingle are *fat-soluble and not water-soluble*, so fat is the only thing that carries them out of the spices and onto what you dip; Sichuan peppercorns in for the LAST 10 min only (they go bitter over 30); the sesame-oil-and-garlic dipping bowl does two real jobs — room-temp oil drops the temperature of a scalding piece instantly, and it coats the mouth, which is why people can eat for two hours; timing is the whole meal (dense things 5–10 min, greens 1–2, paper-thin meat **10–15 seconds**); never crowd the pot (a crowded pot stops boiling and becomes a stew); top up with STOCK, never water. Moat: Chongqing wharf food, early 20th c — dockworkers boiling the offal butchers discarded, because hard boiling and fierce chilli made cheap offal safe *and* worth eating; the **nine-grid pot is a cooking rack disguised as a seating arrangement** — the centre square sits over the hottest part and boils hardest for 10-second items, the corners run gentler for tripe and long simmers; goose intestine is counted not timed, seven up and eight down.


41. ✅ **Bang Bang Chicken** (Bang Bang Ji Si) — 3 versions: Chicken Thighs & Peanut Butter budget R22 · Classic R32 · Whole Poached Bird & Ma La Oil R44. Laws: **never boil the chicken** — bring to a bare simmer, kill the heat, lid on 25 min, and let residual heat do it (a boil seizes the proteins and squeezes the water out); ICE BATH straight after, which stops carryover *and* firms the flesh so it shreds into threads instead of crumbling; **pound then tear, never slice** — the mallet separates the fibres and leaves a ragged surface, and ragged surfaces hold many times more sauce than knife-cut ones (same principle applied to smashing the cucumber); sesame paste is thinned with poaching liquid a SPLASH at a time and **it will seize and look ruined first** — that is it taking up water, and dumping the lot in gives lumps that never come together (sibling law to Dan Dan); scoop the chilli-oil SEDIMENT, not the clear oil; salt and drain the cucumber or it waters the plate; dress at the very last moment. Moat: *bang* = the club street vendors pounded the bird with, and the rhythmic banging was literally the **advertisement** — the noise became the name; the dish belongs to *liang cai*, the cold plates that open a Sichuan meal, and that category is **why the sauce is built on sesame paste and chilli oil** — fat-based and fermented seasonings still carry at fridge temperature where a soy-and-stock sauce goes flat. 📌 First cold plate in the file.


42. ✅ **Smashed Cucumber** (Pai Huang Gua) — **VEGAN · course:side** — 3 versions: Garlic & Vinegar Only budget R5 · Classic R8 · Cucumber & Glass Noodle Salad R14. Laws: a cucumber is ~96% water and the entire dish is about removing some of it — **salt 15–20 min and throw the released liquid away**, don't rinse (it is now seasoned, which is why no salt appears again); scrape out the seed core of a mature cucumber (mature seeds carry the bitterness *and* the loose water — the reason a big cucumber makes a worse salad than a small one); **CRUSH the garlic, not chop, and give it 5 min in the VINEGAR before any oil** — crushing starts the reaction that makes the sharp compounds, acid holds them bright, and fat coats and blunts them almost instantly, so vinegar-first tastes of garlic and oil-first tastes of oil; dress at the table, 20 min is the whole shelf life. Moat: cucumbers are not native — they came from the west and were *hu gua*, the foreign melon, until a 4th-c Later Zhao ruler of non-Han descent reportedly banned *hu* as a slur and they were renamed *huang gua*, the **yellow** melon, which is a strange word for a green vegetable precisely because the name preserves the correction rather than the cucumber. ⚠️ Deliberately does NOT reuse the smash-for-ragged-surfaces law from Bang Bang (adjacent record) — this card's laws are water and acid-before-fat.


43. ✅ **Tang Yuan** (black sesame rice balls) — **VEGETARIAN · course:dessert** — 3 versions: Peanut & Sugar budget R6 · Classic Black Sesame R11 · In Sweet Fermented Rice R18. Laws: **cook a walnut of the dough first and knead it back in** — glutinous rice flour has no gluten and nothing binding it, so a plain dough cracks the instant you stretch it; that one gelatinised lump is the difference between neat spheres and leaking wreckage, and it is the step nearly every failed attempt skipped; glutinous rice flour and rice flour are **not interchangeable in either direction**; the fat must be SOLID cold and LIQUID hot — lard or butter, never oil, because oil-filled paste cannot be wrapped at all (the traditional ingredient chosen for a mechanical reason, not a sentimental one); black sesame hides its colour change so your NOSE is the only instrument, ~30 s between toasted and burnt; chill the filling firm before wrapping; dough under a damp cloth always; push the edges up, don't stretch the base (a thin patch bursts); cook in PLAIN water not the broth (they shed starch and cloud it); gentle simmer never a rolling boil, and knock the heat back with cold water twice — same law as the wontons; the centre is genuinely hot enough to burn. Moat: the **same food is manufactured two different ways** — southern tang yuan are *wrapped* like dumplings, northern yuanxiao are *rolled*, tumbled damp in a flat basket of dry flour over and over so the shell builds in layers like a snowball, which gives a rougher chewier skin that clouds the water; Lantern Festival, 15th day of the first lunar month. ⚠️ The reunion homophone is kept as a **subordinate clause, not the moat** — homophone angles are already spent on Qing Zheng Yu (fish/surplus) and Lo Bak Go (cake/rising).



### BATCH 9 — THE CLOSING SEVEN (in progress, 29 Jul)
44. ✅ **Suan Cai Bai Rou** (Sour Cabbage & White-Boiled Pork) — 3 versions: Pork Shoulder & Jar Suan Cai budget R24 · Classic Dongbei Pot R34 · The Full Pot w/ Blood Sausage & Tofu Puffs R46. **The record that pays off the batch-8 staple.** Laws: poach the belly in ONE PIECE from COLD and **PRESS IT UNDER A PLATE** — belly floats, and a half-submerged piece cooks at two rates with a grey exposed face you cannot correct; **TASTE the suan cai and let the jar decide the recipe** — rinse a sharp young jar, leave a round old one alone, because rinsing is *calibration, not cleaning*, and no recipe can make that call for you; **dry-fry the squeezed suan cai in skimmed pork fat 4–5 min BEFORE any liquid** (raw acidity is volatile and boils off, what is left concentrates — tipped straight into broth the pot tastes like a jar); **suan cai simmers 45 min, the one vegetable in the file that cannot overcook** — fermentation already broke it down and what it needs is time to trade its acid into the fat; slice **ACROSS the layers** so every slice carries skin-fat-meat (a slice cut along them is all fat or all lean and reads as a mistake); no boiling once the sliced pork is back in; glass noodles LAST, 5 min. Moat: ***bai* is a technical term, not a colour** — a whole family of dishes (*bai qie ji*, *bai zhuo* prawns) named for what is deliberately NOT added; it inverts the kitchen, because the cook's skill is restraint with nothing to hide behind and the seasoning is **handed to the diner's bowl** — a pot that arrives tasting perfect has in a sense been over-cooked by its cook. ⚠️ **Deliberately does NOT lead on chill-before-slicing** (spent on Hui Guo Rou AND Lanzhou) — it survives as one subordinate clause. Cellar-storage moat avoided too (spent on Di San Xian), as was the ancestral-offering angle (spent on Hui Guo Rou). 💰 New price keys → MF152.

45. ✅ **Beggar's Chicken** (Jiao Hua Ji) — 3 versions: Chicken Thighs in Foil budget R30 · Classic Clay-Baked Whole Bird R48 · Stuffed w/ Sticky Rice & Cured Sausage R62. Laws: **the shell is EQUIPMENT, not a flavour** — nothing crosses it in either direction, it turns the oven into a sealed vessel so the bird bastes in its own steam, and it is broken and binned; **honest framing up front — the skin will NOT be crisp** (a steam-roast in a sealed box cannot crisp, same honesty as the Roast Duck home-oven framing); DRY bird, DRY filling — free liquid flashes to steam, finds the weakest seam and blows the shell open an hour in; **lotus leaves are structural, not decorative** — skin touching a salt-dough shell comes out inedibly salty and grainy, and foil is the modern insurance layer; soak the dried leaves or they crack along every fold; **inspect for thin spots BEFORE it goes in — a crack is the whole cooking method leaking out and the shell hides it until the end**; ⚠️ **you cannot check it** — there is no test that does not end the method, so you commit at the seal; rest 15 min still sealed (the shell holds enormous carry-over heat); crack at the table. Moat: **a novel manufactured the appetite** — Jin Yong's *Legend of the Condor Heroes* (serialised 1957) has Huang Rong cook it for the stomach-ruled Hong Qigong, described in loving technical detail, and a Changshu regional speciality became a nationwide restaurant fixture; one of the clearest cases anywhere of wuxia fiction doing for a dish what a film does for a location. ⚠️ **Deliberately does NOT retell the beggar-buries-a-stolen-chicken legend** — the "told as legend, but the one plausible detail" angle is spent TWICE (Duo Jiao Yu Tou's fleeing scholar, Crossing-the-Bridge's lake island). 💰 New price keys → MF152.

46. ✅ **Tea-Smoked Duck** (Zhang Cha Ya) — 3 versions: Duck Legs Stovetop-Smoked budget R42 · Classic Zhang Cha Ya R78 · Tea-Smoked Chicken R44. Laws: **FOUR cooks in a fixed order, each doing one job none of the others can** — cure · smoke · steam · fry, and reordering gives a worse bird every time; ⚠️ **THE SMOKE DOES NOT COOK** — 25 min of perfume applied to a RAW bird that is then cooked entirely in a steamer, and a cook who smokes it towards doneness gets a bitter sooty half-raw duck; bone dry before the smoke (particles LAND on dry surfaces and DISSOLVE into wet ones — the difference between aroma and ashtray); **25 min and not a minute more chasing colour** — past ~30 the harsh compounds arrive and no later cooking removes them, and the colour is the FRY's job not the smoke's; rice gives a steady smoulder instead of a flare, sugar caramelises and carries colour; **steam AFTER smoking, never roast** — steaming drives the smoke down into the fat layer, so it tastes smoky all the way through rather than only on the surface, and it renders enormous fat without drying the skin; keep the rendered smoked duck fat, it is one of the best things in the recipe; **the final fry is 45–60 SECONDS and makes the skin ONLY** — the duck is already cooked, and this is where thirteen hours of work gets ruined by "just another minute". Moat: **smoke here is perfume, not preservation** — the inversion of nearly everywhere else in the world, and the timing proves it (25 min smoke vs 1 hr steam preserves nothing); *zhang* = camphor, a **street tree** in Chengdu, and the genus is the surprise — *Cinnamomum camphora*, a close relative of cinnamon *Cinnamomum verum*; camphor is unobtainable outside the region so nearly every version you meet is a tea-smoked duck wearing an older name. ⚠️ Differentiated hard from `china-roast-duck` (technique, not just protein). Avoided the "mild cuisine is the prestigious one" angle — spent on Lion's Head. 🔴 **merge.js caught a stray `swapIng2` delta op mid-authoring** — first live catch of the generalised validator on new work, not on legacy. 💰 New price keys → MF152.

47. ✅ **Jianbing** (Jianbing Guozi) — **VEGETARIAN** — 3 versions: Wheat Flour & Crackers budget R14 · Classic Tianjin Guozi R22 · Loaded w/ Crispy Chicken & Double Egg R34. Laws: ⚠️ **THE DISH STARTS DYING THE MOMENT IT IS FINISHED** — the crisp sheet has ~2 good minutes, and every other law below exists to buy seconds; lay out every sauce, herb and crisp BEFORE the pan is hot (there is no point in the sequence where you can go and find the coriander); **mung bean flour is structural, not an affectation** — no gluten, so the crepe stays flexible and folds without cracking, where all-wheat tightens into a pancake; spread in ONE continuous spiral and NEVER go back over setting batter (a tear cannot be repaired because everything after is built on top of it); **crack the eggs straight onto the crepe, never pre-beaten** — cracked-and-spread egg BONDS into the surface as it sets and the two become one sheet, pre-beaten egg sits as a separate layer that slides out at the fold; herbs onto WET egg only, nothing sticks after it sets; flip ONCE; **sauces go on the DRY side** — sauce on the egg side traps steam and softens the crisp before it reaches the plate. Moat: **it cannot be plated, held or delivered** — that is why it never became a restaurant dish and never travelled frozen the way dumplings and buns did; the *bao cui* crisp sheet is a fried cracker made more or less exclusively to go inside a jianbing, which is a rare thing for a product to exist for; Tianjin takes the what-belongs-inside question seriously enough that a trade association publishes a standard. ⚠️ Avoided the Zhuge-Liang-cooking-on-shields legend — "told as legend, one plausible detail" is spent TWICE. 📌 vegetarian count 9 → 10 of 47. 🔴 **merge.js caught a stray `swapIng2` op AGAIN** — the identical typo I had just made in Tea-Smoked Duck, and careful re-reading missed it both times. The clearest small argument in the lane for mechanical rungs over sharper eyes. 💰 New price keys → MF152.

48. ✅ **Wuxi Sweet & Sour Ribs** (Wuxi Pai Gu) — 3 versions: Rib Tips & Trimmings budget R30 · Classic Wuxi Pai Gu R42 · The Deep Red w/ Red Yeast Rice R50. Laws: **TAKE THE RIBS OUT BEFORE THE FINAL REDUCTION and put them back after** — a rib that has already had 50 min disintegrates over 15 min of hard boiling, the meat leaves the bone in the pot, and you get shreds in syrup instead of ribs with a lacquer (the whole dish is that contrast); **TASTE THE LIQUID BEFORE REDUCING and aim UNDER on both sweet and salt** — reduction concentrates both equally and there is no way to un-reduce a sauce, which is where nearly every failed version failed; **swirl, never stir, a sugar-heavy pot** — a spoon dragged along the bottom lifts whatever has caught and puts the burnt note through the whole dish; heavy-bottomed pot, not a thin one; **vinegar goes in OFF THE HEAT at the end** — its aroma is volatile and an hour of simmering leaves nothing but vague sourness, and it is the vinegar that makes this read sweet-savoury rather than dessert; blanch from cold, rinse the ribs AND wash the pot (set scum returns into a sauce you are about to concentrate fourfold). Moat: **Jiangnan sweetness is a dialect, not a mistake** — the sugar-to-soy ratio here would be judged a fault almost anywhere else in China, but around Wuxi/Suzhou/Shanghai sweetness is calibrated as seriously as a Sichuan cook calibrates ma la, and cooks there call a dish *undersweet* the way others call one under-salted; underneath it sits a practical fact — a heavy sugar glaze is a **preservative**, which is why these keep for days, sell cold off shop counters and are more often bought than cooked. ⚠️ **Avoided caramel-colour law** (spent on Hong Shao Rou AND Da Pan Ji) and **avoided transport-corridor fame** — the railway-station-vendor angle would have repeated Da Pan Ji's highway-truck-stop moat exactly. v3 carries the red yeast rice so the base stays sourceable. 💰 New price keys → MF152.

49. ✅ **Luo Han Zhai** (Buddha's Delight) — **VEGAN** — 3 versions: Everyday Six budget R18 · Classic R32 · The Full Eighteen R48. Laws: **THE SOAKING WATER IS THE RECIPE** — no meat stock exists or is coming, so the strained shiitake and wood-ear liquid IS the stock, and a dried shiitake gives up far more savoury character to its soaking water than the mushroom ever gives a pan; **pour off the last centimetre — grit settles**; bean curd sticks want 2–3 hr in COOL water and cannot be rushed with hot (hot softens the outside while the core stays hard, and they break up in the pot); **fry the fermented bean curd a full minute in oil before any liquid** — a ferment tipped straight into liquid stays sharp and flat; knot the lily buds so they don't unravel; staged by density, gentle simmer throughout (bean curd sticks that boil hard shred and there is no way back). Moat: **it is a stricter brief than "no meat"** — monastic Chinese cooking also excludes the five pungent roots (garlic, onion, leek, chives, asafoetida) as agitating to the mind, so an entire cuisine had to be built without the aromatic base nearly all Chinese cooking starts from; remove meat, stock, garlic AND onion and you have closed almost every conventional route to savoury depth at once, and what replaced them is exactly what this dish is made of — dried mushrooms, fermented soya, dried fungus, all concentrating glutamates through drying and fermentation rather than through animals or alliums. **Not a compromise by subtraction: a solution to a hard problem.** ⚠️ Avoided Di San Xian's fry-each-vegetable-separately law. 💰 New price keys → MF152.

50. ✅ **Scallion Oil Noodles** (Cong You Ban Mian) — 3 versions: No Shrimp / Store the Oil budget R16 · Classic R24 · With Soft Egg & Chilli Oil R34. **CHINA CLOSES HERE.** Laws: **the onions go into COLD oil** so onions and fat climb together and the onions give up moisture slowly instead of searing wet; **whites first for 20 min, greens for another 15–20** — greens are thinner and burn while the whites are still going, and burnt is bitter and unfixable; **40 minutes, until the onions are dark, shrivelled and BRITTLE — not golden, not soft**; ⚠️ **the trap is that at 20 minutes the kitchen already smells superb** and a bowl made then is fine and forgettable — the last 15 minutes is where the famous flavour actually arrives; soy + sugar bubbled INTO the hot oil, never poured raw over noodles (raw soy slides off and pools); **DO NOT RINSE the noodles** — surface starch is what the oil grips, rinsed strands are slippery and the sauce ends up in the bottom of the bowl; keep the fried onions, they go back on top. Moat: **the only famous dish where nothing separates a good cook from a bad one but willingness to wait** — no knife skill, no wok control, no timing window, no equipment, no hard-to-find ingredient; almost every other dish rewards a skill you must acquire, this one rewards only the decision to stand there. Also a rare Chinese noodle dish with neither broth nor stir-fry (*ban mian* = simply mixed), and the dried shrimp are Shanghai's fingerprint — coastal Ningbo/Jiangnan influence showing up as small salty dried seafood used as seasoning rather than protein.

### ✅ PUSHED + VERIFIED LIVE (29 Jul 2026)
Batches 7+8 pushed with `index.html` and `worldkitchen.js` in the **same commit** (recipes and wiring are all-or-nothing).
Tina confirmed on tinza.netlify.app: World Kitchen → Asia → Eastern Asia → **China, 43 dishes**. Wiring proven end to end —
geo map, pool concat and script tag all holding. Tab counts 9 + 29 + 3 + 2 = 43, nothing lost.
`ASIA_PLAN.mermaid` filed in `reference/` following the **FABLE_PLAN.mermaid precedent** — lane plans live with their lane,
only app-wide mermaids (`TINZA_NOW`, `TINZA_PLAN_26JUL`) sit at root. `merge.js` pushed to `sections/` for now (see job 2).

### 🩸 TWO OPEN JOBS FOR THE LANE

**1. STAPLES ARE SHOWING IN THE MAINS TAB (found live, 29 Jul).**
The Mains tab reads **29** = 25 real mains + **4 staples** (Homemade Tofu · Chilli Oil · Master Stock · Suan Cai).
`course:"staple"` has no tab to land in, so it falls through to the default and a cook browsing tonight's dinner is
offered a jar of chilli oil. **The code is not wrong so much as never told** — ruling A5 says staples are real cards
reached via `crossLinks`, but it never said they should be absent from the course tabs, so this is a gap in the ruling
rather than a breach of it.
Two honest fixes:
- **(preferred)** Give staples their own tab — "Basics" — which is more work but matches what they are, and it will
  only grow: Japan brings dashi, Thailand curry paste, Indonesia sambal. A cook who wants to make chilli oil
  *deliberately* currently has no route to it except opening some other dish that happens to link to it.
- Filter `course:"staple"` out of the tabs entirely, closer to A5's literal wording, but leaves staples undiscoverable.
⚠️ Whichever is chosen, **it needs a ruling written first** (Law 52) — and it is a `worldkitchen.js` tab-render change,
so it must NOT be done in the middle of an authoring batch.

**2. ~~GENERALISE `merge.js` BEFORE JAPAN OPENS.~~ ✅ DONE 29 Jul 2026 — see MERGE VALIDATOR below.**
Now `node merge.js <country> <batchfile.js>`. Country + cuisine + varName + id-prefix come from a
`COUNTRIES` map at the top; adding a country is one line, not a sixth copy of the file (Law 50).
Paths resolve against the script folder, so it can sit at root with `tinza-census.js` / `tinza-doctor.js`.
**31 assertions proven born-RED** in `merge-selftest.js`, control proven GREEN.
Two real bugs fell out of writing the proof — see the LEFTOVERS SHAPE section.

**~~2b.~~ ORIGINAL WORDING, KEPT FOR THE RECORD:**
It is hardcoded to China in four places: the `wk_china.js` read, the `WK_CHINA` variable, and two assertions demanding
`cuisine === 'east-asia'` and `country === 'China'`. It also resolves `wk_china.js` by **bare filename**, so it only runs
from the folder that file is in — which is why it currently lives in `sections/` rather than at root with
`tinza-census.js` / `tinza-doctor.js`.
Target: `node merge.js japan batch1.js`, proper path resolution, country+cuisine taken from the argument, filed at root.
⚠️ **Not a casual tidy-up.** `merge.js` is the thing that catches everything else, and a bug in it does not announce
itself — it just quietly stops asserting something, the same shape as the ungated `tierBar`. So the rewrite gets a
**born-RED proof per assertion** (re-introduce a bad record deliberately, confirm it still goes red), exactly like
census check 24. **Do it as the first job of the batch 9 chat, with batch 9 itself as the live test.**
The three routes NOT to take: rewriting it later under pressure, copying it five times (Law 50 — five near-identical
files drifting apart, invisibly), or loosening the assertions to fit a second country (a validator relaxed to fit a
new case catches less than it did).


### ⚖️ CAUGHT 29 JUL — A JUDGEMENT ERROR WEARING A LEGAL SHAPE
`china-cong-you-ban-mian` was authored `diet:["vegan"]` with **10g dried shrimp in the base ingredient line**.
`"vegan"` is valid v1 vocabulary, so **every structural assertion passed it.** This is the exact class of fault
`merge.js` has always said it cannot see — and here it was, in the last record of the lane.
Fixed to `omnivore`. A sweep of all 50 for animal words against vegetarian/vegan tags found **no other instance.**

**New WARN rung:** diet vs ingredients keyword cross-check. A **warn, not a fail**, because it is keyword matching
and cannot be authoritative — *oyster mushrooms* contains "oyster", a vegetarian record legitimately contains egg,
and a version delta can remove the offending item. It flags for human eyes and does not block; a hard fail here
would only train the author to work around it. Born-RED proven, **plus a false-friend control** (oyster mushrooms
must NOT trigger). **34 assertions.**

⛔ **OPEN QUESTION FOR TINA — per-version diet.** The budget fork of Scallion Oil Noodles removes the shrimp and is
genuinely vegan, but `diet` lives on the **record**, not the version, so the record reads omnivore and a vegan user
filtering the app will never see it. This will recur across the whole lane — many budget forks drop the meat.
Options: leave it (the filter under-reports), derive record diet as the *union* of its versions, or move `diet`
onto versions. **Needs a ruling before Japan** (§21.2 MF123 territory).

### 🇨🇳 CHINA FINAL CENSUS (29 Jul 2026)
**50 records · 150 versions · 150 crossLinks · 0 dead · `servings` all 1 · costPP range R5–R96**
course: main 32 · starter 9 · staple 4 · side 3 · dessert 2 · vegetarian-or-vegan **11** · breakfast **5**
`node --check` clean · `merge-selftest.js` 34 passed / 0 failed.

⛔ **STILL NOT DONE: staples in the Mains tab.** 4 staples (Tofu · Chilli Oil · Master Stock · Suan Cai) still fall
into Mains because `course:"staple"` has no tab. Ruling required before the fix (Law 52), and it is a
`worldkitchen.js` render change — **not** to be done inside an authoring batch. Japan brings dashi, Thailand curry
paste, Indonesia sambal, so the problem grows with every country.

### 🩸 FOUND 29 JUL — `leftovers` IS TWO DIFFERENT SHAPES IN THE LIVE FILE
Writing the born-RED proof surfaced it: **`leftovers` is a STRING in 5 records and an ARRAY in 38.**
The five are `hong-shao-rou · mapo-tofu · gong-bao-ji-ding · char-siu · dan-dan-mian` — batches 1 and 2,
authored **before `merge.js` existed**. Every record since has been an array.

The old validator *did* assert `Array.isArray(r.leftovers)` — but only on the **incoming** batch, so the five
that predate it were never once tested. **Identical shape to the cong-you-bing hole, in a different field.**
That is now twice the same hole has produced a real defect, which is the argument for the existing-record
re-check being the default posture, not an extra.

⚠️ **NOT FIXED, DELIBERATELY.** Two reasons: `core.js` was not in the container, so nothing here can say which
shape actually *renders* — and that needs Tina's eyes on live either way (Law 2). Rewriting five banked
records on a guess is how you turn a display inconsistency into five broken cards.

**Rung applied — the two-rung pattern, same as budget-leads:**
- **HARD (incoming):** a new record with a non-array `leftovers`/`type`/`diet`/`occasion` blocks the merge.
- **WARN (existing):** the five legacy records print on **every single merge** and block nothing, so the lane
  keeps moving and the debt stays visible. Off-vocabulary diet tokens on existing records warn the same way.

**⛔ TINA'S CALL, NEEDS A LIVE LOOK:** open one of the five (e.g. Hong Shao Rou) and one of the 38
(e.g. Tang Yuan) on tinza.netlify.app and compare how the leftovers block renders. If array is right — and
38-vs-5 plus the authoring order says it is — the five get converted, and it wants a **ruling filed in
`TINZA_RULINGS.md`** (Law 52) fixing the field's shape once, before Japan repeats it.

### ▶️ NEXT — CHINA BATCH 9, THE CLOSING SEVEN (43 → 50)
Suan Cai Bai Rou (pork & pickled cabbage — **uses the new staple**) · Beggar's Chicken · Tea-Smoked Duck ·
~~**Jianbing** (fills the breakfast gap — only the congee touches `occasion:breakfast`)~~ ⚠️ **that gap claim was WRONG and is struck** — measured 29 Jul, FOUR records already carry `occasion:breakfast` (cong-you-bing · sheng-jian-bao · pi-dan congee · lo-bak-go). The note predated batches 7–8. Jianbing earns its slot on its own merits · Wuxi Sweet & Sour Ribs ·
Luo Han Zhai (**vegan**) · Scallion Oil Noodles.
Order of work in that chat: generalise `merge.js` first → author batch 9 through it → China closes → then Japan
(needs `wk_japan.js` + 2 wiring lines; `WK_COUNTRY_GEO` is already done for all four remaining countries).

### 🔢 HOUSEKEEPING — MF NUMBER COLLISIONS IN `reference/` (spotted 29 Jul, low priority)
`MF139` is both `ginjinha_price.md` and `liquor_price_keys.md`. `MF142` is both `CODE_PROMPT.md` and
`VESSEL_EQUIPMENT_SLOT.md`. Two different briefs under one number bites the day someone says "check MF139".
The `MF144 ×4` set looks deliberate (phases of one job) and is fine. Worth a renumber pass **after the lane closes**.


### ⚖️ RUNG UPGRADE + A3 BREACH FOUND (29 Jul, after batch 6)
Auditing prices turned into a **full-file** validation pass — and `merge.js` had only ever validated the
*incoming* batch's version rules. Existing records were re-checked for crossLinks and nothing else, so a
breach authored in batch 1 could never be caught by any later merge.

🔴 **CAUGHT: `china-cong-you-bing`** — Classic Coiled R14 led and the budget fork (Folded Shortcut R12) sat in
slot 2. Straight A3 breach, sitting there through four batches. **Fixed** (positional swap only; deltas and
`default:true` untouched, `Classic Coiled` keeps default).

The fix took **two** rungs, because one test could not do it honestly:
- **HARD (mechanical):** a version named *budget* must be in slot 1. This is what caught cong-you-bing. Blocks the merge.
- **WARN (judgement):** v1 not being the cheapest now prints and does **not** block — `china-char-siu` (Chicken R30 < Budget R33)
  and `china-roast-duck` (Chicken R34 < Budget R42) are both correct, because a protein-swap fork is a different dish,
  not a cheaper route to the same one. A blocking test here would have forced three wrong "fixes".
- `merge.js` now also re-checks **every existing record** for version count, default count and budget position on each merge.

Both proven born-RED by re-swapping cong-you-bing and re-running. Honest limit unchanged: it catches structure, never judgement.

⚖️ **VOCAB/COST CATCH — two ingredients struck on price grounds** (detail in MF152):
flying-fish roe (R2 000–3 500/pack) removed from Siu Mai; dried flounder (R2 500/kg) no longer leads the
Wonton Noodle Soup line, dried shrimp does. The flounder string was **also** the budget fork's `removeIng` target —
changing one without the other would have left a dead delta, which is precisely what the DEAD-DELTA rung exists for.


### ~~QUEUE — CHINA (next batches, 5 per batch)~~ ⛔ STRUCK 29 Jul 2026 — STALE, DO NOT WORK FROM THIS
⚠️ **This block was pre-queued before batches 7 and 8 were authored, and those batches went a different way.**
It lists **Smashed Cucumber** and **Lanzhou Beef Noodle Soup** as still-to-do — both are BANKED (records 42 and 34),
and Tangyuan (43) and Chongqing Hotpot (40) too. Working from this list re-authors four existing records.
Struck rather than deleted, dated and visible, per §2.3.
**The live list is `▶️ NEXT — CHINA BATCH 9, THE CLOSING SEVEN` above — that one, and only that one.**

<details><summary>struck text (kept for the record)</summary>

~~**Batch 7:** Braised Aubergine w/ garlic · Chinese Broccoli in oyster sauce · Tiger Salad · Smashed Cucumber (pai huang gua) · Tea-Smoked Duck~~
~~**Batch 8:** Buddha's Delight · Sesame Balls (jian dui) · Tangyuan · Red Bean Buns · Scallion Oil Noodles~~
~~**Batch 9:** Chongqing Chicken (la zi ji) · Water-Boiled Fish (shui zhu yu) · Braised Lamb Hotpot · Sichuan Boiled Beef · Beggar's Chicken~~
~~**Batch 10:** Youtiao · Soy Milk & fried dough breakfast set · Guo Bao Rou (Northeastern sweet-sour pork) · Lanzhou Beef Noodle Soup · Mooncakes~~

Survivors worth keeping in mind as substitutes if any of the closing seven falls over: Braised Aubergine w/ garlic ·
Chinese Broccoli in oyster sauce · Tiger Salad · Sesame Balls (jian dui) · Water-Boiled Fish (shui zhu yu) ·
Guo Bao Rou · Youtiao. (Scallion Oil Noodles and Beggar's Chicken and Tea-Smoked Duck already appear in the closing seven.)
</details>

---



### ⚖️ NEW RUNG 29 JUL — `servings` MUST BE 1 (caught the author, not the code)
Authoring Beggar's Chicken I set `servings: 4`, reasoning that a whole 1.5kg bird feeds four. Wrong:
**all 44 records already banked use `servings: 1`, including `china-roast-duck`, which lists a whole 2kg duck.**
Ingredient amounts in this lane are per-serving and the app scales them, so a record claiming 4 would have
scaled wrong against every sibling in the file — and **nothing on screen would have said so.**
Caught only because I checked the convention instead of assuming it. `merge.js` now hard-asserts `servings === 1`,
proven born-RED. **32 assertions.** Worth noting what this rung really is: the first one added because the
*author* drifted rather than because a past record was wrong.

## 🔧 MERGE VALIDATOR (`merge.js` — GENERALISED 29 Jul, keep it with the lane)
Run as **`node merge.js <country> <batchfile.js>`** — e.g. `node merge.js japan batch1.js`.
Known countries: china · japan · indonesia · thailand · vietnam (one line each in `COUNTRIES`).
Bootstraps a country file that does not exist yet, writes the standard header, and prints the
**two wiring lines** still needed. Canonical 25-key schema lives in `reference/ASIA_SCHEMA_KEYS.json`,
**never in record 1 of the target** — a new country file has no record 1, and letting each file set its
own precedent is exactly how five near-identical files drift apart.
Proof harness: **`node merge-selftest.js` → 31 assertions born-RED, control GREEN.** Run it after ANY edit to merge.js.
Asserts: Refuses to write the file if ANY assertion fails. Asserts:
key-set identical to record 1 · no duplicate id · cuisine/country correct · type/diet/occasion/leftovers are arrays ·
**diet token in vocabulary** (omnivore/vegetarian/vegan/unknown — halaal & kosher are separate laws) ·
exactly 3 versions · exactly one `default:true` · budget fork LEADS · numeric `costPP` on every version · no `costPP` on the record ·
delta op names + shapes (`addIng{item}` · `addStep{text}` · `swap*{from,to}` · `removeIng{item}`) · no empty `to` ·
**DEAD-DELTA CHECK — every `swapIng`/`removeIng` `from`/`item` must actually exist in that record's `ingredients` string, and every `swapStep` `from` must exist verbatim in its `method`** ·
exactly 3 crossLinks, none self-pointing, every target resolving, and every EXISTING record's crossLinks re-checked on each merge.

Honest limit: it cannot tell you a moat is boring, a law is wrong, or a price is unrealistic. It catches structure, not judgement.

## 🇯🇵 JAPAN — 0 / 50 · not started
## 🇮🇩 INDONESIA — 0 / 50 · not started
## 🇹🇭 THAILAND — 0 / 50 · not started
## 🇻🇳 VIETNAM — 0 / 40 · not started

---

## ⚠️ OPEN — PRICE GATE
Prices remain **DEFERRED** (A7) — one batch after all five countries. `reference/MF152_ASIA_PRICE_KEYS.md`
was rebuilt 29 Jul from Tina's sourced prices plus a live check-not-add audit against `prices.js` at HEAD.

**Headline: Tina was right — a lot already exist.** 14 keys we would have duplicated are already in the DB
(`beef sirloin` R190 · `cake flour` R22 · `prawns` R350 · `jasmine rice` R63 · `cornflour` R68 · `peanuts` R128 ·
`oyster sauce` R260 · `sesame seeds` R244 · `crab meat` R660 · `pork bones` R45 · `pork fat` R60 · `chives` R650 ·
`sichuan peppercorns` R1300 · `puff pastry` R80). `crab meat` matched Tina's R165/250g to the rand.

**~14 genuinely missing**, headed by `chicken thighs` (unpriced, and used in nearly every budget fork in the lane)
and `daikon` (distinct from the existing `radish` R108 — different vegetable).

⚠️ **Collision risk, flagged loudly in MF152:** `fermented black beans` must NOT alias to the existing
`black beans` R50, which is the legume. Nothing mechanical would ever catch that.

✅ **RULED 29 Jul — WHEAT STARCH = SPECIALTY GROCER ITEM.** No retail price exists (bulk/per-tonne only), so the
Har Gow card now says so on the ingredient line and warns in `chefNotes` to buy it *before* planning the day.
Wording kept generic per the global-wording ruling — no shop or place names in prose. Cornflour/Maizena rejected as
a substitute: it sets opaque and the card claims a translucent skin. **The price itself is still open** — estimate
against `cornflour` R68 / `tapioca` R70, weigh a real packet, or leave it blank. Tina's call at the price batch.

✅ **RULED 29 Jul — FERMENTED BLACK BEANS (douchi) = R95–180 / 400g → ~R340/kg.** That is **~7× the existing
`black beans` R50 legume key**, and douchi appears in **six records** (mapo-tofu · hui-guo-rou · mala-xiang-guo,
plus version deltas on chilli-oil, qing-zheng-yu and gon-chow-ngau-ho). Add as its own key; never alias.

---

## 🇯🇵 JAPAN — 5 / 50 (opened 29 Jul 2026)

⛔ **NOT WIRED.** Two lines, and a file that is not wired is not in the app:
```
1. index.html          →  <script src="sections/wk_japan.js"></script>
2. worldkitchen.js:58  →  window.WK_JAPAN || [],   in the wkPool() concat
```
`WK_COUNTRY_GEO` (`"Japan":["Asia","Eastern Asia"]`) was already done during the China wiring.

### ⚖️ THREE RULINGS FILED BEFORE A WORD WAS AUTHORED — `TINZA_RULINGS.md` §26 · §27 · §28
- **§26 · DIET LIVES ON THE VERSION; THE RECORD'S DIET IS THE DERIVED UNION.** Japan carries per-version
  `diet` from record 1. China's 50 convert at **lane close**, not mid-lane; `merge.js` prints the debt as
  ONE warn with a count, never 50.
- **§27 · STAPLES GET A "BASICS" TAB, LAST, AND ARE NOT PLANNABLE.** ⚠️ Not built yet — it is a
  `worldkitchen.js` render change and does not happen inside an authoring batch. Japan has now added
  **dashi** to the pile, so the Mains tab is currently 4 mains + 1 jar.
- **§28 · `leftovers` IS AN ARRAY — AND HAS NO RENDERER, WHICH IS THE ACTUAL BUG.**

### 🔴 THE FINDING THAT CLOSED THE LEFTOVERS QUESTION
ASIA_PROGRESS asked Tina to open Hong Shao Rou (string) and Tang Yuan (array) on live and compare.
**That test could never have worked.** Grepped app-wide 29 Jul: **nothing reads `r.leftovers`.** World Kitchen
renders `wkLeftoverKeys(r)` (`core.js:4765`) — a keyword guess over the ingredient string resolving to one of
15 generic keys. Both shapes render identically, which is to say **not at all**, and the honest conclusion from
the live comparison would have been "no difference, leave it" — exactly wrong.
✅ **The 5 legacy strings were converted anyway** (`hong-shao-rou · mapo-tofu · gong-bao-ji-ding · char-siu ·
dan-dan-mian`) — safe because it is **zero-judgement**: the string is wrapped, not rewritten. **China is now
50/50 arrays, 140 lines**, `node --check` clean.
🩸 **STILL OPEN — the renderer.** A Code brief: authored `leftovers` WINS, `wkLeftoverKeys()` is the fallback
only when a record has none. ⚠️ **Do not delete the guesser** — it also feeds `LEFTOVER_CLASS` → `SAFETY_CLASS`
→ the Storage & safety box, which is a **food-safety** engine. Two jobs, one function, one of them broken.
📌 **THIRD TIME for this shape** (cong-you-bing · leftovers shape · now a field nothing reads).
**New rung, one command: when a lane introduces a field, grep for its READER once, at the start.**

### 🔧 MERGE.JS — **40 assertions**, all born-RED, control GREEN
- **NEW §26 rung, four born-RED proofs:** a version with no `diet[]` · an off-vocabulary version token ·
  record diet **under**-reporting (the cong-you-ban-mian shape) · record diet **over**-reporting. Plus a
  GREEN control proving the union is compared as a **SET, not a sequence** (a rung that failed on ordering
  would train the author to hand-sort for nothing).
- 🔴 **§26 IMMEDIATELY MADE AN OLD RUNG CRY WOLF, AND IT WAS CAUGHT ON THE FIRST BATCH.** The
  diet-vs-ingredients warn read `r.diet` — now a *union* — against the *base* ingredients, so all four
  correctly-authored Japan records tripped it at once ("tagged vegan but ingredients mention pork").
  **Fixed to judge the DEFAULT VERSION's diet**, because the base ingredients string *is* the default
  version's ingredients. ⚖️ **A ruling can break a rung that was correct the day before it.** Honest limit
  stated in the code: deltas are not resolved, so a mis-tag on a non-default version's *own added*
  ingredients is invisible to it.

### DONE — BATCH 1 (29 Jul)
1. ✅ **🔧 STAPLE — Dashi** (Ichiban Dashi) — 3 versions: Kombu & Shiitake **budget · VEGAN** R4 · Classic
   Ichiban R9 · Niboshi (Dried Sardine) R7. Laws: **kombu into COLD water and NEVER boils** — pull at 60–65°C,
   past ~80°C it gives alginates instead of glutamate and that is not reversible; **do NOT wipe the white bloom
   off** (mannitol and glutamate drying out — the recipes saying "wipe clean" say wash the point off);
   katsuobushi off the heat, **no stirring**, 60–90 s; **NEVER SQUEEZE the flakes** — same result as boiling,
   cloudy and bitter, and the commonest way a good dashi is ruined at the last step. Moat: **umami was
   discovered in this exact bowl** — Ikeda, Tokyo Imperial, 1908, chasing why his wife's dashi tasted of a
   fifth thing; isolated glutamate, named umami, patented MSG. Then **Kodama 1913** found inosinate in
   katsuobushi, and the two are **synergistic** — several times more savoury together than apart. A
   two-ingredient stock cooks had used for centuries turns out to be a built chemical amplifier, and the
   chemistry arrived last. Katsuobushi's mould-ripening noted as the hardest food in the world.
   📌 Niban dashi is the leftovers, properly — the second extraction is a real ingredient, not thrift.
2. ✅ **Shoyu Ramen** — 3 versions: Shiitake & Kombu **budget · VEGAN** R24 · Classic Tokyo R48 · The Full Bowl
   R62. Laws: **it is THREE things made separately — soup, tare, aroma oil — and THE TARE SEASONS THE BOWL,
   NOT THE SOUP.** ⚠️ If the finished broth tastes properly seasoned on its own you have made a *soup*, and the
   assembled bowl will be flat and salty. Unsalted noodle water (everything here was measured to the
   millilitre) and **shake the noodles BONE DRY** — carried water dilutes the tare. Ajitama 6½ min fridge→boil,
   ice bath, and **never marinate past ~12 hr** (rubbery, salty, no way back). Assembly is ~20 seconds.
   Moat: **Japan's national dish is Chinese and said so in its own name** — *shina soba* / *chuka soba* until
   the 1950s — and what made it national was **American wheat**: the 1945 rice failure, occupation surplus
   flour as food aid, a government promoting noodles because it had wheat and no rice. Sapporo miso, Hakata
   tonkotsu and the instant packet are all 1950s–70s. **The dish is younger than most people laying down its
   rules.** ⚠️ Deliberately did NOT lead on never-boil-the-bones (spent twice in China: Lanzhou + Wonton
   Noodle Soup) or on fat-caps-hold-heat (spent on Crossing-the-Bridge).
3. ✅ **Tonkatsu** — 3 versions: Chicken Katsu **budget** R28 · Classic Tonkatsu R42 · Katsu Curry R52. Laws:
   **SNIP THE MEMBRANE between fat and meat at 3–4 points** — it shrinks faster than muscle and curls the
   cutlet into a bowl so the middle lifts clear of the oil; the step most recipes omit and the one that
   explains most failures. Flour is a **dusting, tapped almost all off** (excess hydrates into a paste and the
   crust slides off in one sheet under the knife); press panko ONCE and never again. **Two temperatures because
   of THICKNESS, not tradition** — 160°C/6–7 min, rest 4 min standing on its edge, then 190°C/30–60 s for
   colour; no single temperature does both on a 2.5cm cutlet. Ice-water the shredded cabbage. Slice in one
   draw, never saw. Moat: a ~1,200-year prohibition on four-legged meat (edict of 675 AD), then the **Meiji
   Emperor publicly eating beef in 1872 as policy** — reported as news, and men broke into the Palace in
   protest and were shot. Rengatei, Ginza, **1899** made three changes to the French cutlet — pork not veal,
   deep-fried not pan-fried, **served pre-sliced with rice, chopsticks and raw cabbage** — and those three
   changes are the whole distance between a foreign dish and a Japanese one. The cabbage was a **wartime
   staffing shortcut** that turned out to be right and stayed. ⚠️ Double-fry framed as a *thickness* problem to
   keep it clear of Gu Lao Rou's crust-survives-sauce law.
4. ✅ **Okonomiyaki** — 3 versions: Cabbage & Egg **budget · VEGETARIAN** R16 · Classic Osaka Pork Belly R26 ·
   Hiroshima-Style Layered with Noodles R38. Laws: **it is NOT a pancake with cabbage in it — it is cabbage
   held together by batter**, roughly equal weights, and if it looks like batter you have already lost;
   **CUT the cabbage into 1cm squares**, never grate (grated bleeds water); **nagaimo is structural** — grated
   mountain yam goes stringy and aerates the batter, with the honest stand-in stated plainly as 2g baking
   powder and less texture; **fold the cabbage in AT THE LAST SECOND** and **10–12 cutting turns, never beat**;
   ⚠️ **DO NOT PRESS IT DOWN WITH THE SPATULA** — every instinct says to, and it undoes the nagaimo, the loose
   fold and the cut cabbage in one movement. Flip ONCE, and commit. Moat: **the teppan is the table and the
   customer often cooks** — which quietly explains the whole recipe, because everything in it is built to
   **survive an amateur**: nothing delicate, a forgiving medium heat, and a sauce strong enough to carry a bad
   flip. Okonomimura's floors of competing stalls; Hiroshima calls Osaka's the *mixed* style. Closes on the
   bonito flakes writhing — a few microns thick, moved by convection, deliberate theatre.
   ⚠️ **Did NOT reuse the American-wheat moat** — spent on Ramen in this same batch.
5. ✅ **Oyakodon** — 3 versions: Mushroom & Tofu **budget · VEGETARIAN** R18 · Classic R30 · **Katsudon** R48.
   Laws: ⚠️ **IT IS SERVED DELIBERATELY UNDERCOOKED** and finishes on the hot rice — a properly set oyakodon is
   an overcooked one; **ONE PORTION AT A TIME, never scaled** (geometry, not tradition — a shallow wide layer
   sets in seconds, a deep pool must be stirred and becomes scrambled egg in broth); onion sliced **WITH the
   grain** or it collapses to strings; **BEAT THE EGGS BADLY** — 5–6 strokes, visible ribbons of yolk and white,
   because they set at different speeds and that is the marbling; **TWO POURS** — two-thirds, lid, 45–60 s,
   then the last third, lid, count to 20, heat off. Moat: *oyako* = **parent and child**, printed on menus
   without comment; Tamahide, Nihonbashi, **1891**, formalising what customers were already doing with the
   dregs of a gamecock hotpot — and the donburi category's whole logic, that **the rice is the meal and the
   thing on top is the seasoning**, which is close to the inverse of a Western plate. Katsudon carries the
   exam-night homophone (*katsu* = to win) and the interrogation-room trope.

### 📊 JAPAN CENSUS AFTER BATCH 1
**5 records · 15 versions · 15 crossLinks · 0 dead · `servings` all 1 · costPP R4–R62**
course: staple 1 · main 4 · per-version `diet` on **15/15** · record diets: omnivore · vegetarian · vegan
`node --check` clean · `merge-selftest.js` **40 passed / 0 failed** · merge ran with **zero warnings**.

⚠️ **COURSE SPREAD IS THE THING TO WATCH.** Batch 1 is 4 mains and a staple. China ended 32 mains of 50 and
had to go looking for `side` and `dessert` late. **Batch 2 should carry at least one starter and one dessert**
— candidates: Agedashi Tofu · Chawanmushi · Gyoza · Yakitori · Miso Soup · Matcha Warabimochi · Dorayaki.
⚠️ **Chawanmushi's laws overlap China's Egg Tarts heavily** (bubbles · strain · low heat or it curdles · pull
it wobbling) — if it is authored, it must lead on the **3:1 dashi-to-egg ratio by weight**, not on bubbles.

### 💰 PRICES — DEFERRED PER A7, KEYS APPENDED TO MF152
