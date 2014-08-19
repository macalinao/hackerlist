'use strict';

describe('Controller: HackerCtrl', function () {

  // load the controller's module
  beforeEach(module('hackerlistApp'));

  var HackerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HackerCtrl = $controller('HackerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
