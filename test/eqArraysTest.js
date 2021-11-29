const { assert } = require('chai')
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("should pass assertion", () => {
    const words = ['hello', 'world', 'lighthouse'];
    assert.isTrue(eqArrays(words, ['hello', 'world', 'lighthouse']));
  });

  it ("should not pass assertion if arrays are same length, with different values", () => {
    const wrongWords = ['I', 'just', 'want'];
    assert.isFalse(eqArrays(wrongWords, ['hello', 'world', 'lighthouse']));
  });

  it ("should not pass assertion, if arrays not same length", () => {
    assert.isFalse(eqArrays(['hello', 'world', 'lighthouse'], ['world', 'lighthouse']));
  });
})