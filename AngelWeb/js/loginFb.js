  function statusChangeCallback(response) {
    // console.log('statusChangeCallback');
    // console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }
  //Una vez que se esta logueado mantiene la consulta activa de los datos
  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // }

  //Carga los datos de la aplicacion
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1584007955262478',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.2' // use version 2.2
    });
  //
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

    };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.6&appId=1584007955262478";
    fjs.parentNode.insertBefore(js, fjs);
    console.log(js);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
        // FB.api("/{user-id", function (response) {
        //       if (response && !response.error) {
        //         /* handle the result */
        //         console.log(response.id);
        //       }
        //
        // });
  }
  // function logout(){
  //
  // }
  function prueba(){
    FB.api(
    '/me/feed',
    'POST',
    {"message":"\"Hello World\""},
    function(response) {
        // Insert your code here
        console.log('holaaaaaaaa');
    }
);
  }
  function ShareScore(){
    // FB.api("/me/achievements", "POST",
    //   {
    //       "achievement": "$('.score')"
    //   },
    //   function (response) {
    //     if (response && !response.error) {
    //       console.log('holaaaa');
    //     }
    //   }
    // );
    FB.api("/me/email/", "GET",
      function (response) {
        if (response && !response.error) {
          console.log(response);
        }
      }
    );
  }
