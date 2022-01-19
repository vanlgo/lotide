// const assertEqual = require('./assertEqual');

const head = (arrayHead) => {
  const arr = arrayHead.slice(); // creating new array to not disturb input array
  return arr.shift(); // taking beginning value and returning that
};

// test code replaces with mocha and chai test

module.exports = head;