(function () {
  'use strict';

  angular
    .module('idea')
    .directive('iNav', iNav);

  /** @ngInject */
  function iNav() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<ul class="nav navbar-nav" ng-class="{\'navbar-right\': side === \'right\'}" ng-transclude></ul>',
      scope: {
        side: '@',
      }
    };
  }
})();
