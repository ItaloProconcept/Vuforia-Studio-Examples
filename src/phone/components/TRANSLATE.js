// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


// $scope.app.params.xCoordModel = $scope.view.wgd['modelItem-1'];
// $scope.app.params.zCoordModelItem = 0.198;

$scope.moveModel = function(){
	$scope.app.params.xCoordModel += 0.03;
};

$scope.moveModelItem = function(){
	$scope.app.params.zCoordModelItem += 0.03;
};

$scope.reset = function(){
	$scope.app.params.xCoordModel = 0; 
	$scope.app.params.zCoordModelItem = -0.142;
};

$scope.view = function(){
  	//var item = $scope.view.wdg['modelItem-1'];
	//console.log(item);  	
  	
  	console.log($scope.view.wdg['modelItem-1']);
};