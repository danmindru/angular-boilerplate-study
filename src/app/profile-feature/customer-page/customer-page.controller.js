angular.module('abs.feature.profile.customerPage').controller('CustomerPageController', customerPageController);

function customerPageController($log, $stateParams, CustomerModel){
  var vm = this;

  CustomerModel.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
    vm.customer = response;
  }, function customerProfileError(error){
    vm.customer = error;
  });
}

customerPageController.$inject = ['$log', '$stateParams','CustomerModel'];