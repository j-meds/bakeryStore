(function() {
    'use strict';
    angular.module('app', ['ui.router', 'uiGmapgoogle-maps'])
        .config(Config);
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'views/home.html'
        }).state('About', {
            url: '/About',
            templateUrl: 'views/about.html'
        }).state('Menu', {
            url: '/Menu',
            templateUrl: 'views/menu.html'
        }).state('Contact', {
            url: '/Contact_us',
            templateUrl: 'views/contact.html',
            controller: 'HomeController'
        });
        $urlRouterProvider.otherwise('/');
    }
})();
