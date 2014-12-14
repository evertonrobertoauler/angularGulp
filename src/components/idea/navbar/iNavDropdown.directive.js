(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavDropdown', iNavDropdown);

  /** @ngInject */
  function iNavDropdown() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/navbar/iNavDropdown.directive.html',
      scope: {
        title: '@',
      },
      link: link,
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
    };

    function link(scope, elem){
      scope.vm.first = isFirst();

      function isFirst() {
        var parentTagName = elem.parent().parent().prop('tagName');
        return parentTagName.toLowerCase() === 'i-nav';
      }
    }

    /** @ngInject */
    function controller(iNavbar) {
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
  }
})();
