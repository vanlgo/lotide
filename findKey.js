const assertEqual = require('./assertEqual');

const findKey = function(input, callback) {
  const keyArray = Object.keys(input);
  for (const k of keyArray) {
    if (callback(input[k])) {
      return k;
    }
  }
  return null;
};

const temp = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results = findKey(temp , x => x.stars === 2);
assertEqual("noma", results);

const results1 = findKey(temp , x => x.stars === 4);
assertEqual(null, results1);


module.exports = findKey;