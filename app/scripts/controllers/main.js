'use strict';

angular.module('protoJoApp').controller('MainCtrl', function ($scope, localStorageService, fileReader) {

    $scope.editorBox = {};
    $scope.editorBox.editing = false;
    $scope.content = localStorageService.get('content') || '';
    $scope.image = localStorageService.get('img') || '';

    $scope.save = function (content) {
        localStorageService.add('content', content);
    };

    $scope.remove = function () {
        localStorageService.remove('content');
    };

    $scope.getFile = function (file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function (result) {
                $scope.image = result;
                localStorageService.add('img', result);
            });
    };
});