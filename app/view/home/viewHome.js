'use strict';

angular.module('myApp.viewHome', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewHome', {
        templateUrl: 'view/home/viewHome.html',
        controller: 'ViewHomeCtrl'
    });
}])

.controller('ViewHomeCtrl', [function () {

}]);