(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavLink', iNavLink);

  /** @ngInject */
  function iNavLink(iNavbar) {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'components/idea/navbar/iNavLink.directive.html',
      scope: {
        side: '@',
        role: '@',
        state: '@',
        href: '@',
      },
      link: link,
      require: '^?iNavDropdown',
    };

    function link(scope, elem, attrs, iNavDropdown) {

      scope.service = iNavbar;
      iNavbar.register(scope.state, elem.text(), scope.role);

      if (iNavDropdown) {
        iNavDropdown.registerChild(scope.state, scope.role);
      }
    }
  }
})();
