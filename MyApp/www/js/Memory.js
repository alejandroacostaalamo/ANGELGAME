var questionArray = [// Arreglo que concontienes las denominadas preguntas
"FTP",
"SSH",
"Telnet",
"SMTP",
"DNS",
"HTTP",
"TFTP",
"POP3",
"NTP",
"IMAP",
"BGP",
"HTTPS",
"XWindow",
"Echo",
];
var answerArray =[// Arreglo que concontienes las denominadas respuestas
"20/21",
"22",
"23",
"25",
"53",
"80",
"69",
"110",
"123",
"143",
"179",
"443",
"6000",
"7",
 ];

var audioElement = document.createElement('audio');
var arrayOrder=[];
var nivel =0;
var timeLevel = 0;
fin= false;
var punto=0;


$(window).resize(function(){
	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();

	$('.memoria').css({
		'height':WindowH + 'px',
		'width':WindowW + 'px'
	});

})

$(document).ready(function(){

	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();
  $('.fb-share-button').attr('data-href', window.location.href);
  $('<div class="fb-share-button" data-href="" data-layout="button" data-mobile-iframe="true" ></div>').appendTo(".text-center")
	$('.memoria').css({
		'min-height':WindowH + 'px',
		'width':WindowW + 'px'
	});

	if(localStorage.getItem("intentar")==6 || localStorage.getItem("intentar")==8 || localStorage.getItem("intentar")==12 ) 
	{

		if(localStorage.getItem("intentar")==6){

			 nivel= 6;
			 nivel1 = nivel;
			 if ($('#cmbTime').val()==''){
				timeLevel = 40;
				$('#cmbTime').val(timeLevel);
			 }
			 else
				timeLevel = parseInt($('#cmbTime').val());		 
			 
			 StarGame();
			 Timer();

		}else if(localStorage.getItem("intentar")==8){

			 nivel= 8;
			 nivel2 = nivel;
			 if ($('#cmbTime').val()==''){
				timeLevel = 70;
				$('#cmbTime').val(timeLevel);
			 }
			 else
				timeLevel = parseInt($('#cmbTime').val());		 
			 
			 StarGame();
			 Timer();

		}else if(localStorage.getItem("intentar")==12){

			nivel= 12;
			nivel3 = nivel;
			if ($('#cmbTime').val()==''){
				timeLevel = 100;
				$('#cmbTime').val(timeLevel);
			 }
			 else
				timeLevel = parseInt($('#cmbTime').val());		 
			 
			StarGame();
			Timer();
		}

		localStorage.removeItem('intentar');

	}else{

		$('#levelModal').modal('show');
		$('#levelModal .modal-body button').click(function(){
			$('#levelModal').modal('hide');
		});

		Level();
	}
	// console.log(Timer())
	// Verifica si esta activo el sonido
	PlayMusic(window.localStorage.getItem('audio'));
	//console.log(window.localStorage.getItem('audio'));
	// EffectMusic(window.localStorage.getItem('audio'));

    //Pausa el sonido cuando se ejecuta en segundo plano
	// $.winFocus(function(event, play) {

	// 	if (play)
	// 		$(".play").stop().delay('fast', function(e) {
	// 			audioElement.play();
	// 		});
	// 	else {
	// 		audioElement.pause();
	// 	}
	// }, false);


});

//var location = $(location).attr('pathname');

//if (location== index.html) {
	// //Musica de Fondo

