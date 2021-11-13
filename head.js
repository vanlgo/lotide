const assertEqual = require('./assertEqual');

const head = function(arrayHead) {
  return arrayHead.shift();
};

module.exports = head;