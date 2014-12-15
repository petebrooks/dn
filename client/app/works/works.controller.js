'use strict';

var workControllers = angular.module('workControllers', []);

workControllers

  .controller('AllWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.works = Work.query();
    $scope.orderProp = ['year', 'hidden===false'];
    $scope.showHidden = false;
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
      return [$scope.work.photoMain].concat($scope.work.photos);
    };
    $scope.open = function() {
      var smallUrl = $scope.allPhotos()[$scope.selected];
      var largeUrl = [smallUrl.slice(0, 14) + 'large/' + smallUrl.slice(14)].join('');
      window.open(largeUrl);
    };
  });
