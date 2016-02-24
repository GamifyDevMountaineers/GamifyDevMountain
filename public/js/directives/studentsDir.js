angular.module( "GamifyDevMountain" ).directive( "studentsDir", function () {
  return {
    templateUrl: './../html/studentsTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
