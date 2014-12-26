(function () {
  'use strict';

  angular
    .module('idea.form')
    .directive('iMessage', function iMessage() {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div ng-show="iField.showError(type)" class="text-danger" ng-transclude></div>',
        scope: {
          type: '@',
        },
        link: link,
        require: '^iField'
      };

      function link(scope, elem, attrs, iField) {
        iField.registerErrorType(scope.type);
        scope.iField = iField;
      }
    });
})();
