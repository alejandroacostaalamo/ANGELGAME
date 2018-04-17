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

	$("#input-0-15").focus(function(){

    	ShowQuestion(1);
    });

    $("#input-2-3").focus(function(){

    	ShowQuestion(2);
    });

    $("#input-3-14").focus(function(){

    	ShowQuestion(3);
    });

    $("#input-4-5").focus(function(){

    	ShowQuestion(4);
    });

    $("#input-4-10").focus(function(){

    	ShowQuestion(5);
    });

    $("#input-5-12").focus(function(){

    	ShowQuestion(6);
    });

    $("#input-5-2").focus(function(){

    	ShowQuestion(7);
    });

    $("#input-5-7").focus(function(){

    	ShowQuestion(8);
    });

    $("#input-6-6").focus(function(){

    	ShowQuestion(9);
    });

    $("#input-7-0").focus(function(){

    	ShowQuestion(10);
    });

     $("#input-9-3").focus(function(){

    	ShowQuestion(11);
    });

     $("#input-9-9").focus(function(){

    	ShowQuestion(12);
    });

     $("#input-10-10").focus(function(){

    	ShowQuestion(13);
    });

     $("#input-10-13").focus(function(){

    	ShowQuestion(14);
    });

     $("#input-13-0").focus(function(){

    	ShowQuestion(15);
    });

     $("#input-13-7").focus(function(){

    	ShowQuestion(16);
    });

     $("#input-15-8").focus(function(){

    	ShowQuestion(17);
    });

    Timer();
})

var actual='';

var word1h = '128';
var word1v = '1280';

var word2v = 'aaaa';

var word3h = '20';
var word3v = '2460';

var word4v = 'lacnic';

var word5h = 'eui64';

var word6v = 'ICMPv6';

var word7h = 'iana';
var word7v = 'ietf';

var word8v = 'network';

var word9h = 'checksum';

var word10h = 'bits';

var word11h = 'rfc';
var word11v = 'router';

var word12h = 'dns64';

var word13v = 'natpt';

var word14v = '40';

var word15h = 'terero';

var word16h = 'lactf';
var word16v = 'linux';

var word17h = 'ndp';

var dato1_1=['#input-0-15','#input-0-16','#input-0-17'];

var dato1_2=['#input-0-15','#input-1-15','#input-2-15','#input-3-15'];

var dato2=['#input-2-3','#input-3-3','#input-4-3','#input-5-3'];

var dato3_2=['#input-3-14','#input-4-14','#input-5-14','#input-6-14'];

var dato3_1=['#input-3-14','#input-3-15'];

var dato4=['#input-4-5','#input-5-5','#input-6-5','#input-7-5','#input-8-5','#input-9-5'];

var dato5=['#input-4-10','#input-4-11','#input-4-12','#input-4-13','#input-4-14'];

var dato6=['#input-4-12','#input-5-12','#input-6-12','#input-7-12','#input-8-12','#input-9-12'];

var dato7_1=['#input-5-2','#input-5-3','#input-5-4','#input-5-5'];

var dato7_2=['#input-5-2','#input-6-2','#input-7-2','#input-8-2'];

var dato8=['#input-5-7','#input-6-7','#input-7-7','#input-8-7','#input-9-7','#input-10-7','#input-11-7'];

var dato9=['#input-6-5','#input-6-6','#input-6-7','#input-6-8','#input-6-9','#input-6-10','#input-6-11','#input-6-12'];

var dato10=['#input-7-0','#input-7-1','#input-7-2','#input-7-3'];

var dato11_1=['#input-9-3','#input-9-4','#input-9-5'];

var dato11_2=['#input-9-3','#input-10-3','#input-11-3','#input-12-3','#input-13-3','#input-14-3'];

var dato12=['#input-9-9','#input-9-10','#input-9-11','#input-9-12','#input-9-13'];

var dato13=['#input-9-10','#input-10-10','#input-11-10','#input-12-10','#input-13-10'];

var dato14=['#input-9-13','#input-10-13'];

var dato15=['#input-13-0','#input-13-1','#input-13-2','#input-13-3','#input-13-4','#input-13-5'];

var dato16_1=['#input-13-7','#input-13-8','#input-13-9','#input-13-10','#input-13-11'];

var dato16_2=['#input-13-7','#input-14-7','#input-15-7','#input-16-7','#input-17-7'];

var dato17=['#input-15-7','#input-15-8','#input-15-9'];

var punto=0;


var fin= false;

var timeLevel = localStorage.getItem("timeCrossWord");


