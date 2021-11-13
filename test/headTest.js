const { assert } = require('chai');
const head = require('../head');

// const assertEqual = require('../assertEqual');
// //Head
// assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");

// Mocha Testing

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});