(function () {
  'use strict';

  angular
    .module('idea.breadcrumb')
    .directive('iBreadcrumb', iBreadcrumb);

  /** @ngInject */
  function iBreadcrumb() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/breadcrumb/iBreadcrumb.directive.html',
      scope: {},
      controller: 'iBreadcrumbCtrl as vm',
      bindToController: true,
    };
  }
})();
