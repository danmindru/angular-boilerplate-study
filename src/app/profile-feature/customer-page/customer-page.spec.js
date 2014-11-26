describe('Profile feature: Customer page', function(){
  var customerPageController,
      scope,
      stateParams,
      CustomerModel,
      q;

  beforeEach(function(){
    module('abs.feature.profile.customerPage');

    CustomerModel = {
      customerIndex: function customerIndex(){
        return;
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
      CustomerModel: CustomerModel
    });
  }));

  describe('Customer Page Controller', function(){
    it('should have been properly instantiated', function(){
      expect(customerPageController).toBeTruthy();
    });
  });
});