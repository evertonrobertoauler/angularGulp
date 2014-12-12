'use strict';

angular
  .module('idea.navbar')
  .directive('iNavDropdown', function (iNavbar) {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'components/idea/navbar/iNavDropdown.directive.html',
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
            if (iNavbar.canShow(childs[i])) {
              return true;
            }
          }

          return false;
        };
      }
    };
  });
