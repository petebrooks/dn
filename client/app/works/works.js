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

      .state('viewWorks', {
        url: '/:id',
        templateUrl: 'app/works/viewWork.html',
        controller: 'ViewWorkCtrl'

      })
  });