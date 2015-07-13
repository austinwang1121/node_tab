var readline = require('readline');
var Pool = require("./lib/pool.js").Pool;
var PlacePool = require("./lib/place_pool.js").PlacePool;
var Utils = require("./lib/utils.js").Util;

var win_pool = new Pool(0.15,'W');
var place_pool  = new PlacePool(0.12,'P')
var exacta_pool = new Pool(0.18,'E');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  var break_down = line.trim().split(':');
  if(!line.trim()){
  }else if(break_down.length != 4){
    console.error("Invalid input format: " + line);
    process.exit()
  } else if (break_down[0] === 'Bet'){
     // we could have a class Bet but it is not needed in our case
    // Selections will be validate as non-negative integers, but we'll store them in a dic as a string
    // Assume if selection is started with '0', e.g. '03' , it is invalid
    var product = break_down[1];
    var selections = break_down[2];
    var stake = break_down[3];
    var ret = 'OK'

    if(product === 'W'){
      ret = win_pool.updatePool(stake,selections)
      // console.log(win_pool.horse_stake)
    } else if(product === 'P'){
      ret = place_pool.updatePool(stake,selections)
      // console.log(place_pool.horse_stake)
    } else if (product === 'E'){
      ret = exacta_pool.updatePool(stake,selections)
      // console.log(exacta_pool.horse_stake)
    } else{
      ret = 'BAD'
      console.error("Invalid input as a Bet: " + line)
    }

    if (ret === 'BAD') {
      console.error("Input is not a valid bet" + line);
      process.exit() 
    }
  } else if(break_down[0] === 'Result'){
      var first  = break_down[1]
      var second = break_down[2]
      var third  = break_down[3]
      if (Utils.isValidResult(first,second,third)){
        // # Print dividend
        console.log(win_pool.printDividend(first))
        console.log(place_pool.printDividends(first,second,third))
        console.log(exacta_pool.printDividend(first+','+second))
        // # clear the pool after the dividends are printed in case there is more input coming (if there is any)
        win_pool.clearPool()
        place_pool.clearPool()
        exacta_pool.clearPool()
      } else{
        console.error("Invalid Input as a Result: " + line)
        process.exit()
      }
    } else{
      console.error("Invalid input" + line)
      process.exit()
    }
});
