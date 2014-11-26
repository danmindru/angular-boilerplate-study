angular.module('abs.model.profile.provider').service('ProviderModel', providerModelService);

providerModelService.$inject = ['$http', '$q'];

function providerModelService($http, $q){
  return {
    providerIndex: providerIndex,
    providerProfile: providerProfile,
    otherProviders: otherProviders
  };

  function providerIndex(){
    return $http.get('./src/app/shared/profile-model/profile-data/provider-index.json');
  }

  function providerProfile(providerId){
    var providerProfilesDefer = $q.defer();
    var availableProviders = $http.get('./src/app/shared/profile-model/profile-data/provider-profiles.json');

    availableProviders.then(function providerProfileResponse(response){
      var currentProvider = {},
        providerExists = false;

      for (var key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          if(providerId === key){
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
    var providerIndex = $http.get('./src/app/shared/profile-model/profile-data/provider-index.json');

    providerIndex.then(function otherProvidersResponse(response){
      response.data[providerId] = null;

      otherProvidersDefer.resolve(response.data);
    }, function otherProvidersError(error){
      otherProvidersDefer.reject(error);
    });

    return otherProvidersDefer.promise;
  }
}