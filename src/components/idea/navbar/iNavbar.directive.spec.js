'use strict';

describe('Directive: iNavbar', function () {

  // load the directive's module
  beforeEach(module('idea'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<i-navbar title="Test"></i-navbar>');
    element = $compile(element)(scope);
    expect(element.find('#iNavBar')).not.toBeUndefined();
  }));
});
