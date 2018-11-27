// Vars
var correct3=0;
var puntaje=0;
var time=200;
var Questions=0;
var posicion= new Array();
var resolved_questions= new Array();
var incorrect=0;
var totalQuestions=0;
var texto="Pregunta";
var failh2="Has perdido";
var failh4="Intentalo de nuevo";
var correcth2="Felicidades!";
var correcth4="Nivel Completo";
var p="Publique su puntaje en las redes sociales";
var accept ="Aceptar";
var labelSelect="Cantidad de Preguntas";
var selectTitle="Seleccione";
var labelSelect2="Tiempo";
var sel="<select id='cmbQuestions'><option value='5'>5</option><option selected value='7'>7</option><option value='9'>9</option><option value='15'>15</option></select>"
var sel2="";
var resultado="Resultados";
var correcto="Correctas";
var incorrecto="Incorrectas";

if(localStorage.getItem("language")==2){
	texto="Question";
	failh2="Game over";
	failh4="Try Again";
	correcth2="Congratulations!";
	correcth4="Level Completed";
	p="Post your score on social networks";
	accept ="Accept";
	labelSelect="Questions quantity";
    selectTitle="Select";
	labelSelect2="Time";
	resultado="Results";
	correcto="Correct";
	incorrecto="Incorrect";
}else if(localStorage.getItem("language")==3){
	texto="Pergunta";
	failh2="Fim de Jogo";
	failh4="Tenta Novo!";
	correcth2="Parabéns";
	correcth4="Nivel Maximo";
	p="Postar sua pontos nas redes sociais";
	accept ="OK";
	labelSelect="Questions quantity";
    selectTitle="Selecionar";
	labelSelect2="Tempo";
	resultado="Resultados";
	correcto="Correto";
	incorrecto="Incorreto";
}

$(document).ready(function(){
	// Elegir cantidad y tiempo
	BuildTimeCmb();
	$('#bloquear').attr('class', 'bloquear');
	$('#message').removeAttr( "style" );
	$('#message').attr('class', 'message');
	$('#content').html('<div id="correct"><center><h2>'+selectTitle+'</h2><h4>'+labelSelect+'</h4><p class="post">'+sel+'</p><h4>'+labelSelect2+'</h4><p class="post">'+sel2+'</p></center><center><div class="ppt"><button class="btn btn-default" onclick="SetQuantity()">'+accept+'</button></div></center></div>');

	// Ciclo
	timer();	
	Questions+=1;
	
});

function BuildTimeCmb(){
	sel2="<select id='cmbTime'>";
	for(var i=20;i<=250;i++){
		sel2+="<option value='"+i+"'";
		if (i==200)
			sel2+=" selected";
		sel2+=">"+i+"</option>";
	}
	sel2+="</select>";
}

function timer(i){

  var interval = setInterval(function() {

  	
	// Si ya se eligió la cantidad de preguntas
	if(0<totalQuestions){
		document.getElementById('time').innerHTML =  --time;
		if(time<=0){

			clearInterval(interval);

			$('#bloquear').attr('class', 'bloquear');

			$('#message').removeAttr( "style" );

			$('#message').attr('class', 'message');

			$('#content').html('<div id="failet"><center><img class="logo" src="../../img/game_over.png" ><h2>'+failh2+'</h2><a href="javascript:location.reload();"><h4>'+failh4+'</h4></a><div class="ptos">'+resultado+':</div><div class="co">'+correcto+': '+correct3+'</div><div class="in">'+incorrecto+': '+incorrect+'</div><p class="post">'+p+'</p></center><center><div class="ppt"><a class="fb-xfbml-parse-ignore" target="_blank"><button class="FB" onclick="public_FB()"></button></a><button class="TW" onclick="public_TW()"></button><button class="IG" onclick="public_IG()"></button></div></center></div>');
			$('#Question').html('');
			$('#command').html('');
			ShareScore();

		}else if(Questions==(totalQuestions+1)){

			clearInterval(interval);

			$('#bloquear').attr('class', 'bloquear');

			$('#message').removeAttr( "style" );

			$('#message').attr('class', 'message');

			$('#content').html('<div id="correct"><center><img class="logo" src="../../img/congratulations.png" ><h2>'+correcth2+'</h2><h4>'+correcth4+'</h4><div class="ptos">'+resultado+':</div><div class="co">'+correcto+': '+correct3+'</div><div class="in">'+incorrecto+': '+incorrect+'</div><p class="post">'+p+'</p></center><center><div class="ppt"><a class="fb-xfbml-parse-ignore" target="_blank"><button class="FB" onclick="public_FB()"></button></a><button class="TW" onclick="public_TW()"></button><button class="IG" onclick="public_IG()"></button></div></center></div>');
			$('#Question').html('');
			$('#command').html('');
			
			ShareScore();

		}
	} 
 
  }, 1000);
}

function SetQuantity(){
	totalQuestions = parseInt($("#cmbQuestions").val());
	time = parseInt($("#cmbTime").val());	
	$('#bloquear').removeAttr('class');
	$('#content').html('');
	$('#message').removeAttr('class');
	ramdom();
	selection(posicion[0]);
}

