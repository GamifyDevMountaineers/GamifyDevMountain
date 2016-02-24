var app = angular.module( "GamifyDevMountain", [ 'ui.router' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/admin' );

  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: './html/main.html',
    controller: 'mainCtrl'
  };

  var profileState = {
    name: 'profile',
    url: '/profile',
    templateUrl: './html/profileTmpl.html',
    controller: 'profileCtrl'
  };

  var adminState = {
    name: 'admin',
    url: '/admin',
    templateUrl: './html/adminView.html',
    controller: 'adminCtrl'
  };

  var studentState = {
    name: 'student',
    url: '/student',
    templateUrl: './html/studentView.html',
    controller: 'studentCtrl'
  };

  $stateProvider
    .state( mainState )
    .state( profileState )
    .state( adminState )
    .state( studentState )
} );
