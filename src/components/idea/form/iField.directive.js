(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iField', function iField() {
      return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'components/idea/form/iField.directive.html',
        scope: {
          label: '@',
          labelClass: '@',
          fieldClass: '@',
        },
        link: link,
        controller: 'iFieldCtrl as vm',
        bindToController: true,
        require: '^iForm'
      };

      function link(scope, elem, attrs, iForm) {
        scope.vm.registerForm(iForm);
      }
    });
})();
