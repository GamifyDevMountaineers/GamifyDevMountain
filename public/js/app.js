var app = angular.module( "GamifyDevMountain", [ 'ui.router', 'ui.grid' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/admin' );
  var adminState = {
    name: 'admin',
    url: '/admin',
    templateUrl: './html/states/adminView.html',
    controller: 'adminCtrl'
  };

  var studentState = {
    name: 'student',
    url: '/student',
    templateUrl: './html/states/studentView.html',
    controller: 'studentCtrl'
  };

  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: 'html/states/main.html',
    controller: 'mainCtrl',
    // resolve: {
    // user: function (authService, $state) {
    //     return authService.getCurrentUser().then(function (response) {
    //         if (response.status != 200) {
    //             $state.go('login')
    //         }
    //         console.log(response);
    //         return response.data;
    //     })
    //     console.log('Resolve in "order"');
    // }
    // }
  };

  $stateProvider
    .state( mainState )
    .state( adminState )
    .state( studentState )
} );
