(function(){
    angular.module('app')
    .controller('NavController' , NavController)

    NavController.$inject = ['$scope'];

    function NavController($scope){
        $scope.shownav = false;
    }
})();