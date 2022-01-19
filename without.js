const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let newArray = source.slice();
  itemsToRemove.forEach((remove) => {
    for (const n of newArray) {
      if (n === remove) {
        console.log(n);
        newArray.splice(n, 1);
      }
    }
  });
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;