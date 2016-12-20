var bookingForm = {
  templateUrl: 'adventures/detail/booking-form/booking-form.component.tpl.html',
  controller: BookingFormController,
  bindings: {
    adventure: '<',
    // availableDates: '<',
    selectedDate: '<',
    quantity: '<',
    onDateSelect: '&',
    onChange: '&',
    onSubmit: '&'
  }
};

BookingFormController.$inject = ['$mdPanel', '$q'];
function BookingFormController($mdPanel, $q) {
  var vm = this;
  
  var today = new Date();
  vm.minDate = today;
  vm.maxDate = new Date(
      today.getFullYear(),
      today.getMonth() + 2,
      today.getDate());

  vm.booking = {
    slot_id: null,
    date: vm.selectedDate,
    price: +vm.adventure.price,
    quantity: 1,
    total: 0,
    state: 'new',
    tax: 0.1,
    adventure: vm.adventure
  };

  vm.availableDates = [];
  vm.loadDatesMonth = function(month) {
    console.log('loadDatesMonth', month);
    return $q.when(vm.availableDates);
  };
  vm.onDateSelected = function(date) {
    console.log('onDateSelected', date);
  };

  vm.processForm = function() {
    vm.onSubmit(vm.booking);
    // // start the booking reservation
    // booking.startReservation(vm.formData).then(function(result) {
    //   // go to confirmation view
    //   // $state.go('confirmation', {bookingId: result._id});
    // }, function onError(e) {
    //   // show notification to the user
    //   console.log(e);
    //   return;
    // });
  };

  vm.getTotal = function() {
    return vm.booking.total;
  };

  vm.showCalendar = function(ev) {
    var position = $mdPanel.newPanelPosition()
        .relativeTo('.ba-datepicker')
        .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);

    var config = {
      attachTo: angular.element(document.body),
      controller: PanelCalendarCtrl,
      controllerAs: 'vm',
      templateUrl: 'adventures/detail/booking-form/panel-calendar.tpl.html',
      panelClass: 'panel-calendar',
      position: position,
      locals: {
        'availableDates': vm.availableDates,
        'selectedDate': vm.selectedDate,
        'loadDatesMonth': vm.loadDatesMonth,
        'onDateSelected': vm.onDateSelected
      },
      openFrom: ev,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 2
    };

    $mdPanel.open(config);
  };
}

PanelCalendarCtrl.$inject = ['mdPanelRef', '$timeout'];
function PanelCalendarCtrl(mdPanelRef, $timeout) {
  this._mdPanelRef = mdPanelRef;
  // $timeout(function() {
  //   var selected = document.querySelector('.demo-menu-item.selected');
  //   if (selected) {
  //     angular.element(selected).focus();
  //   } else {
  //     angular.element(document.querySelectorAll('.demo-menu-item')[0]).focus();
  //   }
  // });
}

PanelCalendarCtrl.prototype.selectDate = function(date) {
  this.selectedDate = date;
  if (this._mdPanelRef) {
    this._mdPanelRef.close().then(function() {
      angular.element(document.querySelector('.ba-datepicker')).focus();
    });
  }
};


angular
  .module( 'bookingadventure.booking-form', [
    'pascalprecht.translate',
    'booking.widgets.calendar'
  ])
  .component('bookingForm', bookingForm);
