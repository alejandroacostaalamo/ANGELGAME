$('#Login').click(function(){
  login();
})
$('#GetInfo').click(function(){
  getInfo();
})
$('#Logout').click(function(){
  logout();
})

var info="";
var info2="";
var info3="";
// Defaults to sessionStorage for storing the Facebook token
// openFB.init({appId: '{MY-appId}'});

//  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
// openFB.init({appId: '{MY-appId}', tokenStore: window.localStorage});
openFB.init({appId: '{MY-appId}', tokenStore: window.localStorage});

function login() {
   openFB.login(
           function(response) {
               if(response.status === 'connected') {
                   console.log('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                   getInfo();
                   Register();
               } else {
                   alert('Facebook login failed: ' + response.error);
               }
             }, {scope: 'user_games_activity,email,public_profile,user_about_me,publish_actions'});
            //  console.log('Esto contiene SCOPE: ' +scope);
}

function getInfo() {
   openFB.api({
       path: '/me',
       success: function(data) {
           console.log(JSON.stringify(data));
           console.log(data);
           info= JSON.stringify(data);
           info2= JSON.stringify(info);
           info3= data;
          //  var arreglo= [pos1 : info1, pos2 : info2, pos3 : info3];
           document.getElementById("userName").innerHTML = data.name;
           // document.getElementById("userEmail").innerHTML = data.email;
           document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=normal';
          //  return {
          //    info1: info1,
          //    info2: info2,
          //    info3: info3
          //  }
          return info3;
           console.log(info.name);
       },
       error: errorHandler});

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
              alert('Logout successful');
           },
           errorHandler);
}

function errorHandler(error) {
   alert(error.message);
}

$(document).ready(function(){
  getInfo();
})
