(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavDivider', iNavDivider);

  /** @ngInject */
  function iNavDivider() {
    return {
      restrict: 'E',
      template: '<li class="divider"></li>',
    };
  }
})();
