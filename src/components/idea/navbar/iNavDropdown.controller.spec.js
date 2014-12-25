'use strict';

describe('idea.navbar module', function () {

  beforeEach(module('idea.navbar'));

  var $controller, iNavbar;

  beforeEach(inject(function (_$controller_, _iNavbar_) {
    $controller = _$controller_;
    iNavbar = _iNavbar_;
  }));

  describe('iNavDropdown controller', function () {

    it('should declare the controller corectly', function () {

      var iNavDropdownCtrl = $controller('iNavDropdownCtrl');

      expect(iNavDropdownCtrl.registerChild).toEqual(jasmine.any(Function));
      expect(iNavDropdownCtrl.isVisible).toEqual(jasmine.any(Function));
    });

    it('should registerChild and be visible', function () {

      spyOn(iNavbar, 'canShow').and.returnValues(true);

      var iNavDropdownCtrl = $controller('iNavDropdownCtrl');
      iNavDropdownCtrl.registerChild('teste', 'user');

      expect(iNavDropdownCtrl.isVisible()).toBe(true);
    });

    it('should not be visible', function () {
      var iNavDropdownCtrl = $controller('iNavDropdownCtrl');
      iNavDropdownCtrl.registerChild('teste', 'user');

      expect(iNavDropdownCtrl.isVisible()).toBe(false);
    });
  });
});
