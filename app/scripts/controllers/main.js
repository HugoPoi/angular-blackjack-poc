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
    var miseCourrante = 0;
    $scope.bet = 0;

    $scope.deal = function(){
      console.log('L\'utilisateur a misé ', $scope.bet);
    }


    $scope.card1 = 0;
  });
