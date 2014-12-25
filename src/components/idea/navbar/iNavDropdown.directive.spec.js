'use strict';

describe('Directive: iNavDropdown', function () {

  beforeEach(module('idea.navbar'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render iNavDropdown template alone corectly', function () {
    element = angular.element('<i-nav-dropdown title="Test">Content</i-nav-divider>');
    scope.vm = {};
    element = $compile(element)(scope);
    scope.$digest();

    scope = element.children().scope();

    expect(scope.vm.first).toEqual(false);
    expect(element.prop('tagName')).toEqual('LI');
    expect(element.find('a').text()).toMatch(/Test/);
    expect(element.find('ul').text()).toEqual('Content');
  });

  it('should render iNavDropdown at first level corectly', function () {
    element = angular.element('<i-nav><i-nav-dropdown title="Test">Content</i-nav-divider></i-nav>');
    scope.vm = {};
    element = $compile(element)(scope);
    scope.$digest();

    scope = element.children().children().children().scope();
    expect(scope.vm.first).toEqual(true);
  });
});
