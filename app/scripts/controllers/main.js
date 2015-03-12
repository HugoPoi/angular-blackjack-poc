'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'blackjack.services.sabot'
    ];
  })
  .controller('blackjackCtrl', function($scope, Sabot){
    $scope.user = [];
    $scope.roundNumber = 0;
    $scope.bank = [];
    $scope.startGame = false;
    $scope.bet = 5;

    $scope.getCardTest = function(){
      console.log('je recois la carte', Sabot.getCard($scope.startGame));
    } 
    $scope.deal = function(){
      //Test if Bet is a number
      if(angular.isNumber($scope.bet)) {
        if (!$scope.startGame) {
          console.log('L\'utilisateur a misé ', $scope.bet);
          console.log('je recois la carte', Sabot.getCard($scope.startGame));
          $scope.startGame = true;
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

  });
