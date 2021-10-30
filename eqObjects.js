const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false