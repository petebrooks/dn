'use strict';

angular.module('dnApp')
  .directive('glove', function($animate) {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      templateUrl: 'components/pane_directive/pane.html'
    };
  });