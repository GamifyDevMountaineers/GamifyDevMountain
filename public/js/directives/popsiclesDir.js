angular.module( "GamifyDevMountain" ).directive( "popsiclesDir", function () {
  return {
    templateUrl: './../html/popsiclesTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
