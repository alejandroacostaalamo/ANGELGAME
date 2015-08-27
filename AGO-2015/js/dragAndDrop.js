//PROBLEMAS A RESOLVER:
//LAS COORDENADAS X y Y DE MI CANVAS NO SON LAS MISMAS X Y Y QUE EN MI CELULAR
//EN PORTRAIT X = X, PERO Y != Y
//EN LANDSCAPE Y = Y, PERO X != X
//BUSCAR SOLUCIÓN A ESTE PROBLEMA MALDITO PARA PODER TERMINAR EL JUEGO PARA TOUCHSCREEN
//SI LAS COORDENADAS NO COINCIDEN LA COLISIÓN CON EL DETO EN LA BARRA DE SELECCIÓN JAMÁS SERÁ EL MISMO Y POR ENDE...
//NUNCA EMPEZARÁ EL EVENTO DE ARRASTRAR.
//CUANDO SE RESUELVA SE PUEDE ELIMINAR LA VARIABLE TOUCH DE GAME.DRAGANDDROP Y SUSTITUIRLA POR IS_TOUCH DE GAME (CREO REVISAR IGUAL).

//ARREGLAR LA PALABRA DE LA CABECERA TCP "RESERVED" SE VE SALIDA DEL CUADRO

game.dragAndDrop = {
	score: 0,
	time: 0,
	name: "",
	typeMsg: "",
	elementArray: [],
	actualElement: 0,
	mouseDown: false,
	touch: true, //TOUCH SCREEN CODE
	difficultyFactor: 0
}

game.dragAndDrop.drawPopUp = function(){
	game.ctx.font = game.canvas.width/8+"px Metriqs";
  	game.ctx.fillStyle = '#FFFFFF';
	game.ctx.fillText(game.dragAndDrop.typeMsg,((game.canvas.width/2)-(game.ctx.measureText(game.dragAndDrop.typeMsg).width/2)),game.canvas.height/5);
}

game.dragAndDrop.statusBar = {
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
		game.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		game.ctx.fillRect(0,game.canvas.height-this.height,this.width,this.height);
		// game.ctx.measureText(TEXT).width
		var x = (((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))-((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2))/2)-game.ctx.measureText("Score: "+game.dragAndDrop.score).width;
		var score;
		var time;
		
		//Validar si el juego esta en español o ingles
		if (lang == "es"){
			score = this.drawText("Puntos: ",game.dragAndDrop.score,x,game.canvas.height-game.dragAndDrop.statusBar.height/3);
			time = this.drawText("Tiempo: ",game.dragAndDrop.time,game.canvas.width/3 + (game.dragAndDrop.time,game.canvas.width/2.47),game.canvas.height-game.dragAndDrop.statusBar.height/3);
		}
		else {
			score = this.drawText("Score: ",game.dragAndDrop.score,x,game.canvas.height-game.dragAndDrop.statusBar.height/3);
			time = this.drawText("Time: ",game.dragAndDrop.time,game.canvas.width/3 + (game.dragAndDrop.time,game.canvas.width/2.47),game.canvas.height-game.dragAndDrop.statusBar.height/3);
		}

		game.dragAndDrop.statusBar.pickUpBar.draw();
	},
	resize: function(){
		this.width = game.canvas.width;
		this.height = game.canvas.height/6;
		this.textSize = game.canvas.width/25;
	}
}


