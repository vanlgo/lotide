const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKey = function(input, callback) {
  let find = "";
  const keyArray = Object.keys(input);
  for (const a of keyArray) {
    if (callback(input[a])) {
      return find = a;
    }
  }
  return find;
};

const temp = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const results = findKey(temp , x => x.stars === 2)

assertEqual(temp, results);