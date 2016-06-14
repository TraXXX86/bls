'use strict';

angular.module('myApp.viewVersion', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewVersion', {
        templateUrl: 'view/version/viewVersion.html',
        controller: 'ViewVersionCtrl'
    });
}])

.controller('ViewVersionCtrl', [function () {

}]);