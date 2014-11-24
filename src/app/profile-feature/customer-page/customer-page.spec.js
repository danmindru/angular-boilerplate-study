describe('In the profile feature, the customer page', function(){
  var customerPageController,
      $scope,
      $rootScope;

  beforeEach(function(){
    module('abs.feature.profile.customerPage');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      customerPageController = $injector.get('$controller')('CustomerPageController', {$scope: $scope});
    });
  });

  describe('Customer Page Controller', function(){
    it('should have been properly instantiated', function(){
      expect(customerPageController).toBeTruthy();
    });
  });
});