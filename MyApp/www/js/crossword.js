$(document).ready(function(){
	// validar();
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

var word1h = '128';
var word1v = '1280';

var word2v = 'aaaa';

var word3h = '20';
var word3v = '2460';

var word4v = 'lacnic';

var word5h = 'eui64';

var word6v = 'icmpv6';

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

var punto=0;


var fin= false;

var timeLevel = 200;


function EndGame(){
  if(punto==44){
      $('#WinModal').modal('show');
        fin=true;
        Timer();
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