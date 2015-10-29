(function() {
    'use strict';
    angular.module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'uiGmapGoogleMapApi'];

    function HomeController($scope, uiGmapGoogleMapApi) {
        var vm = this;
        $scope.map = { center: { latitude: 37.808544, longitude: -122.253681 }, zoom: 16 };
        $scope.marker = { coords: { latitude: 37.808544, longitude: -122.253681 }};
    }
})();
