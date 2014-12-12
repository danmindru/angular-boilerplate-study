angular.module('abs.profileFeature.customerPage').controller('CustomerPageController', customerPageController);

customerPageController.$inject = ['$scope', '$stateParams', 'CustomerModelService'];
function customerPageController($scope, $stateParams, CustomerModelService){
  var vm = this;

  CustomerModelService.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
    var pageTitle;

    vm.customer = response;
    pageTitle = !response.error ? vm.customer.name + ' ' + vm.customer.surname + '\'s Profile Page' : 'Sorry, this customer profile does not exist';
    $scope.$emit('changedPage', pageTitle);
  });
}