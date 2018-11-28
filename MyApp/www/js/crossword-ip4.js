$(document).ready(function(){

	
	validar();
	
	$('input').click(function(){
		$(this).addClass('td_input');
		})
		$('input').focusout(function(){

    		$(this).removeClass('td_input');
    	});

    	$('input').focus(function(){

    		if($(this).val()!=''){

    			$(this).val('');
    		}

    	});


    	$("#input-3-7").focus(function(){

    		ShowQuestion(2);

    	});

    	$("#input-4-8").focus(function(){

    		ShowQuestion(3);
    		
    	});

    	$("#input-7-5").focus(function(){

    		ShowQuestion(4);
    		
    	});

    	$("#input-7-16").focus(function(){


    		ShowQuestion(5);
    		
    	});

    	$("#input-8-17").focus(function(){

    		ShowQuestion(6);
    		
    	});

    	$("#input-9-5").focus(function(){


    		ShowQuestion(7);
    		
    	});

    	$("#input-9-12").focus(function(){


    		ShowQuestion(8);
    		
    	});

    	$("#input-9-14").focus(function(){

    		ShowQuestion(9);
    		
    	});

    	$("#input-10-4").focus(function(){

   
    		ShowQuestion(10);
    		
    	});

    	$("#input-11-17").focus(function(){


    		ShowQuestion(11);
    		
    	});

    	$("#input-12-19").focus(function(){

    		ShowQuestion(12);
    		
    	});


    	$("#input-13-3").focus(function(){

    		ShowQuestion(13);
    		
    	});

    	$("#input-14-0").focus(function(){


    		ShowQuestion(14);
    		
    	});

    	$("#input-15-1").focus(function(){

    		ShowQuestion(15);
    		
    	});

    	$("#input-17-4").focus(function(){

    		ShowQuestion(16);
    		
    	});

    	$("#input-18-6").focus(function(){

    		ShowQuestion(17);
    		
    	});

    	$("#input-19-4").focus(function(){


    		ShowQuestion(18);
    		
    	});

    	Timer();
    

});

var actual='';

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


var dato1 = ['#input-0-10', '#input-1-10', '#input-2-10','#input-3-10'];

var dato2 = ['#input-3-7','#input-3-8','#input-3-9','#input-3-10'];

var dato3 = ['#input-3-8','#input-4-8','#input-5-8','#input-6-8','#input-7-8','#input-8-8','#input-9-8','#input-10-8'];

var dato4 = ['#input-7-5','#input-7-6','#input-7-7','#input-7-8'];

var dato5 = ['#input-7-16','#input-8-16','#input-9-16','#input-10-16','#input-11-16','#input-12-16'];

var dato6 = ['#input-8-16','#input-8-17','#input-8-18'];

var dato7 = ['#input-9-5','#input-10-5','#input-11-5','#input-12-5','#input-13-5','#input-14-5','#input-15-5','#input-16-5','#input-17-5'];

var dato8 = ['#input-9-12','#input-10-12','#input-11-12','#input-12-12'];

var dato9 = ['#input-9-14','#input-10-14','#input-11-14','#input-12-14'];

var dato10 = ['#input-10-4','#input-10-5','#input-10-6','#input-10-7','#input-10-8','#input-10-9','#input-10-10','#input-10-11','#input-10-12','#input-10-13','#input-10-14','#input-10-15','#input-10-16'];

var dato11 = ['#input-11-16','#input-11-17','#input-11-18','#input-11-19'];

var dato12 = ['#input-11-19','#input-12-19'];

var dato13 = ['#input-13-3','#input-13-4','#input-13-5','#input-13-6'];

var dato14 = ['#input-14-0','#input-15-0','#input-16-0','#input-17-0'];

var dato15 = ['#input-15-0','#input-15-1','#input-15-2','#input-15-3','#input-15-4','#input-15-5','#input-15-6','#input-15-7'];

var dato16 = ['#input-17-4','#input-17-5','#input-17-6','#input-17-7'];

var dato17 = ['#input-17-6','#input-18-6','#input-19-6'];

var dato18 = ['#input-19-4','#input-19-5','#input-19-6'];

var punto=0;


var fin= false;

var timeLevel = localStorage.getItem("timeCrossWord");


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

        ShareScore();
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
	    ShareScore();

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



