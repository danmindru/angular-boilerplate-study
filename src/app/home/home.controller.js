angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProviderModel, CustomerModel){
  $log.info('Welcome home');

  var vm = this;
  vm.providers = ProviderModel.providerIndex();
  vm.customers = CustomerModel.customerIndex();
}

homeController.$inject = ['$log', 'ProviderModel', 'CustomerModel'];