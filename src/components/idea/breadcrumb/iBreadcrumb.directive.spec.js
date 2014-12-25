'use strict';

describe('Directive: iBreadcrumb', function () {

  beforeEach(module('idea.breadcrumb'));
  beforeEach(module('ngHtml2js'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<i-breadcrumb><a href="/">Home</a></i-breadcrumb>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render template correctly and declare its own controller', inject(function () {
    expect(element.controller).toEqual(jasmine.any(Function));
    expect(element.children().prop('tagName')).toEqual('LI');
    expect(element.children().text()).toEqual('Home');
  }));
});
