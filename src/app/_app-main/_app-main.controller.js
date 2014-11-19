angular.module(absConfig.appRootModuleName).controller('RootController', rootController);

function rootController($log) {
  $log.warn('App root ctrl is rollin');
}

rootController.$inject = ['$log'];