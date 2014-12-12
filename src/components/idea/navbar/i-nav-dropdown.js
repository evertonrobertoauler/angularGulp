'use strict';

angular
  .module('idea')
  .directive('iNavDropdown', function iNav() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/navbar/i-nav-dropdown.html',
      scope: {
        title: '@',
      },
      link: function (scope, elem) {
        scope.first = elem.parent().parent().prop('tagName').toLowerCase() === 'i-nav';
      }
    };
  });
