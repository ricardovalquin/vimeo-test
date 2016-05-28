'use strict';

angular.module('vimeoApp')
  .directive('headerSection', [function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/header/header.html'
    };
  }]);