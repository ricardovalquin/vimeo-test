'use strict';


var vimeoApp = angular.module('vimeoApp', [
  'ui.router'
]);

vimeoApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/home');
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html'
      //controller: 'navBarCtrl'
    })
    .state('detail', {
      url: '/detail',
      templateUrl: 'components/detail/detail.html'
    });
});