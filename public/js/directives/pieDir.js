angular.module( "GamifyDevMountain" )
.directive( "pieDir", function () {
  return {
    templateUrl: './../html/pieTmpl.html',
    controller: 'adminView',
    restrict: 'E'
  }
  } );
