(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iMessage', iMessage);

  /** @ngInject */
  function iMessage() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div ng-show="vm.iField.showError(vm.type)" class="text-danger">{{ vm.message }}</div>',
      scope: {
        type: '@',
      },
      compile: compile,
      controller: function () {
      },
      controllerAs: 'vm',
      bindToController: true,
      require: '^iField'
    };

    function compile() {
      return {pre: link};
    }

    function link(scope, elem, attrs, iField, transcludeFn) {

      iField.registerErrorType(scope.vm.type);

      scope.vm.iField = iField;

      transcludeFn(getMessage);

      function getMessage(elem) {
        scope.vm.message = elem.html();
      }
    }
  }
})();
