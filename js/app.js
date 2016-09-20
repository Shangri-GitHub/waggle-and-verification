/**
 * Created by shangri-la on 16-8-16.
 */
angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.config', 'myApp.services','myApp.directive'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('addform', {
                url: '/addform',
                templateUrl: 'templates/addform.html',
                controller: 'addformCtrl'
            })
            .state('colorSelect', {
                url: '/colorSelect',
                templateUrl: 'templates/colorSelect.html',
                controller: 'colorSelectCtrl'
            })
            .state('taxRate', {
                url: '/taxRate',
                templateUrl: 'templates/taxRate.html',
                controller: 'taxRateCtrl'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'templates/test.html',
                controller: 'testCtrl'
            })
            .state('calc', {
                url: '/calc',
                templateUrl: 'templates/calc.html',
                controller: 'calcCtrl'
            })
            .state('submitform', {
                url: '/submitform',
                templateUrl: 'templates/submitform.html',
                controller: 'submitformCtrl'
            })
            .state('navbar', {
                url: '/navbar',
                templateUrl: 'templates/navbar.html',
                controller: 'navbarCtrl'
            });
        // 默认
        $urlRouterProvider.otherwise('/calc');
    });