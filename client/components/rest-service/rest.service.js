angular.module('dnApp')
  .factory('Work', ['$resource',
  function($resource) {
    return $resource('api/works/:id');
  }]);