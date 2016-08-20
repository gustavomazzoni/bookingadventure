
angular.module( 'bookingadventure.booking' )

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'booking.customer', {
    url: '/customer',
    templateUrl: 'booking/customer/customer.tpl.html',
    controller: 'CustomerCtrl',
    controllerAs: 'vm',
    resolve: {
      translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('customer');
        $translate.refresh();
      }]
    },
    data:{ pageTitle: 'Booking - Customer', step: 1 }
  });
}])

.controller( 'CustomerCtrl', ['$scope', function CustomerController( $scope ) {
  var vm = this;

}]);

