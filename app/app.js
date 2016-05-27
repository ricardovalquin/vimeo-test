'use strict';

var vimeoApp = angular.module('vimeoApp', [
  'ui.router'
]);

vimeoApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html',
      controller: 'home-controller.js'
    })
    .state('detail', {
      url: '/detail',
      templateUrl: 'components/detail/detail.html'
    });
});