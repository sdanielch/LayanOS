<?php
    session_start();
    include('php/acceso_db.php');
?>
<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/default.css" media="screen" />
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
<script type="text/javascript">
    //Iniciamos JQuery
    $(function(){
        console.log("cargado JQUERY");
        $(".submit").prepend("<i class=\"fa fa-space-shuttle\" style=\" float: left; \"> </i> ")
    });
</script>

	<title>LayanOS | Ventana de acceso </title>
</head>
<body>



  <style>

body {
  padding: 0px;
  background:#181818 url('http://4.bp.blogspot.com/-NyrZXCyYV7M/USYtC0CChNI/AAAAAAAAAlo/I1IFZt6eYnY/s1600/Color-Wallpaper-for-desktop.png') no-repeat center top fixed;

}
@supports (background-size: cover) {
  body {
    background: #181818 url('http://4.bp.blogspot.com/-NyrZXCyYV7M/USYtC0CChNI/AAAAAAAAAlo/I1IFZt6eYnY/s1600/Color-Wallpaper-for-desktop.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
#login {
  background: rgba(0,0,0,0.75) !important;
}
#creditos {
  position: fixed;
  bottom: 30px;
  right: 20px;
  padding: 10px;
  background: rgba(0,0,0,0.75);
  font-family: Arial;
  color: #CCC;
  font-size: 10px;
  text-align: center;
  line-height: 1.4;
  opacity: 0.1;
}
#creditos:hover {
  opacity: 1;
}

  </style>

<div id="creditos">
Credits: LayanOS. Web Desktop developed and designed by <a href="http://www.facebook.com/sdanielch">@sdanielch</a>
<br />
&copy; Copyright 2016 - All right Reserved
</div>
  <div id="login">
	<?php
	    if(isset($_SESSION['usuario_nombre'])) {
	?>
	        Sesión iniciada como: <a href="php/perfil.php?id=<?=$_SESSION['usuario_id']?>"><strong><?=$_SESSION['usuario_nombre']?></strong></a><br /><br />Pulse sobre el botón "Siguiente" para entrar en su panel de usuario. Por el contrario, pulse en "Desloguear" si quiere salir de la plataforma.
       



          <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; padding: 10px; box-sizing: border-box;">
            <center>
          <input type="button" name="enviar" value="<- Desloguear" style="background: #484848; width: 49%;" onclick="window.location = 'php/logout.php';" />
          <input type="button" name="enviar" value="Siguiente ->" onclick="window.location = 'php/app.php';" style="width: 49%;" />
          </center>
</div>


	<?php
	    }else {
	?>


<center>
<div style="font-size: 128px; color: #BCBCBC;">
  <i class="fa fa-globe" aria-hidden="true"></i>
</div>
</center>
  <form action="php/comprobar.php" method="post" >
    <input type="text" name="usuario_nombre" placeholder="Usuario" style="background-image: url('img/user_24.png') no-repeat right top;" required readonly onfocus="this.removeAttribute('readonly');" />
    <input type="password" name="usuario_clave" placeholder="Contraseña" required readonly onfocus="this.removeAttribute('readonly');" />

      <button type="submit" name="enviar" class="submit">Iniciar sesión</button>
  </form>
<br /><center>
  <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; padding: 10px; box-sizing: border-box;">
  
  <input type="button" name="" value="Ayuda" style="background: #484848; width: 100px; float: right;" onclick="window.location = 'php/recuperar_contrasena.php';" />
</div>
</center>
	<?php
	    }
	?></div>
</body>
</html>
