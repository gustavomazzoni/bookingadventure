(function () {
  'use strict';
 
  angular
    .module('login', ['auth'])
    .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .controller('LoginCtrl', LoginController);
 
  LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'authService'];
  function LoginController($scope, $rootScope, AUTH_EVENTS, authService) {
    var vm = this;

    vm.credentials = {
      email: '',
      password: '',
      remember: false
    };

    vm.login = function (credentials) {
      authService.login(credentials).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  }
 
})();