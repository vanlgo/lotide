// const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let a = arr.slice(); // creating new array to not disturb input array
  a.shift();
  return a;
};

// test code replaces with mocha and chai test

module.exports = tail;