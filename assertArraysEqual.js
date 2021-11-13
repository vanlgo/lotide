const eqArrays = require('./eqArrays');

const assertArraysEqual = function(x, y) {
  const matchCheck = eqArrays(x, y);
  if (matchCheck) {
    console.log(`✅✅✅ Assertion Passed:  ${x} === ${y}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${x} !=== ${y}`);
    return false;
  }
};

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = assertArraysEqual;