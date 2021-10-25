$scope.mudancaSombra = function(){
  
	console.log("Mudança Sombra");
  	
  	// CAPTURAR O VALOR DA PROPRIEDADE RESPOSAVEL PELA EXIBIÇÃO DA SOMBRA DO MODELO 3D
  	var bool_shadow = $scope.app.view["SOMBRE_OBJETO_3D"].wdg["3DContainer-1"]["dropshadow"];
   	
  	// TROCAR TEXTO DO BOTÃO  	
  	$scope.app.view["SOMBRE_OBJETO_3D"].wdg["botao-trocar-sombra"]["text"] = bool_shadow ? "Habilitar Sombra" : "Desabilitar Sombra";
  
  	// INSERIR O VALOR INVERTIDO
  	$scope.app.view["SOMBRE_OBJETO_3D"].wdg["3DContainer-1"]["dropshadow"] = !bool_shadow;  	  	
}



// $scope.app.view["SOMBRE_OBJETO_3D"].wdg["3DContainer-1"]["dropshadow"] = bool_shadow ? false : true;

// SERVICO
// app.view["SOMBRE_OBJETO_3D"].wdg["3DContainer-1"].svc.lockCameraAndOrientation  	
  
// DOM
//console.log( angular.element( document.querySelector("[widget-id=twxDtView1633612585044_CreoViewCanvas0] canvas" )));