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
        alert('Disculpe, existió un problema al registrar Game');
    }
 
  });
}
