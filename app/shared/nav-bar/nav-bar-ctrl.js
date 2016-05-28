'use strict';

angular.module('vimeoApp')
  .controller('navBarCtrl', ['$scope', '$state', 'categories', 'oauthService', function($scope, $state, categories, oauthService){
    oauthService.authorization().then(function(response){
      console.log(response);
    });

  }]);