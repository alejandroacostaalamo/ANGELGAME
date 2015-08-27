game.gameOverScreen = {
	posx: 0,
	posy: 0,
	width: 0,
	height: 0,
	titleText: "",
	gameName: "",
	buttons: []
}

game.gameOverScreen.drawText = function(text,posx,posy){
  	game.ctx.fillText(text,posx,posy);
}

game.gameOverScreen.button = function(img){
	this.posx = 0;
	this.posy = 0;
	this.width = 0;
	this.height = 0;
	this.image = img;
	this.draw = function(){
		game.ctx.drawImage(game.imageManager[this.image],this.posx,this.posy,this.width,this.height);
		game.ctx.fillStyle = '#000000';
		game.ctx.font = 18+"px Metriqs";
		
		var w = game.canvas.width*0.25;
		
		if (lang == "es"){
			game.gameOverScreen.drawText(
				"JUEGAR DE NUEVO",
				game.gameOverScreen.posx+((game.gameOverScreen.width)-(w*2.5)),
				game.gameOverScreen.posy+(game.gameOverScreen.height*0.88)
			);

			game.gameOverScreen.drawText(
				"SALIR",
				game.gameOverScreen.posx+((((game.gameOverScreen.width)-(w*1.5))/3)*2)+w,
				game.gameOverScreen.posy+(game.gameOverScreen.height*0.88)
			);
		}
		else{
			game.gameOverScreen.drawText(
				"PLAY AGAIN",
				game.gameOverScreen.posx+((game.gameOverScreen.width)-(w*2.5)),
				game.gameOverScreen.posy+(game.gameOverScreen.height*0.88)
			);

			game.gameOverScreen.drawText(
				"EXIT",
				game.gameOverScreen.posx+((((game.gameOverScreen.width)-(w*1.5))/3)*2)+w,
				game.gameOverScreen.posy+(game.gameOverScreen.height*0.88)
			);
		}
	},
	this.update = function(){
		var w = game.canvas.width*0.25;
		game.gameOverScreen.buttons[0].width = game.gameOverScreen.buttons[1].width = w;
		game.gameOverScreen.buttons[0].height = game.gameOverScreen.buttons[1].height = game.canvas.height*0.10;
		game.gameOverScreen.buttons[0].posx = game.gameOverScreen.posx+(((game.gameOverScreen.width)-(w*2))/3);
		game.gameOverScreen.buttons[1].posx = game.gameOverScreen.posx+((((game.gameOverScreen.width)-(w*2))/3)*2)+w;
		game.gameOverScreen.buttons[0].posy = game.gameOverScreen.buttons[1].posy = game.gameOverScreen.posy+(game.gameOverScreen.height*0.75);
	}
}

game.gameOverScreen.initializeButtons = function(){
	if(game.gameOverScreen.buttons.length <= 0){
		game.gameOverScreen.buttons[0] = new game.gameOverScreen.button(1);
		game.gameOverScreen.buttons[1] = new game.gameOverScreen.button(0);
	}
	for(var i=0;i<game.gameOverScreen.buttons.length;i++){
		game.gameOverScreen.buttons[i].update();
	}
}

game.gameOverScreen.touchButtons = function(){
	//Play Again Button
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.gameOverScreen.buttons[0].posx,game.gameOverScreen.buttons[0].posy,game.gameOverScreen.buttons[0].width,game.gameOverScreen.buttons[0].height])){
		game.game_over_screen = false;
		if(game.gameOverScreen.gameName == "id4" || game.gameOverScreen.gameName == "id6"){
			game.idGame.startGame(game.gameOverScreen.gameName);
		}else if(game.gameOverScreen.gameName == "port_service"){
			game.memory.startGame(game.gameOverScreen.gameName);
		}else if(game.gameOverScreen.gameName == "ipv4" || game.gameOverScreen.gameName == "ipv6" || game.gameOverScreen.gameName == "tcp" || game.gameOverScreen.gameName == "dns" || game.gameOverScreen.gameName == "udp"){
			game.dragAndDrop.startGame(game.gameOverScreen.gameName);
		}
	}
	//Exit Button
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.gameOverScreen.buttons[1].posx,game.gameOverScreen.buttons[1].posy,game.gameOverScreen.buttons[1].width,game.gameOverScreen.buttons[1].height])){
		if(game.gameOverScreen.gameName == "id4" || game.gameOverScreen.gameName == "id6"){
			game.idGame.gameOver();
		}else if(game.gameOverScreen.gameName == "port_service"){
			game.memory.gameOver();
		}else if(game.gameOverScreen.gameName == "ipv4" || game.gameOverScreen.gameName == "ipv6" || game.gameOverScreen.gameName == "tcp" || game.gameOverScreen.gameName == "dns" || game.gameOverScreen.gameName == "udp"){
			game.dragAndDrop.gameOver();
		}
		game.game_over_screen = false;
	}
}

