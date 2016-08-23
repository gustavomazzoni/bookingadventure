angular.module( 'bookingadventure', [
  'templates-app',
  'templates-common',
  'translateApp',
  'pascalprecht.translate',
  'bookingadventure.services',
  'bookingadventure.home',
  'bookingadventure.about',
  'bookingadventure.adventures',
  'bookingadventure.booking',
  'ui.router',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'duScroll'
])

.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    // .primaryPalette('blue', {
    //   'default': '500', // by default use shade 500 from the blue palette for primary intentions
    //   'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    //   'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    //   'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    // })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('blue');

  // $mdThemingProvider.theme('default')
  //   .primaryPalette('pink')
  //   .accentPalette('orange');
}])

.config(['$stateProvider', '$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
}])

.run( ['$locale', '$translate', function run ($locale, $translate) {
  // set user locale to translate texts
  $translate.use($locale.localeID);
}])

.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

.controller( 'AppCtrl', ['$scope', '$location', '$translate', '$translatePartialLoader', '$document', '$mdDialog', '$mdMedia', 
  function AppCtrl ( $scope, $location, $translate, $translatePartialLoader, $document, $mdDialog, $mdMedia ) {
  $scope.appName = 'BookingAdventure';
  $scope.today = new Date();
  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ' + $scope.appName;
    }
  });

  $translatePartialLoader.addPart('app');
  $translate.refresh();

  $scope.scrollTo = function(id) {
    console.log('scrollTo new', id);

    //Scroll to element with 0 px "padding" and in 1000 ms duration
    $document.scrollToElement(id, 0, 1000);
  };

  // $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  // $scope.showLogin = function(ev) {
  //   var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
  //   $mdDialog.show({
  //     controller: 'LoginCtrl',
  //     templateUrl: 'login/login.tpl.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //     fullscreen: useFullScreen
  //   })
  //   .then(function(answer) {
  //     console.log('You said the information was "' + answer + '".');
  //   }, function() {
  //     console.log('You cancelled the dialog.');
  //   });
  //   $scope.$watch(function() {
  //     return $mdMedia('xs') || $mdMedia('sm');
  //   }, function(wantsFullScreen) {
  //     $scope.customFullscreen = (wantsFullScreen === true);
  //   });
  // };
}]);

