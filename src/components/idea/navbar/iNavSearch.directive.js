(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavSearch', iNavSearch);

  /** @ngInject */
  function iNavSearch(iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavSearch.directive.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        side: '@',
        placeholder: '@',
      },
      link: link,
    };

    function link(scope) {
      scope.service = iNavbar;
    }
  }
})();
