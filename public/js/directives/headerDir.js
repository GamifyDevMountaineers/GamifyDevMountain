angular.module( "GamifyDevMountain" )
.directive( "headerDir", function () {
  console.log('hello');

  return {
    templateUrl: './../html/headerTmpl.html',
    controller: 'headerCtrl',
    restrict: 'E'
  }
  } );
