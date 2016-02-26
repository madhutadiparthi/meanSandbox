'use strict';

angular.module('meanjsprojApp', [
  'meanjsprojApp.auth',
  'meanjsprojApp.admin',
  'meanjsprojApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
