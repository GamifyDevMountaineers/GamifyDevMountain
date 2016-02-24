angular.module( "GamifyDevMountain" ).directive( "popcornDir", function () {
  return {
    templateUrl: './../html/popcornTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
  } );
