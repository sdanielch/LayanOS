<?php
	include('acceso_db.php'); // incluimos el archivo de conexión a la Base de Datos
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>LayanOS | Registrar miembros</title>
	<link rel="stylesheet" type="text/css" href="/css/default.css" media="screen" />
</head>
<body>
	<div id="login" style="text-align: justify;">
		<b style="color: #FF4444; ">Zona de Registros</b><br />

	 <?php
	    if(isset($_POST['enviar'])) { // comprobamos que se han enviado los datos desde el formulario
	        // creamos una función que nos parmita validar el email
	        function valida_email($correo) {
	            if (preg_match('/^[A-Za-z0-9-_.+%]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/', $correo)) return true;
	            else return false;
	        }
	        // Procedemos a comprobar que los campos del formulario no estén vacíos
	        $sin_espacios = count_chars($_POST['usuario_nombre'], 1);
	        if(!empty($sin_espacios[32])) { // comprobamos que el campo usuario_nombre no tenga espacios en blanco
	            echo "El campo <em>usuario_nombre</em> no debe contener espacios en blanco. <a href='javascript:history.back();'>Reintentar</a>";
	        }elseif(empty($_POST['usuario_nombre'])) { // comprobamos que el campo usuario_nombre no esté vacío
	            echo "No has ingresado tu usuario. <a href='javascript:history.back();'>Reintentar</a>";
	        }elseif(empty($_POST['usuario_clave'])) { // comprobamos que el campo usuario_clave no esté vacío
	            echo "No has ingresado contraseña. <a href='javascript:history.back();'>Reintentar</a>";
	        }elseif($_POST['usuario_clave'] != $_POST['usuario_clave_conf']) { // comprobamos que las contraseñas ingresadas coincidan
	            echo "Las contraseñas ingresadas no coinciden. <a href='javascript:history.back();'>Reintentar</a>";
	        }elseif(!valida_email($_POST['usuario_email'])) { // validamos que el email ingresado sea correcto
	            echo "El email ingresado no es válido. <a href='javascript:history.back();'>Reintentar</a>";
	        }else {
	            // "limpiamos" los campos del formulario de posibles códigos maliciosos
	            $usuario_nombre = mysql_real_escape_string($_POST['usuario_nombre']);
	            $usuario_clave = mysql_real_escape_string($_POST['usuario_clave']);
	            $usuario_email = mysql_real_escape_string($_POST['usuario_email']);
	            // comprobamos que el usuario ingresado no haya sido registrado antes
	            $sql = mysql_query("SELECT usuario_nombre FROM usuarios WHERE usuario_nombre='".$usuario_nombre."'");
	            if(mysql_num_rows($sql) > 0) {
	                echo "El nombre usuario elegido ya ha sido registrado anteriormente. <a href='javascript:history.back();'>Reintentar</a>";
	            }else {
	                $usuario_clave = md5($usuario_clave); // encriptamos la contraseña ingresada con md5
	                // ingresamos los datos a la BD
	                $reg = mysql_query("INSERT INTO usuarios (usuario_nombre, usuario_clave, usuario_email, usuario_freg) VALUES ('".$usuario_nombre."', '".$usuario_clave."', '".$usuario_email."', NOW())");
	                if($reg) {
	                    echo "Datos ingresados correctamente.";
	                }else {
	                    echo "ha ocurrido un error y no se registraron los datos.";
	                }
	            }
	        }
	    }else {
	?>
	Desde aquí podrá crear un nuevo usuario para nuestra plataforma, asegurese de responder bien los campos y anotar en un papel su contraseña, en caso de perder su contraseña podemos enviarle una nueva clave generada a su correo <a href="recuperar_contrasena.php">pinchando aquí</a>.
		<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
		    <input type="text" name="usuario_nombre" maxlength="15" placeholder="Nombre de usuario" /><br />
		    <input type="password" name="usuario_clave" maxlength="15" placeholder="Contraseña" /><br />
		    <input type="password" name="usuario_clave_conf" maxlength="15" placeholder="Repita contraseña" /><br />
		    <input type="text" name="usuario_email" maxlength="50" placeholder="Email" /><br />
				<div style="position: absolute; bottom: 0px; left: 0px; width: 100%; padding: 10px; box-sizing: border-box;">
		    <input type="submit" name="enviar" value="Registrar" style="width: 49%;"/>
		    <input type="reset" value="Borrar" style="width: 49%;" />
			</div>
		</form>
	<?php
	    }
	?>
</div>
</body>
</html>
