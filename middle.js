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

const middle = function(findMiddle) {
  const middle = [];
  if (findMiddle.length <= 2) {
    return middle;
  } else {
    if (findMiddle.length % 2 === 0) {
      let even = (findMiddle.length / 2) - 1;
      middle.push(findMiddle[even]);
      middle.push(findMiddle[even++]);
      return middle;
    } else if (findMiddle.length % 2 !== 0) {
      const odd = Math.round((findMiddle.length / 2) - 1);
      middle.push(findMiddle[odd]);
      return middle;
    }
  }
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const example = [1, 2, 3];
assertArraysEqual(middle(example), example);