function ramdom(){
console.log('Entro a random' + totalQuestions);
	var con=0;

	var salir=0;

	for(var i=0;i<totalQuestions;i++)
	{
		posicion[i]=Math.floor((Math.random() * totalQuestions) + 1);

		if(i>0)
		{

			salir=0;

			while(salir!=1)
			{
				for(var j=0;j<i;j++)
				{
					if(posicion[i]==posicion[j])
					{
						con+=1;
					}
				}

				if(con==0)
				{
					salir=1;
				}
				else
				{
					posicion[i]=Math.floor((Math.random() * totalQuestions) + 1);

					con=0;
				}
			}
		}
	}

	return posicion;
}

function selection(m){
	/*console.log('selecionQuestions' + Questions);
	if(totalQuestions>0 && Questions>totalQuestions);
		return;	*/
		console.log("Sepamos" + m);
	switch(m) {

		default:

			Question1();

		break;

		case 2:

			Question2();

		break;

		case 3:

			Question3();

		break;

		case 4:

			Question4();

		break;

		case 5:

			Question5();

		break;

		case 6:

			Question6();

		break;

		case 7:

			Question7();

		break;
		case 8:

			Question8();

		break;
		case 9:

			Question9();

		break;
		case 10:

			Question10();

		break;
		case 11:

			Question11();

		break;			
		case 12:

			Question12();

		break;

		case 13:

			Question13();

		break;
		case 14:
		

			Question14();

		break;
		case 15:		

			Question15();

		break;
	}

}

function score(m){

	Questions+=1;

	$("#commandQuestion").css({"animation-name": "next", "animation-duration": "1s"});

	$("#Question").css({"animation-name": "Question", "animation-duration": "1s"});

			
	for (var i = 0; i < posicion.length; i++) {

		if(m==posicion[i])
		{
			var pos=posicion.indexOf(posicion[i]);

			delete posicion[pos];

			break;
		}
	}


	for (var i = 0; i < posicion.length; i++) {

		if(posicion[i]!=undefined && posicion[i]!=m)
		{

			setTimeout(function(){

				$(".respuesta").remove();

				$("#Question").removeAttr('style');

				$("#commandQuestion").removeAttr('style');

				$( ".prs" ).text(texto+" "+Questions+":");
				
	
				selection(posicion[i]);

			},1000);

			break ;
		}
	}
}
	


function correcta(m){
	puntaje+=5;
	correct3++;

	$( "#puntos" ).text(puntaje);
	var html = $("#respuesta"+m).html();
	$("#respuesta"+m).html(html);
	//alert($("#respuesta"+m).html());
	$("#respuesta"+m).css({"animation-name": "correcta", "animation-duration": "1s"});
	//alert($("#imag_respuesta"+m));
	$("#imag_respuesta"+m).show();	

	var Active= window.localStorage.getItem('#sound-acert');
	if (Active=="1") {
		
		var audio = new Audio('../../sounds/bien.mp3');
	
		audio.play();
	}
	
}

function incorrecta(m){

	incorrect++;

	$("#respuesta"+m).css({"animation-name": "incorrecta", "animation-duration": "1s"});

	$("#imag_respuesta"+m).show();	
	
	var Active= window.localStorage.getItem('#sound-acert');

	if (Active=="1") {
		
		var audio = new Audio('../../sounds/error.mp3');
	
		audio.play();
	}
	
}


