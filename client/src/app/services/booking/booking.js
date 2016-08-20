angular.module( 'bookingadventure.services' )

// Define Service
.factory('booking', [function () {
	var reservation = {};
	var finished = false;
	// var bookingStatus : 'pending';

	var init = function () {
		reservation = {};
		finished = false;
	};
	
	var saveReservationState = function (formData) {
		reservation = formData;
		return reservation;
	};

	var isSlotValid = function (params) {
		if (!isParamsValid(params, reservation) || !reservation.slot) { return false; }
		
		if (!params.date || !!reservation.slot.date.match(params.date) && 
			(!params.quantity || 
				((+params.quantity) === (+reservation.quantity) && 
					params.quantity <= reservation.slot.vacancies))) {
			return true;
		}
		return false;
	};

	var isCostumerValid = function (params) {
		if (!isParamsValid(params, reservation) || !reservation.customer) { return false; }
		
		if (!params.date || !!reservation.slot.date.match(params.date) && 
			(!params.quantity || 
				((+params.quantity) === (+reservation.quantity) && 
					params.quantity <= reservation.slot.vacancies))) {
			return true;
		}
		return false;
	};

	var isParamsValid = function (params, reservation) {
		if ((!reservation || !reservation.product) || 
			((+params.idProduct) !== reservation.product.id)) {
			return false;
		}
		return true;
	};

	var processReservation = function (formData) {
		reservation = formData;
		// execute reservation process in the server side

		// if the response is success, return the reservation object 
		// and set finished to true
		finished = true;
		// else return the error

	};

	var isFinished = function () {
		return finished;
	};

	return {
		initialize: init,
		saveState: saveReservationState,
		isSlotValid: isSlotValid,
		isCostumerValid: isCostumerValid,
		processReservation: processReservation,
		isFinished: isFinished
	};
}]);
