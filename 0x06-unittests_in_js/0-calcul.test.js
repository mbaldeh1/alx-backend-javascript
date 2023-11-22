/**
 * Test file of 0-calcul module
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });

  it('should return 5 when adding 1 and 3.7 rounded after rounding both', () => {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7 after rounding both', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7 after rounding both', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when adding 0.0 and 0.0 after rounding both', () => {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
  });

  it('should return -1 when adding -0.4 and 0.4 after rounding both', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should return 5 when adding 2.499999 and 3.499999 after rounding both', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
