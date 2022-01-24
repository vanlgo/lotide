const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = function(counted) {
  const lettersCounted = {};
  for (const i of counted) {
    if (lettersCounted[i]) {
      lettersCounted[i]++;
    } else {
      if (i !== " ") {
        lettersCounted[i] = 1;
      }
    }
  }
  return lettersCounted;
};


// TEST CODE
const test = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertObjectsEqual(countLetters("lighthouse in the house"), test);

module.exports = countLetters;