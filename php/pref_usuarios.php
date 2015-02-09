<?php
session_start();
include("acceso_db.php");
include("redbean.php");
$pos_panel = $_GET["pos_panel"];
$idioma = "capullo";
$nombre_de_usuario = $_SESSION['usuario_nombre'];


mysql_query("INSERT IGNORE INTO pref_usuarios (usuario, pos_panel) VALUES ('{$nombre_de_usuario}', '{$pos_panel}')");


// Ejecutamos la consulta 
 if($pos_panel) {

	if(mysql_affected_rows() == 0) {

	mysql_query("UPDATE pref_usuarios set pos_panel = '{$pos_panel}' where usuario = '{$nombre_de_usuario}'");
	mysql_query("UPDATE pref_usuarios set idioma = '{$idioma}' where usuario = '{$nombre_de_usuario}'");



	}

 } else { echo "Algo ha fallado, lamentamos las molestias"; }



