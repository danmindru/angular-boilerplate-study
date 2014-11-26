absConfig.pushAfterBootstrap('abs.feature.profile');

angular.module('abs.feature.profile').config(profileConfig);

function profileConfig($stateProvider){
  $stateProvider.state('providerPage', {
    url: '/provider/:providerId',
    controller: 'ProviderPageController',
    controllerAs: 'vm',
    templateUrl: 'views/provider-page.html',
    data:{
      pageTitle: 'Provider page'
    }
  }).state('customerPage', {
    url: '/customer/:customerId',
    controller: 'CustomerPageController',
    controllerAs: 'vm',
    templateUrl: 'views/customer-page.html',
    data:{
      pageTitle: 'Customer page'
    }
  });
}

profileConfig.$inject = ['$stateProvider'];