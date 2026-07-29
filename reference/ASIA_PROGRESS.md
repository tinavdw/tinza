# ASIA LANE — PROGRESS
**The file is the memory.** Started 29 Jul 2026. Target: 240 recipes to WOW_STANDARD.md.

## SCOPE (Tina, 29 Jul)
| Country | Target | Banked | File | Wired |
|---|---|---|---|---|
| China | 50 | **43** | `sections/wk_china.js` | ⬜ not yet |
| Japan | 50 | 0 | `sections/wk_japan.js` | — |
| Indonesia | 50 | 0 | `sections/wk_indonesia.js` | — |
| Thailand | 50 | 0 | `sections/wk_thailand.js` | — |
| Vietnam | 40 | 0 | `sections/wk_vietnam.js` | — |
| **TOTAL** | **240** | **43** | | |

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

## 🇨🇳 CHINA — 43 / 50

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

**2. GENERALISE `merge.js` BEFORE JAPAN OPENS.**
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

### ▶️ NEXT — CHINA BATCH 9, THE CLOSING SEVEN (43 → 50)
Suan Cai Bai Rou (pork & pickled cabbage — **uses the new staple**) · Beggar's Chicken · Tea-Smoked Duck ·
**Jianbing** (fills the breakfast gap — only the congee touches `occasion:breakfast`) · Wuxi Sweet & Sour Ribs ·
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


### QUEUE — CHINA (next batches, 5 per batch)
**Batch 7:** Braised Aubergine w/ garlic · Chinese Broccoli in oyster sauce · Tiger Salad · Smashed Cucumber (pai huang gua) · Tea-Smoked Duck
**Batch 8:** Buddha's Delight · Sesame Balls (jian dui) · Tangyuan · Red Bean Buns · Scallion Oil Noodles
**Batch 9:** Chongqing Chicken (la zi ji) · Water-Boiled Fish (shui zhu yu) · Braised Lamb Hotpot · Sichuan Boiled Beef · Beggar's Chicken
**Batch 10:** Youtiao · Soy Milk & fried dough breakfast set · Guo Bao Rou (Northeastern sweet-sour pork) · Lanzhou Beef Noodle Soup · Mooncakes (or a WOW substitute if too specialist)

---


## 🔧 MERGE VALIDATOR (`merge.js`, built 29 Jul — keep it with the lane)
Run as `node merge.js batch5.js`. Refuses to write the file if ANY assertion fails. Asserts:
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
