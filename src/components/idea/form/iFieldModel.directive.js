(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iFieldModel', iFieldModel);

  /** @ngInject */
  function iFieldModel() {
    return {
      restrict: 'A',
      link: link,
      require: ['^iField', '^ngModel'],
    };

    function link(scope, elem, attrs, ctrls) {
      var iField = ctrls[0];
      var ngModel = ctrls[1];

      iField.registerNgModel(ngModel);

      if (['checkbox', 'radio'].indexOf(elem.attr('type')) === -1) {
        elem.attr('class', elem.attr('class') + ' form-control');
      }
    }
  }
})();