function PlayMusic(active){
	window.localStorage.setItem('audio', active);
	//console.log(window.localStorage.setItem('audio', active))
	if (active == "1"){
		audioElement.setAttribute('id', 'sonido');
		audioElement.setAttribute('src', '../../sounds/world2.mp3');
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

	$.winFocus(function(event, play, audio) {
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

	}, false);
}

function EffectMusic(active){
	var Active= window.localStorage.getItem('audio');
	if (Active=="1") {
		$('.play').toggleClass("active");
		//active="1"
	}
	else{
		$('.stop').toggleClass("active");
		//console.log(active +" stop");
	}
	//console.log(active);
	window.localStorage.setItem('#sound-acert', active);
	if (active=="1") {
		$('#sound-acert').each(function(){
			this.play();
		});
	}else{
		active=0;
	}

}





//Determina el Nivel en que se va a iniciar
function Level(){
		//Nivel uno aparecen 12 cartas
	$('#level1').click(function(){
		 nivel= 6;
		 nivel1 = nivel;
		 if ($('#cmbTime').val()==''){
			timeLevel = 40;
			$('#cmbTime').val(timeLevel);
		 }
		 else
			 timeLevel = parseInt($('#cmbTime').val());		 
		 $('#level1').remove();
		 $('#level2').remove();
		 $('#level3').remove();
		 StarGame();
		 Timer();
	});
		//Nivel dos aparecen 16 cartas
	$('#level2').click(function(){
		 nivel= 8;
		 nivel2 = nivel;
		 if ($('#cmbTime').val()==''){
			timeLevel = 70;
			$('#cmbTime').val(timeLevel);
		 }
		 else
			 timeLevel = parseInt($('#cmbTime').val());		 
		 $('#level1').remove();
		 $('#level2').remove();
		 $('#level3').remove();
		 StarGame();
		 Timer();
	});
		//Nivel tres aparecen 24 cartas
	$('#level3').click(function(){
		 nivel= 12;
		 nivel3 = nivel;
		 if ($('#cmbTime').val()==''){
			timeLevel = 100;
			$('#cmbTime').val(timeLevel);
		 }
		 else
			 timeLevel = parseInt($('#cmbTime').val());
		 $('#level1').remove();
		 $('#level2').remove();
		 $('#level3').remove();
		 StarGame();
		 Timer();
	});
}


//Finaliza el juego al completar los puntos por nivel
function EndGame(seconds_left){
  // Timer();
	//Si el nivel seleccionado es uno la cantidad de puntos para ganar sera de 30
	if (nivel== 6){
		if(punto== 30){
      $('#WinModal').modal('show');
      // clearInterval(interval);

      // se suman puntos segun el tiempo que tarde para ganar
      if ($('#contratiempo').text()>30) {
          punto = punto + 100;
        	$('.punto').text(punto);// Imprimer en la cantidad de puntos

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

			fin=true;

			ShareScore();
	  }
	}
	//Si el nivel seleccionado es dos la cantidad de puntos para ganar sera de 40
	if(nivel== 8){
		if(punto== 40){
			$('#WinModal').modal('show');
      // se suman puntos segun el tiempo que tarde para ganar
      if ($('#contratiempo').text()>60) {
          punto = punto + 200;
          $('.punto').text(punto);// Imprimer en la cantidad de puntos

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
			fin=true;

			ShareScore();
			// Timer();
		}
	}
	//Si el nivel seleccionado es tres la cantidad de puntos para ganar sera de 60
	if(nivel== 12){
		if(punto==60){
			$('#WinModal').modal('show');
      // se suman puntos segun el tiempo que tarde para ganar
      if ($('#contratiempo').text()>60) {
          punto = punto + 200;
          $('.punto').text(punto);// Imprimer en la cantidad de puntos


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
			fin=true;
			// Timer();

			ShareScore();
		}
	}
	
}

//Crea los campos donde estaran contenidos las cartas, que se muestran de forma aleatoria en funcion a las preguntas y respuestas
function StarGame(){
	var carts =[];
	var NumCards= nivel;
	GetRandomNumber(NumCards);
	for (var i = 0; i < arrayOrder.length; i++){
		valor =  randomDeHasta(0, arrayOrder.length - 1);
		$('#imagenes').append('<div id="contQuestion-'+ arrayOrder[i] +'" class="caja" onclick="comparar(this.id)"><span class="front-face"><img src="../../img/logo_carta.png"></span><p id="question-'+arrayOrder[i]+'" class="caja2"></p></div>')
		$('#imagenes').append('<div id="contAnswer-'+ arrayOrder[i]+'" class="caja" onclick="comparar(this.id)"><span class="front-face"><img src="../../img/logo_carta.png"><audio id="sound-acert" controls preload="auto"><source src="../../sounds/explodeGood.mp3" controls></source></audio></span><p id="answer-'+arrayOrder[i]+'" class="caja2"></p></div>')
		$('#answer-' + arrayOrder[i]).text(answerArray[arrayOrder[i]]);
		$('#question-' + arrayOrder[i]).text(questionArray[arrayOrder[i]]);
	mezclar();
	}
}

//Conteo regresivo segun el nivel seleccionado
function Timer(){
  //Conteo Regresivo
  var seconds_left = timeLevel;
  // var minutes_left = 0;

  var interval = setInterval(function() {

  document.getElementById('contratiempo').innerHTML =  --seconds_left;


  if (fin==false) {

  	  EndGame(seconds_left);

	  if (seconds_left <= 0){
	    //document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";

	    clearInterval(interval);
	   //Envia mensaje y reinicia la partida
	   //alert("Game Over!");
	   $('#LooseModal').modal('show')
	   //location.reload();

	    ShareScore();

	  }

	}

  // return interval;
  }, 1000);

}

// compartir puntaje del juego en facebook o twitter

function ShareScore(){

	var level=0;

	switch(nivel) {
	    case 6:

			level=1;
			break;
		case 8:

			level=2;

			break;

		case 12:
			        
			level=3;

			break;
	}


	if (localStorage.getItem("UserId")!=null){
		var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":4, "TopicId" :3, "levelId" :level,"Score":punto};

		var uid = RegisterGame(infogame);
	}

	public_FB();


}



//Funcion para generar un rango aleatorio desde un punto a otro
function randomDeHasta(de, hasta){
    return Math.floor(Math.random() * (hasta - de + 1) + de);
}

//Una vez Creados las cajas con sus cartas de preguntas y respuestas, se mezclan para dar una posicion aleatoria
function mezclar() {
    var imagenes = $("#imagenes").children();
    var boxContent = $("#imagenes div:first-child");
    var newOrder = new Array();

    for (i=0; i<imagenes.length; i++) {
        newOrder[i] = $("#"+boxContent.attr("id") +" p").text();
        boxContent = boxContent.next();
    }
    var boxContent = $("#imagenes div:first-child");
    for (z=0; z<imagenes.length; z++) {
        randIndex = randomDeHasta(0, newOrder.length - 1);
        $("#"+boxContent.attr("id") +" p").text(newOrder[randIndex]);
        newOrder.splice(randIndex, 1);
        boxContent = boxContent.next();
    }
}


//Agregar un numero aleatorio al arreglo arrayOrder
function GetRandomNumber(cardsNum){
	//Si el arreglo tiene tantasposiciones como cartas se mostraran no se crea un nuevo numero
	if (arrayOrder.length < cardsNum){
		var value = Math.floor(Math.random()*13);

		//Si el arreglo esta vacio se agrega el numero
		if (arrayOrder.length == 0){
			arrayOrder.push(value);
		}
		else {
			var exist = false;

			//Recorrer el arreglo arrayOrder para validar si el numero aleatorio ya existe en el arreglo
			for (var i = 0; i < arrayOrder.length; i++){
				//Validar si el numero aleatorio existe en el arreglo
				if (arrayOrder[i] == value){
					exist = true;
				}
			}
			//Si el numero no existe se agrega al arreglo
			if (exist == false){
				arrayOrder.push(value);
			}
		}
		//Se llama a la funcion recursiva para obtener un nuevo numero aleatorio
		GetRandomNumber(cardsNum);
	}
}

var firstClick = "";
var firstCard ="";
var pos =0;
var punto= 0;
var contCarts= 0;
//Validacion de las preguntas y respuestas acertadas
function comparar(id){
	contCarts++;
	// console.log(contCarts);
	//Indica la accion al hacer el primer click
	if(contCarts<3){
		if (firstClick==""){
			firstClick= $("#" + id).children()[1].innerText;//Ubicacion de
			firstCard= $("#" + id).children()[1];
			//console.log($("#" + id).find('.front-face'));
			$("#" + id).find('.front-face').addClass('front-flip');
			$(firstCard).addClass("flip");
			isQuestion= true;
			for(i=0; i<answerArray.length; i++) {
				if(answerArray[i]==firstClick){
					isQuestion= false;
					pos= i;
				}
				if (questionArray[i]==firstClick) {
					isQuestion= true;
					pos= i;
				}
			}

		}
		else{//Determina si la primera carta es una Pregunta
			//Abre la segunda carta, la compara con la primera, suma 5 puntos al score y da un efecto de desvanecer las cartas
			secondClick= $("#" + id).children()[1].innerText;
			secondCard = $("#" + id).children()[1];
			if(isQuestion== false){
				//Cartas acertadas
				if(questionArray[pos] == secondClick){
					punto= punto + 5;
					$("#" + id).find('.front-face').addClass('front-flip');
					$(firstCard).addClass("flip");
					$(secondCard).addClass('flip');
					// $('#sound-acert').each(function(){
					// 	this.play();
					// });
					//EffectMusic();
					EffectMusic(window.localStorage.getItem('#sound-acert'));
					setTimeout(function() {

							contCarts=0;
						$("#" + id).addClass("ocultar",{duration:1000});
						$("#" + id).find('.front-face').addClass('front-flip');
						$(firstCard.parentNode).addClass("ocultar",{duration:1000});
								firstClick = "";
								firstCard="";
								EndGame();
					}, 1000);
				}
				else{//Si la pareja de cartas abiertas no es un acierto, se cierran ambas
					if($('#imagenes div').children().hasClass('flip')){
							$(secondCard).addClass('flip');
							$("#" + id).find('.front-face').addClass('front-flip');
					    setTimeout(function() {

							contCarts=0;
					    	$('.front-face').removeClass('front-flip');
					     $('#imagenes div').children().removeClass("flip");
					     	firstClick = "";
							firstCard="";
					    }, 500);

					}
				}
			}
			else{//Determina si la primera carta es una Respuesta
				//Abre la segunda carta, la compara con la primera, suma 5 puntos al score y da un efecto de desvanecer las cartas
				if(answerArray[pos] == secondClick){
					punto= punto + 5;
					$("#" + id).find('.front-face').addClass('front-flip');
					$(firstCard).addClass("flip");
					$(secondCard).addClass('flip');
					// $('#sound-acert').each(function(){
					// 	this.play();
					// });
					//EffectMusic();
					EffectMusic(window.localStorage.getItem('#sound-acert'));
					setTimeout(function() {

							contCarts=0;
						$("#" + id).addClass("ocultar",{duration:1000});
						$(firstCard.parentNode).addClass("ocultar",{duration:1000});
						firstClick = "";
						firstCard="";
						EndGame();
					}, 1000);
				}
				else{//Si la pareja de cartas abiertas no es un acierto, se cierran ambas
					if($('#imagenes div').children().hasClass('flip')){
							$("#" + id).find('.front-face').addClass('front-flip');
							$(secondCard).addClass("flip");
					    setTimeout(function() {

							contCarts=0;
					    	$('.front-face').removeClass('front-flip');
					    	$('#imagenes div').children().removeClass("flip");
					    	firstClick = "";
							firstCard="";
					    }, 500);

					}
				}
			}
			$('#punto').text(punto);// Imprimer en la cantidad de puntos
			$('.punto').text(punto);// Imprimer en la cantidad de puntos
		 	pos =0;
		}
	}
}



function public_TW(){
	console.log("entro en twitter");
	var level='';

	switch(nivel) {
	    case 6:

			level='EASY';
			break;
		case 8:

			level='MEDIUM';

			break;

		case 12:
			        
			level='HARD';

			break;
	}

	var msj="GAME: MEMORIA  TOPIC:IPv4  NEVEL: "+level+" POINTS: "+punto;

	var src='http://angelgame.acostasite.com/Game/img/memory_img.png';

	loginGame(msj,src);

}


function public_FB(){
	var level='';

	switch(nivel) {
	    case 6:

			level='EASY';
			break;
		case 8:

			level='MEDIUM';

			break;

		case 12:
			        
			level='HARD';

			break;
	}

	var msj="GAME: MEMORIA  TOPIC:IPv4  NEVEL: "+level+" POINTS: "+punto;

	$(".fb-xfbml-parse-ignore").attr("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fangelgame.acostasite.com%2FGame%2FPublic.php?description="+msj+"&method=1&amp;src=sdkpreparse");
}

function reload(){

	localStorage.setItem('intentar', nivel);

	location.reload();
}

var dataInstag;
function public_IG(){
	console.log("entro en instagram");
	var level='';
	switch(nivel) {
	case 6:

		level='EASY';
		break;
	case 8:

		level='MEDIUM';

		break;

	case 12:
				
		level='HARD';

		break;
}
	var msj="GAME: MEMORIA  TOPIC:IPv4  NEVEL: "+level+" POINTS: "+punto;
	/*window.plugins.socialsharing.shareViaInstagram(
		'Message via Instagram', 
		'http://angelgame.acostasite.com/images/icon/icon.png','http://angelgame.acostasite.com'
	  );	*/
	 // var assetLocalIdentifier = "../../img/congratulations.png";
	 Instagram.isInstalled(function (err, installed) {
		if (installed) {
			console.log("Instagram is"+ installed); // installed app version on Android
			navigator.screenshot.save(function(error,response){
				if(error){
					console.error(error);
					return;
				}
				
				// Something like: /storage/emulated/0/Pictures/screenshot_1477924039236.jpg
				console.log(response.filePath);
		
				/*Instagram.shareAsset(function(result) {
					alert('Instagram.shareAsset success: ' + result);
				}, function(e) {
					alert('Instagram.shareAsset error: ' + e);
				}, response.filePath);*/
				getBase64FromImageUrl(response.filePath, msj);
				
			});
		} else {
			alert("Instagram no esta instalado");
		}
	});

	
	 

/*	module.controller('ThisCtrl', function($scope, $cordovaInstagram) {
		// Get image from camera, base64 is good. See the
		// $cordovaCamera docs for more info
	  
		$cordovaInstagram.share($scope.image.data, $scope.image.caption).then(function() {
		  // Worked
		}, function(err) {
		  // Didn't work
		});
	  })*/
  }

  function getBase64FromImageUrl(url, msj) {
	var img = new Image();

	img.setAttribute('crossOrigin', 'anonymous');

	img.onload = function () {
		var canvas = document.createElement("canvas");
		canvas.width =this.width;
		canvas.height =this.height;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(this, 0, 0);

		var dataURL = canvas.toDataURL("image/png");
		dataInstag = dataURL/*.replace(/^data:image\/(png|jpg);base64,/, "")*/;
		
		Instagram.share(dataInstag, msj, function (err) {
			if (err) {
				console.log("Not shared");
			} else {
				console.log("shared");
			}
		});
	};

	img.src = url;
}