// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Método único para desabilitar e habilitar os botões e dar o play e o rewind no modelo 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$scope.openPDF = function(){
 //app/resources/Uploaded/12137058_allDocuments.pdf 
  	console.log(':)');
  window.open("app/resources/Uploaded/12137058_allDocuments.pdf");
  return false;
}





//popFinalInspecao

/*
|------------------------------------------------------------
|		Variavéis Globais
|------------------------------------------------------------
|
|
|
|
*/
var gridSteps = new Array(

  	// As grids vão de 01 até 12 - Não existe a grip "00", por isso não deixe que nem um loop passe por ela.
	// O modelo tem exatamente 11 passos (step). O passo 12 não existe.   
  
	//[0][0] = nome da grip com os passos e a descrição 
	//[0][1] = valor do step relacionado ao Model  EX: 1,2,3...
	//[0][2] = tempo estimado da cada step em milesegundos
  
	["gridStep00",0],
  	["gridStep01",1,7500],
  	["gridStep02",2,6500],
  	["gridStep03",3,5000],
	["gridStep04",4,7500],
	["gridStep05",5,11660],
  	["gridStep06",6,12700],
  	["gridStep07",7,2550],
  	["gridStep08",8,10430],
  	["gridStep09",9,7450],
  	["gridStep10",10,5300],
  	["gridStep11",11,12100],
  	["gridStep12",12,9830]  
);
/*
|------------------------------------------------------------
|		Variavéis Globais
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Método para dar Play no modelo 3D
|------------------------------------------------------------
*/

$scope.rewindStep = function(){             // Função de Delay para poder realizar um rewind na peça
  
	$scope.app.fn.triggerWidgetService('modelVagao', 'rewind'); 
  	
  	// Retornar os botões para o modo padrão para o usuário poder clicar novamente.
  	$scope.view.wdg['gridButtonClick']['visible'] = true;
  	$scope.view.wdg['gridButtonNoClick']['visible'] = false;
  	$scope.view.wdg['cardInstrucaoNoClick']['visible'] = false;  	
  	$scope.view.wdg['spinner']['visible'] = false;  	
}



$scope.playSequence = function() {	     

  	// Pegar o step atual do modelo
  	var currentStep = $scope.view.wdg['modelVagao']['currentStep'];
  	
  	if(currentStep < 12){
       
    	// pegar o tempo necessarios para a execucao do passo atual (Acessar a terceira[2] casa do array para isso)
      	var timeStep = gridSteps[currentStep][2];  

      	// Aparecer o spinner sinalizando a ocorrência do modelo.
      	$scope.view.wdg['spinner']['visible'] = true;
      
      	// Esconder o pop com os botões que  tem uma função no click  !! Deste modo o usuário não consiguirá passar por cima dos passos. !!
      	$scope.view.wdg['gridButtonClick']['visible'] = false;     
      
      	// Mostrar o pop com os botões que  não tem uma função no click  !! Deste modo o usuário não consiguirá passar por cima dos passos. !!
      	$scope.view.wdg['gridButtonNoClick']['visible'] = true;
      	// Mostrar o pop transparente !! Deste modo o usuário não consiguirá passar por cima dos passos. !!
      	$scope.view.wdg['cardInstrucaoNoClick']['visible'] = true;
      
      	// Disparar o serviço de play do modelo.
      	$scope.app.fn.triggerWidgetService('modelVagao', 'play');  

      	// Esperar o tempo especifico de cada step acabar para chamar o método de rewind
      	$timeout($scope.rewindStep, timeStep);	
       
    } else (
    
    	$scope.finalStep()
    
    )  	    
}
/*
|------------------------------------------------------------
|		Método para dar Play no modelo 3D
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Método para seguir as instruções de montagem pelo botão next >|
|------------------------------------------------------------
*/

$scope.nextInstruction = function(){    	
    
    var atualStep =  $scope.view.wdg['modelVagao']['currentStep'];   // Capturar o passo atual do modelo 
  
  	if(atualStep == 12){         	
      
      	$scope.finalStep()   
      
    } else {
    
    	$scope.view.wdg[gridSteps[atualStep][0]]['visible']=false;
      	$scope.view.wdg[gridSteps[atualStep+1][0]]['visible']=true;
      	$scope.view.wdg['modelVagao']['currentStep'] = gridSteps[atualStep+1][1];
    
	}
}

