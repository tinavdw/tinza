// patch-batch6.js — fix §26 diet unions + 2 absent-key deltas in batch6.js, then self-delete.
var fs = require('fs');
var path = require('path');
var f = path.join(__dirname, 'batch6.js');
var s = fs.readFileSync(f, 'utf8');
var n = 0;
function rep(from, to) {
  var i = s.indexOf(from);
  if (i < 0) throw new Error('NOT FOUND: ' + from.slice(0, 110));
  s = s.slice(0, i) + to + s.slice(i + from.length);
  n++;
}

// 1. §26 — sinigang-na-hipon record diet = union of versions (omnivore, vegan).
rep('"course":"main","type":["main","soup","shrimp","sour","everyday","fast","family","one-pot"],"diet":["omnivore"],',
    '"course":"main","type":["main","soup","shrimp","sour","everyday","fast","family","one-pot"],"diet":["omnivore","vegan"],');
console.log('fix 1 applied');

// 2. §26 — suman record diet = union of versions (all vegan).
rep('"course":"dessert","type":["dessert","snack","rice","steamed","coconut","sweet","street-food","celebration"],"diet":["vegan","vegetarian"],',
    '"course":"dessert","type":["dessert","snack","rice","steamed","coconut","sweet","street-food","celebration"],"diet":["vegan"],');
console.log('fix 2 applied');

// 3. Longsilog — longganisa is ABSENT; swap to the resolvable `sausage` key, keep the name in prose.
rep("{\"from\":\"100g beef rump\"},{\"from\":\"15ml soy sauce\"},{\"from\":\"10ml vinegar\"},{\"from\":\"8g sugar\"}],\"addIng\":[{\"item\":\"80g longganisa or other sweet garlic sausage\",\"after\":\"80g rice\"}]",
    "{\"from\":\"100g beef rump\"},{\"from\":\"15ml soy sauce\"},{\"from\":\"10ml vinegar\"},{\"from\":\"8g sugar\"}],\"addIng\":[{\"item\":\"80g sausage\",\"after\":\"80g rice\"}]");
console.log('fix 3 applied');

// 4. Suman sa Ibus — jackfruit is ABSENT; drop from addIng, name in prose only.
rep(',{"item":"30g jackfruit (tinned, drained and chopped)","after":"80g glutinous rice"}', '');
console.log('fix 4 applied');

fs.writeFileSync(f, s);
console.log('wrote ' + f + ' with ' + n + ' replacements (4 expected)');
fs.unlinkSync(__filename);
console.log('patch script deleted');