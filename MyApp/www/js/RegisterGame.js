function RegisterGame(infogame){
 
 // llamado al servicio score para guardar informacion del juego



  $.ajax({
     type: "POST",
     url:"https://angelgame.acostasite.com/ApiAngel/Api/score/" +infogame.UserId+ "/" +infogame.GameId+ "/" +infogame.TopicId + "/" + infogame.levelId + "/" +infogame.Score+".json",
     cache: false,                                                                                            //**** Para traer el email hace falta la aprobacion de facebook
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
    success: function(x) {

      console.log(" se registraron los datos");
      console.log(x);
      console.log("https://angelgame.acostasite.com/ApiAngel/Api/score/" +infogame.UserId+ "/" +infogame.GameId+ "/" +infogame.TopicId + "/" + infogame.levelId + "/" +infogame.Score+".json");
    },
     error : function(xhr, status) {

      alert("no se pudieron registrar los datos");
    }
 
  });
}



var options = { 

    consumerKey: 'JrI34FiA1Y63RmKSRImPBFATK',
    consumerSecret: 'x1sHCguShXRA3YyZhs3tUIT87kDRbiSoi2I6Exwyp1RU6YTlro',
    callbackUrl: 'http://angelgame.acostasite.com/ApiAngel/Api'

};
var callbackUrl= 'http://angelgame.acostasite.com/ApiAngel/Api';
var cb;
var requestParams;

var mensaje='';

var link='';

var dir='https://angelgame.acostasite.com/Game/';
  
function loginGame(msj,src){

  mensaje=msj;

  link=src;

  var oauth = OAuth(options);
  
  oauth.get('https://api.twitter.com/oauth/request_token',
  
        function(data) {
            requestParams = data.text;
     
            cb=window.open('https://api.twitter.com/oauth/authorize?'+data.text, '_blank',
                    { showLocationBar : false });   
      cb.addEventListener('loadstop', function(loc){
                                              TwitterGame(loc);
                                              });         
        },
        function(data) { 
            alert('Error : No Authorization');          
        }
  );
}

function TwitterGame(loc){

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
    
    var oauth = OAuth(options);

    oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier='+verifier+'&'+requestParams,
        function(data) { 

          var accessParams = {};
          var qvars_tmp = data.text.split('&');
          for (var i = 0; i < qvars_tmp.length; i++) {
            var y = qvars_tmp[i].split('=');
            accessParams[y[0]] = decodeURIComponent(y[1]);
          }

         oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);

            oauth.post('https://api.twitter.com/1.1/statuses/update.json?status='+mensaje+' '+dir,
            function(data) { 

              alert(data);
            });
            cb.close();

            succesPublic(mensaje,link);
            
        },function(data) { 
        alert('Error : No Authorization'); 
        console.log("AppLaudLog: 1 Error " + data);                             
      }
    );

  }

  
}


function succesPublic(description,src){

  var modal='<div class="modal fade" id="public_twitter" style="z-index:7000;" role="dialog" aria-labelledby="basicModal" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>Your publication was a success</h3></div><div class="modal-body row"><div id="img" class="container col-xs-12 col-md-4"></div><div class="container col-xs-12 col-md-8"><h4 id="description"></h4></div></div><div class="modal-footer"><a href="#" data-dismiss="modal"><button>Ok</button></a></div></div></div></div>';

  $( "body" ).append(modal);

  $("#description").append(description);

  $("#img").append('<img src="'+src+'" class="img-responsive" style="width:250px;height:250px">');

  $("#public_twitter").modal("show");
}