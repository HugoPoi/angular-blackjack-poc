angular.module('blackjack.services.sabot', [])
.factory('Sabot', function(){
  var croupier = {};
  var sabot = [0,4,2];
  var cardDistributed;
  //sabot containning an set of cards
  return {
    "getCroupier": function(){ return croupier; },
    "getCard": function(gameState){
        if(gameState){
          //give two cards
          return sabot[1];
        }
        else{
          // give one card
          return sabot[1];
        }
    },
    "getRandomCard": function(){
       return Math.floor(Math.random() * 52 + 1);
	   
    },
  };
});
