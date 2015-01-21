<?php
	session_start();
	include('acceso_db.php');
?>
<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
	    if(empty($_SESSION['usuario_nombre'])) {
				header("Location: ../index.php");
				// comprobamos que las variables de sesión estén vacías
	?>
	        <form action="comprobar.php" method="post">
	            <label>Usuario:</label><br />
	            <input type="text" name="usuario_nombre" /><br />
	            <label>Contraseña:</label><br />
	            <input type="password" name="usuario_clave" /><br />
	            <a href="recuperar_contrasena.php">Recuperar contraseña</a><br />
	            <input type="submit" name="enviar" value="Ingresar" />
	        </form>
	<?php
	    }else {
	?>
	        <p>Hola <strong><?=$_SESSION['usuario_nombre']?></strong> | <a href="logout.php">Salir</a></p>
	<?php
	    }
	?>
</body>
</html>
