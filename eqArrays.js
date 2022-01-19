// const assertEqual = require('./assertEqual');

const eqArrays = function(firstInput, secondInput) {
  let check = false;
  if (firstInput.length === secondInput.length) {
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i] === secondInput[i]) {
        check = true;
      } else {
        return check = false;
      }
    }
  }
  return check;
};

module.exports = eqArrays;