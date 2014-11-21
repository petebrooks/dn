'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('main', {
        url: '/',
        views: {
          'master': {
            templateUrl: 'app/main/main.html',
            controller: 'NavbarCtrl'
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
        views: {
          'master': {
            templateUrl: 'app/main/bio.html'
          }
        }
      })

      .state('statement', {
        url: '/statement',
        views: {
          'master': {
            templateUrl: 'app/main/statement.html'
          }
        }
      })

      .state('test', {
        url: '/test',
        views: {
          'master': {
            templateUrl: 'app/main/test.html'
          }
        }
      })


  });