game.dragAndDrop.statusBar.pickBar = function(){
	this.posx = 0;
	this.posy = 0;
	this.width = 0;
	this.height = 0;
	this.update = function(){
		this.posx = (game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2;
		this.posy = game.canvas.height-game.dragAndDrop.statusBar.height;
		this.width = game.dragAndDrop.statusBar.width/2.5;
		this.height = game.dragAndDrop.statusBar.height;
	}
	this.draw = function(){
		game.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		game.ctx.fillRect(this.posx,this.posy,this.width,this.height);
	}
}

game.dragAndDrop.statusBar.arrow = function(img){
	this.posx = 0;
	this.posy = 0;
	this.width = 0;
	this.height = 0;
	this.image = img;
	this.update = function(){
		this.width = game.canvas.width/28;
		this.height = game.canvas.height/16;
		this.posy = game.canvas.height*0.89;
	}
	this.draw = function(){
		game.ctx.drawImage(game.imageManager[this.image],this.posx,this.posy,this.width,this.height);
	}
}

game.dragAndDrop.package = function(){
	this.posx = 0;
	this.posy = 0;
	this.width = 0;
	this.height = 0;
	this.text = "";
	this.visible = false;
	this.draw = function(){
		if(this.visible){
			game.ctx.fillStyle = "rgba(75, 75, 75, 0.5)";
			game.ctx.fillRect(this.posx,this.posy,this.width,this.height)
			game.ctx.font = game.canvas.width/35;+"px Metriqs";
		  	game.ctx.fillStyle = '#000000';
		  	// game.ctx.measureText(this.text).width
		  	if(this.width>game.ctx.measureText(this.text).width){
		  		game.ctx.fillText(this.text,(this.posx+(this.width/2))-(game.ctx.measureText(this.text).width/2),this.posy+(this.height/1.4),this.width,this.height);
		  	}else{
	  			game.ctx.fillText(this.text,this.posx,this.posy+this.height/1.4,this.width,this.height);	
		  	}
		}
	}
}

game.dragAndDrop.package.updatePos = function(){
	game.dragAndDrop.statusBar.pkg.visible = true;
	game.dragAndDrop.statusBar.pkg.width = game.canvas.width/5;
	game.dragAndDrop.statusBar.pkg.height = game.canvas.height/15;
	if(game.dragAndDrop.mouseDown){
		game.dragAndDrop.statusBar.pkg.posx = game.mousePos.x - (game.dragAndDrop.statusBar.pkg.width/2);
		game.dragAndDrop.statusBar.pkg.posy = game.mousePos.y - (game.dragAndDrop.statusBar.pkg.height/2);
	}
	//ACÁ TRATARÉ DE RESOLVER QUE SI ES TOUCH LAS DIMENSIONES SEAN DIFERENTES O ALGO
	// if(game.dragAndDrop.touch){
		// game.dragAndDrop.statusBar.pkg.posx = game.mousePos.x - (game.dragAndDrop.statusBar.pkg.width*1.5);
		// game.dragAndDrop.statusBar.pkg.posy = game.mousePos.y;
	// }
	game.dragAndDrop.statusBar.pkg.text = game.dragAndDrop.elementArray[game.dragAndDrop.actualElement];
}

game.dragAndDrop.headerSkeleton = function(){
	this.width = 0;
	this.height = 0;
	this.posx = 0;
	this.posy = 0;
	this.element = [];
	this.totalElements = 0;
	this.elementColliding = -1;
	this.initialize = function(){
		var rand = 0;
		var aux = 0;
		if(game.dragAndDrop.name == "ipv4"){this.totalElements = 14;}
		else if(game.dragAndDrop.name == "ipv6"){this.totalElements = 8;}
		else if(game.dragAndDrop.name == "tcp"){this.totalElements = 11;}
		else if(game.dragAndDrop.name == "udp"){this.totalElements = 5;}
		else if(game.dragAndDrop.name == "dns"){this.totalElements = 15;}
		aux = game.random(0,100);
		if(aux>50){aux=false;}else{aux=true;}
		for(var i=0;i<this.totalElements;i++){
			rand = game.random(0,100);
			if(game.dragAndDrop.name != "dns"){
				if(rand<game.dragAndDrop.difficultyFactor){
					this.element[[i,5]] = true;
				}else{
					this.element[[i,5]] = false;
				}
			}else{
				this.element[[i,5]] = aux;
				if(aux){aux=false;}else{aux = true;}
			}
		}
	}
	this.resize = function(){
		var elementWidth = [];
		elementWidth[0] = this.width/2;
		elementWidth[1] = this.width/3;
		elementWidth[2] = this.width/4;
		elementWidth[3] = this.width/6;
		elementWidth[4] = this.width/12;
		this.width = game.canvas.width*80/100;
		this.height = (game.canvas.height-game.dragAndDrop.statusBar.height)*80/100;
		this.posx = (game.canvas.width-this.width)/2;
		this.posy = ((game.canvas.height-this.height)/2)-(game.dragAndDrop.statusBar.height/2);
		if(game.dragAndDrop.name == "ipv4"){
			this.element[[0,0]] = this.posx+1;
			this.element[[0,1]] = this.posy+1;
			this.element[[0,2]] = elementWidth[3]-2;
			this.element[[0,3]] = (this.height/6)-2;
			this.element[[1,0]] = this.posx+elementWidth[3]+1;
			this.element[[1,1]] = this.posy+1;
			this.element[[1,2]] = elementWidth[4]-2;
			this.element[[1,3]] = (this.height/6)-2;
			this.element[[2,0]] = this.posx+elementWidth[3]+elementWidth[4]+1;
			this.element[[2,1]] = this.posy+1;
			this.element[[2,2]] = elementWidth[2]-2;
			this.element[[2,3]] = (this.height/6)-2;
			this.element[[3,0]] = this.posx+elementWidth[2]+elementWidth[3]+elementWidth[4]+1;
			this.element[[3,1]] = this.posy+1;
			this.element[[3,2]] = elementWidth[0]-2;
			this.element[[3,3]] = (this.height/6)-2;
			this.element[[4,0]] = this.posx+1;
			this.element[[4,1]] = this.posy+((this.height/6))+1;
			this.element[[4,2]] = elementWidth[0]-2;
			this.element[[4,3]] = (this.height/6)-2;
			this.element[[5,0]] = this.posx+elementWidth[0]+1;
			this.element[[5,1]] = this.posy+((this.height/6))+1;
			this.element[[5,2]] = elementWidth[3]-2;
			this.element[[5,3]] = (this.height/6)-2;
			this.element[[6,0]] = this.posx+elementWidth[0]+elementWidth[3]+1;
			this.element[[6,1]] = this.posy+((this.height/6))+1;
			this.element[[6,2]] = elementWidth[1]-2;
			this.element[[6,3]] = (this.height/6)-2;
			this.element[[7,0]] = this.posx+1;
			this.element[[7,1]] = this.posy+((this.height/6)*2)+1;
			this.element[[7,2]] = elementWidth[2]-2;
			this.element[[7,3]] = (this.height/6)-2;
			this.element[[8,0]] = this.posx+elementWidth[2]+1;
			this.element[[8,1]] = this.posy+((this.height/6)*2)+1;
			this.element[[8,2]] = elementWidth[2]-2;
			this.element[[8,3]] = (this.height/6)-2;
			this.element[[9,0]] = this.posx+elementWidth[2]+elementWidth[2]+1;
			this.element[[9,1]] = this.posy+((this.height/6)*2)+1;
			this.element[[9,2]] = elementWidth[0]-2;
			this.element[[9,3]] = (this.height/6)-2;
			this.element[[10,0]] = this.posx+1;
			this.element[[10,1]] = this.posy+((this.height/6)*3)+1;
			this.element[[10,2]] = this.width-2;
			this.element[[10,3]] = (this.height/6)-2;
			this.element[[11,0]] = this.posx+1;
			this.element[[11,1]] = this.posy+((this.height/6)*4)+1;
			this.element[[11,2]] = this.width-2;
			this.element[[11,3]] = (this.height/6)-2;
			this.element[[12,0]] = this.posx+1;
			this.element[[12,1]] = this.posy+((this.height/6)*5)+1;
			this.element[[12,2]] = (elementWidth[2]*3)-2;
			this.element[[12,3]] = (this.height/6)-2;
			this.element[[13,0]] = this.posx+(elementWidth[2]*3)+1;
			this.element[[13,1]] = this.posy+((this.height/6)*5)+1;
			this.element[[13,2]] = elementWidth[2]-2;
			this.element[[13,3]] = (this.height/6)-2;
		}else if(game.dragAndDrop.name == "ipv6"){
			this.element[[0,0]] = this.posx+1;
			this.element[[0,1]] = this.posy+1;
			this.element[[0,2]] = ((this.width/32)*4)-2; //4/32 bits;
			this.element[[0,3]] = (this.height/4)-2;
			this.element[[1,0]] = this.posx+((this.width/32)*4)+1;
			this.element[[1,1]] = this.posy+1;
			this.element[[1,2]] = ((this.width/32)*8)-2; //8/32 bits;
			this.element[[1,3]] = (this.height/4)-2;
			this.element[[2,0]] = this.posx+((this.width/32)*4)+((this.width/32)*8)+1;
			this.element[[2,1]] = this.posy+1;
			this.element[[2,2]] = ((this.width/32)*20)-2; //20/32 bits;
			this.element[[2,3]] = (this.height/4)-2;
			this.element[[3,0]] = this.posx+1;
			this.element[[3,1]] = this.posy+((this.height/4))+1;
			this.element[[3,2]] = elementWidth[0]-2;
			this.element[[3,3]] = (this.height/4)-2;
			this.element[[4,0]] = this.posx+elementWidth[0]+1;
			this.element[[4,1]] = this.posy+((this.height/4))+1;
			this.element[[4,2]] = elementWidth[2]-2;
			this.element[[4,3]] = (this.height/4)-2;
			this.element[[5,0]] = this.posx+elementWidth[0]+elementWidth[2]+1;
			this.element[[5,1]] = this.posy+((this.height/4))+1;
			this.element[[5,2]] = elementWidth[2]-2;
			this.element[[5,3]] = (this.height/4)-2;
			this.element[[6,0]] = this.posx+1;
			this.element[[6,1]] = this.posy+((this.height/4)*2)+1;
			this.element[[6,2]] = this.width-2;
			this.element[[6,3]] = (this.height/4)-2;
			this.element[[7,0]] = this.posx+1;
			this.element[[7,1]] = this.posy+((this.height/4)*3)+1;
			this.element[[7,2]] = this.width-2;
			this.element[[7,3]] = this.height/4-2;
		}else if(game.dragAndDrop.name == "tcp"){
			this.element[[0,0]] = this.posx+1;
			this.element[[0,1]] = this.posy+1;
			this.element[[0,2]] = elementWidth[0]-2;
			this.element[[0,3]] = (this.height/6)-2;
			this.element[[1,0]] = this.posx+elementWidth[0]+1;
			this.element[[1,1]] = this.posy+1;
			this.element[[1,2]] = elementWidth[0]-2;
			this.element[[1,3]] = (this.height/6)-2;
			this.element[[2,0]] = this.posx+1;
			this.element[[2,1]] = this.posy+(this.height/6)+1;
			this.element[[2,2]] = this.width-2;
			this.element[[2,3]] = (this.height/6)-2;
			this.element[[3,0]] = this.posx+1;
			this.element[[3,1]] = this.posy+((this.height/6)*2)+1;
			this.element[[3,2]] = this.width-2;
			this.element[[3,3]] = (this.height/6)-2;
			this.element[[4,0]] = this.posx+1;
			this.element[[4,1]] = this.posy+((this.height/6)*3)+1;
			this.element[[4,2]] = (this.width/8)-2;
			this.element[[4,3]] = (this.height/6)-2;
			this.element[[5,0]] = this.posx+(this.width/8)+1;
			this.element[[5,1]] = this.posy+((this.height/6)*3)+1;
			this.element[[5,2]] = (this.width/8)-2;
			this.element[[5,3]] = (this.height/6)-2;
			this.element[[6,0]] = this.posx+((this.width/8)*2)+1;
			this.element[[6,1]] = this.posy+((this.height/6)*3)+1;
			this.element[[6,2]] = elementWidth[2]-2;
			this.element[[6,3]] = (this.height/6)-2;
			this.element[[7,0]] = this.posx+((this.width/8)*2)+elementWidth[2]+1;
			this.element[[7,1]] = this.posy+((this.height/6)*3)+1;
			this.element[[7,2]] = elementWidth[0]-2;
			this.element[[7,3]] = (this.height/6)-2;
			this.element[[8,0]] = this.posx+1;
			this.element[[8,1]] = this.posy+((this.height/6)*4)+1;
			this.element[[8,2]] = elementWidth[0]-2;
			this.element[[8,3]] = (this.height/6)-2;
			this.element[[9,0]] = this.posx+elementWidth[0]+1;
			this.element[[9,1]] = this.posy+((this.height/6)*4)+1;
			this.element[[9,2]] = elementWidth[0]-2;
			this.element[[9,3]] = (this.height/6)-2;
			this.element[[10,0]] = this.posx+1;
			this.element[[10,1]] = this.posy+((this.height/6)*5)+1;
			this.element[[10,2]] = this.width-2;
			this.element[[10,3]] = (this.height/6)-2;
		}else if(game.dragAndDrop.name == "udp"){
			this.element[[0,0]] = this.posx+1;
			this.element[[0,1]] = this.posy+1;
			this.element[[0,2]] = elementWidth[0]-2;
			this.element[[0,3]] = (this.height/3)-2;
			this.element[[1,0]] = this.posx+elementWidth[0]+1;
			this.element[[1,1]] = this.posy+1;
			this.element[[1,2]] = elementWidth[0]-2;
			this.element[[1,3]] = (this.height/3)-2;
			this.element[[2,0]] = this.posx+1;
			this.element[[2,1]] = (this.posy+(this.height/3))+1;
			this.element[[2,2]] = elementWidth[0]-2;
			this.element[[2,3]] = (this.height/3)-2;
			this.element[[3,0]] = this.posx+elementWidth[0]+1;
			this.element[[3,1]] = (this.posy+(this.height/3))+1;
			this.element[[3,2]] = elementWidth[0]-2;
			this.element[[3,3]] = (this.height/3)-2;
			this.element[[4,0]] = this.posx+1;
			this.element[[4,1]] = (this.posy+((this.height/3)*2))+1;
			this.element[[4,2]] = this.width-2;
			this.element[[4,3]] = (this.height/3)-2;
		}else if(game.dragAndDrop.name == "dns"){
			var numberofrows = 5;
			this.element[[0,0]] = this.posx+1;
			this.element[[0,1]] = this.posy+1;
			this.element[[0,2]] = elementWidth[1]-2;
			this.element[[0,3]] = (this.height/numberofrows)-2;
			this.element[[1,0]] = this.posx+elementWidth[1]+1;
			this.element[[1,1]] = this.posy+1;
			this.element[[1,2]] = elementWidth[1]-2;
			this.element[[1,3]] = (this.height/numberofrows)-2;
			this.element[[2,0]] = this.posx+(elementWidth[1]*2)+1;
			this.element[[2,1]] = this.posy+1;
			this.element[[2,2]] = elementWidth[1]-2;
			this.element[[2,3]] = (this.height/numberofrows)-2;
			this.element[[3,0]] = this.posx+1;
			this.element[[3,1]] = this.posy+(this.height/numberofrows)+1;
			this.element[[3,2]] = elementWidth[1]-2;
			this.element[[3,3]] = (this.height/numberofrows)-2;
			this.element[[4,0]] = this.posx+elementWidth[1]+1;
			this.element[[4,1]] = this.posy+(this.height/numberofrows)+1;
			this.element[[4,2]] = elementWidth[1]-2;
			this.element[[4,3]] = (this.height/numberofrows)-2;
			this.element[[5,0]] = this.posx+(elementWidth[1]*2)+1;
			this.element[[5,1]] = this.posy+(this.height/numberofrows)+1;
			this.element[[5,2]] = elementWidth[1]-2;
			this.element[[5,3]] = (this.height/numberofrows)-2;
			this.element[[6,0]] = this.posx+1;
			this.element[[6,1]] = this.posy+((this.height/numberofrows)*2)+1;
			this.element[[6,2]] = elementWidth[1]-2;
			this.element[[6,3]] = (this.height/numberofrows)-2;
			this.element[[7,0]] = this.posx+elementWidth[1]+1;
			this.element[[7,1]] = this.posy+((this.height/numberofrows)*2)+1;
			this.element[[7,2]] = elementWidth[1]-2;
			this.element[[7,3]] = (this.height/numberofrows)-2;
			this.element[[8,0]] = this.posx+(elementWidth[1]*2)+1;
			this.element[[8,1]] = this.posy+((this.height/numberofrows)*2)+1;
			this.element[[8,2]] = elementWidth[1]-2;
			this.element[[8,3]] = (this.height/numberofrows)-2;
			this.element[[9,0]] = this.posx+1;
			this.element[[9,1]] = this.posy+((this.height/numberofrows)*3)+1;
			this.element[[9,2]] = elementWidth[1]-2;
			this.element[[9,3]] = (this.height/numberofrows)-2;
			this.element[[10,0]] = this.posx+elementWidth[1]+1;
			this.element[[10,1]] = this.posy+((this.height/numberofrows)*3)+1;
			this.element[[10,2]] = elementWidth[1]-2;
			this.element[[10,3]] = (this.height/numberofrows)-2;
			this.element[[11,0]] = this.posx+(elementWidth[1]*2)+1;
			this.element[[11,1]] = this.posy+((this.height/numberofrows)*3)+1;
			this.element[[11,2]] = elementWidth[1]-2;
			this.element[[11,3]] = (this.height/numberofrows)-2;
			this.element[[12,0]] = this.posx+1;
			this.element[[12,1]] = this.posy+((this.height/numberofrows)*4)+1;
			this.element[[12,2]] = elementWidth[1]-2;
			this.element[[12,3]] = (this.height/numberofrows)-2;
			this.element[[13,0]] = this.posx+elementWidth[1]+1;
			this.element[[13,1]] = this.posy+((this.height/numberofrows)*4)+1;
			this.element[[13,2]] = elementWidth[1]-2;
			this.element[[13,3]] = (this.height/numberofrows)-2;
			this.element[[14,0]] = this.posx+(elementWidth[1]*2)+1;
			this.element[[14,1]] = this.posy+((this.height/numberofrows)*4)+1;
			this.element[[14,2]] = elementWidth[1]-2;
			this.element[[14,3]] = (this.height/numberofrows)-2;
		}
	}
	this.draw = function(){
		game.ctx.fillStyle = "#FFF";
		game.ctx.fillRect(this.posx,this.posy,this.width,this.height)
		for(var i=0;i<this.totalElements;i++){
			game.ctx.fillStyle = "#ccc";
			game.ctx.fillRect(this.element[[i,0]],this.element[[i,1]],this.element[[i,2]],this.element[[i,3]]);
			game.ctx.font = game.canvas.width/35;+"px Metriqs";
		  	game.ctx.fillStyle = '#000000';
		  	if(this.element[[i,5]]){
		  		if(this.element[[i,4]]=="Internet Header Length"){
		  			this.element[[i,4]] = "IHL";
		  		}
		  		//PARA QUE NO SE VEA SALIDA DEL CUADRO
		  		if(game.ctx.measureText(this.element[[i,4]]).width <= this.element[[i,2]]){
		  			game.ctx.fillText(this.element[[i,4]],(this.element[[i,0]]+this.element[[i,2]]/2)-(game.ctx.measureText(this.element[[i,4]]).width/2),this.element[[i,1]]+this.element[[i,3]]/1.5,this.element[[i,2]]);
	  			}else{
		  			game.ctx.fillText(this.element[[i,4]],(this.element[[i,0]]+this.element[[i,2]]/2)-(this.element[[i,2]]/2),this.element[[i,1]]+this.element[[i,3]]/1.5,this.element[[i,2]]);
		  		}
		  	}
		}
	}
}

game.dragAndDrop.drawBackground = function(){
	game.ctx.drawImage(game.imageManager[18],0,0,1024,800);
}

game.dragAndDrop.drawArrayText = function(){
	game.ctx.font = 12+"px Metriqs";
  	game.ctx.fillStyle = '#000000';
	game.ctx.fillText(game.dragAndDrop.elementArray[game.dragAndDrop.actualElement],((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2+((game.dragAndDrop.statusBar.width/2.5)/2))-(game.ctx.measureText(game.dragAndDrop.elementArray[game.dragAndDrop.actualElement]).width/2),game.canvas.height*0.9355);
}

game.dragAndDrop.draw = function(){
	game.dragAndDrop.drawBackground();
	if(!game.game_over_screen){
		game.dragAndDrop.statusBar.draw();
		game.dragAndDrop.statusBar.rightArrow.draw();
		game.dragAndDrop.statusBar.leftArrow.draw();
		game.dragAndDrop.drawArrayText();
		game.dragAndDrop.header.draw();
		game.dragAndDrop.statusBar.pkg.draw();
		game.dragAndDrop.exitButton.draw();
	}
}

game.dragAndDrop.update = function(){
	game.dragAndDrop.statusBar.resize();
	game.dragAndDrop.header.resize();
	game.dragAndDrop.statusBar.pickUpBar.update();
	game.dragAndDrop.statusBar.rightArrow.update();
	game.dragAndDrop.statusBar.leftArrow.update();
	game.dragAndDrop.statusBar.leftArrow.posx = ((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2)+(((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2)*0.06);
	game.dragAndDrop.statusBar.rightArrow.posx = ((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2)+(((game.canvas.width-(game.dragAndDrop.statusBar.width/2.5))/2))*1.16;
	if(game.dragAndDrop.time <= 0){game.dragAndDrop.timeOver();}
	game.dragAndDrop.verifyCleanArray();
	game.dragAndDrop.exitButton.update();
}

game.dragAndDrop.initialize = function(){
	game.dragAndDrop.header = new game.dragAndDrop.headerSkeleton();
	game.dragAndDrop.header.initialize();
	game.dragAndDrop.header.resize();
	game.dragAndDrop.fillElementArray();
	game.dragAndDrop.statusBar.pickUpBar = new game.dragAndDrop.statusBar.pickBar();
	game.dragAndDrop.statusBar.rightArrow = new game.dragAndDrop.statusBar.arrow(2);
	game.dragAndDrop.statusBar.leftArrow = new game.dragAndDrop.statusBar.arrow(3);
	game.dragAndDrop.cleanElementArray();
	game.dragAndDrop.statusBar.pkg = new game.dragAndDrop.package();
}

game.dragAndDrop.startGame = function(gameName){
	if(game.difficulty == "easy"){
		game.dragAndDrop.time = 60;
		game.dragAndDrop.difficultyFactor = 50;
	}else if(game.difficulty == "medium"){
		game.dragAndDrop.time = 45;
		game.dragAndDrop.difficultyFactor = 30;
	}else if(game.difficulty == "hard"){
		game.dragAndDrop.time = 30;
		game.dragAndDrop.difficultyFactor = 0;
	}
	
	game.dragAndDrop.score = 0;
	game.dragAndDrop.name = gameName;
	game.dragAndDrop.restartArray();
	game.dragAndDrop.actualElement = 0;
	if(game.dragAndDrop.header!=null){game.dragAndDrop.header.elementColliding = -1;}
	if(game.dragAndDrop.statusBar.pkg!=null){delete game.dragAndDrop.statusBar.pkg;}
	game.dragAndDrop.initialize();
	game.dragAndDrop.gameInterval = setInterval(function(){
		game.dragAndDrop.time--;
	},1000);
}

game.dragAndDrop.timeOver = function(msg){
	game.dragAndDrop.touch = false; //TOUCH SCREEN CODE
	game.dragAndDrop.mouseDown = false;
	game.dragAndDrop.statusBar.pkg.visible = false;
	clearInterval(game.dragAndDrop.gameInterval);
	if(msg==null){
		if (lang == "es"){
			game.gameOverScreen.initialize("TIEMPO AGOTADO!",game.dragAndDrop.name);
		}
		else {
			game.gameOverScreen.initialize("TIME'S OVER!",game.dragAndDrop.name);
		}
		
	}else{
		game.gameOverScreen.initialize(msg,game.dragAndDrop.name);
	}
	game.game_over_screen = true;
}

game.dragAndDrop.gameOver = function(){
	game.mainVisibility();
	game.drag_start = false;
	game.soundArray[3].pause();
	// game.game_over_screen = false;
	delete game.dragAndDrop.statusBar.pkg;
}

game.dragAndDrop.touchArrows = function(){
	//Right Arrow Collision
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.dragAndDrop.statusBar.rightArrow.posx,game.dragAndDrop.statusBar.rightArrow.posy,game.dragAndDrop.statusBar.rightArrow.width*2,game.dragAndDrop.statusBar.rightArrow.height])){
		if(game.dragAndDrop.actualElement < game.dragAndDrop.elementArray.length-1){
			game.dragAndDrop.actualElement++;
		}else{
			game.dragAndDrop.actualElement = 0;
		}
	}
	//Left Arrow Collision
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.dragAndDrop.statusBar.leftArrow.posx-game.dragAndDrop.statusBar.leftArrow.width,game.dragAndDrop.statusBar.leftArrow.posy,game.dragAndDrop.statusBar.leftArrow.width*2,game.dragAndDrop.statusBar.leftArrow.height])){
		if(game.dragAndDrop.actualElement > 0){
			game.dragAndDrop.actualElement--;
		}else{
			game.dragAndDrop.actualElement = game.dragAndDrop.elementArray.length-1;
		}
	}
}

