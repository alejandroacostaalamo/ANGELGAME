
  var boxPositiondns = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  var arregloFinal = [];
  fin= false;
  var answersdns = [
  "127.0.0.1",
  "a",
  "LOCALHOST",
  "192.168.0.1",
  "A ",
  "ROUTER",
  "3ffe:1900:4545:2:02d0:09ff:fef7:6d2c",
  "AAAA",
  "LINUX",
  "mail.ex.net",
  "CNAME",
  "mail.ex.com",
  "v=spf1-all",
  "TXT",
  "mydomain.com"
  ];
  
  var newArreglo = [];
  var resAnswersdns = [];
  var level=0;
  var timeLevel= 0;
  var cont= 0;
$(document).ready(function(){
  Level(); 
});//Fin de ready



//Determina el Nivel en que se va a iniciar
function Level(){
    //Nivel uno aparecen 12 cartas
  $('#level1').click(function(){
     nivel= 1;
     timeLevel = 20;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     PlayGame();
     Timer();
  });
    //Nivel dos aparecen 16 cartas
  $('#level2').click(function(){
     nivel= 2;
     timeLevel = 40;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     PlayGame();
     Timer();
  });
    //Nivel tres aparecen 24 cartas
  $('#level3').click(function(){
     timeLevel = 60;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     LevelHard();
     Timer();
  });

}

function EndGame(){
  if(arregloFinal[j]=""){
      $('#WinModal').modal('show');
        fin=true;
        Timer();
  }
}

//Conteo regresivo
function Timer(){
    //Conteo Regresivo
  var seconds_left = timeLevel;
  // var minutes_left = 0;

  var interval = setInterval(function() {

  document.getElementById('contratiempo').innerHTML =  --seconds_left;
  if (fin==false) {
    if (seconds_left <= 0)
    {
      //document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";
      
     $('#LooseModal').modal('show');
      clearInterval(interval);
      //location.reload();
     // $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).draggable({ disabled: true });
   //  //****** Elimina las cajas de respuesta al culminar el tiempo
      $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).remove();

    }
  }
  }, 1000);
}


// Funcion que inicia el juego en el nivel avanzado 
function LevelHard(){
   arregloFinal = boxPositiondns;

  //****** Crea las cajas de las respuestas
  function restAnswersdns(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPositiondns.length) + 1) - 1;

    if (boxPositiondns.length != 1){
      for (var i = 0; i <= boxPositiondns.length - 1; i++){
        if (i == numRandom){
          
          $('#pregunta').append('<div id="pregunta'+ boxPositiondns[numRandom] +'" class="caja"> '+ answersdns[boxPositiondns[numRandom]] + '</div>')
        
          //*****Elimina un objeto de un array
          boxPositiondns = jQuery.grep(boxPositiondns, function(b) {
            return b != boxPositiondns[numRandom];
          });

        }

      }
    }
    else {
      
      $('#pregunta').append('<div id="pregunta'+ boxPositiondns[numRandom] +'" class="caja"> '+ answersdns[boxPositiondns[numRandom]] + '</div>')
    
      //******* Elimina un objeto de un array
      boxPositiondns = jQuery.grep(boxPositiondns, function(b) {
        return b != boxPositiondns[0];
      });

    }
    

    if (boxPositiondns.length != 0){
      j++;
      restAnswersdns(j);
    }

}

  restAnswersdns(0);

//**********Valida Cajas Respuesta 
  for (var j = 0; j < arregloFinal.length; j++){
    $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });
    $( "#dns-" + arregloFinal[j] ).droppable({
      accept: "#pregunta" + arregloFinal[j],    
      activeClass: "",
      hoverClass: "",
        
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
          //***** Operador ternario
          .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
              $('#score').html(function(i, val) { return val*1+5 });//Contador para el puntaje
                $('#' + ui['draggable'][0].id).remove();
                cont= cont + 1; 
                if(cont==15){
                  $('#WinModal').modal('show');
                    fin=true;
                    Timer();
                } 
      }

    });
  }
  //**********  /Valida Cajas Respuesta 
}



//inicia el juego segun el nivel 
function PlayGame(){
      ///***** Crea de forma aleatoria las palabras en la caja contenedora

  for(var i=0; i<Math.ceil(answersdns.length / nivel); i++){
    var value = Math.round(Math.random()* 14);
    newArreglo[value]= value;
    $('#dns-' + value).attr( "placeholder", answersdns[value]);
    $('#dns-' + value).addClass('help-input');
    //*** crea el resto del arreglo (las que no salen en la caja contentenedora)
    boxPositiondns = jQuery.grep(boxPositiondns, function(a) {
     return a != value;  
     answersdns[a]; 
    });
    
   
  }//Fin de For i

  arregloFinal = boxPositiondns;

      //****** Crea las cajas de las respuestas
  function restAnswersdns(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPositiondns.length) + 1) - 1;

    if (boxPositiondns.length != 1){
      for (var i = 0; i <= boxPositiondns.length - 1; i++){
        if (i == numRandom){
          
          $('#pregunta').append('<div id="pregunta'+ boxPositiondns[numRandom] +'" class="caja"> '+ answersdns[boxPositiondns[numRandom]] + '</div>')
        
          //*****Elimina un objeto de un array
          boxPositiondns = jQuery.grep(boxPositiondns, function(b) {
            return b != boxPositiondns[numRandom];
          });
        cont= cont + 1;
        }

      }
    }
    else {
      
      $('#pregunta').append('<div id="pregunta'+ boxPositiondns[numRandom] +'" class="caja"> '+ answersdns[boxPositiondns[numRandom]] + '</div>')
    
      //******* Elimina un objeto de un array
      boxPositiondns = jQuery.grep(boxPositiondns, function(b) {
        return b != boxPositiondns[0];
      });
      cont= cont + 1;
    }
    

    if (boxPositiondns.length != 0){
      j++;
      restAnswersdns(j);
    }

}
  restAnswersdns(0);

  //**********Valida Cajas Respuesta 
    for (var j = 0; j < arregloFinal.length; j++){
      $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });
      $( "#dns-" + arregloFinal[j] ).droppable({
        accept: "#pregunta" + arregloFinal[j],    
        activeClass: "",
        hoverClass: "",
          
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
            //***** Operador ternario
            .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
                $('#score').html(function(i, val) { return val*1+5 });//Contador para el puntaje
                cont= cont - 1;
                $('#' + ui['draggable'][0].id).remove();
                if(cont==0){
                  $('#WinModal').modal('show')
                    fin=true;
                    Timer(); 
                }
        }

      });
    }
  //**********   /Valida Cajas Respuesta 
}


