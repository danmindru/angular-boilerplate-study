angular.module('abs.home').controller('HomeController', homeController);

function homeController($log, ProviderModelService, CustomerModelService){
  $log.info('Welcome home');

  var vm = this;

  ProviderModelService.providerIndex().then(function providerIndexResponse(response){
    vm.providers = response.data;
  }, function providerIndexError(error){
    vm.providers = error;
  });

  CustomerModelService.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}

homeController.$inject = ['$log', 'ProviderModelService', 'CustomerModelService'];