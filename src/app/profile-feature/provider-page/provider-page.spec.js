describe('In the profile feature, the provider page', function(){
  var providerPageController,
      $scope,
      $rootScope;

  beforeEach(function(){
    module('abs.feature.profile.providerPage');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      providerPageController = $injector.get('$controller')('ProviderPageController', {$scope: $scope});
    });
  });

  describe('Provider Page Controller', function(){
    it('should have been properly instantiated', function(){
      expect(providerPageController).toBeTruthy();
    });
  });
});