const assertEqual = require('./assertEqual');

const head = function(arrayHead) {
  let a = arrayHead[0];
  return a;
};


assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
