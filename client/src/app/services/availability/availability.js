angular
  .module('bookingadventure.services')
  .factory('availability', availability);

// Define Service
availability.$inject = ['$http', '$q'];
function availability($http, $q) {
  var availableDates = [
    {
      _id : { year: 2016, month: 12, day: 15 },
      minPrice: 250.00,
      count: 1
    },
    { 
      _id : { year: 2016, month: 12, day: 19 },
      minPrice: 200.00,
      count: 1
    },
    { 
      _id : { year: 2016, month: 12, day: 21 },
      minPrice: 270.00,
      count: 1
    },
    { 
      _id : { year: 2016, month: 12, day: 27 },
      minPrice: 300.00,
      count: 1
    },
    { 
      _id : { year: 2016, month: 12, day: 29 },
      minPrice: 300.00,
      count: 1
    }
  ];

  var getAvailableDaysForMonth = function (serviceId, date, quantity) {
    if (!serviceId) { return null; }

    if (!date) {
      date = new Date();
      var year = date.getUTCFullYear(); //universal time
      var month = date.getUTCMonth()+1; //universal time
      date = year+'-'+month;
    }

    if (!quantity) { quantity = 1; }

    // TODO: remove it and use oficial code below
    return $q.when(availableDates);

    // TODO: oficial code
    // var url = 'http://localhost:3000/api/v1/services/'+serviceId+'/availability/dates/'+date;
    // return $http.get(url, {params: {quantity: quantity}}).then( function(response) {
    //   console.log('Response object from REST API services/availability/dates endpoint', response);
    //   return response.data;
    // }, function errorCallback(e) {
    //   return e;
    // });
  };

  var getAvailableSlotsForDay = function (serviceId, date, quantity) {
    if (!serviceId || !date) { return null; }

    if (!quantity) { quantity = 1; }

    var url = 'http://localhost:3000/api/v1/services/'+serviceId+'/availability/slots';
    return $http.get(url, {params: {date: date, quantity: quantity}}).then( function(response) {
      console.log('Response object from REST API services/availability/slots endpoint', response);
      return response.data;
    }, function errorCallback(e) {
      return e;
    });
  };

  return {
    findAvailableDaysForMonth: getAvailableDaysForMonth,
    findAvailableSlotsForDay: getAvailableSlotsForDay
  };
}
