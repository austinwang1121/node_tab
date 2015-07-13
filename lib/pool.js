var Utils = require("./utils.js").Util;

var Pool = function(rate, product){
    this.total_pool = 0;
    this.product_type = product;
    this.commision_rate = rate;
    this.horse_stake = {};

    this.updatePool = function(stake, selection) {
      if (Utils.isValidBet(this.product_type,selection,stake)) {
        stake = parseInt(stake)
        this.total_pool += stake;
        if(this.horse_stake[selection]){
          // # horse has been bet on, update the stake
          this.horse_stake[selection] += stake
        }
        else{
          // # create the stake for the given horse
          this.horse_stake[selection] = stake
        }
        return 'OK'
      }
      else {
        return 'BAD'
      }

    };

    this.calculateDividend =  function(selection) {
      // if(this.product_type === 'W'){
      //   this.product_type = 'Win';
      // }else if(this.product_type === 'E'){
      //   this.product_type = 'Exacta';
      // } else{
      //   this.product_type = 'Place';
      // }

      var dividend = 0;
      // console.log(this.horse_stake)
      if(this.horse_stake[selection]){
        var available_pool = this.total_pool*(1.0-this.commision_rate)
        dividend = available_pool / this.horse_stake[selection] * 1.0
      } else{
        dividend = 0.0
      }
      return dividend.toFixed(2)
      // return this.product_type+':'+selection+':'+dividend.toFixed(2);
    };

    this.clearPool = function() {
      this.total_pool = 0
      this.horse_stake= {}
    };

}

exports.Pool = Pool;
