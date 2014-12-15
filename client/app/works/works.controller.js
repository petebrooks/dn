'use strict';

var workControllers = angular.module('workControllers', []);

workControllers

  .controller('AllWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.works = Work.query();
    $scope.orderProp = 'order';
    $scope.showHidden = false;
  })

  .controller('ViewWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.work = Work.get({id: $stateParams.id});
    $scope.isSelected = function(index) {
      if (index === $scope.selected) {
        return 'selected';
      }
    };
    $scope.setSelected = function(index) {
      $scope.selectedIndex = index;
    };
    $scope.allPhotos = function() {
      return [$scope.work.photoMain].concat($scope.work.photos);
    };
    $scope.open = function() {
      var re = /[\w\-]+\.jpg/;
      var smallUrl = re.exec($scope.getSelected());
      var largeUrl = 'assets/images/large/' + smallUrl;
      window.open(largeUrl);
    };
    $scope.selectedIndex = 0;
    $scope.getSelected = function() {
      return $scope.allPhotos()[$scope.selectedIndex];
    };
  });
