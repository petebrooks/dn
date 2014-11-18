'use strict';

angular.module('dnApp')
  .directive('infoBox', function() {
    return {
      restrict: 'E',
      scope: {},
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

  .directive('pane', function($animate) {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      templateUrl: 'components/pane_directive/pane.html',
      link: function(scope, el, attrs) {
        el.on('click', function() {
          console.log(attrs.name);
          // debugger
          $animate.addClass(el, 'active');
        });
      }
    };
  });