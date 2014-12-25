(function () {
  'use strict';

  angular
    .module('idea.sidebar')
    .directive('iCategory', iCategory);

  /** @ngInject */
  function iCategory(iSidebar) {
    return {
      restrict: 'E',
      scope: {
        id: '@',
        parent: '@',
        label: '@',
      },
      link: link,
    };

    function link(scope) {
      iSidebar.registerCategory(scope.id, scope.parent, scope.label);
    }
  }
})();
