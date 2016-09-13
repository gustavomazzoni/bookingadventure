(function() {
  'use strict';
 
  angular
    .module('mailchimp')
    .controller('MailChimpCtrl', MailChimpController);
 
  MailChimpController.$inject = ['$scope', 'mailChimpService'];
  function MailChimpController($scope, mailChimpService) {
    var vm = this;

    vm.subscribe = function() {
      console.log( $scope.ngModel );
      mailChimpService.subscribe($scope.ngModel, $scope.config).then(function(subscriber) {
        console.log( 'Congrats', subscriber );
        vm.message = 'Congrats!';
      }, function(error) {
        console.log( 'Error', error );
        vm.message = error;
      });
    };
  }
 
})();