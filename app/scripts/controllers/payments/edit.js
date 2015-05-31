'use strict';

angular.module('restangularOnMongoDbApp')
        .controller('PaymentsEditCtrl', function ($scope) {
            $scope.save = function() {
                $scope.$parent.entity.payments.splice($scope.index, 1, $scope.entity);
                $scope.closeThisDialog();
            };
            
            $scope.delete = function() {
                $scope.$parent.entity.payments.splice($scope.index, 1);
                $scope.closeThisDialog();
            };
            
            $scope.reset = function() {
                $scope.entity = $scope.ngDialogData.entity;
            };
            
            // work with a copy
            $scope.entity = jQuery.extend({}, $scope.ngDialogData.entity);
            $scope.index = $scope.ngDialogData.index;
            $scope.create = $scope.ngDialogData.create;
        });
