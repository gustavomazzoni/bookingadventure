angular.module( 'bookingadventure.booking', [
  'ui.router',
  'pascalprecht.translate',
  'bookingadventure.services'
])

.run(['$rootScope', '$state', 'booking', function run($rootScope, $state, booking) {
  $rootScope.$state = $state;

  // Listen to '$stateChangeStart' to check if previous state has been filled or not
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    // check if params has changed
    if (JSON.stringify(fromParams) !== JSON.stringify(toParams)) {
      // Invalidate user session
      // initialize booking service process
      booking.initialize();
    }
    
    switch (toState.name) {
      case 'booking.customer':
        // check if slot object is valid
        if (!booking.isSlotValid(toParams)) {
          event.preventDefault();
          console.log('Request not valid');
          // if not valid
          // Redirect to first state.
          $state.transitionTo('booking.calendar', toParams);
        }
        break;
      case 'booking.payment':
        // check if slot and customer objects are valid
        if (!booking.isSlotValid(toParams) ||
          !booking.isCostumerValid(toParams)) {
          event.preventDefault();
          console.log('Request not valid');
          // if not valid
          // Redirect to first state.
          $state.transitionTo('booking.calendar', toParams);
        }
        break;
      case 'booking.confirmation':
        // check if booking process is finished
        if (!booking.isFinished()) {
          event.preventDefault();
          console.log('Request not valid');
          // if not valid
          // Redirect to first state.
          $state.transitionTo('booking.calendar', toParams);
        }
    }
  });
}])

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'booking', {
    abstract: true,
    url: '/booking/{idProduct:int}?{date:[0-9]{4}-[0-9]{2}-[0-9]{2}}&{quantity:[0-9]{1,2}}',
    views: {
      "main": {
        templateUrl: 'booking/booking.tpl.html',
        controller: 'BookingCtrl',
        controllerAs: 'vm',
        resolve: {
          translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('booking');
            $translate.refresh();
          }],
          // initialize booking service process
          init: ['booking', function(booking) {
            booking.initialize();
          }],
          // Perform http request to API
          // to get product
          product: ['$stateParams', 'product', function($stateParams, product) {
            return product.findById($stateParams.idProduct);
          }]
        }
      }
    },
    data:{ pageTitle: 'Booking', step: 0 }
  });
}])

.controller( 'BookingCtrl', ['$scope', '$state', 'product', 'booking', 
  function BookingController( $scope, $state, product, booking ) {
  var vm = this;
  var states = ['booking.calendar', 'booking.customer', 'booking.payment', 'booking.confirmation'];

  $scope.formData = {
    product: product
  };

  vm.processForm = function() {
    // Get current state
    var step = $state.current.data.step;
    
    // if it's the step 2, payment
    if (step === 2) {
      // process the booking reservation 
      booking.processReservation($scope.formData);

      // then, go to confirmation view
    } else {
      // save form data in the service
      booking.saveState($scope.formData);
    }

    // prepare the next
    step++;
    // go to next step/state
    $state.go(states[step]);
  };

}]);

