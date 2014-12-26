(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iForm', function iForm() {
      return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'components/idea/form/iForm.directive.html',
        scope: {
          submit: '&',
        },
        controller: 'iFormCtrl as vm',
        bindToController: true,
      };
    });
})();
