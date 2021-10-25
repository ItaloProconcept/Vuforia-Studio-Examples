// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.play = function(){
	$scope.app.view["CONGELAR_TELA"].wdg["modelo-3D"].svc["playAll"]();
};
$scope.pause = function(){
	$scope.app.view["CONGELAR_TELA"].wdg["3DContainer-1"].svc.lockCameraAndOrientation();
};
$scope.resume = function(){
	$scope.app.view["CONGELAR_TELA"].wdg["3DContainer-1"].svc.unlockCameraAndOrientation();		
};