function Question1(){

	var command1="angel@angel:~$ ping www.google.com <br><br> PING www.google.com (216.58.217.164) 56(84) bytes of data.<br><br> 64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=1 ttl=53 time=6.49 ms <br> <br>64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=2 ttl=53 time=6.51 ms <br><br>64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=3 ttl=53 time=6.54 ms <br><br>64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=4 ttl=53 time=6.75 ms <br><br>64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=5 ttl=53 time=6.48 ms <br><br> 64 bytes from iad23s44-in-f4.1e100.net (216.58.217.164): icmp_req=6 ttl=53 time=6.51 ms<br><br>^C<br><br>--- www.google.com ping statistics ---<br><br>6 packets transmitted, 6 received, 0% packet loss, time 5006ms<br><br>rtt min/avg/max/mdev = 6.484/6.551/6.751/0.102 ms"
	
	if(localStorage.getItem("language")==1)
	{

		var question1=[
			
			'Dirección IP destino',

			'a. www.google.com',

			'b. 216.58.217.164',

			'c. Default Gateway',

			'd. No es posible determinar'
		];

		var question2=[

			'Tiempo máximo de respuesta',

			'a. 6.484',

			'b. 6.551',

			'c. 6.751',

			'd. 10 '
		];

		var question3=[

			'Porcentaje de paquetes perdidos',

			'a. 0 %',

			'b. 5006%',

			'c. 100%',

			'd. Se necesita más información'
		];

	}else if(localStorage.getItem("language")==2){

		var question1=[
			
			'IP Address  destination',

			'a. www.google.com',

			'b. 216.58.217.164',

			'c. Default Gateway',

			'd. It is not possible to determine'
		];

		var question2=[

			'Maximum time of response',

			'a. 6.484',

			'b. 6.551',

			'c. 6.751',

			'd. 10 '
		];

		var question3=[

			'Percentage of lost packets',

			'a. 0 %',

			'b. 5006%',

			'c. 100%',

			'd. More information is needed'
		];

	}else if(localStorage.getItem("language")==3){

		var question1=[
			
			'Endereço IP de destino',

			'a. www.google.com',

			'b. 216.58.217.164',

			'c. Default Gateway',

			'd. Não é possível determinar'
		];

		var question2=[

			'tempo máximo de resposta',

			'a. 6.484',

			'b. 6.551',

			'c. 6.751',

			'd. 10 '
		];

		var question3=[

			'Percentual de pacotes perdidos',

			'a. 0 %',

			'b. 5006%',

			'c. 100%',

			'd. É preciso mais informações'
		];
	}

	var options=Math.floor((Math.random() * 3) + 1);

	$( "#commandQuestion" ).html(command1);

	switch(options) {

	    case 1:

	    	$( "#titleQuestion" ).html(question1[0]);
	        

	        for (var i =1; i < question1.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);

				if(i==1){
					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(1);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(1);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

		  for(var j=1; j < question1.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question1[j];

		  }

	        break;

	    case 2:

	    	$( "#titleQuestion" ).html(question2[0]);

		    for (var i =1; i < question2.length; i++) {

				var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==3){

					respuesta.setAttribute("onclick","score(1);correcta("+i+");");
					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	

				}else{
					respuesta.setAttribute("onclick","score(1);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question2.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question2[j];

			}

	        
	     	break;

	    case 3:

	    	$( "#titleQuestion" ).html(question3[0]);

		    for (var i =1; i < question3.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==1){

					respuesta.setAttribute("onclick","score(1);correcta("+i+");");
					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					
				}else{
					
					respuesta.setAttribute("onclick","score(1);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question3.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question3[j];

			}
	        
	     	break;
	}
	
}


function Question2(){

	var command2="angel@angel:~$ nslookup<br><br>> server 8.8.8.8<br><br>Default server: 8.8.8.8<br><br>Address: 8.8.8.8#53<br><br>> set querytype=mx<br><br>> lacnic.net<br><br>Server:         8.8.8.8<br><br>Address:        8.8.8.8#53<br><br>Non-authoritative answer:<br><br>lacnic.net      mail exchanger = 5 lacnic.net.<br><br>lacnic.net      mail exchanger = 1 MAIL.lacnic.net.";

	if(localStorage.getItem("language")==1)
	{

		var question1=[

			'¿Cuál fue el servidor DNS utilizado?',

			'a) Lacnic.net',

			'b) Mail.lacnic.net',

			'c) 8.8.8.8',

			'd) El servidor por defecto del equipo'

		];

		var question2=[

			'¿Qué significa el “1” Antes de mail.lacnic.net?',

			'a) La primera respuesta esperada',

			'b) Un número aleatorio generado en la respuesta',

			'c) Número de secuencia',

			'd) Prioridad del mail server'
		];

		var question3=[

			'¿Qué indica la frase: “Non-authoritative answer:”?',

			'a) El servidor que nos responde no es autoritativo para la consulta',

			'b) Imposible obtener respuesta',

			'c) No se confía en la respuesta',

			'd) Intente mas tarde'
		];


		var question4=[


			'¿Qué se buscó para lacnic.net?',

			'a) Los servidores DNS?',

			'b) Los servidores de correo?',

			'c) Todos los registros?',

			'd) Ninguna de las anteriores',

		];

	}else if(localStorage.getItem("language")==2){

		var question1=[

			'Which was the DNS server used?',

			'a) Lacnic.net',

			'b) Mail.lacnic.net',

			'c) 8.8.8.8',

			'd) The server default on the computer'

		];

		var question2=[

			'What does it means "1" before mail.lacnic.net?',

			'a) The first expected answer',

			'b) A random number generated in response',

			'c) Sequence number',

			'd) Priority of the mail server'
		];

		var question3=[

			'What does indicate the phrase: "Non-authoritative answer:"?',

			'a) The server that is responding is not authoritative for the query',

			'b) Impossible to get answer',

			'c) Do not trust the answer',

			'd) Try later'
		];


		var question4=[

			'What was searched for lacnic.net?',

			'a) The DNS servers',

			'b) Mail servers',

			'c) All those records',

			'd) None of the previous',

		];

	}else if(localStorage.getItem("language")==3){

		var question1=[

			'Qual foi o servidor DNS usado?',

			'a) Lacnic.net',

			'b) Mail.lacnic.net',

			'c) 8.8.8.8',

			'd) O computador servidor padrão'

		];

		var question2=[

			'O que significa "1" Antes mail.lacnic.net.',

			'a) A primeira resposta esperada',

			'b) Um número aleatório gerado em resposta',

			'c) Número de Seqüência',

			'd) servidor de correio prioritário?'
		];

		var question3=[

			'Isso indica a frase:"Non-authoritative answer:"',

			'a) O servidor não está nos responde com autoridade para consulta',

			'b) Não é possível obter resposta',

			'c) Não confie a resposta',

			'd) Por favor, tente novamente mais tarde'
		];


		var question4=[


			'Que procurou lacnic.net?',

			'a) Os servidores DNS?',

			'b) servidores de correio?',

			'c) Todos os registros?',

			'd) Nenhuma das anteriores',

		];
	}


	var options=Math.floor((Math.random() * 4) + 1);

	$( "#commandQuestion" ).html(command2);

	switch(options) {

	    case 1:

	    	$( "#titleQuestion" ).html(question1[0]);
	        
	    	for (var i =1; i < question1.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==3){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question1.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question1[j];

			}

	        break;

	    case 2:

	    	$( "#titleQuestion" ).html(question2[0]);


	    	for (var i =1; i < question2.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==4){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question2.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question2[j];

			}

	        
	     	break;

	    case 3:

	    	$( "#titleQuestion" ).html(question3[0]);

	    	for (var i =1; i < question3.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==1){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question3.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question3[j];

			}

	       break;

	        case 4:

	    	$( "#titleQuestion" ).html(question4[0]);

	    	for (var i =1; i < question4.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==2){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(2);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question4.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question4[j];

			}
	        
	     	break;
	}
	

}

function Question3(){

	var command3="angel@angel:~$ dig www.lacnic.net @8.8.8.8 AAAA<br><br>; <<>> DiG 9.9.2-P1 <<>> www.lacnic.net @8.8.8.8 AAAA<br><br>;; global options: +cmd<br><br>;; Got answer:<br><br>;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3907<br><br>;; flags: qr rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1<br><br>;; OPT PSEUDOSECTION:<br><br>; EDNS: version: 0, flags:; udp: 512<br><br>;; QUESTION SECTION:<br><br>;www.lacnic.net.                        IN      AAAA<br><br>;; ANSWER SECTION:<br><br>www.lacnic.net.         3922    IN      AAAA    2001:13c7:7002:4128::147<br><br>;; Query time: 16 msec<br><br>;; SERVER: 8.8.8.8#53(8.8.8.8)<br><br>;; WHEN: Mon Aug  8 23:35:54 2016<br><br>;; MSG SIZE  rcvd: 71";

	if(localStorage.getItem("language")==1)
	{

		question1=[

			'¿Cuál fue el servidor DNS utilizado?',

			'a) 2001:13c7:7002:4128::147',

			'b) www.lacnic.net',

			'c) 8.8.8.8',

			'd) El servidor por defecto del equipo'

		];

		question2=[

			'¿Qué significa el flag “rd” al comienzo de la salida?',

			'a) La primera respuesta esperada',

			'b) Random DNS',

			'c) Recursion Desired',

			'd) Response DNS'
		];

		question3=[

			'¿Qué se buscó para www.lacnic.net?',

			'a)	Los servidores DNS',

			'b)	El registro IPv6 ',

			'c)	Cualquier registro DNS',

			'd)	El DNS autoritativo'
		];

	}else if(localStorage.getItem("language")==2){

		question1=[

			'Which was the DNS server used?',

			'a) 2001:13c7:7002:4128::147',

			'b) www.lacnic.net',

			'c) 8.8.8.8',

			'd) The default server on the computer'

		];

		question2=[

			'What does RD means at the beginning of the output?',

			'a) The first expected answer',

			'b) Random DNS',

			'c) Recursion Desired',

			'd) Response DNS'
		];

		question3=[

			'What was searched for www.lacnic.net?',

			'a) DNS servers',

			'b) The register IPv6',

			'c)	Any DNS record',

			'd)	The authoritative DNS'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Qual foi o servidor DNS usado?',

			'a) 2001:13c7:7002:4128::147',

			'b) www.lacnic.net',

			'c) 8.8.8.8',

			'd) O computador servidor padrão'

		];

		question2=[

			'Isso significa que o logotipo "rd" no início da produção?',

			'a) A primeira resposta esperada',

			'b) Random DNS',

			'c) Recursion Desired',

			'd) Response DNS'
		];

		question3=[

			'Que procurou www.lacnic.net?',

			'a) os servidores DNS',

			'b) IPv6 Registro ',

			'c) Qualquer DNS registro',

			'd) O DNS autoritário'
		];
	}




	var options=Math.floor((Math.random() * 3) + 1);

	$( "#commandQuestion" ).html(command3);

	switch(options) {

	    case 1:

	    	$( "#titleQuestion" ).html(question1[0]);
	        
	    	for (var i =1; i < question1.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==3){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question1.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question1[j];

			}

	        break;

	    case 2:

	    	$( "#titleQuestion" ).html(question2[0]);

	    	for (var i =1; i < question2.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==3){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question2.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question2[j];

			}

	     	break;

	    case 3:

	    	$( "#titleQuestion" ).html(question3[0]);

	    	for (var i =1; i < question3.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==2){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(3);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question3.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question3[j];

			}

	        break;
	}
	

}

function Question4(){

	var command4="aacosta@squat:~$ dig lacnic.net @200.47.79.2 mx<br><br>; <<>> DiG 9.9.2-P1 <<>> lacnic.net @200.47.79.2 mx<br><br>;; global options: +cmd<br><br>;; Got answer:<br><br>;; ->>HEADER<<- opcode: QUERY, status: REFUSED, id: 35514<br><br>;; flags: qr rd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1<br><br>;; WARNING: recursion requested but not available<br><br>;; OPT PSEUDOSECTION:<br><br>; EDNS: version: 0, flags:; udp: 4096<br><br>;; QUESTION SECTION:<br><br>;lacnic.net.                    IN      MX<br><br>;; Query time: 72 msec<br><br>;; SERVER: 200.47.79.2#53(200.47.79.2)<br><br>;; WHEN: Mon Aug  8 23:45:20 2016<br><br>;; MSG SIZE  rcvd: 39";

	if(localStorage.getItem("language")==1)
	{
		question1=[

			'De la salida anterior que podemos inferir:',
			'a)	Se intentó utilizar un Web Server como DNS Server',
			'b)	El DNS server estaba caído',
			'c)	200.47.79.2 no es un DNS Server',
			'd) 200.47.79.2 es un DNS Server pero no permite recursividad desde mi dirección IP'

		];

	}else if(localStorage.getItem("language")==2){

		question1=[

			'In the previous output we can infer:',
			'a)	Tried to use a Web Server as a DNS Server',
			'b)	The DNS server was down',
			'c)	200.47.79.2 is not a DNS Server',
			'd) 200.47.79.2 is a DNS Server, but it does not allow recursion from my address IP'

		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Da saída você pode inferir:',
			'a)	Ele tentou usar um servidor Web como um servidor DNS',
			'b)	O servidor DNS é baixo',
			'c)	200.47.79.2 não é um servidor DNS',
			'd) 200.47.79.2 é um servidor de DNS, mas não permite a recursividade do meu endereço IP'

		];
	}

	$( "#commandQuestion" ).html(command4);

	$( "#titleQuestion" ).html(question1[0]);

	 for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==4){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(4);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(4);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}

function Question5(){

	var command5="aacosta@squat:~$ dig www.lacnic.net @8.8.4.4 aaaa<br><br>; <<>> DiG 9.9.2-P1 <<>> www.lacnic.net @8.8.4.4 aaaa<br><br>;; global options: +cmd<br><br>;; Got answer:<br><br>;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 58610<br><br>;; flags: qr rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1<br><br>;; OPT PSEUDOSECTION:<br><br>; EDNS: version: 0, flags:; udp: 512<br><br>;; QUESTION SECTION:<br><br>;www.lacnic.net.                        IN      AAAA<br>;; ANSWER SECTION:<br>www.lacnic.net.         1048    IN      AAAA    2001:13c7:7002:4128::147<br>;; Query time: 16 msec<br>;; SERVER: 8.8.4.4#53(8.8.4.4)<br>;; WHEN: Mon Aug  8 23:48:25 2016<br>;; MSG SIZE  rcvd: 71";

	if(localStorage.getItem("language")==1)
	{
		question1=[

			'De la salida anterior que podemos inferir:',
			'a)	2001:13c7:7002:4128::147 es la respuesta esperada',
			'b)	No puedo realizar una consulta IPv6 a un server IPv4',
			'c)	La sección Answer Section no tiene lógica',
			'd)	www.lacnic.net no tiene dirección IPv4'
		];

	}else if(localStorage.getItem("language")==2){

		question1=[

			'In the previous output we can infer:',
			'a) 2001:13c7: 7002:4128:147 is the expected answer',
			'b) Cannot make a query IPv6 to IPv4 server',
			'c) The Answer Section is not logic',
			'd) www.lacnic.net does not have IPv4 address'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Saída anterior podemos inferir:',
			'a) 2001: 13c7: 7002: 4128 :: 147 é a resposta esperada',
			'b) Eu não posso fazer uma consulta a um servidor IPv6 IPv4',
			'c)	A secção Answer Section Não tem lógica',
			'd)	www.lacnic.net nenhum IPv4 endereço'
		];
	}

	$( "#commandQuestion" ).html(command5);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==1){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(5);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(5);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}

}

function Question6(){

	var command6="root@squat:~# traceroute 8.8.4.4 -n<br><br>traceroute to 8.8.4.4 (8.8.4.4), 30 hops max, 60 byte packets<br><br>1  192.168.1.1  0.021 ms  0.008 ms  0.006 ms<br><br>2  164.20.32.145  0.451 ms  0.520 ms  0.581 ms<br><br>3  64.120.32.222  28.271 ms  28.349 ms  28.388 ms<br><br>4  198.232.118.39  0.759 ms  0.752 ms  0.742 ms<br><br>5  209.185.246.223  1.713 ms 108.170.234.11  1.860 ms 209.85.246.223  1.759 ms<br><br>6  108.70.235.75  2.034 ms 108.170.235.85  2.078 ms 108.170.233.131  2.074 ms<br><br>7  8.8.4.4  1.668 ms  1.513 ms  1.616 ms";

	if(localStorage.getItem("language")==1){

		question1=[

			'¿Cuál es la ruta por defecto en la salida anterior?',
			'a)	192.168.1.1',
			'b)	8.8.4.4',
			'c)	Necesito ver la tabla de enrutamiento',
			'd)	164.20.32.145' 

		];

		question2=[

			'¿Por qué hay tres valores para cada salto?',
			'a)	Es un cálculo promedio en base a la topología de la red',
			'b)	Cada equipo siempre devuelve tres paquetes',
			'c)	No son saltos',
			'd)	Porque se enviaron tres paquetes por cada incremento de TTL'
		];

	}else if(localStorage.getItem("language")==2){

		question1=[

			'Which is the default route in the previous exit?',
			'a)	192.168.1.1',
			'b)	8.8.4.4',
			'c)	I need to see the routing table',
			'd)	164.20.32.145' 

		];

		question2=[

			'Why are there three values for each jump?',
			'a)	It is an average calculation based on the topology of the network',
			'b)	Each machine always returns three packages',
			'c)	They are not jumps',
			'd)	Because it was sent three packages by each increase of ttl'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Que é mais provável a rota padrão na saída anterior:',
			'a)	192.168.1.1',
			'b)	8.8.4.4',
			'c)	Eu preciso ver a tabela de roteamento',
			'd)	164.20.32.145' 

		];

		question2=[

			'Uma vez que existem três valores para cada salto?',
			'a) É um cálculo médio baseado na topologia de rede',
			'b) Cada equipe sempre retorna três pacotes',
			'c) não estão saltando',
			'd) Durante três pacotes foram enviados por cada aumento de TTL'
		];

	}

	var options=Math.floor((Math.random() * 2) + 1);

	$( "#commandQuestion" ).html(command6);


	switch(options) {

	    case 1:

	    	$( "#titleQuestion" ).html(question1[0]);
	        

	        for (var i =1; i < question1.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==1){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(6);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(6);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question1.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question1[j];

			}

	        break;

	    case 2:

	    	$( "#titleQuestion" ).html(question2[0]);


	    	for (var i =1; i < question2.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==4){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(6);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(6);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question2.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question2[j];

			}

	        
	     	break;

	     }
}

function Question7(){

	var command7="root@squat:~# traceroute6 www.arin.net -n<br><br>traceroute to www.arin.net (2001:500:4:c000::44) ….<br><br>1  2504:af00:12:3452::2  0.002 ms  0.009 ms  0.012 ms<br><br>2  2504:fa00::136  0.416 ms  0.274 ms  0.261 ms<br><br>3  2504:ca00::13d  0.433 ms  0.304 ms  0.296 ms<br><br>4  2001:504:f::1:9318:1  0.509 ms  0.491 ms  0.417 ms<br><br>5  2001:504:f::39  11.097 ms  0.644 ms  0.669 ms<br><br>6  2001:470:0:299::1  5.880 ms  9.951 ms  14.739 ms<br><br>7  2001:470:1:20f::2  5.862 ms  30.339 ms  5.871 ms<br><br>8  * * *<br><br>9  * * *";

	if(localStorage.getItem("language")==1){

		question1=[

			'¿Qué significan los * en la salida?',
			'a)	Terminó el traceroute',
			'b)	No ha llegado a su destino y sigue incrementando el Hop Limit',
			'c)	Problema de software, quizás un BUG',
			'd)	Favor deterner el tracerouter y comenzar uno nuevo'
		];

	}if(localStorage.getItem("language")==2){

		question1=[

			'What does it mean the * in the output?',
			'a)	The traceroute has finished',
			'b)	It has not reached its destination and continues to grow the Hop Limit',
			'c)	Software problem, perhaps a BUG',
			'd)	Please stop the tracerouter and start a new one'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'O que fazer o * na saída?',
			'a)	Ele terminou a traceroute',
			'b)	Não chegou ao seu destino e ainda aumenta o limite de saltos',
			'c)	Problema de software, talvez um BUG',
			'd)	Por favor, pare o traceroute e começar um novo'
		];

	}

	$( "#commandQuestion" ).html(command7);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==2){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(7);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(7);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}

function Question8(){

	var command8="<img style='width:100%' onclick='Zoom(\"img/pregunta-8.png\", \"Pregunta 8\")' src='img/pregunta-8.png'>";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'De la salida anterior, ¿Dónde parece haber un problema?',
			'a)	4.69.141.37',
			'b)	8.8.8.8',
			'c)	192.168.1.1',
			'd)	???'
		];

	}if(localStorage.getItem("language")==2){

		question1=[

			'In the previous output, Where is the problem?',
			'a)	4.69.141.37',
			'b)	8.8.8.8',
			'c)	192.168.1.1',
			'd)	???'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'A partir da saída, onde parece ser um problema?',
			'a)	4.69.141.37',
			'b)	8.8.8.8',
			'c)	192.168.1.1',
			'd)	???'
		];

	}

	$( "#commandQuestion" ).html(command8);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==1){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(8);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(8);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}

