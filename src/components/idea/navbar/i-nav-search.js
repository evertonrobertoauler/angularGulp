'use strict';

angular
  .module('idea')
  .directive('iNavSearch', function (iNavbarService) {
    return {
      templateUrl: 'components/idea/navbar/i-nav-search.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        side:'@',
        placeholder:'@',
      },
      link: function(scope){
        scope.service = iNavbarService;
      }
    };
  });
