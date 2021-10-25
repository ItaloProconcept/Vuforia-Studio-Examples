// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


$scope.populateModelList = function () { 

  $scope.app.params.modelSelect = [ 
    { 
      display: "none", 
      value: null
    },
    { 
      display: "suspensão de carro", 
      value: "app/resources/Uploaded/worldcar-suspension_High.pvz" 
    }, 
    { 
      display: "braço robótico", 
      value: "app/resources/Uploaded/Robot%20Arm%20Model_High.pvz" 
    }, 
    { 	
      display: "virador grampo", 
      value: "app/resources/Uploaded/virador_grampo_Final_Low.pvz" 
    } 
  ];
  
} 
 
$scope.populateModelList();

$scope.viewObject = function(){
  	console.log($scope.view.wdg['dinamico_modelo']);	
};

