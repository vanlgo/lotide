
// const assertEqual = require('./assertEqual');

const tail = function(arrayTail) {
  let a = arrayTail.slice();
  a.shift();
  return a;
};

module.exports = tail;


// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3);

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse"); 
// assertEqual(result[1], "Labs"); 