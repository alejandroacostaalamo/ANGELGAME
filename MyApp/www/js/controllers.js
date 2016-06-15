function configuracion(){
  var ruta = "http://angelgame.acostasite.com/ApiAngel/Api";

  return ruta;
}

function Register(data){
  // console.log(ruta);
  $.ajax({
     type: "POST", //************************** Por Revisar la concatenacion******************//
     url: "http://angelgame.acostasite.com/ApiAngel/Api/register/" +data.name+ "  " +data.id + "  " + "  " +'http://graph.facebook.com/' + data.id + '/picture?type=normal'
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
$('#BtRegister').click(function(){
  Register();
})
// function solicitar(){
//     var peticion=null;
//
//     peticion = ConstructorXMLHttpRequest();
//
//     if (peticion){
//         peticion.open('get', "file.txt", false);
//         peticion.send(null);
//         document.getElementById('texto').innerHTML = peticion.responseText;
//     }
// }

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
