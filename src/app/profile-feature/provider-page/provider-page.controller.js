angular.module('abs.profileFeature.providerPage').controller('ProviderPageController', providerPageController);

providerPageController.$inject = ['$scope', '$stateParams', 'ProviderModelService'];
function providerPageController($scope, $stateParams, ProviderModelService){
  var vm = this;

  if($stateParams.providerId){
    ProviderModelService.providerProfile($stateParams.providerId).then(function providerProfileResponse(response){
      var pageTitle;

      vm.provider = response;
      pageTitle = !response.error ? vm.provider.name + '\'s Profile Page' : 'Sorry, this provider profile does not exist';
      $scope.$emit('changedPage', pageTitle);
    });
  }

  ProviderModelService.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });

  ProviderModelService.otherProviders($stateParams.providerId).then(function otherProvidersResponse(response){
    vm.otherProviders = response;
  }, function otherProvidersError(error){
    vm.otherProviders = error;
  });
}