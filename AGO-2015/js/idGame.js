//COSAS QUE FALTAN POR HACER:
//Que el popup message se desvanezca para darle mas estilo.
//Que aparezcan números (Sprites) cuando pinches un globo que te indiquen si ganaste o perdiste puntos.
//Animaciones de explotar los globos.
//Animación de la cuerda que amarra el globo.
//Ponerle sonido.
//Poner que salga cada cierto tiempo un reloj o un globo especial con la direccion broadcast o algo así que te de bonus o mas tiempo.

game.idGame = {
	balloonArray: new Array(),
	totalBalloons: 0, //Difficulty Setting,
	balloon_width: 0,
	balloon_height: 0,
	score: 0,
	type: 0,
	time: 0,
	name: "",
	totalTypes: "", //Starts at 0;
	typeMsg: "",
	typeString: "",
	changeIntervals: 0, //Difficulty setting
	extraVel: 0, //Another difficulty setting
}

game.idGame.statusBar = {
	width: 0,
	height: 0,
	posx: 0,
	posy: 0,
	textSize: 0,
	drawText: function(text,value,posx,posy){
		game.ctx.font = 20+"px Metriqs";
      	game.ctx.fillStyle = '#000000';
      	game.ctx.fillText(text+value,posx,posy);
	},
	draw: function(){
		game.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		game.ctx.fillRect(0,game.canvas.height-this.height,this.width,this.height);
		// game.ctx.measureText().width
		// game.canvas.width/3 + (game.idGame.time,game.canvas.width/2.6)
		// var x = ;
		var score;
		var time;
		if (lang == "es"){
			score = this.drawText("Puntos: ",game.idGame.score,((game.canvas.width-(game.canvas.width/2))/4)-(game.ctx.measureText("Puntos: "+game.idGame.score).width/2),game.canvas.height-game.idGame.statusBar.height/3);
			time = this.drawText("Tiempo: ",game.idGame.time,(game.canvas.width - (game.canvas.width/3.35)),game.canvas.height-game.idGame.statusBar.height/3);
		}else{
			score = this.drawText("Score: ",game.idGame.score,((game.canvas.width-(game.canvas.width/2))/4)-(game.ctx.measureText("Score: "+game.idGame.score).width/2),game.canvas.height-game.idGame.statusBar.height/3);
			time = this.drawText("Time: ",game.idGame.time,(game.canvas.width - (game.canvas.width/3.35)),game.canvas.height-game.idGame.statusBar.height/3);
		}
		var type = this.drawText("",game.idGame.typeString,game.canvas.width/2-(game.ctx.measureText(""+game.idGame.typeString).width/2),game.canvas.height-game.idGame.statusBar.height/3);
	},
	resize: function(){
		this.width = game.canvas.width;
		this.height = game.canvas.height/6;
		this.textSize = game.canvas.width/25;
	}
}

//Constructor function (Balloon Class)
game.idGame.ipBalloon = function(t,x,y,vy,d,img){
	this.posx = x;
	this.posy = y;
	this.width = 100;
	this.height = 180;
	this.vely = vy;
	this.type = t;
	this.sprite = [];
	this.direction = d;
	this.image = img;
	this.draw = function(){
		game.ctx.drawImage(game.imageManager[this.image],this.posx,this.posy,this.width,this.height);
		game.ctx.font = 14+"px Metriq";
      	game.ctx.fillStyle = 'black';
		game.ctx.fillText(this.direction,this.posx+((this.width-(game.ctx.measureText(this.direction).width))/2),this.posy+this.height/2,this.width,this.height);
	}
	this.goUp = function(){
		this.posy -= this.vely;
	}
}

game.idGame.drawBackground = function(){
	game.ctx.drawImage(game.imageManager[11],0,0,1024,800);
}

game.idGame.drawPopUp = function(){
	game.ctx.font = game.canvas.width/8+"px Metriqs";
  	game.ctx.fillStyle = '#FFFFFF';
	game.ctx.fillText(game.idGame.typeMsg,((game.canvas.width/2)-(game.ctx.measureText(game.idGame.typeMsg).width/2)),game.canvas.height/5);
}

