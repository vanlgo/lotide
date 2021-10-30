// FUNCTION IMPLEMENTATION
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

const eqObjects = function(object1, object2) {
  let check;
  const oneKeys = Object.keys(object1); const twoKeys = Object.keys(object2);
  if (oneKeys.length === twoKeys.length) {
    for (const key of oneKeys) {
      const tempOne = object1[key]; const tempTwo = object2[key];
      if (Array.isArray(tempOne)) {
        if (eqArrays(tempOne, tempTwo)) {
          check = true;
        } else {
          return check = false;
        }
      } else if (object1[key] === object2[key]) {
        check = true;
      } else {
        return check = false;
      }
    }
  } else {
    return check = false;
  }
  return check;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
  } 
};

assertObjectsEqual({a: [1, 3, 4], b: 1, c: 1}, {a: 1, b: 1, c: 1}); // fail

assertObjectsEqual({a: 1, b: 1, c: 1}, {a: 1, b: 1, c: 1}); // pass