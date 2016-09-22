<?php

	$description=$_GET['description'];

	$method=$_GET['method'];

	if(intval($method)!=1)
	{
     header('Location: index.html');
	}
?>

<html>

  <head>

    <meta property="og:title" content="A.N.G.E.L"/> 
    <meta property="og:description" content=<?php echo $description; ?>/> 
    <meta property="og:image" content="http://angelgame.acostasite.com/Game/img/memory_img.png" />

  </head>

  <body>

  </body>

</html>