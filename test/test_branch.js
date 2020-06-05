let convert = require('../Test_branchCoverage.js');
let assert = require('assert');

describe('BranchCoverage', function() {
    it('a=0 UND b=-5', function() {
      assert.equal(true, convert.test(0, -5));
    });
    it('a=5 UND b=5', function() {
      assert.equal(false, convert.test(5, 5));
    });
    it('a=-5 UND b=-5', function() {
      assert.equal(true, convert.test(-5, -5));
    });
    /*it('a=5 UND b=-5', function() {
      assert.equal(false, convert.test(5, -5));
    });
    it('a=5 UND b=0', function() {
      assert.equal(false, convert.test(5, 0));
    });
    it('a=0 UND b=5', function() {
      assert.equal(false, convert.test(5, -5));
    });*/
});
