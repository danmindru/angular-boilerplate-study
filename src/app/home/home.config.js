absConfig.pushAfterBootstrap('abs.feature.home');

angular.module('abs.feature.home').config(homeConfig);

function homeConfig($stateProvider){
  $stateProvider.state('home', {
    url: '/home',
    controller: 'HomeController',
    controllerAs: 'vm',
    templateUrl: 'views/home-page.html',
    data:{
      pageTitle: 'Home page'
    }
  });
}

homeConfig.$inject = ['$stateProvider'];
