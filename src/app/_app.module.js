(function () {
  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'ngMaterial',
      'myApp.view1',
      'myApp.view2',
      'myApp.version'
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
