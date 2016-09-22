
  var boxPosition = [0,1,2,3,4,5,6,7,8,9,10];
  var arregloFinal = [];
  var cont=0;
  fin= false;
  var answers = [
    "Source Port",
    "Destination Port",
    "Secuence Number",
    "Acknowledgement Num",
    "Offset",
    "Reserved",
    "TCP Flags",
    "Window",
    "Checksum",
    "Urgent Pointer",
    "TCP Options",
    ];

  var newArreglo = [];
  var resanswers = [];
  var level=0;
  var timeLevel= 0;
  var punto = 0;
  var nivel=0;

$(document).ready(function(){
  if(localStorage.getItem("intentar")==1 || localStorage.getItem("intentar")==2 || localStorage.getItem("intentar")==3 ) 
  {

    $('#levelModal').modal('hide');

    if(localStorage.getItem("intentar")==1){

       nivel= 1;
       timeLevel = 40;
       PlayGame();
       Timer();

    }else if(localStorage.getItem("intentar")==2){

       nivel= 2;
       timeLevel = 70;
       PlayGame();
       Timer();

    }else if(localStorage.getItem("intentar")==3){

      nivel=3;
      timeLevel = 100;
      LevelHard();
      Timer();
    }

    localStorage.removeItem('intentar');

  }else{

    Level();
  }
});//Fin de ready



//Determina el Nivel en que se va a iniciar
function Level(){
    //Nivel uno aparecen 12 cartas
  $('#level1').click(function(){
     nivel= 1;
     timeLevel = 40;
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
    nivel=3;
     timeLevel = 100;
     $('#level1').remove();
     $('#level2').remove();
     $('#level3').remove();
     LevelHard();
     Timer();
  });

}

function EndGame(){
  
  if(nivel==1){

      if ($('#contratiempo').text()>30) {
          punto = punto + 100;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>20 && $('#contratiempo').text()<=30) {
          punto = punto + 60;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>10 && $('#contratiempo').text()<=20) {
          punto = punto + 40;
          $('.punto').text(punto);

        } else if ($('#contratiempo').text()>=0 && $('#contratiempo').text()<=10) {
          punto = punto + 20;
          $('.punto').text(punto);

      }

    }

  
    if(nivel==2){
      

      if ($('#contratiempo').text()>60) {
          punto = punto + 200;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>50 && $('#contratiempo').text()<=60) {
          punto = punto + 100;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>30 && $('#contratiempo').text()<=40) {
          punto = punto + 80;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>20 && $('#contratiempo').text()<=30) {
          punto = punto + 60;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>10 && $('#contratiempo').text()<=20) {
          punto = punto + 40;
          $('.punto').text(punto);

        } else if ($('#contratiempo').text()>=0 && $('#contratiempo').text()<=10) {
          punto = punto + 20;
          $('.punto').text(punto);
      }   
    }

    if(nivel==3){
    
      
      if ($('#contratiempo').text()>60) {
          punto = punto + 200;
          $('.punto').text(punto);


      } else if ($('#contratiempo').text()>70 && $('#contratiempo').text()<=80) {
          punto = punto + 150;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>60 && $('#contratiempo').text()<=70) {
          punto = punto + 120;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>50 && $('#contratiempo').text()<=60) {
          punto = punto + 100;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>30 && $('#contratiempo').text()<=40) {
          punto = punto + 80;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>20 && $('#contratiempo').text()<=30) {
          punto = punto + 60;
          $('.punto').text(punto);

      } else if ($('#contratiempo').text()>10 && $('#contratiempo').text()<=20) {
          punto = punto + 40;
          $('.punto').text(punto);

        } else if ($('#contratiempo').text()>=0 && $('#contratiempo').text()<=10) {
          punto = punto + 20;
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
      $('#LooseModal').modal('show')
      clearInterval(interval);
     // $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).draggable({ disabled: true });
   //  //****** Elimina las cajas de respuesta al culminar el tiempo
      $( "#pregunta0,#pregunta1, #pregunta2, #pregunta3, #pregunta4, #pregunta5, #pregunta6, #pregunta7, #pregunta8, #pregunta9, #pregunta10, #pregunta11, #pregunta12, #pregunta13" ).remove();

      ShareScore();
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
    $( "#tcp-" + arregloFinal[j] ).droppable({
      accept: "#pregunta" + arregloFinal[j],
      activeClass: "",
      hoverClass: "",

      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
          //***** Operador ternario
          .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
              punto+=5;
              $('#score').text(punto);
              $('.punto').text(punto);
               $('#' + ui['draggable'][0].id).remove();
                cont= cont + 1;
                if(cont==11){
                  $('#WinModal').modal('show');
                  EndGame();// llamado a la funcion del puntaje
                  fin=true;
                  Timer();
                  ShareScore();
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
    var value = Math.round(Math.random()* 10);
    newArreglo[value]= value;
    $('#tcp-' + value).attr( "placeholder", answers[value]);
    $('#tcp-' + value).addClass('help-input');
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
      $( "#tcp-" + arregloFinal[j] ).droppable({
        accept: "#pregunta" + arregloFinal[j],
        activeClass: "",
        hoverClass: "",

        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )//*** Color que se le asigna al Input donde se introduce la caja correcta
            //***** Operador ternario
            .attr( "placeholder", ui['draggable'][0].outerText == "Internet Header LLength" ? "IHT" : ui['draggable'][0].outerText)
              punto+=5;
              $('#score').text(punto);
              $('.punto').text(punto);
              cont= cont - 1;
              $('#' + ui['draggable'][0].id).remove();
                if(cont==0){
                  $('#WinModal').modal('show');
                  EndGame();// llamado a la funcion del puntaje
                  fin=true;
                  Timer();
                  ShareScore();
                }
        }

      });
    }
  //**********   /Valida Cajas Respuesta
}


function ShareScore(){

  var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":3, "TopicId" :3, "levelId" :nivel,"Score":punto};

  var uid = RegisterGame(infogame);

  public_FB();
}

function public_TW(){

  var level='';

  switch(nivel) {
      case 1:

      level='EASY';
      break;
    case 2:

      level='MEDIUM';

      break;

    case 3:
              
      level='HARD';

      break;
  }

  var msj="GAME: DRAG  TOPIC:TCP  NEVEL: "+level+" POINTS: "+punto;

  var game='m';

  var src='http:00angelgame.acostasite.com0Game0img0drag_img.png';
  
  loginGame(msj,src,game);

}

function public_FB(){

  var level='';

  switch(nivel) {
      case 1:

      level='EASY';
      break;
    case 2:

      level='MEDIUM';

      break;

    case 3:
              
      level='HARD';

      break;
  }

  var msj="GAME: DRAG  TOPIC:TCP  NEVEL: "+level+" POINTS: "+punto;

  $(".fb-xfbml-parse-ignore").attr("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fangelgame.acostasite.com%2FGame%2FPublic.php?description="+msj+"&method=1&amp;src=sdkpreparse");
}

function reload(){

  localStorage.setItem('intentar', nivel);

  location.reload();
}