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
  }).state('providerIndex', {
    url: '/providers',
    controller: 'ProviderIndexController',
    controllerAs: 'vm',
    templateUrl: 'views/provider-index.html',
    data: {
      pageTitle: 'Provider index',
      pageDesc: 'A list of all registered providers.'
    }
  }).state('customerPage', {
    url: '/customer/:customerId',
    controller: 'CustomerPageController',
    controllerAs: 'vm',
    templateUrl: 'views/customer-page.html',
    data: {
      pageTitle: 'Customer page'
    }
  }).state('customerIndex', {
    url: '/customers',
    controller: 'CustomerIndexController',
    controllerAs: 'vm',
    templateUrl: 'views/customer-index.html',
    data: {
      pageTitle: 'Customer index',
      pageDesc: 'A list of all registered customers.'
    }
  });
}