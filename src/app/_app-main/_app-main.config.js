//////////// root app module does not require pushAfterBootstrap

angular.module(absConfig.appRootModuleName).config(rootConfig);

function rootConfig($locationProvider, $urlRouterProvider){
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/home');
}

rootConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
