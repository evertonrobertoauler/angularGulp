'use strict';

describe('idea.form module', function () {

  beforeEach(module('idea.form'));

  var $rootScope, $controller;

  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('iForm controller', function () {

    it('test valid', function () {

      var iFormCtrl = $controller('iFormCtrl');

      expect(iFormCtrl.valid()).not.toBeTruthy();
      expect(iFormCtrl.showErrors).not.toBeTruthy();

      iFormCtrl.iForm.$invalid = false;
      iFormCtrl.iForm.$valid = true;

      expect(iFormCtrl.valid()).toBeTruthy();
      expect(iFormCtrl.showErrors).not.toBeTruthy();

      iFormCtrl.iForm.$invalid = true;
      iFormCtrl.iForm.$valid = false;

      expect(iFormCtrl.valid()).not.toBeTruthy();
      expect(iFormCtrl.showErrors).toBeTruthy();
    });
  });
});
