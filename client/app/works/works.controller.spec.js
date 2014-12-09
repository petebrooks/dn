'use strict';

describe('Controller: AllWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('dnApp'));

  var AllWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllWorkCtrl = $controller('AllWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
