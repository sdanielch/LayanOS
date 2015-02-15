<?php
session_start();
include("acceso_db.php");
$pos_panel = $_GET["pos_panel"];
$idioma = $_GET["lang"];
$nombre_de_usuario = $_SESSION['usuario_nombre'];
$fondo_del_panel = $_GET["backpanel"];




// Ejecutamos la consulta 
 if($pos_panel) {

mysql_query("INSERT IGNORE INTO pref_usuarios (usuario, pos_panel, lang, colorpicker) VALUES ('{$nombre_de_usuario}', '{$pos_panel}', '{$idioma}', '{$fondo_del_panel}')");
	if(mysqli_affected_rows() == 0) {

	mysql_query("UPDATE pref_usuarios set pos_panel = '{$pos_panel}', lang = '{$idioma}', colorpicker = '{$fondo_del_panel}' where usuario = '{$nombre_de_usuario}'");

	



	}

 } else { echo "Algo ha fallado, lamentamos las molestias"; }



