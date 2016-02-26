'use strict';

angular.module('meanjsprojApp.auth', [
  'meanjsprojApp.constants',
  'meanjsprojApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
