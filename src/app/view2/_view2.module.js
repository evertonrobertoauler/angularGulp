(function () {
  'use strict';

  angular
    .module('myApp.view2', ['ui.router'])
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    $stateProvider
      .state('myApp.view2', {
        url: '/view2',
        controller: 'View2Ctrl',
        templateUrl: 'app/view2/view2.html',
      });
  }
})();
