angular.module( 'bookingadventure.services' )

// Define Service
.factory('slot', [function () {
	var slots = [
		{
			id: 0,
			date: "2016-07-01T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Friday",
			idProduct: 1
		},
		{
			id: 1,
			date: "2016-07-01T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Friday",
			idProduct: 1
		},
		{
			id: 2,
			date: "2016-07-02T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Saturday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-02T11:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Saturday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-02T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Saturday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-02T16:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Saturday",
			idProduct: 1
		},
		{
			id: 4,
			date: "2016-07-03T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Sunday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-03T11:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Sunday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-03T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Sunday",
			idProduct: 1
		},
		{
			id: 3,
			date: "2016-07-03T16:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Sunday",
			idProduct: 1
		},
		{
			id: 6,
			date: "2016-07-04T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 7,
			date: "2016-07-04T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 8,
			date: "2016-07-05T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 9,
			date: "2016-07-05T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 10,
			date: "2016-07-06T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 11,
			date: "2016-07-06T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 12,
			date: "2016-07-07T09:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		},
		{
			id: 13,
			date: "2016-07-07T14:00:00",
			price: 250.00,
			vacancies: 4,
			dayOfTheWeek: "Thursday",
			idProduct: 1
		}
	];

	var getListByIdProduct = function (idProduct) {
		return slots;
	};

	return {
		getListByIdProduct: getListByIdProduct
	};
}]);