game.dragAndDrop.drag = function(){
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.dragAndDrop.statusBar.pickUpBar.posx+(game.dragAndDrop.statusBar.leftArrow.width*1.5),game.dragAndDrop.statusBar.pickUpBar.posy,game.dragAndDrop.statusBar.pickUpBar.width-(game.dragAndDrop.statusBar.leftArrow.width*3),game.dragAndDrop.statusBar.pickUpBar.height])){
		game.dragAndDrop.mouseDown = false;
		game.dragAndDrop.touch = true; //TOUCH SCREEN CODE
	}
	//IF PARA VER LAS COORDENADAS Y COMPARAR EL PORQUE NÓ ENTRA EN EL IF DE ARRIBA (BORRAR AL RESOLVER PROBLEMA)
	if(game.is_touch){
		alert("x: "+game.mousePos.x+", y: "+game.mousePos.y+", pickBar x: "+game.dragAndDrop.statusBar.pickUpBar.posx+", pickBar y: "+game.dragAndDrop.statusBar.pickUpBar.posy);
	}
}

game.dragAndDrop.mouseUp = function(){
	game.dragAndDrop.touch = true; //TOUCH SCREEN CODE
	game.dragAndDrop.mouseDown = false;
	game.dragAndDrop.statusBar.pkg.visible = false;
}

