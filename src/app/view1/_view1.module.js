(function () {
  'use strict';

  angular
    .module('myApp.view1', ['ui.router'])
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($stateProvider) {
    $stateProvider
      .state('myApp.view1', {
        url: '/view1',
        controller: 'View1Ctrl',
        templateUrl: 'app/view1/view1.html',
      });
  }
})();
