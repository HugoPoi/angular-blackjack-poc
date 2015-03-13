'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
  .controller('blackjackCtrl', function ($scope, Sabot, $timeout){
    $scope.user = [];
    $scope.roundNumber = 0;
    $scope.bank = [];
    $scope.startGame = false;
    $scope.bet = 5;

    $scope.playerCards = [];
    $scope.dealerCards = [];

    $scope.deal = function (){
      //Test if Bet is a number
      if(angular.isNumber($scope.bet)){
        if(!$scope.startGame){
          console.log('L\'utilisateur a misé ', $scope.bet);
          //Initialisation du paquet de cartes
          Sabot.initSabot();
          //Cartes Joueur
          $scope.getCards($scope.playerCards, 2);
          //Cartes Croupier
          $scope.getCards($scope.dealerCards, 1);

          $scope.startGame = true;
        } else{
          console.log('Mise déjà faite');
        }
      }else{
        alert("Mise non valide");
      }
    };

    $scope.getCards = function(cards, numberOfCardsToAdd){
      var animation = {flipped : false};
      var tmpCards = Sabot.getCards(numberOfCardsToAdd);
      console.log('Cartes reçues : ', tmpCards, tmpCards.length);
      for(var i = 0; i < tmpCards.length; i++){
        if(angular.isNumber(tmpCards[i])){
          cards.push({number: tmpCards[i], state: animation});
        }
      }
      $timeout(function(){
        animation.flipped = true;
      },300);
    };

    $scope.getCardTest = function (){
      $scope.getCards($scope.playerCards, 1, true);
    };

    $scope.getCurrentBet = function (){
      return $scope.currentBet;
    };
    $scope.isDealDone = function (){
      return $scope.startGame;
    };

    $scope.reset = function (){
      $scope.bet = 5;
    };

    $scope.flip = function (card){
      card.state.flipped = !card.state.flipped;
    };
	
	$scope.about = function(){
	  $('#about_btn').magnificPopup({
        items: {
          src:'#mypopup'
        },
        type: 'inline',
        removalDelay:0,
        mainClass:'mypopupanim rotateIn'
	  });
	}
	
  });
