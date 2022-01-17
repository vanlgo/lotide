const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const oneKeys = Object.keys(obj1);
  const twoKeys = Object.keys(obj2);

  if (oneKeys.length !== twoKeys.length) {
    return false;
  }

  for (const key of oneKeys) {
    const keyOne = obj1[key];
    const keyTwo = obj2[key];
    if (Array.isArray(keyOne)) {
      if (!eqArrays(keyOne, keyTwo)) {
        return false;
      }
    } else if (keyOne !== keyTwo) {
      return false;
    }
  }

  return true;
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