'use strict';

angular
  .module('idea')
  .directive('iNavSearch', function (iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavSearch.directive.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        side:'@',
        placeholder:'@',
      },
      link: function(scope){
        scope.service = iNavbar;
      }
    };
  });
