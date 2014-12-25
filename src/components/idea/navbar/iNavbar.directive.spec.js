'use strict';

describe('Directive: iNavbar', function () {

  // load the directive's module
  beforeEach(module('idea.navbar'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile, iNavbar;

  beforeEach(inject(function ($rootScope, _$compile_, _iNavbar_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    iNavbar = _iNavbar_;
  }));

  it('should create navbar component', function () {
    element = angular.element('<i-navbar title="Test" state="test" roles="[\'user\']">Content</i-navbar>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.navbar-brand').text()).toEqual('Test');
    expect(element.find('.navbar-brand').attr('ui-sref')).toEqual('test');
    expect(element.find('#iNavBar').text()).toEqual('Content');

    expect(iNavbar.roles).toEqual(['user']);
  });

  it('should run events correctly', function () {
    element = angular.element('<i-navbar title="Test" state="test">Content</i-navbar>');
    element = $compile(element)(scope);
    scope.$digest();

    var button = element.children().scope().getCollapseButton();

    iNavbar.triggerCollapse();
    expect(iNavbar.collapsed).toEqual(false);

    button.trigger('shown.bs.collapse');
    expect(iNavbar.collapsed).toEqual(true);

    button.trigger('hidden.bs.collapse');
    expect(iNavbar.collapsed).toEqual(false);
  });
});
