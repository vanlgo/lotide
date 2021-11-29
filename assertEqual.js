const assertEqual = function(actual, expected) {
  // if-else statement checking if two values are identical
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports = assertEqual;