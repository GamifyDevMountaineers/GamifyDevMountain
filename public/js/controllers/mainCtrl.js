angular.module( "GamifyDevMountain" )
  .controller( "mainCtrl", function ( $scope, $state ) {
    $scope.mainCtrl = 'mainCtrl';
    console.log( 'mainCtrl' );

    // $scope.user = {};
    // temporarily removed authSvc from injection, it was causing errors.
  // $scope.user = {};
    // $scope.login = function () {
    //     authSvc.login($scope.user).then(function () {
    //         $state.go('main');
    //     }).catch(function (err) {
    //         if (err.status === 401) {
    //             alert('Invalid User Log In');
    //         } else {
    //             console.error(err);
    //         }
    //     });
    // };

  } );
