window.requestAnimFrame = (
	function(){
		return window.requestAnimationFrame ||
		       window.webkitRequestAnimationFrame ||
		       window.mozRequestAnimationFrame ||
		       window.msRequestAnimationFrame ||
		       function (callback) {
	       	   window.setTimeout(callback,1000/60);
		       };
	}
)();

game = {
	imageManager: [],
	id_start: false,
	memory_start: false,
	drag_start: false,
	game_over_screen: false,
	is_touch: false,
	difficulty: "",
	actualGame: "",
	isLoading: true,
	instructions: true,
	instruction_screen: false,
	sound: true,
	music: true,
	language: lang
}

game.soundManager = function(soundnumber,loop,type){
	if(game.sound && type=="sound"){
	    // game.soundArray[soundnumber].load();
	    game.soundArray[soundnumber].currentTime = 0;
		game.soundArray[soundnumber].play();
	}else if(game.music && type=="music"){
	    // game.soundArray[soundnumber].load();
	    game.soundArray[soundnumber].currentTime = 0;
		game.soundArray[soundnumber].play();
	}
}

game.mainLoop = function() {
	game.update();
	game.draw();
}
    
game.update = function(){
	if(game.id_start){game.idGame.update();}
	else if(game.memory_start){game.memory.update();}
	else if(game.drag_start){game.dragAndDrop.update();}
	if(game.game_over_screen){game.gameOverScreen.update();}
	if(game.instruction_screen){game.instructionScreen.update();}
}   

game.draw = function(){
	if(game.id_start){game.idGame.draw();}
	else if(game.memory_start){game.memory.draw();}
	else if(game.drag_start){game.dragAndDrop.draw();}
	if(game.game_over_screen){game.gameOverScreen.draw();}
	if(game.isLoading){game.drawloadingscreen();}
	if(game.instruction_screen){game.instructionScreen.draw();}
}

game.recursiveAnimation = function() {
	if(game.id_start || game.memory_start || game.drag_start || game.isLoading ||game. instruction_screen){
		game.mainLoop();
	}
	requestAnimFrame(game.recursiveAnimation);
}

game.resize = function() {
    game.width = window.innerWidth;
    game.height = window.innerHeight;
    game.canvas.width = game.width;
    game.canvas.height = game.height;
}

game.random = function(min,max){
	var result = 0;
	if(min==0){
		min = 1;
		max += 1;
		result = Math.floor(Math.random() * (max - min + 1)) + min;
		return result-1;
	}else{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

game.getMousePos = function(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	var posx = evt.clientX - rect.left;
	var posy = evt.clientY - rect.top;
	if(game.is_touch){
		evt.preventDefault();
		posx = event.targetTouches[0].pageX;
		posy = event.targetTouches[0].pageY;
	}
	return {
		x: posx,
		y: posy
	};
}

game.isTouch = function(evt){
	game.is_touch = true;
}

game.onClick = function(evt) {
	game.mousePos = game.getMousePos(game.canvas, evt);
	if(game.instruction_screen){
		game.instructionScreen.touch();
	}
	if(!game.game_over_screen){
		if(game.id_start){
			game.idGame.touchBalloon();
			game.idGame.exitButton.touch();
		}else if(game.memory_start){
			game.memory.cardTouch();
			game.memory.exitButton.touch();
		}else if(game.drag_start){
			game.dragAndDrop.touchArrows();
			game.dragAndDrop.exitButton.touch();
		}
	}else{
		game.gameOverScreen.touchButtons();
	}
}

game.moveMouse = function(evt){
	game.mousePos = game.getMousePos(game.canvas, evt);
	if(!game.game_over_screen){
		if(game.drag_start){
			if(game.dragAndDrop.mouseDown || game.dragAndDrop.touch){
				game.dragAndDrop.package.updatePos();
				game.dragAndDrop.header.elementColliding = -1;
				game.dragAndDrop.verifyElementCollision();
			}
		}
	}
}

game.mouseDown = function(evt){
	game.mousePos = game.getMousePos(game.canvas, evt);
	if(!game.game_over_screen){
		if(game.drag_start){
			game.dragAndDrop.drag();
		}
	}
}

game.mouseUp = function(evt){
	if(!game.game_over_screen){
		if(game.drag_start){
			if(game.dragAndDrop.header.elementColliding != -1){
				game.dragAndDrop.verifyElementMatch();
			}
			game.dragAndDrop.mouseUp();
			game.dragAndDrop.header.elementColliding = -1;
		}
	}
	game.is_touch = false;
}

//r1 = rectangle1 = array[posx,posy,width,height]
game.collision = function(r1,r2){
	if(r1[0]+r1[2]>r2[0]&&r1[0]<r2[0]+r2[2]&&r1[1]+r1[3]>r2[1]&&r1[1]<r2[1]+r2[3]){
		return true;
	}
}

game.shuffle = function(array) {
    var counter = array.length, temp, index;
    while (counter--) {
        index = (Math.random()*counter) | 0;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

//Jquery Document Ready
$(function(){
    game.area = document.getElementById("area");
	game.canvas = document.getElementById("game");
	game.ctx = game.canvas.getContext("2d");
	game.resize();
	game.loading();
	game.canvas.addEventListener('click', game.onClick, false);
	game.canvas.addEventListener('mousedown', game.mouseDown, false);
	game.canvas.addEventListener('mouseup', game.mouseUp, false);
	game.canvas.addEventListener('mousemove', game.moveMouse, false);
	game.loadSounds();
	// game.canvas.addEventListener('touchstart', game.isTouch, false);
	// game.canvas.addEventListener('touchstart', game.mouseDown, false);
	// game.canvas.addEventListener('touchend', game.mouseUp, false);
	// game.canvas.addEventListener('touchmove', game.moveMouse, false);
	window.addEventListener('resize', game.resize, false);
	window.addEventListener('orientationchange', game.resize, false);
	window.requestAnimationFrame(game.recursiveAnimation);
});