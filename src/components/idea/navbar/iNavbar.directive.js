'use strict';

angular
  .module('idea')
  .directive('iNavbar', function($location, iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavbar.directive.html',
      restrict: 'E',
      transclude: true,
      scope: {
        title:'@',
        state:'@',
        roles:'=',
      },
      link: function(scope, elem) {
        iNavbar.init(elem.find('#iNavBar'), scope.roles);
      }
    };
  });
