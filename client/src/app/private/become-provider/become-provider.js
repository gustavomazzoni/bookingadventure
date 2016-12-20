(function( angular ) {
  'use strict';

  angular
    .module( 'bookingadventure.become-provider', [
      'ui.router',
      'pascalprecht.translate'
    ])
    .config( config )
    .controller( 'BecomeProviderCtrl', BecomeProviderController );

  config.$inject = ['$stateProvider'];
  function config( $stateProvider ) {
    $stateProvider.state( 'becomeProvider', {
      url: '/become-a-provider',
      views: {
        "main": {
          controller: 'BecomeProviderCtrl',
          controllerAs: 'vm',
          templateUrl: 'private/become-provider/become-provider.tpl.html',
          resolve: {
            translate: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
              $translatePartialLoader.addPart('become-provider');
              $translate.refresh();
            }]
          }
        }
      },
      data:{ pageTitle: 'Become a Provider' }
    });
  }

  BecomeProviderController.$inject = [];
  function BecomeProviderController() {
    var vm = this;
  }

})( angular );