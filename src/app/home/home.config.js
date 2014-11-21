absConfig.pushAfterBootstrap('abs.section.home');

angular.module('abs.section.home').config(homeConfig);

function homeConfig($stateProvider){
  $stateProvider.state('home', {
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'views/home.html',
    data:{
      pageTitle: 'Home page'
    }
  });
}

homeConfig.$inject = ['$stateProvider'];

