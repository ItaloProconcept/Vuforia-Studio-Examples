// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

//Load Service InfoTable into JSON
//var tmptext = $scope.app.mdl['Car1'].svc['GetPropertyValues'].data;
// app.mdl['Car1'].svc['GetPropertyValues'].data
//var mjson= angular.fromJsom(tmptext);

//Loop through JSON
/*for (var i = 0; i < mjson.data.length; ++i)
{
	var detailrow = mjson.data[i];
  	console.log(detailrow);
}*/

$scope.obterDado = function(){
	// $scope.view.wdg['label']['text'] = app.mdl['Car1'].svc['GetPropertyValues'].data.current['GasLevel'];
  	var value = ($scope.app.mdl['Car1'].properties['GasLevel']).toFixed(2);
  	$scope.view.wdg['label']['text'] = value;
}