function EndGame(){
  if(punto==44){
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

function validWord1h(){
	//Validar palabra 1 horizontal

	var answer1h = $("#input-0-15").val().toLowerCase() + $("#input-0-16").val().toLowerCase() + $("#input-0-17").val().toLowerCase();
	if (answer1h == word1h){
		$("#cell-0-15").css("background-color","#17DB00");
		$("#cell-0-16").css("background-color","#17DB00");
		$("#cell-0-17").css("background-color","#17DB00");
		$("#input-0-15").attr("disabled","disabled");
		$("#input-0-16").attr("disabled","disabled");
		$("#input-0-17").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer1h == ""){

	}
	else if (answer1h != word1h){
		$("#cell-0-15").css("background-color","#f00");
		$("#cell-0-16").css("background-color","#f00");
		$("#cell-0-17").css("background-color","#f00");
	}
}
function validWord1v(){
	//Validar palabra 1 vertical
	var answer1v = $("#input-0-15").val().toLowerCase() + $("#input-1-15").val().toLowerCase() + $("#input-2-15").val().toLowerCase() + $("#input-3-15").val().toLowerCase();
	if (answer1v == word1v){
		$("#cell-0-15").css("background-color","#17DB00");
		$("#cell-1-15").css("background-color","#17DB00");
		$("#cell-2-15").css("background-color","#17DB00");
		$("#cell-3-15").css("background-color","#17DB00");
		$("#input-0-15").attr("disabled","disabled");
		$("#input-1-15").attr("disabled","disabled");
		$("#input-2-15").attr("disabled","disabled");
		$("#input-3-15").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer1v == ""){

	}
	else if (answer1v != word1v){
		$("#cell-0-15").css("background-color","#f00");
		$("#cell-1-15").css("background-color","#f00");
		$("#cell-2-15").css("background-color","#f00");
		$("#cell-3-15").css("background-color","#f00");
	}
}
function validWord2(){
	//Validar palabra 2 vertical
	var answer2v = $("#input-2-3").val().toLowerCase() + $("#input-3-3").val().toLowerCase() + $("#input-4-3").val().toLowerCase() + $("#input-5-3").val().toLowerCase();
	if (answer2v == word2v){
		$("#cell-2-3").css("background-color","#17DB00");
		$("#cell-3-3").css("background-color","#17DB00");
		$("#cell-4-3").css("background-color","#17DB00");
		$("#cell-5-3").css("background-color","#17DB00");
		$("#input-2-3").attr("disabled","disabled");
		$("#input-3-3").attr("disabled","disabled");
		$("#input-4-3").attr("disabled","disabled");
		$("#input-5-3").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer2v == ""){

	}
	else if (answer2v != word2v){
		$("#cell-2-3").css("background-color","#f00");
		$("#cell-3-3").css("background-color","#f00");
		$("#cell-4-3").css("background-color","#f00");
		$("#cell-5-3").css("background-color","#f00");
	}
}
function validWord3h(){
	//Validar palabra 3 horizontal
	var answer3h = $("#input-3-14").val().toLowerCase() + $("#input-3-15").val().toLowerCase();
	if (answer3h == word3h){
		$("#cell-3-14").css("background-color","#17DB00");
		$("#cell-3-15").css("background-color","#17DB00");
		$("#input-3-14").attr("disabled","disabled");
		$("#input-3-15").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer3h == ""){

	}
	else if (answer3h != word3h){
		$("#cell-3-14").css("background-color","#f00");
		$("#cell-3-15").css("background-color","#f00");
	}
}
function validWord3v(){
	//Validar palabra 3 vertical
	var answer3v = $("#input-3-14").val().toLowerCase() + $("#input-4-14").val().toLowerCase() + $("#input-5-14").val().toLowerCase() + $("#input-6-14").val().toLowerCase();
	if (answer3v == word3v){
		$("#cell-3-14").css("background-color","#17DB00");
		$("#cell-4-14").css("background-color","#17DB00");
		$("#cell-5-14").css("background-color","#17DB00");
		$("#cell-6-14").css("background-color","#17DB00");

		$("#input-3-14").attr("disabled","disabled");
		$("#input-4-14").attr("disabled","disabled");
		$("#input-5-14").attr("disabled","disabled");
		$("#input-6-14").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer3v == ""){

	}
	else if (answer3v != word3v){
		$("#cell-3-14").css("background-color","#f00");
		$("#cell-4-14").css("background-color","#f00");
		$("#cell-5-14").css("background-color","#f00");
		$("#cell-6-14").css("background-color","#f00");
	}
}
function validWord4(){
	//Validar palabra 4 vertical
	var answer4v = $("#input-4-5").val().toLowerCase() + $("#input-5-5").val().toLowerCase() + $("#input-6-5").val().toLowerCase() + $("#input-7-5").val().toLowerCase() + $("#input-8-5").val().toLowerCase() + $("#input-9-5").val().toLowerCase();
	if (answer4v == word4v){
		$("#cell-4-5").css("background-color","#17DB00");
		$("#cell-5-5").css("background-color","#17DB00");
		$("#cell-6-5").css("background-color","#17DB00");
		$("#cell-7-5").css("background-color","#17DB00");
		$("#cell-8-5").css("background-color","#17DB00");
		$("#cell-9-5").css("background-color","#17DB00");
		$("#input-4-5").attr("disabled","disabled");
		$("#input-5-5").attr("disabled","disabled");
		$("#input-6-5").attr("disabled","disabled");
		$("#input-7-5").attr("disabled","disabled");
		$("#input-8-5").attr("disabled","disabled");
		$("#input-9-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer4v == ""){

	}
	else if (answer4v != word4v){
		$("#cell-4-5").css("background-color","#f00");
		$("#cell-5-5").css("background-color","#f00");
		$("#cell-6-5").css("background-color","#f00");
		$("#cell-7-5").css("background-color","#f00");
		$("#cell-8-5").css("background-color","#f00");
		$("#cell-9-5").css("background-color","#f00");
	}
}
function validWord5(){
	//Validar palabra 5 horizontal
	var answer5h = $("#input-4-10").val().toLowerCase() + $("#input-4-11").val().toLowerCase() + $("#input-4-12").val().toLowerCase() + $("#input-4-13").val().toLowerCase() + $("#input-4-14").val().toLowerCase();
	if (answer5h == word5h){
		$("#cell-4-10").css("background-color","#17DB00");
		$("#cell-4-11").css("background-color","#17DB00");
		$("#cell-4-12").css("background-color","#17DB00");
		$("#cell-4-13").css("background-color","#17DB00");
		$("#cell-4-14").css("background-color","#17DB00");
		$("#input-4-10").attr("disabled","disabled");
		$("#input-4-11").attr("disabled","disabled");
		$("#input-4-12").attr("disabled","disabled");
		$("#input-4-13").attr("disabled","disabled");
		$("#input-4-14").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer5h == ""){

	}
	else if (answer5h != word5h){
		$("#cell-4-10").css("background-color","#f00");
		$("#cell-4-11").css("background-color","#f00");
		$("#cell-4-12").css("background-color","#f00");
		$("#cell-4-13").css("background-color","#f00");
		$("#cell-4-14").css("background-color","#f00");
	}
}
function validWord6(){
	//Validar palabra 6 vertical
	var answer6v = $("#input-4-12").val().toLowerCase() + $("#input-5-12").val().toLowerCase() + $("#input-6-12").val().toLowerCase() + $("#input-7-12").val().toLowerCase() + $("#input-8-12").val().toLowerCase() + $("#input-9-12").val().toLowerCase();
	if (answer6v == word6v){
		$("#cell-4-12").css("background-color","#17DB00");
		$("#cell-5-12").css("background-color","#17DB00");
		$("#cell-6-12").css("background-color","#17DB00");
		$("#cell-7-12").css("background-color","#17DB00");
		$("#cell-8-12").css("background-color","#17DB00");
		$("#cell-9-12").css("background-color","#17DB00");
		$("#input-4-12").attr("disabled","disabled");
		$("#input-5-12").attr("disabled","disabled");
		$("#input-6-12").attr("disabled","disabled");
		$("#input-7-12").attr("disabled","disabled");
		$("#input-8-12").attr("disabled","disabled");
		$("#input-9-12").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer6v == ""){

	}
	else if (answer6v != word6v){
		$("#cell-4-12").css("background-color","#f00");
		$("#cell-5-12").css("background-color","#f00");
		$("#cell-6-12").css("background-color","#f00");
		$("#cell-7-12").css("background-color","#f00");
		$("#cell-8-12").css("background-color","#f00");
		$("#cell-9-12").css("background-color","#f00");
	}
}
function validWord7h(){
	//Validar palabra 7 horizontal
	var answer7h = $("#input-5-2").val().toLowerCase() + $("#input-5-3").val().toLowerCase() + $("#input-5-4").val().toLowerCase() + $("#input-5-5").val().toLowerCase();
	if (answer7h == word7h){
		$("#cell-5-2").css("background-color","#17DB00");
		$("#cell-5-3").css("background-color","#17DB00");
		$("#cell-5-4").css("background-color","#17DB00");
		$("#cell-5-5").css("background-color","#17DB00");
		$("#input-5-2").attr("disabled","disabled");
		$("#input-5-3").attr("disabled","disabled");
		$("#input-5-4").attr("disabled","disabled");
		$("#input-5-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer7h == ""){

	}
	else if (answer7h != word7h){
		$("#cell-5-2").css("background-color","#f00");
		$("#cell-5-3").css("background-color","#f00");
		$("#cell-5-4").css("background-color","#f00");
		$("#cell-5-5").css("background-color","#f00");
	}
}
function validWord7v(){
	//Validar palabra 7 vertical
	var answer7v = $("#input-5-2").val().toLowerCase() + $("#input-6-2").val().toLowerCase() + $("#input-7-2").val().toLowerCase() + $("#input-8-2").val().toLowerCase();
	if (answer7v == word7v){
		$("#cell-5-2").css("background-color","#17DB00");
		$("#cell-6-2").css("background-color","#17DB00");
		$("#cell-7-2").css("background-color","#17DB00");
		$("#cell-8-2").css("background-color","#17DB00");
		$("#input-5-2").attr("disabled","disabled");
		$("#input-6-2").attr("disabled","disabled");
		$("#input-7-2").attr("disabled","disabled");
		$("#input-8-2").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer7v == ""){

	}
	else if (answer7v != word7v){
		$("#cell-5-2").css("background-color","#f00");
		$("#cell-6-2").css("background-color","#f00");
		$("#cell-7-2").css("background-color","#f00");
		$("#cell-8-2").css("background-color","#f00");
	}
}
function validWord8(){
	//Validar palabra 8 vertical
	var answer8v = $("#input-5-7").val().toLowerCase() + $("#input-6-7").val().toLowerCase() + $("#input-7-7").val().toLowerCase() + $("#input-8-7").val().toLowerCase() + $("#input-9-7").val().toLowerCase() + $("#input-10-7").val().toLowerCase() + $("#input-11-7").val().toLowerCase();
	if (answer8v == word8v){
		$("#cell-5-7").css("background-color","#17DB00");
		$("#cell-6-7").css("background-color","#17DB00");
		$("#cell-7-7").css("background-color","#17DB00");
		$("#cell-8-7").css("background-color","#17DB00");
		$("#cell-9-7").css("background-color","#17DB00");
		$("#cell-10-7").css("background-color","#17DB00");
		$("#cell-11-7").css("background-color","#17DB00");
		$("#input-5-7").attr("disabled","disabled");
		$("#input-6-7").attr("disabled","disabled");
		$("#input-7-7").attr("disabled","disabled");
		$("#input-8-7").attr("disabled","disabled");
		$("#input-9-7").attr("disabled","disabled");
		$("#input-10-7").attr("disabled","disabled");
		$("#input-11-7").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer8v == ""){

	}
	else if (answer8v != word8v){
		$("#cell-5-7").css("background-color","#f00");
		$("#cell-6-7").css("background-color","#f00");
		$("#cell-7-7").css("background-color","#f00");
		$("#cell-8-7").css("background-color","#f00");
		$("#cell-9-7").css("background-color","#f00");
		$("#cell-10-7").css("background-color","#f00");
		$("#cell-11-7").css("background-color","#f00");
	}
}
function validWord9(){
	//Validar palabra 9 horizontal
	var answer9h = $("#input-6-5").val().toLowerCase() + $("#input-6-6").val().toLowerCase() + $("#input-6-7").val().toLowerCase() + $("#input-6-8").val().toLowerCase() + $("#input-6-9").val().toLowerCase() + $("#input-6-10").val().toLowerCase() + $("#input-6-11").val().toLowerCase() + $("#input-6-12").val().toLowerCase();
	if (answer9h == word9h){
		$("#cell-6-5").css("background-color","#17DB00");
		$("#cell-6-6").css("background-color","#17DB00");
		$("#cell-6-7").css("background-color","#17DB00");
		$("#cell-6-8").css("background-color","#17DB00");
		$("#cell-6-9").css("background-color","#17DB00");
		$("#cell-6-10").css("background-color","#17DB00");
		$("#cell-6-11").css("background-color","#17DB00");
		$("#cell-6-12").css("background-color","#17DB00");
		$("#input-6-5").attr("disabled","disabled");
		$("#input-6-6").attr("disabled","disabled");
		$("#input-6-7").attr("disabled","disabled");
		$("#input-6-8").attr("disabled","disabled");
		$("#input-6-9").attr("disabled","disabled");
		$("#input-6-10").attr("disabled","disabled");
		$("#input-6-11").attr("disabled","disabled");
		$("#input-6-12").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer9h == ""){

	}
	else if (answer9h != word9h){
		$("#cell-6-5").css("background-color","#f00");
		$("#cell-6-6").css("background-color","#f00");
		$("#cell-6-7").css("background-color","#f00");
		$("#cell-6-8").css("background-color","#f00");
		$("#cell-6-9").css("background-color","#f00");
		$("#cell-6-10").css("background-color","#f00");
		$("#cell-6-11").css("background-color","#f00");
		$("#cell-6-12").css("background-color","#f00");
	}
}
function validWord10(){
	//Validar palabra 10 horizontal
	var answer10h = $("#input-7-0").val().toLowerCase() + $("#input-7-1").val().toLowerCase() + $("#input-7-2").val().toLowerCase() + $("#input-7-3").val().toLowerCase();
	if (answer10h == word10h){
		$("#cell-7-0").css("background-color","#17DB00");
		$("#cell-7-1").css("background-color","#17DB00");
		$("#cell-7-2").css("background-color","#17DB00");
		$("#cell-7-3").css("background-color","#17DB00");
		$("#input-7-0").attr("disabled","disabled");
		$("#input-7-1").attr("disabled","disabled");
		$("#input-7-2").attr("disabled","disabled");
		$("#input-7-3").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer10h == ""){

	}
	else if (answer10h != word10h){
		$("#cell-7-0").css("background-color","#f00");
		$("#cell-7-1").css("background-color","#f00");
		$("#cell-7-2").css("background-color","#f00");
		$("#cell-7-3").css("background-color","#f00");
	}
}
function validWord11h(){
	//Validar palabra 11 horizontal
	var answer11h = $("#input-9-3").val().toLowerCase() + $("#input-9-4").val().toLowerCase() + $("#input-9-5").val().toLowerCase();
	if (answer11h == word11h){
		$("#cell-9-3").css("background-color","#17DB00");
		$("#cell-9-4").css("background-color","#17DB00");
		$("#cell-9-5").css("background-color","#17DB00");
		$("#input-9-3").attr("disabled","disabled");
		$("#input-9-4").attr("disabled","disabled");
		$("#input-9-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer11h == ""){

	}
	else if (answer11h != word11h){
		$("#cell-9-3").css("background-color","#f00");
		$("#cell-9-4").css("background-color","#f00");
		$("#cell-9-5").css("background-color","#f00");
	}
}
function validWord11v(){
	//Validar palabra 11 vertical
	var answer11v = $("#input-9-3").val().toLowerCase() + $("#input-10-3").val().toLowerCase() + $("#input-11-3").val().toLowerCase() + $("#input-12-3").val().toLowerCase() + $("#input-13-3").val().toLowerCase() + $("#input-14-3").val().toLowerCase();
	if (answer11v == word11v){
		$("#cell-9-3").css("background-color","#17DB00");
		$("#cell-10-3").css("background-color","#17DB00");
		$("#cell-11-3").css("background-color","#17DB00");
		$("#cell-12-3").css("background-color","#17DB00");
		$("#cell-13-3").css("background-color","#17DB00");
		$("#cell-14-3").css("background-color","#17DB00");
		$("#input-9-3").attr("disabled","disabled");
		$("#input-10-3").attr("disabled","disabled");
		$("#input-11-3").attr("disabled","disabled");
		$("#input-12-3").attr("disabled","disabled");
		$("#input-13-3").attr("disabled","disabled");
		$("#input-14-3").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer11v == ""){

	}
	else if (answer11v != word11v){
		$("#cell-9-3").css("background-color","#f00");
		$("#cell-10-3").css("background-color","#f00");
		$("#cell-11-3").css("background-color","#f00");
		$("#cell-12-3").css("background-color","#f00");
		$("#cell-13-3").css("background-color","#f00");
		$("#cell-14-3").css("background-color","#f00");
	}
}
function validWord12(){
	//Validar palabra 12 horizontal
	var answer12h = $("#input-9-9").val().toLowerCase() + $("#input-9-10").val().toLowerCase() + $("#input-9-11").val().toLowerCase() + $("#input-9-12").val().toLowerCase() + $("#input-9-13").val().toLowerCase();
	if (answer12h == word12h){
		$("#cell-9-9").css("background-color","#17DB00");
		$("#cell-9-10").css("background-color","#17DB00");
		$("#cell-9-11").css("background-color","#17DB00");
		$("#cell-9-12").css("background-color","#17DB00");
		$("#cell-9-13").css("background-color","#17DB00");
		$("#input-9-9").attr("disabled","disabled");
		$("#input-9-10").attr("disabled","disabled");
		$("#input-9-11").attr("disabled","disabled");
		$("#input-9-12").attr("disabled","disabled");
		$("#input-9-13").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer12h == ""){

	}
	else if (answer12h != word12h){
		$("#cell-9-9").css("background-color","#f00");
		$("#cell-9-10").css("background-color","#f00");
		$("#cell-9-11").css("background-color","#f00");
		$("#cell-9-12").css("background-color","#f00");
		$("#cell-9-13").css("background-color","#f00");
	}
}
function validWord13(){
	//Validar palabra 13 vertical
	var answer13v = $("#input-9-10").val().toLowerCase() + $("#input-10-10").val().toLowerCase() + $("#input-11-10").val().toLowerCase() + $("#input-12-10").val().toLowerCase() + $("#input-13-10").val().toLowerCase();
	if (answer13v == word13v){
		$("#cell-9-10").css("background-color","#17DB00");
		$("#cell-10-10").css("background-color","#17DB00");
		$("#cell-11-10").css("background-color","#17DB00");
		$("#cell-12-10").css("background-color","#17DB00");
		$("#cell-13-10").css("background-color","#17DB00");
		$("#input-9-10").attr("disabled","disabled");
		$("#input-10-10").attr("disabled","disabled");
		$("#input-11-10").attr("disabled","disabled");
		$("#input-12-10").attr("disabled","disabled");
		$("#input-13-10").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer13v == ""){

	}
	else if (answer13v != word13v){
		$("#cell-9-10").css("background-color","#f00");
		$("#cell-10-10").css("background-color","#f00");
		$("#cell-11-10").css("background-color","#f00");
		$("#cell-12-10").css("background-color","#f00");
		$("#cell-13-10").css("background-color","#f00");
	}
}
function validWord14(){
	//Validar palabra 14 vertical
	var answer14v = $("#input-9-13").val().toLowerCase() + $("#input-10-13").val().toLowerCase();
	if (answer14v == word14v){
		$("#cell-9-13").css("background-color","#17DB00");
		$("#cell-10-13").css("background-color","#17DB00");
		$("#input-9-13").attr("disabled","disabled");
		$("#input-10-13").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer14v == ""){

	}
	else if (answer14v != word14v){
		$("#cell-9-13").css("background-color","#f00");
		$("#cell-10-13").css("background-color","#f00");
	}
}
function validWord15(){
	//Validar palabra 15 horizontal
	var answer15h = $("#input-13-0").val().toLowerCase() + $("#input-13-1").val().toLowerCase() + $("#input-13-2").val().toLowerCase() + $("#input-13-3").val().toLowerCase() + $("#input-13-4").val().toLowerCase() + $("#input-13-5").val().toLowerCase();
	if (answer15h == word15h){
		$("#cell-13-0").css("background-color","#17DB00");
		$("#cell-13-1").css("background-color","#17DB00");
		$("#cell-13-2").css("background-color","#17DB00");
		$("#cell-13-3").css("background-color","#17DB00");
		$("#cell-13-4").css("background-color","#17DB00");
		$("#cell-13-5").css("background-color","#17DB00");
		$("#input-13-0").attr("disabled","disabled");
		$("#input-13-1").attr("disabled","disabled");
		$("#input-13-2").attr("disabled","disabled");
		$("#input-13-3").attr("disabled","disabled");
		$("#input-13-4").attr("disabled","disabled");
		$("#input-13-5").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer15h == ""){

	}
	else if (answer15h != word15h){
		$("#cell-13-0").css("background-color","#f00");
		$("#cell-13-1").css("background-color","#f00");
		$("#cell-13-2").css("background-color","#f00");
		$("#cell-13-3").css("background-color","#f00");
		$("#cell-13-4").css("background-color","#f00");
		$("#cell-13-5").css("background-color","#f00");
	}
}
function validWord16h(){
	//Validar palabra 16 horizontal
	var answer16h = $("#input-13-7").val().toLowerCase() + $("#input-13-8").val().toLowerCase() + $("#input-13-9").val().toLowerCase() + $("#input-13-10").val().toLowerCase() + $("#input-13-11").val().toLowerCase();
	if (answer16h == word16h){
		$("#cell-13-7").css("background-color","#17DB00");
		$("#cell-13-8").css("background-color","#17DB00");
		$("#cell-13-9").css("background-color","#17DB00");
		$("#cell-13-10").css("background-color","#17DB00");
		$("#cell-13-11").css("background-color","#17DB00");
		$("#input-13-7").attr("disabled","disabled");
		$("#input-13-8").attr("disabled","disabled");
		$("#input-13-9").attr("disabled","disabled");
		$("#input-13-10").attr("disabled","disabled");
		$("#input-13-11").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer16h == ""){

	}
	else if (answer16h != word16h){
		$("#cell-13-7").css("background-color","#f00");
		$("#cell-13-8").css("background-color","#f00");
		$("#cell-13-9").css("background-color","#f00");
		$("#cell-13-10").css("background-color","#f00");
		$("#cell-13-11").css("background-color","#f00");
	}
}
function validWord16v(){
	//Validar palabra 16 vertical
	var answer16v = $("#input-13-7").val().toLowerCase() + $("#input-14-7").val().toLowerCase() + $("#input-15-7").val().toLowerCase() + $("#input-16-7").val().toLowerCase() + $("#input-17-7").val().toLowerCase();
	if (answer16v == word16v){
		$("#cell-13-7").css("background-color","#17DB00");
		$("#cell-14-7").css("background-color","#17DB00");
		$("#cell-15-7").css("background-color","#17DB00");
		$("#cell-16-7").css("background-color","#17DB00");
		$("#cell-17-7").css("background-color","#17DB00");
		$("#input-13-7").attr("disabled","disabled");
		$("#input-14-7").attr("disabled","disabled");
		$("#input-15-7").attr("disabled","disabled");
		$("#input-16-7").attr("disabled","disabled");
		$("#input-17-7").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer16v == ""){

	}
	else if (answer16v != word16v){
		$("#cell-13-7").css("background-color","#f00");
		$("#cell-14-7").css("background-color","#f00");
		$("#cell-15-7").css("background-color","#f00");
		$("#cell-16-7").css("background-color","#f00");
		$("#cell-17-7").css("background-color","#f00");
	}
}
function validWord17(){
	//Validar palabra 17 horizontal
	var answer17h = $("#input-15-7").val().toLowerCase() + $("#input-15-8").val().toLowerCase() + $("#input-15-9").val().toLowerCase();
	if (answer17h == word17h){
		$("#cell-15-7").css("background-color","#17DB00");
		$("#cell-15-8").css("background-color","#17DB00");
		$("#cell-15-9").css("background-color","#17DB00");
		$("#input-15-7").attr("disabled","disabled");
		$("#input-15-8").attr("disabled","disabled");
		$("#input-15-9").attr("disabled","disabled");
		punto= punto + 2;
				$('#punto').text(punto);
		$('.punto').text(punto);
		EndGame();
	}
	else if (answer17h == ""){

	}
	else if (answer17h != word17h){
		$("#cell-15-7").css("background-color","#f00");
		$("#cell-15-8").css("background-color","#f00");
		$("#cell-15-9").css("background-color","#f00");
	}
}


function next(i){

	for(var j=i;j<=22;j++)
	{
		var vacio=check_boxes(j);

		if(vacio!='lleno')
		{
			$(vacio).focus();

			break;
		}
	}
}


function check_boxes(Q){

	var con=0

	var Question=false;

	var index='';

	

	switch(Q) {

    	case 1:

    		for(var i=0;i<dato1_1.length;i++){

    			if($(dato1_1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1_1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato1_1.length;i++){

	    			if($(dato1_1[i]).val()==''){

	    				index=dato1_1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;


       	case 2:

    		for(var i=0;i<dato1_2.length;i++){

    			if($(dato1_2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1_2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato1_2.length;i++){

	    			if($(dato1_2[i]).val()==''){

	    				index=dato1_2[i];

	    				break;
	    			}
    		
    			}
    		}

       	break;

       	case 3:

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

       	case 4:

    		for(var i=0;i<dato3_1.length;i++){

    			if($(dato3_1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3_1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato3_1.length;i++){

	    			if($(dato3_1[i]).val()==''){

	    				index=dato3_1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 5:

    		for(var i=0;i<dato3_2.length;i++){

    			if($(dato3_2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3_2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato3_2.length;i++){

	    			if($(dato3_2[i]).val()==''){

	    				index=dato3_2[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 6:

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

       	case 7:

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

       	case 8:

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

       	case 9:

    		for(var i=0;i<dato7_1.length;i++){

    			if($(dato7_1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7_1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato7_1.length;i++){

	    			if($(dato7_1[i]).val()==''){

	    				index=dato7_1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 10:

    		for(var i=0;i<dato7_2.length;i++){

    			if($(dato7_2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7_2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato7_2.length;i++){

	    			if($(dato7_2[i]).val()==''){

	    				index=dato7_2[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 11:

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

       	case 12:

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

       	case 13:

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

       	case 14:

    		for(var i=0;i<dato11_1.length;i++){

    			if($(dato11_1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11_1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato11_1.length;i++){

	    			if($(dato11_1[i]).val()==''){

	    				index=dato11_1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 15:

    		for(var i=0;i<dato11_2.length;i++){

    			if($(dato11_2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11_2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato11_2.length;i++){

	    			if($(dato11_2[i]).val()==''){

	    				index=dato11_2[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 16:

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

       	case 17:

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

       	case 18:

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

       	case 19:

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

       case 20:

    		for(var i=0;i<dato16_1.length;i++){

    			if($(dato16_1[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16_1.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato16_1.length;i++){

	    			if($(dato16_1[i]).val()==''){

	    				index=dato16_1[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 21:

    		for(var i=0;i<dato16_2.length;i++){

    			if($(dato16_2[i]).val()!=''){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16_2.length){

    			Question=true;

    		}else{

    			for(var i=0;i<dato16_2.length;i++){

	    			if($(dato16_2[i]).val()==''){

	    				index=dato16_2[i];

	    				break;
	    			}
    		
    			}
    		}
    		
       	break;

       	case 22:

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


    default:
        
        alert("no se encontro pregunta")
	}


	if(Question==true)
	{
	  index='lleno';
	}

	return index;
}

function correct(c){

	var con=0

	var Question=false;


	switch(c) {

    	case '1.1':

    		for(var i=0;i<dato1_1.length;i++){

    			if($(dato1_1[i]).val()==word1h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1_1.length){

    			Question=true;

    		}
    		
       	break;


       	case '1.2':

    		for(var i=0;i<dato1_2.length;i++){

    			if($(dato1_2[i]).val()==word1v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato1_2.length){

    			Question=true;

    		}

       	break;

       	case '2':

    		for(var i=0;i<dato2.length;i++){

    			if($(dato2[i]).val()==word2v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato2.length){

    			Question=true;

    		}
    		
       	break;

       	case '3.1':

    		for(var i=0;i<dato3_1.length;i++){

    			if($(dato3_1[i]).val()==word3h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3_1.length){

    			Question=true;

    		}
    		
       	break;

       	case '3.2':

    		for(var i=0;i<dato3_2.length;i++){

    			if($(dato3_2[i]).val()==word3v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato3_2.length){

    			Question=true;

    		}
    		
       	break;

       	case '4':

    		for(var i=0;i<dato4.length;i++){

    			if($(dato4[i]).val()==word4v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato4.length){

    			Question=true;

    		}
    		
       	break;

       	case '5':

    		for(var i=0;i<dato5.length;i++){

    			if($(dato5[i]).val()==word5h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato5.length){

    			Question=true;

    		}
    		
       	break;

       	case '6':

    		for(var i=0;i<dato6.length;i++){

    			if($(dato6[i]).val()==word6v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato6.length){

    			Question=true;

    		}
    		
       	break;

       	case '7.1':

    		for(var i=0;i<dato7_1.length;i++){

    			if($(dato7_1[i]).val()==word7h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7_1.length){

    			Question=true;

    		}
    		
       	break;

       	case '7.2':

    		for(var i=0;i<dato7_2.length;i++){

    			if($(dato7_2[i]).val()==word7v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato7_2.length){

    			Question=true;

    		}
    		
       	break;

       	case '8':

    		for(var i=0;i<dato8.length;i++){

    			if($(dato8[i]).val()==word8v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato8.length){

    			Question=true;

    		}
    		
       	break;

       	case '9':

    		for(var i=0;i<dato9.length;i++){

    			if($(dato9[i]).val()==word9h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato9.length){

    			Question=true;

    		}
    		
       	break;

       	case '10':

    		for(var i=0;i<dato10.length;i++){

    			if($(dato10[i]).val()==word10h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato10.length){

    			Question=true;

    		}
    		
       	break;

       	case '11.1':

    		for(var i=0;i<dato11_1.length;i++){

    			if($(dato11_1[i]).val()==word11h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11_1.length){

    			Question=true;

    		}
    		
       	break;

       	case '11.2':

    		for(var i=0;i<dato11_2.length;i++){

    			if($(dato11_2[i]).val()==word11v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato11_2.length){

    			Question=true;

    		}
    		
       	break;

       	case '12':

    		for(var i=0;i<dato12.length;i++){

    			if($(dato12[i]).val()==word12h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato12.length){

    			Question=true;

    		}
    		
       	break;

       	case '13':

    		for(var i=0;i<dato13.length;i++){

    			if($(dato13[i]).val()==word13v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato13.length){

    			Question=true;

    		}
    		
       	break;

       	case '14':

    		for(var i=0;i<dato14.length;i++){

    			if($(dato14[i]).val()==word14v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato14.length){

    			Question=true;

    		}
    		
       	break;

       	case '15':

    		for(var i=0;i<dato15.length;i++){

    			if($(dato15[i]).val()==word15h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato15.length){

    			Question=true;

    		}
    		
       	break;

       case '16.1':

    		for(var i=0;i<dato16_1.length;i++){

    			if($(dato16_1[i]).val()==word16h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16_1.length){

    			Question=true;

    		}
    		
       	break;

       	case '16.2':

    		for(var i=0;i<dato16_2.length;i++){

    			if($(dato16_2[i]).val()==word16v[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato16_2.length){

    			Question=true;

    		}
    		
       	break;

       	case '17':

    		for(var i=0;i<dato17.length;i++){

    			if($(dato17[i]).val()==word17h[i]){

    				con+=1;
    			}
    		
    		}

    		if(con==dato17.length){

    			Question=true;

    		}
    		
       	break;


    default:
        
        alert("no se encontro pregunta")
	}


	return Question;
}

function ShareScore(){

  var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":1, "TopicId" :2, "levelId" :4,"Score":punto};

  var uid = RegisterGame(infogame);
}

function public_TW(){


  var msj="GAME: CROSSWORD  TOPIC:IPv6  POINTS: "+punto;

  var src='http://angelgame.acostasite.com/Game/img/crucigrama_img.PNG';

  loginGame(msj,src);
}


function validar(){

	//pregunta 1_1

	$('#input-0-15').on('keyup',function() {

		if($('#input-0-15').val()!='')
		{
			$('#input-0-16').focus();

			actual='1.1';
		}

	});

	$('#input-0-16').on('keyup',function() {

		if($('#input-0-16').val()!='')
		{
			$('#input-0-17').focus();

			actual='1.1';
		}

	});

	$('#input-0-17').on('keyup',function() {

		if($('#input-0-17').val()!='')
		{
			$('#input-1-15').focus();

			actual='1.1';
		}

	});

	//pregunta 1_2

	$('#input-1-15').on('keyup',function() {

		if($('#input-1-15').val()!='')
		{
			$('#input-2-15').focus();

			actual='1.2';
		}

	});

	$('#input-2-15').on('keyup',function() {

		actual='1.2';

		if($('#input-2-15').val()!='')
		{
			if(correct('3.1')==true){

				next(1);

			}else{

				$('#input-3-15').focus();
			}
		}

	});
	$('#input-3-15').on('keyup',function() {

		if($('#input-3-15').val()!='')
		{
			if(actual=='1.2')
			{
				next(1);

			}else if(actual=='3.1'){

				next(4);
			}
		}

	});

	//pregunta 2

    $('#input-2-3').on('keyup',function() {

        if($('#input-2-3').val()!='')
        {
            $('#input-3-3').focus();

			actual='2';
        }

    });

    $('#input-3-3').on('keyup',function() {

        if($('#input-3-3').val()!='')
        {
           	$('#input-4-3').focus();

			actual='2';
        }

    });

    $('#input-4-3').on('keyup',function() {

        if($('#input-4-3').val()!='')
        {
        	if(correct('7.1')==true){

				next(3);

			}else{

				$('#input-5-3').focus();
			}

			actual='2';
        }

    });

    $('#input-5-3').on('keyup',function() {

        if($('#input-5-3').val()!='')
        {

        	if(actual=='2')
			{
				next(3);

			}else if(actual=='7.1'){

				next(9);
			}
        }

    });

    //pregunta 3.1

    $('#input-3-14').on('keyup',function() {

        if($('#input-3-14').val()!='')
        {
        	actual='3.1';

            if(correct('1.2')==true){

				next(4);

			}else{

				$('#input-3-15').focus();
			}
        }

    });

    //pregunta 3.2


    $('#input-4-14').on('keyup',function() {

        if($('#input-4-14').val()!='')
        {
            if(actual=='5')
			{
				next(7);

			}else{

				next(5);
			}
        }

    });

    $('#input-5-14').on('keyup',function() {

        if($('#input-5-14').val()!='')
        {
            $('#input-6-14').focus();

			actual='3.2';
        }

    });

    $('#input-6-14').on('keyup',function() {

        if($('#input-6-14').val()!='')
        {
            next(5);
        }

    });

    //pregunta 4

     $('#input-4-5').on('keyup',function() {

        if($('#input-4-5').val()!='')
        {
        	actual='4';

            if(correct('7.1')==true){

				next(6);

			}else{

				$('#input-5-5').focus();
			}
        }

    });

    $('#input-5-5').on('keyup',function() {

        if($('#input-5-5').val()!='')
        {
           	if(actual=='4')
			{
				next(6);

			}else if(actual=='7.1'){

				next(9);
			}
        }

    });
    
    $('#input-6-5').on('keyup',function() {

        if($('#input-6-5').val()!='')
        {
            if(actual=='4')
			{
				next(6);

			}else{

				next(12);
			}
        }

    });

    $('#input-7-5').on('keyup',function() {

        if($('#input-7-5').val()!='')
        {
            $('#input-8-5').focus();

			actual='4';
        }

    });
    $('#input-8-5').on('keyup',function() {

        if($('#input-8-5').val()!='')
        {
           if(correct('11.1')==true){

				next(6);

			}else{

				$('#input-9-5').focus();
			}
        }

    });

    $('#input-9-5').on('keyup',function() {

        if($('#input-9-5').val()!='')
        {
            if(actual=='4')
			{
				next(6);

			}else{

				next(14);
			}
        }

    });

	//pregunta 5

	$('#input-4-10').on('keyup',function() {

        if($('#input-4-10').val()!='')
        {
            $('#input-4-11').focus();

			actual='5';
        }

    });

    $('#input-4-11').on('keyup',function() {

        if($('#input-4-11').val()!='')
        {
            if(correct('6')==true){

				next(7);

			}else{

				$('#input-4-12').focus();
			}

			actual='5';
        }

    });

    $('#input-4-12').on('keyup',function() {

        if($('#input-4-12').val()!='')
        {
            if(actual=='5')
			{
				next(7);

			}else{

				next(8);
			}
        }

    });

    $('#input-4-13').on('keyup',function() {

        if($('#input-4-13').val()!='')
        {
            if(correct('3.1')==true){

				next(7);

			}else{

				$('#input-4-14').focus();
			}

			actual='5';
        }

    });

    //pregunta 6

    $('#input-5-12').on('keyup',function() {

        if($('#input-5-12').val()!='')
        {
            if(correct('9')==true){

				next(8);

			}else{

				$('#input-6-12').focus();
			}

			actual='6';
        }

    });

     $('#input-6-12').on('keyup',function() {

        if($('#input-6-12').val()!='')
        {
            if(actual=='6')
			{
				next(8);

			}else{

				next(12);
			}
        }

    });
    
    $('#input-7-12').on('keyup',function() {

        if($('#input-7-12').val()!='')
        {
            $('#input-8-12').focus();

			actual='6';
        }

    });
    $('#input-8-12').on('keyup',function() {

        if($('#input-8-12').val()!='')
        {
            if(correct('12')==true){

				next(8);

			}else{

				$('#input-9-12').focus();
			}

			actual='6';
        }

    });

     $('#input-9-12').on('keyup',function() {

        if($('#input-9-12').val()!='')
        {
            if(actual=='6')
			{
				next(8);

			}else{

				next(16);
			}
        }

    });

    //pregunta 7_1

    $('#input-5-2').on('keyup',function() {

        if($('#input-5-2').val()!='')
        {
            if(correct('2')==true){

				next(9);

			}else{

				$('#input-5-3').focus();
			}

			actual='7.1';
        }

    });


    $('#input-5-4').on('keyup',function() {

        if($('#input-5-4').val()!='')
        {
            if(correct('4')==true){

				next(9);

			}else{

				$('#input-5-5').focus();
			}

			actual='7.1';
        }

    });

    //pregunta 7_2

    $('#input-6-2').on('keyup',function() {

        if($('#input-6-2').val()!='')
        {
            if(correct('10')==true){

				next(10);

			}else{

				$('#input-7-2').focus();
			}

			actual='7.2';
        }

    });

    $('#input-7-2').on('keyup',function() {

        if($('#input-7-2').val()!='')
        {
            if(actual=='7.2')
			{
				next(10);

			}else{

				next(13);
			}
        }

    });

    $('#input-8-2').on('keyup',function() {

        if($('#input-8-2').val()!='')
        {
           next(10);
        }

    });

    // pregunta 8

    $('#input-5-7').on('keyup',function() {

        if($('#input-5-7').val()!='')
        {
            if(correct('9')==true){

				next(11);

			}else{

				$('#input-6-7').focus();
			}

			actual='8';
        }

    });

    $('#input-6-7').on('keyup',function() {

        if($('#input-6-7').val()!='')
        {
            if(actual=='8')
			{
				next(11);

			}else{

				next(12);
			}
        }

    });

    $('#input-7-7').on('keyup',function() {

        if($('#input-7-7').val()!='')
        {
            $('#input-8-7').focus();

			actual='8';
        }

    });
    $('#input-8-7').on('keyup',function() {

        if($('#input-8-7').val()!='')
        {
            $('#input-9-7').focus();

			actual='8';
        }

    });
    $('#input-9-7').on('keyup',function() {

        if($('#input-9-7').val()!='')
        {
            $('#input-10-7').focus();

			actual='8';
        }

    });
    $('#input-10-7').on('keyup',function() {

        if($('#input-10-7').val()!='')
        {
            $('#input-11-7').focus();

			actual='8';
        }

    });
    $('#input-11-7').on('keyup',function() {

        if($('#input-11-7').val()!='')
        {
           next(11);
        }

    });

    //pregunta 9

    $('#input-6-6').on('keyup',function() {

        if($('#input-6-6').val()!='')
        {
            if(correct('8')==true){

				next(12);

			}else{

				$('#input-6-7').focus();
			}

			actual='9';
        }

    });

    $('#input-6-8').on('keyup',function() {

        if($('#input-6-8').val()!='')
        {
            $('#input-6-9').focus();

			actual='9';
        }

    });
    $('#input-6-9').on('keyup',function() {

        if($('#input-6-9').val()!='')
        {
            $('#input-6-10').focus();

			actual='9';
        }

    });
    $('#input-6-10').on('keyup',function() {

        if($('#input-6-10').val()!='')
        {
            $('#input-6-11').focus();

			actual='9';
        }

    });
    $('#input-6-11').on('keyup',function() {

        if($('#input-6-11').val()!='')
        {
            next(12);
        }

    });
    
    //pregunta 10


    $('#input-7-0').on('keyup',function() {

        if($('#input-7-0').val()!='')
        {
            $('#input-7-1').focus();

			actual='10';
        }

    });

    $('#input-7-1').on('keyup',function() {

        if($('#input-7-1').val()!='')
        {

        	if(correct('7.2')==true){

				next(13);

			}else{

				$('#input-7-2').focus();
			}

			actual='10';
        }

    });

    $('#input-7-3').on('keyup',function() {

        if($('#input-7-3').val()!='')
        {
            next(13);
        }

    });

    //pregunta 11_1

     $('#input-9-3').on('keyup',function() {

        if($('#input-9-3').val()!='')
        {
            $('#input-9-4').focus();

			actual='11.1';
        }

    });

    $('#input-9-4').on('keyup',function() {

        if($('#input-9-4').val()!='')
        {

        	if(correct('4')==true){

				next(14);

			}else{

				$('#input-9-5').focus();
			}

			actual='11.1';
        }

    });

    //pregunta 11_2

    $('#input-10-3').on('keyup',function() {

        if($('#input-10-3').val()!='')
        {
            $('#input-11-3').focus();

			actual='11.2';
        }

    });
    $('#input-11-3').on('keyup',function() {

        if($('#input-11-3').val()!='')
        {
            $('#input-12-3').focus();

			actual='11.2';
        }

    });

    $('#input-12-3').on('keyup',function() {

        if($('#input-12-3').val()!='')
        {
            if(correct('15')==true){

				next(15);

			}else{

				$('#input-13-3').focus();
			}

			actual='11.2';
        }

    });

    $('#input-13-3').on('keyup',function() {

        if($('#input-13-3').val()!='')
        {
            if(actual=='11.2')
			{
				next(15);

			}else{

				next(19);
			}
        }

    });


    $('#input-14-3').on('keyup',function() {

        if($('#input-14-3').val()!='')
        {
            next(15);
        }

    });

    //pregunta 12

    $('#input-9-9').on('keyup',function() {

        if($('#input-9-9').val()!='')
        {
            if(correct('13')==true){

				next(16);

			}else{

				$('#input-9-10').focus();
			}

			actual='12';
        }

    });

    $('#input-9-10').on('keyup',function() {

        if($('#input-9-10').val()!='')
        {
           if(actual=='12')
			{
				next(16);

			}else{

				next(17);
			}
        }

    });


    $('#input-9-11').on('keyup',function() {

        if($('#input-9-11').val()!='')
        {
           if(correct('6')==true){

				next(16);

			}else{

				$('#input-9-12').focus();
			}

			actual='12';
        }

    });
   

    $('#input-9-13').on('keyup',function() {

        if($('#input-9-13').val()!='')
        {
             if(actual=='12')
			{
				next(16);

			}else{

				next(18);
			}
        }

    });

    // pregunta 13

     $('#input-10-10').on('keyup',function() {

        if($('#input-10-10').val()!='')
        {
            $('#input-11-10').focus();

			actual='13';
        }

    });


    $('#input-11-10').on('keyup',function() {

        if($('#input-11-10').val()!='')
        {
           $('#input-12-10').focus();

			actual='13';
        }

    });

    $('#input-12-10').on('keyup',function() {

        if($('#input-12-10').val()!='')
        {
            if(correct('16.1')==true){

				next(17);

			}else{

				$('#input-13-10').focus();
			}

			actual='13';
        }

    });

     $('#input-13-10').on('keyup',function() {

        if($('#input-13-10').val()!='')
        {
            if(actual=='13')
			{
				next(17);

			}else{

				next(20);
			}
        }

    });

    //pregunta 14

    $('#input-10-13').on('keyup',function() {

        if($('#input-10-13').val()!='')
        {
            next(18);
        }

    });

    //pregunta 15

    $('#input-13-0').on('keyup',function() {

        if($('#input-13-0').val()!='')
        {
            $('#input-13-1').focus();

			actual='15';
        }

    });
    $('#input-13-1').on('keyup',function() {

        if($('#input-13-1').val()!='')
        {
            $('#input-13-2').focus();

			actual='15';
        }

    });
    $('#input-13-2').on('keyup',function() {

        if($('#input-13-2').val()!='')
        {
            if(correct('11.2')==true){

				next(19);

			}else{

				$('#input-13-3').focus();
			}

			actual='15';
        }

    });

    $('#input-13-4').on('keyup',function() {

        if($('#input-13-4').val()!='')
        {
            $('#input-13-5').focus();

			actual='15';
        }

    });

    $('#input-13-5').on('keyup',function() {

        if($('#input-13-5').val()!='')
        {
            next(19);
        }

    });

    //pregunta 16_1

    $('#input-13-7').on('keyup',function() {

        if($('#input-13-7').val()!='')
        {
            $('#input-13-8').focus();

			actual='16.1';
        }

    });

    $('#input-13-8').on('keyup',function() {

        if($('#input-13-8').val()!='')
        {
            $('#input-13-9').focus();

			actual='16.1';
        }

    });
    $('#input-13-9').on('keyup',function() {

        if($('#input-13-9').val()!='')
        {
            if(correct('13')==true){

				next(20);

			}else{

				$('#input-13-10').focus();
			}

			actual='16.1';
        }

    });

    $('#input-13-11').on('keyup',function() {

        if($('#input-13-11').val()!='')
        {
            next(20);
        }

    });

    //pregunta 16_2

     $('#input-14-7').on('keyup',function() {

        if($('#input-14-7').val()!='')
        {
             if(correct('17')==true){

				next(21);

			}else{

				$('#input-15-7').focus();
			}

			actual='16.2';
        }

    });

     $('#input-15-7').on('keyup',function() {

        if($('#input-15-7').val()!='')
        {
            if(actual=='16.2')
			{
				next(21);

			}else{

				next(22);
			}
        }

    });

    $('#input-16-7').on('keyup',function() {

        if($('#input-16-7').val()!='')
        {
            $('#input-17-7').focus();

			actual='16.2';
        }

    });

    $('#input-17-7').on('keyup',function() {

        if($('#input-17-7').val()!='')
        {
           next(21);
        }

    });

    //pregunta 17

     $('#input-15-8').on('keyup',function() {

        if($('#input-15-8').val()!='')
        {
           	$('#input-15-9').focus();

			actual='17';
        }

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
		$("#q16").hide(500);
		$("#q17").hide(500);
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
	}
}

function reload(){

  location.reload();
}