var Util = {};
Util.isValidBet =function(product, selections, stake){
  if(!Util.isPositiveInt(stake)){
    console.log("Stake for a bet should be whole dollar, where stake = " + stake);
    return false;
  }

  if(product === 'W' || product === 'P'){
    return Util.isPositiveInt(selections);
  } else if (product === 'E'){
    selections = selections.split(',');
    var result = (selections.length == 2) && Util.isPositiveInt(selections[0]) && Util.isPositiveInt(selections[1])  && (selections[0]!= selections[1])
    return  result;
  } else{
    console.log("Invalid Input as a Bet, possibly because of an unknown bet type, where type is given: " + product);
  }
  return false;
}
Util.isPositiveInt = function(s) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(s)){
    return parseInt(s) > 0;
  }else{
    return false;
  }
}
Util.isValidResult = function(first,second,third) {
  var result = Util.isPositiveInt(first) && Util.isPositiveInt(second) && Util.isPositiveInt(third)  && (first != second) && (first != third) && (second !=third)
  return result;
}
exports.Util = Util;
