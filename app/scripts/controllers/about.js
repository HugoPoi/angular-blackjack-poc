'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.product = 'Blackjack';
	
	$scope.authors = [
	  'Hugo Poissonnet',
	  'Mamadou Coulibaly',
	  'Antoine Ludwig',
	  'Samuel Frigout',
	  'Romain Notari'
    ];
	
	$scope.productOwner = 'Jonathan DeGalvez';
	$scope.scrumMaster = $scope.authors[3];
	
  });
