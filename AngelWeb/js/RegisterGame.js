function RegisterGame(infogame){
 
 // llamado al servicio score para guardar informacion del juego

  $.ajax({
     type: "POST",
     url:"http://angelgame.acostasite.com/ApiAngel/Api/score/" +infogame.UserId+ "/" +infogame.GameId+ "/" +infogame.TopicId + "/" + infogame.levelId + "/" +infogame.Score+".json",
     cache: false,                                                                                            //**** Para traer el email hace falta la aprobacion de facebook
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",


     error : function(xhr, status) {

      alert("no se pudieron registrar los datos");
    }
 
  });
}

  
function loginGame(msj,img,game){


  $.ajax({
     type: "POST",
     url: configuracion()+"/Publication/"+msj+"/"+img+"/"+game+".json",
     cache: false, 
     contentType: "application/json; charset=utf-8",                                                                                         
     dataType: "html",
     data: "",
     success : function(data) {

      
                        
     },

     error : function(xhr, status) {
       
    }

  });

  $.ajax({
     type: "POST",
     url: configuracion()+"/method2.json",
     cache: false, 
     contentType: "application/json; charset=utf-8",                                                                                         
     dataType: "html",
     data: "",
     success : function(data) {

                        
     },

     error : function(xhr, status) {
        alert('Disculpe, no se pudo agregar la variable de sesion');
    }

  });

  $.ajax({
     type: "POST",
     url: "http://angelgame.acostasite.com/folder/loginToTwitter.php",
     cache: false,                                                                                          
     dataType: "html",
     data: "",
     success : function(data) {

      var validaciones=String(data).trim();
      
      window.location='https://api.twitter.com/oauth/authorize?'+validaciones;
                        
     },

     error : function(xhr, status) {
        alert('Disculpe, no se pudo registrar en twitter');
    }

  });
}

