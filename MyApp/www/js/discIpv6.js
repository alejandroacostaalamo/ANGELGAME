var audioElement = document.createElement('audio');

var questions = [{
    descrip: "Teredo",
    choices: ["2001::/32","2000::/64","2100:/1","fe80::","f::/77","32/::2001"],
    correctAnswer: ["2001::/32"],
    color:"#C4FF79"
  }, {
    descrip: "6TO4",
    choices: ["2001","2002::/16","2221::/32","00::0/12","111::/0","9b/96"],
    correctAnswer: ["2002::/16"],
    color: "#FF06EA"
  }, {
    descrip: "Documentacion",
    choices: ["200:/399","16","2001:db8::/32","fe8::","fc00::7","2001::/96"],
    correctAnswer: ["2001:db8::/32"],
    color:"#FFC107"
  }, {
    descrip: "Multicast",
    choices: ["ff01::/32","200::/ff00","2000::ff","ff00::0/12","fc00::/ff","ff9b::/96"],
    correctAnswer: ["ff00::0/12"],
    color: "#FF8E63"
  }, {
    descrip: "Loopback",
    choices: ["::/32","::/16","db8::/32","f00::12","::1","::/0"],
    correctAnswer: ["::1"],
    color:"#00FDFF"
  }, {
    descrip: "Default Route",
    choices: ["2::/32","2002::/00","0::32","/12","::/0000","::/0"],
    correctAnswer: ["::/0"],
    color: "#CDDC39"
  }, {
    descrip: "Link-Local",
    choices: ["2001::/32","2002::/16","2001:db8::/32","ff00::0/12","::1","::/0","fe80::/10","fc00::/7","64:ff9b::/96"],
    correctAnswer: ["fe80::/10"],
    color: "#FFE521"
  }, {
    descrip: "ULA",
    choices: ["fc200::/3","20fc::/17","2001::/","ff00::0/2","::1/7","fc00::/7"],
    correctAnswer: ["fc00::/7"],
    color: "#F9F9F9"
  }, {
    descrip: "Well Known DNS64/NAT64",
    choices: ["2001:ff9::/96","::64",":98000:/0","64::/10","ffff00:","64:ff9b::/96"],
    correctAnswer: ["64:ff9b::/96"],
    color:"#980000"
  }]; 
   
var DiscoSpeed=0;
var PreguntaSpeed=0;
var nivel=0;

function Level(){
  $('#level1').click(function(){
    DiscoSpeed= 10000;
    PreguntaSpeed= 9000;
    if ($('#cmbTime').val()==''){
		seconds_left = 60;
		$('#cmbTime').val(timeLevel);
	}
	else
		seconds_left = parseInt($('#cmbTime').val());
    nivel=1;
    Timer();
    Questions();
  }) 
  $('#level2').click(function(){
    DiscoSpeed= 7000;
    PreguntaSpeed= 5000;
    nivel=3;
	if ($('#cmbTime').val()==''){
		seconds_left = 60;
		$('#cmbTime').val(timeLevel);
	}
	else
		seconds_left = parseInt($('#cmbTime').val());
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

 /* $.winFocus(function(event, play, audio) {
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

var seconds_left = 59;

function Timer(){
  //Conteo Regresivo
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

    $('.punto').text(contador);

    ShareScore();
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
            
            // cantidad_opciones++;
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

  if(pregunta_actual == "Teredo"){

    if(globo_selec == "2001::/32"){

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

  if(pregunta_actual == "6TO4"){
    if(globo_selec == "2002::/16"){
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

  if(pregunta_actual == "Documentacion"){
    if(globo_selec == "2001:db8::/32"){
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

  if(pregunta_actual == "Multicast"){
    if(globo_selec == "ff00::0/12"){
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
    if(globo_selec == "::1"){
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

  if(pregunta_actual == "Default Route"){
    if(globo_selec == "::/0"){
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

  if(pregunta_actual == "Link-Local"){
    if(globo_selec == "fe80::/10"){
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

  if(pregunta_actual == "ULA"){
    if(globo_selec == "fc00::/7"){
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

  if(pregunta_actual == "Well Known DNS64/NAT64"){
    if(globo_selec == "64:ff9b::/96"){
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
    $('.punto').text(contador);
    ShareScore();
  }

};


$(document).ready(function(){

  if(localStorage.getItem("intentar")==1 || localStorage.getItem("intentar")==3 ) 
  {

    $('#levelModal').modal('hide');

    if(localStorage.getItem("intentar")==1){

       DiscoSpeed= 10000;
       PreguntaSpeed= 9000;
       nivel=1;
       Timer();
       Questions();

    }else if(localStorage.getItem("intentar")==3){

      DiscoSpeed= 7000;
      PreguntaSpeed= 5000;
      nivel=3;
      Timer();
      Questions();
    }

    localStorage.removeItem('intentar');

  }else{

    $('#levelModal').modal('show');
    $('#levelModal .modal-body button').click(function(){
      $('#levelModal').modal('hide');
    });

    Level();
  }
 

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
  
  PlayMusic(window.localStorage.getItem('audio'));

})


function ShareScore(){

  var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":2, "TopicId" :2, "levelId" :nivel,"Score":contador};

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

  var src='http://angelgame.acostasite.com/Game/img/disco.png';

  var msj="GAME: FlYLING DISCS  TOPIC:IPv6  NEVEL: "+level+" POINTS: "+contador;

  loginGame(msj,src);
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

  var msj="GAME: FlYLING DISCS  TOPIC:IPv6  NEVEL: "+level+" POINTS: "+contador;

   $(".fb-xfbml-parse-ignore").attr("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fangelgame.acostasite.com%2FGame%2FPublic.php?description="+msj+"&method=1&amp;src=sdkpreparse");
}


function reload(){

  localStorage.setItem('intentar', nivel);

  location.reload();
}