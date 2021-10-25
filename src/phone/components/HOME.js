// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


/*
|----------------------------------------------------
|		Variables globais 
|----------------------------------------------------
*/

var treePopup = new Array(   //-------------------------- Arvore de Popups
  
	['popAvisoEPI',''],
  	['popSistema','(SISTEMA)'],
  	['popConjunto','(CONJUNTOS)'],
  	['popItem','(ITENS)']
  
);


buttonBackHide = '';   // id do qual popup será aberto
buttonBackShow = '';   // id do qual popup será fechado

/*
|----------------------------------------------------
|		Variables globais 
|----------------------------------------------------
*/





/*
|----------------------------------------------------
|		Troca de Popups
|----------------------------------------------------
|
|currentPop == ID do Popup atual. (String)
|nextPop    == ID do Próximo Popup. (String)        
|
|
*/


$scope.nextPop = function(currentPop,nextPop) {    //  A função esta contida em cada botão de navegação   	  	  	
  	
  	// Pegar o popup que esta visible 
  	for(var i = 0; i < treePopup.length; i++){
    	
    	var popVisible = treePopup[i][0];  	
      	
      	if($scope.view.wdg[popVisible]['visible']){
           
			$scope.view.wdg[popVisible]['visible'] = false;
          	$scope.view.wdg[(treePopup[i+1][0])]['visible'] = true;   // Aparecer o proximo popup
        	break; 					//-------- VERIFICAR SE O USO ESTA CORRETO;  
           
        }
      
    }
  		
    
  	/*$scope.view.wdg[nextPop]['visible'] = true;	 // Aparece o nextPop.
  	$scope.view.wdg[currentPop]['visible'] = false; // Esconder o currentPop. */
	
  	// -------- gambiarra  
  	if ($scope.view.wdg['popSistema']['visible']){
    	$scope.app.params.prmLabelNivel = '(SISTEMA)';      	
      
      	// Desaparecer as labels na primeira tela
		$scope.view.wdg['backButton'].visible = false;
		$scope.view.wdg['labelVoltarTela'].visible = false;
		// Desaparecer as labels na primeira tela      
    }
  
	if ($scope.view.wdg['popConjunto'].visible){
    	$scope.app.params.prmLabelNivel = '(CONJUNTOS)';
      	buttonBackHide = 'popConjunto';  // id do qual popup será aberto
		buttonBackShow = 'popSistema';  // id do qual popup será fechado
      
      	// Aparecer as labels na primeira tela
        $scope.view.wdg['backButton'].visible = true;	 
		$scope.view.wdg['labelVoltarTela'].visible = true;  

        // Aparecer as labels na primeira tela    
    }
  
  	if ($scope.view.wdg['popItem'].visible){
    	$scope.app.params.prmLabelNivel = '(ITENS)';
      	buttonBackHide = 'popItem';  // id do qual popup será aberto
		buttonBackShow = 'popConjunto';  // id do qual popup será fechado
      
      	// Aparecer as labels na primeira tela
        $scope.view.wdg['backButton'].visible = true;	 
		$scope.view.wdg['labelVoltarTela'].visible = true;  

        // Aparecer as labels na primeira tela

      
    }  	
  	// -------- gambiarra
};
/*
|----------------------------------------------------
|		Troca de Popups
|----------------------------------------------------
*/





/*
|----------------------------------------------------
|		Botão voltar Popups
|----------------------------------------------------
|
|currentPop == ID do Popup atual. (String)
|nextPop == ID do Próximo Popup. (String)        
|
*/


$scope.backPop = function() {    	   	  	

  	// Pegar o popup que esta visible 
  	// o vetor começa com dois porque a primeira[0] tela deverá ser vista apenas uma vez
  	for(var i = 2; i < treePopup.length; i++){
    	
    	var popVisible = treePopup[i][0];  	
      	
      	if($scope.view.wdg[popVisible]['visible']){
           
			$scope.view.wdg[popVisible]['visible'] = false;			  // Hide popup atual
          	$scope.view.wdg[(treePopup[i-1][0])]['visible'] = true;   // Show popup anterior
          	$scope.app.params.prmLabelNivel = treePopup[i-1][1];  	 // Setar o titulo de acordo com a árvore de popups 
          
          	          	
            if( i == 0 || i == 1){   //// Controlar a aparição do  botão e da label de voltar os popups
              	console.log(':)');
       			$scope.view.wdg['backButton']['visible'] = false;	 
				$scope.view.wdg['labelVoltarTela']['visible'] = false;     			
        	}
          		
        	break; 					//-------- VERIFICAR SE O USO ESTA CORRETO;  
           
        }
      
    }
  	
};
/*
|----------------------------------------------------
|		Botão voltar Popups
|----------------------------------------------------
*/





/*
|----------------------------------------------------
|		Chamada de uma experiência 3D
|----------------------------------------------------
|
|idViewExpe == ID da experiência a ser chamada.	(String)
|
|
*/

$scope.showExperience = function(idViewExpe){
    	  	    	
  	$scope.app.fn.navigate(idViewExpe);								// Chamar o view da Experiência.
  	$timeout($scope.view.wdg['popItem'].visible = false, 6000)	    // Espera 5s para poder fechar o ultimo Popup aberto.
  
};
/*
|----------------------------------------------------
|		Chamada de uma experiência 3D
|----------------------------------------------------
*/





/*
|----------------------------------------------------
|	Carregar o popupAvisoEPI apenas quando o sistema iniciar
|----------------------------------------------------
*/

$scope.alertEPI = function(){	
  
	if ( $scope.app.params.popAvisoEPIcont == 0) {
      			
  		$scope.app.params.prmLabelNivel = treePopup[0][1];	
      	$scope.view.wdg['popAvisoEPI'].visible = true;
  		$scope.app.params.popAvisoEPIcont = 1;         // Setando o pâremetro para que o popup não carregue enquanto o usuario não sair da sessão.            	 
      
    }  else {
    
    	$scope.view.wdg['popSistema'].visible = true;  // Deixar o popup inicial visivel.
      	$scope.app.params.prmLabelNivel = '(SISTEMA)'; // Setar o valor da label 'nivel para quando o usuário voltar da experiência'  	
    
    }
};

angular.element(document).ready($scope.alertEPI);

/*
|----------------------------------------------------
|	Carregar o popupAvisoEPIapenas quando o sistema iniciar
|----------------------------------------------------
*/
