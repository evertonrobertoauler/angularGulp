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

      iField.registerModel(attrs.name || ngModel.$$parserName, ngModel);

      if (['INPUT', 'SELECT'].indexOf(elem.prop('tagName')) !== -1) {
        elem.attr('class', elem.attr('class') + ' form-control');
      }
    }
  }
})();
