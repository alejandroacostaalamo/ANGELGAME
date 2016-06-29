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

})

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
	if(localStorage.getItem("fbAccessToken") != null){
		$('#InfoModal').modal('hide');
		// if (localStorage.getItem('sesionIni')== 'false') {
		// 	$('#UserModal').modal('show', getInfo());
		// }
		$('.GetInfo, .Logout').show();
		$('.Login').hide();
		// $('.BtRegister, .Login').hide();
	}
	else{
		// $('.BtRegister, .Login').show();
		$('.Login').show();
		$('.GetInfo, .Logout').hide();
		$('#InfoModal').modal('show');
	}
}