function Question9(){

	var command9="<img style='width:100%' onclick='Zoom(\"img/pregunta-9.png\", \"Pregunta 9\")' src='img/pregunta-9.png'>";

	if(localStorage.getItem("language")==1){

		question1=[
			'¿De la salida de tcpdump que comando se puede inferir fue capturado?',
			'a)	ping',
			'b)	mtr',
			'c)	dig',
			'd)	traceroute'
		];

	}if(localStorage.getItem("language")==2){

		question1=[

			'In the tcpdump output, What command was captured?',
			'a)	ping',
			'b)	mtr',
			'c)	dig',
			'd)	traceroute'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Como saída tcpdump esse comando foi capturado?',
			'a)	ping',
			'b)	mtr',
			'c)	dig',
			'd)	traceroute'
		];

	}

	$( "#commandQuestion" ).html(command9);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==4){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(9);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(9);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}

function Question10(){

	var command10="en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500<br>        ether ac:bc:32:96:82:2bv        inet6 fe80::aebc:32ff:fe96:822b%en0 prefixlen 64 scopeid 0x4<br>        inet6 2001:470:5:516:aebc:32ff:fe96:822b prefixlen 64 autoconf<br>        inet6 2001:470:5:516:1588:89ea:8369:1181 prefixlen 64 autoconf temporary<br>        inet 192.168.1.10 netmask 0xffffff00 broadcast 192.168.1.255<br>        nd6 options=1<PERFORMNUD><br>        media: autoselect<br>        status: active<br>";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'De las direcciones IPv6 de esta interfaz, ¿Cuál tendrá preferencia al momento de realizar una conexión a Internet?',
			'a)	fe80::aebc:32ff:fe96:822b%en0',
			'b)	2001:470:5:516:aebc:32ff:fe96:822b',
			'c)	2001:470:5:516:1588:89ea:8369:1181',
			'd)	Ninguna de las anteriores'
		];

	}if(localStorage.getItem("language")==2){

		question1=[

			'In the IPV6 addresses in this interface, Which one will have preference on an Internet connection?',
			'a)	fe80::aebc:32ff:fe96:822b%en0',
			'b)	2001:470:5:516:aebc:32ff:fe96:822b',
			'c)	2001:470:5:516:1588:89ea:8369:1181',
			'd)	Ninguna de las anteriores'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Os endereços IPv6 dessa interface, o que preferência ao fazer uma conexão com a Internet?',
			'a)	fe80::aebc:32ff:fe96:822b%en0',
			'b)	2001:470:5:516:aebc:32ff:fe96:822b',
			'c)	2001:470:5:516:1588:89ea:8369:1181',
			'd)	Ninguna de las anteriores'
		];

	}

	$( "#commandQuestion" ).html(command10);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==3){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(10);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(10);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}

