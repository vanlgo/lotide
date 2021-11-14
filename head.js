// const assertEqual = require('./assertEqual');

const head = function(arrayHead) {
  let arr = arrayHead.slice();
  return arr.shift();
};

module.exports = head;