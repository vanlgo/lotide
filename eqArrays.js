// const assertEqual = require('./assertEqual');

// should refactor, will attempt later
const eqArrays = function(firstInput, secondInput) {
  let match;
  if (firstInput.length === secondInput.length) {
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i] === secondInput[i]) {
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

module.exports = eqArrays;