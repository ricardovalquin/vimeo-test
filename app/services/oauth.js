'use strict';

angular.module('vimeoApp')
  .factory('oauthService', ['$http', 'EnvironmentConfig', function ($http, env) {
    return {
      authorization: authorize
    };

    function authorize() {//url, body, config
      return $http.post(env.API_BASE + '/oauth/authorize/client?grant_type=client_credentials', {},
        {headers: {"Authorization": 'bearer ' + env.ACCESS_TOKEN}}
      ).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(error) {
          return error;
        }
      );
    }

  }]);