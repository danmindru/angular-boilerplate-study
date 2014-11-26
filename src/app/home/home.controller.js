angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProviderModel, CustomerModel){
  $log.info('Welcome home');

  var vm = this;

  ProviderModel.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });

  CustomerModel.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}

homeController.$inject = ['$log', 'ProviderModel', 'CustomerModel'];