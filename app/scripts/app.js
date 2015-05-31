'use strict';

angular
        .module('restangularOnMongoDbApp', [
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'restangular',
            'ngDialog'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/customers', {
                        templateUrl: 'views/customers/list.html',
                        controller: 'CustomerListCtrl'
                    })
                    .when('/customers/:id', {
                        templateUrl: 'views/customers/edit.html',
                        controller: 'CustomerEditCtrl'
                    })
                    .otherwise({
                        redirectTo: '/customers'
                    });
        })
        .config(function (RestangularProvider) {
            RestangularProvider.setBaseUrl('http://localhost:8080/restangularOnMongoDb/');
    
            // we are mapping the id of each element to the _id field.
            RestangularProvider.setRestangularFields({
              id: "_id.$oid",
            });

            RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
                var extractedData;
                // look for getList operations
                if (operation === "getList") {
                    // the actual entities are in the _embedded section
                    extractedData = data._embedded['rh:doc'];
                } else {
                    extractedData = data;
                }
                return extractedData;
            });
            
            RestangularProvider.addFullRequestInterceptor(function (data, operation, what, url) {
                if (operation !== "getList") {
                    if (typeof data._etag !== 'undefined') {
                        return {headers: {"If-Match": data._etag.$oid}};
                    }
                    if (typeof data._id.$oid === 'undefined') {
                        data._id = null;
                    }
                }
                return {};
            });
        });
;
