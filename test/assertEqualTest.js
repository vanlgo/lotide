// Don't need anymore
const { assert } = require('chai');
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("should pass assertion", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  it ("should not pass assertion", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
})