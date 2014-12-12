'use strict';

angular
  .module('idea')
  .directive('iNavDropdown', function (iNavbarService) {
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

        var childs = {};

        scope.registerChild = function (state, role) {
          childs[state] = role;
        };

        scope.isVisible = function () {
          for (var i in childs) {
            if (iNavbarService.canShow(childs[i])) {
              return true;
            }
          }

          return false;
        };
      }
    };
  });
