// One-shot resolver for the wkPool() merge-conflict block in worldkitchen.js
const fs = require('fs');
const p = __dirname + '/sections/worldkitchen.js';
let c = fs.readFileSync(p, 'utf8');

const cleanPool = `/* Combined recipe pool from the data modules. */
function wkPool(){
  return [].concat(window.WK_AFRICA || [], window.WK_EUROPE || [], window.WK_WORLD || [], window.WK_SOUTHAFRICA || [], window.WK_FRANCE || [], window.WK_EUROPE_GERMANY || [], window.WK_EUROPE_NIRELAND || [], window.WK_CHINA || [], window.WK_JAPAN || [], window.WK_KOREA || [], window.WK_INDONESIA || [], window.WK_THAILAND || [], window.WK_VIETNAM || [], window.WK_PHILIPPINES || []);
}
`;

// Replace everything from the stray "return [].concat(window.WK_AFRICA" (leftover junk)
// up to (but not including) the "/* country ->" comment, with the clean pool block.
const before = '/* country -> [continent, region] using the UN geoscheme.';
const re = /  return \[\]\.concat\(window\.WK_AFRICA[\s\S]*?(?=\/\* country -> \[continent, region\] using the UN geoscheme\.)/;
if (!re.test(c)) { console.error('PATTERN NOT FOUND'); process.exit(1); }
c = c.replace(re, cleanPool);

// Sweep-safety: remove any other conflict markers that keep both PH + KR.
c = c.replace(/<<<<<<< [^\n]*\n/g, '');
c = c.replace(/=======\n?/g, '');
c = c.replace(/>>>>>>> [^\n]*\n/g, '');

fs.writeFileSync(p, c);
// Verify both entries exist and no markers remain
const markers = (c.match(/<<<<<<<|=======|>>>>>>>/g) || []).length;
const ph = c.includes('"Philippines":["Asia","South-eastern Asia"]');
const kr = c.includes('"Korea":["Asia","Eastern Asia"]');
const koreaPool = c.includes('window.WK_KOREA || []');
console.log('markers left:', markers);
console.log('Philippines geo:', ph);
console.log('Korea geo:', kr);
console.log('WK_KOREA in pool:', koreaPool);
console.log(markers === 0 && ph && kr && koreaPool ? 'OK' : 'CHECK NEEDED');