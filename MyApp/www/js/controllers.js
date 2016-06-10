function configuracion(){
  var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";

  return ruta;
}

function Register(ruta){
  // console.log(ruta);
  $.ajax({
   type: "POST",
   url: ruta + "/register/jose/crespo/122222222/aa@gg.com/jj/foto.png/2.json",
  //  url: ruta + "/score/100/1/1/2.json",
   cache: false,
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   data: "",
   success: function (data) {
        console.log(data);
   }
 });
}

$('#BtProfile').click(function(){
  Profile();
})

function Profile(){
  //  console.log(ruta);
  $.ajax({
     type: "POST",
     url:  "http://angelgame.acostasite.com/ApiAngel/Api/profile/2.json",
     cache: false,
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
     success: function (data) {
          console.log(data.user[0]);
     }
  });
}
