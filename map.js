const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["Slow", "Dancing", "in", "the", "Dark"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words, results1);

module.exports = map;