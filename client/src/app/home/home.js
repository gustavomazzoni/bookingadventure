/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'bookingadventure.home', [
  'ui.router',
  'pascalprecht.translate',
  'bookingadventure.services',
  'mailchimp'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/',
    views: {
      "main": {
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'home/home.tpl.html',
        resolve: {
          translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('home');
            $translate.refresh();
          }],
          // Resolve http request to API
          // to get popular adventures
          popularList: ['adventure', function(adventure) {
            return adventure.getPopularList();
          }],
          // Resolve http request to API
          // to get deals
          dealsList: ['adventure', function(adventure) {
            return adventure.getDealsList();
          }],
          // Resolve http request to API
          // to get places
          placesList: ['place', function(place) {
            return place.getPlacesList();
          }]
        }
      }
    },
    data:{ pageTitle: 'Home' }
  });
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ['popularList', 'dealsList', 'placesList', 
  function HomeController( popularList, dealsList, placesList ) {
  var vm = this;
  vm.popularAdventures = popularList;
  vm.deals = dealsList;
  vm.places = placesList;

  vm.adventuresMailChimp = {
    basicAuth: 'ba:e1855aca2180a4e6cec619c4b9044397-us14',
    dc: 'us14',
    listId: '0b42fc5dde'
  };
}]);

