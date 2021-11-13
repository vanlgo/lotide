// const assertEqual = require('./assertEqual');

// should refactor, will attempt later
const eqArrays = function(firstInput, secondInput) {
  if (firstInput.length === secondInput.length) {
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i] === secondInput[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

module.exports = eqArrays;