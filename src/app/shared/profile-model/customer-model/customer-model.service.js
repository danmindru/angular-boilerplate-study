angular.module('abs.profileModel.customerModel').service('CustomerModelService', customerModelService);

customerModelService.$inject = ['$http', '$q'];
function customerModelService($http, $q){
  return {
    customerIndex: customerIndex,
    customerProfile: customerProfile
  };

  function customerIndex(){
    return $http.get('./data/customer-index.json');
  }

  function customerProfile(customerId){
    var customerProfilesDefer = $q.defer();
    var availableCustomers = $http.get('./data/customer-profiles.json');

    availableCustomers.then(function customerProfileResponse(response){
      var currentCustomer = {},
          customerExists = false;

      for (var key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          if(customerId === response.data[key].id){
            customerExists = true;
            currentCustomer = response.data[key];
          }
        }
      }

      if(!customerExists) {
        currentCustomer.error = true;
        currentCustomer.message = 'Could not find the customer with id ' + customerId;
      }

      customerProfilesDefer.resolve(currentCustomer);
    }, function customerProfileError(error){
      customerProfilesDefer.reject(error);
    });

    return customerProfilesDefer.promise;
  }
}