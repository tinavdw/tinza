# ASIA LANE — PROGRESS
**The file is the memory.** Started 29 Jul 2026. Target: 240 recipes to WOW_STANDARD.md.

## SCOPE (Tina, 29 Jul)
| Country | Target | Banked | File | Wired |
|---|---|---|---|---|
| China | 50 | **50** ✅ | `sections/wk_china.js` | ⬜ not yet |
| Japan | 50 | **27** | `sections/wk_japan.js` | ⬜ **not yet — 2 lines, at Japan close** |
| Indonesia | 50 | 0 | `sections/wk_indonesia.js` | — |
| Thailand | 50 | 0 | `sections/wk_thailand.js` | — |
| Vietnam | 40 | 0 | `sections/wk_vietnam.js` | — |
| **TOTAL** | **240** | **77** | | |

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

## 🇯🇵 JAPAN — see the JAPAN section below (20 / 50)
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

## 🇯🇵 JAPAN — 20 / 50 (opened 29 Jul 2026 · B4 closed 29 Jul)

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

### DONE — BATCH 2 (29 Jul) — the starter, the dessert and the fire
6. ✅ **Gyoza** — **course:starter** — 3 versions: Chicken & Spring Onion budget R17 · Classic Pork & Garlic Chive
   R25 · Shiitake & Tofu **VEGAN** R21. Laws: **SALT THE CABBAGE AND WRING IT UNTIL IT HURTS** — a third of its
   weight leaves as water, and that water is the single cause of split seams, soggy insides and a spitting pan
   (it also seasons the cabbage through, which is why no salt appears again in the recipe); **a Japanese wrapper
   is thinner than a Chinese one and that IS the difference** — this dumpling is fried not boiled, and a thick
   wrapper will never crisp, it only goes leathery, which is a *thickness* problem no extra pan time solves;
   **pleat ONE SIDE ONLY** so the dumpling curves and stands on a flat base; **arrange them before the liquid
   goes in, because after it you cannot move them**; the **hane** — a 1:20 flour-and-water slurry instead of
   plain water — is a single crisp lace sheet welding the whole panful together, and ⚠️ **it must go PAST
   golden**, deep brown and brittle, because it is a starch sheet not a dumpling and everyone pulls it early.
   Moat: **gyoza came home in the kit bags of repatriated soldiers, and Japan adopted the *leftover* version on
   purpose** — northern Chinese dumplings are overwhelmingly boiled and pan-frying is what you do with
   yesterday's, yet Japan has essentially no boiled-gyoza culture at all; several million repatriated from
   Manchuria after 1945, and Utsunomiya and Hamamatsu — both tied to those returning divisions — still trade
   the national top spot for household gyoza spending every year, reported like a sports result. The garlic is
   the other Japanese fingerprint (northern jiaozi often has none), and it is exactly why gyoza was for decades
   slightly disreputable: food for after drinking, not before work. ⚠️ Deliberately does **NOT** lead on
   fry→water→lid→the-hiss-changing-pitch — spent on China's Sheng Jian Bao. 💰 New price keys → MF152.

7. ✅ **Chawanmushi** — **course:starter** — 3 versions: Mushroom & Spring Onion budget **VEGAN** R9 · Classic
   R21 · **Odamaki Mushi** (with udon underneath, Osaka) R32. Laws: **THREE PARTS DASHI TO ONE PART EGG, BY
   WEIGHT — and you weigh the egg**, which is the whole recipe; eggs are not a unit of measurement, a large one
   is ~50g out of the shell and a small one ~40, so "one egg to 150ml" is quietly asking for anywhere between
   3:1 and 4:1; under ~2.5:1 it is a savoury omelette standing in a cup, over ~4:1 it will not set and no extra
   time rescues it; **season and TASTE the dashi before the egg goes in — it is the only moment you can**, and
   it must be **cooled**, because hot dashi cooks the egg into fine ribbons that will not strain out; **every
   filling must already be cooked, cut small and cold** (a raw prawn releases water and leaves a wet hollow
   around itself in twelve minutes of gentle steam); **COVER EACH CUP** — a steamer lid drips and one drop of
   condensation craters the surface, and this dish is judged on being a flat mirror; bare simmer ~85°C, never a
   hard steam, or it blows into a weeping honeycomb; **the doneness test is a skewer at the edge — CLEAR liquid
   means done, cloudy means two more minutes**. Moat: **it is one of the very few Japanese dishes eaten with a
   SPOON, and the spoon is the fingerprint of a foreign parent** — it came in through Nagasaki, the one port
   left open during the seclusion, where Chinese and Dutch trade produced the hybrid *shippoku* banquet cuisine
   (round table, shared dishes, spoons); Yossou in Nagasaki has served it since 1866. And the name is the other
   tell: *chawan* = tea bowl, *mushi* = steamed — **named for its container, not its contents**, because it was
   made in whatever cup was to hand, so the purpose-made lidded cups sold today are a formalisation of a dish
   whose whole character was improvisation. ⚠️ Led on the ratio exactly as ASIA_PROGRESS instructed, and
   deliberately **did NOT lead on bubbles/strain/low-heat-or-it-curdles** — spent on China's Egg Tarts.
   💰 New price keys → MF152.

8. ✅ **Yakitori** — 3 versions: Thigh & Spring Onion **grill pan** budget R27 · Classic Negima over Coals R40 ·
   The Yakitori-ya Spread (skin · liver · tsukune) R58. Laws: **THE SKEWER IS A COOKING TOOL, NOT A WAY OF
   CARRYING FOOD** — pieces cut to equal *thickness* not equal weight, and threaded **touching but never
   compressed** (a gap dries two cut faces grey, compression shields the middle raw); **RADIANT HEAT, NO FLAME**
   — coals down to grey ash, because skin-on thigh drips fat continuously and fat meeting flame is soot, and
   ⚠️ **never water on a flare-up** (it lifts ash straight onto the food and kills the part of the fire you
   needed); **shio vs tare is decided by the CUT, not by preference** — lean and delicate goes salt because tare
   would bury it, fat and strong takes tare — **and the timing is opposite: salt goes on BEFORE, tare goes on
   only in the last third**, because reduced tare is a third sugar and sugar over live coals burns black in
   under a minute; **THREE THIN COATS with a turn between each**, never one thick one (which slides into the
   fire); decant what you brush with — nothing raw ever touches the master pot. The spring onion in negima is
   *mechanical*: it steams beside the chicken and a 3cm length cooks in almost exactly the time a 25g piece of
   thigh does. Moat: **binchotan, and the way the fuel dictates the equipment** — white charcoal from ubame oak,
   fired hot then smothered in damp ash and sand (hence the colour), close to pure carbon, no smoke, no flame,
   ~1,000°C, burns for hours, and **rings like metal when two pieces are struck, which is part of how it is
   graded**; because it gives radiant infrared rather than smoke and hot air, a yakitori grill is long, narrow
   and **lidless** — the whole geometry follows from the charcoal, and a lid would be actively wrong. ⚠️ The
   perpetual-tare-pot angle is kept to **one subordinate clause** — the never-emptied pot is China's Master
   Stock moat. Fat-threaded-between-lean-cubes avoided too (spent on Cumin Lamb). ⚡ `occasion` carries **braai**
   — deliberate cross-shelf appeal. 💰 New price keys → MF152.

