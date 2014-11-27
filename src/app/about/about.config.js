absConfig.pushAfterBootstrap('abs.feature.about');

angular.module('abs.feature.about').config(aboutConfig);

function aboutConfig($stateProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about-page.html',
    data:{
      pageTitle: 'About page'
    }
  });
}

aboutConfig.$inject = ['$stateProvider'];