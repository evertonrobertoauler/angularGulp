'use strict';

angular
  .module('idea')
  .directive('iNavbar', function($location, iNavbarService) {
    return {
      templateUrl: 'components/idea/navbar/i-navbar.html',
      restrict: 'E',
      transclude: true,
      scope: {
        title:'@',
        state:'@',
        roles:'=',
      },
      link: function(scope, elem) {
        iNavbarService.init(elem.find('#iNavBar'), scope.roles);
      }
    };
  });
