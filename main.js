#!/usr/bin/env node
var readline = require('readline');
var Pool = require("./lib/pool.js").Pool;
var Utils = require("./lib/utils.js").Util;
  
var win_pool    = new Pool(0.15,'W');
var place_pool  = new Pool(0.12,'P');
var exacta_pool = new Pool(0.18,'E');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
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

    // This block of code is quite ugly. Any better idea?
    if(product === 'W'){
      ret = win_pool.updatePool(stake,selections)
    } else if(product === 'P'){
      ret = place_pool.updatePool(stake,selections)
    } else if (product === 'E'){
      ret = exacta_pool.updatePool(stake,selections)
    } else{
      ret = 'BAD'
      console.error("Invalid input as a Bet, unknown product type: " + line)
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
        // Print dividends for Win
        console.log('Win:'+first+':$'+win_pool.calculateDividend(first))

        // Print dividends for Place
        place_pool.total_pool = place_pool.total_pool * 1.0 / 3.0;
        console.log('Place:'+first+':$'+place_pool.calculateDividend(first))
        console.log('Place:'+second+':$'+place_pool.calculateDividend(second))
        console.log('Place:'+third+':$'+place_pool.calculateDividend(third))

        // Print dividends for Exacta
        var selections = first + ','+second
        console.log('Exacta:'+selections+':$'+exacta_pool.calculateDividend(selections))

      } else{
        console.error("Invalid Input as a Result: " + line)
        process.exit()
      }
    } else{
      console.error("Invalid input" + line)
      process.exit()
    }
});
