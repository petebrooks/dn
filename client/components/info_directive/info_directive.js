'use strict';

angular.module('dnApp')
  .directive('infoBox', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      transclude: true,
      templateUrl: 'components/info_directive/info-box.html',
      link: function(scope, el, attrs) {
        scope.close = function() {
          console.log('close');
          scope.hidden = true;
        };
      }
    };
  });