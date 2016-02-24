angular.module( "GamifyDevMountain" )
.directive( "headerDir", function () {
  return {
    templateUrl: './../html/headerTmpl.html',
    controller: 'headerCtrl',
    restrict: 'E'
  }
  } );
