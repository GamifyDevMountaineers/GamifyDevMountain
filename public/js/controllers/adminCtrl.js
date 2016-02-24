/* Administrator */
angular.module( "GamifyDevMountain" )
  .controller( "adminCtrl", function ( $scope ) {
    $scope.adminCtrl = "adminCtrl";


    $scope.activeDir = {};
    $scope.toggleDirs = function ( selectedDir ) {
      console.log( selectedDir );
      $scope.activeDir.peanut = false;
      $scope.activeDir.pie = false;
      $scope.activeDir.popcorn = false;
      $scope.activeDir.popsicle = false;
      $scope.activeDir.poptart = false;
      $scope.activeDir[ selectedDir ] = true;
      console.log( $scope.activeDir );
    }


  } );









/* Cards */
angular.module( "GamifyDevMountain" )
  .controller( "cardCtrl", function ( $scope ) {
    $scope.adminCtrl = "cardCtrl";
  } );

/* Student */
angular.module( "GamifyDevMountain" )
  .controller( "studentCtrl", function ( $scope ) {
    $scope.adminCtrl = "studentCtrl";
  } );

/* Cohort */
angular.module( "GamifyDevMountain" )
  .controller( "cohortCtrl", function ( $scope ) {
    $scope.adminCtrl = "cohortCtrl";
  } );

/* Badge Request */
angular.module( "GamifyDevMountain" )
  .controller( "requestCtrl", function ( $scope ) {
    $scope.adminCtrl = "requestCtrl";
  } );
