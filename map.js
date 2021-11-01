const eqArrays = function(firstArray, secondArray) {
  let match;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
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

const assertArraysEqual = function(x, y) {
  const matchCheck = eqArrays(x, y);
  if (matchCheck) {
    console.log(`✅✅✅ Assertion Passed:  ${x} === ${y}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${x} !=== ${y}`);
  }
};

const words = ["Slow", "Dancing", "in", "the", "Dark"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words, results1);