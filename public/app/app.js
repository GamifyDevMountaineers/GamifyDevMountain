var app = angular.module("GamifyDevMountain", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/landing' );

  var landingState = {
    name: 'landing',
    url: '/landing',
    templateUrl: './app/views/landing/landingTmpl.html',
    controller: 'landingCtrl'
  };

  var adminCrudState = {
    name: 'adminCrud',
    url: '/adminCrud',
    templateUrl: './app/routes/admin/adminCrudTmpl.html',
    controller: 'adminCrudCtrl'
  };

  $stateProvider
    .state( landingState );
    .state( adminCrudState )
} );
