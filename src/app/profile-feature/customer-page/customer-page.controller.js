angular.module('abs.feature.profile.customerPage').controller('CustomerPageController', customerPageController);

function customerPageController($log, $stateParams, CustomerModel){
  var vm = this;

  CustomerModel.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
    vm.customer = response;
  }, function customerProfileError(error){
    vm.customer = error;
  });

  CustomerModel.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}

customerPageController.$inject = ['$log', '$stateParams','CustomerModel'];