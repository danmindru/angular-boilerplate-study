ApplicationRootModule.config(rootConfig);

function rootConfig($locationProvider){
  $locationProvider.hashPrefix('!');
}

rootConfig.$inject = ['$locationProvider'];