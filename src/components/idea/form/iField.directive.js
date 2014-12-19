(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iField', iField);

  /** @ngInject */
  function iField() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/form/iField.directive.html',
      scope: {
        label: '@',
      },
      link: link,
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      require: '^iForm'
    };

    function link(scope, elem, attrs, iForm) {
      scope.vm.iForm = iForm;
    }

    /** @ngInject */
    function controller() {
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
  }
})();
