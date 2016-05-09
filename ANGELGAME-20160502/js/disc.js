var audioElement = document.createElement('audio');

var questions = [{
  descrip: "Loopback",
  choices: ["127.0.0.1","127.1.0.0","0.0.0.1/1","127.127.0/1","255.0.0.1","127.27.27.0"],
  correctAnswer: "127.0.0.1",
  color: "#F7FF06"
}, {
  descrip: "Ruta por defecto",
  choices: ["0.0.0.11","0.0.0.0","124.0.1.0","0.0.0","0.0.1.1","0.0.0.0/124"],
  correctAnswer: "0.0.0.0",
  color: "#E606FF"
}, {
  descrip: "Multicast",
  choices: ["224.0.0.0","239.0.0.255","224.0.0.0/1","255.255.255.255","255.0.0.0","224.0.0.255"],
  correctAnswer: ["224.0.0.0", "239.255.255.255"],
  color: "#FFFFFF"
}, {
  descrip: "Direccion Privada",
  choices: ["10.127.0.0","172.0.0.0","168.10.0.1","192.168.0.0/16","10.0.0.0/8","172.16.0.0/12"],
  correctAnswer: ["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16"],
  color: "#60FF00"
}]; 
var DiscoSpeed=0;
var PreguntaSpeed=0;

function Level(){
  $('#level1').click(function(){
    DiscoSpeed= 10000;
    PreguntaSpeed= 9000;
    Timer();
    Questions();
  }) 
  $('#level2').click(function(){
    DiscoSpeed= 7000;
    PreguntaSpeed= 5000;
    Timer();
    Questions();
  })
}

  /*-------------------------------------*/
  /*Funcion de la activacion del audio*/
  /*-------------------------------------*/
function PlayMusic(active){
  window.localStorage.setItem('audio', active);
  //console.log(window.localStorage.setItem('audio', active))
  if (active == "1"){
    audioElement.setAttribute('id', 'sonido');
    audioElement.setAttribute('src', '../../sounds/world1.mp3');
      audioElement.setAttribute('autoplay', 'autoplay');
      audioElement.addEventListener("ended", function() {
          this.currentTime = 0;
          this.play();
      }, false);
  }
  else {
    audioElement.pause();
    active=0;
  }

  /*$.winFocus(function(event, play, audio) {
    if (active=="1"){
      //console.log(active);
      if (play){ 
        $(".play").stop().delay('fast', function(e) {
          audioElement.play();
        });
      
    }else{
        audioElement.pause();
        active=0;
      }
  }

  }, false);*/
}


var isFinish = false;
var contador = 0;

function Timer(){
  //Conteo Regresivo
  var seconds_left = 59;
  // var minutes_left = 0;
  var interval = setInterval(function() {
  //document.getElementById('contratiempo').innerHTML =  '0'+minutes_left +':'+ --seconds_left;
  document.getElementById('contratiempo').innerHTML =   --seconds_left;

  if (seconds_left <= 5){
    $('.ballonsBox').animate({
      'opacity':'0'
    },{ duration: 2500, queue: false });
  }
  if (seconds_left <= 0)
  {
    $('.ballonsBox').remove();
    $('#LooseModal').modal('show')
    //alert('Game Over');

    //document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";
    clearInterval(interval);
  }

  }, 1000);
}

function Questions(){

  function IntervalPreguntas(){

    /*Genera la pregunta aleatoria*/
    var cantidad_q = questions.length;
    var random_q = Math.floor((Math.random()* cantidad_q));     
    var descriptions = questions[random_q].descrip;
    
    /* Se consigue el color por la pregunta */
    var color = questions[random_q].color;


    $('#ActualQuestion').text(descriptions);
    $('#ActualQuestion').css('color', color);

    return random_q;

  }
  var random_q = IntervalPreguntas();
  var count = 0;
  var y = 0;
  IntervalOpciones();
  

  /*Funcion que genera opciones dentro de un tiempo*/

  function IntervalOpciones() {
    /*Se obtiene lo que returna la funcion de preguntas*/ 

    var opciones = questions[random_q].choices;
    var cantidad_opciones = questions[random_q].choices.length;
    


    //console.log(cantidad_opciones+ ' cantidad_opciones');
     
    if(count < cantidad_opciones){

        /*Se consigue el color de la pregunta actual*/
        var color = questions[random_q].color;

        var random_globo = Math.floor((Math.random()* 4) + 1);
        var width = $('.ballonsBox').innerWidth();
        var x = 1; 
             
        for (var i = 1; i <= cantidad_opciones; i++) {

            
            /*Se crea el 'globo'*/
            if(y < 50){
              $('.ballonsBox').append('<div id="disco'+y+'" class="globo'+i+' click" onclick="comparacion('+random_q+',this)"><span>' + questions[random_q].choices[count] +'</span><img src="../../img/globo'+ x +'.png"></div>');
            }
                        
            /*-------------------------------------*/
            /*      Animacion para los globos      */
            /*-------------------------------------*/
           
            var random_vel = Math.floor((Math.random() * 7000) + 1000);
            $('.globo'+i).animate({bottom: '180%'}, random_vel + DiscoSpeed);
            
              /*Se le asigna el color a las opciones*/
              $('#disco'+ y + ' span').css('color', color);         

            if (x < 4) {
              x++;
            }
            else{
              x = 1;
            }

         

            /*Obtener las opciones con sus respectivas opciones dentro de un intervalo de tiempo*/
            //console.log(questions[random_q].choices[count]);
            count++;
            y++;
            //console.log(y);
          }  
          

        /*Condición que reinicia el contador*/
        if(count == cantidad_opciones){
          count = 0;
          isFinish = true;
        }
    }

  } //Fin de IntervalOpciones



  /*Llamado de la función 'increment' donde se especifica el tiempo*/

  if (isFinish) {
      setInterval(function() {
        random_q = IntervalPreguntas();
        IntervalOpciones();
        isFinish = false;
    }, PreguntaSpeed);
  } 

} //Fin de Questions

