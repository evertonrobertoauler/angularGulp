'use strict';

describe('Directive: iNav', function () {

  beforeEach(module('idea.navbar'));

  var scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render template correctly - right side', function () {
    var element = angular.element('<i-nav side="right">Content</i-nav>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.prop('tagName')).toEqual('I-NAV');
    expect(element.children().prop('tagName')).toEqual('UL');
    expect(element.children().attr('class')).toEqual('nav navbar-nav navbar-right');
    expect(element.children().text()).toEqual('Content');
  });

  it('should render template correctly - left side', function () {
    var element = angular.element('<i-nav>Content</i-nav>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.prop('tagName')).toEqual('I-NAV');
    expect(element.children().prop('tagName')).toEqual('UL');
    expect(element.children().attr('class')).toEqual('nav navbar-nav');
    expect(element.children().text()).toEqual('Content');
  });
});
