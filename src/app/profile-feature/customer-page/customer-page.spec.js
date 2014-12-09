describe('Profile feature: Customer page', function(){
  var customerPageController,
      scope,
      stateParams,
      CustomerModelService,
      q;

  beforeEach(function(){
    module('abs.profileFeature.customerPage');

    CustomerModelService = {
      customerIndex: function customerIndex(){
        var deferred = q.defer();
        return deferred.promise;
      },
      customerProfile: function customerProfile(){
        var deferred = q.defer();
        return deferred.promise;
      }
    };
  });

  beforeEach(inject(function($controller, $rootScope, $q){
    q = $q;
    scope = $rootScope.$new();
    stateParams = {};
    stateParams.customerId = 'jenny-smith';

    customerPageController = $controller('CustomerPageController', {
      $scope: scope,
      $stateParams: stateParams,
      CustomerModelService: CustomerModelService
    });
  }));

  describe('Customer Page Controller', function(){
    it('should have been properly instantiated', function(){
      expect(customerPageController).toBeTruthy();
    });
  });
});