// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.esconderSpinner = function () { 
	$scope.app.params.spinnerVisivel = false; 
}; 

$scope.iniciar = function () { 
	$scope.app.params.spinnerVisivel = true; 
	$scope.timeoutPromise = $timeout($scope.esconderSpinner, 3000); 
}; 

$scope.cancelar = function () { 
	$timeout.cancel($scope.timeoutPromise);  	
};