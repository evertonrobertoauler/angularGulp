(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavbar', iNavbarDirective);

  /** @ngInject */
  function iNavbarDirective(iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavbar.directive.html',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@',
        state: '@',
        roles: '=',
      },
      link: link,
    };

    function link(scope, elem) {

      var button = getCollapseButton();

      scope.getCollapseButton = getCollapseButton;

      iNavbar.roles = scope.roles;

      iNavbar.triggerCollapse = function () {
        button.collapse('hide');
      };

      button.on('hidden.bs.collapse', function () {
        iNavbar.collapsed = false;
      });

      button.on('shown.bs.collapse', function () {
        iNavbar.collapsed = true;
      });

      function getCollapseButton() {
        return button || elem.find('#iNavBar');
      }
    }
  }
})();
