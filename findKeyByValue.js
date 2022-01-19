const assertEqual = require("./assertEqual");

const findKeyByValue = (key, value) => {
  let foundValue;
  for (const k in key) {
    if (key[k] === value) {
      foundValue = k;
    }
  }
  return foundValue;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;