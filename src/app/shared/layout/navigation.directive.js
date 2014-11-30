angular.module('abs.layout').directive('appNavigation', appNavigation);

function appNavigation(){
  return {
    restrict: 'A',
    templateUrl: 'shared-views/navigation.html',
    controller: 'LayoutController',
    controllerAs: 'vm',
    replace: true
  };
}