'use strict';

angular.module('dnApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/main/home.html',
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/contact.html'
      })
  });