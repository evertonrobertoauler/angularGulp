(function () {
  'use strict';

  angular
    .module('myApp', [
      'idea',
      'ui.router',
      'myApp.view1',
      'myApp.view2'
    ])
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/view1');

    $stateProvider
      .state('myApp', {
        abstract: true,
        templateUrl: 'app/app.html',
      });
  }
})();
