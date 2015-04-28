angular.module('abs.profileFeature.providerPage').controller('ProviderPageController', providerPageController);

providerPageController.$inject = ['$scope', '$stateParams', 'ProviderModelService'];
function providerPageController($scope, $stateParams, ProviderModelService){
  var vm = this;

  ProviderModelService.providerProfile($stateParams.providerId).then(function providerProfileResponse(response){
    var pageTitle,
        pageDesc;

    vm.provider = response;
    pageTitle = !response.error ? vm.provider.name + '\'s Profile Page'
                                : 'Sorry, this provider profile does not exist';
    pageDesc = !response.error ? vm.provider.name + '\'s Profile on Angular Boilerplate Study.'
                               : 'No description available for this customer.';
    $scope.$emit('changedTitle', pageTitle);
    $scope.$emit('changedDesc', pageDesc);
  });

  ProviderModelService.otherProviders($stateParams.providerId).then(function otherProvidersResponse(response){
    vm.otherProviders = response;
  }, function otherProvidersError(error){
    vm.otherProviders = error;
  });
}