game.idGame.draw = function(){
	game.idGame.drawBackground();
	for(var i=0;i<game.idGame.balloonArray.length;i++){
		if(game.idGame.balloonArray[i]!=null){
			game.idGame.balloonArray[i].draw();
		}
	}
	if(!game.game_over_screen){
		game.idGame.statusBar.draw();
	}
	game.idGame.drawPopUp();
	if(!game.game_over_screen){
		game.idGame.exitButton.draw();
	}
}

game.idGame.update = function(){
	game.idGame.generateBalloons();
	game.idGame.balloonDestructor();
	game.idGame.statusBar.resize();
	game.idGame.exitButton.update();
	if(!game.game_over_screen){game.idGame.moveBalloons();}
	if(game.idGame.time <= 0){game.idGame.timeOver();}
}

game.idGame.startGame = function(gameName){
	if(game.difficulty == "easy"){
		game.idGame.extraVel = 0;
		game.idGame.totalBalloons = 7;
		game.idGame.changeIntervals = 0;
	}else if(game.difficulty == "medium"){
		game.idGame.extraVel = 0.5;
		game.idGame.totalBalloons = 10;
		game.idGame.changeIntervals = 2500;
	}if(game.difficulty == "hard"){
		game.idGame.extraVel = 1;
		game.idGame.totalBalloons = 13;
		game.idGame.changeIntervals = 5000;
	}
	game.idGame.score = 0;
	game.idGame.name = gameName;
	game.idGame.time = 60;
	game.idGame.randomType();
	game.idGame.cleanBalloonArray();
	game.idGame.typeInterval = setInterval(function(){
		game.idGame.randomType();
		game.idGame.typeMsg = game.idGame.typeString;
		setTimeout(function(){
			game.idGame.typeMsg = " ";
		},1000);
	},game.random(10000-game.idGame.changeIntervals,20000-game.idGame.changeIntervals));
	game.idGame.gameInterval = setInterval(function(){
		game.idGame.time--;
	},1000);
}

game.idGame.timeOver = function(){
	clearInterval(game.idGame.typeInterval);
	clearInterval(game.idGame.gameInterval);
	if (lang == "es"){
		game.gameOverScreen.initialize("TIEMPO AGOTADO!",game.idGame.name);
	}
	else{
		game.gameOverScreen.initialize("TIME'S OVER!",game.idGame.name);
	}
	
	game.game_over_screen = true;
}

game.idGame.cleanBalloonArray = function(){
	if(game.idGame.balloonArray.length>0){
		for(var i=0;i<game.idGame.totalBalloons;i++){
			if(game.idGame.balloonArray[i]!=null){
				delete game.idGame.balloonArray[i];
			}
		}
	}
}

game.idGame.gameOver = function(){
	game.idGame.cleanBalloonArray();
	game.id_start = false;
	game.mainVisibility();
	game.soundArray[1].pause();
	// game.game_over_screen = false;
}

game.idGame.randomType = function(){
	if (game.idGame.name == "id4"){
	game.idGame.totalTypes = 3;
	game.idGame.type = game.random(0,game.idGame.totalTypes);
		if(game.idGame.type == 0){
			game.idGame.typeString = "Loopback";
		}else if(game.idGame.type == 1){
			game.idGame.typeString = "Ruta por defecto";
		}else if(game.idGame.type == 2){
			game.idGame.typeString = "Multicast";
		}else if(game.idGame.type == 3){
			game.idGame.typeString = "Direccion Privada";
		}
	}
	else {
		game.idGame.totalTypes = 8;
		game.idGame.type = game.random(0,game.idGame.totalTypes);
		if(game.idGame.type == 0){
			game.idGame.typeString = "TEREDO";
		}else if(game.idGame.type == 1){
			game.idGame.typeString = "6TO4";
		}else if(game.idGame.type == 2){
			game.idGame.typeString = "DOCUMENTACION";
		}else if(game.idGame.type == 3){
			game.idGame.typeString = "MULTICAST";
		}else if(game.idGame.type == 4){
			game.idGame.typeString = "Loopback";
		}else if(game.idGame.type == 5){
			game.idGame.typeString = "Default route";
		}else if(game.idGame.type == 6){
			game.idGame.typeString = "Link-Local";
		}else if(game.idGame.type == 7){
			game.idGame.typeString = "ULA";
		}else if(game.idGame.type == 8){
			game.idGame.typeString = "DNS64/NAT64";
		}
	}
}

