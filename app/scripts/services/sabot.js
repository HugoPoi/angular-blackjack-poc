angular.module('blackjack.services.sabot', [])
.factory('Sabot', function($rootScope){
  var croupier = {};
  var cardDistributed;
  var gameState = false;

  var initArray = function(){
    $rootScope.sabot = new Array(52);
    var i  = 0;
    for(i = 0; i < $rootScope.sabot.length; i++){
      $rootScope.sabot[i] = i+1;
    }
    $rootScope.sabot.forEach(function(item, idx){
    });
  };

  var giveOneCard = function(){
    var idx  =  _.random(0, $rootScope.sabot.length-1);
    var currentCard = $rootScope.sabot[idx];
    $rootScope.sabot = _.without($rootScope.sabot, currentCard);
    if(currentCard !== undefined){
      return currentCard;
    }
    else{
      return "no more cards";
    }
  };

  //sabot containning an set of cards
  return {
    "getCroupier": function(){ return croupier; },
    "getCard": function(gameState){
      if(!gameState){
        //give two cards
        initArray();
        return giveOneCard();
      }
      else{
        return giveOneCard();
      }
    }
  };
});
