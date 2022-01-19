const assertArraysEqual = require("./assertArraysEqual");

const flatten = (nestArray) => {
  let newArray = [];
  for (const i of nestArray) {
    if (Array.isArray(i)) { // Checks if the next value in the array is an array
      let tempArray = i.slice();
      for (const t of tempArray) {
        newArray.push(t);
      }
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};

const flattened = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual(flatten(flattened), flattened));

module.exports = flatten;