const { assert } = require('chai');
const middle = require('../middle');

// Middle
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// const example = [1, 2, 3];
// assertArraysEqual(middle(example), example);

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns 'in' for [slow, dancing, in, the, dark]", () => {
    assert.deepEqual(middle(['slow', 'dancing', 'in', 'the', 'dark']), ['in']);
  });

  it("returns '3, 4' for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});