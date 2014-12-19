(function () {
  'use strict';

  angular
    .module('myApp.view1')
    .controller('View1Ctrl', View1Ctrl);

  /** @ngInject */
  function View1Ctrl($window) {
    var vm = this;

    vm.submit = submit;

    function submit() {
      $window.alert('lala');
    }
  }
})();
