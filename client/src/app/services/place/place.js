angular.module( 'bookingadventure.services' )

// Define Service
.factory('place', [function () {
	var places = [
		{
			title: "Rio de Janeiro",
			banner: "http://placehold.it/750x450"
		},
		{
			title: "Florianópolis",
			banner: "http://placehold.it/750x450"
		},
		{
			title: "Búzios",
			banner: "http://placehold.it/750x450"
		},
		{
			title: "Angra dos Reis",
			banner: "http://placehold.it/750x450"
		},
		{
			title: "Teresópolis",
			banner: "http://placehold.it/750x450"
		}
	];

	var getPlacesList = function () {
		return places;
	};

	return {
		getPlacesList: getPlacesList
	};
}]);
