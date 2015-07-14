var assert = require("assert")
// var should = require("should")
var Utils = require("../lib/utils.js").Util
var Pool = require("../lib/pool.js").Pool


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
  describe('#isValidResult()', function () {
    it('isValidResult method test', function () {
      assert.equal(true, new Boolean(Utils.isValidResult('3','1','4')))
      assert.equal(false, new Boolean(Utils.isValidResult('3','1','4DDD')))
      assert.equal(false, new Boolean(Utils.isValidResult('3','1','3')))
    });
  });
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

describe('Pool', function() {
  var win_pool    = new Pool(0.15,'W');
  var place_pool  = new Pool(0.12,'P')
  var exacta_pool = new Pool(0.18,'E');

  describe('#win_pool.updatePool()', function () {
    it('win_pool objects can update pool with a valid bet and return BAD code as invalid input', function(){
        win_pool.updatePool('3','1');
        assert.deepEqual({'1':3}, win_pool.horse_stake);
        assert.equal(3,win_pool.total_pool);

        assert.equal('BAD',win_pool.updatePool('-3','-1'));
    })
  });

  describe('#exacta_pool.updatePool()', function () {
    it('exacta_pool objects can update pool with a valid bet and return BAD code as invalid input', function(){
        assert.equal('OK',exacta_pool.updatePool('13','1,2'));
        assert.deepEqual({ '1,2': 13 }, exacta_pool.horse_stake);
        assert.equal(13,exacta_pool.total_pool);

        assert.equal('BAD',exacta_pool.updatePool('3','-1'));
    })
  });

  describe('#place_pool.updatePool()', function () {
    it('place_pool objects can update pool with a valid bet and return BAD code as invalid input', function(){
        place_pool.updatePool('3','1');
        assert.deepEqual({'1':3}, place_pool.horse_stake);
        assert.equal(3,place_pool.total_pool);

        assert.equal('BAD',place_pool.updatePool('3','2,3'));
    })
  });


  describe('#calculateDividend()', function () {
    it('pool objects can calculateDividend with a given results', function(){
        assert.equal(0.85,win_pool.calculateDividend('1'));
        assert.equal(0.82,exacta_pool.calculateDividend('1,2'));
        assert.equal(0.88,place_pool.calculateDividend('1'));
    })
  });


});


