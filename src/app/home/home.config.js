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
      pageTitle: 'Home page',
      pageDesc: 'Angular boilerplate study - A study of AngularJS modularity & organization. Plan your app well, prototype it and then refactor. If you still think it is a good idea to use a boilerplate, choose one and adapt it to your needs.'
    }
  });
}
