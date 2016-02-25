var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/mork', {
            templateUrl: '/views/templates/mork.html',
            //controller: 'HomeController'
        })
        .when('/mindy', {
            templateUrl: '/views/templates/mindy.html',
            //controller: 'AnotherController'
        })
        .when('/mearth', {
            templateUrl: '/views/templates/mearth.html',
            //controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);