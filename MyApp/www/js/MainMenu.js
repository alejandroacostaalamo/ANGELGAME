var audioElement = document.createElement('audio');
$(document).ready(function(){



	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();

	var IndexH = $('.index').innerHeight();
	var IndexW = $('.index').innerWidth();


	sesion();


	$('.index').css({
		'height':WindowH + 'px',
		'width':WindowW + 'px'
	})

	$('.menu').css({
		'top': WindowH / 5 + 'px'
	})
	if(WindowH < 640){
		$('.menu').css({
			//'top': WindowH / 8 + 'px'
			'top': 'auto'
		})
	}


	if(WindowW > 480){
		$('.logo').show({ effect: "explode", duration: 2000, pieces:90 });
	}
	else{
		$('.logo').show(2000);
	}
	$('.menu .circulo').fadeIn(2000);

	// $('.menu .circulo img').css({
	// 	'transform':'rotateZ(0deg)'
	// });

	setTimeout(function(){
		$('.menu .opciones > div').animate({
			opacity : 1
		},700)
	},2000)

	$("#accordion > li > div h3").click(function(){

		if(false == $(this).parent().next().is(':visible')) {
		    $('#accordion ul').slideUp(0);
		    $('.head-title p').hide(0)
		}
		$(this).parent().next().slideToggle(0);
	});

	$('.sound span').click(function(){
		if($('.sound span').hasClass('active')){
			$('.sound span').removeClass('active')
		}
		$(this).addClass('active');

	})
	$('.music span').click(function(){
		if($('.music span').hasClass('active')){
			$('.music span').removeClass('active')
		}
		$(this).addClass('active');

	})

	PlayMusic(window.localStorage.getItem('audio'));
	EffectMusic(window.localStorage.getItem('audio'));

	// $.winFocus(function(event, play, audio) {

	// 	if (play)
	// 		$(".play").stop().delay('fast', function(e) {
	// 			audioElement.play();
	// 		});
	// 	else {
	// 		audioElement.pause();
	// 	}
	// }, false);

	Authentication();

});

$(window).resize(function(){
	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();

	var IndexH = $('.index').innerHeight();
	var IndexW = $('.index').innerWidth();


	$('.index').css({
		'height':WindowH + 'px',
		'width':WindowW + 'px'
	})

	$('.menu').css({
		'top': WindowH / 5 + 'px'
	})
	if(WindowH < 640){
		$('.menu').css({
			//'top': WindowH / 8 + 'px'
			'top': 'auto'
		})
	}
})



//Sonido del juego
function PlayMusic(active){
	var Active= window.localStorage.getItem('audio');
	if (Active=="1") {
		$('.play').toggleClass("active");
		//active="1"
	}
	else{
		$('.stop').toggleClass("active");
		//console.log(active +" stop");
	}

	window.localStorage.setItem('audio', active);
	if (active == "1"){
		audioElement.setAttribute('id', 'sonido');
		audioElement.setAttribute('src', 'sounds/intro.mp3');
    	audioElement.setAttribute('autoplay', 'autoplay');
    	audioElement.addEventListener("ended", function() {
	        this.currentTime = 0;
	        this.play();
	    }, false);
	}
	else {
		audioElement.pause();
		active=0;
		//console.log(active +" localStorage");
	}

	$.winFocus(function(event, play, audio) {
		if (active=="1"){
			//console.log(active);
			if (play){
				$(".play").stop().delay('fast', function(e) {
					audioElement.play();
					//active="1";
				});

		}else if (active=="1"){
				audioElement.pause();
				//active=0;
				//console.log(active +" igual");
			}
		}

		if (active=="0"){
			//console.log(active);
			if (play){
				$(".play").stop().delay('fast', function(e) {
					audioElement.play();
					//active="0";
				});

		}else if (active=="0"){
				audioElement.pause();
				//active=0;
				//console.log(active +" diferente");
			}
		}



	}, false);
}

