(function () {
  'use strict';

  angular
    .module('idea.form')
    .controller('iFormCtrl', iFormCtrl);

  /** @ngInject */
  function iFormCtrl() {
    var vm = this;

    vm.iForm = {};
    vm.showErrors = false;
    vm.valid = valid;

    function valid() {
      vm.showErrors = vm.iForm.$invalid;
      return vm.iForm.$valid;
    }
  }
})();
