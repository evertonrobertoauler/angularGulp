'use strict';

describe('Directive: iItem', function () {

  beforeEach(module('idea.sidebar'));

  var element, scope;

  it('should add item on iSidebar service', inject(function ($rootScope, $compile, iSidebar) {
    scope = $rootScope.$new();

    element = angular.element(
      '<i-item id="2" category="1" label="test"></i-item>'
    );

    iSidebar.registerCategory('1', undefined, 'parent');

    spyOn(iSidebar, 'registerItem').and.callThrough();

    element = $compile(element)(scope);
    scope.$digest();

    expect(iSidebar.registerItem).toHaveBeenCalledWith('2', '1', 'test');
  }));
});
