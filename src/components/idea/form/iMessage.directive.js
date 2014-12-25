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
      template: '<div ng-show="vm.iField.showError(vm.type)" class="text-danger" ng-transclude></div>',
      scope: {
        type: '@',
      },
      link: link,
      controller: function () {
      },
      controllerAs: 'vm',
      bindToController: true,
      require: '^iField'
    };


    function link(scope, elem, attrs, iField) {
      iField.registerErrorType(scope.vm.type);
      scope.vm.iField = iField;
    }
  }
})();
