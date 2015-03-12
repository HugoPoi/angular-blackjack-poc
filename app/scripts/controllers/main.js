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
    $scope.bet = 0;
    $scope.deal = function(){
      console.log('L\'utilisateur a misé ', $scope.bet);
      console.log('je recois la carte', Sabot.getCard($scope.startGame));
      $scope.startGame = true;
    }
  });