game.gameOverScreen.initialize = function(title,name){
	game.gameOverScreen.gameName = name;
	game.gameOverScreen.titleText = title;
	game.gameOverScreen.width = game.canvas.width*80/100;
	game.gameOverScreen.height = game.canvas.height*50/100;
	game.gameOverScreen.posx = (game.canvas.width-game.gameOverScreen.width)/2;
	game.gameOverScreen.posy = (game.canvas.height-game.gameOverScreen.height)/2;
	game.gameOverScreen.initializeButtons();
	game.gameOverScreen.draw();
}

game.gameOverScreen.drawBackground = function(){
	game.ctx.fillStyle="rgba(255, 255, 255, 0.7)";
	game.ctx.fillRect(game.gameOverScreen.posx,game.gameOverScreen.posy,game.gameOverScreen.width,game.gameOverScreen.height);
}

game.gameOverScreen.update = function(){
	for(var i=0;i<game.gameOverScreen.buttons.length;i++){
		game.gameOverScreen.buttons[i].update();
	}
}

game.gameOverScreen.draw = function(){
	game.gameOverScreen.drawBackground();
  	game.ctx.fillStyle = '#000000';
	game.ctx.font = 18+"px Metriqs";
	game.gameOverScreen.drawText(game.gameOverScreen.titleText,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText(game.gameOverScreen.titleText).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/6);
	if(game.gameOverScreen.gameName == "id4" || game.gameOverScreen.gameName == "id6"){
		if (lang == "es"){
			game.gameOverScreen.drawText("PUNTOS: "+game.idGame.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("PUNTOS: "+game.dragAndDrop.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}
		else{
			game.gameOverScreen.drawText("SCORE: "+game.idGame.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("SCORE: "+game.dragAndDrop.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}
		
	}else if(game.gameOverScreen.gameName == "port_service"){
		if (lang == "es"){
			game.gameOverScreen.drawText("PUNTOS+(TIEMPO): "+game.memory.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("PUNTOS+(TIEMPO): "+game.memory.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}
		else{
			game.gameOverScreen.drawText("SCORE+(TIME): "+game.memory.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("SCORE+(TIME): "+game.memory.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}
	}else if(game.gameOverScreen.gameName == "ipv4" || game.gameOverScreen.gameName == "ipv6" || game.gameOverScreen.gameName == "tcp" || game.gameOverScreen.gameName == "dns" || game.gameOverScreen.gameName == "udp"){
		if (lang == "es"){
			game.gameOverScreen.drawText("PUNTOS+(TIEMPO): "+game.dragAndDrop.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("PUNTOS+(TIEMPO): "+game.dragAndDrop.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}
		else{
			game.gameOverScreen.drawText("SCORE+(TIME): "+game.dragAndDrop.score,((game.gameOverScreen.posx+(game.gameOverScreen.width/2))-(game.ctx.measureText("SCORE+(TIME): "+game.dragAndDrop.score).width)/2),game.gameOverScreen.posy+game.gameOverScreen.height/2);
		}

	}
	for(var i=0;i<game.gameOverScreen.buttons.length;i++){
		game.gameOverScreen.buttons[i].draw();
	}
}