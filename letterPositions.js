const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const s of sentence) {
    if (results[s]) {
      results[s].push(i);
    } else {
      if (s !== " ") {
        results[s] = [i];
      }
    }
    i++;
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;