'use strict';

angular
  .module('idea.navbar')
  .directive('iNavDivider', function () {
    return {
      restrict: 'E',
      template: '<li class="divider"></li>',
    };
  });
