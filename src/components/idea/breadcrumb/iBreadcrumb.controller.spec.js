'use strict';

describe('idea.breadcrumb module', function () {

  beforeEach(module('idea.breadcrumb'));

  var $rootScope, $q, $controller, iSidebar;

  beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _iSidebar_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $controller = _$controller_;
    iSidebar = _iSidebar_;
  }));

  describe('iBreadcrumb controller', function () {

    it('should declare the controller and call getState without errors', function () {

      var item = {parents: [{label: 'test'}]};

      spyOn(iSidebar, 'getState').and.returnValues($q.when(item));
      spyOn(iSidebar, 'getHref').and.returnValues('#/test');

      var iBreadcrumbCtrl = $controller('iBreadcrumbCtrl');

      $rootScope.$digest();

      expect(iSidebar.getState).toHaveBeenCalledWith('');
      expect(iBreadcrumbCtrl.links.length).toBe(1);
      expect(iBreadcrumbCtrl.links[0].label).toBe('test');
      expect(iBreadcrumbCtrl.links[0].href).toBe('#/test');
    });

    it('should set vm.links as undefined', function () {

      spyOn(iSidebar, 'getState').and.returnValues($q.when(undefined));

      var iBreadcrumbCtrl = $controller('iBreadcrumbCtrl');

      $rootScope.$digest();

      expect(iSidebar.getState).toHaveBeenCalledWith('');
      expect(iBreadcrumbCtrl.links).toBe(undefined);
    });
  });
});
