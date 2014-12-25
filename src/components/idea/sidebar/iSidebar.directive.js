(function () {
  'use strict';

  angular
    .module('idea.sidebar')
    .directive('iSidebar', iSidebarDirective);

  /** @ngInject */
  function iSidebarDirective(iSidebar) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'components/idea/sidebar/iSidebar.directive.html',
      scope: {
        categoryState: '@',
        itemState: '@',
      },
      link: link,
    };

    function link(scope) {
      iSidebar.categoryState = scope.categoryState;
      iSidebar.itemState = scope.itemState;
      scope.vm = iSidebar;
    }
  }
})();