/*
|------------------------------------------------------------
|		Método para seguir as instruções de montagem pelo botão next >|
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Método para voltar as instruções de montagem pelo botão back |<
|------------------------------------------------------------
*/
$scope.backInstruction = function(){
    	
    var atualStep =  $scope.view.wdg['modelVagao']['currentStep'];   // Capturar o passo atual do modelo 
  
  	if(atualStep == 0 || atualStep == 1){
    
      	console.log('Este é o primeiro passo ;)');
      
    } else {
    
    	$scope.view.wdg[gridSteps[atualStep][0]]['visible']=false;
      	$scope.view.wdg[gridSteps[atualStep-1][0]]['visible']=true;
      	$scope.view.wdg['modelVagao']['currentStep'] = gridSteps[atualStep-1][1];
    
    }
  	 	  	
}
/*
|------------------------------------------------------------
|		Método para voltar as instruções de montagem pelo botão back |<
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Método que possibilita a navegação pelo index lateral
|------------------------------------------------------------
*/

$scope.setCurrentStep = function(value){	    
  
	function showGrid(numGrid){    						// Função para alterar a visibilidade de qual passo o usuário esta.    
      	for(var i = 1; i < 13; i++){ $scope.view.wdg[gridSteps[i][0]]['visible']=false; }  // esconder todos os grids       
      	$scope.view.wdg[gridSteps[numGrid][0]]['visible']=true;            // Abrir apenas o grid solicitado    
    } 
    
  
  	function setStep(numStep){    						// Função para setar o passo escolhido pelo usuário      	
      	$scope.view.wdg['modelVagao']['currentStep']=numStep;   // Setar o vagão com o passo escolhido 
    }
  	
  	showGrid(value); // Chamada da função passando o variavel desta pedida desta função.
  	setStep(value);  // Chamada da função passando o variavel desta pedida desta função.
} 	          		    	        	     	

/*
|------------------------------------------------------------
|		Método que possibilita a navegação pelo index lateral
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Controle do popup que informará o usuário o final dos passos 
|------------------------------------------------------------
*/

$scope.finalStep = function(){      // Show popup 

	console.log('Não há mais passos');
    $scope.view.wdg['popFinalInspecao']['visible'] = true;

}


// Buttons pop
$scope.continueStep = function(){   // Hide popup

	$scope.view.wdg['popFinalInspecao']['visible'] = false;
  
};

$scope.backHome = function(){       // Take the user to the start of the menu

	$scope.app.fn.navigate('HOME');	  

};
// Buttons pop

/*
|------------------------------------------------------------
|		Controle do popup que informará o usuário o final dos passos
|------------------------------------------------------------
*/





/*
|------------------------------------------------------------
|		Mostra/Esconder o painel de instruções
|------------------------------------------------------------
*/
$scope.hideShowPanel = function (){
  
	if($scope.view.wdg['cardInstrucao']['visible']){
      
		$scope.view.wdg['cardInstrucao']['visible'] = false;      	
      
	}else{
      
		$scope.view.wdg['cardInstrucao']['visible'] = true;  	
	}  
};
/*
|------------------------------------------------------------
|		Mostra/Esconder o painel de instruções
|------------------------------------------------------------
*/



$scope.rotateLabel = function () {
	$scope.app.params.rotationParameter += 5;
}

/*	PASSOS

01 - Garantir o posicionamento do virador de vagões a 0º e com os grampos baixos.
Solicitar previamente a limpeza do virador de vagões junta à equipe de operação.

02 - Desligar os cabos elétricos do vibrador e desmontar as porcas de fixação.

03 - Desmontar os parafusos de fixação do vibrador utilizando o oxicorte.

04 - Remover o vibrador atentando para as interferências entre os  		parafusos e a chapa de desgaste.

05 - Desmontar os parafusos de fixação da proteção do  	cilindro utilizando o oxicorte.
Remover a proteção do cilindro.

06 - Desamassar orelhas da chapa trava.
Desmontar os parafusos de fixação da tampa do pino utilizando chave 	combinada de 19mm.
Remover a tampa de proteção do pino.
Desmontar o pino de articulação do cilindro utilizando o slide sledge.

07 - Montar as pegas no grampo com o auxílio do guindaste de 30t, utilizando as  	manilhas de 1/2" e o cabo de aço de diâmetro 1/2" com comprimento de 3m.
Elevar o carro do grampo  à 200mm utilizando o guindaste de 30t.

08 - Retirar os labirintos de vedação da articulação do cilindro.

09 - Desmontar as chapas "U" de proteção do grampo utilizando o oxicorte.

10 - Elevar totalmente o carro do grampo utilizando o guindaste 30t.
Após a elevação, posicioná-lo no solo para substituição.

11 - Desmontar os parafusos de fixação das réguas utilizando o oxicorte.
Remover as oito réguas e seus respectivos parafusos.

12 - Etapa de desmontagem do grampo  concluída.
*/