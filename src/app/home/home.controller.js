angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log, ProfileModel){
  $log.info('Welcome home');

  var vm = this;
  vm.providers = ProfileModel.providerIndex();
  vm.quickpot = ProfileModel.providerProfile('quick-pot');
  vm.noexist = ProfileModel.providerProfile('no-pot');
}

homeController.$inject = ['$log', 'ProfileModel'];