'use strict';

angular.module('restangularOnMongoDbApp')
        .controller("CustomerListCtrl", function ($scope, $route, $routeParams, $location, Restangular) {
            $scope.errorNotFound = $routeParams.errorNotFound;
            
            Restangular.all("customers").getList().then(function(entities) {
              $scope.entities = entities;
            });
            
            $scope.delete = function(entity) {
                entity.remove().then(function() {
                    // remove search parameters
                    $location.url($location.path());
                    $route.reload();
                });
            };
        });
