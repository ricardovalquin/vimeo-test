'use strict';

angular.module('vimeoApp')
  .directive('navBar', [function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/nav-bar/nav-bar.html'
    };
  }]);