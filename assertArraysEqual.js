const eqArrays = require('./eqArrays');

const assertArraysEqual = (x, y) => {
  // variable  that calls eqArrays to check if variables are equal
  const matchCheck = eqArrays(x, y);
  if (matchCheck) {
    console.log(`✅✅✅ Assertion Passed:  ${x} === ${y}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${x} !=== ${y}`);
    return false;
  }
};

// test code replaces with mocha and chai test

module.exports = assertArraysEqual;