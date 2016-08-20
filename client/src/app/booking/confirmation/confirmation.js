angular.module( 'bookingadventure.booking' )

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'booking.confirmation', {
    url: '/confirmation',
    templateUrl: 'booking/confirmation/confirmation.tpl.html',
    controller: 'ConfirmationCtrl',
    controllerAs: 'vm',
    resolve: {
      translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('confirmation');
        $translate.refresh();
      }],
      // check if booking process is finished
      checkSession: ['booking', function(booking) {
        if (!booking.isFinished()) {
          console.log('Request not valid');
          // if not valid
          // Redirect to first state.
          $state.go('booking.calendar');
        }
      }]
    },
    data:{ pageTitle: 'Booking - Confirmation', step: 3 }
  });
}])

.controller( 'ConfirmationCtrl', ['$scope', function ConfirmationController( $scope ) {
  var vm = this;

}]);

