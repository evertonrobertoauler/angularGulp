(function () {
  'use strict';

  angular
    .module('idea.sidebar')
    .directive('iItem', iItem);

  /** @ngInject */
  function iItem(iSidebar) {
    return {
      restrict: 'E',
      scope: {
        id: '@',
        category: '@',
        label: '@',
      },
      link: link,
    };

    function link(scope) {
      iSidebar.registerItem(scope.id, scope.category, scope.label);
    }
  }
})();
