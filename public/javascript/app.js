(function() {
    'use strict';
    angular.module('app', ['ui.router', 'uiGmapgoogle-maps'])
        .config(Config);
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'templates/home.html'
        }).state('About', {
            url: '/About',
            templateUrl: 'templates/about.html'
        }).state('Menu', {
            url: '/Menu',
            templateUrl: 'templates/menu.html'
        }).state('Contact', {
            url: '/Contact_us',
            templateUrl: 'templates/contact.html',
            controller: 'HomeController'
        });
        $urlRouterProvider.otherwise('/');
    }
})();
