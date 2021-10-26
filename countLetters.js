const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(toCount) {
  const lettersCounted = {};
  for (const i of toCount) {
    if (lettersCounted[i]) {
      lettersCounted[i]++;
    } else {
      if (i !== " ") {
        lettersCounted[i] = 1;
      }
    }
  }
  return lettersCounted;
};

const tryString = "lighthouse in the house";
assertEqual(countLetters(tryString), tryString);