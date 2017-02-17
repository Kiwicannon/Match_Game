angular.module('app')
    .controller('homeCtrl', function ($scope, mainSvc) {
        $scope.test = 'I fixed it!'
        mainSvc.getQuote().then(function (response) {
            $scope.quote = response

        })
    });