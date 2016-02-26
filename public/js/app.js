<<<<<<< HEAD
var app = angular.module( "GamifyDevMountain", [ 'ui.router','ui.grid' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/admin' );

  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: './html/states/main.html',
    controller: 'mainCtrl'
  };

  var adminState = {
    name: 'admin',
    url: '/admin',
    templateUrl: './html/states/adminView.html',
    controller: 'adminCtrl'
=======
var app = angular.module( "GamifyDevMountain", [ 'ui.router' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/main' );
  var adminCrudState = {
    name: 'adminCrud',
    url: '/adminCrud',
    templateUrl: './html/adminCrudTmpl.html',
    controller: 'adminCrudCtrl'
>>>>>>> master
  };

  var studentState = {
    name: 'student',
    url: '/student',
<<<<<<< HEAD
    templateUrl: './html/states/studentView.html',
    controller: 'studentCtrl'
  };

  $stateProvider
    .state( mainState )
    .state( adminState )
    .state( studentState )
=======
    templateUrl: 'html/student.html',
    controller: 'studentCtrl'
  };

  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: 'html/main.html',
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
    .state( studentState )
    .state( adminCrudState )

>>>>>>> master
} );
