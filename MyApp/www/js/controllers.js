



function configuracion(){
  var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";
  
  return ruta;
}



var Registrado = false;


function Register(info3){
  // alert(ruta);
  //alert('Info 3 me trae esto');
  //alert(info3);
  $.ajax({
     type: "POST",
     // para la imagen se puede utilizar "small, normal, album, large, square", segun el tamaño deseado
     //  url: "http://angelgame.acostasite.com/ApiAngel/Api/register/" +data.name+ "/  " +data.id + "/  " + "/  " +'http://graph.facebook.com/' + data.id + '/picture?type=normal',
                                        //Nombre-         Apellido-      Token-        Email-     UserNamre-     Image-     MethodId
     url: configuracion()+"/register/" +info3.name+ "/" +info3.lastName+ "/" +info3.id + "/" + info3.email + "/" +info3.username+ "/" +null+ "/" +info3.method+".json",
     cache: false,                                                                                            //**** Para traer el email hace falta la aprobacion de facebook
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
     success : function(data) {

     	var registrado=data.user.Id;

     	localStorage.setItem('UserId', registrado);

     	localStorage.setItem('method', info3.method);

     	Authentication();

     	sesion();

     },

     error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    }
 
  });
}




$('.BtProfile').click(function(){
  Profile();
  alert('consulta de perfil API');
});


$('.BtRegister').click(function(){
  //Register(info3);
  alert('registro de perfil API');

});


function Profile(){
  $.ajax({
     type: "POST",
     url:  configuracion()+"/profile/"+info3.id+".json",
     cache: false,
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
     success: function (data) {
          if (data.user[0] !=null ) {
            alert(data.user[0]);
            localStorage.setItem('sesionIni', 'true');
          }else {
            // localStorage.setItem('sesionIni', 'false');
            $('#UserModal').modal('show', getInfo());
          }
     }
  });
}


// Twitter
var options = { 

    consumerKey: 'JrI34FiA1Y63RmKSRImPBFATK',
    consumerSecret: 'x1sHCguShXRA3YyZhs3tUIT87kDRbiSoi2I6Exwyp1RU6YTlro',
    callbackUrl: 'http://angelgame.acostasite.com/ApiAngel/Api'

};
	

var callbackUrl= 'http://angelgame.acostasite.com/ApiAngel/Api';


$('.LoginTwitter').click(function(){
  loginTwitter();
});




var cb;
var requestParams;



function loginTwitter() {
	
	var oauth = OAuth(options);
	
	oauth.get('https://api.twitter.com/oauth/request_token',
	
        function(data) {
            requestParams = data.text;
     
            cb=window.open('https://api.twitter.com/oauth/authorize?'+data.text, 
                    { showLocationBar : false });   
			cb.addEventListener('loadstop', function(loc){
                                              TwitterSuccess(loc);

                                              });					
        },
        function(data) { 
            alert('Error : No Authorization');          
        }
	);
}



function TwitterSuccess(loc){
	// If not in call back
	if (!(loc.url.indexOf(callbackUrl) >-1)){
		return;
	}

	// If user hit "No, thanks" when asked to authorize access
	if (loc.url.indexOf(callbackUrl+"/?denied") >= 0) {
		alert('User declined access');
		cb.close();		
		return;
	}

	// Same as above, but user went to app's homepage instead
	// of back to app. Don't close the browser in this case.
	if (loc.url === (callbackUrl+"/")) {
		alert('User declined access');
		return;
	}
	
	
	// The supplied oauth_callback_url for this session is being loaded
	
	if (loc.url.indexOf(callbackUrl+"?") >= 0) {
		
		var index, verifier = '';   
		
		var params = loc.url.substr(loc.url.indexOf('?') + 1);
		
		params = params.split('&');
		
		for (var i = 0; i < params.length; i++) {
			
			var y = params[i].split('=');
			
			if(y[0] === 'oauth_verifier') {
				
				verifier = y[1];
			}
		}
		
//__________________________________________________________________________________________________________

		// Tomar el user de twitter
		// Exchange request token for access token
		var oauth = OAuth(options);
		oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier='+verifier+'&'+requestParams,
				function(data) {  
				
					var accessParams = {};
					var qvars_tmp = data.text.split('&');
					for (var i = 0; i < qvars_tmp.length; i++) {
						var y = qvars_tmp[i].split('=');
						accessParams[y[0]] = decodeURIComponent(y[1]);
					}
					
					
					console.log('AppLaudLog: ' + accessParams.oauth_token + ' : ' + accessParams.oauth_token_secret);
					
					
					
					oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);
					
					// Save access token/key in localStorage
					//var accessData = {};
					//accessData.accessTokenKey = accessParams.oauth_token;
					//accessData.accessTokenSecret = accessParams.oauth_token_secret;
					//console.log("AppLaudLog: Storing token key/secret in localStorage");
					//localStorage.setItem(localStoreKey, JSON.stringify(accessData));
					
					 oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
							function(data) {
								
							  
								
							   var entry = JSON.parse(data.text);
								
							   var info3 = { "name" : "", "lastName"  : "", "email" : "", "id" : "","username" : "", "method":"" };
								
							   info3.email = entry.screen_name + "@twitter.com";

							   localStorage.setItem('entry.name', entry.name);

							   localStorage.setItem('entry.screen_name',entry.screen_name);
							   
							   document.getElementById("userName").innerHTML = entry.name;

							   document.getElementById("userPic").src='https://twitter.com/1.1/'+entry.screen_name+'/?size=normal';
							   
							  //document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=normal';
							  //alert(data.id);
							  // Name and lastname
							  // Nombre y apellido
							  	  var username = entry.name;
								  // Name and lastname
						          // Nombre y apellido
						               var strName = username.split(' ');
						               var name = '';
						               var lstName = '';
						               switch (strName.length)
						               {
						                   case 1:
						                       name = strName[0];
						                       break;
						                   case 2:
						                       name = strName[0];
						                       lstName = strName[1];
						                       break;
						                   case 3:
						                       name = strName[0] + " " + strName[1];
						                       lstName = strName[2];
						                       break;
						                   default:
						                       name = strName[0] + " " + strName[1];
						                       lstName = strName[2] + " " + strName[3];
						                       break;
						               }

								   	info3.lastName = lstName;

								 	info3.name = name;

								 	info3.username = entry.screen_name;
	
								  	info3.email = entry.id_str+"@twitter.com";
								  
								  	info3.id = entry.id_str;

								  	info3.method=2;

								  	var uid = Register(info3);

								  	
                   					

							},
							function(data) { 
								alert('Error getting user credentials'); 
								console.log("AppLaudLog: Error " + data); 
							}
					);                                         
					cb.close();
			},
			function(data) { 
				alert('Error : No Authorization'); 
				console.log("AppLaudLog: 1 Error " + data);                             
			}
		);
	}
      		  
}

// Fin twitter