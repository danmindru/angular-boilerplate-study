absConfig.pushAfterBootstrap('abs.about');

angular.module('abs.about').config(aboutConfig);

aboutConfig.$inject = ['$stateProvider'];
function aboutConfig($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about-page.html',
    data:{
      pageTitle: 'About page'
    }
  });
}