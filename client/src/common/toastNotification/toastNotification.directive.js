(function() {
  'use strict';

  /**
  * @desc directive to present angular material mdToast
  * @example <toast-notification message="message"></toast-notification>
  */
  angular
    .module('toastNotification', [])
    .directive('toastNotification', toastNotification);

  toastNotification.$inject = ['$mdToast'];
  function toastNotification($mdToast) {
    function link(scope, element, attrs) {
      var showSimpleToast = function(msg) {
        if (!msg || msg === '') {
          return false;
        }
        $mdToast.show(
          $mdToast.simple()
            .textContent(msg)
            .position('top right')
            .hideDelay(3000)
        );
      };

      scope.$watch(attrs.message, function(newValue) {
        showSimpleToast(newValue);
      });
    }

    return {
      restrict: 'E',
      link: link
    };
  }

})();
