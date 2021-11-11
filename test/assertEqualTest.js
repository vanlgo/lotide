const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

//Assert Equal
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Head
assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");

// Tail
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS

//Assert Array Equal
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);