game.mainMenu = {
	area: document.getElementById("main_menu"),
	playButton: document.getElementById("play_button"),
	configButton: document.getElementById("config_button"),
	aboutButton: document.getElementById("about_button"),
	canvas: document.getElementById("game")
}
game.selectionMenu = {
	area: document.getElementById("selection_menu"),
	idButton: document.getElementById("id_button"),
	memoryButton: document.getElementById("memory_button"),
	dragButton: document.getElementById("drag_button"),
	crossButton: document.getElementById("cross_button")
}

game.selectionIp = {
	area: document.getElementById("ip_selection_menu"),
	ipv4Button2: document.getElementById("ipv4_button2"),
	ipv6Button2: document.getElementById("ipv6_button2")
}

game.selectionDrag = {
	area: document.getElementById("drag_selection_menu"),
	ipv4Button: document.getElementById("ipv4_button"),
	ipv6Button: document.getElementById("ipv6_button"),
	tcpButton: document.getElementById("tcp_button"),
	udpButton: document.getElementById("udp_button"),
	dnsButton: document.getElementById("dns_button")
}

game.selectionCross = {
	area: document.getElementById("cross_selection_menu"),
	ipv4Button3: document.getElementById("ipv4_button3"),
	ipv6Button3: document.getElementById("ipv6_button3")
}

game.selectionDifficulty = {
	area: document.getElementById("difficulty_menu"),
	easyButton: document.getElementById("easy_button"),
	mediumButton: document.getElementById("medium_button"),
	hardButton: document.getElementById("hard_button")
}

game.configMenu = {area: document.getElementById("config_menu")}
game.aboutMenu = {area: document.getElementById("about_menu")}
game.backButton = document.getElementById("back_button");

game.mainMenu.playButton.onclick = function(){game.visibility('hidden','visible','hidden','hidden','visible','hidden','hidden','hidden','hidden','hidden');}
game.mainMenu.configButton.onclick = function(){game.visibility('hidden','hidden','visible','hidden','visible','hidden','hidden','hidden','hidden','hidden');}
game.mainMenu.aboutButton.onclick = function(){game.visibility('hidden','hidden','hidden','visible','visible','hidden','hidden','hidden','hidden','hidden');}
game.selectionMenu.dragButton.onclick = function(){game.visibility('hidden','hidden','hidden','hidden','visible','hidden','visible','hidden','hidden','hidden');}
game.selectionMenu.idButton.onclick = function(){game.visibility('hidden','hidden','hidden','hidden','visible','hidden','hidden','hidden','visible','hidden');}
game.selectionMenu.crossButton.onclick = function(){game.visibility('hidden','hidden','hidden','hidden','visible','hidden','hidden','hidden','hidden','visible');}

game.backButton.onclick = function(){
	game.mainVisibility();
	game.actualGame = "";
}
game.mainVisibility = function(){game.visibility('visible','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden','hidden');game.soundManager(4,true,"music");}
game.canvasVisibility = function(){game.visibility('hidden','hidden','hidden','hidden','hidden','visible','hidden','hidden','hidden','hidden');}
game.difficultyVisibility = function(){game.visibility('hidden','hidden','hidden','hidden','visible','hidden','hidden','visible','hidden','hidden');}

//Validation for cheaters who show menu and try to play more than one game at once.
game.startGamesLoop = function(id,mem,drag){
	game.id_start = id;
	game.memory_start = mem;
	game.drag_start = drag;
	// game.game_over_screen = false;
};

game.selectionIp.ipv4Button2.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "id4";
}

game.selectionIp.ipv6Button2.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "id6";
}

game.selectionMenu.memoryButton.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "port_service";
}

game.selectionDrag.ipv4Button.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "ipv4";
}

game.selectionDrag.ipv6Button.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "ipv6";
}

game.selectionDrag.tcpButton.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "tcp";
}

game.selectionDrag.udpButton.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "udp";
}

game.selectionDrag.dnsButton.onclick = function(){
	game.difficultyVisibility();
	game.actualGame = "dns";
}

game.selectionDifficulty.easyButton.onclick = function(){
	game.difficulty = "easy";
	game.preStart();
}

game.selectionDifficulty.mediumButton.onclick = function(){
	game.difficulty = "medium";
	game.preStart();
}

game.selectionDifficulty.hardButton.onclick = function(){
	game.difficulty = "hard";
	game.preStart();
}

game.preStart = function(){
	if(!game.instructions){
		game.canvasVisibility();
		game.startGame();
	}else{
		game.instruction_screen = false;
		game.canvasVisibility();
		game.startGame();
		if(game.actualGame == "id4" || game.actualGame == "id6");
		else if(game.actualGame == "port_service");
		else if(game.actualGame == "ipv4" || game.actualGame == "ipv6" || game.actualGame == "tcp" || game.actualGame == "udp" || game.actualGame == "dns");
	}
}

game.startGame = function(){
	if(game.actualGame == "id4" || game.actualGame == "id6"){
    	game.soundArray[4].pause();
		game.soundManager(1,true,"music");
		game.startGamesLoop(true,false,false);
		game.idGame.startGame(game.actualGame);
	}else if(game.actualGame == "port_service"){
    	game.soundArray[4].pause();
		game.soundManager(2,true,"music");
		game.startGamesLoop(false,true,false);
		game.memory.startGame(game.actualGame);
	}else if(game.actualGame == "ipv4" || game.actualGame == "ipv6" || game.actualGame == "tcp" || game.actualGame == "udp" || game.actualGame == "dns"){
    	game.soundArray[4].pause();
		game.soundManager(3,true,"music");
		game.startGamesLoop(false,false,true);
		game.dragAndDrop.startGame(game.actualGame);
	}
}

game.visibility = function(main,select,config,about,back,canvas,drag,difficulty,ip,cross){
	game.mainMenu.area.style.visibility = main;
	game.selectionMenu.area.style.visibility = select;
	game.selectionDrag.area.style.visibility = drag;
	game.selectionIp.area.style.visibility = ip;
	game.selectionCross.area.style.visibility = cross;
	game.configMenu.area.style.visibility = config;
	game.aboutMenu.area.style.visibility = about;
	game.backButton.style.visibility = back;
	game.selectionDifficulty.area.style.visibility = difficulty;
	game.mainMenu.canvas.style.visibility = canvas;
}