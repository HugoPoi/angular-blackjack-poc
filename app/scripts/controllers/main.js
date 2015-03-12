'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
  .controller('blackjackCtrl', function($scope, Sabot){
    $scope.user = [];
    $scope.roundNumber = 0;
    $scope.bank = [];
    $scope.startGame = false;
    $scope.bet = 5;

    $scope.getCardTest = function(){
      console.log('je recois la carte', Sabot.getCard($scope.startGame));
    }
	
    $scope.playerCards = [
      // { number: 1, state: { flipped: false } },
      // { number: 10, state: { flipped: false } },
      // { number: 12, state: { flipped: false } },
      // { number: 23, state: { flipped: false } }
    ];

	$scope.dealerCards = [];
	
    $scope.deal = function(){
      //Test if Bet is a number
      if(angular.isNumber($scope.bet)) {
        if (!$scope.startGame) {
          console.log('L\'utilisateur a misé ', $scope.bet);
          // console.log('je recois la carte', Sabot.getCard($scope.startGame));
		  $scope.playerCards.push({ number: Sabot.getCard($scope.startGame), state: { flipped: true }});
          $scope.startGame = true;
		  $scope.playerCards.push({ number: Sabot.getCard($scope.startGame), state: { flipped: true }});
		  $scope.dealerCards.push({ number: Sabot.getCard($scope.startGame), state: { flipped: true }});
		  
		  
        } else {
          console.log('Mise déjà faite');
        }
      }
    };

    $scope.getCurrentBet = function(){
      return $scope.currentBet;
    };
    $scope.isDealDone = function(){
      return $scope.startGame;
    };

    $scope.reset = function(){
      $scope.bet = 5;
    };

	


    $scope.flip = function( card ){
      card.state.flipped = !card.state.flipped;
    }
  });
