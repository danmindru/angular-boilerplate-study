angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProviderModel, CustomerModel){
  $log.info('Welcome home');

  var vm = this;

  ProviderModel.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });

  vm.customers = CustomerModel.customerIndex();
}

homeController.$inject = ['$log', 'ProviderModel', 'CustomerModel'];