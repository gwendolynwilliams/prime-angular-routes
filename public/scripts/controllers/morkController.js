myApp.controller('MorkController', ['$scope', function($scope) {
    $scope.message = 'Mork Controller!';

    $scope.morkImage = false;

    $scope.showImage = function() {
        console.log('showImage');
        $scope.morkImage = true;
    };

    $scope.image = '<img src="/images/mindy.jpg">';

    console.log('Mork Controller');

}]);
