angular.module('abs.feature.profile.customerPage').controller('CustomerPageController', customerPageController);

function customerPageController($scope, $stateParams, CustomerModel){
  var vm = this;

  if($stateParams.customerId){
    CustomerModel.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
      var pageTitle;

      vm.customer = response;
      pageTitle = !response.error ? vm.customer.name + ' ' + vm.customer.surname + '\'s Profile Page' : 'Sorry, this customer profile does not exist';
      $scope.$emit('changedPage', pageTitle);
    });
  }

  CustomerModel.customerIndex().then(function customerIndexResponse(response){
    vm.customers = response.data;
  }, function customerIndexError(error){
    vm.customers = error;
  });
}

customerPageController.$inject = ['$scope', '$stateParams','CustomerModel'];