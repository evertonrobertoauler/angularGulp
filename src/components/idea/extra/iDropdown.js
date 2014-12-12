(function () {
  'use strict';

  angular
    .module('idea')
    .filter('iDropdown', iDropdown);

  /** @ngInject */
  function iDropdown() {
    return {
      restrict: 'A',
      link: iDropdownLink
    };
  }

  function iDropdownLink(scope, element) {

    element.parent().on('hidden.bs.dropdown', handler);
    element.on('keypress', handler);
    element.on('blur', elementBlur);

    function handler() {
      if (element.is(':focus') && !element.parent().attr('class').match(/open/)) {
        element.dropdown('toggle');
      }
    }

    function elementBlur() {
      setTimeout(function () {
        if (element.parent().attr('class').match(/open/)) {
          element.dropdown('toggle');
        }
      }, 500);
    }
  }
})();
