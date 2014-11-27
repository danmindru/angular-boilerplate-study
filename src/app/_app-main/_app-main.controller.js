angular.module(absConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope'];

function rootController($scope) {
  var vm = this;
  vm.htmlTitle = 'Angular Boilerplate Study';
  /*
   * Event callback on every route change
   * Scrolls the page as if a 'normal' page would be opened
   *
   * Other available params: toParams, fromState, fromParams
   */
  $scope.$on('$stateChangeSuccess', function(event, toState){
    /*
     * updates the <title> tag
     * (vm.htmlTitle is binded to the title tag)
     */
    if(angular.isDefined(toState.data.pageTitle)){
      vm.htmlTitle = toState.data.pageTitle + ' - Angular Boilerplate Study';
    }
  });

  /*
   * Listens to controllers that want to emit their titles
   * Used for custom titles (not from state provider).
   * With this we can set the titles of 'wildcard' paths
   * E.g. on 'customers/:Id' -> the page title can be customer.name
   *
   */
  $scope.$on('changedPage', function changedPage(event, pageTitle){
    vm.htmlTitle = pageTitle;
  });
}