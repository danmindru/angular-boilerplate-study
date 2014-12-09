angular.module('abs.profileFeature.customerPage').controller('CustomerPageController', customerPageController);

customerPageController.$inject = ['$scope', '$stateParams', 'CustomerModelService'];
function customerPageController($scope, $stateParams, CustomerModelService){
  var vm = this;

  if($stateParams.customerId){
    CustomerModelService.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
      var pageTitle;

      vm.customer = response;
      pageTitle = !response.error ? vm.customer.name + ' ' + vm.customer.surname + '\'s Profile Page' : 'Sorry, this customer profile does not exist';
      $scope.$emit('changedPage', pageTitle);
    });
  }

  CustomerModelService.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}