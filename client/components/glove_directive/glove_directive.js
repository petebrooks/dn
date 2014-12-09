'use strict';

angular.module('dnApp')
  .directive('glove', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@',
        image: '@',
        backbutton: '@'
      },
      templateUrl: 'components/glove_directive/glove.html',
      link: function(scope) {
        scope.close = function() {
          console.log('close');
          scope.hidden = true;
        };
      }
    };
  });