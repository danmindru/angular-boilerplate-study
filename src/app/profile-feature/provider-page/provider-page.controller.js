angular.module('abs.feature.profile.providerPage').controller('ProviderPageController', providerPageController);

function providerPageController($scope, $stateParams, ProviderModel){
  var vm = this;

  if($stateParams.providerId){
    ProviderModel.providerProfile($stateParams.providerId).then(function providerProfileResponse(response){
      var pageTitle;

      vm.provider = response;
      pageTitle = !response.error ? vm.provider.name + '\'s Profile Page' : 'Sorry, this provider profile does not exist';
      $scope.$emit('changedPage', pageTitle);
    });
  }

  ProviderModel.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });

  ProviderModel.otherProviders($stateParams.providerId).then(function otherProvidersResponse(response){
    vm.otherProviders = response;
  }, function otherProvidersError(error){
    vm.otherProviders = error;
  });
}

providerPageController.$inject = ['$scope', '$stateParams', 'ProviderModel'];