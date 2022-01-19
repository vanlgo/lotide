const { assert } = require('chai');
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("should pass assertion where assert checks if true", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  it("should not pass assertion if assert checks if false", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
});