'use strict';

var workControllers = angular.module('workControllers', []);

workControllers

  .controller('AllWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.works = Work.query();
    $scope.hidden = Work.query({id:'hidden'});
    $scope.orderProp = 'year';
    // $scope.showHidden = false;
  })

  .controller('ViewWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.work = Work.get({id: $stateParams.id});
    $scope.selected = 0;
    $scope.isSelected = function(index) {
      if (index === $scope.selected) {
        return 'selected';
      }
    };
    $scope.setSelected = function(index) {
      $scope.selected = index;
    };
    $scope.allPhotos = function() {
      return [$scope.work.photo_main].concat($scope.work.photos);
    };
    $scope.open = function() {
      var url = $scope.allPhotos()[$scope.selected];
      window.open(url);
    };
  });
