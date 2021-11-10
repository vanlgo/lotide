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

const flatten = function(nestArray) {
  let newArray = [];
  for (const i of nestArray) {
    if (Array.isArray(i)) {
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