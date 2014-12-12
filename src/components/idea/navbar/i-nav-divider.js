'use strict';

angular
  .module('idea')
  .directive('iNavDivider', function () {
    return {
      restrict: 'E',
      template: '<li class="divider"></li>',
    };
  });
