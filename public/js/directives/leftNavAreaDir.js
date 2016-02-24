angular.module( "GamifyDevMountain" ).directive( "leftNavAreaDir", function () {
  return {
    templateUrl: './html/leftNavAreaTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
