const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;