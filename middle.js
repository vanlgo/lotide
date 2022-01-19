// const assertArraysEqual = require('./assertArraysEqual');

const middle = (findMiddle) => {
  const middle = [];
  if (findMiddle.length > 2) {
    if (findMiddle.length % 2 === 0) {
      const even = (findMiddle.length / 2) - 1;
      middle.push(findMiddle[even], findMiddle[even + 1]);
    } else if (findMiddle.length % 2 !== 0) {
      const odd = Math.round((findMiddle.length / 2) - 1);
      middle.push(findMiddle[odd]);
    }
  }
  return middle;
};

// test code replaces with mocha and chai test

module.exports = middle;