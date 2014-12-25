(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .directive('iNavSearch', iNavSearch);

  /** @ngInject */
  function iNavSearch(iNavbar) {
    return {
      templateUrl: 'components/idea/navbar/iNavSearch.directive.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        side: '@',
        placeholder: '@',
      },
      link: link,
    };

    function link(scope, elem) {

      var input = getInput();

      scope.service = iNavbar;
      scope.getInput = getInput;

      input.parent().on('hidden.bs.dropdown', handler);
      input.on('keypress', handler);

      function getInput() {
        return input || elem.find('.dropdown-toggle').first();
      }

      function handler() {
        if (input.is(':focus') && !input.parent().attr('class').match(/open/)) {
          input.dropdown('toggle');
        }
      }
    }
  }
})();
