(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .controller('iNavDropdownCtrl', iNavDropdownCtrl);

  /** @ngInject */
  function iNavDropdownCtrl(iNavbar) {
    var vm = this;
    var childs = {};

    vm.registerChild = registerChild;
    vm.isVisible = isVisible;

    function registerChild(state, role) {
      childs[state] = role;
    }

    function isVisible() {
      for (var i in childs) {
        if (iNavbar.canShow(childs[i])) {
          return true;
        }
      }

      return false;
    }
  }
})();
