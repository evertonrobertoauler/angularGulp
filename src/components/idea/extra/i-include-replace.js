(function () {
  'use strict';

  angular
    .module('idea')
    .directive('iIncludeReplace', iIncludeReplace);

  /** @ngInject */
  function iIncludeReplace() {
    return {
      require: 'ngInclude',
      restrict: 'A',
      link: function postLink(scope, el) {
        el.replaceWith(el.children());
      }
    };
  }
})();
