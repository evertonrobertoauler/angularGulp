'use strict';

describe('Directive: iSidebar', function () {

  beforeEach(module('idea.sidebar'));
  beforeEach(module('ngHtml2js'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<i-sidebar category-state="app.category" item-state="app.item">First Item</i-sidebar>');
  }));

  it('should render template correctly', inject(function ($compile) {
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.children().prop('tagName')).toEqual('UL');
    expect(element.children().attr('class')).toEqual('nav nav-sidebar');
    expect(element.children().children().prop('tagName')).toEqual('LABEL');
    expect(element.children().children().text()).toEqual('First Item');
  }));

  it('should call iSidebar.getHref', inject(function ($compile, iSidebar) {

    iSidebar.registerCategory('1', undefined, 'parent');

    spyOn(iSidebar, 'getHref').and.callThrough();

    element = $compile(element)(scope);
    scope.$digest();

    expect(iSidebar.getHref).toHaveBeenCalledWith(
      jasmine.objectContaining({id: '1', label: 'parent'})
    );
  }));
});
