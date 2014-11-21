angular.module('abs.section.home').controller('HomeController', homeController);

function homeController($log){
  $log.info('Welcome home');
}

homeController.$inject = ['$log'];