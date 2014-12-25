'use strict';

describe('Directive: iCategory', function () {

  beforeEach(module('idea.sidebar'));

  var element, scope;

  it('should add category on iSidebar service', inject(function ($rootScope, $compile, iSidebar) {
    scope = $rootScope.$new();

    element = angular.element(
      '<i-category id="2" parent="1" label="test"></i-category>'
    );

    iSidebar.registerCategory('1', undefined, 'parent');

    spyOn(iSidebar, 'registerCategory').and.callThrough();

    element = $compile(element)(scope);
    scope.$digest();

    expect(iSidebar.registerCategory).toHaveBeenCalledWith('2', '1', 'test');
  }));
});
