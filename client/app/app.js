'use strict';

angular.module('dnApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'workControllers'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

window.viewportUnitsBuggyfill.init();


function ready() {
  var gloves = $('glove.home');
}

$(document).ready(ready);
$(document).on('page:load', ready);
