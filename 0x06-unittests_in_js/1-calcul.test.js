/**
 * Test file of 1-calcul module
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3 rounded after rounding both', () => {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
  });

  it('should return 5 when adding 1 and 3.7 rounded after rounding both', () => {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.7), 5);
  });

  it('should return 7 when adding 3.499999 and 4.499999 after rounding both', () => {
    assert.strictEqual(calculateNumber('SUM', 3.499999, 4.499999), 7);
  });

  it('should return 4 when subtracting 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('should return 5 when subtracting 1 and 3.7 rounded after rounding both', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 3.7), -3);
  });

  it('should return 5 when subtracting 1.2 and 3.7 after rounding both', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('should return 0.2 when dividing 1.4 and 4.5 after rounding both', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return 2 when dividing 10 and 5 after rounding both', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
  });

  it('should return Error when dividing a number by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});