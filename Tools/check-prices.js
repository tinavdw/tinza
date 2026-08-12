// Quick price-check: report PRICE_DB keys/aliases for a list of names.
const fs = require('fs');
const s = fs.readFileSync('sections/prices.js', 'utf8');
const keys = ['clam','clams','cockles','baby clams','pandan','glutinous rice flour','glutinous rice','tapioca starch','rice paper wrappers','coconut milk','mung beans','red kidney beans','black eyed beans','green papaya','sweet soy sauce','tamarind','rock sugar','honey','star anise','cinnamon','chickpeas','paneer','ice cream','gelatin','cassava','banana leaves','sugar cane','pork mince','prawns','squid','mussels'];
keys.forEach(k => {
  const m = s.match(new RegExp('"' + k + '"\\s*:\\s*([0-9.]+)'));
  const al = (s.match(new RegExp('"' + k + '"\\s*:\\s*"([^"]+)"')) || [])[1];
  console.log((k + ':').padEnd(22), m ? ('R' + m[1]) : (al ? 'ALIAS→' + al : 'ABSENT'));
});