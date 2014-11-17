'use strict';

angular.module('dnApp')
  .controller('MainCtrl', function ($scope, $location) {
    var current = $location.path().substring(1);
    $scope.isActive = function(view) {
        // console.log($location + ": " + current);
        if (current === '') {
          return true;
        } else {
          return view === current ? true : false;
        };
    }
    console.log($location.path().substring(1));
  });
