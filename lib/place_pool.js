var Pool = require("./pool.js").Pool;
var PlacePool = function(rate, product)
  {
    Pool.call(this, rate, product);
    this.printDividends = function(first, second, third)
    {
      this.total_pool = this.total_pool * 1.0 / 3.0;
      
      return this.printDividend(first)+'\n'+
      this.printDividend(second)+'\n' +
      this.printDividend(third);
    }
  }

exports.PlacePool = PlacePool;
