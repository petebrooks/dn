'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .state('bio', {
        url: '/bio',
        // templateUrl: 'app/main/bio.html'
      })

      .state('contact', {
        url: '/contact'
      })

      .state('statement', {
        url: '/statement',
        // templateUrl: 'app/main/statement.html'
      })
  });