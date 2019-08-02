// Rectangle.test.js
const assert = require('assert');
const rectangle = require('../Rectangle');


describe('rectangle', () => {
  it('is a function that accepts two arguments', () => {
    assert.strictEqual(typeof rectangle, 'function');
    assert.strictEqual(rectangle.length, 2);
  });
  it('returns the area correctly', () => {
    assert.strictEqual(new rectangle(10, 10).getArea(), 100);
  });
  it('returns the perimeter correctly', () => {
    assert.strictEqual(new rectangle(10, 10).getPerimeter(), 40);
  });
  it('determines if it is a square', () => {
    assert.strictEqual(new rectangle(10,10).isSquare(), true);
  });
});
