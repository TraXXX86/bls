'use strict';

angular.module('myApp.viewEdit', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewEdit', {
        templateUrl: 'view/edition/viewEdit.html',
        controller: 'ViewEditCtrl'
    });
}])

.controller('ViewEditCtrl', [function () {

}]);