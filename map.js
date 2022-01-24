const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE

const words = ["Slow", "Dancing", "in", "the", "Dark"];

const results1 = map(words, word => word[0]);
const test = ['S', 'D', 'i', 't', 'D'];

assertArraysEqual(test, results1);

module.exports = map;