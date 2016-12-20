/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/adventures`, however, could exist several additional folders representing
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
angular.module( 'bookingadventure.adventures.list', [
  'ui.router',
  'pascalprecht.translate',
  'bookingadventure.services'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'adventures.list', {
    url: '?location',
    controller: 'AdventuresCtrl',
    controllerAs: 'vm',
    templateUrl: 'adventures/list/adventures-list.tpl.html',
    resolve: {
      translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('adventures-list');
        $translate.refresh();
      }],
      // Resolve http request to API
      // to search for adventures in the location
      adventuresList: ['$stateParams', 'adventure', function($stateParams, adventure) {
        return adventure.getList($stateParams.location);
      }]
    },
    data:{ pageTitle: 'Adventures' }
  });
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'AdventuresCtrl', ['$stateParams', 'adventuresList', 
  function AdventuresController( $stateParams, adventuresList ) {
  var vm = this;
  vm.location = $stateParams.location;
  vm.adventuresList = adventuresList;
}]);

