angular.module('abs.profileModel.providerModel').service('ProviderModelService', providerModelService);

providerModelService.$inject = ['$http', '$q'];
function providerModelService($http, $q){
  return {
    providerIndex: providerIndex,
    providerProfile: providerProfile,
    otherProviders: otherProviders
  };

  function providerIndex(){
    return $http.get('./data/provider-index.json');
  }

  function providerProfile(providerId){
    var providerProfilesDefer = $q.defer();
    var availableProviders = $http.get('./data/provider-profiles.json');

    availableProviders.then(function providerProfileResponse(response){
      var currentProvider = {},
        providerExists = false;

      for (var key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          if(providerId === response.data[key].id){
            providerExists = true;
            currentProvider = response.data[key];
          }
        }
      }

      if(!providerExists) {
        currentProvider.error = true;
        currentProvider.message = 'Could not find the provider with id ' + providerId;
      }

      providerProfilesDefer.resolve(currentProvider);
    }, function providerProfileError(error){
      providerProfilesDefer.reject(error);
    });

    return providerProfilesDefer.promise;
  }

  function otherProviders(providerId){
    var otherProvidersDefer = $q.defer();
    var providerIndex = $http.get('./data/provider-index.json');

    providerIndex.then(function otherProvidersResponse(response){
      var i;

      for (i = 0; i <= response.data.length - 1; i++){
        if(response.data[i].id === providerId){
          response.data.splice(i, 1);
        }
      }

      otherProvidersDefer.resolve(response.data);
    }, function otherProvidersError(error){
      otherProvidersDefer.reject(error);
    });

    return otherProvidersDefer.promise;
  }
}