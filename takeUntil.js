const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let taken = [];
  for (const a of array) {
    if (callback(a)) {
      return taken;
    } else {
      taken.push(a);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expect1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expect1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expect2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, expect2);

module.exports = takeUntil;