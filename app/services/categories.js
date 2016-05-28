'use strict';

angular.module('vimeoApp')
.factory('categories', ['$http', 'EnvironmentConfig', function CategoryFactory($http, env){
  return {
    all: function() {
      return $http({method: "Get", url: env.API_BASE + "/categories"});
    }
  }
}]);