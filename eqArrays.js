const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// should refactor, will attempt later
const eqArrays = function(firstInput, secondInput) {
  let match;
  if (firstInput.length === secondInput.length) {
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i] === secondInput[i]) {
        match = true;
      } else {
        return match = false;
      }
    }
  } else {
    match = false;
  }
  return match;
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
