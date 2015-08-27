game.memory = {
	score: 0,
	time: 0,
	name: "",
	cardTotal: 0,
	rows: 0,
	columns: 0,
	totalCardNames: [],
	totalCardArray: [], //Contains all the possible card in game, with his id
	usedCardArray: [],
	totalSideUpCards: 0,
	lastCardTouched: -1,
	totalInvisibleCards: 0
}

game.memory.statusBar = {
	width: 0,
	height: 0,
	posx: 0,
	posy: 0,
	textSize: 0,
	drawText: function(text,value,posx,posy){
		game.ctx.font = this.textSize+"px Metriqs";
      	game.ctx.fillStyle = '#000000';
      	game.ctx.fillText(text+value,posx,posy);
	},
	draw: function(){
		game.ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
		game.ctx.fillRect(0,game.canvas.height-this.height,this.width,this.height);
		var score;
		var time;

		if(lang == "es"){
			score = this.drawText("Puntos: ",game.memory.score,(game.canvas.width/6)-(game.ctx.measureText("Puntos: "+game.memory.score).width/2),game.canvas.height-game.memory.statusBar.height/3);
		time = this.drawText("Tiempo: ",game.memory.time,(game.canvas.width - (game.canvas.width/6))-(game.ctx.measureText("Tiempo: "+game.memory.time).width/2),game.canvas.height-game.memory.statusBar.height/3);
		}else{
			score = this.drawText("Score: ",game.memory.score,(game.canvas.width/6)-(game.ctx.measureText("Score: "+game.memory.score).width/2),game.canvas.height-game.memory.statusBar.height/3);
		time = this.drawText("Time: ",game.memory.time,(game.canvas.width - (game.canvas.width/6))-(game.ctx.measureText("Time: "+game.memory.time).width/2),game.canvas.height-game.memory.statusBar.height/3);
		}
	},
	resize: function(){
		this.width = game.canvas.width;
		this.height = game.canvas.height/6;
		this.textSize = game.canvas.width/25;
	}
}

game.memory.card = function(i,t){
	this.posx = 0; 
	this.posy = 0;
	this.width = 0;
	this.height = 0;
	this.id = i;
	this.text = t;
	this.visible = true;
	this.available = true; //If available = false; you clicks the card do nothing.
	this.side = false; //true = up; false = down;
	this.color = ""; //Momentaneo
	this.resize = function(){
	
		//Ancho de la memoria
		this.width = game.canvas.width*10/100;
		
		//Ancho de la pantalla
		var w = window.innerWidth;
		
		//Ajuste del tamaño de la memoria segun el tamaño de la pantalla
		if (w < 500){
			//Si la dificultad esta en HARD, los cuadros seran mas pequeños
			if (game.memory.cardTotal == 28){
				if (w < 500){
					this.height = (game.canvas.height-game.memory.statusBar.height)*12/100;
				}
				else{
					this.height = (game.canvas.height-game.memory.statusBar.height)*10/100;
				}
			//Tamaño de los cuadros para EASY y MEDIUM
			}else{
				this.height = (game.canvas.height-game.memory.statusBar.height)*13/100;
			}
		//Tamaño para resolucion mas de 500px
		}else{
			this.height = (game.canvas.height-game.memory.statusBar.height)*18/100;
		}
		
		this.posx = (game.canvas.width-this.width)/1;
		this.posy = ((game.canvas.height-this.height)/2)-(game.memory.statusBar.height/1);
		
		if(this.width > this.height){
			this.width = this.height;
		}else if(this.height > this.width){
			game.memory.gameBackground.width = (this.height*game.memory.columns);
			game.memory.gameBackground.posx = (game.canvas.width-game.memory.gameBackground.width)/2;
			this.width = this.height;
		}
		
		/*
		else if (game.memory.cardTotal == 20){
			this.width = 70;
			this.height = 70;
		}
		else {
			this.width = 75;
			this.height = 75;
		}*/
	}
	this.draw = function(){
		if(this.visible){
			game.ctx.fillStyle = this.color;
			game.ctx.fillRect(this.posx,this.posy,this.width-1,this.height-1);
			if(this.side){
			  	game.ctx.fillStyle = '#FFFFFF';
				game.ctx.font = 22+"px Metriqs";
			    if(game.ctx.measureText(this.text).width<this.width){
					game.ctx.fillText(this.text,(this.posx+(this.width/2))-((game.ctx.measureText(this.text).width)/2),this.posy+this.height/2);
			    }else{
					game.ctx.fillText(this.text,this.posx,this.posy+this.height/2,this.width);
			    }
			}
		}
	}
}

