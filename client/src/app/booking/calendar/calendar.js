
angular.module( 'bookingadventure.booking' )

.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'booking.calendar', {
    url: '',
    templateUrl: 'booking/calendar/calendar.tpl.html',
    controller: 'CalendarCtrl',
    controllerAs: 'vm',
    resolve: {
      translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('calendar');
        $translate.refresh();
      }],
      // Perform http request to API
      // to get slots from product
      slots: ['$stateParams', 'slot', function($stateParams, slot) {
        return slot.getListByIdProduct($stateParams.idProduct);
      }],
      dates: function() {
        return ["2016-07-01","2016-07-02","2016-07-03","2016-07-04","2016-07-05","2016-07-06","2016-07-07"];
      },
      quantities: function() {
        return [1,2,3,4,5,6,7,8,9];
      }
    },
    data:{ pageTitle: 'Booking - Calendar', step: 0 }
  });
}])

.controller( 'CalendarCtrl', ['$scope', '$stateParams', 'slots', 'dates', 'quantities',
  function CalendarController( $scope, $stateParams, slots, dates, quantities ) {
  var vm = this;
  vm.slots = slots;
  vm.dates = dates;
  vm.quantities = quantities;

  vm.selectedDate = $stateParams.date || vm.dates[3];
  vm.selectedQuantity = $stateParams.quantity || vm.quantities[0];

  // set quantity in formData inherited scope
  setQuantity(vm.selectedQuantity);
  
  vm.filterSlots = function(slot, index, array) {
    if (!!slot.date.match(vm.selectedDate) && slot.vacancies >= vm.selectedQuantity) {
      return true;
    }
    return false;
  };

  vm.selectSlot = function(slot) {
    // Set slot object inside formData object on inherited scope
    $scope.formData.slot = slot;
  };

  function setQuantity(quantity) {
    // Set quantity inside formData object on inherited scope
    $scope.formData.quantity = (+quantity);
  }

}]);

