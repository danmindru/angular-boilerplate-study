angular.module('abs.feature.profile.providerPage').controller('ProviderPageController', providerPageController);

function providerPageController($log, $stateParams, ProviderModel){
  var vm = this;
  ProviderModel.providerProfile($stateParams.providerId).then(function providerProfileResponse(response){
    vm.provider = response;
  }, function providerProfileError(error){
    vm.provider = error;
  });

  ProviderModel.otherProviders($stateParams.providerId).then(function otherProvidersResponse(response){
    vm.otherProviders = response;
  }, function otherProvidersError(error){
    vm.otherProviders = error;
  });
}

providerPageController.$inject = ['$log', '$stateParams', 'ProviderModel'];