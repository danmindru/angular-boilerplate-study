//////////// root app module does not require pushAfterBootstrap

ApplicationRootModule.config(rootConfig);

function rootConfig($locationProvider){
  $locationProvider.hashPrefix('!');
}

rootConfig.$inject = ['$locationProvider'];