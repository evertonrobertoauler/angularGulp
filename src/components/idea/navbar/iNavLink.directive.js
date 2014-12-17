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
      compile: compile,
      require: '^?iNavDropdown',
    };

    function compile() {
      return {pre: link};
    }

    function link(scope, elem, attr, iNavDropdown, transcludeFn) {
      scope.service = iNavbar;

      if (iNavDropdown) {
        iNavDropdown.registerChild(scope.state, scope.role);
      }

      transcludeFn(linkRegister);

      function linkRegister(elem) {
        var linkObj = {state: scope.state, href: scope.href, title: elem.text()};
        scope.service.register(linkObj, scope.role);
      }
    }
  }
})();