game.memory.memoryBackground = function(){
	this.width = 0;
	this.height = 0;
	this.posx = 50;
	this.posy = 0;
	this.resize = function(){
		this.width = game.canvas.width*80/100;
		this.height = (game.canvas.height-game.memory.statusBar.height)*80/100;
		this.posx = (game.canvas.width-this.width)/2;
		this.posy = ((game.canvas.height-this.height)/2)-(game.memory.statusBar.height/2);
	}
	this.draw = function(){
		game.ctx.fillStyle = "rgba(100, 100, 100, 0)";
		game.ctx.fillRect(this.posx,this.posy,this.width,this.height);
	}
}

game.memory.startGame = function(gameName){
	game.memory.clean();
	game.memory.name = gameName;
	if(game.difficulty == "easy"){
		if(game.memory.name == "port_service"){
			game.memory.cardTotal = 16;
			game.memory.rows = 4;
			game.memory.columns = 4;
		}
	}else if(game.difficulty == "medium"){
		if(game.memory.name == "port_service"){
			game.memory.cardTotal = 20;
			game.memory.rows = 5;
			game.memory.columns = 4;
		}
	}if(game.difficulty == "hard"){
		if(game.memory.name == "port_service"){
			game.memory.cardTotal = 28;
			game.memory.rows = 7;
			game.memory.columns = 4;
		}
	}
	game.memory.time = 120;
	game.memory.score = 0;
	game.memory.initialize();
	game.memory.gameInterval = setInterval(function(){
		game.memory.time--;
	},1000);
}

game.memory.initialize = function(){
	game.memory.fillTotalCardArray();
	game.memory.gameBackground = new game.memory.memoryBackground();
	game.memory.generateUsedCards();
}

game.memory.timeOver = function(){
	clearInterval(game.memory.gameInterval);
	if(game.memory.time>0){
		if (lang == "es"){
			game.gameOverScreen.initialize("COMPLETADO!",game.memory.name);
		}
		else{
			game.gameOverScreen.initialize("COMPLETE!",game.memory.name);
		}
		
	}else{
		if (lang == "es"){
			game.gameOverScreen.initialize("TIEMPO AGOTADO!",game.memory.name);
		}
		else{
			game.gameOverScreen.initialize("TIME'S OVER!",game.memory.name);
		}
	}
	game.game_over_screen = true;
}

game.memory.gameOver = function(){
	game.memory.clean();
	game.mainVisibility();
	game.memory_start = false;
	game.soundArray[2].pause();
	// game.game_over_screen = false;
}

game.memory.drawBackground = function(){
	game.ctx.drawImage(game.imageManager[13],0,0,1024,800);
	// game.ctx.fillStyle="#44BBBB";
	// game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
}

game.memory.drawCards = function(){
	for(var i=0;i<game.memory.usedCardArray.length;i++){
		if(game.memory.usedCardArray[i].visible){
			game.memory.usedCardArray[i].draw();
		}
	}
}

game.memory.draw = function(){
	game.memory.drawBackground();
	if(!game.game_over_screen){
		game.memory.gameBackground.draw();
		game.memory.statusBar.draw();
		game.memory.drawCards();
		game.memory.exitButton.draw();
	}
}

game.memory.update = function(){
	game.memory.gameBackground.resize();
	game.memory.statusBar.resize();
	game.memory.usedCardArrayResize();
	game.memory.orderUsedCards();
	game.memory.verifySideUpCards();
	game.memory.exitButton.update();
	if(game.memory.time <= 0){
		game.memory.timeOver();
	}
}

game.memory.generateUsedCards = function(){
	if(game.memory.usedCardArray.length>0){
		delete game.memory.usedCardArray;
		game.memory.usedCardArray = new Array();
	}
	for(var i=0;i<game.memory.cardTotal;i++){
		game.memory.usedCardArray[i] = new game.memory.card(game.memory.totalCardArray[[i,0]],game.memory.totalCardArray[[i,1]]);
	}
	game.shuffle(game.memory.usedCardArray);
}

game.memory.usedCardArrayResize = function(){
	for(var i=0;i<game.memory.usedCardArray.length;i++){
		game.memory.usedCardArray[i].resize();
	}
}