function ShareScore(){
if (localStorage.getItem("UserId")!=null){
  var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":1, "TopicId" :1, "levelId" :4,"Score":punto};

  var uid = RegisterGame(infogame);
}
}
function public_FB(){


	var msj="GAME: CROSSWORD  TOPIC:IPv4  POINTS: "+punto;

	$(".fb-xfbml-parse-ignore").attr("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fangelgame.acostasite.com%2FGame%2FPublic.php?description="+msj+"&method=1&amp;src=sdkpreparse");
}



function validar(){

	//pregunta 1

	$('#input-0-10').on('keyup',function() {

		if($('#input-0-10').val()!='')
		{
			$('#input-1-10').focus();

			actual='1';
		}

	});

	$('#input-1-10').on('keyup',function() {

		if($('#input-1-10').val()!='')
		{
			$('#input-2-10').focus();

			actual='1';
		}

	});

	$('#input-2-10').on('keyup',function() {

		if($('#input-2-10').val()!='')
		{
			actual='1';

			if(correct(2)==true){

				next(1);

			}else{

				$('#input-3-10').focus();
			}
			
			
		}

	});


	// pregunta 2

	$('#input-3-7').on('keyup',function() {

		if($('#input-3-7').val()!='')
		{

			actual='2';

			if(correct(3)==true){

				next(2);

			}else{

				$('#input-3-8').focus();
			}

		}

	});

	$('#input-3-8').on('keyup',function() {

		if($('#input-3-8').val()!='')
		{
			if(actual=='2')
			{
				$('#input-3-9').focus();

			}else{

				$('#input-4-8').focus();
			}
		}

	});

	$('#input-3-9').on('keyup',function() {

		if($('#input-3-9').val()!='')
		{
			actual='2';

			if(correct(1)==true){

				next(2);

			}else{

				$('#input-3-10').focus();
			}

		}

	});

	// interseccion 1,2

	$('#input-3-10').on('keyup',function() {

		if(actual=='2')
		{
			next(2);

		}else if(actual=='1'){

			next(1);

		}
	});

	// pregunta 3


	$('#input-4-8').on('keyup',function() {

		if($('#input-4-8').val()!='')
		{
			$('#input-5-8').focus();

			actual='3';
		}

	});

	$('#input-5-8').on('keyup',function() {

		if($('#input-5-8').val()!='')
		{
			$('#input-6-8').focus();

			actual='3';
		}

	});

	$('#input-6-8').on('keyup',function() {

		if($('#input-6-8').val()!='')
		{
			if(correct(4)==true){

				next(3);

			}else{

				$('#input-7-8').focus();
			}
		}

	});

	$('#input-7-8').on('keyup',function() {

		if($('#input-7-8').val()!='')
		{
			if(actual=='3')
			{
				next(3);

			}else if(actual=='4'){

				next(4);

			}
		}

	});
	
	$('#input-8-8').on('keyup',function() {

		if($('#input-8-8').val()!='')
		{
			$('#input-9-8').focus();

			actual='3';
		}

	});

	$('#input-9-8').on('keyup',function() {

		if($('#input-9-8').val()!='')
		{
			actual='3';

			if(correct(10)==true){

				next(3);

			}else{

				$('#input-10-8').focus();
			}
			
		}

	});

	$('#input-10-8').on('keyup',function() {

		if($('#input-10-8').val()!='')
		{
			if(actual=='3')
			{
				next(3);


			}else if(actual=='10'){

				next(10);
			}
		}

	});

	// pregunta 4

	$('#input-7-5').on('keyup',function() {

		if($('#input-7-5').val()!='')
		{
			actual='4';

			$('#input-7-6').focus();
		}

	});

	$('#input-7-6').on('keyup',function() {

		if($('#input-7-6').val()!='')
		{

			actual='4';

			$('#input-7-7').focus();

			
		}

	});

	$('#input-7-7').on('keyup',function() {

		if($('#input-7-7').val()!='')
		{
			actual='4';

			if(correct(3)==true){

				next(4);

			}else{

				$('#input-7-8').focus();
			}
		}
	});

	//pregunta 5

	$('#input-7-16').on('keyup',function() {

		if($('#input-7-16').val()!='')
		{
			actual='5';

			if(correct(6)==true){

				next(5);

			}else{

				$('#input-8-16').focus();
			}
		}

	});

	$('#input-8-16').on('keyup',function() {

		if($('#input-8-16').val()!='')
		{
			if(actual=='5')
			{
				$('#input-9-16').focus();

			}else{

				$('#input-8-17').focus();
			}
		}

	});

	$('#input-9-16').on('keyup',function() {

		if($('#input-9-16').val()!='')
		{
			actual='5';

			if(correct(10)==true){

				next(5);

			}else{

				$('#input-10-16').focus();
			}
		}

	});

	$('#input-10-16').on('keyup',function() {

		if($('#input-10-16').val()!='')
		{
			if(actual=='10')
			{
				actual='10';

				next(10);

			}else if(actual=='5'){

				next(5);
			}
		}

	});

	$('#input-11-16').on('keyup',function() {

		if($('#input-11-16').val()!='')
		{
			if(actual=='5')
			{
				$('#input-12-16').focus();

			}else{

				$('#input-11-17').focus();
			}
		}

	});

	$('#input-12-16').on('keyup',function() {

		if($('#input-12-16').val()!='')
		{

			next(5);
			
		}

	});

	// pregunta 6


	$('#input-8-17').on('keyup',function() {

		if($('#input-8-17').val()!='')
		{
			actual='6';

			$('#input-8-18').focus();
		}

	});


	$('#input-8-18').on('keyup',function() {

		if($('#input-8-18').val()!='')
		{
			actual='6';

			next(6);
		}

	});

	//pregunta 7

	$('#input-9-5').on('keyup',function() {

		if($('#input-9-5').val()!='')
		{
			actual='7';

			if(correct(10)==true){

				next(7);

			}else{

				$('#input-10-5').focus();
			}
		}
	});

	$('#input-10-5').on('keyup',function() {

		if($('#input-10-5').val()!='')
		{
			if(actual=='7')
			{
				$('#input-11-5').focus();

			}else if(actual=='10'){

				$('#input-10-6').focus();
			}
		}
	});

	$('#input-11-5').on('keyup',function() {

		if($('#input-11-5').val()!='')
		{
			actual='7';

			$('#input-12-5').focus();
		}
	});
	$('#input-12-5').on('keyup',function() {

		if($('#input-12-5').val()!='')
		{
			actual='7';

			if(correct(13)==true){

				next(7);

			}else{

				$('#input-13-5').focus();
			}
			
		}
	});

	$('#input-13-5').on('keyup',function() {

		if($('#input-13-5').val()!='')
		{
			if(actual=='7')
			{
				$('#input-14-5').focus();

			}else if(actual=='13'){

				$('#input-13-6').focus();
			}
		}
	});

	$('#input-14-5').on('keyup',function() {

		if($('#input-14-5').val()!='')
		{
			actual='7';

			if(correct(15)==true){

				next(7);

			}else{

				$('#input-15-5').focus();
			}
		}
	});

	$('#input-15-5').on('keyup',function() {

		if(actual=='7')
		{
			$('#input-16-5').focus();

		}else if(actual=='15'){

			$('#input-15-6').focus();
		}
	});

	$('#input-16-5').on('keyup',function() {

		if($('#input-16-5').val()!='')
		{
			actual='7';

			if(correct(16)==true){

				next(7);

			}else{

				$('#input-17-5').focus();
			}

			
		}
	});

	$('#input-17-5').on('keyup',function() {

		if($('#input-17-5').val()!='')
		{
			if(actual=='7')
			{
				next(7);

			}else if(actual=='16'){

				if(correct(17)==true){

					next(16);

				}else{

					$('#input-17-6').focus();
				}

			}
		}
	});

	//pregunta 8

	$('#input-9-12').on('keyup',function() {

		if($('#input-9-12').val()!='')
		{
			actual='8';

			if(correct(10)==true){

				next(8);

			}else{

				$('#input-10-12').focus();
			}
		}
	});

	$('#input-10-12').on('keyup',function() {

		if($('#input-10-12').val()!='')
		{
			if(actual=='8')
			{
				$('#input-11-12').focus();

			}else if(actual=='10'){

				$('#input-10-13').focus();
			}
		}
	});

	$('#input-11-12').on('keyup',function() {

		if($('#input-11-12').val()!='')
		{
			actual='8';

			$('#input-12-12').focus();
		}
	});

	$('#input-12-12').on('keyup',function() {

		if($('#input-12-12').val()!='')
		{
			actual='8';

			next(8);
		}
	});

	//pregunta 9

	$('#input-9-14').on('keyup',function() {

		if($('#input-9-14').val()!='')
		{
			actual='9';

			if(correct(10)==true){

				next(9);

			}else{

				$('#input-10-14').focus();
			}
		}
	});


	$('#input-10-14').on('keyup',function() {

		if($('#input-10-14').val()!='')
		{
			if(actual=='9')
			{
				$('#input-11-14').focus();

			}else if(actual=='10'){

				$('#input-10-15').focus();
			}
		}
	});


	$('#input-11-14').on('keyup',function() {

		if($('#input-11-14').val()!='')
		{
			actual='9';

			$('#input-12-14').focus();
		}
	});

	$('#input-12-14').on('keyup',function() {

		if($('#input-12-14').val()!='')
		{
			actual='9';

			next(9);
		}
	});

	//pregunta 10

	$('#input-10-4').on('keyup',function() {

		if($('#input-10-4').val()!='')
		{
			actual='10';

			if(correct(7)==true){

				next(10);

			}else{

				$('#input-10-5').focus();
			}
		}
	});

	$('#input-10-6').on('keyup',function() {

		if($('#input-10-6').val()!='')
		{
			actual='10';

			$('#input-10-7').focus();
		}
	});

	$('#input-10-7').on('keyup',function() {

		if($('#input-10-7').val()!='')
		{
			actual='10';

			if(correct(3)==true){

				next(10);

			}else{

				$('#input-10-8').focus();
			}
		}
	});

	$('#input-10-9').on('keyup',function() {

		if($('#input-10-9').val()!='')
		{
			actual='10';

			$('#input-10-10').focus();
		}
	});

	$('#input-10-10').on('keyup',function() {

		if($('#input-10-10').val()!='')
		{
			actual='10';

			$('#input-10-11').focus();
		}
	});

	$('#input-10-11').on('keyup',function() {

		if($('#input-10-11').val()!='')
		{
			actual='10';

			if(correct(8)==true){

				next(10);

			}else{

				$('#input-10-12').focus();
			}
		}
	});

	$('#input-10-13').on('keyup',function() {

		if($('#input-10-13').val()!='')
		{
			actual='10';

			if(correct(9)==true){

				next(10);

			}else{

				$('#input-10-14').focus();
			}

		}
	});

	$('#input-10-15').on('keyup',function() {

		if($('#input-10-15').val()!='')
		{
			actual='10';

			if(correct(5)==true){

				next(10);

			}else{

				$('#input-10-16').focus();
			}
		}
	});

	//pregunta 11

	$('#input-11-17').on('keyup',function() {

		if($('#input-11-17').val()!='')
		{
			actual='11';

			$('#input-11-18').focus();
		}
	});

	$('#input-11-18').on('keyup',function() {

		if($('#input-11-18').val()!='')
		{
			actual='11';

			if(correct(12)==true){

				next(11);

			}else{

				$('#input-11-19').focus();
			}
		}
	});

	$('#input-11-19').on('keyup',function() {

		if($('#input-11-19').val()!='')
		{
			
			next(11);
		}
	});

	//pregunta 12

	$('#input-12-19').on('keyup',function() {

		if($('#input-12-19').val()!='')
		{
			actual='12';

			next(12);
		}
	});

	//pregunta 13

	$('#input-13-3').on('keyup',function() {

		if($('#input-13-3').val()!='')
		{
			actual='13';

			$('#input-13-4').focus();
		}
	});

	$('#input-13-4').on('keyup',function() {

		if($('#input-13-4').val()!='')
		{
			actual='13';

			if(correct(7)==true){

				next(13);

			}else{

				$('#input-13-5').focus();
			}
		}
	});

	$('#input-13-6').on('keyup',function() {

		if($('#input-13-6').val()!='')
		{
			actual='13';

			next(13);
		}
	});

	// pregunta 14

	$('#input-14-0').on('keyup',function() {

		if($('#input-14-0').val()!='')
		{
			actual='14';

			if(correct(15)==true){

				next(14);

			}else{

				$('#input-15-0').focus();
			}
		}
	});

	$('#input-15-0').on('keyup',function() {

		if($('#input-15-0').val()!='')
		{
			if(actual=='14')
			{
				$('#input-16-0').focus();

			}else{

				$('#input-15-1').focus();
			}
		}
	});

	$('#input-16-0').on('keyup',function() {

		if($('#input-16-0').val()!='')
		{
			actual='14';

			$('#input-17-0').focus();
		}
	});


	$('#input-17-0').on('keyup',function() {

		if($('#input-17-0').val()!='')
		{
			actual='14';

			next(14);

			$('#input-15-1').focus();
		}
	});

	//pregunta 15


	$('#input-15-1').on('keyup',function() {

		if($('#input-15-1').val()!='')
		{
			actual='15';

			$('#input-15-2').focus();
		}
	});


	$('#input-15-2').on('keyup',function() {

		if($('#input-15-2').val()!='')
		{
			actual='15';

			$('#input-15-3').focus();
		}
	});


	$('#input-15-3').on('keyup',function() {

		if($('#input-15-3').val()!='')
		{
			actual='15';

			$('#input-15-4').focus();
		}
	});


	$('#input-15-4').on('keyup',function() {

		if($('#input-15-4').val()!='')
		{
			actual='15';

			if(correct(7)==true){

				next(15);

			}else{

				$('#input-15-5').focus();
			}
		}
	});

	$('#input-15-6').on('keyup',function() {

		if($('#input-15-6').val()!='')
		{
			actual='15';

			$('#input-15-7').focus();
		}
	});

	$('#input-15-7').on('keyup',function() {

		if($('#input-15-7').val()!='')
		{
			actual='15';

			next(15);

			$('#input-17-4').focus();
		}
	});

	//pregunta 16

	$('#input-17-4').on('keyup',function() {

		if($('#input-17-4').val()!='')
		{
			actual='16';

			if(correct(7)==true){

				next(16);

			}else{

				$('#input-17-5').focus();
			}
		}
	});


	$('#input-17-6').on('keyup',function() {

		if($('#input-17-6').val()!='')
		{
			if(actual=='16')
			{
				$('#input-17-7').focus();

			}else{

				$('#input-18-6').focus();
			}
		}
	});

	$('#input-17-7').on('keyup',function() {

		if($('#input-17-7').val()!='')
		{
			actual='16';

			next(16);
		}
	});

	//pregunta 17

	$('#input-18-6').on('keyup',function() {

		if($('#input-18-6').val()!='')
		{
			actual='17';

			if(correct(18)==true){

				next(17);

			}else{

				$('#input-19-6').focus();
			}
		}
	});

	$('#input-19-6').on('keyup',function() {

		if($('#input-19-6').val()!='')
		{
			if(actual=='17')
			{
				next(17);
			}
		}
	});

	//pregunta 18

	$('#input-19-4').on('keyup',function() {

		if($('#input-19-4').val()!='')
		{
			actual='18';

			$('#input-19-5').focus();
		}
	});


	$('#input-19-5').on('keyup',function() {

		if($('#input-19-5').val()!='')
		{
			actual='18';

			if(correct(17)==true){

				next(18);

			}else{

				$('#input-19-6').focus();
			}

			
		}
	});
}

