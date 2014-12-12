'use strict';

angular
  .module('idea')
  .directive('iNavLink', function (iNavbarService, $timeout) {
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

        $timeout(function(){
          if (scope.$parent.$parent.registerChild) {
            scope.$parent.$parent.registerChild(scope.state, scope.role);
          }
        }, 100);
      }
    };
  });
