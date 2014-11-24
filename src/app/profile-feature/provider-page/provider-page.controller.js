angular.module('abs.feature.profile.providerPage').controller('ProviderPageController', providerPageController);

function providerPageController($log){
  $log.info('You are on a provider page');
}

providerPageController.$inject = ['$log'];