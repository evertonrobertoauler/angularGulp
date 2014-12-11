'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'ngMaterial',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  });
