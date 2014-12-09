absConfig.pushAfterBootstrap('abs.profileFeature');

angular.module('abs.profileFeature').config(profileConfig);

profileConfig.$inject = ['$stateProvider'];
function profileConfig($stateProvider){
  $stateProvider.state('providerPage', {
    url: '/provider/:providerId',
    controller: 'ProviderPageController',
    controllerAs: 'vm',
    templateUrl: 'views/provider-page.html',
    data: {
      pageTitle: 'Provider page'
    }
  }).state('providerPageIndex', {
    url: '/providers',
    controller: 'ProviderPageController',
    controllerAs: 'vm',
    templateUrl: 'views/provider-page-index.html',
    data: {
      pageTitle: 'Provider index'
    }
  }).state('customerPage', {
    url: '/customer/:customerId',
    controller: 'CustomerPageController',
    controllerAs: 'vm',
    templateUrl: 'views/customer-page.html',
    data: {
      pageTitle: 'Customer page'
    }
  }).state('customerPageIndex', {
    url: '/customers',
    controller: 'CustomerPageController',
    controllerAs: 'vm',
    templateUrl: 'views/customer-page-index.html',
    data: {
      pageTitle: 'Customer page'
    }
  });
}