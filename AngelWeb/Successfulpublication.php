<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<title>Successful publication</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/media.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
	<script src='js/jquery.js'></script>
    <script src='js/jquery.min.js'></script>
    <script src="js/bootstrap.min.js"></script>

</head>

<style type="text/css"></style>

<script type="text/javascript">

function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0; i < vars.length; i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable) {
           return pair[1];
       }
   }
   return false;
}

	
	var description=getQueryVariable('message');

	var game=getQueryVariable('game');

	var img=getQueryVariable('image');

	var src=img.replace(/0/g, "/");

	var ret=game.replace(/0/g, "/");

	description=description.replace(/%20/g, " ");


	function exit(){

		window.location="http://angelgame.acostasite.com/Game/";
	}


	$(document).ready(function(){
		

	var modal='<div class="modal fade" id="public_twitter" style="z-index:7000;" role="dialog" aria-labelledby="basicModal" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>Its publication was a success</h3></div><div class="modal-body row"><div id="img" class="container col-xs-12 col-md-4"></div><div class="container col-xs-12 col-md-8"><h4 id="description"></h4></div></div><div class="modal-footer"><a href="javascript:exit();"><button>Ok</button></a></div></div></div></div>';

	$( "body" ).append(modal);

	$("#description").append(description);

	$("#img").append('<img src="'+src+'" class="img-responsive" style="width:250px;height:250px">');

	$("#public_twitter").modal("show");

});

</script>

<body>


</body>
</html>