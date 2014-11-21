'use strict';

angular.module('dnApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.isRouteActive = function(view) {
      var current = $location.path().substring(1).split('/')[0];
      console.log(current);
      if (current === '') {
        return 'home';
      } else {
        return view === current ? 'active' : 'inactive';
      };
    }

    // $scope.active = undefined;
    // $scope.setActive = function(name) {
    //   $scope.active = name;
    // }
    // $scope.isActive = function(name) {
    //   if ($scope.active) {
    //     if (name === $scope.active) {
    //       return 'active'
    //     } else {
    //       return 'inactive'
    //     }
    //   } else {
    //     return true
    //   }
    // }
  });