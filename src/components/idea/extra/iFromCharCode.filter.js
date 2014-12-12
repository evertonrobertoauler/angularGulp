(function () {
  'use strict';

  angular
    .module('idea.extra')
    .filter('iFromCharCode', iFromCharCode);

  /** @ngInject */
  function iFromCharCode() {
    return function (code) {
      return String.fromCharCode(code);
    };
  }
})();
