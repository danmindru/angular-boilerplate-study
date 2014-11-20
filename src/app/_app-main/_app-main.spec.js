describe('In the main application module', function(){
  var RootController,
      $scope,
      $rootScope;

  beforeEach(function(){
    module('abs');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      RootController = $injector.get('$controller')('RootController', {$scope: $scope});
    });
  });

  describe('Root Controller', function(){
    it('should have been properly instantiated', function(){
      expect(RootController).toBeTruthy();
    });
  });
});