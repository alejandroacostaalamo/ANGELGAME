
  var boxPositionIpv4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  var arregloFinal = [];
  fin= false;
  var answersIpv4 = [
    "Version",
    "Internet Header LLength",
    "Type of Service",
    "Total Length",
    "Identification",
    "Flogs",
    "Fragment Offset",
    "Time to Live",
    "Protocol",
    "Header Checksum",
    "Sourse Address",
    "Destination Address",
    "Options",
    "Padding",
  ];

  var newArreglo = [];
  var resAnswersIpv4 = [];
  var level=0;
  var timeLevel= 0;
  var cont=0;
  var punto = 0;
$(document).ready(function(){

  Level();
});//Fin de ready



//Determina el Nivel en que se va a iniciar
function Level(){
    //Nivel uno aparecen 12 cartas
  $('#level1').click(function(){
     nivel= 1;
     timeLevel = 60;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     PlayGame();
     Timer();
  });
    //Nivel dos aparecen 16 cartas
  $('#level2').click(function(){
     nivel= 2;
     timeLevel = 70;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     PlayGame();
     Timer();
  });
    //Nivel tres aparecen 24 cartas
  $('#level3').click(function(){
     timeLevel = 100;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     LevelHard();
     Timer();
  });

}

function EndGame(){
   // se suman puntos segun el tiempo que tarde para ganar
   if ($('#contratiempo').text()>30) {
       punto = punto * 1 + 100;
      $('.punto').text(punto);// Imprimer en la cantidad de puntos


   } else if ($('#contratiempo').text()>20 && $('#contratiempo').text()<=30) {
       punto = punto * 1 + 60;
      $('.punto').text(punto);
       console.log('suman 60 puntos');

   } else if ($('#contratiempo').text()>10 && $('#contratiempo').text()<=20) {
       punto = punto * 1 + 40;
      $('.punto').text(punto);
       console.log('suman 40 puntos');

     } else if ($('#contratiempo').text()>=0 && $('#contratiempo').text()<=10) {
       punto = punto * 1 + 20;
      $('.punto').text(punto);

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
    if (seconds_left <= 0){
      // document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";
     $('#LooseModal').modal('show')
      clearInterval(interval);
      ////location.reload();
     // $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).draggable({ disabled: true });
   //  //****** Elimina las cajas de respuesta al culminar el tiempo
      $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).remove();

    }
  }

  }, 1000);
}


// Funcion que inicia el juego en el nivel avanzado
function LevelHard(){
   arregloFinal = boxPositionIpv4;

  //****** Crea las cajas de las respuestas
  function restAnswersIpv4(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPositionIpv4.length) + 1) - 1;

    if (boxPositionIpv4.length != 1){
      for (var i = 0; i <= boxPositionIpv4.length - 1; i++){
        if (i == numRandom){

          $('#pregunta').append('<div id="pregunta'+ boxPositionIpv4[numRandom] +'" class="caja"> '+ answersIpv4[boxPositionIpv4[numRandom]] + '</div>')

          //*****Elimina un objeto de un array
          boxPositionIpv4 = jQuery.grep(boxPositionIpv4, function(b) {
            return b != boxPositionIpv4[numRandom];
          });

        }

      }
    }
    else {

      $('#pregunta').append('<div id="pregunta'+ boxPositionIpv4[numRandom] +'" class="caja"> '+ answersIpv4[boxPositionIpv4[numRandom]] + '</div>')

      //******* Elimina un objeto de un array
      boxPositionIpv4 = jQuery.grep(boxPositionIpv4, function(b) {
        return b != boxPositionIpv4[0];
      });

    }


    if (boxPositionIpv4.length != 0){
      j++;
      restAnswersIpv4(j);
    }

}

  restAnswersIpv4(0);

//**********Valida Cajas Respuesta
  for (var j = 0; j < arregloFinal.length; j++){
    $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });

    $( "#ipv4-" + arregloFinal[j] ).droppable({
      accept: "#pregunta" + arregloFinal[j],
      activeClass: "",
      hoverClass: "",

      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
          //***** Operador ternario
          .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
              $('#score').html(function(i, val) { return val*1+5 });//Contador para el puntaje
              punto = $('#score').text();// Se iguala la variable 'punto' con el contenido del Score
              $('#' + ui['draggable'][0].id).remove();
              cont= cont + 1;
              console.log(cont);
              if(cont==14){
                $('#WinModal').modal('show');
                EndGame();// llamado a la funcion del puntaje
                fin=true;
                Timer();
                //location.reload();
              }
      }

    });
  }
  //**********  /Valida Cajas Respuesta
}



//inicia el juego segun el nivel
function PlayGame(){
      ///***** Crea de forma aleatoria las palabras en la caja contenedora

  for(var i=0; i<Math.ceil(answersIpv4.length / nivel); i++){
    var value = Math.round(Math.random()* 13);
    newArreglo[value]= value;
    $('#ipv4-' + value).attr( "placeholder", answersIpv4[value]);
    $('#ipv4-' + value).addClass('help-input');
    //*** crea el resto del arreglo (las que no salen en la caja contentenedora)
    boxPositionIpv4 = jQuery.grep(boxPositionIpv4, function(a) {
     return a != value;
     answersIpv4[a];
    });


  }//Fin de For i

  arregloFinal = boxPositionIpv4;

      //****** Crea las cajas de las respuestas
  function restAnswersIpv4(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPositionIpv4.length) + 1) - 1;

    if (boxPositionIpv4.length != 1){
      for (var i = 0; i <= boxPositionIpv4.length - 1; i++){
        if (i == numRandom){

          $('#pregunta').append('<div id="pregunta'+ boxPositionIpv4[numRandom] +'" class="caja"> '+ answersIpv4[boxPositionIpv4[numRandom]] + '</div>')

          //*****Elimina un objeto de un array
          boxPositionIpv4 = jQuery.grep(boxPositionIpv4, function(b) {
            return b != boxPositionIpv4[numRandom];
          });
          cont= cont + 1;
        }

      }
    }
    else {

      $('#pregunta').append('<div id="pregunta'+ boxPositionIpv4[numRandom] +'" class="caja"> '+ answersIpv4[boxPositionIpv4[numRandom]] + '</div>')

      //******* Elimina un objeto de un array
      boxPositionIpv4 = jQuery.grep(boxPositionIpv4, function(b) {
        return b != boxPositionIpv4[0];
      });
      cont= cont + 1;

    }
    //console.log(cont);

    if (boxPositionIpv4.length != 0){
      j++;
      restAnswersIpv4(j);
    }

}
  restAnswersIpv4(0);

  //**********Valida Cajas Respuesta
    for (var j = 0; j < arregloFinal.length; j++){
      $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });

      $( "#ipv4-" + arregloFinal[j] ).droppable({
        accept: "#pregunta" + arregloFinal[j],
        activeClass: "",
        hoverClass: "",

        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
            //***** Operador ternario
            .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
                $('#score').html(function(i, val) { return val*1+5 });//Contador para el puntaje
                punto = $('#score').text();// Se iguala la variable 'punto' con el contenido del Score
                cont= cont - 1;
                $('#' + ui['draggable'][0].id).remove();
                if(cont==0){
                  $('#WinModal').modal('show');
                  EndGame();// llamado a la funcion del puntaje
                  fin=true;
                  Timer();
                  //location.reload();
                }
        }

      });
    }
  //**********   /Valida Cajas Respuesta
}
