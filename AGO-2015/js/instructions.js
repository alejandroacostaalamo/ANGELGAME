game.instructionScreen = {
	posx: 0,
	posy: 0,
	width: 0,
	height: 0,
	sprite: 0,
	draw: function(){
		game.ctx.drawImage(game.imageManager[this.sprite],0,0,this.width,this.height);
	},
	update: function(){
		this.width = game.canvas.width;
		this.height = game.canvas.height;
	},
	touch: function(){
		if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[this.posx,this.posy,this.width,this.height])){
			game.instruction_screen = false;
			game.startGame();
		}
	}
}

//CONFIGS

game.activateinstructionscreen = function(){
	if(game.instructions){
		game.instructions = false;
		$("#insOff").attr("style","top:0px;");
		$("#insOn").attr("style","opacity:0;");
	}else{
		game.instructions = true;
		$("#insOff").attr("style","top:60px;");
		$("#insOn").attr("style","opacity:0.8;");
	}
}

game.activatesound = function(){
	if(game.sound){
		game.sound = false;
		$("#sndOff").attr("style","top:0px;");
		$("#sndOn").attr("style","opacity:0;");
		localStorage.removeItem("sound");
		localStorage.setItem("sound", "false");
	}else{
		game.sound = true;
		$("#sndOff").attr("style","top:60px;");
		$("#sndOn").attr("style","opacity:0.8;");
		localStorage.removeItem("sound");
		localStorage.setItem("sound", "true");
	}
}

game.checkSound = function(){
	var SoundSet = window.localStorage.getItem("sound");

	if(SoundSet == "false"){
    	game.sound = false;
		$("#sndOff").attr("style","top:0px;");
		$("#sndOn").attr("style","opacity:0;");
	}else{
    	game.sound = true;
		$("#sndOff").attr("style","top:60px;");
		$("#sndOn").attr("style","opacity:0.8;");
	}
}

game.activatemusic = function(){
	if(game.music){
    	game.soundArray[4].pause();
		game.music = false;
		$("#musOff").attr("style","top:0px;");
		$("#musOn").attr("style","opacity:0;");
		localStorage.removeItem("music");
		localStorage.setItem("music", "false");
	}else{
    	game.soundArray[4].play();
		game.music = true;
		$("#musOff").attr("style","top:60px;");
		$("#musOn").attr("style","opacity:0.8;");
		localStorage.removeItem("music");
		localStorage.setItem("music", "true");
	}
}

game.checkMusic = function(){
	var MusicSet = window.localStorage.getItem("music");

	if(MusicSet == "false"){
    	game.soundArray[4].pause();
		game.music = false;
		$("#musOff").attr("style","top:0px;");
		$("#musOn").attr("style","opacity:0;");
	}else{
    	game.soundArray[4].play();
		game.music = true;
		$("#musOff").attr("style","top:60px;");
		$("#musOn").attr("style","opacity:0.8;");
	}
}