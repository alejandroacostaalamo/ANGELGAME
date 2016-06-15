$('#Login').click(function(){
  login();
})
$('#GetInfo').click(function(){
  getInfo();
})


// Defaults to sessionStorage for storing the Facebook token
openFB.init({appId: '{MY-appId}'});

//  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
openFB.init({appId: '{MY-appId}', tokenStore: window.localStorage});

function login() {
   openFB.login(
           function(response) {
               if(response.status === 'connected') {
                   alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
               } else {
                   alert('Facebook login failed: ' + response.error);
               }
             }, {scope: 'user_games_activity,email,public_profile,publish_actions'});
}

function getInfo() {
   openFB.api({
       path: '/me',
       success: function(data) {
           console.log(JSON.stringify(data));
           document.getElementById("userName").innerHTML = data.name;
           // document.getElementById("userEmail").innerHTML = data.email;
           document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
           return data;
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
               alert('Logout successful');
           },
           errorHandler);
}

function errorHandler(error) {
   alert(error.message);
}