function Question11(){

	var command11="show ip bgp <br>2001:218:8000::/38                    2001:1338:ffff:ffff::3                                          0 20312 20080 6939 2914 i";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'¿Cuál es el AS de Origen?',
			'a)	1.0.128.0',
			'b)	2914',//c
			'c)	11562',
			'd)	i'
		];
		var question2=[

			'¿Cuál es el AS_PATH?',
			'a. 1.0.128.0',
			'b. 23969',
			'c. 11562',
			'd. 20312 20080 6939 2914 '// c
		];

	}if(localStorage.getItem("language")==2){

		question1=[

			'What is the AS of Origin?',
			'a)	1.0.128.0',
			'b)	2914',
			'c)	11562',
			'd)	i'
		];
		var question2=[

			'What is the AS_PATH?',
			'a. 1.0.128.0',
			'b. 23969',
			'c. 11562',
			'd. 20312 20080 6939 2914 '// c
		];

	}else if(localStorage.getItem("language")==3){

		question1=[

			'Qual é o AS de origem?',
			'a)	1.0.128.0',
			'b)	2914',
			'c)	11562',
			'd)	i'
		];
		var question2=[

			'O que é o AS_PATH?',
			'a. 1.0.128.0',
			'b. 23969',
			'c. 11562',
			'd. 20312 20080 6939 2914 '// c
		];

	}

	var options=Math.floor((Math.random() * 2) + 1);

	$( "#commandQuestion" ).html(command11);

	switch(options) {

	    case 1:

	    	$( "#titleQuestion" ).html(question1[0]);
	        

	        for (var i =1; i < question1.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==2){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(11);correcta("+i+");");

				}else{
					var co = document.createElement("img");
					co.setAttribute("src","../../img/x.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(11);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question1.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question1[j];

			}

	        break;

	    case 2:

	    	$( "#titleQuestion" ).html(question2[0]);


	    	for (var i =1; i < question2.length; i++) {

			    var respuesta=document.createElement("div");

				respuesta.setAttribute("class","respuesta");

				respuesta.setAttribute("id","respuesta"+i);


				if(i==4){

					var co = document.createElement("img");
					co.setAttribute("src","../../img/Approve_icon.svg.png");
					co.setAttribute("id","imag_respuesta"+i);
					co.setAttribute("style","display:none;width:20px;padding:2px;");
					respuesta.appendChild(co);	
					respuesta.setAttribute("onclick","score(11);correcta("+i+");");

				}else{

					respuesta.setAttribute("onclick","score(11);incorrecta("+i+");");

				}

				document.getElementById("Questions").appendChild(respuesta);
			}

			for(var j=1; j < question2.length; j++) {

				document.getElementById("respuesta"+j).innerHTML +=question2[j];

			}

	        
	     	break;

	     }
}

