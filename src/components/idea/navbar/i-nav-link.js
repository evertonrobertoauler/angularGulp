'use strict';

angular
  .module('idea')
  .directive('iNavLink', function (iNavbarService) {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'components/idea/navbar/i-nav-link.html',
      scope: {
        side:'@',
        role: '@',
        state: '@',
        href: '@',
      },
      link: function(scope, elem) {
        scope.service = iNavbarService;
        iNavbarService.register(scope.state, elem.text(), scope.role);
      }
    };
  });
