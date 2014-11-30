angular.module('abs.layout').directive('appShell', appShell);

function appShell(){
  return {
    restrict: 'A',
    templateUrl: 'shared-views/shell.html',
    replace: true
  };
}