function next(i){

	for(var j=i;j<=18;j++)
	{
		var vacio=check_boxes(j);

		if(vacio!='lleno')
		{
			$(vacio).focus();

			break;
		}
	}
}

function correct(c){

	var Question=false;

	var con=0;

	switch(c) {

    	case 1:

    		for(var i=0;i<dato1.length;i++){

    			if($(dato1[i]).val()==word1v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1.length){

    			Question=true;

    		}
    		
       	break;

       	case 2:

    		for(var i=0;i<dato2.length;i++){

    			if($(dato2[i]).val()==word2h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato2.length){

    			Question=true;

    		}

       	break;

       	case 3:

    		for(var i=0;i<dato3.length;i++){

    			if($(dato3[i]).val()==word3v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3.length){

    			Question=true;

    		}
    		
       	break;

       	case 4:

    		for(var i=0;i<dato4.length;i++){

    			if($(dato4[i]).val()==word4h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato4.length){

    			Question=true;

    		}

       	break;

       	case 5:

    		for(var i=0;i<dato5.length;i++){

    			if($(dato5[i]).val()==word5v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato5.length){

    			Question=true;

    		}
    		
       	break;

       	case 6:

    		for(var i=0;i<dato6.length;i++){

    			if($(dato6[i]).val()==word6h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato6.length){

    			Question=true;

    		}
    		
       	break;

       	case 7:

    		for(var i=0;i<dato7.length;i++){

    			if($(dato7[i]).val()==word7v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7.length){

    			Question=true;

    		}
    		
       	break;

       	case 8:

    		for(var i=0;i<dato8.length;i++){

    			if($(dato8[i]).val()==word8v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato8.length){

    			Question=true;

    		}
    		
       	break;

       	case 9:

    		for(var i=0;i<dato9.length;i++){

    			if($(dato9[i]).val()==word9v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato9.length){

    			Question=true;

    		}
    		
       	break;

       	case 10:

    		for(var i=0;i<dato10.length;i++){

    			if($(dato10[i]).val()==word10h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato10.length){

    			Question=true;

    		}
    		
       	break;

       	case 11:

    		for(var i=0;i<dato11.length;i++){

    			if($(dato11[i]).val()==word11h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11.length){

    			Question=true;

    		}
    		
       	break;

       	case 12:

    		for(var i=0;i<dato12.length;i++){

    			if($(dato12[i]).val()==word12v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato12.length){

    			Question=true;

    		}
    		
       	break;

       	case 13:

    		for(var i=0;i<dato13.length;i++){

    			if($(dato13[i]).val()==word13h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato13.length){

    			Question=true;

    		}
    		
       	break;

       	case 14:

    		for(var i=0;i<dato14.length;i++){

    			if($(dato14[i]).val()==word14v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato14.length){

    			Question=true;

    		}

       	break;

       	case 15:

    		for(var i=0;i<dato15.length;i++){

    			if($(dato15[i]).val()==word15h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato15.length){

    			Question=true;

    		}
    		
       	break;

       	case 16:

    		for(var i=0;i<dato16.length;i++){

    			if($(dato16[i]).val()==word16h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16.length){

    			Question=true;

    		}
    		
       	break;

       	case 17:

    		for(var i=0;i<dato17.length;i++){

    			if($(dato17[i]).val()==word17v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato17.length){

    			Question=true;

    		}
    		
       	break;

       	case 18:

    		for(var i=0;i<dato18.length;i++){

    			if($(dato18[i]).val()==word18h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato18.length){

    			Question=true;

    		}
    		
       	break;

    }

    return Question;
}

function check_boxes(Q){

	var con=0

	var Question=false;

	var index='';

	

	switch(Q) {

    	case 1:

    		for(var i=0;i<dato1.length;i++){

    			if($(dato1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato1.length;i++){

	    			if($(dato1[i]).val()==''){

	    				index=dato1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;


       	case 2:

    		for(var i=0;i<dato2.length;i++){

    			if($(dato2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato2.length;i++){

	    			if($(dato2[i]).val()==''){

	    				index=dato2[i];

	    				break;
	    			}
    		
    			}
    		}

       	break;

       	case 3:

    		for(var i=0;i<dato3.length;i++){

    			if($(dato3[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato3.length;i++){

	    			if($(dato3[i]).val()==''){

	    				index=dato3[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 4:

    		for(var i=0;i<dato4.length;i++){

    			if($(dato4[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato4.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato4.length;i++){

	    			if($(dato4[i]).val()==''){

	    				index=dato4[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 5:

    		for(var i=0;i<dato5.length;i++){

    			if($(dato5[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato5.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato5.length;i++){

	    			if($(dato5[i]).val()==''){

	    				index=dato5[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 6:

    		for(var i=0;i<dato6.length;i++){

    			if($(dato6[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato6.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato6.length;i++){

	    			if($(dato6[i]).val()==''){

	    				index=dato6[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 7:

    		for(var i=0;i<dato7.length;i++){

    			if($(dato7[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato7.length;i++){

	    			if($(dato7[i]).val()==''){

	    				index=dato7[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 8:

    		for(var i=0;i<dato8.length;i++){

    			if($(dato8[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato8.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato8.length;i++){

	    			if($(dato8[i]).val()==''){

	    				index=dato8[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 9:

    		for(var i=0;i<dato9.length;i++){

    			if($(dato9[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato9.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato9.length;i++){

	    			if($(dato9[i]).val()==''){

	    				index=dato9[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 10:

    		for(var i=0;i<dato10.length;i++){

    			if($(dato10[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato10.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato10.length;i++){

	    			if($(dato10[i]).val()==''){

	    				index=dato10[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 11:

    		for(var i=0;i<dato11.length;i++){

    			if($(dato11[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato11.length;i++){

	    			if($(dato11[i]).val()==''){

	    				index=dato11[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 12:

    		for(var i=0;i<dato12.length;i++){

    			if($(dato12[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato12.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato12.length;i++){

	    			if($(dato12[i]).val()==''){

	    				index=dato12[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 13:

    		for(var i=0;i<dato13.length;i++){

    			if($(dato13[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato13.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato13.length;i++){

	    			if($(dato13[i]).val()==''){

	    				index=dato13[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 14:

    		for(var i=0;i<dato14.length;i++){

    			if($(dato14[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato14.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato14.length;i++){

	    			if($(dato14[i]).val()==''){

	    				index=dato14[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 15:

    		for(var i=0;i<dato15.length;i++){

    			if($(dato15[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato15.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato15.length;i++){

	    			if($(dato15[i]).val()==''){

	    				index=dato15[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 16:

    		for(var i=0;i<dato16.length;i++){

    			if($(dato16[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato16.length;i++){

	    			if($(dato16[i]).val()==''){

	    				index=dato16[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 17:

    		for(var i=0;i<dato17.length;i++){

    			if($(dato17[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato17.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato17.length;i++){

	    			if($(dato17[i]).val()==''){

	    				index=dato17[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 18:

    		for(var i=0;i<dato18.length;i++){

    			if($(dato18[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato18.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato18.length;i++){

	    			if($(dato18[i]).val()==''){

	    				index=dato18[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       
    default:
        
        alert("no se encontro pregunta")
	}


	if(Question==true)
	{
	  index='lleno';
	}

	return index;
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
	}
	else if (id == 16){
		$("#q16").show(500);
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
		$("#q1").hide(500);
		$("#q17").hide(500);
		$("#q18").hide(500);
	}
	else if (id == 17){
		$("#q17").show(500);
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
		$("#q16").hide(500);
		$("#q1").hide(500);
		$("#q18").hide(500);
	}
	else if (id == 18){
		$("#q18").show(500);
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
		$("#q16").hide(500);
		$("#q17").hide(500);
		$("#q1").hide(500);
	}
}

function public_TW(){


	var msj="GAME: CROSSWORD  TOPIC:IPv4  POINTS: "+punto;
	
  
	loginGame(msj);
  }

function reload(){

  location.reload();
}
var dataInstag;
function public_IG(){


	var msj="GAME: CROSSWORD  TOPIC:IPv4  POINTS: "+punto;
	/*window.plugins.socialsharing.shareViaInstagram(
		'Message via Instagram', 
		'http://angelgame.acostasite.com/images/icon/icon.png','http://angelgame.acostasite.com'
	  );	*/
	 // var assetLocalIdentifier = "../../img/congratulations.png";
	 Instagram.isInstalled(function (err, installed) {
		if (installed) {
			console.log("Instagram is"+ installed); // installed app version on Android
			navigator.screenshot.save(function(error,response){
				if(error){
					console.error(error);
					return;
				}
				
				// Something like: /storage/emulated/0/Pictures/screenshot_1477924039236.jpg
				console.log(response.filePath);
		
				/*Instagram.shareAsset(function(result) {
					alert('Instagram.shareAsset success: ' + result);
				}, function(e) {
					alert('Instagram.shareAsset error: ' + e);
				}, response.filePath);*/
				getBase64FromImageUrl(response.filePath, msj);
				
			});
		} else {
			alert("Instagram no esta instalado");
		}
	});

	
	 

/*	module.controller('ThisCtrl', function($scope, $cordovaInstagram) {
		// Get image from camera, base64 is good. See the
		// $cordovaCamera docs for more info
	  
		$cordovaInstagram.share($scope.image.data, $scope.image.caption).then(function() {
		  // Worked
		}, function(err) {
		  // Didn't work
		});
	  })*/
  }

  function getBase64FromImageUrl(url, msj) {
	var img = new Image();

	img.setAttribute('crossOrigin', 'anonymous');

	img.onload = function () {
		var canvas = document.createElement("canvas");
		canvas.width =this.width;
		canvas.height =this.height;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(this, 0, 0);

		var dataURL = canvas.toDataURL("image/png");
		dataInstag = dataURL/*.replace(/^data:image\/(png|jpg);base64,/, "")*/;
		
		Instagram.share(dataInstag, msj, function (err) {
			if (err) {
				console.log("Not shared");
			} else {
				console.log("shared");
			}
		});
	};

	img.src = url;
}