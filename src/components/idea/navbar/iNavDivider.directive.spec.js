'use strict';

describe('Directive: iNavDivider', function () {

  beforeEach(module('idea.navbar'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render divider template', function () {
    element = angular.element('<i-nav-divider></i-nav-divider>');
    element = $compile(element)(scope);

    expect(element.prop('tagName')).toEqual('LI');
    expect(element.attr('class')).toMatch(/divider/);
  });
});