function Question12(){

	var command12="show ip bgp <br>1.0.128.0/24     200.75.130.253                         0 11562 52320 4651 9737 23969 i";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'¿Cuál es el Next Hop?',
			'a. 1.0.128.0',
			'b. 23969',
			'c. 200.75.130.253',//c
			'd. 20312 20080 6939 2914'
		];

	}if(localStorage.getItem("language")==2){

		question1=[
			'What is the Next Hop?',
		'a. 1.0.128.0',
			'b. 23969',
			'c. 200.75.130.253',//c
			'd. 20312 20080 6939 2914'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[
			'Qual é o Next Hop?',
			'a. 1.0.128.0',
			'b. 23969',
			'c. 200.75.130.253',//c
			'd. 20312 20080 6939 2914'
		];

	}

	$( "#commandQuestion" ).html(command12);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==3){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(12);correcta("+i+");");

		}else{

			respuesta.setAttribute("onclick","score(12);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}
function Question13(){

	var command13="<img style='width:100%' onclick='Zoom(\"img/pregunta-13.png\", \"Pregunta 13\")' src='img/pregunta-13.png'>";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'De la salida del TCPDUMP que comando fue capturado: ',
			'a. traceroute',
			'b. ping',//c
			'c. snmp',
			'd. http get'
		];

	}if(localStorage.getItem("language")==2){

		question1=[
			'From the following output of the TCPDUMP which command was captured:',
			'a. traceroute',
			'b. ping',//c
			'c. snmp',
			'd. http get'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[
			'Da saída do TCPDUMP que o comando foi capturado:',
			'a. traceroute',
			'b. ping',//c
			'c. snmp',
			'd. http get'
		];

	}

	$( "#commandQuestion" ).html(command13);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==2){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(13);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);
			respuesta.setAttribute("onclick","score(13);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}
function Question14(){

	var command14="<img style='width:100%' onclick='Zoom(\"img/pregunta-14.png\", \"Pregunta 14\")' src='img/pregunta-14.png'>";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'Esta salida wireshark a que protocolo corresponde:',
			'a. DNS',//c
			'b. NTP',
			'c. FTP',
			'd. Telnet'
		];

	}if(localStorage.getItem("language")==2){

		question1=[
			'This output wireshark to which protocol corresponds:',
			'a. DNS',//c
			'b. NTP',
			'c. FTP',
			'd. Telnet'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[
			'Esta solução foi usada em um protocolo correspondente:',
			'a. DNS',//c
			'b. NTP',
			'c. FTP',
			'd. Telnet'
		];

	}

	$( "#commandQuestion" ).html(command14);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==1){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(14);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);
			respuesta.setAttribute("onclick","score(14);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}
function Question15(){

	var command15="<img style='width:100%' onclick='Zoom(\"img/pregunta-15.png\", \"Pregunta 15\")' src='img/pregunta-15.png'>";

	if(localStorage.getItem("language")==1){

		question1=[
   
			'De esta salida de tcpdump que se hizo en la red:',
			'a. Un ping',
			'b. Abrir una página Web',
			'c. Una consulta DNS ',//c
			'd. No se puede saber'
		];

	}if(localStorage.getItem("language")==2){

		question1=[
			'From this tcpdump output that was made on the network:',
			'a. A ping',
			'b. Open a Web page',
			'c. A DNS query',//c
			'd. Can not know'
		];

	}else if(localStorage.getItem("language")==3){

		question1=[
			'Desta saída do tcpdump que foi feita na rede:',
			'a. Um ping',
			'b. Abra uma página da Web',
			'c. Uma consulta de DNS',//c
			'd. Você não pode saber'
		];

	}

	$( "#commandQuestion" ).html(command15);

	$( "#titleQuestion" ).html(question1[0]);

	for (var i =1; i < question1.length; i++) {

	    var respuesta=document.createElement("div");

		respuesta.setAttribute("class","respuesta");

		respuesta.setAttribute("id","respuesta"+i);


		if(i==1){

			var co = document.createElement("img");
			co.setAttribute("src","../../img/Approve_icon.svg.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);	
			respuesta.setAttribute("onclick","score(15);correcta("+i+");");

		}else{
			var co = document.createElement("img");
			co.setAttribute("src","../../img/x.png");
			co.setAttribute("id","imag_respuesta"+i);
			co.setAttribute("style","display:none;width:20px;padding:2px;");
			respuesta.appendChild(co);
			respuesta.setAttribute("onclick","score(15);incorrecta("+i+");");

		}

		document.getElementById("Questions").appendChild(respuesta);
	}

	for(var j=1; j < question1.length; j++) {

		document.getElementById("respuesta"+j).innerHTML +=question1[j];

	}
}


function Zoom(src, tt){
	console.log(tt);
	console.log(src);
	PhotoViewer.show(src,tt);
}
Instagram.isInstalled(function (err, installed) {
    if (installed) {
        console.log("Instagram is", installed); // installed app version on Android
    } else {
        console.log("Instagram is not installed");
    }
});

function ShareScore(){
	if (localStorage.getItem("UserId")!=null){
  var infogame = { "UserId":localStorage.getItem("UserId"), "GameId":5, "TopicId" :1, "levelId" :4,"Score":puntaje};

  var uid = RegisterGame(infogame);

  public_FB();
}
}

function public_TW(){


  var msj="GAME: OUTPUT INTERPRETER TOPIC:IPv4  POINTS: "+puntaje;

  loginGame(msj);
}
function public_IG(){


	var msj="GAME: OUTPUT INTERPRETER TOPIC:IPv4  POINTS: "+puntaje;
	window.plugins.socialsharing.shareViaInstagram(
		'Message via Instagram', 
		'http://angelgame.acostasite.com/images/icon/icon.png','http://angelgame.acostasite.com'
	  );	
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

function public_FB(){

  var msj="GAME: OUTPUT INTERPRETER TOPIC:IPv4  POINTS: "+puntaje;

  $(".fb-xfbml-parse-ignore").attr("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fangelgame.acostasite.com%2FGame%2FPublic.php?description="+msj+"&method=1&amp;src=sdkpreparse");

}