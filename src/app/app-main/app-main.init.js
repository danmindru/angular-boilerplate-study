'use strict'

////////////////////////
var AppConfig = (function applicationInit(){
  var appRootModuleName = 'abs';
  var appMainVendorDependencies = [];

  ////////////////////////
  var pushAfterBootstrap = function pushAfterBootstrap(lateModule){
    angular.module(lateModule, []);
    angular.module(appRootModuleName).requires.push(lateModule);

    return angular.module(lateModule);
  };

  ////////////////////////
  return {
    appRootModuleName: appRootModuleName,
    appMainVendorDependencies: appMainVendorDependencies,
    pushAfterBootstrap: pushAfterBootstrap
  };
})();

////////////////////////
var ApplicationRootModule = angular.module(AppConfig.appRootModuleName, AppConfig.appMainVendorDependencies);

///////////////////////
//Define the init function for starting up the application
angular.element(document).ready(function applicationBootstrap() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, [AppConfig.appRootModuleName]);
});