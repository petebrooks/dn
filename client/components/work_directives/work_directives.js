'use strict';

angular.module('dnApp')

  .directive('workthumb', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        photo: '@',
        work: '@'
      },
      // transclude: true,
      templateUrl: 'components/work_directives/work_thumb.jade',
    };
  });