game.memory.orderUsedCards = function(){
	var rowJump = 0;
	for(var r=0;r<game.memory.rows;r++){
		for(var c=0;c<game.memory.columns;c++){
			game.memory.usedCardArray[c+rowJump].posx = game.memory.gameBackground.posx;
			game.memory.usedCardArray[c+rowJump].posy = game.memory.gameBackground.posy + (game.memory.usedCardArray[c+rowJump].height*r);
			if(c>0){
				for(var i=0;i<c;i++){
					game.memory.usedCardArray[i+rowJump].posx += game.memory.usedCardArray[i+rowJump].width;
				}
			}
		}
		rowJump += game.memory.columns;
	}
}

game.memory.fillTotalCardArray = function(){
	if(game.memory.totalCardNames.lenght>0 || game.memory.totalCardArray.lenght>0){
		delete game.memory.totalCardNames;
		delete game.memory.totalCardArray;
		game.memory.totalCardNames = new Array();
		game.memory.totalCardArray = new Array();
	}
	for(var i=0;i<game.memory.cardTotal;i++){
		if(i%2==0){
			game.memory.totalCardArray[[i,0]] = i;
			game.memory.totalCardArray[[i+1,0]] = i;	
		}
	}
	if(game.memory.name == "port_service"){
		game.memory.totalCardNames.push("FTP","20/21","SSH","22","Telnet","23","SMTP","25","DNS","53","HTTP","80", //LEVEL1
										"TFTP","69","POP3","110","NTP","123","IMAP","143", //LEVEL2
										"BGP","179","HTTPS","443","X Window","6000","Echo","7"); //LEVEL3
	}
	for(var i=0;i<game.memory.cardTotal;i++){
		game.memory.totalCardArray[[i,1]] = game.memory.totalCardNames[i];
	}
}

game.memory.verifySideUpCards = function(){
	var touchCardsId = [], touchCardPosition = [], visibility = true;
	for(var i=0;i<game.memory.usedCardArray.length;i++){
		if(game.memory.usedCardArray[i].side){
			game.memory.usedCardArray[i].color = "rgba(0, 0, 0, 1)";
		}else{
			game.memory.usedCardArray[i].color = "rgba(0, 0, 0, 0.7)";
		}
	}
	if(game.memory.totalSideUpCards>=2){
		for(var i=0;i<game.memory.usedCardArray.length;i++){
			if(game.memory.usedCardArray[i].side){
				touchCardsId.push(game.memory.usedCardArray[i].id);
				touchCardPosition.push(i);
			}
			if(touchCardPosition.length>1){
				if(touchCardsId[0] == touchCardsId[1]){
					visibility = false;
				}
			}
		}
		game.memory.lastCardTouched = -1;
		game.memory.totalSideUpCards = 0;
		for(var i=0;i<game.memory.usedCardArray.length;i++){
			game.memory.usedCardArray[i].available = false;
		}
		setTimeout(function(){
			for(var i=0;i<game.memory.usedCardArray.length;i++){
				game.memory.usedCardArray[i].available = true;
				game.memory.usedCardArray[i].side = false;
				if(!visibility){
					game.memory.usedCardArray[touchCardPosition[0]].visible = false;
					game.memory.usedCardArray[touchCardPosition[1]].visible = false;
				}
			}
			if(!visibility){
				game.memory.score += 20;
				game.memory.totalInvisibleCards += 2;
				if(game.memory.totalInvisibleCards >= game.memory.cardTotal){
					game.memory.score += Math.floor(game.memory.time/3);
					game.memory.timeOver();
				}
			}else{
				if(game.memory.score>0){
					game.memory.score -= 5;
				}
			}
		},500);
	}
}

game.memory.cardTouch = function(){
	for(var i=0;i<game.memory.usedCardArray.length;i++){
		if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.memory.usedCardArray[i].posx,game.memory.usedCardArray[i].posy,game.memory.usedCardArray[i].width,game.memory.usedCardArray[i].height])){
			if(game.memory.usedCardArray[i].visible && game.memory.usedCardArray[i].available){
				game.memory.usedCardArray[i].side = true;
				if(game.memory.lastCardTouched != i){
					game.memory.totalSideUpCards++;
				}
				game.memory.lastCardTouched = i;
			}
		}
	}
}

game.memory.clean = function(){
	game.memory.score = 0;
	game.memory.time = 0;
	game.memory.name = "";
	game.memory.rows = 0;
	game.memory.columns = 0;
	game.memory.totalSideUpCards = 0;
	game.memory.lastCardTouched = -1;
	game.memory.totalInvisibleCards = 0;
}

game.memory.exitButton = {
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

game.memory.exitButton.touch = function(){
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[this.posx,this.posy,this.width,this.height])){
    	game.soundArray[2].pause();
		clearInterval(game.memory.gameInterval);
		game.memory_start = false;
		game.mainVisibility();
	}
}