/*----------------------------------------------------------*/
/*funcion que determina si el globo es correcto o incorrecto*/
/*----------------------------------------------------------*/
function comparacion(random_q, globo){

  var globo_selec = $(globo).text();
  console.log('El globo seleccionado es ' + globo_selec);
  var cantidad_correcta = questions[random_q].correctAnswer.length
  var pregunta_actual = questions[random_q].descrip;

  //Compara las respuestas correctas e incorrectas 
  if(pregunta_actual == "Multicast"){


    if(globo_selec == "224.0.0.0"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else if(globo_selec == "239.255.255.255"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);


      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else{
      $(globo).stop().css('opacity','0');
      globo_selec = null;

      if(contador == 0){
        contador = 0;
      } 
      else{
        contador = contador - 5;
      }
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-times')
      $('.answer i').css({
        'opacity':'1',
        'color': '#FF3232'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }




  }
  if(pregunta_actual == "Loopback"){
    if(globo_selec == "127.0.0.1"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else{
      $(globo).stop().css('opacity','0');
      globo_selec = null;

      if(contador == 0){
        contador = 0;
      } 
      else{
        contador = contador - 5;
      }
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-times')
      $('.answer i').css({
        'opacity':'1',
        'color': '#FF3232'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);

    }
  }
  if(pregunta_actual == "Ruta por defecto"){
    if(globo_selec == "0.0.0.0"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else{
      $(globo).stop().css('opacity','0');
      globo_selec = null;

      if(contador == 0){
        contador = 0;
      } 
      else{
        contador = contador - 5;
      }
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-times')
      $('.answer i').css({
        'opacity':'1',
        'color': '#FF3232'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
  }
  if(pregunta_actual == "Direccion Privada"){
    if(globo_selec == "10.0.0.0/8"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else if(globo_selec == "172.16.0.0/12"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else if(globo_selec == "192.168.0.0/16"){
      $(globo).stop().css('opacity','0');
      contador = contador + 5;
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-check')
      $('.answer i').css({
        'opacity':'1',
        'color': '#58F975'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
    else{
      $(globo).stop().css('opacity','0');
      globo_selec = null;

      if(contador == 0){
        contador = 0;
      } 
      else{
        contador = contador - 5;
      }
      $('#punto').text(contador);

      $('.answer i').removeClass();
      $('.answer i').addClass('fa fa-times')
      $('.answer i').css({
        'opacity':'1',
        'color': '#FF3232'
      });
      $('.answer i').animate({
        'opacity':'0'
      },500);
    }
  }

    //Alerta de partida finalizada
  if (contador==35) {
    $('.ballonsBox').stop().css('opacity','0');    
    $('#WinModal').modal('show');
    $('#contratiempo').remove();

  }

};


$(document).ready(function(){

  $('#levelModal').modal('show');
  $('#levelModal .modal-body button').click(function(){
    $('#levelModal').modal('hide');
  })

  /*-------------------------------------*/
  var w_width = $(window).innerWidth();
  var w_height = $(window).innerHeight();

  /*-------------------------------------*/
  /*    Tamaño de la caja principal      */
  /*-------------------------------------*/
  $('#box').css({
    'width': w_width + 'px',
    'height' : w_height + 'px',
    'padding' : '5px'
  });

  /*-------------------------------------*/
  /*Funciones que se ejecutan en el ready*/
  /*-------------------------------------*/
  Level();
  PlayMusic(window.localStorage.getItem('audio'));


})