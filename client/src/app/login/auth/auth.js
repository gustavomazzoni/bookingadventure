(function () {
  'use strict';
 
  angular
    .module('auth', [])
    .factory('authService', authService)
    .service('Session', Session);

  authService.$inject = ['$http', 'Session'];
  function authService($http, Session) {
    var factory = {};

    factory.login = function (credentials) {
      return $http
        .post('/login', credentials)
        .then(function (res) {
          Session.create(res.data.id, res.data.user.id,
                         res.data.user.role);
          return res.data.user;
        });
    };
   
    factory.isAuthenticated = function () {
      return !!Session.userId;
    };
   
    factory.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return factory;
  }

  function Session() {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
  }

})();