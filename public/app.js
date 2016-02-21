angular.module('GamifyDevMountain', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('table', {
                url: '/table',
                templateUrl: 'views/tableView.html',
                controller: 'tableController'
            });
        $urlRouterProvider.otherwise('table');
    });