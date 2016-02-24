angular.module( "GamifyDevMountain" ).directive( "peanutsDir", function () {
  return {
    templateUrl: './../html/peanutsTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
