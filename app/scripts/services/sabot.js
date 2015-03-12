'use strict';

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
  };

  var giveCards = function(numberOfCards){
    var currentCard = [];
    var i = 0;
    for(i = 0; i < numberOfCards; i++){
      var idx  =  _.random(0, $rootScope.sabot.length-1);
      var item = $rootScope.sabot[idx];
      if(item !== undefined){
        currentCard.push(item);
        $rootScope.sabot = _.without($rootScope.sabot, item);
      }
      else{
        return 'no more cards';
      }
    }
    return currentCard;
  };

  //sabot containning an set of cards
  return {
    'initSabot': initArray,
    'getCroupier': function(){ return croupier; },
    'getCards': function(numberOfCards){
        //give two cards
        return giveCards(numberOfCards);
    }
  };
});
