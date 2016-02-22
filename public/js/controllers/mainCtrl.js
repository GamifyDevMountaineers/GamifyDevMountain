angular.module( "GamifyDevMountain" )
  .controller( "mainCtrl", function ( $scope, $state, authSvc ) {
    $scope.mainCtrl = 'mainCtrl';
    console.log( 'mainCtrl' );

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
