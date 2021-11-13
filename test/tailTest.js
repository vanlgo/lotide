const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns 'dancing', 'in', 'the', 'dark' for ['slow', 'dancing', 'in', 'the', 'dark']", () => {
    assert.deepEqual(tail(['slow', 'dancing', 'in', 'the', 'dark']), ['dancing', 'in', 'the', 'dark']);
  });
});