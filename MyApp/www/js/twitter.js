var optionsTwitter = {
    consumerKey: 'JrI34FiA1Y63RmKSRImPBFATK',
    consumerSecret: 'x1sHCguShXRA3YyZhs3tUIT87kDRbiSoi2I6Exwyp1RU6YTlro',
};
    var requestParams;
    var accessParams;
   
   oauth = OAuth(optionsTwitter);
function loginTwitter() {
  console.log("Ejecutando entrada en Twitter");
    oauth.get('https://twitter.com/oauth/request_token',
      function(data) {
        requestParams = data.text;
        ref = window.open('https://api.twitter.com/oauth/authorize?'+data.text, '_blank','location=no');
        ref.addEventListener("loadstart", function(iABObject) {
                  if(iABObject.url.match(/MIURL.com/)) {
                    ref.close();
                    autorizar(iABObject);
                  }
                }); 
        },
        function(data) {
          console.log("ERROR: "+ JSON.stringify(data));
        }
);
}
 
function autorizar(o) {
    var currentUrl = o.url;
  var query = currentUrl.match(/oauth_verifier(.+)/);
    for (var i = 0; i &lt; query.length; i++) {
      parameter = query[i].split("=");
      if (parameter.length === 1) {
          parameter[1] = "";
      }
  }
        oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier='+parameter[1]+'&amp;'+requestParams,
          function(data) {
            var accessParams = {};
            var qvars_tmp = data.text.split('&amp;');
            for (var i = 0; i &lt; qvars_tmp.length; i++) {;
              var y = qvars_tmp[i].split('=');
              accessParams[y[0]] = decodeURIComponent(y[1]);
            };
            optionsTwitter.accessTokenKey = accessParams.oauth_token; // This is saved when they first sign in
            optionsTwitter.accessTokenSecret = accessParams.oauth_token_secret;
            oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);
           ExtraerDatosUserTwitter(); //LLamamos a la función para extraer los datos del usuario de Twitter.
          },
          function(data) { 
           console.log("ERROR Verificando " + JSON.stringify(data));
          }
        );        
    }
    function ExtraerDatosUserTwitter() {
   oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
       	        function(data) {
       		     console.log(JSON.stringify(data));
              var entry = JSON.parse(data.text);
                     //Ya tenemos todos los datos almacenados en la variable entry
                });
   }