angular.module('abs.feature.profile.providerPage').controller('ProviderPageController', providerPageController);

function providerPageController($log, $stateParams, ProfileModel){
  var vm = this;
  vm.provider = ProfileModel.providerProfile($stateParams.providerId);
  vm.otherProviders = ProfileModel.otherProviders($stateParams.providerId);
}

providerPageController.$inject = ['$log', '$stateParams', 'ProfileModel'];