function EffectMusic(active){
	var Active= window.localStorage.getItem('#sound-acert');
	if (Active=="1") {
		$('.on').toggleClass("active");
		//active="1"
	}
	else{
		$('.off').toggleClass("active");
		//console.log(active +" stop");
		Active=0;
	}

	window.localStorage.setItem('#sound-acert', active);
	if (active=="1") {
		$('#sound-acert').each(function(){
		  this.play();
		});
	}else{
		active=0;
	}

}

function sesion(){

	// Si ya inició sesión


	if(localStorage.getItem("UserId") != null){
		$('#InfoModal').modal('hide');
		// if (localStorage.getItem('sesionIni')== 'false') {
		// 	$('#UserModal').modal('show', getInfo());
		// }
		$('.GetInfo, .Logout').show();
		$('.Login').hide();
		// $('.BtRegister, .Login').hide();
	}
	else if(localStorage.getItem("close")==1){

		$('#InfoModal').modal('hide');
		$('.GetInfo, .Logout').hide();
		$('.Login').show();

	}else{
		// $('.BtRegister, .Login').show();
		$('.Login').show();
		$('.GetInfo, .Logout').hide();
		$('#InfoModal').modal('show');
	}
}

$('#close').click(function(){
  
  localStorage.setItem('close', 1);

});


function loguear(){

	$('#settingModal').modal('hide');

    $('#InfoModal').modal('show');

    $('#InfoModal').modal('show');
}

function ginfo(){

	$('#settingModal').modal('hide');

	$('#UserModal').modal('show');
  	getInfo();
}



function Authentication(){

	$(".authentication_face").remove();

	$(".authentication_twitter").remove();

	$(".authentication_logout").remove();


	if(localStorage.getItem("method")==1){

		var opcion2=document.createElement("input");

		opcion2.setAttribute("type","button");

		opcion2.setAttribute("class","authentication_logout");

		if(localStorage.getItem("language")==1){

			opcion2.setAttribute("value","cerrar sesión");

		}else if(localStorage.getItem("language")==2){

			opcion2.setAttribute("value","Logout");

		}else if(localStorage.getItem("language")==3){

			opcion2.setAttribute("value","sair");
		}

		opcion2.setAttribute("onclick","logout()");

		document.getElementById("setting Authentication").appendChild(opcion2);

		var opcion1=document.createElement("input");

		opcion1.setAttribute("type","button");

		opcion1.setAttribute("class","authentication_face");

		opcion1.setAttribute("value",".");

		opcion1.setAttribute("onclick","ginfo()");

		document.getElementById("setting Authentication").appendChild(opcion1);

	}
	else if(localStorage.getItem("method")==2){

		var opcion1=document.createElement("input");

		opcion1.setAttribute("type","button");

		opcion1.setAttribute("class","authentication_logout");

		if(localStorage.getItem("language")==1){

			opcion1.setAttribute("value","cerrar sesión");

		}else if(localStorage.getItem("language")==2){

			opcion1.setAttribute("value","Logout");

		}else if(localStorage.getItem("language")==3){

			opcion1.setAttribute("value","sair");
		}

		opcion1.setAttribute("onclick","logout()");

		document.getElementById("setting Authentication").appendChild(opcion1);

		var opcion2=document.createElement("input");

		opcion2.setAttribute("type","button");

		opcion2.setAttribute("value",".");

		opcion2.setAttribute("onclick","ginfo()");

		opcion2.setAttribute("class","authentication_twitter");

		document.getElementById("setting Authentication").appendChild(opcion2);

	}else{

		var opcion1=document.createElement("input");

		opcion1.setAttribute("type","button");

		opcion1.setAttribute("class","authentication_face");

		opcion1.setAttribute("onclick","login()");

		document.getElementById("setting Authentication").appendChild(opcion1);

		var opcion2=document.createElement("input");

		opcion2.setAttribute("type","button");

		opcion2.setAttribute("class","authentication_twitter");

		opcion2.setAttribute("onclick","loginTwitter()");

		document.getElementById("setting Authentication").appendChild(opcion2);

		$('.authentication_twitter').toggleClass("inactive");

		$('.authentication_face').toggleClass("inactive");
	}
}




