angular.module('abs.feature.profile.customerPage').controller('CustomerPageController', customerPageController);

function customerPageController($log, $stateParams, CustomerModel){
  var vm = this;
  vm.customer = CustomerModel.customerProfile($stateParams.customerId);
}

customerPageController.$inject = ['$log', '$stateParams','CustomerModel'];