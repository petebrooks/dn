'use strict';

var workControllers = angular.module('workControllers', []);

workControllers

  .controller('AllWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.works = Work.query();
    $scope.orderProp = 'year';
  })

  .controller('ViewWorkCtrl', function ($scope, $stateParams, Work) {
    $scope.work = Work.get({id: $stateParams.id});
  })

  .controller('NewWorkCtrl', function ($scope, $state, $stateParams, $location, $upload, Work) {
    $scope.work = new Work();
    $scope.save = function() {
      $scope.work.$save(function(params, success, error) {
        console.log('saved');
        $location.path('/admin');
      });

    // $scope.onFileSelect = function($files) {
    //   for (var i = 0; i < $files.length; i++) {
    //     var file = $files[i];
    //     $scope.upload = $upload.upload({

    //     })
    // }
    };
    $scope.isUnchanged = function(w) {
      w = new Work();
    };
  });
