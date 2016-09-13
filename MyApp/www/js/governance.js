//Jaurgeui Crespo
//var word1h = '128';
$(document).ready(function(){
	validar();
	$('input').click(function(){
		$(this).addClass('td_input');
		})
		$('input').focusout(function(){
    		$(this).removeClass('td_input');
    	});
    	Timer();
	   	// if (StatusBar.isVisible) {
    		//StatusBar.hide();
    	// 	new kendo.mobile.Application($(document.body), { statusBarStyle: "hidden" });
    	// }
})

var word1v = 'rfc';

var word2h = 'lacnic';

var word3v = 'netmundial';

var word4h = 'ietf';
var word4v = 'ipv6';

var word5h = 'igf';
var word5v ='icann';

var word6v = 'iana';

var word7v = 'opendata';

var word8v = 'iab';

var word9v = 'wsis';

var word10h = 'caribbean';
var word10v = 'cybersecurity';

var word11v = 'ig';

var word12h = 'arin';

var word13h = 'multistakeholder';

var word14v = 'isoc';

var word15v = 'lacigf';

var punto=0;


var fin= false;

var timeLevel = 200;


function EndGame(){
  if(punto==40){
      $('#WinModal').modal('show');
			// se suman puntos segun el tiempo que tarde para ganar
			if ($('#contratiempo').text()>150) {
					punto = punto + 200;
					$('.punto').text(punto);// Imprimer en la cantidad de punto

			} else if ($('#contratiempo').text()>100&& $('#contratiempo').text()<=150) {
					punto = punto + 150;
					$('.punto').text(punto);
					console.log('suman 60 puntos');

			} else if ($('#contratiempo').text()>50&& $('#contratiempo').text()<=100) {
					punto = punto + 150;
					$('.punto').text(punto);
					console.log('suman 60 puntos');

			}
        fin=true;
        // Timer();
  }
}

function Timer(){
  //Conteo Regresivo
  var seconds_left = timeLevel;
  // var minutes_left = 0;

  var interval = setInterval(function() {

  document.getElementById('contratiempo').innerHTML =  --seconds_left;

  if (fin==false) {
  	//EndGame();
	  if (seconds_left <= 0){
	    //document.getElementById('contratiempo').innerHTML = "Se acabo el tiempo";

	    clearInterval(interval);
	   //Envia mensaje y reinicia la partida
	   //alert("Game Over!");
	   $('#LooseModal').modal('show')
	   //location.reload();
	  }
	}

  }, 1000);

}


	//Validar palabra 1 vertical
