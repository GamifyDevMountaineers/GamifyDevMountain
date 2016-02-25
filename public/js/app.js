var app = angular.module( "GamifyDevMountain", [ 'ui.router','ui.grid' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/admin' );

  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl: './html/states/main.html',
    controller: 'mainCtrl'
  };

  var profileState = {
    name: 'profile',
    url: '/profile',
    templateUrl: './html/states/profileTmpl.html',
    controller: 'profileCtrl'
  };

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

  $stateProvider
    .state( mainState )
    .state( profileState )
    .state( adminState )
    .state( studentState )
} );
