angular.module(absConfig.appRootModuleName).controller('RootController', rootController);

rootController.$inject = ['$scope', '$window'];
function rootController($scope, $window) {
  var vm = this,
      defaultTitle = 'Angular Boilerplate Study',
      defaultDesc = 'This study looks at AngularJS boilerplates to find the best approaches. Although plenty of choices are available, they will do justice for only some types of applications.';

  vm.htmlTitle = defaultTitle;
  /*
   * Event callback on every route change
   * Scrolls the page to the top as 'normally' changing a page
   *
   * Other available params for $stateChangeSuccess: toParams, fromState, fromParams
   *
   */
  $scope.$on('$stateChangeSuccess', function rootStateChangeSuccess(event, toState){
    /*
     * updates the <title> and <meta> description tags if the new route has a
     * pageTitle/pageDescription set
     *
     */
    if(angular.isDefined(toState.data)){
      /*
       * We need to check for title and description individually
       * If one of them is not set, we use the default value.
       *
       */
      if(angular.isDefined(toState.data.pageTitle)){
        vm.htmlTitle = toState.data.pageTitle + ' - ' + defaultTitle;
      } else {
        vm.htmlTitle = defaultTitle;
      }

      if(angular.isDefined(toState.data.pageDesc)){
        vm.htmlDesc = toState.data.pageDesc;
      } else {
        vm.htmlDesc = defaultDesc;
      }
    } else {
      /*
       * If the route contains no data, we switch to default values
       */
      vm.htmlTitle = defaultTitle;
      vm.htmlDesc = defaultDesc;
    }

    $window.scrollTo(0,0);
  });

  /*
   * Listens to controllers that emit title changes
   * Used for custom titles (not from state provider),
   * when the route has a dynamic parameter.
   *
   * With this we can set the titles of 'wildcard' paths.
   * E.g. on 'customers/:Id' -> the page title can be customer.name
   *
   */
  $scope.$on('changedTitle', function changedPage(event, pageTitle){
    vm.htmlTitle = pageTitle;
  });

  /*
   * Same as for changedTitle
   */
  $scope.$on('changedDesc', function changedPage(event, pageDesc){
    vm.htmlDesc = pageDesc;
  });
}
