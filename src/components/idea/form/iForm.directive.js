(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iForm', iForm);

  /** @ngInject */
  function iForm() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/form/iForm.directive.html',
      scope: {
        submit: '&',
      },
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
    };

    /** @ngInject */
    function controller() {
      var vm = this;

      vm.iForm = {};
      vm.showErrors = false;
      vm.valid = valid;

      function valid() {
        vm.showErrors = vm.iForm.$invalid;
        return vm.iForm.$valid;
      }
    }
  }
})();
