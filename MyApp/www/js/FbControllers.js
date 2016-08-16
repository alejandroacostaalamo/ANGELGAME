$('.LoginFB').click(function(){
  login();
});

$('.Login').click(function(){
  $('#InfoModal').modal('show');
});

$('.GetInfo').click(function(){
  $('#UserModal').modal('show');
  getInfo();
});

$('.Logout').click(function(){
  logout();
  Registrado = false;
});

$('#BtRegisterBack').click(function(){
  //Register(info3);
});

var info="";
var info2="";
var info3="";
var u= "http://angelgame.acostasite.com/Game/"; //Url del juego
// localStorage.sesionIni = false;
// Defaults to sessionStorage for storing the Facebook token
// openFB.init({appId: '{MY-appId}'});

//  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
// openFB.init({appId: '{MY-appId}', tokenStore: window.localStorage});
openFB.init({appId: '1584007955262478', tokenStore: window.localStorage});

function login() {
   openFB.login(
           function(response) {
               if(response.status === 'connected') {
                   //alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                   localStorage.setItem('method', 1);
                   sesion();
                   getInfo();

               } else {
                   alert('Facebook login failed: ' + response.error);
               }
             }, {scope: 'user_games_activity,email,public_profile,user_about_me,publish_actions'});
}

function getInfo() {

  if(localStorage.getItem("method")==1){

   openFB.api({
       path: '/me',
       success: function(data) {
           //alert(JSON.stringify(data));
           //alert(data);
           info= JSON.stringify(data);
           info2= JSON.stringify(info);
           //var info3 = { "name" : data.name, "lastName"  : "", "email" : "", "id" : data.id };
           var info3 = { "name" : "", "lastName"  : "", "email" : "", "id" : "","username" : "","method":""};
           document.getElementById("userName").innerHTML = data.name;
           document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=normal';
          //alert(data.id);
          // Name and lastname
          // Nombre y apellido
               var strName = data.name.split(' ');
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
                info3.email = data.id + "@facebook.com";
                info3.id=data.id;
                info3.username=data.name;
                info3.method=1;
                //alert(info3.name);
                //alert(info3.email);
           var uid = Register(info3);
           
            return info3;
       },
       error: errorHandler});

 }else if(localStorage.getItem("method")==2){

     oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
              function(data) {
                
                
                
                 var entry = JSON.parse(data.text);
                
                 var info3 = { "name" : "", "lastName"  : "", "email" : "", "id" : "","username" : "", "method":"" };
                
                 info3.email = entry.screen_name + "@twitter.com";
                 
                 document.getElementById("userName").innerHTML = entry.name;

                 document.getElementById("userPic").src='https://twitter.com/'+entry.screen_name+'/profile_image?size=normal';
                 
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
         

 }

}

function share() {
   openFB.api({
       method: 'POST',
       path: '/me/feed',
       params: {
           message: document.getElementById('Message').value || 'Testing Facebook APIs'
       },
       success: function() {
           alert('the item was posted on Facebook');
       },
       error: errorHandler});
}

function readPermissions() {
   openFB.api({
       method: 'GET',
       path: '/me/permissions',
       success: function(result) {
           alert(JSON.stringify(result.data));
       },
       error: errorHandler
   });
}

function revoke() {
   openFB.revokePermissions(
           function() {
               alert('Permissions revoked');
           },
           errorHandler);
}

function logout() {
   openFB.logout(
           function() {
              $('#userName').text("");
              $('#userPic').removeAttr("src");
              localStorage.clear();// Limpia el localStorage
              sesion();
           },
           errorHandler);
    $('.Login').show();
}

function errorHandler(error) {
   alert(error.message);
}