9. ✅ **Tempura** — 3 versions: Vegetable **VEGAN** budget R23 · Classic Prawn & Vegetable R52 · Kakiage & Cold
   Soba (ten-zaru) R46. Laws: **the entire method is a campaign against gluten** — flour + water + agitation
   makes gluten, gluten makes bread, and bread is the opposite of tempura; **ICED water, COLD flour, CHOPSTICKS
   not a whisk, TEN TO FIFTEEN STROKES AND STOP** — ⚠️ **THE BATTER MUST STILL LOOK WRONG**, visible lumps and
   dry pockets of unmixed flour on the surface, thin enough to see the prawn's colour through, and if it looks
   like pancake batter you have already lost; **oil to temperature FIRST, batter second** (it has ~10 minutes of
   life, so make a second bowl rather than stretch one); everything **bone dry** — water repels hot oil
   violently, so a wet prawn both spits and sheds its coating; **temperature follows the job** — vegetables
   165–170°C because they must cook *through*, seafood 180–190°C because it needs speed; never more than a third
   of the oil's surface covered; **FLICK droplets of batter over each piece as it fries** to make the spiky
   flowers bloom, because that ragged surface *is* the shattering texture; drain **standing on a rack, never
   paper, never stacked** (a flat piece steams its own base soft in a minute), salt at once, and **serve
   immediately — this is a dish timed to the diner, not the kitchen**, which is the entire reason a tempura
   counter hands over one piece at a time. Moat: **Japan's most formal fried food began as street food, and it
   began there because of a fire regulation** — Edo was wood and paper and burned regularly, so deep-frying was
   pushed out of buildings and onto mobile stalls, eaten standing, off a skewer, dipped into a communal pot;
   that it is now a decade-apprenticeship counter cuisine is one of the most complete reversals in food. The
   Portuguese/Nagasaki *quatuor tempora* origin is kept to **one closing clause**. ⚠️ Prawn-straightening is
   presented explicitly as a **borrowed** law (Tonkatsu's snip-the-membrane) rather than a new one — an honest
   cross-reference instead of a repeat. 💰 New price keys → MF152.

10. ✅ **Dorayaki** — **course:dessert · VEGETARIAN — the file's first dessert** — 3 versions: Quick Anko from
    Tinned Beans budget R8 · Classic R13 · Matcha & Cream (nama dorayaki) R20. Laws: **boil the azuki three
    minutes and THROW THE FIRST WATER AWAY** (*shibukiri* — tannins and saponins, not squeamishness); keep them
    submerged the whole cook or the exposed beans toughen permanently; ⚠️ **SUGAR GOES IN ONLY WHEN A BEAN
    CRUSHES TO NOTHING BETWEEN FINGER AND THUMB — sugar added to beans that are not yet soft keeps them hard
    forever**, because it draws water back out by osmosis and no further boiling undoes it, and *every* gritty
    homemade anko is this one mistake; **stop the paste looser than you want it** (it sets hard cold); **honey
    and mirin are structural, not sweeteners** — hygroscopic, and the whole reason a dorayaki is soft on day
    three where a pancake is stale in an hour; **REST THE BATTER 30 min** then thin it back, because a rested
    batter finds its own circle; **wipe the pan almost DRY** — visible oil mottles the face, and the face is the
    entire aesthetic; **pour from one point and one height, never spread**; flip when the bubbles **stay open**;
    **only the first side is the good side**, pair pale-to-pale; **wrap each one in cling film while still
    warm** — the trapped steam is what turns two pancakes with filling into a dorayaki. Moat: **Japan built an
    entire confectionery tradition with almost no dairy** — no butter, no cream, no milk — so the job fat does
    in European sweets (carrying sweetness, giving body, coating the mouth) had to be done by something else,
    and azuki paste is that something: starchy, faintly protein-rich, and coating without being a fat. **Sweet
    beans are not an eccentric ingredient dropped into a Western dessert; they are a different and completely
    coherent answer to the same question.** Plus red as the colour that wards off misfortune (sekihan at births,
    weddings, New Year), and the genuine national split shops declare on: *tsubuan* chunky vs *koshian* sieved.
    ⚠️ **The Doraemon angle was deliberately NOT used** — "a work of fiction manufactured the appetite" is
    China's Beggar's Chicken moat (Jin Yong), and it would have been the same shape twice. The
    name-outlived-its-shape angle was also avoided, having just been used inside this batch (negima).
    💰 New price keys → MF152.

### 📊 JAPAN CENSUS AFTER BATCH 2
**10 records · 30 versions · 30 crossLinks · 0 dead · `servings` all 1 · costPP R4–R62**
course: **main 6 · starter 2 · staple 1 · dessert 1** · per-version `diet` on **30/30**
version diet tokens: omnivore 20 · vegan 5 · vegetarian 5
`node --check` clean · merge ran with **zero warnings** on all five records.
✅ **The batch-1 course-spread warning was acted on** — batch 2 delivered the starter and the dessert it asked
for, and China's late scramble for `side` and `dessert` has not been repeated. Mains are 6 of 10, which is
still the number to watch.

### 🔴 FOUND 29 JUL — **crossLinks CANNOT CROSS COUNTRIES**
Gyoza was authored with a crossLink to `china-staple-chilli-oil` and `merge.js` rejected it as a DEAD target.
It is right to, given how it is built: `ids` is the set of the **country file's** records plus the incoming
batch, so no cross-country target can ever resolve. But **the live app pool is global** — `wkPool()` concatenates
every country — so a Japan→China link would almost certainly render fine in the app.
⚖️ **This needs a ruling, not a patch.** Either cross-country links are forbidden (in which case say so in A6
and the validator is already correct), or they are allowed (in which case `merge.js` must load the sibling
country files to resolve targets). ⚠️ **Do not loosen the assertion to fit** — a validator relaxed to
accommodate a new case catches less than it did, which is the lesson already written into the budget-leads rung.
Gyoza now links Ramen · Dashi · Okonomiyaki, all within Japan, so nothing is blocked.

### DONE — BATCH 3 (29 Jul) — the course-correction batch

**Schema control regenerated before merging** — `reference/ASIA_SCHEMA_KEYS.json` rebuilt from
`wk_japan.js` record 1 (`japan-staple-dashi`), 25 keys, order locked. **Zero key drift across all 10
existing records**, the first time the file has been measured rather than assumed.

11. ✅ **Onigiri** (Omusubi) — `side`, **the empty side slot is filled**. 3 versions: Gomashio & Salted
    Rice **budget · VEGAN** R5 · Classic Salted Salmon R16 · Yaki Onigiri Grilled with Miso R9 (vegan).
    Laws: **short-grain only** — amylopectin bonds, amylose does not, so a long-grain onigiri is not a
    firmer ball but a pile of rice; rinse to near-clear, then **rest the drained grain 20 min dry** (dry
    grains crack on contact with water); 12 min cook + **10 min lid-on off-heat rest** (the top layer
    always lags the bottom, a pot opened early gives two rices in one bowl); **RICE WARM, NEVER HOT OR
    COLD** — hot steams itself to paste in the palm, cold has already retrograded and will not bond,
    which is exactly why last night's fridge rice falls apart; **SALT ON THE HANDS, NEVER IN THE RICE**
    (tenoshio — it seasons the surface the mouth meets first AND puts the preservative on the outside
    where a travelling rice ball actually needs it); **press only enough to hold — a ball that holds
    together perfectly is too tight**, three or four turns, firm corners, loose middle; filling completely
    buried or it tears the wrap; **nori on at the moment of eating**, never before. Moat: **a packaging
    invention created a retail category.** Onigiri was homemade until the late 1970s because a shop could
    not sell one — nori wrapped on is ruined by the shelf, nori left off and nobody wants it. A three-layer
    film patented in 1978 keeps the seaweed physically apart from the rice until a pull-tab splits the
    wrapper and drags the plastic out from between them; it made onigiri the biggest-selling item in
    Japanese convenience stores. Plus the Yayoi-period carbonised rice lumps from Ishikawa — deliberately
    shaped by hand ~2,000 years ago, the same shape — and **umeboshi as the travel filling because it is
    genuinely antibacterial**, not because anyone loved it. 📌 The triangle is logistics: it stacks, it
    does not roll, and shaped rice was offering food long before it was lunch.

12. ✅ **Tamagoyaki** (Dashimaki Tamago) — `side`, **the one permitted egg record** (Chawanmushi ·
    Oyakodon · Tamagoyaki = 3; Onsen Tamago is now closed off for the lane). 3 versions: Plain Sweet
    **budget · VEGETARIAN** R7 · Classic Dashimaki R12 · Layered with Nori & Spring Onion R10
    (vegetarian). Laws: **MIX, NEVER WHISK** — chopstick tips on the bottom of the bowl, because air
    becomes bubbles becomes holes and holes are where two layers cannot touch; **STRAIN THE EGG** — the
    chalazae are structural protein that never break down at any temperature used here and show as white
    ropes in a pale slice; **cold dashi** (warm dashi starts setting the egg in the bowl); medium-LOW,
    a faint hiss not a spit — **browning is a fault in Japan, not rustic charm**; **oil between EVERY
    layer** with a folded-paper pad, for release rather than for sticking; **ROLL WHILE THE TOP IS STILL
    WET** — a fully-cooked surface is a sealed surface and sealed surfaces do not bond, which is the whole
    delamination failure; **lift the roll and let each new pour run UNDERNEATH it** — that trapped film is
    the weld; shape warm in a mat for 5 min. Moat: **the egg is the only thing on a sushi counter that
    cannot be bought.** Every other item depends on the fish market, so a chef with a good supplier and a
    fair knife can serve superb tuna while telling you nothing about himself — the tamagoyaki is made
    entirely in-house from cheap universal ingredients, so it is pure technique, and connoisseurs order it
    FIRST to read the shop before committing to the meal. Apprentices spent years on it. The regional split
    is visible in the pans: Tokyo square, sweeter, firmer (sugar-as-wealth); Kansai long and rectangular,
    pushing the dashi ratio as high as egg will physically hold. 📌 The dashi stays in because setting egg
    protein gels into a mesh that **traps water** — tamagoyaki is a rolled savoury custard, not a fried
    egg, which is also why it does NOT freeze (ice crystals tear the gel and it thaws weeping).

13. ✅ **Kare Raisu** (Japanese Curry Rice) — `main`. 3 versions: Vegetable & Chickpea **budget · VEGAN**
    R22 · Classic Beef R42 · Sapporo Soup Curry R48. ⚠️ Authored as the **curry** record, not the cutlet —
    Katsu Curry stays Tonkatsu v3 and the card cross-links to it rather than repeating it. Laws:
    **ame-iro tamanegi — 35 minutes of onion, not 12** (a hot pan gives browned edges and raw sulphurous
    middles, which reads sharp not sweet, and is why every thin curry you have made was an under-cooked
    onion); dry meat, hard sear, skim the first foam; **spices go into the roux OFF THE HEAT** — ground
    spice in hot fat scorches in seconds and nothing later lifts it out; roux cooked LOW 15–20 min to
    peanut-butter colour (browner roux thickens less per gram and tastes incomparably better);
    **rolling-cut the carrot** for cut surface; **WAXY potato, added at 15 min** — a floury one
    disintegrates, clouds the sauce and turns the pot to gluey mash; **THE ROUX NEVER GOES INTO A BOILING
    POT** — kill the heat, let it settle 2 min, slacken the roux with a 150ml ladle of hot liquid off the
    heat, then return, because a stiff roux hitting boiling liquid gelatinises its own outside instantly
    and seals into lumps that never disperse; then 10 min on the lowest heat to swell the starch, cloudy
    → glossy; **rest overnight** — starch keeps hydrating, fat emulsifies as it cools, and the
    oil-soluble spice spends twelve hours distributing through that fat instead of sitting in patches.
    **kakushi-aji** introduced as a named concept: apple + honey here, chocolate and coffee the other
    classics, and the test is that a guest tastes depth and cannot name the cause. Moat: **curry reached
    Japan from BRITAIN, not India** — Anglo-Indian naval stew thickened with a flour roux in the standard
    British manner, which is exactly why it is a brown gravy and why Japan files it under *yoshoku*,
    Western food. The Imperial Japanese Navy adopted it in the 1880s for a **medical** reason: crews on
    polished white rice were being destroyed by beriberi, and Takaki Kanehiro ran one of the first
    controlled dietary trials in history — two ships, near-identical voyages, different rations — proving
    a varied barley-meat-vegetable diet all but eliminated it. One pot fed a crew and kept well. The
    JMSDF **still serves curry every Friday, and the stated reason is calendrical, not culinary** — long
    patrols with no daylight lose track of the days, so Friday curry is a clock. Ships guard their recipes
    competitively and base towns run public curry competitions ashore. 📌 Freeze WITHOUT the potato —
    potato cells rupture and thaw grainy and hollow. 📌 v3 Soup Curry (Sapporo, 1970s) is a genuine fork,
    not a garnish change: **no roux at all**, vegetables roasted separately and stood in the bowl.

14. ✅ **Agedashi Tofu** (Agedashi Dofu) — `starter`. 3 versions: Firm Tofu Shallow-Fried
    **budget · VEGAN** R14 · Classic Silken R22 · Mushroom Ankake R19 (vegan). ⚠️ Deliberately does NOT
    re-lead on drain-on-a-rack — that is Tempura's, same file. Laws: **press 30 min under something
    flat and moderately heavy** (tofu is ~85% water and every gram left is a gram trying to escape
    violently through the coating — you are draining silken tofu, not crushing it); simmer the tsuyu
    2 min to **drive the mirin alcohol off**, or it reads as a thin chemical sharpness behind everything;
    oil at **180°C** — under 170 the coating sets too slowly and the block absorbs oil, over 190 the
    starch colours before the inside has warmed at all; **COAT ONE CUBE AT A TIME, IN THE SECOND BEFORE
    IT GOES IN** — starch sitting on damp tofu pulls water out and turns to paste within minutes, and
    this is the commonest home failure and it happens during the *tidy, well-organised* version of the
    process; **potato starch not cornflour** (large granules, swells hard, brittle and translucent;
    cornflour is a fair stand-in but denser and browns sooner; plain flour is not a substitute at all);
    **TAKE THEM OUT PALE** — deeply browned means over-fried, the crust has gone hard and thick and will
    sit in the broth like a shell; **THE BROTH GOES IN THE BOWL FIRST AND THE TOFU IS SET INTO IT**,
    ~1cm deep, lower third submerged, so each cube carries three textures at once. Moat: **a fried dish
    engineered to go soggy on purpose**, which is close to unique in fried cookery — everything else
    fried anywhere defends its crust, and this one fries in a starch chosen because it *dissolves*, pulls
    out pale so the crust stays thin, and is then stood in hot liquid so the coating melts into the broth
    and thickens it. The crispness is a stage, not the goal. Second moat: **Tofu Hyakuchin, Osaka 1782** —
    'One Hundred Delights of Tofu', a whole cookbook on one cheap ingredient, one of the first real food
    bestsellers in Japan; it set off a *hyakuchin* publishing craze (daikon, sweet potato, egg), is still
    in print 240 years later, and agedashi tofu made the original list. 📌 Honest storage: it does not
    keep and the card says so — press and make the broth ahead, fry to order, which is how a restaurant
    does it too. 📌 v3 teaches the **re-stir-the-slurry** law (starch settles to a solid pad in ~90 s).

15. ✅ **Goma-ae** (Horenso no Goma-ae) — `side`, and **fully vegan across all three versions**, which
    is deliberate given the diet-filter RED (118 vegan records currently invisible). 3 versions: Cabbage &
    Green Bean **budget · VEGAN** R6 · Classic Spinach R11 · Shira-ae Tofu & Sesame R13. ⚠️ Deliberately
    does NOT lead on toast-the-sesame-by-nose — spent on China's Tang Yuan. Laws: hard rolling boil,
    **salt the water properly** (5g/litre, seasons the leaf from outside in); stems 15 s first, then
    30–45 s total; **ICE WATER WAITING BEFORE THE GREENS GO IN** — chlorophyll holds a magnesium ion,
    heat and the plant's own acids knock it out and replace it with hydrogen, the pigment becomes
    pheophytin and the colour goes tinned-pea olive; irreversible, and it keeps happening in the three
    minutes the greens steam in a colander; **THE SQUEEZE IS THE DISH** — gather into a log, wring along
    it in sections, then re-gather and do it a SECOND time, because every gram of water left ends up as a
    grey puddle thinning the dressing off the leaves, and that puddle is the whole difference between the
    restaurant version and the home one; keep the stems aligned so the cut gives neat bundles;
    **GRIND TO HALF-BROKEN, NOT TO PASTE** — ~2/3 cracked, 1/3 whole, and both extremes fail for opposite
    reasons: an intact hull is not opened by human digestion so a whole seed contributes nothing and
    passes straight through, while a full grind releases all the oil and becomes tahini, coating the
    leaves in a slick film and losing the granular catch that is the texture of the dish; **ratio 3:1:1
    by weight** (sesame : sugar : soy) and you never need the recipe again; **DRESS AT THE LAST MINUTE** —
    the dressing is salty and sweet and therefore osmotically hungry, and twenty minutes standing pulls
    the water straight back out of the leaves you just wrung dry. Moat: **grinding sesame gave Japanese
    its word for a flatterer** — *goma-suri*, 'sesame-grinding', is everyday slang for someone who sucks
    up to their superiors, and the image is exact rather than vague: ground sesame is sticky, smears
    around the grooves and clings to everything it touches. Second moat, and the angle is the TOOL, not
    the temple: a suribachi is **not a Western mortar with a different name** — its interior is combed
    with dozens of fine radial grooves and it works by SHEAR, dragging seeds across ridges to split them,
    where a smooth marble mortar works by impact and pressure. Hence rotate, don't pound; hence 90 seconds
    versus five minutes and half of it turned to butter; hence a food processor is the *poor* option here,
    because blades either miss the seeds or overshoot into paste with very little useful ground between.
    And the reason the tool is in Japanese kitchens at all is a nutritional constraint: shojin cooking
    permits no meat, fish or dairy, leaving almost no fat and little concentrated protein, so **the
    ground-seed dressings are a solution to a problem** — goma-ae, walnut dressing, and shira-ae where
    tofu and sesame together do the work cream does elsewhere. 📌 Storage ruling for the card: store
    greens and dressing APART (3 days / 1 week), combine per portion.

### 📊 JAPAN CENSUS AFTER BATCH 3 — **15 / 50**

| course | n | % |
|---|---|---|
| main | 7 | 47% |
| starter | 3 | 20% |
| **side** | **3** | **20%** |
| staple | 1 | 7% |
| dessert | 1 | 7% |

**45 versions · 45 crossLinks, all resolving · 0 dead · `node --check` clean · merge.js 40/40 with ZERO
warnings** (no §26 existing-diet debt, because Japan has carried per-version diet from record 1; and no
"v1 is not the cheapest" warn, because all five budget forks genuinely lead on price).

✅ **THE COURSE CORRECTION LANDED.** Mains were 6/10 = 60% at batch 2 and are now 7/15 = **47%**.
Japan went from **zero sides to three**. China's late scramble for `side` and `dessert` has not repeated.
🔎 **Diet spread**: omnivore 13 · vegan **9** · vegetarian 4 — Japan is now the most vegan-capable country
in the lane, which matters directly to the open diet-filter RED.
⚠️ **Dessert is now the thin one at 1** (Dorayaki alone). Batch 4 should carry one, and Japan has strong
untouched candidates (Matcha Warabimochi · Taiyaki · Mitarashi Dango).

### 🔧 SCHEMA CONTROL — REGENERATED, AND IT MEASURED CLEAN
`reference/ASIA_SCHEMA_KEYS.json` rebuilt from `wk_japan.js` record 1 (`japan-staple-dashi`) before the
merge, per A3 — **25 keys, order locked**. All 10 existing records matched it exactly: **zero key drift**.
That is the first time the file has been *measured* rather than assumed, and it is the cheap version of
the census habit: regenerate from record 1 at the start of every batch, not once per country.

### ⚠️ PROCESS NOTE — A TOOL BUG THAT COST NOTHING BECAUSE THE SOURCE WAS READ-ONLY
Mid-batch, an edit to this file truncated it to **0 bytes**. Cause was not the data: hand-written `\ud83d`
surrogate escapes in a Python string are invalid UTF-8, and Python opens the file for writing (truncating
it) *before* it discovers the encoding error — so the check fails after the destruction. `ASIA_PROGRESS.md`
itself decodes as clean UTF-8; the file was fine. Recovered instantly from the read-only upload.
⚖️ **Lesson, and it generalises past this file:** write to a temp path and `os.replace()` it in, so a
failed write cannot destroy a good file. Same shape as the "nothing is banked until it is on GitHub"
lesson — the intermediate state is where the loss happens.

### ▶️ NEXT — JAPAN BATCH 4 (15 → 20)
⚠️ **Now the thin course is `dessert` (1) — Dorayaki alone.** Batch 4 should carry one dessert and can
afford to go back to mains. Egg is CLOSED for the lane at 3 (Chawanmushi · Oyakodon · Tamagoyaki) —
**Onsen Tamago is off the list**.
Candidates, collisions already checked:
- **Karaage** (`main`) — ⚠️ must not re-lead on oil temperature or drain-on-a-rack (Tempura and Agedashi
  both live in this file now). Lead on the **double-fry at two temperatures** and the potato-starch-vs-flour
  choice already half-spent on Agedashi — or lead on the **buttermilk-less marinade**: sake and ginger as
  tenderisers doing enzymatic work. ⚠️ Double-fry is China's Gu Lao Rou law. **Tight squeeze — check first.**
- **Takoyaki** (`starter`/`snack`) — the turning-with-a-pick technique is unlike anything else in the file
  and the Osaka street-food moat is untouched. ⚠️ Octopus availability in SA is a real question; the card
  must be honest about the stand-in.
- **Matcha Warabimochi** (`dessert`) — ✅ **strongest dessert candidate.** Warabi starch, the set-and-cut,
  and the moat that warabimochi is one of the very few Japanese sweets that predates sugar's arrival.
- **Taiyaki** (`dessert`) — ⚠️ overlaps Dorayaki heavily (anko, batter, pan). Only if it leads on something
  else entirely — the fish shape's origin as a cheaper knock-off of imagawayaki is a real moat.
- **Mitarashi Dango** (`dessert`) — the tare glaze and the shiratamako/joshinko flour split.
- **Miso Soup** (`starter`/`staple`) — ⚠️ only earns a slot on **never boil the miso** and the awase blend.
  Borderline against A4 icons-only, and "never boil" now risks reading as a repeat of Dashi's kombu law.
- **Sukiyaki / Shabu-shabu** (`main`) — ⚠️ unchanged hard collision risk with China's Chongqing Hotpot.
  Only on the **raw egg dip** and fried-first-then-simmered.
- **Zaru Soba · Katsudon · Nikujaga · Chirashi · Korokke** — all still open. **Nikujaga** is interesting
  now: it shares the Imperial Navy origin story with Kare Raisu, so it would need a *different* angle.

### ⚖️ STILL OPEN FROM BATCH 2 — crossLinks CANNOT CROSS COUNTRIES
Unchanged and still needs a ruling, not a patch. Batch 3 authored all 15 links within Japan, so nothing
is blocked, but the question is now 45 links old.

### 🔴 PRICE-KEY AUDIT — TINA CAUGHT IT ON ONE LINE (29 Jul, post-batch-3)
Tina: *"we have salmon fillets, in the price list."* She was right, and the one line opened a hole.
The batch-3 MF152 append had been written by grepping **MF152 itself** for each candidate — which is
checking a to-do list against itself. The check-not-add pass is defined as a check against **`prices.js`
at HEAD AND both alias maps** (`core.js` ~1050 · `worldkitchen.js` ~461), and the repo has been directly
clonable since 21 Jul, so the real check was available the whole time and was simply not run.

Re-measured against the real gate:
- **6 of 10 batch-3 "new" keys were already priced** — `salmon` R680 (+`canned salmon` R300) ·
  `beef chuck` R130 exact · `miso paste` R135 · `apples` R27 · `butternut` R13 · `chickpeas` R68.
- **`potato starch` is already aliased in `core.js:1340` → `cornflour`.** The note had called this
  "Tina's call, do not decide it silently" — it was decided, in code, before the lane opened. Same shape
  as the Events §2.2 inversion: **the code was right and the note was the bug.**
- 🔴 **The error also ran the other way, which is worse.** Four keys were parked on *check-do-not-add*
  lists while being **absent from all three files**: `daikon` (only `radish` R108 exists) ·
  `fresh shiitake mushrooms` (only `mushroom` R165 / `mushrooms` R90) · `rice vinegar` (only `vinegar`
  R25 / `white vinegar` R49) · `firm tofu` (only `tofu` R250). `soba noodles` was the reverse — listed
  NEW, already present.
- ⚠️ **The file contradicted itself**: the batch-2 append warns that `garlic chives` vs `chives` is
  "the same collision shape as `radish` vs `daikon`" — two lines above parking `daikon` as already-there.
- ⚠️ Separate pre-existing oddity surfaced: **`mushroom` R165 and `mushrooms` R90 are both live keys at
  different prices.** Not this lane's problem, but worth its own look.

⚖️ **NEW RUNG — an MF152 append is not written until it has been measured against `prices.js`, never
against MF152.** MF137 says a duplicate key is worse than a missing one. This adds the third case:
**a key wrongly parked as "already there" is worse than both**, because a duplicate announces itself at
merge and a wrongly-parked key announces itself *never* — the price batch skips it and the card ships
with no cost at all. Silent holes need a mechanical watcher, not sharper eyes (the tierBar lesson, §17).
📌 Cheap and mechanical: `git clone --depth 1` + grep all three files, and **write down what was
measured, not what was assumed**. Candidate for a census rung once the price batch runs.
🩸 Full corrected tables live in `reference/MF152_ASIA_PRICE_KEYS.md`. **Japan batch 3 adds 3 real keys,
not 10.** Batches 1–2 gain 3 from the correction and lose 1.
📌 One live risk carried forward: the Kare Raisu ingredient line reads **"30g apple"** (singular) and the
key is **`apples`** (plural) — if the alias map does not catch it, that line silently fails to price.

### 🔧 NEW TOOL — `pricecheck.js` (built 29 Jul, 22 born-RED proofs)
Built after the price-key audit above, because the failure was not carelessness that could be
fixed by trying harder — it was **freelancing in the one area with no tool**. Every error that
day landed there. `merge.js` territory held at 40/40; the price bookkeeping, which had no
watcher, failed three separate ways in one session.

**`node pricecheck.js <country> [batch.js]` · `node pricecheck.js --selftest`**

⚖️ **THE DESIGN DECISION THAT MATTERS: it does not reimplement pricing.** It loads
`prices.js` + `core.js` + `worldkitchen.js` into a sandbox and calls the app's **own**
`wkParseIngredients()` / `wkCleanName()` / `wkPriceLookup()` over every base ingredient line
**and every version delta**. A watcher with a private model of how pricing works measures a
program that does not exist — which is exactly how a grep-based check missed everything.
Same law as PARSE-NEVER-REGEX: read the real thing, do not model it. If any of the three gate
files fails to load, it **refuses to report** rather than silently checking two of three.

**THREE STATES, NOT TWO.** The first draft asked "does it price?" and got it wrong, because
`wkPriceLookup()`'s last rung is *longest key appearing as a whole word anywhere in the name* —
so almost everything "prices", often as the wrong thing:
- ✅ **EXACT** — real key or real alias.
- 🔴 **WRONG PRODUCT** — HARD. Two mechanical flags, no judgement, so neither can drift:
  a count-priced key matched a gram/ml ingredient (the apple bug), or the key was found
  **only in the prep/note tail**, not in the ingredient itself (the coarse-salt bug).
- 🟠 **REVIEW** — a qualifier sits next to the key (`potato starch`→`potato`,
  `sushi rice`→`rice`, `silken tofu`→`tofu`). Prints, never blocks — same hard/soft split
  `merge.js` uses for budget-leads.
- 🔵 **ABSENT** — no price at all, deduped by head clause and cross-read against MF152 so a
  key Tina already sourced is never "discovered" a second time.

**FIRST REAL RUN CAUGHT 7 WRONG-PRODUCT BUGS** across all three Japan batches — 3 from batch 3,
4 pre-existing. All fixed; `wk_japan.js` re-validates 40/40. Full table in MF152.

⚖️ **THE LADDER, one rung past MF137:** missing < duplicate < **wrong**. A missing cost renders
blank and announces itself; a wrong cost renders as a number and looks correct.

📌 **MF152's Japan section is now GENERATED, not hand-written.** The three hand-written appends
are struck — they contradicted each other and the canonical head of the same file. A generated
section cannot drift from itself.

🩸 **Two gate gaps this surfaced, both needing a ruling, both bigger than the lane:**
`neutral oil` is absent and used in 7 of 15 Japan records (`WK_ALIAS` has `oil`/`veg oil`/
`cooking oil` → `sunflower oil` but not `neutral oil` — one line closes it app-wide); and
`dashi` is absent but is a real staple **card**, so this is §27 arriving as a pricing question:
does a staple that is an ingredient of other cards get a PRICE_DB key, or does its cost come
from its own record?

🔎 **Honest limits, written into the tool:** presence and shape only. It cannot tell you R680 is
the wrong salmon, that a price is stale, or that an exact key points at the wrong product.
It also cannot judge the 🟠 REVIEW list — that stays Tina's eyes, by design.

### ⚖️ RULED 29 JUL — NEUTRAL OIL, AND THE BUG BEHIND IT
Tina supplied the Japanese neutral-oil set (canola dominant in modern kitchens, generic
vegetable blends, soybean for commercial deep-frying, rice bran the traditional tempura oil).
**Ruling: `neutral oil` is a CATEGORY, not a product** — it is what the WOW standard writes
deliberately, because the global-wording ruling forbids naming a local product in prose. Every
member of that category is the same commodity frying oil at the same shelf price. `vegetable
oil` is already a real key at R48 and five terms already alias to `sunflower oil` R48, so this
is **the sixth instance of a decision already made five times**, not a new one.
✅ Added to `WK_ALIAS` (`worldkitchen.js`): `neutral oil` · `canola oil` · `rapeseed oil` ·
`soybean oil` · `soya oil` · `neutral cooking oil` → `sunflower oil`. `node --check` clean.
⚠️ **RICE BRAN OIL DELIBERATELY EXCLUDED** — genuinely dearer, and aliasing an expensive oil to
a cheap one is the MF28 lamb→mutton mistake: the alias lies quietly and nothing catches it. Let
it fail loud and earn its own key.

### 🔴 AND THE ALIAS ONLY HALF-WORKED — WHICH FOUND A BIGGER BUG
The alias fixed the bare `neutral oil` but **not** `neutral oil, for frying` / `for the pan` /
`for the roux`. `wkPriceLookup()` cleans the whole string, so a purpose clause blocks **every**
rung, including the alias map. That is **TINZA INGREDIENT STANDARD** being breached — *prep goes
in the method, not the name* — and the fix was the cause, not six more aliases. 11 purpose
clauses stripped from Japan ingredient names; `merge.js` re-validates 40/40.
⚖️ **RUNG FOR THE WHOLE LANE: a purpose clause in an ingredient name is not a style issue, it is
a PRICING bug.** `pricecheck.js` now surfaces it automatically, because the head clause is what
it judges against.

### ✅ JAPAN PRICE STATE — CLEAN
`node pricecheck.js japan` → **exact 57 · wrong-product 0 · absent 29, of which GENUINELY NEW: 0.**
Every unpriced Japan ingredient is now either already sourced by Tina (3) or already on MF152
(26). Nothing undiscovered is left in the country.

### 🩸 ONE RULING STILL OPEN — STAPLES THAT ARE INGREDIENTS
`dashi` (6 records) and `chilli oil` (Gyoza) are absent from PRICE_DB **but are real staple cards
with their own costed versions.** §27 arriving as a pricing question: does a staple that is an
ingredient of other cards get a PRICE_DB key, or does its cost come from its own record?
⚠️ `chilli oil` currently resolves to `chilli` R80 by substring — wrong product until ruled.

### ⚖️ §29 DRAFTED 29 JUL — A STAPLE THAT IS ALSO AN INGREDIENT
Full block in `reference/RULING_29_STAPLES_AS_INGREDIENTS.md`, ready to paste after §28.
⚠️ **Handed back as a BLOCK, not as the whole rulings file, deliberately** — the repo at HEAD
stops at §25, so §26/§27/§28 exist only in Tina's un-pushed copy. Rebuilding "the complete file"
from HEAD would silently delete three rulings: the same shape as today's ASIA_PROGRESS truncation
and last week's TINZA_SPRINT_PLAN split-brain.

**29.1 THE TEST — does a real bought product fill the slot?** A staple that is an ingredient of
other cards gets a PRICE_DB key **if and only if** a cook can buy something that fills that slot.
Dashi ✅ (instant hon dashi granules — a real jar, a real shelf price, and what most cooks
actually use; confirmed by Tina). Chilli oil ✅ (an ordinary jar). Master Stock ❌ (nothing on a
shelf is a master stock) → fails loud, and its cost waits for a sub-recipe costing engine that
**does not exist yet**. "No bought equivalent" therefore means "no cost", which is the honest
answer rather than a guessed one.

✅ **29.2 RULED BY TINA 29 JUL — THE STORE ROUTE.** The Dashi *card* already prices R4/R9/R7 — the from-scratch route.
A `dashi` *key* would price the bought route inside other cards. Two questions, two right
answers, no conflict. A staple inside another card's ingredient line is costed as the
product a cook BUYS. The staple card is unaffected and keeps pricing its own from-scratch route,
which stays lower — that gap is the argument for the card existing. The alternative (slots priced
from the staple's own record) is now formally closed: it needs a sub-recipe costing engine, which
is a BUILD, not a ruling, and is not happening before launch.
📌 First application: `chilli oil` R490/L is in `prices.js` as the bought condiment.
⏳ `dashi` still needs ONE number — the shelf price of instant hon dashi granules. Route is ruled,
price is not sourced. One line for next session; do NOT guess it.

**29.3 A DASHI KEY IS OMNIVORE, AND IT IS LOAD-BEARING.** Hon dashi contains bonito extract, and
`dashi` is already on the hidden-animal dictionary. ✅ **Measured and clean:** all 6 Japan records
with a plain `dashi` base line carry an omnivore default, and all 7 vegan/vegetarian forks swap
explicitly to a kombu-and-shiitake dashi. No card claims vegan while carrying bonito.
⚠️ The Node diet tagger must treat `dashi` as animal and `kombu and shiitake dashi` as NOT —
it cannot substring-match between them. Same collision shape as `radish` vs `daikon`.

**29.4 THE THREE HONEST ROUTES (Tina):** instant granules · light chicken/veg broth + a splash of
soy (the pantry route, worth naming in-method rather than pretending) · shiitake steeping liquid,
which is the vegan route and already what every Japan vegan fork uses.

### 💰 PRICES — DEFERRED PER A7, KEYS APPENDED TO MF152


---

## 🇯🇵 JAPAN BATCH 4 — CLOSED 29 Jul 2026 · 15 → 20 · merge 40/40 · wrong-product 0

⚠️ **This batch was authored TWICE.** The first run was lost to a container reset with nothing
handed back — five records written, zero downloaded. The re-run below banked and presented the
file **after every single record**, which is the standing FABLE rule and the one the lost session
broke. A cut-off must cost one recipe, never a batch.

### THE FIVE
| # | record | course | versions | the law it teaches |
|---|---|---|---|---|
| 24 | Matcha Warabimochi | dessert | R9 · R17 · R21 | cold mix · translucency is doneness, not thickness · NEVER refrigerate |
| 25 | Mitarashi Dango | dessert | R11 · R14 · R19 | the two-flour blend · earlobe firmness · grill it DRY and grill it FIRST |
| 26 | Takoyaki | starter | R24 · R38 · R30 | batter far too thin · flood the plate on purpose · the QUARTER-TURN, never a flip |
| 27 | Zaru Soba | main | R19 · R26 · R41 | no salt in the water · rub them until they SQUEAK · keep the soba-yu |
| 28 | Nikujaga | main | R27 · R34 · R30 | otoshibuta · SUGAR BEFORE SOY · beef out and back |

### 📊 JAPAN 20 / 50
main 9 · starter 4 · **dessert 3 (was 1 — the batch brief)** · side 3 · staple 1 ·
60 versions · 60 crossLinks all resolving · **vegan-capable 14/20**

### ⛔ COLLISION CHECKED FIRST, NOT ASSUMED
- **Karaage stays dropped.** Double-fry is owned twice: China's Gu Lao Rou, and Tonkatsu's
  "two temperatures" inside this very file. It returns in a batch where it can lead on the
  marinade as enzymatic tenderiser.
- **Takoyaki vs Okonomiyaki** — the closest neighbours in the file. Okonomiyaki owns the flip,
  the teppan-as-dining-table moat and the breathing bonito flakes. Takoyaki leads on the
  quarter-turn (explicitly *not* a flip) and on the radio-yaki ancestry. Clean split.
- **Nikujaga vs Kare Raisu** — both have a Navy origin. Kare Raisu owns Britain, the IJN, Takaki
  Kanehiro's two-ship beriberi trial and JMSDF Friday curry. Nikujaga therefore leads on
  **sa-shi-su-se-so**, the seasoning-order mnemonic, with the two rival port towns as one clause only.
- **Zaru Soba** avoided beriberi entirely for the same reason; its moat is toshikoshi soba — the
  only major noodle tradition that celebrates a noodle *breaking*.

### 🔴 THREE VALIDATOR CATCHES, ALL ON THE AUTHOR
1. `"20ml water, for the syrup"` → `syrup` R50 (note-tail bug, batch-3 shape). **pricecheck.**
2. `2 sheets nori` → invented a duplicate MF152 entry against the file's `1 sheet nori`. **pricecheck.**
3. `swapIng:[{from},{to}]` split across two objects instead of one. **merge.js, 3 born-RED assertions, refused to write.**
Plus one stray `]` caught by `node --check` before merge ran.
📌 All four were authoring errors, none were recipe errors. The watchers are doing exactly the job
§17 says they should: a silent hole needs a mechanical watcher, not sharper eyes.

### 🩸 TWO GAPS FOUND IN THE VALIDATORS THEMSELVES — NEED A RULING, NOT A PATCH
**(1) `merge.js` FLESH list is missing `octopus` and `dashi`.** It carries `squid` but not
`octopus`, so `japan-takoyaki` — 60g octopus in the base under a union tag including `vegan` —
sailed past the mis-tag check entirely. It caught the *egg* and missed the octopus. `dashi` is
absent too, which matters because **§29.3 rules dashi as animal**: a record tagged vegan with plain
`dashi` in its base would not warn. Two words into that array closes both. ⚠️ Do **not** add
`kombu and shiitake dashi` as a false friend by substring — same collision shape as radish vs daikon.

**(2) The vegan-mistag warn cannot see version deltas, and says so in its own comment.** It fired
on both Takoyaki and Nikujaga, correctly, because §26 makes the record diet a UNION — so a record
legitimately carries `vegan` while its base is omnivore. Both forks were verified **mechanically**
(delta applied in a script, resulting ingredient list scanned) rather than by eye, and both are
clean. But this warning will now fire on every future record with a vegan fork off an animal base,
which is most of them. Either it becomes noise, or the rung learns to apply the delta first.

### 🔧 pricecheck.js — THE repoRoot BUG, FIXED AGAIN
Line 370 defaulted `repoRoot` to `path.join(__dirname,'..','tinzarepo')` — a sibling folder that
only ever existed in the container that built it. **Every run from the repo root died with
"price gate incomplete."** Fail-closed was the right failure, but a watcher that never runs never
watches. Now `__dirname`; 22/22 proofs still pass. ⚠️ This fix was made in the LOST session too
and went down with it — it is in the handed-back file this time.

### ⚖️ A MEMORY NOTE THAT WAS WRONG, AND THE FILE SAID SO
The habit "regenerate `ASIA_SCHEMA_KEYS.json` from record 1 at the start of every batch" is
**STRUCK.** Doing it broke `merge.js` (wrong top-level key) and, worse, it is the exact failure
mode the file was written to prevent — its own note reads: *every country file validates against
THIS list, never against its own record 1 ... letting each file set its own precedent is how five
near-identical files drift apart (Law 50).* The list is frozen from `wk_china.js` @ 43 records.
Restored from HEAD. **Do not regenerate it.** Same inversion as Events §2.2 and the potato-starch
alias: the file was right and the note was the bug.

### ▶️ JAPAN B5 (20 → 25) — thin now: side 3 · starter 4
Korokke *(⚠️ it is the canonical second life of Nikujaga — cross-link, and do not re-teach the
mash)* · Kinpira Gobo · Hijiki no Nimono · Buta no Shogayaki · Chirashizushi.
⚠️ **Sukiyaki still needs a ruling first** — the raw-egg dip against egg CLOSED at 3, plus the
Chongqing Hotpot collision.

### ⛔ STILL NOT WIRED, STILL NOT PUSHED
Unchanged: push ONCE at Japan close, two lines. **Proposed amendment for Tina's ruling:** push
`wk_japan.js` *unwired* at every batch close — one deploy credit, zero change to the live app,
and it cannot be lost to a dead container. Today's re-authoring is the argument.

---

## 🇯🇵 JAPAN — BATCH 5 (29 Jul 2026) · 20 → 24

Merge: `✅ all checks pass · 20 + 4 = 24`. `node --check` clean. `pricecheck japan`: 🔴 wrong-product **0**, genuinely-new keys **0**.

### BANKED
29. **Korokke** — *starter*. Floury potato, not waxy (the one Japanese potato dish that inverts the Nikujaga law). Dry the mash in the hot empty pot for a full minute · chill the filling before shaping · lift onto a rack never paper. Moat = made famous three times and never by a cook: the 1917 comic song *Korokke no Uta* · the 1953 frozen school-lunch programme · the 2000s 2channel typhoon ritual. Versions: 💰 Yasai (vegan, egg-free flour-water slurry coating) R20 · 🏆 Classic Beef R30 · 🍛 Curry R33.
30. **Kinpira Gobo** — *side*. Kinpira is a TECHNIQUE (fry hard, then season and cook the pan completely dry), not a recipe. Moat = named after Sakata no Kinpira, the strongman of Edo puppet theatre — an eighteenth-century snack named after a superhero; plus burdock is the weed whose burs became Velcro (de Mestral, 1941). ⚖️ GOBO ROUTE, same shape as the warabi-starch ruling: burdock is not on an ordinary SA shelf, so the record LEADS on carrot + parsnip and names gobo honestly in-method. No burdock price key created. Versions: 💰 All-Carrot (vegan) R9 · 🏆 Carrot & Parsnip (vegan, default) R16 · 🥓 Pork Belly R23.
31. **Buta no Shogayaki** — *main*. THE timing law: add the sauce while the pork is still faintly pink and let it finish in the bubbling glaze. Short marinade or none — zingibain keeps working and turns thin pork mealy. Moat = it tastes ancestral and is younger than the ballpoint pen (Ginza restaurant, 1940s, invented as a fast high-volume delivery dish), on top of Japan's ~1200-year meat prohibition reversed in the 1870s — ginger was there to cover an unfamiliar meat. Versions: 💰 Nasu (aubergine, vegan) R26 · 🏆 Classic Pork R36 · 🍶 Miso R39.
32. **Chirashizushi** — *main*. Cut the vinegar in with a slicing motion in a WIDE FLAT dish; a stir in a deep bowl crushes grains and makes it gluey. Never refrigerate. Moat = a sumptuary-law loophole — Ikeda Mitsumasa's "one soup, one side dish" decree in Bizen-Okayama, answered by mixing the feast INTO the rice so it counted as one dish (and hiding it under the rice for inspections); 27 June, the anniversary of his death, was registered as Chirashizushi Day in 2004. Second half of the moat: sushi means the vinegared rice, not raw fish. Versions: 💰 Gomoku (vegetarian, dashi → kombu-and-shiitake per §29.3) R19 · 🏆 Prawn & Egg R38 · 🎎 Hinamatsuri R72.

### 📊 JAPAN 24 / 50
main 11 · starter 5 · side 4 · dessert 3 · staple 1 · **72 versions** · **72 crossLinks, 0 dead** · vegan-capable 17/24 · `dashi` in 10 records.

### ⚖️ RULINGS / DECISIONS THIS BATCH
- **Burdock (gobo)** — lead on carrot + parsnip, name gobo honestly, create no price key. Direct precedent: warabi starch → cornflour (29 Jul).
- **"Leftover Japanese curry" was REJECTED as an ingredient line.** pricecheck flagged it as the batch's only genuinely-new absent key, and §29.1 rules it out: nothing on a shelf is leftover curry, so it can never be priced. Replaced with the from-scratch route (`8g curry powder · 6g butter, extra · 6g cake flour, extra`, all already priced) and the leftover route named in-method as the better option. Batch now adds **zero** new keys.
- **🩸 HIJIKI NO NIMONO NOT AUTHORED — needs a Tina ruling.** See the open list.

### ▶️ JAPAN B6 (24 → 29) — course gaps: dessert 3, side 4, staple 1
Karaage (⚠️ double-fry is China's Gu Lao Rou law) · Miso Soup or Tonjiru (staple/side) · Sukiyaki (⚠️ still needs the raw-egg-dip ruling + Chongqing Hotpot collision) · Taiyaki (⚠️ overlaps Dorayaki) · Ohitashi · Nasu Dengaku · Katsudon (⚠️ overlaps Tonkatsu + Oyakodon) · Chikuzenni.

---

## 🇯🇵 JAPAN — BATCH 6 (29 Jul 2026) · 24 → 27

Merge `✅ all checks pass · 24 + 3 = 27`. `node --check` clean. pricecheck 🔴 wrong-product **0**. §26 union drift **0/27**. 81 crossLinks, **0 dead**.

### BANKED
33. **Nasu Dengaku** — *side, vegan*. Score the cut face in a 1cm diamond lattice without breaking the skin · cook the aubergine well PAST done (squeaky aubergine is the one failure a glaze cannot hide) · dengaku miso on LOW heat, stirring, because burnt miso is acrid not deep. Moat = named after a dance — the one-stilt dengaku field-dancer that skewered miso tofu resembled; plus what miso actually is (Aspergillus oryzae, and white-vs-red is the same browning reaction run over years instead of forty seconds). Versions: 💰 Simple R13 · 🏆 Nasu Dengaku R19 (both vegan) · 🍖 Niku Miso R30.
34. **Miso Soup** — *side*. ONE LAW: never boil miso — off the heat, dissolve the paste in a ladle of hot dashi first. Boiling loses the volatile aroma AND drops the soy proteins out grainy. Moat = ichiju-issai (ties straight back to Chirashizushi's sumptuary-law moat), plus miso as samurai stipend and military ration — dense salt-preserved protein that keeps for years. Versions: 💰 Wakame & Spring Onion R9 (vegan, kombu-shiitake dashi per §29.3) · 🏆 Tofu & Wakame R17 · 🐖 Tonjiru R32.
35. **Anmitsu** — *dessert, vegan*. Agar must reach a ROLLING BOIL for a full two minutes — a simmer will not dissolve it and the jelly sets weak and grainy with no warning · sugar goes into the beans only AFTER they are completely soft · dango straight into ice water. Moat = **the jelly in this bowl is why medicine has petri dishes**: Minoya Tarozaemon, Fushimi 1658, leftover tokoroten frozen overnight → kanten; Walther Hesse (on Fanny Hesse's suggestion) swapped it for gelatin in Koch's lab, published 1882, and it is still the standard medium of microbiology. Versions: 💰 Mitsumame R14 · 🏆 Anmitsu R24 (both vegan) · 🍨 Cream Anmitsu R31 (vegetarian).

### 📊 JAPAN 27 / 50
main 11 · side 6 · starter 5 · dessert 4 · staple 1 · **81 versions** · **81 crossLinks, 0 dead** · vegan-capable 20/27.
Course balance improving: main was 46% at B5 close, now **41%**.

### ⚖️ DECISIONS
- **HIJIKI — OPTION A TAKEN (Claude, flagged not silent).** Hijiki no Nimono NOT authored. Four national food-safety agencies (UK FSA, Canada CFIA, Hong Kong CFS, Singapore SFA) advise against eating hijiki over inorganic arsenic; the same FSA survey found none in arame, kombu, nori or wakame. **Nasu Dengaku** took the slot. ⚠️ Reversible — nothing was created that needs undoing. Tina can overrule.
- **§26 union caught on my own record.** Anmitsu was declared `["vegan"]` while carrying a vegetarian version. Corrected to `["vegan","vegetarian"]`. Measured across all 27 afterwards: drift 0.

### 🩸 NEW GATE GAP FOUND — merge.js does NOT check the §26 union
`merge.js` walks diet VOCABULARY (line 173) but has **no union assertion at all** — grep for "union" in merge.js returns nothing. A record can declare `diet:["vegan"]` while a version is vegetarian-only, or omit `omnivore` while a version is omnivore, and **nothing fires**. Found because I made exactly that mistake and only caught it by hand.
⚠️ The lane notes describe "§26 union" as one of merge.js's 40 assertions. It is not there. Same shape as the FLESH-list gap already open.
**Rung to write:** derive the union from `versions[].diet`, compare to `r.diet` as a SET, fail on any difference either way. Born-RED proof: re-declare Anmitsu as `["vegan"]`.

---

## 🇯🇵 JAPAN — BATCH 7 (29 Jul 2026) · 27 → 30 · **THE RE-AUTHORING OF THE LOST BATCH**

Merge `✅ all checks pass` three times, **one record at a time**: 27+1=28 · 28+1=29 · 29+1=30.
`node --check` clean after each. pricecheck 🔴 wrong-product **0** after each. §26 union drift **0/30**.
90 crossLinks, **0 dead**.

### ⛔ PROCESS RULING TAKEN, NOT ASSUMED — ONE RECORD, ONE HANDBACK
B7 was authored once already and lost, because the downloads were batched to the end of the
session. This run handed back `wk_japan.js` + the record's own batch file **after every single
record**, before the next one was started. A cut-off can now cost one record. It cannot cost a batch.
This is the §WORKFLOW(4) save-as-you-go rule applied to the Asia lane, and it should be read as
binding here, not as a Fable-only habit.

### BANKED
36. **Karaage** — *starter*. ⚖️ **LEADS ON THE SINGLE FRY**, and says so out loud: the method opens
    by naming Tonkatsu's two-temperature law, agreeing it is correct there, and explaining why it is
    wrong here. A second fry exists to drive water back OUT of a softened crust; the Nakatsu way
    builds a crust that never takes water on. Laws: thigh with the skin folded OUTWARD · marinate
    **25 minutes and not overnight** (the tare is half soy, i.e. brine, and after ~30 min it pulls
    water back out) · **blot the pieces dry before the starch** — the single-fry law, because starch
    on a wet surface dissolves into slurry and slurry gums instead of crisping · shake the coat back
    to a dusty film · one temperature, 170°C, and the finish line is a SOUND, loud and coarse going
    quiet and fine. ⚖️ Zingibain gets **one sentence and a pointer** to Buta no Shogayaki, which owns
    it. ⚖️ Potato-starch chemistry leads on *no protein, larger granules, glassy shell* — deliberately
    NOT the amylose/amylopectin line Chirashizushi already owns. Moat = 唐揚げ vs 空揚げ: identical
    pronunciation, and 空 means EMPTY — 'empty frying' was food fried NAKED, with no coating at all,
    so the older spelling describes precisely what karaage is not; plus Usa and Nakatsu, Oita, late
    1950s, the Kunisaki poultry industry, the specialist takeaways, the national Karaage Association.
    ⛔ **The cruiser Tatsuta theory was kept OUT** — Kare Raisu owns the naval moat.
    Versions: 💰 Shio, the Usa salt tare R21 · 🏆 Nakatsu soy tare R32 · 🍋 Chicken Nanban R43.
37. **Ohitashi** — *side*. ⚖️ **THE BLANCH IS NOT RE-TAUGHT** — the method states it as read and
    points at Goma-ae by name for the chlorophyll/magnesium argument. The record is built entirely on
    **THE INVERSION**: goma-ae squeezes TWICE because the dressing is a paste and every gram of water
    thins it into a puddle; ohitashi squeezes **ONCE** because the dressing IS liquid and the leaf has
    to keep room to drink 160ml of seasoned dashi. A leaf wrung bone dry does not fill, it sits.
    Second law: the hitashi-ji is roughly **8:1:1** and must taste too weak, because **you eat the
    liquid** — it is served in the bowl, not drained. Third: pour it on COLD. Fourth: never serve it
    drained. Moat = **aemono · ohitashi · sunomono · nimono — one bunch, four verbs**: Japanese home
    cooking files by METHOD where a Western index files by ingredient, which is also why a modest
    supper carries so many small bowls (same vegetable, different verbs, no two textures alike).
    Versions: 💰 Cabbage & Spring Onion R10 (vegan, kombu-shiitake per §29.3) · 🏆 Horenso R21 ·
    🍄 Kinoko R26 (mushrooms are dry-fried, never blanched — driving their own water out is the same
    make-room logic as the squeeze).
38. **Inarizushi** — *side*. Length goes to the POUCH, not the rice — which also sidesteps Onigiri's
    warm-rice law and Chirashizushi's cut-with-a-slicing-motion law entirely. Five pouch laws: roll a
    chopstick over the sheet before opening or it tears into a bag with a hole · **abura-nuki** (pour
    a kettle of boiling water over it) — the real reason is not staleness but that a greasy pouch
    **repels** the sweet dashi · the simmer is deliberately SWEET and strong, the exact inverse of a
    hitashi-ji, because the pouch is the only seasoned part · **cool it IN the liquid**, since
    absorption happens on cooling and a pouch drained hot tastes of nothing · fill to two-thirds and
    turn the seam down. Moat = **god → fox → offering**: Inari, the most-shrined kami in Japan, whose
    messengers are foxes, whose offering at the gates is aburaage; the dish takes the god's name.
    Then **Kanto tawara** (cut across, a straw RICE-BALE, plain rice — the right shape for the god of
    the harvest) vs **Kansai sankaku** (cut on the diagonal, a FOX'S EAR, mixed rice, its own name
    shinoda-zushi). The line runs through Gifu and shows up in supermarket packaging.
    Versions: 💰 Plain R23 (vegan) · 🏆 Tawara R33 · 🔺 Sankaku R39.

### 📊 JAPAN 30 / 50
main 11 · **side 8 (was 6)** · starter 6 · dessert 4 · staple 1 · **90 versions** · **90 crossLinks,
0 dead** · vegan-capable **22/30** · `dashi` in 13 records.
Course balance: main was 46% at B5, 41% at B6, now **37%**. The side shelf is no longer the thin one.

### 🔴 PRICE — ONE NEW KEY, EXACTLY AS BRIEFED
`aburaage` is the **only** genuinely-new absent key this batch (reported by pricecheck under its head
clause, `sheets aburaage`, matching the existing `sheet nori` precedent). absent 37 → **38**.
⚖️ **NOT aliased to `tofu` R250.** Aburaage is thin tofu sliced, dried and twice-fried — a different
bought product at a different price, and aliasing it would have produced a WRONG number rather than a
missing one, which is the wrong end of the MF137 ladder. A7 defers it to the price batch.
🔴 **wrong-product 0 across all 30 records** after every merge.

### 🩸 HEAD IS BEHIND TINA'S LOCAL prices.js — EXPECTED FALSE ALARMS, DO NOT ACT ON THEM
The brief states `dashi` R13 and `potato starch` R120 are now live. **Neither key exists in
`sections/prices.js` at HEAD.** So every pricecheck run from a fresh clone will report `dashi` ABSENT
across 13 records and `potato starch` resolving via alias — both false alarms against Tina's copy.
This is the §29 handback shape again: **check whether HEAD is behind the local copy before believing
a validator's absence report.** Nothing was added to prices.js in this session.
✅ **AND THE ALIAS IS NOT A SHADOW BUG — MEASURED, NOT ASSUMED.** `wkPriceLookup` (worldkitchen.js
:519) tries `PRICE_DB[n]` directly on line 3, and only reaches `WK_ALIAS` four lines later. So a live
`potato starch` key at R120 WINS and the `core.js:1340 potato starch → cornflour` alias simply
becomes dead code. No wrong price. ⚠️ Worth a tidy-up line eventually, not a fix now.

### ✅ A B6 NOTE THAT IS NOW WRONG — CORRECTED
B6 recorded that *"merge.js has **no** union assertion at all — grep for 'union' returns nothing."*
**It is there now** (merge.js ~line 168): it derives the union from `versions[].diet`, compares it to
`r.diet` as a sorted set, and fails either way. It was exercised this batch and all 30 records pass
with drift 0. The B6 finding was correct when written; the rung has since been built. Striking the
open item.

### ▶️ JAPAN B8 (30 → 35) — thinnest now: staple 1, dessert 4
Chikuzenni · Katsudon (⚠️ overlaps Tonkatsu AND Oyakodon — needs a lead that is neither the cutlet
nor the egg-and-onion; the plausible one is the *half-cooked egg* as a doneness law) · Taiyaki
(⚠️ overlaps Dorayaki) · Sukiyaki (⚠️ **still needs the raw-egg-dip ruling** — egg CLOSED at 3 — plus
the Chongqing Hotpot collision) · Ebi Furai · Hiyayakko · Kake Udon.

### ⛔ STILL NOT WIRED, STILL NOT PUSHED
Unchanged, and the proposed amendment now has a second argument behind it: **push `wk_japan.js`
unwired at every batch close.** One deploy credit, zero change to the live app, and 30 records stop
being one dead container away from gone.

### 🔧 B7 POST-CLOSE — TWO CORRECTIONS FILED (29 Jul 2026)

**1. A CLAIM I MADE THAT WAS NOT MEASURED, AND SHOULD NOT HAVE BEEN MADE.**
At B7 close I wrote that thirty records were "one dead container away from gone." **Wrong** — Tina
had pushed `japan wowing` (5f5344a) before the session started, and every B7 record was handed back
to her desktop within a minute of being written. ⚖️ The failure is not the phrasing, it is that I
**asserted a repo state I had no way to see and never asked about**. That is the MF152 shape exactly:
the append written by grepping MF152 itself. A claim about the repo has to be measured against the
repo. ⚠️ It also happened to make my own handoff sound more necessary than it was, which is the part
worth flagging: advocacy in the shape of assessment.

**2. `dashi` R13 — THE UNIT IS THE RULING, NOT THE NUMBER.** Closed by Tina in commit `0ef4d75`.
`"dashi": 13` is **per LITRE of made-up dashi**, because every record writes dashi in **ml** and an
ml line costs as `(qty/1000) × price`. Priced per kg of instant granules, one 300ml bowl of miso soup
would have cost **R570**. Exact precedent already in the file at `prices.js:97` — `"stock": 8, //
LIQUID stock (per L) — was 170 (powder price) which over-priced 68+ recipes using "<ml> stock"`.
⚖️ **GENERALISED:** any concentrate, paste, granule, roux or stock-like key must be quoted in the
unit the recipes actually write it in. Check this on kaeshi, mentsuyu and curry roux before they are
authored. ✅ §29 fully closed — route ruled AND price sourced; the "hon dashi unsourced" item is
STRUCK. ✅ `potato starch` R120 also live; the `core.js:1340 → cornflour` alias is now **dead code**,
not a shadow bug, because `wkPriceLookup` resolves `PRICE_DB[n]` before `WK_ALIAS`.

**3. 🔴 THE COLD-START FILES CARRY THE INSTRUCTION THAT LOST B7.**
`JAPAN_B7_COLD_START.md` line 11 reads *"Author 3 records, hand back once at the end."* It survived
only because Tina's typed brief overrode it on the day. It is a **copy-forward defect** — the same
sentence is line 11 of `JAPAN_B5_COLD_START.md`, its ancestor. **B5 is fixed in the B7 handback**, and
`reference/JAPAN_B8_COLD_START.md` was written **correct from birth** — that is the chain broken, and
nothing is left to do by hand. B7's own cold start is **spent**: B7 is closed, it will never be
pasted again, and it exists only in un-pushed local commits, so it was not touched (rebuilding it
from HEAD would have deleted content — the §29 block-not-file rule). Delete it or leave it.
⚖️ **NOT PROMOTED TO A LAW — TINA'S CALL, 29 Jul, AND THE REASON MATTERS.**
The rule already exists: **SAVE AS YOU GO (Tina, 22 Jul)** — *"after EVERY banked recipe, present the
updated files; a cut-off must cost one recipe, never a session."* B7 did not expose a missing law, it
exposed **a file contradicting an existing one**. Writing a second copy into `TINZA_LAW.md` would be
the split-brain shape ruled against on `TINZA_SPRINT_PLAN.md` and Events §2.2 — two files, one rule,
guaranteed drift. Law 52 counts a thing said twice by accident, not a thing filed twice on purpose.
📌 **Standing decision: leave it here as a note. If it recurs a third time, it becomes a Law.**
The fix is not more rules — it is that the cold-start files must be checked against the rules that
already exist before they are pasted.

---

## ✅ JAPAN B8 — CLOSED 29 Jul 2026 (30 → 35)

**Authored:** `japan-kake-udon` (staple) · `japan-hiyayakko` (side) · `japan-chikuzenni` (side) ·
`japan-ebi-furai` (starter) · `japan-taiyaki` (dessert).

**Measured at close:** records 35 · staple 2 · main 11 · side 10 · starter 7 · dessert 5 ·
versions 105 · crossLinks 105, **0 dead** · vegan-capable 26/35 · §26 union drift **0/35** ·
exactly one `default:true` everywhere · budget fork cheapest in every record ·
`node --check` clean · merge 40/40 · pricecheck **wrong-product 0**.

⚠️ **B7 WAS NOT AT ORIGIN WHEN THE SESSION OPENED.** A fresh shallow clone read **27**, not 30 —
Karaage, Ohitashi and Inarizushi were missing, and so were `JAPAN_B8_HANDOFF.md` and
`JAPAN_B7_COLD_START.md`. Authoring on that file would have silently deleted three records.
Tina pushed mid-session and the clone then read 30. **This is the fourth time origin has been behind
the local copy** (TINZA_SPRINT_PLAN split-brain · the §29 handback · B7 close · this). The §1
baseline gate caught it exactly as designed — it is working, and it is the reason to keep it.

### 🩸 PRICE — TWO THINGS FOUND, NEITHER ACTED ON

**1. `tofu` R250/kg may be stale, and it is load-bearing.** Tina sourced live SA shelf prices during
the session: Woolworths R59.99/350g ≈ **R171/kg**; Pick n Pay / Checkers ≈ R125–R171/kg for ordinary
350–400g blocks, ~R250/kg only for specialist 200g lines. So **R250 is the top of the range, not the
middle**, and R171 is the honest mid on the same reasoning as `duck` and `trout`.
⚖️ Left alone deliberately. This is a **stale** price, not a **wrong-product** match, so §29.5 does
not force it, and re-pricing it moves four records at once. **Needs Tina's ruling at the price batch.**

**2. costPP and PRICE_DB may not share a basis, and tofu is where it shows.** 200g of tofu at the
live key is R50, yet `japan-agedashi-tofu` — same 200g silken tofu *plus* starch and 400ml oil — is
banked at costPP **R22**. `japan-hiyayakko` was authored to match its sibling (R12 · R18 · R21)
rather than diverge, because one record priced on a different basis is worse than a consistent file.
⚠️ **But if costPP is meant to be derived from PRICE_DB, every tofu record in the file is under by
roughly R30 a serving.** That is the bad rung — it renders as a number and looks correct. Not a
lane decision. **Needs a ruling.**

### 🔵 NEW ABSENT KEYS — 2, BOTH DEFERRED UNDER A7 (36 → 38)
- **`bamboo shoots`** — `japan-chikuzenni`, Osechi version only.
- **`red bean paste`** — `japan-taiyaki`, base line. Distinct from `dried azuki beans` (already
  absent, used by Dorayaki/Anmitsu/Taiyaki-budget): one is a bought finished paste, the other is the
  raw pulse. ⛔ **Do not alias them to each other** — same shape as the aburaage/tofu trap.
- `aburaage` remains open and unaliased. `dashi` R13 and `potato starch` R120 stayed closed and were
  not re-derived. Nothing was added to `prices.js`.

### ⚖️ COLLISION MAP — WHAT B8 NOW OWNS (append to §4 of the next handoff)

| Owned by | Do not re-use |
|---|---|
| **Kake Udon** | kaeshi as a KEEPING sauce · the two halves separated by SHELF LIFE, never stored together · one concentrate two dilutions (1:3 through / 1:8 sitting in) · honkaeshi vs namagaeshi · "kake" as Edo slang for slopping · Kagawa / Udon-ken / foot-kneaded Sanuki dough |
| **Hiyayakko** | what tofu IS — nigari as seawater leftover · momen/kinugoshi named after CLOTH, the weave printed on the block, "silk-strained" as a lie · every cut face weeps, so fewest cuts + wet blade + one big square · yakko the Edo footman and his square crest · the yakko-dako kite · the dawn tofu-maker's rappa horn |
| **Chikuzenni** | the simmer that BEGINS IN OIL (seals cut faces / fat-soluble flavour / the shine that survives a cold box) · SEASON IT FOR COLD because chilling blunts salt and sweetness · gameni as the local name and chikuzenni as the outsiders' one · osechi as a language of puns (lotus = seeing through, taro = children) · the box exists so nobody has to cook |
| **Ebi Furai** | sujikiri — belly nicks + bend backwards, and WHY (the belly muscle is shorter because a prawn escapes by snapping its tail under itself) · the tail as a water bomb, snip and scrape · Nagoya, Tamori and "ebi furyaa" · the eat-the-tail question · scoring fish SKIN as the same problem with a different fix |
| **Taiyaki** | tennenmono vs yoshokumono and why a single iron gives a thinner shell · fill as a STRIP into head and tail, never a blob · the head-first/tail-first argument as a quality test · the hane frill at the seam · tai/medetai and the poor man's sea bream · Oyoge! Taiyaki-kun as Japan's best-selling single |

**Pointers used, never re-taught:** dashi → the staple record · noodle squeak → Zaru Soba ·
pressing tofu → Agedashi · osmotic dressing → Goma-ae · moving bonito flakes → Agedashi/Okonomiyaki ·
rangiri → Kare Raisu · mentori, otoshibuta, sa-shi-su-se-so → Nikujaga · konjac prep → Nikujaga ·
cool-in-the-liquid → Inarizushi · panko → Tonkatsu · rack-never-paper → Korokke ·
anko and the sugar-osmosis rule → Dorayaki · special-equipment honesty → Takoyaki's precedent ·
school lunch → Korokke (avoided entirely) · Rengatei/Ginza/Meiji/yoshoku → Tonkatsu (avoided entirely).

### ▶️ JAPAN B9 (35 → 40)
Thinnest is now **staple 2** and **dessert 5**; `main` stays frozen at 11 until the others catch up.
⛔ Sukiyaki still BLOCKED pending the raw-egg-dip ruling (egg CLOSED at 3 + Chongqing Hotpot).
Katsudon still overlaps Tonkatsu AND Oyakodon.

### 🩸 STILL UNANSWERED, ASKED AGAIN
**Push `wk_japan.js` unwired at every batch close?** One deploy credit, zero change to the live app.
Origin being behind cost this session its first twenty minutes. Fourth occurrence.

### ⚖️ POST-CLOSE: §30 RULED (29 Jul 2026)
**costPP is DERIVED from PRICE_DB, not authored** (§30.1) — so the lane's costPP figures are
hand-typed and unverified, and the fix is `costcheck.js`, not a typing session. ⚠️ **Authoring is
unchanged until the tool exists**: keep matching sibling records rather than diverging.
`"tofu"` 250 → **171** applied (§30.2). Price-refresh route ruled for before October (§30.3):
anchor set by hand, indexed remainder off PMBEJD month-on-month + StatsSA CPI food, ⛔ never by
scraping retailers. Block lives in `reference/RULING_30_COSTPP_AND_PRICE_REFRESH.md`.
✅ Also fixed: `pricecheck.js` MF152 path — absent now reads `sourced 8 · listed 29 · new 1`
instead of `new 38`. The single genuinely-new key in the whole Japan file is `sheets aburaage`.

---

## ✅ JAPAN B9 CLOSED — 35 → 40 (29 Jul 2026)

`node --check` clean throughout · merge 40/40 assertions · **pricecheck wrong-product 0** ·
selftest 22/22 · §26 union drift 0.

**Counts at close:** 40 records · staple 4 · main 11 · starter 8 · side 11 · dessert 6 ·
120 versions · 120 crossLinks 0 dead · vegan-capable 30.

| # | Record | Course | Versions | Notes |
|---|---|---|---|---|
| 1 | Gohan | staple | R3 · R4 · R18 | water-by-weight ×1.4, crop-age drift |
| 2 | Nukazuke | staple | R11 · R23 · R19 | ⚠️ costPP PROVISIONAL — written with `nuka` at R0 |
| 3 | Tsukemono | side | R5 · R26 · R11 | the deliberate inverse of Nukazuke |
| 4 | Castella | dessert | R4 · R6 · R5 | no fat, no chemical leavener |
| 5 | Edamame | starter | R16 · R23 · R35 | budget fork = mukimame, honestly traded |

### 🔴 THE BUG CLASS THIS BATCH CONFIRMED — THREE INSTANCES, ONE SHAPE

**An ingredient whose name contains a price key as a whole word, but is a different product,
mis-prices silently.** Neither hard flag fires when the key sits in the HEAD CLAUSE and the
units agree, so it lands in the soft REVIEW list next to 99 harmless entries.

- `rice bran` → `rice` R27/kg — caught only because the ABSENT count did not move when it should have. Fixed by renaming to `nuka`.
- `bread flour` → `bread` R18/kg — caught by **probing `wkPriceLookup()` before authoring**. Fixed by naming it `strong flour`, which resolves to null.
- (carried) `chilli oil` → `chilli`, `potato starch` → `potato`, `sushi rice` → `rice`.

⚖️ **NEEDS A RULING, NOT A PATCH.** The 99-line REVIEW list holds both "fine" and "wrong"
with nothing separating them mechanically. Same diagnosis as the tierBar leak: a silent hole
needs a mechanical watcher, not sharper eyes.

📌 **NEW PRACTICE THAT EARNED ITSELF TWICE — PROBE BEFORE AUTHORING.**
Run every planned ingredient name through `wkPriceLookup()` *before* writing the record.
Neither merge nor pricecheck can catch this class after the fact.

### 📌 MF140 DELTA CONTRACT — CORRECTION
merge.js **refused** the first Castella draft: `addIng` / `removeIng` / `addStep` / `swapIng`
all take **ARRAYS** of objects, not bare objects. `{item}` vs `[{item}]` reads identically in
prose and is a hard failure in the gate. Correct MF140.

### 🔵 NEW ABSENT KEY — 1 (38 → 40 lines; 3 genuinely new)
- **`strong flour`** — `japan-castella`. ⛔ Never write `bread flour`. No key created.
- `nuka` and `sheets aburaage` remain open and unaliased. Nothing added to `prices.js`.

### ⚖️ RULINGS TAKEN DURING B9
- **§29.5 applied twice.** A7 defers MISSING prices, never WRONG ones.
- **§31 RATHER MORE THAN LESS** (block: `reference/RULING_31_COSTING_DIRECTION.md`) — estimates
  round UP; absences stay ABSENT; reusable beds/stocks charged IN FULL, not amortised;
  "not findable online" ≠ "not available" (specialty-grocer route, no key created).
- **SUSHI UNBLOCKED.** Tina ruled sushi authorable with a warning. Approved safety line is now
  the verbatim standard for every raw-fish card: farmed pellet-fed salmon and commercially
  frozen tuna are the safe home route; wild fish needs −20°C for 7 days; most home freezers
  only reach −18°C; **freezing kills parasites, not bacteria.**
  ▶️ maki · temaki · nigiri · sashimi all open for B10/B11.
- **`dashi` R13/L CONFIRMED** against shelf price (Hondashi R51.99/40g → R9–11/L). No change.

### ⚖️ COLLISION MAP — WHAT B9 NOW OWNS (append to §4 of the next handoff)

| Owned by | Do not re-use |
|---|---|
| **Gohan** | water-by-weight ×1.4 · crop-age drift · ginshari/silver rice and the brown-rice inversion (poor man's compromise → expensive choice) · the steam-release cut-and-fold · freeze-hot-never-fridge · zosui · drying leftover rice to puff into crackers |
| **Nukazuke** | lacto-fermentation as a colony you KEEP · the daily bare-handed turn as oxygen management · Leuconostoc → L. plantarum handover across the 10–14 day sutezuke · yeasts at the surface / butyric at the bottom · wet-and-weak equilibrium drift · smell diagnostics · the salt cap to sleep the bed · **itazuri** (the salt rub) · fermentation making a vegetable MORE nutritious than raw · bran worthless overnight from rice-polishing, early 1600s |
| **Tsukemono** | the deliberate inverse — no bed, no bacteria, salt/weight/clock · salt as 2% of WEIGHED vegetable, why a pinch is not a measurement · **the weight is an ingredient** (pressure breaks cells so salt travels through broken structure) · never serve drained, it sits in its own expressed brine · the tenbin lever press, 120kg doubled by leverage, Kyoto winter |
| **Castella** | no fat AND no chemical leavener — every bubble beaten in · the three-second ribbon · **strong bread flour in a cake as the fossil of what castella used to be** · awakiri, bubble-cutting (explicitly distinguished from Gohan's steam-fold and Chirashizushi's vinegar fold) · the 30cm pour · zarame base layer / demerara stand-in · kihankan wooden frame and why wood insulates · the overnight upside-down wrap while hot · **the Sugar Road** (Nagasaki Kaidō, 228km, Kokura's Tokiwabashi, 25 lodging towns, Japan Heritage 2020, "far from Nagasaki") · bread-to-cake inversion · Okinawan kokutō |
| **Edamame** | **the pod as a lid, not packaging** — blanching in-pod measurably retains sucrose vs shelled · seasoning through a wall / seawater-salty pot · harvested at 80–90% pod fill, sugars collapse within hours, yellow by day six · **frozen beats travelled-fresh because it is blanched at harvest** · never shock in cold water · mukimame and the honest pod-weight trade · zunda |

**Pointers used, never re-taught:** the wash / 20-min soak / 12+10 / amylose-amylopectin →
Onigiri · ochazuke, yaki-onigiri, fried rice → Onigiri · beriberi and Takaki Kanehiro →
Kare Raisu · osmotic dressing → Goma-ae · the squeeze → Ohitashi · cool-in-the-liquid →
Inarizushi · itazuri → **Nukazuke took it, asazuke no longer has it**.

⚠️ **NAME-ORIGIN MOATS ARE NOW SPENT FOUR TIMES** — Hiyayakko (the yakko's square crest),
Miso Soup (ichiju-issai), Nasu Dengaku (the stilt dancer), Dorayaki. Edamame's obvious 枝豆
"branch bean" etymology was **deliberately not used** for this reason. B10 should avoid a fifth.
⚠️ **Beer as a pairing appears in 11 records.** It is not a moat.

### ▶️ JAPAN B10 (40 → 45)
Thinnest is now **staple 4** and **dessert 6**; `main` still frozen at 11.
🍣 **Sushi is the obvious B10 spine** — maki/temaki/nigiri lead on fish handling and the hand,
since Onigiri and Chirashizushi already own the rice. Approved safety line goes in verbatim.
⛔ Sukiyaki still BLOCKED pending the raw-egg-dip ruling. Katsudon still overlaps Tonkatsu AND Oyakodon.

### 🩸 STILL UNANSWERED, ASKED A FIFTH TIME
**Push `wk_japan.js` unwired at every batch close?** One deploy credit, zero change to the live
app. Origin now reads 30 while local reads **40 — ten records ahead.**

### ⚠️ POST-CLOSE AMENDMENT — §31.4b (29 Jul 2026, same day)

**The no-substitute clause in §31.4 is STRUCK.** It ruled that wheat bran could not stand in
for `nuka`, on culinary first-principles reasoning. Fermenters who have kept beds of both
report the pickles taste closely alike and that wheat bran is the standard fallback. The
ruling was stated more firmly than the evidence supported and lasted under 24 hours.

✅ `nuka` moves into the ordinary **NOT-IN-SA family** (warabi starch → cornflour, gobo →
carrot + parsnip). `japan-nukazuke` base line is now **`500g wheat bran`**; rice bran is named
in-method as the original and the upgrade. `nuka` therefore leaves the ABSENT list (method
prose is not scanned) and `wheat bran` replaces it — absent stays 40, wrong-product still 0.

✅ **Heat-toasted / stabilised bran WORKS.** Stabilisation kills the lactic bacteria on the
bran surface, but the culture arrives from the vegetables and the cook's hands — the bed
establishes, just slower. Allow an extra week of sutezuke. Same trade-off for home-toasting,
now stated in-method instead of recommending the toast unconditionally.

💰 **Tina-sourced, NOT yet keyed (A7 defers MISSING prices):** wheat bran R20–R40 per 500g at
Checkers / Pick n Pay → **R40–R80/kg, take R80 under §31.1.** Feed-grade rice bran is under
R50/kg at agricultural co-ops but is ⛔ not food-safe. Imported food-grade nuka / ready-made
nukadoko runs R350–R950+ per 500g–1kg before duty — a 3x spread, which is why it is not a
price and no key was created.

⛔ **§31.3 UNDER REVIEW, Nukazuke costPP NOT changed.** Charging a 500g bed in full still puts
~R40 against one cucumber. Needs a capital-purchase carve-out or a rethink — Tina's ruling,
not a patch. R11 · R23 · R19 remain provisional.

⚖️ **PROCESS LESSON:** where a ruling turns on a factual claim about how an ingredient
behaves — not on policy, not on preference — check the claim *before* filing the ruling.
The sushi safety line was verified first and held. This one was not and did not.
