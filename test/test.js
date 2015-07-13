var assert = require("assert")
var Utils = require("../utils.js").Util

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Utils', function() {
  describe('#isValidBet()', function () {
    it('it should be true', function () {
      assert.equal(true, new Boolean(Utils.isValidBet('W','3','30')))
      assert.equal(true, new Boolean(Utils.isValidBet('E','3,4','30')))
      assert.equal(true, new Boolean(Utils.isValidBet('P','3','30')))
    });
    it('it should be false', function () {
      assert.equal(false, new Boolean(Utils.isValidBet('W','3,4','30')))
      assert.equal(false, new Boolean(Utils.isValidBet('P','3','-30')))
      assert.equal(false, new Boolean(Utils.isValidBet('D','3','30')))
      assert.equal(false, new Boolean(Utils.isValidBet('E','3,3','30')))
      assert.equal(false, new Boolean(Utils.isValidBet('E','3,4','30.0')))
      assert.equal(false, new Boolean(Utils.isValidBet('EW','3,4','30')))
      assert.equal(false, new Boolean(Utils.isValidBet('E','3,W4','30')))
    });
  });
});

describe('Utils', function() {
  describe('#isValidResult()', function () {
    it('isValidResult method test', function () {
      assert.equal(true, new Boolean(Utils.isValidResult('3','1','4')))
      assert.equal(false, new Boolean(Utils.isValidResult('3','1','4DDD')))
      assert.equal(false, new Boolean(Utils.isValidResult('3','1','3')))
    });
  });
});

describe('Utils', function() {
  describe('#isPositiveInt()', function () {
    it('isPositiveInt method test', function () {
      assert.equal(true, new Boolean(Utils.isPositiveInt('9')))
      assert.equal(true, new Boolean(Utils.isPositiveInt('09')))
      assert.equal(true, new Boolean(Utils.isPositiveInt('009')))

      assert.equal(false, new Boolean(Utils.isPositiveInt('-9')))
      assert.equal(false, new Boolean(Utils.isPositiveInt('0.9')))
    });
  });
});
