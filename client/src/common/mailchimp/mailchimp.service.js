(function() {
  'use strict';

  angular
    .module('mailchimp')
    .factory('mailChimpService', mailChimpService);

  mailChimpService.$inject = ['$http'];
  function mailChimpService($http) {
    var url = 'https://<dc>.api.mailchimp.com/3.0/';

    var subscribe = function(subscriber, config) {
      url = url.replace(/<dc>/, config.dc);
      url += 'lists/' + config.listId + '/members/';

      // $http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"}; //This lets us connect to a server on a different domain
      // $http.defaults.headers.common['Authorization'] = 'Basic ' + config.basicAuth;

      var headers = {
        'Content-Type': 'application/json',
        'Authorization': config.basicAuth
      };

      return $http.post(url, subscriber, headers);
    };

    return {
      subscribe: subscribe
    };

  }

})();