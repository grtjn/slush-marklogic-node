
angular.module('sample', ['ngRoute', 'ngCkeditor', 'sample.user', 'sample.search', 'sample.common', 'sample.detail', 'ui.bootstrap', 'compile'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    'use strict';

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/search/search.html'
      })
      .when('/create', {
        templateUrl: '/views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/detail', {
        templateUrl: '/detail/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/profile', {
        templateUrl: '/user/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
