angular.module('abs.profileFeature.providerIndex').controller('ProviderIndexController', providerIndexController);

providerIndexController.$inject = ['ProviderModelService'];
function providerIndexController(ProviderModelService){
  var vm = this;

  ProviderModelService.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });
}