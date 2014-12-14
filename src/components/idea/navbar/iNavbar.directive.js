(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavbar', iNavbarDirective);

  /** @ngInject */
  function iNavbarDirective(iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavbar.directive.html',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@',
        state: '@',
        roles: '=',
      },
      link: link,
    };

    function link(scope, elem) {
      iNavbar.init(elem.find('#iNavBar'), scope.roles);
    }
  }
})();
