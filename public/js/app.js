var app = angular.module("GamifyDevMountain", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/landing' );

  var landingState = {
    name: 'landing',
    url: '/landing',
    templateUrl: './html/landingTmpl.html',
    controller: 'landingCtrl'
  };

  var profileState = {
    name: 'profile',
    url: '/profile',
    templateUrl: './html/profileTmpl.html',
    controller: 'profileCtrl'
  };

  var viewFrameState = {
    name: 'viewFrame',
    url: '/viewFrame',
    templateUrl: './html/viewFrameTmpl.html',
    controller: 'viewFrameCtrl'
  }

  $stateProvider
    .state( landingState )
    .state( profileState )
    .state( viewFrameState )
} );
