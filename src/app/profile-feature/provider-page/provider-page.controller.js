angular.module('abs.feature.profile.providerPage').controller('ProviderPageController', providerPageController);

function providerPageController($log, $stateParams, ProviderModel){
  var vm = this;
  vm.provider = ProviderModel.providerProfile($stateParams.providerId);
  vm.otherProviders = ProviderModel.otherProviders($stateParams.providerId);
}

providerPageController.$inject = ['$log', '$stateParams', 'ProviderModel'];