angular.module('abs.layout').controller('LayoutController', layoutController);

function layoutController(){
  var vm = this;

  vm.currentDate = new Date();
}