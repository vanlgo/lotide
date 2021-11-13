const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArrayEqual", () => {
  it("should pass assertion if const words equals ['hello', 'world', 'lighthouse']", () => {
    const words = ['hello', 'world', 'lighthouse'];
    assert.isTrue(assertArraysEqual(words, ['hello', 'world', 'lighthouse']));
  });

  it ("should not pass assertion, if length of arrays are not the same", () => {
    const short = ['world', 'lighthouse'];
    assert.isFalse(assertArraysEqual(short, ['hello', 'world', 'lighthouse']));
  });
})