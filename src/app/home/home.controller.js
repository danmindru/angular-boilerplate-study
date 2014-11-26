angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProviderModel){
  $log.info('Welcome home');

  var vm = this;
  vm.providers = ProviderModel.providerIndex();
}

homeController.$inject = ['$log', 'ProviderModel'];