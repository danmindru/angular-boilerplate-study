angular.module('abs.feature.profile.customerPage').controller('CustomerPageController', customerPageController);

function customerPageController($log){
  $log.info('You are on a customer page');
}

customerPageController.$inject = ['$log'];