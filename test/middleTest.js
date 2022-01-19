const { assert } = require('chai');
const middle = require('../middle');

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