
  var boxPosition = [0,1,2,3,4,5,6,7];
  var arregloFinal = [];
  var cont= 0;
  fin= false;
  var answers = [
    "Version",
    "Traffic Class",
    "Flow Label",
    "Playload Length",
    "Nex Header",
    "Hop Limit",
    "Sourse Address",
    "Destination Address",
    ];

  var newArreglo = [];
  var resanswers = [];
  var level=0;
  var timeLevel= 0;
  var punto = 0;
  var selecLevel1= false;
  var selecLevel2= false;
  var selecLevel3= false;
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
     selecLevel1 = true;
  });
    //Nivel dos aparecen 16 cartas
  $('#level2').click(function(){
     nivel= 2;
     timeLevel = 50;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     PlayGame();
     Timer();
     selecLevel2 = true;
  });
    //Nivel tres aparecen 24 cartas
  $('#level3').click(function(){
     timeLevel = 70;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     LevelHard();
     Timer();
    selecLevel3 = true;
  });

}

function EndGame(){
  function EndGame(){
     // se suman puntos segun el tiempo que tarde para ganar
      if ($('#contratiempo').text()>60 && $('#contratiempo').text()<=70) {
         punto = punto * 1 + 200;
      $('.punto').text(punto);

      } else if ($('#contratiempo').text()>50 && $('#contratiempo').text()<=60) {
         punto = punto * 1 + 140;
      $('.punto').text(punto);

      } else if ($('#contratiempo').text()>40 && $('#contratiempo').text()<=50) {
         punto = punto * 1 + 120;
      $('.punto').text(punto);

      } else if ($('#contratiempo').text()>30 && $('#contratiempo').text()<=40) {
         punto = punto * 1 + 100;
      $('.punto').text(punto);
            //********************************************************************
     } else if ($('#contratiempo').text()>30 && selecLevel1== true) {//Aumenta el puntaje a 100 si el nivel seleccionado es el 1
         punto = punto * 1 + 100;// Imprimer en la cantidad de puntos
        $('.punto').text(punto);

     } else if ($('#contratiempo').text()>20 && $('#contratiempo').text()<=30) {
         punto = punto * 1 + 80;
        $('.punto').text(punto);

     } else if ($('#contratiempo').text()>10 && selecLevel1== true).text()<=20) {
         punto = punto * 1 + 100;
        $('.punto').text(punto);

     } else if ($('#contratiempo').text()>10 && $('#contratiempo').text()<=20) {
         punto = punto * 1 + 60;
        $('.punto').text(punto);

       } else if ($('#contratiempo').text()>=0 && $('#contratiempo').text()<=10) {
         punto = punto * 1 + 40;
        $('.punto').text(punto);

     }
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
     // document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";
     $('#LooseModal').modal('show')
      clearInterval(interval);
     // $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).draggable({ disabled: true });
   //  //****** Elimina las cajas de respuesta al culminar el tiempo
      $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).remove();

    }
  }
  }, 1000);
}


// Funcion que inicia el juego en el nivel avanzado
function LevelHard(){
   arregloFinal = boxPosition;

  //****** Crea las cajas de las respuestas
  function restanswers(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPosition.length) + 1) - 1;

    if (boxPosition.length != 1){
      for (var i = 0; i <= boxPosition.length - 1; i++){
        if (i == numRandom){

          $('#pregunta').append('<div id="pregunta'+ boxPosition[numRandom] +'" class="caja"> '+ answers[boxPosition[numRandom]] + '</div>')

          //*****Elimina un objeto de un array
          boxPosition = jQuery.grep(boxPosition, function(b) {
            return b != boxPosition[numRandom];
          });

        }

      }
    }
    else {

      $('#pregunta').append('<div id="pregunta'+ boxPosition[numRandom] +'" class="caja"> '+ answers[boxPosition[numRandom]] + '</div>')

      //******* Elimina un objeto de un array
      boxPosition = jQuery.grep(boxPosition, function(b) {
        return b != boxPosition[0];
      });

    }


    if (boxPosition.length != 0){
      j++;
      restanswers(j);
    }

}

  restanswers(0);

//**********Valida Cajas Respuesta
  for (var j = 0; j < arregloFinal.length; j++){
    $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });
    $( "#ipv6-" + arregloFinal[j] ).droppable({
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
                if(cont==8){
                  $('#WinModal').modal('show');
                  EndGame();// llamado a la funcion del puntaje
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

  for(var i=0; i<Math.ceil(answers.length / nivel); i++){
    var value = Math.round(Math.random()* 7);
    newArreglo[value]= value;
    $('#ipv6-' + value).attr( "placeholder", answers[value]);
    $('#ipv6-' + value).addClass('help-input');
    //*** crea el resto del arreglo (las que no salen en la caja contentenedora)
    boxPosition = jQuery.grep(boxPosition, function(a) {
     return a != value;
     answers[a];
    });


  }//Fin de For i

  arregloFinal = boxPosition;

      //****** Crea las cajas de las respuestas
  function restanswers(j){
    exist= false;
    var numRandom = Math.floor((Math.random() * boxPosition.length) + 1) - 1;

    if (boxPosition.length != 1){
      for (var i = 0; i <= boxPosition.length - 1; i++){
        if (i == numRandom){

          $('#pregunta').append('<div id="pregunta'+ boxPosition[numRandom] +'" class="caja"> '+ answers[boxPosition[numRandom]] + '</div>')

          //*****Elimina un objeto de un array
          boxPosition = jQuery.grep(boxPosition, function(b) {
            return b != boxPosition[numRandom];
          });
          cont= cont + 1;
        }

      }
    }
    else {

      $('#pregunta').append('<div id="pregunta'+ boxPosition[numRandom] +'" class="caja"> '+ answers[boxPosition[numRandom]] + '</div>')

      //******* Elimina un objeto de un array
      boxPosition = jQuery.grep(boxPosition, function(b) {
        return b != boxPosition[0];
      });
      cont= cont + 1;
    }


    if (boxPosition.length != 0){
      j++;
      restanswers(j);
    }

}
  restanswers(0);

  //**********Valida Cajas Respuesta
    for (var j = 0; j < arregloFinal.length; j++){
      $( "#pregunta" + arregloFinal[j]).draggable({ revert: true,revertDuration: 0 });
      $( "#ipv6-" + arregloFinal[j] ).droppable({
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
                }
        }

      });
    }
  //**********   /Valida Cajas Respuesta
}
