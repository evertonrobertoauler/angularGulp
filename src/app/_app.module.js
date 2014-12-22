(function () {
  'use strict';

  angular
    .module('myApp', [
      //'ngHtml2js', //'gulp buld' adiciona este module
      'ngSanitize',
      'ngTouch',
      'idea',
      'ui.router',
      'myApp.view1',
      'myApp.view2'
    ])
    .config(stateConfig);

  /** @ngInject */
  function stateConfig($urlRouterProvider, $stateProvider, $compileProvider) {
    $urlRouterProvider.otherwise('/view1');

    $stateProvider
      .state('myApp', {
        abstract: true,
        templateUrl: 'app/app.html',
      });

    // 'gulp build' altera automaticamente para (false)
    $compileProvider.debugInfoEnabled(true);
  }
})();
