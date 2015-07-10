var Pool = function(rate, product){
    this.total_pool = 0;
    this.product_type = product;
    this.commision_rate = rate;
    this.horse_stake = {};
    this.updatePool = function(stake, selection) {
      this.total_pool += stake;
      if(this.horse_stake[selection]){
        // # horse has been bet on, update the stake
        this.horse_stake[selection] += stake
      }
      else{
        // # create the stake for the given horse
        this.horse_stake[selection] = stake
      }
    };

    this.printDividend =  function(selection) {
      var formatter = "%s:%s:$%s";
      if(this.product_type === 'W'){
        this.product_type = 'Win';
      }else if(this.product_type === 'E'){
        this.product_type = 'Exacta';
      } else{
        this.product_type = 'Place';
      }

      var dividend = 0;
      // console.log(this.horse_stake)
      if(this.horse_stake[selection]){
        var available_pool = this.total_pool*(1.0-this.commision_rate)
        dividend = available_pool / this.horse_stake[selection] * 1.0
      } else{
        dividend = 0.0
      }
      var digit = Math.round(dividend * Math.pow(10, 2)) / Math.pow(10, 2);
      console.log("%s:%s:$%s", this.product_type,selection,digit);
    };
    this.clearPool = function() {
      this.total_pool = 0
      this.horse_stake= {}
    };
    // TEST for easj
    this.name = function() {
      return this.product_type;
    }
}

// var PlacePool = Class( 'PlacePool').extend(Pool,
//   {
//     'public printDividends': function(first, second, third)
//     {
//       this.total_pool = this.total_pool * 1.0 / 3.0;
//       this.printDividend(first);
//       this.printDividend(second);
//       this.printDividend(third);
//     }
//   });

exports.Pool = Pool;
