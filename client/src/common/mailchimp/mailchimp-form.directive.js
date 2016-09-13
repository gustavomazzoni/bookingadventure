(function() {
  'use strict';
 
  /**
  * @desc directive to MailChimp signup form
  * @example <gm-mailchimp-form></gm-mailchimp-form>
  */
  angular
    .module('mailchimp', [])
    .config(config)
    .directive('gmMailchimpForm', gmMailchimpForm);

  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"}; //This lets us connect to a server on a different domain
    // Access-Control-Allow-Origin
  }

  gmMailchimpForm.$inject = [];
  function gmMailchimpForm() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<form name="mailChimpForm" ng-submit="mailchimpCtrl.subscribe()" aria-label="MailChimp Signup Form" ' + 
                  'ng-transclude novalidate>' +
                '</form>',
      controller: 'MailChimpCtrl',
      controllerAs: 'mailchimpCtrl',
      scope: {
        ngModel: '=',
        config: '=',
        onSubmit: '&'
      }
    };
  }

})();
