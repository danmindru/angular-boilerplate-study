angular.module('abs.feature.home').controller('HomeController', homeController);

function homeController($log){
  $log.info('Welcome home');
}

homeController.$inject = ['$log'];