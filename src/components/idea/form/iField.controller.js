(function () {
  'use strict';

  angular
    .module('idea.form')
    .controller('iFieldCtrl', iFieldCtrl);

  /** @ngInject */
  function iFieldCtrl() {
    var vm = this;

    var errorTypes = [];

    vm.formField = {};
    vm.registerModel = registerModel;
    vm.registerErrorType = registerErrorType;
    vm.showErrors = showErrors;
    vm.showError = showError;

    function registerModel(name, model) {
      vm.name = name;
      vm.model = model;
    }

    function registerErrorType(type) {
      errorTypes.push(type);
    }

    function showErrors() {
      return vm.iForm.showErrors && vm.model.$invalid;
    }

    function testError(type) {
      return vm.model.$error[type];
    }

    function showError(type) {
      return showErrors() && _.find(errorTypes, testError) === type;
    }
  }
})();
