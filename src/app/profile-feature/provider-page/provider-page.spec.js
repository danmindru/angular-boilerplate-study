describe('Profile feature: Provider page', function(){
  beforeEach(module('abs.profileFeature.providerPage'));

  var ProviderPageController,
      scope,
      stateParams,
      ProviderModelService,
      q;

  beforeEach(function(){
    ProviderModelService = {
      providerIndex: function providerIndex(){
        var deferred = q.defer();
        return deferred.promise;
      },
      providerProfile: function providerProfile(){
        var deferred = q.defer();
        return deferred.promise;
      },
      otherProviders: function otherProviders(){
        var deferred = q.defer();
        return deferred.promise;
      }
    };
  });

  beforeEach(inject(function($controller, $rootScope, $q){
    q = $q;
    scope = $rootScope.$new();
    stateParams = {};
    stateParams.providerId = 'quick-pot';

    ProviderPageController = $controller('ProviderPageController', {
      $scope: scope,
      $stateParams: stateParams,
      ProviderModelService: ProviderModelService
    });
  }));

  describe('Provider Page Controller', function(){
    it('should have been properly instantiated', function(){
      expect(ProviderPageController).toBeTruthy();
    });
  });
});