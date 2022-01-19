const assertEqual = (actual, expected) => {
  // if-else statement checking if two values are identical
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    return false;
  }
};


module.exports = assertEqual;