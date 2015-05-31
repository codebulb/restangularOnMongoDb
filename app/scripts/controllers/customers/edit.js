'use strict';

angular.module('restangularOnMongoDbApp')
        .controller('CustomerEditCtrl', function ($scope, $routeParams, $location, Restangular, ngDialog) {
            $scope.save = function() {
                $scope.entity.save().then(function() {
                    $location.path("/customers");
                });
            };
            
            $scope.initEntity = function() {
                if ($routeParams.id === "new") {
                    $scope.entity = Restangular.one("customers");
                    $scope.entity.employmentStatus = 'Unemployed';
                }
                else {
                    Restangular.one("customers", $routeParams.id).get().then(function (entity) {
                        $scope.entity = entity;
                    }, function (response) {
                        $location.path("/customers").search({errorNotFound: $routeParams.id});
                    });
                }
            };
            
            $scope.deleteEntity = function() {
                $scope.entity.remove().then(function() {
                    $location.path("/customers");
                });
            };
            
            $scope.changeEmploymentStatus = function() {
                if ($scope.entity.employmentStatus === "Unemployed") {
                    $scope.entity.companyName = null;
                }
            };
            
            $scope.editPayment = function (entity, index) {
                if (typeof $scope.entity.payments === 'undefined') {
                    $scope.entity.payments = [];
                }
                ngDialog.open({
                    template: 'views/payments/edit.html',
                    controller: 'PaymentsEditCtrl',
                    scope: $scope,
                    data: {
                        entity: entity,
                        index: typeof index !== 'undefined' ? index : $scope.entity.payments.length,
                        create: typeof index === 'undefined'
                    }
                });
            };
            
            $scope.deletePayment = function(index) {
                $scope.entity.payments.splice(index, 1);
            };
            
            $scope.initEntity();
        });
