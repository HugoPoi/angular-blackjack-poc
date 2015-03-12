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


    $scope.playerCards = [
      { number: 1, state: { flipped: false } },
      { number: 10, state: { flipped: false } },
      { number: 12, state: { flipped: false } },
      { number: 23, state: { flipped: false } }
    ];


    $scope.flip = function( card ){
      card.state.flipped = !card.state.flipped;
    }
  });
