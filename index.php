<?php
    session_start();
    include('php/acceso_db.php');
?>
<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="/css/default.css" media="screen" />
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">

	<title>LayanOS | Usuario</title>
</head>
<body>
  <div id="login">
	<?php
	    if(isset($_SESSION['usuario_nombre'])) {
	?>
	        Ingresado como: <a href="php/perfil.php?id=<?=$_SESSION['usuario_id']?>"><strong><?=$_SESSION['usuario_nombre']?></strong></a><br /><br />Su perfil de usuario:<br />
          <?php
          $perfil = mysql_query("SELECT * FROM usuarios WHERE usuario_id='".$_SESSION['usuario_id']."'") or die(mysql_error());
          if(mysql_num_rows($perfil)) { // Comprobamos que exista el registro con la ID ingresada
            $row = mysql_fetch_array($perfil);
            $id = $row["usuario_id"];
            $nick = $row["usuario_nombre"];
            $email = $row["usuario_email"];
            $freg = $row["usuario_freg"];
            ?>

            <strong>Nick:</strong> <?=$nick?><br />
            <strong>Email:</strong> <?=$email?><br />
            <strong>Registrado el:</strong> <?=$freg?><br />
<?php } ?>

          <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; padding: 10px; box-sizing: border-box;">
            <center>
          <input type="button" name="enviar" value="Cerrar sesión" style="background: #484848; width: 49%;" onclick="window.location = 'php/logout.php';" />
          <input type="button" name="enviar" value="Ingresar en la aplicación" onclick="window.location = 'php/app.php';" style="width: 49%;" />
          </center>
</div>


	<?php
	    }else {
	?>
<center>
  <img src="img/User_Circle.png" style="width: 128px;" />
</center>
  <form action="php/comprobar.php" method="post">
    <input type="text" name="usuario_nombre" placeholder="Usuario" style="background-image: url('img/user_24.png') no-repeat right top;" required />
    <input type="password" name="usuario_clave" placeholder="Contraseña" required />

    <input type="submit" name="enviar" value="Ingresar" />
  </form>
<br /><center>
  <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; padding: 10px; box-sizing: border-box;">
  <input type="button" name="" value="Registrarse" style="background: #656565; width: 49%;" onclick="window.location = 'php/registro.php';" />
  <input type="button" name="" value="Ayuda" style="background: #484848; width: 49%;" onclick="window.location = 'php/recuperar_contrasena.php';" />
</div>
</center>
	<?php
	    }
	?></div>
</body>
</html>
