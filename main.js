var readline = require('readline');
var Pool = require("./pool.js").Pool;
var PlacePool = require("./place_pool.js").PlacePool;
var Utils = require("./utils.js").Util;

var win_pool = new Pool(0.15,'W');
var place_pool  = new PlacePool(0.12,'P')
var exacta_pool = new Pool(0.18,'E');

var name = 1;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  var break_down = line.trim().split(':');
  if(!line.trim()){
  }else if(break_down.length != 4){
    console.log("Invalid input format: " + line);
  } else if (break_down[0] === 'Bet'){
     // we could have a class Bet but it is not needed in our case
    // Selections will be validate as non-negative integers, but we'll store them in a dic as a string
    // Assume if selection is started with '0', e.g. '03' , it is invalid
    var product = break_down[1];
    var selections = break_down[2];
    var stake = break_down[3];

    if(Utils.isValidBet(product,selections,stake)){
      if(product === 'W'){
        win_pool.updatePool(parseInt(stake),selections)
      } else if(product === 'P'){
        place_pool.updatePool(parseInt(stake),selections)
      } else if (product === 'E'){
        exacta_pool.updatePool(parseInt(stake),selections)
      } else{
        console.log("Invalid input as a Bet: " + line)
      }
    }
  } else if(break_down[0] === 'Result'){
      var first  = break_down[1]
      var second = break_down[2]
      var third  = break_down[3]
      if (Utils.isValidResult(first,second,third)){
        // # Print dividend
        win_pool.printDividend(first)
        place_pool.printDividends(first,second,third)
        exacta_pool.printDividend(first+','+second)
        // # clear the pool after the dividends are printed in case there is more input coming (if there is any)
        win_pool.clearPool()
        place_pool.clearPool()
        exacta_pool.clearPool()
      } else{
        console.log("Invalid Input as a Result: " + line)
      }
    } else{
      console.log("Invalid input" + line)
    }
});
