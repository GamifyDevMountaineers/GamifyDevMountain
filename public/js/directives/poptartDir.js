angular.module( "GamifyDevMountain" )
.directive( "poptartDir", function () {
  return {
    templateUrl: './../html/poptartTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