game.idGame.generateBalloons = function(){
	for(var i=0;i<game.idGame.totalBalloons;i++){
		if(game.idGame.balloonArray[i]==null){
			var image = game.random(14,17);
			var type = game.random(0,game.idGame.totalTypes);
			var posx = game.random((game.canvas.height/15),game.width-(game.canvas.width*10/79));
			var posy = game.height+game.idGame.balloon_height;
			var vely = (game.random(5,30)/10);
			vely += game.idGame.extraVel;
			var direction = "";
			
			if (game.idGame.name == "id4"){
				if(type == 0){
					direction = "127.0.0.1";
				}else if(type == 1){
					direction = "0.0.0.0";
				}else if(type == 2){
					direction = game.random(224,239) + "." + game.random(0,255) + "." + game.random(0,255) + "." + game.random(0,255);
				}else if(type == 3){
					direcPrivate = game.random(0, 2);
					if (direcPrivate == 0){
						direction = "10.0.0.0/8";
					}else if (direcPrivate == 1){
						direction = "172.16.0.0/12";
					}else{
						direction = "192.168.0.0/16";
					}
				}
			}
			else{
				if(type == 0){
					direction = game.random(2001,2001) + "::/" + game.random(32,32);
				}else if(type == 1){
					direction = game.random(2002,2002) + "::/" + game.random(16,16);
				}else if(type == 2){
					direction = game.random(2001,2001) + ":db" + game.random(8,8) + "::/" + game.random(32,32);
				}else if(type == 3){
					direction = "ff" + game.random(00,00) + "::0/" + game.random(12,12);
				}else if(type == 4){
					direction = "::" + game.random(1,1);
				}else if(type == 5){
					direction = "::/" + game.random(0,0);
				}else if(type == 6){
					direction = "fe" + game.random(80,80) + "::/" + game.random(10,10);
				}else if(type == 7){
					direction = "fc" + game.random(00,00) + "::/" + game.random(7,7);
				}else if(type == 8){
					direction = game.random(64,64) + ":ff" + game.random(9,9) + "b::/" + game.random(96,96);
				}
			}
			game.idGame.balloonArray[i] = new game.idGame.ipBalloon(type,posx,posy,vely,direction,image);
		}
	}
}

game.idGame.balloonDestructor = function(){
	for(var i=0;i<game.idGame.balloonArray.length;i++){
		if(game.idGame.balloonArray[i]!=null){
			if(game.idGame.balloonArray[i].posy + game.idGame.balloonArray[i].height < 0){
				delete game.idGame.balloonArray[i];
			}
		}
	}
}

game.idGame.moveBalloons = function(){
	for(var i=0;i<game.idGame.balloonArray.length;i++){
		if(game.idGame.balloonArray[i]!=null){
			game.idGame.balloonArray[i].goUp();
		}
	}
}

game.idGame.touchBalloon = function(){
	for(var i=0;i<game.idGame.balloonArray.length;i++){
		if(game.idGame.balloonArray[i]!=null){
			if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.idGame.balloonArray[i].posx,game.idGame.balloonArray[i].posy,game.idGame.balloonArray[i].width,game.idGame.balloonArray[i].height])){
				if(game.idGame.balloonArray[i].type == game.idGame.type){
					game.idGame.score+=10;
					game.soundManager(5,false,"sound");
				}else{
					game.soundManager(6,false,"sound");
					if(game.idGame.score>0){
						game.idGame.score-=5;
					}
				}
				game.soundManager(0,false,"sound");
				delete game.idGame.balloonArray[i];
			}
		}
	}
}

game.idGame.exitButton = {
	posx: 5,
	posy: 5,
	width: 0,
	height: 0,
	sprite: 12,
	draw: function(){
		game.ctx.drawImage(game.imageManager[this.sprite],this.posx,this.posy,this.width,this.height);
	},
	update: function(){
		this.width = game.canvas.height/15;
		this.height = game.canvas.height/15;
	}
}

game.idGame.exitButton.touch = function(){
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[this.posx,this.posy,this.width,this.height])){
    	game.soundArray[1].pause();
		clearInterval(game.idGame.typeInterval);
		clearInterval(game.idGame.gameInterval);
		game.idGame.cleanBalloonArray();
		game.id_start = false;
		game.mainVisibility();
	}
}
