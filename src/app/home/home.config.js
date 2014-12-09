absConfig.pushAfterBootstrap('abs.home');

angular.module('abs.home').config(homeConfig);
homeConfig.$inject = ['$stateProvider'];

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
