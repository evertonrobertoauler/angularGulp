'use strict';

describe('idea.form module', function () {

  beforeEach(module('idea.form'));

  var $rootScope, $controller;

  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('iField controller', function () {

    it('test showErrors', function () {

      var iFieldCtrl = $controller('iFieldCtrl');

      expect(iFieldCtrl.showErrors()).not.toBeTruthy();

      iFieldCtrl.registerForm({showErrors: true});

      expect(iFieldCtrl.showErrors()).not.toBeTruthy();

      iFieldCtrl.registerNgModel({$invalid: true});

      expect(iFieldCtrl.showErrors()).toBeTruthy();
    });

    it('test showError', function () {

      var iFieldCtrl = $controller('iFieldCtrl');

      spyOn(iFieldCtrl, 'showErrors').and.returnValues(true, true, true, true);

      iFieldCtrl.registerErrorType('required');
      iFieldCtrl.registerErrorType('email');

      iFieldCtrl.registerNgModel({$error: {required: true, email: true}});

      expect(iFieldCtrl.showError('required')).toBeTruthy();
      expect(iFieldCtrl.showError('email')).not.toBeTruthy();

      iFieldCtrl.registerNgModel({$error: {required: false, email: true}});

      expect(iFieldCtrl.showError('required')).not.toBeTruthy();
      expect(iFieldCtrl.showError('email')).toBeTruthy();
    });
  });
});
