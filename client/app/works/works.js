'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works', {
        url: '/works',
        views: {
          'master': {
            templateUrl: 'app/works/allWorks.html',
            controller: 'AllWorkCtrl'
          }
        }
      })

      .state('viewWorks', {
        url: '/works/:id',
        views: {
          'master': {
            templateUrl: 'app/works/viewWork.html',
            controller: 'ViewWorkCtrl'
          }
        }
      })
  });