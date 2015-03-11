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
  .controller('blackjack', function($scope){
    $scope.dealerHand = null;
    $scope.playerHands = [];
    $scope.user = {};
    $scope.currentHandIndex = null;
    $scope.roundNumber = 0;
    $scope.bank = {};
    $scope.counter = 7;
    $scope.startGame = false;
  });
