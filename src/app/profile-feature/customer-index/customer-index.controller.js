angular.module('abs.profileFeature.customerIndex').controller('CustomerIndexController', customerIndexController);

customerIndexController.$inject = ['CustomerModelService'];
function customerIndexController(CustomerModelService){
  var vm = this;

  CustomerModelService.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}