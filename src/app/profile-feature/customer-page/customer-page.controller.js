angular.module('abs.profileFeature.customerPage').controller('CustomerPageController', customerPageController);

customerPageController.$inject = ['$scope', '$stateParams', '$filter', 'CustomerModelService'];
function customerPageController($scope, $stateParams, $filter, CustomerModelService){
  var vm = this;

  CustomerModelService.customerProfile($stateParams.customerId).then(function customerProfileResponse(response){
    var pageTitle,
        pageDesc;

    vm.customer = response;
    pageTitle = !response.error ? vm.customer.name + ' ' + vm.customer.surname + '\'s Profile Page'
                                : 'Sorry, this customer profile does not exist';
    pageDesc = !response.error ? vm.customer.name + ' ' + vm.customer.surname + '\'s Profile on Angular Boilerplate Study. Member since ' + $filter('date')(vm.customer.joined, 'shortDate')
                               : 'No description available for this customer.';
    $scope.$emit('changedTitle', pageTitle);
    $scope.$emit('changedDesc', pageDesc);
  });
}