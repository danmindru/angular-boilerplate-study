angular.module('abs.layout').directive('appFooter', appFooter);

function appFooter(){
  return {
    restrict: 'A',
    templateUrl: 'views/footer.html',
    controller: 'LayoutController',
    controllerAs: 'vm',
    replace: true
  };
}