var audioElement = document.createElement('audio');
$(document).ready(function(){
	$('#levelModal').modal('show');

	$('#levelModal button').click(function(){
		// Set time
		if ($('#cmbTime').val()==''){
			timeLevel = 500;
			$('#cmbTime').val(timeLevel);
		}
		 else
			timeLevel = parseInt($('#cmbTime').val());
		
		// Guardar
		localStorage.setItem("timeCrossWord",timeLevel);
		
		// Hide
		$('#levelModal').modal('hide');
	})
	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();

	$('.crucigrama').css({
		'height':WindowH + 'px',
		'width':WindowW + 'px'
	});
	//Control de sonido
    PlayMusic(window.localStorage.getItem('audio'));

 //    //Pausa el sonido cuando se ejecuta en segundo plano
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
$(window).resize(function(){
	var WindowW = $(window).innerWidth();
	var WindowH = $(window).innerHeight();

	$('.crucigrama').css({
		'height':WindowH + 'px',
		'width':WindowW + 'px'
	});
	
})


//Activar el sonido
function PlayMusic(active){
	window.localStorage.setItem('audio', active);

	if (active == "1"){
		audioElement.setAttribute('id', 'sonido');
		audioElement.setAttribute('src', '../../sounds/world3.mp3');
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
			console.log(active);
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