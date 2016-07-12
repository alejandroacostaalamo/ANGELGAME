function configuracion(){
  var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";
  //var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";

  return ruta;
}
var Registrado = false;
function Register(info3){
  // alert(ruta);
  //alert('Info 3 me trae esto');
  //alert(info3);
  $.ajax({
     type: "POST", //************************** Por Revisar la concatenacion******************//
     // para la imagen se puede utilizar "small, normal, album, large, square", segun el tamaño deseado
    //  url: "http://angelgame.acostasite.com/ApiAngel/Api/register/" +data.name+ "/  " +data.id + "/  " + "/  " +'http://graph.facebook.com/' + data.id + '/picture?type=normal',
                                                                    //Nombre-         Apellido-      Token-        Email-     UserNamre-     Image-     MethodId
     url: configuracion()+"/register/" +info3.name+ "/" +info3.lastName+ "/" +info3.id + "/" + info3.email + "/" +null+ "/" +null+ "/" + "1.json",
     cache: false,                                                                                            //**** Para traer el email hace falta la aprobacion de facebook
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
     success: function (data) {
          //alert(data.user);
        //  alert('Registro Exitoso');
          var registrado = data.user.Id;
          localStorage.setItem('UserId', registrado);
        //  alert(registrado);
          return Registrado;
     }
  });
}

$('.BtProfile').click(function(){
  Profile();
  alert('consulta de perfil API');
})
$('.BtRegister').click(function(){
  //Register(info3);
  alert('registro de perfil API');

})


function Profile(){
  $.ajax({
     type: "POST",
     url:  configuracion()+"/profile/"+info3.id+".json",
     cache: false,
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: "",
     success: function (data) {
          if (data.user[0] !=null ) {
            alert(data.user[0]);
            localStorage.setItem('sesionIni', 'true');
          }else {
            alert('Usuario No existe');
            // localStorage.setItem('sesionIni', 'false');
            $('#UserModal').modal('show', getInfo());
          }
     }
  });
}

$(document).ready(function(){

})
