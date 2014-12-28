(function () {
  'use strict';

  angular
    .module('idea.form')
    .controller('iFieldCtrl', iFieldCtrl);

  /** @ngInject */
  function iFieldCtrl() {
    var vm = this;
    var ngModel = {}, iForm = {};
    var errorTypes = [];

    vm.registerForm = registerForm;
    vm.registerNgModel = registerNgModel;
    vm.registerErrorType = registerErrorType;
    vm.showErrors = showErrors;
    vm.showError = showError;

    function registerForm(form) {
      iForm = form;
    }

    function registerNgModel(model) {
      ngModel = model;
    }

    function registerErrorType(type) {
      errorTypes.push(type);
    }

    function showErrors() {
      return iForm.showErrors && ngModel.$invalid;
    }

    function showError(type) {
      return vm.showErrors() && _.find(errorTypes, testError) === type;
    }

    function testError(type) {
      return ngModel.$error[type];
    }
  }
})();
