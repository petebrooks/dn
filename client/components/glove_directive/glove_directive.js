'use strict';

angular.module('dnApp')
  .directive('glove', function($animate) {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      templateUrl: 'components/glove_directive/glove.html',
      link: function(scope, el, attrs) {
        scope.close = function() {
          console.log('close');
          scope.hidden = true;
        };
      }
    };
  });