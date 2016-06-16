function configuracion(){
  var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";

  return ruta;
}

function Register(info3){
  // console.log(ruta);
  console.log('Info 3 me trae esto');
  console.log(info3);
  $.ajax({
     type: "POST", //************************** Por Revisar la concatenacion******************//
     // para la imagen se puede utilizar "small, normal, album, large, square", segun el tamaño deseado
    //  url: "http://angelgame.acostasite.com/ApiAngel/Api/register/" +data.name+ "/  " +data.id + "/  " + "/  " +'http://graph.facebook.com/' + data.id + '/picture?type=normal',
                                                                    //Nombre-         Apellido-      Token-        Email-     UserNamre-     Image-     MethodId
     url: "http://angelgame.acostasite.com/ApiAngel/Api/register/" +info3.name+ "/" + null + "/" +info3.id + "/" + null + "/" +null+ "/" +null+ "/" + "1.json",
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
  console.log('consulta de perfil API');
})
$('#BtRegister').click(function(){
  Register(info3);
  console.log('registro de perfil API');

})


function Profile(){
   console.log(ruta);
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
