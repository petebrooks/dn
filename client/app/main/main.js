'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('main', {
        url: '/',
        views: {
          'master': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          'master': {
            templateUrl: 'app/main/contact.html'
          }
        }
      })

      .state('bio', {
        url: '/bio',
        // templateUrl: 'app/main/bio.html'
      })

      .state('statement', {
        url: '/statement',
        // templateUrl: 'app/main/statement.html'
      })
  });