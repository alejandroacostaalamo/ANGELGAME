game.totalImages = 19;
game.loadedItems = 0;

game.loadImages = function(){
	for(var i=0;i<game.totalImages;i++){
		game.imageManager[i] = new Image();
	}
	game.imageManager[0].src = "img/exit_button.png";
	game.imageManager[0].onload = game.refreshloadingscreen;
	game.imageManager[1].src = "img/play_again_button.png";
	game.imageManager[1].onload = game.refreshloadingscreen;
	game.imageManager[2].src = 'img/right_arrow.png';
	game.imageManager[2].onload = game.refreshloadingscreen;
	game.imageManager[3].src = 'img/left_arrow.png';
	game.imageManager[3].onload = game.refreshloadingscreen;
	game.imageManager[4].src = 'img/pink.png';
	game.imageManager[4].onload = game.refreshloadingscreen;
	game.imageManager[5].src = 'img/green.png';
	game.imageManager[5].onload = game.refreshloadingscreen;
	game.imageManager[6].src = 'img/yellow.png';
	game.imageManager[6].onload = game.refreshloadingscreen;
	game.imageManager[7].src = 'img/blue.png';
	game.imageManager[7].onload = game.refreshloadingscreen;
	game.imageManager[8].src = 'img/light_green.png';
	game.imageManager[8].onload = game.refreshloadingscreen;
	game.imageManager[9].src = 'img/light_purple.png';
	game.imageManager[9].onload = game.refreshloadingscreen;
	game.imageManager[10].src = 'img/red.png';
	game.imageManager[10].onload = game.refreshloadingscreen;
	game.imageManager[11].src = 'img/fondo_ip.jpg';
	game.imageManager[11].onload = game.refreshloadingscreen;
	game.imageManager[12].src = 'img/exit_button_ingame.png';
	game.imageManager[12].onload = game.refreshloadingscreen;
	game.imageManager[13].src = 'img/fondo_mem.png';
	game.imageManager[13].onload = game.refreshloadingscreen;
	game.imageManager[14].src = 'img/globo.png';
	game.imageManager[14].onload = game.refreshloadingscreen;
	game.imageManager[15].src = 'img/globo2.png';
	game.imageManager[15].onload = game.refreshloadingscreen;
	game.imageManager[16].src = 'img/globo3.png';
	game.imageManager[16].onload = game.refreshloadingscreen;
	game.imageManager[17].src = 'img/globo4.png';
	game.imageManager[17].onload = game.refreshloadingscreen;
	game.imageManager[18].src = 'img/fondo_drag.jpg';
	game.imageManager[18].onload = game.refreshloadingscreen;
}

game.loadSounds = function(){
	game.soundArray = [];
	game.soundArray[0] = $("#explode")[0];
	game.soundArray[1] = $("#world1")[0];
	game.soundArray[2] = $("#world2")[0];
	game.soundArray[3] = $("#world3")[0];
	game.soundArray[4] = $("#intro")[0];
	game.soundArray[5] = $("#explodeGood")[0];
	game.soundArray[6] = $("#explodeBad")[0];
}

game.loadAll = function(){
	game.loadSounds();
	game.loadImages();
	window.localStorage.getItem("music");
	window.localStorage.getItem("sound");
	game.checkMusic();
	game.checkSound();
}

game.refreshloadingscreen = function(){
	game.loadedItems++;
}

game.drawloadingscreen = function(){
	game.ctx.drawImage(game.loadingBackground,0,0,game.canvas.width,game.canvas.height);
	game.ctx.font = game.canvas.width/14+"px Metriqs";
	game.ctx.fillStyle = '#000000';
	if (lang == "es"){
		game.ctx.fillText('Cargando: '+(parseInt((game.loadedItems*100)/(game.totalImages+game.soundArray.length)))+"%",(game.canvas.width-(game.ctx.measureText("Cargando: "+(parseInt((game.loadedItems*100)/(game.totalImages+game.soundArray.length)))+"%")).width)/2,game.canvas.height/2);
	}
	else{
		game.ctx.fillText('Loading: '+(parseInt((game.loadedItems*100)/(game.totalImages+game.soundArray.length)))+"%",(game.canvas.width-(game.ctx.measureText("Loading: "+(parseInt((game.loadedItems*100)/(game.totalImages+game.soundArray.length)))+"%")).width)/2,game.canvas.height/2);	
	}
	
	if(game.loadedItems == (game.totalImages+game.soundArray.length)){
		game.isLoading = false;
		game.mainVisibility();
	}
}

game.loading = function(){
	game.canvasVisibility();
	game.loadingBackground = new Image();
	game.loadingBackground.src = 'img/bgmain.jpg';
	game.loadingBackground.onload = game.loadAll;
}