game.dragAndDrop.verifyElementCollision = function(){
	for(var i=0;i<game.dragAndDrop.header.totalElements;i++){
		if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[game.dragAndDrop.header.element[[i,0]],game.dragAndDrop.header.element[[i,1]],game.dragAndDrop.header.element[[i,2]],game.dragAndDrop.header.element[[i,3]]])){
			game.dragAndDrop.header.elementColliding = i;
		}
	}
}

game.dragAndDrop.verifyElementMatch = function(){
	if(game.dragAndDrop.header.element[[game.dragAndDrop.header.elementColliding,4]] == game.dragAndDrop.elementArray[game.dragAndDrop.actualElement]){
		if(!game.dragAndDrop.header.element[[game.dragAndDrop.header.elementColliding,5]]){
			game.dragAndDrop.score+=10;
			game.dragAndDrop.typeMsg = "+10";
			game.dragAndDrop.header.element[[game.dragAndDrop.header.elementColliding,5]] = true;
			for(var j=0;j<game.dragAndDrop.elementArray.length;j++){
				if(game.dragAndDrop.elementArray[j]==game.dragAndDrop.header.element[[game.dragAndDrop.header.elementColliding,4]]){
					game.dragAndDrop.elementArray.splice(j,1);
					if(game.dragAndDrop.actualElement>0){
						game.dragAndDrop.actualElement--;
					}
				}
			}
		}
	}else{
		if(game.dragAndDrop.score>0){
			if(!game.dragAndDrop.header.element[[game.dragAndDrop.header.elementColliding,5]]){
				game.dragAndDrop.score-=5;
				game.dragAndDrop.typeMsg = "-5";
			}
		}
	}
}

