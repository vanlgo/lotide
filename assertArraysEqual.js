const eqArrays = function(firstArray, secondArray) {
  let match;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        match === true;
      } else {
        return match === false;
      }
    }
  } else {
    match === false;
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

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);