angular.module( "GamifyDevMountain" ).directive( "popstartDir", function () {
  return {
    templateUrl: './../html/poptartTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
