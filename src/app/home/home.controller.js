angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProfileModel){
  $log.info('Welcome home');

  var vm = this;
  vm.providers = ProfileModel.providerIndex();
}

homeController.$inject = ['$log', 'ProfileModel'];