game.dragAndDrop.fillElementArray = function(){
	if(game.dragAndDrop.elementArray.length <= 0){
		if(game.dragAndDrop.name == "ipv4"){
			game.dragAndDrop.elementArray.push("Version","Internet Header Length","Type of Service","Total Length","Identification","Flags","Fragment Offset","Time to Live","Protocol","Header Checksum","Source Address","Destination Address","Options","Padding");
		}else if(game.dragAndDrop.name == "ipv6"){
			game.dragAndDrop.elementArray.push("Version","Traffic Class","Flow Label","Payload Length","Next Header","Hop Limit","Source Address","Destination Address");
		}else if(game.dragAndDrop.name == "tcp"){
			game.dragAndDrop.elementArray.push("Source Port","Destination Port","Sequence Number","Acknowlegment Num","Offset","Reserved","TCP Flags","Window","Checksum","Urgent Pointer","TCP Options");
		}else if(game.dragAndDrop.name == "udp"){
			game.dragAndDrop.elementArray.push("Source Port","Destination Port","Length","Checksum","Data");
		}else if(game.dragAndDrop.name == "dns"){
			game.dragAndDrop.elementArray.push("127.0.0.1","A","LOCALHOST","192.168.0.1","A ","ROUTER","3ffe:1900:4545:2:02d0:09ff:fef7:6d2c","AAAA","LINUX","mail.ex.net","CNAME","mail.ex.com","v=spf1-all","TXT","mydomain.com");
		}
		for(var i=0;i<game.dragAndDrop.elementArray.length;i++){
			game.dragAndDrop.header.element[[i,4]] = game.dragAndDrop.elementArray[i];
		}
	}
}

