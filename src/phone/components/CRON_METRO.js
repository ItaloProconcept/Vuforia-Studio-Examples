// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


$scope.contadordown = function () { 
	$scope.app.params.contador--; 
}; 

$scope.start = function () { 
	$scope.app.params.contador = 5; 
	$scope.intervalPromise = $interval($scope.contadordown, 1000, 5); 
};

$scope.stop = function () { 
	$interval.cancel($scope.intervalPromise); 
};