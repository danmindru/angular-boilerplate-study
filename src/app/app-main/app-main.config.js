//////////// root app module does not require pushAfterBootstrap

angular.module(absConfig.appRootModuleName).config(rootConfig);

function rootConfig($locationProvider){
  $locationProvider.hashPrefix('!');
}

rootConfig.$inject = ['$locationProvider'];
