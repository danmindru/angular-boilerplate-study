//////////// root app module does not require pushAfterBootstrap

angular.module(absConfig.appRootModuleName).config(rootConfig);

rootConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
function rootConfig($locationProvider, $urlRouterProvider){
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/home');
}
