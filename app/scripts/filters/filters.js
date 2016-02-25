'use strict';

angular.module('filters', [])

.filter('cardbgposition', function() {
  return function(cardNumber) {
    return { 'background-position' : -160*(cardNumber%53) + 'px 0' };
  };
});

