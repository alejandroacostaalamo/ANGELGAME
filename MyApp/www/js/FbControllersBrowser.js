$('#Login').click(function(){
  login();
})
$('#GetInfo').click(function(){
  getInfo();
})

// openFB.init('1584007955262478'); // Defaults to sessionStorage for storing the Facebook token

//  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
openFB.init({appId: '1584007955262478', tokenStore: window.localStorage});

 function login() {
     openFB.login('email',
             function() {
                 alert('Facebook login succeeded');
             },
             function() {
                 alert('Facebook login failed');
             });
 }

 function getInfo() {
     openFB.api({
         path: '/me',
         success: function(data) {
             console.log(JSON.stringify(data));
             document.getElementById("userName").innerHTML = data.name;
         },
         error: errorHandler});
 }

 function share() {
     openFB.api({
         method: 'POST',
         path: '/me/feed',
         params: {
             message: 'Testing Facebook APIs'
         },
         success: function(data) {
             alert('the item was posted on Facebook');
         },
         error: errorHandler});
 }

 function revoke() {
     openFB.revokePermissions(
             function() {
                 alert('Permissions revoked');
             },
             errorHandler);
 }

 function errorHandler(error) {
     alert(error.message);
 }
