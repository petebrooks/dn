'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allWorks', {
        url: '/works',
        views: {
          'master': {
            templateUrl: 'app/works/allWorks.html',
            controller: 'AllWorkCtrl'
          }
        }
      })

      .state('viewWork', {
        url: '/works/:id',
        views: {
          'master': {
            templateUrl: 'app/works/viewWork.html',
            controller: 'ViewWorkCtrl'
          }
        }
      })
  });