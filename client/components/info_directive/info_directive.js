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
  })

  .directive('line', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'components/info_directive/line.html'
    }
  })

  .directive('heading', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'components/info_directive/heading.html'
    };
  })

  .directive('row', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'components/info_directive/row.html'
    };
  });