function validWord1(){
	var answer1v = $("#input-0-5").val().toLowerCase() + $("#input-1-5").val().toLowerCase() + $("#input-2-5").val().toLowerCase();
	//console.log(answer1v);
	if (answer1v == word1v){

		$("#cell-0-5").css("background-color","#17DB00");
		$("#cell-1-5").css("background-color","#17DB00");
		$("#cell-2-5").css("background-color","#17DB00");
		$("#input-0-5").attr("disabled","disabled");
		$("#input-1-5").attr("disabled","disabled");
		$("#input-2-5").attr("disabled","disabled");
		punto= punto + 2;
		$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer1v == ""){

	}
	else if (answer1v != word1v){
		$("#cell-0-5").css("background-color","#f00");
		$("#cell-1-5").css("background-color","#f00");
		$("#cell-2-5").css("background-color","#f00");
	}

}
function validWord2(){
	//Validar palabra 2 horizontal
	var answer2h = $("#input-2-0").val().toLowerCase() + $("#input-2-1").val().toLowerCase() + $("#input-2-2").val().toLowerCase() + $("#input-2-3").val().toLowerCase() + $("#input-2-4").val().toLowerCase() + $("#input-2-5").val().toLowerCase();
	if (answer2h == word2h){
		$("#cell-2-0").css("background-color","#17DB00");
		$("#cell-2-1").css("background-color","#17DB00");
		$("#cell-2-2").css("background-color","#17DB00");
		$("#cell-2-3").css("background-color","#17DB00");
		$("#cell-2-4").css("background-color","#17DB00");
		$("#cell-2-5").css("background-color","#17DB00");
		$("#input-2-0").attr("disabled","disabled");
		$("#input-2-1").attr("disabled","disabled");
		$("#input-2-2").attr("disabled","disabled");
		$("#input-2-3").attr("disabled","disabled");
		$("#input-2-4").attr("disabled","disabled");
		$("#input-2-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();


	}
	else if (answer2h == ""){

	}
	else if (answer2h != word2h){
		$("#cell-2-0").css("background-color","#f00");
		$("#cell-2-1").css("background-color","#f00");
		$("#cell-2-2").css("background-color","#f00");
		$("#cell-2-3").css("background-color","#f00");
		$("#cell-2-4").css("background-color","#f00");
		$("#cell-2-5").css("background-color","#f00");

	}
}
function validWord3(){
	//Validar palabra 3 vertical
	var answer3v = $("#input-2-3").val().toLowerCase() + $("#input-3-3").val().toLowerCase() + $("#input-4-3").val().toLowerCase() + $("#input-5-3").val().toLowerCase() + $("#input-6-3").val().toLowerCase() + $("#input-7-3").val().toLowerCase() + $("#input-8-3").val().toLowerCase() + $("#input-9-3").val().toLowerCase() + $("#input-10-3").val().toLowerCase() + $("#input-11-3").val().toLowerCase();
	if (answer3v == word3v){
		$("#cell-2-3").css("background-color","#17DB00");
		$("#cell-3-3").css("background-color","#17DB00");
		$("#cell-4-3").css("background-color","#17DB00");
		$("#cell-5-3").css("background-color","#17DB00");
		$("#cell-6-3").css("background-color","#17DB00");
		$("#cell-7-3").css("background-color","#17DB00");
		$("#cell-8-3").css("background-color","#17DB00");
		$("#cell-9-3").css("background-color","#17DB00");
		$("#cell-10-3").css("background-color","#17DB00");
		$("#cell-11-3").css("background-color","#17DB00");
		$("#input-2-3").attr("disabled","disabled");
		$("#input-3-3").attr("disabled","disabled");
		$("#input-4-3").attr("disabled","disabled");
		$("#input-5-3").attr("disabled","disabled");
		$("#input-6-3").attr("disabled","disabled");
		$("#input-7-3").attr("disabled","disabled");
		$("#input-8-3").attr("disabled","disabled");
		$("#input-9-3").attr("disabled","disabled");
		$("#input-10-3").attr("disabled","disabled");
		$("#input-11-3").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer3v == ""){

	}
	else if (answer3v != word3v){
		$("#cell-2-3").css("background-color","#f00");
		$("#cell-3-3").css("background-color","#f00");
		$("#cell-4-3").css("background-color","#f00");
		$("#cell-5-3").css("background-color","#f00");
		$("#cell-6-3").css("background-color","#f00");
		$("#cell-7-3").css("background-color","#f00");
		$("#cell-8-3").css("background-color","#f00");
		$("#cell-9-3").css("background-color","#f00");
		$("#cell-10-3").css("background-color","#f00");
		$("#cell-11-3").css("background-color","#f00");
	}

}
function validWord4h(){
	//Validar palabra horizontal
	var answer4h = $("#input-4-1").val().toLowerCase() + $("#input-4-2").val().toLowerCase() + $("#input-4-3").val().toLowerCase() + $("#input-4-4").val().toLowerCase();
	if (answer4h == word4h){
		console.log(answer4h);
		$("#cell-4-1").css("background-color","#17DB00");
		$("#cell-4-2").css("background-color","#17DB00");
		$("#cell-4-3").css("background-color","#17DB00");
		$("#cell-4-4").css("background-color","#17DB00");
		$("#input-4-1").attr("disabled","disabled");
		$("#input-4-2").attr("disabled","disabled");
		$("#input-4-3").attr("disabled","disabled");
		$("#input-4-4").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer4h == ""){

	}
	else if (answer4h != word4h){
		$("#cell-4-1").css("background-color","#f00");
		$("#cell-4-2").css("background-color","#f00");
		$("#cell-4-3").css("background-color","#f00");
		$("#cell-4-4").css("background-color","#f00");

	}


	//Validar palabra 4 vertical
	// var answer4v = $("#input-4-1").val().toLowerCase() + $("#input-5-1").val().toLowerCase() + $("#input-6-1").val().toLowerCase() + $("#input-7-1").val().toLowerCase();
	// if (answer4v == word4v){
	// 	console.log(word4v);
	// 	$("#cell-4-1").css("background-color","#17DB00");
	// 	$("#cell-5-1").css("background-color","#17DB00");
	// 	$("#cell-6-1").css("background-color","#17DB00");
	// 	$("#cell-7-1").css("background-color","#17DB00");
	// 	$("#input-4-1").attr("disabled","disabled");
	// 	$("#input-5-1").attr("disabled","disabled");
	// 	$("#input-6-1").attr("disabled","disabled");
	// 	$("#input-7-1").attr("disabled","disabled");
	// 	punto= punto + 2;
	// 					$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();

	// }
	// else if (answer4v == ""){

	// }
	// else if (answer4v != word4v){
	// 	$("#cell-4-1").css("background-color","#f00");
	// 	$("#cell-5-1").css("background-color","#f00");
	// 	$("#cell-6-1").css("background-color","#f00");
	// 	$("#cell-7-1").css("background-color","#f00");

	// }
}
function validWord4v(){
	var answer4v = $("#input-4-1").val().toLowerCase() + $("#input-5-1").val().toLowerCase() + $("#input-6-1").val().toLowerCase() + $("#input-7-1").val().toLowerCase();
	if (answer4v == word4v){
		console.log(word4v);
		$("#cell-4-1").css("background-color","#17DB00");
		$("#cell-5-1").css("background-color","#17DB00");
		$("#cell-6-1").css("background-color","#17DB00");
		$("#cell-7-1").css("background-color","#17DB00");
		$("#input-4-1").attr("disabled","disabled");
		$("#input-5-1").attr("disabled","disabled");
		$("#input-6-1").attr("disabled","disabled");
		$("#input-7-1").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();

	}
	else if (answer4v == ""){

	}
	else if (answer4v != word4v){
		$("#cell-4-1").css("background-color","#f00");
		$("#cell-5-1").css("background-color","#f00");
		$("#cell-6-1").css("background-color","#f00");
		$("#cell-7-1").css("background-color","#f00");

	}
}
function validWord5h(){
	//Validar palabra 5 horizontal
	var answer5h = $("#input-4-18").val().toLowerCase() + $("#input-4-19").val().toLowerCase() + $("#input-4-20").val().toLowerCase();
	if (answer5h == word5h){
		$("#cell-4-18").css("background-color","#17DB00");
		$("#cell-4-19").css("background-color","#17DB00");
		$("#cell-4-20").css("background-color","#17DB00");
		$("#input-4-18").attr("disabled","disabled");
		$("#input-4-19").attr("disabled","disabled");
		$("#input-4-20").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer5h == ""){

	}
	else if (answer5h != word5h){
		$("#cell-4-18").css("background-color","#f00");
		$("#cell-4-19").css("background-color","#f00");
		$("#cell-4-20").css("background-color","#f00");
	}
}
function validWord5v(){
	//Validar palabra 5 Vertical
	var answer5v = $("#input-4-18").val().toLowerCase() + $("#input-5-18").val().toLowerCase() + $("#input-6-18").val().toLowerCase() + $("#input-7-18").val().toLowerCase() + $("#input-8-18").val().toLowerCase();
	if (answer5v == word5v){
		$("#cell-4-18").css("background-color","#17DB00");
		$("#cell-5-18").css("background-color","#17DB00");
		$("#cell-6-18").css("background-color","#17DB00");
		$("#cell-7-18").css("background-color","#17DB00");
		$("#cell-8-18").css("background-color","#17DB00");
		$("#input-4-18").attr("disabled","disabled");
		$("#input-5-18").attr("disabled","disabled");
		$("#input-6-18").attr("disabled","disabled");
		$("#input-7-18").attr("disabled","disabled");
		$("#input-8-18").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer5v == ""){

	}
	else if (answer5v != word5v){
		$("#cell-4-18").css("background-color","#f00");
		$("#cell-5-18").css("background-color","#f00");
		$("#cell-6-18").css("background-color","#f00");
		$("#cell-7-18").css("background-color","#f00");
		$("#cell-8-18").css("background-color","#f00");
	}
}

function validWord6(){
	//Validar palabra 6 vertical
	var answer6v = $("#input-5-11").val().toLowerCase() + $("#input-6-11").val().toLowerCase() + $("#input-7-11").val().toLowerCase() + $("#input-8-11").val().toLowerCase();
	if (answer6v == word6v){
		$("#cell-5-11").css("background-color","#17DB00");
		$("#cell-6-11").css("background-color","#17DB00");
		$("#cell-7-11").css("background-color","#17DB00");
		$("#cell-8-11").css("background-color","#17DB00");
		$("#input-5-11").attr("disabled","disabled");
		$("#input-6-11").attr("disabled","disabled");
		$("#input-7-11").attr("disabled","disabled");
		$("#input-8-11").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer6v == ""){

	}
	else if (answer6v != word6v){
		$("#cell-5-11").css("background-color","#f00");
		$("#cell-6-11").css("background-color","#f00");
		$("#cell-7-11").css("background-color","#f00");
		$("#cell-8-11").css("background-color","#f00");
	}
}

function validWord7(){
	//Validar palabra 7 vertical
	var answer7v = $("#input-6-8").val().toLowerCase() + $("#input-7-8").val().toLowerCase() + $("#input-8-8").val().toLowerCase() + $("#input-9-8").val().toLowerCase() + $("#input-10-8").val().toLowerCase() + $("#input-11-8").val().toLowerCase() + $("#input-12-8").val().toLowerCase() + $("#input-13-8").val().toLowerCase();
	if (answer7v == word7v){
		$("#cell-6-8").css("background-color","#17DB00");
		$("#cell-7-8").css("background-color","#17DB00");
		$("#cell-8-8").css("background-color","#17DB00");
		$("#cell-9-8").css("background-color","#17DB00");
		$("#cell-10-8").css("background-color","#17DB00");
		$("#cell-11-8").css("background-color","#17DB00");
		$("#cell-12-8").css("background-color","#17DB00");
		$("#cell-13-8").css("background-color","#17DB00");

		$("#input-6-8").attr("disabled","disabled");
		$("#input-7-8").attr("disabled","disabled");
		$("#input-8-8").attr("disabled","disabled");
		$("#input-9-8").attr("disabled","disabled");
		$("#input-10-8").attr("disabled","disabled");
		$("#input-11-8").attr("disabled","disabled");
		$("#input-12-8").attr("disabled","disabled");
		$("#input-13-8").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer7v == ""){

	}
	else if (answer7v != word7v){
		$("#cell-6-8").css("background-color","#f00");
		$("#cell-7-8").css("background-color","#f00");
		$("#cell-8-8").css("background-color","#f00");
		$("#cell-9-8").css("background-color","#f00");
		$("#cell-10-8").css("background-color","#f00");
		$("#cell-11-8").css("background-color","#f00");
		$("#cell-12-8").css("background-color","#f00");
		$("#cell-13-8").css("background-color","#f00");
	}
}
function validWord8(){
	//Validar palabra 8 vertical
	var answer8v = $("#input-6-15").val().toLowerCase() + $("#input-7-15").val().toLowerCase() + $("#input-8-15").val().toLowerCase();
	if (answer8v == word8v){
		$("#cell-6-15").css("background-color","#17DB00");
		$("#cell-7-15").css("background-color","#17DB00");
		$("#cell-8-15").css("background-color","#17DB00");
		$("#input-6-15").attr("disabled","disabled");
		$("#input-7-15").attr("disabled","disabled");
		$("#input-8-15").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer8v == ""){

	}
	else if (answer8v != word8v){
		$("#cell-6-15").css("background-color","#f00");
		$("#cell-7-15").css("background-color","#f00");
		$("#cell-8-15").css("background-color","#f00");
	}
}
function validWord9(){
	//Validar palabra 9 vertical
	var answer9v = $("#input-8-6").val().toLowerCase() + $("#input-9-6").val().toLowerCase() + $("#input-10-6").val().toLowerCase() + $("#input-11-6").val().toLowerCase();
	if (answer9v == word9v){
		$("#cell-8-6").css("background-color","#17DB00");
		$("#cell-9-6").css("background-color","#17DB00");
		$("#cell-10-6").css("background-color","#17DB00");
		$("#cell-11-6").css("background-color","#17DB00");
		$("#input-8-6").attr("disabled","disabled");
		$("#input-9-6").attr("disabled","disabled");
		$("#input-10-6").attr("disabled","disabled");
		$("#input-11-6").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();

	}
	else if (answer9v == ""){

	}
	else if (answer9v != word9v){
		$("#cell-8-6 ").css("background-color","#f00");
		$("#cell-9-6 ").css("background-color","#f00");
		$("#cell-10-6").css("background-color","#f00");
		$("#cell-11-6").css("background-color","#f00");
	}
}
function validWord10h(){
	//Validar palabra 10 horizontal
	var answer10h = $("#input-8-10").val().toLowerCase() + $("#input-8-11").val().toLowerCase() + $("#input-8-12").val().toLowerCase() + $("#input-8-13").val().toLowerCase() + $("#input-8-14").val().toLowerCase() + $("#input-8-15").val().toLowerCase() + $("#input-8-16").val().toLowerCase() + $("#input-8-17").val().toLowerCase() + $("#input-8-18").val().toLowerCase();
	if (answer10h == word10h){
		$("#cell-8-10").css("background-color","#17DB00");
		$("#cell-8-11").css("background-color","#17DB00");
		$("#cell-8-12").css("background-color","#17DB00");
		$("#cell-8-13").css("background-color","#17DB00");
		$("#cell-8-14").css("background-color","#17DB00");
		$("#cell-8-15").css("background-color","#17DB00");
		$("#cell-8-16").css("background-color","#17DB00");
		$("#cell-8-17").css("background-color","#17DB00");
		$("#cell-8-18").css("background-color","#17DB00");
		$("#input-8-10").attr("disabled","disabled");
		$("#input-8-11").attr("disabled","disabled");
		$("#input-8-12").attr("disabled","disabled");
		$("#input-8-13").attr("disabled","disabled");
		$("#input-8-14").attr("disabled","disabled");
		$("#input-8-15").attr("disabled","disabled");
		$("#input-8-16").attr("disabled","disabled");
		$("#input-8-17").attr("disabled","disabled");
		$("#input-8-18").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer10h == ""){

	}
	else if (answer10h != word10h){
		$("#cell-8-10").css("background-color","#f00");
		$("#cell-8-11").css("background-color","#f00");
		$("#cell-8-12").css("background-color","#f00");
		$("#cell-8-13").css("background-color","#f00");
		$("#cell-8-14").css("background-color","#f00");
		$("#cell-8-15").css("background-color","#f00");
		$("#cell-8-16").css("background-color","#f00");
		$("#cell-8-17").css("background-color","#f00");
		$("#cell-8-18").css("background-color","#f00");

	}
}

function validWord10v(){
	//Validar palabra 10 vertical
	var answer10v = $("#input-8-10").val().toLowerCase() + $("#input-9-10").val().toLowerCase() + $("#input-10-10").val().toLowerCase() + $("#input-11-10").val().toLowerCase() + $("#input-12-10").val().toLowerCase() + $("#input-13-10").val().toLowerCase() + $("#input-14-10").val().toLowerCase() + $("#input-15-10").val().toLowerCase() + $("#input-16-10").val().toLowerCase() + $("#input-17-10").val().toLowerCase() + $("#input-18-10").val().toLowerCase() + $("#input-19-10").val().toLowerCase() + $("#input-20-10").val().toLowerCase();
	if (answer10v == word10v){
		$("#cell-8-10").css("background-color","#17DB00");
		$("#cell-9-10").css("background-color","#17DB00");
		$("#cell-10-10").css("background-color","#17DB00");
		$("#cell-11-10").css("background-color","#17DB00");
		$("#cell-12-10").css("background-color","#17DB00");
		$("#cell-13-10").css("background-color","#17DB00");
		$("#cell-14-10").css("background-color","#17DB00");
		$("#cell-15-10").css("background-color","#17DB00");
		$("#cell-16-10").css("background-color","#17DB00");
		$("#cell-17-10").css("background-color","#17DB00");
		$("#cell-18-10").css("background-color","#17DB00");
		$("#cell-19-10").css("background-color","#17DB00");
		$("#cell-20-10").css("background-color","#17DB00");
		$("#input-8-10").attr("disabled","disabled");
		$("#input-9-10").attr("disabled","disabled");
		$("#input-10-10").attr("disabled","disabled");
		$("#input-11-10").attr("disabled","disabled");
		$("#input-12-10").attr("disabled","disabled");
		$("#input-13-10").attr("disabled","disabled");
		$("#input-14-10").attr("disabled","disabled");
		$("#input-15-10").attr("disabled","disabled");
		$("#input-16-10").attr("disabled","disabled");
		$("#input-17-10").attr("disabled","disabled");
		$("#input-18-10").attr("disabled","disabled");
		$("#input-19-10").attr("disabled","disabled");
		$("#input-20-10").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer10v == ""){

	}
	else if (answer10v != word10v){
		$("#cell-8-10").css("background-color","#f00");
		$("#cell-9-10").css("background-color","#f00");
		$("#cell-10-10").css("background-color","#f00");
		$("#cell-11-10").css("background-color","#f00");
		$("#cell-12-10").css("background-color","#f00");
		$("#cell-13-10").css("background-color","#f00");
		$("#cell-14-10").css("background-color","#f00");
		$("#cell-15-10").css("background-color","#f00");
		$("#cell-16-10").css("background-color","#f00");
		$("#cell-17-10").css("background-color","#f00");
		$("#cell-18-10").css("background-color","#f00");
		$("#cell-19-10").css("background-color","#f00");
		$("#cell-20-10").css("background-color","#f00");

	}
}
function validWord11(){
	//Validar palabra 11 vertical
	var answer11v = $("#input-8-13").val().toLowerCase() + $("#input-9-13").val().toLowerCase();
	if (answer11v == word11v){
		$("#cell-8-13").css("background-color","#17DB00");
		$("#cell-9-13").css("background-color","#17DB00");
		$("#input-8-13").attr("disabled","disabled");
		$("#input-9-13").attr("disabled","disabled");
	}
	else if (answer11v == ""){

	}
	else if (answer11v != word11v){
		$("#cell-8-13").css("background-color","#f00");
		$("#cell-9-13").css("background-color","#f00");
	}
}
function validWord12(){
	//Validar palabra 12 horizontal
	var answer12h = $("#input-9-1").val().toLowerCase() + $("#input-9-2").val().toLowerCase() + $("#input-9-3").val().toLowerCase() + $("#input-9-4").val().toLowerCase();
	if (answer12h == word12h){
		$("#cell-9-1").css("background-color","#17DB00");
		$("#cell-9-2").css("background-color","#17DB00");
		$("#cell-9-3").css("background-color","#17DB00");
		$("#cell-9-4").css("background-color","#17DB00");
		$("#input-9-1").attr("disabled","disabled");
		$("#input-9-2").attr("disabled","disabled");
		$("#input-9-3").attr("disabled","disabled");
		$("#input-9-4").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer12h == ""){

	}
	else if (answer12h != word12h){
		$("#cell-9-1").css("background-color","#f00");
		$("#cell-9-2").css("background-color","#f00");
		$("#cell-9-3").css("background-color","#f00");
		$("#cell-9-4").css("background-color","#f00");
	}
}
function validWord13(){
	//Validar palabra 13 horizontal
	var answer13h = $("#input-11-1").val().toLowerCase() + $("#input-11-2").val().toLowerCase() + $("#input-11-3").val().toLowerCase() + $("#input-11-4").val().toLowerCase() + $("#input-11-5").val().toLowerCase() + $("#input-11-6").val().toLowerCase() + $("#input-11-7").val().toLowerCase() + $("#input-11-8").val().toLowerCase() + $("#input-11-9").val().toLowerCase() + $("#input-11-10").val().toLowerCase() + $("#input-11-11").val().toLowerCase() + $("#input-11-12").val().toLowerCase() + $("#input-11-13").val().toLowerCase() + $("#input-11-14").val().toLowerCase() + $("#input-11-15").val().toLowerCase() + $("#input-11-16").val().toLowerCase();
	if (answer13h == word13h){
		$("#cell-11-1").css("background-color","#17DB00");
		$("#cell-11-2").css("background-color","#17DB00");
		$("#cell-11-3").css("background-color","#17DB00");
		$("#cell-11-4").css("background-color","#17DB00");
		$("#cell-11-5").css("background-color","#17DB00");
		$("#cell-11-6").css("background-color","#17DB00");
		$("#cell-11-7").css("background-color","#17DB00");
		$("#cell-11-8").css("background-color","#17DB00");
		$("#cell-11-9").css("background-color","#17DB00");
		$("#cell-11-10").css("background-color","#17DB00");
		$("#cell-11-11").css("background-color","#17DB00");
		$("#cell-11-12").css("background-color","#17DB00");
		$("#cell-11-13").css("background-color","#17DB00");
		$("#cell-11-14").css("background-color","#17DB00");
		$("#cell-11-15").css("background-color","#17DB00");
		$("#cell-11-16").css("background-color","#17DB00");
		$("#input-11-1").attr("disabled","disabled");
		$("#input-11-2").attr("disabled","disabled");
		$("#input-11-3").attr("disabled","disabled");
		$("#input-11-4").attr("disabled","disabled");
		$("#input-11-5").attr("disabled","disabled");
		$("#input-11-6").attr("disabled","disabled");
		$("#input-11-7").attr("disabled","disabled");
		$("#input-11-8").attr("disabled","disabled");
		$("#input-11-9").attr("disabled","disabled");
		$("#input-13-10").attr("disabled","disabled");
		$("#input-11-11").attr("disabled","disabled");
		$("#input-11-12").attr("disabled","disabled");
		$("#input-11-13").attr("disabled","disabled");
		$("#input-11-14").attr("disabled","disabled");
		$("#input-11-15").attr("disabled","disabled");
		$("#input-11-16").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();

	}
	else if (answer13h == ""){

	}
	else if (answer13h != word13h){
		$("#cell-11-1").css("background-color","#f00");
		$("#cell-11-2").css("background-color","#f00");
		$("#cell-11-3").css("background-color","#f00");
		$("#cell-11-4").css("background-color","#f00");
		$("#cell-11-5").css("background-color","#f00");
		$("#cell-11-6").css("background-color","#f00");
		$("#cell-11-7").css("background-color","#f00");
		$("#cell-11-8").css("background-color","#f00");
		$("#cell-11-9").css("background-color","#f00");
		$("#cell-11-10").css("background-color","#f00");
		$("#cell-11-11").css("background-color","#f00");
		$("#cell-11-12").css("background-color","#f00");
		$("#cell-11-13").css("background-color","#f00");
		$("#cell-11-14").css("background-color","#f00");
		$("#cell-11-15").css("background-color","#f00");
		$("#cell-11-16").css("background-color","#f00");

	}
}
function validWord14(){
	//Validar palabra 14 vertical
	var answer14v = $("#input-11-5").val().toLowerCase() + $("#input-12-5").val().toLowerCase() + $("#input-13-5").val().toLowerCase() + $("#input-14-5").val().toLowerCase();
	if (answer14v == word14v){
		$("#cell-11-5").css("background-color","#17DB00");
		$("#cell-12-5").css("background-color","#17DB00");
		$("#cell-13-5").css("background-color","#17DB00");
		$("#cell-14-5").css("background-color","#17DB00");
		$("#input-11-5").attr("disabled","disabled");
		$("#input-12-5").attr("disabled","disabled");
		$("#input-13-5").attr("disabled","disabled");
		$("#input-14-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer14v == ""){

	}
	else if (answer14v != word14v){
		$("#cell-11-5").css("background-color","#f00");
		$("#cell-12-5").css("background-color","#f00");
		$("#cell-13-5").css("background-color","#f00");
		$("#cell-14-5").css("background-color","#f00");
	}
}
function validWord15(){
	//Validar palabra 15 vertical
	var answer15v = $("#input-11-13").val().toLowerCase() + $("#input-12-13").val().toLowerCase() + $("#input-13-13").val().toLowerCase() + $("#input-14-13").val().toLowerCase() + $("#input-15-13").val().toLowerCase() + $("#input-16-13").val().toLowerCase();
	if (answer15v == word15v){
		$("#cell-11-13").css("background-color","#17DB00");
		$("#cell-12-13").css("background-color","#17DB00");
		$("#cell-13-13").css("background-color","#17DB00");
		$("#cell-14-13").css("background-color","#17DB00");
		$("#cell-15-13").css("background-color","#17DB00");
		$("#cell-16-13").css("background-color","#17DB00");
		$("#input-11-13").attr("disabled","disabled");
		$("#input-12-13").attr("disabled","disabled");
		$("#input-13-13").attr("disabled","disabled");
		$("#input-14-13").attr("disabled","disabled");
		$("#input-15-13").attr("disabled","disabled");
		$("#input-16-13").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer15v == ""){

	}
	else if (answer15v != word15v){
		$("#cell-11-13").css("background-color","#f00");
		$("#cell-12-13").css("background-color","#f00");
		$("#cell-13-13").css("background-color","#f00");
		$("#cell-14-13").css("background-color","#f00");
		$("#cell-15-13").css("background-color","#f00");
		$("#cell-16-13").css("background-color","#f00");
	}
}

/********************************************************/
//	  		Funcion para cambiar la posicion del cursor//
/********************************************************/
function validar(){
	$('#input-0-5').on('keyup',function() {
	    $('#input-1-5').focus();
	});
	$('#input-1-5').on('keyup',function() {
	    $('#input-2-5').focus();
	});
	$('#input-2-5').on('keyup',function() {
		if($('#input-2-0').val() == ''){
			$('#input-2-0').focus();
			ShowQuestion(2);
		}
	});
	
	//Palabra 2 Horizontal

	$('#input-2-0').on('keyup',function() {
	    $('#input-2-1').focus();
	    ShowQuestion(2);
	});
	$('#input-2-1').on('keyup',function() {
	    $('#input-2-2').focus();
	    ShowQuestion(2);
	});

	$('#input-2-2').on('keyup',function() {
		if($('#input-2-3').val() == ''){
			$('#input-2-3').focus();
		}
		else{
			$('#input-2-4').focus();
		}
	});

	$('#input-2-3').on('keyup',function() {
		if($('#input-2-3').val() == ''){
			$('#input-2-3').focus();
		}
		else{
			$('#input-2-4').focus();

		}
	});

	$('#input-2-4').on('keyup',function() {
		if ($('#input-2-5').val() == '') {
	    	$('#input-2-5').focus();
	    }
	    else{
	    	$('#input-3-3').focus();
	    	ShowQuestion(3);
	    }

	});

	$('#input-2-5').on('keyup',function() {
		if($('#input-2-3').val() != ''){
			$('#input-3-3').focus();
			ShowQuestion(3);
		}
	});


	//Pregunta 3
	$('#input-2-3').on('keyup',function() {
		if($('#input-2-2').val() == ''){
			$('#input-3-3').focus();
		}
	});

	$('#input-3-3').on('keyup',function() {
		if($('#input-4-3').val() == ''){
			$('#input-4-3').focus();
		}else{
			$('#input-5-3').focus();
		}

	});
	$('#input-4-3').on('keyup',function() {
		if($('#input-4-2').val() == ''){
			$('#input-5-3').focus();
		}

	 });

	$('#input-5-3').on('keyup',function() {
	    $('#input-6-3').focus();
	});
	$('#input-6-3').on('keyup',function() {
	    $('#input-7-3').focus();
	});
	$('#input-7-3').on('keyup',function() {
	    $('#input-8-3').focus();
	});

	$('#input-8-3').on('keyup',function() {
		if($('#input-9-3').val() == ''){
			$('#input-9-3').focus();

		}else{
			$('#input-10-3').focus();
		}
	});
	$('#input-9-3').on('keyup',function() {
		if($('#input-8-3').val() != '' && $('#input-10-3').val() == ''){
			$('#input-10-3').focus();
		}
	});
	$('#input-10-3').on('keyup',function() {
	    $('#input-11-3').focus();
	});
	$('#input-11-3').on('keyup',function() {
		if($('#input-11-2').val() == ''){
			$('#input-4-1').focus();
			ShowQuestion(4);
		}

	});




	//Pregunta 4 Horizontal
	$('#input-4-1').on('keyup',function() {
	    $('#input-4-2').focus();
	});

	// if (Question_4_3 !=1 ) {
		// console.log(Question_4_3 +' holaaaaaa');
	$('#input-4-2').on('keyup',function() {
		if($('#input-4-3').val() == ''){
			$('#input-4-3').focus();
		}
		else{
			$('#input-4-4').focus();
		}
	});
	$('#input-4-3').on('keyup',function() {
		if($('#input-3-3').val() == ''){
			$('#input-4-4').focus();
		}

	});
	$('#input-4-4').on('keyup',function() {
		if($('#input-5-1').val() == ''){
			$('#input-5-1').focus();
		}else{
			$('#input-4-18').focus();
			ShowQuestion(5);
		}

	});

	//Pregunta 4 Vertical
	$('#input-5-1').on('keyup',function() {
	    $('#input-6-1').focus();
	});
	$('#input-6-1').on('keyup',function() {
	    $('#input-7-1').focus();
	});
	$('#input-7-1').on('keyup',function() {
		if($('#input-4-2').val() == ''){
			$('#input-4-2').focus();
		}else{
			$('#input-4-18').focus();
			ShowQuestion(5);
		}

	});

	//Pregunta 5 Horizontal
	$('#input-4-18').on('keyup',function() {
	    $('#input-4-19').focus();
	});
	$('#input-4-19').on('keyup',function() {
	    $('#input-4-20').focus();
	});
	$('#input-4-20').on('keyup',function() {
		if($('#input-5-18').val() == ''){
			$('#input-5-18').focus();
		}
		else{
			$('#input-5-11').focus();
			ShowQuestion(6);
		}
	});

	//Pregunta 5 Vertical
	$('#input-5-18').on('keyup',function() {
	    $('#input-6-18').focus();
	});
	$('#input-6-18').on('keyup',function() {
	    $('#input-7-18').focus();
	});
	$('#input-7-18').on('keyup',function() {
	    $('#input-8-18').focus();
	});
	$('#input-8-18').on('keyup',function() {
		if($('#input-7-18').val() !='' && $('#input-4-20').val() == '' && $('#input-4-18').val() == ''){


			$('#input-4-18').focus();


		}
		else if($('#input-4-20').val() == '' && $('#input-4-18').val() != ''){
			$('#input-4-18').focus();
		}
		else if($('#input-7-18').val() !='' && $('#input-4-20').val() != '' && $('#input-4-18').val() != ''){
			$('#input-5-11').focus();//**********
			ShowQuestion(6);
		}
	});


	//Pregunta 6 Vertical
	$('#input-5-11').on('keyup',function() {
	    $('#input-6-11').focus();
	});
	$('#input-6-11').on('keyup',function() {
	    $('#input-7-11').focus();
	});
	$('#input-7-11').on('keyup',function() {
	    $('#input-8-11').focus();
	});
	$('#input-8-11').on('keyup',function() {
		if($('#input-7-11').val() != ''){
			$('#input-6-8').focus();
			ShowQuestion(7);
		}
		// else{
		// 	$('#input-5-11').focus();
		// }
	});



	//Pregunta 7 Vertical
	$('#input-6-8').on('keyup',function() {
	    $('#input-7-8').focus();
	});
	$('#input-7-8').on('keyup',function() {
	    $('#input-8-8').focus();
	});
	$('#input-8-8').on('keyup',function() {
	    $('#input-9-8').focus();
	});
	$('#input-9-8').on('keyup',function() {
	    $('#input-10-8').focus();
	});

	$('#input-10-8').on('keyup',function() {
		if($('#input-11-8').val() == '' && $('#input-12-8').val() == '' && $('#input-10-8').val() != ''){//**********************-----
			$('#input-11-8').focus();


		}
		if ($('#input-11-8').val()	!='') {
			$('#input-12-8').focus();
		}
	});
	$('#input-11-8').on('keyup',function() {
		if($('#input-10-8').val() != '' && $('#input-12-8').val() == ''){
			$('#input-12-8').focus();
		}
	});
	$('#input-12-8').on('keyup',function() {
	    $('#input-13-8').focus();
	});
	$('#input-13-8').on('keyup',function() {
	    $('#input-6-15').focus();
	    ShowQuestion(8);
	});


	//Pregunta 8 Vertical
	$('#input-6-15').on('keyup',function() {
	    $('#input-7-15').focus();
	});
	$('#input-7-15').on('keyup',function() {
	    $('#input-8-15').focus();
	});
	$('#input-8-15').on('keyup',function() {
		if($('#input-8-14').val() == ''){
			$('#input-8-6').focus();
			ShowQuestion(9);
		}
	});

	//Preguta 9 Vertical
	$('#input-8-6').on('keyup',function() {
	    $('#input-9-6').focus();
	});
	$('#input-9-6').on('keyup',function() {
	    $('#input-10-6').focus();
	});
	$('#input-10-6').on('keyup',function() {
		if($('#input-11-6').val() == ''){
			$('#input-11-6').focus();
		}
		else{
			$('#input-8-10').focus();
		}
	});
	$('#input-11-6').on('keyup',function() {
		if($('#input-11-4').val() == ''){
			$('#input-8-10').focus();
			ShowQuestion(10);
		}
	});


	//Pregunta 10 Vertical
	// $('#input-8-10').on('keyup',function() {
	//     $('#input-9-10').focus();
	// });
	$('#input-9-10').on('keyup',function() {
	    $('#input-10-10').focus();
	});
	// $('#input-10-10').on('keyup',function() {
	//     $('#input-11-10').focus();
	// });
	// $('#input-11-10').on('keyup',function() {
	//     $('#input-12-10').focus();
	// });
	$('#input-10-10').on('keyup',function() {
		if($('#input-11-10').val() == ''){
			$('#input-11-10').focus();
		}else{
			$('#input-12-10').focus();
		}

	});
	$('#input-11-10').on('keyup',function() {
		if($('#input-10-10').val() != ''){
			$('#input-12-10').focus();
		}
	});
	$('#input-12-10').on('keyup',function() {
	    $('#input-13-10').focus();
	});
	$('#input-13-10').on('keyup',function() {
	    $('#input-14-10').focus();
	});
	$('#input-14-10').on('keyup',function() {
	    $('#input-15-10').focus();
	});
	$('#input-15-10').on('keyup',function() {
	    $('#input-16-10').focus();
	});
	$('#input-16-10').on('keyup',function() {
	    $('#input-17-10').focus();
	});
	$('#input-17-10').on('keyup',function() {
	    $('#input-18-10').focus();
	});
	$('#input-18-10').on('keyup',function() {
	    $('#input-19-10').focus();
	});
	$('#input-19-10').on('keyup',function() {
	    $('#input-20-10').focus();
	});
	// $('#input-20-10').on('keyup',function() {
	//     $('#input-9-13').focus();
	// });
	$('#input-20-10').on('keyup',function() {
		if($('#input-8-12').val() == '' && $('#input-8-11').val() == ''){

			$('#input-8-11').focus();
		}else if($('#input-8-13').val() == ''){
			$('#input-8-13').focus();
			ShowQuestion(11);

		}else if($('#input-8-13').val() != ''){
			$('#input-9-13').focus();
			ShowQuestion(11);
		}

	});

	//Pregunta 10 horizontal
	$('#input-8-10').on('keyup',function() {
		if($('#input-8-11').val() == ''){
			$('#input-8-11').focus();

		}else{
			$('#input-8-12').focus();
		}
	});
	$('#input-8-11').on('keyup',function() {
		if($('#input-8-10').val() != ''){
			$('#input-8-12').focus();
		}
	});
	$('#input-8-12').on('keyup',function() {
	    $('#input-8-13').focus();
	});
	$('#input-8-13').on('keyup',function() {
		if($('#input-8-12').val() != ''){
			$('#input-8-14').focus();
		}
	});
	$('#input-8-14').on('keyup',function() {

	    $('#input-8-15').focus();
	});
	$('#input-8-14').on('keyup',function() {
		if($('#input-8-15').val() == ''){
			$('#input-8-15').focus();

		} else{
			$('#input-8-16').focus();
		}
	});
	$('#input-8-15').on('keyup',function() {
		if($('#input-8-14').val() != ''){
			$('#input-8-16').focus();
		}
	});
	$('#input-8-16').on('keyup',function() {
	    $('#input-8-17').focus();
	});

	$('#input-8-17').on('keyup',function() {
		if($('#input-8-18').val() == ''){
			$('#input-8-18').focus();

		}else if($('#input-8-18').val() != ''){
			$('#input-9-10').focus();
		}
	});

	$('#input-8-18').on('keyup',function() {
		if($('#input-8-17').val() != '' && $('#input-9-10').val() == ''){
			$('#input-9-10').focus();

		}else if($('#input-20-10').val() != ''){
			$('#input-9-13').focus();
		}
	});





	//Pregunta 11 Vertical
	$('#input-8-13').on('keyup',function() {
		if($('#input-8-12').val() == '' && $('#input-9-10').val() == ''){
			$('#input-9-13').focus();
		}
	});
	$('#input-9-13').on('keyup',function() {
	    $('#input-9-1').focus();
	});
	//Pregunta 12 Vertical
	$('#input-9-1').on('keyup',function() {
	    $('#input-9-2').focus();
	});
	// $('#input-9-2').on('keyup',function() {
	//     $('#input-9-4').focus();
	// });

	$('#input-9-2').on('keyup',function() {
		if($('#input-9-3').val() == ''){
			$('#input-9-3').focus();

		}else{
			$('#input-9-4').focus();
		}
	});

	$('#input-9-3').on('keyup',function() {
		if($('#input-8-3').val() == ''){
			$('#input-9-4').focus();
		}
	});

	$('#input-9-4').on('keyup',function() {
	    $('#input-11-1').focus();
	});

	//Pregunta 13 Horizontal 13
	$('#input-11-1').on('keyup',function() {
	    $('#input-11-2').focus();
	});
	$('#input-11-2').on('keyup',function() {
		if($('#input-11-3').val() == ''){
			$('#input-11-3').focus();

		}else{
			$('#input-11-4').focus();
		}
	});
	$('#input-11-3').on('keyup',function() {
		if($('#input-11-2').val() != '' && $('#input-11-7').val() == ''){
			$('#input-11-4').focus();
		}
	});

	$('#input-11-4').on('keyup',function() {
		if($('#input-11-5').val() == ''){
			$('#input-11-5').focus();

		}
		else if($('#input-11-6').val() == ''){
			$('#input-11-6').focus();
		}
		else if($('#input-11-7').val() == ''){
			$('#input-11-7').focus();
		}
	});
	$('#input-11-5').on('keyup',function() {
		if($('#input-11-6').val() == '' && $('#input-11-4').val() != ''){


			$('#input-11-6').focus();
		}else if($('#input-11-6').val() != '' && $('#input-11-4').val() != '' && $('#input-11-7').val() ==""){
			$('#input-11-7').focus();
		}
	});

	$('#input-11-6').on('keyup',function() {
		if($('#input-11-7').val() == '' && $('#input-11-4').val() != ''){
			$('#input-11-7').focus();
		}
	});
	$('#input-11-7').on('keyup',function() {
		if($('#input-11-8').val() == ''){
			$('#input-11-8').focus();

		}else{
			$('#input-11-9').focus();
		}
	});
	$('#input-11-8').on('keyup',function() {
		if($('#input-11-7').val() != '' && $('#input-11-9').val() == ''){
			$('#input-11-9').focus();
		}
	});

	$('#input-11-9').on('keyup',function() {
		if($('#input-11-10').val() == ''){
			$('#input-11-10').focus();

		}else{
			$('#input-11-11').focus();
		}
	});
	$('#input-11-10').on('keyup',function() {
		if($('#input-11-9').val() != '' && $('#input-11-11').val() == ''){
			$('#input-11-11').focus();
		}
	});
	$('#input-11-11').on('keyup',function() {
	    $('#input-11-12').focus();

	});

	$('#input-11-12').on('keyup',function() {
		if($('#input-11-12').val() != '' && $('#input-11-13').val() == '' && $('#input-11-14').val() == ''){
			$('#input-11-13').focus();

		}else if($('#input-11-13').val() != ''){
			$('#input-11-14').focus();
		}
	});
	$('#input-11-13').on('keyup',function() {
		if($('#input-11-12').val() != '' && $('#input-11-14').val() == ''){//***********
			$('#input-11-14').focus();
		}
	});
	$('#input-11-14').on('keyup',function() {
	    $('#input-11-15').focus();
	});
	$('#input-11-15').on('keyup',function() {
	    $('#input-11-16').focus();
	});
	$('#input-11-16').on('keyup',function() {
	    $('#input-12-5').focus();
	    ShowQuestion(14);
	});

	//Pregunta 14 Vertical

	$('#input-11-5').on('keyup',function() {
		if($('#input-11-4').val() == '' && $('#input-12-5').val() == ''){
			$('#input-12-5').focus();
		}
	});
	$('#input-12-5').on('keyup',function() {
	    $('#input-13-5').focus();
	});
	$('#input-13-5').on('keyup',function() {
	    $('#input-14-5').focus();
	});

	$('#input-14-5').on('keyup',function() {
		if($('#input-11-13').val() == ''){
			$('#input-11-13').focus();
			ShowQuestion(15);
		}else{
			$('#input-12-13').focus();
			ShowQuestion(15);

		}
	});

	// Pregunta 15 Vertical
	// $('#input-11-13').on('keyup',function() {
	//     $('#input-12-13').focus();
	// });
	$('#input-11-13').on('keyup',function() {
		if($('#input-11-12').val() == '' &&	$('#input-12-13').val() == ''){
			$('#input-12-13').focus();
		}
	});
	$('#input-12-13').on('keyup',function() {
	    $('#input-13-13').focus();
	});
	$('#input-13-13').on('keyup',function() {
	    $('#input-14-13').focus();
	});
	$('#input-14-13').on('keyup',function() {
	    $('#input-15-13').focus();
	});

	$('#input-15-13').on('keyup',function() {
	    $('#input-16-13').focus();
	});

}

function ShowQuestion(id){
	if (id == 1){
		$("#q1").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 2){
		$("#q2").show(500);
		$("#q1").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 3){
		$("#q3").show(500);
		$("#q2").hide(500);
		$("#q1").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 4){
		$("#q4").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q1").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 5){
		$("#q5").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q1").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 6){
		$("#q6").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q1").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 7){
		$("#q7").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q1").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 8){
		$("#q8").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q1").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 9){
		$("#q9").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q1").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 10){
		$("#q10").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q1").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 11){
		$("#q11").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q1").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 12){
		$("#q12").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q1").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 13){
		$("#q13").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q1").hide(500);
		$("#q14").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 14){
		$("#q14").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q1").hide(500);
		$("#q15").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
	else if (id == 15){
		$("#q15").show(500);
		$("#q2").hide(500);
		$("#q3").hide(500);
		$("#q4").hide(500);
		$("#q5").hide(500);
		$("#q6").hide(500);
		$("#q7").hide(500);
		$("#q8").hide(500);
		$("#q9").hide(500);
		$("#q10").hide(500);
		$("#q11").hide(500);
		$("#q12").hide(500);
		$("#q13").hide(500);
		$("#q14").hide(500);
		$("#q1").hide(500);
		//$("#q16").hide(500);
		//$("#q17").hide(500);
	}
}
