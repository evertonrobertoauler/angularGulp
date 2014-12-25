'use strict';

describe('Directive: iNavLink', function () {

  beforeEach(module('idea.navbar'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render corectly', function () {
    element = angular.element('<i-nav-link side="rigth" role="user" state="test">Title</i-nav-link>');

    element = $compile(element)(scope);
    scope.$digest();

    expect(element.prop('tagName')).toEqual('LI');
    expect(element.find('a').attr('ui-sref')).toEqual('test');
    expect(element.find('a').text()).toEqual('Title');
  });

  it('should link with iNavDropdown', function () {
    element = angular.element(
      '<i-nav-dropdown title="Test"><i-nav-link role="user" href="/test">Title</i-nav-link></i-nav-divider>'
    );

    element = $compile(element)(scope);
    scope.$digest();

    var link = element.find('.dropdown-menu').children();

    expect(link.find('a').attr('href')).toEqual('/test');
    expect(link.find('a').text()).toEqual('Title');
  });
});
