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
      controller: 'iNavDropdownCtrl as vm',
      bindToController: true,
    };

    function link(scope, elem) {
      scope.vm.first = isFirst();

      function isFirst() {
        return (elem.parent().parent().prop('tagName') === 'I-NAV');
      }
    }
  }
})();
