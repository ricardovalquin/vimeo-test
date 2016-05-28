'use strict';

angular.module('vimeoApp')
  .directive('footerSection', [function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/footer/footer.html'
    };
  }]);