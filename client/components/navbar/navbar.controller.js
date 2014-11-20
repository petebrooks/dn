'use strict';

angular.module('dnApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    var current = $location.path().substring(1);
    console.log(current);
    $scope.isRouteActive = function(view) {
        // console.log($location + ": " + current);
        if (current === '') {
          return '';
        } else {
          return view === current ? 'active' : 'inactive';
        };
    }
    $scope.active = undefined;
    $scope.setActive = function(name) {
      $scope.active = name;
    }
    $scope.isActive = function(name) {
      if ($scope.active) {
        if (name === $scope.active) {
          return 'active'
        } else {
          return 'inactive'
        }
      } else {
        return true
      }
    }
  });