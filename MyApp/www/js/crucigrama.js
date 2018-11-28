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
var dataInstag;
function public_IG(){


	var msj="GAME: OUTPUT INTERPRETER TOPIC:IPv4  POINTS: ";
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