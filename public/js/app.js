var app = angular.module("GamifyDevMountain", ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        var adminState = {
            name: 'admin',
            url: '/administrator',
            templateUrl: 'html/admin.html',
            controller: 'adminCtrl'
        };
        var studentState = {
            name: 'student',
            url: '/student',
            templateUrl: 'html/student.html',
            controller: 'studentCtrl'
        };

        var mainState = {
            name: 'main',
            url: '/main',
            templateUrl: 'html/main.html',
            controller: 'mainCtrl'
        };

        $stateProvider
            .state(mainState)
            .state(adminState)
            .state(studentState)

        $urlRouterProvider.otherwise('/login');
    });