$(document).ready(function(){
	// validar();
	Timer();
	$('input').click(function(){
		$(this).addClass('td_input');
		})
		$('input').focusout(function(){

    		$(this).removeClass('td_input');

    	});
    	// if (StatusBar.isVisible) {
    		//StatusBar.hide();
    	// 	new kendo.mobile.Application($(document.body), { statusBarStyle: "hidden" });
    	// }

})

var word1v = 'dhcp';

var word2h = 'icmp';

var word3v = 'checksum';

var word4h = 'link';

var word5v = 'lacnic';

var word6h = 'arp';

var word7v = 'broadcast';

var word8v = 'mask';

var word9v = 'ping';

var word10h = 'fragmentation';

var word11h = 'ipv6';

var word12v = '60';

var word13h = 'cidr';

var word14v = 'vlsm';

var word15h = 'loopback';

var word16h = 'http';

var word17v = 'tcp';

var word18h = 'ftp';

var punto=0;


var fin= false;

var timeLevel = 200;


function EndGame(){
  if(punto==36){
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
	   // alert("Game Over!");
	   $('#LooseModal').modal('show')
	   //location.reload();
	  }
	}

  }, 1000);

}

function validWord1(){
	//Validar palabra 1 vertical
	var answer1v = $("#input-0-10").val().toLowerCase() + $("#input-1-10").val().toLowerCase() + $("#input-2-10").val().toLowerCase() + $("#input-3-10").val().toLowerCase();

	if (answer1v == word1v){
		$("#cell-0-10").css("background-color","#17DB00");
		$("#cell-1-10").css("background-color","#17DB00");
		$("#cell-2-10").css("background-color","#17DB00");
		$("#cell-3-10").css("background-color","#17DB00");
		$("#input-0-10").attr("disabled","disabled");
		$("#input-1-10").attr("disabled","disabled");
		$("#input-2-10").attr("disabled","disabled");
		$("#input-3-10").attr("disabled","disabled");
		punto= punto + 2;
		$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();

	}
	else if (answer1v == ""){

	}
	else if (answer1v != word1v){
		$("#cell-0-10").css("background-color","#f00");
		$("#cell-1-10").css("background-color","#f00");
		$("#cell-2-10").css("background-color","#f00");
		$("#cell-3-10").css("background-color","#f00");
	}
}
function validWord2(){
	//Validar palabra 2 horizontal
	var answer2h = $("#input-3-7").val().toLowerCase() + $("#input-3-8").val().toLowerCase() + $("#input-3-9").val().toLowerCase() + $("#input-3-10").val().toLowerCase();
	if (answer2h == word2h){
		$("#cell-3-7").css("background-color","#17DB00");
		$("#cell-3-8").css("background-color","#17DB00");
		$("#cell-3-9").css("background-color","#17DB00");
		$("#cell-3-10").css("background-color","#17DB00");
		$("#input-3-7").attr("disabled","disabled");
		$("#input-3-8").attr("disabled","disabled");
		$("#input-3-9").attr("disabled","disabled");
		$("#input-3-10").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer2h == ""){

	}
	else if (answer2h != word2h){
		$("#cell-3-7").css("background-color","#f00");
		$("#cell-3-8").css("background-color","#f00");
		$("#cell-3-9").css("background-color","#f00");
		$("#cell-3-10").css("background-color","#f00");
	}
}
function validWord3(){
	//Validar palabra 3 vertical
	var answer3v = $("#input-3-8").val().toLowerCase() + $("#input-4-8").val().toLowerCase() + $("#input-5-8").val().toLowerCase() + $("#input-6-8").val().toLowerCase() + $("#input-7-8").val().toLowerCase() + $("#input-8-8").val().toLowerCase() + $("#input-9-8").val().toLowerCase() + $("#input-10-8").val().toLowerCase();
	if (answer3v == word3v){
		$("#cell-3-8").css("background-color","#17DB00");
		$("#cell-4-8").css("background-color","#17DB00");
		$("#cell-5-8").css("background-color","#17DB00");
		$("#cell-6-8").css("background-color","#17DB00");
		$("#cell-7-8").css("background-color","#17DB00");
		$("#cell-8-8").css("background-color","#17DB00");
		$("#cell-9-8").css("background-color","#17DB00");
		$("#cell-10-8").css("background-color","#17DB00");
		$("#input-3-8").attr("disabled","disabled");
		$("#input-4-8").attr("disabled","disabled");
		$("#input-5-8").attr("disabled","disabled");
		$("#input-6-8").attr("disabled","disabled");
		$("#input-7-8").attr("disabled","disabled");
		$("#input-8-8").attr("disabled","disabled");
		$("#input-9-8").attr("disabled","disabled");
		$("#input-10-8").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer3v == ""){

	}
	else if (answer3v != word3v){
		$("#cell-3-8").css("background-color","#f00");
		$("#cell-4-8").css("background-color","#f00");
		$("#cell-5-8").css("background-color","#f00");
		$("#cell-6-8").css("background-color","#f00");
		$("#cell-7-8").css("background-color","#f00");
		$("#cell-8-8").css("background-color","#f00");
		$("#cell-9-8").css("background-color","#f00");
		$("#cell-10-8").css("background-color","#f00");
	}
}
function validWord4(){
	//Validar palabra 4 horizontal
	var answer4h = $("#input-7-5").val().toLowerCase() + $("#input-7-6").val().toLowerCase() + $("#input-7-7").val().toLowerCase() + $("#input-7-8").val().toLowerCase();
	if (answer4h == word4h){
		$("#cell-7-5").css("background-color","#17DB00");
		$("#cell-7-6").css("background-color","#17DB00");
		$("#cell-7-7").css("background-color","#17DB00");
		$("#cell-7-8").css("background-color","#17DB00");
		$("#input-7-5").attr("disabled","disabled");
		$("#input-7-6").attr("disabled","disabled");
		$("#input-7-7").attr("disabled","disabled");
		$("#input-7-8").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer4h == ""){

	}
	else if (answer4h != word4h){
		$("#cell-7-5").css("background-color","#f00");
		$("#cell-7-6").css("background-color","#f00");
		$("#cell-7-7").css("background-color","#f00");
		$("#cell-7-8").css("background-color","#f00");
	}
}
function validWord5(){
	//Validar palabra 5 vertical
	var answer5v = $("#input-7-16").val().toLowerCase() + $("#input-8-16").val().toLowerCase() + $("#input-9-16").val().toLowerCase() + $("#input-10-16").val().toLowerCase() + $("#input-11-16").val().toLowerCase() + $("#input-12-16").val().toLowerCase();
	if (answer5v == word5v){
		$("#cell-7-16").css("background-color","#17DB00");
		$("#cell-8-16").css("background-color","#17DB00");
		$("#cell-9-16").css("background-color","#17DB00");
		$("#cell-10-16").css("background-color","#17DB00");
		$("#cell-11-16").css("background-color","#17DB00");
		$("#cell-12-16").css("background-color","#17DB00");
		$("#input-7-16").attr("disabled","disabled");
		$("#input-8-16").attr("disabled","disabled");
		$("#input-9-16").attr("disabled","disabled");
		$("#input-10-16").attr("disabled","disabled");
		$("#input-11-16").attr("disabled","disabled");
		$("#input-12-16").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer5v == ""){

	}
	else if (answer5v != word5v){
		$("#cell-7-16").css("background-color","#f00");
		$("#cell-8-16").css("background-color","#f00");
		$("#cell-9-16").css("background-color","#f00");
		$("#cell-10-16").css("background-color","#f00");
		$("#cell-11-16").css("background-color","#f00");
		$("#cell-12-16").css("background-color","#f00");
	}
}
function validWord6(){
	//Validar palabra 6 horizontal
	var answer6h = $("#input-8-16").val().toLowerCase() + $("#input-8-17").val().toLowerCase() + $("#input-8-18").val().toLowerCase();
	if (answer6h == word6h){
		$("#cell-8-16").css("background-color","#17DB00");
		$("#cell-8-17").css("background-color","#17DB00");
		$("#cell-8-18").css("background-color","#17DB00");
		$("#input-8-16").attr("disabled","disabled");
		$("#input-8-17").attr("disabled","disabled");
		$("#input-8-18").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer6h == ""){

	}
	else if (answer6h != word6h){
		$("#cell-8-16").css("background-color","#f00");
		$("#cell-8-17").css("background-color","#f00");
		$("#cell-8-18").css("background-color","#f00");
	}
}
function validWord7(){
	//Validar palabra 7 vertical
	var answer7v = $("#input-9-5").val().toLowerCase() + $("#input-10-5").val().toLowerCase() + $("#input-11-5").val().toLowerCase() + $("#input-12-5").val().toLowerCase() + $("#input-13-5").val().toLowerCase() + $("#input-14-5").val().toLowerCase() + $("#input-15-5").val().toLowerCase() + $("#input-16-5").val().toLowerCase() + $("#input-17-5").val().toLowerCase();
	if (answer7v == word7v){
		$("#cell-9-5").css("background-color","#17DB00");
		$("#cell-10-5").css("background-color","#17DB00");
		$("#cell-11-5").css("background-color","#17DB00");
		$("#cell-12-5").css("background-color","#17DB00");
		$("#cell-13-5").css("background-color","#17DB00");
		$("#cell-14-5").css("background-color","#17DB00");
		$("#cell-15-5").css("background-color","#17DB00");
		$("#cell-16-5").css("background-color","#17DB00");
		$("#cell-17-5").css("background-color","#17DB00");
		$("#input-9-5").attr("disabled","disabled");
		$("#input-10-5").attr("disabled","disabled");
		$("#input-11-5").attr("disabled","disabled");
		$("#input-12-5").attr("disabled","disabled");
		$("#input-13-5").attr("disabled","disabled");
		$("#input-14-5").attr("disabled","disabled");
		$("#input-15-5").attr("disabled","disabled");
		$("#input-16-5").attr("disabled","disabled");
		$("#input-17-5").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer7v == ""){

	}
	else if (answer7v != word7v){
		$("#cell-9-5").css("background-color","#f00");
		$("#cell-10-5").css("background-color","#f00");
		$("#cell-11-5").css("background-color","#f00");
		$("#cell-12-5").css("background-color","#f00");
		$("#cell-13-5").css("background-color","#f00");
		$("#cell-14-5").css("background-color","#f00");
		$("#cell-15-5").css("background-color","#f00");
		$("#cell-16-5").css("background-color","#f00");
		$("#cell-17-5").css("background-color","#f00");
	}
}
function validWord8(){
	//Validar palabra 8 vertical
	var answer8v = $("#input-9-12").val().toLowerCase() + $("#input-10-12").val().toLowerCase() + $("#input-11-12").val().toLowerCase() + $("#input-12-12").val().toLowerCase();
	if (answer8v == word8v){
		$("#cell-9-12").css("background-color","#17DB00");
		$("#cell-10-12").css("background-color","#17DB00");
		$("#cell-11-12").css("background-color","#17DB00");
		$("#cell-12-12").css("background-color","#17DB00");
		$("#input-9-12").attr("disabled","disabled");
		$("#input-10-12").attr("disabled","disabled");
		$("#input-11-12").attr("disabled","disabled");
		$("#input-12-12").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer8v == ""){

	}
	else if (answer8v != word8v){
		$("#cell-9-12").css("background-color","#f00");
		$("#cell-10-12").css("background-color","#f00");
		$("#cell-11-12").css("background-color","#f00");
		$("#cell-12-12").css("background-color","#f00");
	}
}
function validWord9(){
	//Validar palabra 9 vertical
	var answer9v = $("#input-9-14").val().toLowerCase() + $("#input-10-14").val().toLowerCase() + $("#input-11-14").val().toLowerCase() + $("#input-12-14").val().toLowerCase();
	if (answer9v == word9v){
		$("#cell-9-14").css("background-color","#17DB00");
		$("#cell-10-14").css("background-color","#17DB00");
		$("#cell-11-14").css("background-color","#17DB00");
		$("#cell-12-14").css("background-color","#17DB00");
		$("#input-9-14").attr("disabled","disabled");
		$("#input-10-14").attr("disabled","disabled");
		$("#input-11-14").attr("disabled","disabled");
		$("#input-12-14").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer9v == ""){

	}
	else if (answer9v != word9v){
		$("#cell-9-14").css("background-color","#f00");
		$("#cell-10-14").css("background-color","#f00");
		$("#cell-11-14").css("background-color","#f00");
		$("#cell-12-14").css("background-color","#f00");
	}
}
function validWord10(){
	//Validar palabra 10 horizontal
	var answer10h = $("#input-10-4").val().toLowerCase() + $("#input-10-5").val().toLowerCase() + $("#input-10-6").val().toLowerCase() + $("#input-10-7").val().toLowerCase() + $("#input-10-8").val().toLowerCase() + $("#input-10-9").val().toLowerCase() + $("#input-10-10").val().toLowerCase() + $("#input-10-11").val().toLowerCase() + $("#input-10-12").val().toLowerCase() + $("#input-10-13").val().toLowerCase() + $("#input-10-14").val().toLowerCase() + $("#input-10-15").val().toLowerCase() + $("#input-10-16").val().toLowerCase();
	if (answer10h == word10h){
		$("#cell-10-4").css("background-color","#17DB00");
		$("#cell-10-5").css("background-color","#17DB00");
		$("#cell-10-6").css("background-color","#17DB00");
		$("#cell-10-7").css("background-color","#17DB00");
		$("#cell-10-8").css("background-color","#17DB00");
		$("#cell-10-9").css("background-color","#17DB00");
		$("#cell-10-10").css("background-color","#17DB00");
		$("#cell-10-11").css("background-color","#17DB00");
		$("#cell-10-12").css("background-color","#17DB00");
		$("#cell-10-13").css("background-color","#17DB00");
		$("#cell-10-14").css("background-color","#17DB00");
		$("#cell-10-15").css("background-color","#17DB00");
		$("#cell-10-16").css("background-color","#17DB00");
		$("#input-10-4").attr("disabled","disabled");
		$("#input-10-5").attr("disabled","disabled");
		$("#input-10-6").attr("disabled","disabled");
		$("#input-10-7").attr("disabled","disabled");
		$("#input-10-8").attr("disabled","disabled");
		$("#input-10-9").attr("disabled","disabled");
		$("#input-10-10").attr("disabled","disabled");
		$("#input-10-11").attr("disabled","disabled");
		$("#input-10-12").attr("disabled","disabled");
		$("#input-10-13").attr("disabled","disabled");
		$("#input-10-14").attr("disabled","disabled");
		$("#input-10-15").attr("disabled","disabled");
		$("#input-10-16").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer10h == ""){

	}
	else if (answer10h != word10h){
		$("#cell-10-4").css("background-color","#f00");
		$("#cell-10-5").css("background-color","#f00");
		$("#cell-10-6").css("background-color","#f00");
		$("#cell-10-7").css("background-color","#f00");
		$("#cell-10-8").css("background-color","#f00");
		$("#cell-10-9").css("background-color","#f00");
		$("#cell-10-10").css("background-color","#f00");
		$("#cell-10-11").css("background-color","#f00");
		$("#cell-10-12").css("background-color","#f00");
		$("#cell-10-13").css("background-color","#f00");
		$("#cell-10-14").css("background-color","#f00");
		$("#cell-10-15").css("background-color","#f00");
		$("#cell-10-16").css("background-color","#f00");
	}
}
function validWord11(){
	//Validar palabra 11 horizontal
	var answer11h = $("#input-11-16").val().toLowerCase() + $("#input-11-17").val().toLowerCase() + $("#input-11-18").val().toLowerCase() + $("#input-11-19").val().toLowerCase();
	if (answer11h == word11h){
		$("#cell-11-16").css("background-color","#17DB00");
		$("#cell-11-17").css("background-color","#17DB00");
		$("#cell-11-18").css("background-color","#17DB00");
		$("#cell-11-19").css("background-color","#17DB00");
		$("#input-11-16").attr("disabled","disabled");
		$("#input-11-17").attr("disabled","disabled");
		$("#input-11-18").attr("disabled","disabled");
		$("#input-11-19").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer11h == ""){

	}
	else if (answer11h != word11h){
		$("#cell-11-16").css("background-color","#f00");
		$("#cell-11-17").css("background-color","#f00");
		$("#cell-11-18").css("background-color","#f00");
		$("#cell-11-19").css("background-color","#f00");
	}
}
function validWord12(){
	//Validar palabra 12 vertical
	var answer12v = $("#input-11-19").val().toLowerCase() + $("#input-12-19").val().toLowerCase();
	if (answer12v == word12v){
		$("#cell-11-19").css("background-color","#17DB00");
		$("#cell-12-19").css("background-color","#17DB00");
		$("#input-11-19").attr("disabled","disabled");
		$("#input-12-19").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer12v == ""){

	}
	else if (answer12v != word12v){
		$("#cell-11-19").css("background-color","#f00");
		$("#cell-12-19").css("background-color","#f00");
	}
}
function validWord13(){
	//Validar palabra 13 horizontal
	var answer13h = $("#input-13-3").val().toLowerCase() + $("#input-13-4").val().toLowerCase() + $("#input-13-5").val().toLowerCase() + $("#input-13-6").val().toLowerCase();
	if (answer13h == word13h){
		$("#cell-13-3").css("background-color","#17DB00");
		$("#cell-13-4").css("background-color","#17DB00");
		$("#cell-13-5").css("background-color","#17DB00");
		$("#cell-13-6").css("background-color","#17DB00");
		$("#input-13-3").attr("disabled","disabled");
		$("#input-13-4").attr("disabled","disabled");
		$("#input-13-5").attr("disabled","disabled");
		$("#input-13-6").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer13h == ""){

	}
	else if (answer13h != word13h){
		$("#cell-13-3").css("background-color","#f00");
		$("#cell-13-4").css("background-color","#f00");
		$("#cell-13-5").css("background-color","#f00");
		$("#cell-13-6").css("background-color","#f00");
	}
}
function validWord14(){
	//Validar palabra 14 vertical
	var answer14v = $("#input-14-0").val().toLowerCase() + $("#input-15-0").val().toLowerCase() + $("#input-16-0").val().toLowerCase() + $("#input-17-0").val().toLowerCase();
	if (answer14v == word14v){
		$("#cell-14-0").css("background-color","#17DB00");
		$("#cell-15-0").css("background-color","#17DB00");
		$("#cell-16-0").css("background-color","#17DB00");
		$("#cell-17-0").css("background-color","#17DB00");
		$("#input-14-0").attr("disabled","disabled");
		$("#input-15-0").attr("disabled","disabled");
		$("#input-16-0").attr("disabled","disabled");
		$("#input-17-0").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer14v == ""){

	}
	else if (answer14v != word14v){
		$("#cell-14-0").css("background-color","#f00");
		$("#cell-15-0").css("background-color","#f00");
		$("#cell-16-0").css("background-color","#f00");
		$("#cell-17-0").css("background-color","#f00");
	}
}
function validWord15(){
	//Validar palabra 15 horizontal
	var answer15h = $("#input-15-0").val().toLowerCase() + $("#input-15-1").val().toLowerCase() + $("#input-15-2").val().toLowerCase() + $("#input-15-3").val().toLowerCase() + $("#input-15-4").val().toLowerCase() + $("#input-15-5").val().toLowerCase() + $("#input-15-6").val().toLowerCase() + $("#input-15-7").val().toLowerCase();
	if (answer15h == word15h){
		$("#cell-15-0").css("background-color","#17DB00");
		$("#cell-15-1").css("background-color","#17DB00");
		$("#cell-15-2").css("background-color","#17DB00");
		$("#cell-15-3").css("background-color","#17DB00");
		$("#cell-15-4").css("background-color","#17DB00");
		$("#cell-15-5").css("background-color","#17DB00");
		$("#cell-15-6").css("background-color","#17DB00");
		$("#cell-15-7").css("background-color","#17DB00");
		$("#input-15-0").attr("disabled","disabled");
		$("#input-15-1").attr("disabled","disabled");
		$("#input-15-2").attr("disabled","disabled");
		$("#input-15-3").attr("disabled","disabled");
		$("#input-15-4").attr("disabled","disabled");
		$("#input-15-5").attr("disabled","disabled");
		$("#input-15-6").attr("disabled","disabled");
		$("#input-15-7").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer15h == ""){

	}
	else if (answer15h != word15h){
		$("#cell-15-0").css("background-color","#f00");
		$("#cell-15-1").css("background-color","#f00");
		$("#cell-15-2").css("background-color","#f00");
		$("#cell-15-3").css("background-color","#f00");
		$("#cell-15-4").css("background-color","#f00");
		$("#cell-15-5").css("background-color","#f00");
		$("#cell-15-6").css("background-color","#f00");
		$("#cell-15-7").css("background-color","#f00");
	}
}
function validWord16(){
	//Validar palabra 16 horizontal
	var answer16h = $("#input-17-4").val().toLowerCase() + $("#input-17-5").val().toLowerCase() + $("#input-17-6").val().toLowerCase() + $("#input-17-7").val().toLowerCase();
	if (answer16h == word16h){
		$("#cell-17-4").css("background-color","#17DB00");
		$("#cell-17-5").css("background-color","#17DB00");
		$("#cell-17-6").css("background-color","#17DB00");
		$("#cell-17-7").css("background-color","#17DB00");
		$("#input-17-4").attr("disabled","disabled");
		$("#input-17-5").attr("disabled","disabled");
		$("#input-17-6").attr("disabled","disabled");
		$("#input-17-7").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer16h == ""){

	}
	else if (answer16h != word16h){
		$("#cell-17-4").css("background-color","#f00");
		$("#cell-17-5").css("background-color","#f00");
		$("#cell-17-6").css("background-color","#f00");
		$("#cell-17-7").css("background-color","#f00");
	}
}
function validWord17(){
	//Validar palabra 17 vertical
	var answer17v = $("#input-17-6").val().toLowerCase() + $("#input-18-6").val().toLowerCase() + $("#input-19-6").val().toLowerCase();
	if (answer17v == word17v){
		$("#cell-17-6").css("background-color","#17DB00");
		$("#cell-18-6").css("background-color","#17DB00");
		$("#cell-19-6").css("background-color","#17DB00");
		$("#input-17-6").attr("disabled","disabled");
		$("#input-18-6").attr("disabled","disabled");
		$("#input-19-6").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer17v == ""){

	}
	else if (answer17v != word17v){
		$("#cell-17-6").css("background-color","#f00");
		$("#cell-18-6").css("background-color","#f00");
		$("#cell-19-6").css("background-color","#f00");
	}
}
function validWord18(){
	//Validar palabra 18 horizontal
	var answer18h = $("#input-19-4").val().toLowerCase() + $("#input-19-5").val().toLowerCase() + $("#input-19-6").val().toLowerCase();
	if (answer18h == word18h){
		$("#cell-19-4").css("background-color","#17DB00");
		$("#cell-19-5").css("background-color","#17DB00");
		$("#cell-19-6").css("background-color","#17DB00");
		$("#input-19-4").attr("disabled","disabled");
		$("#input-19-5").attr("disabled","disabled");
		$("#input-19-6").attr("disabled","disabled");
				punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer18h == ""){

	}
	else if (answer18h != word18h){
		$("#cell-19-4").css("background-color","#f00");
		$("#cell-19-5").css("background-color","#f00");
		$("#cell-19-6").css("background-color","#f00");
	}
}
