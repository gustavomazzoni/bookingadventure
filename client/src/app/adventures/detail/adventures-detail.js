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
angular.module( 'bookingadventure.adventures.detail', [
  'ui.router',
  'ngMessages',
  'pascalprecht.translate',
  'bookingadventure.booking-form',
  'bookingadventure.services'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', function config( $stateProvider ) {
  $stateProvider.state( 'adventures.detail', {
    url: '/:name',
    controller: 'AdventuresDetailCtrl',
    controllerAs: 'vm',
    templateUrl: 'adventures/detail/adventures-detail.tpl.html',
    resolve: {
      translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('adventures-detail');
        $translate.refresh();
      }],
      // Resolve http request to API
      // to find for adventure by name
      adventurePromise: ['$stateParams', 'adventure', function($stateParams, adventure) {
        return adventure.get($stateParams.name);
      }]
    },
    data:{ pageTitle: 'Adventure - Details' }
  });
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'AdventuresDetailCtrl', ['$stateParams', 'adventurePromise', 
  function AdventuresDetailController( $stateParams, adventurePromise ) {
  var vm = this;
  vm.adventure = adventurePromise;

  // vm.openSlotDialog = function(event) {
  //   $mdDialog.show({
  //     controller: 'SlotDialogCtrl',
  //     controllerAs: 'vm',
  //     scope: scope.$new(),   // Uses prototypal inheritance to gain access to parent scope
  //     templateUrl: 'game/act-inventory/act-inventory-dialog.tpl.html',
  //     parent: angular.element(document.body),
  //     targetEvent: event,
  //     clickOutsideToClose: true,
  //     fullscreen: false
  //   })
  //   .then(function(auction) {
  //     startAuction(auction);
  //   });
  // };

}]);