game.dragAndDrop.cleanElementArray = function(){
	for(var i=0;i<game.dragAndDrop.header.totalElements;i++){
		if(game.dragAndDrop.header.element[[i,5]]){
			for(var j=0;j<game.dragAndDrop.elementArray.length;j++){
				if(game.dragAndDrop.elementArray[j]==game.dragAndDrop.header.element[[i,4]]){
					game.dragAndDrop.elementArray.splice(j,1);
				}
			}
		}
	}
	game.shuffle(game.dragAndDrop.elementArray);
}

game.dragAndDrop.verifyCleanArray = function(){
	if(game.dragAndDrop.elementArray.length>0){
		for(var j=0;j<game.dragAndDrop.elementArray.length;j++){
			if(game.dragAndDrop.elementArray[j]==undefined){
				game.dragAndDrop.elementArray.splice(j,1);
			}
		}
	}else{
		game.dragAndDrop.score += Math.floor(game.dragAndDrop.time/3);
		game.dragAndDrop.time = 0;

		if (lang == "es"){
			game.dragAndDrop.timeOver("HEADER COMPLETADO!");
		}
		else {
			game.dragAndDrop.timeOver("COMPLETED HEADER!");
		}
		
	}
}

game.dragAndDrop.restartArray = function(){
	delete game.dragAndDrop.elementArray;
	game.dragAndDrop.elementArray = new Array();
}

game.dragAndDrop.exitButton = {
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

game.dragAndDrop.exitButton.touch = function(){
	if(game.collision([game.mousePos.x,game.mousePos.y,0,0],[this.posx,this.posy,this.width,this.height])){
		game.soundArray[3].pause();
		game.dragAndDrop.statusBar.pkg.visible = false;
		clearInterval(game.dragAndDrop.gameInterval);
		game.drag_start = false;
		game.mainVisibility();
	}
}