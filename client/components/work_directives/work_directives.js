'use strict';

angular.module('dnApp')

  .directive('worksBox', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      transclude: true,
      templateUrl: 'components/work_directives/works-box.jade',
    };
  });